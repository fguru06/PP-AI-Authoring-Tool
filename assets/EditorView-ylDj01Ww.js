import{K as Sn,P as In,v as l,F as i,B as e,C as k,H as Z,I as ve,E as qe,D as J,u as $,Q as ge,M as et,G as V,L as X,q as He,R as An,f as E,r as B,N as pe,O as ke,x as rt,S as Et,w as Ye,n as Mn,i as qn,U as Rn,y as mt,T as Mt,V as At,z as On,p as Fn,J as Cn}from"./vue-core-DCl8Fgqc.js";import{u as Un,d as Vn}from"./vue-ecosystem-Da9kls6U.js";import{u as nt,M as En,c as Wn,a as Gn,C as Hn,A as Yn,b as Qn}from"./ConfirmActionModal-Cew6Hpkk.js";import{u as lt,b as Jn,g as Pt,C as Lt,c as Xn,n as Kn,p as Zn,s as el,m as Pn,f as Tn,d as Nn,e as tl,h as jt,B as ol,i as nl,j as ll,k as $n,a as zn}from"./projectStore-DFHY040O.js";import{_ as Qe}from"./index-Cx65YB_K.js";import{C as il}from"./ChartElement-Csyh8Kzp.js";import{J as al}from"./jszip-529iNPX7.js";function sl(I){function s(r){var b,L,oe,ne,W,me,q,T,a,C,M,R,v,G,ae,$e,we;const c=r.ctrlKey||r.metaKey,p=r.key.toLowerCase(),h=r.target.tagName.toLowerCase(),y=h==="input"||h==="textarea"||r.target.isContentEditable;y&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!r.shiftKey?(r.preventDefault(),(b=I.undo)==null||b.call(I)):c&&(p==="y"||p==="z"&&r.shiftKey)?(r.preventDefault(),(L=I.redo)==null||L.call(I)):c&&p==="c"?(r.preventDefault(),(oe=I.copy)==null||oe.call(I)):c&&p==="v"?(r.preventDefault(),(ne=I.paste)==null||ne.call(I)):c&&p==="x"?(r.preventDefault(),(W=I.cut)==null||W.call(I)):c&&p==="d"?(r.preventDefault(),(me=I.duplicate)==null||me.call(I)):c&&p==="a"?(r.preventDefault(),(q=I.selectAll)==null||q.call(I)):p==="delete"||p==="backspace"?y||(r.preventDefault(),(T=I.delete)==null||T.call(I)):p==="escape"?(a=I.escape)==null||a.call(I):c&&p==="g"?(r.preventDefault(),(C=I.toggleGrid)==null||C.call(I)):c&&p==="="||c&&p==="+"?(r.preventDefault(),(M=I.zoomIn)==null||M.call(I)):c&&p==="-"?(r.preventDefault(),(R=I.zoomOut)==null||R.call(I)):c&&p==="0"?(r.preventDefault(),(v=I.zoomReset)==null||v.call(I)):p==="arrowleft"?(G=I.nudge)==null||G.call(I,-1,0):p==="arrowright"?(ae=I.nudge)==null||ae.call(I,1,0):p==="arrowup"?($e=I.nudge)==null||$e.call(I,0,-1):p==="arrowdown"&&((we=I.nudge)==null||we.call(I,0,1)))}Sn(()=>window.addEventListener("keydown",s)),In(()=>window.removeEventListener("keydown",s))}const rl={class:"slide-panel"},ul={class:"slide-panel-header"},dl={class:"slide-count"},cl={class:"slides-list"},pl=["onClick","onContextmenu","onDragstart","onDrop"],vl={class:"slide-number"},fl=["viewBox"],ml=["x","y","width","height","fill"],gl=["d","stroke"],bl=["d","fill"],hl={class:"slide-footer"},yl={class:"slide-title"},xl=["onClick"],wl={__name:"SlidePanel",setup(I){const s=nt(),r=lt(),c=E(()=>r.getProject(s.projectId)),p=E(()=>Pt(c.value)),h=E(()=>{var j,_;return((_=(j=c.value)==null?void 0:j.slides)==null?void 0:_.slice().sort((ce,se)=>ce.order-se.order))||[]}),y=B({show:!1,x:0,y:0,slideId:null});function b(j){s.setCurrentSlide(j)}function L(){const j=h.value.findIndex(ce=>ce.id===s.currentSlideId),_=r.addSlide(s.projectId,j);_&&s.setCurrentSlide(_.id)}function oe(j){var se,ee;const _=h.value.findIndex(be=>be.id===j);r.deleteSlide(s.projectId,j);const ce=((se=c.value)==null?void 0:se.slides)||[];if(ce.length>0){const be=ce.slice().sort((D,U)=>D.order-U.order),S=Math.min(_,be.length-1);s.setCurrentSlide((ee=be[S])==null?void 0:ee.id)}}function ne(j,_){j.preventDefault(),y.value={show:!0,x:j.clientX,y:j.clientY,slideId:_},setTimeout(()=>window.addEventListener("click",W,{once:!0}),0)}function W(){y.value.show=!1}function me(){const j=r.duplicateSlide(s.projectId,y.value.slideId);j&&s.setCurrentSlide(j.id),W()}function q(){oe(y.value.slideId),W()}function T(j,_){j.stopPropagation(),oe(_)}function a(){const j=h.value.findIndex(_=>_.id===y.value.slideId);j>0&&r.reorderSlides(s.projectId,j,j-1),W()}function C(){const j=h.value.findIndex(_=>_.id===y.value.slideId);j<h.value.length-1&&r.reorderSlides(s.projectId,j,j+1),W()}let M=-1;function R(j,_){M=_,j.dataTransfer.effectAllowed="move"}function v(j,_){j.preventDefault(),M!==-1&&M!==_&&r.reorderSlides(s.projectId,M,_),M=-1}function G(j){return j.backgroundType==="gradient"&&j.backgroundGradient?{background:j.backgroundGradient}:j.backgroundType==="image"&&j.backgroundImage?{backgroundImage:`url(${j.backgroundImage})`,backgroundSize:"cover"}:{background:j.background||"#fff"}}function ae(j){return{left:j.x/p.value.width*100+"%",top:j.y/p.value.height*100+"%",width:j.width/p.value.width*100+"%",height:j.height/p.value.height*100+"%"}}function $e(j){var _,ce;return{background:j.type==="shape"?(_=j.content)==null?void 0:_.fillColor:j.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:j.type==="shape"&&((ce=j.content)==null?void 0:ce.shapeType)==="circle"?"50%":void 0}}function we(j){var _;return Jn(j.content||{},j.width||420,j.height||280,((_=c.value)==null?void 0:_.theme)||{})}return(j,_)=>(l(),i("div",rl,[e("div",ul,[_[2]||(_[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",dl,k(h.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:L,"data-tooltip":"Add slide","aria-label":"Add slide"},[..._[1]||(_[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",cl,[(l(!0),i(Z,null,ve(h.value,(ce,se)=>(l(),i("div",{key:ce.id,class:J(["slide-thumb-item",$(s).currentSlideId===ce.id&&"active"]),draggable:"true",onClick:ee=>b(ce.id),onContextmenu:ee=>ne(ee,ce.id),onDragstart:ee=>R(ee,se),onDragover:_[0]||(_[0]=qe(()=>{},["prevent"])),onDrop:ee=>v(ee,se)},[e("div",vl,k(se+1),1),e("div",{class:"slide-thumb",style:ge(G(ce))},[(l(!0),i(Z,null,ve(ce.elements.slice(0,6),ee=>{var be;return l(),i("div",{key:ee.id,class:"mini-element-frame",style:ge(ae(ee))},[ee.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${ee.width||420} ${ee.height||280}`,preserveAspectRatio:"none"},[we(ee).type==="bar"?(l(!0),i(Z,{key:0},ve(we(ee).cartesian.bars,S=>(l(),i("rect",{key:`mini-bar-${S.id}`,x:S.x,y:S.y,width:S.width,height:S.height,fill:S.color,rx:"6"},null,8,ml))),128)):we(ee).type==="line"?(l(),i("path",{key:1,d:we(ee).cartesian.linePath,stroke:((be=we(ee).cartesian.points[0])==null?void 0:be.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,gl)):(l(!0),i(Z,{key:2},ve(we(ee).circle.slices,S=>(l(),i("path",{key:`mini-slice-${S.id}`,d:S.path,fill:S.color},null,8,bl))),128))],8,fl)):(l(),i("div",{key:1,class:"mini-element",style:ge($e(ee))},null,4))],4)}),128))],4),e("div",hl,[e("div",yl,k(ce.title||`Slide ${se+1}`),1),h.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:ee=>T(ee,ce.id)},[..._[3]||(_[3]=[et('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,xl)):V("",!0)])],42,pl))),128))]),e("button",{class:"add-slide-bottom",onClick:L},[..._[4]||(_[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),X(" Add Slide ",-1)])]),(l(),He(An,{to:"body"},[y.value.show?(l(),i("div",{key:0,class:"context-menu",style:ge({left:y.value.x+"px",top:y.value.y+"px"})},[e("button",{class:"ctx-item",onClick:me},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:C},"Move Down"),_[5]||(_[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:q},"Delete Slide")],4)):V("",!0)]))]))}},kl=Qe(wl,[["__scopeId","data-v-30eea542"]]),Cl={class:"blocks-panel"},$l={class:"blocks-panel-header"},Sl={class:"blocks-toolbar"},Il={class:"blocks-categories"},Al=["onClick"],Ml={class:"blocks-panel-body"},El={class:"blocks-save-card"},Pl=["disabled"],Tl={class:"blocks-list"},Nl=["onDragstart"],zl={class:"block-thumb-stage"},Bl={class:"block-card-body"},_l={class:"block-card-head"},Ll={class:"block-name"},jl={class:"block-meta"},Dl={key:0},ql={key:1},Rl=["onClick"],Ol={class:"block-description"},Fl={key:0,class:"block-binding-note"},Ul={class:"block-tags"},Vl=["onClick"],Wl={class:"binding-modal-body"},Gl={class:"binding-modal-intro"},Hl=["for"],Yl=["id","onUpdate:modelValue"],Ql={__name:"BlocksPanel",setup(I){const s=nt(),r=lt(),c=B(""),p=B("all"),h=B(""),y=B("Custom"),b=B(!1),L=B(null),oe=B({}),ne=E(()=>r.getProject(s.projectId)),W=E(()=>{var S,D;return(D=(S=ne.value)==null?void 0:S.slides)==null?void 0:D.find(U=>U.id===s.currentSlideId)}),me=E(()=>r.getContentBlocks(s.projectId)),q=E(()=>{const S=new Set(["all"]);return me.value.forEach(D=>S.add(D.category||"Custom")),Array.from(S)}),T=E(()=>{var D;const S=new Set(s.selectedElementIds);return(((D=W.value)==null?void 0:D.elements)||[]).filter(U=>S.has(U.id))}),a=E(()=>{var S;return Array.isArray((S=L.value)==null?void 0:S.bindings)?L.value.bindings:[]}),C=E(()=>{const S=c.value.trim().toLowerCase();return me.value.filter(D=>p.value==="all"||(D.category||"Custom")===p.value?S?[D.name,D.description,D.category,...D.tags||[]].join(" ").toLowerCase().includes(S):!0:!1)});function M(S){const D=Array.isArray(S==null?void 0:S.elements)?S.elements:[];if(!D.length)return{minX:0,minY:0,width:1,height:1};const U=Math.min(...D.map(Pe=>Number(Pe.x||0))),Y=Math.min(...D.map(Pe=>Number(Pe.y||0))),he=Math.max(...D.map(Pe=>Number(Pe.x||0)+Number(Pe.width||0))),Re=Math.max(...D.map(Pe=>Number(Pe.y||0)+Number(Pe.height||0)));return{minX:U,minY:Y,width:Math.max(1,he-U),height:Math.max(1,Re-Y)}}function R(S,D){const U=M(S);return{left:`${(Number(D.x||0)-U.minX)/U.width*100}%`,top:`${(Number(D.y||0)-U.minY)/U.height*100}%`,width:`${Number(D.width||0)/U.width*100}%`,height:`${Number(D.height||0)/U.height*100}%`}}function v(S){var D,U,Y,he,Re,Pe,Le;return S.type==="shape"?{background:((D=S.content)==null?void 0:D.fillColor)||"#cbd5e1",borderRadius:((U=S.content)==null?void 0:U.shapeType)==="circle"?"50%":`${Number(((Y=S.content)==null?void 0:Y.borderRadius)||10)}px`,border:`${Math.max(0,Number(((he=S.content)==null?void 0:he.borderWidth)||0))}px solid ${((Re=S.content)==null?void 0:Re.borderColor)||"transparent"}`}:S.type==="button"?{background:((Pe=S.content)==null?void 0:Pe.bgColor)||"#6c47ff",borderRadius:`${Number(((Le=S.content)==null?void 0:Le.borderRadius)||10)}px`}:S.type==="image"||S.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:S.type==="text"||S.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function G(S,D){const U=S.type==="heading"?2:3,Y=Math.max(18,100/(U+1.25));return{width:`${D===U-1?72:100}%`,height:`${S.type==="heading"?Y:Y-2}%`}}function ae(S){S.length&&(s.setSelection(S.map(D=>D.id)),s.focusPropertiesSection("content"),s.setActiveTool("select"))}function $e(S){return Array.isArray(S==null?void 0:S.bindings)&&S.bindings.length>0}function we(){b.value=!1,L.value=null,oe.value={}}function j(S,D=null){const U=r.insertContentBlock(s.projectId,s.currentSlideId,S.id,D?{bindingValues:D}:{});ae(U)}function _(S){if(!$e(S)){j(S);return}L.value=S,oe.value=Object.fromEntries(S.bindings.map(D=>[D.id,D.defaultValue||""])),b.value=!0}function ce(){L.value&&(j(L.value,{...oe.value}),we())}function se(){var U,Y;const S=h.value.trim();if(!S||!T.value.length)return;r.saveSelectionAsContentBlock(s.projectId,s.currentSlideId,T.value.map(he=>he.id),{name:S,category:y.value.trim()||"Custom",accent:((Y=(U=ne.value)==null?void 0:U.theme)==null?void 0:Y.primaryColor)||"#6c47ff"})&&(h.value="",p.value="Custom")}function ee(S){r.deleteContentBlock(s.projectId,S)}function be(S,D){S.dataTransfer&&(S.dataTransfer.effectAllowed="copy",S.dataTransfer.setData(Lt,JSON.stringify({id:D.id})),S.dataTransfer.setData("text/plain",D.name))}return(S,D)=>(l(),i("div",Cl,[e("div",$l,[D[5]||(D[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:D[0]||(D[0]=U=>$(s).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...D[4]||(D[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",Sl,[pe(e("input",{"onUpdate:modelValue":D[1]||(D[1]=U=>c.value=U),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[ke,c.value]]),e("div",Il,[(l(!0),i(Z,null,ve(q.value,U=>(l(),i("button",{key:U,type:"button",class:J(["blocks-category-chip",p.value===U&&"active"]),onClick:Y=>p.value=U},k(U==="all"?"All":U),11,Al))),128))])]),e("div",Ml,[e("div",El,[D[6]||(D[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),D[7]||(D[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),pe(e("input",{"onUpdate:modelValue":D[2]||(D[2]=U=>h.value=U),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[ke,h.value]]),pe(e("input",{"onUpdate:modelValue":D[3]||(D[3]=U=>y.value=U),class:"input",placeholder:"Category"},null,512),[[ke,y.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!T.value.length||!h.value.trim(),onClick:se}," Save "+k(T.value.length?`${T.value.length} item${T.value.length>1?"s":""}`:"selection")+" as block ",9,Pl)]),e("div",Tl,[(l(!0),i(Z,null,ve(C.value,U=>(l(),i("div",{key:U.id,class:"block-card",draggable:"true",onDragstart:Y=>be(Y,U)},[e("div",{class:"block-thumb",style:ge({"--block-accent":U.accent||"#6c47ff"})},[e("div",zl,[(l(!0),i(Z,null,ve(U.elements,Y=>(l(),i("div",{key:`${U.id}-${Y.type}-${Y.x}-${Y.y}`,class:"block-thumb-frame",style:ge(R(U,Y))},[["text","heading"].includes(Y.type)?(l(),i("div",{key:0,class:J(["thumb-text",Y.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(Z,null,ve(Y.type==="heading"?2:3,he=>(l(),i("span",{key:`${U.id}-${Y.type}-${Y.x}-${Y.y}-${he}`,class:"thumb-text-line",style:ge(G(Y,he-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:ge(v(Y))},null,4))],4))),128))])],4),e("div",Bl,[e("div",_l,[e("div",null,[e("div",Ll,k(U.name),1),e("div",jl,[X(k(U.category),1),U.scope==="custom"?(l(),i("span",Dl," · Custom")):V("",!0),$e(U)?(l(),i("span",ql," · "+k(U.bindings.length)+" field"+k(U.bindings.length>1?"s":""),1)):V("",!0)])]),U.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:Y=>ee(U.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...D[8]||(D[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,Rl)):V("",!0)]),e("p",Ol,k(U.description||"Reusable layout block"),1),$e(U)?(l(),i("div",Fl,"Editable placeholders included")):V("",!0),e("div",Ul,[(l(!0),i(Z,null,ve(U.tags||[],Y=>(l(),i("span",{key:`${U.id}-${Y}`,class:"block-tag"},"#"+k(Y),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:Y=>_(U)},k($e(U)?"Insert with Fields":"Insert Block"),9,Vl)])],40,Nl))),128))])]),b.value?(l(),He(En,{key:0,title:"Fill Template Fields",size:"md",onClose:we},{footer:rt(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:we},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:ce},"Insert Block")]),default:rt(()=>{var U;return[e("div",Wl,[e("p",Gl,[D[9]||(D[9]=X(" Customize the placeholder text before inserting ",-1)),e("strong",null,k((U=L.value)==null?void 0:U.name),1),D[10]||(D[10]=X(". ",-1))]),(l(!0),i(Z,null,ve(a.value,Y=>(l(),i("div",{key:Y.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${Y.id}`},k(Y.label),9,Hl),pe(e("textarea",{id:`binding-${Y.id}`,"onUpdate:modelValue":he=>oe.value[Y.id]=he,class:"textarea binding-input"},null,8,Yl),[[ke,oe.value[Y.id]]])]))),128))])]}),_:1})):V("",!0)]))}},Jl=Qe(Ql,[["__scopeId","data-v-aec67d0c"]]),Xl={class:"layer-panel"},Kl={class:"layer-header panel-section"},Zl={class:"panel-title",style:{"margin-bottom":"0"}},ei={class:"layer-count"},ti={key:0,class:"layers-empty"},oi={key:1,class:"layers-list"},ni=["onClick"],li={class:"layer-type-icon"},ii={class:"layer-name"},ai={class:"layer-actions"},si=["onClick","data-tooltip"],ri={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ui={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},di=["onClick","data-tooltip"],ci={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pi={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vi=["onClick"],fi=["onClick"],mi=["onClick"],gi={__name:"LayerPanel",setup(I){const s=nt(),r=lt(),c=E(()=>r.getProject(s.projectId)),p=E(()=>{var T,a;return(a=(T=c.value)==null?void 0:T.slides)==null?void 0:a.find(C=>C.id===s.currentSlideId)}),h=E(()=>{var T;return[...((T=p.value)==null?void 0:T.elements)||[]].sort((a,C)=>(C.zIndex||0)-(a.zIndex||0))});function y(T){s.selectElement(T)}function b(T){r.updateElement(s.projectId,s.currentSlideId,T.id,{visible:!T.visible})}function L(T){r.updateElement(s.projectId,s.currentSlideId,T.id,{locked:!T.locked})}function oe(T){r.reorderElement(s.projectId,s.currentSlideId,T,"up")}function ne(T){r.reorderElement(s.projectId,s.currentSlideId,T,"down")}function W(T){r.deleteElement(s.projectId,s.currentSlideId,T),s.selectedElementId===T&&s.clearSelection()}function me(T){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[T]||"◆"}function q(T){var a,C,M;return(a=T.content)!=null&&a.text?T.content.text.slice(0,24):(C=T.content)!=null&&C.label?T.content.label:(M=T.content)!=null&&M.question?T.content.question.slice(0,24):T.type.charAt(0).toUpperCase()+T.type.slice(1)}return(T,a)=>(l(),i("div",Xl,[e("div",Kl,[e("div",Zl,[a[0]||(a[0]=X(" Layers ",-1)),e("span",ei,k(h.value.length),1)])]),h.value.length===0?(l(),i("div",ti,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",oi,[(l(!0),i(Z,null,ve(h.value,C=>(l(),i("div",{key:C.id,class:J(["layer-item",$(s).selectedElementIds.includes(C.id)&&"selected",C.locked&&"locked",!C.visible&&"hidden"]),onClick:M=>y(C.id)},[e("span",li,k(me(C.type)),1),e("span",ii,k(q(C)),1),e("div",ai,[e("button",{class:J(["layer-action-btn",{active:C.visible}]),onClick:qe(M=>b(C),["stop"]),"data-tooltip":C.visible?"Hide":"Show"},[C.visible?(l(),i("svg",ri,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",ui,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,si),e("button",{class:J(["layer-action-btn",{active:C.locked}]),onClick:qe(M=>L(C),["stop"]),"data-tooltip":C.locked?"Unlock":"Lock"},[C.locked?(l(),i("svg",ci,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",pi,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,di),e("button",{class:"layer-action-btn",onClick:qe(M=>oe(C.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,vi),e("button",{class:"layer-action-btn",onClick:qe(M=>ne(C.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,fi),e("button",{class:"layer-action-btn danger",onClick:qe(M=>W(C.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,mi)])],10,ni))),128))]))]))}},bi=Qe(gi,[["__scopeId","data-v-7407acd8"]]),hi={class:"panel-section"},yi={class:"preset-toolbar"},xi=["value"],wi=["value"],ki=["value"],Ci={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},$i=["onClick"],Si={class:"preset-meta-chip muted"},Ii={key:1,class:"import-review"},Ai={class:"motion-scrubber-header"},Mi={class:"preset-toolbar compact"},Ei=["value"],Pi=["value"],Ti={class:"import-list"},Ni=["onUpdate:modelValue"],zi={class:"import-item-title"},Bi={class:"preset-meta-chip"},_i={key:0,class:"preset-meta-chip muted"},Li={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(I,{emit:s}){const r=s;return(c,p)=>(l(),i("div",hi,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",yi,[e("input",{value:I.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=h=>r("update:searchQuery",h.target.value))},null,40,xi),e("select",{value:I.categoryFilter,class:"select",onChange:p[1]||(p[1]=h=>r("update:categoryFilter",h.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(Z,null,ve(I.availableCategories,h=>(l(),i("option",{key:`library-${h}`,value:h},k(h),9,ki))),128))],40,wi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=h=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=h=>r("export-presets"))},"Export")]),I.recentPresets.length?(l(),i("div",Ci,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(Z,null,ve(I.recentPresets,h=>(l(),i("div",{class:"preset-item",key:`recent-${h.id}`},[e("button",{type:"button",class:"preset-chip",onClick:y=>r("apply-preset",h)},k(h.name),9,$i),e("span",Si,"Used "+k(h.usageCount)+"x",1)]))),128))])):V("",!0),I.pendingImportedPresets.length?(l(),i("div",Ii,[e("div",Ai,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=h=>r("clear-imports"))},"Discard")]),e("div",Mi,[e("select",{value:I.importScopeFilter,class:"select",onChange:p[5]||(p[5]=h=>r("update:importScopeFilter",h.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Ei),e("select",{value:I.importConflictMode,class:"select",onChange:p[6]||(p[6]=h=>r("update:importConflictMode",h.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Pi),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=h=>r("apply-imports"))},"Merge Selected")]),e("div",Ti,[(l(!0),i(Z,null,ve(I.filteredPendingImports,h=>(l(),i("label",{key:`pending-${h.id}`,class:"import-item"},[pe(e("input",{"onUpdate:modelValue":y=>h.selected=y,type:"checkbox"},null,8,Ni),[[Et,h.selected]]),e("span",zi,k(h.name),1),e("span",Bi,k(h.scope),1),h.category?(l(),i("span",_i,k(h.category),1)):V("",!0)]))),128))])])):V("",!0)]))}},ji=Qe(Li,[["__scopeId","data-v-61f99273"]]),Di={key:1,class:"panel-section"},qi={class:"field-hint"},Ri={class:"motion-scrubber-shell"},Oi={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Fi=["onClick"],Ui={class:"motion-preview"},Vi={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Wi={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Gi={class:"motion-card-label"},Hi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Yi={class:"form-group"},Qi={class:"form-group"},Ji={class:"form-group",style:{"margin-top":"var(--space-3)"}},Xi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ki={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Zi={key:0,class:"preset-list"},ea=["onDragstart","onDragenter","onDrop"],ta=["onClick"],oa={key:0,class:"preset-meta-chip"},na=["onClick"],la=["onClick"],ia=["onClick"],aa={key:1,class:"preset-row preset-edit-row"},sa=["onClick"],ra={key:1,class:"field-hint"},ua={key:2,class:"panel-section"},da={class:"slide-settings-tabs"},ca={key:0,class:"slide-settings-pane"},pa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},va={class:"form-group"},fa={class:"bg-type-tabs"},ma=["onClick"],ga={key:0,class:"color-row"},ba=["value"],ha=["value"],ya={class:"slide-settings-subsection"},xa={class:"canvas-size-grid"},wa=["onClick"],ka={class:"canvas-size-icon-shell"},Ca={class:"canvas-size-name"},$a={class:"canvas-size-ratio"},Sa={class:"canvas-custom-card"},Ia={class:"canvas-custom-header"},Aa={class:"field-hint"},Ma={class:"canvas-custom-inputs"},Ea={class:"form-group"},Pa={class:"canvas-size-input-wrap"},Ta=["value"],Na={class:"form-group"},za={class:"canvas-size-input-wrap"},Ba=["value"],_a={class:"check-row canvas-size-lock"},La={class:"slide-settings-subsection"},ja={key:1,class:"slide-settings-pane"},Da=["value"],qa={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ra=["value"],Oa={class:"check-row"},Fa=["checked"],Ua={key:2,class:"slide-settings-pane"},Va={class:"check-row"},Wa=["checked"],Ga={class:"check-row"},Ha=["checked"],Ya={class:"check-row"},Qa=["checked"],Ja={class:"check-row"},Xa=["checked"],Ka={class:"check-row"},Za=["checked"],es={class:"panel-title"},ts={class:"element-type-badge"},os={class:"geo-grid"},ns={class:"form-group"},ls=["value"],is={class:"form-group"},as=["value"],ss={class:"form-group"},rs=["value"],us={class:"form-group"},ds=["value"],cs={class:"form-group"},ps=["value"],vs={class:"form-group"},fs=["value"],ms={class:"motion-scrubber-shell"},gs={class:"motion-card-grid"},bs=["onClick"],hs={class:"motion-preview"},ys={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},xs={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},ws={class:"motion-card-label"},ks={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Cs={class:"form-group"},$s=["value"],Ss={class:"form-group"},Is=["value"],As={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ms={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Es={key:0,class:"preset-list"},Ps=["onDragstart","onDragenter","onDrop"],Ts=["onClick"],Ns={key:0,class:"preset-meta-chip"},zs=["onClick"],Bs=["onClick"],_s=["onClick"],Ls={key:1,class:"preset-row preset-edit-row"},js=["onClick"],Ds={key:1,class:"field-hint"},qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rs=["value"],Os={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Fs={class:"form-group"},Us=["value"],Vs={class:"form-group"},Ws=["value"],Gs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Hs=["value"],Ys=["value"],Qs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Js={class:"align-btns"},Xs=["onClick"],Ks={class:"form-group",style:{"margin-top":"var(--space-3)"}},Zs={class:"style-btns"},er={class:"form-group",style:{"margin-top":"var(--space-3)"}},tr={class:"color-row"},or=["value"],nr=["value"],lr={class:"form-group",style:{"margin-top":"var(--space-3)"}},ir=["value"],ar={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},sr={class:"form-group"},rr=["value"],ur={class:"form-group"},dr=["value"],cr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pr=["value"],vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fr=["value"],mr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gr=["value"],br={class:"form-group"},hr=["value"],yr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},xr={class:"form-group"},wr=["value"],kr={class:"form-group"},Cr=["value"],$r={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sr=["value"],Ir={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ar={class:"color-row"},Mr=["value"],Er=["value"],Pr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tr={class:"color-row"},Nr=["value"],zr=["value"],Br={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_r=["value"],Lr={class:"form-group"},jr=["value"],Dr={class:"form-group",style:{"margin-top":"var(--space-3)"}},qr=["value"],Rr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Or=["value"],Fr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ur=["value"],Vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wr=["value"],Gr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Hr={class:"chart-data-actions"},Yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qr=["value","placeholder"],Jr={class:"chart-palette-preview"},Xr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Kr={class:"form-group"},Zr=["value"],eu={class:"form-group"},tu=["value"],ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},nu={class:"form-group"},lu=["value"],iu={class:"form-group"},au=["value"],su={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},ru={class:"form-group"},uu=["value"],du={key:0,class:"form-group"},cu=["value"],pu={key:1,class:"form-group"},vu=["value"],fu={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},mu={class:"form-group"},gu=["value"],bu={class:"check-row",style:{"margin-top":"20px"}},hu=["checked"],yu={class:"check-row"},xu=["checked"],wu={key:1,class:"check-row"},ku=["checked"],Cu={class:"check-row"},$u=["checked"],Su={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Iu=["value"],Au={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mu=["value"],Eu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pu=["value"],Tu={key:0,class:"form-group"},Nu=["value"],zu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Bu={class:"form-group"},_u=["value"],Lu={class:"form-group"},ju=["value"],Du={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},qu={class:"form-group"},Ru=["value"],Ou={class:"form-group"},Fu=["value"],Uu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Vu={class:"form-group"},Wu=["value"],Gu={class:"form-group"},Hu=["value"],Yu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Qu={class:"form-group"},Ju=["value"],Xu=["value"],Ku={class:"form-group"},Zu=["value"],ed={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},td=["value"],od={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nd={class:"color-row"},ld=["value"],id=["value"],ad={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},sd={class:"form-group"},rd=["value"],ud={class:"form-group"},dd=["value"],cd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pd=["value"],vd={class:"form-group"},fd=["value"],md={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},gd={class:"form-group"},bd=["value"],hd={class:"form-group"},yd=["value"],xd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wd=["value"],kd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cd=["value"],$d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sd=["value"],Id={class:"check-row"},Ad=["checked"],Md={class:"check-row"},Ed=["checked"],Pd={class:"check-row"},Td=["checked"],Nd={class:"check-row"},zd=["checked"],Bd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_d=["value"],Ld={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jd=["value"],Dd={class:"check-row"},qd=["checked"],Rd={class:"check-row"},Od=["checked"],Fd={class:"check-row"},Ud=["checked"],Vd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Wd={class:"form-group"},Gd=["value"],Hd={class:"form-group"},Yd=["value"],Qd={class:"form-group",style:{"margin-top":"var(--space-3)"}},Jd=["value"],Xd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Kd=["value"],Zd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ec=["value"],tc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},oc=["value"],nc={class:"form-group"},lc=["value"],ic={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ac={class:"form-group"},sc=["value"],rc={class:"form-group"},uc=["value"],dc={class:"form-group",style:{"margin-top":"var(--space-3)"}},cc=["value"],pc={class:"panel-section"},vc={class:"actions-list"},fc={__name:"PropertiesPanel",setup(I){const s=nt(),r=lt(),c=E(()=>r.getProject(s.projectId)),p=E(()=>{var d,t;return(t=(d=c.value)==null?void 0:d.slides)==null?void 0:t.find(F=>F.id===s.currentSlideId)}),h=E(()=>{var d;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((d=c.value)==null?void 0:d.settings)||{}}}),y=E(()=>Pt(h.value)),b=E(()=>Pn(h.value)),L=E(()=>Tn(y.value.width,y.value.height)),oe=B(!0),ne=B("canvas"),W=E(()=>Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]),me=E(()=>W.value.filter(d=>d.scope!=="group")),q=E(()=>W.value.filter(d=>d.scope==="group")),T=E(()=>{var t;const d=new Set(s.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(F=>d.has(F.id))}),a=E(()=>{var d,t;return s.selectedElementId?(t=(d=p.value)==null?void 0:d.elements)==null?void 0:t.find(F=>F.id===s.selectedElementId):null}),C=E(()=>s.multiSelection||!!a.value),M=E(()=>s.multiSelection?"group":"single"),R=E(()=>{var t,F;const d=(F=(t=a.value)==null?void 0:t.animations)==null?void 0:F[0];return{type:(d==null?void 0:d.type)||"auto",delay:Number((d==null?void 0:d.delay)||0),duration:Number((d==null?void 0:d.duration)||.64)}}),v=E(()=>{var Be,We;const d=T.value.map(Ue=>{var ft;return((ft=Ue.animations)==null?void 0:ft[0])||null}),t=((Be=d[0])==null?void 0:Be.type)||"auto",F=Number(((We=d[0])==null?void 0:We.duration)||.64),fe=d.every(Ue=>((Ue==null?void 0:Ue.type)||"auto")===t),Me=d.every(Ue=>Number((Ue==null?void 0:Ue.duration)||.64)===F);return{type:fe?t:"mixed",duration:Me?F:.64}}),G=B(0),ae=B(0),$e=B(""),we=B(""),j=B(""),_=B(""),ce=B(""),se=B(""),ee=B(""),be=B(""),S=B(""),D=B(""),U=B(""),Y=B(""),he=B(""),Re=B("all"),Pe=B(null),Le=B(null),K=B([]),de=B("all"),ie=B("replace"),le=B(""),Ie=B(null),ye=B("");let z=null;const A=B({});Ye(a,d=>{d?A.value=JSON.parse(JSON.stringify(d)):A.value={},(d==null?void 0:d.type)==="chart"&&(le.value="")},{immediate:!0,deep:!0}),Ye(()=>{var d;return[s.propertiesPanelSection,(d=a.value)==null?void 0:d.id,s.rightPanelTab]},async([d,t,F])=>{var Me;if(!d||!t||F!=="properties")return;await Mn();const fe=(Me=Ie.value)==null?void 0:Me.querySelector(`[data-props-anchor="${d}"]`);fe&&(fe.scrollIntoView({behavior:"smooth",block:"start"}),ye.value=d,z&&window.clearTimeout(z),z=window.setTimeout(()=>{ye.value===d&&(ye.value="")},1400))},{immediate:!0});function O(d){a.value&&r.updateElement(s.projectId,s.currentSlideId,a.value.id,d)}function x(d){if(!a.value)return;const t={...a.value.content,...d};O({content:t})}function xe(d,t){const F=parseFloat(t);isNaN(F)||O({[d]:F})}const Ae=B({});Ye(p,d=>{d&&(Ae.value={...d})},{immediate:!0});function je(d){p.value&&r.updateSlide(s.projectId,p.value.id,d)}function Ne(d){if(!c.value)return;const t={...h.value,...d};r.updateProject(s.projectId,{settings:{...t,...Kn(t)}})}function Ve(d){Ne({slideWidth:d.width,slideHeight:d.height})}function pt(d,t){const F=Math.round(Number(t)||0);if(!F)return;const fe={[`slide${d==="width"?"Width":"Height"}`]:F};if(oe.value){const Me=y.value.width,Be=y.value.height;d==="width"?fe.slideHeight=Math.round(F*(Be/Me)):fe.slideWidth=Math.round(F*(Me/Be))}Ne(fe)}const Je=E(()=>{var d;return Nn(((d=c.value)==null?void 0:d.theme)||{})}),at=E(()=>{var t,F;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const d=((F=a.value.content)==null?void 0:F.paletteText)||Je.value.paletteText;return tl(d)});function st(d){const t=Zn(d,{fallbackToDefault:!1});return t.length?el(t):""}function it(d){var F;if(((F=a.value)==null?void 0:F.type)!=="chart")return;const t=st(d);t&&(x({dataText:t}),le.value="")}async function Ge(d){var fe;const t=d.target,F=(fe=t==null?void 0:t.files)==null?void 0:fe[0];if(F)try{const Me=await F.text();it(Me)}finally{t&&(t.value="")}}function yt(){var d;(d=Le.value)==null||d.click()}function ut(){var t,F;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const d=st(((F=a.value.content)==null?void 0:F.dataText)||"");d&&x({dataText:d})}function xt(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&x({...Je.value})}function wt(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&x({paletteText:Je.value.paletteText})}function dt(d){return String(d||"").split(",").map(t=>t.trim()).filter(Boolean)}function kt(d){const t=(d==null?void 0:d.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((d==null?void 0:d.name)||"Imported Preset").trim()||"Imported Preset",category:String((d==null?void 0:d.category)||"").trim(),tags:Array.isArray(d==null?void 0:d.tags)?d.tags.map(F=>String(F).trim()).filter(Boolean):dt(d==null?void 0:d.tags),type:String((d==null?void 0:d.type)||"auto"),delay:Math.max(0,Number(d==null?void 0:d.delay)||0),duration:Math.max(.1,Number(d==null?void 0:d.duration)||.72),stepDelay:Math.max(0,Number(d==null?void 0:d.stepDelay)||0)}}const Ct=E(()=>[...new Set(W.value.map(t=>t.category).filter(Boolean))].sort((t,F)=>t.localeCompare(F))),$t=E(()=>[...W.value].filter(d=>Number(d.usageCount||0)>0).sort((d,t)=>{const F=Number(t.lastUsedAt||0)-Number(d.lastUsedAt||0);return F!==0?F:Number(t.usageCount||0)-Number(d.usageCount||0)}).slice(0,6)),St=E(()=>de.value==="all"?K.value:K.value.filter(d=>d.scope===de.value));function m(d){const t=he.value.trim().toLowerCase(),F=Re.value;return F==="all"||(d.category||"")===F?t?[d.name,d.category,...d.tags||[]].filter(Boolean).some(Me=>String(Me).toLowerCase().includes(t)):!0:!1}const w=E(()=>me.value.filter(m)),Q=E(()=>q.value.filter(m)),H=E(()=>$t.value.filter(d=>M.value==="group"?d.scope==="group":d.scope!=="group"));function Se(d){const t=String(d.name||"").trim();if(!t)return;const F=W.value.findIndex(Be=>Be.scope===d.scope&&Be.name.toLowerCase()===t.toLowerCase()),fe={...d,id:F>=0?W.value[F].id:`motion-${Date.now()}`,name:t,category:String(d.category||"").trim(),tags:Array.isArray(d.tags)?d.tags:dt(d.tags)},Me=[...W.value];F>=0?Me.splice(F,1,fe):Me.push(fe),Ne({motionPresets:Me})}function Ee(d,t){const F=W.value.map(fe=>fe.id===d?{...fe,...t}:fe);Ne({motionPresets:F})}function Oe(d){const t=W.value.find(F=>F.id===d);t&&Ee(d,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function De(d,t){const F=W.value.filter(We=>We.scope===d).map(We=>We.name.toLowerCase()),fe=String(t||"Preset").trim()||"Preset";if(!F.includes(fe.toLowerCase()))return fe;let Me=2,Be=`${fe} Copy`;for(;F.includes(Be.toLowerCase());)Be=`${fe} Copy ${Me}`,Me+=1;return Be}function ue(d){Ne({motionPresets:W.value.filter(t=>t.id!==d)}),j.value===d&&(j.value="",_.value="")}function Ce(d){Se({...d,id:void 0,name:De(d.scope,d.name)})}function Ke(d){j.value=d.id,_.value=d.name,ce.value=d.category||"",se.value=Array.isArray(d.tags)?d.tags.join(", "):""}function Fe(){j.value="",_.value="",ce.value="",se.value=""}function _e(d){const t=String(_.value||"").trim();t&&(Ee(d,{name:t,category:String(ce.value||"").trim(),tags:dt(se.value)}),Fe())}function ze(d,t,F){if(!t||!F||t===F)return;const fe=W.value.filter(ot=>ot.scope===d),Me=fe.findIndex(ot=>ot.id===t),Be=fe.findIndex(ot=>ot.id===F);if(Me===-1||Be===-1)return;const We=[...fe],[Ue]=We.splice(Me,1);We.splice(Be,0,Ue);const ft=W.value.filter(ot=>ot.scope!==d),ht=[];W.value.forEach(ot=>{if(ot.scope===d){We.length&&ht.push(We.shift());return}const It=ft.shift();It&&ht.push(It)}),Ne({motionPresets:ht})}function tt(d){ee.value=d.id,be.value=d.id}function ct(d){ee.value&&(be.value=d.id)}function vt(d){ee.value&&(ze(d.scope,ee.value,d.id),ee.value="",be.value="")}function Tt(){ee.value="",be.value=""}function Nt(){G.value+=1}function zt(){ae.value+=1}function Bt(d,t){je({[d]:t})}function u(d){const t=Math.max(0,Number(d)||0);je({duration:t})}function o(d){var fe;if(!a.value)return;const F={...((fe=a.value.animations)==null?void 0:fe[0])||{type:"auto",delay:0,duration:.64},...d};if(F.type==="auto"){O({animations:[]});return}O({animations:[{type:F.type||"none",delay:Math.max(0,Number(F.delay)||0),duration:Math.max(.1,Number(F.duration)||.64)}]})}const f=B("stagger-in"),N=B(0),g=B(.12),te=B(.72);Ye(T,d=>{d.length&&(f.value=v.value.type==="mixed"?"stagger-in":v.value.type,te.value=v.value.duration)},{immediate:!0,deep:!0});function Te(){if(!T.value.length)return;[...T.value].sort((t,F)=>(t.y||0)!==(F.y||0)?(t.y||0)-(F.y||0):(t.x||0)-(F.x||0)).forEach((t,F)=>{if(f.value==="auto"){r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:f.value,delay:Math.max(0,Number(N.value)||0)+F*Math.max(0,Number(g.value)||0),duration:Math.max(.1,Number(te.value)||.72)}]})})}function Xe(d){f.value=d.type||"stagger-in",N.value=Number(d.delay||0),g.value=Number(d.stepDelay||0),te.value=Number(d.duration||.72),Oe(d.id),zt()}function P(){Se({scope:"group",name:we.value,category:U.value,tags:dt(Y.value),type:f.value,delay:Math.max(0,Number(N.value)||0),stepDelay:Math.max(0,Number(g.value)||0),duration:Math.max(.1,Number(te.value)||.72)}),we.value="",U.value="",Y.value=""}function Ze(d){o({type:d.type||"auto",delay:Number(d.delay||0),duration:Number(d.duration||.72)}),Oe(d.id),Nt()}function gt(){Se({scope:"single",name:$e.value,category:S.value,tags:dt(D.value),type:R.value.type,delay:Math.max(0,Number(R.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(R.value.duration)||.72)}),$e.value="",S.value="",D.value=""}function bt(){var d;(d=Pe.value)==null||d.click()}async function Bn(d){var fe;const t=d.target,F=(fe=t==null?void 0:t.files)==null?void 0:fe[0];if(F)try{const Me=await F.text(),Be=JSON.parse(Me),We=Array.isArray(Be)?Be:Array.isArray(Be.motionPresets)?Be.motionPresets:[];if(!We.length)return;K.value=We.map(Ue=>({...kt(Ue),selected:!0,importName:String((Ue==null?void 0:Ue.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function Dt(){K.value=[]}function _n(){const d=K.value.filter(F=>F.selected);if(!d.length)return;const t=[...W.value];d.forEach(F=>{const fe=t.findIndex(Me=>Me.scope===F.scope&&Me.name.toLowerCase()===F.name.toLowerCase());if(fe>=0){ie.value==="replace"?t.splice(fe,1,{...t[fe],...F,id:t[fe].id}):t.push({...F,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:De(F.scope,F.name)});return}t.push(F)}),Ne({motionPresets:t}),Dt()}function Ln(){var Be;if(!W.value.length)return;const d={version:1,exportedAt:new Date().toISOString(),motionPresets:W.value.map(({id:We,...Ue})=>Ue)},t=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),F=URL.createObjectURL(t),fe=document.createElement("a"),Me=String(((Be=c.value)==null?void 0:Be.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";fe.href=F,fe.download=`${Me}-motion-presets.json`,document.body.appendChild(fe),fe.click(),document.body.removeChild(fe),URL.revokeObjectURL(F)}const jn=E(()=>[{id:`single-${G.value}`,delay:Math.max(0,Number(R.value.delay)||0),duration:Math.max(.1,Number(R.value.duration)||.72),type:R.value.type}]),Dn=E(()=>Array.from({length:Math.min(Math.max(T.value.length,3),5)},(d,t)=>({id:`group-${ae.value}-${t}`,delay:Math.max(0,Number(N.value)||0)+t*Math.max(0,Number(g.value)||0),duration:Math.max(.1,Number(te.value)||.72),type:f.value}))),qt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Rt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(d,t)=>{var F,fe,Me,Be,We,Ue,ft,ht,ot,It,Ot,Ft,Ut,Vt,Wt,Gt,Ht,Yt,Qt,Jt,Xt,Kt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,ho,yo,xo,wo,ko,Co,$o,So,Io,Ao,Mo,Eo,Po,To,No,zo,Bo,_o,Lo,jo,Do,qo,Ro,Oo,Fo,Uo,Vo,Wo,Go,Ho,Yo,Qo,Jo,Xo,Ko,Zo,en,tn,on,nn,ln,an,sn,rn,un,dn,cn,pn,vn,fn,mn,gn,bn,hn,yn,xn,wn;return l(),i("div",{ref_key:"panelRootRef",ref:Ie,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Pe,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:Bn},null,544),e("input",{ref_key:"chartImportInput",ref:Le,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:Ge},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),C.value?(l(),He(ji,{key:0,"search-query":he.value,"category-filter":Re.value,"available-categories":Ct.value,"recent-presets":H.value,"pending-imported-presets":K.value,"filtered-pending-imports":St.value,"import-scope-filter":de.value,"import-conflict-mode":ie.value,"onUpdate:searchQuery":t[0]||(t[0]=n=>he.value=n),"onUpdate:categoryFilter":t[1]||(t[1]=n=>Re.value=n),onTriggerImport:bt,onExportPresets:Ln,onApplyPreset:t[2]||(t[2]=n=>M.value==="group"?Xe(n):Ze(n)),onClearImports:Dt,"onUpdate:importScopeFilter":t[3]||(t[3]=n=>de.value=n),"onUpdate:importConflictMode":t[4]||(t[4]=n=>ie.value=n),onApplyImports:_n},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):V("",!0),$(s).multiSelection?(l(),i("div",Di,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",qi,k(T.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",Ri,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:zt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${ae.value}`},[(l(!0),i(Z,null,ve(Dn.value,n=>(l(),i("span",{key:n.id,class:J(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:ge({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",Oi,[(l(),i(Z,null,ve(qt,n=>e("button",{key:`group-${n.value}`,type:"button",class:J(["motion-card",f.value===n.value&&"active"]),onClick:re=>f.value=n.value},[e("span",Ui,[e("span",{class:J(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",Vi)):V("",!0),n.value==="stagger-in"?(l(),i("span",Wi)):V("",!0)]),e("span",Gi,k(n.label),1)],10,Fi)),64))]),e("div",Hi,[e("div",Yi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),pe(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=n=>N.value=n),class:"input"},null,512),[[ke,N.value]])]),e("div",Qi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),pe(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=n=>g.value=n),class:"input"},null,512),[[ke,g.value]])])]),e("div",Ji,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),pe(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=n=>te.value=n),class:"input"},null,512),[[ke,te.value]])]),e("div",Xi,[pe(e("input",{"onUpdate:modelValue":t[8]||(t[8]=n=>we.value=n),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[ke,we.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:P},"Save")]),e("div",Ki,[pe(e("input",{"onUpdate:modelValue":t[9]||(t[9]=n=>U.value=n),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[ke,U.value]]),pe(e("input",{"onUpdate:modelValue":t[10]||(t[10]=n=>Y.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,Y.value]])]),Q.value.length?(l(),i("div",Zi,[(l(!0),i(Z,null,ve(Q.value,n=>(l(),i("div",{key:n.id,class:J(["preset-item",ee.value===n.id&&"dragging",be.value===n.id&&ee.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:re=>tt(n),onDragenter:qe(re=>ct(n),["prevent"]),onDragover:t[14]||(t[14]=qe(()=>{},["prevent"])),onDrop:qe(re=>vt(n),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:re=>Xe(n)},k(n.name),9,ta),n.category?(l(),i("span",oa,k(n.category),1)):V("",!0),(l(!0),i(Z,null,ve(n.tags||[],re=>(l(),i("span",{key:`${n.id}-${re}`,class:"preset-meta-chip muted"},"#"+k(re),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:re=>Ce(n)},"Duplicate",8,na),e("button",{type:"button",class:"preset-mini-btn",onClick:re=>Ke(n)},"Rename",8,la),e("button",{type:"button",class:"preset-mini-btn danger",onClick:re=>ue(n.id)},"Delete",8,ia),j.value===n.id?(l(),i("div",aa,[pe(e("input",{"onUpdate:modelValue":t[11]||(t[11]=re=>_.value=re),class:"input"},null,512),[[ke,_.value]]),pe(e("input",{"onUpdate:modelValue":t[12]||(t[12]=re=>ce.value=re),class:"input",placeholder:"Category"},null,512),[[ke,ce.value]]),pe(e("input",{"onUpdate:modelValue":t[13]||(t[13]=re=>se.value=re),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,se.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:re=>_e(n.id)},"Save",8,sa),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Fe},"Cancel")])):V("",!0)],42,ea))),128))])):q.value.length?(l(),i("div",ra,"No group presets match the current search.")):V("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Te}," Apply Sequence to Selection ")])):a.value?(l(),i(Z,{key:3},[e("div",{class:J(["panel-section",ye.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",es,[t[179]||(t[179]=X(" Position & Size ",-1)),e("span",ts,k(a.value.type),1)]),e("div",os,[e("div",ns,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=n=>xe("x",n.target.value))},null,40,ls)]),e("div",is,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=n=>xe("y",n.target.value))},null,40,as)]),e("div",ss,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=n=>xe("width",n.target.value))},null,40,rs)]),e("div",us,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=n=>xe("height",n.target.value))},null,40,ds)]),e("div",cs,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=n=>xe("rotation",n.target.value))},null,40,ps)]),e("div",vs,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=n=>xe("opacity",n.target.value))},null,40,fs)])])],2),e("div",{class:J(["panel-section",ye.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",ms,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Nt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${G.value}`},[(l(!0),i(Z,null,ve(jn.value,n=>(l(),i("span",{key:n.id,class:J(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:ge({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",gs,[(l(),i(Z,null,ve(qt,n=>e("button",{key:n.value,type:"button",class:J(["motion-card",R.value.type===n.value&&"active"]),onClick:re=>o({type:n.value})},[e("span",hs,[e("span",{class:J(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",ys)):V("",!0),n.value==="stagger-in"?(l(),i("span",xs)):V("",!0)]),e("span",ws,k(n.label),1)],10,bs)),64))]),e("div",ks,[e("div",Cs,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:R.value.delay,class:"input",onChange:t[45]||(t[45]=n=>o({delay:n.target.value}))},null,40,$s)]),e("div",Ss,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:R.value.duration,class:"input",onChange:t[46]||(t[46]=n=>o({duration:n.target.value}))},null,40,Is)])]),e("div",As,[pe(e("input",{"onUpdate:modelValue":t[47]||(t[47]=n=>$e.value=n),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[ke,$e.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Save")]),e("div",Ms,[pe(e("input",{"onUpdate:modelValue":t[48]||(t[48]=n=>S.value=n),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[ke,S.value]]),pe(e("input",{"onUpdate:modelValue":t[49]||(t[49]=n=>D.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,D.value]])]),w.value.length?(l(),i("div",Es,[(l(!0),i(Z,null,ve(w.value,n=>(l(),i("div",{key:n.id,class:J(["preset-item",ee.value===n.id&&"dragging",be.value===n.id&&ee.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:re=>tt(n),onDragenter:qe(re=>ct(n),["prevent"]),onDragover:t[53]||(t[53]=qe(()=>{},["prevent"])),onDrop:qe(re=>vt(n),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:re=>Ze(n)},k(n.name),9,Ts),n.category?(l(),i("span",Ns,k(n.category),1)):V("",!0),(l(!0),i(Z,null,ve(n.tags||[],re=>(l(),i("span",{key:`${n.id}-${re}`,class:"preset-meta-chip muted"},"#"+k(re),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:re=>Ce(n)},"Duplicate",8,zs),e("button",{type:"button",class:"preset-mini-btn",onClick:re=>Ke(n)},"Rename",8,Bs),e("button",{type:"button",class:"preset-mini-btn danger",onClick:re=>ue(n.id)},"Delete",8,_s),j.value===n.id?(l(),i("div",Ls,[pe(e("input",{"onUpdate:modelValue":t[50]||(t[50]=re=>_.value=re),class:"input"},null,512),[[ke,_.value]]),pe(e("input",{"onUpdate:modelValue":t[51]||(t[51]=re=>ce.value=re),class:"input",placeholder:"Category"},null,512),[[ke,ce.value]]),pe(e("input",{"onUpdate:modelValue":t[52]||(t[52]=re=>se.value=re),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,se.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:re=>_e(n.id)},"Save",8,js),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Fe},"Cancel")])):V("",!0)],42,Ps))),128))])):me.value.length?(l(),i("div",Ds,"No single-element presets match the current search.")):V("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",qs,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(ht=a.value.content)==null?void 0:ht.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=n=>x({text:n.target.value}))},null,40,Rs)]),e("div",Os,[e("div",Fs,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(ot=a.value.content)==null?void 0:ot.fontSize,class:"input",onChange:t[55]||(t[55]=n=>x({fontSize:+n.target.value}))},null,40,Us)]),e("div",Vs,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(It=a.value.content)==null?void 0:It.fontWeight,class:"select",onChange:t[56]||(t[56]=n=>x({fontWeight:n.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Ws)])]),e("div",Gs,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Ot=a.value.content)==null?void 0:Ot.fontFamily,class:"select",onChange:t[57]||(t[57]=n=>x({fontFamily:n.target.value}))},[(l(),i(Z,null,ve(Rt,n=>e("option",{key:n,value:n},k(n.split(",")[0]),9,Ys)),64))],40,Hs)]),e("div",Qs,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",Js,[(l(),i(Z,null,ve(["left","center","right","justify"],n=>{var re;return e("button",{key:n,class:J(["align-btn",((re=a.value.content)==null?void 0:re.textAlign)===n&&"active"]),onClick:kn=>x({textAlign:n})},k(n[0].toUpperCase()),11,Xs)}),64))])]),e("div",Ks,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",Zs,[e("button",{class:J(["style-btn",((Ft=a.value.content)==null?void 0:Ft.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=n=>{var re;return x({fontStyle:((re=a.value.content)==null?void 0:re.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:J(["style-btn",((Ut=a.value.content)==null?void 0:Ut.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=n=>{var re;return x({textDecoration:((re=a.value.content)==null?void 0:re.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:J(["style-btn",((Vt=a.value.content)==null?void 0:Vt.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=n=>{var re;return x({textDecoration:((re=a.value.content)==null?void 0:re.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",er,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",tr,[e("input",{type:"color",value:((Wt=a.value.content)==null?void 0:Wt.color)||"#000",onInput:t[61]||(t[61]=n=>x({color:n.target.value})),class:"color-input-native"},null,40,or),e("input",{value:((Gt=a.value.content)==null?void 0:Gt.color)||"#000",class:"input",onInput:t[62]||(t[62]=n=>x({color:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,nr)])]),e("div",lr,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Ht=a.value.content)==null?void 0:Ht.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=n=>x({lineHeight:+n.target.value}))},null,40,ir)]),e("div",ar,[e("div",sr,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Yt=a.value.content)==null?void 0:Yt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=n=>x({textTransform:n.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,rr)]),e("div",ur,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Qt=a.value.content)==null?void 0:Qt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=n=>x({letterSpacing:+n.target.value}))},null,40,dr)])])],2)):V("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",cr,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Jt=a.value.content)==null?void 0:Jt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=n=>x({src:n.target.value}))},null,40,pr)]),e("div",vr,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Xt=a.value.content)==null?void 0:Xt.alt,class:"input",onInput:t[67]||(t[67]=n=>x({alt:n.target.value}))},null,40,fr)]),e("div",mr,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Kt=a.value.content)==null?void 0:Kt.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=n=>x({objectFit:n.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,gr)]),e("div",br,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((Zt=a.value.content)==null?void 0:Zt.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=n=>x({borderRadius:+n.target.value}))},null,40,hr)]),e("div",yr,[e("div",xr,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((eo=a.value.content)==null?void 0:eo.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=n=>x({borderWidth:+n.target.value}))},null,40,wr)]),e("div",kr,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((to=a.value.content)==null?void 0:to.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=n=>x({borderColor:n.target.value}))},null,40,Cr)])])],2)):V("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",$r,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((oo=a.value.content)==null?void 0:oo.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=n=>x({shapeType:n.target.value}))},[...t[215]||(t[215]=[et('<option value="rectangle" data-v-1d3dcef4>Rectangle</option><option value="circle" data-v-1d3dcef4>Circle</option><option value="triangle" data-v-1d3dcef4>Triangle</option><option value="star" data-v-1d3dcef4>Star</option><option value="arrow" data-v-1d3dcef4>Arrow</option><option value="diamond" data-v-1d3dcef4>Diamond</option>',6)])],40,Sr)]),e("div",Ir,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Ar,[e("input",{type:"color",value:((no=a.value.content)==null?void 0:no.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=n=>x({fillColor:n.target.value})),class:"color-input-native"},null,40,Mr),e("input",{value:((lo=a.value.content)==null?void 0:lo.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=n=>x({fillColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Er)])]),e("div",Pr,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Tr,[e("input",{type:"color",value:((io=a.value.content)==null?void 0:io.borderColor)||"transparent",onInput:t[75]||(t[75]=n=>x({borderColor:n.target.value})),class:"color-input-native"},null,40,Nr),e("input",{value:((ao=a.value.content)==null?void 0:ao.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=n=>x({borderColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,zr)])]),e("div",Br,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((so=a.value.content)==null?void 0:so.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=n=>x({borderWidth:+n.target.value}))},null,40,_r)]),e("div",Lr,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((ro=a.value.content)==null?void 0:ro.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=n=>x({borderRadius:+n.target.value}))},null,40,jr)]),e("div",Dr,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((uo=a.value.content)==null?void 0:uo.opacity)??1,class:"input",onChange:t[79]||(t[79]=n=>x({opacity:+n.target.value}))},null,40,qr)])],2)):V("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",Rr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((co=a.value.content)==null?void 0:co.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=n=>x({chartType:n.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Or)]),e("div",Fr,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((po=a.value.content)==null?void 0:po.title)||"",class:"input",onInput:t[81]||(t[81]=n=>x({title:n.target.value}))},null,40,Ur)]),e("div",Vr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((vo=a.value.content)==null?void 0:vo.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=n=>x({dataText:n.target.value}))},null,40,Wr),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ut},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:yt},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Gr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),pe(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=n=>le.value=n),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[ke,le.value]]),e("div",Hr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=n=>it(le.value))},"Convert pasted data")])]),e("div",Yr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((fo=a.value.content)==null?void 0:fo.paletteText)||"",class:"input",placeholder:Je.value.paletteText,onInput:t[85]||(t[85]=n=>x({paletteText:n.target.value}))},null,40,Qr),e("div",Jr,[(l(!0),i(Z,null,ve(at.value,(n,re)=>(l(),i("span",{key:`chart-palette-${re}`,class:"chart-palette-swatch",style:ge({background:n})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:wt},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:xt},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Xr,[e("div",Kr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((mo=a.value.content)==null?void 0:mo.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=n=>x({backgroundColor:n.target.value}))},null,40,Zr)]),e("div",eu,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((go=a.value.content)==null?void 0:go.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=n=>x({textColor:n.target.value}))},null,40,tu)])]),e("div",ou,[e("div",nu,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((bo=a.value.content)==null?void 0:bo.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=n=>x({gridColor:n.target.value}))},null,40,lu)]),e("div",iu,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((ho=a.value.content)==null?void 0:ho.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=n=>x({borderColor:n.target.value}))},null,40,au)])]),e("div",su,[e("div",ru,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((yo=a.value.content)==null?void 0:yo.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=n=>x({borderWidth:+n.target.value}))},null,40,uu)]),((xo=a.value.content)==null?void 0:xo.chartType)!=="circle"?(l(),i("div",du,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((wo=a.value.content)==null?void 0:wo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=n=>x({maxValue:n.target.value}))},null,40,cu)])):(l(),i("div",pu,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((ko=a.value.content)==null?void 0:ko.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=n=>x({innerRadius:+n.target.value}))},null,40,vu)]))]),((Co=a.value.content)==null?void 0:Co.chartType)==="line"?(l(),i("div",fu,[e("div",mu,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:(($o=a.value.content)==null?void 0:$o.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=n=>x({strokeWidth:+n.target.value}))},null,40,gu)]),e("label",bu,[e("input",{type:"checkbox",checked:!!((So=a.value.content)!=null&&So.showArea),onChange:t[94]||(t[94]=n=>x({showArea:n.target.checked}))},null,40,hu),t[239]||(t[239]=X(" Show area fill ",-1))])])):V("",!0),e("label",yu,[e("input",{type:"checkbox",checked:((Io=a.value.content)==null?void 0:Io.showLegend)!==!1,onChange:t[95]||(t[95]=n=>x({showLegend:n.target.checked}))},null,40,xu),t[240]||(t[240]=X(" Show legend ",-1))]),((Ao=a.value.content)==null?void 0:Ao.chartType)!=="circle"?(l(),i("label",wu,[e("input",{type:"checkbox",checked:((Mo=a.value.content)==null?void 0:Mo.showGrid)!==!1,onChange:t[96]||(t[96]=n=>x({showGrid:n.target.checked}))},null,40,ku),t[241]||(t[241]=X(" Show grid lines ",-1))])):V("",!0),e("label",Cu,[e("input",{type:"checkbox",checked:((Eo=a.value.content)==null?void 0:Eo.showValues)!==!1,onChange:t[97]||(t[97]=n=>x({showValues:n.target.checked}))},null,40,$u),t[242]||(t[242]=X(" Show values ",-1))])],2)):V("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Su,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Po=a.value.content)==null?void 0:Po.label,class:"input",onInput:t[98]||(t[98]=n=>x({label:n.target.value}))},null,40,Iu)]),e("div",Au,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((To=a.value.content)==null?void 0:To.variant)||"primary",class:"select",onChange:t[99]||(t[99]=n=>x({variant:n.target.value}))},[...t[245]||(t[245]=[et('<option value="primary" data-v-1d3dcef4>Primary</option><option value="secondary" data-v-1d3dcef4>Secondary</option><option value="outline" data-v-1d3dcef4>Outline</option><option value="ghost" data-v-1d3dcef4>Ghost</option><option value="danger" data-v-1d3dcef4>Danger</option>',5)])],40,Mu)]),e("div",Eu,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((No=a.value.content)==null?void 0:No.action)||"none",class:"select",onChange:t[100]||(t[100]=n=>x({action:n.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Pu)]),(zo=a.value.content)!=null&&zo.action&&a.value.content.action!=="none"?(l(),i("div",Tu,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Bo=a.value.content)==null?void 0:Bo.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=n=>x({target:n.target.value}))},null,40,Nu)])):V("",!0),e("div",zu,[e("div",Bu,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((_o=a.value.content)==null?void 0:_o.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=n=>x({bgColor:n.target.value}))},null,40,_u)]),e("div",Lu,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Lo=a.value.content)==null?void 0:Lo.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=n=>x({textColor:n.target.value}))},null,40,ju)])]),e("div",Du,[e("div",qu,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((jo=a.value.content)==null?void 0:jo.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=n=>x({borderColor:n.target.value}))},null,40,Ru)]),e("div",Ou,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Do=a.value.content)==null?void 0:Do.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=n=>x({borderRadius:+n.target.value}))},null,40,Fu)])]),e("div",Uu,[e("div",Vu,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((qo=a.value.content)==null?void 0:qo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=n=>x({fontSize:+n.target.value}))},null,40,Wu)]),e("div",Gu,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Ro=a.value.content)==null?void 0:Ro.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=n=>x({fontWeight:+n.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Hu)])]),e("div",Yu,[e("div",Qu,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Oo=a.value.content)==null?void 0:Oo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=n=>x({fontFamily:n.target.value}))},[(l(),i(Z,null,ve(Rt,n=>e("option",{key:`btn-${n}`,value:n},k(n.split(",")[0]),9,Xu)),64))],40,Ju)]),e("div",Ku,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Fo=a.value.content)==null?void 0:Fo.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=n=>x({letterSpacing:+n.target.value}))},null,40,Zu)])])],2)):V("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",ed,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Uo=a.value.content)==null?void 0:Uo.icon)||"?",class:"select",onChange:t[110]||(t[110]=n=>x({icon:n.target.value}))},[...t[260]||(t[260]=[et('<option value="?" data-v-1d3dcef4>? (Info)</option><option value="!" data-v-1d3dcef4>! (Alert)</option><option value="+" data-v-1d3dcef4>+ (Plus)</option><option value="i" data-v-1d3dcef4>i (Info)</option><option value="✦" data-v-1d3dcef4>✦ (Star)</option>',5)])],40,td)]),e("div",od,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",nd,[e("input",{type:"color",value:((Vo=a.value.content)==null?void 0:Vo.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=n=>x({bgColor:n.target.value})),class:"color-input-native"},null,40,ld),e("input",{value:((Wo=a.value.content)==null?void 0:Wo.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=n=>x({bgColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,id)])]),e("div",ad,[e("div",sd,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Go=a.value.content)==null?void 0:Go.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=n=>x({iconColor:n.target.value}))},null,40,rd)]),e("div",ud,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Ho=a.value.content)==null?void 0:Ho.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=n=>x({borderRadius:+n.target.value}))},null,40,dd)])]),e("div",cd,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Yo=a.value.content)==null?void 0:Yo.popupTitle,class:"input",onInput:t[115]||(t[115]=n=>x({popupTitle:n.target.value}))},null,40,pd)]),e("div",vd,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Qo=a.value.content)==null?void 0:Qo.popupContent,class:"textarea",onInput:t[116]||(t[116]=n=>x({popupContent:n.target.value}))},null,40,fd)]),e("div",md,[e("div",gd,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Jo=a.value.content)==null?void 0:Jo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=n=>x({popupBgColor:n.target.value}))},null,40,bd)]),e("div",hd,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Xo=a.value.content)==null?void 0:Xo.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=n=>x({popupTextColor:n.target.value}))},null,40,yd)])])],2)):V("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",xd,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Ko=a.value.content)==null?void 0:Ko.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=n=>x({src:n.target.value}))},null,40,wd)]),e("div",kd,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(Zo=a.value.content)==null?void 0:Zo.poster,class:"input",onInput:t[120]||(t[120]=n=>x({poster:n.target.value}))},null,40,Cd)]),e("div",$d,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((en=a.value.content)==null?void 0:en.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=n=>x({objectFit:n.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Sd)]),e("label",Id,[e("input",{type:"checkbox",checked:(tn=a.value.content)==null?void 0:tn.autoplay,onChange:t[122]||(t[122]=n=>x({autoplay:n.target.checked}))},null,40,Ad),t[274]||(t[274]=X(" Autoplay ",-1))]),e("label",Md,[e("input",{type:"checkbox",checked:((on=a.value.content)==null?void 0:on.controls)??!0,onChange:t[123]||(t[123]=n=>x({controls:n.target.checked}))},null,40,Ed),t[275]||(t[275]=X(" Show Controls ",-1))]),e("label",Pd,[e("input",{type:"checkbox",checked:(nn=a.value.content)==null?void 0:nn.loop,onChange:t[124]||(t[124]=n=>x({loop:n.target.checked}))},null,40,Td),t[276]||(t[276]=X(" Loop ",-1))]),e("label",Nd,[e("input",{type:"checkbox",checked:(ln=a.value.content)==null?void 0:ln.muted,onChange:t[125]||(t[125]=n=>x({muted:n.target.checked}))},null,40,zd),t[277]||(t[277]=X(" Muted ",-1))])],2)):V("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",Bd,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(an=a.value.content)==null?void 0:an.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=n=>x({src:n.target.value}))},null,40,_d)]),e("div",Ld,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(sn=a.value.content)==null?void 0:sn.label,class:"input",onInput:t[127]||(t[127]=n=>x({label:n.target.value}))},null,40,jd)]),e("label",Dd,[e("input",{type:"checkbox",checked:(rn=a.value.content)==null?void 0:rn.autoplay,onChange:t[128]||(t[128]=n=>x({autoplay:n.target.checked}))},null,40,qd),t[281]||(t[281]=X(" Autoplay ",-1))]),e("label",Rd,[e("input",{type:"checkbox",checked:((un=a.value.content)==null?void 0:un.controls)!==!1,onChange:t[129]||(t[129]=n=>x({controls:n.target.checked}))},null,40,Od),t[282]||(t[282]=X(" Show Controls ",-1))]),e("label",Fd,[e("input",{type:"checkbox",checked:(dn=a.value.content)==null?void 0:dn.loop,onChange:t[130]||(t[130]=n=>x({loop:n.target.checked}))},null,40,Ud),t[283]||(t[283]=X(" Loop ",-1))]),e("div",Vd,[e("div",Wd,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((cn=a.value.content)==null?void 0:cn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=n=>x({accentColor:n.target.value}))},null,40,Gd)]),e("div",Hd,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((pn=a.value.content)==null?void 0:pn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=n=>x({textColor:n.target.value}))},null,40,Yd)])]),e("div",Qd,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((vn=a.value.content)==null?void 0:vn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=n=>x({bgColor:n.target.value}))},null,40,Jd)])],2)):V("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:J(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Xd,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(fn=a.value.content)==null?void 0:fn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=n=>x({question:n.target.value}))},null,40,Kd)]),e("div",Zd,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(gn=(mn=a.value.content)==null?void 0:mn.options)==null?void 0:gn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=n=>x({options:n.target.value.split(`
`).filter(Boolean)}))},null,40,ec)]),e("div",tc,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((bn=a.value.content)==null?void 0:bn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=n=>x({correctIndex:+n.target.value}))},null,40,oc)]),e("div",nc,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(hn=a.value.content)==null?void 0:hn.explanation,class:"textarea",onInput:t[137]||(t[137]=n=>x({explanation:n.target.value}))},null,40,lc)]),e("div",ic,[e("div",ac,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((yn=a.value.content)==null?void 0:yn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=n=>x({cardBgColor:n.target.value}))},null,40,sc)]),e("div",rc,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((xn=a.value.content)==null?void 0:xn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=n=>x({questionColor:n.target.value}))},null,40,uc)])]),e("div",dc,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((wn=a.value.content)==null?void 0:wn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=n=>x({accentColor:n.target.value}))},null,40,cc)])],2)):V("",!0),e("div",pc,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",vc,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=n=>$(r).duplicateElement($(s).projectId,$(s).currentSlideId,a.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),X(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=n=>{$(s).showInteractionEditor=!0,$(s).interactionElementId=a.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),X(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=n=>{$(r).deleteElement($(s).projectId,$(s).currentSlideId,a.value.id),$(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),X(" Delete Element ",-1)])])])])],64)):(l(),i("div",ua,[e("div",da,[e("button",{type:"button",class:J(["slide-settings-tab",ne.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=n=>ne.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:J(["slide-settings-tab",ne.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=n=>ne.value="transitions")},[...t[150]||(t[150]=[et('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-1d3dcef4><path d="M5 7h5" data-v-1d3dcef4></path><path d="M5 12h10" data-v-1d3dcef4></path><path d="M5 17h14" data-v-1d3dcef4></path><path d="M14 7l5 5-5 5" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Transitions</span>',2)])],2),e("button",{type:"button",class:J(["slide-settings-tab",ne.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=n=>ne.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),ne.value==="canvas"?(l(),i("div",ca,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",pa,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),pe(e("input",{"onUpdate:modelValue":t[18]||(t[18]=n=>Ae.value.title=n),class:"input",onInput:t[19]||(t[19]=n=>Bt("title",Ae.value.title))},null,544),[[ke,Ae.value.title]])]),e("div",va,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",fa,[(l(),i(Z,null,ve(["color","gradient","image"],n=>{var re;return e("button",{key:n,class:J(["bg-type-btn",(((re=p.value)==null?void 0:re.backgroundType)||"color")===n&&"active"]),onClick:kn=>je({backgroundType:n})},k(n),11,ma)}),64))]),(((F=p.value)==null?void 0:F.backgroundType)||"color")==="color"?(l(),i("div",ga,[e("input",{type:"color",value:((fe=p.value)==null?void 0:fe.background)||"#ffffff",onInput:t[20]||(t[20]=n=>je({background:n.target.value})),class:"color-input-native"},null,40,ba),e("input",{value:((Me=p.value)==null?void 0:Me.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=n=>je({background:n.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,ha)])):((Be=p.value)==null?void 0:Be.backgroundType)==="gradient"?pe((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=n=>Ae.value.backgroundGradient=n),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=n=>je({backgroundGradient:Ae.value.backgroundGradient}))},null,544)),[[ke,Ae.value.backgroundGradient]]):pe((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=n=>Ae.value.backgroundImage=n),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=n=>je({backgroundImage:Ae.value.backgroundImage}))},null,544)),[[ke,Ae.value.backgroundImage]])]),e("div",ya,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",xa,[(l(!0),i(Z,null,ve($(Xn),n=>{var re;return l(),i("button",{key:n.id,type:"button",class:J(["canvas-size-card",((re=b.value)==null?void 0:re.id)===n.id&&"active"]),onClick:kn=>Ve(n)},[e("span",ka,[e("span",{class:J(["canvas-size-thumb",`canvas-size-thumb-${n.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Ca,k(n.label),1),e("span",$a,k(n.ratioLabel),1)],10,wa)}),128))]),e("div",Sa,[e("div",Ia,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Aa,"Current ratio "+k(L.value),1)]),e("div",Ma,[e("div",Ea,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Pa,[e("input",{type:"number",min:"320",max:"4096",value:y.value.width,class:"input",onChange:t[26]||(t[26]=n=>pt("width",n.target.value))},null,40,Ta),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Na,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",za,[e("input",{type:"number",min:"320",max:"4096",value:y.value.height,class:"input",onChange:t[27]||(t[27]=n=>pt("height",n.target.value))},null,40,Ba),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",_a,[pe(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=n=>oe.value=n)},null,512),[[Et,oe.value]]),t[161]||(t[161]=X(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=et('<div class="canvas-size-callout" data-v-1d3dcef4><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1d3dcef4><circle cx="12" cy="12" r="9" data-v-1d3dcef4></circle><path d="M12 10v6" data-v-1d3dcef4></path><path d="M12 7h.01" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",La,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),pe(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=n=>Ae.value.notes=n),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=n=>Bt("notes",Ae.value.notes))},null,544),[[ke,Ae.value.notes]])])])):ne.value==="transitions"?(l(),i("div",ja,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((We=p.value)==null?void 0:We.transition)||"none",class:"select",onChange:t[31]||(t[31]=n=>je({transition:n.target.value}))},[...t[167]||(t[167]=[et('<option value="none" data-v-1d3dcef4>None</option><option value="fade" data-v-1d3dcef4>Fade</option><option value="slide" data-v-1d3dcef4>Slide</option><option value="zoom" data-v-1d3dcef4>Zoom</option><option value="flip" data-v-1d3dcef4>Flip</option>',5)])],40,Da),e("div",qa,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Ue=p.value)==null?void 0:Ue.duration)??0,class:"input",onChange:t[32]||(t[32]=n=>u(n.target.value))},null,40,Ra),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Oa,[e("input",{type:"checkbox",checked:!!((ft=p.value)!=null&&ft.advanceOnMediaEnd),onChange:t[33]||(t[33]=n=>je({advanceOnMediaEnd:n.target.checked}))},null,40,Fa),t[170]||(t[170]=X(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",Ua,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",Va,[e("input",{type:"checkbox",checked:h.value.autoPlay,onChange:t[34]||(t[34]=n=>Ne({autoPlay:n.target.checked}))},null,40,Wa),t[173]||(t[173]=X(" Autoplay preview and exported presentation ",-1))]),e("label",Ga,[e("input",{type:"checkbox",checked:h.value.loop,onChange:t[35]||(t[35]=n=>Ne({loop:n.target.checked}))},null,40,Ha),t[174]||(t[174]=X(" Loop back to the first slide at the end ",-1))]),e("label",Ya,[e("input",{type:"checkbox",checked:h.value.showProgress,onChange:t[36]||(t[36]=n=>Ne({showProgress:n.target.checked}))},null,40,Qa),t[175]||(t[175]=X(" Show progress bar in preview ",-1))]),e("label",Ja,[e("input",{type:"checkbox",checked:h.value.showNavControls,onChange:t[37]||(t[37]=n=>Ne({showNavControls:n.target.checked}))},null,40,Xa),t[176]||(t[176]=X(" Show previous/next and dot navigation ",-1))]),e("label",Ka,[e("input",{type:"checkbox",checked:h.value.allowKeyboardNav,onChange:t[38]||(t[38]=n=>Ne({allowKeyboardNav:n.target.checked}))},null,40,Za),t[177]||(t[177]=X(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},mc=Qe(fc,[["__scopeId","data-v-1d3dcef4"]]),gc={class:"editor-toolbar"},bc={class:"toolbar-group"},hc={class:"toolbar-group"},yc=["data-tooltip","onClick"],xc={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wc={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kc={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Cc={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$c={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Sc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ic={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ac={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Mc={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ec={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Pc={class:"tool-label"},Tc={class:"toolbar-group"},Nc={class:"toolbar-group"},zc={class:"toolbar-group"},Bc={__name:"EditorToolbar",emits:["open-ai-project"],setup(I,{emit:s}){const r=s,c=nt();lt();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function h(y){c.setActiveTool(y)}return(y,b)=>(l(),i("div",gc,[e("div",bc,[e("button",{class:J(["tool-btn",$(c).activeTool==="select"&&"active"]),onClick:b[0]||(b[0]=L=>h("select")),"data-tooltip":"Select (V)"},[...b[7]||(b[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),b[23]||(b[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",hc,[(l(),i(Z,null,ve(p,L=>e("button",{key:L.id,class:J(["tool-btn",$(c).activeTool===L.id&&"active"]),"data-tooltip":L.tooltip,onClick:oe=>h(L.id)},[L.icon==="text"?(l(),i("svg",xc,[...b[8]||(b[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):L.icon==="heading"?(l(),i("svg",wc,[...b[9]||(b[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):L.icon==="image"?(l(),i("svg",kc,[...b[10]||(b[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):L.icon==="shape"?(l(),i("svg",Cc,[...b[11]||(b[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):L.icon==="button"?(l(),i("svg",$c,[...b[12]||(b[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):L.icon==="hotspot"?(l(),i("svg",Sc,[...b[13]||(b[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):L.icon==="video"?(l(),i("svg",Ic,[...b[14]||(b[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):L.icon==="audio"?(l(),i("svg",Ac,[...b[15]||(b[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):L.icon==="quiz"?(l(),i("svg",Mc,[...b[16]||(b[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):L.icon==="chart"?(l(),i("svg",Ec,[...b[17]||(b[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):V("",!0),e("span",Pc,k(L.label),1)],10,yc)),64))]),b[24]||(b[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Tc,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:b[1]||(b[1]=L=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...b[18]||(b[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),b[25]||(b[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Nc,[e("button",{class:"tool-btn",onClick:b[2]||(b[2]=L=>$(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...b[19]||(b[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:b[3]||(b[3]=L=>$(c).zoomReset())},k(Math.round($(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:b[4]||(b[4]=L=>$(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...b[20]||(b[20]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),b[26]||(b[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",zc,[e("button",{class:J(["tool-btn",$(c).showGrid&&"active"]),onClick:b[5]||(b[5]=L=>$(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...b[21]||(b[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:J(["tool-btn",$(c).snapToGrid&&"active"]),onClick:b[6]||(b[6]=L=>$(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...b[22]||(b[22]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},_c=Qe(Bc,[["__scopeId","data-v-d964cc0f"]]),Lc=["onMousedown"],jc={key:1,class:"selection-border locked-border"},Dc={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(I){const s=I,r=nt(),c=lt(),p=qn("canvasScale",B(1)),h=E(()=>r.projectId),y=E(()=>r.currentSlideId),b=E(()=>r.selectedElementIds.includes(s.element.id)),L=E(()=>s.element.locked),oe=E(()=>s.element.visible!==!1),ne=E(()=>{const K=s.element.content||{};return!!(K.text||K.label||K.question||K.popupTitle||K.popupContent)});let W=!1,me=0,q=0,T=new Map;function a(K){if(!r.snapToGrid||!r.gridSize)return K;const de=r.gridSize;return Math.round(K/de)*de}function C(K){var le;if(L.value||K.target.classList.contains("resize-handle"))return;const de=K.ctrlKey||K.metaKey||K.shiftKey;b.value?de&&r.selectElement(s.element.id,!0):r.selectElement(s.element.id,de),r.setActiveTool("select"),W=!1,me=K.clientX,q=K.clientY,T.clear();const ie=(le=c.getProject(h.value))==null?void 0:le.slides.find(Ie=>Ie.id===y.value);ie&&r.selectedElementIds.forEach(Ie=>{const ye=ie.elements.find(z=>z.id===Ie);ye&&!ye.locked&&T.set(Ie,{x:ye.x,y:ye.y})}),window.addEventListener("mousemove",M),window.addEventListener("mouseup",R),K.stopPropagation()}function M(K){const de=(K.clientX-me)/p.value,ie=(K.clientY-q)/p.value;!W&&(Math.abs(de)>3||Math.abs(ie)>3)&&(W=!0),W&&T.forEach((le,Ie)=>{const ye=le.x+de,z=le.y+ie;c.updateElement(h.value,y.value,Ie,{x:ye,y:z},{persist:!1})})}function R(K){if(W){const de=(K.clientX-me)/p.value,ie=(K.clientY-q)/p.value;T.forEach((le,Ie)=>{c.updateElement(h.value,y.value,Ie,{x:a(le.x+de),y:a(le.y+ie)},{persist:!1})}),c.commitProject(h.value)}W||!(K.ctrlKey||K.metaKey||K.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(s.element.id,!1),W=!1,window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",R)}const v=["n","ne","e","se","s","sw","w","nw"];let G=!1,ae="",$e=0,we=0,j=0,_=0,ce=0,se=0;function ee(K,de){L.value||(K.stopPropagation(),K.preventDefault(),G=!0,ae=de,$e=K.clientX,we=K.clientY,j=s.element.width,_=s.element.height,ce=s.element.x,se=s.element.y,window.addEventListener("mousemove",be),window.addEventListener("mouseup",S))}function be(K){if(!G)return;const de=p.value,ie=(K.clientX-$e)/de,le=(K.clientY-we)/de,Ie=20;let ye=ce,z=se,A=j,O=_;if(ae.includes("e")&&(A=Math.max(Ie,j+ie)),ae.includes("s")&&(O=Math.max(Ie,_+le)),ae.includes("w")){const x=Math.max(Ie,j-ie);ye=ce+(j-x),A=x}if(ae.includes("n")){const x=Math.max(Ie,_-le);z=se+(_-x),O=x}if(r.snapToGrid&&r.gridSize){const x=r.gridSize;A=Math.round(A/x)*x,O=Math.round(O/x)*x,ye=Math.round(ye/x)*x,z=Math.round(z/x)*x}c.updateElement(h.value,y.value,s.element.id,{x:ye,y:z,width:A,height:O})}function S(){G=!1,window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",S)}function D(){["text","heading"].includes(s.element.type)&&r.focusPropertiesSection("content")}const U=E(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:L.value?"not-allowed":"move",visibility:oe.value?"visible":"hidden",userSelect:"none"}));function Y(K){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[K]||"auto"}function he(K="content"){r.focusPropertiesSection(K)}function Re(){const K=ne.value?"improve":s.element.type==="image"?"image":"generate";r.openAIPanel(K)}function Pe(){const K=c.duplicateElement(h.value,y.value,s.element.id);K&&(r.selectElement(K.id),r.focusPropertiesSection("geometry"))}function Le(){c.deleteElement(h.value,y.value,s.element.id),r.clearSelection()}return(K,de)=>(l(),i("div",{class:J(["element-wrapper",b.value&&"selected",L.value&&"locked"]),style:ge(U.value),onMousedown:C,onDblclick:D},[Rn(K.$slots,"default",{},void 0),b.value&&!L.value?(l(),i(Z,{key:0},[de[6]||(de[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:de[3]||(de[3]=qe(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:de[0]||(de[0]=ie=>he("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:de[1]||(de[1]=ie=>he("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:de[2]||(de[2]=ie=>he("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Re},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Pe,title:"Duplicate element","aria-label":"Duplicate element"},[...de[4]||(de[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Le,title:"Delete element","aria-label":"Delete element"},[...de[5]||(de[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(Z,null,ve(v,ie=>e("div",{key:ie,class:J(["resize-handle",`handle-${ie}`]),style:ge({cursor:Y(ie)}),onMousedown:qe(le=>ee(le,ie),["stop"])},null,46,Lc)),64))],64)):V("",!0),b.value&&L.value?(l(),i("div",jc)):V("",!0)],38))}},qc=Qe(Dc,[["__scopeId","data-v-d539ca8b"]]),_t={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(I){const s=I,r=E(()=>s.element.content||{}),c=nt(),p=lt(),h=B(!1),y=B(null),b=B("");Ye(()=>r.value.text,W=>{h.value||(b.value=W||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function L(){c.selectedElementId===s.element.id&&(h.value=!0,Mn(()=>{if(y.value)if(y.value.focus(),typeof y.value.setSelectionRange=="function"){const W=y.value.value.length;y.value.setSelectionRange(W,W)}else{const W=document.createRange();W.selectNodeContents(y.value),W.collapse(!1);const me=window.getSelection();me.removeAllRanges(),me.addRange(W)}}))}function oe(W){h.value&&W.stopPropagation()}function ne(){h.value=!1;const W=b.value;p.updateElement(c.projectId,c.currentSlideId,s.element.id,{content:{...s.element.content,text:W}})}return(W,me)=>h.value?pe((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:y,"onUpdate:modelValue":me[0]||(me[0]=q=>b.value=q),onBlur:ne,onMousedown:oe,style:ge({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[ke,b.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:L,style:ge({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},k(b.value),37))}},Rc={key:0,class:"image-status image-loading"},Oc=["src","alt"],Fc={key:2,class:"image-placeholder"},Uc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Vc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(I){const s=I,r=B(""),c=B(0),p=B("idle"),h=E(()=>{var oe;return Array.isArray((oe=s.element.content)==null?void 0:oe.fallbackSrcs)?s.element.content.fallbackSrcs:[]});function y(){var oe;r.value=((oe=s.element.content)==null?void 0:oe.src)||"",c.value=0,p.value=r.value?"loading":"empty"}function b(){p.value="loaded"}function L(){const oe=h.value[c.value];if(oe){c.value+=1,r.value=oe,p.value="loading";return}p.value="error"}return Ye(()=>{var oe,ne;return[(oe=s.element.content)==null?void 0:oe.src,JSON.stringify(((ne=s.element.content)==null?void 0:ne.fallbackSrcs)||[])]},()=>y(),{immediate:!0}),(oe,ne)=>{var W,me,q;return l(),i("div",{class:"image-element",style:ge({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((W=I.element.content)==null?void 0:W.borderRadius)||0)+"px",border:`${((me=I.element.content)==null?void 0:me.borderWidth)||0}px solid ${((q=I.element.content)==null?void 0:q.borderColor)||"transparent"}`})},[p.value==="loading"?(l(),i("div",Rc,[...ne[0]||(ne[0]=[e("span",{class:"image-status-spinner"},null,-1),e("span",null,"Loading image…",-1)])])):V("",!0),r.value&&p.value!=="error"?(l(),i("img",{key:1,src:r.value,alt:I.element.content.alt||"",style:ge({width:"100%",height:"100%",objectFit:I.element.content.objectFit||"cover",display:p.value==="loaded"?"block":"none"}),draggable:"false",onLoad:b,onError:L},null,44,Oc)):V("",!0),p.value==="empty"||p.value==="error"?(l(),i("div",Fc,[(l(),i("svg",Uc,[...ne[1]||(ne[1]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),e("span",null,k(p.value==="error"?"Image unavailable":"Image"),1)])):V("",!0)],4)}}},Wc=Qe(Vc,[["__scopeId","data-v-cd42b1c3"]]),Gc={class:"shape-element",style:{width:"100%",height:"100%"}},Hc=["width","height"],Yc=["points","fill","stroke","stroke-width"],Qc={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(I){const s=I,r=E(()=>s.element.content||{}),c=E(()=>{const y=r.value.shapeType||"rectangle",b={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return y==="circle"?{...b,borderRadius:"50%"}:y==="rectangle"?{...b,borderRadius:(r.value.borderRadius||0)+"px"}:b}),p=E(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),h=E(()=>{const y=s.element.width||150,b=s.element.height||100,L=r.value.shapeType;if(L==="triangle")return`${y/2},0 ${y},${b} 0,${b}`;if(L==="diamond")return`${y/2},0 ${y},${b/2} ${y/2},${b} 0,${b/2}`;if(L==="arrow")return`0,${b*.3} ${y*.6},${b*.3} ${y*.6},0 ${y},${b/2} ${y*.6},${b} ${y*.6},${b*.7} 0,${b*.7}`;if(L==="star"){const oe=y/2,ne=b/2,W=Math.min(y,b)/2,me=W*.4;let q="";for(let T=0;T<10;T++){const a=(T*36-90)*Math.PI/180,C=T%2===0?W:me;q+=`${oe+C*Math.cos(a)},${ne+C*Math.sin(a)} `}return q.trim()}return""});return(y,b)=>(l(),i("div",Gc,[p.value?(l(),i("svg",{key:1,width:I.element.width,height:I.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:h.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,Yc)],8,Hc)):(l(),i("div",{key:0,style:ge(c.value)},null,4))]))}},Jc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(I){const s=I,r=E(()=>s.element.content||{}),c=E(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},h=p[r.value.variant||"primary"]||p.primary;return{...h,background:r.value.bgColor||h.background,color:r.value.textColor||h.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:h.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(p,h)=>(l(),i("div",{class:"button-element",style:ge({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},k(r.value.label||"Button"),5))}},Xc={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Kc={class:"popup-header"},Zc={class:"popup-body"},ep={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(I){const s=I,r=E(()=>s.element.content||{}),c=B(!1);function p(h){h.stopPropagation(),c.value=!c.value}return(h,y)=>(l(),i("div",Xc,[e("div",{class:"hotspot-btn",style:ge({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:qe(p,["stop"])},k(r.value.icon||"?"),5),mt(Mt,{name:"fade"},{default:rt(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:ge({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",Kc,[e("strong",null,k(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:y[0]||(y[0]=qe(b=>c.value=!1,["stop"]))},"×")]),e("div",Zc,k(r.value.popupContent||"Add your content in the properties panel."),1)],4)):V("",!0)]),_:1})]))}},tp=Qe(ep,[["__scopeId","data-v-ef5f15f6"]]),op={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},np=["src"],lp=["src","poster","autoplay","controls","loop","muted"],ip={key:2,class:"video-placeholder"},ap={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},sp={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(I){const s=I,r=E(()=>s.element.content||{}),c=E(()=>{const h=r.value.src||"";return h.includes("youtube")||h.includes("youtu.be")}),p=E(()=>{var y,b;const h=r.value.src||"";if(c.value){const L=(y=h.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:y[1];return L?`https://www.youtube.com/embed/${L}`:""}if(h.includes("vimeo.com")){const L=(b=h.match(/vimeo\.com\/(\d+)/))==null?void 0:b[1];return L?`https://player.vimeo.com/video/${L}`:""}return""});return(h,y)=>(l(),i("div",op,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,np)):r.value.src&&!p.value?(l(),i("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:ge({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,lp)):(l(),i("div",ip,[(l(),i("svg",ap,[...y[0]||(y[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),y[1]||(y[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},rp=Qe(sp,[["__scopeId","data-v-dfea1a16"]]),up=["stroke"],dp=["src","controls","autoplay","loop"],cp={key:1,style:{"font-size":"11px",color:"#aaa"}},pp={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(I){return(s,r)=>{var c,p,h,y,b,L,oe,ne,W;return l(),i("div",{class:"audio-element",style:ge({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=I.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=I.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((h=I.element.content)==null?void 0:h.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,up)),e("span",{style:ge({fontSize:"13px",color:((y=I.element.content)==null?void 0:y.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},k(((b=I.element.content)==null?void 0:b.label)||"Audio Player"),5),(L=I.element.content)!=null&&L.src?(l(),i("audio",{key:0,src:I.element.content.src,controls:((oe=I.element.content)==null?void 0:oe.controls)!==!1,autoplay:(ne=I.element.content)==null?void 0:ne.autoplay,loop:(W=I.element.content)==null?void 0:W.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=qe(()=>{},["stop"]))},null,40,dp)):(l(),i("span",cp,"No source"))],4)}}},vp={class:"quiz-options"},fp=["onClick"],mp={class:"opt-letter"},gp={class:"opt-text"},bp={key:0},hp={class:"quiz-actions"},yp=["disabled"],xp={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(I){const s=I,r=E(()=>s.element.content||{}),c=B(null),p=B(!1);function h(oe){p.value||(c.value=oe)}function y(){c.value!==null&&(p.value=!0)}function b(){c.value=null,p.value=!1}const L=E(()=>p.value&&c.value===(r.value.correctIndex??0));return(oe,ne)=>(l(),i("div",{class:"quiz-element",style:ge({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:ge({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},k(r.value.question||"Question text…"),5),e("div",vp,[(l(!0),i(Z,null,ve(r.value.options||[],(W,me)=>(l(),i("div",{key:me,class:J(["quiz-opt",c.value===me&&"selected",p.value&&me===r.value.correctIndex&&"correct",p.value&&c.value===me&&me!==r.value.correctIndex&&"wrong"]),onClick:q=>h(me)},[e("span",mp,k(String.fromCharCode(65+me)),1),e("span",gp,k(W),1)],10,fp))),128))]),p.value?(l(),i("div",{key:0,class:J(["quiz-feedback",L.value?"correct":"wrong"])},[X(k(L.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!L.value&&r.value.explanation?(l(),i("span",bp,k(r.value.explanation),1)):V("",!0)],2)):V("",!0),e("div",hp,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:b},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:y},"Submit",8,yp))])],4))}},wp=Qe(xp,[["__scopeId","data-v-ca2bd187"]]),kp={key:0,class:"canvas-empty"},Cp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},$p={key:0,class:"canvas-device-frame","aria-hidden":"true"},Sp=["value"],Ip={class:"canvas-guide-label"},Ap={key:5,class:"drop-hint"},Mp={class:"canvas-info-bar"},Ep=["disabled"],Pp={class:"slide-index"},Tp=["disabled"],Np={key:0},zp={__name:"EditorCanvas",setup(I){const s=nt(),r=lt(),c=B(null),p=B(null),h=B(1),y=E(()=>h.value*s.zoomLevel);Fn("canvasScale",y);const b=E(()=>r.getProject(s.projectId)),L=E(()=>Pt(b.value)),oe=E(()=>Pn(b.value)),ne=E(()=>L.value.width),W=E(()=>L.value.height),me=E(()=>Tn(ne.value,W.value)),q=E(()=>{var m,w;return(w=(m=b.value)==null?void 0:m.slides)==null?void 0:w.find(Q=>Q.id===s.currentSlideId)}),T=E(()=>{var m;return[...((m=b.value)==null?void 0:m.slides)||[]].sort((w,Q)=>w.order-Q.order)}),a=E(()=>T.value.findIndex(m=>m.id===s.currentSlideId)),C=E(()=>{var m;return{autoPlay:!1,motionPresets:[],...((m=b.value)==null?void 0:m.settings)||{}}}),M=E(()=>(Array.isArray(C.value.motionPresets)?C.value.motionPresets:[]).filter(m=>m.scope==="group")),R=E(()=>{const m=new Set(s.selectedElementIds);return we.value.filter(w=>m.has(w.id))}),v=B(""),G=E(()=>q.value?q.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:C.value.autoPlay&&Number(q.value.duration||0)>0?{label:`Auto ${Number(q.value.duration).toFixed(Number(q.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function ae(){const m=M.value.find(Q=>Q.id===v.value);if(!m||!R.value.length)return;[...R.value].sort((Q,H)=>(Q.y||0)!==(H.y||0)?(Q.y||0)-(H.y||0):(Q.x||0)-(H.x||0)).forEach((Q,H)=>{if(m.type==="auto"){r.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[{type:m.type,delay:Math.max(0,Number(m.delay)||0)+H*Math.max(0,Number(m.stepDelay)||0),duration:Math.max(.1,Number(m.duration)||.72)}]})}),r.updateProject(s.projectId,{settings:{...C.value,motionPresets:(C.value.motionPresets||[]).map(Q=>Q.id===m.id?{...Q,usageCount:Math.max(0,Number(Q.usageCount||0))+1,lastUsedAt:Date.now()}:Q)}})}function $e(){if(!M.value.length){v.value="";return}M.value.some(m=>m.id===v.value)||(v.value=M.value[0].id)}const we=E(()=>{var m;return[...((m=q.value)==null?void 0:m.elements)||[]].sort((w,Q)=>(w.zIndex||0)-(Q.zIndex||0))}),j=E(()=>{const m=q.value;return m?m.backgroundType==="gradient"&&m.backgroundGradient?{background:m.backgroundGradient}:m.backgroundType==="image"&&m.backgroundImage?{backgroundImage:`url(${m.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:m.background||"#fff"}:{background:"#fff"}}),_=E(()=>`scale(${y.value})`);function ce(){if(!c.value)return;const{clientWidth:m,clientHeight:w}=c.value,Q=(m-80)/ne.value,H=(w-80)/W.value;h.value=Math.min(Q,H,1)}let se=null;Sn(()=>{ce(),se=new ResizeObserver(ce),c.value&&se.observe(c.value),$e()}),In(()=>se==null?void 0:se.disconnect()),Ye(M,()=>{$e()},{deep:!0,immediate:!0}),Ye(L,()=>{ce()},{deep:!0});const ee=B({x:0,y:0}),be=B({x:0,y:0}),S=B(!1),D=B(!1),U=B(!1),Y=B(null),he=E(()=>{var m,w;return((m=oe.value)==null?void 0:m.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=oe.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),Re=E(()=>{if(!he.value)return null;if(he.value.tone==="mobile"){const Q=ne.value*.08,H=W.value*.05;return{x:Q,y:H,width:ne.value-Q*2,height:W.value-H*2}}const m=ne.value*.08,w=W.value*.08;return{x:m,y:w,width:ne.value-m*2,height:W.value-w*2}}),Pe=E(()=>{if(!Re.value)return[];const m=Re.value;return we.value.filter(w=>w.visible!==!1).filter(w=>{const Q=Number(w.x||0),H=Number(w.y||0),Se=Q+Number(w.width||0),Ee=H+Number(w.height||0);return Q<m.x||H<m.y||Se>m.x+m.width||Ee>m.y+m.height}).map(w=>w.id)}),Le=E(()=>s.selectedElementIds.filter(m=>Pe.value.includes(m)).length),K=E(()=>Pe.value.length),de=E(()=>!he.value||!K.value?null:Le.value?`${Le.value} selected ${Le.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`:`${K.value} ${K.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`),ie=E(()=>{if(!S.value)return null;const m=Math.min(ee.value.x,be.value.x),w=Math.min(ee.value.y,be.value.y),Q=Math.abs(be.value.x-ee.value.x),H=Math.abs(be.value.y-ee.value.y);return{x:m,y:w,width:Q,height:H}});function le(m){!S.value&&(m.target===p.value||m.target===m.currentTarget)&&s.clearSelection()}function Ie(m){return m?Array.from(m.files||[]).some(w=>w.type.startsWith("image/")):!1}function ye(m){return m?Array.from(m.types||[]).includes(Lt):!1}function z(m,w,Q){return Math.min(Math.max(m,w),Q)}function A(m,w,Q){const H=jt(m),Se=z(w-H.width/2,0,Math.max(0,ne.value-H.width)),Ee=z(Q-H.height/2,0,Math.max(0,W.value-H.height));return{x:Se,y:Ee,bounds:H}}function O(m){if(!ye(m))return null;try{const w=m.getData(Lt),Q=w?JSON.parse(w):null;return Q!=null&&Q.id&&r.getContentBlocks(s.projectId).find(H=>H.id===Q.id)||null}catch{return null}}function x(m,w,Q){if(!p.value||!Q){Y.value=null;return}const H=p.value.getBoundingClientRect(),Se=(m-H.left)/y.value,Ee=(w-H.top)/y.value,Oe=A(Q,Se,Ee);Y.value={block:Q,x:Oe.x,y:Oe.y,bounds:Oe.bounds}}function xe(m,w,Q){if(!m||!m.type.startsWith("image/"))return;const H=new FileReader;H.onload=()=>{const Se=String(H.result||"");if(!Se)return;const Ee=new Image;Ee.onload=()=>{const Oe=p.value.getBoundingClientRect(),De=(w-Oe.left)/y.value,ue=(Q-Oe.top)/y.value,Fe=Math.min(420/Ee.width,280/Ee.height,1),_e=Math.max(120,Math.round(Ee.width*Fe)),ze=Math.max(80,Math.round(Ee.height*Fe)),tt=Math.max(0,Math.min(ne.value-_e,Math.round(De-_e/2))),ct=Math.max(0,Math.min(W.value-ze,Math.round(ue-ze/2))),vt=r.addElement(s.projectId,s.currentSlideId,"image",{x:tt,y:ct,width:_e,height:ze,content:{src:Se,alt:m.name,objectFit:"cover"}});vt&&(s.selectElement(vt.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Ee.src=Se},H.readAsDataURL(m)}function Ae(m){const w=Ie(m.dataTransfer),Q=ye(m.dataTransfer);!w&&!Q||(m.preventDefault(),m.dataTransfer.dropEffect="copy",D.value=w,U.value=Q,Q&&x(m.clientX,m.clientY,O(m.dataTransfer)))}function je(m){var w;(w=m.currentTarget)!=null&&w.contains(m.relatedTarget)||(D.value=!1,U.value=!1,Y.value=null)}function Ne(m){const w=Ie(m.dataTransfer),Q=ye(m.dataTransfer);if(!w&&!Q)return;if(m.preventDefault(),D.value=!1,U.value=!1,Y.value=null,Q){try{const Se=O(m.dataTransfer);if(!Se)return;const Ee=p.value.getBoundingClientRect(),Oe=(m.clientX-Ee.left)/y.value,De=(m.clientY-Ee.top)/y.value,ue=A(Se,Oe,De),Ce=r.insertContentBlock(s.projectId,s.currentSlideId,Se.id,{x:ue.x,y:ue.y});Ce.length&&(s.setSelection(Ce.map(Ke=>Ke.id)),s.setActiveTool("select"),s.focusPropertiesSection("content"))}catch(Se){console.warn("Failed to drop block onto canvas.",Se)}return}const H=Array.from(m.dataTransfer.files||[]).find(Se=>Se.type.startsWith("image/"));H&&xe(H,m.clientX,m.clientY)}function Ve(m){if(R.value.length<2)return;const w=[...R.value].sort((ue,Ce)=>(ue.zIndex||0)-(Ce.zIndex||0)),Q=Math.min(...w.map(ue=>Number(ue.x||0))),H=Math.min(...w.map(ue=>Number(ue.y||0))),Se=Math.max(...w.map(ue=>Number(ue.x||0)+Number(ue.width||0))),Ee=Math.max(...w.map(ue=>Number(ue.y||0)+Number(ue.height||0))),Oe=Q+(Se-Q)/2,De=H+(Ee-H)/2;if(m==="align-left"&&w.forEach(ue=>r.updateElement(s.projectId,s.currentSlideId,ue.id,{x:Q},{persist:!1})),m==="align-center"&&w.forEach(ue=>{const Ce=Number(ue.width||0);r.updateElement(s.projectId,s.currentSlideId,ue.id,{x:Oe-Ce/2},{persist:!1})}),m==="align-right"&&w.forEach(ue=>{const Ce=Number(ue.width||0);r.updateElement(s.projectId,s.currentSlideId,ue.id,{x:Se-Ce},{persist:!1})}),m==="align-top"&&w.forEach(ue=>r.updateElement(s.projectId,s.currentSlideId,ue.id,{y:H},{persist:!1})),m==="align-middle"&&w.forEach(ue=>{const Ce=Number(ue.height||0);r.updateElement(s.projectId,s.currentSlideId,ue.id,{y:De-Ce/2},{persist:!1})}),m==="align-bottom"&&w.forEach(ue=>{const Ce=Number(ue.height||0);r.updateElement(s.projectId,s.currentSlideId,ue.id,{y:Ee-Ce},{persist:!1})}),m==="distribute-horizontal"){const ue=[...w].sort((_e,ze)=>(_e.x||0)-(ze.x||0)),Ce=ue.reduce((_e,ze)=>_e+Number(ze.width||0),0),Ke=ue.length>1?(Se-Q-Ce)/(ue.length-1):0;let Fe=Q;ue.forEach(_e=>{r.updateElement(s.projectId,s.currentSlideId,_e.id,{x:Fe},{persist:!1}),Fe+=Number(_e.width||0)+Ke})}if(m==="distribute-vertical"){const ue=[...w].sort((_e,ze)=>(_e.y||0)-(ze.y||0)),Ce=ue.reduce((_e,ze)=>_e+Number(ze.height||0),0),Ke=ue.length>1?(Ee-H-Ce)/(ue.length-1):0;let Fe=H;ue.forEach(_e=>{r.updateElement(s.projectId,s.currentSlideId,_e.id,{y:Fe},{persist:!1}),Fe+=Number(_e.height||0)+Ke})}r.commitProject(s.projectId)}function pt(m){const w=s.activeTool;if(m.target!==p.value&&m.target!==m.currentTarget)return;m.preventDefault(),m.stopPropagation();const Q=p.value.getBoundingClientRect(),H=(m.clientX-Q.left)/y.value,Se=(m.clientY-Q.top)/y.value;if(w==="select"){S.value=!0,ee.value={x:H,y:Se},be.value={x:H,y:Se};const De=Ce=>{be.value={x:(Ce.clientX-Q.left)/y.value,y:(Ce.clientY-Q.top)/y.value}},ue=()=>{window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",ue);const Ce=ie.value;if(Ce&&(Ce.width>2||Ce.height>2)){const Ke=we.value.filter(Fe=>{const _e=Fe.x,ze=Fe.y,tt=Fe.width||100,ct=Fe.height||100;return _e<Ce.x+Ce.width&&_e+tt>Ce.x&&ze<Ce.y+Ce.height&&ze+ct>Ce.y}).map(Fe=>Fe.id);Ke.length>0?s.setSelection(Ke):s.clearSelection()}else s.clearSelection();setTimeout(()=>{S.value=!1},0)};window.addEventListener("mousemove",De),window.addEventListener("mouseup",ue);return}const Ee=De=>s.snapToGrid?Math.round(De/s.gridSize)*s.gridSize:De,Oe=r.addElement(s.projectId,s.currentSlideId,w,{x:Ee(H-75),y:Ee(Se-40)});Oe&&(s.selectElement(Oe.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const Je=E(()=>{if(!s.showGrid)return{};const m=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${m}px ${m}px`}}),at={text:_t,heading:_t,image:Wc,shape:Qc,button:Jc,hotspot:tp,video:rp,audio:pp,quiz:wp,chart:il,divider:"div"};function st(m){return at[m]||_t}function it(m){var w,Q;return m.type!=="divider"?{}:{borderTop:`${((w=m.content)==null?void 0:w.thickness)||2}px solid ${((Q=m.content)==null?void 0:Q.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const Ge=B({show:!1,x:0,y:0,elId:null});function yt(m,w){m.preventDefault(),Ge.value={show:!0,x:m.clientX,y:m.clientY,elId:w},s.selectElement(w),setTimeout(()=>window.addEventListener("click",ut,{once:!0}),0)}function ut(){Ge.value.show=!1}function xt(){if(Ge.value.elId){const m=r.duplicateElement(s.projectId,s.currentSlideId,Ge.value.elId);m&&s.selectElement(m.id)}ut()}function wt(){Ge.value.elId&&(r.deleteElement(s.projectId,s.currentSlideId,Ge.value.elId),s.clearSelection()),ut()}function dt(){Ge.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,Ge.value.elId,"up"),ut()}function kt(){Ge.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,Ge.value.elId,"down"),ut()}function Ct(){const m=a.value,w=r.addSlide(s.projectId,m);w&&s.setCurrentSlide(w.id)}function $t(){const m=a.value;m>0&&s.setCurrentSlide(T.value[m-1].id)}function St(){const m=a.value;m<T.value.length-1&&s.setCurrentSlide(T.value[m+1].id)}return(m,w)=>{var Q;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[q.value?(l(),i(Z,{key:1},[e("div",{class:J(["canvas-zoom-wrapper",[he.value&&`canvas-zoom-wrapper-${he.value.tone}`]]),style:ge({transform:_.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:ge({width:ne.value+"px",height:W.value+"px",...j.value,...Je.value}),onClick:le,onMousedown:pt,onDragover:Ae,onDragleave:je,onDrop:Ne,onContextmenu:w[3]||(w[3]=qe(()=>{},["prevent"]))},[he.value?(l(),i("div",$p)):V("",!0),$(s).multiSelection&&M.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=qe(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),pe(e("select",{"onUpdate:modelValue":w[0]||(w[0]=H=>v.value=H),class:"selection-preset-select"},[(l(!0),i(Z,null,ve(M.value,H=>(l(),i("option",{key:H.id,value:H.id},k(H.name),9,Sp))),128))],512),[[At,v.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:qe(ae,["stop"])},"Apply")],32)):V("",!0),de.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=qe(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,k(de.value),1)],32)):V("",!0),Y.value?(l(),i("div",{key:3,class:"block-drop-preview",style:ge({left:`${Y.value.x}px`,top:`${Y.value.y}px`,width:`${Y.value.bounds.width}px`,height:`${Y.value.bounds.height}px`})},[(l(!0),i(Z,null,ve(Y.value.block.elements,(H,Se)=>{var Ee,Oe,De,ue;return l(),i("div",{key:`${Y.value.block.id}-preview-${Se}`,class:J(["block-drop-preview-el",`block-drop-preview-${H.type}`]),style:ge({left:`${Number(H.x||0)-Y.value.bounds.minX}px`,top:`${Number(H.y||0)-Y.value.bounds.minY}px`,width:`${Number(H.width||0)}px`,height:`${Number(H.height||0)}px`,borderRadius:H.type==="shape"&&((Ee=H.content)==null?void 0:Ee.shapeType)==="circle"?"50%":`${Number(((Oe=H.content)==null?void 0:Oe.borderRadius)||12)}px`,background:H.type==="shape"?((De=H.content)==null?void 0:De.fillColor)||"rgba(108,71,255,.18)":H.type==="button"?((ue=H.content)==null?void 0:ue.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(H.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(H.type)?(l(),i(Z,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):V("",!0)],6)}),128))],4)):V("",!0),(l(!0),i(Z,null,ve(we.value,H=>(l(),He(qc,{key:H.id,element:H,onContextmenu:qe(Se=>yt(Se,H.id),["stop"])},{default:rt(()=>[(l(),He(On(st(H.type)),{element:H,style:ge(H.type==="divider"?it(H):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),he.value?(l(),i("div",{key:4,class:J(["canvas-guide",[`canvas-guide-${he.value.tone}`,K.value&&"canvas-guide-warning-state"]]),style:ge(he.value.style),"aria-hidden":"true"},[e("span",Ip,k(he.value.label)+" · "+k(me.value),1)],6)):V("",!0),$(s).activeTool!=="select"||D.value||U.value?(l(),i("div",Ap,k(U.value?"Drop block to insert it here":D.value?"Drop image to insert it on this slide":`Click anywhere to add ${$(s).activeTool}`),1)):V("",!0),S.value&&ie.value?(l(),i("div",{key:6,class:"selection-marquee",style:ge({left:ie.value.x+"px",top:ie.value.y+"px",width:ie.value.width+"px",height:ie.value.height+"px"})},null,4)):V("",!0)],36)],6),e("div",Mp,[e("button",{class:"bar-btn",onClick:Ct},"Add page"),e("button",{class:"bar-btn icon",onClick:$t,disabled:a.value<=0},"◀",8,Ep),e("span",Pp,k(a.value+1)+" / "+k(T.value.length),1),e("button",{class:"bar-btn icon",onClick:St,disabled:a.value>=T.value.length-1},"▶",8,Tp),e("span",null,k(ne.value)+" × "+k(W.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,k(((Q=q.value.elements)==null?void 0:Q.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:J(["playback-badge",`playback-badge-${G.value.tone}`])},k(G.value.label),3),$(s).hasSelection?(l(),i("span",Np,"· "+k($(s).selectedElementIds.length)+" selected",1)):V("",!0),$(s).multiSelection?(l(),i(Z,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=H=>Ve("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=H=>Ve("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=H=>Ve("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=H=>Ve("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=H=>Ve("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=H=>Ve("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=H=>Ve("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=H=>Ve("distribute-vertical"))},"Space V")],64)):V("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=H=>$(s).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",kp,[(l(),i("svg",Cp,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),He(An,{to:"body"},[Ge.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:ge({left:Ge.value.x+"px",top:Ge.value.y+"px"})},[e("button",{class:"ctx-item",onClick:xt},"Duplicate"),e("button",{class:"ctx-item",onClick:dt},"Bring Forward"),e("button",{class:"ctx-item",onClick:kt},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:wt},"Delete")],4)):V("",!0)]))],512)}}},Bp=Qe(zp,[["__scopeId","data-v-e7450e9c"]]),_p={class:"ai-panel"},Lp={class:"ai-mode-tabs"},jp=["onClick"],Dp={class:"ai-content"},qp={class:"form-group"},Rp={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},Op={key:0,class:"form-group"},Fp={key:1,class:"form-group"},Up={class:"layout-label-row"},Vp={class:"layout-current-hint"},Wp={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},Gp=["onClick"],Hp={class:"layout-preset-title"},Yp={class:"layout-preset-hint"},Qp={key:2,class:"form-group"},Jp={key:3,class:"form-group"},Xp={class:"layout-label-row"},Kp={class:"layout-current-hint"},Zp={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},ev={key:4,class:"form-group"},tv={class:"layout-label-row"},ov={class:"layout-current-hint"},nv={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},lv=["onClick"],iv={class:"layout-preset-title"},av={class:"layout-preset-hint"},sv={class:"form-group"},rv={class:"form-group"},uv={class:"prompt-label-row"},dv={key:1,class:"prompt-auto-badge"},cv={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},pv={key:6,class:"selected-source-card"},vv={class:"result-header"},fv={class:"source-count-badge"},mv={class:"selected-source-preview"},gv={class:"selected-source-actions"},bv=["disabled"],hv=["disabled"],yv={key:0,class:"spinner"},xv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wv={key:7,class:"creative-options-wrap"},kv={class:"result-header"},Cv={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},$v={key:1,class:"creative-options-list"},Sv={class:"creative-title"},Iv={class:"creative-angle"},Av=["onClick"],Mv={class:"form-group"},Ev={class:"quiz-config-row"},Pv={class:"form-group",style:{flex:"1"}},Tv={class:"form-group",style:{flex:"1"}},Nv={class:"form-group"},zv={class:"qtype-btns"},Bv=["onClick"],_v={class:"qtype-icon"},Lv={class:"form-group"},jv={class:"form-group"},Dv={class:"prompt-label-row"},qv={key:1,class:"prompt-auto-badge"},Rv=["disabled"],Ov={key:0,class:"spinner"},Fv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Uv={key:0,class:"quiz-results"},Vv={class:"quiz-results-header"},Wv={class:"form-label"},Gv={class:"quiz-header-actions"},Hv={class:"regen-row"},Yv=["disabled"],Qv={key:0,class:"spinner spinner-sm"},Jv={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Xv=["disabled"],Kv={class:"quiz-card-header"},Zv={class:"quiz-card-check"},e1=["onUpdate:modelValue"],t1={class:"q-num"},o1={class:"q-badges"},n1={class:"badge type-badge"},l1={class:"q-question"},i1={class:"q-options"},a1={class:"q-option-letter"},s1={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},r1={key:0,class:"q-explanation"},u1=["disabled"],d1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},c1=["disabled"],p1={key:0,class:"spinner"},v1={key:0,class:"selected-text-preview"},f1={class:"text-preview"},m1={key:1,class:"ai-hint"},g1={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},b1=["disabled"],h1={key:0,class:"spinner"},y1={key:0,class:"selected-text-preview"},x1={class:"text-preview"},w1={key:1,class:"ai-hint"},k1={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},C1=["disabled"],$1={key:0,class:"spinner"},S1={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},I1={class:"result-header"},A1={class:"result-actions"},M1=["disabled"],E1={class:"textarea result-display"},P1={key:0,class:"ai-error",style:{"margin-bottom":"var(--space-3)"}},T1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},N1=["disabled"],z1={key:0,class:"spinner"},B1={key:1,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},_1={class:"textarea result-display",style:{color:"var(--color-primary)"}},L1={key:6,class:"ai-settings"},j1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},D1=["value"],q1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},R1=["value"],O1={key:0,class:"demo-notice"},F1={key:7,class:"result-area"},U1={class:"result-header"},V1={class:"result-pre"},W1={class:"result-actions"},G1=["disabled"],H1={key:8,class:"ai-error"},Y1={__name:"AIAssistant",setup(I){const s=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'}],r={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(u,o="classic"){const f=String(u||o||"classic").trim().toLowerCase();return s.some(N=>N.id===f)?f:o}function p(u,o=""){return String(u??o).replace(/^\s*[-•]\s*/,"").trim()||o}function h(u){return(Array.isArray(u)?u:typeof u=="string"?u.split(`
`):[]).map(f=>p(f)).filter(Boolean)}function y(u,o,f){const N=[...u];for(;N.length<o;)N.push(f(N.length));return N.slice(0,o)}function b(u,o){const f=Array.isArray(u)?u.map((g,te)=>({title:p(g==null?void 0:g.title,`Card ${te+1}`),body:p((g==null?void 0:g.body)||(g==null?void 0:g.text)||(g==null?void 0:g.description),"Add supporting detail.")})).filter(g=>g.title||g.body):[],N=o.map((g,te)=>({title:`Point ${te+1}`,body:g}));return y(f.length?f:N,3,g=>({title:`Point ${g+1}`,body:"Add supporting detail."}))}function L(u,o){const f=h(u==null?void 0:u.leftPoints),N=h(u==null?void 0:u.rightPoints),g=o.slice(0,Math.max(1,Math.ceil(o.length/2))),te=o.slice(Math.max(1,Math.ceil(o.length/2)));return{leftTitle:p(u==null?void 0:u.leftTitle,"Option A"),leftPoints:y(f.length?f:g,3,Te=>`Left point ${Te+1}`),rightTitle:p(u==null?void 0:u.rightTitle,"Option B"),rightPoints:y(N.length?N:te,3,Te=>`Right point ${Te+1}`)}}function oe(u,o){const f=Array.isArray(u)?u.map((g,te)=>({value:p(g==null?void 0:g.value,`${te+1}`),label:p(g==null?void 0:g.label,`Metric ${te+1}`)})).filter(g=>g.value||g.label):[],N=o.map((g,te)=>{const[Te,...Xe]=g.split(/[:\-]/);return{value:p(Te,`${te+1}`),label:p(Xe.join(" ").trim(),g)}});return y(f.length?f:N,3,g=>({value:`${g+1}`,label:`Metric ${g+1}`}))}function ne(u,o){const f=Array.isArray(u)?u.map((g,te)=>({title:p(g==null?void 0:g.title,`Phase ${te+1}`),detail:p((g==null?void 0:g.detail)||(g==null?void 0:g.description),"Explain the milestone.")})).filter(g=>g.title||g.detail):[],N=o.map((g,te)=>({title:`Phase ${te+1}`,detail:g}));return y(f.length?f:N,4,g=>({title:`Phase ${g+1}`,detail:"Explain the milestone."}))}function W(u,o){const f=Array.isArray(u)?u.map((g,te)=>({question:p(g==null?void 0:g.question,`Question ${te+1}?`),answer:p(g==null?void 0:g.answer,"Add the short answer here.")})).filter(g=>g.question||g.answer):[],N=o.map((g,te)=>({question:`Question ${te+1}?`,answer:g}));return y(f.length?f:N,3,g=>({question:`Question ${g+1}?`,answer:"Add the short answer here."}))}function me(u,o){const f=Array.isArray(u)?u.map((g,te)=>({title:p(g==null?void 0:g.title,`Step ${te+1}`),detail:p((g==null?void 0:g.detail)||(g==null?void 0:g.description),"Add the step detail here.")})).filter(g=>g.title||g.detail):[],N=o.map((g,te)=>({title:`Step ${te+1}`,detail:g}));return y(f.length?f:N,3,g=>({title:`Step ${g+1}`,detail:"Add the step detail here."}))}const q=Wn(),T=nt(),a=lt(),C=B("generate"),M=B(""),R=B(""),v=B("");Ye(C,()=>{v.value=""}),Ye(()=>T.aiPanelMode,u=>{u&&(C.value=u)},{immediate:!0});const G=B(4),ae=B("general"),$e=B("Spanish"),we=B(""),j=B(""),_=B(""),ce=B(!1),se=B("single"),ee=B("classic"),be=B("mixed"),S=B(5),D=B("slide"),U=B([]),Y=B(""),he=E(()=>s.find(u=>u.id===ee.value)||s[0]),Re=E(()=>{const u=R.value.trim()||"[your topic]";if(se.value==="deck"){let N=`Create a complete ${S.value}-slide learning deck about "${u}".`;return j.value.trim()&&(N+=`
Additional context: ${j.value.trim()}`),N+=`
Deck layout strategy: ${be.value}`,be.value==="single"?N+=`
Use the ${ee.value} layout for every slide.`:N+=`
Mix layouts across the deck when appropriate.`,N+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process" }] }`,N+=`
Make each slide distinct, logically sequenced, and specific to "${u}".`,N}let f=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[ae.value]||"educational slide"} about "${u}".`;return j.value.trim()&&(f+=`
Additional context: ${j.value.trim()}`),f+=`
Layout mode: ${ee.value}`,f+=`
Layout instruction: ${he.value.promptHint}`,f+=`
Return ONLY valid JSON matching this shape: ${he.value.schema}`,f+=`
Make all content specific to "${u}" — no generic placeholders.`,f});Ye(Re,u=>{ce.value||(_.value=u)},{immediate:!0});function Pe(){_.value=Re.value,ce.value=!1}const Le=B(""),K=B("intermediate"),de=B("multiple-choice"),ie=B(""),le=B([]),Ie=B(""),ye=B(!1),z=E(()=>{const u=Le.value.trim()||"[your topic]",o={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},f={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let N=`Generate ${G.value} ${o[K.value]} ${f[de.value]} quiz questions about "${u}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return ie.value.trim()&&(N+=`
Learning objective: ${ie.value.trim()}`),N});Ye(z,u=>{ye.value||(Ie.value=u)},{immediate:!0});function A(){Ie.value=z.value,ye.value=!1}const O=E(()=>a.getProject(T.projectId)),x=E(()=>{var u,o;return(o=(u=O.value)==null?void 0:u.slides)==null?void 0:o.find(f=>f.id===T.currentSlideId)}),xe=E(()=>{var u,o;return T.selectedElementId?(o=(u=x.value)==null?void 0:u.elements)==null?void 0:o.find(f=>f.id===T.selectedElementId):null}),Ae=E(()=>{var o;const u=new Set(T.selectedElementIds);return(((o=x.value)==null?void 0:o.elements)||[]).filter(f=>{var N;return u.has(f.id)&&typeof((N=f==null?void 0:f.content)==null?void 0:N.text)=="string"&&f.content.text.trim()})}),je=E(()=>Ae.value.map(u=>u.content.text.trim()).filter(Boolean).join(`

`));async function Ne(){if(!R.value.trim()&&!_.value.trim())return;if(v.value="",U.value=[],Y.value="",se.value==="deck"){const o=await q.generateSlideDeck(R.value,S.value,{objective:j.value,customPrompt:_.value,layoutStrategy:be.value,layoutMode:ee.value});if(o!=null&&o.length){const f=o.map(N=>Ve(N));v.value=JSON.stringify({slides:f},null,2),w(f,{replaceGenerated:!0})}return}if(D.value==="options"){await Se();return}const u=await q.generateSlideContent(R.value,ae.value,j.value,_.value,{layoutMode:ee.value});if(u){const o=Ve(u);v.value=JSON.stringify(o,null,2),Q(o,{replaceGenerated:!0})}}function Ve(u){var g;const o=u&&typeof u=="object"?u:{},f=h(o.bullets),N=c(o.layout||((g=o.design)==null?void 0:g.layout),se.value==="deck"&&be.value==="mixed"?"classic":ee.value);return{title:String(o.title||R.value||"Untitled Slide").trim(),subtitle:String(o.subtitle||"").trim(),bullets:f,callout:String(o.callout||"").trim(),layout:N,cards:b(o.cards,f),comparison:L(o.comparison,f),metrics:oe(o.metrics,f),timeline:ne(o.timeline,f),faqs:W(o.faqs,f),process:me(o.process,f)}}function pt(u,o){var g,te,Te;const f=(te=(g=a.getProject(u))==null?void 0:g.slides)==null?void 0:te.find(Xe=>Xe.id===o);if(!((Te=f==null?void 0:f.elements)!=null&&Te.length))return;f.elements.filter(Xe=>{var P;return((P=Xe.meta)==null?void 0:P.source)==="ai-content"}).map(Xe=>Xe.id).forEach(Xe=>{a.deleteElement(u,o,Xe)})}function Je(u,o,f,N){return a.addElement(u,o,f,{...N,meta:{...N.meta||{},source:"ai-content"}})}function at(u){const o=ol.find(N=>N.id===u);if(!o)return null;const f=nl(JSON.parse(JSON.stringify(o)),u);return f.elements=f.elements.map(N=>({...N,meta:{...N.meta||{},source:"ai-content"}})),f}function st(u,o){o&&u.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:o,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function it(u,o){if(!o)return;const f=jt(u);u.elements.push({type:"text",x:0,y:f.height+18,width:Math.max(f.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${o}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function Ge(u){const o=Array.isArray(u)?u:[];if(!o.length)return{minX:40,minY:54,width:0,height:0};const f=Math.min(...o.map(Te=>Number(Te.x||0))),N=Math.min(...o.map(Te=>Number(Te.y||0))),g=Math.max(...o.map(Te=>Number(Te.x||0)+Number(Te.width||0))),te=Math.max(...o.map(Te=>Number(Te.y||0)+Number(Te.height||0)));return{minX:f,minY:N,width:Math.max(0,g-f),height:Math.max(0,te-N)}}function yt(u,o){var te;const f=a.getProject(u),N=jt(o),g=Number(((te=f==null?void 0:f.settings)==null?void 0:te.slideWidth)||960);return{x:Math.max(40,Math.round((g-N.width)/2)),y:54}}function ut(u){const o=at(r.cards);if(!o)return null;const f=u.cards;return o.elements[0].content.text=u.title,o.elements[1].content.text=u.subtitle||u.callout||"Use the three cards to frame the main ideas.",f.forEach((N,g)=>{o.elements[5+g].content.text=N.title,o.elements[8+g].content.text=N.body}),u.callout&&u.subtitle&&it(o,u.callout),o}function xt(u){const o=at(r.comparison);return o?(o.elements[0].content.text=u.title,o.elements[3].content.text=u.comparison.leftTitle,o.elements[4].content.text=u.comparison.rightTitle,o.elements[5].content={...o.elements[5].content,text:u.comparison.leftPoints.map(f=>`• ${f}`).join(`
`),fontSize:17,lineHeight:1.55},o.elements[6].content={...o.elements[6].content,text:u.comparison.rightPoints.map(f=>`• ${f}`).join(`
`),fontSize:17,lineHeight:1.55},st(o,u.subtitle),it(o,u.callout),o):null}function wt(u){const o=at(r.metrics);return o?(o.elements[0].content.text=u.title,u.metrics.forEach((f,N)=>{o.elements[4+N].content.text=f.value,o.elements[7+N].content.text=f.label}),st(o,u.subtitle),it(o,u.callout),o):null}function dt(u){const o=at(r.timeline);return o?(o.elements[0].content.text=u.title,u.timeline.forEach((f,N)=>{o.elements[6+N].content={...o.elements[6+N].content,text:`${f.title}
${f.detail}`,fontSize:16,lineHeight:1.35}}),st(o,u.subtitle),it(o,u.callout),o):null}function kt(u){const o=at(r.faq);return o?(o.elements[0].content.text=u.title,u.faqs.forEach((f,N)=>{o.elements[4+N].content={...o.elements[4+N].content,text:`${f.question}
${f.answer}`,fontSize:16,lineHeight:1.35},o.elements[4+N].height=44}),st(o,u.subtitle),it(o,u.callout),o):null}function Ct(u){const o=at(r.process);return o?(o.elements[0].content.text=u.title,u.process.forEach((f,N)=>{o.elements[8+N].content.text=f.title,o.elements[11+N].content.text=f.detail}),st(o,u.subtitle),it(o,u.callout),o):null}function $t(u){switch(u.layout){case"cards":return ut(u);case"comparison":return xt(u);case"metrics":return wt(u);case"timeline":return dt(u);case"faq":return kt(u);case"process":return Ct(u);default:return null}}function St(u,o,f){var N;if(f.title&&(a.updateSlide(u,o,{title:f.title}),Je(u,o,"heading",{x:60,y:40,width:840,height:80,content:{text:f.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),f.subtitle&&Je(u,o,"text",{x:60,y:130,width:840,height:50,content:{text:f.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(N=f.bullets)!=null&&N.length){const g=f.bullets.map(te=>`• ${te}`).join(`
`);Je(u,o,"text",{x:60,y:f.subtitle?200:150,width:840,height:200,content:{text:g,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}f.callout&&(Je(u,o,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),Je(u,o,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${f.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function m(u,o,f,{replaceGenerated:N=!1,origin:g=null}={}){if(!u||!o)return;N&&pt(u,o);const te=$t(f);if(a.updateSlide(u,o,{title:f.title||"Untitled Slide"}),te){const Te=g||yt(u,te);a.insertContentBlock(u,o,te,Te)}else St(u,o,f)}function w(u,{replaceGenerated:o=!1}={}){if(!T.currentSlideId)return;const f=T.projectId;if(!f||!Array.isArray(u)||!u.length)return;u.map(g=>Ve(g)).forEach(g=>{const te=a.addSlide(f);te&&m(f,te.id,g,{replaceGenerated:o})})}function Q(u=null,{replaceGenerated:o=!1}={}){if(!T.currentSlideId)return;let f=u;if(!f){if(!v.value)return;try{f=JSON.parse(v.value)}catch(Te){console.warn("Could not parse AI content:",Te);return}}const N=Ve(f),g=T.projectId,te=T.currentSlideId;!g||!te||m(g,te,N,{replaceGenerated:o})}function H(){if(v.value){if(se.value==="deck"){try{const u=JSON.parse(v.value),o=Array.isArray(u)?u:u==null?void 0:u.slides;if(!Array.isArray(o)||!o.length)return;w(o,{replaceGenerated:!0})}catch{return}return}Q()}}async function Se(){const u=R.value.trim()||"[your topic]",o=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${ae.value}" slide about "${u}" using a ${ee.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,f=await q.generate(o,{type:"creativeOptions",topic:u,slideType:ae.value});if(f)try{const N=JSON.parse(f.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(N))throw new Error("Options must be an array");U.value=N.slice(0,3).map((g,te)=>({title:String((g==null?void 0:g.title)||`Option ${te+1}`),angle:String((g==null?void 0:g.angle)||""),prompt:String((g==null?void 0:g.prompt)||"")})).filter(g=>g.prompt.trim()),U.value.length||(Y.value="No usable creative options were returned. Try generating again.")}catch{Y.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function Ee(u){u!=null&&u.prompt&&(_.value=u.prompt,ce.value=!0,D.value="slide",await Ne())}async function Oe(){if(!je.value.trim()||!T.projectId||!T.currentSlideId)return;const u=await q.transformSourceTextToSlideContent(je.value,{topic:R.value,slideType:ae.value,description:j.value,layoutMode:ee.value,customPrompt:_.value});if(!u)return;const o=Ve(u),f=Ge(Ae.value),N={x:Math.max(24,Math.round(f.minX)),y:Math.max(24,Math.round(f.minY))};Ae.value.forEach(g=>{a.deleteElement(T.projectId,T.currentSlideId,g.id)}),v.value=JSON.stringify(o,null,2),m(T.projectId,T.currentSlideId,o,{origin:N})}async function De(u=!1){if(!Le.value.trim()&&!Ie.value.trim())return;u||(le.value=[]);const o=await q.generateQuiz(Le.value,G.value,{difficulty:K.value,questionType:de.value,objective:ie.value,customPrompt:Ie.value});if(o)if(u){const f=new Set(le.value.map(g=>g.question)),N=o.filter(g=>!f.has(g.question)).map(g=>({...g,_selected:!0}));le.value=[...le.value,...N]}else le.value=o.map(f=>({...f,_selected:!0}))}async function ue(){const u=le.value.filter(f=>f._selected);if(!u.length)return;const o=T.projectId;u.forEach((f,N)=>{const g=a.addSlide(o);g&&(a.addElement(o,g.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:f.question,options:f.options,correctIndex:f.correctIndex,explanation:f.explanation||""}}),a.updateSlide(o,g.id,{title:`Q${N+1}: ${f.question.slice(0,40)}…`}))}),le.value=[]}function Ce(u){le.value.forEach(o=>o._selected=u)}async function Ke(){if(!we.value.trim())return;const u=await q.generateVoiceoverScript(we.value);u&&(v.value=u)}async function Fe(){var f,N;const u=(N=(f=xe.value)==null?void 0:f.content)==null?void 0:N.text;if(!u)return;const o=await q.generateTranslation(u,$e.value);o&&(v.value=o)}async function _e(){!v.value||!xe.value||a.updateElement(T.projectId,T.currentSlideId,xe.value.id,{content:{...xe.value.content,text:v.value}})}const ze=B(""),tt=B(!1);function ct(u){return String(u||"").replace(/```(json)?\n?/gi," ").replace(/```/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim().slice(0,220)}function vt(u,o){return new Promise((f,N)=>{const g=window.setTimeout(()=>{N(new Error("Timed out"))},o);Promise.resolve(u).then(te=>{window.clearTimeout(g),f(te)}).catch(te=>{window.clearTimeout(g),N(te)})})}async function Tt(){if(ze.value.trim()){tt.value=!0,v.value="Preparing image prompt...";try{if(!q.apiKey||q.apiProvider!=="openai"){v.value="AI image generation requires an OpenAI API key in API settings. No fallback image was inserted.";return}let u=ze.value;try{const f=await vt(q.generateImagePrompt(ze.value),2200);f&&(u=f.replace(/```(json)?\n?/g,"").trim())}catch{u=ze.value}u=ct(u)||ct(ze.value),v.value="Generating image and inserting it on the slide...";const o=await vt(q.generateImageAsset(u),2e4).catch(()=>null);if(!o){v.value="OpenAI image generation did not return an image. Try a simpler prompt or try again in a moment.";return}a.addElement(T.projectId,T.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:o,fallbackSrcs:[],alt:ze.value.trim()||"AI generated image",sourceType:"openai-image",objectFit:"cover"}}),v.value="AI image added to slide using OpenAI image generation."}catch{v.value="Could not insert the image right now. Try again in a moment."}finally{tt.value=!1}}}async function Nt(){var o,f;if(!((f=(o=xe.value)==null?void 0:o.content)!=null&&f.text))return;const u=await q.improveText(xe.value.content.text,M.value||"Make it clearer and more engaging");u&&(v.value=u)}async function zt(){!v.value||!xe.value||a.updateElement(T.projectId,T.currentSlideId,xe.value.id,{content:{...xe.value.content,text:v.value}})}async function Bt(){if(!M.value.trim())return;const u=await q.generate(M.value);u&&(v.value=u)}return(u,o)=>{var f,N,g,te,Te,Xe;return l(),i("div",_p,[e("div",Lp,[(l(),i(Z,null,ve([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],P=>e("button",{key:P.id,class:J(["ai-mode-btn",C.value===P.id&&"active"]),onClick:Ze=>C.value=P.id},k(P.label),11,jp)),64))]),e("div",Dp,[C.value==="generate"?(l(),i(Z,{key:0},[e("div",qp,[o[36]||(o[36]=e("label",{class:"form-label"},[X("Topic / Subject "),e("span",{class:"required"},"*")],-1)),pe(e("input",{"onUpdate:modelValue":o[0]||(o[0]=P=>R.value=P),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:Cn(Ne,["enter"])},null,544),[[ke,R.value]])]),e("div",Rp,[e("button",{class:J(["output-mode-btn",se.value==="single"&&"active"]),onClick:o[1]||(o[1]=P=>se.value="single")},"Single Slide",2),e("button",{class:J(["output-mode-btn",se.value==="deck"&&"active"]),onClick:o[2]||(o[2]=P=>se.value="deck")},"Slide Deck",2)]),se.value==="single"?(l(),i("div",Op,[o[38]||(o[38]=e("label",{class:"form-label"},"Slide Type",-1)),pe(e("select",{"onUpdate:modelValue":o[3]||(o[3]=P=>ae.value=P),class:"select"},[...o[37]||(o[37]=[et('<option value="general" data-v-5a3eb39c>General</option><option value="intro" data-v-5a3eb39c>Introduction</option><option value="overview" data-v-5a3eb39c>Overview</option><option value="concept" data-v-5a3eb39c>Concept Explanation</option><option value="example" data-v-5a3eb39c>Example / Case Study</option><option value="summary" data-v-5a3eb39c>Summary</option><option value="callout" data-v-5a3eb39c>Key Takeaway</option>',7)])],512),[[At,ae.value]])])):V("",!0),se.value==="single"?(l(),i("div",Fp,[e("div",Up,[o[39]||(o[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",Vp,k(he.value.hint),1)]),e("div",Wp,[(l(),i(Z,null,ve(s,P=>e("button",{key:P.id,class:J(["layout-preset-card",ee.value===P.id&&"active"]),onClick:Ze=>ee.value=P.id},[e("span",Hp,k(P.label),1),e("span",Yp,k(P.hint),1)],10,Gp)),64))])])):(l(),i("div",Qp,[o[40]||(o[40]=e("label",{class:"form-label"},"Number of Slides",-1)),pe(e("input",{"onUpdate:modelValue":o[4]||(o[4]=P=>S.value=P),class:"input",type:"number",min:"1",max:"20"},null,512),[[ke,S.value,void 0,{number:!0}]]),o[41]||(o[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),se.value==="deck"?(l(),i("div",Jp,[e("div",Xp,[o[42]||(o[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",Kp,k(be.value==="mixed"?"AI can vary layout by slide":`All slides use ${he.value.label}`),1)]),e("div",Zp,[e("button",{class:J(["output-mode-btn",be.value==="mixed"&&"active"]),onClick:o[5]||(o[5]=P=>be.value="mixed")},"Mixed Layouts",2),e("button",{class:J(["output-mode-btn",be.value==="single"&&"active"]),onClick:o[6]||(o[6]=P=>be.value="single")},"Consistent Layout",2)])])):V("",!0),se.value==="deck"&&be.value==="single"?(l(),i("div",ev,[e("div",tv,[o[43]||(o[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",ov,k(he.value.hint),1)]),e("div",nv,[(l(),i(Z,null,ve(s,P=>e("button",{key:`deck-${P.id}`,class:J(["layout-preset-card",ee.value===P.id&&"active"]),onClick:Ze=>ee.value=P.id},[e("span",iv,k(P.label),1),e("span",av,k(P.hint),1)],10,lv)),64))])])):V("",!0),e("div",sv,[o[44]||(o[44]=e("label",{class:"form-label"},[X("Description "),e("span",{class:"optional"},"(optional)")],-1)),pe(e("textarea",{"onUpdate:modelValue":o[7]||(o[7]=P=>j.value=P),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[ke,j.value]])]),e("div",rv,[e("div",uv,[o[46]||(o[46]=e("label",{class:"form-label"},"AI Prompt",-1)),ce.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Pe,title:"Reset to auto-generated prompt"},[...o[45]||(o[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),X(" Reset ",-1)])])):(l(),i("span",dv,"auto"))]),pe(e("textarea",{"onUpdate:modelValue":o[8]||(o[8]=P=>_.value=P),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:o[9]||(o[9]=P=>ce.value=!0),spellcheck:"false"},null,544),[[ke,_.value]]),o[47]||(o[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),se.value==="single"?(l(),i("div",cv,[e("button",{class:J(["output-mode-btn",D.value==="slide"&&"active"]),onClick:o[10]||(o[10]=P=>D.value="slide")},"Show on Slide",2),e("button",{class:J(["output-mode-btn",D.value==="options"&&"active"]),onClick:o[11]||(o[11]=P=>D.value="options")},"Creative Options",2)])):V("",!0),se.value==="single"&&je.value?(l(),i("div",pv,[e("div",vv,[o[48]||(o[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",fv,k(Ae.value.length)+" selected",1)]),e("div",mv,k(je.value),1),e("div",gv,[e("button",{class:"btn btn-secondary btn-sm",disabled:$(q).isGenerating,onClick:Oe}," Transform Selection to "+k(he.value.label),9,bv)])])):V("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:$(q).isGenerating||!R.value.trim()&&!_.value.trim()||se.value==="deck"&&(!S.value||S.value<1||S.value>20),onClick:Ne},[$(q).isGenerating?(l(),i("span",yv)):(l(),i("svg",xv,[...o[49]||(o[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),X(" "+k($(q).isGenerating?"Generating…":se.value==="deck"?v.value?`Regenerate ${S.value} Slides`:`Generate ${S.value} Slides`:D.value==="slide"?v.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,hv),se.value==="single"&&D.value==="options"&&(U.value.length||Y.value)?(l(),i("div",wv,[e("div",kv,[o[50]||(o[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[12]||(o[12]=P=>{U.value=[],Y.value=""})},"Clear")]),Y.value?(l(),i("div",Cv,[o[51]||(o[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),X(" "+k(Y.value),1)])):(l(),i("div",$v,[(l(!0),i(Z,null,ve(U.value,(P,Ze)=>(l(),i("article",{key:Ze,class:"creative-option-card"},[e("h4",Sv,k(P.title),1),e("p",Iv,k(P.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:gt=>Ee(P)},"Use This Option",8,Av)]))),128))]))])):V("",!0)],64)):C.value==="quiz"?(l(),i(Z,{key:1},[e("div",Mv,[o[52]||(o[52]=e("label",{class:"form-label"},[X("Quiz Topic "),e("span",{class:"required"},"*")],-1)),pe(e("input",{"onUpdate:modelValue":o[13]||(o[13]=P=>Le.value=P),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:Cn(De,["enter"])},null,544),[[ke,Le.value]])]),e("div",Ev,[e("div",Pv,[o[54]||(o[54]=e("label",{class:"form-label"},"Questions",-1)),pe(e("select",{"onUpdate:modelValue":o[14]||(o[14]=P=>G.value=P),class:"select"},[...o[53]||(o[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[At,G.value,void 0,{number:!0}]])]),e("div",Tv,[o[56]||(o[56]=e("label",{class:"form-label"},"Difficulty",-1)),pe(e("select",{"onUpdate:modelValue":o[15]||(o[15]=P=>K.value=P),class:"select"},[...o[55]||(o[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[At,K.value]])])]),e("div",Nv,[o[57]||(o[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",zv,[(l(),i(Z,null,ve([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],P=>e("button",{key:P.id,class:J(["qtype-btn",de.value===P.id&&"active"]),onClick:Ze=>de.value=P.id},[e("span",_v,k(P.icon),1),e("span",null,k(P.label),1)],10,Bv)),64))])]),e("div",Lv,[o[58]||(o[58]=e("label",{class:"form-label"},[X("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),pe(e("input",{"onUpdate:modelValue":o[16]||(o[16]=P=>ie.value=P),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[ke,ie.value]])]),e("div",jv,[e("div",Dv,[o[60]||(o[60]=e("label",{class:"form-label"},"AI Prompt",-1)),ye.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:A,title:"Reset to auto-generated prompt"},[...o[59]||(o[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),X(" Reset ",-1)])])):(l(),i("span",qv,"auto"))]),pe(e("textarea",{"onUpdate:modelValue":o[17]||(o[17]=P=>Ie.value=P),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:o[18]||(o[18]=P=>ye.value=!0),spellcheck:"false"},null,544),[[ke,Ie.value]]),o[61]||(o[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:$(q).isGenerating||!Le.value.trim()&&!Ie.value.trim(),onClick:o[19]||(o[19]=P=>De(!1))},[$(q).isGenerating?(l(),i("span",Ov)):(l(),i("svg",Fv,[...o[62]||(o[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),X(" "+k($(q).isGenerating?"Generating…":`Generate ${G.value} Questions`),1)],8,Rv),le.value.length?(l(),i("div",Uv,[e("div",Vv,[e("span",Wv,k(le.value.length)+" Questions",1),e("div",Gv,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[20]||(o[20]=P=>Ce(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:o[21]||(o[21]=P=>Ce(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:o[22]||(o[22]=P=>le.value=[])},"Clear")])]),e("div",Hv,[e("button",{class:"btn btn-secondary regen-btn",disabled:$(q).isGenerating,onClick:o[23]||(o[23]=P=>De(!1)),title:"Replace all questions with a new set"},[$(q).isGenerating?(l(),i("span",Qv)):(l(),i("svg",Jv,[...o[63]||(o[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),o[64]||(o[64]=X(" Regenerate ",-1))],8,Yv),e("button",{class:"btn btn-ghost regen-btn",disabled:$(q).isGenerating,onClick:o[24]||(o[24]=P=>De(!0)),title:"Generate more and append to current list"},[...o[65]||(o[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),X(" Add More ",-1)])],8,Xv)]),(l(!0),i(Z,null,ve(le.value,(P,Ze)=>(l(),i("div",{key:Ze,class:J(["quiz-card",{deselected:!P._selected}])},[e("div",Kv,[e("label",Zv,[pe(e("input",{type:"checkbox","onUpdate:modelValue":gt=>P._selected=gt},null,8,e1),[[Et,P._selected]]),e("span",t1,"Q"+k(Ze+1),1)]),e("div",o1,[e("span",{class:J(["badge difficulty-badge",P.difficulty])},k(P.difficulty),3),e("span",n1,k(P.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",l1,k(P.question),1),e("div",i1,[(l(!0),i(Z,null,ve(P.options,(gt,bt)=>(l(),i("div",{key:bt,class:J(["q-option",bt===P.correctIndex&&"correct"])},[e("span",a1,k(["A","B","C","D"][bt]),1),e("span",null,k(gt),1),bt===P.correctIndex?(l(),i("svg",s1,[...o[66]||(o[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):V("",!0)],2))),128))]),P.explanation?(l(),i("div",r1,[o[67]||(o[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),X(" "+k(P.explanation),1)])):V("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!le.value.filter(P=>P._selected).length,onClick:ue},[o[68]||(o[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),X(" Add "+k(le.value.filter(P=>P._selected).length)+" Selected as Quiz Slides ",1)],8,u1)])):V("",!0)],64)):C.value==="voiceover"?(l(),i(Z,{key:2},[e("div",d1,[o[69]||(o[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),pe(e("textarea",{"onUpdate:modelValue":o[25]||(o[25]=P=>we.value=P),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[ke,we.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:$(q).isGenerating,onClick:Ke},[$(q).isGenerating?(l(),i("span",p1)):V("",!0),X(" "+k($(q).isGenerating?"Generating…":"Generate Script"),1)],8,c1)],64)):C.value==="improve"?(l(),i(Z,{key:3},[(N=(f=xe.value)==null?void 0:f.content)!=null&&N.text?(l(),i("div",v1,[o[70]||(o[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",f1,k(xe.value.content.text.slice(0,120))+k(xe.value.content.text.length>120?"…":""),1)])):(l(),i("p",m1,"Select a text element on the canvas to improve it.")),e("div",g1,[o[71]||(o[71]=e("label",{class:"form-label"},"Instruction",-1)),pe(e("input",{"onUpdate:modelValue":o[26]||(o[26]=P=>M.value=P),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[ke,M.value]])]),o[72]||(o[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),pe(e("textarea",{"onUpdate:modelValue":o[27]||(o[27]=P=>M.value=P),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[ke,M.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:$(q).isGenerating||!xe.value&&!M.value,onClick:o[28]||(o[28]=P=>xe.value?Nt():Bt())},[$(q).isGenerating?(l(),i("span",h1)):V("",!0),X(" "+k($(q).isGenerating?"Processing…":"Generate"),1)],8,b1)],64)):C.value==="translate"?(l(),i(Z,{key:4},[(te=(g=xe.value)==null?void 0:g.content)!=null&&te.text?(l(),i("div",y1,[o[73]||(o[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",x1,k(xe.value.content.text.slice(0,120))+k(xe.value.content.text.length>120?"…":""),1)])):(l(),i("p",w1,"Select a text element on the canvas to translate it.")),e("div",k1,[o[75]||(o[75]=e("label",{class:"form-label"},"Target Language",-1)),pe(e("select",{"onUpdate:modelValue":o[29]||(o[29]=P=>$e.value=P),class:"select"},[...o[74]||(o[74]=[et('<option value="Spanish" data-v-5a3eb39c>Spanish</option><option value="French" data-v-5a3eb39c>French</option><option value="German" data-v-5a3eb39c>German</option><option value="Italian" data-v-5a3eb39c>Italian</option><option value="Portuguese" data-v-5a3eb39c>Portuguese</option><option value="Chinese (Simplified)" data-v-5a3eb39c>Chinese (Simplified)</option><option value="Japanese" data-v-5a3eb39c>Japanese</option><option value="Arabic" data-v-5a3eb39c>Arabic</option>',8)])],512),[[At,$e.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:$(q).isGenerating||!((Xe=(Te=xe.value)==null?void 0:Te.content)!=null&&Xe.text),onClick:Fe},[$(q).isGenerating?(l(),i("span",$1)):V("",!0),X(" "+k($(q).isGenerating?"Translating…":"Translate Text"),1)],8,C1),v.value?(l(),i("div",S1,[e("div",I1,[o[76]||(o[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",A1,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[30]||(o[30]=P=>u.navigator.clipboard.writeText(v.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:_e,disabled:!xe.value},"Apply",8,M1)])]),e("div",E1,k(v.value),1)])):V("",!0)],64)):C.value==="image"?(l(),i(Z,{key:5},[o[80]||(o[80]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),!$(q).apiKey||$(q).apiProvider!=="openai"?(l(),i("div",P1,[...o[77]||(o[77]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),X(" AI image generation needs an OpenAI API key in API settings. This action no longer inserts fallback photos. ",-1)])])):V("",!0),e("div",T1,[o[78]||(o[78]=e("label",{class:"form-label"},"Image Description",-1)),pe(e("textarea",{"onUpdate:modelValue":o[31]||(o[31]=P=>ze.value=P),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[ke,ze.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:tt.value||$(q).isGenerating||!ze.value||!$(q).apiKey||$(q).apiProvider!=="openai",onClick:Tt},[tt.value||$(q).isGenerating?(l(),i("span",z1)):V("",!0),X(" "+k(tt.value||$(q).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,N1),v.value?(l(),i("div",B1,[o[79]||(o[79]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",_1,k(v.value),1)])):V("",!0)],64)):C.value==="settings"?(l(),i("div",L1,[e("div",j1,[o[82]||(o[82]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:$(q).apiProvider,class:"select",onChange:o[32]||(o[32]=P=>$(q).setProvider(P.target.value))},[...o[81]||(o[81]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,D1)]),e("div",q1,[o[83]||(o[83]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:$(q).apiKey,class:"input",placeholder:"sk-…",onChange:o[33]||(o[33]=P=>$(q).setApiKey(P.target.value))},null,40,R1),o[84]||(o[84]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),$(q).apiKey?V("",!0):(l(),i("div",O1,[...o[85]||(o[85]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),X(" Running in ",-1),e("strong",null,"demo mode",-1),X(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):V("",!0),v.value&&C.value!=="settings"&&C.value!=="quiz"?(l(),i("div",F1,[e("div",U1,[o[86]||(o[86]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[34]||(o[34]=P=>v.value="")},"Clear")]),e("pre",V1,k(v.value),1),e("div",W1,[C.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:H},k(se.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):V("",!0),C.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:$(q).isGenerating,onClick:Ne},[...o[87]||(o[87]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),X(" Regenerate ",-1)])],8,G1)):V("",!0),C.value==="improve"&&xe.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:zt}," Apply to Element ")):V("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:o[35]||(o[35]=P=>{var Ze;return(Ze=u.navigator.clipboard)==null?void 0:Ze.writeText(v.value)})}," Copy ")])])):V("",!0),$(q).lastError?(l(),i("div",H1,[o[88]||(o[88]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),X(" "+k($(q).lastError),1)])):V("",!0)])])}}},Q1=Qe(Y1,[["__scopeId","data-v-5a3eb39c"]]),J1={class:"theme-manager"},X1={class:"panel-section"},K1={class:"presets-grid"},Z1=["title","onClick"],ef={class:"preset-preview"},tf={class:"preset-name"},of={class:"panel-section"},nf={class:"theme-fields"},lf={class:"form-label"},af={class:"color-row"},sf=["value","onInput"],rf=["value","onChange"],uf={class:"panel-section"},df={class:"theme-field"},cf=["value","placeholder"],pf={class:"chart-palette-preview"},vf={class:"panel-section"},ff={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},mf=["value"],gf=["value"],bf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hf=["value"],yf=["value"],xf={class:"form-group"},wf=["value"],kf={class:"panel-section"},Cf={class:"tp-chart-row"},$f={key:0,class:"apply-message success"},Sf={key:1,class:"apply-message error"},If={__name:"ThemeManager",setup(I){const s=nt(),r=lt(),c=E(()=>r.getProject(s.projectId)),p=E(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),h=E(()=>$n(p.value)),y=B(""),b=B("");function L(a){r.updateProject(s.projectId,{theme:{...p.value,...a}})}const oe=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],ne=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function W(a){L(a)}function me(a,C){const M=a.content||{};return a.type==="text"?{content:{...M,fontFamily:C.fontFamily||M.fontFamily,color:C.textColor||M.color}}:a.type==="heading"?{content:{...M,fontFamily:C.headingFont||C.fontFamily||M.fontFamily,color:C.textColor||M.color}}:a.type==="shape"?{content:{...M,fillColor:C.secondaryColor||M.fillColor}}:a.type==="hotspot"?{content:{...M,bgColor:C.primaryColor||M.bgColor}}:a.type==="button"?{content:{...M,bgColor:C.primaryColor||M.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:C.fontFamily||M.fontFamily}}:a.type==="quiz"?{content:{...M,cardBgColor:C.bgColor||M.cardBgColor,questionColor:C.textColor||M.questionColor,accentColor:C.primaryColor||M.accentColor}}:a.type==="chart"?{content:{...M,...Nn(C)}}:null}function q(){L({chartPalette:""})}function T(){y.value="",b.value="";const a=s.projectId,C=c.value,M=p.value;if(!a||!C){b.value="No active project to apply theme.";return}const R=C.slides||[];let v=0;R.forEach(G=>{(G.backgroundType||"color")==="color"&&r.updateSlide(a,G.id,{backgroundType:"color",background:M.bgColor||G.background||"#ffffff"}),(G.elements||[]).forEach(ae=>{const $e=me(ae,M);$e&&(r.updateElement(a,G.id,ae.id,$e),v+=1)})}),y.value=`Applied theme to ${R.length} slide${R.length===1?"":"s"} and ${v} element${v===1?"":"s"}.`}return(a,C)=>(l(),i("div",J1,[e("div",X1,[C[4]||(C[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",K1,[(l(),i(Z,null,ve(oe,M=>e("div",{key:M.name,class:"preset-card",title:M.name,onClick:R=>W(M)},[e("div",ef,[e("div",{class:"pp-header",style:ge({background:M.primaryColor})},null,4),e("div",{class:"pp-body",style:ge({background:M.bgColor})},[e("div",{class:"pp-line",style:ge({background:M.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:ge({background:M.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:ge({background:M.secondaryColor})},null,4)]),e("span",tf,k(M.name),1)],8,Z1)),64))])]),e("div",of,[C[5]||(C[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",nf,[(l(),i(Z,null,ve({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(M,R)=>e("div",{class:"theme-field",key:R},[e("label",lf,k(M),1),e("div",af,[e("input",{type:"color",value:p.value[R]||"#ffffff",class:"color-input-native",onInput:v=>L({[R]:v.target.value})},null,40,sf),e("input",{value:p.value[R]||"",class:"input",onChange:v=>L({[R]:v.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,rf)])])),64))])]),e("div",uf,[C[8]||(C[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",df,[C[6]||(C[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:$(ll)($($n)(p.value)),onChange:C[0]||(C[0]=M=>L({chartPalette:M.target.value}))},null,40,cf),e("div",pf,[(l(!0),i(Z,null,ve(h.value,(M,R)=>(l(),i("span",{key:`theme-chart-${R}`,class:"chart-palette-dot",style:ge({background:M})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:q},"Use auto palette")]),C[7]||(C[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",vf,[C[12]||(C[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",ff,[C[9]||(C[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:C[1]||(C[1]=M=>L({headingFont:M.target.value}))},[(l(),i(Z,null,ve(ne,M=>e("option",{key:M.value,value:M.value},k(M.label),9,gf)),64))],40,mf)]),e("div",bf,[C[10]||(C[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:C[2]||(C[2]=M=>L({fontFamily:M.target.value}))},[(l(),i(Z,null,ve(ne,M=>e("option",{key:M.value,value:M.value},k(M.label),9,yf)),64))],40,hf)]),e("div",xf,[C[11]||(C[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:C[3]||(C[3]=M=>L({fontSize:+M.target.value}))},null,40,wf)])]),e("div",kf,[C[13]||(C[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:ge({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:ge({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:ge({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:ge({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:ge({background:p.value.secondaryColor})},"Badge",4),e("div",Cf,[(l(!0),i(Z,null,ve(h.value.slice(0,5),(M,R)=>(l(),i("span",{key:`preview-chart-${R}`,class:"tp-chart-bar",style:ge({background:M,height:`${22+R*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:T}," Apply Theme to Slides "),y.value?(l(),i("p",$f,k(y.value),1)):V("",!0),b.value?(l(),i("p",Sf,k(b.value),1)):V("",!0)])]))}},Af=Qe(If,[["__scopeId","data-v-da2b0ce4"]]),Mf={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Ef={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},Pf={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Tf={class:"export-tabs tabs",style:{"overflow-x":"auto"}},Nf={class:"export-content"},zf={class:"export-options",style:{"margin-bottom":"20px"}},Bf={class:"form-group"},_f={class:"export-meta"},Lf={class:"meta-item"},jf={class:"meta-item"},Df={class:"meta-item"},qf={class:"export-options",style:{"margin-bottom":"20px"}},Rf={class:"form-group"},Of={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Ff={class:"export-options",style:{"margin-bottom":"20px"}},Uf={class:"form-group"},Vf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Wf={class:"coming-soon"},Gf={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},Hf={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},Yf={key:1,class:"export-success"},Qf={__name:"ExportModal",setup(I){const s=nt(),r=lt(),c=zn(),p=E(()=>r.getProject(s.projectId)),h=B("json"),y=B(""),b=B(""),L=B(!0);Ye(p,R=>{R&&!b.value&&(b.value=R.name||"presentation")},{immediate:!0});function oe(){const R=r.exportProject(s.projectId);if(!R)return;const v=new Blob([R],{type:"application/json"}),G=URL.createObjectURL(v),ae=document.createElement("a");ae.href=G,ae.download=`${b.value||"project"}.mediasurf.json`,ae.click(),URL.revokeObjectURL(G),y.value="success",setTimeout(()=>y.value="",3e3)}function ne(R,v="presentation"){return String(R).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||v}function W(R){return new Promise((v,G)=>{const ae=new FileReader;ae.onloadend=()=>v(ae.result),ae.onerror=()=>G(ae.error),ae.readAsDataURL(R)})}function me(R,v,G="html"){const ae=Pt(v);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${ae.width}px;
  --lf-slide-height: ${ae.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(R==null?void 0:R.fontFamily)||"Inter, sans-serif"};
  background: ${G==="pdf"?"#f3f4f6":`
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%)`};
  color: ${G==="pdf"?"#111827":"#ffffff"};
  display: ${G==="pdf"?"block":"flex"};
  align-items: ${G==="pdf"?"stretch":"center"};
  justify-content: ${G==="pdf"?"flex-start":"center"};
  overflow: ${G==="pdf"?"auto":"hidden"};
  padding: ${G==="pdf"?"24px 0":"0"};
}
.lf-shell {
  width: ${G==="pdf"?"100%":"100vw"};
  min-height: ${G==="pdf"?"auto":"100vh"};
  height: ${G==="pdf"?"auto":"100vh"};
  position: relative;
  display: flex;
  align-items: ${G==="pdf"?"stretch":"center"};
  justify-content: center;
  overflow: ${G==="pdf"?"visible":"hidden"};
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
  width: ${G==="pdf"?"100%":"auto"};
  max-width: ${G==="pdf"?"none":"auto"};
  padding: ${G==="pdf"?"0":"18px"};
  border-radius: ${G==="pdf"?"0":"32px"};
  background: ${G==="pdf"?"transparent":"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"};
  border: ${G==="pdf"?"none":"1px solid rgba(255,255,255,0.12)"};
  box-shadow: ${G==="pdf"?"none":"0 30px 80px rgba(0,0,0,.34)"};
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
  width: ${G==="pdf"?"100%":"var(--lf-slide-width)"};
  height: ${G==="pdf"?"auto":"var(--lf-slide-height)"};
  border-radius: ${G==="pdf"?"0":"18px"};
  overflow: ${G==="pdf"?"visible":"hidden"};
  box-shadow: ${G==="pdf"?"none":"0 30px 90px rgba(0,0,0,.5)"};
  transform-origin: center center;
  display: ${G==="pdf"?"flex":"block"};
  flex-direction: ${G==="pdf"?"column":"row"};
  align-items: ${G==="pdf"?"center":"stretch"};
  gap: ${G==="pdf"?"24px":"0"};
}
.slide {
  position: ${G==="pdf"?"relative":"absolute"};
  inset: ${G==="pdf"?"auto":"0"};
  display: ${G==="pdf"?"block":"none"};
  overflow: hidden;
  color: ${(R==null?void 0:R.textColor)||"#1a1a2e"};
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
  flex: 0 0 auto;
  background-clip: padding-box;
  box-shadow: ${G==="pdf"?"0 12px 32px rgba(15, 23, 42, 0.16)":"none"};
  page-break-after: ${G==="pdf"?"always":"auto"};
  break-after: ${G==="pdf"?"page":"auto"};
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
  background: ${(R==null?void 0:R.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(v==null?void 0:v.showProgress)===!1?"none":"block"};
  z-index: 6;
}
${G==="iframe"?`
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
${G==="pdf"?`
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
`}function q(R="html"){return`
(function () {
  var exportMode = ${JSON.stringify(R)};
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
`}async function T(){return M("html")}async function a(){return M("iframe")}async function C(){return M("pdf")}async function M(R="html"){var Le,K,de;const v=p.value;if(!v)return;y.value="processing";const G=R==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(R==="pdf"&&!G){y.value="error",setTimeout(()=>y.value="",3e3);return}const ae=R==="pdf"?null:new al,$e=ae?ae.folder("assets"):null;let we=0;async function j(ie,le="media"){if((!ie||ie.startsWith("data:")||ie.startsWith("http://localhost")||ie.startsWith("blob:"))&&ie.startsWith("data:"))return ie;try{const ye=await(await fetch(ie)).blob();if(R==="pdf")return await W(ye);let z="bin";const A=ye.type;if(A.includes("image/png")?z="png":A.includes("image/jpeg")?z="jpg":A.includes("image/gif")?z="gif":A.includes("image/svg")?z="svg":A.includes("image/webp")?z="webp":A.includes("video/mp4")?z="mp4":A.includes("audio/mpeg")&&(z="mp3"),z==="bin"){const x=ie.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);x&&(z=x[1])}we++;const O=`${le}_${we}.${z}`;return $e.file(O,ye),`assets/${O}`}catch(Ie){return console.warn("Could not fetch asset:",ie,Ie),ie}}const _=JSON.parse(JSON.stringify([...v.slides||[]])).sort((ie,le)=>(ie.order??0)-(le.order??0));if(L.value)for(const ie of _){ie.backgroundType==="image"&&ie.backgroundImage&&(ie.backgroundImage=await j(ie.backgroundImage,"bg"));for(const le of ie.elements||[])le.type==="image"&&((Le=le.content)!=null&&Le.src)&&(le.content.src=await j(le.content.src,"img")),le.type==="video"&&((K=le.content)!=null&&K.src)&&!le.content.src.includes("youtube")&&!le.content.src.includes("youtu.be")&&(le.content.src=await j(le.content.src,"vid")),le.type==="audio"&&((de=le.content)!=null&&de.src)&&(le.content.src=await j(le.content.src,"aud"))}const ce=ne(b.value||v.name||"presentation"),se={name:v.name,theme:v.theme||{},settings:v.settings||{},slides:_},ee=JSON.stringify(se).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),be=me(v.theme,v.settings,R),S=q(R),D=`<script id="lf-data" type="application/json">${ee}<\/script>`,Y=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ce}</title>
${R==="pdf"?`<style>${be}</style>`:'<link rel="stylesheet" href="style.css">'}
</head>
<body class="${R==="iframe"?"is-iframe":R==="pdf"?"is-pdf":""}">
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
${R!=="pdf"?'<script src="script.js"><\/script>':`<script>${S}<\/script>`}
</body>
</html>`;if(R==="pdf"){G.document.open(),G.document.write(Y),G.document.close(),y.value="success",setTimeout(()=>y.value="",3e3);return}ae.file("index.html",Y),ae.file("style.css",be),ae.file("script.js",S);const he=await ae.generateAsync({type:"blob"}),Re=URL.createObjectURL(he),Pe=document.createElement("a");Pe.href=Re,Pe.download=`${ce}.zip`,Pe.click(),URL.revokeObjectURL(Re),y.value="success",setTimeout(()=>y.value="",3e3)}return(R,v)=>(l(),He(En,{title:"Export Project",size:"md",onClose:v[13]||(v[13]=G=>$(s).showExportModal=!1)},{footer:rt(()=>[e("button",{class:"btn btn-secondary",onClick:v[12]||(v[12]=G=>$(s).showExportModal=!1)},"Close")]),default:rt(()=>{var G,ae,$e,we,j;return[$(c).user?(l(),i(Z,{key:1},[e("div",Tf,[e("button",{class:J(["tab-btn",h.value==="json"&&"active"]),onClick:v[2]||(v[2]=_=>h.value="json")},"JSON",2),e("button",{class:J(["tab-btn",h.value==="html"&&"active"]),onClick:v[3]||(v[3]=_=>h.value="html")},"HTML",2),e("button",{class:J(["tab-btn",h.value==="iframe"&&"active"]),onClick:v[4]||(v[4]=_=>h.value="iframe")},"Iframe",2),e("button",{class:J(["tab-btn",h.value==="pdf"&&"active"]),onClick:v[5]||(v[5]=_=>h.value="pdf")},"PDF",2),e("button",{class:J(["tab-btn",h.value==="scorm"&&"active"]),onClick:v[6]||(v[6]=_=>h.value="scorm")},"SCORM",2)]),e("div",Nf,[h.value==="json"?(l(),i(Z,{key:0},[v[24]||(v[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",zf,[e("div",Bf,[v[19]||(v[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":v[7]||(v[7]=_=>b.value=_),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ke,b.value]])])]),e("div",_f,[e("div",Lf,[v[20]||(v[20]=e("span",null,"Project",-1)),e("strong",null,k((G=p.value)==null?void 0:G.name),1)]),e("div",jf,[v[21]||(v[21]=e("span",null,"Slides",-1)),e("strong",null,k((($e=(ae=p.value)==null?void 0:ae.slides)==null?void 0:$e.length)||0),1)]),e("div",Df,[v[22]||(v[22]=e("span",null,"Elements",-1)),e("strong",null,k(((j=(we=p.value)==null?void 0:we.slides)==null?void 0:j.reduce((_,ce)=>{var se;return _+(((se=ce.elements)==null?void 0:se.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:oe},[...v[23]||(v[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Download JSON ",-1)])])],64)):h.value==="html"?(l(),i(Z,{key:1},[v[28]||(v[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",qf,[e("div",Rf,[v[25]||(v[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":v[8]||(v[8]=_=>b.value=_),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ke,b.value]])]),e("label",Of,[pe(e("input",{type:"checkbox","onUpdate:modelValue":v[9]||(v[9]=_=>L.value=_)},null,512),[[Et,L.value]]),v[26]||(v[26]=X(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),v[29]||(v[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:T},[...v[27]||(v[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Download HTML ",-1)])])],64)):h.value==="iframe"?(l(),i(Z,{key:2},[v[33]||(v[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Ff,[e("div",Uf,[v[30]||(v[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),pe(e("input",{type:"text","onUpdate:modelValue":v[10]||(v[10]=_=>b.value=_),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ke,b.value]])]),e("label",Vf,[pe(e("input",{type:"checkbox","onUpdate:modelValue":v[11]||(v[11]=_=>L.value=_)},null,512),[[Et,L.value]]),v[31]||(v[31]=X(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...v[32]||(v[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Download Iframe Zip ",-1)])])],64)):h.value==="pdf"?(l(),i(Z,{key:3},[v[35]||(v[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),v[36]||(v[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:C},[...v[34]||(v[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Generate PDF ",-1)])])],64)):h.value==="scorm"?(l(),i(Z,{key:4},[v[40]||(v[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Wf,[(l(),i("svg",Gf,[...v[37]||(v[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),v[38]||(v[38]=e("h4",null,"Coming Soon",-1)),v[39]||(v[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):V("",!0),mt(Mt,{name:"fade"},{default:rt(()=>[y.value==="processing"?(l(),i("div",Hf,[...v[41]||(v[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),X(" Generating package... Please wait. ",-1)])])):y.value==="success"?(l(),i("div",Yf,[...v[42]||(v[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),X(" Export successful! Check your downloads folder. ",-1)])])):V("",!0)]),_:1})])],64)):(l(),i("div",Mf,[(l(),i("svg",Ef,[...v[14]||(v[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),v[17]||(v[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),v[18]||(v[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",Pf,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:v[0]||(v[0]=_=>$(c).loginWithGoogle())},[...v[15]||(v[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),X(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:v[1]||(v[1]=_=>$(c).loginWithMicrosoft())},[...v[16]||(v[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),X(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Jf=Qe(Qf,[["__scopeId","data-v-1a8a69d1"]]),Xf={key:0,class:"editor-view"},Kf={class:"editor-topbar"},Zf={class:"topbar-left"},em={class:"project-name-wrap"},tm=["value"],om={class:"save-label"},nm={class:"topbar-center"},lm={key:0,class:"slide-position"},im={class:"topbar-right"},am={class:"editor-body"},sm={class:"authoring-rail"},rm=["onClick","data-tooltip"],um={key:0,class:"rail-icon"},dm={key:1,class:"rail-icon"},cm={key:2,class:"rail-icon"},pm={key:3,class:"rail-icon"},vm={key:4,class:"rail-icon"},fm={key:5,class:"rail-icon"},mm={key:6,class:"rail-icon"},gm={key:7,class:"rail-icon"},bm={key:8,class:"rail-icon"},hm={key:9,class:"rail-icon"},ym={class:"right-panel"},xm={class:"panel-tabs"},wm=["onClick","data-tooltip"],km={class:"tab-icon"},Cm={class:"tab-label"},$m={class:"panel-content"},Sm={key:1,class:"editor-not-found"},Im={__name:"EditorView",setup(I){const s=Vn(),r=Un(),c=nt(),p=lt(),h=zn(),y=E(()=>s.params.id),b=E(()=>p.getProject(y.value)),L=E(()=>Pt(b.value)),oe=E(()=>{var z;return[...((z=b.value)==null?void 0:z.slides)||[]].sort((A,O)=>A.order-O.order)}),ne=B(null),W=B(!1),me=B("deck"),{aiStore:q,showAIModal:T,aiMode:a,aiTopic:C,aiContext:M,aiProjectName:R,aiSlideCount:v,aiQuestionCount:G,aiDifficulty:ae,aiQuestionType:$e,aiCreationError:we,aiSubmitting:j,aiProjectNamePlaceholder:_,aiPrimaryActionLabel:ce,openAICreationModal:se,createAIProject:ee}=Gn({onRequireAuth:()=>r.push({name:"dashboard"})});let be=!1,S=null;Ye(()=>b.value,z=>{if(z){if(be){be=!1;return}S&&clearTimeout(S),S=setTimeout(()=>{c.pushHistory(z)},600)}},{deep:!0}),Ye(()=>h.isAuthReady,async z=>{var A;if(z){if((A=h.user)!=null&&A.uid&&await p.ensureRemoteProjectsLoaded(),!b.value){r.push({name:"dashboard"});return}c.setProject(y.value),oe.value.length>0&&c.setCurrentSlide(oe.value[0].id),c.pushHistory(b.value)}},{immediate:!0});const D=E(()=>{const z=b.value;return z?`Saved ${new Date(z.updatedAt).toLocaleTimeString()}`:""}),U=E(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});sl({undo:()=>{if(c.canUndo()){const z=c.undo();z&&(be=!0,p.updateProject(y.value,z))}},redo:()=>{if(c.canRedo()){const z=c.redo();z&&(be=!0,p.updateProject(y.value,z))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var A,O,x,xe;const z=(xe=(x=(O=(A=b.value)==null?void 0:A.slides)==null?void 0:O.find(Ae=>Ae.id===c.currentSlideId))==null?void 0:x.elements)==null?void 0:xe.find(Ae=>Ae.id===c.selectedElementId);z&&c.setClipboard(z)},paste:()=>{if(c.clipboard&&c.currentSlideId){const z=c.clipboard;p.addElement(c.projectId,c.currentSlideId,z.type,{...z,x:z.x+20,y:z.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const z=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);z&&c.selectElement(z.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(z,A)=>{var x,xe,Ae,je;if(!c.selectedElementId)return;const O=(je=(Ae=(xe=(x=b.value)==null?void 0:x.slides)==null?void 0:xe.find(Ne=>Ne.id===c.currentSlideId))==null?void 0:Ae.elements)==null?void 0:je.find(Ne=>Ne.id===c.selectedElementId);O&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:O.x+z,y:O.y+A})},selectAll:()=>{var A,O,x;(((x=(O=(A=b.value)==null?void 0:A.slides)==null?void 0:O.find(xe=>xe.id===c.currentSlideId))==null?void 0:x.elements)||[]).forEach((xe,Ae)=>c.selectElement(xe.id,Ae>0))}});function Y(){r.push({name:"dashboard"})}function he(){r.push({name:"preview",params:{id:y.value},query:{from:"editor"}})}function Re(z="deck"){me.value=z,W.value=!0}function Pe(){W.value=!1,se(me.value)}function Le(z,A="Image"){if(!c.projectId||!c.currentSlideId||!z)return;const O=new Image;O.onload=()=>{const Ae=Math.min(420/O.width,280/O.height,1),je=Math.max(120,Math.round(O.width*Ae)),Ne=Math.max(80,Math.round(O.height*Ae)),Ve=Math.max(24,Math.round((L.value.width-je)/2)),pt=Math.max(24,Math.round((L.value.height-Ne)/2)),Je=p.addElement(c.projectId,c.currentSlideId,"image",{x:Ve,y:pt,width:je,height:Ne,content:{src:z,alt:A,objectFit:"cover"}});Je&&(c.selectElement(Je.id),c.setRightPanel("properties"),c.setActiveTool("select"))},O.src=z}function K(z){const[A]=Array.from(z.target.files||[]);if(!A||!A.type.startsWith("image/"))return;const O=new FileReader;O.onload=()=>Le(String(O.result||""),A.name),O.readAsDataURL(A),z.target.value=""}function de(){var z;(z=ne.value)==null||z.click()}const ie=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function le(z){if(z==="text"){c.setActiveTool("text");return}if(z==="blocks"){c.toggleSlidePanel("blocks");return}if(z==="resources"){c.setActiveTool("image");return}if(z==="interactive-elements"){c.setActiveTool("hotspot");return}if(z==="interactive-questions"){c.setActiveTool("quiz");return}if(z==="widgets"){c.setActiveTool("shape");return}if(z==="insert"){de();return}if(z==="style"){c.setRightPanel("properties");return}if(z==="background"){c.clearSelection(),c.setRightPanel("properties");return}z==="pages"&&c.toggleSlidePanel("slides")}function Ie(z){return z==="text"?["text","heading"].includes(c.activeTool):z==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":z==="resources"?c.activeTool==="image":z==="interactive-elements"?["hotspot","button"].includes(c.activeTool):z==="interactive-questions"?c.activeTool==="quiz":z==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):z==="insert"?!1:z==="style"||z==="background"?c.rightPanelTab==="properties":z==="pages"?c.showSlidePanel:!1}function ye(){Qn({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return Ye(()=>b.value,z=>{z&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{ye()},100)},{immediate:!0}),(z,A)=>b.value?(l(),i("div",Xf,[e("input",{ref_key:"imageInputRef",ref:ne,type:"file",accept:"image/*",class:"sr-only",onChange:K},null,544),e("header",Kf,[e("div",Zf,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:Y,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...A[14]||(A[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),X(" Dashboard ",-1)])]),e("div",em,[e("input",{value:b.value.name,class:"project-name-input",onChange:A[0]||(A[0]=O=>$(p).updateProject(y.value,{name:O.target.value}))},null,40,tm)]),e("span",om,k(D.value),1)]),e("div",nm,[$(c).currentSlideId?(l(),i("span",lm," Slide "+k(oe.value.findIndex(O=>O.id===$(c).currentSlideId)+1)+" of "+k(oe.value.length),1)):V("",!0)]),e("div",im,[e("button",{class:"btn btn-ghost btn-sm",onClick:ye,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...A[15]||(A[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),X(" Help ",-1)])]),e("button",{class:J(["btn btn-ghost btn-sm",$(c).showAIPanel&&"active-btn"]),onClick:A[1]||(A[1]=O=>{$(c).showAIPanel=!$(c).showAIPanel,$(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...A[16]||(A[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),X(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:A[2]||(A[2]=O=>{$(c).showThemeManager=!$(c).showThemeManager,$(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...A[17]||(A[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),X(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:he,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...A[18]||(A[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),X(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:A[3]||(A[3]=O=>$(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...A[19]||(A[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Export ",-1)])])])]),mt(_c,{onOpenAiProject:Re}),e("div",am,[e("aside",sm,[(l(),i(Z,null,ve(ie,O=>e("button",{key:O.id,class:J(["rail-option",Ie(O.id)&&"active"]),onClick:x=>le(O.id),"data-tooltip":O.label,"data-tooltip-position":"right"},[O.id==="text"?(l(),i("span",um,"T")):O.id==="blocks"?(l(),i("span",dm,[...A[20]||(A[20]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):O.id==="resources"?(l(),i("span",cm,[...A[21]||(A[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):O.id==="interactive-elements"?(l(),i("span",pm,[...A[22]||(A[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):O.id==="interactive-questions"?(l(),i("span",vm,[...A[23]||(A[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):O.id==="widgets"?(l(),i("span",fm,[...A[24]||(A[24]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):O.id==="insert"?(l(),i("span",mm,[...A[25]||(A[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):O.id==="style"?(l(),i("span",gm,[...A[26]||(A[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):O.id==="background"?(l(),i("span",bm,[...A[27]||(A[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):O.id==="pages"?(l(),i("span",hm,[...A[28]||(A[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):V("",!0),X(" "+k(O.label),1)],10,rm)),64))]),mt(Mt,{name:"side-panel-slide"},{default:rt(()=>[$(c).showSlidePanel&&$(c).leftPanelTab==="slides"?(l(),He(kl,{key:0})):V("",!0)]),_:1}),mt(Mt,{name:"side-panel-slide"},{default:rt(()=>[$(c).showSlidePanel&&$(c).leftPanelTab==="blocks"?(l(),He(Jl,{key:0})):V("",!0)]),_:1}),mt(Bp),e("aside",ym,[e("div",xm,[(l(),i(Z,null,ve([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],O=>e("button",{key:O.id,class:J(["panel-tab",$(c).rightPanelTab===O.id&&"active"]),onClick:x=>$(c).setRightPanel(O.id),"data-tooltip":`Open ${O.label}`,"data-tooltip-position":"bottom"},[e("span",km,k(O.icon),1),e("span",Cm,k(O.label),1)],10,wm)),64))]),e("div",$m,[mt(Mt,{name:"editor-panel-switch",mode:"out-in"},{default:rt(()=>[(l(),i("div",{key:U.value,class:"panel-content-view"},[$(c).rightPanelTab==="properties"?(l(),He(mc,{key:0})):$(c).rightPanelTab==="layers"?(l(),He(bi,{key:1})):$(c).rightPanelTab==="ai"?(l(),He(Q1,{key:2})):$(c).rightPanelTab==="theme"?(l(),He(Af,{key:3})):V("",!0)]))]),_:1})])])]),$(c).showExportModal?(l(),He(Jf,{key:0})):V("",!0),W.value?(l(),He(Hn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:A[4]||(A[4]=O=>W.value=!1),onConfirm:Pe})):V("",!0),$(T)?(l(),He(Yn,{key:2,mode:$(a),topic:$(C),context:$(M),"project-name":$(R),"slide-count":$(v),"question-count":$(G),difficulty:$(ae),"question-type":$($e),"project-name-placeholder":$(_),"primary-action-label":$(ce),"creation-error":$(we),"is-submitting":$(j),"is-generating":$(q).isGenerating,"has-api-key":!!$(q).apiKey,onClose:A[5]||(A[5]=O=>T.value=!1),onCreate:$(ee),"onUpdate:mode":A[6]||(A[6]=O=>a.value=O),"onUpdate:topic":A[7]||(A[7]=O=>C.value=O),"onUpdate:context":A[8]||(A[8]=O=>M.value=O),"onUpdate:projectName":A[9]||(A[9]=O=>R.value=O),"onUpdate:slideCount":A[10]||(A[10]=O=>v.value=O),"onUpdate:questionCount":A[11]||(A[11]=O=>G.value=O),"onUpdate:difficulty":A[12]||(A[12]=O=>ae.value=O),"onUpdate:questionType":A[13]||(A[13]=O=>$e.value=O)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):V("",!0)])):(l(),i("div",Sm,[A[29]||(A[29]=e("h2",null,"Project not found",-1)),A[30]||(A[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:Y},"Go to Dashboard")]))}},Bm=Qe(Im,[["__scopeId","data-v-902e6311"]]);export{Bm as default};
