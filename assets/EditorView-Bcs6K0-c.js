import{O as Xt,R as xl,v as l,F as i,B as e,C as k,H as oe,I as ue,E as Le,D as Y,u as E,S as xe,Q as it,G as F,P as te,q as ot,U as wl,f as M,r as D,K as ve,M as $e,x as vt,L as _t,w as nt,n as kl,V as Al,y as pt,i as Ml,W as Pl,T as Dt,N as jt,z as Tl,p as Bl,J as yl}from"./vue-core-C16mQSCt.js";import{u as Nl,d as zl}from"./vue-ecosystem-2OskZsFi.js";import{u as st,M as Cl,c as Ll,a as jl,C as Dl,A as _l,b as ql}from"./ConfirmActionModal-CjYoi_95.js";import{u as rt,b as Rl,g as qt,C as Jt,c as Ol,n as Fl,p as Ul,s as Vl,m as Sl,f as $l,d as Il,e as Wl,h as Qt,B as Gl,i as Hl,j as Yl,k as hl,a as El}from"./projectStore-BEmN721x.js";import{_ as Ze}from"./index-CNcoJqps.js";import{P as Jl,S as Ql,C as Xl,a as Kl,M as Zl,_ as ei,b as ti,c as oi,F as ni,A as li,T as ii,d as ai}from"./ProgressElement-DkjJ-fRg.js";import{J as si}from"./jszip-529iNPX7.js";function ri(x){function d(s){var L,X,le,_,P,fe,$,A,a,z,q,ce,H,m,U,W,Ie;const c=s.ctrlKey||s.metaKey,p=s.key.toLowerCase(),b=s.target.tagName.toLowerCase(),y=b==="input"||b==="textarea"||s.target.isContentEditable;y&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!s.shiftKey?(s.preventDefault(),(L=x.undo)==null||L.call(x)):c&&(p==="y"||p==="z"&&s.shiftKey)?(s.preventDefault(),(X=x.redo)==null||X.call(x)):c&&p==="c"?(s.preventDefault(),(le=x.copy)==null||le.call(x)):c&&p==="v"?(s.preventDefault(),(_=x.paste)==null||_.call(x)):c&&p==="x"?(s.preventDefault(),(P=x.cut)==null||P.call(x)):c&&p==="d"?(s.preventDefault(),(fe=x.duplicate)==null||fe.call(x)):c&&p==="a"?(s.preventDefault(),($=x.selectAll)==null||$.call(x)):p==="delete"||p==="backspace"?y||(s.preventDefault(),(A=x.delete)==null||A.call(x)):p==="escape"?(a=x.escape)==null||a.call(x):c&&p==="g"?(s.preventDefault(),(z=x.toggleGrid)==null||z.call(x)):c&&p==="="||c&&p==="+"?(s.preventDefault(),(q=x.zoomIn)==null||q.call(x)):c&&p==="-"?(s.preventDefault(),(ce=x.zoomOut)==null||ce.call(x)):c&&p==="0"?(s.preventDefault(),(H=x.zoomReset)==null||H.call(x)):p==="arrowleft"?(m=x.nudge)==null||m.call(x,-1,0):p==="arrowright"?(U=x.nudge)==null||U.call(x,1,0):p==="arrowup"?(W=x.nudge)==null||W.call(x,0,-1):p==="arrowdown"&&((Ie=x.nudge)==null||Ie.call(x,0,1)))}Xt(()=>window.addEventListener("keydown",d)),xl(()=>window.removeEventListener("keydown",d))}const di={class:"slide-panel"},ui={class:"slide-panel-header"},ci={class:"slide-count"},pi={class:"slides-list"},vi=["onClick","onContextmenu","onDragstart","onDrop"],fi={class:"slide-number"},mi=["viewBox"],gi=["x","y","width","height","fill"],bi=["d","stroke"],yi=["d","fill"],hi={class:"slide-footer"},xi={class:"slide-title"},wi=["onClick"],ki={__name:"SlidePanel",setup(x){const d=st(),s=rt(),c=M(()=>s.getProject(d.projectId)),p=M(()=>qt(c.value)),b=M(()=>{var V,Z;return((Z=(V=c.value)==null?void 0:V.slides)==null?void 0:Z.slice().sort((ne,me)=>ne.order-me.order))||[]}),y=D({show:!1,x:0,y:0,slideId:null});function L(V){d.setCurrentSlide(V)}function X(){const V=b.value.findIndex(ne=>ne.id===d.currentSlideId),Z=s.addSlide(d.projectId,V);Z&&d.setCurrentSlide(Z.id)}function le(V){var me,ae;const Z=b.value.findIndex(Ee=>Ee.id===V);s.deleteSlide(d.projectId,V);const ne=((me=c.value)==null?void 0:me.slides)||[];if(ne.length>0){const Ee=ne.slice().sort((j,O)=>j.order-O.order),C=Math.min(Z,Ee.length-1);d.setCurrentSlide((ae=Ee[C])==null?void 0:ae.id)}}function _(V,Z){V.preventDefault(),y.value={show:!0,x:V.clientX,y:V.clientY,slideId:Z},setTimeout(()=>window.addEventListener("click",P,{once:!0}),0)}function P(){y.value.show=!1}function fe(){const V=s.duplicateSlide(d.projectId,y.value.slideId);V&&d.setCurrentSlide(V.id),P()}function $(){le(y.value.slideId),P()}function A(V,Z){V.stopPropagation(),le(Z)}function a(){const V=b.value.findIndex(Z=>Z.id===y.value.slideId);V>0&&s.reorderSlides(d.projectId,V,V-1),P()}function z(){const V=b.value.findIndex(Z=>Z.id===y.value.slideId);V<b.value.length-1&&s.reorderSlides(d.projectId,V,V+1),P()}let q=-1;function ce(V,Z){q=Z,V.dataTransfer.effectAllowed="move"}function H(V,Z){V.preventDefault(),q!==-1&&q!==Z&&s.reorderSlides(d.projectId,q,Z),q=-1}function m(V){return V.backgroundType==="gradient"&&V.backgroundGradient?{background:V.backgroundGradient}:V.backgroundType==="image"&&V.backgroundImage?{backgroundImage:`url(${V.backgroundImage})`,backgroundSize:"cover"}:{background:V.background||"#fff"}}function U(V){return{left:V.x/p.value.width*100+"%",top:V.y/p.value.height*100+"%",width:V.width/p.value.width*100+"%",height:V.height/p.value.height*100+"%"}}function W(V){var Z,ne;return{background:V.type==="shape"?(Z=V.content)==null?void 0:Z.fillColor:V.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:V.type==="shape"&&((ne=V.content)==null?void 0:ne.shapeType)==="circle"?"50%":void 0}}function Ie(V){var Z;return Rl(V.content||{},V.width||420,V.height||280,((Z=c.value)==null?void 0:Z.theme)||{})}return(V,Z)=>(l(),i("div",di,[e("div",ui,[Z[2]||(Z[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",ci,k(b.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:X,"data-tooltip":"Add slide","aria-label":"Add slide"},[...Z[1]||(Z[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",pi,[(l(!0),i(oe,null,ue(b.value,(ne,me)=>(l(),i("div",{key:ne.id,class:Y(["slide-thumb-item",E(d).currentSlideId===ne.id&&"active"]),draggable:"true",onClick:ae=>L(ne.id),onContextmenu:ae=>_(ae,ne.id),onDragstart:ae=>ce(ae,me),onDragover:Z[0]||(Z[0]=Le(()=>{},["prevent"])),onDrop:ae=>H(ae,me)},[e("div",fi,k(me+1),1),e("div",{class:"slide-thumb",style:xe(m(ne))},[(l(!0),i(oe,null,ue(ne.elements.slice(0,6),ae=>{var Ee;return l(),i("div",{key:ae.id,class:"mini-element-frame",style:xe(U(ae))},[ae.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${ae.width||420} ${ae.height||280}`,preserveAspectRatio:"none"},[Ie(ae).type==="bar"?(l(!0),i(oe,{key:0},ue(Ie(ae).cartesian.bars,C=>(l(),i("rect",{key:`mini-bar-${C.id}`,x:C.x,y:C.y,width:C.width,height:C.height,fill:C.color,rx:"6"},null,8,gi))),128)):Ie(ae).type==="line"?(l(),i("path",{key:1,d:Ie(ae).cartesian.linePath,stroke:((Ee=Ie(ae).cartesian.points[0])==null?void 0:Ee.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,bi)):(l(!0),i(oe,{key:2},ue(Ie(ae).circle.slices,C=>(l(),i("path",{key:`mini-slice-${C.id}`,d:C.path,fill:C.color},null,8,yi))),128))],8,mi)):(l(),i("div",{key:1,class:"mini-element",style:xe(W(ae))},null,4))],4)}),128))],4),e("div",hi,[e("div",xi,k(ne.title||`Slide ${me+1}`),1),b.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:ae=>A(ae,ne.id)},[...Z[3]||(Z[3]=[it('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,wi)):F("",!0)])],42,vi))),128))]),e("button",{class:"add-slide-bottom",onClick:X},[...Z[4]||(Z[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),te(" Add Slide ",-1)])]),(l(),ot(wl,{to:"body"},[y.value.show?(l(),i("div",{key:0,class:"context-menu",style:xe({left:y.value.x+"px",top:y.value.y+"px"})},[e("button",{class:"ctx-item",onClick:fe},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:z},"Move Down"),Z[5]||(Z[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:$},"Delete Slide")],4)):F("",!0)]))]))}},Ci=Ze(ki,[["__scopeId","data-v-30eea542"]]),Si={class:"blocks-panel"},$i={class:"blocks-panel-header"},Ii={class:"blocks-toolbar"},Ei={class:"blocks-categories"},Ai=["onClick"],Mi={class:"blocks-panel-body"},Pi={class:"blocks-save-card"},Ti=["disabled"],Bi={class:"blocks-list"},Ni=["onDragstart"],zi={class:"block-thumb-stage"},Li={class:"block-card-body"},ji={class:"block-card-head"},Di={class:"block-name"},_i={class:"block-meta"},qi={key:0},Ri={key:1},Oi=["onClick"],Fi={class:"block-description"},Ui={key:0,class:"block-binding-note"},Vi={class:"block-tags"},Wi=["onClick"],Gi={class:"binding-modal-body"},Hi={class:"binding-modal-intro"},Yi=["for"],Ji=["id","onUpdate:modelValue"],Qi={__name:"BlocksPanel",setup(x){const d=st(),s=rt(),c=D(""),p=D("all"),b=D(""),y=D("Custom"),L=D(!1),X=D(null),le=D({}),_=M(()=>s.getProject(d.projectId)),P=M(()=>{var C,j;return(j=(C=_.value)==null?void 0:C.slides)==null?void 0:j.find(O=>O.id===d.currentSlideId)}),fe=M(()=>s.getContentBlocks(d.projectId)),$=M(()=>{const C=new Set(["all"]);return fe.value.forEach(j=>C.add(j.category||"Custom")),Array.from(C)}),A=M(()=>{var j;const C=new Set(d.selectedElementIds);return(((j=P.value)==null?void 0:j.elements)||[]).filter(O=>C.has(O.id))}),a=M(()=>{var C;return Array.isArray((C=X.value)==null?void 0:C.bindings)?X.value.bindings:[]}),z=M(()=>{const C=c.value.trim().toLowerCase();return fe.value.filter(j=>p.value==="all"||(j.category||"Custom")===p.value?C?[j.name,j.description,j.category,...j.tags||[]].join(" ").toLowerCase().includes(C):!0:!1)});function q(C){const j=Array.isArray(C==null?void 0:C.elements)?C.elements:[];if(!j.length)return{minX:0,minY:0,width:1,height:1};const O=Math.min(...j.map(Te=>Number(Te.x||0))),K=Math.min(...j.map(Te=>Number(Te.y||0))),ye=Math.max(...j.map(Te=>Number(Te.x||0)+Number(Te.width||0))),Re=Math.max(...j.map(Te=>Number(Te.y||0)+Number(Te.height||0)));return{minX:O,minY:K,width:Math.max(1,ye-O),height:Math.max(1,Re-K)}}function ce(C,j){const O=q(C);return{left:`${(Number(j.x||0)-O.minX)/O.width*100}%`,top:`${(Number(j.y||0)-O.minY)/O.height*100}%`,width:`${Number(j.width||0)/O.width*100}%`,height:`${Number(j.height||0)/O.height*100}%`}}function H(C){var j,O,K,ye,Re,Te,Oe;return C.type==="shape"?{background:((j=C.content)==null?void 0:j.fillColor)||"#cbd5e1",borderRadius:((O=C.content)==null?void 0:O.shapeType)==="circle"?"50%":`${Number(((K=C.content)==null?void 0:K.borderRadius)||10)}px`,border:`${Math.max(0,Number(((ye=C.content)==null?void 0:ye.borderWidth)||0))}px solid ${((Re=C.content)==null?void 0:Re.borderColor)||"transparent"}`}:C.type==="button"?{background:((Te=C.content)==null?void 0:Te.bgColor)||"#6c47ff",borderRadius:`${Number(((Oe=C.content)==null?void 0:Oe.borderRadius)||10)}px`}:C.type==="image"||C.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:C.type==="text"||C.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function m(C,j){const O=C.type==="heading"?2:3,K=Math.max(18,100/(O+1.25));return{width:`${j===O-1?72:100}%`,height:`${C.type==="heading"?K:K-2}%`}}function U(C){C.length&&(d.setSelection(C.map(j=>j.id)),d.focusPropertiesSection("content"),d.setActiveTool("select"))}function W(C){return Array.isArray(C==null?void 0:C.bindings)&&C.bindings.length>0}function Ie(){L.value=!1,X.value=null,le.value={}}function V(C,j=null){const O=s.insertContentBlock(d.projectId,d.currentSlideId,C.id,j?{bindingValues:j}:{});U(O)}function Z(C){if(!W(C)){V(C);return}X.value=C,le.value=Object.fromEntries(C.bindings.map(j=>[j.id,j.defaultValue||""])),L.value=!0}function ne(){X.value&&(V(X.value,{...le.value}),Ie())}function me(){var O,K;const C=b.value.trim();if(!C||!A.value.length)return;s.saveSelectionAsContentBlock(d.projectId,d.currentSlideId,A.value.map(ye=>ye.id),{name:C,category:y.value.trim()||"Custom",accent:((K=(O=_.value)==null?void 0:O.theme)==null?void 0:K.primaryColor)||"#6c47ff"})&&(b.value="",p.value="Custom")}function ae(C){s.deleteContentBlock(d.projectId,C)}function Ee(C,j){C.dataTransfer&&(C.dataTransfer.effectAllowed="copy",C.dataTransfer.setData(Jt,JSON.stringify({id:j.id})),C.dataTransfer.setData("text/plain",j.name))}return(C,j)=>(l(),i("div",Si,[e("div",$i,[j[5]||(j[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:j[0]||(j[0]=O=>E(d).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...j[4]||(j[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",Ii,[ve(e("input",{"onUpdate:modelValue":j[1]||(j[1]=O=>c.value=O),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[$e,c.value]]),e("div",Ei,[(l(!0),i(oe,null,ue($.value,O=>(l(),i("button",{key:O,type:"button",class:Y(["blocks-category-chip",p.value===O&&"active"]),onClick:K=>p.value=O},k(O==="all"?"All":O),11,Ai))),128))])]),e("div",Mi,[e("div",Pi,[j[6]||(j[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),j[7]||(j[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),ve(e("input",{"onUpdate:modelValue":j[2]||(j[2]=O=>b.value=O),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[$e,b.value]]),ve(e("input",{"onUpdate:modelValue":j[3]||(j[3]=O=>y.value=O),class:"input",placeholder:"Category"},null,512),[[$e,y.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!A.value.length||!b.value.trim(),onClick:me}," Save "+k(A.value.length?`${A.value.length} item${A.value.length>1?"s":""}`:"selection")+" as block ",9,Ti)]),e("div",Bi,[(l(!0),i(oe,null,ue(z.value,O=>(l(),i("div",{key:O.id,class:"block-card",draggable:"true",onDragstart:K=>Ee(K,O)},[e("div",{class:"block-thumb",style:xe({"--block-accent":O.accent||"#6c47ff"})},[e("div",zi,[(l(!0),i(oe,null,ue(O.elements,K=>(l(),i("div",{key:`${O.id}-${K.type}-${K.x}-${K.y}`,class:"block-thumb-frame",style:xe(ce(O,K))},[["text","heading"].includes(K.type)?(l(),i("div",{key:0,class:Y(["thumb-text",K.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(oe,null,ue(K.type==="heading"?2:3,ye=>(l(),i("span",{key:`${O.id}-${K.type}-${K.x}-${K.y}-${ye}`,class:"thumb-text-line",style:xe(m(K,ye-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:xe(H(K))},null,4))],4))),128))])],4),e("div",Li,[e("div",ji,[e("div",null,[e("div",Di,k(O.name),1),e("div",_i,[te(k(O.category),1),O.scope==="custom"?(l(),i("span",qi," · Custom")):F("",!0),W(O)?(l(),i("span",Ri," · "+k(O.bindings.length)+" field"+k(O.bindings.length>1?"s":""),1)):F("",!0)])]),O.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:K=>ae(O.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...j[8]||(j[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,Oi)):F("",!0)]),e("p",Fi,k(O.description||"Reusable layout block"),1),W(O)?(l(),i("div",Ui,"Editable placeholders included")):F("",!0),e("div",Vi,[(l(!0),i(oe,null,ue(O.tags||[],K=>(l(),i("span",{key:`${O.id}-${K}`,class:"block-tag"},"#"+k(K),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:K=>Z(O)},k(W(O)?"Insert with Fields":"Insert Block"),9,Wi)])],40,Ni))),128))])]),L.value?(l(),ot(Cl,{key:0,title:"Fill Template Fields",size:"md",onClose:Ie},{footer:vt(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:Ie},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:ne},"Insert Block")]),default:vt(()=>{var O;return[e("div",Gi,[e("p",Hi,[j[9]||(j[9]=te(" Customize the placeholder text before inserting ",-1)),e("strong",null,k((O=X.value)==null?void 0:O.name),1),j[10]||(j[10]=te(". ",-1))]),(l(!0),i(oe,null,ue(a.value,K=>(l(),i("div",{key:K.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${K.id}`},k(K.label),9,Yi),ve(e("textarea",{id:`binding-${K.id}`,"onUpdate:modelValue":ye=>le.value[K.id]=ye,class:"textarea binding-input"},null,8,Ji),[[$e,le.value[K.id]]])]))),128))])]}),_:1})):F("",!0)]))}},Xi=Ze(Qi,[["__scopeId","data-v-aec67d0c"]]),Ki={class:"layer-panel"},Zi={class:"layer-header panel-section"},ea={class:"panel-title",style:{"margin-bottom":"0"}},ta={class:"layer-count"},oa={key:0,class:"layers-empty"},na={key:1,class:"layers-list"},la=["onClick"],ia={class:"layer-type-icon"},aa={class:"layer-name"},sa={class:"layer-actions"},ra=["onClick","data-tooltip"],da={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ua={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ca=["onClick","data-tooltip"],pa={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},va={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},fa=["onClick"],ma=["onClick"],ga=["onClick"],ba={__name:"LayerPanel",setup(x){const d=st(),s=rt(),c=M(()=>s.getProject(d.projectId)),p=M(()=>{var A,a;return(a=(A=c.value)==null?void 0:A.slides)==null?void 0:a.find(z=>z.id===d.currentSlideId)}),b=M(()=>{var A;return[...((A=p.value)==null?void 0:A.elements)||[]].sort((a,z)=>(z.zIndex||0)-(a.zIndex||0))});function y(A){d.selectElement(A)}function L(A){s.updateElement(d.projectId,d.currentSlideId,A.id,{visible:!A.visible})}function X(A){s.updateElement(d.projectId,d.currentSlideId,A.id,{locked:!A.locked})}function le(A){s.reorderElement(d.projectId,d.currentSlideId,A,"up")}function _(A){s.reorderElement(d.projectId,d.currentSlideId,A,"down")}function P(A){s.deleteElement(d.projectId,d.currentSlideId,A),d.selectedElementId===A&&d.clearSelection()}function fe(A){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[A]||"◆"}function $(A){var a,z,q;return(a=A.content)!=null&&a.text?A.content.text.slice(0,24):(z=A.content)!=null&&z.label?A.content.label:(q=A.content)!=null&&q.question?A.content.question.slice(0,24):A.type.charAt(0).toUpperCase()+A.type.slice(1)}return(A,a)=>(l(),i("div",Ki,[e("div",Zi,[e("div",ea,[a[0]||(a[0]=te(" Layers ",-1)),e("span",ta,k(b.value.length),1)])]),b.value.length===0?(l(),i("div",oa,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",na,[(l(!0),i(oe,null,ue(b.value,z=>(l(),i("div",{key:z.id,class:Y(["layer-item",E(d).selectedElementIds.includes(z.id)&&"selected",z.locked&&"locked",!z.visible&&"hidden"]),onClick:q=>y(z.id)},[e("span",ia,k(fe(z.type)),1),e("span",aa,k($(z)),1),e("div",sa,[e("button",{class:Y(["layer-action-btn",{active:z.visible}]),onClick:Le(q=>L(z),["stop"]),"data-tooltip":z.visible?"Hide":"Show"},[z.visible?(l(),i("svg",da,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",ua,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,ra),e("button",{class:Y(["layer-action-btn",{active:z.locked}]),onClick:Le(q=>X(z),["stop"]),"data-tooltip":z.locked?"Unlock":"Lock"},[z.locked?(l(),i("svg",pa,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",va,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,ca),e("button",{class:"layer-action-btn",onClick:Le(q=>le(z.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,fa),e("button",{class:"layer-action-btn",onClick:Le(q=>_(z.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,ma),e("button",{class:"layer-action-btn danger",onClick:Le(q=>P(z.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,ga)])],10,la))),128))]))]))}},ya=Ze(ba,[["__scopeId","data-v-7407acd8"]]),ha={class:"panel-section"},xa={class:"preset-toolbar"},wa=["value"],ka=["value"],Ca=["value"],Sa={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},$a=["onClick"],Ia={class:"preset-meta-chip muted"},Ea={key:1,class:"import-review"},Aa={class:"motion-scrubber-header"},Ma={class:"preset-toolbar compact"},Pa=["value"],Ta=["value"],Ba={class:"import-list"},Na=["onUpdate:modelValue"],za={class:"import-item-title"},La={class:"preset-meta-chip"},ja={key:0,class:"preset-meta-chip muted"},Da={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(x,{emit:d}){const s=d;return(c,p)=>(l(),i("div",ha,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",xa,[e("input",{value:x.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=b=>s("update:searchQuery",b.target.value))},null,40,wa),e("select",{value:x.categoryFilter,class:"select",onChange:p[1]||(p[1]=b=>s("update:categoryFilter",b.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(oe,null,ue(x.availableCategories,b=>(l(),i("option",{key:`library-${b}`,value:b},k(b),9,Ca))),128))],40,ka),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=b=>s("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=b=>s("export-presets"))},"Export")]),x.recentPresets.length?(l(),i("div",Sa,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(oe,null,ue(x.recentPresets,b=>(l(),i("div",{class:"preset-item",key:`recent-${b.id}`},[e("button",{type:"button",class:"preset-chip",onClick:y=>s("apply-preset",b)},k(b.name),9,$a),e("span",Ia,"Used "+k(b.usageCount)+"x",1)]))),128))])):F("",!0),x.pendingImportedPresets.length?(l(),i("div",Ea,[e("div",Aa,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=b=>s("clear-imports"))},"Discard")]),e("div",Ma,[e("select",{value:x.importScopeFilter,class:"select",onChange:p[5]||(p[5]=b=>s("update:importScopeFilter",b.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Pa),e("select",{value:x.importConflictMode,class:"select",onChange:p[6]||(p[6]=b=>s("update:importConflictMode",b.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Ta),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=b=>s("apply-imports"))},"Merge Selected")]),e("div",Ba,[(l(!0),i(oe,null,ue(x.filteredPendingImports,b=>(l(),i("label",{key:`pending-${b.id}`,class:"import-item"},[ve(e("input",{"onUpdate:modelValue":y=>b.selected=y,type:"checkbox"},null,8,Na),[[_t,b.selected]]),e("span",za,k(b.name),1),e("span",La,k(b.scope),1),b.category?(l(),i("span",ja,k(b.category),1)):F("",!0)]))),128))])])):F("",!0)]))}},_a=Ze(Da,[["__scopeId","data-v-61f99273"]]),qa={class:"panel-section"},Ra={style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"12px"}},Oa={style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"12px"}},Fa={key:0,style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"16px"}},Ua={class:"panel-section"},Va={class:"field-hint"},Wa={class:"motion-scrubber-shell"},Ga={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Ha=["onClick"],Ya={class:"motion-preview"},Ja={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Qa={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Xa={class:"motion-card-label"},Ka={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Za={class:"form-group"},es={class:"form-group"},ts={class:"form-group",style:{"margin-top":"var(--space-3)"}},os={class:"preset-row",style:{"margin-top":"var(--space-3)"}},ns={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},ls={key:0,class:"preset-list"},is=["onDragstart","onDragenter","onDrop"],as=["onClick"],ss={key:0,class:"preset-meta-chip"},rs=["onClick"],ds=["onClick"],us=["onClick"],cs={key:1,class:"preset-row preset-edit-row"},ps=["onClick"],vs={key:1,class:"field-hint"},fs={key:2,class:"panel-section"},ms={class:"slide-settings-tabs"},gs={key:0,class:"slide-settings-pane"},bs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ys={class:"form-group"},hs={class:"bg-type-tabs"},xs=["onClick"],ws={key:0,class:"color-row"},ks=["value"],Cs=["value"],Ss={class:"slide-settings-subsection"},$s={class:"canvas-size-grid"},Is=["onClick"],Es={class:"canvas-size-icon-shell"},As={class:"canvas-size-name"},Ms={class:"canvas-size-ratio"},Ps={class:"canvas-custom-card"},Ts={class:"canvas-custom-header"},Bs={class:"field-hint"},Ns={class:"canvas-custom-inputs"},zs={class:"form-group"},Ls={class:"canvas-size-input-wrap"},js=["value"],Ds={class:"form-group"},_s={class:"canvas-size-input-wrap"},qs=["value"],Rs={class:"check-row canvas-size-lock"},Os={class:"slide-settings-subsection"},Fs={key:1,class:"slide-settings-pane"},Us=["value"],Vs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ws=["value"],Gs={class:"check-row"},Hs=["checked"],Ys={key:2,class:"slide-settings-pane"},Js={class:"check-row"},Qs=["checked"],Xs={class:"check-row"},Ks=["checked"],Zs={class:"check-row"},er=["checked"],tr={class:"check-row"},or=["checked"],nr={class:"check-row"},lr=["checked"],ir={class:"panel-title"},ar={class:"element-type-badge"},sr={class:"geo-grid"},rr={class:"form-group"},dr=["value"],ur={class:"form-group"},cr=["value"],pr={class:"form-group"},vr=["value"],fr={class:"form-group"},mr=["value"],gr={class:"form-group"},br=["value"],yr={class:"form-group"},hr=["value"],xr={class:"motion-scrubber-shell"},wr={class:"motion-card-grid"},kr=["onClick"],Cr={class:"motion-preview"},Sr={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},$r={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Ir={class:"motion-card-label"},Er={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Ar={class:"form-group"},Mr=["value"],Pr={class:"form-group"},Tr=["value"],Br={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Nr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},zr={key:0,class:"preset-list"},Lr=["onDragstart","onDragenter","onDrop"],jr=["onClick"],Dr={key:0,class:"preset-meta-chip"},_r=["onClick"],qr=["onClick"],Rr=["onClick"],Or={key:1,class:"preset-row preset-edit-row"},Fr=["onClick"],Ur={key:1,class:"field-hint"},Vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wr=["value"],Gr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Hr={class:"form-group"},Yr=["value"],Jr={class:"form-group"},Qr=["value"],Xr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Kr=["value"],Zr=["value"],ed={class:"form-group",style:{"margin-top":"var(--space-3)"}},td={class:"align-btns"},od=["onClick"],nd={class:"form-group",style:{"margin-top":"var(--space-3)"}},ld={class:"style-btns"},id={class:"form-group",style:{"margin-top":"var(--space-3)"}},ad={class:"color-row"},sd=["value"],rd=["value"],dd={class:"form-group",style:{"margin-top":"var(--space-3)"}},ud=["value"],cd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},pd={class:"form-group"},vd=["value"],fd={class:"form-group"},md=["value"],gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},bd=["value"],yd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hd=["value"],xd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wd=["value"],kd={class:"form-group"},Cd=["value"],Sd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},$d={class:"form-group"},Id=["value"],Ed={class:"form-group"},Ad=["value"],Md={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pd=["value"],Td={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Bd={class:"color-row"},Nd=["value"],zd=["value"],Ld={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jd={class:"color-row"},Dd=["value"],_d=["value"],qd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rd=["value"],Od={class:"form-group"},Fd=["value"],Ud={class:"form-group",style:{"margin-top":"var(--space-3)"}},Vd=["value"],Wd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gd=["value"],Hd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Yd=["value"],Jd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qd=["value"],Xd={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Kd={class:"chart-data-actions"},Zd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},eu=["value","placeholder"],tu={class:"chart-palette-preview"},ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},nu={class:"form-group"},lu=["value"],iu={class:"form-group"},au=["value"],su={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},ru={class:"form-group"},du=["value"],uu={class:"form-group"},cu=["value"],pu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},vu={class:"form-group"},fu=["value"],mu={key:0,class:"form-group"},gu=["value"],bu={key:1,class:"form-group"},yu=["value"],hu={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},xu={class:"form-group"},wu=["value"],ku={class:"check-row",style:{"margin-top":"20px"}},Cu=["checked"],Su={class:"check-row"},$u=["checked"],Iu={key:1,class:"check-row"},Eu=["checked"],Au={class:"check-row"},Mu=["checked"],Pu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tu=["value"],Bu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Nu=["value"],zu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Lu=["value"],ju={key:0,class:"form-group"},Du=["value"],_u={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},qu={class:"form-group"},Ru=["value"],Ou={class:"form-group"},Fu=["value"],Uu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Vu={class:"form-group"},Wu=["value"],Gu={class:"form-group"},Hu=["value"],Yu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ju={class:"form-group"},Qu=["value"],Xu={class:"form-group"},Ku=["value"],Zu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ec={class:"form-group"},tc=["value"],oc=["value"],nc={class:"form-group"},lc=["value"],ic={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ac=["value"],sc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rc={class:"color-row"},dc=["value"],uc=["value"],cc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},pc={class:"form-group"},vc=["value"],fc={class:"form-group"},mc=["value"],gc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},bc=["value"],yc={class:"form-group"},hc=["value"],xc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},wc={class:"form-group"},kc=["value"],Cc={class:"form-group"},Sc=["value"],$c={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ic=["value"],Ec={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ac=["value"],Mc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pc=["value"],Tc={class:"check-row"},Bc=["checked"],Nc={class:"check-row"},zc=["checked"],Lc={class:"check-row"},jc=["checked"],Dc={class:"check-row"},_c=["checked"],qc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rc=["value"],Oc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fc=["value"],Uc={class:"check-row"},Vc=["checked"],Wc={class:"check-row"},Gc=["checked"],Hc={class:"check-row"},Yc=["checked"],Jc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Qc={class:"form-group"},Xc=["value"],Kc={class:"form-group"},Zc=["value"],ep={class:"form-group",style:{"margin-top":"var(--space-3)"}},tp=["value"],op={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},np=["value"],lp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ip=["value"],ap={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},sp=["value"],rp={class:"form-group"},dp=["value"],up={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},cp={class:"form-group"},pp=["value"],vp={class:"form-group"},fp=["value"],mp={class:"form-group",style:{"margin-top":"var(--space-3)"}},gp=["value"],bp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},yp=["value"],hp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},xp={class:"form-group"},wp=["value"],kp={class:"form-group"},Cp=["value"],Sp={class:"form-group"},$p=["value"],Ip={class:"form-group"},Ep=["value"],Ap={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mp=["value"],Pp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Tp={class:"form-group"},Bp=["value"],Np={class:"form-group"},zp=["value"],Lp={class:"form-group"},jp=["value"],Dp={class:"form-group"},_p=["value"],qp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rp=["value"],Op={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fp=["value"],Up={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Vp=["value"],Wp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gp=["value"],Hp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Yp=["value"],Jp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Qp={class:"form-group"},Xp=["value"],Kp={class:"form-group"},Zp=["value"],ev={class:"form-group"},tv=["value"],ov={class:"form-group"},nv=["value"],lv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},iv=["value"],av={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},sv={class:"form-group"},rv=["value"],dv={class:"form-group"},uv=["value"],cv={class:"form-group"},pv=["value"],vv={class:"form-group"},fv=["value"],mv={class:"form-group"},gv=["value"],bv={class:"form-group",style:{"margin-top":"var(--space-3)"}},yv=["value"],hv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},xv={class:"form-group"},wv=["value"],kv={class:"form-group"},Cv=["value"],Sv={class:"form-group",style:{"margin-top":"var(--space-3)"}},$v=["value"],Iv={class:"form-group"},Ev=["value"],Av={class:"form-group"},Mv=["value"],Pv={class:"form-group"},Tv=["value"],Bv={class:"form-group",style:{"margin-top":"var(--space-3)"}},Nv={style:{display:"flex","align-items":"center",gap:"8px"}},zv=["checked"],Lv={class:"form-group"},jv=["value"],Dv={class:"form-group"},_v=["value"],qv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Rv={class:"form-group"},Ov=["value"],Fv={class:"form-group"},Uv=["value"],Vv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Wv={class:"form-group"},Gv=["value"],Hv={class:"panel-section"},Yv={class:"actions-list"},Jv={__name:"PropertiesPanel",setup(x){const d=st(),s=rt(),c=M(()=>s.getProject(d.projectId)),p=M(()=>{var u,t;return(t=(u=c.value)==null?void 0:u.slides)==null?void 0:t.find(B=>B.id===d.currentSlideId)}),b=M(()=>{var u;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((u=c.value)==null?void 0:u.settings)||{}}}),y=M(()=>qt(b.value)),L=M(()=>Sl(b.value)),X=M(()=>$l(y.value.width,y.value.height)),le=D(!0),_=D("canvas"),P=M(()=>Array.isArray(b.value.motionPresets)?b.value.motionPresets:[]),fe=M(()=>P.value.filter(u=>u.scope!=="group")),$=M(()=>P.value.filter(u=>u.scope==="group")),A=M(()=>{var t;const u=new Set(d.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(B=>u.has(B.id))}),a=M(()=>{var u,t;return d.selectedElementId?(t=(u=p.value)==null?void 0:u.elements)==null?void 0:t.find(B=>B.id===d.selectedElementId):null}),z=M(()=>d.multiSelection||!!a.value),q=M(()=>d.multiSelection?"group":"single"),ce=M(()=>{var t,B;const u=(B=(t=a.value)==null?void 0:t.animations)==null?void 0:B[0];return{type:(u==null?void 0:u.type)||"auto",delay:Number((u==null?void 0:u.delay)||0),duration:Number((u==null?void 0:u.duration)||.64)}}),H=M(()=>{var Be,De;const u=A.value.map(ze=>{var Se;return((Se=ze.animations)==null?void 0:Se[0])||null}),t=((Be=u[0])==null?void 0:Be.type)||"auto",B=Number(((De=u[0])==null?void 0:De.duration)||.64),se=u.every(ze=>((ze==null?void 0:ze.type)||"auto")===t),Ce=u.every(ze=>Number((ze==null?void 0:ze.duration)||.64)===B);return{type:se?t:"mixed",duration:Ce?B:.64}}),m=D(0),U=D(0),W=D(""),Ie=D(""),V=D(""),Z=D(""),ne=D(""),me=D(""),ae=D(""),Ee=D(""),C=D(""),j=D(""),O=D(""),K=D(""),ye=D(""),Re=D("all"),Te=D(null),Oe=D(null),ie=D([]),ge=D("all"),we=D("replace"),pe=D(""),be=D(null),re=D("");let N=null;const S=D({});nt(a,u=>{u?S.value=JSON.parse(JSON.stringify(u)):S.value={},(u==null?void 0:u.type)==="chart"&&(pe.value="")},{immediate:!0,deep:!0}),nt(()=>{var u;return[d.propertiesPanelSection,(u=a.value)==null?void 0:u.id,d.rightPanelTab]},async([u,t,B])=>{var Ce;if(!u||!t||B!=="properties")return;await kl();const se=(Ce=be.value)==null?void 0:Ce.querySelector(`[data-props-anchor="${u}"]`);se&&(se.scrollIntoView({behavior:"smooth",block:"start"}),re.value=u,N&&window.clearTimeout(N),N=window.setTimeout(()=>{re.value===u&&(re.value="")},1400))},{immediate:!0});function R(){if(!A.value.length)return;const u=window.prompt("Enter block name","Custom Block");u&&(s.saveSelectionAsContentBlock(d.projectId,d.currentSlideId,d.selectedElementIds,{name:u}),d.openLeftPanel("blocks"))}function ke(u){const t=A.value;if(t.length<2)return;let B=1/0,se=1/0,Ce=-1/0,Be=-1/0;t.forEach(Se=>{const qe=Se.width||100,Ke=Se.height||100;Se.x<B&&(B=Se.x),Se.y<se&&(se=Se.y),Se.x+qe>Ce&&(Ce=Se.x+qe),Se.y+Ke>Be&&(Be=Se.y+Ke)});let De=B+(Ce-B)/2,ze=se+(Be-se)/2;t.forEach(Se=>{let qe={};const Ke=Se.width||100,wt=Se.height||100;u==="left"&&(qe.x=B),u==="center"&&(qe.x=De-Ke/2),u==="right"&&(qe.x=Ce-Ke),u==="top"&&(qe.y=se),u==="middle"&&(qe.y=ze-wt/2),u==="bottom"&&(qe.y=Be-wt),s.updateElement(d.projectId,d.currentSlideId,Se.id,qe)})}function Ge(u){const t=[...A.value];if(!(t.length<3))if(u==="horizontal"){t.sort((Se,qe)=>Se.x-qe.x);const B=t[0],se=t[t.length-1],Ce=t.reduce((Se,qe)=>Se+(qe.width||100),0),De=(se.x+(se.width||100)-B.x-Ce)/(t.length-1);let ze=B.x+(B.width||100)+De;for(let Se=1;Se<t.length-1;Se++)s.updateElement(d.projectId,d.currentSlideId,t[Se].id,{x:ze}),ze+=(t[Se].width||100)+De}else{t.sort((Se,qe)=>Se.y-qe.y);const B=t[0],se=t[t.length-1],Ce=t.reduce((Se,qe)=>Se+(qe.height||100),0),De=(se.y+(se.height||100)-B.y-Ce)/(t.length-1);let ze=B.y+(B.height||100)+De;for(let Se=1;Se<t.length-1;Se++)s.updateElement(d.projectId,d.currentSlideId,t[Se].id,{y:ze}),ze+=(t[Se].height||100)+De}}function He(u){a.value&&s.updateElement(d.projectId,d.currentSlideId,a.value.id,u)}function h(u){if(!a.value)return;const t={...a.value.content,...u};He({content:t})}function Ae(u,t){try{return JSON.parse(u)}catch{return t}}function Fe(u,t){const B=parseFloat(t);isNaN(B)||He({[u]:B})}const Ue=D({});nt(p,u=>{u&&(Ue.value={...u})},{immediate:!0});function Qe(u){p.value&&s.updateSlide(d.projectId,p.value.id,u)}function Ye(u){if(!c.value)return;const t={...b.value,...u};s.updateProject(d.projectId,{settings:{...t,...Fl(t)}})}function Mt(u){Ye({slideWidth:u.width,slideHeight:u.height})}function ct(u,t){const B=Math.round(Number(t)||0);if(!B)return;const se={[`slide${u==="width"?"Width":"Height"}`]:B};if(le.value){const Ce=y.value.width,Be=y.value.height;u==="width"?se.slideHeight=Math.round(B*(Be/Ce)):se.slideWidth=Math.round(B*(Ce/Be))}Ye(se)}const _e=M(()=>{var u;return Il(((u=c.value)==null?void 0:u.theme)||{})}),ft=M(()=>{var t,B;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const u=((B=a.value.content)==null?void 0:B.paletteText)||_e.value.paletteText;return Wl(u)});function et(u){const t=Ul(u,{fallbackToDefault:!1});return t.length?Vl(t):""}function At(u){var B;if(((B=a.value)==null?void 0:B.type)!=="chart")return;const t=et(u);t&&(h({dataText:t}),pe.value="")}async function Pt(u){var se;const t=u.target,B=(se=t==null?void 0:t.files)==null?void 0:se[0];if(B)try{const Ce=await B.text();At(Ce)}finally{t&&(t.value="")}}function Tt(){var u;(u=Oe.value)==null||u.click()}function Bt(){var t,B;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const u=et(((B=a.value.content)==null?void 0:B.dataText)||"");u&&h({dataText:u})}function Nt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&h({..._e.value})}function zt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&h({paletteText:_e.value.paletteText})}function mt(u){return String(u||"").split(",").map(t=>t.trim()).filter(Boolean)}function g(u){const t=(u==null?void 0:u.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((u==null?void 0:u.name)||"Imported Preset").trim()||"Imported Preset",category:String((u==null?void 0:u.category)||"").trim(),tags:Array.isArray(u==null?void 0:u.tags)?u.tags.map(B=>String(B).trim()).filter(Boolean):mt(u==null?void 0:u.tags),type:String((u==null?void 0:u.type)||"auto"),delay:Math.max(0,Number(u==null?void 0:u.delay)||0),duration:Math.max(.1,Number(u==null?void 0:u.duration)||.72),stepDelay:Math.max(0,Number(u==null?void 0:u.stepDelay)||0)}}const w=M(()=>[...new Set(P.value.map(t=>t.category).filter(Boolean))].sort((t,B)=>t.localeCompare(B))),ee=M(()=>[...P.value].filter(u=>Number(u.usageCount||0)>0).sort((u,t)=>{const B=Number(t.lastUsedAt||0)-Number(u.lastUsedAt||0);return B!==0?B:Number(t.usageCount||0)-Number(u.usageCount||0)}).slice(0,6)),G=M(()=>ge.value==="all"?ie.value:ie.value.filter(u=>u.scope===ge.value));function Pe(u){const t=ye.value.trim().toLowerCase(),B=Re.value;return B==="all"||(u.category||"")===B?t?[u.name,u.category,...u.tags||[]].filter(Boolean).some(Ce=>String(Ce).toLowerCase().includes(t)):!0:!1}const Ne=M(()=>fe.value.filter(Pe)),We=M(()=>$.value.filter(Pe)),Xe=M(()=>ee.value.filter(u=>q.value==="group"?u.scope==="group":u.scope!=="group"));function de(u){const t=String(u.name||"").trim();if(!t)return;const B=P.value.findIndex(Be=>Be.scope===u.scope&&Be.name.toLowerCase()===t.toLowerCase()),se={...u,id:B>=0?P.value[B].id:`motion-${Date.now()}`,name:t,category:String(u.category||"").trim(),tags:Array.isArray(u.tags)?u.tags:mt(u.tags)},Ce=[...P.value];B>=0?Ce.splice(B,1,se):Ce.push(se),Ye({motionPresets:Ce})}function Me(u,t){const B=P.value.map(se=>se.id===u?{...se,...t}:se);Ye({motionPresets:B})}function lt(u){const t=P.value.find(B=>B.id===u);t&&Me(u,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function Ve(u,t){const B=P.value.filter(De=>De.scope===u).map(De=>De.name.toLowerCase()),se=String(t||"Preset").trim()||"Preset";if(!B.includes(se.toLowerCase()))return se;let Ce=2,Be=`${se} Copy`;for(;B.includes(Be.toLowerCase());)Be=`${se} Copy ${Ce}`,Ce+=1;return Be}function je(u){Ye({motionPresets:P.value.filter(t=>t.id!==u)}),V.value===u&&(V.value="",Z.value="")}function Je(u){de({...u,id:void 0,name:Ve(u.scope,u.name)})}function ht(u){V.value=u.id,Z.value=u.name,ne.value=u.category||"",me.value=Array.isArray(u.tags)?u.tags.join(", "):""}function gt(){V.value="",Z.value="",ne.value="",me.value=""}function kt(u){const t=String(Z.value||"").trim();t&&(Me(u,{name:t,category:String(ne.value||"").trim(),tags:mt(me.value)}),gt())}function Wt(u,t,B){if(!t||!B||t===B)return;const se=P.value.filter(Ke=>Ke.scope===u),Ce=se.findIndex(Ke=>Ke.id===t),Be=se.findIndex(Ke=>Ke.id===B);if(Ce===-1||Be===-1)return;const De=[...se],[ze]=De.splice(Ce,1);De.splice(Be,0,ze);const Se=P.value.filter(Ke=>Ke.scope!==u),qe=[];P.value.forEach(Ke=>{if(Ke.scope===u){De.length&&qe.push(De.shift());return}const wt=Se.shift();wt&&qe.push(wt)}),Ye({motionPresets:qe})}function Ct(u){ae.value=u.id,Ee.value=u.id}function Rt(u){ae.value&&(Ee.value=u.id)}function Lt(u){ae.value&&(Wt(u.scope,ae.value,u.id),ae.value="",Ee.value="")}function Ot(){ae.value="",Ee.value=""}function Ft(){m.value+=1}function Ut(){U.value+=1}function dt(u,t){Qe({[u]:t})}function St(u){const t=Math.max(0,Number(u)||0);Qe({duration:t})}function $t(u){var se;if(!a.value)return;const B={...((se=a.value.animations)==null?void 0:se[0])||{type:"auto",delay:0,duration:.64},...u};if(B.type==="auto"){He({animations:[]});return}He({animations:[{type:B.type||"none",delay:Math.max(0,Number(B.delay)||0),duration:Math.max(.1,Number(B.duration)||.64)}]})}const ut=D("stagger-in"),bt=D(0),xt=D(.12),yt=D(.72);nt(A,u=>{u.length&&(ut.value=H.value.type==="mixed"?"stagger-in":H.value.type,yt.value=H.value.duration)},{immediate:!0,deep:!0});function Gt(){if(!A.value.length)return;[...A.value].sort((t,B)=>(t.y||0)!==(B.y||0)?(t.y||0)-(B.y||0):(t.x||0)-(B.x||0)).forEach((t,B)=>{if(ut.value==="auto"){s.updateElement(d.projectId,d.currentSlideId,t.id,{animations:[]});return}s.updateElement(d.projectId,d.currentSlideId,t.id,{animations:[{type:ut.value,delay:Math.max(0,Number(bt.value)||0)+B*Math.max(0,Number(xt.value)||0),duration:Math.max(.1,Number(yt.value)||.72)}]})})}function Vt(u){ut.value=u.type||"stagger-in",bt.value=Number(u.delay||0),xt.value=Number(u.stepDelay||0),yt.value=Number(u.duration||.72),lt(u.id),Ut()}function r(){de({scope:"group",name:Ie.value,category:O.value,tags:mt(K.value),type:ut.value,delay:Math.max(0,Number(bt.value)||0),stepDelay:Math.max(0,Number(xt.value)||0),duration:Math.max(.1,Number(yt.value)||.72)}),Ie.value="",O.value="",K.value=""}function n(u){$t({type:u.type||"auto",delay:Number(u.delay||0),duration:Number(u.duration||.72)}),lt(u.id),Ft()}function v(){de({scope:"single",name:W.value,category:C.value,tags:mt(j.value),type:ce.value.type,delay:Math.max(0,Number(ce.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(ce.value.duration)||.72)}),W.value="",C.value="",j.value=""}function I(){var u;(u=Te.value)==null||u.click()}async function f(u){var se;const t=u.target,B=(se=t==null?void 0:t.files)==null?void 0:se[0];if(B)try{const Ce=await B.text(),Be=JSON.parse(Ce),De=Array.isArray(Be)?Be:Array.isArray(Be.motionPresets)?Be.motionPresets:[];if(!De.length)return;ie.value=De.map(ze=>({...g(ze),selected:!0,importName:String((ze==null?void 0:ze.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function J(){ie.value=[]}function he(){const u=ie.value.filter(B=>B.selected);if(!u.length)return;const t=[...P.value];u.forEach(B=>{const se=t.findIndex(Ce=>Ce.scope===B.scope&&Ce.name.toLowerCase()===B.name.toLowerCase());if(se>=0){we.value==="replace"?t.splice(se,1,{...t[se],...B,id:t[se].id}):t.push({...B,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:Ve(B.scope,B.name)});return}t.push(B)}),Ye({motionPresets:t}),J()}function tt(){var Be;if(!P.value.length)return;const u={version:1,exportedAt:new Date().toISOString(),motionPresets:P.value.map(({id:De,...ze})=>ze)},t=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),B=URL.createObjectURL(t),se=document.createElement("a"),Ce=String(((Be=c.value)==null?void 0:Be.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";se.href=B,se.download=`${Ce}-motion-presets.json`,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL(B)}const T=M(()=>[{id:`single-${m.value}`,delay:Math.max(0,Number(ce.value.delay)||0),duration:Math.max(.1,Number(ce.value.duration)||.72),type:ce.value.type}]),at=M(()=>Array.from({length:Math.min(Math.max(A.value.length,3),5)},(u,t)=>({id:`group-${U.value}-${t}`,delay:Math.max(0,Number(bt.value)||0)+t*Math.max(0,Number(xt.value)||0),duration:Math.max(.1,Number(yt.value)||.72),type:ut.value}))),It=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Et=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(u,t)=>{var B,se,Ce,Be,De,ze,Se,qe,Ke,wt,Kt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,yo,ho,xo,wo,ko,Co,So,$o,Io,Eo,Ao,Mo,Po,To,Bo,No,zo,Lo,jo,Do,_o,qo,Ro,Oo,Fo,Uo,Vo,Wo,Go,Ho,Yo,Jo,Qo,Xo,Ko,Zo,en,tn,on,nn,ln,an,sn,rn,dn,un,cn,pn,vn,fn,mn,gn,bn,yn,hn,xn,wn,kn,Cn,Sn,$n,In,En,An,Mn,Pn,Tn,Bn,Nn,zn,Ln,jn,Dn,_n,qn,Rn,On,Fn,Un,Vn,Wn,Gn,Hn,Yn,Jn,Qn,Xn,Kn,Zn,el,tl,ol,nl,ll,il,al,sl,rl,dl,ul,cl,pl,vl,fl,ml,gl;return l(),i("div",{ref_key:"panelRootRef",ref:be,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Te,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:f},null,544),e("input",{ref_key:"chartImportInput",ref:Oe,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:Pt},null,544),t[398]||(t[398]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),z.value?(l(),ot(_a,{key:0,"search-query":ye.value,"category-filter":Re.value,"available-categories":w.value,"recent-presets":Xe.value,"pending-imported-presets":ie.value,"filtered-pending-imports":G.value,"import-scope-filter":ge.value,"import-conflict-mode":we.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>ye.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>Re.value=o),onTriggerImport:I,onExportPresets:tt,onApplyPreset:t[2]||(t[2]=o=>q.value==="group"?Vt(o):n(o)),onClearImports:J,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>ge.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>we.value=o),onApplyImports:he},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):F("",!0),E(d).multiSelection?(l(),i(oe,{key:1},[e("div",qa,[t[190]||(t[190]=e("div",{class:"panel-title"},"Arrange Selection",-1)),e("div",Ra,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[5]||(t[5]=o=>ke("left")),title:"Align Left"},"Left"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[6]||(t[6]=o=>ke("center")),title:"Align Center"},"Center"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[7]||(t[7]=o=>ke("right")),title:"Align Right"},"Right")]),e("div",Oa,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[8]||(t[8]=o=>ke("top")),title:"Align Top"},"Top"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[9]||(t[9]=o=>ke("middle")),title:"Align Middle"},"Middle"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[10]||(t[10]=o=>ke("bottom")),title:"Align Bottom"},"Bottom")]),A.value.length>=3?(l(),i("div",Fa,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[11]||(t[11]=o=>Ge("horizontal")),title:"Distribute Horizontally"},"Distribute H"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[12]||(t[12]=o=>Ge("vertical")),title:"Distribute Vertically"},"Distribute V")])):F("",!0),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:R}," Save as Content Block ")]),e("div",Ua,[t[195]||(t[195]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",Va,k(A.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",Wa,[e("div",{class:"motion-scrubber-header"},[t[191]||(t[191]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ut},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${U.value}`},[(l(!0),i(oe,null,ue(at.value,o=>(l(),i("span",{key:o.id,class:Y(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:xe({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Ga,[(l(),i(oe,null,ue(It,o=>e("button",{key:`group-${o.value}`,type:"button",class:Y(["motion-card",ut.value===o.value&&"active"]),onClick:Q=>ut.value=o.value},[e("span",Ya,[e("span",{class:Y(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Ja)):F("",!0),o.value==="stagger-in"?(l(),i("span",Qa)):F("",!0)]),e("span",Xa,k(o.label),1)],10,Ha)),64))]),e("div",Ka,[e("div",Za,[t[192]||(t[192]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),ve(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[13]||(t[13]=o=>bt.value=o),class:"input"},null,512),[[$e,bt.value]])]),e("div",es,[t[193]||(t[193]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),ve(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[14]||(t[14]=o=>xt.value=o),class:"input"},null,512),[[$e,xt.value]])])]),e("div",ts,[t[194]||(t[194]=e("label",{class:"form-label"},"Duration (seconds)",-1)),ve(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[15]||(t[15]=o=>yt.value=o),class:"input"},null,512),[[$e,yt.value]])]),e("div",os,[ve(e("input",{"onUpdate:modelValue":t[16]||(t[16]=o=>Ie.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[$e,Ie.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:r},"Save")]),e("div",ns,[ve(e("input",{"onUpdate:modelValue":t[17]||(t[17]=o=>O.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[$e,O.value]]),ve(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>K.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[$e,K.value]])]),We.value.length?(l(),i("div",ls,[(l(!0),i(oe,null,ue(We.value,o=>(l(),i("div",{key:o.id,class:Y(["preset-item",ae.value===o.id&&"dragging",Ee.value===o.id&&ae.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:Q=>Ct(o),onDragenter:Le(Q=>Rt(o),["prevent"]),onDragover:t[22]||(t[22]=Le(()=>{},["prevent"])),onDrop:Le(Q=>Lt(o),["prevent"]),onDragend:Ot},[e("button",{type:"button",class:"preset-chip",onClick:Q=>Vt(o)},k(o.name),9,as),o.category?(l(),i("span",ss,k(o.category),1)):F("",!0),(l(!0),i(oe,null,ue(o.tags||[],Q=>(l(),i("span",{key:`${o.id}-${Q}`,class:"preset-meta-chip muted"},"#"+k(Q),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>Je(o)},"Duplicate",8,rs),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>ht(o)},"Rename",8,ds),e("button",{type:"button",class:"preset-mini-btn danger",onClick:Q=>je(o.id)},"Delete",8,us),V.value===o.id?(l(),i("div",cs,[ve(e("input",{"onUpdate:modelValue":t[19]||(t[19]=Q=>Z.value=Q),class:"input"},null,512),[[$e,Z.value]]),ve(e("input",{"onUpdate:modelValue":t[20]||(t[20]=Q=>ne.value=Q),class:"input",placeholder:"Category"},null,512),[[$e,ne.value]]),ve(e("input",{"onUpdate:modelValue":t[21]||(t[21]=Q=>me.value=Q),class:"input",placeholder:"Tags, comma separated"},null,512),[[$e,me.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Q=>kt(o.id)},"Save",8,ps),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):F("",!0)],42,is))),128))])):$.value.length?(l(),i("div",vs,"No group presets match the current search.")):F("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Gt}," Apply Sequence to Selection ")])],64)):a.value?(l(),i(oe,{key:3},[e("div",{class:Y(["panel-section",re.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",ir,[t[226]||(t[226]=te(" Position & Size ",-1)),e("span",ar,k(a.value.type),1)]),e("div",sr,[e("div",rr,[t[227]||(t[227]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[47]||(t[47]=o=>Fe("x",o.target.value))},null,40,dr)]),e("div",ur,[t[228]||(t[228]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[48]||(t[48]=o=>Fe("y",o.target.value))},null,40,cr)]),e("div",pr,[t[229]||(t[229]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[49]||(t[49]=o=>Fe("width",o.target.value))},null,40,vr)]),e("div",fr,[t[230]||(t[230]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[50]||(t[50]=o=>Fe("height",o.target.value))},null,40,mr)]),e("div",gr,[t[231]||(t[231]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[51]||(t[51]=o=>Fe("rotation",o.target.value))},null,40,br)]),e("div",yr,[t[232]||(t[232]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[52]||(t[52]=o=>Fe("opacity",o.target.value))},null,40,hr)])])],2),e("div",{class:Y(["panel-section",re.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[236]||(t[236]=e("div",{class:"panel-title"},"Animation",-1)),e("div",xr,[e("div",{class:"motion-scrubber-header"},[t[233]||(t[233]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ft},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${m.value}`},[(l(!0),i(oe,null,ue(T.value,o=>(l(),i("span",{key:o.id,class:Y(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:xe({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",wr,[(l(),i(oe,null,ue(It,o=>e("button",{key:o.value,type:"button",class:Y(["motion-card",ce.value.type===o.value&&"active"]),onClick:Q=>$t({type:o.value})},[e("span",Cr,[e("span",{class:Y(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Sr)):F("",!0),o.value==="stagger-in"?(l(),i("span",$r)):F("",!0)]),e("span",Ir,k(o.label),1)],10,kr)),64))]),e("div",Er,[e("div",Ar,[t[234]||(t[234]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:ce.value.delay,class:"input",onChange:t[53]||(t[53]=o=>$t({delay:o.target.value}))},null,40,Mr)]),e("div",Pr,[t[235]||(t[235]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:ce.value.duration,class:"input",onChange:t[54]||(t[54]=o=>$t({duration:o.target.value}))},null,40,Tr)])]),e("div",Br,[ve(e("input",{"onUpdate:modelValue":t[55]||(t[55]=o=>W.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[$e,W.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v},"Save")]),e("div",Nr,[ve(e("input",{"onUpdate:modelValue":t[56]||(t[56]=o=>C.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[$e,C.value]]),ve(e("input",{"onUpdate:modelValue":t[57]||(t[57]=o=>j.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[$e,j.value]])]),Ne.value.length?(l(),i("div",zr,[(l(!0),i(oe,null,ue(Ne.value,o=>(l(),i("div",{key:o.id,class:Y(["preset-item",ae.value===o.id&&"dragging",Ee.value===o.id&&ae.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:Q=>Ct(o),onDragenter:Le(Q=>Rt(o),["prevent"]),onDragover:t[61]||(t[61]=Le(()=>{},["prevent"])),onDrop:Le(Q=>Lt(o),["prevent"]),onDragend:Ot},[e("button",{type:"button",class:"preset-chip",onClick:Q=>n(o)},k(o.name),9,jr),o.category?(l(),i("span",Dr,k(o.category),1)):F("",!0),(l(!0),i(oe,null,ue(o.tags||[],Q=>(l(),i("span",{key:`${o.id}-${Q}`,class:"preset-meta-chip muted"},"#"+k(Q),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>Je(o)},"Duplicate",8,_r),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>ht(o)},"Rename",8,qr),e("button",{type:"button",class:"preset-mini-btn danger",onClick:Q=>je(o.id)},"Delete",8,Rr),V.value===o.id?(l(),i("div",Or,[ve(e("input",{"onUpdate:modelValue":t[58]||(t[58]=Q=>Z.value=Q),class:"input"},null,512),[[$e,Z.value]]),ve(e("input",{"onUpdate:modelValue":t[59]||(t[59]=Q=>ne.value=Q),class:"input",placeholder:"Category"},null,512),[[$e,ne.value]]),ve(e("input",{"onUpdate:modelValue":t[60]||(t[60]=Q=>me.value=Q),class:"input",placeholder:"Tags, comma separated"},null,512),[[$e,me.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Q=>kt(o.id)},"Save",8,Fr),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):F("",!0)],42,Lr))),128))])):fe.value.length?(l(),i("div",Ur,"No single-element presets match the current search.")):F("",!0),t[237]||(t[237]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[253]||(t[253]=e("div",{class:"panel-title"},"Text",-1)),e("div",Vr,[t[238]||(t[238]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(qe=a.value.content)==null?void 0:qe.text,class:"textarea",style:{"min-height":"64px"},onInput:t[62]||(t[62]=o=>h({text:o.target.value}))},null,40,Wr)]),e("div",Gr,[e("div",Hr,[t[239]||(t[239]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(Ke=a.value.content)==null?void 0:Ke.fontSize,class:"input",onChange:t[63]||(t[63]=o=>h({fontSize:+o.target.value}))},null,40,Yr)]),e("div",Jr,[t[241]||(t[241]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(wt=a.value.content)==null?void 0:wt.fontWeight,class:"select",onChange:t[64]||(t[64]=o=>h({fontWeight:o.target.value}))},[...t[240]||(t[240]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Qr)])]),e("div",Xr,[t[242]||(t[242]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Kt=a.value.content)==null?void 0:Kt.fontFamily,class:"select",onChange:t[65]||(t[65]=o=>h({fontFamily:o.target.value}))},[(l(),i(oe,null,ue(Et,o=>e("option",{key:o,value:o},k(o.split(",")[0]),9,Zr)),64))],40,Kr)]),e("div",ed,[t[243]||(t[243]=e("label",{class:"form-label"},"Align",-1)),e("div",td,[(l(),i(oe,null,ue(["left","center","right","justify"],o=>{var Q;return e("button",{key:o,class:Y(["align-btn",((Q=a.value.content)==null?void 0:Q.textAlign)===o&&"active"]),onClick:bl=>h({textAlign:o})},k(o[0].toUpperCase()),11,od)}),64))])]),e("div",nd,[t[247]||(t[247]=e("label",{class:"form-label"},"Style",-1)),e("div",ld,[e("button",{class:Y(["style-btn",((Zt=a.value.content)==null?void 0:Zt.fontStyle)==="italic"&&"active"]),onClick:t[66]||(t[66]=o=>{var Q;return h({fontStyle:((Q=a.value.content)==null?void 0:Q.fontStyle)==="italic"?"normal":"italic"})})},[...t[244]||(t[244]=[e("i",null,"I",-1)])],2),e("button",{class:Y(["style-btn",((eo=a.value.content)==null?void 0:eo.textDecoration)==="underline"&&"active"]),onClick:t[67]||(t[67]=o=>{var Q;return h({textDecoration:((Q=a.value.content)==null?void 0:Q.textDecoration)==="underline"?"none":"underline"})})},[...t[245]||(t[245]=[e("u",null,"U",-1)])],2),e("button",{class:Y(["style-btn",((to=a.value.content)==null?void 0:to.textDecoration)==="line-through"&&"active"]),onClick:t[68]||(t[68]=o=>{var Q;return h({textDecoration:((Q=a.value.content)==null?void 0:Q.textDecoration)==="line-through"?"none":"line-through"})})},[...t[246]||(t[246]=[e("s",null,"S",-1)])],2)])]),e("div",id,[t[248]||(t[248]=e("label",{class:"form-label"},"Color",-1)),e("div",ad,[e("input",{type:"color",value:((oo=a.value.content)==null?void 0:oo.color)||"#000",onInput:t[69]||(t[69]=o=>h({color:o.target.value})),class:"color-input-native"},null,40,sd),e("input",{value:((no=a.value.content)==null?void 0:no.color)||"#000",class:"input",onInput:t[70]||(t[70]=o=>h({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,rd)])]),e("div",dd,[t[249]||(t[249]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((lo=a.value.content)==null?void 0:lo.lineHeight)??1.5,class:"input",onChange:t[71]||(t[71]=o=>h({lineHeight:+o.target.value}))},null,40,ud)]),e("div",cd,[e("div",pd,[t[251]||(t[251]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((io=a.value.content)==null?void 0:io.textTransform)||"none",class:"select",onChange:t[72]||(t[72]=o=>h({textTransform:o.target.value}))},[...t[250]||(t[250]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,vd)]),e("div",fd,[t[252]||(t[252]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((ao=a.value.content)==null?void 0:ao.letterSpacing)??0,class:"input",onChange:t[73]||(t[73]=o=>h({letterSpacing:+o.target.value}))},null,40,md)])])],2)):F("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[261]||(t[261]=e("div",{class:"panel-title"},"Image",-1)),e("div",gd,[t[254]||(t[254]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(so=a.value.content)==null?void 0:so.src,class:"input",placeholder:"https://...",onInput:t[74]||(t[74]=o=>h({src:o.target.value}))},null,40,bd)]),e("div",yd,[t[255]||(t[255]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(ro=a.value.content)==null?void 0:ro.alt,class:"input",onInput:t[75]||(t[75]=o=>h({alt:o.target.value}))},null,40,hd)]),e("div",xd,[t[257]||(t[257]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((uo=a.value.content)==null?void 0:uo.objectFit)||"cover",class:"select",onChange:t[76]||(t[76]=o=>h({objectFit:o.target.value}))},[...t[256]||(t[256]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,wd)]),e("div",kd,[t[258]||(t[258]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((co=a.value.content)==null?void 0:co.borderRadius)||0,class:"input",onChange:t[77]||(t[77]=o=>h({borderRadius:+o.target.value}))},null,40,Cd)]),e("div",Sd,[e("div",$d,[t[259]||(t[259]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((po=a.value.content)==null?void 0:po.borderWidth)||0,class:"input",onChange:t[78]||(t[78]=o=>h({borderWidth:+o.target.value}))},null,40,Id)]),e("div",Ed,[t[260]||(t[260]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((vo=a.value.content)==null?void 0:vo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[79]||(t[79]=o=>h({borderColor:o.target.value}))},null,40,Ad)])])],2)):F("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Md,[t[263]||(t[263]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((fo=a.value.content)==null?void 0:fo.shapeType)||"rectangle",class:"select",onChange:t[80]||(t[80]=o=>h({shapeType:o.target.value}))},[...t[262]||(t[262]=[it('<option value="rectangle" data-v-a86d3495>Rectangle</option><option value="circle" data-v-a86d3495>Circle</option><option value="triangle" data-v-a86d3495>Triangle</option><option value="star" data-v-a86d3495>Star</option><option value="arrow" data-v-a86d3495>Arrow</option><option value="diamond" data-v-a86d3495>Diamond</option>',6)])],40,Pd)]),e("div",Td,[t[264]||(t[264]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Bd,[e("input",{type:"color",value:((mo=a.value.content)==null?void 0:mo.fillColor)||"#6c47ff",onInput:t[81]||(t[81]=o=>h({fillColor:o.target.value})),class:"color-input-native"},null,40,Nd),e("input",{value:((go=a.value.content)==null?void 0:go.fillColor)||"#6c47ff",class:"input",onInput:t[82]||(t[82]=o=>h({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,zd)])]),e("div",Ld,[t[265]||(t[265]=e("label",{class:"form-label"},"Border Color",-1)),e("div",jd,[e("input",{type:"color",value:((bo=a.value.content)==null?void 0:bo.borderColor)||"transparent",onInput:t[83]||(t[83]=o=>h({borderColor:o.target.value})),class:"color-input-native"},null,40,Dd),e("input",{value:((yo=a.value.content)==null?void 0:yo.borderColor)||"transparent",class:"input",onInput:t[84]||(t[84]=o=>h({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,_d)])]),e("div",qd,[t[266]||(t[266]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((ho=a.value.content)==null?void 0:ho.borderWidth)||0,class:"input",onChange:t[85]||(t[85]=o=>h({borderWidth:+o.target.value}))},null,40,Rd)]),e("div",Od,[t[267]||(t[267]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((xo=a.value.content)==null?void 0:xo.borderRadius)||0,class:"input",onChange:t[86]||(t[86]=o=>h({borderRadius:+o.target.value}))},null,40,Fd)]),e("div",Ud,[t[268]||(t[268]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((wo=a.value.content)==null?void 0:wo.opacity)??1,class:"input",onChange:t[87]||(t[87]=o=>h({opacity:+o.target.value}))},null,40,Vd)])],2)):F("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[290]||(t[290]=e("div",{class:"panel-title"},"Chart",-1)),e("div",Wd,[t[271]||(t[271]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((ko=a.value.content)==null?void 0:ko.chartType)||"bar",class:"select",onChange:t[88]||(t[88]=o=>h({chartType:o.target.value}))},[...t[270]||(t[270]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Gd)]),e("div",Hd,[t[272]||(t[272]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((Co=a.value.content)==null?void 0:Co.title)||"",class:"input",onInput:t[89]||(t[89]=o=>h({title:o.target.value}))},null,40,Yd)]),e("div",Jd,[t[273]||(t[273]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((So=a.value.content)==null?void 0:So.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[90]||(t[90]=o=>h({dataText:o.target.value}))},null,40,Qd),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Bt},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Tt},"Upload CSV")]),t[274]||(t[274]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Xd,[t[275]||(t[275]=e("label",{class:"form-label"},"Paste table data",-1)),ve(e("textarea",{"onUpdate:modelValue":t[91]||(t[91]=o=>pe.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[$e,pe.value]]),e("div",Kd,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[92]||(t[92]=o=>At(pe.value))},"Convert pasted data")])]),e("div",Zd,[t[276]||(t[276]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:(($o=a.value.content)==null?void 0:$o.paletteText)||"",class:"input",placeholder:_e.value.paletteText,onInput:t[93]||(t[93]=o=>h({paletteText:o.target.value}))},null,40,eu),e("div",tu,[(l(!0),i(oe,null,ue(ft.value,(o,Q)=>(l(),i("span",{key:`chart-palette-${Q}`,class:"chart-palette-swatch",style:xe({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:zt},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Nt},"Apply theme colors")]),t[277]||(t[277]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",ou,[e("div",nu,[t[278]||(t[278]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Io=a.value.content)==null?void 0:Io.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[94]||(t[94]=o=>h({backgroundColor:o.target.value}))},null,40,lu)]),e("div",iu,[t[279]||(t[279]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((Eo=a.value.content)==null?void 0:Eo.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[95]||(t[95]=o=>h({textColor:o.target.value}))},null,40,au)])]),e("div",su,[e("div",ru,[t[280]||(t[280]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((Ao=a.value.content)==null?void 0:Ao.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[96]||(t[96]=o=>h({gridColor:o.target.value}))},null,40,du)]),e("div",uu,[t[281]||(t[281]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((Mo=a.value.content)==null?void 0:Mo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[97]||(t[97]=o=>h({borderColor:o.target.value}))},null,40,cu)])]),e("div",pu,[e("div",vu,[t[282]||(t[282]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Po=a.value.content)==null?void 0:Po.borderWidth)??1,class:"input",onChange:t[98]||(t[98]=o=>h({borderWidth:+o.target.value}))},null,40,fu)]),((To=a.value.content)==null?void 0:To.chartType)!=="circle"?(l(),i("div",mu,[t[283]||(t[283]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((Bo=a.value.content)==null?void 0:Bo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[99]||(t[99]=o=>h({maxValue:o.target.value}))},null,40,gu)])):(l(),i("div",bu,[t[284]||(t[284]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((No=a.value.content)==null?void 0:No.innerRadius)??62,class:"input",onChange:t[100]||(t[100]=o=>h({innerRadius:+o.target.value}))},null,40,yu)]))]),((zo=a.value.content)==null?void 0:zo.chartType)==="line"?(l(),i("div",hu,[e("div",xu,[t[285]||(t[285]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((Lo=a.value.content)==null?void 0:Lo.strokeWidth)??3,class:"input",onChange:t[101]||(t[101]=o=>h({strokeWidth:+o.target.value}))},null,40,wu)]),e("label",ku,[e("input",{type:"checkbox",checked:!!((jo=a.value.content)!=null&&jo.showArea),onChange:t[102]||(t[102]=o=>h({showArea:o.target.checked}))},null,40,Cu),t[286]||(t[286]=te(" Show area fill ",-1))])])):F("",!0),e("label",Su,[e("input",{type:"checkbox",checked:((Do=a.value.content)==null?void 0:Do.showLegend)!==!1,onChange:t[103]||(t[103]=o=>h({showLegend:o.target.checked}))},null,40,$u),t[287]||(t[287]=te(" Show legend ",-1))]),((_o=a.value.content)==null?void 0:_o.chartType)!=="circle"?(l(),i("label",Iu,[e("input",{type:"checkbox",checked:((qo=a.value.content)==null?void 0:qo.showGrid)!==!1,onChange:t[104]||(t[104]=o=>h({showGrid:o.target.checked}))},null,40,Eu),t[288]||(t[288]=te(" Show grid lines ",-1))])):F("",!0),e("label",Au,[e("input",{type:"checkbox",checked:((Ro=a.value.content)==null?void 0:Ro.showValues)!==!1,onChange:t[105]||(t[105]=o=>h({showValues:o.target.checked}))},null,40,Mu),t[289]||(t[289]=te(" Show values ",-1))])],2)):F("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[306]||(t[306]=e("div",{class:"panel-title"},"Button",-1)),e("div",Pu,[t[291]||(t[291]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Oo=a.value.content)==null?void 0:Oo.label,class:"input",onInput:t[106]||(t[106]=o=>h({label:o.target.value}))},null,40,Tu)]),e("div",Bu,[t[293]||(t[293]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Fo=a.value.content)==null?void 0:Fo.variant)||"primary",class:"select",onChange:t[107]||(t[107]=o=>h({variant:o.target.value}))},[...t[292]||(t[292]=[it('<option value="primary" data-v-a86d3495>Primary</option><option value="secondary" data-v-a86d3495>Secondary</option><option value="outline" data-v-a86d3495>Outline</option><option value="ghost" data-v-a86d3495>Ghost</option><option value="danger" data-v-a86d3495>Danger</option>',5)])],40,Nu)]),e("div",zu,[t[295]||(t[295]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Uo=a.value.content)==null?void 0:Uo.action)||"none",class:"select",onChange:t[108]||(t[108]=o=>h({action:o.target.value}))},[...t[294]||(t[294]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Lu)]),(Vo=a.value.content)!=null&&Vo.action&&a.value.content.action!=="none"?(l(),i("div",ju,[t[296]||(t[296]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Wo=a.value.content)==null?void 0:Wo.target,class:"input",placeholder:"Slide # or https://...",onInput:t[109]||(t[109]=o=>h({target:o.target.value}))},null,40,Du)])):F("",!0),e("div",_u,[e("div",qu,[t[297]||(t[297]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Go=a.value.content)==null?void 0:Go.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[110]||(t[110]=o=>h({bgColor:o.target.value}))},null,40,Ru)]),e("div",Ou,[t[298]||(t[298]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Ho=a.value.content)==null?void 0:Ho.textColor)||"#ffffff",class:"color-input-native",onInput:t[111]||(t[111]=o=>h({textColor:o.target.value}))},null,40,Fu)])]),e("div",Uu,[e("div",Vu,[t[299]||(t[299]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Yo=a.value.content)==null?void 0:Yo.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[112]||(t[112]=o=>h({borderColor:o.target.value}))},null,40,Wu)]),e("div",Gu,[t[300]||(t[300]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Jo=a.value.content)==null?void 0:Jo.borderRadius)??8,class:"input",onChange:t[113]||(t[113]=o=>h({borderRadius:+o.target.value}))},null,40,Hu)])]),e("div",Yu,[e("div",Ju,[t[301]||(t[301]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Qo=a.value.content)==null?void 0:Qo.fontSize)??15,class:"input",onChange:t[114]||(t[114]=o=>h({fontSize:+o.target.value}))},null,40,Qu)]),e("div",Xu,[t[303]||(t[303]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Xo=a.value.content)==null?void 0:Xo.fontWeight)??600),class:"select",onChange:t[115]||(t[115]=o=>h({fontWeight:+o.target.value}))},[...t[302]||(t[302]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Ku)])]),e("div",Zu,[e("div",ec,[t[304]||(t[304]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Ko=a.value.content)==null?void 0:Ko.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[116]||(t[116]=o=>h({fontFamily:o.target.value}))},[(l(),i(oe,null,ue(Et,o=>e("option",{key:`btn-${o}`,value:o},k(o.split(",")[0]),9,oc)),64))],40,tc)]),e("div",nc,[t[305]||(t[305]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Zo=a.value.content)==null?void 0:Zo.letterSpacing)??0,class:"input",onChange:t[117]||(t[117]=o=>h({letterSpacing:+o.target.value}))},null,40,lc)])])],2)):F("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[316]||(t[316]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",ic,[t[308]||(t[308]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((en=a.value.content)==null?void 0:en.icon)||"?",class:"select",onChange:t[118]||(t[118]=o=>h({icon:o.target.value}))},[...t[307]||(t[307]=[it('<option value="?" data-v-a86d3495>? (Info)</option><option value="!" data-v-a86d3495>! (Alert)</option><option value="+" data-v-a86d3495>+ (Plus)</option><option value="i" data-v-a86d3495>i (Info)</option><option value="✦" data-v-a86d3495>✦ (Star)</option>',5)])],40,ac)]),e("div",sc,[t[309]||(t[309]=e("label",{class:"form-label"},"Background Color",-1)),e("div",rc,[e("input",{type:"color",value:((tn=a.value.content)==null?void 0:tn.bgColor)||"#6c47ff",onInput:t[119]||(t[119]=o=>h({bgColor:o.target.value})),class:"color-input-native"},null,40,dc),e("input",{value:((on=a.value.content)==null?void 0:on.bgColor)||"#6c47ff",class:"input",onInput:t[120]||(t[120]=o=>h({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,uc)])]),e("div",cc,[e("div",pc,[t[310]||(t[310]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((nn=a.value.content)==null?void 0:nn.iconColor)||"#ffffff",class:"color-input-native",onInput:t[121]||(t[121]=o=>h({iconColor:o.target.value}))},null,40,vc)]),e("div",fc,[t[311]||(t[311]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((ln=a.value.content)==null?void 0:ln.borderRadius)??999,class:"input",onChange:t[122]||(t[122]=o=>h({borderRadius:+o.target.value}))},null,40,mc)])]),e("div",gc,[t[312]||(t[312]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(an=a.value.content)==null?void 0:an.popupTitle,class:"input",onInput:t[123]||(t[123]=o=>h({popupTitle:o.target.value}))},null,40,bc)]),e("div",yc,[t[313]||(t[313]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(sn=a.value.content)==null?void 0:sn.popupContent,class:"textarea",onInput:t[124]||(t[124]=o=>h({popupContent:o.target.value}))},null,40,hc)]),e("div",xc,[e("div",wc,[t[314]||(t[314]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((rn=a.value.content)==null?void 0:rn.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[125]||(t[125]=o=>h({popupBgColor:o.target.value}))},null,40,kc)]),e("div",Cc,[t[315]||(t[315]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((dn=a.value.content)==null?void 0:dn.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[126]||(t[126]=o=>h({popupTextColor:o.target.value}))},null,40,Sc)])])],2)):F("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[325]||(t[325]=e("div",{class:"panel-title"},"Video",-1)),e("div",$c,[t[317]||(t[317]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(un=a.value.content)==null?void 0:un.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[127]||(t[127]=o=>h({src:o.target.value}))},null,40,Ic)]),e("div",Ec,[t[318]||(t[318]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(cn=a.value.content)==null?void 0:cn.poster,class:"input",onInput:t[128]||(t[128]=o=>h({poster:o.target.value}))},null,40,Ac)]),e("div",Mc,[t[320]||(t[320]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((pn=a.value.content)==null?void 0:pn.objectFit)||"cover",class:"select",onChange:t[129]||(t[129]=o=>h({objectFit:o.target.value}))},[...t[319]||(t[319]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Pc)]),e("label",Tc,[e("input",{type:"checkbox",checked:(vn=a.value.content)==null?void 0:vn.autoplay,onChange:t[130]||(t[130]=o=>h({autoplay:o.target.checked}))},null,40,Bc),t[321]||(t[321]=te(" Autoplay ",-1))]),e("label",Nc,[e("input",{type:"checkbox",checked:((fn=a.value.content)==null?void 0:fn.controls)??!0,onChange:t[131]||(t[131]=o=>h({controls:o.target.checked}))},null,40,zc),t[322]||(t[322]=te(" Show Controls ",-1))]),e("label",Lc,[e("input",{type:"checkbox",checked:(mn=a.value.content)==null?void 0:mn.loop,onChange:t[132]||(t[132]=o=>h({loop:o.target.checked}))},null,40,jc),t[323]||(t[323]=te(" Loop ",-1))]),e("label",Dc,[e("input",{type:"checkbox",checked:(gn=a.value.content)==null?void 0:gn.muted,onChange:t[133]||(t[133]=o=>h({muted:o.target.checked}))},null,40,_c),t[324]||(t[324]=te(" Muted ",-1))])],2)):F("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[334]||(t[334]=e("div",{class:"panel-title"},"Audio",-1)),e("div",qc,[t[326]||(t[326]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(bn=a.value.content)==null?void 0:bn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[134]||(t[134]=o=>h({src:o.target.value}))},null,40,Rc)]),e("div",Oc,[t[327]||(t[327]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(yn=a.value.content)==null?void 0:yn.label,class:"input",onInput:t[135]||(t[135]=o=>h({label:o.target.value}))},null,40,Fc)]),e("label",Uc,[e("input",{type:"checkbox",checked:(hn=a.value.content)==null?void 0:hn.autoplay,onChange:t[136]||(t[136]=o=>h({autoplay:o.target.checked}))},null,40,Vc),t[328]||(t[328]=te(" Autoplay ",-1))]),e("label",Wc,[e("input",{type:"checkbox",checked:((xn=a.value.content)==null?void 0:xn.controls)!==!1,onChange:t[137]||(t[137]=o=>h({controls:o.target.checked}))},null,40,Gc),t[329]||(t[329]=te(" Show Controls ",-1))]),e("label",Hc,[e("input",{type:"checkbox",checked:(wn=a.value.content)==null?void 0:wn.loop,onChange:t[138]||(t[138]=o=>h({loop:o.target.checked}))},null,40,Yc),t[330]||(t[330]=te(" Loop ",-1))]),e("div",Jc,[e("div",Qc,[t[331]||(t[331]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((kn=a.value.content)==null?void 0:kn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[139]||(t[139]=o=>h({accentColor:o.target.value}))},null,40,Xc)]),e("div",Kc,[t[332]||(t[332]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Cn=a.value.content)==null?void 0:Cn.textColor)||"#555555",class:"color-input-native",onInput:t[140]||(t[140]=o=>h({textColor:o.target.value}))},null,40,Zc)])]),e("div",ep,[t[333]||(t[333]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((Sn=a.value.content)==null?void 0:Sn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[141]||(t[141]=o=>h({bgColor:o.target.value}))},null,40,tp)])],2)):F("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[342]||(t[342]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",op,[t[335]||(t[335]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:($n=a.value.content)==null?void 0:$n.question,class:"textarea",style:{"min-height":"60px"},onInput:t[142]||(t[142]=o=>h({question:o.target.value}))},null,40,np)]),e("div",lp,[t[336]||(t[336]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(En=(In=a.value.content)==null?void 0:In.options)==null?void 0:En.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[143]||(t[143]=o=>h({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,ip)]),e("div",ap,[t[337]||(t[337]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((An=a.value.content)==null?void 0:An.correctIndex)??0,class:"input",onChange:t[144]||(t[144]=o=>h({correctIndex:+o.target.value}))},null,40,sp)]),e("div",rp,[t[338]||(t[338]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(Mn=a.value.content)==null?void 0:Mn.explanation,class:"textarea",onInput:t[145]||(t[145]=o=>h({explanation:o.target.value}))},null,40,dp)]),e("div",up,[e("div",cp,[t[339]||(t[339]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((Pn=a.value.content)==null?void 0:Pn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[146]||(t[146]=o=>h({cardBgColor:o.target.value}))},null,40,pp)]),e("div",vp,[t[340]||(t[340]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((Tn=a.value.content)==null?void 0:Tn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[147]||(t[147]=o=>h({questionColor:o.target.value}))},null,40,fp)])]),e("div",mp,[t[341]||(t[341]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Bn=a.value.content)==null?void 0:Bn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[148]||(t[148]=o=>h({accentColor:o.target.value}))},null,40,gp)])],2)):a.value.type==="tabs"?(l(),i("div",{key:9,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[348]||(t[348]=e("div",{class:"panel-title"},"Tabs Configuration",-1)),e("div",bp,[t[343]||(t[343]=e("label",{class:"form-label"},"Tabs Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Nn=a.value.content)==null?void 0:Nn.tabs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[149]||(t[149]=o=>{var Q;return h({tabs:Ae(o.target.value,(Q=a.value.content)==null?void 0:Q.tabs)})})},null,40,yp)]),e("div",hp,[e("div",xp,[t[344]||(t[344]=e("label",{class:"form-label"},"Active Tab",-1)),e("input",{type:"color",value:((zn=a.value.content)==null?void 0:zn.activeTabColor)||"#6c47ff",class:"color-input-native",onInput:t[150]||(t[150]=o=>h({activeTabColor:o.target.value}))},null,40,wp)]),e("div",kp,[t[345]||(t[345]=e("label",{class:"form-label"},"Inactive Tab",-1)),e("input",{type:"color",value:((Ln=a.value.content)==null?void 0:Ln.inactiveTabColor)||"#f8fafc",class:"color-input-native",onInput:t[151]||(t[151]=o=>h({inactiveTabColor:o.target.value}))},null,40,Cp)]),e("div",Sp,[t[346]||(t[346]=e("label",{class:"form-label"},"Content Bg",-1)),e("input",{type:"color",value:((jn=a.value.content)==null?void 0:jn.contentBgColor)||"#ffffff",class:"color-input-native",onInput:t[152]||(t[152]=o=>h({contentBgColor:o.target.value}))},null,40,$p)]),e("div",Ip,[t[347]||(t[347]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Dn=a.value.content)==null?void 0:Dn.textColor)||"#1e293b",class:"color-input-native",onInput:t[153]||(t[153]=o=>h({textColor:o.target.value}))},null,40,Ep)])])],2)):a.value.type==="accordion"?(l(),i("div",{key:10,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[354]||(t[354]=e("div",{class:"panel-title"},"Accordion Configuration",-1)),e("div",Ap,[t[349]||(t[349]=e("label",{class:"form-label"},"Items Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((_n=a.value.content)==null?void 0:_n.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[154]||(t[154]=o=>{var Q;return h({items:Ae(o.target.value,(Q=a.value.content)==null?void 0:Q.items)})})},null,40,Mp)]),e("div",Pp,[e("div",Tp,[t[350]||(t[350]=e("label",{class:"form-label"},"Active Bg Color",-1)),e("input",{type:"color",value:((qn=a.value.content)==null?void 0:qn.activeBgColor)||"#f8fafc",class:"color-input-native",onInput:t[155]||(t[155]=o=>h({activeBgColor:o.target.value}))},null,40,Bp)]),e("div",Np,[t[351]||(t[351]=e("label",{class:"form-label"},"Active Title Color",-1)),e("input",{type:"color",value:((Rn=a.value.content)==null?void 0:Rn.activeColor)||"#6c47ff",class:"color-input-native",onInput:t[156]||(t[156]=o=>h({activeColor:o.target.value}))},null,40,zp)]),e("div",Lp,[t[352]||(t[352]=e("label",{class:"form-label"},"Item Bg Color",-1)),e("input",{type:"color",value:((On=a.value.content)==null?void 0:On.itemBgColor)||"#ffffff",class:"color-input-native",onInput:t[157]||(t[157]=o=>h({itemBgColor:o.target.value}))},null,40,jp)]),e("div",Dp,[t[353]||(t[353]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Fn=a.value.content)==null?void 0:Fn.textColor)||"#475569",class:"color-input-native",onInput:t[158]||(t[158]=o=>h({textColor:o.target.value}))},null,40,_p)])])],2)):a.value.type==="flipcard"?(l(),i("div",{key:11,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[365]||(t[365]=e("div",{class:"panel-title"},"Flip Card Content",-1)),e("div",qp,[t[356]||(t[356]=e("label",{class:"form-label"},"Direction",-1)),e("select",{value:((Un=a.value.content)==null?void 0:Un.flipDirection)||"horizontal",class:"select",onChange:t[159]||(t[159]=o=>h({flipDirection:o.target.value}))},[...t[355]||(t[355]=[e("option",{value:"horizontal"},"Horizontal (Y-axis)",-1),e("option",{value:"vertical"},"Vertical (X-axis)",-1)])],40,Rp)]),e("div",Op,[t[357]||(t[357]=e("label",{class:"form-label"},"Front Title",-1)),e("input",{type:"text",value:(Vn=a.value.content)==null?void 0:Vn.frontTitle,class:"input",onInput:t[160]||(t[160]=o=>h({frontTitle:o.target.value}))},null,40,Fp)]),e("div",Up,[t[358]||(t[358]=e("label",{class:"form-label"},"Front Content",-1)),e("textarea",{value:(Wn=a.value.content)==null?void 0:Wn.frontContent,class:"textarea",onInput:t[161]||(t[161]=o=>h({frontContent:o.target.value}))},null,40,Vp)]),e("div",Wp,[t[359]||(t[359]=e("label",{class:"form-label"},"Back Title",-1)),e("input",{type:"text",value:(Gn=a.value.content)==null?void 0:Gn.backTitle,class:"input",onInput:t[162]||(t[162]=o=>h({backTitle:o.target.value}))},null,40,Gp)]),e("div",Hp,[t[360]||(t[360]=e("label",{class:"form-label"},"Back Content",-1)),e("textarea",{value:(Hn=a.value.content)==null?void 0:Hn.backContent,class:"textarea",onInput:t[163]||(t[163]=o=>h({backContent:o.target.value}))},null,40,Yp)]),e("div",Jp,[e("div",Qp,[t[361]||(t[361]=e("label",{class:"form-label"},"Front Bg",-1)),e("input",{type:"color",value:((Yn=a.value.content)==null?void 0:Yn.frontBgColor)||"#6c47ff",class:"color-input-native",onInput:t[164]||(t[164]=o=>h({frontBgColor:o.target.value}))},null,40,Xp)]),e("div",Kp,[t[362]||(t[362]=e("label",{class:"form-label"},"Front Text",-1)),e("input",{type:"color",value:((Jn=a.value.content)==null?void 0:Jn.frontTextColor)||"#ffffff",class:"color-input-native",onInput:t[165]||(t[165]=o=>h({frontTextColor:o.target.value}))},null,40,Zp)]),e("div",ev,[t[363]||(t[363]=e("label",{class:"form-label"},"Back Bg",-1)),e("input",{type:"color",value:((Qn=a.value.content)==null?void 0:Qn.backBgColor)||"#ffffff",class:"color-input-native",onInput:t[166]||(t[166]=o=>h({backBgColor:o.target.value}))},null,40,tv)]),e("div",ov,[t[364]||(t[364]=e("label",{class:"form-label"},"Back Text",-1)),e("input",{type:"color",value:((Xn=a.value.content)==null?void 0:Xn.backTextColor)||"#1e293b",class:"color-input-native",onInput:t[167]||(t[167]=o=>h({backTextColor:o.target.value}))},null,40,nv)])])],2)):a.value.type==="stepper"?(l(),i("div",{key:12,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[371]||(t[371]=e("div",{class:"panel-title"},"Stepper Configuration",-1)),e("div",lv,[t[366]||(t[366]=e("label",{class:"form-label"},"Steps Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Kn=a.value.content)==null?void 0:Kn.steps)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[168]||(t[168]=o=>{var Q;return h({steps:Ae(o.target.value,(Q=a.value.content)==null?void 0:Q.steps)})})},null,40,iv)]),e("div",av,[e("div",sv,[t[367]||(t[367]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Zn=a.value.content)==null?void 0:Zn.bgColor)||"#ffffff",class:"color-input-native",onInput:t[169]||(t[169]=o=>h({bgColor:o.target.value}))},null,40,rv)]),e("div",dv,[t[368]||(t[368]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((el=a.value.content)==null?void 0:el.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[170]||(t[170]=o=>h({accentColor:o.target.value}))},null,40,uv)]),e("div",cv,[t[369]||(t[369]=e("label",{class:"form-label"},"Title Color",-1)),e("input",{type:"color",value:((tl=a.value.content)==null?void 0:tl.titleColor)||"#0f172a",class:"color-input-native",onInput:t[171]||(t[171]=o=>h({titleColor:o.target.value}))},null,40,pv)]),e("div",vv,[t[370]||(t[370]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((ol=a.value.content)==null?void 0:ol.textColor)||"#475569",class:"color-input-native",onInput:t[172]||(t[172]=o=>h({textColor:o.target.value}))},null,40,fv)])])],2)):a.value.type==="poll"?(l(),i("div",{key:13,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[375]||(t[375]=e("div",{class:"panel-title"},"Poll Configuration",-1)),e("div",mv,[t[372]||(t[372]=e("label",{class:"form-label"},"Question",-1)),e("input",{type:"text",value:((nl=a.value.content)==null?void 0:nl.question)||"",class:"input",onInput:t[173]||(t[173]=o=>h({question:o.target.value}))},null,40,gv)]),e("div",bv,[t[373]||(t[373]=e("label",{class:"form-label"},"Options (JSON)",-1)),e("textarea",{value:JSON.stringify(((ll=a.value.content)==null?void 0:ll.options)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[174]||(t[174]=o=>{var Q;return h({options:Ae(o.target.value,(Q=a.value.content)==null?void 0:Q.options)})})},null,40,yv)]),e("div",hv,[e("div",xv,[t[374]||(t[374]=e("label",{class:"form-label"},"Voted Color",-1)),e("input",{type:"color",value:((il=a.value.content)==null?void 0:il.votedColor)||"#6c47ff",class:"color-input-native",onInput:t[175]||(t[175]=o=>h({votedColor:o.target.value}))},null,40,wv)])])],2)):a.value.type==="labeledimage"?(l(),i("div",{key:14,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[378]||(t[378]=e("div",{class:"panel-title"},"Labeled Image Configuration",-1)),e("div",kv,[t[376]||(t[376]=e("label",{class:"form-label"},"Image URL",-1)),e("input",{type:"text",value:((al=a.value.content)==null?void 0:al.imageUrl)||"",class:"input",onInput:t[176]||(t[176]=o=>h({imageUrl:o.target.value}))},null,40,Cv)]),e("div",Sv,[t[377]||(t[377]=e("label",{class:"form-label"},"Markers (JSON)",-1)),e("textarea",{value:JSON.stringify(((sl=a.value.content)==null?void 0:sl.markers)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[177]||(t[177]=o=>{var Q;return h({markers:Ae(o.target.value,(Q=a.value.content)==null?void 0:Q.markers)})})},null,40,$v)])],2)):a.value.type==="matching"?(l(),i("div",{key:15,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[380]||(t[380]=e("div",{class:"panel-title"},"Matching Configuration",-1)),e("div",Iv,[t[379]||(t[379]=e("label",{class:"form-label"},"Pairs (JSON)",-1)),e("textarea",{value:JSON.stringify(((rl=a.value.content)==null?void 0:rl.pairs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[178]||(t[178]=o=>{var Q;return h({pairs:Ae(o.target.value,(Q=a.value.content)==null?void 0:Q.pairs)})})},null,40,Ev)])],2)):a.value.type==="sorting"?(l(),i("div",{key:16,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[382]||(t[382]=e("div",{class:"panel-title"},"Sorting Configuration",-1)),e("div",Av,[t[381]||(t[381]=e("label",{class:"form-label"},"Items (JSON) - Target Order",-1)),e("textarea",{value:JSON.stringify(((dl=a.value.content)==null?void 0:dl.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[179]||(t[179]=o=>{var Q;return h({items:Ae(o.target.value,(Q=a.value.content)==null?void 0:Q.items)})})},null,40,Mv)])],2)):a.value.type==="cloze"?(l(),i("div",{key:17,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[385]||(t[385]=e("div",{class:"panel-title"},"Cloze Configuration",-1)),e("div",Pv,[t[383]||(t[383]=e("label",{class:"form-label"},"Text (Wrap blanks in [ ])",-1)),e("textarea",{value:((ul=a.value.content)==null?void 0:ul.text)||"",class:"textarea",style:{"min-height":"100px","font-family":"monospace","font-size":"12px"},onChange:t[180]||(t[180]=o=>h({text:o.target.value}))},null,40,Tv)]),e("div",Bv,[e("div",Nv,[e("input",{type:"checkbox",id:"showCheckBtn",checked:((cl=a.value.content)==null?void 0:cl.showCheckBtn)!==!1,onChange:t[181]||(t[181]=o=>h({showCheckBtn:o.target.checked}))},null,40,zv),t[384]||(t[384]=e("label",{for:"showCheckBtn",class:"form-label mb-0"},"Show Check Answers Button",-1))])])],2)):a.value.type==="placeholder"?(l(),i("div",{key:18,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[387]||(t[387]=e("div",{class:"panel-title"},"Placeholder Settings",-1)),e("div",Lv,[t[386]||(t[386]=e("label",{class:"form-label"},"Prompt Text",-1)),e("input",{value:((pl=a.value.content)==null?void 0:pl.prompt)||"",class:"input",placeholder:"Add Content",onInput:t[182]||(t[182]=o=>h({prompt:o.target.value}))},null,40,jv)])],2)):a.value.type==="scenario"?(l(),i("div",{key:19,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[389]||(t[389]=e("div",{class:"panel-title"},"Scenario Chat",-1)),e("div",Dv,[t[388]||(t[388]=e("label",{class:"form-label"},"Messages (JSON)",-1)),e("textarea",{value:JSON.stringify(((vl=a.value.content)==null?void 0:vl.messages)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[183]||(t[183]=o=>{var Q;return h({messages:Ae(o.target.value,(Q=a.value.content)==null?void 0:Q.messages)})})},null,40,_v)])],2)):a.value.type==="progress"?(l(),i("div",{key:20,class:Y(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[393]||(t[393]=e("div",{class:"panel-title"},"Progress Settings",-1)),e("div",qv,[e("div",Rv,[t[390]||(t[390]=e("label",{class:"form-label"},"Mock XP",-1)),e("input",{type:"number",value:((fl=a.value.content)==null?void 0:fl.mockXP)||350,class:"input",onInput:t[184]||(t[184]=o=>h({mockXP:Number(o.target.value)}))},null,40,Ov)]),e("div",Fv,[t[391]||(t[391]=e("label",{class:"form-label"},"Mock Percent",-1)),e("input",{type:"number",value:((ml=a.value.content)==null?void 0:ml.mockPercent)||65,class:"input",onInput:t[185]||(t[185]=o=>h({mockPercent:Number(o.target.value)}))},null,40,Uv)])]),e("div",Vv,[e("div",Wv,[t[392]||(t[392]=e("label",{class:"form-label"},"Fill Color",-1)),e("input",{type:"color",value:((gl=a.value.content)==null?void 0:gl.fillColor)||"#10b981",class:"color-input-native",onInput:t[186]||(t[186]=o=>h({fillColor:o.target.value}))},null,40,Gv)])])],2)):F("",!0),e("div",Hv,[t[397]||(t[397]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Yv,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[187]||(t[187]=o=>E(s).duplicateElement(E(d).projectId,E(d).currentSlideId,a.value.id))},[...t[394]||(t[394]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),te(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[188]||(t[188]=o=>{E(d).showInteractionEditor=!0,E(d).interactionElementId=a.value.id})},[...t[395]||(t[395]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),te(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[189]||(t[189]=o=>{E(s).deleteElement(E(d).projectId,E(d).currentSlideId,a.value.id),E(d).clearSelection()})},[...t[396]||(t[396]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),te(" Delete Element ",-1)])])])])],64)):(l(),i("div",fs,[e("div",ms,[e("button",{type:"button",class:Y(["slide-settings-tab",_.value==="canvas"&&"active"]),onClick:t[23]||(t[23]=o=>_.value="canvas")},[...t[196]||(t[196]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:Y(["slide-settings-tab",_.value==="transitions"&&"active"]),onClick:t[24]||(t[24]=o=>_.value="transitions")},[...t[197]||(t[197]=[it('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-a86d3495><path d="M5 7h5" data-v-a86d3495></path><path d="M5 12h10" data-v-a86d3495></path><path d="M5 17h14" data-v-a86d3495></path><path d="M14 7l5 5-5 5" data-v-a86d3495></path></svg><span data-v-a86d3495>Transitions</span>',2)])],2),e("button",{type:"button",class:Y(["slide-settings-tab",_.value==="navigation"&&"active"]),onClick:t[25]||(t[25]=o=>_.value="navigation")},[...t[198]||(t[198]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),_.value==="canvas"?(l(),i("div",gs,[t[213]||(t[213]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",bs,[t[199]||(t[199]=e("label",{class:"form-label"},"Title",-1)),ve(e("input",{"onUpdate:modelValue":t[26]||(t[26]=o=>Ue.value.title=o),class:"input",onInput:t[27]||(t[27]=o=>dt("title",Ue.value.title))},null,544),[[$e,Ue.value.title]])]),e("div",ys,[t[200]||(t[200]=e("label",{class:"form-label"},"Background",-1)),e("div",hs,[(l(),i(oe,null,ue(["color","gradient","image"],o=>{var Q;return e("button",{key:o,class:Y(["bg-type-btn",(((Q=p.value)==null?void 0:Q.backgroundType)||"color")===o&&"active"]),onClick:bl=>Qe({backgroundType:o})},k(o),11,xs)}),64))]),(((B=p.value)==null?void 0:B.backgroundType)||"color")==="color"?(l(),i("div",ws,[e("input",{type:"color",value:((se=p.value)==null?void 0:se.background)||"#ffffff",onInput:t[28]||(t[28]=o=>Qe({background:o.target.value})),class:"color-input-native"},null,40,ks),e("input",{value:((Ce=p.value)==null?void 0:Ce.background)||"#ffffff",class:"input",onInput:t[29]||(t[29]=o=>Qe({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Cs)])):((Be=p.value)==null?void 0:Be.backgroundType)==="gradient"?ve((l(),i("input",{key:1,"onUpdate:modelValue":t[30]||(t[30]=o=>Ue.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[31]||(t[31]=o=>Qe({backgroundGradient:Ue.value.backgroundGradient}))},null,544)),[[$e,Ue.value.backgroundGradient]]):ve((l(),i("input",{key:2,"onUpdate:modelValue":t[32]||(t[32]=o=>Ue.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[33]||(t[33]=o=>Qe({backgroundImage:Ue.value.backgroundImage}))},null,544)),[[$e,Ue.value.backgroundImage]])]),e("div",Ss,[t[210]||(t[210]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",$s,[(l(!0),i(oe,null,ue(E(Ol),o=>{var Q;return l(),i("button",{key:o.id,type:"button",class:Y(["canvas-size-card",((Q=L.value)==null?void 0:Q.id)===o.id&&"active"]),onClick:bl=>Mt(o)},[e("span",Es,[e("span",{class:Y(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[201]||(t[201]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",As,k(o.label),1),e("span",Ms,k(o.ratioLabel),1)],10,Is)}),128))]),e("div",Ps,[e("div",Ts,[t[202]||(t[202]=e("span",null,"Custom",-1)),e("span",Bs,"Current ratio "+k(X.value),1)]),e("div",Ns,[e("div",zs,[t[204]||(t[204]=e("label",{class:"form-label"},"Width",-1)),e("div",Ls,[e("input",{type:"number",min:"320",max:"4096",value:y.value.width,class:"input",onChange:t[34]||(t[34]=o=>ct("width",o.target.value))},null,40,js),t[203]||(t[203]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[207]||(t[207]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Ds,[t[206]||(t[206]=e("label",{class:"form-label"},"Height",-1)),e("div",_s,[e("input",{type:"number",min:"320",max:"4096",value:y.value.height,class:"input",onChange:t[35]||(t[35]=o=>ct("height",o.target.value))},null,40,qs),t[205]||(t[205]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",Rs,[ve(e("input",{type:"checkbox","onUpdate:modelValue":t[36]||(t[36]=o=>le.value=o)},null,512),[[_t,le.value]]),t[208]||(t[208]=te(" Maintain proportions ",-1))]),t[209]||(t[209]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[211]||(t[211]=it('<div class="canvas-size-callout" data-v-a86d3495><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-a86d3495><circle cx="12" cy="12" r="9" data-v-a86d3495></circle><path d="M12 10v6" data-v-a86d3495></path><path d="M12 7h.01" data-v-a86d3495></path></svg><span data-v-a86d3495>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",Os,[t[212]||(t[212]=e("div",{class:"panel-title"},"Slide Notes",-1)),ve(e("textarea",{"onUpdate:modelValue":t[37]||(t[37]=o=>Ue.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[38]||(t[38]=o=>dt("notes",Ue.value.notes))},null,544),[[$e,Ue.value.notes]])])])):_.value==="transitions"?(l(),i("div",Fs,[t[218]||(t[218]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((De=p.value)==null?void 0:De.transition)||"none",class:"select",onChange:t[39]||(t[39]=o=>Qe({transition:o.target.value}))},[...t[214]||(t[214]=[it('<option value="none" data-v-a86d3495>None</option><option value="fade" data-v-a86d3495>Fade</option><option value="slide" data-v-a86d3495>Slide</option><option value="zoom" data-v-a86d3495>Zoom</option><option value="flip" data-v-a86d3495>Flip</option>',5)])],40,Us),e("div",Vs,[t[215]||(t[215]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((ze=p.value)==null?void 0:ze.duration)??0,class:"input",onChange:t[40]||(t[40]=o=>St(o.target.value))},null,40,Ws),t[216]||(t[216]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Gs,[e("input",{type:"checkbox",checked:!!((Se=p.value)!=null&&Se.advanceOnMediaEnd),onChange:t[41]||(t[41]=o=>Qe({advanceOnMediaEnd:o.target.checked}))},null,40,Hs),t[217]||(t[217]=te(" Advance when slide media finishes ",-1))]),t[219]||(t[219]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",Ys,[t[225]||(t[225]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",Js,[e("input",{type:"checkbox",checked:b.value.autoPlay,onChange:t[42]||(t[42]=o=>Ye({autoPlay:o.target.checked}))},null,40,Qs),t[220]||(t[220]=te(" Autoplay preview and exported presentation ",-1))]),e("label",Xs,[e("input",{type:"checkbox",checked:b.value.loop,onChange:t[43]||(t[43]=o=>Ye({loop:o.target.checked}))},null,40,Ks),t[221]||(t[221]=te(" Loop back to the first slide at the end ",-1))]),e("label",Zs,[e("input",{type:"checkbox",checked:b.value.showProgress,onChange:t[44]||(t[44]=o=>Ye({showProgress:o.target.checked}))},null,40,er),t[222]||(t[222]=te(" Show progress bar in preview ",-1))]),e("label",tr,[e("input",{type:"checkbox",checked:b.value.showNavControls,onChange:t[45]||(t[45]=o=>Ye({showNavControls:o.target.checked}))},null,40,or),t[223]||(t[223]=te(" Show previous/next and dot navigation ",-1))]),e("label",nr,[e("input",{type:"checkbox",checked:b.value.allowKeyboardNav,onChange:t[46]||(t[46]=o=>Ye({allowKeyboardNav:o.target.checked}))},null,40,lr),t[224]||(t[224]=te(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},Qv=Ze(Jv,[["__scopeId","data-v-a86d3495"]]),Xv={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kv={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zv={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ef={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tf={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},of={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nf={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lf={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},af={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sf={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},rf={key:10,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},df={key:11,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},uf={key:12,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},cf={key:13,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pf={key:14,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vf={key:15,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ff={key:16,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},mf={key:17,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},gf={key:18,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},bf={key:19,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},yf={key:20,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ht={__name:"ToolbarIcon",props:{icon:{type:String,required:!0}},setup(x){return(d,s)=>x.icon==="text"?(l(),i("svg",Xv,[...s[0]||(s[0]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):x.icon==="heading"?(l(),i("svg",Kv,[...s[1]||(s[1]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):x.icon==="image"?(l(),i("svg",Zv,[...s[2]||(s[2]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):x.icon==="shape"?(l(),i("svg",ef,[...s[3]||(s[3]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):x.icon==="button"?(l(),i("svg",tf,[...s[4]||(s[4]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):x.icon==="hotspot"?(l(),i("svg",of,[...s[5]||(s[5]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):x.icon==="video"?(l(),i("svg",nf,[...s[6]||(s[6]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):x.icon==="audio"?(l(),i("svg",lf,[...s[7]||(s[7]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):x.icon==="quiz"?(l(),i("svg",af,[...s[8]||(s[8]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):x.icon==="chart"?(l(),i("svg",sf,[...s[9]||(s[9]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):x.icon==="tabs"?(l(),i("svg",rf,[...s[10]||(s[10]=[e("rect",{x:"2",y:"7",width:"20",height:"13",rx:"2"},null,-1),e("path",{d:"M2 11h20"},null,-1),e("path",{d:"M8 7v4"},null,-1)])])):x.icon==="accordion"?(l(),i("svg",df,[...s[11]||(s[11]=[e("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"},null,-1),e("path",{d:"M3 10h18"},null,-1),e("path",{d:"M3 16h18"},null,-1)])])):x.icon==="flipcard"?(l(),i("svg",uf,[...s[12]||(s[12]=[e("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"},null,-1),e("path",{d:"M3 12h18"},null,-1),e("path",{d:"M21 8h-4"},null,-1)])])):x.icon==="stepper"?(l(),i("svg",cf,[...s[13]||(s[13]=[e("circle",{cx:"6",cy:"12",r:"3"},null,-1),e("circle",{cx:"18",cy:"12",r:"3"},null,-1),e("path",{d:"M9 12h6"},null,-1)])])):x.icon==="poll"?(l(),i("svg",pf,[...s[14]||(s[14]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("path",{d:"M7 10h10"},null,-1),e("path",{d:"M7 14h6"},null,-1)])])):x.icon==="labeledimage"?(l(),i("svg",vf,[...s[15]||(s[15]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"12",cy:"12",r:"2"},null,-1),e("line",{x1:"12",y1:"14",x2:"12",y2:"18"},null,-1)])])):x.icon==="matching"?(l(),i("svg",ff,[...s[16]||(s[16]=[it('<path d="M4 6h4"></path><path d="M4 18h4"></path><path d="M16 6h4"></path><path d="M16 18h4"></path><line x1="8" y1="6" x2="16" y2="18"></line>',5)])])):x.icon==="sorting"?(l(),i("svg",mf,[...s[17]||(s[17]=[e("path",{d:"M3 6h18"},null,-1),e("path",{d:"M7 12h10"},null,-1),e("path",{d:"M10 18h4"},null,-1)])])):x.icon==="cloze"?(l(),i("svg",gf,[...s[18]||(s[18]=[e("path",{d:"M4 12h4"},null,-1),e("path",{d:"M16 12h4"},null,-1),e("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"},null,-1)])])):x.icon==="scenario"?(l(),i("svg",bf,[...s[19]||(s[19]=[e("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},null,-1)])])):x.icon==="progress"?(l(),i("svg",yf,[...s[20]||(s[20]=[e("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null,-1)])])):F("",!0)}},hf={class:"editor-toolbar"},xf={class:"toolbar-group"},wf={key:0,class:"toolbar-divider"},kf=["data-group-name"],Cf=["data-tooltip","onClick"],Sf={class:"tool-label"},$f={key:2,class:"toolbar-group element-group dropdown-container"},If=["onClick"],Ef={class:"tool-label"},Af={style:{"margin-left":"4px"},width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Mf={key:0,class:"dropdown-menu"},Pf=["onClick"],Tf={class:"toolbar-group"},Bf={class:"toolbar-group"},Nf={class:"toolbar-group"},zf={__name:"EditorToolbar",emits:["open-ai-project"],setup(x,{emit:d}){const s=d,c=st();rt();const p=[{id:"basic",name:"Basic",dropdown:!1,tools:[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"placeholder",label:"Placeholder",tooltip:"Add placeholder",icon:"shape"}]},{id:"media",name:"Media",dropdown:!0,icon:"video",tools:[{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"}]},{id:"interactive",name:"Interactive",dropdown:!0,icon:"button",tools:[{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"tabs",label:"Tabs",tooltip:"Add tabs",icon:"tabs"},{id:"accordion",label:"Accordion",tooltip:"Add accordion",icon:"accordion"},{id:"flipcard",label:"Flip Card",tooltip:"Add flip card",icon:"flipcard"},{id:"stepper",label:"Stepper",tooltip:"Add stepper",icon:"stepper"}]},{id:"learning",name:"Learning & Data",dropdown:!0,icon:"quiz",tools:[{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"},{id:"poll",label:"Poll",tooltip:"Add poll",icon:"poll"},{id:"labeledimage",label:"L-Image",tooltip:"Add labeled image",icon:"labeledimage"},{id:"matching",label:"Match",tooltip:"Add matching game",icon:"matching"},{id:"sorting",label:"Sort",tooltip:"Add sorting game",icon:"sorting"},{id:"cloze",label:"Cloze",tooltip:"Fill in blanks",icon:"cloze"},{id:"scenario",label:"Dialog",tooltip:"Scenario chat",icon:"scenario"},{id:"progress",label:"Stats",tooltip:"Track progress",icon:"progress"}]}],b=ref(null);function y(le){b.value===le?b.value=null:b.value=le}function L(le){le.target.closest(".dropdown-container")||(b.value=null)}Xt(()=>document.addEventListener("click",L)),Al(()=>document.removeEventListener("click",L));function X(le){c.setActiveTool(le),b.value=null}return(le,_)=>(l(),i("div",hf,[e("div",xf,[e("button",{class:Y(["tool-btn",E(c).activeTool==="select"&&"active"]),onClick:_[0]||(_[0]=P=>X("select")),"data-tooltip":"Select (V)"},[..._[7]||(_[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),_[14]||(_[14]=e("div",{class:"toolbar-divider"},null,-1)),(l(),i(oe,null,ue(p,(P,fe)=>(l(),i(oe,{key:P.id},[fe>0&&!P.dropdown?(l(),i("div",wf)):F("",!0),P.dropdown?(l(),i("div",$f,[e("button",{class:Y(["tool-btn group-trigger-btn",{active:P.tools.some($=>$.id===E(c).activeTool)}]),onClick:Le($=>y(P.id),["stop"])},[pt(Ht,{icon:P.icon},null,8,["icon"]),e("span",Ef,k(P.name),1),(l(),i("svg",Af,[..._[8]||(_[8]=[e("polyline",{points:"6 9 12 15 18 9"},null,-1)])]))],10,If),E(b)===P.id?(l(),i("div",Mf,[(l(!0),i(oe,null,ue(P.tools,$=>(l(),i("button",{key:$.id,class:Y(["dropdown-item",E(c).activeTool===$.id&&"active"]),onClick:A=>X($.id)},[pt(Ht,{icon:$.icon},null,8,["icon"]),e("span",null,k($.label),1)],10,Pf))),128))])):F("",!0)])):(l(),i("div",{key:1,class:"toolbar-group element-group","data-group-name":P.name},[(l(!0),i(oe,null,ue(P.tools,$=>(l(),i("button",{key:$.id,class:Y(["tool-btn",E(c).activeTool===$.id&&"active"]),"data-tooltip":$.tooltip,onClick:A=>X($.id)},[pt(Ht,{icon:$.icon},null,8,["icon"]),e("span",Sf,k($.label),1)],10,Cf))),128))],8,kf))],64))),64)),_[15]||(_[15]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Tf,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:_[1]||(_[1]=P=>s("open-ai-project")),"data-tooltip":"Create a new AI project"},[..._[9]||(_[9]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),_[16]||(_[16]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Bf,[e("button",{class:"tool-btn",onClick:_[2]||(_[2]=P=>E(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[..._[10]||(_[10]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:_[3]||(_[3]=P=>E(c).zoomReset())},k(Math.round(E(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:_[4]||(_[4]=P=>E(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[..._[11]||(_[11]=[it('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-04c722e0><circle cx="11" cy="11" r="8" data-v-04c722e0></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-04c722e0></line><line x1="11" y1="8" x2="11" y2="14" data-v-04c722e0></line><line x1="8" y1="11" x2="14" y2="11" data-v-04c722e0></line></svg>',1)])])]),_[17]||(_[17]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Nf,[e("button",{class:Y(["tool-btn",E(c).showGrid&&"active"]),onClick:_[5]||(_[5]=P=>E(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[..._[12]||(_[12]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:Y(["tool-btn",E(c).snapToGrid&&"active"]),onClick:_[6]||(_[6]=P=>E(c).toggleSnap()),"data-tooltip":"Snap to grid"},[..._[13]||(_[13]=[it('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-04c722e0><circle cx="5" cy="5" r="1" data-v-04c722e0></circle><circle cx="12" cy="5" r="1" data-v-04c722e0></circle><circle cx="19" cy="5" r="1" data-v-04c722e0></circle><circle cx="5" cy="12" r="1" data-v-04c722e0></circle><circle cx="12" cy="12" r="1" data-v-04c722e0></circle><circle cx="19" cy="12" r="1" data-v-04c722e0></circle><circle cx="5" cy="19" r="1" data-v-04c722e0></circle><circle cx="12" cy="19" r="1" data-v-04c722e0></circle><circle cx="19" cy="19" r="1" data-v-04c722e0></circle></svg>',1)])],2)])]))}},Lf=Ze(zf,[["__scopeId","data-v-04c722e0"]]),jf=["onMousedown"],Df={key:1,class:"selection-border locked-border"},_f={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(x){const d=x,s=st(),c=rt(),p=Ml("canvasScale",D(1)),b=M(()=>s.projectId),y=M(()=>s.currentSlideId),L=M(()=>s.selectedElementIds.includes(d.element.id)),X=M(()=>d.element.locked),le=M(()=>d.element.visible!==!1),_=M(()=>{const ie=d.element.content||{};return!!(ie.text||ie.label||ie.question||ie.popupTitle||ie.popupContent)});let P=!1,fe=0,$=0,A=new Map;function a(ie){if(!s.snapToGrid||!s.gridSize)return ie;const ge=s.gridSize;return Math.round(ie/ge)*ge}function z(ie){var pe;if(X.value||ie.target.classList.contains("resize-handle"))return;const ge=ie.ctrlKey||ie.metaKey||ie.shiftKey;L.value?ge&&s.selectElement(d.element.id,!0):s.selectElement(d.element.id,ge),s.setActiveTool("select"),P=!1,fe=ie.clientX,$=ie.clientY,A.clear();const we=(pe=c.getProject(b.value))==null?void 0:pe.slides.find(be=>be.id===y.value);we&&s.selectedElementIds.forEach(be=>{const re=we.elements.find(N=>N.id===be);re&&!re.locked&&A.set(be,{x:re.x,y:re.y})}),window.addEventListener("mousemove",q),window.addEventListener("mouseup",ce),ie.stopPropagation()}function q(ie){const ge=(ie.clientX-fe)/p.value,we=(ie.clientY-$)/p.value;!P&&(Math.abs(ge)>3||Math.abs(we)>3)&&(P=!0),P&&A.forEach((pe,be)=>{const re=pe.x+ge,N=pe.y+we;c.updateElement(b.value,y.value,be,{x:re,y:N},{persist:!1})})}function ce(ie){if(P){const ge=(ie.clientX-fe)/p.value,we=(ie.clientY-$)/p.value;A.forEach((pe,be)=>{c.updateElement(b.value,y.value,be,{x:a(pe.x+ge),y:a(pe.y+we)},{persist:!1})}),c.commitProject(b.value)}P||!(ie.ctrlKey||ie.metaKey||ie.shiftKey)&&s.selectedElementIds.length>1&&s.selectElement(d.element.id,!1),P=!1,window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",ce)}const H=["n","ne","e","se","s","sw","w","nw"];let m=!1,U="",W=0,Ie=0,V=0,Z=0,ne=0,me=0;function ae(ie,ge){X.value||(ie.stopPropagation(),ie.preventDefault(),m=!0,U=ge,W=ie.clientX,Ie=ie.clientY,V=d.element.width,Z=d.element.height,ne=d.element.x,me=d.element.y,window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",C))}function Ee(ie){if(!m)return;const ge=p.value,we=(ie.clientX-W)/ge,pe=(ie.clientY-Ie)/ge,be=20;let re=ne,N=me,S=V,R=Z;if(U.includes("e")&&(S=Math.max(be,V+we)),U.includes("s")&&(R=Math.max(be,Z+pe)),U.includes("w")){const ke=Math.max(be,V-we);re=ne+(V-ke),S=ke}if(U.includes("n")){const ke=Math.max(be,Z-pe);N=me+(Z-ke),R=ke}if(s.snapToGrid&&s.gridSize){const ke=s.gridSize;S=Math.round(S/ke)*ke,R=Math.round(R/ke)*ke,re=Math.round(re/ke)*ke,N=Math.round(N/ke)*ke}c.updateElement(b.value,y.value,d.element.id,{x:re,y:N,width:S,height:R})}function C(){m=!1,window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",C)}function j(){["text","heading"].includes(d.element.type)&&s.focusPropertiesSection("content")}const O=M(()=>({position:"absolute",left:`${d.element.x}px`,top:`${d.element.y}px`,width:`${d.element.width}px`,height:`${d.element.height}px`,transform:`rotate(${d.element.rotation||0}deg)`,opacity:d.element.opacity??1,zIndex:d.element.zIndex||1,cursor:X.value?"not-allowed":"move",visibility:le.value?"visible":"hidden",userSelect:"none"}));function K(ie){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[ie]||"auto"}function ye(ie="content"){s.focusPropertiesSection(ie)}function Re(){const ie=_.value?"improve":d.element.type==="image"?"image":"generate";s.openAIPanel(ie)}function Te(){const ie=c.duplicateElement(b.value,y.value,d.element.id);ie&&(s.selectElement(ie.id),s.focusPropertiesSection("geometry"))}function Oe(){c.deleteElement(b.value,y.value,d.element.id),s.clearSelection()}return(ie,ge)=>(l(),i("div",{class:Y(["element-wrapper",L.value&&"selected",X.value&&"locked"]),style:xe(O.value),onMousedown:z,onDblclick:j},[Pl(ie.$slots,"default",{},void 0),L.value&&!X.value?(l(),i(oe,{key:0},[ge[6]||(ge[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:ge[3]||(ge[3]=Le(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:ge[0]||(ge[0]=we=>ye("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:ge[1]||(ge[1]=we=>ye("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:ge[2]||(ge[2]=we=>ye("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Re},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Te,title:"Duplicate element","aria-label":"Duplicate element"},[...ge[4]||(ge[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Oe,title:"Delete element","aria-label":"Delete element"},[...ge[5]||(ge[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(oe,null,ue(H,we=>e("div",{key:we,class:Y(["resize-handle",`handle-${we}`]),style:xe({cursor:K(we)}),onMousedown:Le(pe=>ae(pe,we),["stop"])},null,46,jf)),64))],64)):F("",!0),L.value&&X.value?(l(),i("div",Df)):F("",!0)],38))}},qf=Ze(_f,[["__scopeId","data-v-d539ca8b"]]),Yt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,s=M(()=>d.element.content||{}),c=st(),p=rt(),b=D(!1),y=D(null),L=D("");nt(()=>s.value.text,P=>{b.value||(L.value=P||(d.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function X(){c.selectedElementId===d.element.id&&(b.value=!0,kl(()=>{if(y.value)if(y.value.focus(),typeof y.value.setSelectionRange=="function"){const P=y.value.value.length;y.value.setSelectionRange(P,P)}else{const P=document.createRange();P.selectNodeContents(y.value),P.collapse(!1);const fe=window.getSelection();fe.removeAllRanges(),fe.addRange(P)}}))}function le(P){b.value&&P.stopPropagation()}function _(){b.value=!1;const P=L.value;p.updateElement(c.projectId,c.currentSlideId,d.element.id,{content:{...d.element.content,text:P}})}return(P,fe)=>b.value?ve((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:y,"onUpdate:modelValue":fe[0]||(fe[0]=$=>L.value=$),onBlur:_,onMousedown:le,style:xe({fontSize:(s.value.fontSize||16)+"px",fontFamily:s.value.fontFamily||"Inter, sans-serif",fontWeight:s.value.fontWeight||"normal",fontStyle:s.value.fontStyle||"normal",textDecoration:s.value.textDecoration||"none",textAlign:s.value.textAlign||"left",color:s.value.color||"#1a1a2e",lineHeight:s.value.lineHeight||1.5,textTransform:s.value.textTransform||"none",letterSpacing:(s.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[$e,L.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:X,style:xe({fontSize:(s.value.fontSize||16)+"px",fontFamily:s.value.fontFamily||"Inter, sans-serif",fontWeight:s.value.fontWeight||"normal",fontStyle:s.value.fontStyle||"normal",textDecoration:s.value.textDecoration||"none",textAlign:s.value.textAlign||"left",color:s.value.color||"#1a1a2e",lineHeight:s.value.lineHeight||1.5,textTransform:s.value.textTransform||"none",letterSpacing:(s.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},k(L.value),37))}},Rf={key:0,class:"image-status image-loading"},Of=["src","alt"],Ff={key:2,class:"image-placeholder"},Uf={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Vf={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,s=D(""),c=D(0),p=D("idle"),b=M(()=>{var le;return Array.isArray((le=d.element.content)==null?void 0:le.fallbackSrcs)?d.element.content.fallbackSrcs:[]});function y(){var le;s.value=((le=d.element.content)==null?void 0:le.src)||"",c.value=0,p.value=s.value?"loading":"empty"}function L(){p.value="loaded"}function X(){const le=b.value[c.value];if(le){c.value+=1,s.value=le,p.value="loading";return}p.value="error"}return nt(()=>{var le,_;return[(le=d.element.content)==null?void 0:le.src,JSON.stringify(((_=d.element.content)==null?void 0:_.fallbackSrcs)||[])]},()=>y(),{immediate:!0}),(le,_)=>{var P,fe,$;return l(),i("div",{class:"image-element",style:xe({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((P=x.element.content)==null?void 0:P.borderRadius)||0)+"px",border:`${((fe=x.element.content)==null?void 0:fe.borderWidth)||0}px solid ${(($=x.element.content)==null?void 0:$.borderColor)||"transparent"}`})},[p.value==="loading"?(l(),i("div",Rf,[..._[0]||(_[0]=[e("span",{class:"image-status-spinner"},null,-1),e("span",null,"Loading image…",-1)])])):F("",!0),s.value&&p.value!=="error"?(l(),i("img",{key:1,src:s.value,alt:x.element.content.alt||"",style:xe({width:"100%",height:"100%",objectFit:x.element.content.objectFit||"cover",display:p.value==="loaded"?"block":"none"}),draggable:"false",onLoad:L,onError:X},null,44,Of)):F("",!0),p.value==="empty"||p.value==="error"?(l(),i("div",Ff,[(l(),i("svg",Uf,[..._[1]||(_[1]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),e("span",null,k(p.value==="error"?"Image unavailable":"Image"),1)])):F("",!0)],4)}}},Wf=Ze(Vf,[["__scopeId","data-v-cd42b1c3"]]),Gf={class:"shape-element",style:{width:"100%",height:"100%"}},Hf=["width","height"],Yf=["points","fill","stroke","stroke-width"],Jf={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,s=M(()=>d.element.content||{}),c=M(()=>{const y=s.value.shapeType||"rectangle",L={width:"100%",height:"100%",background:s.value.fillColor||"#6c47ff",border:`${s.value.borderWidth||0}px solid ${s.value.borderColor||"transparent"}`,opacity:s.value.opacity??1};return y==="circle"?{...L,borderRadius:"50%"}:y==="rectangle"?{...L,borderRadius:(s.value.borderRadius||0)+"px"}:L}),p=M(()=>["triangle","star","arrow","diamond"].includes(s.value.shapeType)),b=M(()=>{const y=d.element.width||150,L=d.element.height||100,X=s.value.shapeType;if(X==="triangle")return`${y/2},0 ${y},${L} 0,${L}`;if(X==="diamond")return`${y/2},0 ${y},${L/2} ${y/2},${L} 0,${L/2}`;if(X==="arrow")return`0,${L*.3} ${y*.6},${L*.3} ${y*.6},0 ${y},${L/2} ${y*.6},${L} ${y*.6},${L*.7} 0,${L*.7}`;if(X==="star"){const le=y/2,_=L/2,P=Math.min(y,L)/2,fe=P*.4;let $="";for(let A=0;A<10;A++){const a=(A*36-90)*Math.PI/180,z=A%2===0?P:fe;$+=`${le+z*Math.cos(a)},${_+z*Math.sin(a)} `}return $.trim()}return""});return(y,L)=>(l(),i("div",Gf,[p.value?(l(),i("svg",{key:1,width:x.element.width,height:x.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:b.value,fill:s.value.fillColor||"#6c47ff",stroke:s.value.borderColor||"none","stroke-width":s.value.borderWidth||0},null,8,Yf)],8,Hf)):(l(),i("div",{key:0,style:xe(c.value)},null,4))]))}},Qf={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,s=M(()=>d.element.content||{}),c=M(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},b=p[s.value.variant||"primary"]||p.primary;return{...b,background:s.value.bgColor||b.background,color:s.value.textColor||b.color,border:s.value.borderColor?`1px solid ${s.value.borderColor}`:b.border,borderRadius:(s.value.borderRadius??8)+"px"}});return(p,b)=>(l(),i("div",{class:"button-element",style:xe({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(s.value.fontSize??15)+"px",fontWeight:s.value.fontWeight??600,letterSpacing:(s.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:s.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},k(s.value.label||"Button"),5))}},Xf={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Kf={class:"popup-header"},Zf={class:"popup-body"},e1={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,s=M(()=>d.element.content||{}),c=D(!1);function p(b){b.stopPropagation(),c.value=!c.value}return(b,y)=>(l(),i("div",Xf,[e("div",{class:"hotspot-btn",style:xe({width:"100%",height:"100%",background:s.value.bgColor||"#6c47ff",borderRadius:(s.value.borderRadius??999)>=999?"50%":(s.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:s.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Le(p,["stop"])},k(s.value.icon||"?"),5),pt(Dt,{name:"fade"},{default:vt(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:xe({background:s.value.popupBgColor||"#ffffff",color:s.value.popupTextColor||"#1a1a2e"})},[e("div",Kf,[e("strong",null,k(s.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:y[0]||(y[0]=Le(L=>c.value=!1,["stop"]))},"×")]),e("div",Zf,k(s.value.popupContent||"Add your content in the properties panel."),1)],4)):F("",!0)]),_:1})]))}},t1=Ze(e1,[["__scopeId","data-v-ef5f15f6"]]),o1={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},n1=["src"],l1=["src","poster","autoplay","controls","loop","muted"],i1={key:2,class:"video-placeholder"},a1={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},s1={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,s=M(()=>d.element.content||{}),c=M(()=>{const b=s.value.src||"";return b.includes("youtube")||b.includes("youtu.be")}),p=M(()=>{var y,L;const b=s.value.src||"";if(c.value){const X=(y=b.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:y[1];return X?`https://www.youtube.com/embed/${X}`:""}if(b.includes("vimeo.com")){const X=(L=b.match(/vimeo\.com\/(\d+)/))==null?void 0:L[1];return X?`https://player.vimeo.com/video/${X}`:""}return""});return(b,y)=>(l(),i("div",o1,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,n1)):s.value.src&&!p.value?(l(),i("video",{key:1,src:s.value.src,poster:s.value.poster,autoplay:s.value.autoplay,controls:s.value.controls!==!1,loop:s.value.loop,muted:s.value.muted,style:xe({width:"100%",height:"100%",objectFit:s.value.objectFit||"cover"})},null,12,l1)):(l(),i("div",i1,[(l(),i("svg",a1,[...y[0]||(y[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),y[1]||(y[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},r1=Ze(s1,[["__scopeId","data-v-dfea1a16"]]),d1=["stroke"],u1=["src","controls","autoplay","loop"],c1={key:1,style:{"font-size":"11px",color:"#aaa"}},p1={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(x){return(d,s)=>{var c,p,b,y,L,X,le,_,P;return l(),i("div",{class:"audio-element",style:xe({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=x.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=x.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((b=x.element.content)==null?void 0:b.accentColor)||"#6c47ff","stroke-width":"2"},[...s[1]||(s[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,d1)),e("span",{style:xe({fontSize:"13px",color:((y=x.element.content)==null?void 0:y.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},k(((L=x.element.content)==null?void 0:L.label)||"Audio Player"),5),(X=x.element.content)!=null&&X.src?(l(),i("audio",{key:0,src:x.element.content.src,controls:((le=x.element.content)==null?void 0:le.controls)!==!1,autoplay:(_=x.element.content)==null?void 0:_.autoplay,loop:(P=x.element.content)==null?void 0:P.loop,style:{height:"28px","max-width":"180px"},onMousedown:s[0]||(s[0]=Le(()=>{},["stop"]))},null,40,u1)):(l(),i("span",c1,"No source"))],4)}}},v1={class:"quiz-options"},f1=["onClick"],m1={class:"opt-letter"},g1={class:"opt-text"},b1={key:0},y1={class:"quiz-actions"},h1=["disabled"],x1={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,s=M(()=>d.element.content||{}),c=D(null),p=D(!1);function b(le){p.value||(c.value=le)}function y(){c.value!==null&&(p.value=!0)}function L(){c.value=null,p.value=!1}const X=M(()=>p.value&&c.value===(s.value.correctIndex??0));return(le,_)=>(l(),i("div",{class:"quiz-element",style:xe({width:"100%",height:"100%",background:s.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":s.value.accentColor||"#6c47ff"})},[e("p",{style:xe({fontSize:"15px",fontWeight:600,color:s.value.questionColor||"#1a1a2e",lineHeight:1.4})},k(s.value.question||"Question text…"),5),e("div",v1,[(l(!0),i(oe,null,ue(s.value.options||[],(P,fe)=>(l(),i("div",{key:fe,class:Y(["quiz-opt",c.value===fe&&"selected",p.value&&fe===s.value.correctIndex&&"correct",p.value&&c.value===fe&&fe!==s.value.correctIndex&&"wrong"]),onClick:$=>b(fe)},[e("span",m1,k(String.fromCharCode(65+fe)),1),e("span",g1,k(P),1)],10,f1))),128))]),p.value?(l(),i("div",{key:0,class:Y(["quiz-feedback",X.value?"correct":"wrong"])},[te(k(X.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!X.value&&s.value.explanation?(l(),i("span",b1,k(s.value.explanation),1)):F("",!0)],2)):F("",!0),e("div",y1,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:L},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:y},"Submit",8,h1))])],4))}},w1=Ze(x1,[["__scopeId","data-v-ca2bd187"]]),k1={class:"placeholder-element"},C1={class:"placeholder-prompt"},S1={__name:"PlaceholderElement",props:{element:Object},setup(x){const d=x,s=st(),c=rt();function p(b){let y={type:b};b==="text"?y.content={text:"Click to edit text",fontSize:24}:b==="image"?y.content={src:"",alt:"Image placeholder"}:b==="video"?y.content={src:"",autoplay:!1,controls:!0}:b==="chart"&&(y.content={chartType:"bar",dataText:`A, 10
B, 20`}),c.updateElement(s.projectId,s.currentSlideId,d.element.id,y),s.selectElement(d.element.id)}return(b,y)=>{var L;return l(),i("div",k1,[e("div",C1,k(((L=x.element.content)==null?void 0:L.prompt)||"Add Content"),1),e("div",{class:"placeholder-actions",onMousedown:y[4]||(y[4]=Le(()=>{},["stop"]))},[e("button",{onMousedown:y[0]||(y[0]=Le(X=>p("text"),["stop","prevent"])),title:"Text"},"T",32),e("button",{onMousedown:y[1]||(y[1]=Le(X=>p("image"),["stop","prevent"])),title:"Image"},"I",32),e("button",{onMousedown:y[2]||(y[2]=Le(X=>p("video"),["stop","prevent"])),title:"Media"},"M",32),e("button",{onMousedown:y[3]||(y[3]=Le(X=>p("chart"),["stop","prevent"])),title:"Chart"},"C",32)],32)])}}},$1=Ze(S1,[["__scopeId","data-v-dda6b3cc"]]),I1={key:0,class:"canvas-empty"},E1={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},A1={key:0,class:"canvas-device-frame","aria-hidden":"true"},M1=["value"],P1={class:"canvas-guide-label"},T1={key:5,class:"drop-hint"},B1={class:"canvas-info-bar"},N1=["disabled"],z1={class:"slide-index"},L1=["disabled"],j1={key:0},D1={__name:"EditorCanvas",setup(x){const d=st(),s=rt(),c=D(null),p=D(null),b=D(1),y=M(()=>b.value*d.zoomLevel);Bl("canvasScale",y);const L=M(()=>s.getProject(d.projectId)),X=M(()=>qt(L.value)),le=M(()=>Sl(L.value)),_=M(()=>X.value.width),P=M(()=>X.value.height),fe=M(()=>$l(_.value,P.value)),$=M(()=>{var g,w;return(w=(g=L.value)==null?void 0:g.slides)==null?void 0:w.find(ee=>ee.id===d.currentSlideId)}),A=M(()=>{var g;return[...((g=L.value)==null?void 0:g.slides)||[]].sort((w,ee)=>w.order-ee.order)}),a=M(()=>A.value.findIndex(g=>g.id===d.currentSlideId)),z=M(()=>{var g;return{autoPlay:!1,motionPresets:[],...((g=L.value)==null?void 0:g.settings)||{}}}),q=M(()=>(Array.isArray(z.value.motionPresets)?z.value.motionPresets:[]).filter(g=>g.scope==="group")),ce=M(()=>{const g=new Set(d.selectedElementIds);return Ie.value.filter(w=>g.has(w.id))}),H=D(""),m=M(()=>$.value?$.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:z.value.autoPlay&&Number($.value.duration||0)>0?{label:`Auto ${Number($.value.duration).toFixed(Number($.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function U(){const g=q.value.find(ee=>ee.id===H.value);if(!g||!ce.value.length)return;[...ce.value].sort((ee,G)=>(ee.y||0)!==(G.y||0)?(ee.y||0)-(G.y||0):(ee.x||0)-(G.x||0)).forEach((ee,G)=>{if(g.type==="auto"){s.updateElement(d.projectId,d.currentSlideId,ee.id,{animations:[]});return}s.updateElement(d.projectId,d.currentSlideId,ee.id,{animations:[{type:g.type,delay:Math.max(0,Number(g.delay)||0)+G*Math.max(0,Number(g.stepDelay)||0),duration:Math.max(.1,Number(g.duration)||.72)}]})}),s.updateProject(d.projectId,{settings:{...z.value,motionPresets:(z.value.motionPresets||[]).map(ee=>ee.id===g.id?{...ee,usageCount:Math.max(0,Number(ee.usageCount||0))+1,lastUsedAt:Date.now()}:ee)}})}function W(){if(!q.value.length){H.value="";return}q.value.some(g=>g.id===H.value)||(H.value=q.value[0].id)}const Ie=M(()=>{var g;return[...((g=$.value)==null?void 0:g.elements)||[]].sort((w,ee)=>(w.zIndex||0)-(ee.zIndex||0))}),V=M(()=>{const g=$.value;return g?g.backgroundType==="gradient"&&g.backgroundGradient?{background:g.backgroundGradient}:g.backgroundType==="image"&&g.backgroundImage?{backgroundImage:`url(${g.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:g.background||"#fff"}:{background:"#fff"}}),Z=M(()=>`scale(${y.value})`);function ne(){if(!c.value)return;const{clientWidth:g,clientHeight:w}=c.value,ee=(g-80)/_.value,G=(w-80)/P.value;b.value=Math.min(ee,G,1)}let me=null;Xt(()=>{ne(),me=new ResizeObserver(ne),c.value&&me.observe(c.value),W()}),xl(()=>me==null?void 0:me.disconnect()),nt(q,()=>{W()},{deep:!0,immediate:!0}),nt(X,()=>{ne()},{deep:!0});const ae=D({x:0,y:0}),Ee=D({x:0,y:0}),C=D(!1),j=D(!1),O=D(!1),K=D(null),ye=M(()=>{var g,w;return((g=le.value)==null?void 0:g.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=le.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),Re=M(()=>{if(!ye.value)return null;if(ye.value.tone==="mobile"){const ee=_.value*.08,G=P.value*.05;return{x:ee,y:G,width:_.value-ee*2,height:P.value-G*2}}const g=_.value*.08,w=P.value*.08;return{x:g,y:w,width:_.value-g*2,height:P.value-w*2}}),Te=M(()=>{if(!Re.value)return[];const g=Re.value;return Ie.value.filter(w=>w.visible!==!1).filter(w=>{const ee=Number(w.x||0),G=Number(w.y||0),Pe=ee+Number(w.width||0),Ne=G+Number(w.height||0);return ee<g.x||G<g.y||Pe>g.x+g.width||Ne>g.y+g.height}).map(w=>w.id)}),Oe=M(()=>d.selectedElementIds.filter(g=>Te.value.includes(g)).length),ie=M(()=>Te.value.length),ge=M(()=>!ye.value||!ie.value?null:Oe.value?`${Oe.value} selected ${Oe.value===1?"element is":"elements are"} outside the ${ye.value.label.toLowerCase()}.`:`${ie.value} ${ie.value===1?"element is":"elements are"} outside the ${ye.value.label.toLowerCase()}.`),we=M(()=>{if(!C.value)return null;const g=Math.min(ae.value.x,Ee.value.x),w=Math.min(ae.value.y,Ee.value.y),ee=Math.abs(Ee.value.x-ae.value.x),G=Math.abs(Ee.value.y-ae.value.y);return{x:g,y:w,width:ee,height:G}});function pe(g){!C.value&&(g.target===p.value||g.target===g.currentTarget)&&d.clearSelection()}function be(g){return g?Array.from(g.files||[]).some(w=>w.type.startsWith("image/")):!1}function re(g){return g?Array.from(g.types||[]).includes(Jt):!1}function N(g,w,ee){return Math.min(Math.max(g,w),ee)}function S(g,w,ee){const G=Qt(g),Pe=N(w-G.width/2,0,Math.max(0,_.value-G.width)),Ne=N(ee-G.height/2,0,Math.max(0,P.value-G.height));return{x:Pe,y:Ne,bounds:G}}function R(g){if(!re(g))return null;try{const w=g.getData(Jt),ee=w?JSON.parse(w):null;return ee!=null&&ee.id&&s.getContentBlocks(d.projectId).find(G=>G.id===ee.id)||null}catch{return null}}function ke(g,w,ee){if(!p.value||!ee){K.value=null;return}const G=p.value.getBoundingClientRect(),Pe=(g-G.left)/y.value,Ne=(w-G.top)/y.value,We=S(ee,Pe,Ne);K.value={block:ee,x:We.x,y:We.y,bounds:We.bounds}}function Ge(g,w,ee){if(!g||!g.type.startsWith("image/"))return;const G=new FileReader;G.onload=()=>{const Pe=String(G.result||"");if(!Pe)return;const Ne=new Image;Ne.onload=()=>{const We=p.value.getBoundingClientRect(),Xe=(w-We.left)/y.value,de=(ee-We.top)/y.value,Ve=Math.min(420/Ne.width,280/Ne.height,1),je=Math.max(120,Math.round(Ne.width*Ve)),Je=Math.max(80,Math.round(Ne.height*Ve)),ht=Math.max(0,Math.min(_.value-je,Math.round(Xe-je/2))),gt=Math.max(0,Math.min(P.value-Je,Math.round(de-Je/2))),kt=s.addElement(d.projectId,d.currentSlideId,"image",{x:ht,y:gt,width:je,height:Je,content:{src:Pe,alt:g.name,objectFit:"cover"}});kt&&(d.selectElement(kt.id),d.setActiveTool("select"),d.setRightPanel("properties"))},Ne.src=Pe},G.readAsDataURL(g)}function He(g){const w=be(g.dataTransfer),ee=re(g.dataTransfer);!w&&!ee||(g.preventDefault(),g.dataTransfer.dropEffect="copy",j.value=w,O.value=ee,ee&&ke(g.clientX,g.clientY,R(g.dataTransfer)))}function h(g){var w;(w=g.currentTarget)!=null&&w.contains(g.relatedTarget)||(j.value=!1,O.value=!1,K.value=null)}function Ae(g){const w=be(g.dataTransfer),ee=re(g.dataTransfer);if(!w&&!ee)return;if(g.preventDefault(),j.value=!1,O.value=!1,K.value=null,ee){try{const Pe=R(g.dataTransfer);if(!Pe)return;const Ne=p.value.getBoundingClientRect(),We=(g.clientX-Ne.left)/y.value,Xe=(g.clientY-Ne.top)/y.value,de=S(Pe,We,Xe),Me=s.insertContentBlock(d.projectId,d.currentSlideId,Pe.id,{x:de.x,y:de.y});Me.length&&(d.setSelection(Me.map(lt=>lt.id)),d.setActiveTool("select"),d.focusPropertiesSection("content"))}catch(Pe){console.warn("Failed to drop block onto canvas.",Pe)}return}const G=Array.from(g.dataTransfer.files||[]).find(Pe=>Pe.type.startsWith("image/"));G&&Ge(G,g.clientX,g.clientY)}function Fe(g){if(ce.value.length<2)return;const w=[...ce.value].sort((de,Me)=>(de.zIndex||0)-(Me.zIndex||0)),ee=Math.min(...w.map(de=>Number(de.x||0))),G=Math.min(...w.map(de=>Number(de.y||0))),Pe=Math.max(...w.map(de=>Number(de.x||0)+Number(de.width||0))),Ne=Math.max(...w.map(de=>Number(de.y||0)+Number(de.height||0))),We=ee+(Pe-ee)/2,Xe=G+(Ne-G)/2;if(g==="align-left"&&w.forEach(de=>s.updateElement(d.projectId,d.currentSlideId,de.id,{x:ee},{persist:!1})),g==="align-center"&&w.forEach(de=>{const Me=Number(de.width||0);s.updateElement(d.projectId,d.currentSlideId,de.id,{x:We-Me/2},{persist:!1})}),g==="align-right"&&w.forEach(de=>{const Me=Number(de.width||0);s.updateElement(d.projectId,d.currentSlideId,de.id,{x:Pe-Me},{persist:!1})}),g==="align-top"&&w.forEach(de=>s.updateElement(d.projectId,d.currentSlideId,de.id,{y:G},{persist:!1})),g==="align-middle"&&w.forEach(de=>{const Me=Number(de.height||0);s.updateElement(d.projectId,d.currentSlideId,de.id,{y:Xe-Me/2},{persist:!1})}),g==="align-bottom"&&w.forEach(de=>{const Me=Number(de.height||0);s.updateElement(d.projectId,d.currentSlideId,de.id,{y:Ne-Me},{persist:!1})}),g==="distribute-horizontal"){const de=[...w].sort((je,Je)=>(je.x||0)-(Je.x||0)),Me=de.reduce((je,Je)=>je+Number(Je.width||0),0),lt=de.length>1?(Pe-ee-Me)/(de.length-1):0;let Ve=ee;de.forEach(je=>{s.updateElement(d.projectId,d.currentSlideId,je.id,{x:Ve},{persist:!1}),Ve+=Number(je.width||0)+lt})}if(g==="distribute-vertical"){const de=[...w].sort((je,Je)=>(je.y||0)-(Je.y||0)),Me=de.reduce((je,Je)=>je+Number(Je.height||0),0),lt=de.length>1?(Ne-G-Me)/(de.length-1):0;let Ve=G;de.forEach(je=>{s.updateElement(d.projectId,d.currentSlideId,je.id,{y:Ve},{persist:!1}),Ve+=Number(je.height||0)+lt})}s.commitProject(d.projectId)}function Ue(g){const w=d.activeTool;if(g.target!==p.value&&g.target!==g.currentTarget)return;g.preventDefault(),g.stopPropagation();const ee=p.value.getBoundingClientRect(),G=(g.clientX-ee.left)/y.value,Pe=(g.clientY-ee.top)/y.value;if(w==="select"){C.value=!0,ae.value={x:G,y:Pe},Ee.value={x:G,y:Pe};const Xe=Me=>{Ee.value={x:(Me.clientX-ee.left)/y.value,y:(Me.clientY-ee.top)/y.value}},de=()=>{window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseup",de);const Me=we.value;if(Me&&(Me.width>2||Me.height>2)){const lt=Ie.value.filter(Ve=>{const je=Ve.x,Je=Ve.y,ht=Ve.width||100,gt=Ve.height||100;return je<Me.x+Me.width&&je+ht>Me.x&&Je<Me.y+Me.height&&Je+gt>Me.y}).map(Ve=>Ve.id);lt.length>0?d.setSelection(lt):d.clearSelection()}else d.clearSelection();setTimeout(()=>{C.value=!1},0)};window.addEventListener("mousemove",Xe),window.addEventListener("mouseup",de);return}const Ne=Xe=>d.snapToGrid?Math.round(Xe/d.gridSize)*d.gridSize:Xe,We=s.addElement(d.projectId,d.currentSlideId,w,{x:Ne(G-75),y:Ne(Pe-40)});We&&(d.selectElement(We.id),d.setActiveTool("select"),d.setRightPanel("properties"))}const Qe=M(()=>{if(!d.showGrid)return{};const g=d.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${g}px ${g}px`}}),Ye={text:Yt,heading:Yt,image:Wf,shape:Jf,button:Qf,hotspot:t1,video:r1,audio:p1,quiz:w1,chart:ai,tabs:ii,accordion:li,flipcard:ni,stepper:oi,poll:ti,labeledimage:ei,matching:Zl,sorting:Kl,cloze:Xl,scenario:Ql,progress:Jl,placeholder:$1,divider:"div"};function Mt(g){return Ye[g]||Yt}function ct(g){var w,ee;return g.type!=="divider"?{}:{borderTop:`${((w=g.content)==null?void 0:w.thickness)||2}px solid ${((ee=g.content)==null?void 0:ee.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const _e=D({show:!1,x:0,y:0,elId:null});function ft(g,w){g.preventDefault(),_e.value={show:!0,x:g.clientX,y:g.clientY,elId:w},d.selectElement(w),setTimeout(()=>window.addEventListener("click",et,{once:!0}),0)}function et(){_e.value.show=!1}function At(){if(_e.value.elId){const g=s.duplicateElement(d.projectId,d.currentSlideId,_e.value.elId);g&&d.selectElement(g.id)}et()}function Pt(){_e.value.elId&&(s.deleteElement(d.projectId,d.currentSlideId,_e.value.elId),d.clearSelection()),et()}function Tt(){_e.value.elId&&s.reorderElement(d.projectId,d.currentSlideId,_e.value.elId,"up"),et()}function Bt(){_e.value.elId&&s.reorderElement(d.projectId,d.currentSlideId,_e.value.elId,"down"),et()}function Nt(){const g=a.value,w=s.addSlide(d.projectId,g);w&&d.setCurrentSlide(w.id)}function zt(){const g=a.value;g>0&&d.setCurrentSlide(A.value[g-1].id)}function mt(){const g=a.value;g<A.value.length-1&&d.setCurrentSlide(A.value[g+1].id)}return(g,w)=>{var ee;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[$.value?(l(),i(oe,{key:1},[e("div",{class:Y(["canvas-zoom-wrapper",[ye.value&&`canvas-zoom-wrapper-${ye.value.tone}`]]),style:xe({transform:Z.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:xe({width:_.value+"px",height:P.value+"px",...V.value,...Qe.value}),onClick:pe,onMousedown:Ue,onDragover:He,onDragleave:h,onDrop:Ae,onContextmenu:w[3]||(w[3]=Le(()=>{},["prevent"]))},[ye.value?(l(),i("div",A1)):F("",!0),E(d).multiSelection&&q.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=Le(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),ve(e("select",{"onUpdate:modelValue":w[0]||(w[0]=G=>H.value=G),class:"selection-preset-select"},[(l(!0),i(oe,null,ue(q.value,G=>(l(),i("option",{key:G.id,value:G.id},k(G.name),9,M1))),128))],512),[[jt,H.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Le(U,["stop"])},"Apply")],32)):F("",!0),ge.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=Le(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,k(ge.value),1)],32)):F("",!0),K.value?(l(),i("div",{key:3,class:"block-drop-preview",style:xe({left:`${K.value.x}px`,top:`${K.value.y}px`,width:`${K.value.bounds.width}px`,height:`${K.value.bounds.height}px`})},[(l(!0),i(oe,null,ue(K.value.block.elements,(G,Pe)=>{var Ne,We,Xe,de;return l(),i("div",{key:`${K.value.block.id}-preview-${Pe}`,class:Y(["block-drop-preview-el",`block-drop-preview-${G.type}`]),style:xe({left:`${Number(G.x||0)-K.value.bounds.minX}px`,top:`${Number(G.y||0)-K.value.bounds.minY}px`,width:`${Number(G.width||0)}px`,height:`${Number(G.height||0)}px`,borderRadius:G.type==="shape"&&((Ne=G.content)==null?void 0:Ne.shapeType)==="circle"?"50%":`${Number(((We=G.content)==null?void 0:We.borderRadius)||12)}px`,background:G.type==="shape"?((Xe=G.content)==null?void 0:Xe.fillColor)||"rgba(108,71,255,.18)":G.type==="button"?((de=G.content)==null?void 0:de.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(G.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(G.type)?(l(),i(oe,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):F("",!0)],6)}),128))],4)):F("",!0),(l(!0),i(oe,null,ue(Ie.value,G=>(l(),ot(qf,{key:G.id,element:G,onContextmenu:Le(Pe=>ft(Pe,G.id),["stop"])},{default:vt(()=>[(l(),ot(Tl(Mt(G.type)),{element:G,style:xe(G.type==="divider"?ct(G):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),ye.value?(l(),i("div",{key:4,class:Y(["canvas-guide",[`canvas-guide-${ye.value.tone}`,ie.value&&"canvas-guide-warning-state"]]),style:xe(ye.value.style),"aria-hidden":"true"},[e("span",P1,k(ye.value.label)+" · "+k(fe.value),1)],6)):F("",!0),E(d).activeTool!=="select"||j.value||O.value?(l(),i("div",T1,k(O.value?"Drop block to insert it here":j.value?"Drop image to insert it on this slide":`Click anywhere to add ${E(d).activeTool}`),1)):F("",!0),C.value&&we.value?(l(),i("div",{key:6,class:"selection-marquee",style:xe({left:we.value.x+"px",top:we.value.y+"px",width:we.value.width+"px",height:we.value.height+"px"})},null,4)):F("",!0)],36)],6),e("div",B1,[e("button",{class:"bar-btn",onClick:Nt},"Add page"),e("button",{class:"bar-btn icon",onClick:zt,disabled:a.value<=0},"◀",8,N1),e("span",z1,k(a.value+1)+" / "+k(A.value.length),1),e("button",{class:"bar-btn icon",onClick:mt,disabled:a.value>=A.value.length-1},"▶",8,L1),e("span",null,k(_.value)+" × "+k(P.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,k(((ee=$.value.elements)==null?void 0:ee.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:Y(["playback-badge",`playback-badge-${m.value.tone}`])},k(m.value.label),3),E(d).hasSelection?(l(),i("span",j1,"· "+k(E(d).selectedElementIds.length)+" selected",1)):F("",!0),E(d).multiSelection?(l(),i(oe,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=G=>Fe("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=G=>Fe("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=G=>Fe("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=G=>Fe("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=G=>Fe("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=G=>Fe("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=G=>Fe("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=G=>Fe("distribute-vertical"))},"Space V")],64)):F("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=G=>E(d).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",I1,[(l(),i("svg",E1,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),ot(wl,{to:"body"},[_e.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:xe({left:_e.value.x+"px",top:_e.value.y+"px"})},[e("button",{class:"ctx-item",onClick:At},"Duplicate"),e("button",{class:"ctx-item",onClick:Tt},"Bring Forward"),e("button",{class:"ctx-item",onClick:Bt},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Pt},"Delete")],4)):F("",!0)]))],512)}}},_1=Ze(D1,[["__scopeId","data-v-c34e22ca"]]),q1={class:"ai-panel"},R1={class:"ai-mode-tabs"},O1=["onClick"],F1={class:"ai-content"},U1={class:"form-group"},V1={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},W1={key:0,class:"form-group"},G1={key:1,class:"form-group"},H1={class:"layout-label-row"},Y1={class:"layout-current-hint"},J1={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},Q1=["onClick"],X1={class:"layout-preset-title"},K1={class:"layout-preset-hint"},Z1={key:2,class:"form-group"},em={key:3,class:"form-group"},tm={class:"layout-label-row"},om={class:"layout-current-hint"},nm={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},lm={key:4,class:"form-group"},im={class:"layout-label-row"},am={class:"layout-current-hint"},sm={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},rm=["onClick"],dm={class:"layout-preset-title"},um={class:"layout-preset-hint"},cm={class:"form-group"},pm={class:"form-group"},vm={class:"prompt-label-row"},fm={key:1,class:"prompt-auto-badge"},mm={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},gm={key:6,class:"selected-source-card"},bm={class:"result-header"},ym={class:"source-count-badge"},hm={class:"selected-source-preview"},xm={class:"selected-source-actions"},wm=["disabled"],km=["disabled"],Cm={key:0,class:"spinner"},Sm={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$m={key:7,class:"creative-options-wrap"},Im={class:"result-header"},Em={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Am={key:1,class:"creative-options-list"},Mm={class:"creative-title"},Pm={class:"creative-angle"},Tm=["onClick"],Bm={class:"form-group"},Nm={class:"quiz-config-row"},zm={class:"form-group",style:{flex:"1"}},Lm={class:"form-group",style:{flex:"1"}},jm={class:"form-group"},Dm={class:"qtype-btns"},_m=["onClick"],qm={class:"qtype-icon"},Rm={class:"form-group"},Om={class:"form-group"},Fm={class:"prompt-label-row"},Um={key:1,class:"prompt-auto-badge"},Vm=["disabled"],Wm={key:0,class:"spinner"},Gm={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Hm={key:0,class:"quiz-results"},Ym={class:"quiz-results-header"},Jm={class:"form-label"},Qm={class:"quiz-header-actions"},Xm={class:"regen-row"},Km=["disabled"],Zm={key:0,class:"spinner spinner-sm"},eg={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},tg=["disabled"],og={class:"quiz-card-header"},ng={class:"quiz-card-check"},lg=["onUpdate:modelValue"],ig={class:"q-num"},ag={class:"q-badges"},sg={class:"badge type-badge"},rg={class:"q-question"},dg={class:"q-options"},ug={class:"q-option-letter"},cg={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},pg={key:0,class:"q-explanation"},vg=["disabled"],fg={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},mg=["disabled"],gg={key:0,class:"spinner"},bg={key:0,class:"selected-text-preview"},yg={class:"text-preview"},hg={key:1,class:"ai-hint"},xg={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},wg=["disabled"],kg={key:0,class:"spinner"},Cg={key:0,class:"selected-text-preview"},Sg={class:"text-preview"},$g={key:1,class:"ai-hint"},Ig={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},Eg=["disabled"],Ag={key:0,class:"spinner"},Mg={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Pg={class:"result-header"},Tg={class:"result-actions"},Bg=["disabled"],Ng={class:"textarea result-display"},zg={key:0,class:"demo-notice",style:{"margin-bottom":"var(--space-3)"}},Lg={key:1,class:"ai-error",style:{"margin-bottom":"var(--space-3)"}},jg={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dg=["disabled"],_g={key:0,class:"spinner"},qg={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Rg={class:"textarea result-display",style:{color:"var(--color-primary)"}},Og={key:6,class:"ai-settings"},Fg={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Ug=["value"],Vg={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Wg=["value","placeholder"],Gg={class:"form-hint"},Hg={key:0,class:"demo-notice"},Yg={key:1,class:"demo-notice"},Jg={key:7,class:"result-area"},Qg={class:"result-header"},Xg={class:"result-pre"},Kg={class:"result-actions"},Zg=["disabled"],eb={key:8,class:"ai-error"},tb={__name:"AIAssistant",setup(x){const d=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"cloze",label:"Fill-in-the-Blank",hint:"Interactive fill-in-the-blank text.",promptHint:"Create an interactive fill-in-the-blank activity. Provide a paragraph with a few key words wrapped in [brackets] to indicate blanks.",schema:'{ "layout": "cloze", "title": "...", "subtitle": "...", "callout": "...", "cloze": { "text": "A sentence about the topic where the [key word] is in brackets." } }'},{id:"scenario",label:"Scenario",hint:"Branching scenario with choices.",promptHint:"Create a branching scenario. Provide a starting situation from the agent, and 2-3 potential responses from the user.",schema:'{ "layout": "scenario", "title": "...", "subtitle": "...", "callout": "...", "scenario": { "agentMessage": "...", "userOptions": ["..."] } }'},{id:"progress",label:"Progress",hint:"A step-by-step progress indicator.",promptHint:"Create a progress overview representing the users current learning status. Provide realistic mock values.",schema:'{ "layout": "progress", "title": "...", "subtitle": "...", "callout": "...", "progress": { "level": 4, "xp": 350, "percent": 65 } }'},{id:"poll",label:"Poll",hint:"An interactive poll or survey.",promptHint:"Create an interactive poll question with 3-4 options. Provide realistic mock vote counts.",schema:'{ "layout": "poll", "title": "...", "subtitle": "...", "callout": "...", "poll": { "question": "...", "options": [{ "text": "...", "votes": 12 }] } }'},{id:"matching",label:"Matching",hint:"A drag-and-drop matching activity.",promptHint:"Create a matching activity with 3-4 pairs of related concepts (e.g. term and definition).",schema:'{ "layout": "matching", "title": "...", "subtitle": "...", "callout": "...", "matching": { "pairs": [{ "left": "...", "right": "..." }] } }'},{id:"sorting",label:"Sorting",hint:"A sorting activity.",promptHint:"Create an activity where items need to be sorted into correct order. Provide the items in random order.",schema:'{ "layout": "sorting", "title": "...", "subtitle": "...", "callout": "...", "sorting": { "items": [{ "text": "...", "correctOrder": 0 }] } }'},{id:"labeledimage",label:"Labeled Image",hint:"An image with interactive hotspots.",promptHint:"Define 2-3 standard hotspots (x, y percentages) with labels and descriptions over a concept.",schema:'{ "layout": "labeledimage", "title": "...", "subtitle": "...", "callout": "...", "labeledimage": { "markers": [{ "x": 25, "y": 35, "label": "1", "title": "...", "description": "..." }] } }'}],s={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(r,n="classic"){const v=String(r||n||"classic").trim().toLowerCase();return d.some(I=>I.id===v)?v:n}function p(r,n=""){return String(r??n).replace(/^\s*[-•]\s*/,"").trim()||n}function b(r){return(Array.isArray(r)?r:typeof r=="string"?r.split(`
`):[]).map(v=>p(v)).filter(Boolean)}function y(r,n,v){const I=[...r];for(;I.length<n;)I.push(v(I.length));return I.slice(0,n)}function L(r,n){const v=Array.isArray(r)?r.map((f,J)=>({title:p(f==null?void 0:f.title,`Card ${J+1}`),body:p((f==null?void 0:f.body)||(f==null?void 0:f.text)||(f==null?void 0:f.description),"Add supporting detail.")})).filter(f=>f.title||f.body):[],I=n.map((f,J)=>({title:`Point ${J+1}`,body:f}));return y(v.length?v:I,3,f=>({title:`Point ${f+1}`,body:"Add supporting detail."}))}function X(r,n){const v=b(r==null?void 0:r.leftPoints),I=b(r==null?void 0:r.rightPoints),f=n.slice(0,Math.max(1,Math.ceil(n.length/2))),J=n.slice(Math.max(1,Math.ceil(n.length/2)));return{leftTitle:p(r==null?void 0:r.leftTitle,"Option A"),leftPoints:y(v.length?v:f,3,he=>`Left point ${he+1}`),rightTitle:p(r==null?void 0:r.rightTitle,"Option B"),rightPoints:y(I.length?I:J,3,he=>`Right point ${he+1}`)}}function le(r,n){const v=Array.isArray(r)?r.map((f,J)=>({value:p(f==null?void 0:f.value,`${J+1}`),label:p(f==null?void 0:f.label,`Metric ${J+1}`)})).filter(f=>f.value||f.label):[],I=n.map((f,J)=>{const[he,...tt]=f.split(/[:\-]/);return{value:p(he,`${J+1}`),label:p(tt.join(" ").trim(),f)}});return y(v.length?v:I,3,f=>({value:`${f+1}`,label:`Metric ${f+1}`}))}function _(r,n){const v=Array.isArray(r)?r.map((f,J)=>({title:p(f==null?void 0:f.title,`Phase ${J+1}`),detail:p((f==null?void 0:f.detail)||(f==null?void 0:f.description),"Explain the milestone.")})).filter(f=>f.title||f.detail):[],I=n.map((f,J)=>({title:`Phase ${J+1}`,detail:f}));return y(v.length?v:I,4,f=>({title:`Phase ${f+1}`,detail:"Explain the milestone."}))}function P(r,n){const v=Array.isArray(r)?r.map((f,J)=>({question:p(f==null?void 0:f.question,`Question ${J+1}?`),answer:p(f==null?void 0:f.answer,"Add the short answer here.")})).filter(f=>f.question||f.answer):[],I=n.map((f,J)=>({question:`Question ${J+1}?`,answer:f}));return y(v.length?v:I,3,f=>({question:`Question ${f+1}?`,answer:"Add the short answer here."}))}function fe(r,n){const v=Array.isArray(r)?r.map((f,J)=>({title:p(f==null?void 0:f.title,`Step ${J+1}`),detail:p((f==null?void 0:f.detail)||(f==null?void 0:f.description),"Add the step detail here.")})).filter(f=>f.title||f.detail):[],I=n.map((f,J)=>({title:`Step ${J+1}`,detail:f}));return y(v.length?v:I,3,f=>({title:`Step ${f+1}`,detail:"Add the step detail here."}))}const $=Ll(),A=st(),a=rt(),z=M(()=>$.apiProvider==="gemini"?"Gemini":"OpenAI"),q=M(()=>$.apiProvider==="gemini"?"AIza...":"sk-..."),ce=M(()=>$.apiProvider==="gemini"?"Gemini API keys from Google AI Studio work for text features on the free tier. We provide free image generation via Pollinations.ai when Gemini is selected. The key is stored locally in your browser and never sent to our servers.":"Key is stored locally in your browser. It is never sent to our servers."),H=D("generate"),m=D(""),U=D(""),W=D("");nt(H,()=>{W.value=""}),nt(()=>A.aiPanelMode,r=>{r&&(H.value=r)},{immediate:!0});const Ie=D(4),V=D("general"),Z=D("Spanish"),ne=D(""),me=D(""),ae=D(""),Ee=D(!1),C=D("single"),j=D("classic"),O=D("mixed"),K=D(5),ye=D("slide"),Re=D([]),Te=D(""),Oe=M(()=>d.find(r=>r.id===j.value)||d[0]),ie=M(()=>{const r=U.value.trim()||"[your topic]";if(C.value==="deck"){let I=`Create a complete ${K.value}-slide learning deck about "${r}".`;return me.value.trim()&&(I+=`
Additional context: ${me.value.trim()}`),I+=`
Deck layout strategy: ${O.value}`,O.value==="single"?I+=`
Use the ${j.value} layout for every slide.`:I+=`
Mix layouts across the deck when appropriate.`,I+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process|cloze|scenario|progress|poll|matching|sorting|labeledimage" }] }`,I+=`
Make each slide distinct, logically sequenced, and specific to "${r}".`,I}let v=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[V.value]||"educational slide"} about "${r}".`;return me.value.trim()&&(v+=`
Additional context: ${me.value.trim()}`),v+=`
Layout mode: ${j.value}`,v+=`
Layout instruction: ${Oe.value.promptHint}`,v+=`
Return ONLY valid JSON matching this shape: ${Oe.value.schema}`,v+=`
Make all content specific to "${r}" — no generic placeholders.`,v});nt(ie,r=>{Ee.value||(ae.value=r)},{immediate:!0});function ge(){ae.value=ie.value,Ee.value=!1}const we=D(""),pe=D("intermediate"),be=D("multiple-choice"),re=D(""),N=D([]),S=D(""),R=D(!1),ke=M(()=>{const r=we.value.trim()||"[your topic]",n={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},v={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let I=`Generate ${Ie.value} ${n[pe.value]} ${v[be.value]} quiz questions about "${r}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return re.value.trim()&&(I+=`
Learning objective: ${re.value.trim()}`),I});nt(ke,r=>{R.value||(S.value=r)},{immediate:!0});function Ge(){S.value=ke.value,R.value=!1}const He=M(()=>a.getProject(A.projectId)),h=M(()=>{var r,n;return(n=(r=He.value)==null?void 0:r.slides)==null?void 0:n.find(v=>v.id===A.currentSlideId)}),Ae=M(()=>{var r,n;return A.selectedElementId?(n=(r=h.value)==null?void 0:r.elements)==null?void 0:n.find(v=>v.id===A.selectedElementId):null}),Fe=M(()=>{var n;const r=new Set(A.selectedElementIds);return(((n=h.value)==null?void 0:n.elements)||[]).filter(v=>{var I;return r.has(v.id)&&typeof((I=v==null?void 0:v.content)==null?void 0:I.text)=="string"&&v.content.text.trim()})}),Ue=M(()=>Fe.value.map(r=>r.content.text.trim()).filter(Boolean).join(`

`));async function Qe(){if(!U.value.trim()&&!ae.value.trim())return;if(W.value="",Re.value=[],Te.value="",C.value==="deck"){const n=await $.generateSlideDeck(U.value,K.value,{objective:me.value,customPrompt:ae.value,layoutStrategy:O.value,layoutMode:j.value});if(n!=null&&n.length){const v=n.map(I=>Ye(I));W.value=JSON.stringify({slides:v},null,2),je(v,{replaceGenerated:!0})}return}if(ye.value==="options"){await gt();return}const r=await $.generateSlideContent(U.value,V.value,me.value,ae.value,{layoutMode:j.value});if(r){const n=Ye(r);W.value=JSON.stringify(n,null,2),Je(n,{replaceGenerated:!0})}}function Ye(r){var f;const n=r&&typeof r=="object"?r:{},v=b(n.bullets),I=c(n.layout||((f=n.design)==null?void 0:f.layout),C.value==="deck"&&O.value==="mixed"?"classic":j.value);return{title:String(n.title||U.value||"Untitled Slide").trim(),subtitle:String(n.subtitle||"").trim(),bullets:v,callout:String(n.callout||"").trim(),layout:I,cards:L(n.cards,v),comparison:X(n.comparison,v),metrics:le(n.metrics,v),timeline:_(n.timeline,v),faqs:P(n.faqs,v),process:fe(n.process,v),cloze:n.cloze||{text:""},scenario:n.scenario||{agentMessage:"",userOptions:[]},progress:n.progress||{level:4,xp:350,percent:65},poll:n.poll||{question:"",options:[]},matching:n.matching||{pairs:[]},sorting:n.sorting||{items:[]},labeledimage:n.labeledimage||{markers:[]}}}function Mt(r,n){var f,J,he;const v=(J=(f=a.getProject(r))==null?void 0:f.slides)==null?void 0:J.find(tt=>tt.id===n);if(!((he=v==null?void 0:v.elements)!=null&&he.length))return;v.elements.filter(tt=>{var T;return((T=tt.meta)==null?void 0:T.source)==="ai-content"}).map(tt=>tt.id).forEach(tt=>{a.deleteElement(r,n,tt)})}function ct(r,n,v,I){return a.addElement(r,n,v,{...I,meta:{...I.meta||{},source:"ai-content"}})}function _e(r){const n=Gl.find(I=>I.id===r);if(!n)return null;const v=Hl(JSON.parse(JSON.stringify(n)),r);return v.elements=v.elements.map(I=>({...I,meta:{...I.meta||{},source:"ai-content"}})),v}function ft(r,n){n&&r.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:n,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function et(r,n){if(!n)return;const v=Qt(r);r.elements.push({type:"text",x:0,y:v.height+18,width:Math.max(v.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${n}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function At(r){const n=Array.isArray(r)?r:[];if(!n.length)return{minX:40,minY:54,width:0,height:0};const v=Math.min(...n.map(he=>Number(he.x||0))),I=Math.min(...n.map(he=>Number(he.y||0))),f=Math.max(...n.map(he=>Number(he.x||0)+Number(he.width||0))),J=Math.max(...n.map(he=>Number(he.y||0)+Number(he.height||0)));return{minX:v,minY:I,width:Math.max(0,f-v),height:Math.max(0,J-I)}}function Pt(r,n){var J;const v=a.getProject(r),I=Qt(n),f=Number(((J=v==null?void 0:v.settings)==null?void 0:J.slideWidth)||960);return{x:Math.max(40,Math.round((f-I.width)/2)),y:54}}function Tt(r){const n=_e(s.cards);if(!n)return null;const v=r.cards;return n.elements[0].content.text=r.title,n.elements[1].content.text=r.subtitle||r.callout||"Use the three cards to frame the main ideas.",v.forEach((I,f)=>{n.elements[5+f].content.text=I.title,n.elements[8+f].content.text=I.body}),r.callout&&r.subtitle&&et(n,r.callout),n}function Bt(r){const n=_e(s.comparison);return n?(n.elements[0].content.text=r.title,n.elements[3].content.text=r.comparison.leftTitle,n.elements[4].content.text=r.comparison.rightTitle,n.elements[5].content={...n.elements[5].content,text:r.comparison.leftPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},n.elements[6].content={...n.elements[6].content,text:r.comparison.rightPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},ft(n,r.subtitle),et(n,r.callout),n):null}function Nt(r){const n=_e(s.metrics);return n?(n.elements[0].content.text=r.title,r.metrics.forEach((v,I)=>{n.elements[4+I].content.text=v.value,n.elements[7+I].content.text=v.label}),ft(n,r.subtitle),et(n,r.callout),n):null}function zt(r){const n=_e(s.timeline);return n?(n.elements[0].content.text=r.title,r.timeline.forEach((v,I)=>{n.elements[6+I].content={...n.elements[6+I].content,text:`${v.title}
${v.detail}`,fontSize:16,lineHeight:1.35}}),ft(n,r.subtitle),et(n,r.callout),n):null}function mt(r){const n=_e(s.faq);return n?(n.elements[0].content.text=r.title,r.faqs.forEach((v,I)=>{n.elements[4+I].content={...n.elements[4+I].content,text:`${v.question}
${v.answer}`,fontSize:16,lineHeight:1.35},n.elements[4+I].height=44}),ft(n,r.subtitle),et(n,r.callout),n):null}function g(r){const n=_e(s.process);return n?(n.elements[0].content.text=r.title,r.process.forEach((v,I)=>{n.elements[8+I].content.text=v.title,n.elements[11+I].content.text=v.detail}),ft(n,r.subtitle),et(n,r.callout),n):null}function w(r,n,v,I,f){const J=[];r.title&&J.push({type:"heading",x:0,y:0,width:800,height:80,content:{text:r.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}});let he=r.title?100:0;r.subtitle&&(J.push({type:"text",x:0,y:he,width:800,height:40,content:{text:r.subtitle,fontSize:16,fontWeight:"500",textAlign:"center",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}}),he+=60);const tt=Math.max(0,(800-v)/2);J.push({type:n,x:tt,y:he,width:v,height:I,content:f()});const T={id:`generated-${crypto.randomUUID?crypto.randomUUID():Date.now()}`,type:"group",elements:J};return r.callout&&et(T,r.callout),T}function ee(r){const n=r.cloze||{};return w(r,"cloze",600,240,()=>({title:"Fill in the blanks",text:n.text||"An assessment should align closely with the [learning] objectives.",bgColor:"#ffffff",textColor:"#1e293b",fontSize:16,borderRadius:8}))}function G(r){var J;const n=r.scenario||{},v=n.agentMessage||"Welcome to this scenario. What will you do first?",I=(J=n.userOptions)!=null&&J.length?n.userOptions:["I will analyze the requirements."],f=[{role:"agent",text:v}];return I.forEach(he=>f.push({role:"user",text:typeof he=="string"?he:he.text})),w(r,"scenario",600,360,()=>({bgColor:"#f8fafc",borderRadius:8,messages:f}))}function Pe(r){const n=r.progress||{};return w(r,"progress",400,200,()=>({title:"Your Progress",bgColor:"#ffffff",titleColor:"#0f172a",textColor:"#64748b",fillColor:"#10b981",borderRadius:8,mockXP:n.xp||350,mockLevel:n.level||4,mockPercent:n.percent||65}))}function Ne(r){var f;const n=r.poll||{},I=((f=n.options)!=null&&f.length?n.options:[{text:"Option A",votes:12},{text:"Option B",votes:24}]).map((J,he)=>({id:String(he+1),text:J.text||String(J),votes:J.votes||0}));return w(r,"poll",600,360,()=>({question:n.question||"What is your favorite topic?",options:I,showResults:!1,barColor:"#cbd5e1",barSelectedColor:"#6c47ff",trackColor:"#f1f5f9",textColor:"#1e293b",bgColor:"#ffffff"}))}function We(r){var f;const n=r.matching||{},I=((f=n.pairs)!=null&&f.length?n.pairs:[{left:"Concept 1",right:"Detail 1"},{left:"Concept 2",right:"Detail 2"}]).map((J,he)=>({id:String(he+1),left:J.left,right:J.right}));return w(r,"matching",600,360,()=>({title:"Match the concepts",bgColor:"#ffffff",titleColor:"#0f172a",accentColor:"#6c47ff",accentBgColor:"#f3f0ff",pairs:I}))}function Xe(r){var f;const n=r.sorting||{},I=((f=n.items)!=null&&f.length?n.items:[{text:"Step 1",correctOrder:0},{text:"Step 2",correctOrder:1}]).map((J,he)=>({id:String(he+1),text:J.text,correctOrder:J.correctOrder??he}));return w(r,"sorting",500,360,()=>({title:"Sort items correctly",bgColor:"#ffffff",titleColor:"#0f172a",accentColor:"#6c47ff",items:I}))}function de(r){var f;const n=r.labeledimage||{},I=((f=n.markers)!=null&&f.length?n.markers:[{x:25,y:35,label:"1",title:"Point 1",description:"Description 1"},{x:75,y:65,label:"2",title:"Point 2",description:"Description 2"}]).map((J,he)=>({id:String(he+1),x:J.x||50,y:J.y||50,label:J.label||String(he+1),title:J.title||`Point ${he+1}`,description:J.description||""}));return w(r,"labeledimage",600,400,()=>({src:"",borderRadius:8,markerColor:"#6c47ff",markerTextColor:"#ffffff",markers:I}))}function Me(r){switch(r.layout){case"cards":return Tt(r);case"comparison":return Bt(r);case"metrics":return Nt(r);case"timeline":return zt(r);case"faq":return mt(r);case"process":return g(r);case"cloze":return ee(r);case"scenario":return G(r);case"progress":return Pe(r);case"poll":return Ne(r);case"matching":return We(r);case"sorting":return Xe(r);case"labeledimage":return de(r);default:return null}}function lt(r,n,v){var I;if(v.title&&(a.updateSlide(r,n,{title:v.title}),ct(r,n,"heading",{x:60,y:40,width:840,height:80,content:{text:v.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),v.subtitle&&ct(r,n,"text",{x:60,y:130,width:840,height:50,content:{text:v.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(I=v.bullets)!=null&&I.length){const f=v.bullets.map(J=>`• ${J}`).join(`
`);ct(r,n,"text",{x:60,y:v.subtitle?200:150,width:840,height:200,content:{text:f,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}v.callout&&(ct(r,n,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),ct(r,n,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${v.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function Ve(r,n,v,{replaceGenerated:I=!1,origin:f=null}={}){if(!r||!n)return;I&&Mt(r,n);const J=Me(v);if(a.updateSlide(r,n,{title:v.title||"Untitled Slide"}),J){const he=f||Pt(r,J);a.insertContentBlock(r,n,J,he)}else lt(r,n,v)}function je(r,{replaceGenerated:n=!1}={}){if(!A.currentSlideId)return;const v=A.projectId;if(!v||!Array.isArray(r)||!r.length)return;r.map(f=>Ye(f)).forEach(f=>{const J=a.addSlide(v);J&&Ve(v,J.id,f,{replaceGenerated:n})})}function Je(r=null,{replaceGenerated:n=!1}={}){if(!A.currentSlideId)return;let v=r;if(!v){if(!W.value)return;try{v=JSON.parse(W.value)}catch(he){console.warn("Could not parse AI content:",he);return}}const I=Ye(v),f=A.projectId,J=A.currentSlideId;!f||!J||Ve(f,J,I,{replaceGenerated:n})}function ht(){if(W.value){if(C.value==="deck"){try{const r=JSON.parse(W.value),n=Array.isArray(r)?r:r==null?void 0:r.slides;if(!Array.isArray(n)||!n.length)return;je(n,{replaceGenerated:!0})}catch{return}return}Je()}}async function gt(){const r=U.value.trim()||"[your topic]",n=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${V.value}" slide about "${r}" using a ${j.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,v=await $.generate(n,{type:"creativeOptions",topic:r,slideType:V.value});if(v)try{const I=JSON.parse(v.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(I))throw new Error("Options must be an array");Re.value=I.slice(0,3).map((f,J)=>({title:String((f==null?void 0:f.title)||`Option ${J+1}`),angle:String((f==null?void 0:f.angle)||""),prompt:String((f==null?void 0:f.prompt)||"")})).filter(f=>f.prompt.trim()),Re.value.length||(Te.value="No usable creative options were returned. Try generating again.")}catch{Te.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function kt(r){r!=null&&r.prompt&&(ae.value=r.prompt,Ee.value=!0,ye.value="slide",await Qe())}async function Wt(){if(!Ue.value.trim()||!A.projectId||!A.currentSlideId)return;const r=await $.transformSourceTextToSlideContent(Ue.value,{topic:U.value,slideType:V.value,description:me.value,layoutMode:j.value,customPrompt:ae.value});if(!r)return;const n=Ye(r),v=At(Fe.value),I={x:Math.max(24,Math.round(v.minX)),y:Math.max(24,Math.round(v.minY))};Fe.value.forEach(f=>{a.deleteElement(A.projectId,A.currentSlideId,f.id)}),W.value=JSON.stringify(n,null,2),Ve(A.projectId,A.currentSlideId,n,{origin:I})}async function Ct(r=!1){if(!we.value.trim()&&!S.value.trim())return;r||(N.value=[]);const n=await $.generateQuiz(we.value,Ie.value,{difficulty:pe.value,questionType:be.value,objective:re.value,customPrompt:S.value});if(n)if(r){const v=new Set(N.value.map(f=>f.question)),I=n.filter(f=>!v.has(f.question)).map(f=>({...f,_selected:!0}));N.value=[...N.value,...I]}else N.value=n.map(v=>({...v,_selected:!0}))}async function Rt(){const r=N.value.filter(v=>v._selected);if(!r.length)return;const n=A.projectId;r.forEach((v,I)=>{const f=a.addSlide(n);if(f){a.addElement(n,f.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:v.question||"Untitled Question",options:Array.isArray(v.options)?v.options:["True","False"],correctIndex:typeof v.correctIndex=="number"?v.correctIndex:0,explanation:v.explanation||""}});const J=typeof v.question=="string"?v.question:"Quiz";a.updateSlide(n,f.id,{title:`Q${I+1}: ${J.slice(0,40)}…`})}}),N.value=[]}function Lt(r){N.value.forEach(n=>n._selected=r)}async function Ot(){if(!ne.value.trim())return;const r=await $.generateVoiceoverScript(ne.value);r&&(W.value=r)}async function Ft(){var v,I;const r=(I=(v=Ae.value)==null?void 0:v.content)==null?void 0:I.text;if(!r)return;const n=await $.generateTranslation(r,Z.value);n&&(W.value=n)}async function Ut(){!W.value||!Ae.value||a.updateElement(A.projectId,A.currentSlideId,Ae.value.id,{content:{...Ae.value.content,text:W.value}})}const dt=D(""),St=D(!1);function $t(r){return String(r||"").replace(/```(json)?\n?/gi," ").replace(/```/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim().slice(0,220)}function ut(r,n){return new Promise((v,I)=>{const f=window.setTimeout(()=>{I(new Error("Timed out"))},n);Promise.resolve(r).then(J=>{window.clearTimeout(f),v(J)}).catch(J=>{window.clearTimeout(f),I(J)})})}function bt(r){const n=String(r||"").trim(),v=n.toLowerCase(),I=z.value;return n?v.includes("billing hard limit")||v.includes("billing")||v.includes("quota")||v.includes("insufficient_quota")?$.apiProvider==="gemini"?"Gemini image generation is being rejected by Google because this project is still on the free tier. Gemini Developer API image models require a billing-enabled project, so you need to enable billing in AI Studio or switch providers for image generation.":`Your ${I} account cannot generate images right now because its billing or quota limit has been reached. Update billing or wait for quota reset, then try again.`:$.apiProvider==="gemini"&&(v.includes("resource exhausted")||v.includes("free tier")||v.includes("generativelanguage.googleapis.com"))?"Gemini image generation is not available to this free-tier project. Enable billing for the Gemini project in AI Studio to use Gemini image models.":v.includes("invalid api key")||v.includes("incorrect api key")||v.includes("unauthorized")?`The ${I} API key appears invalid for image generation. Check the key in API settings and try again.`:v.includes("rate limit")||v.includes("too many requests")?`${I} rate-limited the image request. Wait a moment and try again.`:`${I} image generation failed: ${n}`:`${I} image generation did not return an image. Try a simpler prompt or try again in a moment.`}async function xt(){if(dt.value.trim()){St.value=!0,W.value="Preparing image prompt...";try{if(!$.apiKey&&$.apiProvider!=="gemini"){W.value=`AI image generation requires a ${z.value} API key in API settings. No fallback image was inserted.`;return}let r=dt.value;try{const v=await ut($.generateImagePrompt(dt.value),2200);v&&(r=v.replace(/```(json)?\n?/g,"").trim())}catch{r=dt.value}r=$t(r)||$t(dt.value),W.value="Generating image and inserting it on the slide...";const n=await ut($.generateImageAsset(r),2e4).catch(()=>null);if(!n){W.value=bt($.lastError);return}a.addElement(A.projectId,A.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:n,fallbackSrcs:[],alt:dt.value.trim()||"AI generated image",sourceType:`${$.apiProvider}-image`,objectFit:"cover"}}),W.value=`AI image added to slide using ${z.value} image generation.`}catch(r){W.value=bt((r==null?void 0:r.message)||$.lastError)}finally{St.value=!1}}}async function yt(){var n,v;if(!((v=(n=Ae.value)==null?void 0:n.content)!=null&&v.text))return;const r=await $.improveText(Ae.value.content.text,m.value||"Make it clearer and more engaging");r&&(W.value=r)}async function Gt(){!W.value||!Ae.value||a.updateElement(A.projectId,A.currentSlideId,Ae.value.id,{content:{...Ae.value.content,text:W.value}})}async function Vt(){if(!m.value.trim())return;const r=await $.generate(m.value);r&&(W.value=r)}return(r,n)=>{var v,I,f,J,he,tt;return l(),i("div",q1,[e("div",R1,[(l(),i(oe,null,ue([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],T=>e("button",{key:T.id,class:Y(["ai-mode-btn",H.value===T.id&&"active"]),onClick:at=>H.value=T.id},k(T.label),11,O1)),64))]),e("div",F1,[H.value==="generate"?(l(),i(oe,{key:0},[e("div",U1,[n[36]||(n[36]=e("label",{class:"form-label"},[te("Topic / Subject "),e("span",{class:"required"},"*")],-1)),ve(e("input",{"onUpdate:modelValue":n[0]||(n[0]=T=>U.value=T),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:yl(Qe,["enter"])},null,544),[[$e,U.value]])]),e("div",V1,[e("button",{class:Y(["output-mode-btn",C.value==="single"&&"active"]),onClick:n[1]||(n[1]=T=>C.value="single")},"Single Slide",2),e("button",{class:Y(["output-mode-btn",C.value==="deck"&&"active"]),onClick:n[2]||(n[2]=T=>C.value="deck")},"Slide Deck",2)]),C.value==="single"?(l(),i("div",W1,[n[38]||(n[38]=e("label",{class:"form-label"},"Slide Type",-1)),ve(e("select",{"onUpdate:modelValue":n[3]||(n[3]=T=>V.value=T),class:"select"},[...n[37]||(n[37]=[it('<option value="general" data-v-3ccdb1b2>General</option><option value="intro" data-v-3ccdb1b2>Introduction</option><option value="overview" data-v-3ccdb1b2>Overview</option><option value="concept" data-v-3ccdb1b2>Concept Explanation</option><option value="example" data-v-3ccdb1b2>Example / Case Study</option><option value="summary" data-v-3ccdb1b2>Summary</option><option value="callout" data-v-3ccdb1b2>Key Takeaway</option>',7)])],512),[[jt,V.value]])])):F("",!0),C.value==="single"?(l(),i("div",G1,[e("div",H1,[n[39]||(n[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",Y1,k(Oe.value.hint),1)]),e("div",J1,[(l(),i(oe,null,ue(d,T=>e("button",{key:T.id,class:Y(["layout-preset-card",j.value===T.id&&"active"]),onClick:at=>j.value=T.id},[e("span",X1,k(T.label),1),e("span",K1,k(T.hint),1)],10,Q1)),64))])])):(l(),i("div",Z1,[n[40]||(n[40]=e("label",{class:"form-label"},"Number of Slides",-1)),ve(e("input",{"onUpdate:modelValue":n[4]||(n[4]=T=>K.value=T),class:"input",type:"number",min:"1",max:"20"},null,512),[[$e,K.value,void 0,{number:!0}]]),n[41]||(n[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),C.value==="deck"?(l(),i("div",em,[e("div",tm,[n[42]||(n[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",om,k(O.value==="mixed"?"AI can vary layout by slide":`All slides use ${Oe.value.label}`),1)]),e("div",nm,[e("button",{class:Y(["output-mode-btn",O.value==="mixed"&&"active"]),onClick:n[5]||(n[5]=T=>O.value="mixed")},"Mixed Layouts",2),e("button",{class:Y(["output-mode-btn",O.value==="single"&&"active"]),onClick:n[6]||(n[6]=T=>O.value="single")},"Consistent Layout",2)])])):F("",!0),C.value==="deck"&&O.value==="single"?(l(),i("div",lm,[e("div",im,[n[43]||(n[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",am,k(Oe.value.hint),1)]),e("div",sm,[(l(),i(oe,null,ue(d,T=>e("button",{key:`deck-${T.id}`,class:Y(["layout-preset-card",j.value===T.id&&"active"]),onClick:at=>j.value=T.id},[e("span",dm,k(T.label),1),e("span",um,k(T.hint),1)],10,rm)),64))])])):F("",!0),e("div",cm,[n[44]||(n[44]=e("label",{class:"form-label"},[te("Description "),e("span",{class:"optional"},"(optional)")],-1)),ve(e("textarea",{"onUpdate:modelValue":n[7]||(n[7]=T=>me.value=T),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[$e,me.value]])]),e("div",pm,[e("div",vm,[n[46]||(n[46]=e("label",{class:"form-label"},"AI Prompt",-1)),Ee.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:ge,title:"Reset to auto-generated prompt"},[...n[45]||(n[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),te(" Reset ",-1)])])):(l(),i("span",fm,"auto"))]),ve(e("textarea",{"onUpdate:modelValue":n[8]||(n[8]=T=>ae.value=T),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:n[9]||(n[9]=T=>Ee.value=!0),spellcheck:"false"},null,544),[[$e,ae.value]]),n[47]||(n[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),C.value==="single"?(l(),i("div",mm,[e("button",{class:Y(["output-mode-btn",ye.value==="slide"&&"active"]),onClick:n[10]||(n[10]=T=>ye.value="slide")},"Show on Slide",2),e("button",{class:Y(["output-mode-btn",ye.value==="options"&&"active"]),onClick:n[11]||(n[11]=T=>ye.value="options")},"Creative Options",2)])):F("",!0),C.value==="single"&&Ue.value?(l(),i("div",gm,[e("div",bm,[n[48]||(n[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",ym,k(Fe.value.length)+" selected",1)]),e("div",hm,k(Ue.value),1),e("div",xm,[e("button",{class:"btn btn-secondary btn-sm",disabled:E($).isGenerating,onClick:Wt}," Transform Selection to "+k(Oe.value.label),9,wm)])])):F("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating||!U.value.trim()&&!ae.value.trim()||C.value==="deck"&&(!K.value||K.value<1||K.value>20),onClick:Qe},[E($).isGenerating?(l(),i("span",Cm)):(l(),i("svg",Sm,[...n[49]||(n[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),te(" "+k(E($).isGenerating?"Generating…":C.value==="deck"?W.value?`Regenerate ${K.value} Slides`:`Generate ${K.value} Slides`:ye.value==="slide"?W.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,km),C.value==="single"&&ye.value==="options"&&(Re.value.length||Te.value)?(l(),i("div",$m,[e("div",Im,[n[50]||(n[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[12]||(n[12]=T=>{Re.value=[],Te.value=""})},"Clear")]),Te.value?(l(),i("div",Em,[n[51]||(n[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),te(" "+k(Te.value),1)])):(l(),i("div",Am,[(l(!0),i(oe,null,ue(Re.value,(T,at)=>(l(),i("article",{key:at,class:"creative-option-card"},[e("h4",Mm,k(T.title),1),e("p",Pm,k(T.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:It=>kt(T)},"Use This Option",8,Tm)]))),128))]))])):F("",!0)],64)):H.value==="quiz"?(l(),i(oe,{key:1},[e("div",Bm,[n[52]||(n[52]=e("label",{class:"form-label"},[te("Quiz Topic "),e("span",{class:"required"},"*")],-1)),ve(e("input",{"onUpdate:modelValue":n[13]||(n[13]=T=>we.value=T),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:yl(Ct,["enter"])},null,544),[[$e,we.value]])]),e("div",Nm,[e("div",zm,[n[54]||(n[54]=e("label",{class:"form-label"},"Questions",-1)),ve(e("select",{"onUpdate:modelValue":n[14]||(n[14]=T=>Ie.value=T),class:"select"},[...n[53]||(n[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[jt,Ie.value,void 0,{number:!0}]])]),e("div",Lm,[n[56]||(n[56]=e("label",{class:"form-label"},"Difficulty",-1)),ve(e("select",{"onUpdate:modelValue":n[15]||(n[15]=T=>pe.value=T),class:"select"},[...n[55]||(n[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[jt,pe.value]])])]),e("div",jm,[n[57]||(n[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Dm,[(l(),i(oe,null,ue([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],T=>e("button",{key:T.id,class:Y(["qtype-btn",be.value===T.id&&"active"]),onClick:at=>be.value=T.id},[e("span",qm,k(T.icon),1),e("span",null,k(T.label),1)],10,_m)),64))])]),e("div",Rm,[n[58]||(n[58]=e("label",{class:"form-label"},[te("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),ve(e("input",{"onUpdate:modelValue":n[16]||(n[16]=T=>re.value=T),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[$e,re.value]])]),e("div",Om,[e("div",Fm,[n[60]||(n[60]=e("label",{class:"form-label"},"AI Prompt",-1)),R.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Ge,title:"Reset to auto-generated prompt"},[...n[59]||(n[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),te(" Reset ",-1)])])):(l(),i("span",Um,"auto"))]),ve(e("textarea",{"onUpdate:modelValue":n[17]||(n[17]=T=>S.value=T),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:n[18]||(n[18]=T=>R.value=!0),spellcheck:"false"},null,544),[[$e,S.value]]),n[61]||(n[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating||!we.value.trim()&&!S.value.trim(),onClick:n[19]||(n[19]=T=>Ct(!1))},[E($).isGenerating?(l(),i("span",Wm)):(l(),i("svg",Gm,[...n[62]||(n[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),te(" "+k(E($).isGenerating?"Generating…":`Generate ${Ie.value} Questions`),1)],8,Vm),N.value.length?(l(),i("div",Hm,[e("div",Ym,[e("span",Jm,k(N.value.length)+" Questions",1),e("div",Qm,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[20]||(n[20]=T=>Lt(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:n[21]||(n[21]=T=>Lt(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:n[22]||(n[22]=T=>N.value=[])},"Clear")])]),e("div",Xm,[e("button",{class:"btn btn-secondary regen-btn",disabled:E($).isGenerating,onClick:n[23]||(n[23]=T=>Ct(!1)),title:"Replace all questions with a new set"},[E($).isGenerating?(l(),i("span",Zm)):(l(),i("svg",eg,[...n[63]||(n[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),n[64]||(n[64]=te(" Regenerate ",-1))],8,Km),e("button",{class:"btn btn-ghost regen-btn",disabled:E($).isGenerating,onClick:n[24]||(n[24]=T=>Ct(!0)),title:"Generate more and append to current list"},[...n[65]||(n[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),te(" Add More ",-1)])],8,tg)]),(l(!0),i(oe,null,ue(N.value,(T,at)=>(l(),i("div",{key:at,class:Y(["quiz-card",{deselected:!T._selected}])},[e("div",og,[e("label",ng,[ve(e("input",{type:"checkbox","onUpdate:modelValue":It=>T._selected=It},null,8,lg),[[_t,T._selected]]),e("span",ig,"Q"+k(at+1),1)]),e("div",ag,[e("span",{class:Y(["badge difficulty-badge",T.difficulty])},k(T.difficulty),3),e("span",sg,k(T.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",rg,k(T.question),1),e("div",dg,[(l(!0),i(oe,null,ue(T.options,(It,Et)=>(l(),i("div",{key:Et,class:Y(["q-option",Et===T.correctIndex&&"correct"])},[e("span",ug,k(["A","B","C","D"][Et]),1),e("span",null,k(It),1),Et===T.correctIndex?(l(),i("svg",cg,[...n[66]||(n[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):F("",!0)],2))),128))]),T.explanation?(l(),i("div",pg,[n[67]||(n[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),te(" "+k(T.explanation),1)])):F("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!N.value.filter(T=>T._selected).length,onClick:Rt},[n[68]||(n[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),te(" Add "+k(N.value.filter(T=>T._selected).length)+" Selected as Quiz Slides ",1)],8,vg)])):F("",!0)],64)):H.value==="voiceover"?(l(),i(oe,{key:2},[e("div",fg,[n[69]||(n[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),ve(e("textarea",{"onUpdate:modelValue":n[25]||(n[25]=T=>ne.value=T),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[$e,ne.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating,onClick:Ot},[E($).isGenerating?(l(),i("span",gg)):F("",!0),te(" "+k(E($).isGenerating?"Generating…":"Generate Script"),1)],8,mg)],64)):H.value==="improve"?(l(),i(oe,{key:3},[(I=(v=Ae.value)==null?void 0:v.content)!=null&&I.text?(l(),i("div",bg,[n[70]||(n[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",yg,k(Ae.value.content.text.slice(0,120))+k(Ae.value.content.text.length>120?"…":""),1)])):(l(),i("p",hg,"Select a text element on the canvas to improve it.")),e("div",xg,[n[71]||(n[71]=e("label",{class:"form-label"},"Instruction",-1)),ve(e("input",{"onUpdate:modelValue":n[26]||(n[26]=T=>m.value=T),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[$e,m.value]])]),n[72]||(n[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ve(e("textarea",{"onUpdate:modelValue":n[27]||(n[27]=T=>m.value=T),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[$e,m.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating||!Ae.value&&!m.value,onClick:n[28]||(n[28]=T=>Ae.value?yt():Vt())},[E($).isGenerating?(l(),i("span",kg)):F("",!0),te(" "+k(E($).isGenerating?"Processing…":"Generate"),1)],8,wg)],64)):H.value==="translate"?(l(),i(oe,{key:4},[(J=(f=Ae.value)==null?void 0:f.content)!=null&&J.text?(l(),i("div",Cg,[n[73]||(n[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Sg,k(Ae.value.content.text.slice(0,120))+k(Ae.value.content.text.length>120?"…":""),1)])):(l(),i("p",$g,"Select a text element on the canvas to translate it.")),e("div",Ig,[n[75]||(n[75]=e("label",{class:"form-label"},"Target Language",-1)),ve(e("select",{"onUpdate:modelValue":n[29]||(n[29]=T=>Z.value=T),class:"select"},[...n[74]||(n[74]=[it('<option value="Spanish" data-v-3ccdb1b2>Spanish</option><option value="French" data-v-3ccdb1b2>French</option><option value="German" data-v-3ccdb1b2>German</option><option value="Italian" data-v-3ccdb1b2>Italian</option><option value="Portuguese" data-v-3ccdb1b2>Portuguese</option><option value="Chinese (Simplified)" data-v-3ccdb1b2>Chinese (Simplified)</option><option value="Japanese" data-v-3ccdb1b2>Japanese</option><option value="Arabic" data-v-3ccdb1b2>Arabic</option>',8)])],512),[[jt,Z.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating||!((tt=(he=Ae.value)==null?void 0:he.content)!=null&&tt.text),onClick:Ft},[E($).isGenerating?(l(),i("span",Ag)):F("",!0),te(" "+k(E($).isGenerating?"Translating…":"Translate Text"),1)],8,Eg),W.value?(l(),i("div",Mg,[e("div",Pg,[n[76]||(n[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",Tg,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[30]||(n[30]=T=>r.navigator.clipboard.writeText(W.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Ut,disabled:!Ae.value},"Apply",8,Bg)])]),e("div",Ng,k(W.value),1)])):F("",!0)],64)):H.value==="image"?(l(),i(oe,{key:5},[n[81]||(n[81]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),E($).apiProvider==="gemini"?(l(),i("div",zg,[...n[77]||(n[77]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),te(" Gemini text features work on the free tier, but Gemini image generation on the Developer API usually needs billing enabled for the project. ",-1)])])):F("",!0),E($).apiKey?F("",!0):(l(),i("div",Lg,[n[78]||(n[78]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),te(" AI image generation needs a "+k(z.value)+" API key in API settings. ",1)])),e("div",jg,[n[79]||(n[79]=e("label",{class:"form-label"},"Image Description",-1)),ve(e("textarea",{"onUpdate:modelValue":n[31]||(n[31]=T=>dt.value=T),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[$e,dt.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:St.value||E($).isGenerating||!dt.value||!E($).apiKey,onClick:xt},[St.value||E($).isGenerating?(l(),i("span",_g)):F("",!0),te(" "+k(St.value||E($).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,Dg),W.value?(l(),i("div",qg,[n[80]||(n[80]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",Rg,k(W.value),1)])):F("",!0)],64)):H.value==="settings"?(l(),i("div",Og,[e("div",Fg,[n[83]||(n[83]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:E($).apiProvider,class:"select",onChange:n[32]||(n[32]=T=>E($).setProvider(T.target.value))},[...n[82]||(n[82]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"gemini"},"Google Gemini (Free tier for text)",-1)])],40,Ug)]),e("div",Vg,[n[84]||(n[84]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:E($).apiKey,class:"input",placeholder:q.value,onChange:n[33]||(n[33]=T=>E($).setApiKey(T.target.value))},null,40,Wg),e("p",Gg,k(ce.value),1)]),E($).apiProvider==="gemini"?(l(),i("div",Hg,[...n[85]||(n[85]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),te(" Gemini is enabled for content, quiz, voiceover, improve, and translate in this app. Gemini image generation may still require billing on the Google project. ",-1)])])):F("",!0),E($).apiKey?F("",!0):(l(),i("div",Yg,[n[86]||(n[86]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),n[87]||(n[87]=te(" Running in ",-1)),n[88]||(n[88]=e("strong",null,"demo mode",-1)),te(" — sample responses only. Add your "+k(z.value)+" API key to use real AI generation. ",1)]))])):F("",!0),W.value&&H.value!=="settings"&&H.value!=="quiz"?(l(),i("div",Jg,[e("div",Qg,[n[89]||(n[89]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[34]||(n[34]=T=>W.value="")},"Clear")]),e("pre",Xg,k(W.value),1),e("div",Kg,[H.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:ht},k(C.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):F("",!0),H.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:E($).isGenerating,onClick:Qe},[...n[90]||(n[90]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),te(" Regenerate ",-1)])],8,Zg)):F("",!0),H.value==="improve"&&Ae.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Gt}," Apply to Element ")):F("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:n[35]||(n[35]=T=>{var at;return(at=r.navigator.clipboard)==null?void 0:at.writeText(W.value)})}," Copy ")])])):F("",!0),E($).lastError?(l(),i("div",eb,[n[91]||(n[91]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),te(" "+k(E($).lastError),1)])):F("",!0)])])}}},ob=Ze(tb,[["__scopeId","data-v-3ccdb1b2"]]),nb={class:"theme-manager"},lb={class:"panel-section"},ib={class:"presets-grid"},ab=["title","onClick"],sb={class:"preset-preview"},rb={class:"preset-name"},db={class:"panel-section"},ub={class:"theme-fields"},cb={class:"form-label"},pb={class:"color-row"},vb=["value","onInput"],fb=["value","onChange"],mb={class:"panel-section"},gb={class:"theme-field"},bb=["value","placeholder"],yb={class:"chart-palette-preview"},hb={class:"panel-section"},xb={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wb=["value"],kb=["value"],Cb={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sb=["value"],$b=["value"],Ib={class:"form-group"},Eb=["value"],Ab={class:"panel-section"},Mb={class:"tp-chart-row"},Pb={key:0,class:"apply-message success"},Tb={key:1,class:"apply-message error"},Bb={__name:"ThemeManager",setup(x){const d=st(),s=rt(),c=M(()=>s.getProject(d.projectId)),p=M(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),b=M(()=>hl(p.value)),y=D(""),L=D("");function X(a){s.updateProject(d.projectId,{theme:{...p.value,...a}})}const le=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],_=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function P(a){X(a)}function fe(a,z){const q=a.content||{};return a.type==="text"?{content:{...q,fontFamily:z.fontFamily||q.fontFamily,color:z.textColor||q.color}}:a.type==="heading"?{content:{...q,fontFamily:z.headingFont||z.fontFamily||q.fontFamily,color:z.textColor||q.color}}:a.type==="shape"?{content:{...q,fillColor:z.secondaryColor||q.fillColor}}:a.type==="hotspot"?{content:{...q,bgColor:z.primaryColor||q.bgColor}}:a.type==="button"?{content:{...q,bgColor:z.primaryColor||q.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:z.fontFamily||q.fontFamily}}:a.type==="quiz"?{content:{...q,cardBgColor:z.bgColor||q.cardBgColor,questionColor:z.textColor||q.questionColor,accentColor:z.primaryColor||q.accentColor}}:a.type==="chart"?{content:{...q,...Il(z)}}:null}function $(){X({chartPalette:""})}function A(){y.value="",L.value="";const a=d.projectId,z=c.value,q=p.value;if(!a||!z){L.value="No active project to apply theme.";return}const ce=z.slides||[];let H=0;ce.forEach(m=>{(m.backgroundType||"color")==="color"&&s.updateSlide(a,m.id,{backgroundType:"color",background:q.bgColor||m.background||"#ffffff"}),(m.elements||[]).forEach(U=>{const W=fe(U,q);W&&(s.updateElement(a,m.id,U.id,W),H+=1)})}),y.value=`Applied theme to ${ce.length} slide${ce.length===1?"":"s"} and ${H} element${H===1?"":"s"}.`}return(a,z)=>(l(),i("div",nb,[e("div",lb,[z[4]||(z[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",ib,[(l(),i(oe,null,ue(le,q=>e("div",{key:q.name,class:"preset-card",title:q.name,onClick:ce=>P(q)},[e("div",sb,[e("div",{class:"pp-header",style:xe({background:q.primaryColor})},null,4),e("div",{class:"pp-body",style:xe({background:q.bgColor})},[e("div",{class:"pp-line",style:xe({background:q.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:xe({background:q.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:xe({background:q.secondaryColor})},null,4)]),e("span",rb,k(q.name),1)],8,ab)),64))])]),e("div",db,[z[5]||(z[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",ub,[(l(),i(oe,null,ue({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(q,ce)=>e("div",{class:"theme-field",key:ce},[e("label",cb,k(q),1),e("div",pb,[e("input",{type:"color",value:p.value[ce]||"#ffffff",class:"color-input-native",onInput:H=>X({[ce]:H.target.value})},null,40,vb),e("input",{value:p.value[ce]||"",class:"input",onChange:H=>X({[ce]:H.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,fb)])])),64))])]),e("div",mb,[z[8]||(z[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",gb,[z[6]||(z[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:E(Yl)(E(hl)(p.value)),onChange:z[0]||(z[0]=q=>X({chartPalette:q.target.value}))},null,40,bb),e("div",yb,[(l(!0),i(oe,null,ue(b.value,(q,ce)=>(l(),i("span",{key:`theme-chart-${ce}`,class:"chart-palette-dot",style:xe({background:q})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:$},"Use auto palette")]),z[7]||(z[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",hb,[z[12]||(z[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",xb,[z[9]||(z[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:z[1]||(z[1]=q=>X({headingFont:q.target.value}))},[(l(),i(oe,null,ue(_,q=>e("option",{key:q.value,value:q.value},k(q.label),9,kb)),64))],40,wb)]),e("div",Cb,[z[10]||(z[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:z[2]||(z[2]=q=>X({fontFamily:q.target.value}))},[(l(),i(oe,null,ue(_,q=>e("option",{key:q.value,value:q.value},k(q.label),9,$b)),64))],40,Sb)]),e("div",Ib,[z[11]||(z[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:z[3]||(z[3]=q=>X({fontSize:+q.target.value}))},null,40,Eb)])]),e("div",Ab,[z[13]||(z[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:xe({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:xe({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:xe({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:xe({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:xe({background:p.value.secondaryColor})},"Badge",4),e("div",Mb,[(l(!0),i(oe,null,ue(b.value.slice(0,5),(q,ce)=>(l(),i("span",{key:`preview-chart-${ce}`,class:"tp-chart-bar",style:xe({background:q,height:`${22+ce*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:A}," Apply Theme to Slides "),y.value?(l(),i("p",Pb,k(y.value),1)):F("",!0),L.value?(l(),i("p",Tb,k(L.value),1)):F("",!0)])]))}},Nb=Ze(Bb,[["__scopeId","data-v-da2b0ce4"]]),zb={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Lb={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},jb={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Db={class:"export-tabs tabs",style:{"overflow-x":"auto"}},_b={class:"export-content"},qb={class:"export-options",style:{"margin-bottom":"20px"}},Rb={class:"form-group"},Ob={class:"export-meta"},Fb={class:"meta-item"},Ub={class:"meta-item"},Vb={class:"meta-item"},Wb={class:"export-options",style:{"margin-bottom":"20px"}},Gb={class:"form-group"},Hb={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Yb={class:"export-options",style:{"margin-bottom":"20px"}},Jb={class:"form-group"},Qb={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Xb={class:"export-options",style:{"margin-bottom":"20px"}},Kb={class:"form-group"},Zb={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},ey={key:1,class:"export-success"},ty={__name:"ExportModal",setup(x){const d=st(),s=rt(),c=El(),p=M(()=>s.getProject(d.projectId)),b=D("json"),y=D(""),L=D(""),X=D(!0);nt(p,H=>{H&&!L.value&&(L.value=H.name||"presentation")},{immediate:!0});function le(){const H=s.exportProject(d.projectId);if(!H)return;const m=new Blob([H],{type:"application/json"}),U=URL.createObjectURL(m),W=document.createElement("a");W.href=U,W.download=`${L.value||"project"}.mediasurf.json`,W.click(),URL.revokeObjectURL(U),y.value="success",setTimeout(()=>y.value="",3e3)}function _(H,m="presentation"){return String(H).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||m}function P(H){return new Promise((m,U)=>{const W=new FileReader;W.onloadend=()=>m(W.result),W.onerror=()=>U(W.error),W.readAsDataURL(H)})}function fe(H,m,U="html"){const W=qt(m);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${W.width}px;
  --lf-slide-height: ${W.height}px;
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
`}function $(H="html"){return`
(function () {
  var exportMode = ${JSON.stringify(H)};

  var scorm = {
    api: null,
    init: function() {
      this.api = this.findAPI(window);
      if(this.api) {
        this.api.LMSInitialize("");
        var status = this.api.LMSGetValue("cmi.core.lesson_status");
        if(status === "not attempted" || status === "unknown") {
          this.api.LMSSetValue("cmi.core.lesson_status", "incomplete");
        }
      }
    },
    findAPI: function(win) {
      var attempts = 0, find = function(w) {
        while((w.API == null) && (w.parent != null) && (w.parent != w)) {
          attempts++; if(attempts > 7) return null;
          w = w.parent;
        }
        return w.API;
      };
      return find(win);
    },
    set: function(param, value) {
      if(this.api) this.api.LMSSetValue(param, value);
    },
    commit: function() {
      if(this.api) this.api.LMSCommit("");
    },
    finish: function() {
      if(this.api) this.api.LMSFinish("");
    }
  };
  if (exportMode === 'scorm') {
    scorm.init();
    window.addEventListener("unload", function() { scorm.commit(); scorm.finish(); });
  }

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

    if (exportMode === 'scorm' && typeof scorm !== 'undefined') {
      scorm.set("cmi.core.lesson_location", String(index + 1));
      if (index === slideNodes.length - 1) {
        scorm.set("cmi.core.lesson_status", "completed");
        scorm.set("cmi.core.score.raw", "100");
      }
      scorm.commit();
    }

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
    } else if (el.type === 'placeholder') { var placeholder = document.createElement('div'); placeholder.style.cssText = 'width:100%;height:100%;border:2px dashed #cbd5e1;background:rgba(248, 250, 252, 0.5);display:flex;align-items:center;justify-content:center;color:#64748b;font-family:sans-serif;font-size:14px;'; placeholder.textContent = content.prompt || 'Empty Placeholder'; wrapper.appendChild(placeholder); } else if (el.type === 'button') {
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
`}async function A(){return ce("html")}async function a(){return ce("iframe")}async function z(){return ce("scorm")}async function q(){return ce("pdf")}async function ce(H="html"){var ie,ge,we;const m=p.value;if(!m)return;y.value="processing";const U=H==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(H==="pdf"&&!U){y.value="error",setTimeout(()=>y.value="",3e3);return}const W=H==="pdf"?null:new si,Ie=W?W.folder("assets"):null;let V=0;async function Z(pe,be="media"){if((!pe||pe.startsWith("data:")||pe.startsWith("http://localhost")||pe.startsWith("blob:"))&&pe.startsWith("data:"))return pe;try{const N=await(await fetch(pe)).blob();if(H==="pdf")return await P(N);let S="bin";const R=N.type;if(R.includes("image/png")?S="png":R.includes("image/jpeg")?S="jpg":R.includes("image/gif")?S="gif":R.includes("image/svg")?S="svg":R.includes("image/webp")?S="webp":R.includes("video/mp4")?S="mp4":R.includes("audio/mpeg")&&(S="mp3"),S==="bin"){const Ge=pe.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);Ge&&(S=Ge[1])}V++;const ke=`${be}_${V}.${S}`;return Ie.file(ke,N),`assets/${ke}`}catch(re){return console.warn("Could not fetch asset:",pe,re),pe}}const ne=JSON.parse(JSON.stringify([...m.slides||[]])).sort((pe,be)=>(pe.order??0)-(be.order??0));if(X.value)for(const pe of ne){pe.backgroundType==="image"&&pe.backgroundImage&&(pe.backgroundImage=await Z(pe.backgroundImage,"bg"));for(const be of pe.elements||[])be.type==="image"&&((ie=be.content)!=null&&ie.src)&&(be.content.src=await Z(be.content.src,"img")),be.type==="video"&&((ge=be.content)!=null&&ge.src)&&!be.content.src.includes("youtube")&&!be.content.src.includes("youtu.be")&&(be.content.src=await Z(be.content.src,"vid")),be.type==="audio"&&((we=be.content)!=null&&we.src)&&(be.content.src=await Z(be.content.src,"aud"))}const me=_(L.value||m.name||"presentation"),ae={name:m.name,theme:m.theme||{},settings:m.settings||{},slides:ne},Ee=JSON.stringify(ae).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),C=fe(m.theme,m.settings,H),j=$(H),O=`<script id="lf-data" type="application/json">${Ee}<\/script>`,ye=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${me}</title>
${H==="pdf"?`<style>${C}</style>`:'<link rel="stylesheet" href="style.css">'}
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
  <span class="nav-counter" id="counter">1 / ${ne.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${O}
${H!=="pdf"?'<script src="script.js"><\/script>':`<script>${j}<\/script>`}
</body>
</html>`;if(H==="pdf"){U.document.open(),U.document.write(ye),U.document.close(),y.value="success",setTimeout(()=>y.value="",3e3);return}if(H==="scorm"){const pe=(me||"SCORM Export").replace(/[&<>'"]/g,""),be=`<?xml version="1.0" standalone="no" ?>
<manifest identifier="MediaSurf-SCORM" version="1.2"
          xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
          xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd
                              http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd
                              http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
  </metadata>
  <organizations default="default_org">
    <organization identifier="default_org">
      <title>${pe}</title>
      <item identifier="item_1" identifierref="resource_1">
        <title>${pe}</title>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="resource_1" type="webcontent" adlcp:scormtype="sco" href="index.html">
      <file href="index.html" />
      <file href="style.css" />
      <file href="script.js" />
    </resource>
  </resources>
</manifest>`;W.file("imsmanifest.xml",be)}W.file("index.html",ye),W.file("style.css",C),W.file("script.js",j);const Re=await W.generateAsync({type:"blob"}),Te=URL.createObjectURL(Re),Oe=document.createElement("a");Oe.href=Te,Oe.download=`${me}.zip`,Oe.click(),URL.revokeObjectURL(Te),y.value="success",setTimeout(()=>y.value="",3e3)}return(H,m)=>(l(),ot(Cl,{title:"Export Project",size:"md",onClose:m[14]||(m[14]=U=>E(d).showExportModal=!1)},{footer:vt(()=>[e("button",{class:"btn btn-secondary",onClick:m[13]||(m[13]=U=>E(d).showExportModal=!1)},"Close")]),default:vt(()=>{var U,W,Ie,V,Z;return[E(c).user?(l(),i(oe,{key:1},[e("div",Db,[e("button",{class:Y(["tab-btn",b.value==="json"&&"active"]),onClick:m[2]||(m[2]=ne=>b.value="json")},"JSON",2),e("button",{class:Y(["tab-btn",b.value==="html"&&"active"]),onClick:m[3]||(m[3]=ne=>b.value="html")},"HTML",2),e("button",{class:Y(["tab-btn",b.value==="iframe"&&"active"]),onClick:m[4]||(m[4]=ne=>b.value="iframe")},"Iframe",2),e("button",{class:Y(["tab-btn",b.value==="pdf"&&"active"]),onClick:m[5]||(m[5]=ne=>b.value="pdf")},"PDF",2),e("button",{class:Y(["tab-btn",b.value==="scorm"&&"active"]),onClick:m[6]||(m[6]=ne=>b.value="scorm")},"SCORM",2)]),e("div",_b,[b.value==="json"?(l(),i(oe,{key:0},[m[25]||(m[25]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",qb,[e("div",Rb,[m[20]||(m[20]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ve(e("input",{type:"text","onUpdate:modelValue":m[7]||(m[7]=ne=>L.value=ne),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[$e,L.value]])])]),e("div",Ob,[e("div",Fb,[m[21]||(m[21]=e("span",null,"Project",-1)),e("strong",null,k((U=p.value)==null?void 0:U.name),1)]),e("div",Ub,[m[22]||(m[22]=e("span",null,"Slides",-1)),e("strong",null,k(((Ie=(W=p.value)==null?void 0:W.slides)==null?void 0:Ie.length)||0),1)]),e("div",Vb,[m[23]||(m[23]=e("span",null,"Elements",-1)),e("strong",null,k(((Z=(V=p.value)==null?void 0:V.slides)==null?void 0:Z.reduce((ne,me)=>{var ae;return ne+(((ae=me.elements)==null?void 0:ae.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:le},[...m[24]||(m[24]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Download JSON ",-1)])])],64)):b.value==="html"?(l(),i(oe,{key:1},[m[29]||(m[29]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",Wb,[e("div",Gb,[m[26]||(m[26]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ve(e("input",{type:"text","onUpdate:modelValue":m[8]||(m[8]=ne=>L.value=ne),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[$e,L.value]])]),e("label",Hb,[ve(e("input",{type:"checkbox","onUpdate:modelValue":m[9]||(m[9]=ne=>X.value=ne)},null,512),[[_t,X.value]]),m[27]||(m[27]=te(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),m[30]||(m[30]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:A},[...m[28]||(m[28]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Download HTML ",-1)])])],64)):b.value==="iframe"?(l(),i(oe,{key:2},[m[34]||(m[34]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Yb,[e("div",Jb,[m[31]||(m[31]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ve(e("input",{type:"text","onUpdate:modelValue":m[10]||(m[10]=ne=>L.value=ne),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[$e,L.value]])]),e("label",Qb,[ve(e("input",{type:"checkbox","onUpdate:modelValue":m[11]||(m[11]=ne=>X.value=ne)},null,512),[[_t,X.value]]),m[32]||(m[32]=te(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...m[33]||(m[33]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Download Iframe Zip ",-1)])])],64)):b.value==="pdf"?(l(),i(oe,{key:3},[m[36]||(m[36]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),m[37]||(m[37]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:q},[...m[35]||(m[35]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Generate PDF ",-1)])])],64)):b.value==="scorm"?(l(),i(oe,{key:4},[m[40]||(m[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Xb,[e("div",Kb,[m[38]||(m[38]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ve(e("input",{type:"text","onUpdate:modelValue":m[12]||(m[12]=ne=>L.value=ne),class:"inp",placeholder:"My Course",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[$e,L.value]])])]),e("div",{style:{display:"flex","justify-content":"flex-end"}},[e("button",{class:"btn btn-primary export-btn",onClick:z},[...m[39]||(m[39]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Download SCORM ",-1)])])])],64)):F("",!0),pt(Dt,{name:"fade"},{default:vt(()=>[y.value==="processing"?(l(),i("div",Zb,[...m[41]||(m[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),te(" Generating package... Please wait. ",-1)])])):y.value==="success"?(l(),i("div",ey,[...m[42]||(m[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),te(" Export successful! Check your downloads folder. ",-1)])])):F("",!0)]),_:1})])],64)):(l(),i("div",zb,[(l(),i("svg",Lb,[...m[15]||(m[15]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),m[18]||(m[18]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),m[19]||(m[19]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",jb,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:m[0]||(m[0]=ne=>E(c).loginWithGoogle())},[...m[16]||(m[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),te(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:m[1]||(m[1]=ne=>E(c).loginWithMicrosoft())},[...m[17]||(m[17]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),te(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},oy=Ze(ty,[["__scopeId","data-v-82048238"]]),ny={key:0,class:"editor-view"},ly={class:"editor-topbar"},iy={class:"topbar-left"},ay={class:"project-name-wrap"},sy=["value"],ry={class:"save-label"},dy={class:"topbar-center"},uy={key:0,class:"slide-position"},cy={class:"topbar-right"},py={class:"editor-body"},vy={class:"authoring-rail"},fy=["onClick","data-tooltip"],my={key:0,class:"rail-icon"},gy={key:1,class:"rail-icon"},by={key:2,class:"rail-icon"},yy={key:3,class:"rail-icon"},hy={key:4,class:"rail-icon"},xy={key:5,class:"rail-icon"},wy={key:6,class:"rail-icon"},ky={key:7,class:"rail-icon"},Cy={key:8,class:"rail-icon"},Sy={key:9,class:"rail-icon"},$y={class:"right-panel"},Iy={class:"panel-tabs"},Ey=["onClick","data-tooltip"],Ay={class:"tab-icon"},My={class:"tab-label"},Py={class:"panel-content"},Ty={key:1,class:"editor-not-found"},By={__name:"EditorView",setup(x){const d=zl(),s=Nl(),c=st(),p=rt(),b=El(),y=M(()=>d.params.id),L=M(()=>p.getProject(y.value)),X=M(()=>qt(L.value)),le=M(()=>{var N;return[...((N=L.value)==null?void 0:N.slides)||[]].sort((S,R)=>S.order-R.order)}),_=D(null),P=D(!1),fe=D("deck"),{aiStore:$,showAIModal:A,aiMode:a,aiTopic:z,aiContext:q,aiProjectName:ce,aiSlideCount:H,aiQuestionCount:m,aiDifficulty:U,aiQuestionType:W,aiCreationError:Ie,aiSubmitting:V,aiProjectNamePlaceholder:Z,aiPrimaryActionLabel:ne,openAICreationModal:me,createAIProject:ae}=jl({onRequireAuth:()=>s.push({name:"dashboard"})});let Ee=!1,C=null;nt(()=>L.value,N=>{if(N){if(Ee){Ee=!1;return}C&&clearTimeout(C),C=setTimeout(()=>{c.pushHistory(N)},600)}},{deep:!0}),nt(()=>b.isAuthReady,async N=>{var S;if(N){if((S=b.user)!=null&&S.uid&&await p.ensureRemoteProjectsLoaded(),!L.value){s.push({name:"dashboard"});return}c.setProject(y.value),le.value.length>0&&c.setCurrentSlide(le.value[0].id),c.pushHistory(L.value)}},{immediate:!0});const j=M(()=>{const N=L.value;return N?`Saved ${new Date(N.updatedAt).toLocaleTimeString()}`:""}),O=M(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});ri({undo:()=>{if(c.canUndo()){const N=c.undo();N&&(Ee=!0,p.updateProject(y.value,N))}},redo:()=>{if(c.canRedo()){const N=c.redo();N&&(Ee=!0,p.updateProject(y.value,N))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var S,R,ke,Ge;const N=(Ge=(ke=(R=(S=L.value)==null?void 0:S.slides)==null?void 0:R.find(He=>He.id===c.currentSlideId))==null?void 0:ke.elements)==null?void 0:Ge.find(He=>He.id===c.selectedElementId);N&&c.setClipboard(N)},paste:()=>{if(c.clipboard&&c.currentSlideId){const N=c.clipboard;p.addElement(c.projectId,c.currentSlideId,N.type,{...N,x:N.x+20,y:N.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const N=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);N&&c.selectElement(N.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(N,S)=>{var ke,Ge,He,h;if(!c.selectedElementId)return;const R=(h=(He=(Ge=(ke=L.value)==null?void 0:ke.slides)==null?void 0:Ge.find(Ae=>Ae.id===c.currentSlideId))==null?void 0:He.elements)==null?void 0:h.find(Ae=>Ae.id===c.selectedElementId);R&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:R.x+N,y:R.y+S})},selectAll:()=>{var S,R,ke;(((ke=(R=(S=L.value)==null?void 0:S.slides)==null?void 0:R.find(Ge=>Ge.id===c.currentSlideId))==null?void 0:ke.elements)||[]).forEach((Ge,He)=>c.selectElement(Ge.id,He>0))}});function K(){s.push({name:"dashboard"})}function ye(){s.push({name:"preview",params:{id:y.value},query:{from:"editor"}})}function Re(N="deck"){fe.value=N,P.value=!0}function Te(){P.value=!1,me(fe.value)}function Oe(N,S="Image"){if(!c.projectId||!c.currentSlideId||!N)return;const R=new Image;R.onload=()=>{const He=Math.min(420/R.width,280/R.height,1),h=Math.max(120,Math.round(R.width*He)),Ae=Math.max(80,Math.round(R.height*He)),Fe=Math.max(24,Math.round((X.value.width-h)/2)),Ue=Math.max(24,Math.round((X.value.height-Ae)/2)),Qe=p.addElement(c.projectId,c.currentSlideId,"image",{x:Fe,y:Ue,width:h,height:Ae,content:{src:N,alt:S,objectFit:"cover"}});Qe&&(c.selectElement(Qe.id),c.setRightPanel("properties"),c.setActiveTool("select"))},R.src=N}function ie(N){const[S]=Array.from(N.target.files||[]);if(!S||!S.type.startsWith("image/"))return;const R=new FileReader;R.onload=()=>Oe(String(R.result||""),S.name),R.readAsDataURL(S),N.target.value=""}function ge(){var N;(N=_.value)==null||N.click()}const we=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function pe(N){if(N==="text"){c.setActiveTool("text");return}if(N==="blocks"){c.toggleSlidePanel("blocks");return}if(N==="resources"){c.setActiveTool("image");return}if(N==="interactive-elements"){c.setActiveTool("hotspot");return}if(N==="interactive-questions"){c.setActiveTool("quiz");return}if(N==="widgets"){c.setActiveTool("shape");return}if(N==="insert"){ge();return}if(N==="style"){c.setRightPanel("properties");return}if(N==="background"){c.clearSelection(),c.setRightPanel("properties");return}N==="pages"&&c.toggleSlidePanel("slides")}function be(N){return N==="text"?["text","heading"].includes(c.activeTool):N==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":N==="resources"?c.activeTool==="image":N==="interactive-elements"?["hotspot","button"].includes(c.activeTool):N==="interactive-questions"?c.activeTool==="quiz":N==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):N==="insert"?!1:N==="style"||N==="background"?c.rightPanelTab==="properties":N==="pages"?c.showSlidePanel:!1}function re(){ql({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return nt(()=>L.value,N=>{N&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{re()},100)},{immediate:!0}),(N,S)=>L.value?(l(),i("div",ny,[e("input",{ref_key:"imageInputRef",ref:_,type:"file",accept:"image/*",class:"sr-only",onChange:ie},null,544),e("header",ly,[e("div",iy,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:K,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...S[14]||(S[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),te(" Dashboard ",-1)])]),e("div",ay,[e("input",{value:L.value.name,class:"project-name-input",onChange:S[0]||(S[0]=R=>E(p).updateProject(y.value,{name:R.target.value}))},null,40,sy)]),e("span",ry,k(j.value),1)]),e("div",dy,[E(c).currentSlideId?(l(),i("span",uy," Slide "+k(le.value.findIndex(R=>R.id===E(c).currentSlideId)+1)+" of "+k(le.value.length),1)):F("",!0)]),e("div",cy,[e("button",{class:"btn btn-ghost btn-sm",onClick:re,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...S[15]||(S[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),te(" Help ",-1)])]),e("button",{class:Y(["btn btn-ghost btn-sm",E(c).showAIPanel&&"active-btn"]),onClick:S[1]||(S[1]=R=>{E(c).showAIPanel=!E(c).showAIPanel,E(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...S[16]||(S[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),te(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:S[2]||(S[2]=R=>{E(c).showThemeManager=!E(c).showThemeManager,E(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...S[17]||(S[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),te(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:ye,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...S[18]||(S[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),te(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:S[3]||(S[3]=R=>E(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...S[19]||(S[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Export ",-1)])])])]),pt(Lf,{onOpenAiProject:Re}),e("div",py,[e("aside",vy,[(l(),i(oe,null,ue(we,R=>e("button",{key:R.id,class:Y(["rail-option",be(R.id)&&"active"]),onClick:ke=>pe(R.id),"data-tooltip":R.label,"data-tooltip-position":"right"},[R.id==="text"?(l(),i("span",my,"T")):R.id==="blocks"?(l(),i("span",gy,[...S[20]||(S[20]=[it('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):R.id==="resources"?(l(),i("span",by,[...S[21]||(S[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):R.id==="interactive-elements"?(l(),i("span",yy,[...S[22]||(S[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):R.id==="interactive-questions"?(l(),i("span",hy,[...S[23]||(S[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):R.id==="widgets"?(l(),i("span",xy,[...S[24]||(S[24]=[it('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):R.id==="insert"?(l(),i("span",wy,[...S[25]||(S[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):R.id==="style"?(l(),i("span",ky,[...S[26]||(S[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):R.id==="background"?(l(),i("span",Cy,[...S[27]||(S[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):R.id==="pages"?(l(),i("span",Sy,[...S[28]||(S[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):F("",!0),te(" "+k(R.label),1)],10,fy)),64))]),pt(Dt,{name:"side-panel-slide"},{default:vt(()=>[E(c).showSlidePanel&&E(c).leftPanelTab==="slides"?(l(),ot(Ci,{key:0})):F("",!0)]),_:1}),pt(Dt,{name:"side-panel-slide"},{default:vt(()=>[E(c).showSlidePanel&&E(c).leftPanelTab==="blocks"?(l(),ot(Xi,{key:0})):F("",!0)]),_:1}),pt(_1),e("aside",$y,[e("div",Iy,[(l(),i(oe,null,ue([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],R=>e("button",{key:R.id,class:Y(["panel-tab",E(c).rightPanelTab===R.id&&"active"]),onClick:ke=>E(c).setRightPanel(R.id),"data-tooltip":`Open ${R.label}`,"data-tooltip-position":"bottom"},[e("span",Ay,k(R.icon),1),e("span",My,k(R.label),1)],10,Ey)),64))]),e("div",Py,[pt(Dt,{name:"editor-panel-switch",mode:"out-in"},{default:vt(()=>[(l(),i("div",{key:O.value,class:"panel-content-view"},[E(c).rightPanelTab==="properties"?(l(),ot(Qv,{key:0})):E(c).rightPanelTab==="layers"?(l(),ot(ya,{key:1})):E(c).rightPanelTab==="ai"?(l(),ot(ob,{key:2})):E(c).rightPanelTab==="theme"?(l(),ot(Nb,{key:3})):F("",!0)]))]),_:1})])])]),E(c).showExportModal?(l(),ot(oy,{key:0})):F("",!0),P.value?(l(),ot(Dl,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:S[4]||(S[4]=R=>P.value=!1),onConfirm:Te})):F("",!0),E(A)?(l(),ot(_l,{key:2,mode:E(a),topic:E(z),context:E(q),"project-name":E(ce),"slide-count":E(H),"question-count":E(m),difficulty:E(U),"question-type":E(W),"project-name-placeholder":E(Z),"primary-action-label":E(ne),"creation-error":E(Ie),"is-submitting":E(V),"is-generating":E($).isGenerating,"has-api-key":!!E($).apiKey,onClose:S[5]||(S[5]=R=>A.value=!1),onCreate:E(ae),"onUpdate:mode":S[6]||(S[6]=R=>a.value=R),"onUpdate:topic":S[7]||(S[7]=R=>z.value=R),"onUpdate:context":S[8]||(S[8]=R=>q.value=R),"onUpdate:projectName":S[9]||(S[9]=R=>ce.value=R),"onUpdate:slideCount":S[10]||(S[10]=R=>H.value=R),"onUpdate:questionCount":S[11]||(S[11]=R=>m.value=R),"onUpdate:difficulty":S[12]||(S[12]=R=>U.value=R),"onUpdate:questionType":S[13]||(S[13]=R=>W.value=R)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):F("",!0)])):(l(),i("div",Ty,[S[29]||(S[29]=e("h2",null,"Project not found",-1)),S[30]||(S[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:K},"Go to Dashboard")]))}},Ry=Ze(By,[["__scopeId","data-v-902e6311"]]);export{Ry as default};
