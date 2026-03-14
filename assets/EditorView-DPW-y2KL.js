import{O as Xt,R as xl,v as l,F as i,B as e,C as k,H as te,I as fe,E as Le,D as W,u as E,S as ye,Q as it,G as F,P as ee,q as ot,U as wl,f as T,r as R,K as me,M as Se,x as vt,L as Rt,w as nt,n as kl,V as Al,y as pt,i as Tl,W as Ml,T as Dt,N as jt,z as Pl,p as Bl,J as hl}from"./vue-core-C16mQSCt.js";import{u as Nl,d as zl}from"./vue-ecosystem-2OskZsFi.js";import{u as rt,M as Cl,c as Ll,a as jl,C as Dl,A as Rl,b as _l}from"./ConfirmActionModal-CLLQOLg5.js";import{u as st,b as ql,g as _t,C as Qt,c as Ol,n as Fl,p as Vl,s as Hl,m as Sl,f as $l,d as Il,e as Ul,h as Jt,B as Wl,i as Gl,j as Yl,k as yl,a as El}from"./projectStore-B4z7JDUK.js";import{_ as Ze}from"./index-BUBQNbfd.js";import{P as Ql,S as Jl,C as Xl,a as Kl,M as Zl,_ as ei,b as ti,c as oi,F as ni,A as li,T as ii,d as ai}from"./ProgressElement-B9BPR-qF.js";import{J as ri}from"./jszip-529iNPX7.js";function si(x){function d(r){var L,Y,ie,q,j,ve,$,M,a,z,V,be,ce,oe,m,C,se;const c=r.ctrlKey||r.metaKey,p=r.key.toLowerCase(),b=r.target.tagName.toLowerCase(),h=b==="input"||b==="textarea"||r.target.isContentEditable;h&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!r.shiftKey?(r.preventDefault(),(L=x.undo)==null||L.call(x)):c&&(p==="y"||p==="z"&&r.shiftKey)?(r.preventDefault(),(Y=x.redo)==null||Y.call(x)):c&&p==="c"?(r.preventDefault(),(ie=x.copy)==null||ie.call(x)):c&&p==="v"?(r.preventDefault(),(q=x.paste)==null||q.call(x)):c&&p==="x"?(r.preventDefault(),(j=x.cut)==null||j.call(x)):c&&p==="d"?(r.preventDefault(),(ve=x.duplicate)==null||ve.call(x)):c&&p==="a"?(r.preventDefault(),($=x.selectAll)==null||$.call(x)):p==="delete"||p==="backspace"?h||(r.preventDefault(),(M=x.delete)==null||M.call(x)):p==="escape"?(a=x.escape)==null||a.call(x):c&&p==="g"?(r.preventDefault(),(z=x.toggleGrid)==null||z.call(x)):c&&p==="="||c&&p==="+"?(r.preventDefault(),(V=x.zoomIn)==null||V.call(x)):c&&p==="-"?(r.preventDefault(),(be=x.zoomOut)==null||be.call(x)):c&&p==="0"?(r.preventDefault(),(ce=x.zoomReset)==null||ce.call(x)):p==="arrowleft"?(oe=x.nudge)==null||oe.call(x,-1,0):p==="arrowright"?(m=x.nudge)==null||m.call(x,1,0):p==="arrowup"?(C=x.nudge)==null||C.call(x,0,-1):p==="arrowdown"&&((se=x.nudge)==null||se.call(x,0,1)))}Xt(()=>window.addEventListener("keydown",d)),xl(()=>window.removeEventListener("keydown",d))}const di={class:"slide-panel"},ui={class:"slide-panel-header"},ci={class:"slide-count"},pi={class:"slides-list"},vi=["onClick","onContextmenu","onDragstart","onDrop"],fi={class:"slide-number"},mi=["viewBox"],gi=["x","y","width","height","fill"],bi=["d","stroke"],hi=["d","fill"],yi={class:"slide-footer"},xi={class:"slide-title"},wi=["onClick"],ki={__name:"SlidePanel",setup(x){const d=rt(),r=st(),c=T(()=>r.getProject(d.projectId)),p=T(()=>_t(c.value)),b=T(()=>{var U,Z;return((Z=(U=c.value)==null?void 0:U.slides)==null?void 0:Z.slice().sort((pe,ne)=>pe.order-ne.order))||[]}),h=R({show:!1,x:0,y:0,slideId:null});function L(U){d.setCurrentSlide(U)}function Y(){const U=b.value.findIndex(pe=>pe.id===d.currentSlideId),Z=r.addSlide(d.projectId,U);Z&&d.setCurrentSlide(Z.id)}function ie(U){var ne,le;const Z=b.value.findIndex(we=>we.id===U);r.deleteSlide(d.projectId,U);const pe=((ne=c.value)==null?void 0:ne.slides)||[];if(pe.length>0){const we=pe.slice().sort((D,O)=>D.order-O.order),S=Math.min(Z,we.length-1);d.setCurrentSlide((le=we[S])==null?void 0:le.id)}}function q(U,Z){U.preventDefault(),h.value={show:!0,x:U.clientX,y:U.clientY,slideId:Z},setTimeout(()=>window.addEventListener("click",j,{once:!0}),0)}function j(){h.value.show=!1}function ve(){const U=r.duplicateSlide(d.projectId,h.value.slideId);U&&d.setCurrentSlide(U.id),j()}function $(){ie(h.value.slideId),j()}function M(U,Z){U.stopPropagation(),ie(Z)}function a(){const U=b.value.findIndex(Z=>Z.id===h.value.slideId);U>0&&r.reorderSlides(d.projectId,U,U-1),j()}function z(){const U=b.value.findIndex(Z=>Z.id===h.value.slideId);U<b.value.length-1&&r.reorderSlides(d.projectId,U,U+1),j()}let V=-1;function be(U,Z){V=Z,U.dataTransfer.effectAllowed="move"}function ce(U,Z){U.preventDefault(),V!==-1&&V!==Z&&r.reorderSlides(d.projectId,V,Z),V=-1}function oe(U){return U.backgroundType==="gradient"&&U.backgroundGradient?{background:U.backgroundGradient}:U.backgroundType==="image"&&U.backgroundImage?{backgroundImage:`url(${U.backgroundImage})`,backgroundSize:"cover"}:{background:U.background||"#fff"}}function m(U){return{left:U.x/p.value.width*100+"%",top:U.y/p.value.height*100+"%",width:U.width/p.value.width*100+"%",height:U.height/p.value.height*100+"%"}}function C(U){var Z,pe;return{background:U.type==="shape"?(Z=U.content)==null?void 0:Z.fillColor:U.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:U.type==="shape"&&((pe=U.content)==null?void 0:pe.shapeType)==="circle"?"50%":void 0}}function se(U){var Z;return ql(U.content||{},U.width||420,U.height||280,((Z=c.value)==null?void 0:Z.theme)||{})}return(U,Z)=>(l(),i("div",di,[e("div",ui,[Z[2]||(Z[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",ci,k(b.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:Y,"data-tooltip":"Add slide","aria-label":"Add slide"},[...Z[1]||(Z[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",pi,[(l(!0),i(te,null,fe(b.value,(pe,ne)=>(l(),i("div",{key:pe.id,class:W(["slide-thumb-item",E(d).currentSlideId===pe.id&&"active"]),draggable:"true",onClick:le=>L(pe.id),onContextmenu:le=>q(le,pe.id),onDragstart:le=>be(le,ne),onDragover:Z[0]||(Z[0]=Le(()=>{},["prevent"])),onDrop:le=>ce(le,ne)},[e("div",fi,k(ne+1),1),e("div",{class:"slide-thumb",style:ye(oe(pe))},[(l(!0),i(te,null,fe(pe.elements.slice(0,6),le=>{var we;return l(),i("div",{key:le.id,class:"mini-element-frame",style:ye(m(le))},[le.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${le.width||420} ${le.height||280}`,preserveAspectRatio:"none"},[se(le).type==="bar"?(l(!0),i(te,{key:0},fe(se(le).cartesian.bars,S=>(l(),i("rect",{key:`mini-bar-${S.id}`,x:S.x,y:S.y,width:S.width,height:S.height,fill:S.color,rx:"6"},null,8,gi))),128)):se(le).type==="line"?(l(),i("path",{key:1,d:se(le).cartesian.linePath,stroke:((we=se(le).cartesian.points[0])==null?void 0:we.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,bi)):(l(!0),i(te,{key:2},fe(se(le).circle.slices,S=>(l(),i("path",{key:`mini-slice-${S.id}`,d:S.path,fill:S.color},null,8,hi))),128))],8,mi)):(l(),i("div",{key:1,class:"mini-element",style:ye(C(le))},null,4))],4)}),128))],4),e("div",yi,[e("div",xi,k(pe.title||`Slide ${ne+1}`),1),b.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:le=>M(le,pe.id)},[...Z[3]||(Z[3]=[it('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,wi)):F("",!0)])],42,vi))),128))]),e("button",{class:"add-slide-bottom",onClick:Y},[...Z[4]||(Z[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),ee(" Add Slide ",-1)])]),(l(),ot(wl,{to:"body"},[h.value.show?(l(),i("div",{key:0,class:"context-menu",style:ye({left:h.value.x+"px",top:h.value.y+"px"})},[e("button",{class:"ctx-item",onClick:ve},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:z},"Move Down"),Z[5]||(Z[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:$},"Delete Slide")],4)):F("",!0)]))]))}},Ci=Ze(ki,[["__scopeId","data-v-30eea542"]]),Si={class:"blocks-panel"},$i={class:"blocks-panel-header"},Ii={class:"blocks-toolbar"},Ei={class:"blocks-categories"},Ai=["onClick"],Ti={class:"blocks-panel-body"},Mi={class:"blocks-save-card"},Pi=["disabled"],Bi={class:"blocks-list"},Ni=["onDragstart"],zi={class:"block-thumb-stage"},Li={class:"block-card-body"},ji={class:"block-card-head"},Di={class:"block-name"},Ri={class:"block-meta"},_i={key:0},qi={key:1},Oi=["onClick"],Fi={class:"block-description"},Vi={key:0,class:"block-binding-note"},Hi={class:"block-tags"},Ui=["onClick"],Wi={class:"binding-modal-body"},Gi={class:"binding-modal-intro"},Yi=["for"],Qi=["id","onUpdate:modelValue"],Ji={__name:"BlocksPanel",setup(x){const d=rt(),r=st(),c=R(""),p=R("all"),b=R(""),h=R("Custom"),L=R(!1),Y=R(null),ie=R({}),q=T(()=>r.getProject(d.projectId)),j=T(()=>{var S,D;return(D=(S=q.value)==null?void 0:S.slides)==null?void 0:D.find(O=>O.id===d.currentSlideId)}),ve=T(()=>r.getContentBlocks(d.projectId)),$=T(()=>{const S=new Set(["all"]);return ve.value.forEach(D=>S.add(D.category||"Custom")),Array.from(S)}),M=T(()=>{var D;const S=new Set(d.selectedElementIds);return(((D=j.value)==null?void 0:D.elements)||[]).filter(O=>S.has(O.id))}),a=T(()=>{var S;return Array.isArray((S=Y.value)==null?void 0:S.bindings)?Y.value.bindings:[]}),z=T(()=>{const S=c.value.trim().toLowerCase();return ve.value.filter(D=>p.value==="all"||(D.category||"Custom")===p.value?S?[D.name,D.description,D.category,...D.tags||[]].join(" ").toLowerCase().includes(S):!0:!1)});function V(S){const D=Array.isArray(S==null?void 0:S.elements)?S.elements:[];if(!D.length)return{minX:0,minY:0,width:1,height:1};const O=Math.min(...D.map(Be=>Number(Be.x||0))),J=Math.min(...D.map(Be=>Number(Be.y||0))),xe=Math.max(...D.map(Be=>Number(Be.x||0)+Number(Be.width||0))),je=Math.max(...D.map(Be=>Number(Be.y||0)+Number(Be.height||0)));return{minX:O,minY:J,width:Math.max(1,xe-O),height:Math.max(1,je-J)}}function be(S,D){const O=V(S);return{left:`${(Number(D.x||0)-O.minX)/O.width*100}%`,top:`${(Number(D.y||0)-O.minY)/O.height*100}%`,width:`${Number(D.width||0)/O.width*100}%`,height:`${Number(D.height||0)/O.height*100}%`}}function ce(S){var D,O,J,xe,je,Be,Oe;return S.type==="shape"?{background:((D=S.content)==null?void 0:D.fillColor)||"#cbd5e1",borderRadius:((O=S.content)==null?void 0:O.shapeType)==="circle"?"50%":`${Number(((J=S.content)==null?void 0:J.borderRadius)||10)}px`,border:`${Math.max(0,Number(((xe=S.content)==null?void 0:xe.borderWidth)||0))}px solid ${((je=S.content)==null?void 0:je.borderColor)||"transparent"}`}:S.type==="button"?{background:((Be=S.content)==null?void 0:Be.bgColor)||"#6c47ff",borderRadius:`${Number(((Oe=S.content)==null?void 0:Oe.borderRadius)||10)}px`}:S.type==="image"||S.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:S.type==="text"||S.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function oe(S,D){const O=S.type==="heading"?2:3,J=Math.max(18,100/(O+1.25));return{width:`${D===O-1?72:100}%`,height:`${S.type==="heading"?J:J-2}%`}}function m(S){S.length&&(d.setSelection(S.map(D=>D.id)),d.focusPropertiesSection("content"),d.setActiveTool("select"))}function C(S){return Array.isArray(S==null?void 0:S.bindings)&&S.bindings.length>0}function se(){L.value=!1,Y.value=null,ie.value={}}function U(S,D=null){const O=r.insertContentBlock(d.projectId,d.currentSlideId,S.id,D?{bindingValues:D}:{});m(O)}function Z(S){if(!C(S)){U(S);return}Y.value=S,ie.value=Object.fromEntries(S.bindings.map(D=>[D.id,D.defaultValue||""])),L.value=!0}function pe(){Y.value&&(U(Y.value,{...ie.value}),se())}function ne(){var O,J;const S=b.value.trim();if(!S||!M.value.length)return;r.saveSelectionAsContentBlock(d.projectId,d.currentSlideId,M.value.map(xe=>xe.id),{name:S,category:h.value.trim()||"Custom",accent:((J=(O=q.value)==null?void 0:O.theme)==null?void 0:J.primaryColor)||"#6c47ff"})&&(b.value="",p.value="Custom")}function le(S){r.deleteContentBlock(d.projectId,S)}function we(S,D){S.dataTransfer&&(S.dataTransfer.effectAllowed="copy",S.dataTransfer.setData(Qt,JSON.stringify({id:D.id})),S.dataTransfer.setData("text/plain",D.name))}return(S,D)=>(l(),i("div",Si,[e("div",$i,[D[5]||(D[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:D[0]||(D[0]=O=>E(d).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...D[4]||(D[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",Ii,[me(e("input",{"onUpdate:modelValue":D[1]||(D[1]=O=>c.value=O),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[Se,c.value]]),e("div",Ei,[(l(!0),i(te,null,fe($.value,O=>(l(),i("button",{key:O,type:"button",class:W(["blocks-category-chip",p.value===O&&"active"]),onClick:J=>p.value=O},k(O==="all"?"All":O),11,Ai))),128))])]),e("div",Ti,[e("div",Mi,[D[6]||(D[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),D[7]||(D[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),me(e("input",{"onUpdate:modelValue":D[2]||(D[2]=O=>b.value=O),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[Se,b.value]]),me(e("input",{"onUpdate:modelValue":D[3]||(D[3]=O=>h.value=O),class:"input",placeholder:"Category"},null,512),[[Se,h.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!M.value.length||!b.value.trim(),onClick:ne}," Save "+k(M.value.length?`${M.value.length} item${M.value.length>1?"s":""}`:"selection")+" as block ",9,Pi)]),e("div",Bi,[(l(!0),i(te,null,fe(z.value,O=>(l(),i("div",{key:O.id,class:"block-card",draggable:"true",onDragstart:J=>we(J,O)},[e("div",{class:"block-thumb",style:ye({"--block-accent":O.accent||"#6c47ff"})},[e("div",zi,[(l(!0),i(te,null,fe(O.elements,J=>(l(),i("div",{key:`${O.id}-${J.type}-${J.x}-${J.y}`,class:"block-thumb-frame",style:ye(be(O,J))},[["text","heading"].includes(J.type)?(l(),i("div",{key:0,class:W(["thumb-text",J.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(te,null,fe(J.type==="heading"?2:3,xe=>(l(),i("span",{key:`${O.id}-${J.type}-${J.x}-${J.y}-${xe}`,class:"thumb-text-line",style:ye(oe(J,xe-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:ye(ce(J))},null,4))],4))),128))])],4),e("div",Li,[e("div",ji,[e("div",null,[e("div",Di,k(O.name),1),e("div",Ri,[ee(k(O.category),1),O.scope==="custom"?(l(),i("span",_i," · Custom")):F("",!0),C(O)?(l(),i("span",qi," · "+k(O.bindings.length)+" field"+k(O.bindings.length>1?"s":""),1)):F("",!0)])]),O.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:J=>le(O.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...D[8]||(D[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,Oi)):F("",!0)]),e("p",Fi,k(O.description||"Reusable layout block"),1),C(O)?(l(),i("div",Vi,"Editable placeholders included")):F("",!0),e("div",Hi,[(l(!0),i(te,null,fe(O.tags||[],J=>(l(),i("span",{key:`${O.id}-${J}`,class:"block-tag"},"#"+k(J),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:J=>Z(O)},k(C(O)?"Insert with Fields":"Insert Block"),9,Ui)])],40,Ni))),128))])]),L.value?(l(),ot(Cl,{key:0,title:"Fill Template Fields",size:"md",onClose:se},{footer:vt(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:se},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:pe},"Insert Block")]),default:vt(()=>{var O;return[e("div",Wi,[e("p",Gi,[D[9]||(D[9]=ee(" Customize the placeholder text before inserting ",-1)),e("strong",null,k((O=Y.value)==null?void 0:O.name),1),D[10]||(D[10]=ee(". ",-1))]),(l(!0),i(te,null,fe(a.value,J=>(l(),i("div",{key:J.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${J.id}`},k(J.label),9,Yi),me(e("textarea",{id:`binding-${J.id}`,"onUpdate:modelValue":xe=>ie.value[J.id]=xe,class:"textarea binding-input"},null,8,Qi),[[Se,ie.value[J.id]]])]))),128))])]}),_:1})):F("",!0)]))}},Xi=Ze(Ji,[["__scopeId","data-v-aec67d0c"]]),Ki={class:"layer-panel"},Zi={class:"layer-header panel-section"},ea={class:"panel-title",style:{"margin-bottom":"0"}},ta={class:"layer-count"},oa={key:0,class:"layers-empty"},na={key:1,class:"layers-list"},la=["onClick"],ia={class:"layer-type-icon"},aa={class:"layer-name"},ra={class:"layer-actions"},sa=["onClick","data-tooltip"],da={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ua={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ca=["onClick","data-tooltip"],pa={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},va={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},fa=["onClick"],ma=["onClick"],ga=["onClick"],ba={__name:"LayerPanel",setup(x){const d=rt(),r=st(),c=T(()=>r.getProject(d.projectId)),p=T(()=>{var M,a;return(a=(M=c.value)==null?void 0:M.slides)==null?void 0:a.find(z=>z.id===d.currentSlideId)}),b=T(()=>{var M;return[...((M=p.value)==null?void 0:M.elements)||[]].sort((a,z)=>(z.zIndex||0)-(a.zIndex||0))});function h(M){d.selectElement(M)}function L(M){r.updateElement(d.projectId,d.currentSlideId,M.id,{visible:!M.visible})}function Y(M){r.updateElement(d.projectId,d.currentSlideId,M.id,{locked:!M.locked})}function ie(M){r.reorderElement(d.projectId,d.currentSlideId,M,"up")}function q(M){r.reorderElement(d.projectId,d.currentSlideId,M,"down")}function j(M){r.deleteElement(d.projectId,d.currentSlideId,M),d.selectedElementId===M&&d.clearSelection()}function ve(M){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[M]||"◆"}function $(M){var a,z,V;return(a=M.content)!=null&&a.text?M.content.text.slice(0,24):(z=M.content)!=null&&z.label?M.content.label:(V=M.content)!=null&&V.question?M.content.question.slice(0,24):M.type.charAt(0).toUpperCase()+M.type.slice(1)}return(M,a)=>(l(),i("div",Ki,[e("div",Zi,[e("div",ea,[a[0]||(a[0]=ee(" Layers ",-1)),e("span",ta,k(b.value.length),1)])]),b.value.length===0?(l(),i("div",oa,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",na,[(l(!0),i(te,null,fe(b.value,z=>(l(),i("div",{key:z.id,class:W(["layer-item",E(d).selectedElementIds.includes(z.id)&&"selected",z.locked&&"locked",!z.visible&&"hidden"]),onClick:V=>h(z.id)},[e("span",ia,k(ve(z.type)),1),e("span",aa,k($(z)),1),e("div",ra,[e("button",{class:W(["layer-action-btn",{active:z.visible}]),onClick:Le(V=>L(z),["stop"]),"data-tooltip":z.visible?"Hide":"Show"},[z.visible?(l(),i("svg",da,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",ua,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,sa),e("button",{class:W(["layer-action-btn",{active:z.locked}]),onClick:Le(V=>Y(z),["stop"]),"data-tooltip":z.locked?"Unlock":"Lock"},[z.locked?(l(),i("svg",pa,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",va,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,ca),e("button",{class:"layer-action-btn",onClick:Le(V=>ie(z.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,fa),e("button",{class:"layer-action-btn",onClick:Le(V=>q(z.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,ma),e("button",{class:"layer-action-btn danger",onClick:Le(V=>j(z.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,ga)])],10,la))),128))]))]))}},ha=Ze(ba,[["__scopeId","data-v-7407acd8"]]),ya={class:"panel-section"},xa={class:"preset-toolbar"},wa=["value"],ka=["value"],Ca=["value"],Sa={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},$a=["onClick"],Ia={class:"preset-meta-chip muted"},Ea={key:1,class:"import-review"},Aa={class:"motion-scrubber-header"},Ta={class:"preset-toolbar compact"},Ma=["value"],Pa=["value"],Ba={class:"import-list"},Na=["onUpdate:modelValue"],za={class:"import-item-title"},La={class:"preset-meta-chip"},ja={key:0,class:"preset-meta-chip muted"},Da={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(x,{emit:d}){const r=d;return(c,p)=>(l(),i("div",ya,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",xa,[e("input",{value:x.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=b=>r("update:searchQuery",b.target.value))},null,40,wa),e("select",{value:x.categoryFilter,class:"select",onChange:p[1]||(p[1]=b=>r("update:categoryFilter",b.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(te,null,fe(x.availableCategories,b=>(l(),i("option",{key:`library-${b}`,value:b},k(b),9,Ca))),128))],40,ka),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=b=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=b=>r("export-presets"))},"Export")]),x.recentPresets.length?(l(),i("div",Sa,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(te,null,fe(x.recentPresets,b=>(l(),i("div",{class:"preset-item",key:`recent-${b.id}`},[e("button",{type:"button",class:"preset-chip",onClick:h=>r("apply-preset",b)},k(b.name),9,$a),e("span",Ia,"Used "+k(b.usageCount)+"x",1)]))),128))])):F("",!0),x.pendingImportedPresets.length?(l(),i("div",Ea,[e("div",Aa,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=b=>r("clear-imports"))},"Discard")]),e("div",Ta,[e("select",{value:x.importScopeFilter,class:"select",onChange:p[5]||(p[5]=b=>r("update:importScopeFilter",b.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Ma),e("select",{value:x.importConflictMode,class:"select",onChange:p[6]||(p[6]=b=>r("update:importConflictMode",b.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Pa),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=b=>r("apply-imports"))},"Merge Selected")]),e("div",Ba,[(l(!0),i(te,null,fe(x.filteredPendingImports,b=>(l(),i("label",{key:`pending-${b.id}`,class:"import-item"},[me(e("input",{"onUpdate:modelValue":h=>b.selected=h,type:"checkbox"},null,8,Na),[[Rt,b.selected]]),e("span",za,k(b.name),1),e("span",La,k(b.scope),1),b.category?(l(),i("span",ja,k(b.category),1)):F("",!0)]))),128))])])):F("",!0)]))}},Ra=Ze(Da,[["__scopeId","data-v-61f99273"]]),_a={class:"panel-section"},qa={style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"12px"}},Oa={style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"12px"}},Fa={key:0,style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"16px"}},Va={class:"panel-section"},Ha={class:"field-hint"},Ua={class:"motion-scrubber-shell"},Wa={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Ga=["onClick"],Ya={class:"motion-preview"},Qa={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Ja={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Xa={class:"motion-card-label"},Ka={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Za={class:"form-group"},er={class:"form-group"},tr={class:"form-group",style:{"margin-top":"var(--space-3)"}},or={class:"preset-row",style:{"margin-top":"var(--space-3)"}},nr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},lr={key:0,class:"preset-list"},ir=["onDragstart","onDragenter","onDrop"],ar=["onClick"],rr={key:0,class:"preset-meta-chip"},sr=["onClick"],dr=["onClick"],ur=["onClick"],cr={key:1,class:"preset-row preset-edit-row"},pr=["onClick"],vr={key:1,class:"field-hint"},fr={key:2,class:"panel-section"},mr={class:"slide-settings-tabs"},gr={key:0,class:"slide-settings-pane"},br={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hr={class:"form-group"},yr={class:"bg-type-tabs"},xr=["onClick"],wr={key:0,class:"color-row"},kr=["value"],Cr=["value"],Sr={class:"slide-settings-subsection"},$r={class:"canvas-size-grid"},Ir=["onClick"],Er={class:"canvas-size-icon-shell"},Ar={class:"canvas-size-name"},Tr={class:"canvas-size-ratio"},Mr={class:"canvas-custom-card"},Pr={class:"canvas-custom-header"},Br={class:"field-hint"},Nr={class:"canvas-custom-inputs"},zr={class:"form-group"},Lr={class:"canvas-size-input-wrap"},jr=["value"],Dr={class:"form-group"},Rr={class:"canvas-size-input-wrap"},_r=["value"],qr={class:"check-row canvas-size-lock"},Or={class:"slide-settings-subsection"},Fr={key:1,class:"slide-settings-pane"},Vr=["value"],Hr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ur=["value"],Wr={class:"check-row"},Gr=["checked"],Yr={key:2,class:"slide-settings-pane"},Qr={class:"check-row"},Jr=["checked"],Xr={class:"check-row"},Kr=["checked"],Zr={class:"check-row"},es=["checked"],ts={class:"check-row"},os=["checked"],ns={class:"check-row"},ls=["checked"],is={class:"panel-title"},as={class:"element-type-badge"},rs={class:"geo-grid"},ss={class:"form-group"},ds=["value"],us={class:"form-group"},cs=["value"],ps={class:"form-group"},vs=["value"],fs={class:"form-group"},ms=["value"],gs={class:"form-group"},bs=["value"],hs={class:"form-group"},ys=["value"],xs={class:"motion-scrubber-shell"},ws={class:"motion-card-grid"},ks=["onClick"],Cs={class:"motion-preview"},Ss={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},$s={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Is={class:"motion-card-label"},Es={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},As={class:"form-group"},Ts=["value"],Ms={class:"form-group"},Ps=["value"],Bs={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ns={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},zs={key:0,class:"preset-list"},Ls=["onDragstart","onDragenter","onDrop"],js=["onClick"],Ds={key:0,class:"preset-meta-chip"},Rs=["onClick"],_s=["onClick"],qs=["onClick"],Os={key:1,class:"preset-row preset-edit-row"},Fs=["onClick"],Vs={key:1,class:"field-hint"},Hs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Us=["value"],Ws={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Gs={class:"form-group"},Ys=["value"],Qs={class:"form-group"},Js=["value"],Xs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ks=["value"],Zs=["value"],ed={class:"form-group",style:{"margin-top":"var(--space-3)"}},td={class:"align-btns"},od=["onClick"],nd={class:"form-group",style:{"margin-top":"var(--space-3)"}},ld={class:"style-btns"},id={class:"form-group",style:{"margin-top":"var(--space-3)"}},ad={class:"color-row"},rd=["value"],sd=["value"],dd={class:"form-group",style:{"margin-top":"var(--space-3)"}},ud=["value"],cd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},pd={class:"form-group"},vd=["value"],fd={class:"form-group"},md=["value"],gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},bd=["value"],hd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},yd=["value"],xd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wd=["value"],kd={class:"form-group"},Cd=["value"],Sd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},$d={class:"form-group"},Id=["value"],Ed={class:"form-group"},Ad=["value"],Td={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Md=["value"],Pd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Bd={class:"color-row"},Nd=["value"],zd=["value"],Ld={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jd={class:"color-row"},Dd=["value"],Rd=["value"],_d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qd=["value"],Od={class:"form-group"},Fd=["value"],Vd={class:"form-group",style:{"margin-top":"var(--space-3)"}},Hd=["value"],Ud={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wd=["value"],Gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Yd=["value"],Qd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Jd=["value"],Xd={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Kd={class:"chart-data-actions"},Zd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},eu=["value","placeholder"],tu={class:"chart-palette-preview"},ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},nu={class:"form-group"},lu=["value"],iu={class:"form-group"},au=["value"],ru={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},su={class:"form-group"},du=["value"],uu={class:"form-group"},cu=["value"],pu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},vu={class:"form-group"},fu=["value"],mu={key:0,class:"form-group"},gu=["value"],bu={key:1,class:"form-group"},hu=["value"],yu={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},xu={class:"form-group"},wu=["value"],ku={class:"check-row",style:{"margin-top":"20px"}},Cu=["checked"],Su={class:"check-row"},$u=["checked"],Iu={key:1,class:"check-row"},Eu=["checked"],Au={class:"check-row"},Tu=["checked"],Mu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pu=["value"],Bu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Nu=["value"],zu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Lu=["value"],ju={key:0,class:"form-group"},Du=["value"],Ru={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_u={class:"form-group"},qu=["value"],Ou={class:"form-group"},Fu=["value"],Vu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Hu={class:"form-group"},Uu=["value"],Wu={class:"form-group"},Gu=["value"],Yu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Qu={class:"form-group"},Ju=["value"],Xu={class:"form-group"},Ku=["value"],Zu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ec={class:"form-group"},tc=["value"],oc=["value"],nc={class:"form-group"},lc=["value"],ic={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ac=["value"],rc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},sc={class:"color-row"},dc=["value"],uc=["value"],cc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},pc={class:"form-group"},vc=["value"],fc={class:"form-group"},mc=["value"],gc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},bc=["value"],hc={class:"form-group"},yc=["value"],xc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},wc={class:"form-group"},kc=["value"],Cc={class:"form-group"},Sc=["value"],$c={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ic=["value"],Ec={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ac=["value"],Tc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mc=["value"],Pc={class:"check-row"},Bc=["checked"],Nc={class:"check-row"},zc=["checked"],Lc={class:"check-row"},jc=["checked"],Dc={class:"check-row"},Rc=["checked"],_c={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qc=["value"],Oc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fc=["value"],Vc={class:"check-row"},Hc=["checked"],Uc={class:"check-row"},Wc=["checked"],Gc={class:"check-row"},Yc=["checked"],Qc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Jc={class:"form-group"},Xc=["value"],Kc={class:"form-group"},Zc=["value"],ep={class:"form-group",style:{"margin-top":"var(--space-3)"}},tp=["value"],op={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},np=["value"],lp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ip=["value"],ap={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rp=["value"],sp={class:"form-group"},dp=["value"],up={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},cp={class:"form-group"},pp=["value"],vp={class:"form-group"},fp=["value"],mp={class:"form-group",style:{"margin-top":"var(--space-3)"}},gp=["value"],bp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hp=["value"],yp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},xp={class:"form-group"},wp=["value"],kp={class:"form-group"},Cp=["value"],Sp={class:"form-group"},$p=["value"],Ip={class:"form-group"},Ep=["value"],Ap={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tp=["value"],Mp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Pp={class:"form-group"},Bp=["value"],Np={class:"form-group"},zp=["value"],Lp={class:"form-group"},jp=["value"],Dp={class:"form-group"},Rp=["value"],_p={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qp=["value"],Op={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fp=["value"],Vp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hp=["value"],Up={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wp=["value"],Gp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Yp=["value"],Qp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Jp={class:"form-group"},Xp=["value"],Kp={class:"form-group"},Zp=["value"],ev={class:"form-group"},tv=["value"],ov={class:"form-group"},nv=["value"],lv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},iv=["value"],av={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},rv={class:"form-group"},sv=["value"],dv={class:"form-group"},uv=["value"],cv={class:"form-group"},pv=["value"],vv={class:"form-group"},fv=["value"],mv={class:"form-group"},gv=["value"],bv={class:"form-group",style:{"margin-top":"var(--space-3)"}},hv=["value"],yv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},xv={class:"form-group"},wv=["value"],kv={class:"form-group"},Cv=["value"],Sv={class:"form-group",style:{"margin-top":"var(--space-3)"}},$v=["value"],Iv={class:"form-group"},Ev=["value"],Av={class:"form-group"},Tv=["value"],Mv={class:"form-group"},Pv=["value"],Bv={class:"form-group",style:{"margin-top":"var(--space-3)"}},Nv={style:{display:"flex","align-items":"center",gap:"8px"}},zv=["checked"],Lv={class:"form-group"},jv=["value"],Dv={class:"form-group"},Rv=["value"],_v={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},qv={class:"form-group"},Ov=["value"],Fv={class:"form-group"},Vv=["value"],Hv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Uv={class:"form-group"},Wv=["value"],Gv={class:"panel-section"},Yv={class:"actions-list"},Qv={__name:"PropertiesPanel",setup(x){const d=rt(),r=st(),c=T(()=>r.getProject(d.projectId)),p=T(()=>{var u,t;return(t=(u=c.value)==null?void 0:u.slides)==null?void 0:t.find(N=>N.id===d.currentSlideId)}),b=T(()=>{var u;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((u=c.value)==null?void 0:u.settings)||{}}}),h=T(()=>_t(b.value)),L=T(()=>Sl(b.value)),Y=T(()=>$l(h.value.width,h.value.height)),ie=R(!0),q=R("canvas"),j=T(()=>Array.isArray(b.value.motionPresets)?b.value.motionPresets:[]),ve=T(()=>j.value.filter(u=>u.scope!=="group")),$=T(()=>j.value.filter(u=>u.scope==="group")),M=T(()=>{var t;const u=new Set(d.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(N=>u.has(N.id))}),a=T(()=>{var u,t;return d.selectedElementId?(t=(u=p.value)==null?void 0:u.elements)==null?void 0:t.find(N=>N.id===d.selectedElementId):null}),z=T(()=>d.multiSelection||!!a.value),V=T(()=>d.multiSelection?"group":"single"),be=T(()=>{var t,N;const u=(N=(t=a.value)==null?void 0:t.animations)==null?void 0:N[0];return{type:(u==null?void 0:u.type)||"auto",delay:Number((u==null?void 0:u.delay)||0),duration:Number((u==null?void 0:u.duration)||.64)}}),ce=T(()=>{var Pe,Re;const u=M.value.map(ze=>{var Ce;return((Ce=ze.animations)==null?void 0:Ce[0])||null}),t=((Pe=u[0])==null?void 0:Pe.type)||"auto",N=Number(((Re=u[0])==null?void 0:Re.duration)||.64),ae=u.every(ze=>((ze==null?void 0:ze.type)||"auto")===t),ke=u.every(ze=>Number((ze==null?void 0:ze.duration)||.64)===N);return{type:ae?t:"mixed",duration:ke?N:.64}}),oe=R(0),m=R(0),C=R(""),se=R(""),U=R(""),Z=R(""),pe=R(""),ne=R(""),le=R(""),we=R(""),S=R(""),D=R(""),O=R(""),J=R(""),xe=R(""),je=R("all"),Be=R(null),Oe=R(null),Ve=R([]),re=R("all"),de=R("replace"),Ee=R(""),ge=R(null),X=R("");let P=null;const A=R({});nt(a,u=>{u?A.value=JSON.parse(JSON.stringify(u)):A.value={},(u==null?void 0:u.type)==="chart"&&(Ee.value="")},{immediate:!0,deep:!0}),nt(()=>{var u;return[d.propertiesPanelSection,(u=a.value)==null?void 0:u.id,d.rightPanelTab]},async([u,t,N])=>{var ke;if(!u||!t||N!=="properties")return;await kl();const ae=(ke=ge.value)==null?void 0:ke.querySelector(`[data-props-anchor="${u}"]`);ae&&(ae.scrollIntoView({behavior:"smooth",block:"start"}),X.value=u,P&&window.clearTimeout(P),P=window.setTimeout(()=>{X.value===u&&(X.value="")},1400))},{immediate:!0});function _(){if(!M.value.length)return;const u=window.prompt("Enter block name","Custom Block");u&&(r.saveSelectionAsContentBlock(d.projectId,d.currentSlideId,d.selectedElementIds,{name:u}),d.openLeftPanel("blocks"))}function Ie(u){const t=M.value;if(t.length<2)return;let N=1/0,ae=1/0,ke=-1/0,Pe=-1/0;t.forEach(Ce=>{const qe=Ce.width||100,Ke=Ce.height||100;Ce.x<N&&(N=Ce.x),Ce.y<ae&&(ae=Ce.y),Ce.x+qe>ke&&(ke=Ce.x+qe),Ce.y+Ke>Pe&&(Pe=Ce.y+Ke)});let Re=N+(ke-N)/2,ze=ae+(Pe-ae)/2;t.forEach(Ce=>{let qe={};const Ke=Ce.width||100,wt=Ce.height||100;u==="left"&&(qe.x=N),u==="center"&&(qe.x=Re-Ke/2),u==="right"&&(qe.x=ke-Ke),u==="top"&&(qe.y=ae),u==="middle"&&(qe.y=ze-wt/2),u==="bottom"&&(qe.y=Pe-wt),r.updateElement(d.projectId,d.currentSlideId,Ce.id,qe)})}function Ae(u){const t=[...M.value];if(!(t.length<3))if(u==="horizontal"){t.sort((Ce,qe)=>Ce.x-qe.x);const N=t[0],ae=t[t.length-1],ke=t.reduce((Ce,qe)=>Ce+(qe.width||100),0),Re=(ae.x+(ae.width||100)-N.x-ke)/(t.length-1);let ze=N.x+(N.width||100)+Re;for(let Ce=1;Ce<t.length-1;Ce++)r.updateElement(d.projectId,d.currentSlideId,t[Ce].id,{x:ze}),ze+=(t[Ce].width||100)+Re}else{t.sort((Ce,qe)=>Ce.y-qe.y);const N=t[0],ae=t[t.length-1],ke=t.reduce((Ce,qe)=>Ce+(qe.height||100),0),Re=(ae.y+(ae.height||100)-N.y-ke)/(t.length-1);let ze=N.y+(N.height||100)+Re;for(let Ce=1;Ce<t.length-1;Ce++)r.updateElement(d.projectId,d.currentSlideId,t[Ce].id,{y:ze}),ze+=(t[Ce].height||100)+Re}}function Fe(u){a.value&&r.updateElement(d.projectId,d.currentSlideId,a.value.id,u)}function y(u){if(!a.value)return;const t={...a.value.content,...u};Fe({content:t})}function $e(u,t){try{return JSON.parse(u)}catch{return t}}function He(u,t){const N=parseFloat(t);isNaN(N)||Fe({[u]:N})}const Ue=R({});nt(p,u=>{u&&(Ue.value={...u})},{immediate:!0});function Je(u){p.value&&r.updateSlide(d.projectId,p.value.id,u)}function Ye(u){if(!c.value)return;const t={...b.value,...u};r.updateProject(d.projectId,{settings:{...t,...Fl(t)}})}function Tt(u){Ye({slideWidth:u.width,slideHeight:u.height})}function ct(u,t){const N=Math.round(Number(t)||0);if(!N)return;const ae={[`slide${u==="width"?"Width":"Height"}`]:N};if(ie.value){const ke=h.value.width,Pe=h.value.height;u==="width"?ae.slideHeight=Math.round(N*(Pe/ke)):ae.slideWidth=Math.round(N*(ke/Pe))}Ye(ae)}const _e=T(()=>{var u;return Il(((u=c.value)==null?void 0:u.theme)||{})}),ft=T(()=>{var t,N;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const u=((N=a.value.content)==null?void 0:N.paletteText)||_e.value.paletteText;return Ul(u)});function et(u){const t=Vl(u,{fallbackToDefault:!1});return t.length?Hl(t):""}function At(u){var N;if(((N=a.value)==null?void 0:N.type)!=="chart")return;const t=et(u);t&&(y({dataText:t}),Ee.value="")}async function Mt(u){var ae;const t=u.target,N=(ae=t==null?void 0:t.files)==null?void 0:ae[0];if(N)try{const ke=await N.text();At(ke)}finally{t&&(t.value="")}}function Pt(){var u;(u=Oe.value)==null||u.click()}function Bt(){var t,N;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const u=et(((N=a.value.content)==null?void 0:N.dataText)||"");u&&y({dataText:u})}function Nt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&y({..._e.value})}function zt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&y({paletteText:_e.value.paletteText})}function mt(u){return String(u||"").split(",").map(t=>t.trim()).filter(Boolean)}function g(u){const t=(u==null?void 0:u.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((u==null?void 0:u.name)||"Imported Preset").trim()||"Imported Preset",category:String((u==null?void 0:u.category)||"").trim(),tags:Array.isArray(u==null?void 0:u.tags)?u.tags.map(N=>String(N).trim()).filter(Boolean):mt(u==null?void 0:u.tags),type:String((u==null?void 0:u.type)||"auto"),delay:Math.max(0,Number(u==null?void 0:u.delay)||0),duration:Math.max(.1,Number(u==null?void 0:u.duration)||.72),stepDelay:Math.max(0,Number(u==null?void 0:u.stepDelay)||0)}}const w=T(()=>[...new Set(j.value.map(t=>t.category).filter(Boolean))].sort((t,N)=>t.localeCompare(N))),K=T(()=>[...j.value].filter(u=>Number(u.usageCount||0)>0).sort((u,t)=>{const N=Number(t.lastUsedAt||0)-Number(u.lastUsedAt||0);return N!==0?N:Number(t.usageCount||0)-Number(u.usageCount||0)}).slice(0,6)),H=T(()=>re.value==="all"?Ve.value:Ve.value.filter(u=>u.scope===re.value));function Me(u){const t=xe.value.trim().toLowerCase(),N=je.value;return N==="all"||(u.category||"")===N?t?[u.name,u.category,...u.tags||[]].filter(Boolean).some(ke=>String(ke).toLowerCase().includes(t)):!0:!1}const Ne=T(()=>ve.value.filter(Me)),Ge=T(()=>$.value.filter(Me)),Xe=T(()=>K.value.filter(u=>V.value==="group"?u.scope==="group":u.scope!=="group"));function ue(u){const t=String(u.name||"").trim();if(!t)return;const N=j.value.findIndex(Pe=>Pe.scope===u.scope&&Pe.name.toLowerCase()===t.toLowerCase()),ae={...u,id:N>=0?j.value[N].id:`motion-${Date.now()}`,name:t,category:String(u.category||"").trim(),tags:Array.isArray(u.tags)?u.tags:mt(u.tags)},ke=[...j.value];N>=0?ke.splice(N,1,ae):ke.push(ae),Ye({motionPresets:ke})}function Te(u,t){const N=j.value.map(ae=>ae.id===u?{...ae,...t}:ae);Ye({motionPresets:N})}function lt(u){const t=j.value.find(N=>N.id===u);t&&Te(u,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function We(u,t){const N=j.value.filter(Re=>Re.scope===u).map(Re=>Re.name.toLowerCase()),ae=String(t||"Preset").trim()||"Preset";if(!N.includes(ae.toLowerCase()))return ae;let ke=2,Pe=`${ae} Copy`;for(;N.includes(Pe.toLowerCase());)Pe=`${ae} Copy ${ke}`,ke+=1;return Pe}function De(u){Ye({motionPresets:j.value.filter(t=>t.id!==u)}),U.value===u&&(U.value="",Z.value="")}function Qe(u){ue({...u,id:void 0,name:We(u.scope,u.name)})}function yt(u){U.value=u.id,Z.value=u.name,pe.value=u.category||"",ne.value=Array.isArray(u.tags)?u.tags.join(", "):""}function gt(){U.value="",Z.value="",pe.value="",ne.value=""}function kt(u){const t=String(Z.value||"").trim();t&&(Te(u,{name:t,category:String(pe.value||"").trim(),tags:mt(ne.value)}),gt())}function Ut(u,t,N){if(!t||!N||t===N)return;const ae=j.value.filter(Ke=>Ke.scope===u),ke=ae.findIndex(Ke=>Ke.id===t),Pe=ae.findIndex(Ke=>Ke.id===N);if(ke===-1||Pe===-1)return;const Re=[...ae],[ze]=Re.splice(ke,1);Re.splice(Pe,0,ze);const Ce=j.value.filter(Ke=>Ke.scope!==u),qe=[];j.value.forEach(Ke=>{if(Ke.scope===u){Re.length&&qe.push(Re.shift());return}const wt=Ce.shift();wt&&qe.push(wt)}),Ye({motionPresets:qe})}function Ct(u){le.value=u.id,we.value=u.id}function qt(u){le.value&&(we.value=u.id)}function Lt(u){le.value&&(Ut(u.scope,le.value,u.id),le.value="",we.value="")}function Ot(){le.value="",we.value=""}function Ft(){oe.value+=1}function Vt(){m.value+=1}function dt(u,t){Je({[u]:t})}function St(u){const t=Math.max(0,Number(u)||0);Je({duration:t})}function $t(u){var ae;if(!a.value)return;const N={...((ae=a.value.animations)==null?void 0:ae[0])||{type:"auto",delay:0,duration:.64},...u};if(N.type==="auto"){Fe({animations:[]});return}Fe({animations:[{type:N.type||"none",delay:Math.max(0,Number(N.delay)||0),duration:Math.max(.1,Number(N.duration)||.64)}]})}const ut=R("stagger-in"),bt=R(0),xt=R(.12),ht=R(.72);nt(M,u=>{u.length&&(ut.value=ce.value.type==="mixed"?"stagger-in":ce.value.type,ht.value=ce.value.duration)},{immediate:!0,deep:!0});function Wt(){if(!M.value.length)return;[...M.value].sort((t,N)=>(t.y||0)!==(N.y||0)?(t.y||0)-(N.y||0):(t.x||0)-(N.x||0)).forEach((t,N)=>{if(ut.value==="auto"){r.updateElement(d.projectId,d.currentSlideId,t.id,{animations:[]});return}r.updateElement(d.projectId,d.currentSlideId,t.id,{animations:[{type:ut.value,delay:Math.max(0,Number(bt.value)||0)+N*Math.max(0,Number(xt.value)||0),duration:Math.max(.1,Number(ht.value)||.72)}]})})}function Ht(u){ut.value=u.type||"stagger-in",bt.value=Number(u.delay||0),xt.value=Number(u.stepDelay||0),ht.value=Number(u.duration||.72),lt(u.id),Vt()}function s(){ue({scope:"group",name:se.value,category:O.value,tags:mt(J.value),type:ut.value,delay:Math.max(0,Number(bt.value)||0),stepDelay:Math.max(0,Number(xt.value)||0),duration:Math.max(.1,Number(ht.value)||.72)}),se.value="",O.value="",J.value=""}function n(u){$t({type:u.type||"auto",delay:Number(u.delay||0),duration:Number(u.duration||.72)}),lt(u.id),Ft()}function v(){ue({scope:"single",name:C.value,category:S.value,tags:mt(D.value),type:be.value.type,delay:Math.max(0,Number(be.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(be.value.duration)||.72)}),C.value="",S.value="",D.value=""}function I(){var u;(u=Be.value)==null||u.click()}async function f(u){var ae;const t=u.target,N=(ae=t==null?void 0:t.files)==null?void 0:ae[0];if(N)try{const ke=await N.text(),Pe=JSON.parse(ke),Re=Array.isArray(Pe)?Pe:Array.isArray(Pe.motionPresets)?Pe.motionPresets:[];if(!Re.length)return;Ve.value=Re.map(ze=>({...g(ze),selected:!0,importName:String((ze==null?void 0:ze.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function G(){Ve.value=[]}function he(){const u=Ve.value.filter(N=>N.selected);if(!u.length)return;const t=[...j.value];u.forEach(N=>{const ae=t.findIndex(ke=>ke.scope===N.scope&&ke.name.toLowerCase()===N.name.toLowerCase());if(ae>=0){de.value==="replace"?t.splice(ae,1,{...t[ae],...N,id:t[ae].id}):t.push({...N,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:We(N.scope,N.name)});return}t.push(N)}),Ye({motionPresets:t}),G()}function tt(){var Pe;if(!j.value.length)return;const u={version:1,exportedAt:new Date().toISOString(),motionPresets:j.value.map(({id:Re,...ze})=>ze)},t=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),N=URL.createObjectURL(t),ae=document.createElement("a"),ke=String(((Pe=c.value)==null?void 0:Pe.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";ae.href=N,ae.download=`${ke}-motion-presets.json`,document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),URL.revokeObjectURL(N)}const B=T(()=>[{id:`single-${oe.value}`,delay:Math.max(0,Number(be.value.delay)||0),duration:Math.max(.1,Number(be.value.duration)||.72),type:be.value.type}]),at=T(()=>Array.from({length:Math.min(Math.max(M.value.length,3),5)},(u,t)=>({id:`group-${m.value}-${t}`,delay:Math.max(0,Number(bt.value)||0)+t*Math.max(0,Number(xt.value)||0),duration:Math.max(.1,Number(ht.value)||.72),type:ut.value}))),It=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Et=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(u,t)=>{var N,ae,ke,Pe,Re,ze,Ce,qe,Ke,wt,Kt,Zt,eo,to,oo,no,lo,io,ao,ro,so,uo,co,po,vo,fo,mo,go,bo,ho,yo,xo,wo,ko,Co,So,$o,Io,Eo,Ao,To,Mo,Po,Bo,No,zo,Lo,jo,Do,Ro,_o,qo,Oo,Fo,Vo,Ho,Uo,Wo,Go,Yo,Qo,Jo,Xo,Ko,Zo,en,tn,on,nn,ln,an,rn,sn,dn,un,cn,pn,vn,fn,mn,gn,bn,hn,yn,xn,wn,kn,Cn,Sn,$n,In,En,An,Tn,Mn,Pn,Bn,Nn,zn,Ln,jn,Dn,Rn,_n,qn,On,Fn,Vn,Hn,Un,Wn,Gn,Yn,Qn,Jn,Xn,Kn,Zn,el,tl,ol,nl,ll,il,al,rl,sl,dl,ul,cl,pl,vl,fl,ml,gl;return l(),i("div",{ref_key:"panelRootRef",ref:ge,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Be,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:f},null,544),e("input",{ref_key:"chartImportInput",ref:Oe,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:Mt},null,544),t[398]||(t[398]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),z.value?(l(),ot(Ra,{key:0,"search-query":xe.value,"category-filter":je.value,"available-categories":w.value,"recent-presets":Xe.value,"pending-imported-presets":Ve.value,"filtered-pending-imports":H.value,"import-scope-filter":re.value,"import-conflict-mode":de.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>xe.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>je.value=o),onTriggerImport:I,onExportPresets:tt,onApplyPreset:t[2]||(t[2]=o=>V.value==="group"?Ht(o):n(o)),onClearImports:G,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>re.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>de.value=o),onApplyImports:he},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):F("",!0),E(d).multiSelection?(l(),i(te,{key:1},[e("div",_a,[t[190]||(t[190]=e("div",{class:"panel-title"},"Arrange Selection",-1)),e("div",qa,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[5]||(t[5]=o=>Ie("left")),title:"Align Left"},"Left"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[6]||(t[6]=o=>Ie("center")),title:"Align Center"},"Center"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[7]||(t[7]=o=>Ie("right")),title:"Align Right"},"Right")]),e("div",Oa,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[8]||(t[8]=o=>Ie("top")),title:"Align Top"},"Top"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[9]||(t[9]=o=>Ie("middle")),title:"Align Middle"},"Middle"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[10]||(t[10]=o=>Ie("bottom")),title:"Align Bottom"},"Bottom")]),M.value.length>=3?(l(),i("div",Fa,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[11]||(t[11]=o=>Ae("horizontal")),title:"Distribute Horizontally"},"Distribute H"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[12]||(t[12]=o=>Ae("vertical")),title:"Distribute Vertically"},"Distribute V")])):F("",!0),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:_}," Save as Content Block ")]),e("div",Va,[t[195]||(t[195]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",Ha,k(M.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",Ua,[e("div",{class:"motion-scrubber-header"},[t[191]||(t[191]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Vt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${m.value}`},[(l(!0),i(te,null,fe(at.value,o=>(l(),i("span",{key:o.id,class:W(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ye({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Wa,[(l(),i(te,null,fe(It,o=>e("button",{key:`group-${o.value}`,type:"button",class:W(["motion-card",ut.value===o.value&&"active"]),onClick:Q=>ut.value=o.value},[e("span",Ya,[e("span",{class:W(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Qa)):F("",!0),o.value==="stagger-in"?(l(),i("span",Ja)):F("",!0)]),e("span",Xa,k(o.label),1)],10,Ga)),64))]),e("div",Ka,[e("div",Za,[t[192]||(t[192]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),me(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[13]||(t[13]=o=>bt.value=o),class:"input"},null,512),[[Se,bt.value]])]),e("div",er,[t[193]||(t[193]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),me(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[14]||(t[14]=o=>xt.value=o),class:"input"},null,512),[[Se,xt.value]])])]),e("div",tr,[t[194]||(t[194]=e("label",{class:"form-label"},"Duration (seconds)",-1)),me(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[15]||(t[15]=o=>ht.value=o),class:"input"},null,512),[[Se,ht.value]])]),e("div",or,[me(e("input",{"onUpdate:modelValue":t[16]||(t[16]=o=>se.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[Se,se.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:s},"Save")]),e("div",nr,[me(e("input",{"onUpdate:modelValue":t[17]||(t[17]=o=>O.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[Se,O.value]]),me(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>J.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[Se,J.value]])]),Ge.value.length?(l(),i("div",lr,[(l(!0),i(te,null,fe(Ge.value,o=>(l(),i("div",{key:o.id,class:W(["preset-item",le.value===o.id&&"dragging",we.value===o.id&&le.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:Q=>Ct(o),onDragenter:Le(Q=>qt(o),["prevent"]),onDragover:t[22]||(t[22]=Le(()=>{},["prevent"])),onDrop:Le(Q=>Lt(o),["prevent"]),onDragend:Ot},[e("button",{type:"button",class:"preset-chip",onClick:Q=>Ht(o)},k(o.name),9,ar),o.category?(l(),i("span",rr,k(o.category),1)):F("",!0),(l(!0),i(te,null,fe(o.tags||[],Q=>(l(),i("span",{key:`${o.id}-${Q}`,class:"preset-meta-chip muted"},"#"+k(Q),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>Qe(o)},"Duplicate",8,sr),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>yt(o)},"Rename",8,dr),e("button",{type:"button",class:"preset-mini-btn danger",onClick:Q=>De(o.id)},"Delete",8,ur),U.value===o.id?(l(),i("div",cr,[me(e("input",{"onUpdate:modelValue":t[19]||(t[19]=Q=>Z.value=Q),class:"input"},null,512),[[Se,Z.value]]),me(e("input",{"onUpdate:modelValue":t[20]||(t[20]=Q=>pe.value=Q),class:"input",placeholder:"Category"},null,512),[[Se,pe.value]]),me(e("input",{"onUpdate:modelValue":t[21]||(t[21]=Q=>ne.value=Q),class:"input",placeholder:"Tags, comma separated"},null,512),[[Se,ne.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Q=>kt(o.id)},"Save",8,pr),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):F("",!0)],42,ir))),128))])):$.value.length?(l(),i("div",vr,"No group presets match the current search.")):F("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Wt}," Apply Sequence to Selection ")])],64)):a.value?(l(),i(te,{key:3},[e("div",{class:W(["panel-section",X.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",is,[t[226]||(t[226]=ee(" Position & Size ",-1)),e("span",as,k(a.value.type),1)]),e("div",rs,[e("div",ss,[t[227]||(t[227]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[47]||(t[47]=o=>He("x",o.target.value))},null,40,ds)]),e("div",us,[t[228]||(t[228]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[48]||(t[48]=o=>He("y",o.target.value))},null,40,cs)]),e("div",ps,[t[229]||(t[229]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[49]||(t[49]=o=>He("width",o.target.value))},null,40,vs)]),e("div",fs,[t[230]||(t[230]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[50]||(t[50]=o=>He("height",o.target.value))},null,40,ms)]),e("div",gs,[t[231]||(t[231]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[51]||(t[51]=o=>He("rotation",o.target.value))},null,40,bs)]),e("div",hs,[t[232]||(t[232]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[52]||(t[52]=o=>He("opacity",o.target.value))},null,40,ys)])])],2),e("div",{class:W(["panel-section",X.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[236]||(t[236]=e("div",{class:"panel-title"},"Animation",-1)),e("div",xs,[e("div",{class:"motion-scrubber-header"},[t[233]||(t[233]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ft},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${oe.value}`},[(l(!0),i(te,null,fe(B.value,o=>(l(),i("span",{key:o.id,class:W(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ye({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",ws,[(l(),i(te,null,fe(It,o=>e("button",{key:o.value,type:"button",class:W(["motion-card",be.value.type===o.value&&"active"]),onClick:Q=>$t({type:o.value})},[e("span",Cs,[e("span",{class:W(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Ss)):F("",!0),o.value==="stagger-in"?(l(),i("span",$s)):F("",!0)]),e("span",Is,k(o.label),1)],10,ks)),64))]),e("div",Es,[e("div",As,[t[234]||(t[234]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:be.value.delay,class:"input",onChange:t[53]||(t[53]=o=>$t({delay:o.target.value}))},null,40,Ts)]),e("div",Ms,[t[235]||(t[235]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:be.value.duration,class:"input",onChange:t[54]||(t[54]=o=>$t({duration:o.target.value}))},null,40,Ps)])]),e("div",Bs,[me(e("input",{"onUpdate:modelValue":t[55]||(t[55]=o=>C.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[Se,C.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v},"Save")]),e("div",Ns,[me(e("input",{"onUpdate:modelValue":t[56]||(t[56]=o=>S.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[Se,S.value]]),me(e("input",{"onUpdate:modelValue":t[57]||(t[57]=o=>D.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[Se,D.value]])]),Ne.value.length?(l(),i("div",zs,[(l(!0),i(te,null,fe(Ne.value,o=>(l(),i("div",{key:o.id,class:W(["preset-item",le.value===o.id&&"dragging",we.value===o.id&&le.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:Q=>Ct(o),onDragenter:Le(Q=>qt(o),["prevent"]),onDragover:t[61]||(t[61]=Le(()=>{},["prevent"])),onDrop:Le(Q=>Lt(o),["prevent"]),onDragend:Ot},[e("button",{type:"button",class:"preset-chip",onClick:Q=>n(o)},k(o.name),9,js),o.category?(l(),i("span",Ds,k(o.category),1)):F("",!0),(l(!0),i(te,null,fe(o.tags||[],Q=>(l(),i("span",{key:`${o.id}-${Q}`,class:"preset-meta-chip muted"},"#"+k(Q),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>Qe(o)},"Duplicate",8,Rs),e("button",{type:"button",class:"preset-mini-btn",onClick:Q=>yt(o)},"Rename",8,_s),e("button",{type:"button",class:"preset-mini-btn danger",onClick:Q=>De(o.id)},"Delete",8,qs),U.value===o.id?(l(),i("div",Os,[me(e("input",{"onUpdate:modelValue":t[58]||(t[58]=Q=>Z.value=Q),class:"input"},null,512),[[Se,Z.value]]),me(e("input",{"onUpdate:modelValue":t[59]||(t[59]=Q=>pe.value=Q),class:"input",placeholder:"Category"},null,512),[[Se,pe.value]]),me(e("input",{"onUpdate:modelValue":t[60]||(t[60]=Q=>ne.value=Q),class:"input",placeholder:"Tags, comma separated"},null,512),[[Se,ne.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Q=>kt(o.id)},"Save",8,Fs),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):F("",!0)],42,Ls))),128))])):ve.value.length?(l(),i("div",Vs,"No single-element presets match the current search.")):F("",!0),t[237]||(t[237]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[253]||(t[253]=e("div",{class:"panel-title"},"Text",-1)),e("div",Hs,[t[238]||(t[238]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(qe=a.value.content)==null?void 0:qe.text,class:"textarea",style:{"min-height":"64px"},onInput:t[62]||(t[62]=o=>y({text:o.target.value}))},null,40,Us)]),e("div",Ws,[e("div",Gs,[t[239]||(t[239]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(Ke=a.value.content)==null?void 0:Ke.fontSize,class:"input",onChange:t[63]||(t[63]=o=>y({fontSize:+o.target.value}))},null,40,Ys)]),e("div",Qs,[t[241]||(t[241]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(wt=a.value.content)==null?void 0:wt.fontWeight,class:"select",onChange:t[64]||(t[64]=o=>y({fontWeight:o.target.value}))},[...t[240]||(t[240]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Js)])]),e("div",Xs,[t[242]||(t[242]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Kt=a.value.content)==null?void 0:Kt.fontFamily,class:"select",onChange:t[65]||(t[65]=o=>y({fontFamily:o.target.value}))},[(l(),i(te,null,fe(Et,o=>e("option",{key:o,value:o},k(o.split(",")[0]),9,Zs)),64))],40,Ks)]),e("div",ed,[t[243]||(t[243]=e("label",{class:"form-label"},"Align",-1)),e("div",td,[(l(),i(te,null,fe(["left","center","right","justify"],o=>{var Q;return e("button",{key:o,class:W(["align-btn",((Q=a.value.content)==null?void 0:Q.textAlign)===o&&"active"]),onClick:bl=>y({textAlign:o})},k(o[0].toUpperCase()),11,od)}),64))])]),e("div",nd,[t[247]||(t[247]=e("label",{class:"form-label"},"Style",-1)),e("div",ld,[e("button",{class:W(["style-btn",((Zt=a.value.content)==null?void 0:Zt.fontStyle)==="italic"&&"active"]),onClick:t[66]||(t[66]=o=>{var Q;return y({fontStyle:((Q=a.value.content)==null?void 0:Q.fontStyle)==="italic"?"normal":"italic"})})},[...t[244]||(t[244]=[e("i",null,"I",-1)])],2),e("button",{class:W(["style-btn",((eo=a.value.content)==null?void 0:eo.textDecoration)==="underline"&&"active"]),onClick:t[67]||(t[67]=o=>{var Q;return y({textDecoration:((Q=a.value.content)==null?void 0:Q.textDecoration)==="underline"?"none":"underline"})})},[...t[245]||(t[245]=[e("u",null,"U",-1)])],2),e("button",{class:W(["style-btn",((to=a.value.content)==null?void 0:to.textDecoration)==="line-through"&&"active"]),onClick:t[68]||(t[68]=o=>{var Q;return y({textDecoration:((Q=a.value.content)==null?void 0:Q.textDecoration)==="line-through"?"none":"line-through"})})},[...t[246]||(t[246]=[e("s",null,"S",-1)])],2)])]),e("div",id,[t[248]||(t[248]=e("label",{class:"form-label"},"Color",-1)),e("div",ad,[e("input",{type:"color",value:((oo=a.value.content)==null?void 0:oo.color)||"#000",onInput:t[69]||(t[69]=o=>y({color:o.target.value})),class:"color-input-native"},null,40,rd),e("input",{value:((no=a.value.content)==null?void 0:no.color)||"#000",class:"input",onInput:t[70]||(t[70]=o=>y({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,sd)])]),e("div",dd,[t[249]||(t[249]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((lo=a.value.content)==null?void 0:lo.lineHeight)??1.5,class:"input",onChange:t[71]||(t[71]=o=>y({lineHeight:+o.target.value}))},null,40,ud)]),e("div",cd,[e("div",pd,[t[251]||(t[251]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((io=a.value.content)==null?void 0:io.textTransform)||"none",class:"select",onChange:t[72]||(t[72]=o=>y({textTransform:o.target.value}))},[...t[250]||(t[250]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,vd)]),e("div",fd,[t[252]||(t[252]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((ao=a.value.content)==null?void 0:ao.letterSpacing)??0,class:"input",onChange:t[73]||(t[73]=o=>y({letterSpacing:+o.target.value}))},null,40,md)])])],2)):F("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[261]||(t[261]=e("div",{class:"panel-title"},"Image",-1)),e("div",gd,[t[254]||(t[254]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(ro=a.value.content)==null?void 0:ro.src,class:"input",placeholder:"https://...",onInput:t[74]||(t[74]=o=>y({src:o.target.value}))},null,40,bd)]),e("div",hd,[t[255]||(t[255]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(so=a.value.content)==null?void 0:so.alt,class:"input",onInput:t[75]||(t[75]=o=>y({alt:o.target.value}))},null,40,yd)]),e("div",xd,[t[257]||(t[257]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((uo=a.value.content)==null?void 0:uo.objectFit)||"cover",class:"select",onChange:t[76]||(t[76]=o=>y({objectFit:o.target.value}))},[...t[256]||(t[256]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,wd)]),e("div",kd,[t[258]||(t[258]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((co=a.value.content)==null?void 0:co.borderRadius)||0,class:"input",onChange:t[77]||(t[77]=o=>y({borderRadius:+o.target.value}))},null,40,Cd)]),e("div",Sd,[e("div",$d,[t[259]||(t[259]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((po=a.value.content)==null?void 0:po.borderWidth)||0,class:"input",onChange:t[78]||(t[78]=o=>y({borderWidth:+o.target.value}))},null,40,Id)]),e("div",Ed,[t[260]||(t[260]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((vo=a.value.content)==null?void 0:vo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[79]||(t[79]=o=>y({borderColor:o.target.value}))},null,40,Ad)])])],2)):F("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Td,[t[263]||(t[263]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((fo=a.value.content)==null?void 0:fo.shapeType)||"rectangle",class:"select",onChange:t[80]||(t[80]=o=>y({shapeType:o.target.value}))},[...t[262]||(t[262]=[it('<option value="rectangle" data-v-a86d3495>Rectangle</option><option value="circle" data-v-a86d3495>Circle</option><option value="triangle" data-v-a86d3495>Triangle</option><option value="star" data-v-a86d3495>Star</option><option value="arrow" data-v-a86d3495>Arrow</option><option value="diamond" data-v-a86d3495>Diamond</option>',6)])],40,Md)]),e("div",Pd,[t[264]||(t[264]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Bd,[e("input",{type:"color",value:((mo=a.value.content)==null?void 0:mo.fillColor)||"#6c47ff",onInput:t[81]||(t[81]=o=>y({fillColor:o.target.value})),class:"color-input-native"},null,40,Nd),e("input",{value:((go=a.value.content)==null?void 0:go.fillColor)||"#6c47ff",class:"input",onInput:t[82]||(t[82]=o=>y({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,zd)])]),e("div",Ld,[t[265]||(t[265]=e("label",{class:"form-label"},"Border Color",-1)),e("div",jd,[e("input",{type:"color",value:((bo=a.value.content)==null?void 0:bo.borderColor)||"transparent",onInput:t[83]||(t[83]=o=>y({borderColor:o.target.value})),class:"color-input-native"},null,40,Dd),e("input",{value:((ho=a.value.content)==null?void 0:ho.borderColor)||"transparent",class:"input",onInput:t[84]||(t[84]=o=>y({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Rd)])]),e("div",_d,[t[266]||(t[266]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((yo=a.value.content)==null?void 0:yo.borderWidth)||0,class:"input",onChange:t[85]||(t[85]=o=>y({borderWidth:+o.target.value}))},null,40,qd)]),e("div",Od,[t[267]||(t[267]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((xo=a.value.content)==null?void 0:xo.borderRadius)||0,class:"input",onChange:t[86]||(t[86]=o=>y({borderRadius:+o.target.value}))},null,40,Fd)]),e("div",Vd,[t[268]||(t[268]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((wo=a.value.content)==null?void 0:wo.opacity)??1,class:"input",onChange:t[87]||(t[87]=o=>y({opacity:+o.target.value}))},null,40,Hd)])],2)):F("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[290]||(t[290]=e("div",{class:"panel-title"},"Chart",-1)),e("div",Ud,[t[271]||(t[271]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((ko=a.value.content)==null?void 0:ko.chartType)||"bar",class:"select",onChange:t[88]||(t[88]=o=>y({chartType:o.target.value}))},[...t[270]||(t[270]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Wd)]),e("div",Gd,[t[272]||(t[272]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((Co=a.value.content)==null?void 0:Co.title)||"",class:"input",onInput:t[89]||(t[89]=o=>y({title:o.target.value}))},null,40,Yd)]),e("div",Qd,[t[273]||(t[273]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((So=a.value.content)==null?void 0:So.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[90]||(t[90]=o=>y({dataText:o.target.value}))},null,40,Jd),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Bt},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Pt},"Upload CSV")]),t[274]||(t[274]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Xd,[t[275]||(t[275]=e("label",{class:"form-label"},"Paste table data",-1)),me(e("textarea",{"onUpdate:modelValue":t[91]||(t[91]=o=>Ee.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[Se,Ee.value]]),e("div",Kd,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[92]||(t[92]=o=>At(Ee.value))},"Convert pasted data")])]),e("div",Zd,[t[276]||(t[276]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:(($o=a.value.content)==null?void 0:$o.paletteText)||"",class:"input",placeholder:_e.value.paletteText,onInput:t[93]||(t[93]=o=>y({paletteText:o.target.value}))},null,40,eu),e("div",tu,[(l(!0),i(te,null,fe(ft.value,(o,Q)=>(l(),i("span",{key:`chart-palette-${Q}`,class:"chart-palette-swatch",style:ye({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:zt},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Nt},"Apply theme colors")]),t[277]||(t[277]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",ou,[e("div",nu,[t[278]||(t[278]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Io=a.value.content)==null?void 0:Io.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[94]||(t[94]=o=>y({backgroundColor:o.target.value}))},null,40,lu)]),e("div",iu,[t[279]||(t[279]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((Eo=a.value.content)==null?void 0:Eo.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[95]||(t[95]=o=>y({textColor:o.target.value}))},null,40,au)])]),e("div",ru,[e("div",su,[t[280]||(t[280]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((Ao=a.value.content)==null?void 0:Ao.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[96]||(t[96]=o=>y({gridColor:o.target.value}))},null,40,du)]),e("div",uu,[t[281]||(t[281]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((To=a.value.content)==null?void 0:To.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[97]||(t[97]=o=>y({borderColor:o.target.value}))},null,40,cu)])]),e("div",pu,[e("div",vu,[t[282]||(t[282]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Mo=a.value.content)==null?void 0:Mo.borderWidth)??1,class:"input",onChange:t[98]||(t[98]=o=>y({borderWidth:+o.target.value}))},null,40,fu)]),((Po=a.value.content)==null?void 0:Po.chartType)!=="circle"?(l(),i("div",mu,[t[283]||(t[283]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((Bo=a.value.content)==null?void 0:Bo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[99]||(t[99]=o=>y({maxValue:o.target.value}))},null,40,gu)])):(l(),i("div",bu,[t[284]||(t[284]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((No=a.value.content)==null?void 0:No.innerRadius)??62,class:"input",onChange:t[100]||(t[100]=o=>y({innerRadius:+o.target.value}))},null,40,hu)]))]),((zo=a.value.content)==null?void 0:zo.chartType)==="line"?(l(),i("div",yu,[e("div",xu,[t[285]||(t[285]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((Lo=a.value.content)==null?void 0:Lo.strokeWidth)??3,class:"input",onChange:t[101]||(t[101]=o=>y({strokeWidth:+o.target.value}))},null,40,wu)]),e("label",ku,[e("input",{type:"checkbox",checked:!!((jo=a.value.content)!=null&&jo.showArea),onChange:t[102]||(t[102]=o=>y({showArea:o.target.checked}))},null,40,Cu),t[286]||(t[286]=ee(" Show area fill ",-1))])])):F("",!0),e("label",Su,[e("input",{type:"checkbox",checked:((Do=a.value.content)==null?void 0:Do.showLegend)!==!1,onChange:t[103]||(t[103]=o=>y({showLegend:o.target.checked}))},null,40,$u),t[287]||(t[287]=ee(" Show legend ",-1))]),((Ro=a.value.content)==null?void 0:Ro.chartType)!=="circle"?(l(),i("label",Iu,[e("input",{type:"checkbox",checked:((_o=a.value.content)==null?void 0:_o.showGrid)!==!1,onChange:t[104]||(t[104]=o=>y({showGrid:o.target.checked}))},null,40,Eu),t[288]||(t[288]=ee(" Show grid lines ",-1))])):F("",!0),e("label",Au,[e("input",{type:"checkbox",checked:((qo=a.value.content)==null?void 0:qo.showValues)!==!1,onChange:t[105]||(t[105]=o=>y({showValues:o.target.checked}))},null,40,Tu),t[289]||(t[289]=ee(" Show values ",-1))])],2)):F("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[306]||(t[306]=e("div",{class:"panel-title"},"Button",-1)),e("div",Mu,[t[291]||(t[291]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Oo=a.value.content)==null?void 0:Oo.label,class:"input",onInput:t[106]||(t[106]=o=>y({label:o.target.value}))},null,40,Pu)]),e("div",Bu,[t[293]||(t[293]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Fo=a.value.content)==null?void 0:Fo.variant)||"primary",class:"select",onChange:t[107]||(t[107]=o=>y({variant:o.target.value}))},[...t[292]||(t[292]=[it('<option value="primary" data-v-a86d3495>Primary</option><option value="secondary" data-v-a86d3495>Secondary</option><option value="outline" data-v-a86d3495>Outline</option><option value="ghost" data-v-a86d3495>Ghost</option><option value="danger" data-v-a86d3495>Danger</option>',5)])],40,Nu)]),e("div",zu,[t[295]||(t[295]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Vo=a.value.content)==null?void 0:Vo.action)||"none",class:"select",onChange:t[108]||(t[108]=o=>y({action:o.target.value}))},[...t[294]||(t[294]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Lu)]),(Ho=a.value.content)!=null&&Ho.action&&a.value.content.action!=="none"?(l(),i("div",ju,[t[296]||(t[296]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Uo=a.value.content)==null?void 0:Uo.target,class:"input",placeholder:"Slide # or https://...",onInput:t[109]||(t[109]=o=>y({target:o.target.value}))},null,40,Du)])):F("",!0),e("div",Ru,[e("div",_u,[t[297]||(t[297]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Wo=a.value.content)==null?void 0:Wo.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[110]||(t[110]=o=>y({bgColor:o.target.value}))},null,40,qu)]),e("div",Ou,[t[298]||(t[298]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Go=a.value.content)==null?void 0:Go.textColor)||"#ffffff",class:"color-input-native",onInput:t[111]||(t[111]=o=>y({textColor:o.target.value}))},null,40,Fu)])]),e("div",Vu,[e("div",Hu,[t[299]||(t[299]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Yo=a.value.content)==null?void 0:Yo.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[112]||(t[112]=o=>y({borderColor:o.target.value}))},null,40,Uu)]),e("div",Wu,[t[300]||(t[300]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Qo=a.value.content)==null?void 0:Qo.borderRadius)??8,class:"input",onChange:t[113]||(t[113]=o=>y({borderRadius:+o.target.value}))},null,40,Gu)])]),e("div",Yu,[e("div",Qu,[t[301]||(t[301]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Jo=a.value.content)==null?void 0:Jo.fontSize)??15,class:"input",onChange:t[114]||(t[114]=o=>y({fontSize:+o.target.value}))},null,40,Ju)]),e("div",Xu,[t[303]||(t[303]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Xo=a.value.content)==null?void 0:Xo.fontWeight)??600),class:"select",onChange:t[115]||(t[115]=o=>y({fontWeight:+o.target.value}))},[...t[302]||(t[302]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Ku)])]),e("div",Zu,[e("div",ec,[t[304]||(t[304]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Ko=a.value.content)==null?void 0:Ko.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[116]||(t[116]=o=>y({fontFamily:o.target.value}))},[(l(),i(te,null,fe(Et,o=>e("option",{key:`btn-${o}`,value:o},k(o.split(",")[0]),9,oc)),64))],40,tc)]),e("div",nc,[t[305]||(t[305]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Zo=a.value.content)==null?void 0:Zo.letterSpacing)??0,class:"input",onChange:t[117]||(t[117]=o=>y({letterSpacing:+o.target.value}))},null,40,lc)])])],2)):F("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[316]||(t[316]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",ic,[t[308]||(t[308]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((en=a.value.content)==null?void 0:en.icon)||"?",class:"select",onChange:t[118]||(t[118]=o=>y({icon:o.target.value}))},[...t[307]||(t[307]=[it('<option value="?" data-v-a86d3495>? (Info)</option><option value="!" data-v-a86d3495>! (Alert)</option><option value="+" data-v-a86d3495>+ (Plus)</option><option value="i" data-v-a86d3495>i (Info)</option><option value="✦" data-v-a86d3495>✦ (Star)</option>',5)])],40,ac)]),e("div",rc,[t[309]||(t[309]=e("label",{class:"form-label"},"Background Color",-1)),e("div",sc,[e("input",{type:"color",value:((tn=a.value.content)==null?void 0:tn.bgColor)||"#6c47ff",onInput:t[119]||(t[119]=o=>y({bgColor:o.target.value})),class:"color-input-native"},null,40,dc),e("input",{value:((on=a.value.content)==null?void 0:on.bgColor)||"#6c47ff",class:"input",onInput:t[120]||(t[120]=o=>y({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,uc)])]),e("div",cc,[e("div",pc,[t[310]||(t[310]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((nn=a.value.content)==null?void 0:nn.iconColor)||"#ffffff",class:"color-input-native",onInput:t[121]||(t[121]=o=>y({iconColor:o.target.value}))},null,40,vc)]),e("div",fc,[t[311]||(t[311]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((ln=a.value.content)==null?void 0:ln.borderRadius)??999,class:"input",onChange:t[122]||(t[122]=o=>y({borderRadius:+o.target.value}))},null,40,mc)])]),e("div",gc,[t[312]||(t[312]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(an=a.value.content)==null?void 0:an.popupTitle,class:"input",onInput:t[123]||(t[123]=o=>y({popupTitle:o.target.value}))},null,40,bc)]),e("div",hc,[t[313]||(t[313]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(rn=a.value.content)==null?void 0:rn.popupContent,class:"textarea",onInput:t[124]||(t[124]=o=>y({popupContent:o.target.value}))},null,40,yc)]),e("div",xc,[e("div",wc,[t[314]||(t[314]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((sn=a.value.content)==null?void 0:sn.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[125]||(t[125]=o=>y({popupBgColor:o.target.value}))},null,40,kc)]),e("div",Cc,[t[315]||(t[315]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((dn=a.value.content)==null?void 0:dn.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[126]||(t[126]=o=>y({popupTextColor:o.target.value}))},null,40,Sc)])])],2)):F("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[325]||(t[325]=e("div",{class:"panel-title"},"Video",-1)),e("div",$c,[t[317]||(t[317]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(un=a.value.content)==null?void 0:un.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[127]||(t[127]=o=>y({src:o.target.value}))},null,40,Ic)]),e("div",Ec,[t[318]||(t[318]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(cn=a.value.content)==null?void 0:cn.poster,class:"input",onInput:t[128]||(t[128]=o=>y({poster:o.target.value}))},null,40,Ac)]),e("div",Tc,[t[320]||(t[320]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((pn=a.value.content)==null?void 0:pn.objectFit)||"cover",class:"select",onChange:t[129]||(t[129]=o=>y({objectFit:o.target.value}))},[...t[319]||(t[319]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Mc)]),e("label",Pc,[e("input",{type:"checkbox",checked:(vn=a.value.content)==null?void 0:vn.autoplay,onChange:t[130]||(t[130]=o=>y({autoplay:o.target.checked}))},null,40,Bc),t[321]||(t[321]=ee(" Autoplay ",-1))]),e("label",Nc,[e("input",{type:"checkbox",checked:((fn=a.value.content)==null?void 0:fn.controls)??!0,onChange:t[131]||(t[131]=o=>y({controls:o.target.checked}))},null,40,zc),t[322]||(t[322]=ee(" Show Controls ",-1))]),e("label",Lc,[e("input",{type:"checkbox",checked:(mn=a.value.content)==null?void 0:mn.loop,onChange:t[132]||(t[132]=o=>y({loop:o.target.checked}))},null,40,jc),t[323]||(t[323]=ee(" Loop ",-1))]),e("label",Dc,[e("input",{type:"checkbox",checked:(gn=a.value.content)==null?void 0:gn.muted,onChange:t[133]||(t[133]=o=>y({muted:o.target.checked}))},null,40,Rc),t[324]||(t[324]=ee(" Muted ",-1))])],2)):F("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[334]||(t[334]=e("div",{class:"panel-title"},"Audio",-1)),e("div",_c,[t[326]||(t[326]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(bn=a.value.content)==null?void 0:bn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[134]||(t[134]=o=>y({src:o.target.value}))},null,40,qc)]),e("div",Oc,[t[327]||(t[327]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(hn=a.value.content)==null?void 0:hn.label,class:"input",onInput:t[135]||(t[135]=o=>y({label:o.target.value}))},null,40,Fc)]),e("label",Vc,[e("input",{type:"checkbox",checked:(yn=a.value.content)==null?void 0:yn.autoplay,onChange:t[136]||(t[136]=o=>y({autoplay:o.target.checked}))},null,40,Hc),t[328]||(t[328]=ee(" Autoplay ",-1))]),e("label",Uc,[e("input",{type:"checkbox",checked:((xn=a.value.content)==null?void 0:xn.controls)!==!1,onChange:t[137]||(t[137]=o=>y({controls:o.target.checked}))},null,40,Wc),t[329]||(t[329]=ee(" Show Controls ",-1))]),e("label",Gc,[e("input",{type:"checkbox",checked:(wn=a.value.content)==null?void 0:wn.loop,onChange:t[138]||(t[138]=o=>y({loop:o.target.checked}))},null,40,Yc),t[330]||(t[330]=ee(" Loop ",-1))]),e("div",Qc,[e("div",Jc,[t[331]||(t[331]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((kn=a.value.content)==null?void 0:kn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[139]||(t[139]=o=>y({accentColor:o.target.value}))},null,40,Xc)]),e("div",Kc,[t[332]||(t[332]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Cn=a.value.content)==null?void 0:Cn.textColor)||"#555555",class:"color-input-native",onInput:t[140]||(t[140]=o=>y({textColor:o.target.value}))},null,40,Zc)])]),e("div",ep,[t[333]||(t[333]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((Sn=a.value.content)==null?void 0:Sn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[141]||(t[141]=o=>y({bgColor:o.target.value}))},null,40,tp)])],2)):F("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[342]||(t[342]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",op,[t[335]||(t[335]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:($n=a.value.content)==null?void 0:$n.question,class:"textarea",style:{"min-height":"60px"},onInput:t[142]||(t[142]=o=>y({question:o.target.value}))},null,40,np)]),e("div",lp,[t[336]||(t[336]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(En=(In=a.value.content)==null?void 0:In.options)==null?void 0:En.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[143]||(t[143]=o=>y({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,ip)]),e("div",ap,[t[337]||(t[337]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((An=a.value.content)==null?void 0:An.correctIndex)??0,class:"input",onChange:t[144]||(t[144]=o=>y({correctIndex:+o.target.value}))},null,40,rp)]),e("div",sp,[t[338]||(t[338]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(Tn=a.value.content)==null?void 0:Tn.explanation,class:"textarea",onInput:t[145]||(t[145]=o=>y({explanation:o.target.value}))},null,40,dp)]),e("div",up,[e("div",cp,[t[339]||(t[339]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((Mn=a.value.content)==null?void 0:Mn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[146]||(t[146]=o=>y({cardBgColor:o.target.value}))},null,40,pp)]),e("div",vp,[t[340]||(t[340]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((Pn=a.value.content)==null?void 0:Pn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[147]||(t[147]=o=>y({questionColor:o.target.value}))},null,40,fp)])]),e("div",mp,[t[341]||(t[341]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Bn=a.value.content)==null?void 0:Bn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[148]||(t[148]=o=>y({accentColor:o.target.value}))},null,40,gp)])],2)):a.value.type==="tabs"?(l(),i("div",{key:9,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[348]||(t[348]=e("div",{class:"panel-title"},"Tabs Configuration",-1)),e("div",bp,[t[343]||(t[343]=e("label",{class:"form-label"},"Tabs Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Nn=a.value.content)==null?void 0:Nn.tabs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[149]||(t[149]=o=>{var Q;return y({tabs:$e(o.target.value,(Q=a.value.content)==null?void 0:Q.tabs)})})},null,40,hp)]),e("div",yp,[e("div",xp,[t[344]||(t[344]=e("label",{class:"form-label"},"Active Tab",-1)),e("input",{type:"color",value:((zn=a.value.content)==null?void 0:zn.activeTabColor)||"#6c47ff",class:"color-input-native",onInput:t[150]||(t[150]=o=>y({activeTabColor:o.target.value}))},null,40,wp)]),e("div",kp,[t[345]||(t[345]=e("label",{class:"form-label"},"Inactive Tab",-1)),e("input",{type:"color",value:((Ln=a.value.content)==null?void 0:Ln.inactiveTabColor)||"#f8fafc",class:"color-input-native",onInput:t[151]||(t[151]=o=>y({inactiveTabColor:o.target.value}))},null,40,Cp)]),e("div",Sp,[t[346]||(t[346]=e("label",{class:"form-label"},"Content Bg",-1)),e("input",{type:"color",value:((jn=a.value.content)==null?void 0:jn.contentBgColor)||"#ffffff",class:"color-input-native",onInput:t[152]||(t[152]=o=>y({contentBgColor:o.target.value}))},null,40,$p)]),e("div",Ip,[t[347]||(t[347]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Dn=a.value.content)==null?void 0:Dn.textColor)||"#1e293b",class:"color-input-native",onInput:t[153]||(t[153]=o=>y({textColor:o.target.value}))},null,40,Ep)])])],2)):a.value.type==="accordion"?(l(),i("div",{key:10,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[354]||(t[354]=e("div",{class:"panel-title"},"Accordion Configuration",-1)),e("div",Ap,[t[349]||(t[349]=e("label",{class:"form-label"},"Items Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Rn=a.value.content)==null?void 0:Rn.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[154]||(t[154]=o=>{var Q;return y({items:$e(o.target.value,(Q=a.value.content)==null?void 0:Q.items)})})},null,40,Tp)]),e("div",Mp,[e("div",Pp,[t[350]||(t[350]=e("label",{class:"form-label"},"Active Bg Color",-1)),e("input",{type:"color",value:((_n=a.value.content)==null?void 0:_n.activeBgColor)||"#f8fafc",class:"color-input-native",onInput:t[155]||(t[155]=o=>y({activeBgColor:o.target.value}))},null,40,Bp)]),e("div",Np,[t[351]||(t[351]=e("label",{class:"form-label"},"Active Title Color",-1)),e("input",{type:"color",value:((qn=a.value.content)==null?void 0:qn.activeColor)||"#6c47ff",class:"color-input-native",onInput:t[156]||(t[156]=o=>y({activeColor:o.target.value}))},null,40,zp)]),e("div",Lp,[t[352]||(t[352]=e("label",{class:"form-label"},"Item Bg Color",-1)),e("input",{type:"color",value:((On=a.value.content)==null?void 0:On.itemBgColor)||"#ffffff",class:"color-input-native",onInput:t[157]||(t[157]=o=>y({itemBgColor:o.target.value}))},null,40,jp)]),e("div",Dp,[t[353]||(t[353]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Fn=a.value.content)==null?void 0:Fn.textColor)||"#475569",class:"color-input-native",onInput:t[158]||(t[158]=o=>y({textColor:o.target.value}))},null,40,Rp)])])],2)):a.value.type==="flipcard"?(l(),i("div",{key:11,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[365]||(t[365]=e("div",{class:"panel-title"},"Flip Card Content",-1)),e("div",_p,[t[356]||(t[356]=e("label",{class:"form-label"},"Direction",-1)),e("select",{value:((Vn=a.value.content)==null?void 0:Vn.flipDirection)||"horizontal",class:"select",onChange:t[159]||(t[159]=o=>y({flipDirection:o.target.value}))},[...t[355]||(t[355]=[e("option",{value:"horizontal"},"Horizontal (Y-axis)",-1),e("option",{value:"vertical"},"Vertical (X-axis)",-1)])],40,qp)]),e("div",Op,[t[357]||(t[357]=e("label",{class:"form-label"},"Front Title",-1)),e("input",{type:"text",value:(Hn=a.value.content)==null?void 0:Hn.frontTitle,class:"input",onInput:t[160]||(t[160]=o=>y({frontTitle:o.target.value}))},null,40,Fp)]),e("div",Vp,[t[358]||(t[358]=e("label",{class:"form-label"},"Front Content",-1)),e("textarea",{value:(Un=a.value.content)==null?void 0:Un.frontContent,class:"textarea",onInput:t[161]||(t[161]=o=>y({frontContent:o.target.value}))},null,40,Hp)]),e("div",Up,[t[359]||(t[359]=e("label",{class:"form-label"},"Back Title",-1)),e("input",{type:"text",value:(Wn=a.value.content)==null?void 0:Wn.backTitle,class:"input",onInput:t[162]||(t[162]=o=>y({backTitle:o.target.value}))},null,40,Wp)]),e("div",Gp,[t[360]||(t[360]=e("label",{class:"form-label"},"Back Content",-1)),e("textarea",{value:(Gn=a.value.content)==null?void 0:Gn.backContent,class:"textarea",onInput:t[163]||(t[163]=o=>y({backContent:o.target.value}))},null,40,Yp)]),e("div",Qp,[e("div",Jp,[t[361]||(t[361]=e("label",{class:"form-label"},"Front Bg",-1)),e("input",{type:"color",value:((Yn=a.value.content)==null?void 0:Yn.frontBgColor)||"#6c47ff",class:"color-input-native",onInput:t[164]||(t[164]=o=>y({frontBgColor:o.target.value}))},null,40,Xp)]),e("div",Kp,[t[362]||(t[362]=e("label",{class:"form-label"},"Front Text",-1)),e("input",{type:"color",value:((Qn=a.value.content)==null?void 0:Qn.frontTextColor)||"#ffffff",class:"color-input-native",onInput:t[165]||(t[165]=o=>y({frontTextColor:o.target.value}))},null,40,Zp)]),e("div",ev,[t[363]||(t[363]=e("label",{class:"form-label"},"Back Bg",-1)),e("input",{type:"color",value:((Jn=a.value.content)==null?void 0:Jn.backBgColor)||"#ffffff",class:"color-input-native",onInput:t[166]||(t[166]=o=>y({backBgColor:o.target.value}))},null,40,tv)]),e("div",ov,[t[364]||(t[364]=e("label",{class:"form-label"},"Back Text",-1)),e("input",{type:"color",value:((Xn=a.value.content)==null?void 0:Xn.backTextColor)||"#1e293b",class:"color-input-native",onInput:t[167]||(t[167]=o=>y({backTextColor:o.target.value}))},null,40,nv)])])],2)):a.value.type==="stepper"?(l(),i("div",{key:12,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[371]||(t[371]=e("div",{class:"panel-title"},"Stepper Configuration",-1)),e("div",lv,[t[366]||(t[366]=e("label",{class:"form-label"},"Steps Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Kn=a.value.content)==null?void 0:Kn.steps)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[168]||(t[168]=o=>{var Q;return y({steps:$e(o.target.value,(Q=a.value.content)==null?void 0:Q.steps)})})},null,40,iv)]),e("div",av,[e("div",rv,[t[367]||(t[367]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Zn=a.value.content)==null?void 0:Zn.bgColor)||"#ffffff",class:"color-input-native",onInput:t[169]||(t[169]=o=>y({bgColor:o.target.value}))},null,40,sv)]),e("div",dv,[t[368]||(t[368]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((el=a.value.content)==null?void 0:el.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[170]||(t[170]=o=>y({accentColor:o.target.value}))},null,40,uv)]),e("div",cv,[t[369]||(t[369]=e("label",{class:"form-label"},"Title Color",-1)),e("input",{type:"color",value:((tl=a.value.content)==null?void 0:tl.titleColor)||"#0f172a",class:"color-input-native",onInput:t[171]||(t[171]=o=>y({titleColor:o.target.value}))},null,40,pv)]),e("div",vv,[t[370]||(t[370]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((ol=a.value.content)==null?void 0:ol.textColor)||"#475569",class:"color-input-native",onInput:t[172]||(t[172]=o=>y({textColor:o.target.value}))},null,40,fv)])])],2)):a.value.type==="poll"?(l(),i("div",{key:13,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[375]||(t[375]=e("div",{class:"panel-title"},"Poll Configuration",-1)),e("div",mv,[t[372]||(t[372]=e("label",{class:"form-label"},"Question",-1)),e("input",{type:"text",value:((nl=a.value.content)==null?void 0:nl.question)||"",class:"input",onInput:t[173]||(t[173]=o=>y({question:o.target.value}))},null,40,gv)]),e("div",bv,[t[373]||(t[373]=e("label",{class:"form-label"},"Options (JSON)",-1)),e("textarea",{value:JSON.stringify(((ll=a.value.content)==null?void 0:ll.options)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[174]||(t[174]=o=>{var Q;return y({options:$e(o.target.value,(Q=a.value.content)==null?void 0:Q.options)})})},null,40,hv)]),e("div",yv,[e("div",xv,[t[374]||(t[374]=e("label",{class:"form-label"},"Voted Color",-1)),e("input",{type:"color",value:((il=a.value.content)==null?void 0:il.votedColor)||"#6c47ff",class:"color-input-native",onInput:t[175]||(t[175]=o=>y({votedColor:o.target.value}))},null,40,wv)])])],2)):a.value.type==="labeledimage"?(l(),i("div",{key:14,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[378]||(t[378]=e("div",{class:"panel-title"},"Labeled Image Configuration",-1)),e("div",kv,[t[376]||(t[376]=e("label",{class:"form-label"},"Image URL",-1)),e("input",{type:"text",value:((al=a.value.content)==null?void 0:al.imageUrl)||"",class:"input",onInput:t[176]||(t[176]=o=>y({imageUrl:o.target.value}))},null,40,Cv)]),e("div",Sv,[t[377]||(t[377]=e("label",{class:"form-label"},"Markers (JSON)",-1)),e("textarea",{value:JSON.stringify(((rl=a.value.content)==null?void 0:rl.markers)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[177]||(t[177]=o=>{var Q;return y({markers:$e(o.target.value,(Q=a.value.content)==null?void 0:Q.markers)})})},null,40,$v)])],2)):a.value.type==="matching"?(l(),i("div",{key:15,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[380]||(t[380]=e("div",{class:"panel-title"},"Matching Configuration",-1)),e("div",Iv,[t[379]||(t[379]=e("label",{class:"form-label"},"Pairs (JSON)",-1)),e("textarea",{value:JSON.stringify(((sl=a.value.content)==null?void 0:sl.pairs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[178]||(t[178]=o=>{var Q;return y({pairs:$e(o.target.value,(Q=a.value.content)==null?void 0:Q.pairs)})})},null,40,Ev)])],2)):a.value.type==="sorting"?(l(),i("div",{key:16,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[382]||(t[382]=e("div",{class:"panel-title"},"Sorting Configuration",-1)),e("div",Av,[t[381]||(t[381]=e("label",{class:"form-label"},"Items (JSON) - Target Order",-1)),e("textarea",{value:JSON.stringify(((dl=a.value.content)==null?void 0:dl.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[179]||(t[179]=o=>{var Q;return y({items:$e(o.target.value,(Q=a.value.content)==null?void 0:Q.items)})})},null,40,Tv)])],2)):a.value.type==="cloze"?(l(),i("div",{key:17,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[385]||(t[385]=e("div",{class:"panel-title"},"Cloze Configuration",-1)),e("div",Mv,[t[383]||(t[383]=e("label",{class:"form-label"},"Text (Wrap blanks in [ ])",-1)),e("textarea",{value:((ul=a.value.content)==null?void 0:ul.text)||"",class:"textarea",style:{"min-height":"100px","font-family":"monospace","font-size":"12px"},onChange:t[180]||(t[180]=o=>y({text:o.target.value}))},null,40,Pv)]),e("div",Bv,[e("div",Nv,[e("input",{type:"checkbox",id:"showCheckBtn",checked:((cl=a.value.content)==null?void 0:cl.showCheckBtn)!==!1,onChange:t[181]||(t[181]=o=>y({showCheckBtn:o.target.checked}))},null,40,zv),t[384]||(t[384]=e("label",{for:"showCheckBtn",class:"form-label mb-0"},"Show Check Answers Button",-1))])])],2)):a.value.type==="placeholder"?(l(),i("div",{key:18,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[387]||(t[387]=e("div",{class:"panel-title"},"Placeholder Settings",-1)),e("div",Lv,[t[386]||(t[386]=e("label",{class:"form-label"},"Prompt Text",-1)),e("input",{value:((pl=a.value.content)==null?void 0:pl.prompt)||"",class:"input",placeholder:"Add Content",onInput:t[182]||(t[182]=o=>y({prompt:o.target.value}))},null,40,jv)])],2)):a.value.type==="scenario"?(l(),i("div",{key:19,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[389]||(t[389]=e("div",{class:"panel-title"},"Scenario Chat",-1)),e("div",Dv,[t[388]||(t[388]=e("label",{class:"form-label"},"Messages (JSON)",-1)),e("textarea",{value:JSON.stringify(((vl=a.value.content)==null?void 0:vl.messages)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[183]||(t[183]=o=>{var Q;return y({messages:$e(o.target.value,(Q=a.value.content)==null?void 0:Q.messages)})})},null,40,Rv)])],2)):a.value.type==="progress"?(l(),i("div",{key:20,class:W(["panel-section",X.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[393]||(t[393]=e("div",{class:"panel-title"},"Progress Settings",-1)),e("div",_v,[e("div",qv,[t[390]||(t[390]=e("label",{class:"form-label"},"Mock XP",-1)),e("input",{type:"number",value:((fl=a.value.content)==null?void 0:fl.mockXP)||350,class:"input",onInput:t[184]||(t[184]=o=>y({mockXP:Number(o.target.value)}))},null,40,Ov)]),e("div",Fv,[t[391]||(t[391]=e("label",{class:"form-label"},"Mock Percent",-1)),e("input",{type:"number",value:((ml=a.value.content)==null?void 0:ml.mockPercent)||65,class:"input",onInput:t[185]||(t[185]=o=>y({mockPercent:Number(o.target.value)}))},null,40,Vv)])]),e("div",Hv,[e("div",Uv,[t[392]||(t[392]=e("label",{class:"form-label"},"Fill Color",-1)),e("input",{type:"color",value:((gl=a.value.content)==null?void 0:gl.fillColor)||"#10b981",class:"color-input-native",onInput:t[186]||(t[186]=o=>y({fillColor:o.target.value}))},null,40,Wv)])])],2)):F("",!0),e("div",Gv,[t[397]||(t[397]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Yv,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[187]||(t[187]=o=>E(r).duplicateElement(E(d).projectId,E(d).currentSlideId,a.value.id))},[...t[394]||(t[394]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),ee(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[188]||(t[188]=o=>{E(d).showInteractionEditor=!0,E(d).interactionElementId=a.value.id})},[...t[395]||(t[395]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),ee(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[189]||(t[189]=o=>{E(r).deleteElement(E(d).projectId,E(d).currentSlideId,a.value.id),E(d).clearSelection()})},[...t[396]||(t[396]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),ee(" Delete Element ",-1)])])])])],64)):(l(),i("div",fr,[e("div",mr,[e("button",{type:"button",class:W(["slide-settings-tab",q.value==="canvas"&&"active"]),onClick:t[23]||(t[23]=o=>q.value="canvas")},[...t[196]||(t[196]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:W(["slide-settings-tab",q.value==="transitions"&&"active"]),onClick:t[24]||(t[24]=o=>q.value="transitions")},[...t[197]||(t[197]=[it('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-a86d3495><path d="M5 7h5" data-v-a86d3495></path><path d="M5 12h10" data-v-a86d3495></path><path d="M5 17h14" data-v-a86d3495></path><path d="M14 7l5 5-5 5" data-v-a86d3495></path></svg><span data-v-a86d3495>Transitions</span>',2)])],2),e("button",{type:"button",class:W(["slide-settings-tab",q.value==="navigation"&&"active"]),onClick:t[25]||(t[25]=o=>q.value="navigation")},[...t[198]||(t[198]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),q.value==="canvas"?(l(),i("div",gr,[t[213]||(t[213]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",br,[t[199]||(t[199]=e("label",{class:"form-label"},"Title",-1)),me(e("input",{"onUpdate:modelValue":t[26]||(t[26]=o=>Ue.value.title=o),class:"input",onInput:t[27]||(t[27]=o=>dt("title",Ue.value.title))},null,544),[[Se,Ue.value.title]])]),e("div",hr,[t[200]||(t[200]=e("label",{class:"form-label"},"Background",-1)),e("div",yr,[(l(),i(te,null,fe(["color","gradient","image"],o=>{var Q;return e("button",{key:o,class:W(["bg-type-btn",(((Q=p.value)==null?void 0:Q.backgroundType)||"color")===o&&"active"]),onClick:bl=>Je({backgroundType:o})},k(o),11,xr)}),64))]),(((N=p.value)==null?void 0:N.backgroundType)||"color")==="color"?(l(),i("div",wr,[e("input",{type:"color",value:((ae=p.value)==null?void 0:ae.background)||"#ffffff",onInput:t[28]||(t[28]=o=>Je({background:o.target.value})),class:"color-input-native"},null,40,kr),e("input",{value:((ke=p.value)==null?void 0:ke.background)||"#ffffff",class:"input",onInput:t[29]||(t[29]=o=>Je({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Cr)])):((Pe=p.value)==null?void 0:Pe.backgroundType)==="gradient"?me((l(),i("input",{key:1,"onUpdate:modelValue":t[30]||(t[30]=o=>Ue.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[31]||(t[31]=o=>Je({backgroundGradient:Ue.value.backgroundGradient}))},null,544)),[[Se,Ue.value.backgroundGradient]]):me((l(),i("input",{key:2,"onUpdate:modelValue":t[32]||(t[32]=o=>Ue.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[33]||(t[33]=o=>Je({backgroundImage:Ue.value.backgroundImage}))},null,544)),[[Se,Ue.value.backgroundImage]])]),e("div",Sr,[t[210]||(t[210]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",$r,[(l(!0),i(te,null,fe(E(Ol),o=>{var Q;return l(),i("button",{key:o.id,type:"button",class:W(["canvas-size-card",((Q=L.value)==null?void 0:Q.id)===o.id&&"active"]),onClick:bl=>Tt(o)},[e("span",Er,[e("span",{class:W(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[201]||(t[201]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Ar,k(o.label),1),e("span",Tr,k(o.ratioLabel),1)],10,Ir)}),128))]),e("div",Mr,[e("div",Pr,[t[202]||(t[202]=e("span",null,"Custom",-1)),e("span",Br,"Current ratio "+k(Y.value),1)]),e("div",Nr,[e("div",zr,[t[204]||(t[204]=e("label",{class:"form-label"},"Width",-1)),e("div",Lr,[e("input",{type:"number",min:"320",max:"4096",value:h.value.width,class:"input",onChange:t[34]||(t[34]=o=>ct("width",o.target.value))},null,40,jr),t[203]||(t[203]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[207]||(t[207]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Dr,[t[206]||(t[206]=e("label",{class:"form-label"},"Height",-1)),e("div",Rr,[e("input",{type:"number",min:"320",max:"4096",value:h.value.height,class:"input",onChange:t[35]||(t[35]=o=>ct("height",o.target.value))},null,40,_r),t[205]||(t[205]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",qr,[me(e("input",{type:"checkbox","onUpdate:modelValue":t[36]||(t[36]=o=>ie.value=o)},null,512),[[Rt,ie.value]]),t[208]||(t[208]=ee(" Maintain proportions ",-1))]),t[209]||(t[209]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[211]||(t[211]=it('<div class="canvas-size-callout" data-v-a86d3495><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-a86d3495><circle cx="12" cy="12" r="9" data-v-a86d3495></circle><path d="M12 10v6" data-v-a86d3495></path><path d="M12 7h.01" data-v-a86d3495></path></svg><span data-v-a86d3495>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",Or,[t[212]||(t[212]=e("div",{class:"panel-title"},"Slide Notes",-1)),me(e("textarea",{"onUpdate:modelValue":t[37]||(t[37]=o=>Ue.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[38]||(t[38]=o=>dt("notes",Ue.value.notes))},null,544),[[Se,Ue.value.notes]])])])):q.value==="transitions"?(l(),i("div",Fr,[t[218]||(t[218]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((Re=p.value)==null?void 0:Re.transition)||"none",class:"select",onChange:t[39]||(t[39]=o=>Je({transition:o.target.value}))},[...t[214]||(t[214]=[it('<option value="none" data-v-a86d3495>None</option><option value="fade" data-v-a86d3495>Fade</option><option value="slide" data-v-a86d3495>Slide</option><option value="zoom" data-v-a86d3495>Zoom</option><option value="flip" data-v-a86d3495>Flip</option>',5)])],40,Vr),e("div",Hr,[t[215]||(t[215]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((ze=p.value)==null?void 0:ze.duration)??0,class:"input",onChange:t[40]||(t[40]=o=>St(o.target.value))},null,40,Ur),t[216]||(t[216]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Wr,[e("input",{type:"checkbox",checked:!!((Ce=p.value)!=null&&Ce.advanceOnMediaEnd),onChange:t[41]||(t[41]=o=>Je({advanceOnMediaEnd:o.target.checked}))},null,40,Gr),t[217]||(t[217]=ee(" Advance when slide media finishes ",-1))]),t[219]||(t[219]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",Yr,[t[225]||(t[225]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",Qr,[e("input",{type:"checkbox",checked:b.value.autoPlay,onChange:t[42]||(t[42]=o=>Ye({autoPlay:o.target.checked}))},null,40,Jr),t[220]||(t[220]=ee(" Autoplay preview and exported presentation ",-1))]),e("label",Xr,[e("input",{type:"checkbox",checked:b.value.loop,onChange:t[43]||(t[43]=o=>Ye({loop:o.target.checked}))},null,40,Kr),t[221]||(t[221]=ee(" Loop back to the first slide at the end ",-1))]),e("label",Zr,[e("input",{type:"checkbox",checked:b.value.showProgress,onChange:t[44]||(t[44]=o=>Ye({showProgress:o.target.checked}))},null,40,es),t[222]||(t[222]=ee(" Show progress bar in preview ",-1))]),e("label",ts,[e("input",{type:"checkbox",checked:b.value.showNavControls,onChange:t[45]||(t[45]=o=>Ye({showNavControls:o.target.checked}))},null,40,os),t[223]||(t[223]=ee(" Show previous/next and dot navigation ",-1))]),e("label",ns,[e("input",{type:"checkbox",checked:b.value.allowKeyboardNav,onChange:t[46]||(t[46]=o=>Ye({allowKeyboardNav:o.target.checked}))},null,40,ls),t[224]||(t[224]=ee(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},Jv=Ze(Qv,[["__scopeId","data-v-a86d3495"]]),Xv={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kv={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zv={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ef={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tf={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},of={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nf={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lf={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},af={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},rf={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sf={key:10,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},df={key:11,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},uf={key:12,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},cf={key:13,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pf={key:14,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vf={key:15,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ff={key:16,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},mf={key:17,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},gf={key:18,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},bf={key:19,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},hf={key:20,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Gt={__name:"ToolbarIcon",props:{icon:{type:String,required:!0}},setup(x){return(d,r)=>x.icon==="text"?(l(),i("svg",Xv,[...r[0]||(r[0]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):x.icon==="heading"?(l(),i("svg",Kv,[...r[1]||(r[1]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):x.icon==="image"?(l(),i("svg",Zv,[...r[2]||(r[2]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):x.icon==="shape"?(l(),i("svg",ef,[...r[3]||(r[3]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):x.icon==="button"?(l(),i("svg",tf,[...r[4]||(r[4]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):x.icon==="hotspot"?(l(),i("svg",of,[...r[5]||(r[5]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):x.icon==="video"?(l(),i("svg",nf,[...r[6]||(r[6]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):x.icon==="audio"?(l(),i("svg",lf,[...r[7]||(r[7]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):x.icon==="quiz"?(l(),i("svg",af,[...r[8]||(r[8]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):x.icon==="chart"?(l(),i("svg",rf,[...r[9]||(r[9]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):x.icon==="tabs"?(l(),i("svg",sf,[...r[10]||(r[10]=[e("rect",{x:"2",y:"7",width:"20",height:"13",rx:"2"},null,-1),e("path",{d:"M2 11h20"},null,-1),e("path",{d:"M8 7v4"},null,-1)])])):x.icon==="accordion"?(l(),i("svg",df,[...r[11]||(r[11]=[e("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"},null,-1),e("path",{d:"M3 10h18"},null,-1),e("path",{d:"M3 16h18"},null,-1)])])):x.icon==="flipcard"?(l(),i("svg",uf,[...r[12]||(r[12]=[e("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"},null,-1),e("path",{d:"M3 12h18"},null,-1),e("path",{d:"M21 8h-4"},null,-1)])])):x.icon==="stepper"?(l(),i("svg",cf,[...r[13]||(r[13]=[e("circle",{cx:"6",cy:"12",r:"3"},null,-1),e("circle",{cx:"18",cy:"12",r:"3"},null,-1),e("path",{d:"M9 12h6"},null,-1)])])):x.icon==="poll"?(l(),i("svg",pf,[...r[14]||(r[14]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("path",{d:"M7 10h10"},null,-1),e("path",{d:"M7 14h6"},null,-1)])])):x.icon==="labeledimage"?(l(),i("svg",vf,[...r[15]||(r[15]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"12",cy:"12",r:"2"},null,-1),e("line",{x1:"12",y1:"14",x2:"12",y2:"18"},null,-1)])])):x.icon==="matching"?(l(),i("svg",ff,[...r[16]||(r[16]=[it('<path d="M4 6h4"></path><path d="M4 18h4"></path><path d="M16 6h4"></path><path d="M16 18h4"></path><line x1="8" y1="6" x2="16" y2="18"></line>',5)])])):x.icon==="sorting"?(l(),i("svg",mf,[...r[17]||(r[17]=[e("path",{d:"M3 6h18"},null,-1),e("path",{d:"M7 12h10"},null,-1),e("path",{d:"M10 18h4"},null,-1)])])):x.icon==="cloze"?(l(),i("svg",gf,[...r[18]||(r[18]=[e("path",{d:"M4 12h4"},null,-1),e("path",{d:"M16 12h4"},null,-1),e("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"},null,-1)])])):x.icon==="scenario"?(l(),i("svg",bf,[...r[19]||(r[19]=[e("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},null,-1)])])):x.icon==="progress"?(l(),i("svg",hf,[...r[20]||(r[20]=[e("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null,-1)])])):F("",!0)}},yf={class:"editor-toolbar"},xf={class:"toolbar-group"},wf={key:0,class:"toolbar-divider"},kf=["data-group-name"],Cf=["data-tooltip","onClick"],Sf={class:"tool-label"},$f={key:2,class:"toolbar-group element-group dropdown-container"},If=["onClick"],Ef={class:"tool-label"},Af={style:{"margin-left":"4px"},width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Tf={key:0,class:"dropdown-menu"},Mf=["onClick"],Pf={class:"toolbar-group"},Bf={class:"toolbar-group"},Nf={class:"toolbar-group"},zf={__name:"EditorToolbar",emits:["open-ai-project"],setup(x,{emit:d}){const r=d,c=rt();st();const p=[{id:"basic",name:"Basic",dropdown:!1,tools:[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"placeholder",label:"Placeholder",tooltip:"Add placeholder",icon:"shape"}]},{id:"media",name:"Media",dropdown:!0,icon:"video",tools:[{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"}]},{id:"interactive",name:"Interactive",dropdown:!0,icon:"button",tools:[{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"tabs",label:"Tabs",tooltip:"Add tabs",icon:"tabs"},{id:"accordion",label:"Accordion",tooltip:"Add accordion",icon:"accordion"},{id:"flipcard",label:"Flip Card",tooltip:"Add flip card",icon:"flipcard"},{id:"stepper",label:"Stepper",tooltip:"Add stepper",icon:"stepper"}]},{id:"learning",name:"Learning & Data",dropdown:!0,icon:"quiz",tools:[{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"},{id:"poll",label:"Poll",tooltip:"Add poll",icon:"poll"},{id:"labeledimage",label:"L-Image",tooltip:"Add labeled image",icon:"labeledimage"},{id:"matching",label:"Match",tooltip:"Add matching game",icon:"matching"},{id:"sorting",label:"Sort",tooltip:"Add sorting game",icon:"sorting"},{id:"cloze",label:"Cloze",tooltip:"Fill in blanks",icon:"cloze"},{id:"scenario",label:"Dialog",tooltip:"Scenario chat",icon:"scenario"},{id:"progress",label:"Stats",tooltip:"Track progress",icon:"progress"}]}],b=R(null);function h(ie){b.value===ie?b.value=null:b.value=ie}function L(ie){ie.target.closest(".dropdown-container")||(b.value=null)}Xt(()=>document.addEventListener("click",L)),Al(()=>document.removeEventListener("click",L));function Y(ie){c.setActiveTool(ie),b.value=null}return(ie,q)=>(l(),i("div",yf,[e("div",xf,[e("button",{class:W(["tool-btn",E(c).activeTool==="select"&&"active"]),onClick:q[0]||(q[0]=j=>Y("select")),"data-tooltip":"Select (V)"},[...q[7]||(q[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),q[14]||(q[14]=e("div",{class:"toolbar-divider"},null,-1)),(l(),i(te,null,fe(p,(j,ve)=>(l(),i(te,{key:j.id},[ve>0&&!j.dropdown?(l(),i("div",wf)):F("",!0),j.dropdown?(l(),i("div",$f,[e("button",{class:W(["tool-btn group-trigger-btn",{active:j.tools.some($=>$.id===E(c).activeTool)}]),onClick:Le($=>h(j.id),["stop"])},[pt(Gt,{icon:j.icon},null,8,["icon"]),e("span",Ef,k(j.name),1),(l(),i("svg",Af,[...q[8]||(q[8]=[e("polyline",{points:"6 9 12 15 18 9"},null,-1)])]))],10,If),b.value===j.id?(l(),i("div",Tf,[(l(!0),i(te,null,fe(j.tools,$=>(l(),i("button",{key:$.id,class:W(["dropdown-item",E(c).activeTool===$.id&&"active"]),onClick:M=>Y($.id)},[pt(Gt,{icon:$.icon},null,8,["icon"]),e("span",null,k($.label),1)],10,Mf))),128))])):F("",!0)])):(l(),i("div",{key:1,class:"toolbar-group element-group","data-group-name":j.name},[(l(!0),i(te,null,fe(j.tools,$=>(l(),i("button",{key:$.id,class:W(["tool-btn",E(c).activeTool===$.id&&"active"]),"data-tooltip":$.tooltip,onClick:M=>Y($.id)},[pt(Gt,{icon:$.icon},null,8,["icon"]),e("span",Sf,k($.label),1)],10,Cf))),128))],8,kf))],64))),64)),q[15]||(q[15]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Pf,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:q[1]||(q[1]=j=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...q[9]||(q[9]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),q[16]||(q[16]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Bf,[e("button",{class:"tool-btn",onClick:q[2]||(q[2]=j=>E(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...q[10]||(q[10]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:q[3]||(q[3]=j=>E(c).zoomReset())},k(Math.round(E(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:q[4]||(q[4]=j=>E(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...q[11]||(q[11]=[it('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0aa14d96><circle cx="11" cy="11" r="8" data-v-0aa14d96></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-0aa14d96></line><line x1="11" y1="8" x2="11" y2="14" data-v-0aa14d96></line><line x1="8" y1="11" x2="14" y2="11" data-v-0aa14d96></line></svg>',1)])])]),q[17]||(q[17]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Nf,[e("button",{class:W(["tool-btn",E(c).showGrid&&"active"]),onClick:q[5]||(q[5]=j=>E(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...q[12]||(q[12]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:W(["tool-btn",E(c).snapToGrid&&"active"]),onClick:q[6]||(q[6]=j=>E(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...q[13]||(q[13]=[it('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0aa14d96><circle cx="5" cy="5" r="1" data-v-0aa14d96></circle><circle cx="12" cy="5" r="1" data-v-0aa14d96></circle><circle cx="19" cy="5" r="1" data-v-0aa14d96></circle><circle cx="5" cy="12" r="1" data-v-0aa14d96></circle><circle cx="12" cy="12" r="1" data-v-0aa14d96></circle><circle cx="19" cy="12" r="1" data-v-0aa14d96></circle><circle cx="5" cy="19" r="1" data-v-0aa14d96></circle><circle cx="12" cy="19" r="1" data-v-0aa14d96></circle><circle cx="19" cy="19" r="1" data-v-0aa14d96></circle></svg>',1)])],2)])]))}},Lf=Ze(zf,[["__scopeId","data-v-0aa14d96"]]),jf=["onMousedown"],Df={key:1,class:"selection-border locked-border"},Rf={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(x){const d=x,r=rt(),c=st(),p=Tl("canvasScale",R(1)),b=T(()=>r.projectId),h=T(()=>r.currentSlideId),L=T(()=>r.selectedElementIds.includes(d.element.id)),Y=T(()=>d.element.locked),ie=T(()=>d.element.visible!==!1),q=T(()=>L.value&&!Y.value&&!r.multiSelection),j=T(()=>{const re=d.element.content||{};return!!(re.text||re.label||re.question||re.popupTitle||re.popupContent)});let ve=!1,$=0,M=0,a=new Map;function z(re){if(!r.snapToGrid||!r.gridSize)return re;const de=r.gridSize;return Math.round(re/de)*de}function V(re){var ge;if(Y.value||re.target.classList.contains("resize-handle"))return;const de=re.ctrlKey||re.metaKey||re.shiftKey;L.value?de&&r.selectElement(d.element.id,!0):r.selectElement(d.element.id,de),r.setActiveTool("select"),ve=!1,$=re.clientX,M=re.clientY,a.clear();const Ee=(ge=c.getProject(b.value))==null?void 0:ge.slides.find(X=>X.id===h.value);Ee&&r.selectedElementIds.forEach(X=>{const P=Ee.elements.find(A=>A.id===X);P&&!P.locked&&a.set(X,{x:P.x,y:P.y})}),window.addEventListener("mousemove",be),window.addEventListener("mouseup",ce),re.stopPropagation()}function be(re){const de=(re.clientX-$)/p.value,Ee=(re.clientY-M)/p.value;!ve&&(Math.abs(de)>3||Math.abs(Ee)>3)&&(ve=!0),ve&&a.forEach((ge,X)=>{const P=ge.x+de,A=ge.y+Ee;c.updateElement(b.value,h.value,X,{x:P,y:A},{persist:!1})})}function ce(re){if(ve){const de=(re.clientX-$)/p.value,Ee=(re.clientY-M)/p.value;a.forEach((ge,X)=>{c.updateElement(b.value,h.value,X,{x:z(ge.x+de),y:z(ge.y+Ee)},{persist:!1})}),c.commitProject(b.value)}ve||!(re.ctrlKey||re.metaKey||re.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(d.element.id,!1),ve=!1,window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",ce)}const oe=["n","ne","e","se","s","sw","w","nw"];let m=!1,C="",se=0,U=0,Z=0,pe=0,ne=0,le=0;function we(re,de){Y.value||(re.stopPropagation(),re.preventDefault(),m=!0,C=de,se=re.clientX,U=re.clientY,Z=d.element.width,pe=d.element.height,ne=d.element.x,le=d.element.y,window.addEventListener("mousemove",S),window.addEventListener("mouseup",D))}function S(re){if(!m)return;const de=p.value,Ee=(re.clientX-se)/de,ge=(re.clientY-U)/de,X=20;let P=ne,A=le,_=Z,Ie=pe;if(C.includes("e")&&(_=Math.max(X,Z+Ee)),C.includes("s")&&(Ie=Math.max(X,pe+ge)),C.includes("w")){const Ae=Math.max(X,Z-Ee);P=ne+(Z-Ae),_=Ae}if(C.includes("n")){const Ae=Math.max(X,pe-ge);A=le+(pe-Ae),Ie=Ae}if(r.snapToGrid&&r.gridSize){const Ae=r.gridSize;_=Math.round(_/Ae)*Ae,Ie=Math.round(Ie/Ae)*Ae,P=Math.round(P/Ae)*Ae,A=Math.round(A/Ae)*Ae}c.updateElement(b.value,h.value,d.element.id,{x:P,y:A,width:_,height:Ie})}function D(){m=!1,window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",D)}function O(){["text","heading"].includes(d.element.type)&&r.focusPropertiesSection("content")}const J=T(()=>({position:"absolute",left:`${d.element.x}px`,top:`${d.element.y}px`,width:`${d.element.width}px`,height:`${d.element.height}px`,transform:`rotate(${d.element.rotation||0}deg)`,opacity:d.element.opacity??1,zIndex:d.element.zIndex||1,cursor:Y.value?"not-allowed":"move",visibility:ie.value?"visible":"hidden",userSelect:"none"}));function xe(re){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[re]||"auto"}function je(re="content"){r.focusPropertiesSection(re)}function Be(){const re=j.value?"improve":d.element.type==="image"?"image":"generate";r.openAIPanel(re)}function Oe(){const re=c.duplicateElement(b.value,h.value,d.element.id);re&&(r.selectElement(re.id),r.focusPropertiesSection("geometry"))}function Ve(){c.deleteElement(b.value,h.value,d.element.id),r.clearSelection()}return(re,de)=>(l(),i("div",{class:W(["element-wrapper",L.value&&"selected",Y.value&&"locked"]),style:ye(J.value),onMousedown:V,onDblclick:O},[Ml(re.$slots,"default",{},void 0),L.value&&!Y.value?(l(),i(te,{key:0},[de[6]||(de[6]=e("div",{class:"selection-border"},null,-1)),q.value?(l(),i("div",{key:0,class:"object-quickbar",onMousedown:de[3]||(de[3]=Le(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:de[0]||(de[0]=Ee=>je("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:de[1]||(de[1]=Ee=>je("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:de[2]||(de[2]=Ee=>je("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Be},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Oe,title:"Duplicate element","aria-label":"Duplicate element"},[...de[4]||(de[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Ve,title:"Delete element","aria-label":"Delete element"},[...de[5]||(de[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32)):F("",!0),(l(),i(te,null,fe(oe,Ee=>e("div",{key:Ee,class:W(["resize-handle",`handle-${Ee}`]),style:ye({cursor:xe(Ee)}),onMousedown:Le(ge=>we(ge,Ee),["stop"])},null,46,jf)),64))],64)):F("",!0),L.value&&Y.value?(l(),i("div",Df)):F("",!0)],38))}},_f=Ze(Rf,[["__scopeId","data-v-7f9aefb5"]]),Yt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,r=T(()=>d.element.content||{}),c=rt(),p=st(),b=R(!1),h=R(null),L=R("");nt(()=>r.value.text,j=>{b.value||(L.value=j||(d.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function Y(){c.selectedElementId===d.element.id&&(b.value=!0,kl(()=>{if(h.value)if(h.value.focus(),typeof h.value.setSelectionRange=="function"){const j=h.value.value.length;h.value.setSelectionRange(j,j)}else{const j=document.createRange();j.selectNodeContents(h.value),j.collapse(!1);const ve=window.getSelection();ve.removeAllRanges(),ve.addRange(j)}}))}function ie(j){b.value&&j.stopPropagation()}function q(){b.value=!1;const j=L.value;p.updateElement(c.projectId,c.currentSlideId,d.element.id,{content:{...d.element.content,text:j}})}return(j,ve)=>b.value?me((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:h,"onUpdate:modelValue":ve[0]||(ve[0]=$=>L.value=$),onBlur:q,onMousedown:ie,style:ye({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[Se,L.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:Y,style:ye({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},k(L.value),37))}},qf={key:0,class:"image-status image-loading"},Of=["src","alt"],Ff={key:2,class:"image-placeholder"},Vf={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Hf={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,r=R(""),c=R(0),p=R("idle"),b=T(()=>{var ie;return Array.isArray((ie=d.element.content)==null?void 0:ie.fallbackSrcs)?d.element.content.fallbackSrcs:[]});function h(){var ie;r.value=((ie=d.element.content)==null?void 0:ie.src)||"",c.value=0,p.value=r.value?"loading":"empty"}function L(){p.value="loaded"}function Y(){const ie=b.value[c.value];if(ie){c.value+=1,r.value=ie,p.value="loading";return}p.value="error"}return nt(()=>{var ie,q;return[(ie=d.element.content)==null?void 0:ie.src,JSON.stringify(((q=d.element.content)==null?void 0:q.fallbackSrcs)||[])]},()=>h(),{immediate:!0}),(ie,q)=>{var j,ve,$;return l(),i("div",{class:"image-element",style:ye({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((j=x.element.content)==null?void 0:j.borderRadius)||0)+"px",border:`${((ve=x.element.content)==null?void 0:ve.borderWidth)||0}px solid ${(($=x.element.content)==null?void 0:$.borderColor)||"transparent"}`})},[p.value==="loading"?(l(),i("div",qf,[...q[0]||(q[0]=[e("span",{class:"image-status-spinner"},null,-1),e("span",null,"Loading image…",-1)])])):F("",!0),r.value&&p.value!=="error"?(l(),i("img",{key:1,src:r.value,alt:x.element.content.alt||"",style:ye({width:"100%",height:"100%",objectFit:x.element.content.objectFit||"cover",display:p.value==="loaded"?"block":"none"}),draggable:"false",onLoad:L,onError:Y},null,44,Of)):F("",!0),p.value==="empty"||p.value==="error"?(l(),i("div",Ff,[(l(),i("svg",Vf,[...q[1]||(q[1]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),e("span",null,k(p.value==="error"?"Image unavailable":"Image"),1)])):F("",!0)],4)}}},Uf=Ze(Hf,[["__scopeId","data-v-cd42b1c3"]]),Wf={class:"shape-element",style:{width:"100%",height:"100%"}},Gf=["width","height"],Yf=["points","fill","stroke","stroke-width"],Qf={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,r=T(()=>d.element.content||{}),c=T(()=>{const h=r.value.shapeType||"rectangle",L={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return h==="circle"?{...L,borderRadius:"50%"}:h==="rectangle"?{...L,borderRadius:(r.value.borderRadius||0)+"px"}:L}),p=T(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),b=T(()=>{const h=d.element.width||150,L=d.element.height||100,Y=r.value.shapeType;if(Y==="triangle")return`${h/2},0 ${h},${L} 0,${L}`;if(Y==="diamond")return`${h/2},0 ${h},${L/2} ${h/2},${L} 0,${L/2}`;if(Y==="arrow")return`0,${L*.3} ${h*.6},${L*.3} ${h*.6},0 ${h},${L/2} ${h*.6},${L} ${h*.6},${L*.7} 0,${L*.7}`;if(Y==="star"){const ie=h/2,q=L/2,j=Math.min(h,L)/2,ve=j*.4;let $="";for(let M=0;M<10;M++){const a=(M*36-90)*Math.PI/180,z=M%2===0?j:ve;$+=`${ie+z*Math.cos(a)},${q+z*Math.sin(a)} `}return $.trim()}return""});return(h,L)=>(l(),i("div",Wf,[p.value?(l(),i("svg",{key:1,width:x.element.width,height:x.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:b.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,Yf)],8,Gf)):(l(),i("div",{key:0,style:ye(c.value)},null,4))]))}},Jf={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,r=T(()=>d.element.content||{}),c=T(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},b=p[r.value.variant||"primary"]||p.primary;return{...b,background:r.value.bgColor||b.background,color:r.value.textColor||b.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:b.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(p,b)=>(l(),i("div",{class:"button-element",style:ye({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},k(r.value.label||"Button"),5))}},Xf={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Kf={class:"popup-header"},Zf={class:"popup-body"},e1={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,r=T(()=>d.element.content||{}),c=R(!1);function p(b){b.stopPropagation(),c.value=!c.value}return(b,h)=>(l(),i("div",Xf,[e("div",{class:"hotspot-btn",style:ye({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Le(p,["stop"])},k(r.value.icon||"?"),5),pt(Dt,{name:"fade"},{default:vt(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:ye({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",Kf,[e("strong",null,k(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:h[0]||(h[0]=Le(L=>c.value=!1,["stop"]))},"×")]),e("div",Zf,k(r.value.popupContent||"Add your content in the properties panel."),1)],4)):F("",!0)]),_:1})]))}},t1=Ze(e1,[["__scopeId","data-v-ef5f15f6"]]),o1={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},n1=["src"],l1=["src","poster","autoplay","controls","loop","muted"],i1={key:2,class:"video-placeholder"},a1={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},r1={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,r=T(()=>d.element.content||{}),c=T(()=>{const b=r.value.src||"";return b.includes("youtube")||b.includes("youtu.be")}),p=T(()=>{var h,L;const b=r.value.src||"";if(c.value){const Y=(h=b.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:h[1];return Y?`https://www.youtube.com/embed/${Y}`:""}if(b.includes("vimeo.com")){const Y=(L=b.match(/vimeo\.com\/(\d+)/))==null?void 0:L[1];return Y?`https://player.vimeo.com/video/${Y}`:""}return""});return(b,h)=>(l(),i("div",o1,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,n1)):r.value.src&&!p.value?(l(),i("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:ye({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,l1)):(l(),i("div",i1,[(l(),i("svg",a1,[...h[0]||(h[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),h[1]||(h[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},s1=Ze(r1,[["__scopeId","data-v-dfea1a16"]]),d1=["stroke"],u1=["src","controls","autoplay","loop"],c1={key:1,style:{"font-size":"11px",color:"#aaa"}},p1={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(x){return(d,r)=>{var c,p,b,h,L,Y,ie,q,j;return l(),i("div",{class:"audio-element",style:ye({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=x.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=x.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((b=x.element.content)==null?void 0:b.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,d1)),e("span",{style:ye({fontSize:"13px",color:((h=x.element.content)==null?void 0:h.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},k(((L=x.element.content)==null?void 0:L.label)||"Audio Player"),5),(Y=x.element.content)!=null&&Y.src?(l(),i("audio",{key:0,src:x.element.content.src,controls:((ie=x.element.content)==null?void 0:ie.controls)!==!1,autoplay:(q=x.element.content)==null?void 0:q.autoplay,loop:(j=x.element.content)==null?void 0:j.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=Le(()=>{},["stop"]))},null,40,u1)):(l(),i("span",c1,"No source"))],4)}}},v1={class:"quiz-options"},f1=["onClick"],m1={class:"opt-letter"},g1={class:"opt-text"},b1={key:0},h1={class:"quiz-actions"},y1=["disabled"],x1={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(x){const d=x,r=T(()=>d.element.content||{}),c=R(null),p=R(!1);function b(ie){p.value||(c.value=ie)}function h(){c.value!==null&&(p.value=!0)}function L(){c.value=null,p.value=!1}const Y=T(()=>p.value&&c.value===(r.value.correctIndex??0));return(ie,q)=>(l(),i("div",{class:"quiz-element",style:ye({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:ye({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},k(r.value.question||"Question text…"),5),e("div",v1,[(l(!0),i(te,null,fe(r.value.options||[],(j,ve)=>(l(),i("div",{key:ve,class:W(["quiz-opt",c.value===ve&&"selected",p.value&&ve===r.value.correctIndex&&"correct",p.value&&c.value===ve&&ve!==r.value.correctIndex&&"wrong"]),onClick:$=>b(ve)},[e("span",m1,k(String.fromCharCode(65+ve)),1),e("span",g1,k(j),1)],10,f1))),128))]),p.value?(l(),i("div",{key:0,class:W(["quiz-feedback",Y.value?"correct":"wrong"])},[ee(k(Y.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!Y.value&&r.value.explanation?(l(),i("span",b1,k(r.value.explanation),1)):F("",!0)],2)):F("",!0),e("div",h1,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:L},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:h},"Submit",8,y1))])],4))}},w1=Ze(x1,[["__scopeId","data-v-ca2bd187"]]),k1={class:"placeholder-element"},C1={class:"placeholder-prompt"},S1={__name:"PlaceholderElement",props:{element:Object},setup(x){const d=x,r=rt(),c=st();function p(b){let h={type:b};b==="text"?h.content={text:"Click to edit text",fontSize:24}:b==="image"?h.content={src:"",alt:"Image placeholder"}:b==="video"?h.content={src:"",autoplay:!1,controls:!0}:b==="chart"&&(h.content={chartType:"bar",dataText:`A, 10
B, 20`}),c.updateElement(r.projectId,r.currentSlideId,d.element.id,h),r.selectElement(d.element.id)}return(b,h)=>{var L;return l(),i("div",k1,[e("div",C1,k(((L=x.element.content)==null?void 0:L.prompt)||"Add Content"),1),e("div",{class:"placeholder-actions",onMousedown:h[4]||(h[4]=Le(()=>{},["stop"]))},[e("button",{onMousedown:h[0]||(h[0]=Le(Y=>p("text"),["stop","prevent"])),title:"Text"},"T",32),e("button",{onMousedown:h[1]||(h[1]=Le(Y=>p("image"),["stop","prevent"])),title:"Image"},"I",32),e("button",{onMousedown:h[2]||(h[2]=Le(Y=>p("video"),["stop","prevent"])),title:"Media"},"M",32),e("button",{onMousedown:h[3]||(h[3]=Le(Y=>p("chart"),["stop","prevent"])),title:"Chart"},"C",32)],32)])}}},$1=Ze(S1,[["__scopeId","data-v-dda6b3cc"]]),I1={key:0,class:"canvas-empty"},E1={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},A1={key:0,class:"canvas-device-frame","aria-hidden":"true"},T1=["value"],M1={class:"canvas-guide-label"},P1={key:5,class:"drop-hint"},B1={class:"canvas-info-bar"},N1=["disabled"],z1={class:"slide-index"},L1=["disabled"],j1={key:0},D1={__name:"EditorCanvas",setup(x){const d=rt(),r=st(),c=R(null),p=R(null),b=R(1),h=T(()=>b.value*d.zoomLevel);Bl("canvasScale",h);const L=T(()=>r.getProject(d.projectId)),Y=T(()=>_t(L.value)),ie=T(()=>Sl(L.value)),q=T(()=>Y.value.width),j=T(()=>Y.value.height),ve=T(()=>$l(q.value,j.value)),$=T(()=>{var g,w;return(w=(g=L.value)==null?void 0:g.slides)==null?void 0:w.find(K=>K.id===d.currentSlideId)}),M=T(()=>{var g;return[...((g=L.value)==null?void 0:g.slides)||[]].sort((w,K)=>w.order-K.order)}),a=T(()=>M.value.findIndex(g=>g.id===d.currentSlideId)),z=T(()=>{var g;return{autoPlay:!1,motionPresets:[],...((g=L.value)==null?void 0:g.settings)||{}}}),V=T(()=>(Array.isArray(z.value.motionPresets)?z.value.motionPresets:[]).filter(g=>g.scope==="group")),be=T(()=>{const g=new Set(d.selectedElementIds);return se.value.filter(w=>g.has(w.id))}),ce=R(""),oe=T(()=>$.value?$.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:z.value.autoPlay&&Number($.value.duration||0)>0?{label:`Auto ${Number($.value.duration).toFixed(Number($.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function m(){const g=V.value.find(K=>K.id===ce.value);if(!g||!be.value.length)return;[...be.value].sort((K,H)=>(K.y||0)!==(H.y||0)?(K.y||0)-(H.y||0):(K.x||0)-(H.x||0)).forEach((K,H)=>{if(g.type==="auto"){r.updateElement(d.projectId,d.currentSlideId,K.id,{animations:[]});return}r.updateElement(d.projectId,d.currentSlideId,K.id,{animations:[{type:g.type,delay:Math.max(0,Number(g.delay)||0)+H*Math.max(0,Number(g.stepDelay)||0),duration:Math.max(.1,Number(g.duration)||.72)}]})}),r.updateProject(d.projectId,{settings:{...z.value,motionPresets:(z.value.motionPresets||[]).map(K=>K.id===g.id?{...K,usageCount:Math.max(0,Number(K.usageCount||0))+1,lastUsedAt:Date.now()}:K)}})}function C(){if(!V.value.length){ce.value="";return}V.value.some(g=>g.id===ce.value)||(ce.value=V.value[0].id)}const se=T(()=>{var g;return[...((g=$.value)==null?void 0:g.elements)||[]].sort((w,K)=>(w.zIndex||0)-(K.zIndex||0))}),U=T(()=>{const g=$.value;return g?g.backgroundType==="gradient"&&g.backgroundGradient?{background:g.backgroundGradient}:g.backgroundType==="image"&&g.backgroundImage?{backgroundImage:`url(${g.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:g.background||"#fff"}:{background:"#fff"}}),Z=T(()=>`scale(${h.value})`);function pe(){if(!c.value)return;const{clientWidth:g,clientHeight:w}=c.value,K=(g-80)/q.value,H=(w-80)/j.value;b.value=Math.min(K,H,1)}let ne=null;Xt(()=>{pe(),ne=new ResizeObserver(pe),c.value&&ne.observe(c.value),C()}),xl(()=>ne==null?void 0:ne.disconnect()),nt(V,()=>{C()},{deep:!0,immediate:!0}),nt(Y,()=>{pe()},{deep:!0});const le=R({x:0,y:0}),we=R({x:0,y:0}),S=R(!1),D=R(!1),O=R(!1),J=R(null),xe=T(()=>{var g,w;return((g=ie.value)==null?void 0:g.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=ie.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),je=T(()=>{if(!xe.value)return null;if(xe.value.tone==="mobile"){const K=q.value*.08,H=j.value*.05;return{x:K,y:H,width:q.value-K*2,height:j.value-H*2}}const g=q.value*.08,w=j.value*.08;return{x:g,y:w,width:q.value-g*2,height:j.value-w*2}}),Be=T(()=>{if(!je.value)return[];const g=je.value;return se.value.filter(w=>w.visible!==!1).filter(w=>{const K=Number(w.x||0),H=Number(w.y||0),Me=K+Number(w.width||0),Ne=H+Number(w.height||0);return K<g.x||H<g.y||Me>g.x+g.width||Ne>g.y+g.height}).map(w=>w.id)}),Oe=T(()=>d.selectedElementIds.filter(g=>Be.value.includes(g)).length),Ve=T(()=>Be.value.length),re=T(()=>!xe.value||!Ve.value?null:Oe.value?`${Oe.value} selected ${Oe.value===1?"element is":"elements are"} outside the ${xe.value.label.toLowerCase()}.`:`${Ve.value} ${Ve.value===1?"element is":"elements are"} outside the ${xe.value.label.toLowerCase()}.`),de=T(()=>{if(!S.value)return null;const g=Math.min(le.value.x,we.value.x),w=Math.min(le.value.y,we.value.y),K=Math.abs(we.value.x-le.value.x),H=Math.abs(we.value.y-le.value.y);return{x:g,y:w,width:K,height:H}});function Ee(g){!S.value&&(g.target===p.value||g.target===g.currentTarget)&&d.clearSelection()}function ge(g){return g?Array.from(g.files||[]).some(w=>w.type.startsWith("image/")):!1}function X(g){return g?Array.from(g.types||[]).includes(Qt):!1}function P(g,w,K){return Math.min(Math.max(g,w),K)}function A(g,w,K){const H=Jt(g),Me=P(w-H.width/2,0,Math.max(0,q.value-H.width)),Ne=P(K-H.height/2,0,Math.max(0,j.value-H.height));return{x:Me,y:Ne,bounds:H}}function _(g){if(!X(g))return null;try{const w=g.getData(Qt),K=w?JSON.parse(w):null;return K!=null&&K.id&&r.getContentBlocks(d.projectId).find(H=>H.id===K.id)||null}catch{return null}}function Ie(g,w,K){if(!p.value||!K){J.value=null;return}const H=p.value.getBoundingClientRect(),Me=(g-H.left)/h.value,Ne=(w-H.top)/h.value,Ge=A(K,Me,Ne);J.value={block:K,x:Ge.x,y:Ge.y,bounds:Ge.bounds}}function Ae(g,w,K){if(!g||!g.type.startsWith("image/"))return;const H=new FileReader;H.onload=()=>{const Me=String(H.result||"");if(!Me)return;const Ne=new Image;Ne.onload=()=>{const Ge=p.value.getBoundingClientRect(),Xe=(w-Ge.left)/h.value,ue=(K-Ge.top)/h.value,We=Math.min(420/Ne.width,280/Ne.height,1),De=Math.max(120,Math.round(Ne.width*We)),Qe=Math.max(80,Math.round(Ne.height*We)),yt=Math.max(0,Math.min(q.value-De,Math.round(Xe-De/2))),gt=Math.max(0,Math.min(j.value-Qe,Math.round(ue-Qe/2))),kt=r.addElement(d.projectId,d.currentSlideId,"image",{x:yt,y:gt,width:De,height:Qe,content:{src:Me,alt:g.name,objectFit:"cover"}});kt&&(d.selectElement(kt.id),d.setActiveTool("select"),d.setRightPanel("properties"))},Ne.src=Me},H.readAsDataURL(g)}function Fe(g){const w=ge(g.dataTransfer),K=X(g.dataTransfer);!w&&!K||(g.preventDefault(),g.dataTransfer.dropEffect="copy",D.value=w,O.value=K,K&&Ie(g.clientX,g.clientY,_(g.dataTransfer)))}function y(g){var w;(w=g.currentTarget)!=null&&w.contains(g.relatedTarget)||(D.value=!1,O.value=!1,J.value=null)}function $e(g){const w=ge(g.dataTransfer),K=X(g.dataTransfer);if(!w&&!K)return;if(g.preventDefault(),D.value=!1,O.value=!1,J.value=null,K){try{const Me=_(g.dataTransfer);if(!Me)return;const Ne=p.value.getBoundingClientRect(),Ge=(g.clientX-Ne.left)/h.value,Xe=(g.clientY-Ne.top)/h.value,ue=A(Me,Ge,Xe),Te=r.insertContentBlock(d.projectId,d.currentSlideId,Me.id,{x:ue.x,y:ue.y});Te.length&&(d.setSelection(Te.map(lt=>lt.id)),d.setActiveTool("select"),d.focusPropertiesSection("content"))}catch(Me){console.warn("Failed to drop block onto canvas.",Me)}return}const H=Array.from(g.dataTransfer.files||[]).find(Me=>Me.type.startsWith("image/"));H&&Ae(H,g.clientX,g.clientY)}function He(g){if(be.value.length<2)return;const w=[...be.value].sort((ue,Te)=>(ue.zIndex||0)-(Te.zIndex||0)),K=Math.min(...w.map(ue=>Number(ue.x||0))),H=Math.min(...w.map(ue=>Number(ue.y||0))),Me=Math.max(...w.map(ue=>Number(ue.x||0)+Number(ue.width||0))),Ne=Math.max(...w.map(ue=>Number(ue.y||0)+Number(ue.height||0))),Ge=K+(Me-K)/2,Xe=H+(Ne-H)/2;if(g==="align-left"&&w.forEach(ue=>r.updateElement(d.projectId,d.currentSlideId,ue.id,{x:K},{persist:!1})),g==="align-center"&&w.forEach(ue=>{const Te=Number(ue.width||0);r.updateElement(d.projectId,d.currentSlideId,ue.id,{x:Ge-Te/2},{persist:!1})}),g==="align-right"&&w.forEach(ue=>{const Te=Number(ue.width||0);r.updateElement(d.projectId,d.currentSlideId,ue.id,{x:Me-Te},{persist:!1})}),g==="align-top"&&w.forEach(ue=>r.updateElement(d.projectId,d.currentSlideId,ue.id,{y:H},{persist:!1})),g==="align-middle"&&w.forEach(ue=>{const Te=Number(ue.height||0);r.updateElement(d.projectId,d.currentSlideId,ue.id,{y:Xe-Te/2},{persist:!1})}),g==="align-bottom"&&w.forEach(ue=>{const Te=Number(ue.height||0);r.updateElement(d.projectId,d.currentSlideId,ue.id,{y:Ne-Te},{persist:!1})}),g==="distribute-horizontal"){const ue=[...w].sort((De,Qe)=>(De.x||0)-(Qe.x||0)),Te=ue.reduce((De,Qe)=>De+Number(Qe.width||0),0),lt=ue.length>1?(Me-K-Te)/(ue.length-1):0;let We=K;ue.forEach(De=>{r.updateElement(d.projectId,d.currentSlideId,De.id,{x:We},{persist:!1}),We+=Number(De.width||0)+lt})}if(g==="distribute-vertical"){const ue=[...w].sort((De,Qe)=>(De.y||0)-(Qe.y||0)),Te=ue.reduce((De,Qe)=>De+Number(Qe.height||0),0),lt=ue.length>1?(Ne-H-Te)/(ue.length-1):0;let We=H;ue.forEach(De=>{r.updateElement(d.projectId,d.currentSlideId,De.id,{y:We},{persist:!1}),We+=Number(De.height||0)+lt})}r.commitProject(d.projectId)}function Ue(g){const w=d.activeTool;if(g.target!==p.value&&g.target!==g.currentTarget)return;g.preventDefault(),g.stopPropagation();const K=p.value.getBoundingClientRect(),H=(g.clientX-K.left)/h.value,Me=(g.clientY-K.top)/h.value;if(w==="select"){S.value=!0,le.value={x:H,y:Me},we.value={x:H,y:Me};const Xe=Te=>{we.value={x:(Te.clientX-K.left)/h.value,y:(Te.clientY-K.top)/h.value}},ue=()=>{window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseup",ue);const Te=de.value;if(Te&&(Te.width>2||Te.height>2)){const lt=se.value.filter(We=>{const De=We.x,Qe=We.y,yt=We.width||100,gt=We.height||100;return De<Te.x+Te.width&&De+yt>Te.x&&Qe<Te.y+Te.height&&Qe+gt>Te.y}).map(We=>We.id);lt.length>0?d.setSelection(lt):d.clearSelection()}else d.clearSelection();setTimeout(()=>{S.value=!1},0)};window.addEventListener("mousemove",Xe),window.addEventListener("mouseup",ue);return}const Ne=Xe=>d.snapToGrid?Math.round(Xe/d.gridSize)*d.gridSize:Xe,Ge=r.addElement(d.projectId,d.currentSlideId,w,{x:Ne(H-75),y:Ne(Me-40)});Ge&&(d.selectElement(Ge.id),d.setActiveTool("select"),d.setRightPanel("properties"))}const Je=T(()=>{if(!d.showGrid)return{};const g=d.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${g}px ${g}px`}}),Ye={text:Yt,heading:Yt,image:Uf,shape:Qf,button:Jf,hotspot:t1,video:s1,audio:p1,quiz:w1,chart:ai,tabs:ii,accordion:li,flipcard:ni,stepper:oi,poll:ti,labeledimage:ei,matching:Zl,sorting:Kl,cloze:Xl,scenario:Jl,progress:Ql,placeholder:$1,divider:"div"};function Tt(g){return Ye[g]||Yt}function ct(g){var w,K;return g.type!=="divider"?{}:{borderTop:`${((w=g.content)==null?void 0:w.thickness)||2}px solid ${((K=g.content)==null?void 0:K.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const _e=R({show:!1,x:0,y:0,elId:null});function ft(g,w){g.preventDefault(),_e.value={show:!0,x:g.clientX,y:g.clientY,elId:w},d.selectElement(w),setTimeout(()=>window.addEventListener("click",et,{once:!0}),0)}function et(){_e.value.show=!1}function At(){if(_e.value.elId){const g=r.duplicateElement(d.projectId,d.currentSlideId,_e.value.elId);g&&d.selectElement(g.id)}et()}function Mt(){_e.value.elId&&(r.deleteElement(d.projectId,d.currentSlideId,_e.value.elId),d.clearSelection()),et()}function Pt(){_e.value.elId&&r.reorderElement(d.projectId,d.currentSlideId,_e.value.elId,"up"),et()}function Bt(){_e.value.elId&&r.reorderElement(d.projectId,d.currentSlideId,_e.value.elId,"down"),et()}function Nt(){const g=a.value,w=r.addSlide(d.projectId,g);w&&d.setCurrentSlide(w.id)}function zt(){const g=a.value;g>0&&d.setCurrentSlide(M.value[g-1].id)}function mt(){const g=a.value;g<M.value.length-1&&d.setCurrentSlide(M.value[g+1].id)}return(g,w)=>{var K;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[$.value?(l(),i(te,{key:1},[e("div",{class:W(["canvas-zoom-wrapper",[xe.value&&`canvas-zoom-wrapper-${xe.value.tone}`]]),style:ye({transform:Z.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:ye({width:q.value+"px",height:j.value+"px",...U.value,...Je.value}),onClick:Ee,onMousedown:Ue,onDragover:Fe,onDragleave:y,onDrop:$e,onContextmenu:w[3]||(w[3]=Le(()=>{},["prevent"]))},[xe.value?(l(),i("div",A1)):F("",!0),E(d).multiSelection&&V.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=Le(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),me(e("select",{"onUpdate:modelValue":w[0]||(w[0]=H=>ce.value=H),class:"selection-preset-select"},[(l(!0),i(te,null,fe(V.value,H=>(l(),i("option",{key:H.id,value:H.id},k(H.name),9,T1))),128))],512),[[jt,ce.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Le(m,["stop"])},"Apply")],32)):F("",!0),re.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=Le(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,k(re.value),1)],32)):F("",!0),J.value?(l(),i("div",{key:3,class:"block-drop-preview",style:ye({left:`${J.value.x}px`,top:`${J.value.y}px`,width:`${J.value.bounds.width}px`,height:`${J.value.bounds.height}px`})},[(l(!0),i(te,null,fe(J.value.block.elements,(H,Me)=>{var Ne,Ge,Xe,ue;return l(),i("div",{key:`${J.value.block.id}-preview-${Me}`,class:W(["block-drop-preview-el",`block-drop-preview-${H.type}`]),style:ye({left:`${Number(H.x||0)-J.value.bounds.minX}px`,top:`${Number(H.y||0)-J.value.bounds.minY}px`,width:`${Number(H.width||0)}px`,height:`${Number(H.height||0)}px`,borderRadius:H.type==="shape"&&((Ne=H.content)==null?void 0:Ne.shapeType)==="circle"?"50%":`${Number(((Ge=H.content)==null?void 0:Ge.borderRadius)||12)}px`,background:H.type==="shape"?((Xe=H.content)==null?void 0:Xe.fillColor)||"rgba(108,71,255,.18)":H.type==="button"?((ue=H.content)==null?void 0:ue.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(H.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(H.type)?(l(),i(te,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):F("",!0)],6)}),128))],4)):F("",!0),(l(!0),i(te,null,fe(se.value,H=>(l(),ot(_f,{key:H.id,element:H,onContextmenu:Le(Me=>ft(Me,H.id),["stop"])},{default:vt(()=>[(l(),ot(Pl(Tt(H.type)),{element:H,style:ye(H.type==="divider"?ct(H):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),xe.value?(l(),i("div",{key:4,class:W(["canvas-guide",[`canvas-guide-${xe.value.tone}`,Ve.value&&"canvas-guide-warning-state"]]),style:ye(xe.value.style),"aria-hidden":"true"},[e("span",M1,k(xe.value.label)+" · "+k(ve.value),1)],6)):F("",!0),E(d).activeTool!=="select"||D.value||O.value?(l(),i("div",P1,k(O.value?"Drop block to insert it here":D.value?"Drop image to insert it on this slide":`Click anywhere to add ${E(d).activeTool}`),1)):F("",!0),S.value&&de.value?(l(),i("div",{key:6,class:"selection-marquee",style:ye({left:de.value.x+"px",top:de.value.y+"px",width:de.value.width+"px",height:de.value.height+"px"})},null,4)):F("",!0)],36)],6),e("div",B1,[e("button",{class:"bar-btn",onClick:Nt},"Add page"),e("button",{class:"bar-btn icon",onClick:zt,disabled:a.value<=0},"◀",8,N1),e("span",z1,k(a.value+1)+" / "+k(M.value.length),1),e("button",{class:"bar-btn icon",onClick:mt,disabled:a.value>=M.value.length-1},"▶",8,L1),e("span",null,k(q.value)+" × "+k(j.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,k(((K=$.value.elements)==null?void 0:K.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:W(["playback-badge",`playback-badge-${oe.value.tone}`])},k(oe.value.label),3),E(d).hasSelection?(l(),i("span",j1,"· "+k(E(d).selectedElementIds.length)+" selected",1)):F("",!0),E(d).multiSelection?(l(),i(te,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=H=>He("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=H=>He("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=H=>He("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=H=>He("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=H=>He("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=H=>He("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=H=>He("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=H=>He("distribute-vertical"))},"Space V")],64)):F("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=H=>E(d).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",I1,[(l(),i("svg",E1,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),ot(wl,{to:"body"},[_e.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:ye({left:_e.value.x+"px",top:_e.value.y+"px"})},[e("button",{class:"ctx-item",onClick:At},"Duplicate"),e("button",{class:"ctx-item",onClick:Pt},"Bring Forward"),e("button",{class:"ctx-item",onClick:Bt},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Mt},"Delete")],4)):F("",!0)]))],512)}}},R1=Ze(D1,[["__scopeId","data-v-c34e22ca"]]),_1={class:"ai-panel"},q1={class:"ai-mode-tabs"},O1=["onClick"],F1={class:"ai-content"},V1={class:"form-group"},H1={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},U1={key:0,class:"form-group"},W1={key:1,class:"form-group"},G1={class:"layout-label-row"},Y1={class:"layout-current-hint"},Q1={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},J1=["onClick"],X1={class:"layout-preset-title"},K1={class:"layout-preset-hint"},Z1={key:2,class:"form-group"},em={key:3,class:"form-group"},tm={class:"layout-label-row"},om={class:"layout-current-hint"},nm={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},lm={key:4,class:"form-group"},im={class:"layout-label-row"},am={class:"layout-current-hint"},rm={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},sm=["onClick"],dm={class:"layout-preset-title"},um={class:"layout-preset-hint"},cm={class:"form-group"},pm={class:"form-group"},vm={class:"prompt-label-row"},fm={key:1,class:"prompt-auto-badge"},mm={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},gm={key:6,class:"selected-source-card"},bm={class:"result-header"},hm={class:"source-count-badge"},ym={class:"selected-source-preview"},xm={class:"selected-source-actions"},wm=["disabled"],km=["disabled"],Cm={key:0,class:"spinner"},Sm={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$m={key:7,class:"creative-options-wrap"},Im={class:"result-header"},Em={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Am={key:1,class:"creative-options-list"},Tm={class:"creative-title"},Mm={class:"creative-angle"},Pm=["onClick"],Bm={class:"form-group"},Nm={class:"quiz-config-row"},zm={class:"form-group",style:{flex:"1"}},Lm={class:"form-group",style:{flex:"1"}},jm={class:"form-group"},Dm={class:"qtype-btns"},Rm=["onClick"],_m={class:"qtype-icon"},qm={class:"form-group"},Om={class:"form-group"},Fm={class:"prompt-label-row"},Vm={key:1,class:"prompt-auto-badge"},Hm=["disabled"],Um={key:0,class:"spinner"},Wm={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Gm={key:0,class:"quiz-results"},Ym={class:"quiz-results-header"},Qm={class:"form-label"},Jm={class:"quiz-header-actions"},Xm={class:"regen-row"},Km=["disabled"],Zm={key:0,class:"spinner spinner-sm"},eg={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},tg=["disabled"],og={class:"quiz-card-header"},ng={class:"quiz-card-check"},lg=["onUpdate:modelValue"],ig={class:"q-num"},ag={class:"q-badges"},rg={class:"badge type-badge"},sg={class:"q-question"},dg={class:"q-options"},ug={class:"q-option-letter"},cg={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},pg={key:0,class:"q-explanation"},vg=["disabled"],fg={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},mg=["disabled"],gg={key:0,class:"spinner"},bg={key:0,class:"selected-text-preview"},hg={class:"text-preview"},yg={key:1,class:"ai-hint"},xg={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},wg=["disabled"],kg={key:0,class:"spinner"},Cg={key:0,class:"selected-text-preview"},Sg={class:"text-preview"},$g={key:1,class:"ai-hint"},Ig={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},Eg=["disabled"],Ag={key:0,class:"spinner"},Tg={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Mg={class:"result-header"},Pg={class:"result-actions"},Bg=["disabled"],Ng={class:"textarea result-display"},zg={key:0,class:"demo-notice",style:{"margin-bottom":"var(--space-3)"}},Lg={key:1,class:"ai-error",style:{"margin-bottom":"var(--space-3)"}},jg={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dg=["disabled"],Rg={key:0,class:"spinner"},_g={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},qg={class:"textarea result-display",style:{color:"var(--color-primary)"}},Og={key:6,class:"ai-settings"},Fg={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Vg=["value"],Hg={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Ug=["value","placeholder"],Wg={class:"form-hint"},Gg={key:0,class:"demo-notice"},Yg={key:1,class:"demo-notice"},Qg={key:7,class:"result-area"},Jg={class:"result-header"},Xg={class:"result-pre"},Kg={class:"result-actions"},Zg=["disabled"],eb={key:8,class:"ai-error"},tb={__name:"AIAssistant",setup(x){const d=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"cloze",label:"Fill-in-the-Blank",hint:"Interactive fill-in-the-blank text.",promptHint:"Create an interactive fill-in-the-blank activity. Provide a paragraph with a few key words wrapped in [brackets] to indicate blanks.",schema:'{ "layout": "cloze", "title": "...", "subtitle": "...", "callout": "...", "cloze": { "text": "A sentence about the topic where the [key word] is in brackets." } }'},{id:"scenario",label:"Scenario",hint:"Branching scenario with choices.",promptHint:"Create a branching scenario. Provide a starting situation from the agent, and 2-3 potential responses from the user.",schema:'{ "layout": "scenario", "title": "...", "subtitle": "...", "callout": "...", "scenario": { "agentMessage": "...", "userOptions": ["..."] } }'},{id:"progress",label:"Progress",hint:"A step-by-step progress indicator.",promptHint:"Create a progress overview representing the users current learning status. Provide realistic mock values.",schema:'{ "layout": "progress", "title": "...", "subtitle": "...", "callout": "...", "progress": { "level": 4, "xp": 350, "percent": 65 } }'},{id:"poll",label:"Poll",hint:"An interactive poll or survey.",promptHint:"Create an interactive poll question with 3-4 options. Provide realistic mock vote counts.",schema:'{ "layout": "poll", "title": "...", "subtitle": "...", "callout": "...", "poll": { "question": "...", "options": [{ "text": "...", "votes": 12 }] } }'},{id:"matching",label:"Matching",hint:"A drag-and-drop matching activity.",promptHint:"Create a matching activity with 3-4 pairs of related concepts (e.g. term and definition).",schema:'{ "layout": "matching", "title": "...", "subtitle": "...", "callout": "...", "matching": { "pairs": [{ "left": "...", "right": "..." }] } }'},{id:"sorting",label:"Sorting",hint:"A sorting activity.",promptHint:"Create an activity where items need to be sorted into correct order. Provide the items in random order.",schema:'{ "layout": "sorting", "title": "...", "subtitle": "...", "callout": "...", "sorting": { "items": [{ "text": "...", "correctOrder": 0 }] } }'},{id:"labeledimage",label:"Labeled Image",hint:"An image with interactive hotspots.",promptHint:"Define 2-3 standard hotspots (x, y percentages) with labels and descriptions over a concept.",schema:'{ "layout": "labeledimage", "title": "...", "subtitle": "...", "callout": "...", "labeledimage": { "markers": [{ "x": 25, "y": 35, "label": "1", "title": "...", "description": "..." }] } }'}],r={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(s,n="classic"){const v=String(s||n||"classic").trim().toLowerCase();return d.some(I=>I.id===v)?v:n}function p(s,n=""){return String(s??n).replace(/^\s*[-•]\s*/,"").trim()||n}function b(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(`
`):[]).map(v=>p(v)).filter(Boolean)}function h(s,n,v){const I=[...s];for(;I.length<n;)I.push(v(I.length));return I.slice(0,n)}function L(s,n){const v=Array.isArray(s)?s.map((f,G)=>({title:p(f==null?void 0:f.title,`Card ${G+1}`),body:p((f==null?void 0:f.body)||(f==null?void 0:f.text)||(f==null?void 0:f.description),"Add supporting detail.")})).filter(f=>f.title||f.body):[],I=n.map((f,G)=>({title:`Point ${G+1}`,body:f}));return h(v.length?v:I,3,f=>({title:`Point ${f+1}`,body:"Add supporting detail."}))}function Y(s,n){const v=b(s==null?void 0:s.leftPoints),I=b(s==null?void 0:s.rightPoints),f=n.slice(0,Math.max(1,Math.ceil(n.length/2))),G=n.slice(Math.max(1,Math.ceil(n.length/2)));return{leftTitle:p(s==null?void 0:s.leftTitle,"Option A"),leftPoints:h(v.length?v:f,3,he=>`Left point ${he+1}`),rightTitle:p(s==null?void 0:s.rightTitle,"Option B"),rightPoints:h(I.length?I:G,3,he=>`Right point ${he+1}`)}}function ie(s,n){const v=Array.isArray(s)?s.map((f,G)=>({value:p(f==null?void 0:f.value,`${G+1}`),label:p(f==null?void 0:f.label,`Metric ${G+1}`)})).filter(f=>f.value||f.label):[],I=n.map((f,G)=>{const[he,...tt]=f.split(/[:\-]/);return{value:p(he,`${G+1}`),label:p(tt.join(" ").trim(),f)}});return h(v.length?v:I,3,f=>({value:`${f+1}`,label:`Metric ${f+1}`}))}function q(s,n){const v=Array.isArray(s)?s.map((f,G)=>({title:p(f==null?void 0:f.title,`Phase ${G+1}`),detail:p((f==null?void 0:f.detail)||(f==null?void 0:f.description),"Explain the milestone.")})).filter(f=>f.title||f.detail):[],I=n.map((f,G)=>({title:`Phase ${G+1}`,detail:f}));return h(v.length?v:I,4,f=>({title:`Phase ${f+1}`,detail:"Explain the milestone."}))}function j(s,n){const v=Array.isArray(s)?s.map((f,G)=>({question:p(f==null?void 0:f.question,`Question ${G+1}?`),answer:p(f==null?void 0:f.answer,"Add the short answer here.")})).filter(f=>f.question||f.answer):[],I=n.map((f,G)=>({question:`Question ${G+1}?`,answer:f}));return h(v.length?v:I,3,f=>({question:`Question ${f+1}?`,answer:"Add the short answer here."}))}function ve(s,n){const v=Array.isArray(s)?s.map((f,G)=>({title:p(f==null?void 0:f.title,`Step ${G+1}`),detail:p((f==null?void 0:f.detail)||(f==null?void 0:f.description),"Add the step detail here.")})).filter(f=>f.title||f.detail):[],I=n.map((f,G)=>({title:`Step ${G+1}`,detail:f}));return h(v.length?v:I,3,f=>({title:`Step ${f+1}`,detail:"Add the step detail here."}))}const $=Ll(),M=rt(),a=st(),z=T(()=>$.apiProvider==="gemini"?"Gemini":"OpenAI"),V=T(()=>$.apiProvider==="gemini"?"AIza...":"sk-..."),be=T(()=>$.apiProvider==="gemini"?"Gemini API keys from Google AI Studio work for text features on the free tier. We provide free image generation via Pollinations.ai when Gemini is selected. The key is stored locally in your browser and never sent to our servers.":"Key is stored locally in your browser. It is never sent to our servers."),ce=R("generate"),oe=R(""),m=R(""),C=R("");nt(ce,()=>{C.value=""}),nt(()=>M.aiPanelMode,s=>{s&&(ce.value=s)},{immediate:!0});const se=R(4),U=R("general"),Z=R("Spanish"),pe=R(""),ne=R(""),le=R(""),we=R(!1),S=R("single"),D=R("classic"),O=R("mixed"),J=R(5),xe=R("slide"),je=R([]),Be=R(""),Oe=T(()=>d.find(s=>s.id===D.value)||d[0]),Ve=T(()=>{const s=m.value.trim()||"[your topic]";if(S.value==="deck"){let I=`Create a complete ${J.value}-slide learning deck about "${s}".`;return ne.value.trim()&&(I+=`
Additional context: ${ne.value.trim()}`),I+=`
Deck layout strategy: ${O.value}`,O.value==="single"?I+=`
Use the ${D.value} layout for every slide.`:I+=`
Mix layouts across the deck when appropriate.`,I+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process|cloze|scenario|progress|poll|matching|sorting|labeledimage" }] }`,I+=`
Make each slide distinct, logically sequenced, and specific to "${s}".`,I}let v=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[U.value]||"educational slide"} about "${s}".`;return ne.value.trim()&&(v+=`
Additional context: ${ne.value.trim()}`),v+=`
Layout mode: ${D.value}`,v+=`
Layout instruction: ${Oe.value.promptHint}`,v+=`
Return ONLY valid JSON matching this shape: ${Oe.value.schema}`,v+=`
Make all content specific to "${s}" — no generic placeholders.`,v});nt(Ve,s=>{we.value||(le.value=s)},{immediate:!0});function re(){le.value=Ve.value,we.value=!1}const de=R(""),Ee=R("intermediate"),ge=R("multiple-choice"),X=R(""),P=R([]),A=R(""),_=R(!1),Ie=T(()=>{const s=de.value.trim()||"[your topic]",n={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},v={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let I=`Generate ${se.value} ${n[Ee.value]} ${v[ge.value]} quiz questions about "${s}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return X.value.trim()&&(I+=`
Learning objective: ${X.value.trim()}`),I});nt(Ie,s=>{_.value||(A.value=s)},{immediate:!0});function Ae(){A.value=Ie.value,_.value=!1}const Fe=T(()=>a.getProject(M.projectId)),y=T(()=>{var s,n;return(n=(s=Fe.value)==null?void 0:s.slides)==null?void 0:n.find(v=>v.id===M.currentSlideId)}),$e=T(()=>{var s,n;return M.selectedElementId?(n=(s=y.value)==null?void 0:s.elements)==null?void 0:n.find(v=>v.id===M.selectedElementId):null}),He=T(()=>{var n;const s=new Set(M.selectedElementIds);return(((n=y.value)==null?void 0:n.elements)||[]).filter(v=>{var I;return s.has(v.id)&&typeof((I=v==null?void 0:v.content)==null?void 0:I.text)=="string"&&v.content.text.trim()})}),Ue=T(()=>He.value.map(s=>s.content.text.trim()).filter(Boolean).join(`

`));async function Je(){if(!m.value.trim()&&!le.value.trim())return;if(C.value="",je.value=[],Be.value="",S.value==="deck"){const n=await $.generateSlideDeck(m.value,J.value,{objective:ne.value,customPrompt:le.value,layoutStrategy:O.value,layoutMode:D.value});if(n!=null&&n.length){const v=n.map(I=>Ye(I));C.value=JSON.stringify({slides:v},null,2),De(v,{replaceGenerated:!0})}return}if(xe.value==="options"){await gt();return}const s=await $.generateSlideContent(m.value,U.value,ne.value,le.value,{layoutMode:D.value});if(s){const n=Ye(s);C.value=JSON.stringify(n,null,2),Qe(n,{replaceGenerated:!0})}}function Ye(s){var f;const n=s&&typeof s=="object"?s:{},v=b(n.bullets),I=c(n.layout||((f=n.design)==null?void 0:f.layout),S.value==="deck"&&O.value==="mixed"?"classic":D.value);return{title:String(n.title||m.value||"Untitled Slide").trim(),subtitle:String(n.subtitle||"").trim(),bullets:v,callout:String(n.callout||"").trim(),layout:I,cards:L(n.cards,v),comparison:Y(n.comparison,v),metrics:ie(n.metrics,v),timeline:q(n.timeline,v),faqs:j(n.faqs,v),process:ve(n.process,v),cloze:n.cloze||{text:""},scenario:n.scenario||{agentMessage:"",userOptions:[]},progress:n.progress||{level:4,xp:350,percent:65},poll:n.poll||{question:"",options:[]},matching:n.matching||{pairs:[]},sorting:n.sorting||{items:[]},labeledimage:n.labeledimage||{markers:[]}}}function Tt(s,n){var f,G,he;const v=(G=(f=a.getProject(s))==null?void 0:f.slides)==null?void 0:G.find(tt=>tt.id===n);if(!((he=v==null?void 0:v.elements)!=null&&he.length))return;v.elements.filter(tt=>{var B;return((B=tt.meta)==null?void 0:B.source)==="ai-content"}).map(tt=>tt.id).forEach(tt=>{a.deleteElement(s,n,tt)})}function ct(s,n,v,I){return a.addElement(s,n,v,{...I,meta:{...I.meta||{},source:"ai-content"}})}function _e(s){const n=Wl.find(I=>I.id===s);if(!n)return null;const v=Gl(JSON.parse(JSON.stringify(n)),s);return v.elements=v.elements.map(I=>({...I,meta:{...I.meta||{},source:"ai-content"}})),v}function ft(s,n){n&&s.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:n,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function et(s,n){if(!n)return;const v=Jt(s);s.elements.push({type:"text",x:0,y:v.height+18,width:Math.max(v.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${n}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function At(s){const n=Array.isArray(s)?s:[];if(!n.length)return{minX:40,minY:54,width:0,height:0};const v=Math.min(...n.map(he=>Number(he.x||0))),I=Math.min(...n.map(he=>Number(he.y||0))),f=Math.max(...n.map(he=>Number(he.x||0)+Number(he.width||0))),G=Math.max(...n.map(he=>Number(he.y||0)+Number(he.height||0)));return{minX:v,minY:I,width:Math.max(0,f-v),height:Math.max(0,G-I)}}function Mt(s,n){var G;const v=a.getProject(s),I=Jt(n),f=Number(((G=v==null?void 0:v.settings)==null?void 0:G.slideWidth)||960);return{x:Math.max(40,Math.round((f-I.width)/2)),y:54}}function Pt(s){const n=_e(r.cards);if(!n)return null;const v=s.cards;return n.elements[0].content.text=s.title,n.elements[1].content.text=s.subtitle||s.callout||"Use the three cards to frame the main ideas.",v.forEach((I,f)=>{n.elements[5+f].content.text=I.title,n.elements[8+f].content.text=I.body}),s.callout&&s.subtitle&&et(n,s.callout),n}function Bt(s){const n=_e(r.comparison);return n?(n.elements[0].content.text=s.title,n.elements[3].content.text=s.comparison.leftTitle,n.elements[4].content.text=s.comparison.rightTitle,n.elements[5].content={...n.elements[5].content,text:s.comparison.leftPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},n.elements[6].content={...n.elements[6].content,text:s.comparison.rightPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},ft(n,s.subtitle),et(n,s.callout),n):null}function Nt(s){const n=_e(r.metrics);return n?(n.elements[0].content.text=s.title,s.metrics.forEach((v,I)=>{n.elements[4+I].content.text=v.value,n.elements[7+I].content.text=v.label}),ft(n,s.subtitle),et(n,s.callout),n):null}function zt(s){const n=_e(r.timeline);return n?(n.elements[0].content.text=s.title,s.timeline.forEach((v,I)=>{n.elements[6+I].content={...n.elements[6+I].content,text:`${v.title}
${v.detail}`,fontSize:16,lineHeight:1.35}}),ft(n,s.subtitle),et(n,s.callout),n):null}function mt(s){const n=_e(r.faq);return n?(n.elements[0].content.text=s.title,s.faqs.forEach((v,I)=>{n.elements[4+I].content={...n.elements[4+I].content,text:`${v.question}
${v.answer}`,fontSize:16,lineHeight:1.35},n.elements[4+I].height=44}),ft(n,s.subtitle),et(n,s.callout),n):null}function g(s){const n=_e(r.process);return n?(n.elements[0].content.text=s.title,s.process.forEach((v,I)=>{n.elements[8+I].content.text=v.title,n.elements[11+I].content.text=v.detail}),ft(n,s.subtitle),et(n,s.callout),n):null}function w(s,n,v,I,f){const G=[];s.title&&G.push({type:"heading",x:0,y:0,width:800,height:80,content:{text:s.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}});let he=s.title?100:0;s.subtitle&&(G.push({type:"text",x:0,y:he,width:800,height:40,content:{text:s.subtitle,fontSize:16,fontWeight:"500",textAlign:"center",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}}),he+=60);const tt=Math.max(0,(800-v)/2);G.push({type:n,x:tt,y:he,width:v,height:I,content:f()});const B={id:`generated-${crypto.randomUUID?crypto.randomUUID():Date.now()}`,type:"group",elements:G};return s.callout&&et(B,s.callout),B}function K(s){const n=s.cloze||{};return w(s,"cloze",600,240,()=>({title:"Fill in the blanks",text:n.text||"An assessment should align closely with the [learning] objectives.",bgColor:"#ffffff",textColor:"#1e293b",fontSize:16,borderRadius:8}))}function H(s){var G;const n=s.scenario||{},v=n.agentMessage||"Welcome to this scenario. What will you do first?",I=(G=n.userOptions)!=null&&G.length?n.userOptions:["I will analyze the requirements."],f=[{role:"agent",text:v}];return I.forEach(he=>f.push({role:"user",text:typeof he=="string"?he:he.text})),w(s,"scenario",600,360,()=>({bgColor:"#f8fafc",borderRadius:8,messages:f}))}function Me(s){const n=s.progress||{};return w(s,"progress",400,200,()=>({title:"Your Progress",bgColor:"#ffffff",titleColor:"#0f172a",textColor:"#64748b",fillColor:"#10b981",borderRadius:8,mockXP:n.xp||350,mockLevel:n.level||4,mockPercent:n.percent||65}))}function Ne(s){var f;const n=s.poll||{},I=((f=n.options)!=null&&f.length?n.options:[{text:"Option A",votes:12},{text:"Option B",votes:24}]).map((G,he)=>({id:String(he+1),text:G.text||String(G),votes:G.votes||0}));return w(s,"poll",600,360,()=>({question:n.question||"What is your favorite topic?",options:I,showResults:!1,barColor:"#cbd5e1",barSelectedColor:"#6c47ff",trackColor:"#f1f5f9",textColor:"#1e293b",bgColor:"#ffffff"}))}function Ge(s){var f;const n=s.matching||{},I=((f=n.pairs)!=null&&f.length?n.pairs:[{left:"Concept 1",right:"Detail 1"},{left:"Concept 2",right:"Detail 2"}]).map((G,he)=>({id:String(he+1),left:G.left,right:G.right}));return w(s,"matching",600,360,()=>({title:"Match the concepts",bgColor:"#ffffff",titleColor:"#0f172a",accentColor:"#6c47ff",accentBgColor:"#f3f0ff",pairs:I}))}function Xe(s){var f;const n=s.sorting||{},I=((f=n.items)!=null&&f.length?n.items:[{text:"Step 1",correctOrder:0},{text:"Step 2",correctOrder:1}]).map((G,he)=>({id:String(he+1),text:G.text,correctOrder:G.correctOrder??he}));return w(s,"sorting",500,360,()=>({title:"Sort items correctly",bgColor:"#ffffff",titleColor:"#0f172a",accentColor:"#6c47ff",items:I}))}function ue(s){var f;const n=s.labeledimage||{},I=((f=n.markers)!=null&&f.length?n.markers:[{x:25,y:35,label:"1",title:"Point 1",description:"Description 1"},{x:75,y:65,label:"2",title:"Point 2",description:"Description 2"}]).map((G,he)=>({id:String(he+1),x:G.x||50,y:G.y||50,label:G.label||String(he+1),title:G.title||`Point ${he+1}`,description:G.description||""}));return w(s,"labeledimage",600,400,()=>({src:"",borderRadius:8,markerColor:"#6c47ff",markerTextColor:"#ffffff",markers:I}))}function Te(s){switch(s.layout){case"cards":return Pt(s);case"comparison":return Bt(s);case"metrics":return Nt(s);case"timeline":return zt(s);case"faq":return mt(s);case"process":return g(s);case"cloze":return K(s);case"scenario":return H(s);case"progress":return Me(s);case"poll":return Ne(s);case"matching":return Ge(s);case"sorting":return Xe(s);case"labeledimage":return ue(s);default:return null}}function lt(s,n,v){var I;if(v.title&&(a.updateSlide(s,n,{title:v.title}),ct(s,n,"heading",{x:60,y:40,width:840,height:80,content:{text:v.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),v.subtitle&&ct(s,n,"text",{x:60,y:130,width:840,height:50,content:{text:v.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(I=v.bullets)!=null&&I.length){const f=v.bullets.map(G=>`• ${G}`).join(`
`);ct(s,n,"text",{x:60,y:v.subtitle?200:150,width:840,height:200,content:{text:f,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}v.callout&&(ct(s,n,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),ct(s,n,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${v.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function We(s,n,v,{replaceGenerated:I=!1,origin:f=null}={}){if(!s||!n)return;I&&Tt(s,n);const G=Te(v);if(a.updateSlide(s,n,{title:v.title||"Untitled Slide"}),G){const he=f||Mt(s,G);a.insertContentBlock(s,n,G,he)}else lt(s,n,v)}function De(s,{replaceGenerated:n=!1}={}){if(!M.currentSlideId)return;const v=M.projectId;if(!v||!Array.isArray(s)||!s.length)return;s.map(f=>Ye(f)).forEach(f=>{const G=a.addSlide(v);G&&We(v,G.id,f,{replaceGenerated:n})})}function Qe(s=null,{replaceGenerated:n=!1}={}){if(!M.currentSlideId)return;let v=s;if(!v){if(!C.value)return;try{v=JSON.parse(C.value)}catch(he){console.warn("Could not parse AI content:",he);return}}const I=Ye(v),f=M.projectId,G=M.currentSlideId;!f||!G||We(f,G,I,{replaceGenerated:n})}function yt(){if(C.value){if(S.value==="deck"){try{const s=JSON.parse(C.value),n=Array.isArray(s)?s:s==null?void 0:s.slides;if(!Array.isArray(n)||!n.length)return;De(n,{replaceGenerated:!0})}catch{return}return}Qe()}}async function gt(){const s=m.value.trim()||"[your topic]",n=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${U.value}" slide about "${s}" using a ${D.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,v=await $.generate(n,{type:"creativeOptions",topic:s,slideType:U.value});if(v)try{const I=JSON.parse(v.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(I))throw new Error("Options must be an array");je.value=I.slice(0,3).map((f,G)=>({title:String((f==null?void 0:f.title)||`Option ${G+1}`),angle:String((f==null?void 0:f.angle)||""),prompt:String((f==null?void 0:f.prompt)||"")})).filter(f=>f.prompt.trim()),je.value.length||(Be.value="No usable creative options were returned. Try generating again.")}catch{Be.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function kt(s){s!=null&&s.prompt&&(le.value=s.prompt,we.value=!0,xe.value="slide",await Je())}async function Ut(){if(!Ue.value.trim()||!M.projectId||!M.currentSlideId)return;const s=await $.transformSourceTextToSlideContent(Ue.value,{topic:m.value,slideType:U.value,description:ne.value,layoutMode:D.value,customPrompt:le.value});if(!s)return;const n=Ye(s),v=At(He.value),I={x:Math.max(24,Math.round(v.minX)),y:Math.max(24,Math.round(v.minY))};He.value.forEach(f=>{a.deleteElement(M.projectId,M.currentSlideId,f.id)}),C.value=JSON.stringify(n,null,2),We(M.projectId,M.currentSlideId,n,{origin:I})}async function Ct(s=!1){if(!de.value.trim()&&!A.value.trim())return;s||(P.value=[]);const n=await $.generateQuiz(de.value,se.value,{difficulty:Ee.value,questionType:ge.value,objective:X.value,customPrompt:A.value});if(n)if(s){const v=new Set(P.value.map(f=>f.question)),I=n.filter(f=>!v.has(f.question)).map(f=>({...f,_selected:!0}));P.value=[...P.value,...I]}else P.value=n.map(v=>({...v,_selected:!0}))}async function qt(){const s=P.value.filter(v=>v._selected);if(!s.length)return;const n=M.projectId;s.forEach((v,I)=>{const f=a.addSlide(n);if(f){a.addElement(n,f.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:v.question||"Untitled Question",options:Array.isArray(v.options)?v.options:["True","False"],correctIndex:typeof v.correctIndex=="number"?v.correctIndex:0,explanation:v.explanation||""}});const G=typeof v.question=="string"?v.question:"Quiz";a.updateSlide(n,f.id,{title:`Q${I+1}: ${G.slice(0,40)}…`})}}),P.value=[]}function Lt(s){P.value.forEach(n=>n._selected=s)}async function Ot(){if(!pe.value.trim())return;const s=await $.generateVoiceoverScript(pe.value);s&&(C.value=s)}async function Ft(){var v,I;const s=(I=(v=$e.value)==null?void 0:v.content)==null?void 0:I.text;if(!s)return;const n=await $.generateTranslation(s,Z.value);n&&(C.value=n)}async function Vt(){!C.value||!$e.value||a.updateElement(M.projectId,M.currentSlideId,$e.value.id,{content:{...$e.value.content,text:C.value}})}const dt=R(""),St=R(!1);function $t(s){return String(s||"").replace(/```(json)?\n?/gi," ").replace(/```/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim().slice(0,220)}function ut(s,n){return new Promise((v,I)=>{const f=window.setTimeout(()=>{I(new Error("Timed out"))},n);Promise.resolve(s).then(G=>{window.clearTimeout(f),v(G)}).catch(G=>{window.clearTimeout(f),I(G)})})}function bt(s){const n=String(s||"").trim(),v=n.toLowerCase(),I=z.value;return n?v.includes("billing hard limit")||v.includes("billing")||v.includes("quota")||v.includes("insufficient_quota")?$.apiProvider==="gemini"?"Gemini image generation is being rejected by Google because this project is still on the free tier. Gemini Developer API image models require a billing-enabled project, so you need to enable billing in AI Studio or switch providers for image generation.":`Your ${I} account cannot generate images right now because its billing or quota limit has been reached. Update billing or wait for quota reset, then try again.`:$.apiProvider==="gemini"&&(v.includes("resource exhausted")||v.includes("free tier")||v.includes("generativelanguage.googleapis.com"))?"Gemini image generation is not available to this free-tier project. Enable billing for the Gemini project in AI Studio to use Gemini image models.":v.includes("invalid api key")||v.includes("incorrect api key")||v.includes("unauthorized")?`The ${I} API key appears invalid for image generation. Check the key in API settings and try again.`:v.includes("rate limit")||v.includes("too many requests")?`${I} rate-limited the image request. Wait a moment and try again.`:`${I} image generation failed: ${n}`:`${I} image generation did not return an image. Try a simpler prompt or try again in a moment.`}async function xt(){if(dt.value.trim()){St.value=!0,C.value="Preparing image prompt...";try{if(!$.apiKey&&$.apiProvider!=="gemini"){C.value=`AI image generation requires a ${z.value} API key in API settings. No fallback image was inserted.`;return}let s=dt.value;try{const v=await ut($.generateImagePrompt(dt.value),2200);v&&(s=v.replace(/```(json)?\n?/g,"").trim())}catch{s=dt.value}s=$t(s)||$t(dt.value),C.value="Generating image and inserting it on the slide...";const n=await ut($.generateImageAsset(s),2e4).catch(()=>null);if(!n){C.value=bt($.lastError);return}a.addElement(M.projectId,M.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:n,fallbackSrcs:[],alt:dt.value.trim()||"AI generated image",sourceType:`${$.apiProvider}-image`,objectFit:"cover"}}),C.value=`AI image added to slide using ${z.value} image generation.`}catch(s){C.value=bt((s==null?void 0:s.message)||$.lastError)}finally{St.value=!1}}}async function ht(){var n,v;if(!((v=(n=$e.value)==null?void 0:n.content)!=null&&v.text))return;const s=await $.improveText($e.value.content.text,oe.value||"Make it clearer and more engaging");s&&(C.value=s)}async function Wt(){!C.value||!$e.value||a.updateElement(M.projectId,M.currentSlideId,$e.value.id,{content:{...$e.value.content,text:C.value}})}async function Ht(){if(!oe.value.trim())return;const s=await $.generate(oe.value);s&&(C.value=s)}return(s,n)=>{var v,I,f,G,he,tt;return l(),i("div",_1,[e("div",q1,[(l(),i(te,null,fe([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],B=>e("button",{key:B.id,class:W(["ai-mode-btn",ce.value===B.id&&"active"]),onClick:at=>ce.value=B.id},k(B.label),11,O1)),64))]),e("div",F1,[ce.value==="generate"?(l(),i(te,{key:0},[e("div",V1,[n[36]||(n[36]=e("label",{class:"form-label"},[ee("Topic / Subject "),e("span",{class:"required"},"*")],-1)),me(e("input",{"onUpdate:modelValue":n[0]||(n[0]=B=>m.value=B),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:hl(Je,["enter"])},null,544),[[Se,m.value]])]),e("div",H1,[e("button",{class:W(["output-mode-btn",S.value==="single"&&"active"]),onClick:n[1]||(n[1]=B=>S.value="single")},"Single Slide",2),e("button",{class:W(["output-mode-btn",S.value==="deck"&&"active"]),onClick:n[2]||(n[2]=B=>S.value="deck")},"Slide Deck",2)]),S.value==="single"?(l(),i("div",U1,[n[38]||(n[38]=e("label",{class:"form-label"},"Slide Type",-1)),me(e("select",{"onUpdate:modelValue":n[3]||(n[3]=B=>U.value=B),class:"select"},[...n[37]||(n[37]=[it('<option value="general" data-v-3ccdb1b2>General</option><option value="intro" data-v-3ccdb1b2>Introduction</option><option value="overview" data-v-3ccdb1b2>Overview</option><option value="concept" data-v-3ccdb1b2>Concept Explanation</option><option value="example" data-v-3ccdb1b2>Example / Case Study</option><option value="summary" data-v-3ccdb1b2>Summary</option><option value="callout" data-v-3ccdb1b2>Key Takeaway</option>',7)])],512),[[jt,U.value]])])):F("",!0),S.value==="single"?(l(),i("div",W1,[e("div",G1,[n[39]||(n[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",Y1,k(Oe.value.hint),1)]),e("div",Q1,[(l(),i(te,null,fe(d,B=>e("button",{key:B.id,class:W(["layout-preset-card",D.value===B.id&&"active"]),onClick:at=>D.value=B.id},[e("span",X1,k(B.label),1),e("span",K1,k(B.hint),1)],10,J1)),64))])])):(l(),i("div",Z1,[n[40]||(n[40]=e("label",{class:"form-label"},"Number of Slides",-1)),me(e("input",{"onUpdate:modelValue":n[4]||(n[4]=B=>J.value=B),class:"input",type:"number",min:"1",max:"20"},null,512),[[Se,J.value,void 0,{number:!0}]]),n[41]||(n[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),S.value==="deck"?(l(),i("div",em,[e("div",tm,[n[42]||(n[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",om,k(O.value==="mixed"?"AI can vary layout by slide":`All slides use ${Oe.value.label}`),1)]),e("div",nm,[e("button",{class:W(["output-mode-btn",O.value==="mixed"&&"active"]),onClick:n[5]||(n[5]=B=>O.value="mixed")},"Mixed Layouts",2),e("button",{class:W(["output-mode-btn",O.value==="single"&&"active"]),onClick:n[6]||(n[6]=B=>O.value="single")},"Consistent Layout",2)])])):F("",!0),S.value==="deck"&&O.value==="single"?(l(),i("div",lm,[e("div",im,[n[43]||(n[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",am,k(Oe.value.hint),1)]),e("div",rm,[(l(),i(te,null,fe(d,B=>e("button",{key:`deck-${B.id}`,class:W(["layout-preset-card",D.value===B.id&&"active"]),onClick:at=>D.value=B.id},[e("span",dm,k(B.label),1),e("span",um,k(B.hint),1)],10,sm)),64))])])):F("",!0),e("div",cm,[n[44]||(n[44]=e("label",{class:"form-label"},[ee("Description "),e("span",{class:"optional"},"(optional)")],-1)),me(e("textarea",{"onUpdate:modelValue":n[7]||(n[7]=B=>ne.value=B),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[Se,ne.value]])]),e("div",pm,[e("div",vm,[n[46]||(n[46]=e("label",{class:"form-label"},"AI Prompt",-1)),we.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:re,title:"Reset to auto-generated prompt"},[...n[45]||(n[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),ee(" Reset ",-1)])])):(l(),i("span",fm,"auto"))]),me(e("textarea",{"onUpdate:modelValue":n[8]||(n[8]=B=>le.value=B),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:n[9]||(n[9]=B=>we.value=!0),spellcheck:"false"},null,544),[[Se,le.value]]),n[47]||(n[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),S.value==="single"?(l(),i("div",mm,[e("button",{class:W(["output-mode-btn",xe.value==="slide"&&"active"]),onClick:n[10]||(n[10]=B=>xe.value="slide")},"Show on Slide",2),e("button",{class:W(["output-mode-btn",xe.value==="options"&&"active"]),onClick:n[11]||(n[11]=B=>xe.value="options")},"Creative Options",2)])):F("",!0),S.value==="single"&&Ue.value?(l(),i("div",gm,[e("div",bm,[n[48]||(n[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",hm,k(He.value.length)+" selected",1)]),e("div",ym,k(Ue.value),1),e("div",xm,[e("button",{class:"btn btn-secondary btn-sm",disabled:E($).isGenerating,onClick:Ut}," Transform Selection to "+k(Oe.value.label),9,wm)])])):F("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating||!m.value.trim()&&!le.value.trim()||S.value==="deck"&&(!J.value||J.value<1||J.value>20),onClick:Je},[E($).isGenerating?(l(),i("span",Cm)):(l(),i("svg",Sm,[...n[49]||(n[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),ee(" "+k(E($).isGenerating?"Generating…":S.value==="deck"?C.value?`Regenerate ${J.value} Slides`:`Generate ${J.value} Slides`:xe.value==="slide"?C.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,km),S.value==="single"&&xe.value==="options"&&(je.value.length||Be.value)?(l(),i("div",$m,[e("div",Im,[n[50]||(n[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[12]||(n[12]=B=>{je.value=[],Be.value=""})},"Clear")]),Be.value?(l(),i("div",Em,[n[51]||(n[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),ee(" "+k(Be.value),1)])):(l(),i("div",Am,[(l(!0),i(te,null,fe(je.value,(B,at)=>(l(),i("article",{key:at,class:"creative-option-card"},[e("h4",Tm,k(B.title),1),e("p",Mm,k(B.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:It=>kt(B)},"Use This Option",8,Pm)]))),128))]))])):F("",!0)],64)):ce.value==="quiz"?(l(),i(te,{key:1},[e("div",Bm,[n[52]||(n[52]=e("label",{class:"form-label"},[ee("Quiz Topic "),e("span",{class:"required"},"*")],-1)),me(e("input",{"onUpdate:modelValue":n[13]||(n[13]=B=>de.value=B),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:hl(Ct,["enter"])},null,544),[[Se,de.value]])]),e("div",Nm,[e("div",zm,[n[54]||(n[54]=e("label",{class:"form-label"},"Questions",-1)),me(e("select",{"onUpdate:modelValue":n[14]||(n[14]=B=>se.value=B),class:"select"},[...n[53]||(n[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[jt,se.value,void 0,{number:!0}]])]),e("div",Lm,[n[56]||(n[56]=e("label",{class:"form-label"},"Difficulty",-1)),me(e("select",{"onUpdate:modelValue":n[15]||(n[15]=B=>Ee.value=B),class:"select"},[...n[55]||(n[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[jt,Ee.value]])])]),e("div",jm,[n[57]||(n[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Dm,[(l(),i(te,null,fe([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],B=>e("button",{key:B.id,class:W(["qtype-btn",ge.value===B.id&&"active"]),onClick:at=>ge.value=B.id},[e("span",_m,k(B.icon),1),e("span",null,k(B.label),1)],10,Rm)),64))])]),e("div",qm,[n[58]||(n[58]=e("label",{class:"form-label"},[ee("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),me(e("input",{"onUpdate:modelValue":n[16]||(n[16]=B=>X.value=B),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[Se,X.value]])]),e("div",Om,[e("div",Fm,[n[60]||(n[60]=e("label",{class:"form-label"},"AI Prompt",-1)),_.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Ae,title:"Reset to auto-generated prompt"},[...n[59]||(n[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),ee(" Reset ",-1)])])):(l(),i("span",Vm,"auto"))]),me(e("textarea",{"onUpdate:modelValue":n[17]||(n[17]=B=>A.value=B),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:n[18]||(n[18]=B=>_.value=!0),spellcheck:"false"},null,544),[[Se,A.value]]),n[61]||(n[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating||!de.value.trim()&&!A.value.trim(),onClick:n[19]||(n[19]=B=>Ct(!1))},[E($).isGenerating?(l(),i("span",Um)):(l(),i("svg",Wm,[...n[62]||(n[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),ee(" "+k(E($).isGenerating?"Generating…":`Generate ${se.value} Questions`),1)],8,Hm),P.value.length?(l(),i("div",Gm,[e("div",Ym,[e("span",Qm,k(P.value.length)+" Questions",1),e("div",Jm,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[20]||(n[20]=B=>Lt(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:n[21]||(n[21]=B=>Lt(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:n[22]||(n[22]=B=>P.value=[])},"Clear")])]),e("div",Xm,[e("button",{class:"btn btn-secondary regen-btn",disabled:E($).isGenerating,onClick:n[23]||(n[23]=B=>Ct(!1)),title:"Replace all questions with a new set"},[E($).isGenerating?(l(),i("span",Zm)):(l(),i("svg",eg,[...n[63]||(n[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),n[64]||(n[64]=ee(" Regenerate ",-1))],8,Km),e("button",{class:"btn btn-ghost regen-btn",disabled:E($).isGenerating,onClick:n[24]||(n[24]=B=>Ct(!0)),title:"Generate more and append to current list"},[...n[65]||(n[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),ee(" Add More ",-1)])],8,tg)]),(l(!0),i(te,null,fe(P.value,(B,at)=>(l(),i("div",{key:at,class:W(["quiz-card",{deselected:!B._selected}])},[e("div",og,[e("label",ng,[me(e("input",{type:"checkbox","onUpdate:modelValue":It=>B._selected=It},null,8,lg),[[Rt,B._selected]]),e("span",ig,"Q"+k(at+1),1)]),e("div",ag,[e("span",{class:W(["badge difficulty-badge",B.difficulty])},k(B.difficulty),3),e("span",rg,k(B.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",sg,k(B.question),1),e("div",dg,[(l(!0),i(te,null,fe(B.options,(It,Et)=>(l(),i("div",{key:Et,class:W(["q-option",Et===B.correctIndex&&"correct"])},[e("span",ug,k(["A","B","C","D"][Et]),1),e("span",null,k(It),1),Et===B.correctIndex?(l(),i("svg",cg,[...n[66]||(n[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):F("",!0)],2))),128))]),B.explanation?(l(),i("div",pg,[n[67]||(n[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),ee(" "+k(B.explanation),1)])):F("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!P.value.filter(B=>B._selected).length,onClick:qt},[n[68]||(n[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),ee(" Add "+k(P.value.filter(B=>B._selected).length)+" Selected as Quiz Slides ",1)],8,vg)])):F("",!0)],64)):ce.value==="voiceover"?(l(),i(te,{key:2},[e("div",fg,[n[69]||(n[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),me(e("textarea",{"onUpdate:modelValue":n[25]||(n[25]=B=>pe.value=B),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[Se,pe.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating,onClick:Ot},[E($).isGenerating?(l(),i("span",gg)):F("",!0),ee(" "+k(E($).isGenerating?"Generating…":"Generate Script"),1)],8,mg)],64)):ce.value==="improve"?(l(),i(te,{key:3},[(I=(v=$e.value)==null?void 0:v.content)!=null&&I.text?(l(),i("div",bg,[n[70]||(n[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",hg,k($e.value.content.text.slice(0,120))+k($e.value.content.text.length>120?"…":""),1)])):(l(),i("p",yg,"Select a text element on the canvas to improve it.")),e("div",xg,[n[71]||(n[71]=e("label",{class:"form-label"},"Instruction",-1)),me(e("input",{"onUpdate:modelValue":n[26]||(n[26]=B=>oe.value=B),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[Se,oe.value]])]),n[72]||(n[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),me(e("textarea",{"onUpdate:modelValue":n[27]||(n[27]=B=>oe.value=B),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[Se,oe.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating||!$e.value&&!oe.value,onClick:n[28]||(n[28]=B=>$e.value?ht():Ht())},[E($).isGenerating?(l(),i("span",kg)):F("",!0),ee(" "+k(E($).isGenerating?"Processing…":"Generate"),1)],8,wg)],64)):ce.value==="translate"?(l(),i(te,{key:4},[(G=(f=$e.value)==null?void 0:f.content)!=null&&G.text?(l(),i("div",Cg,[n[73]||(n[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Sg,k($e.value.content.text.slice(0,120))+k($e.value.content.text.length>120?"…":""),1)])):(l(),i("p",$g,"Select a text element on the canvas to translate it.")),e("div",Ig,[n[75]||(n[75]=e("label",{class:"form-label"},"Target Language",-1)),me(e("select",{"onUpdate:modelValue":n[29]||(n[29]=B=>Z.value=B),class:"select"},[...n[74]||(n[74]=[it('<option value="Spanish" data-v-3ccdb1b2>Spanish</option><option value="French" data-v-3ccdb1b2>French</option><option value="German" data-v-3ccdb1b2>German</option><option value="Italian" data-v-3ccdb1b2>Italian</option><option value="Portuguese" data-v-3ccdb1b2>Portuguese</option><option value="Chinese (Simplified)" data-v-3ccdb1b2>Chinese (Simplified)</option><option value="Japanese" data-v-3ccdb1b2>Japanese</option><option value="Arabic" data-v-3ccdb1b2>Arabic</option>',8)])],512),[[jt,Z.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:E($).isGenerating||!((tt=(he=$e.value)==null?void 0:he.content)!=null&&tt.text),onClick:Ft},[E($).isGenerating?(l(),i("span",Ag)):F("",!0),ee(" "+k(E($).isGenerating?"Translating…":"Translate Text"),1)],8,Eg),C.value?(l(),i("div",Tg,[e("div",Mg,[n[76]||(n[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",Pg,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[30]||(n[30]=B=>s.navigator.clipboard.writeText(C.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Vt,disabled:!$e.value},"Apply",8,Bg)])]),e("div",Ng,k(C.value),1)])):F("",!0)],64)):ce.value==="image"?(l(),i(te,{key:5},[n[81]||(n[81]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),E($).apiProvider==="gemini"?(l(),i("div",zg,[...n[77]||(n[77]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),ee(" Gemini text features work on the free tier, but Gemini image generation on the Developer API usually needs billing enabled for the project. ",-1)])])):F("",!0),E($).apiKey?F("",!0):(l(),i("div",Lg,[n[78]||(n[78]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),ee(" AI image generation needs a "+k(z.value)+" API key in API settings. ",1)])),e("div",jg,[n[79]||(n[79]=e("label",{class:"form-label"},"Image Description",-1)),me(e("textarea",{"onUpdate:modelValue":n[31]||(n[31]=B=>dt.value=B),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[Se,dt.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:St.value||E($).isGenerating||!dt.value||!E($).apiKey,onClick:xt},[St.value||E($).isGenerating?(l(),i("span",Rg)):F("",!0),ee(" "+k(St.value||E($).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,Dg),C.value?(l(),i("div",_g,[n[80]||(n[80]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",qg,k(C.value),1)])):F("",!0)],64)):ce.value==="settings"?(l(),i("div",Og,[e("div",Fg,[n[83]||(n[83]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:E($).apiProvider,class:"select",onChange:n[32]||(n[32]=B=>E($).setProvider(B.target.value))},[...n[82]||(n[82]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"gemini"},"Google Gemini (Free tier for text)",-1)])],40,Vg)]),e("div",Hg,[n[84]||(n[84]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:E($).apiKey,class:"input",placeholder:V.value,onChange:n[33]||(n[33]=B=>E($).setApiKey(B.target.value))},null,40,Ug),e("p",Wg,k(be.value),1)]),E($).apiProvider==="gemini"?(l(),i("div",Gg,[...n[85]||(n[85]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),ee(" Gemini is enabled for content, quiz, voiceover, improve, and translate in this app. Gemini image generation may still require billing on the Google project. ",-1)])])):F("",!0),E($).apiKey?F("",!0):(l(),i("div",Yg,[n[86]||(n[86]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),n[87]||(n[87]=ee(" Running in ",-1)),n[88]||(n[88]=e("strong",null,"demo mode",-1)),ee(" — sample responses only. Add your "+k(z.value)+" API key to use real AI generation. ",1)]))])):F("",!0),C.value&&ce.value!=="settings"&&ce.value!=="quiz"?(l(),i("div",Qg,[e("div",Jg,[n[89]||(n[89]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[34]||(n[34]=B=>C.value="")},"Clear")]),e("pre",Xg,k(C.value),1),e("div",Kg,[ce.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:yt},k(S.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):F("",!0),ce.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:E($).isGenerating,onClick:Je},[...n[90]||(n[90]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),ee(" Regenerate ",-1)])],8,Zg)):F("",!0),ce.value==="improve"&&$e.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Wt}," Apply to Element ")):F("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:n[35]||(n[35]=B=>{var at;return(at=s.navigator.clipboard)==null?void 0:at.writeText(C.value)})}," Copy ")])])):F("",!0),E($).lastError?(l(),i("div",eb,[n[91]||(n[91]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),ee(" "+k(E($).lastError),1)])):F("",!0)])])}}},ob=Ze(tb,[["__scopeId","data-v-3ccdb1b2"]]),nb={class:"theme-manager"},lb={class:"panel-section"},ib={class:"presets-grid"},ab=["title","onClick"],rb={class:"preset-preview"},sb={class:"preset-name"},db={class:"panel-section"},ub={class:"theme-fields"},cb={class:"form-label"},pb={class:"color-row"},vb=["value","onInput"],fb=["value","onChange"],mb={class:"panel-section"},gb={class:"theme-field"},bb=["value","placeholder"],hb={class:"chart-palette-preview"},yb={class:"panel-section"},xb={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wb=["value"],kb=["value"],Cb={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sb=["value"],$b=["value"],Ib={class:"form-group"},Eb=["value"],Ab={class:"panel-section"},Tb={class:"tp-chart-row"},Mb={key:0,class:"apply-message success"},Pb={key:1,class:"apply-message error"},Bb={__name:"ThemeManager",setup(x){const d=rt(),r=st(),c=T(()=>r.getProject(d.projectId)),p=T(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),b=T(()=>yl(p.value)),h=R(""),L=R("");function Y(a){r.updateProject(d.projectId,{theme:{...p.value,...a}})}const ie=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],q=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function j(a){Y(a)}function ve(a,z){const V=a.content||{};return a.type==="text"?{content:{...V,fontFamily:z.fontFamily||V.fontFamily,color:z.textColor||V.color}}:a.type==="heading"?{content:{...V,fontFamily:z.headingFont||z.fontFamily||V.fontFamily,color:z.textColor||V.color}}:a.type==="shape"?{content:{...V,fillColor:z.secondaryColor||V.fillColor}}:a.type==="hotspot"?{content:{...V,bgColor:z.primaryColor||V.bgColor}}:a.type==="button"?{content:{...V,bgColor:z.primaryColor||V.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:z.fontFamily||V.fontFamily}}:a.type==="quiz"?{content:{...V,cardBgColor:z.bgColor||V.cardBgColor,questionColor:z.textColor||V.questionColor,accentColor:z.primaryColor||V.accentColor}}:a.type==="chart"?{content:{...V,...Il(z)}}:null}function $(){Y({chartPalette:""})}function M(){h.value="",L.value="";const a=d.projectId,z=c.value,V=p.value;if(!a||!z){L.value="No active project to apply theme.";return}const be=z.slides||[];let ce=0;be.forEach(oe=>{(oe.backgroundType||"color")==="color"&&r.updateSlide(a,oe.id,{backgroundType:"color",background:V.bgColor||oe.background||"#ffffff"}),(oe.elements||[]).forEach(m=>{const C=ve(m,V);C&&(r.updateElement(a,oe.id,m.id,C),ce+=1)})}),h.value=`Applied theme to ${be.length} slide${be.length===1?"":"s"} and ${ce} element${ce===1?"":"s"}.`}return(a,z)=>(l(),i("div",nb,[e("div",lb,[z[4]||(z[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",ib,[(l(),i(te,null,fe(ie,V=>e("div",{key:V.name,class:"preset-card",title:V.name,onClick:be=>j(V)},[e("div",rb,[e("div",{class:"pp-header",style:ye({background:V.primaryColor})},null,4),e("div",{class:"pp-body",style:ye({background:V.bgColor})},[e("div",{class:"pp-line",style:ye({background:V.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:ye({background:V.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:ye({background:V.secondaryColor})},null,4)]),e("span",sb,k(V.name),1)],8,ab)),64))])]),e("div",db,[z[5]||(z[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",ub,[(l(),i(te,null,fe({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(V,be)=>e("div",{class:"theme-field",key:be},[e("label",cb,k(V),1),e("div",pb,[e("input",{type:"color",value:p.value[be]||"#ffffff",class:"color-input-native",onInput:ce=>Y({[be]:ce.target.value})},null,40,vb),e("input",{value:p.value[be]||"",class:"input",onChange:ce=>Y({[be]:ce.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,fb)])])),64))])]),e("div",mb,[z[8]||(z[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",gb,[z[6]||(z[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:E(Yl)(E(yl)(p.value)),onChange:z[0]||(z[0]=V=>Y({chartPalette:V.target.value}))},null,40,bb),e("div",hb,[(l(!0),i(te,null,fe(b.value,(V,be)=>(l(),i("span",{key:`theme-chart-${be}`,class:"chart-palette-dot",style:ye({background:V})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:$},"Use auto palette")]),z[7]||(z[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",yb,[z[12]||(z[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",xb,[z[9]||(z[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:z[1]||(z[1]=V=>Y({headingFont:V.target.value}))},[(l(),i(te,null,fe(q,V=>e("option",{key:V.value,value:V.value},k(V.label),9,kb)),64))],40,wb)]),e("div",Cb,[z[10]||(z[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:z[2]||(z[2]=V=>Y({fontFamily:V.target.value}))},[(l(),i(te,null,fe(q,V=>e("option",{key:V.value,value:V.value},k(V.label),9,$b)),64))],40,Sb)]),e("div",Ib,[z[11]||(z[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:z[3]||(z[3]=V=>Y({fontSize:+V.target.value}))},null,40,Eb)])]),e("div",Ab,[z[13]||(z[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:ye({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:ye({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:ye({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:ye({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:ye({background:p.value.secondaryColor})},"Badge",4),e("div",Tb,[(l(!0),i(te,null,fe(b.value.slice(0,5),(V,be)=>(l(),i("span",{key:`preview-chart-${be}`,class:"tp-chart-bar",style:ye({background:V,height:`${22+be*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:M}," Apply Theme to Slides "),h.value?(l(),i("p",Mb,k(h.value),1)):F("",!0),L.value?(l(),i("p",Pb,k(L.value),1)):F("",!0)])]))}},Nb=Ze(Bb,[["__scopeId","data-v-da2b0ce4"]]),zb={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Lb={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},jb={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Db={class:"export-tabs tabs",style:{"overflow-x":"auto"}},Rb={class:"export-content"},_b={class:"export-options",style:{"margin-bottom":"20px"}},qb={class:"form-group"},Ob={class:"export-meta"},Fb={class:"meta-item"},Vb={class:"meta-item"},Hb={class:"meta-item"},Ub={class:"export-options",style:{"margin-bottom":"20px"}},Wb={class:"form-group"},Gb={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Yb={class:"export-options",style:{"margin-bottom":"20px"}},Qb={class:"form-group"},Jb={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Xb={class:"export-options",style:{"margin-bottom":"20px"}},Kb={class:"form-group"},Zb={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},eh={key:1,class:"export-success"},th={__name:"ExportModal",setup(x){const d=rt(),r=st(),c=El(),p=T(()=>r.getProject(d.projectId)),b=R("json"),h=R(""),L=R(""),Y=R(!0);nt(p,oe=>{oe&&!L.value&&(L.value=oe.name||"presentation")},{immediate:!0});function ie(){const oe=r.exportProject(d.projectId);if(!oe)return;const m=new Blob([oe],{type:"application/json"}),C=URL.createObjectURL(m),se=document.createElement("a");se.href=C,se.download=`${L.value||"project"}.mediasurf.json`,se.click(),URL.revokeObjectURL(C),h.value="success",setTimeout(()=>h.value="",3e3)}function q(oe,m="presentation"){return String(oe).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||m}function j(oe){return new Promise((m,C)=>{const se=new FileReader;se.onloadend=()=>m(se.result),se.onerror=()=>C(se.error),se.readAsDataURL(oe)})}function ve(oe,m,C="html"){const se=_t(m);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${se.width}px;
  --lf-slide-height: ${se.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(oe==null?void 0:oe.fontFamily)||"Inter, sans-serif"};
  background: ${C==="pdf"?"#f3f4f6":`
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%)`};
  color: ${C==="pdf"?"#111827":"#ffffff"};
  display: ${C==="pdf"?"block":"flex"};
  align-items: ${C==="pdf"?"stretch":"center"};
  justify-content: ${C==="pdf"?"flex-start":"center"};
  overflow: ${C==="pdf"?"auto":"hidden"};
  padding: ${C==="pdf"?"24px 0":"0"};
}
.lf-shell {
  width: ${C==="pdf"?"100%":"100vw"};
  min-height: ${C==="pdf"?"auto":"100vh"};
  height: ${C==="pdf"?"auto":"100vh"};
  position: relative;
  display: flex;
  align-items: ${C==="pdf"?"stretch":"center"};
  justify-content: center;
  overflow: ${C==="pdf"?"visible":"hidden"};
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
  width: ${C==="pdf"?"100%":"auto"};
  max-width: ${C==="pdf"?"none":"auto"};
  padding: ${C==="pdf"?"0":"18px"};
  border-radius: ${C==="pdf"?"0":"32px"};
  background: ${C==="pdf"?"transparent":"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"};
  border: ${C==="pdf"?"none":"1px solid rgba(255,255,255,0.12)"};
  box-shadow: ${C==="pdf"?"none":"0 30px 80px rgba(0,0,0,.34)"};
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
  width: ${C==="pdf"?"100%":"var(--lf-slide-width)"};
  height: ${C==="pdf"?"auto":"var(--lf-slide-height)"};
  border-radius: ${C==="pdf"?"0":"18px"};
  overflow: ${C==="pdf"?"visible":"hidden"};
  box-shadow: ${C==="pdf"?"none":"0 30px 90px rgba(0,0,0,.5)"};
  transform-origin: center center;
  display: ${C==="pdf"?"flex":"block"};
  flex-direction: ${C==="pdf"?"column":"row"};
  align-items: ${C==="pdf"?"center":"stretch"};
  gap: ${C==="pdf"?"24px":"0"};
}
.slide {
  position: ${C==="pdf"?"relative":"absolute"};
  inset: ${C==="pdf"?"auto":"0"};
  display: ${C==="pdf"?"block":"none"};
  overflow: hidden;
  color: ${(oe==null?void 0:oe.textColor)||"#1a1a2e"};
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
  flex: 0 0 auto;
  background-clip: padding-box;
  box-shadow: ${C==="pdf"?"0 12px 32px rgba(15, 23, 42, 0.16)":"none"};
  page-break-after: ${C==="pdf"?"always":"auto"};
  break-after: ${C==="pdf"?"page":"auto"};
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
  background: ${(oe==null?void 0:oe.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(m==null?void 0:m.showProgress)===!1?"none":"block"};
  z-index: 6;
}
${C==="iframe"?`
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
${C==="pdf"?`
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
`}function $(){return String.raw`
  var DEFAULT_CHART_PALETTE = ['#6c47ff', '#06b6d4', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'];
  var DEFAULT_CHART_ROWS = [
    { id: 'series-0', label: 'Q1', value: 120 },
    { id: 'series-1', label: 'Q2', value: 180 },
    { id: 'series-2', label: 'Q3', value: 150 },
    { id: 'series-3', label: 'Q4', value: 210 }
  ];

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function parseNumber(value) {
    var parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function normalizeHexColor(color, fallback) {
    var safeFallback = fallback || '#6c47ff';
    var value = String(color || '').trim();
    var full = value.match(/^#([0-9a-f]{6})$/i);
    if (full) return '#' + full[1].toLowerCase();

    var short = value.match(/^#([0-9a-f]{3})$/i);
    if (short) {
      return '#' + short[1].split('').map(function (token) { return token + token; }).join('').toLowerCase();
    }

    return safeFallback;
  }

  function hexToRgb(color) {
    var hex = normalizeHexColor(color).slice(1);
    return {
      r: Number.parseInt(hex.slice(0, 2), 16),
      g: Number.parseInt(hex.slice(2, 4), 16),
      b: Number.parseInt(hex.slice(4, 6), 16)
    };
  }

  function rgbToHex(rgb) {
    return '#' + [rgb.r, rgb.g, rgb.b].map(function (channel) {
      return clamp(Math.round(channel), 0, 255).toString(16).padStart(2, '0');
    }).join('');
  }

  function mixHexColors(base, target, ratio) {
    var safeRatio = clamp(Number(ratio) || 0, 0, 1);
    var from = hexToRgb(base);
    var to = hexToRgb(target);
    return rgbToHex({
      r: from.r + ((to.r - from.r) * safeRatio),
      g: from.g + ((to.g - from.g) * safeRatio),
      b: from.b + ((to.b - from.b) * safeRatio)
    });
  }

  function extractPaletteTokens(paletteText) {
    return String(paletteText || '')
      .split(/[,\n]/)
      .map(function (token) { return token.trim(); })
      .filter(Boolean);
  }

  function parseDelimitedRow(line, index) {
    var csvLike = line.match(/^"?([^",]+(?:""[^",]*)*)"?\s*[,;\t]\s*"?(-?\d+(?:\.\d+)?)"?$/);
    if (csvLike) {
      return {
        id: 'series-' + index,
        label: csvLike[1].replace(/""/g, '"').trim() || 'Item ' + (index + 1),
        value: parseNumber(csvLike[2])
      };
    }

    var delimited = line.match(/^(.*?)(?:\s*[,|:\t;]\s*|\s+)(-?\d+(?:\.\d+)?)$/);
    if (delimited) {
      return {
        id: 'series-' + index,
        label: delimited[1].trim() || 'Item ' + (index + 1),
        value: parseNumber(delimited[2])
      };
    }

    var parts = line.split(/[,	;]/).map(function (part) { return part.trim(); }).filter(Boolean);
    if (parts.length >= 2) {
      var candidateValue = parts[parts.length - 1];
      if (Number.isFinite(Number(candidateValue))) {
        return {
          id: 'series-' + index,
          label: parts.slice(0, -1).join(' ').trim() || 'Item ' + (index + 1),
          value: parseNumber(candidateValue)
        };
      }
    }

    var numeric = Number(line);
    if (Number.isFinite(numeric)) {
      return {
        id: 'series-' + index,
        label: 'Item ' + (index + 1),
        value: numeric
      };
    }

    return null;
  }

  function extractChartSeries(dataText) {
    var lines = String(dataText || '')
      .split(/\r?\n/)
      .map(function (line) { return line.trim(); })
      .filter(Boolean);

    if (!lines.length) return [];

    var firstLine = lines[0].toLowerCase();
    var headerMatch = firstLine.match(/label|name|category|item/) && firstLine.match(/value|amount|count|total/);
    var rows = headerMatch ? lines.slice(1) : lines;
    return rows.map(function (line, index) {
      return parseDelimitedRow(line, index);
    }).filter(Boolean);
  }

  function parseChartData(dataText, options) {
    var parsed = extractChartSeries(dataText);
    if (parsed.length) return parsed;
    if (options && options.fallbackToDefault === false) return [];
    return DEFAULT_CHART_ROWS;
  }

  function parseChartPalette(paletteText) {
    var colors = extractPaletteTokens(paletteText);
    return colors.length ? colors : DEFAULT_CHART_PALETTE;
  }

  function buildThemeChartPalette(theme) {
    var customPalette = extractPaletteTokens(theme && theme.chartPalette);
    if (customPalette.length) return customPalette;

    var primary = normalizeHexColor(theme && theme.primaryColor, DEFAULT_CHART_PALETTE[0]);
    var secondary = normalizeHexColor(theme && theme.secondaryColor, DEFAULT_CHART_PALETTE[1]);
    var text = normalizeHexColor(theme && theme.textColor, '#1a1a2e');
    var background = normalizeHexColor(theme && theme.bgColor, '#ffffff');

    return [
      primary,
      secondary,
      mixHexColors(primary, secondary, 0.45),
      mixHexColors(secondary, background, 0.22),
      mixHexColors(primary, text, 0.24),
      mixHexColors(text, background, 0.28)
    ];
  }

  function buildThemeChartContent(theme) {
    var background = normalizeHexColor(theme && theme.bgColor, '#ffffff');
    var text = normalizeHexColor(theme && theme.textColor, '#1a1a2e');
    return {
      backgroundColor: background,
      textColor: text,
      gridColor: mixHexColors(text, background, 0.76),
      borderColor: mixHexColors(text, background, 0.84)
    };
  }

  function formatValue(value, decimals) {
    var safeDecimals = decimals == null ? 0 : decimals;
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: safeDecimals,
      maximumFractionDigits: safeDecimals
    }).format(value);
  }

  function polarToCartesian(cx, cy, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
    return {
      x: cx + (radius * Math.cos(angleInRadians)),
      y: cy + (radius * Math.sin(angleInRadians))
    };
  }

  function describeDonutArc(cx, cy, radius, innerRadius, startAngle, endAngle) {
    var start = polarToCartesian(cx, cy, radius, endAngle);
    var end = polarToCartesian(cx, cy, radius, startAngle);
    var innerStart = polarToCartesian(cx, cy, innerRadius, endAngle);
    var innerEnd = polarToCartesian(cx, cy, innerRadius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      'M ' + start.x + ' ' + start.y,
      'A ' + radius + ' ' + radius + ' 0 ' + largeArcFlag + ' 0 ' + end.x + ' ' + end.y,
      'L ' + innerEnd.x + ' ' + innerEnd.y,
      'A ' + innerRadius + ' ' + innerRadius + ' 0 ' + largeArcFlag + ' 1 ' + innerStart.x + ' ' + innerStart.y,
      'Z'
    ].join(' ');
  }

  function buildChartModel(content, width, height, theme) {
    var chartTheme = theme || {};
    var type = ['bar', 'line', 'circle'].includes(content && content.chartType) ? content.chartType : 'bar';
    var palette = content && content.paletteText ? parseChartPalette(content.paletteText) : buildThemeChartPalette(chartTheme);
    var rawSeries = parseChartData(content && content.dataText);
    var series = rawSeries.map(function (item, index) {
      return Object.assign({}, item, {
        value: Math.max(0, parseNumber(item.value)),
        color: palette[index % palette.length]
      });
    });
    var themeChartContent = buildThemeChartContent(chartTheme);
    var model = {
      type: type,
      title: String((content && content.title) || '').trim(),
      backgroundColor: (content && content.backgroundColor) || chartTheme.bgColor || '#ffffff',
      textColor: (content && content.textColor) || chartTheme.textColor || '#1a1a2e',
      gridColor: (content && content.gridColor) || themeChartContent.gridColor || '#dbe3ef',
      borderColor: (content && content.borderColor) || themeChartContent.borderColor || '#e2e8f0',
      borderWidth: Math.max(0, parseNumber((content && content.borderWidth) || 1)),
      showLegend: !content || content.showLegend !== false,
      showGrid: !content || content.showGrid !== false,
      showValues: !content || content.showValues !== false,
      showArea: Boolean(content && content.showArea),
      strokeWidth: clamp(parseNumber((content && content.strokeWidth) || 3), 1, 8),
      innerRadius: clamp(parseNumber((content && content.innerRadius) || 62), 20, 85),
      xAxisLabel: String((content && content.xAxisLabel) || '').trim(),
      yAxisLabel: String((content && content.yAxisLabel) || '').trim(),
      width: width,
      height: height,
      series: series,
      total: series.reduce(function (sum, item) { return sum + item.value; }, 0)
    };

    if (type === 'circle') {
      var legendHeight = model.showLegend ? Math.min(74, 18 + (Math.ceil(series.length / 2) * 24)) : 0;
      var titleOffset = model.title ? 28 : 0;
      var radius = Math.max(28, Math.min(width * 0.28, (height - titleOffset - legendHeight) * 0.28));
      var center = {
        x: width / 2,
        y: ((height - legendHeight + titleOffset) / 2) + 8
      };
      var innerRadius = radius * (model.innerRadius / 100);
      var startAngle = 0;
      model.circle = {
        center: center,
        radius: radius,
        innerRadius: innerRadius,
        slices: series.map(function (item) {
          var ratio = model.total > 0 ? item.value / model.total : 0;
          var endAngle = startAngle + (ratio * 360);
          var slice = Object.assign({}, item, {
            percentage: ratio * 100,
            path: describeDonutArc(center.x, center.y, radius, innerRadius, startAngle, endAngle || startAngle + 0.01)
          });
          startAngle = endAngle;
          return slice;
        }),
        centerValue: formatValue(model.total, model.total % 1 === 0 ? 0 : 1)
      };
      return model;
    }

    var titleHeight = model.title ? 30 : 0;
    var legendBlockHeight = model.showLegend ? 34 : 0;
    var axisHeight = 34;
    var chartPadding = {
      top: titleHeight + 12,
      right: 16,
      bottom: axisHeight + legendBlockHeight,
      left: 42
    };
    var plotWidth = Math.max(40, width - chartPadding.left - chartPadding.right);
    var plotHeight = Math.max(40, height - chartPadding.top - chartPadding.bottom);
    var maxValue = Math.max(parseNumber(content && content.maxValue || 0), 1);
    series.forEach(function (item) {
      maxValue = Math.max(maxValue, item.value);
    });

    var tickCount = 4;
    var ticks = Array.from({ length: tickCount + 1 }, function (_, index) {
      var value = (maxValue / tickCount) * index;
      var y = chartPadding.top + plotHeight - ((value / maxValue) * plotHeight);
      return {
        value: value,
        label: formatValue(value, value % 1 === 0 ? 0 : 1),
        y: y
      };
    });

    if (type === 'bar') {
      var slotWidth = plotWidth / Math.max(series.length, 1);
      var barWidth = Math.min(58, slotWidth * 0.62);
      model.cartesian = {
        plotWidth: plotWidth,
        plotHeight: plotHeight,
        padding: chartPadding,
        maxValue: maxValue,
        ticks: ticks,
        bars: series.map(function (item, index) {
          var barHeight = (item.value / maxValue) * plotHeight;
          var x = chartPadding.left + (slotWidth * index) + ((slotWidth - barWidth) / 2);
          var y = chartPadding.top + plotHeight - barHeight;
          return Object.assign({}, item, {
            x: x,
            y: y,
            width: barWidth,
            height: barHeight,
            valueLabel: formatValue(item.value, item.value % 1 === 0 ? 0 : 1)
          });
        })
      };
      return model;
    }

    var stepX = series.length > 1 ? plotWidth / (series.length - 1) : plotWidth / 2;
    var points = series.map(function (item, index) {
      return Object.assign({}, item, {
        x: chartPadding.left + (series.length > 1 ? stepX * index : plotWidth / 2),
        y: chartPadding.top + plotHeight - ((item.value / maxValue) * plotHeight),
        valueLabel: formatValue(item.value, item.value % 1 === 0 ? 0 : 1)
      });
    });
    var linePath = points.map(function (point, index) {
      return (index === 0 ? 'M' : 'L') + ' ' + point.x + ' ' + point.y;
    }).join(' ');
    model.cartesian = {
      plotWidth: plotWidth,
      plotHeight: plotHeight,
      padding: chartPadding,
      maxValue: maxValue,
      ticks: ticks,
      points: points,
      linePath: linePath,
      areaPath: points.length
        ? linePath + ' L ' + points[points.length - 1].x + ' ' + (chartPadding.top + plotHeight) + ' L ' + points[0].x + ' ' + (chartPadding.top + plotHeight) + ' Z'
        : ''
    };
    return model;
  }
`}function M(oe="html"){return`
(function () {
  var exportMode = ${JSON.stringify(oe)};

${$()}

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
`}async function a(){return ce("html")}async function z(){return ce("iframe")}async function V(){return ce("scorm")}async function be(){return ce("pdf")}async function ce(oe="html"){var re,de,Ee;const m=p.value;if(!m)return;h.value="processing";const C=oe==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(oe==="pdf"&&!C){h.value="error",setTimeout(()=>h.value="",3e3);return}const se=oe==="pdf"?null:new ri,U=se?se.folder("assets"):null;let Z=0;async function pe(ge,X="media"){if((!ge||ge.startsWith("data:")||ge.startsWith("http://localhost")||ge.startsWith("blob:"))&&ge.startsWith("data:"))return ge;try{const A=await(await fetch(ge)).blob();if(oe==="pdf")return await j(A);let _="bin";const Ie=A.type;if(Ie.includes("image/png")?_="png":Ie.includes("image/jpeg")?_="jpg":Ie.includes("image/gif")?_="gif":Ie.includes("image/svg")?_="svg":Ie.includes("image/webp")?_="webp":Ie.includes("video/mp4")?_="mp4":Ie.includes("audio/mpeg")&&(_="mp3"),_==="bin"){const Fe=ge.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);Fe&&(_=Fe[1])}Z++;const Ae=`${X}_${Z}.${_}`;return U.file(Ae,A),`assets/${Ae}`}catch(P){return console.warn("Could not fetch asset:",ge,P),ge}}const ne=JSON.parse(JSON.stringify([...m.slides||[]])).sort((ge,X)=>(ge.order??0)-(X.order??0));if(Y.value)for(const ge of ne){ge.backgroundType==="image"&&ge.backgroundImage&&(ge.backgroundImage=await pe(ge.backgroundImage,"bg"));for(const X of ge.elements||[])X.type==="image"&&((re=X.content)!=null&&re.src)&&(X.content.src=await pe(X.content.src,"img")),X.type==="video"&&((de=X.content)!=null&&de.src)&&!X.content.src.includes("youtube")&&!X.content.src.includes("youtu.be")&&(X.content.src=await pe(X.content.src,"vid")),X.type==="audio"&&((Ee=X.content)!=null&&Ee.src)&&(X.content.src=await pe(X.content.src,"aud"))}const le=q(L.value||m.name||"presentation"),we={name:m.name,theme:m.theme||{},settings:m.settings||{},slides:ne},S=JSON.stringify(we).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),D=ve(m.theme,m.settings,oe),O=M(oe),J=`<script id="lf-data" type="application/json">${S}<\/script>`,je=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${le}</title>
${oe==="pdf"?`<style>${D}</style>`:'<link rel="stylesheet" href="style.css">'}
</head>
<body class="${oe==="iframe"?"is-iframe":oe==="pdf"?"is-pdf":""}">
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
${J}
${oe!=="pdf"?'<script src="script.js"><\/script>':`<script>${O}<\/script>`}
</body>
</html>`;if(oe==="pdf"){C.document.open(),C.document.write(je),C.document.close(),h.value="success",setTimeout(()=>h.value="",3e3);return}if(oe==="scorm"){const ge=(le||"SCORM Export").replace(/[&<>'"]/g,""),X=`<?xml version="1.0" standalone="no" ?>
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
      <title>${ge}</title>
      <item identifier="item_1" identifierref="resource_1">
        <title>${ge}</title>
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
</manifest>`;se.file("imsmanifest.xml",X)}se.file("index.html",je),se.file("style.css",D),se.file("script.js",O);const Be=await se.generateAsync({type:"blob"}),Oe=URL.createObjectURL(Be),Ve=document.createElement("a");Ve.href=Oe,Ve.download=`${le}.zip`,Ve.click(),URL.revokeObjectURL(Oe),h.value="success",setTimeout(()=>h.value="",3e3)}return(oe,m)=>(l(),ot(Cl,{title:"Export Project",size:"md",onClose:m[14]||(m[14]=C=>E(d).showExportModal=!1)},{footer:vt(()=>[e("button",{class:"btn btn-secondary",onClick:m[13]||(m[13]=C=>E(d).showExportModal=!1)},"Close")]),default:vt(()=>{var C,se,U,Z,pe;return[E(c).user?(l(),i(te,{key:1},[e("div",Db,[e("button",{class:W(["tab-btn",b.value==="json"&&"active"]),onClick:m[2]||(m[2]=ne=>b.value="json")},"JSON",2),e("button",{class:W(["tab-btn",b.value==="html"&&"active"]),onClick:m[3]||(m[3]=ne=>b.value="html")},"HTML",2),e("button",{class:W(["tab-btn",b.value==="iframe"&&"active"]),onClick:m[4]||(m[4]=ne=>b.value="iframe")},"Iframe",2),e("button",{class:W(["tab-btn",b.value==="pdf"&&"active"]),onClick:m[5]||(m[5]=ne=>b.value="pdf")},"PDF",2),e("button",{class:W(["tab-btn",b.value==="scorm"&&"active"]),onClick:m[6]||(m[6]=ne=>b.value="scorm")},"SCORM",2)]),e("div",Rb,[b.value==="json"?(l(),i(te,{key:0},[m[25]||(m[25]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",_b,[e("div",qb,[m[20]||(m[20]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),me(e("input",{type:"text","onUpdate:modelValue":m[7]||(m[7]=ne=>L.value=ne),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Se,L.value]])])]),e("div",Ob,[e("div",Fb,[m[21]||(m[21]=e("span",null,"Project",-1)),e("strong",null,k((C=p.value)==null?void 0:C.name),1)]),e("div",Vb,[m[22]||(m[22]=e("span",null,"Slides",-1)),e("strong",null,k(((U=(se=p.value)==null?void 0:se.slides)==null?void 0:U.length)||0),1)]),e("div",Hb,[m[23]||(m[23]=e("span",null,"Elements",-1)),e("strong",null,k(((pe=(Z=p.value)==null?void 0:Z.slides)==null?void 0:pe.reduce((ne,le)=>{var we;return ne+(((we=le.elements)==null?void 0:we.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:ie},[...m[24]||(m[24]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Download JSON ",-1)])])],64)):b.value==="html"?(l(),i(te,{key:1},[m[29]||(m[29]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",Ub,[e("div",Wb,[m[26]||(m[26]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),me(e("input",{type:"text","onUpdate:modelValue":m[8]||(m[8]=ne=>L.value=ne),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Se,L.value]])]),e("label",Gb,[me(e("input",{type:"checkbox","onUpdate:modelValue":m[9]||(m[9]=ne=>Y.value=ne)},null,512),[[Rt,Y.value]]),m[27]||(m[27]=ee(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),m[30]||(m[30]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:a},[...m[28]||(m[28]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Download HTML ",-1)])])],64)):b.value==="iframe"?(l(),i(te,{key:2},[m[34]||(m[34]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Yb,[e("div",Qb,[m[31]||(m[31]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),me(e("input",{type:"text","onUpdate:modelValue":m[10]||(m[10]=ne=>L.value=ne),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Se,L.value]])]),e("label",Jb,[me(e("input",{type:"checkbox","onUpdate:modelValue":m[11]||(m[11]=ne=>Y.value=ne)},null,512),[[Rt,Y.value]]),m[32]||(m[32]=ee(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:z},[...m[33]||(m[33]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Download Iframe Zip ",-1)])])],64)):b.value==="pdf"?(l(),i(te,{key:3},[m[36]||(m[36]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),m[37]||(m[37]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:be},[...m[35]||(m[35]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Generate PDF ",-1)])])],64)):b.value==="scorm"?(l(),i(te,{key:4},[m[40]||(m[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Xb,[e("div",Kb,[m[38]||(m[38]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),me(e("input",{type:"text","onUpdate:modelValue":m[12]||(m[12]=ne=>L.value=ne),class:"inp",placeholder:"My Course",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Se,L.value]])])]),e("div",{style:{display:"flex","justify-content":"flex-end"}},[e("button",{class:"btn btn-primary export-btn",onClick:V},[...m[39]||(m[39]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Download SCORM ",-1)])])])],64)):F("",!0),pt(Dt,{name:"fade"},{default:vt(()=>[h.value==="processing"?(l(),i("div",Zb,[...m[41]||(m[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),ee(" Generating package... Please wait. ",-1)])])):h.value==="success"?(l(),i("div",eh,[...m[42]||(m[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),ee(" Export successful! Check your downloads folder. ",-1)])])):F("",!0)]),_:1})])],64)):(l(),i("div",zb,[(l(),i("svg",Lb,[...m[15]||(m[15]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),m[18]||(m[18]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),m[19]||(m[19]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",jb,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:m[0]||(m[0]=ne=>E(c).loginWithGoogle())},[...m[16]||(m[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),ee(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:m[1]||(m[1]=ne=>E(c).loginWithMicrosoft())},[...m[17]||(m[17]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),ee(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},oh=Ze(th,[["__scopeId","data-v-b55b044f"]]),nh={key:0,class:"editor-view"},lh={class:"editor-topbar"},ih={class:"topbar-left"},ah={class:"project-name-wrap"},rh=["value"],sh={class:"save-label"},dh={class:"topbar-center"},uh={key:0,class:"slide-position"},ch={class:"topbar-right"},ph={class:"editor-body"},vh={class:"authoring-rail"},fh=["onClick","data-tooltip"],mh={key:0,class:"rail-icon"},gh={key:1,class:"rail-icon"},bh={key:2,class:"rail-icon"},hh={key:3,class:"rail-icon"},yh={key:4,class:"rail-icon"},xh={key:5,class:"rail-icon"},wh={key:6,class:"rail-icon"},kh={key:7,class:"rail-icon"},Ch={key:8,class:"rail-icon"},Sh={key:9,class:"rail-icon"},$h={class:"right-panel"},Ih={class:"panel-tabs"},Eh=["onClick","data-tooltip"],Ah={class:"tab-icon"},Th={class:"tab-label"},Mh={class:"panel-content"},Ph={key:1,class:"editor-not-found"},Bh={__name:"EditorView",setup(x){const d=zl(),r=Nl(),c=rt(),p=st(),b=El(),h=T(()=>d.params.id),L=T(()=>p.getProject(h.value)),Y=T(()=>_t(L.value)),ie=T(()=>{var P;return[...((P=L.value)==null?void 0:P.slides)||[]].sort((A,_)=>A.order-_.order)}),q=R(null),j=R(!1),ve=R("deck"),{aiStore:$,showAIModal:M,aiMode:a,aiTopic:z,aiContext:V,aiProjectName:be,aiSlideCount:ce,aiQuestionCount:oe,aiDifficulty:m,aiQuestionType:C,aiCreationError:se,aiSubmitting:U,aiProjectNamePlaceholder:Z,aiPrimaryActionLabel:pe,openAICreationModal:ne,createAIProject:le}=jl({onRequireAuth:()=>r.push({name:"dashboard"})});let we=!1,S=null;nt(()=>L.value,P=>{if(P){if(we){we=!1;return}S&&clearTimeout(S),S=setTimeout(()=>{c.pushHistory(P)},600)}},{deep:!0}),nt(()=>b.isAuthReady,async P=>{var A;if(P){if((A=b.user)!=null&&A.uid&&await p.ensureRemoteProjectsLoaded(),!L.value){r.push({name:"dashboard"});return}c.setProject(h.value),ie.value.length>0&&c.setCurrentSlide(ie.value[0].id),c.pushHistory(L.value)}},{immediate:!0});const D=T(()=>{const P=L.value;return P?`Saved ${new Date(P.updatedAt).toLocaleTimeString()}`:""}),O=T(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});si({undo:()=>{if(c.canUndo()){const P=c.undo();P&&(we=!0,p.updateProject(h.value,P))}},redo:()=>{if(c.canRedo()){const P=c.redo();P&&(we=!0,p.updateProject(h.value,P))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var A,_,Ie,Ae;const P=(Ae=(Ie=(_=(A=L.value)==null?void 0:A.slides)==null?void 0:_.find(Fe=>Fe.id===c.currentSlideId))==null?void 0:Ie.elements)==null?void 0:Ae.find(Fe=>Fe.id===c.selectedElementId);P&&c.setClipboard(P)},paste:()=>{if(c.clipboard&&c.currentSlideId){const P=c.clipboard;p.addElement(c.projectId,c.currentSlideId,P.type,{...P,x:P.x+20,y:P.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const P=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);P&&c.selectElement(P.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(P,A)=>{var Ie,Ae,Fe,y;if(!c.selectedElementId)return;const _=(y=(Fe=(Ae=(Ie=L.value)==null?void 0:Ie.slides)==null?void 0:Ae.find($e=>$e.id===c.currentSlideId))==null?void 0:Fe.elements)==null?void 0:y.find($e=>$e.id===c.selectedElementId);_&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:_.x+P,y:_.y+A})},selectAll:()=>{var A,_,Ie;(((Ie=(_=(A=L.value)==null?void 0:A.slides)==null?void 0:_.find(Ae=>Ae.id===c.currentSlideId))==null?void 0:Ie.elements)||[]).forEach((Ae,Fe)=>c.selectElement(Ae.id,Fe>0))}});function J(){r.push({name:"dashboard"})}function xe(){r.push({name:"preview",params:{id:h.value},query:{from:"editor"}})}function je(P="deck"){ve.value=P,j.value=!0}function Be(){j.value=!1,ne(ve.value)}function Oe(P,A="Image"){if(!c.projectId||!c.currentSlideId||!P)return;const _=new Image;_.onload=()=>{const Fe=Math.min(420/_.width,280/_.height,1),y=Math.max(120,Math.round(_.width*Fe)),$e=Math.max(80,Math.round(_.height*Fe)),He=Math.max(24,Math.round((Y.value.width-y)/2)),Ue=Math.max(24,Math.round((Y.value.height-$e)/2)),Je=p.addElement(c.projectId,c.currentSlideId,"image",{x:He,y:Ue,width:y,height:$e,content:{src:P,alt:A,objectFit:"cover"}});Je&&(c.selectElement(Je.id),c.setRightPanel("properties"),c.setActiveTool("select"))},_.src=P}function Ve(P){const[A]=Array.from(P.target.files||[]);if(!A||!A.type.startsWith("image/"))return;const _=new FileReader;_.onload=()=>Oe(String(_.result||""),A.name),_.readAsDataURL(A),P.target.value=""}function re(){var P;(P=q.value)==null||P.click()}const de=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function Ee(P){if(P==="text"){c.setActiveTool("text");return}if(P==="blocks"){c.toggleSlidePanel("blocks");return}if(P==="resources"){c.setActiveTool("image");return}if(P==="interactive-elements"){c.setActiveTool("hotspot");return}if(P==="interactive-questions"){c.setActiveTool("quiz");return}if(P==="widgets"){c.setActiveTool("shape");return}if(P==="insert"){re();return}if(P==="style"){c.setRightPanel("properties");return}if(P==="background"){c.clearSelection(),c.setRightPanel("properties");return}P==="pages"&&c.toggleSlidePanel("slides")}function ge(P){return P==="text"?["text","heading"].includes(c.activeTool):P==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":P==="resources"?c.activeTool==="image":P==="interactive-elements"?["hotspot","button"].includes(c.activeTool):P==="interactive-questions"?c.activeTool==="quiz":P==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):P==="insert"?!1:P==="style"||P==="background"?c.rightPanelTab==="properties":P==="pages"?c.showSlidePanel:!1}function X(){_l({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return nt(()=>L.value,P=>{P&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{X()},100)},{immediate:!0}),(P,A)=>L.value?(l(),i("div",nh,[e("input",{ref_key:"imageInputRef",ref:q,type:"file",accept:"image/*",class:"sr-only",onChange:Ve},null,544),e("header",lh,[e("div",ih,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:J,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...A[14]||(A[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),ee(" Dashboard ",-1)])]),e("div",ah,[e("input",{value:L.value.name,class:"project-name-input",onChange:A[0]||(A[0]=_=>E(p).updateProject(h.value,{name:_.target.value}))},null,40,rh)]),e("span",sh,k(D.value),1)]),e("div",dh,[E(c).currentSlideId?(l(),i("span",uh," Slide "+k(ie.value.findIndex(_=>_.id===E(c).currentSlideId)+1)+" of "+k(ie.value.length),1)):F("",!0)]),e("div",ch,[e("button",{class:"btn btn-ghost btn-sm",onClick:X,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...A[15]||(A[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),ee(" Help ",-1)])]),e("button",{class:W(["btn btn-ghost btn-sm",E(c).showAIPanel&&"active-btn"]),onClick:A[1]||(A[1]=_=>{E(c).showAIPanel=!E(c).showAIPanel,E(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...A[16]||(A[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),ee(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:A[2]||(A[2]=_=>{E(c).showThemeManager=!E(c).showThemeManager,E(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...A[17]||(A[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),ee(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:xe,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...A[18]||(A[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),ee(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:A[3]||(A[3]=_=>E(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...A[19]||(A[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),ee(" Export ",-1)])])])]),pt(Lf,{onOpenAiProject:je}),e("div",ph,[e("aside",vh,[(l(),i(te,null,fe(de,_=>e("button",{key:_.id,class:W(["rail-option",ge(_.id)&&"active"]),onClick:Ie=>Ee(_.id),"data-tooltip":_.label,"data-tooltip-position":"right"},[_.id==="text"?(l(),i("span",mh,"T")):_.id==="blocks"?(l(),i("span",gh,[...A[20]||(A[20]=[it('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):_.id==="resources"?(l(),i("span",bh,[...A[21]||(A[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):_.id==="interactive-elements"?(l(),i("span",hh,[...A[22]||(A[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):_.id==="interactive-questions"?(l(),i("span",yh,[...A[23]||(A[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):_.id==="widgets"?(l(),i("span",xh,[...A[24]||(A[24]=[it('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):_.id==="insert"?(l(),i("span",wh,[...A[25]||(A[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):_.id==="style"?(l(),i("span",kh,[...A[26]||(A[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):_.id==="background"?(l(),i("span",Ch,[...A[27]||(A[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):_.id==="pages"?(l(),i("span",Sh,[...A[28]||(A[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):F("",!0),ee(" "+k(_.label),1)],10,fh)),64))]),pt(Dt,{name:"side-panel-slide"},{default:vt(()=>[E(c).showSlidePanel&&E(c).leftPanelTab==="slides"?(l(),ot(Ci,{key:0})):F("",!0)]),_:1}),pt(Dt,{name:"side-panel-slide"},{default:vt(()=>[E(c).showSlidePanel&&E(c).leftPanelTab==="blocks"?(l(),ot(Xi,{key:0})):F("",!0)]),_:1}),pt(R1),e("aside",$h,[e("div",Ih,[(l(),i(te,null,fe([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],_=>e("button",{key:_.id,class:W(["panel-tab",E(c).rightPanelTab===_.id&&"active"]),onClick:Ie=>E(c).setRightPanel(_.id),"data-tooltip":`Open ${_.label}`,"data-tooltip-position":"bottom"},[e("span",Ah,k(_.icon),1),e("span",Th,k(_.label),1)],10,Eh)),64))]),e("div",Mh,[pt(Dt,{name:"editor-panel-switch",mode:"out-in"},{default:vt(()=>[(l(),i("div",{key:O.value,class:"panel-content-view"},[E(c).rightPanelTab==="properties"?(l(),ot(Jv,{key:0})):E(c).rightPanelTab==="layers"?(l(),ot(ha,{key:1})):E(c).rightPanelTab==="ai"?(l(),ot(ob,{key:2})):E(c).rightPanelTab==="theme"?(l(),ot(Nb,{key:3})):F("",!0)]))]),_:1})])])]),E(c).showExportModal?(l(),ot(oh,{key:0})):F("",!0),j.value?(l(),ot(Dl,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:A[4]||(A[4]=_=>j.value=!1),onConfirm:Be})):F("",!0),E(M)?(l(),ot(Rl,{key:2,mode:E(a),topic:E(z),context:E(V),"project-name":E(be),"slide-count":E(ce),"question-count":E(oe),difficulty:E(m),"question-type":E(C),"project-name-placeholder":E(Z),"primary-action-label":E(pe),"creation-error":E(se),"is-submitting":E(U),"is-generating":E($).isGenerating,"has-api-key":!!E($).apiKey,onClose:A[5]||(A[5]=_=>M.value=!1),onCreate:E(le),"onUpdate:mode":A[6]||(A[6]=_=>a.value=_),"onUpdate:topic":A[7]||(A[7]=_=>z.value=_),"onUpdate:context":A[8]||(A[8]=_=>V.value=_),"onUpdate:projectName":A[9]||(A[9]=_=>be.value=_),"onUpdate:slideCount":A[10]||(A[10]=_=>ce.value=_),"onUpdate:questionCount":A[11]||(A[11]=_=>oe.value=_),"onUpdate:difficulty":A[12]||(A[12]=_=>m.value=_),"onUpdate:questionType":A[13]||(A[13]=_=>C.value=_)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):F("",!0)])):(l(),i("div",Ph,[A[29]||(A[29]=e("h2",null,"Project not found",-1)),A[30]||(A[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:J},"Go to Dashboard")]))}},qh=Ze(Bh,[["__scopeId","data-v-902e6311"]]);export{qh as default};
