import{K as Pn,P as Mn,v as l,F as i,B as e,C as k,H as Z,I as de,E as je,D as J,u as I,Q as be,M as ot,G as F,L as K,q as Ye,R as En,f as P,r as B,N as ue,O as Ce,x as ut,S as Lt,w as Qe,n as Tn,i as qn,U as Rn,y as yt,T as _t,V as Bt,z as Fn,p as On,J as In}from"./vue-core-DCl8Fgqc.js";import{u as Un,d as Vn}from"./vue-ecosystem-Da9kls6U.js";import{u as lt,M as Nn,c as Gn,a as Wn,C as Hn,A as Yn,b as Qn}from"./ConfirmActionModal-BYdUEhkU.js";import{u as it,b as Kn,g as jt,C as Rt,c as Jn,n as Xn,p as Zn,s as el,m as zn,f as Bn,d as _n,e as tl,h as Ft,B as ol,i as nl,j as ll,k as An,a as Ln}from"./projectStore-ofkO9nC1.js";import{_ as Ke}from"./index-CpDRhgn6.js";import{C as il}from"./ChartElement-Djuo991f.js";import{J as al}from"./jszip-529iNPX7.js";function sl(A){function s(u){var g,j,ne,le,W,me,z,N,a,M,_,H,f,U,oe,X,we;const c=u.ctrlKey||u.metaKey,p=u.key.toLowerCase(),y=u.target.tagName.toLowerCase(),h=y==="input"||y==="textarea"||u.target.isContentEditable;h&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!u.shiftKey?(u.preventDefault(),(g=A.undo)==null||g.call(A)):c&&(p==="y"||p==="z"&&u.shiftKey)?(u.preventDefault(),(j=A.redo)==null||j.call(A)):c&&p==="c"?(u.preventDefault(),(ne=A.copy)==null||ne.call(A)):c&&p==="v"?(u.preventDefault(),(le=A.paste)==null||le.call(A)):c&&p==="x"?(u.preventDefault(),(W=A.cut)==null||W.call(A)):c&&p==="d"?(u.preventDefault(),(me=A.duplicate)==null||me.call(A)):c&&p==="a"?(u.preventDefault(),(z=A.selectAll)==null||z.call(A)):p==="delete"||p==="backspace"?h||(u.preventDefault(),(N=A.delete)==null||N.call(A)):p==="escape"?(a=A.escape)==null||a.call(A):c&&p==="g"?(u.preventDefault(),(M=A.toggleGrid)==null||M.call(A)):c&&p==="="||c&&p==="+"?(u.preventDefault(),(_=A.zoomIn)==null||_.call(A)):c&&p==="-"?(u.preventDefault(),(H=A.zoomOut)==null||H.call(A)):c&&p==="0"?(u.preventDefault(),(f=A.zoomReset)==null||f.call(A)):p==="arrowleft"?(U=A.nudge)==null||U.call(A,-1,0):p==="arrowright"?(oe=A.nudge)==null||oe.call(A,1,0):p==="arrowup"?(X=A.nudge)==null||X.call(A,0,-1):p==="arrowdown"&&((we=A.nudge)==null||we.call(A,0,1)))}Pn(()=>window.addEventListener("keydown",s)),Mn(()=>window.removeEventListener("keydown",s))}const rl={class:"slide-panel"},ul={class:"slide-panel-header"},dl={class:"slide-count"},cl={class:"slides-list"},pl=["onClick","onContextmenu","onDragstart","onDrop"],vl={class:"slide-number"},fl=["viewBox"],ml=["x","y","width","height","fill"],gl=["d","stroke"],bl=["d","fill"],yl={class:"slide-footer"},hl={class:"slide-title"},xl=["onClick"],wl={__name:"SlidePanel",setup(A){const s=lt(),u=it(),c=P(()=>u.getProject(s.projectId)),p=P(()=>jt(c.value)),y=P(()=>{var R,V;return((V=(R=c.value)==null?void 0:R.slides)==null?void 0:V.slice().sort((ce,ge)=>ce.order-ge.order))||[]}),h=B({show:!1,x:0,y:0,slideId:null});function g(R){s.setCurrentSlide(R)}function j(){const R=y.value.findIndex(ce=>ce.id===s.currentSlideId),V=u.addSlide(s.projectId,R);V&&s.setCurrentSlide(V.id)}function ne(R){var ge,te;const V=y.value.findIndex(ke=>ke.id===R);u.deleteSlide(s.projectId,R);const ce=((ge=c.value)==null?void 0:ge.slides)||[];if(ce.length>0){const ke=ce.slice().sort((L,D)=>L.order-D.order),C=Math.min(V,ke.length-1);s.setCurrentSlide((te=ke[C])==null?void 0:te.id)}}function le(R,V){R.preventDefault(),h.value={show:!0,x:R.clientX,y:R.clientY,slideId:V},setTimeout(()=>window.addEventListener("click",W,{once:!0}),0)}function W(){h.value.show=!1}function me(){const R=u.duplicateSlide(s.projectId,h.value.slideId);R&&s.setCurrentSlide(R.id),W()}function z(){ne(h.value.slideId),W()}function N(R,V){R.stopPropagation(),ne(V)}function a(){const R=y.value.findIndex(V=>V.id===h.value.slideId);R>0&&u.reorderSlides(s.projectId,R,R-1),W()}function M(){const R=y.value.findIndex(V=>V.id===h.value.slideId);R<y.value.length-1&&u.reorderSlides(s.projectId,R,R+1),W()}let _=-1;function H(R,V){_=V,R.dataTransfer.effectAllowed="move"}function f(R,V){R.preventDefault(),_!==-1&&_!==V&&u.reorderSlides(s.projectId,_,V),_=-1}function U(R){return R.backgroundType==="gradient"&&R.backgroundGradient?{background:R.backgroundGradient}:R.backgroundType==="image"&&R.backgroundImage?{backgroundImage:`url(${R.backgroundImage})`,backgroundSize:"cover"}:{background:R.background||"#fff"}}function oe(R){return{left:R.x/p.value.width*100+"%",top:R.y/p.value.height*100+"%",width:R.width/p.value.width*100+"%",height:R.height/p.value.height*100+"%"}}function X(R){var V,ce;return{background:R.type==="shape"?(V=R.content)==null?void 0:V.fillColor:R.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:R.type==="shape"&&((ce=R.content)==null?void 0:ce.shapeType)==="circle"?"50%":void 0}}function we(R){var V;return Kn(R.content||{},R.width||420,R.height||280,((V=c.value)==null?void 0:V.theme)||{})}return(R,V)=>(l(),i("div",rl,[e("div",ul,[V[2]||(V[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",dl,k(y.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:j,"data-tooltip":"Add slide","aria-label":"Add slide"},[...V[1]||(V[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",cl,[(l(!0),i(Z,null,de(y.value,(ce,ge)=>(l(),i("div",{key:ce.id,class:J(["slide-thumb-item",I(s).currentSlideId===ce.id&&"active"]),draggable:"true",onClick:te=>g(ce.id),onContextmenu:te=>le(te,ce.id),onDragstart:te=>H(te,ge),onDragover:V[0]||(V[0]=je(()=>{},["prevent"])),onDrop:te=>f(te,ge)},[e("div",vl,k(ge+1),1),e("div",{class:"slide-thumb",style:be(U(ce))},[(l(!0),i(Z,null,de(ce.elements.slice(0,6),te=>{var ke;return l(),i("div",{key:te.id,class:"mini-element-frame",style:be(oe(te))},[te.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${te.width||420} ${te.height||280}`,preserveAspectRatio:"none"},[we(te).type==="bar"?(l(!0),i(Z,{key:0},de(we(te).cartesian.bars,C=>(l(),i("rect",{key:`mini-bar-${C.id}`,x:C.x,y:C.y,width:C.width,height:C.height,fill:C.color,rx:"6"},null,8,ml))),128)):we(te).type==="line"?(l(),i("path",{key:1,d:we(te).cartesian.linePath,stroke:((ke=we(te).cartesian.points[0])==null?void 0:ke.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,gl)):(l(!0),i(Z,{key:2},de(we(te).circle.slices,C=>(l(),i("path",{key:`mini-slice-${C.id}`,d:C.path,fill:C.color},null,8,bl))),128))],8,fl)):(l(),i("div",{key:1,class:"mini-element",style:be(X(te))},null,4))],4)}),128))],4),e("div",yl,[e("div",hl,k(ce.title||`Slide ${ge+1}`),1),y.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:te=>N(te,ce.id)},[...V[3]||(V[3]=[ot('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,xl)):F("",!0)])],42,pl))),128))]),e("button",{class:"add-slide-bottom",onClick:j},[...V[4]||(V[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),K(" Add Slide ",-1)])]),(l(),Ye(En,{to:"body"},[h.value.show?(l(),i("div",{key:0,class:"context-menu",style:be({left:h.value.x+"px",top:h.value.y+"px"})},[e("button",{class:"ctx-item",onClick:me},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:M},"Move Down"),V[5]||(V[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:z},"Delete Slide")],4)):F("",!0)]))]))}},kl=Ke(wl,[["__scopeId","data-v-30eea542"]]),Cl={class:"blocks-panel"},$l={class:"blocks-panel-header"},Sl={class:"blocks-toolbar"},Il={class:"blocks-categories"},Al=["onClick"],Pl={class:"blocks-panel-body"},Ml={class:"blocks-save-card"},El=["disabled"],Tl={class:"blocks-list"},Nl=["onDragstart"],zl={class:"block-thumb-stage"},Bl={class:"block-card-body"},_l={class:"block-card-head"},Ll={class:"block-name"},jl={class:"block-meta"},Dl={key:0},ql={key:1},Rl=["onClick"],Fl={class:"block-description"},Ol={key:0,class:"block-binding-note"},Ul={class:"block-tags"},Vl=["onClick"],Gl={class:"binding-modal-body"},Wl={class:"binding-modal-intro"},Hl=["for"],Yl=["id","onUpdate:modelValue"],Ql={__name:"BlocksPanel",setup(A){const s=lt(),u=it(),c=B(""),p=B("all"),y=B(""),h=B("Custom"),g=B(!1),j=B(null),ne=B({}),le=P(()=>u.getProject(s.projectId)),W=P(()=>{var C,L;return(L=(C=le.value)==null?void 0:C.slides)==null?void 0:L.find(D=>D.id===s.currentSlideId)}),me=P(()=>u.getContentBlocks(s.projectId)),z=P(()=>{const C=new Set(["all"]);return me.value.forEach(L=>C.add(L.category||"Custom")),Array.from(C)}),N=P(()=>{var L;const C=new Set(s.selectedElementIds);return(((L=W.value)==null?void 0:L.elements)||[]).filter(D=>C.has(D.id))}),a=P(()=>{var C;return Array.isArray((C=j.value)==null?void 0:C.bindings)?j.value.bindings:[]}),M=P(()=>{const C=c.value.trim().toLowerCase();return me.value.filter(L=>p.value==="all"||(L.category||"Custom")===p.value?C?[L.name,L.description,L.category,...L.tags||[]].join(" ").toLowerCase().includes(C):!0:!1)});function _(C){const L=Array.isArray(C==null?void 0:C.elements)?C.elements:[];if(!L.length)return{minX:0,minY:0,width:1,height:1};const D=Math.min(...L.map(Ie=>Number(Ie.x||0))),Y=Math.min(...L.map(Ie=>Number(Ie.y||0))),ye=Math.max(...L.map(Ie=>Number(Ie.x||0)+Number(Ie.width||0))),Be=Math.max(...L.map(Ie=>Number(Ie.y||0)+Number(Ie.height||0)));return{minX:D,minY:Y,width:Math.max(1,ye-D),height:Math.max(1,Be-Y)}}function H(C,L){const D=_(C);return{left:`${(Number(L.x||0)-D.minX)/D.width*100}%`,top:`${(Number(L.y||0)-D.minY)/D.height*100}%`,width:`${Number(L.width||0)/D.width*100}%`,height:`${Number(L.height||0)/D.height*100}%`}}function f(C){var L,D,Y,ye,Be,Ie,_e;return C.type==="shape"?{background:((L=C.content)==null?void 0:L.fillColor)||"#cbd5e1",borderRadius:((D=C.content)==null?void 0:D.shapeType)==="circle"?"50%":`${Number(((Y=C.content)==null?void 0:Y.borderRadius)||10)}px`,border:`${Math.max(0,Number(((ye=C.content)==null?void 0:ye.borderWidth)||0))}px solid ${((Be=C.content)==null?void 0:Be.borderColor)||"transparent"}`}:C.type==="button"?{background:((Ie=C.content)==null?void 0:Ie.bgColor)||"#6c47ff",borderRadius:`${Number(((_e=C.content)==null?void 0:_e.borderRadius)||10)}px`}:C.type==="image"||C.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:C.type==="text"||C.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function U(C,L){const D=C.type==="heading"?2:3,Y=Math.max(18,100/(D+1.25));return{width:`${L===D-1?72:100}%`,height:`${C.type==="heading"?Y:Y-2}%`}}function oe(C){C.length&&(s.setSelection(C.map(L=>L.id)),s.focusPropertiesSection("content"),s.setActiveTool("select"))}function X(C){return Array.isArray(C==null?void 0:C.bindings)&&C.bindings.length>0}function we(){g.value=!1,j.value=null,ne.value={}}function R(C,L=null){const D=u.insertContentBlock(s.projectId,s.currentSlideId,C.id,L?{bindingValues:L}:{});oe(D)}function V(C){if(!X(C)){R(C);return}j.value=C,ne.value=Object.fromEntries(C.bindings.map(L=>[L.id,L.defaultValue||""])),g.value=!0}function ce(){j.value&&(R(j.value,{...ne.value}),we())}function ge(){var D,Y;const C=y.value.trim();if(!C||!N.value.length)return;u.saveSelectionAsContentBlock(s.projectId,s.currentSlideId,N.value.map(ye=>ye.id),{name:C,category:h.value.trim()||"Custom",accent:((Y=(D=le.value)==null?void 0:D.theme)==null?void 0:Y.primaryColor)||"#6c47ff"})&&(y.value="",p.value="Custom")}function te(C){u.deleteContentBlock(s.projectId,C)}function ke(C,L){C.dataTransfer&&(C.dataTransfer.effectAllowed="copy",C.dataTransfer.setData(Rt,JSON.stringify({id:L.id})),C.dataTransfer.setData("text/plain",L.name))}return(C,L)=>(l(),i("div",Cl,[e("div",$l,[L[5]||(L[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:L[0]||(L[0]=D=>I(s).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...L[4]||(L[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",Sl,[ue(e("input",{"onUpdate:modelValue":L[1]||(L[1]=D=>c.value=D),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[Ce,c.value]]),e("div",Il,[(l(!0),i(Z,null,de(z.value,D=>(l(),i("button",{key:D,type:"button",class:J(["blocks-category-chip",p.value===D&&"active"]),onClick:Y=>p.value=D},k(D==="all"?"All":D),11,Al))),128))])]),e("div",Pl,[e("div",Ml,[L[6]||(L[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),L[7]||(L[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),ue(e("input",{"onUpdate:modelValue":L[2]||(L[2]=D=>y.value=D),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[Ce,y.value]]),ue(e("input",{"onUpdate:modelValue":L[3]||(L[3]=D=>h.value=D),class:"input",placeholder:"Category"},null,512),[[Ce,h.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!N.value.length||!y.value.trim(),onClick:ge}," Save "+k(N.value.length?`${N.value.length} item${N.value.length>1?"s":""}`:"selection")+" as block ",9,El)]),e("div",Tl,[(l(!0),i(Z,null,de(M.value,D=>(l(),i("div",{key:D.id,class:"block-card",draggable:"true",onDragstart:Y=>ke(Y,D)},[e("div",{class:"block-thumb",style:be({"--block-accent":D.accent||"#6c47ff"})},[e("div",zl,[(l(!0),i(Z,null,de(D.elements,Y=>(l(),i("div",{key:`${D.id}-${Y.type}-${Y.x}-${Y.y}`,class:"block-thumb-frame",style:be(H(D,Y))},[["text","heading"].includes(Y.type)?(l(),i("div",{key:0,class:J(["thumb-text",Y.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(Z,null,de(Y.type==="heading"?2:3,ye=>(l(),i("span",{key:`${D.id}-${Y.type}-${Y.x}-${Y.y}-${ye}`,class:"thumb-text-line",style:be(U(Y,ye-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:be(f(Y))},null,4))],4))),128))])],4),e("div",Bl,[e("div",_l,[e("div",null,[e("div",Ll,k(D.name),1),e("div",jl,[K(k(D.category),1),D.scope==="custom"?(l(),i("span",Dl," · Custom")):F("",!0),X(D)?(l(),i("span",ql," · "+k(D.bindings.length)+" field"+k(D.bindings.length>1?"s":""),1)):F("",!0)])]),D.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:Y=>te(D.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...L[8]||(L[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,Rl)):F("",!0)]),e("p",Fl,k(D.description||"Reusable layout block"),1),X(D)?(l(),i("div",Ol,"Editable placeholders included")):F("",!0),e("div",Ul,[(l(!0),i(Z,null,de(D.tags||[],Y=>(l(),i("span",{key:`${D.id}-${Y}`,class:"block-tag"},"#"+k(Y),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:Y=>V(D)},k(X(D)?"Insert with Fields":"Insert Block"),9,Vl)])],40,Nl))),128))])]),g.value?(l(),Ye(Nn,{key:0,title:"Fill Template Fields",size:"md",onClose:we},{footer:ut(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:we},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:ce},"Insert Block")]),default:ut(()=>{var D;return[e("div",Gl,[e("p",Wl,[L[9]||(L[9]=K(" Customize the placeholder text before inserting ",-1)),e("strong",null,k((D=j.value)==null?void 0:D.name),1),L[10]||(L[10]=K(". ",-1))]),(l(!0),i(Z,null,de(a.value,Y=>(l(),i("div",{key:Y.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${Y.id}`},k(Y.label),9,Hl),ue(e("textarea",{id:`binding-${Y.id}`,"onUpdate:modelValue":ye=>ne.value[Y.id]=ye,class:"textarea binding-input"},null,8,Yl),[[Ce,ne.value[Y.id]]])]))),128))])]}),_:1})):F("",!0)]))}},Kl=Ke(Ql,[["__scopeId","data-v-aec67d0c"]]),Jl={class:"layer-panel"},Xl={class:"layer-header panel-section"},Zl={class:"panel-title",style:{"margin-bottom":"0"}},ei={class:"layer-count"},ti={key:0,class:"layers-empty"},oi={key:1,class:"layers-list"},ni=["onClick"],li={class:"layer-type-icon"},ii={class:"layer-name"},ai={class:"layer-actions"},si=["onClick","data-tooltip"],ri={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ui={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},di=["onClick","data-tooltip"],ci={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pi={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vi=["onClick"],fi=["onClick"],mi=["onClick"],gi={__name:"LayerPanel",setup(A){const s=lt(),u=it(),c=P(()=>u.getProject(s.projectId)),p=P(()=>{var N,a;return(a=(N=c.value)==null?void 0:N.slides)==null?void 0:a.find(M=>M.id===s.currentSlideId)}),y=P(()=>{var N;return[...((N=p.value)==null?void 0:N.elements)||[]].sort((a,M)=>(M.zIndex||0)-(a.zIndex||0))});function h(N){s.selectElement(N)}function g(N){u.updateElement(s.projectId,s.currentSlideId,N.id,{visible:!N.visible})}function j(N){u.updateElement(s.projectId,s.currentSlideId,N.id,{locked:!N.locked})}function ne(N){u.reorderElement(s.projectId,s.currentSlideId,N,"up")}function le(N){u.reorderElement(s.projectId,s.currentSlideId,N,"down")}function W(N){u.deleteElement(s.projectId,s.currentSlideId,N),s.selectedElementId===N&&s.clearSelection()}function me(N){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[N]||"◆"}function z(N){var a,M,_;return(a=N.content)!=null&&a.text?N.content.text.slice(0,24):(M=N.content)!=null&&M.label?N.content.label:(_=N.content)!=null&&_.question?N.content.question.slice(0,24):N.type.charAt(0).toUpperCase()+N.type.slice(1)}return(N,a)=>(l(),i("div",Jl,[e("div",Xl,[e("div",Zl,[a[0]||(a[0]=K(" Layers ",-1)),e("span",ei,k(y.value.length),1)])]),y.value.length===0?(l(),i("div",ti,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",oi,[(l(!0),i(Z,null,de(y.value,M=>(l(),i("div",{key:M.id,class:J(["layer-item",I(s).selectedElementIds.includes(M.id)&&"selected",M.locked&&"locked",!M.visible&&"hidden"]),onClick:_=>h(M.id)},[e("span",li,k(me(M.type)),1),e("span",ii,k(z(M)),1),e("div",ai,[e("button",{class:J(["layer-action-btn",{active:M.visible}]),onClick:je(_=>g(M),["stop"]),"data-tooltip":M.visible?"Hide":"Show"},[M.visible?(l(),i("svg",ri,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",ui,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,si),e("button",{class:J(["layer-action-btn",{active:M.locked}]),onClick:je(_=>j(M),["stop"]),"data-tooltip":M.locked?"Unlock":"Lock"},[M.locked?(l(),i("svg",ci,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",pi,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,di),e("button",{class:"layer-action-btn",onClick:je(_=>ne(M.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,vi),e("button",{class:"layer-action-btn",onClick:je(_=>le(M.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,fi),e("button",{class:"layer-action-btn danger",onClick:je(_=>W(M.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,mi)])],10,ni))),128))]))]))}},bi=Ke(gi,[["__scopeId","data-v-7407acd8"]]),yi={class:"panel-section"},hi={class:"preset-toolbar"},xi=["value"],wi=["value"],ki=["value"],Ci={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},$i=["onClick"],Si={class:"preset-meta-chip muted"},Ii={key:1,class:"import-review"},Ai={class:"motion-scrubber-header"},Pi={class:"preset-toolbar compact"},Mi=["value"],Ei=["value"],Ti={class:"import-list"},Ni=["onUpdate:modelValue"],zi={class:"import-item-title"},Bi={class:"preset-meta-chip"},_i={key:0,class:"preset-meta-chip muted"},Li={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(A,{emit:s}){const u=s;return(c,p)=>(l(),i("div",yi,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",hi,[e("input",{value:A.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=y=>u("update:searchQuery",y.target.value))},null,40,xi),e("select",{value:A.categoryFilter,class:"select",onChange:p[1]||(p[1]=y=>u("update:categoryFilter",y.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(Z,null,de(A.availableCategories,y=>(l(),i("option",{key:`library-${y}`,value:y},k(y),9,ki))),128))],40,wi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=y=>u("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=y=>u("export-presets"))},"Export")]),A.recentPresets.length?(l(),i("div",Ci,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(Z,null,de(A.recentPresets,y=>(l(),i("div",{class:"preset-item",key:`recent-${y.id}`},[e("button",{type:"button",class:"preset-chip",onClick:h=>u("apply-preset",y)},k(y.name),9,$i),e("span",Si,"Used "+k(y.usageCount)+"x",1)]))),128))])):F("",!0),A.pendingImportedPresets.length?(l(),i("div",Ii,[e("div",Ai,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=y=>u("clear-imports"))},"Discard")]),e("div",Pi,[e("select",{value:A.importScopeFilter,class:"select",onChange:p[5]||(p[5]=y=>u("update:importScopeFilter",y.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Mi),e("select",{value:A.importConflictMode,class:"select",onChange:p[6]||(p[6]=y=>u("update:importConflictMode",y.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Ei),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=y=>u("apply-imports"))},"Merge Selected")]),e("div",Ti,[(l(!0),i(Z,null,de(A.filteredPendingImports,y=>(l(),i("label",{key:`pending-${y.id}`,class:"import-item"},[ue(e("input",{"onUpdate:modelValue":h=>y.selected=h,type:"checkbox"},null,8,Ni),[[Lt,y.selected]]),e("span",zi,k(y.name),1),e("span",Bi,k(y.scope),1),y.category?(l(),i("span",_i,k(y.category),1)):F("",!0)]))),128))])])):F("",!0)]))}},ji=Ke(Li,[["__scopeId","data-v-61f99273"]]),Di={key:1,class:"panel-section"},qi={class:"field-hint"},Ri={class:"motion-scrubber-shell"},Fi={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Oi=["onClick"],Ui={class:"motion-preview"},Vi={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Gi={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Wi={class:"motion-card-label"},Hi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Yi={class:"form-group"},Qi={class:"form-group"},Ki={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ji={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Xi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Zi={key:0,class:"preset-list"},ea=["onDragstart","onDragenter","onDrop"],ta=["onClick"],oa={key:0,class:"preset-meta-chip"},na=["onClick"],la=["onClick"],ia=["onClick"],aa={key:1,class:"preset-row preset-edit-row"},sa=["onClick"],ra={key:1,class:"field-hint"},ua={key:2,class:"panel-section"},da={class:"slide-settings-tabs"},ca={key:0,class:"slide-settings-pane"},pa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},va={class:"form-group"},fa={class:"bg-type-tabs"},ma=["onClick"],ga={key:0,class:"color-row"},ba=["value"],ya=["value"],ha={class:"slide-settings-subsection"},xa={class:"canvas-size-grid"},wa=["onClick"],ka={class:"canvas-size-icon-shell"},Ca={class:"canvas-size-name"},$a={class:"canvas-size-ratio"},Sa={class:"canvas-custom-card"},Ia={class:"canvas-custom-header"},Aa={class:"field-hint"},Pa={class:"canvas-custom-inputs"},Ma={class:"form-group"},Ea={class:"canvas-size-input-wrap"},Ta=["value"],Na={class:"form-group"},za={class:"canvas-size-input-wrap"},Ba=["value"],_a={class:"check-row canvas-size-lock"},La={class:"slide-settings-subsection"},ja={key:1,class:"slide-settings-pane"},Da=["value"],qa={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ra=["value"],Fa={class:"check-row"},Oa=["checked"],Ua={key:2,class:"slide-settings-pane"},Va={class:"check-row"},Ga=["checked"],Wa={class:"check-row"},Ha=["checked"],Ya={class:"check-row"},Qa=["checked"],Ka={class:"check-row"},Ja=["checked"],Xa={class:"check-row"},Za=["checked"],es={class:"panel-title"},ts={class:"element-type-badge"},os={class:"geo-grid"},ns={class:"form-group"},ls=["value"],is={class:"form-group"},as=["value"],ss={class:"form-group"},rs=["value"],us={class:"form-group"},ds=["value"],cs={class:"form-group"},ps=["value"],vs={class:"form-group"},fs=["value"],ms={class:"motion-scrubber-shell"},gs={class:"motion-card-grid"},bs=["onClick"],ys={class:"motion-preview"},hs={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},xs={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},ws={class:"motion-card-label"},ks={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Cs={class:"form-group"},$s=["value"],Ss={class:"form-group"},Is=["value"],As={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ps={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Ms={key:0,class:"preset-list"},Es=["onDragstart","onDragenter","onDrop"],Ts=["onClick"],Ns={key:0,class:"preset-meta-chip"},zs=["onClick"],Bs=["onClick"],_s=["onClick"],Ls={key:1,class:"preset-row preset-edit-row"},js=["onClick"],Ds={key:1,class:"field-hint"},qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rs=["value"],Fs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Os={class:"form-group"},Us=["value"],Vs={class:"form-group"},Gs=["value"],Ws={class:"form-group",style:{"margin-top":"var(--space-3)"}},Hs=["value"],Ys=["value"],Qs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ks={class:"align-btns"},Js=["onClick"],Xs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Zs={class:"style-btns"},er={class:"form-group",style:{"margin-top":"var(--space-3)"}},tr={class:"color-row"},or=["value"],nr=["value"],lr={class:"form-group",style:{"margin-top":"var(--space-3)"}},ir=["value"],ar={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},sr={class:"form-group"},rr=["value"],ur={class:"form-group"},dr=["value"],cr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pr=["value"],vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fr=["value"],mr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gr=["value"],br={class:"form-group"},yr=["value"],hr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},xr={class:"form-group"},wr=["value"],kr={class:"form-group"},Cr=["value"],$r={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sr=["value"],Ir={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ar={class:"color-row"},Pr=["value"],Mr=["value"],Er={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tr={class:"color-row"},Nr=["value"],zr=["value"],Br={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_r=["value"],Lr={class:"form-group"},jr=["value"],Dr={class:"form-group",style:{"margin-top":"var(--space-3)"}},qr=["value"],Rr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fr=["value"],Or={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ur=["value"],Vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gr=["value"],Wr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Hr={class:"chart-data-actions"},Yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qr=["value","placeholder"],Kr={class:"chart-palette-preview"},Jr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Xr={class:"form-group"},Zr=["value"],eu={class:"form-group"},tu=["value"],ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},nu={class:"form-group"},lu=["value"],iu={class:"form-group"},au=["value"],su={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},ru={class:"form-group"},uu=["value"],du={key:0,class:"form-group"},cu=["value"],pu={key:1,class:"form-group"},vu=["value"],fu={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},mu={class:"form-group"},gu=["value"],bu={class:"check-row",style:{"margin-top":"20px"}},yu=["checked"],hu={class:"check-row"},xu=["checked"],wu={key:1,class:"check-row"},ku=["checked"],Cu={class:"check-row"},$u=["checked"],Su={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Iu=["value"],Au={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pu=["value"],Mu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Eu=["value"],Tu={key:0,class:"form-group"},Nu=["value"],zu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Bu={class:"form-group"},_u=["value"],Lu={class:"form-group"},ju=["value"],Du={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},qu={class:"form-group"},Ru=["value"],Fu={class:"form-group"},Ou=["value"],Uu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Vu={class:"form-group"},Gu=["value"],Wu={class:"form-group"},Hu=["value"],Yu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Qu={class:"form-group"},Ku=["value"],Ju=["value"],Xu={class:"form-group"},Zu=["value"],ed={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},td=["value"],od={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nd={class:"color-row"},ld=["value"],id=["value"],ad={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},sd={class:"form-group"},rd=["value"],ud={class:"form-group"},dd=["value"],cd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pd=["value"],vd={class:"form-group"},fd=["value"],md={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},gd={class:"form-group"},bd=["value"],yd={class:"form-group"},hd=["value"],xd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wd=["value"],kd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cd=["value"],$d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sd=["value"],Id={class:"check-row"},Ad=["checked"],Pd={class:"check-row"},Md=["checked"],Ed={class:"check-row"},Td=["checked"],Nd={class:"check-row"},zd=["checked"],Bd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_d=["value"],Ld={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jd=["value"],Dd={class:"check-row"},qd=["checked"],Rd={class:"check-row"},Fd=["checked"],Od={class:"check-row"},Ud=["checked"],Vd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Gd={class:"form-group"},Wd=["value"],Hd={class:"form-group"},Yd=["value"],Qd={class:"form-group",style:{"margin-top":"var(--space-3)"}},Kd=["value"],Jd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xd=["value"],Zd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ec=["value"],tc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},oc=["value"],nc={class:"form-group"},lc=["value"],ic={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ac={class:"form-group"},sc=["value"],rc={class:"form-group"},uc=["value"],dc={class:"form-group",style:{"margin-top":"var(--space-3)"}},cc=["value"],pc={class:"panel-section"},vc={class:"actions-list"},fc={__name:"PropertiesPanel",setup(A){const s=lt(),u=it(),c=P(()=>u.getProject(s.projectId)),p=P(()=>{var d,t;return(t=(d=c.value)==null?void 0:d.slides)==null?void 0:t.find(O=>O.id===s.currentSlideId)}),y=P(()=>{var d;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((d=c.value)==null?void 0:d.settings)||{}}}),h=P(()=>jt(y.value)),g=P(()=>zn(y.value)),j=P(()=>Bn(h.value.width,h.value.height)),ne=B(!0),le=B("canvas"),W=P(()=>Array.isArray(y.value.motionPresets)?y.value.motionPresets:[]),me=P(()=>W.value.filter(d=>d.scope!=="group")),z=P(()=>W.value.filter(d=>d.scope==="group")),N=P(()=>{var t;const d=new Set(s.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(O=>d.has(O.id))}),a=P(()=>{var d,t;return s.selectedElementId?(t=(d=p.value)==null?void 0:d.elements)==null?void 0:t.find(O=>O.id===s.selectedElementId):null}),M=P(()=>s.multiSelection||!!a.value),_=P(()=>s.multiSelection?"group":"single"),H=P(()=>{var t,O;const d=(O=(t=a.value)==null?void 0:t.animations)==null?void 0:O[0];return{type:(d==null?void 0:d.type)||"auto",delay:Number((d==null?void 0:d.delay)||0),duration:Number((d==null?void 0:d.duration)||.64)}}),f=P(()=>{var ze,Ge;const d=N.value.map(Fe=>{var bt;return((bt=Fe.animations)==null?void 0:bt[0])||null}),t=((ze=d[0])==null?void 0:ze.type)||"auto",O=Number(((Ge=d[0])==null?void 0:Ge.duration)||.64),pe=d.every(Fe=>((Fe==null?void 0:Fe.type)||"auto")===t),Pe=d.every(Fe=>Number((Fe==null?void 0:Fe.duration)||.64)===O);return{type:pe?t:"mixed",duration:Pe?O:.64}}),U=B(0),oe=B(0),X=B(""),we=B(""),R=B(""),V=B(""),ce=B(""),ge=B(""),te=B(""),ke=B(""),C=B(""),L=B(""),D=B(""),Y=B(""),ye=B(""),Be=B("all"),Ie=B(null),_e=B(null),ee=B([]),ve=B("all"),ie=B("replace"),fe=B(""),Me=B(null),he=B("");let S=null;const $=B({});Qe(a,d=>{d?$.value=JSON.parse(JSON.stringify(d)):$.value={},(d==null?void 0:d.type)==="chart"&&(fe.value="")},{immediate:!0,deep:!0}),Qe(()=>{var d;return[s.propertiesPanelSection,(d=a.value)==null?void 0:d.id,s.rightPanelTab]},async([d,t,O])=>{var Pe;if(!d||!t||O!=="properties")return;await Tn();const pe=(Pe=Me.value)==null?void 0:Pe.querySelector(`[data-props-anchor="${d}"]`);pe&&(pe.scrollIntoView({behavior:"smooth",block:"start"}),he.value=d,S&&window.clearTimeout(S),S=window.setTimeout(()=>{he.value===d&&(he.value="")},1400))},{immediate:!0});function q(d){a.value&&u.updateElement(s.projectId,s.currentSlideId,a.value.id,d)}function x(d){if(!a.value)return;const t={...a.value.content,...d};q({content:t})}function De(d,t){const O=parseFloat(t);isNaN(O)||q({[d]:O})}const Ee=B({});Qe(p,d=>{d&&(Ee.value={...d})},{immediate:!0});function Oe(d){p.value&&u.updateSlide(s.projectId,p.value.id,d)}function xe(d){if(!c.value)return;const t={...y.value,...d};u.updateProject(s.projectId,{settings:{...t,...Xn(t)}})}function We(d){xe({slideWidth:d.width,slideHeight:d.height})}function at(d,t){const O=Math.round(Number(t)||0);if(!O)return;const pe={[`slide${d==="width"?"Width":"Height"}`]:O};if(ne.value){const Pe=h.value.width,ze=h.value.height;d==="width"?pe.slideHeight=Math.round(O*(ze/Pe)):pe.slideWidth=Math.round(O*(Pe/ze))}xe(pe)}const Xe=P(()=>{var d;return _n(((d=c.value)==null?void 0:d.theme)||{})}),dt=P(()=>{var t,O;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const d=((O=a.value.content)==null?void 0:O.paletteText)||Xe.value.paletteText;return tl(d)});function ht(d){const t=Zn(d,{fallbackToDefault:!1});return t.length?el(t):""}function st(d){var O;if(((O=a.value)==null?void 0:O.type)!=="chart")return;const t=ht(d);t&&(x({dataText:t}),fe.value="")}async function Le(d){var pe;const t=d.target,O=(pe=t==null?void 0:t.files)==null?void 0:pe[0];if(O)try{const Pe=await O.text();st(Pe)}finally{t&&(t.value="")}}function ct(){var d;(d=_e.value)==null||d.click()}function Ze(){var t,O;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const d=ht(((O=a.value.content)==null?void 0:O.dataText)||"");d&&x({dataText:d})}function $t(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&x({...Xe.value})}function St(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&x({paletteText:Xe.value.paletteText})}function pt(d){return String(d||"").split(",").map(t=>t.trim()).filter(Boolean)}function It(d){const t=(d==null?void 0:d.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((d==null?void 0:d.name)||"Imported Preset").trim()||"Imported Preset",category:String((d==null?void 0:d.category)||"").trim(),tags:Array.isArray(d==null?void 0:d.tags)?d.tags.map(O=>String(O).trim()).filter(Boolean):pt(d==null?void 0:d.tags),type:String((d==null?void 0:d.type)||"auto"),delay:Math.max(0,Number(d==null?void 0:d.delay)||0),duration:Math.max(.1,Number(d==null?void 0:d.duration)||.72),stepDelay:Math.max(0,Number(d==null?void 0:d.stepDelay)||0)}}const At=P(()=>[...new Set(W.value.map(t=>t.category).filter(Boolean))].sort((t,O)=>t.localeCompare(O))),Pt=P(()=>[...W.value].filter(d=>Number(d.usageCount||0)>0).sort((d,t)=>{const O=Number(t.lastUsedAt||0)-Number(d.lastUsedAt||0);return O!==0?O:Number(t.usageCount||0)-Number(d.usageCount||0)}).slice(0,6)),Mt=P(()=>ve.value==="all"?ee.value:ee.value.filter(d=>d.scope===ve.value));function m(d){const t=ye.value.trim().toLowerCase(),O=Be.value;return O==="all"||(d.category||"")===O?t?[d.name,d.category,...d.tags||[]].filter(Boolean).some(Pe=>String(Pe).toLowerCase().includes(t)):!0:!1}const w=P(()=>me.value.filter(m)),Q=P(()=>z.value.filter(m)),G=P(()=>Pt.value.filter(d=>_.value==="group"?d.scope==="group":d.scope!=="group"));function $e(d){const t=String(d.name||"").trim();if(!t)return;const O=W.value.findIndex(ze=>ze.scope===d.scope&&ze.name.toLowerCase()===t.toLowerCase()),pe={...d,id:O>=0?W.value[O].id:`motion-${Date.now()}`,name:t,category:String(d.category||"").trim(),tags:Array.isArray(d.tags)?d.tags:pt(d.tags)},Pe=[...W.value];O>=0?Pe.splice(O,1,pe):Pe.push(pe),xe({motionPresets:Pe})}function Ae(d,t){const O=W.value.map(pe=>pe.id===d?{...pe,...t}:pe);xe({motionPresets:O})}function qe(d){const t=W.value.find(O=>O.id===d);t&&Ae(d,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function Ue(d,t){const O=W.value.filter(Ge=>Ge.scope===d).map(Ge=>Ge.name.toLowerCase()),pe=String(t||"Preset").trim()||"Preset";if(!O.includes(pe.toLowerCase()))return pe;let Pe=2,ze=`${pe} Copy`;for(;O.includes(ze.toLowerCase());)ze=`${pe} Copy ${Pe}`,Pe+=1;return ze}function re(d){xe({motionPresets:W.value.filter(t=>t.id!==d)}),R.value===d&&(R.value="",V.value="")}function Se(d){$e({...d,id:void 0,name:Ue(d.scope,d.name)})}function He(d){R.value=d.id,V.value=d.name,ce.value=d.category||"",ge.value=Array.isArray(d.tags)?d.tags.join(", "):""}function Re(){R.value="",V.value="",ce.value="",ge.value=""}function Ne(d){const t=String(V.value||"").trim();t&&(Ae(d,{name:t,category:String(ce.value||"").trim(),tags:pt(ge.value)}),Re())}function Ve(d,t,O){if(!t||!O||t===O)return;const pe=W.value.filter(nt=>nt.scope===d),Pe=pe.findIndex(nt=>nt.id===t),ze=pe.findIndex(nt=>nt.id===O);if(Pe===-1||ze===-1)return;const Ge=[...pe],[Fe]=Ge.splice(Pe,1);Ge.splice(ze,0,Fe);const bt=W.value.filter(nt=>nt.scope!==d),Ct=[];W.value.forEach(nt=>{if(nt.scope===d){Ge.length&&Ct.push(Ge.shift());return}const zt=bt.shift();zt&&Ct.push(zt)}),xe({motionPresets:Ct})}function vt(d){te.value=d.id,ke.value=d.id}function ft(d){te.value&&(ke.value=d.id)}function Je(d){te.value&&(Ve(d.scope,te.value,d.id),te.value="",ke.value="")}function mt(){te.value="",ke.value=""}function Et(){U.value+=1}function Tt(){oe.value+=1}function Nt(d,t){Oe({[d]:t})}function Dt(d){const t=Math.max(0,Number(d)||0);Oe({duration:t})}function xt(d){var pe;if(!a.value)return;const O={...((pe=a.value.animations)==null?void 0:pe[0])||{type:"auto",delay:0,duration:.64},...d};if(O.type==="auto"){q({animations:[]});return}q({animations:[{type:O.type||"none",delay:Math.max(0,Number(O.delay)||0),duration:Math.max(.1,Number(O.duration)||.64)}]})}const rt=B("stagger-in"),gt=B(0),r=B(.12),o=B(.72);Qe(N,d=>{d.length&&(rt.value=f.value.type==="mixed"?"stagger-in":f.value.type,o.value=f.value.duration)},{immediate:!0,deep:!0});function v(){if(!N.value.length)return;[...N.value].sort((t,O)=>(t.y||0)!==(O.y||0)?(t.y||0)-(O.y||0):(t.x||0)-(O.x||0)).forEach((t,O)=>{if(rt.value==="auto"){u.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}u.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:rt.value,delay:Math.max(0,Number(gt.value)||0)+O*Math.max(0,Number(r.value)||0),duration:Math.max(.1,Number(o.value)||.72)}]})})}function E(d){rt.value=d.type||"stagger-in",gt.value=Number(d.delay||0),r.value=Number(d.stepDelay||0),o.value=Number(d.duration||.72),qe(d.id),Tt()}function b(){$e({scope:"group",name:we.value,category:D.value,tags:pt(Y.value),type:rt.value,delay:Math.max(0,Number(gt.value)||0),stepDelay:Math.max(0,Number(r.value)||0),duration:Math.max(.1,Number(o.value)||.72)}),we.value="",D.value="",Y.value=""}function se(d){xt({type:d.type||"auto",delay:Number(d.delay||0),duration:Number(d.duration||.72)}),qe(d.id),Et()}function Te(){$e({scope:"single",name:X.value,category:C.value,tags:pt(L.value),type:H.value.type,delay:Math.max(0,Number(H.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(H.value.duration)||.72)}),X.value="",C.value="",L.value=""}function et(){var d;(d=Ie.value)==null||d.click()}async function T(d){var pe;const t=d.target,O=(pe=t==null?void 0:t.files)==null?void 0:pe[0];if(O)try{const Pe=await O.text(),ze=JSON.parse(Pe),Ge=Array.isArray(ze)?ze:Array.isArray(ze.motionPresets)?ze.motionPresets:[];if(!Ge.length)return;ee.value=Ge.map(Fe=>({...It(Fe),selected:!0,importName:String((Fe==null?void 0:Fe.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function tt(){ee.value=[]}function wt(){const d=ee.value.filter(O=>O.selected);if(!d.length)return;const t=[...W.value];d.forEach(O=>{const pe=t.findIndex(Pe=>Pe.scope===O.scope&&Pe.name.toLowerCase()===O.name.toLowerCase());if(pe>=0){ie.value==="replace"?t.splice(pe,1,{...t[pe],...O,id:t[pe].id}):t.push({...O,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:Ue(O.scope,O.name)});return}t.push(O)}),xe({motionPresets:t}),tt()}function kt(){var ze;if(!W.value.length)return;const d={version:1,exportedAt:new Date().toISOString(),motionPresets:W.value.map(({id:Ge,...Fe})=>Fe)},t=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),O=URL.createObjectURL(t),pe=document.createElement("a"),Pe=String(((ze=c.value)==null?void 0:ze.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";pe.href=O,pe.download=`${Pe}-motion-presets.json`,document.body.appendChild(pe),pe.click(),document.body.removeChild(pe),URL.revokeObjectURL(O)}const jn=P(()=>[{id:`single-${U.value}`,delay:Math.max(0,Number(H.value.delay)||0),duration:Math.max(.1,Number(H.value.duration)||.72),type:H.value.type}]),Dn=P(()=>Array.from({length:Math.min(Math.max(N.value.length,3),5)},(d,t)=>({id:`group-${oe.value}-${t}`,delay:Math.max(0,Number(gt.value)||0)+t*Math.max(0,Number(r.value)||0),duration:Math.max(.1,Number(o.value)||.72),type:rt.value}))),Ot=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Ut=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(d,t)=>{var O,pe,Pe,ze,Ge,Fe,bt,Ct,nt,zt,Vt,Gt,Wt,Ht,Yt,Qt,Kt,Jt,Xt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,yo,ho,xo,wo,ko,Co,$o,So,Io,Ao,Po,Mo,Eo,To,No,zo,Bo,_o,Lo,jo,Do,qo,Ro,Fo,Oo,Uo,Vo,Go,Wo,Ho,Yo,Qo,Ko,Jo,Xo,Zo,en,tn,on,nn,ln,an,sn,rn,un,dn,cn,pn,vn,fn,mn,gn,bn,yn,hn,xn,wn,kn,Cn,$n;return l(),i("div",{ref_key:"panelRootRef",ref:Me,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Ie,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:T},null,544),e("input",{ref_key:"chartImportInput",ref:_e,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:Le},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),M.value?(l(),Ye(ji,{key:0,"search-query":ye.value,"category-filter":Be.value,"available-categories":At.value,"recent-presets":G.value,"pending-imported-presets":ee.value,"filtered-pending-imports":Mt.value,"import-scope-filter":ve.value,"import-conflict-mode":ie.value,"onUpdate:searchQuery":t[0]||(t[0]=n=>ye.value=n),"onUpdate:categoryFilter":t[1]||(t[1]=n=>Be.value=n),onTriggerImport:et,onExportPresets:kt,onApplyPreset:t[2]||(t[2]=n=>_.value==="group"?E(n):se(n)),onClearImports:tt,"onUpdate:importScopeFilter":t[3]||(t[3]=n=>ve.value=n),"onUpdate:importConflictMode":t[4]||(t[4]=n=>ie.value=n),onApplyImports:wt},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):F("",!0),I(s).multiSelection?(l(),i("div",Di,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",qi,k(N.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",Ri,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Tt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${oe.value}`},[(l(!0),i(Z,null,de(Dn.value,n=>(l(),i("span",{key:n.id,class:J(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:be({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",Fi,[(l(),i(Z,null,de(Ot,n=>e("button",{key:`group-${n.value}`,type:"button",class:J(["motion-card",rt.value===n.value&&"active"]),onClick:ae=>rt.value=n.value},[e("span",Ui,[e("span",{class:J(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",Vi)):F("",!0),n.value==="stagger-in"?(l(),i("span",Gi)):F("",!0)]),e("span",Wi,k(n.label),1)],10,Oi)),64))]),e("div",Hi,[e("div",Yi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),ue(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=n=>gt.value=n),class:"input"},null,512),[[Ce,gt.value]])]),e("div",Qi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),ue(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=n=>r.value=n),class:"input"},null,512),[[Ce,r.value]])])]),e("div",Ki,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),ue(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=n=>o.value=n),class:"input"},null,512),[[Ce,o.value]])]),e("div",Ji,[ue(e("input",{"onUpdate:modelValue":t[8]||(t[8]=n=>we.value=n),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[Ce,we.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:b},"Save")]),e("div",Xi,[ue(e("input",{"onUpdate:modelValue":t[9]||(t[9]=n=>D.value=n),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[Ce,D.value]]),ue(e("input",{"onUpdate:modelValue":t[10]||(t[10]=n=>Y.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,Y.value]])]),Q.value.length?(l(),i("div",Zi,[(l(!0),i(Z,null,de(Q.value,n=>(l(),i("div",{key:n.id,class:J(["preset-item",te.value===n.id&&"dragging",ke.value===n.id&&te.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:ae=>vt(n),onDragenter:je(ae=>ft(n),["prevent"]),onDragover:t[14]||(t[14]=je(()=>{},["prevent"])),onDrop:je(ae=>Je(n),["prevent"]),onDragend:mt},[e("button",{type:"button",class:"preset-chip",onClick:ae=>E(n)},k(n.name),9,ta),n.category?(l(),i("span",oa,k(n.category),1)):F("",!0),(l(!0),i(Z,null,de(n.tags||[],ae=>(l(),i("span",{key:`${n.id}-${ae}`,class:"preset-meta-chip muted"},"#"+k(ae),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:ae=>Se(n)},"Duplicate",8,na),e("button",{type:"button",class:"preset-mini-btn",onClick:ae=>He(n)},"Rename",8,la),e("button",{type:"button",class:"preset-mini-btn danger",onClick:ae=>re(n.id)},"Delete",8,ia),R.value===n.id?(l(),i("div",aa,[ue(e("input",{"onUpdate:modelValue":t[11]||(t[11]=ae=>V.value=ae),class:"input"},null,512),[[Ce,V.value]]),ue(e("input",{"onUpdate:modelValue":t[12]||(t[12]=ae=>ce.value=ae),class:"input",placeholder:"Category"},null,512),[[Ce,ce.value]]),ue(e("input",{"onUpdate:modelValue":t[13]||(t[13]=ae=>ge.value=ae),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,ge.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ae=>Ne(n.id)},"Save",8,sa),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Re},"Cancel")])):F("",!0)],42,ea))),128))])):z.value.length?(l(),i("div",ra,"No group presets match the current search.")):F("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:v}," Apply Sequence to Selection ")])):a.value?(l(),i(Z,{key:3},[e("div",{class:J(["panel-section",he.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",es,[t[179]||(t[179]=K(" Position & Size ",-1)),e("span",ts,k(a.value.type),1)]),e("div",os,[e("div",ns,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=n=>De("x",n.target.value))},null,40,ls)]),e("div",is,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=n=>De("y",n.target.value))},null,40,as)]),e("div",ss,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=n=>De("width",n.target.value))},null,40,rs)]),e("div",us,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=n=>De("height",n.target.value))},null,40,ds)]),e("div",cs,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=n=>De("rotation",n.target.value))},null,40,ps)]),e("div",vs,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=n=>De("opacity",n.target.value))},null,40,fs)])])],2),e("div",{class:J(["panel-section",he.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",ms,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Et},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${U.value}`},[(l(!0),i(Z,null,de(jn.value,n=>(l(),i("span",{key:n.id,class:J(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:be({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",gs,[(l(),i(Z,null,de(Ot,n=>e("button",{key:n.value,type:"button",class:J(["motion-card",H.value.type===n.value&&"active"]),onClick:ae=>xt({type:n.value})},[e("span",ys,[e("span",{class:J(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",hs)):F("",!0),n.value==="stagger-in"?(l(),i("span",xs)):F("",!0)]),e("span",ws,k(n.label),1)],10,bs)),64))]),e("div",ks,[e("div",Cs,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:H.value.delay,class:"input",onChange:t[45]||(t[45]=n=>xt({delay:n.target.value}))},null,40,$s)]),e("div",Ss,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:H.value.duration,class:"input",onChange:t[46]||(t[46]=n=>xt({duration:n.target.value}))},null,40,Is)])]),e("div",As,[ue(e("input",{"onUpdate:modelValue":t[47]||(t[47]=n=>X.value=n),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[Ce,X.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Te},"Save")]),e("div",Ps,[ue(e("input",{"onUpdate:modelValue":t[48]||(t[48]=n=>C.value=n),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[Ce,C.value]]),ue(e("input",{"onUpdate:modelValue":t[49]||(t[49]=n=>L.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,L.value]])]),w.value.length?(l(),i("div",Ms,[(l(!0),i(Z,null,de(w.value,n=>(l(),i("div",{key:n.id,class:J(["preset-item",te.value===n.id&&"dragging",ke.value===n.id&&te.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:ae=>vt(n),onDragenter:je(ae=>ft(n),["prevent"]),onDragover:t[53]||(t[53]=je(()=>{},["prevent"])),onDrop:je(ae=>Je(n),["prevent"]),onDragend:mt},[e("button",{type:"button",class:"preset-chip",onClick:ae=>se(n)},k(n.name),9,Ts),n.category?(l(),i("span",Ns,k(n.category),1)):F("",!0),(l(!0),i(Z,null,de(n.tags||[],ae=>(l(),i("span",{key:`${n.id}-${ae}`,class:"preset-meta-chip muted"},"#"+k(ae),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:ae=>Se(n)},"Duplicate",8,zs),e("button",{type:"button",class:"preset-mini-btn",onClick:ae=>He(n)},"Rename",8,Bs),e("button",{type:"button",class:"preset-mini-btn danger",onClick:ae=>re(n.id)},"Delete",8,_s),R.value===n.id?(l(),i("div",Ls,[ue(e("input",{"onUpdate:modelValue":t[50]||(t[50]=ae=>V.value=ae),class:"input"},null,512),[[Ce,V.value]]),ue(e("input",{"onUpdate:modelValue":t[51]||(t[51]=ae=>ce.value=ae),class:"input",placeholder:"Category"},null,512),[[Ce,ce.value]]),ue(e("input",{"onUpdate:modelValue":t[52]||(t[52]=ae=>ge.value=ae),class:"input",placeholder:"Tags, comma separated"},null,512),[[Ce,ge.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ae=>Ne(n.id)},"Save",8,js),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Re},"Cancel")])):F("",!0)],42,Es))),128))])):me.value.length?(l(),i("div",Ds,"No single-element presets match the current search.")):F("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:J(["panel-section",he.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",qs,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(Ct=a.value.content)==null?void 0:Ct.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=n=>x({text:n.target.value}))},null,40,Rs)]),e("div",Fs,[e("div",Os,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(nt=a.value.content)==null?void 0:nt.fontSize,class:"input",onChange:t[55]||(t[55]=n=>x({fontSize:+n.target.value}))},null,40,Us)]),e("div",Vs,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(zt=a.value.content)==null?void 0:zt.fontWeight,class:"select",onChange:t[56]||(t[56]=n=>x({fontWeight:n.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Gs)])]),e("div",Ws,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Vt=a.value.content)==null?void 0:Vt.fontFamily,class:"select",onChange:t[57]||(t[57]=n=>x({fontFamily:n.target.value}))},[(l(),i(Z,null,de(Ut,n=>e("option",{key:n,value:n},k(n.split(",")[0]),9,Ys)),64))],40,Hs)]),e("div",Qs,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",Ks,[(l(),i(Z,null,de(["left","center","right","justify"],n=>{var ae;return e("button",{key:n,class:J(["align-btn",((ae=a.value.content)==null?void 0:ae.textAlign)===n&&"active"]),onClick:Sn=>x({textAlign:n})},k(n[0].toUpperCase()),11,Js)}),64))])]),e("div",Xs,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",Zs,[e("button",{class:J(["style-btn",((Gt=a.value.content)==null?void 0:Gt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=n=>{var ae;return x({fontStyle:((ae=a.value.content)==null?void 0:ae.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:J(["style-btn",((Wt=a.value.content)==null?void 0:Wt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=n=>{var ae;return x({textDecoration:((ae=a.value.content)==null?void 0:ae.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:J(["style-btn",((Ht=a.value.content)==null?void 0:Ht.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=n=>{var ae;return x({textDecoration:((ae=a.value.content)==null?void 0:ae.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",er,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",tr,[e("input",{type:"color",value:((Yt=a.value.content)==null?void 0:Yt.color)||"#000",onInput:t[61]||(t[61]=n=>x({color:n.target.value})),class:"color-input-native"},null,40,or),e("input",{value:((Qt=a.value.content)==null?void 0:Qt.color)||"#000",class:"input",onInput:t[62]||(t[62]=n=>x({color:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,nr)])]),e("div",lr,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Kt=a.value.content)==null?void 0:Kt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=n=>x({lineHeight:+n.target.value}))},null,40,ir)]),e("div",ar,[e("div",sr,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Jt=a.value.content)==null?void 0:Jt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=n=>x({textTransform:n.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,rr)]),e("div",ur,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Xt=a.value.content)==null?void 0:Xt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=n=>x({letterSpacing:+n.target.value}))},null,40,dr)])])],2)):F("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:J(["panel-section",he.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",cr,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Zt=a.value.content)==null?void 0:Zt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=n=>x({src:n.target.value}))},null,40,pr)]),e("div",vr,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(eo=a.value.content)==null?void 0:eo.alt,class:"input",onInput:t[67]||(t[67]=n=>x({alt:n.target.value}))},null,40,fr)]),e("div",mr,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((to=a.value.content)==null?void 0:to.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=n=>x({objectFit:n.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,gr)]),e("div",br,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((oo=a.value.content)==null?void 0:oo.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=n=>x({borderRadius:+n.target.value}))},null,40,yr)]),e("div",hr,[e("div",xr,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((no=a.value.content)==null?void 0:no.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=n=>x({borderWidth:+n.target.value}))},null,40,wr)]),e("div",kr,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((lo=a.value.content)==null?void 0:lo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=n=>x({borderColor:n.target.value}))},null,40,Cr)])])],2)):F("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:J(["panel-section",he.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",$r,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((io=a.value.content)==null?void 0:io.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=n=>x({shapeType:n.target.value}))},[...t[215]||(t[215]=[ot('<option value="rectangle" data-v-1d3dcef4>Rectangle</option><option value="circle" data-v-1d3dcef4>Circle</option><option value="triangle" data-v-1d3dcef4>Triangle</option><option value="star" data-v-1d3dcef4>Star</option><option value="arrow" data-v-1d3dcef4>Arrow</option><option value="diamond" data-v-1d3dcef4>Diamond</option>',6)])],40,Sr)]),e("div",Ir,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Ar,[e("input",{type:"color",value:((ao=a.value.content)==null?void 0:ao.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=n=>x({fillColor:n.target.value})),class:"color-input-native"},null,40,Pr),e("input",{value:((so=a.value.content)==null?void 0:so.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=n=>x({fillColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Mr)])]),e("div",Er,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Tr,[e("input",{type:"color",value:((ro=a.value.content)==null?void 0:ro.borderColor)||"transparent",onInput:t[75]||(t[75]=n=>x({borderColor:n.target.value})),class:"color-input-native"},null,40,Nr),e("input",{value:((uo=a.value.content)==null?void 0:uo.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=n=>x({borderColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,zr)])]),e("div",Br,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((co=a.value.content)==null?void 0:co.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=n=>x({borderWidth:+n.target.value}))},null,40,_r)]),e("div",Lr,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((po=a.value.content)==null?void 0:po.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=n=>x({borderRadius:+n.target.value}))},null,40,jr)]),e("div",Dr,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((vo=a.value.content)==null?void 0:vo.opacity)??1,class:"input",onChange:t[79]||(t[79]=n=>x({opacity:+n.target.value}))},null,40,qr)])],2)):F("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:J(["panel-section",he.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",Rr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((fo=a.value.content)==null?void 0:fo.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=n=>x({chartType:n.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Fr)]),e("div",Or,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((mo=a.value.content)==null?void 0:mo.title)||"",class:"input",onInput:t[81]||(t[81]=n=>x({title:n.target.value}))},null,40,Ur)]),e("div",Vr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((go=a.value.content)==null?void 0:go.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=n=>x({dataText:n.target.value}))},null,40,Gr),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ze},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ct},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Wr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),ue(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=n=>fe.value=n),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[Ce,fe.value]]),e("div",Hr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=n=>st(fe.value))},"Convert pasted data")])]),e("div",Yr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((bo=a.value.content)==null?void 0:bo.paletteText)||"",class:"input",placeholder:Xe.value.paletteText,onInput:t[85]||(t[85]=n=>x({paletteText:n.target.value}))},null,40,Qr),e("div",Kr,[(l(!0),i(Z,null,de(dt.value,(n,ae)=>(l(),i("span",{key:`chart-palette-${ae}`,class:"chart-palette-swatch",style:be({background:n})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:St},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:$t},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Jr,[e("div",Xr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((yo=a.value.content)==null?void 0:yo.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=n=>x({backgroundColor:n.target.value}))},null,40,Zr)]),e("div",eu,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((ho=a.value.content)==null?void 0:ho.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=n=>x({textColor:n.target.value}))},null,40,tu)])]),e("div",ou,[e("div",nu,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((xo=a.value.content)==null?void 0:xo.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=n=>x({gridColor:n.target.value}))},null,40,lu)]),e("div",iu,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((wo=a.value.content)==null?void 0:wo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=n=>x({borderColor:n.target.value}))},null,40,au)])]),e("div",su,[e("div",ru,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((ko=a.value.content)==null?void 0:ko.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=n=>x({borderWidth:+n.target.value}))},null,40,uu)]),((Co=a.value.content)==null?void 0:Co.chartType)!=="circle"?(l(),i("div",du,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:(($o=a.value.content)==null?void 0:$o.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=n=>x({maxValue:n.target.value}))},null,40,cu)])):(l(),i("div",pu,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((So=a.value.content)==null?void 0:So.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=n=>x({innerRadius:+n.target.value}))},null,40,vu)]))]),((Io=a.value.content)==null?void 0:Io.chartType)==="line"?(l(),i("div",fu,[e("div",mu,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((Ao=a.value.content)==null?void 0:Ao.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=n=>x({strokeWidth:+n.target.value}))},null,40,gu)]),e("label",bu,[e("input",{type:"checkbox",checked:!!((Po=a.value.content)!=null&&Po.showArea),onChange:t[94]||(t[94]=n=>x({showArea:n.target.checked}))},null,40,yu),t[239]||(t[239]=K(" Show area fill ",-1))])])):F("",!0),e("label",hu,[e("input",{type:"checkbox",checked:((Mo=a.value.content)==null?void 0:Mo.showLegend)!==!1,onChange:t[95]||(t[95]=n=>x({showLegend:n.target.checked}))},null,40,xu),t[240]||(t[240]=K(" Show legend ",-1))]),((Eo=a.value.content)==null?void 0:Eo.chartType)!=="circle"?(l(),i("label",wu,[e("input",{type:"checkbox",checked:((To=a.value.content)==null?void 0:To.showGrid)!==!1,onChange:t[96]||(t[96]=n=>x({showGrid:n.target.checked}))},null,40,ku),t[241]||(t[241]=K(" Show grid lines ",-1))])):F("",!0),e("label",Cu,[e("input",{type:"checkbox",checked:((No=a.value.content)==null?void 0:No.showValues)!==!1,onChange:t[97]||(t[97]=n=>x({showValues:n.target.checked}))},null,40,$u),t[242]||(t[242]=K(" Show values ",-1))])],2)):F("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:J(["panel-section",he.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Su,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(zo=a.value.content)==null?void 0:zo.label,class:"input",onInput:t[98]||(t[98]=n=>x({label:n.target.value}))},null,40,Iu)]),e("div",Au,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Bo=a.value.content)==null?void 0:Bo.variant)||"primary",class:"select",onChange:t[99]||(t[99]=n=>x({variant:n.target.value}))},[...t[245]||(t[245]=[ot('<option value="primary" data-v-1d3dcef4>Primary</option><option value="secondary" data-v-1d3dcef4>Secondary</option><option value="outline" data-v-1d3dcef4>Outline</option><option value="ghost" data-v-1d3dcef4>Ghost</option><option value="danger" data-v-1d3dcef4>Danger</option>',5)])],40,Pu)]),e("div",Mu,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((_o=a.value.content)==null?void 0:_o.action)||"none",class:"select",onChange:t[100]||(t[100]=n=>x({action:n.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Eu)]),(Lo=a.value.content)!=null&&Lo.action&&a.value.content.action!=="none"?(l(),i("div",Tu,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(jo=a.value.content)==null?void 0:jo.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=n=>x({target:n.target.value}))},null,40,Nu)])):F("",!0),e("div",zu,[e("div",Bu,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Do=a.value.content)==null?void 0:Do.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=n=>x({bgColor:n.target.value}))},null,40,_u)]),e("div",Lu,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((qo=a.value.content)==null?void 0:qo.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=n=>x({textColor:n.target.value}))},null,40,ju)])]),e("div",Du,[e("div",qu,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Ro=a.value.content)==null?void 0:Ro.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=n=>x({borderColor:n.target.value}))},null,40,Ru)]),e("div",Fu,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Fo=a.value.content)==null?void 0:Fo.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=n=>x({borderRadius:+n.target.value}))},null,40,Ou)])]),e("div",Uu,[e("div",Vu,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Oo=a.value.content)==null?void 0:Oo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=n=>x({fontSize:+n.target.value}))},null,40,Gu)]),e("div",Wu,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Uo=a.value.content)==null?void 0:Uo.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=n=>x({fontWeight:+n.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Hu)])]),e("div",Yu,[e("div",Qu,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Vo=a.value.content)==null?void 0:Vo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=n=>x({fontFamily:n.target.value}))},[(l(),i(Z,null,de(Ut,n=>e("option",{key:`btn-${n}`,value:n},k(n.split(",")[0]),9,Ju)),64))],40,Ku)]),e("div",Xu,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Go=a.value.content)==null?void 0:Go.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=n=>x({letterSpacing:+n.target.value}))},null,40,Zu)])])],2)):F("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:J(["panel-section",he.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",ed,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Wo=a.value.content)==null?void 0:Wo.icon)||"?",class:"select",onChange:t[110]||(t[110]=n=>x({icon:n.target.value}))},[...t[260]||(t[260]=[ot('<option value="?" data-v-1d3dcef4>? (Info)</option><option value="!" data-v-1d3dcef4>! (Alert)</option><option value="+" data-v-1d3dcef4>+ (Plus)</option><option value="i" data-v-1d3dcef4>i (Info)</option><option value="✦" data-v-1d3dcef4>✦ (Star)</option>',5)])],40,td)]),e("div",od,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",nd,[e("input",{type:"color",value:((Ho=a.value.content)==null?void 0:Ho.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=n=>x({bgColor:n.target.value})),class:"color-input-native"},null,40,ld),e("input",{value:((Yo=a.value.content)==null?void 0:Yo.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=n=>x({bgColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,id)])]),e("div",ad,[e("div",sd,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Qo=a.value.content)==null?void 0:Qo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=n=>x({iconColor:n.target.value}))},null,40,rd)]),e("div",ud,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Ko=a.value.content)==null?void 0:Ko.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=n=>x({borderRadius:+n.target.value}))},null,40,dd)])]),e("div",cd,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Jo=a.value.content)==null?void 0:Jo.popupTitle,class:"input",onInput:t[115]||(t[115]=n=>x({popupTitle:n.target.value}))},null,40,pd)]),e("div",vd,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Xo=a.value.content)==null?void 0:Xo.popupContent,class:"textarea",onInput:t[116]||(t[116]=n=>x({popupContent:n.target.value}))},null,40,fd)]),e("div",md,[e("div",gd,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Zo=a.value.content)==null?void 0:Zo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=n=>x({popupBgColor:n.target.value}))},null,40,bd)]),e("div",yd,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((en=a.value.content)==null?void 0:en.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=n=>x({popupTextColor:n.target.value}))},null,40,hd)])])],2)):F("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:J(["panel-section",he.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",xd,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(tn=a.value.content)==null?void 0:tn.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=n=>x({src:n.target.value}))},null,40,wd)]),e("div",kd,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(on=a.value.content)==null?void 0:on.poster,class:"input",onInput:t[120]||(t[120]=n=>x({poster:n.target.value}))},null,40,Cd)]),e("div",$d,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((nn=a.value.content)==null?void 0:nn.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=n=>x({objectFit:n.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Sd)]),e("label",Id,[e("input",{type:"checkbox",checked:(ln=a.value.content)==null?void 0:ln.autoplay,onChange:t[122]||(t[122]=n=>x({autoplay:n.target.checked}))},null,40,Ad),t[274]||(t[274]=K(" Autoplay ",-1))]),e("label",Pd,[e("input",{type:"checkbox",checked:((an=a.value.content)==null?void 0:an.controls)??!0,onChange:t[123]||(t[123]=n=>x({controls:n.target.checked}))},null,40,Md),t[275]||(t[275]=K(" Show Controls ",-1))]),e("label",Ed,[e("input",{type:"checkbox",checked:(sn=a.value.content)==null?void 0:sn.loop,onChange:t[124]||(t[124]=n=>x({loop:n.target.checked}))},null,40,Td),t[276]||(t[276]=K(" Loop ",-1))]),e("label",Nd,[e("input",{type:"checkbox",checked:(rn=a.value.content)==null?void 0:rn.muted,onChange:t[125]||(t[125]=n=>x({muted:n.target.checked}))},null,40,zd),t[277]||(t[277]=K(" Muted ",-1))])],2)):F("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:J(["panel-section",he.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",Bd,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(un=a.value.content)==null?void 0:un.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=n=>x({src:n.target.value}))},null,40,_d)]),e("div",Ld,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(dn=a.value.content)==null?void 0:dn.label,class:"input",onInput:t[127]||(t[127]=n=>x({label:n.target.value}))},null,40,jd)]),e("label",Dd,[e("input",{type:"checkbox",checked:(cn=a.value.content)==null?void 0:cn.autoplay,onChange:t[128]||(t[128]=n=>x({autoplay:n.target.checked}))},null,40,qd),t[281]||(t[281]=K(" Autoplay ",-1))]),e("label",Rd,[e("input",{type:"checkbox",checked:((pn=a.value.content)==null?void 0:pn.controls)!==!1,onChange:t[129]||(t[129]=n=>x({controls:n.target.checked}))},null,40,Fd),t[282]||(t[282]=K(" Show Controls ",-1))]),e("label",Od,[e("input",{type:"checkbox",checked:(vn=a.value.content)==null?void 0:vn.loop,onChange:t[130]||(t[130]=n=>x({loop:n.target.checked}))},null,40,Ud),t[283]||(t[283]=K(" Loop ",-1))]),e("div",Vd,[e("div",Gd,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((fn=a.value.content)==null?void 0:fn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=n=>x({accentColor:n.target.value}))},null,40,Wd)]),e("div",Hd,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((mn=a.value.content)==null?void 0:mn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=n=>x({textColor:n.target.value}))},null,40,Yd)])]),e("div",Qd,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((gn=a.value.content)==null?void 0:gn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=n=>x({bgColor:n.target.value}))},null,40,Kd)])],2)):F("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:J(["panel-section",he.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Jd,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(bn=a.value.content)==null?void 0:bn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=n=>x({question:n.target.value}))},null,40,Xd)]),e("div",Zd,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(hn=(yn=a.value.content)==null?void 0:yn.options)==null?void 0:hn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=n=>x({options:n.target.value.split(`
`).filter(Boolean)}))},null,40,ec)]),e("div",tc,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((xn=a.value.content)==null?void 0:xn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=n=>x({correctIndex:+n.target.value}))},null,40,oc)]),e("div",nc,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(wn=a.value.content)==null?void 0:wn.explanation,class:"textarea",onInput:t[137]||(t[137]=n=>x({explanation:n.target.value}))},null,40,lc)]),e("div",ic,[e("div",ac,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((kn=a.value.content)==null?void 0:kn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=n=>x({cardBgColor:n.target.value}))},null,40,sc)]),e("div",rc,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((Cn=a.value.content)==null?void 0:Cn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=n=>x({questionColor:n.target.value}))},null,40,uc)])]),e("div",dc,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:(($n=a.value.content)==null?void 0:$n.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=n=>x({accentColor:n.target.value}))},null,40,cc)])],2)):F("",!0),e("div",pc,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",vc,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=n=>I(u).duplicateElement(I(s).projectId,I(s).currentSlideId,a.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),K(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=n=>{I(s).showInteractionEditor=!0,I(s).interactionElementId=a.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),K(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=n=>{I(u).deleteElement(I(s).projectId,I(s).currentSlideId,a.value.id),I(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),K(" Delete Element ",-1)])])])])],64)):(l(),i("div",ua,[e("div",da,[e("button",{type:"button",class:J(["slide-settings-tab",le.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=n=>le.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:J(["slide-settings-tab",le.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=n=>le.value="transitions")},[...t[150]||(t[150]=[ot('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-1d3dcef4><path d="M5 7h5" data-v-1d3dcef4></path><path d="M5 12h10" data-v-1d3dcef4></path><path d="M5 17h14" data-v-1d3dcef4></path><path d="M14 7l5 5-5 5" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Transitions</span>',2)])],2),e("button",{type:"button",class:J(["slide-settings-tab",le.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=n=>le.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),le.value==="canvas"?(l(),i("div",ca,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",pa,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),ue(e("input",{"onUpdate:modelValue":t[18]||(t[18]=n=>Ee.value.title=n),class:"input",onInput:t[19]||(t[19]=n=>Nt("title",Ee.value.title))},null,544),[[Ce,Ee.value.title]])]),e("div",va,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",fa,[(l(),i(Z,null,de(["color","gradient","image"],n=>{var ae;return e("button",{key:n,class:J(["bg-type-btn",(((ae=p.value)==null?void 0:ae.backgroundType)||"color")===n&&"active"]),onClick:Sn=>Oe({backgroundType:n})},k(n),11,ma)}),64))]),(((O=p.value)==null?void 0:O.backgroundType)||"color")==="color"?(l(),i("div",ga,[e("input",{type:"color",value:((pe=p.value)==null?void 0:pe.background)||"#ffffff",onInput:t[20]||(t[20]=n=>Oe({background:n.target.value})),class:"color-input-native"},null,40,ba),e("input",{value:((Pe=p.value)==null?void 0:Pe.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=n=>Oe({background:n.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,ya)])):((ze=p.value)==null?void 0:ze.backgroundType)==="gradient"?ue((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=n=>Ee.value.backgroundGradient=n),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=n=>Oe({backgroundGradient:Ee.value.backgroundGradient}))},null,544)),[[Ce,Ee.value.backgroundGradient]]):ue((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=n=>Ee.value.backgroundImage=n),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=n=>Oe({backgroundImage:Ee.value.backgroundImage}))},null,544)),[[Ce,Ee.value.backgroundImage]])]),e("div",ha,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",xa,[(l(!0),i(Z,null,de(I(Jn),n=>{var ae;return l(),i("button",{key:n.id,type:"button",class:J(["canvas-size-card",((ae=g.value)==null?void 0:ae.id)===n.id&&"active"]),onClick:Sn=>We(n)},[e("span",ka,[e("span",{class:J(["canvas-size-thumb",`canvas-size-thumb-${n.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Ca,k(n.label),1),e("span",$a,k(n.ratioLabel),1)],10,wa)}),128))]),e("div",Sa,[e("div",Ia,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Aa,"Current ratio "+k(j.value),1)]),e("div",Pa,[e("div",Ma,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Ea,[e("input",{type:"number",min:"320",max:"4096",value:h.value.width,class:"input",onChange:t[26]||(t[26]=n=>at("width",n.target.value))},null,40,Ta),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Na,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",za,[e("input",{type:"number",min:"320",max:"4096",value:h.value.height,class:"input",onChange:t[27]||(t[27]=n=>at("height",n.target.value))},null,40,Ba),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",_a,[ue(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=n=>ne.value=n)},null,512),[[Lt,ne.value]]),t[161]||(t[161]=K(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=ot('<div class="canvas-size-callout" data-v-1d3dcef4><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1d3dcef4><circle cx="12" cy="12" r="9" data-v-1d3dcef4></circle><path d="M12 10v6" data-v-1d3dcef4></path><path d="M12 7h.01" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",La,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),ue(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=n=>Ee.value.notes=n),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=n=>Nt("notes",Ee.value.notes))},null,544),[[Ce,Ee.value.notes]])])])):le.value==="transitions"?(l(),i("div",ja,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((Ge=p.value)==null?void 0:Ge.transition)||"none",class:"select",onChange:t[31]||(t[31]=n=>Oe({transition:n.target.value}))},[...t[167]||(t[167]=[ot('<option value="none" data-v-1d3dcef4>None</option><option value="fade" data-v-1d3dcef4>Fade</option><option value="slide" data-v-1d3dcef4>Slide</option><option value="zoom" data-v-1d3dcef4>Zoom</option><option value="flip" data-v-1d3dcef4>Flip</option>',5)])],40,Da),e("div",qa,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Fe=p.value)==null?void 0:Fe.duration)??0,class:"input",onChange:t[32]||(t[32]=n=>Dt(n.target.value))},null,40,Ra),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Fa,[e("input",{type:"checkbox",checked:!!((bt=p.value)!=null&&bt.advanceOnMediaEnd),onChange:t[33]||(t[33]=n=>Oe({advanceOnMediaEnd:n.target.checked}))},null,40,Oa),t[170]||(t[170]=K(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",Ua,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",Va,[e("input",{type:"checkbox",checked:y.value.autoPlay,onChange:t[34]||(t[34]=n=>xe({autoPlay:n.target.checked}))},null,40,Ga),t[173]||(t[173]=K(" Autoplay preview and exported presentation ",-1))]),e("label",Wa,[e("input",{type:"checkbox",checked:y.value.loop,onChange:t[35]||(t[35]=n=>xe({loop:n.target.checked}))},null,40,Ha),t[174]||(t[174]=K(" Loop back to the first slide at the end ",-1))]),e("label",Ya,[e("input",{type:"checkbox",checked:y.value.showProgress,onChange:t[36]||(t[36]=n=>xe({showProgress:n.target.checked}))},null,40,Qa),t[175]||(t[175]=K(" Show progress bar in preview ",-1))]),e("label",Ka,[e("input",{type:"checkbox",checked:y.value.showNavControls,onChange:t[37]||(t[37]=n=>xe({showNavControls:n.target.checked}))},null,40,Ja),t[176]||(t[176]=K(" Show previous/next and dot navigation ",-1))]),e("label",Xa,[e("input",{type:"checkbox",checked:y.value.allowKeyboardNav,onChange:t[38]||(t[38]=n=>xe({allowKeyboardNav:n.target.checked}))},null,40,Za),t[177]||(t[177]=K(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},mc=Ke(fc,[["__scopeId","data-v-1d3dcef4"]]),gc={class:"editor-toolbar"},bc={class:"toolbar-group"},yc={class:"toolbar-group"},hc=["data-tooltip","onClick"],xc={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wc={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kc={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Cc={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$c={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Sc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ic={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ac={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Pc={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Mc={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ec={class:"tool-label"},Tc={class:"toolbar-group"},Nc={class:"toolbar-group"},zc={class:"toolbar-group"},Bc={__name:"EditorToolbar",emits:["open-ai-project"],setup(A,{emit:s}){const u=s,c=lt();it();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function y(h){c.setActiveTool(h)}return(h,g)=>(l(),i("div",gc,[e("div",bc,[e("button",{class:J(["tool-btn",I(c).activeTool==="select"&&"active"]),onClick:g[0]||(g[0]=j=>y("select")),"data-tooltip":"Select (V)"},[...g[7]||(g[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),g[23]||(g[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",yc,[(l(),i(Z,null,de(p,j=>e("button",{key:j.id,class:J(["tool-btn",I(c).activeTool===j.id&&"active"]),"data-tooltip":j.tooltip,onClick:ne=>y(j.id)},[j.icon==="text"?(l(),i("svg",xc,[...g[8]||(g[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):j.icon==="heading"?(l(),i("svg",wc,[...g[9]||(g[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):j.icon==="image"?(l(),i("svg",kc,[...g[10]||(g[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):j.icon==="shape"?(l(),i("svg",Cc,[...g[11]||(g[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):j.icon==="button"?(l(),i("svg",$c,[...g[12]||(g[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):j.icon==="hotspot"?(l(),i("svg",Sc,[...g[13]||(g[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):j.icon==="video"?(l(),i("svg",Ic,[...g[14]||(g[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):j.icon==="audio"?(l(),i("svg",Ac,[...g[15]||(g[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):j.icon==="quiz"?(l(),i("svg",Pc,[...g[16]||(g[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):j.icon==="chart"?(l(),i("svg",Mc,[...g[17]||(g[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):F("",!0),e("span",Ec,k(j.label),1)],10,hc)),64))]),g[24]||(g[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Tc,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:g[1]||(g[1]=j=>u("open-ai-project")),"data-tooltip":"Create a new AI project"},[...g[18]||(g[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),g[25]||(g[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Nc,[e("button",{class:"tool-btn",onClick:g[2]||(g[2]=j=>I(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...g[19]||(g[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:g[3]||(g[3]=j=>I(c).zoomReset())},k(Math.round(I(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:g[4]||(g[4]=j=>I(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...g[20]||(g[20]=[ot('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),g[26]||(g[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",zc,[e("button",{class:J(["tool-btn",I(c).showGrid&&"active"]),onClick:g[5]||(g[5]=j=>I(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...g[21]||(g[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:J(["tool-btn",I(c).snapToGrid&&"active"]),onClick:g[6]||(g[6]=j=>I(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...g[22]||(g[22]=[ot('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},_c=Ke(Bc,[["__scopeId","data-v-d964cc0f"]]),Lc=["onMousedown"],jc={key:1,class:"selection-border locked-border"},Dc={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(A){const s=A,u=lt(),c=it(),p=qn("canvasScale",B(1)),y=P(()=>u.projectId),h=P(()=>u.currentSlideId),g=P(()=>u.selectedElementIds.includes(s.element.id)),j=P(()=>s.element.locked),ne=P(()=>s.element.visible!==!1),le=P(()=>{const ee=s.element.content||{};return!!(ee.text||ee.label||ee.question||ee.popupTitle||ee.popupContent)});let W=!1,me=0,z=0,N=new Map;function a(ee){if(!u.snapToGrid||!u.gridSize)return ee;const ve=u.gridSize;return Math.round(ee/ve)*ve}function M(ee){var fe;if(j.value||ee.target.classList.contains("resize-handle"))return;const ve=ee.ctrlKey||ee.metaKey||ee.shiftKey;g.value?ve&&u.selectElement(s.element.id,!0):u.selectElement(s.element.id,ve),u.setActiveTool("select"),W=!1,me=ee.clientX,z=ee.clientY,N.clear();const ie=(fe=c.getProject(y.value))==null?void 0:fe.slides.find(Me=>Me.id===h.value);ie&&u.selectedElementIds.forEach(Me=>{const he=ie.elements.find(S=>S.id===Me);he&&!he.locked&&N.set(Me,{x:he.x,y:he.y})}),window.addEventListener("mousemove",_),window.addEventListener("mouseup",H),ee.stopPropagation()}function _(ee){const ve=(ee.clientX-me)/p.value,ie=(ee.clientY-z)/p.value;!W&&(Math.abs(ve)>3||Math.abs(ie)>3)&&(W=!0),W&&N.forEach((fe,Me)=>{const he=fe.x+ve,S=fe.y+ie;c.updateElement(y.value,h.value,Me,{x:he,y:S},{persist:!1})})}function H(ee){if(W){const ve=(ee.clientX-me)/p.value,ie=(ee.clientY-z)/p.value;N.forEach((fe,Me)=>{c.updateElement(y.value,h.value,Me,{x:a(fe.x+ve),y:a(fe.y+ie)},{persist:!1})}),c.commitProject(y.value)}W||!(ee.ctrlKey||ee.metaKey||ee.shiftKey)&&u.selectedElementIds.length>1&&u.selectElement(s.element.id,!1),W=!1,window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",H)}const f=["n","ne","e","se","s","sw","w","nw"];let U=!1,oe="",X=0,we=0,R=0,V=0,ce=0,ge=0;function te(ee,ve){j.value||(ee.stopPropagation(),ee.preventDefault(),U=!0,oe=ve,X=ee.clientX,we=ee.clientY,R=s.element.width,V=s.element.height,ce=s.element.x,ge=s.element.y,window.addEventListener("mousemove",ke),window.addEventListener("mouseup",C))}function ke(ee){if(!U)return;const ve=p.value,ie=(ee.clientX-X)/ve,fe=(ee.clientY-we)/ve,Me=20;let he=ce,S=ge,$=R,q=V;if(oe.includes("e")&&($=Math.max(Me,R+ie)),oe.includes("s")&&(q=Math.max(Me,V+fe)),oe.includes("w")){const x=Math.max(Me,R-ie);he=ce+(R-x),$=x}if(oe.includes("n")){const x=Math.max(Me,V-fe);S=ge+(V-x),q=x}if(u.snapToGrid&&u.gridSize){const x=u.gridSize;$=Math.round($/x)*x,q=Math.round(q/x)*x,he=Math.round(he/x)*x,S=Math.round(S/x)*x}c.updateElement(y.value,h.value,s.element.id,{x:he,y:S,width:$,height:q})}function C(){U=!1,window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",C)}function L(){["text","heading"].includes(s.element.type)&&u.focusPropertiesSection("content")}const D=P(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:j.value?"not-allowed":"move",visibility:ne.value?"visible":"hidden",userSelect:"none"}));function Y(ee){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[ee]||"auto"}function ye(ee="content"){u.focusPropertiesSection(ee)}function Be(){const ee=le.value?"improve":s.element.type==="image"?"image":"generate";u.openAIPanel(ee)}function Ie(){const ee=c.duplicateElement(y.value,h.value,s.element.id);ee&&(u.selectElement(ee.id),u.focusPropertiesSection("geometry"))}function _e(){c.deleteElement(y.value,h.value,s.element.id),u.clearSelection()}return(ee,ve)=>(l(),i("div",{class:J(["element-wrapper",g.value&&"selected",j.value&&"locked"]),style:be(D.value),onMousedown:M,onDblclick:L},[Rn(ee.$slots,"default",{},void 0),g.value&&!j.value?(l(),i(Z,{key:0},[ve[6]||(ve[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:ve[3]||(ve[3]=je(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:ve[0]||(ve[0]=ie=>ye("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:ve[1]||(ve[1]=ie=>ye("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:ve[2]||(ve[2]=ie=>ye("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Be},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Ie,title:"Duplicate element","aria-label":"Duplicate element"},[...ve[4]||(ve[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:_e,title:"Delete element","aria-label":"Delete element"},[...ve[5]||(ve[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(Z,null,de(f,ie=>e("div",{key:ie,class:J(["resize-handle",`handle-${ie}`]),style:be({cursor:Y(ie)}),onMousedown:je(fe=>te(fe,ie),["stop"])},null,46,Lc)),64))],64)):F("",!0),g.value&&j.value?(l(),i("div",jc)):F("",!0)],38))}},qc=Ke(Dc,[["__scopeId","data-v-d539ca8b"]]),qt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,u=P(()=>s.element.content||{}),c=lt(),p=it(),y=B(!1),h=B(null),g=B("");Qe(()=>u.value.text,W=>{y.value||(g.value=W||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function j(){c.selectedElementId===s.element.id&&(y.value=!0,Tn(()=>{if(h.value)if(h.value.focus(),typeof h.value.setSelectionRange=="function"){const W=h.value.value.length;h.value.setSelectionRange(W,W)}else{const W=document.createRange();W.selectNodeContents(h.value),W.collapse(!1);const me=window.getSelection();me.removeAllRanges(),me.addRange(W)}}))}function ne(W){y.value&&W.stopPropagation()}function le(){y.value=!1;const W=g.value;p.updateElement(c.projectId,c.currentSlideId,s.element.id,{content:{...s.element.content,text:W}})}return(W,me)=>y.value?ue((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:h,"onUpdate:modelValue":me[0]||(me[0]=z=>g.value=z),onBlur:le,onMousedown:ne,style:be({fontSize:(u.value.fontSize||16)+"px",fontFamily:u.value.fontFamily||"Inter, sans-serif",fontWeight:u.value.fontWeight||"normal",fontStyle:u.value.fontStyle||"normal",textDecoration:u.value.textDecoration||"none",textAlign:u.value.textAlign||"left",color:u.value.color||"#1a1a2e",lineHeight:u.value.lineHeight||1.5,textTransform:u.value.textTransform||"none",letterSpacing:(u.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[Ce,g.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:j,style:be({fontSize:(u.value.fontSize||16)+"px",fontFamily:u.value.fontFamily||"Inter, sans-serif",fontWeight:u.value.fontWeight||"normal",fontStyle:u.value.fontStyle||"normal",textDecoration:u.value.textDecoration||"none",textAlign:u.value.textAlign||"left",color:u.value.color||"#1a1a2e",lineHeight:u.value.lineHeight||1.5,textTransform:u.value.textTransform||"none",letterSpacing:(u.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},k(g.value),37))}},Rc={key:0,class:"image-status image-loading"},Fc=["src","alt"],Oc={key:2,class:"image-placeholder"},Uc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Vc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,u=B(""),c=B(0),p=B("idle"),y=P(()=>{var ne;return Array.isArray((ne=s.element.content)==null?void 0:ne.fallbackSrcs)?s.element.content.fallbackSrcs:[]});function h(){var ne;u.value=((ne=s.element.content)==null?void 0:ne.src)||"",c.value=0,p.value=u.value?"loading":"empty"}function g(){p.value="loaded"}function j(){const ne=y.value[c.value];if(ne){c.value+=1,u.value=ne,p.value="loading";return}p.value="error"}return Qe(()=>{var ne,le;return[(ne=s.element.content)==null?void 0:ne.src,JSON.stringify(((le=s.element.content)==null?void 0:le.fallbackSrcs)||[])]},()=>h(),{immediate:!0}),(ne,le)=>{var W,me,z;return l(),i("div",{class:"image-element",style:be({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((W=A.element.content)==null?void 0:W.borderRadius)||0)+"px",border:`${((me=A.element.content)==null?void 0:me.borderWidth)||0}px solid ${((z=A.element.content)==null?void 0:z.borderColor)||"transparent"}`})},[p.value==="loading"?(l(),i("div",Rc,[...le[0]||(le[0]=[e("span",{class:"image-status-spinner"},null,-1),e("span",null,"Loading image…",-1)])])):F("",!0),u.value&&p.value!=="error"?(l(),i("img",{key:1,src:u.value,alt:A.element.content.alt||"",style:be({width:"100%",height:"100%",objectFit:A.element.content.objectFit||"cover",display:p.value==="loaded"?"block":"none"}),draggable:"false",onLoad:g,onError:j},null,44,Fc)):F("",!0),p.value==="empty"||p.value==="error"?(l(),i("div",Oc,[(l(),i("svg",Uc,[...le[1]||(le[1]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),e("span",null,k(p.value==="error"?"Image unavailable":"Image"),1)])):F("",!0)],4)}}},Gc=Ke(Vc,[["__scopeId","data-v-cd42b1c3"]]),Wc={class:"shape-element",style:{width:"100%",height:"100%"}},Hc=["width","height"],Yc=["points","fill","stroke","stroke-width"],Qc={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,u=P(()=>s.element.content||{}),c=P(()=>{const h=u.value.shapeType||"rectangle",g={width:"100%",height:"100%",background:u.value.fillColor||"#6c47ff",border:`${u.value.borderWidth||0}px solid ${u.value.borderColor||"transparent"}`,opacity:u.value.opacity??1};return h==="circle"?{...g,borderRadius:"50%"}:h==="rectangle"?{...g,borderRadius:(u.value.borderRadius||0)+"px"}:g}),p=P(()=>["triangle","star","arrow","diamond"].includes(u.value.shapeType)),y=P(()=>{const h=s.element.width||150,g=s.element.height||100,j=u.value.shapeType;if(j==="triangle")return`${h/2},0 ${h},${g} 0,${g}`;if(j==="diamond")return`${h/2},0 ${h},${g/2} ${h/2},${g} 0,${g/2}`;if(j==="arrow")return`0,${g*.3} ${h*.6},${g*.3} ${h*.6},0 ${h},${g/2} ${h*.6},${g} ${h*.6},${g*.7} 0,${g*.7}`;if(j==="star"){const ne=h/2,le=g/2,W=Math.min(h,g)/2,me=W*.4;let z="";for(let N=0;N<10;N++){const a=(N*36-90)*Math.PI/180,M=N%2===0?W:me;z+=`${ne+M*Math.cos(a)},${le+M*Math.sin(a)} `}return z.trim()}return""});return(h,g)=>(l(),i("div",Wc,[p.value?(l(),i("svg",{key:1,width:A.element.width,height:A.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:y.value,fill:u.value.fillColor||"#6c47ff",stroke:u.value.borderColor||"none","stroke-width":u.value.borderWidth||0},null,8,Yc)],8,Hc)):(l(),i("div",{key:0,style:be(c.value)},null,4))]))}},Kc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,u=P(()=>s.element.content||{}),c=P(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},y=p[u.value.variant||"primary"]||p.primary;return{...y,background:u.value.bgColor||y.background,color:u.value.textColor||y.color,border:u.value.borderColor?`1px solid ${u.value.borderColor}`:y.border,borderRadius:(u.value.borderRadius??8)+"px"}});return(p,y)=>(l(),i("div",{class:"button-element",style:be({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(u.value.fontSize??15)+"px",fontWeight:u.value.fontWeight??600,letterSpacing:(u.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:u.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},k(u.value.label||"Button"),5))}},Jc={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Xc={class:"popup-header"},Zc={class:"popup-body"},ep={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,u=P(()=>s.element.content||{}),c=B(!1);function p(y){y.stopPropagation(),c.value=!c.value}return(y,h)=>(l(),i("div",Jc,[e("div",{class:"hotspot-btn",style:be({width:"100%",height:"100%",background:u.value.bgColor||"#6c47ff",borderRadius:(u.value.borderRadius??999)>=999?"50%":(u.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:u.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:je(p,["stop"])},k(u.value.icon||"?"),5),yt(_t,{name:"fade"},{default:ut(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:be({background:u.value.popupBgColor||"#ffffff",color:u.value.popupTextColor||"#1a1a2e"})},[e("div",Xc,[e("strong",null,k(u.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:h[0]||(h[0]=je(g=>c.value=!1,["stop"]))},"×")]),e("div",Zc,k(u.value.popupContent||"Add your content in the properties panel."),1)],4)):F("",!0)]),_:1})]))}},tp=Ke(ep,[["__scopeId","data-v-ef5f15f6"]]),op={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},np=["src"],lp=["src","poster","autoplay","controls","loop","muted"],ip={key:2,class:"video-placeholder"},ap={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},sp={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,u=P(()=>s.element.content||{}),c=P(()=>{const y=u.value.src||"";return y.includes("youtube")||y.includes("youtu.be")}),p=P(()=>{var h,g;const y=u.value.src||"";if(c.value){const j=(h=y.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:h[1];return j?`https://www.youtube.com/embed/${j}`:""}if(y.includes("vimeo.com")){const j=(g=y.match(/vimeo\.com\/(\d+)/))==null?void 0:g[1];return j?`https://player.vimeo.com/video/${j}`:""}return""});return(y,h)=>(l(),i("div",op,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,np)):u.value.src&&!p.value?(l(),i("video",{key:1,src:u.value.src,poster:u.value.poster,autoplay:u.value.autoplay,controls:u.value.controls!==!1,loop:u.value.loop,muted:u.value.muted,style:be({width:"100%",height:"100%",objectFit:u.value.objectFit||"cover"})},null,12,lp)):(l(),i("div",ip,[(l(),i("svg",ap,[...h[0]||(h[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),h[1]||(h[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},rp=Ke(sp,[["__scopeId","data-v-dfea1a16"]]),up=["stroke"],dp=["src","controls","autoplay","loop"],cp={key:1,style:{"font-size":"11px",color:"#aaa"}},pp={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(A){return(s,u)=>{var c,p,y,h,g,j,ne,le,W;return l(),i("div",{class:"audio-element",style:be({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=A.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=A.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((y=A.element.content)==null?void 0:y.accentColor)||"#6c47ff","stroke-width":"2"},[...u[1]||(u[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,up)),e("span",{style:be({fontSize:"13px",color:((h=A.element.content)==null?void 0:h.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},k(((g=A.element.content)==null?void 0:g.label)||"Audio Player"),5),(j=A.element.content)!=null&&j.src?(l(),i("audio",{key:0,src:A.element.content.src,controls:((ne=A.element.content)==null?void 0:ne.controls)!==!1,autoplay:(le=A.element.content)==null?void 0:le.autoplay,loop:(W=A.element.content)==null?void 0:W.loop,style:{height:"28px","max-width":"180px"},onMousedown:u[0]||(u[0]=je(()=>{},["stop"]))},null,40,dp)):(l(),i("span",cp,"No source"))],4)}}},vp={class:"quiz-options"},fp=["onClick"],mp={class:"opt-letter"},gp={class:"opt-text"},bp={key:0},yp={class:"quiz-actions"},hp=["disabled"],xp={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,u=P(()=>s.element.content||{}),c=B(null),p=B(!1);function y(ne){p.value||(c.value=ne)}function h(){c.value!==null&&(p.value=!0)}function g(){c.value=null,p.value=!1}const j=P(()=>p.value&&c.value===(u.value.correctIndex??0));return(ne,le)=>(l(),i("div",{class:"quiz-element",style:be({width:"100%",height:"100%",background:u.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":u.value.accentColor||"#6c47ff"})},[e("p",{style:be({fontSize:"15px",fontWeight:600,color:u.value.questionColor||"#1a1a2e",lineHeight:1.4})},k(u.value.question||"Question text…"),5),e("div",vp,[(l(!0),i(Z,null,de(u.value.options||[],(W,me)=>(l(),i("div",{key:me,class:J(["quiz-opt",c.value===me&&"selected",p.value&&me===u.value.correctIndex&&"correct",p.value&&c.value===me&&me!==u.value.correctIndex&&"wrong"]),onClick:z=>y(me)},[e("span",mp,k(String.fromCharCode(65+me)),1),e("span",gp,k(W),1)],10,fp))),128))]),p.value?(l(),i("div",{key:0,class:J(["quiz-feedback",j.value?"correct":"wrong"])},[K(k(j.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!j.value&&u.value.explanation?(l(),i("span",bp,k(u.value.explanation),1)):F("",!0)],2)):F("",!0),e("div",yp,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:g},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:h},"Submit",8,hp))])],4))}},wp=Ke(xp,[["__scopeId","data-v-ca2bd187"]]),kp={key:0,class:"canvas-empty"},Cp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},$p={key:0,class:"canvas-device-frame","aria-hidden":"true"},Sp=["value"],Ip={class:"canvas-guide-label"},Ap={key:5,class:"drop-hint"},Pp={class:"canvas-info-bar"},Mp=["disabled"],Ep={class:"slide-index"},Tp=["disabled"],Np={key:0},zp={__name:"EditorCanvas",setup(A){const s=lt(),u=it(),c=B(null),p=B(null),y=B(1),h=P(()=>y.value*s.zoomLevel);On("canvasScale",h);const g=P(()=>u.getProject(s.projectId)),j=P(()=>jt(g.value)),ne=P(()=>zn(g.value)),le=P(()=>j.value.width),W=P(()=>j.value.height),me=P(()=>Bn(le.value,W.value)),z=P(()=>{var m,w;return(w=(m=g.value)==null?void 0:m.slides)==null?void 0:w.find(Q=>Q.id===s.currentSlideId)}),N=P(()=>{var m;return[...((m=g.value)==null?void 0:m.slides)||[]].sort((w,Q)=>w.order-Q.order)}),a=P(()=>N.value.findIndex(m=>m.id===s.currentSlideId)),M=P(()=>{var m;return{autoPlay:!1,motionPresets:[],...((m=g.value)==null?void 0:m.settings)||{}}}),_=P(()=>(Array.isArray(M.value.motionPresets)?M.value.motionPresets:[]).filter(m=>m.scope==="group")),H=P(()=>{const m=new Set(s.selectedElementIds);return we.value.filter(w=>m.has(w.id))}),f=B(""),U=P(()=>z.value?z.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:M.value.autoPlay&&Number(z.value.duration||0)>0?{label:`Auto ${Number(z.value.duration).toFixed(Number(z.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function oe(){const m=_.value.find(Q=>Q.id===f.value);if(!m||!H.value.length)return;[...H.value].sort((Q,G)=>(Q.y||0)!==(G.y||0)?(Q.y||0)-(G.y||0):(Q.x||0)-(G.x||0)).forEach((Q,G)=>{if(m.type==="auto"){u.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[]});return}u.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[{type:m.type,delay:Math.max(0,Number(m.delay)||0)+G*Math.max(0,Number(m.stepDelay)||0),duration:Math.max(.1,Number(m.duration)||.72)}]})}),u.updateProject(s.projectId,{settings:{...M.value,motionPresets:(M.value.motionPresets||[]).map(Q=>Q.id===m.id?{...Q,usageCount:Math.max(0,Number(Q.usageCount||0))+1,lastUsedAt:Date.now()}:Q)}})}function X(){if(!_.value.length){f.value="";return}_.value.some(m=>m.id===f.value)||(f.value=_.value[0].id)}const we=P(()=>{var m;return[...((m=z.value)==null?void 0:m.elements)||[]].sort((w,Q)=>(w.zIndex||0)-(Q.zIndex||0))}),R=P(()=>{const m=z.value;return m?m.backgroundType==="gradient"&&m.backgroundGradient?{background:m.backgroundGradient}:m.backgroundType==="image"&&m.backgroundImage?{backgroundImage:`url(${m.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:m.background||"#fff"}:{background:"#fff"}}),V=P(()=>`scale(${h.value})`);function ce(){if(!c.value)return;const{clientWidth:m,clientHeight:w}=c.value,Q=(m-80)/le.value,G=(w-80)/W.value;y.value=Math.min(Q,G,1)}let ge=null;Pn(()=>{ce(),ge=new ResizeObserver(ce),c.value&&ge.observe(c.value),X()}),Mn(()=>ge==null?void 0:ge.disconnect()),Qe(_,()=>{X()},{deep:!0,immediate:!0}),Qe(j,()=>{ce()},{deep:!0});const te=B({x:0,y:0}),ke=B({x:0,y:0}),C=B(!1),L=B(!1),D=B(!1),Y=B(null),ye=P(()=>{var m,w;return((m=ne.value)==null?void 0:m.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=ne.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),Be=P(()=>{if(!ye.value)return null;if(ye.value.tone==="mobile"){const Q=le.value*.08,G=W.value*.05;return{x:Q,y:G,width:le.value-Q*2,height:W.value-G*2}}const m=le.value*.08,w=W.value*.08;return{x:m,y:w,width:le.value-m*2,height:W.value-w*2}}),Ie=P(()=>{if(!Be.value)return[];const m=Be.value;return we.value.filter(w=>w.visible!==!1).filter(w=>{const Q=Number(w.x||0),G=Number(w.y||0),$e=Q+Number(w.width||0),Ae=G+Number(w.height||0);return Q<m.x||G<m.y||$e>m.x+m.width||Ae>m.y+m.height}).map(w=>w.id)}),_e=P(()=>s.selectedElementIds.filter(m=>Ie.value.includes(m)).length),ee=P(()=>Ie.value.length),ve=P(()=>!ye.value||!ee.value?null:_e.value?`${_e.value} selected ${_e.value===1?"element is":"elements are"} outside the ${ye.value.label.toLowerCase()}.`:`${ee.value} ${ee.value===1?"element is":"elements are"} outside the ${ye.value.label.toLowerCase()}.`),ie=P(()=>{if(!C.value)return null;const m=Math.min(te.value.x,ke.value.x),w=Math.min(te.value.y,ke.value.y),Q=Math.abs(ke.value.x-te.value.x),G=Math.abs(ke.value.y-te.value.y);return{x:m,y:w,width:Q,height:G}});function fe(m){!C.value&&(m.target===p.value||m.target===m.currentTarget)&&s.clearSelection()}function Me(m){return m?Array.from(m.files||[]).some(w=>w.type.startsWith("image/")):!1}function he(m){return m?Array.from(m.types||[]).includes(Rt):!1}function S(m,w,Q){return Math.min(Math.max(m,w),Q)}function $(m,w,Q){const G=Ft(m),$e=S(w-G.width/2,0,Math.max(0,le.value-G.width)),Ae=S(Q-G.height/2,0,Math.max(0,W.value-G.height));return{x:$e,y:Ae,bounds:G}}function q(m){if(!he(m))return null;try{const w=m.getData(Rt),Q=w?JSON.parse(w):null;return Q!=null&&Q.id&&u.getContentBlocks(s.projectId).find(G=>G.id===Q.id)||null}catch{return null}}function x(m,w,Q){if(!p.value||!Q){Y.value=null;return}const G=p.value.getBoundingClientRect(),$e=(m-G.left)/h.value,Ae=(w-G.top)/h.value,qe=$(Q,$e,Ae);Y.value={block:Q,x:qe.x,y:qe.y,bounds:qe.bounds}}function De(m,w,Q){if(!m||!m.type.startsWith("image/"))return;const G=new FileReader;G.onload=()=>{const $e=String(G.result||"");if(!$e)return;const Ae=new Image;Ae.onload=()=>{const qe=p.value.getBoundingClientRect(),Ue=(w-qe.left)/h.value,re=(Q-qe.top)/h.value,Re=Math.min(420/Ae.width,280/Ae.height,1),Ne=Math.max(120,Math.round(Ae.width*Re)),Ve=Math.max(80,Math.round(Ae.height*Re)),vt=Math.max(0,Math.min(le.value-Ne,Math.round(Ue-Ne/2))),ft=Math.max(0,Math.min(W.value-Ve,Math.round(re-Ve/2))),Je=u.addElement(s.projectId,s.currentSlideId,"image",{x:vt,y:ft,width:Ne,height:Ve,content:{src:$e,alt:m.name,objectFit:"cover"}});Je&&(s.selectElement(Je.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Ae.src=$e},G.readAsDataURL(m)}function Ee(m){const w=Me(m.dataTransfer),Q=he(m.dataTransfer);!w&&!Q||(m.preventDefault(),m.dataTransfer.dropEffect="copy",L.value=w,D.value=Q,Q&&x(m.clientX,m.clientY,q(m.dataTransfer)))}function Oe(m){var w;(w=m.currentTarget)!=null&&w.contains(m.relatedTarget)||(L.value=!1,D.value=!1,Y.value=null)}function xe(m){const w=Me(m.dataTransfer),Q=he(m.dataTransfer);if(!w&&!Q)return;if(m.preventDefault(),L.value=!1,D.value=!1,Y.value=null,Q){try{const $e=q(m.dataTransfer);if(!$e)return;const Ae=p.value.getBoundingClientRect(),qe=(m.clientX-Ae.left)/h.value,Ue=(m.clientY-Ae.top)/h.value,re=$($e,qe,Ue),Se=u.insertContentBlock(s.projectId,s.currentSlideId,$e.id,{x:re.x,y:re.y});Se.length&&(s.setSelection(Se.map(He=>He.id)),s.setActiveTool("select"),s.focusPropertiesSection("content"))}catch($e){console.warn("Failed to drop block onto canvas.",$e)}return}const G=Array.from(m.dataTransfer.files||[]).find($e=>$e.type.startsWith("image/"));G&&De(G,m.clientX,m.clientY)}function We(m){if(H.value.length<2)return;const w=[...H.value].sort((re,Se)=>(re.zIndex||0)-(Se.zIndex||0)),Q=Math.min(...w.map(re=>Number(re.x||0))),G=Math.min(...w.map(re=>Number(re.y||0))),$e=Math.max(...w.map(re=>Number(re.x||0)+Number(re.width||0))),Ae=Math.max(...w.map(re=>Number(re.y||0)+Number(re.height||0))),qe=Q+($e-Q)/2,Ue=G+(Ae-G)/2;if(m==="align-left"&&w.forEach(re=>u.updateElement(s.projectId,s.currentSlideId,re.id,{x:Q},{persist:!1})),m==="align-center"&&w.forEach(re=>{const Se=Number(re.width||0);u.updateElement(s.projectId,s.currentSlideId,re.id,{x:qe-Se/2},{persist:!1})}),m==="align-right"&&w.forEach(re=>{const Se=Number(re.width||0);u.updateElement(s.projectId,s.currentSlideId,re.id,{x:$e-Se},{persist:!1})}),m==="align-top"&&w.forEach(re=>u.updateElement(s.projectId,s.currentSlideId,re.id,{y:G},{persist:!1})),m==="align-middle"&&w.forEach(re=>{const Se=Number(re.height||0);u.updateElement(s.projectId,s.currentSlideId,re.id,{y:Ue-Se/2},{persist:!1})}),m==="align-bottom"&&w.forEach(re=>{const Se=Number(re.height||0);u.updateElement(s.projectId,s.currentSlideId,re.id,{y:Ae-Se},{persist:!1})}),m==="distribute-horizontal"){const re=[...w].sort((Ne,Ve)=>(Ne.x||0)-(Ve.x||0)),Se=re.reduce((Ne,Ve)=>Ne+Number(Ve.width||0),0),He=re.length>1?($e-Q-Se)/(re.length-1):0;let Re=Q;re.forEach(Ne=>{u.updateElement(s.projectId,s.currentSlideId,Ne.id,{x:Re},{persist:!1}),Re+=Number(Ne.width||0)+He})}if(m==="distribute-vertical"){const re=[...w].sort((Ne,Ve)=>(Ne.y||0)-(Ve.y||0)),Se=re.reduce((Ne,Ve)=>Ne+Number(Ve.height||0),0),He=re.length>1?(Ae-G-Se)/(re.length-1):0;let Re=G;re.forEach(Ne=>{u.updateElement(s.projectId,s.currentSlideId,Ne.id,{y:Re},{persist:!1}),Re+=Number(Ne.height||0)+He})}u.commitProject(s.projectId)}function at(m){const w=s.activeTool;if(m.target!==p.value&&m.target!==m.currentTarget)return;m.preventDefault(),m.stopPropagation();const Q=p.value.getBoundingClientRect(),G=(m.clientX-Q.left)/h.value,$e=(m.clientY-Q.top)/h.value;if(w==="select"){C.value=!0,te.value={x:G,y:$e},ke.value={x:G,y:$e};const Ue=Se=>{ke.value={x:(Se.clientX-Q.left)/h.value,y:(Se.clientY-Q.top)/h.value}},re=()=>{window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",re);const Se=ie.value;if(Se&&(Se.width>2||Se.height>2)){const He=we.value.filter(Re=>{const Ne=Re.x,Ve=Re.y,vt=Re.width||100,ft=Re.height||100;return Ne<Se.x+Se.width&&Ne+vt>Se.x&&Ve<Se.y+Se.height&&Ve+ft>Se.y}).map(Re=>Re.id);He.length>0?s.setSelection(He):s.clearSelection()}else s.clearSelection();setTimeout(()=>{C.value=!1},0)};window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",re);return}const Ae=Ue=>s.snapToGrid?Math.round(Ue/s.gridSize)*s.gridSize:Ue,qe=u.addElement(s.projectId,s.currentSlideId,w,{x:Ae(G-75),y:Ae($e-40)});qe&&(s.selectElement(qe.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const Xe=P(()=>{if(!s.showGrid)return{};const m=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${m}px ${m}px`}}),dt={text:qt,heading:qt,image:Gc,shape:Qc,button:Kc,hotspot:tp,video:rp,audio:pp,quiz:wp,chart:il,divider:"div"};function ht(m){return dt[m]||qt}function st(m){var w,Q;return m.type!=="divider"?{}:{borderTop:`${((w=m.content)==null?void 0:w.thickness)||2}px solid ${((Q=m.content)==null?void 0:Q.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const Le=B({show:!1,x:0,y:0,elId:null});function ct(m,w){m.preventDefault(),Le.value={show:!0,x:m.clientX,y:m.clientY,elId:w},s.selectElement(w),setTimeout(()=>window.addEventListener("click",Ze,{once:!0}),0)}function Ze(){Le.value.show=!1}function $t(){if(Le.value.elId){const m=u.duplicateElement(s.projectId,s.currentSlideId,Le.value.elId);m&&s.selectElement(m.id)}Ze()}function St(){Le.value.elId&&(u.deleteElement(s.projectId,s.currentSlideId,Le.value.elId),s.clearSelection()),Ze()}function pt(){Le.value.elId&&u.reorderElement(s.projectId,s.currentSlideId,Le.value.elId,"up"),Ze()}function It(){Le.value.elId&&u.reorderElement(s.projectId,s.currentSlideId,Le.value.elId,"down"),Ze()}function At(){const m=a.value,w=u.addSlide(s.projectId,m);w&&s.setCurrentSlide(w.id)}function Pt(){const m=a.value;m>0&&s.setCurrentSlide(N.value[m-1].id)}function Mt(){const m=a.value;m<N.value.length-1&&s.setCurrentSlide(N.value[m+1].id)}return(m,w)=>{var Q;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[z.value?(l(),i(Z,{key:1},[e("div",{class:J(["canvas-zoom-wrapper",[ye.value&&`canvas-zoom-wrapper-${ye.value.tone}`]]),style:be({transform:V.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:be({width:le.value+"px",height:W.value+"px",...R.value,...Xe.value}),onClick:fe,onMousedown:at,onDragover:Ee,onDragleave:Oe,onDrop:xe,onContextmenu:w[3]||(w[3]=je(()=>{},["prevent"]))},[ye.value?(l(),i("div",$p)):F("",!0),I(s).multiSelection&&_.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=je(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),ue(e("select",{"onUpdate:modelValue":w[0]||(w[0]=G=>f.value=G),class:"selection-preset-select"},[(l(!0),i(Z,null,de(_.value,G=>(l(),i("option",{key:G.id,value:G.id},k(G.name),9,Sp))),128))],512),[[Bt,f.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:je(oe,["stop"])},"Apply")],32)):F("",!0),ve.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=je(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,k(ve.value),1)],32)):F("",!0),Y.value?(l(),i("div",{key:3,class:"block-drop-preview",style:be({left:`${Y.value.x}px`,top:`${Y.value.y}px`,width:`${Y.value.bounds.width}px`,height:`${Y.value.bounds.height}px`})},[(l(!0),i(Z,null,de(Y.value.block.elements,(G,$e)=>{var Ae,qe,Ue,re;return l(),i("div",{key:`${Y.value.block.id}-preview-${$e}`,class:J(["block-drop-preview-el",`block-drop-preview-${G.type}`]),style:be({left:`${Number(G.x||0)-Y.value.bounds.minX}px`,top:`${Number(G.y||0)-Y.value.bounds.minY}px`,width:`${Number(G.width||0)}px`,height:`${Number(G.height||0)}px`,borderRadius:G.type==="shape"&&((Ae=G.content)==null?void 0:Ae.shapeType)==="circle"?"50%":`${Number(((qe=G.content)==null?void 0:qe.borderRadius)||12)}px`,background:G.type==="shape"?((Ue=G.content)==null?void 0:Ue.fillColor)||"rgba(108,71,255,.18)":G.type==="button"?((re=G.content)==null?void 0:re.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(G.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(G.type)?(l(),i(Z,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):F("",!0)],6)}),128))],4)):F("",!0),(l(!0),i(Z,null,de(we.value,G=>(l(),Ye(qc,{key:G.id,element:G,onContextmenu:je($e=>ct($e,G.id),["stop"])},{default:ut(()=>[(l(),Ye(Fn(ht(G.type)),{element:G,style:be(G.type==="divider"?st(G):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),ye.value?(l(),i("div",{key:4,class:J(["canvas-guide",[`canvas-guide-${ye.value.tone}`,ee.value&&"canvas-guide-warning-state"]]),style:be(ye.value.style),"aria-hidden":"true"},[e("span",Ip,k(ye.value.label)+" · "+k(me.value),1)],6)):F("",!0),I(s).activeTool!=="select"||L.value||D.value?(l(),i("div",Ap,k(D.value?"Drop block to insert it here":L.value?"Drop image to insert it on this slide":`Click anywhere to add ${I(s).activeTool}`),1)):F("",!0),C.value&&ie.value?(l(),i("div",{key:6,class:"selection-marquee",style:be({left:ie.value.x+"px",top:ie.value.y+"px",width:ie.value.width+"px",height:ie.value.height+"px"})},null,4)):F("",!0)],36)],6),e("div",Pp,[e("button",{class:"bar-btn",onClick:At},"Add page"),e("button",{class:"bar-btn icon",onClick:Pt,disabled:a.value<=0},"◀",8,Mp),e("span",Ep,k(a.value+1)+" / "+k(N.value.length),1),e("button",{class:"bar-btn icon",onClick:Mt,disabled:a.value>=N.value.length-1},"▶",8,Tp),e("span",null,k(le.value)+" × "+k(W.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,k(((Q=z.value.elements)==null?void 0:Q.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:J(["playback-badge",`playback-badge-${U.value.tone}`])},k(U.value.label),3),I(s).hasSelection?(l(),i("span",Np,"· "+k(I(s).selectedElementIds.length)+" selected",1)):F("",!0),I(s).multiSelection?(l(),i(Z,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=G=>We("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=G=>We("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=G=>We("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=G=>We("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=G=>We("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=G=>We("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=G=>We("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=G=>We("distribute-vertical"))},"Space V")],64)):F("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=G=>I(s).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",kp,[(l(),i("svg",Cp,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),Ye(En,{to:"body"},[Le.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:be({left:Le.value.x+"px",top:Le.value.y+"px"})},[e("button",{class:"ctx-item",onClick:$t},"Duplicate"),e("button",{class:"ctx-item",onClick:pt},"Bring Forward"),e("button",{class:"ctx-item",onClick:It},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:St},"Delete")],4)):F("",!0)]))],512)}}},Bp=Ke(zp,[["__scopeId","data-v-e7450e9c"]]),_p={class:"ai-panel"},Lp={class:"ai-mode-tabs"},jp=["onClick"],Dp={class:"ai-content"},qp={class:"form-group"},Rp={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},Fp={key:0,class:"form-group"},Op={key:1,class:"form-group"},Up={class:"layout-label-row"},Vp={class:"layout-current-hint"},Gp={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},Wp=["onClick"],Hp={class:"layout-preset-title"},Yp={class:"layout-preset-hint"},Qp={key:2,class:"form-group"},Kp={key:3,class:"form-group"},Jp={class:"layout-label-row"},Xp={class:"layout-current-hint"},Zp={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},ev={key:4,class:"form-group"},tv={class:"layout-label-row"},ov={class:"layout-current-hint"},nv={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},lv=["onClick"],iv={class:"layout-preset-title"},av={class:"layout-preset-hint"},sv={class:"form-group"},rv={class:"form-group"},uv={class:"prompt-label-row"},dv={key:1,class:"prompt-auto-badge"},cv={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},pv={key:6,class:"selected-source-card"},vv={class:"result-header"},fv={class:"source-count-badge"},mv={class:"selected-source-preview"},gv={class:"selected-source-actions"},bv=["disabled"],yv=["disabled"],hv={key:0,class:"spinner"},xv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wv={key:7,class:"creative-options-wrap"},kv={class:"result-header"},Cv={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},$v={key:1,class:"creative-options-list"},Sv={class:"creative-title"},Iv={class:"creative-angle"},Av=["onClick"],Pv={class:"form-group"},Mv={class:"quiz-config-row"},Ev={class:"form-group",style:{flex:"1"}},Tv={class:"form-group",style:{flex:"1"}},Nv={class:"form-group"},zv={class:"qtype-btns"},Bv=["onClick"],_v={class:"qtype-icon"},Lv={class:"form-group"},jv={class:"form-group"},Dv={class:"prompt-label-row"},qv={key:1,class:"prompt-auto-badge"},Rv=["disabled"],Fv={key:0,class:"spinner"},Ov={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Uv={key:0,class:"quiz-results"},Vv={class:"quiz-results-header"},Gv={class:"form-label"},Wv={class:"quiz-header-actions"},Hv={class:"regen-row"},Yv=["disabled"],Qv={key:0,class:"spinner spinner-sm"},Kv={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Jv=["disabled"],Xv={class:"quiz-card-header"},Zv={class:"quiz-card-check"},e1=["onUpdate:modelValue"],t1={class:"q-num"},o1={class:"q-badges"},n1={class:"badge type-badge"},l1={class:"q-question"},i1={class:"q-options"},a1={class:"q-option-letter"},s1={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},r1={key:0,class:"q-explanation"},u1=["disabled"],d1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},c1=["disabled"],p1={key:0,class:"spinner"},v1={key:0,class:"selected-text-preview"},f1={class:"text-preview"},m1={key:1,class:"ai-hint"},g1={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},b1=["disabled"],y1={key:0,class:"spinner"},h1={key:0,class:"selected-text-preview"},x1={class:"text-preview"},w1={key:1,class:"ai-hint"},k1={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},C1=["disabled"],$1={key:0,class:"spinner"},S1={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},I1={class:"result-header"},A1={class:"result-actions"},P1=["disabled"],M1={class:"textarea result-display"},E1={key:0,class:"demo-notice",style:{"margin-bottom":"var(--space-3)"}},T1={key:1,class:"ai-error",style:{"margin-bottom":"var(--space-3)"}},N1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},z1=["disabled"],B1={key:0,class:"spinner"},_1={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},L1={class:"textarea result-display",style:{color:"var(--color-primary)"}},j1={key:6,class:"ai-settings"},D1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},q1=["value"],R1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},F1=["value","placeholder"],O1={class:"form-hint"},U1={key:0,class:"demo-notice"},V1={key:1,class:"demo-notice"},G1={key:7,class:"result-area"},W1={class:"result-header"},H1={class:"result-pre"},Y1={class:"result-actions"},Q1=["disabled"],K1={key:8,class:"ai-error"},J1={__name:"AIAssistant",setup(A){const s=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'}],u={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(r,o="classic"){const v=String(r||o||"classic").trim().toLowerCase();return s.some(E=>E.id===v)?v:o}function p(r,o=""){return String(r??o).replace(/^\s*[-•]\s*/,"").trim()||o}function y(r){return(Array.isArray(r)?r:typeof r=="string"?r.split(`
`):[]).map(v=>p(v)).filter(Boolean)}function h(r,o,v){const E=[...r];for(;E.length<o;)E.push(v(E.length));return E.slice(0,o)}function g(r,o){const v=Array.isArray(r)?r.map((b,se)=>({title:p(b==null?void 0:b.title,`Card ${se+1}`),body:p((b==null?void 0:b.body)||(b==null?void 0:b.text)||(b==null?void 0:b.description),"Add supporting detail.")})).filter(b=>b.title||b.body):[],E=o.map((b,se)=>({title:`Point ${se+1}`,body:b}));return h(v.length?v:E,3,b=>({title:`Point ${b+1}`,body:"Add supporting detail."}))}function j(r,o){const v=y(r==null?void 0:r.leftPoints),E=y(r==null?void 0:r.rightPoints),b=o.slice(0,Math.max(1,Math.ceil(o.length/2))),se=o.slice(Math.max(1,Math.ceil(o.length/2)));return{leftTitle:p(r==null?void 0:r.leftTitle,"Option A"),leftPoints:h(v.length?v:b,3,Te=>`Left point ${Te+1}`),rightTitle:p(r==null?void 0:r.rightTitle,"Option B"),rightPoints:h(E.length?E:se,3,Te=>`Right point ${Te+1}`)}}function ne(r,o){const v=Array.isArray(r)?r.map((b,se)=>({value:p(b==null?void 0:b.value,`${se+1}`),label:p(b==null?void 0:b.label,`Metric ${se+1}`)})).filter(b=>b.value||b.label):[],E=o.map((b,se)=>{const[Te,...et]=b.split(/[:\-]/);return{value:p(Te,`${se+1}`),label:p(et.join(" ").trim(),b)}});return h(v.length?v:E,3,b=>({value:`${b+1}`,label:`Metric ${b+1}`}))}function le(r,o){const v=Array.isArray(r)?r.map((b,se)=>({title:p(b==null?void 0:b.title,`Phase ${se+1}`),detail:p((b==null?void 0:b.detail)||(b==null?void 0:b.description),"Explain the milestone.")})).filter(b=>b.title||b.detail):[],E=o.map((b,se)=>({title:`Phase ${se+1}`,detail:b}));return h(v.length?v:E,4,b=>({title:`Phase ${b+1}`,detail:"Explain the milestone."}))}function W(r,o){const v=Array.isArray(r)?r.map((b,se)=>({question:p(b==null?void 0:b.question,`Question ${se+1}?`),answer:p(b==null?void 0:b.answer,"Add the short answer here.")})).filter(b=>b.question||b.answer):[],E=o.map((b,se)=>({question:`Question ${se+1}?`,answer:b}));return h(v.length?v:E,3,b=>({question:`Question ${b+1}?`,answer:"Add the short answer here."}))}function me(r,o){const v=Array.isArray(r)?r.map((b,se)=>({title:p(b==null?void 0:b.title,`Step ${se+1}`),detail:p((b==null?void 0:b.detail)||(b==null?void 0:b.description),"Add the step detail here.")})).filter(b=>b.title||b.detail):[],E=o.map((b,se)=>({title:`Step ${se+1}`,detail:b}));return h(v.length?v:E,3,b=>({title:`Step ${b+1}`,detail:"Add the step detail here."}))}const z=Gn(),N=lt(),a=it(),M=P(()=>z.apiProvider==="gemini"?"Gemini":"OpenAI"),_=P(()=>z.apiProvider==="gemini"?"AIza...":"sk-..."),H=P(()=>z.apiProvider==="gemini"?"Gemini API keys from Google AI Studio work for text features on the free tier. We provide free image generation via Pollinations.ai when Gemini is selected. The key is stored locally in your browser and never sent to our servers.":"Key is stored locally in your browser. It is never sent to our servers."),f=B("generate"),U=B(""),oe=B(""),X=B("");Qe(f,()=>{X.value=""}),Qe(()=>N.aiPanelMode,r=>{r&&(f.value=r)},{immediate:!0});const we=B(4),R=B("general"),V=B("Spanish"),ce=B(""),ge=B(""),te=B(""),ke=B(!1),C=B("single"),L=B("classic"),D=B("mixed"),Y=B(5),ye=B("slide"),Be=B([]),Ie=B(""),_e=P(()=>s.find(r=>r.id===L.value)||s[0]),ee=P(()=>{const r=oe.value.trim()||"[your topic]";if(C.value==="deck"){let E=`Create a complete ${Y.value}-slide learning deck about "${r}".`;return ge.value.trim()&&(E+=`
Additional context: ${ge.value.trim()}`),E+=`
Deck layout strategy: ${D.value}`,D.value==="single"?E+=`
Use the ${L.value} layout for every slide.`:E+=`
Mix layouts across the deck when appropriate.`,E+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process" }] }`,E+=`
Make each slide distinct, logically sequenced, and specific to "${r}".`,E}let v=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[R.value]||"educational slide"} about "${r}".`;return ge.value.trim()&&(v+=`
Additional context: ${ge.value.trim()}`),v+=`
Layout mode: ${L.value}`,v+=`
Layout instruction: ${_e.value.promptHint}`,v+=`
Return ONLY valid JSON matching this shape: ${_e.value.schema}`,v+=`
Make all content specific to "${r}" — no generic placeholders.`,v});Qe(ee,r=>{ke.value||(te.value=r)},{immediate:!0});function ve(){te.value=ee.value,ke.value=!1}const ie=B(""),fe=B("intermediate"),Me=B("multiple-choice"),he=B(""),S=B([]),$=B(""),q=B(!1),x=P(()=>{const r=ie.value.trim()||"[your topic]",o={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},v={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let E=`Generate ${we.value} ${o[fe.value]} ${v[Me.value]} quiz questions about "${r}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return he.value.trim()&&(E+=`
Learning objective: ${he.value.trim()}`),E});Qe(x,r=>{q.value||($.value=r)},{immediate:!0});function De(){$.value=x.value,q.value=!1}const Ee=P(()=>a.getProject(N.projectId)),Oe=P(()=>{var r,o;return(o=(r=Ee.value)==null?void 0:r.slides)==null?void 0:o.find(v=>v.id===N.currentSlideId)}),xe=P(()=>{var r,o;return N.selectedElementId?(o=(r=Oe.value)==null?void 0:r.elements)==null?void 0:o.find(v=>v.id===N.selectedElementId):null}),We=P(()=>{var o;const r=new Set(N.selectedElementIds);return(((o=Oe.value)==null?void 0:o.elements)||[]).filter(v=>{var E;return r.has(v.id)&&typeof((E=v==null?void 0:v.content)==null?void 0:E.text)=="string"&&v.content.text.trim()})}),at=P(()=>We.value.map(r=>r.content.text.trim()).filter(Boolean).join(`

`));async function Xe(){if(!oe.value.trim()&&!te.value.trim())return;if(X.value="",Be.value=[],Ie.value="",C.value==="deck"){const o=await z.generateSlideDeck(oe.value,Y.value,{objective:ge.value,customPrompt:te.value,layoutStrategy:D.value,layoutMode:L.value});if(o!=null&&o.length){const v=o.map(E=>dt(E));X.value=JSON.stringify({slides:v},null,2),$e(v,{replaceGenerated:!0})}return}if(ye.value==="options"){await Ue();return}const r=await z.generateSlideContent(oe.value,R.value,ge.value,te.value,{layoutMode:L.value});if(r){const o=dt(r);X.value=JSON.stringify(o,null,2),Ae(o,{replaceGenerated:!0})}}function dt(r){var b;const o=r&&typeof r=="object"?r:{},v=y(o.bullets),E=c(o.layout||((b=o.design)==null?void 0:b.layout),C.value==="deck"&&D.value==="mixed"?"classic":L.value);return{title:String(o.title||oe.value||"Untitled Slide").trim(),subtitle:String(o.subtitle||"").trim(),bullets:v,callout:String(o.callout||"").trim(),layout:E,cards:g(o.cards,v),comparison:j(o.comparison,v),metrics:ne(o.metrics,v),timeline:le(o.timeline,v),faqs:W(o.faqs,v),process:me(o.process,v)}}function ht(r,o){var b,se,Te;const v=(se=(b=a.getProject(r))==null?void 0:b.slides)==null?void 0:se.find(et=>et.id===o);if(!((Te=v==null?void 0:v.elements)!=null&&Te.length))return;v.elements.filter(et=>{var T;return((T=et.meta)==null?void 0:T.source)==="ai-content"}).map(et=>et.id).forEach(et=>{a.deleteElement(r,o,et)})}function st(r,o,v,E){return a.addElement(r,o,v,{...E,meta:{...E.meta||{},source:"ai-content"}})}function Le(r){const o=ol.find(E=>E.id===r);if(!o)return null;const v=nl(JSON.parse(JSON.stringify(o)),r);return v.elements=v.elements.map(E=>({...E,meta:{...E.meta||{},source:"ai-content"}})),v}function ct(r,o){o&&r.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:o,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function Ze(r,o){if(!o)return;const v=Ft(r);r.elements.push({type:"text",x:0,y:v.height+18,width:Math.max(v.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${o}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function $t(r){const o=Array.isArray(r)?r:[];if(!o.length)return{minX:40,minY:54,width:0,height:0};const v=Math.min(...o.map(Te=>Number(Te.x||0))),E=Math.min(...o.map(Te=>Number(Te.y||0))),b=Math.max(...o.map(Te=>Number(Te.x||0)+Number(Te.width||0))),se=Math.max(...o.map(Te=>Number(Te.y||0)+Number(Te.height||0)));return{minX:v,minY:E,width:Math.max(0,b-v),height:Math.max(0,se-E)}}function St(r,o){var se;const v=a.getProject(r),E=Ft(o),b=Number(((se=v==null?void 0:v.settings)==null?void 0:se.slideWidth)||960);return{x:Math.max(40,Math.round((b-E.width)/2)),y:54}}function pt(r){const o=Le(u.cards);if(!o)return null;const v=r.cards;return o.elements[0].content.text=r.title,o.elements[1].content.text=r.subtitle||r.callout||"Use the three cards to frame the main ideas.",v.forEach((E,b)=>{o.elements[5+b].content.text=E.title,o.elements[8+b].content.text=E.body}),r.callout&&r.subtitle&&Ze(o,r.callout),o}function It(r){const o=Le(u.comparison);return o?(o.elements[0].content.text=r.title,o.elements[3].content.text=r.comparison.leftTitle,o.elements[4].content.text=r.comparison.rightTitle,o.elements[5].content={...o.elements[5].content,text:r.comparison.leftPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},o.elements[6].content={...o.elements[6].content,text:r.comparison.rightPoints.map(v=>`• ${v}`).join(`
`),fontSize:17,lineHeight:1.55},ct(o,r.subtitle),Ze(o,r.callout),o):null}function At(r){const o=Le(u.metrics);return o?(o.elements[0].content.text=r.title,r.metrics.forEach((v,E)=>{o.elements[4+E].content.text=v.value,o.elements[7+E].content.text=v.label}),ct(o,r.subtitle),Ze(o,r.callout),o):null}function Pt(r){const o=Le(u.timeline);return o?(o.elements[0].content.text=r.title,r.timeline.forEach((v,E)=>{o.elements[6+E].content={...o.elements[6+E].content,text:`${v.title}
${v.detail}`,fontSize:16,lineHeight:1.35}}),ct(o,r.subtitle),Ze(o,r.callout),o):null}function Mt(r){const o=Le(u.faq);return o?(o.elements[0].content.text=r.title,r.faqs.forEach((v,E)=>{o.elements[4+E].content={...o.elements[4+E].content,text:`${v.question}
${v.answer}`,fontSize:16,lineHeight:1.35},o.elements[4+E].height=44}),ct(o,r.subtitle),Ze(o,r.callout),o):null}function m(r){const o=Le(u.process);return o?(o.elements[0].content.text=r.title,r.process.forEach((v,E)=>{o.elements[8+E].content.text=v.title,o.elements[11+E].content.text=v.detail}),ct(o,r.subtitle),Ze(o,r.callout),o):null}function w(r){switch(r.layout){case"cards":return pt(r);case"comparison":return It(r);case"metrics":return At(r);case"timeline":return Pt(r);case"faq":return Mt(r);case"process":return m(r);default:return null}}function Q(r,o,v){var E;if(v.title&&(a.updateSlide(r,o,{title:v.title}),st(r,o,"heading",{x:60,y:40,width:840,height:80,content:{text:v.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),v.subtitle&&st(r,o,"text",{x:60,y:130,width:840,height:50,content:{text:v.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(E=v.bullets)!=null&&E.length){const b=v.bullets.map(se=>`• ${se}`).join(`
`);st(r,o,"text",{x:60,y:v.subtitle?200:150,width:840,height:200,content:{text:b,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}v.callout&&(st(r,o,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),st(r,o,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${v.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function G(r,o,v,{replaceGenerated:E=!1,origin:b=null}={}){if(!r||!o)return;E&&ht(r,o);const se=w(v);if(a.updateSlide(r,o,{title:v.title||"Untitled Slide"}),se){const Te=b||St(r,se);a.insertContentBlock(r,o,se,Te)}else Q(r,o,v)}function $e(r,{replaceGenerated:o=!1}={}){if(!N.currentSlideId)return;const v=N.projectId;if(!v||!Array.isArray(r)||!r.length)return;r.map(b=>dt(b)).forEach(b=>{const se=a.addSlide(v);se&&G(v,se.id,b,{replaceGenerated:o})})}function Ae(r=null,{replaceGenerated:o=!1}={}){if(!N.currentSlideId)return;let v=r;if(!v){if(!X.value)return;try{v=JSON.parse(X.value)}catch(Te){console.warn("Could not parse AI content:",Te);return}}const E=dt(v),b=N.projectId,se=N.currentSlideId;!b||!se||G(b,se,E,{replaceGenerated:o})}function qe(){if(X.value){if(C.value==="deck"){try{const r=JSON.parse(X.value),o=Array.isArray(r)?r:r==null?void 0:r.slides;if(!Array.isArray(o)||!o.length)return;$e(o,{replaceGenerated:!0})}catch{return}return}Ae()}}async function Ue(){const r=oe.value.trim()||"[your topic]",o=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${R.value}" slide about "${r}" using a ${L.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,v=await z.generate(o,{type:"creativeOptions",topic:r,slideType:R.value});if(v)try{const E=JSON.parse(v.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(E))throw new Error("Options must be an array");Be.value=E.slice(0,3).map((b,se)=>({title:String((b==null?void 0:b.title)||`Option ${se+1}`),angle:String((b==null?void 0:b.angle)||""),prompt:String((b==null?void 0:b.prompt)||"")})).filter(b=>b.prompt.trim()),Be.value.length||(Ie.value="No usable creative options were returned. Try generating again.")}catch{Ie.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function re(r){r!=null&&r.prompt&&(te.value=r.prompt,ke.value=!0,ye.value="slide",await Xe())}async function Se(){if(!at.value.trim()||!N.projectId||!N.currentSlideId)return;const r=await z.transformSourceTextToSlideContent(at.value,{topic:oe.value,slideType:R.value,description:ge.value,layoutMode:L.value,customPrompt:te.value});if(!r)return;const o=dt(r),v=$t(We.value),E={x:Math.max(24,Math.round(v.minX)),y:Math.max(24,Math.round(v.minY))};We.value.forEach(b=>{a.deleteElement(N.projectId,N.currentSlideId,b.id)}),X.value=JSON.stringify(o,null,2),G(N.projectId,N.currentSlideId,o,{origin:E})}async function He(r=!1){if(!ie.value.trim()&&!$.value.trim())return;r||(S.value=[]);const o=await z.generateQuiz(ie.value,we.value,{difficulty:fe.value,questionType:Me.value,objective:he.value,customPrompt:$.value});if(o)if(r){const v=new Set(S.value.map(b=>b.question)),E=o.filter(b=>!v.has(b.question)).map(b=>({...b,_selected:!0}));S.value=[...S.value,...E]}else S.value=o.map(v=>({...v,_selected:!0}))}async function Re(){const r=S.value.filter(v=>v._selected);if(!r.length)return;const o=N.projectId;r.forEach((v,E)=>{const b=a.addSlide(o);b&&(a.addElement(o,b.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:v.question,options:v.options,correctIndex:v.correctIndex,explanation:v.explanation||""}}),a.updateSlide(o,b.id,{title:`Q${E+1}: ${v.question.slice(0,40)}…`}))}),S.value=[]}function Ne(r){S.value.forEach(o=>o._selected=r)}async function Ve(){if(!ce.value.trim())return;const r=await z.generateVoiceoverScript(ce.value);r&&(X.value=r)}async function vt(){var v,E;const r=(E=(v=xe.value)==null?void 0:v.content)==null?void 0:E.text;if(!r)return;const o=await z.generateTranslation(r,V.value);o&&(X.value=o)}async function ft(){!X.value||!xe.value||a.updateElement(N.projectId,N.currentSlideId,xe.value.id,{content:{...xe.value.content,text:X.value}})}const Je=B(""),mt=B(!1);function Et(r){return String(r||"").replace(/```(json)?\n?/gi," ").replace(/```/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim().slice(0,220)}function Tt(r,o){return new Promise((v,E)=>{const b=window.setTimeout(()=>{E(new Error("Timed out"))},o);Promise.resolve(r).then(se=>{window.clearTimeout(b),v(se)}).catch(se=>{window.clearTimeout(b),E(se)})})}function Nt(r){const o=String(r||"").trim(),v=o.toLowerCase(),E=M.value;return o?v.includes("billing hard limit")||v.includes("billing")||v.includes("quota")||v.includes("insufficient_quota")?z.apiProvider==="gemini"?"Gemini image generation is being rejected by Google because this project is still on the free tier. Gemini Developer API image models require a billing-enabled project, so you need to enable billing in AI Studio or switch providers for image generation.":`Your ${E} account cannot generate images right now because its billing or quota limit has been reached. Update billing or wait for quota reset, then try again.`:z.apiProvider==="gemini"&&(v.includes("resource exhausted")||v.includes("free tier")||v.includes("generativelanguage.googleapis.com"))?"Gemini image generation is not available to this free-tier project. Enable billing for the Gemini project in AI Studio to use Gemini image models.":v.includes("invalid api key")||v.includes("incorrect api key")||v.includes("unauthorized")?`The ${E} API key appears invalid for image generation. Check the key in API settings and try again.`:v.includes("rate limit")||v.includes("too many requests")?`${E} rate-limited the image request. Wait a moment and try again.`:`${E} image generation failed: ${o}`:`${E} image generation did not return an image. Try a simpler prompt or try again in a moment.`}async function Dt(){if(Je.value.trim()){mt.value=!0,X.value="Preparing image prompt...";try{if(!z.apiKey&&z.apiProvider!=="gemini"){X.value=`AI image generation requires a ${M.value} API key in API settings. No fallback image was inserted.`;return}let r=Je.value;try{const v=await Tt(z.generateImagePrompt(Je.value),2200);v&&(r=v.replace(/```(json)?\n?/g,"").trim())}catch{r=Je.value}r=Et(r)||Et(Je.value),X.value="Generating image and inserting it on the slide...";const o=await Tt(z.generateImageAsset(r),2e4).catch(()=>null);if(!o){X.value=Nt(z.lastError);return}a.addElement(N.projectId,N.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:o,fallbackSrcs:[],alt:Je.value.trim()||"AI generated image",sourceType:`${z.apiProvider}-image`,objectFit:"cover"}}),X.value=`AI image added to slide using ${M.value} image generation.`}catch(r){X.value=Nt((r==null?void 0:r.message)||z.lastError)}finally{mt.value=!1}}}async function xt(){var o,v;if(!((v=(o=xe.value)==null?void 0:o.content)!=null&&v.text))return;const r=await z.improveText(xe.value.content.text,U.value||"Make it clearer and more engaging");r&&(X.value=r)}async function rt(){!X.value||!xe.value||a.updateElement(N.projectId,N.currentSlideId,xe.value.id,{content:{...xe.value.content,text:X.value}})}async function gt(){if(!U.value.trim())return;const r=await z.generate(U.value);r&&(X.value=r)}return(r,o)=>{var v,E,b,se,Te,et;return l(),i("div",_p,[e("div",Lp,[(l(),i(Z,null,de([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],T=>e("button",{key:T.id,class:J(["ai-mode-btn",f.value===T.id&&"active"]),onClick:tt=>f.value=T.id},k(T.label),11,jp)),64))]),e("div",Dp,[f.value==="generate"?(l(),i(Z,{key:0},[e("div",qp,[o[36]||(o[36]=e("label",{class:"form-label"},[K("Topic / Subject "),e("span",{class:"required"},"*")],-1)),ue(e("input",{"onUpdate:modelValue":o[0]||(o[0]=T=>oe.value=T),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:In(Xe,["enter"])},null,544),[[Ce,oe.value]])]),e("div",Rp,[e("button",{class:J(["output-mode-btn",C.value==="single"&&"active"]),onClick:o[1]||(o[1]=T=>C.value="single")},"Single Slide",2),e("button",{class:J(["output-mode-btn",C.value==="deck"&&"active"]),onClick:o[2]||(o[2]=T=>C.value="deck")},"Slide Deck",2)]),C.value==="single"?(l(),i("div",Fp,[o[38]||(o[38]=e("label",{class:"form-label"},"Slide Type",-1)),ue(e("select",{"onUpdate:modelValue":o[3]||(o[3]=T=>R.value=T),class:"select"},[...o[37]||(o[37]=[ot('<option value="general" data-v-e64601f4>General</option><option value="intro" data-v-e64601f4>Introduction</option><option value="overview" data-v-e64601f4>Overview</option><option value="concept" data-v-e64601f4>Concept Explanation</option><option value="example" data-v-e64601f4>Example / Case Study</option><option value="summary" data-v-e64601f4>Summary</option><option value="callout" data-v-e64601f4>Key Takeaway</option>',7)])],512),[[Bt,R.value]])])):F("",!0),C.value==="single"?(l(),i("div",Op,[e("div",Up,[o[39]||(o[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",Vp,k(_e.value.hint),1)]),e("div",Gp,[(l(),i(Z,null,de(s,T=>e("button",{key:T.id,class:J(["layout-preset-card",L.value===T.id&&"active"]),onClick:tt=>L.value=T.id},[e("span",Hp,k(T.label),1),e("span",Yp,k(T.hint),1)],10,Wp)),64))])])):(l(),i("div",Qp,[o[40]||(o[40]=e("label",{class:"form-label"},"Number of Slides",-1)),ue(e("input",{"onUpdate:modelValue":o[4]||(o[4]=T=>Y.value=T),class:"input",type:"number",min:"1",max:"20"},null,512),[[Ce,Y.value,void 0,{number:!0}]]),o[41]||(o[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),C.value==="deck"?(l(),i("div",Kp,[e("div",Jp,[o[42]||(o[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",Xp,k(D.value==="mixed"?"AI can vary layout by slide":`All slides use ${_e.value.label}`),1)]),e("div",Zp,[e("button",{class:J(["output-mode-btn",D.value==="mixed"&&"active"]),onClick:o[5]||(o[5]=T=>D.value="mixed")},"Mixed Layouts",2),e("button",{class:J(["output-mode-btn",D.value==="single"&&"active"]),onClick:o[6]||(o[6]=T=>D.value="single")},"Consistent Layout",2)])])):F("",!0),C.value==="deck"&&D.value==="single"?(l(),i("div",ev,[e("div",tv,[o[43]||(o[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",ov,k(_e.value.hint),1)]),e("div",nv,[(l(),i(Z,null,de(s,T=>e("button",{key:`deck-${T.id}`,class:J(["layout-preset-card",L.value===T.id&&"active"]),onClick:tt=>L.value=T.id},[e("span",iv,k(T.label),1),e("span",av,k(T.hint),1)],10,lv)),64))])])):F("",!0),e("div",sv,[o[44]||(o[44]=e("label",{class:"form-label"},[K("Description "),e("span",{class:"optional"},"(optional)")],-1)),ue(e("textarea",{"onUpdate:modelValue":o[7]||(o[7]=T=>ge.value=T),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[Ce,ge.value]])]),e("div",rv,[e("div",uv,[o[46]||(o[46]=e("label",{class:"form-label"},"AI Prompt",-1)),ke.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:ve,title:"Reset to auto-generated prompt"},[...o[45]||(o[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),K(" Reset ",-1)])])):(l(),i("span",dv,"auto"))]),ue(e("textarea",{"onUpdate:modelValue":o[8]||(o[8]=T=>te.value=T),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:o[9]||(o[9]=T=>ke.value=!0),spellcheck:"false"},null,544),[[Ce,te.value]]),o[47]||(o[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),C.value==="single"?(l(),i("div",cv,[e("button",{class:J(["output-mode-btn",ye.value==="slide"&&"active"]),onClick:o[10]||(o[10]=T=>ye.value="slide")},"Show on Slide",2),e("button",{class:J(["output-mode-btn",ye.value==="options"&&"active"]),onClick:o[11]||(o[11]=T=>ye.value="options")},"Creative Options",2)])):F("",!0),C.value==="single"&&at.value?(l(),i("div",pv,[e("div",vv,[o[48]||(o[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",fv,k(We.value.length)+" selected",1)]),e("div",mv,k(at.value),1),e("div",gv,[e("button",{class:"btn btn-secondary btn-sm",disabled:I(z).isGenerating,onClick:Se}," Transform Selection to "+k(_e.value.label),9,bv)])])):F("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!oe.value.trim()&&!te.value.trim()||C.value==="deck"&&(!Y.value||Y.value<1||Y.value>20),onClick:Xe},[I(z).isGenerating?(l(),i("span",hv)):(l(),i("svg",xv,[...o[49]||(o[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),K(" "+k(I(z).isGenerating?"Generating…":C.value==="deck"?X.value?`Regenerate ${Y.value} Slides`:`Generate ${Y.value} Slides`:ye.value==="slide"?X.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,yv),C.value==="single"&&ye.value==="options"&&(Be.value.length||Ie.value)?(l(),i("div",wv,[e("div",kv,[o[50]||(o[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[12]||(o[12]=T=>{Be.value=[],Ie.value=""})},"Clear")]),Ie.value?(l(),i("div",Cv,[o[51]||(o[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),K(" "+k(Ie.value),1)])):(l(),i("div",$v,[(l(!0),i(Z,null,de(Be.value,(T,tt)=>(l(),i("article",{key:tt,class:"creative-option-card"},[e("h4",Sv,k(T.title),1),e("p",Iv,k(T.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:wt=>re(T)},"Use This Option",8,Av)]))),128))]))])):F("",!0)],64)):f.value==="quiz"?(l(),i(Z,{key:1},[e("div",Pv,[o[52]||(o[52]=e("label",{class:"form-label"},[K("Quiz Topic "),e("span",{class:"required"},"*")],-1)),ue(e("input",{"onUpdate:modelValue":o[13]||(o[13]=T=>ie.value=T),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:In(He,["enter"])},null,544),[[Ce,ie.value]])]),e("div",Mv,[e("div",Ev,[o[54]||(o[54]=e("label",{class:"form-label"},"Questions",-1)),ue(e("select",{"onUpdate:modelValue":o[14]||(o[14]=T=>we.value=T),class:"select"},[...o[53]||(o[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[Bt,we.value,void 0,{number:!0}]])]),e("div",Tv,[o[56]||(o[56]=e("label",{class:"form-label"},"Difficulty",-1)),ue(e("select",{"onUpdate:modelValue":o[15]||(o[15]=T=>fe.value=T),class:"select"},[...o[55]||(o[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[Bt,fe.value]])])]),e("div",Nv,[o[57]||(o[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",zv,[(l(),i(Z,null,de([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],T=>e("button",{key:T.id,class:J(["qtype-btn",Me.value===T.id&&"active"]),onClick:tt=>Me.value=T.id},[e("span",_v,k(T.icon),1),e("span",null,k(T.label),1)],10,Bv)),64))])]),e("div",Lv,[o[58]||(o[58]=e("label",{class:"form-label"},[K("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),ue(e("input",{"onUpdate:modelValue":o[16]||(o[16]=T=>he.value=T),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[Ce,he.value]])]),e("div",jv,[e("div",Dv,[o[60]||(o[60]=e("label",{class:"form-label"},"AI Prompt",-1)),q.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:De,title:"Reset to auto-generated prompt"},[...o[59]||(o[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),K(" Reset ",-1)])])):(l(),i("span",qv,"auto"))]),ue(e("textarea",{"onUpdate:modelValue":o[17]||(o[17]=T=>$.value=T),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:o[18]||(o[18]=T=>q.value=!0),spellcheck:"false"},null,544),[[Ce,$.value]]),o[61]||(o[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!ie.value.trim()&&!$.value.trim(),onClick:o[19]||(o[19]=T=>He(!1))},[I(z).isGenerating?(l(),i("span",Fv)):(l(),i("svg",Ov,[...o[62]||(o[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),K(" "+k(I(z).isGenerating?"Generating…":`Generate ${we.value} Questions`),1)],8,Rv),S.value.length?(l(),i("div",Uv,[e("div",Vv,[e("span",Gv,k(S.value.length)+" Questions",1),e("div",Wv,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[20]||(o[20]=T=>Ne(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:o[21]||(o[21]=T=>Ne(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:o[22]||(o[22]=T=>S.value=[])},"Clear")])]),e("div",Hv,[e("button",{class:"btn btn-secondary regen-btn",disabled:I(z).isGenerating,onClick:o[23]||(o[23]=T=>He(!1)),title:"Replace all questions with a new set"},[I(z).isGenerating?(l(),i("span",Qv)):(l(),i("svg",Kv,[...o[63]||(o[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),o[64]||(o[64]=K(" Regenerate ",-1))],8,Yv),e("button",{class:"btn btn-ghost regen-btn",disabled:I(z).isGenerating,onClick:o[24]||(o[24]=T=>He(!0)),title:"Generate more and append to current list"},[...o[65]||(o[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),K(" Add More ",-1)])],8,Jv)]),(l(!0),i(Z,null,de(S.value,(T,tt)=>(l(),i("div",{key:tt,class:J(["quiz-card",{deselected:!T._selected}])},[e("div",Xv,[e("label",Zv,[ue(e("input",{type:"checkbox","onUpdate:modelValue":wt=>T._selected=wt},null,8,e1),[[Lt,T._selected]]),e("span",t1,"Q"+k(tt+1),1)]),e("div",o1,[e("span",{class:J(["badge difficulty-badge",T.difficulty])},k(T.difficulty),3),e("span",n1,k(T.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",l1,k(T.question),1),e("div",i1,[(l(!0),i(Z,null,de(T.options,(wt,kt)=>(l(),i("div",{key:kt,class:J(["q-option",kt===T.correctIndex&&"correct"])},[e("span",a1,k(["A","B","C","D"][kt]),1),e("span",null,k(wt),1),kt===T.correctIndex?(l(),i("svg",s1,[...o[66]||(o[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):F("",!0)],2))),128))]),T.explanation?(l(),i("div",r1,[o[67]||(o[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),K(" "+k(T.explanation),1)])):F("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!S.value.filter(T=>T._selected).length,onClick:Re},[o[68]||(o[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),K(" Add "+k(S.value.filter(T=>T._selected).length)+" Selected as Quiz Slides ",1)],8,u1)])):F("",!0)],64)):f.value==="voiceover"?(l(),i(Z,{key:2},[e("div",d1,[o[69]||(o[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),ue(e("textarea",{"onUpdate:modelValue":o[25]||(o[25]=T=>ce.value=T),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[Ce,ce.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating,onClick:Ve},[I(z).isGenerating?(l(),i("span",p1)):F("",!0),K(" "+k(I(z).isGenerating?"Generating…":"Generate Script"),1)],8,c1)],64)):f.value==="improve"?(l(),i(Z,{key:3},[(E=(v=xe.value)==null?void 0:v.content)!=null&&E.text?(l(),i("div",v1,[o[70]||(o[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",f1,k(xe.value.content.text.slice(0,120))+k(xe.value.content.text.length>120?"…":""),1)])):(l(),i("p",m1,"Select a text element on the canvas to improve it.")),e("div",g1,[o[71]||(o[71]=e("label",{class:"form-label"},"Instruction",-1)),ue(e("input",{"onUpdate:modelValue":o[26]||(o[26]=T=>U.value=T),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[Ce,U.value]])]),o[72]||(o[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ue(e("textarea",{"onUpdate:modelValue":o[27]||(o[27]=T=>U.value=T),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[Ce,U.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!xe.value&&!U.value,onClick:o[28]||(o[28]=T=>xe.value?xt():gt())},[I(z).isGenerating?(l(),i("span",y1)):F("",!0),K(" "+k(I(z).isGenerating?"Processing…":"Generate"),1)],8,b1)],64)):f.value==="translate"?(l(),i(Z,{key:4},[(se=(b=xe.value)==null?void 0:b.content)!=null&&se.text?(l(),i("div",h1,[o[73]||(o[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",x1,k(xe.value.content.text.slice(0,120))+k(xe.value.content.text.length>120?"…":""),1)])):(l(),i("p",w1,"Select a text element on the canvas to translate it.")),e("div",k1,[o[75]||(o[75]=e("label",{class:"form-label"},"Target Language",-1)),ue(e("select",{"onUpdate:modelValue":o[29]||(o[29]=T=>V.value=T),class:"select"},[...o[74]||(o[74]=[ot('<option value="Spanish" data-v-e64601f4>Spanish</option><option value="French" data-v-e64601f4>French</option><option value="German" data-v-e64601f4>German</option><option value="Italian" data-v-e64601f4>Italian</option><option value="Portuguese" data-v-e64601f4>Portuguese</option><option value="Chinese (Simplified)" data-v-e64601f4>Chinese (Simplified)</option><option value="Japanese" data-v-e64601f4>Japanese</option><option value="Arabic" data-v-e64601f4>Arabic</option>',8)])],512),[[Bt,V.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(z).isGenerating||!((et=(Te=xe.value)==null?void 0:Te.content)!=null&&et.text),onClick:vt},[I(z).isGenerating?(l(),i("span",$1)):F("",!0),K(" "+k(I(z).isGenerating?"Translating…":"Translate Text"),1)],8,C1),X.value?(l(),i("div",S1,[e("div",I1,[o[76]||(o[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",A1,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[30]||(o[30]=T=>r.navigator.clipboard.writeText(X.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:ft,disabled:!xe.value},"Apply",8,P1)])]),e("div",M1,k(X.value),1)])):F("",!0)],64)):f.value==="image"?(l(),i(Z,{key:5},[o[81]||(o[81]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),I(z).apiProvider==="gemini"?(l(),i("div",E1,[...o[77]||(o[77]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),K(" Gemini text features work on the free tier, but Gemini image generation on the Developer API usually needs billing enabled for the project. ",-1)])])):F("",!0),I(z).apiKey?F("",!0):(l(),i("div",T1,[o[78]||(o[78]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),K(" AI image generation needs a "+k(M.value)+" API key in API settings. ",1)])),e("div",N1,[o[79]||(o[79]=e("label",{class:"form-label"},"Image Description",-1)),ue(e("textarea",{"onUpdate:modelValue":o[31]||(o[31]=T=>Je.value=T),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[Ce,Je.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:mt.value||I(z).isGenerating||!Je.value||!I(z).apiKey,onClick:Dt},[mt.value||I(z).isGenerating?(l(),i("span",B1)):F("",!0),K(" "+k(mt.value||I(z).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,z1),X.value?(l(),i("div",_1,[o[80]||(o[80]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",L1,k(X.value),1)])):F("",!0)],64)):f.value==="settings"?(l(),i("div",j1,[e("div",D1,[o[83]||(o[83]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:I(z).apiProvider,class:"select",onChange:o[32]||(o[32]=T=>I(z).setProvider(T.target.value))},[...o[82]||(o[82]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"gemini"},"Google Gemini (Free tier for text)",-1)])],40,q1)]),e("div",R1,[o[84]||(o[84]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:I(z).apiKey,class:"input",placeholder:_.value,onChange:o[33]||(o[33]=T=>I(z).setApiKey(T.target.value))},null,40,F1),e("p",O1,k(H.value),1)]),I(z).apiProvider==="gemini"?(l(),i("div",U1,[...o[85]||(o[85]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),K(" Gemini is enabled for content, quiz, voiceover, improve, and translate in this app. Gemini image generation may still require billing on the Google project. ",-1)])])):F("",!0),I(z).apiKey?F("",!0):(l(),i("div",V1,[o[86]||(o[86]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),o[87]||(o[87]=K(" Running in ",-1)),o[88]||(o[88]=e("strong",null,"demo mode",-1)),K(" — sample responses only. Add your "+k(M.value)+" API key to use real AI generation. ",1)]))])):F("",!0),X.value&&f.value!=="settings"&&f.value!=="quiz"?(l(),i("div",G1,[e("div",W1,[o[89]||(o[89]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[34]||(o[34]=T=>X.value="")},"Clear")]),e("pre",H1,k(X.value),1),e("div",Y1,[f.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:qe},k(C.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):F("",!0),f.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:I(z).isGenerating,onClick:Xe},[...o[90]||(o[90]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),K(" Regenerate ",-1)])],8,Q1)):F("",!0),f.value==="improve"&&xe.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:rt}," Apply to Element ")):F("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:o[35]||(o[35]=T=>{var tt;return(tt=r.navigator.clipboard)==null?void 0:tt.writeText(X.value)})}," Copy ")])])):F("",!0),I(z).lastError?(l(),i("div",K1,[o[91]||(o[91]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),K(" "+k(I(z).lastError),1)])):F("",!0)])])}}},X1=Ke(J1,[["__scopeId","data-v-e64601f4"]]),Z1={class:"theme-manager"},ef={class:"panel-section"},tf={class:"presets-grid"},of=["title","onClick"],nf={class:"preset-preview"},lf={class:"preset-name"},af={class:"panel-section"},sf={class:"theme-fields"},rf={class:"form-label"},uf={class:"color-row"},df=["value","onInput"],cf=["value","onChange"],pf={class:"panel-section"},vf={class:"theme-field"},ff=["value","placeholder"],mf={class:"chart-palette-preview"},gf={class:"panel-section"},bf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},yf=["value"],hf=["value"],xf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wf=["value"],kf=["value"],Cf={class:"form-group"},$f=["value"],Sf={class:"panel-section"},If={class:"tp-chart-row"},Af={key:0,class:"apply-message success"},Pf={key:1,class:"apply-message error"},Mf={__name:"ThemeManager",setup(A){const s=lt(),u=it(),c=P(()=>u.getProject(s.projectId)),p=P(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),y=P(()=>An(p.value)),h=B(""),g=B("");function j(a){u.updateProject(s.projectId,{theme:{...p.value,...a}})}const ne=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],le=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function W(a){j(a)}function me(a,M){const _=a.content||{};return a.type==="text"?{content:{..._,fontFamily:M.fontFamily||_.fontFamily,color:M.textColor||_.color}}:a.type==="heading"?{content:{..._,fontFamily:M.headingFont||M.fontFamily||_.fontFamily,color:M.textColor||_.color}}:a.type==="shape"?{content:{..._,fillColor:M.secondaryColor||_.fillColor}}:a.type==="hotspot"?{content:{..._,bgColor:M.primaryColor||_.bgColor}}:a.type==="button"?{content:{..._,bgColor:M.primaryColor||_.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:M.fontFamily||_.fontFamily}}:a.type==="quiz"?{content:{..._,cardBgColor:M.bgColor||_.cardBgColor,questionColor:M.textColor||_.questionColor,accentColor:M.primaryColor||_.accentColor}}:a.type==="chart"?{content:{..._,..._n(M)}}:null}function z(){j({chartPalette:""})}function N(){h.value="",g.value="";const a=s.projectId,M=c.value,_=p.value;if(!a||!M){g.value="No active project to apply theme.";return}const H=M.slides||[];let f=0;H.forEach(U=>{(U.backgroundType||"color")==="color"&&u.updateSlide(a,U.id,{backgroundType:"color",background:_.bgColor||U.background||"#ffffff"}),(U.elements||[]).forEach(oe=>{const X=me(oe,_);X&&(u.updateElement(a,U.id,oe.id,X),f+=1)})}),h.value=`Applied theme to ${H.length} slide${H.length===1?"":"s"} and ${f} element${f===1?"":"s"}.`}return(a,M)=>(l(),i("div",Z1,[e("div",ef,[M[4]||(M[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",tf,[(l(),i(Z,null,de(ne,_=>e("div",{key:_.name,class:"preset-card",title:_.name,onClick:H=>W(_)},[e("div",nf,[e("div",{class:"pp-header",style:be({background:_.primaryColor})},null,4),e("div",{class:"pp-body",style:be({background:_.bgColor})},[e("div",{class:"pp-line",style:be({background:_.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:be({background:_.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:be({background:_.secondaryColor})},null,4)]),e("span",lf,k(_.name),1)],8,of)),64))])]),e("div",af,[M[5]||(M[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",sf,[(l(),i(Z,null,de({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(_,H)=>e("div",{class:"theme-field",key:H},[e("label",rf,k(_),1),e("div",uf,[e("input",{type:"color",value:p.value[H]||"#ffffff",class:"color-input-native",onInput:f=>j({[H]:f.target.value})},null,40,df),e("input",{value:p.value[H]||"",class:"input",onChange:f=>j({[H]:f.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,cf)])])),64))])]),e("div",pf,[M[8]||(M[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",vf,[M[6]||(M[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:I(ll)(I(An)(p.value)),onChange:M[0]||(M[0]=_=>j({chartPalette:_.target.value}))},null,40,ff),e("div",mf,[(l(!0),i(Z,null,de(y.value,(_,H)=>(l(),i("span",{key:`theme-chart-${H}`,class:"chart-palette-dot",style:be({background:_})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:z},"Use auto palette")]),M[7]||(M[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",gf,[M[12]||(M[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",bf,[M[9]||(M[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:M[1]||(M[1]=_=>j({headingFont:_.target.value}))},[(l(),i(Z,null,de(le,_=>e("option",{key:_.value,value:_.value},k(_.label),9,hf)),64))],40,yf)]),e("div",xf,[M[10]||(M[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:M[2]||(M[2]=_=>j({fontFamily:_.target.value}))},[(l(),i(Z,null,de(le,_=>e("option",{key:_.value,value:_.value},k(_.label),9,kf)),64))],40,wf)]),e("div",Cf,[M[11]||(M[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:M[3]||(M[3]=_=>j({fontSize:+_.target.value}))},null,40,$f)])]),e("div",Sf,[M[13]||(M[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:be({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:be({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:be({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:be({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:be({background:p.value.secondaryColor})},"Badge",4),e("div",If,[(l(!0),i(Z,null,de(y.value.slice(0,5),(_,H)=>(l(),i("span",{key:`preview-chart-${H}`,class:"tp-chart-bar",style:be({background:_,height:`${22+H*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:N}," Apply Theme to Slides "),h.value?(l(),i("p",Af,k(h.value),1)):F("",!0),g.value?(l(),i("p",Pf,k(g.value),1)):F("",!0)])]))}},Ef=Ke(Mf,[["__scopeId","data-v-da2b0ce4"]]),Tf={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Nf={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},zf={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Bf={class:"export-tabs tabs",style:{"overflow-x":"auto"}},_f={class:"export-content"},Lf={class:"export-options",style:{"margin-bottom":"20px"}},jf={class:"form-group"},Df={class:"export-meta"},qf={class:"meta-item"},Rf={class:"meta-item"},Ff={class:"meta-item"},Of={class:"export-options",style:{"margin-bottom":"20px"}},Uf={class:"form-group"},Vf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Gf={class:"export-options",style:{"margin-bottom":"20px"}},Wf={class:"form-group"},Hf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Yf={class:"coming-soon"},Qf={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},Kf={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},Jf={key:1,class:"export-success"},Xf={__name:"ExportModal",setup(A){const s=lt(),u=it(),c=Ln(),p=P(()=>u.getProject(s.projectId)),y=B("json"),h=B(""),g=B(""),j=B(!0);Qe(p,H=>{H&&!g.value&&(g.value=H.name||"presentation")},{immediate:!0});function ne(){const H=u.exportProject(s.projectId);if(!H)return;const f=new Blob([H],{type:"application/json"}),U=URL.createObjectURL(f),oe=document.createElement("a");oe.href=U,oe.download=`${g.value||"project"}.mediasurf.json`,oe.click(),URL.revokeObjectURL(U),h.value="success",setTimeout(()=>h.value="",3e3)}function le(H,f="presentation"){return String(H).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||f}function W(H){return new Promise((f,U)=>{const oe=new FileReader;oe.onloadend=()=>f(oe.result),oe.onerror=()=>U(oe.error),oe.readAsDataURL(H)})}function me(H,f,U="html"){const oe=jt(f);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${oe.width}px;
  --lf-slide-height: ${oe.height}px;
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
  display: ${(f==null?void 0:f.showNavControls)===!1?"none":"flex"};
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
  display: ${(f==null?void 0:f.showNavControls)===!1?"none":"flex"};
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
  display: ${(f==null?void 0:f.showProgress)===!1?"none":"block"};
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
`}async function N(){return _("html")}async function a(){return _("iframe")}async function M(){return _("pdf")}async function _(H="html"){var _e,ee,ve;const f=p.value;if(!f)return;h.value="processing";const U=H==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(H==="pdf"&&!U){h.value="error",setTimeout(()=>h.value="",3e3);return}const oe=H==="pdf"?null:new al,X=oe?oe.folder("assets"):null;let we=0;async function R(ie,fe="media"){if((!ie||ie.startsWith("data:")||ie.startsWith("http://localhost")||ie.startsWith("blob:"))&&ie.startsWith("data:"))return ie;try{const he=await(await fetch(ie)).blob();if(H==="pdf")return await W(he);let S="bin";const $=he.type;if($.includes("image/png")?S="png":$.includes("image/jpeg")?S="jpg":$.includes("image/gif")?S="gif":$.includes("image/svg")?S="svg":$.includes("image/webp")?S="webp":$.includes("video/mp4")?S="mp4":$.includes("audio/mpeg")&&(S="mp3"),S==="bin"){const x=ie.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);x&&(S=x[1])}we++;const q=`${fe}_${we}.${S}`;return X.file(q,he),`assets/${q}`}catch(Me){return console.warn("Could not fetch asset:",ie,Me),ie}}const V=JSON.parse(JSON.stringify([...f.slides||[]])).sort((ie,fe)=>(ie.order??0)-(fe.order??0));if(j.value)for(const ie of V){ie.backgroundType==="image"&&ie.backgroundImage&&(ie.backgroundImage=await R(ie.backgroundImage,"bg"));for(const fe of ie.elements||[])fe.type==="image"&&((_e=fe.content)!=null&&_e.src)&&(fe.content.src=await R(fe.content.src,"img")),fe.type==="video"&&((ee=fe.content)!=null&&ee.src)&&!fe.content.src.includes("youtube")&&!fe.content.src.includes("youtu.be")&&(fe.content.src=await R(fe.content.src,"vid")),fe.type==="audio"&&((ve=fe.content)!=null&&ve.src)&&(fe.content.src=await R(fe.content.src,"aud"))}const ce=le(g.value||f.name||"presentation"),ge={name:f.name,theme:f.theme||{},settings:f.settings||{},slides:V},te=JSON.stringify(ge).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),ke=me(f.theme,f.settings,H),C=z(H),L=`<script id="lf-data" type="application/json">${te}<\/script>`,Y=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ce}</title>
${H==="pdf"?`<style>${ke}</style>`:'<link rel="stylesheet" href="style.css">'}
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
  <span class="nav-counter" id="counter">1 / ${V.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${L}
${H!=="pdf"?'<script src="script.js"><\/script>':`<script>${C}<\/script>`}
</body>
</html>`;if(H==="pdf"){U.document.open(),U.document.write(Y),U.document.close(),h.value="success",setTimeout(()=>h.value="",3e3);return}oe.file("index.html",Y),oe.file("style.css",ke),oe.file("script.js",C);const ye=await oe.generateAsync({type:"blob"}),Be=URL.createObjectURL(ye),Ie=document.createElement("a");Ie.href=Be,Ie.download=`${ce}.zip`,Ie.click(),URL.revokeObjectURL(Be),h.value="success",setTimeout(()=>h.value="",3e3)}return(H,f)=>(l(),Ye(Nn,{title:"Export Project",size:"md",onClose:f[13]||(f[13]=U=>I(s).showExportModal=!1)},{footer:ut(()=>[e("button",{class:"btn btn-secondary",onClick:f[12]||(f[12]=U=>I(s).showExportModal=!1)},"Close")]),default:ut(()=>{var U,oe,X,we,R;return[I(c).user?(l(),i(Z,{key:1},[e("div",Bf,[e("button",{class:J(["tab-btn",y.value==="json"&&"active"]),onClick:f[2]||(f[2]=V=>y.value="json")},"JSON",2),e("button",{class:J(["tab-btn",y.value==="html"&&"active"]),onClick:f[3]||(f[3]=V=>y.value="html")},"HTML",2),e("button",{class:J(["tab-btn",y.value==="iframe"&&"active"]),onClick:f[4]||(f[4]=V=>y.value="iframe")},"Iframe",2),e("button",{class:J(["tab-btn",y.value==="pdf"&&"active"]),onClick:f[5]||(f[5]=V=>y.value="pdf")},"PDF",2),e("button",{class:J(["tab-btn",y.value==="scorm"&&"active"]),onClick:f[6]||(f[6]=V=>y.value="scorm")},"SCORM",2)]),e("div",_f,[y.value==="json"?(l(),i(Z,{key:0},[f[24]||(f[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",Lf,[e("div",jf,[f[19]||(f[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ue(e("input",{type:"text","onUpdate:modelValue":f[7]||(f[7]=V=>g.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ce,g.value]])])]),e("div",Df,[e("div",qf,[f[20]||(f[20]=e("span",null,"Project",-1)),e("strong",null,k((U=p.value)==null?void 0:U.name),1)]),e("div",Rf,[f[21]||(f[21]=e("span",null,"Slides",-1)),e("strong",null,k(((X=(oe=p.value)==null?void 0:oe.slides)==null?void 0:X.length)||0),1)]),e("div",Ff,[f[22]||(f[22]=e("span",null,"Elements",-1)),e("strong",null,k(((R=(we=p.value)==null?void 0:we.slides)==null?void 0:R.reduce((V,ce)=>{var ge;return V+(((ge=ce.elements)==null?void 0:ge.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:ne},[...f[23]||(f[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Download JSON ",-1)])])],64)):y.value==="html"?(l(),i(Z,{key:1},[f[28]||(f[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",Of,[e("div",Uf,[f[25]||(f[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ue(e("input",{type:"text","onUpdate:modelValue":f[8]||(f[8]=V=>g.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ce,g.value]])]),e("label",Vf,[ue(e("input",{type:"checkbox","onUpdate:modelValue":f[9]||(f[9]=V=>j.value=V)},null,512),[[Lt,j.value]]),f[26]||(f[26]=K(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),f[29]||(f[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:N},[...f[27]||(f[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Download HTML ",-1)])])],64)):y.value==="iframe"?(l(),i(Z,{key:2},[f[33]||(f[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Gf,[e("div",Wf,[f[30]||(f[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ue(e("input",{type:"text","onUpdate:modelValue":f[10]||(f[10]=V=>g.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Ce,g.value]])]),e("label",Hf,[ue(e("input",{type:"checkbox","onUpdate:modelValue":f[11]||(f[11]=V=>j.value=V)},null,512),[[Lt,j.value]]),f[31]||(f[31]=K(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...f[32]||(f[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Download Iframe Zip ",-1)])])],64)):y.value==="pdf"?(l(),i(Z,{key:3},[f[35]||(f[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),f[36]||(f[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:M},[...f[34]||(f[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Generate PDF ",-1)])])],64)):y.value==="scorm"?(l(),i(Z,{key:4},[f[40]||(f[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Yf,[(l(),i("svg",Qf,[...f[37]||(f[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),f[38]||(f[38]=e("h4",null,"Coming Soon",-1)),f[39]||(f[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):F("",!0),yt(_t,{name:"fade"},{default:ut(()=>[h.value==="processing"?(l(),i("div",Kf,[...f[41]||(f[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),K(" Generating package... Please wait. ",-1)])])):h.value==="success"?(l(),i("div",Jf,[...f[42]||(f[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),K(" Export successful! Check your downloads folder. ",-1)])])):F("",!0)]),_:1})])],64)):(l(),i("div",Tf,[(l(),i("svg",Nf,[...f[14]||(f[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),f[17]||(f[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),f[18]||(f[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",zf,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:f[0]||(f[0]=V=>I(c).loginWithGoogle())},[...f[15]||(f[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),K(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:f[1]||(f[1]=V=>I(c).loginWithMicrosoft())},[...f[16]||(f[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),K(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Zf=Ke(Xf,[["__scopeId","data-v-1a8a69d1"]]),em={key:0,class:"editor-view"},tm={class:"editor-topbar"},om={class:"topbar-left"},nm={class:"project-name-wrap"},lm=["value"],im={class:"save-label"},am={class:"topbar-center"},sm={key:0,class:"slide-position"},rm={class:"topbar-right"},um={class:"editor-body"},dm={class:"authoring-rail"},cm=["onClick","data-tooltip"],pm={key:0,class:"rail-icon"},vm={key:1,class:"rail-icon"},fm={key:2,class:"rail-icon"},mm={key:3,class:"rail-icon"},gm={key:4,class:"rail-icon"},bm={key:5,class:"rail-icon"},ym={key:6,class:"rail-icon"},hm={key:7,class:"rail-icon"},xm={key:8,class:"rail-icon"},wm={key:9,class:"rail-icon"},km={class:"right-panel"},Cm={class:"panel-tabs"},$m=["onClick","data-tooltip"],Sm={class:"tab-icon"},Im={class:"tab-label"},Am={class:"panel-content"},Pm={key:1,class:"editor-not-found"},Mm={__name:"EditorView",setup(A){const s=Vn(),u=Un(),c=lt(),p=it(),y=Ln(),h=P(()=>s.params.id),g=P(()=>p.getProject(h.value)),j=P(()=>jt(g.value)),ne=P(()=>{var S;return[...((S=g.value)==null?void 0:S.slides)||[]].sort(($,q)=>$.order-q.order)}),le=B(null),W=B(!1),me=B("deck"),{aiStore:z,showAIModal:N,aiMode:a,aiTopic:M,aiContext:_,aiProjectName:H,aiSlideCount:f,aiQuestionCount:U,aiDifficulty:oe,aiQuestionType:X,aiCreationError:we,aiSubmitting:R,aiProjectNamePlaceholder:V,aiPrimaryActionLabel:ce,openAICreationModal:ge,createAIProject:te}=Wn({onRequireAuth:()=>u.push({name:"dashboard"})});let ke=!1,C=null;Qe(()=>g.value,S=>{if(S){if(ke){ke=!1;return}C&&clearTimeout(C),C=setTimeout(()=>{c.pushHistory(S)},600)}},{deep:!0}),Qe(()=>y.isAuthReady,async S=>{var $;if(S){if(($=y.user)!=null&&$.uid&&await p.ensureRemoteProjectsLoaded(),!g.value){u.push({name:"dashboard"});return}c.setProject(h.value),ne.value.length>0&&c.setCurrentSlide(ne.value[0].id),c.pushHistory(g.value)}},{immediate:!0});const L=P(()=>{const S=g.value;return S?`Saved ${new Date(S.updatedAt).toLocaleTimeString()}`:""}),D=P(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});sl({undo:()=>{if(c.canUndo()){const S=c.undo();S&&(ke=!0,p.updateProject(h.value,S))}},redo:()=>{if(c.canRedo()){const S=c.redo();S&&(ke=!0,p.updateProject(h.value,S))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var $,q,x,De;const S=(De=(x=(q=($=g.value)==null?void 0:$.slides)==null?void 0:q.find(Ee=>Ee.id===c.currentSlideId))==null?void 0:x.elements)==null?void 0:De.find(Ee=>Ee.id===c.selectedElementId);S&&c.setClipboard(S)},paste:()=>{if(c.clipboard&&c.currentSlideId){const S=c.clipboard;p.addElement(c.projectId,c.currentSlideId,S.type,{...S,x:S.x+20,y:S.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const S=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);S&&c.selectElement(S.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(S,$)=>{var x,De,Ee,Oe;if(!c.selectedElementId)return;const q=(Oe=(Ee=(De=(x=g.value)==null?void 0:x.slides)==null?void 0:De.find(xe=>xe.id===c.currentSlideId))==null?void 0:Ee.elements)==null?void 0:Oe.find(xe=>xe.id===c.selectedElementId);q&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:q.x+S,y:q.y+$})},selectAll:()=>{var $,q,x;(((x=(q=($=g.value)==null?void 0:$.slides)==null?void 0:q.find(De=>De.id===c.currentSlideId))==null?void 0:x.elements)||[]).forEach((De,Ee)=>c.selectElement(De.id,Ee>0))}});function Y(){u.push({name:"dashboard"})}function ye(){u.push({name:"preview",params:{id:h.value},query:{from:"editor"}})}function Be(S="deck"){me.value=S,W.value=!0}function Ie(){W.value=!1,ge(me.value)}function _e(S,$="Image"){if(!c.projectId||!c.currentSlideId||!S)return;const q=new Image;q.onload=()=>{const Ee=Math.min(420/q.width,280/q.height,1),Oe=Math.max(120,Math.round(q.width*Ee)),xe=Math.max(80,Math.round(q.height*Ee)),We=Math.max(24,Math.round((j.value.width-Oe)/2)),at=Math.max(24,Math.round((j.value.height-xe)/2)),Xe=p.addElement(c.projectId,c.currentSlideId,"image",{x:We,y:at,width:Oe,height:xe,content:{src:S,alt:$,objectFit:"cover"}});Xe&&(c.selectElement(Xe.id),c.setRightPanel("properties"),c.setActiveTool("select"))},q.src=S}function ee(S){const[$]=Array.from(S.target.files||[]);if(!$||!$.type.startsWith("image/"))return;const q=new FileReader;q.onload=()=>_e(String(q.result||""),$.name),q.readAsDataURL($),S.target.value=""}function ve(){var S;(S=le.value)==null||S.click()}const ie=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function fe(S){if(S==="text"){c.setActiveTool("text");return}if(S==="blocks"){c.toggleSlidePanel("blocks");return}if(S==="resources"){c.setActiveTool("image");return}if(S==="interactive-elements"){c.setActiveTool("hotspot");return}if(S==="interactive-questions"){c.setActiveTool("quiz");return}if(S==="widgets"){c.setActiveTool("shape");return}if(S==="insert"){ve();return}if(S==="style"){c.setRightPanel("properties");return}if(S==="background"){c.clearSelection(),c.setRightPanel("properties");return}S==="pages"&&c.toggleSlidePanel("slides")}function Me(S){return S==="text"?["text","heading"].includes(c.activeTool):S==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":S==="resources"?c.activeTool==="image":S==="interactive-elements"?["hotspot","button"].includes(c.activeTool):S==="interactive-questions"?c.activeTool==="quiz":S==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):S==="insert"?!1:S==="style"||S==="background"?c.rightPanelTab==="properties":S==="pages"?c.showSlidePanel:!1}function he(){Qn({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return Qe(()=>g.value,S=>{S&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{he()},100)},{immediate:!0}),(S,$)=>g.value?(l(),i("div",em,[e("input",{ref_key:"imageInputRef",ref:le,type:"file",accept:"image/*",class:"sr-only",onChange:ee},null,544),e("header",tm,[e("div",om,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:Y,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...$[14]||($[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),K(" Dashboard ",-1)])]),e("div",nm,[e("input",{value:g.value.name,class:"project-name-input",onChange:$[0]||($[0]=q=>I(p).updateProject(h.value,{name:q.target.value}))},null,40,lm)]),e("span",im,k(L.value),1)]),e("div",am,[I(c).currentSlideId?(l(),i("span",sm," Slide "+k(ne.value.findIndex(q=>q.id===I(c).currentSlideId)+1)+" of "+k(ne.value.length),1)):F("",!0)]),e("div",rm,[e("button",{class:"btn btn-ghost btn-sm",onClick:he,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...$[15]||($[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),K(" Help ",-1)])]),e("button",{class:J(["btn btn-ghost btn-sm",I(c).showAIPanel&&"active-btn"]),onClick:$[1]||($[1]=q=>{I(c).showAIPanel=!I(c).showAIPanel,I(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...$[16]||($[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),K(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:$[2]||($[2]=q=>{I(c).showThemeManager=!I(c).showThemeManager,I(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...$[17]||($[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),K(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:ye,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...$[18]||($[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),K(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:$[3]||($[3]=q=>I(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...$[19]||($[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Export ",-1)])])])]),yt(_c,{onOpenAiProject:Be}),e("div",um,[e("aside",dm,[(l(),i(Z,null,de(ie,q=>e("button",{key:q.id,class:J(["rail-option",Me(q.id)&&"active"]),onClick:x=>fe(q.id),"data-tooltip":q.label,"data-tooltip-position":"right"},[q.id==="text"?(l(),i("span",pm,"T")):q.id==="blocks"?(l(),i("span",vm,[...$[20]||($[20]=[ot('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):q.id==="resources"?(l(),i("span",fm,[...$[21]||($[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):q.id==="interactive-elements"?(l(),i("span",mm,[...$[22]||($[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):q.id==="interactive-questions"?(l(),i("span",gm,[...$[23]||($[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):q.id==="widgets"?(l(),i("span",bm,[...$[24]||($[24]=[ot('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):q.id==="insert"?(l(),i("span",ym,[...$[25]||($[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):q.id==="style"?(l(),i("span",hm,[...$[26]||($[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):q.id==="background"?(l(),i("span",xm,[...$[27]||($[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):q.id==="pages"?(l(),i("span",wm,[...$[28]||($[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):F("",!0),K(" "+k(q.label),1)],10,cm)),64))]),yt(_t,{name:"side-panel-slide"},{default:ut(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="slides"?(l(),Ye(kl,{key:0})):F("",!0)]),_:1}),yt(_t,{name:"side-panel-slide"},{default:ut(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="blocks"?(l(),Ye(Kl,{key:0})):F("",!0)]),_:1}),yt(Bp),e("aside",km,[e("div",Cm,[(l(),i(Z,null,de([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],q=>e("button",{key:q.id,class:J(["panel-tab",I(c).rightPanelTab===q.id&&"active"]),onClick:x=>I(c).setRightPanel(q.id),"data-tooltip":`Open ${q.label}`,"data-tooltip-position":"bottom"},[e("span",Sm,k(q.icon),1),e("span",Im,k(q.label),1)],10,$m)),64))]),e("div",Am,[yt(_t,{name:"editor-panel-switch",mode:"out-in"},{default:ut(()=>[(l(),i("div",{key:D.value,class:"panel-content-view"},[I(c).rightPanelTab==="properties"?(l(),Ye(mc,{key:0})):I(c).rightPanelTab==="layers"?(l(),Ye(bi,{key:1})):I(c).rightPanelTab==="ai"?(l(),Ye(X1,{key:2})):I(c).rightPanelTab==="theme"?(l(),Ye(Ef,{key:3})):F("",!0)]))]),_:1})])])]),I(c).showExportModal?(l(),Ye(Zf,{key:0})):F("",!0),W.value?(l(),Ye(Hn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:$[4]||($[4]=q=>W.value=!1),onConfirm:Ie})):F("",!0),I(N)?(l(),Ye(Yn,{key:2,mode:I(a),topic:I(M),context:I(_),"project-name":I(H),"slide-count":I(f),"question-count":I(U),difficulty:I(oe),"question-type":I(X),"project-name-placeholder":I(V),"primary-action-label":I(ce),"creation-error":I(we),"is-submitting":I(R),"is-generating":I(z).isGenerating,"has-api-key":!!I(z).apiKey,onClose:$[5]||($[5]=q=>N.value=!1),onCreate:I(te),"onUpdate:mode":$[6]||($[6]=q=>a.value=q),"onUpdate:topic":$[7]||($[7]=q=>M.value=q),"onUpdate:context":$[8]||($[8]=q=>_.value=q),"onUpdate:projectName":$[9]||($[9]=q=>H.value=q),"onUpdate:slideCount":$[10]||($[10]=q=>f.value=q),"onUpdate:questionCount":$[11]||($[11]=q=>U.value=q),"onUpdate:difficulty":$[12]||($[12]=q=>oe.value=q),"onUpdate:questionType":$[13]||($[13]=q=>X.value=q)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):F("",!0)])):(l(),i("div",Pm,[$[29]||($[29]=e("h2",null,"Project not found",-1)),$[30]||($[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:Y},"Go to Dashboard")]))}},jm=Ke(Mm,[["__scopeId","data-v-902e6311"]]);export{jm as default};
