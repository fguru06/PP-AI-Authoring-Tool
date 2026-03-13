import{K as Kn,P as Zn,v as l,F as i,B as e,C as k,H as Z,I as ue,E as qe,D as J,u as I,Q as ye,M as et,G as F,L as X,q as Ye,R as el,f as E,r as _,N as de,O as Ce,x as ut,S as _t,w as Qe,n as tl,i as ul,U as cl,y as yt,T as zt,V as Bt,z as pl,p as vl,J as Jn}from"./vue-core-DCl8Fgqc.js";import{u as fl,d as ml}from"./vue-ecosystem-Da9kls6U.js";import{u as it,M as ol,c as gl,a as bl,C as yl,A as hl,b as xl}from"./ConfirmActionModal-DK-TkIVL.js";import{u as at,b as wl,g as Lt,C as Rt,c as kl,n as Cl,p as $l,s as Sl,m as nl,f as ll,d as il,e as Il,h as Ot,B as Al,i as El,j as Tl,k as Xn,a as al}from"./projectStore-ZSbcJUM0.js";import{_ as Je}from"./index-BE0uY2mx.js";import{S as Ml,M as Pl,_ as Nl,P as Bl,a as zl,F as _l,A as Ll,T as jl,C as Dl}from"./SortingElement-BTDjSAHN.js";import{J as ql}from"./jszip-529iNPX7.js";function Rl(A){function s(d){var f,M,le,ie,W,ge,z,B,a,T,L,H,m,U,ne,K,xe;const c=d.ctrlKey||d.metaKey,p=d.key.toLowerCase(),h=d.target.tagName.toLowerCase(),x=h==="input"||h==="textarea"||d.target.isContentEditable;x&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!d.shiftKey?(d.preventDefault(),(f=A.undo)==null||f.call(A)):c&&(p==="y"||p==="z"&&d.shiftKey)?(d.preventDefault(),(M=A.redo)==null||M.call(A)):c&&p==="c"?(d.preventDefault(),(le=A.copy)==null||le.call(A)):c&&p==="v"?(d.preventDefault(),(ie=A.paste)==null||ie.call(A)):c&&p==="x"?(d.preventDefault(),(W=A.cut)==null||W.call(A)):c&&p==="d"?(d.preventDefault(),(ge=A.duplicate)==null||ge.call(A)):c&&p==="a"?(d.preventDefault(),(z=A.selectAll)==null||z.call(A)):p==="delete"||p==="backspace"?x||(d.preventDefault(),(B=A.delete)==null||B.call(A)):p==="escape"?(a=A.escape)==null||a.call(A):c&&p==="g"?(d.preventDefault(),(T=A.toggleGrid)==null||T.call(A)):c&&p==="="||c&&p==="+"?(d.preventDefault(),(L=A.zoomIn)==null||L.call(A)):c&&p==="-"?(d.preventDefault(),(H=A.zoomOut)==null||H.call(A)):c&&p==="0"?(d.preventDefault(),(m=A.zoomReset)==null||m.call(A)):p==="arrowleft"?(U=A.nudge)==null||U.call(A,-1,0):p==="arrowright"?(ne=A.nudge)==null||ne.call(A,1,0):p==="arrowup"?(K=A.nudge)==null||K.call(A,0,-1):p==="arrowdown"&&((xe=A.nudge)==null||xe.call(A,0,1)))}Kn(()=>window.addEventListener("keydown",s)),Zn(()=>window.removeEventListener("keydown",s))}const Ol={class:"slide-panel"},Fl={class:"slide-panel-header"},Ul={class:"slide-count"},Vl={class:"slides-list"},Gl=["onClick","onContextmenu","onDragstart","onDrop"],Wl={class:"slide-number"},Hl=["viewBox"],Yl=["x","y","width","height","fill"],Ql=["d","stroke"],Jl=["d","fill"],Xl={class:"slide-footer"},Kl={class:"slide-title"},Zl=["onClick"],ei={__name:"SlidePanel",setup(A){const s=it(),d=at(),c=E(()=>d.getProject(s.projectId)),p=E(()=>Lt(c.value)),h=E(()=>{var R,G;return((G=(R=c.value)==null?void 0:R.slides)==null?void 0:G.slice().sort((ce,be)=>ce.order-be.order))||[]}),x=_({show:!1,x:0,y:0,slideId:null});function f(R){s.setCurrentSlide(R)}function M(){const R=h.value.findIndex(ce=>ce.id===s.currentSlideId),G=d.addSlide(s.projectId,R);G&&s.setCurrentSlide(G.id)}function le(R){var be,oe;const G=h.value.findIndex(we=>we.id===R);d.deleteSlide(s.projectId,R);const ce=((be=c.value)==null?void 0:be.slides)||[];if(ce.length>0){const we=ce.slice().sort((j,D)=>j.order-D.order),C=Math.min(G,we.length-1);s.setCurrentSlide((oe=we[C])==null?void 0:oe.id)}}function ie(R,G){R.preventDefault(),x.value={show:!0,x:R.clientX,y:R.clientY,slideId:G},setTimeout(()=>window.addEventListener("click",W,{once:!0}),0)}function W(){x.value.show=!1}function ge(){const R=d.duplicateSlide(s.projectId,x.value.slideId);R&&s.setCurrentSlide(R.id),W()}function z(){le(x.value.slideId),W()}function B(R,G){R.stopPropagation(),le(G)}function a(){const R=h.value.findIndex(G=>G.id===x.value.slideId);R>0&&d.reorderSlides(s.projectId,R,R-1),W()}function T(){const R=h.value.findIndex(G=>G.id===x.value.slideId);R<h.value.length-1&&d.reorderSlides(s.projectId,R,R+1),W()}let L=-1;function H(R,G){L=G,R.dataTransfer.effectAllowed="move"}function m(R,G){R.preventDefault(),L!==-1&&L!==G&&d.reorderSlides(s.projectId,L,G),L=-1}function U(R){return R.backgroundType==="gradient"&&R.backgroundGradient?{background:R.backgroundGradient}:R.backgroundType==="image"&&R.backgroundImage?{backgroundImage:`url(${R.backgroundImage})`,backgroundSize:"cover"}:{background:R.background||"#fff"}}function ne(R){return{left:R.x/p.value.width*100+"%",top:R.y/p.value.height*100+"%",width:R.width/p.value.width*100+"%",height:R.height/p.value.height*100+"%"}}function K(R){var G,ce;return{background:R.type==="shape"?(G=R.content)==null?void 0:G.fillColor:R.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:R.type==="shape"&&((ce=R.content)==null?void 0:ce.shapeType)==="circle"?"50%":void 0}}function xe(R){var G;return wl(R.content||{},R.width||420,R.height||280,((G=c.value)==null?void 0:G.theme)||{})}return(R,G)=>(l(),i("div",Ol,[e("div",Fl,[G[2]||(G[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",Ul,k(h.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:M,"data-tooltip":"Add slide","aria-label":"Add slide"},[...G[1]||(G[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",Vl,[(l(!0),i(Z,null,ue(h.value,(ce,be)=>(l(),i("div",{key:ce.id,class:J(["slide-thumb-item",I(s).currentSlideId===ce.id&&"active"]),draggable:"true",onClick:oe=>f(ce.id),onContextmenu:oe=>ie(oe,ce.id),onDragstart:oe=>H(oe,be),onDragover:G[0]||(G[0]=qe(()=>{},["prevent"])),onDrop:oe=>m(oe,be)},[e("div",Wl,k(be+1),1),e("div",{class:"slide-thumb",style:ye(U(ce))},[(l(!0),i(Z,null,ue(ce.elements.slice(0,6),oe=>{var we;return l(),i("div",{key:oe.id,class:"mini-element-frame",style:ye(ne(oe))},[oe.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${oe.width||420} ${oe.height||280}`,preserveAspectRatio:"none"},[xe(oe).type==="bar"?(l(!0),i(Z,{key:0},ue(xe(oe).cartesian.bars,C=>(l(),i("rect",{key:`mini-bar-${C.id}`,x:C.x,y:C.y,width:C.width,height:C.height,fill:C.color,rx:"6"},null,8,Yl))),128)):xe(oe).type==="line"?(l(),i("path",{key:1,d:xe(oe).cartesian.linePath,stroke:((we=xe(oe).cartesian.points[0])==null?void 0:we.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,Ql)):(l(!0),i(Z,{key:2},ue(xe(oe).circle.slices,C=>(l(),i("path",{key:`mini-slice-${C.id}`,d:C.path,fill:C.color},null,8,Jl))),128))],8,Hl)):(l(),i("div",{key:1,class:"mini-element",style:ye(K(oe))},null,4))],4)}),128))],4),e("div",Xl,[e("div",Kl,k(ce.title||`Slide ${be+1}`),1),h.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:oe=>B(oe,ce.id)},[...G[3]||(G[3]=[et('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,Zl)):F("",!0)])],42,Gl))),128))]),e("button",{class:"add-slide-bottom",onClick:M},[...G[4]||(G[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),X(" Add Slide ",-1)])]),(l(),Ye(el,{to:"body"},[x.value.show?(l(),i("div",{key:0,class:"context-menu",style:ye({left:x.value.x+"px",top:x.value.y+"px"})},[e("button",{class:"ctx-item",onClick:ge},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:T},"Move Down"),G[5]||(G[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:z},"Delete Slide")],4)):F("",!0)]))]))}},ti=Je(ei,[["__scopeId","data-v-30eea542"]]),oi={class:"blocks-panel"},ni={class:"blocks-panel-header"},li={class:"blocks-toolbar"},ii={class:"blocks-categories"},ai=["onClick"],si={class:"blocks-panel-body"},ri={class:"blocks-save-card"},di=["disabled"],ui={class:"blocks-list"},ci=["onDragstart"],pi={class:"block-thumb-stage"},vi={class:"block-card-body"},fi={class:"block-card-head"},mi={class:"block-name"},gi={class:"block-meta"},bi={key:0},yi={key:1},hi=["onClick"],xi={class:"block-description"},wi={key:0,class:"block-binding-note"},ki={class:"block-tags"},Ci=["onClick"],$i={class:"binding-modal-body"},Si={class:"binding-modal-intro"},Ii=["for"],Ai=["id","onUpdate:modelValue"],Ei={__name:"BlocksPanel",setup(A){const s=it(),d=at(),c=_(""),p=_("all"),h=_(""),x=_("Custom"),f=_(!1),M=_(null),le=_({}),ie=E(()=>d.getProject(s.projectId)),W=E(()=>{var C,j;return(j=(C=ie.value)==null?void 0:C.slides)==null?void 0:j.find(D=>D.id===s.currentSlideId)}),ge=E(()=>d.getContentBlocks(s.projectId)),z=E(()=>{const C=new Set(["all"]);return ge.value.forEach(j=>C.add(j.category||"Custom")),Array.from(C)}),B=E(()=>{var j;const C=new Set(s.selectedElementIds);return(((j=W.value)==null?void 0:j.elements)||[]).filter(D=>C.has(D.id))}),a=E(()=>{var C;return Array.isArray((C=M.value)==null?void 0:C.bindings)?M.value.bindings:[]}),T=E(()=>{const C=c.value.trim().toLowerCase();return ge.value.filter(j=>p.value==="all"||(j.category||"Custom")===p.value?C?[j.name,j.description,j.category,...j.tags||[]].join(" ").toLowerCase().includes(C):!0:!1)});function L(C){const j=Array.isArray(C==null?void 0:C.elements)?C.elements:[];if(!j.length)return{minX:0,minY:0,width:1,height:1};const D=Math.min(...j.map(Se=>Number(Se.x||0))),Y=Math.min(...j.map(Se=>Number(Se.y||0))),he=Math.max(...j.map(Se=>Number(Se.x||0)+Number(Se.width||0))),ze=Math.max(...j.map(Se=>Number(Se.y||0)+Number(Se.height||0)));return{minX:D,minY:Y,width:Math.max(1,he-D),height:Math.max(1,ze-Y)}}function H(C,j){const D=L(C);return{left:`${(Number(j.x||0)-D.minX)/D.width*100}%`,top:`${(Number(j.y||0)-D.minY)/D.height*100}%`,width:`${Number(j.width||0)/D.width*100}%`,height:`${Number(j.height||0)/D.height*100}%`}}function m(C){var j,D,Y,he,ze,Se,Le;return C.type==="shape"?{background:((j=C.content)==null?void 0:j.fillColor)||"#cbd5e1",borderRadius:((D=C.content)==null?void 0:D.shapeType)==="circle"?"50%":`${Number(((Y=C.content)==null?void 0:Y.borderRadius)||10)}px`,border:`${Math.max(0,Number(((he=C.content)==null?void 0:he.borderWidth)||0))}px solid ${((ze=C.content)==null?void 0:ze.borderColor)||"transparent"}`}:C.type==="button"?{background:((Se=C.content)==null?void 0:Se.bgColor)||"#6c47ff",borderRadius:`${Number(((Le=C.content)==null?void 0:Le.borderRadius)||10)}px`}:C.type==="image"||C.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:C.type==="text"||C.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function U(C,j){const D=C.type==="heading"?2:3,Y=Math.max(18,100/(D+1.25));return{width:`${j===D-1?72:100}%`,height:`${C.type==="heading"?Y:Y-2}%`}}function ne(C){C.length&&(s.setSelection(C.map(j=>j.id)),s.focusPropertiesSection("content"),s.setActiveTool("select"))}function K(C){return Array.isArray(C==null?void 0:C.bindings)&&C.bindings.length>0}function xe(){f.value=!1,M.value=null,le.value={}}function R(C,j=null){const D=d.insertContentBlock(s.projectId,s.currentSlideId,C.id,j?{bindingValues:j}:{});ne(D)}function G(C){if(!K(C)){R(C);return}M.value=C,le.value=Object.fromEntries(C.bindings.map(j=>[j.id,j.defaultValue||""])),f.value=!0}function ce(){M.value&&(R(M.value,{...le.value}),xe())}function be(){var D,Y;const C=h.value.trim();if(!C||!B.value.length)return;d.saveSelectionAsContentBlock(s.projectId,s.currentSlideId,B.value.map(he=>he.id),{name:C,category:x.value.trim()||"Custom",accent:((Y=(D=ie.value)==null?void 0:D.theme)==null?void 0:Y.primaryColor)||"#6c47ff"})&&(h.value="",p.value="Custom")}function oe(C){d.deleteContentBlock(s.projectId,C)}function we(C,j){C.dataTransfer&&(C.dataTransfer.effectAllowed="copy",C.dataTransfer.setData(Rt,JSON.stringify({id:j.id})),C.dataTransfer.setData("text/plain",j.name))}return(C,j)=>(l(),i("div",oi,[e("div",ni,[j[5]||(j[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:j[0]||(j[0]=D=>I(s).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...j[4]||(j[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",li,[de(e("input",{"onUpdate:modelValue":j[1]||(j[1]=D=>c.value=D),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[Ce,c.value]]),e("div",ii,[(l(!0),i(Z,null,ue(z.value,D=>(l(),i("button",{key:D,type:"button",class:J(["blocks-category-chip",p.value===D&&"active"]),onClick:Y=>p.value=D},k(D==="all"?"All":D),11,ai))),128))])]),e("div",si,[e("div",ri,[j[6]||(j[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),j[7]||(j[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),de(e("input",{"onUpdate:modelValue":j[2]||(j[2]=D=>h.value=D),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[Ce,h.value]]),de(e("input",{"onUpdate:modelValue":j[3]||(j[3]=D=>x.value=D),class:"input",placeholder:"Category"},null,512),[[Ce,x.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!B.value.length||!h.value.trim(),onClick:be}," Save "+k(B.value.length?`${B.value.length} item${B.value.length>1?"s":""}`:"selection")+" as block ",9,di)]),e("div",ui,[(l(!0),i(Z,null,ue(T.value,D=>(l(),i("div",{key:D.id,class:"block-card",draggable:"true",onDragstart:Y=>we(Y,D)},[e("div",{class:"block-thumb",style:ye({"--block-accent":D.accent||"#6c47ff"})},[e("div",pi,[(l(!0),i(Z,null,ue(D.elements,Y=>(l(),i("div",{key:`${D.id}-${Y.type}-${Y.x}-${Y.y}`,class:"block-thumb-frame",style:ye(H(D,Y))},[["text","heading"].includes(Y.type)?(l(),i("div",{key:0,class:J(["thumb-text",Y.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(Z,null,ue(Y.type==="heading"?2:3,he=>(l(),i("span",{key:`${D.id}-${Y.type}-${Y.x}-${Y.y}-${he}`,class:"thumb-text-line",style:ye(U(Y,he-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:ye(m(Y))},null,4))],4))),128))])],4),e("div",vi,[e("div",fi,[e("div",null,[e("div",mi,k(D.name),1),e("div",gi,[X(k(D.category),1),D.scope==="custom"?(l(),i("span",bi," · Custom")):F("",!0),K(D)?(l(),i("span",yi," · "+k(D.bindings.length)+" field"+k(D.bindings.length>1?"s":""),1)):F("",!0)])]),D.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:Y=>oe(D.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...j[8]||(j[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,hi)):F("",!0)]),e("p",xi,k(D.description||"Reusable layout block"),1),K(D)?(l(),i("div",wi,"Editable placeholders included")):F("",!0),e("div",ki,[(l(!0),i(Z,null,ue(D.tags||[],Y=>(l(),i("span",{key:`${D.id}-${Y}`,class:"block-tag"},"#"+k(Y),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:Y=>G(D)},k(K(D)?"Insert with Fields":"Insert Block"),9,Ci)])],40,ci))),128))])]),f.value?(l(),Ye(ol,{key:0,title:"Fill Template Fields",size:"md",onClose:xe},{footer:ut(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:xe},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:ce},"Insert Block")]),default:ut(()=>{var D;return[e("div",$i,[e("p",Si,[j[9]||(j[9]=X(" Customize the placeholder text before inserting ",-1)),e("strong",null,k((D=M.value)==null?void 0:D.name),1),j[10]||(j[10]=X(". ",-1))]),(l(!0),i(Z,null,ue(a.value,Y=>(l(),i("div",{key:Y.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${Y.id}`},k(Y.label),9,Ii),de(e("textarea",{id:`binding-${Y.id}`,"onUpdate:modelValue":he=>le.value[Y.id]=he,class:"textarea binding-input"},null,8,Ai),[[Ce,le.value[Y.id]]])]))),128))])]}),_:1})):F("",!0)]))}},Ti=Je(Ei,[["__scopeId","data-v-aec67d0c"]]),Mi={class:"layer-panel"},Pi={class:"layer-header panel-section"},Ni={class:"panel-title",style:{"margin-bottom":"0"}},Bi={class:"layer-count"},zi={key:0,class:"layers-empty"},_i={key:1,class:"layers-list"},Li=["onClick"],ji={class:"layer-type-icon"},Di={class:"layer-name"},qi={class:"layer-actions"},Ri=["onClick","data-tooltip"],Oi={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Fi={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ui=["onClick","data-tooltip"],Vi={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Gi={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Wi=["onClick"],Hi=["onClick"],Yi=["onClick"],Qi={__name:"LayerPanel",setup(A){const s=it(),d=at(),c=E(()=>d.getProject(s.projectId)),p=E(()=>{var B,a;return(a=(B=c.value)==null?void 0:B.slides)==null?void 0:a.find(T=>T.id===s.currentSlideId)}),h=E(()=>{var B;return[...((B=p.value)==null?void 0:B.elements)||[]].sort((a,T)=>(T.zIndex||0)-(a.zIndex||0))});function x(B){s.selectElement(B)}function f(B){d.updateElement(s.projectId,s.currentSlideId,B.id,{visible:!B.visible})}function M(B){d.updateElement(s.projectId,s.currentSlideId,B.id,{locked:!B.locked})}function le(B){d.reorderElement(s.projectId,s.currentSlideId,B,"up")}function ie(B){d.reorderElement(s.projectId,s.currentSlideId,B,"down")}function W(B){d.deleteElement(s.projectId,s.currentSlideId,B),s.selectedElementId===B&&s.clearSelection()}function ge(B){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[B]||"◆"}function z(B){var a,T,L;return(a=B.content)!=null&&a.text?B.content.text.slice(0,24):(T=B.content)!=null&&T.label?B.content.label:(L=B.content)!=null&&L.question?B.content.question.slice(0,24):B.type.charAt(0).toUpperCase()+B.type.slice(1)}return(B,a)=>(l(),i("div",Mi,[e("div",Pi,[e("div",Ni,[a[0]||(a[0]=X(" Layers ",-1)),e("span",Bi,k(h.value.length),1)])]),h.value.length===0?(l(),i("div",zi,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",_i,[(l(!0),i(Z,null,ue(h.value,T=>(l(),i("div",{key:T.id,class:J(["layer-item",I(s).selectedElementIds.includes(T.id)&&"selected",T.locked&&"locked",!T.visible&&"hidden"]),onClick:L=>x(T.id)},[e("span",ji,k(ge(T.type)),1),e("span",Di,k(z(T)),1),e("div",qi,[e("button",{class:J(["layer-action-btn",{active:T.visible}]),onClick:qe(L=>f(T),["stop"]),"data-tooltip":T.visible?"Hide":"Show"},[T.visible?(l(),i("svg",Oi,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",Fi,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,Ri),e("button",{class:J(["layer-action-btn",{active:T.locked}]),onClick:qe(L=>M(T),["stop"]),"data-tooltip":T.locked?"Unlock":"Lock"},[T.locked?(l(),i("svg",Vi,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",Gi,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,Ui),e("button",{class:"layer-action-btn",onClick:qe(L=>le(T.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,Wi),e("button",{class:"layer-action-btn",onClick:qe(L=>ie(T.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Hi),e("button",{class:"layer-action-btn danger",onClick:qe(L=>W(T.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Yi)])],10,Li))),128))]))]))}},Ji=Je(Qi,[["__scopeId","data-v-7407acd8"]]),Xi={class:"panel-section"},Ki={class:"preset-toolbar"},Zi=["value"],ea=["value"],ta=["value"],oa={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},na=["onClick"],la={class:"preset-meta-chip muted"},ia={key:1,class:"import-review"},aa={class:"motion-scrubber-header"},sa={class:"preset-toolbar compact"},ra=["value"],da=["value"],ua={class:"import-list"},ca=["onUpdate:modelValue"],pa={class:"import-item-title"},va={class:"preset-meta-chip"},fa={key:0,class:"preset-meta-chip muted"},ma={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(A,{emit:s}){const d=s;return(c,p)=>(l(),i("div",Xi,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",Ki,[e("input",{value:A.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=h=>d("update:searchQuery",h.target.value))},null,40,Zi),e("select",{value:A.categoryFilter,class:"select",onChange:p[1]||(p[1]=h=>d("update:categoryFilter",h.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(Z,null,ue(A.availableCategories,h=>(l(),i("option",{key:`library-${h}`,value:h},k(h),9,ta))),128))],40,ea),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=h=>d("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=h=>d("export-presets"))},"Export")]),A.recentPresets.length?(l(),i("div",oa,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(Z,null,ue(A.recentPresets,h=>(l(),i("div",{class:"preset-item",key:`recent-${h.id}`},[e("button",{type:"button",class:"preset-chip",onClick:x=>d("apply-preset",h)},k(h.name),9,na),e("span",la,"Used "+k(h.usageCount)+"x",1)]))),128))])):F("",!0),A.pendingImportedPresets.length?(l(),i("div",ia,[e("div",aa,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=h=>d("clear-imports"))},"Discard")]),e("div",sa,[e("select",{value:A.importScopeFilter,class:"select",onChange:p[5]||(p[5]=h=>d("update:importScopeFilter",h.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,ra),e("select",{value:A.importConflictMode,class:"select",onChange:p[6]||(p[6]=h=>d("update:importConflictMode",h.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,da),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=h=>d("apply-imports"))},"Merge Selected")]),e("div",ua,[(l(!0),i(Z,null,ue(A.filteredPendingImports,h=>(l(),i("label",{key:`pending-${h.id}`,class:"import-item"},[de(e("input",{"onUpdate:modelValue":x=>h.selected=x,type:"checkbox"},null,8,ca),[[_t,h.selected]]),e("span",pa,k(h.name),1),e("span",va,k(h.scope),1),h.category?(l(),i("span",fa,k(h.category),1)):F("",!0)]))),128))])])):F("",!0)]))}},ga=Je(ma,[["__scopeId","data-v-61f99273"]]),ba={key:1,class:"panel-section"},ya={class:"field-hint"},ha={class:"motion-scrubber-shell"},xa={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},wa=["onClick"],ka={class:"motion-preview"},Ca={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},$a={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Sa={class:"motion-card-label"},Ia={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Aa={class:"form-group"},Ea={class:"form-group"},Ta={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ma={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Pa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Na={key:0,class:"preset-list"},Ba=["onDragstart","onDragenter","onDrop"],za=["onClick"],_a={key:0,class:"preset-meta-chip"},La=["onClick"],ja=["onClick"],Da=["onClick"],qa={key:1,class:"preset-row preset-edit-row"},Ra=["onClick"],Oa={key:1,class:"field-hint"},Fa={key:2,class:"panel-section"},Ua={class:"slide-settings-tabs"},Va={key:0,class:"slide-settings-pane"},Ga={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wa={class:"form-group"},Ha={class:"bg-type-tabs"},Ya=["onClick"],Qa={key:0,class:"color-row"},Ja=["value"],Xa=["value"],Ka={class:"slide-settings-subsection"},Za={class:"canvas-size-grid"},es=["onClick"],ts={class:"canvas-size-icon-shell"},os={class:"canvas-size-name"},ns={class:"canvas-size-ratio"},ls={class:"canvas-custom-card"},is={class:"canvas-custom-header"},as={class:"field-hint"},ss={class:"canvas-custom-inputs"},rs={class:"form-group"},ds={class:"canvas-size-input-wrap"},us=["value"],cs={class:"form-group"},ps={class:"canvas-size-input-wrap"},vs=["value"],fs={class:"check-row canvas-size-lock"},ms={class:"slide-settings-subsection"},gs={key:1,class:"slide-settings-pane"},bs=["value"],ys={class:"form-group",style:{"margin-top":"var(--space-3)"}},hs=["value"],xs={class:"check-row"},ws=["checked"],ks={key:2,class:"slide-settings-pane"},Cs={class:"check-row"},$s=["checked"],Ss={class:"check-row"},Is=["checked"],As={class:"check-row"},Es=["checked"],Ts={class:"check-row"},Ms=["checked"],Ps={class:"check-row"},Ns=["checked"],Bs={class:"panel-title"},zs={class:"element-type-badge"},_s={class:"geo-grid"},Ls={class:"form-group"},js=["value"],Ds={class:"form-group"},qs=["value"],Rs={class:"form-group"},Os=["value"],Fs={class:"form-group"},Us=["value"],Vs={class:"form-group"},Gs=["value"],Ws={class:"form-group"},Hs=["value"],Ys={class:"motion-scrubber-shell"},Qs={class:"motion-card-grid"},Js=["onClick"],Xs={class:"motion-preview"},Ks={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Zs={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},er={class:"motion-card-label"},tr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},or={class:"form-group"},nr=["value"],lr={class:"form-group"},ir=["value"],ar={class:"preset-row",style:{"margin-top":"var(--space-3)"}},sr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},rr={key:0,class:"preset-list"},dr=["onDragstart","onDragenter","onDrop"],ur=["onClick"],cr={key:0,class:"preset-meta-chip"},pr=["onClick"],vr=["onClick"],fr=["onClick"],mr={key:1,class:"preset-row preset-edit-row"},gr=["onClick"],br={key:1,class:"field-hint"},yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hr=["value"],xr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},wr={class:"form-group"},kr=["value"],Cr={class:"form-group"},$r=["value"],Sr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ir=["value"],Ar=["value"],Er={class:"form-group",style:{"margin-top":"var(--space-3)"}},Tr={class:"align-btns"},Mr=["onClick"],Pr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Nr={class:"style-btns"},Br={class:"form-group",style:{"margin-top":"var(--space-3)"}},zr={class:"color-row"},_r=["value"],Lr=["value"],jr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Dr=["value"],qr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Rr={class:"form-group"},Or=["value"],Fr={class:"form-group"},Ur=["value"],Vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gr=["value"],Wr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hr=["value"],Yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qr=["value"],Jr={class:"form-group"},Xr=["value"],Kr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Zr={class:"form-group"},ed=["value"],td={class:"form-group"},od=["value"],nd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ld=["value"],id={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ad={class:"color-row"},sd=["value"],rd=["value"],dd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ud={class:"color-row"},cd=["value"],pd=["value"],vd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fd=["value"],md={class:"form-group"},gd=["value"],bd={class:"form-group",style:{"margin-top":"var(--space-3)"}},yd=["value"],hd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xd=["value"],wd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},kd=["value"],Cd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$d=["value"],Sd={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Id={class:"chart-data-actions"},Ad={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ed=["value","placeholder"],Td={class:"chart-palette-preview"},Md={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Pd={class:"form-group"},Nd=["value"],Bd={class:"form-group"},zd=["value"],_d={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Ld={class:"form-group"},jd=["value"],Dd={class:"form-group"},qd=["value"],Rd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Od={class:"form-group"},Fd=["value"],Ud={key:0,class:"form-group"},Vd=["value"],Gd={key:1,class:"form-group"},Wd=["value"],Hd={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Yd={class:"form-group"},Qd=["value"],Jd={class:"check-row",style:{"margin-top":"20px"}},Xd=["checked"],Kd={class:"check-row"},Zd=["checked"],eu={key:1,class:"check-row"},tu=["checked"],ou={class:"check-row"},nu=["checked"],lu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},iu=["value"],au={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},su=["value"],ru={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},du=["value"],uu={key:0,class:"form-group"},cu=["value"],pu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},vu={class:"form-group"},fu=["value"],mu={class:"form-group"},gu=["value"],bu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},yu={class:"form-group"},hu=["value"],xu={class:"form-group"},wu=["value"],ku={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Cu={class:"form-group"},$u=["value"],Su={class:"form-group"},Iu=["value"],Au={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Eu={class:"form-group"},Tu=["value"],Mu=["value"],Pu={class:"form-group"},Nu=["value"],Bu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zu=["value"],_u={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Lu={class:"color-row"},ju=["value"],Du=["value"],qu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Ru={class:"form-group"},Ou=["value"],Fu={class:"form-group"},Uu=["value"],Vu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gu=["value"],Wu={class:"form-group"},Hu=["value"],Yu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Qu={class:"form-group"},Ju=["value"],Xu={class:"form-group"},Ku=["value"],Zu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ec=["value"],tc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},oc=["value"],nc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},lc=["value"],ic={class:"check-row"},ac=["checked"],sc={class:"check-row"},rc=["checked"],dc={class:"check-row"},uc=["checked"],cc={class:"check-row"},pc=["checked"],vc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fc=["value"],mc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gc=["value"],bc={class:"check-row"},yc=["checked"],hc={class:"check-row"},xc=["checked"],wc={class:"check-row"},kc=["checked"],Cc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},$c={class:"form-group"},Sc=["value"],Ic={class:"form-group"},Ac=["value"],Ec={class:"form-group",style:{"margin-top":"var(--space-3)"}},Tc=["value"],Mc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pc=["value"],Nc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Bc=["value"],zc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_c=["value"],Lc={class:"form-group"},jc=["value"],Dc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},qc={class:"form-group"},Rc=["value"],Oc={class:"form-group"},Fc=["value"],Uc={class:"form-group",style:{"margin-top":"var(--space-3)"}},Vc=["value"],Gc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wc=["value"],Hc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Yc={class:"form-group"},Qc=["value"],Jc={class:"form-group"},Xc=["value"],Kc={class:"form-group"},Zc=["value"],ep={class:"form-group"},tp=["value"],op={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},np=["value"],lp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ip={class:"form-group"},ap=["value"],sp={class:"form-group"},rp=["value"],dp={class:"form-group"},up=["value"],cp={class:"form-group"},pp=["value"],vp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fp=["value"],mp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gp=["value"],bp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},yp=["value"],hp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xp=["value"],wp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},kp=["value"],Cp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},$p={class:"form-group"},Sp=["value"],Ip={class:"form-group"},Ap=["value"],Ep={class:"form-group"},Tp=["value"],Mp={class:"form-group"},Pp=["value"],Np={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Bp=["value"],zp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_p={class:"form-group"},Lp=["value"],jp={class:"form-group"},Dp=["value"],qp={class:"form-group"},Rp=["value"],Op={class:"form-group"},Fp=["value"],Up={class:"panel-section"},Vp={class:"actions-list"},Gp={__name:"PropertiesPanel",setup(A){const s=it(),d=at(),c=E(()=>d.getProject(s.projectId)),p=E(()=>{var u,t;return(t=(u=c.value)==null?void 0:u.slides)==null?void 0:t.find(O=>O.id===s.currentSlideId)}),h=E(()=>{var u;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((u=c.value)==null?void 0:u.settings)||{}}}),x=E(()=>Lt(h.value)),f=E(()=>nl(h.value)),M=E(()=>ll(x.value.width,x.value.height)),le=_(!0),ie=_("canvas"),W=E(()=>Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]),ge=E(()=>W.value.filter(u=>u.scope!=="group")),z=E(()=>W.value.filter(u=>u.scope==="group")),B=E(()=>{var t;const u=new Set(s.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(O=>u.has(O.id))}),a=E(()=>{var u,t;return s.selectedElementId?(t=(u=p.value)==null?void 0:u.elements)==null?void 0:t.find(O=>O.id===s.selectedElementId):null}),T=E(()=>s.multiSelection||!!a.value),L=E(()=>s.multiSelection?"group":"single"),H=E(()=>{var t,O;const u=(O=(t=a.value)==null?void 0:t.animations)==null?void 0:O[0];return{type:(u==null?void 0:u.type)||"auto",delay:Number((u==null?void 0:u.delay)||0),duration:Number((u==null?void 0:u.duration)||.64)}}),m=E(()=>{var Be,We;const u=B.value.map(Oe=>{var bt;return((bt=Oe.animations)==null?void 0:bt[0])||null}),t=((Be=u[0])==null?void 0:Be.type)||"auto",O=Number(((We=u[0])==null?void 0:We.duration)||.64),pe=u.every(Oe=>((Oe==null?void 0:Oe.type)||"auto")===t),Ee=u.every(Oe=>Number((Oe==null?void 0:Oe.duration)||.64)===O);return{type:pe?t:"mixed",duration:Ee?O:.64}}),U=_(0),ne=_(0),K=_(""),xe=_(""),R=_(""),G=_(""),ce=_(""),be=_(""),oe=_(""),we=_(""),C=_(""),j=_(""),D=_(""),Y=_(""),he=_(""),ze=_("all"),Se=_(null),Le=_(null),ee=_([]),ve=_("all"),ae=_("replace"),fe=_(""),Te=_(null),me=_("");let S=null;const $=_({});Qe(a,u=>{u?$.value=JSON.parse(JSON.stringify(u)):$.value={},(u==null?void 0:u.type)==="chart"&&(fe.value="")},{immediate:!0,deep:!0}),Qe(()=>{var u;return[s.propertiesPanelSection,(u=a.value)==null?void 0:u.id,s.rightPanelTab]},async([u,t,O])=>{var Ee;if(!u||!t||O!=="properties")return;await tl();const pe=(Ee=Te.value)==null?void 0:Ee.querySelector(`[data-props-anchor="${u}"]`);pe&&(pe.scrollIntoView({behavior:"smooth",block:"start"}),me.value=u,S&&window.clearTimeout(S),S=window.setTimeout(()=>{me.value===u&&(me.value="")},1400))},{immediate:!0});function q(u){a.value&&d.updateElement(s.projectId,s.currentSlideId,a.value.id,u)}function g(u){if(!a.value)return;const t={...a.value.content,...u};q({content:t})}function Ge(u,t){try{return JSON.parse(u)}catch{return t}}function De(u,t){const O=parseFloat(t);isNaN(O)||q({[u]:O})}const _e=_({});Qe(p,u=>{u&&(_e.value={...u})},{immediate:!0});function ke(u){p.value&&d.updateSlide(s.projectId,p.value.id,u)}function Me(u){if(!c.value)return;const t={...h.value,...u};d.updateProject(s.projectId,{settings:{...t,...Cl(t)}})}function st(u){Me({slideWidth:u.width,slideHeight:u.height})}function ot(u,t){const O=Math.round(Number(t)||0);if(!O)return;const pe={[`slide${u==="width"?"Width":"Height"}`]:O};if(le.value){const Ee=x.value.width,Be=x.value.height;u==="width"?pe.slideHeight=Math.round(O*(Be/Ee)):pe.slideWidth=Math.round(O*(Ee/Be))}Me(pe)}const nt=E(()=>{var u;return il(((u=c.value)==null?void 0:u.theme)||{})}),kt=E(()=>{var t,O;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const u=((O=a.value.content)==null?void 0:O.paletteText)||nt.value.paletteText;return Il(u)});function rt(u){const t=$l(u,{fallbackToDefault:!1});return t.length?Sl(t):""}function je(u){var O;if(((O=a.value)==null?void 0:O.type)!=="chart")return;const t=rt(u);t&&(g({dataText:t}),fe.value="")}async function ct(u){var pe;const t=u.target,O=(pe=t==null?void 0:t.files)==null?void 0:pe[0];if(O)try{const Ee=await O.text();je(Ee)}finally{t&&(t.value="")}}function Ke(){var u;(u=Le.value)==null||u.click()}function Ct(){var t,O;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const u=rt(((O=a.value.content)==null?void 0:O.dataText)||"");u&&g({dataText:u})}function $t(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&g({...nt.value})}function St(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&g({paletteText:nt.value.paletteText})}function pt(u){return String(u||"").split(",").map(t=>t.trim()).filter(Boolean)}function It(u){const t=(u==null?void 0:u.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((u==null?void 0:u.name)||"Imported Preset").trim()||"Imported Preset",category:String((u==null?void 0:u.category)||"").trim(),tags:Array.isArray(u==null?void 0:u.tags)?u.tags.map(O=>String(O).trim()).filter(Boolean):pt(u==null?void 0:u.tags),type:String((u==null?void 0:u.type)||"auto"),delay:Math.max(0,Number(u==null?void 0:u.delay)||0),duration:Math.max(.1,Number(u==null?void 0:u.duration)||.72),stepDelay:Math.max(0,Number(u==null?void 0:u.stepDelay)||0)}}const At=E(()=>[...new Set(W.value.map(t=>t.category).filter(Boolean))].sort((t,O)=>t.localeCompare(O))),Et=E(()=>[...W.value].filter(u=>Number(u.usageCount||0)>0).sort((u,t)=>{const O=Number(t.lastUsedAt||0)-Number(u.lastUsedAt||0);return O!==0?O:Number(t.usageCount||0)-Number(u.usageCount||0)}).slice(0,6)),b=E(()=>ve.value==="all"?ee.value:ee.value.filter(u=>u.scope===ve.value));function w(u){const t=he.value.trim().toLowerCase(),O=ze.value;return O==="all"||(u.category||"")===O?t?[u.name,u.category,...u.tags||[]].filter(Boolean).some(Ee=>String(Ee).toLowerCase().includes(t)):!0:!1}const Q=E(()=>ge.value.filter(w)),V=E(()=>z.value.filter(w)),Ie=E(()=>Et.value.filter(u=>L.value==="group"?u.scope==="group":u.scope!=="group"));function Ae(u){const t=String(u.name||"").trim();if(!t)return;const O=W.value.findIndex(Be=>Be.scope===u.scope&&Be.name.toLowerCase()===t.toLowerCase()),pe={...u,id:O>=0?W.value[O].id:`motion-${Date.now()}`,name:t,category:String(u.category||"").trim(),tags:Array.isArray(u.tags)?u.tags:pt(u.tags)},Ee=[...W.value];O>=0?Ee.splice(O,1,pe):Ee.push(pe),Me({motionPresets:Ee})}function Re(u,t){const O=W.value.map(pe=>pe.id===u?{...pe,...t}:pe);Me({motionPresets:O})}function Ue(u){const t=W.value.find(O=>O.id===u);t&&Re(u,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function re(u,t){const O=W.value.filter(We=>We.scope===u).map(We=>We.name.toLowerCase()),pe=String(t||"Preset").trim()||"Preset";if(!O.includes(pe.toLowerCase()))return pe;let Ee=2,Be=`${pe} Copy`;for(;O.includes(Be.toLowerCase());)Be=`${pe} Copy ${Ee}`,Ee+=1;return Be}function $e(u){Me({motionPresets:W.value.filter(t=>t.id!==u)}),R.value===u&&(R.value="",G.value="")}function He(u){Ae({...u,id:void 0,name:re(u.scope,u.name)})}function Fe(u){R.value=u.id,G.value=u.name,ce.value=u.category||"",be.value=Array.isArray(u.tags)?u.tags.join(", "):""}function Ne(){R.value="",G.value="",ce.value="",be.value=""}function Ve(u){const t=String(G.value||"").trim();t&&(Re(u,{name:t,category:String(ce.value||"").trim(),tags:pt(be.value)}),Ne())}function mt(u,t,O){if(!t||!O||t===O)return;const pe=W.value.filter(lt=>lt.scope===u),Ee=pe.findIndex(lt=>lt.id===t),Be=pe.findIndex(lt=>lt.id===O);if(Ee===-1||Be===-1)return;const We=[...pe],[Oe]=We.splice(Ee,1);We.splice(Be,0,Oe);const bt=W.value.filter(lt=>lt.scope!==u),wt=[];W.value.forEach(lt=>{if(lt.scope===u){We.length&&wt.push(We.shift());return}const Nt=bt.shift();Nt&&wt.push(Nt)}),Me({motionPresets:wt})}function vt(u){oe.value=u.id,we.value=u.id}function Xe(u){oe.value&&(we.value=u.id)}function ft(u){oe.value&&(mt(u.scope,oe.value,u.id),oe.value="",we.value="")}function Tt(){oe.value="",we.value=""}function Mt(){U.value+=1}function Pt(){ne.value+=1}function jt(u,t){ke({[u]:t})}function Dt(u){const t=Math.max(0,Number(u)||0);ke({duration:t})}function ht(u){var pe;if(!a.value)return;const O={...((pe=a.value.animations)==null?void 0:pe[0])||{type:"auto",delay:0,duration:.64},...u};if(O.type==="auto"){q({animations:[]});return}q({animations:[{type:O.type||"none",delay:Math.max(0,Number(O.delay)||0),duration:Math.max(.1,Number(O.duration)||.64)}]})}const dt=_("stagger-in"),r=_(0),n=_(.12),v=_(.72);Qe(B,u=>{u.length&&(dt.value=m.value.type==="mixed"?"stagger-in":m.value.type,v.value=m.value.duration)},{immediate:!0,deep:!0});function P(){if(!B.value.length)return;[...B.value].sort((t,O)=>(t.y||0)!==(O.y||0)?(t.y||0)-(O.y||0):(t.x||0)-(O.x||0)).forEach((t,O)=>{if(dt.value==="auto"){d.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}d.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:dt.value,delay:Math.max(0,Number(r.value)||0)+O*Math.max(0,Number(n.value)||0),duration:Math.max(.1,Number(v.value)||.72)}]})})}function y(u){dt.value=u.type||"stagger-in",r.value=Number(u.delay||0),n.value=Number(u.stepDelay||0),v.value=Number(u.duration||.72),Ue(u.id),Pt()}function se(){Ae({scope:"group",name:xe.value,category:D.value,tags:pt(Y.value),type:dt.value,delay:Math.max(0,Number(r.value)||0),stepDelay:Math.max(0,Number(n.value)||0),duration:Math.max(.1,Number(v.value)||.72)}),xe.value="",D.value="",Y.value=""}function Pe(u){ht({type:u.type||"auto",delay:Number(u.delay||0),duration:Number(u.duration||.72)}),Ue(u.id),Mt()}function Ze(){Ae({scope:"single",name:K.value,category:C.value,tags:pt(j.value),type:H.value.type,delay:Math.max(0,Number(H.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(H.value.duration)||.72)}),K.value="",C.value="",j.value=""}function N(){var u;(u=Se.value)==null||u.click()}async function tt(u){var pe;const t=u.target,O=(pe=t==null?void 0:t.files)==null?void 0:pe[0];if(O)try{const Ee=await O.text(),Be=JSON.parse(Ee),We=Array.isArray(Be)?Be:Array.isArray(Be.motionPresets)?Be.motionPresets:[];if(!We.length)return;ee.value=We.map(Oe=>({...It(Oe),selected:!0,importName:String((Oe==null?void 0:Oe.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function gt(){ee.value=[]}function xt(){const u=ee.value.filter(O=>O.selected);if(!u.length)return;const t=[...W.value];u.forEach(O=>{const pe=t.findIndex(Ee=>Ee.scope===O.scope&&Ee.name.toLowerCase()===O.name.toLowerCase());if(pe>=0){ae.value==="replace"?t.splice(pe,1,{...t[pe],...O,id:t[pe].id}):t.push({...O,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:re(O.scope,O.name)});return}t.push(O)}),Me({motionPresets:t}),gt()}function sl(){var Be;if(!W.value.length)return;const u={version:1,exportedAt:new Date().toISOString(),motionPresets:W.value.map(({id:We,...Oe})=>Oe)},t=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),O=URL.createObjectURL(t),pe=document.createElement("a"),Ee=String(((Be=c.value)==null?void 0:Be.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";pe.href=O,pe.download=`${Ee}-motion-presets.json`,document.body.appendChild(pe),pe.click(),document.body.removeChild(pe),URL.revokeObjectURL(O)}const rl=E(()=>[{id:`single-${U.value}`,delay:Math.max(0,Number(H.value.delay)||0),duration:Math.max(.1,Number(H.value.duration)||.72),type:H.value.type}]),dl=E(()=>Array.from({length:Math.min(Math.max(B.value.length,3),5)},(u,t)=>({id:`group-${ne.value}-${t}`,delay:Math.max(0,Number(r.value)||0)+t*Math.max(0,Number(n.value)||0),duration:Math.max(.1,Number(v.value)||.72),type:dt.value}))),Ft=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Ut=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(u,t)=>{var O,pe,Ee,Be,We,Oe,bt,wt,lt,Nt,Vt,Gt,Wt,Ht,Yt,Qt,Jt,Xt,Kt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,yo,ho,xo,wo,ko,Co,$o,So,Io,Ao,Eo,To,Mo,Po,No,Bo,zo,_o,Lo,jo,Do,qo,Ro,Oo,Fo,Uo,Vo,Go,Wo,Ho,Yo,Qo,Jo,Xo,Ko,Zo,en,tn,on,nn,ln,an,sn,rn,dn,un,cn,pn,vn,fn,mn,gn,bn,yn,hn,xn,wn,kn,Cn,$n,Sn,In,An,En,Tn,Mn,Pn,Nn,Bn,zn,_n,Ln,jn,Dn,qn,Rn,On,Fn,Un,Vn,Gn,Wn,Hn,Yn;return l(),i("div",{ref_key:"panelRootRef",ref:Te,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Se,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:tt},null,544),e("input",{ref_key:"chartImportInput",ref:Le,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:ct},null,544),t[353]||(t[353]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),T.value?(l(),Ye(ga,{key:0,"search-query":he.value,"category-filter":ze.value,"available-categories":At.value,"recent-presets":Ie.value,"pending-imported-presets":ee.value,"filtered-pending-imports":b.value,"import-scope-filter":ve.value,"import-conflict-mode":ae.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>he.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>ze.value=o),onTriggerImport:N,onExportPresets:sl,onApplyPreset:t[2]||(t[2]=o=>L.value==="group"?y(o):Pe(o)),onClearImports:gt,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>ve.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>ae.value=o),onApplyImports:xt},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):F("",!0),I(s).multiSelection?(l(),i("div",ba,[t[172]||(t[172]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",ya,k(B.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",ha,[e("div",{class:"motion-scrubber-header"},[t[168]||(t[168]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Pt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${ne.value}`},[(l(!0),i(Z,null,ue(dl.value,o=>(l(),i("span",{key:o.id,class:J(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ye({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",xa,[(l(),i(Z,null,ue(Ft,o=>e("button",{key:`group-${o.value}`,type:"button",class:J(["motion-card",dt.value===o.value&&"active"]),onClick:te=>dt.value=o.value},[e("span",ka,[e("span",{class:J(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Ca)):F("",!0),o.value==="stagger-in"?(l(),i("span",$a)):F("",!0)]),e("span",Sa,k(o.label),1)],10,wa)),64))]),e("div",Ia,[e("div",Aa,[t[169]||(t[169]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),de(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>r.value=o),class:"input"},null,512),[[Ce,r.value]])]),e("div",Ea,[t[170]||(t[170]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),de(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>n.value=o),class:"input"},null,512),[[Ce,n.value]])])]),e("div",Ta,[t[171]||(t[171]=e("label",{class:"form-label"},"Duration (seconds)",-1)),de(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>v.value=o),class:"input"},null,512),[[Ce,v.value]])]),e("div",Ma,[de(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>xe.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[Ce,xe.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:se},"Save")]),e("div",Pa,[de(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>D.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[Ce,D.value]]),de(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>Y.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,Y.value]])]),V.value.length?(l(),i("div",Na,[(l(!0),i(Z,null,ue(V.value,o=>(l(),i("div",{key:o.id,class:J(["preset-item",oe.value===o.id&&"dragging",we.value===o.id&&oe.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:te=>vt(o),onDragenter:qe(te=>Xe(o),["prevent"]),onDragover:t[14]||(t[14]=qe(()=>{},["prevent"])),onDrop:qe(te=>ft(o),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:te=>y(o)},k(o.name),9,za),o.category?(l(),i("span",_a,k(o.category),1)):F("",!0),(l(!0),i(Z,null,ue(o.tags||[],te=>(l(),i("span",{key:`${o.id}-${te}`,class:"preset-meta-chip muted"},"#"+k(te),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:te=>He(o)},"Duplicate",8,La),e("button",{type:"button",class:"preset-mini-btn",onClick:te=>Fe(o)},"Rename",8,ja),e("button",{type:"button",class:"preset-mini-btn danger",onClick:te=>$e(o.id)},"Delete",8,Da),R.value===o.id?(l(),i("div",qa,[de(e("input",{"onUpdate:modelValue":t[11]||(t[11]=te=>G.value=te),class:"input"},null,512),[[Ce,G.value]]),de(e("input",{"onUpdate:modelValue":t[12]||(t[12]=te=>ce.value=te),class:"input",placeholder:"Category"},null,512),[[Ce,ce.value]]),de(e("input",{"onUpdate:modelValue":t[13]||(t[13]=te=>be.value=te),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,be.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:te=>Ve(o.id)},"Save",8,Ra),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ne},"Cancel")])):F("",!0)],42,Ba))),128))])):z.value.length?(l(),i("div",Oa,"No group presets match the current search.")):F("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:P}," Apply Sequence to Selection ")])):a.value?(l(),i(Z,{key:3},[e("div",{class:J(["panel-section",me.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",Bs,[t[203]||(t[203]=X(" Position & Size ",-1)),e("span",zs,k(a.value.type),1)]),e("div",_s,[e("div",Ls,[t[204]||(t[204]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=o=>De("x",o.target.value))},null,40,js)]),e("div",Ds,[t[205]||(t[205]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=o=>De("y",o.target.value))},null,40,qs)]),e("div",Rs,[t[206]||(t[206]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=o=>De("width",o.target.value))},null,40,Os)]),e("div",Fs,[t[207]||(t[207]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=o=>De("height",o.target.value))},null,40,Us)]),e("div",Vs,[t[208]||(t[208]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>De("rotation",o.target.value))},null,40,Gs)]),e("div",Ws,[t[209]||(t[209]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>De("opacity",o.target.value))},null,40,Hs)])])],2),e("div",{class:J(["panel-section",me.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[213]||(t[213]=e("div",{class:"panel-title"},"Animation",-1)),e("div",Ys,[e("div",{class:"motion-scrubber-header"},[t[210]||(t[210]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Mt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${U.value}`},[(l(!0),i(Z,null,ue(rl.value,o=>(l(),i("span",{key:o.id,class:J(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ye({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Qs,[(l(),i(Z,null,ue(Ft,o=>e("button",{key:o.value,type:"button",class:J(["motion-card",H.value.type===o.value&&"active"]),onClick:te=>ht({type:o.value})},[e("span",Xs,[e("span",{class:J(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Ks)):F("",!0),o.value==="stagger-in"?(l(),i("span",Zs)):F("",!0)]),e("span",er,k(o.label),1)],10,Js)),64))]),e("div",tr,[e("div",or,[t[211]||(t[211]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:H.value.delay,class:"input",onChange:t[45]||(t[45]=o=>ht({delay:o.target.value}))},null,40,nr)]),e("div",lr,[t[212]||(t[212]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:H.value.duration,class:"input",onChange:t[46]||(t[46]=o=>ht({duration:o.target.value}))},null,40,ir)])]),e("div",ar,[de(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>K.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[Ce,K.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ze},"Save")]),e("div",sr,[de(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>C.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[Ce,C.value]]),de(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>j.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,j.value]])]),Q.value.length?(l(),i("div",rr,[(l(!0),i(Z,null,ue(Q.value,o=>(l(),i("div",{key:o.id,class:J(["preset-item",oe.value===o.id&&"dragging",we.value===o.id&&oe.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:te=>vt(o),onDragenter:qe(te=>Xe(o),["prevent"]),onDragover:t[53]||(t[53]=qe(()=>{},["prevent"])),onDrop:qe(te=>ft(o),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:te=>Pe(o)},k(o.name),9,ur),o.category?(l(),i("span",cr,k(o.category),1)):F("",!0),(l(!0),i(Z,null,ue(o.tags||[],te=>(l(),i("span",{key:`${o.id}-${te}`,class:"preset-meta-chip muted"},"#"+k(te),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:te=>He(o)},"Duplicate",8,pr),e("button",{type:"button",class:"preset-mini-btn",onClick:te=>Fe(o)},"Rename",8,vr),e("button",{type:"button",class:"preset-mini-btn danger",onClick:te=>$e(o.id)},"Delete",8,fr),R.value===o.id?(l(),i("div",mr,[de(e("input",{"onUpdate:modelValue":t[50]||(t[50]=te=>G.value=te),class:"input"},null,512),[[Ce,G.value]]),de(e("input",{"onUpdate:modelValue":t[51]||(t[51]=te=>ce.value=te),class:"input",placeholder:"Category"},null,512),[[Ce,ce.value]]),de(e("input",{"onUpdate:modelValue":t[52]||(t[52]=te=>be.value=te),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,be.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:te=>Ve(o.id)},"Save",8,gr),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ne},"Cancel")])):F("",!0)],42,dr))),128))])):ge.value.length?(l(),i("div",br,"No single-element presets match the current search.")):F("",!0),t[214]||(t[214]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[230]||(t[230]=e("div",{class:"panel-title"},"Text",-1)),e("div",yr,[t[215]||(t[215]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(wt=a.value.content)==null?void 0:wt.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>g({text:o.target.value}))},null,40,hr)]),e("div",xr,[e("div",wr,[t[216]||(t[216]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(lt=a.value.content)==null?void 0:lt.fontSize,class:"input",onChange:t[55]||(t[55]=o=>g({fontSize:+o.target.value}))},null,40,kr)]),e("div",Cr,[t[218]||(t[218]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(Nt=a.value.content)==null?void 0:Nt.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>g({fontWeight:o.target.value}))},[...t[217]||(t[217]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,$r)])]),e("div",Sr,[t[219]||(t[219]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Vt=a.value.content)==null?void 0:Vt.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>g({fontFamily:o.target.value}))},[(l(),i(Z,null,ue(Ut,o=>e("option",{key:o,value:o},k(o.split(",")[0]),9,Ar)),64))],40,Ir)]),e("div",Er,[t[220]||(t[220]=e("label",{class:"form-label"},"Align",-1)),e("div",Tr,[(l(),i(Z,null,ue(["left","center","right","justify"],o=>{var te;return e("button",{key:o,class:J(["align-btn",((te=a.value.content)==null?void 0:te.textAlign)===o&&"active"]),onClick:Qn=>g({textAlign:o})},k(o[0].toUpperCase()),11,Mr)}),64))])]),e("div",Pr,[t[224]||(t[224]=e("label",{class:"form-label"},"Style",-1)),e("div",Nr,[e("button",{class:J(["style-btn",((Gt=a.value.content)==null?void 0:Gt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var te;return g({fontStyle:((te=a.value.content)==null?void 0:te.fontStyle)==="italic"?"normal":"italic"})})},[...t[221]||(t[221]=[e("i",null,"I",-1)])],2),e("button",{class:J(["style-btn",((Wt=a.value.content)==null?void 0:Wt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var te;return g({textDecoration:((te=a.value.content)==null?void 0:te.textDecoration)==="underline"?"none":"underline"})})},[...t[222]||(t[222]=[e("u",null,"U",-1)])],2),e("button",{class:J(["style-btn",((Ht=a.value.content)==null?void 0:Ht.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var te;return g({textDecoration:((te=a.value.content)==null?void 0:te.textDecoration)==="line-through"?"none":"line-through"})})},[...t[223]||(t[223]=[e("s",null,"S",-1)])],2)])]),e("div",Br,[t[225]||(t[225]=e("label",{class:"form-label"},"Color",-1)),e("div",zr,[e("input",{type:"color",value:((Yt=a.value.content)==null?void 0:Yt.color)||"#000",onInput:t[61]||(t[61]=o=>g({color:o.target.value})),class:"color-input-native"},null,40,_r),e("input",{value:((Qt=a.value.content)==null?void 0:Qt.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>g({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Lr)])]),e("div",jr,[t[226]||(t[226]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Jt=a.value.content)==null?void 0:Jt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>g({lineHeight:+o.target.value}))},null,40,Dr)]),e("div",qr,[e("div",Rr,[t[228]||(t[228]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Xt=a.value.content)==null?void 0:Xt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>g({textTransform:o.target.value}))},[...t[227]||(t[227]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,Or)]),e("div",Fr,[t[229]||(t[229]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Kt=a.value.content)==null?void 0:Kt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>g({letterSpacing:+o.target.value}))},null,40,Ur)])])],2)):F("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[238]||(t[238]=e("div",{class:"panel-title"},"Image",-1)),e("div",Vr,[t[231]||(t[231]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Zt=a.value.content)==null?void 0:Zt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>g({src:o.target.value}))},null,40,Gr)]),e("div",Wr,[t[232]||(t[232]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(eo=a.value.content)==null?void 0:eo.alt,class:"input",onInput:t[67]||(t[67]=o=>g({alt:o.target.value}))},null,40,Hr)]),e("div",Yr,[t[234]||(t[234]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((to=a.value.content)==null?void 0:to.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>g({objectFit:o.target.value}))},[...t[233]||(t[233]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Qr)]),e("div",Jr,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((oo=a.value.content)==null?void 0:oo.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>g({borderRadius:+o.target.value}))},null,40,Xr)]),e("div",Kr,[e("div",Zr,[t[236]||(t[236]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((no=a.value.content)==null?void 0:no.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>g({borderWidth:+o.target.value}))},null,40,ed)]),e("div",td,[t[237]||(t[237]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((lo=a.value.content)==null?void 0:lo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>g({borderColor:o.target.value}))},null,40,od)])])],2)):F("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[246]||(t[246]=e("div",{class:"panel-title"},"Shape",-1)),e("div",nd,[t[240]||(t[240]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((io=a.value.content)==null?void 0:io.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>g({shapeType:o.target.value}))},[...t[239]||(t[239]=[et('<option value="rectangle" data-v-65379610>Rectangle</option><option value="circle" data-v-65379610>Circle</option><option value="triangle" data-v-65379610>Triangle</option><option value="star" data-v-65379610>Star</option><option value="arrow" data-v-65379610>Arrow</option><option value="diamond" data-v-65379610>Diamond</option>',6)])],40,ld)]),e("div",id,[t[241]||(t[241]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",ad,[e("input",{type:"color",value:((ao=a.value.content)==null?void 0:ao.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>g({fillColor:o.target.value})),class:"color-input-native"},null,40,sd),e("input",{value:((so=a.value.content)==null?void 0:so.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>g({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,rd)])]),e("div",dd,[t[242]||(t[242]=e("label",{class:"form-label"},"Border Color",-1)),e("div",ud,[e("input",{type:"color",value:((ro=a.value.content)==null?void 0:ro.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>g({borderColor:o.target.value})),class:"color-input-native"},null,40,cd),e("input",{value:((uo=a.value.content)==null?void 0:uo.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>g({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,pd)])]),e("div",vd,[t[243]||(t[243]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((co=a.value.content)==null?void 0:co.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>g({borderWidth:+o.target.value}))},null,40,fd)]),e("div",md,[t[244]||(t[244]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((po=a.value.content)==null?void 0:po.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>g({borderRadius:+o.target.value}))},null,40,gd)]),e("div",bd,[t[245]||(t[245]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((vo=a.value.content)==null?void 0:vo.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>g({opacity:+o.target.value}))},null,40,yd)])],2)):F("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[267]||(t[267]=e("div",{class:"panel-title"},"Chart",-1)),e("div",hd,[t[248]||(t[248]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((fo=a.value.content)==null?void 0:fo.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=o=>g({chartType:o.target.value}))},[...t[247]||(t[247]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,xd)]),e("div",wd,[t[249]||(t[249]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((mo=a.value.content)==null?void 0:mo.title)||"",class:"input",onInput:t[81]||(t[81]=o=>g({title:o.target.value}))},null,40,kd)]),e("div",Cd,[t[250]||(t[250]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((go=a.value.content)==null?void 0:go.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=o=>g({dataText:o.target.value}))},null,40,$d),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ct},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ke},"Upload CSV")]),t[251]||(t[251]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Sd,[t[252]||(t[252]=e("label",{class:"form-label"},"Paste table data",-1)),de(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=o=>fe.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[Ce,fe.value]]),e("div",Id,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=o=>je(fe.value))},"Convert pasted data")])]),e("div",Ad,[t[253]||(t[253]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((bo=a.value.content)==null?void 0:bo.paletteText)||"",class:"input",placeholder:nt.value.paletteText,onInput:t[85]||(t[85]=o=>g({paletteText:o.target.value}))},null,40,Ed),e("div",Td,[(l(!0),i(Z,null,ue(kt.value,(o,te)=>(l(),i("span",{key:`chart-palette-${te}`,class:"chart-palette-swatch",style:ye({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:St},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:$t},"Apply theme colors")]),t[254]||(t[254]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Md,[e("div",Pd,[t[255]||(t[255]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((yo=a.value.content)==null?void 0:yo.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=o=>g({backgroundColor:o.target.value}))},null,40,Nd)]),e("div",Bd,[t[256]||(t[256]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((ho=a.value.content)==null?void 0:ho.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=o=>g({textColor:o.target.value}))},null,40,zd)])]),e("div",_d,[e("div",Ld,[t[257]||(t[257]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((xo=a.value.content)==null?void 0:xo.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=o=>g({gridColor:o.target.value}))},null,40,jd)]),e("div",Dd,[t[258]||(t[258]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((wo=a.value.content)==null?void 0:wo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=o=>g({borderColor:o.target.value}))},null,40,qd)])]),e("div",Rd,[e("div",Od,[t[259]||(t[259]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((ko=a.value.content)==null?void 0:ko.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=o=>g({borderWidth:+o.target.value}))},null,40,Fd)]),((Co=a.value.content)==null?void 0:Co.chartType)!=="circle"?(l(),i("div",Ud,[t[260]||(t[260]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:(($o=a.value.content)==null?void 0:$o.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=o=>g({maxValue:o.target.value}))},null,40,Vd)])):(l(),i("div",Gd,[t[261]||(t[261]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((So=a.value.content)==null?void 0:So.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=o=>g({innerRadius:+o.target.value}))},null,40,Wd)]))]),((Io=a.value.content)==null?void 0:Io.chartType)==="line"?(l(),i("div",Hd,[e("div",Yd,[t[262]||(t[262]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((Ao=a.value.content)==null?void 0:Ao.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=o=>g({strokeWidth:+o.target.value}))},null,40,Qd)]),e("label",Jd,[e("input",{type:"checkbox",checked:!!((Eo=a.value.content)!=null&&Eo.showArea),onChange:t[94]||(t[94]=o=>g({showArea:o.target.checked}))},null,40,Xd),t[263]||(t[263]=X(" Show area fill ",-1))])])):F("",!0),e("label",Kd,[e("input",{type:"checkbox",checked:((To=a.value.content)==null?void 0:To.showLegend)!==!1,onChange:t[95]||(t[95]=o=>g({showLegend:o.target.checked}))},null,40,Zd),t[264]||(t[264]=X(" Show legend ",-1))]),((Mo=a.value.content)==null?void 0:Mo.chartType)!=="circle"?(l(),i("label",eu,[e("input",{type:"checkbox",checked:((Po=a.value.content)==null?void 0:Po.showGrid)!==!1,onChange:t[96]||(t[96]=o=>g({showGrid:o.target.checked}))},null,40,tu),t[265]||(t[265]=X(" Show grid lines ",-1))])):F("",!0),e("label",ou,[e("input",{type:"checkbox",checked:((No=a.value.content)==null?void 0:No.showValues)!==!1,onChange:t[97]||(t[97]=o=>g({showValues:o.target.checked}))},null,40,nu),t[266]||(t[266]=X(" Show values ",-1))])],2)):F("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[283]||(t[283]=e("div",{class:"panel-title"},"Button",-1)),e("div",lu,[t[268]||(t[268]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Bo=a.value.content)==null?void 0:Bo.label,class:"input",onInput:t[98]||(t[98]=o=>g({label:o.target.value}))},null,40,iu)]),e("div",au,[t[270]||(t[270]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((zo=a.value.content)==null?void 0:zo.variant)||"primary",class:"select",onChange:t[99]||(t[99]=o=>g({variant:o.target.value}))},[...t[269]||(t[269]=[et('<option value="primary" data-v-65379610>Primary</option><option value="secondary" data-v-65379610>Secondary</option><option value="outline" data-v-65379610>Outline</option><option value="ghost" data-v-65379610>Ghost</option><option value="danger" data-v-65379610>Danger</option>',5)])],40,su)]),e("div",ru,[t[272]||(t[272]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((_o=a.value.content)==null?void 0:_o.action)||"none",class:"select",onChange:t[100]||(t[100]=o=>g({action:o.target.value}))},[...t[271]||(t[271]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,du)]),(Lo=a.value.content)!=null&&Lo.action&&a.value.content.action!=="none"?(l(),i("div",uu,[t[273]||(t[273]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(jo=a.value.content)==null?void 0:jo.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=o=>g({target:o.target.value}))},null,40,cu)])):F("",!0),e("div",pu,[e("div",vu,[t[274]||(t[274]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Do=a.value.content)==null?void 0:Do.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=o=>g({bgColor:o.target.value}))},null,40,fu)]),e("div",mu,[t[275]||(t[275]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((qo=a.value.content)==null?void 0:qo.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=o=>g({textColor:o.target.value}))},null,40,gu)])]),e("div",bu,[e("div",yu,[t[276]||(t[276]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Ro=a.value.content)==null?void 0:Ro.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=o=>g({borderColor:o.target.value}))},null,40,hu)]),e("div",xu,[t[277]||(t[277]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Oo=a.value.content)==null?void 0:Oo.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=o=>g({borderRadius:+o.target.value}))},null,40,wu)])]),e("div",ku,[e("div",Cu,[t[278]||(t[278]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Fo=a.value.content)==null?void 0:Fo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=o=>g({fontSize:+o.target.value}))},null,40,$u)]),e("div",Su,[t[280]||(t[280]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Uo=a.value.content)==null?void 0:Uo.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=o=>g({fontWeight:+o.target.value}))},[...t[279]||(t[279]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Iu)])]),e("div",Au,[e("div",Eu,[t[281]||(t[281]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Vo=a.value.content)==null?void 0:Vo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=o=>g({fontFamily:o.target.value}))},[(l(),i(Z,null,ue(Ut,o=>e("option",{key:`btn-${o}`,value:o},k(o.split(",")[0]),9,Mu)),64))],40,Tu)]),e("div",Pu,[t[282]||(t[282]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Go=a.value.content)==null?void 0:Go.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=o=>g({letterSpacing:+o.target.value}))},null,40,Nu)])])],2)):F("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[293]||(t[293]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Bu,[t[285]||(t[285]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Wo=a.value.content)==null?void 0:Wo.icon)||"?",class:"select",onChange:t[110]||(t[110]=o=>g({icon:o.target.value}))},[...t[284]||(t[284]=[et('<option value="?" data-v-65379610>? (Info)</option><option value="!" data-v-65379610>! (Alert)</option><option value="+" data-v-65379610>+ (Plus)</option><option value="i" data-v-65379610>i (Info)</option><option value="✦" data-v-65379610>✦ (Star)</option>',5)])],40,zu)]),e("div",_u,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("div",Lu,[e("input",{type:"color",value:((Ho=a.value.content)==null?void 0:Ho.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=o=>g({bgColor:o.target.value})),class:"color-input-native"},null,40,ju),e("input",{value:((Yo=a.value.content)==null?void 0:Yo.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=o=>g({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Du)])]),e("div",qu,[e("div",Ru,[t[287]||(t[287]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Qo=a.value.content)==null?void 0:Qo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=o=>g({iconColor:o.target.value}))},null,40,Ou)]),e("div",Fu,[t[288]||(t[288]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Jo=a.value.content)==null?void 0:Jo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=o=>g({borderRadius:+o.target.value}))},null,40,Uu)])]),e("div",Vu,[t[289]||(t[289]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Xo=a.value.content)==null?void 0:Xo.popupTitle,class:"input",onInput:t[115]||(t[115]=o=>g({popupTitle:o.target.value}))},null,40,Gu)]),e("div",Wu,[t[290]||(t[290]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Ko=a.value.content)==null?void 0:Ko.popupContent,class:"textarea",onInput:t[116]||(t[116]=o=>g({popupContent:o.target.value}))},null,40,Hu)]),e("div",Yu,[e("div",Qu,[t[291]||(t[291]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Zo=a.value.content)==null?void 0:Zo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>g({popupBgColor:o.target.value}))},null,40,Ju)]),e("div",Xu,[t[292]||(t[292]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((en=a.value.content)==null?void 0:en.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>g({popupTextColor:o.target.value}))},null,40,Ku)])])],2)):F("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[302]||(t[302]=e("div",{class:"panel-title"},"Video",-1)),e("div",Zu,[t[294]||(t[294]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(tn=a.value.content)==null?void 0:tn.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=o=>g({src:o.target.value}))},null,40,ec)]),e("div",tc,[t[295]||(t[295]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(on=a.value.content)==null?void 0:on.poster,class:"input",onInput:t[120]||(t[120]=o=>g({poster:o.target.value}))},null,40,oc)]),e("div",nc,[t[297]||(t[297]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((nn=a.value.content)==null?void 0:nn.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=o=>g({objectFit:o.target.value}))},[...t[296]||(t[296]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,lc)]),e("label",ic,[e("input",{type:"checkbox",checked:(ln=a.value.content)==null?void 0:ln.autoplay,onChange:t[122]||(t[122]=o=>g({autoplay:o.target.checked}))},null,40,ac),t[298]||(t[298]=X(" Autoplay ",-1))]),e("label",sc,[e("input",{type:"checkbox",checked:((an=a.value.content)==null?void 0:an.controls)??!0,onChange:t[123]||(t[123]=o=>g({controls:o.target.checked}))},null,40,rc),t[299]||(t[299]=X(" Show Controls ",-1))]),e("label",dc,[e("input",{type:"checkbox",checked:(sn=a.value.content)==null?void 0:sn.loop,onChange:t[124]||(t[124]=o=>g({loop:o.target.checked}))},null,40,uc),t[300]||(t[300]=X(" Loop ",-1))]),e("label",cc,[e("input",{type:"checkbox",checked:(rn=a.value.content)==null?void 0:rn.muted,onChange:t[125]||(t[125]=o=>g({muted:o.target.checked}))},null,40,pc),t[301]||(t[301]=X(" Muted ",-1))])],2)):F("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[311]||(t[311]=e("div",{class:"panel-title"},"Audio",-1)),e("div",vc,[t[303]||(t[303]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(dn=a.value.content)==null?void 0:dn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=o=>g({src:o.target.value}))},null,40,fc)]),e("div",mc,[t[304]||(t[304]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(un=a.value.content)==null?void 0:un.label,class:"input",onInput:t[127]||(t[127]=o=>g({label:o.target.value}))},null,40,gc)]),e("label",bc,[e("input",{type:"checkbox",checked:(cn=a.value.content)==null?void 0:cn.autoplay,onChange:t[128]||(t[128]=o=>g({autoplay:o.target.checked}))},null,40,yc),t[305]||(t[305]=X(" Autoplay ",-1))]),e("label",hc,[e("input",{type:"checkbox",checked:((pn=a.value.content)==null?void 0:pn.controls)!==!1,onChange:t[129]||(t[129]=o=>g({controls:o.target.checked}))},null,40,xc),t[306]||(t[306]=X(" Show Controls ",-1))]),e("label",wc,[e("input",{type:"checkbox",checked:(vn=a.value.content)==null?void 0:vn.loop,onChange:t[130]||(t[130]=o=>g({loop:o.target.checked}))},null,40,kc),t[307]||(t[307]=X(" Loop ",-1))]),e("div",Cc,[e("div",$c,[t[308]||(t[308]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((fn=a.value.content)==null?void 0:fn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=o=>g({accentColor:o.target.value}))},null,40,Sc)]),e("div",Ic,[t[309]||(t[309]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((mn=a.value.content)==null?void 0:mn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=o=>g({textColor:o.target.value}))},null,40,Ac)])]),e("div",Ec,[t[310]||(t[310]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((gn=a.value.content)==null?void 0:gn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=o=>g({bgColor:o.target.value}))},null,40,Tc)])],2)):F("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[319]||(t[319]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Mc,[t[312]||(t[312]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(bn=a.value.content)==null?void 0:bn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=o=>g({question:o.target.value}))},null,40,Pc)]),e("div",Nc,[t[313]||(t[313]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(hn=(yn=a.value.content)==null?void 0:yn.options)==null?void 0:hn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=o=>g({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,Bc)]),e("div",zc,[t[314]||(t[314]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((xn=a.value.content)==null?void 0:xn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=o=>g({correctIndex:+o.target.value}))},null,40,_c)]),e("div",Lc,[t[315]||(t[315]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(wn=a.value.content)==null?void 0:wn.explanation,class:"textarea",onInput:t[137]||(t[137]=o=>g({explanation:o.target.value}))},null,40,jc)]),e("div",Dc,[e("div",qc,[t[316]||(t[316]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((kn=a.value.content)==null?void 0:kn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=o=>g({cardBgColor:o.target.value}))},null,40,Rc)]),e("div",Oc,[t[317]||(t[317]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((Cn=a.value.content)==null?void 0:Cn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=o=>g({questionColor:o.target.value}))},null,40,Fc)])]),e("div",Uc,[t[318]||(t[318]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:(($n=a.value.content)==null?void 0:$n.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=o=>g({accentColor:o.target.value}))},null,40,Vc)])],2)):a.value.type==="tabs"?(l(),i("div",{key:9,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[325]||(t[325]=e("div",{class:"panel-title"},"Tabs Configuration",-1)),e("div",Gc,[t[320]||(t[320]=e("label",{class:"form-label"},"Tabs Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Sn=a.value.content)==null?void 0:Sn.tabs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[141]||(t[141]=o=>{var te;return g({tabs:Ge(o.target.value,(te=a.value.content)==null?void 0:te.tabs)})})},null,40,Wc)]),e("div",Hc,[e("div",Yc,[t[321]||(t[321]=e("label",{class:"form-label"},"Active Tab",-1)),e("input",{type:"color",value:((In=a.value.content)==null?void 0:In.activeTabColor)||"#6c47ff",class:"color-input-native",onInput:t[142]||(t[142]=o=>g({activeTabColor:o.target.value}))},null,40,Qc)]),e("div",Jc,[t[322]||(t[322]=e("label",{class:"form-label"},"Inactive Tab",-1)),e("input",{type:"color",value:((An=a.value.content)==null?void 0:An.inactiveTabColor)||"#f8fafc",class:"color-input-native",onInput:t[143]||(t[143]=o=>g({inactiveTabColor:o.target.value}))},null,40,Xc)]),e("div",Kc,[t[323]||(t[323]=e("label",{class:"form-label"},"Content Bg",-1)),e("input",{type:"color",value:((En=a.value.content)==null?void 0:En.contentBgColor)||"#ffffff",class:"color-input-native",onInput:t[144]||(t[144]=o=>g({contentBgColor:o.target.value}))},null,40,Zc)]),e("div",ep,[t[324]||(t[324]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Tn=a.value.content)==null?void 0:Tn.textColor)||"#1e293b",class:"color-input-native",onInput:t[145]||(t[145]=o=>g({textColor:o.target.value}))},null,40,tp)])])],2)):a.value.type==="accordion"?(l(),i("div",{key:10,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[331]||(t[331]=e("div",{class:"panel-title"},"Accordion Configuration",-1)),e("div",op,[t[326]||(t[326]=e("label",{class:"form-label"},"Items Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Mn=a.value.content)==null?void 0:Mn.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[146]||(t[146]=o=>{var te;return g({items:Ge(o.target.value,(te=a.value.content)==null?void 0:te.items)})})},null,40,np)]),e("div",lp,[e("div",ip,[t[327]||(t[327]=e("label",{class:"form-label"},"Active Bg Color",-1)),e("input",{type:"color",value:((Pn=a.value.content)==null?void 0:Pn.activeBgColor)||"#f8fafc",class:"color-input-native",onInput:t[147]||(t[147]=o=>g({activeBgColor:o.target.value}))},null,40,ap)]),e("div",sp,[t[328]||(t[328]=e("label",{class:"form-label"},"Active Title Color",-1)),e("input",{type:"color",value:((Nn=a.value.content)==null?void 0:Nn.activeColor)||"#6c47ff",class:"color-input-native",onInput:t[148]||(t[148]=o=>g({activeColor:o.target.value}))},null,40,rp)]),e("div",dp,[t[329]||(t[329]=e("label",{class:"form-label"},"Item Bg Color",-1)),e("input",{type:"color",value:((Bn=a.value.content)==null?void 0:Bn.itemBgColor)||"#ffffff",class:"color-input-native",onInput:t[149]||(t[149]=o=>g({itemBgColor:o.target.value}))},null,40,up)]),e("div",cp,[t[330]||(t[330]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((zn=a.value.content)==null?void 0:zn.textColor)||"#475569",class:"color-input-native",onInput:t[150]||(t[150]=o=>g({textColor:o.target.value}))},null,40,pp)])])],2)):a.value.type==="flipcard"?(l(),i("div",{key:11,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[342]||(t[342]=e("div",{class:"panel-title"},"Flip Card Content",-1)),e("div",vp,[t[333]||(t[333]=e("label",{class:"form-label"},"Direction",-1)),e("select",{value:((_n=a.value.content)==null?void 0:_n.flipDirection)||"horizontal",class:"select",onChange:t[151]||(t[151]=o=>g({flipDirection:o.target.value}))},[...t[332]||(t[332]=[e("option",{value:"horizontal"},"Horizontal (Y-axis)",-1),e("option",{value:"vertical"},"Vertical (X-axis)",-1)])],40,fp)]),e("div",mp,[t[334]||(t[334]=e("label",{class:"form-label"},"Front Title",-1)),e("input",{type:"text",value:(Ln=a.value.content)==null?void 0:Ln.frontTitle,class:"input",onInput:t[152]||(t[152]=o=>g({frontTitle:o.target.value}))},null,40,gp)]),e("div",bp,[t[335]||(t[335]=e("label",{class:"form-label"},"Front Content",-1)),e("textarea",{value:(jn=a.value.content)==null?void 0:jn.frontContent,class:"textarea",onInput:t[153]||(t[153]=o=>g({frontContent:o.target.value}))},null,40,yp)]),e("div",hp,[t[336]||(t[336]=e("label",{class:"form-label"},"Back Title",-1)),e("input",{type:"text",value:(Dn=a.value.content)==null?void 0:Dn.backTitle,class:"input",onInput:t[154]||(t[154]=o=>g({backTitle:o.target.value}))},null,40,xp)]),e("div",wp,[t[337]||(t[337]=e("label",{class:"form-label"},"Back Content",-1)),e("textarea",{value:(qn=a.value.content)==null?void 0:qn.backContent,class:"textarea",onInput:t[155]||(t[155]=o=>g({backContent:o.target.value}))},null,40,kp)]),e("div",Cp,[e("div",$p,[t[338]||(t[338]=e("label",{class:"form-label"},"Front Bg",-1)),e("input",{type:"color",value:((Rn=a.value.content)==null?void 0:Rn.frontBgColor)||"#6c47ff",class:"color-input-native",onInput:t[156]||(t[156]=o=>g({frontBgColor:o.target.value}))},null,40,Sp)]),e("div",Ip,[t[339]||(t[339]=e("label",{class:"form-label"},"Front Text",-1)),e("input",{type:"color",value:((On=a.value.content)==null?void 0:On.frontTextColor)||"#ffffff",class:"color-input-native",onInput:t[157]||(t[157]=o=>g({frontTextColor:o.target.value}))},null,40,Ap)]),e("div",Ep,[t[340]||(t[340]=e("label",{class:"form-label"},"Back Bg",-1)),e("input",{type:"color",value:((Fn=a.value.content)==null?void 0:Fn.backBgColor)||"#ffffff",class:"color-input-native",onInput:t[158]||(t[158]=o=>g({backBgColor:o.target.value}))},null,40,Tp)]),e("div",Mp,[t[341]||(t[341]=e("label",{class:"form-label"},"Back Text",-1)),e("input",{type:"color",value:((Un=a.value.content)==null?void 0:Un.backTextColor)||"#1e293b",class:"color-input-native",onInput:t[159]||(t[159]=o=>g({backTextColor:o.target.value}))},null,40,Pp)])])],2)):a.value.type==="stepper"?(l(),i("div",{key:12,class:J(["panel-section",me.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[348]||(t[348]=e("div",{class:"panel-title"},"Stepper Configuration",-1)),e("div",Np,[t[343]||(t[343]=e("label",{class:"form-label"},"Steps Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Vn=a.value.content)==null?void 0:Vn.steps)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[160]||(t[160]=o=>{var te;return g({steps:Ge(o.target.value,(te=a.value.content)==null?void 0:te.steps)})})},null,40,Bp)]),e("div",zp,[e("div",_p,[t[344]||(t[344]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Gn=a.value.content)==null?void 0:Gn.bgColor)||"#ffffff",class:"color-input-native",onInput:t[161]||(t[161]=o=>g({bgColor:o.target.value}))},null,40,Lp)]),e("div",jp,[t[345]||(t[345]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Wn=a.value.content)==null?void 0:Wn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[162]||(t[162]=o=>g({accentColor:o.target.value}))},null,40,Dp)]),e("div",qp,[t[346]||(t[346]=e("label",{class:"form-label"},"Title Color",-1)),e("input",{type:"color",value:((Hn=a.value.content)==null?void 0:Hn.titleColor)||"#0f172a",class:"color-input-native",onInput:t[163]||(t[163]=o=>g({titleColor:o.target.value}))},null,40,Rp)]),e("div",Op,[t[347]||(t[347]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Yn=a.value.content)==null?void 0:Yn.textColor)||"#475569",class:"color-input-native",onInput:t[164]||(t[164]=o=>g({textColor:o.target.value}))},null,40,Fp)])])],2)):F("",!0),e("div",Up,[t[352]||(t[352]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Vp,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[165]||(t[165]=o=>I(d).duplicateElement(I(s).projectId,I(s).currentSlideId,a.value.id))},[...t[349]||(t[349]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),X(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[166]||(t[166]=o=>{I(s).showInteractionEditor=!0,I(s).interactionElementId=a.value.id})},[...t[350]||(t[350]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),X(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[167]||(t[167]=o=>{I(d).deleteElement(I(s).projectId,I(s).currentSlideId,a.value.id),I(s).clearSelection()})},[...t[351]||(t[351]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),X(" Delete Element ",-1)])])])])],64)):(l(),i("div",Fa,[e("div",Ua,[e("button",{type:"button",class:J(["slide-settings-tab",ie.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>ie.value="canvas")},[...t[173]||(t[173]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:J(["slide-settings-tab",ie.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>ie.value="transitions")},[...t[174]||(t[174]=[et('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-65379610><path d="M5 7h5" data-v-65379610></path><path d="M5 12h10" data-v-65379610></path><path d="M5 17h14" data-v-65379610></path><path d="M14 7l5 5-5 5" data-v-65379610></path></svg><span data-v-65379610>Transitions</span>',2)])],2),e("button",{type:"button",class:J(["slide-settings-tab",ie.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>ie.value="navigation")},[...t[175]||(t[175]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),ie.value==="canvas"?(l(),i("div",Va,[t[190]||(t[190]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",Ga,[t[176]||(t[176]=e("label",{class:"form-label"},"Title",-1)),de(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>_e.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>jt("title",_e.value.title))},null,544),[[Ce,_e.value.title]])]),e("div",Wa,[t[177]||(t[177]=e("label",{class:"form-label"},"Background",-1)),e("div",Ha,[(l(),i(Z,null,ue(["color","gradient","image"],o=>{var te;return e("button",{key:o,class:J(["bg-type-btn",(((te=p.value)==null?void 0:te.backgroundType)||"color")===o&&"active"]),onClick:Qn=>ke({backgroundType:o})},k(o),11,Ya)}),64))]),(((O=p.value)==null?void 0:O.backgroundType)||"color")==="color"?(l(),i("div",Qa,[e("input",{type:"color",value:((pe=p.value)==null?void 0:pe.background)||"#ffffff",onInput:t[20]||(t[20]=o=>ke({background:o.target.value})),class:"color-input-native"},null,40,Ja),e("input",{value:((Ee=p.value)==null?void 0:Ee.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>ke({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Xa)])):((Be=p.value)==null?void 0:Be.backgroundType)==="gradient"?de((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>_e.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>ke({backgroundGradient:_e.value.backgroundGradient}))},null,544)),[[Ce,_e.value.backgroundGradient]]):de((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>_e.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>ke({backgroundImage:_e.value.backgroundImage}))},null,544)),[[Ce,_e.value.backgroundImage]])]),e("div",Ka,[t[187]||(t[187]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",Za,[(l(!0),i(Z,null,ue(I(kl),o=>{var te;return l(),i("button",{key:o.id,type:"button",class:J(["canvas-size-card",((te=f.value)==null?void 0:te.id)===o.id&&"active"]),onClick:Qn=>st(o)},[e("span",ts,[e("span",{class:J(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[178]||(t[178]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",os,k(o.label),1),e("span",ns,k(o.ratioLabel),1)],10,es)}),128))]),e("div",ls,[e("div",is,[t[179]||(t[179]=e("span",null,"Custom",-1)),e("span",as,"Current ratio "+k(M.value),1)]),e("div",ss,[e("div",rs,[t[181]||(t[181]=e("label",{class:"form-label"},"Width",-1)),e("div",ds,[e("input",{type:"number",min:"320",max:"4096",value:x.value.width,class:"input",onChange:t[26]||(t[26]=o=>ot("width",o.target.value))},null,40,us),t[180]||(t[180]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[184]||(t[184]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",cs,[t[183]||(t[183]=e("label",{class:"form-label"},"Height",-1)),e("div",ps,[e("input",{type:"number",min:"320",max:"4096",value:x.value.height,class:"input",onChange:t[27]||(t[27]=o=>ot("height",o.target.value))},null,40,vs),t[182]||(t[182]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",fs,[de(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>le.value=o)},null,512),[[_t,le.value]]),t[185]||(t[185]=X(" Maintain proportions ",-1))]),t[186]||(t[186]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[188]||(t[188]=et('<div class="canvas-size-callout" data-v-65379610><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-65379610><circle cx="12" cy="12" r="9" data-v-65379610></circle><path d="M12 10v6" data-v-65379610></path><path d="M12 7h.01" data-v-65379610></path></svg><span data-v-65379610>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",ms,[t[189]||(t[189]=e("div",{class:"panel-title"},"Slide Notes",-1)),de(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>_e.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>jt("notes",_e.value.notes))},null,544),[[Ce,_e.value.notes]])])])):ie.value==="transitions"?(l(),i("div",gs,[t[195]||(t[195]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((We=p.value)==null?void 0:We.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>ke({transition:o.target.value}))},[...t[191]||(t[191]=[et('<option value="none" data-v-65379610>None</option><option value="fade" data-v-65379610>Fade</option><option value="slide" data-v-65379610>Slide</option><option value="zoom" data-v-65379610>Zoom</option><option value="flip" data-v-65379610>Flip</option>',5)])],40,bs),e("div",ys,[t[192]||(t[192]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Oe=p.value)==null?void 0:Oe.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>Dt(o.target.value))},null,40,hs),t[193]||(t[193]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",xs,[e("input",{type:"checkbox",checked:!!((bt=p.value)!=null&&bt.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>ke({advanceOnMediaEnd:o.target.checked}))},null,40,ws),t[194]||(t[194]=X(" Advance when slide media finishes ",-1))]),t[196]||(t[196]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",ks,[t[202]||(t[202]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",Cs,[e("input",{type:"checkbox",checked:h.value.autoPlay,onChange:t[34]||(t[34]=o=>Me({autoPlay:o.target.checked}))},null,40,$s),t[197]||(t[197]=X(" Autoplay preview and exported presentation ",-1))]),e("label",Ss,[e("input",{type:"checkbox",checked:h.value.loop,onChange:t[35]||(t[35]=o=>Me({loop:o.target.checked}))},null,40,Is),t[198]||(t[198]=X(" Loop back to the first slide at the end ",-1))]),e("label",As,[e("input",{type:"checkbox",checked:h.value.showProgress,onChange:t[36]||(t[36]=o=>Me({showProgress:o.target.checked}))},null,40,Es),t[199]||(t[199]=X(" Show progress bar in preview ",-1))]),e("label",Ts,[e("input",{type:"checkbox",checked:h.value.showNavControls,onChange:t[37]||(t[37]=o=>Me({showNavControls:o.target.checked}))},null,40,Ms),t[200]||(t[200]=X(" Show previous/next and dot navigation ",-1))]),e("label",Ps,[e("input",{type:"checkbox",checked:h.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>Me({allowKeyboardNav:o.target.checked}))},null,40,Ns),t[201]||(t[201]=X(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},Wp=Je(Gp,[["__scopeId","data-v-65379610"]]),Hp={class:"editor-toolbar"},Yp={class:"toolbar-group"},Qp={class:"toolbar-group"},Jp=["data-tooltip","onClick"],Xp={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kp={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zp={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ev={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tv={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ov={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nv={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lv={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},iv={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},av={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sv={key:10,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},rv={key:11,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},dv={key:12,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},uv={key:13,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},cv={key:14,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pv={key:15,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vv={key:16,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},fv={key:17,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},mv={class:"tool-label"},gv={class:"toolbar-group"},bv={class:"toolbar-group"},yv={class:"toolbar-group"},hv={__name:"EditorToolbar",emits:["open-ai-project"],setup(A,{emit:s}){const d=s,c=it();at();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"},{id:"tabs",label:"Tabs",tooltip:"Add tabs",icon:"tabs"},{id:"accordion",label:"Accordion",tooltip:"Add accordion",icon:"accordion"},{id:"flipcard",label:"Flip Card",tooltip:"Add flip card",icon:"flipcard"},{id:"stepper",label:"Stepper",tooltip:"Add stepper",icon:"stepper"},{id:"poll",label:"Poll",tooltip:"Add poll",icon:"poll"},{id:"labeledimage",label:"L-Image",tooltip:"Add labeled image",icon:"labeledimage"},{id:"matching",label:"Match",tooltip:"Add matching game",icon:"matching"},{id:"sorting",label:"Sort",tooltip:"Add sorting game",icon:"sorting"}];function h(x){c.setActiveTool(x)}return(x,f)=>(l(),i("div",Hp,[e("div",Yp,[e("button",{class:J(["tool-btn",I(c).activeTool==="select"&&"active"]),onClick:f[0]||(f[0]=M=>h("select")),"data-tooltip":"Select (V)"},[...f[7]||(f[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),f[31]||(f[31]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Qp,[(l(),i(Z,null,ue(p,M=>e("button",{key:M.id,class:J(["tool-btn",I(c).activeTool===M.id&&"active"]),"data-tooltip":M.tooltip,onClick:le=>h(M.id)},[M.icon==="text"?(l(),i("svg",Xp,[...f[8]||(f[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):M.icon==="heading"?(l(),i("svg",Kp,[...f[9]||(f[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):M.icon==="image"?(l(),i("svg",Zp,[...f[10]||(f[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):M.icon==="shape"?(l(),i("svg",ev,[...f[11]||(f[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):M.icon==="button"?(l(),i("svg",tv,[...f[12]||(f[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):M.icon==="hotspot"?(l(),i("svg",ov,[...f[13]||(f[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):M.icon==="video"?(l(),i("svg",nv,[...f[14]||(f[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):M.icon==="audio"?(l(),i("svg",lv,[...f[15]||(f[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):M.icon==="quiz"?(l(),i("svg",iv,[...f[16]||(f[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):M.icon==="chart"?(l(),i("svg",av,[...f[17]||(f[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):M.icon==="tabs"?(l(),i("svg",sv,[...f[18]||(f[18]=[e("rect",{x:"2",y:"7",width:"20",height:"13",rx:"2"},null,-1),e("path",{d:"M2 11h20"},null,-1),e("path",{d:"M8 7v4"},null,-1)])])):M.icon==="accordion"?(l(),i("svg",rv,[...f[19]||(f[19]=[e("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"},null,-1),e("path",{d:"M3 10h18"},null,-1),e("path",{d:"M3 16h18"},null,-1)])])):M.icon==="flipcard"?(l(),i("svg",dv,[...f[20]||(f[20]=[e("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"},null,-1),e("path",{d:"M3 12h18"},null,-1),e("path",{d:"M21 8h-4"},null,-1)])])):M.icon==="stepper"?(l(),i("svg",uv,[...f[21]||(f[21]=[e("circle",{cx:"6",cy:"12",r:"3"},null,-1),e("circle",{cx:"18",cy:"12",r:"3"},null,-1),e("path",{d:"M9 12h6"},null,-1)])])):M.icon==="poll"?(l(),i("svg",cv,[...f[22]||(f[22]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("path",{d:"M7 10h10"},null,-1),e("path",{d:"M7 14h6"},null,-1)])])):M.icon==="labeledimage"?(l(),i("svg",pv,[...f[23]||(f[23]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"12",cy:"12",r:"2"},null,-1),e("line",{x1:"12",y1:"14",x2:"12",y2:"18"},null,-1)])])):M.icon==="matching"?(l(),i("svg",vv,[...f[24]||(f[24]=[et('<path d="M4 6h4" data-v-83a36a45></path><path d="M4 18h4" data-v-83a36a45></path><path d="M16 6h4" data-v-83a36a45></path><path d="M16 18h4" data-v-83a36a45></path><line x1="8" y1="6" x2="16" y2="18" data-v-83a36a45></line>',5)])])):M.icon==="sorting"?(l(),i("svg",fv,[...f[25]||(f[25]=[e("path",{d:"M3 6h18"},null,-1),e("path",{d:"M7 12h10"},null,-1),e("path",{d:"M10 18h4"},null,-1)])])):F("",!0),e("span",mv,k(M.label),1)],10,Jp)),64))]),f[32]||(f[32]=e("div",{class:"toolbar-divider"},null,-1)),e("div",gv,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:f[1]||(f[1]=M=>d("open-ai-project")),"data-tooltip":"Create a new AI project"},[...f[26]||(f[26]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),f[33]||(f[33]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",bv,[e("button",{class:"tool-btn",onClick:f[2]||(f[2]=M=>I(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...f[27]||(f[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:f[3]||(f[3]=M=>I(c).zoomReset())},k(Math.round(I(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:f[4]||(f[4]=M=>I(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...f[28]||(f[28]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-83a36a45><circle cx="11" cy="11" r="8" data-v-83a36a45></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-83a36a45></line><line x1="11" y1="8" x2="11" y2="14" data-v-83a36a45></line><line x1="8" y1="11" x2="14" y2="11" data-v-83a36a45></line></svg>',1)])])]),f[34]||(f[34]=e("div",{class:"toolbar-divider"},null,-1)),e("div",yv,[e("button",{class:J(["tool-btn",I(c).showGrid&&"active"]),onClick:f[5]||(f[5]=M=>I(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...f[29]||(f[29]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:J(["tool-btn",I(c).snapToGrid&&"active"]),onClick:f[6]||(f[6]=M=>I(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...f[30]||(f[30]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-83a36a45><circle cx="5" cy="5" r="1" data-v-83a36a45></circle><circle cx="12" cy="5" r="1" data-v-83a36a45></circle><circle cx="19" cy="5" r="1" data-v-83a36a45></circle><circle cx="5" cy="12" r="1" data-v-83a36a45></circle><circle cx="12" cy="12" r="1" data-v-83a36a45></circle><circle cx="19" cy="12" r="1" data-v-83a36a45></circle><circle cx="5" cy="19" r="1" data-v-83a36a45></circle><circle cx="12" cy="19" r="1" data-v-83a36a45></circle><circle cx="19" cy="19" r="1" data-v-83a36a45></circle></svg>',1)])],2)])]))}},xv=Je(hv,[["__scopeId","data-v-83a36a45"]]),wv=["onMousedown"],kv={key:1,class:"selection-border locked-border"},Cv={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(A){const s=A,d=it(),c=at(),p=ul("canvasScale",_(1)),h=E(()=>d.projectId),x=E(()=>d.currentSlideId),f=E(()=>d.selectedElementIds.includes(s.element.id)),M=E(()=>s.element.locked),le=E(()=>s.element.visible!==!1),ie=E(()=>{const ee=s.element.content||{};return!!(ee.text||ee.label||ee.question||ee.popupTitle||ee.popupContent)});let W=!1,ge=0,z=0,B=new Map;function a(ee){if(!d.snapToGrid||!d.gridSize)return ee;const ve=d.gridSize;return Math.round(ee/ve)*ve}function T(ee){var fe;if(M.value||ee.target.classList.contains("resize-handle"))return;const ve=ee.ctrlKey||ee.metaKey||ee.shiftKey;f.value?ve&&d.selectElement(s.element.id,!0):d.selectElement(s.element.id,ve),d.setActiveTool("select"),W=!1,ge=ee.clientX,z=ee.clientY,B.clear();const ae=(fe=c.getProject(h.value))==null?void 0:fe.slides.find(Te=>Te.id===x.value);ae&&d.selectedElementIds.forEach(Te=>{const me=ae.elements.find(S=>S.id===Te);me&&!me.locked&&B.set(Te,{x:me.x,y:me.y})}),window.addEventListener("mousemove",L),window.addEventListener("mouseup",H),ee.stopPropagation()}function L(ee){const ve=(ee.clientX-ge)/p.value,ae=(ee.clientY-z)/p.value;!W&&(Math.abs(ve)>3||Math.abs(ae)>3)&&(W=!0),W&&B.forEach((fe,Te)=>{const me=fe.x+ve,S=fe.y+ae;c.updateElement(h.value,x.value,Te,{x:me,y:S},{persist:!1})})}function H(ee){if(W){const ve=(ee.clientX-ge)/p.value,ae=(ee.clientY-z)/p.value;B.forEach((fe,Te)=>{c.updateElement(h.value,x.value,Te,{x:a(fe.x+ve),y:a(fe.y+ae)},{persist:!1})}),c.commitProject(h.value)}W||!(ee.ctrlKey||ee.metaKey||ee.shiftKey)&&d.selectedElementIds.length>1&&d.selectElement(s.element.id,!1),W=!1,window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",H)}const m=["n","ne","e","se","s","sw","w","nw"];let U=!1,ne="",K=0,xe=0,R=0,G=0,ce=0,be=0;function oe(ee,ve){M.value||(ee.stopPropagation(),ee.preventDefault(),U=!0,ne=ve,K=ee.clientX,xe=ee.clientY,R=s.element.width,G=s.element.height,ce=s.element.x,be=s.element.y,window.addEventListener("mousemove",we),window.addEventListener("mouseup",C))}function we(ee){if(!U)return;const ve=p.value,ae=(ee.clientX-K)/ve,fe=(ee.clientY-xe)/ve,Te=20;let me=ce,S=be,$=R,q=G;if(ne.includes("e")&&($=Math.max(Te,R+ae)),ne.includes("s")&&(q=Math.max(Te,G+fe)),ne.includes("w")){const g=Math.max(Te,R-ae);me=ce+(R-g),$=g}if(ne.includes("n")){const g=Math.max(Te,G-fe);S=be+(G-g),q=g}if(d.snapToGrid&&d.gridSize){const g=d.gridSize;$=Math.round($/g)*g,q=Math.round(q/g)*g,me=Math.round(me/g)*g,S=Math.round(S/g)*g}c.updateElement(h.value,x.value,s.element.id,{x:me,y:S,width:$,height:q})}function C(){U=!1,window.removeEventListener("mousemove",we),window.removeEventListener("mouseup",C)}function j(){["text","heading"].includes(s.element.type)&&d.focusPropertiesSection("content")}const D=E(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:M.value?"not-allowed":"move",visibility:le.value?"visible":"hidden",userSelect:"none"}));function Y(ee){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[ee]||"auto"}function he(ee="content"){d.focusPropertiesSection(ee)}function ze(){const ee=ie.value?"improve":s.element.type==="image"?"image":"generate";d.openAIPanel(ee)}function Se(){const ee=c.duplicateElement(h.value,x.value,s.element.id);ee&&(d.selectElement(ee.id),d.focusPropertiesSection("geometry"))}function Le(){c.deleteElement(h.value,x.value,s.element.id),d.clearSelection()}return(ee,ve)=>(l(),i("div",{class:J(["element-wrapper",f.value&&"selected",M.value&&"locked"]),style:ye(D.value),onMousedown:T,onDblclick:j},[cl(ee.$slots,"default",{},void 0),f.value&&!M.value?(l(),i(Z,{key:0},[ve[6]||(ve[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:ve[3]||(ve[3]=qe(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:ve[0]||(ve[0]=ae=>he("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:ve[1]||(ve[1]=ae=>he("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:ve[2]||(ve[2]=ae=>he("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:ze},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Se,title:"Duplicate element","aria-label":"Duplicate element"},[...ve[4]||(ve[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Le,title:"Delete element","aria-label":"Delete element"},[...ve[5]||(ve[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(Z,null,ue(m,ae=>e("div",{key:ae,class:J(["resize-handle",`handle-${ae}`]),style:ye({cursor:Y(ae)}),onMousedown:qe(fe=>oe(fe,ae),["stop"])},null,46,wv)),64))],64)):F("",!0),f.value&&M.value?(l(),i("div",kv)):F("",!0)],38))}},$v=Je(Cv,[["__scopeId","data-v-d539ca8b"]]),qt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,d=E(()=>s.element.content||{}),c=it(),p=at(),h=_(!1),x=_(null),f=_("");Qe(()=>d.value.text,W=>{h.value||(f.value=W||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function M(){c.selectedElementId===s.element.id&&(h.value=!0,tl(()=>{if(x.value)if(x.value.focus(),typeof x.value.setSelectionRange=="function"){const W=x.value.value.length;x.value.setSelectionRange(W,W)}else{const W=document.createRange();W.selectNodeContents(x.value),W.collapse(!1);const ge=window.getSelection();ge.removeAllRanges(),ge.addRange(W)}}))}function le(W){h.value&&W.stopPropagation()}function ie(){h.value=!1;const W=f.value;p.updateElement(c.projectId,c.currentSlideId,s.element.id,{content:{...s.element.content,text:W}})}return(W,ge)=>h.value?de((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:x,"onUpdate:modelValue":ge[0]||(ge[0]=z=>f.value=z),onBlur:ie,onMousedown:le,style:ye({fontSize:(d.value.fontSize||16)+"px",fontFamily:d.value.fontFamily||"Inter, sans-serif",fontWeight:d.value.fontWeight||"normal",fontStyle:d.value.fontStyle||"normal",textDecoration:d.value.textDecoration||"none",textAlign:d.value.textAlign||"left",color:d.value.color||"#1a1a2e",lineHeight:d.value.lineHeight||1.5,textTransform:d.value.textTransform||"none",letterSpacing:(d.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[Ce,f.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:M,style:ye({fontSize:(d.value.fontSize||16)+"px",fontFamily:d.value.fontFamily||"Inter, sans-serif",fontWeight:d.value.fontWeight||"normal",fontStyle:d.value.fontStyle||"normal",textDecoration:d.value.textDecoration||"none",textAlign:d.value.textAlign||"left",color:d.value.color||"#1a1a2e",lineHeight:d.value.lineHeight||1.5,textTransform:d.value.textTransform||"none",letterSpacing:(d.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},k(f.value),37))}},Sv={key:0,class:"image-status image-loading"},Iv=["src","alt"],Av={key:2,class:"image-placeholder"},Ev={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Tv={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,d=_(""),c=_(0),p=_("idle"),h=E(()=>{var le;return Array.isArray((le=s.element.content)==null?void 0:le.fallbackSrcs)?s.element.content.fallbackSrcs:[]});function x(){var le;d.value=((le=s.element.content)==null?void 0:le.src)||"",c.value=0,p.value=d.value?"loading":"empty"}function f(){p.value="loaded"}function M(){const le=h.value[c.value];if(le){c.value+=1,d.value=le,p.value="loading";return}p.value="error"}return Qe(()=>{var le,ie;return[(le=s.element.content)==null?void 0:le.src,JSON.stringify(((ie=s.element.content)==null?void 0:ie.fallbackSrcs)||[])]},()=>x(),{immediate:!0}),(le,ie)=>{var W,ge,z;return l(),i("div",{class:"image-element",style:ye({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((W=A.element.content)==null?void 0:W.borderRadius)||0)+"px",border:`${((ge=A.element.content)==null?void 0:ge.borderWidth)||0}px solid ${((z=A.element.content)==null?void 0:z.borderColor)||"transparent"}`})},[p.value==="loading"?(l(),i("div",Sv,[...ie[0]||(ie[0]=[e("span",{class:"image-status-spinner"},null,-1),e("span",null,"Loading image…",-1)])])):F("",!0),d.value&&p.value!=="error"?(l(),i("img",{key:1,src:d.value,alt:A.element.content.alt||"",style:ye({width:"100%",height:"100%",objectFit:A.element.content.objectFit||"cover",display:p.value==="loaded"?"block":"none"}),draggable:"false",onLoad:f,onError:M},null,44,Iv)):F("",!0),p.value==="empty"||p.value==="error"?(l(),i("div",Av,[(l(),i("svg",Ev,[...ie[1]||(ie[1]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),e("span",null,k(p.value==="error"?"Image unavailable":"Image"),1)])):F("",!0)],4)}}},Mv=Je(Tv,[["__scopeId","data-v-cd42b1c3"]]),Pv={class:"shape-element",style:{width:"100%",height:"100%"}},Nv=["width","height"],Bv=["points","fill","stroke","stroke-width"],zv={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,d=E(()=>s.element.content||{}),c=E(()=>{const x=d.value.shapeType||"rectangle",f={width:"100%",height:"100%",background:d.value.fillColor||"#6c47ff",border:`${d.value.borderWidth||0}px solid ${d.value.borderColor||"transparent"}`,opacity:d.value.opacity??1};return x==="circle"?{...f,borderRadius:"50%"}:x==="rectangle"?{...f,borderRadius:(d.value.borderRadius||0)+"px"}:f}),p=E(()=>["triangle","star","arrow","diamond"].includes(d.value.shapeType)),h=E(()=>{const x=s.element.width||150,f=s.element.height||100,M=d.value.shapeType;if(M==="triangle")return`${x/2},0 ${x},${f} 0,${f}`;if(M==="diamond")return`${x/2},0 ${x},${f/2} ${x/2},${f} 0,${f/2}`;if(M==="arrow")return`0,${f*.3} ${x*.6},${f*.3} ${x*.6},0 ${x},${f/2} ${x*.6},${f} ${x*.6},${f*.7} 0,${f*.7}`;if(M==="star"){const le=x/2,ie=f/2,W=Math.min(x,f)/2,ge=W*.4;let z="";for(let B=0;B<10;B++){const a=(B*36-90)*Math.PI/180,T=B%2===0?W:ge;z+=`${le+T*Math.cos(a)},${ie+T*Math.sin(a)} `}return z.trim()}return""});return(x,f)=>(l(),i("div",Pv,[p.value?(l(),i("svg",{key:1,width:A.element.width,height:A.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:h.value,fill:d.value.fillColor||"#6c47ff",stroke:d.value.borderColor||"none","stroke-width":d.value.borderWidth||0},null,8,Bv)],8,Nv)):(l(),i("div",{key:0,style:ye(c.value)},null,4))]))}},_v={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,d=E(()=>s.element.content||{}),c=E(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},h=p[d.value.variant||"primary"]||p.primary;return{...h,background:d.value.bgColor||h.background,color:d.value.textColor||h.color,border:d.value.borderColor?`1px solid ${d.value.borderColor}`:h.border,borderRadius:(d.value.borderRadius??8)+"px"}});return(p,h)=>(l(),i("div",{class:"button-element",style:ye({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(d.value.fontSize??15)+"px",fontWeight:d.value.fontWeight??600,letterSpacing:(d.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:d.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},k(d.value.label||"Button"),5))}},Lv={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},jv={class:"popup-header"},Dv={class:"popup-body"},qv={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,d=E(()=>s.element.content||{}),c=_(!1);function p(h){h.stopPropagation(),c.value=!c.value}return(h,x)=>(l(),i("div",Lv,[e("div",{class:"hotspot-btn",style:ye({width:"100%",height:"100%",background:d.value.bgColor||"#6c47ff",borderRadius:(d.value.borderRadius??999)>=999?"50%":(d.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:d.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:qe(p,["stop"])},k(d.value.icon||"?"),5),yt(zt,{name:"fade"},{default:ut(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:ye({background:d.value.popupBgColor||"#ffffff",color:d.value.popupTextColor||"#1a1a2e"})},[e("div",jv,[e("strong",null,k(d.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:x[0]||(x[0]=qe(f=>c.value=!1,["stop"]))},"×")]),e("div",Dv,k(d.value.popupContent||"Add your content in the properties panel."),1)],4)):F("",!0)]),_:1})]))}},Rv=Je(qv,[["__scopeId","data-v-ef5f15f6"]]),Ov={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},Fv=["src"],Uv=["src","poster","autoplay","controls","loop","muted"],Vv={key:2,class:"video-placeholder"},Gv={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Wv={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,d=E(()=>s.element.content||{}),c=E(()=>{const h=d.value.src||"";return h.includes("youtube")||h.includes("youtu.be")}),p=E(()=>{var x,f;const h=d.value.src||"";if(c.value){const M=(x=h.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:x[1];return M?`https://www.youtube.com/embed/${M}`:""}if(h.includes("vimeo.com")){const M=(f=h.match(/vimeo\.com\/(\d+)/))==null?void 0:f[1];return M?`https://player.vimeo.com/video/${M}`:""}return""});return(h,x)=>(l(),i("div",Ov,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,Fv)):d.value.src&&!p.value?(l(),i("video",{key:1,src:d.value.src,poster:d.value.poster,autoplay:d.value.autoplay,controls:d.value.controls!==!1,loop:d.value.loop,muted:d.value.muted,style:ye({width:"100%",height:"100%",objectFit:d.value.objectFit||"cover"})},null,12,Uv)):(l(),i("div",Vv,[(l(),i("svg",Gv,[...x[0]||(x[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),x[1]||(x[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Hv=Je(Wv,[["__scopeId","data-v-dfea1a16"]]),Yv=["stroke"],Qv=["src","controls","autoplay","loop"],Jv={key:1,style:{"font-size":"11px",color:"#aaa"}},Xv={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(A){return(s,d)=>{var c,p,h,x,f,M,le,ie,W;return l(),i("div",{class:"audio-element",style:ye({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=A.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=A.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((h=A.element.content)==null?void 0:h.accentColor)||"#6c47ff","stroke-width":"2"},[...d[1]||(d[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Yv)),e("span",{style:ye({fontSize:"13px",color:((x=A.element.content)==null?void 0:x.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},k(((f=A.element.content)==null?void 0:f.label)||"Audio Player"),5),(M=A.element.content)!=null&&M.src?(l(),i("audio",{key:0,src:A.element.content.src,controls:((le=A.element.content)==null?void 0:le.controls)!==!1,autoplay:(ie=A.element.content)==null?void 0:ie.autoplay,loop:(W=A.element.content)==null?void 0:W.loop,style:{height:"28px","max-width":"180px"},onMousedown:d[0]||(d[0]=qe(()=>{},["stop"]))},null,40,Qv)):(l(),i("span",Jv,"No source"))],4)}}},Kv={class:"quiz-options"},Zv=["onClick"],e1={class:"opt-letter"},t1={class:"opt-text"},o1={key:0},n1={class:"quiz-actions"},l1=["disabled"],i1={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,d=E(()=>s.element.content||{}),c=_(null),p=_(!1);function h(le){p.value||(c.value=le)}function x(){c.value!==null&&(p.value=!0)}function f(){c.value=null,p.value=!1}const M=E(()=>p.value&&c.value===(d.value.correctIndex??0));return(le,ie)=>(l(),i("div",{class:"quiz-element",style:ye({width:"100%",height:"100%",background:d.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":d.value.accentColor||"#6c47ff"})},[e("p",{style:ye({fontSize:"15px",fontWeight:600,color:d.value.questionColor||"#1a1a2e",lineHeight:1.4})},k(d.value.question||"Question text…"),5),e("div",Kv,[(l(!0),i(Z,null,ue(d.value.options||[],(W,ge)=>(l(),i("div",{key:ge,class:J(["quiz-opt",c.value===ge&&"selected",p.value&&ge===d.value.correctIndex&&"correct",p.value&&c.value===ge&&ge!==d.value.correctIndex&&"wrong"]),onClick:z=>h(ge)},[e("span",e1,k(String.fromCharCode(65+ge)),1),e("span",t1,k(W),1)],10,Zv))),128))]),p.value?(l(),i("div",{key:0,class:J(["quiz-feedback",M.value?"correct":"wrong"])},[X(k(M.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!M.value&&d.value.explanation?(l(),i("span",o1,k(d.value.explanation),1)):F("",!0)],2)):F("",!0),e("div",n1,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:f},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:x},"Submit",8,l1))])],4))}},a1=Je(i1,[["__scopeId","data-v-ca2bd187"]]),s1={key:0,class:"canvas-empty"},r1={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},d1={key:0,class:"canvas-device-frame","aria-hidden":"true"},u1=["value"],c1={class:"canvas-guide-label"},p1={key:5,class:"drop-hint"},v1={class:"canvas-info-bar"},f1=["disabled"],m1={class:"slide-index"},g1=["disabled"],b1={key:0},y1={__name:"EditorCanvas",setup(A){const s=it(),d=at(),c=_(null),p=_(null),h=_(1),x=E(()=>h.value*s.zoomLevel);vl("canvasScale",x);const f=E(()=>d.getProject(s.projectId)),M=E(()=>Lt(f.value)),le=E(()=>nl(f.value)),ie=E(()=>M.value.width),W=E(()=>M.value.height),ge=E(()=>ll(ie.value,W.value)),z=E(()=>{var b,w;return(w=(b=f.value)==null?void 0:b.slides)==null?void 0:w.find(Q=>Q.id===s.currentSlideId)}),B=E(()=>{var b;return[...((b=f.value)==null?void 0:b.slides)||[]].sort((w,Q)=>w.order-Q.order)}),a=E(()=>B.value.findIndex(b=>b.id===s.currentSlideId)),T=E(()=>{var b;return{autoPlay:!1,motionPresets:[],...((b=f.value)==null?void 0:b.settings)||{}}}),L=E(()=>(Array.isArray(T.value.motionPresets)?T.value.motionPresets:[]).filter(b=>b.scope==="group")),H=E(()=>{const b=new Set(s.selectedElementIds);return xe.value.filter(w=>b.has(w.id))}),m=_(""),U=E(()=>z.value?z.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:T.value.autoPlay&&Number(z.value.duration||0)>0?{label:`Auto ${Number(z.value.duration).toFixed(Number(z.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function ne(){const b=L.value.find(Q=>Q.id===m.value);if(!b||!H.value.length)return;[...H.value].sort((Q,V)=>(Q.y||0)!==(V.y||0)?(Q.y||0)-(V.y||0):(Q.x||0)-(V.x||0)).forEach((Q,V)=>{if(b.type==="auto"){d.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[]});return}d.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[{type:b.type,delay:Math.max(0,Number(b.delay)||0)+V*Math.max(0,Number(b.stepDelay)||0),duration:Math.max(.1,Number(b.duration)||.72)}]})}),d.updateProject(s.projectId,{settings:{...T.value,motionPresets:(T.value.motionPresets||[]).map(Q=>Q.id===b.id?{...Q,usageCount:Math.max(0,Number(Q.usageCount||0))+1,lastUsedAt:Date.now()}:Q)}})}function K(){if(!L.value.length){m.value="";return}L.value.some(b=>b.id===m.value)||(m.value=L.value[0].id)}const xe=E(()=>{var b;return[...((b=z.value)==null?void 0:b.elements)||[]].sort((w,Q)=>(w.zIndex||0)-(Q.zIndex||0))}),R=E(()=>{const b=z.value;return b?b.backgroundType==="gradient"&&b.backgroundGradient?{background:b.backgroundGradient}:b.backgroundType==="image"&&b.backgroundImage?{backgroundImage:`url(${b.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:b.background||"#fff"}:{background:"#fff"}}),G=E(()=>`scale(${x.value})`);function ce(){if(!c.value)return;const{clientWidth:b,clientHeight:w}=c.value,Q=(b-80)/ie.value,V=(w-80)/W.value;h.value=Math.min(Q,V,1)}let be=null;Kn(()=>{ce(),be=new ResizeObserver(ce),c.value&&be.observe(c.value),K()}),Zn(()=>be==null?void 0:be.disconnect()),Qe(L,()=>{K()},{deep:!0,immediate:!0}),Qe(M,()=>{ce()},{deep:!0});const oe=_({x:0,y:0}),we=_({x:0,y:0}),C=_(!1),j=_(!1),D=_(!1),Y=_(null),he=E(()=>{var b,w;return((b=le.value)==null?void 0:b.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=le.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),ze=E(()=>{if(!he.value)return null;if(he.value.tone==="mobile"){const Q=ie.value*.08,V=W.value*.05;return{x:Q,y:V,width:ie.value-Q*2,height:W.value-V*2}}const b=ie.value*.08,w=W.value*.08;return{x:b,y:w,width:ie.value-b*2,height:W.value-w*2}}),Se=E(()=>{if(!ze.value)return[];const b=ze.value;return xe.value.filter(w=>w.visible!==!1).filter(w=>{const Q=Number(w.x||0),V=Number(w.y||0),Ie=Q+Number(w.width||0),Ae=V+Number(w.height||0);return Q<b.x||V<b.y||Ie>b.x+b.width||Ae>b.y+b.height}).map(w=>w.id)}),Le=E(()=>s.selectedElementIds.filter(b=>Se.value.includes(b)).length),ee=E(()=>Se.value.length),ve=E(()=>!he.value||!ee.value?null:Le.value?`${Le.value} selected ${Le.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`:`${ee.value} ${ee.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`),ae=E(()=>{if(!C.value)return null;const b=Math.min(oe.value.x,we.value.x),w=Math.min(oe.value.y,we.value.y),Q=Math.abs(we.value.x-oe.value.x),V=Math.abs(we.value.y-oe.value.y);return{x:b,y:w,width:Q,height:V}});function fe(b){!C.value&&(b.target===p.value||b.target===b.currentTarget)&&s.clearSelection()}function Te(b){return b?Array.from(b.files||[]).some(w=>w.type.startsWith("image/")):!1}function me(b){return b?Array.from(b.types||[]).includes(Rt):!1}function S(b,w,Q){return Math.min(Math.max(b,w),Q)}function $(b,w,Q){const V=Ot(b),Ie=S(w-V.width/2,0,Math.max(0,ie.value-V.width)),Ae=S(Q-V.height/2,0,Math.max(0,W.value-V.height));return{x:Ie,y:Ae,bounds:V}}function q(b){if(!me(b))return null;try{const w=b.getData(Rt),Q=w?JSON.parse(w):null;return Q!=null&&Q.id&&d.getContentBlocks(s.projectId).find(V=>V.id===Q.id)||null}catch{return null}}function g(b,w,Q){if(!p.value||!Q){Y.value=null;return}const V=p.value.getBoundingClientRect(),Ie=(b-V.left)/x.value,Ae=(w-V.top)/x.value,Re=$(Q,Ie,Ae);Y.value={block:Q,x:Re.x,y:Re.y,bounds:Re.bounds}}function Ge(b,w,Q){if(!b||!b.type.startsWith("image/"))return;const V=new FileReader;V.onload=()=>{const Ie=String(V.result||"");if(!Ie)return;const Ae=new Image;Ae.onload=()=>{const Re=p.value.getBoundingClientRect(),Ue=(w-Re.left)/x.value,re=(Q-Re.top)/x.value,Fe=Math.min(420/Ae.width,280/Ae.height,1),Ne=Math.max(120,Math.round(Ae.width*Fe)),Ve=Math.max(80,Math.round(Ae.height*Fe)),mt=Math.max(0,Math.min(ie.value-Ne,Math.round(Ue-Ne/2))),vt=Math.max(0,Math.min(W.value-Ve,Math.round(re-Ve/2))),Xe=d.addElement(s.projectId,s.currentSlideId,"image",{x:mt,y:vt,width:Ne,height:Ve,content:{src:Ie,alt:b.name,objectFit:"cover"}});Xe&&(s.selectElement(Xe.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Ae.src=Ie},V.readAsDataURL(b)}function De(b){const w=Te(b.dataTransfer),Q=me(b.dataTransfer);!w&&!Q||(b.preventDefault(),b.dataTransfer.dropEffect="copy",j.value=w,D.value=Q,Q&&g(b.clientX,b.clientY,q(b.dataTransfer)))}function _e(b){var w;(w=b.currentTarget)!=null&&w.contains(b.relatedTarget)||(j.value=!1,D.value=!1,Y.value=null)}function ke(b){const w=Te(b.dataTransfer),Q=me(b.dataTransfer);if(!w&&!Q)return;if(b.preventDefault(),j.value=!1,D.value=!1,Y.value=null,Q){try{const Ie=q(b.dataTransfer);if(!Ie)return;const Ae=p.value.getBoundingClientRect(),Re=(b.clientX-Ae.left)/x.value,Ue=(b.clientY-Ae.top)/x.value,re=$(Ie,Re,Ue),$e=d.insertContentBlock(s.projectId,s.currentSlideId,Ie.id,{x:re.x,y:re.y});$e.length&&(s.setSelection($e.map(He=>He.id)),s.setActiveTool("select"),s.focusPropertiesSection("content"))}catch(Ie){console.warn("Failed to drop block onto canvas.",Ie)}return}const V=Array.from(b.dataTransfer.files||[]).find(Ie=>Ie.type.startsWith("image/"));V&&Ge(V,b.clientX,b.clientY)}function Me(b){if(H.value.length<2)return;const w=[...H.value].sort((re,$e)=>(re.zIndex||0)-($e.zIndex||0)),Q=Math.min(...w.map(re=>Number(re.x||0))),V=Math.min(...w.map(re=>Number(re.y||0))),Ie=Math.max(...w.map(re=>Number(re.x||0)+Number(re.width||0))),Ae=Math.max(...w.map(re=>Number(re.y||0)+Number(re.height||0))),Re=Q+(Ie-Q)/2,Ue=V+(Ae-V)/2;if(b==="align-left"&&w.forEach(re=>d.updateElement(s.projectId,s.currentSlideId,re.id,{x:Q},{persist:!1})),b==="align-center"&&w.forEach(re=>{const $e=Number(re.width||0);d.updateElement(s.projectId,s.currentSlideId,re.id,{x:Re-$e/2},{persist:!1})}),b==="align-right"&&w.forEach(re=>{const $e=Number(re.width||0);d.updateElement(s.projectId,s.currentSlideId,re.id,{x:Ie-$e},{persist:!1})}),b==="align-top"&&w.forEach(re=>d.updateElement(s.projectId,s.currentSlideId,re.id,{y:V},{persist:!1})),b==="align-middle"&&w.forEach(re=>{const $e=Number(re.height||0);d.updateElement(s.projectId,s.currentSlideId,re.id,{y:Ue-$e/2},{persist:!1})}),b==="align-bottom"&&w.forEach(re=>{const $e=Number(re.height||0);d.updateElement(s.projectId,s.currentSlideId,re.id,{y:Ae-$e},{persist:!1})}),b==="distribute-horizontal"){const re=[...w].sort((Ne,Ve)=>(Ne.x||0)-(Ve.x||0)),$e=re.reduce((Ne,Ve)=>Ne+Number(Ve.width||0),0),He=re.length>1?(Ie-Q-$e)/(re.length-1):0;let Fe=Q;re.forEach(Ne=>{d.updateElement(s.projectId,s.currentSlideId,Ne.id,{x:Fe},{persist:!1}),Fe+=Number(Ne.width||0)+He})}if(b==="distribute-vertical"){const re=[...w].sort((Ne,Ve)=>(Ne.y||0)-(Ve.y||0)),$e=re.reduce((Ne,Ve)=>Ne+Number(Ve.height||0),0),He=re.length>1?(Ae-V-$e)/(re.length-1):0;let Fe=V;re.forEach(Ne=>{d.updateElement(s.projectId,s.currentSlideId,Ne.id,{y:Fe},{persist:!1}),Fe+=Number(Ne.height||0)+He})}d.commitProject(s.projectId)}function st(b){const w=s.activeTool;if(b.target!==p.value&&b.target!==b.currentTarget)return;b.preventDefault(),b.stopPropagation();const Q=p.value.getBoundingClientRect(),V=(b.clientX-Q.left)/x.value,Ie=(b.clientY-Q.top)/x.value;if(w==="select"){C.value=!0,oe.value={x:V,y:Ie},we.value={x:V,y:Ie};const Ue=$e=>{we.value={x:($e.clientX-Q.left)/x.value,y:($e.clientY-Q.top)/x.value}},re=()=>{window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",re);const $e=ae.value;if($e&&($e.width>2||$e.height>2)){const He=xe.value.filter(Fe=>{const Ne=Fe.x,Ve=Fe.y,mt=Fe.width||100,vt=Fe.height||100;return Ne<$e.x+$e.width&&Ne+mt>$e.x&&Ve<$e.y+$e.height&&Ve+vt>$e.y}).map(Fe=>Fe.id);He.length>0?s.setSelection(He):s.clearSelection()}else s.clearSelection();setTimeout(()=>{C.value=!1},0)};window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",re);return}const Ae=Ue=>s.snapToGrid?Math.round(Ue/s.gridSize)*s.gridSize:Ue,Re=d.addElement(s.projectId,s.currentSlideId,w,{x:Ae(V-75),y:Ae(Ie-40)});Re&&(s.selectElement(Re.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const ot=E(()=>{if(!s.showGrid)return{};const b=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${b}px ${b}px`}}),nt={text:qt,heading:qt,image:Mv,shape:zv,button:_v,hotspot:Rv,video:Hv,audio:Xv,quiz:a1,chart:Dl,tabs:jl,accordion:Ll,flipcard:_l,stepper:zl,poll:Bl,labeledimage:Nl,matching:Pl,sorting:Ml,divider:"div"};function kt(b){return nt[b]||qt}function rt(b){var w,Q;return b.type!=="divider"?{}:{borderTop:`${((w=b.content)==null?void 0:w.thickness)||2}px solid ${((Q=b.content)==null?void 0:Q.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const je=_({show:!1,x:0,y:0,elId:null});function ct(b,w){b.preventDefault(),je.value={show:!0,x:b.clientX,y:b.clientY,elId:w},s.selectElement(w),setTimeout(()=>window.addEventListener("click",Ke,{once:!0}),0)}function Ke(){je.value.show=!1}function Ct(){if(je.value.elId){const b=d.duplicateElement(s.projectId,s.currentSlideId,je.value.elId);b&&s.selectElement(b.id)}Ke()}function $t(){je.value.elId&&(d.deleteElement(s.projectId,s.currentSlideId,je.value.elId),s.clearSelection()),Ke()}function St(){je.value.elId&&d.reorderElement(s.projectId,s.currentSlideId,je.value.elId,"up"),Ke()}function pt(){je.value.elId&&d.reorderElement(s.projectId,s.currentSlideId,je.value.elId,"down"),Ke()}function It(){const b=a.value,w=d.addSlide(s.projectId,b);w&&s.setCurrentSlide(w.id)}function At(){const b=a.value;b>0&&s.setCurrentSlide(B.value[b-1].id)}function Et(){const b=a.value;b<B.value.length-1&&s.setCurrentSlide(B.value[b+1].id)}return(b,w)=>{var Q;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[z.value?(l(),i(Z,{key:1},[e("div",{class:J(["canvas-zoom-wrapper",[he.value&&`canvas-zoom-wrapper-${he.value.tone}`]]),style:ye({transform:G.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:ye({width:ie.value+"px",height:W.value+"px",...R.value,...ot.value}),onClick:fe,onMousedown:st,onDragover:De,onDragleave:_e,onDrop:ke,onContextmenu:w[3]||(w[3]=qe(()=>{},["prevent"]))},[he.value?(l(),i("div",d1)):F("",!0),I(s).multiSelection&&L.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=qe(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),de(e("select",{"onUpdate:modelValue":w[0]||(w[0]=V=>m.value=V),class:"selection-preset-select"},[(l(!0),i(Z,null,ue(L.value,V=>(l(),i("option",{key:V.id,value:V.id},k(V.name),9,u1))),128))],512),[[Bt,m.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:qe(ne,["stop"])},"Apply")],32)):F("",!0),ve.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=qe(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,k(ve.value),1)],32)):F("",!0),Y.value?(l(),i("div",{key:3,class:"block-drop-preview",style:ye({left:`${Y.value.x}px`,top:`${Y.value.y}px`,width:`${Y.value.bounds.width}px`,height:`${Y.value.bounds.height}px`})},[(l(!0),i(Z,null,ue(Y.value.block.elements,(V,Ie)=>{var Ae,Re,Ue,re;return l(),i("div",{key:`${Y.value.block.id}-preview-${Ie}`,class:J(["block-drop-preview-el",`block-drop-preview-${V.type}`]),style:ye({left:`${Number(V.x||0)-Y.value.bounds.minX}px`,top:`${Number(V.y||0)-Y.value.bounds.minY}px`,width:`${Number(V.width||0)}px`,height:`${Number(V.height||0)}px`,borderRadius:V.type==="shape"&&((Ae=V.content)==null?void 0:Ae.shapeType)==="circle"?"50%":`${Number(((Re=V.content)==null?void 0:Re.borderRadius)||12)}px`,background:V.type==="shape"?((Ue=V.content)==null?void 0:Ue.fillColor)||"rgba(108,71,255,.18)":V.type==="button"?((re=V.content)==null?void 0:re.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(V.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(V.type)?(l(),i(Z,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):F("",!0)],6)}),128))],4)):F("",!0),(l(!0),i(Z,null,ue(xe.value,V=>(l(),Ye($v,{key:V.id,element:V,onContextmenu:qe(Ie=>ct(Ie,V.id),["stop"])},{default:ut(()=>[(l(),Ye(pl(kt(V.type)),{element:V,style:ye(V.type==="divider"?rt(V):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),he.value?(l(),i("div",{key:4,class:J(["canvas-guide",[`canvas-guide-${he.value.tone}`,ee.value&&"canvas-guide-warning-state"]]),style:ye(he.value.style),"aria-hidden":"true"},[e("span",c1,k(he.value.label)+" · "+k(ge.value),1)],6)):F("",!0),I(s).activeTool!=="select"||j.value||D.value?(l(),i("div",p1,k(D.value?"Drop block to insert it here":j.value?"Drop image to insert it on this slide":`Click anywhere to add ${I(s).activeTool}`),1)):F("",!0),C.value&&ae.value?(l(),i("div",{key:6,class:"selection-marquee",style:ye({left:ae.value.x+"px",top:ae.value.y+"px",width:ae.value.width+"px",height:ae.value.height+"px"})},null,4)):F("",!0)],36)],6),e("div",v1,[e("button",{class:"bar-btn",onClick:It},"Add page"),e("button",{class:"bar-btn icon",onClick:At,disabled:a.value<=0},"◀",8,f1),e("span",m1,k(a.value+1)+" / "+k(B.value.length),1),e("button",{class:"bar-btn icon",onClick:Et,disabled:a.value>=B.value.length-1},"▶",8,g1),e("span",null,k(ie.value)+" × "+k(W.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,k(((Q=z.value.elements)==null?void 0:Q.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:J(["playback-badge",`playback-badge-${U.value.tone}`])},k(U.value.label),3),I(s).hasSelection?(l(),i("span",b1,"· "+k(I(s).selectedElementIds.length)+" selected",1)):F("",!0),I(s).multiSelection?(l(),i(Z,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=V=>Me("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=V=>Me("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=V=>Me("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=V=>Me("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=V=>Me("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=V=>Me("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=V=>Me("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=V=>Me("distribute-vertical"))},"Space V")],64)):F("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=V=>I(s).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",s1,[(l(),i("svg",r1,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),Ye(el,{to:"body"},[je.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:ye({left:je.value.x+"px",top:je.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Ct},"Duplicate"),e("button",{class:"ctx-item",onClick:St},"Bring Forward"),e("button",{class:"ctx-item",onClick:pt},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:$t},"Delete")],4)):F("",!0)]))],512)}}},h1=Je(y1,[["__scopeId","data-v-5e72a84f"]]),x1={class:"ai-panel"},w1={class:"ai-mode-tabs"},k1=["onClick"],C1={class:"ai-content"},$1={class:"form-group"},S1={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},I1={key:0,class:"form-group"},A1={key:1,class:"form-group"},E1={class:"layout-label-row"},T1={class:"layout-current-hint"},M1={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},P1=["onClick"],N1={class:"layout-preset-title"},B1={class:"layout-preset-hint"},z1={key:2,class:"form-group"},_1={key:3,class:"form-group"},L1={class:"layout-label-row"},j1={class:"layout-current-hint"},D1={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},q1={key:4,class:"form-group"},R1={class:"layout-label-row"},O1={class:"layout-current-hint"},F1={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},U1=["onClick"],V1={class:"layout-preset-title"},G1={class:"layout-preset-hint"},W1={class:"form-group"},H1={class:"form-group"},Y1={class:"prompt-label-row"},Q1={key:1,class:"prompt-auto-badge"},J1={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},X1={key:6,class:"selected-source-card"},K1={class:"result-header"},Z1={class:"source-count-badge"},ef={class:"selected-source-preview"},tf={class:"selected-source-actions"},of=["disabled"],nf=["disabled"],lf={key:0,class:"spinner"},af={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sf={key:7,class:"creative-options-wrap"},rf={class:"result-header"},df={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},uf={key:1,class:"creative-options-list"},cf={class:"creative-title"},pf={class:"creative-angle"},vf=["onClick"],ff={class:"form-group"},mf={class:"quiz-config-row"},gf={class:"form-group",style:{flex:"1"}},bf={class:"form-group",style:{flex:"1"}},yf={class:"form-group"},hf={class:"qtype-btns"},xf=["onClick"],wf={class:"qtype-icon"},kf={class:"form-group"},Cf={class:"form-group"},$f={class:"prompt-label-row"},Sf={key:1,class:"prompt-auto-badge"},If=["disabled"],Af={key:0,class:"spinner"},Ef={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Tf={key:0,class:"quiz-results"},Mf={class:"quiz-results-header"},Pf={class:"form-label"},Nf={class:"quiz-header-actions"},Bf={class:"regen-row"},zf=["disabled"],_f={key:0,class:"spinner spinner-sm"},Lf={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},jf=["disabled"],Df={class:"quiz-card-header"},qf={class:"quiz-card-check"},Rf=["onUpdate:modelValue"],Of={class:"q-num"},Ff={class:"q-badges"},Uf={class:"badge type-badge"},Vf={class:"q-question"},Gf={class:"q-options"},Wf={class:"q-option-letter"},Hf={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Yf={key:0,class:"q-explanation"},Qf=["disabled"],Jf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xf=["disabled"],Kf={key:0,class:"spinner"},Zf={key:0,class:"selected-text-preview"},em={class:"text-preview"},tm={key:1,class:"ai-hint"},om={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},nm=["disabled"],lm={key:0,class:"spinner"},im={key:0,class:"selected-text-preview"},am={class:"text-preview"},sm={key:1,class:"ai-hint"},rm={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},dm=["disabled"],um={key:0,class:"spinner"},cm={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},pm={class:"result-header"},vm={class:"result-actions"},fm=["disabled"],mm={class:"textarea result-display"},gm={key:0,class:"demo-notice",style:{"margin-bottom":"var(--space-3)"}},bm={key:1,class:"ai-error",style:{"margin-bottom":"var(--space-3)"}},ym={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hm=["disabled"],xm={key:0,class:"spinner"},wm={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},km={class:"textarea result-display",style:{color:"var(--color-primary)"}},Cm={key:6,class:"ai-settings"},$m={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Sm=["value"],Im={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Am=["value","placeholder"],Em={class:"form-hint"},Tm={key:0,class:"demo-notice"},Mm={key:1,class:"demo-notice"},Pm={key:7,class:"result-area"},Nm={class:"result-header"},Bm={class:"result-pre"},zm={class:"result-actions"},_m=["disabled"],Lm={key:8,class:"ai-error"},jm={__name:"AIAssistant",setup(A){const s=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'}],d={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(r,n="classic"){const v=String(r||n||"classic").trim().toLowerCase();return s.some(P=>P.id===v)?v:n}function p(r,n=""){return String(r??n).replace(/^\s*[-•]\s*/,"").trim()||n}function h(r){return(Array.isArray(r)?r:typeof r=="string"?r.split(`
`):[]).map(v=>p(v)).filter(Boolean)}function x(r,n,v){const P=[...r];for(;P.length<n;)P.push(v(P.length));return P.slice(0,n)}function f(r,n){const v=Array.isArray(r)?r.map((y,se)=>({title:p(y==null?void 0:y.title,`Card ${se+1}`),body:p((y==null?void 0:y.body)||(y==null?void 0:y.text)||(y==null?void 0:y.description),"Add supporting detail.")})).filter(y=>y.title||y.body):[],P=n.map((y,se)=>({title:`Point ${se+1}`,body:y}));return x(v.length?v:P,3,y=>({title:`Point ${y+1}`,body:"Add supporting detail."}))}function M(r,n){const v=h(r==null?void 0:r.leftPoints),P=h(r==null?void 0:r.rightPoints),y=n.slice(0,Math.max(1,Math.ceil(n.length/2))),se=n.slice(Math.max(1,Math.ceil(n.length/2)));return{leftTitle:p(r==null?void 0:r.leftTitle,"Option A"),leftPoints:x(v.length?v:y,3,Pe=>`Left point ${Pe+1}`),rightTitle:p(r==null?void 0:r.rightTitle,"Option B"),rightPoints:x(P.length?P:se,3,Pe=>`Right point ${Pe+1}`)}}function le(r,n){const v=Array.isArray(r)?r.map((y,se)=>({value:p(y==null?void 0:y.value,`${se+1}`),label:p(y==null?void 0:y.label,`Metric ${se+1}`)})).filter(y=>y.value||y.label):[],P=n.map((y,se)=>{const[Pe,...Ze]=y.split(/[:\-]/);return{value:p(Pe,`${se+1}`),label:p(Ze.join(" ").trim(),y)}});return x(v.length?v:P,3,y=>({value:`${y+1}`,label:`Metric ${y+1}`}))}function ie(r,n){const v=Array.isArray(r)?r.map((y,se)=>({title:p(y==null?void 0:y.title,`Phase ${se+1}`),detail:p((y==null?void 0:y.detail)||(y==null?void 0:y.description),"Explain the milestone.")})).filter(y=>y.title||y.detail):[],P=n.map((y,se)=>({title:`Phase ${se+1}`,detail:y}));return x(v.length?v:P,4,y=>({title:`Phase ${y+1}`,detail:"Explain the milestone."}))}function W(r,n){const v=Array.isArray(r)?r.map((y,se)=>({question:p(y==null?void 0:y.question,`Question ${se+1}?`),answer:p(y==null?void 0:y.answer,"Add the short answer here.")})).filter(y=>y.question||y.answer):[],P=n.map((y,se)=>({question:`Question ${se+1}?`,answer:y}));return x(v.length?v:P,3,y=>({question:`Question ${y+1}?`,answer:"Add the short answer here."}))}function ge(r,n){const v=Array.isArray(r)?r.map((y,se)=>({title:p(y==null?void 0:y.title,`Step ${se+1}`),detail:p((y==null?void 0:y.detail)||(y==null?void 0:y.description),"Add the step detail here.")})).filter(y=>y.title||y.detail):[],P=n.map((y,se)=>({title:`Step ${se+1}`,detail:y}));return x(v.length?v:P,3,y=>({title:`Step ${y+1}`,detail:"Add the step detail here."}))}const z=gl(),B=it(),a=at(),T=E(()=>z.apiProvider==="gemini"?"Gemini":"OpenAI"),L=E(()=>z.apiProvider==="gemini"?"AIza...":"sk-..."),H=E(()=>z.apiProvider==="gemini"?"Gemini API keys from Google AI Studio work for text features on the free tier. We provide free image generation via Pollinations.ai when Gemini is selected. The key is stored locally in your browser and never sent to our servers.":"Key is stored locally in your browser. It is never sent to our servers."),m=_("generate"),U=_(""),ne=_(""),K=_("");Qe(m,()=>{K.value=""}),Qe(()=>B.aiPanelMode,r=>{r&&(m.value=r)},{immediate:!0});const xe=_(4),R=_("general"),G=_("Spanish"),ce=_(""),be=_(""),oe=_(""),we=_(!1),C=_("single"),j=_("classic"),D=_("mixed"),Y=_(5),he=_("slide"),ze=_([]),Se=_(""),Le=E(()=>s.find(r=>r.id===j.value)||s[0]),ee=E(()=>{const r=ne.value.trim()||"[your topic]";if(C.value==="deck"){let P=`Create a complete ${Y.value}-slide learning deck about "${r}".`;return be.value.trim()&&(P+=`
Additional context: ${be.value.trim()}`),P+=`
Deck layout strategy: ${D.value}`,D.value==="single"?P+=`
Use the ${j.value} layout for every slide.`:P+=`
Mix layouts across the deck when appropriate.`,P+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process" }] }`,P+=`
Make each slide distinct, logically sequenced, and specific to "${r}".`,P}let v=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[R.value]||"educational slide"} about "${r}".`;return be.value.trim()&&(v+=`
Additional context: ${be.value.trim()}`),v+=`
Layout mode: ${j.value}`,v+=`
Layout instruction: ${Le.value.promptHint}`,v+=`
Return ONLY valid JSON matching this shape: ${Le.value.schema}`,v+=`
Make all content specific to "${r}" — no generic placeholders.`,v});Qe(ee,r=>{we.value||(oe.value=r)},{immediate:!0});function ve(){oe.value=ee.value,we.value=!1}const ae=_(""),fe=_("intermediate"),Te=_("multiple-choice"),me=_(""),S=_([]),$=_(""),q=_(!1),g=E(()=>{const r=ae.value.trim()||"[your topic]",n={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},v={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let P=`Generate ${xe.value} ${n[fe.value]} ${v[Te.value]} quiz questions about "${r}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return me.value.trim()&&(P+=`
Learning objective: ${me.value.trim()}`),P});Qe(g,r=>{q.value||($.value=r)},{immediate:!0});function Ge(){$.value=g.value,q.value=!1}const De=E(()=>a.getProject(B.projectId)),_e=E(()=>{var r,n;return(n=(r=De.value)==null?void 0:r.slides)==null?void 0:n.find(v=>v.id===B.currentSlideId)}),ke=E(()=>{var r,n;return B.selectedElementId?(n=(r=_e.value)==null?void 0:r.elements)==null?void 0:n.find(v=>v.id===B.selectedElementId):null}),Me=E(()=>{var n;const r=new Set(B.selectedElementIds);return(((n=_e.value)==null?void 0:n.elements)||[]).filter(v=>{var P;return r.has(v.id)&&typeof((P=v==null?void 0:v.content)==null?void 0:P.text)=="string"&&v.content.text.trim()})}),st=E(()=>Me.value.map(r=>r.content.text.trim()).filter(Boolean).join(`

`));async function ot(){if(!ne.value.trim()&&!oe.value.trim())return;if(K.value="",ze.value=[],Se.value="",C.value==="deck"){const n=await z.generateSlideDeck(ne.value,Y.value,{objective:be.value,customPrompt:oe.value,layoutStrategy:D.value,layoutMode:j.value});if(n!=null&&n.length){const v=n.map(P=>nt(P));K.value=JSON.stringify({slides:v},null,2),Ie(v,{replaceGenerated:!0})}return}if(he.value==="options"){await Ue();return}const r=await z.generateSlideContent(ne.value,R.value,be.value,oe.value,{layoutMode:j.value});if(r){const n=nt(r);K.value=JSON.stringify(n,null,2),Ae(n,{replaceGenerated:!0})}}function nt(r){var y;const n=r&&typeof r=="object"?r:{},v=h(n.bullets),P=c(n.layout||((y=n.design)==null?void 0:y.layout),C.value==="deck"&&D.value==="mixed"?"classic":j.value);return{title:String(n.title||ne.value||"Untitled Slide").trim(),subtitle:String(n.subtitle||"").trim(),bullets:v,callout:String(n.callout||"").trim(),layout:P,cards:f(n.cards,v),comparison:M(n.comparison,v),metrics:le(n.metrics,v),timeline:ie(n.timeline,v),faqs:W(n.faqs,v),process:ge(n.process,v)}}function kt(r,n){var y,se,Pe;const v=(se=(y=a.getProject(r))==null?void 0:y.slides)==null?void 0:se.find(Ze=>Ze.id===n);if(!((Pe=v==null?void 0:v.elements)!=null&&Pe.length))return;v.elements.filter(Ze=>{var N;return((N=Ze.meta)==null?void 0:N.source)==="ai-content"}).map(Ze=>Ze.id).forEach(Ze=>{a.deleteElement(r,n,Ze)})}function rt(r,n,v,P){return a.addElement(r,n,v,{...P,meta:{...P.meta||{},source:"ai-content"}})}function je(r){const n=Al.find(P=>P.id===r);if(!n)return null;const v=El(JSON.parse(JSON.stringify(n)),r);return v.elements=v.elements.map(P=>({...P,meta:{...P.meta||{},source:"ai-content"}})),v}function ct(r,n){n&&r.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:n,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function Ke(r,n){if(!n)return;const v=Ot(r);r.elements.push({type:"text",x:0,y:v.height+18,width:Math.max(v.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${n}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function Ct(r){const n=Array.isArray(r)?r:[];if(!n.length)return{minX:40,minY:54,width:0,height:0};const v=Math.min(...n.map(Pe=>Number(Pe.x||0))),P=Math.min(...n.map(Pe=>Number(Pe.y||0))),y=Math.max(...n.map(Pe=>Number(Pe.x||0)+Number(Pe.width||0))),se=Math.max(...n.map(Pe=>Number(Pe.y||0)+Number(Pe.height||0)));return{minX:v,minY:P,width:Math.max(0,y-v),height:Math.max(0,se-P)}}function $t(r,n){var se;const v=a.getProject(r),P=Ot(n),y=Number(((se=v==null?void 0:v.settings)==null?void 0:se.slideWidth)||960);return{x:Math.max(40,Math.round((y-P.width)/2)),y:54}}function St(r){const n=je(d.cards);if(!n)return null;const v=r.cards;return n.elements[0].content.text=r.title,n.elements[1].content.text=r.subtitle||r.callout||"Use the three cards to frame the main ideas.",v.forEach((P,y)=>{n.elements[5+y].content.text=P.title,n.elements[8+y].content.text=P.body}),r.callout&&r.subtitle&&Ke(n,r.callout),n}function pt(r){const n=je(d.comparison);return n?(n.elements[0].content.text=r.title,n.elements[3].content.text=r.comparison.leftTitle,n.elements[4].content.text=r.comparison.rightTitle,n.elements[5].content={...n.elements[5].content,text:r.comparison.leftPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},n.elements[6].content={...n.elements[6].content,text:r.comparison.rightPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},ct(n,r.subtitle),Ke(n,r.callout),n):null}function It(r){const n=je(d.metrics);return n?(n.elements[0].content.text=r.title,r.metrics.forEach((v,P)=>{n.elements[4+P].content.text=v.value,n.elements[7+P].content.text=v.label}),ct(n,r.subtitle),Ke(n,r.callout),n):null}function At(r){const n=je(d.timeline);return n?(n.elements[0].content.text=r.title,r.timeline.forEach((v,P)=>{n.elements[6+P].content={...n.elements[6+P].content,text:`${v.title}
${v.detail}`,fontSize:16,lineHeight:1.35}}),ct(n,r.subtitle),Ke(n,r.callout),n):null}function Et(r){const n=je(d.faq);return n?(n.elements[0].content.text=r.title,r.faqs.forEach((v,P)=>{n.elements[4+P].content={...n.elements[4+P].content,text:`${v.question}
${v.answer}`,fontSize:16,lineHeight:1.35},n.elements[4+P].height=44}),ct(n,r.subtitle),Ke(n,r.callout),n):null}function b(r){const n=je(d.process);return n?(n.elements[0].content.text=r.title,r.process.forEach((v,P)=>{n.elements[8+P].content.text=v.title,n.elements[11+P].content.text=v.detail}),ct(n,r.subtitle),Ke(n,r.callout),n):null}function w(r){switch(r.layout){case"cards":return St(r);case"comparison":return pt(r);case"metrics":return It(r);case"timeline":return At(r);case"faq":return Et(r);case"process":return b(r);default:return null}}function Q(r,n,v){var P;if(v.title&&(a.updateSlide(r,n,{title:v.title}),rt(r,n,"heading",{x:60,y:40,width:840,height:80,content:{text:v.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),v.subtitle&&rt(r,n,"text",{x:60,y:130,width:840,height:50,content:{text:v.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(P=v.bullets)!=null&&P.length){const y=v.bullets.map(se=>`• ${se}`).join(`
`);rt(r,n,"text",{x:60,y:v.subtitle?200:150,width:840,height:200,content:{text:y,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}v.callout&&(rt(r,n,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),rt(r,n,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${v.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function V(r,n,v,{replaceGenerated:P=!1,origin:y=null}={}){if(!r||!n)return;P&&kt(r,n);const se=w(v);if(a.updateSlide(r,n,{title:v.title||"Untitled Slide"}),se){const Pe=y||$t(r,se);a.insertContentBlock(r,n,se,Pe)}else Q(r,n,v)}function Ie(r,{replaceGenerated:n=!1}={}){if(!B.currentSlideId)return;const v=B.projectId;if(!v||!Array.isArray(r)||!r.length)return;r.map(y=>nt(y)).forEach(y=>{const se=a.addSlide(v);se&&V(v,se.id,y,{replaceGenerated:n})})}function Ae(r=null,{replaceGenerated:n=!1}={}){if(!B.currentSlideId)return;let v=r;if(!v){if(!K.value)return;try{v=JSON.parse(K.value)}catch(Pe){console.warn("Could not parse AI content:",Pe);return}}const P=nt(v),y=B.projectId,se=B.currentSlideId;!y||!se||V(y,se,P,{replaceGenerated:n})}function Re(){if(K.value){if(C.value==="deck"){try{const r=JSON.parse(K.value),n=Array.isArray(r)?r:r==null?void 0:r.slides;if(!Array.isArray(n)||!n.length)return;Ie(n,{replaceGenerated:!0})}catch{return}return}Ae()}}async function Ue(){const r=ne.value.trim()||"[your topic]",n=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${R.value}" slide about "${r}" using a ${j.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,v=await z.generate(n,{type:"creativeOptions",topic:r,slideType:R.value});if(v)try{const P=JSON.parse(v.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(P))throw new Error("Options must be an array");ze.value=P.slice(0,3).map((y,se)=>({title:String((y==null?void 0:y.title)||`Option ${se+1}`),angle:String((y==null?void 0:y.angle)||""),prompt:String((y==null?void 0:y.prompt)||"")})).filter(y=>y.prompt.trim()),ze.value.length||(Se.value="No usable creative options were returned. Try generating again.")}catch{Se.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function re(r){r!=null&&r.prompt&&(oe.value=r.prompt,we.value=!0,he.value="slide",await ot())}async function $e(){if(!st.value.trim()||!B.projectId||!B.currentSlideId)return;const r=await z.transformSourceTextToSlideContent(st.value,{topic:ne.value,slideType:R.value,description:be.value,layoutMode:j.value,customPrompt:oe.value});if(!r)return;const n=nt(r),v=Ct(Me.value),P={x:Math.max(24,Math.round(v.minX)),y:Math.max(24,Math.round(v.minY))};Me.value.forEach(y=>{a.deleteElement(B.projectId,B.currentSlideId,y.id)}),K.value=JSON.stringify(n,null,2),V(B.projectId,B.currentSlideId,n,{origin:P})}async function He(r=!1){if(!ae.value.trim()&&!$.value.trim())return;r||(S.value=[]);const n=await z.generateQuiz(ae.value,xe.value,{difficulty:fe.value,questionType:Te.value,objective:me.value,customPrompt:$.value});if(n)if(r){const v=new Set(S.value.map(y=>y.question)),P=n.filter(y=>!v.has(y.question)).map(y=>({...y,_selected:!0}));S.value=[...S.value,...P]}else S.value=n.map(v=>({...v,_selected:!0}))}async function Fe(){const r=S.value.filter(v=>v._selected);if(!r.length)return;const n=B.projectId;r.forEach((v,P)=>{const y=a.addSlide(n);if(y){a.addElement(n,y.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:v.question||"Untitled Question",options:Array.isArray(v.options)?v.options:["True","False"],correctIndex:typeof v.correctIndex=="number"?v.correctIndex:0,explanation:v.explanation||""}});const se=typeof v.question=="string"?v.question:"Quiz";a.updateSlide(n,y.id,{title:`Q${P+1}: ${se.slice(0,40)}…`})}}),S.value=[]}function Ne(r){S.value.forEach(n=>n._selected=r)}async function Ve(){if(!ce.value.trim())return;const r=await z.generateVoiceoverScript(ce.value);r&&(K.value=r)}async function mt(){var v,P;const r=(P=(v=ke.value)==null?void 0:v.content)==null?void 0:P.text;if(!r)return;const n=await z.generateTranslation(r,G.value);n&&(K.value=n)}async function vt(){!K.value||!ke.value||a.updateElement(B.projectId,B.currentSlideId,ke.value.id,{content:{...ke.value.content,text:K.value}})}const Xe=_(""),ft=_(!1);function Tt(r){return String(r||"").replace(/```(json)?\n?/gi," ").replace(/```/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim().slice(0,220)}function Mt(r,n){return new Promise((v,P)=>{const y=window.setTimeout(()=>{P(new Error("Timed out"))},n);Promise.resolve(r).then(se=>{window.clearTimeout(y),v(se)}).catch(se=>{window.clearTimeout(y),P(se)})})}function Pt(r){const n=String(r||"").trim(),v=n.toLowerCase(),P=T.value;return n?v.includes("billing hard limit")||v.includes("billing")||v.includes("quota")||v.includes("insufficient_quota")?z.apiProvider==="gemini"?"Gemini image generation is being rejected by Google because this project is still on the free tier. Gemini Developer API image models require a billing-enabled project, so you need to enable billing in AI Studio or switch providers for image generation.":`Your ${P} account cannot generate images right now because its billing or quota limit has been reached. Update billing or wait for quota reset, then try again.`:z.apiProvider==="gemini"&&(v.includes("resource exhausted")||v.includes("free tier")||v.includes("generativelanguage.googleapis.com"))?"Gemini image generation is not available to this free-tier project. Enable billing for the Gemini project in AI Studio to use Gemini image models.":v.includes("invalid api key")||v.includes("incorrect api key")||v.includes("unauthorized")?`The ${P} API key appears invalid for image generation. Check the key in API settings and try again.`:v.includes("rate limit")||v.includes("too many requests")?`${P} rate-limited the image request. Wait a moment and try again.`:`${P} image generation failed: ${n}`:`${P} image generation did not return an image. Try a simpler prompt or try again in a moment.`}async function jt(){if(Xe.value.trim()){ft.value=!0,K.value="Preparing image prompt...";try{if(!z.apiKey&&z.apiProvider!=="gemini"){K.value=`AI image generation requires a ${T.value} API key in API settings. No fallback image was inserted.`;return}let r=Xe.value;try{const v=await Mt(z.generateImagePrompt(Xe.value),2200);v&&(r=v.replace(/```(json)?\n?/g,"").trim())}catch{r=Xe.value}r=Tt(r)||Tt(Xe.value),K.value="Generating image and inserting it on the slide...";const n=await Mt(z.generateImageAsset(r),2e4).catch(()=>null);if(!n){K.value=Pt(z.lastError);return}a.addElement(B.projectId,B.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:n,fallbackSrcs:[],alt:Xe.value.trim()||"AI generated image",sourceType:`${z.apiProvider}-image`,objectFit:"cover"}}),K.value=`AI image added to slide using ${T.value} image generation.`}catch(r){K.value=Pt((r==null?void 0:r.message)||z.lastError)}finally{ft.value=!1}}}async function Dt(){var n,v;if(!((v=(n=ke.value)==null?void 0:n.content)!=null&&v.text))return;const r=await z.improveText(ke.value.content.text,U.value||"Make it clearer and more engaging");r&&(K.value=r)}async function ht(){!K.value||!ke.value||a.updateElement(B.projectId,B.currentSlideId,ke.value.id,{content:{...ke.value.content,text:K.value}})}async function dt(){if(!U.value.trim())return;const r=await z.generate(U.value);r&&(K.value=r)}return(r,n)=>{var v,P,y,se,Pe,Ze;return l(),i("div",x1,[e("div",w1,[(l(),i(Z,null,ue([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],N=>e("button",{key:N.id,class:J(["ai-mode-btn",m.value===N.id&&"active"]),onClick:tt=>m.value=N.id},k(N.label),11,k1)),64))]),e("div",C1,[m.value==="generate"?(l(),i(Z,{key:0},[e("div",$1,[n[36]||(n[36]=e("label",{class:"form-label"},[X("Topic / Subject "),e("span",{class:"required"},"*")],-1)),de(e("input",{"onUpdate:modelValue":n[0]||(n[0]=N=>ne.value=N),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:Jn(ot,["enter"])},null,544),[[Ce,ne.value]])]),e("div",S1,[e("button",{class:J(["output-mode-btn",C.value==="single"&&"active"]),onClick:n[1]||(n[1]=N=>C.value="single")},"Single Slide",2),e("button",{class:J(["output-mode-btn",C.value==="deck"&&"active"]),onClick:n[2]||(n[2]=N=>C.value="deck")},"Slide Deck",2)]),C.value==="single"?(l(),i("div",I1,[n[38]||(n[38]=e("label",{class:"form-label"},"Slide Type",-1)),de(e("select",{"onUpdate:modelValue":n[3]||(n[3]=N=>R.value=N),class:"select"},[...n[37]||(n[37]=[et('<option value="general" data-v-09e78b1e>General</option><option value="intro" data-v-09e78b1e>Introduction</option><option value="overview" data-v-09e78b1e>Overview</option><option value="concept" data-v-09e78b1e>Concept Explanation</option><option value="example" data-v-09e78b1e>Example / Case Study</option><option value="summary" data-v-09e78b1e>Summary</option><option value="callout" data-v-09e78b1e>Key Takeaway</option>',7)])],512),[[Bt,R.value]])])):F("",!0),C.value==="single"?(l(),i("div",A1,[e("div",E1,[n[39]||(n[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",T1,k(Le.value.hint),1)]),e("div",M1,[(l(),i(Z,null,ue(s,N=>e("button",{key:N.id,class:J(["layout-preset-card",j.value===N.id&&"active"]),onClick:tt=>j.value=N.id},[e("span",N1,k(N.label),1),e("span",B1,k(N.hint),1)],10,P1)),64))])])):(l(),i("div",z1,[n[40]||(n[40]=e("label",{class:"form-label"},"Number of Slides",-1)),de(e("input",{"onUpdate:modelValue":n[4]||(n[4]=N=>Y.value=N),class:"input",type:"number",min:"1",max:"20"},null,512),[[Ce,Y.value,void 0,{number:!0}]]),n[41]||(n[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),C.value==="deck"?(l(),i("div",_1,[e("div",L1,[n[42]||(n[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",j1,k(D.value==="mixed"?"AI can vary layout by slide":`All slides use ${Le.value.label}`),1)]),e("div",D1,[e("button",{class:J(["output-mode-btn",D.value==="mixed"&&"active"]),onClick:n[5]||(n[5]=N=>D.value="mixed")},"Mixed Layouts",2),e("button",{class:J(["output-mode-btn",D.value==="single"&&"active"]),onClick:n[6]||(n[6]=N=>D.value="single")},"Consistent Layout",2)])])):F("",!0),C.value==="deck"&&D.value==="single"?(l(),i("div",q1,[e("div",R1,[n[43]||(n[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",O1,k(Le.value.hint),1)]),e("div",F1,[(l(),i(Z,null,ue(s,N=>e("button",{key:`deck-${N.id}`,class:J(["layout-preset-card",j.value===N.id&&"active"]),onClick:tt=>j.value=N.id},[e("span",V1,k(N.label),1),e("span",G1,k(N.hint),1)],10,U1)),64))])])):F("",!0),e("div",W1,[n[44]||(n[44]=e("label",{class:"form-label"},[X("Description "),e("span",{class:"optional"},"(optional)")],-1)),de(e("textarea",{"onUpdate:modelValue":n[7]||(n[7]=N=>be.value=N),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[Ce,be.value]])]),e("div",H1,[e("div",Y1,[n[46]||(n[46]=e("label",{class:"form-label"},"AI Prompt",-1)),we.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:ve,title:"Reset to auto-generated prompt"},[...n[45]||(n[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),X(" Reset ",-1)])])):(l(),i("span",Q1,"auto"))]),de(e("textarea",{"onUpdate:modelValue":n[8]||(n[8]=N=>oe.value=N),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:n[9]||(n[9]=N=>we.value=!0),spellcheck:"false"},null,544),[[Ce,oe.value]]),n[47]||(n[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),C.value==="single"?(l(),i("div",J1,[e("button",{class:J(["output-mode-btn",he.value==="slide"&&"active"]),onClick:n[10]||(n[10]=N=>he.value="slide")},"Show on Slide",2),e("button",{class:J(["output-mode-btn",he.value==="options"&&"active"]),onClick:n[11]||(n[11]=N=>he.value="options")},"Creative Options",2)])):F("",!0),C.value==="single"&&st.value?(l(),i("div",X1,[e("div",K1,[n[48]||(n[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",Z1,k(Me.value.length)+" selected",1)]),e("div",ef,k(st.value),1),e("div",tf,[e("button",{class:"btn btn-secondary btn-sm",disabled:I(z).isGenerating,onClick:$e}," Transform Selection to "+k(Le.value.label),9,of)])])):F("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!ne.value.trim()&&!oe.value.trim()||C.value==="deck"&&(!Y.value||Y.value<1||Y.value>20),onClick:ot},[I(z).isGenerating?(l(),i("span",lf)):(l(),i("svg",af,[...n[49]||(n[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),X(" "+k(I(z).isGenerating?"Generating…":C.value==="deck"?K.value?`Regenerate ${Y.value} Slides`:`Generate ${Y.value} Slides`:he.value==="slide"?K.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,nf),C.value==="single"&&he.value==="options"&&(ze.value.length||Se.value)?(l(),i("div",sf,[e("div",rf,[n[50]||(n[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[12]||(n[12]=N=>{ze.value=[],Se.value=""})},"Clear")]),Se.value?(l(),i("div",df,[n[51]||(n[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),X(" "+k(Se.value),1)])):(l(),i("div",uf,[(l(!0),i(Z,null,ue(ze.value,(N,tt)=>(l(),i("article",{key:tt,class:"creative-option-card"},[e("h4",cf,k(N.title),1),e("p",pf,k(N.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:gt=>re(N)},"Use This Option",8,vf)]))),128))]))])):F("",!0)],64)):m.value==="quiz"?(l(),i(Z,{key:1},[e("div",ff,[n[52]||(n[52]=e("label",{class:"form-label"},[X("Quiz Topic "),e("span",{class:"required"},"*")],-1)),de(e("input",{"onUpdate:modelValue":n[13]||(n[13]=N=>ae.value=N),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:Jn(He,["enter"])},null,544),[[Ce,ae.value]])]),e("div",mf,[e("div",gf,[n[54]||(n[54]=e("label",{class:"form-label"},"Questions",-1)),de(e("select",{"onUpdate:modelValue":n[14]||(n[14]=N=>xe.value=N),class:"select"},[...n[53]||(n[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[Bt,xe.value,void 0,{number:!0}]])]),e("div",bf,[n[56]||(n[56]=e("label",{class:"form-label"},"Difficulty",-1)),de(e("select",{"onUpdate:modelValue":n[15]||(n[15]=N=>fe.value=N),class:"select"},[...n[55]||(n[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[Bt,fe.value]])])]),e("div",yf,[n[57]||(n[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",hf,[(l(),i(Z,null,ue([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],N=>e("button",{key:N.id,class:J(["qtype-btn",Te.value===N.id&&"active"]),onClick:tt=>Te.value=N.id},[e("span",wf,k(N.icon),1),e("span",null,k(N.label),1)],10,xf)),64))])]),e("div",kf,[n[58]||(n[58]=e("label",{class:"form-label"},[X("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),de(e("input",{"onUpdate:modelValue":n[16]||(n[16]=N=>me.value=N),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[Ce,me.value]])]),e("div",Cf,[e("div",$f,[n[60]||(n[60]=e("label",{class:"form-label"},"AI Prompt",-1)),q.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Ge,title:"Reset to auto-generated prompt"},[...n[59]||(n[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),X(" Reset ",-1)])])):(l(),i("span",Sf,"auto"))]),de(e("textarea",{"onUpdate:modelValue":n[17]||(n[17]=N=>$.value=N),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:n[18]||(n[18]=N=>q.value=!0),spellcheck:"false"},null,544),[[Ce,$.value]]),n[61]||(n[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!ae.value.trim()&&!$.value.trim(),onClick:n[19]||(n[19]=N=>He(!1))},[I(z).isGenerating?(l(),i("span",Af)):(l(),i("svg",Ef,[...n[62]||(n[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),X(" "+k(I(z).isGenerating?"Generating…":`Generate ${xe.value} Questions`),1)],8,If),S.value.length?(l(),i("div",Tf,[e("div",Mf,[e("span",Pf,k(S.value.length)+" Questions",1),e("div",Nf,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[20]||(n[20]=N=>Ne(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:n[21]||(n[21]=N=>Ne(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:n[22]||(n[22]=N=>S.value=[])},"Clear")])]),e("div",Bf,[e("button",{class:"btn btn-secondary regen-btn",disabled:I(z).isGenerating,onClick:n[23]||(n[23]=N=>He(!1)),title:"Replace all questions with a new set"},[I(z).isGenerating?(l(),i("span",_f)):(l(),i("svg",Lf,[...n[63]||(n[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),n[64]||(n[64]=X(" Regenerate ",-1))],8,zf),e("button",{class:"btn btn-ghost regen-btn",disabled:I(z).isGenerating,onClick:n[24]||(n[24]=N=>He(!0)),title:"Generate more and append to current list"},[...n[65]||(n[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),X(" Add More ",-1)])],8,jf)]),(l(!0),i(Z,null,ue(S.value,(N,tt)=>(l(),i("div",{key:tt,class:J(["quiz-card",{deselected:!N._selected}])},[e("div",Df,[e("label",qf,[de(e("input",{type:"checkbox","onUpdate:modelValue":gt=>N._selected=gt},null,8,Rf),[[_t,N._selected]]),e("span",Of,"Q"+k(tt+1),1)]),e("div",Ff,[e("span",{class:J(["badge difficulty-badge",N.difficulty])},k(N.difficulty),3),e("span",Uf,k(N.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",Vf,k(N.question),1),e("div",Gf,[(l(!0),i(Z,null,ue(N.options,(gt,xt)=>(l(),i("div",{key:xt,class:J(["q-option",xt===N.correctIndex&&"correct"])},[e("span",Wf,k(["A","B","C","D"][xt]),1),e("span",null,k(gt),1),xt===N.correctIndex?(l(),i("svg",Hf,[...n[66]||(n[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):F("",!0)],2))),128))]),N.explanation?(l(),i("div",Yf,[n[67]||(n[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),X(" "+k(N.explanation),1)])):F("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!S.value.filter(N=>N._selected).length,onClick:Fe},[n[68]||(n[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),X(" Add "+k(S.value.filter(N=>N._selected).length)+" Selected as Quiz Slides ",1)],8,Qf)])):F("",!0)],64)):m.value==="voiceover"?(l(),i(Z,{key:2},[e("div",Jf,[n[69]||(n[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),de(e("textarea",{"onUpdate:modelValue":n[25]||(n[25]=N=>ce.value=N),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[Ce,ce.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating,onClick:Ve},[I(z).isGenerating?(l(),i("span",Kf)):F("",!0),X(" "+k(I(z).isGenerating?"Generating…":"Generate Script"),1)],8,Xf)],64)):m.value==="improve"?(l(),i(Z,{key:3},[(P=(v=ke.value)==null?void 0:v.content)!=null&&P.text?(l(),i("div",Zf,[n[70]||(n[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",em,k(ke.value.content.text.slice(0,120))+k(ke.value.content.text.length>120?"…":""),1)])):(l(),i("p",tm,"Select a text element on the canvas to improve it.")),e("div",om,[n[71]||(n[71]=e("label",{class:"form-label"},"Instruction",-1)),de(e("input",{"onUpdate:modelValue":n[26]||(n[26]=N=>U.value=N),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[Ce,U.value]])]),n[72]||(n[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),de(e("textarea",{"onUpdate:modelValue":n[27]||(n[27]=N=>U.value=N),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[Ce,U.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!ke.value&&!U.value,onClick:n[28]||(n[28]=N=>ke.value?Dt():dt())},[I(z).isGenerating?(l(),i("span",lm)):F("",!0),X(" "+k(I(z).isGenerating?"Processing…":"Generate"),1)],8,nm)],64)):m.value==="translate"?(l(),i(Z,{key:4},[(se=(y=ke.value)==null?void 0:y.content)!=null&&se.text?(l(),i("div",im,[n[73]||(n[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",am,k(ke.value.content.text.slice(0,120))+k(ke.value.content.text.length>120?"…":""),1)])):(l(),i("p",sm,"Select a text element on the canvas to translate it.")),e("div",rm,[n[75]||(n[75]=e("label",{class:"form-label"},"Target Language",-1)),de(e("select",{"onUpdate:modelValue":n[29]||(n[29]=N=>G.value=N),class:"select"},[...n[74]||(n[74]=[et('<option value="Spanish" data-v-09e78b1e>Spanish</option><option value="French" data-v-09e78b1e>French</option><option value="German" data-v-09e78b1e>German</option><option value="Italian" data-v-09e78b1e>Italian</option><option value="Portuguese" data-v-09e78b1e>Portuguese</option><option value="Chinese (Simplified)" data-v-09e78b1e>Chinese (Simplified)</option><option value="Japanese" data-v-09e78b1e>Japanese</option><option value="Arabic" data-v-09e78b1e>Arabic</option>',8)])],512),[[Bt,G.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!((Ze=(Pe=ke.value)==null?void 0:Pe.content)!=null&&Ze.text),onClick:mt},[I(z).isGenerating?(l(),i("span",um)):F("",!0),X(" "+k(I(z).isGenerating?"Translating…":"Translate Text"),1)],8,dm),K.value?(l(),i("div",cm,[e("div",pm,[n[76]||(n[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",vm,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[30]||(n[30]=N=>r.navigator.clipboard.writeText(K.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:vt,disabled:!ke.value},"Apply",8,fm)])]),e("div",mm,k(K.value),1)])):F("",!0)],64)):m.value==="image"?(l(),i(Z,{key:5},[n[81]||(n[81]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),I(z).apiProvider==="gemini"?(l(),i("div",gm,[...n[77]||(n[77]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),X(" Gemini text features work on the free tier, but Gemini image generation on the Developer API usually needs billing enabled for the project. ",-1)])])):F("",!0),I(z).apiKey?F("",!0):(l(),i("div",bm,[n[78]||(n[78]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),X(" AI image generation needs a "+k(T.value)+" API key in API settings. ",1)])),e("div",ym,[n[79]||(n[79]=e("label",{class:"form-label"},"Image Description",-1)),de(e("textarea",{"onUpdate:modelValue":n[31]||(n[31]=N=>Xe.value=N),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[Ce,Xe.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:ft.value||I(z).isGenerating||!Xe.value||!I(z).apiKey,onClick:jt},[ft.value||I(z).isGenerating?(l(),i("span",xm)):F("",!0),X(" "+k(ft.value||I(z).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,hm),K.value?(l(),i("div",wm,[n[80]||(n[80]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",km,k(K.value),1)])):F("",!0)],64)):m.value==="settings"?(l(),i("div",Cm,[e("div",$m,[n[83]||(n[83]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:I(z).apiProvider,class:"select",onChange:n[32]||(n[32]=N=>I(z).setProvider(N.target.value))},[...n[82]||(n[82]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"gemini"},"Google Gemini (Free tier for text)",-1)])],40,Sm)]),e("div",Im,[n[84]||(n[84]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:I(z).apiKey,class:"input",placeholder:L.value,onChange:n[33]||(n[33]=N=>I(z).setApiKey(N.target.value))},null,40,Am),e("p",Em,k(H.value),1)]),I(z).apiProvider==="gemini"?(l(),i("div",Tm,[...n[85]||(n[85]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),X(" Gemini is enabled for content, quiz, voiceover, improve, and translate in this app. Gemini image generation may still require billing on the Google project. ",-1)])])):F("",!0),I(z).apiKey?F("",!0):(l(),i("div",Mm,[n[86]||(n[86]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),n[87]||(n[87]=X(" Running in ",-1)),n[88]||(n[88]=e("strong",null,"demo mode",-1)),X(" — sample responses only. Add your "+k(T.value)+" API key to use real AI generation. ",1)]))])):F("",!0),K.value&&m.value!=="settings"&&m.value!=="quiz"?(l(),i("div",Pm,[e("div",Nm,[n[89]||(n[89]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[34]||(n[34]=N=>K.value="")},"Clear")]),e("pre",Bm,k(K.value),1),e("div",zm,[m.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:Re},k(C.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):F("",!0),m.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:I(z).isGenerating,onClick:ot},[...n[90]||(n[90]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),X(" Regenerate ",-1)])],8,_m)):F("",!0),m.value==="improve"&&ke.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:ht}," Apply to Element ")):F("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:n[35]||(n[35]=N=>{var tt;return(tt=r.navigator.clipboard)==null?void 0:tt.writeText(K.value)})}," Copy ")])])):F("",!0),I(z).lastError?(l(),i("div",Lm,[n[91]||(n[91]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),X(" "+k(I(z).lastError),1)])):F("",!0)])])}}},Dm=Je(jm,[["__scopeId","data-v-09e78b1e"]]),qm={class:"theme-manager"},Rm={class:"panel-section"},Om={class:"presets-grid"},Fm=["title","onClick"],Um={class:"preset-preview"},Vm={class:"preset-name"},Gm={class:"panel-section"},Wm={class:"theme-fields"},Hm={class:"form-label"},Ym={class:"color-row"},Qm=["value","onInput"],Jm=["value","onChange"],Xm={class:"panel-section"},Km={class:"theme-field"},Zm=["value","placeholder"],eg={class:"chart-palette-preview"},tg={class:"panel-section"},og={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ng=["value"],lg=["value"],ig={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ag=["value"],sg=["value"],rg={class:"form-group"},dg=["value"],ug={class:"panel-section"},cg={class:"tp-chart-row"},pg={key:0,class:"apply-message success"},vg={key:1,class:"apply-message error"},fg={__name:"ThemeManager",setup(A){const s=it(),d=at(),c=E(()=>d.getProject(s.projectId)),p=E(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),h=E(()=>Xn(p.value)),x=_(""),f=_("");function M(a){d.updateProject(s.projectId,{theme:{...p.value,...a}})}const le=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],ie=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function W(a){M(a)}function ge(a,T){const L=a.content||{};return a.type==="text"?{content:{...L,fontFamily:T.fontFamily||L.fontFamily,color:T.textColor||L.color}}:a.type==="heading"?{content:{...L,fontFamily:T.headingFont||T.fontFamily||L.fontFamily,color:T.textColor||L.color}}:a.type==="shape"?{content:{...L,fillColor:T.secondaryColor||L.fillColor}}:a.type==="hotspot"?{content:{...L,bgColor:T.primaryColor||L.bgColor}}:a.type==="button"?{content:{...L,bgColor:T.primaryColor||L.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:T.fontFamily||L.fontFamily}}:a.type==="quiz"?{content:{...L,cardBgColor:T.bgColor||L.cardBgColor,questionColor:T.textColor||L.questionColor,accentColor:T.primaryColor||L.accentColor}}:a.type==="chart"?{content:{...L,...il(T)}}:null}function z(){M({chartPalette:""})}function B(){x.value="",f.value="";const a=s.projectId,T=c.value,L=p.value;if(!a||!T){f.value="No active project to apply theme.";return}const H=T.slides||[];let m=0;H.forEach(U=>{(U.backgroundType||"color")==="color"&&d.updateSlide(a,U.id,{backgroundType:"color",background:L.bgColor||U.background||"#ffffff"}),(U.elements||[]).forEach(ne=>{const K=ge(ne,L);K&&(d.updateElement(a,U.id,ne.id,K),m+=1)})}),x.value=`Applied theme to ${H.length} slide${H.length===1?"":"s"} and ${m} element${m===1?"":"s"}.`}return(a,T)=>(l(),i("div",qm,[e("div",Rm,[T[4]||(T[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",Om,[(l(),i(Z,null,ue(le,L=>e("div",{key:L.name,class:"preset-card",title:L.name,onClick:H=>W(L)},[e("div",Um,[e("div",{class:"pp-header",style:ye({background:L.primaryColor})},null,4),e("div",{class:"pp-body",style:ye({background:L.bgColor})},[e("div",{class:"pp-line",style:ye({background:L.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:ye({background:L.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:ye({background:L.secondaryColor})},null,4)]),e("span",Vm,k(L.name),1)],8,Fm)),64))])]),e("div",Gm,[T[5]||(T[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",Wm,[(l(),i(Z,null,ue({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(L,H)=>e("div",{class:"theme-field",key:H},[e("label",Hm,k(L),1),e("div",Ym,[e("input",{type:"color",value:p.value[H]||"#ffffff",class:"color-input-native",onInput:m=>M({[H]:m.target.value})},null,40,Qm),e("input",{value:p.value[H]||"",class:"input",onChange:m=>M({[H]:m.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Jm)])])),64))])]),e("div",Xm,[T[8]||(T[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",Km,[T[6]||(T[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:I(Tl)(I(Xn)(p.value)),onChange:T[0]||(T[0]=L=>M({chartPalette:L.target.value}))},null,40,Zm),e("div",eg,[(l(!0),i(Z,null,ue(h.value,(L,H)=>(l(),i("span",{key:`theme-chart-${H}`,class:"chart-palette-dot",style:ye({background:L})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:z},"Use auto palette")]),T[7]||(T[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",tg,[T[12]||(T[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",og,[T[9]||(T[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:T[1]||(T[1]=L=>M({headingFont:L.target.value}))},[(l(),i(Z,null,ue(ie,L=>e("option",{key:L.value,value:L.value},k(L.label),9,lg)),64))],40,ng)]),e("div",ig,[T[10]||(T[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:T[2]||(T[2]=L=>M({fontFamily:L.target.value}))},[(l(),i(Z,null,ue(ie,L=>e("option",{key:L.value,value:L.value},k(L.label),9,sg)),64))],40,ag)]),e("div",rg,[T[11]||(T[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:T[3]||(T[3]=L=>M({fontSize:+L.target.value}))},null,40,dg)])]),e("div",ug,[T[13]||(T[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:ye({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:ye({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:ye({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:ye({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:ye({background:p.value.secondaryColor})},"Badge",4),e("div",cg,[(l(!0),i(Z,null,ue(h.value.slice(0,5),(L,H)=>(l(),i("span",{key:`preview-chart-${H}`,class:"tp-chart-bar",style:ye({background:L,height:`${22+H*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:B}," Apply Theme to Slides "),x.value?(l(),i("p",pg,k(x.value),1)):F("",!0),f.value?(l(),i("p",vg,k(f.value),1)):F("",!0)])]))}},mg=Je(fg,[["__scopeId","data-v-da2b0ce4"]]),gg={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},bg={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},yg={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},hg={class:"export-tabs tabs",style:{"overflow-x":"auto"}},xg={class:"export-content"},wg={class:"export-options",style:{"margin-bottom":"20px"}},kg={class:"form-group"},Cg={class:"export-meta"},$g={class:"meta-item"},Sg={class:"meta-item"},Ig={class:"meta-item"},Ag={class:"export-options",style:{"margin-bottom":"20px"}},Eg={class:"form-group"},Tg={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Mg={class:"export-options",style:{"margin-bottom":"20px"}},Pg={class:"form-group"},Ng={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Bg={class:"coming-soon"},zg={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},_g={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},Lg={key:1,class:"export-success"},jg={__name:"ExportModal",setup(A){const s=it(),d=at(),c=al(),p=E(()=>d.getProject(s.projectId)),h=_("json"),x=_(""),f=_(""),M=_(!0);Qe(p,H=>{H&&!f.value&&(f.value=H.name||"presentation")},{immediate:!0});function le(){const H=d.exportProject(s.projectId);if(!H)return;const m=new Blob([H],{type:"application/json"}),U=URL.createObjectURL(m),ne=document.createElement("a");ne.href=U,ne.download=`${f.value||"project"}.mediasurf.json`,ne.click(),URL.revokeObjectURL(U),x.value="success",setTimeout(()=>x.value="",3e3)}function ie(H,m="presentation"){return String(H).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||m}function W(H){return new Promise((m,U)=>{const ne=new FileReader;ne.onloadend=()=>m(ne.result),ne.onerror=()=>U(ne.error),ne.readAsDataURL(H)})}function ge(H,m,U="html"){const ne=Lt(m);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${ne.width}px;
  --lf-slide-height: ${ne.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(H==null?void 0:H.fontFamily)||"Inter, sans-serif"};
  background: ${U==="pdf"?"#f3f4f6":`
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%)`};
  color: ${U==="pdf"?"#111827":"#ffffff"};
  display: ${U==="pdf"?"block":"flex"};
  align-items: ${U==="pdf"?"stretch":"center"};
  justify-content: ${U==="pdf"?"flex-start":"center"};
  overflow: ${U==="pdf"?"auto":"hidden"};
  padding: ${U==="pdf"?"24px 0":"0"};
}
.lf-shell {
  width: ${U==="pdf"?"100%":"100vw"};
  min-height: ${U==="pdf"?"auto":"100vh"};
  height: ${U==="pdf"?"auto":"100vh"};
  position: relative;
  display: flex;
  align-items: ${U==="pdf"?"stretch":"center"};
  justify-content: center;
  overflow: ${U==="pdf"?"visible":"hidden"};
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
  width: ${U==="pdf"?"100%":"auto"};
  max-width: ${U==="pdf"?"none":"auto"};
  padding: ${U==="pdf"?"0":"18px"};
  border-radius: ${U==="pdf"?"0":"32px"};
  background: ${U==="pdf"?"transparent":"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"};
  border: ${U==="pdf"?"none":"1px solid rgba(255,255,255,0.12)"};
  box-shadow: ${U==="pdf"?"none":"0 30px 80px rgba(0,0,0,.34)"};
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
  width: ${U==="pdf"?"100%":"var(--lf-slide-width)"};
  height: ${U==="pdf"?"auto":"var(--lf-slide-height)"};
  border-radius: ${U==="pdf"?"0":"18px"};
  overflow: ${U==="pdf"?"visible":"hidden"};
  box-shadow: ${U==="pdf"?"none":"0 30px 90px rgba(0,0,0,.5)"};
  transform-origin: center center;
  display: ${U==="pdf"?"flex":"block"};
  flex-direction: ${U==="pdf"?"column":"row"};
  align-items: ${U==="pdf"?"center":"stretch"};
  gap: ${U==="pdf"?"24px":"0"};
}
.slide {
  position: ${U==="pdf"?"relative":"absolute"};
  inset: ${U==="pdf"?"auto":"0"};
  display: ${U==="pdf"?"block":"none"};
  overflow: hidden;
  color: ${(H==null?void 0:H.textColor)||"#1a1a2e"};
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
  flex: 0 0 auto;
  background-clip: padding-box;
  box-shadow: ${U==="pdf"?"0 12px 32px rgba(15, 23, 42, 0.16)":"none"};
  page-break-after: ${U==="pdf"?"always":"auto"};
  break-after: ${U==="pdf"?"page":"auto"};
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
  display: ${(m==null?void 0:m.showNavControls)===!1?"none":"flex"};
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
  display: ${(m==null?void 0:m.showNavControls)===!1?"none":"flex"};
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
  background: ${(H==null?void 0:H.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(m==null?void 0:m.showProgress)===!1?"none":"block"};
  z-index: 6;
}
${U==="iframe"?`
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
${U==="pdf"?`
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
`}function z(H="html"){return`
(function () {
  var exportMode = ${JSON.stringify(H)};
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
    } else if (el.type === 'tabs') {
      wrapper.appendChild(renderTabs(content));
    } else if (el.type === 'accordion') {
      wrapper.appendChild(renderAccordion(content));
    } else if (el.type === 'flipcard') {
      wrapper.appendChild(renderFlipCard(content));
    } else if (el.type === 'stepper') {
      wrapper.appendChild(renderStepper(content));
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
`}async function B(){return L("html")}async function a(){return L("iframe")}async function T(){return L("pdf")}async function L(H="html"){var Le,ee,ve;const m=p.value;if(!m)return;x.value="processing";const U=H==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(H==="pdf"&&!U){x.value="error",setTimeout(()=>x.value="",3e3);return}const ne=H==="pdf"?null:new ql,K=ne?ne.folder("assets"):null;let xe=0;async function R(ae,fe="media"){if((!ae||ae.startsWith("data:")||ae.startsWith("http://localhost")||ae.startsWith("blob:"))&&ae.startsWith("data:"))return ae;try{const me=await(await fetch(ae)).blob();if(H==="pdf")return await W(me);let S="bin";const $=me.type;if($.includes("image/png")?S="png":$.includes("image/jpeg")?S="jpg":$.includes("image/gif")?S="gif":$.includes("image/svg")?S="svg":$.includes("image/webp")?S="webp":$.includes("video/mp4")?S="mp4":$.includes("audio/mpeg")&&(S="mp3"),S==="bin"){const g=ae.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);g&&(S=g[1])}xe++;const q=`${fe}_${xe}.${S}`;return K.file(q,me),`assets/${q}`}catch(Te){return console.warn("Could not fetch asset:",ae,Te),ae}}const G=JSON.parse(JSON.stringify([...m.slides||[]])).sort((ae,fe)=>(ae.order??0)-(fe.order??0));if(M.value)for(const ae of G){ae.backgroundType==="image"&&ae.backgroundImage&&(ae.backgroundImage=await R(ae.backgroundImage,"bg"));for(const fe of ae.elements||[])fe.type==="image"&&((Le=fe.content)!=null&&Le.src)&&(fe.content.src=await R(fe.content.src,"img")),fe.type==="video"&&((ee=fe.content)!=null&&ee.src)&&!fe.content.src.includes("youtube")&&!fe.content.src.includes("youtu.be")&&(fe.content.src=await R(fe.content.src,"vid")),fe.type==="audio"&&((ve=fe.content)!=null&&ve.src)&&(fe.content.src=await R(fe.content.src,"aud"))}const ce=ie(f.value||m.name||"presentation"),be={name:m.name,theme:m.theme||{},settings:m.settings||{},slides:G},oe=JSON.stringify(be).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),we=ge(m.theme,m.settings,H),C=z(H),j=`<script id="lf-data" type="application/json">${oe}<\/script>`,Y=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ce}</title>
${H==="pdf"?`<style>${we}</style>`:'<link rel="stylesheet" href="style.css">'}
</head>
<body class="${H==="iframe"?"is-iframe":H==="pdf"?"is-pdf":""}">
<div class="lf-shell">
<div class="progress" id="progress"></div>
<div class="lf-grid"></div>
<div class="lf-stage-shell">
  <div class="presentation" id="presentation"></div>
</div>
<div class="dot-nav" id="dot-nav"></div>
<nav class="nav">
  <button class="nav-btn" id="prev-btn" type="button">← Prev</button>
  <span class="nav-counter" id="counter">1 / ${G.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${j}
${H!=="pdf"?'<script src="script.js"><\/script>':`<script>${C}<\/script>`}
</body>
</html>`;if(H==="pdf"){U.document.open(),U.document.write(Y),U.document.close(),x.value="success",setTimeout(()=>x.value="",3e3);return}ne.file("index.html",Y),ne.file("style.css",we),ne.file("script.js",C);const he=await ne.generateAsync({type:"blob"}),ze=URL.createObjectURL(he),Se=document.createElement("a");Se.href=ze,Se.download=`${ce}.zip`,Se.click(),URL.revokeObjectURL(ze),x.value="success",setTimeout(()=>x.value="",3e3)}return(H,m)=>(l(),Ye(ol,{title:"Export Project",size:"md",onClose:m[13]||(m[13]=U=>I(s).showExportModal=!1)},{footer:ut(()=>[e("button",{class:"btn btn-secondary",onClick:m[12]||(m[12]=U=>I(s).showExportModal=!1)},"Close")]),default:ut(()=>{var U,ne,K,xe,R;return[I(c).user?(l(),i(Z,{key:1},[e("div",hg,[e("button",{class:J(["tab-btn",h.value==="json"&&"active"]),onClick:m[2]||(m[2]=G=>h.value="json")},"JSON",2),e("button",{class:J(["tab-btn",h.value==="html"&&"active"]),onClick:m[3]||(m[3]=G=>h.value="html")},"HTML",2),e("button",{class:J(["tab-btn",h.value==="iframe"&&"active"]),onClick:m[4]||(m[4]=G=>h.value="iframe")},"Iframe",2),e("button",{class:J(["tab-btn",h.value==="pdf"&&"active"]),onClick:m[5]||(m[5]=G=>h.value="pdf")},"PDF",2),e("button",{class:J(["tab-btn",h.value==="scorm"&&"active"]),onClick:m[6]||(m[6]=G=>h.value="scorm")},"SCORM",2)]),e("div",xg,[h.value==="json"?(l(),i(Z,{key:0},[m[24]||(m[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",wg,[e("div",kg,[m[19]||(m[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),de(e("input",{type:"text","onUpdate:modelValue":m[7]||(m[7]=G=>f.value=G),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ce,f.value]])])]),e("div",Cg,[e("div",$g,[m[20]||(m[20]=e("span",null,"Project",-1)),e("strong",null,k((U=p.value)==null?void 0:U.name),1)]),e("div",Sg,[m[21]||(m[21]=e("span",null,"Slides",-1)),e("strong",null,k(((K=(ne=p.value)==null?void 0:ne.slides)==null?void 0:K.length)||0),1)]),e("div",Ig,[m[22]||(m[22]=e("span",null,"Elements",-1)),e("strong",null,k(((R=(xe=p.value)==null?void 0:xe.slides)==null?void 0:R.reduce((G,ce)=>{var be;return G+(((be=ce.elements)==null?void 0:be.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:le},[...m[23]||(m[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Download JSON ",-1)])])],64)):h.value==="html"?(l(),i(Z,{key:1},[m[28]||(m[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",Ag,[e("div",Eg,[m[25]||(m[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),de(e("input",{type:"text","onUpdate:modelValue":m[8]||(m[8]=G=>f.value=G),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ce,f.value]])]),e("label",Tg,[de(e("input",{type:"checkbox","onUpdate:modelValue":m[9]||(m[9]=G=>M.value=G)},null,512),[[_t,M.value]]),m[26]||(m[26]=X(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),m[29]||(m[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:B},[...m[27]||(m[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Download HTML ",-1)])])],64)):h.value==="iframe"?(l(),i(Z,{key:2},[m[33]||(m[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Mg,[e("div",Pg,[m[30]||(m[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),de(e("input",{type:"text","onUpdate:modelValue":m[10]||(m[10]=G=>f.value=G),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ce,f.value]])]),e("label",Ng,[de(e("input",{type:"checkbox","onUpdate:modelValue":m[11]||(m[11]=G=>M.value=G)},null,512),[[_t,M.value]]),m[31]||(m[31]=X(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...m[32]||(m[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Download Iframe Zip ",-1)])])],64)):h.value==="pdf"?(l(),i(Z,{key:3},[m[35]||(m[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),m[36]||(m[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:T},[...m[34]||(m[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Generate PDF ",-1)])])],64)):h.value==="scorm"?(l(),i(Z,{key:4},[m[40]||(m[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Bg,[(l(),i("svg",zg,[...m[37]||(m[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),m[38]||(m[38]=e("h4",null,"Coming Soon",-1)),m[39]||(m[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):F("",!0),yt(zt,{name:"fade"},{default:ut(()=>[x.value==="processing"?(l(),i("div",_g,[...m[41]||(m[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),X(" Generating package... Please wait. ",-1)])])):x.value==="success"?(l(),i("div",Lg,[...m[42]||(m[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),X(" Export successful! Check your downloads folder. ",-1)])])):F("",!0)]),_:1})])],64)):(l(),i("div",gg,[(l(),i("svg",bg,[...m[14]||(m[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),m[17]||(m[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),m[18]||(m[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",yg,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:m[0]||(m[0]=G=>I(c).loginWithGoogle())},[...m[15]||(m[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),X(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:m[1]||(m[1]=G=>I(c).loginWithMicrosoft())},[...m[16]||(m[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),X(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Dg=Je(jg,[["__scopeId","data-v-2919e5e9"]]),qg={key:0,class:"editor-view"},Rg={class:"editor-topbar"},Og={class:"topbar-left"},Fg={class:"project-name-wrap"},Ug=["value"],Vg={class:"save-label"},Gg={class:"topbar-center"},Wg={key:0,class:"slide-position"},Hg={class:"topbar-right"},Yg={class:"editor-body"},Qg={class:"authoring-rail"},Jg=["onClick","data-tooltip"],Xg={key:0,class:"rail-icon"},Kg={key:1,class:"rail-icon"},Zg={key:2,class:"rail-icon"},eb={key:3,class:"rail-icon"},tb={key:4,class:"rail-icon"},ob={key:5,class:"rail-icon"},nb={key:6,class:"rail-icon"},lb={key:7,class:"rail-icon"},ib={key:8,class:"rail-icon"},ab={key:9,class:"rail-icon"},sb={class:"right-panel"},rb={class:"panel-tabs"},db=["onClick","data-tooltip"],ub={class:"tab-icon"},cb={class:"tab-label"},pb={class:"panel-content"},vb={key:1,class:"editor-not-found"},fb={__name:"EditorView",setup(A){const s=ml(),d=fl(),c=it(),p=at(),h=al(),x=E(()=>s.params.id),f=E(()=>p.getProject(x.value)),M=E(()=>Lt(f.value)),le=E(()=>{var S;return[...((S=f.value)==null?void 0:S.slides)||[]].sort(($,q)=>$.order-q.order)}),ie=_(null),W=_(!1),ge=_("deck"),{aiStore:z,showAIModal:B,aiMode:a,aiTopic:T,aiContext:L,aiProjectName:H,aiSlideCount:m,aiQuestionCount:U,aiDifficulty:ne,aiQuestionType:K,aiCreationError:xe,aiSubmitting:R,aiProjectNamePlaceholder:G,aiPrimaryActionLabel:ce,openAICreationModal:be,createAIProject:oe}=bl({onRequireAuth:()=>d.push({name:"dashboard"})});let we=!1,C=null;Qe(()=>f.value,S=>{if(S){if(we){we=!1;return}C&&clearTimeout(C),C=setTimeout(()=>{c.pushHistory(S)},600)}},{deep:!0}),Qe(()=>h.isAuthReady,async S=>{var $;if(S){if(($=h.user)!=null&&$.uid&&await p.ensureRemoteProjectsLoaded(),!f.value){d.push({name:"dashboard"});return}c.setProject(x.value),le.value.length>0&&c.setCurrentSlide(le.value[0].id),c.pushHistory(f.value)}},{immediate:!0});const j=E(()=>{const S=f.value;return S?`Saved ${new Date(S.updatedAt).toLocaleTimeString()}`:""}),D=E(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});Rl({undo:()=>{if(c.canUndo()){const S=c.undo();S&&(we=!0,p.updateProject(x.value,S))}},redo:()=>{if(c.canRedo()){const S=c.redo();S&&(we=!0,p.updateProject(x.value,S))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var $,q,g,Ge;const S=(Ge=(g=(q=($=f.value)==null?void 0:$.slides)==null?void 0:q.find(De=>De.id===c.currentSlideId))==null?void 0:g.elements)==null?void 0:Ge.find(De=>De.id===c.selectedElementId);S&&c.setClipboard(S)},paste:()=>{if(c.clipboard&&c.currentSlideId){const S=c.clipboard;p.addElement(c.projectId,c.currentSlideId,S.type,{...S,x:S.x+20,y:S.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const S=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);S&&c.selectElement(S.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(S,$)=>{var g,Ge,De,_e;if(!c.selectedElementId)return;const q=(_e=(De=(Ge=(g=f.value)==null?void 0:g.slides)==null?void 0:Ge.find(ke=>ke.id===c.currentSlideId))==null?void 0:De.elements)==null?void 0:_e.find(ke=>ke.id===c.selectedElementId);q&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:q.x+S,y:q.y+$})},selectAll:()=>{var $,q,g;(((g=(q=($=f.value)==null?void 0:$.slides)==null?void 0:q.find(Ge=>Ge.id===c.currentSlideId))==null?void 0:g.elements)||[]).forEach((Ge,De)=>c.selectElement(Ge.id,De>0))}});function Y(){d.push({name:"dashboard"})}function he(){d.push({name:"preview",params:{id:x.value},query:{from:"editor"}})}function ze(S="deck"){ge.value=S,W.value=!0}function Se(){W.value=!1,be(ge.value)}function Le(S,$="Image"){if(!c.projectId||!c.currentSlideId||!S)return;const q=new Image;q.onload=()=>{const De=Math.min(420/q.width,280/q.height,1),_e=Math.max(120,Math.round(q.width*De)),ke=Math.max(80,Math.round(q.height*De)),Me=Math.max(24,Math.round((M.value.width-_e)/2)),st=Math.max(24,Math.round((M.value.height-ke)/2)),ot=p.addElement(c.projectId,c.currentSlideId,"image",{x:Me,y:st,width:_e,height:ke,content:{src:S,alt:$,objectFit:"cover"}});ot&&(c.selectElement(ot.id),c.setRightPanel("properties"),c.setActiveTool("select"))},q.src=S}function ee(S){const[$]=Array.from(S.target.files||[]);if(!$||!$.type.startsWith("image/"))return;const q=new FileReader;q.onload=()=>Le(String(q.result||""),$.name),q.readAsDataURL($),S.target.value=""}function ve(){var S;(S=ie.value)==null||S.click()}const ae=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function fe(S){if(S==="text"){c.setActiveTool("text");return}if(S==="blocks"){c.toggleSlidePanel("blocks");return}if(S==="resources"){c.setActiveTool("image");return}if(S==="interactive-elements"){c.setActiveTool("hotspot");return}if(S==="interactive-questions"){c.setActiveTool("quiz");return}if(S==="widgets"){c.setActiveTool("shape");return}if(S==="insert"){ve();return}if(S==="style"){c.setRightPanel("properties");return}if(S==="background"){c.clearSelection(),c.setRightPanel("properties");return}S==="pages"&&c.toggleSlidePanel("slides")}function Te(S){return S==="text"?["text","heading"].includes(c.activeTool):S==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":S==="resources"?c.activeTool==="image":S==="interactive-elements"?["hotspot","button"].includes(c.activeTool):S==="interactive-questions"?c.activeTool==="quiz":S==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):S==="insert"?!1:S==="style"||S==="background"?c.rightPanelTab==="properties":S==="pages"?c.showSlidePanel:!1}function me(){xl({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return Qe(()=>f.value,S=>{S&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{me()},100)},{immediate:!0}),(S,$)=>f.value?(l(),i("div",qg,[e("input",{ref_key:"imageInputRef",ref:ie,type:"file",accept:"image/*",class:"sr-only",onChange:ee},null,544),e("header",Rg,[e("div",Og,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:Y,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...$[14]||($[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),X(" Dashboard ",-1)])]),e("div",Fg,[e("input",{value:f.value.name,class:"project-name-input",onChange:$[0]||($[0]=q=>I(p).updateProject(x.value,{name:q.target.value}))},null,40,Ug)]),e("span",Vg,k(j.value),1)]),e("div",Gg,[I(c).currentSlideId?(l(),i("span",Wg," Slide "+k(le.value.findIndex(q=>q.id===I(c).currentSlideId)+1)+" of "+k(le.value.length),1)):F("",!0)]),e("div",Hg,[e("button",{class:"btn btn-ghost btn-sm",onClick:me,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...$[15]||($[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),X(" Help ",-1)])]),e("button",{class:J(["btn btn-ghost btn-sm",I(c).showAIPanel&&"active-btn"]),onClick:$[1]||($[1]=q=>{I(c).showAIPanel=!I(c).showAIPanel,I(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...$[16]||($[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),X(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:$[2]||($[2]=q=>{I(c).showThemeManager=!I(c).showThemeManager,I(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...$[17]||($[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),X(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:he,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...$[18]||($[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),X(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:$[3]||($[3]=q=>I(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...$[19]||($[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Export ",-1)])])])]),yt(xv,{onOpenAiProject:ze}),e("div",Yg,[e("aside",Qg,[(l(),i(Z,null,ue(ae,q=>e("button",{key:q.id,class:J(["rail-option",Te(q.id)&&"active"]),onClick:g=>fe(q.id),"data-tooltip":q.label,"data-tooltip-position":"right"},[q.id==="text"?(l(),i("span",Xg,"T")):q.id==="blocks"?(l(),i("span",Kg,[...$[20]||($[20]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):q.id==="resources"?(l(),i("span",Zg,[...$[21]||($[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):q.id==="interactive-elements"?(l(),i("span",eb,[...$[22]||($[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):q.id==="interactive-questions"?(l(),i("span",tb,[...$[23]||($[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):q.id==="widgets"?(l(),i("span",ob,[...$[24]||($[24]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):q.id==="insert"?(l(),i("span",nb,[...$[25]||($[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):q.id==="style"?(l(),i("span",lb,[...$[26]||($[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):q.id==="background"?(l(),i("span",ib,[...$[27]||($[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):q.id==="pages"?(l(),i("span",ab,[...$[28]||($[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):F("",!0),X(" "+k(q.label),1)],10,Jg)),64))]),yt(zt,{name:"side-panel-slide"},{default:ut(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="slides"?(l(),Ye(ti,{key:0})):F("",!0)]),_:1}),yt(zt,{name:"side-panel-slide"},{default:ut(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="blocks"?(l(),Ye(Ti,{key:0})):F("",!0)]),_:1}),yt(h1),e("aside",sb,[e("div",rb,[(l(),i(Z,null,ue([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],q=>e("button",{key:q.id,class:J(["panel-tab",I(c).rightPanelTab===q.id&&"active"]),onClick:g=>I(c).setRightPanel(q.id),"data-tooltip":`Open ${q.label}`,"data-tooltip-position":"bottom"},[e("span",ub,k(q.icon),1),e("span",cb,k(q.label),1)],10,db)),64))]),e("div",pb,[yt(zt,{name:"editor-panel-switch",mode:"out-in"},{default:ut(()=>[(l(),i("div",{key:D.value,class:"panel-content-view"},[I(c).rightPanelTab==="properties"?(l(),Ye(Wp,{key:0})):I(c).rightPanelTab==="layers"?(l(),Ye(Ji,{key:1})):I(c).rightPanelTab==="ai"?(l(),Ye(Dm,{key:2})):I(c).rightPanelTab==="theme"?(l(),Ye(mg,{key:3})):F("",!0)]))]),_:1})])])]),I(c).showExportModal?(l(),Ye(Dg,{key:0})):F("",!0),W.value?(l(),Ye(yl,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:$[4]||($[4]=q=>W.value=!1),onConfirm:Se})):F("",!0),I(B)?(l(),Ye(hl,{key:2,mode:I(a),topic:I(T),context:I(L),"project-name":I(H),"slide-count":I(m),"question-count":I(U),difficulty:I(ne),"question-type":I(K),"project-name-placeholder":I(G),"primary-action-label":I(ce),"creation-error":I(xe),"is-submitting":I(R),"is-generating":I(z).isGenerating,"has-api-key":!!I(z).apiKey,onClose:$[5]||($[5]=q=>B.value=!1),onCreate:I(oe),"onUpdate:mode":$[6]||($[6]=q=>a.value=q),"onUpdate:topic":$[7]||($[7]=q=>T.value=q),"onUpdate:context":$[8]||($[8]=q=>L.value=q),"onUpdate:projectName":$[9]||($[9]=q=>H.value=q),"onUpdate:slideCount":$[10]||($[10]=q=>m.value=q),"onUpdate:questionCount":$[11]||($[11]=q=>U.value=q),"onUpdate:difficulty":$[12]||($[12]=q=>ne.value=q),"onUpdate:questionType":$[13]||($[13]=q=>K.value=q)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):F("",!0)])):(l(),i("div",vb,[$[29]||($[29]=e("h2",null,"Project not found",-1)),$[30]||($[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:Y},"Go to Dashboard")]))}},kb=Je(fb,[["__scopeId","data-v-902e6311"]]);export{kb as default};
