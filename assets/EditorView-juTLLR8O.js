import{K as cl,P as pl,v as l,F as i,B as e,C as w,H as ee,I as ue,E as Re,D as Q,u as I,Q as ye,M as et,G as q,L as Z,q as Ye,R as vl,f as A,r as z,N as ce,O as Ce,x as ut,S as Lt,w as Je,n as fl,i as Cl,U as Sl,y as yt,T as zt,V as Bt,z as $l,p as Il,J as dl}from"./vue-core-DCl8Fgqc.js";import{u as El,d as Al}from"./vue-ecosystem-Da9kls6U.js";import{u as it,M as ml,c as Tl,a as Ml,C as Pl,A as Nl,b as Bl}from"./ConfirmActionModal-BAqmSkDJ.js";import{u as at,b as zl,g as jt,C as Rt,c as Ll,n as jl,p as _l,s as Dl,m as gl,f as bl,d as yl,e as ql,h as Ot,B as Rl,i as Ol,j as Fl,k as ul,a as hl}from"./projectStore-BCDwEDcV.js";import{_ as Qe}from"./index-OWA0DObh.js";import{P as Ul,S as Vl,C as Wl,a as Gl,M as Hl,_ as Yl,b as Jl,c as Ql,F as Xl,A as Kl,T as Zl,d as ei}from"./ProgressElement-BXjko7kw.js";import{J as ti}from"./jszip-529iNPX7.js";function oi(E){function s(d){var f,H,le,G,W,ge,B,N,a,T,L,Y,g,F,ie,te,xe;const c=d.ctrlKey||d.metaKey,p=d.key.toLowerCase(),h=d.target.tagName.toLowerCase(),x=h==="input"||h==="textarea"||d.target.isContentEditable;x&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!d.shiftKey?(d.preventDefault(),(f=E.undo)==null||f.call(E)):c&&(p==="y"||p==="z"&&d.shiftKey)?(d.preventDefault(),(H=E.redo)==null||H.call(E)):c&&p==="c"?(d.preventDefault(),(le=E.copy)==null||le.call(E)):c&&p==="v"?(d.preventDefault(),(G=E.paste)==null||G.call(E)):c&&p==="x"?(d.preventDefault(),(W=E.cut)==null||W.call(E)):c&&p==="d"?(d.preventDefault(),(ge=E.duplicate)==null||ge.call(E)):c&&p==="a"?(d.preventDefault(),(B=E.selectAll)==null||B.call(E)):p==="delete"||p==="backspace"?x||(d.preventDefault(),(N=E.delete)==null||N.call(E)):p==="escape"?(a=E.escape)==null||a.call(E):c&&p==="g"?(d.preventDefault(),(T=E.toggleGrid)==null||T.call(E)):c&&p==="="||c&&p==="+"?(d.preventDefault(),(L=E.zoomIn)==null||L.call(E)):c&&p==="-"?(d.preventDefault(),(Y=E.zoomOut)==null||Y.call(E)):c&&p==="0"?(d.preventDefault(),(g=E.zoomReset)==null||g.call(E)):p==="arrowleft"?(F=E.nudge)==null||F.call(E,-1,0):p==="arrowright"?(ie=E.nudge)==null||ie.call(E,1,0):p==="arrowup"?(te=E.nudge)==null||te.call(E,0,-1):p==="arrowdown"&&((xe=E.nudge)==null||xe.call(E,0,1)))}cl(()=>window.addEventListener("keydown",s)),pl(()=>window.removeEventListener("keydown",s))}const ni={class:"slide-panel"},li={class:"slide-panel-header"},ii={class:"slide-count"},ai={class:"slides-list"},si=["onClick","onContextmenu","onDragstart","onDrop"],ri={class:"slide-number"},di=["viewBox"],ui=["x","y","width","height","fill"],ci=["d","stroke"],pi=["d","fill"],vi={class:"slide-footer"},fi={class:"slide-title"},mi=["onClick"],gi={__name:"SlidePanel",setup(E){const s=it(),d=at(),c=A(()=>d.getProject(s.projectId)),p=A(()=>jt(c.value)),h=A(()=>{var R,V;return((V=(R=c.value)==null?void 0:R.slides)==null?void 0:V.slice().sort((pe,be)=>pe.order-be.order))||[]}),x=z({show:!1,x:0,y:0,slideId:null});function f(R){s.setCurrentSlide(R)}function H(){const R=h.value.findIndex(pe=>pe.id===s.currentSlideId),V=d.addSlide(s.projectId,R);V&&s.setCurrentSlide(V.id)}function le(R){var be,ne;const V=h.value.findIndex(ke=>ke.id===R);d.deleteSlide(s.projectId,R);const pe=((be=c.value)==null?void 0:be.slides)||[];if(pe.length>0){const ke=pe.slice().sort((j,_)=>j.order-_.order),C=Math.min(V,ke.length-1);s.setCurrentSlide((ne=ke[C])==null?void 0:ne.id)}}function G(R,V){R.preventDefault(),x.value={show:!0,x:R.clientX,y:R.clientY,slideId:V},setTimeout(()=>window.addEventListener("click",W,{once:!0}),0)}function W(){x.value.show=!1}function ge(){const R=d.duplicateSlide(s.projectId,x.value.slideId);R&&s.setCurrentSlide(R.id),W()}function B(){le(x.value.slideId),W()}function N(R,V){R.stopPropagation(),le(V)}function a(){const R=h.value.findIndex(V=>V.id===x.value.slideId);R>0&&d.reorderSlides(s.projectId,R,R-1),W()}function T(){const R=h.value.findIndex(V=>V.id===x.value.slideId);R<h.value.length-1&&d.reorderSlides(s.projectId,R,R+1),W()}let L=-1;function Y(R,V){L=V,R.dataTransfer.effectAllowed="move"}function g(R,V){R.preventDefault(),L!==-1&&L!==V&&d.reorderSlides(s.projectId,L,V),L=-1}function F(R){return R.backgroundType==="gradient"&&R.backgroundGradient?{background:R.backgroundGradient}:R.backgroundType==="image"&&R.backgroundImage?{backgroundImage:`url(${R.backgroundImage})`,backgroundSize:"cover"}:{background:R.background||"#fff"}}function ie(R){return{left:R.x/p.value.width*100+"%",top:R.y/p.value.height*100+"%",width:R.width/p.value.width*100+"%",height:R.height/p.value.height*100+"%"}}function te(R){var V,pe;return{background:R.type==="shape"?(V=R.content)==null?void 0:V.fillColor:R.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:R.type==="shape"&&((pe=R.content)==null?void 0:pe.shapeType)==="circle"?"50%":void 0}}function xe(R){var V;return zl(R.content||{},R.width||420,R.height||280,((V=c.value)==null?void 0:V.theme)||{})}return(R,V)=>(l(),i("div",ni,[e("div",li,[V[2]||(V[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",ii,w(h.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:H,"data-tooltip":"Add slide","aria-label":"Add slide"},[...V[1]||(V[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",ai,[(l(!0),i(ee,null,ue(h.value,(pe,be)=>(l(),i("div",{key:pe.id,class:Q(["slide-thumb-item",I(s).currentSlideId===pe.id&&"active"]),draggable:"true",onClick:ne=>f(pe.id),onContextmenu:ne=>G(ne,pe.id),onDragstart:ne=>Y(ne,be),onDragover:V[0]||(V[0]=Re(()=>{},["prevent"])),onDrop:ne=>g(ne,be)},[e("div",ri,w(be+1),1),e("div",{class:"slide-thumb",style:ye(F(pe))},[(l(!0),i(ee,null,ue(pe.elements.slice(0,6),ne=>{var ke;return l(),i("div",{key:ne.id,class:"mini-element-frame",style:ye(ie(ne))},[ne.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${ne.width||420} ${ne.height||280}`,preserveAspectRatio:"none"},[xe(ne).type==="bar"?(l(!0),i(ee,{key:0},ue(xe(ne).cartesian.bars,C=>(l(),i("rect",{key:`mini-bar-${C.id}`,x:C.x,y:C.y,width:C.width,height:C.height,fill:C.color,rx:"6"},null,8,ui))),128)):xe(ne).type==="line"?(l(),i("path",{key:1,d:xe(ne).cartesian.linePath,stroke:((ke=xe(ne).cartesian.points[0])==null?void 0:ke.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,ci)):(l(!0),i(ee,{key:2},ue(xe(ne).circle.slices,C=>(l(),i("path",{key:`mini-slice-${C.id}`,d:C.path,fill:C.color},null,8,pi))),128))],8,di)):(l(),i("div",{key:1,class:"mini-element",style:ye(te(ne))},null,4))],4)}),128))],4),e("div",vi,[e("div",fi,w(pe.title||`Slide ${be+1}`),1),h.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:ne=>N(ne,pe.id)},[...V[3]||(V[3]=[et('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,mi)):q("",!0)])],42,si))),128))]),e("button",{class:"add-slide-bottom",onClick:H},[...V[4]||(V[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Z(" Add Slide ",-1)])]),(l(),Ye(vl,{to:"body"},[x.value.show?(l(),i("div",{key:0,class:"context-menu",style:ye({left:x.value.x+"px",top:x.value.y+"px"})},[e("button",{class:"ctx-item",onClick:ge},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:T},"Move Down"),V[5]||(V[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:B},"Delete Slide")],4)):q("",!0)]))]))}},bi=Qe(gi,[["__scopeId","data-v-30eea542"]]),yi={class:"blocks-panel"},hi={class:"blocks-panel-header"},xi={class:"blocks-toolbar"},ki={class:"blocks-categories"},wi=["onClick"],Ci={class:"blocks-panel-body"},Si={class:"blocks-save-card"},$i=["disabled"],Ii={class:"blocks-list"},Ei=["onDragstart"],Ai={class:"block-thumb-stage"},Ti={class:"block-card-body"},Mi={class:"block-card-head"},Pi={class:"block-name"},Ni={class:"block-meta"},Bi={key:0},zi={key:1},Li=["onClick"],ji={class:"block-description"},_i={key:0,class:"block-binding-note"},Di={class:"block-tags"},qi=["onClick"],Ri={class:"binding-modal-body"},Oi={class:"binding-modal-intro"},Fi=["for"],Ui=["id","onUpdate:modelValue"],Vi={__name:"BlocksPanel",setup(E){const s=it(),d=at(),c=z(""),p=z("all"),h=z(""),x=z("Custom"),f=z(!1),H=z(null),le=z({}),G=A(()=>d.getProject(s.projectId)),W=A(()=>{var C,j;return(j=(C=G.value)==null?void 0:C.slides)==null?void 0:j.find(_=>_.id===s.currentSlideId)}),ge=A(()=>d.getContentBlocks(s.projectId)),B=A(()=>{const C=new Set(["all"]);return ge.value.forEach(j=>C.add(j.category||"Custom")),Array.from(C)}),N=A(()=>{var j;const C=new Set(s.selectedElementIds);return(((j=W.value)==null?void 0:j.elements)||[]).filter(_=>C.has(_.id))}),a=A(()=>{var C;return Array.isArray((C=H.value)==null?void 0:C.bindings)?H.value.bindings:[]}),T=A(()=>{const C=c.value.trim().toLowerCase();return ge.value.filter(j=>p.value==="all"||(j.category||"Custom")===p.value?C?[j.name,j.description,j.category,...j.tags||[]].join(" ").toLowerCase().includes(C):!0:!1)});function L(C){const j=Array.isArray(C==null?void 0:C.elements)?C.elements:[];if(!j.length)return{minX:0,minY:0,width:1,height:1};const _=Math.min(...j.map($e=>Number($e.x||0))),X=Math.min(...j.map($e=>Number($e.y||0))),he=Math.max(...j.map($e=>Number($e.x||0)+Number($e.width||0))),ze=Math.max(...j.map($e=>Number($e.y||0)+Number($e.height||0)));return{minX:_,minY:X,width:Math.max(1,he-_),height:Math.max(1,ze-X)}}function Y(C,j){const _=L(C);return{left:`${(Number(j.x||0)-_.minX)/_.width*100}%`,top:`${(Number(j.y||0)-_.minY)/_.height*100}%`,width:`${Number(j.width||0)/_.width*100}%`,height:`${Number(j.height||0)/_.height*100}%`}}function g(C){var j,_,X,he,ze,$e,je;return C.type==="shape"?{background:((j=C.content)==null?void 0:j.fillColor)||"#cbd5e1",borderRadius:((_=C.content)==null?void 0:_.shapeType)==="circle"?"50%":`${Number(((X=C.content)==null?void 0:X.borderRadius)||10)}px`,border:`${Math.max(0,Number(((he=C.content)==null?void 0:he.borderWidth)||0))}px solid ${((ze=C.content)==null?void 0:ze.borderColor)||"transparent"}`}:C.type==="button"?{background:(($e=C.content)==null?void 0:$e.bgColor)||"#6c47ff",borderRadius:`${Number(((je=C.content)==null?void 0:je.borderRadius)||10)}px`}:C.type==="image"||C.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:C.type==="text"||C.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function F(C,j){const _=C.type==="heading"?2:3,X=Math.max(18,100/(_+1.25));return{width:`${j===_-1?72:100}%`,height:`${C.type==="heading"?X:X-2}%`}}function ie(C){C.length&&(s.setSelection(C.map(j=>j.id)),s.focusPropertiesSection("content"),s.setActiveTool("select"))}function te(C){return Array.isArray(C==null?void 0:C.bindings)&&C.bindings.length>0}function xe(){f.value=!1,H.value=null,le.value={}}function R(C,j=null){const _=d.insertContentBlock(s.projectId,s.currentSlideId,C.id,j?{bindingValues:j}:{});ie(_)}function V(C){if(!te(C)){R(C);return}H.value=C,le.value=Object.fromEntries(C.bindings.map(j=>[j.id,j.defaultValue||""])),f.value=!0}function pe(){H.value&&(R(H.value,{...le.value}),xe())}function be(){var _,X;const C=h.value.trim();if(!C||!N.value.length)return;d.saveSelectionAsContentBlock(s.projectId,s.currentSlideId,N.value.map(he=>he.id),{name:C,category:x.value.trim()||"Custom",accent:((X=(_=G.value)==null?void 0:_.theme)==null?void 0:X.primaryColor)||"#6c47ff"})&&(h.value="",p.value="Custom")}function ne(C){d.deleteContentBlock(s.projectId,C)}function ke(C,j){C.dataTransfer&&(C.dataTransfer.effectAllowed="copy",C.dataTransfer.setData(Rt,JSON.stringify({id:j.id})),C.dataTransfer.setData("text/plain",j.name))}return(C,j)=>(l(),i("div",yi,[e("div",hi,[j[5]||(j[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:j[0]||(j[0]=_=>I(s).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...j[4]||(j[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",xi,[ce(e("input",{"onUpdate:modelValue":j[1]||(j[1]=_=>c.value=_),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[Ce,c.value]]),e("div",ki,[(l(!0),i(ee,null,ue(B.value,_=>(l(),i("button",{key:_,type:"button",class:Q(["blocks-category-chip",p.value===_&&"active"]),onClick:X=>p.value=_},w(_==="all"?"All":_),11,wi))),128))])]),e("div",Ci,[e("div",Si,[j[6]||(j[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),j[7]||(j[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),ce(e("input",{"onUpdate:modelValue":j[2]||(j[2]=_=>h.value=_),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[Ce,h.value]]),ce(e("input",{"onUpdate:modelValue":j[3]||(j[3]=_=>x.value=_),class:"input",placeholder:"Category"},null,512),[[Ce,x.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!N.value.length||!h.value.trim(),onClick:be}," Save "+w(N.value.length?`${N.value.length} item${N.value.length>1?"s":""}`:"selection")+" as block ",9,$i)]),e("div",Ii,[(l(!0),i(ee,null,ue(T.value,_=>(l(),i("div",{key:_.id,class:"block-card",draggable:"true",onDragstart:X=>ke(X,_)},[e("div",{class:"block-thumb",style:ye({"--block-accent":_.accent||"#6c47ff"})},[e("div",Ai,[(l(!0),i(ee,null,ue(_.elements,X=>(l(),i("div",{key:`${_.id}-${X.type}-${X.x}-${X.y}`,class:"block-thumb-frame",style:ye(Y(_,X))},[["text","heading"].includes(X.type)?(l(),i("div",{key:0,class:Q(["thumb-text",X.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(ee,null,ue(X.type==="heading"?2:3,he=>(l(),i("span",{key:`${_.id}-${X.type}-${X.x}-${X.y}-${he}`,class:"thumb-text-line",style:ye(F(X,he-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:ye(g(X))},null,4))],4))),128))])],4),e("div",Ti,[e("div",Mi,[e("div",null,[e("div",Pi,w(_.name),1),e("div",Ni,[Z(w(_.category),1),_.scope==="custom"?(l(),i("span",Bi," · Custom")):q("",!0),te(_)?(l(),i("span",zi," · "+w(_.bindings.length)+" field"+w(_.bindings.length>1?"s":""),1)):q("",!0)])]),_.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:X=>ne(_.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...j[8]||(j[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,Li)):q("",!0)]),e("p",ji,w(_.description||"Reusable layout block"),1),te(_)?(l(),i("div",_i,"Editable placeholders included")):q("",!0),e("div",Di,[(l(!0),i(ee,null,ue(_.tags||[],X=>(l(),i("span",{key:`${_.id}-${X}`,class:"block-tag"},"#"+w(X),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:X=>V(_)},w(te(_)?"Insert with Fields":"Insert Block"),9,qi)])],40,Ei))),128))])]),f.value?(l(),Ye(ml,{key:0,title:"Fill Template Fields",size:"md",onClose:xe},{footer:ut(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:xe},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:pe},"Insert Block")]),default:ut(()=>{var _;return[e("div",Ri,[e("p",Oi,[j[9]||(j[9]=Z(" Customize the placeholder text before inserting ",-1)),e("strong",null,w((_=H.value)==null?void 0:_.name),1),j[10]||(j[10]=Z(". ",-1))]),(l(!0),i(ee,null,ue(a.value,X=>(l(),i("div",{key:X.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${X.id}`},w(X.label),9,Fi),ce(e("textarea",{id:`binding-${X.id}`,"onUpdate:modelValue":he=>le.value[X.id]=he,class:"textarea binding-input"},null,8,Ui),[[Ce,le.value[X.id]]])]))),128))])]}),_:1})):q("",!0)]))}},Wi=Qe(Vi,[["__scopeId","data-v-aec67d0c"]]),Gi={class:"layer-panel"},Hi={class:"layer-header panel-section"},Yi={class:"panel-title",style:{"margin-bottom":"0"}},Ji={class:"layer-count"},Qi={key:0,class:"layers-empty"},Xi={key:1,class:"layers-list"},Ki=["onClick"],Zi={class:"layer-type-icon"},ea={class:"layer-name"},ta={class:"layer-actions"},oa=["onClick","data-tooltip"],na={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},la={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ia=["onClick","data-tooltip"],aa={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sa={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ra=["onClick"],da=["onClick"],ua=["onClick"],ca={__name:"LayerPanel",setup(E){const s=it(),d=at(),c=A(()=>d.getProject(s.projectId)),p=A(()=>{var N,a;return(a=(N=c.value)==null?void 0:N.slides)==null?void 0:a.find(T=>T.id===s.currentSlideId)}),h=A(()=>{var N;return[...((N=p.value)==null?void 0:N.elements)||[]].sort((a,T)=>(T.zIndex||0)-(a.zIndex||0))});function x(N){s.selectElement(N)}function f(N){d.updateElement(s.projectId,s.currentSlideId,N.id,{visible:!N.visible})}function H(N){d.updateElement(s.projectId,s.currentSlideId,N.id,{locked:!N.locked})}function le(N){d.reorderElement(s.projectId,s.currentSlideId,N,"up")}function G(N){d.reorderElement(s.projectId,s.currentSlideId,N,"down")}function W(N){d.deleteElement(s.projectId,s.currentSlideId,N),s.selectedElementId===N&&s.clearSelection()}function ge(N){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[N]||"◆"}function B(N){var a,T,L;return(a=N.content)!=null&&a.text?N.content.text.slice(0,24):(T=N.content)!=null&&T.label?N.content.label:(L=N.content)!=null&&L.question?N.content.question.slice(0,24):N.type.charAt(0).toUpperCase()+N.type.slice(1)}return(N,a)=>(l(),i("div",Gi,[e("div",Hi,[e("div",Yi,[a[0]||(a[0]=Z(" Layers ",-1)),e("span",Ji,w(h.value.length),1)])]),h.value.length===0?(l(),i("div",Qi,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",Xi,[(l(!0),i(ee,null,ue(h.value,T=>(l(),i("div",{key:T.id,class:Q(["layer-item",I(s).selectedElementIds.includes(T.id)&&"selected",T.locked&&"locked",!T.visible&&"hidden"]),onClick:L=>x(T.id)},[e("span",Zi,w(ge(T.type)),1),e("span",ea,w(B(T)),1),e("div",ta,[e("button",{class:Q(["layer-action-btn",{active:T.visible}]),onClick:Re(L=>f(T),["stop"]),"data-tooltip":T.visible?"Hide":"Show"},[T.visible?(l(),i("svg",na,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",la,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,oa),e("button",{class:Q(["layer-action-btn",{active:T.locked}]),onClick:Re(L=>H(T),["stop"]),"data-tooltip":T.locked?"Unlock":"Lock"},[T.locked?(l(),i("svg",aa,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",sa,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,ia),e("button",{class:"layer-action-btn",onClick:Re(L=>le(T.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,ra),e("button",{class:"layer-action-btn",onClick:Re(L=>G(T.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,da),e("button",{class:"layer-action-btn danger",onClick:Re(L=>W(T.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,ua)])],10,Ki))),128))]))]))}},pa=Qe(ca,[["__scopeId","data-v-7407acd8"]]),va={class:"panel-section"},fa={class:"preset-toolbar"},ma=["value"],ga=["value"],ba=["value"],ya={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},ha=["onClick"],xa={class:"preset-meta-chip muted"},ka={key:1,class:"import-review"},wa={class:"motion-scrubber-header"},Ca={class:"preset-toolbar compact"},Sa=["value"],$a=["value"],Ia={class:"import-list"},Ea=["onUpdate:modelValue"],Aa={class:"import-item-title"},Ta={class:"preset-meta-chip"},Ma={key:0,class:"preset-meta-chip muted"},Pa={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(E,{emit:s}){const d=s;return(c,p)=>(l(),i("div",va,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",fa,[e("input",{value:E.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=h=>d("update:searchQuery",h.target.value))},null,40,ma),e("select",{value:E.categoryFilter,class:"select",onChange:p[1]||(p[1]=h=>d("update:categoryFilter",h.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(ee,null,ue(E.availableCategories,h=>(l(),i("option",{key:`library-${h}`,value:h},w(h),9,ba))),128))],40,ga),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=h=>d("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=h=>d("export-presets"))},"Export")]),E.recentPresets.length?(l(),i("div",ya,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(ee,null,ue(E.recentPresets,h=>(l(),i("div",{class:"preset-item",key:`recent-${h.id}`},[e("button",{type:"button",class:"preset-chip",onClick:x=>d("apply-preset",h)},w(h.name),9,ha),e("span",xa,"Used "+w(h.usageCount)+"x",1)]))),128))])):q("",!0),E.pendingImportedPresets.length?(l(),i("div",ka,[e("div",wa,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=h=>d("clear-imports"))},"Discard")]),e("div",Ca,[e("select",{value:E.importScopeFilter,class:"select",onChange:p[5]||(p[5]=h=>d("update:importScopeFilter",h.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Sa),e("select",{value:E.importConflictMode,class:"select",onChange:p[6]||(p[6]=h=>d("update:importConflictMode",h.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,$a),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=h=>d("apply-imports"))},"Merge Selected")]),e("div",Ia,[(l(!0),i(ee,null,ue(E.filteredPendingImports,h=>(l(),i("label",{key:`pending-${h.id}`,class:"import-item"},[ce(e("input",{"onUpdate:modelValue":x=>h.selected=x,type:"checkbox"},null,8,Ea),[[Lt,h.selected]]),e("span",Aa,w(h.name),1),e("span",Ta,w(h.scope),1),h.category?(l(),i("span",Ma,w(h.category),1)):q("",!0)]))),128))])])):q("",!0)]))}},Na=Qe(Pa,[["__scopeId","data-v-61f99273"]]),Ba={key:1,class:"panel-section"},za={class:"field-hint"},La={class:"motion-scrubber-shell"},ja={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},_a=["onClick"],Da={class:"motion-preview"},qa={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Ra={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Oa={class:"motion-card-label"},Fa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ua={class:"form-group"},Va={class:"form-group"},Wa={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ga={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ha={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Ya={key:0,class:"preset-list"},Ja=["onDragstart","onDragenter","onDrop"],Qa=["onClick"],Xa={key:0,class:"preset-meta-chip"},Ka=["onClick"],Za=["onClick"],es=["onClick"],ts={key:1,class:"preset-row preset-edit-row"},os=["onClick"],ns={key:1,class:"field-hint"},ls={key:2,class:"panel-section"},is={class:"slide-settings-tabs"},as={key:0,class:"slide-settings-pane"},ss={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rs={class:"form-group"},ds={class:"bg-type-tabs"},us=["onClick"],cs={key:0,class:"color-row"},ps=["value"],vs=["value"],fs={class:"slide-settings-subsection"},ms={class:"canvas-size-grid"},gs=["onClick"],bs={class:"canvas-size-icon-shell"},ys={class:"canvas-size-name"},hs={class:"canvas-size-ratio"},xs={class:"canvas-custom-card"},ks={class:"canvas-custom-header"},ws={class:"field-hint"},Cs={class:"canvas-custom-inputs"},Ss={class:"form-group"},$s={class:"canvas-size-input-wrap"},Is=["value"],Es={class:"form-group"},As={class:"canvas-size-input-wrap"},Ts=["value"],Ms={class:"check-row canvas-size-lock"},Ps={class:"slide-settings-subsection"},Ns={key:1,class:"slide-settings-pane"},Bs=["value"],zs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ls=["value"],js={class:"check-row"},_s=["checked"],Ds={key:2,class:"slide-settings-pane"},qs={class:"check-row"},Rs=["checked"],Os={class:"check-row"},Fs=["checked"],Us={class:"check-row"},Vs=["checked"],Ws={class:"check-row"},Gs=["checked"],Hs={class:"check-row"},Ys=["checked"],Js={class:"panel-title"},Qs={class:"element-type-badge"},Xs={class:"geo-grid"},Ks={class:"form-group"},Zs=["value"],er={class:"form-group"},tr=["value"],or={class:"form-group"},nr=["value"],lr={class:"form-group"},ir=["value"],ar={class:"form-group"},sr=["value"],rr={class:"form-group"},dr=["value"],ur={class:"motion-scrubber-shell"},cr={class:"motion-card-grid"},pr=["onClick"],vr={class:"motion-preview"},fr={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},mr={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},gr={class:"motion-card-label"},br={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},yr={class:"form-group"},hr=["value"],xr={class:"form-group"},kr=["value"],wr={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Cr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Sr={key:0,class:"preset-list"},$r=["onDragstart","onDragenter","onDrop"],Ir=["onClick"],Er={key:0,class:"preset-meta-chip"},Ar=["onClick"],Tr=["onClick"],Mr=["onClick"],Pr={key:1,class:"preset-row preset-edit-row"},Nr=["onClick"],Br={key:1,class:"field-hint"},zr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Lr=["value"],jr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},_r={class:"form-group"},Dr=["value"],qr={class:"form-group"},Rr=["value"],Or={class:"form-group",style:{"margin-top":"var(--space-3)"}},Fr=["value"],Ur=["value"],Vr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Wr={class:"align-btns"},Gr=["onClick"],Hr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Yr={class:"style-btns"},Jr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Qr={class:"color-row"},Xr=["value"],Kr=["value"],Zr={class:"form-group",style:{"margin-top":"var(--space-3)"}},ed=["value"],td={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},od={class:"form-group"},nd=["value"],ld={class:"form-group"},id=["value"],ad={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},sd=["value"],rd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},dd=["value"],ud={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},cd=["value"],pd={class:"form-group"},vd=["value"],fd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},md={class:"form-group"},gd=["value"],bd={class:"form-group"},yd=["value"],hd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xd=["value"],kd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wd={class:"color-row"},Cd=["value"],Sd=["value"],$d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Id={class:"color-row"},Ed=["value"],Ad=["value"],Td={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Md=["value"],Pd={class:"form-group"},Nd=["value"],Bd={class:"form-group",style:{"margin-top":"var(--space-3)"}},zd=["value"],Ld={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jd=["value"],_d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dd=["value"],qd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rd=["value"],Od={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Fd={class:"chart-data-actions"},Ud={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Vd=["value","placeholder"],Wd={class:"chart-palette-preview"},Gd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Hd={class:"form-group"},Yd=["value"],Jd={class:"form-group"},Qd=["value"],Xd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Kd={class:"form-group"},Zd=["value"],eu={class:"form-group"},tu=["value"],ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},nu={class:"form-group"},lu=["value"],iu={key:0,class:"form-group"},au=["value"],su={key:1,class:"form-group"},ru=["value"],du={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},uu={class:"form-group"},cu=["value"],pu={class:"check-row",style:{"margin-top":"20px"}},vu=["checked"],fu={class:"check-row"},mu=["checked"],gu={key:1,class:"check-row"},bu=["checked"],yu={class:"check-row"},hu=["checked"],xu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ku=["value"],wu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cu=["value"],Su={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$u=["value"],Iu={key:0,class:"form-group"},Eu=["value"],Au={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Tu={class:"form-group"},Mu=["value"],Pu={class:"form-group"},Nu=["value"],Bu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},zu={class:"form-group"},Lu=["value"],ju={class:"form-group"},_u=["value"],Du={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},qu={class:"form-group"},Ru=["value"],Ou={class:"form-group"},Fu=["value"],Uu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Vu={class:"form-group"},Wu=["value"],Gu=["value"],Hu={class:"form-group"},Yu=["value"],Ju={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qu=["value"],Xu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ku={class:"color-row"},Zu=["value"],ec=["value"],tc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},oc={class:"form-group"},nc=["value"],lc={class:"form-group"},ic=["value"],ac={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},sc=["value"],rc={class:"form-group"},dc=["value"],uc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},cc={class:"form-group"},pc=["value"],vc={class:"form-group"},fc=["value"],mc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gc=["value"],bc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},yc=["value"],hc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xc=["value"],kc={class:"check-row"},wc=["checked"],Cc={class:"check-row"},Sc=["checked"],$c={class:"check-row"},Ic=["checked"],Ec={class:"check-row"},Ac=["checked"],Tc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mc=["value"],Pc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Nc=["value"],Bc={class:"check-row"},zc=["checked"],Lc={class:"check-row"},jc=["checked"],_c={class:"check-row"},Dc=["checked"],qc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Rc={class:"form-group"},Oc=["value"],Fc={class:"form-group"},Uc=["value"],Vc={class:"form-group",style:{"margin-top":"var(--space-3)"}},Wc=["value"],Gc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hc=["value"],Yc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Jc=["value"],Qc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xc=["value"],Kc={class:"form-group"},Zc=["value"],ep={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},tp={class:"form-group"},op=["value"],np={class:"form-group"},lp=["value"],ip={class:"form-group",style:{"margin-top":"var(--space-3)"}},ap=["value"],sp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rp=["value"],dp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},up={class:"form-group"},cp=["value"],pp={class:"form-group"},vp=["value"],fp={class:"form-group"},mp=["value"],gp={class:"form-group"},bp=["value"],yp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hp=["value"],xp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},kp={class:"form-group"},wp=["value"],Cp={class:"form-group"},Sp=["value"],$p={class:"form-group"},Ip=["value"],Ep={class:"form-group"},Ap=["value"],Tp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mp=["value"],Pp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Np=["value"],Bp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zp=["value"],Lp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jp=["value"],_p={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dp=["value"],qp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Rp={class:"form-group"},Op=["value"],Fp={class:"form-group"},Up=["value"],Vp={class:"form-group"},Wp=["value"],Gp={class:"form-group"},Hp=["value"],Yp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Jp=["value"],Qp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Xp={class:"form-group"},Kp=["value"],Zp={class:"form-group"},ev=["value"],tv={class:"form-group"},ov=["value"],nv={class:"form-group"},lv=["value"],iv={class:"form-group"},av=["value"],sv={class:"form-group",style:{"margin-top":"var(--space-3)"}},rv=["value"],dv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},uv={class:"form-group"},cv=["value"],pv={class:"form-group"},vv=["value"],fv={class:"form-group",style:{"margin-top":"var(--space-3)"}},mv=["value"],gv={class:"form-group"},bv=["value"],yv={class:"form-group"},hv=["value"],xv={class:"form-group"},kv=["value"],wv={class:"form-group",style:{"margin-top":"var(--space-3)"}},Cv={style:{display:"flex","align-items":"center",gap:"8px"}},Sv=["checked"],$v={class:"form-group"},Iv=["value"],Ev={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Av={class:"form-group"},Tv=["value"],Mv={class:"form-group"},Pv=["value"],Nv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Bv={class:"form-group"},zv=["value"],Lv={class:"panel-section"},jv={class:"actions-list"},_v={__name:"PropertiesPanel",setup(E){const s=it(),d=at(),c=A(()=>d.getProject(s.projectId)),p=A(()=>{var u,t;return(t=(u=c.value)==null?void 0:u.slides)==null?void 0:t.find(O=>O.id===s.currentSlideId)}),h=A(()=>{var u;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((u=c.value)==null?void 0:u.settings)||{}}}),x=A(()=>jt(h.value)),f=A(()=>gl(h.value)),H=A(()=>bl(x.value.width,x.value.height)),le=z(!0),G=z("canvas"),W=A(()=>Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]),ge=A(()=>W.value.filter(u=>u.scope!=="group")),B=A(()=>W.value.filter(u=>u.scope==="group")),N=A(()=>{var t;const u=new Set(s.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(O=>u.has(O.id))}),a=A(()=>{var u,t;return s.selectedElementId?(t=(u=p.value)==null?void 0:u.elements)==null?void 0:t.find(O=>O.id===s.selectedElementId):null}),T=A(()=>s.multiSelection||!!a.value),L=A(()=>s.multiSelection?"group":"single"),Y=A(()=>{var t,O;const u=(O=(t=a.value)==null?void 0:t.animations)==null?void 0:O[0];return{type:(u==null?void 0:u.type)||"auto",delay:Number((u==null?void 0:u.delay)||0),duration:Number((u==null?void 0:u.duration)||.64)}}),g=A(()=>{var Be,Ge;const u=N.value.map(Fe=>{var bt;return((bt=Fe.animations)==null?void 0:bt[0])||null}),t=((Be=u[0])==null?void 0:Be.type)||"auto",O=Number(((Ge=u[0])==null?void 0:Ge.duration)||.64),ve=u.every(Fe=>((Fe==null?void 0:Fe.type)||"auto")===t),Ae=u.every(Fe=>Number((Fe==null?void 0:Fe.duration)||.64)===O);return{type:ve?t:"mixed",duration:Ae?O:.64}}),F=z(0),ie=z(0),te=z(""),xe=z(""),R=z(""),V=z(""),pe=z(""),be=z(""),ne=z(""),ke=z(""),C=z(""),j=z(""),_=z(""),X=z(""),he=z(""),ze=z("all"),$e=z(null),je=z(null),oe=z([]),fe=z("all"),ae=z("replace"),me=z(""),Te=z(null),re=z("");let $=null;const S=z({});Je(a,u=>{u?S.value=JSON.parse(JSON.stringify(u)):S.value={},(u==null?void 0:u.type)==="chart"&&(me.value="")},{immediate:!0,deep:!0}),Je(()=>{var u;return[s.propertiesPanelSection,(u=a.value)==null?void 0:u.id,s.rightPanelTab]},async([u,t,O])=>{var Ae;if(!u||!t||O!=="properties")return;await fl();const ve=(Ae=Te.value)==null?void 0:Ae.querySelector(`[data-props-anchor="${u}"]`);ve&&(ve.scrollIntoView({behavior:"smooth",block:"start"}),re.value=u,$&&window.clearTimeout($),$=window.setTimeout(()=>{re.value===u&&(re.value="")},1400))},{immediate:!0});function D(u){a.value&&d.updateElement(s.projectId,s.currentSlideId,a.value.id,u)}function m(u){if(!a.value)return;const t={...a.value.content,...u};D({content:t})}function _e(u,t){try{return JSON.parse(u)}catch{return t}}function qe(u,t){const O=parseFloat(t);isNaN(O)||D({[u]:O})}const Le=z({});Je(p,u=>{u&&(Le.value={...u})},{immediate:!0});function we(u){p.value&&d.updateSlide(s.projectId,p.value.id,u)}function Me(u){if(!c.value)return;const t={...h.value,...u};d.updateProject(s.projectId,{settings:{...t,...jl(t)}})}function st(u){Me({slideWidth:u.width,slideHeight:u.height})}function ot(u,t){const O=Math.round(Number(t)||0);if(!O)return;const ve={[`slide${u==="width"?"Width":"Height"}`]:O};if(le.value){const Ae=x.value.width,Be=x.value.height;u==="width"?ve.slideHeight=Math.round(O*(Be/Ae)):ve.slideWidth=Math.round(O*(Ae/Be))}Me(ve)}const nt=A(()=>{var u;return yl(((u=c.value)==null?void 0:u.theme)||{})}),wt=A(()=>{var t,O;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const u=((O=a.value.content)==null?void 0:O.paletteText)||nt.value.paletteText;return ql(u)});function rt(u){const t=_l(u,{fallbackToDefault:!1});return t.length?Dl(t):""}function De(u){var O;if(((O=a.value)==null?void 0:O.type)!=="chart")return;const t=rt(u);t&&(m({dataText:t}),me.value="")}async function ct(u){var ve;const t=u.target,O=(ve=t==null?void 0:t.files)==null?void 0:ve[0];if(O)try{const Ae=await O.text();De(Ae)}finally{t&&(t.value="")}}function Ke(){var u;(u=je.value)==null||u.click()}function Ct(){var t,O;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const u=rt(((O=a.value.content)==null?void 0:O.dataText)||"");u&&m({dataText:u})}function St(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&m({...nt.value})}function $t(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&m({paletteText:nt.value.paletteText})}function pt(u){return String(u||"").split(",").map(t=>t.trim()).filter(Boolean)}function It(u){const t=(u==null?void 0:u.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((u==null?void 0:u.name)||"Imported Preset").trim()||"Imported Preset",category:String((u==null?void 0:u.category)||"").trim(),tags:Array.isArray(u==null?void 0:u.tags)?u.tags.map(O=>String(O).trim()).filter(Boolean):pt(u==null?void 0:u.tags),type:String((u==null?void 0:u.type)||"auto"),delay:Math.max(0,Number(u==null?void 0:u.delay)||0),duration:Math.max(.1,Number(u==null?void 0:u.duration)||.72),stepDelay:Math.max(0,Number(u==null?void 0:u.stepDelay)||0)}}const Et=A(()=>[...new Set(W.value.map(t=>t.category).filter(Boolean))].sort((t,O)=>t.localeCompare(O))),At=A(()=>[...W.value].filter(u=>Number(u.usageCount||0)>0).sort((u,t)=>{const O=Number(t.lastUsedAt||0)-Number(u.lastUsedAt||0);return O!==0?O:Number(t.usageCount||0)-Number(u.usageCount||0)}).slice(0,6)),b=A(()=>fe.value==="all"?oe.value:oe.value.filter(u=>u.scope===fe.value));function k(u){const t=he.value.trim().toLowerCase(),O=ze.value;return O==="all"||(u.category||"")===O?t?[u.name,u.category,...u.tags||[]].filter(Boolean).some(Ae=>String(Ae).toLowerCase().includes(t)):!0:!1}const K=A(()=>ge.value.filter(k)),U=A(()=>B.value.filter(k)),Ie=A(()=>At.value.filter(u=>L.value==="group"?u.scope==="group":u.scope!=="group"));function Ee(u){const t=String(u.name||"").trim();if(!t)return;const O=W.value.findIndex(Be=>Be.scope===u.scope&&Be.name.toLowerCase()===t.toLowerCase()),ve={...u,id:O>=0?W.value[O].id:`motion-${Date.now()}`,name:t,category:String(u.category||"").trim(),tags:Array.isArray(u.tags)?u.tags:pt(u.tags)},Ae=[...W.value];O>=0?Ae.splice(O,1,ve):Ae.push(ve),Me({motionPresets:Ae})}function Oe(u,t){const O=W.value.map(ve=>ve.id===u?{...ve,...t}:ve);Me({motionPresets:O})}function Ve(u){const t=W.value.find(O=>O.id===u);t&&Oe(u,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function de(u,t){const O=W.value.filter(Ge=>Ge.scope===u).map(Ge=>Ge.name.toLowerCase()),ve=String(t||"Preset").trim()||"Preset";if(!O.includes(ve.toLowerCase()))return ve;let Ae=2,Be=`${ve} Copy`;for(;O.includes(Be.toLowerCase());)Be=`${ve} Copy ${Ae}`,Ae+=1;return Be}function Se(u){Me({motionPresets:W.value.filter(t=>t.id!==u)}),R.value===u&&(R.value="",V.value="")}function He(u){Ee({...u,id:void 0,name:de(u.scope,u.name)})}function Ue(u){R.value=u.id,V.value=u.name,pe.value=u.category||"",be.value=Array.isArray(u.tags)?u.tags.join(", "):""}function Ne(){R.value="",V.value="",pe.value="",be.value=""}function We(u){const t=String(V.value||"").trim();t&&(Oe(u,{name:t,category:String(pe.value||"").trim(),tags:pt(be.value)}),Ne())}function mt(u,t,O){if(!t||!O||t===O)return;const ve=W.value.filter(lt=>lt.scope===u),Ae=ve.findIndex(lt=>lt.id===t),Be=ve.findIndex(lt=>lt.id===O);if(Ae===-1||Be===-1)return;const Ge=[...ve],[Fe]=Ge.splice(Ae,1);Ge.splice(Be,0,Fe);const bt=W.value.filter(lt=>lt.scope!==u),kt=[];W.value.forEach(lt=>{if(lt.scope===u){Ge.length&&kt.push(Ge.shift());return}const Nt=bt.shift();Nt&&kt.push(Nt)}),Me({motionPresets:kt})}function vt(u){ne.value=u.id,ke.value=u.id}function Xe(u){ne.value&&(ke.value=u.id)}function ft(u){ne.value&&(mt(u.scope,ne.value,u.id),ne.value="",ke.value="")}function Tt(){ne.value="",ke.value=""}function Mt(){F.value+=1}function Pt(){ie.value+=1}function _t(u,t){we({[u]:t})}function Dt(u){const t=Math.max(0,Number(u)||0);we({duration:t})}function ht(u){var ve;if(!a.value)return;const O={...((ve=a.value.animations)==null?void 0:ve[0])||{type:"auto",delay:0,duration:.64},...u};if(O.type==="auto"){D({animations:[]});return}D({animations:[{type:O.type||"none",delay:Math.max(0,Number(O.delay)||0),duration:Math.max(.1,Number(O.duration)||.64)}]})}const dt=z("stagger-in"),r=z(0),n=z(.12),v=z(.72);Je(N,u=>{u.length&&(dt.value=g.value.type==="mixed"?"stagger-in":g.value.type,v.value=g.value.duration)},{immediate:!0,deep:!0});function M(){if(!N.value.length)return;[...N.value].sort((t,O)=>(t.y||0)!==(O.y||0)?(t.y||0)-(O.y||0):(t.x||0)-(O.x||0)).forEach((t,O)=>{if(dt.value==="auto"){d.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}d.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:dt.value,delay:Math.max(0,Number(r.value)||0)+O*Math.max(0,Number(n.value)||0),duration:Math.max(.1,Number(v.value)||.72)}]})})}function y(u){dt.value=u.type||"stagger-in",r.value=Number(u.delay||0),n.value=Number(u.stepDelay||0),v.value=Number(u.duration||.72),Ve(u.id),Pt()}function se(){Ee({scope:"group",name:xe.value,category:_.value,tags:pt(X.value),type:dt.value,delay:Math.max(0,Number(r.value)||0),stepDelay:Math.max(0,Number(n.value)||0),duration:Math.max(.1,Number(v.value)||.72)}),xe.value="",_.value="",X.value=""}function Pe(u){ht({type:u.type||"auto",delay:Number(u.delay||0),duration:Number(u.duration||.72)}),Ve(u.id),Mt()}function Ze(){Ee({scope:"single",name:te.value,category:C.value,tags:pt(j.value),type:Y.value.type,delay:Math.max(0,Number(Y.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(Y.value.duration)||.72)}),te.value="",C.value="",j.value=""}function P(){var u;(u=$e.value)==null||u.click()}async function tt(u){var ve;const t=u.target,O=(ve=t==null?void 0:t.files)==null?void 0:ve[0];if(O)try{const Ae=await O.text(),Be=JSON.parse(Ae),Ge=Array.isArray(Be)?Be:Array.isArray(Be.motionPresets)?Be.motionPresets:[];if(!Ge.length)return;oe.value=Ge.map(Fe=>({...It(Fe),selected:!0,importName:String((Fe==null?void 0:Fe.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function gt(){oe.value=[]}function xt(){const u=oe.value.filter(O=>O.selected);if(!u.length)return;const t=[...W.value];u.forEach(O=>{const ve=t.findIndex(Ae=>Ae.scope===O.scope&&Ae.name.toLowerCase()===O.name.toLowerCase());if(ve>=0){ae.value==="replace"?t.splice(ve,1,{...t[ve],...O,id:t[ve].id}):t.push({...O,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:de(O.scope,O.name)});return}t.push(O)}),Me({motionPresets:t}),gt()}function xl(){var Be;if(!W.value.length)return;const u={version:1,exportedAt:new Date().toISOString(),motionPresets:W.value.map(({id:Ge,...Fe})=>Fe)},t=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),O=URL.createObjectURL(t),ve=document.createElement("a"),Ae=String(((Be=c.value)==null?void 0:Be.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";ve.href=O,ve.download=`${Ae}-motion-presets.json`,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve),URL.revokeObjectURL(O)}const kl=A(()=>[{id:`single-${F.value}`,delay:Math.max(0,Number(Y.value.delay)||0),duration:Math.max(.1,Number(Y.value.duration)||.72),type:Y.value.type}]),wl=A(()=>Array.from({length:Math.min(Math.max(N.value.length,3),5)},(u,t)=>({id:`group-${ie.value}-${t}`,delay:Math.max(0,Number(r.value)||0)+t*Math.max(0,Number(n.value)||0),duration:Math.max(.1,Number(v.value)||.72),type:dt.value}))),Ft=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Ut=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(u,t)=>{var O,ve,Ae,Be,Ge,Fe,bt,kt,lt,Nt,Vt,Wt,Gt,Ht,Yt,Jt,Qt,Xt,Kt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,yo,ho,xo,ko,wo,Co,So,$o,Io,Eo,Ao,To,Mo,Po,No,Bo,zo,Lo,jo,_o,Do,qo,Ro,Oo,Fo,Uo,Vo,Wo,Go,Ho,Yo,Jo,Qo,Xo,Ko,Zo,en,tn,on,nn,ln,an,sn,rn,dn,un,cn,pn,vn,fn,mn,gn,bn,yn,hn,xn,kn,wn,Cn,Sn,$n,In,En,An,Tn,Mn,Pn,Nn,Bn,zn,Ln,jn,_n,Dn,qn,Rn,On,Fn,Un,Vn,Wn,Gn,Hn,Yn,Jn,Qn,Xn,Kn,Zn,el,tl,ol,nl,ll,il,al,sl;return l(),i("div",{ref_key:"panelRootRef",ref:Te,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:$e,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:tt},null,544),e("input",{ref_key:"chartImportInput",ref:je,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:ct},null,544),t[386]||(t[386]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),T.value?(l(),Ye(Na,{key:0,"search-query":he.value,"category-filter":ze.value,"available-categories":Et.value,"recent-presets":Ie.value,"pending-imported-presets":oe.value,"filtered-pending-imports":b.value,"import-scope-filter":fe.value,"import-conflict-mode":ae.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>he.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>ze.value=o),onTriggerImport:P,onExportPresets:xl,onApplyPreset:t[2]||(t[2]=o=>L.value==="group"?y(o):Pe(o)),onClearImports:gt,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>fe.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>ae.value=o),onApplyImports:xt},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):q("",!0),I(s).multiSelection?(l(),i("div",Ba,[t[185]||(t[185]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",za,w(N.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",La,[e("div",{class:"motion-scrubber-header"},[t[181]||(t[181]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Pt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${ie.value}`},[(l(!0),i(ee,null,ue(wl.value,o=>(l(),i("span",{key:o.id,class:Q(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ye({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",ja,[(l(),i(ee,null,ue(Ft,o=>e("button",{key:`group-${o.value}`,type:"button",class:Q(["motion-card",dt.value===o.value&&"active"]),onClick:J=>dt.value=o.value},[e("span",Da,[e("span",{class:Q(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",qa)):q("",!0),o.value==="stagger-in"?(l(),i("span",Ra)):q("",!0)]),e("span",Oa,w(o.label),1)],10,_a)),64))]),e("div",Fa,[e("div",Ua,[t[182]||(t[182]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),ce(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>r.value=o),class:"input"},null,512),[[Ce,r.value]])]),e("div",Va,[t[183]||(t[183]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),ce(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>n.value=o),class:"input"},null,512),[[Ce,n.value]])])]),e("div",Wa,[t[184]||(t[184]=e("label",{class:"form-label"},"Duration (seconds)",-1)),ce(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>v.value=o),class:"input"},null,512),[[Ce,v.value]])]),e("div",Ga,[ce(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>xe.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[Ce,xe.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:se},"Save")]),e("div",Ha,[ce(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>_.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[Ce,_.value]]),ce(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>X.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,X.value]])]),U.value.length?(l(),i("div",Ya,[(l(!0),i(ee,null,ue(U.value,o=>(l(),i("div",{key:o.id,class:Q(["preset-item",ne.value===o.id&&"dragging",ke.value===o.id&&ne.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:J=>vt(o),onDragenter:Re(J=>Xe(o),["prevent"]),onDragover:t[14]||(t[14]=Re(()=>{},["prevent"])),onDrop:Re(J=>ft(o),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:J=>y(o)},w(o.name),9,Qa),o.category?(l(),i("span",Xa,w(o.category),1)):q("",!0),(l(!0),i(ee,null,ue(o.tags||[],J=>(l(),i("span",{key:`${o.id}-${J}`,class:"preset-meta-chip muted"},"#"+w(J),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:J=>He(o)},"Duplicate",8,Ka),e("button",{type:"button",class:"preset-mini-btn",onClick:J=>Ue(o)},"Rename",8,Za),e("button",{type:"button",class:"preset-mini-btn danger",onClick:J=>Se(o.id)},"Delete",8,es),R.value===o.id?(l(),i("div",ts,[ce(e("input",{"onUpdate:modelValue":t[11]||(t[11]=J=>V.value=J),class:"input"},null,512),[[Ce,V.value]]),ce(e("input",{"onUpdate:modelValue":t[12]||(t[12]=J=>pe.value=J),class:"input",placeholder:"Category"},null,512),[[Ce,pe.value]]),ce(e("input",{"onUpdate:modelValue":t[13]||(t[13]=J=>be.value=J),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,be.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:J=>We(o.id)},"Save",8,os),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ne},"Cancel")])):q("",!0)],42,Ja))),128))])):B.value.length?(l(),i("div",ns,"No group presets match the current search.")):q("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:M}," Apply Sequence to Selection ")])):a.value?(l(),i(ee,{key:3},[e("div",{class:Q(["panel-section",re.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",Js,[t[216]||(t[216]=Z(" Position & Size ",-1)),e("span",Qs,w(a.value.type),1)]),e("div",Xs,[e("div",Ks,[t[217]||(t[217]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=o=>qe("x",o.target.value))},null,40,Zs)]),e("div",er,[t[218]||(t[218]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=o=>qe("y",o.target.value))},null,40,tr)]),e("div",or,[t[219]||(t[219]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=o=>qe("width",o.target.value))},null,40,nr)]),e("div",lr,[t[220]||(t[220]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=o=>qe("height",o.target.value))},null,40,ir)]),e("div",ar,[t[221]||(t[221]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>qe("rotation",o.target.value))},null,40,sr)]),e("div",rr,[t[222]||(t[222]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>qe("opacity",o.target.value))},null,40,dr)])])],2),e("div",{class:Q(["panel-section",re.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[226]||(t[226]=e("div",{class:"panel-title"},"Animation",-1)),e("div",ur,[e("div",{class:"motion-scrubber-header"},[t[223]||(t[223]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Mt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${F.value}`},[(l(!0),i(ee,null,ue(kl.value,o=>(l(),i("span",{key:o.id,class:Q(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ye({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",cr,[(l(),i(ee,null,ue(Ft,o=>e("button",{key:o.value,type:"button",class:Q(["motion-card",Y.value.type===o.value&&"active"]),onClick:J=>ht({type:o.value})},[e("span",vr,[e("span",{class:Q(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",fr)):q("",!0),o.value==="stagger-in"?(l(),i("span",mr)):q("",!0)]),e("span",gr,w(o.label),1)],10,pr)),64))]),e("div",br,[e("div",yr,[t[224]||(t[224]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:Y.value.delay,class:"input",onChange:t[45]||(t[45]=o=>ht({delay:o.target.value}))},null,40,hr)]),e("div",xr,[t[225]||(t[225]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:Y.value.duration,class:"input",onChange:t[46]||(t[46]=o=>ht({duration:o.target.value}))},null,40,kr)])]),e("div",wr,[ce(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>te.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[Ce,te.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ze},"Save")]),e("div",Cr,[ce(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>C.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[Ce,C.value]]),ce(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>j.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,j.value]])]),K.value.length?(l(),i("div",Sr,[(l(!0),i(ee,null,ue(K.value,o=>(l(),i("div",{key:o.id,class:Q(["preset-item",ne.value===o.id&&"dragging",ke.value===o.id&&ne.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:J=>vt(o),onDragenter:Re(J=>Xe(o),["prevent"]),onDragover:t[53]||(t[53]=Re(()=>{},["prevent"])),onDrop:Re(J=>ft(o),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:J=>Pe(o)},w(o.name),9,Ir),o.category?(l(),i("span",Er,w(o.category),1)):q("",!0),(l(!0),i(ee,null,ue(o.tags||[],J=>(l(),i("span",{key:`${o.id}-${J}`,class:"preset-meta-chip muted"},"#"+w(J),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:J=>He(o)},"Duplicate",8,Ar),e("button",{type:"button",class:"preset-mini-btn",onClick:J=>Ue(o)},"Rename",8,Tr),e("button",{type:"button",class:"preset-mini-btn danger",onClick:J=>Se(o.id)},"Delete",8,Mr),R.value===o.id?(l(),i("div",Pr,[ce(e("input",{"onUpdate:modelValue":t[50]||(t[50]=J=>V.value=J),class:"input"},null,512),[[Ce,V.value]]),ce(e("input",{"onUpdate:modelValue":t[51]||(t[51]=J=>pe.value=J),class:"input",placeholder:"Category"},null,512),[[Ce,pe.value]]),ce(e("input",{"onUpdate:modelValue":t[52]||(t[52]=J=>be.value=J),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,be.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:J=>We(o.id)},"Save",8,Nr),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ne},"Cancel")])):q("",!0)],42,$r))),128))])):ge.value.length?(l(),i("div",Br,"No single-element presets match the current search.")):q("",!0),t[227]||(t[227]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[243]||(t[243]=e("div",{class:"panel-title"},"Text",-1)),e("div",zr,[t[228]||(t[228]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(kt=a.value.content)==null?void 0:kt.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>m({text:o.target.value}))},null,40,Lr)]),e("div",jr,[e("div",_r,[t[229]||(t[229]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(lt=a.value.content)==null?void 0:lt.fontSize,class:"input",onChange:t[55]||(t[55]=o=>m({fontSize:+o.target.value}))},null,40,Dr)]),e("div",qr,[t[231]||(t[231]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(Nt=a.value.content)==null?void 0:Nt.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>m({fontWeight:o.target.value}))},[...t[230]||(t[230]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Rr)])]),e("div",Or,[t[232]||(t[232]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Vt=a.value.content)==null?void 0:Vt.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>m({fontFamily:o.target.value}))},[(l(),i(ee,null,ue(Ut,o=>e("option",{key:o,value:o},w(o.split(",")[0]),9,Ur)),64))],40,Fr)]),e("div",Vr,[t[233]||(t[233]=e("label",{class:"form-label"},"Align",-1)),e("div",Wr,[(l(),i(ee,null,ue(["left","center","right","justify"],o=>{var J;return e("button",{key:o,class:Q(["align-btn",((J=a.value.content)==null?void 0:J.textAlign)===o&&"active"]),onClick:rl=>m({textAlign:o})},w(o[0].toUpperCase()),11,Gr)}),64))])]),e("div",Hr,[t[237]||(t[237]=e("label",{class:"form-label"},"Style",-1)),e("div",Yr,[e("button",{class:Q(["style-btn",((Wt=a.value.content)==null?void 0:Wt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var J;return m({fontStyle:((J=a.value.content)==null?void 0:J.fontStyle)==="italic"?"normal":"italic"})})},[...t[234]||(t[234]=[e("i",null,"I",-1)])],2),e("button",{class:Q(["style-btn",((Gt=a.value.content)==null?void 0:Gt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var J;return m({textDecoration:((J=a.value.content)==null?void 0:J.textDecoration)==="underline"?"none":"underline"})})},[...t[235]||(t[235]=[e("u",null,"U",-1)])],2),e("button",{class:Q(["style-btn",((Ht=a.value.content)==null?void 0:Ht.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var J;return m({textDecoration:((J=a.value.content)==null?void 0:J.textDecoration)==="line-through"?"none":"line-through"})})},[...t[236]||(t[236]=[e("s",null,"S",-1)])],2)])]),e("div",Jr,[t[238]||(t[238]=e("label",{class:"form-label"},"Color",-1)),e("div",Qr,[e("input",{type:"color",value:((Yt=a.value.content)==null?void 0:Yt.color)||"#000",onInput:t[61]||(t[61]=o=>m({color:o.target.value})),class:"color-input-native"},null,40,Xr),e("input",{value:((Jt=a.value.content)==null?void 0:Jt.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>m({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Kr)])]),e("div",Zr,[t[239]||(t[239]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Qt=a.value.content)==null?void 0:Qt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>m({lineHeight:+o.target.value}))},null,40,ed)]),e("div",td,[e("div",od,[t[241]||(t[241]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Xt=a.value.content)==null?void 0:Xt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>m({textTransform:o.target.value}))},[...t[240]||(t[240]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,nd)]),e("div",ld,[t[242]||(t[242]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Kt=a.value.content)==null?void 0:Kt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>m({letterSpacing:+o.target.value}))},null,40,id)])])],2)):q("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[251]||(t[251]=e("div",{class:"panel-title"},"Image",-1)),e("div",ad,[t[244]||(t[244]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Zt=a.value.content)==null?void 0:Zt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>m({src:o.target.value}))},null,40,sd)]),e("div",rd,[t[245]||(t[245]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(eo=a.value.content)==null?void 0:eo.alt,class:"input",onInput:t[67]||(t[67]=o=>m({alt:o.target.value}))},null,40,dd)]),e("div",ud,[t[247]||(t[247]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((to=a.value.content)==null?void 0:to.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>m({objectFit:o.target.value}))},[...t[246]||(t[246]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,cd)]),e("div",pd,[t[248]||(t[248]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((oo=a.value.content)==null?void 0:oo.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>m({borderRadius:+o.target.value}))},null,40,vd)]),e("div",fd,[e("div",md,[t[249]||(t[249]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((no=a.value.content)==null?void 0:no.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>m({borderWidth:+o.target.value}))},null,40,gd)]),e("div",bd,[t[250]||(t[250]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((lo=a.value.content)==null?void 0:lo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>m({borderColor:o.target.value}))},null,40,yd)])])],2)):q("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[259]||(t[259]=e("div",{class:"panel-title"},"Shape",-1)),e("div",hd,[t[253]||(t[253]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((io=a.value.content)==null?void 0:io.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>m({shapeType:o.target.value}))},[...t[252]||(t[252]=[et('<option value="rectangle" data-v-daf50f54>Rectangle</option><option value="circle" data-v-daf50f54>Circle</option><option value="triangle" data-v-daf50f54>Triangle</option><option value="star" data-v-daf50f54>Star</option><option value="arrow" data-v-daf50f54>Arrow</option><option value="diamond" data-v-daf50f54>Diamond</option>',6)])],40,xd)]),e("div",kd,[t[254]||(t[254]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",wd,[e("input",{type:"color",value:((ao=a.value.content)==null?void 0:ao.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>m({fillColor:o.target.value})),class:"color-input-native"},null,40,Cd),e("input",{value:((so=a.value.content)==null?void 0:so.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>m({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Sd)])]),e("div",$d,[t[255]||(t[255]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Id,[e("input",{type:"color",value:((ro=a.value.content)==null?void 0:ro.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>m({borderColor:o.target.value})),class:"color-input-native"},null,40,Ed),e("input",{value:((uo=a.value.content)==null?void 0:uo.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>m({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ad)])]),e("div",Td,[t[256]||(t[256]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((co=a.value.content)==null?void 0:co.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>m({borderWidth:+o.target.value}))},null,40,Md)]),e("div",Pd,[t[257]||(t[257]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((po=a.value.content)==null?void 0:po.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>m({borderRadius:+o.target.value}))},null,40,Nd)]),e("div",Bd,[t[258]||(t[258]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((vo=a.value.content)==null?void 0:vo.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>m({opacity:+o.target.value}))},null,40,zd)])],2)):q("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[280]||(t[280]=e("div",{class:"panel-title"},"Chart",-1)),e("div",Ld,[t[261]||(t[261]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((fo=a.value.content)==null?void 0:fo.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=o=>m({chartType:o.target.value}))},[...t[260]||(t[260]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,jd)]),e("div",_d,[t[262]||(t[262]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((mo=a.value.content)==null?void 0:mo.title)||"",class:"input",onInput:t[81]||(t[81]=o=>m({title:o.target.value}))},null,40,Dd)]),e("div",qd,[t[263]||(t[263]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((go=a.value.content)==null?void 0:go.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=o=>m({dataText:o.target.value}))},null,40,Rd),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ct},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ke},"Upload CSV")]),t[264]||(t[264]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Od,[t[265]||(t[265]=e("label",{class:"form-label"},"Paste table data",-1)),ce(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=o=>me.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[Ce,me.value]]),e("div",Fd,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=o=>De(me.value))},"Convert pasted data")])]),e("div",Ud,[t[266]||(t[266]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((bo=a.value.content)==null?void 0:bo.paletteText)||"",class:"input",placeholder:nt.value.paletteText,onInput:t[85]||(t[85]=o=>m({paletteText:o.target.value}))},null,40,Vd),e("div",Wd,[(l(!0),i(ee,null,ue(wt.value,(o,J)=>(l(),i("span",{key:`chart-palette-${J}`,class:"chart-palette-swatch",style:ye({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:$t},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:St},"Apply theme colors")]),t[267]||(t[267]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Gd,[e("div",Hd,[t[268]||(t[268]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((yo=a.value.content)==null?void 0:yo.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=o=>m({backgroundColor:o.target.value}))},null,40,Yd)]),e("div",Jd,[t[269]||(t[269]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((ho=a.value.content)==null?void 0:ho.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=o=>m({textColor:o.target.value}))},null,40,Qd)])]),e("div",Xd,[e("div",Kd,[t[270]||(t[270]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((xo=a.value.content)==null?void 0:xo.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=o=>m({gridColor:o.target.value}))},null,40,Zd)]),e("div",eu,[t[271]||(t[271]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((ko=a.value.content)==null?void 0:ko.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=o=>m({borderColor:o.target.value}))},null,40,tu)])]),e("div",ou,[e("div",nu,[t[272]||(t[272]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((wo=a.value.content)==null?void 0:wo.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=o=>m({borderWidth:+o.target.value}))},null,40,lu)]),((Co=a.value.content)==null?void 0:Co.chartType)!=="circle"?(l(),i("div",iu,[t[273]||(t[273]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((So=a.value.content)==null?void 0:So.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=o=>m({maxValue:o.target.value}))},null,40,au)])):(l(),i("div",su,[t[274]||(t[274]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:(($o=a.value.content)==null?void 0:$o.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=o=>m({innerRadius:+o.target.value}))},null,40,ru)]))]),((Io=a.value.content)==null?void 0:Io.chartType)==="line"?(l(),i("div",du,[e("div",uu,[t[275]||(t[275]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((Eo=a.value.content)==null?void 0:Eo.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=o=>m({strokeWidth:+o.target.value}))},null,40,cu)]),e("label",pu,[e("input",{type:"checkbox",checked:!!((Ao=a.value.content)!=null&&Ao.showArea),onChange:t[94]||(t[94]=o=>m({showArea:o.target.checked}))},null,40,vu),t[276]||(t[276]=Z(" Show area fill ",-1))])])):q("",!0),e("label",fu,[e("input",{type:"checkbox",checked:((To=a.value.content)==null?void 0:To.showLegend)!==!1,onChange:t[95]||(t[95]=o=>m({showLegend:o.target.checked}))},null,40,mu),t[277]||(t[277]=Z(" Show legend ",-1))]),((Mo=a.value.content)==null?void 0:Mo.chartType)!=="circle"?(l(),i("label",gu,[e("input",{type:"checkbox",checked:((Po=a.value.content)==null?void 0:Po.showGrid)!==!1,onChange:t[96]||(t[96]=o=>m({showGrid:o.target.checked}))},null,40,bu),t[278]||(t[278]=Z(" Show grid lines ",-1))])):q("",!0),e("label",yu,[e("input",{type:"checkbox",checked:((No=a.value.content)==null?void 0:No.showValues)!==!1,onChange:t[97]||(t[97]=o=>m({showValues:o.target.checked}))},null,40,hu),t[279]||(t[279]=Z(" Show values ",-1))])],2)):q("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[296]||(t[296]=e("div",{class:"panel-title"},"Button",-1)),e("div",xu,[t[281]||(t[281]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Bo=a.value.content)==null?void 0:Bo.label,class:"input",onInput:t[98]||(t[98]=o=>m({label:o.target.value}))},null,40,ku)]),e("div",wu,[t[283]||(t[283]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((zo=a.value.content)==null?void 0:zo.variant)||"primary",class:"select",onChange:t[99]||(t[99]=o=>m({variant:o.target.value}))},[...t[282]||(t[282]=[et('<option value="primary" data-v-daf50f54>Primary</option><option value="secondary" data-v-daf50f54>Secondary</option><option value="outline" data-v-daf50f54>Outline</option><option value="ghost" data-v-daf50f54>Ghost</option><option value="danger" data-v-daf50f54>Danger</option>',5)])],40,Cu)]),e("div",Su,[t[285]||(t[285]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Lo=a.value.content)==null?void 0:Lo.action)||"none",class:"select",onChange:t[100]||(t[100]=o=>m({action:o.target.value}))},[...t[284]||(t[284]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,$u)]),(jo=a.value.content)!=null&&jo.action&&a.value.content.action!=="none"?(l(),i("div",Iu,[t[286]||(t[286]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(_o=a.value.content)==null?void 0:_o.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=o=>m({target:o.target.value}))},null,40,Eu)])):q("",!0),e("div",Au,[e("div",Tu,[t[287]||(t[287]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Do=a.value.content)==null?void 0:Do.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=o=>m({bgColor:o.target.value}))},null,40,Mu)]),e("div",Pu,[t[288]||(t[288]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((qo=a.value.content)==null?void 0:qo.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=o=>m({textColor:o.target.value}))},null,40,Nu)])]),e("div",Bu,[e("div",zu,[t[289]||(t[289]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Ro=a.value.content)==null?void 0:Ro.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=o=>m({borderColor:o.target.value}))},null,40,Lu)]),e("div",ju,[t[290]||(t[290]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Oo=a.value.content)==null?void 0:Oo.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=o=>m({borderRadius:+o.target.value}))},null,40,_u)])]),e("div",Du,[e("div",qu,[t[291]||(t[291]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Fo=a.value.content)==null?void 0:Fo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=o=>m({fontSize:+o.target.value}))},null,40,Ru)]),e("div",Ou,[t[293]||(t[293]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Uo=a.value.content)==null?void 0:Uo.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=o=>m({fontWeight:+o.target.value}))},[...t[292]||(t[292]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Fu)])]),e("div",Uu,[e("div",Vu,[t[294]||(t[294]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Vo=a.value.content)==null?void 0:Vo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=o=>m({fontFamily:o.target.value}))},[(l(),i(ee,null,ue(Ut,o=>e("option",{key:`btn-${o}`,value:o},w(o.split(",")[0]),9,Gu)),64))],40,Wu)]),e("div",Hu,[t[295]||(t[295]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Wo=a.value.content)==null?void 0:Wo.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=o=>m({letterSpacing:+o.target.value}))},null,40,Yu)])])],2)):q("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[306]||(t[306]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Ju,[t[298]||(t[298]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Go=a.value.content)==null?void 0:Go.icon)||"?",class:"select",onChange:t[110]||(t[110]=o=>m({icon:o.target.value}))},[...t[297]||(t[297]=[et('<option value="?" data-v-daf50f54>? (Info)</option><option value="!" data-v-daf50f54>! (Alert)</option><option value="+" data-v-daf50f54>+ (Plus)</option><option value="i" data-v-daf50f54>i (Info)</option><option value="✦" data-v-daf50f54>✦ (Star)</option>',5)])],40,Qu)]),e("div",Xu,[t[299]||(t[299]=e("label",{class:"form-label"},"Background Color",-1)),e("div",Ku,[e("input",{type:"color",value:((Ho=a.value.content)==null?void 0:Ho.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=o=>m({bgColor:o.target.value})),class:"color-input-native"},null,40,Zu),e("input",{value:((Yo=a.value.content)==null?void 0:Yo.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=o=>m({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,ec)])]),e("div",tc,[e("div",oc,[t[300]||(t[300]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Jo=a.value.content)==null?void 0:Jo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=o=>m({iconColor:o.target.value}))},null,40,nc)]),e("div",lc,[t[301]||(t[301]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Qo=a.value.content)==null?void 0:Qo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=o=>m({borderRadius:+o.target.value}))},null,40,ic)])]),e("div",ac,[t[302]||(t[302]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Xo=a.value.content)==null?void 0:Xo.popupTitle,class:"input",onInput:t[115]||(t[115]=o=>m({popupTitle:o.target.value}))},null,40,sc)]),e("div",rc,[t[303]||(t[303]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Ko=a.value.content)==null?void 0:Ko.popupContent,class:"textarea",onInput:t[116]||(t[116]=o=>m({popupContent:o.target.value}))},null,40,dc)]),e("div",uc,[e("div",cc,[t[304]||(t[304]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Zo=a.value.content)==null?void 0:Zo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>m({popupBgColor:o.target.value}))},null,40,pc)]),e("div",vc,[t[305]||(t[305]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((en=a.value.content)==null?void 0:en.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>m({popupTextColor:o.target.value}))},null,40,fc)])])],2)):q("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[315]||(t[315]=e("div",{class:"panel-title"},"Video",-1)),e("div",mc,[t[307]||(t[307]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(tn=a.value.content)==null?void 0:tn.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=o=>m({src:o.target.value}))},null,40,gc)]),e("div",bc,[t[308]||(t[308]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(on=a.value.content)==null?void 0:on.poster,class:"input",onInput:t[120]||(t[120]=o=>m({poster:o.target.value}))},null,40,yc)]),e("div",hc,[t[310]||(t[310]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((nn=a.value.content)==null?void 0:nn.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=o=>m({objectFit:o.target.value}))},[...t[309]||(t[309]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,xc)]),e("label",kc,[e("input",{type:"checkbox",checked:(ln=a.value.content)==null?void 0:ln.autoplay,onChange:t[122]||(t[122]=o=>m({autoplay:o.target.checked}))},null,40,wc),t[311]||(t[311]=Z(" Autoplay ",-1))]),e("label",Cc,[e("input",{type:"checkbox",checked:((an=a.value.content)==null?void 0:an.controls)??!0,onChange:t[123]||(t[123]=o=>m({controls:o.target.checked}))},null,40,Sc),t[312]||(t[312]=Z(" Show Controls ",-1))]),e("label",$c,[e("input",{type:"checkbox",checked:(sn=a.value.content)==null?void 0:sn.loop,onChange:t[124]||(t[124]=o=>m({loop:o.target.checked}))},null,40,Ic),t[313]||(t[313]=Z(" Loop ",-1))]),e("label",Ec,[e("input",{type:"checkbox",checked:(rn=a.value.content)==null?void 0:rn.muted,onChange:t[125]||(t[125]=o=>m({muted:o.target.checked}))},null,40,Ac),t[314]||(t[314]=Z(" Muted ",-1))])],2)):q("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[324]||(t[324]=e("div",{class:"panel-title"},"Audio",-1)),e("div",Tc,[t[316]||(t[316]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(dn=a.value.content)==null?void 0:dn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=o=>m({src:o.target.value}))},null,40,Mc)]),e("div",Pc,[t[317]||(t[317]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(un=a.value.content)==null?void 0:un.label,class:"input",onInput:t[127]||(t[127]=o=>m({label:o.target.value}))},null,40,Nc)]),e("label",Bc,[e("input",{type:"checkbox",checked:(cn=a.value.content)==null?void 0:cn.autoplay,onChange:t[128]||(t[128]=o=>m({autoplay:o.target.checked}))},null,40,zc),t[318]||(t[318]=Z(" Autoplay ",-1))]),e("label",Lc,[e("input",{type:"checkbox",checked:((pn=a.value.content)==null?void 0:pn.controls)!==!1,onChange:t[129]||(t[129]=o=>m({controls:o.target.checked}))},null,40,jc),t[319]||(t[319]=Z(" Show Controls ",-1))]),e("label",_c,[e("input",{type:"checkbox",checked:(vn=a.value.content)==null?void 0:vn.loop,onChange:t[130]||(t[130]=o=>m({loop:o.target.checked}))},null,40,Dc),t[320]||(t[320]=Z(" Loop ",-1))]),e("div",qc,[e("div",Rc,[t[321]||(t[321]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((fn=a.value.content)==null?void 0:fn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=o=>m({accentColor:o.target.value}))},null,40,Oc)]),e("div",Fc,[t[322]||(t[322]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((mn=a.value.content)==null?void 0:mn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=o=>m({textColor:o.target.value}))},null,40,Uc)])]),e("div",Vc,[t[323]||(t[323]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((gn=a.value.content)==null?void 0:gn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=o=>m({bgColor:o.target.value}))},null,40,Wc)])],2)):q("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[332]||(t[332]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Gc,[t[325]||(t[325]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(bn=a.value.content)==null?void 0:bn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=o=>m({question:o.target.value}))},null,40,Hc)]),e("div",Yc,[t[326]||(t[326]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(hn=(yn=a.value.content)==null?void 0:yn.options)==null?void 0:hn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=o=>m({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,Jc)]),e("div",Qc,[t[327]||(t[327]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((xn=a.value.content)==null?void 0:xn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=o=>m({correctIndex:+o.target.value}))},null,40,Xc)]),e("div",Kc,[t[328]||(t[328]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(kn=a.value.content)==null?void 0:kn.explanation,class:"textarea",onInput:t[137]||(t[137]=o=>m({explanation:o.target.value}))},null,40,Zc)]),e("div",ep,[e("div",tp,[t[329]||(t[329]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((wn=a.value.content)==null?void 0:wn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=o=>m({cardBgColor:o.target.value}))},null,40,op)]),e("div",np,[t[330]||(t[330]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((Cn=a.value.content)==null?void 0:Cn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=o=>m({questionColor:o.target.value}))},null,40,lp)])]),e("div",ip,[t[331]||(t[331]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Sn=a.value.content)==null?void 0:Sn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=o=>m({accentColor:o.target.value}))},null,40,ap)])],2)):a.value.type==="tabs"?(l(),i("div",{key:9,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[338]||(t[338]=e("div",{class:"panel-title"},"Tabs Configuration",-1)),e("div",sp,[t[333]||(t[333]=e("label",{class:"form-label"},"Tabs Data (JSON)",-1)),e("textarea",{value:JSON.stringify((($n=a.value.content)==null?void 0:$n.tabs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[141]||(t[141]=o=>{var J;return m({tabs:_e(o.target.value,(J=a.value.content)==null?void 0:J.tabs)})})},null,40,rp)]),e("div",dp,[e("div",up,[t[334]||(t[334]=e("label",{class:"form-label"},"Active Tab",-1)),e("input",{type:"color",value:((In=a.value.content)==null?void 0:In.activeTabColor)||"#6c47ff",class:"color-input-native",onInput:t[142]||(t[142]=o=>m({activeTabColor:o.target.value}))},null,40,cp)]),e("div",pp,[t[335]||(t[335]=e("label",{class:"form-label"},"Inactive Tab",-1)),e("input",{type:"color",value:((En=a.value.content)==null?void 0:En.inactiveTabColor)||"#f8fafc",class:"color-input-native",onInput:t[143]||(t[143]=o=>m({inactiveTabColor:o.target.value}))},null,40,vp)]),e("div",fp,[t[336]||(t[336]=e("label",{class:"form-label"},"Content Bg",-1)),e("input",{type:"color",value:((An=a.value.content)==null?void 0:An.contentBgColor)||"#ffffff",class:"color-input-native",onInput:t[144]||(t[144]=o=>m({contentBgColor:o.target.value}))},null,40,mp)]),e("div",gp,[t[337]||(t[337]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Tn=a.value.content)==null?void 0:Tn.textColor)||"#1e293b",class:"color-input-native",onInput:t[145]||(t[145]=o=>m({textColor:o.target.value}))},null,40,bp)])])],2)):a.value.type==="accordion"?(l(),i("div",{key:10,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[344]||(t[344]=e("div",{class:"panel-title"},"Accordion Configuration",-1)),e("div",yp,[t[339]||(t[339]=e("label",{class:"form-label"},"Items Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Mn=a.value.content)==null?void 0:Mn.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[146]||(t[146]=o=>{var J;return m({items:_e(o.target.value,(J=a.value.content)==null?void 0:J.items)})})},null,40,hp)]),e("div",xp,[e("div",kp,[t[340]||(t[340]=e("label",{class:"form-label"},"Active Bg Color",-1)),e("input",{type:"color",value:((Pn=a.value.content)==null?void 0:Pn.activeBgColor)||"#f8fafc",class:"color-input-native",onInput:t[147]||(t[147]=o=>m({activeBgColor:o.target.value}))},null,40,wp)]),e("div",Cp,[t[341]||(t[341]=e("label",{class:"form-label"},"Active Title Color",-1)),e("input",{type:"color",value:((Nn=a.value.content)==null?void 0:Nn.activeColor)||"#6c47ff",class:"color-input-native",onInput:t[148]||(t[148]=o=>m({activeColor:o.target.value}))},null,40,Sp)]),e("div",$p,[t[342]||(t[342]=e("label",{class:"form-label"},"Item Bg Color",-1)),e("input",{type:"color",value:((Bn=a.value.content)==null?void 0:Bn.itemBgColor)||"#ffffff",class:"color-input-native",onInput:t[149]||(t[149]=o=>m({itemBgColor:o.target.value}))},null,40,Ip)]),e("div",Ep,[t[343]||(t[343]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((zn=a.value.content)==null?void 0:zn.textColor)||"#475569",class:"color-input-native",onInput:t[150]||(t[150]=o=>m({textColor:o.target.value}))},null,40,Ap)])])],2)):a.value.type==="flipcard"?(l(),i("div",{key:11,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[355]||(t[355]=e("div",{class:"panel-title"},"Flip Card Content",-1)),e("div",Tp,[t[346]||(t[346]=e("label",{class:"form-label"},"Direction",-1)),e("select",{value:((Ln=a.value.content)==null?void 0:Ln.flipDirection)||"horizontal",class:"select",onChange:t[151]||(t[151]=o=>m({flipDirection:o.target.value}))},[...t[345]||(t[345]=[e("option",{value:"horizontal"},"Horizontal (Y-axis)",-1),e("option",{value:"vertical"},"Vertical (X-axis)",-1)])],40,Mp)]),e("div",Pp,[t[347]||(t[347]=e("label",{class:"form-label"},"Front Title",-1)),e("input",{type:"text",value:(jn=a.value.content)==null?void 0:jn.frontTitle,class:"input",onInput:t[152]||(t[152]=o=>m({frontTitle:o.target.value}))},null,40,Np)]),e("div",Bp,[t[348]||(t[348]=e("label",{class:"form-label"},"Front Content",-1)),e("textarea",{value:(_n=a.value.content)==null?void 0:_n.frontContent,class:"textarea",onInput:t[153]||(t[153]=o=>m({frontContent:o.target.value}))},null,40,zp)]),e("div",Lp,[t[349]||(t[349]=e("label",{class:"form-label"},"Back Title",-1)),e("input",{type:"text",value:(Dn=a.value.content)==null?void 0:Dn.backTitle,class:"input",onInput:t[154]||(t[154]=o=>m({backTitle:o.target.value}))},null,40,jp)]),e("div",_p,[t[350]||(t[350]=e("label",{class:"form-label"},"Back Content",-1)),e("textarea",{value:(qn=a.value.content)==null?void 0:qn.backContent,class:"textarea",onInput:t[155]||(t[155]=o=>m({backContent:o.target.value}))},null,40,Dp)]),e("div",qp,[e("div",Rp,[t[351]||(t[351]=e("label",{class:"form-label"},"Front Bg",-1)),e("input",{type:"color",value:((Rn=a.value.content)==null?void 0:Rn.frontBgColor)||"#6c47ff",class:"color-input-native",onInput:t[156]||(t[156]=o=>m({frontBgColor:o.target.value}))},null,40,Op)]),e("div",Fp,[t[352]||(t[352]=e("label",{class:"form-label"},"Front Text",-1)),e("input",{type:"color",value:((On=a.value.content)==null?void 0:On.frontTextColor)||"#ffffff",class:"color-input-native",onInput:t[157]||(t[157]=o=>m({frontTextColor:o.target.value}))},null,40,Up)]),e("div",Vp,[t[353]||(t[353]=e("label",{class:"form-label"},"Back Bg",-1)),e("input",{type:"color",value:((Fn=a.value.content)==null?void 0:Fn.backBgColor)||"#ffffff",class:"color-input-native",onInput:t[158]||(t[158]=o=>m({backBgColor:o.target.value}))},null,40,Wp)]),e("div",Gp,[t[354]||(t[354]=e("label",{class:"form-label"},"Back Text",-1)),e("input",{type:"color",value:((Un=a.value.content)==null?void 0:Un.backTextColor)||"#1e293b",class:"color-input-native",onInput:t[159]||(t[159]=o=>m({backTextColor:o.target.value}))},null,40,Hp)])])],2)):a.value.type==="stepper"?(l(),i("div",{key:12,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[361]||(t[361]=e("div",{class:"panel-title"},"Stepper Configuration",-1)),e("div",Yp,[t[356]||(t[356]=e("label",{class:"form-label"},"Steps Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Vn=a.value.content)==null?void 0:Vn.steps)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[160]||(t[160]=o=>{var J;return m({steps:_e(o.target.value,(J=a.value.content)==null?void 0:J.steps)})})},null,40,Jp)]),e("div",Qp,[e("div",Xp,[t[357]||(t[357]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Wn=a.value.content)==null?void 0:Wn.bgColor)||"#ffffff",class:"color-input-native",onInput:t[161]||(t[161]=o=>m({bgColor:o.target.value}))},null,40,Kp)]),e("div",Zp,[t[358]||(t[358]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Gn=a.value.content)==null?void 0:Gn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[162]||(t[162]=o=>m({accentColor:o.target.value}))},null,40,ev)]),e("div",tv,[t[359]||(t[359]=e("label",{class:"form-label"},"Title Color",-1)),e("input",{type:"color",value:((Hn=a.value.content)==null?void 0:Hn.titleColor)||"#0f172a",class:"color-input-native",onInput:t[163]||(t[163]=o=>m({titleColor:o.target.value}))},null,40,ov)]),e("div",nv,[t[360]||(t[360]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Yn=a.value.content)==null?void 0:Yn.textColor)||"#475569",class:"color-input-native",onInput:t[164]||(t[164]=o=>m({textColor:o.target.value}))},null,40,lv)])])],2)):a.value.type==="poll"?(l(),i("div",{key:13,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[365]||(t[365]=e("div",{class:"panel-title"},"Poll Configuration",-1)),e("div",iv,[t[362]||(t[362]=e("label",{class:"form-label"},"Question",-1)),e("input",{type:"text",value:((Jn=a.value.content)==null?void 0:Jn.question)||"",class:"input",onInput:t[165]||(t[165]=o=>m({question:o.target.value}))},null,40,av)]),e("div",sv,[t[363]||(t[363]=e("label",{class:"form-label"},"Options (JSON)",-1)),e("textarea",{value:JSON.stringify(((Qn=a.value.content)==null?void 0:Qn.options)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[166]||(t[166]=o=>{var J;return m({options:_e(o.target.value,(J=a.value.content)==null?void 0:J.options)})})},null,40,rv)]),e("div",dv,[e("div",uv,[t[364]||(t[364]=e("label",{class:"form-label"},"Voted Color",-1)),e("input",{type:"color",value:((Xn=a.value.content)==null?void 0:Xn.votedColor)||"#6c47ff",class:"color-input-native",onInput:t[167]||(t[167]=o=>m({votedColor:o.target.value}))},null,40,cv)])])],2)):a.value.type==="labeledimage"?(l(),i("div",{key:14,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[368]||(t[368]=e("div",{class:"panel-title"},"Labeled Image Configuration",-1)),e("div",pv,[t[366]||(t[366]=e("label",{class:"form-label"},"Image URL",-1)),e("input",{type:"text",value:((Kn=a.value.content)==null?void 0:Kn.imageUrl)||"",class:"input",onInput:t[168]||(t[168]=o=>m({imageUrl:o.target.value}))},null,40,vv)]),e("div",fv,[t[367]||(t[367]=e("label",{class:"form-label"},"Markers (JSON)",-1)),e("textarea",{value:JSON.stringify(((Zn=a.value.content)==null?void 0:Zn.markers)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[169]||(t[169]=o=>{var J;return m({markers:_e(o.target.value,(J=a.value.content)==null?void 0:J.markers)})})},null,40,mv)])],2)):a.value.type==="matching"?(l(),i("div",{key:15,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[370]||(t[370]=e("div",{class:"panel-title"},"Matching Configuration",-1)),e("div",gv,[t[369]||(t[369]=e("label",{class:"form-label"},"Pairs (JSON)",-1)),e("textarea",{value:JSON.stringify(((el=a.value.content)==null?void 0:el.pairs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[170]||(t[170]=o=>{var J;return m({pairs:_e(o.target.value,(J=a.value.content)==null?void 0:J.pairs)})})},null,40,bv)])],2)):a.value.type==="sorting"?(l(),i("div",{key:16,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[372]||(t[372]=e("div",{class:"panel-title"},"Sorting Configuration",-1)),e("div",yv,[t[371]||(t[371]=e("label",{class:"form-label"},"Items (JSON) - Target Order",-1)),e("textarea",{value:JSON.stringify(((tl=a.value.content)==null?void 0:tl.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[171]||(t[171]=o=>{var J;return m({items:_e(o.target.value,(J=a.value.content)==null?void 0:J.items)})})},null,40,hv)])],2)):a.value.type==="cloze"?(l(),i("div",{key:17,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[375]||(t[375]=e("div",{class:"panel-title"},"Cloze Configuration",-1)),e("div",xv,[t[373]||(t[373]=e("label",{class:"form-label"},"Text (Wrap blanks in [ ])",-1)),e("textarea",{value:((ol=a.value.content)==null?void 0:ol.text)||"",class:"textarea",style:{"min-height":"100px","font-family":"monospace","font-size":"12px"},onChange:t[172]||(t[172]=o=>m({text:o.target.value}))},null,40,kv)]),e("div",wv,[e("div",Cv,[e("input",{type:"checkbox",id:"showCheckBtn",checked:((nl=a.value.content)==null?void 0:nl.showCheckBtn)!==!1,onChange:t[173]||(t[173]=o=>m({showCheckBtn:o.target.checked}))},null,40,Sv),t[374]||(t[374]=e("label",{for:"showCheckBtn",class:"form-label mb-0"},"Show Check Answers Button",-1))])])],2)):a.value.type==="scenario"?(l(),i("div",{key:18,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[377]||(t[377]=e("div",{class:"panel-title"},"Scenario Chat",-1)),e("div",$v,[t[376]||(t[376]=e("label",{class:"form-label"},"Messages (JSON)",-1)),e("textarea",{value:JSON.stringify(((ll=a.value.content)==null?void 0:ll.messages)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[174]||(t[174]=o=>{var J;return m({messages:_e(o.target.value,(J=a.value.content)==null?void 0:J.messages)})})},null,40,Iv)])],2)):a.value.type==="progress"?(l(),i("div",{key:19,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[381]||(t[381]=e("div",{class:"panel-title"},"Progress Settings",-1)),e("div",Ev,[e("div",Av,[t[378]||(t[378]=e("label",{class:"form-label"},"Mock XP",-1)),e("input",{type:"number",value:((il=a.value.content)==null?void 0:il.mockXP)||350,class:"input",onInput:t[175]||(t[175]=o=>m({mockXP:Number(o.target.value)}))},null,40,Tv)]),e("div",Mv,[t[379]||(t[379]=e("label",{class:"form-label"},"Mock Percent",-1)),e("input",{type:"number",value:((al=a.value.content)==null?void 0:al.mockPercent)||65,class:"input",onInput:t[176]||(t[176]=o=>m({mockPercent:Number(o.target.value)}))},null,40,Pv)])]),e("div",Nv,[e("div",Bv,[t[380]||(t[380]=e("label",{class:"form-label"},"Fill Color",-1)),e("input",{type:"color",value:((sl=a.value.content)==null?void 0:sl.fillColor)||"#10b981",class:"color-input-native",onInput:t[177]||(t[177]=o=>m({fillColor:o.target.value}))},null,40,zv)])])],2)):q("",!0),e("div",Lv,[t[385]||(t[385]=e("div",{class:"panel-title"},"Actions",-1)),e("div",jv,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[178]||(t[178]=o=>I(d).duplicateElement(I(s).projectId,I(s).currentSlideId,a.value.id))},[...t[382]||(t[382]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),Z(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[179]||(t[179]=o=>{I(s).showInteractionEditor=!0,I(s).interactionElementId=a.value.id})},[...t[383]||(t[383]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Z(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[180]||(t[180]=o=>{I(d).deleteElement(I(s).projectId,I(s).currentSlideId,a.value.id),I(s).clearSelection()})},[...t[384]||(t[384]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),Z(" Delete Element ",-1)])])])])],64)):(l(),i("div",ls,[e("div",is,[e("button",{type:"button",class:Q(["slide-settings-tab",G.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>G.value="canvas")},[...t[186]||(t[186]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:Q(["slide-settings-tab",G.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>G.value="transitions")},[...t[187]||(t[187]=[et('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-daf50f54><path d="M5 7h5" data-v-daf50f54></path><path d="M5 12h10" data-v-daf50f54></path><path d="M5 17h14" data-v-daf50f54></path><path d="M14 7l5 5-5 5" data-v-daf50f54></path></svg><span data-v-daf50f54>Transitions</span>',2)])],2),e("button",{type:"button",class:Q(["slide-settings-tab",G.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>G.value="navigation")},[...t[188]||(t[188]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),G.value==="canvas"?(l(),i("div",as,[t[203]||(t[203]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",ss,[t[189]||(t[189]=e("label",{class:"form-label"},"Title",-1)),ce(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>Le.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>_t("title",Le.value.title))},null,544),[[Ce,Le.value.title]])]),e("div",rs,[t[190]||(t[190]=e("label",{class:"form-label"},"Background",-1)),e("div",ds,[(l(),i(ee,null,ue(["color","gradient","image"],o=>{var J;return e("button",{key:o,class:Q(["bg-type-btn",(((J=p.value)==null?void 0:J.backgroundType)||"color")===o&&"active"]),onClick:rl=>we({backgroundType:o})},w(o),11,us)}),64))]),(((O=p.value)==null?void 0:O.backgroundType)||"color")==="color"?(l(),i("div",cs,[e("input",{type:"color",value:((ve=p.value)==null?void 0:ve.background)||"#ffffff",onInput:t[20]||(t[20]=o=>we({background:o.target.value})),class:"color-input-native"},null,40,ps),e("input",{value:((Ae=p.value)==null?void 0:Ae.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>we({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,vs)])):((Be=p.value)==null?void 0:Be.backgroundType)==="gradient"?ce((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>Le.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>we({backgroundGradient:Le.value.backgroundGradient}))},null,544)),[[Ce,Le.value.backgroundGradient]]):ce((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>Le.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>we({backgroundImage:Le.value.backgroundImage}))},null,544)),[[Ce,Le.value.backgroundImage]])]),e("div",fs,[t[200]||(t[200]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",ms,[(l(!0),i(ee,null,ue(I(Ll),o=>{var J;return l(),i("button",{key:o.id,type:"button",class:Q(["canvas-size-card",((J=f.value)==null?void 0:J.id)===o.id&&"active"]),onClick:rl=>st(o)},[e("span",bs,[e("span",{class:Q(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[191]||(t[191]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",ys,w(o.label),1),e("span",hs,w(o.ratioLabel),1)],10,gs)}),128))]),e("div",xs,[e("div",ks,[t[192]||(t[192]=e("span",null,"Custom",-1)),e("span",ws,"Current ratio "+w(H.value),1)]),e("div",Cs,[e("div",Ss,[t[194]||(t[194]=e("label",{class:"form-label"},"Width",-1)),e("div",$s,[e("input",{type:"number",min:"320",max:"4096",value:x.value.width,class:"input",onChange:t[26]||(t[26]=o=>ot("width",o.target.value))},null,40,Is),t[193]||(t[193]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[197]||(t[197]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Es,[t[196]||(t[196]=e("label",{class:"form-label"},"Height",-1)),e("div",As,[e("input",{type:"number",min:"320",max:"4096",value:x.value.height,class:"input",onChange:t[27]||(t[27]=o=>ot("height",o.target.value))},null,40,Ts),t[195]||(t[195]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",Ms,[ce(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>le.value=o)},null,512),[[Lt,le.value]]),t[198]||(t[198]=Z(" Maintain proportions ",-1))]),t[199]||(t[199]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[201]||(t[201]=et('<div class="canvas-size-callout" data-v-daf50f54><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-daf50f54><circle cx="12" cy="12" r="9" data-v-daf50f54></circle><path d="M12 10v6" data-v-daf50f54></path><path d="M12 7h.01" data-v-daf50f54></path></svg><span data-v-daf50f54>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",Ps,[t[202]||(t[202]=e("div",{class:"panel-title"},"Slide Notes",-1)),ce(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>Le.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>_t("notes",Le.value.notes))},null,544),[[Ce,Le.value.notes]])])])):G.value==="transitions"?(l(),i("div",Ns,[t[208]||(t[208]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((Ge=p.value)==null?void 0:Ge.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>we({transition:o.target.value}))},[...t[204]||(t[204]=[et('<option value="none" data-v-daf50f54>None</option><option value="fade" data-v-daf50f54>Fade</option><option value="slide" data-v-daf50f54>Slide</option><option value="zoom" data-v-daf50f54>Zoom</option><option value="flip" data-v-daf50f54>Flip</option>',5)])],40,Bs),e("div",zs,[t[205]||(t[205]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Fe=p.value)==null?void 0:Fe.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>Dt(o.target.value))},null,40,Ls),t[206]||(t[206]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",js,[e("input",{type:"checkbox",checked:!!((bt=p.value)!=null&&bt.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>we({advanceOnMediaEnd:o.target.checked}))},null,40,_s),t[207]||(t[207]=Z(" Advance when slide media finishes ",-1))]),t[209]||(t[209]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",Ds,[t[215]||(t[215]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",qs,[e("input",{type:"checkbox",checked:h.value.autoPlay,onChange:t[34]||(t[34]=o=>Me({autoPlay:o.target.checked}))},null,40,Rs),t[210]||(t[210]=Z(" Autoplay preview and exported presentation ",-1))]),e("label",Os,[e("input",{type:"checkbox",checked:h.value.loop,onChange:t[35]||(t[35]=o=>Me({loop:o.target.checked}))},null,40,Fs),t[211]||(t[211]=Z(" Loop back to the first slide at the end ",-1))]),e("label",Us,[e("input",{type:"checkbox",checked:h.value.showProgress,onChange:t[36]||(t[36]=o=>Me({showProgress:o.target.checked}))},null,40,Vs),t[212]||(t[212]=Z(" Show progress bar in preview ",-1))]),e("label",Ws,[e("input",{type:"checkbox",checked:h.value.showNavControls,onChange:t[37]||(t[37]=o=>Me({showNavControls:o.target.checked}))},null,40,Gs),t[213]||(t[213]=Z(" Show previous/next and dot navigation ",-1))]),e("label",Hs,[e("input",{type:"checkbox",checked:h.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>Me({allowKeyboardNav:o.target.checked}))},null,40,Ys),t[214]||(t[214]=Z(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},Dv=Qe(_v,[["__scopeId","data-v-daf50f54"]]),qv={class:"editor-toolbar"},Rv={class:"toolbar-group"},Ov={key:0,class:"toolbar-divider"},Fv=["data-group-name"],Uv=["data-tooltip","onClick"],Vv={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Wv={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Gv={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Hv={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Yv={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Jv={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Qv={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Xv={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kv={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zv={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ef={key:10,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tf={key:11,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},of={key:12,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nf={key:13,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lf={key:14,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},af={key:15,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sf={key:16,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},rf={key:17,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},df={key:18,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},uf={key:19,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},cf={key:20,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pf={class:"tool-label"},vf={class:"toolbar-group"},ff={class:"toolbar-group"},mf={class:"toolbar-group"},gf={__name:"EditorToolbar",emits:["open-ai-project"],setup(E,{emit:s}){const d=s,c=it();at();const p=[{id:"basic",name:"Basic",tools:[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"}]},{id:"media",name:"Media",tools:[{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"}]},{id:"interactive",name:"Interactive",tools:[{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"tabs",label:"Tabs",tooltip:"Add tabs",icon:"tabs"},{id:"accordion",label:"Accordion",tooltip:"Add accordion",icon:"accordion"},{id:"flipcard",label:"Flip Card",tooltip:"Add flip card",icon:"flipcard"},{id:"stepper",label:"Stepper",tooltip:"Add stepper",icon:"stepper"}]},{id:"learning",name:"Learning & Data",tools:[{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"},{id:"poll",label:"Poll",tooltip:"Add poll",icon:"poll"},{id:"labeledimage",label:"L-Image",tooltip:"Add labeled image",icon:"labeledimage"},{id:"matching",label:"Match",tooltip:"Add matching game",icon:"matching"},{id:"sorting",label:"Sort",tooltip:"Add sorting game",icon:"sorting"},{id:"cloze",label:"Cloze",tooltip:"Fill in blanks",icon:"cloze"},{id:"scenario",label:"Dialog",tooltip:"Scenario chat",icon:"scenario"},{id:"progress",label:"Stats",tooltip:"Track progress",icon:"progress"}]}];function h(x){c.setActiveTool(x)}return(x,f)=>(l(),i("div",qv,[e("div",Rv,[e("button",{class:Q(["tool-btn",I(c).activeTool==="select"&&"active"]),onClick:f[0]||(f[0]=H=>h("select")),"data-tooltip":"Select (V)"},[...f[7]||(f[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),f[34]||(f[34]=e("div",{class:"toolbar-divider"},null,-1)),(l(),i(ee,null,ue(p,(H,le)=>(l(),i(ee,{key:H.id},[le>0?(l(),i("div",Ov)):q("",!0),e("div",{class:"toolbar-group element-group","data-group-name":H.name},[(l(!0),i(ee,null,ue(H.tools,G=>(l(),i("button",{key:G.id,class:Q(["tool-btn",I(c).activeTool===G.id&&"active"]),"data-tooltip":G.tooltip,onClick:W=>h(G.id)},[G.icon==="text"?(l(),i("svg",Vv,[...f[8]||(f[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):G.icon==="heading"?(l(),i("svg",Wv,[...f[9]||(f[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):G.icon==="image"?(l(),i("svg",Gv,[...f[10]||(f[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):G.icon==="shape"?(l(),i("svg",Hv,[...f[11]||(f[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):G.icon==="button"?(l(),i("svg",Yv,[...f[12]||(f[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):G.icon==="hotspot"?(l(),i("svg",Jv,[...f[13]||(f[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):G.icon==="video"?(l(),i("svg",Qv,[...f[14]||(f[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):G.icon==="audio"?(l(),i("svg",Xv,[...f[15]||(f[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):G.icon==="quiz"?(l(),i("svg",Kv,[...f[16]||(f[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):G.icon==="chart"?(l(),i("svg",Zv,[...f[17]||(f[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):G.icon==="tabs"?(l(),i("svg",ef,[...f[18]||(f[18]=[e("rect",{x:"2",y:"7",width:"20",height:"13",rx:"2"},null,-1),e("path",{d:"M2 11h20"},null,-1),e("path",{d:"M8 7v4"},null,-1)])])):G.icon==="accordion"?(l(),i("svg",tf,[...f[19]||(f[19]=[e("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"},null,-1),e("path",{d:"M3 10h18"},null,-1),e("path",{d:"M3 16h18"},null,-1)])])):G.icon==="flipcard"?(l(),i("svg",of,[...f[20]||(f[20]=[e("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"},null,-1),e("path",{d:"M3 12h18"},null,-1),e("path",{d:"M21 8h-4"},null,-1)])])):G.icon==="stepper"?(l(),i("svg",nf,[...f[21]||(f[21]=[e("circle",{cx:"6",cy:"12",r:"3"},null,-1),e("circle",{cx:"18",cy:"12",r:"3"},null,-1),e("path",{d:"M9 12h6"},null,-1)])])):G.icon==="poll"?(l(),i("svg",lf,[...f[22]||(f[22]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("path",{d:"M7 10h10"},null,-1),e("path",{d:"M7 14h6"},null,-1)])])):G.icon==="labeledimage"?(l(),i("svg",af,[...f[23]||(f[23]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"12",cy:"12",r:"2"},null,-1),e("line",{x1:"12",y1:"14",x2:"12",y2:"18"},null,-1)])])):G.icon==="matching"?(l(),i("svg",sf,[...f[24]||(f[24]=[et('<path d="M4 6h4" data-v-77f15107></path><path d="M4 18h4" data-v-77f15107></path><path d="M16 6h4" data-v-77f15107></path><path d="M16 18h4" data-v-77f15107></path><line x1="8" y1="6" x2="16" y2="18" data-v-77f15107></line>',5)])])):G.icon==="sorting"?(l(),i("svg",rf,[...f[25]||(f[25]=[e("path",{d:"M3 6h18"},null,-1),e("path",{d:"M7 12h10"},null,-1),e("path",{d:"M10 18h4"},null,-1)])])):G.icon==="cloze"?(l(),i("svg",df,[...f[26]||(f[26]=[e("path",{d:"M4 12h4"},null,-1),e("path",{d:"M16 12h4"},null,-1),e("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"},null,-1)])])):G.icon==="scenario"?(l(),i("svg",uf,[...f[27]||(f[27]=[e("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},null,-1)])])):G.icon==="progress"?(l(),i("svg",cf,[...f[28]||(f[28]=[e("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null,-1)])])):q("",!0),e("span",pf,w(G.label),1)],10,Uv))),128))],8,Fv)],64))),64)),f[35]||(f[35]=e("div",{class:"toolbar-divider"},null,-1)),e("div",vf,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:f[1]||(f[1]=H=>d("open-ai-project")),"data-tooltip":"Create a new AI project"},[...f[29]||(f[29]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),f[36]||(f[36]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",ff,[e("button",{class:"tool-btn",onClick:f[2]||(f[2]=H=>I(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...f[30]||(f[30]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:f[3]||(f[3]=H=>I(c).zoomReset())},w(Math.round(I(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:f[4]||(f[4]=H=>I(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...f[31]||(f[31]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-77f15107><circle cx="11" cy="11" r="8" data-v-77f15107></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-77f15107></line><line x1="11" y1="8" x2="11" y2="14" data-v-77f15107></line><line x1="8" y1="11" x2="14" y2="11" data-v-77f15107></line></svg>',1)])])]),f[37]||(f[37]=e("div",{class:"toolbar-divider"},null,-1)),e("div",mf,[e("button",{class:Q(["tool-btn",I(c).showGrid&&"active"]),onClick:f[5]||(f[5]=H=>I(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...f[32]||(f[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:Q(["tool-btn",I(c).snapToGrid&&"active"]),onClick:f[6]||(f[6]=H=>I(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...f[33]||(f[33]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-77f15107><circle cx="5" cy="5" r="1" data-v-77f15107></circle><circle cx="12" cy="5" r="1" data-v-77f15107></circle><circle cx="19" cy="5" r="1" data-v-77f15107></circle><circle cx="5" cy="12" r="1" data-v-77f15107></circle><circle cx="12" cy="12" r="1" data-v-77f15107></circle><circle cx="19" cy="12" r="1" data-v-77f15107></circle><circle cx="5" cy="19" r="1" data-v-77f15107></circle><circle cx="12" cy="19" r="1" data-v-77f15107></circle><circle cx="19" cy="19" r="1" data-v-77f15107></circle></svg>',1)])],2)])]))}},bf=Qe(gf,[["__scopeId","data-v-77f15107"]]),yf=["onMousedown"],hf={key:1,class:"selection-border locked-border"},xf={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(E){const s=E,d=it(),c=at(),p=Cl("canvasScale",z(1)),h=A(()=>d.projectId),x=A(()=>d.currentSlideId),f=A(()=>d.selectedElementIds.includes(s.element.id)),H=A(()=>s.element.locked),le=A(()=>s.element.visible!==!1),G=A(()=>{const oe=s.element.content||{};return!!(oe.text||oe.label||oe.question||oe.popupTitle||oe.popupContent)});let W=!1,ge=0,B=0,N=new Map;function a(oe){if(!d.snapToGrid||!d.gridSize)return oe;const fe=d.gridSize;return Math.round(oe/fe)*fe}function T(oe){var me;if(H.value||oe.target.classList.contains("resize-handle"))return;const fe=oe.ctrlKey||oe.metaKey||oe.shiftKey;f.value?fe&&d.selectElement(s.element.id,!0):d.selectElement(s.element.id,fe),d.setActiveTool("select"),W=!1,ge=oe.clientX,B=oe.clientY,N.clear();const ae=(me=c.getProject(h.value))==null?void 0:me.slides.find(Te=>Te.id===x.value);ae&&d.selectedElementIds.forEach(Te=>{const re=ae.elements.find($=>$.id===Te);re&&!re.locked&&N.set(Te,{x:re.x,y:re.y})}),window.addEventListener("mousemove",L),window.addEventListener("mouseup",Y),oe.stopPropagation()}function L(oe){const fe=(oe.clientX-ge)/p.value,ae=(oe.clientY-B)/p.value;!W&&(Math.abs(fe)>3||Math.abs(ae)>3)&&(W=!0),W&&N.forEach((me,Te)=>{const re=me.x+fe,$=me.y+ae;c.updateElement(h.value,x.value,Te,{x:re,y:$},{persist:!1})})}function Y(oe){if(W){const fe=(oe.clientX-ge)/p.value,ae=(oe.clientY-B)/p.value;N.forEach((me,Te)=>{c.updateElement(h.value,x.value,Te,{x:a(me.x+fe),y:a(me.y+ae)},{persist:!1})}),c.commitProject(h.value)}W||!(oe.ctrlKey||oe.metaKey||oe.shiftKey)&&d.selectedElementIds.length>1&&d.selectElement(s.element.id,!1),W=!1,window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",Y)}const g=["n","ne","e","se","s","sw","w","nw"];let F=!1,ie="",te=0,xe=0,R=0,V=0,pe=0,be=0;function ne(oe,fe){H.value||(oe.stopPropagation(),oe.preventDefault(),F=!0,ie=fe,te=oe.clientX,xe=oe.clientY,R=s.element.width,V=s.element.height,pe=s.element.x,be=s.element.y,window.addEventListener("mousemove",ke),window.addEventListener("mouseup",C))}function ke(oe){if(!F)return;const fe=p.value,ae=(oe.clientX-te)/fe,me=(oe.clientY-xe)/fe,Te=20;let re=pe,$=be,S=R,D=V;if(ie.includes("e")&&(S=Math.max(Te,R+ae)),ie.includes("s")&&(D=Math.max(Te,V+me)),ie.includes("w")){const m=Math.max(Te,R-ae);re=pe+(R-m),S=m}if(ie.includes("n")){const m=Math.max(Te,V-me);$=be+(V-m),D=m}if(d.snapToGrid&&d.gridSize){const m=d.gridSize;S=Math.round(S/m)*m,D=Math.round(D/m)*m,re=Math.round(re/m)*m,$=Math.round($/m)*m}c.updateElement(h.value,x.value,s.element.id,{x:re,y:$,width:S,height:D})}function C(){F=!1,window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",C)}function j(){["text","heading"].includes(s.element.type)&&d.focusPropertiesSection("content")}const _=A(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:H.value?"not-allowed":"move",visibility:le.value?"visible":"hidden",userSelect:"none"}));function X(oe){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[oe]||"auto"}function he(oe="content"){d.focusPropertiesSection(oe)}function ze(){const oe=G.value?"improve":s.element.type==="image"?"image":"generate";d.openAIPanel(oe)}function $e(){const oe=c.duplicateElement(h.value,x.value,s.element.id);oe&&(d.selectElement(oe.id),d.focusPropertiesSection("geometry"))}function je(){c.deleteElement(h.value,x.value,s.element.id),d.clearSelection()}return(oe,fe)=>(l(),i("div",{class:Q(["element-wrapper",f.value&&"selected",H.value&&"locked"]),style:ye(_.value),onMousedown:T,onDblclick:j},[Sl(oe.$slots,"default",{},void 0),f.value&&!H.value?(l(),i(ee,{key:0},[fe[6]||(fe[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:fe[3]||(fe[3]=Re(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:fe[0]||(fe[0]=ae=>he("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:fe[1]||(fe[1]=ae=>he("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:fe[2]||(fe[2]=ae=>he("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:ze},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:$e,title:"Duplicate element","aria-label":"Duplicate element"},[...fe[4]||(fe[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:je,title:"Delete element","aria-label":"Delete element"},[...fe[5]||(fe[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(ee,null,ue(g,ae=>e("div",{key:ae,class:Q(["resize-handle",`handle-${ae}`]),style:ye({cursor:X(ae)}),onMousedown:Re(me=>ne(me,ae),["stop"])},null,46,yf)),64))],64)):q("",!0),f.value&&H.value?(l(),i("div",hf)):q("",!0)],38))}},kf=Qe(xf,[["__scopeId","data-v-d539ca8b"]]),qt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(E){const s=E,d=A(()=>s.element.content||{}),c=it(),p=at(),h=z(!1),x=z(null),f=z("");Je(()=>d.value.text,W=>{h.value||(f.value=W||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function H(){c.selectedElementId===s.element.id&&(h.value=!0,fl(()=>{if(x.value)if(x.value.focus(),typeof x.value.setSelectionRange=="function"){const W=x.value.value.length;x.value.setSelectionRange(W,W)}else{const W=document.createRange();W.selectNodeContents(x.value),W.collapse(!1);const ge=window.getSelection();ge.removeAllRanges(),ge.addRange(W)}}))}function le(W){h.value&&W.stopPropagation()}function G(){h.value=!1;const W=f.value;p.updateElement(c.projectId,c.currentSlideId,s.element.id,{content:{...s.element.content,text:W}})}return(W,ge)=>h.value?ce((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:x,"onUpdate:modelValue":ge[0]||(ge[0]=B=>f.value=B),onBlur:G,onMousedown:le,style:ye({fontSize:(d.value.fontSize||16)+"px",fontFamily:d.value.fontFamily||"Inter, sans-serif",fontWeight:d.value.fontWeight||"normal",fontStyle:d.value.fontStyle||"normal",textDecoration:d.value.textDecoration||"none",textAlign:d.value.textAlign||"left",color:d.value.color||"#1a1a2e",lineHeight:d.value.lineHeight||1.5,textTransform:d.value.textTransform||"none",letterSpacing:(d.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[Ce,f.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:H,style:ye({fontSize:(d.value.fontSize||16)+"px",fontFamily:d.value.fontFamily||"Inter, sans-serif",fontWeight:d.value.fontWeight||"normal",fontStyle:d.value.fontStyle||"normal",textDecoration:d.value.textDecoration||"none",textAlign:d.value.textAlign||"left",color:d.value.color||"#1a1a2e",lineHeight:d.value.lineHeight||1.5,textTransform:d.value.textTransform||"none",letterSpacing:(d.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},w(f.value),37))}},wf={key:0,class:"image-status image-loading"},Cf=["src","alt"],Sf={key:2,class:"image-placeholder"},$f={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},If={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(E){const s=E,d=z(""),c=z(0),p=z("idle"),h=A(()=>{var le;return Array.isArray((le=s.element.content)==null?void 0:le.fallbackSrcs)?s.element.content.fallbackSrcs:[]});function x(){var le;d.value=((le=s.element.content)==null?void 0:le.src)||"",c.value=0,p.value=d.value?"loading":"empty"}function f(){p.value="loaded"}function H(){const le=h.value[c.value];if(le){c.value+=1,d.value=le,p.value="loading";return}p.value="error"}return Je(()=>{var le,G;return[(le=s.element.content)==null?void 0:le.src,JSON.stringify(((G=s.element.content)==null?void 0:G.fallbackSrcs)||[])]},()=>x(),{immediate:!0}),(le,G)=>{var W,ge,B;return l(),i("div",{class:"image-element",style:ye({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((W=E.element.content)==null?void 0:W.borderRadius)||0)+"px",border:`${((ge=E.element.content)==null?void 0:ge.borderWidth)||0}px solid ${((B=E.element.content)==null?void 0:B.borderColor)||"transparent"}`})},[p.value==="loading"?(l(),i("div",wf,[...G[0]||(G[0]=[e("span",{class:"image-status-spinner"},null,-1),e("span",null,"Loading image…",-1)])])):q("",!0),d.value&&p.value!=="error"?(l(),i("img",{key:1,src:d.value,alt:E.element.content.alt||"",style:ye({width:"100%",height:"100%",objectFit:E.element.content.objectFit||"cover",display:p.value==="loaded"?"block":"none"}),draggable:"false",onLoad:f,onError:H},null,44,Cf)):q("",!0),p.value==="empty"||p.value==="error"?(l(),i("div",Sf,[(l(),i("svg",$f,[...G[1]||(G[1]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),e("span",null,w(p.value==="error"?"Image unavailable":"Image"),1)])):q("",!0)],4)}}},Ef=Qe(If,[["__scopeId","data-v-cd42b1c3"]]),Af={class:"shape-element",style:{width:"100%",height:"100%"}},Tf=["width","height"],Mf=["points","fill","stroke","stroke-width"],Pf={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(E){const s=E,d=A(()=>s.element.content||{}),c=A(()=>{const x=d.value.shapeType||"rectangle",f={width:"100%",height:"100%",background:d.value.fillColor||"#6c47ff",border:`${d.value.borderWidth||0}px solid ${d.value.borderColor||"transparent"}`,opacity:d.value.opacity??1};return x==="circle"?{...f,borderRadius:"50%"}:x==="rectangle"?{...f,borderRadius:(d.value.borderRadius||0)+"px"}:f}),p=A(()=>["triangle","star","arrow","diamond"].includes(d.value.shapeType)),h=A(()=>{const x=s.element.width||150,f=s.element.height||100,H=d.value.shapeType;if(H==="triangle")return`${x/2},0 ${x},${f} 0,${f}`;if(H==="diamond")return`${x/2},0 ${x},${f/2} ${x/2},${f} 0,${f/2}`;if(H==="arrow")return`0,${f*.3} ${x*.6},${f*.3} ${x*.6},0 ${x},${f/2} ${x*.6},${f} ${x*.6},${f*.7} 0,${f*.7}`;if(H==="star"){const le=x/2,G=f/2,W=Math.min(x,f)/2,ge=W*.4;let B="";for(let N=0;N<10;N++){const a=(N*36-90)*Math.PI/180,T=N%2===0?W:ge;B+=`${le+T*Math.cos(a)},${G+T*Math.sin(a)} `}return B.trim()}return""});return(x,f)=>(l(),i("div",Af,[p.value?(l(),i("svg",{key:1,width:E.element.width,height:E.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:h.value,fill:d.value.fillColor||"#6c47ff",stroke:d.value.borderColor||"none","stroke-width":d.value.borderWidth||0},null,8,Mf)],8,Tf)):(l(),i("div",{key:0,style:ye(c.value)},null,4))]))}},Nf={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(E){const s=E,d=A(()=>s.element.content||{}),c=A(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},h=p[d.value.variant||"primary"]||p.primary;return{...h,background:d.value.bgColor||h.background,color:d.value.textColor||h.color,border:d.value.borderColor?`1px solid ${d.value.borderColor}`:h.border,borderRadius:(d.value.borderRadius??8)+"px"}});return(p,h)=>(l(),i("div",{class:"button-element",style:ye({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(d.value.fontSize??15)+"px",fontWeight:d.value.fontWeight??600,letterSpacing:(d.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:d.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},w(d.value.label||"Button"),5))}},Bf={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},zf={class:"popup-header"},Lf={class:"popup-body"},jf={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(E){const s=E,d=A(()=>s.element.content||{}),c=z(!1);function p(h){h.stopPropagation(),c.value=!c.value}return(h,x)=>(l(),i("div",Bf,[e("div",{class:"hotspot-btn",style:ye({width:"100%",height:"100%",background:d.value.bgColor||"#6c47ff",borderRadius:(d.value.borderRadius??999)>=999?"50%":(d.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:d.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Re(p,["stop"])},w(d.value.icon||"?"),5),yt(zt,{name:"fade"},{default:ut(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:ye({background:d.value.popupBgColor||"#ffffff",color:d.value.popupTextColor||"#1a1a2e"})},[e("div",zf,[e("strong",null,w(d.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:x[0]||(x[0]=Re(f=>c.value=!1,["stop"]))},"×")]),e("div",Lf,w(d.value.popupContent||"Add your content in the properties panel."),1)],4)):q("",!0)]),_:1})]))}},_f=Qe(jf,[["__scopeId","data-v-ef5f15f6"]]),Df={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},qf=["src"],Rf=["src","poster","autoplay","controls","loop","muted"],Of={key:2,class:"video-placeholder"},Ff={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Uf={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(E){const s=E,d=A(()=>s.element.content||{}),c=A(()=>{const h=d.value.src||"";return h.includes("youtube")||h.includes("youtu.be")}),p=A(()=>{var x,f;const h=d.value.src||"";if(c.value){const H=(x=h.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:x[1];return H?`https://www.youtube.com/embed/${H}`:""}if(h.includes("vimeo.com")){const H=(f=h.match(/vimeo\.com\/(\d+)/))==null?void 0:f[1];return H?`https://player.vimeo.com/video/${H}`:""}return""});return(h,x)=>(l(),i("div",Df,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,qf)):d.value.src&&!p.value?(l(),i("video",{key:1,src:d.value.src,poster:d.value.poster,autoplay:d.value.autoplay,controls:d.value.controls!==!1,loop:d.value.loop,muted:d.value.muted,style:ye({width:"100%",height:"100%",objectFit:d.value.objectFit||"cover"})},null,12,Rf)):(l(),i("div",Of,[(l(),i("svg",Ff,[...x[0]||(x[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),x[1]||(x[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Vf=Qe(Uf,[["__scopeId","data-v-dfea1a16"]]),Wf=["stroke"],Gf=["src","controls","autoplay","loop"],Hf={key:1,style:{"font-size":"11px",color:"#aaa"}},Yf={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(E){return(s,d)=>{var c,p,h,x,f,H,le,G,W;return l(),i("div",{class:"audio-element",style:ye({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=E.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=E.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((h=E.element.content)==null?void 0:h.accentColor)||"#6c47ff","stroke-width":"2"},[...d[1]||(d[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Wf)),e("span",{style:ye({fontSize:"13px",color:((x=E.element.content)==null?void 0:x.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},w(((f=E.element.content)==null?void 0:f.label)||"Audio Player"),5),(H=E.element.content)!=null&&H.src?(l(),i("audio",{key:0,src:E.element.content.src,controls:((le=E.element.content)==null?void 0:le.controls)!==!1,autoplay:(G=E.element.content)==null?void 0:G.autoplay,loop:(W=E.element.content)==null?void 0:W.loop,style:{height:"28px","max-width":"180px"},onMousedown:d[0]||(d[0]=Re(()=>{},["stop"]))},null,40,Gf)):(l(),i("span",Hf,"No source"))],4)}}},Jf={class:"quiz-options"},Qf=["onClick"],Xf={class:"opt-letter"},Kf={class:"opt-text"},Zf={key:0},e1={class:"quiz-actions"},t1=["disabled"],o1={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(E){const s=E,d=A(()=>s.element.content||{}),c=z(null),p=z(!1);function h(le){p.value||(c.value=le)}function x(){c.value!==null&&(p.value=!0)}function f(){c.value=null,p.value=!1}const H=A(()=>p.value&&c.value===(d.value.correctIndex??0));return(le,G)=>(l(),i("div",{class:"quiz-element",style:ye({width:"100%",height:"100%",background:d.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":d.value.accentColor||"#6c47ff"})},[e("p",{style:ye({fontSize:"15px",fontWeight:600,color:d.value.questionColor||"#1a1a2e",lineHeight:1.4})},w(d.value.question||"Question text…"),5),e("div",Jf,[(l(!0),i(ee,null,ue(d.value.options||[],(W,ge)=>(l(),i("div",{key:ge,class:Q(["quiz-opt",c.value===ge&&"selected",p.value&&ge===d.value.correctIndex&&"correct",p.value&&c.value===ge&&ge!==d.value.correctIndex&&"wrong"]),onClick:B=>h(ge)},[e("span",Xf,w(String.fromCharCode(65+ge)),1),e("span",Kf,w(W),1)],10,Qf))),128))]),p.value?(l(),i("div",{key:0,class:Q(["quiz-feedback",H.value?"correct":"wrong"])},[Z(w(H.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!H.value&&d.value.explanation?(l(),i("span",Zf,w(d.value.explanation),1)):q("",!0)],2)):q("",!0),e("div",e1,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:f},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:x},"Submit",8,t1))])],4))}},n1=Qe(o1,[["__scopeId","data-v-ca2bd187"]]),l1={key:0,class:"canvas-empty"},i1={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},a1={key:0,class:"canvas-device-frame","aria-hidden":"true"},s1=["value"],r1={class:"canvas-guide-label"},d1={key:5,class:"drop-hint"},u1={class:"canvas-info-bar"},c1=["disabled"],p1={class:"slide-index"},v1=["disabled"],f1={key:0},m1={__name:"EditorCanvas",setup(E){const s=it(),d=at(),c=z(null),p=z(null),h=z(1),x=A(()=>h.value*s.zoomLevel);Il("canvasScale",x);const f=A(()=>d.getProject(s.projectId)),H=A(()=>jt(f.value)),le=A(()=>gl(f.value)),G=A(()=>H.value.width),W=A(()=>H.value.height),ge=A(()=>bl(G.value,W.value)),B=A(()=>{var b,k;return(k=(b=f.value)==null?void 0:b.slides)==null?void 0:k.find(K=>K.id===s.currentSlideId)}),N=A(()=>{var b;return[...((b=f.value)==null?void 0:b.slides)||[]].sort((k,K)=>k.order-K.order)}),a=A(()=>N.value.findIndex(b=>b.id===s.currentSlideId)),T=A(()=>{var b;return{autoPlay:!1,motionPresets:[],...((b=f.value)==null?void 0:b.settings)||{}}}),L=A(()=>(Array.isArray(T.value.motionPresets)?T.value.motionPresets:[]).filter(b=>b.scope==="group")),Y=A(()=>{const b=new Set(s.selectedElementIds);return xe.value.filter(k=>b.has(k.id))}),g=z(""),F=A(()=>B.value?B.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:T.value.autoPlay&&Number(B.value.duration||0)>0?{label:`Auto ${Number(B.value.duration).toFixed(Number(B.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function ie(){const b=L.value.find(K=>K.id===g.value);if(!b||!Y.value.length)return;[...Y.value].sort((K,U)=>(K.y||0)!==(U.y||0)?(K.y||0)-(U.y||0):(K.x||0)-(U.x||0)).forEach((K,U)=>{if(b.type==="auto"){d.updateElement(s.projectId,s.currentSlideId,K.id,{animations:[]});return}d.updateElement(s.projectId,s.currentSlideId,K.id,{animations:[{type:b.type,delay:Math.max(0,Number(b.delay)||0)+U*Math.max(0,Number(b.stepDelay)||0),duration:Math.max(.1,Number(b.duration)||.72)}]})}),d.updateProject(s.projectId,{settings:{...T.value,motionPresets:(T.value.motionPresets||[]).map(K=>K.id===b.id?{...K,usageCount:Math.max(0,Number(K.usageCount||0))+1,lastUsedAt:Date.now()}:K)}})}function te(){if(!L.value.length){g.value="";return}L.value.some(b=>b.id===g.value)||(g.value=L.value[0].id)}const xe=A(()=>{var b;return[...((b=B.value)==null?void 0:b.elements)||[]].sort((k,K)=>(k.zIndex||0)-(K.zIndex||0))}),R=A(()=>{const b=B.value;return b?b.backgroundType==="gradient"&&b.backgroundGradient?{background:b.backgroundGradient}:b.backgroundType==="image"&&b.backgroundImage?{backgroundImage:`url(${b.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:b.background||"#fff"}:{background:"#fff"}}),V=A(()=>`scale(${x.value})`);function pe(){if(!c.value)return;const{clientWidth:b,clientHeight:k}=c.value,K=(b-80)/G.value,U=(k-80)/W.value;h.value=Math.min(K,U,1)}let be=null;cl(()=>{pe(),be=new ResizeObserver(pe),c.value&&be.observe(c.value),te()}),pl(()=>be==null?void 0:be.disconnect()),Je(L,()=>{te()},{deep:!0,immediate:!0}),Je(H,()=>{pe()},{deep:!0});const ne=z({x:0,y:0}),ke=z({x:0,y:0}),C=z(!1),j=z(!1),_=z(!1),X=z(null),he=A(()=>{var b,k;return((b=le.value)==null?void 0:b.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((k=le.value)==null?void 0:k.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),ze=A(()=>{if(!he.value)return null;if(he.value.tone==="mobile"){const K=G.value*.08,U=W.value*.05;return{x:K,y:U,width:G.value-K*2,height:W.value-U*2}}const b=G.value*.08,k=W.value*.08;return{x:b,y:k,width:G.value-b*2,height:W.value-k*2}}),$e=A(()=>{if(!ze.value)return[];const b=ze.value;return xe.value.filter(k=>k.visible!==!1).filter(k=>{const K=Number(k.x||0),U=Number(k.y||0),Ie=K+Number(k.width||0),Ee=U+Number(k.height||0);return K<b.x||U<b.y||Ie>b.x+b.width||Ee>b.y+b.height}).map(k=>k.id)}),je=A(()=>s.selectedElementIds.filter(b=>$e.value.includes(b)).length),oe=A(()=>$e.value.length),fe=A(()=>!he.value||!oe.value?null:je.value?`${je.value} selected ${je.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`:`${oe.value} ${oe.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`),ae=A(()=>{if(!C.value)return null;const b=Math.min(ne.value.x,ke.value.x),k=Math.min(ne.value.y,ke.value.y),K=Math.abs(ke.value.x-ne.value.x),U=Math.abs(ke.value.y-ne.value.y);return{x:b,y:k,width:K,height:U}});function me(b){!C.value&&(b.target===p.value||b.target===b.currentTarget)&&s.clearSelection()}function Te(b){return b?Array.from(b.files||[]).some(k=>k.type.startsWith("image/")):!1}function re(b){return b?Array.from(b.types||[]).includes(Rt):!1}function $(b,k,K){return Math.min(Math.max(b,k),K)}function S(b,k,K){const U=Ot(b),Ie=$(k-U.width/2,0,Math.max(0,G.value-U.width)),Ee=$(K-U.height/2,0,Math.max(0,W.value-U.height));return{x:Ie,y:Ee,bounds:U}}function D(b){if(!re(b))return null;try{const k=b.getData(Rt),K=k?JSON.parse(k):null;return K!=null&&K.id&&d.getContentBlocks(s.projectId).find(U=>U.id===K.id)||null}catch{return null}}function m(b,k,K){if(!p.value||!K){X.value=null;return}const U=p.value.getBoundingClientRect(),Ie=(b-U.left)/x.value,Ee=(k-U.top)/x.value,Oe=S(K,Ie,Ee);X.value={block:K,x:Oe.x,y:Oe.y,bounds:Oe.bounds}}function _e(b,k,K){if(!b||!b.type.startsWith("image/"))return;const U=new FileReader;U.onload=()=>{const Ie=String(U.result||"");if(!Ie)return;const Ee=new Image;Ee.onload=()=>{const Oe=p.value.getBoundingClientRect(),Ve=(k-Oe.left)/x.value,de=(K-Oe.top)/x.value,Ue=Math.min(420/Ee.width,280/Ee.height,1),Ne=Math.max(120,Math.round(Ee.width*Ue)),We=Math.max(80,Math.round(Ee.height*Ue)),mt=Math.max(0,Math.min(G.value-Ne,Math.round(Ve-Ne/2))),vt=Math.max(0,Math.min(W.value-We,Math.round(de-We/2))),Xe=d.addElement(s.projectId,s.currentSlideId,"image",{x:mt,y:vt,width:Ne,height:We,content:{src:Ie,alt:b.name,objectFit:"cover"}});Xe&&(s.selectElement(Xe.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Ee.src=Ie},U.readAsDataURL(b)}function qe(b){const k=Te(b.dataTransfer),K=re(b.dataTransfer);!k&&!K||(b.preventDefault(),b.dataTransfer.dropEffect="copy",j.value=k,_.value=K,K&&m(b.clientX,b.clientY,D(b.dataTransfer)))}function Le(b){var k;(k=b.currentTarget)!=null&&k.contains(b.relatedTarget)||(j.value=!1,_.value=!1,X.value=null)}function we(b){const k=Te(b.dataTransfer),K=re(b.dataTransfer);if(!k&&!K)return;if(b.preventDefault(),j.value=!1,_.value=!1,X.value=null,K){try{const Ie=D(b.dataTransfer);if(!Ie)return;const Ee=p.value.getBoundingClientRect(),Oe=(b.clientX-Ee.left)/x.value,Ve=(b.clientY-Ee.top)/x.value,de=S(Ie,Oe,Ve),Se=d.insertContentBlock(s.projectId,s.currentSlideId,Ie.id,{x:de.x,y:de.y});Se.length&&(s.setSelection(Se.map(He=>He.id)),s.setActiveTool("select"),s.focusPropertiesSection("content"))}catch(Ie){console.warn("Failed to drop block onto canvas.",Ie)}return}const U=Array.from(b.dataTransfer.files||[]).find(Ie=>Ie.type.startsWith("image/"));U&&_e(U,b.clientX,b.clientY)}function Me(b){if(Y.value.length<2)return;const k=[...Y.value].sort((de,Se)=>(de.zIndex||0)-(Se.zIndex||0)),K=Math.min(...k.map(de=>Number(de.x||0))),U=Math.min(...k.map(de=>Number(de.y||0))),Ie=Math.max(...k.map(de=>Number(de.x||0)+Number(de.width||0))),Ee=Math.max(...k.map(de=>Number(de.y||0)+Number(de.height||0))),Oe=K+(Ie-K)/2,Ve=U+(Ee-U)/2;if(b==="align-left"&&k.forEach(de=>d.updateElement(s.projectId,s.currentSlideId,de.id,{x:K},{persist:!1})),b==="align-center"&&k.forEach(de=>{const Se=Number(de.width||0);d.updateElement(s.projectId,s.currentSlideId,de.id,{x:Oe-Se/2},{persist:!1})}),b==="align-right"&&k.forEach(de=>{const Se=Number(de.width||0);d.updateElement(s.projectId,s.currentSlideId,de.id,{x:Ie-Se},{persist:!1})}),b==="align-top"&&k.forEach(de=>d.updateElement(s.projectId,s.currentSlideId,de.id,{y:U},{persist:!1})),b==="align-middle"&&k.forEach(de=>{const Se=Number(de.height||0);d.updateElement(s.projectId,s.currentSlideId,de.id,{y:Ve-Se/2},{persist:!1})}),b==="align-bottom"&&k.forEach(de=>{const Se=Number(de.height||0);d.updateElement(s.projectId,s.currentSlideId,de.id,{y:Ee-Se},{persist:!1})}),b==="distribute-horizontal"){const de=[...k].sort((Ne,We)=>(Ne.x||0)-(We.x||0)),Se=de.reduce((Ne,We)=>Ne+Number(We.width||0),0),He=de.length>1?(Ie-K-Se)/(de.length-1):0;let Ue=K;de.forEach(Ne=>{d.updateElement(s.projectId,s.currentSlideId,Ne.id,{x:Ue},{persist:!1}),Ue+=Number(Ne.width||0)+He})}if(b==="distribute-vertical"){const de=[...k].sort((Ne,We)=>(Ne.y||0)-(We.y||0)),Se=de.reduce((Ne,We)=>Ne+Number(We.height||0),0),He=de.length>1?(Ee-U-Se)/(de.length-1):0;let Ue=U;de.forEach(Ne=>{d.updateElement(s.projectId,s.currentSlideId,Ne.id,{y:Ue},{persist:!1}),Ue+=Number(Ne.height||0)+He})}d.commitProject(s.projectId)}function st(b){const k=s.activeTool;if(b.target!==p.value&&b.target!==b.currentTarget)return;b.preventDefault(),b.stopPropagation();const K=p.value.getBoundingClientRect(),U=(b.clientX-K.left)/x.value,Ie=(b.clientY-K.top)/x.value;if(k==="select"){C.value=!0,ne.value={x:U,y:Ie},ke.value={x:U,y:Ie};const Ve=Se=>{ke.value={x:(Se.clientX-K.left)/x.value,y:(Se.clientY-K.top)/x.value}},de=()=>{window.removeEventListener("mousemove",Ve),window.removeEventListener("mouseup",de);const Se=ae.value;if(Se&&(Se.width>2||Se.height>2)){const He=xe.value.filter(Ue=>{const Ne=Ue.x,We=Ue.y,mt=Ue.width||100,vt=Ue.height||100;return Ne<Se.x+Se.width&&Ne+mt>Se.x&&We<Se.y+Se.height&&We+vt>Se.y}).map(Ue=>Ue.id);He.length>0?s.setSelection(He):s.clearSelection()}else s.clearSelection();setTimeout(()=>{C.value=!1},0)};window.addEventListener("mousemove",Ve),window.addEventListener("mouseup",de);return}const Ee=Ve=>s.snapToGrid?Math.round(Ve/s.gridSize)*s.gridSize:Ve,Oe=d.addElement(s.projectId,s.currentSlideId,k,{x:Ee(U-75),y:Ee(Ie-40)});Oe&&(s.selectElement(Oe.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const ot=A(()=>{if(!s.showGrid)return{};const b=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${b}px ${b}px`}}),nt={text:qt,heading:qt,image:Ef,shape:Pf,button:Nf,hotspot:_f,video:Vf,audio:Yf,quiz:n1,chart:ei,tabs:Zl,accordion:Kl,flipcard:Xl,stepper:Ql,poll:Jl,labeledimage:Yl,matching:Hl,sorting:Gl,cloze:Wl,scenario:Vl,progress:Ul,divider:"div"};function wt(b){return nt[b]||qt}function rt(b){var k,K;return b.type!=="divider"?{}:{borderTop:`${((k=b.content)==null?void 0:k.thickness)||2}px solid ${((K=b.content)==null?void 0:K.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const De=z({show:!1,x:0,y:0,elId:null});function ct(b,k){b.preventDefault(),De.value={show:!0,x:b.clientX,y:b.clientY,elId:k},s.selectElement(k),setTimeout(()=>window.addEventListener("click",Ke,{once:!0}),0)}function Ke(){De.value.show=!1}function Ct(){if(De.value.elId){const b=d.duplicateElement(s.projectId,s.currentSlideId,De.value.elId);b&&s.selectElement(b.id)}Ke()}function St(){De.value.elId&&(d.deleteElement(s.projectId,s.currentSlideId,De.value.elId),s.clearSelection()),Ke()}function $t(){De.value.elId&&d.reorderElement(s.projectId,s.currentSlideId,De.value.elId,"up"),Ke()}function pt(){De.value.elId&&d.reorderElement(s.projectId,s.currentSlideId,De.value.elId,"down"),Ke()}function It(){const b=a.value,k=d.addSlide(s.projectId,b);k&&s.setCurrentSlide(k.id)}function Et(){const b=a.value;b>0&&s.setCurrentSlide(N.value[b-1].id)}function At(){const b=a.value;b<N.value.length-1&&s.setCurrentSlide(N.value[b+1].id)}return(b,k)=>{var K;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[B.value?(l(),i(ee,{key:1},[e("div",{class:Q(["canvas-zoom-wrapper",[he.value&&`canvas-zoom-wrapper-${he.value.tone}`]]),style:ye({transform:V.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:ye({width:G.value+"px",height:W.value+"px",...R.value,...ot.value}),onClick:me,onMousedown:st,onDragover:qe,onDragleave:Le,onDrop:we,onContextmenu:k[3]||(k[3]=Re(()=>{},["prevent"]))},[he.value?(l(),i("div",a1)):q("",!0),I(s).multiSelection&&L.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:k[1]||(k[1]=Re(()=>{},["stop"]))},[k[15]||(k[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),ce(e("select",{"onUpdate:modelValue":k[0]||(k[0]=U=>g.value=U),class:"selection-preset-select"},[(l(!0),i(ee,null,ue(L.value,U=>(l(),i("option",{key:U.id,value:U.id},w(U.name),9,s1))),128))],512),[[Bt,g.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Re(ie,["stop"])},"Apply")],32)):q("",!0),fe.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:k[2]||(k[2]=Re(()=>{},["stop"]))},[k[16]||(k[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,w(fe.value),1)],32)):q("",!0),X.value?(l(),i("div",{key:3,class:"block-drop-preview",style:ye({left:`${X.value.x}px`,top:`${X.value.y}px`,width:`${X.value.bounds.width}px`,height:`${X.value.bounds.height}px`})},[(l(!0),i(ee,null,ue(X.value.block.elements,(U,Ie)=>{var Ee,Oe,Ve,de;return l(),i("div",{key:`${X.value.block.id}-preview-${Ie}`,class:Q(["block-drop-preview-el",`block-drop-preview-${U.type}`]),style:ye({left:`${Number(U.x||0)-X.value.bounds.minX}px`,top:`${Number(U.y||0)-X.value.bounds.minY}px`,width:`${Number(U.width||0)}px`,height:`${Number(U.height||0)}px`,borderRadius:U.type==="shape"&&((Ee=U.content)==null?void 0:Ee.shapeType)==="circle"?"50%":`${Number(((Oe=U.content)==null?void 0:Oe.borderRadius)||12)}px`,background:U.type==="shape"?((Ve=U.content)==null?void 0:Ve.fillColor)||"rgba(108,71,255,.18)":U.type==="button"?((de=U.content)==null?void 0:de.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(U.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(U.type)?(l(),i(ee,{key:0},[k[17]||(k[17]=e("span",{class:"block-drop-preview-line"},null,-1)),k[18]||(k[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):q("",!0)],6)}),128))],4)):q("",!0),(l(!0),i(ee,null,ue(xe.value,U=>(l(),Ye(kf,{key:U.id,element:U,onContextmenu:Re(Ie=>ct(Ie,U.id),["stop"])},{default:ut(()=>[(l(),Ye($l(wt(U.type)),{element:U,style:ye(U.type==="divider"?rt(U):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),he.value?(l(),i("div",{key:4,class:Q(["canvas-guide",[`canvas-guide-${he.value.tone}`,oe.value&&"canvas-guide-warning-state"]]),style:ye(he.value.style),"aria-hidden":"true"},[e("span",r1,w(he.value.label)+" · "+w(ge.value),1)],6)):q("",!0),I(s).activeTool!=="select"||j.value||_.value?(l(),i("div",d1,w(_.value?"Drop block to insert it here":j.value?"Drop image to insert it on this slide":`Click anywhere to add ${I(s).activeTool}`),1)):q("",!0),C.value&&ae.value?(l(),i("div",{key:6,class:"selection-marquee",style:ye({left:ae.value.x+"px",top:ae.value.y+"px",width:ae.value.width+"px",height:ae.value.height+"px"})},null,4)):q("",!0)],36)],6),e("div",u1,[e("button",{class:"bar-btn",onClick:It},"Add page"),e("button",{class:"bar-btn icon",onClick:Et,disabled:a.value<=0},"◀",8,c1),e("span",p1,w(a.value+1)+" / "+w(N.value.length),1),e("button",{class:"bar-btn icon",onClick:At,disabled:a.value>=N.value.length-1},"▶",8,v1),e("span",null,w(G.value)+" × "+w(W.value)+"px",1),k[19]||(k[19]=e("span",null,"·",-1)),e("span",null,w(((K=B.value.elements)==null?void 0:K.length)||0)+" elements",1),k[20]||(k[20]=e("span",null,"·",-1)),e("span",{class:Q(["playback-badge",`playback-badge-${F.value.tone}`])},w(F.value.label),3),I(s).hasSelection?(l(),i("span",f1,"· "+w(I(s).selectedElementIds.length)+" selected",1)):q("",!0),I(s).multiSelection?(l(),i(ee,{key:1},[e("button",{class:"bar-btn",onClick:k[4]||(k[4]=U=>Me("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:k[5]||(k[5]=U=>Me("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:k[6]||(k[6]=U=>Me("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:k[7]||(k[7]=U=>Me("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:k[8]||(k[8]=U=>Me("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:k[9]||(k[9]=U=>Me("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:k[10]||(k[10]=U=>Me("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:k[11]||(k[11]=U=>Me("distribute-vertical"))},"Space V")],64)):q("",!0),e("button",{class:"bar-btn ai",onClick:k[12]||(k[12]=U=>I(s).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",l1,[(l(),i("svg",i1,[...k[13]||(k[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),k[14]||(k[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),Ye(vl,{to:"body"},[De.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:ye({left:De.value.x+"px",top:De.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Ct},"Duplicate"),e("button",{class:"ctx-item",onClick:$t},"Bring Forward"),e("button",{class:"ctx-item",onClick:pt},"Send Backward"),k[21]||(k[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:St},"Delete")],4)):q("",!0)]))],512)}}},g1=Qe(m1,[["__scopeId","data-v-f050859a"]]),b1={class:"ai-panel"},y1={class:"ai-mode-tabs"},h1=["onClick"],x1={class:"ai-content"},k1={class:"form-group"},w1={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},C1={key:0,class:"form-group"},S1={key:1,class:"form-group"},$1={class:"layout-label-row"},I1={class:"layout-current-hint"},E1={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},A1=["onClick"],T1={class:"layout-preset-title"},M1={class:"layout-preset-hint"},P1={key:2,class:"form-group"},N1={key:3,class:"form-group"},B1={class:"layout-label-row"},z1={class:"layout-current-hint"},L1={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},j1={key:4,class:"form-group"},_1={class:"layout-label-row"},D1={class:"layout-current-hint"},q1={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},R1=["onClick"],O1={class:"layout-preset-title"},F1={class:"layout-preset-hint"},U1={class:"form-group"},V1={class:"form-group"},W1={class:"prompt-label-row"},G1={key:1,class:"prompt-auto-badge"},H1={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},Y1={key:6,class:"selected-source-card"},J1={class:"result-header"},Q1={class:"source-count-badge"},X1={class:"selected-source-preview"},K1={class:"selected-source-actions"},Z1=["disabled"],em=["disabled"],tm={key:0,class:"spinner"},om={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nm={key:7,class:"creative-options-wrap"},lm={class:"result-header"},im={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},am={key:1,class:"creative-options-list"},sm={class:"creative-title"},rm={class:"creative-angle"},dm=["onClick"],um={class:"form-group"},cm={class:"quiz-config-row"},pm={class:"form-group",style:{flex:"1"}},vm={class:"form-group",style:{flex:"1"}},fm={class:"form-group"},mm={class:"qtype-btns"},gm=["onClick"],bm={class:"qtype-icon"},ym={class:"form-group"},hm={class:"form-group"},xm={class:"prompt-label-row"},km={key:1,class:"prompt-auto-badge"},wm=["disabled"],Cm={key:0,class:"spinner"},Sm={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$m={key:0,class:"quiz-results"},Im={class:"quiz-results-header"},Em={class:"form-label"},Am={class:"quiz-header-actions"},Tm={class:"regen-row"},Mm=["disabled"],Pm={key:0,class:"spinner spinner-sm"},Nm={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Bm=["disabled"],zm={class:"quiz-card-header"},Lm={class:"quiz-card-check"},jm=["onUpdate:modelValue"],_m={class:"q-num"},Dm={class:"q-badges"},qm={class:"badge type-badge"},Rm={class:"q-question"},Om={class:"q-options"},Fm={class:"q-option-letter"},Um={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Vm={key:0,class:"q-explanation"},Wm=["disabled"],Gm={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hm=["disabled"],Ym={key:0,class:"spinner"},Jm={key:0,class:"selected-text-preview"},Qm={class:"text-preview"},Xm={key:1,class:"ai-hint"},Km={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},Zm=["disabled"],eg={key:0,class:"spinner"},tg={key:0,class:"selected-text-preview"},og={class:"text-preview"},ng={key:1,class:"ai-hint"},lg={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},ig=["disabled"],ag={key:0,class:"spinner"},sg={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},rg={class:"result-header"},dg={class:"result-actions"},ug=["disabled"],cg={class:"textarea result-display"},pg={key:0,class:"demo-notice",style:{"margin-bottom":"var(--space-3)"}},vg={key:1,class:"ai-error",style:{"margin-bottom":"var(--space-3)"}},fg={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},mg=["disabled"],gg={key:0,class:"spinner"},bg={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},yg={class:"textarea result-display",style:{color:"var(--color-primary)"}},hg={key:6,class:"ai-settings"},xg={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},kg=["value"],wg={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Cg=["value","placeholder"],Sg={class:"form-hint"},$g={key:0,class:"demo-notice"},Ig={key:1,class:"demo-notice"},Eg={key:7,class:"result-area"},Ag={class:"result-header"},Tg={class:"result-pre"},Mg={class:"result-actions"},Pg=["disabled"],Ng={key:8,class:"ai-error"},Bg={__name:"AIAssistant",setup(E){const s=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'}],d={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(r,n="classic"){const v=String(r||n||"classic").trim().toLowerCase();return s.some(M=>M.id===v)?v:n}function p(r,n=""){return String(r??n).replace(/^\s*[-•]\s*/,"").trim()||n}function h(r){return(Array.isArray(r)?r:typeof r=="string"?r.split(`
`):[]).map(v=>p(v)).filter(Boolean)}function x(r,n,v){const M=[...r];for(;M.length<n;)M.push(v(M.length));return M.slice(0,n)}function f(r,n){const v=Array.isArray(r)?r.map((y,se)=>({title:p(y==null?void 0:y.title,`Card ${se+1}`),body:p((y==null?void 0:y.body)||(y==null?void 0:y.text)||(y==null?void 0:y.description),"Add supporting detail.")})).filter(y=>y.title||y.body):[],M=n.map((y,se)=>({title:`Point ${se+1}`,body:y}));return x(v.length?v:M,3,y=>({title:`Point ${y+1}`,body:"Add supporting detail."}))}function H(r,n){const v=h(r==null?void 0:r.leftPoints),M=h(r==null?void 0:r.rightPoints),y=n.slice(0,Math.max(1,Math.ceil(n.length/2))),se=n.slice(Math.max(1,Math.ceil(n.length/2)));return{leftTitle:p(r==null?void 0:r.leftTitle,"Option A"),leftPoints:x(v.length?v:y,3,Pe=>`Left point ${Pe+1}`),rightTitle:p(r==null?void 0:r.rightTitle,"Option B"),rightPoints:x(M.length?M:se,3,Pe=>`Right point ${Pe+1}`)}}function le(r,n){const v=Array.isArray(r)?r.map((y,se)=>({value:p(y==null?void 0:y.value,`${se+1}`),label:p(y==null?void 0:y.label,`Metric ${se+1}`)})).filter(y=>y.value||y.label):[],M=n.map((y,se)=>{const[Pe,...Ze]=y.split(/[:\-]/);return{value:p(Pe,`${se+1}`),label:p(Ze.join(" ").trim(),y)}});return x(v.length?v:M,3,y=>({value:`${y+1}`,label:`Metric ${y+1}`}))}function G(r,n){const v=Array.isArray(r)?r.map((y,se)=>({title:p(y==null?void 0:y.title,`Phase ${se+1}`),detail:p((y==null?void 0:y.detail)||(y==null?void 0:y.description),"Explain the milestone.")})).filter(y=>y.title||y.detail):[],M=n.map((y,se)=>({title:`Phase ${se+1}`,detail:y}));return x(v.length?v:M,4,y=>({title:`Phase ${y+1}`,detail:"Explain the milestone."}))}function W(r,n){const v=Array.isArray(r)?r.map((y,se)=>({question:p(y==null?void 0:y.question,`Question ${se+1}?`),answer:p(y==null?void 0:y.answer,"Add the short answer here.")})).filter(y=>y.question||y.answer):[],M=n.map((y,se)=>({question:`Question ${se+1}?`,answer:y}));return x(v.length?v:M,3,y=>({question:`Question ${y+1}?`,answer:"Add the short answer here."}))}function ge(r,n){const v=Array.isArray(r)?r.map((y,se)=>({title:p(y==null?void 0:y.title,`Step ${se+1}`),detail:p((y==null?void 0:y.detail)||(y==null?void 0:y.description),"Add the step detail here.")})).filter(y=>y.title||y.detail):[],M=n.map((y,se)=>({title:`Step ${se+1}`,detail:y}));return x(v.length?v:M,3,y=>({title:`Step ${y+1}`,detail:"Add the step detail here."}))}const B=Tl(),N=it(),a=at(),T=A(()=>B.apiProvider==="gemini"?"Gemini":"OpenAI"),L=A(()=>B.apiProvider==="gemini"?"AIza...":"sk-..."),Y=A(()=>B.apiProvider==="gemini"?"Gemini API keys from Google AI Studio work for text features on the free tier. We provide free image generation via Pollinations.ai when Gemini is selected. The key is stored locally in your browser and never sent to our servers.":"Key is stored locally in your browser. It is never sent to our servers."),g=z("generate"),F=z(""),ie=z(""),te=z("");Je(g,()=>{te.value=""}),Je(()=>N.aiPanelMode,r=>{r&&(g.value=r)},{immediate:!0});const xe=z(4),R=z("general"),V=z("Spanish"),pe=z(""),be=z(""),ne=z(""),ke=z(!1),C=z("single"),j=z("classic"),_=z("mixed"),X=z(5),he=z("slide"),ze=z([]),$e=z(""),je=A(()=>s.find(r=>r.id===j.value)||s[0]),oe=A(()=>{const r=ie.value.trim()||"[your topic]";if(C.value==="deck"){let M=`Create a complete ${X.value}-slide learning deck about "${r}".`;return be.value.trim()&&(M+=`
Additional context: ${be.value.trim()}`),M+=`
Deck layout strategy: ${_.value}`,_.value==="single"?M+=`
Use the ${j.value} layout for every slide.`:M+=`
Mix layouts across the deck when appropriate.`,M+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process" }] }`,M+=`
Make each slide distinct, logically sequenced, and specific to "${r}".`,M}let v=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[R.value]||"educational slide"} about "${r}".`;return be.value.trim()&&(v+=`
Additional context: ${be.value.trim()}`),v+=`
Layout mode: ${j.value}`,v+=`
Layout instruction: ${je.value.promptHint}`,v+=`
Return ONLY valid JSON matching this shape: ${je.value.schema}`,v+=`
Make all content specific to "${r}" — no generic placeholders.`,v});Je(oe,r=>{ke.value||(ne.value=r)},{immediate:!0});function fe(){ne.value=oe.value,ke.value=!1}const ae=z(""),me=z("intermediate"),Te=z("multiple-choice"),re=z(""),$=z([]),S=z(""),D=z(!1),m=A(()=>{const r=ae.value.trim()||"[your topic]",n={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},v={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let M=`Generate ${xe.value} ${n[me.value]} ${v[Te.value]} quiz questions about "${r}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return re.value.trim()&&(M+=`
Learning objective: ${re.value.trim()}`),M});Je(m,r=>{D.value||(S.value=r)},{immediate:!0});function _e(){S.value=m.value,D.value=!1}const qe=A(()=>a.getProject(N.projectId)),Le=A(()=>{var r,n;return(n=(r=qe.value)==null?void 0:r.slides)==null?void 0:n.find(v=>v.id===N.currentSlideId)}),we=A(()=>{var r,n;return N.selectedElementId?(n=(r=Le.value)==null?void 0:r.elements)==null?void 0:n.find(v=>v.id===N.selectedElementId):null}),Me=A(()=>{var n;const r=new Set(N.selectedElementIds);return(((n=Le.value)==null?void 0:n.elements)||[]).filter(v=>{var M;return r.has(v.id)&&typeof((M=v==null?void 0:v.content)==null?void 0:M.text)=="string"&&v.content.text.trim()})}),st=A(()=>Me.value.map(r=>r.content.text.trim()).filter(Boolean).join(`

`));async function ot(){if(!ie.value.trim()&&!ne.value.trim())return;if(te.value="",ze.value=[],$e.value="",C.value==="deck"){const n=await B.generateSlideDeck(ie.value,X.value,{objective:be.value,customPrompt:ne.value,layoutStrategy:_.value,layoutMode:j.value});if(n!=null&&n.length){const v=n.map(M=>nt(M));te.value=JSON.stringify({slides:v},null,2),Ie(v,{replaceGenerated:!0})}return}if(he.value==="options"){await Ve();return}const r=await B.generateSlideContent(ie.value,R.value,be.value,ne.value,{layoutMode:j.value});if(r){const n=nt(r);te.value=JSON.stringify(n,null,2),Ee(n,{replaceGenerated:!0})}}function nt(r){var y;const n=r&&typeof r=="object"?r:{},v=h(n.bullets),M=c(n.layout||((y=n.design)==null?void 0:y.layout),C.value==="deck"&&_.value==="mixed"?"classic":j.value);return{title:String(n.title||ie.value||"Untitled Slide").trim(),subtitle:String(n.subtitle||"").trim(),bullets:v,callout:String(n.callout||"").trim(),layout:M,cards:f(n.cards,v),comparison:H(n.comparison,v),metrics:le(n.metrics,v),timeline:G(n.timeline,v),faqs:W(n.faqs,v),process:ge(n.process,v)}}function wt(r,n){var y,se,Pe;const v=(se=(y=a.getProject(r))==null?void 0:y.slides)==null?void 0:se.find(Ze=>Ze.id===n);if(!((Pe=v==null?void 0:v.elements)!=null&&Pe.length))return;v.elements.filter(Ze=>{var P;return((P=Ze.meta)==null?void 0:P.source)==="ai-content"}).map(Ze=>Ze.id).forEach(Ze=>{a.deleteElement(r,n,Ze)})}function rt(r,n,v,M){return a.addElement(r,n,v,{...M,meta:{...M.meta||{},source:"ai-content"}})}function De(r){const n=Rl.find(M=>M.id===r);if(!n)return null;const v=Ol(JSON.parse(JSON.stringify(n)),r);return v.elements=v.elements.map(M=>({...M,meta:{...M.meta||{},source:"ai-content"}})),v}function ct(r,n){n&&r.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:n,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function Ke(r,n){if(!n)return;const v=Ot(r);r.elements.push({type:"text",x:0,y:v.height+18,width:Math.max(v.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${n}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function Ct(r){const n=Array.isArray(r)?r:[];if(!n.length)return{minX:40,minY:54,width:0,height:0};const v=Math.min(...n.map(Pe=>Number(Pe.x||0))),M=Math.min(...n.map(Pe=>Number(Pe.y||0))),y=Math.max(...n.map(Pe=>Number(Pe.x||0)+Number(Pe.width||0))),se=Math.max(...n.map(Pe=>Number(Pe.y||0)+Number(Pe.height||0)));return{minX:v,minY:M,width:Math.max(0,y-v),height:Math.max(0,se-M)}}function St(r,n){var se;const v=a.getProject(r),M=Ot(n),y=Number(((se=v==null?void 0:v.settings)==null?void 0:se.slideWidth)||960);return{x:Math.max(40,Math.round((y-M.width)/2)),y:54}}function $t(r){const n=De(d.cards);if(!n)return null;const v=r.cards;return n.elements[0].content.text=r.title,n.elements[1].content.text=r.subtitle||r.callout||"Use the three cards to frame the main ideas.",v.forEach((M,y)=>{n.elements[5+y].content.text=M.title,n.elements[8+y].content.text=M.body}),r.callout&&r.subtitle&&Ke(n,r.callout),n}function pt(r){const n=De(d.comparison);return n?(n.elements[0].content.text=r.title,n.elements[3].content.text=r.comparison.leftTitle,n.elements[4].content.text=r.comparison.rightTitle,n.elements[5].content={...n.elements[5].content,text:r.comparison.leftPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},n.elements[6].content={...n.elements[6].content,text:r.comparison.rightPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},ct(n,r.subtitle),Ke(n,r.callout),n):null}function It(r){const n=De(d.metrics);return n?(n.elements[0].content.text=r.title,r.metrics.forEach((v,M)=>{n.elements[4+M].content.text=v.value,n.elements[7+M].content.text=v.label}),ct(n,r.subtitle),Ke(n,r.callout),n):null}function Et(r){const n=De(d.timeline);return n?(n.elements[0].content.text=r.title,r.timeline.forEach((v,M)=>{n.elements[6+M].content={...n.elements[6+M].content,text:`${v.title}
${v.detail}`,fontSize:16,lineHeight:1.35}}),ct(n,r.subtitle),Ke(n,r.callout),n):null}function At(r){const n=De(d.faq);return n?(n.elements[0].content.text=r.title,r.faqs.forEach((v,M)=>{n.elements[4+M].content={...n.elements[4+M].content,text:`${v.question}
${v.answer}`,fontSize:16,lineHeight:1.35},n.elements[4+M].height=44}),ct(n,r.subtitle),Ke(n,r.callout),n):null}function b(r){const n=De(d.process);return n?(n.elements[0].content.text=r.title,r.process.forEach((v,M)=>{n.elements[8+M].content.text=v.title,n.elements[11+M].content.text=v.detail}),ct(n,r.subtitle),Ke(n,r.callout),n):null}function k(r){switch(r.layout){case"cards":return $t(r);case"comparison":return pt(r);case"metrics":return It(r);case"timeline":return Et(r);case"faq":return At(r);case"process":return b(r);default:return null}}function K(r,n,v){var M;if(v.title&&(a.updateSlide(r,n,{title:v.title}),rt(r,n,"heading",{x:60,y:40,width:840,height:80,content:{text:v.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),v.subtitle&&rt(r,n,"text",{x:60,y:130,width:840,height:50,content:{text:v.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(M=v.bullets)!=null&&M.length){const y=v.bullets.map(se=>`• ${se}`).join(`
`);rt(r,n,"text",{x:60,y:v.subtitle?200:150,width:840,height:200,content:{text:y,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}v.callout&&(rt(r,n,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),rt(r,n,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${v.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function U(r,n,v,{replaceGenerated:M=!1,origin:y=null}={}){if(!r||!n)return;M&&wt(r,n);const se=k(v);if(a.updateSlide(r,n,{title:v.title||"Untitled Slide"}),se){const Pe=y||St(r,se);a.insertContentBlock(r,n,se,Pe)}else K(r,n,v)}function Ie(r,{replaceGenerated:n=!1}={}){if(!N.currentSlideId)return;const v=N.projectId;if(!v||!Array.isArray(r)||!r.length)return;r.map(y=>nt(y)).forEach(y=>{const se=a.addSlide(v);se&&U(v,se.id,y,{replaceGenerated:n})})}function Ee(r=null,{replaceGenerated:n=!1}={}){if(!N.currentSlideId)return;let v=r;if(!v){if(!te.value)return;try{v=JSON.parse(te.value)}catch(Pe){console.warn("Could not parse AI content:",Pe);return}}const M=nt(v),y=N.projectId,se=N.currentSlideId;!y||!se||U(y,se,M,{replaceGenerated:n})}function Oe(){if(te.value){if(C.value==="deck"){try{const r=JSON.parse(te.value),n=Array.isArray(r)?r:r==null?void 0:r.slides;if(!Array.isArray(n)||!n.length)return;Ie(n,{replaceGenerated:!0})}catch{return}return}Ee()}}async function Ve(){const r=ie.value.trim()||"[your topic]",n=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${R.value}" slide about "${r}" using a ${j.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,v=await B.generate(n,{type:"creativeOptions",topic:r,slideType:R.value});if(v)try{const M=JSON.parse(v.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(M))throw new Error("Options must be an array");ze.value=M.slice(0,3).map((y,se)=>({title:String((y==null?void 0:y.title)||`Option ${se+1}`),angle:String((y==null?void 0:y.angle)||""),prompt:String((y==null?void 0:y.prompt)||"")})).filter(y=>y.prompt.trim()),ze.value.length||($e.value="No usable creative options were returned. Try generating again.")}catch{$e.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function de(r){r!=null&&r.prompt&&(ne.value=r.prompt,ke.value=!0,he.value="slide",await ot())}async function Se(){if(!st.value.trim()||!N.projectId||!N.currentSlideId)return;const r=await B.transformSourceTextToSlideContent(st.value,{topic:ie.value,slideType:R.value,description:be.value,layoutMode:j.value,customPrompt:ne.value});if(!r)return;const n=nt(r),v=Ct(Me.value),M={x:Math.max(24,Math.round(v.minX)),y:Math.max(24,Math.round(v.minY))};Me.value.forEach(y=>{a.deleteElement(N.projectId,N.currentSlideId,y.id)}),te.value=JSON.stringify(n,null,2),U(N.projectId,N.currentSlideId,n,{origin:M})}async function He(r=!1){if(!ae.value.trim()&&!S.value.trim())return;r||($.value=[]);const n=await B.generateQuiz(ae.value,xe.value,{difficulty:me.value,questionType:Te.value,objective:re.value,customPrompt:S.value});if(n)if(r){const v=new Set($.value.map(y=>y.question)),M=n.filter(y=>!v.has(y.question)).map(y=>({...y,_selected:!0}));$.value=[...$.value,...M]}else $.value=n.map(v=>({...v,_selected:!0}))}async function Ue(){const r=$.value.filter(v=>v._selected);if(!r.length)return;const n=N.projectId;r.forEach((v,M)=>{const y=a.addSlide(n);if(y){a.addElement(n,y.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:v.question||"Untitled Question",options:Array.isArray(v.options)?v.options:["True","False"],correctIndex:typeof v.correctIndex=="number"?v.correctIndex:0,explanation:v.explanation||""}});const se=typeof v.question=="string"?v.question:"Quiz";a.updateSlide(n,y.id,{title:`Q${M+1}: ${se.slice(0,40)}…`})}}),$.value=[]}function Ne(r){$.value.forEach(n=>n._selected=r)}async function We(){if(!pe.value.trim())return;const r=await B.generateVoiceoverScript(pe.value);r&&(te.value=r)}async function mt(){var v,M;const r=(M=(v=we.value)==null?void 0:v.content)==null?void 0:M.text;if(!r)return;const n=await B.generateTranslation(r,V.value);n&&(te.value=n)}async function vt(){!te.value||!we.value||a.updateElement(N.projectId,N.currentSlideId,we.value.id,{content:{...we.value.content,text:te.value}})}const Xe=z(""),ft=z(!1);function Tt(r){return String(r||"").replace(/```(json)?\n?/gi," ").replace(/```/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim().slice(0,220)}function Mt(r,n){return new Promise((v,M)=>{const y=window.setTimeout(()=>{M(new Error("Timed out"))},n);Promise.resolve(r).then(se=>{window.clearTimeout(y),v(se)}).catch(se=>{window.clearTimeout(y),M(se)})})}function Pt(r){const n=String(r||"").trim(),v=n.toLowerCase(),M=T.value;return n?v.includes("billing hard limit")||v.includes("billing")||v.includes("quota")||v.includes("insufficient_quota")?B.apiProvider==="gemini"?"Gemini image generation is being rejected by Google because this project is still on the free tier. Gemini Developer API image models require a billing-enabled project, so you need to enable billing in AI Studio or switch providers for image generation.":`Your ${M} account cannot generate images right now because its billing or quota limit has been reached. Update billing or wait for quota reset, then try again.`:B.apiProvider==="gemini"&&(v.includes("resource exhausted")||v.includes("free tier")||v.includes("generativelanguage.googleapis.com"))?"Gemini image generation is not available to this free-tier project. Enable billing for the Gemini project in AI Studio to use Gemini image models.":v.includes("invalid api key")||v.includes("incorrect api key")||v.includes("unauthorized")?`The ${M} API key appears invalid for image generation. Check the key in API settings and try again.`:v.includes("rate limit")||v.includes("too many requests")?`${M} rate-limited the image request. Wait a moment and try again.`:`${M} image generation failed: ${n}`:`${M} image generation did not return an image. Try a simpler prompt or try again in a moment.`}async function _t(){if(Xe.value.trim()){ft.value=!0,te.value="Preparing image prompt...";try{if(!B.apiKey&&B.apiProvider!=="gemini"){te.value=`AI image generation requires a ${T.value} API key in API settings. No fallback image was inserted.`;return}let r=Xe.value;try{const v=await Mt(B.generateImagePrompt(Xe.value),2200);v&&(r=v.replace(/```(json)?\n?/g,"").trim())}catch{r=Xe.value}r=Tt(r)||Tt(Xe.value),te.value="Generating image and inserting it on the slide...";const n=await Mt(B.generateImageAsset(r),2e4).catch(()=>null);if(!n){te.value=Pt(B.lastError);return}a.addElement(N.projectId,N.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:n,fallbackSrcs:[],alt:Xe.value.trim()||"AI generated image",sourceType:`${B.apiProvider}-image`,objectFit:"cover"}}),te.value=`AI image added to slide using ${T.value} image generation.`}catch(r){te.value=Pt((r==null?void 0:r.message)||B.lastError)}finally{ft.value=!1}}}async function Dt(){var n,v;if(!((v=(n=we.value)==null?void 0:n.content)!=null&&v.text))return;const r=await B.improveText(we.value.content.text,F.value||"Make it clearer and more engaging");r&&(te.value=r)}async function ht(){!te.value||!we.value||a.updateElement(N.projectId,N.currentSlideId,we.value.id,{content:{...we.value.content,text:te.value}})}async function dt(){if(!F.value.trim())return;const r=await B.generate(F.value);r&&(te.value=r)}return(r,n)=>{var v,M,y,se,Pe,Ze;return l(),i("div",b1,[e("div",y1,[(l(),i(ee,null,ue([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],P=>e("button",{key:P.id,class:Q(["ai-mode-btn",g.value===P.id&&"active"]),onClick:tt=>g.value=P.id},w(P.label),11,h1)),64))]),e("div",x1,[g.value==="generate"?(l(),i(ee,{key:0},[e("div",k1,[n[36]||(n[36]=e("label",{class:"form-label"},[Z("Topic / Subject "),e("span",{class:"required"},"*")],-1)),ce(e("input",{"onUpdate:modelValue":n[0]||(n[0]=P=>ie.value=P),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:dl(ot,["enter"])},null,544),[[Ce,ie.value]])]),e("div",w1,[e("button",{class:Q(["output-mode-btn",C.value==="single"&&"active"]),onClick:n[1]||(n[1]=P=>C.value="single")},"Single Slide",2),e("button",{class:Q(["output-mode-btn",C.value==="deck"&&"active"]),onClick:n[2]||(n[2]=P=>C.value="deck")},"Slide Deck",2)]),C.value==="single"?(l(),i("div",C1,[n[38]||(n[38]=e("label",{class:"form-label"},"Slide Type",-1)),ce(e("select",{"onUpdate:modelValue":n[3]||(n[3]=P=>R.value=P),class:"select"},[...n[37]||(n[37]=[et('<option value="general" data-v-09e78b1e>General</option><option value="intro" data-v-09e78b1e>Introduction</option><option value="overview" data-v-09e78b1e>Overview</option><option value="concept" data-v-09e78b1e>Concept Explanation</option><option value="example" data-v-09e78b1e>Example / Case Study</option><option value="summary" data-v-09e78b1e>Summary</option><option value="callout" data-v-09e78b1e>Key Takeaway</option>',7)])],512),[[Bt,R.value]])])):q("",!0),C.value==="single"?(l(),i("div",S1,[e("div",$1,[n[39]||(n[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",I1,w(je.value.hint),1)]),e("div",E1,[(l(),i(ee,null,ue(s,P=>e("button",{key:P.id,class:Q(["layout-preset-card",j.value===P.id&&"active"]),onClick:tt=>j.value=P.id},[e("span",T1,w(P.label),1),e("span",M1,w(P.hint),1)],10,A1)),64))])])):(l(),i("div",P1,[n[40]||(n[40]=e("label",{class:"form-label"},"Number of Slides",-1)),ce(e("input",{"onUpdate:modelValue":n[4]||(n[4]=P=>X.value=P),class:"input",type:"number",min:"1",max:"20"},null,512),[[Ce,X.value,void 0,{number:!0}]]),n[41]||(n[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),C.value==="deck"?(l(),i("div",N1,[e("div",B1,[n[42]||(n[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",z1,w(_.value==="mixed"?"AI can vary layout by slide":`All slides use ${je.value.label}`),1)]),e("div",L1,[e("button",{class:Q(["output-mode-btn",_.value==="mixed"&&"active"]),onClick:n[5]||(n[5]=P=>_.value="mixed")},"Mixed Layouts",2),e("button",{class:Q(["output-mode-btn",_.value==="single"&&"active"]),onClick:n[6]||(n[6]=P=>_.value="single")},"Consistent Layout",2)])])):q("",!0),C.value==="deck"&&_.value==="single"?(l(),i("div",j1,[e("div",_1,[n[43]||(n[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",D1,w(je.value.hint),1)]),e("div",q1,[(l(),i(ee,null,ue(s,P=>e("button",{key:`deck-${P.id}`,class:Q(["layout-preset-card",j.value===P.id&&"active"]),onClick:tt=>j.value=P.id},[e("span",O1,w(P.label),1),e("span",F1,w(P.hint),1)],10,R1)),64))])])):q("",!0),e("div",U1,[n[44]||(n[44]=e("label",{class:"form-label"},[Z("Description "),e("span",{class:"optional"},"(optional)")],-1)),ce(e("textarea",{"onUpdate:modelValue":n[7]||(n[7]=P=>be.value=P),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[Ce,be.value]])]),e("div",V1,[e("div",W1,[n[46]||(n[46]=e("label",{class:"form-label"},"AI Prompt",-1)),ke.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:fe,title:"Reset to auto-generated prompt"},[...n[45]||(n[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),Z(" Reset ",-1)])])):(l(),i("span",G1,"auto"))]),ce(e("textarea",{"onUpdate:modelValue":n[8]||(n[8]=P=>ne.value=P),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:n[9]||(n[9]=P=>ke.value=!0),spellcheck:"false"},null,544),[[Ce,ne.value]]),n[47]||(n[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),C.value==="single"?(l(),i("div",H1,[e("button",{class:Q(["output-mode-btn",he.value==="slide"&&"active"]),onClick:n[10]||(n[10]=P=>he.value="slide")},"Show on Slide",2),e("button",{class:Q(["output-mode-btn",he.value==="options"&&"active"]),onClick:n[11]||(n[11]=P=>he.value="options")},"Creative Options",2)])):q("",!0),C.value==="single"&&st.value?(l(),i("div",Y1,[e("div",J1,[n[48]||(n[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",Q1,w(Me.value.length)+" selected",1)]),e("div",X1,w(st.value),1),e("div",K1,[e("button",{class:"btn btn-secondary btn-sm",disabled:I(B).isGenerating,onClick:Se}," Transform Selection to "+w(je.value.label),9,Z1)])])):q("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(B).isGenerating||!ie.value.trim()&&!ne.value.trim()||C.value==="deck"&&(!X.value||X.value<1||X.value>20),onClick:ot},[I(B).isGenerating?(l(),i("span",tm)):(l(),i("svg",om,[...n[49]||(n[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Z(" "+w(I(B).isGenerating?"Generating…":C.value==="deck"?te.value?`Regenerate ${X.value} Slides`:`Generate ${X.value} Slides`:he.value==="slide"?te.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,em),C.value==="single"&&he.value==="options"&&(ze.value.length||$e.value)?(l(),i("div",nm,[e("div",lm,[n[50]||(n[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[12]||(n[12]=P=>{ze.value=[],$e.value=""})},"Clear")]),$e.value?(l(),i("div",im,[n[51]||(n[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Z(" "+w($e.value),1)])):(l(),i("div",am,[(l(!0),i(ee,null,ue(ze.value,(P,tt)=>(l(),i("article",{key:tt,class:"creative-option-card"},[e("h4",sm,w(P.title),1),e("p",rm,w(P.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:gt=>de(P)},"Use This Option",8,dm)]))),128))]))])):q("",!0)],64)):g.value==="quiz"?(l(),i(ee,{key:1},[e("div",um,[n[52]||(n[52]=e("label",{class:"form-label"},[Z("Quiz Topic "),e("span",{class:"required"},"*")],-1)),ce(e("input",{"onUpdate:modelValue":n[13]||(n[13]=P=>ae.value=P),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:dl(He,["enter"])},null,544),[[Ce,ae.value]])]),e("div",cm,[e("div",pm,[n[54]||(n[54]=e("label",{class:"form-label"},"Questions",-1)),ce(e("select",{"onUpdate:modelValue":n[14]||(n[14]=P=>xe.value=P),class:"select"},[...n[53]||(n[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[Bt,xe.value,void 0,{number:!0}]])]),e("div",vm,[n[56]||(n[56]=e("label",{class:"form-label"},"Difficulty",-1)),ce(e("select",{"onUpdate:modelValue":n[15]||(n[15]=P=>me.value=P),class:"select"},[...n[55]||(n[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[Bt,me.value]])])]),e("div",fm,[n[57]||(n[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",mm,[(l(),i(ee,null,ue([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],P=>e("button",{key:P.id,class:Q(["qtype-btn",Te.value===P.id&&"active"]),onClick:tt=>Te.value=P.id},[e("span",bm,w(P.icon),1),e("span",null,w(P.label),1)],10,gm)),64))])]),e("div",ym,[n[58]||(n[58]=e("label",{class:"form-label"},[Z("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),ce(e("input",{"onUpdate:modelValue":n[16]||(n[16]=P=>re.value=P),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[Ce,re.value]])]),e("div",hm,[e("div",xm,[n[60]||(n[60]=e("label",{class:"form-label"},"AI Prompt",-1)),D.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:_e,title:"Reset to auto-generated prompt"},[...n[59]||(n[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),Z(" Reset ",-1)])])):(l(),i("span",km,"auto"))]),ce(e("textarea",{"onUpdate:modelValue":n[17]||(n[17]=P=>S.value=P),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:n[18]||(n[18]=P=>D.value=!0),spellcheck:"false"},null,544),[[Ce,S.value]]),n[61]||(n[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(B).isGenerating||!ae.value.trim()&&!S.value.trim(),onClick:n[19]||(n[19]=P=>He(!1))},[I(B).isGenerating?(l(),i("span",Cm)):(l(),i("svg",Sm,[...n[62]||(n[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Z(" "+w(I(B).isGenerating?"Generating…":`Generate ${xe.value} Questions`),1)],8,wm),$.value.length?(l(),i("div",$m,[e("div",Im,[e("span",Em,w($.value.length)+" Questions",1),e("div",Am,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[20]||(n[20]=P=>Ne(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:n[21]||(n[21]=P=>Ne(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:n[22]||(n[22]=P=>$.value=[])},"Clear")])]),e("div",Tm,[e("button",{class:"btn btn-secondary regen-btn",disabled:I(B).isGenerating,onClick:n[23]||(n[23]=P=>He(!1)),title:"Replace all questions with a new set"},[I(B).isGenerating?(l(),i("span",Pm)):(l(),i("svg",Nm,[...n[63]||(n[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),n[64]||(n[64]=Z(" Regenerate ",-1))],8,Mm),e("button",{class:"btn btn-ghost regen-btn",disabled:I(B).isGenerating,onClick:n[24]||(n[24]=P=>He(!0)),title:"Generate more and append to current list"},[...n[65]||(n[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Z(" Add More ",-1)])],8,Bm)]),(l(!0),i(ee,null,ue($.value,(P,tt)=>(l(),i("div",{key:tt,class:Q(["quiz-card",{deselected:!P._selected}])},[e("div",zm,[e("label",Lm,[ce(e("input",{type:"checkbox","onUpdate:modelValue":gt=>P._selected=gt},null,8,jm),[[Lt,P._selected]]),e("span",_m,"Q"+w(tt+1),1)]),e("div",Dm,[e("span",{class:Q(["badge difficulty-badge",P.difficulty])},w(P.difficulty),3),e("span",qm,w(P.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",Rm,w(P.question),1),e("div",Om,[(l(!0),i(ee,null,ue(P.options,(gt,xt)=>(l(),i("div",{key:xt,class:Q(["q-option",xt===P.correctIndex&&"correct"])},[e("span",Fm,w(["A","B","C","D"][xt]),1),e("span",null,w(gt),1),xt===P.correctIndex?(l(),i("svg",Um,[...n[66]||(n[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):q("",!0)],2))),128))]),P.explanation?(l(),i("div",Vm,[n[67]||(n[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),Z(" "+w(P.explanation),1)])):q("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!$.value.filter(P=>P._selected).length,onClick:Ue},[n[68]||(n[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),Z(" Add "+w($.value.filter(P=>P._selected).length)+" Selected as Quiz Slides ",1)],8,Wm)])):q("",!0)],64)):g.value==="voiceover"?(l(),i(ee,{key:2},[e("div",Gm,[n[69]||(n[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),ce(e("textarea",{"onUpdate:modelValue":n[25]||(n[25]=P=>pe.value=P),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[Ce,pe.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(B).isGenerating,onClick:We},[I(B).isGenerating?(l(),i("span",Ym)):q("",!0),Z(" "+w(I(B).isGenerating?"Generating…":"Generate Script"),1)],8,Hm)],64)):g.value==="improve"?(l(),i(ee,{key:3},[(M=(v=we.value)==null?void 0:v.content)!=null&&M.text?(l(),i("div",Jm,[n[70]||(n[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Qm,w(we.value.content.text.slice(0,120))+w(we.value.content.text.length>120?"…":""),1)])):(l(),i("p",Xm,"Select a text element on the canvas to improve it.")),e("div",Km,[n[71]||(n[71]=e("label",{class:"form-label"},"Instruction",-1)),ce(e("input",{"onUpdate:modelValue":n[26]||(n[26]=P=>F.value=P),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[Ce,F.value]])]),n[72]||(n[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ce(e("textarea",{"onUpdate:modelValue":n[27]||(n[27]=P=>F.value=P),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[Ce,F.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(B).isGenerating||!we.value&&!F.value,onClick:n[28]||(n[28]=P=>we.value?Dt():dt())},[I(B).isGenerating?(l(),i("span",eg)):q("",!0),Z(" "+w(I(B).isGenerating?"Processing…":"Generate"),1)],8,Zm)],64)):g.value==="translate"?(l(),i(ee,{key:4},[(se=(y=we.value)==null?void 0:y.content)!=null&&se.text?(l(),i("div",tg,[n[73]||(n[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",og,w(we.value.content.text.slice(0,120))+w(we.value.content.text.length>120?"…":""),1)])):(l(),i("p",ng,"Select a text element on the canvas to translate it.")),e("div",lg,[n[75]||(n[75]=e("label",{class:"form-label"},"Target Language",-1)),ce(e("select",{"onUpdate:modelValue":n[29]||(n[29]=P=>V.value=P),class:"select"},[...n[74]||(n[74]=[et('<option value="Spanish" data-v-09e78b1e>Spanish</option><option value="French" data-v-09e78b1e>French</option><option value="German" data-v-09e78b1e>German</option><option value="Italian" data-v-09e78b1e>Italian</option><option value="Portuguese" data-v-09e78b1e>Portuguese</option><option value="Chinese (Simplified)" data-v-09e78b1e>Chinese (Simplified)</option><option value="Japanese" data-v-09e78b1e>Japanese</option><option value="Arabic" data-v-09e78b1e>Arabic</option>',8)])],512),[[Bt,V.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(B).isGenerating||!((Ze=(Pe=we.value)==null?void 0:Pe.content)!=null&&Ze.text),onClick:mt},[I(B).isGenerating?(l(),i("span",ag)):q("",!0),Z(" "+w(I(B).isGenerating?"Translating…":"Translate Text"),1)],8,ig),te.value?(l(),i("div",sg,[e("div",rg,[n[76]||(n[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",dg,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[30]||(n[30]=P=>r.navigator.clipboard.writeText(te.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:vt,disabled:!we.value},"Apply",8,ug)])]),e("div",cg,w(te.value),1)])):q("",!0)],64)):g.value==="image"?(l(),i(ee,{key:5},[n[81]||(n[81]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),I(B).apiProvider==="gemini"?(l(),i("div",pg,[...n[77]||(n[77]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),Z(" Gemini text features work on the free tier, but Gemini image generation on the Developer API usually needs billing enabled for the project. ",-1)])])):q("",!0),I(B).apiKey?q("",!0):(l(),i("div",vg,[n[78]||(n[78]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Z(" AI image generation needs a "+w(T.value)+" API key in API settings. ",1)])),e("div",fg,[n[79]||(n[79]=e("label",{class:"form-label"},"Image Description",-1)),ce(e("textarea",{"onUpdate:modelValue":n[31]||(n[31]=P=>Xe.value=P),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[Ce,Xe.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:ft.value||I(B).isGenerating||!Xe.value||!I(B).apiKey,onClick:_t},[ft.value||I(B).isGenerating?(l(),i("span",gg)):q("",!0),Z(" "+w(ft.value||I(B).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,mg),te.value?(l(),i("div",bg,[n[80]||(n[80]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",yg,w(te.value),1)])):q("",!0)],64)):g.value==="settings"?(l(),i("div",hg,[e("div",xg,[n[83]||(n[83]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:I(B).apiProvider,class:"select",onChange:n[32]||(n[32]=P=>I(B).setProvider(P.target.value))},[...n[82]||(n[82]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"gemini"},"Google Gemini (Free tier for text)",-1)])],40,kg)]),e("div",wg,[n[84]||(n[84]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:I(B).apiKey,class:"input",placeholder:L.value,onChange:n[33]||(n[33]=P=>I(B).setApiKey(P.target.value))},null,40,Cg),e("p",Sg,w(Y.value),1)]),I(B).apiProvider==="gemini"?(l(),i("div",$g,[...n[85]||(n[85]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),Z(" Gemini is enabled for content, quiz, voiceover, improve, and translate in this app. Gemini image generation may still require billing on the Google project. ",-1)])])):q("",!0),I(B).apiKey?q("",!0):(l(),i("div",Ig,[n[86]||(n[86]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),n[87]||(n[87]=Z(" Running in ",-1)),n[88]||(n[88]=e("strong",null,"demo mode",-1)),Z(" — sample responses only. Add your "+w(T.value)+" API key to use real AI generation. ",1)]))])):q("",!0),te.value&&g.value!=="settings"&&g.value!=="quiz"?(l(),i("div",Eg,[e("div",Ag,[n[89]||(n[89]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[34]||(n[34]=P=>te.value="")},"Clear")]),e("pre",Tg,w(te.value),1),e("div",Mg,[g.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:Oe},w(C.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):q("",!0),g.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:I(B).isGenerating,onClick:ot},[...n[90]||(n[90]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),Z(" Regenerate ",-1)])],8,Pg)):q("",!0),g.value==="improve"&&we.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:ht}," Apply to Element ")):q("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:n[35]||(n[35]=P=>{var tt;return(tt=r.navigator.clipboard)==null?void 0:tt.writeText(te.value)})}," Copy ")])])):q("",!0),I(B).lastError?(l(),i("div",Ng,[n[91]||(n[91]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Z(" "+w(I(B).lastError),1)])):q("",!0)])])}}},zg=Qe(Bg,[["__scopeId","data-v-09e78b1e"]]),Lg={class:"theme-manager"},jg={class:"panel-section"},_g={class:"presets-grid"},Dg=["title","onClick"],qg={class:"preset-preview"},Rg={class:"preset-name"},Og={class:"panel-section"},Fg={class:"theme-fields"},Ug={class:"form-label"},Vg={class:"color-row"},Wg=["value","onInput"],Gg=["value","onChange"],Hg={class:"panel-section"},Yg={class:"theme-field"},Jg=["value","placeholder"],Qg={class:"chart-palette-preview"},Xg={class:"panel-section"},Kg={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Zg=["value"],eb=["value"],tb={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ob=["value"],nb=["value"],lb={class:"form-group"},ib=["value"],ab={class:"panel-section"},sb={class:"tp-chart-row"},rb={key:0,class:"apply-message success"},db={key:1,class:"apply-message error"},ub={__name:"ThemeManager",setup(E){const s=it(),d=at(),c=A(()=>d.getProject(s.projectId)),p=A(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),h=A(()=>ul(p.value)),x=z(""),f=z("");function H(a){d.updateProject(s.projectId,{theme:{...p.value,...a}})}const le=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],G=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function W(a){H(a)}function ge(a,T){const L=a.content||{};return a.type==="text"?{content:{...L,fontFamily:T.fontFamily||L.fontFamily,color:T.textColor||L.color}}:a.type==="heading"?{content:{...L,fontFamily:T.headingFont||T.fontFamily||L.fontFamily,color:T.textColor||L.color}}:a.type==="shape"?{content:{...L,fillColor:T.secondaryColor||L.fillColor}}:a.type==="hotspot"?{content:{...L,bgColor:T.primaryColor||L.bgColor}}:a.type==="button"?{content:{...L,bgColor:T.primaryColor||L.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:T.fontFamily||L.fontFamily}}:a.type==="quiz"?{content:{...L,cardBgColor:T.bgColor||L.cardBgColor,questionColor:T.textColor||L.questionColor,accentColor:T.primaryColor||L.accentColor}}:a.type==="chart"?{content:{...L,...yl(T)}}:null}function B(){H({chartPalette:""})}function N(){x.value="",f.value="";const a=s.projectId,T=c.value,L=p.value;if(!a||!T){f.value="No active project to apply theme.";return}const Y=T.slides||[];let g=0;Y.forEach(F=>{(F.backgroundType||"color")==="color"&&d.updateSlide(a,F.id,{backgroundType:"color",background:L.bgColor||F.background||"#ffffff"}),(F.elements||[]).forEach(ie=>{const te=ge(ie,L);te&&(d.updateElement(a,F.id,ie.id,te),g+=1)})}),x.value=`Applied theme to ${Y.length} slide${Y.length===1?"":"s"} and ${g} element${g===1?"":"s"}.`}return(a,T)=>(l(),i("div",Lg,[e("div",jg,[T[4]||(T[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",_g,[(l(),i(ee,null,ue(le,L=>e("div",{key:L.name,class:"preset-card",title:L.name,onClick:Y=>W(L)},[e("div",qg,[e("div",{class:"pp-header",style:ye({background:L.primaryColor})},null,4),e("div",{class:"pp-body",style:ye({background:L.bgColor})},[e("div",{class:"pp-line",style:ye({background:L.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:ye({background:L.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:ye({background:L.secondaryColor})},null,4)]),e("span",Rg,w(L.name),1)],8,Dg)),64))])]),e("div",Og,[T[5]||(T[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",Fg,[(l(),i(ee,null,ue({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(L,Y)=>e("div",{class:"theme-field",key:Y},[e("label",Ug,w(L),1),e("div",Vg,[e("input",{type:"color",value:p.value[Y]||"#ffffff",class:"color-input-native",onInput:g=>H({[Y]:g.target.value})},null,40,Wg),e("input",{value:p.value[Y]||"",class:"input",onChange:g=>H({[Y]:g.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Gg)])])),64))])]),e("div",Hg,[T[8]||(T[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",Yg,[T[6]||(T[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:I(Fl)(I(ul)(p.value)),onChange:T[0]||(T[0]=L=>H({chartPalette:L.target.value}))},null,40,Jg),e("div",Qg,[(l(!0),i(ee,null,ue(h.value,(L,Y)=>(l(),i("span",{key:`theme-chart-${Y}`,class:"chart-palette-dot",style:ye({background:L})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:B},"Use auto palette")]),T[7]||(T[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",Xg,[T[12]||(T[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",Kg,[T[9]||(T[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:T[1]||(T[1]=L=>H({headingFont:L.target.value}))},[(l(),i(ee,null,ue(G,L=>e("option",{key:L.value,value:L.value},w(L.label),9,eb)),64))],40,Zg)]),e("div",tb,[T[10]||(T[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:T[2]||(T[2]=L=>H({fontFamily:L.target.value}))},[(l(),i(ee,null,ue(G,L=>e("option",{key:L.value,value:L.value},w(L.label),9,nb)),64))],40,ob)]),e("div",lb,[T[11]||(T[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:T[3]||(T[3]=L=>H({fontSize:+L.target.value}))},null,40,ib)])]),e("div",ab,[T[13]||(T[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:ye({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:ye({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:ye({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:ye({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:ye({background:p.value.secondaryColor})},"Badge",4),e("div",sb,[(l(!0),i(ee,null,ue(h.value.slice(0,5),(L,Y)=>(l(),i("span",{key:`preview-chart-${Y}`,class:"tp-chart-bar",style:ye({background:L,height:`${22+Y*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:N}," Apply Theme to Slides "),x.value?(l(),i("p",rb,w(x.value),1)):q("",!0),f.value?(l(),i("p",db,w(f.value),1)):q("",!0)])]))}},cb=Qe(ub,[["__scopeId","data-v-da2b0ce4"]]),pb={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},vb={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},fb={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},mb={class:"export-tabs tabs",style:{"overflow-x":"auto"}},gb={class:"export-content"},bb={class:"export-options",style:{"margin-bottom":"20px"}},yb={class:"form-group"},hb={class:"export-meta"},xb={class:"meta-item"},kb={class:"meta-item"},wb={class:"meta-item"},Cb={class:"export-options",style:{"margin-bottom":"20px"}},Sb={class:"form-group"},$b={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Ib={class:"export-options",style:{"margin-bottom":"20px"}},Eb={class:"form-group"},Ab={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Tb={class:"coming-soon"},Mb={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},Pb={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},Nb={key:1,class:"export-success"},Bb={__name:"ExportModal",setup(E){const s=it(),d=at(),c=hl(),p=A(()=>d.getProject(s.projectId)),h=z("json"),x=z(""),f=z(""),H=z(!0);Je(p,Y=>{Y&&!f.value&&(f.value=Y.name||"presentation")},{immediate:!0});function le(){const Y=d.exportProject(s.projectId);if(!Y)return;const g=new Blob([Y],{type:"application/json"}),F=URL.createObjectURL(g),ie=document.createElement("a");ie.href=F,ie.download=`${f.value||"project"}.mediasurf.json`,ie.click(),URL.revokeObjectURL(F),x.value="success",setTimeout(()=>x.value="",3e3)}function G(Y,g="presentation"){return String(Y).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||g}function W(Y){return new Promise((g,F)=>{const ie=new FileReader;ie.onloadend=()=>g(ie.result),ie.onerror=()=>F(ie.error),ie.readAsDataURL(Y)})}function ge(Y,g,F="html"){const ie=jt(g);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${ie.width}px;
  --lf-slide-height: ${ie.height}px;
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
`}function B(Y="html"){return`
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
`}async function N(){return L("html")}async function a(){return L("iframe")}async function T(){return L("pdf")}async function L(Y="html"){var je,oe,fe;const g=p.value;if(!g)return;x.value="processing";const F=Y==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(Y==="pdf"&&!F){x.value="error",setTimeout(()=>x.value="",3e3);return}const ie=Y==="pdf"?null:new ti,te=ie?ie.folder("assets"):null;let xe=0;async function R(ae,me="media"){if((!ae||ae.startsWith("data:")||ae.startsWith("http://localhost")||ae.startsWith("blob:"))&&ae.startsWith("data:"))return ae;try{const re=await(await fetch(ae)).blob();if(Y==="pdf")return await W(re);let $="bin";const S=re.type;if(S.includes("image/png")?$="png":S.includes("image/jpeg")?$="jpg":S.includes("image/gif")?$="gif":S.includes("image/svg")?$="svg":S.includes("image/webp")?$="webp":S.includes("video/mp4")?$="mp4":S.includes("audio/mpeg")&&($="mp3"),$==="bin"){const m=ae.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);m&&($=m[1])}xe++;const D=`${me}_${xe}.${$}`;return te.file(D,re),`assets/${D}`}catch(Te){return console.warn("Could not fetch asset:",ae,Te),ae}}const V=JSON.parse(JSON.stringify([...g.slides||[]])).sort((ae,me)=>(ae.order??0)-(me.order??0));if(H.value)for(const ae of V){ae.backgroundType==="image"&&ae.backgroundImage&&(ae.backgroundImage=await R(ae.backgroundImage,"bg"));for(const me of ae.elements||[])me.type==="image"&&((je=me.content)!=null&&je.src)&&(me.content.src=await R(me.content.src,"img")),me.type==="video"&&((oe=me.content)!=null&&oe.src)&&!me.content.src.includes("youtube")&&!me.content.src.includes("youtu.be")&&(me.content.src=await R(me.content.src,"vid")),me.type==="audio"&&((fe=me.content)!=null&&fe.src)&&(me.content.src=await R(me.content.src,"aud"))}const pe=G(f.value||g.name||"presentation"),be={name:g.name,theme:g.theme||{},settings:g.settings||{},slides:V},ne=JSON.stringify(be).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),ke=ge(g.theme,g.settings,Y),C=B(Y),j=`<script id="lf-data" type="application/json">${ne}<\/script>`,X=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pe}</title>
${Y==="pdf"?`<style>${ke}</style>`:'<link rel="stylesheet" href="style.css">'}
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
  <span class="nav-counter" id="counter">1 / ${V.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${j}
${Y!=="pdf"?'<script src="script.js"><\/script>':`<script>${C}<\/script>`}
</body>
</html>`;if(Y==="pdf"){F.document.open(),F.document.write(X),F.document.close(),x.value="success",setTimeout(()=>x.value="",3e3);return}ie.file("index.html",X),ie.file("style.css",ke),ie.file("script.js",C);const he=await ie.generateAsync({type:"blob"}),ze=URL.createObjectURL(he),$e=document.createElement("a");$e.href=ze,$e.download=`${pe}.zip`,$e.click(),URL.revokeObjectURL(ze),x.value="success",setTimeout(()=>x.value="",3e3)}return(Y,g)=>(l(),Ye(ml,{title:"Export Project",size:"md",onClose:g[13]||(g[13]=F=>I(s).showExportModal=!1)},{footer:ut(()=>[e("button",{class:"btn btn-secondary",onClick:g[12]||(g[12]=F=>I(s).showExportModal=!1)},"Close")]),default:ut(()=>{var F,ie,te,xe,R;return[I(c).user?(l(),i(ee,{key:1},[e("div",mb,[e("button",{class:Q(["tab-btn",h.value==="json"&&"active"]),onClick:g[2]||(g[2]=V=>h.value="json")},"JSON",2),e("button",{class:Q(["tab-btn",h.value==="html"&&"active"]),onClick:g[3]||(g[3]=V=>h.value="html")},"HTML",2),e("button",{class:Q(["tab-btn",h.value==="iframe"&&"active"]),onClick:g[4]||(g[4]=V=>h.value="iframe")},"Iframe",2),e("button",{class:Q(["tab-btn",h.value==="pdf"&&"active"]),onClick:g[5]||(g[5]=V=>h.value="pdf")},"PDF",2),e("button",{class:Q(["tab-btn",h.value==="scorm"&&"active"]),onClick:g[6]||(g[6]=V=>h.value="scorm")},"SCORM",2)]),e("div",gb,[h.value==="json"?(l(),i(ee,{key:0},[g[24]||(g[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",bb,[e("div",yb,[g[19]||(g[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ce(e("input",{type:"text","onUpdate:modelValue":g[7]||(g[7]=V=>f.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ce,f.value]])])]),e("div",hb,[e("div",xb,[g[20]||(g[20]=e("span",null,"Project",-1)),e("strong",null,w((F=p.value)==null?void 0:F.name),1)]),e("div",kb,[g[21]||(g[21]=e("span",null,"Slides",-1)),e("strong",null,w(((te=(ie=p.value)==null?void 0:ie.slides)==null?void 0:te.length)||0),1)]),e("div",wb,[g[22]||(g[22]=e("span",null,"Elements",-1)),e("strong",null,w(((R=(xe=p.value)==null?void 0:xe.slides)==null?void 0:R.reduce((V,pe)=>{var be;return V+(((be=pe.elements)==null?void 0:be.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:le},[...g[23]||(g[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Download JSON ",-1)])])],64)):h.value==="html"?(l(),i(ee,{key:1},[g[28]||(g[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",Cb,[e("div",Sb,[g[25]||(g[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ce(e("input",{type:"text","onUpdate:modelValue":g[8]||(g[8]=V=>f.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ce,f.value]])]),e("label",$b,[ce(e("input",{type:"checkbox","onUpdate:modelValue":g[9]||(g[9]=V=>H.value=V)},null,512),[[Lt,H.value]]),g[26]||(g[26]=Z(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),g[29]||(g[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:N},[...g[27]||(g[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Download HTML ",-1)])])],64)):h.value==="iframe"?(l(),i(ee,{key:2},[g[33]||(g[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Ib,[e("div",Eb,[g[30]||(g[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ce(e("input",{type:"text","onUpdate:modelValue":g[10]||(g[10]=V=>f.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ce,f.value]])]),e("label",Ab,[ce(e("input",{type:"checkbox","onUpdate:modelValue":g[11]||(g[11]=V=>H.value=V)},null,512),[[Lt,H.value]]),g[31]||(g[31]=Z(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...g[32]||(g[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Download Iframe Zip ",-1)])])],64)):h.value==="pdf"?(l(),i(ee,{key:3},[g[35]||(g[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),g[36]||(g[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:T},[...g[34]||(g[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Generate PDF ",-1)])])],64)):h.value==="scorm"?(l(),i(ee,{key:4},[g[40]||(g[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Tb,[(l(),i("svg",Mb,[...g[37]||(g[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),g[38]||(g[38]=e("h4",null,"Coming Soon",-1)),g[39]||(g[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):q("",!0),yt(zt,{name:"fade"},{default:ut(()=>[x.value==="processing"?(l(),i("div",Pb,[...g[41]||(g[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),Z(" Generating package... Please wait. ",-1)])])):x.value==="success"?(l(),i("div",Nb,[...g[42]||(g[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),Z(" Export successful! Check your downloads folder. ",-1)])])):q("",!0)]),_:1})])],64)):(l(),i("div",pb,[(l(),i("svg",vb,[...g[14]||(g[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),g[17]||(g[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),g[18]||(g[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",fb,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:g[0]||(g[0]=V=>I(c).loginWithGoogle())},[...g[15]||(g[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),Z(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:g[1]||(g[1]=V=>I(c).loginWithMicrosoft())},[...g[16]||(g[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),Z(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},zb=Qe(Bb,[["__scopeId","data-v-36504f5e"]]),Lb={key:0,class:"editor-view"},jb={class:"editor-topbar"},_b={class:"topbar-left"},Db={class:"project-name-wrap"},qb=["value"],Rb={class:"save-label"},Ob={class:"topbar-center"},Fb={key:0,class:"slide-position"},Ub={class:"topbar-right"},Vb={class:"editor-body"},Wb={class:"authoring-rail"},Gb=["onClick","data-tooltip"],Hb={key:0,class:"rail-icon"},Yb={key:1,class:"rail-icon"},Jb={key:2,class:"rail-icon"},Qb={key:3,class:"rail-icon"},Xb={key:4,class:"rail-icon"},Kb={key:5,class:"rail-icon"},Zb={key:6,class:"rail-icon"},ey={key:7,class:"rail-icon"},ty={key:8,class:"rail-icon"},oy={key:9,class:"rail-icon"},ny={class:"right-panel"},ly={class:"panel-tabs"},iy=["onClick","data-tooltip"],ay={class:"tab-icon"},sy={class:"tab-label"},ry={class:"panel-content"},dy={key:1,class:"editor-not-found"},uy={__name:"EditorView",setup(E){const s=Al(),d=El(),c=it(),p=at(),h=hl(),x=A(()=>s.params.id),f=A(()=>p.getProject(x.value)),H=A(()=>jt(f.value)),le=A(()=>{var $;return[...(($=f.value)==null?void 0:$.slides)||[]].sort((S,D)=>S.order-D.order)}),G=z(null),W=z(!1),ge=z("deck"),{aiStore:B,showAIModal:N,aiMode:a,aiTopic:T,aiContext:L,aiProjectName:Y,aiSlideCount:g,aiQuestionCount:F,aiDifficulty:ie,aiQuestionType:te,aiCreationError:xe,aiSubmitting:R,aiProjectNamePlaceholder:V,aiPrimaryActionLabel:pe,openAICreationModal:be,createAIProject:ne}=Ml({onRequireAuth:()=>d.push({name:"dashboard"})});let ke=!1,C=null;Je(()=>f.value,$=>{if($){if(ke){ke=!1;return}C&&clearTimeout(C),C=setTimeout(()=>{c.pushHistory($)},600)}},{deep:!0}),Je(()=>h.isAuthReady,async $=>{var S;if($){if((S=h.user)!=null&&S.uid&&await p.ensureRemoteProjectsLoaded(),!f.value){d.push({name:"dashboard"});return}c.setProject(x.value),le.value.length>0&&c.setCurrentSlide(le.value[0].id),c.pushHistory(f.value)}},{immediate:!0});const j=A(()=>{const $=f.value;return $?`Saved ${new Date($.updatedAt).toLocaleTimeString()}`:""}),_=A(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});oi({undo:()=>{if(c.canUndo()){const $=c.undo();$&&(ke=!0,p.updateProject(x.value,$))}},redo:()=>{if(c.canRedo()){const $=c.redo();$&&(ke=!0,p.updateProject(x.value,$))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var S,D,m,_e;const $=(_e=(m=(D=(S=f.value)==null?void 0:S.slides)==null?void 0:D.find(qe=>qe.id===c.currentSlideId))==null?void 0:m.elements)==null?void 0:_e.find(qe=>qe.id===c.selectedElementId);$&&c.setClipboard($)},paste:()=>{if(c.clipboard&&c.currentSlideId){const $=c.clipboard;p.addElement(c.projectId,c.currentSlideId,$.type,{...$,x:$.x+20,y:$.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const $=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);$&&c.selectElement($.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:($,S)=>{var m,_e,qe,Le;if(!c.selectedElementId)return;const D=(Le=(qe=(_e=(m=f.value)==null?void 0:m.slides)==null?void 0:_e.find(we=>we.id===c.currentSlideId))==null?void 0:qe.elements)==null?void 0:Le.find(we=>we.id===c.selectedElementId);D&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:D.x+$,y:D.y+S})},selectAll:()=>{var S,D,m;(((m=(D=(S=f.value)==null?void 0:S.slides)==null?void 0:D.find(_e=>_e.id===c.currentSlideId))==null?void 0:m.elements)||[]).forEach((_e,qe)=>c.selectElement(_e.id,qe>0))}});function X(){d.push({name:"dashboard"})}function he(){d.push({name:"preview",params:{id:x.value},query:{from:"editor"}})}function ze($="deck"){ge.value=$,W.value=!0}function $e(){W.value=!1,be(ge.value)}function je($,S="Image"){if(!c.projectId||!c.currentSlideId||!$)return;const D=new Image;D.onload=()=>{const qe=Math.min(420/D.width,280/D.height,1),Le=Math.max(120,Math.round(D.width*qe)),we=Math.max(80,Math.round(D.height*qe)),Me=Math.max(24,Math.round((H.value.width-Le)/2)),st=Math.max(24,Math.round((H.value.height-we)/2)),ot=p.addElement(c.projectId,c.currentSlideId,"image",{x:Me,y:st,width:Le,height:we,content:{src:$,alt:S,objectFit:"cover"}});ot&&(c.selectElement(ot.id),c.setRightPanel("properties"),c.setActiveTool("select"))},D.src=$}function oe($){const[S]=Array.from($.target.files||[]);if(!S||!S.type.startsWith("image/"))return;const D=new FileReader;D.onload=()=>je(String(D.result||""),S.name),D.readAsDataURL(S),$.target.value=""}function fe(){var $;($=G.value)==null||$.click()}const ae=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function me($){if($==="text"){c.setActiveTool("text");return}if($==="blocks"){c.toggleSlidePanel("blocks");return}if($==="resources"){c.setActiveTool("image");return}if($==="interactive-elements"){c.setActiveTool("hotspot");return}if($==="interactive-questions"){c.setActiveTool("quiz");return}if($==="widgets"){c.setActiveTool("shape");return}if($==="insert"){fe();return}if($==="style"){c.setRightPanel("properties");return}if($==="background"){c.clearSelection(),c.setRightPanel("properties");return}$==="pages"&&c.toggleSlidePanel("slides")}function Te($){return $==="text"?["text","heading"].includes(c.activeTool):$==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":$==="resources"?c.activeTool==="image":$==="interactive-elements"?["hotspot","button"].includes(c.activeTool):$==="interactive-questions"?c.activeTool==="quiz":$==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):$==="insert"?!1:$==="style"||$==="background"?c.rightPanelTab==="properties":$==="pages"?c.showSlidePanel:!1}function re(){Bl({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return Je(()=>f.value,$=>{$&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{re()},100)},{immediate:!0}),($,S)=>f.value?(l(),i("div",Lb,[e("input",{ref_key:"imageInputRef",ref:G,type:"file",accept:"image/*",class:"sr-only",onChange:oe},null,544),e("header",jb,[e("div",_b,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:X,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...S[14]||(S[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),Z(" Dashboard ",-1)])]),e("div",Db,[e("input",{value:f.value.name,class:"project-name-input",onChange:S[0]||(S[0]=D=>I(p).updateProject(x.value,{name:D.target.value}))},null,40,qb)]),e("span",Rb,w(j.value),1)]),e("div",Ob,[I(c).currentSlideId?(l(),i("span",Fb," Slide "+w(le.value.findIndex(D=>D.id===I(c).currentSlideId)+1)+" of "+w(le.value.length),1)):q("",!0)]),e("div",Ub,[e("button",{class:"btn btn-ghost btn-sm",onClick:re,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...S[15]||(S[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),Z(" Help ",-1)])]),e("button",{class:Q(["btn btn-ghost btn-sm",I(c).showAIPanel&&"active-btn"]),onClick:S[1]||(S[1]=D=>{I(c).showAIPanel=!I(c).showAIPanel,I(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...S[16]||(S[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Z(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:S[2]||(S[2]=D=>{I(c).showThemeManager=!I(c).showThemeManager,I(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...S[17]||(S[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),Z(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:he,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...S[18]||(S[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),Z(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:S[3]||(S[3]=D=>I(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...S[19]||(S[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Export ",-1)])])])]),yt(bf,{onOpenAiProject:ze}),e("div",Vb,[e("aside",Wb,[(l(),i(ee,null,ue(ae,D=>e("button",{key:D.id,class:Q(["rail-option",Te(D.id)&&"active"]),onClick:m=>me(D.id),"data-tooltip":D.label,"data-tooltip-position":"right"},[D.id==="text"?(l(),i("span",Hb,"T")):D.id==="blocks"?(l(),i("span",Yb,[...S[20]||(S[20]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):D.id==="resources"?(l(),i("span",Jb,[...S[21]||(S[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):D.id==="interactive-elements"?(l(),i("span",Qb,[...S[22]||(S[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):D.id==="interactive-questions"?(l(),i("span",Xb,[...S[23]||(S[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):D.id==="widgets"?(l(),i("span",Kb,[...S[24]||(S[24]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):D.id==="insert"?(l(),i("span",Zb,[...S[25]||(S[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):D.id==="style"?(l(),i("span",ey,[...S[26]||(S[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):D.id==="background"?(l(),i("span",ty,[...S[27]||(S[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):D.id==="pages"?(l(),i("span",oy,[...S[28]||(S[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):q("",!0),Z(" "+w(D.label),1)],10,Gb)),64))]),yt(zt,{name:"side-panel-slide"},{default:ut(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="slides"?(l(),Ye(bi,{key:0})):q("",!0)]),_:1}),yt(zt,{name:"side-panel-slide"},{default:ut(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="blocks"?(l(),Ye(Wi,{key:0})):q("",!0)]),_:1}),yt(g1),e("aside",ny,[e("div",ly,[(l(),i(ee,null,ue([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],D=>e("button",{key:D.id,class:Q(["panel-tab",I(c).rightPanelTab===D.id&&"active"]),onClick:m=>I(c).setRightPanel(D.id),"data-tooltip":`Open ${D.label}`,"data-tooltip-position":"bottom"},[e("span",ay,w(D.icon),1),e("span",sy,w(D.label),1)],10,iy)),64))]),e("div",ry,[yt(zt,{name:"editor-panel-switch",mode:"out-in"},{default:ut(()=>[(l(),i("div",{key:_.value,class:"panel-content-view"},[I(c).rightPanelTab==="properties"?(l(),Ye(Dv,{key:0})):I(c).rightPanelTab==="layers"?(l(),Ye(pa,{key:1})):I(c).rightPanelTab==="ai"?(l(),Ye(zg,{key:2})):I(c).rightPanelTab==="theme"?(l(),Ye(cb,{key:3})):q("",!0)]))]),_:1})])])]),I(c).showExportModal?(l(),Ye(zb,{key:0})):q("",!0),W.value?(l(),Ye(Pl,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:S[4]||(S[4]=D=>W.value=!1),onConfirm:$e})):q("",!0),I(N)?(l(),Ye(Nl,{key:2,mode:I(a),topic:I(T),context:I(L),"project-name":I(Y),"slide-count":I(g),"question-count":I(F),difficulty:I(ie),"question-type":I(te),"project-name-placeholder":I(V),"primary-action-label":I(pe),"creation-error":I(xe),"is-submitting":I(R),"is-generating":I(B).isGenerating,"has-api-key":!!I(B).apiKey,onClose:S[5]||(S[5]=D=>N.value=!1),onCreate:I(ne),"onUpdate:mode":S[6]||(S[6]=D=>a.value=D),"onUpdate:topic":S[7]||(S[7]=D=>T.value=D),"onUpdate:context":S[8]||(S[8]=D=>L.value=D),"onUpdate:projectName":S[9]||(S[9]=D=>Y.value=D),"onUpdate:slideCount":S[10]||(S[10]=D=>g.value=D),"onUpdate:questionCount":S[11]||(S[11]=D=>F.value=D),"onUpdate:difficulty":S[12]||(S[12]=D=>ie.value=D),"onUpdate:questionType":S[13]||(S[13]=D=>te.value=D)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):q("",!0)])):(l(),i("div",dy,[S[29]||(S[29]=e("h2",null,"Project not found",-1)),S[30]||(S[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:X},"Go to Dashboard")]))}},yy=Qe(uy,[["__scopeId","data-v-902e6311"]]);export{yy as default};
