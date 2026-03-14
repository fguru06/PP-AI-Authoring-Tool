import{K as bl,P as yl,v as l,F as i,B as e,C as w,H as te,I as ce,E as Ve,D as X,u as E,Q as he,M as it,G as q,L as ee,q as tt,R as hl,f as M,r as L,N as pe,O as Ie,x as pt,S as _t,w as ot,n as xl,i as Il,U as El,y as Et,T as Dt,V as jt,z as Al,p as Ml,J as gl}from"./vue-core-DCl8Fgqc.js";import{u as Pl,d as Tl}from"./vue-ecosystem-Da9kls6U.js";import{u as rt,M as kl,c as Bl,a as Nl,C as zl,A as Ll,b as jl}from"./ConfirmActionModal-DBZonQqQ.js";import{u as dt,b as Dl,g as qt,C as Yt,c as _l,n as ql,p as Rl,s as Ol,m as wl,f as Cl,d as Sl,e as Fl,h as Jt,B as Ul,i as Vl,j as Wl,k as ml,a as $l}from"./projectStore-Bi1utUOI.js";import{_ as nt}from"./index-CyIXC1Ft.js";import{P as Gl,S as Hl,C as Yl,a as Jl,M as Ql,_ as Xl,b as Kl,c as Zl,F as ei,A as ti,T as oi,d as ni}from"./ProgressElement-DiXDROhL.js";import{J as li}from"./jszip-529iNPX7.js";function ii(A){function r(u){var f,H,ae,G,V,me,z,P,a,N,j,Y,g,F,se,oe,we;const c=u.ctrlKey||u.metaKey,p=u.key.toLowerCase(),h=u.target.tagName.toLowerCase(),k=h==="input"||h==="textarea"||u.target.isContentEditable;k&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!u.shiftKey?(u.preventDefault(),(f=A.undo)==null||f.call(A)):c&&(p==="y"||p==="z"&&u.shiftKey)?(u.preventDefault(),(H=A.redo)==null||H.call(A)):c&&p==="c"?(u.preventDefault(),(ae=A.copy)==null||ae.call(A)):c&&p==="v"?(u.preventDefault(),(G=A.paste)==null||G.call(A)):c&&p==="x"?(u.preventDefault(),(V=A.cut)==null||V.call(A)):c&&p==="d"?(u.preventDefault(),(me=A.duplicate)==null||me.call(A)):c&&p==="a"?(u.preventDefault(),(z=A.selectAll)==null||z.call(A)):p==="delete"||p==="backspace"?k||(u.preventDefault(),(P=A.delete)==null||P.call(A)):p==="escape"?(a=A.escape)==null||a.call(A):c&&p==="g"?(u.preventDefault(),(N=A.toggleGrid)==null||N.call(A)):c&&p==="="||c&&p==="+"?(u.preventDefault(),(j=A.zoomIn)==null||j.call(A)):c&&p==="-"?(u.preventDefault(),(Y=A.zoomOut)==null||Y.call(A)):c&&p==="0"?(u.preventDefault(),(g=A.zoomReset)==null||g.call(A)):p==="arrowleft"?(F=A.nudge)==null||F.call(A,-1,0):p==="arrowright"?(se=A.nudge)==null||se.call(A,1,0):p==="arrowup"?(oe=A.nudge)==null||oe.call(A,0,-1):p==="arrowdown"&&((we=A.nudge)==null||we.call(A,0,1)))}bl(()=>window.addEventListener("keydown",r)),yl(()=>window.removeEventListener("keydown",r))}const ai={class:"slide-panel"},si={class:"slide-panel-header"},ri={class:"slide-count"},di={class:"slides-list"},ui=["onClick","onContextmenu","onDragstart","onDrop"],ci={class:"slide-number"},pi=["viewBox"],vi=["x","y","width","height","fill"],fi=["d","stroke"],gi=["d","fill"],mi={class:"slide-footer"},bi={class:"slide-title"},yi=["onClick"],hi={__name:"SlidePanel",setup(A){const r=rt(),u=dt(),c=M(()=>u.getProject(r.projectId)),p=M(()=>qt(c.value)),h=M(()=>{var R,U;return((U=(R=c.value)==null?void 0:R.slides)==null?void 0:U.slice().sort((ve,be)=>ve.order-be.order))||[]}),k=L({show:!1,x:0,y:0,slideId:null});function f(R){r.setCurrentSlide(R)}function H(){const R=h.value.findIndex(ve=>ve.id===r.currentSlideId),U=u.addSlide(r.projectId,R);U&&r.setCurrentSlide(U.id)}function ae(R){var be,le;const U=h.value.findIndex(Ce=>Ce.id===R);u.deleteSlide(r.projectId,R);const ve=((be=c.value)==null?void 0:be.slides)||[];if(ve.length>0){const Ce=ve.slice().sort((D,_)=>D.order-_.order),C=Math.min(U,Ce.length-1);r.setCurrentSlide((le=Ce[C])==null?void 0:le.id)}}function G(R,U){R.preventDefault(),k.value={show:!0,x:R.clientX,y:R.clientY,slideId:U},setTimeout(()=>window.addEventListener("click",V,{once:!0}),0)}function V(){k.value.show=!1}function me(){const R=u.duplicateSlide(r.projectId,k.value.slideId);R&&r.setCurrentSlide(R.id),V()}function z(){ae(k.value.slideId),V()}function P(R,U){R.stopPropagation(),ae(U)}function a(){const R=h.value.findIndex(U=>U.id===k.value.slideId);R>0&&u.reorderSlides(r.projectId,R,R-1),V()}function N(){const R=h.value.findIndex(U=>U.id===k.value.slideId);R<h.value.length-1&&u.reorderSlides(r.projectId,R,R+1),V()}let j=-1;function Y(R,U){j=U,R.dataTransfer.effectAllowed="move"}function g(R,U){R.preventDefault(),j!==-1&&j!==U&&u.reorderSlides(r.projectId,j,U),j=-1}function F(R){return R.backgroundType==="gradient"&&R.backgroundGradient?{background:R.backgroundGradient}:R.backgroundType==="image"&&R.backgroundImage?{backgroundImage:`url(${R.backgroundImage})`,backgroundSize:"cover"}:{background:R.background||"#fff"}}function se(R){return{left:R.x/p.value.width*100+"%",top:R.y/p.value.height*100+"%",width:R.width/p.value.width*100+"%",height:R.height/p.value.height*100+"%"}}function oe(R){var U,ve;return{background:R.type==="shape"?(U=R.content)==null?void 0:U.fillColor:R.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:R.type==="shape"&&((ve=R.content)==null?void 0:ve.shapeType)==="circle"?"50%":void 0}}function we(R){var U;return Dl(R.content||{},R.width||420,R.height||280,((U=c.value)==null?void 0:U.theme)||{})}return(R,U)=>(l(),i("div",ai,[e("div",si,[U[2]||(U[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",ri,w(h.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:H,"data-tooltip":"Add slide","aria-label":"Add slide"},[...U[1]||(U[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",di,[(l(!0),i(te,null,ce(h.value,(ve,be)=>(l(),i("div",{key:ve.id,class:X(["slide-thumb-item",E(r).currentSlideId===ve.id&&"active"]),draggable:"true",onClick:le=>f(ve.id),onContextmenu:le=>G(le,ve.id),onDragstart:le=>Y(le,be),onDragover:U[0]||(U[0]=Ve(()=>{},["prevent"])),onDrop:le=>g(le,be)},[e("div",ci,w(be+1),1),e("div",{class:"slide-thumb",style:he(F(ve))},[(l(!0),i(te,null,ce(ve.elements.slice(0,6),le=>{var Ce;return l(),i("div",{key:le.id,class:"mini-element-frame",style:he(se(le))},[le.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${le.width||420} ${le.height||280}`,preserveAspectRatio:"none"},[we(le).type==="bar"?(l(!0),i(te,{key:0},ce(we(le).cartesian.bars,C=>(l(),i("rect",{key:`mini-bar-${C.id}`,x:C.x,y:C.y,width:C.width,height:C.height,fill:C.color,rx:"6"},null,8,vi))),128)):we(le).type==="line"?(l(),i("path",{key:1,d:we(le).cartesian.linePath,stroke:((Ce=we(le).cartesian.points[0])==null?void 0:Ce.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,fi)):(l(!0),i(te,{key:2},ce(we(le).circle.slices,C=>(l(),i("path",{key:`mini-slice-${C.id}`,d:C.path,fill:C.color},null,8,gi))),128))],8,pi)):(l(),i("div",{key:1,class:"mini-element",style:he(oe(le))},null,4))],4)}),128))],4),e("div",mi,[e("div",bi,w(ve.title||`Slide ${be+1}`),1),h.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:le=>P(le,ve.id)},[...U[3]||(U[3]=[it('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,yi)):q("",!0)])],42,ui))),128))]),e("button",{class:"add-slide-bottom",onClick:H},[...U[4]||(U[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),ee(" Add Slide ",-1)])]),(l(),tt(hl,{to:"body"},[k.value.show?(l(),i("div",{key:0,class:"context-menu",style:he({left:k.value.x+"px",top:k.value.y+"px"})},[e("button",{class:"ctx-item",onClick:me},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:N},"Move Down"),U[5]||(U[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:z},"Delete Slide")],4)):q("",!0)]))]))}},xi=nt(hi,[["__scopeId","data-v-30eea542"]]),ki={class:"blocks-panel"},wi={class:"blocks-panel-header"},Ci={class:"blocks-toolbar"},Si={class:"blocks-categories"},$i=["onClick"],Ii={class:"blocks-panel-body"},Ei={class:"blocks-save-card"},Ai=["disabled"],Mi={class:"blocks-list"},Pi=["onDragstart"],Ti={class:"block-thumb-stage"},Bi={class:"block-card-body"},Ni={class:"block-card-head"},zi={class:"block-name"},Li={class:"block-meta"},ji={key:0},Di={key:1},_i=["onClick"],qi={class:"block-description"},Ri={key:0,class:"block-binding-note"},Oi={class:"block-tags"},Fi=["onClick"],Ui={class:"binding-modal-body"},Vi={class:"binding-modal-intro"},Wi=["for"],Gi=["id","onUpdate:modelValue"],Hi={__name:"BlocksPanel",setup(A){const r=rt(),u=dt(),c=L(""),p=L("all"),h=L(""),k=L("Custom"),f=L(!1),H=L(null),ae=L({}),G=M(()=>u.getProject(r.projectId)),V=M(()=>{var C,D;return(D=(C=G.value)==null?void 0:C.slides)==null?void 0:D.find(_=>_.id===r.currentSlideId)}),me=M(()=>u.getContentBlocks(r.projectId)),z=M(()=>{const C=new Set(["all"]);return me.value.forEach(D=>C.add(D.category||"Custom")),Array.from(C)}),P=M(()=>{var D;const C=new Set(r.selectedElementIds);return(((D=V.value)==null?void 0:D.elements)||[]).filter(_=>C.has(_.id))}),a=M(()=>{var C;return Array.isArray((C=H.value)==null?void 0:C.bindings)?H.value.bindings:[]}),N=M(()=>{const C=c.value.trim().toLowerCase();return me.value.filter(D=>p.value==="all"||(D.category||"Custom")===p.value?C?[D.name,D.description,D.category,...D.tags||[]].join(" ").toLowerCase().includes(C):!0:!1)});function j(C){const D=Array.isArray(C==null?void 0:C.elements)?C.elements:[];if(!D.length)return{minX:0,minY:0,width:1,height:1};const _=Math.min(...D.map(Me=>Number(Me.x||0))),K=Math.min(...D.map(Me=>Number(Me.y||0))),xe=Math.max(...D.map(Me=>Number(Me.x||0)+Number(Me.width||0))),De=Math.max(...D.map(Me=>Number(Me.y||0)+Number(Me.height||0)));return{minX:_,minY:K,width:Math.max(1,xe-_),height:Math.max(1,De-K)}}function Y(C,D){const _=j(C);return{left:`${(Number(D.x||0)-_.minX)/_.width*100}%`,top:`${(Number(D.y||0)-_.minY)/_.height*100}%`,width:`${Number(D.width||0)/_.width*100}%`,height:`${Number(D.height||0)/_.height*100}%`}}function g(C){var D,_,K,xe,De,Me,Re;return C.type==="shape"?{background:((D=C.content)==null?void 0:D.fillColor)||"#cbd5e1",borderRadius:((_=C.content)==null?void 0:_.shapeType)==="circle"?"50%":`${Number(((K=C.content)==null?void 0:K.borderRadius)||10)}px`,border:`${Math.max(0,Number(((xe=C.content)==null?void 0:xe.borderWidth)||0))}px solid ${((De=C.content)==null?void 0:De.borderColor)||"transparent"}`}:C.type==="button"?{background:((Me=C.content)==null?void 0:Me.bgColor)||"#6c47ff",borderRadius:`${Number(((Re=C.content)==null?void 0:Re.borderRadius)||10)}px`}:C.type==="image"||C.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:C.type==="text"||C.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function F(C,D){const _=C.type==="heading"?2:3,K=Math.max(18,100/(_+1.25));return{width:`${D===_-1?72:100}%`,height:`${C.type==="heading"?K:K-2}%`}}function se(C){C.length&&(r.setSelection(C.map(D=>D.id)),r.focusPropertiesSection("content"),r.setActiveTool("select"))}function oe(C){return Array.isArray(C==null?void 0:C.bindings)&&C.bindings.length>0}function we(){f.value=!1,H.value=null,ae.value={}}function R(C,D=null){const _=u.insertContentBlock(r.projectId,r.currentSlideId,C.id,D?{bindingValues:D}:{});se(_)}function U(C){if(!oe(C)){R(C);return}H.value=C,ae.value=Object.fromEntries(C.bindings.map(D=>[D.id,D.defaultValue||""])),f.value=!0}function ve(){H.value&&(R(H.value,{...ae.value}),we())}function be(){var _,K;const C=h.value.trim();if(!C||!P.value.length)return;u.saveSelectionAsContentBlock(r.projectId,r.currentSlideId,P.value.map(xe=>xe.id),{name:C,category:k.value.trim()||"Custom",accent:((K=(_=G.value)==null?void 0:_.theme)==null?void 0:K.primaryColor)||"#6c47ff"})&&(h.value="",p.value="Custom")}function le(C){u.deleteContentBlock(r.projectId,C)}function Ce(C,D){C.dataTransfer&&(C.dataTransfer.effectAllowed="copy",C.dataTransfer.setData(Yt,JSON.stringify({id:D.id})),C.dataTransfer.setData("text/plain",D.name))}return(C,D)=>(l(),i("div",ki,[e("div",wi,[D[5]||(D[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:D[0]||(D[0]=_=>E(r).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...D[4]||(D[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",Ci,[pe(e("input",{"onUpdate:modelValue":D[1]||(D[1]=_=>c.value=_),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[Ie,c.value]]),e("div",Si,[(l(!0),i(te,null,ce(z.value,_=>(l(),i("button",{key:_,type:"button",class:X(["blocks-category-chip",p.value===_&&"active"]),onClick:K=>p.value=_},w(_==="all"?"All":_),11,$i))),128))])]),e("div",Ii,[e("div",Ei,[D[6]||(D[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),D[7]||(D[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),pe(e("input",{"onUpdate:modelValue":D[2]||(D[2]=_=>h.value=_),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[Ie,h.value]]),pe(e("input",{"onUpdate:modelValue":D[3]||(D[3]=_=>k.value=_),class:"input",placeholder:"Category"},null,512),[[Ie,k.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!P.value.length||!h.value.trim(),onClick:be}," Save "+w(P.value.length?`${P.value.length} item${P.value.length>1?"s":""}`:"selection")+" as block ",9,Ai)]),e("div",Mi,[(l(!0),i(te,null,ce(N.value,_=>(l(),i("div",{key:_.id,class:"block-card",draggable:"true",onDragstart:K=>Ce(K,_)},[e("div",{class:"block-thumb",style:he({"--block-accent":_.accent||"#6c47ff"})},[e("div",Ti,[(l(!0),i(te,null,ce(_.elements,K=>(l(),i("div",{key:`${_.id}-${K.type}-${K.x}-${K.y}`,class:"block-thumb-frame",style:he(Y(_,K))},[["text","heading"].includes(K.type)?(l(),i("div",{key:0,class:X(["thumb-text",K.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(te,null,ce(K.type==="heading"?2:3,xe=>(l(),i("span",{key:`${_.id}-${K.type}-${K.x}-${K.y}-${xe}`,class:"thumb-text-line",style:he(F(K,xe-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:he(g(K))},null,4))],4))),128))])],4),e("div",Bi,[e("div",Ni,[e("div",null,[e("div",zi,w(_.name),1),e("div",Li,[ee(w(_.category),1),_.scope==="custom"?(l(),i("span",ji," · Custom")):q("",!0),oe(_)?(l(),i("span",Di," · "+w(_.bindings.length)+" field"+w(_.bindings.length>1?"s":""),1)):q("",!0)])]),_.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:K=>le(_.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...D[8]||(D[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,_i)):q("",!0)]),e("p",qi,w(_.description||"Reusable layout block"),1),oe(_)?(l(),i("div",Ri,"Editable placeholders included")):q("",!0),e("div",Oi,[(l(!0),i(te,null,ce(_.tags||[],K=>(l(),i("span",{key:`${_.id}-${K}`,class:"block-tag"},"#"+w(K),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:K=>U(_)},w(oe(_)?"Insert with Fields":"Insert Block"),9,Fi)])],40,Pi))),128))])]),f.value?(l(),tt(kl,{key:0,title:"Fill Template Fields",size:"md",onClose:we},{footer:pt(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:we},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:ve},"Insert Block")]),default:pt(()=>{var _;return[e("div",Ui,[e("p",Vi,[D[9]||(D[9]=ee(" Customize the placeholder text before inserting ",-1)),e("strong",null,w((_=H.value)==null?void 0:_.name),1),D[10]||(D[10]=ee(". ",-1))]),(l(!0),i(te,null,ce(a.value,K=>(l(),i("div",{key:K.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${K.id}`},w(K.label),9,Wi),pe(e("textarea",{id:`binding-${K.id}`,"onUpdate:modelValue":xe=>ae.value[K.id]=xe,class:"textarea binding-input"},null,8,Gi),[[Ie,ae.value[K.id]]])]))),128))])]}),_:1})):q("",!0)]))}},Yi=nt(Hi,[["__scopeId","data-v-aec67d0c"]]),Ji={class:"layer-panel"},Qi={class:"layer-header panel-section"},Xi={class:"panel-title",style:{"margin-bottom":"0"}},Ki={class:"layer-count"},Zi={key:0,class:"layers-empty"},ea={key:1,class:"layers-list"},ta=["onClick"],oa={class:"layer-type-icon"},na={class:"layer-name"},la={class:"layer-actions"},ia=["onClick","data-tooltip"],aa={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sa={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ra=["onClick","data-tooltip"],da={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ua={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ca=["onClick"],pa=["onClick"],va=["onClick"],fa={__name:"LayerPanel",setup(A){const r=rt(),u=dt(),c=M(()=>u.getProject(r.projectId)),p=M(()=>{var P,a;return(a=(P=c.value)==null?void 0:P.slides)==null?void 0:a.find(N=>N.id===r.currentSlideId)}),h=M(()=>{var P;return[...((P=p.value)==null?void 0:P.elements)||[]].sort((a,N)=>(N.zIndex||0)-(a.zIndex||0))});function k(P){r.selectElement(P)}function f(P){u.updateElement(r.projectId,r.currentSlideId,P.id,{visible:!P.visible})}function H(P){u.updateElement(r.projectId,r.currentSlideId,P.id,{locked:!P.locked})}function ae(P){u.reorderElement(r.projectId,r.currentSlideId,P,"up")}function G(P){u.reorderElement(r.projectId,r.currentSlideId,P,"down")}function V(P){u.deleteElement(r.projectId,r.currentSlideId,P),r.selectedElementId===P&&r.clearSelection()}function me(P){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[P]||"◆"}function z(P){var a,N,j;return(a=P.content)!=null&&a.text?P.content.text.slice(0,24):(N=P.content)!=null&&N.label?P.content.label:(j=P.content)!=null&&j.question?P.content.question.slice(0,24):P.type.charAt(0).toUpperCase()+P.type.slice(1)}return(P,a)=>(l(),i("div",Ji,[e("div",Qi,[e("div",Xi,[a[0]||(a[0]=ee(" Layers ",-1)),e("span",Ki,w(h.value.length),1)])]),h.value.length===0?(l(),i("div",Zi,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",ea,[(l(!0),i(te,null,ce(h.value,N=>(l(),i("div",{key:N.id,class:X(["layer-item",E(r).selectedElementIds.includes(N.id)&&"selected",N.locked&&"locked",!N.visible&&"hidden"]),onClick:j=>k(N.id)},[e("span",oa,w(me(N.type)),1),e("span",na,w(z(N)),1),e("div",la,[e("button",{class:X(["layer-action-btn",{active:N.visible}]),onClick:Ve(j=>f(N),["stop"]),"data-tooltip":N.visible?"Hide":"Show"},[N.visible?(l(),i("svg",aa,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",sa,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,ia),e("button",{class:X(["layer-action-btn",{active:N.locked}]),onClick:Ve(j=>H(N),["stop"]),"data-tooltip":N.locked?"Unlock":"Lock"},[N.locked?(l(),i("svg",da,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",ua,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,ra),e("button",{class:"layer-action-btn",onClick:Ve(j=>ae(N.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,ca),e("button",{class:"layer-action-btn",onClick:Ve(j=>G(N.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,pa),e("button",{class:"layer-action-btn danger",onClick:Ve(j=>V(N.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,va)])],10,ta))),128))]))]))}},ga=nt(fa,[["__scopeId","data-v-7407acd8"]]),ma={class:"panel-section"},ba={class:"preset-toolbar"},ya=["value"],ha=["value"],xa=["value"],ka={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},wa=["onClick"],Ca={class:"preset-meta-chip muted"},Sa={key:1,class:"import-review"},$a={class:"motion-scrubber-header"},Ia={class:"preset-toolbar compact"},Ea=["value"],Aa=["value"],Ma={class:"import-list"},Pa=["onUpdate:modelValue"],Ta={class:"import-item-title"},Ba={class:"preset-meta-chip"},Na={key:0,class:"preset-meta-chip muted"},za={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(A,{emit:r}){const u=r;return(c,p)=>(l(),i("div",ma,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",ba,[e("input",{value:A.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=h=>u("update:searchQuery",h.target.value))},null,40,ya),e("select",{value:A.categoryFilter,class:"select",onChange:p[1]||(p[1]=h=>u("update:categoryFilter",h.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(te,null,ce(A.availableCategories,h=>(l(),i("option",{key:`library-${h}`,value:h},w(h),9,xa))),128))],40,ha),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=h=>u("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=h=>u("export-presets"))},"Export")]),A.recentPresets.length?(l(),i("div",ka,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(te,null,ce(A.recentPresets,h=>(l(),i("div",{class:"preset-item",key:`recent-${h.id}`},[e("button",{type:"button",class:"preset-chip",onClick:k=>u("apply-preset",h)},w(h.name),9,wa),e("span",Ca,"Used "+w(h.usageCount)+"x",1)]))),128))])):q("",!0),A.pendingImportedPresets.length?(l(),i("div",Sa,[e("div",$a,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=h=>u("clear-imports"))},"Discard")]),e("div",Ia,[e("select",{value:A.importScopeFilter,class:"select",onChange:p[5]||(p[5]=h=>u("update:importScopeFilter",h.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Ea),e("select",{value:A.importConflictMode,class:"select",onChange:p[6]||(p[6]=h=>u("update:importConflictMode",h.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Aa),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=h=>u("apply-imports"))},"Merge Selected")]),e("div",Ma,[(l(!0),i(te,null,ce(A.filteredPendingImports,h=>(l(),i("label",{key:`pending-${h.id}`,class:"import-item"},[pe(e("input",{"onUpdate:modelValue":k=>h.selected=k,type:"checkbox"},null,8,Pa),[[_t,h.selected]]),e("span",Ta,w(h.name),1),e("span",Ba,w(h.scope),1),h.category?(l(),i("span",Na,w(h.category),1)):q("",!0)]))),128))])])):q("",!0)]))}},La=nt(za,[["__scopeId","data-v-61f99273"]]),ja={class:"panel-section"},Da={style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"12px"}},_a={style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"12px"}},qa={key:0,style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"16px"}},Ra={class:"panel-section"},Oa={class:"field-hint"},Fa={class:"motion-scrubber-shell"},Ua={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Va=["onClick"],Wa={class:"motion-preview"},Ga={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Ha={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Ya={class:"motion-card-label"},Ja={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Qa={class:"form-group"},Xa={class:"form-group"},Ka={class:"form-group",style:{"margin-top":"var(--space-3)"}},Za={class:"preset-row",style:{"margin-top":"var(--space-3)"}},es={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},ts={key:0,class:"preset-list"},os=["onDragstart","onDragenter","onDrop"],ns=["onClick"],ls={key:0,class:"preset-meta-chip"},is=["onClick"],as=["onClick"],ss=["onClick"],rs={key:1,class:"preset-row preset-edit-row"},ds=["onClick"],us={key:1,class:"field-hint"},cs={key:2,class:"panel-section"},ps={class:"slide-settings-tabs"},vs={key:0,class:"slide-settings-pane"},fs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gs={class:"form-group"},ms={class:"bg-type-tabs"},bs=["onClick"],ys={key:0,class:"color-row"},hs=["value"],xs=["value"],ks={class:"slide-settings-subsection"},ws={class:"canvas-size-grid"},Cs=["onClick"],Ss={class:"canvas-size-icon-shell"},$s={class:"canvas-size-name"},Is={class:"canvas-size-ratio"},Es={class:"canvas-custom-card"},As={class:"canvas-custom-header"},Ms={class:"field-hint"},Ps={class:"canvas-custom-inputs"},Ts={class:"form-group"},Bs={class:"canvas-size-input-wrap"},Ns=["value"],zs={class:"form-group"},Ls={class:"canvas-size-input-wrap"},js=["value"],Ds={class:"check-row canvas-size-lock"},_s={class:"slide-settings-subsection"},qs={key:1,class:"slide-settings-pane"},Rs=["value"],Os={class:"form-group",style:{"margin-top":"var(--space-3)"}},Fs=["value"],Us={class:"check-row"},Vs=["checked"],Ws={key:2,class:"slide-settings-pane"},Gs={class:"check-row"},Hs=["checked"],Ys={class:"check-row"},Js=["checked"],Qs={class:"check-row"},Xs=["checked"],Ks={class:"check-row"},Zs=["checked"],er={class:"check-row"},tr=["checked"],or={class:"panel-title"},nr={class:"element-type-badge"},lr={class:"geo-grid"},ir={class:"form-group"},ar=["value"],sr={class:"form-group"},rr=["value"],dr={class:"form-group"},ur=["value"],cr={class:"form-group"},pr=["value"],vr={class:"form-group"},fr=["value"],gr={class:"form-group"},mr=["value"],br={class:"motion-scrubber-shell"},yr={class:"motion-card-grid"},hr=["onClick"],xr={class:"motion-preview"},kr={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},wr={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Cr={class:"motion-card-label"},Sr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},$r={class:"form-group"},Ir=["value"],Er={class:"form-group"},Ar=["value"],Mr={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Pr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Tr={key:0,class:"preset-list"},Br=["onDragstart","onDragenter","onDrop"],Nr=["onClick"],zr={key:0,class:"preset-meta-chip"},Lr=["onClick"],jr=["onClick"],Dr=["onClick"],_r={key:1,class:"preset-row preset-edit-row"},qr=["onClick"],Rr={key:1,class:"field-hint"},Or={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fr=["value"],Ur={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Vr={class:"form-group"},Wr=["value"],Gr={class:"form-group"},Hr=["value"],Yr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Jr=["value"],Qr=["value"],Xr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Kr={class:"align-btns"},Zr=["onClick"],ed={class:"form-group",style:{"margin-top":"var(--space-3)"}},td={class:"style-btns"},od={class:"form-group",style:{"margin-top":"var(--space-3)"}},nd={class:"color-row"},ld=["value"],id=["value"],ad={class:"form-group",style:{"margin-top":"var(--space-3)"}},sd=["value"],rd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},dd={class:"form-group"},ud=["value"],cd={class:"form-group"},pd=["value"],vd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fd=["value"],gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},md=["value"],bd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},yd=["value"],hd={class:"form-group"},xd=["value"],kd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},wd={class:"form-group"},Cd=["value"],Sd={class:"form-group"},$d=["value"],Id={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ed=["value"],Ad={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Md={class:"color-row"},Pd=["value"],Td=["value"],Bd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Nd={class:"color-row"},zd=["value"],Ld=["value"],jd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dd=["value"],_d={class:"form-group"},qd=["value"],Rd={class:"form-group",style:{"margin-top":"var(--space-3)"}},Od=["value"],Fd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ud=["value"],Vd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wd=["value"],Gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hd=["value"],Yd={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Jd={class:"chart-data-actions"},Qd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xd=["value","placeholder"],Kd={class:"chart-palette-preview"},Zd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},eu={class:"form-group"},tu=["value"],ou={class:"form-group"},nu=["value"],lu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},iu={class:"form-group"},au=["value"],su={class:"form-group"},ru=["value"],du={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},uu={class:"form-group"},cu=["value"],pu={key:0,class:"form-group"},vu=["value"],fu={key:1,class:"form-group"},gu=["value"],mu={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},bu={class:"form-group"},yu=["value"],hu={class:"check-row",style:{"margin-top":"20px"}},xu=["checked"],ku={class:"check-row"},wu=["checked"],Cu={key:1,class:"check-row"},Su=["checked"],$u={class:"check-row"},Iu=["checked"],Eu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Au=["value"],Mu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pu=["value"],Tu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Bu=["value"],Nu={key:0,class:"form-group"},zu=["value"],Lu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ju={class:"form-group"},Du=["value"],_u={class:"form-group"},qu=["value"],Ru={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ou={class:"form-group"},Fu=["value"],Uu={class:"form-group"},Vu=["value"],Wu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Gu={class:"form-group"},Hu=["value"],Yu={class:"form-group"},Ju=["value"],Qu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Xu={class:"form-group"},Ku=["value"],Zu=["value"],ec={class:"form-group"},tc=["value"],oc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nc=["value"],lc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ic={class:"color-row"},ac=["value"],sc=["value"],rc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},dc={class:"form-group"},uc=["value"],cc={class:"form-group"},pc=["value"],vc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fc=["value"],gc={class:"form-group"},mc=["value"],bc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},yc={class:"form-group"},hc=["value"],xc={class:"form-group"},kc=["value"],wc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cc=["value"],Sc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$c=["value"],Ic={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ec=["value"],Ac={class:"check-row"},Mc=["checked"],Pc={class:"check-row"},Tc=["checked"],Bc={class:"check-row"},Nc=["checked"],zc={class:"check-row"},Lc=["checked"],jc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dc=["value"],_c={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qc=["value"],Rc={class:"check-row"},Oc=["checked"],Fc={class:"check-row"},Uc=["checked"],Vc={class:"check-row"},Wc=["checked"],Gc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Hc={class:"form-group"},Yc=["value"],Jc={class:"form-group"},Qc=["value"],Xc={class:"form-group",style:{"margin-top":"var(--space-3)"}},Kc=["value"],Zc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ep=["value"],tp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},op=["value"],np={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},lp=["value"],ip={class:"form-group"},ap=["value"],sp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},rp={class:"form-group"},dp=["value"],up={class:"form-group"},cp=["value"],pp={class:"form-group",style:{"margin-top":"var(--space-3)"}},vp=["value"],fp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gp=["value"],mp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},bp={class:"form-group"},yp=["value"],hp={class:"form-group"},xp=["value"],kp={class:"form-group"},wp=["value"],Cp={class:"form-group"},Sp=["value"],$p={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ip=["value"],Ep={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ap={class:"form-group"},Mp=["value"],Pp={class:"form-group"},Tp=["value"],Bp={class:"form-group"},Np=["value"],zp={class:"form-group"},Lp=["value"],jp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dp=["value"],_p={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qp=["value"],Rp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Op=["value"],Fp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Up=["value"],Vp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wp=["value"],Gp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Hp={class:"form-group"},Yp=["value"],Jp={class:"form-group"},Qp=["value"],Xp={class:"form-group"},Kp=["value"],Zp={class:"form-group"},ev=["value"],tv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ov=["value"],nv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},lv={class:"form-group"},iv=["value"],av={class:"form-group"},sv=["value"],rv={class:"form-group"},dv=["value"],uv={class:"form-group"},cv=["value"],pv={class:"form-group"},vv=["value"],fv={class:"form-group",style:{"margin-top":"var(--space-3)"}},gv=["value"],mv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},bv={class:"form-group"},yv=["value"],hv={class:"form-group"},xv=["value"],kv={class:"form-group",style:{"margin-top":"var(--space-3)"}},wv=["value"],Cv={class:"form-group"},Sv=["value"],$v={class:"form-group"},Iv=["value"],Ev={class:"form-group"},Av=["value"],Mv={class:"form-group",style:{"margin-top":"var(--space-3)"}},Pv={style:{display:"flex","align-items":"center",gap:"8px"}},Tv=["checked"],Bv={class:"form-group"},Nv=["value"],zv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Lv={class:"form-group"},jv=["value"],Dv={class:"form-group"},_v=["value"],qv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Rv={class:"form-group"},Ov=["value"],Fv={class:"panel-section"},Uv={class:"actions-list"},Vv={__name:"PropertiesPanel",setup(A){const r=rt(),u=dt(),c=M(()=>u.getProject(r.projectId)),p=M(()=>{var d,t;return(t=(d=c.value)==null?void 0:d.slides)==null?void 0:t.find(B=>B.id===r.currentSlideId)}),h=M(()=>{var d;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((d=c.value)==null?void 0:d.settings)||{}}}),k=M(()=>qt(h.value)),f=M(()=>wl(h.value)),H=M(()=>Cl(k.value.width,k.value.height)),ae=L(!0),G=L("canvas"),V=M(()=>Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]),me=M(()=>V.value.filter(d=>d.scope!=="group")),z=M(()=>V.value.filter(d=>d.scope==="group")),P=M(()=>{var t;const d=new Set(r.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(B=>d.has(B.id))}),a=M(()=>{var d,t;return r.selectedElementId?(t=(d=p.value)==null?void 0:d.elements)==null?void 0:t.find(B=>B.id===r.selectedElementId):null}),N=M(()=>r.multiSelection||!!a.value),j=M(()=>r.multiSelection?"group":"single"),Y=M(()=>{var t,B;const d=(B=(t=a.value)==null?void 0:t.animations)==null?void 0:B[0];return{type:(d==null?void 0:d.type)||"auto",delay:Number((d==null?void 0:d.delay)||0),duration:Number((d==null?void 0:d.duration)||.64)}}),g=M(()=>{var Te,je;const d=P.value.map(ze=>{var $e;return(($e=ze.animations)==null?void 0:$e[0])||null}),t=((Te=d[0])==null?void 0:Te.type)||"auto",B=Number(((je=d[0])==null?void 0:je.duration)||.64),ie=d.every(ze=>((ze==null?void 0:ze.type)||"auto")===t),Se=d.every(ze=>Number((ze==null?void 0:ze.duration)||.64)===B);return{type:ie?t:"mixed",duration:Se?B:.64}}),F=L(0),se=L(0),oe=L(""),we=L(""),R=L(""),U=L(""),ve=L(""),be=L(""),le=L(""),Ce=L(""),C=L(""),D=L(""),_=L(""),K=L(""),xe=L(""),De=L("all"),Me=L(null),Re=L(null),ne=L([]),fe=L("all"),re=L("replace"),ge=L(""),Ne=L(null),de=L("");let I=null;const $=L({});ot(a,d=>{d?$.value=JSON.parse(JSON.stringify(d)):$.value={},(d==null?void 0:d.type)==="chart"&&(ge.value="")},{immediate:!0,deep:!0}),ot(()=>{var d;return[r.propertiesPanelSection,(d=a.value)==null?void 0:d.id,r.rightPanelTab]},async([d,t,B])=>{var Se;if(!d||!t||B!=="properties")return;await xl();const ie=(Se=Ne.value)==null?void 0:Se.querySelector(`[data-props-anchor="${d}"]`);ie&&(ie.scrollIntoView({behavior:"smooth",block:"start"}),de.value=d,I&&window.clearTimeout(I),I=window.setTimeout(()=>{de.value===d&&(de.value="")},1400))},{immediate:!0});function O(){if(!P.value.length)return;const d=window.prompt("Enter block name","Custom Block");d&&(u.saveSelectionAsContentBlock(r.projectId,r.currentSlideId,r.selectedElementIds,{name:d}),r.openLeftPanel("blocks"))}function ke(d){const t=P.value;if(t.length<2)return;let B=1/0,ie=1/0,Se=-1/0,Te=-1/0;t.forEach($e=>{const qe=$e.width||100,Xe=$e.height||100;$e.x<B&&(B=$e.x),$e.y<ie&&(ie=$e.y),$e.x+qe>Se&&(Se=$e.x+qe),$e.y+Xe>Te&&(Te=$e.y+Xe)});let je=B+(Se-B)/2,ze=ie+(Te-ie)/2;t.forEach($e=>{let qe={};const Xe=$e.width||100,xt=$e.height||100;d==="left"&&(qe.x=B),d==="center"&&(qe.x=je-Xe/2),d==="right"&&(qe.x=Se-Xe),d==="top"&&(qe.y=ie),d==="middle"&&(qe.y=ze-xt/2),d==="bottom"&&(qe.y=Te-xt),u.updateElement(r.projectId,r.currentSlideId,$e.id,qe)})}function Ke(d){const t=[...P.value];if(!(t.length<3))if(d==="horizontal"){t.sort(($e,qe)=>$e.x-qe.x);const B=t[0],ie=t[t.length-1],Se=t.reduce(($e,qe)=>$e+(qe.width||100),0),je=(ie.x+(ie.width||100)-B.x-Se)/(t.length-1);let ze=B.x+(B.width||100)+je;for(let $e=1;$e<t.length-1;$e++)u.updateElement(r.projectId,r.currentSlideId,t[$e].id,{x:ze}),ze+=(t[$e].width||100)+je}else{t.sort(($e,qe)=>$e.y-qe.y);const B=t[0],ie=t[t.length-1],Se=t.reduce(($e,qe)=>$e+(qe.height||100),0),je=(ie.y+(ie.height||100)-B.y-Se)/(t.length-1);let ze=B.y+(B.height||100)+je;for(let $e=1;$e<t.length-1;$e++)u.updateElement(r.projectId,r.currentSlideId,t[$e].id,{y:ze}),ze+=(t[$e].height||100)+je}}function Ge(d){a.value&&u.updateElement(r.projectId,r.currentSlideId,a.value.id,d)}function y(d){if(!a.value)return;const t={...a.value.content,...d};Ge({content:t})}function Ee(d,t){try{return JSON.parse(d)}catch{return t}}function Oe(d,t){const B=parseFloat(t);isNaN(B)||Ge({[d]:B})}const Fe=L({});ot(p,d=>{d&&(Fe.value={...d})},{immediate:!0});function Je(d){p.value&&u.updateSlide(r.projectId,p.value.id,d)}function He(d){if(!c.value)return;const t={...h.value,...d};u.updateProject(r.projectId,{settings:{...t,...ql(t)}})}function Mt(d){He({slideWidth:d.width,slideHeight:d.height})}function ct(d,t){const B=Math.round(Number(t)||0);if(!B)return;const ie={[`slide${d==="width"?"Width":"Height"}`]:B};if(ae.value){const Se=k.value.width,Te=k.value.height;d==="width"?ie.slideHeight=Math.round(B*(Te/Se)):ie.slideWidth=Math.round(B*(Se/Te))}He(ie)}const _e=M(()=>{var d;return Sl(((d=c.value)==null?void 0:d.theme)||{})}),vt=M(()=>{var t,B;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const d=((B=a.value.content)==null?void 0:B.paletteText)||_e.value.paletteText;return Fl(d)});function Ze(d){const t=Rl(d,{fallbackToDefault:!1});return t.length?Ol(t):""}function At(d){var B;if(((B=a.value)==null?void 0:B.type)!=="chart")return;const t=Ze(d);t&&(y({dataText:t}),ge.value="")}async function Pt(d){var ie;const t=d.target,B=(ie=t==null?void 0:t.files)==null?void 0:ie[0];if(B)try{const Se=await B.text();At(Se)}finally{t&&(t.value="")}}function Tt(){var d;(d=Re.value)==null||d.click()}function Bt(){var t,B;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const d=Ze(((B=a.value.content)==null?void 0:B.dataText)||"");d&&y({dataText:d})}function Nt(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&y({..._e.value})}function zt(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&y({paletteText:_e.value.paletteText})}function ft(d){return String(d||"").split(",").map(t=>t.trim()).filter(Boolean)}function b(d){const t=(d==null?void 0:d.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((d==null?void 0:d.name)||"Imported Preset").trim()||"Imported Preset",category:String((d==null?void 0:d.category)||"").trim(),tags:Array.isArray(d==null?void 0:d.tags)?d.tags.map(B=>String(B).trim()).filter(Boolean):ft(d==null?void 0:d.tags),type:String((d==null?void 0:d.type)||"auto"),delay:Math.max(0,Number(d==null?void 0:d.delay)||0),duration:Math.max(.1,Number(d==null?void 0:d.duration)||.72),stepDelay:Math.max(0,Number(d==null?void 0:d.stepDelay)||0)}}const x=M(()=>[...new Set(V.value.map(t=>t.category).filter(Boolean))].sort((t,B)=>t.localeCompare(B))),Z=M(()=>[...V.value].filter(d=>Number(d.usageCount||0)>0).sort((d,t)=>{const B=Number(t.lastUsedAt||0)-Number(d.lastUsedAt||0);return B!==0?B:Number(t.usageCount||0)-Number(d.usageCount||0)}).slice(0,6)),W=M(()=>fe.value==="all"?ne.value:ne.value.filter(d=>d.scope===fe.value));function Pe(d){const t=xe.value.trim().toLowerCase(),B=De.value;return B==="all"||(d.category||"")===B?t?[d.name,d.category,...d.tags||[]].filter(Boolean).some(Se=>String(Se).toLowerCase().includes(t)):!0:!1}const Be=M(()=>me.value.filter(Pe)),We=M(()=>z.value.filter(Pe)),Qe=M(()=>Z.value.filter(d=>j.value==="group"?d.scope==="group":d.scope!=="group"));function ue(d){const t=String(d.name||"").trim();if(!t)return;const B=V.value.findIndex(Te=>Te.scope===d.scope&&Te.name.toLowerCase()===t.toLowerCase()),ie={...d,id:B>=0?V.value[B].id:`motion-${Date.now()}`,name:t,category:String(d.category||"").trim(),tags:Array.isArray(d.tags)?d.tags:ft(d.tags)},Se=[...V.value];B>=0?Se.splice(B,1,ie):Se.push(ie),He({motionPresets:Se})}function Ae(d,t){const B=V.value.map(ie=>ie.id===d?{...ie,...t}:ie);He({motionPresets:B})}function lt(d){const t=V.value.find(B=>B.id===d);t&&Ae(d,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function Ue(d,t){const B=V.value.filter(je=>je.scope===d).map(je=>je.name.toLowerCase()),ie=String(t||"Preset").trim()||"Preset";if(!B.includes(ie.toLowerCase()))return ie;let Se=2,Te=`${ie} Copy`;for(;B.includes(Te.toLowerCase());)Te=`${ie} Copy ${Se}`,Se+=1;return Te}function Le(d){He({motionPresets:V.value.filter(t=>t.id!==d)}),R.value===d&&(R.value="",U.value="")}function Ye(d){ue({...d,id:void 0,name:Ue(d.scope,d.name)})}function yt(d){R.value=d.id,U.value=d.name,ve.value=d.category||"",be.value=Array.isArray(d.tags)?d.tags.join(", "):""}function gt(){R.value="",U.value="",ve.value="",be.value=""}function kt(d){const t=String(U.value||"").trim();t&&(Ae(d,{name:t,category:String(ve.value||"").trim(),tags:ft(be.value)}),gt())}function Wt(d,t,B){if(!t||!B||t===B)return;const ie=V.value.filter(Xe=>Xe.scope===d),Se=ie.findIndex(Xe=>Xe.id===t),Te=ie.findIndex(Xe=>Xe.id===B);if(Se===-1||Te===-1)return;const je=[...ie],[ze]=je.splice(Se,1);je.splice(Te,0,ze);const $e=V.value.filter(Xe=>Xe.scope!==d),qe=[];V.value.forEach(Xe=>{if(Xe.scope===d){je.length&&qe.push(je.shift());return}const xt=$e.shift();xt&&qe.push(xt)}),He({motionPresets:qe})}function wt(d){le.value=d.id,Ce.value=d.id}function Rt(d){le.value&&(Ce.value=d.id)}function Lt(d){le.value&&(Wt(d.scope,le.value,d.id),le.value="",Ce.value="")}function Ot(){le.value="",Ce.value=""}function Ft(){F.value+=1}function Ut(){se.value+=1}function st(d,t){Je({[d]:t})}function Ct(d){const t=Math.max(0,Number(d)||0);Je({duration:t})}function St(d){var ie;if(!a.value)return;const B={...((ie=a.value.animations)==null?void 0:ie[0])||{type:"auto",delay:0,duration:.64},...d};if(B.type==="auto"){Ge({animations:[]});return}Ge({animations:[{type:B.type||"none",delay:Math.max(0,Number(B.delay)||0),duration:Math.max(.1,Number(B.duration)||.64)}]})}const ut=L("stagger-in"),mt=L(0),ht=L(.12),bt=L(.72);ot(P,d=>{d.length&&(ut.value=g.value.type==="mixed"?"stagger-in":g.value.type,bt.value=g.value.duration)},{immediate:!0,deep:!0});function Gt(){if(!P.value.length)return;[...P.value].sort((t,B)=>(t.y||0)!==(B.y||0)?(t.y||0)-(B.y||0):(t.x||0)-(B.x||0)).forEach((t,B)=>{if(ut.value==="auto"){u.updateElement(r.projectId,r.currentSlideId,t.id,{animations:[]});return}u.updateElement(r.projectId,r.currentSlideId,t.id,{animations:[{type:ut.value,delay:Math.max(0,Number(mt.value)||0)+B*Math.max(0,Number(ht.value)||0),duration:Math.max(.1,Number(bt.value)||.72)}]})})}function Vt(d){ut.value=d.type||"stagger-in",mt.value=Number(d.delay||0),ht.value=Number(d.stepDelay||0),bt.value=Number(d.duration||.72),lt(d.id),Ut()}function s(){ue({scope:"group",name:we.value,category:_.value,tags:ft(K.value),type:ut.value,delay:Math.max(0,Number(mt.value)||0),stepDelay:Math.max(0,Number(ht.value)||0),duration:Math.max(.1,Number(bt.value)||.72)}),we.value="",_.value="",K.value=""}function n(d){St({type:d.type||"auto",delay:Number(d.delay||0),duration:Number(d.duration||.72)}),lt(d.id),Ft()}function v(){ue({scope:"single",name:oe.value,category:C.value,tags:ft(D.value),type:Y.value.type,delay:Math.max(0,Number(Y.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(Y.value.duration)||.72)}),oe.value="",C.value="",D.value=""}function S(){var d;(d=Me.value)==null||d.click()}async function m(d){var ie;const t=d.target,B=(ie=t==null?void 0:t.files)==null?void 0:ie[0];if(B)try{const Se=await B.text(),Te=JSON.parse(Se),je=Array.isArray(Te)?Te:Array.isArray(Te.motionPresets)?Te.motionPresets:[];if(!je.length)return;ne.value=je.map(ze=>({...b(ze),selected:!0,importName:String((ze==null?void 0:ze.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function J(){ne.value=[]}function ye(){const d=ne.value.filter(B=>B.selected);if(!d.length)return;const t=[...V.value];d.forEach(B=>{const ie=t.findIndex(Se=>Se.scope===B.scope&&Se.name.toLowerCase()===B.name.toLowerCase());if(ie>=0){re.value==="replace"?t.splice(ie,1,{...t[ie],...B,id:t[ie].id}):t.push({...B,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:Ue(B.scope,B.name)});return}t.push(B)}),He({motionPresets:t}),J()}function et(){var Te;if(!V.value.length)return;const d={version:1,exportedAt:new Date().toISOString(),motionPresets:V.value.map(({id:je,...ze})=>ze)},t=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),B=URL.createObjectURL(t),ie=document.createElement("a"),Se=String(((Te=c.value)==null?void 0:Te.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";ie.href=B,ie.download=`${Se}-motion-presets.json`,document.body.appendChild(ie),ie.click(),document.body.removeChild(ie),URL.revokeObjectURL(B)}const T=M(()=>[{id:`single-${F.value}`,delay:Math.max(0,Number(Y.value.delay)||0),duration:Math.max(.1,Number(Y.value.duration)||.72),type:Y.value.type}]),at=M(()=>Array.from({length:Math.min(Math.max(P.value.length,3),5)},(d,t)=>({id:`group-${se.value}-${t}`,delay:Math.max(0,Number(mt.value)||0)+t*Math.max(0,Number(ht.value)||0),duration:Math.max(.1,Number(bt.value)||.72),type:ut.value}))),$t=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],It=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(d,t)=>{var B,ie,Se,Te,je,ze,$e,qe,Xe,xt,Qt,Xt,Kt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,go,mo,bo,yo,ho,xo,ko,wo,Co,So,$o,Io,Eo,Ao,Mo,Po,To,Bo,No,zo,Lo,jo,Do,_o,qo,Ro,Oo,Fo,Uo,Vo,Wo,Go,Ho,Yo,Jo,Qo,Xo,Ko,Zo,en,tn,on,nn,ln,an,sn,rn,dn,un,cn,pn,vn,fn,gn,mn,bn,yn,hn,xn,kn,wn,Cn,Sn,$n,In,En,An,Mn,Pn,Tn,Bn,Nn,zn,Ln,jn,Dn,_n,qn,Rn,On,Fn,Un,Vn,Wn,Gn,Hn,Yn,Jn,Qn,Xn,Kn,Zn,el,tl,ol,nl,ll,il,al,sl,rl,dl,ul,cl,pl,vl;return l(),i("div",{ref_key:"panelRootRef",ref:Ne,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Me,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:m},null,544),e("input",{ref_key:"chartImportInput",ref:Re,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:Pt},null,544),t[395]||(t[395]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),N.value?(l(),tt(La,{key:0,"search-query":xe.value,"category-filter":De.value,"available-categories":x.value,"recent-presets":Qe.value,"pending-imported-presets":ne.value,"filtered-pending-imports":W.value,"import-scope-filter":fe.value,"import-conflict-mode":re.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>xe.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>De.value=o),onTriggerImport:S,onExportPresets:et,onApplyPreset:t[2]||(t[2]=o=>j.value==="group"?Vt(o):n(o)),onClearImports:J,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>fe.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>re.value=o),onApplyImports:ye},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):q("",!0),E(r).multiSelection?(l(),i(te,{key:1},[e("div",ja,[t[189]||(t[189]=e("div",{class:"panel-title"},"Arrange Selection",-1)),e("div",Da,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[5]||(t[5]=o=>ke("left")),title:"Align Left"},"Left"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[6]||(t[6]=o=>ke("center")),title:"Align Center"},"Center"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[7]||(t[7]=o=>ke("right")),title:"Align Right"},"Right")]),e("div",_a,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[8]||(t[8]=o=>ke("top")),title:"Align Top"},"Top"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[9]||(t[9]=o=>ke("middle")),title:"Align Middle"},"Middle"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[10]||(t[10]=o=>ke("bottom")),title:"Align Bottom"},"Bottom")]),P.value.length>=3?(l(),i("div",qa,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[11]||(t[11]=o=>Ke("horizontal")),title:"Distribute Horizontally"},"Distribute H"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[12]||(t[12]=o=>Ke("vertical")),title:"Distribute Vertically"},"Distribute V")])):q("",!0),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:O}," Save as Content Block ")]),e("div",Ra,[t[194]||(t[194]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",Oa,w(P.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",Fa,[e("div",{class:"motion-scrubber-header"},[t[190]||(t[190]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ut},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${se.value}`},[(l(!0),i(te,null,ce(at.value,o=>(l(),i("span",{key:o.id,class:X(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:he({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Ua,[(l(),i(te,null,ce($t,o=>e("button",{key:`group-${o.value}`,type:"button",class:X(["motion-card",ut.value===o.value&&"active"]),onClick:Q=>ut.value=o.value},[e("span",Wa,[e("span",{class:X(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Ga)):q("",!0),o.value==="stagger-in"?(l(),i("span",Ha)):q("",!0)]),e("span",Ya,w(o.label),1)],10,Va)),64))]),e("div",Ja,[e("div",Qa,[t[191]||(t[191]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),pe(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[13]||(t[13]=o=>mt.value=o),class:"input"},null,512),[[Ie,mt.value]])]),e("div",Xa,[t[192]||(t[192]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),pe(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[14]||(t[14]=o=>ht.value=o),class:"input"},null,512),[[Ie,ht.value]])])]),e("div",Ka,[t[193]||(t[193]=e("label",{class:"form-label"},"Duration (seconds)",-1)),pe(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[15]||(t[15]=o=>bt.value=o),class:"input"},null,512),[[Ie,bt.value]])]),e("div",Za,[pe(e("input",{"onUpdate:modelValue":t[16]||(t[16]=o=>we.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[Ie,we.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:s},"Save")]),e("div",es,[pe(e("input",{"onUpdate:modelValue":t[17]||(t[17]=o=>_.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[Ie,_.value]]),pe(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>K.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ie,K.value]])]),We.value.length?(l(),i("div",ts,[(l(!0),i(te,null,ce(We.value,o=>(l(),i("div",{key:o.id,class:X(["preset-item",le.value===o.id&&"dragging",Ce.value===o.id&&le.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:Q=>wt(o),onDragenter:Ve(Q=>Rt(o),["prevent"]),onDragover:t[22]||(t[22]=Ve(()=>{},["prevent"])),onDrop:Ve(Q=>Lt(o),["prevent"]),onDragend:Ot},[e("button",{type:"button",class:"preset-chip",onClick:Q=>Vt(o)},w(o.name),9,ns),o.category?(l(),i("span",ls,w(o.category),1)):q("",!0),(l(!0),i(te,null,ce(o.tags||[],Q=>(l(),i("span",{key:`${o.id}-${Q}`,class:"preset-meta-chip muted"},"#"+w(Q),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>Ye(o)},"Duplicate",8,is),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>yt(o)},"Rename",8,as),e("button",{type:"button",class:"preset-mini-btn danger",onClick:Q=>Le(o.id)},"Delete",8,ss),R.value===o.id?(l(),i("div",rs,[pe(e("input",{"onUpdate:modelValue":t[19]||(t[19]=Q=>U.value=Q),class:"input"},null,512),[[Ie,U.value]]),pe(e("input",{"onUpdate:modelValue":t[20]||(t[20]=Q=>ve.value=Q),class:"input",placeholder:"Category"},null,512),[[Ie,ve.value]]),pe(e("input",{"onUpdate:modelValue":t[21]||(t[21]=Q=>be.value=Q),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ie,be.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Q=>kt(o.id)},"Save",8,ds),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):q("",!0)],42,os))),128))])):z.value.length?(l(),i("div",us,"No group presets match the current search.")):q("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Gt}," Apply Sequence to Selection ")])],64)):a.value?(l(),i(te,{key:3},[e("div",{class:X(["panel-section",de.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",or,[t[225]||(t[225]=ee(" Position & Size ",-1)),e("span",nr,w(a.value.type),1)]),e("div",lr,[e("div",ir,[t[226]||(t[226]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[47]||(t[47]=o=>Oe("x",o.target.value))},null,40,ar)]),e("div",sr,[t[227]||(t[227]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[48]||(t[48]=o=>Oe("y",o.target.value))},null,40,rr)]),e("div",dr,[t[228]||(t[228]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[49]||(t[49]=o=>Oe("width",o.target.value))},null,40,ur)]),e("div",cr,[t[229]||(t[229]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[50]||(t[50]=o=>Oe("height",o.target.value))},null,40,pr)]),e("div",vr,[t[230]||(t[230]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[51]||(t[51]=o=>Oe("rotation",o.target.value))},null,40,fr)]),e("div",gr,[t[231]||(t[231]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[52]||(t[52]=o=>Oe("opacity",o.target.value))},null,40,mr)])])],2),e("div",{class:X(["panel-section",de.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[235]||(t[235]=e("div",{class:"panel-title"},"Animation",-1)),e("div",br,[e("div",{class:"motion-scrubber-header"},[t[232]||(t[232]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ft},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${F.value}`},[(l(!0),i(te,null,ce(T.value,o=>(l(),i("span",{key:o.id,class:X(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:he({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",yr,[(l(),i(te,null,ce($t,o=>e("button",{key:o.value,type:"button",class:X(["motion-card",Y.value.type===o.value&&"active"]),onClick:Q=>St({type:o.value})},[e("span",xr,[e("span",{class:X(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",kr)):q("",!0),o.value==="stagger-in"?(l(),i("span",wr)):q("",!0)]),e("span",Cr,w(o.label),1)],10,hr)),64))]),e("div",Sr,[e("div",$r,[t[233]||(t[233]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:Y.value.delay,class:"input",onChange:t[53]||(t[53]=o=>St({delay:o.target.value}))},null,40,Ir)]),e("div",Er,[t[234]||(t[234]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:Y.value.duration,class:"input",onChange:t[54]||(t[54]=o=>St({duration:o.target.value}))},null,40,Ar)])]),e("div",Mr,[pe(e("input",{"onUpdate:modelValue":t[55]||(t[55]=o=>oe.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[Ie,oe.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v},"Save")]),e("div",Pr,[pe(e("input",{"onUpdate:modelValue":t[56]||(t[56]=o=>C.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[Ie,C.value]]),pe(e("input",{"onUpdate:modelValue":t[57]||(t[57]=o=>D.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ie,D.value]])]),Be.value.length?(l(),i("div",Tr,[(l(!0),i(te,null,ce(Be.value,o=>(l(),i("div",{key:o.id,class:X(["preset-item",le.value===o.id&&"dragging",Ce.value===o.id&&le.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:Q=>wt(o),onDragenter:Ve(Q=>Rt(o),["prevent"]),onDragover:t[61]||(t[61]=Ve(()=>{},["prevent"])),onDrop:Ve(Q=>Lt(o),["prevent"]),onDragend:Ot},[e("button",{type:"button",class:"preset-chip",onClick:Q=>n(o)},w(o.name),9,Nr),o.category?(l(),i("span",zr,w(o.category),1)):q("",!0),(l(!0),i(te,null,ce(o.tags||[],Q=>(l(),i("span",{key:`${o.id}-${Q}`,class:"preset-meta-chip muted"},"#"+w(Q),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>Ye(o)},"Duplicate",8,Lr),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>yt(o)},"Rename",8,jr),e("button",{type:"button",class:"preset-mini-btn danger",onClick:Q=>Le(o.id)},"Delete",8,Dr),R.value===o.id?(l(),i("div",_r,[pe(e("input",{"onUpdate:modelValue":t[58]||(t[58]=Q=>U.value=Q),class:"input"},null,512),[[Ie,U.value]]),pe(e("input",{"onUpdate:modelValue":t[59]||(t[59]=Q=>ve.value=Q),class:"input",placeholder:"Category"},null,512),[[Ie,ve.value]]),pe(e("input",{"onUpdate:modelValue":t[60]||(t[60]=Q=>be.value=Q),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ie,be.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Q=>kt(o.id)},"Save",8,qr),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):q("",!0)],42,Br))),128))])):me.value.length?(l(),i("div",Rr,"No single-element presets match the current search.")):q("",!0),t[236]||(t[236]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[252]||(t[252]=e("div",{class:"panel-title"},"Text",-1)),e("div",Or,[t[237]||(t[237]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(qe=a.value.content)==null?void 0:qe.text,class:"textarea",style:{"min-height":"64px"},onInput:t[62]||(t[62]=o=>y({text:o.target.value}))},null,40,Fr)]),e("div",Ur,[e("div",Vr,[t[238]||(t[238]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(Xe=a.value.content)==null?void 0:Xe.fontSize,class:"input",onChange:t[63]||(t[63]=o=>y({fontSize:+o.target.value}))},null,40,Wr)]),e("div",Gr,[t[240]||(t[240]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(xt=a.value.content)==null?void 0:xt.fontWeight,class:"select",onChange:t[64]||(t[64]=o=>y({fontWeight:o.target.value}))},[...t[239]||(t[239]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Hr)])]),e("div",Yr,[t[241]||(t[241]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Qt=a.value.content)==null?void 0:Qt.fontFamily,class:"select",onChange:t[65]||(t[65]=o=>y({fontFamily:o.target.value}))},[(l(),i(te,null,ce(It,o=>e("option",{key:o,value:o},w(o.split(",")[0]),9,Qr)),64))],40,Jr)]),e("div",Xr,[t[242]||(t[242]=e("label",{class:"form-label"},"Align",-1)),e("div",Kr,[(l(),i(te,null,ce(["left","center","right","justify"],o=>{var Q;return e("button",{key:o,class:X(["align-btn",((Q=a.value.content)==null?void 0:Q.textAlign)===o&&"active"]),onClick:fl=>y({textAlign:o})},w(o[0].toUpperCase()),11,Zr)}),64))])]),e("div",ed,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("div",td,[e("button",{class:X(["style-btn",((Xt=a.value.content)==null?void 0:Xt.fontStyle)==="italic"&&"active"]),onClick:t[66]||(t[66]=o=>{var Q;return y({fontStyle:((Q=a.value.content)==null?void 0:Q.fontStyle)==="italic"?"normal":"italic"})})},[...t[243]||(t[243]=[e("i",null,"I",-1)])],2),e("button",{class:X(["style-btn",((Kt=a.value.content)==null?void 0:Kt.textDecoration)==="underline"&&"active"]),onClick:t[67]||(t[67]=o=>{var Q;return y({textDecoration:((Q=a.value.content)==null?void 0:Q.textDecoration)==="underline"?"none":"underline"})})},[...t[244]||(t[244]=[e("u",null,"U",-1)])],2),e("button",{class:X(["style-btn",((Zt=a.value.content)==null?void 0:Zt.textDecoration)==="line-through"&&"active"]),onClick:t[68]||(t[68]=o=>{var Q;return y({textDecoration:((Q=a.value.content)==null?void 0:Q.textDecoration)==="line-through"?"none":"line-through"})})},[...t[245]||(t[245]=[e("s",null,"S",-1)])],2)])]),e("div",od,[t[247]||(t[247]=e("label",{class:"form-label"},"Color",-1)),e("div",nd,[e("input",{type:"color",value:((eo=a.value.content)==null?void 0:eo.color)||"#000",onInput:t[69]||(t[69]=o=>y({color:o.target.value})),class:"color-input-native"},null,40,ld),e("input",{value:((to=a.value.content)==null?void 0:to.color)||"#000",class:"input",onInput:t[70]||(t[70]=o=>y({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,id)])]),e("div",ad,[t[248]||(t[248]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((oo=a.value.content)==null?void 0:oo.lineHeight)??1.5,class:"input",onChange:t[71]||(t[71]=o=>y({lineHeight:+o.target.value}))},null,40,sd)]),e("div",rd,[e("div",dd,[t[250]||(t[250]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((no=a.value.content)==null?void 0:no.textTransform)||"none",class:"select",onChange:t[72]||(t[72]=o=>y({textTransform:o.target.value}))},[...t[249]||(t[249]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,ud)]),e("div",cd,[t[251]||(t[251]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((lo=a.value.content)==null?void 0:lo.letterSpacing)??0,class:"input",onChange:t[73]||(t[73]=o=>y({letterSpacing:+o.target.value}))},null,40,pd)])])],2)):q("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[260]||(t[260]=e("div",{class:"panel-title"},"Image",-1)),e("div",vd,[t[253]||(t[253]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(io=a.value.content)==null?void 0:io.src,class:"input",placeholder:"https://...",onInput:t[74]||(t[74]=o=>y({src:o.target.value}))},null,40,fd)]),e("div",gd,[t[254]||(t[254]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(ao=a.value.content)==null?void 0:ao.alt,class:"input",onInput:t[75]||(t[75]=o=>y({alt:o.target.value}))},null,40,md)]),e("div",bd,[t[256]||(t[256]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((so=a.value.content)==null?void 0:so.objectFit)||"cover",class:"select",onChange:t[76]||(t[76]=o=>y({objectFit:o.target.value}))},[...t[255]||(t[255]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,yd)]),e("div",hd,[t[257]||(t[257]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((ro=a.value.content)==null?void 0:ro.borderRadius)||0,class:"input",onChange:t[77]||(t[77]=o=>y({borderRadius:+o.target.value}))},null,40,xd)]),e("div",kd,[e("div",wd,[t[258]||(t[258]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((uo=a.value.content)==null?void 0:uo.borderWidth)||0,class:"input",onChange:t[78]||(t[78]=o=>y({borderWidth:+o.target.value}))},null,40,Cd)]),e("div",Sd,[t[259]||(t[259]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((co=a.value.content)==null?void 0:co.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[79]||(t[79]=o=>y({borderColor:o.target.value}))},null,40,$d)])])],2)):q("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[268]||(t[268]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Id,[t[262]||(t[262]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((po=a.value.content)==null?void 0:po.shapeType)||"rectangle",class:"select",onChange:t[80]||(t[80]=o=>y({shapeType:o.target.value}))},[...t[261]||(t[261]=[it('<option value="rectangle" data-v-3f426f62>Rectangle</option><option value="circle" data-v-3f426f62>Circle</option><option value="triangle" data-v-3f426f62>Triangle</option><option value="star" data-v-3f426f62>Star</option><option value="arrow" data-v-3f426f62>Arrow</option><option value="diamond" data-v-3f426f62>Diamond</option>',6)])],40,Ed)]),e("div",Ad,[t[263]||(t[263]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Md,[e("input",{type:"color",value:((vo=a.value.content)==null?void 0:vo.fillColor)||"#6c47ff",onInput:t[81]||(t[81]=o=>y({fillColor:o.target.value})),class:"color-input-native"},null,40,Pd),e("input",{value:((fo=a.value.content)==null?void 0:fo.fillColor)||"#6c47ff",class:"input",onInput:t[82]||(t[82]=o=>y({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Td)])]),e("div",Bd,[t[264]||(t[264]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Nd,[e("input",{type:"color",value:((go=a.value.content)==null?void 0:go.borderColor)||"transparent",onInput:t[83]||(t[83]=o=>y({borderColor:o.target.value})),class:"color-input-native"},null,40,zd),e("input",{value:((mo=a.value.content)==null?void 0:mo.borderColor)||"transparent",class:"input",onInput:t[84]||(t[84]=o=>y({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ld)])]),e("div",jd,[t[265]||(t[265]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((bo=a.value.content)==null?void 0:bo.borderWidth)||0,class:"input",onChange:t[85]||(t[85]=o=>y({borderWidth:+o.target.value}))},null,40,Dd)]),e("div",_d,[t[266]||(t[266]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((yo=a.value.content)==null?void 0:yo.borderRadius)||0,class:"input",onChange:t[86]||(t[86]=o=>y({borderRadius:+o.target.value}))},null,40,qd)]),e("div",Rd,[t[267]||(t[267]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((ho=a.value.content)==null?void 0:ho.opacity)??1,class:"input",onChange:t[87]||(t[87]=o=>y({opacity:+o.target.value}))},null,40,Od)])],2)):q("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[289]||(t[289]=e("div",{class:"panel-title"},"Chart",-1)),e("div",Fd,[t[270]||(t[270]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((xo=a.value.content)==null?void 0:xo.chartType)||"bar",class:"select",onChange:t[88]||(t[88]=o=>y({chartType:o.target.value}))},[...t[269]||(t[269]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Ud)]),e("div",Vd,[t[271]||(t[271]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((ko=a.value.content)==null?void 0:ko.title)||"",class:"input",onInput:t[89]||(t[89]=o=>y({title:o.target.value}))},null,40,Wd)]),e("div",Gd,[t[272]||(t[272]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((wo=a.value.content)==null?void 0:wo.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[90]||(t[90]=o=>y({dataText:o.target.value}))},null,40,Hd),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Bt},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Tt},"Upload CSV")]),t[273]||(t[273]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Yd,[t[274]||(t[274]=e("label",{class:"form-label"},"Paste table data",-1)),pe(e("textarea",{"onUpdate:modelValue":t[91]||(t[91]=o=>ge.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[Ie,ge.value]]),e("div",Jd,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[92]||(t[92]=o=>At(ge.value))},"Convert pasted data")])]),e("div",Qd,[t[275]||(t[275]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((Co=a.value.content)==null?void 0:Co.paletteText)||"",class:"input",placeholder:_e.value.paletteText,onInput:t[93]||(t[93]=o=>y({paletteText:o.target.value}))},null,40,Xd),e("div",Kd,[(l(!0),i(te,null,ce(vt.value,(o,Q)=>(l(),i("span",{key:`chart-palette-${Q}`,class:"chart-palette-swatch",style:he({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:zt},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Nt},"Apply theme colors")]),t[276]||(t[276]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Zd,[e("div",eu,[t[277]||(t[277]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((So=a.value.content)==null?void 0:So.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[94]||(t[94]=o=>y({backgroundColor:o.target.value}))},null,40,tu)]),e("div",ou,[t[278]||(t[278]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:(($o=a.value.content)==null?void 0:$o.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[95]||(t[95]=o=>y({textColor:o.target.value}))},null,40,nu)])]),e("div",lu,[e("div",iu,[t[279]||(t[279]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((Io=a.value.content)==null?void 0:Io.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[96]||(t[96]=o=>y({gridColor:o.target.value}))},null,40,au)]),e("div",su,[t[280]||(t[280]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((Eo=a.value.content)==null?void 0:Eo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[97]||(t[97]=o=>y({borderColor:o.target.value}))},null,40,ru)])]),e("div",du,[e("div",uu,[t[281]||(t[281]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Ao=a.value.content)==null?void 0:Ao.borderWidth)??1,class:"input",onChange:t[98]||(t[98]=o=>y({borderWidth:+o.target.value}))},null,40,cu)]),((Mo=a.value.content)==null?void 0:Mo.chartType)!=="circle"?(l(),i("div",pu,[t[282]||(t[282]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((Po=a.value.content)==null?void 0:Po.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[99]||(t[99]=o=>y({maxValue:o.target.value}))},null,40,vu)])):(l(),i("div",fu,[t[283]||(t[283]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((To=a.value.content)==null?void 0:To.innerRadius)??62,class:"input",onChange:t[100]||(t[100]=o=>y({innerRadius:+o.target.value}))},null,40,gu)]))]),((Bo=a.value.content)==null?void 0:Bo.chartType)==="line"?(l(),i("div",mu,[e("div",bu,[t[284]||(t[284]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((No=a.value.content)==null?void 0:No.strokeWidth)??3,class:"input",onChange:t[101]||(t[101]=o=>y({strokeWidth:+o.target.value}))},null,40,yu)]),e("label",hu,[e("input",{type:"checkbox",checked:!!((zo=a.value.content)!=null&&zo.showArea),onChange:t[102]||(t[102]=o=>y({showArea:o.target.checked}))},null,40,xu),t[285]||(t[285]=ee(" Show area fill ",-1))])])):q("",!0),e("label",ku,[e("input",{type:"checkbox",checked:((Lo=a.value.content)==null?void 0:Lo.showLegend)!==!1,onChange:t[103]||(t[103]=o=>y({showLegend:o.target.checked}))},null,40,wu),t[286]||(t[286]=ee(" Show legend ",-1))]),((jo=a.value.content)==null?void 0:jo.chartType)!=="circle"?(l(),i("label",Cu,[e("input",{type:"checkbox",checked:((Do=a.value.content)==null?void 0:Do.showGrid)!==!1,onChange:t[104]||(t[104]=o=>y({showGrid:o.target.checked}))},null,40,Su),t[287]||(t[287]=ee(" Show grid lines ",-1))])):q("",!0),e("label",$u,[e("input",{type:"checkbox",checked:((_o=a.value.content)==null?void 0:_o.showValues)!==!1,onChange:t[105]||(t[105]=o=>y({showValues:o.target.checked}))},null,40,Iu),t[288]||(t[288]=ee(" Show values ",-1))])],2)):q("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[305]||(t[305]=e("div",{class:"panel-title"},"Button",-1)),e("div",Eu,[t[290]||(t[290]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(qo=a.value.content)==null?void 0:qo.label,class:"input",onInput:t[106]||(t[106]=o=>y({label:o.target.value}))},null,40,Au)]),e("div",Mu,[t[292]||(t[292]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Ro=a.value.content)==null?void 0:Ro.variant)||"primary",class:"select",onChange:t[107]||(t[107]=o=>y({variant:o.target.value}))},[...t[291]||(t[291]=[it('<option value="primary" data-v-3f426f62>Primary</option><option value="secondary" data-v-3f426f62>Secondary</option><option value="outline" data-v-3f426f62>Outline</option><option value="ghost" data-v-3f426f62>Ghost</option><option value="danger" data-v-3f426f62>Danger</option>',5)])],40,Pu)]),e("div",Tu,[t[294]||(t[294]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Oo=a.value.content)==null?void 0:Oo.action)||"none",class:"select",onChange:t[108]||(t[108]=o=>y({action:o.target.value}))},[...t[293]||(t[293]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Bu)]),(Fo=a.value.content)!=null&&Fo.action&&a.value.content.action!=="none"?(l(),i("div",Nu,[t[295]||(t[295]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Uo=a.value.content)==null?void 0:Uo.target,class:"input",placeholder:"Slide # or https://...",onInput:t[109]||(t[109]=o=>y({target:o.target.value}))},null,40,zu)])):q("",!0),e("div",Lu,[e("div",ju,[t[296]||(t[296]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Vo=a.value.content)==null?void 0:Vo.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[110]||(t[110]=o=>y({bgColor:o.target.value}))},null,40,Du)]),e("div",_u,[t[297]||(t[297]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Wo=a.value.content)==null?void 0:Wo.textColor)||"#ffffff",class:"color-input-native",onInput:t[111]||(t[111]=o=>y({textColor:o.target.value}))},null,40,qu)])]),e("div",Ru,[e("div",Ou,[t[298]||(t[298]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Go=a.value.content)==null?void 0:Go.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[112]||(t[112]=o=>y({borderColor:o.target.value}))},null,40,Fu)]),e("div",Uu,[t[299]||(t[299]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Ho=a.value.content)==null?void 0:Ho.borderRadius)??8,class:"input",onChange:t[113]||(t[113]=o=>y({borderRadius:+o.target.value}))},null,40,Vu)])]),e("div",Wu,[e("div",Gu,[t[300]||(t[300]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Yo=a.value.content)==null?void 0:Yo.fontSize)??15,class:"input",onChange:t[114]||(t[114]=o=>y({fontSize:+o.target.value}))},null,40,Hu)]),e("div",Yu,[t[302]||(t[302]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Jo=a.value.content)==null?void 0:Jo.fontWeight)??600),class:"select",onChange:t[115]||(t[115]=o=>y({fontWeight:+o.target.value}))},[...t[301]||(t[301]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Ju)])]),e("div",Qu,[e("div",Xu,[t[303]||(t[303]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Qo=a.value.content)==null?void 0:Qo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[116]||(t[116]=o=>y({fontFamily:o.target.value}))},[(l(),i(te,null,ce(It,o=>e("option",{key:`btn-${o}`,value:o},w(o.split(",")[0]),9,Zu)),64))],40,Ku)]),e("div",ec,[t[304]||(t[304]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Xo=a.value.content)==null?void 0:Xo.letterSpacing)??0,class:"input",onChange:t[117]||(t[117]=o=>y({letterSpacing:+o.target.value}))},null,40,tc)])])],2)):q("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[315]||(t[315]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",oc,[t[307]||(t[307]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Ko=a.value.content)==null?void 0:Ko.icon)||"?",class:"select",onChange:t[118]||(t[118]=o=>y({icon:o.target.value}))},[...t[306]||(t[306]=[it('<option value="?" data-v-3f426f62>? (Info)</option><option value="!" data-v-3f426f62>! (Alert)</option><option value="+" data-v-3f426f62>+ (Plus)</option><option value="i" data-v-3f426f62>i (Info)</option><option value="✦" data-v-3f426f62>✦ (Star)</option>',5)])],40,nc)]),e("div",lc,[t[308]||(t[308]=e("label",{class:"form-label"},"Background Color",-1)),e("div",ic,[e("input",{type:"color",value:((Zo=a.value.content)==null?void 0:Zo.bgColor)||"#6c47ff",onInput:t[119]||(t[119]=o=>y({bgColor:o.target.value})),class:"color-input-native"},null,40,ac),e("input",{value:((en=a.value.content)==null?void 0:en.bgColor)||"#6c47ff",class:"input",onInput:t[120]||(t[120]=o=>y({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,sc)])]),e("div",rc,[e("div",dc,[t[309]||(t[309]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((tn=a.value.content)==null?void 0:tn.iconColor)||"#ffffff",class:"color-input-native",onInput:t[121]||(t[121]=o=>y({iconColor:o.target.value}))},null,40,uc)]),e("div",cc,[t[310]||(t[310]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((on=a.value.content)==null?void 0:on.borderRadius)??999,class:"input",onChange:t[122]||(t[122]=o=>y({borderRadius:+o.target.value}))},null,40,pc)])]),e("div",vc,[t[311]||(t[311]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(nn=a.value.content)==null?void 0:nn.popupTitle,class:"input",onInput:t[123]||(t[123]=o=>y({popupTitle:o.target.value}))},null,40,fc)]),e("div",gc,[t[312]||(t[312]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(ln=a.value.content)==null?void 0:ln.popupContent,class:"textarea",onInput:t[124]||(t[124]=o=>y({popupContent:o.target.value}))},null,40,mc)]),e("div",bc,[e("div",yc,[t[313]||(t[313]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((an=a.value.content)==null?void 0:an.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[125]||(t[125]=o=>y({popupBgColor:o.target.value}))},null,40,hc)]),e("div",xc,[t[314]||(t[314]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((sn=a.value.content)==null?void 0:sn.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[126]||(t[126]=o=>y({popupTextColor:o.target.value}))},null,40,kc)])])],2)):q("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[324]||(t[324]=e("div",{class:"panel-title"},"Video",-1)),e("div",wc,[t[316]||(t[316]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(rn=a.value.content)==null?void 0:rn.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[127]||(t[127]=o=>y({src:o.target.value}))},null,40,Cc)]),e("div",Sc,[t[317]||(t[317]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(dn=a.value.content)==null?void 0:dn.poster,class:"input",onInput:t[128]||(t[128]=o=>y({poster:o.target.value}))},null,40,$c)]),e("div",Ic,[t[319]||(t[319]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((un=a.value.content)==null?void 0:un.objectFit)||"cover",class:"select",onChange:t[129]||(t[129]=o=>y({objectFit:o.target.value}))},[...t[318]||(t[318]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Ec)]),e("label",Ac,[e("input",{type:"checkbox",checked:(cn=a.value.content)==null?void 0:cn.autoplay,onChange:t[130]||(t[130]=o=>y({autoplay:o.target.checked}))},null,40,Mc),t[320]||(t[320]=ee(" Autoplay ",-1))]),e("label",Pc,[e("input",{type:"checkbox",checked:((pn=a.value.content)==null?void 0:pn.controls)??!0,onChange:t[131]||(t[131]=o=>y({controls:o.target.checked}))},null,40,Tc),t[321]||(t[321]=ee(" Show Controls ",-1))]),e("label",Bc,[e("input",{type:"checkbox",checked:(vn=a.value.content)==null?void 0:vn.loop,onChange:t[132]||(t[132]=o=>y({loop:o.target.checked}))},null,40,Nc),t[322]||(t[322]=ee(" Loop ",-1))]),e("label",zc,[e("input",{type:"checkbox",checked:(fn=a.value.content)==null?void 0:fn.muted,onChange:t[133]||(t[133]=o=>y({muted:o.target.checked}))},null,40,Lc),t[323]||(t[323]=ee(" Muted ",-1))])],2)):q("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[333]||(t[333]=e("div",{class:"panel-title"},"Audio",-1)),e("div",jc,[t[325]||(t[325]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(gn=a.value.content)==null?void 0:gn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[134]||(t[134]=o=>y({src:o.target.value}))},null,40,Dc)]),e("div",_c,[t[326]||(t[326]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(mn=a.value.content)==null?void 0:mn.label,class:"input",onInput:t[135]||(t[135]=o=>y({label:o.target.value}))},null,40,qc)]),e("label",Rc,[e("input",{type:"checkbox",checked:(bn=a.value.content)==null?void 0:bn.autoplay,onChange:t[136]||(t[136]=o=>y({autoplay:o.target.checked}))},null,40,Oc),t[327]||(t[327]=ee(" Autoplay ",-1))]),e("label",Fc,[e("input",{type:"checkbox",checked:((yn=a.value.content)==null?void 0:yn.controls)!==!1,onChange:t[137]||(t[137]=o=>y({controls:o.target.checked}))},null,40,Uc),t[328]||(t[328]=ee(" Show Controls ",-1))]),e("label",Vc,[e("input",{type:"checkbox",checked:(hn=a.value.content)==null?void 0:hn.loop,onChange:t[138]||(t[138]=o=>y({loop:o.target.checked}))},null,40,Wc),t[329]||(t[329]=ee(" Loop ",-1))]),e("div",Gc,[e("div",Hc,[t[330]||(t[330]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((xn=a.value.content)==null?void 0:xn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[139]||(t[139]=o=>y({accentColor:o.target.value}))},null,40,Yc)]),e("div",Jc,[t[331]||(t[331]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((kn=a.value.content)==null?void 0:kn.textColor)||"#555555",class:"color-input-native",onInput:t[140]||(t[140]=o=>y({textColor:o.target.value}))},null,40,Qc)])]),e("div",Xc,[t[332]||(t[332]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((wn=a.value.content)==null?void 0:wn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[141]||(t[141]=o=>y({bgColor:o.target.value}))},null,40,Kc)])],2)):q("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[341]||(t[341]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Zc,[t[334]||(t[334]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(Cn=a.value.content)==null?void 0:Cn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[142]||(t[142]=o=>y({question:o.target.value}))},null,40,ep)]),e("div",tp,[t[335]||(t[335]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:($n=(Sn=a.value.content)==null?void 0:Sn.options)==null?void 0:$n.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[143]||(t[143]=o=>y({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,op)]),e("div",np,[t[336]||(t[336]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((In=a.value.content)==null?void 0:In.correctIndex)??0,class:"input",onChange:t[144]||(t[144]=o=>y({correctIndex:+o.target.value}))},null,40,lp)]),e("div",ip,[t[337]||(t[337]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(En=a.value.content)==null?void 0:En.explanation,class:"textarea",onInput:t[145]||(t[145]=o=>y({explanation:o.target.value}))},null,40,ap)]),e("div",sp,[e("div",rp,[t[338]||(t[338]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((An=a.value.content)==null?void 0:An.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[146]||(t[146]=o=>y({cardBgColor:o.target.value}))},null,40,dp)]),e("div",up,[t[339]||(t[339]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((Mn=a.value.content)==null?void 0:Mn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[147]||(t[147]=o=>y({questionColor:o.target.value}))},null,40,cp)])]),e("div",pp,[t[340]||(t[340]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Pn=a.value.content)==null?void 0:Pn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[148]||(t[148]=o=>y({accentColor:o.target.value}))},null,40,vp)])],2)):a.value.type==="tabs"?(l(),i("div",{key:9,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[347]||(t[347]=e("div",{class:"panel-title"},"Tabs Configuration",-1)),e("div",fp,[t[342]||(t[342]=e("label",{class:"form-label"},"Tabs Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Tn=a.value.content)==null?void 0:Tn.tabs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[149]||(t[149]=o=>{var Q;return y({tabs:Ee(o.target.value,(Q=a.value.content)==null?void 0:Q.tabs)})})},null,40,gp)]),e("div",mp,[e("div",bp,[t[343]||(t[343]=e("label",{class:"form-label"},"Active Tab",-1)),e("input",{type:"color",value:((Bn=a.value.content)==null?void 0:Bn.activeTabColor)||"#6c47ff",class:"color-input-native",onInput:t[150]||(t[150]=o=>y({activeTabColor:o.target.value}))},null,40,yp)]),e("div",hp,[t[344]||(t[344]=e("label",{class:"form-label"},"Inactive Tab",-1)),e("input",{type:"color",value:((Nn=a.value.content)==null?void 0:Nn.inactiveTabColor)||"#f8fafc",class:"color-input-native",onInput:t[151]||(t[151]=o=>y({inactiveTabColor:o.target.value}))},null,40,xp)]),e("div",kp,[t[345]||(t[345]=e("label",{class:"form-label"},"Content Bg",-1)),e("input",{type:"color",value:((zn=a.value.content)==null?void 0:zn.contentBgColor)||"#ffffff",class:"color-input-native",onInput:t[152]||(t[152]=o=>y({contentBgColor:o.target.value}))},null,40,wp)]),e("div",Cp,[t[346]||(t[346]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Ln=a.value.content)==null?void 0:Ln.textColor)||"#1e293b",class:"color-input-native",onInput:t[153]||(t[153]=o=>y({textColor:o.target.value}))},null,40,Sp)])])],2)):a.value.type==="accordion"?(l(),i("div",{key:10,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[353]||(t[353]=e("div",{class:"panel-title"},"Accordion Configuration",-1)),e("div",$p,[t[348]||(t[348]=e("label",{class:"form-label"},"Items Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((jn=a.value.content)==null?void 0:jn.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[154]||(t[154]=o=>{var Q;return y({items:Ee(o.target.value,(Q=a.value.content)==null?void 0:Q.items)})})},null,40,Ip)]),e("div",Ep,[e("div",Ap,[t[349]||(t[349]=e("label",{class:"form-label"},"Active Bg Color",-1)),e("input",{type:"color",value:((Dn=a.value.content)==null?void 0:Dn.activeBgColor)||"#f8fafc",class:"color-input-native",onInput:t[155]||(t[155]=o=>y({activeBgColor:o.target.value}))},null,40,Mp)]),e("div",Pp,[t[350]||(t[350]=e("label",{class:"form-label"},"Active Title Color",-1)),e("input",{type:"color",value:((_n=a.value.content)==null?void 0:_n.activeColor)||"#6c47ff",class:"color-input-native",onInput:t[156]||(t[156]=o=>y({activeColor:o.target.value}))},null,40,Tp)]),e("div",Bp,[t[351]||(t[351]=e("label",{class:"form-label"},"Item Bg Color",-1)),e("input",{type:"color",value:((qn=a.value.content)==null?void 0:qn.itemBgColor)||"#ffffff",class:"color-input-native",onInput:t[157]||(t[157]=o=>y({itemBgColor:o.target.value}))},null,40,Np)]),e("div",zp,[t[352]||(t[352]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Rn=a.value.content)==null?void 0:Rn.textColor)||"#475569",class:"color-input-native",onInput:t[158]||(t[158]=o=>y({textColor:o.target.value}))},null,40,Lp)])])],2)):a.value.type==="flipcard"?(l(),i("div",{key:11,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[364]||(t[364]=e("div",{class:"panel-title"},"Flip Card Content",-1)),e("div",jp,[t[355]||(t[355]=e("label",{class:"form-label"},"Direction",-1)),e("select",{value:((On=a.value.content)==null?void 0:On.flipDirection)||"horizontal",class:"select",onChange:t[159]||(t[159]=o=>y({flipDirection:o.target.value}))},[...t[354]||(t[354]=[e("option",{value:"horizontal"},"Horizontal (Y-axis)",-1),e("option",{value:"vertical"},"Vertical (X-axis)",-1)])],40,Dp)]),e("div",_p,[t[356]||(t[356]=e("label",{class:"form-label"},"Front Title",-1)),e("input",{type:"text",value:(Fn=a.value.content)==null?void 0:Fn.frontTitle,class:"input",onInput:t[160]||(t[160]=o=>y({frontTitle:o.target.value}))},null,40,qp)]),e("div",Rp,[t[357]||(t[357]=e("label",{class:"form-label"},"Front Content",-1)),e("textarea",{value:(Un=a.value.content)==null?void 0:Un.frontContent,class:"textarea",onInput:t[161]||(t[161]=o=>y({frontContent:o.target.value}))},null,40,Op)]),e("div",Fp,[t[358]||(t[358]=e("label",{class:"form-label"},"Back Title",-1)),e("input",{type:"text",value:(Vn=a.value.content)==null?void 0:Vn.backTitle,class:"input",onInput:t[162]||(t[162]=o=>y({backTitle:o.target.value}))},null,40,Up)]),e("div",Vp,[t[359]||(t[359]=e("label",{class:"form-label"},"Back Content",-1)),e("textarea",{value:(Wn=a.value.content)==null?void 0:Wn.backContent,class:"textarea",onInput:t[163]||(t[163]=o=>y({backContent:o.target.value}))},null,40,Wp)]),e("div",Gp,[e("div",Hp,[t[360]||(t[360]=e("label",{class:"form-label"},"Front Bg",-1)),e("input",{type:"color",value:((Gn=a.value.content)==null?void 0:Gn.frontBgColor)||"#6c47ff",class:"color-input-native",onInput:t[164]||(t[164]=o=>y({frontBgColor:o.target.value}))},null,40,Yp)]),e("div",Jp,[t[361]||(t[361]=e("label",{class:"form-label"},"Front Text",-1)),e("input",{type:"color",value:((Hn=a.value.content)==null?void 0:Hn.frontTextColor)||"#ffffff",class:"color-input-native",onInput:t[165]||(t[165]=o=>y({frontTextColor:o.target.value}))},null,40,Qp)]),e("div",Xp,[t[362]||(t[362]=e("label",{class:"form-label"},"Back Bg",-1)),e("input",{type:"color",value:((Yn=a.value.content)==null?void 0:Yn.backBgColor)||"#ffffff",class:"color-input-native",onInput:t[166]||(t[166]=o=>y({backBgColor:o.target.value}))},null,40,Kp)]),e("div",Zp,[t[363]||(t[363]=e("label",{class:"form-label"},"Back Text",-1)),e("input",{type:"color",value:((Jn=a.value.content)==null?void 0:Jn.backTextColor)||"#1e293b",class:"color-input-native",onInput:t[167]||(t[167]=o=>y({backTextColor:o.target.value}))},null,40,ev)])])],2)):a.value.type==="stepper"?(l(),i("div",{key:12,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[370]||(t[370]=e("div",{class:"panel-title"},"Stepper Configuration",-1)),e("div",tv,[t[365]||(t[365]=e("label",{class:"form-label"},"Steps Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Qn=a.value.content)==null?void 0:Qn.steps)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[168]||(t[168]=o=>{var Q;return y({steps:Ee(o.target.value,(Q=a.value.content)==null?void 0:Q.steps)})})},null,40,ov)]),e("div",nv,[e("div",lv,[t[366]||(t[366]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Xn=a.value.content)==null?void 0:Xn.bgColor)||"#ffffff",class:"color-input-native",onInput:t[169]||(t[169]=o=>y({bgColor:o.target.value}))},null,40,iv)]),e("div",av,[t[367]||(t[367]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Kn=a.value.content)==null?void 0:Kn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[170]||(t[170]=o=>y({accentColor:o.target.value}))},null,40,sv)]),e("div",rv,[t[368]||(t[368]=e("label",{class:"form-label"},"Title Color",-1)),e("input",{type:"color",value:((Zn=a.value.content)==null?void 0:Zn.titleColor)||"#0f172a",class:"color-input-native",onInput:t[171]||(t[171]=o=>y({titleColor:o.target.value}))},null,40,dv)]),e("div",uv,[t[369]||(t[369]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((el=a.value.content)==null?void 0:el.textColor)||"#475569",class:"color-input-native",onInput:t[172]||(t[172]=o=>y({textColor:o.target.value}))},null,40,cv)])])],2)):a.value.type==="poll"?(l(),i("div",{key:13,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[374]||(t[374]=e("div",{class:"panel-title"},"Poll Configuration",-1)),e("div",pv,[t[371]||(t[371]=e("label",{class:"form-label"},"Question",-1)),e("input",{type:"text",value:((tl=a.value.content)==null?void 0:tl.question)||"",class:"input",onInput:t[173]||(t[173]=o=>y({question:o.target.value}))},null,40,vv)]),e("div",fv,[t[372]||(t[372]=e("label",{class:"form-label"},"Options (JSON)",-1)),e("textarea",{value:JSON.stringify(((ol=a.value.content)==null?void 0:ol.options)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[174]||(t[174]=o=>{var Q;return y({options:Ee(o.target.value,(Q=a.value.content)==null?void 0:Q.options)})})},null,40,gv)]),e("div",mv,[e("div",bv,[t[373]||(t[373]=e("label",{class:"form-label"},"Voted Color",-1)),e("input",{type:"color",value:((nl=a.value.content)==null?void 0:nl.votedColor)||"#6c47ff",class:"color-input-native",onInput:t[175]||(t[175]=o=>y({votedColor:o.target.value}))},null,40,yv)])])],2)):a.value.type==="labeledimage"?(l(),i("div",{key:14,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[377]||(t[377]=e("div",{class:"panel-title"},"Labeled Image Configuration",-1)),e("div",hv,[t[375]||(t[375]=e("label",{class:"form-label"},"Image URL",-1)),e("input",{type:"text",value:((ll=a.value.content)==null?void 0:ll.imageUrl)||"",class:"input",onInput:t[176]||(t[176]=o=>y({imageUrl:o.target.value}))},null,40,xv)]),e("div",kv,[t[376]||(t[376]=e("label",{class:"form-label"},"Markers (JSON)",-1)),e("textarea",{value:JSON.stringify(((il=a.value.content)==null?void 0:il.markers)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[177]||(t[177]=o=>{var Q;return y({markers:Ee(o.target.value,(Q=a.value.content)==null?void 0:Q.markers)})})},null,40,wv)])],2)):a.value.type==="matching"?(l(),i("div",{key:15,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[379]||(t[379]=e("div",{class:"panel-title"},"Matching Configuration",-1)),e("div",Cv,[t[378]||(t[378]=e("label",{class:"form-label"},"Pairs (JSON)",-1)),e("textarea",{value:JSON.stringify(((al=a.value.content)==null?void 0:al.pairs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[178]||(t[178]=o=>{var Q;return y({pairs:Ee(o.target.value,(Q=a.value.content)==null?void 0:Q.pairs)})})},null,40,Sv)])],2)):a.value.type==="sorting"?(l(),i("div",{key:16,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[381]||(t[381]=e("div",{class:"panel-title"},"Sorting Configuration",-1)),e("div",$v,[t[380]||(t[380]=e("label",{class:"form-label"},"Items (JSON) - Target Order",-1)),e("textarea",{value:JSON.stringify(((sl=a.value.content)==null?void 0:sl.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[179]||(t[179]=o=>{var Q;return y({items:Ee(o.target.value,(Q=a.value.content)==null?void 0:Q.items)})})},null,40,Iv)])],2)):a.value.type==="cloze"?(l(),i("div",{key:17,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[384]||(t[384]=e("div",{class:"panel-title"},"Cloze Configuration",-1)),e("div",Ev,[t[382]||(t[382]=e("label",{class:"form-label"},"Text (Wrap blanks in [ ])",-1)),e("textarea",{value:((rl=a.value.content)==null?void 0:rl.text)||"",class:"textarea",style:{"min-height":"100px","font-family":"monospace","font-size":"12px"},onChange:t[180]||(t[180]=o=>y({text:o.target.value}))},null,40,Av)]),e("div",Mv,[e("div",Pv,[e("input",{type:"checkbox",id:"showCheckBtn",checked:((dl=a.value.content)==null?void 0:dl.showCheckBtn)!==!1,onChange:t[181]||(t[181]=o=>y({showCheckBtn:o.target.checked}))},null,40,Tv),t[383]||(t[383]=e("label",{for:"showCheckBtn",class:"form-label mb-0"},"Show Check Answers Button",-1))])])],2)):a.value.type==="scenario"?(l(),i("div",{key:18,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[386]||(t[386]=e("div",{class:"panel-title"},"Scenario Chat",-1)),e("div",Bv,[t[385]||(t[385]=e("label",{class:"form-label"},"Messages (JSON)",-1)),e("textarea",{value:JSON.stringify(((ul=a.value.content)==null?void 0:ul.messages)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[182]||(t[182]=o=>{var Q;return y({messages:Ee(o.target.value,(Q=a.value.content)==null?void 0:Q.messages)})})},null,40,Nv)])],2)):a.value.type==="progress"?(l(),i("div",{key:19,class:X(["panel-section",de.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[390]||(t[390]=e("div",{class:"panel-title"},"Progress Settings",-1)),e("div",zv,[e("div",Lv,[t[387]||(t[387]=e("label",{class:"form-label"},"Mock XP",-1)),e("input",{type:"number",value:((cl=a.value.content)==null?void 0:cl.mockXP)||350,class:"input",onInput:t[183]||(t[183]=o=>y({mockXP:Number(o.target.value)}))},null,40,jv)]),e("div",Dv,[t[388]||(t[388]=e("label",{class:"form-label"},"Mock Percent",-1)),e("input",{type:"number",value:((pl=a.value.content)==null?void 0:pl.mockPercent)||65,class:"input",onInput:t[184]||(t[184]=o=>y({mockPercent:Number(o.target.value)}))},null,40,_v)])]),e("div",qv,[e("div",Rv,[t[389]||(t[389]=e("label",{class:"form-label"},"Fill Color",-1)),e("input",{type:"color",value:((vl=a.value.content)==null?void 0:vl.fillColor)||"#10b981",class:"color-input-native",onInput:t[185]||(t[185]=o=>y({fillColor:o.target.value}))},null,40,Ov)])])],2)):q("",!0),e("div",Fv,[t[394]||(t[394]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Uv,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[186]||(t[186]=o=>E(u).duplicateElement(E(r).projectId,E(r).currentSlideId,a.value.id))},[...t[391]||(t[391]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),ee(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[187]||(t[187]=o=>{E(r).showInteractionEditor=!0,E(r).interactionElementId=a.value.id})},[...t[392]||(t[392]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),ee(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[188]||(t[188]=o=>{E(u).deleteElement(E(r).projectId,E(r).currentSlideId,a.value.id),E(r).clearSelection()})},[...t[393]||(t[393]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),ee(" Delete Element ",-1)])])])])],64)):(l(),i("div",cs,[e("div",ps,[e("button",{type:"button",class:X(["slide-settings-tab",G.value==="canvas"&&"active"]),onClick:t[23]||(t[23]=o=>G.value="canvas")},[...t[195]||(t[195]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:X(["slide-settings-tab",G.value==="transitions"&&"active"]),onClick:t[24]||(t[24]=o=>G.value="transitions")},[...t[196]||(t[196]=[it('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-3f426f62><path d="M5 7h5" data-v-3f426f62></path><path d="M5 12h10" data-v-3f426f62></path><path d="M5 17h14" data-v-3f426f62></path><path d="M14 7l5 5-5 5" data-v-3f426f62></path></svg><span data-v-3f426f62>Transitions</span>',2)])],2),e("button",{type:"button",class:X(["slide-settings-tab",G.value==="navigation"&&"active"]),onClick:t[25]||(t[25]=o=>G.value="navigation")},[...t[197]||(t[197]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),G.value==="canvas"?(l(),i("div",vs,[t[212]||(t[212]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",fs,[t[198]||(t[198]=e("label",{class:"form-label"},"Title",-1)),pe(e("input",{"onUpdate:modelValue":t[26]||(t[26]=o=>Fe.value.title=o),class:"input",onInput:t[27]||(t[27]=o=>st("title",Fe.value.title))},null,544),[[Ie,Fe.value.title]])]),e("div",gs,[t[199]||(t[199]=e("label",{class:"form-label"},"Background",-1)),e("div",ms,[(l(),i(te,null,ce(["color","gradient","image"],o=>{var Q;return e("button",{key:o,class:X(["bg-type-btn",(((Q=p.value)==null?void 0:Q.backgroundType)||"color")===o&&"active"]),onClick:fl=>Je({backgroundType:o})},w(o),11,bs)}),64))]),(((B=p.value)==null?void 0:B.backgroundType)||"color")==="color"?(l(),i("div",ys,[e("input",{type:"color",value:((ie=p.value)==null?void 0:ie.background)||"#ffffff",onInput:t[28]||(t[28]=o=>Je({background:o.target.value})),class:"color-input-native"},null,40,hs),e("input",{value:((Se=p.value)==null?void 0:Se.background)||"#ffffff",class:"input",onInput:t[29]||(t[29]=o=>Je({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,xs)])):((Te=p.value)==null?void 0:Te.backgroundType)==="gradient"?pe((l(),i("input",{key:1,"onUpdate:modelValue":t[30]||(t[30]=o=>Fe.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[31]||(t[31]=o=>Je({backgroundGradient:Fe.value.backgroundGradient}))},null,544)),[[Ie,Fe.value.backgroundGradient]]):pe((l(),i("input",{key:2,"onUpdate:modelValue":t[32]||(t[32]=o=>Fe.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[33]||(t[33]=o=>Je({backgroundImage:Fe.value.backgroundImage}))},null,544)),[[Ie,Fe.value.backgroundImage]])]),e("div",ks,[t[209]||(t[209]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",ws,[(l(!0),i(te,null,ce(E(_l),o=>{var Q;return l(),i("button",{key:o.id,type:"button",class:X(["canvas-size-card",((Q=f.value)==null?void 0:Q.id)===o.id&&"active"]),onClick:fl=>Mt(o)},[e("span",Ss,[e("span",{class:X(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[200]||(t[200]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",$s,w(o.label),1),e("span",Is,w(o.ratioLabel),1)],10,Cs)}),128))]),e("div",Es,[e("div",As,[t[201]||(t[201]=e("span",null,"Custom",-1)),e("span",Ms,"Current ratio "+w(H.value),1)]),e("div",Ps,[e("div",Ts,[t[203]||(t[203]=e("label",{class:"form-label"},"Width",-1)),e("div",Bs,[e("input",{type:"number",min:"320",max:"4096",value:k.value.width,class:"input",onChange:t[34]||(t[34]=o=>ct("width",o.target.value))},null,40,Ns),t[202]||(t[202]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[206]||(t[206]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",zs,[t[205]||(t[205]=e("label",{class:"form-label"},"Height",-1)),e("div",Ls,[e("input",{type:"number",min:"320",max:"4096",value:k.value.height,class:"input",onChange:t[35]||(t[35]=o=>ct("height",o.target.value))},null,40,js),t[204]||(t[204]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",Ds,[pe(e("input",{type:"checkbox","onUpdate:modelValue":t[36]||(t[36]=o=>ae.value=o)},null,512),[[_t,ae.value]]),t[207]||(t[207]=ee(" Maintain proportions ",-1))]),t[208]||(t[208]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[210]||(t[210]=it('<div class="canvas-size-callout" data-v-3f426f62><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-3f426f62><circle cx="12" cy="12" r="9" data-v-3f426f62></circle><path d="M12 10v6" data-v-3f426f62></path><path d="M12 7h.01" data-v-3f426f62></path></svg><span data-v-3f426f62>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",_s,[t[211]||(t[211]=e("div",{class:"panel-title"},"Slide Notes",-1)),pe(e("textarea",{"onUpdate:modelValue":t[37]||(t[37]=o=>Fe.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[38]||(t[38]=o=>st("notes",Fe.value.notes))},null,544),[[Ie,Fe.value.notes]])])])):G.value==="transitions"?(l(),i("div",qs,[t[217]||(t[217]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((je=p.value)==null?void 0:je.transition)||"none",class:"select",onChange:t[39]||(t[39]=o=>Je({transition:o.target.value}))},[...t[213]||(t[213]=[it('<option value="none" data-v-3f426f62>None</option><option value="fade" data-v-3f426f62>Fade</option><option value="slide" data-v-3f426f62>Slide</option><option value="zoom" data-v-3f426f62>Zoom</option><option value="flip" data-v-3f426f62>Flip</option>',5)])],40,Rs),e("div",Os,[t[214]||(t[214]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((ze=p.value)==null?void 0:ze.duration)??0,class:"input",onChange:t[40]||(t[40]=o=>Ct(o.target.value))},null,40,Fs),t[215]||(t[215]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Us,[e("input",{type:"checkbox",checked:!!(($e=p.value)!=null&&$e.advanceOnMediaEnd),onChange:t[41]||(t[41]=o=>Je({advanceOnMediaEnd:o.target.checked}))},null,40,Vs),t[216]||(t[216]=ee(" Advance when slide media finishes ",-1))]),t[218]||(t[218]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",Ws,[t[224]||(t[224]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",Gs,[e("input",{type:"checkbox",checked:h.value.autoPlay,onChange:t[42]||(t[42]=o=>He({autoPlay:o.target.checked}))},null,40,Hs),t[219]||(t[219]=ee(" Autoplay preview and exported presentation ",-1))]),e("label",Ys,[e("input",{type:"checkbox",checked:h.value.loop,onChange:t[43]||(t[43]=o=>He({loop:o.target.checked}))},null,40,Js),t[220]||(t[220]=ee(" Loop back to the first slide at the end ",-1))]),e("label",Qs,[e("input",{type:"checkbox",checked:h.value.showProgress,onChange:t[44]||(t[44]=o=>He({showProgress:o.target.checked}))},null,40,Xs),t[221]||(t[221]=ee(" Show progress bar in preview ",-1))]),e("label",Ks,[e("input",{type:"checkbox",checked:h.value.showNavControls,onChange:t[45]||(t[45]=o=>He({showNavControls:o.target.checked}))},null,40,Zs),t[222]||(t[222]=ee(" Show previous/next and dot navigation ",-1))]),e("label",er,[e("input",{type:"checkbox",checked:h.value.allowKeyboardNav,onChange:t[46]||(t[46]=o=>He({allowKeyboardNav:o.target.checked}))},null,40,tr),t[223]||(t[223]=ee(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},Wv=nt(Vv,[["__scopeId","data-v-3f426f62"]]),Gv={class:"editor-toolbar"},Hv={class:"toolbar-group"},Yv={key:0,class:"toolbar-divider"},Jv=["data-group-name"],Qv=["data-tooltip","onClick"],Xv={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kv={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zv={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ef={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tf={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},of={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nf={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lf={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},af={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sf={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},rf={key:10,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},df={key:11,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},uf={key:12,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},cf={key:13,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pf={key:14,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vf={key:15,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ff={key:16,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},gf={key:17,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},mf={key:18,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},bf={key:19,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},yf={key:20,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},hf={class:"tool-label"},xf={class:"toolbar-group"},kf={class:"toolbar-group"},wf={class:"toolbar-group"},Cf={__name:"EditorToolbar",emits:["open-ai-project"],setup(A,{emit:r}){const u=r,c=rt();dt();const p=[{id:"basic",name:"Basic",tools:[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"}]},{id:"media",name:"Media",tools:[{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"}]},{id:"interactive",name:"Interactive",tools:[{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"tabs",label:"Tabs",tooltip:"Add tabs",icon:"tabs"},{id:"accordion",label:"Accordion",tooltip:"Add accordion",icon:"accordion"},{id:"flipcard",label:"Flip Card",tooltip:"Add flip card",icon:"flipcard"},{id:"stepper",label:"Stepper",tooltip:"Add stepper",icon:"stepper"}]},{id:"learning",name:"Learning & Data",tools:[{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"},{id:"poll",label:"Poll",tooltip:"Add poll",icon:"poll"},{id:"labeledimage",label:"L-Image",tooltip:"Add labeled image",icon:"labeledimage"},{id:"matching",label:"Match",tooltip:"Add matching game",icon:"matching"},{id:"sorting",label:"Sort",tooltip:"Add sorting game",icon:"sorting"},{id:"cloze",label:"Cloze",tooltip:"Fill in blanks",icon:"cloze"},{id:"scenario",label:"Dialog",tooltip:"Scenario chat",icon:"scenario"},{id:"progress",label:"Stats",tooltip:"Track progress",icon:"progress"}]}];function h(k){c.setActiveTool(k)}return(k,f)=>(l(),i("div",Gv,[e("div",Hv,[e("button",{class:X(["tool-btn",E(c).activeTool==="select"&&"active"]),onClick:f[0]||(f[0]=H=>h("select")),"data-tooltip":"Select (V)"},[...f[7]||(f[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),f[34]||(f[34]=e("div",{class:"toolbar-divider"},null,-1)),(l(),i(te,null,ce(p,(H,ae)=>(l(),i(te,{key:H.id},[ae>0?(l(),i("div",Yv)):q("",!0),e("div",{class:"toolbar-group element-group","data-group-name":H.name},[(l(!0),i(te,null,ce(H.tools,G=>(l(),i("button",{key:G.id,class:X(["tool-btn",E(c).activeTool===G.id&&"active"]),"data-tooltip":G.tooltip,onClick:V=>h(G.id)},[G.icon==="text"?(l(),i("svg",Xv,[...f[8]||(f[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):G.icon==="heading"?(l(),i("svg",Kv,[...f[9]||(f[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):G.icon==="image"?(l(),i("svg",Zv,[...f[10]||(f[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):G.icon==="shape"?(l(),i("svg",ef,[...f[11]||(f[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):G.icon==="button"?(l(),i("svg",tf,[...f[12]||(f[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):G.icon==="hotspot"?(l(),i("svg",of,[...f[13]||(f[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):G.icon==="video"?(l(),i("svg",nf,[...f[14]||(f[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):G.icon==="audio"?(l(),i("svg",lf,[...f[15]||(f[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):G.icon==="quiz"?(l(),i("svg",af,[...f[16]||(f[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):G.icon==="chart"?(l(),i("svg",sf,[...f[17]||(f[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):G.icon==="tabs"?(l(),i("svg",rf,[...f[18]||(f[18]=[e("rect",{x:"2",y:"7",width:"20",height:"13",rx:"2"},null,-1),e("path",{d:"M2 11h20"},null,-1),e("path",{d:"M8 7v4"},null,-1)])])):G.icon==="accordion"?(l(),i("svg",df,[...f[19]||(f[19]=[e("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"},null,-1),e("path",{d:"M3 10h18"},null,-1),e("path",{d:"M3 16h18"},null,-1)])])):G.icon==="flipcard"?(l(),i("svg",uf,[...f[20]||(f[20]=[e("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"},null,-1),e("path",{d:"M3 12h18"},null,-1),e("path",{d:"M21 8h-4"},null,-1)])])):G.icon==="stepper"?(l(),i("svg",cf,[...f[21]||(f[21]=[e("circle",{cx:"6",cy:"12",r:"3"},null,-1),e("circle",{cx:"18",cy:"12",r:"3"},null,-1),e("path",{d:"M9 12h6"},null,-1)])])):G.icon==="poll"?(l(),i("svg",pf,[...f[22]||(f[22]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("path",{d:"M7 10h10"},null,-1),e("path",{d:"M7 14h6"},null,-1)])])):G.icon==="labeledimage"?(l(),i("svg",vf,[...f[23]||(f[23]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"12",cy:"12",r:"2"},null,-1),e("line",{x1:"12",y1:"14",x2:"12",y2:"18"},null,-1)])])):G.icon==="matching"?(l(),i("svg",ff,[...f[24]||(f[24]=[it('<path d="M4 6h4" data-v-77f15107></path><path d="M4 18h4" data-v-77f15107></path><path d="M16 6h4" data-v-77f15107></path><path d="M16 18h4" data-v-77f15107></path><line x1="8" y1="6" x2="16" y2="18" data-v-77f15107></line>',5)])])):G.icon==="sorting"?(l(),i("svg",gf,[...f[25]||(f[25]=[e("path",{d:"M3 6h18"},null,-1),e("path",{d:"M7 12h10"},null,-1),e("path",{d:"M10 18h4"},null,-1)])])):G.icon==="cloze"?(l(),i("svg",mf,[...f[26]||(f[26]=[e("path",{d:"M4 12h4"},null,-1),e("path",{d:"M16 12h4"},null,-1),e("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"},null,-1)])])):G.icon==="scenario"?(l(),i("svg",bf,[...f[27]||(f[27]=[e("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},null,-1)])])):G.icon==="progress"?(l(),i("svg",yf,[...f[28]||(f[28]=[e("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null,-1)])])):q("",!0),e("span",hf,w(G.label),1)],10,Qv))),128))],8,Jv)],64))),64)),f[35]||(f[35]=e("div",{class:"toolbar-divider"},null,-1)),e("div",xf,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:f[1]||(f[1]=H=>u("open-ai-project")),"data-tooltip":"Create a new AI project"},[...f[29]||(f[29]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),f[36]||(f[36]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",kf,[e("button",{class:"tool-btn",onClick:f[2]||(f[2]=H=>E(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...f[30]||(f[30]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:f[3]||(f[3]=H=>E(c).zoomReset())},w(Math.round(E(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:f[4]||(f[4]=H=>E(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...f[31]||(f[31]=[it('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-77f15107><circle cx="11" cy="11" r="8" data-v-77f15107></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-77f15107></line><line x1="11" y1="8" x2="11" y2="14" data-v-77f15107></line><line x1="8" y1="11" x2="14" y2="11" data-v-77f15107></line></svg>',1)])])]),f[37]||(f[37]=e("div",{class:"toolbar-divider"},null,-1)),e("div",wf,[e("button",{class:X(["tool-btn",E(c).showGrid&&"active"]),onClick:f[5]||(f[5]=H=>E(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...f[32]||(f[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:X(["tool-btn",E(c).snapToGrid&&"active"]),onClick:f[6]||(f[6]=H=>E(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...f[33]||(f[33]=[it('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-77f15107><circle cx="5" cy="5" r="1" data-v-77f15107></circle><circle cx="12" cy="5" r="1" data-v-77f15107></circle><circle cx="19" cy="5" r="1" data-v-77f15107></circle><circle cx="5" cy="12" r="1" data-v-77f15107></circle><circle cx="12" cy="12" r="1" data-v-77f15107></circle><circle cx="19" cy="12" r="1" data-v-77f15107></circle><circle cx="5" cy="19" r="1" data-v-77f15107></circle><circle cx="12" cy="19" r="1" data-v-77f15107></circle><circle cx="19" cy="19" r="1" data-v-77f15107></circle></svg>',1)])],2)])]))}},Sf=nt(Cf,[["__scopeId","data-v-77f15107"]]),$f=["onMousedown"],If={key:1,class:"selection-border locked-border"},Ef={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(A){const r=A,u=rt(),c=dt(),p=Il("canvasScale",L(1)),h=M(()=>u.projectId),k=M(()=>u.currentSlideId),f=M(()=>u.selectedElementIds.includes(r.element.id)),H=M(()=>r.element.locked),ae=M(()=>r.element.visible!==!1),G=M(()=>{const ne=r.element.content||{};return!!(ne.text||ne.label||ne.question||ne.popupTitle||ne.popupContent)});let V=!1,me=0,z=0,P=new Map;function a(ne){if(!u.snapToGrid||!u.gridSize)return ne;const fe=u.gridSize;return Math.round(ne/fe)*fe}function N(ne){var ge;if(H.value||ne.target.classList.contains("resize-handle"))return;const fe=ne.ctrlKey||ne.metaKey||ne.shiftKey;f.value?fe&&u.selectElement(r.element.id,!0):u.selectElement(r.element.id,fe),u.setActiveTool("select"),V=!1,me=ne.clientX,z=ne.clientY,P.clear();const re=(ge=c.getProject(h.value))==null?void 0:ge.slides.find(Ne=>Ne.id===k.value);re&&u.selectedElementIds.forEach(Ne=>{const de=re.elements.find(I=>I.id===Ne);de&&!de.locked&&P.set(Ne,{x:de.x,y:de.y})}),window.addEventListener("mousemove",j),window.addEventListener("mouseup",Y),ne.stopPropagation()}function j(ne){const fe=(ne.clientX-me)/p.value,re=(ne.clientY-z)/p.value;!V&&(Math.abs(fe)>3||Math.abs(re)>3)&&(V=!0),V&&P.forEach((ge,Ne)=>{const de=ge.x+fe,I=ge.y+re;c.updateElement(h.value,k.value,Ne,{x:de,y:I},{persist:!1})})}function Y(ne){if(V){const fe=(ne.clientX-me)/p.value,re=(ne.clientY-z)/p.value;P.forEach((ge,Ne)=>{c.updateElement(h.value,k.value,Ne,{x:a(ge.x+fe),y:a(ge.y+re)},{persist:!1})}),c.commitProject(h.value)}V||!(ne.ctrlKey||ne.metaKey||ne.shiftKey)&&u.selectedElementIds.length>1&&u.selectElement(r.element.id,!1),V=!1,window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",Y)}const g=["n","ne","e","se","s","sw","w","nw"];let F=!1,se="",oe=0,we=0,R=0,U=0,ve=0,be=0;function le(ne,fe){H.value||(ne.stopPropagation(),ne.preventDefault(),F=!0,se=fe,oe=ne.clientX,we=ne.clientY,R=r.element.width,U=r.element.height,ve=r.element.x,be=r.element.y,window.addEventListener("mousemove",Ce),window.addEventListener("mouseup",C))}function Ce(ne){if(!F)return;const fe=p.value,re=(ne.clientX-oe)/fe,ge=(ne.clientY-we)/fe,Ne=20;let de=ve,I=be,$=R,O=U;if(se.includes("e")&&($=Math.max(Ne,R+re)),se.includes("s")&&(O=Math.max(Ne,U+ge)),se.includes("w")){const ke=Math.max(Ne,R-re);de=ve+(R-ke),$=ke}if(se.includes("n")){const ke=Math.max(Ne,U-ge);I=be+(U-ke),O=ke}if(u.snapToGrid&&u.gridSize){const ke=u.gridSize;$=Math.round($/ke)*ke,O=Math.round(O/ke)*ke,de=Math.round(de/ke)*ke,I=Math.round(I/ke)*ke}c.updateElement(h.value,k.value,r.element.id,{x:de,y:I,width:$,height:O})}function C(){F=!1,window.removeEventListener("mousemove",Ce),window.removeEventListener("mouseup",C)}function D(){["text","heading"].includes(r.element.type)&&u.focusPropertiesSection("content")}const _=M(()=>({position:"absolute",left:`${r.element.x}px`,top:`${r.element.y}px`,width:`${r.element.width}px`,height:`${r.element.height}px`,transform:`rotate(${r.element.rotation||0}deg)`,opacity:r.element.opacity??1,zIndex:r.element.zIndex||1,cursor:H.value?"not-allowed":"move",visibility:ae.value?"visible":"hidden",userSelect:"none"}));function K(ne){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[ne]||"auto"}function xe(ne="content"){u.focusPropertiesSection(ne)}function De(){const ne=G.value?"improve":r.element.type==="image"?"image":"generate";u.openAIPanel(ne)}function Me(){const ne=c.duplicateElement(h.value,k.value,r.element.id);ne&&(u.selectElement(ne.id),u.focusPropertiesSection("geometry"))}function Re(){c.deleteElement(h.value,k.value,r.element.id),u.clearSelection()}return(ne,fe)=>(l(),i("div",{class:X(["element-wrapper",f.value&&"selected",H.value&&"locked"]),style:he(_.value),onMousedown:N,onDblclick:D},[El(ne.$slots,"default",{},void 0),f.value&&!H.value?(l(),i(te,{key:0},[fe[6]||(fe[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:fe[3]||(fe[3]=Ve(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:fe[0]||(fe[0]=re=>xe("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:fe[1]||(fe[1]=re=>xe("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:fe[2]||(fe[2]=re=>xe("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:De},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Me,title:"Duplicate element","aria-label":"Duplicate element"},[...fe[4]||(fe[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Re,title:"Delete element","aria-label":"Delete element"},[...fe[5]||(fe[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(te,null,ce(g,re=>e("div",{key:re,class:X(["resize-handle",`handle-${re}`]),style:he({cursor:K(re)}),onMousedown:Ve(ge=>le(ge,re),["stop"])},null,46,$f)),64))],64)):q("",!0),f.value&&H.value?(l(),i("div",If)):q("",!0)],38))}},Af=nt(Ef,[["__scopeId","data-v-d539ca8b"]]),Ht={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(A){const r=A,u=M(()=>r.element.content||{}),c=rt(),p=dt(),h=L(!1),k=L(null),f=L("");ot(()=>u.value.text,V=>{h.value||(f.value=V||(r.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function H(){c.selectedElementId===r.element.id&&(h.value=!0,xl(()=>{if(k.value)if(k.value.focus(),typeof k.value.setSelectionRange=="function"){const V=k.value.value.length;k.value.setSelectionRange(V,V)}else{const V=document.createRange();V.selectNodeContents(k.value),V.collapse(!1);const me=window.getSelection();me.removeAllRanges(),me.addRange(V)}}))}function ae(V){h.value&&V.stopPropagation()}function G(){h.value=!1;const V=f.value;p.updateElement(c.projectId,c.currentSlideId,r.element.id,{content:{...r.element.content,text:V}})}return(V,me)=>h.value?pe((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:k,"onUpdate:modelValue":me[0]||(me[0]=z=>f.value=z),onBlur:G,onMousedown:ae,style:he({fontSize:(u.value.fontSize||16)+"px",fontFamily:u.value.fontFamily||"Inter, sans-serif",fontWeight:u.value.fontWeight||"normal",fontStyle:u.value.fontStyle||"normal",textDecoration:u.value.textDecoration||"none",textAlign:u.value.textAlign||"left",color:u.value.color||"#1a1a2e",lineHeight:u.value.lineHeight||1.5,textTransform:u.value.textTransform||"none",letterSpacing:(u.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[Ie,f.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:H,style:he({fontSize:(u.value.fontSize||16)+"px",fontFamily:u.value.fontFamily||"Inter, sans-serif",fontWeight:u.value.fontWeight||"normal",fontStyle:u.value.fontStyle||"normal",textDecoration:u.value.textDecoration||"none",textAlign:u.value.textAlign||"left",color:u.value.color||"#1a1a2e",lineHeight:u.value.lineHeight||1.5,textTransform:u.value.textTransform||"none",letterSpacing:(u.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},w(f.value),37))}},Mf={key:0,class:"image-status image-loading"},Pf=["src","alt"],Tf={key:2,class:"image-placeholder"},Bf={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Nf={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(A){const r=A,u=L(""),c=L(0),p=L("idle"),h=M(()=>{var ae;return Array.isArray((ae=r.element.content)==null?void 0:ae.fallbackSrcs)?r.element.content.fallbackSrcs:[]});function k(){var ae;u.value=((ae=r.element.content)==null?void 0:ae.src)||"",c.value=0,p.value=u.value?"loading":"empty"}function f(){p.value="loaded"}function H(){const ae=h.value[c.value];if(ae){c.value+=1,u.value=ae,p.value="loading";return}p.value="error"}return ot(()=>{var ae,G;return[(ae=r.element.content)==null?void 0:ae.src,JSON.stringify(((G=r.element.content)==null?void 0:G.fallbackSrcs)||[])]},()=>k(),{immediate:!0}),(ae,G)=>{var V,me,z;return l(),i("div",{class:"image-element",style:he({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((V=A.element.content)==null?void 0:V.borderRadius)||0)+"px",border:`${((me=A.element.content)==null?void 0:me.borderWidth)||0}px solid ${((z=A.element.content)==null?void 0:z.borderColor)||"transparent"}`})},[p.value==="loading"?(l(),i("div",Mf,[...G[0]||(G[0]=[e("span",{class:"image-status-spinner"},null,-1),e("span",null,"Loading image…",-1)])])):q("",!0),u.value&&p.value!=="error"?(l(),i("img",{key:1,src:u.value,alt:A.element.content.alt||"",style:he({width:"100%",height:"100%",objectFit:A.element.content.objectFit||"cover",display:p.value==="loaded"?"block":"none"}),draggable:"false",onLoad:f,onError:H},null,44,Pf)):q("",!0),p.value==="empty"||p.value==="error"?(l(),i("div",Tf,[(l(),i("svg",Bf,[...G[1]||(G[1]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),e("span",null,w(p.value==="error"?"Image unavailable":"Image"),1)])):q("",!0)],4)}}},zf=nt(Nf,[["__scopeId","data-v-cd42b1c3"]]),Lf={class:"shape-element",style:{width:"100%",height:"100%"}},jf=["width","height"],Df=["points","fill","stroke","stroke-width"],_f={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(A){const r=A,u=M(()=>r.element.content||{}),c=M(()=>{const k=u.value.shapeType||"rectangle",f={width:"100%",height:"100%",background:u.value.fillColor||"#6c47ff",border:`${u.value.borderWidth||0}px solid ${u.value.borderColor||"transparent"}`,opacity:u.value.opacity??1};return k==="circle"?{...f,borderRadius:"50%"}:k==="rectangle"?{...f,borderRadius:(u.value.borderRadius||0)+"px"}:f}),p=M(()=>["triangle","star","arrow","diamond"].includes(u.value.shapeType)),h=M(()=>{const k=r.element.width||150,f=r.element.height||100,H=u.value.shapeType;if(H==="triangle")return`${k/2},0 ${k},${f} 0,${f}`;if(H==="diamond")return`${k/2},0 ${k},${f/2} ${k/2},${f} 0,${f/2}`;if(H==="arrow")return`0,${f*.3} ${k*.6},${f*.3} ${k*.6},0 ${k},${f/2} ${k*.6},${f} ${k*.6},${f*.7} 0,${f*.7}`;if(H==="star"){const ae=k/2,G=f/2,V=Math.min(k,f)/2,me=V*.4;let z="";for(let P=0;P<10;P++){const a=(P*36-90)*Math.PI/180,N=P%2===0?V:me;z+=`${ae+N*Math.cos(a)},${G+N*Math.sin(a)} `}return z.trim()}return""});return(k,f)=>(l(),i("div",Lf,[p.value?(l(),i("svg",{key:1,width:A.element.width,height:A.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:h.value,fill:u.value.fillColor||"#6c47ff",stroke:u.value.borderColor||"none","stroke-width":u.value.borderWidth||0},null,8,Df)],8,jf)):(l(),i("div",{key:0,style:he(c.value)},null,4))]))}},qf={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(A){const r=A,u=M(()=>r.element.content||{}),c=M(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},h=p[u.value.variant||"primary"]||p.primary;return{...h,background:u.value.bgColor||h.background,color:u.value.textColor||h.color,border:u.value.borderColor?`1px solid ${u.value.borderColor}`:h.border,borderRadius:(u.value.borderRadius??8)+"px"}});return(p,h)=>(l(),i("div",{class:"button-element",style:he({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(u.value.fontSize??15)+"px",fontWeight:u.value.fontWeight??600,letterSpacing:(u.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:u.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},w(u.value.label||"Button"),5))}},Rf={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Of={class:"popup-header"},Ff={class:"popup-body"},Uf={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(A){const r=A,u=M(()=>r.element.content||{}),c=L(!1);function p(h){h.stopPropagation(),c.value=!c.value}return(h,k)=>(l(),i("div",Rf,[e("div",{class:"hotspot-btn",style:he({width:"100%",height:"100%",background:u.value.bgColor||"#6c47ff",borderRadius:(u.value.borderRadius??999)>=999?"50%":(u.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:u.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Ve(p,["stop"])},w(u.value.icon||"?"),5),Et(Dt,{name:"fade"},{default:pt(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:he({background:u.value.popupBgColor||"#ffffff",color:u.value.popupTextColor||"#1a1a2e"})},[e("div",Of,[e("strong",null,w(u.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:k[0]||(k[0]=Ve(f=>c.value=!1,["stop"]))},"×")]),e("div",Ff,w(u.value.popupContent||"Add your content in the properties panel."),1)],4)):q("",!0)]),_:1})]))}},Vf=nt(Uf,[["__scopeId","data-v-ef5f15f6"]]),Wf={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},Gf=["src"],Hf=["src","poster","autoplay","controls","loop","muted"],Yf={key:2,class:"video-placeholder"},Jf={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Qf={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(A){const r=A,u=M(()=>r.element.content||{}),c=M(()=>{const h=u.value.src||"";return h.includes("youtube")||h.includes("youtu.be")}),p=M(()=>{var k,f;const h=u.value.src||"";if(c.value){const H=(k=h.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:k[1];return H?`https://www.youtube.com/embed/${H}`:""}if(h.includes("vimeo.com")){const H=(f=h.match(/vimeo\.com\/(\d+)/))==null?void 0:f[1];return H?`https://player.vimeo.com/video/${H}`:""}return""});return(h,k)=>(l(),i("div",Wf,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,Gf)):u.value.src&&!p.value?(l(),i("video",{key:1,src:u.value.src,poster:u.value.poster,autoplay:u.value.autoplay,controls:u.value.controls!==!1,loop:u.value.loop,muted:u.value.muted,style:he({width:"100%",height:"100%",objectFit:u.value.objectFit||"cover"})},null,12,Hf)):(l(),i("div",Yf,[(l(),i("svg",Jf,[...k[0]||(k[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),k[1]||(k[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Xf=nt(Qf,[["__scopeId","data-v-dfea1a16"]]),Kf=["stroke"],Zf=["src","controls","autoplay","loop"],e1={key:1,style:{"font-size":"11px",color:"#aaa"}},t1={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(A){return(r,u)=>{var c,p,h,k,f,H,ae,G,V;return l(),i("div",{class:"audio-element",style:he({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=A.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=A.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((h=A.element.content)==null?void 0:h.accentColor)||"#6c47ff","stroke-width":"2"},[...u[1]||(u[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Kf)),e("span",{style:he({fontSize:"13px",color:((k=A.element.content)==null?void 0:k.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},w(((f=A.element.content)==null?void 0:f.label)||"Audio Player"),5),(H=A.element.content)!=null&&H.src?(l(),i("audio",{key:0,src:A.element.content.src,controls:((ae=A.element.content)==null?void 0:ae.controls)!==!1,autoplay:(G=A.element.content)==null?void 0:G.autoplay,loop:(V=A.element.content)==null?void 0:V.loop,style:{height:"28px","max-width":"180px"},onMousedown:u[0]||(u[0]=Ve(()=>{},["stop"]))},null,40,Zf)):(l(),i("span",e1,"No source"))],4)}}},o1={class:"quiz-options"},n1=["onClick"],l1={class:"opt-letter"},i1={class:"opt-text"},a1={key:0},s1={class:"quiz-actions"},r1=["disabled"],d1={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(A){const r=A,u=M(()=>r.element.content||{}),c=L(null),p=L(!1);function h(ae){p.value||(c.value=ae)}function k(){c.value!==null&&(p.value=!0)}function f(){c.value=null,p.value=!1}const H=M(()=>p.value&&c.value===(u.value.correctIndex??0));return(ae,G)=>(l(),i("div",{class:"quiz-element",style:he({width:"100%",height:"100%",background:u.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":u.value.accentColor||"#6c47ff"})},[e("p",{style:he({fontSize:"15px",fontWeight:600,color:u.value.questionColor||"#1a1a2e",lineHeight:1.4})},w(u.value.question||"Question text…"),5),e("div",o1,[(l(!0),i(te,null,ce(u.value.options||[],(V,me)=>(l(),i("div",{key:me,class:X(["quiz-opt",c.value===me&&"selected",p.value&&me===u.value.correctIndex&&"correct",p.value&&c.value===me&&me!==u.value.correctIndex&&"wrong"]),onClick:z=>h(me)},[e("span",l1,w(String.fromCharCode(65+me)),1),e("span",i1,w(V),1)],10,n1))),128))]),p.value?(l(),i("div",{key:0,class:X(["quiz-feedback",H.value?"correct":"wrong"])},[ee(w(H.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!H.value&&u.value.explanation?(l(),i("span",a1,w(u.value.explanation),1)):q("",!0)],2)):q("",!0),e("div",s1,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:f},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:k},"Submit",8,r1))])],4))}},u1=nt(d1,[["__scopeId","data-v-ca2bd187"]]),c1={key:0,class:"canvas-empty"},p1={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},v1={key:0,class:"canvas-device-frame","aria-hidden":"true"},f1=["value"],g1={class:"canvas-guide-label"},m1={key:5,class:"drop-hint"},b1={class:"canvas-info-bar"},y1=["disabled"],h1={class:"slide-index"},x1=["disabled"],k1={key:0},w1={__name:"EditorCanvas",setup(A){const r=rt(),u=dt(),c=L(null),p=L(null),h=L(1),k=M(()=>h.value*r.zoomLevel);Ml("canvasScale",k);const f=M(()=>u.getProject(r.projectId)),H=M(()=>qt(f.value)),ae=M(()=>wl(f.value)),G=M(()=>H.value.width),V=M(()=>H.value.height),me=M(()=>Cl(G.value,V.value)),z=M(()=>{var b,x;return(x=(b=f.value)==null?void 0:b.slides)==null?void 0:x.find(Z=>Z.id===r.currentSlideId)}),P=M(()=>{var b;return[...((b=f.value)==null?void 0:b.slides)||[]].sort((x,Z)=>x.order-Z.order)}),a=M(()=>P.value.findIndex(b=>b.id===r.currentSlideId)),N=M(()=>{var b;return{autoPlay:!1,motionPresets:[],...((b=f.value)==null?void 0:b.settings)||{}}}),j=M(()=>(Array.isArray(N.value.motionPresets)?N.value.motionPresets:[]).filter(b=>b.scope==="group")),Y=M(()=>{const b=new Set(r.selectedElementIds);return we.value.filter(x=>b.has(x.id))}),g=L(""),F=M(()=>z.value?z.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:N.value.autoPlay&&Number(z.value.duration||0)>0?{label:`Auto ${Number(z.value.duration).toFixed(Number(z.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function se(){const b=j.value.find(Z=>Z.id===g.value);if(!b||!Y.value.length)return;[...Y.value].sort((Z,W)=>(Z.y||0)!==(W.y||0)?(Z.y||0)-(W.y||0):(Z.x||0)-(W.x||0)).forEach((Z,W)=>{if(b.type==="auto"){u.updateElement(r.projectId,r.currentSlideId,Z.id,{animations:[]});return}u.updateElement(r.projectId,r.currentSlideId,Z.id,{animations:[{type:b.type,delay:Math.max(0,Number(b.delay)||0)+W*Math.max(0,Number(b.stepDelay)||0),duration:Math.max(.1,Number(b.duration)||.72)}]})}),u.updateProject(r.projectId,{settings:{...N.value,motionPresets:(N.value.motionPresets||[]).map(Z=>Z.id===b.id?{...Z,usageCount:Math.max(0,Number(Z.usageCount||0))+1,lastUsedAt:Date.now()}:Z)}})}function oe(){if(!j.value.length){g.value="";return}j.value.some(b=>b.id===g.value)||(g.value=j.value[0].id)}const we=M(()=>{var b;return[...((b=z.value)==null?void 0:b.elements)||[]].sort((x,Z)=>(x.zIndex||0)-(Z.zIndex||0))}),R=M(()=>{const b=z.value;return b?b.backgroundType==="gradient"&&b.backgroundGradient?{background:b.backgroundGradient}:b.backgroundType==="image"&&b.backgroundImage?{backgroundImage:`url(${b.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:b.background||"#fff"}:{background:"#fff"}}),U=M(()=>`scale(${k.value})`);function ve(){if(!c.value)return;const{clientWidth:b,clientHeight:x}=c.value,Z=(b-80)/G.value,W=(x-80)/V.value;h.value=Math.min(Z,W,1)}let be=null;bl(()=>{ve(),be=new ResizeObserver(ve),c.value&&be.observe(c.value),oe()}),yl(()=>be==null?void 0:be.disconnect()),ot(j,()=>{oe()},{deep:!0,immediate:!0}),ot(H,()=>{ve()},{deep:!0});const le=L({x:0,y:0}),Ce=L({x:0,y:0}),C=L(!1),D=L(!1),_=L(!1),K=L(null),xe=M(()=>{var b,x;return((b=ae.value)==null?void 0:b.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((x=ae.value)==null?void 0:x.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),De=M(()=>{if(!xe.value)return null;if(xe.value.tone==="mobile"){const Z=G.value*.08,W=V.value*.05;return{x:Z,y:W,width:G.value-Z*2,height:V.value-W*2}}const b=G.value*.08,x=V.value*.08;return{x:b,y:x,width:G.value-b*2,height:V.value-x*2}}),Me=M(()=>{if(!De.value)return[];const b=De.value;return we.value.filter(x=>x.visible!==!1).filter(x=>{const Z=Number(x.x||0),W=Number(x.y||0),Pe=Z+Number(x.width||0),Be=W+Number(x.height||0);return Z<b.x||W<b.y||Pe>b.x+b.width||Be>b.y+b.height}).map(x=>x.id)}),Re=M(()=>r.selectedElementIds.filter(b=>Me.value.includes(b)).length),ne=M(()=>Me.value.length),fe=M(()=>!xe.value||!ne.value?null:Re.value?`${Re.value} selected ${Re.value===1?"element is":"elements are"} outside the ${xe.value.label.toLowerCase()}.`:`${ne.value} ${ne.value===1?"element is":"elements are"} outside the ${xe.value.label.toLowerCase()}.`),re=M(()=>{if(!C.value)return null;const b=Math.min(le.value.x,Ce.value.x),x=Math.min(le.value.y,Ce.value.y),Z=Math.abs(Ce.value.x-le.value.x),W=Math.abs(Ce.value.y-le.value.y);return{x:b,y:x,width:Z,height:W}});function ge(b){!C.value&&(b.target===p.value||b.target===b.currentTarget)&&r.clearSelection()}function Ne(b){return b?Array.from(b.files||[]).some(x=>x.type.startsWith("image/")):!1}function de(b){return b?Array.from(b.types||[]).includes(Yt):!1}function I(b,x,Z){return Math.min(Math.max(b,x),Z)}function $(b,x,Z){const W=Jt(b),Pe=I(x-W.width/2,0,Math.max(0,G.value-W.width)),Be=I(Z-W.height/2,0,Math.max(0,V.value-W.height));return{x:Pe,y:Be,bounds:W}}function O(b){if(!de(b))return null;try{const x=b.getData(Yt),Z=x?JSON.parse(x):null;return Z!=null&&Z.id&&u.getContentBlocks(r.projectId).find(W=>W.id===Z.id)||null}catch{return null}}function ke(b,x,Z){if(!p.value||!Z){K.value=null;return}const W=p.value.getBoundingClientRect(),Pe=(b-W.left)/k.value,Be=(x-W.top)/k.value,We=$(Z,Pe,Be);K.value={block:Z,x:We.x,y:We.y,bounds:We.bounds}}function Ke(b,x,Z){if(!b||!b.type.startsWith("image/"))return;const W=new FileReader;W.onload=()=>{const Pe=String(W.result||"");if(!Pe)return;const Be=new Image;Be.onload=()=>{const We=p.value.getBoundingClientRect(),Qe=(x-We.left)/k.value,ue=(Z-We.top)/k.value,Ue=Math.min(420/Be.width,280/Be.height,1),Le=Math.max(120,Math.round(Be.width*Ue)),Ye=Math.max(80,Math.round(Be.height*Ue)),yt=Math.max(0,Math.min(G.value-Le,Math.round(Qe-Le/2))),gt=Math.max(0,Math.min(V.value-Ye,Math.round(ue-Ye/2))),kt=u.addElement(r.projectId,r.currentSlideId,"image",{x:yt,y:gt,width:Le,height:Ye,content:{src:Pe,alt:b.name,objectFit:"cover"}});kt&&(r.selectElement(kt.id),r.setActiveTool("select"),r.setRightPanel("properties"))},Be.src=Pe},W.readAsDataURL(b)}function Ge(b){const x=Ne(b.dataTransfer),Z=de(b.dataTransfer);!x&&!Z||(b.preventDefault(),b.dataTransfer.dropEffect="copy",D.value=x,_.value=Z,Z&&ke(b.clientX,b.clientY,O(b.dataTransfer)))}function y(b){var x;(x=b.currentTarget)!=null&&x.contains(b.relatedTarget)||(D.value=!1,_.value=!1,K.value=null)}function Ee(b){const x=Ne(b.dataTransfer),Z=de(b.dataTransfer);if(!x&&!Z)return;if(b.preventDefault(),D.value=!1,_.value=!1,K.value=null,Z){try{const Pe=O(b.dataTransfer);if(!Pe)return;const Be=p.value.getBoundingClientRect(),We=(b.clientX-Be.left)/k.value,Qe=(b.clientY-Be.top)/k.value,ue=$(Pe,We,Qe),Ae=u.insertContentBlock(r.projectId,r.currentSlideId,Pe.id,{x:ue.x,y:ue.y});Ae.length&&(r.setSelection(Ae.map(lt=>lt.id)),r.setActiveTool("select"),r.focusPropertiesSection("content"))}catch(Pe){console.warn("Failed to drop block onto canvas.",Pe)}return}const W=Array.from(b.dataTransfer.files||[]).find(Pe=>Pe.type.startsWith("image/"));W&&Ke(W,b.clientX,b.clientY)}function Oe(b){if(Y.value.length<2)return;const x=[...Y.value].sort((ue,Ae)=>(ue.zIndex||0)-(Ae.zIndex||0)),Z=Math.min(...x.map(ue=>Number(ue.x||0))),W=Math.min(...x.map(ue=>Number(ue.y||0))),Pe=Math.max(...x.map(ue=>Number(ue.x||0)+Number(ue.width||0))),Be=Math.max(...x.map(ue=>Number(ue.y||0)+Number(ue.height||0))),We=Z+(Pe-Z)/2,Qe=W+(Be-W)/2;if(b==="align-left"&&x.forEach(ue=>u.updateElement(r.projectId,r.currentSlideId,ue.id,{x:Z},{persist:!1})),b==="align-center"&&x.forEach(ue=>{const Ae=Number(ue.width||0);u.updateElement(r.projectId,r.currentSlideId,ue.id,{x:We-Ae/2},{persist:!1})}),b==="align-right"&&x.forEach(ue=>{const Ae=Number(ue.width||0);u.updateElement(r.projectId,r.currentSlideId,ue.id,{x:Pe-Ae},{persist:!1})}),b==="align-top"&&x.forEach(ue=>u.updateElement(r.projectId,r.currentSlideId,ue.id,{y:W},{persist:!1})),b==="align-middle"&&x.forEach(ue=>{const Ae=Number(ue.height||0);u.updateElement(r.projectId,r.currentSlideId,ue.id,{y:Qe-Ae/2},{persist:!1})}),b==="align-bottom"&&x.forEach(ue=>{const Ae=Number(ue.height||0);u.updateElement(r.projectId,r.currentSlideId,ue.id,{y:Be-Ae},{persist:!1})}),b==="distribute-horizontal"){const ue=[...x].sort((Le,Ye)=>(Le.x||0)-(Ye.x||0)),Ae=ue.reduce((Le,Ye)=>Le+Number(Ye.width||0),0),lt=ue.length>1?(Pe-Z-Ae)/(ue.length-1):0;let Ue=Z;ue.forEach(Le=>{u.updateElement(r.projectId,r.currentSlideId,Le.id,{x:Ue},{persist:!1}),Ue+=Number(Le.width||0)+lt})}if(b==="distribute-vertical"){const ue=[...x].sort((Le,Ye)=>(Le.y||0)-(Ye.y||0)),Ae=ue.reduce((Le,Ye)=>Le+Number(Ye.height||0),0),lt=ue.length>1?(Be-W-Ae)/(ue.length-1):0;let Ue=W;ue.forEach(Le=>{u.updateElement(r.projectId,r.currentSlideId,Le.id,{y:Ue},{persist:!1}),Ue+=Number(Le.height||0)+lt})}u.commitProject(r.projectId)}function Fe(b){const x=r.activeTool;if(b.target!==p.value&&b.target!==b.currentTarget)return;b.preventDefault(),b.stopPropagation();const Z=p.value.getBoundingClientRect(),W=(b.clientX-Z.left)/k.value,Pe=(b.clientY-Z.top)/k.value;if(x==="select"){C.value=!0,le.value={x:W,y:Pe},Ce.value={x:W,y:Pe};const Qe=Ae=>{Ce.value={x:(Ae.clientX-Z.left)/k.value,y:(Ae.clientY-Z.top)/k.value}},ue=()=>{window.removeEventListener("mousemove",Qe),window.removeEventListener("mouseup",ue);const Ae=re.value;if(Ae&&(Ae.width>2||Ae.height>2)){const lt=we.value.filter(Ue=>{const Le=Ue.x,Ye=Ue.y,yt=Ue.width||100,gt=Ue.height||100;return Le<Ae.x+Ae.width&&Le+yt>Ae.x&&Ye<Ae.y+Ae.height&&Ye+gt>Ae.y}).map(Ue=>Ue.id);lt.length>0?r.setSelection(lt):r.clearSelection()}else r.clearSelection();setTimeout(()=>{C.value=!1},0)};window.addEventListener("mousemove",Qe),window.addEventListener("mouseup",ue);return}const Be=Qe=>r.snapToGrid?Math.round(Qe/r.gridSize)*r.gridSize:Qe,We=u.addElement(r.projectId,r.currentSlideId,x,{x:Be(W-75),y:Be(Pe-40)});We&&(r.selectElement(We.id),r.setActiveTool("select"),r.setRightPanel("properties"))}const Je=M(()=>{if(!r.showGrid)return{};const b=r.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${b}px ${b}px`}}),He={text:Ht,heading:Ht,image:zf,shape:_f,button:qf,hotspot:Vf,video:Xf,audio:t1,quiz:u1,chart:ni,tabs:oi,accordion:ti,flipcard:ei,stepper:Zl,poll:Kl,labeledimage:Xl,matching:Ql,sorting:Jl,cloze:Yl,scenario:Hl,progress:Gl,divider:"div"};function Mt(b){return He[b]||Ht}function ct(b){var x,Z;return b.type!=="divider"?{}:{borderTop:`${((x=b.content)==null?void 0:x.thickness)||2}px solid ${((Z=b.content)==null?void 0:Z.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const _e=L({show:!1,x:0,y:0,elId:null});function vt(b,x){b.preventDefault(),_e.value={show:!0,x:b.clientX,y:b.clientY,elId:x},r.selectElement(x),setTimeout(()=>window.addEventListener("click",Ze,{once:!0}),0)}function Ze(){_e.value.show=!1}function At(){if(_e.value.elId){const b=u.duplicateElement(r.projectId,r.currentSlideId,_e.value.elId);b&&r.selectElement(b.id)}Ze()}function Pt(){_e.value.elId&&(u.deleteElement(r.projectId,r.currentSlideId,_e.value.elId),r.clearSelection()),Ze()}function Tt(){_e.value.elId&&u.reorderElement(r.projectId,r.currentSlideId,_e.value.elId,"up"),Ze()}function Bt(){_e.value.elId&&u.reorderElement(r.projectId,r.currentSlideId,_e.value.elId,"down"),Ze()}function Nt(){const b=a.value,x=u.addSlide(r.projectId,b);x&&r.setCurrentSlide(x.id)}function zt(){const b=a.value;b>0&&r.setCurrentSlide(P.value[b-1].id)}function ft(){const b=a.value;b<P.value.length-1&&r.setCurrentSlide(P.value[b+1].id)}return(b,x)=>{var Z;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[z.value?(l(),i(te,{key:1},[e("div",{class:X(["canvas-zoom-wrapper",[xe.value&&`canvas-zoom-wrapper-${xe.value.tone}`]]),style:he({transform:U.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:he({width:G.value+"px",height:V.value+"px",...R.value,...Je.value}),onClick:ge,onMousedown:Fe,onDragover:Ge,onDragleave:y,onDrop:Ee,onContextmenu:x[3]||(x[3]=Ve(()=>{},["prevent"]))},[xe.value?(l(),i("div",v1)):q("",!0),E(r).multiSelection&&j.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:x[1]||(x[1]=Ve(()=>{},["stop"]))},[x[15]||(x[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),pe(e("select",{"onUpdate:modelValue":x[0]||(x[0]=W=>g.value=W),class:"selection-preset-select"},[(l(!0),i(te,null,ce(j.value,W=>(l(),i("option",{key:W.id,value:W.id},w(W.name),9,f1))),128))],512),[[jt,g.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Ve(se,["stop"])},"Apply")],32)):q("",!0),fe.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:x[2]||(x[2]=Ve(()=>{},["stop"]))},[x[16]||(x[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,w(fe.value),1)],32)):q("",!0),K.value?(l(),i("div",{key:3,class:"block-drop-preview",style:he({left:`${K.value.x}px`,top:`${K.value.y}px`,width:`${K.value.bounds.width}px`,height:`${K.value.bounds.height}px`})},[(l(!0),i(te,null,ce(K.value.block.elements,(W,Pe)=>{var Be,We,Qe,ue;return l(),i("div",{key:`${K.value.block.id}-preview-${Pe}`,class:X(["block-drop-preview-el",`block-drop-preview-${W.type}`]),style:he({left:`${Number(W.x||0)-K.value.bounds.minX}px`,top:`${Number(W.y||0)-K.value.bounds.minY}px`,width:`${Number(W.width||0)}px`,height:`${Number(W.height||0)}px`,borderRadius:W.type==="shape"&&((Be=W.content)==null?void 0:Be.shapeType)==="circle"?"50%":`${Number(((We=W.content)==null?void 0:We.borderRadius)||12)}px`,background:W.type==="shape"?((Qe=W.content)==null?void 0:Qe.fillColor)||"rgba(108,71,255,.18)":W.type==="button"?((ue=W.content)==null?void 0:ue.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(W.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(W.type)?(l(),i(te,{key:0},[x[17]||(x[17]=e("span",{class:"block-drop-preview-line"},null,-1)),x[18]||(x[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):q("",!0)],6)}),128))],4)):q("",!0),(l(!0),i(te,null,ce(we.value,W=>(l(),tt(Af,{key:W.id,element:W,onContextmenu:Ve(Pe=>vt(Pe,W.id),["stop"])},{default:pt(()=>[(l(),tt(Al(Mt(W.type)),{element:W,style:he(W.type==="divider"?ct(W):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),xe.value?(l(),i("div",{key:4,class:X(["canvas-guide",[`canvas-guide-${xe.value.tone}`,ne.value&&"canvas-guide-warning-state"]]),style:he(xe.value.style),"aria-hidden":"true"},[e("span",g1,w(xe.value.label)+" · "+w(me.value),1)],6)):q("",!0),E(r).activeTool!=="select"||D.value||_.value?(l(),i("div",m1,w(_.value?"Drop block to insert it here":D.value?"Drop image to insert it on this slide":`Click anywhere to add ${E(r).activeTool}`),1)):q("",!0),C.value&&re.value?(l(),i("div",{key:6,class:"selection-marquee",style:he({left:re.value.x+"px",top:re.value.y+"px",width:re.value.width+"px",height:re.value.height+"px"})},null,4)):q("",!0)],36)],6),e("div",b1,[e("button",{class:"bar-btn",onClick:Nt},"Add page"),e("button",{class:"bar-btn icon",onClick:zt,disabled:a.value<=0},"◀",8,y1),e("span",h1,w(a.value+1)+" / "+w(P.value.length),1),e("button",{class:"bar-btn icon",onClick:ft,disabled:a.value>=P.value.length-1},"▶",8,x1),e("span",null,w(G.value)+" × "+w(V.value)+"px",1),x[19]||(x[19]=e("span",null,"·",-1)),e("span",null,w(((Z=z.value.elements)==null?void 0:Z.length)||0)+" elements",1),x[20]||(x[20]=e("span",null,"·",-1)),e("span",{class:X(["playback-badge",`playback-badge-${F.value.tone}`])},w(F.value.label),3),E(r).hasSelection?(l(),i("span",k1,"· "+w(E(r).selectedElementIds.length)+" selected",1)):q("",!0),E(r).multiSelection?(l(),i(te,{key:1},[e("button",{class:"bar-btn",onClick:x[4]||(x[4]=W=>Oe("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:x[5]||(x[5]=W=>Oe("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:x[6]||(x[6]=W=>Oe("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:x[7]||(x[7]=W=>Oe("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:x[8]||(x[8]=W=>Oe("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:x[9]||(x[9]=W=>Oe("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:x[10]||(x[10]=W=>Oe("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:x[11]||(x[11]=W=>Oe("distribute-vertical"))},"Space V")],64)):q("",!0),e("button",{class:"bar-btn ai",onClick:x[12]||(x[12]=W=>E(r).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",c1,[(l(),i("svg",p1,[...x[13]||(x[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),x[14]||(x[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),tt(hl,{to:"body"},[_e.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:he({left:_e.value.x+"px",top:_e.value.y+"px"})},[e("button",{class:"ctx-item",onClick:At},"Duplicate"),e("button",{class:"ctx-item",onClick:Tt},"Bring Forward"),e("button",{class:"ctx-item",onClick:Bt},"Send Backward"),x[21]||(x[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Pt},"Delete")],4)):q("",!0)]))],512)}}},C1=nt(w1,[["__scopeId","data-v-f050859a"]]),S1={class:"ai-panel"},$1={class:"ai-mode-tabs"},I1=["onClick"],E1={class:"ai-content"},A1={class:"form-group"},M1={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},P1={key:0,class:"form-group"},T1={key:1,class:"form-group"},B1={class:"layout-label-row"},N1={class:"layout-current-hint"},z1={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},L1=["onClick"],j1={class:"layout-preset-title"},D1={class:"layout-preset-hint"},_1={key:2,class:"form-group"},q1={key:3,class:"form-group"},R1={class:"layout-label-row"},O1={class:"layout-current-hint"},F1={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},U1={key:4,class:"form-group"},V1={class:"layout-label-row"},W1={class:"layout-current-hint"},G1={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},H1=["onClick"],Y1={class:"layout-preset-title"},J1={class:"layout-preset-hint"},Q1={class:"form-group"},X1={class:"form-group"},K1={class:"prompt-label-row"},Z1={key:1,class:"prompt-auto-badge"},eg={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},tg={key:6,class:"selected-source-card"},og={class:"result-header"},ng={class:"source-count-badge"},lg={class:"selected-source-preview"},ig={class:"selected-source-actions"},ag=["disabled"],sg=["disabled"],rg={key:0,class:"spinner"},dg={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ug={key:7,class:"creative-options-wrap"},cg={class:"result-header"},pg={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},vg={key:1,class:"creative-options-list"},fg={class:"creative-title"},gg={class:"creative-angle"},mg=["onClick"],bg={class:"form-group"},yg={class:"quiz-config-row"},hg={class:"form-group",style:{flex:"1"}},xg={class:"form-group",style:{flex:"1"}},kg={class:"form-group"},wg={class:"qtype-btns"},Cg=["onClick"],Sg={class:"qtype-icon"},$g={class:"form-group"},Ig={class:"form-group"},Eg={class:"prompt-label-row"},Ag={key:1,class:"prompt-auto-badge"},Mg=["disabled"],Pg={key:0,class:"spinner"},Tg={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Bg={key:0,class:"quiz-results"},Ng={class:"quiz-results-header"},zg={class:"form-label"},Lg={class:"quiz-header-actions"},jg={class:"regen-row"},Dg=["disabled"],_g={key:0,class:"spinner spinner-sm"},qg={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Rg=["disabled"],Og={class:"quiz-card-header"},Fg={class:"quiz-card-check"},Ug=["onUpdate:modelValue"],Vg={class:"q-num"},Wg={class:"q-badges"},Gg={class:"badge type-badge"},Hg={class:"q-question"},Yg={class:"q-options"},Jg={class:"q-option-letter"},Qg={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Xg={key:0,class:"q-explanation"},Kg=["disabled"],Zg={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},em=["disabled"],tm={key:0,class:"spinner"},om={key:0,class:"selected-text-preview"},nm={class:"text-preview"},lm={key:1,class:"ai-hint"},im={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},am=["disabled"],sm={key:0,class:"spinner"},rm={key:0,class:"selected-text-preview"},dm={class:"text-preview"},um={key:1,class:"ai-hint"},cm={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},pm=["disabled"],vm={key:0,class:"spinner"},fm={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},gm={class:"result-header"},mm={class:"result-actions"},bm=["disabled"],ym={class:"textarea result-display"},hm={key:0,class:"demo-notice",style:{"margin-bottom":"var(--space-3)"}},xm={key:1,class:"ai-error",style:{"margin-bottom":"var(--space-3)"}},km={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wm=["disabled"],Cm={key:0,class:"spinner"},Sm={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},$m={class:"textarea result-display",style:{color:"var(--color-primary)"}},Im={key:6,class:"ai-settings"},Em={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Am=["value"],Mm={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Pm=["value","placeholder"],Tm={class:"form-hint"},Bm={key:0,class:"demo-notice"},Nm={key:1,class:"demo-notice"},zm={key:7,class:"result-area"},Lm={class:"result-header"},jm={class:"result-pre"},Dm={class:"result-actions"},_m=["disabled"],qm={key:8,class:"ai-error"},Rm={__name:"AIAssistant",setup(A){const r=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"cloze",label:"Fill-in-the-Blank",hint:"Interactive fill-in-the-blank text.",promptHint:"Create an interactive fill-in-the-blank activity. Provide a paragraph with a few key words wrapped in [brackets] to indicate blanks.",schema:'{ "layout": "cloze", "title": "...", "subtitle": "...", "callout": "...", "cloze": { "text": "A sentence about the topic where the [key word] is in brackets." } }'},{id:"scenario",label:"Scenario",hint:"Branching scenario with choices.",promptHint:"Create a branching scenario. Provide a starting situation from the agent, and 2-3 potential responses from the user.",schema:'{ "layout": "scenario", "title": "...", "subtitle": "...", "callout": "...", "scenario": { "agentMessage": "...", "userOptions": ["..."] } }'},{id:"progress",label:"Progress",hint:"A step-by-step progress indicator.",promptHint:"Create a progress overview representing the users current learning status. Provide realistic mock values.",schema:'{ "layout": "progress", "title": "...", "subtitle": "...", "callout": "...", "progress": { "level": 4, "xp": 350, "percent": 65 } }'},{id:"poll",label:"Poll",hint:"An interactive poll or survey.",promptHint:"Create an interactive poll question with 3-4 options. Provide realistic mock vote counts.",schema:'{ "layout": "poll", "title": "...", "subtitle": "...", "callout": "...", "poll": { "question": "...", "options": [{ "text": "...", "votes": 12 }] } }'},{id:"matching",label:"Matching",hint:"A drag-and-drop matching activity.",promptHint:"Create a matching activity with 3-4 pairs of related concepts (e.g. term and definition).",schema:'{ "layout": "matching", "title": "...", "subtitle": "...", "callout": "...", "matching": { "pairs": [{ "left": "...", "right": "..." }] } }'},{id:"sorting",label:"Sorting",hint:"A sorting activity.",promptHint:"Create an activity where items need to be sorted into correct order. Provide the items in random order.",schema:'{ "layout": "sorting", "title": "...", "subtitle": "...", "callout": "...", "sorting": { "items": [{ "text": "...", "correctOrder": 0 }] } }'},{id:"labeledimage",label:"Labeled Image",hint:"An image with interactive hotspots.",promptHint:"Define 2-3 standard hotspots (x, y percentages) with labels and descriptions over a concept.",schema:'{ "layout": "labeledimage", "title": "...", "subtitle": "...", "callout": "...", "labeledimage": { "markers": [{ "x": 25, "y": 35, "label": "1", "title": "...", "description": "..." }] } }'}],u={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(s,n="classic"){const v=String(s||n||"classic").trim().toLowerCase();return r.some(S=>S.id===v)?v:n}function p(s,n=""){return String(s??n).replace(/^\s*[-•]\s*/,"").trim()||n}function h(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(`
`):[]).map(v=>p(v)).filter(Boolean)}function k(s,n,v){const S=[...s];for(;S.length<n;)S.push(v(S.length));return S.slice(0,n)}function f(s,n){const v=Array.isArray(s)?s.map((m,J)=>({title:p(m==null?void 0:m.title,`Card ${J+1}`),body:p((m==null?void 0:m.body)||(m==null?void 0:m.text)||(m==null?void 0:m.description),"Add supporting detail.")})).filter(m=>m.title||m.body):[],S=n.map((m,J)=>({title:`Point ${J+1}`,body:m}));return k(v.length?v:S,3,m=>({title:`Point ${m+1}`,body:"Add supporting detail."}))}function H(s,n){const v=h(s==null?void 0:s.leftPoints),S=h(s==null?void 0:s.rightPoints),m=n.slice(0,Math.max(1,Math.ceil(n.length/2))),J=n.slice(Math.max(1,Math.ceil(n.length/2)));return{leftTitle:p(s==null?void 0:s.leftTitle,"Option A"),leftPoints:k(v.length?v:m,3,ye=>`Left point ${ye+1}`),rightTitle:p(s==null?void 0:s.rightTitle,"Option B"),rightPoints:k(S.length?S:J,3,ye=>`Right point ${ye+1}`)}}function ae(s,n){const v=Array.isArray(s)?s.map((m,J)=>({value:p(m==null?void 0:m.value,`${J+1}`),label:p(m==null?void 0:m.label,`Metric ${J+1}`)})).filter(m=>m.value||m.label):[],S=n.map((m,J)=>{const[ye,...et]=m.split(/[:\-]/);return{value:p(ye,`${J+1}`),label:p(et.join(" ").trim(),m)}});return k(v.length?v:S,3,m=>({value:`${m+1}`,label:`Metric ${m+1}`}))}function G(s,n){const v=Array.isArray(s)?s.map((m,J)=>({title:p(m==null?void 0:m.title,`Phase ${J+1}`),detail:p((m==null?void 0:m.detail)||(m==null?void 0:m.description),"Explain the milestone.")})).filter(m=>m.title||m.detail):[],S=n.map((m,J)=>({title:`Phase ${J+1}`,detail:m}));return k(v.length?v:S,4,m=>({title:`Phase ${m+1}`,detail:"Explain the milestone."}))}function V(s,n){const v=Array.isArray(s)?s.map((m,J)=>({question:p(m==null?void 0:m.question,`Question ${J+1}?`),answer:p(m==null?void 0:m.answer,"Add the short answer here.")})).filter(m=>m.question||m.answer):[],S=n.map((m,J)=>({question:`Question ${J+1}?`,answer:m}));return k(v.length?v:S,3,m=>({question:`Question ${m+1}?`,answer:"Add the short answer here."}))}function me(s,n){const v=Array.isArray(s)?s.map((m,J)=>({title:p(m==null?void 0:m.title,`Step ${J+1}`),detail:p((m==null?void 0:m.detail)||(m==null?void 0:m.description),"Add the step detail here.")})).filter(m=>m.title||m.detail):[],S=n.map((m,J)=>({title:`Step ${J+1}`,detail:m}));return k(v.length?v:S,3,m=>({title:`Step ${m+1}`,detail:"Add the step detail here."}))}const z=Bl(),P=rt(),a=dt(),N=M(()=>z.apiProvider==="gemini"?"Gemini":"OpenAI"),j=M(()=>z.apiProvider==="gemini"?"AIza...":"sk-..."),Y=M(()=>z.apiProvider==="gemini"?"Gemini API keys from Google AI Studio work for text features on the free tier. We provide free image generation via Pollinations.ai when Gemini is selected. The key is stored locally in your browser and never sent to our servers.":"Key is stored locally in your browser. It is never sent to our servers."),g=L("generate"),F=L(""),se=L(""),oe=L("");ot(g,()=>{oe.value=""}),ot(()=>P.aiPanelMode,s=>{s&&(g.value=s)},{immediate:!0});const we=L(4),R=L("general"),U=L("Spanish"),ve=L(""),be=L(""),le=L(""),Ce=L(!1),C=L("single"),D=L("classic"),_=L("mixed"),K=L(5),xe=L("slide"),De=L([]),Me=L(""),Re=M(()=>r.find(s=>s.id===D.value)||r[0]),ne=M(()=>{const s=se.value.trim()||"[your topic]";if(C.value==="deck"){let S=`Create a complete ${K.value}-slide learning deck about "${s}".`;return be.value.trim()&&(S+=`
Additional context: ${be.value.trim()}`),S+=`
Deck layout strategy: ${_.value}`,_.value==="single"?S+=`
Use the ${D.value} layout for every slide.`:S+=`
Mix layouts across the deck when appropriate.`,S+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process|cloze|scenario|progress|poll|matching|sorting|labeledimage" }] }`,S+=`
Make each slide distinct, logically sequenced, and specific to "${s}".`,S}let v=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[R.value]||"educational slide"} about "${s}".`;return be.value.trim()&&(v+=`
Additional context: ${be.value.trim()}`),v+=`
Layout mode: ${D.value}`,v+=`
Layout instruction: ${Re.value.promptHint}`,v+=`
Return ONLY valid JSON matching this shape: ${Re.value.schema}`,v+=`
Make all content specific to "${s}" — no generic placeholders.`,v});ot(ne,s=>{Ce.value||(le.value=s)},{immediate:!0});function fe(){le.value=ne.value,Ce.value=!1}const re=L(""),ge=L("intermediate"),Ne=L("multiple-choice"),de=L(""),I=L([]),$=L(""),O=L(!1),ke=M(()=>{const s=re.value.trim()||"[your topic]",n={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},v={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let S=`Generate ${we.value} ${n[ge.value]} ${v[Ne.value]} quiz questions about "${s}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return de.value.trim()&&(S+=`
Learning objective: ${de.value.trim()}`),S});ot(ke,s=>{O.value||($.value=s)},{immediate:!0});function Ke(){$.value=ke.value,O.value=!1}const Ge=M(()=>a.getProject(P.projectId)),y=M(()=>{var s,n;return(n=(s=Ge.value)==null?void 0:s.slides)==null?void 0:n.find(v=>v.id===P.currentSlideId)}),Ee=M(()=>{var s,n;return P.selectedElementId?(n=(s=y.value)==null?void 0:s.elements)==null?void 0:n.find(v=>v.id===P.selectedElementId):null}),Oe=M(()=>{var n;const s=new Set(P.selectedElementIds);return(((n=y.value)==null?void 0:n.elements)||[]).filter(v=>{var S;return s.has(v.id)&&typeof((S=v==null?void 0:v.content)==null?void 0:S.text)=="string"&&v.content.text.trim()})}),Fe=M(()=>Oe.value.map(s=>s.content.text.trim()).filter(Boolean).join(`

`));async function Je(){if(!se.value.trim()&&!le.value.trim())return;if(oe.value="",De.value=[],Me.value="",C.value==="deck"){const n=await z.generateSlideDeck(se.value,K.value,{objective:be.value,customPrompt:le.value,layoutStrategy:_.value,layoutMode:D.value});if(n!=null&&n.length){const v=n.map(S=>He(S));oe.value=JSON.stringify({slides:v},null,2),Le(v,{replaceGenerated:!0})}return}if(xe.value==="options"){await gt();return}const s=await z.generateSlideContent(se.value,R.value,be.value,le.value,{layoutMode:D.value});if(s){const n=He(s);oe.value=JSON.stringify(n,null,2),Ye(n,{replaceGenerated:!0})}}function He(s){var m;const n=s&&typeof s=="object"?s:{},v=h(n.bullets),S=c(n.layout||((m=n.design)==null?void 0:m.layout),C.value==="deck"&&_.value==="mixed"?"classic":D.value);return{title:String(n.title||se.value||"Untitled Slide").trim(),subtitle:String(n.subtitle||"").trim(),bullets:v,callout:String(n.callout||"").trim(),layout:S,cards:f(n.cards,v),comparison:H(n.comparison,v),metrics:ae(n.metrics,v),timeline:G(n.timeline,v),faqs:V(n.faqs,v),process:me(n.process,v),cloze:n.cloze||{text:""},scenario:n.scenario||{agentMessage:"",userOptions:[]},progress:n.progress||{level:4,xp:350,percent:65},poll:n.poll||{question:"",options:[]},matching:n.matching||{pairs:[]},sorting:n.sorting||{items:[]},labeledimage:n.labeledimage||{markers:[]}}}function Mt(s,n){var m,J,ye;const v=(J=(m=a.getProject(s))==null?void 0:m.slides)==null?void 0:J.find(et=>et.id===n);if(!((ye=v==null?void 0:v.elements)!=null&&ye.length))return;v.elements.filter(et=>{var T;return((T=et.meta)==null?void 0:T.source)==="ai-content"}).map(et=>et.id).forEach(et=>{a.deleteElement(s,n,et)})}function ct(s,n,v,S){return a.addElement(s,n,v,{...S,meta:{...S.meta||{},source:"ai-content"}})}function _e(s){const n=Ul.find(S=>S.id===s);if(!n)return null;const v=Vl(JSON.parse(JSON.stringify(n)),s);return v.elements=v.elements.map(S=>({...S,meta:{...S.meta||{},source:"ai-content"}})),v}function vt(s,n){n&&s.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:n,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function Ze(s,n){if(!n)return;const v=Jt(s);s.elements.push({type:"text",x:0,y:v.height+18,width:Math.max(v.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${n}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function At(s){const n=Array.isArray(s)?s:[];if(!n.length)return{minX:40,minY:54,width:0,height:0};const v=Math.min(...n.map(ye=>Number(ye.x||0))),S=Math.min(...n.map(ye=>Number(ye.y||0))),m=Math.max(...n.map(ye=>Number(ye.x||0)+Number(ye.width||0))),J=Math.max(...n.map(ye=>Number(ye.y||0)+Number(ye.height||0)));return{minX:v,minY:S,width:Math.max(0,m-v),height:Math.max(0,J-S)}}function Pt(s,n){var J;const v=a.getProject(s),S=Jt(n),m=Number(((J=v==null?void 0:v.settings)==null?void 0:J.slideWidth)||960);return{x:Math.max(40,Math.round((m-S.width)/2)),y:54}}function Tt(s){const n=_e(u.cards);if(!n)return null;const v=s.cards;return n.elements[0].content.text=s.title,n.elements[1].content.text=s.subtitle||s.callout||"Use the three cards to frame the main ideas.",v.forEach((S,m)=>{n.elements[5+m].content.text=S.title,n.elements[8+m].content.text=S.body}),s.callout&&s.subtitle&&Ze(n,s.callout),n}function Bt(s){const n=_e(u.comparison);return n?(n.elements[0].content.text=s.title,n.elements[3].content.text=s.comparison.leftTitle,n.elements[4].content.text=s.comparison.rightTitle,n.elements[5].content={...n.elements[5].content,text:s.comparison.leftPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},n.elements[6].content={...n.elements[6].content,text:s.comparison.rightPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},vt(n,s.subtitle),Ze(n,s.callout),n):null}function Nt(s){const n=_e(u.metrics);return n?(n.elements[0].content.text=s.title,s.metrics.forEach((v,S)=>{n.elements[4+S].content.text=v.value,n.elements[7+S].content.text=v.label}),vt(n,s.subtitle),Ze(n,s.callout),n):null}function zt(s){const n=_e(u.timeline);return n?(n.elements[0].content.text=s.title,s.timeline.forEach((v,S)=>{n.elements[6+S].content={...n.elements[6+S].content,text:`${v.title}
${v.detail}`,fontSize:16,lineHeight:1.35}}),vt(n,s.subtitle),Ze(n,s.callout),n):null}function ft(s){const n=_e(u.faq);return n?(n.elements[0].content.text=s.title,s.faqs.forEach((v,S)=>{n.elements[4+S].content={...n.elements[4+S].content,text:`${v.question}
${v.answer}`,fontSize:16,lineHeight:1.35},n.elements[4+S].height=44}),vt(n,s.subtitle),Ze(n,s.callout),n):null}function b(s){const n=_e(u.process);return n?(n.elements[0].content.text=s.title,s.process.forEach((v,S)=>{n.elements[8+S].content.text=v.title,n.elements[11+S].content.text=v.detail}),vt(n,s.subtitle),Ze(n,s.callout),n):null}function x(s,n,v,S,m){const J=[];s.title&&J.push({type:"heading",x:0,y:0,width:800,height:80,content:{text:s.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}});let ye=s.title?100:0;s.subtitle&&(J.push({type:"text",x:0,y:ye,width:800,height:40,content:{text:s.subtitle,fontSize:16,fontWeight:"500",textAlign:"center",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}}),ye+=60);const et=Math.max(0,(800-v)/2);J.push({type:n,x:et,y:ye,width:v,height:S,content:m()});const T={id:`generated-${crypto.randomUUID?crypto.randomUUID():Date.now()}`,type:"group",elements:J};return s.callout&&Ze(T,s.callout),T}function Z(s){const n=s.cloze||{};return x(s,"cloze",600,240,()=>({title:"Fill in the blanks",text:n.text||"An assessment should align closely with the [learning] objectives.",bgColor:"#ffffff",textColor:"#1e293b",fontSize:16,borderRadius:8}))}function W(s){var J;const n=s.scenario||{},v=n.agentMessage||"Welcome to this scenario. What will you do first?",S=(J=n.userOptions)!=null&&J.length?n.userOptions:["I will analyze the requirements."],m=[{role:"agent",text:v}];return S.forEach(ye=>m.push({role:"user",text:typeof ye=="string"?ye:ye.text})),x(s,"scenario",600,360,()=>({bgColor:"#f8fafc",borderRadius:8,messages:m}))}function Pe(s){const n=s.progress||{};return x(s,"progress",400,200,()=>({title:"Your Progress",bgColor:"#ffffff",titleColor:"#0f172a",textColor:"#64748b",fillColor:"#10b981",borderRadius:8,mockXP:n.xp||350,mockLevel:n.level||4,mockPercent:n.percent||65}))}function Be(s){var m;const n=s.poll||{},S=((m=n.options)!=null&&m.length?n.options:[{text:"Option A",votes:12},{text:"Option B",votes:24}]).map((J,ye)=>({id:String(ye+1),text:J.text||String(J),votes:J.votes||0}));return x(s,"poll",600,360,()=>({question:n.question||"What is your favorite topic?",options:S,showResults:!1,barColor:"#cbd5e1",barSelectedColor:"#6c47ff",trackColor:"#f1f5f9",textColor:"#1e293b",bgColor:"#ffffff"}))}function We(s){var m;const n=s.matching||{},S=((m=n.pairs)!=null&&m.length?n.pairs:[{left:"Concept 1",right:"Detail 1"},{left:"Concept 2",right:"Detail 2"}]).map((J,ye)=>({id:String(ye+1),left:J.left,right:J.right}));return x(s,"matching",600,360,()=>({title:"Match the concepts",bgColor:"#ffffff",titleColor:"#0f172a",accentColor:"#6c47ff",accentBgColor:"#f3f0ff",pairs:S}))}function Qe(s){var m;const n=s.sorting||{},S=((m=n.items)!=null&&m.length?n.items:[{text:"Step 1",correctOrder:0},{text:"Step 2",correctOrder:1}]).map((J,ye)=>({id:String(ye+1),text:J.text,correctOrder:J.correctOrder??ye}));return x(s,"sorting",500,360,()=>({title:"Sort items correctly",bgColor:"#ffffff",titleColor:"#0f172a",accentColor:"#6c47ff",items:S}))}function ue(s){var m;const n=s.labeledimage||{},S=((m=n.markers)!=null&&m.length?n.markers:[{x:25,y:35,label:"1",title:"Point 1",description:"Description 1"},{x:75,y:65,label:"2",title:"Point 2",description:"Description 2"}]).map((J,ye)=>({id:String(ye+1),x:J.x||50,y:J.y||50,label:J.label||String(ye+1),title:J.title||`Point ${ye+1}`,description:J.description||""}));return x(s,"labeledimage",600,400,()=>({src:"",borderRadius:8,markerColor:"#6c47ff",markerTextColor:"#ffffff",markers:S}))}function Ae(s){switch(s.layout){case"cards":return Tt(s);case"comparison":return Bt(s);case"metrics":return Nt(s);case"timeline":return zt(s);case"faq":return ft(s);case"process":return b(s);case"cloze":return Z(s);case"scenario":return W(s);case"progress":return Pe(s);case"poll":return Be(s);case"matching":return We(s);case"sorting":return Qe(s);case"labeledimage":return ue(s);default:return null}}function lt(s,n,v){var S;if(v.title&&(a.updateSlide(s,n,{title:v.title}),ct(s,n,"heading",{x:60,y:40,width:840,height:80,content:{text:v.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),v.subtitle&&ct(s,n,"text",{x:60,y:130,width:840,height:50,content:{text:v.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(S=v.bullets)!=null&&S.length){const m=v.bullets.map(J=>`• ${J}`).join(`
`);ct(s,n,"text",{x:60,y:v.subtitle?200:150,width:840,height:200,content:{text:m,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}v.callout&&(ct(s,n,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),ct(s,n,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${v.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function Ue(s,n,v,{replaceGenerated:S=!1,origin:m=null}={}){if(!s||!n)return;S&&Mt(s,n);const J=Ae(v);if(a.updateSlide(s,n,{title:v.title||"Untitled Slide"}),J){const ye=m||Pt(s,J);a.insertContentBlock(s,n,J,ye)}else lt(s,n,v)}function Le(s,{replaceGenerated:n=!1}={}){if(!P.currentSlideId)return;const v=P.projectId;if(!v||!Array.isArray(s)||!s.length)return;s.map(m=>He(m)).forEach(m=>{const J=a.addSlide(v);J&&Ue(v,J.id,m,{replaceGenerated:n})})}function Ye(s=null,{replaceGenerated:n=!1}={}){if(!P.currentSlideId)return;let v=s;if(!v){if(!oe.value)return;try{v=JSON.parse(oe.value)}catch(ye){console.warn("Could not parse AI content:",ye);return}}const S=He(v),m=P.projectId,J=P.currentSlideId;!m||!J||Ue(m,J,S,{replaceGenerated:n})}function yt(){if(oe.value){if(C.value==="deck"){try{const s=JSON.parse(oe.value),n=Array.isArray(s)?s:s==null?void 0:s.slides;if(!Array.isArray(n)||!n.length)return;Le(n,{replaceGenerated:!0})}catch{return}return}Ye()}}async function gt(){const s=se.value.trim()||"[your topic]",n=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${R.value}" slide about "${s}" using a ${D.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,v=await z.generate(n,{type:"creativeOptions",topic:s,slideType:R.value});if(v)try{const S=JSON.parse(v.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(S))throw new Error("Options must be an array");De.value=S.slice(0,3).map((m,J)=>({title:String((m==null?void 0:m.title)||`Option ${J+1}`),angle:String((m==null?void 0:m.angle)||""),prompt:String((m==null?void 0:m.prompt)||"")})).filter(m=>m.prompt.trim()),De.value.length||(Me.value="No usable creative options were returned. Try generating again.")}catch{Me.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function kt(s){s!=null&&s.prompt&&(le.value=s.prompt,Ce.value=!0,xe.value="slide",await Je())}async function Wt(){if(!Fe.value.trim()||!P.projectId||!P.currentSlideId)return;const s=await z.transformSourceTextToSlideContent(Fe.value,{topic:se.value,slideType:R.value,description:be.value,layoutMode:D.value,customPrompt:le.value});if(!s)return;const n=He(s),v=At(Oe.value),S={x:Math.max(24,Math.round(v.minX)),y:Math.max(24,Math.round(v.minY))};Oe.value.forEach(m=>{a.deleteElement(P.projectId,P.currentSlideId,m.id)}),oe.value=JSON.stringify(n,null,2),Ue(P.projectId,P.currentSlideId,n,{origin:S})}async function wt(s=!1){if(!re.value.trim()&&!$.value.trim())return;s||(I.value=[]);const n=await z.generateQuiz(re.value,we.value,{difficulty:ge.value,questionType:Ne.value,objective:de.value,customPrompt:$.value});if(n)if(s){const v=new Set(I.value.map(m=>m.question)),S=n.filter(m=>!v.has(m.question)).map(m=>({...m,_selected:!0}));I.value=[...I.value,...S]}else I.value=n.map(v=>({...v,_selected:!0}))}async function Rt(){const s=I.value.filter(v=>v._selected);if(!s.length)return;const n=P.projectId;s.forEach((v,S)=>{const m=a.addSlide(n);if(m){a.addElement(n,m.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:v.question||"Untitled Question",options:Array.isArray(v.options)?v.options:["True","False"],correctIndex:typeof v.correctIndex=="number"?v.correctIndex:0,explanation:v.explanation||""}});const J=typeof v.question=="string"?v.question:"Quiz";a.updateSlide(n,m.id,{title:`Q${S+1}: ${J.slice(0,40)}…`})}}),I.value=[]}function Lt(s){I.value.forEach(n=>n._selected=s)}async function Ot(){if(!ve.value.trim())return;const s=await z.generateVoiceoverScript(ve.value);s&&(oe.value=s)}async function Ft(){var v,S;const s=(S=(v=Ee.value)==null?void 0:v.content)==null?void 0:S.text;if(!s)return;const n=await z.generateTranslation(s,U.value);n&&(oe.value=n)}async function Ut(){!oe.value||!Ee.value||a.updateElement(P.projectId,P.currentSlideId,Ee.value.id,{content:{...Ee.value.content,text:oe.value}})}const st=L(""),Ct=L(!1);function St(s){return String(s||"").replace(/```(json)?\n?/gi," ").replace(/```/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim().slice(0,220)}function ut(s,n){return new Promise((v,S)=>{const m=window.setTimeout(()=>{S(new Error("Timed out"))},n);Promise.resolve(s).then(J=>{window.clearTimeout(m),v(J)}).catch(J=>{window.clearTimeout(m),S(J)})})}function mt(s){const n=String(s||"").trim(),v=n.toLowerCase(),S=N.value;return n?v.includes("billing hard limit")||v.includes("billing")||v.includes("quota")||v.includes("insufficient_quota")?z.apiProvider==="gemini"?"Gemini image generation is being rejected by Google because this project is still on the free tier. Gemini Developer API image models require a billing-enabled project, so you need to enable billing in AI Studio or switch providers for image generation.":`Your ${S} account cannot generate images right now because its billing or quota limit has been reached. Update billing or wait for quota reset, then try again.`:z.apiProvider==="gemini"&&(v.includes("resource exhausted")||v.includes("free tier")||v.includes("generativelanguage.googleapis.com"))?"Gemini image generation is not available to this free-tier project. Enable billing for the Gemini project in AI Studio to use Gemini image models.":v.includes("invalid api key")||v.includes("incorrect api key")||v.includes("unauthorized")?`The ${S} API key appears invalid for image generation. Check the key in API settings and try again.`:v.includes("rate limit")||v.includes("too many requests")?`${S} rate-limited the image request. Wait a moment and try again.`:`${S} image generation failed: ${n}`:`${S} image generation did not return an image. Try a simpler prompt or try again in a moment.`}async function ht(){if(st.value.trim()){Ct.value=!0,oe.value="Preparing image prompt...";try{if(!z.apiKey&&z.apiProvider!=="gemini"){oe.value=`AI image generation requires a ${N.value} API key in API settings. No fallback image was inserted.`;return}let s=st.value;try{const v=await ut(z.generateImagePrompt(st.value),2200);v&&(s=v.replace(/```(json)?\n?/g,"").trim())}catch{s=st.value}s=St(s)||St(st.value),oe.value="Generating image and inserting it on the slide...";const n=await ut(z.generateImageAsset(s),2e4).catch(()=>null);if(!n){oe.value=mt(z.lastError);return}a.addElement(P.projectId,P.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:n,fallbackSrcs:[],alt:st.value.trim()||"AI generated image",sourceType:`${z.apiProvider}-image`,objectFit:"cover"}}),oe.value=`AI image added to slide using ${N.value} image generation.`}catch(s){oe.value=mt((s==null?void 0:s.message)||z.lastError)}finally{Ct.value=!1}}}async function bt(){var n,v;if(!((v=(n=Ee.value)==null?void 0:n.content)!=null&&v.text))return;const s=await z.improveText(Ee.value.content.text,F.value||"Make it clearer and more engaging");s&&(oe.value=s)}async function Gt(){!oe.value||!Ee.value||a.updateElement(P.projectId,P.currentSlideId,Ee.value.id,{content:{...Ee.value.content,text:oe.value}})}async function Vt(){if(!F.value.trim())return;const s=await z.generate(F.value);s&&(oe.value=s)}return(s,n)=>{var v,S,m,J,ye,et;return l(),i("div",S1,[e("div",$1,[(l(),i(te,null,ce([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],T=>e("button",{key:T.id,class:X(["ai-mode-btn",g.value===T.id&&"active"]),onClick:at=>g.value=T.id},w(T.label),11,I1)),64))]),e("div",E1,[g.value==="generate"?(l(),i(te,{key:0},[e("div",A1,[n[36]||(n[36]=e("label",{class:"form-label"},[ee("Topic / Subject "),e("span",{class:"required"},"*")],-1)),pe(e("input",{"onUpdate:modelValue":n[0]||(n[0]=T=>se.value=T),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:gl(Je,["enter"])},null,544),[[Ie,se.value]])]),e("div",M1,[e("button",{class:X(["output-mode-btn",C.value==="single"&&"active"]),onClick:n[1]||(n[1]=T=>C.value="single")},"Single Slide",2),e("button",{class:X(["output-mode-btn",C.value==="deck"&&"active"]),onClick:n[2]||(n[2]=T=>C.value="deck")},"Slide Deck",2)]),C.value==="single"?(l(),i("div",P1,[n[38]||(n[38]=e("label",{class:"form-label"},"Slide Type",-1)),pe(e("select",{"onUpdate:modelValue":n[3]||(n[3]=T=>R.value=T),class:"select"},[...n[37]||(n[37]=[it('<option value="general" data-v-3ccdb1b2>General</option><option value="intro" data-v-3ccdb1b2>Introduction</option><option value="overview" data-v-3ccdb1b2>Overview</option><option value="concept" data-v-3ccdb1b2>Concept Explanation</option><option value="example" data-v-3ccdb1b2>Example / Case Study</option><option value="summary" data-v-3ccdb1b2>Summary</option><option value="callout" data-v-3ccdb1b2>Key Takeaway</option>',7)])],512),[[jt,R.value]])])):q("",!0),C.value==="single"?(l(),i("div",T1,[e("div",B1,[n[39]||(n[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",N1,w(Re.value.hint),1)]),e("div",z1,[(l(),i(te,null,ce(r,T=>e("button",{key:T.id,class:X(["layout-preset-card",D.value===T.id&&"active"]),onClick:at=>D.value=T.id},[e("span",j1,w(T.label),1),e("span",D1,w(T.hint),1)],10,L1)),64))])])):(l(),i("div",_1,[n[40]||(n[40]=e("label",{class:"form-label"},"Number of Slides",-1)),pe(e("input",{"onUpdate:modelValue":n[4]||(n[4]=T=>K.value=T),class:"input",type:"number",min:"1",max:"20"},null,512),[[Ie,K.value,void 0,{number:!0}]]),n[41]||(n[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),C.value==="deck"?(l(),i("div",q1,[e("div",R1,[n[42]||(n[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",O1,w(_.value==="mixed"?"AI can vary layout by slide":`All slides use ${Re.value.label}`),1)]),e("div",F1,[e("button",{class:X(["output-mode-btn",_.value==="mixed"&&"active"]),onClick:n[5]||(n[5]=T=>_.value="mixed")},"Mixed Layouts",2),e("button",{class:X(["output-mode-btn",_.value==="single"&&"active"]),onClick:n[6]||(n[6]=T=>_.value="single")},"Consistent Layout",2)])])):q("",!0),C.value==="deck"&&_.value==="single"?(l(),i("div",U1,[e("div",V1,[n[43]||(n[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",W1,w(Re.value.hint),1)]),e("div",G1,[(l(),i(te,null,ce(r,T=>e("button",{key:`deck-${T.id}`,class:X(["layout-preset-card",D.value===T.id&&"active"]),onClick:at=>D.value=T.id},[e("span",Y1,w(T.label),1),e("span",J1,w(T.hint),1)],10,H1)),64))])])):q("",!0),e("div",Q1,[n[44]||(n[44]=e("label",{class:"form-label"},[ee("Description "),e("span",{class:"optional"},"(optional)")],-1)),pe(e("textarea",{"onUpdate:modelValue":n[7]||(n[7]=T=>be.value=T),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[Ie,be.value]])]),e("div",X1,[e("div",K1,[n[46]||(n[46]=e("label",{class:"form-label"},"AI Prompt",-1)),Ce.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:fe,title:"Reset to auto-generated prompt"},[...n[45]||(n[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),ee(" Reset ",-1)])])):(l(),i("span",Z1,"auto"))]),pe(e("textarea",{"onUpdate:modelValue":n[8]||(n[8]=T=>le.value=T),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:n[9]||(n[9]=T=>Ce.value=!0),spellcheck:"false"},null,544),[[Ie,le.value]]),n[47]||(n[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),C.value==="single"?(l(),i("div",eg,[e("button",{class:X(["output-mode-btn",xe.value==="slide"&&"active"]),onClick:n[10]||(n[10]=T=>xe.value="slide")},"Show on Slide",2),e("button",{class:X(["output-mode-btn",xe.value==="options"&&"active"]),onClick:n[11]||(n[11]=T=>xe.value="options")},"Creative Options",2)])):q("",!0),C.value==="single"&&Fe.value?(l(),i("div",tg,[e("div",og,[n[48]||(n[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",ng,w(Oe.value.length)+" selected",1)]),e("div",lg,w(Fe.value),1),e("div",ig,[e("button",{class:"btn btn-secondary btn-sm",disabled:E(z).isGenerating,onClick:Wt}," Transform Selection to "+w(Re.value.label),9,ag)])])):q("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E(z).isGenerating||!se.value.trim()&&!le.value.trim()||C.value==="deck"&&(!K.value||K.value<1||K.value>20),onClick:Je},[E(z).isGenerating?(l(),i("span",rg)):(l(),i("svg",dg,[...n[49]||(n[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),ee(" "+w(E(z).isGenerating?"Generating…":C.value==="deck"?oe.value?`Regenerate ${K.value} Slides`:`Generate ${K.value} Slides`:xe.value==="slide"?oe.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,sg),C.value==="single"&&xe.value==="options"&&(De.value.length||Me.value)?(l(),i("div",ug,[e("div",cg,[n[50]||(n[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[12]||(n[12]=T=>{De.value=[],Me.value=""})},"Clear")]),Me.value?(l(),i("div",pg,[n[51]||(n[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),ee(" "+w(Me.value),1)])):(l(),i("div",vg,[(l(!0),i(te,null,ce(De.value,(T,at)=>(l(),i("article",{key:at,class:"creative-option-card"},[e("h4",fg,w(T.title),1),e("p",gg,w(T.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:$t=>kt(T)},"Use This Option",8,mg)]))),128))]))])):q("",!0)],64)):g.value==="quiz"?(l(),i(te,{key:1},[e("div",bg,[n[52]||(n[52]=e("label",{class:"form-label"},[ee("Quiz Topic "),e("span",{class:"required"},"*")],-1)),pe(e("input",{"onUpdate:modelValue":n[13]||(n[13]=T=>re.value=T),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:gl(wt,["enter"])},null,544),[[Ie,re.value]])]),e("div",yg,[e("div",hg,[n[54]||(n[54]=e("label",{class:"form-label"},"Questions",-1)),pe(e("select",{"onUpdate:modelValue":n[14]||(n[14]=T=>we.value=T),class:"select"},[...n[53]||(n[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[jt,we.value,void 0,{number:!0}]])]),e("div",xg,[n[56]||(n[56]=e("label",{class:"form-label"},"Difficulty",-1)),pe(e("select",{"onUpdate:modelValue":n[15]||(n[15]=T=>ge.value=T),class:"select"},[...n[55]||(n[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[jt,ge.value]])])]),e("div",kg,[n[57]||(n[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",wg,[(l(),i(te,null,ce([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],T=>e("button",{key:T.id,class:X(["qtype-btn",Ne.value===T.id&&"active"]),onClick:at=>Ne.value=T.id},[e("span",Sg,w(T.icon),1),e("span",null,w(T.label),1)],10,Cg)),64))])]),e("div",$g,[n[58]||(n[58]=e("label",{class:"form-label"},[ee("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),pe(e("input",{"onUpdate:modelValue":n[16]||(n[16]=T=>de.value=T),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[Ie,de.value]])]),e("div",Ig,[e("div",Eg,[n[60]||(n[60]=e("label",{class:"form-label"},"AI Prompt",-1)),O.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Ke,title:"Reset to auto-generated prompt"},[...n[59]||(n[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),ee(" Reset ",-1)])])):(l(),i("span",Ag,"auto"))]),pe(e("textarea",{"onUpdate:modelValue":n[17]||(n[17]=T=>$.value=T),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:n[18]||(n[18]=T=>O.value=!0),spellcheck:"false"},null,544),[[Ie,$.value]]),n[61]||(n[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E(z).isGenerating||!re.value.trim()&&!$.value.trim(),onClick:n[19]||(n[19]=T=>wt(!1))},[E(z).isGenerating?(l(),i("span",Pg)):(l(),i("svg",Tg,[...n[62]||(n[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),ee(" "+w(E(z).isGenerating?"Generating…":`Generate ${we.value} Questions`),1)],8,Mg),I.value.length?(l(),i("div",Bg,[e("div",Ng,[e("span",zg,w(I.value.length)+" Questions",1),e("div",Lg,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[20]||(n[20]=T=>Lt(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:n[21]||(n[21]=T=>Lt(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:n[22]||(n[22]=T=>I.value=[])},"Clear")])]),e("div",jg,[e("button",{class:"btn btn-secondary regen-btn",disabled:E(z).isGenerating,onClick:n[23]||(n[23]=T=>wt(!1)),title:"Replace all questions with a new set"},[E(z).isGenerating?(l(),i("span",_g)):(l(),i("svg",qg,[...n[63]||(n[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),n[64]||(n[64]=ee(" Regenerate ",-1))],8,Dg),e("button",{class:"btn btn-ghost regen-btn",disabled:E(z).isGenerating,onClick:n[24]||(n[24]=T=>wt(!0)),title:"Generate more and append to current list"},[...n[65]||(n[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),ee(" Add More ",-1)])],8,Rg)]),(l(!0),i(te,null,ce(I.value,(T,at)=>(l(),i("div",{key:at,class:X(["quiz-card",{deselected:!T._selected}])},[e("div",Og,[e("label",Fg,[pe(e("input",{type:"checkbox","onUpdate:modelValue":$t=>T._selected=$t},null,8,Ug),[[_t,T._selected]]),e("span",Vg,"Q"+w(at+1),1)]),e("div",Wg,[e("span",{class:X(["badge difficulty-badge",T.difficulty])},w(T.difficulty),3),e("span",Gg,w(T.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",Hg,w(T.question),1),e("div",Yg,[(l(!0),i(te,null,ce(T.options,($t,It)=>(l(),i("div",{key:It,class:X(["q-option",It===T.correctIndex&&"correct"])},[e("span",Jg,w(["A","B","C","D"][It]),1),e("span",null,w($t),1),It===T.correctIndex?(l(),i("svg",Qg,[...n[66]||(n[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):q("",!0)],2))),128))]),T.explanation?(l(),i("div",Xg,[n[67]||(n[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),ee(" "+w(T.explanation),1)])):q("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!I.value.filter(T=>T._selected).length,onClick:Rt},[n[68]||(n[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),ee(" Add "+w(I.value.filter(T=>T._selected).length)+" Selected as Quiz Slides ",1)],8,Kg)])):q("",!0)],64)):g.value==="voiceover"?(l(),i(te,{key:2},[e("div",Zg,[n[69]||(n[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),pe(e("textarea",{"onUpdate:modelValue":n[25]||(n[25]=T=>ve.value=T),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[Ie,ve.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E(z).isGenerating,onClick:Ot},[E(z).isGenerating?(l(),i("span",tm)):q("",!0),ee(" "+w(E(z).isGenerating?"Generating…":"Generate Script"),1)],8,em)],64)):g.value==="improve"?(l(),i(te,{key:3},[(S=(v=Ee.value)==null?void 0:v.content)!=null&&S.text?(l(),i("div",om,[n[70]||(n[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",nm,w(Ee.value.content.text.slice(0,120))+w(Ee.value.content.text.length>120?"…":""),1)])):(l(),i("p",lm,"Select a text element on the canvas to improve it.")),e("div",im,[n[71]||(n[71]=e("label",{class:"form-label"},"Instruction",-1)),pe(e("input",{"onUpdate:modelValue":n[26]||(n[26]=T=>F.value=T),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[Ie,F.value]])]),n[72]||(n[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),pe(e("textarea",{"onUpdate:modelValue":n[27]||(n[27]=T=>F.value=T),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[Ie,F.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E(z).isGenerating||!Ee.value&&!F.value,onClick:n[28]||(n[28]=T=>Ee.value?bt():Vt())},[E(z).isGenerating?(l(),i("span",sm)):q("",!0),ee(" "+w(E(z).isGenerating?"Processing…":"Generate"),1)],8,am)],64)):g.value==="translate"?(l(),i(te,{key:4},[(J=(m=Ee.value)==null?void 0:m.content)!=null&&J.text?(l(),i("div",rm,[n[73]||(n[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",dm,w(Ee.value.content.text.slice(0,120))+w(Ee.value.content.text.length>120?"…":""),1)])):(l(),i("p",um,"Select a text element on the canvas to translate it.")),e("div",cm,[n[75]||(n[75]=e("label",{class:"form-label"},"Target Language",-1)),pe(e("select",{"onUpdate:modelValue":n[29]||(n[29]=T=>U.value=T),class:"select"},[...n[74]||(n[74]=[it('<option value="Spanish" data-v-3ccdb1b2>Spanish</option><option value="French" data-v-3ccdb1b2>French</option><option value="German" data-v-3ccdb1b2>German</option><option value="Italian" data-v-3ccdb1b2>Italian</option><option value="Portuguese" data-v-3ccdb1b2>Portuguese</option><option value="Chinese (Simplified)" data-v-3ccdb1b2>Chinese (Simplified)</option><option value="Japanese" data-v-3ccdb1b2>Japanese</option><option value="Arabic" data-v-3ccdb1b2>Arabic</option>',8)])],512),[[jt,U.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E(z).isGenerating||!((et=(ye=Ee.value)==null?void 0:ye.content)!=null&&et.text),onClick:Ft},[E(z).isGenerating?(l(),i("span",vm)):q("",!0),ee(" "+w(E(z).isGenerating?"Translating…":"Translate Text"),1)],8,pm),oe.value?(l(),i("div",fm,[e("div",gm,[n[76]||(n[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",mm,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[30]||(n[30]=T=>s.navigator.clipboard.writeText(oe.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Ut,disabled:!Ee.value},"Apply",8,bm)])]),e("div",ym,w(oe.value),1)])):q("",!0)],64)):g.value==="image"?(l(),i(te,{key:5},[n[81]||(n[81]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),E(z).apiProvider==="gemini"?(l(),i("div",hm,[...n[77]||(n[77]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),ee(" Gemini text features work on the free tier, but Gemini image generation on the Developer API usually needs billing enabled for the project. ",-1)])])):q("",!0),E(z).apiKey?q("",!0):(l(),i("div",xm,[n[78]||(n[78]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),ee(" AI image generation needs a "+w(N.value)+" API key in API settings. ",1)])),e("div",km,[n[79]||(n[79]=e("label",{class:"form-label"},"Image Description",-1)),pe(e("textarea",{"onUpdate:modelValue":n[31]||(n[31]=T=>st.value=T),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[Ie,st.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ct.value||E(z).isGenerating||!st.value||!E(z).apiKey,onClick:ht},[Ct.value||E(z).isGenerating?(l(),i("span",Cm)):q("",!0),ee(" "+w(Ct.value||E(z).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,wm),oe.value?(l(),i("div",Sm,[n[80]||(n[80]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",$m,w(oe.value),1)])):q("",!0)],64)):g.value==="settings"?(l(),i("div",Im,[e("div",Em,[n[83]||(n[83]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:E(z).apiProvider,class:"select",onChange:n[32]||(n[32]=T=>E(z).setProvider(T.target.value))},[...n[82]||(n[82]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"gemini"},"Google Gemini (Free tier for text)",-1)])],40,Am)]),e("div",Mm,[n[84]||(n[84]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:E(z).apiKey,class:"input",placeholder:j.value,onChange:n[33]||(n[33]=T=>E(z).setApiKey(T.target.value))},null,40,Pm),e("p",Tm,w(Y.value),1)]),E(z).apiProvider==="gemini"?(l(),i("div",Bm,[...n[85]||(n[85]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),ee(" Gemini is enabled for content, quiz, voiceover, improve, and translate in this app. Gemini image generation may still require billing on the Google project. ",-1)])])):q("",!0),E(z).apiKey?q("",!0):(l(),i("div",Nm,[n[86]||(n[86]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),n[87]||(n[87]=ee(" Running in ",-1)),n[88]||(n[88]=e("strong",null,"demo mode",-1)),ee(" — sample responses only. Add your "+w(N.value)+" API key to use real AI generation. ",1)]))])):q("",!0),oe.value&&g.value!=="settings"&&g.value!=="quiz"?(l(),i("div",zm,[e("div",Lm,[n[89]||(n[89]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[34]||(n[34]=T=>oe.value="")},"Clear")]),e("pre",jm,w(oe.value),1),e("div",Dm,[g.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:yt},w(C.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):q("",!0),g.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:E(z).isGenerating,onClick:Je},[...n[90]||(n[90]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),ee(" Regenerate ",-1)])],8,_m)):q("",!0),g.value==="improve"&&Ee.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Gt}," Apply to Element ")):q("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:n[35]||(n[35]=T=>{var at;return(at=s.navigator.clipboard)==null?void 0:at.writeText(oe.value)})}," Copy ")])])):q("",!0),E(z).lastError?(l(),i("div",qm,[n[91]||(n[91]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),ee(" "+w(E(z).lastError),1)])):q("",!0)])])}}},Om=nt(Rm,[["__scopeId","data-v-3ccdb1b2"]]),Fm={class:"theme-manager"},Um={class:"panel-section"},Vm={class:"presets-grid"},Wm=["title","onClick"],Gm={class:"preset-preview"},Hm={class:"preset-name"},Ym={class:"panel-section"},Jm={class:"theme-fields"},Qm={class:"form-label"},Xm={class:"color-row"},Km=["value","onInput"],Zm=["value","onChange"],eb={class:"panel-section"},tb={class:"theme-field"},ob=["value","placeholder"],nb={class:"chart-palette-preview"},lb={class:"panel-section"},ib={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ab=["value"],sb=["value"],rb={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},db=["value"],ub=["value"],cb={class:"form-group"},pb=["value"],vb={class:"panel-section"},fb={class:"tp-chart-row"},gb={key:0,class:"apply-message success"},mb={key:1,class:"apply-message error"},bb={__name:"ThemeManager",setup(A){const r=rt(),u=dt(),c=M(()=>u.getProject(r.projectId)),p=M(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),h=M(()=>ml(p.value)),k=L(""),f=L("");function H(a){u.updateProject(r.projectId,{theme:{...p.value,...a}})}const ae=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],G=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function V(a){H(a)}function me(a,N){const j=a.content||{};return a.type==="text"?{content:{...j,fontFamily:N.fontFamily||j.fontFamily,color:N.textColor||j.color}}:a.type==="heading"?{content:{...j,fontFamily:N.headingFont||N.fontFamily||j.fontFamily,color:N.textColor||j.color}}:a.type==="shape"?{content:{...j,fillColor:N.secondaryColor||j.fillColor}}:a.type==="hotspot"?{content:{...j,bgColor:N.primaryColor||j.bgColor}}:a.type==="button"?{content:{...j,bgColor:N.primaryColor||j.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:N.fontFamily||j.fontFamily}}:a.type==="quiz"?{content:{...j,cardBgColor:N.bgColor||j.cardBgColor,questionColor:N.textColor||j.questionColor,accentColor:N.primaryColor||j.accentColor}}:a.type==="chart"?{content:{...j,...Sl(N)}}:null}function z(){H({chartPalette:""})}function P(){k.value="",f.value="";const a=r.projectId,N=c.value,j=p.value;if(!a||!N){f.value="No active project to apply theme.";return}const Y=N.slides||[];let g=0;Y.forEach(F=>{(F.backgroundType||"color")==="color"&&u.updateSlide(a,F.id,{backgroundType:"color",background:j.bgColor||F.background||"#ffffff"}),(F.elements||[]).forEach(se=>{const oe=me(se,j);oe&&(u.updateElement(a,F.id,se.id,oe),g+=1)})}),k.value=`Applied theme to ${Y.length} slide${Y.length===1?"":"s"} and ${g} element${g===1?"":"s"}.`}return(a,N)=>(l(),i("div",Fm,[e("div",Um,[N[4]||(N[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",Vm,[(l(),i(te,null,ce(ae,j=>e("div",{key:j.name,class:"preset-card",title:j.name,onClick:Y=>V(j)},[e("div",Gm,[e("div",{class:"pp-header",style:he({background:j.primaryColor})},null,4),e("div",{class:"pp-body",style:he({background:j.bgColor})},[e("div",{class:"pp-line",style:he({background:j.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:he({background:j.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:he({background:j.secondaryColor})},null,4)]),e("span",Hm,w(j.name),1)],8,Wm)),64))])]),e("div",Ym,[N[5]||(N[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",Jm,[(l(),i(te,null,ce({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(j,Y)=>e("div",{class:"theme-field",key:Y},[e("label",Qm,w(j),1),e("div",Xm,[e("input",{type:"color",value:p.value[Y]||"#ffffff",class:"color-input-native",onInput:g=>H({[Y]:g.target.value})},null,40,Km),e("input",{value:p.value[Y]||"",class:"input",onChange:g=>H({[Y]:g.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Zm)])])),64))])]),e("div",eb,[N[8]||(N[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",tb,[N[6]||(N[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:E(Wl)(E(ml)(p.value)),onChange:N[0]||(N[0]=j=>H({chartPalette:j.target.value}))},null,40,ob),e("div",nb,[(l(!0),i(te,null,ce(h.value,(j,Y)=>(l(),i("span",{key:`theme-chart-${Y}`,class:"chart-palette-dot",style:he({background:j})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:z},"Use auto palette")]),N[7]||(N[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",lb,[N[12]||(N[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",ib,[N[9]||(N[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:N[1]||(N[1]=j=>H({headingFont:j.target.value}))},[(l(),i(te,null,ce(G,j=>e("option",{key:j.value,value:j.value},w(j.label),9,sb)),64))],40,ab)]),e("div",rb,[N[10]||(N[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:N[2]||(N[2]=j=>H({fontFamily:j.target.value}))},[(l(),i(te,null,ce(G,j=>e("option",{key:j.value,value:j.value},w(j.label),9,ub)),64))],40,db)]),e("div",cb,[N[11]||(N[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:N[3]||(N[3]=j=>H({fontSize:+j.target.value}))},null,40,pb)])]),e("div",vb,[N[13]||(N[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:he({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:he({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:he({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:he({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:he({background:p.value.secondaryColor})},"Badge",4),e("div",fb,[(l(!0),i(te,null,ce(h.value.slice(0,5),(j,Y)=>(l(),i("span",{key:`preview-chart-${Y}`,class:"tp-chart-bar",style:he({background:j,height:`${22+Y*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:P}," Apply Theme to Slides "),k.value?(l(),i("p",gb,w(k.value),1)):q("",!0),f.value?(l(),i("p",mb,w(f.value),1)):q("",!0)])]))}},yb=nt(bb,[["__scopeId","data-v-da2b0ce4"]]),hb={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},xb={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},kb={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},wb={class:"export-tabs tabs",style:{"overflow-x":"auto"}},Cb={class:"export-content"},Sb={class:"export-options",style:{"margin-bottom":"20px"}},$b={class:"form-group"},Ib={class:"export-meta"},Eb={class:"meta-item"},Ab={class:"meta-item"},Mb={class:"meta-item"},Pb={class:"export-options",style:{"margin-bottom":"20px"}},Tb={class:"form-group"},Bb={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Nb={class:"export-options",style:{"margin-bottom":"20px"}},zb={class:"form-group"},Lb={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},jb={class:"coming-soon"},Db={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},_b={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},qb={key:1,class:"export-success"},Rb={__name:"ExportModal",setup(A){const r=rt(),u=dt(),c=$l(),p=M(()=>u.getProject(r.projectId)),h=L("json"),k=L(""),f=L(""),H=L(!0);ot(p,Y=>{Y&&!f.value&&(f.value=Y.name||"presentation")},{immediate:!0});function ae(){const Y=u.exportProject(r.projectId);if(!Y)return;const g=new Blob([Y],{type:"application/json"}),F=URL.createObjectURL(g),se=document.createElement("a");se.href=F,se.download=`${f.value||"project"}.mediasurf.json`,se.click(),URL.revokeObjectURL(F),k.value="success",setTimeout(()=>k.value="",3e3)}function G(Y,g="presentation"){return String(Y).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||g}function V(Y){return new Promise((g,F)=>{const se=new FileReader;se.onloadend=()=>g(se.result),se.onerror=()=>F(se.error),se.readAsDataURL(Y)})}function me(Y,g,F="html"){const se=qt(g);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${se.width}px;
  --lf-slide-height: ${se.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(Y==null?void 0:Y.fontFamily)||"Inter, sans-serif"};
  background: ${F==="pdf"?"#f3f4f6":`
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%)`};
  color: ${F==="pdf"?"#111827":"#ffffff"};
  display: ${F==="pdf"?"block":"flex"};
  align-items: ${F==="pdf"?"stretch":"center"};
  justify-content: ${F==="pdf"?"flex-start":"center"};
  overflow: ${F==="pdf"?"auto":"hidden"};
  padding: ${F==="pdf"?"24px 0":"0"};
}
.lf-shell {
  width: ${F==="pdf"?"100%":"100vw"};
  min-height: ${F==="pdf"?"auto":"100vh"};
  height: ${F==="pdf"?"auto":"100vh"};
  position: relative;
  display: flex;
  align-items: ${F==="pdf"?"stretch":"center"};
  justify-content: center;
  overflow: ${F==="pdf"?"visible":"hidden"};
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
  width: ${F==="pdf"?"100%":"auto"};
  max-width: ${F==="pdf"?"none":"auto"};
  padding: ${F==="pdf"?"0":"18px"};
  border-radius: ${F==="pdf"?"0":"32px"};
  background: ${F==="pdf"?"transparent":"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"};
  border: ${F==="pdf"?"none":"1px solid rgba(255,255,255,0.12)"};
  box-shadow: ${F==="pdf"?"none":"0 30px 80px rgba(0,0,0,.34)"};
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
  width: ${F==="pdf"?"100%":"var(--lf-slide-width)"};
  height: ${F==="pdf"?"auto":"var(--lf-slide-height)"};
  border-radius: ${F==="pdf"?"0":"18px"};
  overflow: ${F==="pdf"?"visible":"hidden"};
  box-shadow: ${F==="pdf"?"none":"0 30px 90px rgba(0,0,0,.5)"};
  transform-origin: center center;
  display: ${F==="pdf"?"flex":"block"};
  flex-direction: ${F==="pdf"?"column":"row"};
  align-items: ${F==="pdf"?"center":"stretch"};
  gap: ${F==="pdf"?"24px":"0"};
}
.slide {
  position: ${F==="pdf"?"relative":"absolute"};
  inset: ${F==="pdf"?"auto":"0"};
  display: ${F==="pdf"?"block":"none"};
  overflow: hidden;
  color: ${(Y==null?void 0:Y.textColor)||"#1a1a2e"};
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
  flex: 0 0 auto;
  background-clip: padding-box;
  box-shadow: ${F==="pdf"?"0 12px 32px rgba(15, 23, 42, 0.16)":"none"};
  page-break-after: ${F==="pdf"?"always":"auto"};
  break-after: ${F==="pdf"?"page":"auto"};
}
.slide.active { display: block; }
.slide:last-child {
  page-break-after: auto;
  break-after: auto;
}
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
.lf-tabs {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
.lf-tabs-header {
  display: flex;
  border-bottom: 1px solid #e2e8f0;
}
.lf-tab-btn {
  flex: 1;
  padding: 10px 12px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  background: transparent;
  border-top: none;border-left: none;border-right: none;
  font-family: inherit;
}
.lf-tab-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
}
.lf-accordion {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: auto;
}
.lf-accordion-item {
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
}
.lf-accordion-header {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s;
}
.lf-accordion-content {
  padding: 0 16px 16px 16px;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
}
.lf-flipcard {
  width: 100%;
  height: 100%;
  perspective: 1000px;
  cursor: pointer;
}
.lf-flipcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.lf-flipcard-front, .lf-flipcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 12px;
}
.lf-stepper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}
.lf-stepper-header {
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.lf-step-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.lf-step-line {
  width: 32px;
  height: 2px;
  transition: all 0.3s;
}
.lf-stepper-content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.lf-stepper-footer {
  padding: 12px 24px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lf-stepper-btn {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  font-family: inherit;
  border: 1px solid #e2e8f0;
}
.lf-stepper-btn[disabled] { opacity: 0.5; }

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
  display: ${(g==null?void 0:g.showNavControls)===!1?"none":"flex"};
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
  display: ${(g==null?void 0:g.showNavControls)===!1?"none":"flex"};
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
  background: ${(Y==null?void 0:Y.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(g==null?void 0:g.showProgress)===!1?"none":"block"};
  z-index: 6;
}
${F==="iframe"?`
body {
  background: transparent;
}
.lf-shell::before,
.lf-shell::after,
.lf-grid {
  display: none;
}
.lf-stage-shell {
  padding: 0;
  border: none;
  background: transparent;
  box-shadow: none;
}
.lf-stage-shell::before {
  display: none;
}
.presentation {
  box-shadow: none;
}
`:""}
${F==="pdf"?`
.lf-shell::before,
.lf-shell::after,
.lf-grid,
.progress,
.dot-nav,
.nav {
  display: none !important;
}
.lf-stage-shell::before {
  display: none;
}
@page {
  size: auto;
  margin: 12mm;
}
@media print {
  html, body {
    min-height: auto;
    background: #ffffff;
  }
  body {
    padding: 0;
    overflow: visible;
  }
  .lf-shell,
  .lf-stage-shell,
  .presentation {
    width: 100%;
    min-height: auto;
    overflow: visible;
  }
  .presentation {
    gap: 0;
  }
  .slide {
    margin: 0 auto;
    box-shadow: none;
  }
}
`:""}
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
`}function z(Y="html"){return`
(function () {
  var exportMode = ${JSON.stringify(Y)};
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

  if (exportMode === 'pdf') {
    slideNodes.forEach(function (node) {
      node.classList.add('active');
      triggerLoadInteractions(node);
    });
    queuePrint();
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
    if (exportMode === 'pdf') {
      stage.style.transform = 'none';
      return;
    }
    var slideWidth = Math.max(320, Number(settings.slideWidth || 960));
    var slideHeight = Math.max(320, Number(settings.slideHeight || 540));
    var availableWidth = Math.max(240, window.innerWidth - 72);
    var availableHeight = Math.max(240, window.innerHeight - 72);
    var scale = Math.min(availableWidth / slideWidth, availableHeight / slideHeight, 1.5);
    stage.style.transform = 'scale(' + scale + ')';
  }

  function queuePrint() {
    var images = Array.prototype.filter.call(document.images || [], function (image) {
      return !image.complete;
    });
    var didPrint = false;

    function triggerPrint() {
      if (didPrint) return;
      didPrint = true;
      window.setTimeout(function () {
        window.focus();
        window.print();
      }, 300);
    }

    if (!images.length) {
      triggerPrint();
      return;
    }

    var remaining = images.length;
    images.forEach(function (image) {
      function onReady() {
        remaining -= 1;
        if (remaining <= 0) triggerPrint();
      }
      image.addEventListener('load', onReady, { once: true });
      image.addEventListener('error', onReady, { once: true });
    });

    window.setTimeout(triggerPrint, 1800);
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
    if (raw === 'next') return state.current + 1 < slideNodes.length ? state.current + 1 : null;
    if (raw === 'prev') return state.current - 1 >= 0 ? state.current - 1 : null;
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
      return;
    }
    if (action === 'toggleElement') {
      var scope = sourceNode ? sourceNode.closest('.slide') : slideNodes[state.current];
      var targetNode = scope ? scope.querySelector('[data-el-id="' + cssEscape(value) + '"]') : null;
      if (targetNode) {
        targetNode.style.display = targetNode.style.display === 'none' ? '' : 'none';
      }
      return;
    }
    if (action === 'completeActivity') {
      if (sourceNode) {
        var check = document.createElement('div');
        check.className = 'lf-completion-mark';
        check.textContent = '✓';
        check.style.cssText = 'position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:#10b981;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold;z-index:99;box-shadow:0 2px 4px rgba(0,0,0,0.2)';
        sourceNode.appendChild(check);
      }
      return;
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
    var interactive = ['button', 'hotspot', 'quiz', 'poll', 'matching', 'sorting', 'cloze', 'scenario', 'progress', 'tabs', 'accordion', 'flipcard', 'stepper', 'labeledimage', 'audio', 'video'].includes(el.type) || interactions.length > 0;
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
    } else if (el.type === 'tabs') {
      wrapper.appendChild(renderTabs(content));
    } else if (el.type === 'accordion') {
      wrapper.appendChild(renderAccordion(content));
    } else if (el.type === 'flipcard') {
      wrapper.appendChild(renderFlipCard(content));
    } else if (el.type === 'stepper') {
      wrapper.appendChild(renderStepper(content));
    } else if (el.type === 'poll') {
      wrapper.appendChild(renderPoll(content, el.id));
    } else if (el.type === 'labeledimage') {
      wrapper.appendChild(renderLabeledImage(content, el.id));
    } else if (el.type === 'matching') {
      wrapper.appendChild(renderMatching(content, el.id));
    } else if (el.type === 'sorting') {
      wrapper.appendChild(renderSorting(content, el.id));
    } else if (el.type === 'cloze') {
      wrapper.appendChild(renderCloze(content, el.id));
    } else if (el.type === 'scenario') {
      wrapper.appendChild(renderScenario(content, el.id));
    } else if (el.type === 'progress') {
      wrapper.appendChild(renderProgress(content, el.id));
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

  function renderTabs(content) {
    var root = document.createElement('div');
    root.className = 'lf-tabs';
    root.style.background = content.contentBgColor || '#ffffff';

    var header = document.createElement('div');
    header.className = 'lf-tabs-header';
    header.style.background = content.inactiveTabColor || '#f8fafc';

    var tabContent = document.createElement('div');
    tabContent.className = 'lf-tab-content';
    tabContent.style.color = content.textColor || '#1e293b';

    var tabs = Array.isArray(content.tabs) ? content.tabs : [];
    var activeId = tabs.length > 0 ? tabs[0].id : null;
    var tabButtons = [];

    tabs.forEach(function(tab) {
      var btn = document.createElement('button');
      btn.className = 'lf-tab-btn';
      btn.textContent = tab.label;
      btn.onclick = function() {
        activeId = tab.id;
        syncTabs();
      };
      header.appendChild(btn);
      tabButtons.push({ id: tab.id, el: btn, content: tab.content });
    });

    function syncTabs() {
      var activeContent = '';
      tabButtons.forEach(function(tabObj) {
        var isActive = tabObj.id === activeId;
        tabObj.el.style.color = isActive ? (content.activeTabColor || '#6c47ff') : '#64748b';
        tabObj.el.style.borderBottomColor = isActive ? (content.activeTabColor || '#6c47ff') : 'transparent';
        tabObj.el.style.background = isActive ? (content.contentBgColor || '#ffffff') : 'transparent';
        tabObj.el.style.fontWeight = isActive ? '600' : '400';
        if (isActive) activeContent = tabObj.content || '';
      });
      tabContent.textContent = activeContent;
    }

    if (tabs.length > 0) syncTabs();

    root.appendChild(header);
    root.appendChild(tabContent);
    return root;
  }

  function renderAccordion(content) {
    var root = document.createElement('div');
    root.className = 'lf-accordion';
    
    var items = Array.isArray(content.items) ? content.items : [];
    var openId = items.length > 0 ? items[0].id : null;
    var itemNodes = [];

    items.forEach(function(item) {
      var itemWrap = document.createElement('div');
      itemWrap.className = 'lf-accordion-item';
      itemWrap.style.background = content.itemBgColor || '#ffffff';

      var header = document.createElement('div');
      header.className = 'lf-accordion-header';
      
      var title = document.createElement('span');
      title.textContent = item.title;
      
      var icon = document.createElement('span');
      // basic chevron
      icon.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';
      
      header.appendChild(title);
      header.appendChild(icon);

      var contentDiv = document.createElement('div');
      contentDiv.className = 'lf-accordion-content';
      contentDiv.textContent = item.content;

      header.onclick = function() {
        if (openId === item.id && content.allowAllClosed) {
          openId = null;
        } else {
          openId = item.id;
        }
        syncAccordion();
      };

      itemWrap.appendChild(header);
      itemWrap.appendChild(contentDiv);
      root.appendChild(itemWrap);
      
      itemNodes.push({ id: item.id, header: header, contentDiv: contentDiv, icon: icon.querySelector('svg') });
    });

    function syncAccordion() {
      itemNodes.forEach(function(node) {
        var isOpen = node.id === openId;
        node.header.style.background = isOpen ? (content.activeBgColor || '#f8fafc') : 'transparent';
        node.header.style.color = isOpen ? (content.activeColor || '#6c47ff') : (content.titleColor || '#0f172a');
        node.contentDiv.style.display = isOpen ? 'block' : 'none';
        node.contentDiv.style.background = content.activeBgColor || '#f8fafc';
        node.contentDiv.style.color = content.textColor || '#475569';
        if (node.icon) node.icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      });
    }

    syncAccordion();
    return root;
  }

  function renderFlipCard(content) {
    var root = document.createElement('div');
    root.className = 'lf-flipcard';
    
    var inner = document.createElement('div');
    inner.className = 'lf-flipcard-inner';
    
    var front = document.createElement('div');
    front.className = 'lf-flipcard-front';
    front.style.background = content.frontBgColor || '#6c47ff';
    front.style.color = content.frontTextColor || '#ffffff';
    front.style.border = '1px solid ' + (content.borderColor || 'transparent');
    
    var frontTitle = document.createElement('h3');
    frontTitle.style.fontSize = '20px'; frontTitle.style.margin = '0 0 8px 0';
    frontTitle.textContent = content.frontTitle || '';
    
    var frontContent = document.createElement('p');
    frontContent.style.fontSize = '15px'; frontContent.style.margin = '0'; frontContent.style.whiteSpace = 'pre-wrap';
    frontContent.textContent = content.frontContent || '';
    
    if (content.frontTitle) front.appendChild(frontTitle);
    if (content.frontContent) front.appendChild(frontContent);

    var back = document.createElement('div');
    back.className = 'lf-flipcard-back';
    back.style.background = content.backBgColor || '#ffffff';
    back.style.color = content.backTextColor || '#1e293b';
    back.style.border = '1px solid ' + (content.borderColor || '#e2e8f0');
    
    var backTitle = document.createElement('h3');
    backTitle.style.fontSize = '20px'; backTitle.style.margin = '0 0 8px 0';
    backTitle.textContent = content.backTitle || '';
    
    var backContent = document.createElement('p');
    backContent.style.fontSize = '15px'; backContent.style.margin = '0'; backContent.style.whiteSpace = 'pre-wrap';
    backContent.textContent = content.backContent || '';
    
    if (content.backTitle) back.appendChild(backTitle);
    if (content.backContent) back.appendChild(backContent);

    var isVertical = content.flipDirection === 'vertical';
    back.style.transform = isVertical ? 'rotateX(180deg)' : 'rotateY(180deg)';

    inner.appendChild(front);
    inner.appendChild(back);
    root.appendChild(inner);

    var flipped = false;
    root.onclick = function() {
      flipped = !flipped;
      inner.style.transform = flipped ? (isVertical ? 'rotateX(180deg)' : 'rotateY(180deg)') : 'none';
    };

    return root;
  }

  function renderStepper(content) {
    var root = document.createElement('div');
    root.className = 'lf-stepper';
    root.style.background = content.bgColor || '#ffffff';

    var header = document.createElement('div');
    header.className = 'lf-stepper-header';

    var steps = Array.isArray(content.steps) ? content.steps : [];
    var currentIndex = 0;
    var stepNodes = [];
    var lineNodes = [];

    steps.forEach(function(step, idx) {
      var wrap = document.createElement('div');
      wrap.style.display = 'flex'; wrap.style.alignItems = 'center';

      var circle = document.createElement('div');
      circle.className = 'lf-step-circle';
      circle.textContent = String(idx + 1);
      circle.onclick = function() {
        currentIndex = idx;
        syncStepper();
      };
      wrap.appendChild(circle);
      stepNodes.push(circle);

      if (idx < steps.length - 1) {
        var line = document.createElement('div');
        line.className = 'lf-step-line';
        wrap.appendChild(line);
        lineNodes.push(line);
      }
      
      header.appendChild(wrap);
    });

    var cBody = document.createElement('div');
    cBody.className = 'lf-stepper-content';
    
    var cTitle = document.createElement('h3');
    cTitle.style.fontSize = '18px'; cTitle.style.margin = '0 0 12px 0';
    cTitle.style.color = content.titleColor || '#0f172a';
    
    var cText = document.createElement('div');
    cText.style.fontSize = '15px'; cText.style.whiteSpace = 'pre-wrap';
    cText.style.color = content.textColor || '#475569';
    
    cBody.appendChild(cTitle);
    cBody.appendChild(cText);

    var footer = document.createElement('div');
    footer.className = 'lf-stepper-footer';

    var prevBtn = document.createElement('button');
    prevBtn.className = 'lf-stepper-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.onclick = function() { if (currentIndex > 0) { currentIndex--; syncStepper(); } };
    
    var statusText = document.createElement('span');
    statusText.style.fontSize = '13px'; statusText.style.color = '#94a3b8';

    var nextBtn = document.createElement('button');
    nextBtn.className = 'lf-stepper-btn';
    nextBtn.textContent = 'Next';
    nextBtn.onclick = function() { if (currentIndex < steps.length - 1) { currentIndex++; syncStepper(); } };

    footer.appendChild(prevBtn);
    footer.appendChild(statusText);
    footer.appendChild(nextBtn);

    root.appendChild(header);
    root.appendChild(cBody);
    root.appendChild(footer);

    function syncStepper() {
      var activeStep = steps[currentIndex] || {};
      cTitle.textContent = activeStep.title || '';
      cText.textContent = activeStep.content || '';
      statusText.textContent = 'Step ' + (currentIndex + 1) + ' of ' + steps.length;
      
      prevBtn.disabled = currentIndex === 0;
      prevBtn.style.color = currentIndex === 0 ? '#cbd5e1' : '#475569';
      
      var isLast = currentIndex === steps.length - 1;
      nextBtn.disabled = isLast;
      nextBtn.style.background = isLast ? '#e2e8f0' : (content.accentColor || '#6c47ff');
      nextBtn.style.color = isLast ? '#94a3b8' : '#ffffff';
      nextBtn.style.border = isLast ? '1px solid #e2e8f0' : 'none';

      stepNodes.forEach(function(node, j) {
        var isActive = j <= currentIndex;
        node.style.background = isActive ? (content.accentColor || '#6c47ff') : '#f1f5f9';
        node.style.color = isActive ? '#ffffff' : '#64748b';
        node.style.borderColor = isActive ? (content.accentColor || '#6c47ff') : '#e2e8f0';
        node.style.borderStyle = 'solid';
        node.style.borderWidth = '2px';
      });

      lineNodes.forEach(function(line, j) {
        line.style.background = j < currentIndex ? (content.accentColor || '#6c47ff') : '#e2e8f0';
      });
    }

    if (steps.length > 0) syncStepper();

    return root;
  }

  function renderPoll(content, id) {
    var root = document.createElement('div');
    root.style.width = '100%'; root.style.height = '100%';
    root.style.fontFamily = 'system-ui, sans-serif';
    root.style.display = 'flex'; root.style.flexDirection = 'column';
    root.style.padding = '16px'; root.style.boxSizing = 'border-box';
    root.style.background = '#ffffff'; root.style.borderRadius = '8px';
    root.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';

    var question = document.createElement('h3');
    question.style.fontSize = '18px'; question.style.margin = '0 0 16px 0';
    question.style.color = '#1e293b'; question.textContent = content.question || 'Poll Question';
    root.appendChild(question);

    var options = content.options || [];
    var totalVotes = 0;
    var votedIndex = -1;
    var optionNodes = [];

    var optsContainer = document.createElement('div');
    optsContainer.style.display = 'flex'; optsContainer.style.flexDirection = 'column'; optsContainer.style.gap = '8px';
    
    options.forEach(function(opt, idx) {
      if (opt.votes) totalVotes += opt.votes;
      var optEl = document.createElement('div');
      optEl.style.position = 'relative'; optEl.style.padding = '12px 16px';
      optEl.style.border = '1px solid #e2e8f0'; optEl.style.borderRadius = '6px';
      optEl.style.cursor = 'pointer'; optEl.style.overflow = 'hidden';
      
      var bgEl = document.createElement('div');
      bgEl.style.position = 'absolute'; bgEl.style.left = '0'; bgEl.style.top = '0'; bgEl.style.bottom = '0';
      bgEl.style.width = '0%'; bgEl.style.background = content.votedColor || '#6c47ff';
      bgEl.style.opacity = '0.15'; bgEl.style.transition = 'width 0.3s ease';
      
      var contentEl = document.createElement('div');
      contentEl.style.position = 'relative'; contentEl.style.display = 'flex'; 
      contentEl.style.justifyContent = 'space-between'; contentEl.style.zIndex = '1';
      contentEl.style.fontSize = '14px'; contentEl.style.color = '#334155';
      
      var labelEl = document.createElement('span'); labelEl.textContent = opt.label;
      var pctEl = document.createElement('span'); pctEl.style.fontWeight = '600'; pctEl.style.display = 'none';
      
      contentEl.appendChild(labelEl); contentEl.appendChild(pctEl);
      optEl.appendChild(bgEl); optEl.appendChild(contentEl);
      
      optEl.onclick = function() {
        if (votedIndex > -1) return;
        votedIndex = idx;
        totalVotes++;
        // client side faked vote
        options[idx] = options[idx] || {};
        options[idx].votes = (options[idx].votes || 0) + 1;
        
        optionNodes.forEach(function(node, j) {
          node.el.style.cursor = 'default';
          var pct = totalVotes > 0 ? Math.round(((options[j].votes || 0) / totalVotes) * 100) : 0;
          node.bg.style.width = pct + '%';
          if (j === votedIndex) {
            node.el.style.border = '1px solid ' + (content.votedColor || '#6c47ff');
          }
          node.pct.textContent = pct + '%';
          node.pct.style.display = 'inline';
        });
      };
      
      optsContainer.appendChild(optEl);
      optionNodes.push({ el: optEl, bg: bgEl, pct: pctEl });
    });
    
    root.appendChild(optsContainer);
    return root;
  }

  function renderLabeledImage(content, id) {
    var root = document.createElement('div');
    root.style.width = '100%'; root.style.height = '100%';
    root.style.position = 'relative'; root.style.background = '#f8fafc';
    root.style.borderRadius = '8px'; root.style.overflow = 'hidden';

    if (content.imageUrl) {
      var img = document.createElement('img');
      img.src = content.imageUrl;
      img.style.width = '100%'; img.style.height = '100%'; img.style.objectFit = 'contain';
      root.appendChild(img);
    } else {
      root.style.display = 'flex'; root.style.alignItems = 'center'; root.style.justifyContent = 'center';
      root.textContent = 'No Image Provided'; root.style.color = '#94a3b8';
    }

    var markersContainer = document.createElement('div');
    markersContainer.style.position = 'absolute'; markersContainer.style.top = '0'; markersContainer.style.left = '0';
    markersContainer.style.width = '100%'; markersContainer.style.height = '100%';

    (content.markers || []).forEach(function(m) {
      var btn = document.createElement('button');
      btn.textContent = '?';
      btn.style.position = 'absolute';
      btn.style.left = Number(m.x || 50) + '%';
      btn.style.top = Number(m.y || 50) + '%';
      btn.style.transform = 'translate(-50%, -50%)';
      btn.style.width = '24px'; btn.style.height = '24px';
      btn.style.borderRadius = '50%'; btn.style.border = 'none';
      btn.style.background = m.color || '#6c47ff'; btn.style.color = '#ffffff';
      btn.style.fontSize = '12px'; btn.style.fontWeight = 'bold';
      btn.style.cursor = 'pointer'; btn.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
      btn.style.zIndex = '2';
      
      var popover = document.createElement('div');
      popover.style.position = 'absolute'; popover.style.display = 'none';
      popover.style.left = '50%'; popover.style.bottom = '100%';
      popover.style.transform = 'translate(-50%, -8px)';
      popover.style.background = '#1e293b'; popover.style.color = '#ffffff';
      popover.style.padding = '8px 12px'; popover.style.borderRadius = '6px';
      popover.style.fontSize = '13px'; popover.style.whiteSpace = 'nowrap';
      popover.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      popover.style.zIndex = '3';
      popover.textContent = m.label || 'Marker info';
      
      btn.appendChild(popover);
      btn.onmouseenter = function() { popover.style.display = 'block'; };
      btn.onmouseleave = function() { popover.style.display = 'none'; };
      
      markersContainer.appendChild(btn);
    });

    root.appendChild(markersContainer);
    return root;
  }

  function renderMatching(content, id) {
    var root = document.createElement('div');
    root.style.width = '100%'; root.style.height = '100%';
    root.style.background = '#ffffff'; root.style.borderRadius = '8px';
    root.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'; root.style.padding = '16px';
    root.style.boxSizing = 'border-box'; root.style.fontFamily = 'system-ui, sans-serif';
    root.style.display = 'flex'; root.style.overflow = 'hidden';

    var containerStyle = 'flex: 1; display: flex; flex-direction: column; gap: 8px; overflow-y: auto;';
    var leftCol = document.createElement('div'); leftCol.style.cssText = containerStyle + ' padding-right: 8px; border-right: 1px solid #e2e8f0;';
    var rightCol = document.createElement('div'); rightCol.style.cssText = containerStyle + ' padding-left: 8px;';

    var pairs = content.pairs || [];
    var selectedLeft = null;
    var matches = {}; // leftId -> rightId
    
    // In pure JS export, we'll rough out a simple click-to-match without SVG lines for brevity
    var rightItems = [...pairs].sort(() => Math.random() - 0.5);
    
    pairs.forEach(function(p, i) {
      var leftBtn = document.createElement('div');
      leftBtn.textContent = p.left || 'A';
      leftBtn.style.padding = '8px 12px'; leftBtn.style.border = '2px solid #e2e8f0'; leftBtn.style.borderRadius = '6px';
      leftBtn.style.cursor = 'pointer'; leftBtn.style.textAlign = 'center'; leftBtn.style.background = '#f8fafc';
      leftBtn.onclick = function() {
        if (matches[i]) return;
        if (selectedLeft === leftBtn) {
           selectedLeft.style.borderColor = '#e2e8f0'; selectedLeft = null;
        } else {
           if (selectedLeft) selectedLeft.style.borderColor = '#e2e8f0';
           selectedLeft = leftBtn; selectedLeft.dataset.index = i;
           selectedLeft.style.borderColor = '#3b82f6';
        }
      };
      leftCol.appendChild(leftBtn);
    });

    rightItems.forEach(function(p, idx) {
      var rightBtn = document.createElement('div');
      rightBtn.textContent = p.right || 'B';
      rightBtn.style.padding = '8px 12px'; rightBtn.style.border = '2px solid #e2e8f0'; rightBtn.style.borderRadius = '6px';
      rightBtn.style.cursor = 'pointer'; rightBtn.style.textAlign = 'center'; rightBtn.style.background = '#f8fafc';
      
      rightBtn.onclick = function() {
        if (!selectedLeft || rightBtn.dataset.matched) return;
        var leftIndex = selectedLeft.dataset.index;
        var expectedRight = pairs[leftIndex].right;
        
        if (p.right === expectedRight) {
           selectedLeft.style.borderColor = '#22c55e'; selectedLeft.style.background = '#dcfce7'; selectedLeft.style.color = '#15803d';
           rightBtn.style.borderColor = '#22c55e'; rightBtn.style.background = '#dcfce7'; rightBtn.style.color = '#15803d';
           rightBtn.dataset.matched = "true";
           matches[leftIndex] = p.right;
           selectedLeft = null;
        } else {
           selectedLeft.style.borderColor = '#ef4444'; selectedLeft.style.background = '#fef2f2'; selectedLeft.style.color = '#b91c1c';
           setTimeout(function() {
             if (matches[leftIndex]) return;
             if (selectedLeft) { selectedLeft.style.borderColor = '#3b82f6'; selectedLeft.style.background = '#f8fafc'; selectedLeft.style.color = 'inherit'; }
           }, 800);
        }
      };
      rightCol.appendChild(rightBtn);
    });

    root.appendChild(leftCol); root.appendChild(rightCol);
    return root;
  }

  function renderSorting(content, id) {
    var root = document.createElement('div');
    root.style.width = '100%'; root.style.height = '100%';
    root.style.background = '#ffffff'; root.style.borderRadius = '8px';
    root.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'; root.style.padding = '16px';
    root.style.boxSizing = 'border-box'; root.style.fontFamily = 'system-ui, sans-serif';
    root.style.display = 'flex'; root.style.flexDirection = 'column';
    
    var container = document.createElement('div');
    container.style.flex = '1'; container.style.display = 'flex'; container.style.flexDirection = 'column';
    container.style.gap = '8px'; container.style.overflowY = 'auto';

    var items = [...(content.items || [])].map((item, id) => ({ item, id })).sort(() => Math.random() - 0.5);
    
    var checkBtn = document.createElement('button');
    checkBtn.textContent = 'Check Order';
    checkBtn.style.marginTop = '12px'; checkBtn.style.padding = '8px 16px'; checkBtn.style.border = 'none';
    checkBtn.style.borderRadius = '6px'; checkBtn.style.background = '#6c47ff'; checkBtn.style.color = '#ffffff';
    checkBtn.style.cursor = 'pointer'; checkBtn.style.fontWeight = '500';

    var nodes = [];
    items.forEach(function(obj, idx) {
      var itemEl = document.createElement('div');
      itemEl.textContent = obj.item.label || 'Item';
      itemEl.dataset.originalId = obj.id;
      itemEl.style.padding = '10px 14px'; itemEl.style.background = '#f8fafc'; itemEl.style.border = '1px solid #e2e8f0';
      itemEl.style.borderRadius = '6px'; itemEl.style.cursor = 'grab'; itemEl.style.userSelect = 'none';
      
      // Basic fallback drag behavior for exported HTML
      var startY = 0; var currentY = 0; var dragIndex = -1;
      itemEl.draggable = true;
      itemEl.ondragstart = function(e) { dragIndex = Array.from(container.children).indexOf(itemEl); itemEl.style.opacity = '0.5'; };
      itemEl.ondragend = function(e) { itemEl.style.opacity = '1'; };
      itemEl.ondragover = function(e) { e.preventDefault(); };
      itemEl.ondrop = function(e) {
         e.preventDefault();
         var targetIndex = Array.from(container.children).indexOf(e.currentTarget);
         if (dragIndex === targetIndex) return;
         var draggedNode = container.children[dragIndex];
         if (targetIndex > dragIndex) container.insertBefore(draggedNode, e.currentTarget.nextSibling);
         else container.insertBefore(draggedNode, e.currentTarget);
         
         // Clear statuses
         Array.from(container.children).forEach(n => { n.style.borderColor = '#e2e8f0'; n.style.background = '#f8fafc'; n.style.color = '#0f172a'; });
      };
      
      nodes.push(itemEl);
      container.appendChild(itemEl);
    });

    checkBtn.onclick = function() {
      Array.from(container.children).forEach((node, i) => {
        var ogId = parseInt(node.dataset.originalId);
        if (ogId === i) {
          node.style.borderColor = '#22c55e'; node.style.background = '#dcfce7'; node.style.color = '#15803d';
        } else {
          node.style.borderColor = '#ef4444'; node.style.background = '#fef2f2'; node.style.color = '#b91c1c';
        }
      });
    };

    root.appendChild(container);
    root.appendChild(checkBtn);
    return root;
  }

  function renderCloze(content, id) {
    var root = document.createElement('div');
    root.style.width = '100%'; root.style.height = '100%';
    root.style.background = content.bgColor || '#ffffff'; root.style.color = content.textColor || '#1e293b';
    root.style.borderRadius = (content.borderRadius || 8) + 'px';
    root.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'; root.style.padding = '16px';
    root.style.boxSizing = 'border-box'; root.style.fontFamily = 'system-ui, sans-serif';
    root.style.overflowY = 'auto';

    if (content.title) {
       var h3 = document.createElement('h3');
       h3.style.margin = '0 0 12px 0'; h3.style.fontSize = '18px'; h3.style.color = content.titleColor || '#0f172a';
       h3.textContent = content.title;
       root.appendChild(h3);
    }

    var textContainer = document.createElement('div');
    textContainer.style.lineHeight = '1.8'; textContainer.style.marginBottom = '16px';
    textContainer.style.fontSize = (content.fontSize || 16) + 'px';

    var val = content.text || '';
    var regex = /\\[([^\\]]+)\\]/g;
    var lastIdx = 0;
    var match;
    var blanks = [];

    while ((match = regex.exec(val)) !== null) {
      if (match.index > lastIdx) {
        var span = document.createElement('span'); span.textContent = val.substring(lastIdx, match.index);
        textContainer.appendChild(span);
      }
      var input = document.createElement('input');
      input.type = 'text'; input.placeholder = '?'; input.dataset.answer = match[1];
      input.style.border = '1px solid #cbd5e1'; input.style.borderRadius = '4px'; input.style.background = '#f8fafc';
      input.style.padding = '2px 6px'; input.style.fontSize = 'inherit'; input.style.fontFamily = 'inherit';
      input.style.textAlign = 'center'; input.style.color = '#334155'; input.style.margin = '0 4px';
      input.style.width = ((match[1].length * 10) + 16) + 'px';
      blanks.push(input);
      textContainer.appendChild(input);
      lastIdx = regex.lastIndex;
    }
    if (lastIdx < val.length) {
      var spanEnd = document.createElement('span'); spanEnd.textContent = val.substring(lastIdx);
      textContainer.appendChild(spanEnd);
    }
    root.appendChild(textContainer);

    if (content.showCheckBtn !== false) {
      var btn = document.createElement('button');
      btn.textContent = 'Check Answers';
      btn.style.display = 'inline-block'; btn.style.padding = '8px 16px'; btn.style.background = '#6c47ff';
      btn.style.color = 'white'; btn.style.border = 'none'; btn.style.borderRadius = '6px';
      btn.style.fontWeight = '500'; btn.style.cursor = 'pointer';
      btn.onclick = function() {
        blanks.forEach(function(b) {
          if (b.value.trim().toLowerCase() === b.dataset.answer.toLowerCase()) {
            b.style.borderColor = '#10b981'; b.style.background = '#d1fae5';
          } else {
            b.style.borderColor = '#ef4444'; b.style.background = '#fee2e2';
          }
        });
      };
      root.appendChild(btn);
    }

    return root;
  }

  function renderScenario(content, id) {
    var root = document.createElement('div');
    root.style.width = '100%'; root.style.height = '100%';
    root.style.background = content.bgColor || '#f8fafc';
    root.style.borderRadius = (content.borderRadius || 8) + 'px';
    root.style.padding = '16px'; root.style.boxSizing = 'border-box';
    root.style.fontFamily = 'system-ui, sans-serif'; root.style.overflowY = 'auto';
    root.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'; root.style.display = 'flex';
    root.style.flexDirection = 'column'; root.style.gap = '12px';

    (content.messages || []).forEach(function(m) {
      var row = document.createElement('div');
      row.style.display = 'flex'; row.style.gap = '10px'; row.style.alignItems = 'flex-start';
      if (m.role === 'user') row.style.flexDirection = 'row-reverse';

      var avatar = document.createElement('div');
      avatar.style.width = '32px'; avatar.style.height = '32px'; avatar.style.borderRadius = '50%';
      avatar.style.color = 'white'; avatar.style.display = 'flex'; avatar.style.alignItems = 'center';
      avatar.style.justifyContent = 'center'; avatar.style.fontSize = '13px'; avatar.style.fontWeight = 'bold';
      avatar.style.flexShrink = '0';
      avatar.style.background = m.role === 'user' ? '#3b82f6' : '#10b981';
      avatar.textContent = m.role === 'user' ? 'U' : 'A';

      var bubble = document.createElement('div');
      bubble.style.padding = '10px 14px'; bubble.style.borderRadius = '12px'; bubble.style.border = '1px solid';
      bubble.style.fontSize = '14px'; bubble.style.color = '#334155'; bubble.style.lineHeight = '1.4';
      bubble.style.maxWidth = '80%';
      bubble.style.background = m.role === 'user' ? '#eff6ff' : '#ffffff';
      bubble.style.borderColor = m.role === 'user' ? '#bfdbfe' : '#e2e8f0';
      if (m.role === 'user') bubble.style.borderTopRightRadius = '2px';
      else bubble.style.borderTopLeftRadius = '2px';
      bubble.textContent = m.text;

      row.appendChild(avatar); row.appendChild(bubble);
      root.appendChild(row);
    });

    return root;
  }

  function renderProgress(content, id) {
    var root = document.createElement('div');
    root.style.width = '100%'; root.style.height = '100%';
    root.style.background = content.bgColor || '#f8fafc';
    root.style.borderRadius = (content.borderRadius || 8) + 'px';
    root.style.padding = '16px'; root.style.boxSizing = 'border-box';
    root.style.fontFamily = 'system-ui, sans-serif'; 
    root.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'; 
    root.style.display = 'flex'; root.style.flexDirection = 'column';
    root.style.justifyContent = 'center'; root.style.gap = '8px';

    var header = document.createElement('div');
    header.style.display = 'flex'; header.style.justifyContent = 'space-between'; header.style.alignItems = 'center';
    var title = document.createElement('span');
    title.style.fontWeight = '600'; title.style.fontSize = '14px'; title.style.color = content.titleColor || '#0f172a';
    title.textContent = content.title || 'Your Progress';
    var xp = document.createElement('span');
    xp.style.fontWeight = '700'; xp.style.fontSize = '14px'; xp.style.color = '#fbbf24';
    xp.textContent = (content.mockXP || 350) + ' XP';
    header.appendChild(title); header.appendChild(xp);

    var barBg = document.createElement('div');
    barBg.style.width = '100%'; barBg.style.height = '12px'; barBg.style.background = '#e2e8f0';
    barBg.style.borderRadius = '999px'; barBg.style.overflow = 'hidden';
    var barFill = document.createElement('div');
    barFill.style.height = '100%'; barFill.style.borderRadius = '999px';
    barFill.style.background = content.fillColor || '#10b981';
    barFill.style.width = (content.mockPercent || 65) + '%';
    barBg.appendChild(barFill);

    var footer = document.createElement('div');
    footer.style.fontSize = '12px'; footer.style.textAlign = 'right'; footer.style.color = content.textColor || '#64748b';
    var p = content.mockPercent || 65;
    footer.textContent = 'Level ' + (content.mockLevel || 4) + ' · ' + (100 - p) + '% to next level';

    root.appendChild(header); root.appendChild(barBg); root.appendChild(footer);
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
`}async function P(){return j("html")}async function a(){return j("iframe")}async function N(){return j("pdf")}async function j(Y="html"){var Re,ne,fe;const g=p.value;if(!g)return;k.value="processing";const F=Y==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(Y==="pdf"&&!F){k.value="error",setTimeout(()=>k.value="",3e3);return}const se=Y==="pdf"?null:new li,oe=se?se.folder("assets"):null;let we=0;async function R(re,ge="media"){if((!re||re.startsWith("data:")||re.startsWith("http://localhost")||re.startsWith("blob:"))&&re.startsWith("data:"))return re;try{const de=await(await fetch(re)).blob();if(Y==="pdf")return await V(de);let I="bin";const $=de.type;if($.includes("image/png")?I="png":$.includes("image/jpeg")?I="jpg":$.includes("image/gif")?I="gif":$.includes("image/svg")?I="svg":$.includes("image/webp")?I="webp":$.includes("video/mp4")?I="mp4":$.includes("audio/mpeg")&&(I="mp3"),I==="bin"){const ke=re.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);ke&&(I=ke[1])}we++;const O=`${ge}_${we}.${I}`;return oe.file(O,de),`assets/${O}`}catch(Ne){return console.warn("Could not fetch asset:",re,Ne),re}}const U=JSON.parse(JSON.stringify([...g.slides||[]])).sort((re,ge)=>(re.order??0)-(ge.order??0));if(H.value)for(const re of U){re.backgroundType==="image"&&re.backgroundImage&&(re.backgroundImage=await R(re.backgroundImage,"bg"));for(const ge of re.elements||[])ge.type==="image"&&((Re=ge.content)!=null&&Re.src)&&(ge.content.src=await R(ge.content.src,"img")),ge.type==="video"&&((ne=ge.content)!=null&&ne.src)&&!ge.content.src.includes("youtube")&&!ge.content.src.includes("youtu.be")&&(ge.content.src=await R(ge.content.src,"vid")),ge.type==="audio"&&((fe=ge.content)!=null&&fe.src)&&(ge.content.src=await R(ge.content.src,"aud"))}const ve=G(f.value||g.name||"presentation"),be={name:g.name,theme:g.theme||{},settings:g.settings||{},slides:U},le=JSON.stringify(be).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),Ce=me(g.theme,g.settings,Y),C=z(Y),D=`<script id="lf-data" type="application/json">${le}<\/script>`,K=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ve}</title>
${Y==="pdf"?`<style>${Ce}</style>`:'<link rel="stylesheet" href="style.css">'}
</head>
<body class="${Y==="iframe"?"is-iframe":Y==="pdf"?"is-pdf":""}">
<div class="lf-shell">
<div class="progress" id="progress"></div>
<div class="lf-grid"></div>
<div class="lf-stage-shell">
  <div class="presentation" id="presentation"></div>
</div>
<div class="dot-nav" id="dot-nav"></div>
<nav class="nav">
  <button class="nav-btn" id="prev-btn" type="button">← Prev</button>
  <span class="nav-counter" id="counter">1 / ${U.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${D}
${Y!=="pdf"?'<script src="script.js"><\/script>':`<script>${C}<\/script>`}
</body>
</html>`;if(Y==="pdf"){F.document.open(),F.document.write(K),F.document.close(),k.value="success",setTimeout(()=>k.value="",3e3);return}se.file("index.html",K),se.file("style.css",Ce),se.file("script.js",C);const xe=await se.generateAsync({type:"blob"}),De=URL.createObjectURL(xe),Me=document.createElement("a");Me.href=De,Me.download=`${ve}.zip`,Me.click(),URL.revokeObjectURL(De),k.value="success",setTimeout(()=>k.value="",3e3)}return(Y,g)=>(l(),tt(kl,{title:"Export Project",size:"md",onClose:g[13]||(g[13]=F=>E(r).showExportModal=!1)},{footer:pt(()=>[e("button",{class:"btn btn-secondary",onClick:g[12]||(g[12]=F=>E(r).showExportModal=!1)},"Close")]),default:pt(()=>{var F,se,oe,we,R;return[E(c).user?(l(),i(te,{key:1},[e("div",wb,[e("button",{class:X(["tab-btn",h.value==="json"&&"active"]),onClick:g[2]||(g[2]=U=>h.value="json")},"JSON",2),e("button",{class:X(["tab-btn",h.value==="html"&&"active"]),onClick:g[3]||(g[3]=U=>h.value="html")},"HTML",2),e("button",{class:X(["tab-btn",h.value==="iframe"&&"active"]),onClick:g[4]||(g[4]=U=>h.value="iframe")},"Iframe",2),e("button",{class:X(["tab-btn",h.value==="pdf"&&"active"]),onClick:g[5]||(g[5]=U=>h.value="pdf")},"PDF",2),e("button",{class:X(["tab-btn",h.value==="scorm"&&"active"]),onClick:g[6]||(g[6]=U=>h.value="scorm")},"SCORM",2)]),e("div",Cb,[h.value==="json"?(l(),i(te,{key:0},[g[24]||(g[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",Sb,[e("div",$b,[g[19]||(g[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":g[7]||(g[7]=U=>f.value=U),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ie,f.value]])])]),e("div",Ib,[e("div",Eb,[g[20]||(g[20]=e("span",null,"Project",-1)),e("strong",null,w((F=p.value)==null?void 0:F.name),1)]),e("div",Ab,[g[21]||(g[21]=e("span",null,"Slides",-1)),e("strong",null,w(((oe=(se=p.value)==null?void 0:se.slides)==null?void 0:oe.length)||0),1)]),e("div",Mb,[g[22]||(g[22]=e("span",null,"Elements",-1)),e("strong",null,w(((R=(we=p.value)==null?void 0:we.slides)==null?void 0:R.reduce((U,ve)=>{var be;return U+(((be=ve.elements)==null?void 0:be.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:ae},[...g[23]||(g[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Download JSON ",-1)])])],64)):h.value==="html"?(l(),i(te,{key:1},[g[28]||(g[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",Pb,[e("div",Tb,[g[25]||(g[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":g[8]||(g[8]=U=>f.value=U),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ie,f.value]])]),e("label",Bb,[pe(e("input",{type:"checkbox","onUpdate:modelValue":g[9]||(g[9]=U=>H.value=U)},null,512),[[_t,H.value]]),g[26]||(g[26]=ee(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),g[29]||(g[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:P},[...g[27]||(g[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Download HTML ",-1)])])],64)):h.value==="iframe"?(l(),i(te,{key:2},[g[33]||(g[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Nb,[e("div",zb,[g[30]||(g[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":g[10]||(g[10]=U=>f.value=U),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ie,f.value]])]),e("label",Lb,[pe(e("input",{type:"checkbox","onUpdate:modelValue":g[11]||(g[11]=U=>H.value=U)},null,512),[[_t,H.value]]),g[31]||(g[31]=ee(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...g[32]||(g[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Download Iframe Zip ",-1)])])],64)):h.value==="pdf"?(l(),i(te,{key:3},[g[35]||(g[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),g[36]||(g[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:N},[...g[34]||(g[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Generate PDF ",-1)])])],64)):h.value==="scorm"?(l(),i(te,{key:4},[g[40]||(g[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",jb,[(l(),i("svg",Db,[...g[37]||(g[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),g[38]||(g[38]=e("h4",null,"Coming Soon",-1)),g[39]||(g[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):q("",!0),Et(Dt,{name:"fade"},{default:pt(()=>[k.value==="processing"?(l(),i("div",_b,[...g[41]||(g[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),ee(" Generating package... Please wait. ",-1)])])):k.value==="success"?(l(),i("div",qb,[...g[42]||(g[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),ee(" Export successful! Check your downloads folder. ",-1)])])):q("",!0)]),_:1})])],64)):(l(),i("div",hb,[(l(),i("svg",xb,[...g[14]||(g[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),g[17]||(g[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),g[18]||(g[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",kb,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:g[0]||(g[0]=U=>E(c).loginWithGoogle())},[...g[15]||(g[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),ee(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:g[1]||(g[1]=U=>E(c).loginWithMicrosoft())},[...g[16]||(g[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),ee(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Ob=nt(Rb,[["__scopeId","data-v-e55467ab"]]),Fb={key:0,class:"editor-view"},Ub={class:"editor-topbar"},Vb={class:"topbar-left"},Wb={class:"project-name-wrap"},Gb=["value"],Hb={class:"save-label"},Yb={class:"topbar-center"},Jb={key:0,class:"slide-position"},Qb={class:"topbar-right"},Xb={class:"editor-body"},Kb={class:"authoring-rail"},Zb=["onClick","data-tooltip"],ey={key:0,class:"rail-icon"},ty={key:1,class:"rail-icon"},oy={key:2,class:"rail-icon"},ny={key:3,class:"rail-icon"},ly={key:4,class:"rail-icon"},iy={key:5,class:"rail-icon"},ay={key:6,class:"rail-icon"},sy={key:7,class:"rail-icon"},ry={key:8,class:"rail-icon"},dy={key:9,class:"rail-icon"},uy={class:"right-panel"},cy={class:"panel-tabs"},py=["onClick","data-tooltip"],vy={class:"tab-icon"},fy={class:"tab-label"},gy={class:"panel-content"},my={key:1,class:"editor-not-found"},by={__name:"EditorView",setup(A){const r=Tl(),u=Pl(),c=rt(),p=dt(),h=$l(),k=M(()=>r.params.id),f=M(()=>p.getProject(k.value)),H=M(()=>qt(f.value)),ae=M(()=>{var I;return[...((I=f.value)==null?void 0:I.slides)||[]].sort(($,O)=>$.order-O.order)}),G=L(null),V=L(!1),me=L("deck"),{aiStore:z,showAIModal:P,aiMode:a,aiTopic:N,aiContext:j,aiProjectName:Y,aiSlideCount:g,aiQuestionCount:F,aiDifficulty:se,aiQuestionType:oe,aiCreationError:we,aiSubmitting:R,aiProjectNamePlaceholder:U,aiPrimaryActionLabel:ve,openAICreationModal:be,createAIProject:le}=Nl({onRequireAuth:()=>u.push({name:"dashboard"})});let Ce=!1,C=null;ot(()=>f.value,I=>{if(I){if(Ce){Ce=!1;return}C&&clearTimeout(C),C=setTimeout(()=>{c.pushHistory(I)},600)}},{deep:!0}),ot(()=>h.isAuthReady,async I=>{var $;if(I){if(($=h.user)!=null&&$.uid&&await p.ensureRemoteProjectsLoaded(),!f.value){u.push({name:"dashboard"});return}c.setProject(k.value),ae.value.length>0&&c.setCurrentSlide(ae.value[0].id),c.pushHistory(f.value)}},{immediate:!0});const D=M(()=>{const I=f.value;return I?`Saved ${new Date(I.updatedAt).toLocaleTimeString()}`:""}),_=M(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});ii({undo:()=>{if(c.canUndo()){const I=c.undo();I&&(Ce=!0,p.updateProject(k.value,I))}},redo:()=>{if(c.canRedo()){const I=c.redo();I&&(Ce=!0,p.updateProject(k.value,I))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var $,O,ke,Ke;const I=(Ke=(ke=(O=($=f.value)==null?void 0:$.slides)==null?void 0:O.find(Ge=>Ge.id===c.currentSlideId))==null?void 0:ke.elements)==null?void 0:Ke.find(Ge=>Ge.id===c.selectedElementId);I&&c.setClipboard(I)},paste:()=>{if(c.clipboard&&c.currentSlideId){const I=c.clipboard;p.addElement(c.projectId,c.currentSlideId,I.type,{...I,x:I.x+20,y:I.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const I=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);I&&c.selectElement(I.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(I,$)=>{var ke,Ke,Ge,y;if(!c.selectedElementId)return;const O=(y=(Ge=(Ke=(ke=f.value)==null?void 0:ke.slides)==null?void 0:Ke.find(Ee=>Ee.id===c.currentSlideId))==null?void 0:Ge.elements)==null?void 0:y.find(Ee=>Ee.id===c.selectedElementId);O&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:O.x+I,y:O.y+$})},selectAll:()=>{var $,O,ke;(((ke=(O=($=f.value)==null?void 0:$.slides)==null?void 0:O.find(Ke=>Ke.id===c.currentSlideId))==null?void 0:ke.elements)||[]).forEach((Ke,Ge)=>c.selectElement(Ke.id,Ge>0))}});function K(){u.push({name:"dashboard"})}function xe(){u.push({name:"preview",params:{id:k.value},query:{from:"editor"}})}function De(I="deck"){me.value=I,V.value=!0}function Me(){V.value=!1,be(me.value)}function Re(I,$="Image"){if(!c.projectId||!c.currentSlideId||!I)return;const O=new Image;O.onload=()=>{const Ge=Math.min(420/O.width,280/O.height,1),y=Math.max(120,Math.round(O.width*Ge)),Ee=Math.max(80,Math.round(O.height*Ge)),Oe=Math.max(24,Math.round((H.value.width-y)/2)),Fe=Math.max(24,Math.round((H.value.height-Ee)/2)),Je=p.addElement(c.projectId,c.currentSlideId,"image",{x:Oe,y:Fe,width:y,height:Ee,content:{src:I,alt:$,objectFit:"cover"}});Je&&(c.selectElement(Je.id),c.setRightPanel("properties"),c.setActiveTool("select"))},O.src=I}function ne(I){const[$]=Array.from(I.target.files||[]);if(!$||!$.type.startsWith("image/"))return;const O=new FileReader;O.onload=()=>Re(String(O.result||""),$.name),O.readAsDataURL($),I.target.value=""}function fe(){var I;(I=G.value)==null||I.click()}const re=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function ge(I){if(I==="text"){c.setActiveTool("text");return}if(I==="blocks"){c.toggleSlidePanel("blocks");return}if(I==="resources"){c.setActiveTool("image");return}if(I==="interactive-elements"){c.setActiveTool("hotspot");return}if(I==="interactive-questions"){c.setActiveTool("quiz");return}if(I==="widgets"){c.setActiveTool("shape");return}if(I==="insert"){fe();return}if(I==="style"){c.setRightPanel("properties");return}if(I==="background"){c.clearSelection(),c.setRightPanel("properties");return}I==="pages"&&c.toggleSlidePanel("slides")}function Ne(I){return I==="text"?["text","heading"].includes(c.activeTool):I==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":I==="resources"?c.activeTool==="image":I==="interactive-elements"?["hotspot","button"].includes(c.activeTool):I==="interactive-questions"?c.activeTool==="quiz":I==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):I==="insert"?!1:I==="style"||I==="background"?c.rightPanelTab==="properties":I==="pages"?c.showSlidePanel:!1}function de(){jl({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return ot(()=>f.value,I=>{I&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{de()},100)},{immediate:!0}),(I,$)=>f.value?(l(),i("div",Fb,[e("input",{ref_key:"imageInputRef",ref:G,type:"file",accept:"image/*",class:"sr-only",onChange:ne},null,544),e("header",Ub,[e("div",Vb,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:K,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...$[14]||($[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),ee(" Dashboard ",-1)])]),e("div",Wb,[e("input",{value:f.value.name,class:"project-name-input",onChange:$[0]||($[0]=O=>E(p).updateProject(k.value,{name:O.target.value}))},null,40,Gb)]),e("span",Hb,w(D.value),1)]),e("div",Yb,[E(c).currentSlideId?(l(),i("span",Jb," Slide "+w(ae.value.findIndex(O=>O.id===E(c).currentSlideId)+1)+" of "+w(ae.value.length),1)):q("",!0)]),e("div",Qb,[e("button",{class:"btn btn-ghost btn-sm",onClick:de,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...$[15]||($[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),ee(" Help ",-1)])]),e("button",{class:X(["btn btn-ghost btn-sm",E(c).showAIPanel&&"active-btn"]),onClick:$[1]||($[1]=O=>{E(c).showAIPanel=!E(c).showAIPanel,E(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...$[16]||($[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),ee(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:$[2]||($[2]=O=>{E(c).showThemeManager=!E(c).showThemeManager,E(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...$[17]||($[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),ee(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:xe,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...$[18]||($[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),ee(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:$[3]||($[3]=O=>E(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...$[19]||($[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Export ",-1)])])])]),Et(Sf,{onOpenAiProject:De}),e("div",Xb,[e("aside",Kb,[(l(),i(te,null,ce(re,O=>e("button",{key:O.id,class:X(["rail-option",Ne(O.id)&&"active"]),onClick:ke=>ge(O.id),"data-tooltip":O.label,"data-tooltip-position":"right"},[O.id==="text"?(l(),i("span",ey,"T")):O.id==="blocks"?(l(),i("span",ty,[...$[20]||($[20]=[it('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):O.id==="resources"?(l(),i("span",oy,[...$[21]||($[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):O.id==="interactive-elements"?(l(),i("span",ny,[...$[22]||($[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):O.id==="interactive-questions"?(l(),i("span",ly,[...$[23]||($[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):O.id==="widgets"?(l(),i("span",iy,[...$[24]||($[24]=[it('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):O.id==="insert"?(l(),i("span",ay,[...$[25]||($[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):O.id==="style"?(l(),i("span",sy,[...$[26]||($[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):O.id==="background"?(l(),i("span",ry,[...$[27]||($[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):O.id==="pages"?(l(),i("span",dy,[...$[28]||($[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):q("",!0),ee(" "+w(O.label),1)],10,Zb)),64))]),Et(Dt,{name:"side-panel-slide"},{default:pt(()=>[E(c).showSlidePanel&&E(c).leftPanelTab==="slides"?(l(),tt(xi,{key:0})):q("",!0)]),_:1}),Et(Dt,{name:"side-panel-slide"},{default:pt(()=>[E(c).showSlidePanel&&E(c).leftPanelTab==="blocks"?(l(),tt(Yi,{key:0})):q("",!0)]),_:1}),Et(C1),e("aside",uy,[e("div",cy,[(l(),i(te,null,ce([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],O=>e("button",{key:O.id,class:X(["panel-tab",E(c).rightPanelTab===O.id&&"active"]),onClick:ke=>E(c).setRightPanel(O.id),"data-tooltip":`Open ${O.label}`,"data-tooltip-position":"bottom"},[e("span",vy,w(O.icon),1),e("span",fy,w(O.label),1)],10,py)),64))]),e("div",gy,[Et(Dt,{name:"editor-panel-switch",mode:"out-in"},{default:pt(()=>[(l(),i("div",{key:_.value,class:"panel-content-view"},[E(c).rightPanelTab==="properties"?(l(),tt(Wv,{key:0})):E(c).rightPanelTab==="layers"?(l(),tt(ga,{key:1})):E(c).rightPanelTab==="ai"?(l(),tt(Om,{key:2})):E(c).rightPanelTab==="theme"?(l(),tt(yb,{key:3})):q("",!0)]))]),_:1})])])]),E(c).showExportModal?(l(),tt(Ob,{key:0})):q("",!0),V.value?(l(),tt(zl,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:$[4]||($[4]=O=>V.value=!1),onConfirm:Me})):q("",!0),E(P)?(l(),tt(Ll,{key:2,mode:E(a),topic:E(N),context:E(j),"project-name":E(Y),"slide-count":E(g),"question-count":E(F),difficulty:E(se),"question-type":E(oe),"project-name-placeholder":E(U),"primary-action-label":E(ve),"creation-error":E(we),"is-submitting":E(R),"is-generating":E(z).isGenerating,"has-api-key":!!E(z).apiKey,onClose:$[5]||($[5]=O=>P.value=!1),onCreate:E(le),"onUpdate:mode":$[6]||($[6]=O=>a.value=O),"onUpdate:topic":$[7]||($[7]=O=>N.value=O),"onUpdate:context":$[8]||($[8]=O=>j.value=O),"onUpdate:projectName":$[9]||($[9]=O=>Y.value=O),"onUpdate:slideCount":$[10]||($[10]=O=>g.value=O),"onUpdate:questionCount":$[11]||($[11]=O=>F.value=O),"onUpdate:difficulty":$[12]||($[12]=O=>se.value=O),"onUpdate:questionType":$[13]||($[13]=O=>oe.value=O)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):q("",!0)])):(l(),i("div",my,[$[29]||($[29]=e("h2",null,"Project not found",-1)),$[30]||($[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:K},"Go to Dashboard")]))}},$y=nt(by,[["__scopeId","data-v-902e6311"]]);export{$y as default};
