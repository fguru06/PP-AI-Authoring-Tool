import{K as wn,P as kn,v as l,F as i,B as e,C as $,H as Z,I as ce,E as ze,D as K,u as A,Q as pe,M as et,G,L as X,q as Je,R as Cn,f as T,r as L,N as de,O as ye,S as At,w as Ke,n as $n,i as Dn,U as qn,y as pt,x as ut,T as It,V as St,z as Rn,p as Fn,J as yn}from"./vue-core-DCl8Fgqc.js";import{u as Un,d as On}from"./vue-ecosystem-Da9kls6U.js";import{u as nt,c as Vn,M as Wn,a as Gn,C as Hn,A as Yn,b as Qn}from"./ConfirmActionModal-CXYp9ni0.js";import{u as lt,b as Jn,g as Et,C as Pt,c as Kn,n as Xn,p as Zn,s as el,m as Sn,f as In,d as An,e as tl,h as Tt,B as ol,i as nl,j as ll,k as xn,a as En}from"./projectStore-BJ_R2_4_.js";import{_ as Ye}from"./index-BGKkSzO2.js";import{C as il}from"./ChartElement-BvxZFBHc.js";import{J as al}from"./jszip-529iNPX7.js";function sl(S){function r(s){var g,F,ge,se,R,ve,H,D,a,C,E,q,v,U,P,W,B;const c=s.ctrlKey||s.metaKey,p=s.key.toLowerCase(),y=s.target.tagName.toLowerCase(),x=y==="input"||y==="textarea"||s.target.isContentEditable;x&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!s.shiftKey?(s.preventDefault(),(g=S.undo)==null||g.call(S)):c&&(p==="y"||p==="z"&&s.shiftKey)?(s.preventDefault(),(F=S.redo)==null||F.call(S)):c&&p==="c"?(s.preventDefault(),(ge=S.copy)==null||ge.call(S)):c&&p==="v"?(s.preventDefault(),(se=S.paste)==null||se.call(S)):c&&p==="x"?(s.preventDefault(),(R=S.cut)==null||R.call(S)):c&&p==="d"?(s.preventDefault(),(ve=S.duplicate)==null||ve.call(S)):c&&p==="a"?(s.preventDefault(),(H=S.selectAll)==null||H.call(S)):p==="delete"||p==="backspace"?x||(s.preventDefault(),(D=S.delete)==null||D.call(S)):p==="escape"?(a=S.escape)==null||a.call(S):c&&p==="g"?(s.preventDefault(),(C=S.toggleGrid)==null||C.call(S)):c&&p==="="||c&&p==="+"?(s.preventDefault(),(E=S.zoomIn)==null||E.call(S)):c&&p==="-"?(s.preventDefault(),(q=S.zoomOut)==null||q.call(S)):c&&p==="0"?(s.preventDefault(),(v=S.zoomReset)==null||v.call(S)):p==="arrowleft"?(U=S.nudge)==null||U.call(S,-1,0):p==="arrowright"?(P=S.nudge)==null||P.call(S,1,0):p==="arrowup"?(W=S.nudge)==null||W.call(S,0,-1):p==="arrowdown"&&((B=S.nudge)==null||B.call(S,0,1)))}wn(()=>window.addEventListener("keydown",r)),kn(()=>window.removeEventListener("keydown",r))}const rl={class:"slide-panel"},ul={class:"slide-panel-header"},dl={class:"slide-count"},cl={class:"slides-list"},pl=["onClick","onContextmenu","onDragstart","onDrop"],vl={class:"slide-number"},fl=["viewBox"],ml=["x","y","width","height","fill"],gl=["d","stroke"],bl=["d","fill"],hl={class:"slide-footer"},yl={class:"slide-title"},xl=["onClick"],wl={__name:"SlidePanel",setup(S){const r=nt(),s=lt(),c=T(()=>s.getProject(r.projectId)),p=T(()=>Et(c.value)),y=T(()=>{var k,M;return((M=(k=c.value)==null?void 0:k.slides)==null?void 0:M.slice().sort((le,ee)=>le.order-ee.order))||[]}),x=L({show:!1,x:0,y:0,slideId:null});function g(k){r.setCurrentSlide(k)}function F(){const k=y.value.findIndex(le=>le.id===r.currentSlideId),M=s.addSlide(r.projectId,k);M&&r.setCurrentSlide(M.id)}function ge(k){var ee,te;const M=y.value.findIndex(fe=>fe.id===k);s.deleteSlide(r.projectId,k);const le=((ee=c.value)==null?void 0:ee.slides)||[];if(le.length>0){const fe=le.slice().sort((Me,Pe)=>Me.order-Pe.order),me=Math.min(M,fe.length-1);r.setCurrentSlide((te=fe[me])==null?void 0:te.id)}}function se(k,M){k.preventDefault(),x.value={show:!0,x:k.clientX,y:k.clientY,slideId:M},setTimeout(()=>window.addEventListener("click",R,{once:!0}),0)}function R(){x.value.show=!1}function ve(){const k=s.duplicateSlide(r.projectId,x.value.slideId);k&&r.setCurrentSlide(k.id),R()}function H(){ge(x.value.slideId),R()}function D(k,M){k.stopPropagation(),ge(M)}function a(){const k=y.value.findIndex(M=>M.id===x.value.slideId);k>0&&s.reorderSlides(r.projectId,k,k-1),R()}function C(){const k=y.value.findIndex(M=>M.id===x.value.slideId);k<y.value.length-1&&s.reorderSlides(r.projectId,k,k+1),R()}let E=-1;function q(k,M){E=M,k.dataTransfer.effectAllowed="move"}function v(k,M){k.preventDefault(),E!==-1&&E!==M&&s.reorderSlides(r.projectId,E,M),E=-1}function U(k){return k.backgroundType==="gradient"&&k.backgroundGradient?{background:k.backgroundGradient}:k.backgroundType==="image"&&k.backgroundImage?{backgroundImage:`url(${k.backgroundImage})`,backgroundSize:"cover"}:{background:k.background||"#fff"}}function P(k){return{left:k.x/p.value.width*100+"%",top:k.y/p.value.height*100+"%",width:k.width/p.value.width*100+"%",height:k.height/p.value.height*100+"%"}}function W(k){var M,le;return{background:k.type==="shape"?(M=k.content)==null?void 0:M.fillColor:k.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:k.type==="shape"&&((le=k.content)==null?void 0:le.shapeType)==="circle"?"50%":void 0}}function B(k){var M;return Jn(k.content||{},k.width||420,k.height||280,((M=c.value)==null?void 0:M.theme)||{})}return(k,M)=>(l(),i("div",rl,[e("div",ul,[M[2]||(M[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",dl,$(y.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:F,"data-tooltip":"Add slide","aria-label":"Add slide"},[...M[1]||(M[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",cl,[(l(!0),i(Z,null,ce(y.value,(le,ee)=>(l(),i("div",{key:le.id,class:K(["slide-thumb-item",A(r).currentSlideId===le.id&&"active"]),draggable:"true",onClick:te=>g(le.id),onContextmenu:te=>se(te,le.id),onDragstart:te=>q(te,ee),onDragover:M[0]||(M[0]=ze(()=>{},["prevent"])),onDrop:te=>v(te,ee)},[e("div",vl,$(ee+1),1),e("div",{class:"slide-thumb",style:pe(U(le))},[(l(!0),i(Z,null,ce(le.elements.slice(0,6),te=>{var fe;return l(),i("div",{key:te.id,class:"mini-element-frame",style:pe(P(te))},[te.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${te.width||420} ${te.height||280}`,preserveAspectRatio:"none"},[B(te).type==="bar"?(l(!0),i(Z,{key:0},ce(B(te).cartesian.bars,me=>(l(),i("rect",{key:`mini-bar-${me.id}`,x:me.x,y:me.y,width:me.width,height:me.height,fill:me.color,rx:"6"},null,8,ml))),128)):B(te).type==="line"?(l(),i("path",{key:1,d:B(te).cartesian.linePath,stroke:((fe=B(te).cartesian.points[0])==null?void 0:fe.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,gl)):(l(!0),i(Z,{key:2},ce(B(te).circle.slices,me=>(l(),i("path",{key:`mini-slice-${me.id}`,d:me.path,fill:me.color},null,8,bl))),128))],8,fl)):(l(),i("div",{key:1,class:"mini-element",style:pe(W(te))},null,4))],4)}),128))],4),e("div",hl,[e("div",yl,$(le.title||`Slide ${ee+1}`),1),y.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:te=>D(te,le.id)},[...M[3]||(M[3]=[et('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,xl)):G("",!0)])],42,pl))),128))]),e("button",{class:"add-slide-bottom",onClick:F},[...M[4]||(M[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),X(" Add Slide ",-1)])]),(l(),Je(Cn,{to:"body"},[x.value.show?(l(),i("div",{key:0,class:"context-menu",style:pe({left:x.value.x+"px",top:x.value.y+"px"})},[e("button",{class:"ctx-item",onClick:ve},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:C},"Move Down"),M[5]||(M[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:H},"Delete Slide")],4)):G("",!0)]))]))}},kl=Ye(wl,[["__scopeId","data-v-30eea542"]]),Cl={class:"blocks-panel"},$l={class:"blocks-toolbar"},Sl={class:"blocks-categories"},Il=["onClick"],Al={class:"blocks-panel-body"},El={class:"blocks-save-card"},Ml=["disabled"],Pl={class:"blocks-list"},Tl=["onDragstart"],Nl={class:"block-thumb-stage"},zl={class:"block-card-body"},Bl={class:"block-card-head"},Ll={class:"block-name"},jl={class:"block-meta"},_l={key:0},Dl=["onClick"],ql={class:"block-description"},Rl={class:"block-tags"},Fl=["onClick"],Ul={__name:"BlocksPanel",setup(S){const r=nt(),s=lt(),c=L(""),p=L("all"),y=L(""),x=L("Custom"),g=T(()=>s.getProject(r.projectId)),F=T(()=>{var P,W;return(W=(P=g.value)==null?void 0:P.slides)==null?void 0:W.find(B=>B.id===r.currentSlideId)}),ge=T(()=>s.getContentBlocks(r.projectId)),se=T(()=>{const P=new Set(["all"]);return ge.value.forEach(W=>P.add(W.category||"Custom")),Array.from(P)}),R=T(()=>{var W;const P=new Set(r.selectedElementIds);return(((W=F.value)==null?void 0:W.elements)||[]).filter(B=>P.has(B.id))}),ve=T(()=>{const P=c.value.trim().toLowerCase();return ge.value.filter(W=>p.value==="all"||(W.category||"Custom")===p.value?P?[W.name,W.description,W.category,...W.tags||[]].join(" ").toLowerCase().includes(P):!0:!1)});function H(P){const W=Array.isArray(P==null?void 0:P.elements)?P.elements:[];if(!W.length)return{minX:0,minY:0,width:1,height:1};const B=Math.min(...W.map(ee=>Number(ee.x||0))),k=Math.min(...W.map(ee=>Number(ee.y||0))),M=Math.max(...W.map(ee=>Number(ee.x||0)+Number(ee.width||0))),le=Math.max(...W.map(ee=>Number(ee.y||0)+Number(ee.height||0)));return{minX:B,minY:k,width:Math.max(1,M-B),height:Math.max(1,le-k)}}function D(P,W){const B=H(P);return{left:`${(Number(W.x||0)-B.minX)/B.width*100}%`,top:`${(Number(W.y||0)-B.minY)/B.height*100}%`,width:`${Number(W.width||0)/B.width*100}%`,height:`${Number(W.height||0)/B.height*100}%`}}function a(P){var W,B,k,M,le,ee,te;return P.type==="shape"?{background:((W=P.content)==null?void 0:W.fillColor)||"#cbd5e1",borderRadius:((B=P.content)==null?void 0:B.shapeType)==="circle"?"50%":`${Number(((k=P.content)==null?void 0:k.borderRadius)||10)}px`,border:`${Math.max(0,Number(((M=P.content)==null?void 0:M.borderWidth)||0))}px solid ${((le=P.content)==null?void 0:le.borderColor)||"transparent"}`}:P.type==="button"?{background:((ee=P.content)==null?void 0:ee.bgColor)||"#6c47ff",borderRadius:`${Number(((te=P.content)==null?void 0:te.borderRadius)||10)}px`}:P.type==="image"||P.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:P.type==="text"||P.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function C(P,W){const B=P.type==="heading"?2:3,k=Math.max(18,100/(B+1.25));return{width:`${W===B-1?72:100}%`,height:`${P.type==="heading"?k:k-2}%`}}function E(P){const W=s.insertContentBlock(r.projectId,r.currentSlideId,P.id);W.length&&(r.setSelection(W.map(B=>B.id)),r.focusPropertiesSection("content"),r.setActiveTool("select"))}function q(){var B,k;const P=y.value.trim();if(!P||!R.value.length)return;s.saveSelectionAsContentBlock(r.projectId,r.currentSlideId,R.value.map(M=>M.id),{name:P,category:x.value.trim()||"Custom",accent:((k=(B=g.value)==null?void 0:B.theme)==null?void 0:k.primaryColor)||"#6c47ff"})&&(y.value="",p.value="Custom")}function v(P){s.deleteContentBlock(r.projectId,P)}function U(P,W){P.dataTransfer&&(P.dataTransfer.effectAllowed="copy",P.dataTransfer.setData(Pt,JSON.stringify({id:W.id})),P.dataTransfer.setData("text/plain",W.name))}return(P,W)=>(l(),i("div",Cl,[W[6]||(W[6]=e("div",{class:"blocks-panel-header"},[e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")])],-1)),e("div",$l,[de(e("input",{"onUpdate:modelValue":W[0]||(W[0]=B=>c.value=B),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[ye,c.value]]),e("div",Sl,[(l(!0),i(Z,null,ce(se.value,B=>(l(),i("button",{key:B,type:"button",class:K(["blocks-category-chip",p.value===B&&"active"]),onClick:k=>p.value=B},$(B==="all"?"All":B),11,Il))),128))])]),e("div",Al,[e("div",El,[W[3]||(W[3]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),W[4]||(W[4]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project.",-1)),de(e("input",{"onUpdate:modelValue":W[1]||(W[1]=B=>y.value=B),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[ye,y.value]]),de(e("input",{"onUpdate:modelValue":W[2]||(W[2]=B=>x.value=B),class:"input",placeholder:"Category"},null,512),[[ye,x.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!R.value.length||!y.value.trim(),onClick:q}," Save "+$(R.value.length?`${R.value.length} item${R.value.length>1?"s":""}`:"selection")+" as block ",9,Ml)]),e("div",Pl,[(l(!0),i(Z,null,ce(ve.value,B=>(l(),i("div",{key:B.id,class:"block-card",draggable:"true",onDragstart:k=>U(k,B)},[e("div",{class:"block-thumb",style:pe({"--block-accent":B.accent||"#6c47ff"})},[e("div",Nl,[(l(!0),i(Z,null,ce(B.elements,k=>(l(),i("div",{key:`${B.id}-${k.type}-${k.x}-${k.y}`,class:"block-thumb-frame",style:pe(D(B,k))},[["text","heading"].includes(k.type)?(l(),i("div",{key:0,class:K(["thumb-text",k.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(Z,null,ce(k.type==="heading"?2:3,M=>(l(),i("span",{key:`${B.id}-${k.type}-${k.x}-${k.y}-${M}`,class:"thumb-text-line",style:pe(C(k,M-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:pe(a(k))},null,4))],4))),128))])],4),e("div",zl,[e("div",Bl,[e("div",null,[e("div",Ll,$(B.name),1),e("div",jl,[X($(B.category),1),B.scope==="custom"?(l(),i("span",_l," · Custom")):G("",!0)])]),B.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:k=>v(B.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...W[5]||(W[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,Dl)):G("",!0)]),e("p",ql,$(B.description||"Reusable layout block"),1),e("div",Rl,[(l(!0),i(Z,null,ce(B.tags||[],k=>(l(),i("span",{key:`${B.id}-${k}`,class:"block-tag"},"#"+$(k),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:k=>E(B)}," Insert Block ",8,Fl)])],40,Tl))),128))])])]))}},Ol=Ye(Ul,[["__scopeId","data-v-f08ebff0"]]),Vl={class:"layer-panel"},Wl={class:"layer-header panel-section"},Gl={class:"panel-title",style:{"margin-bottom":"0"}},Hl={class:"layer-count"},Yl={key:0,class:"layers-empty"},Ql={key:1,class:"layers-list"},Jl=["onClick"],Kl={class:"layer-type-icon"},Xl={class:"layer-name"},Zl={class:"layer-actions"},ei=["onClick","data-tooltip"],ti={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},oi={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ni=["onClick","data-tooltip"],li={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ii={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ai=["onClick"],si=["onClick"],ri=["onClick"],ui={__name:"LayerPanel",setup(S){const r=nt(),s=lt(),c=T(()=>s.getProject(r.projectId)),p=T(()=>{var D,a;return(a=(D=c.value)==null?void 0:D.slides)==null?void 0:a.find(C=>C.id===r.currentSlideId)}),y=T(()=>{var D;return[...((D=p.value)==null?void 0:D.elements)||[]].sort((a,C)=>(C.zIndex||0)-(a.zIndex||0))});function x(D){r.selectElement(D)}function g(D){s.updateElement(r.projectId,r.currentSlideId,D.id,{visible:!D.visible})}function F(D){s.updateElement(r.projectId,r.currentSlideId,D.id,{locked:!D.locked})}function ge(D){s.reorderElement(r.projectId,r.currentSlideId,D,"up")}function se(D){s.reorderElement(r.projectId,r.currentSlideId,D,"down")}function R(D){s.deleteElement(r.projectId,r.currentSlideId,D),r.selectedElementId===D&&r.clearSelection()}function ve(D){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[D]||"◆"}function H(D){var a,C,E;return(a=D.content)!=null&&a.text?D.content.text.slice(0,24):(C=D.content)!=null&&C.label?D.content.label:(E=D.content)!=null&&E.question?D.content.question.slice(0,24):D.type.charAt(0).toUpperCase()+D.type.slice(1)}return(D,a)=>(l(),i("div",Vl,[e("div",Wl,[e("div",Gl,[a[0]||(a[0]=X(" Layers ",-1)),e("span",Hl,$(y.value.length),1)])]),y.value.length===0?(l(),i("div",Yl,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",Ql,[(l(!0),i(Z,null,ce(y.value,C=>(l(),i("div",{key:C.id,class:K(["layer-item",A(r).selectedElementIds.includes(C.id)&&"selected",C.locked&&"locked",!C.visible&&"hidden"]),onClick:E=>x(C.id)},[e("span",Kl,$(ve(C.type)),1),e("span",Xl,$(H(C)),1),e("div",Zl,[e("button",{class:K(["layer-action-btn",{active:C.visible}]),onClick:ze(E=>g(C),["stop"]),"data-tooltip":C.visible?"Hide":"Show"},[C.visible?(l(),i("svg",ti,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",oi,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,ei),e("button",{class:K(["layer-action-btn",{active:C.locked}]),onClick:ze(E=>F(C),["stop"]),"data-tooltip":C.locked?"Unlock":"Lock"},[C.locked?(l(),i("svg",li,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",ii,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,ni),e("button",{class:"layer-action-btn",onClick:ze(E=>ge(C.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,ai),e("button",{class:"layer-action-btn",onClick:ze(E=>se(C.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,si),e("button",{class:"layer-action-btn danger",onClick:ze(E=>R(C.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,ri)])],10,Jl))),128))]))]))}},di=Ye(ui,[["__scopeId","data-v-7407acd8"]]),ci={class:"panel-section"},pi={class:"preset-toolbar"},vi=["value"],fi=["value"],mi=["value"],gi={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},bi=["onClick"],hi={class:"preset-meta-chip muted"},yi={key:1,class:"import-review"},xi={class:"motion-scrubber-header"},wi={class:"preset-toolbar compact"},ki=["value"],Ci=["value"],$i={class:"import-list"},Si=["onUpdate:modelValue"],Ii={class:"import-item-title"},Ai={class:"preset-meta-chip"},Ei={key:0,class:"preset-meta-chip muted"},Mi={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(S,{emit:r}){const s=r;return(c,p)=>(l(),i("div",ci,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",pi,[e("input",{value:S.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=y=>s("update:searchQuery",y.target.value))},null,40,vi),e("select",{value:S.categoryFilter,class:"select",onChange:p[1]||(p[1]=y=>s("update:categoryFilter",y.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(Z,null,ce(S.availableCategories,y=>(l(),i("option",{key:`library-${y}`,value:y},$(y),9,mi))),128))],40,fi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=y=>s("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=y=>s("export-presets"))},"Export")]),S.recentPresets.length?(l(),i("div",gi,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(Z,null,ce(S.recentPresets,y=>(l(),i("div",{class:"preset-item",key:`recent-${y.id}`},[e("button",{type:"button",class:"preset-chip",onClick:x=>s("apply-preset",y)},$(y.name),9,bi),e("span",hi,"Used "+$(y.usageCount)+"x",1)]))),128))])):G("",!0),S.pendingImportedPresets.length?(l(),i("div",yi,[e("div",xi,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=y=>s("clear-imports"))},"Discard")]),e("div",wi,[e("select",{value:S.importScopeFilter,class:"select",onChange:p[5]||(p[5]=y=>s("update:importScopeFilter",y.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,ki),e("select",{value:S.importConflictMode,class:"select",onChange:p[6]||(p[6]=y=>s("update:importConflictMode",y.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Ci),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=y=>s("apply-imports"))},"Merge Selected")]),e("div",$i,[(l(!0),i(Z,null,ce(S.filteredPendingImports,y=>(l(),i("label",{key:`pending-${y.id}`,class:"import-item"},[de(e("input",{"onUpdate:modelValue":x=>y.selected=x,type:"checkbox"},null,8,Si),[[At,y.selected]]),e("span",Ii,$(y.name),1),e("span",Ai,$(y.scope),1),y.category?(l(),i("span",Ei,$(y.category),1)):G("",!0)]))),128))])])):G("",!0)]))}},Pi=Ye(Mi,[["__scopeId","data-v-61f99273"]]),Ti={key:1,class:"panel-section"},Ni={class:"field-hint"},zi={class:"motion-scrubber-shell"},Bi={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Li=["onClick"],ji={class:"motion-preview"},_i={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Di={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},qi={class:"motion-card-label"},Ri={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Fi={class:"form-group"},Ui={class:"form-group"},Oi={class:"form-group",style:{"margin-top":"var(--space-3)"}},Vi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Wi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Gi={key:0,class:"preset-list"},Hi=["onDragstart","onDragenter","onDrop"],Yi=["onClick"],Qi={key:0,class:"preset-meta-chip"},Ji=["onClick"],Ki=["onClick"],Xi=["onClick"],Zi={key:1,class:"preset-row preset-edit-row"},ea=["onClick"],ta={key:1,class:"field-hint"},oa={key:2,class:"panel-section"},na={class:"slide-settings-tabs"},la={key:0,class:"slide-settings-pane"},ia={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},aa={class:"form-group"},sa={class:"bg-type-tabs"},ra=["onClick"],ua={key:0,class:"color-row"},da=["value"],ca=["value"],pa={class:"slide-settings-subsection"},va={class:"canvas-size-grid"},fa=["onClick"],ma={class:"canvas-size-icon-shell"},ga={class:"canvas-size-name"},ba={class:"canvas-size-ratio"},ha={class:"canvas-custom-card"},ya={class:"canvas-custom-header"},xa={class:"field-hint"},wa={class:"canvas-custom-inputs"},ka={class:"form-group"},Ca={class:"canvas-size-input-wrap"},$a=["value"],Sa={class:"form-group"},Ia={class:"canvas-size-input-wrap"},Aa=["value"],Ea={class:"check-row canvas-size-lock"},Ma={class:"slide-settings-subsection"},Pa={key:1,class:"slide-settings-pane"},Ta=["value"],Na={class:"form-group",style:{"margin-top":"var(--space-3)"}},za=["value"],Ba={class:"check-row"},La=["checked"],ja={key:2,class:"slide-settings-pane"},_a={class:"check-row"},Da=["checked"],qa={class:"check-row"},Ra=["checked"],Fa={class:"check-row"},Ua=["checked"],Oa={class:"check-row"},Va=["checked"],Wa={class:"check-row"},Ga=["checked"],Ha={class:"panel-title"},Ya={class:"element-type-badge"},Qa={class:"geo-grid"},Ja={class:"form-group"},Ka=["value"],Xa={class:"form-group"},Za=["value"],es={class:"form-group"},ts=["value"],os={class:"form-group"},ns=["value"],ls={class:"form-group"},is=["value"],as={class:"form-group"},ss=["value"],rs={class:"motion-scrubber-shell"},us={class:"motion-card-grid"},ds=["onClick"],cs={class:"motion-preview"},ps={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},vs={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},fs={class:"motion-card-label"},ms={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},gs={class:"form-group"},bs=["value"],hs={class:"form-group"},ys=["value"],xs={class:"preset-row",style:{"margin-top":"var(--space-3)"}},ws={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},ks={key:0,class:"preset-list"},Cs=["onDragstart","onDragenter","onDrop"],$s=["onClick"],Ss={key:0,class:"preset-meta-chip"},Is=["onClick"],As=["onClick"],Es=["onClick"],Ms={key:1,class:"preset-row preset-edit-row"},Ps=["onClick"],Ts={key:1,class:"field-hint"},Ns={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zs=["value"],Bs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Ls={class:"form-group"},js=["value"],_s={class:"form-group"},Ds=["value"],qs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Rs=["value"],Fs=["value"],Us={class:"form-group",style:{"margin-top":"var(--space-3)"}},Os={class:"align-btns"},Vs=["onClick"],Ws={class:"form-group",style:{"margin-top":"var(--space-3)"}},Gs={class:"style-btns"},Hs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ys={class:"color-row"},Qs=["value"],Js=["value"],Ks={class:"form-group",style:{"margin-top":"var(--space-3)"}},Xs=["value"],Zs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},er={class:"form-group"},tr=["value"],or={class:"form-group"},nr=["value"],lr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ir=["value"],ar={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},sr=["value"],rr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ur=["value"],dr={class:"form-group"},cr=["value"],pr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},vr={class:"form-group"},fr=["value"],mr={class:"form-group"},gr=["value"],br={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hr=["value"],yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xr={class:"color-row"},wr=["value"],kr=["value"],Cr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$r={class:"color-row"},Sr=["value"],Ir=["value"],Ar={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Er=["value"],Mr={class:"form-group"},Pr=["value"],Tr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Nr=["value"],zr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Br=["value"],Lr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jr=["value"],_r={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dr=["value"],qr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Rr={class:"chart-data-actions"},Fr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ur=["value","placeholder"],Or={class:"chart-palette-preview"},Vr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Wr={class:"form-group"},Gr=["value"],Hr={class:"form-group"},Yr=["value"],Qr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Jr={class:"form-group"},Kr=["value"],Xr={class:"form-group"},Zr=["value"],eu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},tu={class:"form-group"},ou=["value"],nu={key:0,class:"form-group"},lu=["value"],iu={key:1,class:"form-group"},au=["value"],su={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},ru={class:"form-group"},uu=["value"],du={class:"check-row",style:{"margin-top":"20px"}},cu=["checked"],pu={class:"check-row"},vu=["checked"],fu={key:1,class:"check-row"},mu=["checked"],gu={class:"check-row"},bu=["checked"],hu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},yu=["value"],xu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wu=["value"],ku={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cu=["value"],$u={key:0,class:"form-group"},Su=["value"],Iu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Au={class:"form-group"},Eu=["value"],Mu={class:"form-group"},Pu=["value"],Tu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Nu={class:"form-group"},zu=["value"],Bu={class:"form-group"},Lu=["value"],ju={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_u={class:"form-group"},Du=["value"],qu={class:"form-group"},Ru=["value"],Fu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Uu={class:"form-group"},Ou=["value"],Vu=["value"],Wu={class:"form-group"},Gu=["value"],Hu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Yu=["value"],Qu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ju={class:"color-row"},Ku=["value"],Xu=["value"],Zu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},ed={class:"form-group"},td=["value"],od={class:"form-group"},nd=["value"],ld={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},id=["value"],ad={class:"form-group"},sd=["value"],rd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ud={class:"form-group"},dd=["value"],cd={class:"form-group"},pd=["value"],vd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fd=["value"],md={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gd=["value"],bd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hd=["value"],yd={class:"check-row"},xd=["checked"],wd={class:"check-row"},kd=["checked"],Cd={class:"check-row"},$d=["checked"],Sd={class:"check-row"},Id=["checked"],Ad={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ed=["value"],Md={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pd=["value"],Td={class:"check-row"},Nd=["checked"],zd={class:"check-row"},Bd=["checked"],Ld={class:"check-row"},jd=["checked"],_d={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Dd={class:"form-group"},qd=["value"],Rd={class:"form-group"},Fd=["value"],Ud={class:"form-group",style:{"margin-top":"var(--space-3)"}},Od=["value"],Vd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wd=["value"],Gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hd=["value"],Yd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qd=["value"],Jd={class:"form-group"},Kd=["value"],Xd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Zd={class:"form-group"},ec=["value"],tc={class:"form-group"},oc=["value"],nc={class:"form-group",style:{"margin-top":"var(--space-3)"}},lc=["value"],ic={class:"panel-section"},ac={class:"actions-list"},sc={__name:"PropertiesPanel",setup(S){const r=nt(),s=lt(),c=T(()=>s.getProject(r.projectId)),p=T(()=>{var u,t;return(t=(u=c.value)==null?void 0:u.slides)==null?void 0:t.find(_=>_.id===r.currentSlideId)}),y=T(()=>{var u;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((u=c.value)==null?void 0:u.settings)||{}}}),x=T(()=>Et(y.value)),g=T(()=>Sn(y.value)),F=T(()=>In(x.value.width,x.value.height)),ge=L(!0),se=L("canvas"),R=T(()=>Array.isArray(y.value.motionPresets)?y.value.motionPresets:[]),ve=T(()=>R.value.filter(u=>u.scope!=="group")),H=T(()=>R.value.filter(u=>u.scope==="group")),D=T(()=>{var t;const u=new Set(r.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(_=>u.has(_.id))}),a=T(()=>{var u,t;return r.selectedElementId?(t=(u=p.value)==null?void 0:u.elements)==null?void 0:t.find(_=>_.id===r.selectedElementId):null}),C=T(()=>r.multiSelection||!!a.value),E=T(()=>r.multiSelection?"group":"single"),q=T(()=>{var t,_;const u=(_=(t=a.value)==null?void 0:t.animations)==null?void 0:_[0];return{type:(u==null?void 0:u.type)||"auto",delay:Number((u==null?void 0:u.delay)||0),duration:Number((u==null?void 0:u.duration)||.64)}}),v=T(()=>{var Ee,We;const u=D.value.map(je=>{var ct;return((ct=je.animations)==null?void 0:ct[0])||null}),t=((Ee=u[0])==null?void 0:Ee.type)||"auto",_=Number(((We=u[0])==null?void 0:We.duration)||.64),ue=u.every(je=>((je==null?void 0:je.type)||"auto")===t),ke=u.every(je=>Number((je==null?void 0:je.duration)||.64)===_);return{type:ue?t:"mixed",duration:ke?_:.64}}),U=L(0),P=L(0),W=L(""),B=L(""),k=L(""),M=L(""),le=L(""),ee=L(""),te=L(""),fe=L(""),me=L(""),Me=L(""),Pe=L(""),Ce=L(""),Ie=L(""),Qe=L("all"),_e=L(null),Oe=L(null),Q=L([]),ie=L("all"),J=L("replace"),ae=L(""),Se=L(null),be=L("");let N=null;const I=L({});Ke(a,u=>{u?I.value=JSON.parse(JSON.stringify(u)):I.value={},(u==null?void 0:u.type)==="chart"&&(ae.value="")},{immediate:!0,deep:!0}),Ke(()=>{var u;return[r.propertiesPanelSection,(u=a.value)==null?void 0:u.id,r.rightPanelTab]},async([u,t,_])=>{var ke;if(!u||!t||_!=="properties")return;await $n();const ue=(ke=Se.value)==null?void 0:ke.querySelector(`[data-props-anchor="${u}"]`);ue&&(ue.scrollIntoView({behavior:"smooth",block:"start"}),be.value=u,N&&window.clearTimeout(N),N=window.setTimeout(()=>{be.value===u&&(be.value="")},1400))},{immediate:!0});function j(u){a.value&&s.updateElement(r.projectId,r.currentSlideId,a.value.id,u)}function m(u){if(!a.value)return;const t={...a.value.content,...u};j({content:t})}function Ne(u,t){const _=parseFloat(t);isNaN(_)||j({[u]:_})}const we=L({});Ke(p,u=>{u&&(we.value={...u})},{immediate:!0});function qe(u){p.value&&s.updateSlide(r.projectId,p.value.id,u)}function Ae(u){if(!c.value)return;const t={...y.value,...u};s.updateProject(r.projectId,{settings:{...t,...Xn(t)}})}function Re(u){Ae({slideWidth:u.width,slideHeight:u.height})}function tt(u,t){const _=Math.round(Number(t)||0);if(!_)return;const ue={[`slide${u==="width"?"Width":"Height"}`]:_};if(ge.value){const ke=x.value.width,Ee=x.value.height;u==="width"?ue.slideHeight=Math.round(_*(Ee/ke)):ue.slideWidth=Math.round(_*(ke/Ee))}Ae(ue)}const He=T(()=>{var u;return An(((u=c.value)==null?void 0:u.theme)||{})}),yt=T(()=>{var t,_;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const u=((_=a.value.content)==null?void 0:_.paletteText)||He.value.paletteText;return tl(u)});function vt(u){const t=Zn(u,{fallbackToDefault:!1});return t.length?el(t):""}function ft(u){var _;if(((_=a.value)==null?void 0:_.type)!=="chart")return;const t=vt(u);t&&(m({dataText:t}),ae.value="")}async function Ge(u){var ue;const t=u.target,_=(ue=t==null?void 0:t.files)==null?void 0:ue[0];if(_)try{const ke=await _.text();ft(ke)}finally{t&&(t.value="")}}function xt(){var u;(u=Oe.value)==null||u.click()}function st(){var t,_;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const u=vt(((_=a.value.content)==null?void 0:_.dataText)||"");u&&m({dataText:u})}function wt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&m({...He.value})}function kt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&m({paletteText:He.value.paletteText})}function rt(u){return String(u||"").split(",").map(t=>t.trim()).filter(Boolean)}function mt(u){const t=(u==null?void 0:u.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((u==null?void 0:u.name)||"Imported Preset").trim()||"Imported Preset",category:String((u==null?void 0:u.category)||"").trim(),tags:Array.isArray(u==null?void 0:u.tags)?u.tags.map(_=>String(_).trim()).filter(Boolean):rt(u==null?void 0:u.tags),type:String((u==null?void 0:u.type)||"auto"),delay:Math.max(0,Number(u==null?void 0:u.delay)||0),duration:Math.max(.1,Number(u==null?void 0:u.duration)||.72),stepDelay:Math.max(0,Number(u==null?void 0:u.stepDelay)||0)}}const gt=T(()=>[...new Set(R.value.map(t=>t.category).filter(Boolean))].sort((t,_)=>t.localeCompare(_))),bt=T(()=>[...R.value].filter(u=>Number(u.usageCount||0)>0).sort((u,t)=>{const _=Number(t.lastUsedAt||0)-Number(u.lastUsedAt||0);return _!==0?_:Number(t.usageCount||0)-Number(u.usageCount||0)}).slice(0,6)),Ct=T(()=>ie.value==="all"?Q.value:Q.value.filter(u=>u.scope===ie.value));function f(u){const t=Ie.value.trim().toLowerCase(),_=Qe.value;return _==="all"||(u.category||"")===_?t?[u.name,u.category,...u.tags||[]].filter(Boolean).some(ke=>String(ke).toLowerCase().includes(t)):!0:!1}const w=T(()=>ve.value.filter(f)),Y=T(()=>H.value.filter(f)),O=T(()=>bt.value.filter(u=>E.value==="group"?u.scope==="group":u.scope!=="group"));function xe(u){const t=String(u.name||"").trim();if(!t)return;const _=R.value.findIndex(Ee=>Ee.scope===u.scope&&Ee.name.toLowerCase()===t.toLowerCase()),ue={...u,id:_>=0?R.value[_].id:`motion-${Date.now()}`,name:t,category:String(u.category||"").trim(),tags:Array.isArray(u.tags)?u.tags:rt(u.tags)},ke=[...R.value];_>=0?ke.splice(_,1,ue):ke.push(ue),Ae({motionPresets:ke})}function $e(u,t){const _=R.value.map(ue=>ue.id===u?{...ue,...t}:ue);Ae({motionPresets:_})}function Be(u){const t=R.value.find(_=>_.id===u);t&&$e(u,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function Fe(u,t){const _=R.value.filter(We=>We.scope===u).map(We=>We.name.toLowerCase()),ue=String(t||"Preset").trim()||"Preset";if(!_.includes(ue.toLowerCase()))return ue;let ke=2,Ee=`${ue} Copy`;for(;_.includes(Ee.toLowerCase());)Ee=`${ue} Copy ${ke}`,ke+=1;return Ee}function oe(u){Ae({motionPresets:R.value.filter(t=>t.id!==u)}),k.value===u&&(k.value="",M.value="")}function he(u){xe({...u,id:void 0,name:Fe(u.scope,u.name)})}function Xe(u){k.value=u.id,M.value=u.name,le.value=u.category||"",ee.value=Array.isArray(u.tags)?u.tags.join(", "):""}function Le(){k.value="",M.value="",le.value="",ee.value=""}function Te(u){const t=String(M.value||"").trim();t&&($e(u,{name:t,category:String(le.value||"").trim(),tags:rt(ee.value)}),Le())}function Ve(u,t,_){if(!t||!_||t===_)return;const ue=R.value.filter(ot=>ot.scope===u),ke=ue.findIndex(ot=>ot.id===t),Ee=ue.findIndex(ot=>ot.id===_);if(ke===-1||Ee===-1)return;const We=[...ue],[je]=We.splice(ke,1);We.splice(Ee,0,je);const ct=R.value.filter(ot=>ot.scope!==u),ht=[];R.value.forEach(ot=>{if(ot.scope===u){We.length&&ht.push(We.shift());return}const $t=ct.shift();$t&&ht.push($t)}),Ae({motionPresets:ht})}function d(u){te.value=u.id,fe.value=u.id}function n(u){te.value&&(fe.value=u.id)}function b(u){te.value&&(Ve(u.scope,te.value,u.id),te.value="",fe.value="")}function V(){te.value="",fe.value=""}function h(){U.value+=1}function re(){P.value+=1}function De(u,t){qe({[u]:t})}function Ze(u){const t=Math.max(0,Number(u)||0);qe({duration:t})}function z(u){var ue;if(!a.value)return;const _={...((ue=a.value.animations)==null?void 0:ue[0])||{type:"auto",delay:0,duration:.64},...u};if(_.type==="auto"){j({animations:[]});return}j({animations:[{type:_.type||"none",delay:Math.max(0,Number(_.delay)||0),duration:Math.max(.1,Number(_.duration)||.64)}]})}const Ue=L("stagger-in"),it=L(0),at=L(.12),dt=L(.72);Ke(D,u=>{u.length&&(Ue.value=v.value.type==="mixed"?"stagger-in":v.value.type,dt.value=v.value.duration)},{immediate:!0,deep:!0});function Mn(){if(!D.value.length)return;[...D.value].sort((t,_)=>(t.y||0)!==(_.y||0)?(t.y||0)-(_.y||0):(t.x||0)-(_.x||0)).forEach((t,_)=>{if(Ue.value==="auto"){s.updateElement(r.projectId,r.currentSlideId,t.id,{animations:[]});return}s.updateElement(r.projectId,r.currentSlideId,t.id,{animations:[{type:Ue.value,delay:Math.max(0,Number(it.value)||0)+_*Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(dt.value)||.72)}]})})}function Nt(u){Ue.value=u.type||"stagger-in",it.value=Number(u.delay||0),at.value=Number(u.stepDelay||0),dt.value=Number(u.duration||.72),Be(u.id),re()}function Pn(){xe({scope:"group",name:B.value,category:Pe.value,tags:rt(Ce.value),type:Ue.value,delay:Math.max(0,Number(it.value)||0),stepDelay:Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(dt.value)||.72)}),B.value="",Pe.value="",Ce.value=""}function zt(u){z({type:u.type||"auto",delay:Number(u.delay||0),duration:Number(u.duration||.72)}),Be(u.id),h()}function Tn(){xe({scope:"single",name:W.value,category:me.value,tags:rt(Me.value),type:q.value.type,delay:Math.max(0,Number(q.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(q.value.duration)||.72)}),W.value="",me.value="",Me.value=""}function Nn(){var u;(u=_e.value)==null||u.click()}async function zn(u){var ue;const t=u.target,_=(ue=t==null?void 0:t.files)==null?void 0:ue[0];if(_)try{const ke=await _.text(),Ee=JSON.parse(ke),We=Array.isArray(Ee)?Ee:Array.isArray(Ee.motionPresets)?Ee.motionPresets:[];if(!We.length)return;Q.value=We.map(je=>({...mt(je),selected:!0,importName:String((je==null?void 0:je.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function Bt(){Q.value=[]}function Bn(){const u=Q.value.filter(_=>_.selected);if(!u.length)return;const t=[...R.value];u.forEach(_=>{const ue=t.findIndex(ke=>ke.scope===_.scope&&ke.name.toLowerCase()===_.name.toLowerCase());if(ue>=0){J.value==="replace"?t.splice(ue,1,{...t[ue],..._,id:t[ue].id}):t.push({..._,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:Fe(_.scope,_.name)});return}t.push(_)}),Ae({motionPresets:t}),Bt()}function Ln(){var Ee;if(!R.value.length)return;const u={version:1,exportedAt:new Date().toISOString(),motionPresets:R.value.map(({id:We,...je})=>je)},t=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),_=URL.createObjectURL(t),ue=document.createElement("a"),ke=String(((Ee=c.value)==null?void 0:Ee.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";ue.href=_,ue.download=`${ke}-motion-presets.json`,document.body.appendChild(ue),ue.click(),document.body.removeChild(ue),URL.revokeObjectURL(_)}const jn=T(()=>[{id:`single-${U.value}`,delay:Math.max(0,Number(q.value.delay)||0),duration:Math.max(.1,Number(q.value.duration)||.72),type:q.value.type}]),_n=T(()=>Array.from({length:Math.min(Math.max(D.value.length,3),5)},(u,t)=>({id:`group-${P.value}-${t}`,delay:Math.max(0,Number(it.value)||0)+t*Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(dt.value)||.72),type:Ue.value}))),Lt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],jt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(u,t)=>{var _,ue,ke,Ee,We,je,ct,ht,ot,$t,_t,Dt,qt,Rt,Ft,Ut,Ot,Vt,Wt,Gt,Ht,Yt,Qt,Jt,Kt,Xt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,ho,yo,xo,wo,ko,Co,$o,So,Io,Ao,Eo,Mo,Po,To,No,zo,Bo,Lo,jo,_o,Do,qo,Ro,Fo,Uo,Oo,Vo,Wo,Go,Ho,Yo,Qo,Jo,Ko,Xo,Zo,en,tn,on,nn,ln,an,sn,rn,un,dn,cn,pn,vn,fn,mn,gn,bn;return l(),i("div",{ref_key:"panelRootRef",ref:Se,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:_e,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:zn},null,544),e("input",{ref_key:"chartImportInput",ref:Oe,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:Ge},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),C.value?(l(),Je(Pi,{key:0,"search-query":Ie.value,"category-filter":Qe.value,"available-categories":gt.value,"recent-presets":O.value,"pending-imported-presets":Q.value,"filtered-pending-imports":Ct.value,"import-scope-filter":ie.value,"import-conflict-mode":J.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>Ie.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>Qe.value=o),onTriggerImport:Nn,onExportPresets:Ln,onApplyPreset:t[2]||(t[2]=o=>E.value==="group"?Nt(o):zt(o)),onClearImports:Bt,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>ie.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>J.value=o),onApplyImports:Bn},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):G("",!0),A(r).multiSelection?(l(),i("div",Ti,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",Ni,$(D.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",zi,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:re},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${P.value}`},[(l(!0),i(Z,null,ce(_n.value,o=>(l(),i("span",{key:o.id,class:K(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:pe({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Bi,[(l(),i(Z,null,ce(Lt,o=>e("button",{key:`group-${o.value}`,type:"button",class:K(["motion-card",Ue.value===o.value&&"active"]),onClick:ne=>Ue.value=o.value},[e("span",ji,[e("span",{class:K(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",_i)):G("",!0),o.value==="stagger-in"?(l(),i("span",Di)):G("",!0)]),e("span",qi,$(o.label),1)],10,Li)),64))]),e("div",Ri,[e("div",Fi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),de(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>it.value=o),class:"input"},null,512),[[ye,it.value]])]),e("div",Ui,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),de(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>at.value=o),class:"input"},null,512),[[ye,at.value]])])]),e("div",Oi,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),de(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>dt.value=o),class:"input"},null,512),[[ye,dt.value]])]),e("div",Vi,[de(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>B.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[ye,B.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Pn},"Save")]),e("div",Wi,[de(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>Pe.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[ye,Pe.value]]),de(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>Ce.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[ye,Ce.value]])]),Y.value.length?(l(),i("div",Gi,[(l(!0),i(Z,null,ce(Y.value,o=>(l(),i("div",{key:o.id,class:K(["preset-item",te.value===o.id&&"dragging",fe.value===o.id&&te.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:ne=>d(o),onDragenter:ze(ne=>n(o),["prevent"]),onDragover:t[14]||(t[14]=ze(()=>{},["prevent"])),onDrop:ze(ne=>b(o),["prevent"]),onDragend:V},[e("button",{type:"button",class:"preset-chip",onClick:ne=>Nt(o)},$(o.name),9,Yi),o.category?(l(),i("span",Qi,$(o.category),1)):G("",!0),(l(!0),i(Z,null,ce(o.tags||[],ne=>(l(),i("span",{key:`${o.id}-${ne}`,class:"preset-meta-chip muted"},"#"+$(ne),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:ne=>he(o)},"Duplicate",8,Ji),e("button",{type:"button",class:"preset-mini-btn",onClick:ne=>Xe(o)},"Rename",8,Ki),e("button",{type:"button",class:"preset-mini-btn danger",onClick:ne=>oe(o.id)},"Delete",8,Xi),k.value===o.id?(l(),i("div",Zi,[de(e("input",{"onUpdate:modelValue":t[11]||(t[11]=ne=>M.value=ne),class:"input"},null,512),[[ye,M.value]]),de(e("input",{"onUpdate:modelValue":t[12]||(t[12]=ne=>le.value=ne),class:"input",placeholder:"Category"},null,512),[[ye,le.value]]),de(e("input",{"onUpdate:modelValue":t[13]||(t[13]=ne=>ee.value=ne),class:"input",placeholder:"Tags, comma separated"},null,512),[[ye,ee.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ne=>Te(o.id)},"Save",8,ea),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Le},"Cancel")])):G("",!0)],42,Hi))),128))])):H.value.length?(l(),i("div",ta,"No group presets match the current search.")):G("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Mn}," Apply Sequence to Selection ")])):a.value?(l(),i(Z,{key:3},[e("div",{class:K(["panel-section",be.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",Ha,[t[179]||(t[179]=X(" Position & Size ",-1)),e("span",Ya,$(a.value.type),1)]),e("div",Qa,[e("div",Ja,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=o=>Ne("x",o.target.value))},null,40,Ka)]),e("div",Xa,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=o=>Ne("y",o.target.value))},null,40,Za)]),e("div",es,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=o=>Ne("width",o.target.value))},null,40,ts)]),e("div",os,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=o=>Ne("height",o.target.value))},null,40,ns)]),e("div",ls,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>Ne("rotation",o.target.value))},null,40,is)]),e("div",as,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>Ne("opacity",o.target.value))},null,40,ss)])])],2),e("div",{class:K(["panel-section",be.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",rs,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:h},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${U.value}`},[(l(!0),i(Z,null,ce(jn.value,o=>(l(),i("span",{key:o.id,class:K(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:pe({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",us,[(l(),i(Z,null,ce(Lt,o=>e("button",{key:o.value,type:"button",class:K(["motion-card",q.value.type===o.value&&"active"]),onClick:ne=>z({type:o.value})},[e("span",cs,[e("span",{class:K(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",ps)):G("",!0),o.value==="stagger-in"?(l(),i("span",vs)):G("",!0)]),e("span",fs,$(o.label),1)],10,ds)),64))]),e("div",ms,[e("div",gs,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:q.value.delay,class:"input",onChange:t[45]||(t[45]=o=>z({delay:o.target.value}))},null,40,bs)]),e("div",hs,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:q.value.duration,class:"input",onChange:t[46]||(t[46]=o=>z({duration:o.target.value}))},null,40,ys)])]),e("div",xs,[de(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>W.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[ye,W.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Tn},"Save")]),e("div",ws,[de(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>me.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[ye,me.value]]),de(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>Me.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[ye,Me.value]])]),w.value.length?(l(),i("div",ks,[(l(!0),i(Z,null,ce(w.value,o=>(l(),i("div",{key:o.id,class:K(["preset-item",te.value===o.id&&"dragging",fe.value===o.id&&te.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:ne=>d(o),onDragenter:ze(ne=>n(o),["prevent"]),onDragover:t[53]||(t[53]=ze(()=>{},["prevent"])),onDrop:ze(ne=>b(o),["prevent"]),onDragend:V},[e("button",{type:"button",class:"preset-chip",onClick:ne=>zt(o)},$(o.name),9,$s),o.category?(l(),i("span",Ss,$(o.category),1)):G("",!0),(l(!0),i(Z,null,ce(o.tags||[],ne=>(l(),i("span",{key:`${o.id}-${ne}`,class:"preset-meta-chip muted"},"#"+$(ne),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:ne=>he(o)},"Duplicate",8,Is),e("button",{type:"button",class:"preset-mini-btn",onClick:ne=>Xe(o)},"Rename",8,As),e("button",{type:"button",class:"preset-mini-btn danger",onClick:ne=>oe(o.id)},"Delete",8,Es),k.value===o.id?(l(),i("div",Ms,[de(e("input",{"onUpdate:modelValue":t[50]||(t[50]=ne=>M.value=ne),class:"input"},null,512),[[ye,M.value]]),de(e("input",{"onUpdate:modelValue":t[51]||(t[51]=ne=>le.value=ne),class:"input",placeholder:"Category"},null,512),[[ye,le.value]]),de(e("input",{"onUpdate:modelValue":t[52]||(t[52]=ne=>ee.value=ne),class:"input",placeholder:"Tags, comma separated"},null,512),[[ye,ee.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ne=>Te(o.id)},"Save",8,Ps),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Le},"Cancel")])):G("",!0)],42,Cs))),128))])):ve.value.length?(l(),i("div",Ts,"No single-element presets match the current search.")):G("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:K(["panel-section",be.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",Ns,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(ht=a.value.content)==null?void 0:ht.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>m({text:o.target.value}))},null,40,zs)]),e("div",Bs,[e("div",Ls,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(ot=a.value.content)==null?void 0:ot.fontSize,class:"input",onChange:t[55]||(t[55]=o=>m({fontSize:+o.target.value}))},null,40,js)]),e("div",_s,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:($t=a.value.content)==null?void 0:$t.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>m({fontWeight:o.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Ds)])]),e("div",qs,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(_t=a.value.content)==null?void 0:_t.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>m({fontFamily:o.target.value}))},[(l(),i(Z,null,ce(jt,o=>e("option",{key:o,value:o},$(o.split(",")[0]),9,Fs)),64))],40,Rs)]),e("div",Us,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",Os,[(l(),i(Z,null,ce(["left","center","right","justify"],o=>{var ne;return e("button",{key:o,class:K(["align-btn",((ne=a.value.content)==null?void 0:ne.textAlign)===o&&"active"]),onClick:hn=>m({textAlign:o})},$(o[0].toUpperCase()),11,Vs)}),64))])]),e("div",Ws,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",Gs,[e("button",{class:K(["style-btn",((Dt=a.value.content)==null?void 0:Dt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var ne;return m({fontStyle:((ne=a.value.content)==null?void 0:ne.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:K(["style-btn",((qt=a.value.content)==null?void 0:qt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var ne;return m({textDecoration:((ne=a.value.content)==null?void 0:ne.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:K(["style-btn",((Rt=a.value.content)==null?void 0:Rt.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var ne;return m({textDecoration:((ne=a.value.content)==null?void 0:ne.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",Hs,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",Ys,[e("input",{type:"color",value:((Ft=a.value.content)==null?void 0:Ft.color)||"#000",onInput:t[61]||(t[61]=o=>m({color:o.target.value})),class:"color-input-native"},null,40,Qs),e("input",{value:((Ut=a.value.content)==null?void 0:Ut.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>m({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Js)])]),e("div",Ks,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Ot=a.value.content)==null?void 0:Ot.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>m({lineHeight:+o.target.value}))},null,40,Xs)]),e("div",Zs,[e("div",er,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Vt=a.value.content)==null?void 0:Vt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>m({textTransform:o.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,tr)]),e("div",or,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Wt=a.value.content)==null?void 0:Wt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>m({letterSpacing:+o.target.value}))},null,40,nr)])])],2)):G("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:K(["panel-section",be.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",lr,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Gt=a.value.content)==null?void 0:Gt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>m({src:o.target.value}))},null,40,ir)]),e("div",ar,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Ht=a.value.content)==null?void 0:Ht.alt,class:"input",onInput:t[67]||(t[67]=o=>m({alt:o.target.value}))},null,40,sr)]),e("div",rr,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Yt=a.value.content)==null?void 0:Yt.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>m({objectFit:o.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,ur)]),e("div",dr,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((Qt=a.value.content)==null?void 0:Qt.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>m({borderRadius:+o.target.value}))},null,40,cr)]),e("div",pr,[e("div",vr,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Jt=a.value.content)==null?void 0:Jt.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>m({borderWidth:+o.target.value}))},null,40,fr)]),e("div",mr,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Kt=a.value.content)==null?void 0:Kt.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>m({borderColor:o.target.value}))},null,40,gr)])])],2)):G("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:K(["panel-section",be.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",br,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((Xt=a.value.content)==null?void 0:Xt.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>m({shapeType:o.target.value}))},[...t[215]||(t[215]=[et('<option value="rectangle" data-v-1d3dcef4>Rectangle</option><option value="circle" data-v-1d3dcef4>Circle</option><option value="triangle" data-v-1d3dcef4>Triangle</option><option value="star" data-v-1d3dcef4>Star</option><option value="arrow" data-v-1d3dcef4>Arrow</option><option value="diamond" data-v-1d3dcef4>Diamond</option>',6)])],40,hr)]),e("div",yr,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",xr,[e("input",{type:"color",value:((Zt=a.value.content)==null?void 0:Zt.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>m({fillColor:o.target.value})),class:"color-input-native"},null,40,wr),e("input",{value:((eo=a.value.content)==null?void 0:eo.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>m({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,kr)])]),e("div",Cr,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",$r,[e("input",{type:"color",value:((to=a.value.content)==null?void 0:to.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>m({borderColor:o.target.value})),class:"color-input-native"},null,40,Sr),e("input",{value:((oo=a.value.content)==null?void 0:oo.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>m({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ir)])]),e("div",Ar,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((no=a.value.content)==null?void 0:no.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>m({borderWidth:+o.target.value}))},null,40,Er)]),e("div",Mr,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((lo=a.value.content)==null?void 0:lo.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>m({borderRadius:+o.target.value}))},null,40,Pr)]),e("div",Tr,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((io=a.value.content)==null?void 0:io.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>m({opacity:+o.target.value}))},null,40,Nr)])],2)):G("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:K(["panel-section",be.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",zr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((ao=a.value.content)==null?void 0:ao.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=o=>m({chartType:o.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Br)]),e("div",Lr,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((so=a.value.content)==null?void 0:so.title)||"",class:"input",onInput:t[81]||(t[81]=o=>m({title:o.target.value}))},null,40,jr)]),e("div",_r,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((ro=a.value.content)==null?void 0:ro.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=o=>m({dataText:o.target.value}))},null,40,Dr),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:st},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:xt},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",qr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),de(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=o=>ae.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[ye,ae.value]]),e("div",Rr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=o=>ft(ae.value))},"Convert pasted data")])]),e("div",Fr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((uo=a.value.content)==null?void 0:uo.paletteText)||"",class:"input",placeholder:He.value.paletteText,onInput:t[85]||(t[85]=o=>m({paletteText:o.target.value}))},null,40,Ur),e("div",Or,[(l(!0),i(Z,null,ce(yt.value,(o,ne)=>(l(),i("span",{key:`chart-palette-${ne}`,class:"chart-palette-swatch",style:pe({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:kt},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:wt},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Vr,[e("div",Wr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((co=a.value.content)==null?void 0:co.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=o=>m({backgroundColor:o.target.value}))},null,40,Gr)]),e("div",Hr,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((po=a.value.content)==null?void 0:po.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=o=>m({textColor:o.target.value}))},null,40,Yr)])]),e("div",Qr,[e("div",Jr,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((vo=a.value.content)==null?void 0:vo.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=o=>m({gridColor:o.target.value}))},null,40,Kr)]),e("div",Xr,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((fo=a.value.content)==null?void 0:fo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=o=>m({borderColor:o.target.value}))},null,40,Zr)])]),e("div",eu,[e("div",tu,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((mo=a.value.content)==null?void 0:mo.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=o=>m({borderWidth:+o.target.value}))},null,40,ou)]),((go=a.value.content)==null?void 0:go.chartType)!=="circle"?(l(),i("div",nu,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((bo=a.value.content)==null?void 0:bo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=o=>m({maxValue:o.target.value}))},null,40,lu)])):(l(),i("div",iu,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((ho=a.value.content)==null?void 0:ho.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=o=>m({innerRadius:+o.target.value}))},null,40,au)]))]),((yo=a.value.content)==null?void 0:yo.chartType)==="line"?(l(),i("div",su,[e("div",ru,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((xo=a.value.content)==null?void 0:xo.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=o=>m({strokeWidth:+o.target.value}))},null,40,uu)]),e("label",du,[e("input",{type:"checkbox",checked:!!((wo=a.value.content)!=null&&wo.showArea),onChange:t[94]||(t[94]=o=>m({showArea:o.target.checked}))},null,40,cu),t[239]||(t[239]=X(" Show area fill ",-1))])])):G("",!0),e("label",pu,[e("input",{type:"checkbox",checked:((ko=a.value.content)==null?void 0:ko.showLegend)!==!1,onChange:t[95]||(t[95]=o=>m({showLegend:o.target.checked}))},null,40,vu),t[240]||(t[240]=X(" Show legend ",-1))]),((Co=a.value.content)==null?void 0:Co.chartType)!=="circle"?(l(),i("label",fu,[e("input",{type:"checkbox",checked:(($o=a.value.content)==null?void 0:$o.showGrid)!==!1,onChange:t[96]||(t[96]=o=>m({showGrid:o.target.checked}))},null,40,mu),t[241]||(t[241]=X(" Show grid lines ",-1))])):G("",!0),e("label",gu,[e("input",{type:"checkbox",checked:((So=a.value.content)==null?void 0:So.showValues)!==!1,onChange:t[97]||(t[97]=o=>m({showValues:o.target.checked}))},null,40,bu),t[242]||(t[242]=X(" Show values ",-1))])],2)):G("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:K(["panel-section",be.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",hu,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Io=a.value.content)==null?void 0:Io.label,class:"input",onInput:t[98]||(t[98]=o=>m({label:o.target.value}))},null,40,yu)]),e("div",xu,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Ao=a.value.content)==null?void 0:Ao.variant)||"primary",class:"select",onChange:t[99]||(t[99]=o=>m({variant:o.target.value}))},[...t[245]||(t[245]=[et('<option value="primary" data-v-1d3dcef4>Primary</option><option value="secondary" data-v-1d3dcef4>Secondary</option><option value="outline" data-v-1d3dcef4>Outline</option><option value="ghost" data-v-1d3dcef4>Ghost</option><option value="danger" data-v-1d3dcef4>Danger</option>',5)])],40,wu)]),e("div",ku,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Eo=a.value.content)==null?void 0:Eo.action)||"none",class:"select",onChange:t[100]||(t[100]=o=>m({action:o.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Cu)]),(Mo=a.value.content)!=null&&Mo.action&&a.value.content.action!=="none"?(l(),i("div",$u,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Po=a.value.content)==null?void 0:Po.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=o=>m({target:o.target.value}))},null,40,Su)])):G("",!0),e("div",Iu,[e("div",Au,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((To=a.value.content)==null?void 0:To.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=o=>m({bgColor:o.target.value}))},null,40,Eu)]),e("div",Mu,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((No=a.value.content)==null?void 0:No.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=o=>m({textColor:o.target.value}))},null,40,Pu)])]),e("div",Tu,[e("div",Nu,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((zo=a.value.content)==null?void 0:zo.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=o=>m({borderColor:o.target.value}))},null,40,zu)]),e("div",Bu,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Bo=a.value.content)==null?void 0:Bo.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=o=>m({borderRadius:+o.target.value}))},null,40,Lu)])]),e("div",ju,[e("div",_u,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Lo=a.value.content)==null?void 0:Lo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=o=>m({fontSize:+o.target.value}))},null,40,Du)]),e("div",qu,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((jo=a.value.content)==null?void 0:jo.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=o=>m({fontWeight:+o.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Ru)])]),e("div",Fu,[e("div",Uu,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((_o=a.value.content)==null?void 0:_o.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=o=>m({fontFamily:o.target.value}))},[(l(),i(Z,null,ce(jt,o=>e("option",{key:`btn-${o}`,value:o},$(o.split(",")[0]),9,Vu)),64))],40,Ou)]),e("div",Wu,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Do=a.value.content)==null?void 0:Do.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=o=>m({letterSpacing:+o.target.value}))},null,40,Gu)])])],2)):G("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:K(["panel-section",be.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Hu,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((qo=a.value.content)==null?void 0:qo.icon)||"?",class:"select",onChange:t[110]||(t[110]=o=>m({icon:o.target.value}))},[...t[260]||(t[260]=[et('<option value="?" data-v-1d3dcef4>? (Info)</option><option value="!" data-v-1d3dcef4>! (Alert)</option><option value="+" data-v-1d3dcef4>+ (Plus)</option><option value="i" data-v-1d3dcef4>i (Info)</option><option value="✦" data-v-1d3dcef4>✦ (Star)</option>',5)])],40,Yu)]),e("div",Qu,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",Ju,[e("input",{type:"color",value:((Ro=a.value.content)==null?void 0:Ro.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=o=>m({bgColor:o.target.value})),class:"color-input-native"},null,40,Ku),e("input",{value:((Fo=a.value.content)==null?void 0:Fo.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=o=>m({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Xu)])]),e("div",Zu,[e("div",ed,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Uo=a.value.content)==null?void 0:Uo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=o=>m({iconColor:o.target.value}))},null,40,td)]),e("div",od,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Oo=a.value.content)==null?void 0:Oo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=o=>m({borderRadius:+o.target.value}))},null,40,nd)])]),e("div",ld,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Vo=a.value.content)==null?void 0:Vo.popupTitle,class:"input",onInput:t[115]||(t[115]=o=>m({popupTitle:o.target.value}))},null,40,id)]),e("div",ad,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Wo=a.value.content)==null?void 0:Wo.popupContent,class:"textarea",onInput:t[116]||(t[116]=o=>m({popupContent:o.target.value}))},null,40,sd)]),e("div",rd,[e("div",ud,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Go=a.value.content)==null?void 0:Go.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>m({popupBgColor:o.target.value}))},null,40,dd)]),e("div",cd,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Ho=a.value.content)==null?void 0:Ho.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>m({popupTextColor:o.target.value}))},null,40,pd)])])],2)):G("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:K(["panel-section",be.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",vd,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Yo=a.value.content)==null?void 0:Yo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=o=>m({src:o.target.value}))},null,40,fd)]),e("div",md,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(Qo=a.value.content)==null?void 0:Qo.poster,class:"input",onInput:t[120]||(t[120]=o=>m({poster:o.target.value}))},null,40,gd)]),e("div",bd,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Jo=a.value.content)==null?void 0:Jo.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=o=>m({objectFit:o.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,hd)]),e("label",yd,[e("input",{type:"checkbox",checked:(Ko=a.value.content)==null?void 0:Ko.autoplay,onChange:t[122]||(t[122]=o=>m({autoplay:o.target.checked}))},null,40,xd),t[274]||(t[274]=X(" Autoplay ",-1))]),e("label",wd,[e("input",{type:"checkbox",checked:((Xo=a.value.content)==null?void 0:Xo.controls)??!0,onChange:t[123]||(t[123]=o=>m({controls:o.target.checked}))},null,40,kd),t[275]||(t[275]=X(" Show Controls ",-1))]),e("label",Cd,[e("input",{type:"checkbox",checked:(Zo=a.value.content)==null?void 0:Zo.loop,onChange:t[124]||(t[124]=o=>m({loop:o.target.checked}))},null,40,$d),t[276]||(t[276]=X(" Loop ",-1))]),e("label",Sd,[e("input",{type:"checkbox",checked:(en=a.value.content)==null?void 0:en.muted,onChange:t[125]||(t[125]=o=>m({muted:o.target.checked}))},null,40,Id),t[277]||(t[277]=X(" Muted ",-1))])],2)):G("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:K(["panel-section",be.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",Ad,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(tn=a.value.content)==null?void 0:tn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=o=>m({src:o.target.value}))},null,40,Ed)]),e("div",Md,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(on=a.value.content)==null?void 0:on.label,class:"input",onInput:t[127]||(t[127]=o=>m({label:o.target.value}))},null,40,Pd)]),e("label",Td,[e("input",{type:"checkbox",checked:(nn=a.value.content)==null?void 0:nn.autoplay,onChange:t[128]||(t[128]=o=>m({autoplay:o.target.checked}))},null,40,Nd),t[281]||(t[281]=X(" Autoplay ",-1))]),e("label",zd,[e("input",{type:"checkbox",checked:((ln=a.value.content)==null?void 0:ln.controls)!==!1,onChange:t[129]||(t[129]=o=>m({controls:o.target.checked}))},null,40,Bd),t[282]||(t[282]=X(" Show Controls ",-1))]),e("label",Ld,[e("input",{type:"checkbox",checked:(an=a.value.content)==null?void 0:an.loop,onChange:t[130]||(t[130]=o=>m({loop:o.target.checked}))},null,40,jd),t[283]||(t[283]=X(" Loop ",-1))]),e("div",_d,[e("div",Dd,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((sn=a.value.content)==null?void 0:sn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=o=>m({accentColor:o.target.value}))},null,40,qd)]),e("div",Rd,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((rn=a.value.content)==null?void 0:rn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=o=>m({textColor:o.target.value}))},null,40,Fd)])]),e("div",Ud,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((un=a.value.content)==null?void 0:un.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=o=>m({bgColor:o.target.value}))},null,40,Od)])],2)):G("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:K(["panel-section",be.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Vd,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(dn=a.value.content)==null?void 0:dn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=o=>m({question:o.target.value}))},null,40,Wd)]),e("div",Gd,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(pn=(cn=a.value.content)==null?void 0:cn.options)==null?void 0:pn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=o=>m({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,Hd)]),e("div",Yd,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((vn=a.value.content)==null?void 0:vn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=o=>m({correctIndex:+o.target.value}))},null,40,Qd)]),e("div",Jd,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(fn=a.value.content)==null?void 0:fn.explanation,class:"textarea",onInput:t[137]||(t[137]=o=>m({explanation:o.target.value}))},null,40,Kd)]),e("div",Xd,[e("div",Zd,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((mn=a.value.content)==null?void 0:mn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=o=>m({cardBgColor:o.target.value}))},null,40,ec)]),e("div",tc,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((gn=a.value.content)==null?void 0:gn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=o=>m({questionColor:o.target.value}))},null,40,oc)])]),e("div",nc,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((bn=a.value.content)==null?void 0:bn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=o=>m({accentColor:o.target.value}))},null,40,lc)])],2)):G("",!0),e("div",ic,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",ac,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=o=>A(s).duplicateElement(A(r).projectId,A(r).currentSlideId,a.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),X(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=o=>{A(r).showInteractionEditor=!0,A(r).interactionElementId=a.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),X(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=o=>{A(s).deleteElement(A(r).projectId,A(r).currentSlideId,a.value.id),A(r).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),X(" Delete Element ",-1)])])])])],64)):(l(),i("div",oa,[e("div",na,[e("button",{type:"button",class:K(["slide-settings-tab",se.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>se.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:K(["slide-settings-tab",se.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>se.value="transitions")},[...t[150]||(t[150]=[et('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-1d3dcef4><path d="M5 7h5" data-v-1d3dcef4></path><path d="M5 12h10" data-v-1d3dcef4></path><path d="M5 17h14" data-v-1d3dcef4></path><path d="M14 7l5 5-5 5" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Transitions</span>',2)])],2),e("button",{type:"button",class:K(["slide-settings-tab",se.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>se.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),se.value==="canvas"?(l(),i("div",la,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",ia,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),de(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>we.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>De("title",we.value.title))},null,544),[[ye,we.value.title]])]),e("div",aa,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",sa,[(l(),i(Z,null,ce(["color","gradient","image"],o=>{var ne;return e("button",{key:o,class:K(["bg-type-btn",(((ne=p.value)==null?void 0:ne.backgroundType)||"color")===o&&"active"]),onClick:hn=>qe({backgroundType:o})},$(o),11,ra)}),64))]),(((_=p.value)==null?void 0:_.backgroundType)||"color")==="color"?(l(),i("div",ua,[e("input",{type:"color",value:((ue=p.value)==null?void 0:ue.background)||"#ffffff",onInput:t[20]||(t[20]=o=>qe({background:o.target.value})),class:"color-input-native"},null,40,da),e("input",{value:((ke=p.value)==null?void 0:ke.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>qe({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,ca)])):((Ee=p.value)==null?void 0:Ee.backgroundType)==="gradient"?de((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>we.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>qe({backgroundGradient:we.value.backgroundGradient}))},null,544)),[[ye,we.value.backgroundGradient]]):de((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>we.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>qe({backgroundImage:we.value.backgroundImage}))},null,544)),[[ye,we.value.backgroundImage]])]),e("div",pa,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",va,[(l(!0),i(Z,null,ce(A(Kn),o=>{var ne;return l(),i("button",{key:o.id,type:"button",class:K(["canvas-size-card",((ne=g.value)==null?void 0:ne.id)===o.id&&"active"]),onClick:hn=>Re(o)},[e("span",ma,[e("span",{class:K(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",ga,$(o.label),1),e("span",ba,$(o.ratioLabel),1)],10,fa)}),128))]),e("div",ha,[e("div",ya,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",xa,"Current ratio "+$(F.value),1)]),e("div",wa,[e("div",ka,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Ca,[e("input",{type:"number",min:"320",max:"4096",value:x.value.width,class:"input",onChange:t[26]||(t[26]=o=>tt("width",o.target.value))},null,40,$a),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Sa,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",Ia,[e("input",{type:"number",min:"320",max:"4096",value:x.value.height,class:"input",onChange:t[27]||(t[27]=o=>tt("height",o.target.value))},null,40,Aa),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",Ea,[de(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>ge.value=o)},null,512),[[At,ge.value]]),t[161]||(t[161]=X(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=et('<div class="canvas-size-callout" data-v-1d3dcef4><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1d3dcef4><circle cx="12" cy="12" r="9" data-v-1d3dcef4></circle><path d="M12 10v6" data-v-1d3dcef4></path><path d="M12 7h.01" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",Ma,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),de(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>we.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>De("notes",we.value.notes))},null,544),[[ye,we.value.notes]])])])):se.value==="transitions"?(l(),i("div",Pa,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((We=p.value)==null?void 0:We.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>qe({transition:o.target.value}))},[...t[167]||(t[167]=[et('<option value="none" data-v-1d3dcef4>None</option><option value="fade" data-v-1d3dcef4>Fade</option><option value="slide" data-v-1d3dcef4>Slide</option><option value="zoom" data-v-1d3dcef4>Zoom</option><option value="flip" data-v-1d3dcef4>Flip</option>',5)])],40,Ta),e("div",Na,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((je=p.value)==null?void 0:je.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>Ze(o.target.value))},null,40,za),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Ba,[e("input",{type:"checkbox",checked:!!((ct=p.value)!=null&&ct.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>qe({advanceOnMediaEnd:o.target.checked}))},null,40,La),t[170]||(t[170]=X(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",ja,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",_a,[e("input",{type:"checkbox",checked:y.value.autoPlay,onChange:t[34]||(t[34]=o=>Ae({autoPlay:o.target.checked}))},null,40,Da),t[173]||(t[173]=X(" Autoplay preview and exported presentation ",-1))]),e("label",qa,[e("input",{type:"checkbox",checked:y.value.loop,onChange:t[35]||(t[35]=o=>Ae({loop:o.target.checked}))},null,40,Ra),t[174]||(t[174]=X(" Loop back to the first slide at the end ",-1))]),e("label",Fa,[e("input",{type:"checkbox",checked:y.value.showProgress,onChange:t[36]||(t[36]=o=>Ae({showProgress:o.target.checked}))},null,40,Ua),t[175]||(t[175]=X(" Show progress bar in preview ",-1))]),e("label",Oa,[e("input",{type:"checkbox",checked:y.value.showNavControls,onChange:t[37]||(t[37]=o=>Ae({showNavControls:o.target.checked}))},null,40,Va),t[176]||(t[176]=X(" Show previous/next and dot navigation ",-1))]),e("label",Wa,[e("input",{type:"checkbox",checked:y.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>Ae({allowKeyboardNav:o.target.checked}))},null,40,Ga),t[177]||(t[177]=X(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},rc=Ye(sc,[["__scopeId","data-v-1d3dcef4"]]),uc={class:"editor-toolbar"},dc={class:"toolbar-group"},cc={class:"toolbar-group"},pc=["data-tooltip","onClick"],vc={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},fc={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},mc={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},gc={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},bc={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},hc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},yc={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},xc={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wc={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kc={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Cc={class:"tool-label"},$c={class:"toolbar-group"},Sc={class:"toolbar-group"},Ic={class:"toolbar-group"},Ac={__name:"EditorToolbar",emits:["open-ai-project"],setup(S,{emit:r}){const s=r,c=nt();lt();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function y(x){c.setActiveTool(x)}return(x,g)=>(l(),i("div",uc,[e("div",dc,[e("button",{class:K(["tool-btn",A(c).activeTool==="select"&&"active"]),onClick:g[0]||(g[0]=F=>y("select")),"data-tooltip":"Select (V)"},[...g[7]||(g[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),g[23]||(g[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",cc,[(l(),i(Z,null,ce(p,F=>e("button",{key:F.id,class:K(["tool-btn",A(c).activeTool===F.id&&"active"]),"data-tooltip":F.tooltip,onClick:ge=>y(F.id)},[F.icon==="text"?(l(),i("svg",vc,[...g[8]||(g[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):F.icon==="heading"?(l(),i("svg",fc,[...g[9]||(g[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):F.icon==="image"?(l(),i("svg",mc,[...g[10]||(g[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):F.icon==="shape"?(l(),i("svg",gc,[...g[11]||(g[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):F.icon==="button"?(l(),i("svg",bc,[...g[12]||(g[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):F.icon==="hotspot"?(l(),i("svg",hc,[...g[13]||(g[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):F.icon==="video"?(l(),i("svg",yc,[...g[14]||(g[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):F.icon==="audio"?(l(),i("svg",xc,[...g[15]||(g[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):F.icon==="quiz"?(l(),i("svg",wc,[...g[16]||(g[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):F.icon==="chart"?(l(),i("svg",kc,[...g[17]||(g[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):G("",!0),e("span",Cc,$(F.label),1)],10,pc)),64))]),g[24]||(g[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",$c,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:g[1]||(g[1]=F=>s("open-ai-project")),"data-tooltip":"Create a new AI project"},[...g[18]||(g[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),g[25]||(g[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Sc,[e("button",{class:"tool-btn",onClick:g[2]||(g[2]=F=>A(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...g[19]||(g[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:g[3]||(g[3]=F=>A(c).zoomReset())},$(Math.round(A(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:g[4]||(g[4]=F=>A(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...g[20]||(g[20]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),g[26]||(g[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Ic,[e("button",{class:K(["tool-btn",A(c).showGrid&&"active"]),onClick:g[5]||(g[5]=F=>A(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...g[21]||(g[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:K(["tool-btn",A(c).snapToGrid&&"active"]),onClick:g[6]||(g[6]=F=>A(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...g[22]||(g[22]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},Ec=Ye(Ac,[["__scopeId","data-v-d964cc0f"]]),Mc=["onMousedown"],Pc={key:1,class:"selection-border locked-border"},Tc={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(S){const r=S,s=nt(),c=lt(),p=Dn("canvasScale",L(1)),y=T(()=>s.projectId),x=T(()=>s.currentSlideId),g=T(()=>s.selectedElementIds.includes(r.element.id)),F=T(()=>r.element.locked),ge=T(()=>r.element.visible!==!1),se=T(()=>{const Q=r.element.content||{};return!!(Q.text||Q.label||Q.question||Q.popupTitle||Q.popupContent)});let R=!1,ve=0,H=0,D=new Map;function a(Q){if(!s.snapToGrid||!s.gridSize)return Q;const ie=s.gridSize;return Math.round(Q/ie)*ie}function C(Q){var ae;if(F.value||Q.target.classList.contains("resize-handle"))return;const ie=Q.ctrlKey||Q.metaKey||Q.shiftKey;g.value?ie&&s.selectElement(r.element.id,!0):s.selectElement(r.element.id,ie),s.setActiveTool("select"),R=!1,ve=Q.clientX,H=Q.clientY,D.clear();const J=(ae=c.getProject(y.value))==null?void 0:ae.slides.find(Se=>Se.id===x.value);J&&s.selectedElementIds.forEach(Se=>{const be=J.elements.find(N=>N.id===Se);be&&!be.locked&&D.set(Se,{x:be.x,y:be.y})}),window.addEventListener("mousemove",E),window.addEventListener("mouseup",q),Q.stopPropagation()}function E(Q){const ie=(Q.clientX-ve)/p.value,J=(Q.clientY-H)/p.value;!R&&(Math.abs(ie)>3||Math.abs(J)>3)&&(R=!0),R&&D.forEach((ae,Se)=>{const be=ae.x+ie,N=ae.y+J;c.updateElement(y.value,x.value,Se,{x:be,y:N},{persist:!1})})}function q(Q){if(R){const ie=(Q.clientX-ve)/p.value,J=(Q.clientY-H)/p.value;D.forEach((ae,Se)=>{c.updateElement(y.value,x.value,Se,{x:a(ae.x+ie),y:a(ae.y+J)},{persist:!1})}),c.commitProject(y.value)}R||!(Q.ctrlKey||Q.metaKey||Q.shiftKey)&&s.selectedElementIds.length>1&&s.selectElement(r.element.id,!1),R=!1,window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",q)}const v=["n","ne","e","se","s","sw","w","nw"];let U=!1,P="",W=0,B=0,k=0,M=0,le=0,ee=0;function te(Q,ie){F.value||(Q.stopPropagation(),Q.preventDefault(),U=!0,P=ie,W=Q.clientX,B=Q.clientY,k=r.element.width,M=r.element.height,le=r.element.x,ee=r.element.y,window.addEventListener("mousemove",fe),window.addEventListener("mouseup",me))}function fe(Q){if(!U)return;const ie=p.value,J=(Q.clientX-W)/ie,ae=(Q.clientY-B)/ie,Se=20;let be=le,N=ee,I=k,j=M;if(P.includes("e")&&(I=Math.max(Se,k+J)),P.includes("s")&&(j=Math.max(Se,M+ae)),P.includes("w")){const m=Math.max(Se,k-J);be=le+(k-m),I=m}if(P.includes("n")){const m=Math.max(Se,M-ae);N=ee+(M-m),j=m}if(s.snapToGrid&&s.gridSize){const m=s.gridSize;I=Math.round(I/m)*m,j=Math.round(j/m)*m,be=Math.round(be/m)*m,N=Math.round(N/m)*m}c.updateElement(y.value,x.value,r.element.id,{x:be,y:N,width:I,height:j})}function me(){U=!1,window.removeEventListener("mousemove",fe),window.removeEventListener("mouseup",me)}function Me(){["text","heading"].includes(r.element.type)&&s.focusPropertiesSection("content")}const Pe=T(()=>({position:"absolute",left:`${r.element.x}px`,top:`${r.element.y}px`,width:`${r.element.width}px`,height:`${r.element.height}px`,transform:`rotate(${r.element.rotation||0}deg)`,opacity:r.element.opacity??1,zIndex:r.element.zIndex||1,cursor:F.value?"not-allowed":"move",visibility:ge.value?"visible":"hidden",userSelect:"none"}));function Ce(Q){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[Q]||"auto"}function Ie(Q="content"){s.focusPropertiesSection(Q)}function Qe(){const Q=se.value?"improve":r.element.type==="image"?"image":"generate";s.openAIPanel(Q)}function _e(){const Q=c.duplicateElement(y.value,x.value,r.element.id);Q&&(s.selectElement(Q.id),s.focusPropertiesSection("geometry"))}function Oe(){c.deleteElement(y.value,x.value,r.element.id),s.clearSelection()}return(Q,ie)=>(l(),i("div",{class:K(["element-wrapper",g.value&&"selected",F.value&&"locked"]),style:pe(Pe.value),onMousedown:C,onDblclick:Me},[qn(Q.$slots,"default",{},void 0),g.value&&!F.value?(l(),i(Z,{key:0},[ie[6]||(ie[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:ie[3]||(ie[3]=ze(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:ie[0]||(ie[0]=J=>Ie("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:ie[1]||(ie[1]=J=>Ie("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:ie[2]||(ie[2]=J=>Ie("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Qe},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:_e,title:"Duplicate element","aria-label":"Duplicate element"},[...ie[4]||(ie[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Oe,title:"Delete element","aria-label":"Delete element"},[...ie[5]||(ie[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(Z,null,ce(v,J=>e("div",{key:J,class:K(["resize-handle",`handle-${J}`]),style:pe({cursor:Ce(J)}),onMousedown:ze(ae=>te(ae,J),["stop"])},null,46,Mc)),64))],64)):G("",!0),g.value&&F.value?(l(),i("div",Pc)):G("",!0)],38))}},Nc=Ye(Tc,[["__scopeId","data-v-d539ca8b"]]),Mt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(S){const r=S,s=T(()=>r.element.content||{}),c=nt(),p=lt(),y=L(!1),x=L(null),g=L("");Ke(()=>s.value.text,R=>{y.value||(g.value=R||(r.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function F(){c.selectedElementId===r.element.id&&(y.value=!0,$n(()=>{if(x.value)if(x.value.focus(),typeof x.value.setSelectionRange=="function"){const R=x.value.value.length;x.value.setSelectionRange(R,R)}else{const R=document.createRange();R.selectNodeContents(x.value),R.collapse(!1);const ve=window.getSelection();ve.removeAllRanges(),ve.addRange(R)}}))}function ge(R){y.value&&R.stopPropagation()}function se(){y.value=!1;const R=g.value;p.updateElement(c.projectId,c.currentSlideId,r.element.id,{content:{...r.element.content,text:R}})}return(R,ve)=>y.value?de((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:x,"onUpdate:modelValue":ve[0]||(ve[0]=H=>g.value=H),onBlur:se,onMousedown:ge,style:pe({fontSize:(s.value.fontSize||16)+"px",fontFamily:s.value.fontFamily||"Inter, sans-serif",fontWeight:s.value.fontWeight||"normal",fontStyle:s.value.fontStyle||"normal",textDecoration:s.value.textDecoration||"none",textAlign:s.value.textAlign||"left",color:s.value.color||"#1a1a2e",lineHeight:s.value.lineHeight||1.5,textTransform:s.value.textTransform||"none",letterSpacing:(s.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[ye,g.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:F,style:pe({fontSize:(s.value.fontSize||16)+"px",fontFamily:s.value.fontFamily||"Inter, sans-serif",fontWeight:s.value.fontWeight||"normal",fontStyle:s.value.fontStyle||"normal",textDecoration:s.value.textDecoration||"none",textAlign:s.value.textAlign||"left",color:s.value.color||"#1a1a2e",lineHeight:s.value.lineHeight||1.5,textTransform:s.value.textTransform||"none",letterSpacing:(s.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},$(g.value),37))}},zc=["src","alt"],Bc={key:1,class:"image-placeholder"},Lc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},jc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(S){return(r,s)=>{var c,p,y,x;return l(),i("div",{class:"image-element",style:pe({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((c=S.element.content)==null?void 0:c.borderRadius)||0)+"px",border:`${((p=S.element.content)==null?void 0:p.borderWidth)||0}px solid ${((y=S.element.content)==null?void 0:y.borderColor)||"transparent"}`})},[(x=S.element.content)!=null&&x.src?(l(),i("img",{key:0,src:S.element.content.src,alt:S.element.content.alt||"",style:pe({width:"100%",height:"100%",objectFit:S.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,zc)):(l(),i("div",Bc,[(l(),i("svg",Lc,[...s[0]||(s[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),s[1]||(s[1]=e("span",null,"Image",-1))]))],4)}}},_c=Ye(jc,[["__scopeId","data-v-401e9ff3"]]),Dc={class:"shape-element",style:{width:"100%",height:"100%"}},qc=["width","height"],Rc=["points","fill","stroke","stroke-width"],Fc={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(S){const r=S,s=T(()=>r.element.content||{}),c=T(()=>{const x=s.value.shapeType||"rectangle",g={width:"100%",height:"100%",background:s.value.fillColor||"#6c47ff",border:`${s.value.borderWidth||0}px solid ${s.value.borderColor||"transparent"}`,opacity:s.value.opacity??1};return x==="circle"?{...g,borderRadius:"50%"}:x==="rectangle"?{...g,borderRadius:(s.value.borderRadius||0)+"px"}:g}),p=T(()=>["triangle","star","arrow","diamond"].includes(s.value.shapeType)),y=T(()=>{const x=r.element.width||150,g=r.element.height||100,F=s.value.shapeType;if(F==="triangle")return`${x/2},0 ${x},${g} 0,${g}`;if(F==="diamond")return`${x/2},0 ${x},${g/2} ${x/2},${g} 0,${g/2}`;if(F==="arrow")return`0,${g*.3} ${x*.6},${g*.3} ${x*.6},0 ${x},${g/2} ${x*.6},${g} ${x*.6},${g*.7} 0,${g*.7}`;if(F==="star"){const ge=x/2,se=g/2,R=Math.min(x,g)/2,ve=R*.4;let H="";for(let D=0;D<10;D++){const a=(D*36-90)*Math.PI/180,C=D%2===0?R:ve;H+=`${ge+C*Math.cos(a)},${se+C*Math.sin(a)} `}return H.trim()}return""});return(x,g)=>(l(),i("div",Dc,[p.value?(l(),i("svg",{key:1,width:S.element.width,height:S.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:y.value,fill:s.value.fillColor||"#6c47ff",stroke:s.value.borderColor||"none","stroke-width":s.value.borderWidth||0},null,8,Rc)],8,qc)):(l(),i("div",{key:0,style:pe(c.value)},null,4))]))}},Uc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(S){const r=S,s=T(()=>r.element.content||{}),c=T(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},y=p[s.value.variant||"primary"]||p.primary;return{...y,background:s.value.bgColor||y.background,color:s.value.textColor||y.color,border:s.value.borderColor?`1px solid ${s.value.borderColor}`:y.border,borderRadius:(s.value.borderRadius??8)+"px"}});return(p,y)=>(l(),i("div",{class:"button-element",style:pe({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(s.value.fontSize??15)+"px",fontWeight:s.value.fontWeight??600,letterSpacing:(s.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:s.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},$(s.value.label||"Button"),5))}},Oc={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Vc={class:"popup-header"},Wc={class:"popup-body"},Gc={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(S){const r=S,s=T(()=>r.element.content||{}),c=L(!1);function p(y){y.stopPropagation(),c.value=!c.value}return(y,x)=>(l(),i("div",Oc,[e("div",{class:"hotspot-btn",style:pe({width:"100%",height:"100%",background:s.value.bgColor||"#6c47ff",borderRadius:(s.value.borderRadius??999)>=999?"50%":(s.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:s.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:ze(p,["stop"])},$(s.value.icon||"?"),5),pt(It,{name:"fade"},{default:ut(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:pe({background:s.value.popupBgColor||"#ffffff",color:s.value.popupTextColor||"#1a1a2e"})},[e("div",Vc,[e("strong",null,$(s.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:x[0]||(x[0]=ze(g=>c.value=!1,["stop"]))},"×")]),e("div",Wc,$(s.value.popupContent||"Add your content in the properties panel."),1)],4)):G("",!0)]),_:1})]))}},Hc=Ye(Gc,[["__scopeId","data-v-ef5f15f6"]]),Yc={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},Qc=["src"],Jc=["src","poster","autoplay","controls","loop","muted"],Kc={key:2,class:"video-placeholder"},Xc={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Zc={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(S){const r=S,s=T(()=>r.element.content||{}),c=T(()=>{const y=s.value.src||"";return y.includes("youtube")||y.includes("youtu.be")}),p=T(()=>{var x,g;const y=s.value.src||"";if(c.value){const F=(x=y.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:x[1];return F?`https://www.youtube.com/embed/${F}`:""}if(y.includes("vimeo.com")){const F=(g=y.match(/vimeo\.com\/(\d+)/))==null?void 0:g[1];return F?`https://player.vimeo.com/video/${F}`:""}return""});return(y,x)=>(l(),i("div",Yc,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,Qc)):s.value.src&&!p.value?(l(),i("video",{key:1,src:s.value.src,poster:s.value.poster,autoplay:s.value.autoplay,controls:s.value.controls!==!1,loop:s.value.loop,muted:s.value.muted,style:pe({width:"100%",height:"100%",objectFit:s.value.objectFit||"cover"})},null,12,Jc)):(l(),i("div",Kc,[(l(),i("svg",Xc,[...x[0]||(x[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),x[1]||(x[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},ep=Ye(Zc,[["__scopeId","data-v-dfea1a16"]]),tp=["stroke"],op=["src","controls","autoplay","loop"],np={key:1,style:{"font-size":"11px",color:"#aaa"}},lp={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(S){return(r,s)=>{var c,p,y,x,g,F,ge,se,R;return l(),i("div",{class:"audio-element",style:pe({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=S.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=S.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((y=S.element.content)==null?void 0:y.accentColor)||"#6c47ff","stroke-width":"2"},[...s[1]||(s[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,tp)),e("span",{style:pe({fontSize:"13px",color:((x=S.element.content)==null?void 0:x.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},$(((g=S.element.content)==null?void 0:g.label)||"Audio Player"),5),(F=S.element.content)!=null&&F.src?(l(),i("audio",{key:0,src:S.element.content.src,controls:((ge=S.element.content)==null?void 0:ge.controls)!==!1,autoplay:(se=S.element.content)==null?void 0:se.autoplay,loop:(R=S.element.content)==null?void 0:R.loop,style:{height:"28px","max-width":"180px"},onMousedown:s[0]||(s[0]=ze(()=>{},["stop"]))},null,40,op)):(l(),i("span",np,"No source"))],4)}}},ip={class:"quiz-options"},ap=["onClick"],sp={class:"opt-letter"},rp={class:"opt-text"},up={key:0},dp={class:"quiz-actions"},cp=["disabled"],pp={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(S){const r=S,s=T(()=>r.element.content||{}),c=L(null),p=L(!1);function y(ge){p.value||(c.value=ge)}function x(){c.value!==null&&(p.value=!0)}function g(){c.value=null,p.value=!1}const F=T(()=>p.value&&c.value===(s.value.correctIndex??0));return(ge,se)=>(l(),i("div",{class:"quiz-element",style:pe({width:"100%",height:"100%",background:s.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":s.value.accentColor||"#6c47ff"})},[e("p",{style:pe({fontSize:"15px",fontWeight:600,color:s.value.questionColor||"#1a1a2e",lineHeight:1.4})},$(s.value.question||"Question text…"),5),e("div",ip,[(l(!0),i(Z,null,ce(s.value.options||[],(R,ve)=>(l(),i("div",{key:ve,class:K(["quiz-opt",c.value===ve&&"selected",p.value&&ve===s.value.correctIndex&&"correct",p.value&&c.value===ve&&ve!==s.value.correctIndex&&"wrong"]),onClick:H=>y(ve)},[e("span",sp,$(String.fromCharCode(65+ve)),1),e("span",rp,$(R),1)],10,ap))),128))]),p.value?(l(),i("div",{key:0,class:K(["quiz-feedback",F.value?"correct":"wrong"])},[X($(F.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!F.value&&s.value.explanation?(l(),i("span",up,$(s.value.explanation),1)):G("",!0)],2)):G("",!0),e("div",dp,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:g},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:x},"Submit",8,cp))])],4))}},vp=Ye(pp,[["__scopeId","data-v-ca2bd187"]]),fp={key:0,class:"canvas-empty"},mp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},gp={key:0,class:"canvas-device-frame","aria-hidden":"true"},bp=["value"],hp={class:"canvas-guide-label"},yp={key:5,class:"drop-hint"},xp={class:"canvas-info-bar"},wp=["disabled"],kp={class:"slide-index"},Cp=["disabled"],$p={key:0},Sp={__name:"EditorCanvas",setup(S){const r=nt(),s=lt(),c=L(null),p=L(null),y=L(1),x=T(()=>y.value*r.zoomLevel);Fn("canvasScale",x);const g=T(()=>s.getProject(r.projectId)),F=T(()=>Et(g.value)),ge=T(()=>Sn(g.value)),se=T(()=>F.value.width),R=T(()=>F.value.height),ve=T(()=>In(se.value,R.value)),H=T(()=>{var f,w;return(w=(f=g.value)==null?void 0:f.slides)==null?void 0:w.find(Y=>Y.id===r.currentSlideId)}),D=T(()=>{var f;return[...((f=g.value)==null?void 0:f.slides)||[]].sort((w,Y)=>w.order-Y.order)}),a=T(()=>D.value.findIndex(f=>f.id===r.currentSlideId)),C=T(()=>{var f;return{autoPlay:!1,motionPresets:[],...((f=g.value)==null?void 0:f.settings)||{}}}),E=T(()=>(Array.isArray(C.value.motionPresets)?C.value.motionPresets:[]).filter(f=>f.scope==="group")),q=T(()=>{const f=new Set(r.selectedElementIds);return B.value.filter(w=>f.has(w.id))}),v=L(""),U=T(()=>H.value?H.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:C.value.autoPlay&&Number(H.value.duration||0)>0?{label:`Auto ${Number(H.value.duration).toFixed(Number(H.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function P(){const f=E.value.find(Y=>Y.id===v.value);if(!f||!q.value.length)return;[...q.value].sort((Y,O)=>(Y.y||0)!==(O.y||0)?(Y.y||0)-(O.y||0):(Y.x||0)-(O.x||0)).forEach((Y,O)=>{if(f.type==="auto"){s.updateElement(r.projectId,r.currentSlideId,Y.id,{animations:[]});return}s.updateElement(r.projectId,r.currentSlideId,Y.id,{animations:[{type:f.type,delay:Math.max(0,Number(f.delay)||0)+O*Math.max(0,Number(f.stepDelay)||0),duration:Math.max(.1,Number(f.duration)||.72)}]})}),s.updateProject(r.projectId,{settings:{...C.value,motionPresets:(C.value.motionPresets||[]).map(Y=>Y.id===f.id?{...Y,usageCount:Math.max(0,Number(Y.usageCount||0))+1,lastUsedAt:Date.now()}:Y)}})}function W(){if(!E.value.length){v.value="";return}E.value.some(f=>f.id===v.value)||(v.value=E.value[0].id)}const B=T(()=>{var f;return[...((f=H.value)==null?void 0:f.elements)||[]].sort((w,Y)=>(w.zIndex||0)-(Y.zIndex||0))}),k=T(()=>{const f=H.value;return f?f.backgroundType==="gradient"&&f.backgroundGradient?{background:f.backgroundGradient}:f.backgroundType==="image"&&f.backgroundImage?{backgroundImage:`url(${f.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:f.background||"#fff"}:{background:"#fff"}}),M=T(()=>`scale(${x.value})`);function le(){if(!c.value)return;const{clientWidth:f,clientHeight:w}=c.value,Y=(f-80)/se.value,O=(w-80)/R.value;y.value=Math.min(Y,O,1)}let ee=null;wn(()=>{le(),ee=new ResizeObserver(le),c.value&&ee.observe(c.value),W()}),kn(()=>ee==null?void 0:ee.disconnect()),Ke(E,()=>{W()},{deep:!0,immediate:!0}),Ke(F,()=>{le()},{deep:!0});const te=L({x:0,y:0}),fe=L({x:0,y:0}),me=L(!1),Me=L(!1),Pe=L(!1),Ce=L(null),Ie=T(()=>{var f,w;return((f=ge.value)==null?void 0:f.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=ge.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),Qe=T(()=>{if(!Ie.value)return null;if(Ie.value.tone==="mobile"){const Y=se.value*.08,O=R.value*.05;return{x:Y,y:O,width:se.value-Y*2,height:R.value-O*2}}const f=se.value*.08,w=R.value*.08;return{x:f,y:w,width:se.value-f*2,height:R.value-w*2}}),_e=T(()=>{if(!Qe.value)return[];const f=Qe.value;return B.value.filter(w=>w.visible!==!1).filter(w=>{const Y=Number(w.x||0),O=Number(w.y||0),xe=Y+Number(w.width||0),$e=O+Number(w.height||0);return Y<f.x||O<f.y||xe>f.x+f.width||$e>f.y+f.height}).map(w=>w.id)}),Oe=T(()=>r.selectedElementIds.filter(f=>_e.value.includes(f)).length),Q=T(()=>_e.value.length),ie=T(()=>!Ie.value||!Q.value?null:Oe.value?`${Oe.value} selected ${Oe.value===1?"element is":"elements are"} outside the ${Ie.value.label.toLowerCase()}.`:`${Q.value} ${Q.value===1?"element is":"elements are"} outside the ${Ie.value.label.toLowerCase()}.`),J=T(()=>{if(!me.value)return null;const f=Math.min(te.value.x,fe.value.x),w=Math.min(te.value.y,fe.value.y),Y=Math.abs(fe.value.x-te.value.x),O=Math.abs(fe.value.y-te.value.y);return{x:f,y:w,width:Y,height:O}});function ae(f){!me.value&&(f.target===p.value||f.target===f.currentTarget)&&r.clearSelection()}function Se(f){return f?Array.from(f.files||[]).some(w=>w.type.startsWith("image/")):!1}function be(f){return f?Array.from(f.types||[]).includes(Pt):!1}function N(f,w,Y){return Math.min(Math.max(f,w),Y)}function I(f,w,Y){const O=Tt(f),xe=N(w-O.width/2,0,Math.max(0,se.value-O.width)),$e=N(Y-O.height/2,0,Math.max(0,R.value-O.height));return{x:xe,y:$e,bounds:O}}function j(f){if(!be(f))return null;try{const w=f.getData(Pt),Y=w?JSON.parse(w):null;return Y!=null&&Y.id&&s.getContentBlocks(r.projectId).find(O=>O.id===Y.id)||null}catch{return null}}function m(f,w,Y){if(!p.value||!Y){Ce.value=null;return}const O=p.value.getBoundingClientRect(),xe=(f-O.left)/x.value,$e=(w-O.top)/x.value,Be=I(Y,xe,$e);Ce.value={block:Y,x:Be.x,y:Be.y,bounds:Be.bounds}}function Ne(f,w,Y){if(!f||!f.type.startsWith("image/"))return;const O=new FileReader;O.onload=()=>{const xe=String(O.result||"");if(!xe)return;const $e=new Image;$e.onload=()=>{const Be=p.value.getBoundingClientRect(),Fe=(w-Be.left)/x.value,oe=(Y-Be.top)/x.value,Le=Math.min(420/$e.width,280/$e.height,1),Te=Math.max(120,Math.round($e.width*Le)),Ve=Math.max(80,Math.round($e.height*Le)),d=Math.max(0,Math.min(se.value-Te,Math.round(Fe-Te/2))),n=Math.max(0,Math.min(R.value-Ve,Math.round(oe-Ve/2))),b=s.addElement(r.projectId,r.currentSlideId,"image",{x:d,y:n,width:Te,height:Ve,content:{src:xe,alt:f.name,objectFit:"cover"}});b&&(r.selectElement(b.id),r.setActiveTool("select"),r.setRightPanel("properties"))},$e.src=xe},O.readAsDataURL(f)}function we(f){const w=Se(f.dataTransfer),Y=be(f.dataTransfer);!w&&!Y||(f.preventDefault(),f.dataTransfer.dropEffect="copy",Me.value=w,Pe.value=Y,Y&&m(f.clientX,f.clientY,j(f.dataTransfer)))}function qe(f){var w;(w=f.currentTarget)!=null&&w.contains(f.relatedTarget)||(Me.value=!1,Pe.value=!1,Ce.value=null)}function Ae(f){const w=Se(f.dataTransfer),Y=be(f.dataTransfer);if(!w&&!Y)return;if(f.preventDefault(),Me.value=!1,Pe.value=!1,Ce.value=null,Y){try{const xe=j(f.dataTransfer);if(!xe)return;const $e=p.value.getBoundingClientRect(),Be=(f.clientX-$e.left)/x.value,Fe=(f.clientY-$e.top)/x.value,oe=I(xe,Be,Fe),he=s.insertContentBlock(r.projectId,r.currentSlideId,xe.id,{x:oe.x,y:oe.y});he.length&&(r.setSelection(he.map(Xe=>Xe.id)),r.setActiveTool("select"),r.focusPropertiesSection("content"))}catch(xe){console.warn("Failed to drop block onto canvas.",xe)}return}const O=Array.from(f.dataTransfer.files||[]).find(xe=>xe.type.startsWith("image/"));O&&Ne(O,f.clientX,f.clientY)}function Re(f){if(q.value.length<2)return;const w=[...q.value].sort((oe,he)=>(oe.zIndex||0)-(he.zIndex||0)),Y=Math.min(...w.map(oe=>Number(oe.x||0))),O=Math.min(...w.map(oe=>Number(oe.y||0))),xe=Math.max(...w.map(oe=>Number(oe.x||0)+Number(oe.width||0))),$e=Math.max(...w.map(oe=>Number(oe.y||0)+Number(oe.height||0))),Be=Y+(xe-Y)/2,Fe=O+($e-O)/2;if(f==="align-left"&&w.forEach(oe=>s.updateElement(r.projectId,r.currentSlideId,oe.id,{x:Y},{persist:!1})),f==="align-center"&&w.forEach(oe=>{const he=Number(oe.width||0);s.updateElement(r.projectId,r.currentSlideId,oe.id,{x:Be-he/2},{persist:!1})}),f==="align-right"&&w.forEach(oe=>{const he=Number(oe.width||0);s.updateElement(r.projectId,r.currentSlideId,oe.id,{x:xe-he},{persist:!1})}),f==="align-top"&&w.forEach(oe=>s.updateElement(r.projectId,r.currentSlideId,oe.id,{y:O},{persist:!1})),f==="align-middle"&&w.forEach(oe=>{const he=Number(oe.height||0);s.updateElement(r.projectId,r.currentSlideId,oe.id,{y:Fe-he/2},{persist:!1})}),f==="align-bottom"&&w.forEach(oe=>{const he=Number(oe.height||0);s.updateElement(r.projectId,r.currentSlideId,oe.id,{y:$e-he},{persist:!1})}),f==="distribute-horizontal"){const oe=[...w].sort((Te,Ve)=>(Te.x||0)-(Ve.x||0)),he=oe.reduce((Te,Ve)=>Te+Number(Ve.width||0),0),Xe=oe.length>1?(xe-Y-he)/(oe.length-1):0;let Le=Y;oe.forEach(Te=>{s.updateElement(r.projectId,r.currentSlideId,Te.id,{x:Le},{persist:!1}),Le+=Number(Te.width||0)+Xe})}if(f==="distribute-vertical"){const oe=[...w].sort((Te,Ve)=>(Te.y||0)-(Ve.y||0)),he=oe.reduce((Te,Ve)=>Te+Number(Ve.height||0),0),Xe=oe.length>1?($e-O-he)/(oe.length-1):0;let Le=O;oe.forEach(Te=>{s.updateElement(r.projectId,r.currentSlideId,Te.id,{y:Le},{persist:!1}),Le+=Number(Te.height||0)+Xe})}s.commitProject(r.projectId)}function tt(f){const w=r.activeTool;if(f.target!==p.value&&f.target!==f.currentTarget)return;f.preventDefault(),f.stopPropagation();const Y=p.value.getBoundingClientRect(),O=(f.clientX-Y.left)/x.value,xe=(f.clientY-Y.top)/x.value;if(w==="select"){me.value=!0,te.value={x:O,y:xe},fe.value={x:O,y:xe};const Fe=he=>{fe.value={x:(he.clientX-Y.left)/x.value,y:(he.clientY-Y.top)/x.value}},oe=()=>{window.removeEventListener("mousemove",Fe),window.removeEventListener("mouseup",oe);const he=J.value;if(he&&(he.width>2||he.height>2)){const Xe=B.value.filter(Le=>{const Te=Le.x,Ve=Le.y,d=Le.width||100,n=Le.height||100;return Te<he.x+he.width&&Te+d>he.x&&Ve<he.y+he.height&&Ve+n>he.y}).map(Le=>Le.id);Xe.length>0?r.setSelection(Xe):r.clearSelection()}else r.clearSelection();setTimeout(()=>{me.value=!1},0)};window.addEventListener("mousemove",Fe),window.addEventListener("mouseup",oe);return}const $e=Fe=>r.snapToGrid?Math.round(Fe/r.gridSize)*r.gridSize:Fe,Be=s.addElement(r.projectId,r.currentSlideId,w,{x:$e(O-75),y:$e(xe-40)});Be&&(r.selectElement(Be.id),r.setActiveTool("select"),r.setRightPanel("properties"))}const He=T(()=>{if(!r.showGrid)return{};const f=r.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${f}px ${f}px`}}),yt={text:Mt,heading:Mt,image:_c,shape:Fc,button:Uc,hotspot:Hc,video:ep,audio:lp,quiz:vp,chart:il,divider:"div"};function vt(f){return yt[f]||Mt}function ft(f){var w,Y;return f.type!=="divider"?{}:{borderTop:`${((w=f.content)==null?void 0:w.thickness)||2}px solid ${((Y=f.content)==null?void 0:Y.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const Ge=L({show:!1,x:0,y:0,elId:null});function xt(f,w){f.preventDefault(),Ge.value={show:!0,x:f.clientX,y:f.clientY,elId:w},r.selectElement(w),setTimeout(()=>window.addEventListener("click",st,{once:!0}),0)}function st(){Ge.value.show=!1}function wt(){if(Ge.value.elId){const f=s.duplicateElement(r.projectId,r.currentSlideId,Ge.value.elId);f&&r.selectElement(f.id)}st()}function kt(){Ge.value.elId&&(s.deleteElement(r.projectId,r.currentSlideId,Ge.value.elId),r.clearSelection()),st()}function rt(){Ge.value.elId&&s.reorderElement(r.projectId,r.currentSlideId,Ge.value.elId,"up"),st()}function mt(){Ge.value.elId&&s.reorderElement(r.projectId,r.currentSlideId,Ge.value.elId,"down"),st()}function gt(){const f=a.value,w=s.addSlide(r.projectId,f);w&&r.setCurrentSlide(w.id)}function bt(){const f=a.value;f>0&&r.setCurrentSlide(D.value[f-1].id)}function Ct(){const f=a.value;f<D.value.length-1&&r.setCurrentSlide(D.value[f+1].id)}return(f,w)=>{var Y;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[H.value?(l(),i(Z,{key:1},[e("div",{class:K(["canvas-zoom-wrapper",[Ie.value&&`canvas-zoom-wrapper-${Ie.value.tone}`]]),style:pe({transform:M.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:pe({width:se.value+"px",height:R.value+"px",...k.value,...He.value}),onClick:ae,onMousedown:tt,onDragover:we,onDragleave:qe,onDrop:Ae,onContextmenu:w[3]||(w[3]=ze(()=>{},["prevent"]))},[Ie.value?(l(),i("div",gp)):G("",!0),A(r).multiSelection&&E.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=ze(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),de(e("select",{"onUpdate:modelValue":w[0]||(w[0]=O=>v.value=O),class:"selection-preset-select"},[(l(!0),i(Z,null,ce(E.value,O=>(l(),i("option",{key:O.id,value:O.id},$(O.name),9,bp))),128))],512),[[St,v.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:ze(P,["stop"])},"Apply")],32)):G("",!0),ie.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=ze(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,$(ie.value),1)],32)):G("",!0),Ce.value?(l(),i("div",{key:3,class:"block-drop-preview",style:pe({left:`${Ce.value.x}px`,top:`${Ce.value.y}px`,width:`${Ce.value.bounds.width}px`,height:`${Ce.value.bounds.height}px`})},[(l(!0),i(Z,null,ce(Ce.value.block.elements,(O,xe)=>{var $e,Be,Fe,oe;return l(),i("div",{key:`${Ce.value.block.id}-preview-${xe}`,class:K(["block-drop-preview-el",`block-drop-preview-${O.type}`]),style:pe({left:`${Number(O.x||0)-Ce.value.bounds.minX}px`,top:`${Number(O.y||0)-Ce.value.bounds.minY}px`,width:`${Number(O.width||0)}px`,height:`${Number(O.height||0)}px`,borderRadius:O.type==="shape"&&(($e=O.content)==null?void 0:$e.shapeType)==="circle"?"50%":`${Number(((Be=O.content)==null?void 0:Be.borderRadius)||12)}px`,background:O.type==="shape"?((Fe=O.content)==null?void 0:Fe.fillColor)||"rgba(108,71,255,.18)":O.type==="button"?((oe=O.content)==null?void 0:oe.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(O.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(O.type)?(l(),i(Z,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):G("",!0)],6)}),128))],4)):G("",!0),(l(!0),i(Z,null,ce(B.value,O=>(l(),Je(Nc,{key:O.id,element:O,onContextmenu:ze(xe=>xt(xe,O.id),["stop"])},{default:ut(()=>[(l(),Je(Rn(vt(O.type)),{element:O,style:pe(O.type==="divider"?ft(O):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),Ie.value?(l(),i("div",{key:4,class:K(["canvas-guide",[`canvas-guide-${Ie.value.tone}`,Q.value&&"canvas-guide-warning-state"]]),style:pe(Ie.value.style),"aria-hidden":"true"},[e("span",hp,$(Ie.value.label)+" · "+$(ve.value),1)],6)):G("",!0),A(r).activeTool!=="select"||Me.value||Pe.value?(l(),i("div",yp,$(Pe.value?"Drop block to insert it here":Me.value?"Drop image to insert it on this slide":`Click anywhere to add ${A(r).activeTool}`),1)):G("",!0),me.value&&J.value?(l(),i("div",{key:6,class:"selection-marquee",style:pe({left:J.value.x+"px",top:J.value.y+"px",width:J.value.width+"px",height:J.value.height+"px"})},null,4)):G("",!0)],36)],6),e("div",xp,[e("button",{class:"bar-btn",onClick:gt},"Add page"),e("button",{class:"bar-btn icon",onClick:bt,disabled:a.value<=0},"◀",8,wp),e("span",kp,$(a.value+1)+" / "+$(D.value.length),1),e("button",{class:"bar-btn icon",onClick:Ct,disabled:a.value>=D.value.length-1},"▶",8,Cp),e("span",null,$(se.value)+" × "+$(R.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,$(((Y=H.value.elements)==null?void 0:Y.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:K(["playback-badge",`playback-badge-${U.value.tone}`])},$(U.value.label),3),A(r).hasSelection?(l(),i("span",$p,"· "+$(A(r).selectedElementIds.length)+" selected",1)):G("",!0),A(r).multiSelection?(l(),i(Z,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=O=>Re("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=O=>Re("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=O=>Re("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=O=>Re("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=O=>Re("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=O=>Re("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=O=>Re("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=O=>Re("distribute-vertical"))},"Space V")],64)):G("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=O=>A(r).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",fp,[(l(),i("svg",mp,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),Je(Cn,{to:"body"},[Ge.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:pe({left:Ge.value.x+"px",top:Ge.value.y+"px"})},[e("button",{class:"ctx-item",onClick:wt},"Duplicate"),e("button",{class:"ctx-item",onClick:rt},"Bring Forward"),e("button",{class:"ctx-item",onClick:mt},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:kt},"Delete")],4)):G("",!0)]))],512)}}},Ip=Ye(Sp,[["__scopeId","data-v-e7450e9c"]]),Ap={class:"ai-panel"},Ep={class:"ai-mode-tabs"},Mp=["onClick"],Pp={class:"ai-content"},Tp={class:"form-group"},Np={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},zp={key:0,class:"form-group"},Bp={key:1,class:"form-group"},Lp={class:"layout-label-row"},jp={class:"layout-current-hint"},_p={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},Dp=["onClick"],qp={class:"layout-preset-title"},Rp={class:"layout-preset-hint"},Fp={key:2,class:"form-group"},Up={class:"form-group"},Op={class:"form-group"},Vp={class:"prompt-label-row"},Wp={key:1,class:"prompt-auto-badge"},Gp={key:3,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},Hp=["disabled"],Yp={key:0,class:"spinner"},Qp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Jp={key:4,class:"creative-options-wrap"},Kp={class:"result-header"},Xp={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Zp={key:1,class:"creative-options-list"},ev={class:"creative-title"},tv={class:"creative-angle"},ov=["onClick"],nv={class:"form-group"},lv={class:"quiz-config-row"},iv={class:"form-group",style:{flex:"1"}},av={class:"form-group",style:{flex:"1"}},sv={class:"form-group"},rv={class:"qtype-btns"},uv=["onClick"],dv={class:"qtype-icon"},cv={class:"form-group"},pv={class:"form-group"},vv={class:"prompt-label-row"},fv={key:1,class:"prompt-auto-badge"},mv=["disabled"],gv={key:0,class:"spinner"},bv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},hv={key:0,class:"quiz-results"},yv={class:"quiz-results-header"},xv={class:"form-label"},wv={class:"quiz-header-actions"},kv={class:"regen-row"},Cv=["disabled"],$v={key:0,class:"spinner spinner-sm"},Sv={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Iv=["disabled"],Av={class:"quiz-card-header"},Ev={class:"quiz-card-check"},Mv=["onUpdate:modelValue"],Pv={class:"q-num"},Tv={class:"q-badges"},Nv={class:"badge type-badge"},zv={class:"q-question"},Bv={class:"q-options"},Lv={class:"q-option-letter"},jv={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},_v={key:0,class:"q-explanation"},Dv=["disabled"],qv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rv=["disabled"],Fv={key:0,class:"spinner"},Uv={key:0,class:"selected-text-preview"},Ov={class:"text-preview"},Vv={key:1,class:"ai-hint"},Wv={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},Gv=["disabled"],Hv={key:0,class:"spinner"},Yv={key:0,class:"selected-text-preview"},Qv={class:"text-preview"},Jv={key:1,class:"ai-hint"},Kv={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},Xv=["disabled"],Zv={key:0,class:"spinner"},e1={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},t1={class:"result-header"},o1={class:"result-actions"},n1=["disabled"],l1={class:"textarea result-display"},i1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},a1=["disabled"],s1={key:0,class:"spinner"},r1={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},u1={class:"textarea result-display",style:{color:"var(--color-primary)"}},d1={key:6,class:"ai-settings"},c1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},p1=["value"],v1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},f1=["value"],m1={key:0,class:"demo-notice"},g1={key:7,class:"result-area"},b1={class:"result-header"},h1={class:"result-pre"},y1={class:"result-actions"},x1=["disabled"],w1={key:8,class:"ai-error"},k1={__name:"AIAssistant",setup(S){const r=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'}],s={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(d,n="classic"){const b=String(d||n||"classic").trim().toLowerCase();return r.some(V=>V.id===b)?b:n}function p(d,n=""){return String(d??n).replace(/^\s*[-•]\s*/,"").trim()||n}function y(d){return(Array.isArray(d)?d:typeof d=="string"?d.split(`
`):[]).map(b=>p(b)).filter(Boolean)}function x(d,n,b){const V=[...d];for(;V.length<n;)V.push(b(V.length));return V.slice(0,n)}function g(d,n){const b=Array.isArray(d)?d.map((h,re)=>({title:p(h==null?void 0:h.title,`Card ${re+1}`),body:p((h==null?void 0:h.body)||(h==null?void 0:h.text)||(h==null?void 0:h.description),"Add supporting detail.")})).filter(h=>h.title||h.body):[],V=n.map((h,re)=>({title:`Point ${re+1}`,body:h}));return x(b.length?b:V,3,h=>({title:`Point ${h+1}`,body:"Add supporting detail."}))}function F(d,n){const b=y(d==null?void 0:d.leftPoints),V=y(d==null?void 0:d.rightPoints),h=n.slice(0,Math.max(1,Math.ceil(n.length/2))),re=n.slice(Math.max(1,Math.ceil(n.length/2)));return{leftTitle:p(d==null?void 0:d.leftTitle,"Option A"),leftPoints:x(b.length?b:h,3,De=>`Left point ${De+1}`),rightTitle:p(d==null?void 0:d.rightTitle,"Option B"),rightPoints:x(V.length?V:re,3,De=>`Right point ${De+1}`)}}function ge(d,n){const b=Array.isArray(d)?d.map((h,re)=>({value:p(h==null?void 0:h.value,`${re+1}`),label:p(h==null?void 0:h.label,`Metric ${re+1}`)})).filter(h=>h.value||h.label):[],V=n.map((h,re)=>{const[De,...Ze]=h.split(/[:\-]/);return{value:p(De,`${re+1}`),label:p(Ze.join(" ").trim(),h)}});return x(b.length?b:V,3,h=>({value:`${h+1}`,label:`Metric ${h+1}`}))}function se(d,n){const b=Array.isArray(d)?d.map((h,re)=>({title:p(h==null?void 0:h.title,`Phase ${re+1}`),detail:p((h==null?void 0:h.detail)||(h==null?void 0:h.description),"Explain the milestone.")})).filter(h=>h.title||h.detail):[],V=n.map((h,re)=>({title:`Phase ${re+1}`,detail:h}));return x(b.length?b:V,4,h=>({title:`Phase ${h+1}`,detail:"Explain the milestone."}))}function R(d,n){const b=Array.isArray(d)?d.map((h,re)=>({question:p(h==null?void 0:h.question,`Question ${re+1}?`),answer:p(h==null?void 0:h.answer,"Add the short answer here.")})).filter(h=>h.question||h.answer):[],V=n.map((h,re)=>({question:`Question ${re+1}?`,answer:h}));return x(b.length?b:V,3,h=>({question:`Question ${h+1}?`,answer:"Add the short answer here."}))}function ve(d,n){const b=Array.isArray(d)?d.map((h,re)=>({title:p(h==null?void 0:h.title,`Step ${re+1}`),detail:p((h==null?void 0:h.detail)||(h==null?void 0:h.description),"Add the step detail here.")})).filter(h=>h.title||h.detail):[],V=n.map((h,re)=>({title:`Step ${re+1}`,detail:h}));return x(b.length?b:V,3,h=>({title:`Step ${h+1}`,detail:"Add the step detail here."}))}const H=Vn(),D=nt(),a=lt(),C=L("generate"),E=L(""),q=L(""),v=L("");Ke(C,()=>{v.value=""}),Ke(()=>D.aiPanelMode,d=>{d&&(C.value=d)},{immediate:!0});const U=L(4),P=L("general"),W=L("Spanish"),B=L(""),k=L(""),M=L(""),le=L(!1),ee=L("single"),te=L("classic"),fe=L(5),me=L("slide"),Me=L([]),Pe=L(""),Ce=T(()=>r.find(d=>d.id===te.value)||r[0]),Ie=T(()=>{const d=q.value.trim()||"[your topic]";if(ee.value==="deck"){let V=`Create a complete ${fe.value}-slide learning deck about "${d}".`;return k.value.trim()&&(V+=`
Additional context: ${k.value.trim()}`),V+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,V+=`
Make each slide distinct, logically sequenced, and specific to "${d}".`,V}let b=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[P.value]||"educational slide"} about "${d}".`;return k.value.trim()&&(b+=`
Additional context: ${k.value.trim()}`),b+=`
Layout mode: ${te.value}`,b+=`
Layout instruction: ${Ce.value.promptHint}`,b+=`
Return ONLY valid JSON matching this shape: ${Ce.value.schema}`,b+=`
Make all content specific to "${d}" — no generic placeholders.`,b});Ke(Ie,d=>{le.value||(M.value=d)},{immediate:!0});function Qe(){M.value=Ie.value,le.value=!1}const _e=L(""),Oe=L("intermediate"),Q=L("multiple-choice"),ie=L(""),J=L([]),ae=L(""),Se=L(!1),be=T(()=>{const d=_e.value.trim()||"[your topic]",n={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},b={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let V=`Generate ${U.value} ${n[Oe.value]} ${b[Q.value]} quiz questions about "${d}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return ie.value.trim()&&(V+=`
Learning objective: ${ie.value.trim()}`),V});Ke(be,d=>{Se.value||(ae.value=d)},{immediate:!0});function N(){ae.value=be.value,Se.value=!1}const I=T(()=>a.getProject(D.projectId)),j=T(()=>{var d,n;return(n=(d=I.value)==null?void 0:d.slides)==null?void 0:n.find(b=>b.id===D.currentSlideId)}),m=T(()=>{var d,n;return D.selectedElementId?(n=(d=j.value)==null?void 0:d.elements)==null?void 0:n.find(b=>b.id===D.selectedElementId):null});async function Ne(){if(!q.value.trim()&&!M.value.trim())return;if(v.value="",Me.value=[],Pe.value="",ee.value==="deck"){const n=await H.generateSlideDeck(q.value,fe.value,{objective:k.value,customPrompt:M.value});if(n!=null&&n.length){const b=n.map(V=>we(V));v.value=JSON.stringify({slides:b},null,2),gt(b,{replaceGenerated:!0})}return}if(me.value==="options"){await f();return}const d=await H.generateSlideContent(q.value,P.value,k.value,M.value,{layoutMode:te.value});if(d){const n=we(d);v.value=JSON.stringify(n,null,2),bt(n,{replaceGenerated:!0})}}function we(d){var h;const n=d&&typeof d=="object"?d:{},b=y(n.bullets),V=c(n.layout||((h=n.design)==null?void 0:h.layout),te.value);return{title:String(n.title||q.value||"Untitled Slide").trim(),subtitle:String(n.subtitle||"").trim(),bullets:b,callout:String(n.callout||"").trim(),layout:V,cards:g(n.cards,b),comparison:F(n.comparison,b),metrics:ge(n.metrics,b),timeline:se(n.timeline,b),faqs:R(n.faqs,b),process:ve(n.process,b)}}function qe(d,n){var h,re,De;const b=(re=(h=a.getProject(d))==null?void 0:h.slides)==null?void 0:re.find(Ze=>Ze.id===n);if(!((De=b==null?void 0:b.elements)!=null&&De.length))return;b.elements.filter(Ze=>{var z;return((z=Ze.meta)==null?void 0:z.source)==="ai-content"}).map(Ze=>Ze.id).forEach(Ze=>{a.deleteElement(d,n,Ze)})}function Ae(d,n,b,V){return a.addElement(d,n,b,{...V,meta:{...V.meta||{},source:"ai-content"}})}function Re(d){const n=ol.find(V=>V.id===d);if(!n)return null;const b=nl(JSON.parse(JSON.stringify(n)),d);return b.elements=b.elements.map(V=>({...V,meta:{...V.meta||{},source:"ai-content"}})),b}function tt(d,n){n&&d.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:n,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function He(d,n){if(!n)return;const b=Tt(d);d.elements.push({type:"text",x:0,y:b.height+18,width:Math.max(b.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${n}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function yt(d,n){var re;const b=a.getProject(d),V=Tt(n),h=Number(((re=b==null?void 0:b.settings)==null?void 0:re.slideWidth)||960);return{x:Math.max(40,Math.round((h-V.width)/2)),y:54}}function vt(d){const n=Re(s.cards);if(!n)return null;const b=d.cards;return n.elements[0].content.text=d.title,n.elements[1].content.text=d.subtitle||d.callout||"Use the three cards to frame the main ideas.",b.forEach((V,h)=>{n.elements[5+h].content.text=V.title,n.elements[8+h].content.text=V.body}),d.callout&&d.subtitle&&He(n,d.callout),n}function ft(d){const n=Re(s.comparison);return n?(n.elements[0].content.text=d.title,n.elements[3].content.text=d.comparison.leftTitle,n.elements[4].content.text=d.comparison.rightTitle,n.elements[5].content={...n.elements[5].content,text:d.comparison.leftPoints.map(b=>`• ${b}`).join(`
`),fontSize:17,lineHeight:1.55},n.elements[6].content={...n.elements[6].content,text:d.comparison.rightPoints.map(b=>`• ${b}`).join(`
`),fontSize:17,lineHeight:1.55},tt(n,d.subtitle),He(n,d.callout),n):null}function Ge(d){const n=Re(s.metrics);return n?(n.elements[0].content.text=d.title,d.metrics.forEach((b,V)=>{n.elements[4+V].content.text=b.value,n.elements[7+V].content.text=b.label}),tt(n,d.subtitle),He(n,d.callout),n):null}function xt(d){const n=Re(s.timeline);return n?(n.elements[0].content.text=d.title,d.timeline.forEach((b,V)=>{n.elements[6+V].content={...n.elements[6+V].content,text:`${b.title}
${b.detail}`,fontSize:16,lineHeight:1.35}}),tt(n,d.subtitle),He(n,d.callout),n):null}function st(d){const n=Re(s.faq);return n?(n.elements[0].content.text=d.title,d.faqs.forEach((b,V)=>{n.elements[4+V].content={...n.elements[4+V].content,text:`${b.question}
${b.answer}`,fontSize:16,lineHeight:1.35},n.elements[4+V].height=44}),tt(n,d.subtitle),He(n,d.callout),n):null}function wt(d){const n=Re(s.process);return n?(n.elements[0].content.text=d.title,d.process.forEach((b,V)=>{n.elements[8+V].content.text=b.title,n.elements[11+V].content.text=b.detail}),tt(n,d.subtitle),He(n,d.callout),n):null}function kt(d){switch(d.layout){case"cards":return vt(d);case"comparison":return ft(d);case"metrics":return Ge(d);case"timeline":return xt(d);case"faq":return st(d);case"process":return wt(d);default:return null}}function rt(d,n,b){var V;if(b.title&&(a.updateSlide(d,n,{title:b.title}),Ae(d,n,"heading",{x:60,y:40,width:840,height:80,content:{text:b.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),b.subtitle&&Ae(d,n,"text",{x:60,y:130,width:840,height:50,content:{text:b.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(V=b.bullets)!=null&&V.length){const h=b.bullets.map(re=>`• ${re}`).join(`
`);Ae(d,n,"text",{x:60,y:b.subtitle?200:150,width:840,height:200,content:{text:h,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}b.callout&&(Ae(d,n,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),Ae(d,n,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${b.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function mt(d,n,b,{replaceGenerated:V=!1}={}){if(!d||!n)return;V&&qe(d,n);const h=kt(b);if(a.updateSlide(d,n,{title:b.title||"Untitled Slide"}),h){const re=yt(d,h);a.insertContentBlock(d,n,h,re)}else rt(d,n,b)}function gt(d,{replaceGenerated:n=!1}={}){if(!D.currentSlideId)return;const b=D.projectId;if(!b||!Array.isArray(d)||!d.length)return;d.map(h=>we(h)).forEach(h=>{const re=a.addSlide(b);re&&mt(b,re.id,h,{replaceGenerated:n})})}function bt(d=null,{replaceGenerated:n=!1}={}){if(!D.currentSlideId)return;let b=d;if(!b){if(!v.value)return;try{b=JSON.parse(v.value)}catch(De){console.warn("Could not parse AI content:",De);return}}const V=we(b),h=D.projectId,re=D.currentSlideId;!h||!re||mt(h,re,V,{replaceGenerated:n})}function Ct(){if(v.value){if(ee.value==="deck"){try{const d=JSON.parse(v.value),n=Array.isArray(d)?d:d==null?void 0:d.slides;if(!Array.isArray(n)||!n.length)return;gt(n,{replaceGenerated:!0})}catch{return}return}bt()}}async function f(){const d=q.value.trim()||"[your topic]",n=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${P.value}" slide about "${d}" using a ${te.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,b=await H.generate(n,{type:"creativeOptions",topic:d,slideType:P.value});if(b)try{const V=JSON.parse(b.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(V))throw new Error("Options must be an array");Me.value=V.slice(0,3).map((h,re)=>({title:String((h==null?void 0:h.title)||`Option ${re+1}`),angle:String((h==null?void 0:h.angle)||""),prompt:String((h==null?void 0:h.prompt)||"")})).filter(h=>h.prompt.trim()),Me.value.length||(Pe.value="No usable creative options were returned. Try generating again.")}catch{Pe.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function w(d){d!=null&&d.prompt&&(M.value=d.prompt,le.value=!0,me.value="slide",await Ne())}async function Y(d=!1){if(!_e.value.trim()&&!ae.value.trim())return;d||(J.value=[]);const n=await H.generateQuiz(_e.value,U.value,{difficulty:Oe.value,questionType:Q.value,objective:ie.value,customPrompt:ae.value});if(n)if(d){const b=new Set(J.value.map(h=>h.question)),V=n.filter(h=>!b.has(h.question)).map(h=>({...h,_selected:!0}));J.value=[...J.value,...V]}else J.value=n.map(b=>({...b,_selected:!0}))}async function O(){const d=J.value.filter(b=>b._selected);if(!d.length)return;const n=D.projectId;d.forEach((b,V)=>{const h=a.addSlide(n);h&&(a.addElement(n,h.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:b.question,options:b.options,correctIndex:b.correctIndex,explanation:b.explanation||""}}),a.updateSlide(n,h.id,{title:`Q${V+1}: ${b.question.slice(0,40)}…`}))}),J.value=[]}function xe(d){J.value.forEach(n=>n._selected=d)}async function $e(){if(!B.value.trim())return;const d=await H.generateVoiceoverScript(B.value);d&&(v.value=d)}async function Be(){var b,V;const d=(V=(b=m.value)==null?void 0:b.content)==null?void 0:V.text;if(!d)return;const n=await H.generateTranslation(d,W.value);n&&(v.value=n)}async function Fe(){!v.value||!m.value||a.updateElement(D.projectId,D.currentSlideId,m.value.id,{content:{...m.value.content,text:v.value}})}const oe=L(""),he=L(!1);async function Xe(){if(oe.value.trim()){he.value=!0,v.value="Optimizing prompt...";try{let d=oe.value;const n=await H.generateImagePrompt(oe.value);n&&(d=n.replace(/```(json)?\n?/g,"").trim()),v.value="Painting image... this takes about 10-20 seconds. Please wait.";const b=Math.floor(Math.random()*1e6),V=`https://image.pollinations.ai/prompt/${encodeURIComponent(d)}?width=600&height=400&nologo=true&seed=${b}`;await new Promise((h,re)=>{const De=new Image;De.onload=h,De.onerror=re,De.src=V}),a.addElement(D.projectId,D.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:V,objectFit:"cover"}}),v.value="Image added to slide!"}catch{v.value="Failed to generate image. Try a different prompt."}finally{he.value=!1}}}async function Le(){var n,b;if(!((b=(n=m.value)==null?void 0:n.content)!=null&&b.text))return;const d=await H.improveText(m.value.content.text,E.value||"Make it clearer and more engaging");d&&(v.value=d)}async function Te(){!v.value||!m.value||a.updateElement(D.projectId,D.currentSlideId,m.value.id,{content:{...m.value.content,text:v.value}})}async function Ve(){if(!E.value.trim())return;const d=await H.generate(E.value);d&&(v.value=d)}return(d,n)=>{var b,V,h,re,De,Ze;return l(),i("div",Ap,[e("div",Ep,[(l(),i(Z,null,ce([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],z=>e("button",{key:z.id,class:K(["ai-mode-btn",C.value===z.id&&"active"]),onClick:Ue=>C.value=z.id},$(z.label),11,Mp)),64))]),e("div",Pp,[C.value==="generate"?(l(),i(Z,{key:0},[e("div",Tp,[n[34]||(n[34]=e("label",{class:"form-label"},[X("Topic / Subject "),e("span",{class:"required"},"*")],-1)),de(e("input",{"onUpdate:modelValue":n[0]||(n[0]=z=>q.value=z),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:yn(Ne,["enter"])},null,544),[[ye,q.value]])]),e("div",Np,[e("button",{class:K(["output-mode-btn",ee.value==="single"&&"active"]),onClick:n[1]||(n[1]=z=>ee.value="single")},"Single Slide",2),e("button",{class:K(["output-mode-btn",ee.value==="deck"&&"active"]),onClick:n[2]||(n[2]=z=>ee.value="deck")},"Slide Deck",2)]),ee.value==="single"?(l(),i("div",zp,[n[36]||(n[36]=e("label",{class:"form-label"},"Slide Type",-1)),de(e("select",{"onUpdate:modelValue":n[3]||(n[3]=z=>P.value=z),class:"select"},[...n[35]||(n[35]=[et('<option value="general" data-v-f539acee>General</option><option value="intro" data-v-f539acee>Introduction</option><option value="overview" data-v-f539acee>Overview</option><option value="concept" data-v-f539acee>Concept Explanation</option><option value="example" data-v-f539acee>Example / Case Study</option><option value="summary" data-v-f539acee>Summary</option><option value="callout" data-v-f539acee>Key Takeaway</option>',7)])],512),[[St,P.value]])])):G("",!0),ee.value==="single"?(l(),i("div",Bp,[e("div",Lp,[n[37]||(n[37]=e("label",{class:"form-label"},"Layout",-1)),e("span",jp,$(Ce.value.hint),1)]),e("div",_p,[(l(),i(Z,null,ce(r,z=>e("button",{key:z.id,class:K(["layout-preset-card",te.value===z.id&&"active"]),onClick:Ue=>te.value=z.id},[e("span",qp,$(z.label),1),e("span",Rp,$(z.hint),1)],10,Dp)),64))])])):(l(),i("div",Fp,[n[38]||(n[38]=e("label",{class:"form-label"},"Number of Slides",-1)),de(e("input",{"onUpdate:modelValue":n[4]||(n[4]=z=>fe.value=z),class:"input",type:"number",min:"1",max:"20"},null,512),[[ye,fe.value,void 0,{number:!0}]]),n[39]||(n[39]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",Up,[n[40]||(n[40]=e("label",{class:"form-label"},[X("Description "),e("span",{class:"optional"},"(optional)")],-1)),de(e("textarea",{"onUpdate:modelValue":n[5]||(n[5]=z=>k.value=z),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[ye,k.value]])]),e("div",Op,[e("div",Vp,[n[42]||(n[42]=e("label",{class:"form-label"},"AI Prompt",-1)),le.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Qe,title:"Reset to auto-generated prompt"},[...n[41]||(n[41]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),X(" Reset ",-1)])])):(l(),i("span",Wp,"auto"))]),de(e("textarea",{"onUpdate:modelValue":n[6]||(n[6]=z=>M.value=z),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:n[7]||(n[7]=z=>le.value=!0),spellcheck:"false"},null,544),[[ye,M.value]]),n[43]||(n[43]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),ee.value==="single"?(l(),i("div",Gp,[e("button",{class:K(["output-mode-btn",me.value==="slide"&&"active"]),onClick:n[8]||(n[8]=z=>me.value="slide")},"Show on Slide",2),e("button",{class:K(["output-mode-btn",me.value==="options"&&"active"]),onClick:n[9]||(n[9]=z=>me.value="options")},"Creative Options",2)])):G("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating||!q.value.trim()&&!M.value.trim()||ee.value==="deck"&&(!fe.value||fe.value<1||fe.value>20),onClick:Ne},[A(H).isGenerating?(l(),i("span",Yp)):(l(),i("svg",Qp,[...n[44]||(n[44]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),X(" "+$(A(H).isGenerating?"Generating…":ee.value==="deck"?v.value?`Regenerate ${fe.value} Slides`:`Generate ${fe.value} Slides`:me.value==="slide"?v.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,Hp),ee.value==="single"&&me.value==="options"&&(Me.value.length||Pe.value)?(l(),i("div",Jp,[e("div",Kp,[n[45]||(n[45]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[10]||(n[10]=z=>{Me.value=[],Pe.value=""})},"Clear")]),Pe.value?(l(),i("div",Xp,[n[46]||(n[46]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),X(" "+$(Pe.value),1)])):(l(),i("div",Zp,[(l(!0),i(Z,null,ce(Me.value,(z,Ue)=>(l(),i("article",{key:Ue,class:"creative-option-card"},[e("h4",ev,$(z.title),1),e("p",tv,$(z.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:it=>w(z)},"Use This Option",8,ov)]))),128))]))])):G("",!0)],64)):C.value==="quiz"?(l(),i(Z,{key:1},[e("div",nv,[n[47]||(n[47]=e("label",{class:"form-label"},[X("Quiz Topic "),e("span",{class:"required"},"*")],-1)),de(e("input",{"onUpdate:modelValue":n[11]||(n[11]=z=>_e.value=z),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:yn(Y,["enter"])},null,544),[[ye,_e.value]])]),e("div",lv,[e("div",iv,[n[49]||(n[49]=e("label",{class:"form-label"},"Questions",-1)),de(e("select",{"onUpdate:modelValue":n[12]||(n[12]=z=>U.value=z),class:"select"},[...n[48]||(n[48]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[St,U.value,void 0,{number:!0}]])]),e("div",av,[n[51]||(n[51]=e("label",{class:"form-label"},"Difficulty",-1)),de(e("select",{"onUpdate:modelValue":n[13]||(n[13]=z=>Oe.value=z),class:"select"},[...n[50]||(n[50]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[St,Oe.value]])])]),e("div",sv,[n[52]||(n[52]=e("label",{class:"form-label"},"Question Type",-1)),e("div",rv,[(l(),i(Z,null,ce([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],z=>e("button",{key:z.id,class:K(["qtype-btn",Q.value===z.id&&"active"]),onClick:Ue=>Q.value=z.id},[e("span",dv,$(z.icon),1),e("span",null,$(z.label),1)],10,uv)),64))])]),e("div",cv,[n[53]||(n[53]=e("label",{class:"form-label"},[X("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),de(e("input",{"onUpdate:modelValue":n[14]||(n[14]=z=>ie.value=z),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[ye,ie.value]])]),e("div",pv,[e("div",vv,[n[55]||(n[55]=e("label",{class:"form-label"},"AI Prompt",-1)),Se.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:N,title:"Reset to auto-generated prompt"},[...n[54]||(n[54]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),X(" Reset ",-1)])])):(l(),i("span",fv,"auto"))]),de(e("textarea",{"onUpdate:modelValue":n[15]||(n[15]=z=>ae.value=z),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:n[16]||(n[16]=z=>Se.value=!0),spellcheck:"false"},null,544),[[ye,ae.value]]),n[56]||(n[56]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating||!_e.value.trim()&&!ae.value.trim(),onClick:n[17]||(n[17]=z=>Y(!1))},[A(H).isGenerating?(l(),i("span",gv)):(l(),i("svg",bv,[...n[57]||(n[57]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),X(" "+$(A(H).isGenerating?"Generating…":`Generate ${U.value} Questions`),1)],8,mv),J.value.length?(l(),i("div",hv,[e("div",yv,[e("span",xv,$(J.value.length)+" Questions",1),e("div",wv,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[18]||(n[18]=z=>xe(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:n[19]||(n[19]=z=>xe(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:n[20]||(n[20]=z=>J.value=[])},"Clear")])]),e("div",kv,[e("button",{class:"btn btn-secondary regen-btn",disabled:A(H).isGenerating,onClick:n[21]||(n[21]=z=>Y(!1)),title:"Replace all questions with a new set"},[A(H).isGenerating?(l(),i("span",$v)):(l(),i("svg",Sv,[...n[58]||(n[58]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),n[59]||(n[59]=X(" Regenerate ",-1))],8,Cv),e("button",{class:"btn btn-ghost regen-btn",disabled:A(H).isGenerating,onClick:n[22]||(n[22]=z=>Y(!0)),title:"Generate more and append to current list"},[...n[60]||(n[60]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),X(" Add More ",-1)])],8,Iv)]),(l(!0),i(Z,null,ce(J.value,(z,Ue)=>(l(),i("div",{key:Ue,class:K(["quiz-card",{deselected:!z._selected}])},[e("div",Av,[e("label",Ev,[de(e("input",{type:"checkbox","onUpdate:modelValue":it=>z._selected=it},null,8,Mv),[[At,z._selected]]),e("span",Pv,"Q"+$(Ue+1),1)]),e("div",Tv,[e("span",{class:K(["badge difficulty-badge",z.difficulty])},$(z.difficulty),3),e("span",Nv,$(z.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",zv,$(z.question),1),e("div",Bv,[(l(!0),i(Z,null,ce(z.options,(it,at)=>(l(),i("div",{key:at,class:K(["q-option",at===z.correctIndex&&"correct"])},[e("span",Lv,$(["A","B","C","D"][at]),1),e("span",null,$(it),1),at===z.correctIndex?(l(),i("svg",jv,[...n[61]||(n[61]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):G("",!0)],2))),128))]),z.explanation?(l(),i("div",_v,[n[62]||(n[62]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),X(" "+$(z.explanation),1)])):G("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!J.value.filter(z=>z._selected).length,onClick:O},[n[63]||(n[63]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),X(" Add "+$(J.value.filter(z=>z._selected).length)+" Selected as Quiz Slides ",1)],8,Dv)])):G("",!0)],64)):C.value==="voiceover"?(l(),i(Z,{key:2},[e("div",qv,[n[64]||(n[64]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),de(e("textarea",{"onUpdate:modelValue":n[23]||(n[23]=z=>B.value=z),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[ye,B.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating,onClick:$e},[A(H).isGenerating?(l(),i("span",Fv)):G("",!0),X(" "+$(A(H).isGenerating?"Generating…":"Generate Script"),1)],8,Rv)],64)):C.value==="improve"?(l(),i(Z,{key:3},[(V=(b=m.value)==null?void 0:b.content)!=null&&V.text?(l(),i("div",Uv,[n[65]||(n[65]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Ov,$(m.value.content.text.slice(0,120))+$(m.value.content.text.length>120?"…":""),1)])):(l(),i("p",Vv,"Select a text element on the canvas to improve it.")),e("div",Wv,[n[66]||(n[66]=e("label",{class:"form-label"},"Instruction",-1)),de(e("input",{"onUpdate:modelValue":n[24]||(n[24]=z=>E.value=z),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[ye,E.value]])]),n[67]||(n[67]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),de(e("textarea",{"onUpdate:modelValue":n[25]||(n[25]=z=>E.value=z),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[ye,E.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating||!m.value&&!E.value,onClick:n[26]||(n[26]=z=>m.value?Le():Ve())},[A(H).isGenerating?(l(),i("span",Hv)):G("",!0),X(" "+$(A(H).isGenerating?"Processing…":"Generate"),1)],8,Gv)],64)):C.value==="translate"?(l(),i(Z,{key:4},[(re=(h=m.value)==null?void 0:h.content)!=null&&re.text?(l(),i("div",Yv,[n[68]||(n[68]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Qv,$(m.value.content.text.slice(0,120))+$(m.value.content.text.length>120?"…":""),1)])):(l(),i("p",Jv,"Select a text element on the canvas to translate it.")),e("div",Kv,[n[70]||(n[70]=e("label",{class:"form-label"},"Target Language",-1)),de(e("select",{"onUpdate:modelValue":n[27]||(n[27]=z=>W.value=z),class:"select"},[...n[69]||(n[69]=[et('<option value="Spanish" data-v-f539acee>Spanish</option><option value="French" data-v-f539acee>French</option><option value="German" data-v-f539acee>German</option><option value="Italian" data-v-f539acee>Italian</option><option value="Portuguese" data-v-f539acee>Portuguese</option><option value="Chinese (Simplified)" data-v-f539acee>Chinese (Simplified)</option><option value="Japanese" data-v-f539acee>Japanese</option><option value="Arabic" data-v-f539acee>Arabic</option>',8)])],512),[[St,W.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating||!((Ze=(De=m.value)==null?void 0:De.content)!=null&&Ze.text),onClick:Be},[A(H).isGenerating?(l(),i("span",Zv)):G("",!0),X(" "+$(A(H).isGenerating?"Translating…":"Translate Text"),1)],8,Xv),v.value?(l(),i("div",e1,[e("div",t1,[n[71]||(n[71]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",o1,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[28]||(n[28]=z=>d.navigator.clipboard.writeText(v.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Fe,disabled:!m.value},"Apply",8,n1)])]),e("div",l1,$(v.value),1)])):G("",!0)],64)):C.value==="image"?(l(),i(Z,{key:5},[n[74]||(n[74]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",i1,[n[72]||(n[72]=e("label",{class:"form-label"},"Image Description",-1)),de(e("textarea",{"onUpdate:modelValue":n[29]||(n[29]=z=>oe.value=z),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[ye,oe.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:he.value||A(H).isGenerating||!oe.value,onClick:Xe},[he.value||A(H).isGenerating?(l(),i("span",s1)):G("",!0),X(" "+$(he.value||A(H).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,a1),v.value?(l(),i("div",r1,[n[73]||(n[73]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",u1,$(v.value),1)])):G("",!0)],64)):C.value==="settings"?(l(),i("div",d1,[e("div",c1,[n[76]||(n[76]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:A(H).apiProvider,class:"select",onChange:n[30]||(n[30]=z=>A(H).setProvider(z.target.value))},[...n[75]||(n[75]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,p1)]),e("div",v1,[n[77]||(n[77]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:A(H).apiKey,class:"input",placeholder:"sk-…",onChange:n[31]||(n[31]=z=>A(H).setApiKey(z.target.value))},null,40,f1),n[78]||(n[78]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),A(H).apiKey?G("",!0):(l(),i("div",m1,[...n[79]||(n[79]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),X(" Running in ",-1),e("strong",null,"demo mode",-1),X(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):G("",!0),v.value&&C.value!=="settings"&&C.value!=="quiz"?(l(),i("div",g1,[e("div",b1,[n[80]||(n[80]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[32]||(n[32]=z=>v.value="")},"Clear")]),e("pre",h1,$(v.value),1),e("div",y1,[C.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:Ct},$(ee.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):G("",!0),C.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:A(H).isGenerating,onClick:Ne},[...n[81]||(n[81]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),X(" Regenerate ",-1)])],8,x1)):G("",!0),C.value==="improve"&&m.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Te}," Apply to Element ")):G("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:n[33]||(n[33]=z=>{var Ue;return(Ue=d.navigator.clipboard)==null?void 0:Ue.writeText(v.value)})}," Copy ")])])):G("",!0),A(H).lastError?(l(),i("div",w1,[n[82]||(n[82]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),X(" "+$(A(H).lastError),1)])):G("",!0)])])}}},C1=Ye(k1,[["__scopeId","data-v-f539acee"]]),$1={class:"theme-manager"},S1={class:"panel-section"},I1={class:"presets-grid"},A1=["title","onClick"],E1={class:"preset-preview"},M1={class:"preset-name"},P1={class:"panel-section"},T1={class:"theme-fields"},N1={class:"form-label"},z1={class:"color-row"},B1=["value","onInput"],L1=["value","onChange"],j1={class:"panel-section"},_1={class:"theme-field"},D1=["value","placeholder"],q1={class:"chart-palette-preview"},R1={class:"panel-section"},F1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},U1=["value"],O1=["value"],V1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},W1=["value"],G1=["value"],H1={class:"form-group"},Y1=["value"],Q1={class:"panel-section"},J1={class:"tp-chart-row"},K1={key:0,class:"apply-message success"},X1={key:1,class:"apply-message error"},Z1={__name:"ThemeManager",setup(S){const r=nt(),s=lt(),c=T(()=>s.getProject(r.projectId)),p=T(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),y=T(()=>xn(p.value)),x=L(""),g=L("");function F(a){s.updateProject(r.projectId,{theme:{...p.value,...a}})}const ge=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],se=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function R(a){F(a)}function ve(a,C){const E=a.content||{};return a.type==="text"?{content:{...E,fontFamily:C.fontFamily||E.fontFamily,color:C.textColor||E.color}}:a.type==="heading"?{content:{...E,fontFamily:C.headingFont||C.fontFamily||E.fontFamily,color:C.textColor||E.color}}:a.type==="shape"?{content:{...E,fillColor:C.secondaryColor||E.fillColor}}:a.type==="hotspot"?{content:{...E,bgColor:C.primaryColor||E.bgColor}}:a.type==="button"?{content:{...E,bgColor:C.primaryColor||E.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:C.fontFamily||E.fontFamily}}:a.type==="quiz"?{content:{...E,cardBgColor:C.bgColor||E.cardBgColor,questionColor:C.textColor||E.questionColor,accentColor:C.primaryColor||E.accentColor}}:a.type==="chart"?{content:{...E,...An(C)}}:null}function H(){F({chartPalette:""})}function D(){x.value="",g.value="";const a=r.projectId,C=c.value,E=p.value;if(!a||!C){g.value="No active project to apply theme.";return}const q=C.slides||[];let v=0;q.forEach(U=>{(U.backgroundType||"color")==="color"&&s.updateSlide(a,U.id,{backgroundType:"color",background:E.bgColor||U.background||"#ffffff"}),(U.elements||[]).forEach(P=>{const W=ve(P,E);W&&(s.updateElement(a,U.id,P.id,W),v+=1)})}),x.value=`Applied theme to ${q.length} slide${q.length===1?"":"s"} and ${v} element${v===1?"":"s"}.`}return(a,C)=>(l(),i("div",$1,[e("div",S1,[C[4]||(C[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",I1,[(l(),i(Z,null,ce(ge,E=>e("div",{key:E.name,class:"preset-card",title:E.name,onClick:q=>R(E)},[e("div",E1,[e("div",{class:"pp-header",style:pe({background:E.primaryColor})},null,4),e("div",{class:"pp-body",style:pe({background:E.bgColor})},[e("div",{class:"pp-line",style:pe({background:E.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:pe({background:E.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:pe({background:E.secondaryColor})},null,4)]),e("span",M1,$(E.name),1)],8,A1)),64))])]),e("div",P1,[C[5]||(C[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",T1,[(l(),i(Z,null,ce({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(E,q)=>e("div",{class:"theme-field",key:q},[e("label",N1,$(E),1),e("div",z1,[e("input",{type:"color",value:p.value[q]||"#ffffff",class:"color-input-native",onInput:v=>F({[q]:v.target.value})},null,40,B1),e("input",{value:p.value[q]||"",class:"input",onChange:v=>F({[q]:v.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,L1)])])),64))])]),e("div",j1,[C[8]||(C[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",_1,[C[6]||(C[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:A(ll)(A(xn)(p.value)),onChange:C[0]||(C[0]=E=>F({chartPalette:E.target.value}))},null,40,D1),e("div",q1,[(l(!0),i(Z,null,ce(y.value,(E,q)=>(l(),i("span",{key:`theme-chart-${q}`,class:"chart-palette-dot",style:pe({background:E})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:H},"Use auto palette")]),C[7]||(C[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",R1,[C[12]||(C[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",F1,[C[9]||(C[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:C[1]||(C[1]=E=>F({headingFont:E.target.value}))},[(l(),i(Z,null,ce(se,E=>e("option",{key:E.value,value:E.value},$(E.label),9,O1)),64))],40,U1)]),e("div",V1,[C[10]||(C[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:C[2]||(C[2]=E=>F({fontFamily:E.target.value}))},[(l(),i(Z,null,ce(se,E=>e("option",{key:E.value,value:E.value},$(E.label),9,G1)),64))],40,W1)]),e("div",H1,[C[11]||(C[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:C[3]||(C[3]=E=>F({fontSize:+E.target.value}))},null,40,Y1)])]),e("div",Q1,[C[13]||(C[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:pe({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:pe({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:pe({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:pe({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:pe({background:p.value.secondaryColor})},"Badge",4),e("div",J1,[(l(!0),i(Z,null,ce(y.value.slice(0,5),(E,q)=>(l(),i("span",{key:`preview-chart-${q}`,class:"tp-chart-bar",style:pe({background:E,height:`${22+q*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:D}," Apply Theme to Slides "),x.value?(l(),i("p",K1,$(x.value),1)):G("",!0),g.value?(l(),i("p",X1,$(g.value),1)):G("",!0)])]))}},ef=Ye(Z1,[["__scopeId","data-v-da2b0ce4"]]),tf={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},of={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},nf={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},lf={class:"export-tabs tabs",style:{"overflow-x":"auto"}},af={class:"export-content"},sf={class:"export-options",style:{"margin-bottom":"20px"}},rf={class:"form-group"},uf={class:"export-meta"},df={class:"meta-item"},cf={class:"meta-item"},pf={class:"meta-item"},vf={class:"export-options",style:{"margin-bottom":"20px"}},ff={class:"form-group"},mf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},gf={class:"export-options",style:{"margin-bottom":"20px"}},bf={class:"form-group"},hf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},yf={class:"coming-soon"},xf={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},wf={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},kf={key:1,class:"export-success"},Cf={__name:"ExportModal",setup(S){const r=nt(),s=lt(),c=En(),p=T(()=>s.getProject(r.projectId)),y=L("json"),x=L(""),g=L(""),F=L(!0);Ke(p,q=>{q&&!g.value&&(g.value=q.name||"presentation")},{immediate:!0});function ge(){const q=s.exportProject(r.projectId);if(!q)return;const v=new Blob([q],{type:"application/json"}),U=URL.createObjectURL(v),P=document.createElement("a");P.href=U,P.download=`${g.value||"project"}.mediasurf.json`,P.click(),URL.revokeObjectURL(U),x.value="success",setTimeout(()=>x.value="",3e3)}function se(q,v="presentation"){return String(q).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||v}function R(q){return new Promise((v,U)=>{const P=new FileReader;P.onloadend=()=>v(P.result),P.onerror=()=>U(P.error),P.readAsDataURL(q)})}function ve(q,v,U="html"){const P=Et(v);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${P.width}px;
  --lf-slide-height: ${P.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(q==null?void 0:q.fontFamily)||"Inter, sans-serif"};
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
  color: ${(q==null?void 0:q.textColor)||"#1a1a2e"};
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
`}async function D(){return E("html")}async function a(){return E("iframe")}async function C(){return E("pdf")}async function E(q="html"){var Oe,Q,ie;const v=p.value;if(!v)return;x.value="processing";const U=q==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(q==="pdf"&&!U){x.value="error",setTimeout(()=>x.value="",3e3);return}const P=q==="pdf"?null:new al,W=P?P.folder("assets"):null;let B=0;async function k(J,ae="media"){if((!J||J.startsWith("data:")||J.startsWith("http://localhost")||J.startsWith("blob:"))&&J.startsWith("data:"))return J;try{const be=await(await fetch(J)).blob();if(q==="pdf")return await R(be);let N="bin";const I=be.type;if(I.includes("image/png")?N="png":I.includes("image/jpeg")?N="jpg":I.includes("image/gif")?N="gif":I.includes("image/svg")?N="svg":I.includes("image/webp")?N="webp":I.includes("video/mp4")?N="mp4":I.includes("audio/mpeg")&&(N="mp3"),N==="bin"){const m=J.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);m&&(N=m[1])}B++;const j=`${ae}_${B}.${N}`;return W.file(j,be),`assets/${j}`}catch(Se){return console.warn("Could not fetch asset:",J,Se),J}}const M=JSON.parse(JSON.stringify([...v.slides||[]])).sort((J,ae)=>(J.order??0)-(ae.order??0));if(F.value)for(const J of M){J.backgroundType==="image"&&J.backgroundImage&&(J.backgroundImage=await k(J.backgroundImage,"bg"));for(const ae of J.elements||[])ae.type==="image"&&((Oe=ae.content)!=null&&Oe.src)&&(ae.content.src=await k(ae.content.src,"img")),ae.type==="video"&&((Q=ae.content)!=null&&Q.src)&&!ae.content.src.includes("youtube")&&!ae.content.src.includes("youtu.be")&&(ae.content.src=await k(ae.content.src,"vid")),ae.type==="audio"&&((ie=ae.content)!=null&&ie.src)&&(ae.content.src=await k(ae.content.src,"aud"))}const le=se(g.value||v.name||"presentation"),ee={name:v.name,theme:v.theme||{},settings:v.settings||{},slides:M},te=JSON.stringify(ee).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),fe=ve(v.theme,v.settings,q),me=H(q),Me=`<script id="lf-data" type="application/json">${te}<\/script>`,Ce=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${le}</title>
${q==="pdf"?`<style>${fe}</style>`:'<link rel="stylesheet" href="style.css">'}
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
  <span class="nav-counter" id="counter">1 / ${M.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${Me}
${q!=="pdf"?'<script src="script.js"><\/script>':`<script>${me}<\/script>`}
</body>
</html>`;if(q==="pdf"){U.document.open(),U.document.write(Ce),U.document.close(),x.value="success",setTimeout(()=>x.value="",3e3);return}P.file("index.html",Ce),P.file("style.css",fe),P.file("script.js",me);const Ie=await P.generateAsync({type:"blob"}),Qe=URL.createObjectURL(Ie),_e=document.createElement("a");_e.href=Qe,_e.download=`${le}.zip`,_e.click(),URL.revokeObjectURL(Qe),x.value="success",setTimeout(()=>x.value="",3e3)}return(q,v)=>(l(),Je(Wn,{title:"Export Project",size:"md",onClose:v[13]||(v[13]=U=>A(r).showExportModal=!1)},{footer:ut(()=>[e("button",{class:"btn btn-secondary",onClick:v[12]||(v[12]=U=>A(r).showExportModal=!1)},"Close")]),default:ut(()=>{var U,P,W,B,k;return[A(c).user?(l(),i(Z,{key:1},[e("div",lf,[e("button",{class:K(["tab-btn",y.value==="json"&&"active"]),onClick:v[2]||(v[2]=M=>y.value="json")},"JSON",2),e("button",{class:K(["tab-btn",y.value==="html"&&"active"]),onClick:v[3]||(v[3]=M=>y.value="html")},"HTML",2),e("button",{class:K(["tab-btn",y.value==="iframe"&&"active"]),onClick:v[4]||(v[4]=M=>y.value="iframe")},"Iframe",2),e("button",{class:K(["tab-btn",y.value==="pdf"&&"active"]),onClick:v[5]||(v[5]=M=>y.value="pdf")},"PDF",2),e("button",{class:K(["tab-btn",y.value==="scorm"&&"active"]),onClick:v[6]||(v[6]=M=>y.value="scorm")},"SCORM",2)]),e("div",af,[y.value==="json"?(l(),i(Z,{key:0},[v[24]||(v[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",sf,[e("div",rf,[v[19]||(v[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),de(e("input",{type:"text","onUpdate:modelValue":v[7]||(v[7]=M=>g.value=M),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ye,g.value]])])]),e("div",uf,[e("div",df,[v[20]||(v[20]=e("span",null,"Project",-1)),e("strong",null,$((U=p.value)==null?void 0:U.name),1)]),e("div",cf,[v[21]||(v[21]=e("span",null,"Slides",-1)),e("strong",null,$(((W=(P=p.value)==null?void 0:P.slides)==null?void 0:W.length)||0),1)]),e("div",pf,[v[22]||(v[22]=e("span",null,"Elements",-1)),e("strong",null,$(((k=(B=p.value)==null?void 0:B.slides)==null?void 0:k.reduce((M,le)=>{var ee;return M+(((ee=le.elements)==null?void 0:ee.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:ge},[...v[23]||(v[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Download JSON ",-1)])])],64)):y.value==="html"?(l(),i(Z,{key:1},[v[28]||(v[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",vf,[e("div",ff,[v[25]||(v[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),de(e("input",{type:"text","onUpdate:modelValue":v[8]||(v[8]=M=>g.value=M),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ye,g.value]])]),e("label",mf,[de(e("input",{type:"checkbox","onUpdate:modelValue":v[9]||(v[9]=M=>F.value=M)},null,512),[[At,F.value]]),v[26]||(v[26]=X(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),v[29]||(v[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:D},[...v[27]||(v[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Download HTML ",-1)])])],64)):y.value==="iframe"?(l(),i(Z,{key:2},[v[33]||(v[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",gf,[e("div",bf,[v[30]||(v[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),de(e("input",{type:"text","onUpdate:modelValue":v[10]||(v[10]=M=>g.value=M),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ye,g.value]])]),e("label",hf,[de(e("input",{type:"checkbox","onUpdate:modelValue":v[11]||(v[11]=M=>F.value=M)},null,512),[[At,F.value]]),v[31]||(v[31]=X(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...v[32]||(v[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Download Iframe Zip ",-1)])])],64)):y.value==="pdf"?(l(),i(Z,{key:3},[v[35]||(v[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),v[36]||(v[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:C},[...v[34]||(v[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Generate PDF ",-1)])])],64)):y.value==="scorm"?(l(),i(Z,{key:4},[v[40]||(v[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",yf,[(l(),i("svg",xf,[...v[37]||(v[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),v[38]||(v[38]=e("h4",null,"Coming Soon",-1)),v[39]||(v[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):G("",!0),pt(It,{name:"fade"},{default:ut(()=>[x.value==="processing"?(l(),i("div",wf,[...v[41]||(v[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),X(" Generating package... Please wait. ",-1)])])):x.value==="success"?(l(),i("div",kf,[...v[42]||(v[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),X(" Export successful! Check your downloads folder. ",-1)])])):G("",!0)]),_:1})])],64)):(l(),i("div",tf,[(l(),i("svg",of,[...v[14]||(v[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),v[17]||(v[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),v[18]||(v[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",nf,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:v[0]||(v[0]=M=>A(c).loginWithGoogle())},[...v[15]||(v[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),X(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:v[1]||(v[1]=M=>A(c).loginWithMicrosoft())},[...v[16]||(v[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),X(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},$f=Ye(Cf,[["__scopeId","data-v-1a8a69d1"]]),Sf={key:0,class:"editor-view"},If={class:"editor-topbar"},Af={class:"topbar-left"},Ef={class:"project-name-wrap"},Mf=["value"],Pf={class:"save-label"},Tf={class:"topbar-center"},Nf={key:0,class:"slide-position"},zf={class:"topbar-right"},Bf={class:"editor-body"},Lf={class:"authoring-rail"},jf=["onClick","data-tooltip"],_f={key:0,class:"rail-icon"},Df={key:1,class:"rail-icon"},qf={key:2,class:"rail-icon"},Rf={key:3,class:"rail-icon"},Ff={key:4,class:"rail-icon"},Uf={key:5,class:"rail-icon"},Of={key:6,class:"rail-icon"},Vf={key:7,class:"rail-icon"},Wf={key:8,class:"rail-icon"},Gf={key:9,class:"rail-icon"},Hf={class:"right-panel"},Yf={class:"panel-tabs"},Qf=["onClick","data-tooltip"],Jf={class:"tab-icon"},Kf={class:"tab-label"},Xf={class:"panel-content"},Zf={key:1,class:"editor-not-found"},em={__name:"EditorView",setup(S){const r=On(),s=Un(),c=nt(),p=lt(),y=En(),x=T(()=>r.params.id),g=T(()=>p.getProject(x.value)),F=T(()=>Et(g.value)),ge=T(()=>{var N;return[...((N=g.value)==null?void 0:N.slides)||[]].sort((I,j)=>I.order-j.order)}),se=L(null),R=L(!1),ve=L("deck"),{aiStore:H,showAIModal:D,aiMode:a,aiTopic:C,aiContext:E,aiProjectName:q,aiSlideCount:v,aiQuestionCount:U,aiDifficulty:P,aiQuestionType:W,aiCreationError:B,aiSubmitting:k,aiProjectNamePlaceholder:M,aiPrimaryActionLabel:le,openAICreationModal:ee,createAIProject:te}=Gn({onRequireAuth:()=>s.push({name:"dashboard"})});let fe=!1,me=null;Ke(()=>g.value,N=>{if(N){if(fe){fe=!1;return}me&&clearTimeout(me),me=setTimeout(()=>{c.pushHistory(N)},600)}},{deep:!0}),Ke(()=>y.isAuthReady,async N=>{var I;if(N){if((I=y.user)!=null&&I.uid&&await p.ensureRemoteProjectsLoaded(),!g.value){s.push({name:"dashboard"});return}c.setProject(x.value),ge.value.length>0&&c.setCurrentSlide(ge.value[0].id),c.pushHistory(g.value)}},{immediate:!0});const Me=T(()=>{const N=g.value;return N?`Saved ${new Date(N.updatedAt).toLocaleTimeString()}`:""}),Pe=T(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});sl({undo:()=>{if(c.canUndo()){const N=c.undo();N&&(fe=!0,p.updateProject(x.value,N))}},redo:()=>{if(c.canRedo()){const N=c.redo();N&&(fe=!0,p.updateProject(x.value,N))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var I,j,m,Ne;const N=(Ne=(m=(j=(I=g.value)==null?void 0:I.slides)==null?void 0:j.find(we=>we.id===c.currentSlideId))==null?void 0:m.elements)==null?void 0:Ne.find(we=>we.id===c.selectedElementId);N&&c.setClipboard(N)},paste:()=>{if(c.clipboard&&c.currentSlideId){const N=c.clipboard;p.addElement(c.projectId,c.currentSlideId,N.type,{...N,x:N.x+20,y:N.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const N=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);N&&c.selectElement(N.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(N,I)=>{var m,Ne,we,qe;if(!c.selectedElementId)return;const j=(qe=(we=(Ne=(m=g.value)==null?void 0:m.slides)==null?void 0:Ne.find(Ae=>Ae.id===c.currentSlideId))==null?void 0:we.elements)==null?void 0:qe.find(Ae=>Ae.id===c.selectedElementId);j&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:j.x+N,y:j.y+I})},selectAll:()=>{var I,j,m;(((m=(j=(I=g.value)==null?void 0:I.slides)==null?void 0:j.find(Ne=>Ne.id===c.currentSlideId))==null?void 0:m.elements)||[]).forEach((Ne,we)=>c.selectElement(Ne.id,we>0))}});function Ce(){s.push({name:"dashboard"})}function Ie(){s.push({name:"preview",params:{id:x.value},query:{from:"editor"}})}function Qe(N="deck"){ve.value=N,R.value=!0}function _e(){R.value=!1,ee(ve.value)}function Oe(N,I="Image"){if(!c.projectId||!c.currentSlideId||!N)return;const j=new Image;j.onload=()=>{const we=Math.min(420/j.width,280/j.height,1),qe=Math.max(120,Math.round(j.width*we)),Ae=Math.max(80,Math.round(j.height*we)),Re=Math.max(24,Math.round((F.value.width-qe)/2)),tt=Math.max(24,Math.round((F.value.height-Ae)/2)),He=p.addElement(c.projectId,c.currentSlideId,"image",{x:Re,y:tt,width:qe,height:Ae,content:{src:N,alt:I,objectFit:"cover"}});He&&(c.selectElement(He.id),c.setRightPanel("properties"),c.setActiveTool("select"))},j.src=N}function Q(N){const[I]=Array.from(N.target.files||[]);if(!I||!I.type.startsWith("image/"))return;const j=new FileReader;j.onload=()=>Oe(String(j.result||""),I.name),j.readAsDataURL(I),N.target.value=""}function ie(){var N;(N=se.value)==null||N.click()}const J=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function ae(N){if(N==="text"){c.setActiveTool("text");return}if(N==="blocks"){c.openLeftPanel("blocks");return}if(N==="resources"){c.setActiveTool("image");return}if(N==="interactive-elements"){c.setActiveTool("hotspot");return}if(N==="interactive-questions"){c.setActiveTool("quiz");return}if(N==="widgets"){c.setActiveTool("shape");return}if(N==="insert"){ie();return}if(N==="style"){c.setRightPanel("properties");return}if(N==="background"){c.clearSelection(),c.setRightPanel("properties");return}N==="pages"&&c.toggleSlidePanel("slides")}function Se(N){return N==="text"?["text","heading"].includes(c.activeTool):N==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":N==="resources"?c.activeTool==="image":N==="interactive-elements"?["hotspot","button"].includes(c.activeTool):N==="interactive-questions"?c.activeTool==="quiz":N==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):N==="insert"?!1:N==="style"||N==="background"?c.rightPanelTab==="properties":N==="pages"?c.showSlidePanel:!1}function be(){Qn({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return Ke(()=>g.value,N=>{N&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{be()},100)},{immediate:!0}),(N,I)=>g.value?(l(),i("div",Sf,[e("input",{ref_key:"imageInputRef",ref:se,type:"file",accept:"image/*",class:"sr-only",onChange:Q},null,544),e("header",If,[e("div",Af,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:Ce,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...I[14]||(I[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),X(" Dashboard ",-1)])]),e("div",Ef,[e("input",{value:g.value.name,class:"project-name-input",onChange:I[0]||(I[0]=j=>A(p).updateProject(x.value,{name:j.target.value}))},null,40,Mf)]),e("span",Pf,$(Me.value),1)]),e("div",Tf,[A(c).currentSlideId?(l(),i("span",Nf," Slide "+$(ge.value.findIndex(j=>j.id===A(c).currentSlideId)+1)+" of "+$(ge.value.length),1)):G("",!0)]),e("div",zf,[e("button",{class:"btn btn-ghost btn-sm",onClick:be,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...I[15]||(I[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),X(" Help ",-1)])]),e("button",{class:K(["btn btn-ghost btn-sm",A(c).showAIPanel&&"active-btn"]),onClick:I[1]||(I[1]=j=>{A(c).showAIPanel=!A(c).showAIPanel,A(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...I[16]||(I[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),X(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:I[2]||(I[2]=j=>{A(c).showThemeManager=!A(c).showThemeManager,A(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...I[17]||(I[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),X(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:Ie,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...I[18]||(I[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),X(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:I[3]||(I[3]=j=>A(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...I[19]||(I[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),X(" Export ",-1)])])])]),pt(Ec,{onOpenAiProject:Qe}),e("div",Bf,[e("aside",Lf,[(l(),i(Z,null,ce(J,j=>e("button",{key:j.id,class:K(["rail-option",Se(j.id)&&"active"]),onClick:m=>ae(j.id),"data-tooltip":j.label,"data-tooltip-position":"right"},[j.id==="text"?(l(),i("span",_f,"T")):j.id==="blocks"?(l(),i("span",Df,[...I[20]||(I[20]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-e651b38e><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-e651b38e></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-e651b38e></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-e651b38e></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-e651b38e></rect></svg>',1)])])):j.id==="resources"?(l(),i("span",qf,[...I[21]||(I[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):j.id==="interactive-elements"?(l(),i("span",Rf,[...I[22]||(I[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):j.id==="interactive-questions"?(l(),i("span",Ff,[...I[23]||(I[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):j.id==="widgets"?(l(),i("span",Uf,[...I[24]||(I[24]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-e651b38e><rect x="3" y="3" width="7" height="7" data-v-e651b38e></rect><rect x="14" y="3" width="7" height="7" data-v-e651b38e></rect><rect x="14" y="14" width="7" height="7" data-v-e651b38e></rect><rect x="3" y="14" width="7" height="7" data-v-e651b38e></rect></svg>',1)])])):j.id==="insert"?(l(),i("span",Of,[...I[25]||(I[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):j.id==="style"?(l(),i("span",Vf,[...I[26]||(I[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):j.id==="background"?(l(),i("span",Wf,[...I[27]||(I[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):j.id==="pages"?(l(),i("span",Gf,[...I[28]||(I[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):G("",!0),X(" "+$(j.label),1)],10,jf)),64))]),pt(It,{name:"side-panel-slide"},{default:ut(()=>[A(c).showSlidePanel&&A(c).leftPanelTab==="slides"?(l(),Je(kl,{key:0})):G("",!0)]),_:1}),pt(It,{name:"side-panel-slide"},{default:ut(()=>[A(c).showSlidePanel&&A(c).leftPanelTab==="blocks"?(l(),Je(Ol,{key:0})):G("",!0)]),_:1}),pt(Ip),e("aside",Hf,[e("div",Yf,[(l(),i(Z,null,ce([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],j=>e("button",{key:j.id,class:K(["panel-tab",A(c).rightPanelTab===j.id&&"active"]),onClick:m=>A(c).setRightPanel(j.id),"data-tooltip":`Open ${j.label}`,"data-tooltip-position":"bottom"},[e("span",Jf,$(j.icon),1),e("span",Kf,$(j.label),1)],10,Qf)),64))]),e("div",Xf,[pt(It,{name:"editor-panel-switch",mode:"out-in"},{default:ut(()=>[(l(),i("div",{key:Pe.value,class:"panel-content-view"},[A(c).rightPanelTab==="properties"?(l(),Je(rc,{key:0})):A(c).rightPanelTab==="layers"?(l(),Je(di,{key:1})):A(c).rightPanelTab==="ai"?(l(),Je(C1,{key:2})):A(c).rightPanelTab==="theme"?(l(),Je(ef,{key:3})):G("",!0)]))]),_:1})])])]),A(c).showExportModal?(l(),Je($f,{key:0})):G("",!0),R.value?(l(),Je(Hn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:I[4]||(I[4]=j=>R.value=!1),onConfirm:_e})):G("",!0),A(D)?(l(),Je(Yn,{key:2,mode:A(a),topic:A(C),context:A(E),"project-name":A(q),"slide-count":A(v),"question-count":A(U),difficulty:A(P),"question-type":A(W),"project-name-placeholder":A(M),"primary-action-label":A(le),"creation-error":A(B),"is-submitting":A(k),"is-generating":A(H).isGenerating,"has-api-key":!!A(H).apiKey,onClose:I[5]||(I[5]=j=>D.value=!1),onCreate:A(te),"onUpdate:mode":I[6]||(I[6]=j=>a.value=j),"onUpdate:topic":I[7]||(I[7]=j=>C.value=j),"onUpdate:context":I[8]||(I[8]=j=>E.value=j),"onUpdate:projectName":I[9]||(I[9]=j=>q.value=j),"onUpdate:slideCount":I[10]||(I[10]=j=>v.value=j),"onUpdate:questionCount":I[11]||(I[11]=j=>U.value=j),"onUpdate:difficulty":I[12]||(I[12]=j=>P.value=j),"onUpdate:questionType":I[13]||(I[13]=j=>W.value=j)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):G("",!0)])):(l(),i("div",Zf,[I[29]||(I[29]=e("h2",null,"Project not found",-1)),I[30]||(I[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:Ce},"Go to Dashboard")]))}},rm=Ye(em,[["__scopeId","data-v-e651b38e"]]);export{rm as default};
