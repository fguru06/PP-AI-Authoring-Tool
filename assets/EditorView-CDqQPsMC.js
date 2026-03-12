import{K as Cn,P as $n,v as l,F as i,B as e,C,H as K,I as ce,E as je,D as Q,u as A,Q as pe,M as et,G,L as Z,q as Xe,R as Sn,f as N,r as _,N as de,O as ye,S as Et,w as Je,n as In,i as Dn,U as qn,y as gt,x as pt,T as Mt,V as At,z as Rn,p as Fn,J as wn}from"./vue-core-DCl8Fgqc.js";import{u as On,d as Un}from"./vue-ecosystem-Da9kls6U.js";import{u as nt,c as Vn,M as Wn,a as Gn,C as Hn,A as Yn,b as Qn}from"./ConfirmActionModal-C39qwEGV.js";import{u as lt,b as Xn,g as Pt,C as Bt,c as Jn,n as Kn,p as Zn,s as el,m as An,f as Mn,d as En,e as tl,h as Lt,B as ol,i as nl,j as ll,k as kn,a as Pn}from"./projectStore-BRQpnNNy.js";import{_ as He}from"./index-Cl2WC0dW.js";import{C as il}from"./ChartElement-oQQ0ngwr.js";import{J as al}from"./jszip-529iNPX7.js";function sl(S){function s(r){var b,O,be,re,F,me,H,L,a,$,M,D,p,U,P,W,j;const c=r.ctrlKey||r.metaKey,v=r.key.toLowerCase(),h=r.target.tagName.toLowerCase(),y=h==="input"||h==="textarea"||r.target.isContentEditable;y&&c&&["c","v","x","a","z","y"].includes(v)||(c&&v==="z"&&!r.shiftKey?(r.preventDefault(),(b=S.undo)==null||b.call(S)):c&&(v==="y"||v==="z"&&r.shiftKey)?(r.preventDefault(),(O=S.redo)==null||O.call(S)):c&&v==="c"?(r.preventDefault(),(be=S.copy)==null||be.call(S)):c&&v==="v"?(r.preventDefault(),(re=S.paste)==null||re.call(S)):c&&v==="x"?(r.preventDefault(),(F=S.cut)==null||F.call(S)):c&&v==="d"?(r.preventDefault(),(me=S.duplicate)==null||me.call(S)):c&&v==="a"?(r.preventDefault(),(H=S.selectAll)==null||H.call(S)):v==="delete"||v==="backspace"?y||(r.preventDefault(),(L=S.delete)==null||L.call(S)):v==="escape"?(a=S.escape)==null||a.call(S):c&&v==="g"?(r.preventDefault(),($=S.toggleGrid)==null||$.call(S)):c&&v==="="||c&&v==="+"?(r.preventDefault(),(M=S.zoomIn)==null||M.call(S)):c&&v==="-"?(r.preventDefault(),(D=S.zoomOut)==null||D.call(S)):c&&v==="0"?(r.preventDefault(),(p=S.zoomReset)==null||p.call(S)):v==="arrowleft"?(U=S.nudge)==null||U.call(S,-1,0):v==="arrowright"?(P=S.nudge)==null||P.call(S,1,0):v==="arrowup"?(W=S.nudge)==null||W.call(S,0,-1):v==="arrowdown"&&((j=S.nudge)==null||j.call(S,0,1)))}Cn(()=>window.addEventListener("keydown",s)),$n(()=>window.removeEventListener("keydown",s))}const rl={class:"slide-panel"},ul={class:"slide-panel-header"},dl={class:"slide-count"},cl={class:"slides-list"},pl=["onClick","onContextmenu","onDragstart","onDrop"],vl={class:"slide-number"},fl=["viewBox"],ml=["x","y","width","height","fill"],gl=["d","stroke"],bl=["d","fill"],hl={class:"slide-footer"},yl={class:"slide-title"},xl=["onClick"],wl={__name:"SlidePanel",setup(S){const s=nt(),r=lt(),c=N(()=>r.getProject(s.projectId)),v=N(()=>Pt(c.value)),h=N(()=>{var k,E;return((E=(k=c.value)==null?void 0:k.slides)==null?void 0:E.slice().sort((ae,X)=>ae.order-X.order))||[]}),y=_({show:!1,x:0,y:0,slideId:null});function b(k){s.setCurrentSlide(k)}function O(){const k=h.value.findIndex(ae=>ae.id===s.currentSlideId),E=r.addSlide(s.projectId,k);E&&s.setCurrentSlide(E.id)}function be(k){var X,ee;const E=h.value.findIndex(ve=>ve.id===k);r.deleteSlide(s.projectId,k);const ae=((X=c.value)==null?void 0:X.slides)||[];if(ae.length>0){const ve=ae.slice().sort((Ee,ze)=>Ee.order-ze.order),fe=Math.min(E,ve.length-1);s.setCurrentSlide((ee=ve[fe])==null?void 0:ee.id)}}function re(k,E){k.preventDefault(),y.value={show:!0,x:k.clientX,y:k.clientY,slideId:E},setTimeout(()=>window.addEventListener("click",F,{once:!0}),0)}function F(){y.value.show=!1}function me(){const k=r.duplicateSlide(s.projectId,y.value.slideId);k&&s.setCurrentSlide(k.id),F()}function H(){be(y.value.slideId),F()}function L(k,E){k.stopPropagation(),be(E)}function a(){const k=h.value.findIndex(E=>E.id===y.value.slideId);k>0&&r.reorderSlides(s.projectId,k,k-1),F()}function $(){const k=h.value.findIndex(E=>E.id===y.value.slideId);k<h.value.length-1&&r.reorderSlides(s.projectId,k,k+1),F()}let M=-1;function D(k,E){M=E,k.dataTransfer.effectAllowed="move"}function p(k,E){k.preventDefault(),M!==-1&&M!==E&&r.reorderSlides(s.projectId,M,E),M=-1}function U(k){return k.backgroundType==="gradient"&&k.backgroundGradient?{background:k.backgroundGradient}:k.backgroundType==="image"&&k.backgroundImage?{backgroundImage:`url(${k.backgroundImage})`,backgroundSize:"cover"}:{background:k.background||"#fff"}}function P(k){return{left:k.x/v.value.width*100+"%",top:k.y/v.value.height*100+"%",width:k.width/v.value.width*100+"%",height:k.height/v.value.height*100+"%"}}function W(k){var E,ae;return{background:k.type==="shape"?(E=k.content)==null?void 0:E.fillColor:k.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:k.type==="shape"&&((ae=k.content)==null?void 0:ae.shapeType)==="circle"?"50%":void 0}}function j(k){var E;return Xn(k.content||{},k.width||420,k.height||280,((E=c.value)==null?void 0:E.theme)||{})}return(k,E)=>(l(),i("div",rl,[e("div",ul,[E[2]||(E[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",dl,C(h.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:O,"data-tooltip":"Add slide","aria-label":"Add slide"},[...E[1]||(E[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",cl,[(l(!0),i(K,null,ce(h.value,(ae,X)=>(l(),i("div",{key:ae.id,class:Q(["slide-thumb-item",A(s).currentSlideId===ae.id&&"active"]),draggable:"true",onClick:ee=>b(ae.id),onContextmenu:ee=>re(ee,ae.id),onDragstart:ee=>D(ee,X),onDragover:E[0]||(E[0]=je(()=>{},["prevent"])),onDrop:ee=>p(ee,X)},[e("div",vl,C(X+1),1),e("div",{class:"slide-thumb",style:pe(U(ae))},[(l(!0),i(K,null,ce(ae.elements.slice(0,6),ee=>{var ve;return l(),i("div",{key:ee.id,class:"mini-element-frame",style:pe(P(ee))},[ee.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${ee.width||420} ${ee.height||280}`,preserveAspectRatio:"none"},[j(ee).type==="bar"?(l(!0),i(K,{key:0},ce(j(ee).cartesian.bars,fe=>(l(),i("rect",{key:`mini-bar-${fe.id}`,x:fe.x,y:fe.y,width:fe.width,height:fe.height,fill:fe.color,rx:"6"},null,8,ml))),128)):j(ee).type==="line"?(l(),i("path",{key:1,d:j(ee).cartesian.linePath,stroke:((ve=j(ee).cartesian.points[0])==null?void 0:ve.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,gl)):(l(!0),i(K,{key:2},ce(j(ee).circle.slices,fe=>(l(),i("path",{key:`mini-slice-${fe.id}`,d:fe.path,fill:fe.color},null,8,bl))),128))],8,fl)):(l(),i("div",{key:1,class:"mini-element",style:pe(W(ee))},null,4))],4)}),128))],4),e("div",hl,[e("div",yl,C(ae.title||`Slide ${X+1}`),1),h.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:ee=>L(ee,ae.id)},[...E[3]||(E[3]=[et('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,xl)):G("",!0)])],42,pl))),128))]),e("button",{class:"add-slide-bottom",onClick:O},[...E[4]||(E[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Z(" Add Slide ",-1)])]),(l(),Xe(Sn,{to:"body"},[y.value.show?(l(),i("div",{key:0,class:"context-menu",style:pe({left:y.value.x+"px",top:y.value.y+"px"})},[e("button",{class:"ctx-item",onClick:me},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:$},"Move Down"),E[5]||(E[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:H},"Delete Slide")],4)):G("",!0)]))]))}},kl=He(wl,[["__scopeId","data-v-30eea542"]]),Cl={class:"blocks-panel"},$l={class:"blocks-toolbar"},Sl={class:"blocks-categories"},Il=["onClick"],Al={class:"blocks-panel-body"},Ml={class:"blocks-save-card"},El=["disabled"],Pl={class:"blocks-list"},Tl=["onDragstart"],Nl={class:"block-thumb-stage"},zl={class:"block-card-body"},Bl={class:"block-card-head"},Ll={class:"block-name"},_l={class:"block-meta"},jl={key:0},Dl=["onClick"],ql={class:"block-description"},Rl={class:"block-tags"},Fl=["onClick"],Ol={__name:"BlocksPanel",setup(S){const s=nt(),r=lt(),c=_(""),v=_("all"),h=_(""),y=_("Custom"),b=N(()=>r.getProject(s.projectId)),O=N(()=>{var P,W;return(W=(P=b.value)==null?void 0:P.slides)==null?void 0:W.find(j=>j.id===s.currentSlideId)}),be=N(()=>r.getContentBlocks(s.projectId)),re=N(()=>{const P=new Set(["all"]);return be.value.forEach(W=>P.add(W.category||"Custom")),Array.from(P)}),F=N(()=>{var W;const P=new Set(s.selectedElementIds);return(((W=O.value)==null?void 0:W.elements)||[]).filter(j=>P.has(j.id))}),me=N(()=>{const P=c.value.trim().toLowerCase();return be.value.filter(W=>v.value==="all"||(W.category||"Custom")===v.value?P?[W.name,W.description,W.category,...W.tags||[]].join(" ").toLowerCase().includes(P):!0:!1)});function H(P){const W=Array.isArray(P==null?void 0:P.elements)?P.elements:[];if(!W.length)return{minX:0,minY:0,width:1,height:1};const j=Math.min(...W.map(X=>Number(X.x||0))),k=Math.min(...W.map(X=>Number(X.y||0))),E=Math.max(...W.map(X=>Number(X.x||0)+Number(X.width||0))),ae=Math.max(...W.map(X=>Number(X.y||0)+Number(X.height||0)));return{minX:j,minY:k,width:Math.max(1,E-j),height:Math.max(1,ae-k)}}function L(P,W){const j=H(P);return{left:`${(Number(W.x||0)-j.minX)/j.width*100}%`,top:`${(Number(W.y||0)-j.minY)/j.height*100}%`,width:`${Number(W.width||0)/j.width*100}%`,height:`${Number(W.height||0)/j.height*100}%`}}function a(P){var W,j,k,E,ae,X,ee;return P.type==="shape"?{background:((W=P.content)==null?void 0:W.fillColor)||"#cbd5e1",borderRadius:((j=P.content)==null?void 0:j.shapeType)==="circle"?"50%":`${Number(((k=P.content)==null?void 0:k.borderRadius)||10)}px`,border:`${Math.max(0,Number(((E=P.content)==null?void 0:E.borderWidth)||0))}px solid ${((ae=P.content)==null?void 0:ae.borderColor)||"transparent"}`}:P.type==="button"?{background:((X=P.content)==null?void 0:X.bgColor)||"#6c47ff",borderRadius:`${Number(((ee=P.content)==null?void 0:ee.borderRadius)||10)}px`}:P.type==="image"||P.type==="video"?{background:"linear-gradient(135deg, rgba(14,165,233,.25), rgba(108,71,255,.25))",borderRadius:"14px"}:P.type==="text"||P.type==="heading"?{background:"transparent",borderRadius:"0"}:{background:"rgba(148, 163, 184, 0.25)",borderRadius:"12px"}}function $(P,W){const j=P.type==="heading"?2:3,k=Math.max(18,100/(j+1.25));return{width:`${W===j-1?72:100}%`,height:`${P.type==="heading"?k:k-2}%`}}function M(P){const W=r.insertContentBlock(s.projectId,s.currentSlideId,P.id);W.length&&(s.setSelection(W.map(j=>j.id)),s.focusPropertiesSection("content"),s.setActiveTool("select"))}function D(){var j,k;const P=h.value.trim();if(!P||!F.value.length)return;r.saveSelectionAsContentBlock(s.projectId,s.currentSlideId,F.value.map(E=>E.id),{name:P,category:y.value.trim()||"Custom",accent:((k=(j=b.value)==null?void 0:j.theme)==null?void 0:k.primaryColor)||"#6c47ff"})&&(h.value="",v.value="Custom")}function p(P){r.deleteContentBlock(s.projectId,P)}function U(P,W){P.dataTransfer&&(P.dataTransfer.effectAllowed="copy",P.dataTransfer.setData(Bt,JSON.stringify({id:W.id})),P.dataTransfer.setData("text/plain",W.name))}return(P,W)=>(l(),i("div",Cl,[W[6]||(W[6]=e("div",{class:"blocks-panel-header"},[e("div",null,[e("div",{class:"panel-section-title"},"Blocks"),e("div",{class:"blocks-panel-subtitle"},"Drop in reusable sections for faster slide building.")])],-1)),e("div",$l,[de(e("input",{"onUpdate:modelValue":W[0]||(W[0]=j=>c.value=j),class:"input blocks-search",placeholder:"Search blocks"},null,512),[[ye,c.value]]),e("div",Sl,[(l(!0),i(K,null,ce(re.value,j=>(l(),i("button",{key:j,type:"button",class:Q(["blocks-category-chip",v.value===j&&"active"]),onClick:k=>v.value=j},C(j==="all"?"All":j),11,Il))),128))])]),e("div",Al,[e("div",Ml,[W[3]||(W[3]=e("div",{class:"blocks-save-title"},"Save Selection",-1)),W[4]||(W[4]=e("div",{class:"field-hint"},"Turn the current selection into a reusable block for this project.",-1)),de(e("input",{"onUpdate:modelValue":W[1]||(W[1]=j=>h.value=j),class:"input",placeholder:"e.g. Product intro banner"},null,512),[[ye,h.value]]),de(e("input",{"onUpdate:modelValue":W[2]||(W[2]=j=>y.value=j),class:"input",placeholder:"Category"},null,512),[[ye,y.value]]),e("button",{type:"button",class:"btn btn-primary btn-sm w-full",disabled:!F.value.length||!h.value.trim(),onClick:D}," Save "+C(F.value.length?`${F.value.length} item${F.value.length>1?"s":""}`:"selection")+" as block ",9,El)]),e("div",Pl,[(l(!0),i(K,null,ce(me.value,j=>(l(),i("div",{key:j.id,class:"block-card",draggable:"true",onDragstart:k=>U(k,j)},[e("div",{class:"block-thumb",style:pe({"--block-accent":j.accent||"#6c47ff"})},[e("div",Nl,[(l(!0),i(K,null,ce(j.elements,k=>(l(),i("div",{key:`${j.id}-${k.type}-${k.x}-${k.y}`,class:"block-thumb-frame",style:pe(L(j,k))},[["text","heading"].includes(k.type)?(l(),i("div",{key:0,class:Q(["thumb-text",k.type==="heading"&&"thumb-text-heading"])},[(l(!0),i(K,null,ce(k.type==="heading"?2:3,E=>(l(),i("span",{key:`${j.id}-${k.type}-${k.x}-${k.y}-${E}`,class:"thumb-text-line",style:pe($(k,E-1))},null,4))),128))],2)):(l(),i("div",{key:1,class:"thumb-element",style:pe(a(k))},null,4))],4))),128))])],4),e("div",zl,[e("div",Bl,[e("div",null,[e("div",Ll,C(j.name),1),e("div",_l,[Z(C(j.category),1),j.scope==="custom"?(l(),i("span",jl," · Custom")):G("",!0)])]),j.scope==="custom"?(l(),i("button",{key:0,type:"button",class:"block-delete-btn",onClick:k=>p(j.id),"aria-label":"Delete custom block",title:"Delete custom block"},[...W[5]||(W[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])],8,Dl)):G("",!0)]),e("p",ql,C(j.description||"Reusable layout block"),1),e("div",Rl,[(l(!0),i(K,null,ce(j.tags||[],k=>(l(),i("span",{key:`${j.id}-${k}`,class:"block-tag"},"#"+C(k),1))),128))]),e("button",{type:"button",class:"btn btn-secondary btn-sm w-full",onClick:k=>M(j)}," Insert Block ",8,Fl)])],40,Tl))),128))])])]))}},Ul=He(Ol,[["__scopeId","data-v-f08ebff0"]]),Vl={class:"layer-panel"},Wl={class:"layer-header panel-section"},Gl={class:"panel-title",style:{"margin-bottom":"0"}},Hl={class:"layer-count"},Yl={key:0,class:"layers-empty"},Ql={key:1,class:"layers-list"},Xl=["onClick"],Jl={class:"layer-type-icon"},Kl={class:"layer-name"},Zl={class:"layer-actions"},ei=["onClick","data-tooltip"],ti={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},oi={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ni=["onClick","data-tooltip"],li={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ii={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ai=["onClick"],si=["onClick"],ri=["onClick"],ui={__name:"LayerPanel",setup(S){const s=nt(),r=lt(),c=N(()=>r.getProject(s.projectId)),v=N(()=>{var L,a;return(a=(L=c.value)==null?void 0:L.slides)==null?void 0:a.find($=>$.id===s.currentSlideId)}),h=N(()=>{var L;return[...((L=v.value)==null?void 0:L.elements)||[]].sort((a,$)=>($.zIndex||0)-(a.zIndex||0))});function y(L){s.selectElement(L)}function b(L){r.updateElement(s.projectId,s.currentSlideId,L.id,{visible:!L.visible})}function O(L){r.updateElement(s.projectId,s.currentSlideId,L.id,{locked:!L.locked})}function be(L){r.reorderElement(s.projectId,s.currentSlideId,L,"up")}function re(L){r.reorderElement(s.projectId,s.currentSlideId,L,"down")}function F(L){r.deleteElement(s.projectId,s.currentSlideId,L),s.selectedElementId===L&&s.clearSelection()}function me(L){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[L]||"◆"}function H(L){var a,$,M;return(a=L.content)!=null&&a.text?L.content.text.slice(0,24):($=L.content)!=null&&$.label?L.content.label:(M=L.content)!=null&&M.question?L.content.question.slice(0,24):L.type.charAt(0).toUpperCase()+L.type.slice(1)}return(L,a)=>(l(),i("div",Vl,[e("div",Wl,[e("div",Gl,[a[0]||(a[0]=Z(" Layers ",-1)),e("span",Hl,C(h.value.length),1)])]),h.value.length===0?(l(),i("div",Yl,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",Ql,[(l(!0),i(K,null,ce(h.value,$=>(l(),i("div",{key:$.id,class:Q(["layer-item",A(s).selectedElementIds.includes($.id)&&"selected",$.locked&&"locked",!$.visible&&"hidden"]),onClick:M=>y($.id)},[e("span",Jl,C(me($.type)),1),e("span",Kl,C(H($)),1),e("div",Zl,[e("button",{class:Q(["layer-action-btn",{active:$.visible}]),onClick:je(M=>b($),["stop"]),"data-tooltip":$.visible?"Hide":"Show"},[$.visible?(l(),i("svg",ti,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",oi,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,ei),e("button",{class:Q(["layer-action-btn",{active:$.locked}]),onClick:je(M=>O($),["stop"]),"data-tooltip":$.locked?"Unlock":"Lock"},[$.locked?(l(),i("svg",li,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",ii,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,ni),e("button",{class:"layer-action-btn",onClick:je(M=>be($.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,ai),e("button",{class:"layer-action-btn",onClick:je(M=>re($.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,si),e("button",{class:"layer-action-btn danger",onClick:je(M=>F($.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,ri)])],10,Xl))),128))]))]))}},di=He(ui,[["__scopeId","data-v-7407acd8"]]),ci={class:"panel-section"},pi={class:"preset-toolbar"},vi=["value"],fi=["value"],mi=["value"],gi={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},bi=["onClick"],hi={class:"preset-meta-chip muted"},yi={key:1,class:"import-review"},xi={class:"motion-scrubber-header"},wi={class:"preset-toolbar compact"},ki=["value"],Ci=["value"],$i={class:"import-list"},Si=["onUpdate:modelValue"],Ii={class:"import-item-title"},Ai={class:"preset-meta-chip"},Mi={key:0,class:"preset-meta-chip muted"},Ei={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(S,{emit:s}){const r=s;return(c,v)=>(l(),i("div",ci,[v[13]||(v[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",pi,[e("input",{value:S.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:v[0]||(v[0]=h=>r("update:searchQuery",h.target.value))},null,40,vi),e("select",{value:S.categoryFilter,class:"select",onChange:v[1]||(v[1]=h=>r("update:categoryFilter",h.target.value))},[v[8]||(v[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(K,null,ce(S.availableCategories,h=>(l(),i("option",{key:`library-${h}`,value:h},C(h),9,mi))),128))],40,fi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[2]||(v[2]=h=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[3]||(v[3]=h=>r("export-presets"))},"Export")]),S.recentPresets.length?(l(),i("div",gi,[v[9]||(v[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(K,null,ce(S.recentPresets,h=>(l(),i("div",{class:"preset-item",key:`recent-${h.id}`},[e("button",{type:"button",class:"preset-chip",onClick:y=>r("apply-preset",h)},C(h.name),9,bi),e("span",hi,"Used "+C(h.usageCount)+"x",1)]))),128))])):G("",!0),S.pendingImportedPresets.length?(l(),i("div",yi,[e("div",xi,[v[10]||(v[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[4]||(v[4]=h=>r("clear-imports"))},"Discard")]),e("div",wi,[e("select",{value:S.importScopeFilter,class:"select",onChange:v[5]||(v[5]=h=>r("update:importScopeFilter",h.target.value))},[...v[11]||(v[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,ki),e("select",{value:S.importConflictMode,class:"select",onChange:v[6]||(v[6]=h=>r("update:importConflictMode",h.target.value))},[...v[12]||(v[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Ci),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:v[7]||(v[7]=h=>r("apply-imports"))},"Merge Selected")]),e("div",$i,[(l(!0),i(K,null,ce(S.filteredPendingImports,h=>(l(),i("label",{key:`pending-${h.id}`,class:"import-item"},[de(e("input",{"onUpdate:modelValue":y=>h.selected=y,type:"checkbox"},null,8,Si),[[Et,h.selected]]),e("span",Ii,C(h.name),1),e("span",Ai,C(h.scope),1),h.category?(l(),i("span",Mi,C(h.category),1)):G("",!0)]))),128))])])):G("",!0)]))}},Pi=He(Ei,[["__scopeId","data-v-61f99273"]]),Ti={key:1,class:"panel-section"},Ni={class:"field-hint"},zi={class:"motion-scrubber-shell"},Bi={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},Li=["onClick"],_i={class:"motion-preview"},ji={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Di={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},qi={class:"motion-card-label"},Ri={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Fi={class:"form-group"},Oi={class:"form-group"},Ui={class:"form-group",style:{"margin-top":"var(--space-3)"}},Vi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Wi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Gi={key:0,class:"preset-list"},Hi=["onDragstart","onDragenter","onDrop"],Yi=["onClick"],Qi={key:0,class:"preset-meta-chip"},Xi=["onClick"],Ji=["onClick"],Ki=["onClick"],Zi={key:1,class:"preset-row preset-edit-row"},ea=["onClick"],ta={key:1,class:"field-hint"},oa={key:2,class:"panel-section"},na={class:"slide-settings-tabs"},la={key:0,class:"slide-settings-pane"},ia={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},aa={class:"form-group"},sa={class:"bg-type-tabs"},ra=["onClick"],ua={key:0,class:"color-row"},da=["value"],ca=["value"],pa={class:"slide-settings-subsection"},va={class:"canvas-size-grid"},fa=["onClick"],ma={class:"canvas-size-icon-shell"},ga={class:"canvas-size-name"},ba={class:"canvas-size-ratio"},ha={class:"canvas-custom-card"},ya={class:"canvas-custom-header"},xa={class:"field-hint"},wa={class:"canvas-custom-inputs"},ka={class:"form-group"},Ca={class:"canvas-size-input-wrap"},$a=["value"],Sa={class:"form-group"},Ia={class:"canvas-size-input-wrap"},Aa=["value"],Ma={class:"check-row canvas-size-lock"},Ea={class:"slide-settings-subsection"},Pa={key:1,class:"slide-settings-pane"},Ta=["value"],Na={class:"form-group",style:{"margin-top":"var(--space-3)"}},za=["value"],Ba={class:"check-row"},La=["checked"],_a={key:2,class:"slide-settings-pane"},ja={class:"check-row"},Da=["checked"],qa={class:"check-row"},Ra=["checked"],Fa={class:"check-row"},Oa=["checked"],Ua={class:"check-row"},Va=["checked"],Wa={class:"check-row"},Ga=["checked"],Ha={class:"panel-title"},Ya={class:"element-type-badge"},Qa={class:"geo-grid"},Xa={class:"form-group"},Ja=["value"],Ka={class:"form-group"},Za=["value"],es={class:"form-group"},ts=["value"],os={class:"form-group"},ns=["value"],ls={class:"form-group"},is=["value"],as={class:"form-group"},ss=["value"],rs={class:"motion-scrubber-shell"},us={class:"motion-card-grid"},ds=["onClick"],cs={class:"motion-preview"},ps={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},vs={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},fs={class:"motion-card-label"},ms={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},gs={class:"form-group"},bs=["value"],hs={class:"form-group"},ys=["value"],xs={class:"preset-row",style:{"margin-top":"var(--space-3)"}},ws={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},ks={key:0,class:"preset-list"},Cs=["onDragstart","onDragenter","onDrop"],$s=["onClick"],Ss={key:0,class:"preset-meta-chip"},Is=["onClick"],As=["onClick"],Ms=["onClick"],Es={key:1,class:"preset-row preset-edit-row"},Ps=["onClick"],Ts={key:1,class:"field-hint"},Ns={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zs=["value"],Bs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Ls={class:"form-group"},_s=["value"],js={class:"form-group"},Ds=["value"],qs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Rs=["value"],Fs=["value"],Os={class:"form-group",style:{"margin-top":"var(--space-3)"}},Us={class:"align-btns"},Vs=["onClick"],Ws={class:"form-group",style:{"margin-top":"var(--space-3)"}},Gs={class:"style-btns"},Hs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ys={class:"color-row"},Qs=["value"],Xs=["value"],Js={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ks=["value"],Zs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},er={class:"form-group"},tr=["value"],or={class:"form-group"},nr=["value"],lr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ir=["value"],ar={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},sr=["value"],rr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ur=["value"],dr={class:"form-group"},cr=["value"],pr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},vr={class:"form-group"},fr=["value"],mr={class:"form-group"},gr=["value"],br={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hr=["value"],yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xr={class:"color-row"},wr=["value"],kr=["value"],Cr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$r={class:"color-row"},Sr=["value"],Ir=["value"],Ar={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mr=["value"],Er={class:"form-group"},Pr=["value"],Tr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Nr=["value"],zr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Br=["value"],Lr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_r=["value"],jr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dr=["value"],qr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},Rr={class:"chart-data-actions"},Fr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Or=["value","placeholder"],Ur={class:"chart-palette-preview"},Vr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Wr={class:"form-group"},Gr=["value"],Hr={class:"form-group"},Yr=["value"],Qr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Xr={class:"form-group"},Jr=["value"],Kr={class:"form-group"},Zr=["value"],eu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},tu={class:"form-group"},ou=["value"],nu={key:0,class:"form-group"},lu=["value"],iu={key:1,class:"form-group"},au=["value"],su={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},ru={class:"form-group"},uu=["value"],du={class:"check-row",style:{"margin-top":"20px"}},cu=["checked"],pu={class:"check-row"},vu=["checked"],fu={key:1,class:"check-row"},mu=["checked"],gu={class:"check-row"},bu=["checked"],hu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},yu=["value"],xu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wu=["value"],ku={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cu=["value"],$u={key:0,class:"form-group"},Su=["value"],Iu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Au={class:"form-group"},Mu=["value"],Eu={class:"form-group"},Pu=["value"],Tu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Nu={class:"form-group"},zu=["value"],Bu={class:"form-group"},Lu=["value"],_u={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ju={class:"form-group"},Du=["value"],qu={class:"form-group"},Ru=["value"],Fu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ou={class:"form-group"},Uu=["value"],Vu=["value"],Wu={class:"form-group"},Gu=["value"],Hu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Yu=["value"],Qu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xu={class:"color-row"},Ju=["value"],Ku=["value"],Zu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},ed={class:"form-group"},td=["value"],od={class:"form-group"},nd=["value"],ld={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},id=["value"],ad={class:"form-group"},sd=["value"],rd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ud={class:"form-group"},dd=["value"],cd={class:"form-group"},pd=["value"],vd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fd=["value"],md={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gd=["value"],bd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hd=["value"],yd={class:"check-row"},xd=["checked"],wd={class:"check-row"},kd=["checked"],Cd={class:"check-row"},$d=["checked"],Sd={class:"check-row"},Id=["checked"],Ad={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Md=["value"],Ed={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pd=["value"],Td={class:"check-row"},Nd=["checked"],zd={class:"check-row"},Bd=["checked"],Ld={class:"check-row"},_d=["checked"],jd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Dd={class:"form-group"},qd=["value"],Rd={class:"form-group"},Fd=["value"],Od={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ud=["value"],Vd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wd=["value"],Gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hd=["value"],Yd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qd=["value"],Xd={class:"form-group"},Jd=["value"],Kd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Zd={class:"form-group"},ec=["value"],tc={class:"form-group"},oc=["value"],nc={class:"form-group",style:{"margin-top":"var(--space-3)"}},lc=["value"],ic={class:"panel-section"},ac={class:"actions-list"},sc={__name:"PropertiesPanel",setup(S){const s=nt(),r=lt(),c=N(()=>r.getProject(s.projectId)),v=N(()=>{var u,t;return(t=(u=c.value)==null?void 0:u.slides)==null?void 0:t.find(R=>R.id===s.currentSlideId)}),h=N(()=>{var u;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((u=c.value)==null?void 0:u.settings)||{}}}),y=N(()=>Pt(h.value)),b=N(()=>An(h.value)),O=N(()=>Mn(y.value.width,y.value.height)),be=_(!0),re=_("canvas"),F=N(()=>Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]),me=N(()=>F.value.filter(u=>u.scope!=="group")),H=N(()=>F.value.filter(u=>u.scope==="group")),L=N(()=>{var t;const u=new Set(s.selectedElementIds);return(((t=v.value)==null?void 0:t.elements)||[]).filter(R=>u.has(R.id))}),a=N(()=>{var u,t;return s.selectedElementId?(t=(u=v.value)==null?void 0:u.elements)==null?void 0:t.find(R=>R.id===s.selectedElementId):null}),$=N(()=>s.multiSelection||!!a.value),M=N(()=>s.multiSelection?"group":"single"),D=N(()=>{var t,R;const u=(R=(t=a.value)==null?void 0:t.animations)==null?void 0:R[0];return{type:(u==null?void 0:u.type)||"auto",delay:Number((u==null?void 0:u.delay)||0),duration:Number((u==null?void 0:u.duration)||.64)}}),p=N(()=>{var Te,Ve;const u=L.value.map(Re=>{var mt;return((mt=Re.animations)==null?void 0:mt[0])||null}),t=((Te=u[0])==null?void 0:Te.type)||"auto",R=Number(((Ve=u[0])==null?void 0:Ve.duration)||.64),ue=u.every(Re=>((Re==null?void 0:Re.type)||"auto")===t),Ae=u.every(Re=>Number((Re==null?void 0:Re.duration)||.64)===R);return{type:ue?t:"mixed",duration:Ae?R:.64}}),U=_(0),P=_(0),W=_(""),j=_(""),k=_(""),E=_(""),ae=_(""),X=_(""),ee=_(""),ve=_(""),fe=_(""),Ee=_(""),ze=_(""),Ce=_(""),Ie=_(""),Ge=_("all"),Ye=_(null),Fe=_(null),J=_([]),se=_("all"),oe=_("replace"),te=_(""),$e=_(null),ge=_("");let z=null;const I=_({});Je(a,u=>{u?I.value=JSON.parse(JSON.stringify(u)):I.value={},(u==null?void 0:u.type)==="chart"&&(te.value="")},{immediate:!0,deep:!0}),Je(()=>{var u;return[s.propertiesPanelSection,(u=a.value)==null?void 0:u.id,s.rightPanelTab]},async([u,t,R])=>{var Ae;if(!u||!t||R!=="properties")return;await In();const ue=(Ae=$e.value)==null?void 0:Ae.querySelector(`[data-props-anchor="${u}"]`);ue&&(ue.scrollIntoView({behavior:"smooth",block:"start"}),ge.value=u,z&&window.clearTimeout(z),z=window.setTimeout(()=>{ge.value===u&&(ge.value="")},1400))},{immediate:!0});function q(u){a.value&&r.updateElement(s.projectId,s.currentSlideId,a.value.id,u)}function x(u){if(!a.value)return;const t={...a.value.content,...u};q({content:t})}function he(u,t){const R=parseFloat(t);isNaN(R)||q({[u]:R})}const Se=_({});Je(v,u=>{u&&(Se.value={...u})},{immediate:!0});function Le(u){v.value&&r.updateSlide(s.projectId,v.value.id,u)}function Pe(u){if(!c.value)return;const t={...h.value,...u};r.updateProject(s.projectId,{settings:{...t,...Kn(t)}})}function Ue(u){Pe({slideWidth:u.width,slideHeight:u.height})}function dt(u,t){const R=Math.round(Number(t)||0);if(!R)return;const ue={[`slide${u==="width"?"Width":"Height"}`]:R};if(be.value){const Ae=y.value.width,Te=y.value.height;u==="width"?ue.slideHeight=Math.round(R*(Te/Ae)):ue.slideWidth=Math.round(R*(Ae/Te))}Pe(ue)}const Qe=N(()=>{var u;return En(((u=c.value)==null?void 0:u.theme)||{})}),at=N(()=>{var t,R;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const u=((R=a.value.content)==null?void 0:R.paletteText)||Qe.value.paletteText;return tl(u)});function st(u){const t=Zn(u,{fallbackToDefault:!1});return t.length?el(t):""}function it(u){var R;if(((R=a.value)==null?void 0:R.type)!=="chart")return;const t=st(u);t&&(x({dataText:t}),te.value="")}async function We(u){var ue;const t=u.target,R=(ue=t==null?void 0:t.files)==null?void 0:ue[0];if(R)try{const Ae=await R.text();it(Ae)}finally{t&&(t.value="")}}function yt(){var u;(u=Fe.value)==null||u.click()}function rt(){var t,R;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const u=st(((R=a.value.content)==null?void 0:R.dataText)||"");u&&x({dataText:u})}function xt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&x({...Qe.value})}function wt(){var u;((u=a.value)==null?void 0:u.type)==="chart"&&x({paletteText:Qe.value.paletteText})}function ut(u){return String(u||"").split(",").map(t=>t.trim()).filter(Boolean)}function kt(u){const t=(u==null?void 0:u.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((u==null?void 0:u.name)||"Imported Preset").trim()||"Imported Preset",category:String((u==null?void 0:u.category)||"").trim(),tags:Array.isArray(u==null?void 0:u.tags)?u.tags.map(R=>String(R).trim()).filter(Boolean):ut(u==null?void 0:u.tags),type:String((u==null?void 0:u.type)||"auto"),delay:Math.max(0,Number(u==null?void 0:u.delay)||0),duration:Math.max(.1,Number(u==null?void 0:u.duration)||.72),stepDelay:Math.max(0,Number(u==null?void 0:u.stepDelay)||0)}}const Ct=N(()=>[...new Set(F.value.map(t=>t.category).filter(Boolean))].sort((t,R)=>t.localeCompare(R))),$t=N(()=>[...F.value].filter(u=>Number(u.usageCount||0)>0).sort((u,t)=>{const R=Number(t.lastUsedAt||0)-Number(u.lastUsedAt||0);return R!==0?R:Number(t.usageCount||0)-Number(u.usageCount||0)}).slice(0,6)),St=N(()=>se.value==="all"?J.value:J.value.filter(u=>u.scope===se.value));function f(u){const t=Ie.value.trim().toLowerCase(),R=Ge.value;return R==="all"||(u.category||"")===R?t?[u.name,u.category,...u.tags||[]].filter(Boolean).some(Ae=>String(Ae).toLowerCase().includes(t)):!0:!1}const w=N(()=>me.value.filter(f)),Y=N(()=>H.value.filter(f)),V=N(()=>$t.value.filter(u=>M.value==="group"?u.scope==="group":u.scope!=="group"));function ke(u){const t=String(u.name||"").trim();if(!t)return;const R=F.value.findIndex(Te=>Te.scope===u.scope&&Te.name.toLowerCase()===t.toLowerCase()),ue={...u,id:R>=0?F.value[R].id:`motion-${Date.now()}`,name:t,category:String(u.category||"").trim(),tags:Array.isArray(u.tags)?u.tags:ut(u.tags)},Ae=[...F.value];R>=0?Ae.splice(R,1,ue):Ae.push(ue),Pe({motionPresets:Ae})}function Me(u,t){const R=F.value.map(ue=>ue.id===u?{...ue,...t}:ue);Pe({motionPresets:R})}function De(u){const t=F.value.find(R=>R.id===u);t&&Me(u,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function _e(u,t){const R=F.value.filter(Ve=>Ve.scope===u).map(Ve=>Ve.name.toLowerCase()),ue=String(t||"Preset").trim()||"Preset";if(!R.includes(ue.toLowerCase()))return ue;let Ae=2,Te=`${ue} Copy`;for(;R.includes(Te.toLowerCase());)Te=`${ue} Copy ${Ae}`,Ae+=1;return Te}function ie(u){Pe({motionPresets:F.value.filter(t=>t.id!==u)}),k.value===u&&(k.value="",E.value="")}function xe(u){ke({...u,id:void 0,name:_e(u.scope,u.name)})}function Ke(u){k.value=u.id,E.value=u.name,ae.value=u.category||"",X.value=Array.isArray(u.tags)?u.tags.join(", "):""}function qe(){k.value="",E.value="",ae.value="",X.value=""}function Ne(u){const t=String(E.value||"").trim();t&&(Me(u,{name:t,category:String(ae.value||"").trim(),tags:ut(X.value)}),qe())}function Be(u,t,R){if(!t||!R||t===R)return;const ue=F.value.filter(ot=>ot.scope===u),Ae=ue.findIndex(ot=>ot.id===t),Te=ue.findIndex(ot=>ot.id===R);if(Ae===-1||Te===-1)return;const Ve=[...ue],[Re]=Ve.splice(Ae,1);Ve.splice(Te,0,Re);const mt=F.value.filter(ot=>ot.scope!==u),ht=[];F.value.forEach(ot=>{if(ot.scope===u){Ve.length&&ht.push(Ve.shift());return}const It=mt.shift();It&&ht.push(It)}),Pe({motionPresets:ht})}function tt(u){ee.value=u.id,ve.value=u.id}function ct(u){ee.value&&(ve.value=u.id)}function vt(u){ee.value&&(Be(u.scope,ee.value,u.id),ee.value="",ve.value="")}function Tt(){ee.value="",ve.value=""}function Nt(){U.value+=1}function d(){P.value+=1}function o(u,t){Le({[u]:t})}function m(u){const t=Math.max(0,Number(u)||0);Le({duration:t})}function B(u){var ue;if(!a.value)return;const R={...((ue=a.value.animations)==null?void 0:ue[0])||{type:"auto",delay:0,duration:.64},...u};if(R.type==="auto"){q({animations:[]});return}q({animations:[{type:R.type||"none",delay:Math.max(0,Number(R.delay)||0),duration:Math.max(.1,Number(R.duration)||.64)}]})}const g=_("stagger-in"),ne=_(0),we=_(.12),Oe=_(.72);Je(L,u=>{u.length&&(g.value=p.value.type==="mixed"?"stagger-in":p.value.type,Oe.value=p.value.duration)},{immediate:!0,deep:!0});function T(){if(!L.value.length)return;[...L.value].sort((t,R)=>(t.y||0)!==(R.y||0)?(t.y||0)-(R.y||0):(t.x||0)-(R.x||0)).forEach((t,R)=>{if(g.value==="auto"){r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:g.value,delay:Math.max(0,Number(ne.value)||0)+R*Math.max(0,Number(we.value)||0),duration:Math.max(.1,Number(Oe.value)||.72)}]})})}function Ze(u){g.value=u.type||"stagger-in",ne.value=Number(u.delay||0),we.value=Number(u.stepDelay||0),Oe.value=Number(u.duration||.72),De(u.id),d()}function bt(){ke({scope:"group",name:j.value,category:ze.value,tags:ut(Ce.value),type:g.value,delay:Math.max(0,Number(ne.value)||0),stepDelay:Math.max(0,Number(we.value)||0),duration:Math.max(.1,Number(Oe.value)||.72)}),j.value="",ze.value="",Ce.value=""}function ft(u){B({type:u.type||"auto",delay:Number(u.delay||0),duration:Number(u.duration||.72)}),De(u.id),Nt()}function Tn(){ke({scope:"single",name:W.value,category:fe.value,tags:ut(Ee.value),type:D.value.type,delay:Math.max(0,Number(D.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(D.value.duration)||.72)}),W.value="",fe.value="",Ee.value=""}function Nn(){var u;(u=Ye.value)==null||u.click()}async function zn(u){var ue;const t=u.target,R=(ue=t==null?void 0:t.files)==null?void 0:ue[0];if(R)try{const Ae=await R.text(),Te=JSON.parse(Ae),Ve=Array.isArray(Te)?Te:Array.isArray(Te.motionPresets)?Te.motionPresets:[];if(!Ve.length)return;J.value=Ve.map(Re=>({...kt(Re),selected:!0,importName:String((Re==null?void 0:Re.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function _t(){J.value=[]}function Bn(){const u=J.value.filter(R=>R.selected);if(!u.length)return;const t=[...F.value];u.forEach(R=>{const ue=t.findIndex(Ae=>Ae.scope===R.scope&&Ae.name.toLowerCase()===R.name.toLowerCase());if(ue>=0){oe.value==="replace"?t.splice(ue,1,{...t[ue],...R,id:t[ue].id}):t.push({...R,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:_e(R.scope,R.name)});return}t.push(R)}),Pe({motionPresets:t}),_t()}function Ln(){var Te;if(!F.value.length)return;const u={version:1,exportedAt:new Date().toISOString(),motionPresets:F.value.map(({id:Ve,...Re})=>Re)},t=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),R=URL.createObjectURL(t),ue=document.createElement("a"),Ae=String(((Te=c.value)==null?void 0:Te.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";ue.href=R,ue.download=`${Ae}-motion-presets.json`,document.body.appendChild(ue),ue.click(),document.body.removeChild(ue),URL.revokeObjectURL(R)}const _n=N(()=>[{id:`single-${U.value}`,delay:Math.max(0,Number(D.value.delay)||0),duration:Math.max(.1,Number(D.value.duration)||.72),type:D.value.type}]),jn=N(()=>Array.from({length:Math.min(Math.max(L.value.length,3),5)},(u,t)=>({id:`group-${P.value}-${t}`,delay:Math.max(0,Number(ne.value)||0)+t*Math.max(0,Number(we.value)||0),duration:Math.max(.1,Number(Oe.value)||.72),type:g.value}))),jt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Dt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(u,t)=>{var R,ue,Ae,Te,Ve,Re,mt,ht,ot,It,qt,Rt,Ft,Ot,Ut,Vt,Wt,Gt,Ht,Yt,Qt,Xt,Jt,Kt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,ho,yo,xo,wo,ko,Co,$o,So,Io,Ao,Mo,Eo,Po,To,No,zo,Bo,Lo,_o,jo,Do,qo,Ro,Fo,Oo,Uo,Vo,Wo,Go,Ho,Yo,Qo,Xo,Jo,Ko,Zo,en,tn,on,nn,ln,an,sn,rn,un,dn,cn,pn,vn,fn,mn,gn,bn,hn,yn;return l(),i("div",{ref_key:"panelRootRef",ref:$e,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Ye,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:zn},null,544),e("input",{ref_key:"chartImportInput",ref:Fe,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:We},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),$.value?(l(),Xe(Pi,{key:0,"search-query":Ie.value,"category-filter":Ge.value,"available-categories":Ct.value,"recent-presets":V.value,"pending-imported-presets":J.value,"filtered-pending-imports":St.value,"import-scope-filter":se.value,"import-conflict-mode":oe.value,"onUpdate:searchQuery":t[0]||(t[0]=n=>Ie.value=n),"onUpdate:categoryFilter":t[1]||(t[1]=n=>Ge.value=n),onTriggerImport:Nn,onExportPresets:Ln,onApplyPreset:t[2]||(t[2]=n=>M.value==="group"?Ze(n):ft(n)),onClearImports:_t,"onUpdate:importScopeFilter":t[3]||(t[3]=n=>se.value=n),"onUpdate:importConflictMode":t[4]||(t[4]=n=>oe.value=n),onApplyImports:Bn},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):G("",!0),A(s).multiSelection?(l(),i("div",Ti,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",Ni,C(L.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",zi,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:d},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${P.value}`},[(l(!0),i(K,null,ce(jn.value,n=>(l(),i("span",{key:n.id,class:Q(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:pe({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",Bi,[(l(),i(K,null,ce(jt,n=>e("button",{key:`group-${n.value}`,type:"button",class:Q(["motion-card",g.value===n.value&&"active"]),onClick:le=>g.value=n.value},[e("span",_i,[e("span",{class:Q(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",ji)):G("",!0),n.value==="stagger-in"?(l(),i("span",Di)):G("",!0)]),e("span",qi,C(n.label),1)],10,Li)),64))]),e("div",Ri,[e("div",Fi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),de(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=n=>ne.value=n),class:"input"},null,512),[[ye,ne.value]])]),e("div",Oi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),de(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=n=>we.value=n),class:"input"},null,512),[[ye,we.value]])])]),e("div",Ui,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),de(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=n=>Oe.value=n),class:"input"},null,512),[[ye,Oe.value]])]),e("div",Vi,[de(e("input",{"onUpdate:modelValue":t[8]||(t[8]=n=>j.value=n),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[ye,j.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:bt},"Save")]),e("div",Wi,[de(e("input",{"onUpdate:modelValue":t[9]||(t[9]=n=>ze.value=n),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[ye,ze.value]]),de(e("input",{"onUpdate:modelValue":t[10]||(t[10]=n=>Ce.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[ye,Ce.value]])]),Y.value.length?(l(),i("div",Gi,[(l(!0),i(K,null,ce(Y.value,n=>(l(),i("div",{key:n.id,class:Q(["preset-item",ee.value===n.id&&"dragging",ve.value===n.id&&ee.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:le=>tt(n),onDragenter:je(le=>ct(n),["prevent"]),onDragover:t[14]||(t[14]=je(()=>{},["prevent"])),onDrop:je(le=>vt(n),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:le=>Ze(n)},C(n.name),9,Yi),n.category?(l(),i("span",Qi,C(n.category),1)):G("",!0),(l(!0),i(K,null,ce(n.tags||[],le=>(l(),i("span",{key:`${n.id}-${le}`,class:"preset-meta-chip muted"},"#"+C(le),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:le=>xe(n)},"Duplicate",8,Xi),e("button",{type:"button",class:"preset-mini-btn",onClick:le=>Ke(n)},"Rename",8,Ji),e("button",{type:"button",class:"preset-mini-btn danger",onClick:le=>ie(n.id)},"Delete",8,Ki),k.value===n.id?(l(),i("div",Zi,[de(e("input",{"onUpdate:modelValue":t[11]||(t[11]=le=>E.value=le),class:"input"},null,512),[[ye,E.value]]),de(e("input",{"onUpdate:modelValue":t[12]||(t[12]=le=>ae.value=le),class:"input",placeholder:"Category"},null,512),[[ye,ae.value]]),de(e("input",{"onUpdate:modelValue":t[13]||(t[13]=le=>X.value=le),class:"input",placeholder:"Tags, comma separated"},null,512),[[ye,X.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:le=>Ne(n.id)},"Save",8,ea),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:qe},"Cancel")])):G("",!0)],42,Hi))),128))])):H.value.length?(l(),i("div",ta,"No group presets match the current search.")):G("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:T}," Apply Sequence to Selection ")])):a.value?(l(),i(K,{key:3},[e("div",{class:Q(["panel-section",ge.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",Ha,[t[179]||(t[179]=Z(" Position & Size ",-1)),e("span",Ya,C(a.value.type),1)]),e("div",Qa,[e("div",Xa,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=n=>he("x",n.target.value))},null,40,Ja)]),e("div",Ka,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=n=>he("y",n.target.value))},null,40,Za)]),e("div",es,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=n=>he("width",n.target.value))},null,40,ts)]),e("div",os,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=n=>he("height",n.target.value))},null,40,ns)]),e("div",ls,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=n=>he("rotation",n.target.value))},null,40,is)]),e("div",as,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=n=>he("opacity",n.target.value))},null,40,ss)])])],2),e("div",{class:Q(["panel-section",ge.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",rs,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Nt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${U.value}`},[(l(!0),i(K,null,ce(_n.value,n=>(l(),i("span",{key:n.id,class:Q(["motion-scrubber-node",`motion-preview-live-${n.type==="auto"?"fade-up":n.type}`]),style:pe({"--preview-delay":`${n.delay}s`,"--preview-duration":`${n.duration}s`})},null,6))),128))]))]),e("div",us,[(l(),i(K,null,ce(jt,n=>e("button",{key:n.value,type:"button",class:Q(["motion-card",D.value.type===n.value&&"active"]),onClick:le=>B({type:n.value})},[e("span",cs,[e("span",{class:Q(["motion-preview-dot",n.sampleClass])},null,2),n.value==="stagger-in"?(l(),i("span",ps)):G("",!0),n.value==="stagger-in"?(l(),i("span",vs)):G("",!0)]),e("span",fs,C(n.label),1)],10,ds)),64))]),e("div",ms,[e("div",gs,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:D.value.delay,class:"input",onChange:t[45]||(t[45]=n=>B({delay:n.target.value}))},null,40,bs)]),e("div",hs,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:D.value.duration,class:"input",onChange:t[46]||(t[46]=n=>B({duration:n.target.value}))},null,40,ys)])]),e("div",xs,[de(e("input",{"onUpdate:modelValue":t[47]||(t[47]=n=>W.value=n),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[ye,W.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Tn},"Save")]),e("div",ws,[de(e("input",{"onUpdate:modelValue":t[48]||(t[48]=n=>fe.value=n),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[ye,fe.value]]),de(e("input",{"onUpdate:modelValue":t[49]||(t[49]=n=>Ee.value=n),class:"input",placeholder:"Tags, comma separated"},null,512),[[ye,Ee.value]])]),w.value.length?(l(),i("div",ks,[(l(!0),i(K,null,ce(w.value,n=>(l(),i("div",{key:n.id,class:Q(["preset-item",ee.value===n.id&&"dragging",ve.value===n.id&&ee.value!==n.id&&"drag-over"]),draggable:"true",onDragstart:le=>tt(n),onDragenter:je(le=>ct(n),["prevent"]),onDragover:t[53]||(t[53]=je(()=>{},["prevent"])),onDrop:je(le=>vt(n),["prevent"]),onDragend:Tt},[e("button",{type:"button",class:"preset-chip",onClick:le=>ft(n)},C(n.name),9,$s),n.category?(l(),i("span",Ss,C(n.category),1)):G("",!0),(l(!0),i(K,null,ce(n.tags||[],le=>(l(),i("span",{key:`${n.id}-${le}`,class:"preset-meta-chip muted"},"#"+C(le),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:le=>xe(n)},"Duplicate",8,Is),e("button",{type:"button",class:"preset-mini-btn",onClick:le=>Ke(n)},"Rename",8,As),e("button",{type:"button",class:"preset-mini-btn danger",onClick:le=>ie(n.id)},"Delete",8,Ms),k.value===n.id?(l(),i("div",Es,[de(e("input",{"onUpdate:modelValue":t[50]||(t[50]=le=>E.value=le),class:"input"},null,512),[[ye,E.value]]),de(e("input",{"onUpdate:modelValue":t[51]||(t[51]=le=>ae.value=le),class:"input",placeholder:"Category"},null,512),[[ye,ae.value]]),de(e("input",{"onUpdate:modelValue":t[52]||(t[52]=le=>X.value=le),class:"input",placeholder:"Tags, comma separated"},null,512),[[ye,X.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:le=>Ne(n.id)},"Save",8,Ps),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:qe},"Cancel")])):G("",!0)],42,Cs))),128))])):me.value.length?(l(),i("div",Ts,"No single-element presets match the current search.")):G("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(l(),i("div",{key:0,class:Q(["panel-section",ge.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",Ns,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(ht=a.value.content)==null?void 0:ht.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=n=>x({text:n.target.value}))},null,40,zs)]),e("div",Bs,[e("div",Ls,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(ot=a.value.content)==null?void 0:ot.fontSize,class:"input",onChange:t[55]||(t[55]=n=>x({fontSize:+n.target.value}))},null,40,_s)]),e("div",js,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(It=a.value.content)==null?void 0:It.fontWeight,class:"select",onChange:t[56]||(t[56]=n=>x({fontWeight:n.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Ds)])]),e("div",qs,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(qt=a.value.content)==null?void 0:qt.fontFamily,class:"select",onChange:t[57]||(t[57]=n=>x({fontFamily:n.target.value}))},[(l(),i(K,null,ce(Dt,n=>e("option",{key:n,value:n},C(n.split(",")[0]),9,Fs)),64))],40,Rs)]),e("div",Os,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",Us,[(l(),i(K,null,ce(["left","center","right","justify"],n=>{var le;return e("button",{key:n,class:Q(["align-btn",((le=a.value.content)==null?void 0:le.textAlign)===n&&"active"]),onClick:xn=>x({textAlign:n})},C(n[0].toUpperCase()),11,Vs)}),64))])]),e("div",Ws,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",Gs,[e("button",{class:Q(["style-btn",((Rt=a.value.content)==null?void 0:Rt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=n=>{var le;return x({fontStyle:((le=a.value.content)==null?void 0:le.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:Q(["style-btn",((Ft=a.value.content)==null?void 0:Ft.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=n=>{var le;return x({textDecoration:((le=a.value.content)==null?void 0:le.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:Q(["style-btn",((Ot=a.value.content)==null?void 0:Ot.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=n=>{var le;return x({textDecoration:((le=a.value.content)==null?void 0:le.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",Hs,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",Ys,[e("input",{type:"color",value:((Ut=a.value.content)==null?void 0:Ut.color)||"#000",onInput:t[61]||(t[61]=n=>x({color:n.target.value})),class:"color-input-native"},null,40,Qs),e("input",{value:((Vt=a.value.content)==null?void 0:Vt.color)||"#000",class:"input",onInput:t[62]||(t[62]=n=>x({color:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Xs)])]),e("div",Js,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Wt=a.value.content)==null?void 0:Wt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=n=>x({lineHeight:+n.target.value}))},null,40,Ks)]),e("div",Zs,[e("div",er,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Gt=a.value.content)==null?void 0:Gt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=n=>x({textTransform:n.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,tr)]),e("div",or,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Ht=a.value.content)==null?void 0:Ht.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=n=>x({letterSpacing:+n.target.value}))},null,40,nr)])])],2)):G("",!0),a.value.type==="image"?(l(),i("div",{key:1,class:Q(["panel-section",ge.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",lr,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Yt=a.value.content)==null?void 0:Yt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=n=>x({src:n.target.value}))},null,40,ir)]),e("div",ar,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Qt=a.value.content)==null?void 0:Qt.alt,class:"input",onInput:t[67]||(t[67]=n=>x({alt:n.target.value}))},null,40,sr)]),e("div",rr,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Xt=a.value.content)==null?void 0:Xt.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=n=>x({objectFit:n.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,ur)]),e("div",dr,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((Jt=a.value.content)==null?void 0:Jt.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=n=>x({borderRadius:+n.target.value}))},null,40,cr)]),e("div",pr,[e("div",vr,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Kt=a.value.content)==null?void 0:Kt.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=n=>x({borderWidth:+n.target.value}))},null,40,fr)]),e("div",mr,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Zt=a.value.content)==null?void 0:Zt.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=n=>x({borderColor:n.target.value}))},null,40,gr)])])],2)):G("",!0),a.value.type==="shape"?(l(),i("div",{key:2,class:Q(["panel-section",ge.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",br,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((eo=a.value.content)==null?void 0:eo.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=n=>x({shapeType:n.target.value}))},[...t[215]||(t[215]=[et('<option value="rectangle" data-v-1d3dcef4>Rectangle</option><option value="circle" data-v-1d3dcef4>Circle</option><option value="triangle" data-v-1d3dcef4>Triangle</option><option value="star" data-v-1d3dcef4>Star</option><option value="arrow" data-v-1d3dcef4>Arrow</option><option value="diamond" data-v-1d3dcef4>Diamond</option>',6)])],40,hr)]),e("div",yr,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",xr,[e("input",{type:"color",value:((to=a.value.content)==null?void 0:to.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=n=>x({fillColor:n.target.value})),class:"color-input-native"},null,40,wr),e("input",{value:((oo=a.value.content)==null?void 0:oo.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=n=>x({fillColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,kr)])]),e("div",Cr,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",$r,[e("input",{type:"color",value:((no=a.value.content)==null?void 0:no.borderColor)||"transparent",onInput:t[75]||(t[75]=n=>x({borderColor:n.target.value})),class:"color-input-native"},null,40,Sr),e("input",{value:((lo=a.value.content)==null?void 0:lo.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=n=>x({borderColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ir)])]),e("div",Ar,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((io=a.value.content)==null?void 0:io.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=n=>x({borderWidth:+n.target.value}))},null,40,Mr)]),e("div",Er,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((ao=a.value.content)==null?void 0:ao.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=n=>x({borderRadius:+n.target.value}))},null,40,Pr)]),e("div",Tr,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((so=a.value.content)==null?void 0:so.opacity)??1,class:"input",onChange:t[79]||(t[79]=n=>x({opacity:+n.target.value}))},null,40,Nr)])],2)):G("",!0),a.value.type==="chart"?(l(),i("div",{key:3,class:Q(["panel-section",ge.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",zr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((ro=a.value.content)==null?void 0:ro.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=n=>x({chartType:n.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,Br)]),e("div",Lr,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((uo=a.value.content)==null?void 0:uo.title)||"",class:"input",onInput:t[81]||(t[81]=n=>x({title:n.target.value}))},null,40,_r)]),e("div",jr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((co=a.value.content)==null?void 0:co.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=n=>x({dataText:n.target.value}))},null,40,Dr),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:rt},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:yt},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",qr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),de(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=n=>te.value=n),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[ye,te.value]]),e("div",Rr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=n=>it(te.value))},"Convert pasted data")])]),e("div",Fr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((po=a.value.content)==null?void 0:po.paletteText)||"",class:"input",placeholder:Qe.value.paletteText,onInput:t[85]||(t[85]=n=>x({paletteText:n.target.value}))},null,40,Or),e("div",Ur,[(l(!0),i(K,null,ce(at.value,(n,le)=>(l(),i("span",{key:`chart-palette-${le}`,class:"chart-palette-swatch",style:pe({background:n})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:wt},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:xt},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Vr,[e("div",Wr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((vo=a.value.content)==null?void 0:vo.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=n=>x({backgroundColor:n.target.value}))},null,40,Gr)]),e("div",Hr,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((fo=a.value.content)==null?void 0:fo.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=n=>x({textColor:n.target.value}))},null,40,Yr)])]),e("div",Qr,[e("div",Xr,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((mo=a.value.content)==null?void 0:mo.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=n=>x({gridColor:n.target.value}))},null,40,Jr)]),e("div",Kr,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((go=a.value.content)==null?void 0:go.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=n=>x({borderColor:n.target.value}))},null,40,Zr)])]),e("div",eu,[e("div",tu,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((bo=a.value.content)==null?void 0:bo.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=n=>x({borderWidth:+n.target.value}))},null,40,ou)]),((ho=a.value.content)==null?void 0:ho.chartType)!=="circle"?(l(),i("div",nu,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((yo=a.value.content)==null?void 0:yo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=n=>x({maxValue:n.target.value}))},null,40,lu)])):(l(),i("div",iu,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((xo=a.value.content)==null?void 0:xo.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=n=>x({innerRadius:+n.target.value}))},null,40,au)]))]),((wo=a.value.content)==null?void 0:wo.chartType)==="line"?(l(),i("div",su,[e("div",ru,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((ko=a.value.content)==null?void 0:ko.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=n=>x({strokeWidth:+n.target.value}))},null,40,uu)]),e("label",du,[e("input",{type:"checkbox",checked:!!((Co=a.value.content)!=null&&Co.showArea),onChange:t[94]||(t[94]=n=>x({showArea:n.target.checked}))},null,40,cu),t[239]||(t[239]=Z(" Show area fill ",-1))])])):G("",!0),e("label",pu,[e("input",{type:"checkbox",checked:(($o=a.value.content)==null?void 0:$o.showLegend)!==!1,onChange:t[95]||(t[95]=n=>x({showLegend:n.target.checked}))},null,40,vu),t[240]||(t[240]=Z(" Show legend ",-1))]),((So=a.value.content)==null?void 0:So.chartType)!=="circle"?(l(),i("label",fu,[e("input",{type:"checkbox",checked:((Io=a.value.content)==null?void 0:Io.showGrid)!==!1,onChange:t[96]||(t[96]=n=>x({showGrid:n.target.checked}))},null,40,mu),t[241]||(t[241]=Z(" Show grid lines ",-1))])):G("",!0),e("label",gu,[e("input",{type:"checkbox",checked:((Ao=a.value.content)==null?void 0:Ao.showValues)!==!1,onChange:t[97]||(t[97]=n=>x({showValues:n.target.checked}))},null,40,bu),t[242]||(t[242]=Z(" Show values ",-1))])],2)):G("",!0),a.value.type==="button"?(l(),i("div",{key:4,class:Q(["panel-section",ge.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",hu,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Mo=a.value.content)==null?void 0:Mo.label,class:"input",onInput:t[98]||(t[98]=n=>x({label:n.target.value}))},null,40,yu)]),e("div",xu,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Eo=a.value.content)==null?void 0:Eo.variant)||"primary",class:"select",onChange:t[99]||(t[99]=n=>x({variant:n.target.value}))},[...t[245]||(t[245]=[et('<option value="primary" data-v-1d3dcef4>Primary</option><option value="secondary" data-v-1d3dcef4>Secondary</option><option value="outline" data-v-1d3dcef4>Outline</option><option value="ghost" data-v-1d3dcef4>Ghost</option><option value="danger" data-v-1d3dcef4>Danger</option>',5)])],40,wu)]),e("div",ku,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Po=a.value.content)==null?void 0:Po.action)||"none",class:"select",onChange:t[100]||(t[100]=n=>x({action:n.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Cu)]),(To=a.value.content)!=null&&To.action&&a.value.content.action!=="none"?(l(),i("div",$u,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(No=a.value.content)==null?void 0:No.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=n=>x({target:n.target.value}))},null,40,Su)])):G("",!0),e("div",Iu,[e("div",Au,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((zo=a.value.content)==null?void 0:zo.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=n=>x({bgColor:n.target.value}))},null,40,Mu)]),e("div",Eu,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Bo=a.value.content)==null?void 0:Bo.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=n=>x({textColor:n.target.value}))},null,40,Pu)])]),e("div",Tu,[e("div",Nu,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Lo=a.value.content)==null?void 0:Lo.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=n=>x({borderColor:n.target.value}))},null,40,zu)]),e("div",Bu,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((_o=a.value.content)==null?void 0:_o.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=n=>x({borderRadius:+n.target.value}))},null,40,Lu)])]),e("div",_u,[e("div",ju,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((jo=a.value.content)==null?void 0:jo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=n=>x({fontSize:+n.target.value}))},null,40,Du)]),e("div",qu,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Do=a.value.content)==null?void 0:Do.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=n=>x({fontWeight:+n.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Ru)])]),e("div",Fu,[e("div",Ou,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((qo=a.value.content)==null?void 0:qo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=n=>x({fontFamily:n.target.value}))},[(l(),i(K,null,ce(Dt,n=>e("option",{key:`btn-${n}`,value:n},C(n.split(",")[0]),9,Vu)),64))],40,Uu)]),e("div",Wu,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Ro=a.value.content)==null?void 0:Ro.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=n=>x({letterSpacing:+n.target.value}))},null,40,Gu)])])],2)):G("",!0),a.value.type==="hotspot"?(l(),i("div",{key:5,class:Q(["panel-section",ge.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Hu,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Fo=a.value.content)==null?void 0:Fo.icon)||"?",class:"select",onChange:t[110]||(t[110]=n=>x({icon:n.target.value}))},[...t[260]||(t[260]=[et('<option value="?" data-v-1d3dcef4>? (Info)</option><option value="!" data-v-1d3dcef4>! (Alert)</option><option value="+" data-v-1d3dcef4>+ (Plus)</option><option value="i" data-v-1d3dcef4>i (Info)</option><option value="✦" data-v-1d3dcef4>✦ (Star)</option>',5)])],40,Yu)]),e("div",Qu,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",Xu,[e("input",{type:"color",value:((Oo=a.value.content)==null?void 0:Oo.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=n=>x({bgColor:n.target.value})),class:"color-input-native"},null,40,Ju),e("input",{value:((Uo=a.value.content)==null?void 0:Uo.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=n=>x({bgColor:n.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ku)])]),e("div",Zu,[e("div",ed,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Vo=a.value.content)==null?void 0:Vo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=n=>x({iconColor:n.target.value}))},null,40,td)]),e("div",od,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Wo=a.value.content)==null?void 0:Wo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=n=>x({borderRadius:+n.target.value}))},null,40,nd)])]),e("div",ld,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Go=a.value.content)==null?void 0:Go.popupTitle,class:"input",onInput:t[115]||(t[115]=n=>x({popupTitle:n.target.value}))},null,40,id)]),e("div",ad,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Ho=a.value.content)==null?void 0:Ho.popupContent,class:"textarea",onInput:t[116]||(t[116]=n=>x({popupContent:n.target.value}))},null,40,sd)]),e("div",rd,[e("div",ud,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Yo=a.value.content)==null?void 0:Yo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=n=>x({popupBgColor:n.target.value}))},null,40,dd)]),e("div",cd,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Qo=a.value.content)==null?void 0:Qo.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=n=>x({popupTextColor:n.target.value}))},null,40,pd)])])],2)):G("",!0),a.value.type==="video"?(l(),i("div",{key:6,class:Q(["panel-section",ge.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",vd,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Xo=a.value.content)==null?void 0:Xo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=n=>x({src:n.target.value}))},null,40,fd)]),e("div",md,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(Jo=a.value.content)==null?void 0:Jo.poster,class:"input",onInput:t[120]||(t[120]=n=>x({poster:n.target.value}))},null,40,gd)]),e("div",bd,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Ko=a.value.content)==null?void 0:Ko.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=n=>x({objectFit:n.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,hd)]),e("label",yd,[e("input",{type:"checkbox",checked:(Zo=a.value.content)==null?void 0:Zo.autoplay,onChange:t[122]||(t[122]=n=>x({autoplay:n.target.checked}))},null,40,xd),t[274]||(t[274]=Z(" Autoplay ",-1))]),e("label",wd,[e("input",{type:"checkbox",checked:((en=a.value.content)==null?void 0:en.controls)??!0,onChange:t[123]||(t[123]=n=>x({controls:n.target.checked}))},null,40,kd),t[275]||(t[275]=Z(" Show Controls ",-1))]),e("label",Cd,[e("input",{type:"checkbox",checked:(tn=a.value.content)==null?void 0:tn.loop,onChange:t[124]||(t[124]=n=>x({loop:n.target.checked}))},null,40,$d),t[276]||(t[276]=Z(" Loop ",-1))]),e("label",Sd,[e("input",{type:"checkbox",checked:(on=a.value.content)==null?void 0:on.muted,onChange:t[125]||(t[125]=n=>x({muted:n.target.checked}))},null,40,Id),t[277]||(t[277]=Z(" Muted ",-1))])],2)):G("",!0),a.value.type==="audio"?(l(),i("div",{key:7,class:Q(["panel-section",ge.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",Ad,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(nn=a.value.content)==null?void 0:nn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=n=>x({src:n.target.value}))},null,40,Md)]),e("div",Ed,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(ln=a.value.content)==null?void 0:ln.label,class:"input",onInput:t[127]||(t[127]=n=>x({label:n.target.value}))},null,40,Pd)]),e("label",Td,[e("input",{type:"checkbox",checked:(an=a.value.content)==null?void 0:an.autoplay,onChange:t[128]||(t[128]=n=>x({autoplay:n.target.checked}))},null,40,Nd),t[281]||(t[281]=Z(" Autoplay ",-1))]),e("label",zd,[e("input",{type:"checkbox",checked:((sn=a.value.content)==null?void 0:sn.controls)!==!1,onChange:t[129]||(t[129]=n=>x({controls:n.target.checked}))},null,40,Bd),t[282]||(t[282]=Z(" Show Controls ",-1))]),e("label",Ld,[e("input",{type:"checkbox",checked:(rn=a.value.content)==null?void 0:rn.loop,onChange:t[130]||(t[130]=n=>x({loop:n.target.checked}))},null,40,_d),t[283]||(t[283]=Z(" Loop ",-1))]),e("div",jd,[e("div",Dd,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((un=a.value.content)==null?void 0:un.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=n=>x({accentColor:n.target.value}))},null,40,qd)]),e("div",Rd,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((dn=a.value.content)==null?void 0:dn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=n=>x({textColor:n.target.value}))},null,40,Fd)])]),e("div",Od,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((cn=a.value.content)==null?void 0:cn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=n=>x({bgColor:n.target.value}))},null,40,Ud)])],2)):G("",!0),a.value.type==="quiz"?(l(),i("div",{key:8,class:Q(["panel-section",ge.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Vd,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(pn=a.value.content)==null?void 0:pn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=n=>x({question:n.target.value}))},null,40,Wd)]),e("div",Gd,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(fn=(vn=a.value.content)==null?void 0:vn.options)==null?void 0:fn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=n=>x({options:n.target.value.split(`
`).filter(Boolean)}))},null,40,Hd)]),e("div",Yd,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((mn=a.value.content)==null?void 0:mn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=n=>x({correctIndex:+n.target.value}))},null,40,Qd)]),e("div",Xd,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(gn=a.value.content)==null?void 0:gn.explanation,class:"textarea",onInput:t[137]||(t[137]=n=>x({explanation:n.target.value}))},null,40,Jd)]),e("div",Kd,[e("div",Zd,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((bn=a.value.content)==null?void 0:bn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=n=>x({cardBgColor:n.target.value}))},null,40,ec)]),e("div",tc,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((hn=a.value.content)==null?void 0:hn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=n=>x({questionColor:n.target.value}))},null,40,oc)])]),e("div",nc,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((yn=a.value.content)==null?void 0:yn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=n=>x({accentColor:n.target.value}))},null,40,lc)])],2)):G("",!0),e("div",ic,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",ac,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=n=>A(r).duplicateElement(A(s).projectId,A(s).currentSlideId,a.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),Z(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=n=>{A(s).showInteractionEditor=!0,A(s).interactionElementId=a.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Z(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=n=>{A(r).deleteElement(A(s).projectId,A(s).currentSlideId,a.value.id),A(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),Z(" Delete Element ",-1)])])])])],64)):(l(),i("div",oa,[e("div",na,[e("button",{type:"button",class:Q(["slide-settings-tab",re.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=n=>re.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:Q(["slide-settings-tab",re.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=n=>re.value="transitions")},[...t[150]||(t[150]=[et('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-1d3dcef4><path d="M5 7h5" data-v-1d3dcef4></path><path d="M5 12h10" data-v-1d3dcef4></path><path d="M5 17h14" data-v-1d3dcef4></path><path d="M14 7l5 5-5 5" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Transitions</span>',2)])],2),e("button",{type:"button",class:Q(["slide-settings-tab",re.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=n=>re.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),re.value==="canvas"?(l(),i("div",la,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",ia,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),de(e("input",{"onUpdate:modelValue":t[18]||(t[18]=n=>Se.value.title=n),class:"input",onInput:t[19]||(t[19]=n=>o("title",Se.value.title))},null,544),[[ye,Se.value.title]])]),e("div",aa,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",sa,[(l(),i(K,null,ce(["color","gradient","image"],n=>{var le;return e("button",{key:n,class:Q(["bg-type-btn",(((le=v.value)==null?void 0:le.backgroundType)||"color")===n&&"active"]),onClick:xn=>Le({backgroundType:n})},C(n),11,ra)}),64))]),(((R=v.value)==null?void 0:R.backgroundType)||"color")==="color"?(l(),i("div",ua,[e("input",{type:"color",value:((ue=v.value)==null?void 0:ue.background)||"#ffffff",onInput:t[20]||(t[20]=n=>Le({background:n.target.value})),class:"color-input-native"},null,40,da),e("input",{value:((Ae=v.value)==null?void 0:Ae.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=n=>Le({background:n.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,ca)])):((Te=v.value)==null?void 0:Te.backgroundType)==="gradient"?de((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=n=>Se.value.backgroundGradient=n),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=n=>Le({backgroundGradient:Se.value.backgroundGradient}))},null,544)),[[ye,Se.value.backgroundGradient]]):de((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=n=>Se.value.backgroundImage=n),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=n=>Le({backgroundImage:Se.value.backgroundImage}))},null,544)),[[ye,Se.value.backgroundImage]])]),e("div",pa,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",va,[(l(!0),i(K,null,ce(A(Jn),n=>{var le;return l(),i("button",{key:n.id,type:"button",class:Q(["canvas-size-card",((le=b.value)==null?void 0:le.id)===n.id&&"active"]),onClick:xn=>Ue(n)},[e("span",ma,[e("span",{class:Q(["canvas-size-thumb",`canvas-size-thumb-${n.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",ga,C(n.label),1),e("span",ba,C(n.ratioLabel),1)],10,fa)}),128))]),e("div",ha,[e("div",ya,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",xa,"Current ratio "+C(O.value),1)]),e("div",wa,[e("div",ka,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Ca,[e("input",{type:"number",min:"320",max:"4096",value:y.value.width,class:"input",onChange:t[26]||(t[26]=n=>dt("width",n.target.value))},null,40,$a),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Sa,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",Ia,[e("input",{type:"number",min:"320",max:"4096",value:y.value.height,class:"input",onChange:t[27]||(t[27]=n=>dt("height",n.target.value))},null,40,Aa),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",Ma,[de(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=n=>be.value=n)},null,512),[[Et,be.value]]),t[161]||(t[161]=Z(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=et('<div class="canvas-size-callout" data-v-1d3dcef4><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1d3dcef4><circle cx="12" cy="12" r="9" data-v-1d3dcef4></circle><path d="M12 10v6" data-v-1d3dcef4></path><path d="M12 7h.01" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",Ea,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),de(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=n=>Se.value.notes=n),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=n=>o("notes",Se.value.notes))},null,544),[[ye,Se.value.notes]])])])):re.value==="transitions"?(l(),i("div",Pa,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((Ve=v.value)==null?void 0:Ve.transition)||"none",class:"select",onChange:t[31]||(t[31]=n=>Le({transition:n.target.value}))},[...t[167]||(t[167]=[et('<option value="none" data-v-1d3dcef4>None</option><option value="fade" data-v-1d3dcef4>Fade</option><option value="slide" data-v-1d3dcef4>Slide</option><option value="zoom" data-v-1d3dcef4>Zoom</option><option value="flip" data-v-1d3dcef4>Flip</option>',5)])],40,Ta),e("div",Na,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Re=v.value)==null?void 0:Re.duration)??0,class:"input",onChange:t[32]||(t[32]=n=>m(n.target.value))},null,40,za),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Ba,[e("input",{type:"checkbox",checked:!!((mt=v.value)!=null&&mt.advanceOnMediaEnd),onChange:t[33]||(t[33]=n=>Le({advanceOnMediaEnd:n.target.checked}))},null,40,La),t[170]||(t[170]=Z(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",_a,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",ja,[e("input",{type:"checkbox",checked:h.value.autoPlay,onChange:t[34]||(t[34]=n=>Pe({autoPlay:n.target.checked}))},null,40,Da),t[173]||(t[173]=Z(" Autoplay preview and exported presentation ",-1))]),e("label",qa,[e("input",{type:"checkbox",checked:h.value.loop,onChange:t[35]||(t[35]=n=>Pe({loop:n.target.checked}))},null,40,Ra),t[174]||(t[174]=Z(" Loop back to the first slide at the end ",-1))]),e("label",Fa,[e("input",{type:"checkbox",checked:h.value.showProgress,onChange:t[36]||(t[36]=n=>Pe({showProgress:n.target.checked}))},null,40,Oa),t[175]||(t[175]=Z(" Show progress bar in preview ",-1))]),e("label",Ua,[e("input",{type:"checkbox",checked:h.value.showNavControls,onChange:t[37]||(t[37]=n=>Pe({showNavControls:n.target.checked}))},null,40,Va),t[176]||(t[176]=Z(" Show previous/next and dot navigation ",-1))]),e("label",Wa,[e("input",{type:"checkbox",checked:h.value.allowKeyboardNav,onChange:t[38]||(t[38]=n=>Pe({allowKeyboardNav:n.target.checked}))},null,40,Ga),t[177]||(t[177]=Z(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},rc=He(sc,[["__scopeId","data-v-1d3dcef4"]]),uc={class:"editor-toolbar"},dc={class:"toolbar-group"},cc={class:"toolbar-group"},pc=["data-tooltip","onClick"],vc={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},fc={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},mc={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},gc={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},bc={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},hc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},yc={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},xc={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wc={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kc={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Cc={class:"tool-label"},$c={class:"toolbar-group"},Sc={class:"toolbar-group"},Ic={class:"toolbar-group"},Ac={__name:"EditorToolbar",emits:["open-ai-project"],setup(S,{emit:s}){const r=s,c=nt();lt();const v=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function h(y){c.setActiveTool(y)}return(y,b)=>(l(),i("div",uc,[e("div",dc,[e("button",{class:Q(["tool-btn",A(c).activeTool==="select"&&"active"]),onClick:b[0]||(b[0]=O=>h("select")),"data-tooltip":"Select (V)"},[...b[7]||(b[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),b[23]||(b[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",cc,[(l(),i(K,null,ce(v,O=>e("button",{key:O.id,class:Q(["tool-btn",A(c).activeTool===O.id&&"active"]),"data-tooltip":O.tooltip,onClick:be=>h(O.id)},[O.icon==="text"?(l(),i("svg",vc,[...b[8]||(b[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):O.icon==="heading"?(l(),i("svg",fc,[...b[9]||(b[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):O.icon==="image"?(l(),i("svg",mc,[...b[10]||(b[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):O.icon==="shape"?(l(),i("svg",gc,[...b[11]||(b[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):O.icon==="button"?(l(),i("svg",bc,[...b[12]||(b[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):O.icon==="hotspot"?(l(),i("svg",hc,[...b[13]||(b[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):O.icon==="video"?(l(),i("svg",yc,[...b[14]||(b[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):O.icon==="audio"?(l(),i("svg",xc,[...b[15]||(b[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):O.icon==="quiz"?(l(),i("svg",wc,[...b[16]||(b[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):O.icon==="chart"?(l(),i("svg",kc,[...b[17]||(b[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):G("",!0),e("span",Cc,C(O.label),1)],10,pc)),64))]),b[24]||(b[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",$c,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:b[1]||(b[1]=O=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...b[18]||(b[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),b[25]||(b[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Sc,[e("button",{class:"tool-btn",onClick:b[2]||(b[2]=O=>A(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...b[19]||(b[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:b[3]||(b[3]=O=>A(c).zoomReset())},C(Math.round(A(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:b[4]||(b[4]=O=>A(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...b[20]||(b[20]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),b[26]||(b[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Ic,[e("button",{class:Q(["tool-btn",A(c).showGrid&&"active"]),onClick:b[5]||(b[5]=O=>A(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...b[21]||(b[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:Q(["tool-btn",A(c).snapToGrid&&"active"]),onClick:b[6]||(b[6]=O=>A(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...b[22]||(b[22]=[et('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},Mc=He(Ac,[["__scopeId","data-v-d964cc0f"]]),Ec=["onMousedown"],Pc={key:1,class:"selection-border locked-border"},Tc={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=nt(),c=lt(),v=Dn("canvasScale",_(1)),h=N(()=>r.projectId),y=N(()=>r.currentSlideId),b=N(()=>r.selectedElementIds.includes(s.element.id)),O=N(()=>s.element.locked),be=N(()=>s.element.visible!==!1),re=N(()=>{const J=s.element.content||{};return!!(J.text||J.label||J.question||J.popupTitle||J.popupContent)});let F=!1,me=0,H=0,L=new Map;function a(J){if(!r.snapToGrid||!r.gridSize)return J;const se=r.gridSize;return Math.round(J/se)*se}function $(J){var te;if(O.value||J.target.classList.contains("resize-handle"))return;const se=J.ctrlKey||J.metaKey||J.shiftKey;b.value?se&&r.selectElement(s.element.id,!0):r.selectElement(s.element.id,se),r.setActiveTool("select"),F=!1,me=J.clientX,H=J.clientY,L.clear();const oe=(te=c.getProject(h.value))==null?void 0:te.slides.find($e=>$e.id===y.value);oe&&r.selectedElementIds.forEach($e=>{const ge=oe.elements.find(z=>z.id===$e);ge&&!ge.locked&&L.set($e,{x:ge.x,y:ge.y})}),window.addEventListener("mousemove",M),window.addEventListener("mouseup",D),J.stopPropagation()}function M(J){const se=(J.clientX-me)/v.value,oe=(J.clientY-H)/v.value;!F&&(Math.abs(se)>3||Math.abs(oe)>3)&&(F=!0),F&&L.forEach((te,$e)=>{const ge=te.x+se,z=te.y+oe;c.updateElement(h.value,y.value,$e,{x:ge,y:z},{persist:!1})})}function D(J){if(F){const se=(J.clientX-me)/v.value,oe=(J.clientY-H)/v.value;L.forEach((te,$e)=>{c.updateElement(h.value,y.value,$e,{x:a(te.x+se),y:a(te.y+oe)},{persist:!1})}),c.commitProject(h.value)}F||!(J.ctrlKey||J.metaKey||J.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(s.element.id,!1),F=!1,window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",D)}const p=["n","ne","e","se","s","sw","w","nw"];let U=!1,P="",W=0,j=0,k=0,E=0,ae=0,X=0;function ee(J,se){O.value||(J.stopPropagation(),J.preventDefault(),U=!0,P=se,W=J.clientX,j=J.clientY,k=s.element.width,E=s.element.height,ae=s.element.x,X=s.element.y,window.addEventListener("mousemove",ve),window.addEventListener("mouseup",fe))}function ve(J){if(!U)return;const se=v.value,oe=(J.clientX-W)/se,te=(J.clientY-j)/se,$e=20;let ge=ae,z=X,I=k,q=E;if(P.includes("e")&&(I=Math.max($e,k+oe)),P.includes("s")&&(q=Math.max($e,E+te)),P.includes("w")){const x=Math.max($e,k-oe);ge=ae+(k-x),I=x}if(P.includes("n")){const x=Math.max($e,E-te);z=X+(E-x),q=x}if(r.snapToGrid&&r.gridSize){const x=r.gridSize;I=Math.round(I/x)*x,q=Math.round(q/x)*x,ge=Math.round(ge/x)*x,z=Math.round(z/x)*x}c.updateElement(h.value,y.value,s.element.id,{x:ge,y:z,width:I,height:q})}function fe(){U=!1,window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",fe)}function Ee(){["text","heading"].includes(s.element.type)&&r.focusPropertiesSection("content")}const ze=N(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:O.value?"not-allowed":"move",visibility:be.value?"visible":"hidden",userSelect:"none"}));function Ce(J){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[J]||"auto"}function Ie(J="content"){r.focusPropertiesSection(J)}function Ge(){const J=re.value?"improve":s.element.type==="image"?"image":"generate";r.openAIPanel(J)}function Ye(){const J=c.duplicateElement(h.value,y.value,s.element.id);J&&(r.selectElement(J.id),r.focusPropertiesSection("geometry"))}function Fe(){c.deleteElement(h.value,y.value,s.element.id),r.clearSelection()}return(J,se)=>(l(),i("div",{class:Q(["element-wrapper",b.value&&"selected",O.value&&"locked"]),style:pe(ze.value),onMousedown:$,onDblclick:Ee},[qn(J.$slots,"default",{},void 0),b.value&&!O.value?(l(),i(K,{key:0},[se[6]||(se[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:se[3]||(se[3]=je(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:se[0]||(se[0]=oe=>Ie("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:se[1]||(se[1]=oe=>Ie("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:se[2]||(se[2]=oe=>Ie("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Ge},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Ye,title:"Duplicate element","aria-label":"Duplicate element"},[...se[4]||(se[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Fe,title:"Delete element","aria-label":"Delete element"},[...se[5]||(se[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(l(),i(K,null,ce(p,oe=>e("div",{key:oe,class:Q(["resize-handle",`handle-${oe}`]),style:pe({cursor:Ce(oe)}),onMousedown:je(te=>ee(te,oe),["stop"])},null,46,Ec)),64))],64)):G("",!0),b.value&&O.value?(l(),i("div",Pc)):G("",!0)],38))}},Nc=He(Tc,[["__scopeId","data-v-d539ca8b"]]),zt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=N(()=>s.element.content||{}),c=nt(),v=lt(),h=_(!1),y=_(null),b=_("");Je(()=>r.value.text,F=>{h.value||(b.value=F||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function O(){c.selectedElementId===s.element.id&&(h.value=!0,In(()=>{if(y.value)if(y.value.focus(),typeof y.value.setSelectionRange=="function"){const F=y.value.value.length;y.value.setSelectionRange(F,F)}else{const F=document.createRange();F.selectNodeContents(y.value),F.collapse(!1);const me=window.getSelection();me.removeAllRanges(),me.addRange(F)}}))}function be(F){h.value&&F.stopPropagation()}function re(){h.value=!1;const F=b.value;v.updateElement(c.projectId,c.currentSlideId,s.element.id,{content:{...s.element.content,text:F}})}return(F,me)=>h.value?de((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:y,"onUpdate:modelValue":me[0]||(me[0]=H=>b.value=H),onBlur:re,onMousedown:be,style:pe({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[ye,b.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:O,style:pe({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},C(b.value),37))}},zc=["src","alt"],Bc={key:1,class:"image-placeholder"},Lc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},_c={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(S){return(s,r)=>{var c,v,h,y;return l(),i("div",{class:"image-element",style:pe({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((c=S.element.content)==null?void 0:c.borderRadius)||0)+"px",border:`${((v=S.element.content)==null?void 0:v.borderWidth)||0}px solid ${((h=S.element.content)==null?void 0:h.borderColor)||"transparent"}`})},[(y=S.element.content)!=null&&y.src?(l(),i("img",{key:0,src:S.element.content.src,alt:S.element.content.alt||"",style:pe({width:"100%",height:"100%",objectFit:S.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,zc)):(l(),i("div",Bc,[(l(),i("svg",Lc,[...r[0]||(r[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),r[1]||(r[1]=e("span",null,"Image",-1))]))],4)}}},jc=He(_c,[["__scopeId","data-v-401e9ff3"]]),Dc={class:"shape-element",style:{width:"100%",height:"100%"}},qc=["width","height"],Rc=["points","fill","stroke","stroke-width"],Fc={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=N(()=>s.element.content||{}),c=N(()=>{const y=r.value.shapeType||"rectangle",b={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return y==="circle"?{...b,borderRadius:"50%"}:y==="rectangle"?{...b,borderRadius:(r.value.borderRadius||0)+"px"}:b}),v=N(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),h=N(()=>{const y=s.element.width||150,b=s.element.height||100,O=r.value.shapeType;if(O==="triangle")return`${y/2},0 ${y},${b} 0,${b}`;if(O==="diamond")return`${y/2},0 ${y},${b/2} ${y/2},${b} 0,${b/2}`;if(O==="arrow")return`0,${b*.3} ${y*.6},${b*.3} ${y*.6},0 ${y},${b/2} ${y*.6},${b} ${y*.6},${b*.7} 0,${b*.7}`;if(O==="star"){const be=y/2,re=b/2,F=Math.min(y,b)/2,me=F*.4;let H="";for(let L=0;L<10;L++){const a=(L*36-90)*Math.PI/180,$=L%2===0?F:me;H+=`${be+$*Math.cos(a)},${re+$*Math.sin(a)} `}return H.trim()}return""});return(y,b)=>(l(),i("div",Dc,[v.value?(l(),i("svg",{key:1,width:S.element.width,height:S.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:h.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,Rc)],8,qc)):(l(),i("div",{key:0,style:pe(c.value)},null,4))]))}},Oc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=N(()=>s.element.content||{}),c=N(()=>{const v={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},h=v[r.value.variant||"primary"]||v.primary;return{...h,background:r.value.bgColor||h.background,color:r.value.textColor||h.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:h.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(v,h)=>(l(),i("div",{class:"button-element",style:pe({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},C(r.value.label||"Button"),5))}},Uc={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Vc={class:"popup-header"},Wc={class:"popup-body"},Gc={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=N(()=>s.element.content||{}),c=_(!1);function v(h){h.stopPropagation(),c.value=!c.value}return(h,y)=>(l(),i("div",Uc,[e("div",{class:"hotspot-btn",style:pe({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:je(v,["stop"])},C(r.value.icon||"?"),5),gt(Mt,{name:"fade"},{default:pt(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:pe({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",Vc,[e("strong",null,C(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:y[0]||(y[0]=je(b=>c.value=!1,["stop"]))},"×")]),e("div",Wc,C(r.value.popupContent||"Add your content in the properties panel."),1)],4)):G("",!0)]),_:1})]))}},Hc=He(Gc,[["__scopeId","data-v-ef5f15f6"]]),Yc={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},Qc=["src"],Xc=["src","poster","autoplay","controls","loop","muted"],Jc={key:2,class:"video-placeholder"},Kc={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Zc={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=N(()=>s.element.content||{}),c=N(()=>{const h=r.value.src||"";return h.includes("youtube")||h.includes("youtu.be")}),v=N(()=>{var y,b;const h=r.value.src||"";if(c.value){const O=(y=h.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:y[1];return O?`https://www.youtube.com/embed/${O}`:""}if(h.includes("vimeo.com")){const O=(b=h.match(/vimeo\.com\/(\d+)/))==null?void 0:b[1];return O?`https://player.vimeo.com/video/${O}`:""}return""});return(h,y)=>(l(),i("div",Yc,[v.value?(l(),i("iframe",{key:0,src:v.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,Qc)):r.value.src&&!v.value?(l(),i("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:pe({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,Xc)):(l(),i("div",Jc,[(l(),i("svg",Kc,[...y[0]||(y[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),y[1]||(y[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},ep=He(Zc,[["__scopeId","data-v-dfea1a16"]]),tp=["stroke"],op=["src","controls","autoplay","loop"],np={key:1,style:{"font-size":"11px",color:"#aaa"}},lp={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(S){return(s,r)=>{var c,v,h,y,b,O,be,re,F;return l(),i("div",{class:"audio-element",style:pe({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=S.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((v=S.element.content)==null?void 0:v.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((h=S.element.content)==null?void 0:h.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,tp)),e("span",{style:pe({fontSize:"13px",color:((y=S.element.content)==null?void 0:y.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},C(((b=S.element.content)==null?void 0:b.label)||"Audio Player"),5),(O=S.element.content)!=null&&O.src?(l(),i("audio",{key:0,src:S.element.content.src,controls:((be=S.element.content)==null?void 0:be.controls)!==!1,autoplay:(re=S.element.content)==null?void 0:re.autoplay,loop:(F=S.element.content)==null?void 0:F.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=je(()=>{},["stop"]))},null,40,op)):(l(),i("span",np,"No source"))],4)}}},ip={class:"quiz-options"},ap=["onClick"],sp={class:"opt-letter"},rp={class:"opt-text"},up={key:0},dp={class:"quiz-actions"},cp=["disabled"],pp={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(S){const s=S,r=N(()=>s.element.content||{}),c=_(null),v=_(!1);function h(be){v.value||(c.value=be)}function y(){c.value!==null&&(v.value=!0)}function b(){c.value=null,v.value=!1}const O=N(()=>v.value&&c.value===(r.value.correctIndex??0));return(be,re)=>(l(),i("div",{class:"quiz-element",style:pe({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:pe({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},C(r.value.question||"Question text…"),5),e("div",ip,[(l(!0),i(K,null,ce(r.value.options||[],(F,me)=>(l(),i("div",{key:me,class:Q(["quiz-opt",c.value===me&&"selected",v.value&&me===r.value.correctIndex&&"correct",v.value&&c.value===me&&me!==r.value.correctIndex&&"wrong"]),onClick:H=>h(me)},[e("span",sp,C(String.fromCharCode(65+me)),1),e("span",rp,C(F),1)],10,ap))),128))]),v.value?(l(),i("div",{key:0,class:Q(["quiz-feedback",O.value?"correct":"wrong"])},[Z(C(O.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!O.value&&r.value.explanation?(l(),i("span",up,C(r.value.explanation),1)):G("",!0)],2)):G("",!0),e("div",dp,[v.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:b},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:y},"Submit",8,cp))])],4))}},vp=He(pp,[["__scopeId","data-v-ca2bd187"]]),fp={key:0,class:"canvas-empty"},mp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},gp={key:0,class:"canvas-device-frame","aria-hidden":"true"},bp=["value"],hp={class:"canvas-guide-label"},yp={key:5,class:"drop-hint"},xp={class:"canvas-info-bar"},wp=["disabled"],kp={class:"slide-index"},Cp=["disabled"],$p={key:0},Sp={__name:"EditorCanvas",setup(S){const s=nt(),r=lt(),c=_(null),v=_(null),h=_(1),y=N(()=>h.value*s.zoomLevel);Fn("canvasScale",y);const b=N(()=>r.getProject(s.projectId)),O=N(()=>Pt(b.value)),be=N(()=>An(b.value)),re=N(()=>O.value.width),F=N(()=>O.value.height),me=N(()=>Mn(re.value,F.value)),H=N(()=>{var f,w;return(w=(f=b.value)==null?void 0:f.slides)==null?void 0:w.find(Y=>Y.id===s.currentSlideId)}),L=N(()=>{var f;return[...((f=b.value)==null?void 0:f.slides)||[]].sort((w,Y)=>w.order-Y.order)}),a=N(()=>L.value.findIndex(f=>f.id===s.currentSlideId)),$=N(()=>{var f;return{autoPlay:!1,motionPresets:[],...((f=b.value)==null?void 0:f.settings)||{}}}),M=N(()=>(Array.isArray($.value.motionPresets)?$.value.motionPresets:[]).filter(f=>f.scope==="group")),D=N(()=>{const f=new Set(s.selectedElementIds);return j.value.filter(w=>f.has(w.id))}),p=_(""),U=N(()=>H.value?H.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:$.value.autoPlay&&Number(H.value.duration||0)>0?{label:`Auto ${Number(H.value.duration).toFixed(Number(H.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function P(){const f=M.value.find(Y=>Y.id===p.value);if(!f||!D.value.length)return;[...D.value].sort((Y,V)=>(Y.y||0)!==(V.y||0)?(Y.y||0)-(V.y||0):(Y.x||0)-(V.x||0)).forEach((Y,V)=>{if(f.type==="auto"){r.updateElement(s.projectId,s.currentSlideId,Y.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,Y.id,{animations:[{type:f.type,delay:Math.max(0,Number(f.delay)||0)+V*Math.max(0,Number(f.stepDelay)||0),duration:Math.max(.1,Number(f.duration)||.72)}]})}),r.updateProject(s.projectId,{settings:{...$.value,motionPresets:($.value.motionPresets||[]).map(Y=>Y.id===f.id?{...Y,usageCount:Math.max(0,Number(Y.usageCount||0))+1,lastUsedAt:Date.now()}:Y)}})}function W(){if(!M.value.length){p.value="";return}M.value.some(f=>f.id===p.value)||(p.value=M.value[0].id)}const j=N(()=>{var f;return[...((f=H.value)==null?void 0:f.elements)||[]].sort((w,Y)=>(w.zIndex||0)-(Y.zIndex||0))}),k=N(()=>{const f=H.value;return f?f.backgroundType==="gradient"&&f.backgroundGradient?{background:f.backgroundGradient}:f.backgroundType==="image"&&f.backgroundImage?{backgroundImage:`url(${f.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:f.background||"#fff"}:{background:"#fff"}}),E=N(()=>`scale(${y.value})`);function ae(){if(!c.value)return;const{clientWidth:f,clientHeight:w}=c.value,Y=(f-80)/re.value,V=(w-80)/F.value;h.value=Math.min(Y,V,1)}let X=null;Cn(()=>{ae(),X=new ResizeObserver(ae),c.value&&X.observe(c.value),W()}),$n(()=>X==null?void 0:X.disconnect()),Je(M,()=>{W()},{deep:!0,immediate:!0}),Je(O,()=>{ae()},{deep:!0});const ee=_({x:0,y:0}),ve=_({x:0,y:0}),fe=_(!1),Ee=_(!1),ze=_(!1),Ce=_(null),Ie=N(()=>{var f,w;return((f=be.value)==null?void 0:f.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((w=be.value)==null?void 0:w.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),Ge=N(()=>{if(!Ie.value)return null;if(Ie.value.tone==="mobile"){const Y=re.value*.08,V=F.value*.05;return{x:Y,y:V,width:re.value-Y*2,height:F.value-V*2}}const f=re.value*.08,w=F.value*.08;return{x:f,y:w,width:re.value-f*2,height:F.value-w*2}}),Ye=N(()=>{if(!Ge.value)return[];const f=Ge.value;return j.value.filter(w=>w.visible!==!1).filter(w=>{const Y=Number(w.x||0),V=Number(w.y||0),ke=Y+Number(w.width||0),Me=V+Number(w.height||0);return Y<f.x||V<f.y||ke>f.x+f.width||Me>f.y+f.height}).map(w=>w.id)}),Fe=N(()=>s.selectedElementIds.filter(f=>Ye.value.includes(f)).length),J=N(()=>Ye.value.length),se=N(()=>!Ie.value||!J.value?null:Fe.value?`${Fe.value} selected ${Fe.value===1?"element is":"elements are"} outside the ${Ie.value.label.toLowerCase()}.`:`${J.value} ${J.value===1?"element is":"elements are"} outside the ${Ie.value.label.toLowerCase()}.`),oe=N(()=>{if(!fe.value)return null;const f=Math.min(ee.value.x,ve.value.x),w=Math.min(ee.value.y,ve.value.y),Y=Math.abs(ve.value.x-ee.value.x),V=Math.abs(ve.value.y-ee.value.y);return{x:f,y:w,width:Y,height:V}});function te(f){!fe.value&&(f.target===v.value||f.target===f.currentTarget)&&s.clearSelection()}function $e(f){return f?Array.from(f.files||[]).some(w=>w.type.startsWith("image/")):!1}function ge(f){return f?Array.from(f.types||[]).includes(Bt):!1}function z(f,w,Y){return Math.min(Math.max(f,w),Y)}function I(f,w,Y){const V=Lt(f),ke=z(w-V.width/2,0,Math.max(0,re.value-V.width)),Me=z(Y-V.height/2,0,Math.max(0,F.value-V.height));return{x:ke,y:Me,bounds:V}}function q(f){if(!ge(f))return null;try{const w=f.getData(Bt),Y=w?JSON.parse(w):null;return Y!=null&&Y.id&&r.getContentBlocks(s.projectId).find(V=>V.id===Y.id)||null}catch{return null}}function x(f,w,Y){if(!v.value||!Y){Ce.value=null;return}const V=v.value.getBoundingClientRect(),ke=(f-V.left)/y.value,Me=(w-V.top)/y.value,De=I(Y,ke,Me);Ce.value={block:Y,x:De.x,y:De.y,bounds:De.bounds}}function he(f,w,Y){if(!f||!f.type.startsWith("image/"))return;const V=new FileReader;V.onload=()=>{const ke=String(V.result||"");if(!ke)return;const Me=new Image;Me.onload=()=>{const De=v.value.getBoundingClientRect(),_e=(w-De.left)/y.value,ie=(Y-De.top)/y.value,qe=Math.min(420/Me.width,280/Me.height,1),Ne=Math.max(120,Math.round(Me.width*qe)),Be=Math.max(80,Math.round(Me.height*qe)),tt=Math.max(0,Math.min(re.value-Ne,Math.round(_e-Ne/2))),ct=Math.max(0,Math.min(F.value-Be,Math.round(ie-Be/2))),vt=r.addElement(s.projectId,s.currentSlideId,"image",{x:tt,y:ct,width:Ne,height:Be,content:{src:ke,alt:f.name,objectFit:"cover"}});vt&&(s.selectElement(vt.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Me.src=ke},V.readAsDataURL(f)}function Se(f){const w=$e(f.dataTransfer),Y=ge(f.dataTransfer);!w&&!Y||(f.preventDefault(),f.dataTransfer.dropEffect="copy",Ee.value=w,ze.value=Y,Y&&x(f.clientX,f.clientY,q(f.dataTransfer)))}function Le(f){var w;(w=f.currentTarget)!=null&&w.contains(f.relatedTarget)||(Ee.value=!1,ze.value=!1,Ce.value=null)}function Pe(f){const w=$e(f.dataTransfer),Y=ge(f.dataTransfer);if(!w&&!Y)return;if(f.preventDefault(),Ee.value=!1,ze.value=!1,Ce.value=null,Y){try{const ke=q(f.dataTransfer);if(!ke)return;const Me=v.value.getBoundingClientRect(),De=(f.clientX-Me.left)/y.value,_e=(f.clientY-Me.top)/y.value,ie=I(ke,De,_e),xe=r.insertContentBlock(s.projectId,s.currentSlideId,ke.id,{x:ie.x,y:ie.y});xe.length&&(s.setSelection(xe.map(Ke=>Ke.id)),s.setActiveTool("select"),s.focusPropertiesSection("content"))}catch(ke){console.warn("Failed to drop block onto canvas.",ke)}return}const V=Array.from(f.dataTransfer.files||[]).find(ke=>ke.type.startsWith("image/"));V&&he(V,f.clientX,f.clientY)}function Ue(f){if(D.value.length<2)return;const w=[...D.value].sort((ie,xe)=>(ie.zIndex||0)-(xe.zIndex||0)),Y=Math.min(...w.map(ie=>Number(ie.x||0))),V=Math.min(...w.map(ie=>Number(ie.y||0))),ke=Math.max(...w.map(ie=>Number(ie.x||0)+Number(ie.width||0))),Me=Math.max(...w.map(ie=>Number(ie.y||0)+Number(ie.height||0))),De=Y+(ke-Y)/2,_e=V+(Me-V)/2;if(f==="align-left"&&w.forEach(ie=>r.updateElement(s.projectId,s.currentSlideId,ie.id,{x:Y},{persist:!1})),f==="align-center"&&w.forEach(ie=>{const xe=Number(ie.width||0);r.updateElement(s.projectId,s.currentSlideId,ie.id,{x:De-xe/2},{persist:!1})}),f==="align-right"&&w.forEach(ie=>{const xe=Number(ie.width||0);r.updateElement(s.projectId,s.currentSlideId,ie.id,{x:ke-xe},{persist:!1})}),f==="align-top"&&w.forEach(ie=>r.updateElement(s.projectId,s.currentSlideId,ie.id,{y:V},{persist:!1})),f==="align-middle"&&w.forEach(ie=>{const xe=Number(ie.height||0);r.updateElement(s.projectId,s.currentSlideId,ie.id,{y:_e-xe/2},{persist:!1})}),f==="align-bottom"&&w.forEach(ie=>{const xe=Number(ie.height||0);r.updateElement(s.projectId,s.currentSlideId,ie.id,{y:Me-xe},{persist:!1})}),f==="distribute-horizontal"){const ie=[...w].sort((Ne,Be)=>(Ne.x||0)-(Be.x||0)),xe=ie.reduce((Ne,Be)=>Ne+Number(Be.width||0),0),Ke=ie.length>1?(ke-Y-xe)/(ie.length-1):0;let qe=Y;ie.forEach(Ne=>{r.updateElement(s.projectId,s.currentSlideId,Ne.id,{x:qe},{persist:!1}),qe+=Number(Ne.width||0)+Ke})}if(f==="distribute-vertical"){const ie=[...w].sort((Ne,Be)=>(Ne.y||0)-(Be.y||0)),xe=ie.reduce((Ne,Be)=>Ne+Number(Be.height||0),0),Ke=ie.length>1?(Me-V-xe)/(ie.length-1):0;let qe=V;ie.forEach(Ne=>{r.updateElement(s.projectId,s.currentSlideId,Ne.id,{y:qe},{persist:!1}),qe+=Number(Ne.height||0)+Ke})}r.commitProject(s.projectId)}function dt(f){const w=s.activeTool;if(f.target!==v.value&&f.target!==f.currentTarget)return;f.preventDefault(),f.stopPropagation();const Y=v.value.getBoundingClientRect(),V=(f.clientX-Y.left)/y.value,ke=(f.clientY-Y.top)/y.value;if(w==="select"){fe.value=!0,ee.value={x:V,y:ke},ve.value={x:V,y:ke};const _e=xe=>{ve.value={x:(xe.clientX-Y.left)/y.value,y:(xe.clientY-Y.top)/y.value}},ie=()=>{window.removeEventListener("mousemove",_e),window.removeEventListener("mouseup",ie);const xe=oe.value;if(xe&&(xe.width>2||xe.height>2)){const Ke=j.value.filter(qe=>{const Ne=qe.x,Be=qe.y,tt=qe.width||100,ct=qe.height||100;return Ne<xe.x+xe.width&&Ne+tt>xe.x&&Be<xe.y+xe.height&&Be+ct>xe.y}).map(qe=>qe.id);Ke.length>0?s.setSelection(Ke):s.clearSelection()}else s.clearSelection();setTimeout(()=>{fe.value=!1},0)};window.addEventListener("mousemove",_e),window.addEventListener("mouseup",ie);return}const Me=_e=>s.snapToGrid?Math.round(_e/s.gridSize)*s.gridSize:_e,De=r.addElement(s.projectId,s.currentSlideId,w,{x:Me(V-75),y:Me(ke-40)});De&&(s.selectElement(De.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const Qe=N(()=>{if(!s.showGrid)return{};const f=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${f}px ${f}px`}}),at={text:zt,heading:zt,image:jc,shape:Fc,button:Oc,hotspot:Hc,video:ep,audio:lp,quiz:vp,chart:il,divider:"div"};function st(f){return at[f]||zt}function it(f){var w,Y;return f.type!=="divider"?{}:{borderTop:`${((w=f.content)==null?void 0:w.thickness)||2}px solid ${((Y=f.content)==null?void 0:Y.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const We=_({show:!1,x:0,y:0,elId:null});function yt(f,w){f.preventDefault(),We.value={show:!0,x:f.clientX,y:f.clientY,elId:w},s.selectElement(w),setTimeout(()=>window.addEventListener("click",rt,{once:!0}),0)}function rt(){We.value.show=!1}function xt(){if(We.value.elId){const f=r.duplicateElement(s.projectId,s.currentSlideId,We.value.elId);f&&s.selectElement(f.id)}rt()}function wt(){We.value.elId&&(r.deleteElement(s.projectId,s.currentSlideId,We.value.elId),s.clearSelection()),rt()}function ut(){We.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,We.value.elId,"up"),rt()}function kt(){We.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,We.value.elId,"down"),rt()}function Ct(){const f=a.value,w=r.addSlide(s.projectId,f);w&&s.setCurrentSlide(w.id)}function $t(){const f=a.value;f>0&&s.setCurrentSlide(L.value[f-1].id)}function St(){const f=a.value;f<L.value.length-1&&s.setCurrentSlide(L.value[f+1].id)}return(f,w)=>{var Y;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[H.value?(l(),i(K,{key:1},[e("div",{class:Q(["canvas-zoom-wrapper",[Ie.value&&`canvas-zoom-wrapper-${Ie.value.tone}`]]),style:pe({transform:E.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:v,class:"slide-canvas",style:pe({width:re.value+"px",height:F.value+"px",...k.value,...Qe.value}),onClick:te,onMousedown:dt,onDragover:Se,onDragleave:Le,onDrop:Pe,onContextmenu:w[3]||(w[3]=je(()=>{},["prevent"]))},[Ie.value?(l(),i("div",gp)):G("",!0),A(s).multiSelection&&M.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:w[1]||(w[1]=je(()=>{},["stop"]))},[w[15]||(w[15]=e("span",{class:"selection-preset-label"},"Sequence",-1)),de(e("select",{"onUpdate:modelValue":w[0]||(w[0]=V=>p.value=V),class:"selection-preset-select"},[(l(!0),i(K,null,ce(M.value,V=>(l(),i("option",{key:V.id,value:V.id},C(V.name),9,bp))),128))],512),[[At,p.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:je(P,["stop"])},"Apply")],32)):G("",!0),se.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:w[2]||(w[2]=je(()=>{},["stop"]))},[w[16]||(w[16]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,C(se.value),1)],32)):G("",!0),Ce.value?(l(),i("div",{key:3,class:"block-drop-preview",style:pe({left:`${Ce.value.x}px`,top:`${Ce.value.y}px`,width:`${Ce.value.bounds.width}px`,height:`${Ce.value.bounds.height}px`})},[(l(!0),i(K,null,ce(Ce.value.block.elements,(V,ke)=>{var Me,De,_e,ie;return l(),i("div",{key:`${Ce.value.block.id}-preview-${ke}`,class:Q(["block-drop-preview-el",`block-drop-preview-${V.type}`]),style:pe({left:`${Number(V.x||0)-Ce.value.bounds.minX}px`,top:`${Number(V.y||0)-Ce.value.bounds.minY}px`,width:`${Number(V.width||0)}px`,height:`${Number(V.height||0)}px`,borderRadius:V.type==="shape"&&((Me=V.content)==null?void 0:Me.shapeType)==="circle"?"50%":`${Number(((De=V.content)==null?void 0:De.borderRadius)||12)}px`,background:V.type==="shape"?((_e=V.content)==null?void 0:_e.fillColor)||"rgba(108,71,255,.18)":V.type==="button"?((ie=V.content)==null?void 0:ie.bgColor)||"rgba(108,71,255,.32)":["text","heading"].includes(V.type)?"transparent":"rgba(148,163,184,.18)"})},[["text","heading"].includes(V.type)?(l(),i(K,{key:0},[w[17]||(w[17]=e("span",{class:"block-drop-preview-line"},null,-1)),w[18]||(w[18]=e("span",{class:"block-drop-preview-line short"},null,-1))],64)):G("",!0)],6)}),128))],4)):G("",!0),(l(!0),i(K,null,ce(j.value,V=>(l(),Xe(Nc,{key:V.id,element:V,onContextmenu:je(ke=>yt(ke,V.id),["stop"])},{default:pt(()=>[(l(),Xe(Rn(st(V.type)),{element:V,style:pe(V.type==="divider"?it(V):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),Ie.value?(l(),i("div",{key:4,class:Q(["canvas-guide",[`canvas-guide-${Ie.value.tone}`,J.value&&"canvas-guide-warning-state"]]),style:pe(Ie.value.style),"aria-hidden":"true"},[e("span",hp,C(Ie.value.label)+" · "+C(me.value),1)],6)):G("",!0),A(s).activeTool!=="select"||Ee.value||ze.value?(l(),i("div",yp,C(ze.value?"Drop block to insert it here":Ee.value?"Drop image to insert it on this slide":`Click anywhere to add ${A(s).activeTool}`),1)):G("",!0),fe.value&&oe.value?(l(),i("div",{key:6,class:"selection-marquee",style:pe({left:oe.value.x+"px",top:oe.value.y+"px",width:oe.value.width+"px",height:oe.value.height+"px"})},null,4)):G("",!0)],36)],6),e("div",xp,[e("button",{class:"bar-btn",onClick:Ct},"Add page"),e("button",{class:"bar-btn icon",onClick:$t,disabled:a.value<=0},"◀",8,wp),e("span",kp,C(a.value+1)+" / "+C(L.value.length),1),e("button",{class:"bar-btn icon",onClick:St,disabled:a.value>=L.value.length-1},"▶",8,Cp),e("span",null,C(re.value)+" × "+C(F.value)+"px",1),w[19]||(w[19]=e("span",null,"·",-1)),e("span",null,C(((Y=H.value.elements)==null?void 0:Y.length)||0)+" elements",1),w[20]||(w[20]=e("span",null,"·",-1)),e("span",{class:Q(["playback-badge",`playback-badge-${U.value.tone}`])},C(U.value.label),3),A(s).hasSelection?(l(),i("span",$p,"· "+C(A(s).selectedElementIds.length)+" selected",1)):G("",!0),A(s).multiSelection?(l(),i(K,{key:1},[e("button",{class:"bar-btn",onClick:w[4]||(w[4]=V=>Ue("align-left"))},"Left"),e("button",{class:"bar-btn",onClick:w[5]||(w[5]=V=>Ue("align-center"))},"Center"),e("button",{class:"bar-btn",onClick:w[6]||(w[6]=V=>Ue("align-right"))},"Right"),e("button",{class:"bar-btn",onClick:w[7]||(w[7]=V=>Ue("align-top"))},"Top"),e("button",{class:"bar-btn",onClick:w[8]||(w[8]=V=>Ue("align-middle"))},"Middle"),e("button",{class:"bar-btn",onClick:w[9]||(w[9]=V=>Ue("align-bottom"))},"Bottom"),e("button",{class:"bar-btn",onClick:w[10]||(w[10]=V=>Ue("distribute-horizontal"))},"Space H"),e("button",{class:"bar-btn",onClick:w[11]||(w[11]=V=>Ue("distribute-vertical"))},"Space V")],64)):G("",!0),e("button",{class:"bar-btn ai",onClick:w[12]||(w[12]=V=>A(s).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",fp,[(l(),i("svg",mp,[...w[13]||(w[13]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),w[14]||(w[14]=e("p",null,"Select a slide to start editing",-1))])),(l(),Xe(Sn,{to:"body"},[We.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:pe({left:We.value.x+"px",top:We.value.y+"px"})},[e("button",{class:"ctx-item",onClick:xt},"Duplicate"),e("button",{class:"ctx-item",onClick:ut},"Bring Forward"),e("button",{class:"ctx-item",onClick:kt},"Send Backward"),w[21]||(w[21]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:wt},"Delete")],4)):G("",!0)]))],512)}}},Ip=He(Sp,[["__scopeId","data-v-e7450e9c"]]),Ap={class:"ai-panel"},Mp={class:"ai-mode-tabs"},Ep=["onClick"],Pp={class:"ai-content"},Tp={class:"form-group"},Np={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},zp={key:0,class:"form-group"},Bp={key:1,class:"form-group"},Lp={class:"layout-label-row"},_p={class:"layout-current-hint"},jp={class:"layout-preset-grid",role:"group","aria-label":"AI layout preset"},Dp=["onClick"],qp={class:"layout-preset-title"},Rp={class:"layout-preset-hint"},Fp={key:2,class:"form-group"},Op={key:3,class:"form-group"},Up={class:"layout-label-row"},Vp={class:"layout-current-hint"},Wp={class:"output-mode-switch",role:"group","aria-label":"Deck layout strategy"},Gp={key:4,class:"form-group"},Hp={class:"layout-label-row"},Yp={class:"layout-current-hint"},Qp={class:"layout-preset-grid",role:"group","aria-label":"Deck layout preset"},Xp=["onClick"],Jp={class:"layout-preset-title"},Kp={class:"layout-preset-hint"},Zp={class:"form-group"},ev={class:"form-group"},tv={class:"prompt-label-row"},ov={key:1,class:"prompt-auto-badge"},nv={key:5,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},lv={key:6,class:"selected-source-card"},iv={class:"result-header"},av={class:"source-count-badge"},sv={class:"selected-source-preview"},rv={class:"selected-source-actions"},uv=["disabled"],dv=["disabled"],cv={key:0,class:"spinner"},pv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vv={key:7,class:"creative-options-wrap"},fv={class:"result-header"},mv={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},gv={key:1,class:"creative-options-list"},bv={class:"creative-title"},hv={class:"creative-angle"},yv=["onClick"],xv={class:"form-group"},wv={class:"quiz-config-row"},kv={class:"form-group",style:{flex:"1"}},Cv={class:"form-group",style:{flex:"1"}},$v={class:"form-group"},Sv={class:"qtype-btns"},Iv=["onClick"],Av={class:"qtype-icon"},Mv={class:"form-group"},Ev={class:"form-group"},Pv={class:"prompt-label-row"},Tv={key:1,class:"prompt-auto-badge"},Nv=["disabled"],zv={key:0,class:"spinner"},Bv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Lv={key:0,class:"quiz-results"},_v={class:"quiz-results-header"},jv={class:"form-label"},Dv={class:"quiz-header-actions"},qv={class:"regen-row"},Rv=["disabled"],Fv={key:0,class:"spinner spinner-sm"},Ov={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Uv=["disabled"],Vv={class:"quiz-card-header"},Wv={class:"quiz-card-check"},Gv=["onUpdate:modelValue"],Hv={class:"q-num"},Yv={class:"q-badges"},Qv={class:"badge type-badge"},Xv={class:"q-question"},Jv={class:"q-options"},Kv={class:"q-option-letter"},Zv={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},e1={key:0,class:"q-explanation"},t1=["disabled"],o1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},n1=["disabled"],l1={key:0,class:"spinner"},i1={key:0,class:"selected-text-preview"},a1={class:"text-preview"},s1={key:1,class:"ai-hint"},r1={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},u1=["disabled"],d1={key:0,class:"spinner"},c1={key:0,class:"selected-text-preview"},p1={class:"text-preview"},v1={key:1,class:"ai-hint"},f1={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},m1=["disabled"],g1={key:0,class:"spinner"},b1={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},h1={class:"result-header"},y1={class:"result-actions"},x1=["disabled"],w1={class:"textarea result-display"},k1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},C1=["disabled"],$1={key:0,class:"spinner"},S1={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},I1={class:"textarea result-display",style:{color:"var(--color-primary)"}},A1={key:6,class:"ai-settings"},M1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},E1=["value"],P1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},T1=["value"],N1={key:0,class:"demo-notice"},z1={key:7,class:"result-area"},B1={class:"result-header"},L1={class:"result-pre"},_1={class:"result-actions"},j1=["disabled"],D1={key:8,class:"ai-error"},q1={__name:"AIAssistant",setup(S){const s=[{id:"classic",label:"Classic",hint:"Title, bullets, and a takeaway.",promptHint:"Use a standard explanatory slide with a title, optional subtitle, 3-5 bullets, and one strong takeaway.",schema:'{ "layout": "classic", "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }'},{id:"cards",label:"Cards",hint:"Three concept or benefit cards.",promptHint:"Structure the content as three distinct cards with a short title and supporting sentence for each.",schema:'{ "layout": "cards", "title": "...", "subtitle": "...", "callout": "...", "cards": [{ "title": "...", "body": "..." }, { "title": "...", "body": "..." }, { "title": "...", "body": "..." }] }'},{id:"comparison",label:"Comparison",hint:"Side-by-side before/after or option A/B.",promptHint:"Create a two-column comparison with clear labels and 2-3 points on each side.",schema:'{ "layout": "comparison", "title": "...", "subtitle": "...", "callout": "...", "comparison": { "leftTitle": "...", "leftPoints": ["..."], "rightTitle": "...", "rightPoints": ["..."] } }'},{id:"metrics",label:"Metrics",hint:"Three KPI-style highlights.",promptHint:"Return three concise, presentation-ready metrics with realistic values and short labels.",schema:'{ "layout": "metrics", "title": "...", "subtitle": "...", "callout": "...", "metrics": [{ "value": "92%", "label": "..." }, { "value": "3.4x", "label": "..." }, { "value": "14d", "label": "..." }] }'},{id:"timeline",label:"Timeline",hint:"Four-step milestone story.",promptHint:"Turn the topic into four clear milestones that progress from start to finish.",schema:'{ "layout": "timeline", "title": "...", "subtitle": "...", "callout": "...", "timeline": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'},{id:"faq",label:"FAQ",hint:"Three audience questions and answers.",promptHint:"Return three strong audience questions, each with a concise useful answer.",schema:'{ "layout": "faq", "title": "...", "subtitle": "...", "callout": "...", "faqs": [{ "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }, { "question": "...", "answer": "..." }] }'},{id:"process",label:"Process",hint:"Three practical steps.",promptHint:"Break the topic into three clear steps with actionable descriptions.",schema:'{ "layout": "process", "title": "...", "subtitle": "...", "callout": "...", "process": [{ "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }, { "title": "...", "detail": "..." }] }'}],r={cards:"three-card-grid",comparison:"comparison-columns",metrics:"metric-strip",timeline:"timeline-ribbon",faq:"faq-stack",process:"process-ladder"};function c(d,o="classic"){const m=String(d||o||"classic").trim().toLowerCase();return s.some(B=>B.id===m)?m:o}function v(d,o=""){return String(d??o).replace(/^\s*[-•]\s*/,"").trim()||o}function h(d){return(Array.isArray(d)?d:typeof d=="string"?d.split(`
`):[]).map(m=>v(m)).filter(Boolean)}function y(d,o,m){const B=[...d];for(;B.length<o;)B.push(m(B.length));return B.slice(0,o)}function b(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({title:v(g==null?void 0:g.title,`Card ${ne+1}`),body:v((g==null?void 0:g.body)||(g==null?void 0:g.text)||(g==null?void 0:g.description),"Add supporting detail.")})).filter(g=>g.title||g.body):[],B=o.map((g,ne)=>({title:`Point ${ne+1}`,body:g}));return y(m.length?m:B,3,g=>({title:`Point ${g+1}`,body:"Add supporting detail."}))}function O(d,o){const m=h(d==null?void 0:d.leftPoints),B=h(d==null?void 0:d.rightPoints),g=o.slice(0,Math.max(1,Math.ceil(o.length/2))),ne=o.slice(Math.max(1,Math.ceil(o.length/2)));return{leftTitle:v(d==null?void 0:d.leftTitle,"Option A"),leftPoints:y(m.length?m:g,3,we=>`Left point ${we+1}`),rightTitle:v(d==null?void 0:d.rightTitle,"Option B"),rightPoints:y(B.length?B:ne,3,we=>`Right point ${we+1}`)}}function be(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({value:v(g==null?void 0:g.value,`${ne+1}`),label:v(g==null?void 0:g.label,`Metric ${ne+1}`)})).filter(g=>g.value||g.label):[],B=o.map((g,ne)=>{const[we,...Oe]=g.split(/[:\-]/);return{value:v(we,`${ne+1}`),label:v(Oe.join(" ").trim(),g)}});return y(m.length?m:B,3,g=>({value:`${g+1}`,label:`Metric ${g+1}`}))}function re(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({title:v(g==null?void 0:g.title,`Phase ${ne+1}`),detail:v((g==null?void 0:g.detail)||(g==null?void 0:g.description),"Explain the milestone.")})).filter(g=>g.title||g.detail):[],B=o.map((g,ne)=>({title:`Phase ${ne+1}`,detail:g}));return y(m.length?m:B,4,g=>({title:`Phase ${g+1}`,detail:"Explain the milestone."}))}function F(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({question:v(g==null?void 0:g.question,`Question ${ne+1}?`),answer:v(g==null?void 0:g.answer,"Add the short answer here.")})).filter(g=>g.question||g.answer):[],B=o.map((g,ne)=>({question:`Question ${ne+1}?`,answer:g}));return y(m.length?m:B,3,g=>({question:`Question ${g+1}?`,answer:"Add the short answer here."}))}function me(d,o){const m=Array.isArray(d)?d.map((g,ne)=>({title:v(g==null?void 0:g.title,`Step ${ne+1}`),detail:v((g==null?void 0:g.detail)||(g==null?void 0:g.description),"Add the step detail here.")})).filter(g=>g.title||g.detail):[],B=o.map((g,ne)=>({title:`Step ${ne+1}`,detail:g}));return y(m.length?m:B,3,g=>({title:`Step ${g+1}`,detail:"Add the step detail here."}))}const H=Vn(),L=nt(),a=lt(),$=_("generate"),M=_(""),D=_(""),p=_("");Je($,()=>{p.value=""}),Je(()=>L.aiPanelMode,d=>{d&&($.value=d)},{immediate:!0});const U=_(4),P=_("general"),W=_("Spanish"),j=_(""),k=_(""),E=_(""),ae=_(!1),X=_("single"),ee=_("classic"),ve=_("mixed"),fe=_(5),Ee=_("slide"),ze=_([]),Ce=_(""),Ie=N(()=>s.find(d=>d.id===ee.value)||s[0]),Ge=N(()=>{const d=D.value.trim()||"[your topic]";if(X.value==="deck"){let B=`Create a complete ${fe.value}-slide learning deck about "${d}".`;return k.value.trim()&&(B+=`
Additional context: ${k.value.trim()}`),B+=`
Deck layout strategy: ${ve.value}`,ve.value==="single"?B+=`
Use the ${ee.value} layout for every slide.`:B+=`
Mix layouts across the deck when appropriate.`,B+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "callout": "...", "slideType": "...", "layout": "classic|cards|comparison|metrics|timeline|faq|process" }] }`,B+=`
Make each slide distinct, logically sequenced, and specific to "${d}".`,B}let m=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[P.value]||"educational slide"} about "${d}".`;return k.value.trim()&&(m+=`
Additional context: ${k.value.trim()}`),m+=`
Layout mode: ${ee.value}`,m+=`
Layout instruction: ${Ie.value.promptHint}`,m+=`
Return ONLY valid JSON matching this shape: ${Ie.value.schema}`,m+=`
Make all content specific to "${d}" — no generic placeholders.`,m});Je(Ge,d=>{ae.value||(E.value=d)},{immediate:!0});function Ye(){E.value=Ge.value,ae.value=!1}const Fe=_(""),J=_("intermediate"),se=_("multiple-choice"),oe=_(""),te=_([]),$e=_(""),ge=_(!1),z=N(()=>{const d=Fe.value.trim()||"[your topic]",o={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},m={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let B=`Generate ${U.value} ${o[J.value]} ${m[se.value]} quiz questions about "${d}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return oe.value.trim()&&(B+=`
Learning objective: ${oe.value.trim()}`),B});Je(z,d=>{ge.value||($e.value=d)},{immediate:!0});function I(){$e.value=z.value,ge.value=!1}const q=N(()=>a.getProject(L.projectId)),x=N(()=>{var d,o;return(o=(d=q.value)==null?void 0:d.slides)==null?void 0:o.find(m=>m.id===L.currentSlideId)}),he=N(()=>{var d,o;return L.selectedElementId?(o=(d=x.value)==null?void 0:d.elements)==null?void 0:o.find(m=>m.id===L.selectedElementId):null}),Se=N(()=>{var o;const d=new Set(L.selectedElementIds);return(((o=x.value)==null?void 0:o.elements)||[]).filter(m=>{var B;return d.has(m.id)&&typeof((B=m==null?void 0:m.content)==null?void 0:B.text)=="string"&&m.content.text.trim()})}),Le=N(()=>Se.value.map(d=>d.content.text.trim()).filter(Boolean).join(`

`));async function Pe(){if(!D.value.trim()&&!E.value.trim())return;if(p.value="",ze.value=[],Ce.value="",X.value==="deck"){const o=await H.generateSlideDeck(D.value,fe.value,{objective:k.value,customPrompt:E.value,layoutStrategy:ve.value,layoutMode:ee.value});if(o!=null&&o.length){const m=o.map(B=>Ue(B));p.value=JSON.stringify({slides:m},null,2),w(m,{replaceGenerated:!0})}return}if(Ee.value==="options"){await ke();return}const d=await H.generateSlideContent(D.value,P.value,k.value,E.value,{layoutMode:ee.value});if(d){const o=Ue(d);p.value=JSON.stringify(o,null,2),Y(o,{replaceGenerated:!0})}}function Ue(d){var g;const o=d&&typeof d=="object"?d:{},m=h(o.bullets),B=c(o.layout||((g=o.design)==null?void 0:g.layout),X.value==="deck"&&ve.value==="mixed"?"classic":ee.value);return{title:String(o.title||D.value||"Untitled Slide").trim(),subtitle:String(o.subtitle||"").trim(),bullets:m,callout:String(o.callout||"").trim(),layout:B,cards:b(o.cards,m),comparison:O(o.comparison,m),metrics:be(o.metrics,m),timeline:re(o.timeline,m),faqs:F(o.faqs,m),process:me(o.process,m)}}function dt(d,o){var g,ne,we;const m=(ne=(g=a.getProject(d))==null?void 0:g.slides)==null?void 0:ne.find(Oe=>Oe.id===o);if(!((we=m==null?void 0:m.elements)!=null&&we.length))return;m.elements.filter(Oe=>{var T;return((T=Oe.meta)==null?void 0:T.source)==="ai-content"}).map(Oe=>Oe.id).forEach(Oe=>{a.deleteElement(d,o,Oe)})}function Qe(d,o,m,B){return a.addElement(d,o,m,{...B,meta:{...B.meta||{},source:"ai-content"}})}function at(d){const o=ol.find(B=>B.id===d);if(!o)return null;const m=nl(JSON.parse(JSON.stringify(o)),d);return m.elements=m.elements.map(B=>({...B,meta:{...B.meta||{},source:"ai-content"}})),m}function st(d,o){o&&d.elements.push({type:"text",x:0,y:54,width:760,height:36,meta:{source:"ai-content"},content:{text:o,fontSize:16,fontWeight:"500",textAlign:"left",color:"#64748b",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function it(d,o){if(!o)return;const m=Lt(d);d.elements.push({type:"text",x:0,y:m.height+18,width:Math.max(m.width,720),height:40,meta:{source:"ai-content"},content:{text:`Takeaway: ${o}`,fontSize:15,fontWeight:"600",textAlign:"left",color:"#6c47ff",lineHeight:1.4,fontFamily:"Inter, sans-serif"}})}function We(d){const o=Array.isArray(d)?d:[];if(!o.length)return{minX:40,minY:54,width:0,height:0};const m=Math.min(...o.map(we=>Number(we.x||0))),B=Math.min(...o.map(we=>Number(we.y||0))),g=Math.max(...o.map(we=>Number(we.x||0)+Number(we.width||0))),ne=Math.max(...o.map(we=>Number(we.y||0)+Number(we.height||0)));return{minX:m,minY:B,width:Math.max(0,g-m),height:Math.max(0,ne-B)}}function yt(d,o){var ne;const m=a.getProject(d),B=Lt(o),g=Number(((ne=m==null?void 0:m.settings)==null?void 0:ne.slideWidth)||960);return{x:Math.max(40,Math.round((g-B.width)/2)),y:54}}function rt(d){const o=at(r.cards);if(!o)return null;const m=d.cards;return o.elements[0].content.text=d.title,o.elements[1].content.text=d.subtitle||d.callout||"Use the three cards to frame the main ideas.",m.forEach((B,g)=>{o.elements[5+g].content.text=B.title,o.elements[8+g].content.text=B.body}),d.callout&&d.subtitle&&it(o,d.callout),o}function xt(d){const o=at(r.comparison);return o?(o.elements[0].content.text=d.title,o.elements[3].content.text=d.comparison.leftTitle,o.elements[4].content.text=d.comparison.rightTitle,o.elements[5].content={...o.elements[5].content,text:d.comparison.leftPoints.map(m=>`• ${m}`).join(`
`),fontSize:17,lineHeight:1.55},o.elements[6].content={...o.elements[6].content,text:d.comparison.rightPoints.map(m=>`• ${m}`).join(`
`),fontSize:17,lineHeight:1.55},st(o,d.subtitle),it(o,d.callout),o):null}function wt(d){const o=at(r.metrics);return o?(o.elements[0].content.text=d.title,d.metrics.forEach((m,B)=>{o.elements[4+B].content.text=m.value,o.elements[7+B].content.text=m.label}),st(o,d.subtitle),it(o,d.callout),o):null}function ut(d){const o=at(r.timeline);return o?(o.elements[0].content.text=d.title,d.timeline.forEach((m,B)=>{o.elements[6+B].content={...o.elements[6+B].content,text:`${m.title}
${m.detail}`,fontSize:16,lineHeight:1.35}}),st(o,d.subtitle),it(o,d.callout),o):null}function kt(d){const o=at(r.faq);return o?(o.elements[0].content.text=d.title,d.faqs.forEach((m,B)=>{o.elements[4+B].content={...o.elements[4+B].content,text:`${m.question}
${m.answer}`,fontSize:16,lineHeight:1.35},o.elements[4+B].height=44}),st(o,d.subtitle),it(o,d.callout),o):null}function Ct(d){const o=at(r.process);return o?(o.elements[0].content.text=d.title,d.process.forEach((m,B)=>{o.elements[8+B].content.text=m.title,o.elements[11+B].content.text=m.detail}),st(o,d.subtitle),it(o,d.callout),o):null}function $t(d){switch(d.layout){case"cards":return rt(d);case"comparison":return xt(d);case"metrics":return wt(d);case"timeline":return ut(d);case"faq":return kt(d);case"process":return Ct(d);default:return null}}function St(d,o,m){var B;if(m.title&&(a.updateSlide(d,o,{title:m.title}),Qe(d,o,"heading",{x:60,y:40,width:840,height:80,content:{text:m.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),m.subtitle&&Qe(d,o,"text",{x:60,y:130,width:840,height:50,content:{text:m.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(B=m.bullets)!=null&&B.length){const g=m.bullets.map(ne=>`• ${ne}`).join(`
`);Qe(d,o,"text",{x:60,y:m.subtitle?200:150,width:840,height:200,content:{text:g,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}m.callout&&(Qe(d,o,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),Qe(d,o,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${m.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}function f(d,o,m,{replaceGenerated:B=!1,origin:g=null}={}){if(!d||!o)return;B&&dt(d,o);const ne=$t(m);if(a.updateSlide(d,o,{title:m.title||"Untitled Slide"}),ne){const we=g||yt(d,ne);a.insertContentBlock(d,o,ne,we)}else St(d,o,m)}function w(d,{replaceGenerated:o=!1}={}){if(!L.currentSlideId)return;const m=L.projectId;if(!m||!Array.isArray(d)||!d.length)return;d.map(g=>Ue(g)).forEach(g=>{const ne=a.addSlide(m);ne&&f(m,ne.id,g,{replaceGenerated:o})})}function Y(d=null,{replaceGenerated:o=!1}={}){if(!L.currentSlideId)return;let m=d;if(!m){if(!p.value)return;try{m=JSON.parse(p.value)}catch(we){console.warn("Could not parse AI content:",we);return}}const B=Ue(m),g=L.projectId,ne=L.currentSlideId;!g||!ne||f(g,ne,B,{replaceGenerated:o})}function V(){if(p.value){if(X.value==="deck"){try{const d=JSON.parse(p.value),o=Array.isArray(d)?d:d==null?void 0:d.slides;if(!Array.isArray(o)||!o.length)return;w(o,{replaceGenerated:!0})}catch{return}return}Y()}}async function ke(){const d=D.value.trim()||"[your topic]",o=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${P.value}" slide about "${d}" using a ${ee.value} layout.

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,m=await H.generate(o,{type:"creativeOptions",topic:d,slideType:P.value});if(m)try{const B=JSON.parse(m.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(B))throw new Error("Options must be an array");ze.value=B.slice(0,3).map((g,ne)=>({title:String((g==null?void 0:g.title)||`Option ${ne+1}`),angle:String((g==null?void 0:g.angle)||""),prompt:String((g==null?void 0:g.prompt)||"")})).filter(g=>g.prompt.trim()),ze.value.length||(Ce.value="No usable creative options were returned. Try generating again.")}catch{Ce.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function Me(d){d!=null&&d.prompt&&(E.value=d.prompt,ae.value=!0,Ee.value="slide",await Pe())}async function De(){if(!Le.value.trim()||!L.projectId||!L.currentSlideId)return;const d=await H.transformSourceTextToSlideContent(Le.value,{topic:D.value,slideType:P.value,description:k.value,layoutMode:ee.value,customPrompt:E.value});if(!d)return;const o=Ue(d),m=We(Se.value),B={x:Math.max(24,Math.round(m.minX)),y:Math.max(24,Math.round(m.minY))};Se.value.forEach(g=>{a.deleteElement(L.projectId,L.currentSlideId,g.id)}),p.value=JSON.stringify(o,null,2),f(L.projectId,L.currentSlideId,o,{origin:B})}async function _e(d=!1){if(!Fe.value.trim()&&!$e.value.trim())return;d||(te.value=[]);const o=await H.generateQuiz(Fe.value,U.value,{difficulty:J.value,questionType:se.value,objective:oe.value,customPrompt:$e.value});if(o)if(d){const m=new Set(te.value.map(g=>g.question)),B=o.filter(g=>!m.has(g.question)).map(g=>({...g,_selected:!0}));te.value=[...te.value,...B]}else te.value=o.map(m=>({...m,_selected:!0}))}async function ie(){const d=te.value.filter(m=>m._selected);if(!d.length)return;const o=L.projectId;d.forEach((m,B)=>{const g=a.addSlide(o);g&&(a.addElement(o,g.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:m.question,options:m.options,correctIndex:m.correctIndex,explanation:m.explanation||""}}),a.updateSlide(o,g.id,{title:`Q${B+1}: ${m.question.slice(0,40)}…`}))}),te.value=[]}function xe(d){te.value.forEach(o=>o._selected=d)}async function Ke(){if(!j.value.trim())return;const d=await H.generateVoiceoverScript(j.value);d&&(p.value=d)}async function qe(){var m,B;const d=(B=(m=he.value)==null?void 0:m.content)==null?void 0:B.text;if(!d)return;const o=await H.generateTranslation(d,W.value);o&&(p.value=o)}async function Ne(){!p.value||!he.value||a.updateElement(L.projectId,L.currentSlideId,he.value.id,{content:{...he.value.content,text:p.value}})}const Be=_(""),tt=_(!1);async function ct(){if(Be.value.trim()){tt.value=!0,p.value="Optimizing prompt...";try{let d=Be.value;const o=await H.generateImagePrompt(Be.value);o&&(d=o.replace(/```(json)?\n?/g,"").trim()),p.value="Painting image... this takes about 10-20 seconds. Please wait.";const m=Math.floor(Math.random()*1e6),B=`https://image.pollinations.ai/prompt/${encodeURIComponent(d)}?width=600&height=400&nologo=true&seed=${m}`;await new Promise((g,ne)=>{const we=new Image;we.onload=g,we.onerror=ne,we.src=B}),a.addElement(L.projectId,L.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:B,objectFit:"cover"}}),p.value="Image added to slide!"}catch{p.value="Failed to generate image. Try a different prompt."}finally{tt.value=!1}}}async function vt(){var o,m;if(!((m=(o=he.value)==null?void 0:o.content)!=null&&m.text))return;const d=await H.improveText(he.value.content.text,M.value||"Make it clearer and more engaging");d&&(p.value=d)}async function Tt(){!p.value||!he.value||a.updateElement(L.projectId,L.currentSlideId,he.value.id,{content:{...he.value.content,text:p.value}})}async function Nt(){if(!M.value.trim())return;const d=await H.generate(M.value);d&&(p.value=d)}return(d,o)=>{var m,B,g,ne,we,Oe;return l(),i("div",Ap,[e("div",Mp,[(l(),i(K,null,ce([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],T=>e("button",{key:T.id,class:Q(["ai-mode-btn",$.value===T.id&&"active"]),onClick:Ze=>$.value=T.id},C(T.label),11,Ep)),64))]),e("div",Pp,[$.value==="generate"?(l(),i(K,{key:0},[e("div",Tp,[o[36]||(o[36]=e("label",{class:"form-label"},[Z("Topic / Subject "),e("span",{class:"required"},"*")],-1)),de(e("input",{"onUpdate:modelValue":o[0]||(o[0]=T=>D.value=T),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:wn(Pe,["enter"])},null,544),[[ye,D.value]])]),e("div",Np,[e("button",{class:Q(["output-mode-btn",X.value==="single"&&"active"]),onClick:o[1]||(o[1]=T=>X.value="single")},"Single Slide",2),e("button",{class:Q(["output-mode-btn",X.value==="deck"&&"active"]),onClick:o[2]||(o[2]=T=>X.value="deck")},"Slide Deck",2)]),X.value==="single"?(l(),i("div",zp,[o[38]||(o[38]=e("label",{class:"form-label"},"Slide Type",-1)),de(e("select",{"onUpdate:modelValue":o[3]||(o[3]=T=>P.value=T),class:"select"},[...o[37]||(o[37]=[et('<option value="general" data-v-5d0d3401>General</option><option value="intro" data-v-5d0d3401>Introduction</option><option value="overview" data-v-5d0d3401>Overview</option><option value="concept" data-v-5d0d3401>Concept Explanation</option><option value="example" data-v-5d0d3401>Example / Case Study</option><option value="summary" data-v-5d0d3401>Summary</option><option value="callout" data-v-5d0d3401>Key Takeaway</option>',7)])],512),[[At,P.value]])])):G("",!0),X.value==="single"?(l(),i("div",Bp,[e("div",Lp,[o[39]||(o[39]=e("label",{class:"form-label"},"Layout",-1)),e("span",_p,C(Ie.value.hint),1)]),e("div",jp,[(l(),i(K,null,ce(s,T=>e("button",{key:T.id,class:Q(["layout-preset-card",ee.value===T.id&&"active"]),onClick:Ze=>ee.value=T.id},[e("span",qp,C(T.label),1),e("span",Rp,C(T.hint),1)],10,Dp)),64))])])):(l(),i("div",Fp,[o[40]||(o[40]=e("label",{class:"form-label"},"Number of Slides",-1)),de(e("input",{"onUpdate:modelValue":o[4]||(o[4]=T=>fe.value=T),class:"input",type:"number",min:"1",max:"20"},null,512),[[ye,fe.value,void 0,{number:!0}]]),o[41]||(o[41]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),X.value==="deck"?(l(),i("div",Op,[e("div",Up,[o[42]||(o[42]=e("label",{class:"form-label"},"Deck Layouts",-1)),e("span",Vp,C(ve.value==="mixed"?"AI can vary layout by slide":`All slides use ${Ie.value.label}`),1)]),e("div",Wp,[e("button",{class:Q(["output-mode-btn",ve.value==="mixed"&&"active"]),onClick:o[5]||(o[5]=T=>ve.value="mixed")},"Mixed Layouts",2),e("button",{class:Q(["output-mode-btn",ve.value==="single"&&"active"]),onClick:o[6]||(o[6]=T=>ve.value="single")},"Consistent Layout",2)])])):G("",!0),X.value==="deck"&&ve.value==="single"?(l(),i("div",Gp,[e("div",Hp,[o[43]||(o[43]=e("label",{class:"form-label"},"Deck Layout",-1)),e("span",Yp,C(Ie.value.hint),1)]),e("div",Qp,[(l(),i(K,null,ce(s,T=>e("button",{key:`deck-${T.id}`,class:Q(["layout-preset-card",ee.value===T.id&&"active"]),onClick:Ze=>ee.value=T.id},[e("span",Jp,C(T.label),1),e("span",Kp,C(T.hint),1)],10,Xp)),64))])])):G("",!0),e("div",Zp,[o[44]||(o[44]=e("label",{class:"form-label"},[Z("Description "),e("span",{class:"optional"},"(optional)")],-1)),de(e("textarea",{"onUpdate:modelValue":o[7]||(o[7]=T=>k.value=T),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[ye,k.value]])]),e("div",ev,[e("div",tv,[o[46]||(o[46]=e("label",{class:"form-label"},"AI Prompt",-1)),ae.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:Ye,title:"Reset to auto-generated prompt"},[...o[45]||(o[45]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),Z(" Reset ",-1)])])):(l(),i("span",ov,"auto"))]),de(e("textarea",{"onUpdate:modelValue":o[8]||(o[8]=T=>E.value=T),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:o[9]||(o[9]=T=>ae.value=!0),spellcheck:"false"},null,544),[[ye,E.value]]),o[47]||(o[47]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),X.value==="single"?(l(),i("div",nv,[e("button",{class:Q(["output-mode-btn",Ee.value==="slide"&&"active"]),onClick:o[10]||(o[10]=T=>Ee.value="slide")},"Show on Slide",2),e("button",{class:Q(["output-mode-btn",Ee.value==="options"&&"active"]),onClick:o[11]||(o[11]=T=>Ee.value="options")},"Creative Options",2)])):G("",!0),X.value==="single"&&Le.value?(l(),i("div",lv,[e("div",iv,[o[48]||(o[48]=e("span",{class:"form-label"},"Selected Text Source",-1)),e("span",av,C(Se.value.length)+" selected",1)]),e("div",sv,C(Le.value),1),e("div",rv,[e("button",{class:"btn btn-secondary btn-sm",disabled:A(H).isGenerating,onClick:De}," Transform Selection to "+C(Ie.value.label),9,uv)])])):G("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating||!D.value.trim()&&!E.value.trim()||X.value==="deck"&&(!fe.value||fe.value<1||fe.value>20),onClick:Pe},[A(H).isGenerating?(l(),i("span",cv)):(l(),i("svg",pv,[...o[49]||(o[49]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Z(" "+C(A(H).isGenerating?"Generating…":X.value==="deck"?p.value?`Regenerate ${fe.value} Slides`:`Generate ${fe.value} Slides`:Ee.value==="slide"?p.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,dv),X.value==="single"&&Ee.value==="options"&&(ze.value.length||Ce.value)?(l(),i("div",vv,[e("div",fv,[o[50]||(o[50]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[12]||(o[12]=T=>{ze.value=[],Ce.value=""})},"Clear")]),Ce.value?(l(),i("div",mv,[o[51]||(o[51]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Z(" "+C(Ce.value),1)])):(l(),i("div",gv,[(l(!0),i(K,null,ce(ze.value,(T,Ze)=>(l(),i("article",{key:Ze,class:"creative-option-card"},[e("h4",bv,C(T.title),1),e("p",hv,C(T.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:bt=>Me(T)},"Use This Option",8,yv)]))),128))]))])):G("",!0)],64)):$.value==="quiz"?(l(),i(K,{key:1},[e("div",xv,[o[52]||(o[52]=e("label",{class:"form-label"},[Z("Quiz Topic "),e("span",{class:"required"},"*")],-1)),de(e("input",{"onUpdate:modelValue":o[13]||(o[13]=T=>Fe.value=T),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:wn(_e,["enter"])},null,544),[[ye,Fe.value]])]),e("div",wv,[e("div",kv,[o[54]||(o[54]=e("label",{class:"form-label"},"Questions",-1)),de(e("select",{"onUpdate:modelValue":o[14]||(o[14]=T=>U.value=T),class:"select"},[...o[53]||(o[53]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[At,U.value,void 0,{number:!0}]])]),e("div",Cv,[o[56]||(o[56]=e("label",{class:"form-label"},"Difficulty",-1)),de(e("select",{"onUpdate:modelValue":o[15]||(o[15]=T=>J.value=T),class:"select"},[...o[55]||(o[55]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[At,J.value]])])]),e("div",$v,[o[57]||(o[57]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Sv,[(l(),i(K,null,ce([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],T=>e("button",{key:T.id,class:Q(["qtype-btn",se.value===T.id&&"active"]),onClick:Ze=>se.value=T.id},[e("span",Av,C(T.icon),1),e("span",null,C(T.label),1)],10,Iv)),64))])]),e("div",Mv,[o[58]||(o[58]=e("label",{class:"form-label"},[Z("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),de(e("input",{"onUpdate:modelValue":o[16]||(o[16]=T=>oe.value=T),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[ye,oe.value]])]),e("div",Ev,[e("div",Pv,[o[60]||(o[60]=e("label",{class:"form-label"},"AI Prompt",-1)),ge.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:I,title:"Reset to auto-generated prompt"},[...o[59]||(o[59]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),Z(" Reset ",-1)])])):(l(),i("span",Tv,"auto"))]),de(e("textarea",{"onUpdate:modelValue":o[17]||(o[17]=T=>$e.value=T),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:o[18]||(o[18]=T=>ge.value=!0),spellcheck:"false"},null,544),[[ye,$e.value]]),o[61]||(o[61]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating||!Fe.value.trim()&&!$e.value.trim(),onClick:o[19]||(o[19]=T=>_e(!1))},[A(H).isGenerating?(l(),i("span",zv)):(l(),i("svg",Bv,[...o[62]||(o[62]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Z(" "+C(A(H).isGenerating?"Generating…":`Generate ${U.value} Questions`),1)],8,Nv),te.value.length?(l(),i("div",Lv,[e("div",_v,[e("span",jv,C(te.value.length)+" Questions",1),e("div",Dv,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[20]||(o[20]=T=>xe(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:o[21]||(o[21]=T=>xe(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:o[22]||(o[22]=T=>te.value=[])},"Clear")])]),e("div",qv,[e("button",{class:"btn btn-secondary regen-btn",disabled:A(H).isGenerating,onClick:o[23]||(o[23]=T=>_e(!1)),title:"Replace all questions with a new set"},[A(H).isGenerating?(l(),i("span",Fv)):(l(),i("svg",Ov,[...o[63]||(o[63]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),o[64]||(o[64]=Z(" Regenerate ",-1))],8,Rv),e("button",{class:"btn btn-ghost regen-btn",disabled:A(H).isGenerating,onClick:o[24]||(o[24]=T=>_e(!0)),title:"Generate more and append to current list"},[...o[65]||(o[65]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Z(" Add More ",-1)])],8,Uv)]),(l(!0),i(K,null,ce(te.value,(T,Ze)=>(l(),i("div",{key:Ze,class:Q(["quiz-card",{deselected:!T._selected}])},[e("div",Vv,[e("label",Wv,[de(e("input",{type:"checkbox","onUpdate:modelValue":bt=>T._selected=bt},null,8,Gv),[[Et,T._selected]]),e("span",Hv,"Q"+C(Ze+1),1)]),e("div",Yv,[e("span",{class:Q(["badge difficulty-badge",T.difficulty])},C(T.difficulty),3),e("span",Qv,C(T.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",Xv,C(T.question),1),e("div",Jv,[(l(!0),i(K,null,ce(T.options,(bt,ft)=>(l(),i("div",{key:ft,class:Q(["q-option",ft===T.correctIndex&&"correct"])},[e("span",Kv,C(["A","B","C","D"][ft]),1),e("span",null,C(bt),1),ft===T.correctIndex?(l(),i("svg",Zv,[...o[66]||(o[66]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):G("",!0)],2))),128))]),T.explanation?(l(),i("div",e1,[o[67]||(o[67]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),Z(" "+C(T.explanation),1)])):G("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!te.value.filter(T=>T._selected).length,onClick:ie},[o[68]||(o[68]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),Z(" Add "+C(te.value.filter(T=>T._selected).length)+" Selected as Quiz Slides ",1)],8,t1)])):G("",!0)],64)):$.value==="voiceover"?(l(),i(K,{key:2},[e("div",o1,[o[69]||(o[69]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),de(e("textarea",{"onUpdate:modelValue":o[25]||(o[25]=T=>j.value=T),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[ye,j.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating,onClick:Ke},[A(H).isGenerating?(l(),i("span",l1)):G("",!0),Z(" "+C(A(H).isGenerating?"Generating…":"Generate Script"),1)],8,n1)],64)):$.value==="improve"?(l(),i(K,{key:3},[(B=(m=he.value)==null?void 0:m.content)!=null&&B.text?(l(),i("div",i1,[o[70]||(o[70]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",a1,C(he.value.content.text.slice(0,120))+C(he.value.content.text.length>120?"…":""),1)])):(l(),i("p",s1,"Select a text element on the canvas to improve it.")),e("div",r1,[o[71]||(o[71]=e("label",{class:"form-label"},"Instruction",-1)),de(e("input",{"onUpdate:modelValue":o[26]||(o[26]=T=>M.value=T),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[ye,M.value]])]),o[72]||(o[72]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),de(e("textarea",{"onUpdate:modelValue":o[27]||(o[27]=T=>M.value=T),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[ye,M.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating||!he.value&&!M.value,onClick:o[28]||(o[28]=T=>he.value?vt():Nt())},[A(H).isGenerating?(l(),i("span",d1)):G("",!0),Z(" "+C(A(H).isGenerating?"Processing…":"Generate"),1)],8,u1)],64)):$.value==="translate"?(l(),i(K,{key:4},[(ne=(g=he.value)==null?void 0:g.content)!=null&&ne.text?(l(),i("div",c1,[o[73]||(o[73]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",p1,C(he.value.content.text.slice(0,120))+C(he.value.content.text.length>120?"…":""),1)])):(l(),i("p",v1,"Select a text element on the canvas to translate it.")),e("div",f1,[o[75]||(o[75]=e("label",{class:"form-label"},"Target Language",-1)),de(e("select",{"onUpdate:modelValue":o[29]||(o[29]=T=>W.value=T),class:"select"},[...o[74]||(o[74]=[et('<option value="Spanish" data-v-5d0d3401>Spanish</option><option value="French" data-v-5d0d3401>French</option><option value="German" data-v-5d0d3401>German</option><option value="Italian" data-v-5d0d3401>Italian</option><option value="Portuguese" data-v-5d0d3401>Portuguese</option><option value="Chinese (Simplified)" data-v-5d0d3401>Chinese (Simplified)</option><option value="Japanese" data-v-5d0d3401>Japanese</option><option value="Arabic" data-v-5d0d3401>Arabic</option>',8)])],512),[[At,W.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:A(H).isGenerating||!((Oe=(we=he.value)==null?void 0:we.content)!=null&&Oe.text),onClick:qe},[A(H).isGenerating?(l(),i("span",g1)):G("",!0),Z(" "+C(A(H).isGenerating?"Translating…":"Translate Text"),1)],8,m1),p.value?(l(),i("div",b1,[e("div",h1,[o[76]||(o[76]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",y1,[e("button",{class:"btn btn-ghost btn-sm",onClick:o[30]||(o[30]=T=>d.navigator.clipboard.writeText(p.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Ne,disabled:!he.value},"Apply",8,x1)])]),e("div",w1,C(p.value),1)])):G("",!0)],64)):$.value==="image"?(l(),i(K,{key:5},[o[79]||(o[79]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",k1,[o[77]||(o[77]=e("label",{class:"form-label"},"Image Description",-1)),de(e("textarea",{"onUpdate:modelValue":o[31]||(o[31]=T=>Be.value=T),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[ye,Be.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:tt.value||A(H).isGenerating||!Be.value,onClick:ct},[tt.value||A(H).isGenerating?(l(),i("span",$1)):G("",!0),Z(" "+C(tt.value||A(H).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,C1),p.value?(l(),i("div",S1,[o[78]||(o[78]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",I1,C(p.value),1)])):G("",!0)],64)):$.value==="settings"?(l(),i("div",A1,[e("div",M1,[o[81]||(o[81]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:A(H).apiProvider,class:"select",onChange:o[32]||(o[32]=T=>A(H).setProvider(T.target.value))},[...o[80]||(o[80]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,E1)]),e("div",P1,[o[82]||(o[82]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:A(H).apiKey,class:"input",placeholder:"sk-…",onChange:o[33]||(o[33]=T=>A(H).setApiKey(T.target.value))},null,40,T1),o[83]||(o[83]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),A(H).apiKey?G("",!0):(l(),i("div",N1,[...o[84]||(o[84]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),Z(" Running in ",-1),e("strong",null,"demo mode",-1),Z(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):G("",!0),p.value&&$.value!=="settings"&&$.value!=="quiz"?(l(),i("div",z1,[e("div",B1,[o[85]||(o[85]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:o[34]||(o[34]=T=>p.value="")},"Clear")]),e("pre",L1,C(p.value),1),e("div",_1,[$.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:V},C(X.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):G("",!0),$.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:A(H).isGenerating,onClick:Pe},[...o[86]||(o[86]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),Z(" Regenerate ",-1)])],8,j1)):G("",!0),$.value==="improve"&&he.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Tt}," Apply to Element ")):G("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:o[35]||(o[35]=T=>{var Ze;return(Ze=d.navigator.clipboard)==null?void 0:Ze.writeText(p.value)})}," Copy ")])])):G("",!0),A(H).lastError?(l(),i("div",D1,[o[87]||(o[87]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Z(" "+C(A(H).lastError),1)])):G("",!0)])])}}},R1=He(q1,[["__scopeId","data-v-5d0d3401"]]),F1={class:"theme-manager"},O1={class:"panel-section"},U1={class:"presets-grid"},V1=["title","onClick"],W1={class:"preset-preview"},G1={class:"preset-name"},H1={class:"panel-section"},Y1={class:"theme-fields"},Q1={class:"form-label"},X1={class:"color-row"},J1=["value","onInput"],K1=["value","onChange"],Z1={class:"panel-section"},ef={class:"theme-field"},tf=["value","placeholder"],of={class:"chart-palette-preview"},nf={class:"panel-section"},lf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},af=["value"],sf=["value"],rf={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},uf=["value"],df=["value"],cf={class:"form-group"},pf=["value"],vf={class:"panel-section"},ff={class:"tp-chart-row"},mf={key:0,class:"apply-message success"},gf={key:1,class:"apply-message error"},bf={__name:"ThemeManager",setup(S){const s=nt(),r=lt(),c=N(()=>r.getProject(s.projectId)),v=N(()=>{var a;return((a=c.value)==null?void 0:a.theme)||{}}),h=N(()=>kn(v.value)),y=_(""),b=_("");function O(a){r.updateProject(s.projectId,{theme:{...v.value,...a}})}const be=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],re=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function F(a){O(a)}function me(a,$){const M=a.content||{};return a.type==="text"?{content:{...M,fontFamily:$.fontFamily||M.fontFamily,color:$.textColor||M.color}}:a.type==="heading"?{content:{...M,fontFamily:$.headingFont||$.fontFamily||M.fontFamily,color:$.textColor||M.color}}:a.type==="shape"?{content:{...M,fillColor:$.secondaryColor||M.fillColor}}:a.type==="hotspot"?{content:{...M,bgColor:$.primaryColor||M.bgColor}}:a.type==="button"?{content:{...M,bgColor:$.primaryColor||M.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:$.fontFamily||M.fontFamily}}:a.type==="quiz"?{content:{...M,cardBgColor:$.bgColor||M.cardBgColor,questionColor:$.textColor||M.questionColor,accentColor:$.primaryColor||M.accentColor}}:a.type==="chart"?{content:{...M,...En($)}}:null}function H(){O({chartPalette:""})}function L(){y.value="",b.value="";const a=s.projectId,$=c.value,M=v.value;if(!a||!$){b.value="No active project to apply theme.";return}const D=$.slides||[];let p=0;D.forEach(U=>{(U.backgroundType||"color")==="color"&&r.updateSlide(a,U.id,{backgroundType:"color",background:M.bgColor||U.background||"#ffffff"}),(U.elements||[]).forEach(P=>{const W=me(P,M);W&&(r.updateElement(a,U.id,P.id,W),p+=1)})}),y.value=`Applied theme to ${D.length} slide${D.length===1?"":"s"} and ${p} element${p===1?"":"s"}.`}return(a,$)=>(l(),i("div",F1,[e("div",O1,[$[4]||($[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",U1,[(l(),i(K,null,ce(be,M=>e("div",{key:M.name,class:"preset-card",title:M.name,onClick:D=>F(M)},[e("div",W1,[e("div",{class:"pp-header",style:pe({background:M.primaryColor})},null,4),e("div",{class:"pp-body",style:pe({background:M.bgColor})},[e("div",{class:"pp-line",style:pe({background:M.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:pe({background:M.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:pe({background:M.secondaryColor})},null,4)]),e("span",G1,C(M.name),1)],8,V1)),64))])]),e("div",H1,[$[5]||($[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",Y1,[(l(),i(K,null,ce({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(M,D)=>e("div",{class:"theme-field",key:D},[e("label",Q1,C(M),1),e("div",X1,[e("input",{type:"color",value:v.value[D]||"#ffffff",class:"color-input-native",onInput:p=>O({[D]:p.target.value})},null,40,J1),e("input",{value:v.value[D]||"",class:"input",onChange:p=>O({[D]:p.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,K1)])])),64))])]),e("div",Z1,[$[8]||($[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",ef,[$[6]||($[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:v.value.chartPalette||"",class:"input",placeholder:A(ll)(A(kn)(v.value)),onChange:$[0]||($[0]=M=>O({chartPalette:M.target.value}))},null,40,tf),e("div",of,[(l(!0),i(K,null,ce(h.value,(M,D)=>(l(),i("span",{key:`theme-chart-${D}`,class:"chart-palette-dot",style:pe({background:M})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:H},"Use auto palette")]),$[7]||($[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",nf,[$[12]||($[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",lf,[$[9]||($[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:v.value.headingFont||"Inter, sans-serif",class:"select",onChange:$[1]||($[1]=M=>O({headingFont:M.target.value}))},[(l(),i(K,null,ce(re,M=>e("option",{key:M.value,value:M.value},C(M.label),9,sf)),64))],40,af)]),e("div",rf,[$[10]||($[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:v.value.fontFamily||"Inter, sans-serif",class:"select",onChange:$[2]||($[2]=M=>O({fontFamily:M.target.value}))},[(l(),i(K,null,ce(re,M=>e("option",{key:M.value,value:M.value},C(M.label),9,df)),64))],40,uf)]),e("div",cf,[$[11]||($[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:v.value.fontSize||16,class:"input",onChange:$[3]||($[3]=M=>O({fontSize:+M.target.value}))},null,40,pf)])]),e("div",vf,[$[13]||($[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:pe({background:v.value.bgColor||"#fff",fontFamily:v.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:pe({color:v.value.textColor,fontFamily:v.value.headingFont||v.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:pe({color:v.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:pe({background:v.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:pe({background:v.value.secondaryColor})},"Badge",4),e("div",ff,[(l(!0),i(K,null,ce(h.value.slice(0,5),(M,D)=>(l(),i("span",{key:`preview-chart-${D}`,class:"tp-chart-bar",style:pe({background:M,height:`${22+D*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:L}," Apply Theme to Slides "),y.value?(l(),i("p",mf,C(y.value),1)):G("",!0),b.value?(l(),i("p",gf,C(b.value),1)):G("",!0)])]))}},hf=He(bf,[["__scopeId","data-v-da2b0ce4"]]),yf={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},xf={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},wf={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},kf={class:"export-tabs tabs",style:{"overflow-x":"auto"}},Cf={class:"export-content"},$f={class:"export-options",style:{"margin-bottom":"20px"}},Sf={class:"form-group"},If={class:"export-meta"},Af={class:"meta-item"},Mf={class:"meta-item"},Ef={class:"meta-item"},Pf={class:"export-options",style:{"margin-bottom":"20px"}},Tf={class:"form-group"},Nf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},zf={class:"export-options",style:{"margin-bottom":"20px"}},Bf={class:"form-group"},Lf={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},_f={class:"coming-soon"},jf={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},Df={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},qf={key:1,class:"export-success"},Rf={__name:"ExportModal",setup(S){const s=nt(),r=lt(),c=Pn(),v=N(()=>r.getProject(s.projectId)),h=_("json"),y=_(""),b=_(""),O=_(!0);Je(v,D=>{D&&!b.value&&(b.value=D.name||"presentation")},{immediate:!0});function be(){const D=r.exportProject(s.projectId);if(!D)return;const p=new Blob([D],{type:"application/json"}),U=URL.createObjectURL(p),P=document.createElement("a");P.href=U,P.download=`${b.value||"project"}.mediasurf.json`,P.click(),URL.revokeObjectURL(U),y.value="success",setTimeout(()=>y.value="",3e3)}function re(D,p="presentation"){return String(D).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||p}function F(D){return new Promise((p,U)=>{const P=new FileReader;P.onloadend=()=>p(P.result),P.onerror=()=>U(P.error),P.readAsDataURL(D)})}function me(D,p,U="html"){const P=Pt(p);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${P.width}px;
  --lf-slide-height: ${P.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(D==null?void 0:D.fontFamily)||"Inter, sans-serif"};
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
  color: ${(D==null?void 0:D.textColor)||"#1a1a2e"};
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
  background: ${(D==null?void 0:D.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(p==null?void 0:p.showProgress)===!1?"none":"block"};
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
`}function H(D="html"){return`
(function () {
  var exportMode = ${JSON.stringify(D)};
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
`}async function L(){return M("html")}async function a(){return M("iframe")}async function $(){return M("pdf")}async function M(D="html"){var Fe,J,se;const p=v.value;if(!p)return;y.value="processing";const U=D==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(D==="pdf"&&!U){y.value="error",setTimeout(()=>y.value="",3e3);return}const P=D==="pdf"?null:new al,W=P?P.folder("assets"):null;let j=0;async function k(oe,te="media"){if((!oe||oe.startsWith("data:")||oe.startsWith("http://localhost")||oe.startsWith("blob:"))&&oe.startsWith("data:"))return oe;try{const ge=await(await fetch(oe)).blob();if(D==="pdf")return await F(ge);let z="bin";const I=ge.type;if(I.includes("image/png")?z="png":I.includes("image/jpeg")?z="jpg":I.includes("image/gif")?z="gif":I.includes("image/svg")?z="svg":I.includes("image/webp")?z="webp":I.includes("video/mp4")?z="mp4":I.includes("audio/mpeg")&&(z="mp3"),z==="bin"){const x=oe.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);x&&(z=x[1])}j++;const q=`${te}_${j}.${z}`;return W.file(q,ge),`assets/${q}`}catch($e){return console.warn("Could not fetch asset:",oe,$e),oe}}const E=JSON.parse(JSON.stringify([...p.slides||[]])).sort((oe,te)=>(oe.order??0)-(te.order??0));if(O.value)for(const oe of E){oe.backgroundType==="image"&&oe.backgroundImage&&(oe.backgroundImage=await k(oe.backgroundImage,"bg"));for(const te of oe.elements||[])te.type==="image"&&((Fe=te.content)!=null&&Fe.src)&&(te.content.src=await k(te.content.src,"img")),te.type==="video"&&((J=te.content)!=null&&J.src)&&!te.content.src.includes("youtube")&&!te.content.src.includes("youtu.be")&&(te.content.src=await k(te.content.src,"vid")),te.type==="audio"&&((se=te.content)!=null&&se.src)&&(te.content.src=await k(te.content.src,"aud"))}const ae=re(b.value||p.name||"presentation"),X={name:p.name,theme:p.theme||{},settings:p.settings||{},slides:E},ee=JSON.stringify(X).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),ve=me(p.theme,p.settings,D),fe=H(D),Ee=`<script id="lf-data" type="application/json">${ee}<\/script>`,Ce=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ae}</title>
${D==="pdf"?`<style>${ve}</style>`:'<link rel="stylesheet" href="style.css">'}
</head>
<body class="${D==="iframe"?"is-iframe":D==="pdf"?"is-pdf":""}">
<div class="lf-shell">
<div class="progress" id="progress"></div>
<div class="lf-grid"></div>
<div class="lf-stage-shell">
  <div class="presentation" id="presentation"></div>
</div>
<div class="dot-nav" id="dot-nav"></div>
<nav class="nav">
  <button class="nav-btn" id="prev-btn" type="button">← Prev</button>
  <span class="nav-counter" id="counter">1 / ${E.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${Ee}
${D!=="pdf"?'<script src="script.js"><\/script>':`<script>${fe}<\/script>`}
</body>
</html>`;if(D==="pdf"){U.document.open(),U.document.write(Ce),U.document.close(),y.value="success",setTimeout(()=>y.value="",3e3);return}P.file("index.html",Ce),P.file("style.css",ve),P.file("script.js",fe);const Ie=await P.generateAsync({type:"blob"}),Ge=URL.createObjectURL(Ie),Ye=document.createElement("a");Ye.href=Ge,Ye.download=`${ae}.zip`,Ye.click(),URL.revokeObjectURL(Ge),y.value="success",setTimeout(()=>y.value="",3e3)}return(D,p)=>(l(),Xe(Wn,{title:"Export Project",size:"md",onClose:p[13]||(p[13]=U=>A(s).showExportModal=!1)},{footer:pt(()=>[e("button",{class:"btn btn-secondary",onClick:p[12]||(p[12]=U=>A(s).showExportModal=!1)},"Close")]),default:pt(()=>{var U,P,W,j,k;return[A(c).user?(l(),i(K,{key:1},[e("div",kf,[e("button",{class:Q(["tab-btn",h.value==="json"&&"active"]),onClick:p[2]||(p[2]=E=>h.value="json")},"JSON",2),e("button",{class:Q(["tab-btn",h.value==="html"&&"active"]),onClick:p[3]||(p[3]=E=>h.value="html")},"HTML",2),e("button",{class:Q(["tab-btn",h.value==="iframe"&&"active"]),onClick:p[4]||(p[4]=E=>h.value="iframe")},"Iframe",2),e("button",{class:Q(["tab-btn",h.value==="pdf"&&"active"]),onClick:p[5]||(p[5]=E=>h.value="pdf")},"PDF",2),e("button",{class:Q(["tab-btn",h.value==="scorm"&&"active"]),onClick:p[6]||(p[6]=E=>h.value="scorm")},"SCORM",2)]),e("div",Cf,[h.value==="json"?(l(),i(K,{key:0},[p[24]||(p[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",$f,[e("div",Sf,[p[19]||(p[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),de(e("input",{type:"text","onUpdate:modelValue":p[7]||(p[7]=E=>b.value=E),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ye,b.value]])])]),e("div",If,[e("div",Af,[p[20]||(p[20]=e("span",null,"Project",-1)),e("strong",null,C((U=v.value)==null?void 0:U.name),1)]),e("div",Mf,[p[21]||(p[21]=e("span",null,"Slides",-1)),e("strong",null,C(((W=(P=v.value)==null?void 0:P.slides)==null?void 0:W.length)||0),1)]),e("div",Ef,[p[22]||(p[22]=e("span",null,"Elements",-1)),e("strong",null,C(((k=(j=v.value)==null?void 0:j.slides)==null?void 0:k.reduce((E,ae)=>{var X;return E+(((X=ae.elements)==null?void 0:X.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:be},[...p[23]||(p[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Download JSON ",-1)])])],64)):h.value==="html"?(l(),i(K,{key:1},[p[28]||(p[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",Pf,[e("div",Tf,[p[25]||(p[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),de(e("input",{type:"text","onUpdate:modelValue":p[8]||(p[8]=E=>b.value=E),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ye,b.value]])]),e("label",Nf,[de(e("input",{type:"checkbox","onUpdate:modelValue":p[9]||(p[9]=E=>O.value=E)},null,512),[[Et,O.value]]),p[26]||(p[26]=Z(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),p[29]||(p[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:L},[...p[27]||(p[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Download HTML ",-1)])])],64)):h.value==="iframe"?(l(),i(K,{key:2},[p[33]||(p[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",zf,[e("div",Bf,[p[30]||(p[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),de(e("input",{type:"text","onUpdate:modelValue":p[10]||(p[10]=E=>b.value=E),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ye,b.value]])]),e("label",Lf,[de(e("input",{type:"checkbox","onUpdate:modelValue":p[11]||(p[11]=E=>O.value=E)},null,512),[[Et,O.value]]),p[31]||(p[31]=Z(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...p[32]||(p[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Download Iframe Zip ",-1)])])],64)):h.value==="pdf"?(l(),i(K,{key:3},[p[35]||(p[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),p[36]||(p[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:$},[...p[34]||(p[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Generate PDF ",-1)])])],64)):h.value==="scorm"?(l(),i(K,{key:4},[p[40]||(p[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",_f,[(l(),i("svg",jf,[...p[37]||(p[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),p[38]||(p[38]=e("h4",null,"Coming Soon",-1)),p[39]||(p[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):G("",!0),gt(Mt,{name:"fade"},{default:pt(()=>[y.value==="processing"?(l(),i("div",Df,[...p[41]||(p[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),Z(" Generating package... Please wait. ",-1)])])):y.value==="success"?(l(),i("div",qf,[...p[42]||(p[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),Z(" Export successful! Check your downloads folder. ",-1)])])):G("",!0)]),_:1})])],64)):(l(),i("div",yf,[(l(),i("svg",xf,[...p[14]||(p[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),p[17]||(p[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),p[18]||(p[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",wf,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:p[0]||(p[0]=E=>A(c).loginWithGoogle())},[...p[15]||(p[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),Z(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:p[1]||(p[1]=E=>A(c).loginWithMicrosoft())},[...p[16]||(p[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),Z(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Ff=He(Rf,[["__scopeId","data-v-1a8a69d1"]]),Of={key:0,class:"editor-view"},Uf={class:"editor-topbar"},Vf={class:"topbar-left"},Wf={class:"project-name-wrap"},Gf=["value"],Hf={class:"save-label"},Yf={class:"topbar-center"},Qf={key:0,class:"slide-position"},Xf={class:"topbar-right"},Jf={class:"editor-body"},Kf={class:"authoring-rail"},Zf=["onClick","data-tooltip"],em={key:0,class:"rail-icon"},tm={key:1,class:"rail-icon"},om={key:2,class:"rail-icon"},nm={key:3,class:"rail-icon"},lm={key:4,class:"rail-icon"},im={key:5,class:"rail-icon"},am={key:6,class:"rail-icon"},sm={key:7,class:"rail-icon"},rm={key:8,class:"rail-icon"},um={key:9,class:"rail-icon"},dm={class:"right-panel"},cm={class:"panel-tabs"},pm=["onClick","data-tooltip"],vm={class:"tab-icon"},fm={class:"tab-label"},mm={class:"panel-content"},gm={key:1,class:"editor-not-found"},bm={__name:"EditorView",setup(S){const s=Un(),r=On(),c=nt(),v=lt(),h=Pn(),y=N(()=>s.params.id),b=N(()=>v.getProject(y.value)),O=N(()=>Pt(b.value)),be=N(()=>{var z;return[...((z=b.value)==null?void 0:z.slides)||[]].sort((I,q)=>I.order-q.order)}),re=_(null),F=_(!1),me=_("deck"),{aiStore:H,showAIModal:L,aiMode:a,aiTopic:$,aiContext:M,aiProjectName:D,aiSlideCount:p,aiQuestionCount:U,aiDifficulty:P,aiQuestionType:W,aiCreationError:j,aiSubmitting:k,aiProjectNamePlaceholder:E,aiPrimaryActionLabel:ae,openAICreationModal:X,createAIProject:ee}=Gn({onRequireAuth:()=>r.push({name:"dashboard"})});let ve=!1,fe=null;Je(()=>b.value,z=>{if(z){if(ve){ve=!1;return}fe&&clearTimeout(fe),fe=setTimeout(()=>{c.pushHistory(z)},600)}},{deep:!0}),Je(()=>h.isAuthReady,async z=>{var I;if(z){if((I=h.user)!=null&&I.uid&&await v.ensureRemoteProjectsLoaded(),!b.value){r.push({name:"dashboard"});return}c.setProject(y.value),be.value.length>0&&c.setCurrentSlide(be.value[0].id),c.pushHistory(b.value)}},{immediate:!0});const Ee=N(()=>{const z=b.value;return z?`Saved ${new Date(z.updatedAt).toLocaleTimeString()}`:""}),ze=N(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});sl({undo:()=>{if(c.canUndo()){const z=c.undo();z&&(ve=!0,v.updateProject(y.value,z))}},redo:()=>{if(c.canRedo()){const z=c.redo();z&&(ve=!0,v.updateProject(y.value,z))}},delete:()=>{c.selectedElementId&&(v.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var I,q,x,he;const z=(he=(x=(q=(I=b.value)==null?void 0:I.slides)==null?void 0:q.find(Se=>Se.id===c.currentSlideId))==null?void 0:x.elements)==null?void 0:he.find(Se=>Se.id===c.selectedElementId);z&&c.setClipboard(z)},paste:()=>{if(c.clipboard&&c.currentSlideId){const z=c.clipboard;v.addElement(c.projectId,c.currentSlideId,z.type,{...z,x:z.x+20,y:z.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const z=v.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);z&&c.selectElement(z.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(z,I)=>{var x,he,Se,Le;if(!c.selectedElementId)return;const q=(Le=(Se=(he=(x=b.value)==null?void 0:x.slides)==null?void 0:he.find(Pe=>Pe.id===c.currentSlideId))==null?void 0:Se.elements)==null?void 0:Le.find(Pe=>Pe.id===c.selectedElementId);q&&v.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:q.x+z,y:q.y+I})},selectAll:()=>{var I,q,x;(((x=(q=(I=b.value)==null?void 0:I.slides)==null?void 0:q.find(he=>he.id===c.currentSlideId))==null?void 0:x.elements)||[]).forEach((he,Se)=>c.selectElement(he.id,Se>0))}});function Ce(){r.push({name:"dashboard"})}function Ie(){r.push({name:"preview",params:{id:y.value},query:{from:"editor"}})}function Ge(z="deck"){me.value=z,F.value=!0}function Ye(){F.value=!1,X(me.value)}function Fe(z,I="Image"){if(!c.projectId||!c.currentSlideId||!z)return;const q=new Image;q.onload=()=>{const Se=Math.min(420/q.width,280/q.height,1),Le=Math.max(120,Math.round(q.width*Se)),Pe=Math.max(80,Math.round(q.height*Se)),Ue=Math.max(24,Math.round((O.value.width-Le)/2)),dt=Math.max(24,Math.round((O.value.height-Pe)/2)),Qe=v.addElement(c.projectId,c.currentSlideId,"image",{x:Ue,y:dt,width:Le,height:Pe,content:{src:z,alt:I,objectFit:"cover"}});Qe&&(c.selectElement(Qe.id),c.setRightPanel("properties"),c.setActiveTool("select"))},q.src=z}function J(z){const[I]=Array.from(z.target.files||[]);if(!I||!I.type.startsWith("image/"))return;const q=new FileReader;q.onload=()=>Fe(String(q.result||""),I.name),q.readAsDataURL(I),z.target.value=""}function se(){var z;(z=re.value)==null||z.click()}const oe=[{id:"text",label:"Text"},{id:"blocks",label:"Blocks"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function te(z){if(z==="text"){c.setActiveTool("text");return}if(z==="blocks"){c.openLeftPanel("blocks");return}if(z==="resources"){c.setActiveTool("image");return}if(z==="interactive-elements"){c.setActiveTool("hotspot");return}if(z==="interactive-questions"){c.setActiveTool("quiz");return}if(z==="widgets"){c.setActiveTool("shape");return}if(z==="insert"){se();return}if(z==="style"){c.setRightPanel("properties");return}if(z==="background"){c.clearSelection(),c.setRightPanel("properties");return}z==="pages"&&c.toggleSlidePanel("slides")}function $e(z){return z==="text"?["text","heading"].includes(c.activeTool):z==="blocks"?c.showSlidePanel&&c.leftPanelTab==="blocks":z==="resources"?c.activeTool==="image":z==="interactive-elements"?["hotspot","button"].includes(c.activeTool):z==="interactive-questions"?c.activeTool==="quiz":z==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):z==="insert"?!1:z==="style"||z==="background"?c.rightPanelTab==="properties":z==="pages"?c.showSlidePanel:!1}function ge(){Qn({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return Je(()=>b.value,z=>{z&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{ge()},100)},{immediate:!0}),(z,I)=>b.value?(l(),i("div",Of,[e("input",{ref_key:"imageInputRef",ref:re,type:"file",accept:"image/*",class:"sr-only",onChange:J},null,544),e("header",Uf,[e("div",Vf,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:Ce,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...I[14]||(I[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),Z(" Dashboard ",-1)])]),e("div",Wf,[e("input",{value:b.value.name,class:"project-name-input",onChange:I[0]||(I[0]=q=>A(v).updateProject(y.value,{name:q.target.value}))},null,40,Gf)]),e("span",Hf,C(Ee.value),1)]),e("div",Yf,[A(c).currentSlideId?(l(),i("span",Qf," Slide "+C(be.value.findIndex(q=>q.id===A(c).currentSlideId)+1)+" of "+C(be.value.length),1)):G("",!0)]),e("div",Xf,[e("button",{class:"btn btn-ghost btn-sm",onClick:ge,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...I[15]||(I[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),Z(" Help ",-1)])]),e("button",{class:Q(["btn btn-ghost btn-sm",A(c).showAIPanel&&"active-btn"]),onClick:I[1]||(I[1]=q=>{A(c).showAIPanel=!A(c).showAIPanel,A(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...I[16]||(I[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Z(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:I[2]||(I[2]=q=>{A(c).showThemeManager=!A(c).showThemeManager,A(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...I[17]||(I[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),Z(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:Ie,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...I[18]||(I[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),Z(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:I[3]||(I[3]=q=>A(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...I[19]||(I[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Z(" Export ",-1)])])])]),gt(Mc,{onOpenAiProject:Ge}),e("div",Jf,[e("aside",Kf,[(l(),i(K,null,ce(oe,q=>e("button",{key:q.id,class:Q(["rail-option",$e(q.id)&&"active"]),onClick:x=>te(q.id),"data-tooltip":q.label,"data-tooltip-position":"right"},[q.id==="text"?(l(),i("span",em,"T")):q.id==="blocks"?(l(),i("span",tm,[...I[20]||(I[20]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-e651b38e><rect x="3" y="4" width="8" height="7" rx="1.5" data-v-e651b38e></rect><rect x="13" y="4" width="8" height="5" rx="1.5" data-v-e651b38e></rect><rect x="3" y="13" width="8" height="7" rx="1.5" data-v-e651b38e></rect><rect x="13" y="11" width="8" height="9" rx="1.5" data-v-e651b38e></rect></svg>',1)])])):q.id==="resources"?(l(),i("span",om,[...I[21]||(I[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):q.id==="interactive-elements"?(l(),i("span",nm,[...I[22]||(I[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):q.id==="interactive-questions"?(l(),i("span",lm,[...I[23]||(I[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):q.id==="widgets"?(l(),i("span",im,[...I[24]||(I[24]=[et('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-e651b38e><rect x="3" y="3" width="7" height="7" data-v-e651b38e></rect><rect x="14" y="3" width="7" height="7" data-v-e651b38e></rect><rect x="14" y="14" width="7" height="7" data-v-e651b38e></rect><rect x="3" y="14" width="7" height="7" data-v-e651b38e></rect></svg>',1)])])):q.id==="insert"?(l(),i("span",am,[...I[25]||(I[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):q.id==="style"?(l(),i("span",sm,[...I[26]||(I[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):q.id==="background"?(l(),i("span",rm,[...I[27]||(I[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):q.id==="pages"?(l(),i("span",um,[...I[28]||(I[28]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):G("",!0),Z(" "+C(q.label),1)],10,Zf)),64))]),gt(Mt,{name:"side-panel-slide"},{default:pt(()=>[A(c).showSlidePanel&&A(c).leftPanelTab==="slides"?(l(),Xe(kl,{key:0})):G("",!0)]),_:1}),gt(Mt,{name:"side-panel-slide"},{default:pt(()=>[A(c).showSlidePanel&&A(c).leftPanelTab==="blocks"?(l(),Xe(Ul,{key:0})):G("",!0)]),_:1}),gt(Ip),e("aside",dm,[e("div",cm,[(l(),i(K,null,ce([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],q=>e("button",{key:q.id,class:Q(["panel-tab",A(c).rightPanelTab===q.id&&"active"]),onClick:x=>A(c).setRightPanel(q.id),"data-tooltip":`Open ${q.label}`,"data-tooltip-position":"bottom"},[e("span",vm,C(q.icon),1),e("span",fm,C(q.label),1)],10,pm)),64))]),e("div",mm,[gt(Mt,{name:"editor-panel-switch",mode:"out-in"},{default:pt(()=>[(l(),i("div",{key:ze.value,class:"panel-content-view"},[A(c).rightPanelTab==="properties"?(l(),Xe(rc,{key:0})):A(c).rightPanelTab==="layers"?(l(),Xe(di,{key:1})):A(c).rightPanelTab==="ai"?(l(),Xe(R1,{key:2})):A(c).rightPanelTab==="theme"?(l(),Xe(hf,{key:3})):G("",!0)]))]),_:1})])])]),A(c).showExportModal?(l(),Xe(Ff,{key:0})):G("",!0),F.value?(l(),Xe(Hn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:I[4]||(I[4]=q=>F.value=!1),onConfirm:Ye})):G("",!0),A(L)?(l(),Xe(Yn,{key:2,mode:A(a),topic:A($),context:A(M),"project-name":A(D),"slide-count":A(p),"question-count":A(U),difficulty:A(P),"question-type":A(W),"project-name-placeholder":A(E),"primary-action-label":A(ae),"creation-error":A(j),"is-submitting":A(k),"is-generating":A(H).isGenerating,"has-api-key":!!A(H).apiKey,onClose:I[5]||(I[5]=q=>L.value=!1),onCreate:A(ee),"onUpdate:mode":I[6]||(I[6]=q=>a.value=q),"onUpdate:topic":I[7]||(I[7]=q=>$.value=q),"onUpdate:context":I[8]||(I[8]=q=>M.value=q),"onUpdate:projectName":I[9]||(I[9]=q=>D.value=q),"onUpdate:slideCount":I[10]||(I[10]=q=>p.value=q),"onUpdate:questionCount":I[11]||(I[11]=q=>U.value=q),"onUpdate:difficulty":I[12]||(I[12]=q=>P.value=q),"onUpdate:questionType":I[13]||(I[13]=q=>W.value=q)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):G("",!0)])):(l(),i("div",gm,[I[29]||(I[29]=e("h2",null,"Project not found",-1)),I[30]||(I[30]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:Ce},"Go to Dashboard")]))}},Sm=He(bm,[["__scopeId","data-v-e651b38e"]]);export{Sm as default};
