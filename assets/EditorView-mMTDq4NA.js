import{K as Cn,P as $n,v as l,F as i,B as e,C as k,H as Z,I as pe,E as qe,D as X,u as I,Q as fe,M as et,G as W,L as K,q as Ye,R as Sn,f as P,r as _,N as ce,O as ke,x as rt,S as Et,w as Je,n as In,i as qn,U as Rn,y as gt,T as Mt,V as At,z as Fn,p as Un,J as wn}from"./vue-core-DCl8Fgqc.js";import{u as On,d as Vn}from"./vue-ecosystem-Da9kls6U.js";import{u as nt,M as An,c as Wn,a as Gn,C as Hn,A as Yn,b as Qn}from"./ConfirmActionModal-Cex8EZOl.js";import{u as lt,b as Xn,g as Pt,C as Bt,c as Jn,n as Kn,p as Zn,s as el,m as Mn,f as En,d as Pn,e as tl,h as _t,B as ol,i as nl,j as ll,k as kn,a as Tn}from"./projectStore-C_pIiSnZ.js";import{_ as Qe}from"./index-C0d_Wqcb.js";import{C as il}from"./ChartElement-BZ9w2JT8.js";import{J as al}from"./jszip-529iNPX7.js";function sl(S){function s(r){var b,D,ge,ue,G,be,H,T,a,C,M,q,p,O,le,Se,we;const c=r.ctrlKey||r.metaKey,v=r.key.toLowerCase(),h=r.target.tagName.toLowerCase(),y=h==="input"||h==="textarea"||r.target.isContentEditable;y&&c&&["c","v","x","a","z","y"].includes(v)||(c&&v==="z"&&!r.shiftKey?(r.preventDefault(),(b=S.undo)==null||b.call(S)):c&&(v==="y"||v==="z"&&r.shiftKey)?(r.preventDefault(),(D=S.redo)==null||D.call(S)):c&&v==="c"?(r.preventDefault(),(ge=S.copy)==null||ge.call(S)):c&&v==="v"?(r.preventDefault(),(ue=S.paste)==null||ue.call(S)):c&&v==="x"?(r.preventDefault(),(G=S.cut)==null||G.call(S)):c&&v==="d"?(r.preventDefault(),(be=S.duplicate)==null||be.call(S)):c&&v==="a"?(r.preventDefault(),(H=S.selectAll)==null||H.call(S)):v==="delete"||v==="backspace"?y||(r.preventDefault(),(T=S.delete)==null||T.call(S)):v==="escape"?(a=S.escape)==null||a.call(S):c&&v==="g"?(r.preventDefault(),(C=S.toggleGrid)==null||C.call(S)):c&&v==="="||c&&v==="+"?(r.preventDefault(),(M=S.zoomIn)==null||M.call(S)):c&&v==="-"?(r.preventDefault(),(q=S.zoomOut)==null||q.call(S)):c&&v==="0"?(r.preventDefault(),(p=S.zoomReset)==null||p.call(S)):v==="arrowleft"?(O=S.nudge)==null||O.call(S,-1,0):v==="arrowright"?(le=S.nudge)==null||le.call(S,1,0):v==="arrowup"?(Se=S.nudge)==null||Se.call(S,0,-1):v==="arrowdown"&&((we=S.nudge)==null||we.call(S,0,1)))}Cn(()=>window.addEventListener("keydown",s)),$n(()=>window.removeEventListener("keydown",s))}const rl={class:"slide-panel"},ul={class:"slide-panel-header"},dl={class:"slide-count"},cl={class:"slides-list"},pl=["onClick","onContextmenu","onDragstart","onDrop"],vl={class:"slide-number"},fl=["viewBox"],ml=["x","y","width","height","fill"],gl=["d","stroke"],bl=["d","fill"],hl={class:"slide-footer"},yl={class:"slide-title"},xl=["onClick"],wl={__name:"SlidePanel",setup(S){const s=nt(),r=lt(),c=P(()=>r.getProject(s.projectId)),v=P(()=>Pt(c.value)),h=P(()=>{var L,B;return((B=(L=c.value)==null?void 0:L.slides)==null?void 0:B.slice().sort((de,ie)=>de.order-ie.order))||[]}),y=_({show:!1,x:0,y:0,slideId:null});function b(L){s.setCurrentSlide(L)}function D(){const L=h.value.findIndex(de=>de.id===s.currentSlideId),B=r.addSlide(s.projectId,L);B&&s.setCurrentSlide(B.id)}function ge(L){var ie,ee;const B=h.value.findIndex(me=>me.id===L);r.deleteSlide(s.projectId,L);const de=((ie=c.value)==null?void 0:ie.slides)||[];if(de.length>0){const me=de.slice().sort((j,U)=>j.order-U.order),$=Math.min(B,me.length-1);s.setCurrentSlide((ee=me[$])==null?void 0:ee.id)}}function ue(L,B){L.preventDefault(),y.value={show:!0,x:L.clientX,y:L.clientY,slideId:B},setTimeout(()=>window.addEventListener("click",G,{once:!0}),0)}function G(){y.value.show=!1}function be(){const L=r.duplicateSlide(s.projectId,y.value.slideId);L&&s.setCurrentSlide(L.id),G()}function H(){ge(y.value.slideId),G()}function T(L,B){L.stopPropagation(),ge(B)}function a(){const L=h.value.findIndex(B=>B.id===y.value.slideId);L>0&&r.reorderSlides(s.projectId,L,L-1),G()}function C(){const L=h.value.findIndex(B=>B.id===y.value.slideId);L<h.value.length-1&&r.reorderSlides(s.projectId,L,L+1),G()}let M=-1;function q(L,B){M=B,L.dataTransfer.effectAllowed="move"}function p(L,B){L.preventDefault(),M!==-1&&M!==B&&r.reorderSlides(s.projectId,M,B),M=-1}function O(L){return L.backgroundType==="gradient"&&L.backgroundGradient?{background:L.backgroundGradient}:L.backgroundType==="image"&&L.backgroundImage?{backgroundImage:`url(${L.backgroundImage})`,backgroundSize:"cover"}:{background:L.background||"#fff"}}function le(L){return{left:L.x/v.value.width*100+"%",top:L.y/v.value.height*100+"%",width:L.width/v.value.width*100+"%",height:L.height/v.value.height*100+"%"}}function Se(L){var B,de;return{background:L.type==="shape"?(B=L.content)==null?void 0:B.fillColor:L.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:L.type==="shape"&&((de=L.content)==null?void 0:de.shapeType)==="circle"?"50%":void 0}}function we(L){var B;return Xn(L.content||{},L.width||420,L.height||280,((B=c.value)==null?void 0:B.theme)||{})}return(L,B)=>(l(),i("div",rl,[e("div",ul,[B[2]||(B[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",dl,k(h.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:D,"data-tooltip":"Add slide","aria-label":"Add slide"},[...B[1]||(B[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",cl,[(l(!0),i(Z,null,pe(h.value,(de,ie)=>(l(),i("div",{key:de.id,class:X(["slide-thumb-item",I(s).currentSlideId===de.id&&"active"]),draggable:"true",onClick:ee=>b(de.id),onContextmenu:ee=>ue(ee,de.id),onDragstart:ee=>q(ee,ie),onDragover:B[0]||(B[0]=qe(()=>{},["prevent"])),onDrop:ee=>p(ee,ie)},[e("div",vl,k(ie+1),1),e("div",{class:"slide-thumb",style:fe(O(de))},[(l(!0),i(Z,null,pe(de.elements.slice(0,6),ee=>{var me;return l(),i("div",{key:ee.id,class:"mini-element-frame",style:fe(le(ee))},[ee.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${ee.width||420} ${ee.height||280}`,preserveAspectRatio:"none"},[we(ee).type==="bar"?(l(!0),i(Z,{key:0},pe(we(ee).cartesian.bars,$=>(l(),i("rect",{key:`mini-bar-${$.id}`,x:$.x,y:$.y,width:$.width,height:$.height,fill:$.color,rx:"6"},null,8,ml))),128)):we(ee).type==="line"?(l(),i("path",{key:1,d:we(ee).cartesian.linePath,stroke:((me=we(ee).cartesian.points[0])==null?void 0:me.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,gl)):(l(!0),i(Z,{key:2},pe(we(ee).circle.slices,$=>(l(),i("path",{key:`mini-slice-${$.id}`,d:$.path,fill:$.color},null,8,bl))),128))],8,fl)):(l(),i("div",{key:1,class:"mini-element",style:fe(Se(ee))},null,4))],4)}),128))],4),e("div",hl,[e("div",yl,k(de.title||`Slide ${ie+1}`),1),h.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:ee=>T(ee,de.id)},[...B[3]||(B[3]=[et('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,xl)):W("",!0)])],42,pl))),128))]),e("button",{class:"add-slide-bottom",onClick:D},[...B[4]||(B[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),K(" Add Slide ",-1)])]),(l(),Ye(Sn,{to:"body"},[y.value.show?(l(),i("div",{key:0,class:"context-menu",style:fe({left:y.value.x+"px",top:y.value.y+"px"})},[e("button",{class:"ctx-item",onClick:be},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:C},"Move Down"),B[5]||(B[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:H},"Delete Slide")],4)):W("",!0)]))]))}},kl=Qe(wl,[["__scopeId","data-v-30eea542"]]),Cl={class:"blocks-panel"},$l={class:"blocks-panel-header"},Sl={class:"blocks-toolbar"},Il={class:"blocks-categories"},Al=["onClick"],Ml={class:"blocks-panel-body"},El={class:"blocks-save-card"},Pl=["disabled"],Tl={class:"blocks-list"},Nl=["onDragstart"],zl={class:"block-thumb-stage"},Bl={class:"block-card-body"},_l={class:"block-card-head"},Ll={class:"block-name"},jl={class:"block-meta"},Dl={key:0},ql={key:1},Rl=["onClick"],Fl={class:"block-description"},Ul={key:0,class:"block-binding-note"},Ol={class:"block-tags"},Vl=["onClick"],Wl={class:"binding-modal-body"},Gl={class:"binding-modal-intro"},Hl=["for"],Yl=["id","onUpdate:modelValue"],Ql={__name:"BlocksPanel",setup(S){const s=nt(),r=lt(),c=_(""),v=_("all"),h=_(""),y=_("Custom"),b=_(!1),D=_(null),ge=_({}),ue=P(()=>r.getProject(s.projectId)),G=P(()=>{var $,j;return(j=($=ue.value)==null?void 0:$.slides)==null?void 0:j.find(U=>U.id===s.currentSlideId)}),be=P(()=>r.getContentBlocks(s.projectId)),H=P(()=>{const $=new Set(["all"]);return be.value.forEach(j=>$.add(j.category||"Custom")),Array.from($)}),T=P(()=>{var j;const $=new Set(s.selectedElementIds);return(((j=G.value)==null?void 0:j.elements)||[]).filter(U=>$.has(U.id))}),a=P(()=>{var $;return Array.isArray(($=D.value)==null?void 0:$.bindings)?D.value.bindings:[]}),C=P(()=>{const $=c.value.trim().toLowerCase();return be.value.filter(j=>v.value==="all"||(j.category||"Custom")===v.value?$?[j.name,j.description,j.category,...j.tags||[]].join(" ").toLowerCase().includes($):!0:!1)});function M($){const j=Array.isArray($==null?void 0:$.elements)?$.elements:[];if(!j.length)return{minX:0,minY:0,width:1,height:1};const U=Math.min(...j.map(Te=>Number(Te.x||0))),Y=Math.min(...j.map(Te=>Number(Te.y||0))),he=Math.max(...j.map(Te=>Number(Te.x||0)+Number(Te.width||0))),Re=Math.max(...j.map(Te=>Number(Te.y||0)+Number(Te.height||0)));return{minX:U,minY:Y,width:Math.max(1,he-U),height:Math.max(1,Re-Y)}}function q($,j){const U=M($);return{left:`${(Number(j.x||0)-U.minX)/U.width*100}%`,top:`${(Number(j.y||0)-U.minY)/U.height*100}%`,width:`${Number(j.width||0)/U.width*100}%`,height:`${Number(j.height||0)/U.height*100}%`}}function p($){var j,U,Y,he,Re,Te,_e;return $.type==="shape"?{background:((j=$.content)==null?void 0:j.fillColor)||"#cbd5e1",borderRadius:((U=$.content)==null?void 0:U.shapeType)==="circle"?"50%":`${Number(((Y=$.content)==null?void 0:Y.borderRadius)||10)}px`,border:`${Math.max(0,Number(((he=$.content)==null?void 0:he.borderWidth)||0))}px solid ${((Re=$.content)==null?void 0:Re.borderColor)||"transparent"}`}:$.type==="button"?{background:((Te=$.content)==null?void 0:Te.bgColor)||"#6c47ff",borderRadius:`${Number(((_e=$.content)==null?void 0:_e.borderRadius)||10)}px`}:$.type==="image"||$.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:$.type==="text"||$.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function O($,j){const U=$.type==="heading"?2:3,Y=Math.max(18,100/(U+1.25));return{width:`${j===U-1?72:100}%`,height:`${$.type==="heading"?Y:Y-2}%`}}function le($){$.length&&(s.setSelection($.map(j=>j.id)),s.focusPropertiesSection("content"),s.setActiveTool("select"))}function Se($){return Array.isArray($==null?void 0:$.bindings)&&$.bindings.length>0}function we(){b.value=!1,D.value=null,ge.value={}}function L($,j=null){const U=r.insertContentBlock(s.projectId,s.currentSlideId,$.id,j?{bindingValues:j}:{});le(U)}function B($){if(!Se($)){L($);return}D.value=$,ge.value=Object.fromEntries($.bindings.map(j=>[j.id,j.defaultValue||""])),b.value=!0}function de(){D.value&&(L(D.value,{...ge.value}),we())}function ie(){var U,Y;const $=h.value.trim();if(!$||!T.value.length)return;r.saveSelectionAsContentBlock(s.projectId,s.currentSlideId,T.value.map(he=>he.id),{name:$,category:y.value.trim()||"Custom",accent:((Y=(U=ue.value)==null?void 0:U.theme)==null?void 0:Y.primaryColor)||"#6c47ff"})&&(h.value="",v.value="Custom")}function ee($){r.deleteContentBlock(s.projectId,$)}function me($,j){$.dataTransfer&&($.dataTransfer.effectAllowed="copy",$.dataTransfer.setData(Bt,JSON.stringify({id:j.id})),$.dataTransfer.setData("text/plain",j.name))}return($,j)=>(l(),i("div",Cl,[e("div",$l,[j[5]||(j[5]=e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")],-1)),e("button",{type:"button",class:"btn btn-icon blocks-close-btn",onClick:j[0]||(j[0]=U=>I(s).toggleSlidePanel("blocks")),"aria-label":"Close blocks panel",title:"Close blocks panel"},[...j[4]||(j[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),e("div",Sl,[ce(e("input",{"onUpdate:modelValue":j[1]||(j[1]=U=>c.value=U),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[ke,c.value]]),e("div",Il,[(l(!0),i(Z,null,pe(H.value,U=>(l(),i("button",{key:U,type:"button",class:X(["blocks-category-chip",v.value===U&&"active"]),onClick:Y=>v.value=U},k(U==="all"?"All":U),11,Al))),128))])]),e("div",Ml,[e("div",El,[j[6]||(j[6]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),j[7]||(j[7]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project. Text and button labels become editable placeholders.",-1)),ce(e("input",{"onUpdate:modelValue":j[2]||(j[2]=U=>h.value=U),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[ke,h.value]]),ce(e("input",{"onUpdate:modelValue":j[3]||(j[3]=U=>y.value=U),class:"input",placeholder:"Category"},null,512),[[ke,y.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!T.value.length||!h.value.trim(),onClick:ie}," Save "+k(T.value.length?`${T.value.length} item${T.value.length>1?"s":""}`:"selection")+" as block ",9,Pl)]),e("div",Tl,[(l(!0),i(Z,null,pe(C.value,U=>(l(),i("div",{key:U.id,class:"block-card",draggable:"true",onDragstart:Y=>me(Y,U)},[e("div",{class:"block-thumb",style:fe({"--block-accent":U.accent||"#6c47ff"})},[e("div",zl,[(l(!0),i(Z,null,pe(U.elements,Y=>(l(),i("div",{key:`${U.id}-${Y.type}-${Y.x}-${Y.y}`,class:"block-thumb-frame",style:fe(q(U,Y))},[["text","heading"].includes(Y.type)?(l(),i("div",{key:0,class:X(["thumb-text",Y.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(Z,null,pe(Y.type==="heading"?2:3,he=>(l(),i("span",{key:`${U.id}-${Y.type}-${Y.x}-${Y.y}-${he}`,class:"thumb-text-line",style:fe(O(Y,he-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:fe(p(Y))},null,4))],4))),128))])],4),e("div",Bl,[e("div",_l,[e("div",null,[e("div",Ll,k(U.name),1),e("div",jl,[K(k(U.category),1),U.scope==="custom"?(l(),i("span",Dl," · Custom")):W("",!0),Se(U)?(l(),i("span",ql," · "+k(U.bindings.length)+" field"+k(U.bindings.length>1?"s":""),1)):W("",!0)])]),U.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:Y=>ee(U.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...j[8]||(j[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,Rl)):W("",!0)]),e("p",Fl,k(U.description||"Reusable layout block"),1),Se(U)?(l(),i("div",Ul,"Editable placeholders included")):W("",!0),e("div",Ol,[(l(!0),i(Z,null,pe(U.tags||[],Y=>(l(),i("span",{key:`${U.id}-${Y}`,class:"block-tag"},"#"+k(Y),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:Y=>B(U)},k(Se(U)?"Insert with Fields":"Insert Block"),9,Vl)])],40,Nl))),128))])]),b.value?(l(),Ye(An,{key:0,title:"Fill Template Fields",size:"md",onClose:we},{footer:rt(()=>[e("button",{type:"button",class:"btn btn-ghost",onClick:we},"Cancel"),e("button",{type:"button",class:"btn btn-primary",onClick:de},"Insert Block")]),default:rt(()=>{var U;return[e("div",Wl,[e("p",Gl,[j[9]||(j[9]=K(" Customize the placeholder text before inserting ",-1)),e("strong",null,k((U=D.value)==null?void 0:U.name),1),j[10]||(j[10]=K(". ",-1))]),(l(!0),i(Z,null,pe(a.value,Y=>(l(),i("div",{key:Y.id,class:"binding-field"},[e("label",{class:"form-label",for:`binding-${Y.id}`},k(Y.label),9,Hl),ce(e("textarea",{id:`binding-${Y.id}`,"onUpdate:modelValue":he=>ge.value[Y.id]=he,class:"textarea binding-input"},null,8,Yl),[[ke,ge.value[Y.id]]])]))),128))])]}),_:1})):W("",!0)]))}},Xl=Qe(Ql,[["__scopeId","data-v-aec67d0c"]]),Jl={class:"layer-panel"},Kl={class:"layer-header panel-section"},Zl={class:"panel-title",style:{"margin-bottom":"0"}},ei={class:"layer-count"},ti={key:0,class:"layers-empty"},oi={key:1,class:"layers-list"},ni=["onClick"],li={class:"layer-type-icon"},ii={class:"layer-name"},ai={class:"layer-actions"},si=["onClick","data-tooltip"],ri={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ui={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},di=["onClick","data-tooltip"],ci={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pi={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vi=["onClick"],fi=["onClick"],mi=["onClick"],gi={__name:"LayerPanel",setup(S){const s=nt(),r=lt(),c=P(()=>r.getProject(s.projectId)),v=P(()=>{var T,a;return(a=(T=c.value)==null?void 0:T.slides)==null?void 0:a.find(C=>C.id===s.currentSlideId)}),h=P(()=>{var T;return[...((T=v.value)==null?void 0:T.elements)||[]].sort((a,C)=>(C.zIndex||0)-(a.zIndex||0))});function y(T){s.selectElement(T)}function b(T){r.updateElement(s.projectId,s.currentSlideId,T.id,{visible:!T.visible})}function D(T){r.updateElement(s.projectId,s.currentSlideId,T.id,{locked:!T.locked})}function ge(T){r.reorderElement(s.projectId,s.currentSlideId,T,"up")}function ue(T){r.reorderElement(s.projectId,s.currentSlideId,T,"down")}function G(T){r.deleteElement(s.projectId,s.currentSlideId,T),s.selectedElementId===T&&s.clearSelection()}function be(T){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[T]||"◆"}function H(T){var a,C,M;return(a=T.content)!=null&&a.text?T.content.text.slice(0,24):(C=T.content)!=null&&C.label?T.content.label:(M=T.content)!=null&&M.question?T.content.question.slice(0,24):T.type.charAt(0).toUpperCase()+T.type.slice(1)}return(T,a)=>(l(),i("div",Jl,[e("div",Kl,[e("div",Zl,[a[0]||(a[0]=K(" Layers ",-1)),e("span",ei,k(h.value.length),1)])]),h.value.length===0?(l(),i("div",ti,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",oi,[(l(!0),i(Z,null,pe(h.value,C=>(l(),i("div",{key:C.id,class:X(["layer-item",I(s).selectedElementIds.includes(C.id)&&"selected",C.locked&&"locked",!C.visible&&"hidden"]),onClick:M=>y(C.id)},[e("span",li,k(be(C.type)),1),e("span",ii,k(H(C)),1),e("div",ai,[e("button",{class:X(["layer-action-btn",{active:C.visible}]),onClick:qe(M=>b(C),["stop"]),"data-tooltip":C.visible?"Hide":"Show"},[C.visible?(l(),i("svg",ri,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",ui,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,si),e("button",{class:X(["layer-action-btn",{active:C.locked}]),onClick:qe(M=>D(C),["stop"]),"data-tooltip":C.locked?"Unlock":"Lock"},[C.locked?(l(),i("svg",ci,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",pi,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,di),e("button",{class:"layer-action-btn",onClick:qe(M=>ge(C.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,vi),e("button",{class:"layer-action-btn",onClick:qe(M=>ue(C.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,fi),e("button",{class:"layer-action-btn danger",onClick:qe(M=>G(C.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,mi)])],10,ni))),128))]))]))}},bi=Qe(gi,[["__scopeId","data-v-7407acd8"]]),hi={class:"panel-section"},yi={class:"preset-toolbar"},xi=["value"],wi=["value"],ki=["value"],Ci={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},$i=["onClick"],Si={class:"preset-meta-chip muted"},Ii={key:1,class:"import-review"},Ai={class:"motion-scrubber-header"},Mi={class:"preset-toolbar compact"},Ei=["value"],Pi=["value"],Ti={class:"import-list"},Ni=["onUpdate:modelValue"],zi={class:"import-item-title"},Bi={class:"preset-meta-chip"},_i={key:0,class:"preset-meta-chip muted"},Li={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(S,{emit:s}){const r=s;return(c,v)=>(l(),i("div",hi,[v[13]||(v[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",yi,[e("input",{value:S.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:v[0]||(v[0]=h=>r("update:searchQuery",h.target.value))},null,40,xi),e("select",{value:S.categoryFilter,class:"select",onChange:v[1]||(v[1]=h=>r("update:categoryFilter",h.target.value))},[v[8]||(v[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(Z,null,pe(S.availableCategories,h=>(l(),i("option",{key:`library-${h}`,value:h},k(h),9,ki))),128))],40,wi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[2]||(v[2]=h=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[3]||(v[3]=h=>r("export-presets"))},"Export")]),S.recentPresets.length?(l(),i("div",Ci,[v[9]||(v[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(Z,null,pe(S.recentPresets,h=>(l(),i("div",{class:"preset-item",key:`recent-${h.id}`},[e("button",{type:"button",class:"preset-chip",onClick:y=>r("apply-preset",h)},k(h.name),9,$i),e("span",Si,"Used "+k(h.usageCount)+"x",1)]))),128))])):W("",!0),S.pendingImportedPresets.length?(l(),i("div",Ii,[e("div",Ai,[v[10]||(v[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[4]||(v[4]=h=>r("clear-imports"))},"Discard")]),e("div",Mi,[e("select",{value:S.importScopeFilter,class:"select",onChange:v[5]||(v[5]=h=>r("update:importScopeFilter",h.target.value))},[...v[11]||(v[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Ei),e("select",{value:S.importConflictMode,class:"select",onChange:v[6]||(v[6]=h=>r("update:importConflictMode",h.target.value))},[...v[12]||(v[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Pi),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:v[7]||(v[7]=h=>r("apply-imports"))},"Merge Selected")]),e("div",Ti,[(l(!0),i(Z,null,pe(S.filteredPendingImports,h=>(l(),i("label",{key:`pending-${h.id}`,class:"import-item"},[ce(e("input",{"onUpdate:modelValue":y=>h.selected=y,type:"checkbox"},null,8,Ni),[[Et,h.selected]]),e("span",zi,k(h.name),1),e("span",Bi,k(h.scope),1),h.category?(l(),i("span",_i,k(h.category),1)):W("",!0)]))),128))])])):W("",!0)]))}},ji=Qe(Li,[["__scopeId","data-v-61f99273"]]),Di={key:1,class:"panel-section"},qi={class:"field-hint"},Ri={class:"motion-scrubber-shell"},Fi={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Ui=["onClick"],Oi={class:"motion-preview"},Vi={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Wi={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Gi={class:"motion-card-label"},Hi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Yi={class:"form-group"},Qi={class:"form-group"},Xi={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ji={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ki={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Zi={key:0,class:"preset-list"},ea=["onDragstart","onDragenter","onDrop"],ta=["onClick"],oa={key:0,class:"preset-meta-chip"},na=["onClick"],la=["onClick"],ia=["onClick"],aa={key:1,class:"preset-row preset-edit-row"},sa=["onClick"],ra={key:1,class:"field-hint"},ua={key:2,class:"panel-section"},da={class:"slide-settings-tabs"},ca={key:0,class:"slide-settings-pane"},pa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},va={class:"form-group"},fa={class:"bg-type-tabs"},ma=["onClick"],ga={key:0,class:"color-row"},ba=["value"],ha=["value"],ya={class:"slide-settings-subsection"},xa={class:"canvas-size-grid"},wa=["onClick"],ka={class:"canvas-size-icon-shell"},Ca={class:"canvas-size-name"},$a={class:"canvas-size-ratio"},Sa={class:"canvas-custom-card"},Ia={class:"canvas-custom-header"},Aa={class:"field-hint"},Ma={class:"canvas-custom-inputs"},Ea={class:"form-group"},Pa={class:"canvas-size-input-wrap"},Ta=["value"],Na={class:"form-group"},za={class:"canvas-size-input-wrap"},Ba=["value"],_a={class:"check-row canvas-size-lock"},La={class:"slide-settings-subsection"},ja={key:1,class:"slide-settings-pane"},Da=["value"],qa={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ra=["value"],Fa={class:"check-row"},Ua=["checked"],Oa={key:2,class:"slide-settings-pane"},Va={class:"check-row"},Wa=["checked"],Ga={class:"check-row"},Ha=["checked"],Ya={class:"check-row"},Qa=["checked"],Xa={class:"check-row"},Ja=["checked"],Ka={class:"check-row"},Za=["checked"],es={class:"panel-title"},ts={class:"element-type-badge"},os={class:"geo-grid"},ns={class:"form-group"},ls=["value"],is={class:"form-group"},as=["value"],ss={class:"form-group"},rs=["value"],us={class:"form-group"},ds=["value"],cs={class:"form-group"},ps=["value"],vs={class:"form-group"},fs=["value"],ms={class:"motion-scrubber-shell"},gs={class:"motion-card-grid"},bs=["onClick"],hs={class:"motion-preview"},ys={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},xs={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},ws={class:"motion-card-label"},ks={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Cs={class:"form-group"},$s=["value"],Ss={class:"form-group"},Is=["value"],As={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ms={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Es={key:0,class:"preset-list"},Ps=["onDragstart","onDragenter","onDrop"],Ts=["onClick"],Ns={key:0,class:"preset-meta-chip"},zs=["onClick"],Bs=["onClick"],_s=["onClick"],Ls={key:1,class:"preset-row preset-edit-row"},js=["onClick"],Ds={key:1,class:"field-hint"},qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rs=["value"],Fs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Us={class:"form-group"},Os=["value"],Vs={class:"form-group"},Ws=["value"],Gs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Hs=["value"],Ys=["value"],Qs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Xs={class:"align-btns"},Js=["onClick"],Ks={class:"form-group",style:{"margin-top":"var(--space-3)"}},Zs={class:"style-btns"},er={class:"form-group",style:{"margin-top":"var(--space-3)"}},tr={class:"color-row"},or=["value"],nr=["value"],lr={class:"form-group",style:{"margin-top":"var(--space-3)"}},ir=["value"],ar={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},sr={class:"form-group"},rr=["value"],ur={class:"form-group"},dr=["value"],cr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pr=["value"],vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fr=["value"],mr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gr=["value"],br={class:"form-group"},hr=["value"],yr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},xr={class:"form-group"},wr=["value"],kr={class:"form-group"},Cr=["value"],$r={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sr=["value"],Ir={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ar={class:"color-row"},Mr=["value"],Er=["value"],Pr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tr={class:"color-row"},Nr=["value"],zr=["value"],Br={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_r=["value"],Lr={class:"form-group"},jr=["value"],Dr={class:"form-group",style:{"margin-top":"var(--space-3)"}},qr=["value"],Rr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fr=["value"],Ur={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Or=["value"],Vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wr=["value"],Gr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Hr={class:"chart-data-actions"},Yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qr=["value","placeholder"],Xr={class:"chart-palette-preview"},Jr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Kr={class:"form-group"},Zr=["value"],eu={class:"form-group"},tu=["value"],ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},nu={class:"form-group"},lu=["value"],iu={class:"form-group"},au=["value"],su={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},ru={class:"form-group"},uu=["value"],du={key:0,class:"form-group"},cu=["value"],pu={key:1,class:"form-group"},vu=["value"],fu={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},mu={class:"form-group"},gu=["value"],bu={class:"check-row",style:{"margin-top":"20px"}},hu=["checked"],yu={class:"check-row"},xu=["checked"],wu={key:1,class:"check-row"},ku=["checked"],Cu={class:"check-row"},$u=["checked"],Su={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Iu=["value"],Au={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mu=["value"],Eu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pu=["value"],Tu={key:0,class:"form-group"},Nu=["value"],zu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Bu={class:"form-group"},_u=["value"],Lu={class:"form-group"},ju=["value"],Du={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},qu={class:"form-group"},Ru=["value"],Fu={class:"form-group"},Uu=["value"],Ou={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Vu={class:"form-group"},Wu=["value"],Gu={class:"form-group"},Hu=["value"],Yu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Qu={class:"form-group"},Xu=["value"],Ju=["value"],Ku={class:"form-group"},Zu=["value"],ed={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},td=["value"],od={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nd={class:"color-row"},ld=["value"],id=["value"],ad={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},sd={class:"form-group"},rd=["value"],ud={class:"form-group"},dd=["value"],cd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pd=["value"],vd={class:"form-group"},fd=["value"],md={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},gd={class:"form-group"},bd=["value"],hd={class:"form-group"},yd=["value"],xd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wd=["value"],kd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cd=["value"],$d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sd=["value"],Id={class:"check-row"},Ad=["checked"],Md={class:"check-row"},Ed=["checked"],Pd={class:"check-row"},Td=["checked"],Nd={class:"check-row"},zd=["checked"],Bd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_d=["value"],Ld={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jd=["value"],Dd={class:"check-row"},qd=["checked"],Rd={class:"check-row"},Fd=["checked"],Ud={class:"check-row"},Od=["checked"],Vd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Wd={class:"form-group"},Gd=["value"],Hd={class:"form-group"},Yd=["value"],Qd={class:"form-group",style:{"margin-top":"var(--space-3)"}},Xd=["value"],Jd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Kd=["value"],Zd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ec=["value"],tc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},oc=["value"],nc={class:"form-group"},lc=["value"],ic={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ac={class:"form-group"},sc=["value"],rc={class:"form-group"},uc=["value"],dc={class:"form-group",style:{"margin-top":"var(--space-3)"}},cc=["value"],pc={class:"panel-section"},vc={class:"actions-list"},fc={__name:"PropertiesPanel",setup(S){const s=nt(),r=lt(),c=P(()=>r.getProject(s.projectId)),v=P(()=>{var u,t;return(t=(u=c.value)==null?void 0:u.slides)==null?void 0:t.find(F=>F.id===s.currentSlideId)}),h=P(()=>{var u;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((u=c.value)==null?void 0:u.settings)||{}}}),y=P(()=>Pt(h.value)),b=P(()=>Mn(h.value)),D=P(()=>En(y.value.width,y.value.height)),ge=_(!0),ue=_("canvas"),G=P(()=>Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]),be=P(()=>G.value.filter(u=>u.scope!=="group")),H=P(()=>G.value.filter(u=>u.scope==="group")),T=P(()=>{var t;const u=new Set(s.selectedElementIds);return(((t=v.value)==null?void 0:t.elements)||[]).filter(F=>u.has(F.id))}),a=P(()=>{var u,t;return s.selectedElementId?(t=(u=v.value)==null?void 0:u.elements)==null?void 0:t.find(F=>F.id===s.selectedElementId):null}),C=P(()=>s.multiSelection||!!a.value),M=P(()=>s.multiSelection?"group":"single"),q=P(()=>{var t,F;const u=(F=(t=a.value)==null?void 0:t.animations)==null?void 0:F[0];return{type:(u==null?void 0:u.type)||"auto",delay:Number((u==null?void 0:u.delay)||0),duration:Number((u==null?void 0:u.duration)||.64)}}),p=P(()=>{var ze,Ge;const u=T.value.map(Oe=>{var mt;return((mt=Oe.animations)==null?void 0:mt[0])||null}),t=((ze=u[0])==null?void 0:ze.type)||"auto",F=Number(((Ge=u[0])==null?void 0:Ge.duration)||.64),ve=u.every(Oe=>((Oe==null?void 0:Oe.type)||"auto")===t),Ee=u.every(Oe=>Number((Oe==null?void 0:Oe.duration)||.64)===F);return{type:ve?t:"mixed",duration:Ee?F:.64}}),O=_(0),le=_(0),Se=_(""),we=_(""),L=_(""),B=_(""),de=_(""),ie=_(""),ee=_(""),me=_(""),$=_(""),j=_(""),U=_(""),Y=_(""),he=_(""),Re=_("all"),Te=_(null),_e=_(null),J=_([]),re=_("all"),oe=_("replace"),te=_(""),Ae=_(null),ye=_("");let N=null;const A=_({});Je(a,u=>{u?A.value=JSON.parse(JSON.stringify(u)):A.value={},(u==null?void 0:u.type)==="chart"&&(te.value="")},{immediate:!0,deep:!0}),Je(()=>{var u;return[s.propertiesPanelSection,(u=a.value)==null?void 0:u.id,s.rightPanelTab]},async([u,t,F])=>{var Ee;if(!u||!t||F!=="properties")return;await In();const ve=(Ee=Ae.value)==null?void 0:Ee.querySelector(`[data-props-anchor="${u}"]`);ve&&(ve.scrollIntoView({behavior:"smooth",block:"start"}),ye.value=u,N&&window.clearTimeout(N),N=window.setTimeout(()=>{ye.value===u&&(ye.value="")},1400))},{immediate:!0});function R(u){a.value&&r.updateElement(s.projectId,s.currentSlideId,a.value.id,u)}function x(u){if(!a.value)return;const t={...a.value.content,...u};R({content:t})}function xe(u,t){const F=parseFloat(t);isNaN(F)||R({[u]:F})}const Me=_({});Je(v,u=>{u&&(Me.value={...u})},{immediate:!0});function je(u){v.value&&r.updateSlide(s.projectId,v.value.id,u)}function Ne(u){if(!c.value)return;const t={...h.value,...u};r.updateProject(s.projectId,{settings:{...t,...Kn(t)}})}function We(u){Ne({slideWidth:u.width,slideHeight:u.height})}function ct(u,t){const F=Math.round(Number(t)||0);if(!F)return;const ve={[`slide${u==="width"?"Width":"Height"}`]:F};if(ge.value){const Ee=y.value.width,ze=y.value.height;u==="width"?ve.slideHeight=Math.round(F*(ze/Ee)):ve.slideWidth=Math.round(F*(Ee/ze))}Ne(ve)}const Xe=P(()=>{var u;return Pn(((u=c.value)==null?void 0:u.theme)||{})}),at=P(()=>{var t,F;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const u=((F=a.value.content)==null?void 0:F.paletteText)||Xe.value.paletteText;return tl(u)});function st(u){const t=Zn(u,{fallbackToDefault:!1});return t.length?el(t):""}function it(u){var F;if(((F=a.value)==null?void 0:F.type)!=="chart")return;const t=st(u);t&&(x({dataText:t}),te.value="")}async function He(u){var ve;const t=u.target,F=(ve=t==null?void 0:t.files)==null?void 0:ve[0];if(F)try{const Ee=await F.text();it(Ee)}finally{t&&(t.value="")}}function yt(){var u;(u=_e.value)==null||u.click()}function ut(){var t,F;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const u=st(((F=a.value.content)==null?void 0:F.dataText)||"");u&&x({dataText:u})}function xt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&x({...Xe.value})}function wt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&x({paletteText:Xe.value.paletteText})}function dt(u){return String(u||"").split(",").map(t=>t.trim()).filter(Boolean)}function kt(u){const t=(u==null?void 0:u.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((u==null?void 0:u.name)||"Imported Preset").trim()||"Imported Preset",category:String((u==null?void 0:u.category)||"").trim(),tags:Array.isArray(u==null?void 0:u.tags)?u.tags.map(F=>String(F).trim()).filter(Boolean):dt(u==null?void 0:u.tags),type:String((u==null?void 0:u.type)||"auto"),delay:Math.max(0,Number(u==null?void 0:u.delay)||0),duration:Math.max(.1,Number(u==null?void 0:u.duration)||.72),stepDelay:Math.max(0,Number(u==null?void 0:u.stepDelay)||0)}}const Ct=P(()=>[...new Set(G.value.map(t=>t.category).filter(Boolean))].sort((t,F)=>t.localeCompare(F))),$t=P(()=>[...G.value].filter(u=>Number(u.usageCount||0)>0).sort((u,t)=>{const F=Number(t.lastUsedAt||0)-Number(u.lastUsedAt||0);return F!==0?F:Number(t.usageCount||0)-Number(u.usageCount||0)}).slice(0,6)),St=P(()=>re.value==="all"?J.value:J.value.filter(u=>u.scope===re.value));function f(u){const t=he.value.trim().toLowerCase(),F=Re.value;return F==="all"||(u.category||"")===F?t?[u.name,u.category,...u.tags||[]].filter(Boolean).some(Ee=>String(Ee).toLowerCase().includes(t)):!0:!1}const w=P(()=>be.value.filter(f)),Q=P(()=>H.value.filter(f)),V=P(()=>$t.value.filter(u=>M.value==="group"?u.scope==="group":u.scope!=="group"));function Ie(u){const t=String(u.name||"").trim();if(!t)return;const F=G.value.findIndex(ze=>ze.scope===u.scope&&ze.name.toLowerCase()===t.toLowerCase()),ve={...u,id:F>=0?G.value[F].id:`motion-${Date.now()}`,name:t,category:String(u.category||"").trim(),tags:Array.isArray(u.tags)?u.tags:dt(u.tags)},Ee=[...G.value];F>=0?Ee.splice(F,1,ve):Ee.push(ve),Ne({motionPresets:Ee})}function Pe(u,t){const F=G.value.map(ve=>ve.id===u?{...ve,...t}:ve);Ne({motionPresets:F})}function Fe(u){const t=G.value.find(F=>F.id===u);t&&Pe(u,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function De(u,t){const F=G.value.filter(Ge=>Ge.scope===u).map(Ge=>Ge.name.toLowerCase()),ve=String(t||"Preset").trim()||"Preset";if(!F.includes(ve.toLowerCase()))return ve;let Ee=2,ze=`${ve} Copy`;for(;F.includes(ze.toLowerCase());)ze=`${ve} Copy ${Ee}`,Ee+=1;return ze}function se(u){Ne({motionPresets:G.value.filter(t=>t.id!==u)}),L.value===u&&(L.value="",B.value="")}function Ce(u){Ie({...u,id:void 0,name:De(u.scope,u.name)})}function Ke(u){L.value=u.id,B.value=u.name,de.value=u.category||"",ie.value=Array.isArray(u.tags)?u.tags.join(", "):""}function Ue(){L.value="",B.value="",de.value="",ie.value=""}function Be(u){const t=String(B.value||"").trim();t&&(Pe(u,{name:t,category:String(de.value||"").trim(),tags:dt(ie.value)}),Ue())}function Le(u,t,F){if(!t||!F||t===F)return;const ve=G.value.filter(ot=>ot.scope===u),Ee=ve.findIndex(ot=>ot.id===t),ze=ve.findIndex(ot=>ot.id===F);if(Ee===-1||ze===-1)return;const Ge=[...ve],[Oe]=Ge.splice(Ee,1);Ge.splice(ze,0,Oe);const mt=G.value.filter(ot=>ot.scope!==u),ht=[];G.value.forEach(ot=>{if(ot.scope===u){Ge.length&&ht.push(Ge.shift());return}const It=mt.shift();It&&ht.push(It)}),Ne({motionPresets:ht})}function tt(u){ee.value=u.id,me.value=u.id}function pt(u){ee.value&&(me.value=u.id)}function vt(u){ee.value&&(Le(u.scope,ee.value,u.id),ee.value="",me.value="")}function Tt(){ee.value="",me.value=""}function Nt(){O.value+=1}function d(){le.value+=1}function o(u,t){je({[u]:t})}function m(u){const t=Math.max(0,Number(u)||0);je({duration:t})}function z(u){var ve;if(!a.value)return;const F={...((ve=a.value.animations)==null?void 0:ve[0])||{type:"auto",delay:0,duration:.64},...u};if(F.type==="auto"){R({animations:[]});return}R({animations:[{type:F.type||"none",delay:Math.max(0,Number(F.delay)||0),duration:Math.max(.1,Number(F.duration)||.64)}]})}const g=_("stagger-in"),ne=_(0),$e=_(.12),Ve=_(.72);Je(T,u=>{u.length&&(g.value=p.value.type==="mixed"?"stagger-in":p.value.type,Ve.value=p.value.duration)},{immediate:!0,deep:!0});function E(){if(!T.value.length)return;[...T.value].sort((t,F)=>(t.y||0)!==(F.y||0)?(t.y||0)-(F.y||0):(t.x||0)-(F.x||0)).forEach((t,F)=>{if(g.value==="auto"){r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:g.value,delay:Math.max(0,Number(ne.value)||0)+F*Math.max(0,Number($e.value)||0),duration:Math.max(.1,Number(Ve.value)||.72)}]})})}function Ze(u){g.value=u.type||"stagger-in",ne.value=Number(u.delay||0),$e.value=Number(u.stepDelay||0),Ve.value=Number(u.duration||.72),Fe(u.id),d()}function bt(){Ie({scope:"group",name:we.value,category:U.value,tags:dt(Y.value),type:g.value,delay:Math.max(0,Number(ne.value)||0),stepDelay:Math.max(0,Number($e.value)||0),duration:Math.max(.1,Number(Ve.value)||.72)}),we.value="",U.value="",Y.value=""}function ft(u){z({type:u.type||"auto",delay:Number(u.delay||0),duration:Number(u.duration||.72)}),Fe(u.id),Nt()}function Nn(){Ie({scope:"single",name:Se.value,category:$.value,tags:dt(j.value),type:q.value.type,delay:Math.max(0,Number(q.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(q.value.duration)||.72)}),Se.value="",$.value="",j.value=""}function zn(){var u;(u=Te.value)==null||u.click()}async function Bn(u){var ve;const t=u.target,F=(ve=t==null?void 0:t.files)==null?void 0:ve[0];if(F)try{const Ee=await F.text(),ze=JSON.parse(Ee),Ge=Array.isArray(ze)?ze:Array.isArray(ze.motionPresets)?ze.motionPresets:[];if(!Ge.length)return;J.value=Ge.map(Oe=>({...kt(Oe),selected:!0,importName:String((Oe==null?void 0:Oe.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function Lt(){J.value=[]}function _n(){const u=J.value.filter(F=>F.selected);if(!u.length)return;const t=[...G.value];u.forEach(F=>{const ve=t.findIndex(Ee=>Ee.scope===F.scope&&Ee.name.toLowerCase()===F.name.toLowerCase());if(ve>=0){oe.value==="replace"?t.splice(ve,1,{...t[ve],...F,id:t[ve].id}):t.push({...F,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:De(F.scope,F.name)});return}t.push(F)}),Ne({motionPresets:t}),Lt()}function Ln(){var ze;if(!G.value.length)return;const u={version:1,exportedAt:new Date().toISOString(),motionPresets:G.value.map(({id:Ge,...Oe})=>Oe)},t=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),F=URL.createObjectURL(t),ve=document.createElement("a"),Ee=String(((ze=c.value)==null?void 0:ze.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";ve.href=F,ve.download=`${Ee}-motion-presets.json`,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve),URL.revokeObjectURL(F)}const jn=P(()=>[{id:`single-${O.value}`,delay:Math.max(0,Number(q.value.delay)||0),duration:Math.max(.1,Number(q.value.duration)||.72),type:q.value.type}]),Dn=P(()=>Array.from({length:Math.min(Math.max(T.value.length,3),5)},(u,t)=>({id:`group-${le.value}-${t}`,delay:Math.max(0,Number(ne.value)||0)+t*Math.max(0,Number($e.value)||0),duration:Math.max(.1,Number(Ve.value)||.72),type:g.value}))),jt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Dt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(u,t)=>{var F,ve,Ee,ze,Ge,Oe,mt,ht,ot,It,qt,Rt,Ft,Ut,Ot,Vt,Wt,Gt,Ht,Yt,Qt,Xt,Jt,Kt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,ho,yo,xo,wo,ko,Co,$o,So,Io,Ao,Mo,Eo,Po,To,No,zo,Bo,_o,Lo,jo,Do,qo,Ro,Fo,Uo,Oo,Vo,Wo,Go,Ho,Yo,Qo,Xo,Jo,Ko,Zo,en,tn,on,nn,ln,an,sn,rn,un,dn,cn,pn,vn,fn,mn,gn,bn,hn,yn;return l(),i("div",{ref_key:"panelRootRef",ref:Ae,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Te,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:Bn},null,544),e("input",{ref_key:"chartImportInput",ref:_e,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:He},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),C.value?(l(),Ye(ji,{key:0,"search-query":he.value,"category-filter":Re.value,"available-categories":Ct.value,"recent-presets":V.value,"pending-imported-presets":J.value,"filtered-pending-imports":St.value,"import-scope-filter":re.value,"import-conflict-mode":oe.value,"onUpdate:searchQuery":t[0]||(t[0]=n=>he.value=n),"onUpdate:categoryFilter":t[1]||(t[1]=n=>Re.value=n),onTriggerImport:zn,onExportPresets:Ln,onApplyPreset:t[2]||(t[2]=n=>M.value==="group"?Ze(n):ft(n)),onClearImports:Lt,"onUpdate:importScopeFilter":t[3]||(t[3]=n=>re.value=n),"onUpdate:importConflictMode":t[4]||(t[4]=n=>oe.value=n),onApplyImports:_n},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):W("",!0),I(s).multiSelection?(l(),i("div",Di,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",qi,k(T.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",Ri,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:d},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${le.value}`},[(l(!0),i(Z,null,pe(Dn.value,n=>(l(),i("span",{key:n.id,class:X(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:fe({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",Fi,[(l(),i(Z,null,pe(jt,n=>e("button",{key:`group-${n.value}`,type:"button",class:X(["motion-card",g.value===n.value&&"active"]),onClick:ae=>g.value=n.value},[e("span",Oi,[e("span",{class:X(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",Vi)):W("",!0),n.value==="stagger-in"?(l(),i("span",Wi)):W("",!0)]),e("span",Gi,k(n.label),1)],10,Ui)),64))]),e("div",Hi,[e("div",Yi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),ce(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=n=>ne.value=n),class:"input"},null,512),[[ke,ne.value]])]),e("div",Qi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),ce(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=n=>$e.value=n),class:"input"},null,512),[[ke,$e.value]])])]),e("div",Xi,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),ce(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=n=>Ve.value=n),class:"input"},null,512),[[ke,Ve.value]])]),e("div",Ji,[ce(e("input",{"onUpdate:modelValue":t[8]||(t[8]=n=>we.value=n),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[ke,we.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:bt},"Save")]),e("div",Ki,[ce(e("input",{"onUpdate:modelValue":t[9]||(t[9]=n=>U.value=n),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[ke,U.value]]),ce(e("input",{"onUpdate:modelValue":t[10]||(t[10]=n=>Y.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,Y.value]])]),Q.value.length?(l(),i("div",Zi,[(l(!0),i(Z,null,pe(Q.value,n=>(l(),i("div",{key:n.id,class:X(["preset-item",ee.value===n.id&&"dragging",me.value===n.id&&ee.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:ae=>tt(n),onDragenter:qe(ae=>pt(n),["prevent"]),onDragover:t[14]||(t[14]=qe(()=>{},["prevent"])),onDrop:qe(ae=>vt(n),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:ae=>Ze(n)},k(n.name),9,ta),n.category?(l(),i("span",oa,k(n.category),1)):W("",!0),(l(!0),i(Z,null,pe(n.tags||[],ae=>(l(),i("span",{key:`${n.id}-${ae}`,class:"preset-meta-chip muted"},"#"+k(ae),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:ae=>Ce(n)},"Duplicate",8,na),e("button",{type:"button",class:"preset-mini-btn",onClick:ae=>Ke(n)},"Rename",8,la),e("button",{type:"button",class:"preset-mini-btn danger",onClick:ae=>se(n.id)},"Delete",8,ia),L.value===n.id?(l(),i("div",aa,[ce(e("input",{"onUpdate:modelValue":t[11]||(t[11]=ae=>B.value=ae),class:"input"},null,512),[[ke,B.value]]),ce(e("input",{"onUpdate:modelValue":t[12]||(t[12]=ae=>de.value=ae),class:"input",placeholder:"Category"},null,512),[[ke,de.value]]),ce(e("input",{"onUpdate:modelValue":t[13]||(t[13]=ae=>ie.value=ae),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,ie.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ae=>Be(n.id)},"Save",8,sa),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ue},"Cancel")])):W("",!0)],42,ea))),128))])):H.value.length?(l(),i("div",ra,"No group presets match the current search.")):W("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:E}," Apply Sequence to Selection ")])):a.value?(l(),i(Z,{key:3},[e("div",{class:X(["panel-section",ye.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",es,[t[179]||(t[179]=K(" Position & Size ",-1)),e("span",ts,k(a.value.type),1)]),e("div",os,[e("div",ns,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=n=>xe("x",n.target.value))},null,40,ls)]),e("div",is,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=n=>xe("y",n.target.value))},null,40,as)]),e("div",ss,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=n=>xe("width",n.target.value))},null,40,rs)]),e("div",us,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=n=>xe("height",n.target.value))},null,40,ds)]),e("div",cs,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=n=>xe("rotation",n.target.value))},null,40,ps)]),e("div",vs,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=n=>xe("opacity",n.target.value))},null,40,fs)])])],2),e("div",{class:X(["panel-section",ye.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",ms,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Nt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${O.value}`},[(l(!0),i(Z,null,pe(jn.value,n=>(l(),i("span",{key:n.id,class:X(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:fe({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",gs,[(l(),i(Z,null,pe(jt,n=>e("button",{key:n.value,type:"button",class:X(["motion-card",q.value.type===n.value&&"active"]),onClick:ae=>z({type:n.value})},[e("span",hs,[e("span",{class:X(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",ys)):W("",!0),n.value==="stagger-in"?(l(),i("span",xs)):W("",!0)]),e("span",ws,k(n.label),1)],10,bs)),64))]),e("div",ks,[e("div",Cs,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:q.value.delay,class:"input",onChange:t[45]||(t[45]=n=>z({delay:n.target.value}))},null,40,$s)]),e("div",Ss,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:q.value.duration,class:"input",onChange:t[46]||(t[46]=n=>z({duration:n.target.value}))},null,40,Is)])]),e("div",As,[ce(e("input",{"onUpdate:modelValue":t[47]||(t[47]=n=>Se.value=n),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[ke,Se.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Nn},"Save")]),e("div",Ms,[ce(e("input",{"onUpdate:modelValue":t[48]||(t[48]=n=>$.value=n),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[ke,$.value]]),ce(e("input",{"onUpdate:modelValue":t[49]||(t[49]=n=>j.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,j.value]])]),w.value.length?(l(),i("div",Es,[(l(!0),i(Z,null,pe(w.value,n=>(l(),i("div",{key:n.id,class:X(["preset-item",ee.value===n.id&&"dragging",me.value===n.id&&ee.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:ae=>tt(n),onDragenter:qe(ae=>pt(n),["prevent"]),onDragover:t[53]||(t[53]=qe(()=>{},["prevent"])),onDrop:qe(ae=>vt(n),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:ae=>ft(n)},k(n.name),9,Ts),n.category?(l(),i("span",Ns,k(n.category),1)):W("",!0),(l(!0),i(Z,null,pe(n.tags||[],ae=>(l(),i("span",{key:`${n.id}-${ae}`,class:"preset-meta-chip muted"},"#"+k(ae),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:ae=>Ce(n)},"Duplicate",8,zs),e("button",{type:"button",class:"preset-mini-btn",onClick:ae=>Ke(n)},"Rename",8,Bs),e("button",{type:"button",class:"preset-mini-btn danger",onClick:ae=>se(n.id)},"Delete",8,_s),L.value===n.id?(l(),i("div",Ls,[ce(e("input",{"onUpdate:modelValue":t[50]||(t[50]=ae=>B.value=ae),class:"input"},null,512),[[ke,B.value]]),ce(e("input",{"onUpdate:modelValue":t[51]||(t[51]=ae=>de.value=ae),class:"input",placeholder:"Category"},null,512),[[ke,de.value]]),ce(e("input",{"onUpdate:modelValue":t[52]||(t[52]=ae=>ie.value=ae),class:"input",placeholder:"Tags, comma separated"},null,512),[[ke,ie.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ae=>Be(n.id)},"Save",8,js),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ue},"Cancel")])):W("",!0)],42,Ps))),128))])):be.value.length?(l(),i("div",Ds,"No single-element presets match the current search.")):W("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:X(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",qs,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(ht=a.value.content)==null?void 0:ht.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=n=>x({text:n.target.value}))},null,40,Rs)]),e("div",Fs,[e("div",Us,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(ot=a.value.content)==null?void 0:ot.fontSize,class:"input",onChange:t[55]||(t[55]=n=>x({fontSize:+n.target.value}))},null,40,Os)]),e("div",Vs,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(It=a.value.content)==null?void 0:It.fontWeight,class:"select",onChange:t[56]||(t[56]=n=>x({fontWeight:n.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Ws)])]),e("div",Gs,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(qt=a.value.content)==null?void 0:qt.fontFamily,class:"select",onChange:t[57]||(t[57]=n=>x({fontFamily:n.target.value}))},[(l(),i(Z,null,pe(Dt,n=>e("option",{key:n,value:n},k(n.split(",")[0]),9,Ys)),64))],40,Hs)]),e("div",Qs,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",Xs,[(l(),i(Z,null,pe(["left","center","right","justify"],n=>{var ae;return e("button",{key:n,class:X(["align-btn",((ae=a.value.content)==null?void 0:ae.textAlign)===n&&"active"]),onClick:xn=>x({textAlign:n})},k(n[0].toUpperCase()),11,Js)}),64))])]),e("div",Ks,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",Zs,[e("button",{class:X(["style-btn",((Rt=a.value.content)==null?void 0:Rt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=n=>{var ae;return x({fontStyle:((ae=a.value.content)==null?void 0:ae.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:X(["style-btn",((Ft=a.value.content)==null?void 0:Ft.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=n=>{var ae;return x({textDecoration:((ae=a.value.content)==null?void 0:ae.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:X(["style-btn",((Ut=a.value.content)==null?void 0:Ut.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=n=>{var ae;return x({textDecoration:((ae=a.value.content)==null?void 0:ae.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",er,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",tr,[e("input",{type:"color",value:((Ot=a.value.content)==null?void 0:Ot.color)||"#000",onInput:t[61]||(t[61]=n=>x({color:n.target.value})),class:"color-input-native"},null,40,or),e("input",{value:((Vt=a.value.content)==null?void 0:Vt.color)||"#000",class:"input",onInput:t[62]||(t[62]=n=>x({color:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,nr)])]),e("div",lr,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Wt=a.value.content)==null?void 0:Wt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=n=>x({lineHeight:+n.target.value}))},null,40,ir)]),e("div",ar,[e("div",sr,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Gt=a.value.content)==null?void 0:Gt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=n=>x({textTransform:n.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,rr)]),e("div",ur,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Ht=a.value.content)==null?void 0:Ht.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=n=>x({letterSpacing:+n.target.value}))},null,40,dr)])])],2)):W("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:X(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",cr,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Yt=a.value.content)==null?void 0:Yt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=n=>x({src:n.target.value}))},null,40,pr)]),e("div",vr,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Qt=a.value.content)==null?void 0:Qt.alt,class:"input",onInput:t[67]||(t[67]=n=>x({alt:n.target.value}))},null,40,fr)]),e("div",mr,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Xt=a.value.content)==null?void 0:Xt.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=n=>x({objectFit:n.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,gr)]),e("div",br,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((Jt=a.value.content)==null?void 0:Jt.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=n=>x({borderRadius:+n.target.value}))},null,40,hr)]),e("div",yr,[e("div",xr,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Kt=a.value.content)==null?void 0:Kt.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=n=>x({borderWidth:+n.target.value}))},null,40,wr)]),e("div",kr,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Zt=a.value.content)==null?void 0:Zt.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=n=>x({borderColor:n.target.value}))},null,40,Cr)])])],2)):W("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:X(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",$r,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((eo=a.value.content)==null?void 0:eo.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=n=>x({shapeType:n.target.value}))},[...t[215]||(t[215]=[et('<option value="rectangle" data-v-1d3dcef4>Rectangle</option><option value="circle" data-v-1d3dcef4>Circle</option><option value="triangle" data-v-1d3dcef4>Triangle</option><option value="star" data-v-1d3dcef4>Star</option><option value="arrow" data-v-1d3dcef4>Arrow</option><option value="diamond" data-v-1d3dcef4>Diamond</option>',6)])],40,Sr)]),e("div",Ir,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Ar,[e("input",{type:"color",value:((to=a.value.content)==null?void 0:to.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=n=>x({fillColor:n.target.value})),class:"color-input-native"},null,40,Mr),e("input",{value:((oo=a.value.content)==null?void 0:oo.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=n=>x({fillColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Er)])]),e("div",Pr,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Tr,[e("input",{type:"color",value:((no=a.value.content)==null?void 0:no.borderColor)||"transparent",onInput:t[75]||(t[75]=n=>x({borderColor:n.target.value})),class:"color-input-native"},null,40,Nr),e("input",{value:((lo=a.value.content)==null?void 0:lo.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=n=>x({borderColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,zr)])]),e("div",Br,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((io=a.value.content)==null?void 0:io.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=n=>x({borderWidth:+n.target.value}))},null,40,_r)]),e("div",Lr,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((ao=a.value.content)==null?void 0:ao.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=n=>x({borderRadius:+n.target.value}))},null,40,jr)]),e("div",Dr,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((so=a.value.content)==null?void 0:so.opacity)??1,class:"input",onChange:t[79]||(t[79]=n=>x({opacity:+n.target.value}))},null,40,qr)])],2)):W("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:X(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",Rr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((ro=a.value.content)==null?void 0:ro.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=n=>x({chartType:n.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Fr)]),e("div",Ur,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((uo=a.value.content)==null?void 0:uo.title)||"",class:"input",onInput:t[81]||(t[81]=n=>x({title:n.target.value}))},null,40,Or)]),e("div",Vr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((co=a.value.content)==null?void 0:co.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=n=>x({dataText:n.target.value}))},null,40,Wr),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ut},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:yt},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",Gr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),ce(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=n=>te.value=n),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[ke,te.value]]),e("div",Hr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=n=>it(te.value))},"Convert pasted data")])]),e("div",Yr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((po=a.value.content)==null?void 0:po.paletteText)||"",class:"input",placeholder:Xe.value.paletteText,onInput:t[85]||(t[85]=n=>x({paletteText:n.target.value}))},null,40,Qr),e("div",Xr,[(l(!0),i(Z,null,pe(at.value,(n,ae)=>(l(),i("span",{key:`chart-palette-${ae}`,class:"chart-palette-swatch",style:fe({background:n})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:wt},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:xt},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Jr,[e("div",Kr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((vo=a.value.content)==null?void 0:vo.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=n=>x({backgroundColor:n.target.value}))},null,40,Zr)]),e("div",eu,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((fo=a.value.content)==null?void 0:fo.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=n=>x({textColor:n.target.value}))},null,40,tu)])]),e("div",ou,[e("div",nu,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((mo=a.value.content)==null?void 0:mo.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=n=>x({gridColor:n.target.value}))},null,40,lu)]),e("div",iu,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((go=a.value.content)==null?void 0:go.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=n=>x({borderColor:n.target.value}))},null,40,au)])]),e("div",su,[e("div",ru,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((bo=a.value.content)==null?void 0:bo.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=n=>x({borderWidth:+n.target.value}))},null,40,uu)]),((ho=a.value.content)==null?void 0:ho.chartType)!=="circle"?(l(),i("div",du,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((yo=a.value.content)==null?void 0:yo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=n=>x({maxValue:n.target.value}))},null,40,cu)])):(l(),i("div",pu,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((xo=a.value.content)==null?void 0:xo.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=n=>x({innerRadius:+n.target.value}))},null,40,vu)]))]),((wo=a.value.content)==null?void 0:wo.chartType)==="line"?(l(),i("div",fu,[e("div",mu,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((ko=a.value.content)==null?void 0:ko.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=n=>x({strokeWidth:+n.target.value}))},null,40,gu)]),e("label",bu,[e("input",{type:"checkbox",checked:!!((Co=a.value.content)!=null&&Co.showArea),onChange:t[94]||(t[94]=n=>x({showArea:n.target.checked}))},null,40,hu),t[239]||(t[239]=K(" Show area fill ",-1))])])):W("",!0),e("label",yu,[e("input",{type:"checkbox",checked:(($o=a.value.content)==null?void 0:$o.showLegend)!==!1,onChange:t[95]||(t[95]=n=>x({showLegend:n.target.checked}))},null,40,xu),t[240]||(t[240]=K(" Show legend ",-1))]),((So=a.value.content)==null?void 0:So.chartType)!=="circle"?(l(),i("label",wu,[e("input",{type:"checkbox",checked:((Io=a.value.content)==null?void 0:Io.showGrid)!==!1,onChange:t[96]||(t[96]=n=>x({showGrid:n.target.checked}))},null,40,ku),t[241]||(t[241]=K(" Show grid lines ",-1))])):W("",!0),e("label",Cu,[e("input",{type:"checkbox",checked:((Ao=a.value.content)==null?void 0:Ao.showValues)!==!1,onChange:t[97]||(t[97]=n=>x({showValues:n.target.checked}))},null,40,$u),t[242]||(t[242]=K(" Show values ",-1))])],2)):W("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:X(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Su,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Mo=a.value.content)==null?void 0:Mo.label,class:"input",onInput:t[98]||(t[98]=n=>x({label:n.target.value}))},null,40,Iu)]),e("div",Au,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Eo=a.value.content)==null?void 0:Eo.variant)||"primary",class:"select",onChange:t[99]||(t[99]=n=>x({variant:n.target.value}))},[...t[245]||(t[245]=[et('<option value="primary" data-v-1d3dcef4>Primary</option><option value="secondary" data-v-1d3dcef4>Secondary</option><option value="outline" data-v-1d3dcef4>Outline</option><option value="ghost" data-v-1d3dcef4>Ghost</option><option value="danger" data-v-1d3dcef4>Danger</option>',5)])],40,Mu)]),e("div",Eu,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Po=a.value.content)==null?void 0:Po.action)||"none",class:"select",onChange:t[100]||(t[100]=n=>x({action:n.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Pu)]),(To=a.value.content)!=null&&To.action&&a.value.content.action!=="none"?(l(),i("div",Tu,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(No=a.value.content)==null?void 0:No.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=n=>x({target:n.target.value}))},null,40,Nu)])):W("",!0),e("div",zu,[e("div",Bu,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((zo=a.value.content)==null?void 0:zo.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=n=>x({bgColor:n.target.value}))},null,40,_u)]),e("div",Lu,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Bo=a.value.content)==null?void 0:Bo.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=n=>x({textColor:n.target.value}))},null,40,ju)])]),e("div",Du,[e("div",qu,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((_o=a.value.content)==null?void 0:_o.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=n=>x({borderColor:n.target.value}))},null,40,Ru)]),e("div",Fu,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Lo=a.value.content)==null?void 0:Lo.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=n=>x({borderRadius:+n.target.value}))},null,40,Uu)])]),e("div",Ou,[e("div",Vu,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((jo=a.value.content)==null?void 0:jo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=n=>x({fontSize:+n.target.value}))},null,40,Wu)]),e("div",Gu,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Do=a.value.content)==null?void 0:Do.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=n=>x({fontWeight:+n.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Hu)])]),e("div",Yu,[e("div",Qu,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((qo=a.value.content)==null?void 0:qo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=n=>x({fontFamily:n.target.value}))},[(l(),i(Z,null,pe(Dt,n=>e("option",{key:`btn-${n}`,value:n},k(n.split(",")[0]),9,Ju)),64))],40,Xu)]),e("div",Ku,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Ro=a.value.content)==null?void 0:Ro.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=n=>x({letterSpacing:+n.target.value}))},null,40,Zu)])])],2)):W("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:X(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",ed,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Fo=a.value.content)==null?void 0:Fo.icon)||"?",class:"select",onChange:t[110]||(t[110]=n=>x({icon:n.target.value}))},[...t[260]||(t[260]=[et('<option value="?" data-v-1d3dcef4>? (Info)</option><option value="!" data-v-1d3dcef4>! (Alert)</option><option value="+" data-v-1d3dcef4>+ (Plus)</option><option value="i" data-v-1d3dcef4>i (Info)</option><option value="✦" data-v-1d3dcef4>✦ (Star)</option>',5)])],40,td)]),e("div",od,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",nd,[e("input",{type:"color",value:((Uo=a.value.content)==null?void 0:Uo.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=n=>x({bgColor:n.target.value})),class:"color-input-native"},null,40,ld),e("input",{value:((Oo=a.value.content)==null?void 0:Oo.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=n=>x({bgColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,id)])]),e("div",ad,[e("div",sd,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Vo=a.value.content)==null?void 0:Vo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=n=>x({iconColor:n.target.value}))},null,40,rd)]),e("div",ud,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Wo=a.value.content)==null?void 0:Wo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=n=>x({borderRadius:+n.target.value}))},null,40,dd)])]),e("div",cd,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Go=a.value.content)==null?void 0:Go.popupTitle,class:"input",onInput:t[115]||(t[115]=n=>x({popupTitle:n.target.value}))},null,40,pd)]),e("div",vd,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Ho=a.value.content)==null?void 0:Ho.popupContent,class:"textarea",onInput:t[116]||(t[116]=n=>x({popupContent:n.target.value}))},null,40,fd)]),e("div",md,[e("div",gd,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Yo=a.value.content)==null?void 0:Yo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=n=>x({popupBgColor:n.target.value}))},null,40,bd)]),e("div",hd,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Qo=a.value.content)==null?void 0:Qo.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=n=>x({popupTextColor:n.target.value}))},null,40,yd)])])],2)):W("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:X(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",xd,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Xo=a.value.content)==null?void 0:Xo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=n=>x({src:n.target.value}))},null,40,wd)]),e("div",kd,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(Jo=a.value.content)==null?void 0:Jo.poster,class:"input",onInput:t[120]||(t[120]=n=>x({poster:n.target.value}))},null,40,Cd)]),e("div",$d,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Ko=a.value.content)==null?void 0:Ko.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=n=>x({objectFit:n.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Sd)]),e("label",Id,[e("input",{type:"checkbox",checked:(Zo=a.value.content)==null?void 0:Zo.autoplay,onChange:t[122]||(t[122]=n=>x({autoplay:n.target.checked}))},null,40,Ad),t[274]||(t[274]=K(" Autoplay ",-1))]),e("label",Md,[e("input",{type:"checkbox",checked:((en=a.value.content)==null?void 0:en.controls)??!0,onChange:t[123]||(t[123]=n=>x({controls:n.target.checked}))},null,40,Ed),t[275]||(t[275]=K(" Show Controls ",-1))]),e("label",Pd,[e("input",{type:"checkbox",checked:(tn=a.value.content)==null?void 0:tn.loop,onChange:t[124]||(t[124]=n=>x({loop:n.target.checked}))},null,40,Td),t[276]||(t[276]=K(" Loop ",-1))]),e("label",Nd,[e("input",{type:"checkbox",checked:(on=a.value.content)==null?void 0:on.muted,onChange:t[125]||(t[125]=n=>x({muted:n.target.checked}))},null,40,zd),t[277]||(t[277]=K(" Muted ",-1))])],2)):W("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:X(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",Bd,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(nn=a.value.content)==null?void 0:nn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=n=>x({src:n.target.value}))},null,40,_d)]),e("div",Ld,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(ln=a.value.content)==null?void 0:ln.label,class:"input",onInput:t[127]||(t[127]=n=>x({label:n.target.value}))},null,40,jd)]),e("label",Dd,[e("input",{type:"checkbox",checked:(an=a.value.content)==null?void 0:an.autoplay,onChange:t[128]||(t[128]=n=>x({autoplay:n.target.checked}))},null,40,qd),t[281]||(t[281]=K(" Autoplay ",-1))]),e("label",Rd,[e("input",{type:"checkbox",checked:((sn=a.value.content)==null?void 0:sn.controls)!==!1,onChange:t[129]||(t[129]=n=>x({controls:n.target.checked}))},null,40,Fd),t[282]||(t[282]=K(" Show Controls ",-1))]),e("label",Ud,[e("input",{type:"checkbox",checked:(rn=a.value.content)==null?void 0:rn.loop,onChange:t[130]||(t[130]=n=>x({loop:n.target.checked}))},null,40,Od),t[283]||(t[283]=K(" Loop ",-1))]),e("div",Vd,[e("div",Wd,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((un=a.value.content)==null?void 0:un.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=n=>x({accentColor:n.target.value}))},null,40,Gd)]),e("div",Hd,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((dn=a.value.content)==null?void 0:dn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=n=>x({textColor:n.target.value}))},null,40,Yd)])]),e("div",Qd,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((cn=a.value.content)==null?void 0:cn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=n=>x({bgColor:n.target.value}))},null,40,Xd)])],2)):W("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:X(["panel-section",ye.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Jd,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(pn=a.value.content)==null?void 0:pn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=n=>x({question:n.target.value}))},null,40,Kd)]),e("div",Zd,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(fn=(vn=a.value.content)==null?void 0:vn.options)==null?void 0:fn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=n=>x({options:n.target.value.split(`
`).filter(Boolean)}))},null,40,ec)]),e("div",tc,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((mn=a.value.content)==null?void 0:mn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=n=>x({correctIndex:+n.target.value}))},null,40,oc)]),e("div",nc,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(gn=a.value.content)==null?void 0:gn.explanation,class:"textarea",onInput:t[137]||(t[137]=n=>x({explanation:n.target.value}))},null,40,lc)]),e("div",ic,[e("div",ac,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((bn=a.value.content)==null?void 0:bn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=n=>x({cardBgColor:n.target.value}))},null,40,sc)]),e("div",rc,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((hn=a.value.content)==null?void 0:hn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=n=>x({questionColor:n.target.value}))},null,40,uc)])]),e("div",dc,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((yn=a.value.content)==null?void 0:yn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=n=>x({accentColor:n.target.value}))},null,40,cc)])],2)):W("",!0),e("div",pc,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",vc,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=n=>I(r).duplicateElement(I(s).projectId,I(s).currentSlideId,a.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),K(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=n=>{I(s).showInteractionEditor=!0,I(s).interactionElementId=a.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),K(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=n=>{I(r).deleteElement(I(s).projectId,I(s).currentSlideId,a.value.id),I(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),K(" Delete Element ",-1)])])])])],64)):(l(),i("div",ua,[e("div",da,[e("button",{type:"button",class:X(["slide-settings-tab",ue.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=n=>ue.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:X(["slide-settings-tab",ue.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=n=>ue.value="transitions")},[...t[150]||(t[150]=[et('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-1d3dcef4><path d="M5 7h5" data-v-1d3dcef4></path><path d="M5 12h10" data-v-1d3dcef4></path><path d="M5 17h14" data-v-1d3dcef4></path><path d="M14 7l5 5-5 5" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Transitions</span>',2)])],2),e("button",{type:"button",class:X(["slide-settings-tab",ue.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=n=>ue.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),ue.value==="canvas"?(l(),i("div",ca,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",pa,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),ce(e("input",{"onUpdate:modelValue":t[18]||(t[18]=n=>Me.value.title=n),class:"input",onInput:t[19]||(t[19]=n=>o("title",Me.value.title))},null,544),[[ke,Me.value.title]])]),e("div",va,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",fa,[(l(),i(Z,null,pe(["color","gradient","image"],n=>{var ae;return e("button",{key:n,class:X(["bg-type-btn",(((ae=v.value)==null?void 0:ae.backgroundType)||"color")===n&&"active"]),onClick:xn=>je({backgroundType:n})},k(n),11,ma)}),64))]),(((F=v.value)==null?void 0:F.backgroundType)||"color")==="color"?(l(),i("div",ga,[e("input",{type:"color",value:((ve=v.value)==null?void 0:ve.background)||"#ffffff",onInput:t[20]||(t[20]=n=>je({background:n.target.value})),class:"color-input-native"},null,40,ba),e("input",{value:((Ee=v.value)==null?void 0:Ee.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=n=>je({background:n.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,ha)])):((ze=v.value)==null?void 0:ze.backgroundType)==="gradient"?ce((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=n=>Me.value.backgroundGradient=n),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=n=>je({backgroundGradient:Me.value.backgroundGradient}))},null,544)),[[ke,Me.value.backgroundGradient]]):ce((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=n=>Me.value.backgroundImage=n),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=n=>je({backgroundImage:Me.value.backgroundImage}))},null,544)),[[ke,Me.value.backgroundImage]])]),e("div",ya,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",xa,[(l(!0),i(Z,null,pe(I(Jn),n=>{var ae;return l(),i("button",{key:n.id,type:"button",class:X(["canvas-size-card",((ae=b.value)==null?void 0:ae.id)===n.id&&"active"]),onClick:xn=>We(n)},[e("span",ka,[e("span",{class:X(["canvas-size-thumb",`canvas-size-thumb-${n.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Ca,k(n.label),1),e("span",$a,k(n.ratioLabel),1)],10,wa)}),128))]),e("div",Sa,[e("div",Ia,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Aa,"Current ratio "+k(D.value),1)]),e("div",Ma,[e("div",Ea,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Pa,[e("input",{type:"number",min:"320",max:"4096",value:y.value.width,class:"input",onChange:t[26]||(t[26]=n=>ct("width",n.target.value))},null,40,Ta),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Na,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",za,[e("input",{type:"number",min:"320",max:"4096",value:y.value.height,class:"input",onChange:t[27]||(t[27]=n=>ct("height",n.target.value))},null,40,Ba),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",_a,[ce(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=n=>ge.value=n)},null,512),[[Et,ge.value]]),t[161]||(t[161]=K(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=et('<div class="canvas-size-callout" data-v-1d3dcef4><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1d3dcef4><circle cx="12" cy="12" r="9" data-v-1d3dcef4></circle><path d="M12 10v6" data-v-1d3dcef4></path><path d="M12 7h.01" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",La,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),ce(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=n=>Me.value.notes=n),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=n=>o("notes",Me.value.notes))},null,544),[[ke,Me.value.notes]])])])):ue.value==="transitions"?(l(),i("div",ja,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((Ge=v.value)==null?void 0:Ge.transition)||"none",class:"select",onChange:t[31]||(t[31]=n=>je({transition:n.target.value}))},[...t[167]||(t[167]=[et('<option value="none" data-v-1d3dcef4>None</option><option value="fade" data-v-1d3dcef4>Fade</option><option value="slide" data-v-1d3dcef4>Slide</option><option value="zoom" data-v-1d3dcef4>Zoom</option><option value="flip" data-v-1d3dcef4>Flip</option>',5)])],40,Da),e("div",qa,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Oe=v.value)==null?void 0:Oe.duration)??0,class:"input",onChange:t[32]||(t[32]=n=>m(n.target.value))},null,40,Ra),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Fa,[e("input",{type:"checkbox",checked:!!((mt=v.value)!=null&&mt.advanceOnMediaEnd),onChange:t[33]||(t[33]=n=>je({advanceOnMediaEnd:n.target.checked}))},null,40,Ua),t[170]||(t[170]=K(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",Oa,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",Va,[e("input",{type:"checkbox",checked:h.value.autoPlay,onChange:t[34]||(t[34]=n=>Ne({autoPlay:n.target.checked}))},null,40,Wa),t[173]||(t[173]=K(" Autoplay preview and exported presentation ",-1))]),e("label",Ga,[e("input",{type:"checkbox",checked:h.value.loop,onChange:t[35]||(t[35]=n=>Ne({loop:n.target.checked}))},null,40,Ha),t[174]||(t[174]=K(" Loop back to the first slide at the end ",-1))]),e("label",Ya,[e("input",{type:"checkbox",checked:h.value.showProgress,onChange:t[36]||(t[36]=n=>Ne({showProgress:n.target.checked}))},null,40,Qa),t[175]||(t[175]=K(" Show progress bar in preview ",-1))]),e("label",Xa,[e("input",{type:"checkbox",checked:h.value.showNavControls,onChange:t[37]||(t[37]=n=>Ne({showNavControls:n.target.checked}))},null,40,Ja),t[176]||(t[176]=K(" Show previous/next and dot navigation ",-1))]),e("label",Ka,[e("input",{type:"checkbox",checked:h.value.allowKeyboardNav,onChange:t[38]||(t[38]=n=>Ne({allowKeyboardNav:n.target.checked}))},null,40,Za),t[177]||(t[177]=K(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},mc=Qe(fc,[["__scopeId","data-v-1d3dcef4"]]),gc={class:"editor-toolbar"},bc={class:"toolbar-group"},hc={class:"toolbar-group"},yc=["data-tooltip","onClick"],xc={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wc={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kc={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Cc={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$c={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Sc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ic={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ac={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Mc={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ec={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Pc={class:"tool-label"},Tc={class:"toolbar-group"},Nc={class:"toolbar-group"},zc={class:"toolbar-group"},Bc={__name:"EditorToolbar",emits:["open-ai-project"],setup(S,{emit:s}){const r=s,c=nt();lt();const v=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function h(y){c.setActiveTool(y)}return(y,b)=>(l(),i("div",gc,[e("div",bc,[e("button",{class:X(["tool-btn",I(c).activeTool==="select"&&"active"]),onClick:b[0]||(b[0]=D=>h("select")),"data-tooltip":"Select (V)"},[...b[7]||(b[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),b[23]||(b[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",hc,[(l(),i(Z,null,pe(v,D=>e("button",{key:D.id,class:X(["tool-btn",I(c).activeTool===D.id&&"active"]),"data-tooltip":D.tooltip,onClick:ge=>h(D.id)},[D.icon==="text"?(l(),i("svg",xc,[...b[8]||(b[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):D.icon==="heading"?(l(),i("svg",wc,[...b[9]||(b[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):D.icon==="image"?(l(),i("svg",kc,[...b[10]||(b[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):D.icon==="shape"?(l(),i("svg",Cc,[...b[11]||(b[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):D.icon==="button"?(l(),i("svg",$c,[...b[12]||(b[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):D.icon==="hotspot"?(l(),i("svg",Sc,[...b[13]||(b[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):D.icon==="video"?(l(),i("svg",Ic,[...b[14]||(b[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):D.icon==="audio"?(l(),i("svg",Ac,[...b[15]||(b[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):D.icon==="quiz"?(l(),i("svg",Mc,[...b[16]||(b[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):D.icon==="chart"?(l(),i("svg",Ec,[...b[17]||(b[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):W("",!0),e("span",Pc,k(D.label),1)],10,yc)),64))]),b[24]||(b[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Tc,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:b[1]||(b[1]=D=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...b[18]||(b[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),b[25]||(b[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Nc,[e("button",{class:"tool-btn",onClick:b[2]||(b[2]=D=>I(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...b[19]||(b[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:b[3]||(b[3]=D=>I(c).zoomReset())},k(Math.round(I(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:b[4]||(b[4]=D=>I(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...b[20]||(b[20]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),b[26]||(b[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",zc,[e("button",{class:X(["tool-btn",I(c).showGrid&&"active"]),onClick:b[5]||(b[5]=D=>I(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...b[21]||(b[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:X(["tool-btn",I(c).snapToGrid&&"active"]),onClick:b[6]||(b[6]=D=>I(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...b[22]||(b[22]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},_c=Qe(Bc,[["__scopeId","data-v-d964cc0f"]]),Lc=["onMousedown"],jc={key:1,class:"selection-border locked-border"},Dc={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=nt(),c=lt(),v=qn("canvasScale",_(1)),h=P(()=>r.projectId),y=P(()=>r.currentSlideId),b=P(()=>r.selectedElementIds.includes(s.element.id)),D=P(()=>s.element.locked),ge=P(()=>s.element.visible!==!1),ue=P(()=>{const J=s.element.content||{};return!!(J.text||J.label||J.question||J.popupTitle||J.popupContent)});let G=!1,be=0,H=0,T=new Map;function a(J){if(!r.snapToGrid||!r.gridSize)return J;const re=r.gridSize;return Math.round(J/re)*re}function C(J){var te;if(D.value||J.target.classList.contains("resize-handle"))return;const re=J.ctrlKey||J.metaKey||J.shiftKey;b.value?re&&r.selectElement(s.element.id,!0):r.selectElement(s.element.id,re),r.setActiveTool("select"),G=!1,be=J.clientX,H=J.clientY,T.clear();const oe=(te=c.getProject(h.value))==null?void 0:te.slides.find(Ae=>Ae.id===y.value);oe&&r.selectedElementIds.forEach(Ae=>{const ye=oe.elements.find(N=>N.id===Ae);ye&&!ye.locked&&T.set(Ae,{x:ye.x,y:ye.y})}),window.addEventListener("mousemove",M),window.addEventListener("mouseup",q),J.stopPropagation()}function M(J){const re=(J.clientX-be)/v.value,oe=(J.clientY-H)/v.value;!G&&(Math.abs(re)>3||Math.abs(oe)>3)&&(G=!0),G&&T.forEach((te,Ae)=>{const ye=te.x+re,N=te.y+oe;c.updateElement(h.value,y.value,Ae,{x:ye,y:N},{persist:!1})})}function q(J){if(G){const re=(J.clientX-be)/v.value,oe=(J.clientY-H)/v.value;T.forEach((te,Ae)=>{c.updateElement(h.value,y.value,Ae,{x:a(te.x+re),y:a(te.y+oe)},{persist:!1})}),c.commitProject(h.value)}G||!(J.ctrlKey||J.metaKey||J.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(s.element.id,!1),G=!1,window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",q)}const p=["n","ne","e","se","s","sw","w","nw"];let O=!1,le="",Se=0,we=0,L=0,B=0,de=0,ie=0;function ee(J,re){D.value||(J.stopPropagation(),J.preventDefault(),O=!0,le=re,Se=J.clientX,we=J.clientY,L=s.element.width,B=s.element.height,de=s.element.x,ie=s.element.y,window.addEventListener("mousemove",me),window.addEventListener("mouseup",$))}function me(J){if(!O)return;const re=v.value,oe=(J.clientX-Se)/re,te=(J.clientY-we)/re,Ae=20;let ye=de,N=ie,A=L,R=B;if(le.includes("e")&&(A=Math.max(Ae,L+oe)),le.includes("s")&&(R=Math.max(Ae,B+te)),le.includes("w")){const x=Math.max(Ae,L-oe);ye=de+(L-x),A=x}if(le.includes("n")){const x=Math.max(Ae,B-te);N=ie+(B-x),R=x}if(r.snapToGrid&&r.gridSize){const x=r.gridSize;A=Math.round(A/x)*x,R=Math.round(R/x)*x,ye=Math.round(ye/x)*x,N=Math.round(N/x)*x}c.updateElement(h.value,y.value,s.element.id,{x:ye,y:N,width:A,height:R})}function $(){O=!1,window.removeEventListener("mousemove",me),window.removeEventListener("mouseup",$)}function j(){["text","heading"].includes(s.element.type)&&r.focusPropertiesSection("content")}const U=P(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:D.value?"not-allowed":"move",visibility:ge.value?"visible":"hidden",userSelect:"none"}));function Y(J){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[J]||"auto"}function he(J="content"){r.focusPropertiesSection(J)}function Re(){const J=ue.value?"improve":s.element.type==="image"?"image":"generate";r.openAIPanel(J)}function Te(){const J=c.duplicateElement(h.value,y.value,s.element.id);J&&(r.selectElement(J.id),r.focusPropertiesSection("geometry"))}function _e(){c.deleteElement(h.value,y.value,s.element.id),r.clearSelection()}return(J,re)=>(l(),i("div",{class:X(["element-wrapper",b.value&&"selected",D.value&&"locked"]),style:fe(U.value),onMousedown:C,onDblclick:j},[Rn(J.$slots,"default",{},void 0),b.value&&!D.value?(l(),i(Z,{key:0},[re[6]||(re[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:re[3]||(re[3]=qe(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:re[0]||(re[0]=oe=>he("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:re[1]||(re[1]=oe=>he("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:re[2]||(re[2]=oe=>he("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Re},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Te,title:"Duplicate element","aria-label":"Duplicate element"},[...re[4]||(re[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:_e,title:"Delete element","aria-label":"Delete element"},[...re[5]||(re[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(Z,null,pe(p,oe=>e("div",{key:oe,class:X(["resize-handle",`handle-${oe}`]),style:fe({cursor:Y(oe)}),onMousedown:qe(te=>ee(te,oe),["stop"])},null,46,Lc)),64))],64)):W("",!0),b.value&&D.value?(l(),i("div",jc)):W("",!0)],38))}},qc=Qe(Dc,[["__scopeId","data-v-d539ca8b"]]),zt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=P(()=>s.element.content||{}),c=nt(),v=lt(),h=_(!1),y=_(null),b=_("");Je(()=>r.value.text,G=>{h.value||(b.value=G||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function D(){c.selectedElementId===s.element.id&&(h.value=!0,In(()=>{if(y.value)if(y.value.focus(),typeof y.value.setSelectionRange=="function"){const G=y.value.value.length;y.value.setSelectionRange(G,G)}else{const G=document.createRange();G.selectNodeContents(y.value),G.collapse(!1);const be=window.getSelection();be.removeAllRanges(),be.addRange(G)}}))}function ge(G){h.value&&G.stopPropagation()}function ue(){h.value=!1;const G=b.value;v.updateElement(c.projectId,c.currentSlideId,s.element.id,{content:{...s.element.content,text:G}})}return(G,be)=>h.value?ce((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:y,"onUpdate:modelValue":be[0]||(be[0]=H=>b.value=H),onBlur:ue,onMousedown:ge,style:fe({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[ke,b.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:D,style:fe({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},k(b.value),37))}},Rc=["src","alt"],Fc={key:1,class:"image-placeholder"},Uc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Oc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(S){return(s,r)=>{var c,v,h,y;return l(),i("div",{class:"image-element",style:fe({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((c=S.element.content)==null?void 0:c.borderRadius)||0)+"px",border:`${((v=S.element.content)==null?void 0:v.borderWidth)||0}px solid ${((h=S.element.content)==null?void 0:h.borderColor)||"transparent"}`})},[(y=S.element.content)!=null&&y.src?(l(),i("img",{key:0,src:S.element.content.src,alt:S.element.content.alt||"",style:fe({width:"100%",height:"100%",objectFit:S.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,Rc)):(l(),i("div",Fc,[(l(),i("svg",Uc,[...r[0]||(r[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),r[1]||(r[1]=e("span",null,"Image",-1))]))],4)}}},Vc=Qe(Oc,[["__scopeId","data-v-401e9ff3"]]),Wc={class:"shape-element",style:{width:"100%",height:"100%"}},Gc=["width","height"],Hc=["points","fill","stroke","stroke-width"],Yc={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=P(()=>s.element.content||{}),c=P(()=>{const y=r.value.shapeType||"rectangle",b={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return y==="circle"?{...b,borderRadius:"50%"}:y==="rectangle"?{...b,borderRadius:(r.value.borderRadius||0)+"px"}:b}),v=P(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),h=P(()=>{const y=s.element.width||150,b=s.element.height||100,D=r.value.shapeType;if(D==="triangle")return`${y/2},0 ${y},${b} 0,${b}`;if(D==="diamond")return`${y/2},0 ${y},${b/2} ${y/2},${b} 0,${b/2}`;if(D==="arrow")return`0,${b*.3} ${y*.6},${b*.3} ${y*.6},0 ${y},${b/2} ${y*.6},${b} ${y*.6},${b*.7} 0,${b*.7}`;if(D==="star"){const ge=y/2,ue=b/2,G=Math.min(y,b)/2,be=G*.4;let H="";for(let T=0;T<10;T++){const a=(T*36-90)*Math.PI/180,C=T%2===0?G:be;H+=`${ge+C*Math.cos(a)},${ue+C*Math.sin(a)} `}return H.trim()}return""});return(y,b)=>(l(),i("div",Wc,[v.value?(l(),i("svg",{key:1,width:S.element.width,height:S.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:h.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,Hc)],8,Gc)):(l(),i("div",{key:0,style:fe(c.value)},null,4))]))}},Qc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=P(()=>s.element.content||{}),c=P(()=>{const v={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},h=v[r.value.variant||"primary"]||v.primary;return{...h,background:r.value.bgColor||h.background,color:r.value.textColor||h.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:h.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(v,h)=>(l(),i("div",{class:"button-element",style:fe({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},k(r.value.label||"Button"),5))}},Xc={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Jc={class:"popup-header"},Kc={class:"popup-body"},Zc={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=P(()=>s.element.content||{}),c=_(!1);function v(h){h.stopPropagation(),c.value=!c.value}return(h,y)=>(l(),i("div",Xc,[e("div",{class:"hotspot-btn",style:fe({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:qe(v,["stop"])},k(r.value.icon||"?"),5),gt(Mt,{name:"fade"},{default:rt(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:fe({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",Jc,[e("strong",null,k(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:y[0]||(y[0]=qe(b=>c.value=!1,["stop"]))},"×")]),e("div",Kc,k(r.value.popupContent||"Add your content in the properties panel."),1)],4)):W("",!0)]),_:1})]))}},ep=Qe(Zc,[["__scopeId","data-v-ef5f15f6"]]),tp={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},op=["src"],np=["src","poster","autoplay","controls","loop","muted"],lp={key:2,class:"video-placeholder"},ip={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},ap={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=P(()=>s.element.content||{}),c=P(()=>{const h=r.value.src||"";return h.includes("youtube")||h.includes("youtu.be")}),v=P(()=>{var y,b;const h=r.value.src||"";if(c.value){const D=(y=h.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:y[1];return D?`https://www.youtube.com/embed/${D}`:""}if(h.includes("vimeo.com")){const D=(b=h.match(/vimeo\.com\/(\d+)/))==null?void 0:b[1];return D?`https://player.vimeo.com/video/${D}`:""}return""});return(h,y)=>(l(),i("div",tp,[v.value?(l(),i("iframe",{key:0,src:v.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,op)):r.value.src&&!v.value?(l(),i("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:fe({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,np)):(l(),i("div",lp,[(l(),i("svg",ip,[...y[0]||(y[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),y[1]||(y[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},sp=Qe(ap,[["__scopeId","data-v-dfea1a16"]]),rp=["stroke"],up=["src","controls","autoplay","loop"],dp={key:1,style:{"font-size":"11px",color:"#aaa"}},cp={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(S){return(s,r)=>{var c,v,h,y,b,D,ge,ue,G;return l(),i("div",{class:"audio-element",style:fe({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=S.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((v=S.element.content)==null?void 0:v.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((h=S.element.content)==null?void 0:h.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,rp)),e("span",{style:fe({fontSize:"13px",color:((y=S.element.content)==null?void 0:y.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},k(((b=S.element.content)==null?void 0:b.label)||"Audio Player"),5),(D=S.element.content)!=null&&D.src?(l(),i("audio",{key:0,src:S.element.content.src,controls:((ge=S.element.content)==null?void 0:ge.controls)!==!1,autoplay:(ue=S.element.content)==null?void 0:ue.autoplay,loop:(G=S.element.content)==null?void 0:G.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=qe(()=>{},["stop"]))},null,40,up)):(l(),i("span",dp,"No source"))],4)}}},pp={class:"quiz-options"},vp=["onClick"],fp={class:"opt-letter"},mp={class:"opt-text"},gp={key:0},bp={class:"quiz-actions"},hp=["disabled"],yp={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=P(()=>s.element.content||{}),c=_(null),v=_(!1);function h(ge){v.value||(c.value=ge)}function y(){c.value!==null&&(v.value=!0)}function b(){c.value=null,v.value=!1}const D=P(()=>v.value&&c.value===(r.value.correctIndex??0));return(ge,ue)=>(l(),i("div",{class:"quiz-element",style:fe({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:fe({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},k(r.value.question||"Question text…"),5),e("div",pp,[(l(!0),i(Z,null,pe(r.value.options||[],(G,be)=>(l(),i("div",{key:be,class:X(["quiz-opt",c.value===be&&"selected",v.value&&be===r.value.correctIndex&&"correct",v.value&&c.value===be&&be!==r.value.correctIndex&&"wrong"]),onClick:H=>h(be)},[e("span",fp,k(String.fromCharCode(65+be)),1),e("span",mp,k(G),1)],10,vp))),128))]),v.value?(l(),i("div",{key:0,class:X(["quiz-feedback",D.value?"correct":"wrong"])},[K(k(D.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!D.value&&r.value.explanation?(l(),i("span",gp,k(r.value.explanation),1)):W("",!0)],2)):W("",!0),e("div",bp,[v.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:b},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:y},"Submit",8,hp))])],4))}},xp=Qe(yp,[["__scopeId","data-v-ca2bd187"]]),wp={key:0,class:"canvas-empty"},kp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},Cp={key:0,class:"canvas-device-frame","aria-hidden":"true"},$p=["value"],Sp={class:"canvas-guide-label"},Ip={key:5,class:"drop-hint"},Ap={class:"canvas-info-bar"},Mp=["disabled"],Ep={class:"slide-index"},Pp=["disabled"],Tp={key:0},Np={__name:"EditorCanvas",setup(S){const s=nt(),r=lt(),c=_(null),v=_(null),h=_(1),y=P(()=>h.value*s.zoomLevel);Un("canvasScale",y);const b=P(()=>r.getProject(s.projectId)),D=P(()=>Pt(b.value)),ge=P(()=>Mn(b.value)),ue=P(()=>D.value.width),G=P(()=>D.value.height),be=P(()=>En(ue.value,G.value)),H=P(()=>{var f,w;return(w=(f=b.value)==null?void 0:f.slides)==null?void 0:w.find(Q=>Q.id===s.currentSlideId)}),T=P(()=>{var f;return[...((f=b.value)==null?void 0:f.slides)||[]].sort((w,Q)=>w.order-Q.order)}),a=P(()=>T.value.findIndex(f=>f.id===s.currentSlideId)),C=P(()=>{var f;return{autoPlay:!1,motionPresets:[],...((f=b.value)==null?void 0:f.settings)||{}}}),M=P(()=>(Array.isArray(C.value.motionPresets)?C.value.motionPresets:[]).filter(f=>f.scope==="group")),q=P(()=>{const f=new Set(s.selectedElementIds);return we.value.filter(w=>f.has(w.id))}),p=_(""),O=P(()=>H.value?H.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:C.value.autoPlay&&Number(H.value.duration||0)>0?{label:`Auto ${Number(H.value.duration).toFixed(Number(H.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function le(){const f=M.value.find(Q=>Q.id===p.value);if(!f||!q.value.length)return;[...q.value].sort((Q,V)=>(Q.y||0)!==(V.y||0)?(Q.y||0)-(V.y||0):(Q.x||0)-(V.x||0)).forEach((Q,V)=>{if(f.type==="auto"){r.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,Q.id,{animations:[{type:f.type,delay:Math.max(0,Number(f.delay)||0)+V*Math.max(0,Number(f.stepDelay)||0),duration:Math.max(.1,Number(f.duration)||.72)}]})}),r.updateProject(s.projectId,{settings:{...C.value,motionPresets:(C.value.motionPresets||[]).map(Q=>Q.id===f.id?{...Q,usageCount:Math.max(0,Number(Q.usageCount||0))+1,lastUsedAt:Date.now()}:Q)}})}function Se(){if(!M.value.length){p.value="";return}M.value.some(f=>f.id===p.value)||(p.value=M.value[0].id)}const we=P(()=>{var f;return[...((f=H.value)==null?void 0:f.elements)||[]].sort((w,Q)=>(w.zIndex||0)-(Q.zIndex||0))}),L=P(()=>{const f=H.value;return f?f.backgroundType==="gradient"&&f.backgroundGradient?{background:f.backgroundGradient}:f.backgroundType==="image"&&f.backgroundImage?{backgroundImage:`url(${f.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:f.background||"#fff"}:{background:"#fff"}}),B=P(()=>`scale(${y.value})`);function de(){if(!c.value)return;const{clientWidth:f,clientHeight:w}=c.value,Q=(f-80)/ue.value,V=(w-80)/G.value;h.value=Math.min(Q,V,1)}let ie=null;Cn(()=>{de(),ie=new ResizeObserver(de),c.value&&ie.observe(c.value),Se()}),$n(()=>ie==null?void 0:ie.disconnect()),Je(M,()=>{Se()},{deep:!0,immediate:!0}),Je(D,()=>{de()},{deep:!0});const ee=_({x:0,y:0}),me=_({x:0,y:0}),$=_(!1),j=_(!1),U=_(!1),Y=_(null),he=P(()=>{var f,w;return((f=ge.value)==null?void 0:f.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=ge.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),Re=P(()=>{if(!he.value)return null;if(he.value.tone==="mobile"){const Q=ue.value*.08,V=G.value*.05;return{x:Q,y:V,width:ue.value-Q*2,height:G.value-V*2}}const f=ue.value*.08,w=G.value*.08;return{x:f,y:w,width:ue.value-f*2,height:G.value-w*2}}),Te=P(()=>{if(!Re.value)return[];const f=Re.value;return we.value.filter(w=>w.visible!==!1).filter(w=>{const Q=Number(w.x||0),V=Number(w.y||0),Ie=Q+Number(w.width||0),Pe=V+Number(w.height||0);return Q<f.x||V<f.y||Ie>f.x+f.width||Pe>f.y+f.height}).map(w=>w.id)}),_e=P(()=>s.selectedElementIds.filter(f=>Te.value.includes(f)).length),J=P(()=>Te.value.length),re=P(()=>!he.value||!J.value?null:_e.value?`${_e.value} selected ${_e.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`:`${J.value} ${J.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`),oe=P(()=>{if(!$.value)return null;const f=Math.min(ee.value.x,me.value.x),w=Math.min(ee.value.y,me.value.y),Q=Math.abs(me.value.x-ee.value.x),V=Math.abs(me.value.y-ee.value.y);return{x:f,y:w,width:Q,height:V}});function te(f){!$.value&&(f.target===v.value||f.target===f.currentTarget)&&s.clearSelection()}function Ae(f){return f?Array.from(f.files||[]).some(w=>w.type.startsWith("image/")):!1}function ye(f){return f?Array.from(f.types||[]).includes(Bt):!1}function N(f,w,Q){return Math.min(Math.max(f,w),Q)}function A(f,w,Q){const V=_t(f),Ie=N(w-V.width/2,0,Math.max(0,ue.value-V.width)),Pe=N(Q-V.height/2,0,Math.max(0,G.value-V.height));return{x:Ie,y:Pe,bounds:V}}function R(f){if(!ye(f))return null;try{const w=f.getData(Bt),Q=w?JSON.parse(w):null;return Q!=null&&Q.id&&r.getContentBlocks(s.projectId).find(V=>V.id===Q.id)||null}catch{return null}}function x(f,w,Q){if(!v.value||!Q){Y.value=null;return}const V=v.value.getBoundingClientRect(),Ie=(f-V.left)/y.value,Pe=(w-V.top)/y.value,Fe=A(Q,Ie,Pe);Y.value={block:Q,x:Fe.x,y:Fe.y,bounds:Fe.bounds}}function xe(f,w,Q){if(!f||!f.type.startsWith("image/"))return;const V=new FileReader;V.onload=()=>{const Ie=String(V.result||"");if(!Ie)return;const Pe=new Image;Pe.onload=()=>{const Fe=v.value.getBoundingClientRect(),De=(w-Fe.left)/y.value,se=(Q-Fe.top)/y.value,Ue=Math.min(420/Pe.width,280/Pe.height,1),Be=Math.max(120,Math.round(Pe.width*Ue)),Le=Math.max(80,Math.round(Pe.height*Ue)),tt=Math.max(0,Math.min(ue.value-Be,Math.round(De-Be/2))),pt=Math.max(0,Math.min(G.value-Le,Math.round(se-Le/2))),vt=r.addElement(s.projectId,s.currentSlideId,"image",{x:tt,y:pt,width:Be,height:Le,content:{src:Ie,alt:f.name,objectFit:"cover"}});vt&&(s.selectElement(vt.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Pe.src=Ie},V.readAsDataURL(f)}function Me(f){const w=Ae(f.dataTransfer),Q=ye(f.dataTransfer);!w&&!Q||(f.preventDefault(),f.dataTransfer.dropEffect="copy",j.value=w,U.value=Q,Q&&x(f.clientX,f.clientY,R(f.dataTransfer)))}function je(f){var w;(w=f.currentTarget)!=null&&w.contains(f.relatedTarget)||(j.value=!1,U.value=!1,Y.value=null)}function Ne(f){const w=Ae(f.dataTransfer),Q=ye(f.dataTransfer);if(!w&&!Q)return;if(f.preventDefault(),j.value=!1,U.value=!1,Y.value=null,Q){try{const Ie=R(f.dataTransfer);if(!Ie)return;const Pe=v.value.getBoundingClientRect(),Fe=(f.clientX-Pe.left)/y.value,De=(f.clientY-Pe.top)/y.value,se=A(Ie,Fe,De),Ce=r.insertContentBlock(s.projectId,s.currentSlideId,Ie.id,{x:se.x,y:se.y});Ce.length&&(s.setSelection(Ce.map(Ke=>Ke.id)),s.setActiveTool("select"),s.focusPropertiesSection("content"))}catch(Ie){console.warn("Failed to drop block onto canvas.",Ie)}return}const V=Array.from(f.dataTransfer.files||[]).find(Ie=>Ie.type.startsWith("image/"));V&&xe(V,f.clientX,f.clientY)}function We(f){if(q.value.length<2)return;const w=[...q.value].sort((se,Ce)=>(se.zIndex||0)-(Ce.zIndex||0)),Q=Math.min(...w.map(se=>Number(se.x||0))),V=Math.min(...w.map(se=>Number(se.y||0))),Ie=Math.max(...w.map(se=>Number(se.x||0)+Number(se.width||0))),Pe=Math.max(...w.map(se=>Number(se.y||0)+Number(se.height||0))),Fe=Q+(Ie-Q)/2,De=V+(Pe-V)/2;if(f==="align-left"&&w.forEach(se=>r.updateElement(s.projectId,s.currentSlideId,se.id,{x:Q},{persist:!1})),f==="align-center"&&w.forEach(se=>{const Ce=Number(se.width||0);r.updateElement(s.projectId,s.currentSlideId,se.id,{x:Fe-Ce/2},{persist:!1})}),f==="align-right"&&w.forEach(se=>{const Ce=Number(se.width||0);r.updateElement(s.projectId,s.currentSlideId,se.id,{x:Ie-Ce},{persist:!1})}),f==="align-top"&&w.forEach(se=>r.updateElement(s.projectId,s.currentSlideId,se.id,{y:V},{persist:!1})),f==="align-middle"&&w.forEach(se=>{const Ce=Number(se.height||0);r.updateElement(s.projectId,s.currentSlideId,se.id,{y:De-Ce/2},{persist:!1})}),f==="align-bottom"&&w.forEach(se=>{const Ce=Number(se.height||0);r.updateElement(s.projectId,s.currentSlideId,se.id,{y:Pe-Ce},{persist:!1})}),f==="distribute-horizontal"){const se=[...w].sort((Be,Le)=>(Be.x||0)-(Le.x||0)),Ce=se.reduce((Be,Le)=>Be+Number(Le.width||0),0),Ke=se.length>1?(Ie-Q-Ce)/(se.length-1):0;let Ue=Q;se.forEach(Be=>{r.updateElement(s.projectId,s.currentSlideId,Be.id,{x:Ue},{persist:!1}),Ue+=Number(Be.width||0)+Ke})}if(f==="distribute-vertical"){const se=[...w].sort((Be,Le)=>(Be.y||0)-(Le.y||0)),Ce=se.reduce((Be,Le)=>Be+Number(Le.height||0),0),Ke=se.length>1?(Pe-V-Ce)/(se.length-1):0;let Ue=V;se.forEach(Be=>{r.updateElement(s.projectId,s.currentSlideId,Be.id,{y:Ue},{persist:!1}),Ue+=Number(Be.height||0)+Ke})}r.commitProject(s.projectId)}function ct(f){const w=s.activeTool;if(f.target!==v.value&&f.target!==f.currentTarget)return;f.preventDefault(),f.stopPropagation();const Q=v.value.getBoundingClientRect(),V=(f.clientX-Q.left)/y.value,Ie=(f.clientY-Q.top)/y.value;if(w==="select"){$.value=!0,ee.value={x:V,y:Ie},me.value={x:V,y:Ie};const De=Ce=>{me.value={x:(Ce.clientX-Q.left)/y.value,y:(Ce.clientY-Q.top)/y.value}},se=()=>{window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",se);const Ce=oe.value;if(Ce&&(Ce.width>2||Ce.height>2)){const Ke=we.value.filter(Ue=>{const Be=Ue.x,Le=Ue.y,tt=Ue.width||100,pt=Ue.height||100;return Be<Ce.x+Ce.width&&Be+tt>Ce.x&&Le<Ce.y+Ce.height&&Le+pt>Ce.y}).map(Ue=>Ue.id);Ke.length>0?s.setSelection(Ke):s.clearSelection()}else s.clearSelection();setTimeout(()=>{$.value=!1},0)};window.addEventListener("mousemove",De),window.addEventListener("mouseup",se);return}const Pe=De=>s.snapToGrid?Math.round(De/s.gridSize)*s.gridSize:De,Fe=r.addElement(s.projectId,s.currentSlideId,w,{x:Pe(V-75),y:Pe(Ie-40)});Fe&&(s.selectElement(Fe.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const Xe=P(()=>{if(!s.showGrid)return{};const f=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${f}px ${f}px`}}),at={text:zt,heading:zt,image:Vc,shape:Yc,button:Qc,hotspot:ep,video:sp,audio:cp,quiz:xp,chart:il,divider:"div"};function st(f){return at[f]||zt}function it(f){var w,Q;return f.type!=="divider"?{}:{borderTop:`${((w=f.content)==null?void 0:w.thickness)||2}px solid ${((Q=f.content)==null?void 0:Q.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const He=_({show:!1,x:0,y:0,elId:null});function yt(f,w){f.preventDefault(),He.value={show:!0,x:f.clientX,y:f.clientY,elId:w},s.selectElement(w),setTimeout(()=>window.addEventListener("click",ut,{once:!0}),0)}function ut(){He.value.show=!1}function xt(){if(He.value.elId){const f=r.duplicateElement(s.projectId,s.currentSlideId,He.value.elId);f&&s.selectElement(f.id)}ut()}function wt(){He.value.elId&&(r.deleteElement(s.projectId,s.currentSlideId,He.value.elId),s.clearSelection()),ut()}function dt(){He.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,He.value.elId,"up"),ut()}function kt(){He.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,He.value.elId,"down"),ut()}function Ct(){const f=a.value,w=r.addSlide(s.projectId,f);w&&s.setCurrentSlide(w.id)}function $t(){const f=a.value;f>0&&s.setCurrentSlide(T.value[f-1].id)}function St(){const f=a.value;f<T.value.length-1&&s.setCurrentSlide(T.value[f+1].id)}return(f,w)=>{var Q;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[H.value?(l(),i(Z,{key:1},[e("div",{class:X(["canvas-zoom-wrapper",[he.value&&`canvas-zoom-wrapper-${he.value.tone}`]]),style:fe({transform:B.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:v,class:"slide-canvas",style:fe({width:ue.value+"px",height:G.value+"px",...L.value,...Xe.value}),onClick:te,onMousedown:ct,onDragover:Me,onDragleave:je,onDrop:Ne,onContextmenu:w[3]||(w[3]=qe(()=>{},["prevent"]))},[he.value?(l(),i("div",Cp)):W("",!0),I(s).multiSelection&&M.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=qe(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),ce(e("select",{"onUpdate:modelValue":w[0]||(w[0]=V=>p.value=V),class:"selection-preset-select"},[(l(!0),i(Z,null,pe(M.value,V=>(l(),i("option",{key:V.id,value:V.id},k(V.name),9,$p))),128))],512),[[At,p.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:qe(le,["stop"])},"Apply")],32)):W("",!0),re.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=qe(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,k(re.value),1)],32)):W("",!0),Y.value?(l(),i("div",{key:3,class:"block-drop-preview",style:fe({left:`${Y.value.x}px`,top:`${Y.value.y}px`,width:`${Y.value.bounds.width}px`,height:`${Y.value.bounds.height}px`})},[(l(!0),i(Z,null,pe(Y.value.block.elements,(V,Ie)=>{var Pe,Fe,De,se;return l(),i("div",{key:`${Y.value.block.id}-preview-${Ie}`,class:X(["block-drop-preview-el",`block-drop-preview-${V.type}`]),style:fe({left:`${Number(V.x||0)-Y.value.bounds.minX}px`,top:`${Number(V.y||0)-Y.value.bounds.minY}px`,width:`${Number(V.width||0)}px`,height:`${Number(V.height||0)}px`,borderRadius:V.type==="shape"&&((Pe=V.content)==null?void 0:Pe.shapeType)==="circle"?"50%":`${Number(((Fe=V.content)==null?void 0:Fe.borderRadius)||12)}px`,background:V.type==="shape"?((De=V.content)==null?void 0:De.fillColor)||"rgba(108,71,255,.18)":V.type==="button"?((se=V.content)==null?void 0:se.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(V.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(V.type)?(l(),i(Z,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):W("",!0)],6)}),128))],4)):W("",!0),(l(!0),i(Z,null,pe(we.value,V=>(l(),Ye(qc,{key:V.id,element:V,onContextmenu:qe(Ie=>yt(Ie,V.id),["stop"])},{default:rt(()=>[(l(),Ye(Fn(st(V.type)),{element:V,style:fe(V.type==="divider"?it(V):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),he.value?(l(),i("div",{key:4,class:X(["canvas-guide",[`canvas-guide-${he.value.tone}`,J.value&&"canvas-guide-warning-state"]]),style:fe(he.value.style),"aria-hidden":"true"},[e("span",Sp,k(he.value.label)+" · "+k(be.value),1)],6)):W("",!0),I(s).activeTool!=="select"||j.value||U.value?(l(),i("div",Ip,k(U.value?"Drop block to insert it here":j.value?"Drop image to insert it on this slide":`Click anywhere to add ${I(s).activeTool}`),1)):W("",!0),$.value&&oe.value?(l(),i("div",{key:6,class:"selection-marquee",style:fe({left:oe.value.x+"px",top:oe.value.y+"px",width:oe.value.width+"px",height:oe.value.height+"px"})},null,4)):W("",!0)],36)],6),e("div",Ap,[e("button",{class:"bar-btn",onClick:Ct},"Add page"),e("button",{class:"bar-btn icon",onClick:$t,disabled:a.value<=0},"◀",8,Mp),e("span",Ep,k(a.value+1)+" / "+k(T.value.length),1),e("button",{class:"bar-btn icon",onClick:St,disabled:a.value>=T.value.length-1},"▶",8,Pp),e("span",null,k(ue.value)+" × "+k(G.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,k(((Q=H.value.elements)==null?void 0:Q.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:X(["playback-badge",`playback-badge-${O.value.tone}`])},k(O.value.label),3),I(s).hasSelection?(l(),i("span",Tp,"· "+k(I(s).selectedElementIds.length)+" selected",1)):W("",!0),I(s).multiSelection?(l(),i(Z,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=V=>We("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=V=>We("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=V=>We("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=V=>We("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=V=>We("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=V=>We("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=V=>We("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=V=>We("distribute-vertical"))},"Space V")],64)):W("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=V=>I(s).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",wp,[(l(),i("svg",kp,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),Ye(Sn,{to:"body"},[He.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:fe({left:He.value.x+"px",top:He.value.y+"px"})},[e("button",{class:"ctx-item",onClick:xt},"Duplicate"),e("button",{class:"ctx-item",onClick:dt},"Bring Forward"),e("button",{class:"ctx-item",onClick:kt},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:wt},"Delete")],4)):W("",!0)]))],512)}}},zp=Qe(Np,[["__scopeId","data-v-e7450e9c"]]),Bp={class:"ai-panel"},_p={class:"ai-mode-tabs"},Lp=["onClick"],jp={class:"ai-content"},Dp={class:"form-group"},qp={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},Rp={key:0,class:"form-group"},Fp={key:1,class:"form-group"},Up={class:"layout-label-row"},Op={class:"layout-current-hint"},Vp={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},Wp=["onClick"],Gp={class:"layout-preset-title"},Hp={class:"layout-preset-hint"},Yp={key:2,class:"form-group"},Qp={key:3,class:"form-group"},Xp={class:"layout-label-row"},Jp={class:"layout-current-hint"},Kp={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},Zp={key:4,class:"form-group"},ev={class:"layout-label-row"},tv={class:"layout-current-hint"},ov={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},nv=["onClick"],lv={class:"layout-preset-title"},iv={class:"layout-preset-hint"},av={class:"form-group"},sv={class:"form-group"},rv={class:"prompt-label-row"},uv={key:1,class:"prompt-auto-badge"},dv={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},cv={key:6,class:"selected-source-card"},pv={class:"result-header"},vv={class:"source-count-badge"},fv={class:"selected-source-preview"},mv={class:"selected-source-actions"},gv=["disabled"],bv=["disabled"],hv={key:0,class:"spinner"},yv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},xv={key:7,class:"creative-options-wrap"},wv={class:"result-header"},kv={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Cv={key:1,class:"creative-options-list"},$v={class:"creative-title"},Sv={class:"creative-angle"},Iv=["onClick"],Av={class:"form-group"},Mv={class:"quiz-config-row"},Ev={class:"form-group",style:{flex:"1"}},Pv={class:"form-group",style:{flex:"1"}},Tv={class:"form-group"},Nv={class:"qtype-btns"},zv=["onClick"],Bv={class:"qtype-icon"},_v={class:"form-group"},Lv={class:"form-group"},jv={class:"prompt-label-row"},Dv={key:1,class:"prompt-auto-badge"},qv=["disabled"],Rv={key:0,class:"spinner"},Fv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Uv={key:0,class:"quiz-results"},Ov={class:"quiz-results-header"},Vv={class:"form-label"},Wv={class:"quiz-header-actions"},Gv={class:"regen-row"},Hv=["disabled"],Yv={key:0,class:"spinner spinner-sm"},Qv={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Xv=["disabled"],Jv={class:"quiz-card-header"},Kv={class:"quiz-card-check"},Zv=["onUpdate:modelValue"],e1={class:"q-num"},t1={class:"q-badges"},o1={class:"badge type-badge"},n1={class:"q-question"},l1={class:"q-options"},i1={class:"q-option-letter"},a1={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},s1={key:0,class:"q-explanation"},r1=["disabled"],u1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},d1=["disabled"],c1={key:0,class:"spinner"},p1={key:0,class:"selected-text-preview"},v1={class:"text-preview"},f1={key:1,class:"ai-hint"},m1={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},g1=["disabled"],b1={key:0,class:"spinner"},h1={key:0,class:"selected-text-preview"},y1={class:"text-preview"},x1={key:1,class:"ai-hint"},w1={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},k1=["disabled"],C1={key:0,class:"spinner"},$1={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},S1={class:"result-header"},I1={class:"result-actions"},A1=["disabled"],M1={class:"textarea result-display"},E1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},P1=["disabled"],T1={key:0,class:"spinner"},N1={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},z1={class:"textarea result-display",style:{color:"var(--color-primary)"}},B1={key:6,class:"ai-settings"},_1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},L1=["value"],j1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},D1=["value"],q1={key:0,class:"demo-notice"},R1={key:7,class:"result-area"},F1={class:"result-header"},U1={class:"result-pre"},O1={class:"result-actions"},V1=["disabled"],W1={key:8,class:"ai-error"},G1={__name:"AIAssistant",setup(S){const s=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'}],r={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(d,o="classic"){const m=String(d||o||"classic").trim().toLowerCase();return s.some(z=>z.id===m)?m:o}function v(d,o=""){return String(d??o).replace(/^\s*[-•]\s*/,"").trim()||o}function h(d){return(Array.isArray(d)?d:typeof d=="string"?d.split(`
`):[]).map(m=>v(m)).filter(Boolean)}function y(d,o,m){const z=[...d];for(;z.length<o;)z.push(m(z.length));return z.slice(0,o)}function b(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({title:v(g==null?void 0:g.title,`Card ${ne+1}`),body:v((g==null?void 0:g.body)||(g==null?void 0:g.text)||(g==null?void 0:g.description),"Add supporting detail.")})).filter(g=>g.title||g.body):[],z=o.map((g,ne)=>({title:`Point ${ne+1}`,body:g}));return y(m.length?m:z,3,g=>({title:`Point ${g+1}`,body:"Add supporting detail."}))}function D(d,o){const m=h(d==null?void 0:d.leftPoints),z=h(d==null?void 0:d.rightPoints),g=o.slice(0,Math.max(1,Math.ceil(o.length/2))),ne=o.slice(Math.max(1,Math.ceil(o.length/2)));return{leftTitle:v(d==null?void 0:d.leftTitle,"Option A"),leftPoints:y(m.length?m:g,3,$e=>`Left point ${$e+1}`),rightTitle:v(d==null?void 0:d.rightTitle,"Option B"),rightPoints:y(z.length?z:ne,3,$e=>`Right point ${$e+1}`)}}function ge(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({value:v(g==null?void 0:g.value,`${ne+1}`),label:v(g==null?void 0:g.label,`Metric ${ne+1}`)})).filter(g=>g.value||g.label):[],z=o.map((g,ne)=>{const[$e,...Ve]=g.split(/[:\-]/);return{value:v($e,`${ne+1}`),label:v(Ve.join(" ").trim(),g)}});return y(m.length?m:z,3,g=>({value:`${g+1}`,label:`Metric ${g+1}`}))}function ue(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({title:v(g==null?void 0:g.title,`Phase ${ne+1}`),detail:v((g==null?void 0:g.detail)||(g==null?void 0:g.description),"Explain the milestone.")})).filter(g=>g.title||g.detail):[],z=o.map((g,ne)=>({title:`Phase ${ne+1}`,detail:g}));return y(m.length?m:z,4,g=>({title:`Phase ${g+1}`,detail:"Explain the milestone."}))}function G(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({question:v(g==null?void 0:g.question,`Question ${ne+1}?`),answer:v(g==null?void 0:g.answer,"Add the short answer here.")})).filter(g=>g.question||g.answer):[],z=o.map((g,ne)=>({question:`Question ${ne+1}?`,answer:g}));return y(m.length?m:z,3,g=>({question:`Question ${g+1}?`,answer:"Add the short answer here."}))}function be(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({title:v(g==null?void 0:g.title,`Step ${ne+1}`),detail:v((g==null?void 0:g.detail)||(g==null?void 0:g.description),"Add the step detail here.")})).filter(g=>g.title||g.detail):[],z=o.map((g,ne)=>({title:`Step ${ne+1}`,detail:g}));return y(m.length?m:z,3,g=>({title:`Step ${g+1}`,detail:"Add the step detail here."}))}const H=Wn(),T=nt(),a=lt(),C=_("generate"),M=_(""),q=_(""),p=_("");Je(C,()=>{p.value=""}),Je(()=>T.aiPanelMode,d=>{d&&(C.value=d)},{immediate:!0});const O=_(4),le=_("general"),Se=_("Spanish"),we=_(""),L=_(""),B=_(""),de=_(!1),ie=_("single"),ee=_("classic"),me=_("mixed"),$=_(5),j=_("slide"),U=_([]),Y=_(""),he=P(()=>s.find(d=>d.id===ee.value)||s[0]),Re=P(()=>{const d=q.value.trim()||"[your topic]";if(ie.value==="deck"){let z=`Create a complete ${$.value}-slide learning deck about "${d}".`;return L.value.trim()&&(z+=`
Additional context: ${L.value.trim()}`),z+=`
Deck layout strategy: ${me.value}`,me.value==="single"?z+=`
Use the ${ee.value} layout for every slide.`:z+=`
Mix layouts across the deck when appropriate.`,z+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process" }] }`,z+=`
Make each slide distinct, logically sequenced, and specific to "${d}".`,z}let m=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[le.value]||"educational slide"} about "${d}".`;return L.value.trim()&&(m+=`
Additional context: ${L.value.trim()}`),m+=`
Layout mode: ${ee.value}`,m+=`
Layout instruction: ${he.value.promptHint}`,m+=`
Return ONLY valid JSON matching this shape: ${he.value.schema}`,m+=`
Make all content specific to "${d}" — no generic placeholders.`,m});Je(Re,d=>{de.value||(B.value=d)},{immediate:!0});function Te(){B.value=Re.value,de.value=!1}const _e=_(""),J=_("intermediate"),re=_("multiple-choice"),oe=_(""),te=_([]),Ae=_(""),ye=_(!1),N=P(()=>{const d=_e.value.trim()||"[your topic]",o={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},m={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let z=`Generate ${O.value} ${o[J.value]} ${m[re.value]} quiz questions about "${d}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return oe.value.trim()&&(z+=`
Learning objective: ${oe.value.trim()}`),z});Je(N,d=>{ye.value||(Ae.value=d)},{immediate:!0});function A(){Ae.value=N.value,ye.value=!1}const R=P(()=>a.getProject(T.projectId)),x=P(()=>{var d,o;return(o=(d=R.value)==null?void 0:d.slides)==null?void 0:o.find(m=>m.id===T.currentSlideId)}),xe=P(()=>{var d,o;return T.selectedElementId?(o=(d=x.value)==null?void 0:d.elements)==null?void 0:o.find(m=>m.id===T.selectedElementId):null}),Me=P(()=>{var o;const d=new Set(T.selectedElementIds);return(((o=x.value)==null?void 0:o.elements)||[]).filter(m=>{var z;return d.has(m.id)&&typeof((z=m==null?void 0:m.content)==null?void 0:z.text)=="string"&&m.content.text.trim()})}),je=P(()=>Me.value.map(d=>d.content.text.trim()).filter(Boolean).join(`

`));async function Ne(){if(!q.value.trim()&&!B.value.trim())return;if(p.value="",U.value=[],Y.value="",ie.value==="deck"){const o=await H.generateSlideDeck(q.value,$.value,{objective:L.value,customPrompt:B.value,layoutStrategy:me.value,layoutMode:ee.value});if(o!=null&&o.length){const m=o.map(z=>We(z));p.value=JSON.stringify({slides:m},null,2),w(m,{replaceGenerated:!0})}return}if(j.value==="options"){await Ie();return}const d=await H.generateSlideContent(q.value,le.value,L.value,B.value,{layoutMode:ee.value});if(d){const o=We(d);p.value=JSON.stringify(o,null,2),Q(o,{replaceGenerated:!0})}}function We(d){var g;const o=d&&typeof d=="object"?d:{},m=h(o.bullets),z=c(o.layout||((g=o.design)==null?void 0:g.layout),ie.value==="deck"&&me.value==="mixed"?"classic":ee.value);return{title:String(o.title||q.value||"Untitled Slide").trim(),subtitle:String(o.subtitle||"").trim(),bullets:m,callout:String(o.callout||"").trim(),layout:z,cards:b(o.cards,m),comparison:D(o.comparison,m),metrics:ge(o.metrics,m),timeline:ue(o.timeline,m),faqs:G(o.faqs,m),process:be(o.process,m)}}function ct(d,o){var g,ne,$e;const m=(ne=(g=a.getProject(d))==null?void 0:g.slides)==null?void 0:ne.find(Ve=>Ve.id===o);if(!(($e=m==null?void 0:m.elements)!=null&&$e.length))return;m.elements.filter(Ve=>{var E;return((E=Ve.meta)==null?void 0:E.source)==="ai-content"}).map(Ve=>Ve.id).forEach(Ve=>{a.deleteElement(d,o,Ve)})}function Xe(d,o,m,z){return a.addElement(d,o,m,{...z,meta:{...z.meta||{},source:"ai-content"}})}function at(d){const o=ol.find(z=>z.id===d);if(!o)return null;const m=nl(JSON.parse(JSON.stringify(o)),d);return m.elements=m.elements.map(z=>({...z,meta:{...z.meta||{},source:"ai-content"}})),m}function st(d,o){o&&d.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:o,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function it(d,o){if(!o)return;const m=_t(d);d.elements.push({type:"text",x:0,y:m.height+18,width:Math.max(m.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${o}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function He(d){const o=Array.isArray(d)?d:[];if(!o.length)return{minX:40,minY:54,width:0,height:0};const m=Math.min(...o.map($e=>Number($e.x||0))),z=Math.min(...o.map($e=>Number($e.y||0))),g=Math.max(...o.map($e=>Number($e.x||0)+Number($e.width||0))),ne=Math.max(...o.map($e=>Number($e.y||0)+Number($e.height||0)));return{minX:m,minY:z,width:Math.max(0,g-m),height:Math.max(0,ne-z)}}function yt(d,o){var ne;const m=a.getProject(d),z=_t(o),g=Number(((ne=m==null?void 0:m.settings)==null?void 0:ne.slideWidth)||960);return{x:Math.max(40,Math.round((g-z.width)/2)),y:54}}function ut(d){const o=at(r.cards);if(!o)return null;const m=d.cards;return o.elements[0].content.text=d.title,o.elements[1].content.text=d.subtitle||d.callout||"Use the three cards to frame the main ideas.",m.forEach((z,g)=>{o.elements[5+g].content.text=z.title,o.elements[8+g].content.text=z.body}),d.callout&&d.subtitle&&it(o,d.callout),o}function xt(d){const o=at(r.comparison);return o?(o.elements[0].content.text=d.title,o.elements[3].content.text=d.comparison.leftTitle,o.elements[4].content.text=d.comparison.rightTitle,o.elements[5].content={...o.elements[5].content,text:d.comparison.leftPoints.map(m=>`• ${m}`).join(`
`),fontSize:17,lineHeight:1.55},o.elements[6].content={...o.elements[6].content,text:d.comparison.rightPoints.map(m=>`• ${m}`).join(`
`),fontSize:17,lineHeight:1.55},st(o,d.subtitle),it(o,d.callout),o):null}function wt(d){const o=at(r.metrics);return o?(o.elements[0].content.text=d.title,d.metrics.forEach((m,z)=>{o.elements[4+z].content.text=m.value,o.elements[7+z].content.text=m.label}),st(o,d.subtitle),it(o,d.callout),o):null}function dt(d){const o=at(r.timeline);return o?(o.elements[0].content.text=d.title,d.timeline.forEach((m,z)=>{o.elements[6+z].content={...o.elements[6+z].content,text:`${m.title}
${m.detail}`,fontSize:16,lineHeight:1.35}}),st(o,d.subtitle),it(o,d.callout),o):null}function kt(d){const o=at(r.faq);return o?(o.elements[0].content.text=d.title,d.faqs.forEach((m,z)=>{o.elements[4+z].content={...o.elements[4+z].content,text:`${m.question}
${m.answer}`,fontSize:16,lineHeight:1.35},o.elements[4+z].height=44}),st(o,d.subtitle),it(o,d.callout),o):null}function Ct(d){const o=at(r.process);return o?(o.elements[0].content.text=d.title,d.process.forEach((m,z)=>{o.elements[8+z].content.text=m.title,o.elements[11+z].content.text=m.detail}),st(o,d.subtitle),it(o,d.callout),o):null}function $t(d){switch(d.layout){case"cards":return ut(d);case"comparison":return xt(d);case"metrics":return wt(d);case"timeline":return dt(d);case"faq":return kt(d);case"process":return Ct(d);default:return null}}function St(d,o,m){var z;if(m.title&&(a.updateSlide(d,o,{title:m.title}),Xe(d,o,"heading",{x:60,y:40,width:840,height:80,content:{text:m.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),m.subtitle&&Xe(d,o,"text",{x:60,y:130,width:840,height:50,content:{text:m.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(z=m.bullets)!=null&&z.length){const g=m.bullets.map(ne=>`• ${ne}`).join(`
`);Xe(d,o,"text",{x:60,y:m.subtitle?200:150,width:840,height:200,content:{text:g,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}m.callout&&(Xe(d,o,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),Xe(d,o,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${m.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function f(d,o,m,{replaceGenerated:z=!1,origin:g=null}={}){if(!d||!o)return;z&&ct(d,o);const ne=$t(m);if(a.updateSlide(d,o,{title:m.title||"Untitled Slide"}),ne){const $e=g||yt(d,ne);a.insertContentBlock(d,o,ne,$e)}else St(d,o,m)}function w(d,{replaceGenerated:o=!1}={}){if(!T.currentSlideId)return;const m=T.projectId;if(!m||!Array.isArray(d)||!d.length)return;d.map(g=>We(g)).forEach(g=>{const ne=a.addSlide(m);ne&&f(m,ne.id,g,{replaceGenerated:o})})}function Q(d=null,{replaceGenerated:o=!1}={}){if(!T.currentSlideId)return;let m=d;if(!m){if(!p.value)return;try{m=JSON.parse(p.value)}catch($e){console.warn("Could not parse AI content:",$e);return}}const z=We(m),g=T.projectId,ne=T.currentSlideId;!g||!ne||f(g,ne,z,{replaceGenerated:o})}function V(){if(p.value){if(ie.value==="deck"){try{const d=JSON.parse(p.value),o=Array.isArray(d)?d:d==null?void 0:d.slides;if(!Array.isArray(o)||!o.length)return;w(o,{replaceGenerated:!0})}catch{return}return}Q()}}async function Ie(){const d=q.value.trim()||"[your topic]",o=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${le.value}" slide about "${d}" using a ${ee.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,m=await H.generate(o,{type:"creativeOptions",topic:d,slideType:le.value});if(m)try{const z=JSON.parse(m.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(z))throw new Error("Options must be an array");U.value=z.slice(0,3).map((g,ne)=>({title:String((g==null?void 0:g.title)||`Option ${ne+1}`),angle:String((g==null?void 0:g.angle)||""),prompt:String((g==null?void 0:g.prompt)||"")})).filter(g=>g.prompt.trim()),U.value.length||(Y.value="No usable creative options were returned. Try generating again.")}catch{Y.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function Pe(d){d!=null&&d.prompt&&(B.value=d.prompt,de.value=!0,j.value="slide",await Ne())}async function Fe(){if(!je.value.trim()||!T.projectId||!T.currentSlideId)return;const d=await H.transformSourceTextToSlideContent(je.value,{topic:q.value,slideType:le.value,description:L.value,layoutMode:ee.value,customPrompt:B.value});if(!d)return;const o=We(d),m=He(Me.value),z={x:Math.max(24,Math.round(m.minX)),y:Math.max(24,Math.round(m.minY))};Me.value.forEach(g=>{a.deleteElement(T.projectId,T.currentSlideId,g.id)}),p.value=JSON.stringify(o,null,2),f(T.projectId,T.currentSlideId,o,{origin:z})}async function De(d=!1){if(!_e.value.trim()&&!Ae.value.trim())return;d||(te.value=[]);const o=await H.generateQuiz(_e.value,O.value,{difficulty:J.value,questionType:re.value,objective:oe.value,customPrompt:Ae.value});if(o)if(d){const m=new Set(te.value.map(g=>g.question)),z=o.filter(g=>!m.has(g.question)).map(g=>({...g,_selected:!0}));te.value=[...te.value,...z]}else te.value=o.map(m=>({...m,_selected:!0}))}async function se(){const d=te.value.filter(m=>m._selected);if(!d.length)return;const o=T.projectId;d.forEach((m,z)=>{const g=a.addSlide(o);g&&(a.addElement(o,g.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:m.question,options:m.options,correctIndex:m.correctIndex,explanation:m.explanation||""}}),a.updateSlide(o,g.id,{title:`Q${z+1}: ${m.question.slice(0,40)}…`}))}),te.value=[]}function Ce(d){te.value.forEach(o=>o._selected=d)}async function Ke(){if(!we.value.trim())return;const d=await H.generateVoiceoverScript(we.value);d&&(p.value=d)}async function Ue(){var m,z;const d=(z=(m=xe.value)==null?void 0:m.content)==null?void 0:z.text;if(!d)return;const o=await H.generateTranslation(d,Se.value);o&&(p.value=o)}async function Be(){!p.value||!xe.value||a.updateElement(T.projectId,T.currentSlideId,xe.value.id,{content:{...xe.value.content,text:p.value}})}const Le=_(""),tt=_(!1);async function pt(){if(Le.value.trim()){tt.value=!0,p.value="Optimizing prompt...";try{let d=Le.value;const o=await H.generateImagePrompt(Le.value);o&&(d=o.replace(/```(json)?\n?/g,"").trim()),p.value="Painting image... this takes about 10-20 seconds. Please wait.";const m=Math.floor(Math.random()*1e6),z=`https://image.pollinations.ai/prompt/${encodeURIComponent(d)}?width=600&height=400&nologo=true&seed=${m}`;await new Promise((g,ne)=>{const $e=new Image;$e.onload=g,$e.onerror=ne,$e.src=z}),a.addElement(T.projectId,T.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:z,objectFit:"cover"}}),p.value="Image added to slide!"}catch{p.value="Failed to generate image. Try a different prompt."}finally{tt.value=!1}}}async function vt(){var o,m;if(!((m=(o=xe.value)==null?void 0:o.content)!=null&&m.text))return;const d=await H.improveText(xe.value.content.text,M.value||"Make it clearer and more engaging");d&&(p.value=d)}async function Tt(){!p.value||!xe.value||a.updateElement(T.projectId,T.currentSlideId,xe.value.id,{content:{...xe.value.content,text:p.value}})}async function Nt(){if(!M.value.trim())return;const d=await H.generate(M.value);d&&(p.value=d)}return(d,o)=>{var m,z,g,ne,$e,Ve;return l(),i("div",Bp,[e("div",_p,[(l(),i(Z,null,pe([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],E=>e("button",{key:E.id,class:X(["ai-mode-btn",C.value===E.id&&"active"]),onClick:Ze=>C.value=E.id},k(E.label),11,Lp)),64))]),e("div",jp,[C.value==="generate"?(l(),i(Z,{key:0},[e("div",Dp,[o[36]||(o[36]=e("label",{class:"form-label"},[K("Topic / Subject "),e("span",{class:"required"},"*")],-1)),ce(e("input",{"onUpdate:modelValue":o[0]||(o[0]=E=>q.value=E),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:wn(Ne,["enter"])},null,544),[[ke,q.value]])]),e("div",qp,[e("button",{class:X(["output-mode-btn",ie.value==="single"&&"active"]),onClick:o[1]||(o[1]=E=>ie.value="single")},"Single Slide",2),e("button",{class:X(["output-mode-btn",ie.value==="deck"&&"active"]),onClick:o[2]||(o[2]=E=>ie.value="deck")},"Slide Deck",2)]),ie.value==="single"?(l(),i("div",Rp,[o[38]||(o[38]=e("label",{class:"form-label"},"Slide Type",-1)),ce(e("select",{"onUpdate:modelValue":o[3]||(o[3]=E=>le.value=E),class:"select"},[...o[37]||(o[37]=[et('<option value="general" data-v-5d0d3401>General</option><option value="intro" data-v-5d0d3401>Introduction</option><option value="overview" data-v-5d0d3401>Overview</option><option value="concept" data-v-5d0d3401>Concept Explanation</option><option value="example" data-v-5d0d3401>Example / Case Study</option><option value="summary" data-v-5d0d3401>Summary</option><option value="callout" data-v-5d0d3401>Key Takeaway</option>',7)])],512),[[At,le.value]])])):W("",!0),ie.value==="single"?(l(),i("div",Fp,[e("div",Up,[o[39]||(o[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",Op,k(he.value.hint),1)]),e("div",Vp,[(l(),i(Z,null,pe(s,E=>e("button",{key:E.id,class:X(["layout-preset-card",ee.value===E.id&&"active"]),onClick:Ze=>ee.value=E.id},[e("span",Gp,k(E.label),1),e("span",Hp,k(E.hint),1)],10,Wp)),64))])])):(l(),i("div",Yp,[o[40]||(o[40]=e("label",{class:"form-label"},"Number of Slides",-1)),ce(e("input",{"onUpdate:modelValue":o[4]||(o[4]=E=>$.value=E),class:"input",type:"number",min:"1",max:"20"},null,512),[[ke,$.value,void 0,{number:!0}]]),o[41]||(o[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),ie.value==="deck"?(l(),i("div",Qp,[e("div",Xp,[o[42]||(o[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",Jp,k(me.value==="mixed"?"AI can vary layout by slide":`All slides use ${he.value.label}`),1)]),e("div",Kp,[e("button",{class:X(["output-mode-btn",me.value==="mixed"&&"active"]),onClick:o[5]||(o[5]=E=>me.value="mixed")},"Mixed Layouts",2),e("button",{class:X(["output-mode-btn",me.value==="single"&&"active"]),onClick:o[6]||(o[6]=E=>me.value="single")},"Consistent Layout",2)])])):W("",!0),ie.value==="deck"&&me.value==="single"?(l(),i("div",Zp,[e("div",ev,[o[43]||(o[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",tv,k(he.value.hint),1)]),e("div",ov,[(l(),i(Z,null,pe(s,E=>e("button",{key:`deck-${E.id}`,class:X(["layout-preset-card",ee.value===E.id&&"active"]),onClick:Ze=>ee.value=E.id},[e("span",lv,k(E.label),1),e("span",iv,k(E.hint),1)],10,nv)),64))])])):W("",!0),e("div",av,[o[44]||(o[44]=e("label",{class:"form-label"},[K("Description "),e("span",{class:"optional"},"(optional)")],-1)),ce(e("textarea",{"onUpdate:modelValue":o[7]||(o[7]=E=>L.value=E),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[ke,L.value]])]),e("div",sv,[e("div",rv,[o[46]||(o[46]=e("label",{class:"form-label"},"AI Prompt",-1)),de.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Te,title:"Reset to auto-generated prompt"},[...o[45]||(o[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),K(" Reset ",-1)])])):(l(),i("span",uv,"auto"))]),ce(e("textarea",{"onUpdate:modelValue":o[8]||(o[8]=E=>B.value=E),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:o[9]||(o[9]=E=>de.value=!0),spellcheck:"false"},null,544),[[ke,B.value]]),o[47]||(o[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),ie.value==="single"?(l(),i("div",dv,[e("button",{class:X(["output-mode-btn",j.value==="slide"&&"active"]),onClick:o[10]||(o[10]=E=>j.value="slide")},"Show on Slide",2),e("button",{class:X(["output-mode-btn",j.value==="options"&&"active"]),onClick:o[11]||(o[11]=E=>j.value="options")},"Creative Options",2)])):W("",!0),ie.value==="single"&&je.value?(l(),i("div",cv,[e("div",pv,[o[48]||(o[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",vv,k(Me.value.length)+" selected",1)]),e("div",fv,k(je.value),1),e("div",mv,[e("button",{class:"btn btn-secondary btn-sm",disabled:I(H).isGenerating,onClick:Fe}," Transform Selection to "+k(he.value.label),9,gv)])])):W("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating||!q.value.trim()&&!B.value.trim()||ie.value==="deck"&&(!$.value||$.value<1||$.value>20),onClick:Ne},[I(H).isGenerating?(l(),i("span",hv)):(l(),i("svg",yv,[...o[49]||(o[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),K(" "+k(I(H).isGenerating?"Generating…":ie.value==="deck"?p.value?`Regenerate ${$.value} Slides`:`Generate ${$.value} Slides`:j.value==="slide"?p.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,bv),ie.value==="single"&&j.value==="options"&&(U.value.length||Y.value)?(l(),i("div",xv,[e("div",wv,[o[50]||(o[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[12]||(o[12]=E=>{U.value=[],Y.value=""})},"Clear")]),Y.value?(l(),i("div",kv,[o[51]||(o[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),K(" "+k(Y.value),1)])):(l(),i("div",Cv,[(l(!0),i(Z,null,pe(U.value,(E,Ze)=>(l(),i("article",{key:Ze,class:"creative-option-card"},[e("h4",$v,k(E.title),1),e("p",Sv,k(E.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:bt=>Pe(E)},"Use This Option",8,Iv)]))),128))]))])):W("",!0)],64)):C.value==="quiz"?(l(),i(Z,{key:1},[e("div",Av,[o[52]||(o[52]=e("label",{class:"form-label"},[K("Quiz Topic "),e("span",{class:"required"},"*")],-1)),ce(e("input",{"onUpdate:modelValue":o[13]||(o[13]=E=>_e.value=E),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:wn(De,["enter"])},null,544),[[ke,_e.value]])]),e("div",Mv,[e("div",Ev,[o[54]||(o[54]=e("label",{class:"form-label"},"Questions",-1)),ce(e("select",{"onUpdate:modelValue":o[14]||(o[14]=E=>O.value=E),class:"select"},[...o[53]||(o[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[At,O.value,void 0,{number:!0}]])]),e("div",Pv,[o[56]||(o[56]=e("label",{class:"form-label"},"Difficulty",-1)),ce(e("select",{"onUpdate:modelValue":o[15]||(o[15]=E=>J.value=E),class:"select"},[...o[55]||(o[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[At,J.value]])])]),e("div",Tv,[o[57]||(o[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Nv,[(l(),i(Z,null,pe([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],E=>e("button",{key:E.id,class:X(["qtype-btn",re.value===E.id&&"active"]),onClick:Ze=>re.value=E.id},[e("span",Bv,k(E.icon),1),e("span",null,k(E.label),1)],10,zv)),64))])]),e("div",_v,[o[58]||(o[58]=e("label",{class:"form-label"},[K("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),ce(e("input",{"onUpdate:modelValue":o[16]||(o[16]=E=>oe.value=E),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[ke,oe.value]])]),e("div",Lv,[e("div",jv,[o[60]||(o[60]=e("label",{class:"form-label"},"AI Prompt",-1)),ye.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:A,title:"Reset to auto-generated prompt"},[...o[59]||(o[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),K(" Reset ",-1)])])):(l(),i("span",Dv,"auto"))]),ce(e("textarea",{"onUpdate:modelValue":o[17]||(o[17]=E=>Ae.value=E),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:o[18]||(o[18]=E=>ye.value=!0),spellcheck:"false"},null,544),[[ke,Ae.value]]),o[61]||(o[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating||!_e.value.trim()&&!Ae.value.trim(),onClick:o[19]||(o[19]=E=>De(!1))},[I(H).isGenerating?(l(),i("span",Rv)):(l(),i("svg",Fv,[...o[62]||(o[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),K(" "+k(I(H).isGenerating?"Generating…":`Generate ${O.value} Questions`),1)],8,qv),te.value.length?(l(),i("div",Uv,[e("div",Ov,[e("span",Vv,k(te.value.length)+" Questions",1),e("div",Wv,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[20]||(o[20]=E=>Ce(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:o[21]||(o[21]=E=>Ce(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:o[22]||(o[22]=E=>te.value=[])},"Clear")])]),e("div",Gv,[e("button",{class:"btn btn-secondary regen-btn",disabled:I(H).isGenerating,onClick:o[23]||(o[23]=E=>De(!1)),title:"Replace all questions with a new set"},[I(H).isGenerating?(l(),i("span",Yv)):(l(),i("svg",Qv,[...o[63]||(o[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),o[64]||(o[64]=K(" Regenerate ",-1))],8,Hv),e("button",{class:"btn btn-ghost regen-btn",disabled:I(H).isGenerating,onClick:o[24]||(o[24]=E=>De(!0)),title:"Generate more and append to current list"},[...o[65]||(o[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),K(" Add More ",-1)])],8,Xv)]),(l(!0),i(Z,null,pe(te.value,(E,Ze)=>(l(),i("div",{key:Ze,class:X(["quiz-card",{deselected:!E._selected}])},[e("div",Jv,[e("label",Kv,[ce(e("input",{type:"checkbox","onUpdate:modelValue":bt=>E._selected=bt},null,8,Zv),[[Et,E._selected]]),e("span",e1,"Q"+k(Ze+1),1)]),e("div",t1,[e("span",{class:X(["badge difficulty-badge",E.difficulty])},k(E.difficulty),3),e("span",o1,k(E.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",n1,k(E.question),1),e("div",l1,[(l(!0),i(Z,null,pe(E.options,(bt,ft)=>(l(),i("div",{key:ft,class:X(["q-option",ft===E.correctIndex&&"correct"])},[e("span",i1,k(["A","B","C","D"][ft]),1),e("span",null,k(bt),1),ft===E.correctIndex?(l(),i("svg",a1,[...o[66]||(o[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):W("",!0)],2))),128))]),E.explanation?(l(),i("div",s1,[o[67]||(o[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),K(" "+k(E.explanation),1)])):W("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!te.value.filter(E=>E._selected).length,onClick:se},[o[68]||(o[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),K(" Add "+k(te.value.filter(E=>E._selected).length)+" Selected as Quiz Slides ",1)],8,r1)])):W("",!0)],64)):C.value==="voiceover"?(l(),i(Z,{key:2},[e("div",u1,[o[69]||(o[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),ce(e("textarea",{"onUpdate:modelValue":o[25]||(o[25]=E=>we.value=E),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[ke,we.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating,onClick:Ke},[I(H).isGenerating?(l(),i("span",c1)):W("",!0),K(" "+k(I(H).isGenerating?"Generating…":"Generate Script"),1)],8,d1)],64)):C.value==="improve"?(l(),i(Z,{key:3},[(z=(m=xe.value)==null?void 0:m.content)!=null&&z.text?(l(),i("div",p1,[o[70]||(o[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",v1,k(xe.value.content.text.slice(0,120))+k(xe.value.content.text.length>120?"…":""),1)])):(l(),i("p",f1,"Select a text element on the canvas to improve it.")),e("div",m1,[o[71]||(o[71]=e("label",{class:"form-label"},"Instruction",-1)),ce(e("input",{"onUpdate:modelValue":o[26]||(o[26]=E=>M.value=E),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[ke,M.value]])]),o[72]||(o[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ce(e("textarea",{"onUpdate:modelValue":o[27]||(o[27]=E=>M.value=E),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[ke,M.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating||!xe.value&&!M.value,onClick:o[28]||(o[28]=E=>xe.value?vt():Nt())},[I(H).isGenerating?(l(),i("span",b1)):W("",!0),K(" "+k(I(H).isGenerating?"Processing…":"Generate"),1)],8,g1)],64)):C.value==="translate"?(l(),i(Z,{key:4},[(ne=(g=xe.value)==null?void 0:g.content)!=null&&ne.text?(l(),i("div",h1,[o[73]||(o[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",y1,k(xe.value.content.text.slice(0,120))+k(xe.value.content.text.length>120?"…":""),1)])):(l(),i("p",x1,"Select a text element on the canvas to translate it.")),e("div",w1,[o[75]||(o[75]=e("label",{class:"form-label"},"Target Language",-1)),ce(e("select",{"onUpdate:modelValue":o[29]||(o[29]=E=>Se.value=E),class:"select"},[...o[74]||(o[74]=[et('<option value="Spanish" data-v-5d0d3401>Spanish</option><option value="French" data-v-5d0d3401>French</option><option value="German" data-v-5d0d3401>German</option><option value="Italian" data-v-5d0d3401>Italian</option><option value="Portuguese" data-v-5d0d3401>Portuguese</option><option value="Chinese (Simplified)" data-v-5d0d3401>Chinese (Simplified)</option><option value="Japanese" data-v-5d0d3401>Japanese</option><option value="Arabic" data-v-5d0d3401>Arabic</option>',8)])],512),[[At,Se.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:I(H).isGenerating||!((Ve=($e=xe.value)==null?void 0:$e.content)!=null&&Ve.text),onClick:Ue},[I(H).isGenerating?(l(),i("span",C1)):W("",!0),K(" "+k(I(H).isGenerating?"Translating…":"Translate Text"),1)],8,k1),p.value?(l(),i("div",$1,[e("div",S1,[o[76]||(o[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",I1,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[30]||(o[30]=E=>d.navigator.clipboard.writeText(p.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Be,disabled:!xe.value},"Apply",8,A1)])]),e("div",M1,k(p.value),1)])):W("",!0)],64)):C.value==="image"?(l(),i(Z,{key:5},[o[79]||(o[79]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",E1,[o[77]||(o[77]=e("label",{class:"form-label"},"Image Description",-1)),ce(e("textarea",{"onUpdate:modelValue":o[31]||(o[31]=E=>Le.value=E),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[ke,Le.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:tt.value||I(H).isGenerating||!Le.value,onClick:pt},[tt.value||I(H).isGenerating?(l(),i("span",T1)):W("",!0),K(" "+k(tt.value||I(H).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,P1),p.value?(l(),i("div",N1,[o[78]||(o[78]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",z1,k(p.value),1)])):W("",!0)],64)):C.value==="settings"?(l(),i("div",B1,[e("div",_1,[o[81]||(o[81]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:I(H).apiProvider,class:"select",onChange:o[32]||(o[32]=E=>I(H).setProvider(E.target.value))},[...o[80]||(o[80]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,L1)]),e("div",j1,[o[82]||(o[82]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:I(H).apiKey,class:"input",placeholder:"sk-…",onChange:o[33]||(o[33]=E=>I(H).setApiKey(E.target.value))},null,40,D1),o[83]||(o[83]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),I(H).apiKey?W("",!0):(l(),i("div",q1,[...o[84]||(o[84]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),K(" Running in ",-1),e("strong",null,"demo mode",-1),K(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):W("",!0),p.value&&C.value!=="settings"&&C.value!=="quiz"?(l(),i("div",R1,[e("div",F1,[o[85]||(o[85]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[34]||(o[34]=E=>p.value="")},"Clear")]),e("pre",U1,k(p.value),1),e("div",O1,[C.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:V},k(ie.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):W("",!0),C.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:I(H).isGenerating,onClick:Ne},[...o[86]||(o[86]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),K(" Regenerate ",-1)])],8,V1)):W("",!0),C.value==="improve"&&xe.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Tt}," Apply to Element ")):W("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:o[35]||(o[35]=E=>{var Ze;return(Ze=d.navigator.clipboard)==null?void 0:Ze.writeText(p.value)})}," Copy ")])])):W("",!0),I(H).lastError?(l(),i("div",W1,[o[87]||(o[87]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),K(" "+k(I(H).lastError),1)])):W("",!0)])])}}},H1=Qe(G1,[["__scopeId","data-v-5d0d3401"]]),Y1={class:"theme-manager"},Q1={class:"panel-section"},X1={class:"presets-grid"},J1=["title","onClick"],K1={class:"preset-preview"},Z1={class:"preset-name"},ef={class:"panel-section"},tf={class:"theme-fields"},of={class:"form-label"},nf={class:"color-row"},lf=["value","onInput"],af=["value","onChange"],sf={class:"panel-section"},rf={class:"theme-field"},uf=["value","placeholder"],df={class:"chart-palette-preview"},cf={class:"panel-section"},pf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vf=["value"],ff=["value"],mf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gf=["value"],bf=["value"],hf={class:"form-group"},yf=["value"],xf={class:"panel-section"},wf={class:"tp-chart-row"},kf={key:0,class:"apply-message success"},Cf={key:1,class:"apply-message error"},$f={__name:"ThemeManager",setup(S){const s=nt(),r=lt(),c=P(()=>r.getProject(s.projectId)),v=P(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),h=P(()=>kn(v.value)),y=_(""),b=_("");function D(a){r.updateProject(s.projectId,{theme:{...v.value,...a}})}const ge=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],ue=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function G(a){D(a)}function be(a,C){const M=a.content||{};return a.type==="text"?{content:{...M,fontFamily:C.fontFamily||M.fontFamily,color:C.textColor||M.color}}:a.type==="heading"?{content:{...M,fontFamily:C.headingFont||C.fontFamily||M.fontFamily,color:C.textColor||M.color}}:a.type==="shape"?{content:{...M,fillColor:C.secondaryColor||M.fillColor}}:a.type==="hotspot"?{content:{...M,bgColor:C.primaryColor||M.bgColor}}:a.type==="button"?{content:{...M,bgColor:C.primaryColor||M.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:C.fontFamily||M.fontFamily}}:a.type==="quiz"?{content:{...M,cardBgColor:C.bgColor||M.cardBgColor,questionColor:C.textColor||M.questionColor,accentColor:C.primaryColor||M.accentColor}}:a.type==="chart"?{content:{...M,...Pn(C)}}:null}function H(){D({chartPalette:""})}function T(){y.value="",b.value="";const a=s.projectId,C=c.value,M=v.value;if(!a||!C){b.value="No active project to apply theme.";return}const q=C.slides||[];let p=0;q.forEach(O=>{(O.backgroundType||"color")==="color"&&r.updateSlide(a,O.id,{backgroundType:"color",background:M.bgColor||O.background||"#ffffff"}),(O.elements||[]).forEach(le=>{const Se=be(le,M);Se&&(r.updateElement(a,O.id,le.id,Se),p+=1)})}),y.value=`Applied theme to ${q.length} slide${q.length===1?"":"s"} and ${p} element${p===1?"":"s"}.`}return(a,C)=>(l(),i("div",Y1,[e("div",Q1,[C[4]||(C[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",X1,[(l(),i(Z,null,pe(ge,M=>e("div",{key:M.name,class:"preset-card",title:M.name,onClick:q=>G(M)},[e("div",K1,[e("div",{class:"pp-header",style:fe({background:M.primaryColor})},null,4),e("div",{class:"pp-body",style:fe({background:M.bgColor})},[e("div",{class:"pp-line",style:fe({background:M.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:fe({background:M.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:fe({background:M.secondaryColor})},null,4)]),e("span",Z1,k(M.name),1)],8,J1)),64))])]),e("div",ef,[C[5]||(C[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",tf,[(l(),i(Z,null,pe({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(M,q)=>e("div",{class:"theme-field",key:q},[e("label",of,k(M),1),e("div",nf,[e("input",{type:"color",value:v.value[q]||"#ffffff",class:"color-input-native",onInput:p=>D({[q]:p.target.value})},null,40,lf),e("input",{value:v.value[q]||"",class:"input",onChange:p=>D({[q]:p.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,af)])])),64))])]),e("div",sf,[C[8]||(C[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",rf,[C[6]||(C[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:v.value.chartPalette||"",class:"input",placeholder:I(ll)(I(kn)(v.value)),onChange:C[0]||(C[0]=M=>D({chartPalette:M.target.value}))},null,40,uf),e("div",df,[(l(!0),i(Z,null,pe(h.value,(M,q)=>(l(),i("span",{key:`theme-chart-${q}`,class:"chart-palette-dot",style:fe({background:M})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:H},"Use auto palette")]),C[7]||(C[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",cf,[C[12]||(C[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",pf,[C[9]||(C[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:v.value.headingFont||"Inter, sans-serif",class:"select",onChange:C[1]||(C[1]=M=>D({headingFont:M.target.value}))},[(l(),i(Z,null,pe(ue,M=>e("option",{key:M.value,value:M.value},k(M.label),9,ff)),64))],40,vf)]),e("div",mf,[C[10]||(C[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:v.value.fontFamily||"Inter, sans-serif",class:"select",onChange:C[2]||(C[2]=M=>D({fontFamily:M.target.value}))},[(l(),i(Z,null,pe(ue,M=>e("option",{key:M.value,value:M.value},k(M.label),9,bf)),64))],40,gf)]),e("div",hf,[C[11]||(C[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:v.value.fontSize||16,class:"input",onChange:C[3]||(C[3]=M=>D({fontSize:+M.target.value}))},null,40,yf)])]),e("div",xf,[C[13]||(C[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:fe({background:v.value.bgColor||"#fff",fontFamily:v.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:fe({color:v.value.textColor,fontFamily:v.value.headingFont||v.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:fe({color:v.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:fe({background:v.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:fe({background:v.value.secondaryColor})},"Badge",4),e("div",wf,[(l(!0),i(Z,null,pe(h.value.slice(0,5),(M,q)=>(l(),i("span",{key:`preview-chart-${q}`,class:"tp-chart-bar",style:fe({background:M,height:`${22+q*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:T}," Apply Theme to Slides "),y.value?(l(),i("p",kf,k(y.value),1)):W("",!0),b.value?(l(),i("p",Cf,k(b.value),1)):W("",!0)])]))}},Sf=Qe($f,[["__scopeId","data-v-da2b0ce4"]]),If={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Af={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},Mf={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Ef={class:"export-tabs tabs",style:{"overflow-x":"auto"}},Pf={class:"export-content"},Tf={class:"export-options",style:{"margin-bottom":"20px"}},Nf={class:"form-group"},zf={class:"export-meta"},Bf={class:"meta-item"},_f={class:"meta-item"},Lf={class:"meta-item"},jf={class:"export-options",style:{"margin-bottom":"20px"}},Df={class:"form-group"},qf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Rf={class:"export-options",style:{"margin-bottom":"20px"}},Ff={class:"form-group"},Uf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Of={class:"coming-soon"},Vf={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},Wf={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},Gf={key:1,class:"export-success"},Hf={__name:"ExportModal",setup(S){const s=nt(),r=lt(),c=Tn(),v=P(()=>r.getProject(s.projectId)),h=_("json"),y=_(""),b=_(""),D=_(!0);Je(v,q=>{q&&!b.value&&(b.value=q.name||"presentation")},{immediate:!0});function ge(){const q=r.exportProject(s.projectId);if(!q)return;const p=new Blob([q],{type:"application/json"}),O=URL.createObjectURL(p),le=document.createElement("a");le.href=O,le.download=`${b.value||"project"}.mediasurf.json`,le.click(),URL.revokeObjectURL(O),y.value="success",setTimeout(()=>y.value="",3e3)}function ue(q,p="presentation"){return String(q).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||p}function G(q){return new Promise((p,O)=>{const le=new FileReader;le.onloadend=()=>p(le.result),le.onerror=()=>O(le.error),le.readAsDataURL(q)})}function be(q,p,O="html"){const le=Pt(p);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${le.width}px;
  --lf-slide-height: ${le.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(q==null?void 0:q.fontFamily)||"Inter, sans-serif"};
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
  color: ${(q==null?void 0:q.textColor)||"#1a1a2e"};
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
  display: ${(p==null?void 0:p.showNavControls)===!1?"none":"flex"};
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
  display: ${(p==null?void 0:p.showNavControls)===!1?"none":"flex"};
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
  display: ${(p==null?void 0:p.showProgress)===!1?"none":"block"};
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
`}async function T(){return M("html")}async function a(){return M("iframe")}async function C(){return M("pdf")}async function M(q="html"){var _e,J,re;const p=v.value;if(!p)return;y.value="processing";const O=q==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(q==="pdf"&&!O){y.value="error",setTimeout(()=>y.value="",3e3);return}const le=q==="pdf"?null:new al,Se=le?le.folder("assets"):null;let we=0;async function L(oe,te="media"){if((!oe||oe.startsWith("data:")||oe.startsWith("http://localhost")||oe.startsWith("blob:"))&&oe.startsWith("data:"))return oe;try{const ye=await(await fetch(oe)).blob();if(q==="pdf")return await G(ye);let N="bin";const A=ye.type;if(A.includes("image/png")?N="png":A.includes("image/jpeg")?N="jpg":A.includes("image/gif")?N="gif":A.includes("image/svg")?N="svg":A.includes("image/webp")?N="webp":A.includes("video/mp4")?N="mp4":A.includes("audio/mpeg")&&(N="mp3"),N==="bin"){const x=oe.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);x&&(N=x[1])}we++;const R=`${te}_${we}.${N}`;return Se.file(R,ye),`assets/${R}`}catch(Ae){return console.warn("Could not fetch asset:",oe,Ae),oe}}const B=JSON.parse(JSON.stringify([...p.slides||[]])).sort((oe,te)=>(oe.order??0)-(te.order??0));if(D.value)for(const oe of B){oe.backgroundType==="image"&&oe.backgroundImage&&(oe.backgroundImage=await L(oe.backgroundImage,"bg"));for(const te of oe.elements||[])te.type==="image"&&((_e=te.content)!=null&&_e.src)&&(te.content.src=await L(te.content.src,"img")),te.type==="video"&&((J=te.content)!=null&&J.src)&&!te.content.src.includes("youtube")&&!te.content.src.includes("youtu.be")&&(te.content.src=await L(te.content.src,"vid")),te.type==="audio"&&((re=te.content)!=null&&re.src)&&(te.content.src=await L(te.content.src,"aud"))}const de=ue(b.value||p.name||"presentation"),ie={name:p.name,theme:p.theme||{},settings:p.settings||{},slides:B},ee=JSON.stringify(ie).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),me=be(p.theme,p.settings,q),$=H(q),j=`<script id="lf-data" type="application/json">${ee}<\/script>`,Y=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${de}</title>
${q==="pdf"?`<style>${me}</style>`:'<link rel="stylesheet" href="style.css">'}
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
  <span class="nav-counter" id="counter">1 / ${B.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${j}
${q!=="pdf"?'<script src="script.js"><\/script>':`<script>${$}<\/script>`}
</body>
</html>`;if(q==="pdf"){O.document.open(),O.document.write(Y),O.document.close(),y.value="success",setTimeout(()=>y.value="",3e3);return}le.file("index.html",Y),le.file("style.css",me),le.file("script.js",$);const he=await le.generateAsync({type:"blob"}),Re=URL.createObjectURL(he),Te=document.createElement("a");Te.href=Re,Te.download=`${de}.zip`,Te.click(),URL.revokeObjectURL(Re),y.value="success",setTimeout(()=>y.value="",3e3)}return(q,p)=>(l(),Ye(An,{title:"Export Project",size:"md",onClose:p[13]||(p[13]=O=>I(s).showExportModal=!1)},{footer:rt(()=>[e("button",{class:"btn btn-secondary",onClick:p[12]||(p[12]=O=>I(s).showExportModal=!1)},"Close")]),default:rt(()=>{var O,le,Se,we,L;return[I(c).user?(l(),i(Z,{key:1},[e("div",Ef,[e("button",{class:X(["tab-btn",h.value==="json"&&"active"]),onClick:p[2]||(p[2]=B=>h.value="json")},"JSON",2),e("button",{class:X(["tab-btn",h.value==="html"&&"active"]),onClick:p[3]||(p[3]=B=>h.value="html")},"HTML",2),e("button",{class:X(["tab-btn",h.value==="iframe"&&"active"]),onClick:p[4]||(p[4]=B=>h.value="iframe")},"Iframe",2),e("button",{class:X(["tab-btn",h.value==="pdf"&&"active"]),onClick:p[5]||(p[5]=B=>h.value="pdf")},"PDF",2),e("button",{class:X(["tab-btn",h.value==="scorm"&&"active"]),onClick:p[6]||(p[6]=B=>h.value="scorm")},"SCORM",2)]),e("div",Pf,[h.value==="json"?(l(),i(Z,{key:0},[p[24]||(p[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",Tf,[e("div",Nf,[p[19]||(p[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ce(e("input",{type:"text","onUpdate:modelValue":p[7]||(p[7]=B=>b.value=B),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ke,b.value]])])]),e("div",zf,[e("div",Bf,[p[20]||(p[20]=e("span",null,"Project",-1)),e("strong",null,k((O=v.value)==null?void 0:O.name),1)]),e("div",_f,[p[21]||(p[21]=e("span",null,"Slides",-1)),e("strong",null,k(((Se=(le=v.value)==null?void 0:le.slides)==null?void 0:Se.length)||0),1)]),e("div",Lf,[p[22]||(p[22]=e("span",null,"Elements",-1)),e("strong",null,k(((L=(we=v.value)==null?void 0:we.slides)==null?void 0:L.reduce((B,de)=>{var ie;return B+(((ie=de.elements)==null?void 0:ie.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:ge},[...p[23]||(p[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Download JSON ",-1)])])],64)):h.value==="html"?(l(),i(Z,{key:1},[p[28]||(p[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",jf,[e("div",Df,[p[25]||(p[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ce(e("input",{type:"text","onUpdate:modelValue":p[8]||(p[8]=B=>b.value=B),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ke,b.value]])]),e("label",qf,[ce(e("input",{type:"checkbox","onUpdate:modelValue":p[9]||(p[9]=B=>D.value=B)},null,512),[[Et,D.value]]),p[26]||(p[26]=K(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),p[29]||(p[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:T},[...p[27]||(p[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Download HTML ",-1)])])],64)):h.value==="iframe"?(l(),i(Z,{key:2},[p[33]||(p[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Rf,[e("div",Ff,[p[30]||(p[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ce(e("input",{type:"text","onUpdate:modelValue":p[10]||(p[10]=B=>b.value=B),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ke,b.value]])]),e("label",Uf,[ce(e("input",{type:"checkbox","onUpdate:modelValue":p[11]||(p[11]=B=>D.value=B)},null,512),[[Et,D.value]]),p[31]||(p[31]=K(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...p[32]||(p[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Download Iframe Zip ",-1)])])],64)):h.value==="pdf"?(l(),i(Z,{key:3},[p[35]||(p[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),p[36]||(p[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:C},[...p[34]||(p[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Generate PDF ",-1)])])],64)):h.value==="scorm"?(l(),i(Z,{key:4},[p[40]||(p[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Of,[(l(),i("svg",Vf,[...p[37]||(p[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),p[38]||(p[38]=e("h4",null,"Coming Soon",-1)),p[39]||(p[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):W("",!0),gt(Mt,{name:"fade"},{default:rt(()=>[y.value==="processing"?(l(),i("div",Wf,[...p[41]||(p[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),K(" Generating package... Please wait. ",-1)])])):y.value==="success"?(l(),i("div",Gf,[...p[42]||(p[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),K(" Export successful! Check your downloads folder. ",-1)])])):W("",!0)]),_:1})])],64)):(l(),i("div",If,[(l(),i("svg",Af,[...p[14]||(p[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),p[17]||(p[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),p[18]||(p[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",Mf,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:p[0]||(p[0]=B=>I(c).loginWithGoogle())},[...p[15]||(p[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),K(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:p[1]||(p[1]=B=>I(c).loginWithMicrosoft())},[...p[16]||(p[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),K(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Yf=Qe(Hf,[["__scopeId","data-v-1a8a69d1"]]),Qf={key:0,class:"editor-view"},Xf={class:"editor-topbar"},Jf={class:"topbar-left"},Kf={class:"project-name-wrap"},Zf=["value"],em={class:"save-label"},tm={class:"topbar-center"},om={key:0,class:"slide-position"},nm={class:"topbar-right"},lm={class:"editor-body"},im={class:"authoring-rail"},am=["onClick","data-tooltip"],sm={key:0,class:"rail-icon"},rm={key:1,class:"rail-icon"},um={key:2,class:"rail-icon"},dm={key:3,class:"rail-icon"},cm={key:4,class:"rail-icon"},pm={key:5,class:"rail-icon"},vm={key:6,class:"rail-icon"},fm={key:7,class:"rail-icon"},mm={key:8,class:"rail-icon"},gm={key:9,class:"rail-icon"},bm={class:"right-panel"},hm={class:"panel-tabs"},ym=["onClick","data-tooltip"],xm={class:"tab-icon"},wm={class:"tab-label"},km={class:"panel-content"},Cm={key:1,class:"editor-not-found"},$m={__name:"EditorView",setup(S){const s=Vn(),r=On(),c=nt(),v=lt(),h=Tn(),y=P(()=>s.params.id),b=P(()=>v.getProject(y.value)),D=P(()=>Pt(b.value)),ge=P(()=>{var N;return[...((N=b.value)==null?void 0:N.slides)||[]].sort((A,R)=>A.order-R.order)}),ue=_(null),G=_(!1),be=_("deck"),{aiStore:H,showAIModal:T,aiMode:a,aiTopic:C,aiContext:M,aiProjectName:q,aiSlideCount:p,aiQuestionCount:O,aiDifficulty:le,aiQuestionType:Se,aiCreationError:we,aiSubmitting:L,aiProjectNamePlaceholder:B,aiPrimaryActionLabel:de,openAICreationModal:ie,createAIProject:ee}=Gn({onRequireAuth:()=>r.push({name:"dashboard"})});let me=!1,$=null;Je(()=>b.value,N=>{if(N){if(me){me=!1;return}$&&clearTimeout($),$=setTimeout(()=>{c.pushHistory(N)},600)}},{deep:!0}),Je(()=>h.isAuthReady,async N=>{var A;if(N){if((A=h.user)!=null&&A.uid&&await v.ensureRemoteProjectsLoaded(),!b.value){r.push({name:"dashboard"});return}c.setProject(y.value),ge.value.length>0&&c.setCurrentSlide(ge.value[0].id),c.pushHistory(b.value)}},{immediate:!0});const j=P(()=>{const N=b.value;return N?`Saved ${new Date(N.updatedAt).toLocaleTimeString()}`:""}),U=P(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});sl({undo:()=>{if(c.canUndo()){const N=c.undo();N&&(me=!0,v.updateProject(y.value,N))}},redo:()=>{if(c.canRedo()){const N=c.redo();N&&(me=!0,v.updateProject(y.value,N))}},delete:()=>{c.selectedElementId&&(v.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var A,R,x,xe;const N=(xe=(x=(R=(A=b.value)==null?void 0:A.slides)==null?void 0:R.find(Me=>Me.id===c.currentSlideId))==null?void 0:x.elements)==null?void 0:xe.find(Me=>Me.id===c.selectedElementId);N&&c.setClipboard(N)},paste:()=>{if(c.clipboard&&c.currentSlideId){const N=c.clipboard;v.addElement(c.projectId,c.currentSlideId,N.type,{...N,x:N.x+20,y:N.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const N=v.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);N&&c.selectElement(N.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(N,A)=>{var x,xe,Me,je;if(!c.selectedElementId)return;const R=(je=(Me=(xe=(x=b.value)==null?void 0:x.slides)==null?void 0:xe.find(Ne=>Ne.id===c.currentSlideId))==null?void 0:Me.elements)==null?void 0:je.find(Ne=>Ne.id===c.selectedElementId);R&&v.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:R.x+N,y:R.y+A})},selectAll:()=>{var A,R,x;(((x=(R=(A=b.value)==null?void 0:A.slides)==null?void 0:R.find(xe=>xe.id===c.currentSlideId))==null?void 0:x.elements)||[]).forEach((xe,Me)=>c.selectElement(xe.id,Me>0))}});function Y(){r.push({name:"dashboard"})}function he(){r.push({name:"preview",params:{id:y.value},query:{from:"editor"}})}function Re(N="deck"){be.value=N,G.value=!0}function Te(){G.value=!1,ie(be.value)}function _e(N,A="Image"){if(!c.projectId||!c.currentSlideId||!N)return;const R=new Image;R.onload=()=>{const Me=Math.min(420/R.width,280/R.height,1),je=Math.max(120,Math.round(R.width*Me)),Ne=Math.max(80,Math.round(R.height*Me)),We=Math.max(24,Math.round((D.value.width-je)/2)),ct=Math.max(24,Math.round((D.value.height-Ne)/2)),Xe=v.addElement(c.projectId,c.currentSlideId,"image",{x:We,y:ct,width:je,height:Ne,content:{src:N,alt:A,objectFit:"cover"}});Xe&&(c.selectElement(Xe.id),c.setRightPanel("properties"),c.setActiveTool("select"))},R.src=N}function J(N){const[A]=Array.from(N.target.files||[]);if(!A||!A.type.startsWith("image/"))return;const R=new FileReader;R.onload=()=>_e(String(R.result||""),A.name),R.readAsDataURL(A),N.target.value=""}function re(){var N;(N=ue.value)==null||N.click()}const oe=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function te(N){if(N==="text"){c.setActiveTool("text");return}if(N==="blocks"){c.toggleSlidePanel("blocks");return}if(N==="resources"){c.setActiveTool("image");return}if(N==="interactive-elements"){c.setActiveTool("hotspot");return}if(N==="interactive-questions"){c.setActiveTool("quiz");return}if(N==="widgets"){c.setActiveTool("shape");return}if(N==="insert"){re();return}if(N==="style"){c.setRightPanel("properties");return}if(N==="background"){c.clearSelection(),c.setRightPanel("properties");return}N==="pages"&&c.toggleSlidePanel("slides")}function Ae(N){return N==="text"?["text","heading"].includes(c.activeTool):N==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":N==="resources"?c.activeTool==="image":N==="interactive-elements"?["hotspot","button"].includes(c.activeTool):N==="interactive-questions"?c.activeTool==="quiz":N==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):N==="insert"?!1:N==="style"||N==="background"?c.rightPanelTab==="properties":N==="pages"?c.showSlidePanel:!1}function ye(){Qn({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return Je(()=>b.value,N=>{N&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{ye()},100)},{immediate:!0}),(N,A)=>b.value?(l(),i("div",Qf,[e("input",{ref_key:"imageInputRef",ref:ue,type:"file",accept:"image/*",class:"sr-only",onChange:J},null,544),e("header",Xf,[e("div",Jf,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:Y,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...A[14]||(A[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),K(" Dashboard ",-1)])]),e("div",Kf,[e("input",{value:b.value.name,class:"project-name-input",onChange:A[0]||(A[0]=R=>I(v).updateProject(y.value,{name:R.target.value}))},null,40,Zf)]),e("span",em,k(j.value),1)]),e("div",tm,[I(c).currentSlideId?(l(),i("span",om," Slide "+k(ge.value.findIndex(R=>R.id===I(c).currentSlideId)+1)+" of "+k(ge.value.length),1)):W("",!0)]),e("div",nm,[e("button",{class:"btn btn-ghost btn-sm",onClick:ye,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...A[15]||(A[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),K(" Help ",-1)])]),e("button",{class:X(["btn btn-ghost btn-sm",I(c).showAIPanel&&"active-btn"]),onClick:A[1]||(A[1]=R=>{I(c).showAIPanel=!I(c).showAIPanel,I(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...A[16]||(A[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),K(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:A[2]||(A[2]=R=>{I(c).showThemeManager=!I(c).showThemeManager,I(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...A[17]||(A[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),K(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:he,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...A[18]||(A[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),K(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:A[3]||(A[3]=R=>I(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...A[19]||(A[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),K(" Export ",-1)])])])]),gt(_c,{onOpenAiProject:Re}),e("div",lm,[e("aside",im,[(l(),i(Z,null,pe(oe,R=>e("button",{key:R.id,class:X(["rail-option",Ae(R.id)&&"active"]),onClick:x=>te(R.id),"data-tooltip":R.label,"data-tooltip-position":"right"},[R.id==="text"?(l(),i("span",sm,"T")):R.id==="blocks"?(l(),i("span",rm,[...A[20]||(A[20]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-902e6311></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-902e6311></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-902e6311></rect></svg>',1)])])):R.id==="resources"?(l(),i("span",um,[...A[21]||(A[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):R.id==="interactive-elements"?(l(),i("span",dm,[...A[22]||(A[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):R.id==="interactive-questions"?(l(),i("span",cm,[...A[23]||(A[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):R.id==="widgets"?(l(),i("span",pm,[...A[24]||(A[24]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-902e6311><rect x="3" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="3" width="7" height="7" data-v-902e6311></rect><rect x="14" y="14" width="7" height="7" data-v-902e6311></rect><rect x="3" y="14" width="7" height="7" data-v-902e6311></rect></svg>',1)])])):R.id==="insert"?(l(),i("span",vm,[...A[25]||(A[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):R.id==="style"?(l(),i("span",fm,[...A[26]||(A[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):R.id==="background"?(l(),i("span",mm,[...A[27]||(A[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):R.id==="pages"?(l(),i("span",gm,[...A[28]||(A[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):W("",!0),K(" "+k(R.label),1)],10,am)),64))]),gt(Mt,{name:"side-panel-slide"},{default:rt(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="slides"?(l(),Ye(kl,{key:0})):W("",!0)]),_:1}),gt(Mt,{name:"side-panel-slide"},{default:rt(()=>[I(c).showSlidePanel&&I(c).leftPanelTab==="blocks"?(l(),Ye(Xl,{key:0})):W("",!0)]),_:1}),gt(zp),e("aside",bm,[e("div",hm,[(l(),i(Z,null,pe([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],R=>e("button",{key:R.id,class:X(["panel-tab",I(c).rightPanelTab===R.id&&"active"]),onClick:x=>I(c).setRightPanel(R.id),"data-tooltip":`Open ${R.label}`,"data-tooltip-position":"bottom"},[e("span",xm,k(R.icon),1),e("span",wm,k(R.label),1)],10,ym)),64))]),e("div",km,[gt(Mt,{name:"editor-panel-switch",mode:"out-in"},{default:rt(()=>[(l(),i("div",{key:U.value,class:"panel-content-view"},[I(c).rightPanelTab==="properties"?(l(),Ye(mc,{key:0})):I(c).rightPanelTab==="layers"?(l(),Ye(bi,{key:1})):I(c).rightPanelTab==="ai"?(l(),Ye(H1,{key:2})):I(c).rightPanelTab==="theme"?(l(),Ye(Sf,{key:3})):W("",!0)]))]),_:1})])])]),I(c).showExportModal?(l(),Ye(Yf,{key:0})):W("",!0),G.value?(l(),Ye(Hn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:A[4]||(A[4]=R=>G.value=!1),onConfirm:Te})):W("",!0),I(T)?(l(),Ye(Yn,{key:2,mode:I(a),topic:I(C),context:I(M),"project-name":I(q),"slide-count":I(p),"question-count":I(O),difficulty:I(le),"question-type":I(Se),"project-name-placeholder":I(B),"primary-action-label":I(de),"creation-error":I(we),"is-submitting":I(L),"is-generating":I(H).isGenerating,"has-api-key":!!I(H).apiKey,onClose:A[5]||(A[5]=R=>T.value=!1),onCreate:I(ee),"onUpdate:mode":A[6]||(A[6]=R=>a.value=R),"onUpdate:topic":A[7]||(A[7]=R=>C.value=R),"onUpdate:context":A[8]||(A[8]=R=>M.value=R),"onUpdate:projectName":A[9]||(A[9]=R=>q.value=R),"onUpdate:slideCount":A[10]||(A[10]=R=>p.value=R),"onUpdate:questionCount":A[11]||(A[11]=R=>O.value=R),"onUpdate:difficulty":A[12]||(A[12]=R=>le.value=R),"onUpdate:questionType":A[13]||(A[13]=R=>Se.value=R)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):W("",!0)])):(l(),i("div",Cm,[A[29]||(A[29]=e("h2",null,"Project not found",-1)),A[30]||(A[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:Y},"Go to Dashboard")]))}},Nm=Qe($m,[["__scopeId","data-v-902e6311"]]);export{Nm as default};
