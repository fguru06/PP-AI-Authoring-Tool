import{K as mn,P as fn,v as n,F as l,B as e,C as k,H as F,I as le,E as Ae,D as Q,u as w,Q as ae,M as Ue,G as L,L as D,q as Be,R as gn,f as A,r as N,N as Z,S as pt,w as qe,O as pe,i as Nn,U as Tn,n as _n,y as rt,x as Ze,T as ft,V as ct,z as Ln,p as jn,J as pn}from"./vue-core-DCl8Fgqc.js";import{u as Bn,d as Dn}from"./vue-ecosystem-Da9kls6U.js";import{u as Oe,c as qn,M as Rn,a as Fn,C as Un,A as Vn,b as On}from"./ConfirmActionModal-BQXgd1e5.js";import{u as Ge,b as Gn,g as vt,C as Wn,n as Hn,p as Qn,s as Yn,m as bn,f as yn,c as hn,d as Jn,e as Kn,h as vn,a as xn}from"./projectStore-DhFuRdhg.js";import{_ as je}from"./index-DQZJ_Ckv.js";import{C as Xn}from"./ChartElement-qg2Z5RsM.js";import{J as Zn}from"./jszip-529iNPX7.js";function el(x){function s(r){var p,M,ee,J,T,W,K,_,a,h,b,f,O,se,fe,de,ue;const u=r.ctrlKey||r.metaKey,v=r.key.toLowerCase(),g=r.target.tagName.toLowerCase(),y=g==="input"||g==="textarea"||r.target.isContentEditable;y&&u&&["c","v","x","a","z","y"].includes(v)||(u&&v==="z"&&!r.shiftKey?(r.preventDefault(),(p=x.undo)==null||p.call(x)):u&&(v==="y"||v==="z"&&r.shiftKey)?(r.preventDefault(),(M=x.redo)==null||M.call(x)):u&&v==="c"?(r.preventDefault(),(ee=x.copy)==null||ee.call(x)):u&&v==="v"?(r.preventDefault(),(J=x.paste)==null||J.call(x)):u&&v==="x"?(r.preventDefault(),(T=x.cut)==null||T.call(x)):u&&v==="d"?(r.preventDefault(),(W=x.duplicate)==null||W.call(x)):u&&v==="a"?(r.preventDefault(),(K=x.selectAll)==null||K.call(x)):v==="delete"||v==="backspace"?y||(r.preventDefault(),(_=x.delete)==null||_.call(x)):v==="escape"?(a=x.escape)==null||a.call(x):u&&v==="g"?(r.preventDefault(),(h=x.toggleGrid)==null||h.call(x)):u&&v==="="||u&&v==="+"?(r.preventDefault(),(b=x.zoomIn)==null||b.call(x)):u&&v==="-"?(r.preventDefault(),(f=x.zoomOut)==null||f.call(x)):u&&v==="0"?(r.preventDefault(),(O=x.zoomReset)==null||O.call(x)):v==="arrowleft"?(se=x.nudge)==null||se.call(x,-1,0):v==="arrowright"?(fe=x.nudge)==null||fe.call(x,1,0):v==="arrowup"?(de=x.nudge)==null||de.call(x,0,-1):v==="arrowdown"&&((ue=x.nudge)==null||ue.call(x,0,1)))}mn(()=>window.addEventListener("keydown",s)),fn(()=>window.removeEventListener("keydown",s))}const tl={class:"slide-panel"},ol={class:"slide-panel-header"},nl={class:"slide-count"},ll={class:"slides-list"},il=["onClick","onContextmenu","onDragstart","onDrop"],al={class:"slide-number"},sl=["viewBox"],rl=["x","y","width","height","fill"],dl=["d","stroke"],ul=["d","fill"],cl={class:"slide-footer"},pl={class:"slide-title"},vl=["onClick"],ml={__name:"SlidePanel",setup(x){const s=Oe(),r=Ge(),u=A(()=>r.getProject(s.projectId)),v=A(()=>vt(u.value)),g=A(()=>{var S,B;return((B=(S=u.value)==null?void 0:S.slides)==null?void 0:B.slice().sort((R,ne)=>R.order-ne.order))||[]}),y=N({show:!1,x:0,y:0,slideId:null});function p(S){s.setCurrentSlide(S)}function M(){const S=g.value.findIndex(R=>R.id===s.currentSlideId),B=r.addSlide(s.projectId,S);B&&s.setCurrentSlide(B.id)}function ee(S){var ne,V;const B=g.value.findIndex(ve=>ve.id===S);r.deleteSlide(s.projectId,S);const R=((ne=u.value)==null?void 0:ne.slides)||[];if(R.length>0){const ve=R.slice().sort((Ee,xe)=>Ee.order-xe.order),me=Math.min(B,ve.length-1);s.setCurrentSlide((V=ve[me])==null?void 0:V.id)}}function J(S,B){S.preventDefault(),y.value={show:!0,x:S.clientX,y:S.clientY,slideId:B},setTimeout(()=>window.addEventListener("click",T,{once:!0}),0)}function T(){y.value.show=!1}function W(){const S=r.duplicateSlide(s.projectId,y.value.slideId);S&&s.setCurrentSlide(S.id),T()}function K(){ee(y.value.slideId),T()}function _(S,B){S.stopPropagation(),ee(B)}function a(){const S=g.value.findIndex(B=>B.id===y.value.slideId);S>0&&r.reorderSlides(s.projectId,S,S-1),T()}function h(){const S=g.value.findIndex(B=>B.id===y.value.slideId);S<g.value.length-1&&r.reorderSlides(s.projectId,S,S+1),T()}let b=-1;function f(S,B){b=B,S.dataTransfer.effectAllowed="move"}function O(S,B){S.preventDefault(),b!==-1&&b!==B&&r.reorderSlides(s.projectId,b,B),b=-1}function se(S){return S.backgroundType==="gradient"&&S.backgroundGradient?{background:S.backgroundGradient}:S.backgroundType==="image"&&S.backgroundImage?{backgroundImage:`url(${S.backgroundImage})`,backgroundSize:"cover"}:{background:S.background||"#fff"}}function fe(S){return{left:S.x/v.value.width*100+"%",top:S.y/v.value.height*100+"%",width:S.width/v.value.width*100+"%",height:S.height/v.value.height*100+"%"}}function de(S){var B,R;return{background:S.type==="shape"?(B=S.content)==null?void 0:B.fillColor:S.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:S.type==="shape"&&((R=S.content)==null?void 0:R.shapeType)==="circle"?"50%":void 0}}function ue(S){var B;return Gn(S.content||{},S.width||420,S.height||280,((B=u.value)==null?void 0:B.theme)||{})}return(S,B)=>(n(),l("div",tl,[e("div",ol,[B[2]||(B[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",nl,k(g.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:M,"data-tooltip":"Add slide","aria-label":"Add slide"},[...B[1]||(B[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",ll,[(n(!0),l(F,null,le(g.value,(R,ne)=>(n(),l("div",{key:R.id,class:Q(["slide-thumb-item",w(s).currentSlideId===R.id&&"active"]),draggable:"true",onClick:V=>p(R.id),onContextmenu:V=>J(V,R.id),onDragstart:V=>f(V,ne),onDragover:B[0]||(B[0]=Ae(()=>{},["prevent"])),onDrop:V=>O(V,ne)},[e("div",al,k(ne+1),1),e("div",{class:"slide-thumb",style:ae(se(R))},[(n(!0),l(F,null,le(R.elements.slice(0,6),V=>{var ve;return n(),l("div",{key:V.id,class:"mini-element-frame",style:ae(fe(V))},[V.type==="chart"?(n(),l("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${V.width||420} ${V.height||280}`,preserveAspectRatio:"none"},[ue(V).type==="bar"?(n(!0),l(F,{key:0},le(ue(V).cartesian.bars,me=>(n(),l("rect",{key:`mini-bar-${me.id}`,x:me.x,y:me.y,width:me.width,height:me.height,fill:me.color,rx:"6"},null,8,rl))),128)):ue(V).type==="line"?(n(),l("path",{key:1,d:ue(V).cartesian.linePath,stroke:((ve=ue(V).cartesian.points[0])==null?void 0:ve.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,dl)):(n(!0),l(F,{key:2},le(ue(V).circle.slices,me=>(n(),l("path",{key:`mini-slice-${me.id}`,d:me.path,fill:me.color},null,8,ul))),128))],8,sl)):(n(),l("div",{key:1,class:"mini-element",style:ae(de(V))},null,4))],4)}),128))],4),e("div",cl,[e("div",pl,k(R.title||`Slide ${ne+1}`),1),g.value.length>1?(n(),l("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:V=>_(V,R.id)},[...B[3]||(B[3]=[Ue('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,vl)):L("",!0)])],42,il))),128))]),e("button",{class:"add-slide-bottom",onClick:M},[...B[4]||(B[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),D(" Add Slide ",-1)])]),(n(),Be(gn,{to:"body"},[y.value.show?(n(),l("div",{key:0,class:"context-menu",style:ae({left:y.value.x+"px",top:y.value.y+"px"})},[e("button",{class:"ctx-item",onClick:W},"Duplicate"),e("button",{class:"ctx-item",onClick:a},"Move Up"),e("button",{class:"ctx-item",onClick:h},"Move Down"),B[5]||(B[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:K},"Delete Slide")],4)):L("",!0)]))]))}},fl=je(ml,[["__scopeId","data-v-30eea542"]]),gl={class:"layer-panel"},bl={class:"layer-header panel-section"},yl={class:"panel-title",style:{"margin-bottom":"0"}},hl={class:"layer-count"},xl={key:0,class:"layers-empty"},wl={key:1,class:"layers-list"},kl=["onClick"],Cl={class:"layer-type-icon"},Sl={class:"layer-name"},$l={class:"layer-actions"},Il=["onClick","data-tooltip"],Al={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ml={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},El=["onClick","data-tooltip"],Pl={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},zl={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Nl=["onClick"],Tl=["onClick"],_l=["onClick"],Ll={__name:"LayerPanel",setup(x){const s=Oe(),r=Ge(),u=A(()=>r.getProject(s.projectId)),v=A(()=>{var _,a;return(a=(_=u.value)==null?void 0:_.slides)==null?void 0:a.find(h=>h.id===s.currentSlideId)}),g=A(()=>{var _;return[...((_=v.value)==null?void 0:_.elements)||[]].sort((a,h)=>(h.zIndex||0)-(a.zIndex||0))});function y(_){s.selectElement(_)}function p(_){r.updateElement(s.projectId,s.currentSlideId,_.id,{visible:!_.visible})}function M(_){r.updateElement(s.projectId,s.currentSlideId,_.id,{locked:!_.locked})}function ee(_){r.reorderElement(s.projectId,s.currentSlideId,_,"up")}function J(_){r.reorderElement(s.projectId,s.currentSlideId,_,"down")}function T(_){r.deleteElement(s.projectId,s.currentSlideId,_),s.selectedElementId===_&&s.clearSelection()}function W(_){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[_]||"◆"}function K(_){var a,h,b;return(a=_.content)!=null&&a.text?_.content.text.slice(0,24):(h=_.content)!=null&&h.label?_.content.label:(b=_.content)!=null&&b.question?_.content.question.slice(0,24):_.type.charAt(0).toUpperCase()+_.type.slice(1)}return(_,a)=>(n(),l("div",gl,[e("div",bl,[e("div",yl,[a[0]||(a[0]=D(" Layers ",-1)),e("span",hl,k(g.value.length),1)])]),g.value.length===0?(n(),l("div",xl,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(n(),l("div",wl,[(n(!0),l(F,null,le(g.value,h=>(n(),l("div",{key:h.id,class:Q(["layer-item",w(s).selectedElementIds.includes(h.id)&&"selected",h.locked&&"locked",!h.visible&&"hidden"]),onClick:b=>y(h.id)},[e("span",Cl,k(W(h.type)),1),e("span",Sl,k(K(h)),1),e("div",$l,[e("button",{class:Q(["layer-action-btn",{active:h.visible}]),onClick:Ae(b=>p(h),["stop"]),"data-tooltip":h.visible?"Hide":"Show"},[h.visible?(n(),l("svg",Al,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(n(),l("svg",Ml,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,Il),e("button",{class:Q(["layer-action-btn",{active:h.locked}]),onClick:Ae(b=>M(h),["stop"]),"data-tooltip":h.locked?"Unlock":"Lock"},[h.locked?(n(),l("svg",Pl,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(n(),l("svg",zl,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,El),e("button",{class:"layer-action-btn",onClick:Ae(b=>ee(h.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,Nl),e("button",{class:"layer-action-btn",onClick:Ae(b=>J(h.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Tl),e("button",{class:"layer-action-btn danger",onClick:Ae(b=>T(h.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,_l)])],10,kl))),128))]))]))}},jl=je(Ll,[["__scopeId","data-v-7407acd8"]]),Bl={class:"panel-section"},Dl={class:"preset-toolbar"},ql=["value"],Rl=["value"],Fl=["value"],Ul={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},Vl=["onClick"],Ol={class:"preset-meta-chip muted"},Gl={key:1,class:"import-review"},Wl={class:"motion-scrubber-header"},Hl={class:"preset-toolbar compact"},Ql=["value"],Yl=["value"],Jl={class:"import-list"},Kl=["onUpdate:modelValue"],Xl={class:"import-item-title"},Zl={class:"preset-meta-chip"},ei={key:0,class:"preset-meta-chip muted"},ti={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(x,{emit:s}){const r=s;return(u,v)=>(n(),l("div",Bl,[v[13]||(v[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",Dl,[e("input",{value:x.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:v[0]||(v[0]=g=>r("update:searchQuery",g.target.value))},null,40,ql),e("select",{value:x.categoryFilter,class:"select",onChange:v[1]||(v[1]=g=>r("update:categoryFilter",g.target.value))},[v[8]||(v[8]=e("option",{value:"all"},"All categories",-1)),(n(!0),l(F,null,le(x.availableCategories,g=>(n(),l("option",{key:`library-${g}`,value:g},k(g),9,Fl))),128))],40,Rl),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[2]||(v[2]=g=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[3]||(v[3]=g=>r("export-presets"))},"Export")]),x.recentPresets.length?(n(),l("div",Ul,[v[9]||(v[9]=e("div",{class:"field-hint"},"Recently used",-1)),(n(!0),l(F,null,le(x.recentPresets,g=>(n(),l("div",{class:"preset-item",key:`recent-${g.id}`},[e("button",{type:"button",class:"preset-chip",onClick:y=>r("apply-preset",g)},k(g.name),9,Vl),e("span",Ol,"Used "+k(g.usageCount)+"x",1)]))),128))])):L("",!0),x.pendingImportedPresets.length?(n(),l("div",Gl,[e("div",Wl,[v[10]||(v[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[4]||(v[4]=g=>r("clear-imports"))},"Discard")]),e("div",Hl,[e("select",{value:x.importScopeFilter,class:"select",onChange:v[5]||(v[5]=g=>r("update:importScopeFilter",g.target.value))},[...v[11]||(v[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Ql),e("select",{value:x.importConflictMode,class:"select",onChange:v[6]||(v[6]=g=>r("update:importConflictMode",g.target.value))},[...v[12]||(v[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Yl),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:v[7]||(v[7]=g=>r("apply-imports"))},"Merge Selected")]),e("div",Jl,[(n(!0),l(F,null,le(x.filteredPendingImports,g=>(n(),l("label",{key:`pending-${g.id}`,class:"import-item"},[Z(e("input",{"onUpdate:modelValue":y=>g.selected=y,type:"checkbox"},null,8,Kl),[[pt,g.selected]]),e("span",Xl,k(g.name),1),e("span",Zl,k(g.scope),1),g.category?(n(),l("span",ei,k(g.category),1)):L("",!0)]))),128))])])):L("",!0)]))}},oi=je(ti,[["__scopeId","data-v-61f99273"]]),ni={class:"properties-panel"},li={key:1,class:"panel-section"},ii={class:"field-hint"},ai={class:"motion-scrubber-shell"},si={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},ri=["onClick"],di={class:"motion-preview"},ui={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},ci={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},pi={class:"motion-card-label"},vi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},mi={class:"form-group"},fi={class:"form-group"},gi={class:"form-group",style:{"margin-top":"var(--space-3)"}},bi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},yi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},hi={key:0,class:"preset-list"},xi=["onDragstart","onDragenter","onDrop"],wi=["onClick"],ki={key:0,class:"preset-meta-chip"},Ci=["onClick"],Si=["onClick"],$i=["onClick"],Ii={key:1,class:"preset-row preset-edit-row"},Ai=["onClick"],Mi={key:1,class:"field-hint"},Ei={key:2,class:"panel-section"},Pi={class:"slide-settings-tabs"},zi={key:0,class:"slide-settings-pane"},Ni={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ti={class:"form-group"},_i={class:"bg-type-tabs"},Li=["onClick"],ji={key:0,class:"color-row"},Bi=["value"],Di=["value"],qi={class:"slide-settings-subsection"},Ri={class:"canvas-size-grid"},Fi=["onClick"],Ui={class:"canvas-size-icon-shell"},Vi={class:"canvas-size-name"},Oi={class:"canvas-size-ratio"},Gi={class:"canvas-custom-card"},Wi={class:"canvas-custom-header"},Hi={class:"field-hint"},Qi={class:"canvas-custom-inputs"},Yi={class:"form-group"},Ji={class:"canvas-size-input-wrap"},Ki=["value"],Xi={class:"form-group"},Zi={class:"canvas-size-input-wrap"},ea=["value"],ta={class:"check-row canvas-size-lock"},oa={class:"slide-settings-subsection"},na={key:1,class:"slide-settings-pane"},la=["value"],ia={class:"form-group",style:{"margin-top":"var(--space-3)"}},aa=["value"],sa={class:"check-row"},ra=["checked"],da={key:2,class:"slide-settings-pane"},ua={class:"check-row"},ca=["checked"],pa={class:"check-row"},va=["checked"],ma={class:"check-row"},fa=["checked"],ga={class:"check-row"},ba=["checked"],ya={class:"check-row"},ha=["checked"],xa={class:"panel-section"},wa={class:"panel-title"},ka={class:"element-type-badge"},Ca={class:"geo-grid"},Sa={class:"form-group"},$a=["value"],Ia={class:"form-group"},Aa=["value"],Ma={class:"form-group"},Ea=["value"],Pa={class:"form-group"},za=["value"],Na={class:"form-group"},Ta=["value"],_a={class:"form-group"},La=["value"],ja={class:"panel-section"},Ba={class:"motion-scrubber-shell"},Da={class:"motion-card-grid"},qa=["onClick"],Ra={class:"motion-preview"},Fa={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Ua={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Va={class:"motion-card-label"},Oa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Ga={class:"form-group"},Wa=["value"],Ha={class:"form-group"},Qa=["value"],Ya={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ja={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Ka={key:0,class:"preset-list"},Xa=["onDragstart","onDragenter","onDrop"],Za=["onClick"],es={key:0,class:"preset-meta-chip"},ts=["onClick"],os=["onClick"],ns=["onClick"],ls={key:1,class:"preset-row preset-edit-row"},is=["onClick"],as={key:1,class:"field-hint"},ss={key:0,class:"panel-section"},rs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ds=["value"],us={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},cs={class:"form-group"},ps=["value"],vs={class:"form-group"},ms=["value"],fs={class:"form-group",style:{"margin-top":"var(--space-3)"}},gs=["value"],bs=["value"],ys={class:"form-group",style:{"margin-top":"var(--space-3)"}},hs={class:"align-btns"},xs=["onClick"],ws={class:"form-group",style:{"margin-top":"var(--space-3)"}},ks={class:"style-btns"},Cs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ss={class:"color-row"},$s=["value"],Is=["value"],As={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ms=["value"],Es={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ps={class:"form-group"},zs=["value"],Ns={class:"form-group"},Ts=["value"],_s={key:1,class:"panel-section"},Ls={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},js=["value"],Bs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ds=["value"],qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rs=["value"],Fs={class:"form-group"},Us=["value"],Vs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Os={class:"form-group"},Gs=["value"],Ws={class:"form-group"},Hs=["value"],Qs={key:2,class:"panel-section"},Ys={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Js=["value"],Ks={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xs={class:"color-row"},Zs=["value"],er=["value"],tr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},or={class:"color-row"},nr=["value"],lr=["value"],ir={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ar=["value"],sr={class:"form-group"},rr=["value"],dr={class:"form-group",style:{"margin-top":"var(--space-3)"}},ur=["value"],cr={key:3,class:"panel-section"},pr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vr=["value"],mr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fr=["value"],gr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},br=["value"],yr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},hr={class:"chart-data-actions"},xr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wr=["value","placeholder"],kr={class:"chart-palette-preview"},Cr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Sr={class:"form-group"},$r=["value"],Ir={class:"form-group"},Ar=["value"],Mr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Er={class:"form-group"},Pr=["value"],zr={class:"form-group"},Nr=["value"],Tr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},_r={class:"form-group"},Lr=["value"],jr={key:0,class:"form-group"},Br=["value"],Dr={key:1,class:"form-group"},qr=["value"],Rr={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Fr={class:"form-group"},Ur=["value"],Vr={class:"check-row",style:{"margin-top":"20px"}},Or=["checked"],Gr={class:"check-row"},Wr=["checked"],Hr={key:1,class:"check-row"},Qr=["checked"],Yr={class:"check-row"},Jr=["checked"],Kr={key:4,class:"panel-section"},Xr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Zr=["value"],ed={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},td=["value"],od={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nd=["value"],ld={key:0,class:"form-group"},id=["value"],ad={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},sd={class:"form-group"},rd=["value"],dd={class:"form-group"},ud=["value"],cd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},pd={class:"form-group"},vd=["value"],md={class:"form-group"},fd=["value"],gd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},bd={class:"form-group"},yd=["value"],hd={class:"form-group"},xd=["value"],wd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},kd={class:"form-group"},Cd=["value"],Sd=["value"],$d={class:"form-group"},Id=["value"],Ad={key:5,class:"panel-section"},Md={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ed=["value"],Pd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zd={class:"color-row"},Nd=["value"],Td=["value"],_d={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Ld={class:"form-group"},jd=["value"],Bd={class:"form-group"},Dd=["value"],qd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rd=["value"],Fd={class:"form-group"},Ud=["value"],Vd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Od={class:"form-group"},Gd=["value"],Wd={class:"form-group"},Hd=["value"],Qd={key:6,class:"panel-section"},Yd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Jd=["value"],Kd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xd=["value"],Zd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},eu=["value"],tu={class:"check-row"},ou=["checked"],nu={class:"check-row"},lu=["checked"],iu={class:"check-row"},au=["checked"],su={class:"check-row"},ru=["checked"],du={key:7,class:"panel-section"},uu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},cu=["value"],pu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vu=["value"],mu={class:"check-row"},fu=["checked"],gu={class:"check-row"},bu=["checked"],yu={class:"check-row"},hu=["checked"],xu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},wu={class:"form-group"},ku=["value"],Cu={class:"form-group"},Su=["value"],$u={class:"form-group",style:{"margin-top":"var(--space-3)"}},Iu=["value"],Au={key:8,class:"panel-section"},Mu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Eu=["value"],Pu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zu=["value"],Nu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tu=["value"],_u={class:"form-group"},Lu=["value"],ju={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Bu={class:"form-group"},Du=["value"],qu={class:"form-group"},Ru=["value"],Fu={class:"form-group",style:{"margin-top":"var(--space-3)"}},Uu=["value"],Vu={class:"panel-section"},Ou={class:"actions-list"},Gu={__name:"PropertiesPanel",setup(x){const s=Oe(),r=Ge(),u=A(()=>r.getProject(s.projectId)),v=A(()=>{var d,t;return(t=(d=u.value)==null?void 0:d.slides)==null?void 0:t.find(z=>z.id===s.currentSlideId)}),g=A(()=>{var d;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((d=u.value)==null?void 0:d.settings)||{}}}),y=A(()=>vt(g.value)),p=A(()=>bn(g.value)),M=A(()=>yn(y.value.width,y.value.height)),ee=N(!0),J=N("canvas"),T=A(()=>Array.isArray(g.value.motionPresets)?g.value.motionPresets:[]),W=A(()=>T.value.filter(d=>d.scope!=="group")),K=A(()=>T.value.filter(d=>d.scope==="group")),_=A(()=>{var t;const d=new Set(s.selectedElementIds);return(((t=v.value)==null?void 0:t.elements)||[]).filter(z=>d.has(z.id))}),a=A(()=>{var d,t;return s.selectedElementId?(t=(d=v.value)==null?void 0:d.elements)==null?void 0:t.find(z=>z.id===s.selectedElementId):null}),h=A(()=>s.multiSelection||!!a.value),b=A(()=>s.multiSelection?"group":"single"),f=A(()=>{var t,z;const d=(z=(t=a.value)==null?void 0:t.animations)==null?void 0:z[0];return{type:(d==null?void 0:d.type)||"auto",delay:Number((d==null?void 0:d.delay)||0),duration:Number((d==null?void 0:d.duration)||.64)}}),O=A(()=>{var ke,Ne;const d=_.value.map(Me=>{var Xe;return((Xe=Me.animations)==null?void 0:Xe[0])||null}),t=((ke=d[0])==null?void 0:ke.type)||"auto",z=Number(((Ne=d[0])==null?void 0:Ne.duration)||.64),X=d.every(Me=>((Me==null?void 0:Me.type)||"auto")===t),he=d.every(Me=>Number((Me==null?void 0:Me.duration)||.64)===z);return{type:X?t:"mixed",duration:he?z:.64}}),se=N(0),fe=N(0),de=N(""),ue=N(""),S=N(""),B=N(""),R=N(""),ne=N(""),V=N(""),ve=N(""),me=N(""),Ee=N(""),xe=N(""),ce=N(""),Pe=N(""),H=N("all"),te=N(null),re=N(null),Y=N([]),oe=N("all"),ye=N("replace"),Ce=N(""),ge=N({});qe(a,d=>{d?ge.value=JSON.parse(JSON.stringify(d)):ge.value={},(d==null?void 0:d.type)==="chart"&&(Ce.value="")},{immediate:!0,deep:!0});function Se(d){a.value&&r.updateElement(s.projectId,s.currentSlideId,a.value.id,d)}function c(d){if(!a.value)return;const t={...a.value.content,...d};Se({content:t})}function $(d,t){const z=parseFloat(t);isNaN(z)||Se({[d]:z})}const E=N({});qe(v,d=>{d&&(E.value={...d})},{immediate:!0});function $e(d){v.value&&r.updateSlide(s.projectId,v.value.id,d)}function we(d){if(!u.value)return;const t={...g.value,...d};r.updateProject(s.projectId,{settings:{...t,...Hn(t)}})}function Te(d){we({slideWidth:d.width,slideHeight:d.height})}function be(d,t){const z=Math.round(Number(t)||0);if(!z)return;const X={[`slide${d==="width"?"Width":"Height"}`]:z};if(ee.value){const he=y.value.width,ke=y.value.height;d==="width"?X.slideHeight=Math.round(z*(ke/he)):X.slideWidth=Math.round(z*(he/ke))}we(X)}const ze=A(()=>{var d;return hn(((d=u.value)==null?void 0:d.theme)||{})}),Ve=A(()=>{var t,z;if(((t=a.value)==null?void 0:t.type)!=="chart")return[];const d=((z=a.value.content)==null?void 0:z.paletteText)||ze.value.paletteText;return Jn(d)});function Ye(d){const t=Qn(d,{fallbackToDefault:!1});return t.length?Yn(t):""}function We(d){var z;if(((z=a.value)==null?void 0:z.type)!=="chart")return;const t=Ye(d);t&&(c({dataText:t}),Ce.value="")}async function dt(d){var X;const t=d.target,z=(X=t==null?void 0:t.files)==null?void 0:X[0];if(z)try{const he=await z.text();We(he)}finally{t&&(t.value="")}}function P(){var d;(d=re.value)==null||d.click()}function i(){var t,z;if(((t=a.value)==null?void 0:t.type)!=="chart")return;const d=Ye(((z=a.value.content)==null?void 0:z.dataText)||"");d&&c({dataText:d})}function j(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&c({...ze.value})}function ie(){var d;((d=a.value)==null?void 0:d.type)==="chart"&&c({paletteText:ze.value.paletteText})}function m(d){return String(d||"").split(",").map(t=>t.trim()).filter(Boolean)}function I(d){const t=(d==null?void 0:d.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((d==null?void 0:d.name)||"Imported Preset").trim()||"Imported Preset",category:String((d==null?void 0:d.category)||"").trim(),tags:Array.isArray(d==null?void 0:d.tags)?d.tags.map(z=>String(z).trim()).filter(Boolean):m(d==null?void 0:d.tags),type:String((d==null?void 0:d.type)||"auto"),delay:Math.max(0,Number(d==null?void 0:d.delay)||0),duration:Math.max(.1,Number(d==null?void 0:d.duration)||.72),stepDelay:Math.max(0,Number(d==null?void 0:d.stepDelay)||0)}}const q=A(()=>[...new Set(T.value.map(t=>t.category).filter(Boolean))].sort((t,z)=>t.localeCompare(z))),G=A(()=>[...T.value].filter(d=>Number(d.usageCount||0)>0).sort((d,t)=>{const z=Number(t.lastUsedAt||0)-Number(d.lastUsedAt||0);return z!==0?z:Number(t.usageCount||0)-Number(d.usageCount||0)}).slice(0,6)),C=A(()=>oe.value==="all"?Y.value:Y.value.filter(d=>d.scope===oe.value));function Ie(d){const t=Pe.value.trim().toLowerCase(),z=H.value;return z==="all"||(d.category||"")===z?t?[d.name,d.category,...d.tags||[]].filter(Boolean).some(he=>String(he).toLowerCase().includes(t)):!0:!1}const De=A(()=>W.value.filter(Ie)),Le=A(()=>K.value.filter(Ie)),et=A(()=>G.value.filter(d=>b.value==="group"?d.scope==="group":d.scope!=="group"));function _e(d){const t=String(d.name||"").trim();if(!t)return;const z=T.value.findIndex(ke=>ke.scope===d.scope&&ke.name.toLowerCase()===t.toLowerCase()),X={...d,id:z>=0?T.value[z].id:`motion-${Date.now()}`,name:t,category:String(d.category||"").trim(),tags:Array.isArray(d.tags)?d.tags:m(d.tags)},he=[...T.value];z>=0?he.splice(z,1,X):he.push(X),we({motionPresets:he})}function tt(d,t){const z=T.value.map(X=>X.id===d?{...X,...t}:X);we({motionPresets:z})}function Re(d){const t=T.value.find(z=>z.id===d);t&&tt(d,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function He(d,t){const z=T.value.filter(Ne=>Ne.scope===d).map(Ne=>Ne.name.toLowerCase()),X=String(t||"Preset").trim()||"Preset";if(!z.includes(X.toLowerCase()))return X;let he=2,ke=`${X} Copy`;for(;z.includes(ke.toLowerCase());)ke=`${X} Copy ${he}`,he+=1;return ke}function Qe(d){we({motionPresets:T.value.filter(t=>t.id!==d)}),S.value===d&&(S.value="",B.value="")}function ot(d){_e({...d,id:void 0,name:He(d.scope,d.name)})}function nt(d){S.value=d.id,B.value=d.name,R.value=d.category||"",ne.value=Array.isArray(d.tags)?d.tags.join(", "):""}function lt(){S.value="",B.value="",R.value="",ne.value=""}function bt(d){const t=String(B.value||"").trim();t&&(tt(d,{name:t,category:String(R.value||"").trim(),tags:m(ne.value)}),lt())}function wn(d,t,z){if(!t||!z||t===z)return;const X=T.value.filter(Fe=>Fe.scope===d),he=X.findIndex(Fe=>Fe.id===t),ke=X.findIndex(Fe=>Fe.id===z);if(he===-1||ke===-1)return;const Ne=[...X],[Me]=Ne.splice(he,1);Ne.splice(ke,0,Me);const Xe=T.value.filter(Fe=>Fe.scope!==d),st=[];T.value.forEach(Fe=>{if(Fe.scope===d){Ne.length&&st.push(Ne.shift());return}const ut=Xe.shift();ut&&st.push(ut)}),we({motionPresets:st})}function yt(d){V.value=d.id,ve.value=d.id}function ht(d){V.value&&(ve.value=d.id)}function xt(d){V.value&&(wn(d.scope,V.value,d.id),V.value="",ve.value="")}function wt(){V.value="",ve.value=""}function kt(){se.value+=1}function Ct(){fe.value+=1}function St(d,t){$e({[d]:t})}function kn(d){const t=Math.max(0,Number(d)||0);$e({duration:t})}function mt(d){var X;if(!a.value)return;const z={...((X=a.value.animations)==null?void 0:X[0])||{type:"auto",delay:0,duration:.64},...d};if(z.type==="auto"){Se({animations:[]});return}Se({animations:[{type:z.type||"none",delay:Math.max(0,Number(z.delay)||0),duration:Math.max(.1,Number(z.duration)||.64)}]})}const Je=N("stagger-in"),it=N(0),at=N(.12),Ke=N(.72);qe(_,d=>{d.length&&(Je.value=O.value.type==="mixed"?"stagger-in":O.value.type,Ke.value=O.value.duration)},{immediate:!0,deep:!0});function Cn(){if(!_.value.length)return;[..._.value].sort((t,z)=>(t.y||0)!==(z.y||0)?(t.y||0)-(z.y||0):(t.x||0)-(z.x||0)).forEach((t,z)=>{if(Je.value==="auto"){r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:Je.value,delay:Math.max(0,Number(it.value)||0)+z*Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(Ke.value)||.72)}]})})}function $t(d){Je.value=d.type||"stagger-in",it.value=Number(d.delay||0),at.value=Number(d.stepDelay||0),Ke.value=Number(d.duration||.72),Re(d.id),Ct()}function Sn(){_e({scope:"group",name:ue.value,category:xe.value,tags:m(ce.value),type:Je.value,delay:Math.max(0,Number(it.value)||0),stepDelay:Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(Ke.value)||.72)}),ue.value="",xe.value="",ce.value=""}function It(d){mt({type:d.type||"auto",delay:Number(d.delay||0),duration:Number(d.duration||.72)}),Re(d.id),kt()}function $n(){_e({scope:"single",name:de.value,category:me.value,tags:m(Ee.value),type:f.value.type,delay:Math.max(0,Number(f.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(f.value.duration)||.72)}),de.value="",me.value="",Ee.value=""}function In(){var d;(d=te.value)==null||d.click()}async function An(d){var X;const t=d.target,z=(X=t==null?void 0:t.files)==null?void 0:X[0];if(z)try{const he=await z.text(),ke=JSON.parse(he),Ne=Array.isArray(ke)?ke:Array.isArray(ke.motionPresets)?ke.motionPresets:[];if(!Ne.length)return;Y.value=Ne.map(Me=>({...I(Me),selected:!0,importName:String((Me==null?void 0:Me.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function At(){Y.value=[]}function Mn(){const d=Y.value.filter(z=>z.selected);if(!d.length)return;const t=[...T.value];d.forEach(z=>{const X=t.findIndex(he=>he.scope===z.scope&&he.name.toLowerCase()===z.name.toLowerCase());if(X>=0){ye.value==="replace"?t.splice(X,1,{...t[X],...z,id:t[X].id}):t.push({...z,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:He(z.scope,z.name)});return}t.push(z)}),we({motionPresets:t}),At()}function En(){var ke;if(!T.value.length)return;const d={version:1,exportedAt:new Date().toISOString(),motionPresets:T.value.map(({id:Ne,...Me})=>Me)},t=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),z=URL.createObjectURL(t),X=document.createElement("a"),he=String(((ke=u.value)==null?void 0:ke.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";X.href=z,X.download=`${he}-motion-presets.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(z)}const Pn=A(()=>[{id:`single-${se.value}`,delay:Math.max(0,Number(f.value.delay)||0),duration:Math.max(.1,Number(f.value.duration)||.72),type:f.value.type}]),zn=A(()=>Array.from({length:Math.min(Math.max(_.value.length,3),5)},(d,t)=>({id:`group-${fe.value}-${t}`,delay:Math.max(0,Number(it.value)||0)+t*Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(Ke.value)||.72),type:Je.value}))),Mt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Et=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(d,t)=>{var z,X,he,ke,Ne,Me,Xe,st,Fe,ut,Pt,zt,Nt,Tt,_t,Lt,jt,Bt,Dt,qt,Rt,Ft,Ut,Vt,Ot,Gt,Wt,Ht,Qt,Yt,Jt,Kt,Xt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,mo,fo,go,bo,yo,ho,xo,wo,ko,Co,So,$o,Io,Ao,Mo,Eo,Po,zo,No,To,_o,Lo,jo,Bo,Do,qo,Ro,Fo,Uo,Vo,Oo,Go,Wo,Ho,Qo,Yo,Jo,Ko,Xo,Zo,en,tn,on,nn,ln,an,sn,rn,dn,un;return n(),l("div",ni,[e("input",{ref_key:"presetImportInput",ref:te,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:An},null,544),e("input",{ref_key:"chartImportInput",ref:re,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:dt},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),h.value?(n(),Be(oi,{key:0,"search-query":Pe.value,"category-filter":H.value,"available-categories":q.value,"recent-presets":et.value,"pending-imported-presets":Y.value,"filtered-pending-imports":C.value,"import-scope-filter":oe.value,"import-conflict-mode":ye.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>Pe.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>H.value=o),onTriggerImport:In,onExportPresets:En,onApplyPreset:t[2]||(t[2]=o=>b.value==="group"?$t(o):It(o)),onClearImports:At,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>oe.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>ye.value=o),onApplyImports:Mn},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):L("",!0),w(s).multiSelection?(n(),l("div",li,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",ii,k(_.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",ai,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ct},"Replay")]),(n(),l("div",{class:"motion-scrubber-stage",key:`group-preview-${fe.value}`},[(n(!0),l(F,null,le(zn.value,o=>(n(),l("span",{key:o.id,class:Q(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ae({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",si,[(n(),l(F,null,le(Mt,o=>e("button",{key:`group-${o.value}`,type:"button",class:Q(["motion-card",Je.value===o.value&&"active"]),onClick:U=>Je.value=o.value},[e("span",di,[e("span",{class:Q(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(n(),l("span",ui)):L("",!0),o.value==="stagger-in"?(n(),l("span",ci)):L("",!0)]),e("span",pi,k(o.label),1)],10,ri)),64))]),e("div",vi,[e("div",mi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),Z(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>it.value=o),class:"input"},null,512),[[pe,it.value]])]),e("div",fi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),Z(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>at.value=o),class:"input"},null,512),[[pe,at.value]])])]),e("div",gi,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),Z(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>Ke.value=o),class:"input"},null,512),[[pe,Ke.value]])]),e("div",bi,[Z(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>ue.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[pe,ue.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Sn},"Save")]),e("div",yi,[Z(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>xe.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[pe,xe.value]]),Z(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>ce.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[pe,ce.value]])]),Le.value.length?(n(),l("div",hi,[(n(!0),l(F,null,le(Le.value,o=>(n(),l("div",{key:o.id,class:Q(["preset-item",V.value===o.id&&"dragging",ve.value===o.id&&V.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:U=>yt(o),onDragenter:Ae(U=>ht(o),["prevent"]),onDragover:t[14]||(t[14]=Ae(()=>{},["prevent"])),onDrop:Ae(U=>xt(o),["prevent"]),onDragend:wt},[e("button",{type:"button",class:"preset-chip",onClick:U=>$t(o)},k(o.name),9,wi),o.category?(n(),l("span",ki,k(o.category),1)):L("",!0),(n(!0),l(F,null,le(o.tags||[],U=>(n(),l("span",{key:`${o.id}-${U}`,class:"preset-meta-chip muted"},"#"+k(U),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:U=>ot(o)},"Duplicate",8,Ci),e("button",{type:"button",class:"preset-mini-btn",onClick:U=>nt(o)},"Rename",8,Si),e("button",{type:"button",class:"preset-mini-btn danger",onClick:U=>Qe(o.id)},"Delete",8,$i),S.value===o.id?(n(),l("div",Ii,[Z(e("input",{"onUpdate:modelValue":t[11]||(t[11]=U=>B.value=U),class:"input"},null,512),[[pe,B.value]]),Z(e("input",{"onUpdate:modelValue":t[12]||(t[12]=U=>R.value=U),class:"input",placeholder:"Category"},null,512),[[pe,R.value]]),Z(e("input",{"onUpdate:modelValue":t[13]||(t[13]=U=>ne.value=U),class:"input",placeholder:"Tags, comma separated"},null,512),[[pe,ne.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:U=>bt(o.id)},"Save",8,Ai),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:lt},"Cancel")])):L("",!0)],42,xi))),128))])):K.value.length?(n(),l("div",Mi,"No group presets match the current search.")):L("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Cn}," Apply Sequence to Selection ")])):a.value?(n(),l(F,{key:3},[e("div",xa,[e("div",wa,[t[179]||(t[179]=D(" Position & Size ",-1)),e("span",ka,k(a.value.type),1)]),e("div",Ca,[e("div",Sa,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(a.value.x),class:"input",onChange:t[39]||(t[39]=o=>$("x",o.target.value))},null,40,$a)]),e("div",Ia,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(a.value.y),class:"input",onChange:t[40]||(t[40]=o=>$("y",o.target.value))},null,40,Aa)]),e("div",Ma,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(a.value.width),class:"input",onChange:t[41]||(t[41]=o=>$("width",o.target.value))},null,40,Ea)]),e("div",Pa,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(a.value.height),class:"input",onChange:t[42]||(t[42]=o=>$("height",o.target.value))},null,40,za)]),e("div",Na,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(a.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>$("rotation",o.target.value))},null,40,Ta)]),e("div",_a,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:a.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>$("opacity",o.target.value))},null,40,La)])])]),e("div",ja,[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",Ba,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:kt},"Replay")]),(n(),l("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${se.value}`},[(n(!0),l(F,null,le(Pn.value,o=>(n(),l("span",{key:o.id,class:Q(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ae({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Da,[(n(),l(F,null,le(Mt,o=>e("button",{key:o.value,type:"button",class:Q(["motion-card",f.value.type===o.value&&"active"]),onClick:U=>mt({type:o.value})},[e("span",Ra,[e("span",{class:Q(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(n(),l("span",Fa)):L("",!0),o.value==="stagger-in"?(n(),l("span",Ua)):L("",!0)]),e("span",Va,k(o.label),1)],10,qa)),64))]),e("div",Oa,[e("div",Ga,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:f.value.delay,class:"input",onChange:t[45]||(t[45]=o=>mt({delay:o.target.value}))},null,40,Wa)]),e("div",Ha,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:f.value.duration,class:"input",onChange:t[46]||(t[46]=o=>mt({duration:o.target.value}))},null,40,Qa)])]),e("div",Ya,[Z(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>de.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[pe,de.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:$n},"Save")]),e("div",Ja,[Z(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>me.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[pe,me.value]]),Z(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>Ee.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[pe,Ee.value]])]),De.value.length?(n(),l("div",Ka,[(n(!0),l(F,null,le(De.value,o=>(n(),l("div",{key:o.id,class:Q(["preset-item",V.value===o.id&&"dragging",ve.value===o.id&&V.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:U=>yt(o),onDragenter:Ae(U=>ht(o),["prevent"]),onDragover:t[53]||(t[53]=Ae(()=>{},["prevent"])),onDrop:Ae(U=>xt(o),["prevent"]),onDragend:wt},[e("button",{type:"button",class:"preset-chip",onClick:U=>It(o)},k(o.name),9,Za),o.category?(n(),l("span",es,k(o.category),1)):L("",!0),(n(!0),l(F,null,le(o.tags||[],U=>(n(),l("span",{key:`${o.id}-${U}`,class:"preset-meta-chip muted"},"#"+k(U),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:U=>ot(o)},"Duplicate",8,ts),e("button",{type:"button",class:"preset-mini-btn",onClick:U=>nt(o)},"Rename",8,os),e("button",{type:"button",class:"preset-mini-btn danger",onClick:U=>Qe(o.id)},"Delete",8,ns),S.value===o.id?(n(),l("div",ls,[Z(e("input",{"onUpdate:modelValue":t[50]||(t[50]=U=>B.value=U),class:"input"},null,512),[[pe,B.value]]),Z(e("input",{"onUpdate:modelValue":t[51]||(t[51]=U=>R.value=U),class:"input",placeholder:"Category"},null,512),[[pe,R.value]]),Z(e("input",{"onUpdate:modelValue":t[52]||(t[52]=U=>ne.value=U),class:"input",placeholder:"Tags, comma separated"},null,512),[[pe,ne.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:U=>bt(o.id)},"Save",8,is),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:lt},"Cancel")])):L("",!0)],42,Xa))),128))])):W.value.length?(n(),l("div",as,"No single-element presets match the current search.")):L("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))]),["text","heading"].includes(a.value.type)?(n(),l("div",ss,[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",rs,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(st=a.value.content)==null?void 0:st.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>c({text:o.target.value}))},null,40,ds)]),e("div",us,[e("div",cs,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(Fe=a.value.content)==null?void 0:Fe.fontSize,class:"input",onChange:t[55]||(t[55]=o=>c({fontSize:+o.target.value}))},null,40,ps)]),e("div",vs,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(ut=a.value.content)==null?void 0:ut.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>c({fontWeight:o.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,ms)])]),e("div",fs,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Pt=a.value.content)==null?void 0:Pt.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>c({fontFamily:o.target.value}))},[(n(),l(F,null,le(Et,o=>e("option",{key:o,value:o},k(o.split(",")[0]),9,bs)),64))],40,gs)]),e("div",ys,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",hs,[(n(),l(F,null,le(["left","center","right","justify"],o=>{var U;return e("button",{key:o,class:Q(["align-btn",((U=a.value.content)==null?void 0:U.textAlign)===o&&"active"]),onClick:cn=>c({textAlign:o})},k(o[0].toUpperCase()),11,xs)}),64))])]),e("div",ws,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",ks,[e("button",{class:Q(["style-btn",((zt=a.value.content)==null?void 0:zt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var U;return c({fontStyle:((U=a.value.content)==null?void 0:U.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:Q(["style-btn",((Nt=a.value.content)==null?void 0:Nt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var U;return c({textDecoration:((U=a.value.content)==null?void 0:U.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:Q(["style-btn",((Tt=a.value.content)==null?void 0:Tt.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var U;return c({textDecoration:((U=a.value.content)==null?void 0:U.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",Cs,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",Ss,[e("input",{type:"color",value:((_t=a.value.content)==null?void 0:_t.color)||"#000",onInput:t[61]||(t[61]=o=>c({color:o.target.value})),class:"color-input-native"},null,40,$s),e("input",{value:((Lt=a.value.content)==null?void 0:Lt.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>c({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Is)])]),e("div",As,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((jt=a.value.content)==null?void 0:jt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>c({lineHeight:+o.target.value}))},null,40,Ms)]),e("div",Es,[e("div",Ps,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Bt=a.value.content)==null?void 0:Bt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>c({textTransform:o.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,zs)]),e("div",Ns,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Dt=a.value.content)==null?void 0:Dt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>c({letterSpacing:+o.target.value}))},null,40,Ts)])])])):L("",!0),a.value.type==="image"?(n(),l("div",_s,[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",Ls,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(qt=a.value.content)==null?void 0:qt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>c({src:o.target.value}))},null,40,js)]),e("div",Bs,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Rt=a.value.content)==null?void 0:Rt.alt,class:"input",onInput:t[67]||(t[67]=o=>c({alt:o.target.value}))},null,40,Ds)]),e("div",qs,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Ft=a.value.content)==null?void 0:Ft.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>c({objectFit:o.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Rs)]),e("div",Fs,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((Ut=a.value.content)==null?void 0:Ut.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>c({borderRadius:+o.target.value}))},null,40,Us)]),e("div",Vs,[e("div",Os,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Vt=a.value.content)==null?void 0:Vt.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>c({borderWidth:+o.target.value}))},null,40,Gs)]),e("div",Ws,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Ot=a.value.content)==null?void 0:Ot.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>c({borderColor:o.target.value}))},null,40,Hs)])])])):L("",!0),a.value.type==="shape"?(n(),l("div",Qs,[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Ys,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((Gt=a.value.content)==null?void 0:Gt.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>c({shapeType:o.target.value}))},[...t[215]||(t[215]=[Ue('<option value="rectangle" data-v-4f48861a>Rectangle</option><option value="circle" data-v-4f48861a>Circle</option><option value="triangle" data-v-4f48861a>Triangle</option><option value="star" data-v-4f48861a>Star</option><option value="arrow" data-v-4f48861a>Arrow</option><option value="diamond" data-v-4f48861a>Diamond</option>',6)])],40,Js)]),e("div",Ks,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Xs,[e("input",{type:"color",value:((Wt=a.value.content)==null?void 0:Wt.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>c({fillColor:o.target.value})),class:"color-input-native"},null,40,Zs),e("input",{value:((Ht=a.value.content)==null?void 0:Ht.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>c({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,er)])]),e("div",tr,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",or,[e("input",{type:"color",value:((Qt=a.value.content)==null?void 0:Qt.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>c({borderColor:o.target.value})),class:"color-input-native"},null,40,nr),e("input",{value:((Yt=a.value.content)==null?void 0:Yt.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>c({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,lr)])]),e("div",ir,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Jt=a.value.content)==null?void 0:Jt.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>c({borderWidth:+o.target.value}))},null,40,ar)]),e("div",sr,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Kt=a.value.content)==null?void 0:Kt.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>c({borderRadius:+o.target.value}))},null,40,rr)]),e("div",dr,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((Xt=a.value.content)==null?void 0:Xt.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>c({opacity:+o.target.value}))},null,40,ur)])])):L("",!0),a.value.type==="chart"?(n(),l("div",cr,[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",pr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((Zt=a.value.content)==null?void 0:Zt.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=o=>c({chartType:o.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,vr)]),e("div",mr,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((eo=a.value.content)==null?void 0:eo.title)||"",class:"input",onInput:t[81]||(t[81]=o=>c({title:o.target.value}))},null,40,fr)]),e("div",gr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((to=a.value.content)==null?void 0:to.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=o=>c({dataText:o.target.value}))},null,40,br),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:i},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:P},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",yr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),Z(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=o=>Ce.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[pe,Ce.value]]),e("div",hr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=o=>We(Ce.value))},"Convert pasted data")])]),e("div",xr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((oo=a.value.content)==null?void 0:oo.paletteText)||"",class:"input",placeholder:ze.value.paletteText,onInput:t[85]||(t[85]=o=>c({paletteText:o.target.value}))},null,40,wr),e("div",kr,[(n(!0),l(F,null,le(Ve.value,(o,U)=>(n(),l("span",{key:`chart-palette-${U}`,class:"chart-palette-swatch",style:ae({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ie},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:j},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Cr,[e("div",Sr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((no=a.value.content)==null?void 0:no.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=o=>c({backgroundColor:o.target.value}))},null,40,$r)]),e("div",Ir,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((lo=a.value.content)==null?void 0:lo.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=o=>c({textColor:o.target.value}))},null,40,Ar)])]),e("div",Mr,[e("div",Er,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((io=a.value.content)==null?void 0:io.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=o=>c({gridColor:o.target.value}))},null,40,Pr)]),e("div",zr,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((ao=a.value.content)==null?void 0:ao.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=o=>c({borderColor:o.target.value}))},null,40,Nr)])]),e("div",Tr,[e("div",_r,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((so=a.value.content)==null?void 0:so.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=o=>c({borderWidth:+o.target.value}))},null,40,Lr)]),((ro=a.value.content)==null?void 0:ro.chartType)!=="circle"?(n(),l("div",jr,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((uo=a.value.content)==null?void 0:uo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=o=>c({maxValue:o.target.value}))},null,40,Br)])):(n(),l("div",Dr,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((co=a.value.content)==null?void 0:co.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=o=>c({innerRadius:+o.target.value}))},null,40,qr)]))]),((po=a.value.content)==null?void 0:po.chartType)==="line"?(n(),l("div",Rr,[e("div",Fr,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((vo=a.value.content)==null?void 0:vo.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=o=>c({strokeWidth:+o.target.value}))},null,40,Ur)]),e("label",Vr,[e("input",{type:"checkbox",checked:!!((mo=a.value.content)!=null&&mo.showArea),onChange:t[94]||(t[94]=o=>c({showArea:o.target.checked}))},null,40,Or),t[239]||(t[239]=D(" Show area fill ",-1))])])):L("",!0),e("label",Gr,[e("input",{type:"checkbox",checked:((fo=a.value.content)==null?void 0:fo.showLegend)!==!1,onChange:t[95]||(t[95]=o=>c({showLegend:o.target.checked}))},null,40,Wr),t[240]||(t[240]=D(" Show legend ",-1))]),((go=a.value.content)==null?void 0:go.chartType)!=="circle"?(n(),l("label",Hr,[e("input",{type:"checkbox",checked:((bo=a.value.content)==null?void 0:bo.showGrid)!==!1,onChange:t[96]||(t[96]=o=>c({showGrid:o.target.checked}))},null,40,Qr),t[241]||(t[241]=D(" Show grid lines ",-1))])):L("",!0),e("label",Yr,[e("input",{type:"checkbox",checked:((yo=a.value.content)==null?void 0:yo.showValues)!==!1,onChange:t[97]||(t[97]=o=>c({showValues:o.target.checked}))},null,40,Jr),t[242]||(t[242]=D(" Show values ",-1))])])):L("",!0),a.value.type==="button"?(n(),l("div",Kr,[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Xr,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(ho=a.value.content)==null?void 0:ho.label,class:"input",onInput:t[98]||(t[98]=o=>c({label:o.target.value}))},null,40,Zr)]),e("div",ed,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((xo=a.value.content)==null?void 0:xo.variant)||"primary",class:"select",onChange:t[99]||(t[99]=o=>c({variant:o.target.value}))},[...t[245]||(t[245]=[Ue('<option value="primary" data-v-4f48861a>Primary</option><option value="secondary" data-v-4f48861a>Secondary</option><option value="outline" data-v-4f48861a>Outline</option><option value="ghost" data-v-4f48861a>Ghost</option><option value="danger" data-v-4f48861a>Danger</option>',5)])],40,td)]),e("div",od,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((wo=a.value.content)==null?void 0:wo.action)||"none",class:"select",onChange:t[100]||(t[100]=o=>c({action:o.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,nd)]),(ko=a.value.content)!=null&&ko.action&&a.value.content.action!=="none"?(n(),l("div",ld,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Co=a.value.content)==null?void 0:Co.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=o=>c({target:o.target.value}))},null,40,id)])):L("",!0),e("div",ad,[e("div",sd,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((So=a.value.content)==null?void 0:So.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=o=>c({bgColor:o.target.value}))},null,40,rd)]),e("div",dd,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:(($o=a.value.content)==null?void 0:$o.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=o=>c({textColor:o.target.value}))},null,40,ud)])]),e("div",cd,[e("div",pd,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Io=a.value.content)==null?void 0:Io.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=o=>c({borderColor:o.target.value}))},null,40,vd)]),e("div",md,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Ao=a.value.content)==null?void 0:Ao.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=o=>c({borderRadius:+o.target.value}))},null,40,fd)])]),e("div",gd,[e("div",bd,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Mo=a.value.content)==null?void 0:Mo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=o=>c({fontSize:+o.target.value}))},null,40,yd)]),e("div",hd,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Eo=a.value.content)==null?void 0:Eo.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=o=>c({fontWeight:+o.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,xd)])]),e("div",wd,[e("div",kd,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Po=a.value.content)==null?void 0:Po.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=o=>c({fontFamily:o.target.value}))},[(n(),l(F,null,le(Et,o=>e("option",{key:`btn-${o}`,value:o},k(o.split(",")[0]),9,Sd)),64))],40,Cd)]),e("div",$d,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((zo=a.value.content)==null?void 0:zo.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=o=>c({letterSpacing:+o.target.value}))},null,40,Id)])])])):L("",!0),a.value.type==="hotspot"?(n(),l("div",Ad,[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Md,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((No=a.value.content)==null?void 0:No.icon)||"?",class:"select",onChange:t[110]||(t[110]=o=>c({icon:o.target.value}))},[...t[260]||(t[260]=[Ue('<option value="?" data-v-4f48861a>? (Info)</option><option value="!" data-v-4f48861a>! (Alert)</option><option value="+" data-v-4f48861a>+ (Plus)</option><option value="i" data-v-4f48861a>i (Info)</option><option value="✦" data-v-4f48861a>✦ (Star)</option>',5)])],40,Ed)]),e("div",Pd,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",zd,[e("input",{type:"color",value:((To=a.value.content)==null?void 0:To.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=o=>c({bgColor:o.target.value})),class:"color-input-native"},null,40,Nd),e("input",{value:((_o=a.value.content)==null?void 0:_o.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=o=>c({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Td)])]),e("div",_d,[e("div",Ld,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Lo=a.value.content)==null?void 0:Lo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=o=>c({iconColor:o.target.value}))},null,40,jd)]),e("div",Bd,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((jo=a.value.content)==null?void 0:jo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=o=>c({borderRadius:+o.target.value}))},null,40,Dd)])]),e("div",qd,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Bo=a.value.content)==null?void 0:Bo.popupTitle,class:"input",onInput:t[115]||(t[115]=o=>c({popupTitle:o.target.value}))},null,40,Rd)]),e("div",Fd,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Do=a.value.content)==null?void 0:Do.popupContent,class:"textarea",onInput:t[116]||(t[116]=o=>c({popupContent:o.target.value}))},null,40,Ud)]),e("div",Vd,[e("div",Od,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((qo=a.value.content)==null?void 0:qo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>c({popupBgColor:o.target.value}))},null,40,Gd)]),e("div",Wd,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Ro=a.value.content)==null?void 0:Ro.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>c({popupTextColor:o.target.value}))},null,40,Hd)])])])):L("",!0),a.value.type==="video"?(n(),l("div",Qd,[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",Yd,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Fo=a.value.content)==null?void 0:Fo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=o=>c({src:o.target.value}))},null,40,Jd)]),e("div",Kd,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(Uo=a.value.content)==null?void 0:Uo.poster,class:"input",onInput:t[120]||(t[120]=o=>c({poster:o.target.value}))},null,40,Xd)]),e("div",Zd,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Vo=a.value.content)==null?void 0:Vo.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=o=>c({objectFit:o.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,eu)]),e("label",tu,[e("input",{type:"checkbox",checked:(Oo=a.value.content)==null?void 0:Oo.autoplay,onChange:t[122]||(t[122]=o=>c({autoplay:o.target.checked}))},null,40,ou),t[274]||(t[274]=D(" Autoplay ",-1))]),e("label",nu,[e("input",{type:"checkbox",checked:((Go=a.value.content)==null?void 0:Go.controls)??!0,onChange:t[123]||(t[123]=o=>c({controls:o.target.checked}))},null,40,lu),t[275]||(t[275]=D(" Show Controls ",-1))]),e("label",iu,[e("input",{type:"checkbox",checked:(Wo=a.value.content)==null?void 0:Wo.loop,onChange:t[124]||(t[124]=o=>c({loop:o.target.checked}))},null,40,au),t[276]||(t[276]=D(" Loop ",-1))]),e("label",su,[e("input",{type:"checkbox",checked:(Ho=a.value.content)==null?void 0:Ho.muted,onChange:t[125]||(t[125]=o=>c({muted:o.target.checked}))},null,40,ru),t[277]||(t[277]=D(" Muted ",-1))])])):L("",!0),a.value.type==="audio"?(n(),l("div",du,[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",uu,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(Qo=a.value.content)==null?void 0:Qo.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=o=>c({src:o.target.value}))},null,40,cu)]),e("div",pu,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Yo=a.value.content)==null?void 0:Yo.label,class:"input",onInput:t[127]||(t[127]=o=>c({label:o.target.value}))},null,40,vu)]),e("label",mu,[e("input",{type:"checkbox",checked:(Jo=a.value.content)==null?void 0:Jo.autoplay,onChange:t[128]||(t[128]=o=>c({autoplay:o.target.checked}))},null,40,fu),t[281]||(t[281]=D(" Autoplay ",-1))]),e("label",gu,[e("input",{type:"checkbox",checked:((Ko=a.value.content)==null?void 0:Ko.controls)!==!1,onChange:t[129]||(t[129]=o=>c({controls:o.target.checked}))},null,40,bu),t[282]||(t[282]=D(" Show Controls ",-1))]),e("label",yu,[e("input",{type:"checkbox",checked:(Xo=a.value.content)==null?void 0:Xo.loop,onChange:t[130]||(t[130]=o=>c({loop:o.target.checked}))},null,40,hu),t[283]||(t[283]=D(" Loop ",-1))]),e("div",xu,[e("div",wu,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Zo=a.value.content)==null?void 0:Zo.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=o=>c({accentColor:o.target.value}))},null,40,ku)]),e("div",Cu,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((en=a.value.content)==null?void 0:en.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=o=>c({textColor:o.target.value}))},null,40,Su)])]),e("div",$u,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((tn=a.value.content)==null?void 0:tn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=o=>c({bgColor:o.target.value}))},null,40,Iu)])])):L("",!0),a.value.type==="quiz"?(n(),l("div",Au,[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Mu,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(on=a.value.content)==null?void 0:on.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=o=>c({question:o.target.value}))},null,40,Eu)]),e("div",Pu,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(ln=(nn=a.value.content)==null?void 0:nn.options)==null?void 0:ln.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=o=>c({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,zu)]),e("div",Nu,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((an=a.value.content)==null?void 0:an.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=o=>c({correctIndex:+o.target.value}))},null,40,Tu)]),e("div",_u,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(sn=a.value.content)==null?void 0:sn.explanation,class:"textarea",onInput:t[137]||(t[137]=o=>c({explanation:o.target.value}))},null,40,Lu)]),e("div",ju,[e("div",Bu,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((rn=a.value.content)==null?void 0:rn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=o=>c({cardBgColor:o.target.value}))},null,40,Du)]),e("div",qu,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((dn=a.value.content)==null?void 0:dn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=o=>c({questionColor:o.target.value}))},null,40,Ru)])]),e("div",Fu,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((un=a.value.content)==null?void 0:un.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=o=>c({accentColor:o.target.value}))},null,40,Uu)])])):L("",!0),e("div",Vu,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Ou,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=o=>w(r).duplicateElement(w(s).projectId,w(s).currentSlideId,a.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),D(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=o=>{w(s).showInteractionEditor=!0,w(s).interactionElementId=a.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),D(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=o=>{w(r).deleteElement(w(s).projectId,w(s).currentSlideId,a.value.id),w(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),D(" Delete Element ",-1)])])])])],64)):(n(),l("div",Ei,[e("div",Pi,[e("button",{type:"button",class:Q(["slide-settings-tab",J.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>J.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:Q(["slide-settings-tab",J.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>J.value="transitions")},[...t[150]||(t[150]=[Ue('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-4f48861a><path d="M5 7h5" data-v-4f48861a></path><path d="M5 12h10" data-v-4f48861a></path><path d="M5 17h14" data-v-4f48861a></path><path d="M14 7l5 5-5 5" data-v-4f48861a></path></svg><span data-v-4f48861a>Transitions</span>',2)])],2),e("button",{type:"button",class:Q(["slide-settings-tab",J.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>J.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),J.value==="canvas"?(n(),l("div",zi,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",Ni,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),Z(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>E.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>St("title",E.value.title))},null,544),[[pe,E.value.title]])]),e("div",Ti,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",_i,[(n(),l(F,null,le(["color","gradient","image"],o=>{var U;return e("button",{key:o,class:Q(["bg-type-btn",(((U=v.value)==null?void 0:U.backgroundType)||"color")===o&&"active"]),onClick:cn=>$e({backgroundType:o})},k(o),11,Li)}),64))]),(((z=v.value)==null?void 0:z.backgroundType)||"color")==="color"?(n(),l("div",ji,[e("input",{type:"color",value:((X=v.value)==null?void 0:X.background)||"#ffffff",onInput:t[20]||(t[20]=o=>$e({background:o.target.value})),class:"color-input-native"},null,40,Bi),e("input",{value:((he=v.value)==null?void 0:he.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>$e({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Di)])):((ke=v.value)==null?void 0:ke.backgroundType)==="gradient"?Z((n(),l("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>E.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>$e({backgroundGradient:E.value.backgroundGradient}))},null,544)),[[pe,E.value.backgroundGradient]]):Z((n(),l("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>E.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>$e({backgroundImage:E.value.backgroundImage}))},null,544)),[[pe,E.value.backgroundImage]])]),e("div",qi,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",Ri,[(n(!0),l(F,null,le(w(Wn),o=>{var U;return n(),l("button",{key:o.id,type:"button",class:Q(["canvas-size-card",((U=p.value)==null?void 0:U.id)===o.id&&"active"]),onClick:cn=>Te(o)},[e("span",Ui,[e("span",{class:Q(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Vi,k(o.label),1),e("span",Oi,k(o.ratioLabel),1)],10,Fi)}),128))]),e("div",Gi,[e("div",Wi,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Hi,"Current ratio "+k(M.value),1)]),e("div",Qi,[e("div",Yi,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Ji,[e("input",{type:"number",min:"320",max:"4096",value:y.value.width,class:"input",onChange:t[26]||(t[26]=o=>be("width",o.target.value))},null,40,Ki),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Xi,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",Zi,[e("input",{type:"number",min:"320",max:"4096",value:y.value.height,class:"input",onChange:t[27]||(t[27]=o=>be("height",o.target.value))},null,40,ea),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",ta,[Z(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>ee.value=o)},null,512),[[pt,ee.value]]),t[161]||(t[161]=D(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=Ue('<div class="canvas-size-callout" data-v-4f48861a><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-4f48861a><circle cx="12" cy="12" r="9" data-v-4f48861a></circle><path d="M12 10v6" data-v-4f48861a></path><path d="M12 7h.01" data-v-4f48861a></path></svg><span data-v-4f48861a>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",oa,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),Z(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>E.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>St("notes",E.value.notes))},null,544),[[pe,E.value.notes]])])])):J.value==="transitions"?(n(),l("div",na,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((Ne=v.value)==null?void 0:Ne.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>$e({transition:o.target.value}))},[...t[167]||(t[167]=[Ue('<option value="none" data-v-4f48861a>None</option><option value="fade" data-v-4f48861a>Fade</option><option value="slide" data-v-4f48861a>Slide</option><option value="zoom" data-v-4f48861a>Zoom</option><option value="flip" data-v-4f48861a>Flip</option>',5)])],40,la),e("div",ia,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Me=v.value)==null?void 0:Me.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>kn(o.target.value))},null,40,aa),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",sa,[e("input",{type:"checkbox",checked:!!((Xe=v.value)!=null&&Xe.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>$e({advanceOnMediaEnd:o.target.checked}))},null,40,ra),t[170]||(t[170]=D(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(n(),l("div",da,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",ua,[e("input",{type:"checkbox",checked:g.value.autoPlay,onChange:t[34]||(t[34]=o=>we({autoPlay:o.target.checked}))},null,40,ca),t[173]||(t[173]=D(" Autoplay preview and exported presentation ",-1))]),e("label",pa,[e("input",{type:"checkbox",checked:g.value.loop,onChange:t[35]||(t[35]=o=>we({loop:o.target.checked}))},null,40,va),t[174]||(t[174]=D(" Loop back to the first slide at the end ",-1))]),e("label",ma,[e("input",{type:"checkbox",checked:g.value.showProgress,onChange:t[36]||(t[36]=o=>we({showProgress:o.target.checked}))},null,40,fa),t[175]||(t[175]=D(" Show progress bar in preview ",-1))]),e("label",ga,[e("input",{type:"checkbox",checked:g.value.showNavControls,onChange:t[37]||(t[37]=o=>we({showNavControls:o.target.checked}))},null,40,ba),t[176]||(t[176]=D(" Show previous/next and dot navigation ",-1))]),e("label",ya,[e("input",{type:"checkbox",checked:g.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>we({allowKeyboardNav:o.target.checked}))},null,40,ha),t[177]||(t[177]=D(" Allow arrow keys and space bar navigation ",-1))])]))]))])}}},Wu=je(Gu,[["__scopeId","data-v-4f48861a"]]),Hu={class:"editor-toolbar"},Qu={class:"toolbar-group"},Yu={class:"toolbar-group"},Ju=["data-tooltip","onClick"],Ku={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Xu={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zu={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ec={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tc={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},oc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nc={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lc={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ic={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ac={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sc={class:"tool-label"},rc={class:"toolbar-group"},dc={class:"toolbar-group"},uc={class:"toolbar-group"},cc={__name:"EditorToolbar",emits:["open-ai-project"],setup(x,{emit:s}){const r=s,u=Oe();Ge();const v=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function g(y){u.setActiveTool(y)}return(y,p)=>(n(),l("div",Hu,[e("div",Qu,[e("button",{class:Q(["tool-btn",w(u).activeTool==="select"&&"active"]),onClick:p[0]||(p[0]=M=>g("select")),"data-tooltip":"Select (V)"},[...p[7]||(p[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),p[23]||(p[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Yu,[(n(),l(F,null,le(v,M=>e("button",{key:M.id,class:Q(["tool-btn",w(u).activeTool===M.id&&"active"]),"data-tooltip":M.tooltip,onClick:ee=>g(M.id)},[M.icon==="text"?(n(),l("svg",Ku,[...p[8]||(p[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):M.icon==="heading"?(n(),l("svg",Xu,[...p[9]||(p[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):M.icon==="image"?(n(),l("svg",Zu,[...p[10]||(p[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):M.icon==="shape"?(n(),l("svg",ec,[...p[11]||(p[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):M.icon==="button"?(n(),l("svg",tc,[...p[12]||(p[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):M.icon==="hotspot"?(n(),l("svg",oc,[...p[13]||(p[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):M.icon==="video"?(n(),l("svg",nc,[...p[14]||(p[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):M.icon==="audio"?(n(),l("svg",lc,[...p[15]||(p[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):M.icon==="quiz"?(n(),l("svg",ic,[...p[16]||(p[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):M.icon==="chart"?(n(),l("svg",ac,[...p[17]||(p[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):L("",!0),e("span",sc,k(M.label),1)],10,Ju)),64))]),p[24]||(p[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",rc,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:p[1]||(p[1]=M=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...p[18]||(p[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),p[25]||(p[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",dc,[e("button",{class:"tool-btn",onClick:p[2]||(p[2]=M=>w(u).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...p[19]||(p[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:p[3]||(p[3]=M=>w(u).zoomReset())},k(Math.round(w(u).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:p[4]||(p[4]=M=>w(u).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...p[20]||(p[20]=[Ue('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),p[26]||(p[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",uc,[e("button",{class:Q(["tool-btn",w(u).showGrid&&"active"]),onClick:p[5]||(p[5]=M=>w(u).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...p[21]||(p[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:Q(["tool-btn",w(u).snapToGrid&&"active"]),onClick:p[6]||(p[6]=M=>w(u).toggleSnap()),"data-tooltip":"Snap to grid"},[...p[22]||(p[22]=[Ue('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},pc=je(cc,[["__scopeId","data-v-d964cc0f"]]),vc=["value"],mc=["value"],fc=["onMousedown"],gc={key:1,class:"selection-border locked-border"},bc={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(x){const s=x,r=Oe(),u=Ge(),v=Nn("canvasScale",N(1)),g=A(()=>r.projectId),y=A(()=>r.currentSlideId),p=A(()=>r.selectedElementIds.includes(s.element.id)),M=A(()=>s.element.locked),ee=A(()=>s.element.visible!==!1),J=A(()=>{var H,te;return((te=(H=s.element.animations)==null?void 0:H[0])==null?void 0:te.type)||"auto"}),T=[{value:"auto",label:"Auto"},{value:"none",label:"None"},{value:"fade-up",label:"Fade"},{value:"fade-left",label:"Left"},{value:"fade-right",label:"Right"},{value:"zoom-in",label:"Zoom"},{value:"pop-in",label:"Pop"},{value:"stagger-in",label:"Stagger"}];let W=!1,K=0,_=0,a=new Map;function h(H){var Y;if(M.value||H.target.classList.contains("resize-handle"))return;const te=H.ctrlKey||H.metaKey||H.shiftKey;p.value?te&&r.selectElement(s.element.id,!0):r.selectElement(s.element.id,te),r.setActiveTool("select"),W=!1,K=H.clientX,_=H.clientY,a.clear();const re=(Y=u.getProject(g.value))==null?void 0:Y.slides.find(oe=>oe.id===y.value);re&&r.selectedElementIds.forEach(oe=>{const ye=re.elements.find(Ce=>Ce.id===oe);ye&&!ye.locked&&a.set(oe,{x:ye.x,y:ye.y})}),window.addEventListener("mousemove",b),window.addEventListener("mouseup",f),H.stopPropagation()}function b(H){const te=(H.clientX-K)/v.value,re=(H.clientY-_)/v.value;!W&&(Math.abs(te)>3||Math.abs(re)>3)&&(W=!0),W&&a.forEach((Y,oe)=>{let ye=Y.x+te,Ce=Y.y+re;if(r.snapToGrid&&r.gridSize){const ge=r.gridSize;ye=Math.round(ye/ge)*ge,Ce=Math.round(Ce/ge)*ge}u.updateElement(g.value,y.value,oe,{x:ye,y:Ce})})}function f(H){W||!(H.ctrlKey||H.metaKey||H.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(s.element.id,!1),W=!1,window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",f)}const O=["n","ne","e","se","s","sw","w","nw"];let se=!1,fe="",de=0,ue=0,S=0,B=0,R=0,ne=0;function V(H,te){M.value||(H.stopPropagation(),H.preventDefault(),se=!0,fe=te,de=H.clientX,ue=H.clientY,S=s.element.width,B=s.element.height,R=s.element.x,ne=s.element.y,window.addEventListener("mousemove",ve),window.addEventListener("mouseup",me))}function ve(H){if(!se)return;const te=v.value,re=(H.clientX-de)/te,Y=(H.clientY-ue)/te,oe=20;let ye=R,Ce=ne,ge=S,Se=B;if(fe.includes("e")&&(ge=Math.max(oe,S+re)),fe.includes("s")&&(Se=Math.max(oe,B+Y)),fe.includes("w")){const c=Math.max(oe,S-re);ye=R+(S-c),ge=c}if(fe.includes("n")){const c=Math.max(oe,B-Y);Ce=ne+(B-c),Se=c}if(r.snapToGrid&&r.gridSize){const c=r.gridSize;ge=Math.round(ge/c)*c,Se=Math.round(Se/c)*c,ye=Math.round(ye/c)*c,Ce=Math.round(Ce/c)*c}u.updateElement(g.value,y.value,s.element.id,{x:ye,y:Ce,width:ge,height:Se})}function me(){se=!1,window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",me)}function Ee(){["text","heading"].includes(s.element.type)&&r.setRightPanel("properties")}const xe=A(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:M.value?"not-allowed":"move",visibility:ee.value?"visible":"hidden",userSelect:"none"}));function ce(H){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[H]||"auto"}function Pe(H){var re;if(M.value)return;if(H==="auto"){u.updateElement(g.value,y.value,s.element.id,{animations:[]});return}const te=((re=s.element.animations)==null?void 0:re[0])||{};u.updateElement(g.value,y.value,s.element.id,{animations:[{type:H,delay:Math.max(0,Number(te.delay)||0),duration:Math.max(.1,Number(te.duration)||.64)}]})}return(H,te)=>(n(),l("div",{class:Q(["element-wrapper",p.value&&"selected",M.value&&"locked"]),style:ae(xe.value),onMousedown:h,onDblclick:Ee},[Tn(H.$slots,"default",{},void 0),p.value&&!M.value?(n(),l(F,{key:0},[te[3]||(te[3]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"motion-chip",onMousedown:te[1]||(te[1]=Ae(()=>{},["stop"]))},[te[2]||(te[2]=e("span",{class:"motion-chip-label"},"Motion",-1)),e("select",{class:"motion-chip-select",value:J.value,onChange:te[0]||(te[0]=re=>Pe(re.target.value))},[(n(),l(F,null,le(T,re=>e("option",{key:re.value,value:re.value},k(re.label),9,mc)),64))],40,vc)],32),(n(),l(F,null,le(O,re=>e("div",{key:re,class:Q(["resize-handle",`handle-${re}`]),style:ae({cursor:ce(re)}),onMousedown:Ae(Y=>V(Y,re),["stop"])},null,46,fc)),64))],64)):L("",!0),p.value&&M.value?(n(),l("div",gc)):L("",!0)],38))}},yc=je(bc,[["__scopeId","data-v-179c0a50"]]),gt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(x){const s=x,r=A(()=>s.element.content||{}),u=Oe(),v=Ge(),g=N(!1),y=N(null),p=N("");qe(()=>r.value.text,T=>{g.value||(p.value=T||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function M(){u.selectedElementId===s.element.id&&(g.value=!0,_n(()=>{if(y.value)if(y.value.focus(),typeof y.value.setSelectionRange=="function"){const T=y.value.value.length;y.value.setSelectionRange(T,T)}else{const T=document.createRange();T.selectNodeContents(y.value),T.collapse(!1);const W=window.getSelection();W.removeAllRanges(),W.addRange(T)}}))}function ee(T){g.value&&T.stopPropagation()}function J(){g.value=!1;const T=p.value;v.updateElement(u.projectId,u.currentSlideId,s.element.id,{content:{...s.element.content,text:T}})}return(T,W)=>g.value?Z((n(),l("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:y,"onUpdate:modelValue":W[0]||(W[0]=K=>p.value=K),onBlur:J,onMousedown:ee,style:ae({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[pe,p.value]]):(n(),l("div",{key:1,class:"text-element",onDblclick:M,style:ae({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},k(p.value),37))}},hc=["src","alt"],xc={key:1,class:"image-placeholder"},wc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},kc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(x){return(s,r)=>{var u,v,g,y;return n(),l("div",{class:"image-element",style:ae({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((u=x.element.content)==null?void 0:u.borderRadius)||0)+"px",border:`${((v=x.element.content)==null?void 0:v.borderWidth)||0}px solid ${((g=x.element.content)==null?void 0:g.borderColor)||"transparent"}`})},[(y=x.element.content)!=null&&y.src?(n(),l("img",{key:0,src:x.element.content.src,alt:x.element.content.alt||"",style:ae({width:"100%",height:"100%",objectFit:x.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,hc)):(n(),l("div",xc,[(n(),l("svg",wc,[...r[0]||(r[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),r[1]||(r[1]=e("span",null,"Image",-1))]))],4)}}},Cc=je(kc,[["__scopeId","data-v-401e9ff3"]]),Sc={class:"shape-element",style:{width:"100%",height:"100%"}},$c=["width","height"],Ic=["points","fill","stroke","stroke-width"],Ac={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(x){const s=x,r=A(()=>s.element.content||{}),u=A(()=>{const y=r.value.shapeType||"rectangle",p={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return y==="circle"?{...p,borderRadius:"50%"}:y==="rectangle"?{...p,borderRadius:(r.value.borderRadius||0)+"px"}:p}),v=A(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),g=A(()=>{const y=s.element.width||150,p=s.element.height||100,M=r.value.shapeType;if(M==="triangle")return`${y/2},0 ${y},${p} 0,${p}`;if(M==="diamond")return`${y/2},0 ${y},${p/2} ${y/2},${p} 0,${p/2}`;if(M==="arrow")return`0,${p*.3} ${y*.6},${p*.3} ${y*.6},0 ${y},${p/2} ${y*.6},${p} ${y*.6},${p*.7} 0,${p*.7}`;if(M==="star"){const ee=y/2,J=p/2,T=Math.min(y,p)/2,W=T*.4;let K="";for(let _=0;_<10;_++){const a=(_*36-90)*Math.PI/180,h=_%2===0?T:W;K+=`${ee+h*Math.cos(a)},${J+h*Math.sin(a)} `}return K.trim()}return""});return(y,p)=>(n(),l("div",Sc,[v.value?(n(),l("svg",{key:1,width:x.element.width,height:x.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:g.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,Ic)],8,$c)):(n(),l("div",{key:0,style:ae(u.value)},null,4))]))}},Mc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(x){const s=x,r=A(()=>s.element.content||{}),u=A(()=>{const v={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},g=v[r.value.variant||"primary"]||v.primary;return{...g,background:r.value.bgColor||g.background,color:r.value.textColor||g.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:g.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(v,g)=>(n(),l("div",{class:"button-element",style:ae({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...u.value})},k(r.value.label||"Button"),5))}},Ec={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Pc={class:"popup-header"},zc={class:"popup-body"},Nc={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(x){const s=x,r=A(()=>s.element.content||{}),u=N(!1);function v(g){g.stopPropagation(),u.value=!u.value}return(g,y)=>(n(),l("div",Ec,[e("div",{class:"hotspot-btn",style:ae({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Ae(v,["stop"])},k(r.value.icon||"?"),5),rt(ft,{name:"fade"},{default:Ze(()=>[u.value?(n(),l("div",{key:0,class:"hotspot-popup",style:ae({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",Pc,[e("strong",null,k(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:y[0]||(y[0]=Ae(p=>u.value=!1,["stop"]))},"×")]),e("div",zc,k(r.value.popupContent||"Add your content in the properties panel."),1)],4)):L("",!0)]),_:1})]))}},Tc=je(Nc,[["__scopeId","data-v-ef5f15f6"]]),_c={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},Lc=["src"],jc=["src","poster","autoplay","controls","loop","muted"],Bc={key:2,class:"video-placeholder"},Dc={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},qc={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(x){const s=x,r=A(()=>s.element.content||{}),u=A(()=>{const g=r.value.src||"";return g.includes("youtube")||g.includes("youtu.be")}),v=A(()=>{var y,p;const g=r.value.src||"";if(u.value){const M=(y=g.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:y[1];return M?`https://www.youtube.com/embed/${M}`:""}if(g.includes("vimeo.com")){const M=(p=g.match(/vimeo\.com\/(\d+)/))==null?void 0:p[1];return M?`https://player.vimeo.com/video/${M}`:""}return""});return(g,y)=>(n(),l("div",_c,[v.value?(n(),l("iframe",{key:0,src:v.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,Lc)):r.value.src&&!v.value?(n(),l("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:ae({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,jc)):(n(),l("div",Bc,[(n(),l("svg",Dc,[...y[0]||(y[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),y[1]||(y[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Rc=je(qc,[["__scopeId","data-v-dfea1a16"]]),Fc=["stroke"],Uc=["src","controls","autoplay","loop"],Vc={key:1,style:{"font-size":"11px",color:"#aaa"}},Oc={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(x){return(s,r)=>{var u,v,g,y,p,M,ee,J,T;return n(),l("div",{class:"audio-element",style:ae({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((u=x.element.content)==null?void 0:u.bgColor)||"#ede7ff",border:`1px solid ${((v=x.element.content)==null?void 0:v.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(n(),l("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((g=x.element.content)==null?void 0:g.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Fc)),e("span",{style:ae({fontSize:"13px",color:((y=x.element.content)==null?void 0:y.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},k(((p=x.element.content)==null?void 0:p.label)||"Audio Player"),5),(M=x.element.content)!=null&&M.src?(n(),l("audio",{key:0,src:x.element.content.src,controls:((ee=x.element.content)==null?void 0:ee.controls)!==!1,autoplay:(J=x.element.content)==null?void 0:J.autoplay,loop:(T=x.element.content)==null?void 0:T.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=Ae(()=>{},["stop"]))},null,40,Uc)):(n(),l("span",Vc,"No source"))],4)}}},Gc={class:"quiz-options"},Wc=["onClick"],Hc={class:"opt-letter"},Qc={class:"opt-text"},Yc={key:0},Jc={class:"quiz-actions"},Kc=["disabled"],Xc={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(x){const s=x,r=A(()=>s.element.content||{}),u=N(null),v=N(!1);function g(ee){v.value||(u.value=ee)}function y(){u.value!==null&&(v.value=!0)}function p(){u.value=null,v.value=!1}const M=A(()=>v.value&&u.value===(r.value.correctIndex??0));return(ee,J)=>(n(),l("div",{class:"quiz-element",style:ae({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:ae({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},k(r.value.question||"Question text…"),5),e("div",Gc,[(n(!0),l(F,null,le(r.value.options||[],(T,W)=>(n(),l("div",{key:W,class:Q(["quiz-opt",u.value===W&&"selected",v.value&&W===r.value.correctIndex&&"correct",v.value&&u.value===W&&W!==r.value.correctIndex&&"wrong"]),onClick:K=>g(W)},[e("span",Hc,k(String.fromCharCode(65+W)),1),e("span",Qc,k(T),1)],10,Wc))),128))]),v.value?(n(),l("div",{key:0,class:Q(["quiz-feedback",M.value?"correct":"wrong"])},[D(k(M.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!M.value&&r.value.explanation?(n(),l("span",Yc,k(r.value.explanation),1)):L("",!0)],2)):L("",!0),e("div",Jc,[v.value?(n(),l("button",{key:1,class:"quiz-btn secondary",onClick:p},"Try Again")):(n(),l("button",{key:0,class:"quiz-btn primary",disabled:u.value===null,onClick:y},"Submit",8,Kc))])],4))}},Zc=je(Xc,[["__scopeId","data-v-ca2bd187"]]),ep={key:0,class:"canvas-empty"},tp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},op={key:0,class:"canvas-device-frame","aria-hidden":"true"},np=["value"],lp={class:"canvas-guide-label"},ip={key:4,class:"drop-hint"},ap={class:"canvas-info-bar"},sp=["disabled"],rp={class:"slide-index"},dp=["disabled"],up={key:0},cp={__name:"EditorCanvas",setup(x){const s=Oe(),r=Ge(),u=N(null),v=N(null),g=N(1),y=A(()=>g.value*s.zoomLevel);jn("canvasScale",y);const p=A(()=>r.getProject(s.projectId)),M=A(()=>vt(p.value)),ee=A(()=>bn(p.value)),J=A(()=>M.value.width),T=A(()=>M.value.height),W=A(()=>yn(J.value,T.value)),K=A(()=>{var m,I;return(I=(m=p.value)==null?void 0:m.slides)==null?void 0:I.find(q=>q.id===s.currentSlideId)}),_=A(()=>{var m;return[...((m=p.value)==null?void 0:m.slides)||[]].sort((I,q)=>I.order-q.order)}),a=A(()=>_.value.findIndex(m=>m.id===s.currentSlideId)),h=A(()=>{var m;return{autoPlay:!1,motionPresets:[],...((m=p.value)==null?void 0:m.settings)||{}}}),b=A(()=>(Array.isArray(h.value.motionPresets)?h.value.motionPresets:[]).filter(m=>m.scope==="group")),f=A(()=>{const m=new Set(s.selectedElementIds);return ue.value.filter(I=>m.has(I.id))}),O=N(""),se=A(()=>K.value?K.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:h.value.autoPlay&&Number(K.value.duration||0)>0?{label:`Auto ${Number(K.value.duration).toFixed(Number(K.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function fe(){const m=b.value.find(q=>q.id===O.value);if(!m||!f.value.length)return;[...f.value].sort((q,G)=>(q.y||0)!==(G.y||0)?(q.y||0)-(G.y||0):(q.x||0)-(G.x||0)).forEach((q,G)=>{if(m.type==="auto"){r.updateElement(s.projectId,s.currentSlideId,q.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,q.id,{animations:[{type:m.type,delay:Math.max(0,Number(m.delay)||0)+G*Math.max(0,Number(m.stepDelay)||0),duration:Math.max(.1,Number(m.duration)||.72)}]})}),r.updateProject(s.projectId,{settings:{...h.value,motionPresets:(h.value.motionPresets||[]).map(q=>q.id===m.id?{...q,usageCount:Math.max(0,Number(q.usageCount||0))+1,lastUsedAt:Date.now()}:q)}})}function de(){if(!b.value.length){O.value="";return}b.value.some(m=>m.id===O.value)||(O.value=b.value[0].id)}const ue=A(()=>{var m;return[...((m=K.value)==null?void 0:m.elements)||[]].sort((I,q)=>(I.zIndex||0)-(q.zIndex||0))}),S=A(()=>{const m=K.value;return m?m.backgroundType==="gradient"&&m.backgroundGradient?{background:m.backgroundGradient}:m.backgroundType==="image"&&m.backgroundImage?{backgroundImage:`url(${m.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:m.background||"#fff"}:{background:"#fff"}}),B=A(()=>`scale(${y.value})`);function R(){if(!u.value)return;const{clientWidth:m,clientHeight:I}=u.value,q=(m-80)/J.value,G=(I-80)/T.value;g.value=Math.min(q,G,1)}let ne=null;mn(()=>{R(),ne=new ResizeObserver(R),u.value&&ne.observe(u.value),de()}),fn(()=>ne==null?void 0:ne.disconnect()),qe(b,()=>{de()},{deep:!0,immediate:!0}),qe(M,()=>{R()},{deep:!0});const V=N({x:0,y:0}),ve=N({x:0,y:0}),me=N(!1),Ee=N(!1),xe=A(()=>{var m,I;return((m=ee.value)==null?void 0:m.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((I=ee.value)==null?void 0:I.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),ce=A(()=>{if(!xe.value)return null;if(xe.value.tone==="mobile"){const q=J.value*.08,G=T.value*.05;return{x:q,y:G,width:J.value-q*2,height:T.value-G*2}}const m=J.value*.08,I=T.value*.08;return{x:m,y:I,width:J.value-m*2,height:T.value-I*2}}),Pe=A(()=>{if(!ce.value)return[];const m=ce.value;return ue.value.filter(I=>I.visible!==!1).filter(I=>{const q=Number(I.x||0),G=Number(I.y||0),C=q+Number(I.width||0),Ie=G+Number(I.height||0);return q<m.x||G<m.y||C>m.x+m.width||Ie>m.y+m.height}).map(I=>I.id)}),H=A(()=>s.selectedElementIds.filter(m=>Pe.value.includes(m)).length),te=A(()=>Pe.value.length),re=A(()=>!xe.value||!te.value?null:H.value?`${H.value} selected ${H.value===1?"element is":"elements are"} outside the ${xe.value.label.toLowerCase()}.`:`${te.value} ${te.value===1?"element is":"elements are"} outside the ${xe.value.label.toLowerCase()}.`),Y=A(()=>{if(!me.value)return null;const m=Math.min(V.value.x,ve.value.x),I=Math.min(V.value.y,ve.value.y),q=Math.abs(ve.value.x-V.value.x),G=Math.abs(ve.value.y-V.value.y);return{x:m,y:I,width:q,height:G}});function oe(m){!me.value&&(m.target===v.value||m.target===m.currentTarget)&&s.clearSelection()}function ye(m){return m?Array.from(m.files||[]).some(I=>I.type.startsWith("image/")):!1}function Ce(m,I,q){if(!m||!m.type.startsWith("image/"))return;const G=new FileReader;G.onload=()=>{const C=String(G.result||"");if(!C)return;const Ie=new Image;Ie.onload=()=>{const De=v.value.getBoundingClientRect(),Le=(I-De.left)/y.value,et=(q-De.top)/y.value,Re=Math.min(420/Ie.width,280/Ie.height,1),He=Math.max(120,Math.round(Ie.width*Re)),Qe=Math.max(80,Math.round(Ie.height*Re)),ot=Math.max(0,Math.min(J.value-He,Math.round(Le-He/2))),nt=Math.max(0,Math.min(T.value-Qe,Math.round(et-Qe/2))),lt=r.addElement(s.projectId,s.currentSlideId,"image",{x:ot,y:nt,width:He,height:Qe,content:{src:C,alt:m.name,objectFit:"cover"}});lt&&(s.selectElement(lt.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Ie.src=C},G.readAsDataURL(m)}function ge(m){ye(m.dataTransfer)&&(m.preventDefault(),m.dataTransfer.dropEffect="copy",Ee.value=!0)}function Se(m){var I;(I=m.currentTarget)!=null&&I.contains(m.relatedTarget)||(Ee.value=!1)}function c(m){if(!ye(m.dataTransfer))return;m.preventDefault(),Ee.value=!1;const I=Array.from(m.dataTransfer.files||[]).find(q=>q.type.startsWith("image/"));I&&Ce(I,m.clientX,m.clientY)}function $(m){const I=s.activeTool;if(m.target!==v.value&&m.target!==m.currentTarget)return;m.preventDefault(),m.stopPropagation();const q=v.value.getBoundingClientRect(),G=(m.clientX-q.left)/y.value,C=(m.clientY-q.top)/y.value;if(I==="select"){me.value=!0,V.value={x:G,y:C},ve.value={x:G,y:C};const Le=_e=>{ve.value={x:(_e.clientX-q.left)/y.value,y:(_e.clientY-q.top)/y.value}},et=()=>{window.removeEventListener("mousemove",Le),window.removeEventListener("mouseup",et);const _e=Y.value;if(_e&&(_e.width>2||_e.height>2)){const tt=ue.value.filter(Re=>{const He=Re.x,Qe=Re.y,ot=Re.width||100,nt=Re.height||100;return He<_e.x+_e.width&&He+ot>_e.x&&Qe<_e.y+_e.height&&Qe+nt>_e.y}).map(Re=>Re.id);tt.length>0?s.setSelection(tt):s.clearSelection()}else s.clearSelection();setTimeout(()=>{me.value=!1},0)};window.addEventListener("mousemove",Le),window.addEventListener("mouseup",et);return}const Ie=Le=>s.snapToGrid?Math.round(Le/s.gridSize)*s.gridSize:Le,De=r.addElement(s.projectId,s.currentSlideId,I,{x:Ie(G-75),y:Ie(C-40)});De&&(s.selectElement(De.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const E=A(()=>{if(!s.showGrid)return{};const m=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${m}px ${m}px`}}),$e={text:gt,heading:gt,image:Cc,shape:Ac,button:Mc,hotspot:Tc,video:Rc,audio:Oc,quiz:Zc,chart:Xn,divider:"div"};function we(m){return $e[m]||gt}function Te(m){var I,q;return m.type!=="divider"?{}:{borderTop:`${((I=m.content)==null?void 0:I.thickness)||2}px solid ${((q=m.content)==null?void 0:q.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const be=N({show:!1,x:0,y:0,elId:null});function ze(m,I){m.preventDefault(),be.value={show:!0,x:m.clientX,y:m.clientY,elId:I},s.selectElement(I),setTimeout(()=>window.addEventListener("click",Ve,{once:!0}),0)}function Ve(){be.value.show=!1}function Ye(){if(be.value.elId){const m=r.duplicateElement(s.projectId,s.currentSlideId,be.value.elId);m&&s.selectElement(m.id)}Ve()}function We(){be.value.elId&&(r.deleteElement(s.projectId,s.currentSlideId,be.value.elId),s.clearSelection()),Ve()}function dt(){be.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,be.value.elId,"up"),Ve()}function P(){be.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,be.value.elId,"down"),Ve()}function i(){const m=a.value,I=r.addSlide(s.projectId,m);I&&s.setCurrentSlide(I.id)}function j(){const m=a.value;m>0&&s.setCurrentSlide(_.value[m-1].id)}function ie(){const m=a.value;m<_.value.length-1&&s.setCurrentSlide(_.value[m+1].id)}return(m,I)=>{var q;return n(),l("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:u},[K.value?(n(),l(F,{key:1},[e("div",{class:Q(["canvas-zoom-wrapper",[xe.value&&`canvas-zoom-wrapper-${xe.value.tone}`]]),style:ae({transform:B.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:v,class:"slide-canvas",style:ae({width:J.value+"px",height:T.value+"px",...S.value,...E.value}),onClick:oe,onMousedown:$,onDragover:ge,onDragleave:Se,onDrop:c,onContextmenu:I[3]||(I[3]=Ae(()=>{},["prevent"]))},[xe.value?(n(),l("div",op)):L("",!0),w(s).multiSelection&&b.value.length?(n(),l("div",{key:1,class:"selection-preset-chip",onMousedown:I[1]||(I[1]=Ae(()=>{},["stop"]))},[I[7]||(I[7]=e("span",{class:"selection-preset-label"},"Sequence",-1)),Z(e("select",{"onUpdate:modelValue":I[0]||(I[0]=G=>O.value=G),class:"selection-preset-select"},[(n(!0),l(F,null,le(b.value,G=>(n(),l("option",{key:G.id,value:G.id},k(G.name),9,np))),128))],512),[[ct,O.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Ae(fe,["stop"])},"Apply")],32)):L("",!0),re.value?(n(),l("div",{key:2,class:"canvas-guide-warning",onMousedown:I[2]||(I[2]=Ae(()=>{},["stop"]))},[I[8]||(I[8]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,k(re.value),1)],32)):L("",!0),(n(!0),l(F,null,le(ue.value,G=>(n(),Be(yc,{key:G.id,element:G,onContextmenu:Ae(C=>ze(C,G.id),["stop"])},{default:Ze(()=>[(n(),Be(Ln(we(G.type)),{element:G,style:ae(G.type==="divider"?Te(G):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),xe.value?(n(),l("div",{key:3,class:Q(["canvas-guide",[`canvas-guide-${xe.value.tone}`,te.value&&"canvas-guide-warning-state"]]),style:ae(xe.value.style),"aria-hidden":"true"},[e("span",lp,k(xe.value.label)+" · "+k(W.value),1)],6)):L("",!0),w(s).activeTool!=="select"||Ee.value?(n(),l("div",ip,k(Ee.value?"Drop image to insert it on this slide":`Click anywhere to add ${w(s).activeTool}`),1)):L("",!0),me.value&&Y.value?(n(),l("div",{key:5,class:"selection-marquee",style:ae({left:Y.value.x+"px",top:Y.value.y+"px",width:Y.value.width+"px",height:Y.value.height+"px"})},null,4)):L("",!0)],36)],6),e("div",ap,[e("button",{class:"bar-btn",onClick:i},"Add page"),e("button",{class:"bar-btn icon",onClick:j,disabled:a.value<=0},"◀",8,sp),e("span",rp,k(a.value+1)+" / "+k(_.value.length),1),e("button",{class:"bar-btn icon",onClick:ie,disabled:a.value>=_.value.length-1},"▶",8,dp),e("span",null,k(J.value)+" × "+k(T.value)+"px",1),I[9]||(I[9]=e("span",null,"·",-1)),e("span",null,k(((q=K.value.elements)==null?void 0:q.length)||0)+" elements",1),I[10]||(I[10]=e("span",null,"·",-1)),e("span",{class:Q(["playback-badge",`playback-badge-${se.value.tone}`])},k(se.value.label),3),w(s).hasSelection?(n(),l("span",up,"· "+k(w(s).selectedElementIds.length)+" selected",1)):L("",!0),e("button",{class:"bar-btn ai",onClick:I[4]||(I[4]=G=>w(s).setRightPanel("ai"))},"AI")])],64)):(n(),l("div",ep,[(n(),l("svg",tp,[...I[5]||(I[5]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),I[6]||(I[6]=e("p",null,"Select a slide to start editing",-1))])),(n(),Be(gn,{to:"body"},[be.value.show?(n(),l("div",{key:0,class:"ctx-menu",style:ae({left:be.value.x+"px",top:be.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Ye},"Duplicate"),e("button",{class:"ctx-item",onClick:dt},"Bring Forward"),e("button",{class:"ctx-item",onClick:P},"Send Backward"),I[11]||(I[11]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:We},"Delete")],4)):L("",!0)]))],512)}}},pp=je(cp,[["__scopeId","data-v-c6947122"]]),vp={class:"ai-panel"},mp={class:"ai-mode-tabs"},fp=["onClick"],gp={class:"ai-content"},bp={class:"form-group"},yp={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},hp={key:0,class:"form-group"},xp={key:1,class:"form-group"},wp={class:"form-group"},kp={class:"form-group"},Cp={class:"prompt-label-row"},Sp={key:1,class:"prompt-auto-badge"},$p={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},Ip=["disabled"],Ap={key:0,class:"spinner"},Mp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ep={key:3,class:"creative-options-wrap"},Pp={class:"result-header"},zp={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Np={key:1,class:"creative-options-list"},Tp={class:"creative-title"},_p={class:"creative-angle"},Lp=["onClick"],jp={class:"form-group"},Bp={class:"quiz-config-row"},Dp={class:"form-group",style:{flex:"1"}},qp={class:"form-group",style:{flex:"1"}},Rp={class:"form-group"},Fp={class:"qtype-btns"},Up=["onClick"],Vp={class:"qtype-icon"},Op={class:"form-group"},Gp={class:"form-group"},Wp={class:"prompt-label-row"},Hp={key:1,class:"prompt-auto-badge"},Qp=["disabled"],Yp={key:0,class:"spinner"},Jp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kp={key:0,class:"quiz-results"},Xp={class:"quiz-results-header"},Zp={class:"form-label"},ev={class:"quiz-header-actions"},tv={class:"regen-row"},ov=["disabled"],nv={key:0,class:"spinner spinner-sm"},lv={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},iv=["disabled"],av={class:"quiz-card-header"},sv={class:"quiz-card-check"},rv=["onUpdate:modelValue"],dv={class:"q-num"},uv={class:"q-badges"},cv={class:"badge type-badge"},pv={class:"q-question"},vv={class:"q-options"},mv={class:"q-option-letter"},fv={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},gv={key:0,class:"q-explanation"},bv=["disabled"],yv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hv=["disabled"],xv={key:0,class:"spinner"},wv={key:0,class:"selected-text-preview"},kv={class:"text-preview"},Cv={key:1,class:"ai-hint"},Sv={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},$v=["disabled"],Iv={key:0,class:"spinner"},Av={key:0,class:"selected-text-preview"},Mv={class:"text-preview"},Ev={key:1,class:"ai-hint"},Pv={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},zv=["disabled"],Nv={key:0,class:"spinner"},Tv={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},_v={class:"result-header"},Lv={class:"result-actions"},jv=["disabled"],Bv={class:"textarea result-display"},Dv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qv=["disabled"],Rv={key:0,class:"spinner"},Fv={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Uv={class:"textarea result-display",style:{color:"var(--color-primary)"}},Vv={key:6,class:"ai-settings"},Ov={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Gv=["value"],Wv={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Hv=["value"],Qv={key:0,class:"demo-notice"},Yv={key:7,class:"result-area"},Jv={class:"result-header"},Kv={class:"result-pre"},Xv={class:"result-actions"},Zv=["disabled"],e1={key:8,class:"ai-error"},t1={__name:"AIAssistant",setup(x){const s=qn(),r=Oe(),u=Ge(),v=N("generate"),g=N(""),y=N(""),p=N("");qe(v,()=>{p.value=""});const M=N(4),ee=N("general"),J=N("Spanish"),T=N(""),W=N(""),K=N(""),_=N(!1),a=N("single"),h=N(5),b=N("slide"),f=N([]),O=N(""),se=A(()=>{const P=y.value.trim()||"[your topic]";if(a.value==="deck"){let ie=`Create a complete ${h.value}-slide learning deck about "${P}".`;return W.value.trim()&&(ie+=`
Additional context: ${W.value.trim()}`),ie+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,ie+=`
Make each slide distinct, logically sequenced, and specific to "${P}".`,ie}let j=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[ee.value]||"educational slide"} about "${P}".`;return W.value.trim()&&(j+=`
Additional context: ${W.value.trim()}`),j+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${P}" — no generic placeholders.`,j});qe(se,P=>{_.value||(K.value=P)},{immediate:!0});function fe(){K.value=se.value,_.value=!1}const de=N(""),ue=N("intermediate"),S=N("multiple-choice"),B=N(""),R=N([]),ne=N(""),V=N(!1),ve=A(()=>{const P=de.value.trim()||"[your topic]",i={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},j={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let ie=`Generate ${M.value} ${i[ue.value]} ${j[S.value]} quiz questions about "${P}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return B.value.trim()&&(ie+=`
Learning objective: ${B.value.trim()}`),ie});qe(ve,P=>{V.value||(ne.value=P)},{immediate:!0});function me(){ne.value=ve.value,V.value=!1}const Ee=A(()=>u.getProject(r.projectId)),xe=A(()=>{var P,i;return(i=(P=Ee.value)==null?void 0:P.slides)==null?void 0:i.find(j=>j.id===r.currentSlideId)}),ce=A(()=>{var P,i;return r.selectedElementId?(i=(P=xe.value)==null?void 0:P.elements)==null?void 0:i.find(j=>j.id===r.selectedElementId):null});async function Pe(){if(!y.value.trim()&&!K.value.trim())return;if(p.value="",f.value=[],O.value="",a.value==="deck"){const i=await s.generateSlideDeck(y.value,h.value,{objective:W.value,customPrompt:K.value});if(i!=null&&i.length){const j=i.map(ie=>H(ie));p.value=JSON.stringify({slides:j},null,2),oe(j,{replaceGenerated:!0})}return}if(b.value==="options"){await ge();return}const P=await s.generateSlideContent(y.value,ee.value,W.value,K.value);if(P){const i=H(P);p.value=JSON.stringify(i,null,2),ye(i,{replaceGenerated:!0})}}function H(P){const i=P&&typeof P=="object"?P:{},ie=(Array.isArray(i.bullets)?i.bullets:typeof i.bullets=="string"?i.bullets.split(`
`):[]).map(m=>String(m||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(i.title||y.value||"Untitled Slide").trim(),subtitle:String(i.subtitle||"").trim(),bullets:ie,callout:String(i.callout||"").trim()}}function te(P,i){var m,I,q;const j=(I=(m=u.getProject(P))==null?void 0:m.slides)==null?void 0:I.find(G=>G.id===i);if(!((q=j==null?void 0:j.elements)!=null&&q.length))return;j.elements.filter(G=>{var C;return((C=G.meta)==null?void 0:C.source)==="ai-content"}).map(G=>G.id).forEach(G=>{u.deleteElement(P,i,G)})}function re(P,i,j,ie){return u.addElement(P,i,j,{...ie,meta:{...ie.meta||{},source:"ai-content"}})}function Y(P,i,j,{replaceGenerated:ie=!1}={}){var m;if(!(!P||!i)){if(ie&&te(P,i),j.title&&(u.updateSlide(P,i,{title:j.title}),re(P,i,"heading",{x:60,y:40,width:840,height:80,content:{text:j.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),j.subtitle&&re(P,i,"text",{x:60,y:130,width:840,height:50,content:{text:j.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(m=j.bullets)!=null&&m.length){const I=j.bullets.map(q=>`• ${q}`).join(`
`);re(P,i,"text",{x:60,y:j.subtitle?200:150,width:840,height:200,content:{text:I,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}j.callout&&(re(P,i,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),re(P,i,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${j.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function oe(P,{replaceGenerated:i=!1}={}){if(!r.currentSlideId)return;const j=r.projectId;if(!j||!Array.isArray(P)||!P.length)return;P.map(m=>H(m)).forEach(m=>{const I=u.addSlide(j);I&&Y(j,I.id,m,{replaceGenerated:i})})}function ye(P=null,{replaceGenerated:i=!1}={}){if(!r.currentSlideId)return;let j=P;if(!j){if(!p.value)return;try{j=JSON.parse(p.value)}catch(q){console.warn("Could not parse AI content:",q);return}}const ie=H(j),m=r.projectId,I=r.currentSlideId;!m||!I||Y(m,I,ie,{replaceGenerated:i})}function Ce(){if(p.value){if(a.value==="deck"){try{const P=JSON.parse(p.value),i=Array.isArray(P)?P:P==null?void 0:P.slides;if(!Array.isArray(i)||!i.length)return;oe(i,{replaceGenerated:!0})}catch{return}return}ye()}}async function ge(){const P=y.value.trim()||"[your topic]",i=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${ee.value}" slide about "${P}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,j=await s.generate(i,{type:"creativeOptions",topic:P,slideType:ee.value});if(j)try{const ie=JSON.parse(j.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(ie))throw new Error("Options must be an array");f.value=ie.slice(0,3).map((m,I)=>({title:String((m==null?void 0:m.title)||`Option ${I+1}`),angle:String((m==null?void 0:m.angle)||""),prompt:String((m==null?void 0:m.prompt)||"")})).filter(m=>m.prompt.trim()),f.value.length||(O.value="No usable creative options were returned. Try generating again.")}catch{O.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function Se(P){P!=null&&P.prompt&&(K.value=P.prompt,_.value=!0,b.value="slide",await Pe())}async function c(P=!1){if(!de.value.trim()&&!ne.value.trim())return;P||(R.value=[]);const i=await s.generateQuiz(de.value,M.value,{difficulty:ue.value,questionType:S.value,objective:B.value,customPrompt:ne.value});if(i)if(P){const j=new Set(R.value.map(m=>m.question)),ie=i.filter(m=>!j.has(m.question)).map(m=>({...m,_selected:!0}));R.value=[...R.value,...ie]}else R.value=i.map(j=>({...j,_selected:!0}))}async function $(){const P=R.value.filter(j=>j._selected);if(!P.length)return;const i=r.projectId;P.forEach((j,ie)=>{const m=u.addSlide(i);m&&(u.addElement(i,m.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:j.question,options:j.options,correctIndex:j.correctIndex,explanation:j.explanation||""}}),u.updateSlide(i,m.id,{title:`Q${ie+1}: ${j.question.slice(0,40)}…`}))}),R.value=[]}function E(P){R.value.forEach(i=>i._selected=P)}async function $e(){if(!T.value.trim())return;const P=await s.generateVoiceoverScript(T.value);P&&(p.value=P)}async function we(){var j,ie;const P=(ie=(j=ce.value)==null?void 0:j.content)==null?void 0:ie.text;if(!P)return;const i=await s.generateTranslation(P,J.value);i&&(p.value=i)}async function Te(){!p.value||!ce.value||u.updateElement(r.projectId,r.currentSlideId,ce.value.id,{content:{...ce.value.content,text:p.value}})}const be=N(""),ze=N(!1);async function Ve(){if(be.value.trim()){ze.value=!0,p.value="Optimizing prompt...";try{let P=be.value;const i=await s.generateImagePrompt(be.value);i&&(P=i.replace(/```(json)?\n?/g,"").trim()),p.value="Painting image... this takes about 10-20 seconds. Please wait.";const j=Math.floor(Math.random()*1e6),ie=`https://image.pollinations.ai/prompt/${encodeURIComponent(P)}?width=600&height=400&nologo=true&seed=${j}`;await new Promise((m,I)=>{const q=new Image;q.onload=m,q.onerror=I,q.src=ie}),u.addElement(r.projectId,r.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:ie,objectFit:"cover"}}),p.value="Image added to slide!"}catch{p.value="Failed to generate image. Try a different prompt."}finally{ze.value=!1}}}async function Ye(){var i,j;if(!((j=(i=ce.value)==null?void 0:i.content)!=null&&j.text))return;const P=await s.improveText(ce.value.content.text,g.value||"Make it clearer and more engaging");P&&(p.value=P)}async function We(){!p.value||!ce.value||u.updateElement(r.projectId,r.currentSlideId,ce.value.id,{content:{...ce.value.content,text:p.value}})}async function dt(){if(!g.value.trim())return;const P=await s.generate(g.value);P&&(p.value=P)}return(P,i)=>{var j,ie,m,I,q,G;return n(),l("div",vp,[e("div",mp,[(n(),l(F,null,le([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],C=>e("button",{key:C.id,class:Q(["ai-mode-btn",v.value===C.id&&"active"]),onClick:Ie=>v.value=C.id},k(C.label),11,fp)),64))]),e("div",gp,[v.value==="generate"?(n(),l(F,{key:0},[e("div",bp,[i[34]||(i[34]=e("label",{class:"form-label"},[D("Topic / Subject "),e("span",{class:"required"},"*")],-1)),Z(e("input",{"onUpdate:modelValue":i[0]||(i[0]=C=>y.value=C),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:pn(Pe,["enter"])},null,544),[[pe,y.value]])]),e("div",yp,[e("button",{class:Q(["output-mode-btn",a.value==="single"&&"active"]),onClick:i[1]||(i[1]=C=>a.value="single")},"Single Slide",2),e("button",{class:Q(["output-mode-btn",a.value==="deck"&&"active"]),onClick:i[2]||(i[2]=C=>a.value="deck")},"Slide Deck",2)]),a.value==="single"?(n(),l("div",hp,[i[36]||(i[36]=e("label",{class:"form-label"},"Slide Type",-1)),Z(e("select",{"onUpdate:modelValue":i[3]||(i[3]=C=>ee.value=C),class:"select"},[...i[35]||(i[35]=[Ue('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[ct,ee.value]])])):(n(),l("div",xp,[i[37]||(i[37]=e("label",{class:"form-label"},"Number of Slides",-1)),Z(e("input",{"onUpdate:modelValue":i[4]||(i[4]=C=>h.value=C),class:"input",type:"number",min:"1",max:"20"},null,512),[[pe,h.value,void 0,{number:!0}]]),i[38]||(i[38]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",wp,[i[39]||(i[39]=e("label",{class:"form-label"},[D("Description "),e("span",{class:"optional"},"(optional)")],-1)),Z(e("textarea",{"onUpdate:modelValue":i[5]||(i[5]=C=>W.value=C),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[pe,W.value]])]),e("div",kp,[e("div",Cp,[i[41]||(i[41]=e("label",{class:"form-label"},"AI Prompt",-1)),_.value?(n(),l("button",{key:0,class:"prompt-reset-btn",onClick:fe,title:"Reset to auto-generated prompt"},[...i[40]||(i[40]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),D(" Reset ",-1)])])):(n(),l("span",Sp,"auto"))]),Z(e("textarea",{"onUpdate:modelValue":i[6]||(i[6]=C=>K.value=C),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:i[7]||(i[7]=C=>_.value=!0),spellcheck:"false"},null,544),[[pe,K.value]]),i[42]||(i[42]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),a.value==="single"?(n(),l("div",$p,[e("button",{class:Q(["output-mode-btn",b.value==="slide"&&"active"]),onClick:i[8]||(i[8]=C=>b.value="slide")},"Show on Slide",2),e("button",{class:Q(["output-mode-btn",b.value==="options"&&"active"]),onClick:i[9]||(i[9]=C=>b.value="options")},"Creative Options",2)])):L("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(s).isGenerating||!y.value.trim()&&!K.value.trim()||a.value==="deck"&&(!h.value||h.value<1||h.value>20),onClick:Pe},[w(s).isGenerating?(n(),l("span",Ap)):(n(),l("svg",Mp,[...i[43]||(i[43]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),D(" "+k(w(s).isGenerating?"Generating…":a.value==="deck"?p.value?`Regenerate ${h.value} Slides`:`Generate ${h.value} Slides`:b.value==="slide"?p.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,Ip),a.value==="single"&&b.value==="options"&&(f.value.length||O.value)?(n(),l("div",Ep,[e("div",Pp,[i[44]||(i[44]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:i[10]||(i[10]=C=>{f.value=[],O.value=""})},"Clear")]),O.value?(n(),l("div",zp,[i[45]||(i[45]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),D(" "+k(O.value),1)])):(n(),l("div",Np,[(n(!0),l(F,null,le(f.value,(C,Ie)=>(n(),l("article",{key:Ie,class:"creative-option-card"},[e("h4",Tp,k(C.title),1),e("p",_p,k(C.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:De=>Se(C)},"Use This Option",8,Lp)]))),128))]))])):L("",!0)],64)):v.value==="quiz"?(n(),l(F,{key:1},[e("div",jp,[i[46]||(i[46]=e("label",{class:"form-label"},[D("Quiz Topic "),e("span",{class:"required"},"*")],-1)),Z(e("input",{"onUpdate:modelValue":i[11]||(i[11]=C=>de.value=C),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:pn(c,["enter"])},null,544),[[pe,de.value]])]),e("div",Bp,[e("div",Dp,[i[48]||(i[48]=e("label",{class:"form-label"},"Questions",-1)),Z(e("select",{"onUpdate:modelValue":i[12]||(i[12]=C=>M.value=C),class:"select"},[...i[47]||(i[47]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[ct,M.value,void 0,{number:!0}]])]),e("div",qp,[i[50]||(i[50]=e("label",{class:"form-label"},"Difficulty",-1)),Z(e("select",{"onUpdate:modelValue":i[13]||(i[13]=C=>ue.value=C),class:"select"},[...i[49]||(i[49]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[ct,ue.value]])])]),e("div",Rp,[i[51]||(i[51]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Fp,[(n(),l(F,null,le([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],C=>e("button",{key:C.id,class:Q(["qtype-btn",S.value===C.id&&"active"]),onClick:Ie=>S.value=C.id},[e("span",Vp,k(C.icon),1),e("span",null,k(C.label),1)],10,Up)),64))])]),e("div",Op,[i[52]||(i[52]=e("label",{class:"form-label"},[D("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),Z(e("input",{"onUpdate:modelValue":i[14]||(i[14]=C=>B.value=C),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[pe,B.value]])]),e("div",Gp,[e("div",Wp,[i[54]||(i[54]=e("label",{class:"form-label"},"AI Prompt",-1)),V.value?(n(),l("button",{key:0,class:"prompt-reset-btn",onClick:me,title:"Reset to auto-generated prompt"},[...i[53]||(i[53]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),D(" Reset ",-1)])])):(n(),l("span",Hp,"auto"))]),Z(e("textarea",{"onUpdate:modelValue":i[15]||(i[15]=C=>ne.value=C),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:i[16]||(i[16]=C=>V.value=!0),spellcheck:"false"},null,544),[[pe,ne.value]]),i[55]||(i[55]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(s).isGenerating||!de.value.trim()&&!ne.value.trim(),onClick:i[17]||(i[17]=C=>c(!1))},[w(s).isGenerating?(n(),l("span",Yp)):(n(),l("svg",Jp,[...i[56]||(i[56]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),D(" "+k(w(s).isGenerating?"Generating…":`Generate ${M.value} Questions`),1)],8,Qp),R.value.length?(n(),l("div",Kp,[e("div",Xp,[e("span",Zp,k(R.value.length)+" Questions",1),e("div",ev,[e("button",{class:"btn btn-ghost btn-sm",onClick:i[18]||(i[18]=C=>E(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:i[19]||(i[19]=C=>E(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:i[20]||(i[20]=C=>R.value=[])},"Clear")])]),e("div",tv,[e("button",{class:"btn btn-secondary regen-btn",disabled:w(s).isGenerating,onClick:i[21]||(i[21]=C=>c(!1)),title:"Replace all questions with a new set"},[w(s).isGenerating?(n(),l("span",nv)):(n(),l("svg",lv,[...i[57]||(i[57]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),i[58]||(i[58]=D(" Regenerate ",-1))],8,ov),e("button",{class:"btn btn-ghost regen-btn",disabled:w(s).isGenerating,onClick:i[22]||(i[22]=C=>c(!0)),title:"Generate more and append to current list"},[...i[59]||(i[59]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),D(" Add More ",-1)])],8,iv)]),(n(!0),l(F,null,le(R.value,(C,Ie)=>(n(),l("div",{key:Ie,class:Q(["quiz-card",{deselected:!C._selected}])},[e("div",av,[e("label",sv,[Z(e("input",{type:"checkbox","onUpdate:modelValue":De=>C._selected=De},null,8,rv),[[pt,C._selected]]),e("span",dv,"Q"+k(Ie+1),1)]),e("div",uv,[e("span",{class:Q(["badge difficulty-badge",C.difficulty])},k(C.difficulty),3),e("span",cv,k(C.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",pv,k(C.question),1),e("div",vv,[(n(!0),l(F,null,le(C.options,(De,Le)=>(n(),l("div",{key:Le,class:Q(["q-option",Le===C.correctIndex&&"correct"])},[e("span",mv,k(["A","B","C","D"][Le]),1),e("span",null,k(De),1),Le===C.correctIndex?(n(),l("svg",fv,[...i[60]||(i[60]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):L("",!0)],2))),128))]),C.explanation?(n(),l("div",gv,[i[61]||(i[61]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),D(" "+k(C.explanation),1)])):L("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!R.value.filter(C=>C._selected).length,onClick:$},[i[62]||(i[62]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),D(" Add "+k(R.value.filter(C=>C._selected).length)+" Selected as Quiz Slides ",1)],8,bv)])):L("",!0)],64)):v.value==="voiceover"?(n(),l(F,{key:2},[e("div",yv,[i[63]||(i[63]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),Z(e("textarea",{"onUpdate:modelValue":i[23]||(i[23]=C=>T.value=C),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[pe,T.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(s).isGenerating,onClick:$e},[w(s).isGenerating?(n(),l("span",xv)):L("",!0),D(" "+k(w(s).isGenerating?"Generating…":"Generate Script"),1)],8,hv)],64)):v.value==="improve"?(n(),l(F,{key:3},[(ie=(j=ce.value)==null?void 0:j.content)!=null&&ie.text?(n(),l("div",wv,[i[64]||(i[64]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",kv,k(ce.value.content.text.slice(0,120))+k(ce.value.content.text.length>120?"…":""),1)])):(n(),l("p",Cv,"Select a text element on the canvas to improve it.")),e("div",Sv,[i[65]||(i[65]=e("label",{class:"form-label"},"Instruction",-1)),Z(e("input",{"onUpdate:modelValue":i[24]||(i[24]=C=>g.value=C),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[pe,g.value]])]),i[66]||(i[66]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),Z(e("textarea",{"onUpdate:modelValue":i[25]||(i[25]=C=>g.value=C),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[pe,g.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(s).isGenerating||!ce.value&&!g.value,onClick:i[26]||(i[26]=C=>ce.value?Ye():dt())},[w(s).isGenerating?(n(),l("span",Iv)):L("",!0),D(" "+k(w(s).isGenerating?"Processing…":"Generate"),1)],8,$v)],64)):v.value==="translate"?(n(),l(F,{key:4},[(I=(m=ce.value)==null?void 0:m.content)!=null&&I.text?(n(),l("div",Av,[i[67]||(i[67]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Mv,k(ce.value.content.text.slice(0,120))+k(ce.value.content.text.length>120?"…":""),1)])):(n(),l("p",Ev,"Select a text element on the canvas to translate it.")),e("div",Pv,[i[69]||(i[69]=e("label",{class:"form-label"},"Target Language",-1)),Z(e("select",{"onUpdate:modelValue":i[27]||(i[27]=C=>J.value=C),class:"select"},[...i[68]||(i[68]=[Ue('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[ct,J.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(s).isGenerating||!((G=(q=ce.value)==null?void 0:q.content)!=null&&G.text),onClick:we},[w(s).isGenerating?(n(),l("span",Nv)):L("",!0),D(" "+k(w(s).isGenerating?"Translating…":"Translate Text"),1)],8,zv),p.value?(n(),l("div",Tv,[e("div",_v,[i[70]||(i[70]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",Lv,[e("button",{class:"btn btn-ghost btn-sm",onClick:i[28]||(i[28]=C=>P.navigator.clipboard.writeText(p.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Te,disabled:!ce.value},"Apply",8,jv)])]),e("div",Bv,k(p.value),1)])):L("",!0)],64)):v.value==="image"?(n(),l(F,{key:5},[i[73]||(i[73]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",Dv,[i[71]||(i[71]=e("label",{class:"form-label"},"Image Description",-1)),Z(e("textarea",{"onUpdate:modelValue":i[29]||(i[29]=C=>be.value=C),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[pe,be.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:ze.value||w(s).isGenerating||!be.value,onClick:Ve},[ze.value||w(s).isGenerating?(n(),l("span",Rv)):L("",!0),D(" "+k(ze.value||w(s).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,qv),p.value?(n(),l("div",Fv,[i[72]||(i[72]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",Uv,k(p.value),1)])):L("",!0)],64)):v.value==="settings"?(n(),l("div",Vv,[e("div",Ov,[i[75]||(i[75]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:w(s).apiProvider,class:"select",onChange:i[30]||(i[30]=C=>w(s).setProvider(C.target.value))},[...i[74]||(i[74]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,Gv)]),e("div",Wv,[i[76]||(i[76]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:w(s).apiKey,class:"input",placeholder:"sk-…",onChange:i[31]||(i[31]=C=>w(s).setApiKey(C.target.value))},null,40,Hv),i[77]||(i[77]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),w(s).apiKey?L("",!0):(n(),l("div",Qv,[...i[78]||(i[78]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),D(" Running in ",-1),e("strong",null,"demo mode",-1),D(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):L("",!0),p.value&&v.value!=="settings"&&v.value!=="quiz"?(n(),l("div",Yv,[e("div",Jv,[i[79]||(i[79]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:i[32]||(i[32]=C=>p.value="")},"Clear")]),e("pre",Kv,k(p.value),1),e("div",Xv,[v.value==="generate"?(n(),l("button",{key:0,class:"btn btn-primary btn-sm",onClick:Ce},k(a.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):L("",!0),v.value==="generate"?(n(),l("button",{key:1,class:"btn btn-ghost btn-sm",disabled:w(s).isGenerating,onClick:Pe},[...i[80]||(i[80]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),D(" Regenerate ",-1)])],8,Zv)):L("",!0),v.value==="improve"&&ce.value?(n(),l("button",{key:2,class:"btn btn-primary btn-sm",onClick:We}," Apply to Element ")):L("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:i[33]||(i[33]=C=>{var Ie;return(Ie=P.navigator.clipboard)==null?void 0:Ie.writeText(p.value)})}," Copy ")])])):L("",!0),w(s).lastError?(n(),l("div",e1,[i[81]||(i[81]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),D(" "+k(w(s).lastError),1)])):L("",!0)])])}}},o1=je(t1,[["__scopeId","data-v-697ec3ea"]]),n1={class:"theme-manager"},l1={class:"panel-section"},i1={class:"presets-grid"},a1=["title","onClick"],s1={class:"preset-preview"},r1={class:"preset-name"},d1={class:"panel-section"},u1={class:"theme-fields"},c1={class:"form-label"},p1={class:"color-row"},v1=["value","onInput"],m1=["value","onChange"],f1={class:"panel-section"},g1={class:"theme-field"},b1=["value","placeholder"],y1={class:"chart-palette-preview"},h1={class:"panel-section"},x1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},w1=["value"],k1=["value"],C1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},S1=["value"],$1=["value"],I1={class:"form-group"},A1=["value"],M1={class:"panel-section"},E1={class:"tp-chart-row"},P1={key:0,class:"apply-message success"},z1={key:1,class:"apply-message error"},N1={__name:"ThemeManager",setup(x){const s=Oe(),r=Ge(),u=A(()=>r.getProject(s.projectId)),v=A(()=>{var a;return((a=u.value)==null?void 0:a.theme)||{}}),g=A(()=>vn(v.value)),y=N(""),p=N("");function M(a){r.updateProject(s.projectId,{theme:{...v.value,...a}})}const ee=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],J=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function T(a){M(a)}function W(a,h){const b=a.content||{};return a.type==="text"?{content:{...b,fontFamily:h.fontFamily||b.fontFamily,color:h.textColor||b.color}}:a.type==="heading"?{content:{...b,fontFamily:h.headingFont||h.fontFamily||b.fontFamily,color:h.textColor||b.color}}:a.type==="shape"?{content:{...b,fillColor:h.secondaryColor||b.fillColor}}:a.type==="hotspot"?{content:{...b,bgColor:h.primaryColor||b.bgColor}}:a.type==="button"?{content:{...b,bgColor:h.primaryColor||b.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:h.fontFamily||b.fontFamily}}:a.type==="quiz"?{content:{...b,cardBgColor:h.bgColor||b.cardBgColor,questionColor:h.textColor||b.questionColor,accentColor:h.primaryColor||b.accentColor}}:a.type==="chart"?{content:{...b,...hn(h)}}:null}function K(){M({chartPalette:""})}function _(){y.value="",p.value="";const a=s.projectId,h=u.value,b=v.value;if(!a||!h){p.value="No active project to apply theme.";return}const f=h.slides||[];let O=0;f.forEach(se=>{(se.backgroundType||"color")==="color"&&r.updateSlide(a,se.id,{backgroundType:"color",background:b.bgColor||se.background||"#ffffff"}),(se.elements||[]).forEach(fe=>{const de=W(fe,b);de&&(r.updateElement(a,se.id,fe.id,de),O+=1)})}),y.value=`Applied theme to ${f.length} slide${f.length===1?"":"s"} and ${O} element${O===1?"":"s"}.`}return(a,h)=>(n(),l("div",n1,[e("div",l1,[h[4]||(h[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",i1,[(n(),l(F,null,le(ee,b=>e("div",{key:b.name,class:"preset-card",title:b.name,onClick:f=>T(b)},[e("div",s1,[e("div",{class:"pp-header",style:ae({background:b.primaryColor})},null,4),e("div",{class:"pp-body",style:ae({background:b.bgColor})},[e("div",{class:"pp-line",style:ae({background:b.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:ae({background:b.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:ae({background:b.secondaryColor})},null,4)]),e("span",r1,k(b.name),1)],8,a1)),64))])]),e("div",d1,[h[5]||(h[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",u1,[(n(),l(F,null,le({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(b,f)=>e("div",{class:"theme-field",key:f},[e("label",c1,k(b),1),e("div",p1,[e("input",{type:"color",value:v.value[f]||"#ffffff",class:"color-input-native",onInput:O=>M({[f]:O.target.value})},null,40,v1),e("input",{value:v.value[f]||"",class:"input",onChange:O=>M({[f]:O.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,m1)])])),64))])]),e("div",f1,[h[8]||(h[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",g1,[h[6]||(h[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:v.value.chartPalette||"",class:"input",placeholder:w(Kn)(w(vn)(v.value)),onChange:h[0]||(h[0]=b=>M({chartPalette:b.target.value}))},null,40,b1),e("div",y1,[(n(!0),l(F,null,le(g.value,(b,f)=>(n(),l("span",{key:`theme-chart-${f}`,class:"chart-palette-dot",style:ae({background:b})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:K},"Use auto palette")]),h[7]||(h[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",h1,[h[12]||(h[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",x1,[h[9]||(h[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:v.value.headingFont||"Inter, sans-serif",class:"select",onChange:h[1]||(h[1]=b=>M({headingFont:b.target.value}))},[(n(),l(F,null,le(J,b=>e("option",{key:b.value,value:b.value},k(b.label),9,k1)),64))],40,w1)]),e("div",C1,[h[10]||(h[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:v.value.fontFamily||"Inter, sans-serif",class:"select",onChange:h[2]||(h[2]=b=>M({fontFamily:b.target.value}))},[(n(),l(F,null,le(J,b=>e("option",{key:b.value,value:b.value},k(b.label),9,$1)),64))],40,S1)]),e("div",I1,[h[11]||(h[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:v.value.fontSize||16,class:"input",onChange:h[3]||(h[3]=b=>M({fontSize:+b.target.value}))},null,40,A1)])]),e("div",M1,[h[13]||(h[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:ae({background:v.value.bgColor||"#fff",fontFamily:v.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:ae({color:v.value.textColor,fontFamily:v.value.headingFont||v.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:ae({color:v.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:ae({background:v.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:ae({background:v.value.secondaryColor})},"Badge",4),e("div",E1,[(n(!0),l(F,null,le(g.value.slice(0,5),(b,f)=>(n(),l("span",{key:`preview-chart-${f}`,class:"tp-chart-bar",style:ae({background:b,height:`${22+f*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:_}," Apply Theme to Slides "),y.value?(n(),l("p",P1,k(y.value),1)):L("",!0),p.value?(n(),l("p",z1,k(p.value),1)):L("",!0)])]))}},T1=je(N1,[["__scopeId","data-v-da2b0ce4"]]),_1={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},L1={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},j1={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},B1={class:"export-tabs tabs",style:{"overflow-x":"auto"}},D1={class:"export-content"},q1={class:"export-options",style:{"margin-bottom":"20px"}},R1={class:"form-group"},F1={class:"export-meta"},U1={class:"meta-item"},V1={class:"meta-item"},O1={class:"meta-item"},G1={class:"export-options",style:{"margin-bottom":"20px"}},W1={class:"form-group"},H1={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Q1={class:"export-options",style:{"margin-bottom":"20px"}},Y1={class:"form-group"},J1={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},K1={class:"coming-soon"},X1={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},Z1={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},em={key:1,class:"export-success"},tm={__name:"ExportModal",setup(x){const s=Oe(),r=Ge(),u=xn(),v=A(()=>r.getProject(s.projectId)),g=N("json"),y=N(""),p=N(""),M=N(!0);qe(v,b=>{b&&!p.value&&(p.value=b.name||"presentation")},{immediate:!0});function ee(){const b=r.exportProject(s.projectId);if(!b)return;const f=new Blob([b],{type:"application/json"}),O=URL.createObjectURL(f),se=document.createElement("a");se.href=O,se.download=`${p.value||"project"}.mediasurf.json`,se.click(),URL.revokeObjectURL(O),y.value="success",setTimeout(()=>y.value="",3e3)}function J(b,f="presentation"){return String(b).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||f}function T(b,f,O="html"){const se=vt(f);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${se.width}px;
  --lf-slide-height: ${se.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(b==null?void 0:b.fontFamily)||"Inter, sans-serif"};
  background:
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.lf-shell {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  padding: 18px;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 30px 80px rgba(0,0,0,.34);
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
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(0,0,0,.5);
  transform-origin: center center;
}
.slide {
  position: absolute;
  inset: 0;
  display: none;
  overflow: hidden;
  color: ${(b==null?void 0:b.textColor)||"#1a1a2e"};
}
.slide.active { display: block; }
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
  background: ${(b==null?void 0:b.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(f==null?void 0:f.showProgress)===!1?"none":"block"};
  z-index: 6;
}
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
`}function W(b="html"){return`
(function () {
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
    var slideWidth = Math.max(320, Number(settings.slideWidth || 960));
    var slideHeight = Math.max(320, Number(settings.slideHeight || 540));
    var availableWidth = Math.max(240, window.innerWidth - 72);
    var availableHeight = Math.max(240, window.innerHeight - 72);
    var scale = Math.min(availableWidth / slideWidth, availableHeight / slideHeight, 1.5);
    stage.style.transform = 'scale(' + scale + ')';
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
`}async function K(){return h("html")}async function _(){return h("iframe")}async function a(){return h("pdf")}async function h(b="html"){var H,te,re;const f=v.value;if(!f)return;y.value="processing";const O=new Zn,se=O.folder("assets");let fe=0;async function de(Y,oe="media"){if((!Y||Y.startsWith("data:")||Y.startsWith("http://localhost")||Y.startsWith("blob:"))&&Y.startsWith("data:"))return Y;try{const Ce=await(await fetch(Y)).blob();let ge="bin";const Se=Ce.type;if(Se.includes("image/png")?ge="png":Se.includes("image/jpeg")?ge="jpg":Se.includes("image/gif")?ge="gif":Se.includes("image/svg")?ge="svg":Se.includes("image/webp")?ge="webp":Se.includes("video/mp4")?ge="mp4":Se.includes("audio/mpeg")&&(ge="mp3"),ge==="bin"){const $=Y.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);$&&(ge=$[1])}fe++;const c=`${oe}_${fe}.${ge}`;return se.file(c,Ce),`assets/${c}`}catch(ye){return console.warn("Could not fetch asset:",Y,ye),Y}}const ue=JSON.parse(JSON.stringify([...f.slides||[]])).sort((Y,oe)=>(Y.order??0)-(oe.order??0));if(M.value)for(const Y of ue){Y.backgroundType==="image"&&Y.backgroundImage&&(Y.backgroundImage=await de(Y.backgroundImage,"bg"));for(const oe of Y.elements||[])oe.type==="image"&&((H=oe.content)!=null&&H.src)&&(oe.content.src=await de(oe.content.src,"img")),oe.type==="video"&&((te=oe.content)!=null&&te.src)&&!oe.content.src.includes("youtube")&&!oe.content.src.includes("youtu.be")&&(oe.content.src=await de(oe.content.src,"vid")),oe.type==="audio"&&((re=oe.content)!=null&&re.src)&&(oe.content.src=await de(oe.content.src,"aud"))}const S=J(p.value||f.name||"presentation"),B={name:f.name,theme:f.theme||{},settings:f.settings||{},slides:ue},R=JSON.stringify(B).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),ne=T(f.theme,f.settings,b),V=W(b),ve=`<script id="lf-data" type="application/json">${R}<\/script>`,Ee=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${S}</title>
${b!=="pdf"?`${b!=="pdf"?'<link rel="stylesheet" href="style.css">':`<style>${ne}</style>`}`:`<style>${ne}</style>`}
</head>
<body class="${b==="iframe"?"is-iframe":b==="pdf"?"is-pdf":""}">
<div class="lf-shell">
<div class="progress" id="progress"></div>
<div class="lf-grid"></div>
<div class="lf-stage-shell">
  <div class="presentation" id="presentation"></div>
</div>
<div class="dot-nav" id="dot-nav"></div>
<nav class="nav">
  <button class="nav-btn" id="prev-btn" type="button">← Prev</button>
  <span class="nav-counter" id="counter">1 / ${ue.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${ve}
${b!=="pdf"?'<script src="script.js"><\/script>':`<script>${V}<\/script>`}
</body>
</html>`;O.file("index.html",Ee),O.file("style.css",ne),O.file("script.js",V);const xe=await O.generateAsync({type:"blob"}),ce=URL.createObjectURL(xe),Pe=document.createElement("a");Pe.href=ce,Pe.download=`${S}.zip`,Pe.click(),URL.revokeObjectURL(ce),y.value="success",setTimeout(()=>y.value="",3e3)}return(b,f)=>(n(),Be(Rn,{title:"Export Project",size:"md",onClose:f[13]||(f[13]=O=>w(s).showExportModal=!1)},{footer:Ze(()=>[e("button",{class:"btn btn-secondary",onClick:f[12]||(f[12]=O=>w(s).showExportModal=!1)},"Close")]),default:Ze(()=>{var O,se,fe,de,ue;return[w(u).user?(n(),l(F,{key:1},[e("div",B1,[e("button",{class:Q(["tab-btn",g.value==="json"&&"active"]),onClick:f[2]||(f[2]=S=>g.value="json")},"JSON",2),e("button",{class:Q(["tab-btn",g.value==="html"&&"active"]),onClick:f[3]||(f[3]=S=>g.value="html")},"HTML",2),e("button",{class:Q(["tab-btn",g.value==="iframe"&&"active"]),onClick:f[4]||(f[4]=S=>g.value="iframe")},"Iframe",2),e("button",{class:Q(["tab-btn",g.value==="pdf"&&"active"]),onClick:f[5]||(f[5]=S=>g.value="pdf")},"PDF",2),e("button",{class:Q(["tab-btn",g.value==="scorm"&&"active"]),onClick:f[6]||(f[6]=S=>g.value="scorm")},"SCORM",2)]),e("div",D1,[g.value==="json"?(n(),l(F,{key:0},[f[24]||(f[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",q1,[e("div",R1,[f[19]||(f[19]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),Z(e("input",{type:"text","onUpdate:modelValue":f[7]||(f[7]=S=>p.value=S),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[pe,p.value]])])]),e("div",F1,[e("div",U1,[f[20]||(f[20]=e("span",null,"Project",-1)),e("strong",null,k((O=v.value)==null?void 0:O.name),1)]),e("div",V1,[f[21]||(f[21]=e("span",null,"Slides",-1)),e("strong",null,k(((fe=(se=v.value)==null?void 0:se.slides)==null?void 0:fe.length)||0),1)]),e("div",O1,[f[22]||(f[22]=e("span",null,"Elements",-1)),e("strong",null,k(((ue=(de=v.value)==null?void 0:de.slides)==null?void 0:ue.reduce((S,B)=>{var R;return S+(((R=B.elements)==null?void 0:R.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:ee},[...f[23]||(f[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),D(" Download JSON ",-1)])])],64)):g.value==="html"?(n(),l(F,{key:1},[f[28]||(f[28]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",G1,[e("div",W1,[f[25]||(f[25]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),Z(e("input",{type:"text","onUpdate:modelValue":f[8]||(f[8]=S=>p.value=S),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[pe,p.value]])]),e("label",H1,[Z(e("input",{type:"checkbox","onUpdate:modelValue":f[9]||(f[9]=S=>M.value=S)},null,512),[[pt,M.value]]),f[26]||(f[26]=D(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),f[29]||(f[29]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:K},[...f[27]||(f[27]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),D(" Download HTML ",-1)])])],64)):g.value==="iframe"?(n(),l(F,{key:2},[f[33]||(f[33]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"???"),e("div",null,[e("h4",null,"Iframe Package"),e("p",null,"Export a lightweight package optimized for embedding in other sites via an iframe. Strips out outer backgrounds and fits precisely.")])],-1)),e("div",Q1,[e("div",Y1,[f[30]||(f[30]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),Z(e("input",{type:"text","onUpdate:modelValue":f[10]||(f[10]=S=>p.value=S),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[pe,p.value]])]),e("label",J1,[Z(e("input",{type:"checkbox","onUpdate:modelValue":f[11]||(f[11]=S=>M.value=S)},null,512),[[pt,M.value]]),f[31]||(f[31]=D(" Download external assets locally ",-1))])]),e("button",{class:"btn btn-primary export-btn",onClick:_},[...f[32]||(f[32]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),D(" Download Iframe Zip ",-1)])])],64)):g.value==="pdf"?(n(),l(F,{key:3},[f[35]||(f[35]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"??"),e("div",null,[e("h4",null,"PDF Document"),e("p",null,"Generate a printable, static PDF version of all slides. Converts perfectly to a standard presentation handout.")])],-1)),f[36]||(f[36]=e("p",{style:{"margin-bottom":"20px","font-size":"13px",color:"#666"}},`This will open the presentation in a new printable window. Just use your browser's Print dialog and select "Save as PDF".`,-1)),e("button",{class:"btn btn-primary export-btn",onClick:a},[...f[34]||(f[34]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),D(" Generate PDF ",-1)])])],64)):g.value==="scorm"?(n(),l(F,{key:4},[f[40]||(f[40]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",K1,[(n(),l("svg",X1,[...f[37]||(f[37]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),f[38]||(f[38]=e("h4",null,"Coming Soon",-1)),f[39]||(f[39]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):L("",!0),rt(ft,{name:"fade"},{default:Ze(()=>[y.value==="processing"?(n(),l("div",Z1,[...f[41]||(f[41]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),D(" Generating package... Please wait. ",-1)])])):y.value==="success"?(n(),l("div",em,[...f[42]||(f[42]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),D(" Export successful! Check your downloads folder. ",-1)])])):L("",!0)]),_:1})])],64)):(n(),l("div",_1,[(n(),l("svg",L1,[...f[14]||(f[14]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),f[17]||(f[17]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),f[18]||(f[18]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",j1,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:f[0]||(f[0]=S=>w(u).loginWithGoogle())},[...f[15]||(f[15]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),D(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:f[1]||(f[1]=S=>w(u).loginWithMicrosoft())},[...f[16]||(f[16]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),D(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},om=je(tm,[["__scopeId","data-v-32418074"]]),nm={key:0,class:"editor-view"},lm={class:"editor-topbar"},im={class:"topbar-left"},am={class:"project-name-wrap"},sm=["value"],rm={class:"save-label"},dm={class:"topbar-center"},um={key:0,class:"slide-position"},cm={class:"topbar-right"},pm={class:"editor-body"},vm={class:"authoring-rail"},mm=["onClick","data-tooltip"],fm={key:0,class:"rail-icon"},gm={key:1,class:"rail-icon"},bm={key:2,class:"rail-icon"},ym={key:3,class:"rail-icon"},hm={key:4,class:"rail-icon"},xm={key:5,class:"rail-icon"},wm={key:6,class:"rail-icon"},km={key:7,class:"rail-icon"},Cm={key:8,class:"rail-icon"},Sm={class:"right-panel"},$m={class:"panel-tabs"},Im=["onClick","data-tooltip"],Am={class:"tab-icon"},Mm={class:"tab-label"},Em={class:"panel-content"},Pm={key:1,class:"editor-not-found"},zm={__name:"EditorView",setup(x){const s=Dn(),r=Bn(),u=Oe(),v=Ge(),g=xn(),y=A(()=>s.params.id),p=A(()=>v.getProject(y.value)),M=A(()=>vt(p.value)),ee=A(()=>{var c;return[...((c=p.value)==null?void 0:c.slides)||[]].sort(($,E)=>$.order-E.order)}),J=N(null),T=N(!1),W=N("deck"),{aiStore:K,showAIModal:_,aiMode:a,aiTopic:h,aiContext:b,aiProjectName:f,aiSlideCount:O,aiQuestionCount:se,aiDifficulty:fe,aiQuestionType:de,aiCreationError:ue,aiSubmitting:S,aiProjectNamePlaceholder:B,aiPrimaryActionLabel:R,openAICreationModal:ne,createAIProject:V}=Fn({onRequireAuth:()=>r.push({name:"dashboard"})});let ve=!1,me=null;qe(()=>p.value,c=>{if(c){if(ve){ve=!1;return}me&&clearTimeout(me),me=setTimeout(()=>{u.pushHistory(c)},600)}},{deep:!0}),qe(()=>g.isAuthReady,async c=>{var $;if(c){if(($=g.user)!=null&&$.uid&&await v.ensureRemoteProjectsLoaded(),!p.value){r.push({name:"dashboard"});return}u.setProject(y.value),ee.value.length>0&&u.setCurrentSlide(ee.value[0].id),u.pushHistory(p.value)}},{immediate:!0});const Ee=A(()=>{const c=p.value;return c?`Saved ${new Date(c.updatedAt).toLocaleTimeString()}`:""}),xe=A(()=>{switch(u.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});el({undo:()=>{if(u.canUndo()){const c=u.undo();c&&(ve=!0,v.updateProject(y.value,c))}},redo:()=>{if(u.canRedo()){const c=u.redo();c&&(ve=!0,v.updateProject(y.value,c))}},delete:()=>{u.selectedElementId&&(v.deleteElement(u.projectId,u.currentSlideId,u.selectedElementId),u.clearSelection())},escape:()=>{u.clearSelection(),u.setActiveTool("select")},copy:()=>{var $,E,$e,we;const c=(we=($e=(E=($=p.value)==null?void 0:$.slides)==null?void 0:E.find(Te=>Te.id===u.currentSlideId))==null?void 0:$e.elements)==null?void 0:we.find(Te=>Te.id===u.selectedElementId);c&&u.setClipboard(c)},paste:()=>{if(u.clipboard&&u.currentSlideId){const c=u.clipboard;v.addElement(u.projectId,u.currentSlideId,c.type,{...c,x:c.x+20,y:c.y+20,id:void 0})}},duplicate:()=>{if(u.selectedElementId){const c=v.duplicateElement(u.projectId,u.currentSlideId,u.selectedElementId);c&&u.selectElement(c.id)}},zoomIn:()=>u.zoomIn(),zoomOut:()=>u.zoomOut(),zoomReset:()=>u.zoomReset(),toggleGrid:()=>u.toggleGrid(),nudge:(c,$)=>{var $e,we,Te,be;if(!u.selectedElementId)return;const E=(be=(Te=(we=($e=p.value)==null?void 0:$e.slides)==null?void 0:we.find(ze=>ze.id===u.currentSlideId))==null?void 0:Te.elements)==null?void 0:be.find(ze=>ze.id===u.selectedElementId);E&&v.updateElement(u.projectId,u.currentSlideId,u.selectedElementId,{x:E.x+c,y:E.y+$})},selectAll:()=>{var $,E,$e;((($e=(E=($=p.value)==null?void 0:$.slides)==null?void 0:E.find(we=>we.id===u.currentSlideId))==null?void 0:$e.elements)||[]).forEach((we,Te)=>u.selectElement(we.id,Te>0))}});function ce(){r.push({name:"dashboard"})}function Pe(){r.push({name:"preview",params:{id:y.value},query:{from:"editor"}})}function H(c="deck"){W.value=c,T.value=!0}function te(){T.value=!1,ne(W.value)}function re(c,$="Image"){if(!u.projectId||!u.currentSlideId||!c)return;const E=new Image;E.onload=()=>{const Te=Math.min(420/E.width,280/E.height,1),be=Math.max(120,Math.round(E.width*Te)),ze=Math.max(80,Math.round(E.height*Te)),Ve=Math.max(24,Math.round((M.value.width-be)/2)),Ye=Math.max(24,Math.round((M.value.height-ze)/2)),We=v.addElement(u.projectId,u.currentSlideId,"image",{x:Ve,y:Ye,width:be,height:ze,content:{src:c,alt:$,objectFit:"cover"}});We&&(u.selectElement(We.id),u.setRightPanel("properties"),u.setActiveTool("select"))},E.src=c}function Y(c){const[$]=Array.from(c.target.files||[]);if(!$||!$.type.startsWith("image/"))return;const E=new FileReader;E.onload=()=>re(String(E.result||""),$.name),E.readAsDataURL($),c.target.value=""}function oe(){var c;(c=J.value)==null||c.click()}const ye=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function Ce(c){if(c==="text"){u.setActiveTool("text");return}if(c==="resources"){u.setActiveTool("image");return}if(c==="interactive-elements"){u.setActiveTool("hotspot");return}if(c==="interactive-questions"){u.setActiveTool("quiz");return}if(c==="widgets"){u.setActiveTool("shape");return}if(c==="insert"){oe();return}if(c==="style"){u.setRightPanel("properties");return}if(c==="background"){u.clearSelection(),u.setRightPanel("properties");return}c==="pages"&&u.toggleSlidePanel()}function ge(c){return c==="text"?["text","heading"].includes(u.activeTool):c==="resources"?u.activeTool==="image":c==="interactive-elements"?["hotspot","button"].includes(u.activeTool):c==="interactive-questions"?u.activeTool==="quiz":c==="widgets"?["shape","video","audio","chart"].includes(u.activeTool):c==="insert"?!1:c==="style"||c==="background"?u.rightPanelTab==="properties":c==="pages"?u.showSlidePanel:!1}function Se(){On({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return qe(()=>p.value,c=>{c&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{Se()},100)},{immediate:!0}),(c,$)=>p.value?(n(),l("div",nm,[e("input",{ref_key:"imageInputRef",ref:J,type:"file",accept:"image/*",class:"sr-only",onChange:Y},null,544),e("header",lm,[e("div",im,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:ce,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...$[14]||($[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),D(" Dashboard ",-1)])]),e("div",am,[e("input",{value:p.value.name,class:"project-name-input",onChange:$[0]||($[0]=E=>w(v).updateProject(y.value,{name:E.target.value}))},null,40,sm)]),e("span",rm,k(Ee.value),1)]),e("div",dm,[w(u).currentSlideId?(n(),l("span",um," Slide "+k(ee.value.findIndex(E=>E.id===w(u).currentSlideId)+1)+" of "+k(ee.value.length),1)):L("",!0)]),e("div",cm,[e("button",{class:"btn btn-ghost btn-sm",onClick:Se,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...$[15]||($[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),D(" Help ",-1)])]),e("button",{class:Q(["btn btn-ghost btn-sm",w(u).showAIPanel&&"active-btn"]),onClick:$[1]||($[1]=E=>{w(u).showAIPanel=!w(u).showAIPanel,w(u).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...$[16]||($[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),D(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:$[2]||($[2]=E=>{w(u).showThemeManager=!w(u).showThemeManager,w(u).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...$[17]||($[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),D(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:Pe,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...$[18]||($[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),D(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:$[3]||($[3]=E=>w(u).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...$[19]||($[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),D(" Export ",-1)])])])]),rt(pc,{onOpenAiProject:H}),e("div",pm,[e("aside",vm,[(n(),l(F,null,le(ye,E=>e("button",{key:E.id,class:Q(["rail-option",ge(E.id)&&"active"]),onClick:$e=>Ce(E.id),"data-tooltip":E.label,"data-tooltip-position":"right"},[E.id==="text"?(n(),l("span",fm,"T")):E.id==="resources"?(n(),l("span",gm,[...$[20]||($[20]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):E.id==="interactive-elements"?(n(),l("span",bm,[...$[21]||($[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):E.id==="interactive-questions"?(n(),l("span",ym,[...$[22]||($[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):E.id==="widgets"?(n(),l("span",hm,[...$[23]||($[23]=[Ue('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-b65c4daf><rect x="3" y="3" width="7" height="7" data-v-b65c4daf></rect><rect x="14" y="3" width="7" height="7" data-v-b65c4daf></rect><rect x="14" y="14" width="7" height="7" data-v-b65c4daf></rect><rect x="3" y="14" width="7" height="7" data-v-b65c4daf></rect></svg>',1)])])):E.id==="insert"?(n(),l("span",xm,[...$[24]||($[24]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):E.id==="style"?(n(),l("span",wm,[...$[25]||($[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):E.id==="background"?(n(),l("span",km,[...$[26]||($[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):E.id==="pages"?(n(),l("span",Cm,[...$[27]||($[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):L("",!0),D(" "+k(E.label),1)],10,mm)),64))]),rt(ft,{name:"side-panel-slide"},{default:Ze(()=>[w(u).showSlidePanel?(n(),Be(fl,{key:0})):L("",!0)]),_:1}),rt(pp),e("aside",Sm,[e("div",$m,[(n(),l(F,null,le([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],E=>e("button",{key:E.id,class:Q(["panel-tab",w(u).rightPanelTab===E.id&&"active"]),onClick:$e=>w(u).setRightPanel(E.id),"data-tooltip":`Open ${E.label}`,"data-tooltip-position":"bottom"},[e("span",Am,k(E.icon),1),e("span",Mm,k(E.label),1)],10,Im)),64))]),e("div",Em,[rt(ft,{name:"editor-panel-switch",mode:"out-in"},{default:Ze(()=>[(n(),l("div",{key:xe.value,class:"panel-content-view"},[w(u).rightPanelTab==="properties"?(n(),Be(Wu,{key:0})):w(u).rightPanelTab==="layers"?(n(),Be(jl,{key:1})):w(u).rightPanelTab==="ai"?(n(),Be(o1,{key:2})):w(u).rightPanelTab==="theme"?(n(),Be(T1,{key:3})):L("",!0)]))]),_:1})])])]),w(u).showExportModal?(n(),Be(om,{key:0})):L("",!0),T.value?(n(),Be(Un,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:$[4]||($[4]=E=>T.value=!1),onConfirm:te})):L("",!0),w(_)?(n(),Be(Vn,{key:2,mode:w(a),topic:w(h),context:w(b),"project-name":w(f),"slide-count":w(O),"question-count":w(se),difficulty:w(fe),"question-type":w(de),"project-name-placeholder":w(B),"primary-action-label":w(R),"creation-error":w(ue),"is-submitting":w(S),"is-generating":w(K).isGenerating,"has-api-key":!!w(K).apiKey,onClose:$[5]||($[5]=E=>_.value=!1),onCreate:w(V),"onUpdate:mode":$[6]||($[6]=E=>a.value=E),"onUpdate:topic":$[7]||($[7]=E=>h.value=E),"onUpdate:context":$[8]||($[8]=E=>b.value=E),"onUpdate:projectName":$[9]||($[9]=E=>f.value=E),"onUpdate:slideCount":$[10]||($[10]=E=>O.value=E),"onUpdate:questionCount":$[11]||($[11]=E=>se.value=E),"onUpdate:difficulty":$[12]||($[12]=E=>fe.value=E),"onUpdate:questionType":$[13]||($[13]=E=>de.value=E)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):L("",!0)])):(n(),l("div",Pm,[$[28]||($[28]=e("h2",null,"Project not found",-1)),$[29]||($[29]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:ce},"Go to Dashboard")]))}},qm=je(zm,[["__scopeId","data-v-b65c4daf"]]);export{qm as default};
