import{K as bn,P as yn,v as n,F as l,B as e,C as $,H as Q,I as re,E as Se,D as V,u as k,Q as de,M as Fe,G as q,L as U,q as _e,R as hn,f as E,r as L,N as ne,S as pt,w as je,O as ge,n as xn,i as Bn,U as Dn,y as st,x as et,T as mt,V as ct,z as _n,p as qn,J as mn}from"./vue-core-DCl8Fgqc.js";import{u as Rn,d as Fn}from"./vue-ecosystem-Da9kls6U.js";import{u as We,c as Un,M as Vn,a as On,C as Wn,A as Gn,b as Hn}from"./ConfirmActionModal-BATrjF1G.js";import{u as Ge,b as Qn,g as vt,C as Yn,n as Jn,p as Kn,s as Xn,m as wn,f as kn,c as Cn,d as Zn,e as el,h as gn,a as $n}from"./projectStore-DkdoxE9r.js";import{_ as Be}from"./index-DuzA2Uy0.js";import{C as tl}from"./ChartElement-BvEjg_EJ.js";import{J as ol}from"./jszip-529iNPX7.js";function nl(y){function s(r){var c,z,ie,X,j,Z,oe,_,a,h,w,B,f,D,ee,be,ve;const u=r.ctrlKey||r.metaKey,p=r.key.toLowerCase(),m=r.target.tagName.toLowerCase(),b=m==="input"||m==="textarea"||r.target.isContentEditable;b&&u&&["c","v","x","a","z","y"].includes(p)||(u&&p==="z"&&!r.shiftKey?(r.preventDefault(),(c=y.undo)==null||c.call(y)):u&&(p==="y"||p==="z"&&r.shiftKey)?(r.preventDefault(),(z=y.redo)==null||z.call(y)):u&&p==="c"?(r.preventDefault(),(ie=y.copy)==null||ie.call(y)):u&&p==="v"?(r.preventDefault(),(X=y.paste)==null||X.call(y)):u&&p==="x"?(r.preventDefault(),(j=y.cut)==null||j.call(y)):u&&p==="d"?(r.preventDefault(),(Z=y.duplicate)==null||Z.call(y)):u&&p==="a"?(r.preventDefault(),(oe=y.selectAll)==null||oe.call(y)):p==="delete"||p==="backspace"?b||(r.preventDefault(),(_=y.delete)==null||_.call(y)):p==="escape"?(a=y.escape)==null||a.call(y):u&&p==="g"?(r.preventDefault(),(h=y.toggleGrid)==null||h.call(y)):u&&p==="="||u&&p==="+"?(r.preventDefault(),(w=y.zoomIn)==null||w.call(y)):u&&p==="-"?(r.preventDefault(),(B=y.zoomOut)==null||B.call(y)):u&&p==="0"?(r.preventDefault(),(f=y.zoomReset)==null||f.call(y)):p==="arrowleft"?(D=y.nudge)==null||D.call(y,-1,0):p==="arrowright"?(ee=y.nudge)==null||ee.call(y,1,0):p==="arrowup"?(be=y.nudge)==null||be.call(y,0,-1):p==="arrowdown"&&((ve=y.nudge)==null||ve.call(y,0,1)))}bn(()=>window.addEventListener("keydown",s)),yn(()=>window.removeEventListener("keydown",s))}const ll={class:"slide-panel"},il={class:"slide-panel-header"},al={class:"slide-count"},sl={class:"slides-list"},rl=["onClick","onContextmenu","onDragstart","onDrop"],dl={class:"slide-number"},ul=["viewBox"],cl=["x","y","width","height","fill"],pl=["d","stroke"],vl=["d","fill"],fl={class:"slide-footer"},ml={class:"slide-title"},gl=["onClick"],bl={__name:"SlidePanel",setup(y){const s=We(),r=Ge(),u=E(()=>r.getProject(s.projectId)),p=E(()=>vt(u.value)),m=E(()=>{var N,T;return((T=(N=u.value)==null?void 0:N.slides)==null?void 0:T.slice().sort((W,ae)=>W.order-ae.order))||[]}),b=L({show:!1,x:0,y:0,slideId:null});function c(N){s.setCurrentSlide(N)}function z(){const N=m.value.findIndex(W=>W.id===s.currentSlideId),T=r.addSlide(s.projectId,N);T&&s.setCurrentSlide(T.id)}function ie(N){var ae,Y;const T=m.value.findIndex(fe=>fe.id===N);r.deleteSlide(s.projectId,N);const W=((ae=u.value)==null?void 0:ae.slides)||[];if(W.length>0){const fe=W.slice().sort((Ee,we)=>Ee.order-we.order),me=Math.min(T,fe.length-1);s.setCurrentSlide((Y=fe[me])==null?void 0:Y.id)}}function X(N,T){N.preventDefault(),b.value={show:!0,x:N.clientX,y:N.clientY,slideId:T},setTimeout(()=>window.addEventListener("click",j,{once:!0}),0)}function j(){b.value.show=!1}function Z(){const N=r.duplicateSlide(s.projectId,b.value.slideId);N&&s.setCurrentSlide(N.id),j()}function oe(){ie(b.value.slideId),j()}function _(N,T){N.stopPropagation(),ie(T)}function a(){const N=m.value.findIndex(T=>T.id===b.value.slideId);N>0&&r.reorderSlides(s.projectId,N,N-1),j()}function h(){const N=m.value.findIndex(T=>T.id===b.value.slideId);N<m.value.length-1&&r.reorderSlides(s.projectId,N,N+1),j()}let w=-1;function B(N,T){w=T,N.dataTransfer.effectAllowed="move"}function f(N,T){N.preventDefault(),w!==-1&&w!==T&&r.reorderSlides(s.projectId,w,T),w=-1}function D(N){return N.backgroundType==="gradient"&&N.backgroundGradient?{background:N.backgroundGradient}:N.backgroundType==="image"&&N.backgroundImage?{backgroundImage:`url(${N.backgroundImage})`,backgroundSize:"cover"}:{background:N.background||"#fff"}}function ee(N){return{left:N.x/p.value.width*100+"%",top:N.y/p.value.height*100+"%",width:N.width/p.value.width*100+"%",height:N.height/p.value.height*100+"%"}}function be(N){var T,W;return{background:N.type==="shape"?(T=N.content)==null?void 0:T.fillColor:N.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:N.type==="shape"&&((W=N.content)==null?void 0:W.shapeType)==="circle"?"50%":void 0}}function ve(N){var T;return Qn(N.content||{},N.width||420,N.height||280,((T=u.value)==null?void 0:T.theme)||{})}return(N,T)=>(n(),l("div",ll,[e("div",il,[T[2]||(T[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",al,$(m.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:z,"data-tooltip":"Add slide","aria-label":"Add slide"},[...T[1]||(T[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",sl,[(n(!0),l(Q,null,re(m.value,(W,ae)=>(n(),l("div",{key:W.id,class:V(["slide-thumb-item",k(s).currentSlideId===W.id&&"active"]),draggable:"true",onClick:Y=>c(W.id),onContextmenu:Y=>X(Y,W.id),onDragstart:Y=>B(Y,ae),onDragover:T[0]||(T[0]=Se(()=>{},["prevent"])),onDrop:Y=>f(Y,ae)},[e("div",dl,$(ae+1),1),e("div",{class:"slide-thumb",style:de(D(W))},[(n(!0),l(Q,null,re(W.elements.slice(0,6),Y=>{var fe;return n(),l("div",{key:Y.id,class:"mini-element-frame",style:de(ee(Y))},[Y.type==="chart"?(n(),l("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${Y.width||420} ${Y.height||280}`,preserveAspectRatio:"none"},[ve(Y).type==="bar"?(n(!0),l(Q,{key:0},re(ve(Y).cartesian.bars,me=>(n(),l("rect",{key:`mini-bar-${me.id}`,x:me.x,y:me.y,width:me.width,height:me.height,fill:me.color,rx:"6"},null,8,cl))),128)):ve(Y).type==="line"?(n(),l("path",{key:1,d:ve(Y).cartesian.linePath,stroke:((fe=ve(Y).cartesian.points[0])==null?void 0:fe.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,pl)):(n(!0),l(Q,{key:2},re(ve(Y).circle.slices,me=>(n(),l("path",{key:`mini-slice-${me.id}`,d:me.path,fill:me.color},null,8,vl))),128))],8,ul)):(n(),l("div",{key:1,class:"mini-element",style:de(be(Y))},null,4))],4)}),128))],4),e("div",fl,[e("div",ml,$(W.title||`Slide ${ae+1}`),1),m.value.length>1?(n(),l("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:Y=>_(Y,W.id)},[...T[3]||(T[3]=[Fe('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,gl)):q("",!0)])],42,rl))),128))]),e("button",{class:"add-slide-bottom",onClick:z},[...T[4]||(T[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),U(" Add Slide ",-1)])]),(n(),_e(hn,{to:"body"},[b.value.show?(n(),l("div",{key:0,class:"context-menu",style:de({left:b.value.x+"px",top:b.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Z},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:h},"Move Down"),T[5]||(T[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:oe},"Delete Slide")],4)):q("",!0)]))]))}},yl=Be(bl,[["__scopeId","data-v-30eea542"]]),hl={class:"layer-panel"},xl={class:"layer-header panel-section"},wl={class:"panel-title",style:{"margin-bottom":"0"}},kl={class:"layer-count"},Cl={key:0,class:"layers-empty"},$l={key:1,class:"layers-list"},Sl=["onClick"],Il={class:"layer-type-icon"},Al={class:"layer-name"},El={class:"layer-actions"},Ml=["onClick","data-tooltip"],Pl={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},zl={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Tl=["onClick","data-tooltip"],Nl={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ll={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},jl=["onClick"],Bl=["onClick"],Dl=["onClick"],_l={__name:"LayerPanel",setup(y){const s=We(),r=Ge(),u=E(()=>r.getProject(s.projectId)),p=E(()=>{var _,a;return(a=(_=u.value)==null?void 0:_.slides)==null?void 0:a.find(h=>h.id===s.currentSlideId)}),m=E(()=>{var _;return[...((_=p.value)==null?void 0:_.elements)||[]].sort((a,h)=>(h.zIndex||0)-(a.zIndex||0))});function b(_){s.selectElement(_)}function c(_){r.updateElement(s.projectId,s.currentSlideId,_.id,{visible:!_.visible})}function z(_){r.updateElement(s.projectId,s.currentSlideId,_.id,{locked:!_.locked})}function ie(_){r.reorderElement(s.projectId,s.currentSlideId,_,"up")}function X(_){r.reorderElement(s.projectId,s.currentSlideId,_,"down")}function j(_){r.deleteElement(s.projectId,s.currentSlideId,_),s.selectedElementId===_&&s.clearSelection()}function Z(_){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[_]||"◆"}function oe(_){var a,h,w;return(a=_.content)!=null&&a.text?_.content.text.slice(0,24):(h=_.content)!=null&&h.label?_.content.label:(w=_.content)!=null&&w.question?_.content.question.slice(0,24):_.type.charAt(0).toUpperCase()+_.type.slice(1)}return(_,a)=>(n(),l("div",hl,[e("div",xl,[e("div",wl,[a[0]||(a[0]=U(" Layers ",-1)),e("span",kl,$(m.value.length),1)])]),m.value.length===0?(n(),l("div",Cl,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(n(),l("div",$l,[(n(!0),l(Q,null,re(m.value,h=>(n(),l("div",{key:h.id,class:V(["layer-item",k(s).selectedElementIds.includes(h.id)&&"selected",h.locked&&"locked",!h.visible&&"hidden"]),onClick:w=>b(h.id)},[e("span",Il,$(Z(h.type)),1),e("span",Al,$(oe(h)),1),e("div",El,[e("button",{class:V(["layer-action-btn",{active:h.visible}]),onClick:Se(w=>c(h),["stop"]),"data-tooltip":h.visible?"Hide":"Show"},[h.visible?(n(),l("svg",Pl,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(n(),l("svg",zl,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,Ml),e("button",{class:V(["layer-action-btn",{active:h.locked}]),onClick:Se(w=>z(h),["stop"]),"data-tooltip":h.locked?"Unlock":"Lock"},[h.locked?(n(),l("svg",Nl,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(n(),l("svg",Ll,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,Tl),e("button",{class:"layer-action-btn",onClick:Se(w=>ie(h.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,jl),e("button",{class:"layer-action-btn",onClick:Se(w=>X(h.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Bl),e("button",{class:"layer-action-btn danger",onClick:Se(w=>j(h.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Dl)])],10,Sl))),128))]))]))}},ql=Be(_l,[["__scopeId","data-v-7407acd8"]]),Rl={class:"panel-section"},Fl={class:"preset-toolbar"},Ul=["value"],Vl=["value"],Ol=["value"],Wl={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},Gl=["onClick"],Hl={class:"preset-meta-chip muted"},Ql={key:1,class:"import-review"},Yl={class:"motion-scrubber-header"},Jl={class:"preset-toolbar compact"},Kl=["value"],Xl=["value"],Zl={class:"import-list"},ei=["onUpdate:modelValue"],ti={class:"import-item-title"},oi={class:"preset-meta-chip"},ni={key:0,class:"preset-meta-chip muted"},li={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(y,{emit:s}){const r=s;return(u,p)=>(n(),l("div",Rl,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",Fl,[e("input",{value:y.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=m=>r("update:searchQuery",m.target.value))},null,40,Ul),e("select",{value:y.categoryFilter,class:"select",onChange:p[1]||(p[1]=m=>r("update:categoryFilter",m.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(n(!0),l(Q,null,re(y.availableCategories,m=>(n(),l("option",{key:`library-${m}`,value:m},$(m),9,Ol))),128))],40,Vl),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=m=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=m=>r("export-presets"))},"Export")]),y.recentPresets.length?(n(),l("div",Wl,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(n(!0),l(Q,null,re(y.recentPresets,m=>(n(),l("div",{class:"preset-item",key:`recent-${m.id}`},[e("button",{type:"button",class:"preset-chip",onClick:b=>r("apply-preset",m)},$(m.name),9,Gl),e("span",Hl,"Used "+$(m.usageCount)+"x",1)]))),128))])):q("",!0),y.pendingImportedPresets.length?(n(),l("div",Ql,[e("div",Yl,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=m=>r("clear-imports"))},"Discard")]),e("div",Jl,[e("select",{value:y.importScopeFilter,class:"select",onChange:p[5]||(p[5]=m=>r("update:importScopeFilter",m.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Kl),e("select",{value:y.importConflictMode,class:"select",onChange:p[6]||(p[6]=m=>r("update:importConflictMode",m.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Xl),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=m=>r("apply-imports"))},"Merge Selected")]),e("div",Zl,[(n(!0),l(Q,null,re(y.filteredPendingImports,m=>(n(),l("label",{key:`pending-${m.id}`,class:"import-item"},[ne(e("input",{"onUpdate:modelValue":b=>m.selected=b,type:"checkbox"},null,8,ei),[[pt,m.selected]]),e("span",ti,$(m.name),1),e("span",oi,$(m.scope),1),m.category?(n(),l("span",ni,$(m.category),1)):q("",!0)]))),128))])])):q("",!0)]))}},ii=Be(li,[["__scopeId","data-v-61f99273"]]),ai={key:1,class:"panel-section"},si={class:"field-hint"},ri={class:"motion-scrubber-shell"},di={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},ui=["onClick"],ci={class:"motion-preview"},pi={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},vi={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},fi={class:"motion-card-label"},mi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},gi={class:"form-group"},bi={class:"form-group"},yi={class:"form-group",style:{"margin-top":"var(--space-3)"}},hi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},xi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},wi={key:0,class:"preset-list"},ki=["onDragstart","onDragenter","onDrop"],Ci=["onClick"],$i={key:0,class:"preset-meta-chip"},Si=["onClick"],Ii=["onClick"],Ai=["onClick"],Ei={key:1,class:"preset-row preset-edit-row"},Mi=["onClick"],Pi={key:1,class:"field-hint"},zi={key:2,class:"panel-section"},Ti={class:"slide-settings-tabs"},Ni={key:0,class:"slide-settings-pane"},Li={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ji={class:"form-group"},Bi={class:"bg-type-tabs"},Di=["onClick"],_i={key:0,class:"color-row"},qi=["value"],Ri=["value"],Fi={class:"slide-settings-subsection"},Ui={class:"canvas-size-grid"},Vi=["onClick"],Oi={class:"canvas-size-icon-shell"},Wi={class:"canvas-size-name"},Gi={class:"canvas-size-ratio"},Hi={class:"canvas-custom-card"},Qi={class:"canvas-custom-header"},Yi={class:"field-hint"},Ji={class:"canvas-custom-inputs"},Ki={class:"form-group"},Xi={class:"canvas-size-input-wrap"},Zi=["value"],ea={class:"form-group"},ta={class:"canvas-size-input-wrap"},oa=["value"],na={class:"check-row canvas-size-lock"},la={class:"slide-settings-subsection"},ia={key:1,class:"slide-settings-pane"},aa=["value"],sa={class:"form-group",style:{"margin-top":"var(--space-3)"}},ra=["value"],da={class:"check-row"},ua=["checked"],ca={key:2,class:"slide-settings-pane"},pa={class:"check-row"},va=["checked"],fa={class:"check-row"},ma=["checked"],ga={class:"check-row"},ba=["checked"],ya={class:"check-row"},ha=["checked"],xa={class:"check-row"},wa=["checked"],ka={class:"panel-title"},Ca={class:"element-type-badge"},$a={class:"geo-grid"},Sa={class:"form-group"},Ia=["value"],Aa={class:"form-group"},Ea=["value"],Ma={class:"form-group"},Pa=["value"],za={class:"form-group"},Ta=["value"],Na={class:"form-group"},La=["value"],ja={class:"form-group"},Ba=["value"],Da={class:"motion-scrubber-shell"},_a={class:"motion-card-grid"},qa=["onClick"],Ra={class:"motion-preview"},Fa={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Ua={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Va={class:"motion-card-label"},Oa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Wa={class:"form-group"},Ga=["value"],Ha={class:"form-group"},Qa=["value"],Ya={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ja={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Ka={key:0,class:"preset-list"},Xa=["onDragstart","onDragenter","onDrop"],Za=["onClick"],es={key:0,class:"preset-meta-chip"},ts=["onClick"],os=["onClick"],ns=["onClick"],ls={key:1,class:"preset-row preset-edit-row"},is=["onClick"],as={key:1,class:"field-hint"},ss={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rs=["value"],ds={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},us={class:"form-group"},cs=["value"],ps={class:"form-group"},vs=["value"],fs={class:"form-group",style:{"margin-top":"var(--space-3)"}},ms=["value"],gs=["value"],bs={class:"form-group",style:{"margin-top":"var(--space-3)"}},ys={class:"align-btns"},hs=["onClick"],xs={class:"form-group",style:{"margin-top":"var(--space-3)"}},ws={class:"style-btns"},ks={class:"form-group",style:{"margin-top":"var(--space-3)"}},Cs={class:"color-row"},$s=["value"],Ss=["value"],Is={class:"form-group",style:{"margin-top":"var(--space-3)"}},As=["value"],Es={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ms={class:"form-group"},Ps=["value"],zs={class:"form-group"},Ts=["value"],Ns={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ls=["value"],js={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Bs=["value"],Ds={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_s=["value"],qs={class:"form-group"},Rs=["value"],Fs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Us={class:"form-group"},Vs=["value"],Os={class:"form-group"},Ws=["value"],Gs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hs=["value"],Qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ys={class:"color-row"},Js=["value"],Ks=["value"],Xs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Zs={class:"color-row"},er=["value"],tr=["value"],or={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nr=["value"],lr={class:"form-group"},ir=["value"],ar={class:"form-group",style:{"margin-top":"var(--space-3)"}},sr=["value"],rr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},dr=["value"],ur={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},cr=["value"],pr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vr=["value"],fr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},mr={class:"chart-data-actions"},gr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},br=["value","placeholder"],yr={class:"chart-palette-preview"},hr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},xr={class:"form-group"},wr=["value"],kr={class:"form-group"},Cr=["value"],$r={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Sr={class:"form-group"},Ir=["value"],Ar={class:"form-group"},Er=["value"],Mr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Pr={class:"form-group"},zr=["value"],Tr={key:0,class:"form-group"},Nr=["value"],Lr={key:1,class:"form-group"},jr=["value"],Br={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Dr={class:"form-group"},_r=["value"],qr={class:"check-row",style:{"margin-top":"20px"}},Rr=["checked"],Fr={class:"check-row"},Ur=["checked"],Vr={key:1,class:"check-row"},Or=["checked"],Wr={class:"check-row"},Gr=["checked"],Hr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qr=["value"],Yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Jr=["value"],Kr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xr=["value"],Zr={key:0,class:"form-group"},ed=["value"],td={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},od={class:"form-group"},nd=["value"],ld={class:"form-group"},id=["value"],ad={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},sd={class:"form-group"},rd=["value"],dd={class:"form-group"},ud=["value"],cd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},pd={class:"form-group"},vd=["value"],fd={class:"form-group"},md=["value"],gd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},bd={class:"form-group"},yd=["value"],hd=["value"],xd={class:"form-group"},wd=["value"],kd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cd=["value"],$d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sd={class:"color-row"},Id=["value"],Ad=["value"],Ed={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Md={class:"form-group"},Pd=["value"],zd={class:"form-group"},Td=["value"],Nd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ld=["value"],jd={class:"form-group"},Bd=["value"],Dd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_d={class:"form-group"},qd=["value"],Rd={class:"form-group"},Fd=["value"],Ud={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Vd=["value"],Od={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wd=["value"],Gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hd=["value"],Qd={class:"check-row"},Yd=["checked"],Jd={class:"check-row"},Kd=["checked"],Xd={class:"check-row"},Zd=["checked"],eu={class:"check-row"},tu=["checked"],ou={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nu=["value"],lu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},iu=["value"],au={class:"check-row"},su=["checked"],ru={class:"check-row"},du=["checked"],uu={class:"check-row"},cu=["checked"],pu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},vu={class:"form-group"},fu=["value"],mu={class:"form-group"},gu=["value"],bu={class:"form-group",style:{"margin-top":"var(--space-3)"}},yu=["value"],hu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xu=["value"],wu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ku=["value"],Cu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$u=["value"],Su={class:"form-group"},Iu=["value"],Au={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Eu={class:"form-group"},Mu=["value"],Pu={class:"form-group"},zu=["value"],Tu={class:"form-group",style:{"margin-top":"var(--space-3)"}},Nu=["value"],Lu={class:"panel-section"},ju={class:"actions-list"},Bu={__name:"PropertiesPanel",setup(y){const s=We(),r=Ge(),u=E(()=>r.getProject(s.projectId)),p=E(()=>{var d,t;return(t=(d=u.value)==null?void 0:d.slides)==null?void 0:t.find(M=>M.id===s.currentSlideId)}),m=E(()=>{var d;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((d=u.value)==null?void 0:d.settings)||{}}}),b=E(()=>vt(m.value)),c=E(()=>wn(m.value)),z=E(()=>kn(b.value.width,b.value.height)),ie=L(!0),X=L("canvas"),j=E(()=>Array.isArray(m.value.motionPresets)?m.value.motionPresets:[]),Z=E(()=>j.value.filter(d=>d.scope!=="group")),oe=E(()=>j.value.filter(d=>d.scope==="group")),_=E(()=>{var t;const d=new Set(s.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(M=>d.has(M.id))}),a=E(()=>{var d,t;return s.selectedElementId?(t=(d=p.value)==null?void 0:d.elements)==null?void 0:t.find(M=>M.id===s.selectedElementId):null}),h=E(()=>s.multiSelection||!!a.value),w=E(()=>s.multiSelection?"group":"single"),B=E(()=>{var t,M;const d=(M=(t=a.value)==null?void 0:t.animations)==null?void 0:M[0];return{type:(d==null?void 0:d.type)||"auto",delay:Number((d==null?void 0:d.delay)||0),duration:Number((d==null?void 0:d.duration)||.64)}}),f=E(()=>{var ke,Te;const d=_.value.map(Ae=>{var Ze;return((Ze=Ae.animations)==null?void 0:Ze[0])||null}),t=((ke=d[0])==null?void 0:ke.type)||"auto",M=Number(((Te=d[0])==null?void 0:Te.duration)||.64),K=d.every(Ae=>((Ae==null?void 0:Ae.type)||"auto")===t),ye=d.every(Ae=>Number((Ae==null?void 0:Ae.duration)||.64)===M);return{type:K?t:"mixed",duration:ye?M:.64}}),D=L(0),ee=L(0),be=L(""),ve=L(""),N=L(""),T=L(""),W=L(""),ae=L(""),Y=L(""),fe=L(""),me=L(""),Ee=L(""),we=L(""),ce=L(""),Me=L(""),Pe=L("all"),Ne=L(null),ze=L(null),F=L([]),te=L("all"),J=L("replace"),le=L(""),Ce=L(null),ue=L("");let S=null;const x=L({});je(a,d=>{d?x.value=JSON.parse(JSON.stringify(d)):x.value={},(d==null?void 0:d.type)==="chart"&&(le.value="")},{immediate:!0,deep:!0}),je(()=>{var d;return[s.propertiesPanelSection,(d=a.value)==null?void 0:d.id,s.rightPanelTab]},async([d,t,M])=>{var ye;if(!d||!t||M!=="properties")return;await xn();const K=(ye=Ce.value)==null?void 0:ye.querySelector(`[data-props-anchor="${d}"]`);K&&(K.scrollIntoView({behavior:"smooth",block:"start"}),ue.value=d,S&&window.clearTimeout(S),S=window.setTimeout(()=>{ue.value===d&&(ue.value="")},1400))},{immediate:!0});function P(d){a.value&&r.updateElement(s.projectId,s.currentSlideId,a.value.id,d)}function g(d){if(!a.value)return;const t={...a.value.content,...d};P({content:t})}function Ie(d,t){const M=parseFloat(t);isNaN(M)||P({[d]:M})}const he=L({});je(p,d=>{d&&(he.value={...d})},{immediate:!0});function pe(d){p.value&&r.updateSlide(s.projectId,p.value.id,d)}function xe(d){if(!u.value)return;const t={...m.value,...d};r.updateProject(s.projectId,{settings:{...t,...Jn(t)}})}function Ue(d){xe({slideWidth:d.width,slideHeight:d.height})}function Ye(d,t){const M=Math.round(Number(t)||0);if(!M)return;const K={[`slide${d==="width"?"Width":"Height"}`]:M};if(ie.value){const ye=b.value.width,ke=b.value.height;d==="width"?K.slideHeight=Math.round(M*(ke/ye)):K.slideWidth=Math.round(M*(ye/ke))}xe(K)}const Ve=E(()=>{var d;return Cn(((d=u.value)==null?void 0:d.theme)||{})}),rt=E(()=>{var t,M;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const d=((M=a.value.content)==null?void 0:M.paletteText)||Ve.value.paletteText;return Zn(d)});function A(d){const t=Kn(d,{fallbackToDefault:!1});return t.length?Xn(t):""}function i(d){var M;if(((M=a.value)==null?void 0:M.type)!=="chart")return;const t=A(d);t&&(g({dataText:t}),le.value="")}async function R(d){var K;const t=d.target,M=(K=t==null?void 0:t.files)==null?void 0:K[0];if(M)try{const ye=await M.text();i(ye)}finally{t&&(t.value="")}}function se(){var d;(d=ze.value)==null||d.click()}function v(){var t,M;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const d=A(((M=a.value.content)==null?void 0:M.dataText)||"");d&&g({dataText:d})}function I(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&g({...Ve.value})}function O(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&g({paletteText:Ve.value.paletteText})}function G(d){return String(d||"").split(",").map(t=>t.trim()).filter(Boolean)}function C(d){const t=(d==null?void 0:d.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((d==null?void 0:d.name)||"Imported Preset").trim()||"Imported Preset",category:String((d==null?void 0:d.category)||"").trim(),tags:Array.isArray(d==null?void 0:d.tags)?d.tags.map(M=>String(M).trim()).filter(Boolean):G(d==null?void 0:d.tags),type:String((d==null?void 0:d.type)||"auto"),delay:Math.max(0,Number(d==null?void 0:d.delay)||0),duration:Math.max(.1,Number(d==null?void 0:d.duration)||.72),stepDelay:Math.max(0,Number(d==null?void 0:d.stepDelay)||0)}}const $e=E(()=>[...new Set(j.value.map(t=>t.category).filter(Boolean))].sort((t,M)=>t.localeCompare(M))),qe=E(()=>[...j.value].filter(d=>Number(d.usageCount||0)>0).sort((d,t)=>{const M=Number(t.lastUsedAt||0)-Number(d.lastUsedAt||0);return M!==0?M:Number(t.usageCount||0)-Number(d.usageCount||0)}).slice(0,6)),De=E(()=>te.value==="all"?F.value:F.value.filter(d=>d.scope===te.value));function Ke(d){const t=Me.value.trim().toLowerCase(),M=Pe.value;return M==="all"||(d.category||"")===M?t?[d.name,d.category,...d.tags||[]].filter(Boolean).some(ye=>String(ye).toLowerCase().includes(t)):!0:!1}const Le=E(()=>Z.value.filter(Ke)),tt=E(()=>oe.value.filter(Ke)),Oe=E(()=>qe.value.filter(d=>w.value==="group"?d.scope==="group":d.scope!=="group"));function He(d){const t=String(d.name||"").trim();if(!t)return;const M=j.value.findIndex(ke=>ke.scope===d.scope&&ke.name.toLowerCase()===t.toLowerCase()),K={...d,id:M>=0?j.value[M].id:`motion-${Date.now()}`,name:t,category:String(d.category||"").trim(),tags:Array.isArray(d.tags)?d.tags:G(d.tags)},ye=[...j.value];M>=0?ye.splice(M,1,K):ye.push(K),xe({motionPresets:ye})}function Qe(d,t){const M=j.value.map(K=>K.id===d?{...K,...t}:K);xe({motionPresets:M})}function ot(d){const t=j.value.find(M=>M.id===d);t&&Qe(d,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function nt(d,t){const M=j.value.filter(Te=>Te.scope===d).map(Te=>Te.name.toLowerCase()),K=String(t||"Preset").trim()||"Preset";if(!M.includes(K.toLowerCase()))return K;let ye=2,ke=`${K} Copy`;for(;M.includes(ke.toLowerCase());)ke=`${K} Copy ${ye}`,ye+=1;return ke}function dt(d){xe({motionPresets:j.value.filter(t=>t.id!==d)}),N.value===d&&(N.value="",T.value="")}function yt(d){He({...d,id:void 0,name:nt(d.scope,d.name)})}function ht(d){N.value=d.id,T.value=d.name,W.value=d.category||"",ae.value=Array.isArray(d.tags)?d.tags.join(", "):""}function gt(){N.value="",T.value="",W.value="",ae.value=""}function xt(d){const t=String(T.value||"").trim();t&&(Qe(d,{name:t,category:String(W.value||"").trim(),tags:G(ae.value)}),gt())}function Sn(d,t,M){if(!t||!M||t===M)return;const K=j.value.filter(Re=>Re.scope===d),ye=K.findIndex(Re=>Re.id===t),ke=K.findIndex(Re=>Re.id===M);if(ye===-1||ke===-1)return;const Te=[...K],[Ae]=Te.splice(ye,1);Te.splice(ke,0,Ae);const Ze=j.value.filter(Re=>Re.scope!==d),at=[];j.value.forEach(Re=>{if(Re.scope===d){Te.length&&at.push(Te.shift());return}const ut=Ze.shift();ut&&at.push(ut)}),xe({motionPresets:at})}function wt(d){Y.value=d.id,fe.value=d.id}function kt(d){Y.value&&(fe.value=d.id)}function Ct(d){Y.value&&(Sn(d.scope,Y.value,d.id),Y.value="",fe.value="")}function $t(){Y.value="",fe.value=""}function St(){D.value+=1}function It(){ee.value+=1}function At(d,t){pe({[d]:t})}function In(d){const t=Math.max(0,Number(d)||0);pe({duration:t})}function ft(d){var K;if(!a.value)return;const M={...((K=a.value.animations)==null?void 0:K[0])||{type:"auto",delay:0,duration:.64},...d};if(M.type==="auto"){P({animations:[]});return}P({animations:[{type:M.type||"none",delay:Math.max(0,Number(M.delay)||0),duration:Math.max(.1,Number(M.duration)||.64)}]})}const Je=L("stagger-in"),lt=L(0),it=L(.12),Xe=L(.72);je(_,d=>{d.length&&(Je.value=f.value.type==="mixed"?"stagger-in":f.value.type,Xe.value=f.value.duration)},{immediate:!0,deep:!0});function An(){if(!_.value.length)return;[..._.value].sort((t,M)=>(t.y||0)!==(M.y||0)?(t.y||0)-(M.y||0):(t.x||0)-(M.x||0)).forEach((t,M)=>{if(Je.value==="auto"){r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:Je.value,delay:Math.max(0,Number(lt.value)||0)+M*Math.max(0,Number(it.value)||0),duration:Math.max(.1,Number(Xe.value)||.72)}]})})}function Et(d){Je.value=d.type||"stagger-in",lt.value=Number(d.delay||0),it.value=Number(d.stepDelay||0),Xe.value=Number(d.duration||.72),ot(d.id),It()}function En(){He({scope:"group",name:ve.value,category:we.value,tags:G(ce.value),type:Je.value,delay:Math.max(0,Number(lt.value)||0),stepDelay:Math.max(0,Number(it.value)||0),duration:Math.max(.1,Number(Xe.value)||.72)}),ve.value="",we.value="",ce.value=""}function Mt(d){ft({type:d.type||"auto",delay:Number(d.delay||0),duration:Number(d.duration||.72)}),ot(d.id),St()}function Mn(){He({scope:"single",name:be.value,category:me.value,tags:G(Ee.value),type:B.value.type,delay:Math.max(0,Number(B.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(B.value.duration)||.72)}),be.value="",me.value="",Ee.value=""}function Pn(){var d;(d=Ne.value)==null||d.click()}async function zn(d){var K;const t=d.target,M=(K=t==null?void 0:t.files)==null?void 0:K[0];if(M)try{const ye=await M.text(),ke=JSON.parse(ye),Te=Array.isArray(ke)?ke:Array.isArray(ke.motionPresets)?ke.motionPresets:[];if(!Te.length)return;F.value=Te.map(Ae=>({...C(Ae),selected:!0,importName:String((Ae==null?void 0:Ae.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function Pt(){F.value=[]}function Tn(){const d=F.value.filter(M=>M.selected);if(!d.length)return;const t=[...j.value];d.forEach(M=>{const K=t.findIndex(ye=>ye.scope===M.scope&&ye.name.toLowerCase()===M.name.toLowerCase());if(K>=0){J.value==="replace"?t.splice(K,1,{...t[K],...M,id:t[K].id}):t.push({...M,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:nt(M.scope,M.name)});return}t.push(M)}),xe({motionPresets:t}),Pt()}function Nn(){var ke;if(!j.value.length)return;const d={version:1,exportedAt:new Date().toISOString(),motionPresets:j.value.map(({id:Te,...Ae})=>Ae)},t=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),M=URL.createObjectURL(t),K=document.createElement("a"),ye=String(((ke=u.value)==null?void 0:ke.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";K.href=M,K.download=`${ye}-motion-presets.json`,document.body.appendChild(K),K.click(),document.body.removeChild(K),URL.revokeObjectURL(M)}const Ln=E(()=>[{id:`single-${D.value}`,delay:Math.max(0,Number(B.value.delay)||0),duration:Math.max(.1,Number(B.value.duration)||.72),type:B.value.type}]),jn=E(()=>Array.from({length:Math.min(Math.max(_.value.length,3),5)},(d,t)=>({id:`group-${ee.value}-${t}`,delay:Math.max(0,Number(lt.value)||0)+t*Math.max(0,Number(it.value)||0),duration:Math.max(.1,Number(Xe.value)||.72),type:Je.value}))),zt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Tt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(d,t)=>{var M,K,ye,ke,Te,Ae,Ze,at,Re,ut,Nt,Lt,jt,Bt,Dt,_t,qt,Rt,Ft,Ut,Vt,Ot,Wt,Gt,Ht,Qt,Yt,Jt,Kt,Xt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,yo,ho,xo,wo,ko,Co,$o,So,Io,Ao,Eo,Mo,Po,zo,To,No,Lo,jo,Bo,Do,_o,qo,Ro,Fo,Uo,Vo,Oo,Wo,Go,Ho,Qo,Yo,Jo,Ko,Xo,Zo,en,tn,on,nn,ln,an,sn,rn,dn,un,cn,pn,vn;return n(),l("div",{ref_key:"panelRootRef",ref:Ce,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Ne,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:zn},null,544),e("input",{ref_key:"chartImportInput",ref:ze,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:R},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),h.value?(n(),_e(ii,{key:0,"search-query":Me.value,"category-filter":Pe.value,"available-categories":$e.value,"recent-presets":Oe.value,"pending-imported-presets":F.value,"filtered-pending-imports":De.value,"import-scope-filter":te.value,"import-conflict-mode":J.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>Me.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>Pe.value=o),onTriggerImport:Pn,onExportPresets:Nn,onApplyPreset:t[2]||(t[2]=o=>w.value==="group"?Et(o):Mt(o)),onClearImports:Pt,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>te.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>J.value=o),onApplyImports:Tn},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):q("",!0),k(s).multiSelection?(n(),l("div",ai,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",si,$(_.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",ri,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:It},"Replay")]),(n(),l("div",{class:"motion-scrubber-stage",key:`group-preview-${ee.value}`},[(n(!0),l(Q,null,re(jn.value,o=>(n(),l("span",{key:o.id,class:V(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:de({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",di,[(n(),l(Q,null,re(zt,o=>e("button",{key:`group-${o.value}`,type:"button",class:V(["motion-card",Je.value===o.value&&"active"]),onClick:H=>Je.value=o.value},[e("span",ci,[e("span",{class:V(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(n(),l("span",pi)):q("",!0),o.value==="stagger-in"?(n(),l("span",vi)):q("",!0)]),e("span",fi,$(o.label),1)],10,ui)),64))]),e("div",mi,[e("div",gi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),ne(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>lt.value=o),class:"input"},null,512),[[ge,lt.value]])]),e("div",bi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),ne(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>it.value=o),class:"input"},null,512),[[ge,it.value]])])]),e("div",yi,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),ne(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>Xe.value=o),class:"input"},null,512),[[ge,Xe.value]])]),e("div",hi,[ne(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>ve.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[ge,ve.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:En},"Save")]),e("div",xi,[ne(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>we.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[ge,we.value]]),ne(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>ce.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[ge,ce.value]])]),tt.value.length?(n(),l("div",wi,[(n(!0),l(Q,null,re(tt.value,o=>(n(),l("div",{key:o.id,class:V(["preset-item",Y.value===o.id&&"dragging",fe.value===o.id&&Y.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:H=>wt(o),onDragenter:Se(H=>kt(o),["prevent"]),onDragover:t[14]||(t[14]=Se(()=>{},["prevent"])),onDrop:Se(H=>Ct(o),["prevent"]),onDragend:$t},[e("button",{type:"button",class:"preset-chip",onClick:H=>Et(o)},$(o.name),9,Ci),o.category?(n(),l("span",$i,$(o.category),1)):q("",!0),(n(!0),l(Q,null,re(o.tags||[],H=>(n(),l("span",{key:`${o.id}-${H}`,class:"preset-meta-chip muted"},"#"+$(H),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:H=>yt(o)},"Duplicate",8,Si),e("button",{type:"button",class:"preset-mini-btn",onClick:H=>ht(o)},"Rename",8,Ii),e("button",{type:"button",class:"preset-mini-btn danger",onClick:H=>dt(o.id)},"Delete",8,Ai),N.value===o.id?(n(),l("div",Ei,[ne(e("input",{"onUpdate:modelValue":t[11]||(t[11]=H=>T.value=H),class:"input"},null,512),[[ge,T.value]]),ne(e("input",{"onUpdate:modelValue":t[12]||(t[12]=H=>W.value=H),class:"input",placeholder:"Category"},null,512),[[ge,W.value]]),ne(e("input",{"onUpdate:modelValue":t[13]||(t[13]=H=>ae.value=H),class:"input",placeholder:"Tags, comma separated"},null,512),[[ge,ae.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:H=>xt(o.id)},"Save",8,Mi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):q("",!0)],42,ki))),128))])):oe.value.length?(n(),l("div",Pi,"No group presets match the current search.")):q("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:An}," Apply Sequence to Selection ")])):a.value?(n(),l(Q,{key:3},[e("div",{class:V(["panel-section",ue.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",ka,[t[179]||(t[179]=U(" Position & Size ",-1)),e("span",Ca,$(a.value.type),1)]),e("div",$a,[e("div",Sa,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=o=>Ie("x",o.target.value))},null,40,Ia)]),e("div",Aa,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=o=>Ie("y",o.target.value))},null,40,Ea)]),e("div",Ma,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=o=>Ie("width",o.target.value))},null,40,Pa)]),e("div",za,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=o=>Ie("height",o.target.value))},null,40,Ta)]),e("div",Na,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>Ie("rotation",o.target.value))},null,40,La)]),e("div",ja,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>Ie("opacity",o.target.value))},null,40,Ba)])])],2),e("div",{class:V(["panel-section",ue.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",Da,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:St},"Replay")]),(n(),l("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${D.value}`},[(n(!0),l(Q,null,re(Ln.value,o=>(n(),l("span",{key:o.id,class:V(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:de({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",_a,[(n(),l(Q,null,re(zt,o=>e("button",{key:o.value,type:"button",class:V(["motion-card",B.value.type===o.value&&"active"]),onClick:H=>ft({type:o.value})},[e("span",Ra,[e("span",{class:V(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(n(),l("span",Fa)):q("",!0),o.value==="stagger-in"?(n(),l("span",Ua)):q("",!0)]),e("span",Va,$(o.label),1)],10,qa)),64))]),e("div",Oa,[e("div",Wa,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:B.value.delay,class:"input",onChange:t[45]||(t[45]=o=>ft({delay:o.target.value}))},null,40,Ga)]),e("div",Ha,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:B.value.duration,class:"input",onChange:t[46]||(t[46]=o=>ft({duration:o.target.value}))},null,40,Qa)])]),e("div",Ya,[ne(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>be.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[ge,be.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Mn},"Save")]),e("div",Ja,[ne(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>me.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[ge,me.value]]),ne(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>Ee.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[ge,Ee.value]])]),Le.value.length?(n(),l("div",Ka,[(n(!0),l(Q,null,re(Le.value,o=>(n(),l("div",{key:o.id,class:V(["preset-item",Y.value===o.id&&"dragging",fe.value===o.id&&Y.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:H=>wt(o),onDragenter:Se(H=>kt(o),["prevent"]),onDragover:t[53]||(t[53]=Se(()=>{},["prevent"])),onDrop:Se(H=>Ct(o),["prevent"]),onDragend:$t},[e("button",{type:"button",class:"preset-chip",onClick:H=>Mt(o)},$(o.name),9,Za),o.category?(n(),l("span",es,$(o.category),1)):q("",!0),(n(!0),l(Q,null,re(o.tags||[],H=>(n(),l("span",{key:`${o.id}-${H}`,class:"preset-meta-chip muted"},"#"+$(H),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:H=>yt(o)},"Duplicate",8,ts),e("button",{type:"button",class:"preset-mini-btn",onClick:H=>ht(o)},"Rename",8,os),e("button",{type:"button",class:"preset-mini-btn danger",onClick:H=>dt(o.id)},"Delete",8,ns),N.value===o.id?(n(),l("div",ls,[ne(e("input",{"onUpdate:modelValue":t[50]||(t[50]=H=>T.value=H),class:"input"},null,512),[[ge,T.value]]),ne(e("input",{"onUpdate:modelValue":t[51]||(t[51]=H=>W.value=H),class:"input",placeholder:"Category"},null,512),[[ge,W.value]]),ne(e("input",{"onUpdate:modelValue":t[52]||(t[52]=H=>ae.value=H),class:"input",placeholder:"Tags, comma separated"},null,512),[[ge,ae.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:H=>xt(o.id)},"Save",8,is),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):q("",!0)],42,Xa))),128))])):Z.value.length?(n(),l("div",as,"No single-element presets match the current search.")):q("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(n(),l("div",{key:0,class:V(["panel-section",ue.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",ss,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(at=a.value.content)==null?void 0:at.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>g({text:o.target.value}))},null,40,rs)]),e("div",ds,[e("div",us,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(Re=a.value.content)==null?void 0:Re.fontSize,class:"input",onChange:t[55]||(t[55]=o=>g({fontSize:+o.target.value}))},null,40,cs)]),e("div",ps,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(ut=a.value.content)==null?void 0:ut.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>g({fontWeight:o.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,vs)])]),e("div",fs,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Nt=a.value.content)==null?void 0:Nt.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>g({fontFamily:o.target.value}))},[(n(),l(Q,null,re(Tt,o=>e("option",{key:o,value:o},$(o.split(",")[0]),9,gs)),64))],40,ms)]),e("div",bs,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",ys,[(n(),l(Q,null,re(["left","center","right","justify"],o=>{var H;return e("button",{key:o,class:V(["align-btn",((H=a.value.content)==null?void 0:H.textAlign)===o&&"active"]),onClick:fn=>g({textAlign:o})},$(o[0].toUpperCase()),11,hs)}),64))])]),e("div",xs,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",ws,[e("button",{class:V(["style-btn",((Lt=a.value.content)==null?void 0:Lt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var H;return g({fontStyle:((H=a.value.content)==null?void 0:H.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:V(["style-btn",((jt=a.value.content)==null?void 0:jt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var H;return g({textDecoration:((H=a.value.content)==null?void 0:H.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:V(["style-btn",((Bt=a.value.content)==null?void 0:Bt.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var H;return g({textDecoration:((H=a.value.content)==null?void 0:H.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",ks,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",Cs,[e("input",{type:"color",value:((Dt=a.value.content)==null?void 0:Dt.color)||"#000",onInput:t[61]||(t[61]=o=>g({color:o.target.value})),class:"color-input-native"},null,40,$s),e("input",{value:((_t=a.value.content)==null?void 0:_t.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>g({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ss)])]),e("div",Is,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((qt=a.value.content)==null?void 0:qt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>g({lineHeight:+o.target.value}))},null,40,As)]),e("div",Es,[e("div",Ms,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Rt=a.value.content)==null?void 0:Rt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>g({textTransform:o.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,Ps)]),e("div",zs,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Ft=a.value.content)==null?void 0:Ft.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>g({letterSpacing:+o.target.value}))},null,40,Ts)])])],2)):q("",!0),a.value.type==="image"?(n(),l("div",{key:1,class:V(["panel-section",ue.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",Ns,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Ut=a.value.content)==null?void 0:Ut.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>g({src:o.target.value}))},null,40,Ls)]),e("div",js,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Vt=a.value.content)==null?void 0:Vt.alt,class:"input",onInput:t[67]||(t[67]=o=>g({alt:o.target.value}))},null,40,Bs)]),e("div",Ds,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Ot=a.value.content)==null?void 0:Ot.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>g({objectFit:o.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,_s)]),e("div",qs,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((Wt=a.value.content)==null?void 0:Wt.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>g({borderRadius:+o.target.value}))},null,40,Rs)]),e("div",Fs,[e("div",Us,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Gt=a.value.content)==null?void 0:Gt.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>g({borderWidth:+o.target.value}))},null,40,Vs)]),e("div",Os,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Ht=a.value.content)==null?void 0:Ht.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>g({borderColor:o.target.value}))},null,40,Ws)])])],2)):q("",!0),a.value.type==="shape"?(n(),l("div",{key:2,class:V(["panel-section",ue.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Gs,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((Qt=a.value.content)==null?void 0:Qt.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>g({shapeType:o.target.value}))},[...t[215]||(t[215]=[Fe('<option value="rectangle" data-v-1d3dcef4>Rectangle</option><option value="circle" data-v-1d3dcef4>Circle</option><option value="triangle" data-v-1d3dcef4>Triangle</option><option value="star" data-v-1d3dcef4>Star</option><option value="arrow" data-v-1d3dcef4>Arrow</option><option value="diamond" data-v-1d3dcef4>Diamond</option>',6)])],40,Hs)]),e("div",Qs,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Ys,[e("input",{type:"color",value:((Yt=a.value.content)==null?void 0:Yt.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>g({fillColor:o.target.value})),class:"color-input-native"},null,40,Js),e("input",{value:((Jt=a.value.content)==null?void 0:Jt.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>g({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ks)])]),e("div",Xs,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Zs,[e("input",{type:"color",value:((Kt=a.value.content)==null?void 0:Kt.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>g({borderColor:o.target.value})),class:"color-input-native"},null,40,er),e("input",{value:((Xt=a.value.content)==null?void 0:Xt.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>g({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,tr)])]),e("div",or,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Zt=a.value.content)==null?void 0:Zt.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>g({borderWidth:+o.target.value}))},null,40,nr)]),e("div",lr,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((eo=a.value.content)==null?void 0:eo.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>g({borderRadius:+o.target.value}))},null,40,ir)]),e("div",ar,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((to=a.value.content)==null?void 0:to.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>g({opacity:+o.target.value}))},null,40,sr)])],2)):q("",!0),a.value.type==="chart"?(n(),l("div",{key:3,class:V(["panel-section",ue.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",rr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((oo=a.value.content)==null?void 0:oo.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=o=>g({chartType:o.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,dr)]),e("div",ur,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((no=a.value.content)==null?void 0:no.title)||"",class:"input",onInput:t[81]||(t[81]=o=>g({title:o.target.value}))},null,40,cr)]),e("div",pr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((lo=a.value.content)==null?void 0:lo.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=o=>g({dataText:o.target.value}))},null,40,vr),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:se},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",fr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),ne(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=o=>le.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[ge,le.value]]),e("div",mr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=o=>i(le.value))},"Convert pasted data")])]),e("div",gr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((io=a.value.content)==null?void 0:io.paletteText)||"",class:"input",placeholder:Ve.value.paletteText,onInput:t[85]||(t[85]=o=>g({paletteText:o.target.value}))},null,40,br),e("div",yr,[(n(!0),l(Q,null,re(rt.value,(o,H)=>(n(),l("span",{key:`chart-palette-${H}`,class:"chart-palette-swatch",style:de({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:O},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:I},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",hr,[e("div",xr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((ao=a.value.content)==null?void 0:ao.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=o=>g({backgroundColor:o.target.value}))},null,40,wr)]),e("div",kr,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((so=a.value.content)==null?void 0:so.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=o=>g({textColor:o.target.value}))},null,40,Cr)])]),e("div",$r,[e("div",Sr,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((ro=a.value.content)==null?void 0:ro.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=o=>g({gridColor:o.target.value}))},null,40,Ir)]),e("div",Ar,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((uo=a.value.content)==null?void 0:uo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=o=>g({borderColor:o.target.value}))},null,40,Er)])]),e("div",Mr,[e("div",Pr,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((co=a.value.content)==null?void 0:co.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=o=>g({borderWidth:+o.target.value}))},null,40,zr)]),((po=a.value.content)==null?void 0:po.chartType)!=="circle"?(n(),l("div",Tr,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((vo=a.value.content)==null?void 0:vo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=o=>g({maxValue:o.target.value}))},null,40,Nr)])):(n(),l("div",Lr,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((fo=a.value.content)==null?void 0:fo.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=o=>g({innerRadius:+o.target.value}))},null,40,jr)]))]),((mo=a.value.content)==null?void 0:mo.chartType)==="line"?(n(),l("div",Br,[e("div",Dr,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((go=a.value.content)==null?void 0:go.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=o=>g({strokeWidth:+o.target.value}))},null,40,_r)]),e("label",qr,[e("input",{type:"checkbox",checked:!!((bo=a.value.content)!=null&&bo.showArea),onChange:t[94]||(t[94]=o=>g({showArea:o.target.checked}))},null,40,Rr),t[239]||(t[239]=U(" Show area fill ",-1))])])):q("",!0),e("label",Fr,[e("input",{type:"checkbox",checked:((yo=a.value.content)==null?void 0:yo.showLegend)!==!1,onChange:t[95]||(t[95]=o=>g({showLegend:o.target.checked}))},null,40,Ur),t[240]||(t[240]=U(" Show legend ",-1))]),((ho=a.value.content)==null?void 0:ho.chartType)!=="circle"?(n(),l("label",Vr,[e("input",{type:"checkbox",checked:((xo=a.value.content)==null?void 0:xo.showGrid)!==!1,onChange:t[96]||(t[96]=o=>g({showGrid:o.target.checked}))},null,40,Or),t[241]||(t[241]=U(" Show grid lines ",-1))])):q("",!0),e("label",Wr,[e("input",{type:"checkbox",checked:((wo=a.value.content)==null?void 0:wo.showValues)!==!1,onChange:t[97]||(t[97]=o=>g({showValues:o.target.checked}))},null,40,Gr),t[242]||(t[242]=U(" Show values ",-1))])],2)):q("",!0),a.value.type==="button"?(n(),l("div",{key:4,class:V(["panel-section",ue.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Hr,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(ko=a.value.content)==null?void 0:ko.label,class:"input",onInput:t[98]||(t[98]=o=>g({label:o.target.value}))},null,40,Qr)]),e("div",Yr,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Co=a.value.content)==null?void 0:Co.variant)||"primary",class:"select",onChange:t[99]||(t[99]=o=>g({variant:o.target.value}))},[...t[245]||(t[245]=[Fe('<option value="primary" data-v-1d3dcef4>Primary</option><option value="secondary" data-v-1d3dcef4>Secondary</option><option value="outline" data-v-1d3dcef4>Outline</option><option value="ghost" data-v-1d3dcef4>Ghost</option><option value="danger" data-v-1d3dcef4>Danger</option>',5)])],40,Jr)]),e("div",Kr,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:(($o=a.value.content)==null?void 0:$o.action)||"none",class:"select",onChange:t[100]||(t[100]=o=>g({action:o.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Xr)]),(So=a.value.content)!=null&&So.action&&a.value.content.action!=="none"?(n(),l("div",Zr,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Io=a.value.content)==null?void 0:Io.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=o=>g({target:o.target.value}))},null,40,ed)])):q("",!0),e("div",td,[e("div",od,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Ao=a.value.content)==null?void 0:Ao.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=o=>g({bgColor:o.target.value}))},null,40,nd)]),e("div",ld,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Eo=a.value.content)==null?void 0:Eo.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=o=>g({textColor:o.target.value}))},null,40,id)])]),e("div",ad,[e("div",sd,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Mo=a.value.content)==null?void 0:Mo.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=o=>g({borderColor:o.target.value}))},null,40,rd)]),e("div",dd,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Po=a.value.content)==null?void 0:Po.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=o=>g({borderRadius:+o.target.value}))},null,40,ud)])]),e("div",cd,[e("div",pd,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((zo=a.value.content)==null?void 0:zo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=o=>g({fontSize:+o.target.value}))},null,40,vd)]),e("div",fd,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((To=a.value.content)==null?void 0:To.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=o=>g({fontWeight:+o.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,md)])]),e("div",gd,[e("div",bd,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((No=a.value.content)==null?void 0:No.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=o=>g({fontFamily:o.target.value}))},[(n(),l(Q,null,re(Tt,o=>e("option",{key:`btn-${o}`,value:o},$(o.split(",")[0]),9,hd)),64))],40,yd)]),e("div",xd,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Lo=a.value.content)==null?void 0:Lo.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=o=>g({letterSpacing:+o.target.value}))},null,40,wd)])])],2)):q("",!0),a.value.type==="hotspot"?(n(),l("div",{key:5,class:V(["panel-section",ue.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",kd,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((jo=a.value.content)==null?void 0:jo.icon)||"?",class:"select",onChange:t[110]||(t[110]=o=>g({icon:o.target.value}))},[...t[260]||(t[260]=[Fe('<option value="?" data-v-1d3dcef4>? (Info)</option><option value="!" data-v-1d3dcef4>! (Alert)</option><option value="+" data-v-1d3dcef4>+ (Plus)</option><option value="i" data-v-1d3dcef4>i (Info)</option><option value="✦" data-v-1d3dcef4>✦ (Star)</option>',5)])],40,Cd)]),e("div",$d,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",Sd,[e("input",{type:"color",value:((Bo=a.value.content)==null?void 0:Bo.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=o=>g({bgColor:o.target.value})),class:"color-input-native"},null,40,Id),e("input",{value:((Do=a.value.content)==null?void 0:Do.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=o=>g({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ad)])]),e("div",Ed,[e("div",Md,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((_o=a.value.content)==null?void 0:_o.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=o=>g({iconColor:o.target.value}))},null,40,Pd)]),e("div",zd,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((qo=a.value.content)==null?void 0:qo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=o=>g({borderRadius:+o.target.value}))},null,40,Td)])]),e("div",Nd,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Ro=a.value.content)==null?void 0:Ro.popupTitle,class:"input",onInput:t[115]||(t[115]=o=>g({popupTitle:o.target.value}))},null,40,Ld)]),e("div",jd,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Fo=a.value.content)==null?void 0:Fo.popupContent,class:"textarea",onInput:t[116]||(t[116]=o=>g({popupContent:o.target.value}))},null,40,Bd)]),e("div",Dd,[e("div",_d,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Uo=a.value.content)==null?void 0:Uo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>g({popupBgColor:o.target.value}))},null,40,qd)]),e("div",Rd,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Vo=a.value.content)==null?void 0:Vo.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>g({popupTextColor:o.target.value}))},null,40,Fd)])])],2)):q("",!0),a.value.type==="video"?(n(),l("div",{key:6,class:V(["panel-section",ue.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",Ud,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Oo=a.value.content)==null?void 0:Oo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=o=>g({src:o.target.value}))},null,40,Vd)]),e("div",Od,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(Wo=a.value.content)==null?void 0:Wo.poster,class:"input",onInput:t[120]||(t[120]=o=>g({poster:o.target.value}))},null,40,Wd)]),e("div",Gd,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Go=a.value.content)==null?void 0:Go.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=o=>g({objectFit:o.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Hd)]),e("label",Qd,[e("input",{type:"checkbox",checked:(Ho=a.value.content)==null?void 0:Ho.autoplay,onChange:t[122]||(t[122]=o=>g({autoplay:o.target.checked}))},null,40,Yd),t[274]||(t[274]=U(" Autoplay ",-1))]),e("label",Jd,[e("input",{type:"checkbox",checked:((Qo=a.value.content)==null?void 0:Qo.controls)??!0,onChange:t[123]||(t[123]=o=>g({controls:o.target.checked}))},null,40,Kd),t[275]||(t[275]=U(" Show Controls ",-1))]),e("label",Xd,[e("input",{type:"checkbox",checked:(Yo=a.value.content)==null?void 0:Yo.loop,onChange:t[124]||(t[124]=o=>g({loop:o.target.checked}))},null,40,Zd),t[276]||(t[276]=U(" Loop ",-1))]),e("label",eu,[e("input",{type:"checkbox",checked:(Jo=a.value.content)==null?void 0:Jo.muted,onChange:t[125]||(t[125]=o=>g({muted:o.target.checked}))},null,40,tu),t[277]||(t[277]=U(" Muted ",-1))])],2)):q("",!0),a.value.type==="audio"?(n(),l("div",{key:7,class:V(["panel-section",ue.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",ou,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(Ko=a.value.content)==null?void 0:Ko.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=o=>g({src:o.target.value}))},null,40,nu)]),e("div",lu,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Xo=a.value.content)==null?void 0:Xo.label,class:"input",onInput:t[127]||(t[127]=o=>g({label:o.target.value}))},null,40,iu)]),e("label",au,[e("input",{type:"checkbox",checked:(Zo=a.value.content)==null?void 0:Zo.autoplay,onChange:t[128]||(t[128]=o=>g({autoplay:o.target.checked}))},null,40,su),t[281]||(t[281]=U(" Autoplay ",-1))]),e("label",ru,[e("input",{type:"checkbox",checked:((en=a.value.content)==null?void 0:en.controls)!==!1,onChange:t[129]||(t[129]=o=>g({controls:o.target.checked}))},null,40,du),t[282]||(t[282]=U(" Show Controls ",-1))]),e("label",uu,[e("input",{type:"checkbox",checked:(tn=a.value.content)==null?void 0:tn.loop,onChange:t[130]||(t[130]=o=>g({loop:o.target.checked}))},null,40,cu),t[283]||(t[283]=U(" Loop ",-1))]),e("div",pu,[e("div",vu,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((on=a.value.content)==null?void 0:on.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=o=>g({accentColor:o.target.value}))},null,40,fu)]),e("div",mu,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((nn=a.value.content)==null?void 0:nn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=o=>g({textColor:o.target.value}))},null,40,gu)])]),e("div",bu,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((ln=a.value.content)==null?void 0:ln.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=o=>g({bgColor:o.target.value}))},null,40,yu)])],2)):q("",!0),a.value.type==="quiz"?(n(),l("div",{key:8,class:V(["panel-section",ue.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",hu,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(an=a.value.content)==null?void 0:an.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=o=>g({question:o.target.value}))},null,40,xu)]),e("div",wu,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(rn=(sn=a.value.content)==null?void 0:sn.options)==null?void 0:rn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=o=>g({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,ku)]),e("div",Cu,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((dn=a.value.content)==null?void 0:dn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=o=>g({correctIndex:+o.target.value}))},null,40,$u)]),e("div",Su,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(un=a.value.content)==null?void 0:un.explanation,class:"textarea",onInput:t[137]||(t[137]=o=>g({explanation:o.target.value}))},null,40,Iu)]),e("div",Au,[e("div",Eu,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((cn=a.value.content)==null?void 0:cn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=o=>g({cardBgColor:o.target.value}))},null,40,Mu)]),e("div",Pu,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((pn=a.value.content)==null?void 0:pn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=o=>g({questionColor:o.target.value}))},null,40,zu)])]),e("div",Tu,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((vn=a.value.content)==null?void 0:vn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=o=>g({accentColor:o.target.value}))},null,40,Nu)])],2)):q("",!0),e("div",Lu,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",ju,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=o=>k(r).duplicateElement(k(s).projectId,k(s).currentSlideId,a.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),U(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=o=>{k(s).showInteractionEditor=!0,k(s).interactionElementId=a.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),U(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=o=>{k(r).deleteElement(k(s).projectId,k(s).currentSlideId,a.value.id),k(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),U(" Delete Element ",-1)])])])])],64)):(n(),l("div",zi,[e("div",Ti,[e("button",{type:"button",class:V(["slide-settings-tab",X.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>X.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:V(["slide-settings-tab",X.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>X.value="transitions")},[...t[150]||(t[150]=[Fe('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-1d3dcef4><path d="M5 7h5" data-v-1d3dcef4></path><path d="M5 12h10" data-v-1d3dcef4></path><path d="M5 17h14" data-v-1d3dcef4></path><path d="M14 7l5 5-5 5" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Transitions</span>',2)])],2),e("button",{type:"button",class:V(["slide-settings-tab",X.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>X.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),X.value==="canvas"?(n(),l("div",Ni,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",Li,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),ne(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>he.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>At("title",he.value.title))},null,544),[[ge,he.value.title]])]),e("div",ji,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",Bi,[(n(),l(Q,null,re(["color","gradient","image"],o=>{var H;return e("button",{key:o,class:V(["bg-type-btn",(((H=p.value)==null?void 0:H.backgroundType)||"color")===o&&"active"]),onClick:fn=>pe({backgroundType:o})},$(o),11,Di)}),64))]),(((M=p.value)==null?void 0:M.backgroundType)||"color")==="color"?(n(),l("div",_i,[e("input",{type:"color",value:((K=p.value)==null?void 0:K.background)||"#ffffff",onInput:t[20]||(t[20]=o=>pe({background:o.target.value})),class:"color-input-native"},null,40,qi),e("input",{value:((ye=p.value)==null?void 0:ye.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>pe({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Ri)])):((ke=p.value)==null?void 0:ke.backgroundType)==="gradient"?ne((n(),l("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>he.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>pe({backgroundGradient:he.value.backgroundGradient}))},null,544)),[[ge,he.value.backgroundGradient]]):ne((n(),l("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>he.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>pe({backgroundImage:he.value.backgroundImage}))},null,544)),[[ge,he.value.backgroundImage]])]),e("div",Fi,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",Ui,[(n(!0),l(Q,null,re(k(Yn),o=>{var H;return n(),l("button",{key:o.id,type:"button",class:V(["canvas-size-card",((H=c.value)==null?void 0:H.id)===o.id&&"active"]),onClick:fn=>Ue(o)},[e("span",Oi,[e("span",{class:V(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Wi,$(o.label),1),e("span",Gi,$(o.ratioLabel),1)],10,Vi)}),128))]),e("div",Hi,[e("div",Qi,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Yi,"Current ratio "+$(z.value),1)]),e("div",Ji,[e("div",Ki,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Xi,[e("input",{type:"number",min:"320",max:"4096",value:b.value.width,class:"input",onChange:t[26]||(t[26]=o=>Ye("width",o.target.value))},null,40,Zi),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",ea,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",ta,[e("input",{type:"number",min:"320",max:"4096",value:b.value.height,class:"input",onChange:t[27]||(t[27]=o=>Ye("height",o.target.value))},null,40,oa),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",na,[ne(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>ie.value=o)},null,512),[[pt,ie.value]]),t[161]||(t[161]=U(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=Fe('<div class="canvas-size-callout" data-v-1d3dcef4><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1d3dcef4><circle cx="12" cy="12" r="9" data-v-1d3dcef4></circle><path d="M12 10v6" data-v-1d3dcef4></path><path d="M12 7h.01" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",la,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),ne(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>he.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>At("notes",he.value.notes))},null,544),[[ge,he.value.notes]])])])):X.value==="transitions"?(n(),l("div",ia,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((Te=p.value)==null?void 0:Te.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>pe({transition:o.target.value}))},[...t[167]||(t[167]=[Fe('<option value="none" data-v-1d3dcef4>None</option><option value="fade" data-v-1d3dcef4>Fade</option><option value="slide" data-v-1d3dcef4>Slide</option><option value="zoom" data-v-1d3dcef4>Zoom</option><option value="flip" data-v-1d3dcef4>Flip</option>',5)])],40,aa),e("div",sa,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Ae=p.value)==null?void 0:Ae.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>In(o.target.value))},null,40,ra),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",da,[e("input",{type:"checkbox",checked:!!((Ze=p.value)!=null&&Ze.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>pe({advanceOnMediaEnd:o.target.checked}))},null,40,ua),t[170]||(t[170]=U(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(n(),l("div",ca,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",pa,[e("input",{type:"checkbox",checked:m.value.autoPlay,onChange:t[34]||(t[34]=o=>xe({autoPlay:o.target.checked}))},null,40,va),t[173]||(t[173]=U(" Autoplay preview and exported presentation ",-1))]),e("label",fa,[e("input",{type:"checkbox",checked:m.value.loop,onChange:t[35]||(t[35]=o=>xe({loop:o.target.checked}))},null,40,ma),t[174]||(t[174]=U(" Loop back to the first slide at the end ",-1))]),e("label",ga,[e("input",{type:"checkbox",checked:m.value.showProgress,onChange:t[36]||(t[36]=o=>xe({showProgress:o.target.checked}))},null,40,ba),t[175]||(t[175]=U(" Show progress bar in preview ",-1))]),e("label",ya,[e("input",{type:"checkbox",checked:m.value.showNavControls,onChange:t[37]||(t[37]=o=>xe({showNavControls:o.target.checked}))},null,40,ha),t[176]||(t[176]=U(" Show previous/next and dot navigation ",-1))]),e("label",xa,[e("input",{type:"checkbox",checked:m.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>xe({allowKeyboardNav:o.target.checked}))},null,40,wa),t[177]||(t[177]=U(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},Du=Be(Bu,[["__scopeId","data-v-1d3dcef4"]]),_u={class:"editor-toolbar"},qu={class:"toolbar-group"},Ru={class:"toolbar-group"},Fu=["data-tooltip","onClick"],Uu={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Vu={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ou={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Wu={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Gu={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Hu={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Qu={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Yu={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ju={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ku={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Xu={class:"tool-label"},Zu={class:"toolbar-group"},ec={class:"toolbar-group"},tc={class:"toolbar-group"},oc={__name:"EditorToolbar",emits:["open-ai-project"],setup(y,{emit:s}){const r=s,u=We();Ge();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function m(b){u.setActiveTool(b)}return(b,c)=>(n(),l("div",_u,[e("div",qu,[e("button",{class:V(["tool-btn",k(u).activeTool==="select"&&"active"]),onClick:c[0]||(c[0]=z=>m("select")),"data-tooltip":"Select (V)"},[...c[7]||(c[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),c[23]||(c[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Ru,[(n(),l(Q,null,re(p,z=>e("button",{key:z.id,class:V(["tool-btn",k(u).activeTool===z.id&&"active"]),"data-tooltip":z.tooltip,onClick:ie=>m(z.id)},[z.icon==="text"?(n(),l("svg",Uu,[...c[8]||(c[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):z.icon==="heading"?(n(),l("svg",Vu,[...c[9]||(c[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):z.icon==="image"?(n(),l("svg",Ou,[...c[10]||(c[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):z.icon==="shape"?(n(),l("svg",Wu,[...c[11]||(c[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):z.icon==="button"?(n(),l("svg",Gu,[...c[12]||(c[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):z.icon==="hotspot"?(n(),l("svg",Hu,[...c[13]||(c[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):z.icon==="video"?(n(),l("svg",Qu,[...c[14]||(c[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):z.icon==="audio"?(n(),l("svg",Yu,[...c[15]||(c[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):z.icon==="quiz"?(n(),l("svg",Ju,[...c[16]||(c[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):z.icon==="chart"?(n(),l("svg",Ku,[...c[17]||(c[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):q("",!0),e("span",Xu,$(z.label),1)],10,Fu)),64))]),c[24]||(c[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Zu,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:c[1]||(c[1]=z=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...c[18]||(c[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),c[25]||(c[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",ec,[e("button",{class:"tool-btn",onClick:c[2]||(c[2]=z=>k(u).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...c[19]||(c[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:c[3]||(c[3]=z=>k(u).zoomReset())},$(Math.round(k(u).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:c[4]||(c[4]=z=>k(u).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...c[20]||(c[20]=[Fe('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),c[26]||(c[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",tc,[e("button",{class:V(["tool-btn",k(u).showGrid&&"active"]),onClick:c[5]||(c[5]=z=>k(u).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...c[21]||(c[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:V(["tool-btn",k(u).snapToGrid&&"active"]),onClick:c[6]||(c[6]=z=>k(u).toggleSnap()),"data-tooltip":"Snap to grid"},[...c[22]||(c[22]=[Fe('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},nc=Be(oc,[["__scopeId","data-v-d964cc0f"]]),lc=["onMousedown"],ic={key:1,class:"selection-border locked-border"},ac={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=We(),u=Ge(),p=Bn("canvasScale",L(1)),m=E(()=>r.projectId),b=E(()=>r.currentSlideId),c=E(()=>r.selectedElementIds.includes(s.element.id)),z=E(()=>s.element.locked),ie=E(()=>s.element.visible!==!1),X=E(()=>{const F=s.element.content||{};return!!(F.text||F.label||F.question||F.popupTitle||F.popupContent)});let j=!1,Z=0,oe=0,_=new Map;function a(F){if(!r.snapToGrid||!r.gridSize)return F;const te=r.gridSize;return Math.round(F/te)*te}function h(F){var le;if(z.value||F.target.classList.contains("resize-handle"))return;const te=F.ctrlKey||F.metaKey||F.shiftKey;c.value?te&&r.selectElement(s.element.id,!0):r.selectElement(s.element.id,te),r.setActiveTool("select"),j=!1,Z=F.clientX,oe=F.clientY,_.clear();const J=(le=u.getProject(m.value))==null?void 0:le.slides.find(Ce=>Ce.id===b.value);J&&r.selectedElementIds.forEach(Ce=>{const ue=J.elements.find(S=>S.id===Ce);ue&&!ue.locked&&_.set(Ce,{x:ue.x,y:ue.y})}),window.addEventListener("mousemove",w),window.addEventListener("mouseup",B),F.stopPropagation()}function w(F){const te=(F.clientX-Z)/p.value,J=(F.clientY-oe)/p.value;!j&&(Math.abs(te)>3||Math.abs(J)>3)&&(j=!0),j&&_.forEach((le,Ce)=>{const ue=le.x+te,S=le.y+J;u.updateElement(m.value,b.value,Ce,{x:ue,y:S},{persist:!1})})}function B(F){if(j){const te=(F.clientX-Z)/p.value,J=(F.clientY-oe)/p.value;_.forEach((le,Ce)=>{u.updateElement(m.value,b.value,Ce,{x:a(le.x+te),y:a(le.y+J)},{persist:!1})}),u.commitProject(m.value)}j||!(F.ctrlKey||F.metaKey||F.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(s.element.id,!1),j=!1,window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",B)}const f=["n","ne","e","se","s","sw","w","nw"];let D=!1,ee="",be=0,ve=0,N=0,T=0,W=0,ae=0;function Y(F,te){z.value||(F.stopPropagation(),F.preventDefault(),D=!0,ee=te,be=F.clientX,ve=F.clientY,N=s.element.width,T=s.element.height,W=s.element.x,ae=s.element.y,window.addEventListener("mousemove",fe),window.addEventListener("mouseup",me))}function fe(F){if(!D)return;const te=p.value,J=(F.clientX-be)/te,le=(F.clientY-ve)/te,Ce=20;let ue=W,S=ae,x=N,P=T;if(ee.includes("e")&&(x=Math.max(Ce,N+J)),ee.includes("s")&&(P=Math.max(Ce,T+le)),ee.includes("w")){const g=Math.max(Ce,N-J);ue=W+(N-g),x=g}if(ee.includes("n")){const g=Math.max(Ce,T-le);S=ae+(T-g),P=g}if(r.snapToGrid&&r.gridSize){const g=r.gridSize;x=Math.round(x/g)*g,P=Math.round(P/g)*g,ue=Math.round(ue/g)*g,S=Math.round(S/g)*g}u.updateElement(m.value,b.value,s.element.id,{x:ue,y:S,width:x,height:P})}function me(){D=!1,window.removeEventListener("mousemove",fe),window.removeEventListener("mouseup",me)}function Ee(){["text","heading"].includes(s.element.type)&&r.focusPropertiesSection("content")}const we=E(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:z.value?"not-allowed":"move",visibility:ie.value?"visible":"hidden",userSelect:"none"}));function ce(F){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[F]||"auto"}function Me(F="content"){r.focusPropertiesSection(F)}function Pe(){const F=X.value?"improve":s.element.type==="image"?"image":"generate";r.openAIPanel(F)}function Ne(){const F=u.duplicateElement(m.value,b.value,s.element.id);F&&(r.selectElement(F.id),r.focusPropertiesSection("geometry"))}function ze(){u.deleteElement(m.value,b.value,s.element.id),r.clearSelection()}return(F,te)=>(n(),l("div",{class:V(["element-wrapper",c.value&&"selected",z.value&&"locked"]),style:de(we.value),onMousedown:h,onDblclick:Ee},[Dn(F.$slots,"default",{},void 0),c.value&&!z.value?(n(),l(Q,{key:0},[te[6]||(te[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:te[3]||(te[3]=Se(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:te[0]||(te[0]=J=>Me("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:te[1]||(te[1]=J=>Me("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:te[2]||(te[2]=J=>Me("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Pe},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Ne,title:"Duplicate element","aria-label":"Duplicate element"},[...te[4]||(te[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:ze,title:"Delete element","aria-label":"Delete element"},[...te[5]||(te[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(n(),l(Q,null,re(f,J=>e("div",{key:J,class:V(["resize-handle",`handle-${J}`]),style:de({cursor:ce(J)}),onMousedown:Se(le=>Y(le,J),["stop"])},null,46,lc)),64))],64)):q("",!0),c.value&&z.value?(n(),l("div",ic)):q("",!0)],38))}},sc=Be(ac,[["__scopeId","data-v-d539ca8b"]]),bt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=E(()=>s.element.content||{}),u=We(),p=Ge(),m=L(!1),b=L(null),c=L("");je(()=>r.value.text,j=>{m.value||(c.value=j||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function z(){u.selectedElementId===s.element.id&&(m.value=!0,xn(()=>{if(b.value)if(b.value.focus(),typeof b.value.setSelectionRange=="function"){const j=b.value.value.length;b.value.setSelectionRange(j,j)}else{const j=document.createRange();j.selectNodeContents(b.value),j.collapse(!1);const Z=window.getSelection();Z.removeAllRanges(),Z.addRange(j)}}))}function ie(j){m.value&&j.stopPropagation()}function X(){m.value=!1;const j=c.value;p.updateElement(u.projectId,u.currentSlideId,s.element.id,{content:{...s.element.content,text:j}})}return(j,Z)=>m.value?ne((n(),l("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:b,"onUpdate:modelValue":Z[0]||(Z[0]=oe=>c.value=oe),onBlur:X,onMousedown:ie,style:de({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[ge,c.value]]):(n(),l("div",{key:1,class:"text-element",onDblclick:z,style:de({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},$(c.value),37))}},rc=["src","alt"],dc={key:1,class:"image-placeholder"},uc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},cc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(y){return(s,r)=>{var u,p,m,b;return n(),l("div",{class:"image-element",style:de({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((u=y.element.content)==null?void 0:u.borderRadius)||0)+"px",border:`${((p=y.element.content)==null?void 0:p.borderWidth)||0}px solid ${((m=y.element.content)==null?void 0:m.borderColor)||"transparent"}`})},[(b=y.element.content)!=null&&b.src?(n(),l("img",{key:0,src:y.element.content.src,alt:y.element.content.alt||"",style:de({width:"100%",height:"100%",objectFit:y.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,rc)):(n(),l("div",dc,[(n(),l("svg",uc,[...r[0]||(r[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),r[1]||(r[1]=e("span",null,"Image",-1))]))],4)}}},pc=Be(cc,[["__scopeId","data-v-401e9ff3"]]),vc={class:"shape-element",style:{width:"100%",height:"100%"}},fc=["width","height"],mc=["points","fill","stroke","stroke-width"],gc={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=E(()=>s.element.content||{}),u=E(()=>{const b=r.value.shapeType||"rectangle",c={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return b==="circle"?{...c,borderRadius:"50%"}:b==="rectangle"?{...c,borderRadius:(r.value.borderRadius||0)+"px"}:c}),p=E(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),m=E(()=>{const b=s.element.width||150,c=s.element.height||100,z=r.value.shapeType;if(z==="triangle")return`${b/2},0 ${b},${c} 0,${c}`;if(z==="diamond")return`${b/2},0 ${b},${c/2} ${b/2},${c} 0,${c/2}`;if(z==="arrow")return`0,${c*.3} ${b*.6},${c*.3} ${b*.6},0 ${b},${c/2} ${b*.6},${c} ${b*.6},${c*.7} 0,${c*.7}`;if(z==="star"){const ie=b/2,X=c/2,j=Math.min(b,c)/2,Z=j*.4;let oe="";for(let _=0;_<10;_++){const a=(_*36-90)*Math.PI/180,h=_%2===0?j:Z;oe+=`${ie+h*Math.cos(a)},${X+h*Math.sin(a)} `}return oe.trim()}return""});return(b,c)=>(n(),l("div",vc,[p.value?(n(),l("svg",{key:1,width:y.element.width,height:y.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:m.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,mc)],8,fc)):(n(),l("div",{key:0,style:de(u.value)},null,4))]))}},bc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=E(()=>s.element.content||{}),u=E(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},m=p[r.value.variant||"primary"]||p.primary;return{...m,background:r.value.bgColor||m.background,color:r.value.textColor||m.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:m.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(p,m)=>(n(),l("div",{class:"button-element",style:de({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...u.value})},$(r.value.label||"Button"),5))}},yc={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},hc={class:"popup-header"},xc={class:"popup-body"},wc={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=E(()=>s.element.content||{}),u=L(!1);function p(m){m.stopPropagation(),u.value=!u.value}return(m,b)=>(n(),l("div",yc,[e("div",{class:"hotspot-btn",style:de({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Se(p,["stop"])},$(r.value.icon||"?"),5),st(mt,{name:"fade"},{default:et(()=>[u.value?(n(),l("div",{key:0,class:"hotspot-popup",style:de({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",hc,[e("strong",null,$(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:b[0]||(b[0]=Se(c=>u.value=!1,["stop"]))},"×")]),e("div",xc,$(r.value.popupContent||"Add your content in the properties panel."),1)],4)):q("",!0)]),_:1})]))}},kc=Be(wc,[["__scopeId","data-v-ef5f15f6"]]),Cc={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},$c=["src"],Sc=["src","poster","autoplay","controls","loop","muted"],Ic={key:2,class:"video-placeholder"},Ac={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Ec={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=E(()=>s.element.content||{}),u=E(()=>{const m=r.value.src||"";return m.includes("youtube")||m.includes("youtu.be")}),p=E(()=>{var b,c;const m=r.value.src||"";if(u.value){const z=(b=m.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:b[1];return z?`https://www.youtube.com/embed/${z}`:""}if(m.includes("vimeo.com")){const z=(c=m.match(/vimeo\.com\/(\d+)/))==null?void 0:c[1];return z?`https://player.vimeo.com/video/${z}`:""}return""});return(m,b)=>(n(),l("div",Cc,[p.value?(n(),l("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,$c)):r.value.src&&!p.value?(n(),l("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:de({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,Sc)):(n(),l("div",Ic,[(n(),l("svg",Ac,[...b[0]||(b[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),b[1]||(b[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Mc=Be(Ec,[["__scopeId","data-v-dfea1a16"]]),Pc=["stroke"],zc=["src","controls","autoplay","loop"],Tc={key:1,style:{"font-size":"11px",color:"#aaa"}},Nc={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(y){return(s,r)=>{var u,p,m,b,c,z,ie,X,j;return n(),l("div",{class:"audio-element",style:de({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((u=y.element.content)==null?void 0:u.bgColor)||"#ede7ff",border:`1px solid ${((p=y.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(n(),l("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((m=y.element.content)==null?void 0:m.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Pc)),e("span",{style:de({fontSize:"13px",color:((b=y.element.content)==null?void 0:b.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},$(((c=y.element.content)==null?void 0:c.label)||"Audio Player"),5),(z=y.element.content)!=null&&z.src?(n(),l("audio",{key:0,src:y.element.content.src,controls:((ie=y.element.content)==null?void 0:ie.controls)!==!1,autoplay:(X=y.element.content)==null?void 0:X.autoplay,loop:(j=y.element.content)==null?void 0:j.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=Se(()=>{},["stop"]))},null,40,zc)):(n(),l("span",Tc,"No source"))],4)}}},Lc={class:"quiz-options"},jc=["onClick"],Bc={class:"opt-letter"},Dc={class:"opt-text"},_c={key:0},qc={class:"quiz-actions"},Rc=["disabled"],Fc={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=E(()=>s.element.content||{}),u=L(null),p=L(!1);function m(ie){p.value||(u.value=ie)}function b(){u.value!==null&&(p.value=!0)}function c(){u.value=null,p.value=!1}const z=E(()=>p.value&&u.value===(r.value.correctIndex??0));return(ie,X)=>(n(),l("div",{class:"quiz-element",style:de({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:de({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},$(r.value.question||"Question text…"),5),e("div",Lc,[(n(!0),l(Q,null,re(r.value.options||[],(j,Z)=>(n(),l("div",{key:Z,class:V(["quiz-opt",u.value===Z&&"selected",p.value&&Z===r.value.correctIndex&&"correct",p.value&&u.value===Z&&Z!==r.value.correctIndex&&"wrong"]),onClick:oe=>m(Z)},[e("span",Bc,$(String.fromCharCode(65+Z)),1),e("span",Dc,$(j),1)],10,jc))),128))]),p.value?(n(),l("div",{key:0,class:V(["quiz-feedback",z.value?"correct":"wrong"])},[U($(z.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!z.value&&r.value.explanation?(n(),l("span",_c,$(r.value.explanation),1)):q("",!0)],2)):q("",!0),e("div",qc,[p.value?(n(),l("button",{key:1,class:"quiz-btn secondary",onClick:c},"Try Again")):(n(),l("button",{key:0,class:"quiz-btn primary",disabled:u.value===null,onClick:b},"Submit",8,Rc))])],4))}},Uc=Be(Fc,[["__scopeId","data-v-ca2bd187"]]),Vc={key:0,class:"canvas-empty"},Oc={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},Wc={key:0,class:"canvas-device-frame","aria-hidden":"true"},Gc=["value"],Hc={class:"canvas-guide-label"},Qc={key:4,class:"drop-hint"},Yc={class:"canvas-info-bar"},Jc=["disabled"],Kc={class:"slide-index"},Xc=["disabled"],Zc={key:0},ep={__name:"EditorCanvas",setup(y){const s=We(),r=Ge(),u=L(null),p=L(null),m=L(1),b=E(()=>m.value*s.zoomLevel);qn("canvasScale",b);const c=E(()=>r.getProject(s.projectId)),z=E(()=>vt(c.value)),ie=E(()=>wn(c.value)),X=E(()=>z.value.width),j=E(()=>z.value.height),Z=E(()=>kn(X.value,j.value)),oe=E(()=>{var v,I;return(I=(v=c.value)==null?void 0:v.slides)==null?void 0:I.find(O=>O.id===s.currentSlideId)}),_=E(()=>{var v;return[...((v=c.value)==null?void 0:v.slides)||[]].sort((I,O)=>I.order-O.order)}),a=E(()=>_.value.findIndex(v=>v.id===s.currentSlideId)),h=E(()=>{var v;return{autoPlay:!1,motionPresets:[],...((v=c.value)==null?void 0:v.settings)||{}}}),w=E(()=>(Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]).filter(v=>v.scope==="group")),B=E(()=>{const v=new Set(s.selectedElementIds);return ve.value.filter(I=>v.has(I.id))}),f=L(""),D=E(()=>oe.value?oe.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:h.value.autoPlay&&Number(oe.value.duration||0)>0?{label:`Auto ${Number(oe.value.duration).toFixed(Number(oe.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function ee(){const v=w.value.find(O=>O.id===f.value);if(!v||!B.value.length)return;[...B.value].sort((O,G)=>(O.y||0)!==(G.y||0)?(O.y||0)-(G.y||0):(O.x||0)-(G.x||0)).forEach((O,G)=>{if(v.type==="auto"){r.updateElement(s.projectId,s.currentSlideId,O.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,O.id,{animations:[{type:v.type,delay:Math.max(0,Number(v.delay)||0)+G*Math.max(0,Number(v.stepDelay)||0),duration:Math.max(.1,Number(v.duration)||.72)}]})}),r.updateProject(s.projectId,{settings:{...h.value,motionPresets:(h.value.motionPresets||[]).map(O=>O.id===v.id?{...O,usageCount:Math.max(0,Number(O.usageCount||0))+1,lastUsedAt:Date.now()}:O)}})}function be(){if(!w.value.length){f.value="";return}w.value.some(v=>v.id===f.value)||(f.value=w.value[0].id)}const ve=E(()=>{var v;return[...((v=oe.value)==null?void 0:v.elements)||[]].sort((I,O)=>(I.zIndex||0)-(O.zIndex||0))}),N=E(()=>{const v=oe.value;return v?v.backgroundType==="gradient"&&v.backgroundGradient?{background:v.backgroundGradient}:v.backgroundType==="image"&&v.backgroundImage?{backgroundImage:`url(${v.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:v.background||"#fff"}:{background:"#fff"}}),T=E(()=>`scale(${b.value})`);function W(){if(!u.value)return;const{clientWidth:v,clientHeight:I}=u.value,O=(v-80)/X.value,G=(I-80)/j.value;m.value=Math.min(O,G,1)}let ae=null;bn(()=>{W(),ae=new ResizeObserver(W),u.value&&ae.observe(u.value),be()}),yn(()=>ae==null?void 0:ae.disconnect()),je(w,()=>{be()},{deep:!0,immediate:!0}),je(z,()=>{W()},{deep:!0});const Y=L({x:0,y:0}),fe=L({x:0,y:0}),me=L(!1),Ee=L(!1),we=E(()=>{var v,I;return((v=ie.value)==null?void 0:v.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((I=ie.value)==null?void 0:I.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),ce=E(()=>{if(!we.value)return null;if(we.value.tone==="mobile"){const O=X.value*.08,G=j.value*.05;return{x:O,y:G,width:X.value-O*2,height:j.value-G*2}}const v=X.value*.08,I=j.value*.08;return{x:v,y:I,width:X.value-v*2,height:j.value-I*2}}),Me=E(()=>{if(!ce.value)return[];const v=ce.value;return ve.value.filter(I=>I.visible!==!1).filter(I=>{const O=Number(I.x||0),G=Number(I.y||0),C=O+Number(I.width||0),$e=G+Number(I.height||0);return O<v.x||G<v.y||C>v.x+v.width||$e>v.y+v.height}).map(I=>I.id)}),Pe=E(()=>s.selectedElementIds.filter(v=>Me.value.includes(v)).length),Ne=E(()=>Me.value.length),ze=E(()=>!we.value||!Ne.value?null:Pe.value?`${Pe.value} selected ${Pe.value===1?"element is":"elements are"} outside the ${we.value.label.toLowerCase()}.`:`${Ne.value} ${Ne.value===1?"element is":"elements are"} outside the ${we.value.label.toLowerCase()}.`),F=E(()=>{if(!me.value)return null;const v=Math.min(Y.value.x,fe.value.x),I=Math.min(Y.value.y,fe.value.y),O=Math.abs(fe.value.x-Y.value.x),G=Math.abs(fe.value.y-Y.value.y);return{x:v,y:I,width:O,height:G}});function te(v){!me.value&&(v.target===p.value||v.target===v.currentTarget)&&s.clearSelection()}function J(v){return v?Array.from(v.files||[]).some(I=>I.type.startsWith("image/")):!1}function le(v,I,O){if(!v||!v.type.startsWith("image/"))return;const G=new FileReader;G.onload=()=>{const C=String(G.result||"");if(!C)return;const $e=new Image;$e.onload=()=>{const qe=p.value.getBoundingClientRect(),De=(I-qe.left)/b.value,Ke=(O-qe.top)/b.value,Oe=Math.min(420/$e.width,280/$e.height,1),He=Math.max(120,Math.round($e.width*Oe)),Qe=Math.max(80,Math.round($e.height*Oe)),ot=Math.max(0,Math.min(X.value-He,Math.round(De-He/2))),nt=Math.max(0,Math.min(j.value-Qe,Math.round(Ke-Qe/2))),dt=r.addElement(s.projectId,s.currentSlideId,"image",{x:ot,y:nt,width:He,height:Qe,content:{src:C,alt:v.name,objectFit:"cover"}});dt&&(s.selectElement(dt.id),s.setActiveTool("select"),s.setRightPanel("properties"))},$e.src=C},G.readAsDataURL(v)}function Ce(v){J(v.dataTransfer)&&(v.preventDefault(),v.dataTransfer.dropEffect="copy",Ee.value=!0)}function ue(v){var I;(I=v.currentTarget)!=null&&I.contains(v.relatedTarget)||(Ee.value=!1)}function S(v){if(!J(v.dataTransfer))return;v.preventDefault(),Ee.value=!1;const I=Array.from(v.dataTransfer.files||[]).find(O=>O.type.startsWith("image/"));I&&le(I,v.clientX,v.clientY)}function x(v){const I=s.activeTool;if(v.target!==p.value&&v.target!==v.currentTarget)return;v.preventDefault(),v.stopPropagation();const O=p.value.getBoundingClientRect(),G=(v.clientX-O.left)/b.value,C=(v.clientY-O.top)/b.value;if(I==="select"){me.value=!0,Y.value={x:G,y:C},fe.value={x:G,y:C};const De=Le=>{fe.value={x:(Le.clientX-O.left)/b.value,y:(Le.clientY-O.top)/b.value}},Ke=()=>{window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",Ke);const Le=F.value;if(Le&&(Le.width>2||Le.height>2)){const tt=ve.value.filter(Oe=>{const He=Oe.x,Qe=Oe.y,ot=Oe.width||100,nt=Oe.height||100;return He<Le.x+Le.width&&He+ot>Le.x&&Qe<Le.y+Le.height&&Qe+nt>Le.y}).map(Oe=>Oe.id);tt.length>0?s.setSelection(tt):s.clearSelection()}else s.clearSelection();setTimeout(()=>{me.value=!1},0)};window.addEventListener("mousemove",De),window.addEventListener("mouseup",Ke);return}const $e=De=>s.snapToGrid?Math.round(De/s.gridSize)*s.gridSize:De,qe=r.addElement(s.projectId,s.currentSlideId,I,{x:$e(G-75),y:$e(C-40)});qe&&(s.selectElement(qe.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const P=E(()=>{if(!s.showGrid)return{};const v=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${v}px ${v}px`}}),g={text:bt,heading:bt,image:pc,shape:gc,button:bc,hotspot:kc,video:Mc,audio:Nc,quiz:Uc,chart:tl,divider:"div"};function Ie(v){return g[v]||bt}function he(v){var I,O;return v.type!=="divider"?{}:{borderTop:`${((I=v.content)==null?void 0:I.thickness)||2}px solid ${((O=v.content)==null?void 0:O.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const pe=L({show:!1,x:0,y:0,elId:null});function xe(v,I){v.preventDefault(),pe.value={show:!0,x:v.clientX,y:v.clientY,elId:I},s.selectElement(I),setTimeout(()=>window.addEventListener("click",Ue,{once:!0}),0)}function Ue(){pe.value.show=!1}function Ye(){if(pe.value.elId){const v=r.duplicateElement(s.projectId,s.currentSlideId,pe.value.elId);v&&s.selectElement(v.id)}Ue()}function Ve(){pe.value.elId&&(r.deleteElement(s.projectId,s.currentSlideId,pe.value.elId),s.clearSelection()),Ue()}function rt(){pe.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,pe.value.elId,"up"),Ue()}function A(){pe.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,pe.value.elId,"down"),Ue()}function i(){const v=a.value,I=r.addSlide(s.projectId,v);I&&s.setCurrentSlide(I.id)}function R(){const v=a.value;v>0&&s.setCurrentSlide(_.value[v-1].id)}function se(){const v=a.value;v<_.value.length-1&&s.setCurrentSlide(_.value[v+1].id)}return(v,I)=>{var O;return n(),l("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:u},[oe.value?(n(),l(Q,{key:1},[e("div",{class:V(["canvas-zoom-wrapper",[we.value&&`canvas-zoom-wrapper-${we.value.tone}`]]),style:de({transform:T.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:de({width:X.value+"px",height:j.value+"px",...N.value,...P.value}),onClick:te,onMousedown:x,onDragover:Ce,onDragleave:ue,onDrop:S,onContextmenu:I[3]||(I[3]=Se(()=>{},["prevent"]))},[we.value?(n(),l("div",Wc)):q("",!0),k(s).multiSelection&&w.value.length?(n(),l("div",{key:1,class:"selection-preset-chip",onMousedown:I[1]||(I[1]=Se(()=>{},["stop"]))},[I[7]||(I[7]=e("span",{class:"selection-preset-label"},"Sequence",-1)),ne(e("select",{"onUpdate:modelValue":I[0]||(I[0]=G=>f.value=G),class:"selection-preset-select"},[(n(!0),l(Q,null,re(w.value,G=>(n(),l("option",{key:G.id,value:G.id},$(G.name),9,Gc))),128))],512),[[ct,f.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Se(ee,["stop"])},"Apply")],32)):q("",!0),ze.value?(n(),l("div",{key:2,class:"canvas-guide-warning",onMousedown:I[2]||(I[2]=Se(()=>{},["stop"]))},[I[8]||(I[8]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,$(ze.value),1)],32)):q("",!0),(n(!0),l(Q,null,re(ve.value,G=>(n(),_e(sc,{key:G.id,element:G,onContextmenu:Se(C=>xe(C,G.id),["stop"])},{default:et(()=>[(n(),_e(_n(Ie(G.type)),{element:G,style:de(G.type==="divider"?he(G):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),we.value?(n(),l("div",{key:3,class:V(["canvas-guide",[`canvas-guide-${we.value.tone}`,Ne.value&&"canvas-guide-warning-state"]]),style:de(we.value.style),"aria-hidden":"true"},[e("span",Hc,$(we.value.label)+" · "+$(Z.value),1)],6)):q("",!0),k(s).activeTool!=="select"||Ee.value?(n(),l("div",Qc,$(Ee.value?"Drop image to insert it on this slide":`Click anywhere to add ${k(s).activeTool}`),1)):q("",!0),me.value&&F.value?(n(),l("div",{key:5,class:"selection-marquee",style:de({left:F.value.x+"px",top:F.value.y+"px",width:F.value.width+"px",height:F.value.height+"px"})},null,4)):q("",!0)],36)],6),e("div",Yc,[e("button",{class:"bar-btn",onClick:i},"Add page"),e("button",{class:"bar-btn icon",onClick:R,disabled:a.value<=0},"◀",8,Jc),e("span",Kc,$(a.value+1)+" / "+$(_.value.length),1),e("button",{class:"bar-btn icon",onClick:se,disabled:a.value>=_.value.length-1},"▶",8,Xc),e("span",null,$(X.value)+" × "+$(j.value)+"px",1),I[9]||(I[9]=e("span",null,"·",-1)),e("span",null,$(((O=oe.value.elements)==null?void 0:O.length)||0)+" elements",1),I[10]||(I[10]=e("span",null,"·",-1)),e("span",{class:V(["playback-badge",`playback-badge-${D.value.tone}`])},$(D.value.label),3),k(s).hasSelection?(n(),l("span",Zc,"· "+$(k(s).selectedElementIds.length)+" selected",1)):q("",!0),e("button",{class:"bar-btn ai",onClick:I[4]||(I[4]=G=>k(s).setRightPanel("ai"))},"AI")])],64)):(n(),l("div",Vc,[(n(),l("svg",Oc,[...I[5]||(I[5]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),I[6]||(I[6]=e("p",null,"Select a slide to start editing",-1))])),(n(),_e(hn,{to:"body"},[pe.value.show?(n(),l("div",{key:0,class:"ctx-menu",style:de({left:pe.value.x+"px",top:pe.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Ye},"Duplicate"),e("button",{class:"ctx-item",onClick:rt},"Bring Forward"),e("button",{class:"ctx-item",onClick:A},"Send Backward"),I[11]||(I[11]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Ve},"Delete")],4)):q("",!0)]))],512)}}},tp=Be(ep,[["__scopeId","data-v-c6947122"]]),op={class:"ai-panel"},np={class:"ai-mode-tabs"},lp=["onClick"],ip={class:"ai-content"},ap={class:"form-group"},sp={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},rp={key:0,class:"form-group"},dp={key:1,class:"form-group"},up={class:"form-group"},cp={class:"form-group"},pp={class:"prompt-label-row"},vp={key:1,class:"prompt-auto-badge"},fp={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},mp=["disabled"],gp={key:0,class:"spinner"},bp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},yp={key:3,class:"creative-options-wrap"},hp={class:"result-header"},xp={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},wp={key:1,class:"creative-options-list"},kp={class:"creative-title"},Cp={class:"creative-angle"},$p=["onClick"],Sp={class:"form-group"},Ip={class:"quiz-config-row"},Ap={class:"form-group",style:{flex:"1"}},Ep={class:"form-group",style:{flex:"1"}},Mp={class:"form-group"},Pp={class:"qtype-btns"},zp=["onClick"],Tp={class:"qtype-icon"},Np={class:"form-group"},Lp={class:"form-group"},jp={class:"prompt-label-row"},Bp={key:1,class:"prompt-auto-badge"},Dp=["disabled"],_p={key:0,class:"spinner"},qp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Rp={key:0,class:"quiz-results"},Fp={class:"quiz-results-header"},Up={class:"form-label"},Vp={class:"quiz-header-actions"},Op={class:"regen-row"},Wp=["disabled"],Gp={key:0,class:"spinner spinner-sm"},Hp={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Qp=["disabled"],Yp={class:"quiz-card-header"},Jp={class:"quiz-card-check"},Kp=["onUpdate:modelValue"],Xp={class:"q-num"},Zp={class:"q-badges"},ev={class:"badge type-badge"},tv={class:"q-question"},ov={class:"q-options"},nv={class:"q-option-letter"},lv={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},iv={key:0,class:"q-explanation"},av=["disabled"],sv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rv=["disabled"],dv={key:0,class:"spinner"},uv={key:0,class:"selected-text-preview"},cv={class:"text-preview"},pv={key:1,class:"ai-hint"},vv={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},fv=["disabled"],mv={key:0,class:"spinner"},gv={key:0,class:"selected-text-preview"},bv={class:"text-preview"},yv={key:1,class:"ai-hint"},hv={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},xv=["disabled"],wv={key:0,class:"spinner"},kv={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Cv={class:"result-header"},$v={class:"result-actions"},Sv=["disabled"],Iv={class:"textarea result-display"},Av={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ev=["disabled"],Mv={key:0,class:"spinner"},Pv={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},zv={class:"textarea result-display",style:{color:"var(--color-primary)"}},Tv={key:6,class:"ai-settings"},Nv={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Lv=["value"],jv={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Bv=["value"],Dv={key:0,class:"demo-notice"},_v={key:7,class:"result-area"},qv={class:"result-header"},Rv={class:"result-pre"},Fv={class:"result-actions"},Uv=["disabled"],Vv={key:8,class:"ai-error"},Ov={__name:"AIAssistant",setup(y){const s=Un(),r=We(),u=Ge(),p=L("generate"),m=L(""),b=L(""),c=L("");je(p,()=>{c.value=""}),je(()=>r.aiPanelMode,A=>{A&&(p.value=A)},{immediate:!0});const z=L(4),ie=L("general"),X=L("Spanish"),j=L(""),Z=L(""),oe=L(""),_=L(!1),a=L("single"),h=L(5),w=L("slide"),B=L([]),f=L(""),D=E(()=>{const A=b.value.trim()||"[your topic]";if(a.value==="deck"){let se=`Create a complete ${h.value}-slide learning deck about "${A}".`;return Z.value.trim()&&(se+=`
Additional context: ${Z.value.trim()}`),se+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,se+=`
Make each slide distinct, logically sequenced, and specific to "${A}".`,se}let R=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[ie.value]||"educational slide"} about "${A}".`;return Z.value.trim()&&(R+=`
Additional context: ${Z.value.trim()}`),R+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${A}" — no generic placeholders.`,R});je(D,A=>{_.value||(oe.value=A)},{immediate:!0});function ee(){oe.value=D.value,_.value=!1}const be=L(""),ve=L("intermediate"),N=L("multiple-choice"),T=L(""),W=L([]),ae=L(""),Y=L(!1),fe=E(()=>{const A=be.value.trim()||"[your topic]",i={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},R={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let se=`Generate ${z.value} ${i[ve.value]} ${R[N.value]} quiz questions about "${A}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return T.value.trim()&&(se+=`
Learning objective: ${T.value.trim()}`),se});je(fe,A=>{Y.value||(ae.value=A)},{immediate:!0});function me(){ae.value=fe.value,Y.value=!1}const Ee=E(()=>u.getProject(r.projectId)),we=E(()=>{var A,i;return(i=(A=Ee.value)==null?void 0:A.slides)==null?void 0:i.find(R=>R.id===r.currentSlideId)}),ce=E(()=>{var A,i;return r.selectedElementId?(i=(A=we.value)==null?void 0:A.elements)==null?void 0:i.find(R=>R.id===r.selectedElementId):null});async function Me(){if(!b.value.trim()&&!oe.value.trim())return;if(c.value="",B.value=[],f.value="",a.value==="deck"){const i=await s.generateSlideDeck(b.value,h.value,{objective:Z.value,customPrompt:oe.value});if(i!=null&&i.length){const R=i.map(se=>Pe(se));c.value=JSON.stringify({slides:R},null,2),te(R,{replaceGenerated:!0})}return}if(w.value==="options"){await Ce();return}const A=await s.generateSlideContent(b.value,ie.value,Z.value,oe.value);if(A){const i=Pe(A);c.value=JSON.stringify(i,null,2),J(i,{replaceGenerated:!0})}}function Pe(A){const i=A&&typeof A=="object"?A:{},se=(Array.isArray(i.bullets)?i.bullets:typeof i.bullets=="string"?i.bullets.split(`
`):[]).map(v=>String(v||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(i.title||b.value||"Untitled Slide").trim(),subtitle:String(i.subtitle||"").trim(),bullets:se,callout:String(i.callout||"").trim()}}function Ne(A,i){var v,I,O;const R=(I=(v=u.getProject(A))==null?void 0:v.slides)==null?void 0:I.find(G=>G.id===i);if(!((O=R==null?void 0:R.elements)!=null&&O.length))return;R.elements.filter(G=>{var C;return((C=G.meta)==null?void 0:C.source)==="ai-content"}).map(G=>G.id).forEach(G=>{u.deleteElement(A,i,G)})}function ze(A,i,R,se){return u.addElement(A,i,R,{...se,meta:{...se.meta||{},source:"ai-content"}})}function F(A,i,R,{replaceGenerated:se=!1}={}){var v;if(!(!A||!i)){if(se&&Ne(A,i),R.title&&(u.updateSlide(A,i,{title:R.title}),ze(A,i,"heading",{x:60,y:40,width:840,height:80,content:{text:R.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),R.subtitle&&ze(A,i,"text",{x:60,y:130,width:840,height:50,content:{text:R.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(v=R.bullets)!=null&&v.length){const I=R.bullets.map(O=>`• ${O}`).join(`
`);ze(A,i,"text",{x:60,y:R.subtitle?200:150,width:840,height:200,content:{text:I,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}R.callout&&(ze(A,i,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),ze(A,i,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${R.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function te(A,{replaceGenerated:i=!1}={}){if(!r.currentSlideId)return;const R=r.projectId;if(!R||!Array.isArray(A)||!A.length)return;A.map(v=>Pe(v)).forEach(v=>{const I=u.addSlide(R);I&&F(R,I.id,v,{replaceGenerated:i})})}function J(A=null,{replaceGenerated:i=!1}={}){if(!r.currentSlideId)return;let R=A;if(!R){if(!c.value)return;try{R=JSON.parse(c.value)}catch(O){console.warn("Could not parse AI content:",O);return}}const se=Pe(R),v=r.projectId,I=r.currentSlideId;!v||!I||F(v,I,se,{replaceGenerated:i})}function le(){if(c.value){if(a.value==="deck"){try{const A=JSON.parse(c.value),i=Array.isArray(A)?A:A==null?void 0:A.slides;if(!Array.isArray(i)||!i.length)return;te(i,{replaceGenerated:!0})}catch{return}return}J()}}async function Ce(){const A=b.value.trim()||"[your topic]",i=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${ie.value}" slide about "${A}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,R=await s.generate(i,{type:"creativeOptions",topic:A,slideType:ie.value});if(R)try{const se=JSON.parse(R.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(se))throw new Error("Options must be an array");B.value=se.slice(0,3).map((v,I)=>({title:String((v==null?void 0:v.title)||`Option ${I+1}`),angle:String((v==null?void 0:v.angle)||""),prompt:String((v==null?void 0:v.prompt)||"")})).filter(v=>v.prompt.trim()),B.value.length||(f.value="No usable creative options were returned. Try generating again.")}catch{f.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function ue(A){A!=null&&A.prompt&&(oe.value=A.prompt,_.value=!0,w.value="slide",await Me())}async function S(A=!1){if(!be.value.trim()&&!ae.value.trim())return;A||(W.value=[]);const i=await s.generateQuiz(be.value,z.value,{difficulty:ve.value,questionType:N.value,objective:T.value,customPrompt:ae.value});if(i)if(A){const R=new Set(W.value.map(v=>v.question)),se=i.filter(v=>!R.has(v.question)).map(v=>({...v,_selected:!0}));W.value=[...W.value,...se]}else W.value=i.map(R=>({...R,_selected:!0}))}async function x(){const A=W.value.filter(R=>R._selected);if(!A.length)return;const i=r.projectId;A.forEach((R,se)=>{const v=u.addSlide(i);v&&(u.addElement(i,v.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:R.question,options:R.options,correctIndex:R.correctIndex,explanation:R.explanation||""}}),u.updateSlide(i,v.id,{title:`Q${se+1}: ${R.question.slice(0,40)}…`}))}),W.value=[]}function P(A){W.value.forEach(i=>i._selected=A)}async function g(){if(!j.value.trim())return;const A=await s.generateVoiceoverScript(j.value);A&&(c.value=A)}async function Ie(){var R,se;const A=(se=(R=ce.value)==null?void 0:R.content)==null?void 0:se.text;if(!A)return;const i=await s.generateTranslation(A,X.value);i&&(c.value=i)}async function he(){!c.value||!ce.value||u.updateElement(r.projectId,r.currentSlideId,ce.value.id,{content:{...ce.value.content,text:c.value}})}const pe=L(""),xe=L(!1);async function Ue(){if(pe.value.trim()){xe.value=!0,c.value="Optimizing prompt...";try{let A=pe.value;const i=await s.generateImagePrompt(pe.value);i&&(A=i.replace(/```(json)?\n?/g,"").trim()),c.value="Painting image... this takes about 10-20 seconds. Please wait.";const R=Math.floor(Math.random()*1e6),se=`https://image.pollinations.ai/prompt/${encodeURIComponent(A)}?width=600&height=400&nologo=true&seed=${R}`;await new Promise((v,I)=>{const O=new Image;O.onload=v,O.onerror=I,O.src=se}),u.addElement(r.projectId,r.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:se,objectFit:"cover"}}),c.value="Image added to slide!"}catch{c.value="Failed to generate image. Try a different prompt."}finally{xe.value=!1}}}async function Ye(){var i,R;if(!((R=(i=ce.value)==null?void 0:i.content)!=null&&R.text))return;const A=await s.improveText(ce.value.content.text,m.value||"Make it clearer and more engaging");A&&(c.value=A)}async function Ve(){!c.value||!ce.value||u.updateElement(r.projectId,r.currentSlideId,ce.value.id,{content:{...ce.value.content,text:c.value}})}async function rt(){if(!m.value.trim())return;const A=await s.generate(m.value);A&&(c.value=A)}return(A,i)=>{var R,se,v,I,O,G;return n(),l("div",op,[e("div",np,[(n(),l(Q,null,re([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],C=>e("button",{key:C.id,class:V(["ai-mode-btn",p.value===C.id&&"active"]),onClick:$e=>p.value=C.id},$(C.label),11,lp)),64))]),e("div",ip,[p.value==="generate"?(n(),l(Q,{key:0},[e("div",ap,[i[34]||(i[34]=e("label",{class:"form-label"},[U("Topic / Subject "),e("span",{class:"required"},"*")],-1)),ne(e("input",{"onUpdate:modelValue":i[0]||(i[0]=C=>b.value=C),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:mn(Me,["enter"])},null,544),[[ge,b.value]])]),e("div",sp,[e("button",{class:V(["output-mode-btn",a.value==="single"&&"active"]),onClick:i[1]||(i[1]=C=>a.value="single")},"Single Slide",2),e("button",{class:V(["output-mode-btn",a.value==="deck"&&"active"]),onClick:i[2]||(i[2]=C=>a.value="deck")},"Slide Deck",2)]),a.value==="single"?(n(),l("div",rp,[i[36]||(i[36]=e("label",{class:"form-label"},"Slide Type",-1)),ne(e("select",{"onUpdate:modelValue":i[3]||(i[3]=C=>ie.value=C),class:"select"},[...i[35]||(i[35]=[Fe('<option value="general" data-v-d6c5ae2b>General</option><option value="intro" data-v-d6c5ae2b>Introduction</option><option value="overview" data-v-d6c5ae2b>Overview</option><option value="concept" data-v-d6c5ae2b>Concept Explanation</option><option value="example" data-v-d6c5ae2b>Example / Case Study</option><option value="summary" data-v-d6c5ae2b>Summary</option><option value="callout" data-v-d6c5ae2b>Key Takeaway</option>',7)])],512),[[ct,ie.value]])])):(n(),l("div",dp,[i[37]||(i[37]=e("label",{class:"form-label"},"Number of Slides",-1)),ne(e("input",{"onUpdate:modelValue":i[4]||(i[4]=C=>h.value=C),class:"input",type:"number",min:"1",max:"20"},null,512),[[ge,h.value,void 0,{number:!0}]]),i[38]||(i[38]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",up,[i[39]||(i[39]=e("label",{class:"form-label"},[U("Description "),e("span",{class:"optional"},"(optional)")],-1)),ne(e("textarea",{"onUpdate:modelValue":i[5]||(i[5]=C=>Z.value=C),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[ge,Z.value]])]),e("div",cp,[e("div",pp,[i[41]||(i[41]=e("label",{class:"form-label"},"AI Prompt",-1)),_.value?(n(),l("button",{key:0,class:"prompt-reset-btn",onClick:ee,title:"Reset to auto-generated prompt"},[...i[40]||(i[40]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),U(" Reset ",-1)])])):(n(),l("span",vp,"auto"))]),ne(e("textarea",{"onUpdate:modelValue":i[6]||(i[6]=C=>oe.value=C),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:i[7]||(i[7]=C=>_.value=!0),spellcheck:"false"},null,544),[[ge,oe.value]]),i[42]||(i[42]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),a.value==="single"?(n(),l("div",fp,[e("button",{class:V(["output-mode-btn",w.value==="slide"&&"active"]),onClick:i[8]||(i[8]=C=>w.value="slide")},"Show on Slide",2),e("button",{class:V(["output-mode-btn",w.value==="options"&&"active"]),onClick:i[9]||(i[9]=C=>w.value="options")},"Creative Options",2)])):q("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating||!b.value.trim()&&!oe.value.trim()||a.value==="deck"&&(!h.value||h.value<1||h.value>20),onClick:Me},[k(s).isGenerating?(n(),l("span",gp)):(n(),l("svg",bp,[...i[43]||(i[43]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),U(" "+$(k(s).isGenerating?"Generating…":a.value==="deck"?c.value?`Regenerate ${h.value} Slides`:`Generate ${h.value} Slides`:w.value==="slide"?c.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,mp),a.value==="single"&&w.value==="options"&&(B.value.length||f.value)?(n(),l("div",yp,[e("div",hp,[i[44]||(i[44]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:i[10]||(i[10]=C=>{B.value=[],f.value=""})},"Clear")]),f.value?(n(),l("div",xp,[i[45]||(i[45]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),U(" "+$(f.value),1)])):(n(),l("div",wp,[(n(!0),l(Q,null,re(B.value,(C,$e)=>(n(),l("article",{key:$e,class:"creative-option-card"},[e("h4",kp,$(C.title),1),e("p",Cp,$(C.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:qe=>ue(C)},"Use This Option",8,$p)]))),128))]))])):q("",!0)],64)):p.value==="quiz"?(n(),l(Q,{key:1},[e("div",Sp,[i[46]||(i[46]=e("label",{class:"form-label"},[U("Quiz Topic "),e("span",{class:"required"},"*")],-1)),ne(e("input",{"onUpdate:modelValue":i[11]||(i[11]=C=>be.value=C),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:mn(S,["enter"])},null,544),[[ge,be.value]])]),e("div",Ip,[e("div",Ap,[i[48]||(i[48]=e("label",{class:"form-label"},"Questions",-1)),ne(e("select",{"onUpdate:modelValue":i[12]||(i[12]=C=>z.value=C),class:"select"},[...i[47]||(i[47]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[ct,z.value,void 0,{number:!0}]])]),e("div",Ep,[i[50]||(i[50]=e("label",{class:"form-label"},"Difficulty",-1)),ne(e("select",{"onUpdate:modelValue":i[13]||(i[13]=C=>ve.value=C),class:"select"},[...i[49]||(i[49]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[ct,ve.value]])])]),e("div",Mp,[i[51]||(i[51]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Pp,[(n(),l(Q,null,re([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],C=>e("button",{key:C.id,class:V(["qtype-btn",N.value===C.id&&"active"]),onClick:$e=>N.value=C.id},[e("span",Tp,$(C.icon),1),e("span",null,$(C.label),1)],10,zp)),64))])]),e("div",Np,[i[52]||(i[52]=e("label",{class:"form-label"},[U("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),ne(e("input",{"onUpdate:modelValue":i[14]||(i[14]=C=>T.value=C),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[ge,T.value]])]),e("div",Lp,[e("div",jp,[i[54]||(i[54]=e("label",{class:"form-label"},"AI Prompt",-1)),Y.value?(n(),l("button",{key:0,class:"prompt-reset-btn",onClick:me,title:"Reset to auto-generated prompt"},[...i[53]||(i[53]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),U(" Reset ",-1)])])):(n(),l("span",Bp,"auto"))]),ne(e("textarea",{"onUpdate:modelValue":i[15]||(i[15]=C=>ae.value=C),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:i[16]||(i[16]=C=>Y.value=!0),spellcheck:"false"},null,544),[[ge,ae.value]]),i[55]||(i[55]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating||!be.value.trim()&&!ae.value.trim(),onClick:i[17]||(i[17]=C=>S(!1))},[k(s).isGenerating?(n(),l("span",_p)):(n(),l("svg",qp,[...i[56]||(i[56]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),U(" "+$(k(s).isGenerating?"Generating…":`Generate ${z.value} Questions`),1)],8,Dp),W.value.length?(n(),l("div",Rp,[e("div",Fp,[e("span",Up,$(W.value.length)+" Questions",1),e("div",Vp,[e("button",{class:"btn btn-ghost btn-sm",onClick:i[18]||(i[18]=C=>P(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:i[19]||(i[19]=C=>P(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:i[20]||(i[20]=C=>W.value=[])},"Clear")])]),e("div",Op,[e("button",{class:"btn btn-secondary regen-btn",disabled:k(s).isGenerating,onClick:i[21]||(i[21]=C=>S(!1)),title:"Replace all questions with a new set"},[k(s).isGenerating?(n(),l("span",Gp)):(n(),l("svg",Hp,[...i[57]||(i[57]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),i[58]||(i[58]=U(" Regenerate ",-1))],8,Wp),e("button",{class:"btn btn-ghost regen-btn",disabled:k(s).isGenerating,onClick:i[22]||(i[22]=C=>S(!0)),title:"Generate more and append to current list"},[...i[59]||(i[59]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),U(" Add More ",-1)])],8,Qp)]),(n(!0),l(Q,null,re(W.value,(C,$e)=>(n(),l("div",{key:$e,class:V(["quiz-card",{deselected:!C._selected}])},[e("div",Yp,[e("label",Jp,[ne(e("input",{type:"checkbox","onUpdate:modelValue":qe=>C._selected=qe},null,8,Kp),[[pt,C._selected]]),e("span",Xp,"Q"+$($e+1),1)]),e("div",Zp,[e("span",{class:V(["badge difficulty-badge",C.difficulty])},$(C.difficulty),3),e("span",ev,$(C.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",tv,$(C.question),1),e("div",ov,[(n(!0),l(Q,null,re(C.options,(qe,De)=>(n(),l("div",{key:De,class:V(["q-option",De===C.correctIndex&&"correct"])},[e("span",nv,$(["A","B","C","D"][De]),1),e("span",null,$(qe),1),De===C.correctIndex?(n(),l("svg",lv,[...i[60]||(i[60]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):q("",!0)],2))),128))]),C.explanation?(n(),l("div",iv,[i[61]||(i[61]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),U(" "+$(C.explanation),1)])):q("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!W.value.filter(C=>C._selected).length,onClick:x},[i[62]||(i[62]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),U(" Add "+$(W.value.filter(C=>C._selected).length)+" Selected as Quiz Slides ",1)],8,av)])):q("",!0)],64)):p.value==="voiceover"?(n(),l(Q,{key:2},[e("div",sv,[i[63]||(i[63]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),ne(e("textarea",{"onUpdate:modelValue":i[23]||(i[23]=C=>j.value=C),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[ge,j.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating,onClick:g},[k(s).isGenerating?(n(),l("span",dv)):q("",!0),U(" "+$(k(s).isGenerating?"Generating…":"Generate Script"),1)],8,rv)],64)):p.value==="improve"?(n(),l(Q,{key:3},[(se=(R=ce.value)==null?void 0:R.content)!=null&&se.text?(n(),l("div",uv,[i[64]||(i[64]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",cv,$(ce.value.content.text.slice(0,120))+$(ce.value.content.text.length>120?"…":""),1)])):(n(),l("p",pv,"Select a text element on the canvas to improve it.")),e("div",vv,[i[65]||(i[65]=e("label",{class:"form-label"},"Instruction",-1)),ne(e("input",{"onUpdate:modelValue":i[24]||(i[24]=C=>m.value=C),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[ge,m.value]])]),i[66]||(i[66]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ne(e("textarea",{"onUpdate:modelValue":i[25]||(i[25]=C=>m.value=C),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[ge,m.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating||!ce.value&&!m.value,onClick:i[26]||(i[26]=C=>ce.value?Ye():rt())},[k(s).isGenerating?(n(),l("span",mv)):q("",!0),U(" "+$(k(s).isGenerating?"Processing…":"Generate"),1)],8,fv)],64)):p.value==="translate"?(n(),l(Q,{key:4},[(I=(v=ce.value)==null?void 0:v.content)!=null&&I.text?(n(),l("div",gv,[i[67]||(i[67]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",bv,$(ce.value.content.text.slice(0,120))+$(ce.value.content.text.length>120?"…":""),1)])):(n(),l("p",yv,"Select a text element on the canvas to translate it.")),e("div",hv,[i[69]||(i[69]=e("label",{class:"form-label"},"Target Language",-1)),ne(e("select",{"onUpdate:modelValue":i[27]||(i[27]=C=>X.value=C),class:"select"},[...i[68]||(i[68]=[Fe('<option value="Spanish" data-v-d6c5ae2b>Spanish</option><option value="French" data-v-d6c5ae2b>French</option><option value="German" data-v-d6c5ae2b>German</option><option value="Italian" data-v-d6c5ae2b>Italian</option><option value="Portuguese" data-v-d6c5ae2b>Portuguese</option><option value="Chinese (Simplified)" data-v-d6c5ae2b>Chinese (Simplified)</option><option value="Japanese" data-v-d6c5ae2b>Japanese</option><option value="Arabic" data-v-d6c5ae2b>Arabic</option>',8)])],512),[[ct,X.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating||!((G=(O=ce.value)==null?void 0:O.content)!=null&&G.text),onClick:Ie},[k(s).isGenerating?(n(),l("span",wv)):q("",!0),U(" "+$(k(s).isGenerating?"Translating…":"Translate Text"),1)],8,xv),c.value?(n(),l("div",kv,[e("div",Cv,[i[70]||(i[70]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",$v,[e("button",{class:"btn btn-ghost btn-sm",onClick:i[28]||(i[28]=C=>A.navigator.clipboard.writeText(c.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:he,disabled:!ce.value},"Apply",8,Sv)])]),e("div",Iv,$(c.value),1)])):q("",!0)],64)):p.value==="image"?(n(),l(Q,{key:5},[i[73]||(i[73]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",Av,[i[71]||(i[71]=e("label",{class:"form-label"},"Image Description",-1)),ne(e("textarea",{"onUpdate:modelValue":i[29]||(i[29]=C=>pe.value=C),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[ge,pe.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:xe.value||k(s).isGenerating||!pe.value,onClick:Ue},[xe.value||k(s).isGenerating?(n(),l("span",Mv)):q("",!0),U(" "+$(xe.value||k(s).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,Ev),c.value?(n(),l("div",Pv,[i[72]||(i[72]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",zv,$(c.value),1)])):q("",!0)],64)):p.value==="settings"?(n(),l("div",Tv,[e("div",Nv,[i[75]||(i[75]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:k(s).apiProvider,class:"select",onChange:i[30]||(i[30]=C=>k(s).setProvider(C.target.value))},[...i[74]||(i[74]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,Lv)]),e("div",jv,[i[76]||(i[76]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:k(s).apiKey,class:"input",placeholder:"sk-…",onChange:i[31]||(i[31]=C=>k(s).setApiKey(C.target.value))},null,40,Bv),i[77]||(i[77]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),k(s).apiKey?q("",!0):(n(),l("div",Dv,[...i[78]||(i[78]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),U(" Running in ",-1),e("strong",null,"demo mode",-1),U(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):q("",!0),c.value&&p.value!=="settings"&&p.value!=="quiz"?(n(),l("div",_v,[e("div",qv,[i[79]||(i[79]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:i[32]||(i[32]=C=>c.value="")},"Clear")]),e("pre",Rv,$(c.value),1),e("div",Fv,[p.value==="generate"?(n(),l("button",{key:0,class:"btn btn-primary btn-sm",onClick:le},$(a.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):q("",!0),p.value==="generate"?(n(),l("button",{key:1,class:"btn btn-ghost btn-sm",disabled:k(s).isGenerating,onClick:Me},[...i[80]||(i[80]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),U(" Regenerate ",-1)])],8,Uv)):q("",!0),p.value==="improve"&&ce.value?(n(),l("button",{key:2,class:"btn btn-primary btn-sm",onClick:Ve}," Apply to Element ")):q("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:i[33]||(i[33]=C=>{var $e;return($e=A.navigator.clipboard)==null?void 0:$e.writeText(c.value)})}," Copy ")])])):q("",!0),k(s).lastError?(n(),l("div",Vv,[i[81]||(i[81]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),U(" "+$(k(s).lastError),1)])):q("",!0)])])}}},Wv=Be(Ov,[["__scopeId","data-v-d6c5ae2b"]]),Gv={class:"theme-manager"},Hv={class:"panel-section"},Qv={class:"presets-grid"},Yv=["title","onClick"],Jv={class:"preset-preview"},Kv={class:"preset-name"},Xv={class:"panel-section"},Zv={class:"theme-fields"},e1={class:"form-label"},t1={class:"color-row"},o1=["value","onInput"],n1=["value","onChange"],l1={class:"panel-section"},i1={class:"theme-field"},a1=["value","placeholder"],s1={class:"chart-palette-preview"},r1={class:"panel-section"},d1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},u1=["value"],c1=["value"],p1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},v1=["value"],f1=["value"],m1={class:"form-group"},g1=["value"],b1={class:"panel-section"},y1={class:"tp-chart-row"},h1={key:0,class:"apply-message success"},x1={key:1,class:"apply-message error"},w1={__name:"ThemeManager",setup(y){const s=We(),r=Ge(),u=E(()=>r.getProject(s.projectId)),p=E(()=>{var a;return((a=u.value)==null?void 0:a.theme)||{}}),m=E(()=>gn(p.value)),b=L(""),c=L("");function z(a){r.updateProject(s.projectId,{theme:{...p.value,...a}})}const ie=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],X=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function j(a){z(a)}function Z(a,h){const w=a.content||{};return a.type==="text"?{content:{...w,fontFamily:h.fontFamily||w.fontFamily,color:h.textColor||w.color}}:a.type==="heading"?{content:{...w,fontFamily:h.headingFont||h.fontFamily||w.fontFamily,color:h.textColor||w.color}}:a.type==="shape"?{content:{...w,fillColor:h.secondaryColor||w.fillColor}}:a.type==="hotspot"?{content:{...w,bgColor:h.primaryColor||w.bgColor}}:a.type==="button"?{content:{...w,bgColor:h.primaryColor||w.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:h.fontFamily||w.fontFamily}}:a.type==="quiz"?{content:{...w,cardBgColor:h.bgColor||w.cardBgColor,questionColor:h.textColor||w.questionColor,accentColor:h.primaryColor||w.accentColor}}:a.type==="chart"?{content:{...w,...Cn(h)}}:null}function oe(){z({chartPalette:""})}function _(){b.value="",c.value="";const a=s.projectId,h=u.value,w=p.value;if(!a||!h){c.value="No active project to apply theme.";return}const B=h.slides||[];let f=0;B.forEach(D=>{(D.backgroundType||"color")==="color"&&r.updateSlide(a,D.id,{backgroundType:"color",background:w.bgColor||D.background||"#ffffff"}),(D.elements||[]).forEach(ee=>{const be=Z(ee,w);be&&(r.updateElement(a,D.id,ee.id,be),f+=1)})}),b.value=`Applied theme to ${B.length} slide${B.length===1?"":"s"} and ${f} element${f===1?"":"s"}.`}return(a,h)=>(n(),l("div",Gv,[e("div",Hv,[h[4]||(h[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",Qv,[(n(),l(Q,null,re(ie,w=>e("div",{key:w.name,class:"preset-card",title:w.name,onClick:B=>j(w)},[e("div",Jv,[e("div",{class:"pp-header",style:de({background:w.primaryColor})},null,4),e("div",{class:"pp-body",style:de({background:w.bgColor})},[e("div",{class:"pp-line",style:de({background:w.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:de({background:w.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:de({background:w.secondaryColor})},null,4)]),e("span",Kv,$(w.name),1)],8,Yv)),64))])]),e("div",Xv,[h[5]||(h[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",Zv,[(n(),l(Q,null,re({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(w,B)=>e("div",{class:"theme-field",key:B},[e("label",e1,$(w),1),e("div",t1,[e("input",{type:"color",value:p.value[B]||"#ffffff",class:"color-input-native",onInput:f=>z({[B]:f.target.value})},null,40,o1),e("input",{value:p.value[B]||"",class:"input",onChange:f=>z({[B]:f.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,n1)])])),64))])]),e("div",l1,[h[8]||(h[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",i1,[h[6]||(h[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:k(el)(k(gn)(p.value)),onChange:h[0]||(h[0]=w=>z({chartPalette:w.target.value}))},null,40,a1),e("div",s1,[(n(!0),l(Q,null,re(m.value,(w,B)=>(n(),l("span",{key:`theme-chart-${B}`,class:"chart-palette-dot",style:de({background:w})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:oe},"Use auto palette")]),h[7]||(h[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",r1,[h[12]||(h[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",d1,[h[9]||(h[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:h[1]||(h[1]=w=>z({headingFont:w.target.value}))},[(n(),l(Q,null,re(X,w=>e("option",{key:w.value,value:w.value},$(w.label),9,c1)),64))],40,u1)]),e("div",p1,[h[10]||(h[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:h[2]||(h[2]=w=>z({fontFamily:w.target.value}))},[(n(),l(Q,null,re(X,w=>e("option",{key:w.value,value:w.value},$(w.label),9,f1)),64))],40,v1)]),e("div",m1,[h[11]||(h[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:h[3]||(h[3]=w=>z({fontSize:+w.target.value}))},null,40,g1)])]),e("div",b1,[h[13]||(h[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:de({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:de({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:de({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:de({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:de({background:p.value.secondaryColor})},"Badge",4),e("div",y1,[(n(!0),l(Q,null,re(m.value.slice(0,5),(w,B)=>(n(),l("span",{key:`preview-chart-${B}`,class:"tp-chart-bar",style:de({background:w,height:`${22+B*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:_}," Apply Theme to Slides "),b.value?(n(),l("p",h1,$(b.value),1)):q("",!0),c.value?(n(),l("p",x1,$(c.value),1)):q("",!0)])]))}},k1=Be(w1,[["__scopeId","data-v-da2b0ce4"]]),C1={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},$1={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},S1={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},I1={class:"export-tabs tabs",style:{"overflow-x":"auto"}},A1={class:"export-content"},E1={class:"export-options",style:{"margin-bottom":"20px"}},M1={class:"form-group"},P1={class:"export-meta"},z1={class:"meta-item"},T1={class:"meta-item"},N1={class:"meta-item"},L1={class:"export-options",style:{"margin-bottom":"20px"}},j1={class:"form-group"},B1={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},D1={class:"export-options",style:{"margin-bottom":"20px"}},_1={class:"form-group"},q1={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},R1={class:"coming-soon"},F1={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},U1={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},V1={key:1,class:"export-success"},O1={__name:"ExportModal",setup(y){const s=We(),r=Ge(),u=$n(),p=E(()=>r.getProject(s.projectId)),m=L("json"),b=L(""),c=L(""),z=L(!0);je(p,B=>{B&&!c.value&&(c.value=B.name||"presentation")},{immediate:!0});function ie(){const B=r.exportProject(s.projectId);if(!B)return;const f=new Blob([B],{type:"application/json"}),D=URL.createObjectURL(f),ee=document.createElement("a");ee.href=D,ee.download=`${c.value||"project"}.mediasurf.json`,ee.click(),URL.revokeObjectURL(D),b.value="success",setTimeout(()=>b.value="",3e3)}function X(B,f="presentation"){return String(B).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||f}function j(B){return new Promise((f,D)=>{const ee=new FileReader;ee.onloadend=()=>f(ee.result),ee.onerror=()=>D(ee.error),ee.readAsDataURL(B)})}function Z(B,f,D="html"){const ee=vt(f);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${ee.width}px;
  --lf-slide-height: ${ee.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(B==null?void 0:B.fontFamily)||"Inter, sans-serif"};
  background: ${D==="pdf"?"#f3f4f6":`
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%)`};
  color: ${D==="pdf"?"#111827":"#ffffff"};
  display: ${D==="pdf"?"block":"flex"};
  align-items: ${D==="pdf"?"stretch":"center"};
  justify-content: ${D==="pdf"?"flex-start":"center"};
  overflow: ${D==="pdf"?"auto":"hidden"};
  padding: ${D==="pdf"?"24px 0":"0"};
}
.lf-shell {
  width: ${D==="pdf"?"100%":"100vw"};
  min-height: ${D==="pdf"?"auto":"100vh"};
  height: ${D==="pdf"?"auto":"100vh"};
  position: relative;
  display: flex;
  align-items: ${D==="pdf"?"stretch":"center"};
  justify-content: center;
  overflow: ${D==="pdf"?"visible":"hidden"};
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
  width: ${D==="pdf"?"100%":"auto"};
  max-width: ${D==="pdf"?"none":"auto"};
  padding: ${D==="pdf"?"0":"18px"};
  border-radius: ${D==="pdf"?"0":"32px"};
  background: ${D==="pdf"?"transparent":"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"};
  border: ${D==="pdf"?"none":"1px solid rgba(255,255,255,0.12)"};
  box-shadow: ${D==="pdf"?"none":"0 30px 80px rgba(0,0,0,.34)"};
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
  width: ${D==="pdf"?"100%":"var(--lf-slide-width)"};
  height: ${D==="pdf"?"auto":"var(--lf-slide-height)"};
  border-radius: ${D==="pdf"?"0":"18px"};
  overflow: ${D==="pdf"?"visible":"hidden"};
  box-shadow: ${D==="pdf"?"none":"0 30px 90px rgba(0,0,0,.5)"};
  transform-origin: center center;
  display: ${D==="pdf"?"flex":"block"};
  flex-direction: ${D==="pdf"?"column":"row"};
  align-items: ${D==="pdf"?"center":"stretch"};
  gap: ${D==="pdf"?"24px":"0"};
}
.slide {
  position: ${D==="pdf"?"relative":"absolute"};
  inset: ${D==="pdf"?"auto":"0"};
  display: ${D==="pdf"?"block":"none"};
  overflow: hidden;
  color: ${(B==null?void 0:B.textColor)||"#1a1a2e"};
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
  flex: 0 0 auto;
  background-clip: padding-box;
  box-shadow: ${D==="pdf"?"0 12px 32px rgba(15, 23, 42, 0.16)":"none"};
  page-break-after: ${D==="pdf"?"always":"auto"};
  break-after: ${D==="pdf"?"page":"auto"};
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
  background: ${(B==null?void 0:B.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(f==null?void 0:f.showProgress)===!1?"none":"block"};
  z-index: 6;
}
${D==="iframe"?`
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
${D==="pdf"?`
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
`}function oe(B="html"){return`
(function () {
  var exportMode = ${JSON.stringify(B)};
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
`}async function _(){return w("html")}async function a(){return w("iframe")}async function h(){return w("pdf")}async function w(B="html"){var ze,F,te;const f=p.value;if(!f)return;b.value="processing";const D=B==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(B==="pdf"&&!D){b.value="error",setTimeout(()=>b.value="",3e3);return}const ee=B==="pdf"?null:new ol,be=ee?ee.folder("assets"):null;let ve=0;async function N(J,le="media"){if((!J||J.startsWith("data:")||J.startsWith("http://localhost")||J.startsWith("blob:"))&&J.startsWith("data:"))return J;try{const ue=await(await fetch(J)).blob();if(B==="pdf")return await j(ue);let S="bin";const x=ue.type;if(x.includes("image/png")?S="png":x.includes("image/jpeg")?S="jpg":x.includes("image/gif")?S="gif":x.includes("image/svg")?S="svg":x.includes("image/webp")?S="webp":x.includes("video/mp4")?S="mp4":x.includes("audio/mpeg")&&(S="mp3"),S==="bin"){const g=J.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);g&&(S=g[1])}ve++;const P=`${le}_${ve}.${S}`;return be.file(P,ue),`assets/${P}`}catch(Ce){return console.warn("Could not fetch asset:",J,Ce),J}}const T=JSON.parse(JSON.stringify([...f.slides||[]])).sort((J,le)=>(J.order??0)-(le.order??0));if(z.value)for(const J of T){J.backgroundType==="image"&&J.backgroundImage&&(J.backgroundImage=await N(J.backgroundImage,"bg"));for(const le of J.elements||[])le.type==="image"&&((ze=le.content)!=null&&ze.src)&&(le.content.src=await N(le.content.src,"img")),le.type==="video"&&((F=le.content)!=null&&F.src)&&!le.content.src.includes("youtube")&&!le.content.src.includes("youtu.be")&&(le.content.src=await N(le.content.src,"vid")),le.type==="audio"&&((te=le.content)!=null&&te.src)&&(le.content.src=await N(le.content.src,"aud"))}const W=X(c.value||f.name||"presentation"),ae={name:f.name,theme:f.theme||{},settings:f.settings||{},slides:T},Y=JSON.stringify(ae).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),fe=Z(f.theme,f.settings,B),me=oe(B),Ee=`<script id="lf-data" type="application/json">${Y}<\/script>`,ce=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${W}</title>
${B==="pdf"?`<style>${fe}</style>`:'<link rel="stylesheet" href="style.css">'}
</head>
<body class="${B==="iframe"?"is-iframe":B==="pdf"?"is-pdf":""}">
<div class="lf-shell">
<div class="progress" id="progress"></div>
<div class="lf-grid"></div>
<div class="lf-stage-shell">
  <div class="presentation" id="presentation"></div>
</div>
<div class="dot-nav" id="dot-nav"></div>
<nav class="nav">
  <button class="nav-btn" id="prev-btn" type="button">← Prev</button>
  <span class="nav-counter" id="counter">1 / ${T.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${Ee}
${B!=="pdf"?'<script src="script.js"><\/script>':`<script>${me}<\/script>`}
</body>
</html>`;if(B==="pdf"){D.document.open(),D.document.write(ce),D.document.close(),b.value="success",setTimeout(()=>b.value="",3e3);return}ee.file("index.html",ce),ee.file("style.css",fe),ee.file("script.js",me);const Me=await ee.generateAsync({type:"blob"}),Pe=URL.createObjectURL(Me),Ne=document.createElement("a");Ne.href=Pe,Ne.download=`${W}.zip`,Ne.click(),URL.revokeObjectURL(Pe),b.value="success",setTimeout(()=>b.value="",3e3)}return(B,f)=>(n(),_e(Vn,{title:"Export Project",size:"md",onClose:f[13]||(f[13]=D=>k(s).showExportModal=!1)},{footer:et(()=>[e("button",{class:"btn btn-secondary",onClick:f[12]||(f[12]=D=>k(s).showExportModal=!1)},"Close")]),default:et(()=>{var D,ee,be,ve,N;return[k(u).user?(n(),l(Q,{key:1},[e("div",I1,[e("button",{class:V(["tab-btn",m.value==="json"&&"active"]),onClick:f[2]||(f[2]=T=>m.value="json")},"JSON",2),e("button",{class:V(["tab-btn",m.value==="html"&&"active"]),onClick:f[3]||(f[3]=T=>m.value="html")},"HTML",2),e("button",{class:V(["tab-btn",m.value==="iframe"&&"active"]),onClick:f[4]||(f[4]=T=>m.value="iframe")},"Iframe",2),e("button",{class:V(["tab-btn",m.value==="pdf"&&"active"]),onClick:f[5]||(f[5]=T=>m.value="pdf")},"PDF",2),e("button",{class:V(["tab-btn",m.value==="scorm"&&"active"]),onClick:f[6]||(f[6]=T=>m.value="scorm")},"SCORM",2)]),e("div",A1,[m.value==="json"?(n(),l(Q,{key:0},[f[24]||(f[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",E1,[e("div",M1,[f[19]||(f[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ne(e("input",{type:"text","onUpdate:modelValue":f[7]||(f[7]=T=>c.value=T),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ge,c.value]])])]),e("div",P1,[e("div",z1,[f[20]||(f[20]=e("span",null,"Project",-1)),e("strong",null,$((D=p.value)==null?void 0:D.name),1)]),e("div",T1,[f[21]||(f[21]=e("span",null,"Slides",-1)),e("strong",null,$(((be=(ee=p.value)==null?void 0:ee.slides)==null?void 0:be.length)||0),1)]),e("div",N1,[f[22]||(f[22]=e("span",null,"Elements",-1)),e("strong",null,$(((N=(ve=p.value)==null?void 0:ve.slides)==null?void 0:N.reduce((T,W)=>{var ae;return T+(((ae=W.elements)==null?void 0:ae.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:ie},[...f[23]||(f[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),U(" Download JSON ",-1)])])],64)):m.value==="html"?(n(),l(Q,{key:1},[f[28]||(f[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",L1,[e("div",j1,[f[25]||(f[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ne(e("input",{type:"text","onUpdate:modelValue":f[8]||(f[8]=T=>c.value=T),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ge,c.value]])]),e("label",B1,[ne(e("input",{type:"checkbox","onUpdate:modelValue":f[9]||(f[9]=T=>z.value=T)},null,512),[[pt,z.value]]),f[26]||(f[26]=U(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),f[29]||(f[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:_},[...f[27]||(f[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),U(" Download HTML ",-1)])])],64)):m.value==="iframe"?(n(),l(Q,{key:2},[f[33]||(f[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",D1,[e("div",_1,[f[30]||(f[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ne(e("input",{type:"text","onUpdate:modelValue":f[10]||(f[10]=T=>c.value=T),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ge,c.value]])]),e("label",q1,[ne(e("input",{type:"checkbox","onUpdate:modelValue":f[11]||(f[11]=T=>z.value=T)},null,512),[[pt,z.value]]),f[31]||(f[31]=U(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...f[32]||(f[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),U(" Download Iframe Zip ",-1)])])],64)):m.value==="pdf"?(n(),l(Q,{key:3},[f[35]||(f[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),f[36]||(f[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:h},[...f[34]||(f[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),U(" Generate PDF ",-1)])])],64)):m.value==="scorm"?(n(),l(Q,{key:4},[f[40]||(f[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",R1,[(n(),l("svg",F1,[...f[37]||(f[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),f[38]||(f[38]=e("h4",null,"Coming Soon",-1)),f[39]||(f[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):q("",!0),st(mt,{name:"fade"},{default:et(()=>[b.value==="processing"?(n(),l("div",U1,[...f[41]||(f[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),U(" Generating package... Please wait. ",-1)])])):b.value==="success"?(n(),l("div",V1,[...f[42]||(f[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),U(" Export successful! Check your downloads folder. ",-1)])])):q("",!0)]),_:1})])],64)):(n(),l("div",C1,[(n(),l("svg",$1,[...f[14]||(f[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),f[17]||(f[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),f[18]||(f[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",S1,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:f[0]||(f[0]=T=>k(u).loginWithGoogle())},[...f[15]||(f[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),U(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:f[1]||(f[1]=T=>k(u).loginWithMicrosoft())},[...f[16]||(f[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),U(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},W1=Be(O1,[["__scopeId","data-v-1a8a69d1"]]),G1={key:0,class:"editor-view"},H1={class:"editor-topbar"},Q1={class:"topbar-left"},Y1={class:"project-name-wrap"},J1=["value"],K1={class:"save-label"},X1={class:"topbar-center"},Z1={key:0,class:"slide-position"},ef={class:"topbar-right"},tf={class:"editor-body"},of={class:"authoring-rail"},nf=["onClick","data-tooltip"],lf={key:0,class:"rail-icon"},af={key:1,class:"rail-icon"},sf={key:2,class:"rail-icon"},rf={key:3,class:"rail-icon"},df={key:4,class:"rail-icon"},uf={key:5,class:"rail-icon"},cf={key:6,class:"rail-icon"},pf={key:7,class:"rail-icon"},vf={key:8,class:"rail-icon"},ff={class:"right-panel"},mf={class:"panel-tabs"},gf=["onClick","data-tooltip"],bf={class:"tab-icon"},yf={class:"tab-label"},hf={class:"panel-content"},xf={key:1,class:"editor-not-found"},wf={__name:"EditorView",setup(y){const s=Fn(),r=Rn(),u=We(),p=Ge(),m=$n(),b=E(()=>s.params.id),c=E(()=>p.getProject(b.value)),z=E(()=>vt(c.value)),ie=E(()=>{var S;return[...((S=c.value)==null?void 0:S.slides)||[]].sort((x,P)=>x.order-P.order)}),X=L(null),j=L(!1),Z=L("deck"),{aiStore:oe,showAIModal:_,aiMode:a,aiTopic:h,aiContext:w,aiProjectName:B,aiSlideCount:f,aiQuestionCount:D,aiDifficulty:ee,aiQuestionType:be,aiCreationError:ve,aiSubmitting:N,aiProjectNamePlaceholder:T,aiPrimaryActionLabel:W,openAICreationModal:ae,createAIProject:Y}=On({onRequireAuth:()=>r.push({name:"dashboard"})});let fe=!1,me=null;je(()=>c.value,S=>{if(S){if(fe){fe=!1;return}me&&clearTimeout(me),me=setTimeout(()=>{u.pushHistory(S)},600)}},{deep:!0}),je(()=>m.isAuthReady,async S=>{var x;if(S){if((x=m.user)!=null&&x.uid&&await p.ensureRemoteProjectsLoaded(),!c.value){r.push({name:"dashboard"});return}u.setProject(b.value),ie.value.length>0&&u.setCurrentSlide(ie.value[0].id),u.pushHistory(c.value)}},{immediate:!0});const Ee=E(()=>{const S=c.value;return S?`Saved ${new Date(S.updatedAt).toLocaleTimeString()}`:""}),we=E(()=>{switch(u.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});nl({undo:()=>{if(u.canUndo()){const S=u.undo();S&&(fe=!0,p.updateProject(b.value,S))}},redo:()=>{if(u.canRedo()){const S=u.redo();S&&(fe=!0,p.updateProject(b.value,S))}},delete:()=>{u.selectedElementId&&(p.deleteElement(u.projectId,u.currentSlideId,u.selectedElementId),u.clearSelection())},escape:()=>{u.clearSelection(),u.setActiveTool("select")},copy:()=>{var x,P,g,Ie;const S=(Ie=(g=(P=(x=c.value)==null?void 0:x.slides)==null?void 0:P.find(he=>he.id===u.currentSlideId))==null?void 0:g.elements)==null?void 0:Ie.find(he=>he.id===u.selectedElementId);S&&u.setClipboard(S)},paste:()=>{if(u.clipboard&&u.currentSlideId){const S=u.clipboard;p.addElement(u.projectId,u.currentSlideId,S.type,{...S,x:S.x+20,y:S.y+20,id:void 0})}},duplicate:()=>{if(u.selectedElementId){const S=p.duplicateElement(u.projectId,u.currentSlideId,u.selectedElementId);S&&u.selectElement(S.id)}},zoomIn:()=>u.zoomIn(),zoomOut:()=>u.zoomOut(),zoomReset:()=>u.zoomReset(),toggleGrid:()=>u.toggleGrid(),nudge:(S,x)=>{var g,Ie,he,pe;if(!u.selectedElementId)return;const P=(pe=(he=(Ie=(g=c.value)==null?void 0:g.slides)==null?void 0:Ie.find(xe=>xe.id===u.currentSlideId))==null?void 0:he.elements)==null?void 0:pe.find(xe=>xe.id===u.selectedElementId);P&&p.updateElement(u.projectId,u.currentSlideId,u.selectedElementId,{x:P.x+S,y:P.y+x})},selectAll:()=>{var x,P,g;(((g=(P=(x=c.value)==null?void 0:x.slides)==null?void 0:P.find(Ie=>Ie.id===u.currentSlideId))==null?void 0:g.elements)||[]).forEach((Ie,he)=>u.selectElement(Ie.id,he>0))}});function ce(){r.push({name:"dashboard"})}function Me(){r.push({name:"preview",params:{id:b.value},query:{from:"editor"}})}function Pe(S="deck"){Z.value=S,j.value=!0}function Ne(){j.value=!1,ae(Z.value)}function ze(S,x="Image"){if(!u.projectId||!u.currentSlideId||!S)return;const P=new Image;P.onload=()=>{const he=Math.min(420/P.width,280/P.height,1),pe=Math.max(120,Math.round(P.width*he)),xe=Math.max(80,Math.round(P.height*he)),Ue=Math.max(24,Math.round((z.value.width-pe)/2)),Ye=Math.max(24,Math.round((z.value.height-xe)/2)),Ve=p.addElement(u.projectId,u.currentSlideId,"image",{x:Ue,y:Ye,width:pe,height:xe,content:{src:S,alt:x,objectFit:"cover"}});Ve&&(u.selectElement(Ve.id),u.setRightPanel("properties"),u.setActiveTool("select"))},P.src=S}function F(S){const[x]=Array.from(S.target.files||[]);if(!x||!x.type.startsWith("image/"))return;const P=new FileReader;P.onload=()=>ze(String(P.result||""),x.name),P.readAsDataURL(x),S.target.value=""}function te(){var S;(S=X.value)==null||S.click()}const J=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function le(S){if(S==="text"){u.setActiveTool("text");return}if(S==="resources"){u.setActiveTool("image");return}if(S==="interactive-elements"){u.setActiveTool("hotspot");return}if(S==="interactive-questions"){u.setActiveTool("quiz");return}if(S==="widgets"){u.setActiveTool("shape");return}if(S==="insert"){te();return}if(S==="style"){u.setRightPanel("properties");return}if(S==="background"){u.clearSelection(),u.setRightPanel("properties");return}S==="pages"&&u.toggleSlidePanel()}function Ce(S){return S==="text"?["text","heading"].includes(u.activeTool):S==="resources"?u.activeTool==="image":S==="interactive-elements"?["hotspot","button"].includes(u.activeTool):S==="interactive-questions"?u.activeTool==="quiz":S==="widgets"?["shape","video","audio","chart"].includes(u.activeTool):S==="insert"?!1:S==="style"||S==="background"?u.rightPanelTab==="properties":S==="pages"?u.showSlidePanel:!1}function ue(){Hn({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return je(()=>c.value,S=>{S&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{ue()},100)},{immediate:!0}),(S,x)=>c.value?(n(),l("div",G1,[e("input",{ref_key:"imageInputRef",ref:X,type:"file",accept:"image/*",class:"sr-only",onChange:F},null,544),e("header",H1,[e("div",Q1,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:ce,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...x[14]||(x[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),U(" Dashboard ",-1)])]),e("div",Y1,[e("input",{value:c.value.name,class:"project-name-input",onChange:x[0]||(x[0]=P=>k(p).updateProject(b.value,{name:P.target.value}))},null,40,J1)]),e("span",K1,$(Ee.value),1)]),e("div",X1,[k(u).currentSlideId?(n(),l("span",Z1," Slide "+$(ie.value.findIndex(P=>P.id===k(u).currentSlideId)+1)+" of "+$(ie.value.length),1)):q("",!0)]),e("div",ef,[e("button",{class:"btn btn-ghost btn-sm",onClick:ue,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...x[15]||(x[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),U(" Help ",-1)])]),e("button",{class:V(["btn btn-ghost btn-sm",k(u).showAIPanel&&"active-btn"]),onClick:x[1]||(x[1]=P=>{k(u).showAIPanel=!k(u).showAIPanel,k(u).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...x[16]||(x[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),U(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:x[2]||(x[2]=P=>{k(u).showThemeManager=!k(u).showThemeManager,k(u).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...x[17]||(x[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),U(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:Me,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...x[18]||(x[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),U(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:x[3]||(x[3]=P=>k(u).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...x[19]||(x[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),U(" Export ",-1)])])])]),st(nc,{onOpenAiProject:Pe}),e("div",tf,[e("aside",of,[(n(),l(Q,null,re(J,P=>e("button",{key:P.id,class:V(["rail-option",Ce(P.id)&&"active"]),onClick:g=>le(P.id),"data-tooltip":P.label,"data-tooltip-position":"right"},[P.id==="text"?(n(),l("span",lf,"T")):P.id==="resources"?(n(),l("span",af,[...x[20]||(x[20]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):P.id==="interactive-elements"?(n(),l("span",sf,[...x[21]||(x[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):P.id==="interactive-questions"?(n(),l("span",rf,[...x[22]||(x[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):P.id==="widgets"?(n(),l("span",df,[...x[23]||(x[23]=[Fe('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-b65c4daf><rect x="3" y="3" width="7" height="7" data-v-b65c4daf></rect><rect x="14" y="3" width="7" height="7" data-v-b65c4daf></rect><rect x="14" y="14" width="7" height="7" data-v-b65c4daf></rect><rect x="3" y="14" width="7" height="7" data-v-b65c4daf></rect></svg>',1)])])):P.id==="insert"?(n(),l("span",uf,[...x[24]||(x[24]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):P.id==="style"?(n(),l("span",cf,[...x[25]||(x[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):P.id==="background"?(n(),l("span",pf,[...x[26]||(x[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):P.id==="pages"?(n(),l("span",vf,[...x[27]||(x[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):q("",!0),U(" "+$(P.label),1)],10,nf)),64))]),st(mt,{name:"side-panel-slide"},{default:et(()=>[k(u).showSlidePanel?(n(),_e(yl,{key:0})):q("",!0)]),_:1}),st(tp),e("aside",ff,[e("div",mf,[(n(),l(Q,null,re([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],P=>e("button",{key:P.id,class:V(["panel-tab",k(u).rightPanelTab===P.id&&"active"]),onClick:g=>k(u).setRightPanel(P.id),"data-tooltip":`Open ${P.label}`,"data-tooltip-position":"bottom"},[e("span",bf,$(P.icon),1),e("span",yf,$(P.label),1)],10,gf)),64))]),e("div",hf,[st(mt,{name:"editor-panel-switch",mode:"out-in"},{default:et(()=>[(n(),l("div",{key:we.value,class:"panel-content-view"},[k(u).rightPanelTab==="properties"?(n(),_e(Du,{key:0})):k(u).rightPanelTab==="layers"?(n(),_e(ql,{key:1})):k(u).rightPanelTab==="ai"?(n(),_e(Wv,{key:2})):k(u).rightPanelTab==="theme"?(n(),_e(k1,{key:3})):q("",!0)]))]),_:1})])])]),k(u).showExportModal?(n(),_e(W1,{key:0})):q("",!0),j.value?(n(),_e(Wn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:x[4]||(x[4]=P=>j.value=!1),onConfirm:Ne})):q("",!0),k(_)?(n(),_e(Gn,{key:2,mode:k(a),topic:k(h),context:k(w),"project-name":k(B),"slide-count":k(f),"question-count":k(D),difficulty:k(ee),"question-type":k(be),"project-name-placeholder":k(T),"primary-action-label":k(W),"creation-error":k(ve),"is-submitting":k(N),"is-generating":k(oe).isGenerating,"has-api-key":!!k(oe).apiKey,onClose:x[5]||(x[5]=P=>_.value=!1),onCreate:k(Y),"onUpdate:mode":x[6]||(x[6]=P=>a.value=P),"onUpdate:topic":x[7]||(x[7]=P=>h.value=P),"onUpdate:context":x[8]||(x[8]=P=>w.value=P),"onUpdate:projectName":x[9]||(x[9]=P=>B.value=P),"onUpdate:slideCount":x[10]||(x[10]=P=>f.value=P),"onUpdate:questionCount":x[11]||(x[11]=P=>D.value=P),"onUpdate:difficulty":x[12]||(x[12]=P=>ee.value=P),"onUpdate:questionType":x[13]||(x[13]=P=>be.value=P)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):q("",!0)])):(n(),l("div",xf,[x[28]||(x[28]=e("h2",null,"Project not found",-1)),x[29]||(x[29]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:ce},"Go to Dashboard")]))}},Mf=Be(wf,[["__scopeId","data-v-b65c4daf"]]);export{Mf as default};
