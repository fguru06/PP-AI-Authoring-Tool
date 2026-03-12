import{K as In,P as An,v as l,F as i,B as e,C as k,H as Z,I as ve,E as qe,D as J,u as I,Q as ge,M as et,G as O,L as K,q as He,R as Mn,f as T,r as B,N as pe,O as ke,x as rt,S as Et,w as Ye,n as En,i as qn,U as Rn,y as mt,T as Mt,V as At,z as Fn,p as Un,J as $n}from"./vue-core-DCl8Fgqc.js";import{u as On,d as Vn}from"./vue-ecosystem-Da9kls6U.js";import{u as nt,M as Pn,c as Wn,a as Gn,C as Hn,A as Yn,b as Qn}from"./ConfirmActionModal-CCzHa2B2.js";import{u as lt,b as Jn,g as Pt,C as jt,c as Xn,n as Kn,p as Zn,s as el,m as Tn,f as Nn,d as zn,e as tl,h as Dt,B as ol,i as nl,j as ll,k as Sn,a as Bn}from"./projectStore-1SlRk25I.js";import{_ as Qe}from"./index-C-iv73Ng.js";import{C as il}from"./ChartElement-DuXEIYnn.js";import{J as al}from"./jszip-529iNPX7.js";function sl(A){function s(r){var b,L,te,oe,V,me,H,N,a,C,E,q,v,W,ie,$e,we;const c=r.ctrlKey||r.metaKey,p=r.key.toLowerCase(),h=r.target.tagName.toLowerCase(),y=h==="input"||h==="textarea"||r.target.isContentEditable;y&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!r.shiftKey?(r.preventDefault(),(b=A.undo)==null||b.call(A)):c&&(p==="y"||p==="z"&&r.shiftKey)?(r.preventDefault(),(L=A.redo)==null||L.call(A)):c&&p==="c"?(r.preventDefault(),(te=A.copy)==null||te.call(A)):c&&p==="v"?(r.preventDefault(),(oe=A.paste)==null||oe.call(A)):c&&p==="x"?(r.preventDefault(),(V=A.cut)==null||V.call(A)):c&&p==="d"?(r.preventDefault(),(me=A.duplicate)==null||me.call(A)):c&&p==="a"?(r.preventDefault(),(H=A.selectAll)==null||H.call(A)):p==="delete"||p==="backspace"?y||(r.preventDefault(),(N=A.delete)==null||N.call(A)):p==="escape"?(a=A.escape)==null||a.call(A):c&&p==="g"?(r.preventDefault(),(C=A.toggleGrid)==null||C.call(A)):c&&p==="="||c&&p==="+"?(r.preventDefault(),(E=A.zoomIn)==null||E.call(A)):c&&p==="-"?(r.preventDefault(),(q=A.zoomOut)==null||q.call(A)):c&&p==="0"?(r.preventDefault(),(v=A.zoomReset)==null||v.call(A)):p==="arrowleft"?(W=A.nudge)==null||W.call(A,-1,0):p==="arrowright"?(ie=A.nudge)==null||ie.call(A,1,0):p==="arrowup"?($e=A.nudge)==null||$e.call(A,0,-1):p==="arrowdown"&&((we=A.nudge)==null||we.call(A,0,1)))}In(()=>window.addEventListener("keydown",s)),An(()=>window.removeEventListener("keydown",s))}const rl={class:"slide-panel"},ul={class:"slide-panel-header"},dl={class:"slide-count"},cl={class:"slides-list"},pl=["onClick","onContextmenu","onDragstart","onDrop"],vl={class:"slide-number"},fl=["viewBox"],ml=["x","y","width","height","fill"],gl=["d","stroke"],bl=["d","fill"],hl={class:"slide-footer"},yl={class:"slide-title"},xl=["onClick"],wl={__name:"SlidePanel",setup(A){const s=nt(),r=lt(),c=T(()=>r.getProject(s.projectId)),p=T(()=>Pt(c.value)),h=T(()=>{var j,_;return((_=(j=c.value)==null?void 0:j.slides)==null?void 0:_.slice().sort((ce,ae)=>ce.order-ae.order))||[]}),y=B({show:!1,x:0,y:0,slideId:null});function b(j){s.setCurrentSlide(j)}function L(){const j=h.value.findIndex(ce=>ce.id===s.currentSlideId),_=r.addSlide(s.projectId,j);_&&s.setCurrentSlide(_.id)}function te(j){var ae,ee;const _=h.value.findIndex(be=>be.id===j);r.deleteSlide(s.projectId,j);const ce=((ae=c.value)==null?void 0:ae.slides)||[];if(ce.length>0){const be=ce.slice().sort((D,U)=>D.order-U.order),$=Math.min(_,be.length-1);s.setCurrentSlide((ee=be[$])==null?void 0:ee.id)}}function oe(j,_){j.preventDefault(),y.value={show:!0,x:j.clientX,y:j.clientY,slideId:_},setTimeout(()=>window.addEventListener("click",V,{once:!0}),0)}function V(){y.value.show=!1}function me(){const j=r.duplicateSlide(s.projectId,y.value.slideId);j&&s.setCurrentSlide(j.id),V()}function H(){te(y.value.slideId),V()}function N(j,_){j.stopPropagation(),te(_)}function a(){const j=h.value.findIndex(_=>_.id===y.value.slideId);j>0&&r.reorderSlides(s.projectId,j,j-1),V()}function C(){const j=h.value.findIndex(_=>_.id===y.value.slideId);j<h.value.length-1&&r.reorderSlides(s.projectId,j,j+1),V()}let E=-1;function q(j,_){E=_,j.dataTransfer.effectAllowed="move"}function v(j,_){j.preventDefault(),E!==-1&&E!==_&&r.reorderSlides(s.projectId,E,_),E=-1}function W(j){return j.backgroundType==="gradient"&&j.backgroundGradient?{background:j.backgroundGradient}:j.backgroundType==="image"&&j.backgroundImage?{backgroundImage:`url(${j.backgroundImage})`,backgroundSize:"cover"}:{background:j.background||"#fff"}}function ie(j){return{left:j.x/p.value.width*100+"%",top:j.y/p.value.height*100+"%",width:j.width/p.value.width*100+"%",height:j.height/p.value.height*100+"%"}}function $e(j){var _,ce;return{background:j.type==="shape"?(_=j.content)==null?void 0:_.fillColor:j.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:j.type==="shape"&&((ce=j.content)==null?void 0:ce.shapeType)==="circle"?"50%":void 0}}function we(j){var _;return Jn(j.content||{},j.width||420,j.height||280,((_=c.value)==null?void 0:_.theme)||{})}return(j,_)=>(l(),i("div",rl,[e("div",ul,[_[2]||(_[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",dl,k(h.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:L,"data-tooltip":"Add slide","aria-label":"Add slide"},[..._[1]||(_[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",cl,[(l(!0),i(Z,null,ve(h.value,(ce,ae)=>(l(),i("div",{key:ce.id,class:J(["slide-thumb-item",I(s).currentSlideId===ce.id&&"active"]),draggable:"true",onClick:ee=>b(ce.id),onContextmenu:ee=>oe(ee,ce.id),onDragstart:ee=>q(ee,ae),onDragover:_[0]||(_[0]=qe(()=>{},["prevent"])),onDrop:ee=>v(ee,ae)},[e("div",vl,k(ae+1),1),e("div",{class:"slide-thumb",style:ge(W(ce))},[(l(!0),i(Z,null,ve(ce.elements.slice(0,6),ee=>{var be;return l(),i("div",{key:ee.id,class:"mini-element-frame",style:ge(ie(ee))},[ee.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${ee.width||420} ${ee.height||280}`,preserveAspectRatio:"none"},[we(ee).type==="bar"?(l(!0),i(Z,{key:0},ve(we(ee).cartesian.bars,$=>(l(),i("rect",{key:`mini-bar-${$.id}`,x:$.x,y:$.y,width:$.width,height:$.height,fill:$.color,rx:"6"},null,8,ml))),128)):we(ee).type==="line"?(l(),i("path",{key:1,d:we(ee).cartesian.linePath,stroke:((be=we(ee).cartesian.points[0])==null?void 0:be.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,gl)):(l(!0),i(Z,{key:2},ve(we(ee).circle.slices,$=>(l(),i("path",{key:`mini-slice-${$.id}`,d:$.path,fill:$.color},null,8,bl))),128))],8,fl)):(l(),i("div",{key:1,class:"mini-element",style:ge($e(ee))},null,4))],4)}),128))],4),e("div",hl,[e("div",yl,k(ce.title||`Slide ${ae+1}`),1),h.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:ee=>N(ee,ce.id)},[..._[3]||(_[3]=[et('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,xl)):O("",!0)])],42,pl))),128))]),e("button",{class:"add-slide-bottom",onClick:L},[..._[4]||(_[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),K(" Add Slide ",-1)])]),(l(),He(Mn,{to:"body"},[y.value.show?(l(),i("div",{key:0,class:"context-menu",style:ge({left:y.value.x+"px",top:y.value.y+"px"})},[e("button",{class:"ctx-item",onClick:me},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:C},"Move Down"),_[5]||(_[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:H},"Delete Slide")],4)):O("",!0)]))]))}},kl=Qe(wl,[["__scopeId","data-v-30eea542"]]),Cl={class:"blocks-panel"},$l={class:"blocks-panel-header"},Sl={class:"blocks-toolbar"},Il={class:"blocks-categories"},Al=["onClick"],Ml={class:"blocks-panel-body"},El={class:"blocks-save-card"},Pl=["disabled"],Tl={class:"blocks-list"},Nl=["onDragstart"],zl={class:"block-thumb-stage"},Bl={class:"block-card-body"},_l={class:"block-card-head"},Ll={class:"block-name"},jl={class:"block-meta"},Dl={key:0},ql={key:1},Rl=["onClick"],Fl={class:"block-description"},Ul={key:0,class:"block-binding-note"},Ol={class:"block-tags"},Vl=["onClick"],Wl={class:"binding-modal-body"},Gl={class:"binding-modal-intro"},Hl=["for"],Yl=["id","onUpdate:modelValue"],Ql={__name:"BlocksPanel",setup(A){const s=nt(),r=lt(),c=B(""),p=B("all"),h=B(""),y=B("Custom"),b=B(!1),L=B(null),te=B({}),oe=T(()=>r.getProject(s.projectId)),V=T(()=>{var $,D;return(D=($=oe.value)==null?void 0:$.slides)==null?void 0:D.find(U=>U.id===s.currentSlideId)}),me=T(()=>r.getContentBlocks(s.projectId)),H=T(()=>{const $=new Set(["all"]);return me.value.forEach(D=>$.add(D.category||"Custom")),Array.from($)}),N=T(()=>{var D;const $=new Set(s.selectedElementIds);return(((D=V.value)==null?void 0:D.elements)||[]).filter(U=>$.has(U.id))}),a=T(()=>{var $;return Array.isArray(($=L.value)==null?void 0:$.bindings)?L.value.bindings:[]}),C=T(()=>{const $=c.value.trim().toLowerCase();return me.value.filter(D=>p.value==="all"||(D.category||"Custom")===p.value?$?[D.name,D.description,D.category,...D.tags||[]].join(" ").toLowerCase().includes($):!0:!1)});function E($){const D=Array.isArray($==null?void 0:$.elements)?$.elements:[];if(!D.length)return{minX:0,minY:0,width:1,height:1};const U=Math.min(...D.map(Pe=>Number(Pe.x||0))),Y=Math.min(...D.map(Pe=>Number(Pe.y||0))),he=Math.max(...D.map(Pe=>Number(Pe.x||0)+Number(Pe.width||0))),Re=Math.max(...D.map(Pe=>Number(Pe.y||0)+Number(Pe.height||0)));return{minX:U,minY:Y,width:Math.max(1,he-U),height:Math.max(1,Re-Y)}}function q($,D){const U=E($);return{left:`${(Number(D.x||0)-U.minX)/U.width*100}%`,top:`${(Number(D.y||0)-U.minY)/U.height*100}%`,width:`${Number(D.width||0)/U.width*100}%`,height:`${Number(D.height||0)/U.height*100}%`}}function v($){var D,U,Y,he,Re,Pe,Le;return $.type==="shape"?{background:((D=$.content)==null?void 0:D.fillColor)||"#cbd5e1",borderRadius:((U=$.content)==null?void 0:U.shapeType)==="circle"?"50%":`${Number(((Y=$.content)==null?void 0:Y.borderRadius)||10)}px`,border:`${Math.max(0,Number(((he=$.content)==null?void 0:he.borderWidth)||0))}px solid ${((Re=$.content)==null?void 0:Re.borderColor)||"transparent"}`}:$.type==="button"?{background:((Pe=$.content)==null?void 0:Pe.bgColor)||"#6c47ff",borderRadius:`${Number(((Le=$.content)==null?void 0:Le.borderRadius)||10)}px`}:$.type==="image"||$.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:$.type==="text"||$.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function W($,D){const U=$.type==="heading"?2:3,Y=Math.max(18,100/(U+1.25));return{width:`${D===U-1?72:100}%`,height:`${$.type==="heading"?Y:Y-2}%`}}function ie($){$.length&&(s.setSelection($.map(D=>D.id)),s.focusPropertiesSection("content"),s.setActiveTool("select"))}function $e($){return Array.isArray($==null?void 0:$.bindings)&&$.bindings.length>0}function we(){b.value=!1,L.value=null,te.value={}}function j($,D=null){const U=r.insertContentBlock(s.projectId,s.currentSlideId,$.id,D?{bindingValues:D}:{});ie(U)}function _($){if(!$e($)){j($);return}L.value=$,te.value=Object.fromEntries($.bindings.map(D=>[D.id,D.defaultValue||""])),b.value=!0}function ce(){L.value&&(j(L.value,{...te.value}),we())}function ae(){var U,Y;const $=h.value.trim();if(!$||!N.value.length)return;r.saveSelectionAsContentBlock(s.projectId,s.currentSlideId,N.value.map(he=>he.id),{name:$,category:y.value.trim()||"Custom",accent:((Y=(U=oe.value)==null?void 0:U.theme)==null?void 0:Y.primaryColor)||"#6c47ff"})&&(h.value="",p.value="Custom")}function ee($){r.deleteContentBlock(s.projectId,$)}function be($,D){$.dataTransfer&&($.dataTransfer.effectAllowed="copy",$.dataTransfer.setData(jt,JSON.stringify({id:D.id})),$.dataTransfer.setData("text/plain",D.name))}return($,D)=>(l(),i("div",Cl,[e("div",$l,[D[5]||(D[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:D[0]||(D[0]=U=>I(s).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...D[4]||(D[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",Sl,[pe(e("input",{"onUpdate:modelValue":D[1]||(D[1]=U=>c.value=U),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[ke,c.value]]),e("div",Il,[(l(!0),i(Z,null,ve(H.value,U=>(l(),i("button",{key:U,type:"button",class:J(["blocks-category-chip",p.value===U&&"active"]),onClick:Y=>p.value=U},k(U==="all"?"All":U),11,Al))),128))])]),e("div",Ml,[e("div",El,[D[6]||(D[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),D[7]||(D[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),pe(e("input",{"onUpdate:modelValue":D[2]||(D[2]=U=>h.value=U),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[ke,h.value]]),pe(e("input",{"onUpdate:modelValue":D[3]||(D[3]=U=>y.value=U),class:"input",placeholder:"Category"},null,512),[[ke,y.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!N.value.length||!h.value.trim(),onClick:ae}," Save "+k(N.value.length?`${N.value.length} item${N.value.length>1?"s":""}`:"selection")+" as block ",9,Pl)]),e("div",Tl,[(l(!0),i(Z,null,ve(C.value,U=>(l(),i("div",{key:U.id,class:"block-card",draggable:"true",onDragstart:Y=>be(Y,U)},[e("div",{class:"block-thumb",style:ge({"--block-accent":U.accent||"#6c47ff"})},[e("div",zl,[(l(!0),i(Z,null,ve(U.elements,Y=>(l(),i("div",{key:`${U.id}-${Y.type}-${Y.x}-${Y.y}`,class:"block-thumb-frame",style:ge(q(U,Y))},[["text","heading"].includes(Y.type)?(l(),i("div",{key:0,class:J(["thumb-text",Y.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(Z,null,ve(Y.type==="heading"?2:3,he=>(l(),i("span",{key:`${U.id}-${Y.type}-${Y.x}-${Y.y}-${he}`,class:"thumb-text-line",style:ge(W(Y,he-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:ge(v(Y))},null,4))],4))),128))])],4),e("div",Bl,[e("div",_l,[e("div",null,[e("div",Ll,k(U.name),1),e("div",jl,[K(k(U.category),1),U.scope==="custom"?(l(),i("span",Dl," · Custom")):O("",!0),$e(U)?(l(),i("span",ql," · "+k(U.bindings.length)+" field"+k(U.bindings.length>1?"s":""),1)):O("",!0)])]),U.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:Y=>ee(U.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...D[8]||(D[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,Rl)):O("",!0)]),e("p",Fl,k(U.description||"Reusable layout block"),1),$e(U)?(l(),i("div",Ul,"Editable placeholders included")):O("",!0),e("div",Ol,[(l(!0),i(Z,null,ve(U.tags||[],Y=>(l(),i("span",{key:`${U.id}-${Y}`,class:"block-tag"},"#"+k(Y),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:Y=>_(U)},k($e(U)?"Insert with Fields":"Insert Block"),9,Vl)])],40,Nl))),128))])]),b.value?(l(),He(Pn,{key:0,title:"Fill Template Fields",size:"md",onClose:we},{footer:rt(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:we},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:ce},"Insert Block")]),default:rt(()=>{var U;return[e("div",Wl,[e("p",Gl,[D[9]||(D[9]=K(" Customize the placeholder text before inserting ",-1)),e("strong",null,k((U=L.value)==null?void 0:U.name),1),D[10]||(D[10]=K(". ",-1))]),(l(!0),i(Z,null,ve(a.value,Y=>(l(),i("div",{key:Y.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${Y.id}`},k(Y.label),9,Hl),pe(e("textarea",{id:`binding-${Y.id}`,"onUpdate:modelValue":he=>te.value[Y.id]=he,class:"textarea binding-input"},null,8,Yl),[[ke,te.value[Y.id]]])]))),128))])]}),_:1})):O("",!0)]))}},Jl=Qe(Ql,[["__scopeId","data-v-aec67d0c"]]),Xl={class:"layer-panel"},Kl={class:"layer-header panel-section"},Zl={class:"panel-title",style:{"margin-bottom":"0"}},ei={class:"layer-count"},ti={key:0,class:"layers-empty"},oi={key:1,class:"layers-list"},ni=["onClick"],li={class:"layer-type-icon"},ii={class:"layer-name"},ai={class:"layer-actions"},si=["onClick","data-tooltip"],ri={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ui={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},di=["onClick","data-tooltip"],ci={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pi={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vi=["onClick"],fi=["onClick"],mi=["onClick"],gi={__name:"LayerPanel",setup(A){const s=nt(),r=lt(),c=T(()=>r.getProject(s.projectId)),p=T(()=>{var N,a;return(a=(N=c.value)==null?void 0:N.slides)==null?void 0:a.find(C=>C.id===s.currentSlideId)}),h=T(()=>{var N;return[...((N=p.value)==null?void 0:N.elements)||[]].sort((a,C)=>(C.zIndex||0)-(a.zIndex||0))});function y(N){s.selectElement(N)}function b(N){r.updateElement(s.projectId,s.currentSlideId,N.id,{visible:!N.visible})}function L(N){r.updateElement(s.projectId,s.currentSlideId,N.id,{locked:!N.locked})}function te(N){r.reorderElement(s.projectId,s.currentSlideId,N,"up")}function oe(N){r.reorderElement(s.projectId,s.currentSlideId,N,"down")}function V(N){r.deleteElement(s.projectId,s.currentSlideId,N),s.selectedElementId===N&&s.clearSelection()}function me(N){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[N]||"◆"}function H(N){var a,C,E;return(a=N.content)!=null&&a.text?N.content.text.slice(0,24):(C=N.content)!=null&&C.label?N.content.label:(E=N.content)!=null&&E.question?N.content.question.slice(0,24):N.type.charAt(0).toUpperCase()+N.type.slice(1)}return(N,a)=>(l(),i("div",Xl,[e("div",Kl,[e("div",Zl,[a[0]||(a[0]=K(" Layers ",-1)),e("span",ei,k(h.value.length),1)])]),h.value.length===0?(l(),i("div",ti,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",oi,[(l(!0),i(Z,null,ve(h.value,C=>(l(),i("div",{key:C.id,class:J(["layer-item",I(s).selectedElementIds.includes(C.id)&&"selected",C.locked&&"locked",!C.visible&&"hidden"]),onClick:E=>y(C.id)},[e("span",li,k(me(C.type)),1),e("span",ii,k(H(C)),1),e("div",ai,[e("button",{class:J(["layer-action-btn",{active:C.visible}]),onClick:qe(E=>b(C),["stop"]),"data-tooltip":C.visible?"Hide":"Show"},[C.visible?(l(),i("svg",ri,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",ui,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,si),e("button",{class:J(["layer-action-btn",{active:C.locked}]),onClick:qe(E=>L(C),["stop"]),"data-tooltip":C.locked?"Unlock":"Lock"},[C.locked?(l(),i("svg",ci,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",pi,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,di),e("button",{class:"layer-action-btn",onClick:qe(E=>te(C.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,vi),e("button",{class:"layer-action-btn",onClick:qe(E=>oe(C.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,fi),e("button",{class:"layer-action-btn danger",onClick:qe(E=>V(C.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,mi)])],10,ni))),128))]))]))}},bi=Qe(gi,[["__scopeId","data-v-7407acd8"]]),hi={class:"panel-section"},yi={class:"preset-toolbar"},xi=["value"],wi=["value"],ki=["value"],Ci={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},$i=["onClick"],Si={class:"preset-meta-chip muted"},Ii={key:1,class:"import-review"},Ai={class:"motion-scrubber-header"},Mi={class:"preset-toolbar compact"},Ei=["value"],Pi=["value"],Ti={class:"import-list"},Ni=["onUpdate:modelValue"],zi={class:"import-item-title"},Bi={class:"preset-meta-chip"},_i={key:0,class:"preset-meta-chip muted"},Li={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(A,{emit:s}){const r=s;return(c,p)=>(l(),i("div",hi,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",yi,[e("input",{value:A.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=h=>r("update:searchQuery",h.target.value))},null,40,xi),e("select",{value:A.categoryFilter,class:"select",onChange:p[1]||(p[1]=h=>r("update:categoryFilter",h.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(Z,null,ve(A.availableCategories,h=>(l(),i("option",{key:`library-${h}`,value:h},k(h),9,ki))),128))],40,wi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=h=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=h=>r("export-presets"))},"Export")]),A.recentPresets.length?(l(),i("div",Ci,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(Z,null,ve(A.recentPresets,h=>(l(),i("div",{class:"preset-item",key:`recent-${h.id}`},[e("button",{type:"button",class:"preset-chip",onClick:y=>r("apply-preset",h)},k(h.name),9,$i),e("span",Si,"Used "+k(h.usageCount)+"x",1)]))),128))])):O("",!0),A.pendingImportedPresets.length?(l(),i("div",Ii,[e("div",Ai,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=h=>r("clear-imports"))},"Discard")]),e("div",Mi,[e("select",{value:A.importScopeFilter,class:"select",onChange:p[5]||(p[5]=h=>r("update:importScopeFilter",h.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Ei),e("select",{value:A.importConflictMode,class:"select",onChange:p[6]||(p[6]=h=>r("update:importConflictMode",h.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Pi),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=h=>r("apply-imports"))},"Merge Selected")]),e("div",Ti,[(l(!0),i(Z,null,ve(A.filteredPendingImports,h=>(l(),i("label",{key:`pending-${h.id}`,class:"import-item"},[pe(e("input",{"onUpdate:modelValue":y=>h.selected=y,type:"checkbox"},null,8,Ni),[[Et,h.selected]]),e("span",zi,k(h.name),1),e("span",Bi,k(h.scope),1),h.category?(l(),i("span",_i,k(h.category),1)):O("",!0)]))),128))])])):O("",!0)]))}},ji=Qe(Li,[["__scopeId","data-v-61f99273"]]),Di={key:1,class:"panel-section"},qi={class:"field-hint"},Ri={class:"motion-scrubber-shell"},Fi={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Ui=["onClick"],Oi={class:"motion-preview"},Vi={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Wi={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Gi={class:"motion-card-label"},Hi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Yi={class:"form-group"},Qi={class:"form-group"},Ji={class:"form-group",style:{"margin-top":"var(--space-3)"}},Xi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ki={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Zi={key:0,class:"preset-list"},ea=["onDragstart","onDragenter","onDrop"],ta=["onClick"],oa={key:0,class:"preset-meta-chip"},na=["onClick"],la=["onClick"],ia=["onClick"],aa={key:1,class:"preset-row preset-edit-row"},sa=["onClick"],ra={key:1,class:"field-hint"},ua={key:2,class:"panel-section"},da={class:"slide-settings-tabs"},ca={key:0,class:"slide-settings-pane"},pa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},va={class:"form-group"},fa={class:"bg-type-tabs"},ma=["onClick"],ga={key:0,class:"color-row"},ba=["value"],ha=["value"],ya={class:"slide-settings-subsection"},xa={class:"canvas-size-grid"},wa=["onClick"],ka={class:"canvas-size-icon-shell"},Ca={class:"canvas-size-name"},$a={class:"canvas-size-ratio"},Sa={class:"canvas-custom-card"},Ia={class:"canvas-custom-header"},Aa={class:"field-hint"},Ma={class:"canvas-custom-inputs"},Ea={class:"form-group"},Pa={class:"canvas-size-input-wrap"},Ta=["value"],Na={class:"form-group"},za={class:"canvas-size-input-wrap"},Ba=["value"],_a={class:"check-row canvas-size-lock"},La={class:"slide-settings-subsection"},ja={key:1,class:"slide-settings-pane"},Da=["value"],qa={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ra=["value"],Fa={class:"check-row"},Ua=["checked"],Oa={key:2,class:"slide-settings-pane"},Va={class:"check-row"},Wa=["checked"],Ga={class:"check-row"},Ha=["checked"],Ya={class:"check-row"},Qa=["checked"],Ja={class:"check-row"},Xa=["checked"],Ka={class:"check-row"},Za=["checked"],es={class:"panel-title"},ts={class:"element-type-badge"},os={class:"geo-grid"},ns={class:"form-group"},ls=["value"],is={class:"form-group"},as=["value"],ss={class:"form-group"},rs=["value"],us={class:"form-group"},ds=["value"],cs={class:"form-group"},ps=["value"],vs={class:"form-group"},fs=["value"],ms={class:"motion-scrubber-shell"},gs={class:"motion-card-grid"},bs=["onClick"],hs={class:"motion-preview"},ys={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},xs={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},ws={class:"motion-card-label"},ks={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Cs={class:"form-group"},$s=["value"],Ss={class:"form-group"},Is=["value"],As={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ms={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Es={key:0,class:"preset-list"},Ps=["onDragstart","onDragenter","onDrop"],Ts=["onClick"],Ns={key:0,class:"preset-meta-chip"},zs=["onClick"],Bs=["onClick"],_s=["onClick"],Ls={key:1,class:"preset-row preset-edit-row"},js=["onClick"],Ds={key:1,class:"field-hint"},qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rs=["value"],Fs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Us={class:"form-group"},Os=["value"],Vs={class:"form-group"},Ws=["value"],Gs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Hs=["value"],Ys=["value"],Qs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Js={class:"align-btns"},Xs=["onClick"],Ks={class:"form-group",style:{"margin-top":"var(--space-3)"}},Zs={class:"style-btns"},er={class:"form-group",style:{"margin-top":"var(--space-3)"}},tr={class:"color-row"},or=["value"],nr=["value"],lr={class:"form-group",style:{"margin-top":"var(--space-3)"}},ir=["value"],ar={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},sr={class:"form-group"},rr=["value"],ur={class:"form-group"},dr=["value"],cr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pr=["value"],vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fr=["value"],mr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gr=["value"],br={class:"form-group"},hr=["value"],yr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},xr={class:"form-group"},wr=["value"],kr={class:"form-group"},Cr=["value"],$r={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sr=["value"],Ir={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ar={class:"color-row"},Mr=["value"],Er=["value"],Pr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tr={class:"color-row"},Nr=["value"],zr=["value"],Br={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_r=["value"],Lr={class:"form-group"},jr=["value"],Dr={class:"form-group",style:{"margin-top":"var(--space-3)"}},qr=["value"],Rr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fr=["value"],Ur={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Or=["value"],Vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wr=["value"],Gr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Hr={class:"chart-data-actions"},Yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qr=["value","placeholder"],Jr={class:"chart-palette-preview"},Xr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Kr={class:"form-group"},Zr=["value"],eu={class:"form-group"},tu=["value"],ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},nu={class:"form-group"},lu=["value"],iu={class:"form-group"},au=["value"],su={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},ru={class:"form-group"},uu=["value"],du={key:0,class:"form-group"},cu=["value"],pu={key:1,class:"form-group"},vu=["value"],fu={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},mu={class:"form-group"},gu=["value"],bu={class:"check-row",style:{"margin-top":"20px"}},hu=["checked"],yu={class:"check-row"},xu=["checked"],wu={key:1,class:"check-row"},ku=["checked"],Cu={class:"check-row"},$u=["checked"],Su={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Iu=["value"],Au={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mu=["value"],Eu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pu=["value"],Tu={key:0,class:"form-group"},Nu=["value"],zu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Bu={class:"form-group"},_u=["value"],Lu={class:"form-group"},ju=["value"],Du={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},qu={class:"form-group"},Ru=["value"],Fu={class:"form-group"},Uu=["value"],Ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Vu={class:"form-group"},Wu=["value"],Gu={class:"form-group"},Hu=["value"],Yu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Qu={class:"form-group"},Ju=["value"],Xu=["value"],Ku={class:"form-group"},Zu=["value"],ed={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},td=["value"],od={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nd={class:"color-row"},ld=["value"],id=["value"],ad={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},sd={class:"form-group"},rd=["value"],ud={class:"form-group"},dd=["value"],cd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pd=["value"],vd={class:"form-group"},fd=["value"],md={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},gd={class:"form-group"},bd=["value"],hd={class:"form-group"},yd=["value"],xd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wd=["value"],kd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cd=["value"],$d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sd=["value"],Id={class:"check-row"},Ad=["checked"],Md={class:"check-row"},Ed=["checked"],Pd={class:"check-row"},Td=["checked"],Nd={class:"check-row"},zd=["checked"],Bd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_d=["value"],Ld={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jd=["value"],Dd={class:"check-row"},qd=["checked"],Rd={class:"check-row"},Fd=["checked"],Ud={class:"check-row"},Od=["checked"],Vd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Wd={class:"form-group"},Gd=["value"],Hd={class:"form-group"},Yd=["value"],Qd={class:"form-group",style:{"margin-top":"var(--space-3)"}},Jd=["value"],Xd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Kd=["value"],Zd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ec=["value"],tc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},oc=["value"],nc={class:"form-group"},lc=["value"],ic={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ac={class:"form-group"},sc=["value"],rc={class:"form-group"},uc=["value"],dc={class:"form-group",style:{"margin-top":"var(--space-3)"}},cc=["value"],pc={class:"panel-section"},vc={class:"actions-list"},fc={__name:"PropertiesPanel",setup(A){const s=nt(),r=lt(),c=T(()=>r.getProject(s.projectId)),p=T(()=>{var d,t;return(t=(d=c.value)==null?void 0:d.slides)==null?void 0:t.find(F=>F.id===s.currentSlideId)}),h=T(()=>{var d;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((d=c.value)==null?void 0:d.settings)||{}}}),y=T(()=>Pt(h.value)),b=T(()=>Tn(h.value)),L=T(()=>Nn(y.value.width,y.value.height)),te=B(!0),oe=B("canvas"),V=T(()=>Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]),me=T(()=>V.value.filter(d=>d.scope!=="group")),H=T(()=>V.value.filter(d=>d.scope==="group")),N=T(()=>{var t;const d=new Set(s.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(F=>d.has(F.id))}),a=T(()=>{var d,t;return s.selectedElementId?(t=(d=p.value)==null?void 0:d.elements)==null?void 0:t.find(F=>F.id===s.selectedElementId):null}),C=T(()=>s.multiSelection||!!a.value),E=T(()=>s.multiSelection?"group":"single"),q=T(()=>{var t,F;const d=(F=(t=a.value)==null?void 0:t.animations)==null?void 0:F[0];return{type:(d==null?void 0:d.type)||"auto",delay:Number((d==null?void 0:d.delay)||0),duration:Number((d==null?void 0:d.duration)||.64)}}),v=T(()=>{var Be,We;const d=N.value.map(Oe=>{var ft;return((ft=Oe.animations)==null?void 0:ft[0])||null}),t=((Be=d[0])==null?void 0:Be.type)||"auto",F=Number(((We=d[0])==null?void 0:We.duration)||.64),fe=d.every(Oe=>((Oe==null?void 0:Oe.type)||"auto")===t),Me=d.every(Oe=>Number((Oe==null?void 0:Oe.duration)||.64)===F);return{type:fe?t:"mixed",duration:Me?F:.64}}),W=B(0),ie=B(0),$e=B(""),we=B(""),j=B(""),_=B(""),ce=B(""),ae=B(""),ee=B(""),be=B(""),$=B(""),D=B(""),U=B(""),Y=B(""),he=B(""),Re=B("all"),Pe=B(null),Le=B(null),X=B([]),de=B("all"),le=B("replace"),ne=B(""),Ie=B(null),ye=B("");let z=null;const M=B({});Ye(a,d=>{d?M.value=JSON.parse(JSON.stringify(d)):M.value={},(d==null?void 0:d.type)==="chart"&&(ne.value="")},{immediate:!0,deep:!0}),Ye(()=>{var d;return[s.propertiesPanelSection,(d=a.value)==null?void 0:d.id,s.rightPanelTab]},async([d,t,F])=>{var Me;if(!d||!t||F!=="properties")return;await En();const fe=(Me=Ie.value)==null?void 0:Me.querySelector(`[data-props-anchor="${d}"]`);fe&&(fe.scrollIntoView({behavior:"smooth",block:"start"}),ye.value=d,z&&window.clearTimeout(z),z=window.setTimeout(()=>{ye.value===d&&(ye.value="")},1400))},{immediate:!0});function R(d){a.value&&r.updateElement(s.projectId,s.currentSlideId,a.value.id,d)}function x(d){if(!a.value)return;const t={...a.value.content,...d};R({content:t})}function xe(d,t){const F=parseFloat(t);isNaN(F)||R({[d]:F})}const Ae=B({});Ye(p,d=>{d&&(Ae.value={...d})},{immediate:!0});function je(d){p.value&&r.updateSlide(s.projectId,p.value.id,d)}function Ne(d){if(!c.value)return;const t={...h.value,...d};r.updateProject(s.projectId,{settings:{...t,...Kn(t)}})}function Ve(d){Ne({slideWidth:d.width,slideHeight:d.height})}function pt(d,t){const F=Math.round(Number(t)||0);if(!F)return;const fe={[`slide${d==="width"?"Width":"Height"}`]:F};if(te.value){const Me=y.value.width,Be=y.value.height;d==="width"?fe.slideHeight=Math.round(F*(Be/Me)):fe.slideWidth=Math.round(F*(Me/Be))}Ne(fe)}const Je=T(()=>{var d;return zn(((d=c.value)==null?void 0:d.theme)||{})}),at=T(()=>{var t,F;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const d=((F=a.value.content)==null?void 0:F.paletteText)||Je.value.paletteText;return tl(d)});function st(d){const t=Zn(d,{fallbackToDefault:!1});return t.length?el(t):""}function it(d){var F;if(((F=a.value)==null?void 0:F.type)!=="chart")return;const t=st(d);t&&(x({dataText:t}),ne.value="")}async function Ge(d){var fe;const t=d.target,F=(fe=t==null?void 0:t.files)==null?void 0:fe[0];if(F)try{const Me=await F.text();it(Me)}finally{t&&(t.value="")}}function yt(){var d;(d=Le.value)==null||d.click()}function ut(){var t,F;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const d=st(((F=a.value.content)==null?void 0:F.dataText)||"");d&&x({dataText:d})}function xt(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&x({...Je.value})}function wt(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&x({paletteText:Je.value.paletteText})}function dt(d){return String(d||"").split(",").map(t=>t.trim()).filter(Boolean)}function kt(d){const t=(d==null?void 0:d.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((d==null?void 0:d.name)||"Imported Preset").trim()||"Imported Preset",category:String((d==null?void 0:d.category)||"").trim(),tags:Array.isArray(d==null?void 0:d.tags)?d.tags.map(F=>String(F).trim()).filter(Boolean):dt(d==null?void 0:d.tags),type:String((d==null?void 0:d.type)||"auto"),delay:Math.max(0,Number(d==null?void 0:d.delay)||0),duration:Math.max(.1,Number(d==null?void 0:d.duration)||.72),stepDelay:Math.max(0,Number(d==null?void 0:d.stepDelay)||0)}}const Ct=T(()=>[...new Set(V.value.map(t=>t.category).filter(Boolean))].sort((t,F)=>t.localeCompare(F))),$t=T(()=>[...V.value].filter(d=>Number(d.usageCount||0)>0).sort((d,t)=>{const F=Number(t.lastUsedAt||0)-Number(d.lastUsedAt||0);return F!==0?F:Number(t.usageCount||0)-Number(d.usageCount||0)}).slice(0,6)),St=T(()=>de.value==="all"?X.value:X.value.filter(d=>d.scope===de.value));function g(d){const t=he.value.trim().toLowerCase(),F=Re.value;return F==="all"||(d.category||"")===F?t?[d.name,d.category,...d.tags||[]].filter(Boolean).some(Me=>String(Me).toLowerCase().includes(t)):!0:!1}const w=T(()=>me.value.filter(g)),Q=T(()=>H.value.filter(g)),G=T(()=>$t.value.filter(d=>E.value==="group"?d.scope==="group":d.scope!=="group"));function Se(d){const t=String(d.name||"").trim();if(!t)return;const F=V.value.findIndex(Be=>Be.scope===d.scope&&Be.name.toLowerCase()===t.toLowerCase()),fe={...d,id:F>=0?V.value[F].id:`motion-${Date.now()}`,name:t,category:String(d.category||"").trim(),tags:Array.isArray(d.tags)?d.tags:dt(d.tags)},Me=[...V.value];F>=0?Me.splice(F,1,fe):Me.push(fe),Ne({motionPresets:Me})}function Ee(d,t){const F=V.value.map(fe=>fe.id===d?{...fe,...t}:fe);Ne({motionPresets:F})}function Fe(d){const t=V.value.find(F=>F.id===d);t&&Ee(d,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function De(d,t){const F=V.value.filter(We=>We.scope===d).map(We=>We.name.toLowerCase()),fe=String(t||"Preset").trim()||"Preset";if(!F.includes(fe.toLowerCase()))return fe;let Me=2,Be=`${fe} Copy`;for(;F.includes(Be.toLowerCase());)Be=`${fe} Copy ${Me}`,Me+=1;return Be}function re(d){Ne({motionPresets:V.value.filter(t=>t.id!==d)}),j.value===d&&(j.value="",_.value="")}function Ce(d){Se({...d,id:void 0,name:De(d.scope,d.name)})}function Xe(d){j.value=d.id,_.value=d.name,ce.value=d.category||"",ae.value=Array.isArray(d.tags)?d.tags.join(", "):""}function Ue(){j.value="",_.value="",ce.value="",ae.value=""}function _e(d){const t=String(_.value||"").trim();t&&(Ee(d,{name:t,category:String(ce.value||"").trim(),tags:dt(ae.value)}),Ue())}function ze(d,t,F){if(!t||!F||t===F)return;const fe=V.value.filter(ot=>ot.scope===d),Me=fe.findIndex(ot=>ot.id===t),Be=fe.findIndex(ot=>ot.id===F);if(Me===-1||Be===-1)return;const We=[...fe],[Oe]=We.splice(Me,1);We.splice(Be,0,Oe);const ft=V.value.filter(ot=>ot.scope!==d),ht=[];V.value.forEach(ot=>{if(ot.scope===d){We.length&&ht.push(We.shift());return}const It=ft.shift();It&&ht.push(It)}),Ne({motionPresets:ht})}function tt(d){ee.value=d.id,be.value=d.id}function ct(d){ee.value&&(be.value=d.id)}function vt(d){ee.value&&(ze(d.scope,ee.value,d.id),ee.value="",be.value="")}function Tt(){ee.value="",be.value=""}function Nt(){W.value+=1}function zt(){ie.value+=1}function Bt(d,t){je({[d]:t})}function _t(d){const t=Math.max(0,Number(d)||0);je({duration:t})}function u(d){var fe;if(!a.value)return;const F={...((fe=a.value.animations)==null?void 0:fe[0])||{type:"auto",delay:0,duration:.64},...d};if(F.type==="auto"){R({animations:[]});return}R({animations:[{type:F.type||"none",delay:Math.max(0,Number(F.delay)||0),duration:Math.max(.1,Number(F.duration)||.64)}]})}const o=B("stagger-in"),f=B(0),S=B(.12),m=B(.72);Ye(N,d=>{d.length&&(o.value=v.value.type==="mixed"?"stagger-in":v.value.type,m.value=v.value.duration)},{immediate:!0,deep:!0});function ue(){if(!N.value.length)return;[...N.value].sort((t,F)=>(t.y||0)!==(F.y||0)?(t.y||0)-(F.y||0):(t.x||0)-(F.x||0)).forEach((t,F)=>{if(o.value==="auto"){r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:o.value,delay:Math.max(0,Number(f.value)||0)+F*Math.max(0,Number(S.value)||0),duration:Math.max(.1,Number(m.value)||.72)}]})})}function Te(d){o.value=d.type||"stagger-in",f.value=Number(d.delay||0),S.value=Number(d.stepDelay||0),m.value=Number(d.duration||.72),Fe(d.id),zt()}function Ke(){Se({scope:"group",name:we.value,category:U.value,tags:dt(Y.value),type:o.value,delay:Math.max(0,Number(f.value)||0),stepDelay:Math.max(0,Number(S.value)||0),duration:Math.max(.1,Number(m.value)||.72)}),we.value="",U.value="",Y.value=""}function P(d){u({type:d.type||"auto",delay:Number(d.delay||0),duration:Number(d.duration||.72)}),Fe(d.id),Nt()}function Ze(){Se({scope:"single",name:$e.value,category:$.value,tags:dt(D.value),type:q.value.type,delay:Math.max(0,Number(q.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(q.value.duration)||.72)}),$e.value="",$.value="",D.value=""}function gt(){var d;(d=Pe.value)==null||d.click()}async function bt(d){var fe;const t=d.target,F=(fe=t==null?void 0:t.files)==null?void 0:fe[0];if(F)try{const Me=await F.text(),Be=JSON.parse(Me),We=Array.isArray(Be)?Be:Array.isArray(Be.motionPresets)?Be.motionPresets:[];if(!We.length)return;X.value=We.map(Oe=>({...kt(Oe),selected:!0,importName:String((Oe==null?void 0:Oe.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function qt(){X.value=[]}function _n(){const d=X.value.filter(F=>F.selected);if(!d.length)return;const t=[...V.value];d.forEach(F=>{const fe=t.findIndex(Me=>Me.scope===F.scope&&Me.name.toLowerCase()===F.name.toLowerCase());if(fe>=0){le.value==="replace"?t.splice(fe,1,{...t[fe],...F,id:t[fe].id}):t.push({...F,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:De(F.scope,F.name)});return}t.push(F)}),Ne({motionPresets:t}),qt()}function Ln(){var Be;if(!V.value.length)return;const d={version:1,exportedAt:new Date().toISOString(),motionPresets:V.value.map(({id:We,...Oe})=>Oe)},t=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),F=URL.createObjectURL(t),fe=document.createElement("a"),Me=String(((Be=c.value)==null?void 0:Be.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";fe.href=F,fe.download=`${Me}-motion-presets.json`,document.body.appendChild(fe),fe.click(),document.body.removeChild(fe),URL.revokeObjectURL(F)}const jn=T(()=>[{id:`single-${W.value}`,delay:Math.max(0,Number(q.value.delay)||0),duration:Math.max(.1,Number(q.value.duration)||.72),type:q.value.type}]),Dn=T(()=>Array.from({length:Math.min(Math.max(N.value.length,3),5)},(d,t)=>({id:`group-${ie.value}-${t}`,delay:Math.max(0,Number(f.value)||0)+t*Math.max(0,Number(S.value)||0),duration:Math.max(.1,Number(m.value)||.72),type:o.value}))),Rt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Ft=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(d,t)=>{var F,fe,Me,Be,We,Oe,ft,ht,ot,It,Ut,Ot,Vt,Wt,Gt,Ht,Yt,Qt,Jt,Xt,Kt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,ho,yo,xo,wo,ko,Co,$o,So,Io,Ao,Mo,Eo,Po,To,No,zo,Bo,_o,Lo,jo,Do,qo,Ro,Fo,Uo,Oo,Vo,Wo,Go,Ho,Yo,Qo,Jo,Xo,Ko,Zo,en,tn,on,nn,ln,an,sn,rn,un,dn,cn,pn,vn,fn,mn,gn,bn,hn,yn,xn,wn,kn;return l(),i("div",{ref_key:"panelRootRef",ref:Ie,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Pe,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:bt},null,544),e("input",{ref_key:"chartImportInput",ref:Le,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:Ge},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),C.value?(l(),He(ji,{key:0,"search-query":he.value,"category-filter":Re.value,"available-categories":Ct.value,"recent-presets":G.value,"pending-imported-presets":X.value,"filtered-pending-imports":St.value,"import-scope-filter":de.value,"import-conflict-mode":le.value,"onUpdate:searchQuery":t[0]||(t[0]=n=>he.value=n),"onUpdate:categoryFilter":t[1]||(t[1]=n=>Re.value=n),onTriggerImport:gt,onExportPresets:Ln,onApplyPreset:t[2]||(t[2]=n=>E.value==="group"?Te(n):P(n)),onClearImports:qt,"onUpdate:importScopeFilter":t[3]||(t[3]=n=>de.value=n),"onUpdate:importConflictMode":t[4]||(t[4]=n=>le.value=n),onApplyImports:_n},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):O("",!0),I(s).multiSelection?(l(),i("div",Di,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",qi,k(N.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",Ri,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:zt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${ie.value}`},[(l(!0),i(Z,null,ve(Dn.value,n=>(l(),i("span",{key:n.id,class:J(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:ge({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",Fi,[(l(),i(Z,null,ve(Rt,n=>e("button",{key:`group-${n.value}`,type:"button",class:J(["motion-card",o.value===n.value&&"active"]),onClick:se=>o.value=n.value},[e("span",Oi,[e("span",{class:J(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",Vi)):O("",!0),n.value==="stagger-in"?(l(),i("span",Wi)):O("",!0)]),e("span",Gi,k(n.label),1)],10,Ui)),64))]),e("div",Hi,[e("div",Yi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),pe(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=n=>f.value=n),class:"input"},null,512),[[ke,f.value]])]),e("div",Qi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),pe(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=n=>S.value=n),class:"input"},null,512),[[ke,S.value]])])]),e("div",Ji,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),pe(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=n=>m.value=n),class:"input"},null,512),[[ke,m.value]])]),e("div",Xi,[pe(e("input",{"onUpdate:modelValue":t[8]||(t[8]=n=>we.value=n),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[ke,we.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ke},"Save")]),e("div",Ki,[pe(e("input",{"onUpdate:modelValue":t[9]||(t[9]=n=>U.value=n),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[ke,U.value]]),pe(e("input",{"onUpdate:modelValue":t[10]||(t[10]=n=>Y.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,Y.value]])]),Q.value.length?(l(),i("div",Zi,[(l(!0),i(Z,null,ve(Q.value,n=>(l(),i("div",{key:n.id,class:J(["preset-item",ee.value===n.id&&"dragging",be.value===n.id&&ee.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:se=>tt(n),onDragenter:qe(se=>ct(n),["prevent"]),onDragover:t[14]||(t[14]=qe(()=>{},["prevent"])),onDrop:qe(se=>vt(n),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:se=>Te(n)},k(n.name),9,ta),n.category?(l(),i("span",oa,k(n.category),1)):O("",!0),(l(!0),i(Z,null,ve(n.tags||[],se=>(l(),i("span",{key:`${n.id}-${se}`,class:"preset-meta-chip muted"},"#"+k(se),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:se=>Ce(n)},"Duplicate",8,na),e("button",{type:"button",class:"preset-mini-btn",onClick:se=>Xe(n)},"Rename",8,la),e("button",{type:"button",class:"preset-mini-btn danger",onClick:se=>re(n.id)},"Delete",8,ia),j.value===n.id?(l(),i("div",aa,[pe(e("input",{"onUpdate:modelValue":t[11]||(t[11]=se=>_.value=se),class:"input"},null,512),[[ke,_.value]]),pe(e("input",{"onUpdate:modelValue":t[12]||(t[12]=se=>ce.value=se),class:"input",placeholder:"Category"},null,512),[[ke,ce.value]]),pe(e("input",{"onUpdate:modelValue":t[13]||(t[13]=se=>ae.value=se),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,ae.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:se=>_e(n.id)},"Save",8,sa),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ue},"Cancel")])):O("",!0)],42,ea))),128))])):H.value.length?(l(),i("div",ra,"No group presets match the current search.")):O("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:ue}," Apply Sequence to Selection ")])):a.value?(l(),i(Z,{key:3},[e("div",{class:J(["panel-section",ye.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",es,[t[179]||(t[179]=K(" Position & Size ",-1)),e("span",ts,k(a.value.type),1)]),e("div",os,[e("div",ns,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=n=>xe("x",n.target.value))},null,40,ls)]),e("div",is,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=n=>xe("y",n.target.value))},null,40,as)]),e("div",ss,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=n=>xe("width",n.target.value))},null,40,rs)]),e("div",us,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=n=>xe("height",n.target.value))},null,40,ds)]),e("div",cs,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=n=>xe("rotation",n.target.value))},null,40,ps)]),e("div",vs,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=n=>xe("opacity",n.target.value))},null,40,fs)])])],2),e("div",{class:J(["panel-section",ye.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",ms,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Nt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${W.value}`},[(l(!0),i(Z,null,ve(jn.value,n=>(l(),i("span",{key:n.id,class:J(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:ge({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",gs,[(l(),i(Z,null,ve(Rt,n=>e("button",{key:n.value,type:"button",class:J(["motion-card",q.value.type===n.value&&"active"]),onClick:se=>u({type:n.value})},[e("span",hs,[e("span",{class:J(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",ys)):O("",!0),n.value==="stagger-in"?(l(),i("span",xs)):O("",!0)]),e("span",ws,k(n.label),1)],10,bs)),64))]),e("div",ks,[e("div",Cs,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:q.value.delay,class:"input",onChange:t[45]||(t[45]=n=>u({delay:n.target.value}))},null,40,$s)]),e("div",Ss,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:q.value.duration,class:"input",onChange:t[46]||(t[46]=n=>u({duration:n.target.value}))},null,40,Is)])]),e("div",As,[pe(e("input",{"onUpdate:modelValue":t[47]||(t[47]=n=>$e.value=n),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[ke,$e.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ze},"Save")]),e("div",Ms,[pe(e("input",{"onUpdate:modelValue":t[48]||(t[48]=n=>$.value=n),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[ke,$.value]]),pe(e("input",{"onUpdate:modelValue":t[49]||(t[49]=n=>D.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,D.value]])]),w.value.length?(l(),i("div",Es,[(l(!0),i(Z,null,ve(w.value,n=>(l(),i("div",{key:n.id,class:J(["preset-item",ee.value===n.id&&"dragging",be.value===n.id&&ee.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:se=>tt(n),onDragenter:qe(se=>ct(n),["prevent"]),onDragover:t[53]||(t[53]=qe(()=>{},["prevent"])),onDrop:qe(se=>vt(n),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:se=>P(n)},k(n.name),9,Ts),n.category?(l(),i("span",Ns,k(n.category),1)):O("",!0),(l(!0),i(Z,null,ve(n.tags||[],se=>(l(),i("span",{key:`${n.id}-${se}`,class:"preset-meta-chip muted"},"#"+k(se),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:se=>Ce(n)},"Duplicate",8,zs),e("button",{type:"button",class:"preset-mini-btn",onClick:se=>Xe(n)},"Rename",8,Bs),e("button",{type:"button",class:"preset-mini-btn danger",onClick:se=>re(n.id)},"Delete",8,_s),j.value===n.id?(l(),i("div",Ls,[pe(e("input",{"onUpdate:modelValue":t[50]||(t[50]=se=>_.value=se),class:"input"},null,512),[[ke,_.value]]),pe(e("input",{"onUpdate:modelValue":t[51]||(t[51]=se=>ce.value=se),class:"input",placeholder:"Category"},null,512),[[ke,ce.value]]),pe(e("input",{"onUpdate:modelValue":t[52]||(t[52]=se=>ae.value=se),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,ae.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:se=>_e(n.id)},"Save",8,js),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ue},"Cancel")])):O("",!0)],42,Ps))),128))])):me.value.length?(l(),i("div",Ds,"No single-element presets match the current search.")):O("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",qs,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(ht=a.value.content)==null?void 0:ht.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=n=>x({text:n.target.value}))},null,40,Rs)]),e("div",Fs,[e("div",Us,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(ot=a.value.content)==null?void 0:ot.fontSize,class:"input",onChange:t[55]||(t[55]=n=>x({fontSize:+n.target.value}))},null,40,Os)]),e("div",Vs,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(It=a.value.content)==null?void 0:It.fontWeight,class:"select",onChange:t[56]||(t[56]=n=>x({fontWeight:n.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Ws)])]),e("div",Gs,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Ut=a.value.content)==null?void 0:Ut.fontFamily,class:"select",onChange:t[57]||(t[57]=n=>x({fontFamily:n.target.value}))},[(l(),i(Z,null,ve(Ft,n=>e("option",{key:n,value:n},k(n.split(",")[0]),9,Ys)),64))],40,Hs)]),e("div",Qs,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",Js,[(l(),i(Z,null,ve(["left","center","right","justify"],n=>{var se;return e("button",{key:n,class:J(["align-btn",((se=a.value.content)==null?void 0:se.textAlign)===n&&"active"]),onClick:Cn=>x({textAlign:n})},k(n[0].toUpperCase()),11,Xs)}),64))])]),e("div",Ks,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",Zs,[e("button",{class:J(["style-btn",((Ot=a.value.content)==null?void 0:Ot.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=n=>{var se;return x({fontStyle:((se=a.value.content)==null?void 0:se.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:J(["style-btn",((Vt=a.value.content)==null?void 0:Vt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=n=>{var se;return x({textDecoration:((se=a.value.content)==null?void 0:se.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:J(["style-btn",((Wt=a.value.content)==null?void 0:Wt.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=n=>{var se;return x({textDecoration:((se=a.value.content)==null?void 0:se.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",er,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",tr,[e("input",{type:"color",value:((Gt=a.value.content)==null?void 0:Gt.color)||"#000",onInput:t[61]||(t[61]=n=>x({color:n.target.value})),class:"color-input-native"},null,40,or),e("input",{value:((Ht=a.value.content)==null?void 0:Ht.color)||"#000",class:"input",onInput:t[62]||(t[62]=n=>x({color:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,nr)])]),e("div",lr,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Yt=a.value.content)==null?void 0:Yt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=n=>x({lineHeight:+n.target.value}))},null,40,ir)]),e("div",ar,[e("div",sr,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Qt=a.value.content)==null?void 0:Qt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=n=>x({textTransform:n.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,rr)]),e("div",ur,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Jt=a.value.content)==null?void 0:Jt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=n=>x({letterSpacing:+n.target.value}))},null,40,dr)])])],2)):O("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",cr,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Xt=a.value.content)==null?void 0:Xt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=n=>x({src:n.target.value}))},null,40,pr)]),e("div",vr,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Kt=a.value.content)==null?void 0:Kt.alt,class:"input",onInput:t[67]||(t[67]=n=>x({alt:n.target.value}))},null,40,fr)]),e("div",mr,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Zt=a.value.content)==null?void 0:Zt.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=n=>x({objectFit:n.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,gr)]),e("div",br,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((eo=a.value.content)==null?void 0:eo.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=n=>x({borderRadius:+n.target.value}))},null,40,hr)]),e("div",yr,[e("div",xr,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((to=a.value.content)==null?void 0:to.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=n=>x({borderWidth:+n.target.value}))},null,40,wr)]),e("div",kr,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((oo=a.value.content)==null?void 0:oo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=n=>x({borderColor:n.target.value}))},null,40,Cr)])])],2)):O("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",$r,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((no=a.value.content)==null?void 0:no.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=n=>x({shapeType:n.target.value}))},[...t[215]||(t[215]=[et('<option value="rectangle" data-v-1d3dcef4>Rectangle</option><option value="circle" data-v-1d3dcef4>Circle</option><option value="triangle" data-v-1d3dcef4>Triangle</option><option value="star" data-v-1d3dcef4>Star</option><option value="arrow" data-v-1d3dcef4>Arrow</option><option value="diamond" data-v-1d3dcef4>Diamond</option>',6)])],40,Sr)]),e("div",Ir,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Ar,[e("input",{type:"color",value:((lo=a.value.content)==null?void 0:lo.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=n=>x({fillColor:n.target.value})),class:"color-input-native"},null,40,Mr),e("input",{value:((io=a.value.content)==null?void 0:io.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=n=>x({fillColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Er)])]),e("div",Pr,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Tr,[e("input",{type:"color",value:((ao=a.value.content)==null?void 0:ao.borderColor)||"transparent",onInput:t[75]||(t[75]=n=>x({borderColor:n.target.value})),class:"color-input-native"},null,40,Nr),e("input",{value:((so=a.value.content)==null?void 0:so.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=n=>x({borderColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,zr)])]),e("div",Br,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((ro=a.value.content)==null?void 0:ro.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=n=>x({borderWidth:+n.target.value}))},null,40,_r)]),e("div",Lr,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((uo=a.value.content)==null?void 0:uo.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=n=>x({borderRadius:+n.target.value}))},null,40,jr)]),e("div",Dr,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((co=a.value.content)==null?void 0:co.opacity)??1,class:"input",onChange:t[79]||(t[79]=n=>x({opacity:+n.target.value}))},null,40,qr)])],2)):O("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",Rr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((po=a.value.content)==null?void 0:po.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=n=>x({chartType:n.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Fr)]),e("div",Ur,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((vo=a.value.content)==null?void 0:vo.title)||"",class:"input",onInput:t[81]||(t[81]=n=>x({title:n.target.value}))},null,40,Or)]),e("div",Vr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((fo=a.value.content)==null?void 0:fo.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=n=>x({dataText:n.target.value}))},null,40,Wr),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ut},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:yt},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Gr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),pe(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=n=>ne.value=n),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[ke,ne.value]]),e("div",Hr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=n=>it(ne.value))},"Convert pasted data")])]),e("div",Yr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((mo=a.value.content)==null?void 0:mo.paletteText)||"",class:"input",placeholder:Je.value.paletteText,onInput:t[85]||(t[85]=n=>x({paletteText:n.target.value}))},null,40,Qr),e("div",Jr,[(l(!0),i(Z,null,ve(at.value,(n,se)=>(l(),i("span",{key:`chart-palette-${se}`,class:"chart-palette-swatch",style:ge({background:n})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:wt},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:xt},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Xr,[e("div",Kr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((go=a.value.content)==null?void 0:go.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=n=>x({backgroundColor:n.target.value}))},null,40,Zr)]),e("div",eu,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((bo=a.value.content)==null?void 0:bo.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=n=>x({textColor:n.target.value}))},null,40,tu)])]),e("div",ou,[e("div",nu,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((ho=a.value.content)==null?void 0:ho.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=n=>x({gridColor:n.target.value}))},null,40,lu)]),e("div",iu,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((yo=a.value.content)==null?void 0:yo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=n=>x({borderColor:n.target.value}))},null,40,au)])]),e("div",su,[e("div",ru,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((xo=a.value.content)==null?void 0:xo.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=n=>x({borderWidth:+n.target.value}))},null,40,uu)]),((wo=a.value.content)==null?void 0:wo.chartType)!=="circle"?(l(),i("div",du,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((ko=a.value.content)==null?void 0:ko.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=n=>x({maxValue:n.target.value}))},null,40,cu)])):(l(),i("div",pu,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((Co=a.value.content)==null?void 0:Co.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=n=>x({innerRadius:+n.target.value}))},null,40,vu)]))]),(($o=a.value.content)==null?void 0:$o.chartType)==="line"?(l(),i("div",fu,[e("div",mu,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((So=a.value.content)==null?void 0:So.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=n=>x({strokeWidth:+n.target.value}))},null,40,gu)]),e("label",bu,[e("input",{type:"checkbox",checked:!!((Io=a.value.content)!=null&&Io.showArea),onChange:t[94]||(t[94]=n=>x({showArea:n.target.checked}))},null,40,hu),t[239]||(t[239]=K(" Show area fill ",-1))])])):O("",!0),e("label",yu,[e("input",{type:"checkbox",checked:((Ao=a.value.content)==null?void 0:Ao.showLegend)!==!1,onChange:t[95]||(t[95]=n=>x({showLegend:n.target.checked}))},null,40,xu),t[240]||(t[240]=K(" Show legend ",-1))]),((Mo=a.value.content)==null?void 0:Mo.chartType)!=="circle"?(l(),i("label",wu,[e("input",{type:"checkbox",checked:((Eo=a.value.content)==null?void 0:Eo.showGrid)!==!1,onChange:t[96]||(t[96]=n=>x({showGrid:n.target.checked}))},null,40,ku),t[241]||(t[241]=K(" Show grid lines ",-1))])):O("",!0),e("label",Cu,[e("input",{type:"checkbox",checked:((Po=a.value.content)==null?void 0:Po.showValues)!==!1,onChange:t[97]||(t[97]=n=>x({showValues:n.target.checked}))},null,40,$u),t[242]||(t[242]=K(" Show values ",-1))])],2)):O("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Su,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(To=a.value.content)==null?void 0:To.label,class:"input",onInput:t[98]||(t[98]=n=>x({label:n.target.value}))},null,40,Iu)]),e("div",Au,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((No=a.value.content)==null?void 0:No.variant)||"primary",class:"select",onChange:t[99]||(t[99]=n=>x({variant:n.target.value}))},[...t[245]||(t[245]=[et('<option value="primary" data-v-1d3dcef4>Primary</option><option value="secondary" data-v-1d3dcef4>Secondary</option><option value="outline" data-v-1d3dcef4>Outline</option><option value="ghost" data-v-1d3dcef4>Ghost</option><option value="danger" data-v-1d3dcef4>Danger</option>',5)])],40,Mu)]),e("div",Eu,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((zo=a.value.content)==null?void 0:zo.action)||"none",class:"select",onChange:t[100]||(t[100]=n=>x({action:n.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Pu)]),(Bo=a.value.content)!=null&&Bo.action&&a.value.content.action!=="none"?(l(),i("div",Tu,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(_o=a.value.content)==null?void 0:_o.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=n=>x({target:n.target.value}))},null,40,Nu)])):O("",!0),e("div",zu,[e("div",Bu,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Lo=a.value.content)==null?void 0:Lo.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=n=>x({bgColor:n.target.value}))},null,40,_u)]),e("div",Lu,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((jo=a.value.content)==null?void 0:jo.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=n=>x({textColor:n.target.value}))},null,40,ju)])]),e("div",Du,[e("div",qu,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Do=a.value.content)==null?void 0:Do.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=n=>x({borderColor:n.target.value}))},null,40,Ru)]),e("div",Fu,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((qo=a.value.content)==null?void 0:qo.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=n=>x({borderRadius:+n.target.value}))},null,40,Uu)])]),e("div",Ou,[e("div",Vu,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Ro=a.value.content)==null?void 0:Ro.fontSize)??15,class:"input",onChange:t[106]||(t[106]=n=>x({fontSize:+n.target.value}))},null,40,Wu)]),e("div",Gu,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Fo=a.value.content)==null?void 0:Fo.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=n=>x({fontWeight:+n.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Hu)])]),e("div",Yu,[e("div",Qu,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Uo=a.value.content)==null?void 0:Uo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=n=>x({fontFamily:n.target.value}))},[(l(),i(Z,null,ve(Ft,n=>e("option",{key:`btn-${n}`,value:n},k(n.split(",")[0]),9,Xu)),64))],40,Ju)]),e("div",Ku,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Oo=a.value.content)==null?void 0:Oo.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=n=>x({letterSpacing:+n.target.value}))},null,40,Zu)])])],2)):O("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",ed,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Vo=a.value.content)==null?void 0:Vo.icon)||"?",class:"select",onChange:t[110]||(t[110]=n=>x({icon:n.target.value}))},[...t[260]||(t[260]=[et('<option value="?" data-v-1d3dcef4>? (Info)</option><option value="!" data-v-1d3dcef4>! (Alert)</option><option value="+" data-v-1d3dcef4>+ (Plus)</option><option value="i" data-v-1d3dcef4>i (Info)</option><option value="✦" data-v-1d3dcef4>✦ (Star)</option>',5)])],40,td)]),e("div",od,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",nd,[e("input",{type:"color",value:((Wo=a.value.content)==null?void 0:Wo.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=n=>x({bgColor:n.target.value})),class:"color-input-native"},null,40,ld),e("input",{value:((Go=a.value.content)==null?void 0:Go.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=n=>x({bgColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,id)])]),e("div",ad,[e("div",sd,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Ho=a.value.content)==null?void 0:Ho.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=n=>x({iconColor:n.target.value}))},null,40,rd)]),e("div",ud,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Yo=a.value.content)==null?void 0:Yo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=n=>x({borderRadius:+n.target.value}))},null,40,dd)])]),e("div",cd,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Qo=a.value.content)==null?void 0:Qo.popupTitle,class:"input",onInput:t[115]||(t[115]=n=>x({popupTitle:n.target.value}))},null,40,pd)]),e("div",vd,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Jo=a.value.content)==null?void 0:Jo.popupContent,class:"textarea",onInput:t[116]||(t[116]=n=>x({popupContent:n.target.value}))},null,40,fd)]),e("div",md,[e("div",gd,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Xo=a.value.content)==null?void 0:Xo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=n=>x({popupBgColor:n.target.value}))},null,40,bd)]),e("div",hd,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Ko=a.value.content)==null?void 0:Ko.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=n=>x({popupTextColor:n.target.value}))},null,40,yd)])])],2)):O("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",xd,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Zo=a.value.content)==null?void 0:Zo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=n=>x({src:n.target.value}))},null,40,wd)]),e("div",kd,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(en=a.value.content)==null?void 0:en.poster,class:"input",onInput:t[120]||(t[120]=n=>x({poster:n.target.value}))},null,40,Cd)]),e("div",$d,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((tn=a.value.content)==null?void 0:tn.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=n=>x({objectFit:n.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Sd)]),e("label",Id,[e("input",{type:"checkbox",checked:(on=a.value.content)==null?void 0:on.autoplay,onChange:t[122]||(t[122]=n=>x({autoplay:n.target.checked}))},null,40,Ad),t[274]||(t[274]=K(" Autoplay ",-1))]),e("label",Md,[e("input",{type:"checkbox",checked:((nn=a.value.content)==null?void 0:nn.controls)??!0,onChange:t[123]||(t[123]=n=>x({controls:n.target.checked}))},null,40,Ed),t[275]||(t[275]=K(" Show Controls ",-1))]),e("label",Pd,[e("input",{type:"checkbox",checked:(ln=a.value.content)==null?void 0:ln.loop,onChange:t[124]||(t[124]=n=>x({loop:n.target.checked}))},null,40,Td),t[276]||(t[276]=K(" Loop ",-1))]),e("label",Nd,[e("input",{type:"checkbox",checked:(an=a.value.content)==null?void 0:an.muted,onChange:t[125]||(t[125]=n=>x({muted:n.target.checked}))},null,40,zd),t[277]||(t[277]=K(" Muted ",-1))])],2)):O("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",Bd,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(sn=a.value.content)==null?void 0:sn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=n=>x({src:n.target.value}))},null,40,_d)]),e("div",Ld,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(rn=a.value.content)==null?void 0:rn.label,class:"input",onInput:t[127]||(t[127]=n=>x({label:n.target.value}))},null,40,jd)]),e("label",Dd,[e("input",{type:"checkbox",checked:(un=a.value.content)==null?void 0:un.autoplay,onChange:t[128]||(t[128]=n=>x({autoplay:n.target.checked}))},null,40,qd),t[281]||(t[281]=K(" Autoplay ",-1))]),e("label",Rd,[e("input",{type:"checkbox",checked:((dn=a.value.content)==null?void 0:dn.controls)!==!1,onChange:t[129]||(t[129]=n=>x({controls:n.target.checked}))},null,40,Fd),t[282]||(t[282]=K(" Show Controls ",-1))]),e("label",Ud,[e("input",{type:"checkbox",checked:(cn=a.value.content)==null?void 0:cn.loop,onChange:t[130]||(t[130]=n=>x({loop:n.target.checked}))},null,40,Od),t[283]||(t[283]=K(" Loop ",-1))]),e("div",Vd,[e("div",Wd,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((pn=a.value.content)==null?void 0:pn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=n=>x({accentColor:n.target.value}))},null,40,Gd)]),e("div",Hd,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((vn=a.value.content)==null?void 0:vn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=n=>x({textColor:n.target.value}))},null,40,Yd)])]),e("div",Qd,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((fn=a.value.content)==null?void 0:fn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=n=>x({bgColor:n.target.value}))},null,40,Jd)])],2)):O("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Xd,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(mn=a.value.content)==null?void 0:mn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=n=>x({question:n.target.value}))},null,40,Kd)]),e("div",Zd,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(bn=(gn=a.value.content)==null?void 0:gn.options)==null?void 0:bn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=n=>x({options:n.target.value.split(`
`).filter(Boolean)}))},null,40,ec)]),e("div",tc,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((hn=a.value.content)==null?void 0:hn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=n=>x({correctIndex:+n.target.value}))},null,40,oc)]),e("div",nc,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(yn=a.value.content)==null?void 0:yn.explanation,class:"textarea",onInput:t[137]||(t[137]=n=>x({explanation:n.target.value}))},null,40,lc)]),e("div",ic,[e("div",ac,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((xn=a.value.content)==null?void 0:xn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=n=>x({cardBgColor:n.target.value}))},null,40,sc)]),e("div",rc,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((wn=a.value.content)==null?void 0:wn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=n=>x({questionColor:n.target.value}))},null,40,uc)])]),e("div",dc,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((kn=a.value.content)==null?void 0:kn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=n=>x({accentColor:n.target.value}))},null,40,cc)])],2)):O("",!0),e("div",pc,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",vc,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=n=>I(r).duplicateElement(I(s).projectId,I(s).currentSlideId,a.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),K(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=n=>{I(s).showInteractionEditor=!0,I(s).interactionElementId=a.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),K(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=n=>{I(r).deleteElement(I(s).projectId,I(s).currentSlideId,a.value.id),I(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),K(" Delete Element ",-1)])])])])],64)):(l(),i("div",ua,[e("div",da,[e("button",{type:"button",class:J(["slide-settings-tab",oe.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=n=>oe.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:J(["slide-settings-tab",oe.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=n=>oe.value="transitions")},[...t[150]||(t[150]=[et('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-1d3dcef4><path d="M5 7h5" data-v-1d3dcef4></path><path d="M5 12h10" data-v-1d3dcef4></path><path d="M5 17h14" data-v-1d3dcef4></path><path d="M14 7l5 5-5 5" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Transitions</span>',2)])],2),e("button",{type:"button",class:J(["slide-settings-tab",oe.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=n=>oe.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),oe.value==="canvas"?(l(),i("div",ca,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",pa,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),pe(e("input",{"onUpdate:modelValue":t[18]||(t[18]=n=>Ae.value.title=n),class:"input",onInput:t[19]||(t[19]=n=>Bt("title",Ae.value.title))},null,544),[[ke,Ae.value.title]])]),e("div",va,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",fa,[(l(),i(Z,null,ve(["color","gradient","image"],n=>{var se;return e("button",{key:n,class:J(["bg-type-btn",(((se=p.value)==null?void 0:se.backgroundType)||"color")===n&&"active"]),onClick:Cn=>je({backgroundType:n})},k(n),11,ma)}),64))]),(((F=p.value)==null?void 0:F.backgroundType)||"color")==="color"?(l(),i("div",ga,[e("input",{type:"color",value:((fe=p.value)==null?void 0:fe.background)||"#ffffff",onInput:t[20]||(t[20]=n=>je({background:n.target.value})),class:"color-input-native"},null,40,ba),e("input",{value:((Me=p.value)==null?void 0:Me.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=n=>je({background:n.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,ha)])):((Be=p.value)==null?void 0:Be.backgroundType)==="gradient"?pe((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=n=>Ae.value.backgroundGradient=n),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=n=>je({backgroundGradient:Ae.value.backgroundGradient}))},null,544)),[[ke,Ae.value.backgroundGradient]]):pe((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=n=>Ae.value.backgroundImage=n),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=n=>je({backgroundImage:Ae.value.backgroundImage}))},null,544)),[[ke,Ae.value.backgroundImage]])]),e("div",ya,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",xa,[(l(!0),i(Z,null,ve(I(Xn),n=>{var se;return l(),i("button",{key:n.id,type:"button",class:J(["canvas-size-card",((se=b.value)==null?void 0:se.id)===n.id&&"active"]),onClick:Cn=>Ve(n)},[e("span",ka,[e("span",{class:J(["canvas-size-thumb",`canvas-size-thumb-${n.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Ca,k(n.label),1),e("span",$a,k(n.ratioLabel),1)],10,wa)}),128))]),e("div",Sa,[e("div",Ia,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Aa,"Current ratio "+k(L.value),1)]),e("div",Ma,[e("div",Ea,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Pa,[e("input",{type:"number",min:"320",max:"4096",value:y.value.width,class:"input",onChange:t[26]||(t[26]=n=>pt("width",n.target.value))},null,40,Ta),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Na,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",za,[e("input",{type:"number",min:"320",max:"4096",value:y.value.height,class:"input",onChange:t[27]||(t[27]=n=>pt("height",n.target.value))},null,40,Ba),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",_a,[pe(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=n=>te.value=n)},null,512),[[Et,te.value]]),t[161]||(t[161]=K(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=et('<div class="canvas-size-callout" data-v-1d3dcef4><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1d3dcef4><circle cx="12" cy="12" r="9" data-v-1d3dcef4></circle><path d="M12 10v6" data-v-1d3dcef4></path><path d="M12 7h.01" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",La,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),pe(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=n=>Ae.value.notes=n),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=n=>Bt("notes",Ae.value.notes))},null,544),[[ke,Ae.value.notes]])])])):oe.value==="transitions"?(l(),i("div",ja,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((We=p.value)==null?void 0:We.transition)||"none",class:"select",onChange:t[31]||(t[31]=n=>je({transition:n.target.value}))},[...t[167]||(t[167]=[et('<option value="none" data-v-1d3dcef4>None</option><option value="fade" data-v-1d3dcef4>Fade</option><option value="slide" data-v-1d3dcef4>Slide</option><option value="zoom" data-v-1d3dcef4>Zoom</option><option value="flip" data-v-1d3dcef4>Flip</option>',5)])],40,Da),e("div",qa,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Oe=p.value)==null?void 0:Oe.duration)??0,class:"input",onChange:t[32]||(t[32]=n=>_t(n.target.value))},null,40,Ra),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Fa,[e("input",{type:"checkbox",checked:!!((ft=p.value)!=null&&ft.advanceOnMediaEnd),onChange:t[33]||(t[33]=n=>je({advanceOnMediaEnd:n.target.checked}))},null,40,Ua),t[170]||(t[170]=K(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",Oa,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",Va,[e("input",{type:"checkbox",checked:h.value.autoPlay,onChange:t[34]||(t[34]=n=>Ne({autoPlay:n.target.checked}))},null,40,Wa),t[173]||(t[173]=K(" Autoplay preview and exported presentation ",-1))]),e("label",Ga,[e("input",{type:"checkbox",checked:h.value.loop,onChange:t[35]||(t[35]=n=>Ne({loop:n.target.checked}))},null,40,Ha),t[174]||(t[174]=K(" Loop back to the first slide at the end ",-1))]),e("label",Ya,[e("input",{type:"checkbox",checked:h.value.showProgress,onChange:t[36]||(t[36]=n=>Ne({showProgress:n.target.checked}))},null,40,Qa),t[175]||(t[175]=K(" Show progress bar in preview ",-1))]),e("label",Ja,[e("input",{type:"checkbox",checked:h.value.showNavControls,onChange:t[37]||(t[37]=n=>Ne({showNavControls:n.target.checked}))},null,40,Xa),t[176]||(t[176]=K(" Show previous/next and dot navigation ",-1))]),e("label",Ka,[e("input",{type:"checkbox",checked:h.value.allowKeyboardNav,onChange:t[38]||(t[38]=n=>Ne({allowKeyboardNav:n.target.checked}))},null,40,Za),t[177]||(t[177]=K(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},mc=Qe(fc,[["__scopeId","data-v-1d3dcef4"]]),gc={class:"editor-toolbar"},bc={class:"toolbar-group"},hc={class:"toolbar-group"},yc=["data-tooltip","onClick"],xc={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wc={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kc={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Cc={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$c={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Sc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ic={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ac={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Mc={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ec={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Pc={class:"tool-label"},Tc={class:"toolbar-group"},Nc={class:"toolbar-group"},zc={class:"toolbar-group"},Bc={__name:"EditorToolbar",emits:["open-ai-project"],setup(A,{emit:s}){const r=s,c=nt();lt();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function h(y){c.setActiveTool(y)}return(y,b)=>(l(),i("div",gc,[e("div",bc,[e("button",{class:J(["tool-btn",I(c).activeTool==="select"&&"active"]),onClick:b[0]||(b[0]=L=>h("select")),"data-tooltip":"Select (V)"},[...b[7]||(b[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),b[23]||(b[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",hc,[(l(),i(Z,null,ve(p,L=>e("button",{key:L.id,class:J(["tool-btn",I(c).activeTool===L.id&&"active"]),"data-tooltip":L.tooltip,onClick:te=>h(L.id)},[L.icon==="text"?(l(),i("svg",xc,[...b[8]||(b[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):L.icon==="heading"?(l(),i("svg",wc,[...b[9]||(b[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):L.icon==="image"?(l(),i("svg",kc,[...b[10]||(b[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):L.icon==="shape"?(l(),i("svg",Cc,[...b[11]||(b[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):L.icon==="button"?(l(),i("svg",$c,[...b[12]||(b[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):L.icon==="hotspot"?(l(),i("svg",Sc,[...b[13]||(b[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):L.icon==="video"?(l(),i("svg",Ic,[...b[14]||(b[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):L.icon==="audio"?(l(),i("svg",Ac,[...b[15]||(b[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):L.icon==="quiz"?(l(),i("svg",Mc,[...b[16]||(b[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):L.icon==="chart"?(l(),i("svg",Ec,[...b[17]||(b[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):O("",!0),e("span",Pc,k(L.label),1)],10,yc)),64))]),b[24]||(b[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Tc,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:b[1]||(b[1]=L=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...b[18]||(b[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),b[25]||(b[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Nc,[e("button",{class:"tool-btn",onClick:b[2]||(b[2]=L=>I(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...b[19]||(b[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:b[3]||(b[3]=L=>I(c).zoomReset())},k(Math.round(I(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:b[4]||(b[4]=L=>I(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...b[20]||(b[20]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),b[26]||(b[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",zc,[e("button",{class:J(["tool-btn",I(c).showGrid&&"active"]),onClick:b[5]||(b[5]=L=>I(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...b[21]||(b[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:J(["tool-btn",I(c).snapToGrid&&"active"]),onClick:b[6]||(b[6]=L=>I(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...b[22]||(b[22]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},_c=Qe(Bc,[["__scopeId","data-v-d964cc0f"]]),Lc=["onMousedown"],jc={key:1,class:"selection-border locked-border"},Dc={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(A){const s=A,r=nt(),c=lt(),p=qn("canvasScale",B(1)),h=T(()=>r.projectId),y=T(()=>r.currentSlideId),b=T(()=>r.selectedElementIds.includes(s.element.id)),L=T(()=>s.element.locked),te=T(()=>s.element.visible!==!1),oe=T(()=>{const X=s.element.content||{};return!!(X.text||X.label||X.question||X.popupTitle||X.popupContent)});let V=!1,me=0,H=0,N=new Map;function a(X){if(!r.snapToGrid||!r.gridSize)return X;const de=r.gridSize;return Math.round(X/de)*de}function C(X){var ne;if(L.value||X.target.classList.contains("resize-handle"))return;const de=X.ctrlKey||X.metaKey||X.shiftKey;b.value?de&&r.selectElement(s.element.id,!0):r.selectElement(s.element.id,de),r.setActiveTool("select"),V=!1,me=X.clientX,H=X.clientY,N.clear();const le=(ne=c.getProject(h.value))==null?void 0:ne.slides.find(Ie=>Ie.id===y.value);le&&r.selectedElementIds.forEach(Ie=>{const ye=le.elements.find(z=>z.id===Ie);ye&&!ye.locked&&N.set(Ie,{x:ye.x,y:ye.y})}),window.addEventListener("mousemove",E),window.addEventListener("mouseup",q),X.stopPropagation()}function E(X){const de=(X.clientX-me)/p.value,le=(X.clientY-H)/p.value;!V&&(Math.abs(de)>3||Math.abs(le)>3)&&(V=!0),V&&N.forEach((ne,Ie)=>{const ye=ne.x+de,z=ne.y+le;c.updateElement(h.value,y.value,Ie,{x:ye,y:z},{persist:!1})})}function q(X){if(V){const de=(X.clientX-me)/p.value,le=(X.clientY-H)/p.value;N.forEach((ne,Ie)=>{c.updateElement(h.value,y.value,Ie,{x:a(ne.x+de),y:a(ne.y+le)},{persist:!1})}),c.commitProject(h.value)}V||!(X.ctrlKey||X.metaKey||X.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(s.element.id,!1),V=!1,window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",q)}const v=["n","ne","e","se","s","sw","w","nw"];let W=!1,ie="",$e=0,we=0,j=0,_=0,ce=0,ae=0;function ee(X,de){L.value||(X.stopPropagation(),X.preventDefault(),W=!0,ie=de,$e=X.clientX,we=X.clientY,j=s.element.width,_=s.element.height,ce=s.element.x,ae=s.element.y,window.addEventListener("mousemove",be),window.addEventListener("mouseup",$))}function be(X){if(!W)return;const de=p.value,le=(X.clientX-$e)/de,ne=(X.clientY-we)/de,Ie=20;let ye=ce,z=ae,M=j,R=_;if(ie.includes("e")&&(M=Math.max(Ie,j+le)),ie.includes("s")&&(R=Math.max(Ie,_+ne)),ie.includes("w")){const x=Math.max(Ie,j-le);ye=ce+(j-x),M=x}if(ie.includes("n")){const x=Math.max(Ie,_-ne);z=ae+(_-x),R=x}if(r.snapToGrid&&r.gridSize){const x=r.gridSize;M=Math.round(M/x)*x,R=Math.round(R/x)*x,ye=Math.round(ye/x)*x,z=Math.round(z/x)*x}c.updateElement(h.value,y.value,s.element.id,{x:ye,y:z,width:M,height:R})}function $(){W=!1,window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",$)}function D(){["text","heading"].includes(s.element.type)&&r.focusPropertiesSection("content")}const U=T(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:L.value?"not-allowed":"move",visibility:te.value?"visible":"hidden",userSelect:"none"}));function Y(X){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[X]||"auto"}function he(X="content"){r.focusPropertiesSection(X)}function Re(){const X=oe.value?"improve":s.element.type==="image"?"image":"generate";r.openAIPanel(X)}function Pe(){const X=c.duplicateElement(h.value,y.value,s.element.id);X&&(r.selectElement(X.id),r.focusPropertiesSection("geometry"))}function Le(){c.deleteElement(h.value,y.value,s.element.id),r.clearSelection()}return(X,de)=>(l(),i("div",{class:J(["element-wrapper",b.value&&"selected",L.value&&"locked"]),style:ge(U.value),onMousedown:C,onDblclick:D},[Rn(X.$slots,"default",{},void 0),b.value&&!L.value?(l(),i(Z,{key:0},[de[6]||(de[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:de[3]||(de[3]=qe(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:de[0]||(de[0]=le=>he("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:de[1]||(de[1]=le=>he("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:de[2]||(de[2]=le=>he("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Re},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Pe,title:"Duplicate element","aria-label":"Duplicate element"},[...de[4]||(de[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Le,title:"Delete element","aria-label":"Delete element"},[...de[5]||(de[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(Z,null,ve(v,le=>e("div",{key:le,class:J(["resize-handle",`handle-${le}`]),style:ge({cursor:Y(le)}),onMousedown:qe(ne=>ee(ne,le),["stop"])},null,46,Lc)),64))],64)):O("",!0),b.value&&L.value?(l(),i("div",jc)):O("",!0)],38))}},qc=Qe(Dc,[["__scopeId","data-v-d539ca8b"]]),Lt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,r=T(()=>s.element.content||{}),c=nt(),p=lt(),h=B(!1),y=B(null),b=B("");Ye(()=>r.value.text,V=>{h.value||(b.value=V||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function L(){c.selectedElementId===s.element.id&&(h.value=!0,En(()=>{if(y.value)if(y.value.focus(),typeof y.value.setSelectionRange=="function"){const V=y.value.value.length;y.value.setSelectionRange(V,V)}else{const V=document.createRange();V.selectNodeContents(y.value),V.collapse(!1);const me=window.getSelection();me.removeAllRanges(),me.addRange(V)}}))}function te(V){h.value&&V.stopPropagation()}function oe(){h.value=!1;const V=b.value;p.updateElement(c.projectId,c.currentSlideId,s.element.id,{content:{...s.element.content,text:V}})}return(V,me)=>h.value?pe((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:y,"onUpdate:modelValue":me[0]||(me[0]=H=>b.value=H),onBlur:oe,onMousedown:te,style:ge({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[ke,b.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:L,style:ge({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},k(b.value),37))}},Rc={key:0,class:"image-status image-loading"},Fc=["src","alt"],Uc={key:2,class:"image-placeholder"},Oc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Vc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,r=B(""),c=B(0),p=B("idle"),h=T(()=>{var te;return Array.isArray((te=s.element.content)==null?void 0:te.fallbackSrcs)?s.element.content.fallbackSrcs:[]});function y(){var te;r.value=((te=s.element.content)==null?void 0:te.src)||"",c.value=0,p.value=r.value?"loading":"empty"}function b(){p.value="loaded"}function L(){const te=h.value[c.value];if(te){c.value+=1,r.value=te,p.value="loading";return}p.value="error"}return Ye(()=>{var te,oe;return[(te=s.element.content)==null?void 0:te.src,JSON.stringify(((oe=s.element.content)==null?void 0:oe.fallbackSrcs)||[])]},()=>y(),{immediate:!0}),(te,oe)=>{var V,me,H;return l(),i("div",{class:"image-element",style:ge({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((V=A.element.content)==null?void 0:V.borderRadius)||0)+"px",border:`${((me=A.element.content)==null?void 0:me.borderWidth)||0}px solid ${((H=A.element.content)==null?void 0:H.borderColor)||"transparent"}`})},[p.value==="loading"?(l(),i("div",Rc,[...oe[0]||(oe[0]=[e("span",{class:"image-status-spinner"},null,-1),e("span",null,"Loading image…",-1)])])):O("",!0),r.value&&p.value!=="error"?(l(),i("img",{key:1,src:r.value,alt:A.element.content.alt||"",style:ge({width:"100%",height:"100%",objectFit:A.element.content.objectFit||"cover",display:p.value==="loaded"?"block":"none"}),draggable:"false",onLoad:b,onError:L},null,44,Fc)):O("",!0),p.value==="empty"||p.value==="error"?(l(),i("div",Uc,[(l(),i("svg",Oc,[...oe[1]||(oe[1]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),e("span",null,k(p.value==="error"?"Image unavailable":"Image"),1)])):O("",!0)],4)}}},Wc=Qe(Vc,[["__scopeId","data-v-cd42b1c3"]]),Gc={class:"shape-element",style:{width:"100%",height:"100%"}},Hc=["width","height"],Yc=["points","fill","stroke","stroke-width"],Qc={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,r=T(()=>s.element.content||{}),c=T(()=>{const y=r.value.shapeType||"rectangle",b={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return y==="circle"?{...b,borderRadius:"50%"}:y==="rectangle"?{...b,borderRadius:(r.value.borderRadius||0)+"px"}:b}),p=T(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),h=T(()=>{const y=s.element.width||150,b=s.element.height||100,L=r.value.shapeType;if(L==="triangle")return`${y/2},0 ${y},${b} 0,${b}`;if(L==="diamond")return`${y/2},0 ${y},${b/2} ${y/2},${b} 0,${b/2}`;if(L==="arrow")return`0,${b*.3} ${y*.6},${b*.3} ${y*.6},0 ${y},${b/2} ${y*.6},${b} ${y*.6},${b*.7} 0,${b*.7}`;if(L==="star"){const te=y/2,oe=b/2,V=Math.min(y,b)/2,me=V*.4;let H="";for(let N=0;N<10;N++){const a=(N*36-90)*Math.PI/180,C=N%2===0?V:me;H+=`${te+C*Math.cos(a)},${oe+C*Math.sin(a)} `}return H.trim()}return""});return(y,b)=>(l(),i("div",Gc,[p.value?(l(),i("svg",{key:1,width:A.element.width,height:A.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:h.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,Yc)],8,Hc)):(l(),i("div",{key:0,style:ge(c.value)},null,4))]))}},Jc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,r=T(()=>s.element.content||{}),c=T(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},h=p[r.value.variant||"primary"]||p.primary;return{...h,background:r.value.bgColor||h.background,color:r.value.textColor||h.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:h.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(p,h)=>(l(),i("div",{class:"button-element",style:ge({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},k(r.value.label||"Button"),5))}},Xc={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Kc={class:"popup-header"},Zc={class:"popup-body"},ep={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,r=T(()=>s.element.content||{}),c=B(!1);function p(h){h.stopPropagation(),c.value=!c.value}return(h,y)=>(l(),i("div",Xc,[e("div",{class:"hotspot-btn",style:ge({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:qe(p,["stop"])},k(r.value.icon||"?"),5),mt(Mt,{name:"fade"},{default:rt(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:ge({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",Kc,[e("strong",null,k(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:y[0]||(y[0]=qe(b=>c.value=!1,["stop"]))},"×")]),e("div",Zc,k(r.value.popupContent||"Add your content in the properties panel."),1)],4)):O("",!0)]),_:1})]))}},tp=Qe(ep,[["__scopeId","data-v-ef5f15f6"]]),op={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},np=["src"],lp=["src","poster","autoplay","controls","loop","muted"],ip={key:2,class:"video-placeholder"},ap={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},sp={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,r=T(()=>s.element.content||{}),c=T(()=>{const h=r.value.src||"";return h.includes("youtube")||h.includes("youtu.be")}),p=T(()=>{var y,b;const h=r.value.src||"";if(c.value){const L=(y=h.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:y[1];return L?`https://www.youtube.com/embed/${L}`:""}if(h.includes("vimeo.com")){const L=(b=h.match(/vimeo\.com\/(\d+)/))==null?void 0:b[1];return L?`https://player.vimeo.com/video/${L}`:""}return""});return(h,y)=>(l(),i("div",op,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,np)):r.value.src&&!p.value?(l(),i("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:ge({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,lp)):(l(),i("div",ip,[(l(),i("svg",ap,[...y[0]||(y[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),y[1]||(y[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},rp=Qe(sp,[["__scopeId","data-v-dfea1a16"]]),up=["stroke"],dp=["src","controls","autoplay","loop"],cp={key:1,style:{"font-size":"11px",color:"#aaa"}},pp={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(A){return(s,r)=>{var c,p,h,y,b,L,te,oe,V;return l(),i("div",{class:"audio-element",style:ge({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=A.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=A.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((h=A.element.content)==null?void 0:h.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,up)),e("span",{style:ge({fontSize:"13px",color:((y=A.element.content)==null?void 0:y.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},k(((b=A.element.content)==null?void 0:b.label)||"Audio Player"),5),(L=A.element.content)!=null&&L.src?(l(),i("audio",{key:0,src:A.element.content.src,controls:((te=A.element.content)==null?void 0:te.controls)!==!1,autoplay:(oe=A.element.content)==null?void 0:oe.autoplay,loop:(V=A.element.content)==null?void 0:V.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=qe(()=>{},["stop"]))},null,40,dp)):(l(),i("span",cp,"No source"))],4)}}},vp={class:"quiz-options"},fp=["onClick"],mp={class:"opt-letter"},gp={class:"opt-text"},bp={key:0},hp={class:"quiz-actions"},yp=["disabled"],xp={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(A){const s=A,r=T(()=>s.element.content||{}),c=B(null),p=B(!1);function h(te){p.value||(c.value=te)}function y(){c.value!==null&&(p.value=!0)}function b(){c.value=null,p.value=!1}const L=T(()=>p.value&&c.value===(r.value.correctIndex??0));return(te,oe)=>(l(),i("div",{class:"quiz-element",style:ge({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:ge({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},k(r.value.question||"Question text…"),5),e("div",vp,[(l(!0),i(Z,null,ve(r.value.options||[],(V,me)=>(l(),i("div",{key:me,class:J(["quiz-opt",c.value===me&&"selected",p.value&&me===r.value.correctIndex&&"correct",p.value&&c.value===me&&me!==r.value.correctIndex&&"wrong"]),onClick:H=>h(me)},[e("span",mp,k(String.fromCharCode(65+me)),1),e("span",gp,k(V),1)],10,fp))),128))]),p.value?(l(),i("div",{key:0,class:J(["quiz-feedback",L.value?"correct":"wrong"])},[K(k(L.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!L.value&&r.value.explanation?(l(),i("span",bp,k(r.value.explanation),1)):O("",!0)],2)):O("",!0),e("div",hp,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:b},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:y},"Submit",8,yp))])],4))}},wp=Qe(xp,[["__scopeId","data-v-ca2bd187"]]),kp={key:0,class:"canvas-empty"},Cp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},$p={key:0,class:"canvas-device-frame","aria-hidden":"true"},Sp=["value"],Ip={class:"canvas-guide-label"},Ap={key:5,class:"drop-hint"},Mp={class:"canvas-info-bar"},Ep=["disabled"],Pp={class:"slide-index"},Tp=["disabled"],Np={key:0},zp={__name:"EditorCanvas",setup(A){const s=nt(),r=lt(),c=B(null),p=B(null),h=B(1),y=T(()=>h.value*s.zoomLevel);Un("canvasScale",y);const b=T(()=>r.getProject(s.projectId)),L=T(()=>Pt(b.value)),te=T(()=>Tn(b.value)),oe=T(()=>L.value.width),V=T(()=>L.value.height),me=T(()=>Nn(oe.value,V.value)),H=T(()=>{var g,w;return(w=(g=b.value)==null?void 0:g.slides)==null?void 0:w.find(Q=>Q.id===s.currentSlideId)}),N=T(()=>{var g;return[...((g=b.value)==null?void 0:g.slides)||[]].sort((w,Q)=>w.order-Q.order)}),a=T(()=>N.value.findIndex(g=>g.id===s.currentSlideId)),C=T(()=>{var g;return{autoPlay:!1,motionPresets:[],...((g=b.value)==null?void 0:g.settings)||{}}}),E=T(()=>(Array.isArray(C.value.motionPresets)?C.value.motionPresets:[]).filter(g=>g.scope==="group")),q=T(()=>{const g=new Set(s.selectedElementIds);return we.value.filter(w=>g.has(w.id))}),v=B(""),W=T(()=>H.value?H.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:C.value.autoPlay&&Number(H.value.duration||0)>0?{label:`Auto ${Number(H.value.duration).toFixed(Number(H.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function ie(){const g=E.value.find(Q=>Q.id===v.value);if(!g||!q.value.length)return;[...q.value].sort((Q,G)=>(Q.y||0)!==(G.y||0)?(Q.y||0)-(G.y||0):(Q.x||0)-(G.x||0)).forEach((Q,G)=>{if(g.type==="auto"){r.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[{type:g.type,delay:Math.max(0,Number(g.delay)||0)+G*Math.max(0,Number(g.stepDelay)||0),duration:Math.max(.1,Number(g.duration)||.72)}]})}),r.updateProject(s.projectId,{settings:{...C.value,motionPresets:(C.value.motionPresets||[]).map(Q=>Q.id===g.id?{...Q,usageCount:Math.max(0,Number(Q.usageCount||0))+1,lastUsedAt:Date.now()}:Q)}})}function $e(){if(!E.value.length){v.value="";return}E.value.some(g=>g.id===v.value)||(v.value=E.value[0].id)}const we=T(()=>{var g;return[...((g=H.value)==null?void 0:g.elements)||[]].sort((w,Q)=>(w.zIndex||0)-(Q.zIndex||0))}),j=T(()=>{const g=H.value;return g?g.backgroundType==="gradient"&&g.backgroundGradient?{background:g.backgroundGradient}:g.backgroundType==="image"&&g.backgroundImage?{backgroundImage:`url(${g.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:g.background||"#fff"}:{background:"#fff"}}),_=T(()=>`scale(${y.value})`);function ce(){if(!c.value)return;const{clientWidth:g,clientHeight:w}=c.value,Q=(g-80)/oe.value,G=(w-80)/V.value;h.value=Math.min(Q,G,1)}let ae=null;In(()=>{ce(),ae=new ResizeObserver(ce),c.value&&ae.observe(c.value),$e()}),An(()=>ae==null?void 0:ae.disconnect()),Ye(E,()=>{$e()},{deep:!0,immediate:!0}),Ye(L,()=>{ce()},{deep:!0});const ee=B({x:0,y:0}),be=B({x:0,y:0}),$=B(!1),D=B(!1),U=B(!1),Y=B(null),he=T(()=>{var g,w;return((g=te.value)==null?void 0:g.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=te.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),Re=T(()=>{if(!he.value)return null;if(he.value.tone==="mobile"){const Q=oe.value*.08,G=V.value*.05;return{x:Q,y:G,width:oe.value-Q*2,height:V.value-G*2}}const g=oe.value*.08,w=V.value*.08;return{x:g,y:w,width:oe.value-g*2,height:V.value-w*2}}),Pe=T(()=>{if(!Re.value)return[];const g=Re.value;return we.value.filter(w=>w.visible!==!1).filter(w=>{const Q=Number(w.x||0),G=Number(w.y||0),Se=Q+Number(w.width||0),Ee=G+Number(w.height||0);return Q<g.x||G<g.y||Se>g.x+g.width||Ee>g.y+g.height}).map(w=>w.id)}),Le=T(()=>s.selectedElementIds.filter(g=>Pe.value.includes(g)).length),X=T(()=>Pe.value.length),de=T(()=>!he.value||!X.value?null:Le.value?`${Le.value} selected ${Le.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`:`${X.value} ${X.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`),le=T(()=>{if(!$.value)return null;const g=Math.min(ee.value.x,be.value.x),w=Math.min(ee.value.y,be.value.y),Q=Math.abs(be.value.x-ee.value.x),G=Math.abs(be.value.y-ee.value.y);return{x:g,y:w,width:Q,height:G}});function ne(g){!$.value&&(g.target===p.value||g.target===g.currentTarget)&&s.clearSelection()}function Ie(g){return g?Array.from(g.files||[]).some(w=>w.type.startsWith("image/")):!1}function ye(g){return g?Array.from(g.types||[]).includes(jt):!1}function z(g,w,Q){return Math.min(Math.max(g,w),Q)}function M(g,w,Q){const G=Dt(g),Se=z(w-G.width/2,0,Math.max(0,oe.value-G.width)),Ee=z(Q-G.height/2,0,Math.max(0,V.value-G.height));return{x:Se,y:Ee,bounds:G}}function R(g){if(!ye(g))return null;try{const w=g.getData(jt),Q=w?JSON.parse(w):null;return Q!=null&&Q.id&&r.getContentBlocks(s.projectId).find(G=>G.id===Q.id)||null}catch{return null}}function x(g,w,Q){if(!p.value||!Q){Y.value=null;return}const G=p.value.getBoundingClientRect(),Se=(g-G.left)/y.value,Ee=(w-G.top)/y.value,Fe=M(Q,Se,Ee);Y.value={block:Q,x:Fe.x,y:Fe.y,bounds:Fe.bounds}}function xe(g,w,Q){if(!g||!g.type.startsWith("image/"))return;const G=new FileReader;G.onload=()=>{const Se=String(G.result||"");if(!Se)return;const Ee=new Image;Ee.onload=()=>{const Fe=p.value.getBoundingClientRect(),De=(w-Fe.left)/y.value,re=(Q-Fe.top)/y.value,Ue=Math.min(420/Ee.width,280/Ee.height,1),_e=Math.max(120,Math.round(Ee.width*Ue)),ze=Math.max(80,Math.round(Ee.height*Ue)),tt=Math.max(0,Math.min(oe.value-_e,Math.round(De-_e/2))),ct=Math.max(0,Math.min(V.value-ze,Math.round(re-ze/2))),vt=r.addElement(s.projectId,s.currentSlideId,"image",{x:tt,y:ct,width:_e,height:ze,content:{src:Se,alt:g.name,objectFit:"cover"}});vt&&(s.selectElement(vt.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Ee.src=Se},G.readAsDataURL(g)}function Ae(g){const w=Ie(g.dataTransfer),Q=ye(g.dataTransfer);!w&&!Q||(g.preventDefault(),g.dataTransfer.dropEffect="copy",D.value=w,U.value=Q,Q&&x(g.clientX,g.clientY,R(g.dataTransfer)))}function je(g){var w;(w=g.currentTarget)!=null&&w.contains(g.relatedTarget)||(D.value=!1,U.value=!1,Y.value=null)}function Ne(g){const w=Ie(g.dataTransfer),Q=ye(g.dataTransfer);if(!w&&!Q)return;if(g.preventDefault(),D.value=!1,U.value=!1,Y.value=null,Q){try{const Se=R(g.dataTransfer);if(!Se)return;const Ee=p.value.getBoundingClientRect(),Fe=(g.clientX-Ee.left)/y.value,De=(g.clientY-Ee.top)/y.value,re=M(Se,Fe,De),Ce=r.insertContentBlock(s.projectId,s.currentSlideId,Se.id,{x:re.x,y:re.y});Ce.length&&(s.setSelection(Ce.map(Xe=>Xe.id)),s.setActiveTool("select"),s.focusPropertiesSection("content"))}catch(Se){console.warn("Failed to drop block onto canvas.",Se)}return}const G=Array.from(g.dataTransfer.files||[]).find(Se=>Se.type.startsWith("image/"));G&&xe(G,g.clientX,g.clientY)}function Ve(g){if(q.value.length<2)return;const w=[...q.value].sort((re,Ce)=>(re.zIndex||0)-(Ce.zIndex||0)),Q=Math.min(...w.map(re=>Number(re.x||0))),G=Math.min(...w.map(re=>Number(re.y||0))),Se=Math.max(...w.map(re=>Number(re.x||0)+Number(re.width||0))),Ee=Math.max(...w.map(re=>Number(re.y||0)+Number(re.height||0))),Fe=Q+(Se-Q)/2,De=G+(Ee-G)/2;if(g==="align-left"&&w.forEach(re=>r.updateElement(s.projectId,s.currentSlideId,re.id,{x:Q},{persist:!1})),g==="align-center"&&w.forEach(re=>{const Ce=Number(re.width||0);r.updateElement(s.projectId,s.currentSlideId,re.id,{x:Fe-Ce/2},{persist:!1})}),g==="align-right"&&w.forEach(re=>{const Ce=Number(re.width||0);r.updateElement(s.projectId,s.currentSlideId,re.id,{x:Se-Ce},{persist:!1})}),g==="align-top"&&w.forEach(re=>r.updateElement(s.projectId,s.currentSlideId,re.id,{y:G},{persist:!1})),g==="align-middle"&&w.forEach(re=>{const Ce=Number(re.height||0);r.updateElement(s.projectId,s.currentSlideId,re.id,{y:De-Ce/2},{persist:!1})}),g==="align-bottom"&&w.forEach(re=>{const Ce=Number(re.height||0);r.updateElement(s.projectId,s.currentSlideId,re.id,{y:Ee-Ce},{persist:!1})}),g==="distribute-horizontal"){const re=[...w].sort((_e,ze)=>(_e.x||0)-(ze.x||0)),Ce=re.reduce((_e,ze)=>_e+Number(ze.width||0),0),Xe=re.length>1?(Se-Q-Ce)/(re.length-1):0;let Ue=Q;re.forEach(_e=>{r.updateElement(s.projectId,s.currentSlideId,_e.id,{x:Ue},{persist:!1}),Ue+=Number(_e.width||0)+Xe})}if(g==="distribute-vertical"){const re=[...w].sort((_e,ze)=>(_e.y||0)-(ze.y||0)),Ce=re.reduce((_e,ze)=>_e+Number(ze.height||0),0),Xe=re.length>1?(Ee-G-Ce)/(re.length-1):0;let Ue=G;re.forEach(_e=>{r.updateElement(s.projectId,s.currentSlideId,_e.id,{y:Ue},{persist:!1}),Ue+=Number(_e.height||0)+Xe})}r.commitProject(s.projectId)}function pt(g){const w=s.activeTool;if(g.target!==p.value&&g.target!==g.currentTarget)return;g.preventDefault(),g.stopPropagation();const Q=p.value.getBoundingClientRect(),G=(g.clientX-Q.left)/y.value,Se=(g.clientY-Q.top)/y.value;if(w==="select"){$.value=!0,ee.value={x:G,y:Se},be.value={x:G,y:Se};const De=Ce=>{be.value={x:(Ce.clientX-Q.left)/y.value,y:(Ce.clientY-Q.top)/y.value}},re=()=>{window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",re);const Ce=le.value;if(Ce&&(Ce.width>2||Ce.height>2)){const Xe=we.value.filter(Ue=>{const _e=Ue.x,ze=Ue.y,tt=Ue.width||100,ct=Ue.height||100;return _e<Ce.x+Ce.width&&_e+tt>Ce.x&&ze<Ce.y+Ce.height&&ze+ct>Ce.y}).map(Ue=>Ue.id);Xe.length>0?s.setSelection(Xe):s.clearSelection()}else s.clearSelection();setTimeout(()=>{$.value=!1},0)};window.addEventListener("mousemove",De),window.addEventListener("mouseup",re);return}const Ee=De=>s.snapToGrid?Math.round(De/s.gridSize)*s.gridSize:De,Fe=r.addElement(s.projectId,s.currentSlideId,w,{x:Ee(G-75),y:Ee(Se-40)});Fe&&(s.selectElement(Fe.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const Je=T(()=>{if(!s.showGrid)return{};const g=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${g}px ${g}px`}}),at={text:Lt,heading:Lt,image:Wc,shape:Qc,button:Jc,hotspot:tp,video:rp,audio:pp,quiz:wp,chart:il,divider:"div"};function st(g){return at[g]||Lt}function it(g){var w,Q;return g.type!=="divider"?{}:{borderTop:`${((w=g.content)==null?void 0:w.thickness)||2}px solid ${((Q=g.content)==null?void 0:Q.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const Ge=B({show:!1,x:0,y:0,elId:null});function yt(g,w){g.preventDefault(),Ge.value={show:!0,x:g.clientX,y:g.clientY,elId:w},s.selectElement(w),setTimeout(()=>window.addEventListener("click",ut,{once:!0}),0)}function ut(){Ge.value.show=!1}function xt(){if(Ge.value.elId){const g=r.duplicateElement(s.projectId,s.currentSlideId,Ge.value.elId);g&&s.selectElement(g.id)}ut()}function wt(){Ge.value.elId&&(r.deleteElement(s.projectId,s.currentSlideId,Ge.value.elId),s.clearSelection()),ut()}function dt(){Ge.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,Ge.value.elId,"up"),ut()}function kt(){Ge.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,Ge.value.elId,"down"),ut()}function Ct(){const g=a.value,w=r.addSlide(s.projectId,g);w&&s.setCurrentSlide(w.id)}function $t(){const g=a.value;g>0&&s.setCurrentSlide(N.value[g-1].id)}function St(){const g=a.value;g<N.value.length-1&&s.setCurrentSlide(N.value[g+1].id)}return(g,w)=>{var Q;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[H.value?(l(),i(Z,{key:1},[e("div",{class:J(["canvas-zoom-wrapper",[he.value&&`canvas-zoom-wrapper-${he.value.tone}`]]),style:ge({transform:_.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:ge({width:oe.value+"px",height:V.value+"px",...j.value,...Je.value}),onClick:ne,onMousedown:pt,onDragover:Ae,onDragleave:je,onDrop:Ne,onContextmenu:w[3]||(w[3]=qe(()=>{},["prevent"]))},[he.value?(l(),i("div",$p)):O("",!0),I(s).multiSelection&&E.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=qe(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),pe(e("select",{"onUpdate:modelValue":w[0]||(w[0]=G=>v.value=G),class:"selection-preset-select"},[(l(!0),i(Z,null,ve(E.value,G=>(l(),i("option",{key:G.id,value:G.id},k(G.name),9,Sp))),128))],512),[[At,v.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:qe(ie,["stop"])},"Apply")],32)):O("",!0),de.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=qe(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,k(de.value),1)],32)):O("",!0),Y.value?(l(),i("div",{key:3,class:"block-drop-preview",style:ge({left:`${Y.value.x}px`,top:`${Y.value.y}px`,width:`${Y.value.bounds.width}px`,height:`${Y.value.bounds.height}px`})},[(l(!0),i(Z,null,ve(Y.value.block.elements,(G,Se)=>{var Ee,Fe,De,re;return l(),i("div",{key:`${Y.value.block.id}-preview-${Se}`,class:J(["block-drop-preview-el",`block-drop-preview-${G.type}`]),style:ge({left:`${Number(G.x||0)-Y.value.bounds.minX}px`,top:`${Number(G.y||0)-Y.value.bounds.minY}px`,width:`${Number(G.width||0)}px`,height:`${Number(G.height||0)}px`,borderRadius:G.type==="shape"&&((Ee=G.content)==null?void 0:Ee.shapeType)==="circle"?"50%":`${Number(((Fe=G.content)==null?void 0:Fe.borderRadius)||12)}px`,background:G.type==="shape"?((De=G.content)==null?void 0:De.fillColor)||"rgba(108,71,255,.18)":G.type==="button"?((re=G.content)==null?void 0:re.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(G.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(G.type)?(l(),i(Z,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):O("",!0)],6)}),128))],4)):O("",!0),(l(!0),i(Z,null,ve(we.value,G=>(l(),He(qc,{key:G.id,element:G,onContextmenu:qe(Se=>yt(Se,G.id),["stop"])},{default:rt(()=>[(l(),He(Fn(st(G.type)),{element:G,style:ge(G.type==="divider"?it(G):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),he.value?(l(),i("div",{key:4,class:J(["canvas-guide",[`canvas-guide-${he.value.tone}`,X.value&&"canvas-guide-warning-state"]]),style:ge(he.value.style),"aria-hidden":"true"},[e("span",Ip,k(he.value.label)+" · "+k(me.value),1)],6)):O("",!0),I(s).activeTool!=="select"||D.value||U.value?(l(),i("div",Ap,k(U.value?"Drop block to insert it here":D.value?"Drop image to insert it on this slide":`Click anywhere to add ${I(s).activeTool}`),1)):O("",!0),$.value&&le.value?(l(),i("div",{key:6,class:"selection-marquee",style:ge({left:le.value.x+"px",top:le.value.y+"px",width:le.value.width+"px",height:le.value.height+"px"})},null,4)):O("",!0)],36)],6),e("div",Mp,[e("button",{class:"bar-btn",onClick:Ct},"Add page"),e("button",{class:"bar-btn icon",onClick:$t,disabled:a.value<=0},"◀",8,Ep),e("span",Pp,k(a.value+1)+" / "+k(N.value.length),1),e("button",{class:"bar-btn icon",onClick:St,disabled:a.value>=N.value.length-1},"▶",8,Tp),e("span",null,k(oe.value)+" × "+k(V.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,k(((Q=H.value.elements)==null?void 0:Q.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:J(["playback-badge",`playback-badge-${W.value.tone}`])},k(W.value.label),3),I(s).hasSelection?(l(),i("span",Np,"· "+k(I(s).selectedElementIds.length)+" selected",1)):O("",!0),I(s).multiSelection?(l(),i(Z,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=G=>Ve("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=G=>Ve("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=G=>Ve("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=G=>Ve("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=G=>Ve("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=G=>Ve("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=G=>Ve("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=G=>Ve("distribute-vertical"))},"Space V")],64)):O("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=G=>I(s).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",kp,[(l(),i("svg",Cp,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),He(Mn,{to:"body"},[Ge.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:ge({left:Ge.value.x+"px",top:Ge.value.y+"px"})},[e("button",{class:"ctx-item",onClick:xt},"Duplicate"),e("button",{class:"ctx-item",onClick:dt},"Bring Forward"),e("button",{class:"ctx-item",onClick:kt},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:wt},"Delete")],4)):O("",!0)]))],512)}}},Bp=Qe(zp,[["__scopeId","data-v-e7450e9c"]]),_p={class:"ai-panel"},Lp={class:"ai-mode-tabs"},jp=["onClick"],Dp={class:"ai-content"},qp={class:"form-group"},Rp={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},Fp={key:0,class:"form-group"},Up={key:1,class:"form-group"},Op={class:"layout-label-row"},Vp={class:"layout-current-hint"},Wp={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},Gp=["onClick"],Hp={class:"layout-preset-title"},Yp={class:"layout-preset-hint"},Qp={key:2,class:"form-group"},Jp={key:3,class:"form-group"},Xp={class:"layout-label-row"},Kp={class:"layout-current-hint"},Zp={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},ev={key:4,class:"form-group"},tv={class:"layout-label-row"},ov={class:"layout-current-hint"},nv={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},lv=["onClick"],iv={class:"layout-preset-title"},av={class:"layout-preset-hint"},sv={class:"form-group"},rv={class:"form-group"},uv={class:"prompt-label-row"},dv={key:1,class:"prompt-auto-badge"},cv={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},pv={key:6,class:"selected-source-card"},vv={class:"result-header"},fv={class:"source-count-badge"},mv={class:"selected-source-preview"},gv={class:"selected-source-actions"},bv=["disabled"],hv=["disabled"],yv={key:0,class:"spinner"},xv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wv={key:7,class:"creative-options-wrap"},kv={class:"result-header"},Cv={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},$v={key:1,class:"creative-options-list"},Sv={class:"creative-title"},Iv={class:"creative-angle"},Av=["onClick"],Mv={class:"form-group"},Ev={class:"quiz-config-row"},Pv={class:"form-group",style:{flex:"1"}},Tv={class:"form-group",style:{flex:"1"}},Nv={class:"form-group"},zv={class:"qtype-btns"},Bv=["onClick"],_v={class:"qtype-icon"},Lv={class:"form-group"},jv={class:"form-group"},Dv={class:"prompt-label-row"},qv={key:1,class:"prompt-auto-badge"},Rv=["disabled"],Fv={key:0,class:"spinner"},Uv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ov={key:0,class:"quiz-results"},Vv={class:"quiz-results-header"},Wv={class:"form-label"},Gv={class:"quiz-header-actions"},Hv={class:"regen-row"},Yv=["disabled"],Qv={key:0,class:"spinner spinner-sm"},Jv={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Xv=["disabled"],Kv={class:"quiz-card-header"},Zv={class:"quiz-card-check"},e1=["onUpdate:modelValue"],t1={class:"q-num"},o1={class:"q-badges"},n1={class:"badge type-badge"},l1={class:"q-question"},i1={class:"q-options"},a1={class:"q-option-letter"},s1={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},r1={key:0,class:"q-explanation"},u1=["disabled"],d1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},c1=["disabled"],p1={key:0,class:"spinner"},v1={key:0,class:"selected-text-preview"},f1={class:"text-preview"},m1={key:1,class:"ai-hint"},g1={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},b1=["disabled"],h1={key:0,class:"spinner"},y1={key:0,class:"selected-text-preview"},x1={class:"text-preview"},w1={key:1,class:"ai-hint"},k1={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},C1=["disabled"],$1={key:0,class:"spinner"},S1={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},I1={class:"result-header"},A1={class:"result-actions"},M1=["disabled"],E1={class:"textarea result-display"},P1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},T1=["disabled"],N1={key:0,class:"spinner"},z1={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},B1={class:"textarea result-display",style:{color:"var(--color-primary)"}},_1={key:6,class:"ai-settings"},L1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},j1=["value"],D1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},q1=["value"],R1={key:0,class:"demo-notice"},F1={key:7,class:"result-area"},U1={class:"result-header"},O1={class:"result-pre"},V1={class:"result-actions"},W1=["disabled"],G1={key:8,class:"ai-error"},H1={__name:"AIAssistant",setup(A){const s=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'}],r={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(u,o="classic"){const f=String(u||o||"classic").trim().toLowerCase();return s.some(S=>S.id===f)?f:o}function p(u,o=""){return String(u??o).replace(/^\s*[-•]\s*/,"").trim()||o}function h(u){return(Array.isArray(u)?u:typeof u=="string"?u.split(`
`):[]).map(f=>p(f)).filter(Boolean)}function y(u,o,f){const S=[...u];for(;S.length<o;)S.push(f(S.length));return S.slice(0,o)}function b(u,o){const f=Array.isArray(u)?u.map((m,ue)=>({title:p(m==null?void 0:m.title,`Card ${ue+1}`),body:p((m==null?void 0:m.body)||(m==null?void 0:m.text)||(m==null?void 0:m.description),"Add supporting detail.")})).filter(m=>m.title||m.body):[],S=o.map((m,ue)=>({title:`Point ${ue+1}`,body:m}));return y(f.length?f:S,3,m=>({title:`Point ${m+1}`,body:"Add supporting detail."}))}function L(u,o){const f=h(u==null?void 0:u.leftPoints),S=h(u==null?void 0:u.rightPoints),m=o.slice(0,Math.max(1,Math.ceil(o.length/2))),ue=o.slice(Math.max(1,Math.ceil(o.length/2)));return{leftTitle:p(u==null?void 0:u.leftTitle,"Option A"),leftPoints:y(f.length?f:m,3,Te=>`Left point ${Te+1}`),rightTitle:p(u==null?void 0:u.rightTitle,"Option B"),rightPoints:y(S.length?S:ue,3,Te=>`Right point ${Te+1}`)}}function te(u,o){const f=Array.isArray(u)?u.map((m,ue)=>({value:p(m==null?void 0:m.value,`${ue+1}`),label:p(m==null?void 0:m.label,`Metric ${ue+1}`)})).filter(m=>m.value||m.label):[],S=o.map((m,ue)=>{const[Te,...Ke]=m.split(/[:\-]/);return{value:p(Te,`${ue+1}`),label:p(Ke.join(" ").trim(),m)}});return y(f.length?f:S,3,m=>({value:`${m+1}`,label:`Metric ${m+1}`}))}function oe(u,o){const f=Array.isArray(u)?u.map((m,ue)=>({title:p(m==null?void 0:m.title,`Phase ${ue+1}`),detail:p((m==null?void 0:m.detail)||(m==null?void 0:m.description),"Explain the milestone.")})).filter(m=>m.title||m.detail):[],S=o.map((m,ue)=>({title:`Phase ${ue+1}`,detail:m}));return y(f.length?f:S,4,m=>({title:`Phase ${m+1}`,detail:"Explain the milestone."}))}function V(u,o){const f=Array.isArray(u)?u.map((m,ue)=>({question:p(m==null?void 0:m.question,`Question ${ue+1}?`),answer:p(m==null?void 0:m.answer,"Add the short answer here.")})).filter(m=>m.question||m.answer):[],S=o.map((m,ue)=>({question:`Question ${ue+1}?`,answer:m}));return y(f.length?f:S,3,m=>({question:`Question ${m+1}?`,answer:"Add the short answer here."}))}function me(u,o){const f=Array.isArray(u)?u.map((m,ue)=>({title:p(m==null?void 0:m.title,`Step ${ue+1}`),detail:p((m==null?void 0:m.detail)||(m==null?void 0:m.description),"Add the step detail here.")})).filter(m=>m.title||m.detail):[],S=o.map((m,ue)=>({title:`Step ${ue+1}`,detail:m}));return y(f.length?f:S,3,m=>({title:`Step ${m+1}`,detail:"Add the step detail here."}))}const H=Wn(),N=nt(),a=lt(),C=B("generate"),E=B(""),q=B(""),v=B("");Ye(C,()=>{v.value=""}),Ye(()=>N.aiPanelMode,u=>{u&&(C.value=u)},{immediate:!0});const W=B(4),ie=B("general"),$e=B("Spanish"),we=B(""),j=B(""),_=B(""),ce=B(!1),ae=B("single"),ee=B("classic"),be=B("mixed"),$=B(5),D=B("slide"),U=B([]),Y=B(""),he=T(()=>s.find(u=>u.id===ee.value)||s[0]),Re=T(()=>{const u=q.value.trim()||"[your topic]";if(ae.value==="deck"){let S=`Create a complete ${$.value}-slide learning deck about "${u}".`;return j.value.trim()&&(S+=`
Additional context: ${j.value.trim()}`),S+=`
Deck layout strategy: ${be.value}`,be.value==="single"?S+=`
Use the ${ee.value} layout for every slide.`:S+=`
Mix layouts across the deck when appropriate.`,S+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process" }] }`,S+=`
Make each slide distinct, logically sequenced, and specific to "${u}".`,S}let f=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[ie.value]||"educational slide"} about "${u}".`;return j.value.trim()&&(f+=`
Additional context: ${j.value.trim()}`),f+=`
Layout mode: ${ee.value}`,f+=`
Layout instruction: ${he.value.promptHint}`,f+=`
Return ONLY valid JSON matching this shape: ${he.value.schema}`,f+=`
Make all content specific to "${u}" — no generic placeholders.`,f});Ye(Re,u=>{ce.value||(_.value=u)},{immediate:!0});function Pe(){_.value=Re.value,ce.value=!1}const Le=B(""),X=B("intermediate"),de=B("multiple-choice"),le=B(""),ne=B([]),Ie=B(""),ye=B(!1),z=T(()=>{const u=Le.value.trim()||"[your topic]",o={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},f={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let S=`Generate ${W.value} ${o[X.value]} ${f[de.value]} quiz questions about "${u}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return le.value.trim()&&(S+=`
Learning objective: ${le.value.trim()}`),S});Ye(z,u=>{ye.value||(Ie.value=u)},{immediate:!0});function M(){Ie.value=z.value,ye.value=!1}const R=T(()=>a.getProject(N.projectId)),x=T(()=>{var u,o;return(o=(u=R.value)==null?void 0:u.slides)==null?void 0:o.find(f=>f.id===N.currentSlideId)}),xe=T(()=>{var u,o;return N.selectedElementId?(o=(u=x.value)==null?void 0:u.elements)==null?void 0:o.find(f=>f.id===N.selectedElementId):null}),Ae=T(()=>{var o;const u=new Set(N.selectedElementIds);return(((o=x.value)==null?void 0:o.elements)||[]).filter(f=>{var S;return u.has(f.id)&&typeof((S=f==null?void 0:f.content)==null?void 0:S.text)=="string"&&f.content.text.trim()})}),je=T(()=>Ae.value.map(u=>u.content.text.trim()).filter(Boolean).join(`

`));async function Ne(){if(!q.value.trim()&&!_.value.trim())return;if(v.value="",U.value=[],Y.value="",ae.value==="deck"){const o=await H.generateSlideDeck(q.value,$.value,{objective:j.value,customPrompt:_.value,layoutStrategy:be.value,layoutMode:ee.value});if(o!=null&&o.length){const f=o.map(S=>Ve(S));v.value=JSON.stringify({slides:f},null,2),w(f,{replaceGenerated:!0})}return}if(D.value==="options"){await Se();return}const u=await H.generateSlideContent(q.value,ie.value,j.value,_.value,{layoutMode:ee.value});if(u){const o=Ve(u);v.value=JSON.stringify(o,null,2),Q(o,{replaceGenerated:!0})}}function Ve(u){var m;const o=u&&typeof u=="object"?u:{},f=h(o.bullets),S=c(o.layout||((m=o.design)==null?void 0:m.layout),ae.value==="deck"&&be.value==="mixed"?"classic":ee.value);return{title:String(o.title||q.value||"Untitled Slide").trim(),subtitle:String(o.subtitle||"").trim(),bullets:f,callout:String(o.callout||"").trim(),layout:S,cards:b(o.cards,f),comparison:L(o.comparison,f),metrics:te(o.metrics,f),timeline:oe(o.timeline,f),faqs:V(o.faqs,f),process:me(o.process,f)}}function pt(u,o){var m,ue,Te;const f=(ue=(m=a.getProject(u))==null?void 0:m.slides)==null?void 0:ue.find(Ke=>Ke.id===o);if(!((Te=f==null?void 0:f.elements)!=null&&Te.length))return;f.elements.filter(Ke=>{var P;return((P=Ke.meta)==null?void 0:P.source)==="ai-content"}).map(Ke=>Ke.id).forEach(Ke=>{a.deleteElement(u,o,Ke)})}function Je(u,o,f,S){return a.addElement(u,o,f,{...S,meta:{...S.meta||{},source:"ai-content"}})}function at(u){const o=ol.find(S=>S.id===u);if(!o)return null;const f=nl(JSON.parse(JSON.stringify(o)),u);return f.elements=f.elements.map(S=>({...S,meta:{...S.meta||{},source:"ai-content"}})),f}function st(u,o){o&&u.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:o,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function it(u,o){if(!o)return;const f=Dt(u);u.elements.push({type:"text",x:0,y:f.height+18,width:Math.max(f.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${o}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function Ge(u){const o=Array.isArray(u)?u:[];if(!o.length)return{minX:40,minY:54,width:0,height:0};const f=Math.min(...o.map(Te=>Number(Te.x||0))),S=Math.min(...o.map(Te=>Number(Te.y||0))),m=Math.max(...o.map(Te=>Number(Te.x||0)+Number(Te.width||0))),ue=Math.max(...o.map(Te=>Number(Te.y||0)+Number(Te.height||0)));return{minX:f,minY:S,width:Math.max(0,m-f),height:Math.max(0,ue-S)}}function yt(u,o){var ue;const f=a.getProject(u),S=Dt(o),m=Number(((ue=f==null?void 0:f.settings)==null?void 0:ue.slideWidth)||960);return{x:Math.max(40,Math.round((m-S.width)/2)),y:54}}function ut(u){const o=at(r.cards);if(!o)return null;const f=u.cards;return o.elements[0].content.text=u.title,o.elements[1].content.text=u.subtitle||u.callout||"Use the three cards to frame the main ideas.",f.forEach((S,m)=>{o.elements[5+m].content.text=S.title,o.elements[8+m].content.text=S.body}),u.callout&&u.subtitle&&it(o,u.callout),o}function xt(u){const o=at(r.comparison);return o?(o.elements[0].content.text=u.title,o.elements[3].content.text=u.comparison.leftTitle,o.elements[4].content.text=u.comparison.rightTitle,o.elements[5].content={...o.elements[5].content,text:u.comparison.leftPoints.map(f=>`• ${f}`).join(`
`),fontSize:17,lineHeight:1.55},o.elements[6].content={...o.elements[6].content,text:u.comparison.rightPoints.map(f=>`• ${f}`).join(`
`),fontSize:17,lineHeight:1.55},st(o,u.subtitle),it(o,u.callout),o):null}function wt(u){const o=at(r.metrics);return o?(o.elements[0].content.text=u.title,u.metrics.forEach((f,S)=>{o.elements[4+S].content.text=f.value,o.elements[7+S].content.text=f.label}),st(o,u.subtitle),it(o,u.callout),o):null}function dt(u){const o=at(r.timeline);return o?(o.elements[0].content.text=u.title,u.timeline.forEach((f,S)=>{o.elements[6+S].content={...o.elements[6+S].content,text:`${f.title}
${f.detail}`,fontSize:16,lineHeight:1.35}}),st(o,u.subtitle),it(o,u.callout),o):null}function kt(u){const o=at(r.faq);return o?(o.elements[0].content.text=u.title,u.faqs.forEach((f,S)=>{o.elements[4+S].content={...o.elements[4+S].content,text:`${f.question}
${f.answer}`,fontSize:16,lineHeight:1.35},o.elements[4+S].height=44}),st(o,u.subtitle),it(o,u.callout),o):null}function Ct(u){const o=at(r.process);return o?(o.elements[0].content.text=u.title,u.process.forEach((f,S)=>{o.elements[8+S].content.text=f.title,o.elements[11+S].content.text=f.detail}),st(o,u.subtitle),it(o,u.callout),o):null}function $t(u){switch(u.layout){case"cards":return ut(u);case"comparison":return xt(u);case"metrics":return wt(u);case"timeline":return dt(u);case"faq":return kt(u);case"process":return Ct(u);default:return null}}function St(u,o,f){var S;if(f.title&&(a.updateSlide(u,o,{title:f.title}),Je(u,o,"heading",{x:60,y:40,width:840,height:80,content:{text:f.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),f.subtitle&&Je(u,o,"text",{x:60,y:130,width:840,height:50,content:{text:f.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(S=f.bullets)!=null&&S.length){const m=f.bullets.map(ue=>`• ${ue}`).join(`
`);Je(u,o,"text",{x:60,y:f.subtitle?200:150,width:840,height:200,content:{text:m,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}f.callout&&(Je(u,o,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),Je(u,o,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${f.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function g(u,o,f,{replaceGenerated:S=!1,origin:m=null}={}){if(!u||!o)return;S&&pt(u,o);const ue=$t(f);if(a.updateSlide(u,o,{title:f.title||"Untitled Slide"}),ue){const Te=m||yt(u,ue);a.insertContentBlock(u,o,ue,Te)}else St(u,o,f)}function w(u,{replaceGenerated:o=!1}={}){if(!N.currentSlideId)return;const f=N.projectId;if(!f||!Array.isArray(u)||!u.length)return;u.map(m=>Ve(m)).forEach(m=>{const ue=a.addSlide(f);ue&&g(f,ue.id,m,{replaceGenerated:o})})}function Q(u=null,{replaceGenerated:o=!1}={}){if(!N.currentSlideId)return;let f=u;if(!f){if(!v.value)return;try{f=JSON.parse(v.value)}catch(Te){console.warn("Could not parse AI content:",Te);return}}const S=Ve(f),m=N.projectId,ue=N.currentSlideId;!m||!ue||g(m,ue,S,{replaceGenerated:o})}function G(){if(v.value){if(ae.value==="deck"){try{const u=JSON.parse(v.value),o=Array.isArray(u)?u:u==null?void 0:u.slides;if(!Array.isArray(o)||!o.length)return;w(o,{replaceGenerated:!0})}catch{return}return}Q()}}async function Se(){const u=q.value.trim()||"[your topic]",o=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${ie.value}" slide about "${u}" using a ${ee.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,f=await H.generate(o,{type:"creativeOptions",topic:u,slideType:ie.value});if(f)try{const S=JSON.parse(f.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(S))throw new Error("Options must be an array");U.value=S.slice(0,3).map((m,ue)=>({title:String((m==null?void 0:m.title)||`Option ${ue+1}`),angle:String((m==null?void 0:m.angle)||""),prompt:String((m==null?void 0:m.prompt)||"")})).filter(m=>m.prompt.trim()),U.value.length||(Y.value="No usable creative options were returned. Try generating again.")}catch{Y.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function Ee(u){u!=null&&u.prompt&&(_.value=u.prompt,ce.value=!0,D.value="slide",await Ne())}async function Fe(){if(!je.value.trim()||!N.projectId||!N.currentSlideId)return;const u=await H.transformSourceTextToSlideContent(je.value,{topic:q.value,slideType:ie.value,description:j.value,layoutMode:ee.value,customPrompt:_.value});if(!u)return;const o=Ve(u),f=Ge(Ae.value),S={x:Math.max(24,Math.round(f.minX)),y:Math.max(24,Math.round(f.minY))};Ae.value.forEach(m=>{a.deleteElement(N.projectId,N.currentSlideId,m.id)}),v.value=JSON.stringify(o,null,2),g(N.projectId,N.currentSlideId,o,{origin:S})}async function De(u=!1){if(!Le.value.trim()&&!Ie.value.trim())return;u||(ne.value=[]);const o=await H.generateQuiz(Le.value,W.value,{difficulty:X.value,questionType:de.value,objective:le.value,customPrompt:Ie.value});if(o)if(u){const f=new Set(ne.value.map(m=>m.question)),S=o.filter(m=>!f.has(m.question)).map(m=>({...m,_selected:!0}));ne.value=[...ne.value,...S]}else ne.value=o.map(f=>({...f,_selected:!0}))}async function re(){const u=ne.value.filter(f=>f._selected);if(!u.length)return;const o=N.projectId;u.forEach((f,S)=>{const m=a.addSlide(o);m&&(a.addElement(o,m.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:f.question,options:f.options,correctIndex:f.correctIndex,explanation:f.explanation||""}}),a.updateSlide(o,m.id,{title:`Q${S+1}: ${f.question.slice(0,40)}…`}))}),ne.value=[]}function Ce(u){ne.value.forEach(o=>o._selected=u)}async function Xe(){if(!we.value.trim())return;const u=await H.generateVoiceoverScript(we.value);u&&(v.value=u)}async function Ue(){var f,S;const u=(S=(f=xe.value)==null?void 0:f.content)==null?void 0:S.text;if(!u)return;const o=await H.generateTranslation(u,$e.value);o&&(v.value=o)}async function _e(){!v.value||!xe.value||a.updateElement(N.projectId,N.currentSlideId,xe.value.id,{content:{...xe.value.content,text:v.value}})}const ze=B(""),tt=B(!1);function ct(u){return String(u||"").replace(/```(json)?\n?/gi," ").replace(/```/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim().slice(0,220)}function vt(u,o){const S=`https://image.pollinations.ai/prompt/${encodeURIComponent(u)}`;return[`${S}?width=600&height=400&nologo=true&seed=${o}`,`${S}?width=600&height=400&nologo=true&seed=${o}&model=flux`,`${S}?width=600&height=400&nologo=true&seed=${o}&enhance=true`]}function Tt(u,o){return new Promise((f,S)=>{const m=window.setTimeout(()=>{S(new Error("Timed out"))},o);Promise.resolve(u).then(ue=>{window.clearTimeout(m),f(ue)}).catch(ue=>{window.clearTimeout(m),S(ue)})})}async function Nt(){if(ze.value.trim()){tt.value=!0,v.value="Preparing image prompt...";try{let u=ze.value;try{const m=await Tt(H.generateImagePrompt(ze.value),2200);m&&(u=m.replace(/```(json)?\n?/g,"").trim())}catch{u=ze.value}u=ct(u)||ct(ze.value),v.value="Generating image and inserting it on the slide...";const o=Math.floor(Math.random()*1e6),[f,...S]=vt(u,o);a.addElement(N.projectId,N.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:f,fallbackSrcs:S,alt:ze.value.trim()||"AI generated image",objectFit:"cover"}}),v.value="Image added to slide. It may take a few seconds to render, and will retry automatically if the first source fails."}catch{v.value="Could not insert the image right now. Try again in a moment."}finally{tt.value=!1}}}async function zt(){var o,f;if(!((f=(o=xe.value)==null?void 0:o.content)!=null&&f.text))return;const u=await H.improveText(xe.value.content.text,E.value||"Make it clearer and more engaging");u&&(v.value=u)}async function Bt(){!v.value||!xe.value||a.updateElement(N.projectId,N.currentSlideId,xe.value.id,{content:{...xe.value.content,text:v.value}})}async function _t(){if(!E.value.trim())return;const u=await H.generate(E.value);u&&(v.value=u)}return(u,o)=>{var f,S,m,ue,Te,Ke;return l(),i("div",_p,[e("div",Lp,[(l(),i(Z,null,ve([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],P=>e("button",{key:P.id,class:J(["ai-mode-btn",C.value===P.id&&"active"]),onClick:Ze=>C.value=P.id},k(P.label),11,jp)),64))]),e("div",Dp,[C.value==="generate"?(l(),i(Z,{key:0},[e("div",qp,[o[36]||(o[36]=e("label",{class:"form-label"},[K("Topic / Subject "),e("span",{class:"required"},"*")],-1)),pe(e("input",{"onUpdate:modelValue":o[0]||(o[0]=P=>q.value=P),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:$n(Ne,["enter"])},null,544),[[ke,q.value]])]),e("div",Rp,[e("button",{class:J(["output-mode-btn",ae.value==="single"&&"active"]),onClick:o[1]||(o[1]=P=>ae.value="single")},"Single Slide",2),e("button",{class:J(["output-mode-btn",ae.value==="deck"&&"active"]),onClick:o[2]||(o[2]=P=>ae.value="deck")},"Slide Deck",2)]),ae.value==="single"?(l(),i("div",Fp,[o[38]||(o[38]=e("label",{class:"form-label"},"Slide Type",-1)),pe(e("select",{"onUpdate:modelValue":o[3]||(o[3]=P=>ie.value=P),class:"select"},[...o[37]||(o[37]=[et('<option value="general" data-v-0f5b75ca>General</option><option value="intro" data-v-0f5b75ca>Introduction</option><option value="overview" data-v-0f5b75ca>Overview</option><option value="concept" data-v-0f5b75ca>Concept Explanation</option><option value="example" data-v-0f5b75ca>Example / Case Study</option><option value="summary" data-v-0f5b75ca>Summary</option><option value="callout" data-v-0f5b75ca>Key Takeaway</option>',7)])],512),[[At,ie.value]])])):O("",!0),ae.value==="single"?(l(),i("div",Up,[e("div",Op,[o[39]||(o[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",Vp,k(he.value.hint),1)]),e("div",Wp,[(l(),i(Z,null,ve(s,P=>e("button",{key:P.id,class:J(["layout-preset-card",ee.value===P.id&&"active"]),onClick:Ze=>ee.value=P.id},[e("span",Hp,k(P.label),1),e("span",Yp,k(P.hint),1)],10,Gp)),64))])])):(l(),i("div",Qp,[o[40]||(o[40]=e("label",{class:"form-label"},"Number of Slides",-1)),pe(e("input",{"onUpdate:modelValue":o[4]||(o[4]=P=>$.value=P),class:"input",type:"number",min:"1",max:"20"},null,512),[[ke,$.value,void 0,{number:!0}]]),o[41]||(o[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),ae.value==="deck"?(l(),i("div",Jp,[e("div",Xp,[o[42]||(o[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",Kp,k(be.value==="mixed"?"AI can vary layout by slide":`All slides use ${he.value.label}`),1)]),e("div",Zp,[e("button",{class:J(["output-mode-btn",be.value==="mixed"&&"active"]),onClick:o[5]||(o[5]=P=>be.value="mixed")},"Mixed Layouts",2),e("button",{class:J(["output-mode-btn",be.value==="single"&&"active"]),onClick:o[6]||(o[6]=P=>be.value="single")},"Consistent Layout",2)])])):O("",!0),ae.value==="deck"&&be.value==="single"?(l(),i("div",ev,[e("div",tv,[o[43]||(o[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",ov,k(he.value.hint),1)]),e("div",nv,[(l(),i(Z,null,ve(s,P=>e("button",{key:`deck-${P.id}`,class:J(["layout-preset-card",ee.value===P.id&&"active"]),onClick:Ze=>ee.value=P.id},[e("span",iv,k(P.label),1),e("span",av,k(P.hint),1)],10,lv)),64))])])):O("",!0),e("div",sv,[o[44]||(o[44]=e("label",{class:"form-label"},[K("Description "),e("span",{class:"optional"},"(optional)")],-1)),pe(e("textarea",{"onUpdate:modelValue":o[7]||(o[7]=P=>j.value=P),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[ke,j.value]])]),e("div",rv,[e("div",uv,[o[46]||(o[46]=e("label",{class:"form-label"},"AI Prompt",-1)),ce.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Pe,title:"Reset to auto-generated prompt"},[...o[45]||(o[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),K(" Reset ",-1)])])):(l(),i("span",dv,"auto"))]),pe(e("textarea",{"onUpdate:modelValue":o[8]||(o[8]=P=>_.value=P),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:o[9]||(o[9]=P=>ce.value=!0),spellcheck:"false"},null,544),[[ke,_.value]]),o[47]||(o[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),ae.value==="single"?(l(),i("div",cv,[e("button",{class:J(["output-mode-btn",D.value==="slide"&&"active"]),onClick:o[10]||(o[10]=P=>D.value="slide")},"Show on Slide",2),e("button",{class:J(["output-mode-btn",D.value==="options"&&"active"]),onClick:o[11]||(o[11]=P=>D.value="options")},"Creative Options",2)])):O("",!0),ae.value==="single"&&je.value?(l(),i("div",pv,[e("div",vv,[o[48]||(o[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",fv,k(Ae.value.length)+" selected",1)]),e("div",mv,k(je.value),1),e("div",gv,[e("button",{class:"btn btn-secondary btn-sm",disabled:I(H).isGenerating,onClick:Fe}," Transform Selection to "+k(he.value.label),9,bv)])])):O("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating||!q.value.trim()&&!_.value.trim()||ae.value==="deck"&&(!$.value||$.value<1||$.value>20),onClick:Ne},[I(H).isGenerating?(l(),i("span",yv)):(l(),i("svg",xv,[...o[49]||(o[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),K(" "+k(I(H).isGenerating?"Generating…":ae.value==="deck"?v.value?`Regenerate ${$.value} Slides`:`Generate ${$.value} Slides`:D.value==="slide"?v.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,hv),ae.value==="single"&&D.value==="options"&&(U.value.length||Y.value)?(l(),i("div",wv,[e("div",kv,[o[50]||(o[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[12]||(o[12]=P=>{U.value=[],Y.value=""})},"Clear")]),Y.value?(l(),i("div",Cv,[o[51]||(o[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),K(" "+k(Y.value),1)])):(l(),i("div",$v,[(l(!0),i(Z,null,ve(U.value,(P,Ze)=>(l(),i("article",{key:Ze,class:"creative-option-card"},[e("h4",Sv,k(P.title),1),e("p",Iv,k(P.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:gt=>Ee(P)},"Use This Option",8,Av)]))),128))]))])):O("",!0)],64)):C.value==="quiz"?(l(),i(Z,{key:1},[e("div",Mv,[o[52]||(o[52]=e("label",{class:"form-label"},[K("Quiz Topic "),e("span",{class:"required"},"*")],-1)),pe(e("input",{"onUpdate:modelValue":o[13]||(o[13]=P=>Le.value=P),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:$n(De,["enter"])},null,544),[[ke,Le.value]])]),e("div",Ev,[e("div",Pv,[o[54]||(o[54]=e("label",{class:"form-label"},"Questions",-1)),pe(e("select",{"onUpdate:modelValue":o[14]||(o[14]=P=>W.value=P),class:"select"},[...o[53]||(o[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[At,W.value,void 0,{number:!0}]])]),e("div",Tv,[o[56]||(o[56]=e("label",{class:"form-label"},"Difficulty",-1)),pe(e("select",{"onUpdate:modelValue":o[15]||(o[15]=P=>X.value=P),class:"select"},[...o[55]||(o[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[At,X.value]])])]),e("div",Nv,[o[57]||(o[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",zv,[(l(),i(Z,null,ve([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],P=>e("button",{key:P.id,class:J(["qtype-btn",de.value===P.id&&"active"]),onClick:Ze=>de.value=P.id},[e("span",_v,k(P.icon),1),e("span",null,k(P.label),1)],10,Bv)),64))])]),e("div",Lv,[o[58]||(o[58]=e("label",{class:"form-label"},[K("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),pe(e("input",{"onUpdate:modelValue":o[16]||(o[16]=P=>le.value=P),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[ke,le.value]])]),e("div",jv,[e("div",Dv,[o[60]||(o[60]=e("label",{class:"form-label"},"AI Prompt",-1)),ye.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:M,title:"Reset to auto-generated prompt"},[...o[59]||(o[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),K(" Reset ",-1)])])):(l(),i("span",qv,"auto"))]),pe(e("textarea",{"onUpdate:modelValue":o[17]||(o[17]=P=>Ie.value=P),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:o[18]||(o[18]=P=>ye.value=!0),spellcheck:"false"},null,544),[[ke,Ie.value]]),o[61]||(o[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating||!Le.value.trim()&&!Ie.value.trim(),onClick:o[19]||(o[19]=P=>De(!1))},[I(H).isGenerating?(l(),i("span",Fv)):(l(),i("svg",Uv,[...o[62]||(o[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),K(" "+k(I(H).isGenerating?"Generating…":`Generate ${W.value} Questions`),1)],8,Rv),ne.value.length?(l(),i("div",Ov,[e("div",Vv,[e("span",Wv,k(ne.value.length)+" Questions",1),e("div",Gv,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[20]||(o[20]=P=>Ce(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:o[21]||(o[21]=P=>Ce(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:o[22]||(o[22]=P=>ne.value=[])},"Clear")])]),e("div",Hv,[e("button",{class:"btn btn-secondary regen-btn",disabled:I(H).isGenerating,onClick:o[23]||(o[23]=P=>De(!1)),title:"Replace all questions with a new set"},[I(H).isGenerating?(l(),i("span",Qv)):(l(),i("svg",Jv,[...o[63]||(o[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),o[64]||(o[64]=K(" Regenerate ",-1))],8,Yv),e("button",{class:"btn btn-ghost regen-btn",disabled:I(H).isGenerating,onClick:o[24]||(o[24]=P=>De(!0)),title:"Generate more and append to current list"},[...o[65]||(o[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),K(" Add More ",-1)])],8,Xv)]),(l(!0),i(Z,null,ve(ne.value,(P,Ze)=>(l(),i("div",{key:Ze,class:J(["quiz-card",{deselected:!P._selected}])},[e("div",Kv,[e("label",Zv,[pe(e("input",{type:"checkbox","onUpdate:modelValue":gt=>P._selected=gt},null,8,e1),[[Et,P._selected]]),e("span",t1,"Q"+k(Ze+1),1)]),e("div",o1,[e("span",{class:J(["badge difficulty-badge",P.difficulty])},k(P.difficulty),3),e("span",n1,k(P.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",l1,k(P.question),1),e("div",i1,[(l(!0),i(Z,null,ve(P.options,(gt,bt)=>(l(),i("div",{key:bt,class:J(["q-option",bt===P.correctIndex&&"correct"])},[e("span",a1,k(["A","B","C","D"][bt]),1),e("span",null,k(gt),1),bt===P.correctIndex?(l(),i("svg",s1,[...o[66]||(o[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):O("",!0)],2))),128))]),P.explanation?(l(),i("div",r1,[o[67]||(o[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),K(" "+k(P.explanation),1)])):O("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!ne.value.filter(P=>P._selected).length,onClick:re},[o[68]||(o[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),K(" Add "+k(ne.value.filter(P=>P._selected).length)+" Selected as Quiz Slides ",1)],8,u1)])):O("",!0)],64)):C.value==="voiceover"?(l(),i(Z,{key:2},[e("div",d1,[o[69]||(o[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),pe(e("textarea",{"onUpdate:modelValue":o[25]||(o[25]=P=>we.value=P),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[ke,we.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating,onClick:Xe},[I(H).isGenerating?(l(),i("span",p1)):O("",!0),K(" "+k(I(H).isGenerating?"Generating…":"Generate Script"),1)],8,c1)],64)):C.value==="improve"?(l(),i(Z,{key:3},[(S=(f=xe.value)==null?void 0:f.content)!=null&&S.text?(l(),i("div",v1,[o[70]||(o[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",f1,k(xe.value.content.text.slice(0,120))+k(xe.value.content.text.length>120?"…":""),1)])):(l(),i("p",m1,"Select a text element on the canvas to improve it.")),e("div",g1,[o[71]||(o[71]=e("label",{class:"form-label"},"Instruction",-1)),pe(e("input",{"onUpdate:modelValue":o[26]||(o[26]=P=>E.value=P),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[ke,E.value]])]),o[72]||(o[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),pe(e("textarea",{"onUpdate:modelValue":o[27]||(o[27]=P=>E.value=P),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[ke,E.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating||!xe.value&&!E.value,onClick:o[28]||(o[28]=P=>xe.value?zt():_t())},[I(H).isGenerating?(l(),i("span",h1)):O("",!0),K(" "+k(I(H).isGenerating?"Processing…":"Generate"),1)],8,b1)],64)):C.value==="translate"?(l(),i(Z,{key:4},[(ue=(m=xe.value)==null?void 0:m.content)!=null&&ue.text?(l(),i("div",y1,[o[73]||(o[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",x1,k(xe.value.content.text.slice(0,120))+k(xe.value.content.text.length>120?"…":""),1)])):(l(),i("p",w1,"Select a text element on the canvas to translate it.")),e("div",k1,[o[75]||(o[75]=e("label",{class:"form-label"},"Target Language",-1)),pe(e("select",{"onUpdate:modelValue":o[29]||(o[29]=P=>$e.value=P),class:"select"},[...o[74]||(o[74]=[et('<option value="Spanish" data-v-0f5b75ca>Spanish</option><option value="French" data-v-0f5b75ca>French</option><option value="German" data-v-0f5b75ca>German</option><option value="Italian" data-v-0f5b75ca>Italian</option><option value="Portuguese" data-v-0f5b75ca>Portuguese</option><option value="Chinese (Simplified)" data-v-0f5b75ca>Chinese (Simplified)</option><option value="Japanese" data-v-0f5b75ca>Japanese</option><option value="Arabic" data-v-0f5b75ca>Arabic</option>',8)])],512),[[At,$e.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating||!((Ke=(Te=xe.value)==null?void 0:Te.content)!=null&&Ke.text),onClick:Ue},[I(H).isGenerating?(l(),i("span",$1)):O("",!0),K(" "+k(I(H).isGenerating?"Translating…":"Translate Text"),1)],8,C1),v.value?(l(),i("div",S1,[e("div",I1,[o[76]||(o[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",A1,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[30]||(o[30]=P=>u.navigator.clipboard.writeText(v.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:_e,disabled:!xe.value},"Apply",8,M1)])]),e("div",E1,k(v.value),1)])):O("",!0)],64)):C.value==="image"?(l(),i(Z,{key:5},[o[79]||(o[79]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",P1,[o[77]||(o[77]=e("label",{class:"form-label"},"Image Description",-1)),pe(e("textarea",{"onUpdate:modelValue":o[31]||(o[31]=P=>ze.value=P),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[ke,ze.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:tt.value||I(H).isGenerating||!ze.value,onClick:Nt},[tt.value||I(H).isGenerating?(l(),i("span",N1)):O("",!0),K(" "+k(tt.value||I(H).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,T1),v.value?(l(),i("div",z1,[o[78]||(o[78]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",B1,k(v.value),1)])):O("",!0)],64)):C.value==="settings"?(l(),i("div",_1,[e("div",L1,[o[81]||(o[81]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:I(H).apiProvider,class:"select",onChange:o[32]||(o[32]=P=>I(H).setProvider(P.target.value))},[...o[80]||(o[80]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,j1)]),e("div",D1,[o[82]||(o[82]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:I(H).apiKey,class:"input",placeholder:"sk-…",onChange:o[33]||(o[33]=P=>I(H).setApiKey(P.target.value))},null,40,q1),o[83]||(o[83]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),I(H).apiKey?O("",!0):(l(),i("div",R1,[...o[84]||(o[84]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),K(" Running in ",-1),e("strong",null,"demo mode",-1),K(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):O("",!0),v.value&&C.value!=="settings"&&C.value!=="quiz"?(l(),i("div",F1,[e("div",U1,[o[85]||(o[85]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[34]||(o[34]=P=>v.value="")},"Clear")]),e("pre",O1,k(v.value),1),e("div",V1,[C.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:G},k(ae.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):O("",!0),C.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:I(H).isGenerating,onClick:Ne},[...o[86]||(o[86]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),K(" Regenerate ",-1)])],8,W1)):O("",!0),C.value==="improve"&&xe.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Bt}," Apply to Element ")):O("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:o[35]||(o[35]=P=>{var Ze;return(Ze=u.navigator.clipboard)==null?void 0:Ze.writeText(v.value)})}," Copy ")])])):O("",!0),I(H).lastError?(l(),i("div",G1,[o[87]||(o[87]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),K(" "+k(I(H).lastError),1)])):O("",!0)])])}}},Y1=Qe(H1,[["__scopeId","data-v-0f5b75ca"]]),Q1={class:"theme-manager"},J1={class:"panel-section"},X1={class:"presets-grid"},K1=["title","onClick"],Z1={class:"preset-preview"},ef={class:"preset-name"},tf={class:"panel-section"},of={class:"theme-fields"},nf={class:"form-label"},lf={class:"color-row"},af=["value","onInput"],sf=["value","onChange"],rf={class:"panel-section"},uf={class:"theme-field"},df=["value","placeholder"],cf={class:"chart-palette-preview"},pf={class:"panel-section"},vf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ff=["value"],mf=["value"],gf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},bf=["value"],hf=["value"],yf={class:"form-group"},xf=["value"],wf={class:"panel-section"},kf={class:"tp-chart-row"},Cf={key:0,class:"apply-message success"},$f={key:1,class:"apply-message error"},Sf={__name:"ThemeManager",setup(A){const s=nt(),r=lt(),c=T(()=>r.getProject(s.projectId)),p=T(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),h=T(()=>Sn(p.value)),y=B(""),b=B("");function L(a){r.updateProject(s.projectId,{theme:{...p.value,...a}})}const te=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],oe=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function V(a){L(a)}function me(a,C){const E=a.content||{};return a.type==="text"?{content:{...E,fontFamily:C.fontFamily||E.fontFamily,color:C.textColor||E.color}}:a.type==="heading"?{content:{...E,fontFamily:C.headingFont||C.fontFamily||E.fontFamily,color:C.textColor||E.color}}:a.type==="shape"?{content:{...E,fillColor:C.secondaryColor||E.fillColor}}:a.type==="hotspot"?{content:{...E,bgColor:C.primaryColor||E.bgColor}}:a.type==="button"?{content:{...E,bgColor:C.primaryColor||E.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:C.fontFamily||E.fontFamily}}:a.type==="quiz"?{content:{...E,cardBgColor:C.bgColor||E.cardBgColor,questionColor:C.textColor||E.questionColor,accentColor:C.primaryColor||E.accentColor}}:a.type==="chart"?{content:{...E,...zn(C)}}:null}function H(){L({chartPalette:""})}function N(){y.value="",b.value="";const a=s.projectId,C=c.value,E=p.value;if(!a||!C){b.value="No active project to apply theme.";return}const q=C.slides||[];let v=0;q.forEach(W=>{(W.backgroundType||"color")==="color"&&r.updateSlide(a,W.id,{backgroundType:"color",background:E.bgColor||W.background||"#ffffff"}),(W.elements||[]).forEach(ie=>{const $e=me(ie,E);$e&&(r.updateElement(a,W.id,ie.id,$e),v+=1)})}),y.value=`Applied theme to ${q.length} slide${q.length===1?"":"s"} and ${v} element${v===1?"":"s"}.`}return(a,C)=>(l(),i("div",Q1,[e("div",J1,[C[4]||(C[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",X1,[(l(),i(Z,null,ve(te,E=>e("div",{key:E.name,class:"preset-card",title:E.name,onClick:q=>V(E)},[e("div",Z1,[e("div",{class:"pp-header",style:ge({background:E.primaryColor})},null,4),e("div",{class:"pp-body",style:ge({background:E.bgColor})},[e("div",{class:"pp-line",style:ge({background:E.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:ge({background:E.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:ge({background:E.secondaryColor})},null,4)]),e("span",ef,k(E.name),1)],8,K1)),64))])]),e("div",tf,[C[5]||(C[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",of,[(l(),i(Z,null,ve({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(E,q)=>e("div",{class:"theme-field",key:q},[e("label",nf,k(E),1),e("div",lf,[e("input",{type:"color",value:p.value[q]||"#ffffff",class:"color-input-native",onInput:v=>L({[q]:v.target.value})},null,40,af),e("input",{value:p.value[q]||"",class:"input",onChange:v=>L({[q]:v.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,sf)])])),64))])]),e("div",rf,[C[8]||(C[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",uf,[C[6]||(C[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:I(ll)(I(Sn)(p.value)),onChange:C[0]||(C[0]=E=>L({chartPalette:E.target.value}))},null,40,df),e("div",cf,[(l(!0),i(Z,null,ve(h.value,(E,q)=>(l(),i("span",{key:`theme-chart-${q}`,class:"chart-palette-dot",style:ge({background:E})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:H},"Use auto palette")]),C[7]||(C[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",pf,[C[12]||(C[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",vf,[C[9]||(C[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:C[1]||(C[1]=E=>L({headingFont:E.target.value}))},[(l(),i(Z,null,ve(oe,E=>e("option",{key:E.value,value:E.value},k(E.label),9,mf)),64))],40,ff)]),e("div",gf,[C[10]||(C[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:C[2]||(C[2]=E=>L({fontFamily:E.target.value}))},[(l(),i(Z,null,ve(oe,E=>e("option",{key:E.value,value:E.value},k(E.label),9,hf)),64))],40,bf)]),e("div",yf,[C[11]||(C[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:C[3]||(C[3]=E=>L({fontSize:+E.target.value}))},null,40,xf)])]),e("div",wf,[C[13]||(C[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:ge({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:ge({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:ge({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:ge({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:ge({background:p.value.secondaryColor})},"Badge",4),e("div",kf,[(l(!0),i(Z,null,ve(h.value.slice(0,5),(E,q)=>(l(),i("span",{key:`preview-chart-${q}`,class:"tp-chart-bar",style:ge({background:E,height:`${22+q*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:N}," Apply Theme to Slides "),y.value?(l(),i("p",Cf,k(y.value),1)):O("",!0),b.value?(l(),i("p",$f,k(b.value),1)):O("",!0)])]))}},If=Qe(Sf,[["__scopeId","data-v-da2b0ce4"]]),Af={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Mf={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},Ef={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Pf={class:"export-tabs tabs",style:{"overflow-x":"auto"}},Tf={class:"export-content"},Nf={class:"export-options",style:{"margin-bottom":"20px"}},zf={class:"form-group"},Bf={class:"export-meta"},_f={class:"meta-item"},Lf={class:"meta-item"},jf={class:"meta-item"},Df={class:"export-options",style:{"margin-bottom":"20px"}},qf={class:"form-group"},Rf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Ff={class:"export-options",style:{"margin-bottom":"20px"}},Uf={class:"form-group"},Of={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Vf={class:"coming-soon"},Wf={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},Gf={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},Hf={key:1,class:"export-success"},Yf={__name:"ExportModal",setup(A){const s=nt(),r=lt(),c=Bn(),p=T(()=>r.getProject(s.projectId)),h=B("json"),y=B(""),b=B(""),L=B(!0);Ye(p,q=>{q&&!b.value&&(b.value=q.name||"presentation")},{immediate:!0});function te(){const q=r.exportProject(s.projectId);if(!q)return;const v=new Blob([q],{type:"application/json"}),W=URL.createObjectURL(v),ie=document.createElement("a");ie.href=W,ie.download=`${b.value||"project"}.mediasurf.json`,ie.click(),URL.revokeObjectURL(W),y.value="success",setTimeout(()=>y.value="",3e3)}function oe(q,v="presentation"){return String(q).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||v}function V(q){return new Promise((v,W)=>{const ie=new FileReader;ie.onloadend=()=>v(ie.result),ie.onerror=()=>W(ie.error),ie.readAsDataURL(q)})}function me(q,v,W="html"){const ie=Pt(v);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${ie.width}px;
  --lf-slide-height: ${ie.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(q==null?void 0:q.fontFamily)||"Inter, sans-serif"};
  background: ${W==="pdf"?"#f3f4f6":`
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%)`};
  color: ${W==="pdf"?"#111827":"#ffffff"};
  display: ${W==="pdf"?"block":"flex"};
  align-items: ${W==="pdf"?"stretch":"center"};
  justify-content: ${W==="pdf"?"flex-start":"center"};
  overflow: ${W==="pdf"?"auto":"hidden"};
  padding: ${W==="pdf"?"24px 0":"0"};
}
.lf-shell {
  width: ${W==="pdf"?"100%":"100vw"};
  min-height: ${W==="pdf"?"auto":"100vh"};
  height: ${W==="pdf"?"auto":"100vh"};
  position: relative;
  display: flex;
  align-items: ${W==="pdf"?"stretch":"center"};
  justify-content: center;
  overflow: ${W==="pdf"?"visible":"hidden"};
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
  width: ${W==="pdf"?"100%":"auto"};
  max-width: ${W==="pdf"?"none":"auto"};
  padding: ${W==="pdf"?"0":"18px"};
  border-radius: ${W==="pdf"?"0":"32px"};
  background: ${W==="pdf"?"transparent":"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"};
  border: ${W==="pdf"?"none":"1px solid rgba(255,255,255,0.12)"};
  box-shadow: ${W==="pdf"?"none":"0 30px 80px rgba(0,0,0,.34)"};
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
  width: ${W==="pdf"?"100%":"var(--lf-slide-width)"};
  height: ${W==="pdf"?"auto":"var(--lf-slide-height)"};
  border-radius: ${W==="pdf"?"0":"18px"};
  overflow: ${W==="pdf"?"visible":"hidden"};
  box-shadow: ${W==="pdf"?"none":"0 30px 90px rgba(0,0,0,.5)"};
  transform-origin: center center;
  display: ${W==="pdf"?"flex":"block"};
  flex-direction: ${W==="pdf"?"column":"row"};
  align-items: ${W==="pdf"?"center":"stretch"};
  gap: ${W==="pdf"?"24px":"0"};
}
.slide {
  position: ${W==="pdf"?"relative":"absolute"};
  inset: ${W==="pdf"?"auto":"0"};
  display: ${W==="pdf"?"block":"none"};
  overflow: hidden;
  color: ${(q==null?void 0:q.textColor)||"#1a1a2e"};
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
  flex: 0 0 auto;
  background-clip: padding-box;
  box-shadow: ${W==="pdf"?"0 12px 32px rgba(15, 23, 42, 0.16)":"none"};
  page-break-after: ${W==="pdf"?"always":"auto"};
  break-after: ${W==="pdf"?"page":"auto"};
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
  display: ${(v==null?void 0:v.showNavControls)===!1?"none":"flex"};
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
  display: ${(v==null?void 0:v.showNavControls)===!1?"none":"flex"};
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
  background: ${(q==null?void 0:q.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(v==null?void 0:v.showProgress)===!1?"none":"block"};
  z-index: 6;
}
${W==="iframe"?`
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
${W==="pdf"?`
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
`}function H(q="html"){return`
(function () {
  var exportMode = ${JSON.stringify(q)};
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
`}async function N(){return E("html")}async function a(){return E("iframe")}async function C(){return E("pdf")}async function E(q="html"){var Le,X,de;const v=p.value;if(!v)return;y.value="processing";const W=q==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(q==="pdf"&&!W){y.value="error",setTimeout(()=>y.value="",3e3);return}const ie=q==="pdf"?null:new al,$e=ie?ie.folder("assets"):null;let we=0;async function j(le,ne="media"){if((!le||le.startsWith("data:")||le.startsWith("http://localhost")||le.startsWith("blob:"))&&le.startsWith("data:"))return le;try{const ye=await(await fetch(le)).blob();if(q==="pdf")return await V(ye);let z="bin";const M=ye.type;if(M.includes("image/png")?z="png":M.includes("image/jpeg")?z="jpg":M.includes("image/gif")?z="gif":M.includes("image/svg")?z="svg":M.includes("image/webp")?z="webp":M.includes("video/mp4")?z="mp4":M.includes("audio/mpeg")&&(z="mp3"),z==="bin"){const x=le.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);x&&(z=x[1])}we++;const R=`${ne}_${we}.${z}`;return $e.file(R,ye),`assets/${R}`}catch(Ie){return console.warn("Could not fetch asset:",le,Ie),le}}const _=JSON.parse(JSON.stringify([...v.slides||[]])).sort((le,ne)=>(le.order??0)-(ne.order??0));if(L.value)for(const le of _){le.backgroundType==="image"&&le.backgroundImage&&(le.backgroundImage=await j(le.backgroundImage,"bg"));for(const ne of le.elements||[])ne.type==="image"&&((Le=ne.content)!=null&&Le.src)&&(ne.content.src=await j(ne.content.src,"img")),ne.type==="video"&&((X=ne.content)!=null&&X.src)&&!ne.content.src.includes("youtube")&&!ne.content.src.includes("youtu.be")&&(ne.content.src=await j(ne.content.src,"vid")),ne.type==="audio"&&((de=ne.content)!=null&&de.src)&&(ne.content.src=await j(ne.content.src,"aud"))}const ce=oe(b.value||v.name||"presentation"),ae={name:v.name,theme:v.theme||{},settings:v.settings||{},slides:_},ee=JSON.stringify(ae).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),be=me(v.theme,v.settings,q),$=H(q),D=`<script id="lf-data" type="application/json">${ee}<\/script>`,Y=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ce}</title>
${q==="pdf"?`<style>${be}</style>`:'<link rel="stylesheet" href="style.css">'}
</head>
<body class="${q==="iframe"?"is-iframe":q==="pdf"?"is-pdf":""}">
<div class="lf-shell">
<div class="progress" id="progress"></div>
<div class="lf-grid"></div>
<div class="lf-stage-shell">
  <div class="presentation" id="presentation"></div>
</div>
<div class="dot-nav" id="dot-nav"></div>
<nav class="nav">
  <button class="nav-btn" id="prev-btn" type="button">← Prev</button>
  <span class="nav-counter" id="counter">1 / ${_.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${D}
${q!=="pdf"?'<script src="script.js"><\/script>':`<script>${$}<\/script>`}
</body>
</html>`;if(q==="pdf"){W.document.open(),W.document.write(Y),W.document.close(),y.value="success",setTimeout(()=>y.value="",3e3);return}ie.file("index.html",Y),ie.file("style.css",be),ie.file("script.js",$);const he=await ie.generateAsync({type:"blob"}),Re=URL.createObjectURL(he),Pe=document.createElement("a");Pe.href=Re,Pe.download=`${ce}.zip`,Pe.click(),URL.revokeObjectURL(Re),y.value="success",setTimeout(()=>y.value="",3e3)}return(q,v)=>(l(),He(Pn,{title:"Export Project",size:"md",onClose:v[13]||(v[13]=W=>I(s).showExportModal=!1)},{footer:rt(()=>[e("button",{class:"btn btn-secondary",onClick:v[12]||(v[12]=W=>I(s).showExportModal=!1)},"Close")]),default:rt(()=>{var W,ie,$e,we,j;return[I(c).user?(l(),i(Z,{key:1},[e("div",Pf,[e("button",{class:J(["tab-btn",h.value==="json"&&"active"]),onClick:v[2]||(v[2]=_=>h.value="json")},"JSON",2),e("button",{class:J(["tab-btn",h.value==="html"&&"active"]),onClick:v[3]||(v[3]=_=>h.value="html")},"HTML",2),e("button",{class:J(["tab-btn",h.value==="iframe"&&"active"]),onClick:v[4]||(v[4]=_=>h.value="iframe")},"Iframe",2),e("button",{class:J(["tab-btn",h.value==="pdf"&&"active"]),onClick:v[5]||(v[5]=_=>h.value="pdf")},"PDF",2),e("button",{class:J(["tab-btn",h.value==="scorm"&&"active"]),onClick:v[6]||(v[6]=_=>h.value="scorm")},"SCORM",2)]),e("div",Tf,[h.value==="json"?(l(),i(Z,{key:0},[v[24]||(v[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",Nf,[e("div",zf,[v[19]||(v[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":v[7]||(v[7]=_=>b.value=_),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ke,b.value]])])]),e("div",Bf,[e("div",_f,[v[20]||(v[20]=e("span",null,"Project",-1)),e("strong",null,k((W=p.value)==null?void 0:W.name),1)]),e("div",Lf,[v[21]||(v[21]=e("span",null,"Slides",-1)),e("strong",null,k((($e=(ie=p.value)==null?void 0:ie.slides)==null?void 0:$e.length)||0),1)]),e("div",jf,[v[22]||(v[22]=e("span",null,"Elements",-1)),e("strong",null,k(((j=(we=p.value)==null?void 0:we.slides)==null?void 0:j.reduce((_,ce)=>{var ae;return _+(((ae=ce.elements)==null?void 0:ae.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:te},[...v[23]||(v[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Download JSON ",-1)])])],64)):h.value==="html"?(l(),i(Z,{key:1},[v[28]||(v[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",Df,[e("div",qf,[v[25]||(v[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":v[8]||(v[8]=_=>b.value=_),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ke,b.value]])]),e("label",Rf,[pe(e("input",{type:"checkbox","onUpdate:modelValue":v[9]||(v[9]=_=>L.value=_)},null,512),[[Et,L.value]]),v[26]||(v[26]=K(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),v[29]||(v[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:N},[...v[27]||(v[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Download HTML ",-1)])])],64)):h.value==="iframe"?(l(),i(Z,{key:2},[v[33]||(v[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Ff,[e("div",Uf,[v[30]||(v[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":v[10]||(v[10]=_=>b.value=_),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ke,b.value]])]),e("label",Of,[pe(e("input",{type:"checkbox","onUpdate:modelValue":v[11]||(v[11]=_=>L.value=_)},null,512),[[Et,L.value]]),v[31]||(v[31]=K(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...v[32]||(v[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Download Iframe Zip ",-1)])])],64)):h.value==="pdf"?(l(),i(Z,{key:3},[v[35]||(v[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),v[36]||(v[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:C},[...v[34]||(v[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Generate PDF ",-1)])])],64)):h.value==="scorm"?(l(),i(Z,{key:4},[v[40]||(v[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Vf,[(l(),i("svg",Wf,[...v[37]||(v[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),v[38]||(v[38]=e("h4",null,"Coming Soon",-1)),v[39]||(v[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):O("",!0),mt(Mt,{name:"fade"},{default:rt(()=>[y.value==="processing"?(l(),i("div",Gf,[...v[41]||(v[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),K(" Generating package... Please wait. ",-1)])])):y.value==="success"?(l(),i("div",Hf,[...v[42]||(v[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),K(" Export successful! Check your downloads folder. ",-1)])])):O("",!0)]),_:1})])],64)):(l(),i("div",Af,[(l(),i("svg",Mf,[...v[14]||(v[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),v[17]||(v[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),v[18]||(v[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",Ef,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:v[0]||(v[0]=_=>I(c).loginWithGoogle())},[...v[15]||(v[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),K(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:v[1]||(v[1]=_=>I(c).loginWithMicrosoft())},[...v[16]||(v[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),K(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Qf=Qe(Yf,[["__scopeId","data-v-1a8a69d1"]]),Jf={key:0,class:"editor-view"},Xf={class:"editor-topbar"},Kf={class:"topbar-left"},Zf={class:"project-name-wrap"},em=["value"],tm={class:"save-label"},om={class:"topbar-center"},nm={key:0,class:"slide-position"},lm={class:"topbar-right"},im={class:"editor-body"},am={class:"authoring-rail"},sm=["onClick","data-tooltip"],rm={key:0,class:"rail-icon"},um={key:1,class:"rail-icon"},dm={key:2,class:"rail-icon"},cm={key:3,class:"rail-icon"},pm={key:4,class:"rail-icon"},vm={key:5,class:"rail-icon"},fm={key:6,class:"rail-icon"},mm={key:7,class:"rail-icon"},gm={key:8,class:"rail-icon"},bm={key:9,class:"rail-icon"},hm={class:"right-panel"},ym={class:"panel-tabs"},xm=["onClick","data-tooltip"],wm={class:"tab-icon"},km={class:"tab-label"},Cm={class:"panel-content"},$m={key:1,class:"editor-not-found"},Sm={__name:"EditorView",setup(A){const s=Vn(),r=On(),c=nt(),p=lt(),h=Bn(),y=T(()=>s.params.id),b=T(()=>p.getProject(y.value)),L=T(()=>Pt(b.value)),te=T(()=>{var z;return[...((z=b.value)==null?void 0:z.slides)||[]].sort((M,R)=>M.order-R.order)}),oe=B(null),V=B(!1),me=B("deck"),{aiStore:H,showAIModal:N,aiMode:a,aiTopic:C,aiContext:E,aiProjectName:q,aiSlideCount:v,aiQuestionCount:W,aiDifficulty:ie,aiQuestionType:$e,aiCreationError:we,aiSubmitting:j,aiProjectNamePlaceholder:_,aiPrimaryActionLabel:ce,openAICreationModal:ae,createAIProject:ee}=Gn({onRequireAuth:()=>r.push({name:"dashboard"})});let be=!1,$=null;Ye(()=>b.value,z=>{if(z){if(be){be=!1;return}$&&clearTimeout($),$=setTimeout(()=>{c.pushHistory(z)},600)}},{deep:!0}),Ye(()=>h.isAuthReady,async z=>{var M;if(z){if((M=h.user)!=null&&M.uid&&await p.ensureRemoteProjectsLoaded(),!b.value){r.push({name:"dashboard"});return}c.setProject(y.value),te.value.length>0&&c.setCurrentSlide(te.value[0].id),c.pushHistory(b.value)}},{immediate:!0});const D=T(()=>{const z=b.value;return z?`Saved ${new Date(z.updatedAt).toLocaleTimeString()}`:""}),U=T(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});sl({undo:()=>{if(c.canUndo()){const z=c.undo();z&&(be=!0,p.updateProject(y.value,z))}},redo:()=>{if(c.canRedo()){const z=c.redo();z&&(be=!0,p.updateProject(y.value,z))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var M,R,x,xe;const z=(xe=(x=(R=(M=b.value)==null?void 0:M.slides)==null?void 0:R.find(Ae=>Ae.id===c.currentSlideId))==null?void 0:x.elements)==null?void 0:xe.find(Ae=>Ae.id===c.selectedElementId);z&&c.setClipboard(z)},paste:()=>{if(c.clipboard&&c.currentSlideId){const z=c.clipboard;p.addElement(c.projectId,c.currentSlideId,z.type,{...z,x:z.x+20,y:z.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const z=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);z&&c.selectElement(z.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(z,M)=>{var x,xe,Ae,je;if(!c.selectedElementId)return;const R=(je=(Ae=(xe=(x=b.value)==null?void 0:x.slides)==null?void 0:xe.find(Ne=>Ne.id===c.currentSlideId))==null?void 0:Ae.elements)==null?void 0:je.find(Ne=>Ne.id===c.selectedElementId);R&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:R.x+z,y:R.y+M})},selectAll:()=>{var M,R,x;(((x=(R=(M=b.value)==null?void 0:M.slides)==null?void 0:R.find(xe=>xe.id===c.currentSlideId))==null?void 0:x.elements)||[]).forEach((xe,Ae)=>c.selectElement(xe.id,Ae>0))}});function Y(){r.push({name:"dashboard"})}function he(){r.push({name:"preview",params:{id:y.value},query:{from:"editor"}})}function Re(z="deck"){me.value=z,V.value=!0}function Pe(){V.value=!1,ae(me.value)}function Le(z,M="Image"){if(!c.projectId||!c.currentSlideId||!z)return;const R=new Image;R.onload=()=>{const Ae=Math.min(420/R.width,280/R.height,1),je=Math.max(120,Math.round(R.width*Ae)),Ne=Math.max(80,Math.round(R.height*Ae)),Ve=Math.max(24,Math.round((L.value.width-je)/2)),pt=Math.max(24,Math.round((L.value.height-Ne)/2)),Je=p.addElement(c.projectId,c.currentSlideId,"image",{x:Ve,y:pt,width:je,height:Ne,content:{src:z,alt:M,objectFit:"cover"}});Je&&(c.selectElement(Je.id),c.setRightPanel("properties"),c.setActiveTool("select"))},R.src=z}function X(z){const[M]=Array.from(z.target.files||[]);if(!M||!M.type.startsWith("image/"))return;const R=new FileReader;R.onload=()=>Le(String(R.result||""),M.name),R.readAsDataURL(M),z.target.value=""}function de(){var z;(z=oe.value)==null||z.click()}const le=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function ne(z){if(z==="text"){c.setActiveTool("text");return}if(z==="blocks"){c.toggleSlidePanel("blocks");return}if(z==="resources"){c.setActiveTool("image");return}if(z==="interactive-elements"){c.setActiveTool("hotspot");return}if(z==="interactive-questions"){c.setActiveTool("quiz");return}if(z==="widgets"){c.setActiveTool("shape");return}if(z==="insert"){de();return}if(z==="style"){c.setRightPanel("properties");return}if(z==="background"){c.clearSelection(),c.setRightPanel("properties");return}z==="pages"&&c.toggleSlidePanel("slides")}function Ie(z){return z==="text"?["text","heading"].includes(c.activeTool):z==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":z==="resources"?c.activeTool==="image":z==="interactive-elements"?["hotspot","button"].includes(c.activeTool):z==="interactive-questions"?c.activeTool==="quiz":z==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):z==="insert"?!1:z==="style"||z==="background"?c.rightPanelTab==="properties":z==="pages"?c.showSlidePanel:!1}function ye(){Qn({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return Ye(()=>b.value,z=>{z&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{ye()},100)},{immediate:!0}),(z,M)=>b.value?(l(),i("div",Jf,[e("input",{ref_key:"imageInputRef",ref:oe,type:"file",accept:"image/*",class:"sr-only",onChange:X},null,544),e("header",Xf,[e("div",Kf,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:Y,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...M[14]||(M[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),K(" Dashboard ",-1)])]),e("div",Zf,[e("input",{value:b.value.name,class:"project-name-input",onChange:M[0]||(M[0]=R=>I(p).updateProject(y.value,{name:R.target.value}))},null,40,em)]),e("span",tm,k(D.value),1)]),e("div",om,[I(c).currentSlideId?(l(),i("span",nm," Slide "+k(te.value.findIndex(R=>R.id===I(c).currentSlideId)+1)+" of "+k(te.value.length),1)):O("",!0)]),e("div",lm,[e("button",{class:"btn btn-ghost btn-sm",onClick:ye,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...M[15]||(M[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),K(" Help ",-1)])]),e("button",{class:J(["btn btn-ghost btn-sm",I(c).showAIPanel&&"active-btn"]),onClick:M[1]||(M[1]=R=>{I(c).showAIPanel=!I(c).showAIPanel,I(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...M[16]||(M[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),K(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:M[2]||(M[2]=R=>{I(c).showThemeManager=!I(c).showThemeManager,I(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...M[17]||(M[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),K(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:he,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...M[18]||(M[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),K(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:M[3]||(M[3]=R=>I(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...M[19]||(M[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Export ",-1)])])])]),mt(_c,{onOpenAiProject:Re}),e("div",im,[e("aside",am,[(l(),i(Z,null,ve(le,R=>e("button",{key:R.id,class:J(["rail-option",Ie(R.id)&&"active"]),onClick:x=>ne(R.id),"data-tooltip":R.label,"data-tooltip-position":"right"},[R.id==="text"?(l(),i("span",rm,"T")):R.id==="blocks"?(l(),i("span",um,[...M[20]||(M[20]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):R.id==="resources"?(l(),i("span",dm,[...M[21]||(M[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):R.id==="interactive-elements"?(l(),i("span",cm,[...M[22]||(M[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):R.id==="interactive-questions"?(l(),i("span",pm,[...M[23]||(M[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):R.id==="widgets"?(l(),i("span",vm,[...M[24]||(M[24]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):R.id==="insert"?(l(),i("span",fm,[...M[25]||(M[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):R.id==="style"?(l(),i("span",mm,[...M[26]||(M[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):R.id==="background"?(l(),i("span",gm,[...M[27]||(M[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):R.id==="pages"?(l(),i("span",bm,[...M[28]||(M[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):O("",!0),K(" "+k(R.label),1)],10,sm)),64))]),mt(Mt,{name:"side-panel-slide"},{default:rt(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="slides"?(l(),He(kl,{key:0})):O("",!0)]),_:1}),mt(Mt,{name:"side-panel-slide"},{default:rt(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="blocks"?(l(),He(Jl,{key:0})):O("",!0)]),_:1}),mt(Bp),e("aside",hm,[e("div",ym,[(l(),i(Z,null,ve([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],R=>e("button",{key:R.id,class:J(["panel-tab",I(c).rightPanelTab===R.id&&"active"]),onClick:x=>I(c).setRightPanel(R.id),"data-tooltip":`Open ${R.label}`,"data-tooltip-position":"bottom"},[e("span",wm,k(R.icon),1),e("span",km,k(R.label),1)],10,xm)),64))]),e("div",Cm,[mt(Mt,{name:"editor-panel-switch",mode:"out-in"},{default:rt(()=>[(l(),i("div",{key:U.value,class:"panel-content-view"},[I(c).rightPanelTab==="properties"?(l(),He(mc,{key:0})):I(c).rightPanelTab==="layers"?(l(),He(bi,{key:1})):I(c).rightPanelTab==="ai"?(l(),He(Y1,{key:2})):I(c).rightPanelTab==="theme"?(l(),He(If,{key:3})):O("",!0)]))]),_:1})])])]),I(c).showExportModal?(l(),He(Qf,{key:0})):O("",!0),V.value?(l(),He(Hn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:M[4]||(M[4]=R=>V.value=!1),onConfirm:Pe})):O("",!0),I(N)?(l(),He(Yn,{key:2,mode:I(a),topic:I(C),context:I(E),"project-name":I(q),"slide-count":I(v),"question-count":I(W),difficulty:I(ie),"question-type":I($e),"project-name-placeholder":I(_),"primary-action-label":I(ce),"creation-error":I(we),"is-submitting":I(j),"is-generating":I(H).isGenerating,"has-api-key":!!I(H).apiKey,onClose:M[5]||(M[5]=R=>N.value=!1),onCreate:I(ee),"onUpdate:mode":M[6]||(M[6]=R=>a.value=R),"onUpdate:topic":M[7]||(M[7]=R=>C.value=R),"onUpdate:context":M[8]||(M[8]=R=>E.value=R),"onUpdate:projectName":M[9]||(M[9]=R=>q.value=R),"onUpdate:slideCount":M[10]||(M[10]=R=>v.value=R),"onUpdate:questionCount":M[11]||(M[11]=R=>W.value=R),"onUpdate:difficulty":M[12]||(M[12]=R=>ie.value=R),"onUpdate:questionType":M[13]||(M[13]=R=>$e.value=R)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):O("",!0)])):(l(),i("div",$m,[M[29]||(M[29]=e("h2",null,"Project not found",-1)),M[30]||(M[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:Y},"Go to Dashboard")]))}},zm=Qe(Sm,[["__scopeId","data-v-902e6311"]]);export{zm as default};
