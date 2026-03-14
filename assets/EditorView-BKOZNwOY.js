import{O as yl,R as hl,v as l,F as i,B as e,C as k,H as oe,I as ve,E as Le,D as Q,u as I,S as xe,Q as it,G as R,P as te,q as ot,U as xl,f as A,r as j,K as pe,M as $e,x as pt,L as Dt,w as nt,n as wl,i as El,V as Al,y as Et,T as _t,N as jt,z as Ml,p as Pl,J as gl}from"./vue-core-C8eg5Zer.js";import{u as Tl,d as Bl}from"./vue-ecosystem-UNJmhyuE.js";import{u as st,M as kl,c as Nl,a as zl,C as Ll,A as jl,b as _l}from"./ConfirmActionModal-DUtPLdlc.js";import{u as rt,b as Dl,g as qt,C as Yt,c as ql,n as Rl,p as Ol,s as Fl,m as Cl,f as Sl,d as $l,e as Vl,h as Jt,B as Ul,i as Wl,j as Gl,k as bl,a as Il}from"./projectStore-93bah2MB.js";import{_ as Ze}from"./index-DblsQ6lV.js";import{P as Hl,S as Yl,C as Jl,a as Ql,M as Xl,_ as Kl,b as Zl,c as ei,F as ti,A as oi,T as ni,d as li}from"./ProgressElement-DUKvEE34.js";import{J as ii}from"./jszip-529iNPX7.js";function ai(E){function r(d){var f,U,se,H,V,be,z,M,a,N,_,ue,Y,g,O,W,Ie;const p=d.ctrlKey||d.metaKey,c=d.key.toLowerCase(),h=d.target.tagName.toLowerCase(),y=h==="input"||h==="textarea"||d.target.isContentEditable;y&&p&&["c","v","x","a","z","y"].includes(c)||(p&&c==="z"&&!d.shiftKey?(d.preventDefault(),(f=E.undo)==null||f.call(E)):p&&(c==="y"||c==="z"&&d.shiftKey)?(d.preventDefault(),(U=E.redo)==null||U.call(E)):p&&c==="c"?(d.preventDefault(),(se=E.copy)==null||se.call(E)):p&&c==="v"?(d.preventDefault(),(H=E.paste)==null||H.call(E)):p&&c==="x"?(d.preventDefault(),(V=E.cut)==null||V.call(E)):p&&c==="d"?(d.preventDefault(),(be=E.duplicate)==null||be.call(E)):p&&c==="a"?(d.preventDefault(),(z=E.selectAll)==null||z.call(E)):c==="delete"||c==="backspace"?y||(d.preventDefault(),(M=E.delete)==null||M.call(E)):c==="escape"?(a=E.escape)==null||a.call(E):p&&c==="g"?(d.preventDefault(),(N=E.toggleGrid)==null||N.call(E)):p&&c==="="||p&&c==="+"?(d.preventDefault(),(_=E.zoomIn)==null||_.call(E)):p&&c==="-"?(d.preventDefault(),(ue=E.zoomOut)==null||ue.call(E)):p&&c==="0"?(d.preventDefault(),(Y=E.zoomReset)==null||Y.call(E)):c==="arrowleft"?(g=E.nudge)==null||g.call(E,-1,0):c==="arrowright"?(O=E.nudge)==null||O.call(E,1,0):c==="arrowup"?(W=E.nudge)==null||W.call(E,0,-1):c==="arrowdown"&&((Ie=E.nudge)==null||Ie.call(E,0,1)))}yl(()=>window.addEventListener("keydown",r)),hl(()=>window.removeEventListener("keydown",r))}const si={class:"slide-panel"},ri={class:"slide-panel-header"},di={class:"slide-count"},ui={class:"slides-list"},ci=["onClick","onContextmenu","onDragstart","onDrop"],pi={class:"slide-number"},vi=["viewBox"],fi=["x","y","width","height","fill"],mi=["d","stroke"],gi=["d","fill"],bi={class:"slide-footer"},yi={class:"slide-title"},hi=["onClick"],xi={__name:"SlidePanel",setup(E){const r=st(),d=rt(),p=A(()=>d.getProject(r.projectId)),c=A(()=>qt(p.value)),h=A(()=>{var F,Z;return((Z=(F=p.value)==null?void 0:F.slides)==null?void 0:Z.slice().sort((ne,fe)=>ne.order-fe.order))||[]}),y=j({show:!1,x:0,y:0,slideId:null});function f(F){r.setCurrentSlide(F)}function U(){const F=h.value.findIndex(ne=>ne.id===r.currentSlideId),Z=d.addSlide(r.projectId,F);Z&&r.setCurrentSlide(Z.id)}function se(F){var fe,ie;const Z=h.value.findIndex(Ee=>Ee.id===F);d.deleteSlide(r.projectId,F);const ne=((fe=p.value)==null?void 0:fe.slides)||[];if(ne.length>0){const Ee=ne.slice().sort((L,q)=>L.order-q.order),C=Math.min(Z,Ee.length-1);r.setCurrentSlide((ie=Ee[C])==null?void 0:ie.id)}}function H(F,Z){F.preventDefault(),y.value={show:!0,x:F.clientX,y:F.clientY,slideId:Z},setTimeout(()=>window.addEventListener("click",V,{once:!0}),0)}function V(){y.value.show=!1}function be(){const F=d.duplicateSlide(r.projectId,y.value.slideId);F&&r.setCurrentSlide(F.id),V()}function z(){se(y.value.slideId),V()}function M(F,Z){F.stopPropagation(),se(Z)}function a(){const F=h.value.findIndex(Z=>Z.id===y.value.slideId);F>0&&d.reorderSlides(r.projectId,F,F-1),V()}function N(){const F=h.value.findIndex(Z=>Z.id===y.value.slideId);F<h.value.length-1&&d.reorderSlides(r.projectId,F,F+1),V()}let _=-1;function ue(F,Z){_=Z,F.dataTransfer.effectAllowed="move"}function Y(F,Z){F.preventDefault(),_!==-1&&_!==Z&&d.reorderSlides(r.projectId,_,Z),_=-1}function g(F){return F.backgroundType==="gradient"&&F.backgroundGradient?{background:F.backgroundGradient}:F.backgroundType==="image"&&F.backgroundImage?{backgroundImage:`url(${F.backgroundImage})`,backgroundSize:"cover"}:{background:F.background||"#fff"}}function O(F){return{left:F.x/c.value.width*100+"%",top:F.y/c.value.height*100+"%",width:F.width/c.value.width*100+"%",height:F.height/c.value.height*100+"%"}}function W(F){var Z,ne;return{background:F.type==="shape"?(Z=F.content)==null?void 0:Z.fillColor:F.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:F.type==="shape"&&((ne=F.content)==null?void 0:ne.shapeType)==="circle"?"50%":void 0}}function Ie(F){var Z;return Dl(F.content||{},F.width||420,F.height||280,((Z=p.value)==null?void 0:Z.theme)||{})}return(F,Z)=>(l(),i("div",si,[e("div",ri,[Z[2]||(Z[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",di,k(h.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:U,"data-tooltip":"Add slide","aria-label":"Add slide"},[...Z[1]||(Z[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",ui,[(l(!0),i(oe,null,ve(h.value,(ne,fe)=>(l(),i("div",{key:ne.id,class:Q(["slide-thumb-item",I(r).currentSlideId===ne.id&&"active"]),draggable:"true",onClick:ie=>f(ne.id),onContextmenu:ie=>H(ie,ne.id),onDragstart:ie=>ue(ie,fe),onDragover:Z[0]||(Z[0]=Le(()=>{},["prevent"])),onDrop:ie=>Y(ie,fe)},[e("div",pi,k(fe+1),1),e("div",{class:"slide-thumb",style:xe(g(ne))},[(l(!0),i(oe,null,ve(ne.elements.slice(0,6),ie=>{var Ee;return l(),i("div",{key:ie.id,class:"mini-element-frame",style:xe(O(ie))},[ie.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${ie.width||420} ${ie.height||280}`,preserveAspectRatio:"none"},[Ie(ie).type==="bar"?(l(!0),i(oe,{key:0},ve(Ie(ie).cartesian.bars,C=>(l(),i("rect",{key:`mini-bar-${C.id}`,x:C.x,y:C.y,width:C.width,height:C.height,fill:C.color,rx:"6"},null,8,fi))),128)):Ie(ie).type==="line"?(l(),i("path",{key:1,d:Ie(ie).cartesian.linePath,stroke:((Ee=Ie(ie).cartesian.points[0])==null?void 0:Ee.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,mi)):(l(!0),i(oe,{key:2},ve(Ie(ie).circle.slices,C=>(l(),i("path",{key:`mini-slice-${C.id}`,d:C.path,fill:C.color},null,8,gi))),128))],8,vi)):(l(),i("div",{key:1,class:"mini-element",style:xe(W(ie))},null,4))],4)}),128))],4),e("div",bi,[e("div",yi,k(ne.title||`Slide ${fe+1}`),1),h.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:ie=>M(ie,ne.id)},[...Z[3]||(Z[3]=[it('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,hi)):R("",!0)])],42,ci))),128))]),e("button",{class:"add-slide-bottom",onClick:U},[...Z[4]||(Z[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),te(" Add Slide ",-1)])]),(l(),ot(xl,{to:"body"},[y.value.show?(l(),i("div",{key:0,class:"context-menu",style:xe({left:y.value.x+"px",top:y.value.y+"px"})},[e("button",{class:"ctx-item",onClick:be},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:N},"Move Down"),Z[5]||(Z[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:z},"Delete Slide")],4)):R("",!0)]))]))}},wi=Ze(xi,[["__scopeId","data-v-30eea542"]]),ki={class:"blocks-panel"},Ci={class:"blocks-panel-header"},Si={class:"blocks-toolbar"},$i={class:"blocks-categories"},Ii=["onClick"],Ei={class:"blocks-panel-body"},Ai={class:"blocks-save-card"},Mi=["disabled"],Pi={class:"blocks-list"},Ti=["onDragstart"],Bi={class:"block-thumb-stage"},Ni={class:"block-card-body"},zi={class:"block-card-head"},Li={class:"block-name"},ji={class:"block-meta"},_i={key:0},Di={key:1},qi=["onClick"],Ri={class:"block-description"},Oi={key:0,class:"block-binding-note"},Fi={class:"block-tags"},Vi=["onClick"],Ui={class:"binding-modal-body"},Wi={class:"binding-modal-intro"},Gi=["for"],Hi=["id","onUpdate:modelValue"],Yi={__name:"BlocksPanel",setup(E){const r=st(),d=rt(),p=j(""),c=j("all"),h=j(""),y=j("Custom"),f=j(!1),U=j(null),se=j({}),H=A(()=>d.getProject(r.projectId)),V=A(()=>{var C,L;return(L=(C=H.value)==null?void 0:C.slides)==null?void 0:L.find(q=>q.id===r.currentSlideId)}),be=A(()=>d.getContentBlocks(r.projectId)),z=A(()=>{const C=new Set(["all"]);return be.value.forEach(L=>C.add(L.category||"Custom")),Array.from(C)}),M=A(()=>{var L;const C=new Set(r.selectedElementIds);return(((L=V.value)==null?void 0:L.elements)||[]).filter(q=>C.has(q.id))}),a=A(()=>{var C;return Array.isArray((C=U.value)==null?void 0:C.bindings)?U.value.bindings:[]}),N=A(()=>{const C=p.value.trim().toLowerCase();return be.value.filter(L=>c.value==="all"||(L.category||"Custom")===c.value?C?[L.name,L.description,L.category,...L.tags||[]].join(" ").toLowerCase().includes(C):!0:!1)});function _(C){const L=Array.isArray(C==null?void 0:C.elements)?C.elements:[];if(!L.length)return{minX:0,minY:0,width:1,height:1};const q=Math.min(...L.map(Te=>Number(Te.x||0))),K=Math.min(...L.map(Te=>Number(Te.y||0))),ye=Math.max(...L.map(Te=>Number(Te.x||0)+Number(Te.width||0))),Re=Math.max(...L.map(Te=>Number(Te.y||0)+Number(Te.height||0)));return{minX:q,minY:K,width:Math.max(1,ye-q),height:Math.max(1,Re-K)}}function ue(C,L){const q=_(C);return{left:`${(Number(L.x||0)-q.minX)/q.width*100}%`,top:`${(Number(L.y||0)-q.minY)/q.height*100}%`,width:`${Number(L.width||0)/q.width*100}%`,height:`${Number(L.height||0)/q.height*100}%`}}function Y(C){var L,q,K,ye,Re,Te,Oe;return C.type==="shape"?{background:((L=C.content)==null?void 0:L.fillColor)||"#cbd5e1",borderRadius:((q=C.content)==null?void 0:q.shapeType)==="circle"?"50%":`${Number(((K=C.content)==null?void 0:K.borderRadius)||10)}px`,border:`${Math.max(0,Number(((ye=C.content)==null?void 0:ye.borderWidth)||0))}px solid ${((Re=C.content)==null?void 0:Re.borderColor)||"transparent"}`}:C.type==="button"?{background:((Te=C.content)==null?void 0:Te.bgColor)||"#6c47ff",borderRadius:`${Number(((Oe=C.content)==null?void 0:Oe.borderRadius)||10)}px`}:C.type==="image"||C.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:C.type==="text"||C.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function g(C,L){const q=C.type==="heading"?2:3,K=Math.max(18,100/(q+1.25));return{width:`${L===q-1?72:100}%`,height:`${C.type==="heading"?K:K-2}%`}}function O(C){C.length&&(r.setSelection(C.map(L=>L.id)),r.focusPropertiesSection("content"),r.setActiveTool("select"))}function W(C){return Array.isArray(C==null?void 0:C.bindings)&&C.bindings.length>0}function Ie(){f.value=!1,U.value=null,se.value={}}function F(C,L=null){const q=d.insertContentBlock(r.projectId,r.currentSlideId,C.id,L?{bindingValues:L}:{});O(q)}function Z(C){if(!W(C)){F(C);return}U.value=C,se.value=Object.fromEntries(C.bindings.map(L=>[L.id,L.defaultValue||""])),f.value=!0}function ne(){U.value&&(F(U.value,{...se.value}),Ie())}function fe(){var q,K;const C=h.value.trim();if(!C||!M.value.length)return;d.saveSelectionAsContentBlock(r.projectId,r.currentSlideId,M.value.map(ye=>ye.id),{name:C,category:y.value.trim()||"Custom",accent:((K=(q=H.value)==null?void 0:q.theme)==null?void 0:K.primaryColor)||"#6c47ff"})&&(h.value="",c.value="Custom")}function ie(C){d.deleteContentBlock(r.projectId,C)}function Ee(C,L){C.dataTransfer&&(C.dataTransfer.effectAllowed="copy",C.dataTransfer.setData(Yt,JSON.stringify({id:L.id})),C.dataTransfer.setData("text/plain",L.name))}return(C,L)=>(l(),i("div",ki,[e("div",Ci,[L[5]||(L[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:L[0]||(L[0]=q=>I(r).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...L[4]||(L[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",Si,[pe(e("input",{"onUpdate:modelValue":L[1]||(L[1]=q=>p.value=q),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[$e,p.value]]),e("div",$i,[(l(!0),i(oe,null,ve(z.value,q=>(l(),i("button",{key:q,type:"button",class:Q(["blocks-category-chip",c.value===q&&"active"]),onClick:K=>c.value=q},k(q==="all"?"All":q),11,Ii))),128))])]),e("div",Ei,[e("div",Ai,[L[6]||(L[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),L[7]||(L[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),pe(e("input",{"onUpdate:modelValue":L[2]||(L[2]=q=>h.value=q),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[$e,h.value]]),pe(e("input",{"onUpdate:modelValue":L[3]||(L[3]=q=>y.value=q),class:"input",placeholder:"Category"},null,512),[[$e,y.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!M.value.length||!h.value.trim(),onClick:fe}," Save "+k(M.value.length?`${M.value.length} item${M.value.length>1?"s":""}`:"selection")+" as block ",9,Mi)]),e("div",Pi,[(l(!0),i(oe,null,ve(N.value,q=>(l(),i("div",{key:q.id,class:"block-card",draggable:"true",onDragstart:K=>Ee(K,q)},[e("div",{class:"block-thumb",style:xe({"--block-accent":q.accent||"#6c47ff"})},[e("div",Bi,[(l(!0),i(oe,null,ve(q.elements,K=>(l(),i("div",{key:`${q.id}-${K.type}-${K.x}-${K.y}`,class:"block-thumb-frame",style:xe(ue(q,K))},[["text","heading"].includes(K.type)?(l(),i("div",{key:0,class:Q(["thumb-text",K.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(oe,null,ve(K.type==="heading"?2:3,ye=>(l(),i("span",{key:`${q.id}-${K.type}-${K.x}-${K.y}-${ye}`,class:"thumb-text-line",style:xe(g(K,ye-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:xe(Y(K))},null,4))],4))),128))])],4),e("div",Ni,[e("div",zi,[e("div",null,[e("div",Li,k(q.name),1),e("div",ji,[te(k(q.category),1),q.scope==="custom"?(l(),i("span",_i," · Custom")):R("",!0),W(q)?(l(),i("span",Di," · "+k(q.bindings.length)+" field"+k(q.bindings.length>1?"s":""),1)):R("",!0)])]),q.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:K=>ie(q.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...L[8]||(L[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,qi)):R("",!0)]),e("p",Ri,k(q.description||"Reusable layout block"),1),W(q)?(l(),i("div",Oi,"Editable placeholders included")):R("",!0),e("div",Fi,[(l(!0),i(oe,null,ve(q.tags||[],K=>(l(),i("span",{key:`${q.id}-${K}`,class:"block-tag"},"#"+k(K),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:K=>Z(q)},k(W(q)?"Insert with Fields":"Insert Block"),9,Vi)])],40,Ti))),128))])]),f.value?(l(),ot(kl,{key:0,title:"Fill Template Fields",size:"md",onClose:Ie},{footer:pt(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:Ie},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:ne},"Insert Block")]),default:pt(()=>{var q;return[e("div",Ui,[e("p",Wi,[L[9]||(L[9]=te(" Customize the placeholder text before inserting ",-1)),e("strong",null,k((q=U.value)==null?void 0:q.name),1),L[10]||(L[10]=te(". ",-1))]),(l(!0),i(oe,null,ve(a.value,K=>(l(),i("div",{key:K.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${K.id}`},k(K.label),9,Gi),pe(e("textarea",{id:`binding-${K.id}`,"onUpdate:modelValue":ye=>se.value[K.id]=ye,class:"textarea binding-input"},null,8,Hi),[[$e,se.value[K.id]]])]))),128))])]}),_:1})):R("",!0)]))}},Ji=Ze(Yi,[["__scopeId","data-v-aec67d0c"]]),Qi={class:"layer-panel"},Xi={class:"layer-header panel-section"},Ki={class:"panel-title",style:{"margin-bottom":"0"}},Zi={class:"layer-count"},ea={key:0,class:"layers-empty"},ta={key:1,class:"layers-list"},oa=["onClick"],na={class:"layer-type-icon"},la={class:"layer-name"},ia={class:"layer-actions"},aa=["onClick","data-tooltip"],sa={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ra={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},da=["onClick","data-tooltip"],ua={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ca={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pa=["onClick"],va=["onClick"],fa=["onClick"],ma={__name:"LayerPanel",setup(E){const r=st(),d=rt(),p=A(()=>d.getProject(r.projectId)),c=A(()=>{var M,a;return(a=(M=p.value)==null?void 0:M.slides)==null?void 0:a.find(N=>N.id===r.currentSlideId)}),h=A(()=>{var M;return[...((M=c.value)==null?void 0:M.elements)||[]].sort((a,N)=>(N.zIndex||0)-(a.zIndex||0))});function y(M){r.selectElement(M)}function f(M){d.updateElement(r.projectId,r.currentSlideId,M.id,{visible:!M.visible})}function U(M){d.updateElement(r.projectId,r.currentSlideId,M.id,{locked:!M.locked})}function se(M){d.reorderElement(r.projectId,r.currentSlideId,M,"up")}function H(M){d.reorderElement(r.projectId,r.currentSlideId,M,"down")}function V(M){d.deleteElement(r.projectId,r.currentSlideId,M),r.selectedElementId===M&&r.clearSelection()}function be(M){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[M]||"◆"}function z(M){var a,N,_;return(a=M.content)!=null&&a.text?M.content.text.slice(0,24):(N=M.content)!=null&&N.label?M.content.label:(_=M.content)!=null&&_.question?M.content.question.slice(0,24):M.type.charAt(0).toUpperCase()+M.type.slice(1)}return(M,a)=>(l(),i("div",Qi,[e("div",Xi,[e("div",Ki,[a[0]||(a[0]=te(" Layers ",-1)),e("span",Zi,k(h.value.length),1)])]),h.value.length===0?(l(),i("div",ea,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",ta,[(l(!0),i(oe,null,ve(h.value,N=>(l(),i("div",{key:N.id,class:Q(["layer-item",I(r).selectedElementIds.includes(N.id)&&"selected",N.locked&&"locked",!N.visible&&"hidden"]),onClick:_=>y(N.id)},[e("span",na,k(be(N.type)),1),e("span",la,k(z(N)),1),e("div",ia,[e("button",{class:Q(["layer-action-btn",{active:N.visible}]),onClick:Le(_=>f(N),["stop"]),"data-tooltip":N.visible?"Hide":"Show"},[N.visible?(l(),i("svg",sa,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",ra,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,aa),e("button",{class:Q(["layer-action-btn",{active:N.locked}]),onClick:Le(_=>U(N),["stop"]),"data-tooltip":N.locked?"Unlock":"Lock"},[N.locked?(l(),i("svg",ua,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",ca,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,da),e("button",{class:"layer-action-btn",onClick:Le(_=>se(N.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,pa),e("button",{class:"layer-action-btn",onClick:Le(_=>H(N.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,va),e("button",{class:"layer-action-btn danger",onClick:Le(_=>V(N.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,fa)])],10,oa))),128))]))]))}},ga=Ze(ma,[["__scopeId","data-v-7407acd8"]]),ba={class:"panel-section"},ya={class:"preset-toolbar"},ha=["value"],xa=["value"],wa=["value"],ka={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},Ca=["onClick"],Sa={class:"preset-meta-chip muted"},$a={key:1,class:"import-review"},Ia={class:"motion-scrubber-header"},Ea={class:"preset-toolbar compact"},Aa=["value"],Ma=["value"],Pa={class:"import-list"},Ta=["onUpdate:modelValue"],Ba={class:"import-item-title"},Na={class:"preset-meta-chip"},za={key:0,class:"preset-meta-chip muted"},La={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(E,{emit:r}){const d=r;return(p,c)=>(l(),i("div",ba,[c[13]||(c[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",ya,[e("input",{value:E.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:c[0]||(c[0]=h=>d("update:searchQuery",h.target.value))},null,40,ha),e("select",{value:E.categoryFilter,class:"select",onChange:c[1]||(c[1]=h=>d("update:categoryFilter",h.target.value))},[c[8]||(c[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(oe,null,ve(E.availableCategories,h=>(l(),i("option",{key:`library-${h}`,value:h},k(h),9,wa))),128))],40,xa),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:c[2]||(c[2]=h=>d("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:c[3]||(c[3]=h=>d("export-presets"))},"Export")]),E.recentPresets.length?(l(),i("div",ka,[c[9]||(c[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(oe,null,ve(E.recentPresets,h=>(l(),i("div",{class:"preset-item",key:`recent-${h.id}`},[e("button",{type:"button",class:"preset-chip",onClick:y=>d("apply-preset",h)},k(h.name),9,Ca),e("span",Sa,"Used "+k(h.usageCount)+"x",1)]))),128))])):R("",!0),E.pendingImportedPresets.length?(l(),i("div",$a,[e("div",Ia,[c[10]||(c[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:c[4]||(c[4]=h=>d("clear-imports"))},"Discard")]),e("div",Ea,[e("select",{value:E.importScopeFilter,class:"select",onChange:c[5]||(c[5]=h=>d("update:importScopeFilter",h.target.value))},[...c[11]||(c[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Aa),e("select",{value:E.importConflictMode,class:"select",onChange:c[6]||(c[6]=h=>d("update:importConflictMode",h.target.value))},[...c[12]||(c[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Ma),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:c[7]||(c[7]=h=>d("apply-imports"))},"Merge Selected")]),e("div",Pa,[(l(!0),i(oe,null,ve(E.filteredPendingImports,h=>(l(),i("label",{key:`pending-${h.id}`,class:"import-item"},[pe(e("input",{"onUpdate:modelValue":y=>h.selected=y,type:"checkbox"},null,8,Ta),[[Dt,h.selected]]),e("span",Ba,k(h.name),1),e("span",Na,k(h.scope),1),h.category?(l(),i("span",za,k(h.category),1)):R("",!0)]))),128))])])):R("",!0)]))}},ja=Ze(La,[["__scopeId","data-v-61f99273"]]),_a={class:"panel-section"},Da={style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"12px"}},qa={style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"12px"}},Ra={key:0,style:{display:"flex",gap:"8px","flex-wrap":"wrap","margin-bottom":"16px"}},Oa={class:"panel-section"},Fa={class:"field-hint"},Va={class:"motion-scrubber-shell"},Ua={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Wa=["onClick"],Ga={class:"motion-preview"},Ha={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Ya={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Ja={class:"motion-card-label"},Qa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Xa={class:"form-group"},Ka={class:"form-group"},Za={class:"form-group",style:{"margin-top":"var(--space-3)"}},es={class:"preset-row",style:{"margin-top":"var(--space-3)"}},ts={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},os={key:0,class:"preset-list"},ns=["onDragstart","onDragenter","onDrop"],ls=["onClick"],is={key:0,class:"preset-meta-chip"},as=["onClick"],ss=["onClick"],rs=["onClick"],ds={key:1,class:"preset-row preset-edit-row"},us=["onClick"],cs={key:1,class:"field-hint"},ps={key:2,class:"panel-section"},vs={class:"slide-settings-tabs"},fs={key:0,class:"slide-settings-pane"},ms={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gs={class:"form-group"},bs={class:"bg-type-tabs"},ys=["onClick"],hs={key:0,class:"color-row"},xs=["value"],ws=["value"],ks={class:"slide-settings-subsection"},Cs={class:"canvas-size-grid"},Ss=["onClick"],$s={class:"canvas-size-icon-shell"},Is={class:"canvas-size-name"},Es={class:"canvas-size-ratio"},As={class:"canvas-custom-card"},Ms={class:"canvas-custom-header"},Ps={class:"field-hint"},Ts={class:"canvas-custom-inputs"},Bs={class:"form-group"},Ns={class:"canvas-size-input-wrap"},zs=["value"],Ls={class:"form-group"},js={class:"canvas-size-input-wrap"},_s=["value"],Ds={class:"check-row canvas-size-lock"},qs={class:"slide-settings-subsection"},Rs={key:1,class:"slide-settings-pane"},Os=["value"],Fs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Vs=["value"],Us={class:"check-row"},Ws=["checked"],Gs={key:2,class:"slide-settings-pane"},Hs={class:"check-row"},Ys=["checked"],Js={class:"check-row"},Qs=["checked"],Xs={class:"check-row"},Ks=["checked"],Zs={class:"check-row"},er=["checked"],tr={class:"check-row"},or=["checked"],nr={class:"panel-title"},lr={class:"element-type-badge"},ir={class:"geo-grid"},ar={class:"form-group"},sr=["value"],rr={class:"form-group"},dr=["value"],ur={class:"form-group"},cr=["value"],pr={class:"form-group"},vr=["value"],fr={class:"form-group"},mr=["value"],gr={class:"form-group"},br=["value"],yr={class:"motion-scrubber-shell"},hr={class:"motion-card-grid"},xr=["onClick"],wr={class:"motion-preview"},kr={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Cr={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Sr={class:"motion-card-label"},$r={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Ir={class:"form-group"},Er=["value"],Ar={class:"form-group"},Mr=["value"],Pr={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Tr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Br={key:0,class:"preset-list"},Nr=["onDragstart","onDragenter","onDrop"],zr=["onClick"],Lr={key:0,class:"preset-meta-chip"},jr=["onClick"],_r=["onClick"],Dr=["onClick"],qr={key:1,class:"preset-row preset-edit-row"},Rr=["onClick"],Or={key:1,class:"field-hint"},Fr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Vr=["value"],Ur={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Wr={class:"form-group"},Gr=["value"],Hr={class:"form-group"},Yr=["value"],Jr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Qr=["value"],Xr=["value"],Kr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Zr={class:"align-btns"},ed=["onClick"],td={class:"form-group",style:{"margin-top":"var(--space-3)"}},od={class:"style-btns"},nd={class:"form-group",style:{"margin-top":"var(--space-3)"}},ld={class:"color-row"},id=["value"],ad=["value"],sd={class:"form-group",style:{"margin-top":"var(--space-3)"}},rd=["value"],dd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ud={class:"form-group"},cd=["value"],pd={class:"form-group"},vd=["value"],fd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},md=["value"],gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},bd=["value"],yd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hd=["value"],xd={class:"form-group"},wd=["value"],kd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Cd={class:"form-group"},Sd=["value"],$d={class:"form-group"},Id=["value"],Ed={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ad=["value"],Md={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pd={class:"color-row"},Td=["value"],Bd=["value"],Nd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zd={class:"color-row"},Ld=["value"],jd=["value"],_d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dd=["value"],qd={class:"form-group"},Rd=["value"],Od={class:"form-group",style:{"margin-top":"var(--space-3)"}},Fd=["value"],Vd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ud=["value"],Wd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gd=["value"],Hd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Yd=["value"],Jd={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Qd={class:"chart-data-actions"},Xd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Kd=["value","placeholder"],Zd={class:"chart-palette-preview"},eu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},tu={class:"form-group"},ou=["value"],nu={class:"form-group"},lu=["value"],iu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},au={class:"form-group"},su=["value"],ru={class:"form-group"},du=["value"],uu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},cu={class:"form-group"},pu=["value"],vu={key:0,class:"form-group"},fu=["value"],mu={key:1,class:"form-group"},gu=["value"],bu={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},yu={class:"form-group"},hu=["value"],xu={class:"check-row",style:{"margin-top":"20px"}},wu=["checked"],ku={class:"check-row"},Cu=["checked"],Su={key:1,class:"check-row"},$u=["checked"],Iu={class:"check-row"},Eu=["checked"],Au={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mu=["value"],Pu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tu=["value"],Bu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Nu=["value"],zu={key:0,class:"form-group"},Lu=["value"],ju={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_u={class:"form-group"},Du=["value"],qu={class:"form-group"},Ru=["value"],Ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Fu={class:"form-group"},Vu=["value"],Uu={class:"form-group"},Wu=["value"],Gu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Hu={class:"form-group"},Yu=["value"],Ju={class:"form-group"},Qu=["value"],Xu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ku={class:"form-group"},Zu=["value"],ec=["value"],tc={class:"form-group"},oc=["value"],nc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},lc=["value"],ic={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ac={class:"color-row"},sc=["value"],rc=["value"],dc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},uc={class:"form-group"},cc=["value"],pc={class:"form-group"},vc=["value"],fc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},mc=["value"],gc={class:"form-group"},bc=["value"],yc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},hc={class:"form-group"},xc=["value"],wc={class:"form-group"},kc=["value"],Cc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sc=["value"],$c={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ic=["value"],Ec={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ac=["value"],Mc={class:"check-row"},Pc=["checked"],Tc={class:"check-row"},Bc=["checked"],Nc={class:"check-row"},zc=["checked"],Lc={class:"check-row"},jc=["checked"],_c={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dc=["value"],qc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rc=["value"],Oc={class:"check-row"},Fc=["checked"],Vc={class:"check-row"},Uc=["checked"],Wc={class:"check-row"},Gc=["checked"],Hc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Yc={class:"form-group"},Jc=["value"],Qc={class:"form-group"},Xc=["value"],Kc={class:"form-group",style:{"margin-top":"var(--space-3)"}},Zc=["value"],ep={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},tp=["value"],op={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},np=["value"],lp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ip=["value"],ap={class:"form-group"},sp=["value"],rp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},dp={class:"form-group"},up=["value"],cp={class:"form-group"},pp=["value"],vp={class:"form-group",style:{"margin-top":"var(--space-3)"}},fp=["value"],mp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gp=["value"],bp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},yp={class:"form-group"},hp=["value"],xp={class:"form-group"},wp=["value"],kp={class:"form-group"},Cp=["value"],Sp={class:"form-group"},$p=["value"],Ip={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ep=["value"],Ap={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Mp={class:"form-group"},Pp=["value"],Tp={class:"form-group"},Bp=["value"],Np={class:"form-group"},zp=["value"],Lp={class:"form-group"},jp=["value"],_p={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dp=["value"],qp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rp=["value"],Op={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fp=["value"],Vp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Up=["value"],Wp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gp=["value"],Hp={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Yp={class:"form-group"},Jp=["value"],Qp={class:"form-group"},Xp=["value"],Kp={class:"form-group"},Zp=["value"],ev={class:"form-group"},tv=["value"],ov={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nv=["value"],lv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},iv={class:"form-group"},av=["value"],sv={class:"form-group"},rv=["value"],dv={class:"form-group"},uv=["value"],cv={class:"form-group"},pv=["value"],vv={class:"form-group"},fv=["value"],mv={class:"form-group",style:{"margin-top":"var(--space-3)"}},gv=["value"],bv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},yv={class:"form-group"},hv=["value"],xv={class:"form-group"},wv=["value"],kv={class:"form-group",style:{"margin-top":"var(--space-3)"}},Cv=["value"],Sv={class:"form-group"},$v=["value"],Iv={class:"form-group"},Ev=["value"],Av={class:"form-group"},Mv=["value"],Pv={class:"form-group",style:{"margin-top":"var(--space-3)"}},Tv={style:{display:"flex","align-items":"center",gap:"8px"}},Bv=["checked"],Nv={class:"form-group"},zv=["value"],Lv={class:"form-group"},jv=["value"],_v={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Dv={class:"form-group"},qv=["value"],Rv={class:"form-group"},Ov=["value"],Fv={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Vv={class:"form-group"},Uv=["value"],Wv={class:"panel-section"},Gv={class:"actions-list"},Hv={__name:"PropertiesPanel",setup(E){const r=st(),d=rt(),p=A(()=>d.getProject(r.projectId)),c=A(()=>{var u,t;return(t=(u=p.value)==null?void 0:u.slides)==null?void 0:t.find(T=>T.id===r.currentSlideId)}),h=A(()=>{var u;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((u=p.value)==null?void 0:u.settings)||{}}}),y=A(()=>qt(h.value)),f=A(()=>Cl(h.value)),U=A(()=>Sl(y.value.width,y.value.height)),se=j(!0),H=j("canvas"),V=A(()=>Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]),be=A(()=>V.value.filter(u=>u.scope!=="group")),z=A(()=>V.value.filter(u=>u.scope==="group")),M=A(()=>{var t;const u=new Set(r.selectedElementIds);return(((t=c.value)==null?void 0:t.elements)||[]).filter(T=>u.has(T.id))}),a=A(()=>{var u,t;return r.selectedElementId?(t=(u=c.value)==null?void 0:u.elements)==null?void 0:t.find(T=>T.id===r.selectedElementId):null}),N=A(()=>r.multiSelection||!!a.value),_=A(()=>r.multiSelection?"group":"single"),ue=A(()=>{var t,T;const u=(T=(t=a.value)==null?void 0:t.animations)==null?void 0:T[0];return{type:(u==null?void 0:u.type)||"auto",delay:Number((u==null?void 0:u.delay)||0),duration:Number((u==null?void 0:u.duration)||.64)}}),Y=A(()=>{var Be,_e;const u=M.value.map(ze=>{var Se;return((Se=ze.animations)==null?void 0:Se[0])||null}),t=((Be=u[0])==null?void 0:Be.type)||"auto",T=Number(((_e=u[0])==null?void 0:_e.duration)||.64),ae=u.every(ze=>((ze==null?void 0:ze.type)||"auto")===t),Ce=u.every(ze=>Number((ze==null?void 0:ze.duration)||.64)===T);return{type:ae?t:"mixed",duration:Ce?T:.64}}),g=j(0),O=j(0),W=j(""),Ie=j(""),F=j(""),Z=j(""),ne=j(""),fe=j(""),ie=j(""),Ee=j(""),C=j(""),L=j(""),q=j(""),K=j(""),ye=j(""),Re=j("all"),Te=j(null),Oe=j(null),le=j([]),me=j("all"),we=j("replace"),ce=j(""),ge=j(null),re=j("");let B=null;const S=j({});nt(a,u=>{u?S.value=JSON.parse(JSON.stringify(u)):S.value={},(u==null?void 0:u.type)==="chart"&&(ce.value="")},{immediate:!0,deep:!0}),nt(()=>{var u;return[r.propertiesPanelSection,(u=a.value)==null?void 0:u.id,r.rightPanelTab]},async([u,t,T])=>{var Ce;if(!u||!t||T!=="properties")return;await wl();const ae=(Ce=ge.value)==null?void 0:Ce.querySelector(`[data-props-anchor="${u}"]`);ae&&(ae.scrollIntoView({behavior:"smooth",block:"start"}),re.value=u,B&&window.clearTimeout(B),B=window.setTimeout(()=>{re.value===u&&(re.value="")},1400))},{immediate:!0});function D(){if(!M.value.length)return;const u=window.prompt("Enter block name","Custom Block");u&&(d.saveSelectionAsContentBlock(r.projectId,r.currentSlideId,r.selectedElementIds,{name:u}),r.openLeftPanel("blocks"))}function ke(u){const t=M.value;if(t.length<2)return;let T=1/0,ae=1/0,Ce=-1/0,Be=-1/0;t.forEach(Se=>{const qe=Se.width||100,Ke=Se.height||100;Se.x<T&&(T=Se.x),Se.y<ae&&(ae=Se.y),Se.x+qe>Ce&&(Ce=Se.x+qe),Se.y+Ke>Be&&(Be=Se.y+Ke)});let _e=T+(Ce-T)/2,ze=ae+(Be-ae)/2;t.forEach(Se=>{let qe={};const Ke=Se.width||100,xt=Se.height||100;u==="left"&&(qe.x=T),u==="center"&&(qe.x=_e-Ke/2),u==="right"&&(qe.x=Ce-Ke),u==="top"&&(qe.y=ae),u==="middle"&&(qe.y=ze-xt/2),u==="bottom"&&(qe.y=Be-xt),d.updateElement(r.projectId,r.currentSlideId,Se.id,qe)})}function Ge(u){const t=[...M.value];if(!(t.length<3))if(u==="horizontal"){t.sort((Se,qe)=>Se.x-qe.x);const T=t[0],ae=t[t.length-1],Ce=t.reduce((Se,qe)=>Se+(qe.width||100),0),_e=(ae.x+(ae.width||100)-T.x-Ce)/(t.length-1);let ze=T.x+(T.width||100)+_e;for(let Se=1;Se<t.length-1;Se++)d.updateElement(r.projectId,r.currentSlideId,t[Se].id,{x:ze}),ze+=(t[Se].width||100)+_e}else{t.sort((Se,qe)=>Se.y-qe.y);const T=t[0],ae=t[t.length-1],Ce=t.reduce((Se,qe)=>Se+(qe.height||100),0),_e=(ae.y+(ae.height||100)-T.y-Ce)/(t.length-1);let ze=T.y+(T.height||100)+_e;for(let Se=1;Se<t.length-1;Se++)d.updateElement(r.projectId,r.currentSlideId,t[Se].id,{y:ze}),ze+=(t[Se].height||100)+_e}}function He(u){a.value&&d.updateElement(r.projectId,r.currentSlideId,a.value.id,u)}function x(u){if(!a.value)return;const t={...a.value.content,...u};He({content:t})}function Ae(u,t){try{return JSON.parse(u)}catch{return t}}function Fe(u,t){const T=parseFloat(t);isNaN(T)||He({[u]:T})}const Ve=j({});nt(c,u=>{u&&(Ve.value={...u})},{immediate:!0});function Qe(u){c.value&&d.updateSlide(r.projectId,c.value.id,u)}function Ye(u){if(!p.value)return;const t={...h.value,...u};d.updateProject(r.projectId,{settings:{...t,...Rl(t)}})}function Mt(u){Ye({slideWidth:u.width,slideHeight:u.height})}function ct(u,t){const T=Math.round(Number(t)||0);if(!T)return;const ae={[`slide${u==="width"?"Width":"Height"}`]:T};if(se.value){const Ce=y.value.width,Be=y.value.height;u==="width"?ae.slideHeight=Math.round(T*(Be/Ce)):ae.slideWidth=Math.round(T*(Ce/Be))}Ye(ae)}const De=A(()=>{var u;return $l(((u=p.value)==null?void 0:u.theme)||{})}),vt=A(()=>{var t,T;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const u=((T=a.value.content)==null?void 0:T.paletteText)||De.value.paletteText;return Vl(u)});function et(u){const t=Ol(u,{fallbackToDefault:!1});return t.length?Fl(t):""}function At(u){var T;if(((T=a.value)==null?void 0:T.type)!=="chart")return;const t=et(u);t&&(x({dataText:t}),ce.value="")}async function Pt(u){var ae;const t=u.target,T=(ae=t==null?void 0:t.files)==null?void 0:ae[0];if(T)try{const Ce=await T.text();At(Ce)}finally{t&&(t.value="")}}function Tt(){var u;(u=Oe.value)==null||u.click()}function Bt(){var t,T;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const u=et(((T=a.value.content)==null?void 0:T.dataText)||"");u&&x({dataText:u})}function Nt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&x({...De.value})}function zt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&x({paletteText:De.value.paletteText})}function ft(u){return String(u||"").split(",").map(t=>t.trim()).filter(Boolean)}function b(u){const t=(u==null?void 0:u.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((u==null?void 0:u.name)||"Imported Preset").trim()||"Imported Preset",category:String((u==null?void 0:u.category)||"").trim(),tags:Array.isArray(u==null?void 0:u.tags)?u.tags.map(T=>String(T).trim()).filter(Boolean):ft(u==null?void 0:u.tags),type:String((u==null?void 0:u.type)||"auto"),delay:Math.max(0,Number(u==null?void 0:u.delay)||0),duration:Math.max(.1,Number(u==null?void 0:u.duration)||.72),stepDelay:Math.max(0,Number(u==null?void 0:u.stepDelay)||0)}}const w=A(()=>[...new Set(V.value.map(t=>t.category).filter(Boolean))].sort((t,T)=>t.localeCompare(T))),ee=A(()=>[...V.value].filter(u=>Number(u.usageCount||0)>0).sort((u,t)=>{const T=Number(t.lastUsedAt||0)-Number(u.lastUsedAt||0);return T!==0?T:Number(t.usageCount||0)-Number(u.usageCount||0)}).slice(0,6)),G=A(()=>me.value==="all"?le.value:le.value.filter(u=>u.scope===me.value));function Pe(u){const t=ye.value.trim().toLowerCase(),T=Re.value;return T==="all"||(u.category||"")===T?t?[u.name,u.category,...u.tags||[]].filter(Boolean).some(Ce=>String(Ce).toLowerCase().includes(t)):!0:!1}const Ne=A(()=>be.value.filter(Pe)),We=A(()=>z.value.filter(Pe)),Xe=A(()=>ee.value.filter(u=>_.value==="group"?u.scope==="group":u.scope!=="group"));function de(u){const t=String(u.name||"").trim();if(!t)return;const T=V.value.findIndex(Be=>Be.scope===u.scope&&Be.name.toLowerCase()===t.toLowerCase()),ae={...u,id:T>=0?V.value[T].id:`motion-${Date.now()}`,name:t,category:String(u.category||"").trim(),tags:Array.isArray(u.tags)?u.tags:ft(u.tags)},Ce=[...V.value];T>=0?Ce.splice(T,1,ae):Ce.push(ae),Ye({motionPresets:Ce})}function Me(u,t){const T=V.value.map(ae=>ae.id===u?{...ae,...t}:ae);Ye({motionPresets:T})}function lt(u){const t=V.value.find(T=>T.id===u);t&&Me(u,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function Ue(u,t){const T=V.value.filter(_e=>_e.scope===u).map(_e=>_e.name.toLowerCase()),ae=String(t||"Preset").trim()||"Preset";if(!T.includes(ae.toLowerCase()))return ae;let Ce=2,Be=`${ae} Copy`;for(;T.includes(Be.toLowerCase());)Be=`${ae} Copy ${Ce}`,Ce+=1;return Be}function je(u){Ye({motionPresets:V.value.filter(t=>t.id!==u)}),F.value===u&&(F.value="",Z.value="")}function Je(u){de({...u,id:void 0,name:Ue(u.scope,u.name)})}function yt(u){F.value=u.id,Z.value=u.name,ne.value=u.category||"",fe.value=Array.isArray(u.tags)?u.tags.join(", "):""}function mt(){F.value="",Z.value="",ne.value="",fe.value=""}function wt(u){const t=String(Z.value||"").trim();t&&(Me(u,{name:t,category:String(ne.value||"").trim(),tags:ft(fe.value)}),mt())}function Wt(u,t,T){if(!t||!T||t===T)return;const ae=V.value.filter(Ke=>Ke.scope===u),Ce=ae.findIndex(Ke=>Ke.id===t),Be=ae.findIndex(Ke=>Ke.id===T);if(Ce===-1||Be===-1)return;const _e=[...ae],[ze]=_e.splice(Ce,1);_e.splice(Be,0,ze);const Se=V.value.filter(Ke=>Ke.scope!==u),qe=[];V.value.forEach(Ke=>{if(Ke.scope===u){_e.length&&qe.push(_e.shift());return}const xt=Se.shift();xt&&qe.push(xt)}),Ye({motionPresets:qe})}function kt(u){ie.value=u.id,Ee.value=u.id}function Rt(u){ie.value&&(Ee.value=u.id)}function Lt(u){ie.value&&(Wt(u.scope,ie.value,u.id),ie.value="",Ee.value="")}function Ot(){ie.value="",Ee.value=""}function Ft(){g.value+=1}function Vt(){O.value+=1}function dt(u,t){Qe({[u]:t})}function Ct(u){const t=Math.max(0,Number(u)||0);Qe({duration:t})}function St(u){var ae;if(!a.value)return;const T={...((ae=a.value.animations)==null?void 0:ae[0])||{type:"auto",delay:0,duration:.64},...u};if(T.type==="auto"){He({animations:[]});return}He({animations:[{type:T.type||"none",delay:Math.max(0,Number(T.delay)||0),duration:Math.max(.1,Number(T.duration)||.64)}]})}const ut=j("stagger-in"),gt=j(0),ht=j(.12),bt=j(.72);nt(M,u=>{u.length&&(ut.value=Y.value.type==="mixed"?"stagger-in":Y.value.type,bt.value=Y.value.duration)},{immediate:!0,deep:!0});function Gt(){if(!M.value.length)return;[...M.value].sort((t,T)=>(t.y||0)!==(T.y||0)?(t.y||0)-(T.y||0):(t.x||0)-(T.x||0)).forEach((t,T)=>{if(ut.value==="auto"){d.updateElement(r.projectId,r.currentSlideId,t.id,{animations:[]});return}d.updateElement(r.projectId,r.currentSlideId,t.id,{animations:[{type:ut.value,delay:Math.max(0,Number(gt.value)||0)+T*Math.max(0,Number(ht.value)||0),duration:Math.max(.1,Number(bt.value)||.72)}]})})}function Ut(u){ut.value=u.type||"stagger-in",gt.value=Number(u.delay||0),ht.value=Number(u.stepDelay||0),bt.value=Number(u.duration||.72),lt(u.id),Vt()}function s(){de({scope:"group",name:Ie.value,category:q.value,tags:ft(K.value),type:ut.value,delay:Math.max(0,Number(gt.value)||0),stepDelay:Math.max(0,Number(ht.value)||0),duration:Math.max(.1,Number(bt.value)||.72)}),Ie.value="",q.value="",K.value=""}function n(u){St({type:u.type||"auto",delay:Number(u.delay||0),duration:Number(u.duration||.72)}),lt(u.id),Ft()}function v(){de({scope:"single",name:W.value,category:C.value,tags:ft(L.value),type:ue.value.type,delay:Math.max(0,Number(ue.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(ue.value.duration)||.72)}),W.value="",C.value="",L.value=""}function $(){var u;(u=Te.value)==null||u.click()}async function m(u){var ae;const t=u.target,T=(ae=t==null?void 0:t.files)==null?void 0:ae[0];if(T)try{const Ce=await T.text(),Be=JSON.parse(Ce),_e=Array.isArray(Be)?Be:Array.isArray(Be.motionPresets)?Be.motionPresets:[];if(!_e.length)return;le.value=_e.map(ze=>({...b(ze),selected:!0,importName:String((ze==null?void 0:ze.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function J(){le.value=[]}function he(){const u=le.value.filter(T=>T.selected);if(!u.length)return;const t=[...V.value];u.forEach(T=>{const ae=t.findIndex(Ce=>Ce.scope===T.scope&&Ce.name.toLowerCase()===T.name.toLowerCase());if(ae>=0){we.value==="replace"?t.splice(ae,1,{...t[ae],...T,id:t[ae].id}):t.push({...T,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:Ue(T.scope,T.name)});return}t.push(T)}),Ye({motionPresets:t}),J()}function tt(){var Be;if(!V.value.length)return;const u={version:1,exportedAt:new Date().toISOString(),motionPresets:V.value.map(({id:_e,...ze})=>ze)},t=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),T=URL.createObjectURL(t),ae=document.createElement("a"),Ce=String(((Be=p.value)==null?void 0:Be.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";ae.href=T,ae.download=`${Ce}-motion-presets.json`,document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),URL.revokeObjectURL(T)}const P=A(()=>[{id:`single-${g.value}`,delay:Math.max(0,Number(ue.value.delay)||0),duration:Math.max(.1,Number(ue.value.duration)||.72),type:ue.value.type}]),at=A(()=>Array.from({length:Math.min(Math.max(M.value.length,3),5)},(u,t)=>({id:`group-${O.value}-${t}`,delay:Math.max(0,Number(gt.value)||0)+t*Math.max(0,Number(ht.value)||0),duration:Math.max(.1,Number(bt.value)||.72),type:ut.value}))),$t=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],It=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(u,t)=>{var T,ae,Ce,Be,_e,ze,Se,qe,Ke,xt,Qt,Xt,Kt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,yo,ho,xo,wo,ko,Co,So,$o,Io,Eo,Ao,Mo,Po,To,Bo,No,zo,Lo,jo,_o,Do,qo,Ro,Oo,Fo,Vo,Uo,Wo,Go,Ho,Yo,Jo,Qo,Xo,Ko,Zo,en,tn,on,nn,ln,an,sn,rn,dn,un,cn,pn,vn,fn,mn,gn,bn,yn,hn,xn,wn,kn,Cn,Sn,$n,In,En,An,Mn,Pn,Tn,Bn,Nn,zn,Ln,jn,_n,Dn,qn,Rn,On,Fn,Vn,Un,Wn,Gn,Hn,Yn,Jn,Qn,Xn,Kn,Zn,el,tl,ol,nl,ll,il,al,sl,rl,dl,ul,cl,pl,vl,fl;return l(),i("div",{ref_key:"panelRootRef",ref:ge,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Te,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:m},null,544),e("input",{ref_key:"chartImportInput",ref:Oe,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:Pt},null,544),t[398]||(t[398]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),N.value?(l(),ot(ja,{key:0,"search-query":ye.value,"category-filter":Re.value,"available-categories":w.value,"recent-presets":Xe.value,"pending-imported-presets":le.value,"filtered-pending-imports":G.value,"import-scope-filter":me.value,"import-conflict-mode":we.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>ye.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>Re.value=o),onTriggerImport:$,onExportPresets:tt,onApplyPreset:t[2]||(t[2]=o=>_.value==="group"?Ut(o):n(o)),onClearImports:J,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>me.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>we.value=o),onApplyImports:he},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):R("",!0),I(r).multiSelection?(l(),i(oe,{key:1},[e("div",_a,[t[190]||(t[190]=e("div",{class:"panel-title"},"Arrange Selection",-1)),e("div",Da,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[5]||(t[5]=o=>ke("left")),title:"Align Left"},"Left"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[6]||(t[6]=o=>ke("center")),title:"Align Center"},"Center"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[7]||(t[7]=o=>ke("right")),title:"Align Right"},"Right")]),e("div",qa,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[8]||(t[8]=o=>ke("top")),title:"Align Top"},"Top"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[9]||(t[9]=o=>ke("middle")),title:"Align Middle"},"Middle"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[10]||(t[10]=o=>ke("bottom")),title:"Align Bottom"},"Bottom")]),M.value.length>=3?(l(),i("div",Ra,[e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[11]||(t[11]=o=>Ge("horizontal")),title:"Distribute Horizontally"},"Distribute H"),e("button",{class:"btn btn-secondary btn-sm",style:{flex:"1"},onClick:t[12]||(t[12]=o=>Ge("vertical")),title:"Distribute Vertically"},"Distribute V")])):R("",!0),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:D}," Save as Content Block ")]),e("div",Oa,[t[195]||(t[195]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",Fa,k(M.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",Va,[e("div",{class:"motion-scrubber-header"},[t[191]||(t[191]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Vt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${O.value}`},[(l(!0),i(oe,null,ve(at.value,o=>(l(),i("span",{key:o.id,class:Q(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:xe({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Ua,[(l(),i(oe,null,ve($t,o=>e("button",{key:`group-${o.value}`,type:"button",class:Q(["motion-card",ut.value===o.value&&"active"]),onClick:X=>ut.value=o.value},[e("span",Ga,[e("span",{class:Q(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Ha)):R("",!0),o.value==="stagger-in"?(l(),i("span",Ya)):R("",!0)]),e("span",Ja,k(o.label),1)],10,Wa)),64))]),e("div",Qa,[e("div",Xa,[t[192]||(t[192]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),pe(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[13]||(t[13]=o=>gt.value=o),class:"input"},null,512),[[$e,gt.value]])]),e("div",Ka,[t[193]||(t[193]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),pe(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[14]||(t[14]=o=>ht.value=o),class:"input"},null,512),[[$e,ht.value]])])]),e("div",Za,[t[194]||(t[194]=e("label",{class:"form-label"},"Duration (seconds)",-1)),pe(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[15]||(t[15]=o=>bt.value=o),class:"input"},null,512),[[$e,bt.value]])]),e("div",es,[pe(e("input",{"onUpdate:modelValue":t[16]||(t[16]=o=>Ie.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[$e,Ie.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:s},"Save")]),e("div",ts,[pe(e("input",{"onUpdate:modelValue":t[17]||(t[17]=o=>q.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[$e,q.value]]),pe(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>K.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[$e,K.value]])]),We.value.length?(l(),i("div",os,[(l(!0),i(oe,null,ve(We.value,o=>(l(),i("div",{key:o.id,class:Q(["preset-item",ie.value===o.id&&"dragging",Ee.value===o.id&&ie.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:X=>kt(o),onDragenter:Le(X=>Rt(o),["prevent"]),onDragover:t[22]||(t[22]=Le(()=>{},["prevent"])),onDrop:Le(X=>Lt(o),["prevent"]),onDragend:Ot},[e("button",{type:"button",class:"preset-chip",onClick:X=>Ut(o)},k(o.name),9,ls),o.category?(l(),i("span",is,k(o.category),1)):R("",!0),(l(!0),i(oe,null,ve(o.tags||[],X=>(l(),i("span",{key:`${o.id}-${X}`,class:"preset-meta-chip muted"},"#"+k(X),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:X=>Je(o)},"Duplicate",8,as),e("button",{type:"button",class:"preset-mini-btn",onClick:X=>yt(o)},"Rename",8,ss),e("button",{type:"button",class:"preset-mini-btn danger",onClick:X=>je(o.id)},"Delete",8,rs),F.value===o.id?(l(),i("div",ds,[pe(e("input",{"onUpdate:modelValue":t[19]||(t[19]=X=>Z.value=X),class:"input"},null,512),[[$e,Z.value]]),pe(e("input",{"onUpdate:modelValue":t[20]||(t[20]=X=>ne.value=X),class:"input",placeholder:"Category"},null,512),[[$e,ne.value]]),pe(e("input",{"onUpdate:modelValue":t[21]||(t[21]=X=>fe.value=X),class:"input",placeholder:"Tags, comma separated"},null,512),[[$e,fe.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:X=>wt(o.id)},"Save",8,us),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:mt},"Cancel")])):R("",!0)],42,ns))),128))])):z.value.length?(l(),i("div",cs,"No group presets match the current search.")):R("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Gt}," Apply Sequence to Selection ")])],64)):a.value?(l(),i(oe,{key:3},[e("div",{class:Q(["panel-section",re.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",nr,[t[226]||(t[226]=te(" Position & Size ",-1)),e("span",lr,k(a.value.type),1)]),e("div",ir,[e("div",ar,[t[227]||(t[227]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[47]||(t[47]=o=>Fe("x",o.target.value))},null,40,sr)]),e("div",rr,[t[228]||(t[228]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[48]||(t[48]=o=>Fe("y",o.target.value))},null,40,dr)]),e("div",ur,[t[229]||(t[229]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[49]||(t[49]=o=>Fe("width",o.target.value))},null,40,cr)]),e("div",pr,[t[230]||(t[230]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[50]||(t[50]=o=>Fe("height",o.target.value))},null,40,vr)]),e("div",fr,[t[231]||(t[231]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[51]||(t[51]=o=>Fe("rotation",o.target.value))},null,40,mr)]),e("div",gr,[t[232]||(t[232]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[52]||(t[52]=o=>Fe("opacity",o.target.value))},null,40,br)])])],2),e("div",{class:Q(["panel-section",re.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[236]||(t[236]=e("div",{class:"panel-title"},"Animation",-1)),e("div",yr,[e("div",{class:"motion-scrubber-header"},[t[233]||(t[233]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ft},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${g.value}`},[(l(!0),i(oe,null,ve(P.value,o=>(l(),i("span",{key:o.id,class:Q(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:xe({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",hr,[(l(),i(oe,null,ve($t,o=>e("button",{key:o.value,type:"button",class:Q(["motion-card",ue.value.type===o.value&&"active"]),onClick:X=>St({type:o.value})},[e("span",wr,[e("span",{class:Q(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",kr)):R("",!0),o.value==="stagger-in"?(l(),i("span",Cr)):R("",!0)]),e("span",Sr,k(o.label),1)],10,xr)),64))]),e("div",$r,[e("div",Ir,[t[234]||(t[234]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:ue.value.delay,class:"input",onChange:t[53]||(t[53]=o=>St({delay:o.target.value}))},null,40,Er)]),e("div",Ar,[t[235]||(t[235]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:ue.value.duration,class:"input",onChange:t[54]||(t[54]=o=>St({duration:o.target.value}))},null,40,Mr)])]),e("div",Pr,[pe(e("input",{"onUpdate:modelValue":t[55]||(t[55]=o=>W.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[$e,W.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v},"Save")]),e("div",Tr,[pe(e("input",{"onUpdate:modelValue":t[56]||(t[56]=o=>C.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[$e,C.value]]),pe(e("input",{"onUpdate:modelValue":t[57]||(t[57]=o=>L.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[$e,L.value]])]),Ne.value.length?(l(),i("div",Br,[(l(!0),i(oe,null,ve(Ne.value,o=>(l(),i("div",{key:o.id,class:Q(["preset-item",ie.value===o.id&&"dragging",Ee.value===o.id&&ie.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:X=>kt(o),onDragenter:Le(X=>Rt(o),["prevent"]),onDragover:t[61]||(t[61]=Le(()=>{},["prevent"])),onDrop:Le(X=>Lt(o),["prevent"]),onDragend:Ot},[e("button",{type:"button",class:"preset-chip",onClick:X=>n(o)},k(o.name),9,zr),o.category?(l(),i("span",Lr,k(o.category),1)):R("",!0),(l(!0),i(oe,null,ve(o.tags||[],X=>(l(),i("span",{key:`${o.id}-${X}`,class:"preset-meta-chip muted"},"#"+k(X),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:X=>Je(o)},"Duplicate",8,jr),e("button",{type:"button",class:"preset-mini-btn",onClick:X=>yt(o)},"Rename",8,_r),e("button",{type:"button",class:"preset-mini-btn danger",onClick:X=>je(o.id)},"Delete",8,Dr),F.value===o.id?(l(),i("div",qr,[pe(e("input",{"onUpdate:modelValue":t[58]||(t[58]=X=>Z.value=X),class:"input"},null,512),[[$e,Z.value]]),pe(e("input",{"onUpdate:modelValue":t[59]||(t[59]=X=>ne.value=X),class:"input",placeholder:"Category"},null,512),[[$e,ne.value]]),pe(e("input",{"onUpdate:modelValue":t[60]||(t[60]=X=>fe.value=X),class:"input",placeholder:"Tags, comma separated"},null,512),[[$e,fe.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:X=>wt(o.id)},"Save",8,Rr),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:mt},"Cancel")])):R("",!0)],42,Nr))),128))])):be.value.length?(l(),i("div",Or,"No single-element presets match the current search.")):R("",!0),t[237]||(t[237]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[253]||(t[253]=e("div",{class:"panel-title"},"Text",-1)),e("div",Fr,[t[238]||(t[238]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(qe=a.value.content)==null?void 0:qe.text,class:"textarea",style:{"min-height":"64px"},onInput:t[62]||(t[62]=o=>x({text:o.target.value}))},null,40,Vr)]),e("div",Ur,[e("div",Wr,[t[239]||(t[239]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(Ke=a.value.content)==null?void 0:Ke.fontSize,class:"input",onChange:t[63]||(t[63]=o=>x({fontSize:+o.target.value}))},null,40,Gr)]),e("div",Hr,[t[241]||(t[241]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(xt=a.value.content)==null?void 0:xt.fontWeight,class:"select",onChange:t[64]||(t[64]=o=>x({fontWeight:o.target.value}))},[...t[240]||(t[240]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Yr)])]),e("div",Jr,[t[242]||(t[242]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Qt=a.value.content)==null?void 0:Qt.fontFamily,class:"select",onChange:t[65]||(t[65]=o=>x({fontFamily:o.target.value}))},[(l(),i(oe,null,ve(It,o=>e("option",{key:o,value:o},k(o.split(",")[0]),9,Xr)),64))],40,Qr)]),e("div",Kr,[t[243]||(t[243]=e("label",{class:"form-label"},"Align",-1)),e("div",Zr,[(l(),i(oe,null,ve(["left","center","right","justify"],o=>{var X;return e("button",{key:o,class:Q(["align-btn",((X=a.value.content)==null?void 0:X.textAlign)===o&&"active"]),onClick:ml=>x({textAlign:o})},k(o[0].toUpperCase()),11,ed)}),64))])]),e("div",td,[t[247]||(t[247]=e("label",{class:"form-label"},"Style",-1)),e("div",od,[e("button",{class:Q(["style-btn",((Xt=a.value.content)==null?void 0:Xt.fontStyle)==="italic"&&"active"]),onClick:t[66]||(t[66]=o=>{var X;return x({fontStyle:((X=a.value.content)==null?void 0:X.fontStyle)==="italic"?"normal":"italic"})})},[...t[244]||(t[244]=[e("i",null,"I",-1)])],2),e("button",{class:Q(["style-btn",((Kt=a.value.content)==null?void 0:Kt.textDecoration)==="underline"&&"active"]),onClick:t[67]||(t[67]=o=>{var X;return x({textDecoration:((X=a.value.content)==null?void 0:X.textDecoration)==="underline"?"none":"underline"})})},[...t[245]||(t[245]=[e("u",null,"U",-1)])],2),e("button",{class:Q(["style-btn",((Zt=a.value.content)==null?void 0:Zt.textDecoration)==="line-through"&&"active"]),onClick:t[68]||(t[68]=o=>{var X;return x({textDecoration:((X=a.value.content)==null?void 0:X.textDecoration)==="line-through"?"none":"line-through"})})},[...t[246]||(t[246]=[e("s",null,"S",-1)])],2)])]),e("div",nd,[t[248]||(t[248]=e("label",{class:"form-label"},"Color",-1)),e("div",ld,[e("input",{type:"color",value:((eo=a.value.content)==null?void 0:eo.color)||"#000",onInput:t[69]||(t[69]=o=>x({color:o.target.value})),class:"color-input-native"},null,40,id),e("input",{value:((to=a.value.content)==null?void 0:to.color)||"#000",class:"input",onInput:t[70]||(t[70]=o=>x({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,ad)])]),e("div",sd,[t[249]||(t[249]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((oo=a.value.content)==null?void 0:oo.lineHeight)??1.5,class:"input",onChange:t[71]||(t[71]=o=>x({lineHeight:+o.target.value}))},null,40,rd)]),e("div",dd,[e("div",ud,[t[251]||(t[251]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((no=a.value.content)==null?void 0:no.textTransform)||"none",class:"select",onChange:t[72]||(t[72]=o=>x({textTransform:o.target.value}))},[...t[250]||(t[250]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,cd)]),e("div",pd,[t[252]||(t[252]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((lo=a.value.content)==null?void 0:lo.letterSpacing)??0,class:"input",onChange:t[73]||(t[73]=o=>x({letterSpacing:+o.target.value}))},null,40,vd)])])],2)):R("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[261]||(t[261]=e("div",{class:"panel-title"},"Image",-1)),e("div",fd,[t[254]||(t[254]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(io=a.value.content)==null?void 0:io.src,class:"input",placeholder:"https://...",onInput:t[74]||(t[74]=o=>x({src:o.target.value}))},null,40,md)]),e("div",gd,[t[255]||(t[255]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(ao=a.value.content)==null?void 0:ao.alt,class:"input",onInput:t[75]||(t[75]=o=>x({alt:o.target.value}))},null,40,bd)]),e("div",yd,[t[257]||(t[257]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((so=a.value.content)==null?void 0:so.objectFit)||"cover",class:"select",onChange:t[76]||(t[76]=o=>x({objectFit:o.target.value}))},[...t[256]||(t[256]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,hd)]),e("div",xd,[t[258]||(t[258]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((ro=a.value.content)==null?void 0:ro.borderRadius)||0,class:"input",onChange:t[77]||(t[77]=o=>x({borderRadius:+o.target.value}))},null,40,wd)]),e("div",kd,[e("div",Cd,[t[259]||(t[259]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((uo=a.value.content)==null?void 0:uo.borderWidth)||0,class:"input",onChange:t[78]||(t[78]=o=>x({borderWidth:+o.target.value}))},null,40,Sd)]),e("div",$d,[t[260]||(t[260]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((co=a.value.content)==null?void 0:co.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[79]||(t[79]=o=>x({borderColor:o.target.value}))},null,40,Id)])])],2)):R("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Ed,[t[263]||(t[263]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((po=a.value.content)==null?void 0:po.shapeType)||"rectangle",class:"select",onChange:t[80]||(t[80]=o=>x({shapeType:o.target.value}))},[...t[262]||(t[262]=[it('<option value="rectangle" data-v-a86d3495>Rectangle</option><option value="circle" data-v-a86d3495>Circle</option><option value="triangle" data-v-a86d3495>Triangle</option><option value="star" data-v-a86d3495>Star</option><option value="arrow" data-v-a86d3495>Arrow</option><option value="diamond" data-v-a86d3495>Diamond</option>',6)])],40,Ad)]),e("div",Md,[t[264]||(t[264]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Pd,[e("input",{type:"color",value:((vo=a.value.content)==null?void 0:vo.fillColor)||"#6c47ff",onInput:t[81]||(t[81]=o=>x({fillColor:o.target.value})),class:"color-input-native"},null,40,Td),e("input",{value:((fo=a.value.content)==null?void 0:fo.fillColor)||"#6c47ff",class:"input",onInput:t[82]||(t[82]=o=>x({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Bd)])]),e("div",Nd,[t[265]||(t[265]=e("label",{class:"form-label"},"Border Color",-1)),e("div",zd,[e("input",{type:"color",value:((mo=a.value.content)==null?void 0:mo.borderColor)||"transparent",onInput:t[83]||(t[83]=o=>x({borderColor:o.target.value})),class:"color-input-native"},null,40,Ld),e("input",{value:((go=a.value.content)==null?void 0:go.borderColor)||"transparent",class:"input",onInput:t[84]||(t[84]=o=>x({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,jd)])]),e("div",_d,[t[266]||(t[266]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((bo=a.value.content)==null?void 0:bo.borderWidth)||0,class:"input",onChange:t[85]||(t[85]=o=>x({borderWidth:+o.target.value}))},null,40,Dd)]),e("div",qd,[t[267]||(t[267]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((yo=a.value.content)==null?void 0:yo.borderRadius)||0,class:"input",onChange:t[86]||(t[86]=o=>x({borderRadius:+o.target.value}))},null,40,Rd)]),e("div",Od,[t[268]||(t[268]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((ho=a.value.content)==null?void 0:ho.opacity)??1,class:"input",onChange:t[87]||(t[87]=o=>x({opacity:+o.target.value}))},null,40,Fd)])],2)):R("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[290]||(t[290]=e("div",{class:"panel-title"},"Chart",-1)),e("div",Vd,[t[271]||(t[271]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((xo=a.value.content)==null?void 0:xo.chartType)||"bar",class:"select",onChange:t[88]||(t[88]=o=>x({chartType:o.target.value}))},[...t[270]||(t[270]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Ud)]),e("div",Wd,[t[272]||(t[272]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((wo=a.value.content)==null?void 0:wo.title)||"",class:"input",onInput:t[89]||(t[89]=o=>x({title:o.target.value}))},null,40,Gd)]),e("div",Hd,[t[273]||(t[273]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((ko=a.value.content)==null?void 0:ko.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[90]||(t[90]=o=>x({dataText:o.target.value}))},null,40,Yd),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Bt},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Tt},"Upload CSV")]),t[274]||(t[274]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Jd,[t[275]||(t[275]=e("label",{class:"form-label"},"Paste table data",-1)),pe(e("textarea",{"onUpdate:modelValue":t[91]||(t[91]=o=>ce.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[$e,ce.value]]),e("div",Qd,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[92]||(t[92]=o=>At(ce.value))},"Convert pasted data")])]),e("div",Xd,[t[276]||(t[276]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((Co=a.value.content)==null?void 0:Co.paletteText)||"",class:"input",placeholder:De.value.paletteText,onInput:t[93]||(t[93]=o=>x({paletteText:o.target.value}))},null,40,Kd),e("div",Zd,[(l(!0),i(oe,null,ve(vt.value,(o,X)=>(l(),i("span",{key:`chart-palette-${X}`,class:"chart-palette-swatch",style:xe({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:zt},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Nt},"Apply theme colors")]),t[277]||(t[277]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",eu,[e("div",tu,[t[278]||(t[278]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((So=a.value.content)==null?void 0:So.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[94]||(t[94]=o=>x({backgroundColor:o.target.value}))},null,40,ou)]),e("div",nu,[t[279]||(t[279]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:(($o=a.value.content)==null?void 0:$o.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[95]||(t[95]=o=>x({textColor:o.target.value}))},null,40,lu)])]),e("div",iu,[e("div",au,[t[280]||(t[280]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((Io=a.value.content)==null?void 0:Io.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[96]||(t[96]=o=>x({gridColor:o.target.value}))},null,40,su)]),e("div",ru,[t[281]||(t[281]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((Eo=a.value.content)==null?void 0:Eo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[97]||(t[97]=o=>x({borderColor:o.target.value}))},null,40,du)])]),e("div",uu,[e("div",cu,[t[282]||(t[282]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Ao=a.value.content)==null?void 0:Ao.borderWidth)??1,class:"input",onChange:t[98]||(t[98]=o=>x({borderWidth:+o.target.value}))},null,40,pu)]),((Mo=a.value.content)==null?void 0:Mo.chartType)!=="circle"?(l(),i("div",vu,[t[283]||(t[283]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((Po=a.value.content)==null?void 0:Po.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[99]||(t[99]=o=>x({maxValue:o.target.value}))},null,40,fu)])):(l(),i("div",mu,[t[284]||(t[284]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((To=a.value.content)==null?void 0:To.innerRadius)??62,class:"input",onChange:t[100]||(t[100]=o=>x({innerRadius:+o.target.value}))},null,40,gu)]))]),((Bo=a.value.content)==null?void 0:Bo.chartType)==="line"?(l(),i("div",bu,[e("div",yu,[t[285]||(t[285]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((No=a.value.content)==null?void 0:No.strokeWidth)??3,class:"input",onChange:t[101]||(t[101]=o=>x({strokeWidth:+o.target.value}))},null,40,hu)]),e("label",xu,[e("input",{type:"checkbox",checked:!!((zo=a.value.content)!=null&&zo.showArea),onChange:t[102]||(t[102]=o=>x({showArea:o.target.checked}))},null,40,wu),t[286]||(t[286]=te(" Show area fill ",-1))])])):R("",!0),e("label",ku,[e("input",{type:"checkbox",checked:((Lo=a.value.content)==null?void 0:Lo.showLegend)!==!1,onChange:t[103]||(t[103]=o=>x({showLegend:o.target.checked}))},null,40,Cu),t[287]||(t[287]=te(" Show legend ",-1))]),((jo=a.value.content)==null?void 0:jo.chartType)!=="circle"?(l(),i("label",Su,[e("input",{type:"checkbox",checked:((_o=a.value.content)==null?void 0:_o.showGrid)!==!1,onChange:t[104]||(t[104]=o=>x({showGrid:o.target.checked}))},null,40,$u),t[288]||(t[288]=te(" Show grid lines ",-1))])):R("",!0),e("label",Iu,[e("input",{type:"checkbox",checked:((Do=a.value.content)==null?void 0:Do.showValues)!==!1,onChange:t[105]||(t[105]=o=>x({showValues:o.target.checked}))},null,40,Eu),t[289]||(t[289]=te(" Show values ",-1))])],2)):R("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[306]||(t[306]=e("div",{class:"panel-title"},"Button",-1)),e("div",Au,[t[291]||(t[291]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(qo=a.value.content)==null?void 0:qo.label,class:"input",onInput:t[106]||(t[106]=o=>x({label:o.target.value}))},null,40,Mu)]),e("div",Pu,[t[293]||(t[293]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Ro=a.value.content)==null?void 0:Ro.variant)||"primary",class:"select",onChange:t[107]||(t[107]=o=>x({variant:o.target.value}))},[...t[292]||(t[292]=[it('<option value="primary" data-v-a86d3495>Primary</option><option value="secondary" data-v-a86d3495>Secondary</option><option value="outline" data-v-a86d3495>Outline</option><option value="ghost" data-v-a86d3495>Ghost</option><option value="danger" data-v-a86d3495>Danger</option>',5)])],40,Tu)]),e("div",Bu,[t[295]||(t[295]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Oo=a.value.content)==null?void 0:Oo.action)||"none",class:"select",onChange:t[108]||(t[108]=o=>x({action:o.target.value}))},[...t[294]||(t[294]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Nu)]),(Fo=a.value.content)!=null&&Fo.action&&a.value.content.action!=="none"?(l(),i("div",zu,[t[296]||(t[296]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Vo=a.value.content)==null?void 0:Vo.target,class:"input",placeholder:"Slide # or https://...",onInput:t[109]||(t[109]=o=>x({target:o.target.value}))},null,40,Lu)])):R("",!0),e("div",ju,[e("div",_u,[t[297]||(t[297]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Uo=a.value.content)==null?void 0:Uo.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[110]||(t[110]=o=>x({bgColor:o.target.value}))},null,40,Du)]),e("div",qu,[t[298]||(t[298]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Wo=a.value.content)==null?void 0:Wo.textColor)||"#ffffff",class:"color-input-native",onInput:t[111]||(t[111]=o=>x({textColor:o.target.value}))},null,40,Ru)])]),e("div",Ou,[e("div",Fu,[t[299]||(t[299]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Go=a.value.content)==null?void 0:Go.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[112]||(t[112]=o=>x({borderColor:o.target.value}))},null,40,Vu)]),e("div",Uu,[t[300]||(t[300]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Ho=a.value.content)==null?void 0:Ho.borderRadius)??8,class:"input",onChange:t[113]||(t[113]=o=>x({borderRadius:+o.target.value}))},null,40,Wu)])]),e("div",Gu,[e("div",Hu,[t[301]||(t[301]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Yo=a.value.content)==null?void 0:Yo.fontSize)??15,class:"input",onChange:t[114]||(t[114]=o=>x({fontSize:+o.target.value}))},null,40,Yu)]),e("div",Ju,[t[303]||(t[303]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Jo=a.value.content)==null?void 0:Jo.fontWeight)??600),class:"select",onChange:t[115]||(t[115]=o=>x({fontWeight:+o.target.value}))},[...t[302]||(t[302]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Qu)])]),e("div",Xu,[e("div",Ku,[t[304]||(t[304]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Qo=a.value.content)==null?void 0:Qo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[116]||(t[116]=o=>x({fontFamily:o.target.value}))},[(l(),i(oe,null,ve(It,o=>e("option",{key:`btn-${o}`,value:o},k(o.split(",")[0]),9,ec)),64))],40,Zu)]),e("div",tc,[t[305]||(t[305]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Xo=a.value.content)==null?void 0:Xo.letterSpacing)??0,class:"input",onChange:t[117]||(t[117]=o=>x({letterSpacing:+o.target.value}))},null,40,oc)])])],2)):R("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[316]||(t[316]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",nc,[t[308]||(t[308]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Ko=a.value.content)==null?void 0:Ko.icon)||"?",class:"select",onChange:t[118]||(t[118]=o=>x({icon:o.target.value}))},[...t[307]||(t[307]=[it('<option value="?" data-v-a86d3495>? (Info)</option><option value="!" data-v-a86d3495>! (Alert)</option><option value="+" data-v-a86d3495>+ (Plus)</option><option value="i" data-v-a86d3495>i (Info)</option><option value="✦" data-v-a86d3495>✦ (Star)</option>',5)])],40,lc)]),e("div",ic,[t[309]||(t[309]=e("label",{class:"form-label"},"Background Color",-1)),e("div",ac,[e("input",{type:"color",value:((Zo=a.value.content)==null?void 0:Zo.bgColor)||"#6c47ff",onInput:t[119]||(t[119]=o=>x({bgColor:o.target.value})),class:"color-input-native"},null,40,sc),e("input",{value:((en=a.value.content)==null?void 0:en.bgColor)||"#6c47ff",class:"input",onInput:t[120]||(t[120]=o=>x({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,rc)])]),e("div",dc,[e("div",uc,[t[310]||(t[310]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((tn=a.value.content)==null?void 0:tn.iconColor)||"#ffffff",class:"color-input-native",onInput:t[121]||(t[121]=o=>x({iconColor:o.target.value}))},null,40,cc)]),e("div",pc,[t[311]||(t[311]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((on=a.value.content)==null?void 0:on.borderRadius)??999,class:"input",onChange:t[122]||(t[122]=o=>x({borderRadius:+o.target.value}))},null,40,vc)])]),e("div",fc,[t[312]||(t[312]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(nn=a.value.content)==null?void 0:nn.popupTitle,class:"input",onInput:t[123]||(t[123]=o=>x({popupTitle:o.target.value}))},null,40,mc)]),e("div",gc,[t[313]||(t[313]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(ln=a.value.content)==null?void 0:ln.popupContent,class:"textarea",onInput:t[124]||(t[124]=o=>x({popupContent:o.target.value}))},null,40,bc)]),e("div",yc,[e("div",hc,[t[314]||(t[314]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((an=a.value.content)==null?void 0:an.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[125]||(t[125]=o=>x({popupBgColor:o.target.value}))},null,40,xc)]),e("div",wc,[t[315]||(t[315]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((sn=a.value.content)==null?void 0:sn.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[126]||(t[126]=o=>x({popupTextColor:o.target.value}))},null,40,kc)])])],2)):R("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[325]||(t[325]=e("div",{class:"panel-title"},"Video",-1)),e("div",Cc,[t[317]||(t[317]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(rn=a.value.content)==null?void 0:rn.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[127]||(t[127]=o=>x({src:o.target.value}))},null,40,Sc)]),e("div",$c,[t[318]||(t[318]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(dn=a.value.content)==null?void 0:dn.poster,class:"input",onInput:t[128]||(t[128]=o=>x({poster:o.target.value}))},null,40,Ic)]),e("div",Ec,[t[320]||(t[320]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((un=a.value.content)==null?void 0:un.objectFit)||"cover",class:"select",onChange:t[129]||(t[129]=o=>x({objectFit:o.target.value}))},[...t[319]||(t[319]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Ac)]),e("label",Mc,[e("input",{type:"checkbox",checked:(cn=a.value.content)==null?void 0:cn.autoplay,onChange:t[130]||(t[130]=o=>x({autoplay:o.target.checked}))},null,40,Pc),t[321]||(t[321]=te(" Autoplay ",-1))]),e("label",Tc,[e("input",{type:"checkbox",checked:((pn=a.value.content)==null?void 0:pn.controls)??!0,onChange:t[131]||(t[131]=o=>x({controls:o.target.checked}))},null,40,Bc),t[322]||(t[322]=te(" Show Controls ",-1))]),e("label",Nc,[e("input",{type:"checkbox",checked:(vn=a.value.content)==null?void 0:vn.loop,onChange:t[132]||(t[132]=o=>x({loop:o.target.checked}))},null,40,zc),t[323]||(t[323]=te(" Loop ",-1))]),e("label",Lc,[e("input",{type:"checkbox",checked:(fn=a.value.content)==null?void 0:fn.muted,onChange:t[133]||(t[133]=o=>x({muted:o.target.checked}))},null,40,jc),t[324]||(t[324]=te(" Muted ",-1))])],2)):R("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[334]||(t[334]=e("div",{class:"panel-title"},"Audio",-1)),e("div",_c,[t[326]||(t[326]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(mn=a.value.content)==null?void 0:mn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[134]||(t[134]=o=>x({src:o.target.value}))},null,40,Dc)]),e("div",qc,[t[327]||(t[327]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(gn=a.value.content)==null?void 0:gn.label,class:"input",onInput:t[135]||(t[135]=o=>x({label:o.target.value}))},null,40,Rc)]),e("label",Oc,[e("input",{type:"checkbox",checked:(bn=a.value.content)==null?void 0:bn.autoplay,onChange:t[136]||(t[136]=o=>x({autoplay:o.target.checked}))},null,40,Fc),t[328]||(t[328]=te(" Autoplay ",-1))]),e("label",Vc,[e("input",{type:"checkbox",checked:((yn=a.value.content)==null?void 0:yn.controls)!==!1,onChange:t[137]||(t[137]=o=>x({controls:o.target.checked}))},null,40,Uc),t[329]||(t[329]=te(" Show Controls ",-1))]),e("label",Wc,[e("input",{type:"checkbox",checked:(hn=a.value.content)==null?void 0:hn.loop,onChange:t[138]||(t[138]=o=>x({loop:o.target.checked}))},null,40,Gc),t[330]||(t[330]=te(" Loop ",-1))]),e("div",Hc,[e("div",Yc,[t[331]||(t[331]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((xn=a.value.content)==null?void 0:xn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[139]||(t[139]=o=>x({accentColor:o.target.value}))},null,40,Jc)]),e("div",Qc,[t[332]||(t[332]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((wn=a.value.content)==null?void 0:wn.textColor)||"#555555",class:"color-input-native",onInput:t[140]||(t[140]=o=>x({textColor:o.target.value}))},null,40,Xc)])]),e("div",Kc,[t[333]||(t[333]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((kn=a.value.content)==null?void 0:kn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[141]||(t[141]=o=>x({bgColor:o.target.value}))},null,40,Zc)])],2)):R("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[342]||(t[342]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",ep,[t[335]||(t[335]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(Cn=a.value.content)==null?void 0:Cn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[142]||(t[142]=o=>x({question:o.target.value}))},null,40,tp)]),e("div",op,[t[336]||(t[336]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:($n=(Sn=a.value.content)==null?void 0:Sn.options)==null?void 0:$n.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[143]||(t[143]=o=>x({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,np)]),e("div",lp,[t[337]||(t[337]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((In=a.value.content)==null?void 0:In.correctIndex)??0,class:"input",onChange:t[144]||(t[144]=o=>x({correctIndex:+o.target.value}))},null,40,ip)]),e("div",ap,[t[338]||(t[338]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(En=a.value.content)==null?void 0:En.explanation,class:"textarea",onInput:t[145]||(t[145]=o=>x({explanation:o.target.value}))},null,40,sp)]),e("div",rp,[e("div",dp,[t[339]||(t[339]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((An=a.value.content)==null?void 0:An.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[146]||(t[146]=o=>x({cardBgColor:o.target.value}))},null,40,up)]),e("div",cp,[t[340]||(t[340]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((Mn=a.value.content)==null?void 0:Mn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[147]||(t[147]=o=>x({questionColor:o.target.value}))},null,40,pp)])]),e("div",vp,[t[341]||(t[341]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Pn=a.value.content)==null?void 0:Pn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[148]||(t[148]=o=>x({accentColor:o.target.value}))},null,40,fp)])],2)):a.value.type==="tabs"?(l(),i("div",{key:9,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[348]||(t[348]=e("div",{class:"panel-title"},"Tabs Configuration",-1)),e("div",mp,[t[343]||(t[343]=e("label",{class:"form-label"},"Tabs Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Tn=a.value.content)==null?void 0:Tn.tabs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[149]||(t[149]=o=>{var X;return x({tabs:Ae(o.target.value,(X=a.value.content)==null?void 0:X.tabs)})})},null,40,gp)]),e("div",bp,[e("div",yp,[t[344]||(t[344]=e("label",{class:"form-label"},"Active Tab",-1)),e("input",{type:"color",value:((Bn=a.value.content)==null?void 0:Bn.activeTabColor)||"#6c47ff",class:"color-input-native",onInput:t[150]||(t[150]=o=>x({activeTabColor:o.target.value}))},null,40,hp)]),e("div",xp,[t[345]||(t[345]=e("label",{class:"form-label"},"Inactive Tab",-1)),e("input",{type:"color",value:((Nn=a.value.content)==null?void 0:Nn.inactiveTabColor)||"#f8fafc",class:"color-input-native",onInput:t[151]||(t[151]=o=>x({inactiveTabColor:o.target.value}))},null,40,wp)]),e("div",kp,[t[346]||(t[346]=e("label",{class:"form-label"},"Content Bg",-1)),e("input",{type:"color",value:((zn=a.value.content)==null?void 0:zn.contentBgColor)||"#ffffff",class:"color-input-native",onInput:t[152]||(t[152]=o=>x({contentBgColor:o.target.value}))},null,40,Cp)]),e("div",Sp,[t[347]||(t[347]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Ln=a.value.content)==null?void 0:Ln.textColor)||"#1e293b",class:"color-input-native",onInput:t[153]||(t[153]=o=>x({textColor:o.target.value}))},null,40,$p)])])],2)):a.value.type==="accordion"?(l(),i("div",{key:10,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[354]||(t[354]=e("div",{class:"panel-title"},"Accordion Configuration",-1)),e("div",Ip,[t[349]||(t[349]=e("label",{class:"form-label"},"Items Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((jn=a.value.content)==null?void 0:jn.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[154]||(t[154]=o=>{var X;return x({items:Ae(o.target.value,(X=a.value.content)==null?void 0:X.items)})})},null,40,Ep)]),e("div",Ap,[e("div",Mp,[t[350]||(t[350]=e("label",{class:"form-label"},"Active Bg Color",-1)),e("input",{type:"color",value:((_n=a.value.content)==null?void 0:_n.activeBgColor)||"#f8fafc",class:"color-input-native",onInput:t[155]||(t[155]=o=>x({activeBgColor:o.target.value}))},null,40,Pp)]),e("div",Tp,[t[351]||(t[351]=e("label",{class:"form-label"},"Active Title Color",-1)),e("input",{type:"color",value:((Dn=a.value.content)==null?void 0:Dn.activeColor)||"#6c47ff",class:"color-input-native",onInput:t[156]||(t[156]=o=>x({activeColor:o.target.value}))},null,40,Bp)]),e("div",Np,[t[352]||(t[352]=e("label",{class:"form-label"},"Item Bg Color",-1)),e("input",{type:"color",value:((qn=a.value.content)==null?void 0:qn.itemBgColor)||"#ffffff",class:"color-input-native",onInput:t[157]||(t[157]=o=>x({itemBgColor:o.target.value}))},null,40,zp)]),e("div",Lp,[t[353]||(t[353]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Rn=a.value.content)==null?void 0:Rn.textColor)||"#475569",class:"color-input-native",onInput:t[158]||(t[158]=o=>x({textColor:o.target.value}))},null,40,jp)])])],2)):a.value.type==="flipcard"?(l(),i("div",{key:11,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[365]||(t[365]=e("div",{class:"panel-title"},"Flip Card Content",-1)),e("div",_p,[t[356]||(t[356]=e("label",{class:"form-label"},"Direction",-1)),e("select",{value:((On=a.value.content)==null?void 0:On.flipDirection)||"horizontal",class:"select",onChange:t[159]||(t[159]=o=>x({flipDirection:o.target.value}))},[...t[355]||(t[355]=[e("option",{value:"horizontal"},"Horizontal (Y-axis)",-1),e("option",{value:"vertical"},"Vertical (X-axis)",-1)])],40,Dp)]),e("div",qp,[t[357]||(t[357]=e("label",{class:"form-label"},"Front Title",-1)),e("input",{type:"text",value:(Fn=a.value.content)==null?void 0:Fn.frontTitle,class:"input",onInput:t[160]||(t[160]=o=>x({frontTitle:o.target.value}))},null,40,Rp)]),e("div",Op,[t[358]||(t[358]=e("label",{class:"form-label"},"Front Content",-1)),e("textarea",{value:(Vn=a.value.content)==null?void 0:Vn.frontContent,class:"textarea",onInput:t[161]||(t[161]=o=>x({frontContent:o.target.value}))},null,40,Fp)]),e("div",Vp,[t[359]||(t[359]=e("label",{class:"form-label"},"Back Title",-1)),e("input",{type:"text",value:(Un=a.value.content)==null?void 0:Un.backTitle,class:"input",onInput:t[162]||(t[162]=o=>x({backTitle:o.target.value}))},null,40,Up)]),e("div",Wp,[t[360]||(t[360]=e("label",{class:"form-label"},"Back Content",-1)),e("textarea",{value:(Wn=a.value.content)==null?void 0:Wn.backContent,class:"textarea",onInput:t[163]||(t[163]=o=>x({backContent:o.target.value}))},null,40,Gp)]),e("div",Hp,[e("div",Yp,[t[361]||(t[361]=e("label",{class:"form-label"},"Front Bg",-1)),e("input",{type:"color",value:((Gn=a.value.content)==null?void 0:Gn.frontBgColor)||"#6c47ff",class:"color-input-native",onInput:t[164]||(t[164]=o=>x({frontBgColor:o.target.value}))},null,40,Jp)]),e("div",Qp,[t[362]||(t[362]=e("label",{class:"form-label"},"Front Text",-1)),e("input",{type:"color",value:((Hn=a.value.content)==null?void 0:Hn.frontTextColor)||"#ffffff",class:"color-input-native",onInput:t[165]||(t[165]=o=>x({frontTextColor:o.target.value}))},null,40,Xp)]),e("div",Kp,[t[363]||(t[363]=e("label",{class:"form-label"},"Back Bg",-1)),e("input",{type:"color",value:((Yn=a.value.content)==null?void 0:Yn.backBgColor)||"#ffffff",class:"color-input-native",onInput:t[166]||(t[166]=o=>x({backBgColor:o.target.value}))},null,40,Zp)]),e("div",ev,[t[364]||(t[364]=e("label",{class:"form-label"},"Back Text",-1)),e("input",{type:"color",value:((Jn=a.value.content)==null?void 0:Jn.backTextColor)||"#1e293b",class:"color-input-native",onInput:t[167]||(t[167]=o=>x({backTextColor:o.target.value}))},null,40,tv)])])],2)):a.value.type==="stepper"?(l(),i("div",{key:12,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[371]||(t[371]=e("div",{class:"panel-title"},"Stepper Configuration",-1)),e("div",ov,[t[366]||(t[366]=e("label",{class:"form-label"},"Steps Data (JSON)",-1)),e("textarea",{value:JSON.stringify(((Qn=a.value.content)==null?void 0:Qn.steps)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px","white-space":"pre"},onChange:t[168]||(t[168]=o=>{var X;return x({steps:Ae(o.target.value,(X=a.value.content)==null?void 0:X.steps)})})},null,40,nv)]),e("div",lv,[e("div",iv,[t[367]||(t[367]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Xn=a.value.content)==null?void 0:Xn.bgColor)||"#ffffff",class:"color-input-native",onInput:t[169]||(t[169]=o=>x({bgColor:o.target.value}))},null,40,av)]),e("div",sv,[t[368]||(t[368]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Kn=a.value.content)==null?void 0:Kn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[170]||(t[170]=o=>x({accentColor:o.target.value}))},null,40,rv)]),e("div",dv,[t[369]||(t[369]=e("label",{class:"form-label"},"Title Color",-1)),e("input",{type:"color",value:((Zn=a.value.content)==null?void 0:Zn.titleColor)||"#0f172a",class:"color-input-native",onInput:t[171]||(t[171]=o=>x({titleColor:o.target.value}))},null,40,uv)]),e("div",cv,[t[370]||(t[370]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((el=a.value.content)==null?void 0:el.textColor)||"#475569",class:"color-input-native",onInput:t[172]||(t[172]=o=>x({textColor:o.target.value}))},null,40,pv)])])],2)):a.value.type==="poll"?(l(),i("div",{key:13,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[375]||(t[375]=e("div",{class:"panel-title"},"Poll Configuration",-1)),e("div",vv,[t[372]||(t[372]=e("label",{class:"form-label"},"Question",-1)),e("input",{type:"text",value:((tl=a.value.content)==null?void 0:tl.question)||"",class:"input",onInput:t[173]||(t[173]=o=>x({question:o.target.value}))},null,40,fv)]),e("div",mv,[t[373]||(t[373]=e("label",{class:"form-label"},"Options (JSON)",-1)),e("textarea",{value:JSON.stringify(((ol=a.value.content)==null?void 0:ol.options)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[174]||(t[174]=o=>{var X;return x({options:Ae(o.target.value,(X=a.value.content)==null?void 0:X.options)})})},null,40,gv)]),e("div",bv,[e("div",yv,[t[374]||(t[374]=e("label",{class:"form-label"},"Voted Color",-1)),e("input",{type:"color",value:((nl=a.value.content)==null?void 0:nl.votedColor)||"#6c47ff",class:"color-input-native",onInput:t[175]||(t[175]=o=>x({votedColor:o.target.value}))},null,40,hv)])])],2)):a.value.type==="labeledimage"?(l(),i("div",{key:14,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[378]||(t[378]=e("div",{class:"panel-title"},"Labeled Image Configuration",-1)),e("div",xv,[t[376]||(t[376]=e("label",{class:"form-label"},"Image URL",-1)),e("input",{type:"text",value:((ll=a.value.content)==null?void 0:ll.imageUrl)||"",class:"input",onInput:t[176]||(t[176]=o=>x({imageUrl:o.target.value}))},null,40,wv)]),e("div",kv,[t[377]||(t[377]=e("label",{class:"form-label"},"Markers (JSON)",-1)),e("textarea",{value:JSON.stringify(((il=a.value.content)==null?void 0:il.markers)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[177]||(t[177]=o=>{var X;return x({markers:Ae(o.target.value,(X=a.value.content)==null?void 0:X.markers)})})},null,40,Cv)])],2)):a.value.type==="matching"?(l(),i("div",{key:15,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[380]||(t[380]=e("div",{class:"panel-title"},"Matching Configuration",-1)),e("div",Sv,[t[379]||(t[379]=e("label",{class:"form-label"},"Pairs (JSON)",-1)),e("textarea",{value:JSON.stringify(((al=a.value.content)==null?void 0:al.pairs)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[178]||(t[178]=o=>{var X;return x({pairs:Ae(o.target.value,(X=a.value.content)==null?void 0:X.pairs)})})},null,40,$v)])],2)):a.value.type==="sorting"?(l(),i("div",{key:16,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[382]||(t[382]=e("div",{class:"panel-title"},"Sorting Configuration",-1)),e("div",Iv,[t[381]||(t[381]=e("label",{class:"form-label"},"Items (JSON) - Target Order",-1)),e("textarea",{value:JSON.stringify(((sl=a.value.content)==null?void 0:sl.items)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[179]||(t[179]=o=>{var X;return x({items:Ae(o.target.value,(X=a.value.content)==null?void 0:X.items)})})},null,40,Ev)])],2)):a.value.type==="cloze"?(l(),i("div",{key:17,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[385]||(t[385]=e("div",{class:"panel-title"},"Cloze Configuration",-1)),e("div",Av,[t[383]||(t[383]=e("label",{class:"form-label"},"Text (Wrap blanks in [ ])",-1)),e("textarea",{value:((rl=a.value.content)==null?void 0:rl.text)||"",class:"textarea",style:{"min-height":"100px","font-family":"monospace","font-size":"12px"},onChange:t[180]||(t[180]=o=>x({text:o.target.value}))},null,40,Mv)]),e("div",Pv,[e("div",Tv,[e("input",{type:"checkbox",id:"showCheckBtn",checked:((dl=a.value.content)==null?void 0:dl.showCheckBtn)!==!1,onChange:t[181]||(t[181]=o=>x({showCheckBtn:o.target.checked}))},null,40,Bv),t[384]||(t[384]=e("label",{for:"showCheckBtn",class:"form-label mb-0"},"Show Check Answers Button",-1))])])],2)):a.value.type==="placeholder"?(l(),i("div",{key:18,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[387]||(t[387]=e("div",{class:"panel-title"},"Placeholder Settings",-1)),e("div",Nv,[t[386]||(t[386]=e("label",{class:"form-label"},"Prompt Text",-1)),e("input",{value:((ul=a.value.content)==null?void 0:ul.prompt)||"",class:"input",placeholder:"Add Content",onInput:t[182]||(t[182]=o=>x({prompt:o.target.value}))},null,40,zv)])],2)):a.value.type==="scenario"?(l(),i("div",{key:19,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[389]||(t[389]=e("div",{class:"panel-title"},"Scenario Chat",-1)),e("div",Lv,[t[388]||(t[388]=e("label",{class:"form-label"},"Messages (JSON)",-1)),e("textarea",{value:JSON.stringify(((cl=a.value.content)==null?void 0:cl.messages)||[],null,2),class:"textarea",style:{"min-height":"160px","font-family":"monospace","font-size":"11px"},onChange:t[183]||(t[183]=o=>{var X;return x({messages:Ae(o.target.value,(X=a.value.content)==null?void 0:X.messages)})})},null,40,jv)])],2)):a.value.type==="progress"?(l(),i("div",{key:20,class:Q(["panel-section",re.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[393]||(t[393]=e("div",{class:"panel-title"},"Progress Settings",-1)),e("div",_v,[e("div",Dv,[t[390]||(t[390]=e("label",{class:"form-label"},"Mock XP",-1)),e("input",{type:"number",value:((pl=a.value.content)==null?void 0:pl.mockXP)||350,class:"input",onInput:t[184]||(t[184]=o=>x({mockXP:Number(o.target.value)}))},null,40,qv)]),e("div",Rv,[t[391]||(t[391]=e("label",{class:"form-label"},"Mock Percent",-1)),e("input",{type:"number",value:((vl=a.value.content)==null?void 0:vl.mockPercent)||65,class:"input",onInput:t[185]||(t[185]=o=>x({mockPercent:Number(o.target.value)}))},null,40,Ov)])]),e("div",Fv,[e("div",Vv,[t[392]||(t[392]=e("label",{class:"form-label"},"Fill Color",-1)),e("input",{type:"color",value:((fl=a.value.content)==null?void 0:fl.fillColor)||"#10b981",class:"color-input-native",onInput:t[186]||(t[186]=o=>x({fillColor:o.target.value}))},null,40,Uv)])])],2)):R("",!0),e("div",Wv,[t[397]||(t[397]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Gv,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[187]||(t[187]=o=>I(d).duplicateElement(I(r).projectId,I(r).currentSlideId,a.value.id))},[...t[394]||(t[394]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),te(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[188]||(t[188]=o=>{I(r).showInteractionEditor=!0,I(r).interactionElementId=a.value.id})},[...t[395]||(t[395]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),te(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[189]||(t[189]=o=>{I(d).deleteElement(I(r).projectId,I(r).currentSlideId,a.value.id),I(r).clearSelection()})},[...t[396]||(t[396]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),te(" Delete Element ",-1)])])])])],64)):(l(),i("div",ps,[e("div",vs,[e("button",{type:"button",class:Q(["slide-settings-tab",H.value==="canvas"&&"active"]),onClick:t[23]||(t[23]=o=>H.value="canvas")},[...t[196]||(t[196]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:Q(["slide-settings-tab",H.value==="transitions"&&"active"]),onClick:t[24]||(t[24]=o=>H.value="transitions")},[...t[197]||(t[197]=[it('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-a86d3495><path d="M5 7h5" data-v-a86d3495></path><path d="M5 12h10" data-v-a86d3495></path><path d="M5 17h14" data-v-a86d3495></path><path d="M14 7l5 5-5 5" data-v-a86d3495></path></svg><span data-v-a86d3495>Transitions</span>',2)])],2),e("button",{type:"button",class:Q(["slide-settings-tab",H.value==="navigation"&&"active"]),onClick:t[25]||(t[25]=o=>H.value="navigation")},[...t[198]||(t[198]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),H.value==="canvas"?(l(),i("div",fs,[t[213]||(t[213]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",ms,[t[199]||(t[199]=e("label",{class:"form-label"},"Title",-1)),pe(e("input",{"onUpdate:modelValue":t[26]||(t[26]=o=>Ve.value.title=o),class:"input",onInput:t[27]||(t[27]=o=>dt("title",Ve.value.title))},null,544),[[$e,Ve.value.title]])]),e("div",gs,[t[200]||(t[200]=e("label",{class:"form-label"},"Background",-1)),e("div",bs,[(l(),i(oe,null,ve(["color","gradient","image"],o=>{var X;return e("button",{key:o,class:Q(["bg-type-btn",(((X=c.value)==null?void 0:X.backgroundType)||"color")===o&&"active"]),onClick:ml=>Qe({backgroundType:o})},k(o),11,ys)}),64))]),(((T=c.value)==null?void 0:T.backgroundType)||"color")==="color"?(l(),i("div",hs,[e("input",{type:"color",value:((ae=c.value)==null?void 0:ae.background)||"#ffffff",onInput:t[28]||(t[28]=o=>Qe({background:o.target.value})),class:"color-input-native"},null,40,xs),e("input",{value:((Ce=c.value)==null?void 0:Ce.background)||"#ffffff",class:"input",onInput:t[29]||(t[29]=o=>Qe({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,ws)])):((Be=c.value)==null?void 0:Be.backgroundType)==="gradient"?pe((l(),i("input",{key:1,"onUpdate:modelValue":t[30]||(t[30]=o=>Ve.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[31]||(t[31]=o=>Qe({backgroundGradient:Ve.value.backgroundGradient}))},null,544)),[[$e,Ve.value.backgroundGradient]]):pe((l(),i("input",{key:2,"onUpdate:modelValue":t[32]||(t[32]=o=>Ve.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[33]||(t[33]=o=>Qe({backgroundImage:Ve.value.backgroundImage}))},null,544)),[[$e,Ve.value.backgroundImage]])]),e("div",ks,[t[210]||(t[210]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",Cs,[(l(!0),i(oe,null,ve(I(ql),o=>{var X;return l(),i("button",{key:o.id,type:"button",class:Q(["canvas-size-card",((X=f.value)==null?void 0:X.id)===o.id&&"active"]),onClick:ml=>Mt(o)},[e("span",$s,[e("span",{class:Q(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[201]||(t[201]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Is,k(o.label),1),e("span",Es,k(o.ratioLabel),1)],10,Ss)}),128))]),e("div",As,[e("div",Ms,[t[202]||(t[202]=e("span",null,"Custom",-1)),e("span",Ps,"Current ratio "+k(U.value),1)]),e("div",Ts,[e("div",Bs,[t[204]||(t[204]=e("label",{class:"form-label"},"Width",-1)),e("div",Ns,[e("input",{type:"number",min:"320",max:"4096",value:y.value.width,class:"input",onChange:t[34]||(t[34]=o=>ct("width",o.target.value))},null,40,zs),t[203]||(t[203]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[207]||(t[207]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Ls,[t[206]||(t[206]=e("label",{class:"form-label"},"Height",-1)),e("div",js,[e("input",{type:"number",min:"320",max:"4096",value:y.value.height,class:"input",onChange:t[35]||(t[35]=o=>ct("height",o.target.value))},null,40,_s),t[205]||(t[205]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",Ds,[pe(e("input",{type:"checkbox","onUpdate:modelValue":t[36]||(t[36]=o=>se.value=o)},null,512),[[Dt,se.value]]),t[208]||(t[208]=te(" Maintain proportions ",-1))]),t[209]||(t[209]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[211]||(t[211]=it('<div class="canvas-size-callout" data-v-a86d3495><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-a86d3495><circle cx="12" cy="12" r="9" data-v-a86d3495></circle><path d="M12 10v6" data-v-a86d3495></path><path d="M12 7h.01" data-v-a86d3495></path></svg><span data-v-a86d3495>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",qs,[t[212]||(t[212]=e("div",{class:"panel-title"},"Slide Notes",-1)),pe(e("textarea",{"onUpdate:modelValue":t[37]||(t[37]=o=>Ve.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[38]||(t[38]=o=>dt("notes",Ve.value.notes))},null,544),[[$e,Ve.value.notes]])])])):H.value==="transitions"?(l(),i("div",Rs,[t[218]||(t[218]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((_e=c.value)==null?void 0:_e.transition)||"none",class:"select",onChange:t[39]||(t[39]=o=>Qe({transition:o.target.value}))},[...t[214]||(t[214]=[it('<option value="none" data-v-a86d3495>None</option><option value="fade" data-v-a86d3495>Fade</option><option value="slide" data-v-a86d3495>Slide</option><option value="zoom" data-v-a86d3495>Zoom</option><option value="flip" data-v-a86d3495>Flip</option>',5)])],40,Os),e("div",Fs,[t[215]||(t[215]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((ze=c.value)==null?void 0:ze.duration)??0,class:"input",onChange:t[40]||(t[40]=o=>Ct(o.target.value))},null,40,Vs),t[216]||(t[216]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Us,[e("input",{type:"checkbox",checked:!!((Se=c.value)!=null&&Se.advanceOnMediaEnd),onChange:t[41]||(t[41]=o=>Qe({advanceOnMediaEnd:o.target.checked}))},null,40,Ws),t[217]||(t[217]=te(" Advance when slide media finishes ",-1))]),t[219]||(t[219]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",Gs,[t[225]||(t[225]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",Hs,[e("input",{type:"checkbox",checked:h.value.autoPlay,onChange:t[42]||(t[42]=o=>Ye({autoPlay:o.target.checked}))},null,40,Ys),t[220]||(t[220]=te(" Autoplay preview and exported presentation ",-1))]),e("label",Js,[e("input",{type:"checkbox",checked:h.value.loop,onChange:t[43]||(t[43]=o=>Ye({loop:o.target.checked}))},null,40,Qs),t[221]||(t[221]=te(" Loop back to the first slide at the end ",-1))]),e("label",Xs,[e("input",{type:"checkbox",checked:h.value.showProgress,onChange:t[44]||(t[44]=o=>Ye({showProgress:o.target.checked}))},null,40,Ks),t[222]||(t[222]=te(" Show progress bar in preview ",-1))]),e("label",Zs,[e("input",{type:"checkbox",checked:h.value.showNavControls,onChange:t[45]||(t[45]=o=>Ye({showNavControls:o.target.checked}))},null,40,er),t[223]||(t[223]=te(" Show previous/next and dot navigation ",-1))]),e("label",tr,[e("input",{type:"checkbox",checked:h.value.allowKeyboardNav,onChange:t[46]||(t[46]=o=>Ye({allowKeyboardNav:o.target.checked}))},null,40,or),t[224]||(t[224]=te(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},Yv=Ze(Hv,[["__scopeId","data-v-a86d3495"]]),Jv={class:"editor-toolbar"},Qv={class:"toolbar-group"},Xv={key:0,class:"toolbar-divider"},Kv=["data-group-name"],Zv=["data-tooltip","onClick"],ef={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tf={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},of={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nf={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lf={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},af={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sf={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},rf={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},df={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},uf={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},cf={key:10,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pf={key:11,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vf={key:12,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ff={key:13,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},mf={key:14,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},gf={key:15,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},bf={key:16,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},yf={key:17,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},hf={key:18,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},xf={key:19,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wf={key:20,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kf={class:"tool-label"},Cf={class:"toolbar-group"},Sf={class:"toolbar-group"},$f={class:"toolbar-group"},If={__name:"EditorToolbar",emits:["open-ai-project"],setup(E,{emit:r}){const d=r,p=st();rt();const c=[{id:"basic",name:"Basic",tools:[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"placeholder",label:"Placeholder",tooltip:"Add placeholder",icon:"shape"}]},{id:"media",name:"Media",tools:[{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"}]},{id:"interactive",name:"Interactive",tools:[{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"tabs",label:"Tabs",tooltip:"Add tabs",icon:"tabs"},{id:"accordion",label:"Accordion",tooltip:"Add accordion",icon:"accordion"},{id:"flipcard",label:"Flip Card",tooltip:"Add flip card",icon:"flipcard"},{id:"stepper",label:"Stepper",tooltip:"Add stepper",icon:"stepper"}]},{id:"learning",name:"Learning & Data",tools:[{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"},{id:"poll",label:"Poll",tooltip:"Add poll",icon:"poll"},{id:"labeledimage",label:"L-Image",tooltip:"Add labeled image",icon:"labeledimage"},{id:"matching",label:"Match",tooltip:"Add matching game",icon:"matching"},{id:"sorting",label:"Sort",tooltip:"Add sorting game",icon:"sorting"},{id:"cloze",label:"Cloze",tooltip:"Fill in blanks",icon:"cloze"},{id:"scenario",label:"Dialog",tooltip:"Scenario chat",icon:"scenario"},{id:"progress",label:"Stats",tooltip:"Track progress",icon:"progress"}]}];function h(y){p.setActiveTool(y)}return(y,f)=>(l(),i("div",Jv,[e("div",Qv,[e("button",{class:Q(["tool-btn",I(p).activeTool==="select"&&"active"]),onClick:f[0]||(f[0]=U=>h("select")),"data-tooltip":"Select (V)"},[...f[7]||(f[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),f[34]||(f[34]=e("div",{class:"toolbar-divider"},null,-1)),(l(),i(oe,null,ve(c,(U,se)=>(l(),i(oe,{key:U.id},[se>0?(l(),i("div",Xv)):R("",!0),e("div",{class:"toolbar-group element-group","data-group-name":U.name},[(l(!0),i(oe,null,ve(U.tools,H=>(l(),i("button",{key:H.id,class:Q(["tool-btn",I(p).activeTool===H.id&&"active"]),"data-tooltip":H.tooltip,onClick:V=>h(H.id)},[H.icon==="text"?(l(),i("svg",ef,[...f[8]||(f[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):H.icon==="heading"?(l(),i("svg",tf,[...f[9]||(f[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):H.icon==="image"?(l(),i("svg",of,[...f[10]||(f[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):H.icon==="shape"?(l(),i("svg",nf,[...f[11]||(f[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):H.icon==="button"?(l(),i("svg",lf,[...f[12]||(f[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):H.icon==="hotspot"?(l(),i("svg",af,[...f[13]||(f[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):H.icon==="video"?(l(),i("svg",sf,[...f[14]||(f[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):H.icon==="audio"?(l(),i("svg",rf,[...f[15]||(f[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):H.icon==="quiz"?(l(),i("svg",df,[...f[16]||(f[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):H.icon==="chart"?(l(),i("svg",uf,[...f[17]||(f[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):H.icon==="tabs"?(l(),i("svg",cf,[...f[18]||(f[18]=[e("rect",{x:"2",y:"7",width:"20",height:"13",rx:"2"},null,-1),e("path",{d:"M2 11h20"},null,-1),e("path",{d:"M8 7v4"},null,-1)])])):H.icon==="accordion"?(l(),i("svg",pf,[...f[19]||(f[19]=[e("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"},null,-1),e("path",{d:"M3 10h18"},null,-1),e("path",{d:"M3 16h18"},null,-1)])])):H.icon==="flipcard"?(l(),i("svg",vf,[...f[20]||(f[20]=[e("path",{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"},null,-1),e("path",{d:"M3 12h18"},null,-1),e("path",{d:"M21 8h-4"},null,-1)])])):H.icon==="stepper"?(l(),i("svg",ff,[...f[21]||(f[21]=[e("circle",{cx:"6",cy:"12",r:"3"},null,-1),e("circle",{cx:"18",cy:"12",r:"3"},null,-1),e("path",{d:"M9 12h6"},null,-1)])])):H.icon==="poll"?(l(),i("svg",mf,[...f[22]||(f[22]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("path",{d:"M7 10h10"},null,-1),e("path",{d:"M7 14h6"},null,-1)])])):H.icon==="labeledimage"?(l(),i("svg",gf,[...f[23]||(f[23]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"12",cy:"12",r:"2"},null,-1),e("line",{x1:"12",y1:"14",x2:"12",y2:"18"},null,-1)])])):H.icon==="matching"?(l(),i("svg",bf,[...f[24]||(f[24]=[it('<path d="M4 6h4" data-v-a51e7af2></path><path d="M4 18h4" data-v-a51e7af2></path><path d="M16 6h4" data-v-a51e7af2></path><path d="M16 18h4" data-v-a51e7af2></path><line x1="8" y1="6" x2="16" y2="18" data-v-a51e7af2></line>',5)])])):H.icon==="sorting"?(l(),i("svg",yf,[...f[25]||(f[25]=[e("path",{d:"M3 6h18"},null,-1),e("path",{d:"M7 12h10"},null,-1),e("path",{d:"M10 18h4"},null,-1)])])):H.icon==="cloze"?(l(),i("svg",hf,[...f[26]||(f[26]=[e("path",{d:"M4 12h4"},null,-1),e("path",{d:"M16 12h4"},null,-1),e("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"},null,-1)])])):H.icon==="scenario"?(l(),i("svg",xf,[...f[27]||(f[27]=[e("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},null,-1)])])):H.icon==="progress"?(l(),i("svg",wf,[...f[28]||(f[28]=[e("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null,-1)])])):R("",!0),e("span",kf,k(H.label),1)],10,Zv))),128))],8,Kv)],64))),64)),f[35]||(f[35]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Cf,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:f[1]||(f[1]=U=>d("open-ai-project")),"data-tooltip":"Create a new AI project"},[...f[29]||(f[29]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),f[36]||(f[36]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Sf,[e("button",{class:"tool-btn",onClick:f[2]||(f[2]=U=>I(p).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...f[30]||(f[30]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:f[3]||(f[3]=U=>I(p).zoomReset())},k(Math.round(I(p).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:f[4]||(f[4]=U=>I(p).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...f[31]||(f[31]=[it('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-a51e7af2><circle cx="11" cy="11" r="8" data-v-a51e7af2></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-a51e7af2></line><line x1="11" y1="8" x2="11" y2="14" data-v-a51e7af2></line><line x1="8" y1="11" x2="14" y2="11" data-v-a51e7af2></line></svg>',1)])])]),f[37]||(f[37]=e("div",{class:"toolbar-divider"},null,-1)),e("div",$f,[e("button",{class:Q(["tool-btn",I(p).showGrid&&"active"]),onClick:f[5]||(f[5]=U=>I(p).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...f[32]||(f[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:Q(["tool-btn",I(p).snapToGrid&&"active"]),onClick:f[6]||(f[6]=U=>I(p).toggleSnap()),"data-tooltip":"Snap to grid"},[...f[33]||(f[33]=[it('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-a51e7af2><circle cx="5" cy="5" r="1" data-v-a51e7af2></circle><circle cx="12" cy="5" r="1" data-v-a51e7af2></circle><circle cx="19" cy="5" r="1" data-v-a51e7af2></circle><circle cx="5" cy="12" r="1" data-v-a51e7af2></circle><circle cx="12" cy="12" r="1" data-v-a51e7af2></circle><circle cx="19" cy="12" r="1" data-v-a51e7af2></circle><circle cx="5" cy="19" r="1" data-v-a51e7af2></circle><circle cx="12" cy="19" r="1" data-v-a51e7af2></circle><circle cx="19" cy="19" r="1" data-v-a51e7af2></circle></svg>',1)])],2)])]))}},Ef=Ze(If,[["__scopeId","data-v-a51e7af2"]]),Af=["onMousedown"],Mf={key:1,class:"selection-border locked-border"},Pf={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(E){const r=E,d=st(),p=rt(),c=El("canvasScale",j(1)),h=A(()=>d.projectId),y=A(()=>d.currentSlideId),f=A(()=>d.selectedElementIds.includes(r.element.id)),U=A(()=>r.element.locked),se=A(()=>r.element.visible!==!1),H=A(()=>{const le=r.element.content||{};return!!(le.text||le.label||le.question||le.popupTitle||le.popupContent)});let V=!1,be=0,z=0,M=new Map;function a(le){if(!d.snapToGrid||!d.gridSize)return le;const me=d.gridSize;return Math.round(le/me)*me}function N(le){var ce;if(U.value||le.target.classList.contains("resize-handle"))return;const me=le.ctrlKey||le.metaKey||le.shiftKey;f.value?me&&d.selectElement(r.element.id,!0):d.selectElement(r.element.id,me),d.setActiveTool("select"),V=!1,be=le.clientX,z=le.clientY,M.clear();const we=(ce=p.getProject(h.value))==null?void 0:ce.slides.find(ge=>ge.id===y.value);we&&d.selectedElementIds.forEach(ge=>{const re=we.elements.find(B=>B.id===ge);re&&!re.locked&&M.set(ge,{x:re.x,y:re.y})}),window.addEventListener("mousemove",_),window.addEventListener("mouseup",ue),le.stopPropagation()}function _(le){const me=(le.clientX-be)/c.value,we=(le.clientY-z)/c.value;!V&&(Math.abs(me)>3||Math.abs(we)>3)&&(V=!0),V&&M.forEach((ce,ge)=>{const re=ce.x+me,B=ce.y+we;p.updateElement(h.value,y.value,ge,{x:re,y:B},{persist:!1})})}function ue(le){if(V){const me=(le.clientX-be)/c.value,we=(le.clientY-z)/c.value;M.forEach((ce,ge)=>{p.updateElement(h.value,y.value,ge,{x:a(ce.x+me),y:a(ce.y+we)},{persist:!1})}),p.commitProject(h.value)}V||!(le.ctrlKey||le.metaKey||le.shiftKey)&&d.selectedElementIds.length>1&&d.selectElement(r.element.id,!1),V=!1,window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",ue)}const Y=["n","ne","e","se","s","sw","w","nw"];let g=!1,O="",W=0,Ie=0,F=0,Z=0,ne=0,fe=0;function ie(le,me){U.value||(le.stopPropagation(),le.preventDefault(),g=!0,O=me,W=le.clientX,Ie=le.clientY,F=r.element.width,Z=r.element.height,ne=r.element.x,fe=r.element.y,window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",C))}function Ee(le){if(!g)return;const me=c.value,we=(le.clientX-W)/me,ce=(le.clientY-Ie)/me,ge=20;let re=ne,B=fe,S=F,D=Z;if(O.includes("e")&&(S=Math.max(ge,F+we)),O.includes("s")&&(D=Math.max(ge,Z+ce)),O.includes("w")){const ke=Math.max(ge,F-we);re=ne+(F-ke),S=ke}if(O.includes("n")){const ke=Math.max(ge,Z-ce);B=fe+(Z-ke),D=ke}if(d.snapToGrid&&d.gridSize){const ke=d.gridSize;S=Math.round(S/ke)*ke,D=Math.round(D/ke)*ke,re=Math.round(re/ke)*ke,B=Math.round(B/ke)*ke}p.updateElement(h.value,y.value,r.element.id,{x:re,y:B,width:S,height:D})}function C(){g=!1,window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",C)}function L(){["text","heading"].includes(r.element.type)&&d.focusPropertiesSection("content")}const q=A(()=>({position:"absolute",left:`${r.element.x}px`,top:`${r.element.y}px`,width:`${r.element.width}px`,height:`${r.element.height}px`,transform:`rotate(${r.element.rotation||0}deg)`,opacity:r.element.opacity??1,zIndex:r.element.zIndex||1,cursor:U.value?"not-allowed":"move",visibility:se.value?"visible":"hidden",userSelect:"none"}));function K(le){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[le]||"auto"}function ye(le="content"){d.focusPropertiesSection(le)}function Re(){const le=H.value?"improve":r.element.type==="image"?"image":"generate";d.openAIPanel(le)}function Te(){const le=p.duplicateElement(h.value,y.value,r.element.id);le&&(d.selectElement(le.id),d.focusPropertiesSection("geometry"))}function Oe(){p.deleteElement(h.value,y.value,r.element.id),d.clearSelection()}return(le,me)=>(l(),i("div",{class:Q(["element-wrapper",f.value&&"selected",U.value&&"locked"]),style:xe(q.value),onMousedown:N,onDblclick:L},[Al(le.$slots,"default",{},void 0),f.value&&!U.value?(l(),i(oe,{key:0},[me[6]||(me[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:me[3]||(me[3]=Le(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:me[0]||(me[0]=we=>ye("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:me[1]||(me[1]=we=>ye("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:me[2]||(me[2]=we=>ye("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Re},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Te,title:"Duplicate element","aria-label":"Duplicate element"},[...me[4]||(me[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Oe,title:"Delete element","aria-label":"Delete element"},[...me[5]||(me[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(oe,null,ve(Y,we=>e("div",{key:we,class:Q(["resize-handle",`handle-${we}`]),style:xe({cursor:K(we)}),onMousedown:Le(ce=>ie(ce,we),["stop"])},null,46,Af)),64))],64)):R("",!0),f.value&&U.value?(l(),i("div",Mf)):R("",!0)],38))}},Tf=Ze(Pf,[["__scopeId","data-v-d539ca8b"]]),Ht={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(E){const r=E,d=A(()=>r.element.content||{}),p=st(),c=rt(),h=j(!1),y=j(null),f=j("");nt(()=>d.value.text,V=>{h.value||(f.value=V||(r.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function U(){p.selectedElementId===r.element.id&&(h.value=!0,wl(()=>{if(y.value)if(y.value.focus(),typeof y.value.setSelectionRange=="function"){const V=y.value.value.length;y.value.setSelectionRange(V,V)}else{const V=document.createRange();V.selectNodeContents(y.value),V.collapse(!1);const be=window.getSelection();be.removeAllRanges(),be.addRange(V)}}))}function se(V){h.value&&V.stopPropagation()}function H(){h.value=!1;const V=f.value;c.updateElement(p.projectId,p.currentSlideId,r.element.id,{content:{...r.element.content,text:V}})}return(V,be)=>h.value?pe((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:y,"onUpdate:modelValue":be[0]||(be[0]=z=>f.value=z),onBlur:H,onMousedown:se,style:xe({fontSize:(d.value.fontSize||16)+"px",fontFamily:d.value.fontFamily||"Inter, sans-serif",fontWeight:d.value.fontWeight||"normal",fontStyle:d.value.fontStyle||"normal",textDecoration:d.value.textDecoration||"none",textAlign:d.value.textAlign||"left",color:d.value.color||"#1a1a2e",lineHeight:d.value.lineHeight||1.5,textTransform:d.value.textTransform||"none",letterSpacing:(d.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[$e,f.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:U,style:xe({fontSize:(d.value.fontSize||16)+"px",fontFamily:d.value.fontFamily||"Inter, sans-serif",fontWeight:d.value.fontWeight||"normal",fontStyle:d.value.fontStyle||"normal",textDecoration:d.value.textDecoration||"none",textAlign:d.value.textAlign||"left",color:d.value.color||"#1a1a2e",lineHeight:d.value.lineHeight||1.5,textTransform:d.value.textTransform||"none",letterSpacing:(d.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},k(f.value),37))}},Bf={key:0,class:"image-status image-loading"},Nf=["src","alt"],zf={key:2,class:"image-placeholder"},Lf={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},jf={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(E){const r=E,d=j(""),p=j(0),c=j("idle"),h=A(()=>{var se;return Array.isArray((se=r.element.content)==null?void 0:se.fallbackSrcs)?r.element.content.fallbackSrcs:[]});function y(){var se;d.value=((se=r.element.content)==null?void 0:se.src)||"",p.value=0,c.value=d.value?"loading":"empty"}function f(){c.value="loaded"}function U(){const se=h.value[p.value];if(se){p.value+=1,d.value=se,c.value="loading";return}c.value="error"}return nt(()=>{var se,H;return[(se=r.element.content)==null?void 0:se.src,JSON.stringify(((H=r.element.content)==null?void 0:H.fallbackSrcs)||[])]},()=>y(),{immediate:!0}),(se,H)=>{var V,be,z;return l(),i("div",{class:"image-element",style:xe({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((V=E.element.content)==null?void 0:V.borderRadius)||0)+"px",border:`${((be=E.element.content)==null?void 0:be.borderWidth)||0}px solid ${((z=E.element.content)==null?void 0:z.borderColor)||"transparent"}`})},[c.value==="loading"?(l(),i("div",Bf,[...H[0]||(H[0]=[e("span",{class:"image-status-spinner"},null,-1),e("span",null,"Loading image…",-1)])])):R("",!0),d.value&&c.value!=="error"?(l(),i("img",{key:1,src:d.value,alt:E.element.content.alt||"",style:xe({width:"100%",height:"100%",objectFit:E.element.content.objectFit||"cover",display:c.value==="loaded"?"block":"none"}),draggable:"false",onLoad:f,onError:U},null,44,Nf)):R("",!0),c.value==="empty"||c.value==="error"?(l(),i("div",zf,[(l(),i("svg",Lf,[...H[1]||(H[1]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),e("span",null,k(c.value==="error"?"Image unavailable":"Image"),1)])):R("",!0)],4)}}},_f=Ze(jf,[["__scopeId","data-v-cd42b1c3"]]),Df={class:"shape-element",style:{width:"100%",height:"100%"}},qf=["width","height"],Rf=["points","fill","stroke","stroke-width"],Of={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(E){const r=E,d=A(()=>r.element.content||{}),p=A(()=>{const y=d.value.shapeType||"rectangle",f={width:"100%",height:"100%",background:d.value.fillColor||"#6c47ff",border:`${d.value.borderWidth||0}px solid ${d.value.borderColor||"transparent"}`,opacity:d.value.opacity??1};return y==="circle"?{...f,borderRadius:"50%"}:y==="rectangle"?{...f,borderRadius:(d.value.borderRadius||0)+"px"}:f}),c=A(()=>["triangle","star","arrow","diamond"].includes(d.value.shapeType)),h=A(()=>{const y=r.element.width||150,f=r.element.height||100,U=d.value.shapeType;if(U==="triangle")return`${y/2},0 ${y},${f} 0,${f}`;if(U==="diamond")return`${y/2},0 ${y},${f/2} ${y/2},${f} 0,${f/2}`;if(U==="arrow")return`0,${f*.3} ${y*.6},${f*.3} ${y*.6},0 ${y},${f/2} ${y*.6},${f} ${y*.6},${f*.7} 0,${f*.7}`;if(U==="star"){const se=y/2,H=f/2,V=Math.min(y,f)/2,be=V*.4;let z="";for(let M=0;M<10;M++){const a=(M*36-90)*Math.PI/180,N=M%2===0?V:be;z+=`${se+N*Math.cos(a)},${H+N*Math.sin(a)} `}return z.trim()}return""});return(y,f)=>(l(),i("div",Df,[c.value?(l(),i("svg",{key:1,width:E.element.width,height:E.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:h.value,fill:d.value.fillColor||"#6c47ff",stroke:d.value.borderColor||"none","stroke-width":d.value.borderWidth||0},null,8,Rf)],8,qf)):(l(),i("div",{key:0,style:xe(p.value)},null,4))]))}},Ff={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(E){const r=E,d=A(()=>r.element.content||{}),p=A(()=>{const c={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},h=c[d.value.variant||"primary"]||c.primary;return{...h,background:d.value.bgColor||h.background,color:d.value.textColor||h.color,border:d.value.borderColor?`1px solid ${d.value.borderColor}`:h.border,borderRadius:(d.value.borderRadius??8)+"px"}});return(c,h)=>(l(),i("div",{class:"button-element",style:xe({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(d.value.fontSize??15)+"px",fontWeight:d.value.fontWeight??600,letterSpacing:(d.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:d.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...p.value})},k(d.value.label||"Button"),5))}},Vf={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Uf={class:"popup-header"},Wf={class:"popup-body"},Gf={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(E){const r=E,d=A(()=>r.element.content||{}),p=j(!1);function c(h){h.stopPropagation(),p.value=!p.value}return(h,y)=>(l(),i("div",Vf,[e("div",{class:"hotspot-btn",style:xe({width:"100%",height:"100%",background:d.value.bgColor||"#6c47ff",borderRadius:(d.value.borderRadius??999)>=999?"50%":(d.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:d.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Le(c,["stop"])},k(d.value.icon||"?"),5),Et(_t,{name:"fade"},{default:pt(()=>[p.value?(l(),i("div",{key:0,class:"hotspot-popup",style:xe({background:d.value.popupBgColor||"#ffffff",color:d.value.popupTextColor||"#1a1a2e"})},[e("div",Uf,[e("strong",null,k(d.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:y[0]||(y[0]=Le(f=>p.value=!1,["stop"]))},"×")]),e("div",Wf,k(d.value.popupContent||"Add your content in the properties panel."),1)],4)):R("",!0)]),_:1})]))}},Hf=Ze(Gf,[["__scopeId","data-v-ef5f15f6"]]),Yf={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},Jf=["src"],Qf=["src","poster","autoplay","controls","loop","muted"],Xf={key:2,class:"video-placeholder"},Kf={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Zf={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(E){const r=E,d=A(()=>r.element.content||{}),p=A(()=>{const h=d.value.src||"";return h.includes("youtube")||h.includes("youtu.be")}),c=A(()=>{var y,f;const h=d.value.src||"";if(p.value){const U=(y=h.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:y[1];return U?`https://www.youtube.com/embed/${U}`:""}if(h.includes("vimeo.com")){const U=(f=h.match(/vimeo\.com\/(\d+)/))==null?void 0:f[1];return U?`https://player.vimeo.com/video/${U}`:""}return""});return(h,y)=>(l(),i("div",Yf,[c.value?(l(),i("iframe",{key:0,src:c.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,Jf)):d.value.src&&!c.value?(l(),i("video",{key:1,src:d.value.src,poster:d.value.poster,autoplay:d.value.autoplay,controls:d.value.controls!==!1,loop:d.value.loop,muted:d.value.muted,style:xe({width:"100%",height:"100%",objectFit:d.value.objectFit||"cover"})},null,12,Qf)):(l(),i("div",Xf,[(l(),i("svg",Kf,[...y[0]||(y[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),y[1]||(y[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},e1=Ze(Zf,[["__scopeId","data-v-dfea1a16"]]),t1=["stroke"],o1=["src","controls","autoplay","loop"],n1={key:1,style:{"font-size":"11px",color:"#aaa"}},l1={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(E){return(r,d)=>{var p,c,h,y,f,U,se,H,V;return l(),i("div",{class:"audio-element",style:xe({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((p=E.element.content)==null?void 0:p.bgColor)||"#ede7ff",border:`1px solid ${((c=E.element.content)==null?void 0:c.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((h=E.element.content)==null?void 0:h.accentColor)||"#6c47ff","stroke-width":"2"},[...d[1]||(d[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,t1)),e("span",{style:xe({fontSize:"13px",color:((y=E.element.content)==null?void 0:y.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},k(((f=E.element.content)==null?void 0:f.label)||"Audio Player"),5),(U=E.element.content)!=null&&U.src?(l(),i("audio",{key:0,src:E.element.content.src,controls:((se=E.element.content)==null?void 0:se.controls)!==!1,autoplay:(H=E.element.content)==null?void 0:H.autoplay,loop:(V=E.element.content)==null?void 0:V.loop,style:{height:"28px","max-width":"180px"},onMousedown:d[0]||(d[0]=Le(()=>{},["stop"]))},null,40,o1)):(l(),i("span",n1,"No source"))],4)}}},i1={class:"quiz-options"},a1=["onClick"],s1={class:"opt-letter"},r1={class:"opt-text"},d1={key:0},u1={class:"quiz-actions"},c1=["disabled"],p1={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(E){const r=E,d=A(()=>r.element.content||{}),p=j(null),c=j(!1);function h(se){c.value||(p.value=se)}function y(){p.value!==null&&(c.value=!0)}function f(){p.value=null,c.value=!1}const U=A(()=>c.value&&p.value===(d.value.correctIndex??0));return(se,H)=>(l(),i("div",{class:"quiz-element",style:xe({width:"100%",height:"100%",background:d.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":d.value.accentColor||"#6c47ff"})},[e("p",{style:xe({fontSize:"15px",fontWeight:600,color:d.value.questionColor||"#1a1a2e",lineHeight:1.4})},k(d.value.question||"Question text…"),5),e("div",i1,[(l(!0),i(oe,null,ve(d.value.options||[],(V,be)=>(l(),i("div",{key:be,class:Q(["quiz-opt",p.value===be&&"selected",c.value&&be===d.value.correctIndex&&"correct",c.value&&p.value===be&&be!==d.value.correctIndex&&"wrong"]),onClick:z=>h(be)},[e("span",s1,k(String.fromCharCode(65+be)),1),e("span",r1,k(V),1)],10,a1))),128))]),c.value?(l(),i("div",{key:0,class:Q(["quiz-feedback",U.value?"correct":"wrong"])},[te(k(U.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!U.value&&d.value.explanation?(l(),i("span",d1,k(d.value.explanation),1)):R("",!0)],2)):R("",!0),e("div",u1,[c.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:f},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:p.value===null,onClick:y},"Submit",8,c1))])],4))}},v1=Ze(p1,[["__scopeId","data-v-ca2bd187"]]),f1={class:"placeholder-element"},m1={class:"placeholder-prompt"},g1={__name:"PlaceholderElement",props:{element:Object},setup(E){const r=E,d=st(),p=rt();function c(h){let y={type:h};h==="text"?y.content={text:"Click to edit text",fontSize:24}:h==="image"?y.content={src:"",alt:"Image placeholder"}:h==="video"?y.content={src:"",autoplay:!1,controls:!0}:h==="chart"&&(y.content={chartType:"bar",dataText:`A, 10
B, 20`}),p.updateElement(d.projectId,d.currentSlideId,r.element.id,y),d.selectElement(r.element.id)}return(h,y)=>{var f;return l(),i("div",f1,[e("div",m1,k(((f=E.element.content)==null?void 0:f.prompt)||"Add Content"),1),e("div",{class:"placeholder-actions",onMousedown:y[4]||(y[4]=Le(()=>{},["stop"]))},[e("button",{onMousedown:y[0]||(y[0]=Le(U=>c("text"),["stop","prevent"])),title:"Text"},"T",32),e("button",{onMousedown:y[1]||(y[1]=Le(U=>c("image"),["stop","prevent"])),title:"Image"},"I",32),e("button",{onMousedown:y[2]||(y[2]=Le(U=>c("video"),["stop","prevent"])),title:"Media"},"M",32),e("button",{onMousedown:y[3]||(y[3]=Le(U=>c("chart"),["stop","prevent"])),title:"Chart"},"C",32)],32)])}}},b1=Ze(g1,[["__scopeId","data-v-dda6b3cc"]]),y1={key:0,class:"canvas-empty"},h1={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},x1={key:0,class:"canvas-device-frame","aria-hidden":"true"},w1=["value"],k1={class:"canvas-guide-label"},C1={key:5,class:"drop-hint"},S1={class:"canvas-info-bar"},$1=["disabled"],I1={class:"slide-index"},E1=["disabled"],A1={key:0},M1={__name:"EditorCanvas",setup(E){const r=st(),d=rt(),p=j(null),c=j(null),h=j(1),y=A(()=>h.value*r.zoomLevel);Pl("canvasScale",y);const f=A(()=>d.getProject(r.projectId)),U=A(()=>qt(f.value)),se=A(()=>Cl(f.value)),H=A(()=>U.value.width),V=A(()=>U.value.height),be=A(()=>Sl(H.value,V.value)),z=A(()=>{var b,w;return(w=(b=f.value)==null?void 0:b.slides)==null?void 0:w.find(ee=>ee.id===r.currentSlideId)}),M=A(()=>{var b;return[...((b=f.value)==null?void 0:b.slides)||[]].sort((w,ee)=>w.order-ee.order)}),a=A(()=>M.value.findIndex(b=>b.id===r.currentSlideId)),N=A(()=>{var b;return{autoPlay:!1,motionPresets:[],...((b=f.value)==null?void 0:b.settings)||{}}}),_=A(()=>(Array.isArray(N.value.motionPresets)?N.value.motionPresets:[]).filter(b=>b.scope==="group")),ue=A(()=>{const b=new Set(r.selectedElementIds);return Ie.value.filter(w=>b.has(w.id))}),Y=j(""),g=A(()=>z.value?z.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:N.value.autoPlay&&Number(z.value.duration||0)>0?{label:`Auto ${Number(z.value.duration).toFixed(Number(z.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function O(){const b=_.value.find(ee=>ee.id===Y.value);if(!b||!ue.value.length)return;[...ue.value].sort((ee,G)=>(ee.y||0)!==(G.y||0)?(ee.y||0)-(G.y||0):(ee.x||0)-(G.x||0)).forEach((ee,G)=>{if(b.type==="auto"){d.updateElement(r.projectId,r.currentSlideId,ee.id,{animations:[]});return}d.updateElement(r.projectId,r.currentSlideId,ee.id,{animations:[{type:b.type,delay:Math.max(0,Number(b.delay)||0)+G*Math.max(0,Number(b.stepDelay)||0),duration:Math.max(.1,Number(b.duration)||.72)}]})}),d.updateProject(r.projectId,{settings:{...N.value,motionPresets:(N.value.motionPresets||[]).map(ee=>ee.id===b.id?{...ee,usageCount:Math.max(0,Number(ee.usageCount||0))+1,lastUsedAt:Date.now()}:ee)}})}function W(){if(!_.value.length){Y.value="";return}_.value.some(b=>b.id===Y.value)||(Y.value=_.value[0].id)}const Ie=A(()=>{var b;return[...((b=z.value)==null?void 0:b.elements)||[]].sort((w,ee)=>(w.zIndex||0)-(ee.zIndex||0))}),F=A(()=>{const b=z.value;return b?b.backgroundType==="gradient"&&b.backgroundGradient?{background:b.backgroundGradient}:b.backgroundType==="image"&&b.backgroundImage?{backgroundImage:`url(${b.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:b.background||"#fff"}:{background:"#fff"}}),Z=A(()=>`scale(${y.value})`);function ne(){if(!p.value)return;const{clientWidth:b,clientHeight:w}=p.value,ee=(b-80)/H.value,G=(w-80)/V.value;h.value=Math.min(ee,G,1)}let fe=null;yl(()=>{ne(),fe=new ResizeObserver(ne),p.value&&fe.observe(p.value),W()}),hl(()=>fe==null?void 0:fe.disconnect()),nt(_,()=>{W()},{deep:!0,immediate:!0}),nt(U,()=>{ne()},{deep:!0});const ie=j({x:0,y:0}),Ee=j({x:0,y:0}),C=j(!1),L=j(!1),q=j(!1),K=j(null),ye=A(()=>{var b,w;return((b=se.value)==null?void 0:b.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=se.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),Re=A(()=>{if(!ye.value)return null;if(ye.value.tone==="mobile"){const ee=H.value*.08,G=V.value*.05;return{x:ee,y:G,width:H.value-ee*2,height:V.value-G*2}}const b=H.value*.08,w=V.value*.08;return{x:b,y:w,width:H.value-b*2,height:V.value-w*2}}),Te=A(()=>{if(!Re.value)return[];const b=Re.value;return Ie.value.filter(w=>w.visible!==!1).filter(w=>{const ee=Number(w.x||0),G=Number(w.y||0),Pe=ee+Number(w.width||0),Ne=G+Number(w.height||0);return ee<b.x||G<b.y||Pe>b.x+b.width||Ne>b.y+b.height}).map(w=>w.id)}),Oe=A(()=>r.selectedElementIds.filter(b=>Te.value.includes(b)).length),le=A(()=>Te.value.length),me=A(()=>!ye.value||!le.value?null:Oe.value?`${Oe.value} selected ${Oe.value===1?"element is":"elements are"} outside the ${ye.value.label.toLowerCase()}.`:`${le.value} ${le.value===1?"element is":"elements are"} outside the ${ye.value.label.toLowerCase()}.`),we=A(()=>{if(!C.value)return null;const b=Math.min(ie.value.x,Ee.value.x),w=Math.min(ie.value.y,Ee.value.y),ee=Math.abs(Ee.value.x-ie.value.x),G=Math.abs(Ee.value.y-ie.value.y);return{x:b,y:w,width:ee,height:G}});function ce(b){!C.value&&(b.target===c.value||b.target===b.currentTarget)&&r.clearSelection()}function ge(b){return b?Array.from(b.files||[]).some(w=>w.type.startsWith("image/")):!1}function re(b){return b?Array.from(b.types||[]).includes(Yt):!1}function B(b,w,ee){return Math.min(Math.max(b,w),ee)}function S(b,w,ee){const G=Jt(b),Pe=B(w-G.width/2,0,Math.max(0,H.value-G.width)),Ne=B(ee-G.height/2,0,Math.max(0,V.value-G.height));return{x:Pe,y:Ne,bounds:G}}function D(b){if(!re(b))return null;try{const w=b.getData(Yt),ee=w?JSON.parse(w):null;return ee!=null&&ee.id&&d.getContentBlocks(r.projectId).find(G=>G.id===ee.id)||null}catch{return null}}function ke(b,w,ee){if(!c.value||!ee){K.value=null;return}const G=c.value.getBoundingClientRect(),Pe=(b-G.left)/y.value,Ne=(w-G.top)/y.value,We=S(ee,Pe,Ne);K.value={block:ee,x:We.x,y:We.y,bounds:We.bounds}}function Ge(b,w,ee){if(!b||!b.type.startsWith("image/"))return;const G=new FileReader;G.onload=()=>{const Pe=String(G.result||"");if(!Pe)return;const Ne=new Image;Ne.onload=()=>{const We=c.value.getBoundingClientRect(),Xe=(w-We.left)/y.value,de=(ee-We.top)/y.value,Ue=Math.min(420/Ne.width,280/Ne.height,1),je=Math.max(120,Math.round(Ne.width*Ue)),Je=Math.max(80,Math.round(Ne.height*Ue)),yt=Math.max(0,Math.min(H.value-je,Math.round(Xe-je/2))),mt=Math.max(0,Math.min(V.value-Je,Math.round(de-Je/2))),wt=d.addElement(r.projectId,r.currentSlideId,"image",{x:yt,y:mt,width:je,height:Je,content:{src:Pe,alt:b.name,objectFit:"cover"}});wt&&(r.selectElement(wt.id),r.setActiveTool("select"),r.setRightPanel("properties"))},Ne.src=Pe},G.readAsDataURL(b)}function He(b){const w=ge(b.dataTransfer),ee=re(b.dataTransfer);!w&&!ee||(b.preventDefault(),b.dataTransfer.dropEffect="copy",L.value=w,q.value=ee,ee&&ke(b.clientX,b.clientY,D(b.dataTransfer)))}function x(b){var w;(w=b.currentTarget)!=null&&w.contains(b.relatedTarget)||(L.value=!1,q.value=!1,K.value=null)}function Ae(b){const w=ge(b.dataTransfer),ee=re(b.dataTransfer);if(!w&&!ee)return;if(b.preventDefault(),L.value=!1,q.value=!1,K.value=null,ee){try{const Pe=D(b.dataTransfer);if(!Pe)return;const Ne=c.value.getBoundingClientRect(),We=(b.clientX-Ne.left)/y.value,Xe=(b.clientY-Ne.top)/y.value,de=S(Pe,We,Xe),Me=d.insertContentBlock(r.projectId,r.currentSlideId,Pe.id,{x:de.x,y:de.y});Me.length&&(r.setSelection(Me.map(lt=>lt.id)),r.setActiveTool("select"),r.focusPropertiesSection("content"))}catch(Pe){console.warn("Failed to drop block onto canvas.",Pe)}return}const G=Array.from(b.dataTransfer.files||[]).find(Pe=>Pe.type.startsWith("image/"));G&&Ge(G,b.clientX,b.clientY)}function Fe(b){if(ue.value.length<2)return;const w=[...ue.value].sort((de,Me)=>(de.zIndex||0)-(Me.zIndex||0)),ee=Math.min(...w.map(de=>Number(de.x||0))),G=Math.min(...w.map(de=>Number(de.y||0))),Pe=Math.max(...w.map(de=>Number(de.x||0)+Number(de.width||0))),Ne=Math.max(...w.map(de=>Number(de.y||0)+Number(de.height||0))),We=ee+(Pe-ee)/2,Xe=G+(Ne-G)/2;if(b==="align-left"&&w.forEach(de=>d.updateElement(r.projectId,r.currentSlideId,de.id,{x:ee},{persist:!1})),b==="align-center"&&w.forEach(de=>{const Me=Number(de.width||0);d.updateElement(r.projectId,r.currentSlideId,de.id,{x:We-Me/2},{persist:!1})}),b==="align-right"&&w.forEach(de=>{const Me=Number(de.width||0);d.updateElement(r.projectId,r.currentSlideId,de.id,{x:Pe-Me},{persist:!1})}),b==="align-top"&&w.forEach(de=>d.updateElement(r.projectId,r.currentSlideId,de.id,{y:G},{persist:!1})),b==="align-middle"&&w.forEach(de=>{const Me=Number(de.height||0);d.updateElement(r.projectId,r.currentSlideId,de.id,{y:Xe-Me/2},{persist:!1})}),b==="align-bottom"&&w.forEach(de=>{const Me=Number(de.height||0);d.updateElement(r.projectId,r.currentSlideId,de.id,{y:Ne-Me},{persist:!1})}),b==="distribute-horizontal"){const de=[...w].sort((je,Je)=>(je.x||0)-(Je.x||0)),Me=de.reduce((je,Je)=>je+Number(Je.width||0),0),lt=de.length>1?(Pe-ee-Me)/(de.length-1):0;let Ue=ee;de.forEach(je=>{d.updateElement(r.projectId,r.currentSlideId,je.id,{x:Ue},{persist:!1}),Ue+=Number(je.width||0)+lt})}if(b==="distribute-vertical"){const de=[...w].sort((je,Je)=>(je.y||0)-(Je.y||0)),Me=de.reduce((je,Je)=>je+Number(Je.height||0),0),lt=de.length>1?(Ne-G-Me)/(de.length-1):0;let Ue=G;de.forEach(je=>{d.updateElement(r.projectId,r.currentSlideId,je.id,{y:Ue},{persist:!1}),Ue+=Number(je.height||0)+lt})}d.commitProject(r.projectId)}function Ve(b){const w=r.activeTool;if(b.target!==c.value&&b.target!==b.currentTarget)return;b.preventDefault(),b.stopPropagation();const ee=c.value.getBoundingClientRect(),G=(b.clientX-ee.left)/y.value,Pe=(b.clientY-ee.top)/y.value;if(w==="select"){C.value=!0,ie.value={x:G,y:Pe},Ee.value={x:G,y:Pe};const Xe=Me=>{Ee.value={x:(Me.clientX-ee.left)/y.value,y:(Me.clientY-ee.top)/y.value}},de=()=>{window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseup",de);const Me=we.value;if(Me&&(Me.width>2||Me.height>2)){const lt=Ie.value.filter(Ue=>{const je=Ue.x,Je=Ue.y,yt=Ue.width||100,mt=Ue.height||100;return je<Me.x+Me.width&&je+yt>Me.x&&Je<Me.y+Me.height&&Je+mt>Me.y}).map(Ue=>Ue.id);lt.length>0?r.setSelection(lt):r.clearSelection()}else r.clearSelection();setTimeout(()=>{C.value=!1},0)};window.addEventListener("mousemove",Xe),window.addEventListener("mouseup",de);return}const Ne=Xe=>r.snapToGrid?Math.round(Xe/r.gridSize)*r.gridSize:Xe,We=d.addElement(r.projectId,r.currentSlideId,w,{x:Ne(G-75),y:Ne(Pe-40)});We&&(r.selectElement(We.id),r.setActiveTool("select"),r.setRightPanel("properties"))}const Qe=A(()=>{if(!r.showGrid)return{};const b=r.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${b}px ${b}px`}}),Ye={text:Ht,heading:Ht,image:_f,shape:Of,button:Ff,hotspot:Hf,video:e1,audio:l1,quiz:v1,chart:li,tabs:ni,accordion:oi,flipcard:ti,stepper:ei,poll:Zl,labeledimage:Kl,matching:Xl,sorting:Ql,cloze:Jl,scenario:Yl,progress:Hl,placeholder:b1,divider:"div"};function Mt(b){return Ye[b]||Ht}function ct(b){var w,ee;return b.type!=="divider"?{}:{borderTop:`${((w=b.content)==null?void 0:w.thickness)||2}px solid ${((ee=b.content)==null?void 0:ee.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const De=j({show:!1,x:0,y:0,elId:null});function vt(b,w){b.preventDefault(),De.value={show:!0,x:b.clientX,y:b.clientY,elId:w},r.selectElement(w),setTimeout(()=>window.addEventListener("click",et,{once:!0}),0)}function et(){De.value.show=!1}function At(){if(De.value.elId){const b=d.duplicateElement(r.projectId,r.currentSlideId,De.value.elId);b&&r.selectElement(b.id)}et()}function Pt(){De.value.elId&&(d.deleteElement(r.projectId,r.currentSlideId,De.value.elId),r.clearSelection()),et()}function Tt(){De.value.elId&&d.reorderElement(r.projectId,r.currentSlideId,De.value.elId,"up"),et()}function Bt(){De.value.elId&&d.reorderElement(r.projectId,r.currentSlideId,De.value.elId,"down"),et()}function Nt(){const b=a.value,w=d.addSlide(r.projectId,b);w&&r.setCurrentSlide(w.id)}function zt(){const b=a.value;b>0&&r.setCurrentSlide(M.value[b-1].id)}function ft(){const b=a.value;b<M.value.length-1&&r.setCurrentSlide(M.value[b+1].id)}return(b,w)=>{var ee;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:p},[z.value?(l(),i(oe,{key:1},[e("div",{class:Q(["canvas-zoom-wrapper",[ye.value&&`canvas-zoom-wrapper-${ye.value.tone}`]]),style:xe({transform:Z.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:c,class:"slide-canvas",style:xe({width:H.value+"px",height:V.value+"px",...F.value,...Qe.value}),onClick:ce,onMousedown:Ve,onDragover:He,onDragleave:x,onDrop:Ae,onContextmenu:w[3]||(w[3]=Le(()=>{},["prevent"]))},[ye.value?(l(),i("div",x1)):R("",!0),I(r).multiSelection&&_.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=Le(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),pe(e("select",{"onUpdate:modelValue":w[0]||(w[0]=G=>Y.value=G),class:"selection-preset-select"},[(l(!0),i(oe,null,ve(_.value,G=>(l(),i("option",{key:G.id,value:G.id},k(G.name),9,w1))),128))],512),[[jt,Y.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Le(O,["stop"])},"Apply")],32)):R("",!0),me.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=Le(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,k(me.value),1)],32)):R("",!0),K.value?(l(),i("div",{key:3,class:"block-drop-preview",style:xe({left:`${K.value.x}px`,top:`${K.value.y}px`,width:`${K.value.bounds.width}px`,height:`${K.value.bounds.height}px`})},[(l(!0),i(oe,null,ve(K.value.block.elements,(G,Pe)=>{var Ne,We,Xe,de;return l(),i("div",{key:`${K.value.block.id}-preview-${Pe}`,class:Q(["block-drop-preview-el",`block-drop-preview-${G.type}`]),style:xe({left:`${Number(G.x||0)-K.value.bounds.minX}px`,top:`${Number(G.y||0)-K.value.bounds.minY}px`,width:`${Number(G.width||0)}px`,height:`${Number(G.height||0)}px`,borderRadius:G.type==="shape"&&((Ne=G.content)==null?void 0:Ne.shapeType)==="circle"?"50%":`${Number(((We=G.content)==null?void 0:We.borderRadius)||12)}px`,background:G.type==="shape"?((Xe=G.content)==null?void 0:Xe.fillColor)||"rgba(108,71,255,.18)":G.type==="button"?((de=G.content)==null?void 0:de.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(G.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(G.type)?(l(),i(oe,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):R("",!0)],6)}),128))],4)):R("",!0),(l(!0),i(oe,null,ve(Ie.value,G=>(l(),ot(Tf,{key:G.id,element:G,onContextmenu:Le(Pe=>vt(Pe,G.id),["stop"])},{default:pt(()=>[(l(),ot(Ml(Mt(G.type)),{element:G,style:xe(G.type==="divider"?ct(G):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),ye.value?(l(),i("div",{key:4,class:Q(["canvas-guide",[`canvas-guide-${ye.value.tone}`,le.value&&"canvas-guide-warning-state"]]),style:xe(ye.value.style),"aria-hidden":"true"},[e("span",k1,k(ye.value.label)+" · "+k(be.value),1)],6)):R("",!0),I(r).activeTool!=="select"||L.value||q.value?(l(),i("div",C1,k(q.value?"Drop block to insert it here":L.value?"Drop image to insert it on this slide":`Click anywhere to add ${I(r).activeTool}`),1)):R("",!0),C.value&&we.value?(l(),i("div",{key:6,class:"selection-marquee",style:xe({left:we.value.x+"px",top:we.value.y+"px",width:we.value.width+"px",height:we.value.height+"px"})},null,4)):R("",!0)],36)],6),e("div",S1,[e("button",{class:"bar-btn",onClick:Nt},"Add page"),e("button",{class:"bar-btn icon",onClick:zt,disabled:a.value<=0},"◀",8,$1),e("span",I1,k(a.value+1)+" / "+k(M.value.length),1),e("button",{class:"bar-btn icon",onClick:ft,disabled:a.value>=M.value.length-1},"▶",8,E1),e("span",null,k(H.value)+" × "+k(V.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,k(((ee=z.value.elements)==null?void 0:ee.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:Q(["playback-badge",`playback-badge-${g.value.tone}`])},k(g.value.label),3),I(r).hasSelection?(l(),i("span",A1,"· "+k(I(r).selectedElementIds.length)+" selected",1)):R("",!0),I(r).multiSelection?(l(),i(oe,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=G=>Fe("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=G=>Fe("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=G=>Fe("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=G=>Fe("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=G=>Fe("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=G=>Fe("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=G=>Fe("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=G=>Fe("distribute-vertical"))},"Space V")],64)):R("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=G=>I(r).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",y1,[(l(),i("svg",h1,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),ot(xl,{to:"body"},[De.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:xe({left:De.value.x+"px",top:De.value.y+"px"})},[e("button",{class:"ctx-item",onClick:At},"Duplicate"),e("button",{class:"ctx-item",onClick:Tt},"Bring Forward"),e("button",{class:"ctx-item",onClick:Bt},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Pt},"Delete")],4)):R("",!0)]))],512)}}},P1=Ze(M1,[["__scopeId","data-v-c34e22ca"]]),T1={class:"ai-panel"},B1={class:"ai-mode-tabs"},N1=["onClick"],z1={class:"ai-content"},L1={class:"form-group"},j1={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},_1={key:0,class:"form-group"},D1={key:1,class:"form-group"},q1={class:"layout-label-row"},R1={class:"layout-current-hint"},O1={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},F1=["onClick"],V1={class:"layout-preset-title"},U1={class:"layout-preset-hint"},W1={key:2,class:"form-group"},G1={key:3,class:"form-group"},H1={class:"layout-label-row"},Y1={class:"layout-current-hint"},J1={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},Q1={key:4,class:"form-group"},X1={class:"layout-label-row"},K1={class:"layout-current-hint"},Z1={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},em=["onClick"],tm={class:"layout-preset-title"},om={class:"layout-preset-hint"},nm={class:"form-group"},lm={class:"form-group"},im={class:"prompt-label-row"},am={key:1,class:"prompt-auto-badge"},sm={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},rm={key:6,class:"selected-source-card"},dm={class:"result-header"},um={class:"source-count-badge"},cm={class:"selected-source-preview"},pm={class:"selected-source-actions"},vm=["disabled"],fm=["disabled"],mm={key:0,class:"spinner"},gm={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},bm={key:7,class:"creative-options-wrap"},ym={class:"result-header"},hm={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},xm={key:1,class:"creative-options-list"},wm={class:"creative-title"},km={class:"creative-angle"},Cm=["onClick"],Sm={class:"form-group"},$m={class:"quiz-config-row"},Im={class:"form-group",style:{flex:"1"}},Em={class:"form-group",style:{flex:"1"}},Am={class:"form-group"},Mm={class:"qtype-btns"},Pm=["onClick"],Tm={class:"qtype-icon"},Bm={class:"form-group"},Nm={class:"form-group"},zm={class:"prompt-label-row"},Lm={key:1,class:"prompt-auto-badge"},jm=["disabled"],_m={key:0,class:"spinner"},Dm={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},qm={key:0,class:"quiz-results"},Rm={class:"quiz-results-header"},Om={class:"form-label"},Fm={class:"quiz-header-actions"},Vm={class:"regen-row"},Um=["disabled"],Wm={key:0,class:"spinner spinner-sm"},Gm={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Hm=["disabled"],Ym={class:"quiz-card-header"},Jm={class:"quiz-card-check"},Qm=["onUpdate:modelValue"],Xm={class:"q-num"},Km={class:"q-badges"},Zm={class:"badge type-badge"},eg={class:"q-question"},tg={class:"q-options"},og={class:"q-option-letter"},ng={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},lg={key:0,class:"q-explanation"},ig=["disabled"],ag={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},sg=["disabled"],rg={key:0,class:"spinner"},dg={key:0,class:"selected-text-preview"},ug={class:"text-preview"},cg={key:1,class:"ai-hint"},pg={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},vg=["disabled"],fg={key:0,class:"spinner"},mg={key:0,class:"selected-text-preview"},gg={class:"text-preview"},bg={key:1,class:"ai-hint"},yg={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},hg=["disabled"],xg={key:0,class:"spinner"},wg={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},kg={class:"result-header"},Cg={class:"result-actions"},Sg=["disabled"],$g={class:"textarea result-display"},Ig={key:0,class:"demo-notice",style:{"margin-bottom":"var(--space-3)"}},Eg={key:1,class:"ai-error",style:{"margin-bottom":"var(--space-3)"}},Ag={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mg=["disabled"],Pg={key:0,class:"spinner"},Tg={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Bg={class:"textarea result-display",style:{color:"var(--color-primary)"}},Ng={key:6,class:"ai-settings"},zg={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Lg=["value"],jg={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},_g=["value","placeholder"],Dg={class:"form-hint"},qg={key:0,class:"demo-notice"},Rg={key:1,class:"demo-notice"},Og={key:7,class:"result-area"},Fg={class:"result-header"},Vg={class:"result-pre"},Ug={class:"result-actions"},Wg=["disabled"],Gg={key:8,class:"ai-error"},Hg={__name:"AIAssistant",setup(E){const r=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"cloze",label:"Fill-in-the-Blank",hint:"Interactive fill-in-the-blank text.",promptHint:"Create an interactive fill-in-the-blank activity. Provide a paragraph with a few key words wrapped in [brackets] to indicate blanks.",schema:'{ "layout": "cloze", "title": "...", "subtitle": "...", "callout": "...", "cloze": { "text": "A sentence about the topic where the [key word] is in brackets." } }'},{id:"scenario",label:"Scenario",hint:"Branching scenario with choices.",promptHint:"Create a branching scenario. Provide a starting situation from the agent, and 2-3 potential responses from the user.",schema:'{ "layout": "scenario", "title": "...", "subtitle": "...", "callout": "...", "scenario": { "agentMessage": "...", "userOptions": ["..."] } }'},{id:"progress",label:"Progress",hint:"A step-by-step progress indicator.",promptHint:"Create a progress overview representing the users current learning status. Provide realistic mock values.",schema:'{ "layout": "progress", "title": "...", "subtitle": "...", "callout": "...", "progress": { "level": 4, "xp": 350, "percent": 65 } }'},{id:"poll",label:"Poll",hint:"An interactive poll or survey.",promptHint:"Create an interactive poll question with 3-4 options. Provide realistic mock vote counts.",schema:'{ "layout": "poll", "title": "...", "subtitle": "...", "callout": "...", "poll": { "question": "...", "options": [{ "text": "...", "votes": 12 }] } }'},{id:"matching",label:"Matching",hint:"A drag-and-drop matching activity.",promptHint:"Create a matching activity with 3-4 pairs of related concepts (e.g. term and definition).",schema:'{ "layout": "matching", "title": "...", "subtitle": "...", "callout": "...", "matching": { "pairs": [{ "left": "...", "right": "..." }] } }'},{id:"sorting",label:"Sorting",hint:"A sorting activity.",promptHint:"Create an activity where items need to be sorted into correct order. Provide the items in random order.",schema:'{ "layout": "sorting", "title": "...", "subtitle": "...", "callout": "...", "sorting": { "items": [{ "text": "...", "correctOrder": 0 }] } }'},{id:"labeledimage",label:"Labeled Image",hint:"An image with interactive hotspots.",promptHint:"Define 2-3 standard hotspots (x, y percentages) with labels and descriptions over a concept.",schema:'{ "layout": "labeledimage", "title": "...", "subtitle": "...", "callout": "...", "labeledimage": { "markers": [{ "x": 25, "y": 35, "label": "1", "title": "...", "description": "..." }] } }'}],d={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function p(s,n="classic"){const v=String(s||n||"classic").trim().toLowerCase();return r.some($=>$.id===v)?v:n}function c(s,n=""){return String(s??n).replace(/^\s*[-•]\s*/,"").trim()||n}function h(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(`
`):[]).map(v=>c(v)).filter(Boolean)}function y(s,n,v){const $=[...s];for(;$.length<n;)$.push(v($.length));return $.slice(0,n)}function f(s,n){const v=Array.isArray(s)?s.map((m,J)=>({title:c(m==null?void 0:m.title,`Card ${J+1}`),body:c((m==null?void 0:m.body)||(m==null?void 0:m.text)||(m==null?void 0:m.description),"Add supporting detail.")})).filter(m=>m.title||m.body):[],$=n.map((m,J)=>({title:`Point ${J+1}`,body:m}));return y(v.length?v:$,3,m=>({title:`Point ${m+1}`,body:"Add supporting detail."}))}function U(s,n){const v=h(s==null?void 0:s.leftPoints),$=h(s==null?void 0:s.rightPoints),m=n.slice(0,Math.max(1,Math.ceil(n.length/2))),J=n.slice(Math.max(1,Math.ceil(n.length/2)));return{leftTitle:c(s==null?void 0:s.leftTitle,"Option A"),leftPoints:y(v.length?v:m,3,he=>`Left point ${he+1}`),rightTitle:c(s==null?void 0:s.rightTitle,"Option B"),rightPoints:y($.length?$:J,3,he=>`Right point ${he+1}`)}}function se(s,n){const v=Array.isArray(s)?s.map((m,J)=>({value:c(m==null?void 0:m.value,`${J+1}`),label:c(m==null?void 0:m.label,`Metric ${J+1}`)})).filter(m=>m.value||m.label):[],$=n.map((m,J)=>{const[he,...tt]=m.split(/[:\-]/);return{value:c(he,`${J+1}`),label:c(tt.join(" ").trim(),m)}});return y(v.length?v:$,3,m=>({value:`${m+1}`,label:`Metric ${m+1}`}))}function H(s,n){const v=Array.isArray(s)?s.map((m,J)=>({title:c(m==null?void 0:m.title,`Phase ${J+1}`),detail:c((m==null?void 0:m.detail)||(m==null?void 0:m.description),"Explain the milestone.")})).filter(m=>m.title||m.detail):[],$=n.map((m,J)=>({title:`Phase ${J+1}`,detail:m}));return y(v.length?v:$,4,m=>({title:`Phase ${m+1}`,detail:"Explain the milestone."}))}function V(s,n){const v=Array.isArray(s)?s.map((m,J)=>({question:c(m==null?void 0:m.question,`Question ${J+1}?`),answer:c(m==null?void 0:m.answer,"Add the short answer here.")})).filter(m=>m.question||m.answer):[],$=n.map((m,J)=>({question:`Question ${J+1}?`,answer:m}));return y(v.length?v:$,3,m=>({question:`Question ${m+1}?`,answer:"Add the short answer here."}))}function be(s,n){const v=Array.isArray(s)?s.map((m,J)=>({title:c(m==null?void 0:m.title,`Step ${J+1}`),detail:c((m==null?void 0:m.detail)||(m==null?void 0:m.description),"Add the step detail here.")})).filter(m=>m.title||m.detail):[],$=n.map((m,J)=>({title:`Step ${J+1}`,detail:m}));return y(v.length?v:$,3,m=>({title:`Step ${m+1}`,detail:"Add the step detail here."}))}const z=Nl(),M=st(),a=rt(),N=A(()=>z.apiProvider==="gemini"?"Gemini":"OpenAI"),_=A(()=>z.apiProvider==="gemini"?"AIza...":"sk-..."),ue=A(()=>z.apiProvider==="gemini"?"Gemini API keys from Google AI Studio work for text features on the free tier. We provide free image generation via Pollinations.ai when Gemini is selected. The key is stored locally in your browser and never sent to our servers.":"Key is stored locally in your browser. It is never sent to our servers."),Y=j("generate"),g=j(""),O=j(""),W=j("");nt(Y,()=>{W.value=""}),nt(()=>M.aiPanelMode,s=>{s&&(Y.value=s)},{immediate:!0});const Ie=j(4),F=j("general"),Z=j("Spanish"),ne=j(""),fe=j(""),ie=j(""),Ee=j(!1),C=j("single"),L=j("classic"),q=j("mixed"),K=j(5),ye=j("slide"),Re=j([]),Te=j(""),Oe=A(()=>r.find(s=>s.id===L.value)||r[0]),le=A(()=>{const s=O.value.trim()||"[your topic]";if(C.value==="deck"){let $=`Create a complete ${K.value}-slide learning deck about "${s}".`;return fe.value.trim()&&($+=`
Additional context: ${fe.value.trim()}`),$+=`
Deck layout strategy: ${q.value}`,q.value==="single"?$+=`
Use the ${L.value} layout for every slide.`:$+=`
Mix layouts across the deck when appropriate.`,$+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process|cloze|scenario|progress|poll|matching|sorting|labeledimage" }] }`,$+=`
Make each slide distinct, logically sequenced, and specific to "${s}".`,$}let v=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[F.value]||"educational slide"} about "${s}".`;return fe.value.trim()&&(v+=`
Additional context: ${fe.value.trim()}`),v+=`
Layout mode: ${L.value}`,v+=`
Layout instruction: ${Oe.value.promptHint}`,v+=`
Return ONLY valid JSON matching this shape: ${Oe.value.schema}`,v+=`
Make all content specific to "${s}" — no generic placeholders.`,v});nt(le,s=>{Ee.value||(ie.value=s)},{immediate:!0});function me(){ie.value=le.value,Ee.value=!1}const we=j(""),ce=j("intermediate"),ge=j("multiple-choice"),re=j(""),B=j([]),S=j(""),D=j(!1),ke=A(()=>{const s=we.value.trim()||"[your topic]",n={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},v={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let $=`Generate ${Ie.value} ${n[ce.value]} ${v[ge.value]} quiz questions about "${s}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return re.value.trim()&&($+=`
Learning objective: ${re.value.trim()}`),$});nt(ke,s=>{D.value||(S.value=s)},{immediate:!0});function Ge(){S.value=ke.value,D.value=!1}const He=A(()=>a.getProject(M.projectId)),x=A(()=>{var s,n;return(n=(s=He.value)==null?void 0:s.slides)==null?void 0:n.find(v=>v.id===M.currentSlideId)}),Ae=A(()=>{var s,n;return M.selectedElementId?(n=(s=x.value)==null?void 0:s.elements)==null?void 0:n.find(v=>v.id===M.selectedElementId):null}),Fe=A(()=>{var n;const s=new Set(M.selectedElementIds);return(((n=x.value)==null?void 0:n.elements)||[]).filter(v=>{var $;return s.has(v.id)&&typeof(($=v==null?void 0:v.content)==null?void 0:$.text)=="string"&&v.content.text.trim()})}),Ve=A(()=>Fe.value.map(s=>s.content.text.trim()).filter(Boolean).join(`

`));async function Qe(){if(!O.value.trim()&&!ie.value.trim())return;if(W.value="",Re.value=[],Te.value="",C.value==="deck"){const n=await z.generateSlideDeck(O.value,K.value,{objective:fe.value,customPrompt:ie.value,layoutStrategy:q.value,layoutMode:L.value});if(n!=null&&n.length){const v=n.map($=>Ye($));W.value=JSON.stringify({slides:v},null,2),je(v,{replaceGenerated:!0})}return}if(ye.value==="options"){await mt();return}const s=await z.generateSlideContent(O.value,F.value,fe.value,ie.value,{layoutMode:L.value});if(s){const n=Ye(s);W.value=JSON.stringify(n,null,2),Je(n,{replaceGenerated:!0})}}function Ye(s){var m;const n=s&&typeof s=="object"?s:{},v=h(n.bullets),$=p(n.layout||((m=n.design)==null?void 0:m.layout),C.value==="deck"&&q.value==="mixed"?"classic":L.value);return{title:String(n.title||O.value||"Untitled Slide").trim(),subtitle:String(n.subtitle||"").trim(),bullets:v,callout:String(n.callout||"").trim(),layout:$,cards:f(n.cards,v),comparison:U(n.comparison,v),metrics:se(n.metrics,v),timeline:H(n.timeline,v),faqs:V(n.faqs,v),process:be(n.process,v),cloze:n.cloze||{text:""},scenario:n.scenario||{agentMessage:"",userOptions:[]},progress:n.progress||{level:4,xp:350,percent:65},poll:n.poll||{question:"",options:[]},matching:n.matching||{pairs:[]},sorting:n.sorting||{items:[]},labeledimage:n.labeledimage||{markers:[]}}}function Mt(s,n){var m,J,he;const v=(J=(m=a.getProject(s))==null?void 0:m.slides)==null?void 0:J.find(tt=>tt.id===n);if(!((he=v==null?void 0:v.elements)!=null&&he.length))return;v.elements.filter(tt=>{var P;return((P=tt.meta)==null?void 0:P.source)==="ai-content"}).map(tt=>tt.id).forEach(tt=>{a.deleteElement(s,n,tt)})}function ct(s,n,v,$){return a.addElement(s,n,v,{...$,meta:{...$.meta||{},source:"ai-content"}})}function De(s){const n=Ul.find($=>$.id===s);if(!n)return null;const v=Wl(JSON.parse(JSON.stringify(n)),s);return v.elements=v.elements.map($=>({...$,meta:{...$.meta||{},source:"ai-content"}})),v}function vt(s,n){n&&s.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:n,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function et(s,n){if(!n)return;const v=Jt(s);s.elements.push({type:"text",x:0,y:v.height+18,width:Math.max(v.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${n}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function At(s){const n=Array.isArray(s)?s:[];if(!n.length)return{minX:40,minY:54,width:0,height:0};const v=Math.min(...n.map(he=>Number(he.x||0))),$=Math.min(...n.map(he=>Number(he.y||0))),m=Math.max(...n.map(he=>Number(he.x||0)+Number(he.width||0))),J=Math.max(...n.map(he=>Number(he.y||0)+Number(he.height||0)));return{minX:v,minY:$,width:Math.max(0,m-v),height:Math.max(0,J-$)}}function Pt(s,n){var J;const v=a.getProject(s),$=Jt(n),m=Number(((J=v==null?void 0:v.settings)==null?void 0:J.slideWidth)||960);return{x:Math.max(40,Math.round((m-$.width)/2)),y:54}}function Tt(s){const n=De(d.cards);if(!n)return null;const v=s.cards;return n.elements[0].content.text=s.title,n.elements[1].content.text=s.subtitle||s.callout||"Use the three cards to frame the main ideas.",v.forEach(($,m)=>{n.elements[5+m].content.text=$.title,n.elements[8+m].content.text=$.body}),s.callout&&s.subtitle&&et(n,s.callout),n}function Bt(s){const n=De(d.comparison);return n?(n.elements[0].content.text=s.title,n.elements[3].content.text=s.comparison.leftTitle,n.elements[4].content.text=s.comparison.rightTitle,n.elements[5].content={...n.elements[5].content,text:s.comparison.leftPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},n.elements[6].content={...n.elements[6].content,text:s.comparison.rightPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},vt(n,s.subtitle),et(n,s.callout),n):null}function Nt(s){const n=De(d.metrics);return n?(n.elements[0].content.text=s.title,s.metrics.forEach((v,$)=>{n.elements[4+$].content.text=v.value,n.elements[7+$].content.text=v.label}),vt(n,s.subtitle),et(n,s.callout),n):null}function zt(s){const n=De(d.timeline);return n?(n.elements[0].content.text=s.title,s.timeline.forEach((v,$)=>{n.elements[6+$].content={...n.elements[6+$].content,text:`${v.title}
${v.detail}`,fontSize:16,lineHeight:1.35}}),vt(n,s.subtitle),et(n,s.callout),n):null}function ft(s){const n=De(d.faq);return n?(n.elements[0].content.text=s.title,s.faqs.forEach((v,$)=>{n.elements[4+$].content={...n.elements[4+$].content,text:`${v.question}
${v.answer}`,fontSize:16,lineHeight:1.35},n.elements[4+$].height=44}),vt(n,s.subtitle),et(n,s.callout),n):null}function b(s){const n=De(d.process);return n?(n.elements[0].content.text=s.title,s.process.forEach((v,$)=>{n.elements[8+$].content.text=v.title,n.elements[11+$].content.text=v.detail}),vt(n,s.subtitle),et(n,s.callout),n):null}function w(s,n,v,$,m){const J=[];s.title&&J.push({type:"heading",x:0,y:0,width:800,height:80,content:{text:s.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}});let he=s.title?100:0;s.subtitle&&(J.push({type:"text",x:0,y:he,width:800,height:40,content:{text:s.subtitle,fontSize:16,fontWeight:"500",textAlign:"center",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}}),he+=60);const tt=Math.max(0,(800-v)/2);J.push({type:n,x:tt,y:he,width:v,height:$,content:m()});const P={id:`generated-${crypto.randomUUID?crypto.randomUUID():Date.now()}`,type:"group",elements:J};return s.callout&&et(P,s.callout),P}function ee(s){const n=s.cloze||{};return w(s,"cloze",600,240,()=>({title:"Fill in the blanks",text:n.text||"An assessment should align closely with the [learning] objectives.",bgColor:"#ffffff",textColor:"#1e293b",fontSize:16,borderRadius:8}))}function G(s){var J;const n=s.scenario||{},v=n.agentMessage||"Welcome to this scenario. What will you do first?",$=(J=n.userOptions)!=null&&J.length?n.userOptions:["I will analyze the requirements."],m=[{role:"agent",text:v}];return $.forEach(he=>m.push({role:"user",text:typeof he=="string"?he:he.text})),w(s,"scenario",600,360,()=>({bgColor:"#f8fafc",borderRadius:8,messages:m}))}function Pe(s){const n=s.progress||{};return w(s,"progress",400,200,()=>({title:"Your Progress",bgColor:"#ffffff",titleColor:"#0f172a",textColor:"#64748b",fillColor:"#10b981",borderRadius:8,mockXP:n.xp||350,mockLevel:n.level||4,mockPercent:n.percent||65}))}function Ne(s){var m;const n=s.poll||{},$=((m=n.options)!=null&&m.length?n.options:[{text:"Option A",votes:12},{text:"Option B",votes:24}]).map((J,he)=>({id:String(he+1),text:J.text||String(J),votes:J.votes||0}));return w(s,"poll",600,360,()=>({question:n.question||"What is your favorite topic?",options:$,showResults:!1,barColor:"#cbd5e1",barSelectedColor:"#6c47ff",trackColor:"#f1f5f9",textColor:"#1e293b",bgColor:"#ffffff"}))}function We(s){var m;const n=s.matching||{},$=((m=n.pairs)!=null&&m.length?n.pairs:[{left:"Concept 1",right:"Detail 1"},{left:"Concept 2",right:"Detail 2"}]).map((J,he)=>({id:String(he+1),left:J.left,right:J.right}));return w(s,"matching",600,360,()=>({title:"Match the concepts",bgColor:"#ffffff",titleColor:"#0f172a",accentColor:"#6c47ff",accentBgColor:"#f3f0ff",pairs:$}))}function Xe(s){var m;const n=s.sorting||{},$=((m=n.items)!=null&&m.length?n.items:[{text:"Step 1",correctOrder:0},{text:"Step 2",correctOrder:1}]).map((J,he)=>({id:String(he+1),text:J.text,correctOrder:J.correctOrder??he}));return w(s,"sorting",500,360,()=>({title:"Sort items correctly",bgColor:"#ffffff",titleColor:"#0f172a",accentColor:"#6c47ff",items:$}))}function de(s){var m;const n=s.labeledimage||{},$=((m=n.markers)!=null&&m.length?n.markers:[{x:25,y:35,label:"1",title:"Point 1",description:"Description 1"},{x:75,y:65,label:"2",title:"Point 2",description:"Description 2"}]).map((J,he)=>({id:String(he+1),x:J.x||50,y:J.y||50,label:J.label||String(he+1),title:J.title||`Point ${he+1}`,description:J.description||""}));return w(s,"labeledimage",600,400,()=>({src:"",borderRadius:8,markerColor:"#6c47ff",markerTextColor:"#ffffff",markers:$}))}function Me(s){switch(s.layout){case"cards":return Tt(s);case"comparison":return Bt(s);case"metrics":return Nt(s);case"timeline":return zt(s);case"faq":return ft(s);case"process":return b(s);case"cloze":return ee(s);case"scenario":return G(s);case"progress":return Pe(s);case"poll":return Ne(s);case"matching":return We(s);case"sorting":return Xe(s);case"labeledimage":return de(s);default:return null}}function lt(s,n,v){var $;if(v.title&&(a.updateSlide(s,n,{title:v.title}),ct(s,n,"heading",{x:60,y:40,width:840,height:80,content:{text:v.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),v.subtitle&&ct(s,n,"text",{x:60,y:130,width:840,height:50,content:{text:v.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),($=v.bullets)!=null&&$.length){const m=v.bullets.map(J=>`• ${J}`).join(`
`);ct(s,n,"text",{x:60,y:v.subtitle?200:150,width:840,height:200,content:{text:m,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}v.callout&&(ct(s,n,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),ct(s,n,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${v.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function Ue(s,n,v,{replaceGenerated:$=!1,origin:m=null}={}){if(!s||!n)return;$&&Mt(s,n);const J=Me(v);if(a.updateSlide(s,n,{title:v.title||"Untitled Slide"}),J){const he=m||Pt(s,J);a.insertContentBlock(s,n,J,he)}else lt(s,n,v)}function je(s,{replaceGenerated:n=!1}={}){if(!M.currentSlideId)return;const v=M.projectId;if(!v||!Array.isArray(s)||!s.length)return;s.map(m=>Ye(m)).forEach(m=>{const J=a.addSlide(v);J&&Ue(v,J.id,m,{replaceGenerated:n})})}function Je(s=null,{replaceGenerated:n=!1}={}){if(!M.currentSlideId)return;let v=s;if(!v){if(!W.value)return;try{v=JSON.parse(W.value)}catch(he){console.warn("Could not parse AI content:",he);return}}const $=Ye(v),m=M.projectId,J=M.currentSlideId;!m||!J||Ue(m,J,$,{replaceGenerated:n})}function yt(){if(W.value){if(C.value==="deck"){try{const s=JSON.parse(W.value),n=Array.isArray(s)?s:s==null?void 0:s.slides;if(!Array.isArray(n)||!n.length)return;je(n,{replaceGenerated:!0})}catch{return}return}Je()}}async function mt(){const s=O.value.trim()||"[your topic]",n=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${F.value}" slide about "${s}" using a ${L.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,v=await z.generate(n,{type:"creativeOptions",topic:s,slideType:F.value});if(v)try{const $=JSON.parse(v.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray($))throw new Error("Options must be an array");Re.value=$.slice(0,3).map((m,J)=>({title:String((m==null?void 0:m.title)||`Option ${J+1}`),angle:String((m==null?void 0:m.angle)||""),prompt:String((m==null?void 0:m.prompt)||"")})).filter(m=>m.prompt.trim()),Re.value.length||(Te.value="No usable creative options were returned. Try generating again.")}catch{Te.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function wt(s){s!=null&&s.prompt&&(ie.value=s.prompt,Ee.value=!0,ye.value="slide",await Qe())}async function Wt(){if(!Ve.value.trim()||!M.projectId||!M.currentSlideId)return;const s=await z.transformSourceTextToSlideContent(Ve.value,{topic:O.value,slideType:F.value,description:fe.value,layoutMode:L.value,customPrompt:ie.value});if(!s)return;const n=Ye(s),v=At(Fe.value),$={x:Math.max(24,Math.round(v.minX)),y:Math.max(24,Math.round(v.minY))};Fe.value.forEach(m=>{a.deleteElement(M.projectId,M.currentSlideId,m.id)}),W.value=JSON.stringify(n,null,2),Ue(M.projectId,M.currentSlideId,n,{origin:$})}async function kt(s=!1){if(!we.value.trim()&&!S.value.trim())return;s||(B.value=[]);const n=await z.generateQuiz(we.value,Ie.value,{difficulty:ce.value,questionType:ge.value,objective:re.value,customPrompt:S.value});if(n)if(s){const v=new Set(B.value.map(m=>m.question)),$=n.filter(m=>!v.has(m.question)).map(m=>({...m,_selected:!0}));B.value=[...B.value,...$]}else B.value=n.map(v=>({...v,_selected:!0}))}async function Rt(){const s=B.value.filter(v=>v._selected);if(!s.length)return;const n=M.projectId;s.forEach((v,$)=>{const m=a.addSlide(n);if(m){a.addElement(n,m.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:v.question||"Untitled Question",options:Array.isArray(v.options)?v.options:["True","False"],correctIndex:typeof v.correctIndex=="number"?v.correctIndex:0,explanation:v.explanation||""}});const J=typeof v.question=="string"?v.question:"Quiz";a.updateSlide(n,m.id,{title:`Q${$+1}: ${J.slice(0,40)}…`})}}),B.value=[]}function Lt(s){B.value.forEach(n=>n._selected=s)}async function Ot(){if(!ne.value.trim())return;const s=await z.generateVoiceoverScript(ne.value);s&&(W.value=s)}async function Ft(){var v,$;const s=($=(v=Ae.value)==null?void 0:v.content)==null?void 0:$.text;if(!s)return;const n=await z.generateTranslation(s,Z.value);n&&(W.value=n)}async function Vt(){!W.value||!Ae.value||a.updateElement(M.projectId,M.currentSlideId,Ae.value.id,{content:{...Ae.value.content,text:W.value}})}const dt=j(""),Ct=j(!1);function St(s){return String(s||"").replace(/```(json)?\n?/gi," ").replace(/```/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim().slice(0,220)}function ut(s,n){return new Promise((v,$)=>{const m=window.setTimeout(()=>{$(new Error("Timed out"))},n);Promise.resolve(s).then(J=>{window.clearTimeout(m),v(J)}).catch(J=>{window.clearTimeout(m),$(J)})})}function gt(s){const n=String(s||"").trim(),v=n.toLowerCase(),$=N.value;return n?v.includes("billing hard limit")||v.includes("billing")||v.includes("quota")||v.includes("insufficient_quota")?z.apiProvider==="gemini"?"Gemini image generation is being rejected by Google because this project is still on the free tier. Gemini Developer API image models require a billing-enabled project, so you need to enable billing in AI Studio or switch providers for image generation.":`Your ${$} account cannot generate images right now because its billing or quota limit has been reached. Update billing or wait for quota reset, then try again.`:z.apiProvider==="gemini"&&(v.includes("resource exhausted")||v.includes("free tier")||v.includes("generativelanguage.googleapis.com"))?"Gemini image generation is not available to this free-tier project. Enable billing for the Gemini project in AI Studio to use Gemini image models.":v.includes("invalid api key")||v.includes("incorrect api key")||v.includes("unauthorized")?`The ${$} API key appears invalid for image generation. Check the key in API settings and try again.`:v.includes("rate limit")||v.includes("too many requests")?`${$} rate-limited the image request. Wait a moment and try again.`:`${$} image generation failed: ${n}`:`${$} image generation did not return an image. Try a simpler prompt or try again in a moment.`}async function ht(){if(dt.value.trim()){Ct.value=!0,W.value="Preparing image prompt...";try{if(!z.apiKey&&z.apiProvider!=="gemini"){W.value=`AI image generation requires a ${N.value} API key in API settings. No fallback image was inserted.`;return}let s=dt.value;try{const v=await ut(z.generateImagePrompt(dt.value),2200);v&&(s=v.replace(/```(json)?\n?/g,"").trim())}catch{s=dt.value}s=St(s)||St(dt.value),W.value="Generating image and inserting it on the slide...";const n=await ut(z.generateImageAsset(s),2e4).catch(()=>null);if(!n){W.value=gt(z.lastError);return}a.addElement(M.projectId,M.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:n,fallbackSrcs:[],alt:dt.value.trim()||"AI generated image",sourceType:`${z.apiProvider}-image`,objectFit:"cover"}}),W.value=`AI image added to slide using ${N.value} image generation.`}catch(s){W.value=gt((s==null?void 0:s.message)||z.lastError)}finally{Ct.value=!1}}}async function bt(){var n,v;if(!((v=(n=Ae.value)==null?void 0:n.content)!=null&&v.text))return;const s=await z.improveText(Ae.value.content.text,g.value||"Make it clearer and more engaging");s&&(W.value=s)}async function Gt(){!W.value||!Ae.value||a.updateElement(M.projectId,M.currentSlideId,Ae.value.id,{content:{...Ae.value.content,text:W.value}})}async function Ut(){if(!g.value.trim())return;const s=await z.generate(g.value);s&&(W.value=s)}return(s,n)=>{var v,$,m,J,he,tt;return l(),i("div",T1,[e("div",B1,[(l(),i(oe,null,ve([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],P=>e("button",{key:P.id,class:Q(["ai-mode-btn",Y.value===P.id&&"active"]),onClick:at=>Y.value=P.id},k(P.label),11,N1)),64))]),e("div",z1,[Y.value==="generate"?(l(),i(oe,{key:0},[e("div",L1,[n[36]||(n[36]=e("label",{class:"form-label"},[te("Topic / Subject "),e("span",{class:"required"},"*")],-1)),pe(e("input",{"onUpdate:modelValue":n[0]||(n[0]=P=>O.value=P),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:gl(Qe,["enter"])},null,544),[[$e,O.value]])]),e("div",j1,[e("button",{class:Q(["output-mode-btn",C.value==="single"&&"active"]),onClick:n[1]||(n[1]=P=>C.value="single")},"Single Slide",2),e("button",{class:Q(["output-mode-btn",C.value==="deck"&&"active"]),onClick:n[2]||(n[2]=P=>C.value="deck")},"Slide Deck",2)]),C.value==="single"?(l(),i("div",_1,[n[38]||(n[38]=e("label",{class:"form-label"},"Slide Type",-1)),pe(e("select",{"onUpdate:modelValue":n[3]||(n[3]=P=>F.value=P),class:"select"},[...n[37]||(n[37]=[it('<option value="general" data-v-3ccdb1b2>General</option><option value="intro" data-v-3ccdb1b2>Introduction</option><option value="overview" data-v-3ccdb1b2>Overview</option><option value="concept" data-v-3ccdb1b2>Concept Explanation</option><option value="example" data-v-3ccdb1b2>Example / Case Study</option><option value="summary" data-v-3ccdb1b2>Summary</option><option value="callout" data-v-3ccdb1b2>Key Takeaway</option>',7)])],512),[[jt,F.value]])])):R("",!0),C.value==="single"?(l(),i("div",D1,[e("div",q1,[n[39]||(n[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",R1,k(Oe.value.hint),1)]),e("div",O1,[(l(),i(oe,null,ve(r,P=>e("button",{key:P.id,class:Q(["layout-preset-card",L.value===P.id&&"active"]),onClick:at=>L.value=P.id},[e("span",V1,k(P.label),1),e("span",U1,k(P.hint),1)],10,F1)),64))])])):(l(),i("div",W1,[n[40]||(n[40]=e("label",{class:"form-label"},"Number of Slides",-1)),pe(e("input",{"onUpdate:modelValue":n[4]||(n[4]=P=>K.value=P),class:"input",type:"number",min:"1",max:"20"},null,512),[[$e,K.value,void 0,{number:!0}]]),n[41]||(n[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),C.value==="deck"?(l(),i("div",G1,[e("div",H1,[n[42]||(n[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",Y1,k(q.value==="mixed"?"AI can vary layout by slide":`All slides use ${Oe.value.label}`),1)]),e("div",J1,[e("button",{class:Q(["output-mode-btn",q.value==="mixed"&&"active"]),onClick:n[5]||(n[5]=P=>q.value="mixed")},"Mixed Layouts",2),e("button",{class:Q(["output-mode-btn",q.value==="single"&&"active"]),onClick:n[6]||(n[6]=P=>q.value="single")},"Consistent Layout",2)])])):R("",!0),C.value==="deck"&&q.value==="single"?(l(),i("div",Q1,[e("div",X1,[n[43]||(n[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",K1,k(Oe.value.hint),1)]),e("div",Z1,[(l(),i(oe,null,ve(r,P=>e("button",{key:`deck-${P.id}`,class:Q(["layout-preset-card",L.value===P.id&&"active"]),onClick:at=>L.value=P.id},[e("span",tm,k(P.label),1),e("span",om,k(P.hint),1)],10,em)),64))])])):R("",!0),e("div",nm,[n[44]||(n[44]=e("label",{class:"form-label"},[te("Description "),e("span",{class:"optional"},"(optional)")],-1)),pe(e("textarea",{"onUpdate:modelValue":n[7]||(n[7]=P=>fe.value=P),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[$e,fe.value]])]),e("div",lm,[e("div",im,[n[46]||(n[46]=e("label",{class:"form-label"},"AI Prompt",-1)),Ee.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:me,title:"Reset to auto-generated prompt"},[...n[45]||(n[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),te(" Reset ",-1)])])):(l(),i("span",am,"auto"))]),pe(e("textarea",{"onUpdate:modelValue":n[8]||(n[8]=P=>ie.value=P),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:n[9]||(n[9]=P=>Ee.value=!0),spellcheck:"false"},null,544),[[$e,ie.value]]),n[47]||(n[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),C.value==="single"?(l(),i("div",sm,[e("button",{class:Q(["output-mode-btn",ye.value==="slide"&&"active"]),onClick:n[10]||(n[10]=P=>ye.value="slide")},"Show on Slide",2),e("button",{class:Q(["output-mode-btn",ye.value==="options"&&"active"]),onClick:n[11]||(n[11]=P=>ye.value="options")},"Creative Options",2)])):R("",!0),C.value==="single"&&Ve.value?(l(),i("div",rm,[e("div",dm,[n[48]||(n[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",um,k(Fe.value.length)+" selected",1)]),e("div",cm,k(Ve.value),1),e("div",pm,[e("button",{class:"btn btn-secondary btn-sm",disabled:I(z).isGenerating,onClick:Wt}," Transform Selection to "+k(Oe.value.label),9,vm)])])):R("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!O.value.trim()&&!ie.value.trim()||C.value==="deck"&&(!K.value||K.value<1||K.value>20),onClick:Qe},[I(z).isGenerating?(l(),i("span",mm)):(l(),i("svg",gm,[...n[49]||(n[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),te(" "+k(I(z).isGenerating?"Generating…":C.value==="deck"?W.value?`Regenerate ${K.value} Slides`:`Generate ${K.value} Slides`:ye.value==="slide"?W.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,fm),C.value==="single"&&ye.value==="options"&&(Re.value.length||Te.value)?(l(),i("div",bm,[e("div",ym,[n[50]||(n[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[12]||(n[12]=P=>{Re.value=[],Te.value=""})},"Clear")]),Te.value?(l(),i("div",hm,[n[51]||(n[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),te(" "+k(Te.value),1)])):(l(),i("div",xm,[(l(!0),i(oe,null,ve(Re.value,(P,at)=>(l(),i("article",{key:at,class:"creative-option-card"},[e("h4",wm,k(P.title),1),e("p",km,k(P.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:$t=>wt(P)},"Use This Option",8,Cm)]))),128))]))])):R("",!0)],64)):Y.value==="quiz"?(l(),i(oe,{key:1},[e("div",Sm,[n[52]||(n[52]=e("label",{class:"form-label"},[te("Quiz Topic "),e("span",{class:"required"},"*")],-1)),pe(e("input",{"onUpdate:modelValue":n[13]||(n[13]=P=>we.value=P),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:gl(kt,["enter"])},null,544),[[$e,we.value]])]),e("div",$m,[e("div",Im,[n[54]||(n[54]=e("label",{class:"form-label"},"Questions",-1)),pe(e("select",{"onUpdate:modelValue":n[14]||(n[14]=P=>Ie.value=P),class:"select"},[...n[53]||(n[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[jt,Ie.value,void 0,{number:!0}]])]),e("div",Em,[n[56]||(n[56]=e("label",{class:"form-label"},"Difficulty",-1)),pe(e("select",{"onUpdate:modelValue":n[15]||(n[15]=P=>ce.value=P),class:"select"},[...n[55]||(n[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[jt,ce.value]])])]),e("div",Am,[n[57]||(n[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Mm,[(l(),i(oe,null,ve([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],P=>e("button",{key:P.id,class:Q(["qtype-btn",ge.value===P.id&&"active"]),onClick:at=>ge.value=P.id},[e("span",Tm,k(P.icon),1),e("span",null,k(P.label),1)],10,Pm)),64))])]),e("div",Bm,[n[58]||(n[58]=e("label",{class:"form-label"},[te("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),pe(e("input",{"onUpdate:modelValue":n[16]||(n[16]=P=>re.value=P),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[$e,re.value]])]),e("div",Nm,[e("div",zm,[n[60]||(n[60]=e("label",{class:"form-label"},"AI Prompt",-1)),D.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Ge,title:"Reset to auto-generated prompt"},[...n[59]||(n[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),te(" Reset ",-1)])])):(l(),i("span",Lm,"auto"))]),pe(e("textarea",{"onUpdate:modelValue":n[17]||(n[17]=P=>S.value=P),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:n[18]||(n[18]=P=>D.value=!0),spellcheck:"false"},null,544),[[$e,S.value]]),n[61]||(n[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!we.value.trim()&&!S.value.trim(),onClick:n[19]||(n[19]=P=>kt(!1))},[I(z).isGenerating?(l(),i("span",_m)):(l(),i("svg",Dm,[...n[62]||(n[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),te(" "+k(I(z).isGenerating?"Generating…":`Generate ${Ie.value} Questions`),1)],8,jm),B.value.length?(l(),i("div",qm,[e("div",Rm,[e("span",Om,k(B.value.length)+" Questions",1),e("div",Fm,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[20]||(n[20]=P=>Lt(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:n[21]||(n[21]=P=>Lt(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:n[22]||(n[22]=P=>B.value=[])},"Clear")])]),e("div",Vm,[e("button",{class:"btn btn-secondary regen-btn",disabled:I(z).isGenerating,onClick:n[23]||(n[23]=P=>kt(!1)),title:"Replace all questions with a new set"},[I(z).isGenerating?(l(),i("span",Wm)):(l(),i("svg",Gm,[...n[63]||(n[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),n[64]||(n[64]=te(" Regenerate ",-1))],8,Um),e("button",{class:"btn btn-ghost regen-btn",disabled:I(z).isGenerating,onClick:n[24]||(n[24]=P=>kt(!0)),title:"Generate more and append to current list"},[...n[65]||(n[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),te(" Add More ",-1)])],8,Hm)]),(l(!0),i(oe,null,ve(B.value,(P,at)=>(l(),i("div",{key:at,class:Q(["quiz-card",{deselected:!P._selected}])},[e("div",Ym,[e("label",Jm,[pe(e("input",{type:"checkbox","onUpdate:modelValue":$t=>P._selected=$t},null,8,Qm),[[Dt,P._selected]]),e("span",Xm,"Q"+k(at+1),1)]),e("div",Km,[e("span",{class:Q(["badge difficulty-badge",P.difficulty])},k(P.difficulty),3),e("span",Zm,k(P.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",eg,k(P.question),1),e("div",tg,[(l(!0),i(oe,null,ve(P.options,($t,It)=>(l(),i("div",{key:It,class:Q(["q-option",It===P.correctIndex&&"correct"])},[e("span",og,k(["A","B","C","D"][It]),1),e("span",null,k($t),1),It===P.correctIndex?(l(),i("svg",ng,[...n[66]||(n[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):R("",!0)],2))),128))]),P.explanation?(l(),i("div",lg,[n[67]||(n[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),te(" "+k(P.explanation),1)])):R("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!B.value.filter(P=>P._selected).length,onClick:Rt},[n[68]||(n[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),te(" Add "+k(B.value.filter(P=>P._selected).length)+" Selected as Quiz Slides ",1)],8,ig)])):R("",!0)],64)):Y.value==="voiceover"?(l(),i(oe,{key:2},[e("div",ag,[n[69]||(n[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),pe(e("textarea",{"onUpdate:modelValue":n[25]||(n[25]=P=>ne.value=P),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[$e,ne.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating,onClick:Ot},[I(z).isGenerating?(l(),i("span",rg)):R("",!0),te(" "+k(I(z).isGenerating?"Generating…":"Generate Script"),1)],8,sg)],64)):Y.value==="improve"?(l(),i(oe,{key:3},[($=(v=Ae.value)==null?void 0:v.content)!=null&&$.text?(l(),i("div",dg,[n[70]||(n[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",ug,k(Ae.value.content.text.slice(0,120))+k(Ae.value.content.text.length>120?"…":""),1)])):(l(),i("p",cg,"Select a text element on the canvas to improve it.")),e("div",pg,[n[71]||(n[71]=e("label",{class:"form-label"},"Instruction",-1)),pe(e("input",{"onUpdate:modelValue":n[26]||(n[26]=P=>g.value=P),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[$e,g.value]])]),n[72]||(n[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),pe(e("textarea",{"onUpdate:modelValue":n[27]||(n[27]=P=>g.value=P),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[$e,g.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!Ae.value&&!g.value,onClick:n[28]||(n[28]=P=>Ae.value?bt():Ut())},[I(z).isGenerating?(l(),i("span",fg)):R("",!0),te(" "+k(I(z).isGenerating?"Processing…":"Generate"),1)],8,vg)],64)):Y.value==="translate"?(l(),i(oe,{key:4},[(J=(m=Ae.value)==null?void 0:m.content)!=null&&J.text?(l(),i("div",mg,[n[73]||(n[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",gg,k(Ae.value.content.text.slice(0,120))+k(Ae.value.content.text.length>120?"…":""),1)])):(l(),i("p",bg,"Select a text element on the canvas to translate it.")),e("div",yg,[n[75]||(n[75]=e("label",{class:"form-label"},"Target Language",-1)),pe(e("select",{"onUpdate:modelValue":n[29]||(n[29]=P=>Z.value=P),class:"select"},[...n[74]||(n[74]=[it('<option value="Spanish" data-v-3ccdb1b2>Spanish</option><option value="French" data-v-3ccdb1b2>French</option><option value="German" data-v-3ccdb1b2>German</option><option value="Italian" data-v-3ccdb1b2>Italian</option><option value="Portuguese" data-v-3ccdb1b2>Portuguese</option><option value="Chinese (Simplified)" data-v-3ccdb1b2>Chinese (Simplified)</option><option value="Japanese" data-v-3ccdb1b2>Japanese</option><option value="Arabic" data-v-3ccdb1b2>Arabic</option>',8)])],512),[[jt,Z.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!((tt=(he=Ae.value)==null?void 0:he.content)!=null&&tt.text),onClick:Ft},[I(z).isGenerating?(l(),i("span",xg)):R("",!0),te(" "+k(I(z).isGenerating?"Translating…":"Translate Text"),1)],8,hg),W.value?(l(),i("div",wg,[e("div",kg,[n[76]||(n[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",Cg,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[30]||(n[30]=P=>s.navigator.clipboard.writeText(W.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Vt,disabled:!Ae.value},"Apply",8,Sg)])]),e("div",$g,k(W.value),1)])):R("",!0)],64)):Y.value==="image"?(l(),i(oe,{key:5},[n[81]||(n[81]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),I(z).apiProvider==="gemini"?(l(),i("div",Ig,[...n[77]||(n[77]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),te(" Gemini text features work on the free tier, but Gemini image generation on the Developer API usually needs billing enabled for the project. ",-1)])])):R("",!0),I(z).apiKey?R("",!0):(l(),i("div",Eg,[n[78]||(n[78]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),te(" AI image generation needs a "+k(N.value)+" API key in API settings. ",1)])),e("div",Ag,[n[79]||(n[79]=e("label",{class:"form-label"},"Image Description",-1)),pe(e("textarea",{"onUpdate:modelValue":n[31]||(n[31]=P=>dt.value=P),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[$e,dt.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ct.value||I(z).isGenerating||!dt.value||!I(z).apiKey,onClick:ht},[Ct.value||I(z).isGenerating?(l(),i("span",Pg)):R("",!0),te(" "+k(Ct.value||I(z).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,Mg),W.value?(l(),i("div",Tg,[n[80]||(n[80]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",Bg,k(W.value),1)])):R("",!0)],64)):Y.value==="settings"?(l(),i("div",Ng,[e("div",zg,[n[83]||(n[83]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:I(z).apiProvider,class:"select",onChange:n[32]||(n[32]=P=>I(z).setProvider(P.target.value))},[...n[82]||(n[82]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"gemini"},"Google Gemini (Free tier for text)",-1)])],40,Lg)]),e("div",jg,[n[84]||(n[84]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:I(z).apiKey,class:"input",placeholder:_.value,onChange:n[33]||(n[33]=P=>I(z).setApiKey(P.target.value))},null,40,_g),e("p",Dg,k(ue.value),1)]),I(z).apiProvider==="gemini"?(l(),i("div",qg,[...n[85]||(n[85]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),te(" Gemini is enabled for content, quiz, voiceover, improve, and translate in this app. Gemini image generation may still require billing on the Google project. ",-1)])])):R("",!0),I(z).apiKey?R("",!0):(l(),i("div",Rg,[n[86]||(n[86]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),n[87]||(n[87]=te(" Running in ",-1)),n[88]||(n[88]=e("strong",null,"demo mode",-1)),te(" — sample responses only. Add your "+k(N.value)+" API key to use real AI generation. ",1)]))])):R("",!0),W.value&&Y.value!=="settings"&&Y.value!=="quiz"?(l(),i("div",Og,[e("div",Fg,[n[89]||(n[89]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[34]||(n[34]=P=>W.value="")},"Clear")]),e("pre",Vg,k(W.value),1),e("div",Ug,[Y.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:yt},k(C.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):R("",!0),Y.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:I(z).isGenerating,onClick:Qe},[...n[90]||(n[90]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),te(" Regenerate ",-1)])],8,Wg)):R("",!0),Y.value==="improve"&&Ae.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Gt}," Apply to Element ")):R("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:n[35]||(n[35]=P=>{var at;return(at=s.navigator.clipboard)==null?void 0:at.writeText(W.value)})}," Copy ")])])):R("",!0),I(z).lastError?(l(),i("div",Gg,[n[91]||(n[91]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),te(" "+k(I(z).lastError),1)])):R("",!0)])])}}},Yg=Ze(Hg,[["__scopeId","data-v-3ccdb1b2"]]),Jg={class:"theme-manager"},Qg={class:"panel-section"},Xg={class:"presets-grid"},Kg=["title","onClick"],Zg={class:"preset-preview"},eb={class:"preset-name"},tb={class:"panel-section"},ob={class:"theme-fields"},nb={class:"form-label"},lb={class:"color-row"},ib=["value","onInput"],ab=["value","onChange"],sb={class:"panel-section"},rb={class:"theme-field"},db=["value","placeholder"],ub={class:"chart-palette-preview"},cb={class:"panel-section"},pb={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vb=["value"],fb=["value"],mb={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gb=["value"],bb=["value"],yb={class:"form-group"},hb=["value"],xb={class:"panel-section"},wb={class:"tp-chart-row"},kb={key:0,class:"apply-message success"},Cb={key:1,class:"apply-message error"},Sb={__name:"ThemeManager",setup(E){const r=st(),d=rt(),p=A(()=>d.getProject(r.projectId)),c=A(()=>{var a;return((a=p.value)==null?void 0:a.theme)||{}}),h=A(()=>bl(c.value)),y=j(""),f=j("");function U(a){d.updateProject(r.projectId,{theme:{...c.value,...a}})}const se=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],H=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function V(a){U(a)}function be(a,N){const _=a.content||{};return a.type==="text"?{content:{..._,fontFamily:N.fontFamily||_.fontFamily,color:N.textColor||_.color}}:a.type==="heading"?{content:{..._,fontFamily:N.headingFont||N.fontFamily||_.fontFamily,color:N.textColor||_.color}}:a.type==="shape"?{content:{..._,fillColor:N.secondaryColor||_.fillColor}}:a.type==="hotspot"?{content:{..._,bgColor:N.primaryColor||_.bgColor}}:a.type==="button"?{content:{..._,bgColor:N.primaryColor||_.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:N.fontFamily||_.fontFamily}}:a.type==="quiz"?{content:{..._,cardBgColor:N.bgColor||_.cardBgColor,questionColor:N.textColor||_.questionColor,accentColor:N.primaryColor||_.accentColor}}:a.type==="chart"?{content:{..._,...$l(N)}}:null}function z(){U({chartPalette:""})}function M(){y.value="",f.value="";const a=r.projectId,N=p.value,_=c.value;if(!a||!N){f.value="No active project to apply theme.";return}const ue=N.slides||[];let Y=0;ue.forEach(g=>{(g.backgroundType||"color")==="color"&&d.updateSlide(a,g.id,{backgroundType:"color",background:_.bgColor||g.background||"#ffffff"}),(g.elements||[]).forEach(O=>{const W=be(O,_);W&&(d.updateElement(a,g.id,O.id,W),Y+=1)})}),y.value=`Applied theme to ${ue.length} slide${ue.length===1?"":"s"} and ${Y} element${Y===1?"":"s"}.`}return(a,N)=>(l(),i("div",Jg,[e("div",Qg,[N[4]||(N[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",Xg,[(l(),i(oe,null,ve(se,_=>e("div",{key:_.name,class:"preset-card",title:_.name,onClick:ue=>V(_)},[e("div",Zg,[e("div",{class:"pp-header",style:xe({background:_.primaryColor})},null,4),e("div",{class:"pp-body",style:xe({background:_.bgColor})},[e("div",{class:"pp-line",style:xe({background:_.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:xe({background:_.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:xe({background:_.secondaryColor})},null,4)]),e("span",eb,k(_.name),1)],8,Kg)),64))])]),e("div",tb,[N[5]||(N[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",ob,[(l(),i(oe,null,ve({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(_,ue)=>e("div",{class:"theme-field",key:ue},[e("label",nb,k(_),1),e("div",lb,[e("input",{type:"color",value:c.value[ue]||"#ffffff",class:"color-input-native",onInput:Y=>U({[ue]:Y.target.value})},null,40,ib),e("input",{value:c.value[ue]||"",class:"input",onChange:Y=>U({[ue]:Y.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,ab)])])),64))])]),e("div",sb,[N[8]||(N[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",rb,[N[6]||(N[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:c.value.chartPalette||"",class:"input",placeholder:I(Gl)(I(bl)(c.value)),onChange:N[0]||(N[0]=_=>U({chartPalette:_.target.value}))},null,40,db),e("div",ub,[(l(!0),i(oe,null,ve(h.value,(_,ue)=>(l(),i("span",{key:`theme-chart-${ue}`,class:"chart-palette-dot",style:xe({background:_})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:z},"Use auto palette")]),N[7]||(N[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",cb,[N[12]||(N[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",pb,[N[9]||(N[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:c.value.headingFont||"Inter, sans-serif",class:"select",onChange:N[1]||(N[1]=_=>U({headingFont:_.target.value}))},[(l(),i(oe,null,ve(H,_=>e("option",{key:_.value,value:_.value},k(_.label),9,fb)),64))],40,vb)]),e("div",mb,[N[10]||(N[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:c.value.fontFamily||"Inter, sans-serif",class:"select",onChange:N[2]||(N[2]=_=>U({fontFamily:_.target.value}))},[(l(),i(oe,null,ve(H,_=>e("option",{key:_.value,value:_.value},k(_.label),9,bb)),64))],40,gb)]),e("div",yb,[N[11]||(N[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:c.value.fontSize||16,class:"input",onChange:N[3]||(N[3]=_=>U({fontSize:+_.target.value}))},null,40,hb)])]),e("div",xb,[N[13]||(N[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:xe({background:c.value.bgColor||"#fff",fontFamily:c.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:xe({color:c.value.textColor,fontFamily:c.value.headingFont||c.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:xe({color:c.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:xe({background:c.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:xe({background:c.value.secondaryColor})},"Badge",4),e("div",wb,[(l(!0),i(oe,null,ve(h.value.slice(0,5),(_,ue)=>(l(),i("span",{key:`preview-chart-${ue}`,class:"tp-chart-bar",style:xe({background:_,height:`${22+ue*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:M}," Apply Theme to Slides "),y.value?(l(),i("p",kb,k(y.value),1)):R("",!0),f.value?(l(),i("p",Cb,k(f.value),1)):R("",!0)])]))}},$b=Ze(Sb,[["__scopeId","data-v-da2b0ce4"]]),Ib={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Eb={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},Ab={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Mb={class:"export-tabs tabs",style:{"overflow-x":"auto"}},Pb={class:"export-content"},Tb={class:"export-options",style:{"margin-bottom":"20px"}},Bb={class:"form-group"},Nb={class:"export-meta"},zb={class:"meta-item"},Lb={class:"meta-item"},jb={class:"meta-item"},_b={class:"export-options",style:{"margin-bottom":"20px"}},Db={class:"form-group"},qb={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Rb={class:"export-options",style:{"margin-bottom":"20px"}},Ob={class:"form-group"},Fb={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Vb={class:"export-options",style:{"margin-bottom":"20px"}},Ub={class:"form-group"},Wb={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},Gb={key:1,class:"export-success"},Hb={__name:"ExportModal",setup(E){const r=st(),d=rt(),p=Il(),c=A(()=>d.getProject(r.projectId)),h=j("json"),y=j(""),f=j(""),U=j(!0);nt(c,Y=>{Y&&!f.value&&(f.value=Y.name||"presentation")},{immediate:!0});function se(){const Y=d.exportProject(r.projectId);if(!Y)return;const g=new Blob([Y],{type:"application/json"}),O=URL.createObjectURL(g),W=document.createElement("a");W.href=O,W.download=`${f.value||"project"}.mediasurf.json`,W.click(),URL.revokeObjectURL(O),y.value="success",setTimeout(()=>y.value="",3e3)}function H(Y,g="presentation"){return String(Y).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||g}function V(Y){return new Promise((g,O)=>{const W=new FileReader;W.onloadend=()=>g(W.result),W.onerror=()=>O(W.error),W.readAsDataURL(Y)})}function be(Y,g,O="html"){const W=qt(g);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${W.width}px;
  --lf-slide-height: ${W.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(Y==null?void 0:Y.fontFamily)||"Inter, sans-serif"};
  background: ${O==="pdf"?"#f3f4f6":`
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%)`};
  color: ${O==="pdf"?"#111827":"#ffffff"};
  display: ${O==="pdf"?"block":"flex"};
  align-items: ${O==="pdf"?"stretch":"center"};
  justify-content: ${O==="pdf"?"flex-start":"center"};
  overflow: ${O==="pdf"?"auto":"hidden"};
  padding: ${O==="pdf"?"24px 0":"0"};
}
.lf-shell {
  width: ${O==="pdf"?"100%":"100vw"};
  min-height: ${O==="pdf"?"auto":"100vh"};
  height: ${O==="pdf"?"auto":"100vh"};
  position: relative;
  display: flex;
  align-items: ${O==="pdf"?"stretch":"center"};
  justify-content: center;
  overflow: ${O==="pdf"?"visible":"hidden"};
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
  width: ${O==="pdf"?"100%":"auto"};
  max-width: ${O==="pdf"?"none":"auto"};
  padding: ${O==="pdf"?"0":"18px"};
  border-radius: ${O==="pdf"?"0":"32px"};
  background: ${O==="pdf"?"transparent":"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"};
  border: ${O==="pdf"?"none":"1px solid rgba(255,255,255,0.12)"};
  box-shadow: ${O==="pdf"?"none":"0 30px 80px rgba(0,0,0,.34)"};
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
  width: ${O==="pdf"?"100%":"var(--lf-slide-width)"};
  height: ${O==="pdf"?"auto":"var(--lf-slide-height)"};
  border-radius: ${O==="pdf"?"0":"18px"};
  overflow: ${O==="pdf"?"visible":"hidden"};
  box-shadow: ${O==="pdf"?"none":"0 30px 90px rgba(0,0,0,.5)"};
  transform-origin: center center;
  display: ${O==="pdf"?"flex":"block"};
  flex-direction: ${O==="pdf"?"column":"row"};
  align-items: ${O==="pdf"?"center":"stretch"};
  gap: ${O==="pdf"?"24px":"0"};
}
.slide {
  position: ${O==="pdf"?"relative":"absolute"};
  inset: ${O==="pdf"?"auto":"0"};
  display: ${O==="pdf"?"block":"none"};
  overflow: hidden;
  color: ${(Y==null?void 0:Y.textColor)||"#1a1a2e"};
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
  flex: 0 0 auto;
  background-clip: padding-box;
  box-shadow: ${O==="pdf"?"0 12px 32px rgba(15, 23, 42, 0.16)":"none"};
  page-break-after: ${O==="pdf"?"always":"auto"};
  break-after: ${O==="pdf"?"page":"auto"};
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
${O==="iframe"?`
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
${O==="pdf"?`
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
`}async function M(){return ue("html")}async function a(){return ue("iframe")}async function N(){return ue("scorm")}async function _(){return ue("pdf")}async function ue(Y="html"){var le,me,we;const g=c.value;if(!g)return;y.value="processing";const O=Y==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(Y==="pdf"&&!O){y.value="error",setTimeout(()=>y.value="",3e3);return}const W=Y==="pdf"?null:new ii,Ie=W?W.folder("assets"):null;let F=0;async function Z(ce,ge="media"){if((!ce||ce.startsWith("data:")||ce.startsWith("http://localhost")||ce.startsWith("blob:"))&&ce.startsWith("data:"))return ce;try{const B=await(await fetch(ce)).blob();if(Y==="pdf")return await V(B);let S="bin";const D=B.type;if(D.includes("image/png")?S="png":D.includes("image/jpeg")?S="jpg":D.includes("image/gif")?S="gif":D.includes("image/svg")?S="svg":D.includes("image/webp")?S="webp":D.includes("video/mp4")?S="mp4":D.includes("audio/mpeg")&&(S="mp3"),S==="bin"){const Ge=ce.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);Ge&&(S=Ge[1])}F++;const ke=`${ge}_${F}.${S}`;return Ie.file(ke,B),`assets/${ke}`}catch(re){return console.warn("Could not fetch asset:",ce,re),ce}}const ne=JSON.parse(JSON.stringify([...g.slides||[]])).sort((ce,ge)=>(ce.order??0)-(ge.order??0));if(U.value)for(const ce of ne){ce.backgroundType==="image"&&ce.backgroundImage&&(ce.backgroundImage=await Z(ce.backgroundImage,"bg"));for(const ge of ce.elements||[])ge.type==="image"&&((le=ge.content)!=null&&le.src)&&(ge.content.src=await Z(ge.content.src,"img")),ge.type==="video"&&((me=ge.content)!=null&&me.src)&&!ge.content.src.includes("youtube")&&!ge.content.src.includes("youtu.be")&&(ge.content.src=await Z(ge.content.src,"vid")),ge.type==="audio"&&((we=ge.content)!=null&&we.src)&&(ge.content.src=await Z(ge.content.src,"aud"))}const fe=H(f.value||g.name||"presentation"),ie={name:g.name,theme:g.theme||{},settings:g.settings||{},slides:ne},Ee=JSON.stringify(ie).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),C=be(g.theme,g.settings,Y),L=z(Y),q=`<script id="lf-data" type="application/json">${Ee}<\/script>`,ye=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${fe}</title>
${Y==="pdf"?`<style>${C}</style>`:'<link rel="stylesheet" href="style.css">'}
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
  <span class="nav-counter" id="counter">1 / ${ne.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${q}
${Y!=="pdf"?'<script src="script.js"><\/script>':`<script>${L}<\/script>`}
</body>
</html>`;if(Y==="pdf"){O.document.open(),O.document.write(ye),O.document.close(),y.value="success",setTimeout(()=>y.value="",3e3);return}if(Y==="scorm"){const ce=(fe||"SCORM Export").replace(/[&<>'"]/g,""),ge=`<?xml version="1.0" standalone="no" ?>
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
      <title>${ce}</title>
      <item identifier="item_1" identifierref="resource_1">
        <title>${ce}</title>
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
</manifest>`;W.file("imsmanifest.xml",ge)}W.file("index.html",ye),W.file("style.css",C),W.file("script.js",L);const Re=await W.generateAsync({type:"blob"}),Te=URL.createObjectURL(Re),Oe=document.createElement("a");Oe.href=Te,Oe.download=`${fe}.zip`,Oe.click(),URL.revokeObjectURL(Te),y.value="success",setTimeout(()=>y.value="",3e3)}return(Y,g)=>(l(),ot(kl,{title:"Export Project",size:"md",onClose:g[14]||(g[14]=O=>I(r).showExportModal=!1)},{footer:pt(()=>[e("button",{class:"btn btn-secondary",onClick:g[13]||(g[13]=O=>I(r).showExportModal=!1)},"Close")]),default:pt(()=>{var O,W,Ie,F,Z;return[I(p).user?(l(),i(oe,{key:1},[e("div",Mb,[e("button",{class:Q(["tab-btn",h.value==="json"&&"active"]),onClick:g[2]||(g[2]=ne=>h.value="json")},"JSON",2),e("button",{class:Q(["tab-btn",h.value==="html"&&"active"]),onClick:g[3]||(g[3]=ne=>h.value="html")},"HTML",2),e("button",{class:Q(["tab-btn",h.value==="iframe"&&"active"]),onClick:g[4]||(g[4]=ne=>h.value="iframe")},"Iframe",2),e("button",{class:Q(["tab-btn",h.value==="pdf"&&"active"]),onClick:g[5]||(g[5]=ne=>h.value="pdf")},"PDF",2),e("button",{class:Q(["tab-btn",h.value==="scorm"&&"active"]),onClick:g[6]||(g[6]=ne=>h.value="scorm")},"SCORM",2)]),e("div",Pb,[h.value==="json"?(l(),i(oe,{key:0},[g[25]||(g[25]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",Tb,[e("div",Bb,[g[20]||(g[20]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":g[7]||(g[7]=ne=>f.value=ne),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[$e,f.value]])])]),e("div",Nb,[e("div",zb,[g[21]||(g[21]=e("span",null,"Project",-1)),e("strong",null,k((O=c.value)==null?void 0:O.name),1)]),e("div",Lb,[g[22]||(g[22]=e("span",null,"Slides",-1)),e("strong",null,k(((Ie=(W=c.value)==null?void 0:W.slides)==null?void 0:Ie.length)||0),1)]),e("div",jb,[g[23]||(g[23]=e("span",null,"Elements",-1)),e("strong",null,k(((Z=(F=c.value)==null?void 0:F.slides)==null?void 0:Z.reduce((ne,fe)=>{var ie;return ne+(((ie=fe.elements)==null?void 0:ie.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:se},[...g[24]||(g[24]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Download JSON ",-1)])])],64)):h.value==="html"?(l(),i(oe,{key:1},[g[29]||(g[29]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",_b,[e("div",Db,[g[26]||(g[26]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":g[8]||(g[8]=ne=>f.value=ne),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[$e,f.value]])]),e("label",qb,[pe(e("input",{type:"checkbox","onUpdate:modelValue":g[9]||(g[9]=ne=>U.value=ne)},null,512),[[Dt,U.value]]),g[27]||(g[27]=te(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),g[30]||(g[30]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:M},[...g[28]||(g[28]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Download HTML ",-1)])])],64)):h.value==="iframe"?(l(),i(oe,{key:2},[g[34]||(g[34]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Rb,[e("div",Ob,[g[31]||(g[31]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":g[10]||(g[10]=ne=>f.value=ne),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[$e,f.value]])]),e("label",Fb,[pe(e("input",{type:"checkbox","onUpdate:modelValue":g[11]||(g[11]=ne=>U.value=ne)},null,512),[[Dt,U.value]]),g[32]||(g[32]=te(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...g[33]||(g[33]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Download Iframe Zip ",-1)])])],64)):h.value==="pdf"?(l(),i(oe,{key:3},[g[36]||(g[36]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),g[37]||(g[37]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:_},[...g[35]||(g[35]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Generate PDF ",-1)])])],64)):h.value==="scorm"?(l(),i(oe,{key:4},[g[40]||(g[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Vb,[e("div",Ub,[g[38]||(g[38]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":g[12]||(g[12]=ne=>f.value=ne),class:"inp",placeholder:"My Course",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[$e,f.value]])])]),e("div",{style:{display:"flex","justify-content":"flex-end"}},[e("button",{class:"btn btn-primary export-btn",onClick:N},[...g[39]||(g[39]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Download SCORM ",-1)])])])],64)):R("",!0),Et(_t,{name:"fade"},{default:pt(()=>[y.value==="processing"?(l(),i("div",Wb,[...g[41]||(g[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),te(" Generating package... Please wait. ",-1)])])):y.value==="success"?(l(),i("div",Gb,[...g[42]||(g[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),te(" Export successful! Check your downloads folder. ",-1)])])):R("",!0)]),_:1})])],64)):(l(),i("div",Ib,[(l(),i("svg",Eb,[...g[15]||(g[15]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),g[18]||(g[18]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),g[19]||(g[19]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",Ab,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:g[0]||(g[0]=ne=>I(p).loginWithGoogle())},[...g[16]||(g[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),te(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:g[1]||(g[1]=ne=>I(p).loginWithMicrosoft())},[...g[17]||(g[17]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),te(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Yb=Ze(Hb,[["__scopeId","data-v-82048238"]]),Jb={key:0,class:"editor-view"},Qb={class:"editor-topbar"},Xb={class:"topbar-left"},Kb={class:"project-name-wrap"},Zb=["value"],ey={class:"save-label"},ty={class:"topbar-center"},oy={key:0,class:"slide-position"},ny={class:"topbar-right"},ly={class:"editor-body"},iy={class:"authoring-rail"},ay=["onClick","data-tooltip"],sy={key:0,class:"rail-icon"},ry={key:1,class:"rail-icon"},dy={key:2,class:"rail-icon"},uy={key:3,class:"rail-icon"},cy={key:4,class:"rail-icon"},py={key:5,class:"rail-icon"},vy={key:6,class:"rail-icon"},fy={key:7,class:"rail-icon"},my={key:8,class:"rail-icon"},gy={key:9,class:"rail-icon"},by={class:"right-panel"},yy={class:"panel-tabs"},hy=["onClick","data-tooltip"],xy={class:"tab-icon"},wy={class:"tab-label"},ky={class:"panel-content"},Cy={key:1,class:"editor-not-found"},Sy={__name:"EditorView",setup(E){const r=Bl(),d=Tl(),p=st(),c=rt(),h=Il(),y=A(()=>r.params.id),f=A(()=>c.getProject(y.value)),U=A(()=>qt(f.value)),se=A(()=>{var B;return[...((B=f.value)==null?void 0:B.slides)||[]].sort((S,D)=>S.order-D.order)}),H=j(null),V=j(!1),be=j("deck"),{aiStore:z,showAIModal:M,aiMode:a,aiTopic:N,aiContext:_,aiProjectName:ue,aiSlideCount:Y,aiQuestionCount:g,aiDifficulty:O,aiQuestionType:W,aiCreationError:Ie,aiSubmitting:F,aiProjectNamePlaceholder:Z,aiPrimaryActionLabel:ne,openAICreationModal:fe,createAIProject:ie}=zl({onRequireAuth:()=>d.push({name:"dashboard"})});let Ee=!1,C=null;nt(()=>f.value,B=>{if(B){if(Ee){Ee=!1;return}C&&clearTimeout(C),C=setTimeout(()=>{p.pushHistory(B)},600)}},{deep:!0}),nt(()=>h.isAuthReady,async B=>{var S;if(B){if((S=h.user)!=null&&S.uid&&await c.ensureRemoteProjectsLoaded(),!f.value){d.push({name:"dashboard"});return}p.setProject(y.value),se.value.length>0&&p.setCurrentSlide(se.value[0].id),p.pushHistory(f.value)}},{immediate:!0});const L=A(()=>{const B=f.value;return B?`Saved ${new Date(B.updatedAt).toLocaleTimeString()}`:""}),q=A(()=>{switch(p.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});ai({undo:()=>{if(p.canUndo()){const B=p.undo();B&&(Ee=!0,c.updateProject(y.value,B))}},redo:()=>{if(p.canRedo()){const B=p.redo();B&&(Ee=!0,c.updateProject(y.value,B))}},delete:()=>{p.selectedElementId&&(c.deleteElement(p.projectId,p.currentSlideId,p.selectedElementId),p.clearSelection())},escape:()=>{p.clearSelection(),p.setActiveTool("select")},copy:()=>{var S,D,ke,Ge;const B=(Ge=(ke=(D=(S=f.value)==null?void 0:S.slides)==null?void 0:D.find(He=>He.id===p.currentSlideId))==null?void 0:ke.elements)==null?void 0:Ge.find(He=>He.id===p.selectedElementId);B&&p.setClipboard(B)},paste:()=>{if(p.clipboard&&p.currentSlideId){const B=p.clipboard;c.addElement(p.projectId,p.currentSlideId,B.type,{...B,x:B.x+20,y:B.y+20,id:void 0})}},duplicate:()=>{if(p.selectedElementId){const B=c.duplicateElement(p.projectId,p.currentSlideId,p.selectedElementId);B&&p.selectElement(B.id)}},zoomIn:()=>p.zoomIn(),zoomOut:()=>p.zoomOut(),zoomReset:()=>p.zoomReset(),toggleGrid:()=>p.toggleGrid(),nudge:(B,S)=>{var ke,Ge,He,x;if(!p.selectedElementId)return;const D=(x=(He=(Ge=(ke=f.value)==null?void 0:ke.slides)==null?void 0:Ge.find(Ae=>Ae.id===p.currentSlideId))==null?void 0:He.elements)==null?void 0:x.find(Ae=>Ae.id===p.selectedElementId);D&&c.updateElement(p.projectId,p.currentSlideId,p.selectedElementId,{x:D.x+B,y:D.y+S})},selectAll:()=>{var S,D,ke;(((ke=(D=(S=f.value)==null?void 0:S.slides)==null?void 0:D.find(Ge=>Ge.id===p.currentSlideId))==null?void 0:ke.elements)||[]).forEach((Ge,He)=>p.selectElement(Ge.id,He>0))}});function K(){d.push({name:"dashboard"})}function ye(){d.push({name:"preview",params:{id:y.value},query:{from:"editor"}})}function Re(B="deck"){be.value=B,V.value=!0}function Te(){V.value=!1,fe(be.value)}function Oe(B,S="Image"){if(!p.projectId||!p.currentSlideId||!B)return;const D=new Image;D.onload=()=>{const He=Math.min(420/D.width,280/D.height,1),x=Math.max(120,Math.round(D.width*He)),Ae=Math.max(80,Math.round(D.height*He)),Fe=Math.max(24,Math.round((U.value.width-x)/2)),Ve=Math.max(24,Math.round((U.value.height-Ae)/2)),Qe=c.addElement(p.projectId,p.currentSlideId,"image",{x:Fe,y:Ve,width:x,height:Ae,content:{src:B,alt:S,objectFit:"cover"}});Qe&&(p.selectElement(Qe.id),p.setRightPanel("properties"),p.setActiveTool("select"))},D.src=B}function le(B){const[S]=Array.from(B.target.files||[]);if(!S||!S.type.startsWith("image/"))return;const D=new FileReader;D.onload=()=>Oe(String(D.result||""),S.name),D.readAsDataURL(S),B.target.value=""}function me(){var B;(B=H.value)==null||B.click()}const we=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function ce(B){if(B==="text"){p.setActiveTool("text");return}if(B==="blocks"){p.toggleSlidePanel("blocks");return}if(B==="resources"){p.setActiveTool("image");return}if(B==="interactive-elements"){p.setActiveTool("hotspot");return}if(B==="interactive-questions"){p.setActiveTool("quiz");return}if(B==="widgets"){p.setActiveTool("shape");return}if(B==="insert"){me();return}if(B==="style"){p.setRightPanel("properties");return}if(B==="background"){p.clearSelection(),p.setRightPanel("properties");return}B==="pages"&&p.toggleSlidePanel("slides")}function ge(B){return B==="text"?["text","heading"].includes(p.activeTool):B==="blocks"?p.showSlidePanel&&p.leftPanelTab==="blocks":B==="resources"?p.activeTool==="image":B==="interactive-elements"?["hotspot","button"].includes(p.activeTool):B==="interactive-questions"?p.activeTool==="quiz":B==="widgets"?["shape","video","audio","chart"].includes(p.activeTool):B==="insert"?!1:B==="style"||B==="background"?p.rightPanelTab==="properties":B==="pages"?p.showSlidePanel:!1}function re(){_l({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return nt(()=>f.value,B=>{B&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{re()},100)},{immediate:!0}),(B,S)=>f.value?(l(),i("div",Jb,[e("input",{ref_key:"imageInputRef",ref:H,type:"file",accept:"image/*",class:"sr-only",onChange:le},null,544),e("header",Qb,[e("div",Xb,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:K,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...S[14]||(S[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),te(" Dashboard ",-1)])]),e("div",Kb,[e("input",{value:f.value.name,class:"project-name-input",onChange:S[0]||(S[0]=D=>I(c).updateProject(y.value,{name:D.target.value}))},null,40,Zb)]),e("span",ey,k(L.value),1)]),e("div",ty,[I(p).currentSlideId?(l(),i("span",oy," Slide "+k(se.value.findIndex(D=>D.id===I(p).currentSlideId)+1)+" of "+k(se.value.length),1)):R("",!0)]),e("div",ny,[e("button",{class:"btn btn-ghost btn-sm",onClick:re,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...S[15]||(S[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),te(" Help ",-1)])]),e("button",{class:Q(["btn btn-ghost btn-sm",I(p).showAIPanel&&"active-btn"]),onClick:S[1]||(S[1]=D=>{I(p).showAIPanel=!I(p).showAIPanel,I(p).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...S[16]||(S[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),te(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:S[2]||(S[2]=D=>{I(p).showThemeManager=!I(p).showThemeManager,I(p).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...S[17]||(S[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),te(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:ye,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...S[18]||(S[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),te(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:S[3]||(S[3]=D=>I(p).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...S[19]||(S[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),te(" Export ",-1)])])])]),Et(Ef,{onOpenAiProject:Re}),e("div",ly,[e("aside",iy,[(l(),i(oe,null,ve(we,D=>e("button",{key:D.id,class:Q(["rail-option",ge(D.id)&&"active"]),onClick:ke=>ce(D.id),"data-tooltip":D.label,"data-tooltip-position":"right"},[D.id==="text"?(l(),i("span",sy,"T")):D.id==="blocks"?(l(),i("span",ry,[...S[20]||(S[20]=[it('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):D.id==="resources"?(l(),i("span",dy,[...S[21]||(S[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):D.id==="interactive-elements"?(l(),i("span",uy,[...S[22]||(S[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):D.id==="interactive-questions"?(l(),i("span",cy,[...S[23]||(S[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):D.id==="widgets"?(l(),i("span",py,[...S[24]||(S[24]=[it('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):D.id==="insert"?(l(),i("span",vy,[...S[25]||(S[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):D.id==="style"?(l(),i("span",fy,[...S[26]||(S[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):D.id==="background"?(l(),i("span",my,[...S[27]||(S[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):D.id==="pages"?(l(),i("span",gy,[...S[28]||(S[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):R("",!0),te(" "+k(D.label),1)],10,ay)),64))]),Et(_t,{name:"side-panel-slide"},{default:pt(()=>[I(p).showSlidePanel&&I(p).leftPanelTab==="slides"?(l(),ot(wi,{key:0})):R("",!0)]),_:1}),Et(_t,{name:"side-panel-slide"},{default:pt(()=>[I(p).showSlidePanel&&I(p).leftPanelTab==="blocks"?(l(),ot(Ji,{key:0})):R("",!0)]),_:1}),Et(P1),e("aside",by,[e("div",yy,[(l(),i(oe,null,ve([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],D=>e("button",{key:D.id,class:Q(["panel-tab",I(p).rightPanelTab===D.id&&"active"]),onClick:ke=>I(p).setRightPanel(D.id),"data-tooltip":`Open ${D.label}`,"data-tooltip-position":"bottom"},[e("span",xy,k(D.icon),1),e("span",wy,k(D.label),1)],10,hy)),64))]),e("div",ky,[Et(_t,{name:"editor-panel-switch",mode:"out-in"},{default:pt(()=>[(l(),i("div",{key:q.value,class:"panel-content-view"},[I(p).rightPanelTab==="properties"?(l(),ot(Yv,{key:0})):I(p).rightPanelTab==="layers"?(l(),ot(ga,{key:1})):I(p).rightPanelTab==="ai"?(l(),ot(Yg,{key:2})):I(p).rightPanelTab==="theme"?(l(),ot($b,{key:3})):R("",!0)]))]),_:1})])])]),I(p).showExportModal?(l(),ot(Yb,{key:0})):R("",!0),V.value?(l(),ot(Ll,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:S[4]||(S[4]=D=>V.value=!1),onConfirm:Te})):R("",!0),I(M)?(l(),ot(jl,{key:2,mode:I(a),topic:I(N),context:I(_),"project-name":I(ue),"slide-count":I(Y),"question-count":I(g),difficulty:I(O),"question-type":I(W),"project-name-placeholder":I(Z),"primary-action-label":I(ne),"creation-error":I(Ie),"is-submitting":I(F),"is-generating":I(z).isGenerating,"has-api-key":!!I(z).apiKey,onClose:S[5]||(S[5]=D=>M.value=!1),onCreate:I(ie),"onUpdate:mode":S[6]||(S[6]=D=>a.value=D),"onUpdate:topic":S[7]||(S[7]=D=>N.value=D),"onUpdate:context":S[8]||(S[8]=D=>_.value=D),"onUpdate:projectName":S[9]||(S[9]=D=>ue.value=D),"onUpdate:slideCount":S[10]||(S[10]=D=>Y.value=D),"onUpdate:questionCount":S[11]||(S[11]=D=>g.value=D),"onUpdate:difficulty":S[12]||(S[12]=D=>O.value=D),"onUpdate:questionType":S[13]||(S[13]=D=>W.value=D)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):R("",!0)])):(l(),i("div",Cy,[S[29]||(S[29]=e("h2",null,"Project not found",-1)),S[30]||(S[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:K},"Go to Dashboard")]))}},By=Ze(Sy,[["__scopeId","data-v-902e6311"]]);export{By as default};
