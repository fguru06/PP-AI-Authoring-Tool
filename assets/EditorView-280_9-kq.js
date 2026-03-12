import{K as mn,P as fn,v as l,F as i,B as e,C as w,H as U,I as te,E as Ie,D as H,u as x,Q as le,M as Ue,G as _,L as q,q as Be,R as gn,f as I,r as z,N as Z,S as ft,w as qe,O as ve,i as Nn,U as Tn,n as _n,y as rt,x as Ze,T as mt,V as ct,z as Ln,p as jn,J as pn}from"./vue-core-DCl8Fgqc.js";import{u as Bn,d as Dn}from"./vue-ecosystem-Da9kls6U.js";import{u as Oe,c as qn,M as Rn,a as Fn,C as Un,A as Vn,b as On}from"./ConfirmActionModal-BoR1zJnS.js";import{u as We,b as Wn,g as pt,C as Gn,n as Hn,p as Qn,s as Yn,m as bn,f as yn,c as hn,d as Jn,e as Kn,h as vn,a as xn}from"./projectStore-BEvm_ot1.js";import{_ as je}from"./index-fihk93ke.js";import{C as Xn}from"./ChartElement-DksnDjWo.js";import{J as Zn}from"./jszip-529iNPX7.js";function el(h){function s(r){var p,P,K,Q,T,G,Y,C,n,b,y,F,X,me,ie,fe,ce;const d=r.ctrlKey||r.metaKey,v=r.key.toLowerCase(),f=r.target.tagName.toLowerCase(),g=f==="input"||f==="textarea"||r.target.isContentEditable;g&&d&&["c","v","x","a","z","y"].includes(v)||(d&&v==="z"&&!r.shiftKey?(r.preventDefault(),(p=h.undo)==null||p.call(h)):d&&(v==="y"||v==="z"&&r.shiftKey)?(r.preventDefault(),(P=h.redo)==null||P.call(h)):d&&v==="c"?(r.preventDefault(),(K=h.copy)==null||K.call(h)):d&&v==="v"?(r.preventDefault(),(Q=h.paste)==null||Q.call(h)):d&&v==="x"?(r.preventDefault(),(T=h.cut)==null||T.call(h)):d&&v==="d"?(r.preventDefault(),(G=h.duplicate)==null||G.call(h)):d&&v==="a"?(r.preventDefault(),(Y=h.selectAll)==null||Y.call(h)):v==="delete"||v==="backspace"?g||(r.preventDefault(),(C=h.delete)==null||C.call(h)):v==="escape"?(n=h.escape)==null||n.call(h):d&&v==="g"?(r.preventDefault(),(b=h.toggleGrid)==null||b.call(h)):d&&v==="="||d&&v==="+"?(r.preventDefault(),(y=h.zoomIn)==null||y.call(h)):d&&v==="-"?(r.preventDefault(),(F=h.zoomOut)==null||F.call(h)):d&&v==="0"?(r.preventDefault(),(X=h.zoomReset)==null||X.call(h)):v==="arrowleft"?(me=h.nudge)==null||me.call(h,-1,0):v==="arrowright"?(ie=h.nudge)==null||ie.call(h,1,0):v==="arrowup"?(fe=h.nudge)==null||fe.call(h,0,-1):v==="arrowdown"&&((ce=h.nudge)==null||ce.call(h,0,1)))}mn(()=>window.addEventListener("keydown",s)),fn(()=>window.removeEventListener("keydown",s))}const tl={class:"slide-panel"},ol={class:"slide-panel-header"},nl={class:"slide-count"},ll={class:"slides-list"},il=["onClick","onContextmenu","onDragstart","onDrop"],al={class:"slide-number"},sl=["viewBox"],rl=["x","y","width","height","fill"],ul=["d","stroke"],dl=["d","fill"],cl={class:"slide-footer"},pl={class:"slide-title"},vl=["onClick"],ml={__name:"SlidePanel",setup(h){const s=Oe(),r=We(),d=I(()=>r.getProject(s.projectId)),v=I(()=>pt(d.value)),f=I(()=>{var N,j;return((j=(N=d.value)==null?void 0:N.slides)==null?void 0:j.slice().sort((V,ae)=>V.order-ae.order))||[]}),g=z({show:!1,x:0,y:0,slideId:null});function p(N){s.setCurrentSlide(N)}function P(){const N=f.value.findIndex(V=>V.id===s.currentSlideId),j=r.addSlide(s.projectId,N);j&&s.setCurrentSlide(j.id)}function K(N){var ae,O;const j=f.value.findIndex(de=>de.id===N);r.deleteSlide(s.projectId,N);const V=((ae=d.value)==null?void 0:ae.slides)||[];if(V.length>0){const de=V.slice().sort((Ae,ye)=>Ae.order-ye.order),re=Math.min(j,de.length-1);s.setCurrentSlide((O=de[re])==null?void 0:O.id)}}function Q(N,j){N.preventDefault(),g.value={show:!0,x:N.clientX,y:N.clientY,slideId:j},setTimeout(()=>window.addEventListener("click",T,{once:!0}),0)}function T(){g.value.show=!1}function G(){const N=r.duplicateSlide(s.projectId,g.value.slideId);N&&s.setCurrentSlide(N.id),T()}function Y(){K(g.value.slideId),T()}function C(N,j){N.stopPropagation(),K(j)}function n(){const N=f.value.findIndex(j=>j.id===g.value.slideId);N>0&&r.reorderSlides(s.projectId,N,N-1),T()}function b(){const N=f.value.findIndex(j=>j.id===g.value.slideId);N<f.value.length-1&&r.reorderSlides(s.projectId,N,N+1),T()}let y=-1;function F(N,j){y=j,N.dataTransfer.effectAllowed="move"}function X(N,j){N.preventDefault(),y!==-1&&y!==j&&r.reorderSlides(s.projectId,y,j),y=-1}function me(N){return N.backgroundType==="gradient"&&N.backgroundGradient?{background:N.backgroundGradient}:N.backgroundType==="image"&&N.backgroundImage?{backgroundImage:`url(${N.backgroundImage})`,backgroundSize:"cover"}:{background:N.background||"#fff"}}function ie(N){return{left:N.x/v.value.width*100+"%",top:N.y/v.value.height*100+"%",width:N.width/v.value.width*100+"%",height:N.height/v.value.height*100+"%"}}function fe(N){var j,V;return{background:N.type==="shape"?(j=N.content)==null?void 0:j.fillColor:N.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:N.type==="shape"&&((V=N.content)==null?void 0:V.shapeType)==="circle"?"50%":void 0}}function ce(N){var j;return Wn(N.content||{},N.width||420,N.height||280,((j=d.value)==null?void 0:j.theme)||{})}return(N,j)=>(l(),i("div",tl,[e("div",ol,[j[2]||(j[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",nl,w(f.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:P,"data-tooltip":"Add slide","aria-label":"Add slide"},[...j[1]||(j[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",ll,[(l(!0),i(U,null,te(f.value,(V,ae)=>(l(),i("div",{key:V.id,class:H(["slide-thumb-item",x(s).currentSlideId===V.id&&"active"]),draggable:"true",onClick:O=>p(V.id),onContextmenu:O=>Q(O,V.id),onDragstart:O=>F(O,ae),onDragover:j[0]||(j[0]=Ie(()=>{},["prevent"])),onDrop:O=>X(O,ae)},[e("div",al,w(ae+1),1),e("div",{class:"slide-thumb",style:le(me(V))},[(l(!0),i(U,null,te(V.elements.slice(0,6),O=>{var de;return l(),i("div",{key:O.id,class:"mini-element-frame",style:le(ie(O))},[O.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${O.width||420} ${O.height||280}`,preserveAspectRatio:"none"},[ce(O).type==="bar"?(l(!0),i(U,{key:0},te(ce(O).cartesian.bars,re=>(l(),i("rect",{key:`mini-bar-${re.id}`,x:re.x,y:re.y,width:re.width,height:re.height,fill:re.color,rx:"6"},null,8,rl))),128)):ce(O).type==="line"?(l(),i("path",{key:1,d:ce(O).cartesian.linePath,stroke:((de=ce(O).cartesian.points[0])==null?void 0:de.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,ul)):(l(!0),i(U,{key:2},te(ce(O).circle.slices,re=>(l(),i("path",{key:`mini-slice-${re.id}`,d:re.path,fill:re.color},null,8,dl))),128))],8,sl)):(l(),i("div",{key:1,class:"mini-element",style:le(fe(O))},null,4))],4)}),128))],4),e("div",cl,[e("div",pl,w(V.title||`Slide ${ae+1}`),1),f.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:O=>C(O,V.id)},[...j[3]||(j[3]=[Ue('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,vl)):_("",!0)])],42,il))),128))]),e("button",{class:"add-slide-bottom",onClick:P},[...j[4]||(j[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),q(" Add Slide ",-1)])]),(l(),Be(gn,{to:"body"},[g.value.show?(l(),i("div",{key:0,class:"context-menu",style:le({left:g.value.x+"px",top:g.value.y+"px"})},[e("button",{class:"ctx-item",onClick:G},"Duplicate"),e("button",{class:"ctx-item",onClick:n},"Move Up"),e("button",{class:"ctx-item",onClick:b},"Move Down"),j[5]||(j[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Y},"Delete Slide")],4)):_("",!0)]))]))}},fl=je(ml,[["__scopeId","data-v-30eea542"]]),gl={class:"layer-panel"},bl={class:"layer-header panel-section"},yl={class:"panel-title",style:{"margin-bottom":"0"}},hl={class:"layer-count"},xl={key:0,class:"layers-empty"},wl={key:1,class:"layers-list"},kl=["onClick"],Cl={class:"layer-type-icon"},Sl={class:"layer-name"},$l={class:"layer-actions"},Il=["onClick","data-tooltip"],Al={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ml={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},El=["onClick","data-tooltip"],Pl={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},zl={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Nl=["onClick"],Tl=["onClick"],_l=["onClick"],Ll={__name:"LayerPanel",setup(h){const s=Oe(),r=We(),d=I(()=>r.getProject(s.projectId)),v=I(()=>{var C,n;return(n=(C=d.value)==null?void 0:C.slides)==null?void 0:n.find(b=>b.id===s.currentSlideId)}),f=I(()=>{var C;return[...((C=v.value)==null?void 0:C.elements)||[]].sort((n,b)=>(b.zIndex||0)-(n.zIndex||0))});function g(C){s.selectElement(C)}function p(C){r.updateElement(s.projectId,s.currentSlideId,C.id,{visible:!C.visible})}function P(C){r.updateElement(s.projectId,s.currentSlideId,C.id,{locked:!C.locked})}function K(C){r.reorderElement(s.projectId,s.currentSlideId,C,"up")}function Q(C){r.reorderElement(s.projectId,s.currentSlideId,C,"down")}function T(C){r.deleteElement(s.projectId,s.currentSlideId,C),s.selectedElementId===C&&s.clearSelection()}function G(C){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[C]||"◆"}function Y(C){var n,b,y;return(n=C.content)!=null&&n.text?C.content.text.slice(0,24):(b=C.content)!=null&&b.label?C.content.label:(y=C.content)!=null&&y.question?C.content.question.slice(0,24):C.type.charAt(0).toUpperCase()+C.type.slice(1)}return(C,n)=>(l(),i("div",gl,[e("div",bl,[e("div",yl,[n[0]||(n[0]=q(" Layers ",-1)),e("span",hl,w(f.value.length),1)])]),f.value.length===0?(l(),i("div",xl,[...n[1]||(n[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",wl,[(l(!0),i(U,null,te(f.value,b=>(l(),i("div",{key:b.id,class:H(["layer-item",x(s).selectedElementIds.includes(b.id)&&"selected",b.locked&&"locked",!b.visible&&"hidden"]),onClick:y=>g(b.id)},[e("span",Cl,w(G(b.type)),1),e("span",Sl,w(Y(b)),1),e("div",$l,[e("button",{class:H(["layer-action-btn",{active:b.visible}]),onClick:Ie(y=>p(b),["stop"]),"data-tooltip":b.visible?"Hide":"Show"},[b.visible?(l(),i("svg",Al,[...n[2]||(n[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",Ml,[...n[3]||(n[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,Il),e("button",{class:H(["layer-action-btn",{active:b.locked}]),onClick:Ie(y=>P(b),["stop"]),"data-tooltip":b.locked?"Unlock":"Lock"},[b.locked?(l(),i("svg",Pl,[...n[4]||(n[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",zl,[...n[5]||(n[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,El),e("button",{class:"layer-action-btn",onClick:Ie(y=>K(b.id),["stop"]),"data-tooltip":"Move up"},[...n[6]||(n[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,Nl),e("button",{class:"layer-action-btn",onClick:Ie(y=>Q(b.id),["stop"]),"data-tooltip":"Move down"},[...n[7]||(n[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Tl),e("button",{class:"layer-action-btn danger",onClick:Ie(y=>T(b.id),["stop"]),"data-tooltip":"Delete"},[...n[8]||(n[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,_l)])],10,kl))),128))]))]))}},jl=je(Ll,[["__scopeId","data-v-7407acd8"]]),Bl={class:"panel-section"},Dl={class:"preset-toolbar"},ql=["value"],Rl=["value"],Fl=["value"],Ul={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},Vl=["onClick"],Ol={class:"preset-meta-chip muted"},Wl={key:1,class:"import-review"},Gl={class:"motion-scrubber-header"},Hl={class:"preset-toolbar compact"},Ql=["value"],Yl=["value"],Jl={class:"import-list"},Kl=["onUpdate:modelValue"],Xl={class:"import-item-title"},Zl={class:"preset-meta-chip"},ei={key:0,class:"preset-meta-chip muted"},ti={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(h,{emit:s}){const r=s;return(d,v)=>(l(),i("div",Bl,[v[13]||(v[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",Dl,[e("input",{value:h.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:v[0]||(v[0]=f=>r("update:searchQuery",f.target.value))},null,40,ql),e("select",{value:h.categoryFilter,class:"select",onChange:v[1]||(v[1]=f=>r("update:categoryFilter",f.target.value))},[v[8]||(v[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(U,null,te(h.availableCategories,f=>(l(),i("option",{key:`library-${f}`,value:f},w(f),9,Fl))),128))],40,Rl),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[2]||(v[2]=f=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[3]||(v[3]=f=>r("export-presets"))},"Export")]),h.recentPresets.length?(l(),i("div",Ul,[v[9]||(v[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(U,null,te(h.recentPresets,f=>(l(),i("div",{class:"preset-item",key:`recent-${f.id}`},[e("button",{type:"button",class:"preset-chip",onClick:g=>r("apply-preset",f)},w(f.name),9,Vl),e("span",Ol,"Used "+w(f.usageCount)+"x",1)]))),128))])):_("",!0),h.pendingImportedPresets.length?(l(),i("div",Wl,[e("div",Gl,[v[10]||(v[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[4]||(v[4]=f=>r("clear-imports"))},"Discard")]),e("div",Hl,[e("select",{value:h.importScopeFilter,class:"select",onChange:v[5]||(v[5]=f=>r("update:importScopeFilter",f.target.value))},[...v[11]||(v[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Ql),e("select",{value:h.importConflictMode,class:"select",onChange:v[6]||(v[6]=f=>r("update:importConflictMode",f.target.value))},[...v[12]||(v[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Yl),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:v[7]||(v[7]=f=>r("apply-imports"))},"Merge Selected")]),e("div",Jl,[(l(!0),i(U,null,te(h.filteredPendingImports,f=>(l(),i("label",{key:`pending-${f.id}`,class:"import-item"},[Z(e("input",{"onUpdate:modelValue":g=>f.selected=g,type:"checkbox"},null,8,Kl),[[ft,f.selected]]),e("span",Xl,w(f.name),1),e("span",Zl,w(f.scope),1),f.category?(l(),i("span",ei,w(f.category),1)):_("",!0)]))),128))])])):_("",!0)]))}},oi=je(ti,[["__scopeId","data-v-61f99273"]]),ni={class:"properties-panel"},li={key:1,class:"panel-section"},ii={class:"field-hint"},ai={class:"motion-scrubber-shell"},si={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},ri=["onClick"],ui={class:"motion-preview"},di={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},ci={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},pi={class:"motion-card-label"},vi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},mi={class:"form-group"},fi={class:"form-group"},gi={class:"form-group",style:{"margin-top":"var(--space-3)"}},bi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},yi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},hi={key:0,class:"preset-list"},xi=["onDragstart","onDragenter","onDrop"],wi=["onClick"],ki={key:0,class:"preset-meta-chip"},Ci=["onClick"],Si=["onClick"],$i=["onClick"],Ii={key:1,class:"preset-row preset-edit-row"},Ai=["onClick"],Mi={key:1,class:"field-hint"},Ei={key:2,class:"panel-section"},Pi={class:"slide-settings-tabs"},zi={key:0,class:"slide-settings-pane"},Ni={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ti={class:"form-group"},_i={class:"bg-type-tabs"},Li=["onClick"],ji={key:0,class:"color-row"},Bi=["value"],Di=["value"],qi={class:"slide-settings-subsection"},Ri={class:"canvas-size-grid"},Fi=["onClick"],Ui={class:"canvas-size-icon-shell"},Vi={class:"canvas-size-name"},Oi={class:"canvas-size-ratio"},Wi={class:"canvas-custom-card"},Gi={class:"canvas-custom-header"},Hi={class:"field-hint"},Qi={class:"canvas-custom-inputs"},Yi={class:"form-group"},Ji={class:"canvas-size-input-wrap"},Ki=["value"],Xi={class:"form-group"},Zi={class:"canvas-size-input-wrap"},ea=["value"],ta={class:"check-row canvas-size-lock"},oa={class:"slide-settings-subsection"},na={key:1,class:"slide-settings-pane"},la=["value"],ia={class:"form-group",style:{"margin-top":"var(--space-3)"}},aa=["value"],sa={class:"check-row"},ra=["checked"],ua={key:2,class:"slide-settings-pane"},da={class:"check-row"},ca=["checked"],pa={class:"check-row"},va=["checked"],ma={class:"check-row"},fa=["checked"],ga={class:"check-row"},ba=["checked"],ya={class:"check-row"},ha=["checked"],xa={class:"panel-section"},wa={class:"panel-title"},ka={class:"element-type-badge"},Ca={class:"geo-grid"},Sa={class:"form-group"},$a=["value"],Ia={class:"form-group"},Aa=["value"],Ma={class:"form-group"},Ea=["value"],Pa={class:"form-group"},za=["value"],Na={class:"form-group"},Ta=["value"],_a={class:"form-group"},La=["value"],ja={class:"panel-section"},Ba={class:"motion-scrubber-shell"},Da={class:"motion-card-grid"},qa=["onClick"],Ra={class:"motion-preview"},Fa={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Ua={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Va={class:"motion-card-label"},Oa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Wa={class:"form-group"},Ga=["value"],Ha={class:"form-group"},Qa=["value"],Ya={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ja={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Ka={key:0,class:"preset-list"},Xa=["onDragstart","onDragenter","onDrop"],Za=["onClick"],es={key:0,class:"preset-meta-chip"},ts=["onClick"],os=["onClick"],ns=["onClick"],ls={key:1,class:"preset-row preset-edit-row"},is=["onClick"],as={key:1,class:"field-hint"},ss={key:0,class:"panel-section"},rs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},us=["value"],ds={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},cs={class:"form-group"},ps=["value"],vs={class:"form-group"},ms=["value"],fs={class:"form-group",style:{"margin-top":"var(--space-3)"}},gs=["value"],bs=["value"],ys={class:"form-group",style:{"margin-top":"var(--space-3)"}},hs={class:"align-btns"},xs=["onClick"],ws={class:"form-group",style:{"margin-top":"var(--space-3)"}},ks={class:"style-btns"},Cs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ss={class:"color-row"},$s=["value"],Is=["value"],As={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ms=["value"],Es={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ps={class:"form-group"},zs=["value"],Ns={class:"form-group"},Ts=["value"],_s={key:1,class:"panel-section"},Ls={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},js=["value"],Bs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ds=["value"],qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Rs=["value"],Fs={class:"form-group"},Us=["value"],Vs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Os={class:"form-group"},Ws=["value"],Gs={class:"form-group"},Hs=["value"],Qs={key:2,class:"panel-section"},Ys={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Js=["value"],Ks={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xs={class:"color-row"},Zs=["value"],er=["value"],tr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},or={class:"color-row"},nr=["value"],lr=["value"],ir={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ar=["value"],sr={class:"form-group"},rr=["value"],ur={class:"form-group",style:{"margin-top":"var(--space-3)"}},dr=["value"],cr={key:3,class:"panel-section"},pr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vr=["value"],mr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fr=["value"],gr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},br=["value"],yr={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},hr={class:"chart-data-actions"},xr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wr=["value","placeholder"],kr={class:"chart-palette-preview"},Cr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Sr={class:"form-group"},$r=["value"],Ir={class:"form-group"},Ar=["value"],Mr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Er={class:"form-group"},Pr=["value"],zr={class:"form-group"},Nr=["value"],Tr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},_r={class:"form-group"},Lr=["value"],jr={key:0,class:"form-group"},Br=["value"],Dr={key:1,class:"form-group"},qr=["value"],Rr={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Fr={class:"form-group"},Ur=["value"],Vr={class:"check-row",style:{"margin-top":"20px"}},Or=["checked"],Wr={class:"check-row"},Gr=["checked"],Hr={key:1,class:"check-row"},Qr=["checked"],Yr={class:"check-row"},Jr=["checked"],Kr={key:4,class:"panel-section"},Xr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Zr=["value"],eu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},tu=["value"],ou={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nu=["value"],lu={key:0,class:"form-group"},iu=["value"],au={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},su={class:"form-group"},ru=["value"],uu={class:"form-group"},du=["value"],cu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},pu={class:"form-group"},vu=["value"],mu={class:"form-group"},fu=["value"],gu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},bu={class:"form-group"},yu=["value"],hu={class:"form-group"},xu=["value"],wu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ku={class:"form-group"},Cu=["value"],Su=["value"],$u={class:"form-group"},Iu=["value"],Au={key:5,class:"panel-section"},Mu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Eu=["value"],Pu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zu={class:"color-row"},Nu=["value"],Tu=["value"],_u={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Lu={class:"form-group"},ju=["value"],Bu={class:"form-group"},Du=["value"],qu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ru=["value"],Fu={class:"form-group"},Uu=["value"],Vu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ou={class:"form-group"},Wu=["value"],Gu={class:"form-group"},Hu=["value"],Qu={key:6,class:"panel-section"},Yu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ju=["value"],Ku={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xu=["value"],Zu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ed=["value"],td={class:"check-row"},od=["checked"],nd={class:"check-row"},ld=["checked"],id={class:"check-row"},ad=["checked"],sd={class:"check-row"},rd=["checked"],ud={key:7,class:"panel-section"},dd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},cd=["value"],pd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vd=["value"],md={class:"check-row"},fd=["checked"],gd={class:"check-row"},bd=["checked"],yd={class:"check-row"},hd=["checked"],xd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},wd={class:"form-group"},kd=["value"],Cd={class:"form-group"},Sd=["value"],$d={class:"form-group",style:{"margin-top":"var(--space-3)"}},Id=["value"],Ad={key:8,class:"panel-section"},Md={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ed=["value"],Pd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zd=["value"],Nd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Td=["value"],_d={class:"form-group"},Ld=["value"],jd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Bd={class:"form-group"},Dd=["value"],qd={class:"form-group"},Rd=["value"],Fd={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ud=["value"],Vd={class:"panel-section"},Od={class:"actions-list"},Wd={__name:"PropertiesPanel",setup(h){const s=Oe(),r=We(),d=I(()=>r.getProject(s.projectId)),v=I(()=>{var u,t;return(t=(u=d.value)==null?void 0:u.slides)==null?void 0:t.find(E=>E.id===s.currentSlideId)}),f=I(()=>{var u;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((u=d.value)==null?void 0:u.settings)||{}}}),g=I(()=>pt(f.value)),p=I(()=>bn(f.value)),P=I(()=>yn(g.value.width,g.value.height)),K=z(!0),Q=z("canvas"),T=I(()=>Array.isArray(f.value.motionPresets)?f.value.motionPresets:[]),G=I(()=>T.value.filter(u=>u.scope!=="group")),Y=I(()=>T.value.filter(u=>u.scope==="group")),C=I(()=>{var t;const u=new Set(s.selectedElementIds);return(((t=v.value)==null?void 0:t.elements)||[]).filter(E=>u.has(E.id))}),n=I(()=>{var u,t;return s.selectedElementId?(t=(u=v.value)==null?void 0:u.elements)==null?void 0:t.find(E=>E.id===s.selectedElementId):null}),b=I(()=>s.multiSelection||!!n.value),y=I(()=>s.multiSelection?"group":"single"),F=I(()=>{var t,E;const u=(E=(t=n.value)==null?void 0:t.animations)==null?void 0:E[0];return{type:(u==null?void 0:u.type)||"auto",delay:Number((u==null?void 0:u.delay)||0),duration:Number((u==null?void 0:u.duration)||.64)}}),X=I(()=>{var ke,ze;const u=C.value.map(Me=>{var Xe;return((Xe=Me.animations)==null?void 0:Xe[0])||null}),t=((ke=u[0])==null?void 0:ke.type)||"auto",E=Number(((ze=u[0])==null?void 0:ze.duration)||.64),J=u.every(Me=>((Me==null?void 0:Me.type)||"auto")===t),xe=u.every(Me=>Number((Me==null?void 0:Me.duration)||.64)===E);return{type:J?t:"mixed",duration:xe?E:.64}}),me=z(0),ie=z(0),fe=z(""),ce=z(""),N=z(""),j=z(""),V=z(""),ae=z(""),O=z(""),de=z(""),re=z(""),Ae=z(""),ye=z(""),ue=z(""),pe=z(""),B=z("all"),ee=z(null),se=z(null),oe=z([]),ge=z("all"),he=z("replace"),Ce=z(""),Ee=z({});qe(n,u=>{u?Ee.value=JSON.parse(JSON.stringify(u)):Ee.value={},(u==null?void 0:u.type)==="chart"&&(Ce.value="")},{immediate:!0,deep:!0});function Ne(u){n.value&&r.updateElement(s.projectId,s.currentSlideId,n.value.id,u)}function c(u){if(!n.value)return;const t={...n.value.content,...u};Ne({content:t})}function $(u,t){const E=parseFloat(t);isNaN(E)||Ne({[u]:E})}const A=z({});qe(v,u=>{u&&(A.value={...u})},{immediate:!0});function Se(u){v.value&&r.updateSlide(s.projectId,v.value.id,u)}function we(u){if(!d.value)return;const t={...f.value,...u};r.updateProject(s.projectId,{settings:{...t,...Hn(t)}})}function Te(u){we({slideWidth:u.width,slideHeight:u.height})}function be(u,t){const E=Math.round(Number(t)||0);if(!E)return;const J={[`slide${u==="width"?"Width":"Height"}`]:E};if(K.value){const xe=g.value.width,ke=g.value.height;u==="width"?J.slideHeight=Math.round(E*(ke/xe)):J.slideWidth=Math.round(E*(xe/ke))}we(J)}const Pe=I(()=>{var u;return hn(((u=d.value)==null?void 0:u.theme)||{})}),Ve=I(()=>{var t,E;if(((t=n.value)==null?void 0:t.type)!=="chart")return[];const u=((E=n.value.content)==null?void 0:E.paletteText)||Pe.value.paletteText;return Jn(u)});function Ye(u){const t=Qn(u,{fallbackToDefault:!1});return t.length?Yn(t):""}function Ge(u){var E;if(((E=n.value)==null?void 0:E.type)!=="chart")return;const t=Ye(u);t&&(c({dataText:t}),Ce.value="")}async function ut(u){var J;const t=u.target,E=(J=t==null?void 0:t.files)==null?void 0:J[0];if(E)try{const xe=await E.text();Ge(xe)}finally{t&&(t.value="")}}function M(){var u;(u=se.value)==null||u.click()}function a(){var t,E;if(((t=n.value)==null?void 0:t.type)!=="chart")return;const u=Ye(((E=n.value.content)==null?void 0:E.dataText)||"");u&&c({dataText:u})}function L(){var u;((u=n.value)==null?void 0:u.type)==="chart"&&c({...Pe.value})}function ne(){var u;((u=n.value)==null?void 0:u.type)==="chart"&&c({paletteText:Pe.value.paletteText})}function m(u){return String(u||"").split(",").map(t=>t.trim()).filter(Boolean)}function S(u){const t=(u==null?void 0:u.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((u==null?void 0:u.name)||"Imported Preset").trim()||"Imported Preset",category:String((u==null?void 0:u.category)||"").trim(),tags:Array.isArray(u==null?void 0:u.tags)?u.tags.map(E=>String(E).trim()).filter(Boolean):m(u==null?void 0:u.tags),type:String((u==null?void 0:u.type)||"auto"),delay:Math.max(0,Number(u==null?void 0:u.delay)||0),duration:Math.max(.1,Number(u==null?void 0:u.duration)||.72),stepDelay:Math.max(0,Number(u==null?void 0:u.stepDelay)||0)}}const D=I(()=>[...new Set(T.value.map(t=>t.category).filter(Boolean))].sort((t,E)=>t.localeCompare(E))),W=I(()=>[...T.value].filter(u=>Number(u.usageCount||0)>0).sort((u,t)=>{const E=Number(t.lastUsedAt||0)-Number(u.lastUsedAt||0);return E!==0?E:Number(t.usageCount||0)-Number(u.usageCount||0)}).slice(0,6)),k=I(()=>ge.value==="all"?oe.value:oe.value.filter(u=>u.scope===ge.value));function $e(u){const t=pe.value.trim().toLowerCase(),E=B.value;return E==="all"||(u.category||"")===E?t?[u.name,u.category,...u.tags||[]].filter(Boolean).some(xe=>String(xe).toLowerCase().includes(t)):!0:!1}const De=I(()=>G.value.filter($e)),Le=I(()=>Y.value.filter($e)),et=I(()=>W.value.filter(u=>y.value==="group"?u.scope==="group":u.scope!=="group"));function _e(u){const t=String(u.name||"").trim();if(!t)return;const E=T.value.findIndex(ke=>ke.scope===u.scope&&ke.name.toLowerCase()===t.toLowerCase()),J={...u,id:E>=0?T.value[E].id:`motion-${Date.now()}`,name:t,category:String(u.category||"").trim(),tags:Array.isArray(u.tags)?u.tags:m(u.tags)},xe=[...T.value];E>=0?xe.splice(E,1,J):xe.push(J),we({motionPresets:xe})}function tt(u,t){const E=T.value.map(J=>J.id===u?{...J,...t}:J);we({motionPresets:E})}function Re(u){const t=T.value.find(E=>E.id===u);t&&tt(u,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function He(u,t){const E=T.value.filter(ze=>ze.scope===u).map(ze=>ze.name.toLowerCase()),J=String(t||"Preset").trim()||"Preset";if(!E.includes(J.toLowerCase()))return J;let xe=2,ke=`${J} Copy`;for(;E.includes(ke.toLowerCase());)ke=`${J} Copy ${xe}`,xe+=1;return ke}function Qe(u){we({motionPresets:T.value.filter(t=>t.id!==u)}),N.value===u&&(N.value="",j.value="")}function ot(u){_e({...u,id:void 0,name:He(u.scope,u.name)})}function nt(u){N.value=u.id,j.value=u.name,V.value=u.category||"",ae.value=Array.isArray(u.tags)?u.tags.join(", "):""}function lt(){N.value="",j.value="",V.value="",ae.value=""}function bt(u){const t=String(j.value||"").trim();t&&(tt(u,{name:t,category:String(V.value||"").trim(),tags:m(ae.value)}),lt())}function wn(u,t,E){if(!t||!E||t===E)return;const J=T.value.filter(Fe=>Fe.scope===u),xe=J.findIndex(Fe=>Fe.id===t),ke=J.findIndex(Fe=>Fe.id===E);if(xe===-1||ke===-1)return;const ze=[...J],[Me]=ze.splice(xe,1);ze.splice(ke,0,Me);const Xe=T.value.filter(Fe=>Fe.scope!==u),st=[];T.value.forEach(Fe=>{if(Fe.scope===u){ze.length&&st.push(ze.shift());return}const dt=Xe.shift();dt&&st.push(dt)}),we({motionPresets:st})}function yt(u){O.value=u.id,de.value=u.id}function ht(u){O.value&&(de.value=u.id)}function xt(u){O.value&&(wn(u.scope,O.value,u.id),O.value="",de.value="")}function wt(){O.value="",de.value=""}function kt(){me.value+=1}function Ct(){ie.value+=1}function St(u,t){Se({[u]:t})}function kn(u){const t=Math.max(0,Number(u)||0);Se({duration:t})}function vt(u){var J;if(!n.value)return;const E={...((J=n.value.animations)==null?void 0:J[0])||{type:"auto",delay:0,duration:.64},...u};if(E.type==="auto"){Ne({animations:[]});return}Ne({animations:[{type:E.type||"none",delay:Math.max(0,Number(E.delay)||0),duration:Math.max(.1,Number(E.duration)||.64)}]})}const Je=z("stagger-in"),it=z(0),at=z(.12),Ke=z(.72);qe(C,u=>{u.length&&(Je.value=X.value.type==="mixed"?"stagger-in":X.value.type,Ke.value=X.value.duration)},{immediate:!0,deep:!0});function Cn(){if(!C.value.length)return;[...C.value].sort((t,E)=>(t.y||0)!==(E.y||0)?(t.y||0)-(E.y||0):(t.x||0)-(E.x||0)).forEach((t,E)=>{if(Je.value==="auto"){r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:Je.value,delay:Math.max(0,Number(it.value)||0)+E*Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(Ke.value)||.72)}]})})}function $t(u){Je.value=u.type||"stagger-in",it.value=Number(u.delay||0),at.value=Number(u.stepDelay||0),Ke.value=Number(u.duration||.72),Re(u.id),Ct()}function Sn(){_e({scope:"group",name:ce.value,category:ye.value,tags:m(ue.value),type:Je.value,delay:Math.max(0,Number(it.value)||0),stepDelay:Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(Ke.value)||.72)}),ce.value="",ye.value="",ue.value=""}function It(u){vt({type:u.type||"auto",delay:Number(u.delay||0),duration:Number(u.duration||.72)}),Re(u.id),kt()}function $n(){_e({scope:"single",name:fe.value,category:re.value,tags:m(Ae.value),type:F.value.type,delay:Math.max(0,Number(F.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(F.value.duration)||.72)}),fe.value="",re.value="",Ae.value=""}function In(){var u;(u=ee.value)==null||u.click()}async function An(u){var J;const t=u.target,E=(J=t==null?void 0:t.files)==null?void 0:J[0];if(E)try{const xe=await E.text(),ke=JSON.parse(xe),ze=Array.isArray(ke)?ke:Array.isArray(ke.motionPresets)?ke.motionPresets:[];if(!ze.length)return;oe.value=ze.map(Me=>({...S(Me),selected:!0,importName:String((Me==null?void 0:Me.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function At(){oe.value=[]}function Mn(){const u=oe.value.filter(E=>E.selected);if(!u.length)return;const t=[...T.value];u.forEach(E=>{const J=t.findIndex(xe=>xe.scope===E.scope&&xe.name.toLowerCase()===E.name.toLowerCase());if(J>=0){he.value==="replace"?t.splice(J,1,{...t[J],...E,id:t[J].id}):t.push({...E,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:He(E.scope,E.name)});return}t.push(E)}),we({motionPresets:t}),At()}function En(){var ke;if(!T.value.length)return;const u={version:1,exportedAt:new Date().toISOString(),motionPresets:T.value.map(({id:ze,...Me})=>Me)},t=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),E=URL.createObjectURL(t),J=document.createElement("a"),xe=String(((ke=d.value)==null?void 0:ke.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";J.href=E,J.download=`${xe}-motion-presets.json`,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(E)}const Pn=I(()=>[{id:`single-${me.value}`,delay:Math.max(0,Number(F.value.delay)||0),duration:Math.max(.1,Number(F.value.duration)||.72),type:F.value.type}]),zn=I(()=>Array.from({length:Math.min(Math.max(C.value.length,3),5)},(u,t)=>({id:`group-${ie.value}-${t}`,delay:Math.max(0,Number(it.value)||0)+t*Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(Ke.value)||.72),type:Je.value}))),Mt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Et=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(u,t)=>{var E,J,xe,ke,ze,Me,Xe,st,Fe,dt,Pt,zt,Nt,Tt,_t,Lt,jt,Bt,Dt,qt,Rt,Ft,Ut,Vt,Ot,Wt,Gt,Ht,Qt,Yt,Jt,Kt,Xt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,mo,fo,go,bo,yo,ho,xo,wo,ko,Co,So,$o,Io,Ao,Mo,Eo,Po,zo,No,To,_o,Lo,jo,Bo,Do,qo,Ro,Fo,Uo,Vo,Oo,Wo,Go,Ho,Qo,Yo,Jo,Ko,Xo,Zo,en,tn,on,nn,ln,an,sn,rn,un,dn;return l(),i("div",ni,[e("input",{ref_key:"presetImportInput",ref:ee,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:An},null,544),e("input",{ref_key:"chartImportInput",ref:se,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:ut},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),b.value?(l(),Be(oi,{key:0,"search-query":pe.value,"category-filter":B.value,"available-categories":D.value,"recent-presets":et.value,"pending-imported-presets":oe.value,"filtered-pending-imports":k.value,"import-scope-filter":ge.value,"import-conflict-mode":he.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>pe.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>B.value=o),onTriggerImport:In,onExportPresets:En,onApplyPreset:t[2]||(t[2]=o=>y.value==="group"?$t(o):It(o)),onClearImports:At,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>ge.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>he.value=o),onApplyImports:Mn},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):_("",!0),x(s).multiSelection?(l(),i("div",li,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",ii,w(C.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",ai,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ct},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${ie.value}`},[(l(!0),i(U,null,te(zn.value,o=>(l(),i("span",{key:o.id,class:H(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:le({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",si,[(l(),i(U,null,te(Mt,o=>e("button",{key:`group-${o.value}`,type:"button",class:H(["motion-card",Je.value===o.value&&"active"]),onClick:R=>Je.value=o.value},[e("span",ui,[e("span",{class:H(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",di)):_("",!0),o.value==="stagger-in"?(l(),i("span",ci)):_("",!0)]),e("span",pi,w(o.label),1)],10,ri)),64))]),e("div",vi,[e("div",mi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),Z(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>it.value=o),class:"input"},null,512),[[ve,it.value]])]),e("div",fi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),Z(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>at.value=o),class:"input"},null,512),[[ve,at.value]])])]),e("div",gi,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),Z(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>Ke.value=o),class:"input"},null,512),[[ve,Ke.value]])]),e("div",bi,[Z(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>ce.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[ve,ce.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Sn},"Save")]),e("div",yi,[Z(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>ye.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[ve,ye.value]]),Z(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>ue.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[ve,ue.value]])]),Le.value.length?(l(),i("div",hi,[(l(!0),i(U,null,te(Le.value,o=>(l(),i("div",{key:o.id,class:H(["preset-item",O.value===o.id&&"dragging",de.value===o.id&&O.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:R=>yt(o),onDragenter:Ie(R=>ht(o),["prevent"]),onDragover:t[14]||(t[14]=Ie(()=>{},["prevent"])),onDrop:Ie(R=>xt(o),["prevent"]),onDragend:wt},[e("button",{type:"button",class:"preset-chip",onClick:R=>$t(o)},w(o.name),9,wi),o.category?(l(),i("span",ki,w(o.category),1)):_("",!0),(l(!0),i(U,null,te(o.tags||[],R=>(l(),i("span",{key:`${o.id}-${R}`,class:"preset-meta-chip muted"},"#"+w(R),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:R=>ot(o)},"Duplicate",8,Ci),e("button",{type:"button",class:"preset-mini-btn",onClick:R=>nt(o)},"Rename",8,Si),e("button",{type:"button",class:"preset-mini-btn danger",onClick:R=>Qe(o.id)},"Delete",8,$i),N.value===o.id?(l(),i("div",Ii,[Z(e("input",{"onUpdate:modelValue":t[11]||(t[11]=R=>j.value=R),class:"input"},null,512),[[ve,j.value]]),Z(e("input",{"onUpdate:modelValue":t[12]||(t[12]=R=>V.value=R),class:"input",placeholder:"Category"},null,512),[[ve,V.value]]),Z(e("input",{"onUpdate:modelValue":t[13]||(t[13]=R=>ae.value=R),class:"input",placeholder:"Tags, comma separated"},null,512),[[ve,ae.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:R=>bt(o.id)},"Save",8,Ai),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:lt},"Cancel")])):_("",!0)],42,xi))),128))])):Y.value.length?(l(),i("div",Mi,"No group presets match the current search.")):_("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Cn}," Apply Sequence to Selection ")])):n.value?(l(),i(U,{key:3},[e("div",xa,[e("div",wa,[t[179]||(t[179]=q(" Position & Size ",-1)),e("span",ka,w(n.value.type),1)]),e("div",Ca,[e("div",Sa,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(n.value.x),class:"input",onChange:t[39]||(t[39]=o=>$("x",o.target.value))},null,40,$a)]),e("div",Ia,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(n.value.y),class:"input",onChange:t[40]||(t[40]=o=>$("y",o.target.value))},null,40,Aa)]),e("div",Ma,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(n.value.width),class:"input",onChange:t[41]||(t[41]=o=>$("width",o.target.value))},null,40,Ea)]),e("div",Pa,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(n.value.height),class:"input",onChange:t[42]||(t[42]=o=>$("height",o.target.value))},null,40,za)]),e("div",Na,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(n.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>$("rotation",o.target.value))},null,40,Ta)]),e("div",_a,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:n.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>$("opacity",o.target.value))},null,40,La)])])]),e("div",ja,[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",Ba,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:kt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${me.value}`},[(l(!0),i(U,null,te(Pn.value,o=>(l(),i("span",{key:o.id,class:H(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:le({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Da,[(l(),i(U,null,te(Mt,o=>e("button",{key:o.value,type:"button",class:H(["motion-card",F.value.type===o.value&&"active"]),onClick:R=>vt({type:o.value})},[e("span",Ra,[e("span",{class:H(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Fa)):_("",!0),o.value==="stagger-in"?(l(),i("span",Ua)):_("",!0)]),e("span",Va,w(o.label),1)],10,qa)),64))]),e("div",Oa,[e("div",Wa,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:F.value.delay,class:"input",onChange:t[45]||(t[45]=o=>vt({delay:o.target.value}))},null,40,Ga)]),e("div",Ha,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:F.value.duration,class:"input",onChange:t[46]||(t[46]=o=>vt({duration:o.target.value}))},null,40,Qa)])]),e("div",Ya,[Z(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>fe.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[ve,fe.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:$n},"Save")]),e("div",Ja,[Z(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>re.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[ve,re.value]]),Z(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>Ae.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[ve,Ae.value]])]),De.value.length?(l(),i("div",Ka,[(l(!0),i(U,null,te(De.value,o=>(l(),i("div",{key:o.id,class:H(["preset-item",O.value===o.id&&"dragging",de.value===o.id&&O.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:R=>yt(o),onDragenter:Ie(R=>ht(o),["prevent"]),onDragover:t[53]||(t[53]=Ie(()=>{},["prevent"])),onDrop:Ie(R=>xt(o),["prevent"]),onDragend:wt},[e("button",{type:"button",class:"preset-chip",onClick:R=>It(o)},w(o.name),9,Za),o.category?(l(),i("span",es,w(o.category),1)):_("",!0),(l(!0),i(U,null,te(o.tags||[],R=>(l(),i("span",{key:`${o.id}-${R}`,class:"preset-meta-chip muted"},"#"+w(R),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:R=>ot(o)},"Duplicate",8,ts),e("button",{type:"button",class:"preset-mini-btn",onClick:R=>nt(o)},"Rename",8,os),e("button",{type:"button",class:"preset-mini-btn danger",onClick:R=>Qe(o.id)},"Delete",8,ns),N.value===o.id?(l(),i("div",ls,[Z(e("input",{"onUpdate:modelValue":t[50]||(t[50]=R=>j.value=R),class:"input"},null,512),[[ve,j.value]]),Z(e("input",{"onUpdate:modelValue":t[51]||(t[51]=R=>V.value=R),class:"input",placeholder:"Category"},null,512),[[ve,V.value]]),Z(e("input",{"onUpdate:modelValue":t[52]||(t[52]=R=>ae.value=R),class:"input",placeholder:"Tags, comma separated"},null,512),[[ve,ae.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:R=>bt(o.id)},"Save",8,is),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:lt},"Cancel")])):_("",!0)],42,Xa))),128))])):G.value.length?(l(),i("div",as,"No single-element presets match the current search.")):_("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))]),["text","heading"].includes(n.value.type)?(l(),i("div",ss,[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",rs,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(st=n.value.content)==null?void 0:st.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>c({text:o.target.value}))},null,40,us)]),e("div",ds,[e("div",cs,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(Fe=n.value.content)==null?void 0:Fe.fontSize,class:"input",onChange:t[55]||(t[55]=o=>c({fontSize:+o.target.value}))},null,40,ps)]),e("div",vs,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(dt=n.value.content)==null?void 0:dt.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>c({fontWeight:o.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,ms)])]),e("div",fs,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Pt=n.value.content)==null?void 0:Pt.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>c({fontFamily:o.target.value}))},[(l(),i(U,null,te(Et,o=>e("option",{key:o,value:o},w(o.split(",")[0]),9,bs)),64))],40,gs)]),e("div",ys,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",hs,[(l(),i(U,null,te(["left","center","right","justify"],o=>{var R;return e("button",{key:o,class:H(["align-btn",((R=n.value.content)==null?void 0:R.textAlign)===o&&"active"]),onClick:cn=>c({textAlign:o})},w(o[0].toUpperCase()),11,xs)}),64))])]),e("div",ws,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",ks,[e("button",{class:H(["style-btn",((zt=n.value.content)==null?void 0:zt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var R;return c({fontStyle:((R=n.value.content)==null?void 0:R.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:H(["style-btn",((Nt=n.value.content)==null?void 0:Nt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var R;return c({textDecoration:((R=n.value.content)==null?void 0:R.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:H(["style-btn",((Tt=n.value.content)==null?void 0:Tt.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var R;return c({textDecoration:((R=n.value.content)==null?void 0:R.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",Cs,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",Ss,[e("input",{type:"color",value:((_t=n.value.content)==null?void 0:_t.color)||"#000",onInput:t[61]||(t[61]=o=>c({color:o.target.value})),class:"color-input-native"},null,40,$s),e("input",{value:((Lt=n.value.content)==null?void 0:Lt.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>c({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Is)])]),e("div",As,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((jt=n.value.content)==null?void 0:jt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>c({lineHeight:+o.target.value}))},null,40,Ms)]),e("div",Es,[e("div",Ps,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Bt=n.value.content)==null?void 0:Bt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>c({textTransform:o.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,zs)]),e("div",Ns,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Dt=n.value.content)==null?void 0:Dt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>c({letterSpacing:+o.target.value}))},null,40,Ts)])])])):_("",!0),n.value.type==="image"?(l(),i("div",_s,[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",Ls,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(qt=n.value.content)==null?void 0:qt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>c({src:o.target.value}))},null,40,js)]),e("div",Bs,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Rt=n.value.content)==null?void 0:Rt.alt,class:"input",onInput:t[67]||(t[67]=o=>c({alt:o.target.value}))},null,40,Ds)]),e("div",qs,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Ft=n.value.content)==null?void 0:Ft.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>c({objectFit:o.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Rs)]),e("div",Fs,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((Ut=n.value.content)==null?void 0:Ut.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>c({borderRadius:+o.target.value}))},null,40,Us)]),e("div",Vs,[e("div",Os,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Vt=n.value.content)==null?void 0:Vt.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>c({borderWidth:+o.target.value}))},null,40,Ws)]),e("div",Gs,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Ot=n.value.content)==null?void 0:Ot.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>c({borderColor:o.target.value}))},null,40,Hs)])])])):_("",!0),n.value.type==="shape"?(l(),i("div",Qs,[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Ys,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((Wt=n.value.content)==null?void 0:Wt.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>c({shapeType:o.target.value}))},[...t[215]||(t[215]=[Ue('<option value="rectangle" data-v-4f48861a>Rectangle</option><option value="circle" data-v-4f48861a>Circle</option><option value="triangle" data-v-4f48861a>Triangle</option><option value="star" data-v-4f48861a>Star</option><option value="arrow" data-v-4f48861a>Arrow</option><option value="diamond" data-v-4f48861a>Diamond</option>',6)])],40,Js)]),e("div",Ks,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Xs,[e("input",{type:"color",value:((Gt=n.value.content)==null?void 0:Gt.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>c({fillColor:o.target.value})),class:"color-input-native"},null,40,Zs),e("input",{value:((Ht=n.value.content)==null?void 0:Ht.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>c({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,er)])]),e("div",tr,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",or,[e("input",{type:"color",value:((Qt=n.value.content)==null?void 0:Qt.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>c({borderColor:o.target.value})),class:"color-input-native"},null,40,nr),e("input",{value:((Yt=n.value.content)==null?void 0:Yt.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>c({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,lr)])]),e("div",ir,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Jt=n.value.content)==null?void 0:Jt.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>c({borderWidth:+o.target.value}))},null,40,ar)]),e("div",sr,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Kt=n.value.content)==null?void 0:Kt.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>c({borderRadius:+o.target.value}))},null,40,rr)]),e("div",ur,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((Xt=n.value.content)==null?void 0:Xt.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>c({opacity:+o.target.value}))},null,40,dr)])])):_("",!0),n.value.type==="chart"?(l(),i("div",cr,[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",pr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((Zt=n.value.content)==null?void 0:Zt.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=o=>c({chartType:o.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,vr)]),e("div",mr,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((eo=n.value.content)==null?void 0:eo.title)||"",class:"input",onInput:t[81]||(t[81]=o=>c({title:o.target.value}))},null,40,fr)]),e("div",gr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((to=n.value.content)==null?void 0:to.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=o=>c({dataText:o.target.value}))},null,40,br),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:a},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:M},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",yr,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),Z(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=o=>Ce.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[ve,Ce.value]]),e("div",hr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=o=>Ge(Ce.value))},"Convert pasted data")])]),e("div",xr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((oo=n.value.content)==null?void 0:oo.paletteText)||"",class:"input",placeholder:Pe.value.paletteText,onInput:t[85]||(t[85]=o=>c({paletteText:o.target.value}))},null,40,wr),e("div",kr,[(l(!0),i(U,null,te(Ve.value,(o,R)=>(l(),i("span",{key:`chart-palette-${R}`,class:"chart-palette-swatch",style:le({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ne},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:L},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",Cr,[e("div",Sr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((no=n.value.content)==null?void 0:no.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=o=>c({backgroundColor:o.target.value}))},null,40,$r)]),e("div",Ir,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((lo=n.value.content)==null?void 0:lo.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=o=>c({textColor:o.target.value}))},null,40,Ar)])]),e("div",Mr,[e("div",Er,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((io=n.value.content)==null?void 0:io.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=o=>c({gridColor:o.target.value}))},null,40,Pr)]),e("div",zr,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((ao=n.value.content)==null?void 0:ao.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=o=>c({borderColor:o.target.value}))},null,40,Nr)])]),e("div",Tr,[e("div",_r,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((so=n.value.content)==null?void 0:so.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=o=>c({borderWidth:+o.target.value}))},null,40,Lr)]),((ro=n.value.content)==null?void 0:ro.chartType)!=="circle"?(l(),i("div",jr,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((uo=n.value.content)==null?void 0:uo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=o=>c({maxValue:o.target.value}))},null,40,Br)])):(l(),i("div",Dr,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((co=n.value.content)==null?void 0:co.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=o=>c({innerRadius:+o.target.value}))},null,40,qr)]))]),((po=n.value.content)==null?void 0:po.chartType)==="line"?(l(),i("div",Rr,[e("div",Fr,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((vo=n.value.content)==null?void 0:vo.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=o=>c({strokeWidth:+o.target.value}))},null,40,Ur)]),e("label",Vr,[e("input",{type:"checkbox",checked:!!((mo=n.value.content)!=null&&mo.showArea),onChange:t[94]||(t[94]=o=>c({showArea:o.target.checked}))},null,40,Or),t[239]||(t[239]=q(" Show area fill ",-1))])])):_("",!0),e("label",Wr,[e("input",{type:"checkbox",checked:((fo=n.value.content)==null?void 0:fo.showLegend)!==!1,onChange:t[95]||(t[95]=o=>c({showLegend:o.target.checked}))},null,40,Gr),t[240]||(t[240]=q(" Show legend ",-1))]),((go=n.value.content)==null?void 0:go.chartType)!=="circle"?(l(),i("label",Hr,[e("input",{type:"checkbox",checked:((bo=n.value.content)==null?void 0:bo.showGrid)!==!1,onChange:t[96]||(t[96]=o=>c({showGrid:o.target.checked}))},null,40,Qr),t[241]||(t[241]=q(" Show grid lines ",-1))])):_("",!0),e("label",Yr,[e("input",{type:"checkbox",checked:((yo=n.value.content)==null?void 0:yo.showValues)!==!1,onChange:t[97]||(t[97]=o=>c({showValues:o.target.checked}))},null,40,Jr),t[242]||(t[242]=q(" Show values ",-1))])])):_("",!0),n.value.type==="button"?(l(),i("div",Kr,[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Xr,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(ho=n.value.content)==null?void 0:ho.label,class:"input",onInput:t[98]||(t[98]=o=>c({label:o.target.value}))},null,40,Zr)]),e("div",eu,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((xo=n.value.content)==null?void 0:xo.variant)||"primary",class:"select",onChange:t[99]||(t[99]=o=>c({variant:o.target.value}))},[...t[245]||(t[245]=[Ue('<option value="primary" data-v-4f48861a>Primary</option><option value="secondary" data-v-4f48861a>Secondary</option><option value="outline" data-v-4f48861a>Outline</option><option value="ghost" data-v-4f48861a>Ghost</option><option value="danger" data-v-4f48861a>Danger</option>',5)])],40,tu)]),e("div",ou,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((wo=n.value.content)==null?void 0:wo.action)||"none",class:"select",onChange:t[100]||(t[100]=o=>c({action:o.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,nu)]),(ko=n.value.content)!=null&&ko.action&&n.value.content.action!=="none"?(l(),i("div",lu,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Co=n.value.content)==null?void 0:Co.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=o=>c({target:o.target.value}))},null,40,iu)])):_("",!0),e("div",au,[e("div",su,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((So=n.value.content)==null?void 0:So.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=o=>c({bgColor:o.target.value}))},null,40,ru)]),e("div",uu,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:(($o=n.value.content)==null?void 0:$o.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=o=>c({textColor:o.target.value}))},null,40,du)])]),e("div",cu,[e("div",pu,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Io=n.value.content)==null?void 0:Io.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=o=>c({borderColor:o.target.value}))},null,40,vu)]),e("div",mu,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Ao=n.value.content)==null?void 0:Ao.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=o=>c({borderRadius:+o.target.value}))},null,40,fu)])]),e("div",gu,[e("div",bu,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Mo=n.value.content)==null?void 0:Mo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=o=>c({fontSize:+o.target.value}))},null,40,yu)]),e("div",hu,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Eo=n.value.content)==null?void 0:Eo.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=o=>c({fontWeight:+o.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,xu)])]),e("div",wu,[e("div",ku,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Po=n.value.content)==null?void 0:Po.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=o=>c({fontFamily:o.target.value}))},[(l(),i(U,null,te(Et,o=>e("option",{key:`btn-${o}`,value:o},w(o.split(",")[0]),9,Su)),64))],40,Cu)]),e("div",$u,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((zo=n.value.content)==null?void 0:zo.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=o=>c({letterSpacing:+o.target.value}))},null,40,Iu)])])])):_("",!0),n.value.type==="hotspot"?(l(),i("div",Au,[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Mu,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((No=n.value.content)==null?void 0:No.icon)||"?",class:"select",onChange:t[110]||(t[110]=o=>c({icon:o.target.value}))},[...t[260]||(t[260]=[Ue('<option value="?" data-v-4f48861a>? (Info)</option><option value="!" data-v-4f48861a>! (Alert)</option><option value="+" data-v-4f48861a>+ (Plus)</option><option value="i" data-v-4f48861a>i (Info)</option><option value="✦" data-v-4f48861a>✦ (Star)</option>',5)])],40,Eu)]),e("div",Pu,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",zu,[e("input",{type:"color",value:((To=n.value.content)==null?void 0:To.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=o=>c({bgColor:o.target.value})),class:"color-input-native"},null,40,Nu),e("input",{value:((_o=n.value.content)==null?void 0:_o.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=o=>c({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Tu)])]),e("div",_u,[e("div",Lu,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Lo=n.value.content)==null?void 0:Lo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=o=>c({iconColor:o.target.value}))},null,40,ju)]),e("div",Bu,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((jo=n.value.content)==null?void 0:jo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=o=>c({borderRadius:+o.target.value}))},null,40,Du)])]),e("div",qu,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Bo=n.value.content)==null?void 0:Bo.popupTitle,class:"input",onInput:t[115]||(t[115]=o=>c({popupTitle:o.target.value}))},null,40,Ru)]),e("div",Fu,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Do=n.value.content)==null?void 0:Do.popupContent,class:"textarea",onInput:t[116]||(t[116]=o=>c({popupContent:o.target.value}))},null,40,Uu)]),e("div",Vu,[e("div",Ou,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((qo=n.value.content)==null?void 0:qo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>c({popupBgColor:o.target.value}))},null,40,Wu)]),e("div",Gu,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Ro=n.value.content)==null?void 0:Ro.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>c({popupTextColor:o.target.value}))},null,40,Hu)])])])):_("",!0),n.value.type==="video"?(l(),i("div",Qu,[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",Yu,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Fo=n.value.content)==null?void 0:Fo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=o=>c({src:o.target.value}))},null,40,Ju)]),e("div",Ku,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(Uo=n.value.content)==null?void 0:Uo.poster,class:"input",onInput:t[120]||(t[120]=o=>c({poster:o.target.value}))},null,40,Xu)]),e("div",Zu,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Vo=n.value.content)==null?void 0:Vo.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=o=>c({objectFit:o.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,ed)]),e("label",td,[e("input",{type:"checkbox",checked:(Oo=n.value.content)==null?void 0:Oo.autoplay,onChange:t[122]||(t[122]=o=>c({autoplay:o.target.checked}))},null,40,od),t[274]||(t[274]=q(" Autoplay ",-1))]),e("label",nd,[e("input",{type:"checkbox",checked:((Wo=n.value.content)==null?void 0:Wo.controls)??!0,onChange:t[123]||(t[123]=o=>c({controls:o.target.checked}))},null,40,ld),t[275]||(t[275]=q(" Show Controls ",-1))]),e("label",id,[e("input",{type:"checkbox",checked:(Go=n.value.content)==null?void 0:Go.loop,onChange:t[124]||(t[124]=o=>c({loop:o.target.checked}))},null,40,ad),t[276]||(t[276]=q(" Loop ",-1))]),e("label",sd,[e("input",{type:"checkbox",checked:(Ho=n.value.content)==null?void 0:Ho.muted,onChange:t[125]||(t[125]=o=>c({muted:o.target.checked}))},null,40,rd),t[277]||(t[277]=q(" Muted ",-1))])])):_("",!0),n.value.type==="audio"?(l(),i("div",ud,[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",dd,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(Qo=n.value.content)==null?void 0:Qo.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=o=>c({src:o.target.value}))},null,40,cd)]),e("div",pd,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Yo=n.value.content)==null?void 0:Yo.label,class:"input",onInput:t[127]||(t[127]=o=>c({label:o.target.value}))},null,40,vd)]),e("label",md,[e("input",{type:"checkbox",checked:(Jo=n.value.content)==null?void 0:Jo.autoplay,onChange:t[128]||(t[128]=o=>c({autoplay:o.target.checked}))},null,40,fd),t[281]||(t[281]=q(" Autoplay ",-1))]),e("label",gd,[e("input",{type:"checkbox",checked:((Ko=n.value.content)==null?void 0:Ko.controls)!==!1,onChange:t[129]||(t[129]=o=>c({controls:o.target.checked}))},null,40,bd),t[282]||(t[282]=q(" Show Controls ",-1))]),e("label",yd,[e("input",{type:"checkbox",checked:(Xo=n.value.content)==null?void 0:Xo.loop,onChange:t[130]||(t[130]=o=>c({loop:o.target.checked}))},null,40,hd),t[283]||(t[283]=q(" Loop ",-1))]),e("div",xd,[e("div",wd,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Zo=n.value.content)==null?void 0:Zo.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=o=>c({accentColor:o.target.value}))},null,40,kd)]),e("div",Cd,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((en=n.value.content)==null?void 0:en.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=o=>c({textColor:o.target.value}))},null,40,Sd)])]),e("div",$d,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((tn=n.value.content)==null?void 0:tn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=o=>c({bgColor:o.target.value}))},null,40,Id)])])):_("",!0),n.value.type==="quiz"?(l(),i("div",Ad,[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Md,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(on=n.value.content)==null?void 0:on.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=o=>c({question:o.target.value}))},null,40,Ed)]),e("div",Pd,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(ln=(nn=n.value.content)==null?void 0:nn.options)==null?void 0:ln.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=o=>c({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,zd)]),e("div",Nd,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((an=n.value.content)==null?void 0:an.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=o=>c({correctIndex:+o.target.value}))},null,40,Td)]),e("div",_d,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(sn=n.value.content)==null?void 0:sn.explanation,class:"textarea",onInput:t[137]||(t[137]=o=>c({explanation:o.target.value}))},null,40,Ld)]),e("div",jd,[e("div",Bd,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((rn=n.value.content)==null?void 0:rn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=o=>c({cardBgColor:o.target.value}))},null,40,Dd)]),e("div",qd,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((un=n.value.content)==null?void 0:un.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=o=>c({questionColor:o.target.value}))},null,40,Rd)])]),e("div",Fd,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((dn=n.value.content)==null?void 0:dn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=o=>c({accentColor:o.target.value}))},null,40,Ud)])])):_("",!0),e("div",Vd,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Od,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=o=>x(r).duplicateElement(x(s).projectId,x(s).currentSlideId,n.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),q(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=o=>{x(s).showInteractionEditor=!0,x(s).interactionElementId=n.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),q(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=o=>{x(r).deleteElement(x(s).projectId,x(s).currentSlideId,n.value.id),x(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),q(" Delete Element ",-1)])])])])],64)):(l(),i("div",Ei,[e("div",Pi,[e("button",{type:"button",class:H(["slide-settings-tab",Q.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>Q.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:H(["slide-settings-tab",Q.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>Q.value="transitions")},[...t[150]||(t[150]=[Ue('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-4f48861a><path d="M5 7h5" data-v-4f48861a></path><path d="M5 12h10" data-v-4f48861a></path><path d="M5 17h14" data-v-4f48861a></path><path d="M14 7l5 5-5 5" data-v-4f48861a></path></svg><span data-v-4f48861a>Transitions</span>',2)])],2),e("button",{type:"button",class:H(["slide-settings-tab",Q.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>Q.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),Q.value==="canvas"?(l(),i("div",zi,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",Ni,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),Z(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>A.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>St("title",A.value.title))},null,544),[[ve,A.value.title]])]),e("div",Ti,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",_i,[(l(),i(U,null,te(["color","gradient","image"],o=>{var R;return e("button",{key:o,class:H(["bg-type-btn",(((R=v.value)==null?void 0:R.backgroundType)||"color")===o&&"active"]),onClick:cn=>Se({backgroundType:o})},w(o),11,Li)}),64))]),(((E=v.value)==null?void 0:E.backgroundType)||"color")==="color"?(l(),i("div",ji,[e("input",{type:"color",value:((J=v.value)==null?void 0:J.background)||"#ffffff",onInput:t[20]||(t[20]=o=>Se({background:o.target.value})),class:"color-input-native"},null,40,Bi),e("input",{value:((xe=v.value)==null?void 0:xe.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>Se({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Di)])):((ke=v.value)==null?void 0:ke.backgroundType)==="gradient"?Z((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>A.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>Se({backgroundGradient:A.value.backgroundGradient}))},null,544)),[[ve,A.value.backgroundGradient]]):Z((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>A.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>Se({backgroundImage:A.value.backgroundImage}))},null,544)),[[ve,A.value.backgroundImage]])]),e("div",qi,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",Ri,[(l(!0),i(U,null,te(x(Gn),o=>{var R;return l(),i("button",{key:o.id,type:"button",class:H(["canvas-size-card",((R=p.value)==null?void 0:R.id)===o.id&&"active"]),onClick:cn=>Te(o)},[e("span",Ui,[e("span",{class:H(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Vi,w(o.label),1),e("span",Oi,w(o.ratioLabel),1)],10,Fi)}),128))]),e("div",Wi,[e("div",Gi,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Hi,"Current ratio "+w(P.value),1)]),e("div",Qi,[e("div",Yi,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Ji,[e("input",{type:"number",min:"320",max:"4096",value:g.value.width,class:"input",onChange:t[26]||(t[26]=o=>be("width",o.target.value))},null,40,Ki),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Xi,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",Zi,[e("input",{type:"number",min:"320",max:"4096",value:g.value.height,class:"input",onChange:t[27]||(t[27]=o=>be("height",o.target.value))},null,40,ea),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",ta,[Z(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>K.value=o)},null,512),[[ft,K.value]]),t[161]||(t[161]=q(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=Ue('<div class="canvas-size-callout" data-v-4f48861a><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-4f48861a><circle cx="12" cy="12" r="9" data-v-4f48861a></circle><path d="M12 10v6" data-v-4f48861a></path><path d="M12 7h.01" data-v-4f48861a></path></svg><span data-v-4f48861a>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",oa,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),Z(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>A.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>St("notes",A.value.notes))},null,544),[[ve,A.value.notes]])])])):Q.value==="transitions"?(l(),i("div",na,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((ze=v.value)==null?void 0:ze.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>Se({transition:o.target.value}))},[...t[167]||(t[167]=[Ue('<option value="none" data-v-4f48861a>None</option><option value="fade" data-v-4f48861a>Fade</option><option value="slide" data-v-4f48861a>Slide</option><option value="zoom" data-v-4f48861a>Zoom</option><option value="flip" data-v-4f48861a>Flip</option>',5)])],40,la),e("div",ia,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Me=v.value)==null?void 0:Me.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>kn(o.target.value))},null,40,aa),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",sa,[e("input",{type:"checkbox",checked:!!((Xe=v.value)!=null&&Xe.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>Se({advanceOnMediaEnd:o.target.checked}))},null,40,ra),t[170]||(t[170]=q(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",ua,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",da,[e("input",{type:"checkbox",checked:f.value.autoPlay,onChange:t[34]||(t[34]=o=>we({autoPlay:o.target.checked}))},null,40,ca),t[173]||(t[173]=q(" Autoplay preview and exported presentation ",-1))]),e("label",pa,[e("input",{type:"checkbox",checked:f.value.loop,onChange:t[35]||(t[35]=o=>we({loop:o.target.checked}))},null,40,va),t[174]||(t[174]=q(" Loop back to the first slide at the end ",-1))]),e("label",ma,[e("input",{type:"checkbox",checked:f.value.showProgress,onChange:t[36]||(t[36]=o=>we({showProgress:o.target.checked}))},null,40,fa),t[175]||(t[175]=q(" Show progress bar in preview ",-1))]),e("label",ga,[e("input",{type:"checkbox",checked:f.value.showNavControls,onChange:t[37]||(t[37]=o=>we({showNavControls:o.target.checked}))},null,40,ba),t[176]||(t[176]=q(" Show previous/next and dot navigation ",-1))]),e("label",ya,[e("input",{type:"checkbox",checked:f.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>we({allowKeyboardNav:o.target.checked}))},null,40,ha),t[177]||(t[177]=q(" Allow arrow keys and space bar navigation ",-1))])]))]))])}}},Gd=je(Wd,[["__scopeId","data-v-4f48861a"]]),Hd={class:"editor-toolbar"},Qd={class:"toolbar-group"},Yd={class:"toolbar-group"},Jd=["data-tooltip","onClick"],Kd={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Xd={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zd={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ec={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tc={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},oc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nc={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lc={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ic={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ac={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sc={class:"tool-label"},rc={class:"toolbar-group"},uc={class:"toolbar-group"},dc={class:"toolbar-group"},cc={__name:"EditorToolbar",emits:["open-ai-project"],setup(h,{emit:s}){const r=s,d=Oe();We();const v=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function f(g){d.setActiveTool(g)}return(g,p)=>(l(),i("div",Hd,[e("div",Qd,[e("button",{class:H(["tool-btn",x(d).activeTool==="select"&&"active"]),onClick:p[0]||(p[0]=P=>f("select")),"data-tooltip":"Select (V)"},[...p[7]||(p[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),p[23]||(p[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Yd,[(l(),i(U,null,te(v,P=>e("button",{key:P.id,class:H(["tool-btn",x(d).activeTool===P.id&&"active"]),"data-tooltip":P.tooltip,onClick:K=>f(P.id)},[P.icon==="text"?(l(),i("svg",Kd,[...p[8]||(p[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):P.icon==="heading"?(l(),i("svg",Xd,[...p[9]||(p[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):P.icon==="image"?(l(),i("svg",Zd,[...p[10]||(p[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):P.icon==="shape"?(l(),i("svg",ec,[...p[11]||(p[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):P.icon==="button"?(l(),i("svg",tc,[...p[12]||(p[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):P.icon==="hotspot"?(l(),i("svg",oc,[...p[13]||(p[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):P.icon==="video"?(l(),i("svg",nc,[...p[14]||(p[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):P.icon==="audio"?(l(),i("svg",lc,[...p[15]||(p[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):P.icon==="quiz"?(l(),i("svg",ic,[...p[16]||(p[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):P.icon==="chart"?(l(),i("svg",ac,[...p[17]||(p[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):_("",!0),e("span",sc,w(P.label),1)],10,Jd)),64))]),p[24]||(p[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",rc,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:p[1]||(p[1]=P=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...p[18]||(p[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),p[25]||(p[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",uc,[e("button",{class:"tool-btn",onClick:p[2]||(p[2]=P=>x(d).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...p[19]||(p[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:p[3]||(p[3]=P=>x(d).zoomReset())},w(Math.round(x(d).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:p[4]||(p[4]=P=>x(d).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...p[20]||(p[20]=[Ue('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),p[26]||(p[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",dc,[e("button",{class:H(["tool-btn",x(d).showGrid&&"active"]),onClick:p[5]||(p[5]=P=>x(d).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...p[21]||(p[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:H(["tool-btn",x(d).snapToGrid&&"active"]),onClick:p[6]||(p[6]=P=>x(d).toggleSnap()),"data-tooltip":"Snap to grid"},[...p[22]||(p[22]=[Ue('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},pc=je(cc,[["__scopeId","data-v-d964cc0f"]]),vc=["value"],mc=["value"],fc=["onMousedown"],gc={key:1,class:"selection-border locked-border"},bc={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(h){const s=h,r=Oe(),d=We(),v=Nn("canvasScale",z(1)),f=I(()=>r.projectId),g=I(()=>r.currentSlideId),p=I(()=>r.selectedElementIds.includes(s.element.id)),P=I(()=>s.element.locked),K=I(()=>s.element.visible!==!1),Q=I(()=>{var B,ee;return((ee=(B=s.element.animations)==null?void 0:B[0])==null?void 0:ee.type)||"auto"}),T=[{value:"auto",label:"Auto"},{value:"none",label:"None"},{value:"fade-up",label:"Fade"},{value:"fade-left",label:"Left"},{value:"fade-right",label:"Right"},{value:"zoom-in",label:"Zoom"},{value:"pop-in",label:"Pop"},{value:"stagger-in",label:"Stagger"}];let G=!1,Y=0,C=0,n=new Map;function b(B){var oe;if(P.value||B.target.classList.contains("resize-handle"))return;const ee=B.ctrlKey||B.metaKey||B.shiftKey;p.value?ee&&r.selectElement(s.element.id,!0):r.selectElement(s.element.id,ee),r.setActiveTool("select"),G=!1,Y=B.clientX,C=B.clientY,n.clear();const se=(oe=d.getProject(f.value))==null?void 0:oe.slides.find(ge=>ge.id===g.value);se&&r.selectedElementIds.forEach(ge=>{const he=se.elements.find(Ce=>Ce.id===ge);he&&!he.locked&&n.set(ge,{x:he.x,y:he.y})}),window.addEventListener("mousemove",y),window.addEventListener("mouseup",F),B.stopPropagation()}function y(B){const ee=(B.clientX-Y)/v.value,se=(B.clientY-C)/v.value;!G&&(Math.abs(ee)>3||Math.abs(se)>3)&&(G=!0),G&&n.forEach((oe,ge)=>{let he=oe.x+ee,Ce=oe.y+se;if(r.snapToGrid&&r.gridSize){const Ee=r.gridSize;he=Math.round(he/Ee)*Ee,Ce=Math.round(Ce/Ee)*Ee}d.updateElement(f.value,g.value,ge,{x:he,y:Ce})})}function F(B){G||!(B.ctrlKey||B.metaKey||B.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(s.element.id,!1),G=!1,window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",F)}const X=["n","ne","e","se","s","sw","w","nw"];let me=!1,ie="",fe=0,ce=0,N=0,j=0,V=0,ae=0;function O(B,ee){P.value||(B.stopPropagation(),B.preventDefault(),me=!0,ie=ee,fe=B.clientX,ce=B.clientY,N=s.element.width,j=s.element.height,V=s.element.x,ae=s.element.y,window.addEventListener("mousemove",de),window.addEventListener("mouseup",re))}function de(B){if(!me)return;const ee=v.value,se=(B.clientX-fe)/ee,oe=(B.clientY-ce)/ee,ge=20;let he=V,Ce=ae,Ee=N,Ne=j;if(ie.includes("e")&&(Ee=Math.max(ge,N+se)),ie.includes("s")&&(Ne=Math.max(ge,j+oe)),ie.includes("w")){const c=Math.max(ge,N-se);he=V+(N-c),Ee=c}if(ie.includes("n")){const c=Math.max(ge,j-oe);Ce=ae+(j-c),Ne=c}if(r.snapToGrid&&r.gridSize){const c=r.gridSize;Ee=Math.round(Ee/c)*c,Ne=Math.round(Ne/c)*c,he=Math.round(he/c)*c,Ce=Math.round(Ce/c)*c}d.updateElement(f.value,g.value,s.element.id,{x:he,y:Ce,width:Ee,height:Ne})}function re(){me=!1,window.removeEventListener("mousemove",de),window.removeEventListener("mouseup",re)}function Ae(){["text","heading"].includes(s.element.type)&&r.setRightPanel("properties")}const ye=I(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:P.value?"not-allowed":"move",visibility:K.value?"visible":"hidden",userSelect:"none"}));function ue(B){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[B]||"auto"}function pe(B){var se;if(P.value)return;if(B==="auto"){d.updateElement(f.value,g.value,s.element.id,{animations:[]});return}const ee=((se=s.element.animations)==null?void 0:se[0])||{};d.updateElement(f.value,g.value,s.element.id,{animations:[{type:B,delay:Math.max(0,Number(ee.delay)||0),duration:Math.max(.1,Number(ee.duration)||.64)}]})}return(B,ee)=>(l(),i("div",{class:H(["element-wrapper",p.value&&"selected",P.value&&"locked"]),style:le(ye.value),onMousedown:b,onDblclick:Ae},[Tn(B.$slots,"default",{},void 0),p.value&&!P.value?(l(),i(U,{key:0},[ee[3]||(ee[3]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"motion-chip",onMousedown:ee[1]||(ee[1]=Ie(()=>{},["stop"]))},[ee[2]||(ee[2]=e("span",{class:"motion-chip-label"},"Motion",-1)),e("select",{class:"motion-chip-select",value:Q.value,onChange:ee[0]||(ee[0]=se=>pe(se.target.value))},[(l(),i(U,null,te(T,se=>e("option",{key:se.value,value:se.value},w(se.label),9,mc)),64))],40,vc)],32),(l(),i(U,null,te(X,se=>e("div",{key:se,class:H(["resize-handle",`handle-${se}`]),style:le({cursor:ue(se)}),onMousedown:Ie(oe=>O(oe,se),["stop"])},null,46,fc)),64))],64)):_("",!0),p.value&&P.value?(l(),i("div",gc)):_("",!0)],38))}},yc=je(bc,[["__scopeId","data-v-179c0a50"]]),gt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,r=I(()=>s.element.content||{}),d=Oe(),v=We(),f=z(!1),g=z(null),p=z("");qe(()=>r.value.text,T=>{f.value||(p.value=T||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function P(){d.selectedElementId===s.element.id&&(f.value=!0,_n(()=>{if(g.value)if(g.value.focus(),typeof g.value.setSelectionRange=="function"){const T=g.value.value.length;g.value.setSelectionRange(T,T)}else{const T=document.createRange();T.selectNodeContents(g.value),T.collapse(!1);const G=window.getSelection();G.removeAllRanges(),G.addRange(T)}}))}function K(T){f.value&&T.stopPropagation()}function Q(){f.value=!1;const T=p.value;v.updateElement(d.projectId,d.currentSlideId,s.element.id,{content:{...s.element.content,text:T}})}return(T,G)=>f.value?Z((l(),i("textarea",{key:0,class:"text-element-input",ref_key:"textRef",ref:g,"onUpdate:modelValue":G[0]||(G[0]=Y=>p.value=Y),onBlur:Q,onMousedown:K,style:le({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",background:"transparent",border:"none",resize:"none",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"2px solid var(--color-primary)",cursor:"text",margin:0,display:"block"})},null,36)),[[ve,p.value]]):(l(),i("div",{key:1,class:"text-element",onDblclick:P,style:le({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:"none",cursor:"inherit",userSelect:"none"})},w(p.value),37))}},hc=["src","alt"],xc={key:1,class:"image-placeholder"},wc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},kc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(h){return(s,r)=>{var d,v,f,g;return l(),i("div",{class:"image-element",style:le({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((d=h.element.content)==null?void 0:d.borderRadius)||0)+"px",border:`${((v=h.element.content)==null?void 0:v.borderWidth)||0}px solid ${((f=h.element.content)==null?void 0:f.borderColor)||"transparent"}`})},[(g=h.element.content)!=null&&g.src?(l(),i("img",{key:0,src:h.element.content.src,alt:h.element.content.alt||"",style:le({width:"100%",height:"100%",objectFit:h.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,hc)):(l(),i("div",xc,[(l(),i("svg",wc,[...r[0]||(r[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),r[1]||(r[1]=e("span",null,"Image",-1))]))],4)}}},Cc=je(kc,[["__scopeId","data-v-401e9ff3"]]),Sc={class:"shape-element",style:{width:"100%",height:"100%"}},$c=["width","height"],Ic=["points","fill","stroke","stroke-width"],Ac={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,r=I(()=>s.element.content||{}),d=I(()=>{const g=r.value.shapeType||"rectangle",p={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return g==="circle"?{...p,borderRadius:"50%"}:g==="rectangle"?{...p,borderRadius:(r.value.borderRadius||0)+"px"}:p}),v=I(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),f=I(()=>{const g=s.element.width||150,p=s.element.height||100,P=r.value.shapeType;if(P==="triangle")return`${g/2},0 ${g},${p} 0,${p}`;if(P==="diamond")return`${g/2},0 ${g},${p/2} ${g/2},${p} 0,${p/2}`;if(P==="arrow")return`0,${p*.3} ${g*.6},${p*.3} ${g*.6},0 ${g},${p/2} ${g*.6},${p} ${g*.6},${p*.7} 0,${p*.7}`;if(P==="star"){const K=g/2,Q=p/2,T=Math.min(g,p)/2,G=T*.4;let Y="";for(let C=0;C<10;C++){const n=(C*36-90)*Math.PI/180,b=C%2===0?T:G;Y+=`${K+b*Math.cos(n)},${Q+b*Math.sin(n)} `}return Y.trim()}return""});return(g,p)=>(l(),i("div",Sc,[v.value?(l(),i("svg",{key:1,width:h.element.width,height:h.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:f.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,Ic)],8,$c)):(l(),i("div",{key:0,style:le(d.value)},null,4))]))}},Mc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,r=I(()=>s.element.content||{}),d=I(()=>{const v={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},f=v[r.value.variant||"primary"]||v.primary;return{...f,background:r.value.bgColor||f.background,color:r.value.textColor||f.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:f.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(v,f)=>(l(),i("div",{class:"button-element",style:le({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...d.value})},w(r.value.label||"Button"),5))}},Ec={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Pc={class:"popup-header"},zc={class:"popup-body"},Nc={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,r=I(()=>s.element.content||{}),d=z(!1);function v(f){f.stopPropagation(),d.value=!d.value}return(f,g)=>(l(),i("div",Ec,[e("div",{class:"hotspot-btn",style:le({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Ie(v,["stop"])},w(r.value.icon||"?"),5),rt(mt,{name:"fade"},{default:Ze(()=>[d.value?(l(),i("div",{key:0,class:"hotspot-popup",style:le({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",Pc,[e("strong",null,w(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:g[0]||(g[0]=Ie(p=>d.value=!1,["stop"]))},"×")]),e("div",zc,w(r.value.popupContent||"Add your content in the properties panel."),1)],4)):_("",!0)]),_:1})]))}},Tc=je(Nc,[["__scopeId","data-v-ef5f15f6"]]),_c={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},Lc=["src"],jc=["src","poster","autoplay","controls","loop","muted"],Bc={key:2,class:"video-placeholder"},Dc={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},qc={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,r=I(()=>s.element.content||{}),d=I(()=>{const f=r.value.src||"";return f.includes("youtube")||f.includes("youtu.be")}),v=I(()=>{var g,p;const f=r.value.src||"";if(d.value){const P=(g=f.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:g[1];return P?`https://www.youtube.com/embed/${P}`:""}if(f.includes("vimeo.com")){const P=(p=f.match(/vimeo\.com\/(\d+)/))==null?void 0:p[1];return P?`https://player.vimeo.com/video/${P}`:""}return""});return(f,g)=>(l(),i("div",_c,[v.value?(l(),i("iframe",{key:0,src:v.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,Lc)):r.value.src&&!v.value?(l(),i("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:le({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,jc)):(l(),i("div",Bc,[(l(),i("svg",Dc,[...g[0]||(g[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),g[1]||(g[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Rc=je(qc,[["__scopeId","data-v-dfea1a16"]]),Fc=["stroke"],Uc=["src","controls","autoplay","loop"],Vc={key:1,style:{"font-size":"11px",color:"#aaa"}},Oc={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(h){return(s,r)=>{var d,v,f,g,p,P,K,Q,T;return l(),i("div",{class:"audio-element",style:le({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((d=h.element.content)==null?void 0:d.bgColor)||"#ede7ff",border:`1px solid ${((v=h.element.content)==null?void 0:v.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((f=h.element.content)==null?void 0:f.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Fc)),e("span",{style:le({fontSize:"13px",color:((g=h.element.content)==null?void 0:g.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},w(((p=h.element.content)==null?void 0:p.label)||"Audio Player"),5),(P=h.element.content)!=null&&P.src?(l(),i("audio",{key:0,src:h.element.content.src,controls:((K=h.element.content)==null?void 0:K.controls)!==!1,autoplay:(Q=h.element.content)==null?void 0:Q.autoplay,loop:(T=h.element.content)==null?void 0:T.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=Ie(()=>{},["stop"]))},null,40,Uc)):(l(),i("span",Vc,"No source"))],4)}}},Wc={class:"quiz-options"},Gc=["onClick"],Hc={class:"opt-letter"},Qc={class:"opt-text"},Yc={key:0},Jc={class:"quiz-actions"},Kc=["disabled"],Xc={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,r=I(()=>s.element.content||{}),d=z(null),v=z(!1);function f(K){v.value||(d.value=K)}function g(){d.value!==null&&(v.value=!0)}function p(){d.value=null,v.value=!1}const P=I(()=>v.value&&d.value===(r.value.correctIndex??0));return(K,Q)=>(l(),i("div",{class:"quiz-element",style:le({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:le({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},w(r.value.question||"Question text…"),5),e("div",Wc,[(l(!0),i(U,null,te(r.value.options||[],(T,G)=>(l(),i("div",{key:G,class:H(["quiz-opt",d.value===G&&"selected",v.value&&G===r.value.correctIndex&&"correct",v.value&&d.value===G&&G!==r.value.correctIndex&&"wrong"]),onClick:Y=>f(G)},[e("span",Hc,w(String.fromCharCode(65+G)),1),e("span",Qc,w(T),1)],10,Gc))),128))]),v.value?(l(),i("div",{key:0,class:H(["quiz-feedback",P.value?"correct":"wrong"])},[q(w(P.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!P.value&&r.value.explanation?(l(),i("span",Yc,w(r.value.explanation),1)):_("",!0)],2)):_("",!0),e("div",Jc,[v.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:p},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:d.value===null,onClick:g},"Submit",8,Kc))])],4))}},Zc=je(Xc,[["__scopeId","data-v-ca2bd187"]]),ep={key:0,class:"canvas-empty"},tp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},op={key:0,class:"canvas-device-frame","aria-hidden":"true"},np=["value"],lp={class:"canvas-guide-label"},ip={key:4,class:"drop-hint"},ap={class:"canvas-info-bar"},sp=["disabled"],rp={class:"slide-index"},up=["disabled"],dp={key:0},cp={__name:"EditorCanvas",setup(h){const s=Oe(),r=We(),d=z(null),v=z(null),f=z(1),g=I(()=>f.value*s.zoomLevel);jn("canvasScale",g);const p=I(()=>r.getProject(s.projectId)),P=I(()=>pt(p.value)),K=I(()=>bn(p.value)),Q=I(()=>P.value.width),T=I(()=>P.value.height),G=I(()=>yn(Q.value,T.value)),Y=I(()=>{var m,S;return(S=(m=p.value)==null?void 0:m.slides)==null?void 0:S.find(D=>D.id===s.currentSlideId)}),C=I(()=>{var m;return[...((m=p.value)==null?void 0:m.slides)||[]].sort((S,D)=>S.order-D.order)}),n=I(()=>C.value.findIndex(m=>m.id===s.currentSlideId)),b=I(()=>{var m;return{autoPlay:!1,motionPresets:[],...((m=p.value)==null?void 0:m.settings)||{}}}),y=I(()=>(Array.isArray(b.value.motionPresets)?b.value.motionPresets:[]).filter(m=>m.scope==="group")),F=I(()=>{const m=new Set(s.selectedElementIds);return ce.value.filter(S=>m.has(S.id))}),X=z(""),me=I(()=>Y.value?Y.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:b.value.autoPlay&&Number(Y.value.duration||0)>0?{label:`Auto ${Number(Y.value.duration).toFixed(Number(Y.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function ie(){const m=y.value.find(D=>D.id===X.value);if(!m||!F.value.length)return;[...F.value].sort((D,W)=>(D.y||0)!==(W.y||0)?(D.y||0)-(W.y||0):(D.x||0)-(W.x||0)).forEach((D,W)=>{if(m.type==="auto"){r.updateElement(s.projectId,s.currentSlideId,D.id,{animations:[]});return}r.updateElement(s.projectId,s.currentSlideId,D.id,{animations:[{type:m.type,delay:Math.max(0,Number(m.delay)||0)+W*Math.max(0,Number(m.stepDelay)||0),duration:Math.max(.1,Number(m.duration)||.72)}]})}),r.updateProject(s.projectId,{settings:{...b.value,motionPresets:(b.value.motionPresets||[]).map(D=>D.id===m.id?{...D,usageCount:Math.max(0,Number(D.usageCount||0))+1,lastUsedAt:Date.now()}:D)}})}function fe(){if(!y.value.length){X.value="";return}y.value.some(m=>m.id===X.value)||(X.value=y.value[0].id)}const ce=I(()=>{var m;return[...((m=Y.value)==null?void 0:m.elements)||[]].sort((S,D)=>(S.zIndex||0)-(D.zIndex||0))}),N=I(()=>{const m=Y.value;return m?m.backgroundType==="gradient"&&m.backgroundGradient?{background:m.backgroundGradient}:m.backgroundType==="image"&&m.backgroundImage?{backgroundImage:`url(${m.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:m.background||"#fff"}:{background:"#fff"}}),j=I(()=>`scale(${g.value})`);function V(){if(!d.value)return;const{clientWidth:m,clientHeight:S}=d.value,D=(m-80)/Q.value,W=(S-80)/T.value;f.value=Math.min(D,W,1)}let ae=null;mn(()=>{V(),ae=new ResizeObserver(V),d.value&&ae.observe(d.value),fe()}),fn(()=>ae==null?void 0:ae.disconnect()),qe(y,()=>{fe()},{deep:!0,immediate:!0}),qe(P,()=>{V()},{deep:!0});const O=z({x:0,y:0}),de=z({x:0,y:0}),re=z(!1),Ae=z(!1),ye=I(()=>{var m,S;return((m=K.value)==null?void 0:m.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((S=K.value)==null?void 0:S.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),ue=I(()=>{if(!ye.value)return null;if(ye.value.tone==="mobile"){const D=Q.value*.08,W=T.value*.05;return{x:D,y:W,width:Q.value-D*2,height:T.value-W*2}}const m=Q.value*.08,S=T.value*.08;return{x:m,y:S,width:Q.value-m*2,height:T.value-S*2}}),pe=I(()=>{if(!ue.value)return[];const m=ue.value;return ce.value.filter(S=>S.visible!==!1).filter(S=>{const D=Number(S.x||0),W=Number(S.y||0),k=D+Number(S.width||0),$e=W+Number(S.height||0);return D<m.x||W<m.y||k>m.x+m.width||$e>m.y+m.height}).map(S=>S.id)}),B=I(()=>s.selectedElementIds.filter(m=>pe.value.includes(m)).length),ee=I(()=>pe.value.length),se=I(()=>!ye.value||!ee.value?null:B.value?`${B.value} selected ${B.value===1?"element is":"elements are"} outside the ${ye.value.label.toLowerCase()}.`:`${ee.value} ${ee.value===1?"element is":"elements are"} outside the ${ye.value.label.toLowerCase()}.`),oe=I(()=>{if(!re.value)return null;const m=Math.min(O.value.x,de.value.x),S=Math.min(O.value.y,de.value.y),D=Math.abs(de.value.x-O.value.x),W=Math.abs(de.value.y-O.value.y);return{x:m,y:S,width:D,height:W}});function ge(m){!re.value&&(m.target===v.value||m.target===m.currentTarget)&&s.clearSelection()}function he(m){return m?Array.from(m.files||[]).some(S=>S.type.startsWith("image/")):!1}function Ce(m,S,D){if(!m||!m.type.startsWith("image/"))return;const W=new FileReader;W.onload=()=>{const k=String(W.result||"");if(!k)return;const $e=new Image;$e.onload=()=>{const De=v.value.getBoundingClientRect(),Le=(S-De.left)/g.value,et=(D-De.top)/g.value,Re=Math.min(420/$e.width,280/$e.height,1),He=Math.max(120,Math.round($e.width*Re)),Qe=Math.max(80,Math.round($e.height*Re)),ot=Math.max(0,Math.min(Q.value-He,Math.round(Le-He/2))),nt=Math.max(0,Math.min(T.value-Qe,Math.round(et-Qe/2))),lt=r.addElement(s.projectId,s.currentSlideId,"image",{x:ot,y:nt,width:He,height:Qe,content:{src:k,alt:m.name,objectFit:"cover"}});lt&&(s.selectElement(lt.id),s.setActiveTool("select"),s.setRightPanel("properties"))},$e.src=k},W.readAsDataURL(m)}function Ee(m){he(m.dataTransfer)&&(m.preventDefault(),m.dataTransfer.dropEffect="copy",Ae.value=!0)}function Ne(m){var S;(S=m.currentTarget)!=null&&S.contains(m.relatedTarget)||(Ae.value=!1)}function c(m){if(!he(m.dataTransfer))return;m.preventDefault(),Ae.value=!1;const S=Array.from(m.dataTransfer.files||[]).find(D=>D.type.startsWith("image/"));S&&Ce(S,m.clientX,m.clientY)}function $(m){const S=s.activeTool;if(m.target!==v.value&&m.target!==m.currentTarget)return;m.preventDefault(),m.stopPropagation();const D=v.value.getBoundingClientRect(),W=(m.clientX-D.left)/g.value,k=(m.clientY-D.top)/g.value;if(S==="select"){re.value=!0,O.value={x:W,y:k},de.value={x:W,y:k};const Le=_e=>{de.value={x:(_e.clientX-D.left)/g.value,y:(_e.clientY-D.top)/g.value}},et=()=>{window.removeEventListener("mousemove",Le),window.removeEventListener("mouseup",et);const _e=oe.value;if(_e&&(_e.width>2||_e.height>2)){const tt=ce.value.filter(Re=>{const He=Re.x,Qe=Re.y,ot=Re.width||100,nt=Re.height||100;return He<_e.x+_e.width&&He+ot>_e.x&&Qe<_e.y+_e.height&&Qe+nt>_e.y}).map(Re=>Re.id);tt.length>0?s.setSelection(tt):s.clearSelection()}else s.clearSelection();setTimeout(()=>{re.value=!1},0)};window.addEventListener("mousemove",Le),window.addEventListener("mouseup",et);return}const $e=Le=>s.snapToGrid?Math.round(Le/s.gridSize)*s.gridSize:Le,De=r.addElement(s.projectId,s.currentSlideId,S,{x:$e(W-75),y:$e(k-40)});De&&(s.selectElement(De.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const A=I(()=>{if(!s.showGrid)return{};const m=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${m}px ${m}px`}}),Se={text:gt,heading:gt,image:Cc,shape:Ac,button:Mc,hotspot:Tc,video:Rc,audio:Oc,quiz:Zc,chart:Xn,divider:"div"};function we(m){return Se[m]||gt}function Te(m){var S,D;return m.type!=="divider"?{}:{borderTop:`${((S=m.content)==null?void 0:S.thickness)||2}px solid ${((D=m.content)==null?void 0:D.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const be=z({show:!1,x:0,y:0,elId:null});function Pe(m,S){m.preventDefault(),be.value={show:!0,x:m.clientX,y:m.clientY,elId:S},s.selectElement(S),setTimeout(()=>window.addEventListener("click",Ve,{once:!0}),0)}function Ve(){be.value.show=!1}function Ye(){if(be.value.elId){const m=r.duplicateElement(s.projectId,s.currentSlideId,be.value.elId);m&&s.selectElement(m.id)}Ve()}function Ge(){be.value.elId&&(r.deleteElement(s.projectId,s.currentSlideId,be.value.elId),s.clearSelection()),Ve()}function ut(){be.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,be.value.elId,"up"),Ve()}function M(){be.value.elId&&r.reorderElement(s.projectId,s.currentSlideId,be.value.elId,"down"),Ve()}function a(){const m=n.value,S=r.addSlide(s.projectId,m);S&&s.setCurrentSlide(S.id)}function L(){const m=n.value;m>0&&s.setCurrentSlide(C.value[m-1].id)}function ne(){const m=n.value;m<C.value.length-1&&s.setCurrentSlide(C.value[m+1].id)}return(m,S)=>{var D;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:d},[Y.value?(l(),i(U,{key:1},[e("div",{class:H(["canvas-zoom-wrapper",[ye.value&&`canvas-zoom-wrapper-${ye.value.tone}`]]),style:le({transform:j.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:v,class:"slide-canvas",style:le({width:Q.value+"px",height:T.value+"px",...N.value,...A.value}),onClick:ge,onMousedown:$,onDragover:Ee,onDragleave:Ne,onDrop:c,onContextmenu:S[3]||(S[3]=Ie(()=>{},["prevent"]))},[ye.value?(l(),i("div",op)):_("",!0),x(s).multiSelection&&y.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:S[1]||(S[1]=Ie(()=>{},["stop"]))},[S[7]||(S[7]=e("span",{class:"selection-preset-label"},"Sequence",-1)),Z(e("select",{"onUpdate:modelValue":S[0]||(S[0]=W=>X.value=W),class:"selection-preset-select"},[(l(!0),i(U,null,te(y.value,W=>(l(),i("option",{key:W.id,value:W.id},w(W.name),9,np))),128))],512),[[ct,X.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Ie(ie,["stop"])},"Apply")],32)):_("",!0),se.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:S[2]||(S[2]=Ie(()=>{},["stop"]))},[S[8]||(S[8]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,w(se.value),1)],32)):_("",!0),(l(!0),i(U,null,te(ce.value,W=>(l(),Be(yc,{key:W.id,element:W,onContextmenu:Ie(k=>Pe(k,W.id),["stop"])},{default:Ze(()=>[(l(),Be(Ln(we(W.type)),{element:W,style:le(W.type==="divider"?Te(W):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),ye.value?(l(),i("div",{key:3,class:H(["canvas-guide",[`canvas-guide-${ye.value.tone}`,ee.value&&"canvas-guide-warning-state"]]),style:le(ye.value.style),"aria-hidden":"true"},[e("span",lp,w(ye.value.label)+" · "+w(G.value),1)],6)):_("",!0),x(s).activeTool!=="select"||Ae.value?(l(),i("div",ip,w(Ae.value?"Drop image to insert it on this slide":`Click anywhere to add ${x(s).activeTool}`),1)):_("",!0),re.value&&oe.value?(l(),i("div",{key:5,class:"selection-marquee",style:le({left:oe.value.x+"px",top:oe.value.y+"px",width:oe.value.width+"px",height:oe.value.height+"px"})},null,4)):_("",!0)],36)],6),e("div",ap,[e("button",{class:"bar-btn",onClick:a},"Add page"),e("button",{class:"bar-btn icon",onClick:L,disabled:n.value<=0},"◀",8,sp),e("span",rp,w(n.value+1)+" / "+w(C.value.length),1),e("button",{class:"bar-btn icon",onClick:ne,disabled:n.value>=C.value.length-1},"▶",8,up),e("span",null,w(Q.value)+" × "+w(T.value)+"px",1),S[9]||(S[9]=e("span",null,"·",-1)),e("span",null,w(((D=Y.value.elements)==null?void 0:D.length)||0)+" elements",1),S[10]||(S[10]=e("span",null,"·",-1)),e("span",{class:H(["playback-badge",`playback-badge-${me.value.tone}`])},w(me.value.label),3),x(s).hasSelection?(l(),i("span",dp,"· "+w(x(s).selectedElementIds.length)+" selected",1)):_("",!0),e("button",{class:"bar-btn ai",onClick:S[4]||(S[4]=W=>x(s).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",ep,[(l(),i("svg",tp,[...S[5]||(S[5]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),S[6]||(S[6]=e("p",null,"Select a slide to start editing",-1))])),(l(),Be(gn,{to:"body"},[be.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:le({left:be.value.x+"px",top:be.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Ye},"Duplicate"),e("button",{class:"ctx-item",onClick:ut},"Bring Forward"),e("button",{class:"ctx-item",onClick:M},"Send Backward"),S[11]||(S[11]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Ge},"Delete")],4)):_("",!0)]))],512)}}},pp=je(cp,[["__scopeId","data-v-c6947122"]]),vp={class:"ai-panel"},mp={class:"ai-mode-tabs"},fp=["onClick"],gp={class:"ai-content"},bp={class:"form-group"},yp={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},hp={key:0,class:"form-group"},xp={key:1,class:"form-group"},wp={class:"form-group"},kp={class:"form-group"},Cp={class:"prompt-label-row"},Sp={key:1,class:"prompt-auto-badge"},$p={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},Ip=["disabled"],Ap={key:0,class:"spinner"},Mp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ep={key:3,class:"creative-options-wrap"},Pp={class:"result-header"},zp={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Np={key:1,class:"creative-options-list"},Tp={class:"creative-title"},_p={class:"creative-angle"},Lp=["onClick"],jp={class:"form-group"},Bp={class:"quiz-config-row"},Dp={class:"form-group",style:{flex:"1"}},qp={class:"form-group",style:{flex:"1"}},Rp={class:"form-group"},Fp={class:"qtype-btns"},Up=["onClick"],Vp={class:"qtype-icon"},Op={class:"form-group"},Wp={class:"form-group"},Gp={class:"prompt-label-row"},Hp={key:1,class:"prompt-auto-badge"},Qp=["disabled"],Yp={key:0,class:"spinner"},Jp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kp={key:0,class:"quiz-results"},Xp={class:"quiz-results-header"},Zp={class:"form-label"},ev={class:"quiz-header-actions"},tv={class:"regen-row"},ov=["disabled"],nv={key:0,class:"spinner spinner-sm"},lv={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},iv=["disabled"],av={class:"quiz-card-header"},sv={class:"quiz-card-check"},rv=["onUpdate:modelValue"],uv={class:"q-num"},dv={class:"q-badges"},cv={class:"badge type-badge"},pv={class:"q-question"},vv={class:"q-options"},mv={class:"q-option-letter"},fv={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},gv={key:0,class:"q-explanation"},bv=["disabled"],yv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hv=["disabled"],xv={key:0,class:"spinner"},wv={key:0,class:"selected-text-preview"},kv={class:"text-preview"},Cv={key:1,class:"ai-hint"},Sv={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},$v=["disabled"],Iv={key:0,class:"spinner"},Av={key:0,class:"selected-text-preview"},Mv={class:"text-preview"},Ev={key:1,class:"ai-hint"},Pv={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},zv=["disabled"],Nv={key:0,class:"spinner"},Tv={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},_v={class:"result-header"},Lv={class:"result-actions"},jv=["disabled"],Bv={class:"textarea result-display"},Dv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qv=["disabled"],Rv={key:0,class:"spinner"},Fv={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Uv={class:"textarea result-display",style:{color:"var(--color-primary)"}},Vv={key:6,class:"ai-settings"},Ov={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Wv=["value"],Gv={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Hv=["value"],Qv={key:0,class:"demo-notice"},Yv={key:7,class:"result-area"},Jv={class:"result-header"},Kv={class:"result-pre"},Xv={class:"result-actions"},Zv=["disabled"],e1={key:8,class:"ai-error"},t1={__name:"AIAssistant",setup(h){const s=qn(),r=Oe(),d=We(),v=z("generate"),f=z(""),g=z(""),p=z("");qe(v,()=>{p.value=""});const P=z(4),K=z("general"),Q=z("Spanish"),T=z(""),G=z(""),Y=z(""),C=z(!1),n=z("single"),b=z(5),y=z("slide"),F=z([]),X=z(""),me=I(()=>{const M=g.value.trim()||"[your topic]";if(n.value==="deck"){let ne=`Create a complete ${b.value}-slide learning deck about "${M}".`;return G.value.trim()&&(ne+=`
Additional context: ${G.value.trim()}`),ne+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,ne+=`
Make each slide distinct, logically sequenced, and specific to "${M}".`,ne}let L=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[K.value]||"educational slide"} about "${M}".`;return G.value.trim()&&(L+=`
Additional context: ${G.value.trim()}`),L+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${M}" — no generic placeholders.`,L});qe(me,M=>{C.value||(Y.value=M)},{immediate:!0});function ie(){Y.value=me.value,C.value=!1}const fe=z(""),ce=z("intermediate"),N=z("multiple-choice"),j=z(""),V=z([]),ae=z(""),O=z(!1),de=I(()=>{const M=fe.value.trim()||"[your topic]",a={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},L={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let ne=`Generate ${P.value} ${a[ce.value]} ${L[N.value]} quiz questions about "${M}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return j.value.trim()&&(ne+=`
Learning objective: ${j.value.trim()}`),ne});qe(de,M=>{O.value||(ae.value=M)},{immediate:!0});function re(){ae.value=de.value,O.value=!1}const Ae=I(()=>d.getProject(r.projectId)),ye=I(()=>{var M,a;return(a=(M=Ae.value)==null?void 0:M.slides)==null?void 0:a.find(L=>L.id===r.currentSlideId)}),ue=I(()=>{var M,a;return r.selectedElementId?(a=(M=ye.value)==null?void 0:M.elements)==null?void 0:a.find(L=>L.id===r.selectedElementId):null});async function pe(){if(!g.value.trim()&&!Y.value.trim())return;if(p.value="",F.value=[],X.value="",n.value==="deck"){const a=await s.generateSlideDeck(g.value,b.value,{objective:G.value,customPrompt:Y.value});if(a!=null&&a.length){const L=a.map(ne=>B(ne));p.value=JSON.stringify({slides:L},null,2),ge(L,{replaceGenerated:!0})}return}if(y.value==="options"){await Ee();return}const M=await s.generateSlideContent(g.value,K.value,G.value,Y.value);if(M){const a=B(M);p.value=JSON.stringify(a,null,2),he(a,{replaceGenerated:!0})}}function B(M){const a=M&&typeof M=="object"?M:{},ne=(Array.isArray(a.bullets)?a.bullets:typeof a.bullets=="string"?a.bullets.split(`
`):[]).map(m=>String(m||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(a.title||g.value||"Untitled Slide").trim(),subtitle:String(a.subtitle||"").trim(),bullets:ne,callout:String(a.callout||"").trim()}}function ee(M,a){var m,S,D;const L=(S=(m=d.getProject(M))==null?void 0:m.slides)==null?void 0:S.find(W=>W.id===a);if(!((D=L==null?void 0:L.elements)!=null&&D.length))return;L.elements.filter(W=>{var k;return((k=W.meta)==null?void 0:k.source)==="ai-content"}).map(W=>W.id).forEach(W=>{d.deleteElement(M,a,W)})}function se(M,a,L,ne){return d.addElement(M,a,L,{...ne,meta:{...ne.meta||{},source:"ai-content"}})}function oe(M,a,L,{replaceGenerated:ne=!1}={}){var m;if(!(!M||!a)){if(ne&&ee(M,a),L.title&&(d.updateSlide(M,a,{title:L.title}),se(M,a,"heading",{x:60,y:40,width:840,height:80,content:{text:L.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),L.subtitle&&se(M,a,"text",{x:60,y:130,width:840,height:50,content:{text:L.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(m=L.bullets)!=null&&m.length){const S=L.bullets.map(D=>`• ${D}`).join(`
`);se(M,a,"text",{x:60,y:L.subtitle?200:150,width:840,height:200,content:{text:S,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}L.callout&&(se(M,a,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),se(M,a,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${L.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function ge(M,{replaceGenerated:a=!1}={}){if(!r.currentSlideId)return;const L=r.projectId;if(!L||!Array.isArray(M)||!M.length)return;M.map(m=>B(m)).forEach(m=>{const S=d.addSlide(L);S&&oe(L,S.id,m,{replaceGenerated:a})})}function he(M=null,{replaceGenerated:a=!1}={}){if(!r.currentSlideId)return;let L=M;if(!L){if(!p.value)return;try{L=JSON.parse(p.value)}catch(D){console.warn("Could not parse AI content:",D);return}}const ne=B(L),m=r.projectId,S=r.currentSlideId;!m||!S||oe(m,S,ne,{replaceGenerated:a})}function Ce(){if(p.value){if(n.value==="deck"){try{const M=JSON.parse(p.value),a=Array.isArray(M)?M:M==null?void 0:M.slides;if(!Array.isArray(a)||!a.length)return;ge(a,{replaceGenerated:!0})}catch{return}return}he()}}async function Ee(){const M=g.value.trim()||"[your topic]",a=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${K.value}" slide about "${M}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,L=await s.generate(a,{type:"creativeOptions",topic:M,slideType:K.value});if(L)try{const ne=JSON.parse(L.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(ne))throw new Error("Options must be an array");F.value=ne.slice(0,3).map((m,S)=>({title:String((m==null?void 0:m.title)||`Option ${S+1}`),angle:String((m==null?void 0:m.angle)||""),prompt:String((m==null?void 0:m.prompt)||"")})).filter(m=>m.prompt.trim()),F.value.length||(X.value="No usable creative options were returned. Try generating again.")}catch{X.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function Ne(M){M!=null&&M.prompt&&(Y.value=M.prompt,C.value=!0,y.value="slide",await pe())}async function c(M=!1){if(!fe.value.trim()&&!ae.value.trim())return;M||(V.value=[]);const a=await s.generateQuiz(fe.value,P.value,{difficulty:ce.value,questionType:N.value,objective:j.value,customPrompt:ae.value});if(a)if(M){const L=new Set(V.value.map(m=>m.question)),ne=a.filter(m=>!L.has(m.question)).map(m=>({...m,_selected:!0}));V.value=[...V.value,...ne]}else V.value=a.map(L=>({...L,_selected:!0}))}async function $(){const M=V.value.filter(L=>L._selected);if(!M.length)return;const a=r.projectId;M.forEach((L,ne)=>{const m=d.addSlide(a);m&&(d.addElement(a,m.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:L.question,options:L.options,correctIndex:L.correctIndex,explanation:L.explanation||""}}),d.updateSlide(a,m.id,{title:`Q${ne+1}: ${L.question.slice(0,40)}…`}))}),V.value=[]}function A(M){V.value.forEach(a=>a._selected=M)}async function Se(){if(!T.value.trim())return;const M=await s.generateVoiceoverScript(T.value);M&&(p.value=M)}async function we(){var L,ne;const M=(ne=(L=ue.value)==null?void 0:L.content)==null?void 0:ne.text;if(!M)return;const a=await s.generateTranslation(M,Q.value);a&&(p.value=a)}async function Te(){!p.value||!ue.value||d.updateElement(r.projectId,r.currentSlideId,ue.value.id,{content:{...ue.value.content,text:p.value}})}const be=z(""),Pe=z(!1);async function Ve(){if(be.value.trim()){Pe.value=!0,p.value="Optimizing prompt...";try{let M=be.value;const a=await s.generateImagePrompt(be.value);a&&(M=a.replace(/```(json)?\n?/g,"").trim()),p.value="Painting image... this takes about 10-20 seconds. Please wait.";const L=Math.floor(Math.random()*1e6),ne=`https://image.pollinations.ai/prompt/${encodeURIComponent(M)}?width=600&height=400&nologo=true&seed=${L}`;await new Promise((m,S)=>{const D=new Image;D.onload=m,D.onerror=S,D.src=ne}),d.addElement(r.projectId,r.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:ne,objectFit:"cover"}}),p.value="Image added to slide!"}catch{p.value="Failed to generate image. Try a different prompt."}finally{Pe.value=!1}}}async function Ye(){var a,L;if(!((L=(a=ue.value)==null?void 0:a.content)!=null&&L.text))return;const M=await s.improveText(ue.value.content.text,f.value||"Make it clearer and more engaging");M&&(p.value=M)}async function Ge(){!p.value||!ue.value||d.updateElement(r.projectId,r.currentSlideId,ue.value.id,{content:{...ue.value.content,text:p.value}})}async function ut(){if(!f.value.trim())return;const M=await s.generate(f.value);M&&(p.value=M)}return(M,a)=>{var L,ne,m,S,D,W;return l(),i("div",vp,[e("div",mp,[(l(),i(U,null,te([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],k=>e("button",{key:k.id,class:H(["ai-mode-btn",v.value===k.id&&"active"]),onClick:$e=>v.value=k.id},w(k.label),11,fp)),64))]),e("div",gp,[v.value==="generate"?(l(),i(U,{key:0},[e("div",bp,[a[34]||(a[34]=e("label",{class:"form-label"},[q("Topic / Subject "),e("span",{class:"required"},"*")],-1)),Z(e("input",{"onUpdate:modelValue":a[0]||(a[0]=k=>g.value=k),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:pn(pe,["enter"])},null,544),[[ve,g.value]])]),e("div",yp,[e("button",{class:H(["output-mode-btn",n.value==="single"&&"active"]),onClick:a[1]||(a[1]=k=>n.value="single")},"Single Slide",2),e("button",{class:H(["output-mode-btn",n.value==="deck"&&"active"]),onClick:a[2]||(a[2]=k=>n.value="deck")},"Slide Deck",2)]),n.value==="single"?(l(),i("div",hp,[a[36]||(a[36]=e("label",{class:"form-label"},"Slide Type",-1)),Z(e("select",{"onUpdate:modelValue":a[3]||(a[3]=k=>K.value=k),class:"select"},[...a[35]||(a[35]=[Ue('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[ct,K.value]])])):(l(),i("div",xp,[a[37]||(a[37]=e("label",{class:"form-label"},"Number of Slides",-1)),Z(e("input",{"onUpdate:modelValue":a[4]||(a[4]=k=>b.value=k),class:"input",type:"number",min:"1",max:"20"},null,512),[[ve,b.value,void 0,{number:!0}]]),a[38]||(a[38]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",wp,[a[39]||(a[39]=e("label",{class:"form-label"},[q("Description "),e("span",{class:"optional"},"(optional)")],-1)),Z(e("textarea",{"onUpdate:modelValue":a[5]||(a[5]=k=>G.value=k),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[ve,G.value]])]),e("div",kp,[e("div",Cp,[a[41]||(a[41]=e("label",{class:"form-label"},"AI Prompt",-1)),C.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:ie,title:"Reset to auto-generated prompt"},[...a[40]||(a[40]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),q(" Reset ",-1)])])):(l(),i("span",Sp,"auto"))]),Z(e("textarea",{"onUpdate:modelValue":a[6]||(a[6]=k=>Y.value=k),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:a[7]||(a[7]=k=>C.value=!0),spellcheck:"false"},null,544),[[ve,Y.value]]),a[42]||(a[42]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),n.value==="single"?(l(),i("div",$p,[e("button",{class:H(["output-mode-btn",y.value==="slide"&&"active"]),onClick:a[8]||(a[8]=k=>y.value="slide")},"Show on Slide",2),e("button",{class:H(["output-mode-btn",y.value==="options"&&"active"]),onClick:a[9]||(a[9]=k=>y.value="options")},"Creative Options",2)])):_("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating||!g.value.trim()&&!Y.value.trim()||n.value==="deck"&&(!b.value||b.value<1||b.value>20),onClick:pe},[x(s).isGenerating?(l(),i("span",Ap)):(l(),i("svg",Mp,[...a[43]||(a[43]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),q(" "+w(x(s).isGenerating?"Generating…":n.value==="deck"?p.value?`Regenerate ${b.value} Slides`:`Generate ${b.value} Slides`:y.value==="slide"?p.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,Ip),n.value==="single"&&y.value==="options"&&(F.value.length||X.value)?(l(),i("div",Ep,[e("div",Pp,[a[44]||(a[44]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:a[10]||(a[10]=k=>{F.value=[],X.value=""})},"Clear")]),X.value?(l(),i("div",zp,[a[45]||(a[45]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),q(" "+w(X.value),1)])):(l(),i("div",Np,[(l(!0),i(U,null,te(F.value,(k,$e)=>(l(),i("article",{key:$e,class:"creative-option-card"},[e("h4",Tp,w(k.title),1),e("p",_p,w(k.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:De=>Ne(k)},"Use This Option",8,Lp)]))),128))]))])):_("",!0)],64)):v.value==="quiz"?(l(),i(U,{key:1},[e("div",jp,[a[46]||(a[46]=e("label",{class:"form-label"},[q("Quiz Topic "),e("span",{class:"required"},"*")],-1)),Z(e("input",{"onUpdate:modelValue":a[11]||(a[11]=k=>fe.value=k),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:pn(c,["enter"])},null,544),[[ve,fe.value]])]),e("div",Bp,[e("div",Dp,[a[48]||(a[48]=e("label",{class:"form-label"},"Questions",-1)),Z(e("select",{"onUpdate:modelValue":a[12]||(a[12]=k=>P.value=k),class:"select"},[...a[47]||(a[47]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[ct,P.value,void 0,{number:!0}]])]),e("div",qp,[a[50]||(a[50]=e("label",{class:"form-label"},"Difficulty",-1)),Z(e("select",{"onUpdate:modelValue":a[13]||(a[13]=k=>ce.value=k),class:"select"},[...a[49]||(a[49]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[ct,ce.value]])])]),e("div",Rp,[a[51]||(a[51]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Fp,[(l(),i(U,null,te([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],k=>e("button",{key:k.id,class:H(["qtype-btn",N.value===k.id&&"active"]),onClick:$e=>N.value=k.id},[e("span",Vp,w(k.icon),1),e("span",null,w(k.label),1)],10,Up)),64))])]),e("div",Op,[a[52]||(a[52]=e("label",{class:"form-label"},[q("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),Z(e("input",{"onUpdate:modelValue":a[14]||(a[14]=k=>j.value=k),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[ve,j.value]])]),e("div",Wp,[e("div",Gp,[a[54]||(a[54]=e("label",{class:"form-label"},"AI Prompt",-1)),O.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:re,title:"Reset to auto-generated prompt"},[...a[53]||(a[53]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),q(" Reset ",-1)])])):(l(),i("span",Hp,"auto"))]),Z(e("textarea",{"onUpdate:modelValue":a[15]||(a[15]=k=>ae.value=k),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:a[16]||(a[16]=k=>O.value=!0),spellcheck:"false"},null,544),[[ve,ae.value]]),a[55]||(a[55]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating||!fe.value.trim()&&!ae.value.trim(),onClick:a[17]||(a[17]=k=>c(!1))},[x(s).isGenerating?(l(),i("span",Yp)):(l(),i("svg",Jp,[...a[56]||(a[56]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),q(" "+w(x(s).isGenerating?"Generating…":`Generate ${P.value} Questions`),1)],8,Qp),V.value.length?(l(),i("div",Kp,[e("div",Xp,[e("span",Zp,w(V.value.length)+" Questions",1),e("div",ev,[e("button",{class:"btn btn-ghost btn-sm",onClick:a[18]||(a[18]=k=>A(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:a[19]||(a[19]=k=>A(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:a[20]||(a[20]=k=>V.value=[])},"Clear")])]),e("div",tv,[e("button",{class:"btn btn-secondary regen-btn",disabled:x(s).isGenerating,onClick:a[21]||(a[21]=k=>c(!1)),title:"Replace all questions with a new set"},[x(s).isGenerating?(l(),i("span",nv)):(l(),i("svg",lv,[...a[57]||(a[57]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),a[58]||(a[58]=q(" Regenerate ",-1))],8,ov),e("button",{class:"btn btn-ghost regen-btn",disabled:x(s).isGenerating,onClick:a[22]||(a[22]=k=>c(!0)),title:"Generate more and append to current list"},[...a[59]||(a[59]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),q(" Add More ",-1)])],8,iv)]),(l(!0),i(U,null,te(V.value,(k,$e)=>(l(),i("div",{key:$e,class:H(["quiz-card",{deselected:!k._selected}])},[e("div",av,[e("label",sv,[Z(e("input",{type:"checkbox","onUpdate:modelValue":De=>k._selected=De},null,8,rv),[[ft,k._selected]]),e("span",uv,"Q"+w($e+1),1)]),e("div",dv,[e("span",{class:H(["badge difficulty-badge",k.difficulty])},w(k.difficulty),3),e("span",cv,w(k.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",pv,w(k.question),1),e("div",vv,[(l(!0),i(U,null,te(k.options,(De,Le)=>(l(),i("div",{key:Le,class:H(["q-option",Le===k.correctIndex&&"correct"])},[e("span",mv,w(["A","B","C","D"][Le]),1),e("span",null,w(De),1),Le===k.correctIndex?(l(),i("svg",fv,[...a[60]||(a[60]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):_("",!0)],2))),128))]),k.explanation?(l(),i("div",gv,[a[61]||(a[61]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),q(" "+w(k.explanation),1)])):_("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!V.value.filter(k=>k._selected).length,onClick:$},[a[62]||(a[62]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),q(" Add "+w(V.value.filter(k=>k._selected).length)+" Selected as Quiz Slides ",1)],8,bv)])):_("",!0)],64)):v.value==="voiceover"?(l(),i(U,{key:2},[e("div",yv,[a[63]||(a[63]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),Z(e("textarea",{"onUpdate:modelValue":a[23]||(a[23]=k=>T.value=k),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[ve,T.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating,onClick:Se},[x(s).isGenerating?(l(),i("span",xv)):_("",!0),q(" "+w(x(s).isGenerating?"Generating…":"Generate Script"),1)],8,hv)],64)):v.value==="improve"?(l(),i(U,{key:3},[(ne=(L=ue.value)==null?void 0:L.content)!=null&&ne.text?(l(),i("div",wv,[a[64]||(a[64]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",kv,w(ue.value.content.text.slice(0,120))+w(ue.value.content.text.length>120?"…":""),1)])):(l(),i("p",Cv,"Select a text element on the canvas to improve it.")),e("div",Sv,[a[65]||(a[65]=e("label",{class:"form-label"},"Instruction",-1)),Z(e("input",{"onUpdate:modelValue":a[24]||(a[24]=k=>f.value=k),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[ve,f.value]])]),a[66]||(a[66]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),Z(e("textarea",{"onUpdate:modelValue":a[25]||(a[25]=k=>f.value=k),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[ve,f.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating||!ue.value&&!f.value,onClick:a[26]||(a[26]=k=>ue.value?Ye():ut())},[x(s).isGenerating?(l(),i("span",Iv)):_("",!0),q(" "+w(x(s).isGenerating?"Processing…":"Generate"),1)],8,$v)],64)):v.value==="translate"?(l(),i(U,{key:4},[(S=(m=ue.value)==null?void 0:m.content)!=null&&S.text?(l(),i("div",Av,[a[67]||(a[67]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Mv,w(ue.value.content.text.slice(0,120))+w(ue.value.content.text.length>120?"…":""),1)])):(l(),i("p",Ev,"Select a text element on the canvas to translate it.")),e("div",Pv,[a[69]||(a[69]=e("label",{class:"form-label"},"Target Language",-1)),Z(e("select",{"onUpdate:modelValue":a[27]||(a[27]=k=>Q.value=k),class:"select"},[...a[68]||(a[68]=[Ue('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[ct,Q.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating||!((W=(D=ue.value)==null?void 0:D.content)!=null&&W.text),onClick:we},[x(s).isGenerating?(l(),i("span",Nv)):_("",!0),q(" "+w(x(s).isGenerating?"Translating…":"Translate Text"),1)],8,zv),p.value?(l(),i("div",Tv,[e("div",_v,[a[70]||(a[70]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",Lv,[e("button",{class:"btn btn-ghost btn-sm",onClick:a[28]||(a[28]=k=>M.navigator.clipboard.writeText(p.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Te,disabled:!ue.value},"Apply",8,jv)])]),e("div",Bv,w(p.value),1)])):_("",!0)],64)):v.value==="image"?(l(),i(U,{key:5},[a[73]||(a[73]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",Dv,[a[71]||(a[71]=e("label",{class:"form-label"},"Image Description",-1)),Z(e("textarea",{"onUpdate:modelValue":a[29]||(a[29]=k=>be.value=k),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[ve,be.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Pe.value||x(s).isGenerating||!be.value,onClick:Ve},[Pe.value||x(s).isGenerating?(l(),i("span",Rv)):_("",!0),q(" "+w(Pe.value||x(s).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,qv),p.value?(l(),i("div",Fv,[a[72]||(a[72]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",Uv,w(p.value),1)])):_("",!0)],64)):v.value==="settings"?(l(),i("div",Vv,[e("div",Ov,[a[75]||(a[75]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:x(s).apiProvider,class:"select",onChange:a[30]||(a[30]=k=>x(s).setProvider(k.target.value))},[...a[74]||(a[74]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,Wv)]),e("div",Gv,[a[76]||(a[76]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:x(s).apiKey,class:"input",placeholder:"sk-…",onChange:a[31]||(a[31]=k=>x(s).setApiKey(k.target.value))},null,40,Hv),a[77]||(a[77]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),x(s).apiKey?_("",!0):(l(),i("div",Qv,[...a[78]||(a[78]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),q(" Running in ",-1),e("strong",null,"demo mode",-1),q(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):_("",!0),p.value&&v.value!=="settings"&&v.value!=="quiz"?(l(),i("div",Yv,[e("div",Jv,[a[79]||(a[79]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:a[32]||(a[32]=k=>p.value="")},"Clear")]),e("pre",Kv,w(p.value),1),e("div",Xv,[v.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:Ce},w(n.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):_("",!0),v.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:x(s).isGenerating,onClick:pe},[...a[80]||(a[80]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),q(" Regenerate ",-1)])],8,Zv)):_("",!0),v.value==="improve"&&ue.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Ge}," Apply to Element ")):_("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:a[33]||(a[33]=k=>{var $e;return($e=M.navigator.clipboard)==null?void 0:$e.writeText(p.value)})}," Copy ")])])):_("",!0),x(s).lastError?(l(),i("div",e1,[a[81]||(a[81]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),q(" "+w(x(s).lastError),1)])):_("",!0)])])}}},o1=je(t1,[["__scopeId","data-v-697ec3ea"]]),n1={class:"theme-manager"},l1={class:"panel-section"},i1={class:"presets-grid"},a1=["title","onClick"],s1={class:"preset-preview"},r1={class:"preset-name"},u1={class:"panel-section"},d1={class:"theme-fields"},c1={class:"form-label"},p1={class:"color-row"},v1=["value","onInput"],m1=["value","onChange"],f1={class:"panel-section"},g1={class:"theme-field"},b1=["value","placeholder"],y1={class:"chart-palette-preview"},h1={class:"panel-section"},x1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},w1=["value"],k1=["value"],C1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},S1=["value"],$1=["value"],I1={class:"form-group"},A1=["value"],M1={class:"panel-section"},E1={class:"tp-chart-row"},P1={key:0,class:"apply-message success"},z1={key:1,class:"apply-message error"},N1={__name:"ThemeManager",setup(h){const s=Oe(),r=We(),d=I(()=>r.getProject(s.projectId)),v=I(()=>{var n;return((n=d.value)==null?void 0:n.theme)||{}}),f=I(()=>vn(v.value)),g=z(""),p=z("");function P(n){r.updateProject(s.projectId,{theme:{...v.value,...n}})}const K=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],Q=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function T(n){P(n)}function G(n,b){const y=n.content||{};return n.type==="text"?{content:{...y,fontFamily:b.fontFamily||y.fontFamily,color:b.textColor||y.color}}:n.type==="heading"?{content:{...y,fontFamily:b.headingFont||b.fontFamily||y.fontFamily,color:b.textColor||y.color}}:n.type==="shape"?{content:{...y,fillColor:b.secondaryColor||y.fillColor}}:n.type==="hotspot"?{content:{...y,bgColor:b.primaryColor||y.bgColor}}:n.type==="button"?{content:{...y,bgColor:b.primaryColor||y.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:b.fontFamily||y.fontFamily}}:n.type==="quiz"?{content:{...y,cardBgColor:b.bgColor||y.cardBgColor,questionColor:b.textColor||y.questionColor,accentColor:b.primaryColor||y.accentColor}}:n.type==="chart"?{content:{...y,...hn(b)}}:null}function Y(){P({chartPalette:""})}function C(){g.value="",p.value="";const n=s.projectId,b=d.value,y=v.value;if(!n||!b){p.value="No active project to apply theme.";return}const F=b.slides||[];let X=0;F.forEach(me=>{(me.backgroundType||"color")==="color"&&r.updateSlide(n,me.id,{backgroundType:"color",background:y.bgColor||me.background||"#ffffff"}),(me.elements||[]).forEach(ie=>{const fe=G(ie,y);fe&&(r.updateElement(n,me.id,ie.id,fe),X+=1)})}),g.value=`Applied theme to ${F.length} slide${F.length===1?"":"s"} and ${X} element${X===1?"":"s"}.`}return(n,b)=>(l(),i("div",n1,[e("div",l1,[b[4]||(b[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",i1,[(l(),i(U,null,te(K,y=>e("div",{key:y.name,class:"preset-card",title:y.name,onClick:F=>T(y)},[e("div",s1,[e("div",{class:"pp-header",style:le({background:y.primaryColor})},null,4),e("div",{class:"pp-body",style:le({background:y.bgColor})},[e("div",{class:"pp-line",style:le({background:y.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:le({background:y.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:le({background:y.secondaryColor})},null,4)]),e("span",r1,w(y.name),1)],8,a1)),64))])]),e("div",u1,[b[5]||(b[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",d1,[(l(),i(U,null,te({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(y,F)=>e("div",{class:"theme-field",key:F},[e("label",c1,w(y),1),e("div",p1,[e("input",{type:"color",value:v.value[F]||"#ffffff",class:"color-input-native",onInput:X=>P({[F]:X.target.value})},null,40,v1),e("input",{value:v.value[F]||"",class:"input",onChange:X=>P({[F]:X.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,m1)])])),64))])]),e("div",f1,[b[8]||(b[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",g1,[b[6]||(b[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:v.value.chartPalette||"",class:"input",placeholder:x(Kn)(x(vn)(v.value)),onChange:b[0]||(b[0]=y=>P({chartPalette:y.target.value}))},null,40,b1),e("div",y1,[(l(!0),i(U,null,te(f.value,(y,F)=>(l(),i("span",{key:`theme-chart-${F}`,class:"chart-palette-dot",style:le({background:y})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Y},"Use auto palette")]),b[7]||(b[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",h1,[b[12]||(b[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",x1,[b[9]||(b[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:v.value.headingFont||"Inter, sans-serif",class:"select",onChange:b[1]||(b[1]=y=>P({headingFont:y.target.value}))},[(l(),i(U,null,te(Q,y=>e("option",{key:y.value,value:y.value},w(y.label),9,k1)),64))],40,w1)]),e("div",C1,[b[10]||(b[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:v.value.fontFamily||"Inter, sans-serif",class:"select",onChange:b[2]||(b[2]=y=>P({fontFamily:y.target.value}))},[(l(),i(U,null,te(Q,y=>e("option",{key:y.value,value:y.value},w(y.label),9,$1)),64))],40,S1)]),e("div",I1,[b[11]||(b[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:v.value.fontSize||16,class:"input",onChange:b[3]||(b[3]=y=>P({fontSize:+y.target.value}))},null,40,A1)])]),e("div",M1,[b[13]||(b[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:le({background:v.value.bgColor||"#fff",fontFamily:v.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:le({color:v.value.textColor,fontFamily:v.value.headingFont||v.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:le({color:v.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:le({background:v.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:le({background:v.value.secondaryColor})},"Badge",4),e("div",E1,[(l(!0),i(U,null,te(f.value.slice(0,5),(y,F)=>(l(),i("span",{key:`preview-chart-${F}`,class:"tp-chart-bar",style:le({background:y,height:`${22+F*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:C}," Apply Theme to Slides "),g.value?(l(),i("p",P1,w(g.value),1)):_("",!0),p.value?(l(),i("p",z1,w(p.value),1)):_("",!0)])]))}},T1=je(N1,[["__scopeId","data-v-da2b0ce4"]]),_1={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},L1={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},j1={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},B1={class:"export-tabs tabs"},D1={class:"export-content"},q1={class:"export-options",style:{"margin-bottom":"20px"}},R1={class:"form-group"},F1={class:"export-meta"},U1={class:"meta-item"},V1={class:"meta-item"},O1={class:"meta-item"},W1={class:"export-options",style:{"margin-bottom":"20px"}},G1={class:"form-group"},H1={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Q1={class:"coming-soon"},Y1={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},J1={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},K1={key:1,class:"export-success"},X1={__name:"ExportModal",setup(h){const s=Oe(),r=We(),d=xn(),v=I(()=>r.getProject(s.projectId)),f=z("json"),g=z(""),p=z(""),P=z(!0);qe(v,C=>{C&&!p.value&&(p.value=C.name||"presentation")},{immediate:!0});function K(){const C=r.exportProject(s.projectId);if(!C)return;const n=new Blob([C],{type:"application/json"}),b=URL.createObjectURL(n),y=document.createElement("a");y.href=b,y.download=`${p.value||"project"}.mediasurf.json`,y.click(),URL.revokeObjectURL(b),g.value="success",setTimeout(()=>g.value="",3e3)}function Q(C,n="presentation"){return String(C).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||n}function T(C,n){const b=pt(n);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${b.width}px;
  --lf-slide-height: ${b.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(C==null?void 0:C.fontFamily)||"Inter, sans-serif"};
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
  color: ${(C==null?void 0:C.textColor)||"#1a1a2e"};
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
  display: ${(n==null?void 0:n.showNavControls)===!1?"none":"flex"};
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
  display: ${(n==null?void 0:n.showNavControls)===!1?"none":"flex"};
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
  background: ${(C==null?void 0:C.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(n==null?void 0:n.showProgress)===!1?"none":"block"};
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
`}function G(){return`
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
`}async function Y(){var Ae,ye,ue;const C=v.value;if(!C)return;g.value="processing";const n=new Zn,b=n.folder("assets");let y=0;async function F(pe,B="media"){if((!pe||pe.startsWith("data:")||pe.startsWith("http://localhost")||pe.startsWith("blob:"))&&pe.startsWith("data:"))return pe;try{const se=await(await fetch(pe)).blob();let oe="bin";const ge=se.type;if(ge.includes("image/png")?oe="png":ge.includes("image/jpeg")?oe="jpg":ge.includes("image/gif")?oe="gif":ge.includes("image/svg")?oe="svg":ge.includes("image/webp")?oe="webp":ge.includes("video/mp4")?oe="mp4":ge.includes("audio/mpeg")&&(oe="mp3"),oe==="bin"){const Ce=pe.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);Ce&&(oe=Ce[1])}y++;const he=`${B}_${y}.${oe}`;return b.file(he,se),`assets/${he}`}catch(ee){return console.warn("Could not fetch asset:",pe,ee),pe}}const X=JSON.parse(JSON.stringify([...C.slides||[]])).sort((pe,B)=>(pe.order??0)-(B.order??0));if(P.value)for(const pe of X){pe.backgroundType==="image"&&pe.backgroundImage&&(pe.backgroundImage=await F(pe.backgroundImage,"bg"));for(const B of pe.elements||[])B.type==="image"&&((Ae=B.content)!=null&&Ae.src)&&(B.content.src=await F(B.content.src,"img")),B.type==="video"&&((ye=B.content)!=null&&ye.src)&&!B.content.src.includes("youtube")&&!B.content.src.includes("youtu.be")&&(B.content.src=await F(B.content.src,"vid")),B.type==="audio"&&((ue=B.content)!=null&&ue.src)&&(B.content.src=await F(B.content.src,"aud"))}const me=Q(p.value||C.name||"presentation"),ie={name:C.name,theme:C.theme||{},settings:C.settings||{},slides:X},fe=JSON.stringify(ie).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),ce=T(C.theme,C.settings),N=G(),j=`<script id="lf-data" type="application/json">${fe}<\/script>`,ae=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${me}</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="lf-shell">
<div class="progress" id="progress"></div>
<div class="lf-grid"></div>
<div class="lf-stage-shell">
  <div class="presentation" id="presentation"></div>
</div>
<div class="dot-nav" id="dot-nav"></div>
<nav class="nav">
  <button class="nav-btn" id="prev-btn" type="button">← Prev</button>
  <span class="nav-counter" id="counter">1 / ${X.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${j}
<script src="script.js"><\/script>
</body>
</html>`;n.file("index.html",ae),n.file("style.css",ce),n.file("script.js",N);const O=await n.generateAsync({type:"blob"}),de=URL.createObjectURL(O),re=document.createElement("a");re.href=de,re.download=`${me}.zip`,re.click(),URL.revokeObjectURL(de),g.value="success",setTimeout(()=>g.value="",3e3)}return(C,n)=>(l(),Be(Rn,{title:"Export Project",size:"md",onClose:n[9]||(n[9]=b=>x(s).showExportModal=!1)},{footer:Ze(()=>[e("button",{class:"btn btn-secondary",onClick:n[8]||(n[8]=b=>x(s).showExportModal=!1)},"Close")]),default:Ze(()=>{var b,y,F,X,me;return[x(d).user?(l(),i(U,{key:1},[e("div",B1,[e("button",{class:H(["tab-btn",f.value==="json"&&"active"]),onClick:n[2]||(n[2]=ie=>f.value="json")},"JSON Project",2),e("button",{class:H(["tab-btn",f.value==="html"&&"active"]),onClick:n[3]||(n[3]=ie=>f.value="html")},"HTML Package",2),e("button",{class:H(["tab-btn",f.value==="scorm"&&"active"]),onClick:n[4]||(n[4]=ie=>f.value="scorm")},"SCORM",2)]),e("div",D1,[f.value==="json"?(l(),i(U,{key:0},[n[20]||(n[20]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",q1,[e("div",R1,[n[15]||(n[15]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),Z(e("input",{type:"text","onUpdate:modelValue":n[5]||(n[5]=ie=>p.value=ie),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ve,p.value]])])]),e("div",F1,[e("div",U1,[n[16]||(n[16]=e("span",null,"Project",-1)),e("strong",null,w((b=v.value)==null?void 0:b.name),1)]),e("div",V1,[n[17]||(n[17]=e("span",null,"Slides",-1)),e("strong",null,w(((F=(y=v.value)==null?void 0:y.slides)==null?void 0:F.length)||0),1)]),e("div",O1,[n[18]||(n[18]=e("span",null,"Elements",-1)),e("strong",null,w(((me=(X=v.value)==null?void 0:X.slides)==null?void 0:me.reduce((ie,fe)=>{var ce;return ie+(((ce=fe.elements)==null?void 0:ce.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:K},[...n[19]||(n[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),q(" Download JSON ",-1)])])],64)):f.value==="html"?(l(),i(U,{key:1},[n[24]||(n[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",W1,[e("div",G1,[n[21]||(n[21]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),Z(e("input",{type:"text","onUpdate:modelValue":n[6]||(n[6]=ie=>p.value=ie),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ve,p.value]])]),e("label",H1,[Z(e("input",{type:"checkbox","onUpdate:modelValue":n[7]||(n[7]=ie=>P.value=ie)},null,512),[[ft,P.value]]),n[22]||(n[22]=q(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),n[25]||(n[25]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:Y},[...n[23]||(n[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),q(" Download HTML ",-1)])])],64)):f.value==="scorm"?(l(),i(U,{key:2},[n[29]||(n[29]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Q1,[(l(),i("svg",Y1,[...n[26]||(n[26]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),n[27]||(n[27]=e("h4",null,"Coming Soon",-1)),n[28]||(n[28]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):_("",!0),rt(mt,{name:"fade"},{default:Ze(()=>[g.value==="processing"?(l(),i("div",J1,[...n[30]||(n[30]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),q(" Generating package... Please wait. ",-1)])])):g.value==="success"?(l(),i("div",K1,[...n[31]||(n[31]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),q(" Export successful! Check your downloads folder. ",-1)])])):_("",!0)]),_:1})])],64)):(l(),i("div",_1,[(l(),i("svg",L1,[...n[10]||(n[10]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),n[13]||(n[13]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),n[14]||(n[14]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",j1,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:n[0]||(n[0]=ie=>x(d).loginWithGoogle())},[...n[11]||(n[11]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),q(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:n[1]||(n[1]=ie=>x(d).loginWithMicrosoft())},[...n[12]||(n[12]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),q(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Z1=je(X1,[["__scopeId","data-v-10fbcd07"]]),em={key:0,class:"editor-view"},tm={class:"editor-topbar"},om={class:"topbar-left"},nm={class:"project-name-wrap"},lm=["value"],im={class:"save-label"},am={class:"topbar-center"},sm={key:0,class:"slide-position"},rm={class:"topbar-right"},um={class:"editor-body"},dm={class:"authoring-rail"},cm=["onClick","data-tooltip"],pm={key:0,class:"rail-icon"},vm={key:1,class:"rail-icon"},mm={key:2,class:"rail-icon"},fm={key:3,class:"rail-icon"},gm={key:4,class:"rail-icon"},bm={key:5,class:"rail-icon"},ym={key:6,class:"rail-icon"},hm={key:7,class:"rail-icon"},xm={key:8,class:"rail-icon"},wm={class:"right-panel"},km={class:"panel-tabs"},Cm=["onClick","data-tooltip"],Sm={class:"tab-icon"},$m={class:"tab-label"},Im={class:"panel-content"},Am={key:1,class:"editor-not-found"},Mm={__name:"EditorView",setup(h){const s=Dn(),r=Bn(),d=Oe(),v=We(),f=xn(),g=I(()=>s.params.id),p=I(()=>v.getProject(g.value)),P=I(()=>pt(p.value)),K=I(()=>{var c;return[...((c=p.value)==null?void 0:c.slides)||[]].sort(($,A)=>$.order-A.order)}),Q=z(null),T=z(!1),G=z("deck"),{aiStore:Y,showAIModal:C,aiMode:n,aiTopic:b,aiContext:y,aiProjectName:F,aiSlideCount:X,aiQuestionCount:me,aiDifficulty:ie,aiQuestionType:fe,aiCreationError:ce,aiSubmitting:N,aiProjectNamePlaceholder:j,aiPrimaryActionLabel:V,openAICreationModal:ae,createAIProject:O}=Fn({onRequireAuth:()=>r.push({name:"dashboard"})});let de=!1,re=null;qe(()=>p.value,c=>{if(c){if(de){de=!1;return}re&&clearTimeout(re),re=setTimeout(()=>{d.pushHistory(c)},600)}},{deep:!0}),qe(()=>f.isAuthReady,async c=>{var $;if(c){if(($=f.user)!=null&&$.uid&&await v.ensureRemoteProjectsLoaded(),!p.value){r.push({name:"dashboard"});return}d.setProject(g.value),K.value.length>0&&d.setCurrentSlide(K.value[0].id),d.pushHistory(p.value)}},{immediate:!0});const Ae=I(()=>{const c=p.value;return c?`Saved ${new Date(c.updatedAt).toLocaleTimeString()}`:""}),ye=I(()=>{switch(d.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});el({undo:()=>{if(d.canUndo()){const c=d.undo();c&&(de=!0,v.updateProject(g.value,c))}},redo:()=>{if(d.canRedo()){const c=d.redo();c&&(de=!0,v.updateProject(g.value,c))}},delete:()=>{d.selectedElementId&&(v.deleteElement(d.projectId,d.currentSlideId,d.selectedElementId),d.clearSelection())},escape:()=>{d.clearSelection(),d.setActiveTool("select")},copy:()=>{var $,A,Se,we;const c=(we=(Se=(A=($=p.value)==null?void 0:$.slides)==null?void 0:A.find(Te=>Te.id===d.currentSlideId))==null?void 0:Se.elements)==null?void 0:we.find(Te=>Te.id===d.selectedElementId);c&&d.setClipboard(c)},paste:()=>{if(d.clipboard&&d.currentSlideId){const c=d.clipboard;v.addElement(d.projectId,d.currentSlideId,c.type,{...c,x:c.x+20,y:c.y+20,id:void 0})}},duplicate:()=>{if(d.selectedElementId){const c=v.duplicateElement(d.projectId,d.currentSlideId,d.selectedElementId);c&&d.selectElement(c.id)}},zoomIn:()=>d.zoomIn(),zoomOut:()=>d.zoomOut(),zoomReset:()=>d.zoomReset(),toggleGrid:()=>d.toggleGrid(),nudge:(c,$)=>{var Se,we,Te,be;if(!d.selectedElementId)return;const A=(be=(Te=(we=(Se=p.value)==null?void 0:Se.slides)==null?void 0:we.find(Pe=>Pe.id===d.currentSlideId))==null?void 0:Te.elements)==null?void 0:be.find(Pe=>Pe.id===d.selectedElementId);A&&v.updateElement(d.projectId,d.currentSlideId,d.selectedElementId,{x:A.x+c,y:A.y+$})},selectAll:()=>{var $,A,Se;(((Se=(A=($=p.value)==null?void 0:$.slides)==null?void 0:A.find(we=>we.id===d.currentSlideId))==null?void 0:Se.elements)||[]).forEach((we,Te)=>d.selectElement(we.id,Te>0))}});function ue(){r.push({name:"dashboard"})}function pe(){r.push({name:"preview",params:{id:g.value},query:{from:"editor"}})}function B(c="deck"){G.value=c,T.value=!0}function ee(){T.value=!1,ae(G.value)}function se(c,$="Image"){if(!d.projectId||!d.currentSlideId||!c)return;const A=new Image;A.onload=()=>{const Te=Math.min(420/A.width,280/A.height,1),be=Math.max(120,Math.round(A.width*Te)),Pe=Math.max(80,Math.round(A.height*Te)),Ve=Math.max(24,Math.round((P.value.width-be)/2)),Ye=Math.max(24,Math.round((P.value.height-Pe)/2)),Ge=v.addElement(d.projectId,d.currentSlideId,"image",{x:Ve,y:Ye,width:be,height:Pe,content:{src:c,alt:$,objectFit:"cover"}});Ge&&(d.selectElement(Ge.id),d.setRightPanel("properties"),d.setActiveTool("select"))},A.src=c}function oe(c){const[$]=Array.from(c.target.files||[]);if(!$||!$.type.startsWith("image/"))return;const A=new FileReader;A.onload=()=>se(String(A.result||""),$.name),A.readAsDataURL($),c.target.value=""}function ge(){var c;(c=Q.value)==null||c.click()}const he=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function Ce(c){if(c==="text"){d.setActiveTool("text");return}if(c==="resources"){d.setActiveTool("image");return}if(c==="interactive-elements"){d.setActiveTool("hotspot");return}if(c==="interactive-questions"){d.setActiveTool("quiz");return}if(c==="widgets"){d.setActiveTool("shape");return}if(c==="insert"){ge();return}if(c==="style"){d.setRightPanel("properties");return}if(c==="background"){d.clearSelection(),d.setRightPanel("properties");return}c==="pages"&&d.toggleSlidePanel()}function Ee(c){return c==="text"?["text","heading"].includes(d.activeTool):c==="resources"?d.activeTool==="image":c==="interactive-elements"?["hotspot","button"].includes(d.activeTool):c==="interactive-questions"?d.activeTool==="quiz":c==="widgets"?["shape","video","audio","chart"].includes(d.activeTool):c==="insert"?!1:c==="style"||c==="background"?d.rightPanelTab==="properties":c==="pages"?d.showSlidePanel:!1}function Ne(){On({showProgress:!0,animate:!0,overlayColor:"rgba(15, 23, 42, 0.65)",popoverClass:"app-walkthrough-theme",steps:[{popover:{title:"Welcome to the Editor! 🎨",description:"This is where the magic happens. Let us take a quick tour so you know where everything is."}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"When you are finished creating, hit Export to publish your work and share it with the world.",side:"bottom",align:"end"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Drag and drop text, interactive hotspots, quizzes, and multimedia directly onto your canvas.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of exactly which slide you are editing. You can add more from the Pages tab later.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return qe(()=>p.value,c=>{c&&!localStorage.getItem("hasSeenWalkthrough")&&setTimeout(()=>{Ne()},100)},{immediate:!0}),(c,$)=>p.value?(l(),i("div",em,[e("input",{ref_key:"imageInputRef",ref:Q,type:"file",accept:"image/*",class:"sr-only",onChange:oe},null,544),e("header",tm,[e("div",om,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:ue,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...$[14]||($[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),q(" Dashboard ",-1)])]),e("div",nm,[e("input",{value:p.value.name,class:"project-name-input",onChange:$[0]||($[0]=A=>x(v).updateProject(g.value,{name:A.target.value}))},null,40,lm)]),e("span",im,w(Ae.value),1)]),e("div",am,[x(d).currentSlideId?(l(),i("span",sm," Slide "+w(K.value.findIndex(A=>A.id===x(d).currentSlideId)+1)+" of "+w(K.value.length),1)):_("",!0)]),e("div",rm,[e("button",{class:"btn btn-ghost btn-sm",onClick:Ne,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...$[15]||($[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),q(" Help ",-1)])]),e("button",{class:H(["btn btn-ghost btn-sm",x(d).showAIPanel&&"active-btn"]),onClick:$[1]||($[1]=A=>{x(d).showAIPanel=!x(d).showAIPanel,x(d).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...$[16]||($[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),q(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:$[2]||($[2]=A=>{x(d).showThemeManager=!x(d).showThemeManager,x(d).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...$[17]||($[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),q(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:pe,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...$[18]||($[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),q(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:$[3]||($[3]=A=>x(d).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...$[19]||($[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),q(" Export ",-1)])])])]),rt(pc,{onOpenAiProject:B}),e("div",um,[e("aside",dm,[(l(),i(U,null,te(he,A=>e("button",{key:A.id,class:H(["rail-option",Ee(A.id)&&"active"]),onClick:Se=>Ce(A.id),"data-tooltip":A.label,"data-tooltip-position":"right"},[A.id==="text"?(l(),i("span",pm,"T")):A.id==="resources"?(l(),i("span",vm,[...$[20]||($[20]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):A.id==="interactive-elements"?(l(),i("span",mm,[...$[21]||($[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):A.id==="interactive-questions"?(l(),i("span",fm,[...$[22]||($[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):A.id==="widgets"?(l(),i("span",gm,[...$[23]||($[23]=[Ue('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-b65c4daf><rect x="3" y="3" width="7" height="7" data-v-b65c4daf></rect><rect x="14" y="3" width="7" height="7" data-v-b65c4daf></rect><rect x="14" y="14" width="7" height="7" data-v-b65c4daf></rect><rect x="3" y="14" width="7" height="7" data-v-b65c4daf></rect></svg>',1)])])):A.id==="insert"?(l(),i("span",bm,[...$[24]||($[24]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):A.id==="style"?(l(),i("span",ym,[...$[25]||($[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):A.id==="background"?(l(),i("span",hm,[...$[26]||($[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):A.id==="pages"?(l(),i("span",xm,[...$[27]||($[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):_("",!0),q(" "+w(A.label),1)],10,cm)),64))]),rt(mt,{name:"side-panel-slide"},{default:Ze(()=>[x(d).showSlidePanel?(l(),Be(fl,{key:0})):_("",!0)]),_:1}),rt(pp),e("aside",wm,[e("div",km,[(l(),i(U,null,te([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],A=>e("button",{key:A.id,class:H(["panel-tab",x(d).rightPanelTab===A.id&&"active"]),onClick:Se=>x(d).setRightPanel(A.id),"data-tooltip":`Open ${A.label}`,"data-tooltip-position":"bottom"},[e("span",Sm,w(A.icon),1),e("span",$m,w(A.label),1)],10,Cm)),64))]),e("div",Im,[rt(mt,{name:"editor-panel-switch",mode:"out-in"},{default:Ze(()=>[(l(),i("div",{key:ye.value,class:"panel-content-view"},[x(d).rightPanelTab==="properties"?(l(),Be(Gd,{key:0})):x(d).rightPanelTab==="layers"?(l(),Be(jl,{key:1})):x(d).rightPanelTab==="ai"?(l(),Be(o1,{key:2})):x(d).rightPanelTab==="theme"?(l(),Be(T1,{key:3})):_("",!0)]))]),_:1})])])]),x(d).showExportModal?(l(),Be(Z1,{key:0})):_("",!0),T.value?(l(),Be(Un,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:$[4]||($[4]=A=>T.value=!1),onConfirm:ee})):_("",!0),x(C)?(l(),Be(Vn,{key:2,mode:x(n),topic:x(b),context:x(y),"project-name":x(F),"slide-count":x(X),"question-count":x(me),difficulty:x(ie),"question-type":x(fe),"project-name-placeholder":x(j),"primary-action-label":x(V),"creation-error":x(ce),"is-submitting":x(N),"is-generating":x(Y).isGenerating,"has-api-key":!!x(Y).apiKey,onClose:$[5]||($[5]=A=>C.value=!1),onCreate:x(O),"onUpdate:mode":$[6]||($[6]=A=>n.value=A),"onUpdate:topic":$[7]||($[7]=A=>b.value=A),"onUpdate:context":$[8]||($[8]=A=>y.value=A),"onUpdate:projectName":$[9]||($[9]=A=>F.value=A),"onUpdate:slideCount":$[10]||($[10]=A=>X.value=A),"onUpdate:questionCount":$[11]||($[11]=A=>me.value=A),"onUpdate:difficulty":$[12]||($[12]=A=>ie.value=A),"onUpdate:questionType":$[13]||($[13]=A=>fe.value=A)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):_("",!0)])):(l(),i("div",Am,[$[28]||($[28]=e("h2",null,"Project not found",-1)),$[29]||($[29]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:ue},"Go to Dashboard")]))}},jm=je(Mm,[["__scopeId","data-v-b65c4daf"]]);export{jm as default};
