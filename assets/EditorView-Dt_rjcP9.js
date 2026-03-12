import{K as bn,P as yn,v as n,F as l,B as e,C as S,H as Q,I as re,E as Ie,D as U,u as k,Q as de,M as Fe,G as q,L as F,q as _e,R as hn,f as M,r as L,N as te,S as pt,w as je,O as me,n as xn,i as Bn,U as Dn,y as st,x as et,T as mt,V as ct,z as _n,p as qn,J as mn}from"./vue-core-DCl8Fgqc.js";import{u as Rn,d as Fn}from"./vue-ecosystem-Da9kls6U.js";import{u as We,c as Un,M as Vn,a as On,C as Wn,A as Gn,b as Hn}from"./ConfirmActionModal-DSCsPKoP.js";import{u as Ge,b as Qn,g as vt,C as Yn,n as Jn,p as Kn,s as Xn,m as wn,f as kn,c as Cn,d as Zn,e as el,h as gn,a as $n}from"./projectStore-UGD0LlB_.js";import{_ as Be}from"./index-65UAk53r.js";import{C as tl}from"./ChartElement-DYlentri.js";import{J as ol}from"./jszip-529iNPX7.js";function nl(y){function s(r){var c,z,ne,X,B,Z,ee,_,a,h,w,D,f,j,oe,be,ue;const u=r.ctrlKey||r.metaKey,p=r.key.toLowerCase(),m=r.target.tagName.toLowerCase(),g=m==="input"||m==="textarea"||r.target.isContentEditable;g&&u&&["c","v","x","a","z","y"].includes(p)||(u&&p==="z"&&!r.shiftKey?(r.preventDefault(),(c=y.undo)==null||c.call(y)):u&&(p==="y"||p==="z"&&r.shiftKey)?(r.preventDefault(),(z=y.redo)==null||z.call(y)):u&&p==="c"?(r.preventDefault(),(ne=y.copy)==null||ne.call(y)):u&&p==="v"?(r.preventDefault(),(X=y.paste)==null||X.call(y)):u&&p==="x"?(r.preventDefault(),(B=y.cut)==null||B.call(y)):u&&p==="d"?(r.preventDefault(),(Z=y.duplicate)==null||Z.call(y)):u&&p==="a"?(r.preventDefault(),(ee=y.selectAll)==null||ee.call(y)):p==="delete"||p==="backspace"?g||(r.preventDefault(),(_=y.delete)==null||_.call(y)):p==="escape"?(a=y.escape)==null||a.call(y):u&&p==="g"?(r.preventDefault(),(h=y.toggleGrid)==null||h.call(y)):u&&p==="="||u&&p==="+"?(r.preventDefault(),(w=y.zoomIn)==null||w.call(y)):u&&p==="-"?(r.preventDefault(),(D=y.zoomOut)==null||D.call(y)):u&&p==="0"?(r.preventDefault(),(f=y.zoomReset)==null||f.call(y)):p==="arrowleft"?(j=y.nudge)==null||j.call(y,-1,0):p==="arrowright"?(oe=y.nudge)==null||oe.call(y,1,0):p==="arrowup"?(be=y.nudge)==null||be.call(y,0,-1):p==="arrowdown"&&((ue=y.nudge)==null||ue.call(y,0,1)))}bn(()=>window.addEventListener("keydown",s)),yn(()=>window.removeEventListener("keydown",s))}const ll={class:"slide-panel"},il={class:"slide-panel-header"},al={class:"slide-count"},sl={class:"slides-list"},rl=["onClick","onContextmenu","onDragstart","onDrop"],dl={class:"slide-number"},ul=["viewBox"],cl=["x","y","width","height","fill"],pl=["d","stroke"],vl=["d","fill"],fl={class:"slide-footer"},ml={class:"slide-title"},gl=["onClick"],bl={__name:"SlidePanel",setup(y){const s=We(),r=Ge(),u=M(()=>r.getProject(s.projectId)),p=M(()=>vt(u.value)),m=M(()=>{var N,T;return((T=(N=u.value)==null?void 0:N.slides)==null?void 0:T.slice().sort((O,ae)=>O.order-ae.order))||[]}),g=L({show:!1,x:0,y:0,slideId:null});function c(N){s.setCurrentSlide(N)}function z(){const N=m.value.findIndex(O=>O.id===s.currentSlideId),T=r.addSlide(s.projectId,N);T&&s.setCurrentSlide(T.id)}function ne(N){var ae,Y;const T=m.value.findIndex(fe=>fe.id===N);r.deleteSlide(s.projectId,N);const O=((ae=u.value)==null?void 0:ae.slides)||[];if(O.length>0){const fe=O.slice().sort((Me,ke)=>Me.order-ke.order),ge=Math.min(T,fe.length-1);s.setCurrentSlide((Y=fe[ge])==null?void 0:Y.id)}}function X(N,T){N.preventDefault(),g.value={show:!0,x:N.clientX,y:N.clientY,slideId:T},setTimeout(()=>window.addEventListener("click",B,{once:!0}),0)}function B(){g.value.show=!1}function Z(){const N=r.duplicateSlide(s.projectId,g.value.slideId);N&&s.setCurrentSlide(N.id),B()}function ee(){ne(g.value.slideId),B()}function _(N,T){N.stopPropagation(),ne(T)}function a(){const N=m.value.findIndex(T=>T.id===g.value.slideId);N>0&&r.reorderSlides(s.projectId,N,N-1),B()}function h(){const N=m.value.findIndex(T=>T.id===g.value.slideId);N<m.value.length-1&&r.reorderSlides(s.projectId,N,N+1),B()}let w=-1;function D(N,T){w=T,N.dataTransfer.effectAllowed="move"}function f(N,T){N.preventDefault(),w!==-1&&w!==T&&r.reorderSlides(s.projectId,w,T),w=-1}function j(N){return N.backgroundType==="gradient"&&N.backgroundGradient?{background:N.backgroundGradient}:N.backgroundType==="image"&&N.backgroundImage?{backgroundImage:`url(${N.backgroundImage})`,backgroundSize:"cover"}:{background:N.background||"#fff"}}function oe(N){return{left:N.x/p.value.width*100+"%",top:N.y/p.value.height*100+"%",width:N.width/p.value.width*100+"%",height:N.height/p.value.height*100+"%"}}function be(N){var T,O;return{background:N.type==="shape"?(T=N.content)==null?void 0:T.fillColor:N.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:N.type==="shape"&&((O=N.content)==null?void 0:O.shapeType)==="circle"?"50%":void 0}}function ue(N){var T;return Qn(N.content||{},N.width||420,N.height||280,((T=u.value)==null?void 0:T.theme)||{})}return(N,T)=>(n(),l("div",ll,[e("div",il,[T[2]||(T[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",al,S(m.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:z,"data-tooltip":"Add slide","aria-label":"Add slide"},[...T[1]||(T[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",sl,[(n(!0),l(Q,null,re(m.value,(O,ae)=>(n(),l("div",{key:O.id,class:U(["slide-thumb-item",k(s).currentSlideId===O.id&&"active"]),draggable:"true",onClick:Y=>c(O.id),onContextmenu:Y=>X(Y,O.id),onDragstart:Y=>D(Y,ae),onDragover:T[0]||(T[0]=Ie(()=>{},["prevent"])),onDrop:Y=>f(Y,ae)},[e("div",dl,S(ae+1),1),e("div",{class:"slide-thumb",style:de(j(O))},[(n(!0),l(Q,null,re(O.elements.slice(0,6),Y=>{var fe;return n(),l("div",{key:Y.id,class:"mini-element-frame",style:de(oe(Y))},[Y.type==="chart"?(n(),l("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${Y.width||420} ${Y.height||280}`,preserveAspectRatio:"none"},[ue(Y).type==="bar"?(n(!0),l(Q,{key:0},re(ue(Y).cartesian.bars,ge=>(n(),l("rect",{key:`mini-bar-${ge.id}`,x:ge.x,y:ge.y,width:ge.width,height:ge.height,fill:ge.color,rx:"6"},null,8,cl))),128)):ue(Y).type==="line"?(n(),l("path",{key:1,d:ue(Y).cartesian.linePath,stroke:((fe=ue(Y).cartesian.points[0])==null?void 0:fe.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,pl)):(n(!0),l(Q,{key:2},re(ue(Y).circle.slices,ge=>(n(),l("path",{key:`mini-slice-${ge.id}`,d:ge.path,fill:ge.color},null,8,vl))),128))],8,ul)):(n(),l("div",{key:1,class:"mini-element",style:de(be(Y))},null,4))],4)}),128))],4),e("div",fl,[e("div",ml,S(O.title||`Slide ${ae+1}`),1),m.value.length>1?(n(),l("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:Y=>_(Y,O.id)},[...T[3]||(T[3]=[Fe('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,gl)):q("",!0)])],42,rl))),128))]),e("button",{class:"add-slide-bottom",onClick:z},[...T[4]||(T[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),F(" Add Slide ",-1)])]),(n(),_e(hn,{to:"body"},[g.value.show?(n(),l("div",{key:0,class:"context-menu",style:de({left:g.value.x+"px",top:g.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Z},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:h},"Move Down"),T[5]||(T[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:ee},"Delete Slide")],4)):q("",!0)]))]))}},yl=Be(bl,[["__scopeId","data-v-30eea542"]]),hl={class:"layer-panel"},xl={class:"layer-header panel-section"},wl={class:"panel-title",style:{"margin-bottom":"0"}},kl={class:"layer-count"},Cl={key:0,class:"layers-empty"},$l={key:1,class:"layers-list"},Sl=["onClick"],Il={class:"layer-type-icon"},Al={class:"layer-name"},El={class:"layer-actions"},Ml=["onClick","data-tooltip"],Pl={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},zl={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Tl=["onClick","data-tooltip"],Nl={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ll={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},jl=["onClick"],Bl=["onClick"],Dl=["onClick"],_l={__name:"LayerPanel",setup(y){const s=We(),r=Ge(),u=M(()=>r.getProject(s.projectId)),p=M(()=>{var _,a;return(a=(_=u.value)==null?void 0:_.slides)==null?void 0:a.find(h=>h.id===s.currentSlideId)}),m=M(()=>{var _;return[...((_=p.value)==null?void 0:_.elements)||[]].sort((a,h)=>(h.zIndex||0)-(a.zIndex||0))});function g(_){s.selectElement(_)}function c(_){r.updateElement(s.projectId,s.currentSlideId,_.id,{visible:!_.visible})}function z(_){r.updateElement(s.projectId,s.currentSlideId,_.id,{locked:!_.locked})}function ne(_){r.reorderElement(s.projectId,s.currentSlideId,_,"up")}function X(_){r.reorderElement(s.projectId,s.currentSlideId,_,"down")}function B(_){r.deleteElement(s.projectId,s.currentSlideId,_),s.selectedElementId===_&&s.clearSelection()}function Z(_){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[_]||"◆"}function ee(_){var a,h,w;return(a=_.content)!=null&&a.text?_.content.text.slice(0,24):(h=_.content)!=null&&h.label?_.content.label:(w=_.content)!=null&&w.question?_.content.question.slice(0,24):_.type.charAt(0).toUpperCase()+_.type.slice(1)}return(_,a)=>(n(),l("div",hl,[e("div",xl,[e("div",wl,[a[0]||(a[0]=F(" Layers ",-1)),e("span",kl,S(m.value.length),1)])]),m.value.length===0?(n(),l("div",Cl,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(n(),l("div",$l,[(n(!0),l(Q,null,re(m.value,h=>(n(),l("div",{key:h.id,class:U(["layer-item",k(s).selectedElementIds.includes(h.id)&&"selected",h.locked&&"locked",!h.visible&&"hidden"]),onClick:w=>g(h.id)},[e("span",Il,S(Z(h.type)),1),e("span",Al,S(ee(h)),1),e("div",El,[e("button",{class:U(["layer-action-btn",{active:h.visible}]),onClick:Ie(w=>c(h),["stop"]),"data-tooltip":h.visible?"Hide":"Show"},[h.visible?(n(),l("svg",Pl,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(n(),l("svg",zl,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,Ml),e("button",{class:U(["layer-action-btn",{active:h.locked}]),onClick:Ie(w=>z(h),["stop"]),"data-tooltip":h.locked?"Unlock":"Lock"},[h.locked?(n(),l("svg",Nl,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(n(),l("svg",Ll,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,Tl),e("button",{class:"layer-action-btn",onClick:Ie(w=>ne(h.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,jl),e("button",{class:"layer-action-btn",onClick:Ie(w=>X(h.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Bl),e("button",{class:"layer-action-btn danger",onClick:Ie(w=>B(h.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Dl)])],10,Sl))),128))]))]))}},ql=Be(_l,[["__scopeId","data-v-7407acd8"]]),Rl={class:"panel-section"},Fl={class:"preset-toolbar"},Ul=["value"],Vl=["value"],Ol=["value"],Wl={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},Gl=["onClick"],Hl={class:"preset-meta-chip muted"},Ql={key:1,class:"import-review"},Yl={class:"motion-scrubber-header"},Jl={class:"preset-toolbar compact"},Kl=["value"],Xl=["value"],Zl={class:"import-list"},ei=["onUpdate:modelValue"],ti={class:"import-item-title"},oi={class:"preset-meta-chip"},ni={key:0,class:"preset-meta-chip muted"},li={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(y,{emit:s}){const r=s;return(u,p)=>(n(),l("div",Rl,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",Fl,[e("input",{value:y.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=m=>r("update:searchQuery",m.target.value))},null,40,Ul),e("select",{value:y.categoryFilter,class:"select",onChange:p[1]||(p[1]=m=>r("update:categoryFilter",m.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(n(!0),l(Q,null,re(y.availableCategories,m=>(n(),l("option",{key:`library-${m}`,value:m},S(m),9,Ol))),128))],40,Vl),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=m=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=m=>r("export-presets"))},"Export")]),y.recentPresets.length?(n(),l("div",Wl,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(n(!0),l(Q,null,re(y.recentPresets,m=>(n(),l("div",{class:"preset-item",key:`recent-${m.id}`},[e("button",{type:"button",class:"preset-chip",onClick:g=>r("apply-preset",m)},S(m.name),9,Gl),e("span",Hl,"Used "+S(m.usageCount)+"x",1)]))),128))])):q("",!0),y.pendingImportedPresets.length?(n(),l("div",Ql,[e("div",Yl,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=m=>r("clear-imports"))},"Discard")]),e("div",Jl,[e("select",{value:y.importScopeFilter,class:"select",onChange:p[5]||(p[5]=m=>r("update:importScopeFilter",m.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Kl),e("select",{value:y.importConflictMode,class:"select",onChange:p[6]||(p[6]=m=>r("update:importConflictMode",m.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Xl),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=m=>r("apply-imports"))},"Merge Selected")]),e("div",Zl,[(n(!0),l(Q,null,re(y.filteredPendingImports,m=>(n(),l("label",{key:`pending-${m.id}`,class:"import-item"},[te(e("input",{"onUpdate:modelValue":g=>m.selected=g,type:"checkbox"},null,8,ei),[[pt,m.selected]]),e("span",ti,S(m.name),1),e("span",oi,S(m.scope),1),m.category?(n(),l("span",ni,S(m.category),1)):q("",!0)]))),128))])])):q("",!0)]))}},ii=Be(li,[["__scopeId","data-v-61f99273"]]),ai={key:1,class:"panel-section"},si={class:"field-hint"},ri={class:"motion-scrubber-shell"},di={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},ui=["onClick"],ci={class:"motion-preview"},pi={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},vi={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},fi={class:"motion-card-label"},mi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},gi={class:"form-group"},bi={class:"form-group"},yi={class:"form-group",style:{"margin-top":"var(--space-3)"}},hi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},xi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},wi={key:0,class:"preset-list"},ki=["onDragstart","onDragenter","onDrop"],Ci=["onClick"],$i={key:0,class:"preset-meta-chip"},Si=["onClick"],Ii=["onClick"],Ai=["onClick"],Ei={key:1,class:"preset-row preset-edit-row"},Mi=["onClick"],Pi={key:1,class:"field-hint"},zi={key:2,class:"panel-section"},Ti={class:"slide-settings-tabs"},Ni={key:0,class:"slide-settings-pane"},Li={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ji={class:"form-group"},Bi={class:"bg-type-tabs"},Di=["onClick"],_i={key:0,class:"color-row"},qi=["value"],Ri=["value"],Fi={class:"slide-settings-subsection"},Ui={class:"canvas-size-grid"},Vi=["onClick"],Oi={class:"canvas-size-icon-shell"},Wi={class:"canvas-size-name"},Gi={class:"canvas-size-ratio"},Hi={class:"canvas-custom-card"},Qi={class:"canvas-custom-header"},Yi={class:"field-hint"},Ji={class:"canvas-custom-inputs"},Ki={class:"form-group"},Xi={class:"canvas-size-input-wrap"},Zi=["value"],ea={class:"form-group"},ta={class:"canvas-size-input-wrap"},oa=["value"],na={class:"check-row canvas-size-lock"},la={class:"slide-settings-subsection"},ia={key:1,class:"slide-settings-pane"},aa=["value"],sa={class:"form-group",style:{"margin-top":"var(--space-3)"}},ra=["value"],da={class:"check-row"},ua=["checked"],ca={key:2,class:"slide-settings-pane"},pa={class:"check-row"},va=["checked"],fa={class:"check-row"},ma=["checked"],ga={class:"check-row"},ba=["checked"],ya={class:"check-row"},ha=["checked"],xa={class:"check-row"},wa=["checked"],ka={class:"panel-title"},Ca={class:"element-type-badge"},$a={class:"geo-grid"},Sa={class:"form-group"},Ia=["value"],Aa={class:"form-group"},Ea=["value"],Ma={class:"form-group"},Pa=["value"],za={class:"form-group"},Ta=["value"],Na={class:"form-group"},La=["value"],ja={class:"form-group"},Ba=["value"],Da={class:"motion-scrubber-shell"},_a={class:"motion-card-grid"},qa=["onClick"],Ra={class:"motion-preview"},Fa={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Ua={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Va={class:"motion-card-label"},Oa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Wa={class:"form-group"},Ga=["value"],Ha={class:"form-group"},Qa=["value"],Ya={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ja={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Ka={key:0,class:"preset-list"},Xa=["onDragstart","onDragenter","onDrop"],Za=["onClick"],es={key:0,class:"preset-meta-chip"},ts=["onClick"],os=["onClick"],ns=["onClick"],ls={key:1,class:"preset-row preset-edit-row"},is=["onClick"],as={key:1,class:"field-hint"},ss={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rs=["value"],ds={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},us={class:"form-group"},cs=["value"],ps={class:"form-group"},vs=["value"],fs={class:"form-group",style:{"margin-top":"var(--space-3)"}},ms=["value"],gs=["value"],bs={class:"form-group",style:{"margin-top":"var(--space-3)"}},ys={class:"align-btns"},hs=["onClick"],xs={class:"form-group",style:{"margin-top":"var(--space-3)"}},ws={class:"style-btns"},ks={class:"form-group",style:{"margin-top":"var(--space-3)"}},Cs={class:"color-row"},$s=["value"],Ss=["value"],Is={class:"form-group",style:{"margin-top":"var(--space-3)"}},As=["value"],Es={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ms={class:"form-group"},Ps=["value"],zs={class:"form-group"},Ts=["value"],Ns={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ls=["value"],js={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Bs=["value"],Ds={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_s=["value"],qs={class:"form-group"},Rs=["value"],Fs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Us={class:"form-group"},Vs=["value"],Os={class:"form-group"},Ws=["value"],Gs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hs=["value"],Qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ys={class:"color-row"},Js=["value"],Ks=["value"],Xs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Zs={class:"color-row"},er=["value"],tr=["value"],or={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nr=["value"],lr={class:"form-group"},ir=["value"],ar={class:"form-group",style:{"margin-top":"var(--space-3)"}},sr=["value"],rr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},dr=["value"],ur={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},cr=["value"],pr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vr=["value"],fr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},mr={class:"chart-data-actions"},gr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},br=["value","placeholder"],yr={class:"chart-palette-preview"},hr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},xr={class:"form-group"},wr=["value"],kr={class:"form-group"},Cr=["value"],$r={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Sr={class:"form-group"},Ir=["value"],Ar={class:"form-group"},Er=["value"],Mr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Pr={class:"form-group"},zr=["value"],Tr={key:0,class:"form-group"},Nr=["value"],Lr={key:1,class:"form-group"},jr=["value"],Br={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Dr={class:"form-group"},_r=["value"],qr={class:"check-row",style:{"margin-top":"20px"}},Rr=["checked"],Fr={class:"check-row"},Ur=["checked"],Vr={key:1,class:"check-row"},Or=["checked"],Wr={class:"check-row"},Gr=["checked"],Hr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qr=["value"],Yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Jr=["value"],Kr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xr=["value"],Zr={key:0,class:"form-group"},ed=["value"],td={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},od={class:"form-group"},nd=["value"],ld={class:"form-group"},id=["value"],ad={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},sd={class:"form-group"},rd=["value"],dd={class:"form-group"},ud=["value"],cd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},pd={class:"form-group"},vd=["value"],fd={class:"form-group"},md=["value"],gd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},bd={class:"form-group"},yd=["value"],hd=["value"],xd={class:"form-group"},wd=["value"],kd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cd=["value"],$d={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sd={class:"color-row"},Id=["value"],Ad=["value"],Ed={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Md={class:"form-group"},Pd=["value"],zd={class:"form-group"},Td=["value"],Nd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ld=["value"],jd={class:"form-group"},Bd=["value"],Dd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_d={class:"form-group"},qd=["value"],Rd={class:"form-group"},Fd=["value"],Ud={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Vd=["value"],Od={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wd=["value"],Gd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hd=["value"],Qd={class:"check-row"},Yd=["checked"],Jd={class:"check-row"},Kd=["checked"],Xd={class:"check-row"},Zd=["checked"],eu={class:"check-row"},tu=["checked"],ou={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nu=["value"],lu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},iu=["value"],au={class:"check-row"},su=["checked"],ru={class:"check-row"},du=["checked"],uu={class:"check-row"},cu=["checked"],pu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},vu={class:"form-group"},fu=["value"],mu={class:"form-group"},gu=["value"],bu={class:"form-group",style:{"margin-top":"var(--space-3)"}},yu=["value"],hu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xu=["value"],wu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ku=["value"],Cu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$u=["value"],Su={class:"form-group"},Iu=["value"],Au={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Eu={class:"form-group"},Mu=["value"],Pu={class:"form-group"},zu=["value"],Tu={class:"form-group",style:{"margin-top":"var(--space-3)"}},Nu=["value"],Lu={class:"panel-section"},ju={class:"actions-list"},Bu={__name:"PropertiesPanel",setup(y){const s=We(),r=Ge(),u=M(()=>r.getProject(s.projectId)),p=M(()=>{var d,t;return(t=(d=u.value)==null?void 0:d.slides)==null?void 0:t.find(P=>P.id===s.currentSlideId)}),m=M(()=>{var d;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((d=u.value)==null?void 0:d.settings)||{}}}),g=M(()=>vt(m.value)),c=M(()=>wn(m.value)),z=M(()=>kn(g.value.width,g.value.height)),ne=L(!0),X=L("canvas"),B=M(()=>Array.isArray(m.value.motionPresets)?m.value.motionPresets:[]),Z=M(()=>B.value.filter(d=>d.scope!=="group")),ee=M(()=>B.value.filter(d=>d.scope==="group")),_=M(()=>{var t;const d=new Set(s.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(P=>d.has(P.id))}),a=M(()=>{var d,t;return s.selectedElementId?(t=(d=p.value)==null?void 0:d.elements)==null?void 0:t.find(P=>P.id===s.selectedElementId):null}),h=M(()=>s.multiSelection||!!a.value),w=M(()=>s.multiSelection?"group":"single"),D=M(()=>{var t,P;const d=(P=(t=a.value)==null?void 0:t.animations)==null?void 0:P[0];return{type:(d==null?void 0:d.type)||"auto",delay:Number((d==null?void 0:d.delay)||0),duration:Number((d==null?void 0:d.duration)||.64)}}),f=M(()=>{var Ce,ze;const d=_.value.map(Ee=>{var Ze;return((Ze=Ee.animations)==null?void 0:Ze[0])||null}),t=((Ce=d[0])==null?void 0:Ce.type)||"auto",P=Number(((ze=d[0])==null?void 0:ze.duration)||.64),K=d.every(Ee=>((Ee==null?void 0:Ee.type)||"auto")===t),he=d.every(Ee=>Number((Ee==null?void 0:Ee.duration)||.64)===P);return{type:K?t:"mixed",duration:he?P:.64}}),j=L(0),oe=L(0),be=L(""),ue=L(""),N=L(""),T=L(""),O=L(""),ae=L(""),Y=L(""),fe=L(""),ge=L(""),Me=L(""),ke=L(""),ce=L(""),Te=L(""),Pe=L("all"),Ne=L(null),W=L(null),J=L([]),ye=L("all"),ie=L("replace"),le=L(""),$e=L(null),pe=L("");let C=null;const x=L({});je(a,d=>{d?x.value=JSON.parse(JSON.stringify(d)):x.value={},(d==null?void 0:d.type)==="chart"&&(le.value="")},{immediate:!0,deep:!0}),je(()=>{var d;return[s.propertiesPanelSection,(d=a.value)==null?void 0:d.id,s.rightPanelTab]},async([d,t,P])=>{var he;if(!d||!t||P!=="properties")return;await xn();const K=(he=$e.value)==null?void 0:he.querySelector(`[data-props-anchor="${d}"]`);K&&(K.scrollIntoView({behavior:"smooth",block:"start"}),pe.value=d,C&&window.clearTimeout(C),C=window.setTimeout(()=>{pe.value===d&&(pe.value="")},1400))},{immediate:!0});function I(d){a.value&&r.updateElement(s.projectId,s.currentSlideId,a.value.id,d)}function b(d){if(!a.value)return;const t={...a.value.content,...d};I({content:t})}function Ae(d,t){const P=parseFloat(t);isNaN(P)||I({[d]:P})}const xe=L({});je(p,d=>{d&&(xe.value={...d})},{immediate:!0});function ve(d){p.value&&r.updateSlide(s.projectId,p.value.id,d)}function we(d){if(!u.value)return;const t={...m.value,...d};r.updateProject(s.projectId,{settings:{...t,...Jn(t)}})}function Ue(d){we({slideWidth:d.width,slideHeight:d.height})}function Ye(d,t){const P=Math.round(Number(t)||0);if(!P)return;const K={[`slide${d==="width"?"Width":"Height"}`]:P};if(ne.value){const he=g.value.width,Ce=g.value.height;d==="width"?K.slideHeight=Math.round(P*(Ce/he)):K.slideWidth=Math.round(P*(he/Ce))}we(K)}const Ve=M(()=>{var d;return Cn(((d=u.value)==null?void 0:d.theme)||{})}),rt=M(()=>{var t,P;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const d=((P=a.value.content)==null?void 0:P.paletteText)||Ve.value.paletteText;return Zn(d)});function E(d){const t=Kn(d,{fallbackToDefault:!1});return t.length?Xn(t):""}function i(d){var P;if(((P=a.value)==null?void 0:P.type)!=="chart")return;const t=E(d);t&&(b({dataText:t}),le.value="")}async function R(d){var K;const t=d.target,P=(K=t==null?void 0:t.files)==null?void 0:K[0];if(P)try{const he=await P.text();i(he)}finally{t&&(t.value="")}}function se(){var d;(d=W.value)==null||d.click()}function v(){var t,P;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const d=E(((P=a.value.content)==null?void 0:P.dataText)||"");d&&b({dataText:d})}function A(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&b({...Ve.value})}function V(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&b({paletteText:Ve.value.paletteText})}function G(d){return String(d||"").split(",").map(t=>t.trim()).filter(Boolean)}function $(d){const t=(d==null?void 0:d.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((d==null?void 0:d.name)||"Imported Preset").trim()||"Imported Preset",category:String((d==null?void 0:d.category)||"").trim(),tags:Array.isArray(d==null?void 0:d.tags)?d.tags.map(P=>String(P).trim()).filter(Boolean):G(d==null?void 0:d.tags),type:String((d==null?void 0:d.type)||"auto"),delay:Math.max(0,Number(d==null?void 0:d.delay)||0),duration:Math.max(.1,Number(d==null?void 0:d.duration)||.72),stepDelay:Math.max(0,Number(d==null?void 0:d.stepDelay)||0)}}const Se=M(()=>[...new Set(B.value.map(t=>t.category).filter(Boolean))].sort((t,P)=>t.localeCompare(P))),qe=M(()=>[...B.value].filter(d=>Number(d.usageCount||0)>0).sort((d,t)=>{const P=Number(t.lastUsedAt||0)-Number(d.lastUsedAt||0);return P!==0?P:Number(t.usageCount||0)-Number(d.usageCount||0)}).slice(0,6)),De=M(()=>ye.value==="all"?J.value:J.value.filter(d=>d.scope===ye.value));function Ke(d){const t=Te.value.trim().toLowerCase(),P=Pe.value;return P==="all"||(d.category||"")===P?t?[d.name,d.category,...d.tags||[]].filter(Boolean).some(he=>String(he).toLowerCase().includes(t)):!0:!1}const Le=M(()=>Z.value.filter(Ke)),tt=M(()=>ee.value.filter(Ke)),Oe=M(()=>qe.value.filter(d=>w.value==="group"?d.scope==="group":d.scope!=="group"));function He(d){const t=String(d.name||"").trim();if(!t)return;const P=B.value.findIndex(Ce=>Ce.scope===d.scope&&Ce.name.toLowerCase()===t.toLowerCase()),K={...d,id:P>=0?B.value[P].id:`motion-${Date.now()}`,name:t,category:String(d.category||"").trim(),tags:Array.isArray(d.tags)?d.tags:G(d.tags)},he=[...B.value];P>=0?he.splice(P,1,K):he.push(K),we({motionPresets:he})}function Qe(d,t){const P=B.value.map(K=>K.id===d?{...K,...t}:K);we({motionPresets:P})}function ot(d){const t=B.value.find(P=>P.id===d);t&&Qe(d,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function nt(d,t){const P=B.value.filter(ze=>ze.scope===d).map(ze=>ze.name.toLowerCase()),K=String(t||"Preset").trim()||"Preset";if(!P.includes(K.toLowerCase()))return K;let he=2,Ce=`${K} Copy`;for(;P.includes(Ce.toLowerCase());)Ce=`${K} Copy ${he}`,he+=1;return Ce}function dt(d){we({motionPresets:B.value.filter(t=>t.id!==d)}),N.value===d&&(N.value="",T.value="")}function yt(d){He({...d,id:void 0,name:nt(d.scope,d.name)})}function ht(d){N.value=d.id,T.value=d.name,O.value=d.category||"",ae.value=Array.isArray(d.tags)?d.tags.join(", "):""}function gt(){N.value="",T.value="",O.value="",ae.value=""}function xt(d){const t=String(T.value||"").trim();t&&(Qe(d,{name:t,category:String(O.value||"").trim(),tags:G(ae.value)}),gt())}function Sn(d,t,P){if(!t||!P||t===P)return;const K=B.value.filter(Re=>Re.scope===d),he=K.findIndex(Re=>Re.id===t),Ce=K.findIndex(Re=>Re.id===P);if(he===-1||Ce===-1)return;const ze=[...K],[Ee]=ze.splice(he,1);ze.splice(Ce,0,Ee);const Ze=B.value.filter(Re=>Re.scope!==d),at=[];B.value.forEach(Re=>{if(Re.scope===d){ze.length&&at.push(ze.shift());return}const ut=Ze.shift();ut&&at.push(ut)}),we({motionPresets:at})}function wt(d){Y.value=d.id,fe.value=d.id}function kt(d){Y.value&&(fe.value=d.id)}function Ct(d){Y.value&&(Sn(d.scope,Y.value,d.id),Y.value="",fe.value="")}function $t(){Y.value="",fe.value=""}function St(){j.value+=1}function It(){oe.value+=1}function At(d,t){ve({[d]:t})}function In(d){const t=Math.max(0,Number(d)||0);ve({duration:t})}function ft(d){var K;if(!a.value)return;const P={...((K=a.value.animations)==null?void 0:K[0])||{type:"auto",delay:0,duration:.64},...d};if(P.type==="auto"){I({animations:[]});return}I({animations:[{type:P.type||"none",delay:Math.max(0,Number(P.delay)||0),duration:Math.max(.1,Number(P.duration)||.64)}]})}const Je=L("stagger-in"),lt=L(0),it=L(.12),Xe=L(.72);je(_,d=>{d.length&&(Je.value=f.value.type==="mixed"?"stagger-in":f.value.type,Xe.value=f.value.duration)},{immediate:!0,deep:!0});function An(){if(!_.value.length)return;[..._.value].sort((t,P)=>(t.y||0)!==(P.y||0)?(t.y||0)-(P.y||0):(t.x||0)-(P.x||0)).forEach((t,P)=>{if(Je.value==="auto"){r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:Je.value,delay:Math.max(0,Number(lt.value)||0)+P*Math.max(0,Number(it.value)||0),duration:Math.max(.1,Number(Xe.value)||.72)}]})})}function Et(d){Je.value=d.type||"stagger-in",lt.value=Number(d.delay||0),it.value=Number(d.stepDelay||0),Xe.value=Number(d.duration||.72),ot(d.id),It()}function En(){He({scope:"group",name:ue.value,category:ke.value,tags:G(ce.value),type:Je.value,delay:Math.max(0,Number(lt.value)||0),stepDelay:Math.max(0,Number(it.value)||0),duration:Math.max(.1,Number(Xe.value)||.72)}),ue.value="",ke.value="",ce.value=""}function Mt(d){ft({type:d.type||"auto",delay:Number(d.delay||0),duration:Number(d.duration||.72)}),ot(d.id),St()}function Mn(){He({scope:"single",name:be.value,category:ge.value,tags:G(Me.value),type:D.value.type,delay:Math.max(0,Number(D.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(D.value.duration)||.72)}),be.value="",ge.value="",Me.value=""}function Pn(){var d;(d=Ne.value)==null||d.click()}async function zn(d){var K;const t=d.target,P=(K=t==null?void 0:t.files)==null?void 0:K[0];if(P)try{const he=await P.text(),Ce=JSON.parse(he),ze=Array.isArray(Ce)?Ce:Array.isArray(Ce.motionPresets)?Ce.motionPresets:[];if(!ze.length)return;J.value=ze.map(Ee=>({...$(Ee),selected:!0,importName:String((Ee==null?void 0:Ee.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function Pt(){J.value=[]}function Tn(){const d=J.value.filter(P=>P.selected);if(!d.length)return;const t=[...B.value];d.forEach(P=>{const K=t.findIndex(he=>he.scope===P.scope&&he.name.toLowerCase()===P.name.toLowerCase());if(K>=0){ie.value==="replace"?t.splice(K,1,{...t[K],...P,id:t[K].id}):t.push({...P,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:nt(P.scope,P.name)});return}t.push(P)}),we({motionPresets:t}),Pt()}function Nn(){var Ce;if(!B.value.length)return;const d={version:1,exportedAt:new Date().toISOString(),motionPresets:B.value.map(({id:ze,...Ee})=>Ee)},t=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),P=URL.createObjectURL(t),K=document.createElement("a"),he=String(((Ce=u.value)==null?void 0:Ce.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";K.href=P,K.download=`${he}-motion-presets.json`,document.body.appendChild(K),K.click(),document.body.removeChild(K),URL.revokeObjectURL(P)}const Ln=M(()=>[{id:`single-${j.value}`,delay:Math.max(0,Number(D.value.delay)||0),duration:Math.max(.1,Number(D.value.duration)||.72),type:D.value.type}]),jn=M(()=>Array.from({length:Math.min(Math.max(_.value.length,3),5)},(d,t)=>({id:`group-${oe.value}-${t}`,delay:Math.max(0,Number(lt.value)||0)+t*Math.max(0,Number(it.value)||0),duration:Math.max(.1,Number(Xe.value)||.72),type:Je.value}))),zt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Tt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(d,t)=>{var P,K,he,Ce,ze,Ee,Ze,at,Re,ut,Nt,Lt,jt,Bt,Dt,_t,qt,Rt,Ft,Ut,Vt,Ot,Wt,Gt,Ht,Qt,Yt,Jt,Kt,Xt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,fo,mo,go,bo,yo,ho,xo,wo,ko,Co,$o,So,Io,Ao,Eo,Mo,Po,zo,To,No,Lo,jo,Bo,Do,_o,qo,Ro,Fo,Uo,Vo,Oo,Wo,Go,Ho,Qo,Yo,Jo,Ko,Xo,Zo,en,tn,on,nn,ln,an,sn,rn,dn,un,cn,pn,vn;return n(),l("div",{ref_key:"panelRootRef",ref:$e,class:"properties-panel"},[e("input",{ref_key:"presetImportInput",ref:Ne,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:zn},null,544),e("input",{ref_key:"chartImportInput",ref:W,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:R},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),h.value?(n(),_e(ii,{key:0,"search-query":Te.value,"category-filter":Pe.value,"available-categories":Se.value,"recent-presets":Oe.value,"pending-imported-presets":J.value,"filtered-pending-imports":De.value,"import-scope-filter":ye.value,"import-conflict-mode":ie.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>Te.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>Pe.value=o),onTriggerImport:Pn,onExportPresets:Nn,onApplyPreset:t[2]||(t[2]=o=>w.value==="group"?Et(o):Mt(o)),onClearImports:Pt,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>ye.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>ie.value=o),onApplyImports:Tn},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):q("",!0),k(s).multiSelection?(n(),l("div",ai,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",si,S(_.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",ri,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:It},"Replay")]),(n(),l("div",{class:"motion-scrubber-stage",key:`group-preview-${oe.value}`},[(n(!0),l(Q,null,re(jn.value,o=>(n(),l("span",{key:o.id,class:U(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:de({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",di,[(n(),l(Q,null,re(zt,o=>e("button",{key:`group-${o.value}`,type:"button",class:U(["motion-card",Je.value===o.value&&"active"]),onClick:H=>Je.value=o.value},[e("span",ci,[e("span",{class:U(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(n(),l("span",pi)):q("",!0),o.value==="stagger-in"?(n(),l("span",vi)):q("",!0)]),e("span",fi,S(o.label),1)],10,ui)),64))]),e("div",mi,[e("div",gi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),te(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>lt.value=o),class:"input"},null,512),[[me,lt.value]])]),e("div",bi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),te(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>it.value=o),class:"input"},null,512),[[me,it.value]])])]),e("div",yi,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),te(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>Xe.value=o),class:"input"},null,512),[[me,Xe.value]])]),e("div",hi,[te(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>ue.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[me,ue.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:En},"Save")]),e("div",xi,[te(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>ke.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[me,ke.value]]),te(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>ce.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,ce.value]])]),tt.value.length?(n(),l("div",wi,[(n(!0),l(Q,null,re(tt.value,o=>(n(),l("div",{key:o.id,class:U(["preset-item",Y.value===o.id&&"dragging",fe.value===o.id&&Y.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:H=>wt(o),onDragenter:Ie(H=>kt(o),["prevent"]),onDragover:t[14]||(t[14]=Ie(()=>{},["prevent"])),onDrop:Ie(H=>Ct(o),["prevent"]),onDragend:$t},[e("button",{type:"button",class:"preset-chip",onClick:H=>Et(o)},S(o.name),9,Ci),o.category?(n(),l("span",$i,S(o.category),1)):q("",!0),(n(!0),l(Q,null,re(o.tags||[],H=>(n(),l("span",{key:`${o.id}-${H}`,class:"preset-meta-chip muted"},"#"+S(H),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:H=>yt(o)},"Duplicate",8,Si),e("button",{type:"button",class:"preset-mini-btn",onClick:H=>ht(o)},"Rename",8,Ii),e("button",{type:"button",class:"preset-mini-btn danger",onClick:H=>dt(o.id)},"Delete",8,Ai),N.value===o.id?(n(),l("div",Ei,[te(e("input",{"onUpdate:modelValue":t[11]||(t[11]=H=>T.value=H),class:"input"},null,512),[[me,T.value]]),te(e("input",{"onUpdate:modelValue":t[12]||(t[12]=H=>O.value=H),class:"input",placeholder:"Category"},null,512),[[me,O.value]]),te(e("input",{"onUpdate:modelValue":t[13]||(t[13]=H=>ae.value=H),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,ae.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:H=>xt(o.id)},"Save",8,Mi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):q("",!0)],42,ki))),128))])):ee.value.length?(n(),l("div",Pi,"No group presets match the current search.")):q("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:An}," Apply Sequence to Selection ")])):a.value?(n(),l(Q,{key:3},[e("div",{class:U(["panel-section",pe.value==="geometry"&&"panel-section-focused"]),"data-props-anchor":"geometry"},[e("div",ka,[t[179]||(t[179]=F(" Position & Size ",-1)),e("span",Ca,S(a.value.type),1)]),e("div",$a,[e("div",Sa,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=o=>Ae("x",o.target.value))},null,40,Ia)]),e("div",Aa,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=o=>Ae("y",o.target.value))},null,40,Ea)]),e("div",Ma,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=o=>Ae("width",o.target.value))},null,40,Pa)]),e("div",za,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=o=>Ae("height",o.target.value))},null,40,Ta)]),e("div",Na,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>Ae("rotation",o.target.value))},null,40,La)]),e("div",ja,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>Ae("opacity",o.target.value))},null,40,Ba)])])],2),e("div",{class:U(["panel-section",pe.value==="animation"&&"panel-section-focused"]),"data-props-anchor":"animation"},[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",Da,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:St},"Replay")]),(n(),l("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${j.value}`},[(n(!0),l(Q,null,re(Ln.value,o=>(n(),l("span",{key:o.id,class:U(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:de({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",_a,[(n(),l(Q,null,re(zt,o=>e("button",{key:o.value,type:"button",class:U(["motion-card",D.value.type===o.value&&"active"]),onClick:H=>ft({type:o.value})},[e("span",Ra,[e("span",{class:U(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(n(),l("span",Fa)):q("",!0),o.value==="stagger-in"?(n(),l("span",Ua)):q("",!0)]),e("span",Va,S(o.label),1)],10,qa)),64))]),e("div",Oa,[e("div",Wa,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:D.value.delay,class:"input",onChange:t[45]||(t[45]=o=>ft({delay:o.target.value}))},null,40,Ga)]),e("div",Ha,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:D.value.duration,class:"input",onChange:t[46]||(t[46]=o=>ft({duration:o.target.value}))},null,40,Qa)])]),e("div",Ya,[te(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>be.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[me,be.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Mn},"Save")]),e("div",Ja,[te(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>ge.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[me,ge.value]]),te(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>Me.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,Me.value]])]),Le.value.length?(n(),l("div",Ka,[(n(!0),l(Q,null,re(Le.value,o=>(n(),l("div",{key:o.id,class:U(["preset-item",Y.value===o.id&&"dragging",fe.value===o.id&&Y.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:H=>wt(o),onDragenter:Ie(H=>kt(o),["prevent"]),onDragover:t[53]||(t[53]=Ie(()=>{},["prevent"])),onDrop:Ie(H=>Ct(o),["prevent"]),onDragend:$t},[e("button",{type:"button",class:"preset-chip",onClick:H=>Mt(o)},S(o.name),9,Za),o.category?(n(),l("span",es,S(o.category),1)):q("",!0),(n(!0),l(Q,null,re(o.tags||[],H=>(n(),l("span",{key:`${o.id}-${H}`,class:"preset-meta-chip muted"},"#"+S(H),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:H=>yt(o)},"Duplicate",8,ts),e("button",{type:"button",class:"preset-mini-btn",onClick:H=>ht(o)},"Rename",8,os),e("button",{type:"button",class:"preset-mini-btn danger",onClick:H=>dt(o.id)},"Delete",8,ns),N.value===o.id?(n(),l("div",ls,[te(e("input",{"onUpdate:modelValue":t[50]||(t[50]=H=>T.value=H),class:"input"},null,512),[[me,T.value]]),te(e("input",{"onUpdate:modelValue":t[51]||(t[51]=H=>O.value=H),class:"input",placeholder:"Category"},null,512),[[me,O.value]]),te(e("input",{"onUpdate:modelValue":t[52]||(t[52]=H=>ae.value=H),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,ae.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:H=>xt(o.id)},"Save",8,is),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:gt},"Cancel")])):q("",!0)],42,Xa))),128))])):Z.value.length?(n(),l("div",as,"No single-element presets match the current search.")):q("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))],2),["text","heading"].includes(a.value.type)?(n(),l("div",{key:0,class:U(["panel-section",pe.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",ss,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(at=a.value.content)==null?void 0:at.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>b({text:o.target.value}))},null,40,rs)]),e("div",ds,[e("div",us,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(Re=a.value.content)==null?void 0:Re.fontSize,class:"input",onChange:t[55]||(t[55]=o=>b({fontSize:+o.target.value}))},null,40,cs)]),e("div",ps,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(ut=a.value.content)==null?void 0:ut.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>b({fontWeight:o.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,vs)])]),e("div",fs,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Nt=a.value.content)==null?void 0:Nt.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>b({fontFamily:o.target.value}))},[(n(),l(Q,null,re(Tt,o=>e("option",{key:o,value:o},S(o.split(",")[0]),9,gs)),64))],40,ms)]),e("div",bs,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",ys,[(n(),l(Q,null,re(["left","center","right","justify"],o=>{var H;return e("button",{key:o,class:U(["align-btn",((H=a.value.content)==null?void 0:H.textAlign)===o&&"active"]),onClick:fn=>b({textAlign:o})},S(o[0].toUpperCase()),11,hs)}),64))])]),e("div",xs,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",ws,[e("button",{class:U(["style-btn",((Lt=a.value.content)==null?void 0:Lt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var H;return b({fontStyle:((H=a.value.content)==null?void 0:H.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:U(["style-btn",((jt=a.value.content)==null?void 0:jt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var H;return b({textDecoration:((H=a.value.content)==null?void 0:H.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:U(["style-btn",((Bt=a.value.content)==null?void 0:Bt.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var H;return b({textDecoration:((H=a.value.content)==null?void 0:H.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",ks,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",Cs,[e("input",{type:"color",value:((Dt=a.value.content)==null?void 0:Dt.color)||"#000",onInput:t[61]||(t[61]=o=>b({color:o.target.value})),class:"color-input-native"},null,40,$s),e("input",{value:((_t=a.value.content)==null?void 0:_t.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>b({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ss)])]),e("div",Is,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((qt=a.value.content)==null?void 0:qt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>b({lineHeight:+o.target.value}))},null,40,As)]),e("div",Es,[e("div",Ms,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Rt=a.value.content)==null?void 0:Rt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>b({textTransform:o.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,Ps)]),e("div",zs,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Ft=a.value.content)==null?void 0:Ft.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>b({letterSpacing:+o.target.value}))},null,40,Ts)])])],2)):q("",!0),a.value.type==="image"?(n(),l("div",{key:1,class:U(["panel-section",pe.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",Ns,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Ut=a.value.content)==null?void 0:Ut.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>b({src:o.target.value}))},null,40,Ls)]),e("div",js,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Vt=a.value.content)==null?void 0:Vt.alt,class:"input",onInput:t[67]||(t[67]=o=>b({alt:o.target.value}))},null,40,Bs)]),e("div",Ds,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Ot=a.value.content)==null?void 0:Ot.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>b({objectFit:o.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,_s)]),e("div",qs,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((Wt=a.value.content)==null?void 0:Wt.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>b({borderRadius:+o.target.value}))},null,40,Rs)]),e("div",Fs,[e("div",Us,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Gt=a.value.content)==null?void 0:Gt.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>b({borderWidth:+o.target.value}))},null,40,Vs)]),e("div",Os,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Ht=a.value.content)==null?void 0:Ht.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>b({borderColor:o.target.value}))},null,40,Ws)])])],2)):q("",!0),a.value.type==="shape"?(n(),l("div",{key:2,class:U(["panel-section",pe.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Gs,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((Qt=a.value.content)==null?void 0:Qt.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>b({shapeType:o.target.value}))},[...t[215]||(t[215]=[Fe('<option value="rectangle" data-v-1d3dcef4>Rectangle</option><option value="circle" data-v-1d3dcef4>Circle</option><option value="triangle" data-v-1d3dcef4>Triangle</option><option value="star" data-v-1d3dcef4>Star</option><option value="arrow" data-v-1d3dcef4>Arrow</option><option value="diamond" data-v-1d3dcef4>Diamond</option>',6)])],40,Hs)]),e("div",Qs,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Ys,[e("input",{type:"color",value:((Yt=a.value.content)==null?void 0:Yt.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>b({fillColor:o.target.value})),class:"color-input-native"},null,40,Js),e("input",{value:((Jt=a.value.content)==null?void 0:Jt.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>b({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ks)])]),e("div",Xs,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Zs,[e("input",{type:"color",value:((Kt=a.value.content)==null?void 0:Kt.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>b({borderColor:o.target.value})),class:"color-input-native"},null,40,er),e("input",{value:((Xt=a.value.content)==null?void 0:Xt.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>b({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,tr)])]),e("div",or,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Zt=a.value.content)==null?void 0:Zt.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>b({borderWidth:+o.target.value}))},null,40,nr)]),e("div",lr,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((eo=a.value.content)==null?void 0:eo.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>b({borderRadius:+o.target.value}))},null,40,ir)]),e("div",ar,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((to=a.value.content)==null?void 0:to.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>b({opacity:+o.target.value}))},null,40,sr)])],2)):q("",!0),a.value.type==="chart"?(n(),l("div",{key:3,class:U(["panel-section",pe.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",rr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((oo=a.value.content)==null?void 0:oo.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=o=>b({chartType:o.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,dr)]),e("div",ur,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((no=a.value.content)==null?void 0:no.title)||"",class:"input",onInput:t[81]||(t[81]=o=>b({title:o.target.value}))},null,40,cr)]),e("div",pr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((lo=a.value.content)==null?void 0:lo.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=o=>b({dataText:o.target.value}))},null,40,vr),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:se},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",fr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),te(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=o=>le.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[me,le.value]]),e("div",mr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=o=>i(le.value))},"Convert pasted data")])]),e("div",gr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((io=a.value.content)==null?void 0:io.paletteText)||"",class:"input",placeholder:Ve.value.paletteText,onInput:t[85]||(t[85]=o=>b({paletteText:o.target.value}))},null,40,br),e("div",yr,[(n(!0),l(Q,null,re(rt.value,(o,H)=>(n(),l("span",{key:`chart-palette-${H}`,class:"chart-palette-swatch",style:de({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:V},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:A},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",hr,[e("div",xr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((ao=a.value.content)==null?void 0:ao.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=o=>b({backgroundColor:o.target.value}))},null,40,wr)]),e("div",kr,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((so=a.value.content)==null?void 0:so.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=o=>b({textColor:o.target.value}))},null,40,Cr)])]),e("div",$r,[e("div",Sr,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((ro=a.value.content)==null?void 0:ro.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=o=>b({gridColor:o.target.value}))},null,40,Ir)]),e("div",Ar,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((uo=a.value.content)==null?void 0:uo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=o=>b({borderColor:o.target.value}))},null,40,Er)])]),e("div",Mr,[e("div",Pr,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((co=a.value.content)==null?void 0:co.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=o=>b({borderWidth:+o.target.value}))},null,40,zr)]),((po=a.value.content)==null?void 0:po.chartType)!=="circle"?(n(),l("div",Tr,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((vo=a.value.content)==null?void 0:vo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=o=>b({maxValue:o.target.value}))},null,40,Nr)])):(n(),l("div",Lr,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((fo=a.value.content)==null?void 0:fo.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=o=>b({innerRadius:+o.target.value}))},null,40,jr)]))]),((mo=a.value.content)==null?void 0:mo.chartType)==="line"?(n(),l("div",Br,[e("div",Dr,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((go=a.value.content)==null?void 0:go.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=o=>b({strokeWidth:+o.target.value}))},null,40,_r)]),e("label",qr,[e("input",{type:"checkbox",checked:!!((bo=a.value.content)!=null&&bo.showArea),onChange:t[94]||(t[94]=o=>b({showArea:o.target.checked}))},null,40,Rr),t[239]||(t[239]=F(" Show area fill ",-1))])])):q("",!0),e("label",Fr,[e("input",{type:"checkbox",checked:((yo=a.value.content)==null?void 0:yo.showLegend)!==!1,onChange:t[95]||(t[95]=o=>b({showLegend:o.target.checked}))},null,40,Ur),t[240]||(t[240]=F(" Show legend ",-1))]),((ho=a.value.content)==null?void 0:ho.chartType)!=="circle"?(n(),l("label",Vr,[e("input",{type:"checkbox",checked:((xo=a.value.content)==null?void 0:xo.showGrid)!==!1,onChange:t[96]||(t[96]=o=>b({showGrid:o.target.checked}))},null,40,Or),t[241]||(t[241]=F(" Show grid lines ",-1))])):q("",!0),e("label",Wr,[e("input",{type:"checkbox",checked:((wo=a.value.content)==null?void 0:wo.showValues)!==!1,onChange:t[97]||(t[97]=o=>b({showValues:o.target.checked}))},null,40,Gr),t[242]||(t[242]=F(" Show values ",-1))])],2)):q("",!0),a.value.type==="button"?(n(),l("div",{key:4,class:U(["panel-section",pe.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Hr,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(ko=a.value.content)==null?void 0:ko.label,class:"input",onInput:t[98]||(t[98]=o=>b({label:o.target.value}))},null,40,Qr)]),e("div",Yr,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Co=a.value.content)==null?void 0:Co.variant)||"primary",class:"select",onChange:t[99]||(t[99]=o=>b({variant:o.target.value}))},[...t[245]||(t[245]=[Fe('<option value="primary" data-v-1d3dcef4>Primary</option><option value="secondary" data-v-1d3dcef4>Secondary</option><option value="outline" data-v-1d3dcef4>Outline</option><option value="ghost" data-v-1d3dcef4>Ghost</option><option value="danger" data-v-1d3dcef4>Danger</option>',5)])],40,Jr)]),e("div",Kr,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:(($o=a.value.content)==null?void 0:$o.action)||"none",class:"select",onChange:t[100]||(t[100]=o=>b({action:o.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Xr)]),(So=a.value.content)!=null&&So.action&&a.value.content.action!=="none"?(n(),l("div",Zr,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Io=a.value.content)==null?void 0:Io.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=o=>b({target:o.target.value}))},null,40,ed)])):q("",!0),e("div",td,[e("div",od,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Ao=a.value.content)==null?void 0:Ao.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=o=>b({bgColor:o.target.value}))},null,40,nd)]),e("div",ld,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Eo=a.value.content)==null?void 0:Eo.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=o=>b({textColor:o.target.value}))},null,40,id)])]),e("div",ad,[e("div",sd,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Mo=a.value.content)==null?void 0:Mo.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=o=>b({borderColor:o.target.value}))},null,40,rd)]),e("div",dd,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Po=a.value.content)==null?void 0:Po.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=o=>b({borderRadius:+o.target.value}))},null,40,ud)])]),e("div",cd,[e("div",pd,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((zo=a.value.content)==null?void 0:zo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=o=>b({fontSize:+o.target.value}))},null,40,vd)]),e("div",fd,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((To=a.value.content)==null?void 0:To.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=o=>b({fontWeight:+o.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,md)])]),e("div",gd,[e("div",bd,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((No=a.value.content)==null?void 0:No.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=o=>b({fontFamily:o.target.value}))},[(n(),l(Q,null,re(Tt,o=>e("option",{key:`btn-${o}`,value:o},S(o.split(",")[0]),9,hd)),64))],40,yd)]),e("div",xd,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Lo=a.value.content)==null?void 0:Lo.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=o=>b({letterSpacing:+o.target.value}))},null,40,wd)])])],2)):q("",!0),a.value.type==="hotspot"?(n(),l("div",{key:5,class:U(["panel-section",pe.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",kd,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((jo=a.value.content)==null?void 0:jo.icon)||"?",class:"select",onChange:t[110]||(t[110]=o=>b({icon:o.target.value}))},[...t[260]||(t[260]=[Fe('<option value="?" data-v-1d3dcef4>? (Info)</option><option value="!" data-v-1d3dcef4>! (Alert)</option><option value="+" data-v-1d3dcef4>+ (Plus)</option><option value="i" data-v-1d3dcef4>i (Info)</option><option value="✦" data-v-1d3dcef4>✦ (Star)</option>',5)])],40,Cd)]),e("div",$d,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",Sd,[e("input",{type:"color",value:((Bo=a.value.content)==null?void 0:Bo.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=o=>b({bgColor:o.target.value})),class:"color-input-native"},null,40,Id),e("input",{value:((Do=a.value.content)==null?void 0:Do.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=o=>b({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ad)])]),e("div",Ed,[e("div",Md,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((_o=a.value.content)==null?void 0:_o.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=o=>b({iconColor:o.target.value}))},null,40,Pd)]),e("div",zd,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((qo=a.value.content)==null?void 0:qo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=o=>b({borderRadius:+o.target.value}))},null,40,Td)])]),e("div",Nd,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Ro=a.value.content)==null?void 0:Ro.popupTitle,class:"input",onInput:t[115]||(t[115]=o=>b({popupTitle:o.target.value}))},null,40,Ld)]),e("div",jd,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Fo=a.value.content)==null?void 0:Fo.popupContent,class:"textarea",onInput:t[116]||(t[116]=o=>b({popupContent:o.target.value}))},null,40,Bd)]),e("div",Dd,[e("div",_d,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Uo=a.value.content)==null?void 0:Uo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>b({popupBgColor:o.target.value}))},null,40,qd)]),e("div",Rd,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Vo=a.value.content)==null?void 0:Vo.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>b({popupTextColor:o.target.value}))},null,40,Fd)])])],2)):q("",!0),a.value.type==="video"?(n(),l("div",{key:6,class:U(["panel-section",pe.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",Ud,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Oo=a.value.content)==null?void 0:Oo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=o=>b({src:o.target.value}))},null,40,Vd)]),e("div",Od,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(Wo=a.value.content)==null?void 0:Wo.poster,class:"input",onInput:t[120]||(t[120]=o=>b({poster:o.target.value}))},null,40,Wd)]),e("div",Gd,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Go=a.value.content)==null?void 0:Go.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=o=>b({objectFit:o.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Hd)]),e("label",Qd,[e("input",{type:"checkbox",checked:(Ho=a.value.content)==null?void 0:Ho.autoplay,onChange:t[122]||(t[122]=o=>b({autoplay:o.target.checked}))},null,40,Yd),t[274]||(t[274]=F(" Autoplay ",-1))]),e("label",Jd,[e("input",{type:"checkbox",checked:((Qo=a.value.content)==null?void 0:Qo.controls)??!0,onChange:t[123]||(t[123]=o=>b({controls:o.target.checked}))},null,40,Kd),t[275]||(t[275]=F(" Show Controls ",-1))]),e("label",Xd,[e("input",{type:"checkbox",checked:(Yo=a.value.content)==null?void 0:Yo.loop,onChange:t[124]||(t[124]=o=>b({loop:o.target.checked}))},null,40,Zd),t[276]||(t[276]=F(" Loop ",-1))]),e("label",eu,[e("input",{type:"checkbox",checked:(Jo=a.value.content)==null?void 0:Jo.muted,onChange:t[125]||(t[125]=o=>b({muted:o.target.checked}))},null,40,tu),t[277]||(t[277]=F(" Muted ",-1))])],2)):q("",!0),a.value.type==="audio"?(n(),l("div",{key:7,class:U(["panel-section",pe.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",ou,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(Ko=a.value.content)==null?void 0:Ko.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=o=>b({src:o.target.value}))},null,40,nu)]),e("div",lu,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Xo=a.value.content)==null?void 0:Xo.label,class:"input",onInput:t[127]||(t[127]=o=>b({label:o.target.value}))},null,40,iu)]),e("label",au,[e("input",{type:"checkbox",checked:(Zo=a.value.content)==null?void 0:Zo.autoplay,onChange:t[128]||(t[128]=o=>b({autoplay:o.target.checked}))},null,40,su),t[281]||(t[281]=F(" Autoplay ",-1))]),e("label",ru,[e("input",{type:"checkbox",checked:((en=a.value.content)==null?void 0:en.controls)!==!1,onChange:t[129]||(t[129]=o=>b({controls:o.target.checked}))},null,40,du),t[282]||(t[282]=F(" Show Controls ",-1))]),e("label",uu,[e("input",{type:"checkbox",checked:(tn=a.value.content)==null?void 0:tn.loop,onChange:t[130]||(t[130]=o=>b({loop:o.target.checked}))},null,40,cu),t[283]||(t[283]=F(" Loop ",-1))]),e("div",pu,[e("div",vu,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((on=a.value.content)==null?void 0:on.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=o=>b({accentColor:o.target.value}))},null,40,fu)]),e("div",mu,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((nn=a.value.content)==null?void 0:nn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=o=>b({textColor:o.target.value}))},null,40,gu)])]),e("div",bu,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((ln=a.value.content)==null?void 0:ln.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=o=>b({bgColor:o.target.value}))},null,40,yu)])],2)):q("",!0),a.value.type==="quiz"?(n(),l("div",{key:8,class:U(["panel-section",pe.value==="content"&&"panel-section-focused"]),"data-props-anchor":"content"},[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",hu,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(an=a.value.content)==null?void 0:an.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=o=>b({question:o.target.value}))},null,40,xu)]),e("div",wu,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(rn=(sn=a.value.content)==null?void 0:sn.options)==null?void 0:rn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=o=>b({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,ku)]),e("div",Cu,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((dn=a.value.content)==null?void 0:dn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=o=>b({correctIndex:+o.target.value}))},null,40,$u)]),e("div",Su,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(un=a.value.content)==null?void 0:un.explanation,class:"textarea",onInput:t[137]||(t[137]=o=>b({explanation:o.target.value}))},null,40,Iu)]),e("div",Au,[e("div",Eu,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((cn=a.value.content)==null?void 0:cn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=o=>b({cardBgColor:o.target.value}))},null,40,Mu)]),e("div",Pu,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((pn=a.value.content)==null?void 0:pn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=o=>b({questionColor:o.target.value}))},null,40,zu)])]),e("div",Tu,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((vn=a.value.content)==null?void 0:vn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=o=>b({accentColor:o.target.value}))},null,40,Nu)])],2)):q("",!0),e("div",Lu,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",ju,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=o=>k(r).duplicateElement(k(s).projectId,k(s).currentSlideId,a.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),F(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=o=>{k(s).showInteractionEditor=!0,k(s).interactionElementId=a.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),F(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=o=>{k(r).deleteElement(k(s).projectId,k(s).currentSlideId,a.value.id),k(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),F(" Delete Element ",-1)])])])])],64)):(n(),l("div",zi,[e("div",Ti,[e("button",{type:"button",class:U(["slide-settings-tab",X.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>X.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:U(["slide-settings-tab",X.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>X.value="transitions")},[...t[150]||(t[150]=[Fe('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-1d3dcef4><path d="M5 7h5" data-v-1d3dcef4></path><path d="M5 12h10" data-v-1d3dcef4></path><path d="M5 17h14" data-v-1d3dcef4></path><path d="M14 7l5 5-5 5" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Transitions</span>',2)])],2),e("button",{type:"button",class:U(["slide-settings-tab",X.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>X.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),X.value==="canvas"?(n(),l("div",Ni,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",Li,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),te(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>xe.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>At("title",xe.value.title))},null,544),[[me,xe.value.title]])]),e("div",ji,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",Bi,[(n(),l(Q,null,re(["color","gradient","image"],o=>{var H;return e("button",{key:o,class:U(["bg-type-btn",(((H=p.value)==null?void 0:H.backgroundType)||"color")===o&&"active"]),onClick:fn=>ve({backgroundType:o})},S(o),11,Di)}),64))]),(((P=p.value)==null?void 0:P.backgroundType)||"color")==="color"?(n(),l("div",_i,[e("input",{type:"color",value:((K=p.value)==null?void 0:K.background)||"#ffffff",onInput:t[20]||(t[20]=o=>ve({background:o.target.value})),class:"color-input-native"},null,40,qi),e("input",{value:((he=p.value)==null?void 0:he.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>ve({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Ri)])):((Ce=p.value)==null?void 0:Ce.backgroundType)==="gradient"?te((n(),l("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>xe.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>ve({backgroundGradient:xe.value.backgroundGradient}))},null,544)),[[me,xe.value.backgroundGradient]]):te((n(),l("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>xe.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>ve({backgroundImage:xe.value.backgroundImage}))},null,544)),[[me,xe.value.backgroundImage]])]),e("div",Fi,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",Ui,[(n(!0),l(Q,null,re(k(Yn),o=>{var H;return n(),l("button",{key:o.id,type:"button",class:U(["canvas-size-card",((H=c.value)==null?void 0:H.id)===o.id&&"active"]),onClick:fn=>Ue(o)},[e("span",Oi,[e("span",{class:U(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Wi,S(o.label),1),e("span",Gi,S(o.ratioLabel),1)],10,Vi)}),128))]),e("div",Hi,[e("div",Qi,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Yi,"Current ratio "+S(z.value),1)]),e("div",Ji,[e("div",Ki,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Xi,[e("input",{type:"number",min:"320",max:"4096",value:g.value.width,class:"input",onChange:t[26]||(t[26]=o=>Ye("width",o.target.value))},null,40,Zi),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",ea,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",ta,[e("input",{type:"number",min:"320",max:"4096",value:g.value.height,class:"input",onChange:t[27]||(t[27]=o=>Ye("height",o.target.value))},null,40,oa),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",na,[te(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>ne.value=o)},null,512),[[pt,ne.value]]),t[161]||(t[161]=F(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=Fe('<div class="canvas-size-callout" data-v-1d3dcef4><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1d3dcef4><circle cx="12" cy="12" r="9" data-v-1d3dcef4></circle><path d="M12 10v6" data-v-1d3dcef4></path><path d="M12 7h.01" data-v-1d3dcef4></path></svg><span data-v-1d3dcef4>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",la,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),te(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>xe.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>At("notes",xe.value.notes))},null,544),[[me,xe.value.notes]])])])):X.value==="transitions"?(n(),l("div",ia,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((ze=p.value)==null?void 0:ze.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>ve({transition:o.target.value}))},[...t[167]||(t[167]=[Fe('<option value="none" data-v-1d3dcef4>None</option><option value="fade" data-v-1d3dcef4>Fade</option><option value="slide" data-v-1d3dcef4>Slide</option><option value="zoom" data-v-1d3dcef4>Zoom</option><option value="flip" data-v-1d3dcef4>Flip</option>',5)])],40,aa),e("div",sa,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Ee=p.value)==null?void 0:Ee.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>In(o.target.value))},null,40,ra),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",da,[e("input",{type:"checkbox",checked:!!((Ze=p.value)!=null&&Ze.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>ve({advanceOnMediaEnd:o.target.checked}))},null,40,ua),t[170]||(t[170]=F(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(n(),l("div",ca,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",pa,[e("input",{type:"checkbox",checked:m.value.autoPlay,onChange:t[34]||(t[34]=o=>we({autoPlay:o.target.checked}))},null,40,va),t[173]||(t[173]=F(" Autoplay preview and exported presentation ",-1))]),e("label",fa,[e("input",{type:"checkbox",checked:m.value.loop,onChange:t[35]||(t[35]=o=>we({loop:o.target.checked}))},null,40,ma),t[174]||(t[174]=F(" Loop back to the first slide at the end ",-1))]),e("label",ga,[e("input",{type:"checkbox",checked:m.value.showProgress,onChange:t[36]||(t[36]=o=>we({showProgress:o.target.checked}))},null,40,ba),t[175]||(t[175]=F(" Show progress bar in preview ",-1))]),e("label",ya,[e("input",{type:"checkbox",checked:m.value.showNavControls,onChange:t[37]||(t[37]=o=>we({showNavControls:o.target.checked}))},null,40,ha),t[176]||(t[176]=F(" Show previous/next and dot navigation ",-1))]),e("label",xa,[e("input",{type:"checkbox",checked:m.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>we({allowKeyboardNav:o.target.checked}))},null,40,wa),t[177]||(t[177]=F(" Allow arrow keys and space bar navigation ",-1))])]))]))],512)}}},Du=Be(Bu,[["__scopeId","data-v-1d3dcef4"]]),_u={class:"editor-toolbar"},qu={class:"toolbar-group"},Ru={class:"toolbar-group"},Fu=["data-tooltip","onClick"],Uu={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Vu={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ou={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Wu={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Gu={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Hu={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Qu={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Yu={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ju={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ku={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Xu={class:"tool-label"},Zu={class:"toolbar-group"},ec={class:"toolbar-group"},tc={class:"toolbar-group"},oc={__name:"EditorToolbar",emits:["open-ai-project"],setup(y,{emit:s}){const r=s,u=We();Ge();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function m(g){u.setActiveTool(g)}return(g,c)=>(n(),l("div",_u,[e("div",qu,[e("button",{class:U(["tool-btn",k(u).activeTool==="select"&&"active"]),onClick:c[0]||(c[0]=z=>m("select")),"data-tooltip":"Select (V)"},[...c[7]||(c[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),c[23]||(c[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Ru,[(n(),l(Q,null,re(p,z=>e("button",{key:z.id,class:U(["tool-btn",k(u).activeTool===z.id&&"active"]),"data-tooltip":z.tooltip,onClick:ne=>m(z.id)},[z.icon==="text"?(n(),l("svg",Uu,[...c[8]||(c[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):z.icon==="heading"?(n(),l("svg",Vu,[...c[9]||(c[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):z.icon==="image"?(n(),l("svg",Ou,[...c[10]||(c[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):z.icon==="shape"?(n(),l("svg",Wu,[...c[11]||(c[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):z.icon==="button"?(n(),l("svg",Gu,[...c[12]||(c[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):z.icon==="hotspot"?(n(),l("svg",Hu,[...c[13]||(c[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):z.icon==="video"?(n(),l("svg",Qu,[...c[14]||(c[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):z.icon==="audio"?(n(),l("svg",Yu,[...c[15]||(c[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):z.icon==="quiz"?(n(),l("svg",Ju,[...c[16]||(c[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):z.icon==="chart"?(n(),l("svg",Ku,[...c[17]||(c[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):q("",!0),e("span",Xu,S(z.label),1)],10,Fu)),64))]),c[24]||(c[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Zu,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:c[1]||(c[1]=z=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...c[18]||(c[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),c[25]||(c[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",ec,[e("button",{class:"tool-btn",onClick:c[2]||(c[2]=z=>k(u).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...c[19]||(c[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:c[3]||(c[3]=z=>k(u).zoomReset())},S(Math.round(k(u).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:c[4]||(c[4]=z=>k(u).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...c[20]||(c[20]=[Fe('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),c[26]||(c[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",tc,[e("button",{class:U(["tool-btn",k(u).showGrid&&"active"]),onClick:c[5]||(c[5]=z=>k(u).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...c[21]||(c[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:U(["tool-btn",k(u).snapToGrid&&"active"]),onClick:c[6]||(c[6]=z=>k(u).toggleSnap()),"data-tooltip":"Snap to grid"},[...c[22]||(c[22]=[Fe('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},nc=Be(oc,[["__scopeId","data-v-d964cc0f"]]),lc=["onMousedown"],ic={key:1,class:"selection-border locked-border"},ac={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=We(),u=Ge(),p=Bn("canvasScale",L(1)),m=M(()=>r.projectId),g=M(()=>r.currentSlideId),c=M(()=>r.selectedElementIds.includes(s.element.id)),z=M(()=>s.element.locked),ne=M(()=>s.element.visible!==!1),X=M(()=>{const W=s.element.content||{};return!!(W.text||W.label||W.question||W.popupTitle||W.popupContent)});let B=!1,Z=0,ee=0,_=new Map;function a(W){var ie;if(z.value||W.target.classList.contains("resize-handle"))return;const J=W.ctrlKey||W.metaKey||W.shiftKey;c.value?J&&r.selectElement(s.element.id,!0):r.selectElement(s.element.id,J),r.setActiveTool("select"),B=!1,Z=W.clientX,ee=W.clientY,_.clear();const ye=(ie=u.getProject(m.value))==null?void 0:ie.slides.find(le=>le.id===g.value);ye&&r.selectedElementIds.forEach(le=>{const $e=ye.elements.find(pe=>pe.id===le);$e&&!$e.locked&&_.set(le,{x:$e.x,y:$e.y})}),window.addEventListener("mousemove",h),window.addEventListener("mouseup",w),W.stopPropagation()}function h(W){const J=(W.clientX-Z)/p.value,ye=(W.clientY-ee)/p.value;!B&&(Math.abs(J)>3||Math.abs(ye)>3)&&(B=!0),B&&_.forEach((ie,le)=>{let $e=ie.x+J,pe=ie.y+ye;if(r.snapToGrid&&r.gridSize){const C=r.gridSize;$e=Math.round($e/C)*C,pe=Math.round(pe/C)*C}u.updateElement(m.value,g.value,le,{x:$e,y:pe})})}function w(W){B||!(W.ctrlKey||W.metaKey||W.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(s.element.id,!1),B=!1,window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",w)}const D=["n","ne","e","se","s","sw","w","nw"];let f=!1,j="",oe=0,be=0,ue=0,N=0,T=0,O=0;function ae(W,J){z.value||(W.stopPropagation(),W.preventDefault(),f=!0,j=J,oe=W.clientX,be=W.clientY,ue=s.element.width,N=s.element.height,T=s.element.x,O=s.element.y,window.addEventListener("mousemove",Y),window.addEventListener("mouseup",fe))}function Y(W){if(!f)return;const J=p.value,ye=(W.clientX-oe)/J,ie=(W.clientY-be)/J,le=20;let $e=T,pe=O,C=ue,x=N;if(j.includes("e")&&(C=Math.max(le,ue+ye)),j.includes("s")&&(x=Math.max(le,N+ie)),j.includes("w")){const I=Math.max(le,ue-ye);$e=T+(ue-I),C=I}if(j.includes("n")){const I=Math.max(le,N-ie);pe=O+(N-I),x=I}if(r.snapToGrid&&r.gridSize){const I=r.gridSize;C=Math.round(C/I)*I,x=Math.round(x/I)*I,$e=Math.round($e/I)*I,pe=Math.round(pe/I)*I}u.updateElement(m.value,g.value,s.element.id,{x:$e,y:pe,width:C,height:x})}function fe(){f=!1,window.removeEventListener("mousemove",Y),window.removeEventListener("mouseup",fe)}function ge(){["text","heading"].includes(s.element.type)&&r.focusPropertiesSection("content")}const Me=M(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:z.value?"not-allowed":"move",visibility:ne.value?"visible":"hidden",userSelect:"none"}));function ke(W){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[W]||"auto"}function ce(W="content"){r.focusPropertiesSection(W)}function Te(){const W=X.value?"improve":s.element.type==="image"?"image":"generate";r.openAIPanel(W)}function Pe(){const W=u.duplicateElement(m.value,g.value,s.element.id);W&&(r.selectElement(W.id),r.focusPropertiesSection("geometry"))}function Ne(){u.deleteElement(m.value,g.value,s.element.id),r.clearSelection()}return(W,J)=>(n(),l("div",{class:U(["element-wrapper",c.value&&"selected",z.value&&"locked"]),style:de(Me.value),onMousedown:a,onDblclick:ge},[Dn(W.$slots,"default",{},void 0),c.value&&!z.value?(n(),l(Q,{key:0},[J[6]||(J[6]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"object-quickbar",onMousedown:J[3]||(J[3]=Ie(()=>{},["stop"]))},[e("button",{type:"button",class:"quickbar-btn",onClick:J[0]||(J[0]=ye=>ce("content"))},"Edit"),e("button",{type:"button",class:"quickbar-btn",onClick:J[1]||(J[1]=ye=>ce("animation"))},"Animation"),e("button",{type:"button",class:"quickbar-btn",onClick:J[2]||(J[2]=ye=>ce("geometry"))},"Arrange"),e("button",{type:"button",class:"quickbar-btn quickbar-btn-ai",onClick:Te},"AI"),e("button",{type:"button",class:"quickbar-icon-btn",onClick:Pe,title:"Duplicate element","aria-label":"Duplicate element"},[...J[4]||(J[4]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1)])]),e("button",{type:"button",class:"quickbar-icon-btn quickbar-icon-btn-danger",onClick:Ne,title:"Delete element","aria-label":"Delete element"},[...J[5]||(J[5]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1)])])],32),(n(),l(Q,null,re(D,ye=>e("div",{key:ye,class:U(["resize-handle",`handle-${ye}`]),style:de({cursor:ke(ye)}),onMousedown:Ie(ie=>ae(ie,ye),["stop"])},null,46,lc)),64))],64)):q("",!0),c.value&&z.value?(n(),l("div",ic)):q("",!0)],38))}},sc=Be(ac,[["__scopeId","data-v-74187ad2"]]),bt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=M(()=>s.element.content||{}),u=We(),p=Ge(),m=L(!1),g=L(null),c=L("");je(()=>r.value.text,B=>{m.value||(c.value=B||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function z(){u.selectedElementId===s.element.id&&(m.value=!0,xn(()=>{if(g.value)if(g.value.focus(),typeof g.value.setSelectionRange=="function"){const B=g.value.value.length;g.value.setSelectionRange(B,B)}else{const B=document.createRange();B.selectNodeContents(g.value),B.collapse(!1);const Z=window.getSelection();Z.removeAllRanges(),Z.addRange(B)}}))}function ne(B){m.value&&B.stopPropagation()}function X(){m.value=!1;const B=c.value;p.updateElement(u.projectId,u.currentSlideId,s.element.id,{content:{...s.element.content,text:B}})}return(B,Z)=>m.value?te((n(),l("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:g,"onUpdate:modelValue":Z[0]||(Z[0]=ee=>c.value=ee),onBlur:X,onMousedown:ne,style:de({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[me,c.value]]):(n(),l("div",{key:1,class:"text-element",onDblclick:z,style:de({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},S(c.value),37))}},rc=["src","alt"],dc={key:1,class:"image-placeholder"},uc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},cc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(y){return(s,r)=>{var u,p,m,g;return n(),l("div",{class:"image-element",style:de({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((u=y.element.content)==null?void 0:u.borderRadius)||0)+"px",border:`${((p=y.element.content)==null?void 0:p.borderWidth)||0}px solid ${((m=y.element.content)==null?void 0:m.borderColor)||"transparent"}`})},[(g=y.element.content)!=null&&g.src?(n(),l("img",{key:0,src:y.element.content.src,alt:y.element.content.alt||"",style:de({width:"100%",height:"100%",objectFit:y.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,rc)):(n(),l("div",dc,[(n(),l("svg",uc,[...r[0]||(r[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),r[1]||(r[1]=e("span",null,"Image",-1))]))],4)}}},pc=Be(cc,[["__scopeId","data-v-401e9ff3"]]),vc={class:"shape-element",style:{width:"100%",height:"100%"}},fc=["width","height"],mc=["points","fill","stroke","stroke-width"],gc={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=M(()=>s.element.content||{}),u=M(()=>{const g=r.value.shapeType||"rectangle",c={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return g==="circle"?{...c,borderRadius:"50%"}:g==="rectangle"?{...c,borderRadius:(r.value.borderRadius||0)+"px"}:c}),p=M(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),m=M(()=>{const g=s.element.width||150,c=s.element.height||100,z=r.value.shapeType;if(z==="triangle")return`${g/2},0 ${g},${c} 0,${c}`;if(z==="diamond")return`${g/2},0 ${g},${c/2} ${g/2},${c} 0,${c/2}`;if(z==="arrow")return`0,${c*.3} ${g*.6},${c*.3} ${g*.6},0 ${g},${c/2} ${g*.6},${c} ${g*.6},${c*.7} 0,${c*.7}`;if(z==="star"){const ne=g/2,X=c/2,B=Math.min(g,c)/2,Z=B*.4;let ee="";for(let _=0;_<10;_++){const a=(_*36-90)*Math.PI/180,h=_%2===0?B:Z;ee+=`${ne+h*Math.cos(a)},${X+h*Math.sin(a)} `}return ee.trim()}return""});return(g,c)=>(n(),l("div",vc,[p.value?(n(),l("svg",{key:1,width:y.element.width,height:y.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:m.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,mc)],8,fc)):(n(),l("div",{key:0,style:de(u.value)},null,4))]))}},bc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=M(()=>s.element.content||{}),u=M(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},m=p[r.value.variant||"primary"]||p.primary;return{...m,background:r.value.bgColor||m.background,color:r.value.textColor||m.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:m.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(p,m)=>(n(),l("div",{class:"button-element",style:de({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...u.value})},S(r.value.label||"Button"),5))}},yc={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},hc={class:"popup-header"},xc={class:"popup-body"},wc={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=M(()=>s.element.content||{}),u=L(!1);function p(m){m.stopPropagation(),u.value=!u.value}return(m,g)=>(n(),l("div",yc,[e("div",{class:"hotspot-btn",style:de({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Ie(p,["stop"])},S(r.value.icon||"?"),5),st(mt,{name:"fade"},{default:et(()=>[u.value?(n(),l("div",{key:0,class:"hotspot-popup",style:de({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",hc,[e("strong",null,S(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:g[0]||(g[0]=Ie(c=>u.value=!1,["stop"]))},"×")]),e("div",xc,S(r.value.popupContent||"Add your content in the properties panel."),1)],4)):q("",!0)]),_:1})]))}},kc=Be(wc,[["__scopeId","data-v-ef5f15f6"]]),Cc={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},$c=["src"],Sc=["src","poster","autoplay","controls","loop","muted"],Ic={key:2,class:"video-placeholder"},Ac={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Ec={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=M(()=>s.element.content||{}),u=M(()=>{const m=r.value.src||"";return m.includes("youtube")||m.includes("youtu.be")}),p=M(()=>{var g,c;const m=r.value.src||"";if(u.value){const z=(g=m.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:g[1];return z?`https://www.youtube.com/embed/${z}`:""}if(m.includes("vimeo.com")){const z=(c=m.match(/vimeo\.com\/(\d+)/))==null?void 0:c[1];return z?`https://player.vimeo.com/video/${z}`:""}return""});return(m,g)=>(n(),l("div",Cc,[p.value?(n(),l("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,$c)):r.value.src&&!p.value?(n(),l("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:de({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,Sc)):(n(),l("div",Ic,[(n(),l("svg",Ac,[...g[0]||(g[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),g[1]||(g[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Mc=Be(Ec,[["__scopeId","data-v-dfea1a16"]]),Pc=["stroke"],zc=["src","controls","autoplay","loop"],Tc={key:1,style:{"font-size":"11px",color:"#aaa"}},Nc={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(y){return(s,r)=>{var u,p,m,g,c,z,ne,X,B;return n(),l("div",{class:"audio-element",style:de({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((u=y.element.content)==null?void 0:u.bgColor)||"#ede7ff",border:`1px solid ${((p=y.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(n(),l("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((m=y.element.content)==null?void 0:m.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Pc)),e("span",{style:de({fontSize:"13px",color:((g=y.element.content)==null?void 0:g.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},S(((c=y.element.content)==null?void 0:c.label)||"Audio Player"),5),(z=y.element.content)!=null&&z.src?(n(),l("audio",{key:0,src:y.element.content.src,controls:((ne=y.element.content)==null?void 0:ne.controls)!==!1,autoplay:(X=y.element.content)==null?void 0:X.autoplay,loop:(B=y.element.content)==null?void 0:B.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=Ie(()=>{},["stop"]))},null,40,zc)):(n(),l("span",Tc,"No source"))],4)}}},Lc={class:"quiz-options"},jc=["onClick"],Bc={class:"opt-letter"},Dc={class:"opt-text"},_c={key:0},qc={class:"quiz-actions"},Rc=["disabled"],Fc={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(y){const s=y,r=M(()=>s.element.content||{}),u=L(null),p=L(!1);function m(ne){p.value||(u.value=ne)}function g(){u.value!==null&&(p.value=!0)}function c(){u.value=null,p.value=!1}const z=M(()=>p.value&&u.value===(r.value.correctIndex??0));return(ne,X)=>(n(),l("div",{class:"quiz-element",style:de({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:de({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},S(r.value.question||"Question text…"),5),e("div",Lc,[(n(!0),l(Q,null,re(r.value.options||[],(B,Z)=>(n(),l("div",{key:Z,class:U(["quiz-opt",u.value===Z&&"selected",p.value&&Z===r.value.correctIndex&&"correct",p.value&&u.value===Z&&Z!==r.value.correctIndex&&"wrong"]),onClick:ee=>m(Z)},[e("span",Bc,S(String.fromCharCode(65+Z)),1),e("span",Dc,S(B),1)],10,jc))),128))]),p.value?(n(),l("div",{key:0,class:U(["quiz-feedback",z.value?"correct":"wrong"])},[F(S(z.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!z.value&&r.value.explanation?(n(),l("span",_c,S(r.value.explanation),1)):q("",!0)],2)):q("",!0),e("div",qc,[p.value?(n(),l("button",{key:1,class:"quiz-btn secondary",onClick:c},"Try Again")):(n(),l("button",{key:0,class:"quiz-btn primary",disabled:u.value===null,onClick:g},"Submit",8,Rc))])],4))}},Uc=Be(Fc,[["__scopeId","data-v-ca2bd187"]]),Vc={key:0,class:"canvas-empty"},Oc={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},Wc={key:0,class:"canvas-device-frame","aria-hidden":"true"},Gc=["value"],Hc={class:"canvas-guide-label"},Qc={key:4,class:"drop-hint"},Yc={class:"canvas-info-bar"},Jc=["disabled"],Kc={class:"slide-index"},Xc=["disabled"],Zc={key:0},ep={__name:"EditorCanvas",setup(y){const s=We(),r=Ge(),u=L(null),p=L(null),m=L(1),g=M(()=>m.value*s.zoomLevel);qn("canvasScale",g);const c=M(()=>r.getProject(s.projectId)),z=M(()=>vt(c.value)),ne=M(()=>wn(c.value)),X=M(()=>z.value.width),B=M(()=>z.value.height),Z=M(()=>kn(X.value,B.value)),ee=M(()=>{var v,A;return(A=(v=c.value)==null?void 0:v.slides)==null?void 0:A.find(V=>V.id===s.currentSlideId)}),_=M(()=>{var v;return[...((v=c.value)==null?void 0:v.slides)||[]].sort((A,V)=>A.order-V.order)}),a=M(()=>_.value.findIndex(v=>v.id===s.currentSlideId)),h=M(()=>{var v;return{autoPlay:!1,motionPresets:[],...((v=c.value)==null?void 0:v.settings)||{}}}),w=M(()=>(Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]).filter(v=>v.scope==="group")),D=M(()=>{const v=new Set(s.selectedElementIds);return ue.value.filter(A=>v.has(A.id))}),f=L(""),j=M(()=>ee.value?ee.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:h.value.autoPlay&&Number(ee.value.duration||0)>0?{label:`Auto ${Number(ee.value.duration).toFixed(Number(ee.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function oe(){const v=w.value.find(V=>V.id===f.value);if(!v||!D.value.length)return;[...D.value].sort((V,G)=>(V.y||0)!==(G.y||0)?(V.y||0)-(G.y||0):(V.x||0)-(G.x||0)).forEach((V,G)=>{if(v.type==="auto"){r.updateElement(s.projectId,s.currentSlideId,V.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,V.id,{animations:[{type:v.type,delay:Math.max(0,Number(v.delay)||0)+G*Math.max(0,Number(v.stepDelay)||0),duration:Math.max(.1,Number(v.duration)||.72)}]})}),r.updateProject(s.projectId,{settings:{...h.value,motionPresets:(h.value.motionPresets||[]).map(V=>V.id===v.id?{...V,usageCount:Math.max(0,Number(V.usageCount||0))+1,lastUsedAt:Date.now()}:V)}})}function be(){if(!w.value.length){f.value="";return}w.value.some(v=>v.id===f.value)||(f.value=w.value[0].id)}const ue=M(()=>{var v;return[...((v=ee.value)==null?void 0:v.elements)||[]].sort((A,V)=>(A.zIndex||0)-(V.zIndex||0))}),N=M(()=>{const v=ee.value;return v?v.backgroundType==="gradient"&&v.backgroundGradient?{background:v.backgroundGradient}:v.backgroundType==="image"&&v.backgroundImage?{backgroundImage:`url(${v.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:v.background||"#fff"}:{background:"#fff"}}),T=M(()=>`scale(${g.value})`);function O(){if(!u.value)return;const{clientWidth:v,clientHeight:A}=u.value,V=(v-80)/X.value,G=(A-80)/B.value;m.value=Math.min(V,G,1)}let ae=null;bn(()=>{O(),ae=new ResizeObserver(O),u.value&&ae.observe(u.value),be()}),yn(()=>ae==null?void 0:ae.disconnect()),je(w,()=>{be()},{deep:!0,immediate:!0}),je(z,()=>{O()},{deep:!0});const Y=L({x:0,y:0}),fe=L({x:0,y:0}),ge=L(!1),Me=L(!1),ke=M(()=>{var v,A;return((v=ne.value)==null?void 0:v.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((A=ne.value)==null?void 0:A.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),ce=M(()=>{if(!ke.value)return null;if(ke.value.tone==="mobile"){const V=X.value*.08,G=B.value*.05;return{x:V,y:G,width:X.value-V*2,height:B.value-G*2}}const v=X.value*.08,A=B.value*.08;return{x:v,y:A,width:X.value-v*2,height:B.value-A*2}}),Te=M(()=>{if(!ce.value)return[];const v=ce.value;return ue.value.filter(A=>A.visible!==!1).filter(A=>{const V=Number(A.x||0),G=Number(A.y||0),$=V+Number(A.width||0),Se=G+Number(A.height||0);return V<v.x||G<v.y||$>v.x+v.width||Se>v.y+v.height}).map(A=>A.id)}),Pe=M(()=>s.selectedElementIds.filter(v=>Te.value.includes(v)).length),Ne=M(()=>Te.value.length),W=M(()=>!ke.value||!Ne.value?null:Pe.value?`${Pe.value} selected ${Pe.value===1?"element is":"elements are"} outside the ${ke.value.label.toLowerCase()}.`:`${Ne.value} ${Ne.value===1?"element is":"elements are"} outside the ${ke.value.label.toLowerCase()}.`),J=M(()=>{if(!ge.value)return null;const v=Math.min(Y.value.x,fe.value.x),A=Math.min(Y.value.y,fe.value.y),V=Math.abs(fe.value.x-Y.value.x),G=Math.abs(fe.value.y-Y.value.y);return{x:v,y:A,width:V,height:G}});function ye(v){!ge.value&&(v.target===p.value||v.target===v.currentTarget)&&s.clearSelection()}function ie(v){return v?Array.from(v.files||[]).some(A=>A.type.startsWith("image/")):!1}function le(v,A,V){if(!v||!v.type.startsWith("image/"))return;const G=new FileReader;G.onload=()=>{const $=String(G.result||"");if(!$)return;const Se=new Image;Se.onload=()=>{const qe=p.value.getBoundingClientRect(),De=(A-qe.left)/g.value,Ke=(V-qe.top)/g.value,Oe=Math.min(420/Se.width,280/Se.height,1),He=Math.max(120,Math.round(Se.width*Oe)),Qe=Math.max(80,Math.round(Se.height*Oe)),ot=Math.max(0,Math.min(X.value-He,Math.round(De-He/2))),nt=Math.max(0,Math.min(B.value-Qe,Math.round(Ke-Qe/2))),dt=r.addElement(s.projectId,s.currentSlideId,"image",{x:ot,y:nt,width:He,height:Qe,content:{src:$,alt:v.name,objectFit:"cover"}});dt&&(s.selectElement(dt.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Se.src=$},G.readAsDataURL(v)}function $e(v){ie(v.dataTransfer)&&(v.preventDefault(),v.dataTransfer.dropEffect="copy",Me.value=!0)}function pe(v){var A;(A=v.currentTarget)!=null&&A.contains(v.relatedTarget)||(Me.value=!1)}function C(v){if(!ie(v.dataTransfer))return;v.preventDefault(),Me.value=!1;const A=Array.from(v.dataTransfer.files||[]).find(V=>V.type.startsWith("image/"));A&&le(A,v.clientX,v.clientY)}function x(v){const A=s.activeTool;if(v.target!==p.value&&v.target!==v.currentTarget)return;v.preventDefault(),v.stopPropagation();const V=p.value.getBoundingClientRect(),G=(v.clientX-V.left)/g.value,$=(v.clientY-V.top)/g.value;if(A==="select"){ge.value=!0,Y.value={x:G,y:$},fe.value={x:G,y:$};const De=Le=>{fe.value={x:(Le.clientX-V.left)/g.value,y:(Le.clientY-V.top)/g.value}},Ke=()=>{window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",Ke);const Le=J.value;if(Le&&(Le.width>2||Le.height>2)){const tt=ue.value.filter(Oe=>{const He=Oe.x,Qe=Oe.y,ot=Oe.width||100,nt=Oe.height||100;return He<Le.x+Le.width&&He+ot>Le.x&&Qe<Le.y+Le.height&&Qe+nt>Le.y}).map(Oe=>Oe.id);tt.length>0?s.setSelection(tt):s.clearSelection()}else s.clearSelection();setTimeout(()=>{ge.value=!1},0)};window.addEventListener("mousemove",De),window.addEventListener("mouseup",Ke);return}const Se=De=>s.snapToGrid?Math.round(De/s.gridSize)*s.gridSize:De,qe=r.addElement(s.projectId,s.currentSlideId,A,{x:Se(G-75),y:Se($-40)});qe&&(s.selectElement(qe.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const I=M(()=>{if(!s.showGrid)return{};const v=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${v}px ${v}px`}}),b={text:bt,heading:bt,image:pc,shape:gc,button:bc,hotspot:kc,video:Mc,audio:Nc,quiz:Uc,chart:tl,divider:"div"};function Ae(v){return b[v]||bt}function xe(v){var A,V;return v.type!=="divider"?{}:{borderTop:`${((A=v.content)==null?void 0:A.thickness)||2}px solid ${((V=v.content)==null?void 0:V.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const ve=L({show:!1,x:0,y:0,elId:null});function we(v,A){v.preventDefault(),ve.value={show:!0,x:v.clientX,y:v.clientY,elId:A},s.selectElement(A),setTimeout(()=>window.addEventListener("click",Ue,{once:!0}),0)}function Ue(){ve.value.show=!1}function Ye(){if(ve.value.elId){const v=r.duplicateElement(s.projectId,s.currentSlideId,ve.value.elId);v&&s.selectElement(v.id)}Ue()}function Ve(){ve.value.elId&&(r.deleteElement(s.projectId,s.currentSlideId,ve.value.elId),s.clearSelection()),Ue()}function rt(){ve.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,ve.value.elId,"up"),Ue()}function E(){ve.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,ve.value.elId,"down"),Ue()}function i(){const v=a.value,A=r.addSlide(s.projectId,v);A&&s.setCurrentSlide(A.id)}function R(){const v=a.value;v>0&&s.setCurrentSlide(_.value[v-1].id)}function se(){const v=a.value;v<_.value.length-1&&s.setCurrentSlide(_.value[v+1].id)}return(v,A)=>{var V;return n(),l("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:u},[ee.value?(n(),l(Q,{key:1},[e("div",{class:U(["canvas-zoom-wrapper",[ke.value&&`canvas-zoom-wrapper-${ke.value.tone}`]]),style:de({transform:T.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:de({width:X.value+"px",height:B.value+"px",...N.value,...I.value}),onClick:ye,onMousedown:x,onDragover:$e,onDragleave:pe,onDrop:C,onContextmenu:A[3]||(A[3]=Ie(()=>{},["prevent"]))},[ke.value?(n(),l("div",Wc)):q("",!0),k(s).multiSelection&&w.value.length?(n(),l("div",{key:1,class:"selection-preset-chip",onMousedown:A[1]||(A[1]=Ie(()=>{},["stop"]))},[A[7]||(A[7]=e("span",{class:"selection-preset-label"},"Sequence",-1)),te(e("select",{"onUpdate:modelValue":A[0]||(A[0]=G=>f.value=G),class:"selection-preset-select"},[(n(!0),l(Q,null,re(w.value,G=>(n(),l("option",{key:G.id,value:G.id},S(G.name),9,Gc))),128))],512),[[ct,f.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Ie(oe,["stop"])},"Apply")],32)):q("",!0),W.value?(n(),l("div",{key:2,class:"canvas-guide-warning",onMousedown:A[2]||(A[2]=Ie(()=>{},["stop"]))},[A[8]||(A[8]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,S(W.value),1)],32)):q("",!0),(n(!0),l(Q,null,re(ue.value,G=>(n(),_e(sc,{key:G.id,element:G,onContextmenu:Ie($=>we($,G.id),["stop"])},{default:et(()=>[(n(),_e(_n(Ae(G.type)),{element:G,style:de(G.type==="divider"?xe(G):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),ke.value?(n(),l("div",{key:3,class:U(["canvas-guide",[`canvas-guide-${ke.value.tone}`,Ne.value&&"canvas-guide-warning-state"]]),style:de(ke.value.style),"aria-hidden":"true"},[e("span",Hc,S(ke.value.label)+" · "+S(Z.value),1)],6)):q("",!0),k(s).activeTool!=="select"||Me.value?(n(),l("div",Qc,S(Me.value?"Drop image to insert it on this slide":`Click anywhere to add ${k(s).activeTool}`),1)):q("",!0),ge.value&&J.value?(n(),l("div",{key:5,class:"selection-marquee",style:de({left:J.value.x+"px",top:J.value.y+"px",width:J.value.width+"px",height:J.value.height+"px"})},null,4)):q("",!0)],36)],6),e("div",Yc,[e("button",{class:"bar-btn",onClick:i},"Add page"),e("button",{class:"bar-btn icon",onClick:R,disabled:a.value<=0},"◀",8,Jc),e("span",Kc,S(a.value+1)+" / "+S(_.value.length),1),e("button",{class:"bar-btn icon",onClick:se,disabled:a.value>=_.value.length-1},"▶",8,Xc),e("span",null,S(X.value)+" × "+S(B.value)+"px",1),A[9]||(A[9]=e("span",null,"·",-1)),e("span",null,S(((V=ee.value.elements)==null?void 0:V.length)||0)+" elements",1),A[10]||(A[10]=e("span",null,"·",-1)),e("span",{class:U(["playback-badge",`playback-badge-${j.value.tone}`])},S(j.value.label),3),k(s).hasSelection?(n(),l("span",Zc,"· "+S(k(s).selectedElementIds.length)+" selected",1)):q("",!0),e("button",{class:"bar-btn ai",onClick:A[4]||(A[4]=G=>k(s).setRightPanel("ai"))},"AI")])],64)):(n(),l("div",Vc,[(n(),l("svg",Oc,[...A[5]||(A[5]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),A[6]||(A[6]=e("p",null,"Select a slide to start editing",-1))])),(n(),_e(hn,{to:"body"},[ve.value.show?(n(),l("div",{key:0,class:"ctx-menu",style:de({left:ve.value.x+"px",top:ve.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Ye},"Duplicate"),e("button",{class:"ctx-item",onClick:rt},"Bring Forward"),e("button",{class:"ctx-item",onClick:E},"Send Backward"),A[11]||(A[11]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Ve},"Delete")],4)):q("",!0)]))],512)}}},tp=Be(ep,[["__scopeId","data-v-c6947122"]]),op={class:"ai-panel"},np={class:"ai-mode-tabs"},lp=["onClick"],ip={class:"ai-content"},ap={class:"form-group"},sp={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},rp={key:0,class:"form-group"},dp={key:1,class:"form-group"},up={class:"form-group"},cp={class:"form-group"},pp={class:"prompt-label-row"},vp={key:1,class:"prompt-auto-badge"},fp={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},mp=["disabled"],gp={key:0,class:"spinner"},bp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},yp={key:3,class:"creative-options-wrap"},hp={class:"result-header"},xp={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},wp={key:1,class:"creative-options-list"},kp={class:"creative-title"},Cp={class:"creative-angle"},$p=["onClick"],Sp={class:"form-group"},Ip={class:"quiz-config-row"},Ap={class:"form-group",style:{flex:"1"}},Ep={class:"form-group",style:{flex:"1"}},Mp={class:"form-group"},Pp={class:"qtype-btns"},zp=["onClick"],Tp={class:"qtype-icon"},Np={class:"form-group"},Lp={class:"form-group"},jp={class:"prompt-label-row"},Bp={key:1,class:"prompt-auto-badge"},Dp=["disabled"],_p={key:0,class:"spinner"},qp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Rp={key:0,class:"quiz-results"},Fp={class:"quiz-results-header"},Up={class:"form-label"},Vp={class:"quiz-header-actions"},Op={class:"regen-row"},Wp=["disabled"],Gp={key:0,class:"spinner spinner-sm"},Hp={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Qp=["disabled"],Yp={class:"quiz-card-header"},Jp={class:"quiz-card-check"},Kp=["onUpdate:modelValue"],Xp={class:"q-num"},Zp={class:"q-badges"},ev={class:"badge type-badge"},tv={class:"q-question"},ov={class:"q-options"},nv={class:"q-option-letter"},lv={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},iv={key:0,class:"q-explanation"},av=["disabled"],sv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rv=["disabled"],dv={key:0,class:"spinner"},uv={key:0,class:"selected-text-preview"},cv={class:"text-preview"},pv={key:1,class:"ai-hint"},vv={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},fv=["disabled"],mv={key:0,class:"spinner"},gv={key:0,class:"selected-text-preview"},bv={class:"text-preview"},yv={key:1,class:"ai-hint"},hv={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},xv=["disabled"],wv={key:0,class:"spinner"},kv={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Cv={class:"result-header"},$v={class:"result-actions"},Sv=["disabled"],Iv={class:"textarea result-display"},Av={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ev=["disabled"],Mv={key:0,class:"spinner"},Pv={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},zv={class:"textarea result-display",style:{color:"var(--color-primary)"}},Tv={key:6,class:"ai-settings"},Nv={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Lv=["value"],jv={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Bv=["value"],Dv={key:0,class:"demo-notice"},_v={key:7,class:"result-area"},qv={class:"result-header"},Rv={class:"result-pre"},Fv={class:"result-actions"},Uv=["disabled"],Vv={key:8,class:"ai-error"},Ov={__name:"AIAssistant",setup(y){const s=Un(),r=We(),u=Ge(),p=L("generate"),m=L(""),g=L(""),c=L("");je(p,()=>{c.value=""}),je(()=>r.aiPanelMode,E=>{E&&(p.value=E)},{immediate:!0});const z=L(4),ne=L("general"),X=L("Spanish"),B=L(""),Z=L(""),ee=L(""),_=L(!1),a=L("single"),h=L(5),w=L("slide"),D=L([]),f=L(""),j=M(()=>{const E=g.value.trim()||"[your topic]";if(a.value==="deck"){let se=`Create a complete ${h.value}-slide learning deck about "${E}".`;return Z.value.trim()&&(se+=`
Additional context: ${Z.value.trim()}`),se+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,se+=`
Make each slide distinct, logically sequenced, and specific to "${E}".`,se}let R=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[ne.value]||"educational slide"} about "${E}".`;return Z.value.trim()&&(R+=`
Additional context: ${Z.value.trim()}`),R+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${E}" — no generic placeholders.`,R});je(j,E=>{_.value||(ee.value=E)},{immediate:!0});function oe(){ee.value=j.value,_.value=!1}const be=L(""),ue=L("intermediate"),N=L("multiple-choice"),T=L(""),O=L([]),ae=L(""),Y=L(!1),fe=M(()=>{const E=be.value.trim()||"[your topic]",i={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},R={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let se=`Generate ${z.value} ${i[ue.value]} ${R[N.value]} quiz questions about "${E}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return T.value.trim()&&(se+=`
Learning objective: ${T.value.trim()}`),se});je(fe,E=>{Y.value||(ae.value=E)},{immediate:!0});function ge(){ae.value=fe.value,Y.value=!1}const Me=M(()=>u.getProject(r.projectId)),ke=M(()=>{var E,i;return(i=(E=Me.value)==null?void 0:E.slides)==null?void 0:i.find(R=>R.id===r.currentSlideId)}),ce=M(()=>{var E,i;return r.selectedElementId?(i=(E=ke.value)==null?void 0:E.elements)==null?void 0:i.find(R=>R.id===r.selectedElementId):null});async function Te(){if(!g.value.trim()&&!ee.value.trim())return;if(c.value="",D.value=[],f.value="",a.value==="deck"){const i=await s.generateSlideDeck(g.value,h.value,{objective:Z.value,customPrompt:ee.value});if(i!=null&&i.length){const R=i.map(se=>Pe(se));c.value=JSON.stringify({slides:R},null,2),ye(R,{replaceGenerated:!0})}return}if(w.value==="options"){await $e();return}const E=await s.generateSlideContent(g.value,ne.value,Z.value,ee.value);if(E){const i=Pe(E);c.value=JSON.stringify(i,null,2),ie(i,{replaceGenerated:!0})}}function Pe(E){const i=E&&typeof E=="object"?E:{},se=(Array.isArray(i.bullets)?i.bullets:typeof i.bullets=="string"?i.bullets.split(`
`):[]).map(v=>String(v||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(i.title||g.value||"Untitled Slide").trim(),subtitle:String(i.subtitle||"").trim(),bullets:se,callout:String(i.callout||"").trim()}}function Ne(E,i){var v,A,V;const R=(A=(v=u.getProject(E))==null?void 0:v.slides)==null?void 0:A.find(G=>G.id===i);if(!((V=R==null?void 0:R.elements)!=null&&V.length))return;R.elements.filter(G=>{var $;return(($=G.meta)==null?void 0:$.source)==="ai-content"}).map(G=>G.id).forEach(G=>{u.deleteElement(E,i,G)})}function W(E,i,R,se){return u.addElement(E,i,R,{...se,meta:{...se.meta||{},source:"ai-content"}})}function J(E,i,R,{replaceGenerated:se=!1}={}){var v;if(!(!E||!i)){if(se&&Ne(E,i),R.title&&(u.updateSlide(E,i,{title:R.title}),W(E,i,"heading",{x:60,y:40,width:840,height:80,content:{text:R.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),R.subtitle&&W(E,i,"text",{x:60,y:130,width:840,height:50,content:{text:R.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(v=R.bullets)!=null&&v.length){const A=R.bullets.map(V=>`• ${V}`).join(`
`);W(E,i,"text",{x:60,y:R.subtitle?200:150,width:840,height:200,content:{text:A,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}R.callout&&(W(E,i,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),W(E,i,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${R.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function ye(E,{replaceGenerated:i=!1}={}){if(!r.currentSlideId)return;const R=r.projectId;if(!R||!Array.isArray(E)||!E.length)return;E.map(v=>Pe(v)).forEach(v=>{const A=u.addSlide(R);A&&J(R,A.id,v,{replaceGenerated:i})})}function ie(E=null,{replaceGenerated:i=!1}={}){if(!r.currentSlideId)return;let R=E;if(!R){if(!c.value)return;try{R=JSON.parse(c.value)}catch(V){console.warn("Could not parse AI content:",V);return}}const se=Pe(R),v=r.projectId,A=r.currentSlideId;!v||!A||J(v,A,se,{replaceGenerated:i})}function le(){if(c.value){if(a.value==="deck"){try{const E=JSON.parse(c.value),i=Array.isArray(E)?E:E==null?void 0:E.slides;if(!Array.isArray(i)||!i.length)return;ye(i,{replaceGenerated:!0})}catch{return}return}ie()}}async function $e(){const E=g.value.trim()||"[your topic]",i=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${ne.value}" slide about "${E}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,R=await s.generate(i,{type:"creativeOptions",topic:E,slideType:ne.value});if(R)try{const se=JSON.parse(R.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(se))throw new Error("Options must be an array");D.value=se.slice(0,3).map((v,A)=>({title:String((v==null?void 0:v.title)||`Option ${A+1}`),angle:String((v==null?void 0:v.angle)||""),prompt:String((v==null?void 0:v.prompt)||"")})).filter(v=>v.prompt.trim()),D.value.length||(f.value="No usable creative options were returned. Try generating again.")}catch{f.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function pe(E){E!=null&&E.prompt&&(ee.value=E.prompt,_.value=!0,w.value="slide",await Te())}async function C(E=!1){if(!be.value.trim()&&!ae.value.trim())return;E||(O.value=[]);const i=await s.generateQuiz(be.value,z.value,{difficulty:ue.value,questionType:N.value,objective:T.value,customPrompt:ae.value});if(i)if(E){const R=new Set(O.value.map(v=>v.question)),se=i.filter(v=>!R.has(v.question)).map(v=>({...v,_selected:!0}));O.value=[...O.value,...se]}else O.value=i.map(R=>({...R,_selected:!0}))}async function x(){const E=O.value.filter(R=>R._selected);if(!E.length)return;const i=r.projectId;E.forEach((R,se)=>{const v=u.addSlide(i);v&&(u.addElement(i,v.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:R.question,options:R.options,correctIndex:R.correctIndex,explanation:R.explanation||""}}),u.updateSlide(i,v.id,{title:`Q${se+1}: ${R.question.slice(0,40)}…`}))}),O.value=[]}function I(E){O.value.forEach(i=>i._selected=E)}async function b(){if(!B.value.trim())return;const E=await s.generateVoiceoverScript(B.value);E&&(c.value=E)}async function Ae(){var R,se;const E=(se=(R=ce.value)==null?void 0:R.content)==null?void 0:se.text;if(!E)return;const i=await s.generateTranslation(E,X.value);i&&(c.value=i)}async function xe(){!c.value||!ce.value||u.updateElement(r.projectId,r.currentSlideId,ce.value.id,{content:{...ce.value.content,text:c.value}})}const ve=L(""),we=L(!1);async function Ue(){if(ve.value.trim()){we.value=!0,c.value="Optimizing prompt...";try{let E=ve.value;const i=await s.generateImagePrompt(ve.value);i&&(E=i.replace(/```(json)?\n?/g,"").trim()),c.value="Painting image... this takes about 10-20 seconds. Please wait.";const R=Math.floor(Math.random()*1e6),se=`https://image.pollinations.ai/prompt/${encodeURIComponent(E)}?width=600&height=400&nologo=true&seed=${R}`;await new Promise((v,A)=>{const V=new Image;V.onload=v,V.onerror=A,V.src=se}),u.addElement(r.projectId,r.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:se,objectFit:"cover"}}),c.value="Image added to slide!"}catch{c.value="Failed to generate image. Try a different prompt."}finally{we.value=!1}}}async function Ye(){var i,R;if(!((R=(i=ce.value)==null?void 0:i.content)!=null&&R.text))return;const E=await s.improveText(ce.value.content.text,m.value||"Make it clearer and more engaging");E&&(c.value=E)}async function Ve(){!c.value||!ce.value||u.updateElement(r.projectId,r.currentSlideId,ce.value.id,{content:{...ce.value.content,text:c.value}})}async function rt(){if(!m.value.trim())return;const E=await s.generate(m.value);E&&(c.value=E)}return(E,i)=>{var R,se,v,A,V,G;return n(),l("div",op,[e("div",np,[(n(),l(Q,null,re([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],$=>e("button",{key:$.id,class:U(["ai-mode-btn",p.value===$.id&&"active"]),onClick:Se=>p.value=$.id},S($.label),11,lp)),64))]),e("div",ip,[p.value==="generate"?(n(),l(Q,{key:0},[e("div",ap,[i[34]||(i[34]=e("label",{class:"form-label"},[F("Topic / Subject "),e("span",{class:"required"},"*")],-1)),te(e("input",{"onUpdate:modelValue":i[0]||(i[0]=$=>g.value=$),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:mn(Te,["enter"])},null,544),[[me,g.value]])]),e("div",sp,[e("button",{class:U(["output-mode-btn",a.value==="single"&&"active"]),onClick:i[1]||(i[1]=$=>a.value="single")},"Single Slide",2),e("button",{class:U(["output-mode-btn",a.value==="deck"&&"active"]),onClick:i[2]||(i[2]=$=>a.value="deck")},"Slide Deck",2)]),a.value==="single"?(n(),l("div",rp,[i[36]||(i[36]=e("label",{class:"form-label"},"Slide Type",-1)),te(e("select",{"onUpdate:modelValue":i[3]||(i[3]=$=>ne.value=$),class:"select"},[...i[35]||(i[35]=[Fe('<option value="general" data-v-d6c5ae2b>General</option><option value="intro" data-v-d6c5ae2b>Introduction</option><option value="overview" data-v-d6c5ae2b>Overview</option><option value="concept" data-v-d6c5ae2b>Concept Explanation</option><option value="example" data-v-d6c5ae2b>Example / Case Study</option><option value="summary" data-v-d6c5ae2b>Summary</option><option value="callout" data-v-d6c5ae2b>Key Takeaway</option>',7)])],512),[[ct,ne.value]])])):(n(),l("div",dp,[i[37]||(i[37]=e("label",{class:"form-label"},"Number of Slides",-1)),te(e("input",{"onUpdate:modelValue":i[4]||(i[4]=$=>h.value=$),class:"input",type:"number",min:"1",max:"20"},null,512),[[me,h.value,void 0,{number:!0}]]),i[38]||(i[38]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",up,[i[39]||(i[39]=e("label",{class:"form-label"},[F("Description "),e("span",{class:"optional"},"(optional)")],-1)),te(e("textarea",{"onUpdate:modelValue":i[5]||(i[5]=$=>Z.value=$),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[me,Z.value]])]),e("div",cp,[e("div",pp,[i[41]||(i[41]=e("label",{class:"form-label"},"AI Prompt",-1)),_.value?(n(),l("button",{key:0,class:"prompt-reset-btn",onClick:oe,title:"Reset to auto-generated prompt"},[...i[40]||(i[40]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),F(" Reset ",-1)])])):(n(),l("span",vp,"auto"))]),te(e("textarea",{"onUpdate:modelValue":i[6]||(i[6]=$=>ee.value=$),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:i[7]||(i[7]=$=>_.value=!0),spellcheck:"false"},null,544),[[me,ee.value]]),i[42]||(i[42]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),a.value==="single"?(n(),l("div",fp,[e("button",{class:U(["output-mode-btn",w.value==="slide"&&"active"]),onClick:i[8]||(i[8]=$=>w.value="slide")},"Show on Slide",2),e("button",{class:U(["output-mode-btn",w.value==="options"&&"active"]),onClick:i[9]||(i[9]=$=>w.value="options")},"Creative Options",2)])):q("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating||!g.value.trim()&&!ee.value.trim()||a.value==="deck"&&(!h.value||h.value<1||h.value>20),onClick:Te},[k(s).isGenerating?(n(),l("span",gp)):(n(),l("svg",bp,[...i[43]||(i[43]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),F(" "+S(k(s).isGenerating?"Generating…":a.value==="deck"?c.value?`Regenerate ${h.value} Slides`:`Generate ${h.value} Slides`:w.value==="slide"?c.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,mp),a.value==="single"&&w.value==="options"&&(D.value.length||f.value)?(n(),l("div",yp,[e("div",hp,[i[44]||(i[44]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:i[10]||(i[10]=$=>{D.value=[],f.value=""})},"Clear")]),f.value?(n(),l("div",xp,[i[45]||(i[45]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),F(" "+S(f.value),1)])):(n(),l("div",wp,[(n(!0),l(Q,null,re(D.value,($,Se)=>(n(),l("article",{key:Se,class:"creative-option-card"},[e("h4",kp,S($.title),1),e("p",Cp,S($.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:qe=>pe($)},"Use This Option",8,$p)]))),128))]))])):q("",!0)],64)):p.value==="quiz"?(n(),l(Q,{key:1},[e("div",Sp,[i[46]||(i[46]=e("label",{class:"form-label"},[F("Quiz Topic "),e("span",{class:"required"},"*")],-1)),te(e("input",{"onUpdate:modelValue":i[11]||(i[11]=$=>be.value=$),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:mn(C,["enter"])},null,544),[[me,be.value]])]),e("div",Ip,[e("div",Ap,[i[48]||(i[48]=e("label",{class:"form-label"},"Questions",-1)),te(e("select",{"onUpdate:modelValue":i[12]||(i[12]=$=>z.value=$),class:"select"},[...i[47]||(i[47]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[ct,z.value,void 0,{number:!0}]])]),e("div",Ep,[i[50]||(i[50]=e("label",{class:"form-label"},"Difficulty",-1)),te(e("select",{"onUpdate:modelValue":i[13]||(i[13]=$=>ue.value=$),class:"select"},[...i[49]||(i[49]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[ct,ue.value]])])]),e("div",Mp,[i[51]||(i[51]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Pp,[(n(),l(Q,null,re([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],$=>e("button",{key:$.id,class:U(["qtype-btn",N.value===$.id&&"active"]),onClick:Se=>N.value=$.id},[e("span",Tp,S($.icon),1),e("span",null,S($.label),1)],10,zp)),64))])]),e("div",Np,[i[52]||(i[52]=e("label",{class:"form-label"},[F("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),te(e("input",{"onUpdate:modelValue":i[14]||(i[14]=$=>T.value=$),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[me,T.value]])]),e("div",Lp,[e("div",jp,[i[54]||(i[54]=e("label",{class:"form-label"},"AI Prompt",-1)),Y.value?(n(),l("button",{key:0,class:"prompt-reset-btn",onClick:ge,title:"Reset to auto-generated prompt"},[...i[53]||(i[53]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),F(" Reset ",-1)])])):(n(),l("span",Bp,"auto"))]),te(e("textarea",{"onUpdate:modelValue":i[15]||(i[15]=$=>ae.value=$),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:i[16]||(i[16]=$=>Y.value=!0),spellcheck:"false"},null,544),[[me,ae.value]]),i[55]||(i[55]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating||!be.value.trim()&&!ae.value.trim(),onClick:i[17]||(i[17]=$=>C(!1))},[k(s).isGenerating?(n(),l("span",_p)):(n(),l("svg",qp,[...i[56]||(i[56]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),F(" "+S(k(s).isGenerating?"Generating…":`Generate ${z.value} Questions`),1)],8,Dp),O.value.length?(n(),l("div",Rp,[e("div",Fp,[e("span",Up,S(O.value.length)+" Questions",1),e("div",Vp,[e("button",{class:"btn btn-ghost btn-sm",onClick:i[18]||(i[18]=$=>I(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:i[19]||(i[19]=$=>I(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:i[20]||(i[20]=$=>O.value=[])},"Clear")])]),e("div",Op,[e("button",{class:"btn btn-secondary regen-btn",disabled:k(s).isGenerating,onClick:i[21]||(i[21]=$=>C(!1)),title:"Replace all questions with a new set"},[k(s).isGenerating?(n(),l("span",Gp)):(n(),l("svg",Hp,[...i[57]||(i[57]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),i[58]||(i[58]=F(" Regenerate ",-1))],8,Wp),e("button",{class:"btn btn-ghost regen-btn",disabled:k(s).isGenerating,onClick:i[22]||(i[22]=$=>C(!0)),title:"Generate more and append to current list"},[...i[59]||(i[59]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),F(" Add More ",-1)])],8,Qp)]),(n(!0),l(Q,null,re(O.value,($,Se)=>(n(),l("div",{key:Se,class:U(["quiz-card",{deselected:!$._selected}])},[e("div",Yp,[e("label",Jp,[te(e("input",{type:"checkbox","onUpdate:modelValue":qe=>$._selected=qe},null,8,Kp),[[pt,$._selected]]),e("span",Xp,"Q"+S(Se+1),1)]),e("div",Zp,[e("span",{class:U(["badge difficulty-badge",$.difficulty])},S($.difficulty),3),e("span",ev,S($.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",tv,S($.question),1),e("div",ov,[(n(!0),l(Q,null,re($.options,(qe,De)=>(n(),l("div",{key:De,class:U(["q-option",De===$.correctIndex&&"correct"])},[e("span",nv,S(["A","B","C","D"][De]),1),e("span",null,S(qe),1),De===$.correctIndex?(n(),l("svg",lv,[...i[60]||(i[60]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):q("",!0)],2))),128))]),$.explanation?(n(),l("div",iv,[i[61]||(i[61]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),F(" "+S($.explanation),1)])):q("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!O.value.filter($=>$._selected).length,onClick:x},[i[62]||(i[62]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),F(" Add "+S(O.value.filter($=>$._selected).length)+" Selected as Quiz Slides ",1)],8,av)])):q("",!0)],64)):p.value==="voiceover"?(n(),l(Q,{key:2},[e("div",sv,[i[63]||(i[63]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),te(e("textarea",{"onUpdate:modelValue":i[23]||(i[23]=$=>B.value=$),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[me,B.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating,onClick:b},[k(s).isGenerating?(n(),l("span",dv)):q("",!0),F(" "+S(k(s).isGenerating?"Generating…":"Generate Script"),1)],8,rv)],64)):p.value==="improve"?(n(),l(Q,{key:3},[(se=(R=ce.value)==null?void 0:R.content)!=null&&se.text?(n(),l("div",uv,[i[64]||(i[64]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",cv,S(ce.value.content.text.slice(0,120))+S(ce.value.content.text.length>120?"…":""),1)])):(n(),l("p",pv,"Select a text element on the canvas to improve it.")),e("div",vv,[i[65]||(i[65]=e("label",{class:"form-label"},"Instruction",-1)),te(e("input",{"onUpdate:modelValue":i[24]||(i[24]=$=>m.value=$),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[me,m.value]])]),i[66]||(i[66]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),te(e("textarea",{"onUpdate:modelValue":i[25]||(i[25]=$=>m.value=$),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[me,m.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating||!ce.value&&!m.value,onClick:i[26]||(i[26]=$=>ce.value?Ye():rt())},[k(s).isGenerating?(n(),l("span",mv)):q("",!0),F(" "+S(k(s).isGenerating?"Processing…":"Generate"),1)],8,fv)],64)):p.value==="translate"?(n(),l(Q,{key:4},[(A=(v=ce.value)==null?void 0:v.content)!=null&&A.text?(n(),l("div",gv,[i[67]||(i[67]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",bv,S(ce.value.content.text.slice(0,120))+S(ce.value.content.text.length>120?"…":""),1)])):(n(),l("p",yv,"Select a text element on the canvas to translate it.")),e("div",hv,[i[69]||(i[69]=e("label",{class:"form-label"},"Target Language",-1)),te(e("select",{"onUpdate:modelValue":i[27]||(i[27]=$=>X.value=$),class:"select"},[...i[68]||(i[68]=[Fe('<option value="Spanish" data-v-d6c5ae2b>Spanish</option><option value="French" data-v-d6c5ae2b>French</option><option value="German" data-v-d6c5ae2b>German</option><option value="Italian" data-v-d6c5ae2b>Italian</option><option value="Portuguese" data-v-d6c5ae2b>Portuguese</option><option value="Chinese (Simplified)" data-v-d6c5ae2b>Chinese (Simplified)</option><option value="Japanese" data-v-d6c5ae2b>Japanese</option><option value="Arabic" data-v-d6c5ae2b>Arabic</option>',8)])],512),[[ct,X.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:k(s).isGenerating||!((G=(V=ce.value)==null?void 0:V.content)!=null&&G.text),onClick:Ae},[k(s).isGenerating?(n(),l("span",wv)):q("",!0),F(" "+S(k(s).isGenerating?"Translating…":"Translate Text"),1)],8,xv),c.value?(n(),l("div",kv,[e("div",Cv,[i[70]||(i[70]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",$v,[e("button",{class:"btn btn-ghost btn-sm",onClick:i[28]||(i[28]=$=>E.navigator.clipboard.writeText(c.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:xe,disabled:!ce.value},"Apply",8,Sv)])]),e("div",Iv,S(c.value),1)])):q("",!0)],64)):p.value==="image"?(n(),l(Q,{key:5},[i[73]||(i[73]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",Av,[i[71]||(i[71]=e("label",{class:"form-label"},"Image Description",-1)),te(e("textarea",{"onUpdate:modelValue":i[29]||(i[29]=$=>ve.value=$),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[me,ve.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:we.value||k(s).isGenerating||!ve.value,onClick:Ue},[we.value||k(s).isGenerating?(n(),l("span",Mv)):q("",!0),F(" "+S(we.value||k(s).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,Ev),c.value?(n(),l("div",Pv,[i[72]||(i[72]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",zv,S(c.value),1)])):q("",!0)],64)):p.value==="settings"?(n(),l("div",Tv,[e("div",Nv,[i[75]||(i[75]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:k(s).apiProvider,class:"select",onChange:i[30]||(i[30]=$=>k(s).setProvider($.target.value))},[...i[74]||(i[74]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,Lv)]),e("div",jv,[i[76]||(i[76]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:k(s).apiKey,class:"input",placeholder:"sk-…",onChange:i[31]||(i[31]=$=>k(s).setApiKey($.target.value))},null,40,Bv),i[77]||(i[77]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),k(s).apiKey?q("",!0):(n(),l("div",Dv,[...i[78]||(i[78]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),F(" Running in ",-1),e("strong",null,"demo mode",-1),F(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):q("",!0),c.value&&p.value!=="settings"&&p.value!=="quiz"?(n(),l("div",_v,[e("div",qv,[i[79]||(i[79]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:i[32]||(i[32]=$=>c.value="")},"Clear")]),e("pre",Rv,S(c.value),1),e("div",Fv,[p.value==="generate"?(n(),l("button",{key:0,class:"btn btn-primary btn-sm",onClick:le},S(a.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):q("",!0),p.value==="generate"?(n(),l("button",{key:1,class:"btn btn-ghost btn-sm",disabled:k(s).isGenerating,onClick:Te},[...i[80]||(i[80]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),F(" Regenerate ",-1)])],8,Uv)):q("",!0),p.value==="improve"&&ce.value?(n(),l("button",{key:2,class:"btn btn-primary btn-sm",onClick:Ve}," Apply to Element ")):q("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:i[33]||(i[33]=$=>{var Se;return(Se=E.navigator.clipboard)==null?void 0:Se.writeText(c.value)})}," Copy ")])])):q("",!0),k(s).lastError?(n(),l("div",Vv,[i[81]||(i[81]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),F(" "+S(k(s).lastError),1)])):q("",!0)])])}}},Wv=Be(Ov,[["__scopeId","data-v-d6c5ae2b"]]),Gv={class:"theme-manager"},Hv={class:"panel-section"},Qv={class:"presets-grid"},Yv=["title","onClick"],Jv={class:"preset-preview"},Kv={class:"preset-name"},Xv={class:"panel-section"},Zv={class:"theme-fields"},e1={class:"form-label"},t1={class:"color-row"},o1=["value","onInput"],n1=["value","onChange"],l1={class:"panel-section"},i1={class:"theme-field"},a1=["value","placeholder"],s1={class:"chart-palette-preview"},r1={class:"panel-section"},d1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},u1=["value"],c1=["value"],p1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},v1=["value"],f1=["value"],m1={class:"form-group"},g1=["value"],b1={class:"panel-section"},y1={class:"tp-chart-row"},h1={key:0,class:"apply-message success"},x1={key:1,class:"apply-message error"},w1={__name:"ThemeManager",setup(y){const s=We(),r=Ge(),u=M(()=>r.getProject(s.projectId)),p=M(()=>{var a;return((a=u.value)==null?void 0:a.theme)||{}}),m=M(()=>gn(p.value)),g=L(""),c=L("");function z(a){r.updateProject(s.projectId,{theme:{...p.value,...a}})}const ne=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],X=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function B(a){z(a)}function Z(a,h){const w=a.content||{};return a.type==="text"?{content:{...w,fontFamily:h.fontFamily||w.fontFamily,color:h.textColor||w.color}}:a.type==="heading"?{content:{...w,fontFamily:h.headingFont||h.fontFamily||w.fontFamily,color:h.textColor||w.color}}:a.type==="shape"?{content:{...w,fillColor:h.secondaryColor||w.fillColor}}:a.type==="hotspot"?{content:{...w,bgColor:h.primaryColor||w.bgColor}}:a.type==="button"?{content:{...w,bgColor:h.primaryColor||w.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:h.fontFamily||w.fontFamily}}:a.type==="quiz"?{content:{...w,cardBgColor:h.bgColor||w.cardBgColor,questionColor:h.textColor||w.questionColor,accentColor:h.primaryColor||w.accentColor}}:a.type==="chart"?{content:{...w,...Cn(h)}}:null}function ee(){z({chartPalette:""})}function _(){g.value="",c.value="";const a=s.projectId,h=u.value,w=p.value;if(!a||!h){c.value="No active project to apply theme.";return}const D=h.slides||[];let f=0;D.forEach(j=>{(j.backgroundType||"color")==="color"&&r.updateSlide(a,j.id,{backgroundType:"color",background:w.bgColor||j.background||"#ffffff"}),(j.elements||[]).forEach(oe=>{const be=Z(oe,w);be&&(r.updateElement(a,j.id,oe.id,be),f+=1)})}),g.value=`Applied theme to ${D.length} slide${D.length===1?"":"s"} and ${f} element${f===1?"":"s"}.`}return(a,h)=>(n(),l("div",Gv,[e("div",Hv,[h[4]||(h[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",Qv,[(n(),l(Q,null,re(ne,w=>e("div",{key:w.name,class:"preset-card",title:w.name,onClick:D=>B(w)},[e("div",Jv,[e("div",{class:"pp-header",style:de({background:w.primaryColor})},null,4),e("div",{class:"pp-body",style:de({background:w.bgColor})},[e("div",{class:"pp-line",style:de({background:w.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:de({background:w.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:de({background:w.secondaryColor})},null,4)]),e("span",Kv,S(w.name),1)],8,Yv)),64))])]),e("div",Xv,[h[5]||(h[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",Zv,[(n(),l(Q,null,re({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(w,D)=>e("div",{class:"theme-field",key:D},[e("label",e1,S(w),1),e("div",t1,[e("input",{type:"color",value:p.value[D]||"#ffffff",class:"color-input-native",onInput:f=>z({[D]:f.target.value})},null,40,o1),e("input",{value:p.value[D]||"",class:"input",onChange:f=>z({[D]:f.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,n1)])])),64))])]),e("div",l1,[h[8]||(h[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",i1,[h[6]||(h[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:k(el)(k(gn)(p.value)),onChange:h[0]||(h[0]=w=>z({chartPalette:w.target.value}))},null,40,a1),e("div",s1,[(n(!0),l(Q,null,re(m.value,(w,D)=>(n(),l("span",{key:`theme-chart-${D}`,class:"chart-palette-dot",style:de({background:w})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ee},"Use auto palette")]),h[7]||(h[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",r1,[h[12]||(h[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",d1,[h[9]||(h[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:h[1]||(h[1]=w=>z({headingFont:w.target.value}))},[(n(),l(Q,null,re(X,w=>e("option",{key:w.value,value:w.value},S(w.label),9,c1)),64))],40,u1)]),e("div",p1,[h[10]||(h[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:h[2]||(h[2]=w=>z({fontFamily:w.target.value}))},[(n(),l(Q,null,re(X,w=>e("option",{key:w.value,value:w.value},S(w.label),9,f1)),64))],40,v1)]),e("div",m1,[h[11]||(h[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:h[3]||(h[3]=w=>z({fontSize:+w.target.value}))},null,40,g1)])]),e("div",b1,[h[13]||(h[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:de({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:de({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:de({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:de({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:de({background:p.value.secondaryColor})},"Badge",4),e("div",y1,[(n(!0),l(Q,null,re(m.value.slice(0,5),(w,D)=>(n(),l("span",{key:`preview-chart-${D}`,class:"tp-chart-bar",style:de({background:w,height:`${22+D*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:_}," Apply Theme to Slides "),g.value?(n(),l("p",h1,S(g.value),1)):q("",!0),c.value?(n(),l("p",x1,S(c.value),1)):q("",!0)])]))}},k1=Be(w1,[["__scopeId","data-v-da2b0ce4"]]),C1={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},$1={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},S1={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},I1={class:"export-tabs tabs",style:{"overflow-x":"auto"}},A1={class:"export-content"},E1={class:"export-options",style:{"margin-bottom":"20px"}},M1={class:"form-group"},P1={class:"export-meta"},z1={class:"meta-item"},T1={class:"meta-item"},N1={class:"meta-item"},L1={class:"export-options",style:{"margin-bottom":"20px"}},j1={class:"form-group"},B1={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},D1={class:"export-options",style:{"margin-bottom":"20px"}},_1={class:"form-group"},q1={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},R1={class:"coming-soon"},F1={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},U1={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},V1={key:1,class:"export-success"},O1={__name:"ExportModal",setup(y){const s=We(),r=Ge(),u=$n(),p=M(()=>r.getProject(s.projectId)),m=L("json"),g=L(""),c=L(""),z=L(!0);je(p,D=>{D&&!c.value&&(c.value=D.name||"presentation")},{immediate:!0});function ne(){const D=r.exportProject(s.projectId);if(!D)return;const f=new Blob([D],{type:"application/json"}),j=URL.createObjectURL(f),oe=document.createElement("a");oe.href=j,oe.download=`${c.value||"project"}.mediasurf.json`,oe.click(),URL.revokeObjectURL(j),g.value="success",setTimeout(()=>g.value="",3e3)}function X(D,f="presentation"){return String(D).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||f}function B(D){return new Promise((f,j)=>{const oe=new FileReader;oe.onloadend=()=>f(oe.result),oe.onerror=()=>j(oe.error),oe.readAsDataURL(D)})}function Z(D,f,j="html"){const oe=vt(f);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${oe.width}px;
  --lf-slide-height: ${oe.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(D==null?void 0:D.fontFamily)||"Inter, sans-serif"};
  background: ${j==="pdf"?"#f3f4f6":`
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%)`};
  color: ${j==="pdf"?"#111827":"#ffffff"};
  display: ${j==="pdf"?"block":"flex"};
  align-items: ${j==="pdf"?"stretch":"center"};
  justify-content: ${j==="pdf"?"flex-start":"center"};
  overflow: ${j==="pdf"?"auto":"hidden"};
  padding: ${j==="pdf"?"24px 0":"0"};
}
.lf-shell {
  width: ${j==="pdf"?"100%":"100vw"};
  min-height: ${j==="pdf"?"auto":"100vh"};
  height: ${j==="pdf"?"auto":"100vh"};
  position: relative;
  display: flex;
  align-items: ${j==="pdf"?"stretch":"center"};
  justify-content: center;
  overflow: ${j==="pdf"?"visible":"hidden"};
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
  width: ${j==="pdf"?"100%":"auto"};
  max-width: ${j==="pdf"?"none":"auto"};
  padding: ${j==="pdf"?"0":"18px"};
  border-radius: ${j==="pdf"?"0":"32px"};
  background: ${j==="pdf"?"transparent":"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"};
  border: ${j==="pdf"?"none":"1px solid rgba(255,255,255,0.12)"};
  box-shadow: ${j==="pdf"?"none":"0 30px 80px rgba(0,0,0,.34)"};
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
  width: ${j==="pdf"?"100%":"var(--lf-slide-width)"};
  height: ${j==="pdf"?"auto":"var(--lf-slide-height)"};
  border-radius: ${j==="pdf"?"0":"18px"};
  overflow: ${j==="pdf"?"visible":"hidden"};
  box-shadow: ${j==="pdf"?"none":"0 30px 90px rgba(0,0,0,.5)"};
  transform-origin: center center;
  display: ${j==="pdf"?"flex":"block"};
  flex-direction: ${j==="pdf"?"column":"row"};
  align-items: ${j==="pdf"?"center":"stretch"};
  gap: ${j==="pdf"?"24px":"0"};
}
.slide {
  position: ${j==="pdf"?"relative":"absolute"};
  inset: ${j==="pdf"?"auto":"0"};
  display: ${j==="pdf"?"block":"none"};
  overflow: hidden;
  color: ${(D==null?void 0:D.textColor)||"#1a1a2e"};
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
  flex: 0 0 auto;
  background-clip: padding-box;
  box-shadow: ${j==="pdf"?"0 12px 32px rgba(15, 23, 42, 0.16)":"none"};
  page-break-after: ${j==="pdf"?"always":"auto"};
  break-after: ${j==="pdf"?"page":"auto"};
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
  background: ${(D==null?void 0:D.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(f==null?void 0:f.showProgress)===!1?"none":"block"};
  z-index: 6;
}
${j==="iframe"?`
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
${j==="pdf"?`
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
`}function ee(D="html"){return`
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
`}async function _(){return w("html")}async function a(){return w("iframe")}async function h(){return w("pdf")}async function w(D="html"){var W,J,ye;const f=p.value;if(!f)return;g.value="processing";const j=D==="pdf"&&typeof window<"u"?window.open("","_blank"):null;if(D==="pdf"&&!j){g.value="error",setTimeout(()=>g.value="",3e3);return}const oe=D==="pdf"?null:new ol,be=oe?oe.folder("assets"):null;let ue=0;async function N(ie,le="media"){if((!ie||ie.startsWith("data:")||ie.startsWith("http://localhost")||ie.startsWith("blob:"))&&ie.startsWith("data:"))return ie;try{const pe=await(await fetch(ie)).blob();if(D==="pdf")return await B(pe);let C="bin";const x=pe.type;if(x.includes("image/png")?C="png":x.includes("image/jpeg")?C="jpg":x.includes("image/gif")?C="gif":x.includes("image/svg")?C="svg":x.includes("image/webp")?C="webp":x.includes("video/mp4")?C="mp4":x.includes("audio/mpeg")&&(C="mp3"),C==="bin"){const b=ie.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);b&&(C=b[1])}ue++;const I=`${le}_${ue}.${C}`;return be.file(I,pe),`assets/${I}`}catch($e){return console.warn("Could not fetch asset:",ie,$e),ie}}const T=JSON.parse(JSON.stringify([...f.slides||[]])).sort((ie,le)=>(ie.order??0)-(le.order??0));if(z.value)for(const ie of T){ie.backgroundType==="image"&&ie.backgroundImage&&(ie.backgroundImage=await N(ie.backgroundImage,"bg"));for(const le of ie.elements||[])le.type==="image"&&((W=le.content)!=null&&W.src)&&(le.content.src=await N(le.content.src,"img")),le.type==="video"&&((J=le.content)!=null&&J.src)&&!le.content.src.includes("youtube")&&!le.content.src.includes("youtu.be")&&(le.content.src=await N(le.content.src,"vid")),le.type==="audio"&&((ye=le.content)!=null&&ye.src)&&(le.content.src=await N(le.content.src,"aud"))}const O=X(c.value||f.name||"presentation"),ae={name:f.name,theme:f.theme||{},settings:f.settings||{},slides:T},Y=JSON.stringify(ae).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),fe=Z(f.theme,f.settings,D),ge=ee(D),Me=`<script id="lf-data" type="application/json">${Y}<\/script>`,ce=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${O}</title>
${D==="pdf"?`<style>${fe}</style>`:'<link rel="stylesheet" href="style.css">'}
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
  <span class="nav-counter" id="counter">1 / ${T.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${Me}
${D!=="pdf"?'<script src="script.js"><\/script>':`<script>${ge}<\/script>`}
</body>
</html>`;if(D==="pdf"){j.document.open(),j.document.write(ce),j.document.close(),g.value="success",setTimeout(()=>g.value="",3e3);return}oe.file("index.html",ce),oe.file("style.css",fe),oe.file("script.js",ge);const Te=await oe.generateAsync({type:"blob"}),Pe=URL.createObjectURL(Te),Ne=document.createElement("a");Ne.href=Pe,Ne.download=`${O}.zip`,Ne.click(),URL.revokeObjectURL(Pe),g.value="success",setTimeout(()=>g.value="",3e3)}return(D,f)=>(n(),_e(Vn,{title:"Export Project",size:"md",onClose:f[13]||(f[13]=j=>k(s).showExportModal=!1)},{footer:et(()=>[e("button",{class:"btn btn-secondary",onClick:f[12]||(f[12]=j=>k(s).showExportModal=!1)},"Close")]),default:et(()=>{var j,oe,be,ue,N;return[k(u).user?(n(),l(Q,{key:1},[e("div",I1,[e("button",{class:U(["tab-btn",m.value==="json"&&"active"]),onClick:f[2]||(f[2]=T=>m.value="json")},"JSON",2),e("button",{class:U(["tab-btn",m.value==="html"&&"active"]),onClick:f[3]||(f[3]=T=>m.value="html")},"HTML",2),e("button",{class:U(["tab-btn",m.value==="iframe"&&"active"]),onClick:f[4]||(f[4]=T=>m.value="iframe")},"Iframe",2),e("button",{class:U(["tab-btn",m.value==="pdf"&&"active"]),onClick:f[5]||(f[5]=T=>m.value="pdf")},"PDF",2),e("button",{class:U(["tab-btn",m.value==="scorm"&&"active"]),onClick:f[6]||(f[6]=T=>m.value="scorm")},"SCORM",2)]),e("div",A1,[m.value==="json"?(n(),l(Q,{key:0},[f[24]||(f[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",E1,[e("div",M1,[f[19]||(f[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),te(e("input",{type:"text","onUpdate:modelValue":f[7]||(f[7]=T=>c.value=T),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[me,c.value]])])]),e("div",P1,[e("div",z1,[f[20]||(f[20]=e("span",null,"Project",-1)),e("strong",null,S((j=p.value)==null?void 0:j.name),1)]),e("div",T1,[f[21]||(f[21]=e("span",null,"Slides",-1)),e("strong",null,S(((be=(oe=p.value)==null?void 0:oe.slides)==null?void 0:be.length)||0),1)]),e("div",N1,[f[22]||(f[22]=e("span",null,"Elements",-1)),e("strong",null,S(((N=(ue=p.value)==null?void 0:ue.slides)==null?void 0:N.reduce((T,O)=>{var ae;return T+(((ae=O.elements)==null?void 0:ae.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:ne},[...f[23]||(f[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),F(" Download JSON ",-1)])])],64)):m.value==="html"?(n(),l(Q,{key:1},[f[28]||(f[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",L1,[e("div",j1,[f[25]||(f[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),te(e("input",{type:"text","onUpdate:modelValue":f[8]||(f[8]=T=>c.value=T),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[me,c.value]])]),e("label",B1,[te(e("input",{type:"checkbox","onUpdate:modelValue":f[9]||(f[9]=T=>z.value=T)},null,512),[[pt,z.value]]),f[26]||(f[26]=F(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),f[29]||(f[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:_},[...f[27]||(f[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),F(" Download HTML ",-1)])])],64)):m.value==="iframe"?(n(),l(Q,{key:2},[f[33]||(f[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",D1,[e("div",_1,[f[30]||(f[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),te(e("input",{type:"text","onUpdate:modelValue":f[10]||(f[10]=T=>c.value=T),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[me,c.value]])]),e("label",q1,[te(e("input",{type:"checkbox","onUpdate:modelValue":f[11]||(f[11]=T=>z.value=T)},null,512),[[pt,z.value]]),f[31]||(f[31]=F(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:a},[...f[32]||(f[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),F(" Download Iframe Zip ",-1)])])],64)):m.value==="pdf"?(n(),l(Q,{key:3},[f[35]||(f[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),f[36]||(f[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:h},[...f[34]||(f[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),F(" Generate PDF ",-1)])])],64)):m.value==="scorm"?(n(),l(Q,{key:4},[f[40]||(f[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",R1,[(n(),l("svg",F1,[...f[37]||(f[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),f[38]||(f[38]=e("h4",null,"Coming Soon",-1)),f[39]||(f[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):q("",!0),st(mt,{name:"fade"},{default:et(()=>[g.value==="processing"?(n(),l("div",U1,[...f[41]||(f[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),F(" Generating package... Please wait. ",-1)])])):g.value==="success"?(n(),l("div",V1,[...f[42]||(f[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),F(" Export successful! Check your downloads folder. ",-1)])])):q("",!0)]),_:1})])],64)):(n(),l("div",C1,[(n(),l("svg",$1,[...f[14]||(f[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),f[17]||(f[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),f[18]||(f[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",S1,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:f[0]||(f[0]=T=>k(u).loginWithGoogle())},[...f[15]||(f[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),F(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:f[1]||(f[1]=T=>k(u).loginWithMicrosoft())},[...f[16]||(f[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),F(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},W1=Be(O1,[["__scopeId","data-v-1a8a69d1"]]),G1={key:0,class:"editor-view"},H1={class:"editor-topbar"},Q1={class:"topbar-left"},Y1={class:"project-name-wrap"},J1=["value"],K1={class:"save-label"},X1={class:"topbar-center"},Z1={key:0,class:"slide-position"},ef={class:"topbar-right"},tf={class:"editor-body"},of={class:"authoring-rail"},nf=["onClick","data-tooltip"],lf={key:0,class:"rail-icon"},af={key:1,class:"rail-icon"},sf={key:2,class:"rail-icon"},rf={key:3,class:"rail-icon"},df={key:4,class:"rail-icon"},uf={key:5,class:"rail-icon"},cf={key:6,class:"rail-icon"},pf={key:7,class:"rail-icon"},vf={key:8,class:"rail-icon"},ff={class:"right-panel"},mf={class:"panel-tabs"},gf=["onClick","data-tooltip"],bf={class:"tab-icon"},yf={class:"tab-label"},hf={class:"panel-content"},xf={key:1,class:"editor-not-found"},wf={__name:"EditorView",setup(y){const s=Fn(),r=Rn(),u=We(),p=Ge(),m=$n(),g=M(()=>s.params.id),c=M(()=>p.getProject(g.value)),z=M(()=>vt(c.value)),ne=M(()=>{var C;return[...((C=c.value)==null?void 0:C.slides)||[]].sort((x,I)=>x.order-I.order)}),X=L(null),B=L(!1),Z=L("deck"),{aiStore:ee,showAIModal:_,aiMode:a,aiTopic:h,aiContext:w,aiProjectName:D,aiSlideCount:f,aiQuestionCount:j,aiDifficulty:oe,aiQuestionType:be,aiCreationError:ue,aiSubmitting:N,aiProjectNamePlaceholder:T,aiPrimaryActionLabel:O,openAICreationModal:ae,createAIProject:Y}=On({onRequireAuth:()=>r.push({name:"dashboard"})});let fe=!1,ge=null;je(()=>c.value,C=>{if(C){if(fe){fe=!1;return}ge&&clearTimeout(ge),ge=setTimeout(()=>{u.pushHistory(C)},600)}},{deep:!0}),je(()=>m.isAuthReady,async C=>{var x;if(C){if((x=m.user)!=null&&x.uid&&await p.ensureRemoteProjectsLoaded(),!c.value){r.push({name:"dashboard"});return}u.setProject(g.value),ne.value.length>0&&u.setCurrentSlide(ne.value[0].id),u.pushHistory(c.value)}},{immediate:!0});const Me=M(()=>{const C=c.value;return C?`Saved ${new Date(C.updatedAt).toLocaleTimeString()}`:""}),ke=M(()=>{switch(u.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});nl({undo:()=>{if(u.canUndo()){const C=u.undo();C&&(fe=!0,p.updateProject(g.value,C))}},redo:()=>{if(u.canRedo()){const C=u.redo();C&&(fe=!0,p.updateProject(g.value,C))}},delete:()=>{u.selectedElementId&&(p.deleteElement(u.projectId,u.currentSlideId,u.selectedElementId),u.clearSelection())},escape:()=>{u.clearSelection(),u.setActiveTool("select")},copy:()=>{var x,I,b,Ae;const C=(Ae=(b=(I=(x=c.value)==null?void 0:x.slides)==null?void 0:I.find(xe=>xe.id===u.currentSlideId))==null?void 0:b.elements)==null?void 0:Ae.find(xe=>xe.id===u.selectedElementId);C&&u.setClipboard(C)},paste:()=>{if(u.clipboard&&u.currentSlideId){const C=u.clipboard;p.addElement(u.projectId,u.currentSlideId,C.type,{...C,x:C.x+20,y:C.y+20,id:void 0})}},duplicate:()=>{if(u.selectedElementId){const C=p.duplicateElement(u.projectId,u.currentSlideId,u.selectedElementId);C&&u.selectElement(C.id)}},zoomIn:()=>u.zoomIn(),zoomOut:()=>u.zoomOut(),zoomReset:()=>u.zoomReset(),toggleGrid:()=>u.toggleGrid(),nudge:(C,x)=>{var b,Ae,xe,ve;if(!u.selectedElementId)return;const I=(ve=(xe=(Ae=(b=c.value)==null?void 0:b.slides)==null?void 0:Ae.find(we=>we.id===u.currentSlideId))==null?void 0:xe.elements)==null?void 0:ve.find(we=>we.id===u.selectedElementId);I&&p.updateElement(u.projectId,u.currentSlideId,u.selectedElementId,{x:I.x+C,y:I.y+x})},selectAll:()=>{var x,I,b;(((b=(I=(x=c.value)==null?void 0:x.slides)==null?void 0:I.find(Ae=>Ae.id===u.currentSlideId))==null?void 0:b.elements)||[]).forEach((Ae,xe)=>u.selectElement(Ae.id,xe>0))}});function ce(){r.push({name:"dashboard"})}function Te(){r.push({name:"preview",params:{id:g.value},query:{from:"editor"}})}function Pe(C="deck"){Z.value=C,B.value=!0}function Ne(){B.value=!1,ae(Z.value)}function W(C,x="Image"){if(!u.projectId||!u.currentSlideId||!C)return;const I=new Image;I.onload=()=>{const xe=Math.min(420/I.width,280/I.height,1),ve=Math.max(120,Math.round(I.width*xe)),we=Math.max(80,Math.round(I.height*xe)),Ue=Math.max(24,Math.round((z.value.width-ve)/2)),Ye=Math.max(24,Math.round((z.value.height-we)/2)),Ve=p.addElement(u.projectId,u.currentSlideId,"image",{x:Ue,y:Ye,width:ve,height:we,content:{src:C,alt:x,objectFit:"cover"}});Ve&&(u.selectElement(Ve.id),u.setRightPanel("properties"),u.setActiveTool("select"))},I.src=C}function J(C){const[x]=Array.from(C.target.files||[]);if(!x||!x.type.startsWith("image/"))return;const I=new FileReader;I.onload=()=>W(String(I.result||""),x.name),I.readAsDataURL(x),C.target.value=""}function ye(){var C;(C=X.value)==null||C.click()}const ie=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function le(C){if(C==="text"){u.setActiveTool("text");return}if(C==="resources"){u.setActiveTool("image");return}if(C==="interactive-elements"){u.setActiveTool("hotspot");return}if(C==="interactive-questions"){u.setActiveTool("quiz");return}if(C==="widgets"){u.setActiveTool("shape");return}if(C==="insert"){ye();return}if(C==="style"){u.setRightPanel("properties");return}if(C==="background"){u.clearSelection(),u.setRightPanel("properties");return}C==="pages"&&u.toggleSlidePanel()}function $e(C){return C==="text"?["text","heading"].includes(u.activeTool):C==="resources"?u.activeTool==="image":C==="interactive-elements"?["hotspot","button"].includes(u.activeTool):C==="interactive-questions"?u.activeTool==="quiz":C==="widgets"?["shape","video","audio","chart"].includes(u.activeTool):C==="insert"?!1:C==="style"||C==="background"?u.rightPanelTab==="properties":C==="pages"?u.showSlidePanel:!1}function pe(){Hn({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return je(()=>c.value,C=>{C&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{pe()},100)},{immediate:!0}),(C,x)=>c.value?(n(),l("div",G1,[e("input",{ref_key:"imageInputRef",ref:X,type:"file",accept:"image/*",class:"sr-only",onChange:J},null,544),e("header",H1,[e("div",Q1,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:ce,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...x[14]||(x[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),F(" Dashboard ",-1)])]),e("div",Y1,[e("input",{value:c.value.name,class:"project-name-input",onChange:x[0]||(x[0]=I=>k(p).updateProject(g.value,{name:I.target.value}))},null,40,J1)]),e("span",K1,S(Me.value),1)]),e("div",X1,[k(u).currentSlideId?(n(),l("span",Z1," Slide "+S(ne.value.findIndex(I=>I.id===k(u).currentSlideId)+1)+" of "+S(ne.value.length),1)):q("",!0)]),e("div",ef,[e("button",{class:"btn btn-ghost btn-sm",onClick:pe,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...x[15]||(x[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),F(" Help ",-1)])]),e("button",{class:U(["btn btn-ghost btn-sm",k(u).showAIPanel&&"active-btn"]),onClick:x[1]||(x[1]=I=>{k(u).showAIPanel=!k(u).showAIPanel,k(u).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...x[16]||(x[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),F(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:x[2]||(x[2]=I=>{k(u).showThemeManager=!k(u).showThemeManager,k(u).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...x[17]||(x[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),F(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:Te,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...x[18]||(x[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),F(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:x[3]||(x[3]=I=>k(u).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...x[19]||(x[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),F(" Export ",-1)])])])]),st(nc,{onOpenAiProject:Pe}),e("div",tf,[e("aside",of,[(n(),l(Q,null,re(ie,I=>e("button",{key:I.id,class:U(["rail-option",$e(I.id)&&"active"]),onClick:b=>le(I.id),"data-tooltip":I.label,"data-tooltip-position":"right"},[I.id==="text"?(n(),l("span",lf,"T")):I.id==="resources"?(n(),l("span",af,[...x[20]||(x[20]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):I.id==="interactive-elements"?(n(),l("span",sf,[...x[21]||(x[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):I.id==="interactive-questions"?(n(),l("span",rf,[...x[22]||(x[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):I.id==="widgets"?(n(),l("span",df,[...x[23]||(x[23]=[Fe('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-b65c4daf><rect x="3" y="3" width="7" height="7" data-v-b65c4daf></rect><rect x="14" y="3" width="7" height="7" data-v-b65c4daf></rect><rect x="14" y="14" width="7" height="7" data-v-b65c4daf></rect><rect x="3" y="14" width="7" height="7" data-v-b65c4daf></rect></svg>',1)])])):I.id==="insert"?(n(),l("span",uf,[...x[24]||(x[24]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):I.id==="style"?(n(),l("span",cf,[...x[25]||(x[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):I.id==="background"?(n(),l("span",pf,[...x[26]||(x[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):I.id==="pages"?(n(),l("span",vf,[...x[27]||(x[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):q("",!0),F(" "+S(I.label),1)],10,nf)),64))]),st(mt,{name:"side-panel-slide"},{default:et(()=>[k(u).showSlidePanel?(n(),_e(yl,{key:0})):q("",!0)]),_:1}),st(tp),e("aside",ff,[e("div",mf,[(n(),l(Q,null,re([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],I=>e("button",{key:I.id,class:U(["panel-tab",k(u).rightPanelTab===I.id&&"active"]),onClick:b=>k(u).setRightPanel(I.id),"data-tooltip":`Open ${I.label}`,"data-tooltip-position":"bottom"},[e("span",bf,S(I.icon),1),e("span",yf,S(I.label),1)],10,gf)),64))]),e("div",hf,[st(mt,{name:"editor-panel-switch",mode:"out-in"},{default:et(()=>[(n(),l("div",{key:ke.value,class:"panel-content-view"},[k(u).rightPanelTab==="properties"?(n(),_e(Du,{key:0})):k(u).rightPanelTab==="layers"?(n(),_e(ql,{key:1})):k(u).rightPanelTab==="ai"?(n(),_e(Wv,{key:2})):k(u).rightPanelTab==="theme"?(n(),_e(k1,{key:3})):q("",!0)]))]),_:1})])])]),k(u).showExportModal?(n(),_e(W1,{key:0})):q("",!0),B.value?(n(),_e(Wn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:x[4]||(x[4]=I=>B.value=!1),onConfirm:Ne})):q("",!0),k(_)?(n(),_e(Gn,{key:2,mode:k(a),topic:k(h),context:k(w),"project-name":k(D),"slide-count":k(f),"question-count":k(j),difficulty:k(oe),"question-type":k(be),"project-name-placeholder":k(T),"primary-action-label":k(O),"creation-error":k(ue),"is-submitting":k(N),"is-generating":k(ee).isGenerating,"has-api-key":!!k(ee).apiKey,onClose:x[5]||(x[5]=I=>_.value=!1),onCreate:k(Y),"onUpdate:mode":x[6]||(x[6]=I=>a.value=I),"onUpdate:topic":x[7]||(x[7]=I=>h.value=I),"onUpdate:context":x[8]||(x[8]=I=>w.value=I),"onUpdate:projectName":x[9]||(x[9]=I=>D.value=I),"onUpdate:slideCount":x[10]||(x[10]=I=>f.value=I),"onUpdate:questionCount":x[11]||(x[11]=I=>j.value=I),"onUpdate:difficulty":x[12]||(x[12]=I=>oe.value=I),"onUpdate:questionType":x[13]||(x[13]=I=>be.value=I)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):q("",!0)])):(n(),l("div",xf,[x[28]||(x[28]=e("h2",null,"Project not found",-1)),x[29]||(x[29]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:ce},"Go to Dashboard")]))}},Mf=Be(wf,[["__scopeId","data-v-b65c4daf"]]);export{Mf as default};
