import{O as mn,P as fn,v as l,F as i,B as e,C as w,H as V,I as te,E as Ae,D as H,u as x,Q as se,L as Re,G as T,K as q,q as je,R as gn,f as $,r as E,M as ee,S as ft,w as Fe,N as me,i as Nn,U as Tn,n as _n,y as rt,x as Xe,T as mt,V as ct,z as Ln,p as jn,J as pn}from"./vue-core-DtFYlhKN.js";import{u as Bn,d as Dn}from"./vue-ecosystem-iLG-KstC.js";import{u as Oe,b as qn,M as Rn,a as Fn,C as Un,A as Vn}from"./ConfirmActionModal-5zdwGfDq.js";import{u as Ge,b as On,g as pt,C as Gn,n as Wn,p as Hn,s as Qn,m as bn,f as yn,c as hn,d as Yn,e as Jn,h as vn,a as xn}from"./projectStore-B1agrYTc.js";import{_ as _e}from"./index-nl65PMgW.js";import{C as Kn}from"./ChartElement-24sG9FhW.js";import{J as Xn}from"./jszip-529iNPX7.js";function Zn(h){function s(u){var v,M,K,Q,B,R,Y,C,n,g,y,U,X,ve,le,fe,ce;const c=u.ctrlKey||u.metaKey,p=u.key.toLowerCase(),f=u.target.tagName.toLowerCase(),b=f==="input"||f==="textarea"||u.target.isContentEditable;b&&c&&["c","v","x","a","z","y"].includes(p)||(c&&p==="z"&&!u.shiftKey?(u.preventDefault(),(v=h.undo)==null||v.call(h)):c&&(p==="y"||p==="z"&&u.shiftKey)?(u.preventDefault(),(M=h.redo)==null||M.call(h)):c&&p==="c"?(u.preventDefault(),(K=h.copy)==null||K.call(h)):c&&p==="v"?(u.preventDefault(),(Q=h.paste)==null||Q.call(h)):c&&p==="x"?(u.preventDefault(),(B=h.cut)==null||B.call(h)):c&&p==="d"?(u.preventDefault(),(R=h.duplicate)==null||R.call(h)):c&&p==="a"?(u.preventDefault(),(Y=h.selectAll)==null||Y.call(h)):p==="delete"||p==="backspace"?b||(u.preventDefault(),(C=h.delete)==null||C.call(h)):p==="escape"?(n=h.escape)==null||n.call(h):c&&p==="g"?(u.preventDefault(),(g=h.toggleGrid)==null||g.call(h)):c&&p==="="||c&&p==="+"?(u.preventDefault(),(y=h.zoomIn)==null||y.call(h)):c&&p==="-"?(u.preventDefault(),(U=h.zoomOut)==null||U.call(h)):c&&p==="0"?(u.preventDefault(),(X=h.zoomReset)==null||X.call(h)):p==="arrowleft"?(ve=h.nudge)==null||ve.call(h,-1,0):p==="arrowright"?(le=h.nudge)==null||le.call(h,1,0):p==="arrowup"?(fe=h.nudge)==null||fe.call(h,0,-1):p==="arrowdown"&&((ce=h.nudge)==null||ce.call(h,0,1)))}mn(()=>window.addEventListener("keydown",s)),fn(()=>window.removeEventListener("keydown",s))}const el={class:"slide-panel"},tl={class:"slide-panel-header"},ol={class:"slide-count"},nl={class:"slides-list"},ll=["onClick","onContextmenu","onDragstart","onDrop"],il={class:"slide-number"},al=["viewBox"],sl=["x","y","width","height","fill"],rl=["d","stroke"],ul=["d","fill"],dl={class:"slide-footer"},cl={class:"slide-title"},pl=["onClick"],vl={__name:"SlidePanel",setup(h){const s=Oe(),u=Ge(),c=$(()=>u.getProject(s.projectId)),p=$(()=>pt(c.value)),f=$(()=>{var z,L;return((L=(z=c.value)==null?void 0:z.slides)==null?void 0:L.slice().sort((O,ie)=>O.order-ie.order))||[]}),b=E({show:!1,x:0,y:0,slideId:null});function v(z){s.setCurrentSlide(z)}function M(){const z=f.value.findIndex(O=>O.id===s.currentSlideId),L=u.addSlide(s.projectId,z);L&&s.setCurrentSlide(L.id)}function K(z){var ie,G;const L=f.value.findIndex(de=>de.id===z);u.deleteSlide(s.projectId,z);const O=((ie=c.value)==null?void 0:ie.slides)||[];if(O.length>0){const de=O.slice().sort((Me,he)=>Me.order-he.order),re=Math.min(L,de.length-1);s.setCurrentSlide((G=de[re])==null?void 0:G.id)}}function Q(z,L){z.preventDefault(),b.value={show:!0,x:z.clientX,y:z.clientY,slideId:L},setTimeout(()=>window.addEventListener("click",B,{once:!0}),0)}function B(){b.value.show=!1}function R(){const z=u.duplicateSlide(s.projectId,b.value.slideId);z&&s.setCurrentSlide(z.id),B()}function Y(){K(b.value.slideId),B()}function C(z,L){z.stopPropagation(),K(L)}function n(){const z=f.value.findIndex(L=>L.id===b.value.slideId);z>0&&u.reorderSlides(s.projectId,z,z-1),B()}function g(){const z=f.value.findIndex(L=>L.id===b.value.slideId);z<f.value.length-1&&u.reorderSlides(s.projectId,z,z+1),B()}let y=-1;function U(z,L){y=L,z.dataTransfer.effectAllowed="move"}function X(z,L){z.preventDefault(),y!==-1&&y!==L&&u.reorderSlides(s.projectId,y,L),y=-1}function ve(z){return z.backgroundType==="gradient"&&z.backgroundGradient?{background:z.backgroundGradient}:z.backgroundType==="image"&&z.backgroundImage?{backgroundImage:`url(${z.backgroundImage})`,backgroundSize:"cover"}:{background:z.background||"#fff"}}function le(z){return{left:z.x/p.value.width*100+"%",top:z.y/p.value.height*100+"%",width:z.width/p.value.width*100+"%",height:z.height/p.value.height*100+"%"}}function fe(z){var L,O;return{background:z.type==="shape"?(L=z.content)==null?void 0:L.fillColor:z.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:z.type==="shape"&&((O=z.content)==null?void 0:O.shapeType)==="circle"?"50%":void 0}}function ce(z){var L;return On(z.content||{},z.width||420,z.height||280,((L=c.value)==null?void 0:L.theme)||{})}return(z,L)=>(l(),i("div",el,[e("div",tl,[L[2]||(L[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",ol,w(f.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:M,"data-tooltip":"Add slide","aria-label":"Add slide"},[...L[1]||(L[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",nl,[(l(!0),i(V,null,te(f.value,(O,ie)=>(l(),i("div",{key:O.id,class:H(["slide-thumb-item",x(s).currentSlideId===O.id&&"active"]),draggable:"true",onClick:G=>v(O.id),onContextmenu:G=>Q(G,O.id),onDragstart:G=>U(G,ie),onDragover:L[0]||(L[0]=Ae(()=>{},["prevent"])),onDrop:G=>X(G,ie)},[e("div",il,w(ie+1),1),e("div",{class:"slide-thumb",style:se(ve(O))},[(l(!0),i(V,null,te(O.elements.slice(0,6),G=>{var de;return l(),i("div",{key:G.id,class:"mini-element-frame",style:se(le(G))},[G.type==="chart"?(l(),i("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${G.width||420} ${G.height||280}`,preserveAspectRatio:"none"},[ce(G).type==="bar"?(l(!0),i(V,{key:0},te(ce(G).cartesian.bars,re=>(l(),i("rect",{key:`mini-bar-${re.id}`,x:re.x,y:re.y,width:re.width,height:re.height,fill:re.color,rx:"6"},null,8,sl))),128)):ce(G).type==="line"?(l(),i("path",{key:1,d:ce(G).cartesian.linePath,stroke:((de=ce(G).cartesian.points[0])==null?void 0:de.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,rl)):(l(!0),i(V,{key:2},te(ce(G).circle.slices,re=>(l(),i("path",{key:`mini-slice-${re.id}`,d:re.path,fill:re.color},null,8,ul))),128))],8,al)):(l(),i("div",{key:1,class:"mini-element",style:se(fe(G))},null,4))],4)}),128))],4),e("div",dl,[e("div",cl,w(O.title||`Slide ${ie+1}`),1),f.value.length>1?(l(),i("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:G=>C(G,O.id)},[...L[3]||(L[3]=[Re('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,pl)):T("",!0)])],42,ll))),128))]),e("button",{class:"add-slide-bottom",onClick:M},[...L[4]||(L[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),q(" Add Slide ",-1)])]),(l(),je(gn,{to:"body"},[b.value.show?(l(),i("div",{key:0,class:"context-menu",style:se({left:b.value.x+"px",top:b.value.y+"px"})},[e("button",{class:"ctx-item",onClick:R},"Duplicate"),e("button",{class:"ctx-item",onClick:n},"Move Up"),e("button",{class:"ctx-item",onClick:g},"Move Down"),L[5]||(L[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Y},"Delete Slide")],4)):T("",!0)]))]))}},ml=_e(vl,[["__scopeId","data-v-30eea542"]]),fl={class:"layer-panel"},gl={class:"layer-header panel-section"},bl={class:"panel-title",style:{"margin-bottom":"0"}},yl={class:"layer-count"},hl={key:0,class:"layers-empty"},xl={key:1,class:"layers-list"},wl=["onClick"],kl={class:"layer-type-icon"},Cl={class:"layer-name"},Sl={class:"layer-actions"},$l=["onClick","data-tooltip"],Il={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Al={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ml=["onClick","data-tooltip"],El={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Pl={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},zl=["onClick"],Nl=["onClick"],Tl=["onClick"],_l={__name:"LayerPanel",setup(h){const s=Oe(),u=Ge(),c=$(()=>u.getProject(s.projectId)),p=$(()=>{var C,n;return(n=(C=c.value)==null?void 0:C.slides)==null?void 0:n.find(g=>g.id===s.currentSlideId)}),f=$(()=>{var C;return[...((C=p.value)==null?void 0:C.elements)||[]].sort((n,g)=>(g.zIndex||0)-(n.zIndex||0))});function b(C){s.selectElement(C)}function v(C){u.updateElement(s.projectId,s.currentSlideId,C.id,{visible:!C.visible})}function M(C){u.updateElement(s.projectId,s.currentSlideId,C.id,{locked:!C.locked})}function K(C){u.reorderElement(s.projectId,s.currentSlideId,C,"up")}function Q(C){u.reorderElement(s.projectId,s.currentSlideId,C,"down")}function B(C){u.deleteElement(s.projectId,s.currentSlideId,C),s.selectedElementId===C&&s.clearSelection()}function R(C){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[C]||"◆"}function Y(C){var n,g,y;return(n=C.content)!=null&&n.text?C.content.text.slice(0,24):(g=C.content)!=null&&g.label?C.content.label:(y=C.content)!=null&&y.question?C.content.question.slice(0,24):C.type.charAt(0).toUpperCase()+C.type.slice(1)}return(C,n)=>(l(),i("div",fl,[e("div",gl,[e("div",bl,[n[0]||(n[0]=q(" Layers ",-1)),e("span",yl,w(f.value.length),1)])]),f.value.length===0?(l(),i("div",hl,[...n[1]||(n[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),i("div",xl,[(l(!0),i(V,null,te(f.value,g=>(l(),i("div",{key:g.id,class:H(["layer-item",x(s).selectedElementIds.includes(g.id)&&"selected",g.locked&&"locked",!g.visible&&"hidden"]),onClick:y=>b(g.id)},[e("span",kl,w(R(g.type)),1),e("span",Cl,w(Y(g)),1),e("div",Sl,[e("button",{class:H(["layer-action-btn",{active:g.visible}]),onClick:Ae(y=>v(g),["stop"]),"data-tooltip":g.visible?"Hide":"Show"},[g.visible?(l(),i("svg",Il,[...n[2]||(n[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),i("svg",Al,[...n[3]||(n[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,$l),e("button",{class:H(["layer-action-btn",{active:g.locked}]),onClick:Ae(y=>M(g),["stop"]),"data-tooltip":g.locked?"Unlock":"Lock"},[g.locked?(l(),i("svg",El,[...n[4]||(n[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),i("svg",Pl,[...n[5]||(n[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,Ml),e("button",{class:"layer-action-btn",onClick:Ae(y=>K(g.id),["stop"]),"data-tooltip":"Move up"},[...n[6]||(n[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,zl),e("button",{class:"layer-action-btn",onClick:Ae(y=>Q(g.id),["stop"]),"data-tooltip":"Move down"},[...n[7]||(n[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Nl),e("button",{class:"layer-action-btn danger",onClick:Ae(y=>B(g.id),["stop"]),"data-tooltip":"Delete"},[...n[8]||(n[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Tl)])],10,wl))),128))]))]))}},Ll=_e(_l,[["__scopeId","data-v-7407acd8"]]),jl={class:"panel-section"},Bl={class:"preset-toolbar"},Dl=["value"],ql=["value"],Rl=["value"],Fl={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},Ul=["onClick"],Vl={class:"preset-meta-chip muted"},Ol={key:1,class:"import-review"},Gl={class:"motion-scrubber-header"},Wl={class:"preset-toolbar compact"},Hl=["value"],Ql=["value"],Yl={class:"import-list"},Jl=["onUpdate:modelValue"],Kl={class:"import-item-title"},Xl={class:"preset-meta-chip"},Zl={key:0,class:"preset-meta-chip muted"},ei={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(h,{emit:s}){const u=s;return(c,p)=>(l(),i("div",jl,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",Bl,[e("input",{value:h.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=f=>u("update:searchQuery",f.target.value))},null,40,Dl),e("select",{value:h.categoryFilter,class:"select",onChange:p[1]||(p[1]=f=>u("update:categoryFilter",f.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),i(V,null,te(h.availableCategories,f=>(l(),i("option",{key:`library-${f}`,value:f},w(f),9,Rl))),128))],40,ql),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=f=>u("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=f=>u("export-presets"))},"Export")]),h.recentPresets.length?(l(),i("div",Fl,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),i(V,null,te(h.recentPresets,f=>(l(),i("div",{class:"preset-item",key:`recent-${f.id}`},[e("button",{type:"button",class:"preset-chip",onClick:b=>u("apply-preset",f)},w(f.name),9,Ul),e("span",Vl,"Used "+w(f.usageCount)+"x",1)]))),128))])):T("",!0),h.pendingImportedPresets.length?(l(),i("div",Ol,[e("div",Gl,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=f=>u("clear-imports"))},"Discard")]),e("div",Wl,[e("select",{value:h.importScopeFilter,class:"select",onChange:p[5]||(p[5]=f=>u("update:importScopeFilter",f.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Hl),e("select",{value:h.importConflictMode,class:"select",onChange:p[6]||(p[6]=f=>u("update:importConflictMode",f.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Ql),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=f=>u("apply-imports"))},"Merge Selected")]),e("div",Yl,[(l(!0),i(V,null,te(h.filteredPendingImports,f=>(l(),i("label",{key:`pending-${f.id}`,class:"import-item"},[ee(e("input",{"onUpdate:modelValue":b=>f.selected=b,type:"checkbox"},null,8,Jl),[[ft,f.selected]]),e("span",Kl,w(f.name),1),e("span",Xl,w(f.scope),1),f.category?(l(),i("span",Zl,w(f.category),1)):T("",!0)]))),128))])])):T("",!0)]))}},ti=_e(ei,[["__scopeId","data-v-61f99273"]]),oi={class:"properties-panel"},ni={key:1,class:"panel-section"},li={class:"field-hint"},ii={class:"motion-scrubber-shell"},ai={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},si=["onClick"],ri={class:"motion-preview"},ui={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},di={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},ci={class:"motion-card-label"},pi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},vi={class:"form-group"},mi={class:"form-group"},fi={class:"form-group",style:{"margin-top":"var(--space-3)"}},gi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},bi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},yi={key:0,class:"preset-list"},hi=["onDragstart","onDragenter","onDrop"],xi=["onClick"],wi={key:0,class:"preset-meta-chip"},ki=["onClick"],Ci=["onClick"],Si=["onClick"],$i={key:1,class:"preset-row preset-edit-row"},Ii=["onClick"],Ai={key:1,class:"field-hint"},Mi={key:2,class:"panel-section"},Ei={class:"slide-settings-tabs"},Pi={key:0,class:"slide-settings-pane"},zi={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ni={class:"form-group"},Ti={class:"bg-type-tabs"},_i=["onClick"],Li={key:0,class:"color-row"},ji=["value"],Bi=["value"],Di={class:"slide-settings-subsection"},qi={class:"canvas-size-grid"},Ri=["onClick"],Fi={class:"canvas-size-icon-shell"},Ui={class:"canvas-size-name"},Vi={class:"canvas-size-ratio"},Oi={class:"canvas-custom-card"},Gi={class:"canvas-custom-header"},Wi={class:"field-hint"},Hi={class:"canvas-custom-inputs"},Qi={class:"form-group"},Yi={class:"canvas-size-input-wrap"},Ji=["value"],Ki={class:"form-group"},Xi={class:"canvas-size-input-wrap"},Zi=["value"],ea={class:"check-row canvas-size-lock"},ta={class:"slide-settings-subsection"},oa={key:1,class:"slide-settings-pane"},na=["value"],la={class:"form-group",style:{"margin-top":"var(--space-3)"}},ia=["value"],aa={class:"check-row"},sa=["checked"],ra={key:2,class:"slide-settings-pane"},ua={class:"check-row"},da=["checked"],ca={class:"check-row"},pa=["checked"],va={class:"check-row"},ma=["checked"],fa={class:"check-row"},ga=["checked"],ba={class:"check-row"},ya=["checked"],ha={class:"panel-section"},xa={class:"panel-title"},wa={class:"element-type-badge"},ka={class:"geo-grid"},Ca={class:"form-group"},Sa=["value"],$a={class:"form-group"},Ia=["value"],Aa={class:"form-group"},Ma=["value"],Ea={class:"form-group"},Pa=["value"],za={class:"form-group"},Na=["value"],Ta={class:"form-group"},_a=["value"],La={class:"panel-section"},ja={class:"motion-scrubber-shell"},Ba={class:"motion-card-grid"},Da=["onClick"],qa={class:"motion-preview"},Ra={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Fa={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Ua={class:"motion-card-label"},Va={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Oa={class:"form-group"},Ga=["value"],Wa={class:"form-group"},Ha=["value"],Qa={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ya={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Ja={key:0,class:"preset-list"},Ka=["onDragstart","onDragenter","onDrop"],Xa=["onClick"],Za={key:0,class:"preset-meta-chip"},es=["onClick"],ts=["onClick"],os=["onClick"],ns={key:1,class:"preset-row preset-edit-row"},ls=["onClick"],is={key:1,class:"field-hint"},as={key:0,class:"panel-section"},ss={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rs=["value"],us={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},ds={class:"form-group"},cs=["value"],ps={class:"form-group"},vs=["value"],ms={class:"form-group",style:{"margin-top":"var(--space-3)"}},fs=["value"],gs=["value"],bs={class:"form-group",style:{"margin-top":"var(--space-3)"}},ys={class:"align-btns"},hs=["onClick"],xs={class:"form-group",style:{"margin-top":"var(--space-3)"}},ws={class:"style-btns"},ks={class:"form-group",style:{"margin-top":"var(--space-3)"}},Cs={class:"color-row"},Ss=["value"],$s=["value"],Is={class:"form-group",style:{"margin-top":"var(--space-3)"}},As=["value"],Ms={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Es={class:"form-group"},Ps=["value"],zs={class:"form-group"},Ns=["value"],Ts={key:1,class:"panel-section"},_s={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ls=["value"],js={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Bs=["value"],Ds={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qs=["value"],Rs={class:"form-group"},Fs=["value"],Us={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Vs={class:"form-group"},Os=["value"],Gs={class:"form-group"},Ws=["value"],Hs={key:2,class:"panel-section"},Qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ys=["value"],Js={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ks={class:"color-row"},Xs=["value"],Zs=["value"],er={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},tr={class:"color-row"},or=["value"],nr=["value"],lr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ir=["value"],ar={class:"form-group"},sr=["value"],rr={class:"form-group",style:{"margin-top":"var(--space-3)"}},ur=["value"],dr={key:3,class:"panel-section"},cr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pr=["value"],vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},mr=["value"],fr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gr=["value"],br={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},yr={class:"chart-data-actions"},hr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xr=["value","placeholder"],wr={class:"chart-palette-preview"},kr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Cr={class:"form-group"},Sr=["value"],$r={class:"form-group"},Ir=["value"],Ar={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Mr={class:"form-group"},Er=["value"],Pr={class:"form-group"},zr=["value"],Nr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Tr={class:"form-group"},_r=["value"],Lr={key:0,class:"form-group"},jr=["value"],Br={key:1,class:"form-group"},Dr=["value"],qr={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Rr={class:"form-group"},Fr=["value"],Ur={class:"check-row",style:{"margin-top":"20px"}},Vr=["checked"],Or={class:"check-row"},Gr=["checked"],Wr={key:1,class:"check-row"},Hr=["checked"],Qr={class:"check-row"},Yr=["checked"],Jr={key:4,class:"panel-section"},Kr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xr=["value"],Zr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},eu=["value"],tu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ou=["value"],nu={key:0,class:"form-group"},lu=["value"],iu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},au={class:"form-group"},su=["value"],ru={class:"form-group"},uu=["value"],du={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},cu={class:"form-group"},pu=["value"],vu={class:"form-group"},mu=["value"],fu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},gu={class:"form-group"},bu=["value"],yu={class:"form-group"},hu=["value"],xu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},wu={class:"form-group"},ku=["value"],Cu=["value"],Su={class:"form-group"},$u=["value"],Iu={key:5,class:"panel-section"},Au={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mu=["value"],Eu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pu={class:"color-row"},zu=["value"],Nu=["value"],Tu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},_u={class:"form-group"},Lu=["value"],ju={class:"form-group"},Bu=["value"],Du={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qu=["value"],Ru={class:"form-group"},Fu=["value"],Uu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Vu={class:"form-group"},Ou=["value"],Gu={class:"form-group"},Wu=["value"],Hu={key:6,class:"panel-section"},Qu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Yu=["value"],Ju={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ku=["value"],Xu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Zu=["value"],ed={class:"check-row"},td=["checked"],od={class:"check-row"},nd=["checked"],ld={class:"check-row"},id=["checked"],ad={class:"check-row"},sd=["checked"],rd={key:7,class:"panel-section"},ud={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},dd=["value"],cd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pd=["value"],vd={class:"check-row"},md=["checked"],fd={class:"check-row"},gd=["checked"],bd={class:"check-row"},yd=["checked"],hd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},xd={class:"form-group"},wd=["value"],kd={class:"form-group"},Cd=["value"],Sd={class:"form-group",style:{"margin-top":"var(--space-3)"}},$d=["value"],Id={key:8,class:"panel-section"},Ad={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Md=["value"],Ed={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pd=["value"],zd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Nd=["value"],Td={class:"form-group"},_d=["value"],Ld={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},jd={class:"form-group"},Bd=["value"],Dd={class:"form-group"},qd=["value"],Rd={class:"form-group",style:{"margin-top":"var(--space-3)"}},Fd=["value"],Ud={class:"panel-section"},Vd={class:"actions-list"},Od={__name:"PropertiesPanel",setup(h){const s=Oe(),u=Ge(),c=$(()=>u.getProject(s.projectId)),p=$(()=>{var r,t;return(t=(r=c.value)==null?void 0:r.slides)==null?void 0:t.find(A=>A.id===s.currentSlideId)}),f=$(()=>{var r;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((r=c.value)==null?void 0:r.settings)||{}}}),b=$(()=>pt(f.value)),v=$(()=>bn(f.value)),M=$(()=>yn(b.value.width,b.value.height)),K=E(!0),Q=E("canvas"),B=$(()=>Array.isArray(f.value.motionPresets)?f.value.motionPresets:[]),R=$(()=>B.value.filter(r=>r.scope!=="group")),Y=$(()=>B.value.filter(r=>r.scope==="group")),C=$(()=>{var t;const r=new Set(s.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(A=>r.has(A.id))}),n=$(()=>{var r,t;return s.selectedElementId?(t=(r=p.value)==null?void 0:r.elements)==null?void 0:t.find(A=>A.id===s.selectedElementId):null}),g=$(()=>s.multiSelection||!!n.value),y=$(()=>s.multiSelection?"group":"single"),U=$(()=>{var t,A;const r=(A=(t=n.value)==null?void 0:t.animations)==null?void 0:A[0];return{type:(r==null?void 0:r.type)||"auto",delay:Number((r==null?void 0:r.delay)||0),duration:Number((r==null?void 0:r.duration)||.64)}}),X=$(()=>{var Ce,ze;const r=C.value.map(Ee=>{var Ke;return((Ke=Ee.animations)==null?void 0:Ke[0])||null}),t=((Ce=r[0])==null?void 0:Ce.type)||"auto",A=Number(((ze=r[0])==null?void 0:ze.duration)||.64),J=r.every(Ee=>((Ee==null?void 0:Ee.type)||"auto")===t),ke=r.every(Ee=>Number((Ee==null?void 0:Ee.duration)||.64)===A);return{type:J?t:"mixed",duration:ke?A:.64}}),ve=E(0),le=E(0),fe=E(""),ce=E(""),z=E(""),L=E(""),O=E(""),ie=E(""),G=E(""),de=E(""),re=E(""),Me=E(""),he=E(""),ue=E(""),pe=E(""),j=E("all"),Z=E(null),ae=E(null),oe=E([]),ge=E("all"),xe=E("replace"),Se=E(""),Pe=E({});Fe(n,r=>{r?Pe.value=JSON.parse(JSON.stringify(r)):Pe.value={},(r==null?void 0:r.type)==="chart"&&(Se.value="")},{immediate:!0,deep:!0});function N(r){n.value&&u.updateElement(s.projectId,s.currentSlideId,n.value.id,r)}function d(r){if(!n.value)return;const t={...n.value.content,...r};N({content:t})}function P(r,t){const A=parseFloat(t);isNaN(A)||N({[r]:A})}const be=E({});Fe(p,r=>{r&&(be.value={...r})},{immediate:!0});function $e(r){p.value&&u.updateSlide(s.projectId,p.value.id,r)}function we(r){if(!c.value)return;const t={...f.value,...r};u.updateProject(s.projectId,{settings:{...t,...Wn(t)}})}function Ue(r){we({slideWidth:r.width,slideHeight:r.height})}function ye(r,t){const A=Math.round(Number(t)||0);if(!A)return;const J={[`slide${r==="width"?"Width":"Height"}`]:A};if(K.value){const ke=b.value.width,Ce=b.value.height;r==="width"?J.slideHeight=Math.round(A*(Ce/ke)):J.slideWidth=Math.round(A*(ke/Ce))}we(J)}const Le=$(()=>{var r;return hn(((r=c.value)==null?void 0:r.theme)||{})}),Ve=$(()=>{var t,A;if(((t=n.value)==null?void 0:t.type)!=="chart")return[];const r=((A=n.value.content)==null?void 0:A.paletteText)||Le.value.paletteText;return Yn(r)});function We(r){const t=Hn(r,{fallbackToDefault:!1});return t.length?Qn(t):""}function Ze(r){var A;if(((A=n.value)==null?void 0:A.type)!=="chart")return;const t=We(r);t&&(d({dataText:t}),Se.value="")}async function ut(r){var J;const t=r.target,A=(J=t==null?void 0:t.files)==null?void 0:J[0];if(A)try{const ke=await A.text();Ze(ke)}finally{t&&(t.value="")}}function I(){var r;(r=ae.value)==null||r.click()}function a(){var t,A;if(((t=n.value)==null?void 0:t.type)!=="chart")return;const r=We(((A=n.value.content)==null?void 0:A.dataText)||"");r&&d({dataText:r})}function _(){var r;((r=n.value)==null?void 0:r.type)==="chart"&&d({...Le.value})}function ne(){var r;((r=n.value)==null?void 0:r.type)==="chart"&&d({paletteText:Le.value.paletteText})}function m(r){return String(r||"").split(",").map(t=>t.trim()).filter(Boolean)}function S(r){const t=(r==null?void 0:r.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((r==null?void 0:r.name)||"Imported Preset").trim()||"Imported Preset",category:String((r==null?void 0:r.category)||"").trim(),tags:Array.isArray(r==null?void 0:r.tags)?r.tags.map(A=>String(A).trim()).filter(Boolean):m(r==null?void 0:r.tags),type:String((r==null?void 0:r.type)||"auto"),delay:Math.max(0,Number(r==null?void 0:r.delay)||0),duration:Math.max(.1,Number(r==null?void 0:r.duration)||.72),stepDelay:Math.max(0,Number(r==null?void 0:r.stepDelay)||0)}}const D=$(()=>[...new Set(B.value.map(t=>t.category).filter(Boolean))].sort((t,A)=>t.localeCompare(A))),W=$(()=>[...B.value].filter(r=>Number(r.usageCount||0)>0).sort((r,t)=>{const A=Number(t.lastUsedAt||0)-Number(r.lastUsedAt||0);return A!==0?A:Number(t.usageCount||0)-Number(r.usageCount||0)}).slice(0,6)),k=$(()=>ge.value==="all"?oe.value:oe.value.filter(r=>r.scope===ge.value));function Ie(r){const t=pe.value.trim().toLowerCase(),A=j.value;return A==="all"||(r.category||"")===A?t?[r.name,r.category,...r.tags||[]].filter(Boolean).some(ke=>String(ke).toLowerCase().includes(t)):!0:!1}const Be=$(()=>R.value.filter(Ie)),Te=$(()=>Y.value.filter(Ie)),et=$(()=>W.value.filter(r=>y.value==="group"?r.scope==="group":r.scope!=="group"));function Ne(r){const t=String(r.name||"").trim();if(!t)return;const A=B.value.findIndex(Ce=>Ce.scope===r.scope&&Ce.name.toLowerCase()===t.toLowerCase()),J={...r,id:A>=0?B.value[A].id:`motion-${Date.now()}`,name:t,category:String(r.category||"").trim(),tags:Array.isArray(r.tags)?r.tags:m(r.tags)},ke=[...B.value];A>=0?ke.splice(A,1,J):ke.push(J),we({motionPresets:ke})}function tt(r,t){const A=B.value.map(J=>J.id===r?{...J,...t}:J);we({motionPresets:A})}function De(r){const t=B.value.find(A=>A.id===r);t&&tt(r,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function He(r,t){const A=B.value.filter(ze=>ze.scope===r).map(ze=>ze.name.toLowerCase()),J=String(t||"Preset").trim()||"Preset";if(!A.includes(J.toLowerCase()))return J;let ke=2,Ce=`${J} Copy`;for(;A.includes(Ce.toLowerCase());)Ce=`${J} Copy ${ke}`,ke+=1;return Ce}function Qe(r){we({motionPresets:B.value.filter(t=>t.id!==r)}),z.value===r&&(z.value="",L.value="")}function ot(r){Ne({...r,id:void 0,name:He(r.scope,r.name)})}function nt(r){z.value=r.id,L.value=r.name,O.value=r.category||"",ie.value=Array.isArray(r.tags)?r.tags.join(", "):""}function lt(){z.value="",L.value="",O.value="",ie.value=""}function bt(r){const t=String(L.value||"").trim();t&&(tt(r,{name:t,category:String(O.value||"").trim(),tags:m(ie.value)}),lt())}function wn(r,t,A){if(!t||!A||t===A)return;const J=B.value.filter(qe=>qe.scope===r),ke=J.findIndex(qe=>qe.id===t),Ce=J.findIndex(qe=>qe.id===A);if(ke===-1||Ce===-1)return;const ze=[...J],[Ee]=ze.splice(ke,1);ze.splice(Ce,0,Ee);const Ke=B.value.filter(qe=>qe.scope!==r),st=[];B.value.forEach(qe=>{if(qe.scope===r){ze.length&&st.push(ze.shift());return}const dt=Ke.shift();dt&&st.push(dt)}),we({motionPresets:st})}function yt(r){G.value=r.id,de.value=r.id}function ht(r){G.value&&(de.value=r.id)}function xt(r){G.value&&(wn(r.scope,G.value,r.id),G.value="",de.value="")}function wt(){G.value="",de.value=""}function kt(){ve.value+=1}function Ct(){le.value+=1}function St(r,t){$e({[r]:t})}function kn(r){const t=Math.max(0,Number(r)||0);$e({duration:t})}function vt(r){var J;if(!n.value)return;const A={...((J=n.value.animations)==null?void 0:J[0])||{type:"auto",delay:0,duration:.64},...r};if(A.type==="auto"){N({animations:[]});return}N({animations:[{type:A.type||"none",delay:Math.max(0,Number(A.delay)||0),duration:Math.max(.1,Number(A.duration)||.64)}]})}const Ye=E("stagger-in"),it=E(0),at=E(.12),Je=E(.72);Fe(C,r=>{r.length&&(Ye.value=X.value.type==="mixed"?"stagger-in":X.value.type,Je.value=X.value.duration)},{immediate:!0,deep:!0});function Cn(){if(!C.value.length)return;[...C.value].sort((t,A)=>(t.y||0)!==(A.y||0)?(t.y||0)-(A.y||0):(t.x||0)-(A.x||0)).forEach((t,A)=>{if(Ye.value==="auto"){u.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[]});return}u.updateElement(s.projectId,s.currentSlideId,t.id,{animations:[{type:Ye.value,delay:Math.max(0,Number(it.value)||0)+A*Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(Je.value)||.72)}]})})}function $t(r){Ye.value=r.type||"stagger-in",it.value=Number(r.delay||0),at.value=Number(r.stepDelay||0),Je.value=Number(r.duration||.72),De(r.id),Ct()}function Sn(){Ne({scope:"group",name:ce.value,category:he.value,tags:m(ue.value),type:Ye.value,delay:Math.max(0,Number(it.value)||0),stepDelay:Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(Je.value)||.72)}),ce.value="",he.value="",ue.value=""}function It(r){vt({type:r.type||"auto",delay:Number(r.delay||0),duration:Number(r.duration||.72)}),De(r.id),kt()}function $n(){Ne({scope:"single",name:fe.value,category:re.value,tags:m(Me.value),type:U.value.type,delay:Math.max(0,Number(U.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(U.value.duration)||.72)}),fe.value="",re.value="",Me.value=""}function In(){var r;(r=Z.value)==null||r.click()}async function An(r){var J;const t=r.target,A=(J=t==null?void 0:t.files)==null?void 0:J[0];if(A)try{const ke=await A.text(),Ce=JSON.parse(ke),ze=Array.isArray(Ce)?Ce:Array.isArray(Ce.motionPresets)?Ce.motionPresets:[];if(!ze.length)return;oe.value=ze.map(Ee=>({...S(Ee),selected:!0,importName:String((Ee==null?void 0:Ee.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function At(){oe.value=[]}function Mn(){const r=oe.value.filter(A=>A.selected);if(!r.length)return;const t=[...B.value];r.forEach(A=>{const J=t.findIndex(ke=>ke.scope===A.scope&&ke.name.toLowerCase()===A.name.toLowerCase());if(J>=0){xe.value==="replace"?t.splice(J,1,{...t[J],...A,id:t[J].id}):t.push({...A,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:He(A.scope,A.name)});return}t.push(A)}),we({motionPresets:t}),At()}function En(){var Ce;if(!B.value.length)return;const r={version:1,exportedAt:new Date().toISOString(),motionPresets:B.value.map(({id:ze,...Ee})=>Ee)},t=new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),A=URL.createObjectURL(t),J=document.createElement("a"),ke=String(((Ce=c.value)==null?void 0:Ce.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";J.href=A,J.download=`${ke}-motion-presets.json`,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(A)}const Pn=$(()=>[{id:`single-${ve.value}`,delay:Math.max(0,Number(U.value.delay)||0),duration:Math.max(.1,Number(U.value.duration)||.72),type:U.value.type}]),zn=$(()=>Array.from({length:Math.min(Math.max(C.value.length,3),5)},(r,t)=>({id:`group-${le.value}-${t}`,delay:Math.max(0,Number(it.value)||0)+t*Math.max(0,Number(at.value)||0),duration:Math.max(.1,Number(Je.value)||.72),type:Ye.value}))),Mt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Et=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(r,t)=>{var A,J,ke,Ce,ze,Ee,Ke,st,qe,dt,Pt,zt,Nt,Tt,_t,Lt,jt,Bt,Dt,qt,Rt,Ft,Ut,Vt,Ot,Gt,Wt,Ht,Qt,Yt,Jt,Kt,Xt,Zt,eo,to,oo,no,lo,io,ao,so,ro,uo,co,po,vo,mo,fo,go,bo,yo,ho,xo,wo,ko,Co,So,$o,Io,Ao,Mo,Eo,Po,zo,No,To,_o,Lo,jo,Bo,Do,qo,Ro,Fo,Uo,Vo,Oo,Go,Wo,Ho,Qo,Yo,Jo,Ko,Xo,Zo,en,tn,on,nn,ln,an,sn,rn,un,dn;return l(),i("div",oi,[e("input",{ref_key:"presetImportInput",ref:Z,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:An},null,544),e("input",{ref_key:"chartImportInput",ref:ae,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:ut},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),g.value?(l(),je(ti,{key:0,"search-query":pe.value,"category-filter":j.value,"available-categories":D.value,"recent-presets":et.value,"pending-imported-presets":oe.value,"filtered-pending-imports":k.value,"import-scope-filter":ge.value,"import-conflict-mode":xe.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>pe.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>j.value=o),onTriggerImport:In,onExportPresets:En,onApplyPreset:t[2]||(t[2]=o=>y.value==="group"?$t(o):It(o)),onClearImports:At,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>ge.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>xe.value=o),onApplyImports:Mn},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):T("",!0),x(s).multiSelection?(l(),i("div",ni,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",li,w(C.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",ii,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ct},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage",key:`group-preview-${le.value}`},[(l(!0),i(V,null,te(zn.value,o=>(l(),i("span",{key:o.id,class:H(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:se({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",ai,[(l(),i(V,null,te(Mt,o=>e("button",{key:`group-${o.value}`,type:"button",class:H(["motion-card",Ye.value===o.value&&"active"]),onClick:F=>Ye.value=o.value},[e("span",ri,[e("span",{class:H(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",ui)):T("",!0),o.value==="stagger-in"?(l(),i("span",di)):T("",!0)]),e("span",ci,w(o.label),1)],10,si)),64))]),e("div",pi,[e("div",vi,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),ee(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>it.value=o),class:"input"},null,512),[[me,it.value]])]),e("div",mi,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),ee(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>at.value=o),class:"input"},null,512),[[me,at.value]])])]),e("div",fi,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),ee(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>Je.value=o),class:"input"},null,512),[[me,Je.value]])]),e("div",gi,[ee(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>ce.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[me,ce.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Sn},"Save")]),e("div",bi,[ee(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>he.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[me,he.value]]),ee(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>ue.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,ue.value]])]),Te.value.length?(l(),i("div",yi,[(l(!0),i(V,null,te(Te.value,o=>(l(),i("div",{key:o.id,class:H(["preset-item",G.value===o.id&&"dragging",de.value===o.id&&G.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:F=>yt(o),onDragenter:Ae(F=>ht(o),["prevent"]),onDragover:t[14]||(t[14]=Ae(()=>{},["prevent"])),onDrop:Ae(F=>xt(o),["prevent"]),onDragend:wt},[e("button",{type:"button",class:"preset-chip",onClick:F=>$t(o)},w(o.name),9,xi),o.category?(l(),i("span",wi,w(o.category),1)):T("",!0),(l(!0),i(V,null,te(o.tags||[],F=>(l(),i("span",{key:`${o.id}-${F}`,class:"preset-meta-chip muted"},"#"+w(F),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:F=>ot(o)},"Duplicate",8,ki),e("button",{type:"button",class:"preset-mini-btn",onClick:F=>nt(o)},"Rename",8,Ci),e("button",{type:"button",class:"preset-mini-btn danger",onClick:F=>Qe(o.id)},"Delete",8,Si),z.value===o.id?(l(),i("div",$i,[ee(e("input",{"onUpdate:modelValue":t[11]||(t[11]=F=>L.value=F),class:"input"},null,512),[[me,L.value]]),ee(e("input",{"onUpdate:modelValue":t[12]||(t[12]=F=>O.value=F),class:"input",placeholder:"Category"},null,512),[[me,O.value]]),ee(e("input",{"onUpdate:modelValue":t[13]||(t[13]=F=>ie.value=F),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,ie.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:F=>bt(o.id)},"Save",8,Ii),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:lt},"Cancel")])):T("",!0)],42,hi))),128))])):Y.value.length?(l(),i("div",Ai,"No group presets match the current search.")):T("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Cn}," Apply Sequence to Selection ")])):n.value?(l(),i(V,{key:3},[e("div",ha,[e("div",xa,[t[179]||(t[179]=q(" Position & Size ",-1)),e("span",wa,w(n.value.type),1)]),e("div",ka,[e("div",Ca,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(n.value.x),class:"input",onChange:t[39]||(t[39]=o=>P("x",o.target.value))},null,40,Sa)]),e("div",$a,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(n.value.y),class:"input",onChange:t[40]||(t[40]=o=>P("y",o.target.value))},null,40,Ia)]),e("div",Aa,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(n.value.width),class:"input",onChange:t[41]||(t[41]=o=>P("width",o.target.value))},null,40,Ma)]),e("div",Ea,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(n.value.height),class:"input",onChange:t[42]||(t[42]=o=>P("height",o.target.value))},null,40,Pa)]),e("div",za,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(n.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>P("rotation",o.target.value))},null,40,Na)]),e("div",Ta,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:n.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>P("opacity",o.target.value))},null,40,_a)])])]),e("div",La,[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",ja,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:kt},"Replay")]),(l(),i("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${ve.value}`},[(l(!0),i(V,null,te(Pn.value,o=>(l(),i("span",{key:o.id,class:H(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:se({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Ba,[(l(),i(V,null,te(Mt,o=>e("button",{key:o.value,type:"button",class:H(["motion-card",U.value.type===o.value&&"active"]),onClick:F=>vt({type:o.value})},[e("span",qa,[e("span",{class:H(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),i("span",Ra)):T("",!0),o.value==="stagger-in"?(l(),i("span",Fa)):T("",!0)]),e("span",Ua,w(o.label),1)],10,Da)),64))]),e("div",Va,[e("div",Oa,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:U.value.delay,class:"input",onChange:t[45]||(t[45]=o=>vt({delay:o.target.value}))},null,40,Ga)]),e("div",Wa,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:U.value.duration,class:"input",onChange:t[46]||(t[46]=o=>vt({duration:o.target.value}))},null,40,Ha)])]),e("div",Qa,[ee(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>fe.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[me,fe.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:$n},"Save")]),e("div",Ya,[ee(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>re.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[me,re.value]]),ee(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>Me.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,Me.value]])]),Be.value.length?(l(),i("div",Ja,[(l(!0),i(V,null,te(Be.value,o=>(l(),i("div",{key:o.id,class:H(["preset-item",G.value===o.id&&"dragging",de.value===o.id&&G.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:F=>yt(o),onDragenter:Ae(F=>ht(o),["prevent"]),onDragover:t[53]||(t[53]=Ae(()=>{},["prevent"])),onDrop:Ae(F=>xt(o),["prevent"]),onDragend:wt},[e("button",{type:"button",class:"preset-chip",onClick:F=>It(o)},w(o.name),9,Xa),o.category?(l(),i("span",Za,w(o.category),1)):T("",!0),(l(!0),i(V,null,te(o.tags||[],F=>(l(),i("span",{key:`${o.id}-${F}`,class:"preset-meta-chip muted"},"#"+w(F),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:F=>ot(o)},"Duplicate",8,es),e("button",{type:"button",class:"preset-mini-btn",onClick:F=>nt(o)},"Rename",8,ts),e("button",{type:"button",class:"preset-mini-btn danger",onClick:F=>Qe(o.id)},"Delete",8,os),z.value===o.id?(l(),i("div",ns,[ee(e("input",{"onUpdate:modelValue":t[50]||(t[50]=F=>L.value=F),class:"input"},null,512),[[me,L.value]]),ee(e("input",{"onUpdate:modelValue":t[51]||(t[51]=F=>O.value=F),class:"input",placeholder:"Category"},null,512),[[me,O.value]]),ee(e("input",{"onUpdate:modelValue":t[52]||(t[52]=F=>ie.value=F),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,ie.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:F=>bt(o.id)},"Save",8,ls),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:lt},"Cancel")])):T("",!0)],42,Ka))),128))])):R.value.length?(l(),i("div",is,"No single-element presets match the current search.")):T("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))]),["text","heading"].includes(n.value.type)?(l(),i("div",as,[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",ss,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(st=n.value.content)==null?void 0:st.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>d({text:o.target.value}))},null,40,rs)]),e("div",us,[e("div",ds,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(qe=n.value.content)==null?void 0:qe.fontSize,class:"input",onChange:t[55]||(t[55]=o=>d({fontSize:+o.target.value}))},null,40,cs)]),e("div",ps,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(dt=n.value.content)==null?void 0:dt.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>d({fontWeight:o.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,vs)])]),e("div",ms,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Pt=n.value.content)==null?void 0:Pt.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>d({fontFamily:o.target.value}))},[(l(),i(V,null,te(Et,o=>e("option",{key:o,value:o},w(o.split(",")[0]),9,gs)),64))],40,fs)]),e("div",bs,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",ys,[(l(),i(V,null,te(["left","center","right","justify"],o=>{var F;return e("button",{key:o,class:H(["align-btn",((F=n.value.content)==null?void 0:F.textAlign)===o&&"active"]),onClick:cn=>d({textAlign:o})},w(o[0].toUpperCase()),11,hs)}),64))])]),e("div",xs,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",ws,[e("button",{class:H(["style-btn",((zt=n.value.content)==null?void 0:zt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var F;return d({fontStyle:((F=n.value.content)==null?void 0:F.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:H(["style-btn",((Nt=n.value.content)==null?void 0:Nt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var F;return d({textDecoration:((F=n.value.content)==null?void 0:F.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:H(["style-btn",((Tt=n.value.content)==null?void 0:Tt.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var F;return d({textDecoration:((F=n.value.content)==null?void 0:F.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",ks,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",Cs,[e("input",{type:"color",value:((_t=n.value.content)==null?void 0:_t.color)||"#000",onInput:t[61]||(t[61]=o=>d({color:o.target.value})),class:"color-input-native"},null,40,Ss),e("input",{value:((Lt=n.value.content)==null?void 0:Lt.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>d({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,$s)])]),e("div",Is,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((jt=n.value.content)==null?void 0:jt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>d({lineHeight:+o.target.value}))},null,40,As)]),e("div",Ms,[e("div",Es,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Bt=n.value.content)==null?void 0:Bt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>d({textTransform:o.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,Ps)]),e("div",zs,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Dt=n.value.content)==null?void 0:Dt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>d({letterSpacing:+o.target.value}))},null,40,Ns)])])])):T("",!0),n.value.type==="image"?(l(),i("div",Ts,[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",_s,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(qt=n.value.content)==null?void 0:qt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>d({src:o.target.value}))},null,40,Ls)]),e("div",js,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Rt=n.value.content)==null?void 0:Rt.alt,class:"input",onInput:t[67]||(t[67]=o=>d({alt:o.target.value}))},null,40,Bs)]),e("div",Ds,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Ft=n.value.content)==null?void 0:Ft.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>d({objectFit:o.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,qs)]),e("div",Rs,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((Ut=n.value.content)==null?void 0:Ut.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>d({borderRadius:+o.target.value}))},null,40,Fs)]),e("div",Us,[e("div",Vs,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Vt=n.value.content)==null?void 0:Vt.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>d({borderWidth:+o.target.value}))},null,40,Os)]),e("div",Gs,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Ot=n.value.content)==null?void 0:Ot.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>d({borderColor:o.target.value}))},null,40,Ws)])])])):T("",!0),n.value.type==="shape"?(l(),i("div",Hs,[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Qs,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((Gt=n.value.content)==null?void 0:Gt.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>d({shapeType:o.target.value}))},[...t[215]||(t[215]=[Re('<option value="rectangle" data-v-4f48861a>Rectangle</option><option value="circle" data-v-4f48861a>Circle</option><option value="triangle" data-v-4f48861a>Triangle</option><option value="star" data-v-4f48861a>Star</option><option value="arrow" data-v-4f48861a>Arrow</option><option value="diamond" data-v-4f48861a>Diamond</option>',6)])],40,Ys)]),e("div",Js,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Ks,[e("input",{type:"color",value:((Wt=n.value.content)==null?void 0:Wt.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>d({fillColor:o.target.value})),class:"color-input-native"},null,40,Xs),e("input",{value:((Ht=n.value.content)==null?void 0:Ht.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>d({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Zs)])]),e("div",er,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",tr,[e("input",{type:"color",value:((Qt=n.value.content)==null?void 0:Qt.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>d({borderColor:o.target.value})),class:"color-input-native"},null,40,or),e("input",{value:((Yt=n.value.content)==null?void 0:Yt.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>d({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,nr)])]),e("div",lr,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Jt=n.value.content)==null?void 0:Jt.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>d({borderWidth:+o.target.value}))},null,40,ir)]),e("div",ar,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Kt=n.value.content)==null?void 0:Kt.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>d({borderRadius:+o.target.value}))},null,40,sr)]),e("div",rr,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((Xt=n.value.content)==null?void 0:Xt.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>d({opacity:+o.target.value}))},null,40,ur)])])):T("",!0),n.value.type==="chart"?(l(),i("div",dr,[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",cr,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((Zt=n.value.content)==null?void 0:Zt.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=o=>d({chartType:o.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,pr)]),e("div",vr,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((eo=n.value.content)==null?void 0:eo.title)||"",class:"input",onInput:t[81]||(t[81]=o=>d({title:o.target.value}))},null,40,mr)]),e("div",fr,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((to=n.value.content)==null?void 0:to.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=o=>d({dataText:o.target.value}))},null,40,gr),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:a},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:I},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",br,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),ee(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=o=>Se.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[me,Se.value]]),e("div",yr,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=o=>Ze(Se.value))},"Convert pasted data")])]),e("div",hr,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((oo=n.value.content)==null?void 0:oo.paletteText)||"",class:"input",placeholder:Le.value.paletteText,onInput:t[85]||(t[85]=o=>d({paletteText:o.target.value}))},null,40,xr),e("div",wr,[(l(!0),i(V,null,te(Ve.value,(o,F)=>(l(),i("span",{key:`chart-palette-${F}`,class:"chart-palette-swatch",style:se({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ne},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:_},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",kr,[e("div",Cr,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((no=n.value.content)==null?void 0:no.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=o=>d({backgroundColor:o.target.value}))},null,40,Sr)]),e("div",$r,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((lo=n.value.content)==null?void 0:lo.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=o=>d({textColor:o.target.value}))},null,40,Ir)])]),e("div",Ar,[e("div",Mr,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((io=n.value.content)==null?void 0:io.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=o=>d({gridColor:o.target.value}))},null,40,Er)]),e("div",Pr,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((ao=n.value.content)==null?void 0:ao.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=o=>d({borderColor:o.target.value}))},null,40,zr)])]),e("div",Nr,[e("div",Tr,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((so=n.value.content)==null?void 0:so.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=o=>d({borderWidth:+o.target.value}))},null,40,_r)]),((ro=n.value.content)==null?void 0:ro.chartType)!=="circle"?(l(),i("div",Lr,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((uo=n.value.content)==null?void 0:uo.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=o=>d({maxValue:o.target.value}))},null,40,jr)])):(l(),i("div",Br,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((co=n.value.content)==null?void 0:co.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=o=>d({innerRadius:+o.target.value}))},null,40,Dr)]))]),((po=n.value.content)==null?void 0:po.chartType)==="line"?(l(),i("div",qr,[e("div",Rr,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((vo=n.value.content)==null?void 0:vo.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=o=>d({strokeWidth:+o.target.value}))},null,40,Fr)]),e("label",Ur,[e("input",{type:"checkbox",checked:!!((mo=n.value.content)!=null&&mo.showArea),onChange:t[94]||(t[94]=o=>d({showArea:o.target.checked}))},null,40,Vr),t[239]||(t[239]=q(" Show area fill ",-1))])])):T("",!0),e("label",Or,[e("input",{type:"checkbox",checked:((fo=n.value.content)==null?void 0:fo.showLegend)!==!1,onChange:t[95]||(t[95]=o=>d({showLegend:o.target.checked}))},null,40,Gr),t[240]||(t[240]=q(" Show legend ",-1))]),((go=n.value.content)==null?void 0:go.chartType)!=="circle"?(l(),i("label",Wr,[e("input",{type:"checkbox",checked:((bo=n.value.content)==null?void 0:bo.showGrid)!==!1,onChange:t[96]||(t[96]=o=>d({showGrid:o.target.checked}))},null,40,Hr),t[241]||(t[241]=q(" Show grid lines ",-1))])):T("",!0),e("label",Qr,[e("input",{type:"checkbox",checked:((yo=n.value.content)==null?void 0:yo.showValues)!==!1,onChange:t[97]||(t[97]=o=>d({showValues:o.target.checked}))},null,40,Yr),t[242]||(t[242]=q(" Show values ",-1))])])):T("",!0),n.value.type==="button"?(l(),i("div",Jr,[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Kr,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(ho=n.value.content)==null?void 0:ho.label,class:"input",onInput:t[98]||(t[98]=o=>d({label:o.target.value}))},null,40,Xr)]),e("div",Zr,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((xo=n.value.content)==null?void 0:xo.variant)||"primary",class:"select",onChange:t[99]||(t[99]=o=>d({variant:o.target.value}))},[...t[245]||(t[245]=[Re('<option value="primary" data-v-4f48861a>Primary</option><option value="secondary" data-v-4f48861a>Secondary</option><option value="outline" data-v-4f48861a>Outline</option><option value="ghost" data-v-4f48861a>Ghost</option><option value="danger" data-v-4f48861a>Danger</option>',5)])],40,eu)]),e("div",tu,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((wo=n.value.content)==null?void 0:wo.action)||"none",class:"select",onChange:t[100]||(t[100]=o=>d({action:o.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,ou)]),(ko=n.value.content)!=null&&ko.action&&n.value.content.action!=="none"?(l(),i("div",nu,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Co=n.value.content)==null?void 0:Co.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=o=>d({target:o.target.value}))},null,40,lu)])):T("",!0),e("div",iu,[e("div",au,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((So=n.value.content)==null?void 0:So.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=o=>d({bgColor:o.target.value}))},null,40,su)]),e("div",ru,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:(($o=n.value.content)==null?void 0:$o.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=o=>d({textColor:o.target.value}))},null,40,uu)])]),e("div",du,[e("div",cu,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Io=n.value.content)==null?void 0:Io.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=o=>d({borderColor:o.target.value}))},null,40,pu)]),e("div",vu,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Ao=n.value.content)==null?void 0:Ao.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=o=>d({borderRadius:+o.target.value}))},null,40,mu)])]),e("div",fu,[e("div",gu,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Mo=n.value.content)==null?void 0:Mo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=o=>d({fontSize:+o.target.value}))},null,40,bu)]),e("div",yu,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Eo=n.value.content)==null?void 0:Eo.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=o=>d({fontWeight:+o.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,hu)])]),e("div",xu,[e("div",wu,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Po=n.value.content)==null?void 0:Po.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=o=>d({fontFamily:o.target.value}))},[(l(),i(V,null,te(Et,o=>e("option",{key:`btn-${o}`,value:o},w(o.split(",")[0]),9,Cu)),64))],40,ku)]),e("div",Su,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((zo=n.value.content)==null?void 0:zo.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=o=>d({letterSpacing:+o.target.value}))},null,40,$u)])])])):T("",!0),n.value.type==="hotspot"?(l(),i("div",Iu,[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Au,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((No=n.value.content)==null?void 0:No.icon)||"?",class:"select",onChange:t[110]||(t[110]=o=>d({icon:o.target.value}))},[...t[260]||(t[260]=[Re('<option value="?" data-v-4f48861a>? (Info)</option><option value="!" data-v-4f48861a>! (Alert)</option><option value="+" data-v-4f48861a>+ (Plus)</option><option value="i" data-v-4f48861a>i (Info)</option><option value="✦" data-v-4f48861a>✦ (Star)</option>',5)])],40,Mu)]),e("div",Eu,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",Pu,[e("input",{type:"color",value:((To=n.value.content)==null?void 0:To.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=o=>d({bgColor:o.target.value})),class:"color-input-native"},null,40,zu),e("input",{value:((_o=n.value.content)==null?void 0:_o.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=o=>d({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Nu)])]),e("div",Tu,[e("div",_u,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Lo=n.value.content)==null?void 0:Lo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=o=>d({iconColor:o.target.value}))},null,40,Lu)]),e("div",ju,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((jo=n.value.content)==null?void 0:jo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=o=>d({borderRadius:+o.target.value}))},null,40,Bu)])]),e("div",Du,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Bo=n.value.content)==null?void 0:Bo.popupTitle,class:"input",onInput:t[115]||(t[115]=o=>d({popupTitle:o.target.value}))},null,40,qu)]),e("div",Ru,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Do=n.value.content)==null?void 0:Do.popupContent,class:"textarea",onInput:t[116]||(t[116]=o=>d({popupContent:o.target.value}))},null,40,Fu)]),e("div",Uu,[e("div",Vu,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((qo=n.value.content)==null?void 0:qo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>d({popupBgColor:o.target.value}))},null,40,Ou)]),e("div",Gu,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Ro=n.value.content)==null?void 0:Ro.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>d({popupTextColor:o.target.value}))},null,40,Wu)])])])):T("",!0),n.value.type==="video"?(l(),i("div",Hu,[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",Qu,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(Fo=n.value.content)==null?void 0:Fo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=o=>d({src:o.target.value}))},null,40,Yu)]),e("div",Ju,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(Uo=n.value.content)==null?void 0:Uo.poster,class:"input",onInput:t[120]||(t[120]=o=>d({poster:o.target.value}))},null,40,Ku)]),e("div",Xu,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Vo=n.value.content)==null?void 0:Vo.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=o=>d({objectFit:o.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Zu)]),e("label",ed,[e("input",{type:"checkbox",checked:(Oo=n.value.content)==null?void 0:Oo.autoplay,onChange:t[122]||(t[122]=o=>d({autoplay:o.target.checked}))},null,40,td),t[274]||(t[274]=q(" Autoplay ",-1))]),e("label",od,[e("input",{type:"checkbox",checked:((Go=n.value.content)==null?void 0:Go.controls)??!0,onChange:t[123]||(t[123]=o=>d({controls:o.target.checked}))},null,40,nd),t[275]||(t[275]=q(" Show Controls ",-1))]),e("label",ld,[e("input",{type:"checkbox",checked:(Wo=n.value.content)==null?void 0:Wo.loop,onChange:t[124]||(t[124]=o=>d({loop:o.target.checked}))},null,40,id),t[276]||(t[276]=q(" Loop ",-1))]),e("label",ad,[e("input",{type:"checkbox",checked:(Ho=n.value.content)==null?void 0:Ho.muted,onChange:t[125]||(t[125]=o=>d({muted:o.target.checked}))},null,40,sd),t[277]||(t[277]=q(" Muted ",-1))])])):T("",!0),n.value.type==="audio"?(l(),i("div",rd,[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",ud,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(Qo=n.value.content)==null?void 0:Qo.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=o=>d({src:o.target.value}))},null,40,dd)]),e("div",cd,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Yo=n.value.content)==null?void 0:Yo.label,class:"input",onInput:t[127]||(t[127]=o=>d({label:o.target.value}))},null,40,pd)]),e("label",vd,[e("input",{type:"checkbox",checked:(Jo=n.value.content)==null?void 0:Jo.autoplay,onChange:t[128]||(t[128]=o=>d({autoplay:o.target.checked}))},null,40,md),t[281]||(t[281]=q(" Autoplay ",-1))]),e("label",fd,[e("input",{type:"checkbox",checked:((Ko=n.value.content)==null?void 0:Ko.controls)!==!1,onChange:t[129]||(t[129]=o=>d({controls:o.target.checked}))},null,40,gd),t[282]||(t[282]=q(" Show Controls ",-1))]),e("label",bd,[e("input",{type:"checkbox",checked:(Xo=n.value.content)==null?void 0:Xo.loop,onChange:t[130]||(t[130]=o=>d({loop:o.target.checked}))},null,40,yd),t[283]||(t[283]=q(" Loop ",-1))]),e("div",hd,[e("div",xd,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Zo=n.value.content)==null?void 0:Zo.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=o=>d({accentColor:o.target.value}))},null,40,wd)]),e("div",kd,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((en=n.value.content)==null?void 0:en.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=o=>d({textColor:o.target.value}))},null,40,Cd)])]),e("div",Sd,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((tn=n.value.content)==null?void 0:tn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=o=>d({bgColor:o.target.value}))},null,40,$d)])])):T("",!0),n.value.type==="quiz"?(l(),i("div",Id,[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Ad,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(on=n.value.content)==null?void 0:on.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=o=>d({question:o.target.value}))},null,40,Md)]),e("div",Ed,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(ln=(nn=n.value.content)==null?void 0:nn.options)==null?void 0:ln.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=o=>d({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,Pd)]),e("div",zd,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((an=n.value.content)==null?void 0:an.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=o=>d({correctIndex:+o.target.value}))},null,40,Nd)]),e("div",Td,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(sn=n.value.content)==null?void 0:sn.explanation,class:"textarea",onInput:t[137]||(t[137]=o=>d({explanation:o.target.value}))},null,40,_d)]),e("div",Ld,[e("div",jd,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((rn=n.value.content)==null?void 0:rn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=o=>d({cardBgColor:o.target.value}))},null,40,Bd)]),e("div",Dd,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((un=n.value.content)==null?void 0:un.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=o=>d({questionColor:o.target.value}))},null,40,qd)])]),e("div",Rd,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((dn=n.value.content)==null?void 0:dn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=o=>d({accentColor:o.target.value}))},null,40,Fd)])])):T("",!0),e("div",Ud,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Vd,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=o=>x(u).duplicateElement(x(s).projectId,x(s).currentSlideId,n.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),q(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=o=>{x(s).showInteractionEditor=!0,x(s).interactionElementId=n.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),q(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=o=>{x(u).deleteElement(x(s).projectId,x(s).currentSlideId,n.value.id),x(s).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),q(" Delete Element ",-1)])])])])],64)):(l(),i("div",Mi,[e("div",Ei,[e("button",{type:"button",class:H(["slide-settings-tab",Q.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>Q.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:H(["slide-settings-tab",Q.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>Q.value="transitions")},[...t[150]||(t[150]=[Re('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-4f48861a><path d="M5 7h5" data-v-4f48861a></path><path d="M5 12h10" data-v-4f48861a></path><path d="M5 17h14" data-v-4f48861a></path><path d="M14 7l5 5-5 5" data-v-4f48861a></path></svg><span data-v-4f48861a>Transitions</span>',2)])],2),e("button",{type:"button",class:H(["slide-settings-tab",Q.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>Q.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),Q.value==="canvas"?(l(),i("div",Pi,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",zi,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),ee(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>be.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>St("title",be.value.title))},null,544),[[me,be.value.title]])]),e("div",Ni,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",Ti,[(l(),i(V,null,te(["color","gradient","image"],o=>{var F;return e("button",{key:o,class:H(["bg-type-btn",(((F=p.value)==null?void 0:F.backgroundType)||"color")===o&&"active"]),onClick:cn=>$e({backgroundType:o})},w(o),11,_i)}),64))]),(((A=p.value)==null?void 0:A.backgroundType)||"color")==="color"?(l(),i("div",Li,[e("input",{type:"color",value:((J=p.value)==null?void 0:J.background)||"#ffffff",onInput:t[20]||(t[20]=o=>$e({background:o.target.value})),class:"color-input-native"},null,40,ji),e("input",{value:((ke=p.value)==null?void 0:ke.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>$e({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Bi)])):((Ce=p.value)==null?void 0:Ce.backgroundType)==="gradient"?ee((l(),i("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>be.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>$e({backgroundGradient:be.value.backgroundGradient}))},null,544)),[[me,be.value.backgroundGradient]]):ee((l(),i("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>be.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>$e({backgroundImage:be.value.backgroundImage}))},null,544)),[[me,be.value.backgroundImage]])]),e("div",Di,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",qi,[(l(!0),i(V,null,te(x(Gn),o=>{var F;return l(),i("button",{key:o.id,type:"button",class:H(["canvas-size-card",((F=v.value)==null?void 0:F.id)===o.id&&"active"]),onClick:cn=>Ue(o)},[e("span",Fi,[e("span",{class:H(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",Ui,w(o.label),1),e("span",Vi,w(o.ratioLabel),1)],10,Ri)}),128))]),e("div",Oi,[e("div",Gi,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Wi,"Current ratio "+w(M.value),1)]),e("div",Hi,[e("div",Qi,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Yi,[e("input",{type:"number",min:"320",max:"4096",value:b.value.width,class:"input",onChange:t[26]||(t[26]=o=>ye("width",o.target.value))},null,40,Ji),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Ki,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",Xi,[e("input",{type:"number",min:"320",max:"4096",value:b.value.height,class:"input",onChange:t[27]||(t[27]=o=>ye("height",o.target.value))},null,40,Zi),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",ea,[ee(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>K.value=o)},null,512),[[ft,K.value]]),t[161]||(t[161]=q(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=Re('<div class="canvas-size-callout" data-v-4f48861a><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-4f48861a><circle cx="12" cy="12" r="9" data-v-4f48861a></circle><path d="M12 10v6" data-v-4f48861a></path><path d="M12 7h.01" data-v-4f48861a></path></svg><span data-v-4f48861a>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",ta,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),ee(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>be.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>St("notes",be.value.notes))},null,544),[[me,be.value.notes]])])])):Q.value==="transitions"?(l(),i("div",oa,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((ze=p.value)==null?void 0:ze.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>$e({transition:o.target.value}))},[...t[167]||(t[167]=[Re('<option value="none" data-v-4f48861a>None</option><option value="fade" data-v-4f48861a>Fade</option><option value="slide" data-v-4f48861a>Slide</option><option value="zoom" data-v-4f48861a>Zoom</option><option value="flip" data-v-4f48861a>Flip</option>',5)])],40,na),e("div",la,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Ee=p.value)==null?void 0:Ee.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>kn(o.target.value))},null,40,ia),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",aa,[e("input",{type:"checkbox",checked:!!((Ke=p.value)!=null&&Ke.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>$e({advanceOnMediaEnd:o.target.checked}))},null,40,sa),t[170]||(t[170]=q(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(l(),i("div",ra,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",ua,[e("input",{type:"checkbox",checked:f.value.autoPlay,onChange:t[34]||(t[34]=o=>we({autoPlay:o.target.checked}))},null,40,da),t[173]||(t[173]=q(" Autoplay preview and exported presentation ",-1))]),e("label",ca,[e("input",{type:"checkbox",checked:f.value.loop,onChange:t[35]||(t[35]=o=>we({loop:o.target.checked}))},null,40,pa),t[174]||(t[174]=q(" Loop back to the first slide at the end ",-1))]),e("label",va,[e("input",{type:"checkbox",checked:f.value.showProgress,onChange:t[36]||(t[36]=o=>we({showProgress:o.target.checked}))},null,40,ma),t[175]||(t[175]=q(" Show progress bar in preview ",-1))]),e("label",fa,[e("input",{type:"checkbox",checked:f.value.showNavControls,onChange:t[37]||(t[37]=o=>we({showNavControls:o.target.checked}))},null,40,ga),t[176]||(t[176]=q(" Show previous/next and dot navigation ",-1))]),e("label",ba,[e("input",{type:"checkbox",checked:f.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>we({allowKeyboardNav:o.target.checked}))},null,40,ya),t[177]||(t[177]=q(" Allow arrow keys and space bar navigation ",-1))])]))]))])}}},Gd=_e(Od,[["__scopeId","data-v-4f48861a"]]),Wd={class:"editor-toolbar"},Hd={class:"toolbar-group"},Qd={class:"toolbar-group"},Yd=["data-tooltip","onClick"],Jd={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kd={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Xd={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zd={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ec={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},oc={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nc={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lc={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ic={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ac={class:"tool-label"},sc={class:"toolbar-group"},rc={class:"toolbar-group"},uc={class:"toolbar-group"},dc={__name:"EditorToolbar",emits:["open-ai-project"],setup(h,{emit:s}){const u=s,c=Oe();Ge();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function f(b){c.setActiveTool(b)}return(b,v)=>(l(),i("div",Wd,[e("div",Hd,[e("button",{class:H(["tool-btn",x(c).activeTool==="select"&&"active"]),onClick:v[0]||(v[0]=M=>f("select")),"data-tooltip":"Select (V)"},[...v[7]||(v[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),v[23]||(v[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Qd,[(l(),i(V,null,te(p,M=>e("button",{key:M.id,class:H(["tool-btn",x(c).activeTool===M.id&&"active"]),"data-tooltip":M.tooltip,onClick:K=>f(M.id)},[M.icon==="text"?(l(),i("svg",Jd,[...v[8]||(v[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):M.icon==="heading"?(l(),i("svg",Kd,[...v[9]||(v[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):M.icon==="image"?(l(),i("svg",Xd,[...v[10]||(v[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):M.icon==="shape"?(l(),i("svg",Zd,[...v[11]||(v[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):M.icon==="button"?(l(),i("svg",ec,[...v[12]||(v[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):M.icon==="hotspot"?(l(),i("svg",tc,[...v[13]||(v[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):M.icon==="video"?(l(),i("svg",oc,[...v[14]||(v[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):M.icon==="audio"?(l(),i("svg",nc,[...v[15]||(v[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):M.icon==="quiz"?(l(),i("svg",lc,[...v[16]||(v[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):M.icon==="chart"?(l(),i("svg",ic,[...v[17]||(v[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):T("",!0),e("span",ac,w(M.label),1)],10,Yd)),64))]),v[24]||(v[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",sc,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:v[1]||(v[1]=M=>u("open-ai-project")),"data-tooltip":"Create a new AI project"},[...v[18]||(v[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),v[25]||(v[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",rc,[e("button",{class:"tool-btn",onClick:v[2]||(v[2]=M=>x(c).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...v[19]||(v[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:v[3]||(v[3]=M=>x(c).zoomReset())},w(Math.round(x(c).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:v[4]||(v[4]=M=>x(c).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...v[20]||(v[20]=[Re('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),v[26]||(v[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",uc,[e("button",{class:H(["tool-btn",x(c).showGrid&&"active"]),onClick:v[5]||(v[5]=M=>x(c).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...v[21]||(v[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:H(["tool-btn",x(c).snapToGrid&&"active"]),onClick:v[6]||(v[6]=M=>x(c).toggleSnap()),"data-tooltip":"Snap to grid"},[...v[22]||(v[22]=[Re('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},cc=_e(dc,[["__scopeId","data-v-d964cc0f"]]),pc=["value"],vc=["value"],mc=["onMousedown"],fc={key:1,class:"selection-border locked-border"},gc={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(h){const s=h,u=Oe(),c=Ge(),p=Nn("canvasScale",E(1)),f=$(()=>u.projectId),b=$(()=>u.currentSlideId),v=$(()=>u.selectedElementIds.includes(s.element.id)),M=$(()=>s.element.locked),K=$(()=>s.element.visible!==!1),Q=$(()=>{var j,Z;return((Z=(j=s.element.animations)==null?void 0:j[0])==null?void 0:Z.type)||"auto"}),B=[{value:"auto",label:"Auto"},{value:"none",label:"None"},{value:"fade-up",label:"Fade"},{value:"fade-left",label:"Left"},{value:"fade-right",label:"Right"},{value:"zoom-in",label:"Zoom"},{value:"pop-in",label:"Pop"},{value:"stagger-in",label:"Stagger"}];let R=!1,Y=0,C=0,n=new Map;function g(j){var oe;if(M.value||j.target.classList.contains("resize-handle"))return;const Z=j.ctrlKey||j.metaKey||j.shiftKey;v.value?Z&&u.selectElement(s.element.id,!0):u.selectElement(s.element.id,Z),u.setActiveTool("select"),R=!1,Y=j.clientX,C=j.clientY,n.clear();const ae=(oe=c.getProject(f.value))==null?void 0:oe.slides.find(ge=>ge.id===b.value);ae&&u.selectedElementIds.forEach(ge=>{const xe=ae.elements.find(Se=>Se.id===ge);xe&&!xe.locked&&n.set(ge,{x:xe.x,y:xe.y})}),window.addEventListener("mousemove",y),window.addEventListener("mouseup",U),j.stopPropagation()}function y(j){const Z=(j.clientX-Y)/p.value,ae=(j.clientY-C)/p.value;!R&&(Math.abs(Z)>3||Math.abs(ae)>3)&&(R=!0),R&&n.forEach((oe,ge)=>{let xe=oe.x+Z,Se=oe.y+ae;if(u.snapToGrid&&u.gridSize){const Pe=u.gridSize;xe=Math.round(xe/Pe)*Pe,Se=Math.round(Se/Pe)*Pe}c.updateElement(f.value,b.value,ge,{x:xe,y:Se})})}function U(j){R||!(j.ctrlKey||j.metaKey||j.shiftKey)&&u.selectedElementIds.length>1&&u.selectElement(s.element.id,!1),R=!1,window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",U)}const X=["n","ne","e","se","s","sw","w","nw"];let ve=!1,le="",fe=0,ce=0,z=0,L=0,O=0,ie=0;function G(j,Z){M.value||(j.stopPropagation(),j.preventDefault(),ve=!0,le=Z,fe=j.clientX,ce=j.clientY,z=s.element.width,L=s.element.height,O=s.element.x,ie=s.element.y,window.addEventListener("mousemove",de),window.addEventListener("mouseup",re))}function de(j){if(!ve)return;const Z=p.value,ae=(j.clientX-fe)/Z,oe=(j.clientY-ce)/Z,ge=20;let xe=O,Se=ie,Pe=z,N=L;if(le.includes("e")&&(Pe=Math.max(ge,z+ae)),le.includes("s")&&(N=Math.max(ge,L+oe)),le.includes("w")){const d=Math.max(ge,z-ae);xe=O+(z-d),Pe=d}if(le.includes("n")){const d=Math.max(ge,L-oe);Se=ie+(L-d),N=d}if(u.snapToGrid&&u.gridSize){const d=u.gridSize;Pe=Math.round(Pe/d)*d,N=Math.round(N/d)*d,xe=Math.round(xe/d)*d,Se=Math.round(Se/d)*d}c.updateElement(f.value,b.value,s.element.id,{x:xe,y:Se,width:Pe,height:N})}function re(){ve=!1,window.removeEventListener("mousemove",de),window.removeEventListener("mouseup",re)}function Me(){["text","heading"].includes(s.element.type)&&u.setRightPanel("properties")}const he=$(()=>({position:"absolute",left:`${s.element.x}px`,top:`${s.element.y}px`,width:`${s.element.width}px`,height:`${s.element.height}px`,transform:`rotate(${s.element.rotation||0}deg)`,opacity:s.element.opacity??1,zIndex:s.element.zIndex||1,cursor:M.value?"not-allowed":"move",visibility:K.value?"visible":"hidden",userSelect:"none"}));function ue(j){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[j]||"auto"}function pe(j){var ae;if(M.value)return;if(j==="auto"){c.updateElement(f.value,b.value,s.element.id,{animations:[]});return}const Z=((ae=s.element.animations)==null?void 0:ae[0])||{};c.updateElement(f.value,b.value,s.element.id,{animations:[{type:j,delay:Math.max(0,Number(Z.delay)||0),duration:Math.max(.1,Number(Z.duration)||.64)}]})}return(j,Z)=>(l(),i("div",{class:H(["element-wrapper",v.value&&"selected",M.value&&"locked"]),style:se(he.value),onMousedown:g,onDblclick:Me},[Tn(j.$slots,"default",{},void 0),v.value&&!M.value?(l(),i(V,{key:0},[Z[3]||(Z[3]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"motion-chip",onMousedown:Z[1]||(Z[1]=Ae(()=>{},["stop"]))},[Z[2]||(Z[2]=e("span",{class:"motion-chip-label"},"Motion",-1)),e("select",{class:"motion-chip-select",value:Q.value,onChange:Z[0]||(Z[0]=ae=>pe(ae.target.value))},[(l(),i(V,null,te(B,ae=>e("option",{key:ae.value,value:ae.value},w(ae.label),9,vc)),64))],40,pc)],32),(l(),i(V,null,te(X,ae=>e("div",{key:ae,class:H(["resize-handle",`handle-${ae}`]),style:se({cursor:ue(ae)}),onMousedown:Ae(oe=>G(oe,ae),["stop"])},null,46,mc)),64))],64)):T("",!0),v.value&&M.value?(l(),i("div",fc)):T("",!0)],38))}},bc=_e(gc,[["__scopeId","data-v-179c0a50"]]),yc=["contenteditable"],gt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,u=$(()=>s.element.content||{}),c=Oe(),p=Ge(),f=E(!1),b=E(null),v=E("");Fe(()=>u.value.text,R=>{f.value||(v.value=R||(s.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function M(){c.selectedElementId===s.element.id&&(f.value=!0,_n(()=>{if(b.value){b.value.focus();const R=document.createRange();R.selectNodeContents(b.value),R.collapse(!1);const Y=window.getSelection();Y.removeAllRanges(),Y.addRange(R)}}))}function K(R){}function Q(R){f.value&&R.stopPropagation()}function B(){if(f.value=!1,b.value){const R=b.value.innerText;v.value=R,p.updateElement(c.projectId,c.currentSlideId,s.element.id,{content:{...s.element.content,text:R}})}}return(R,Y)=>(l(),i("div",{class:"text-element",ref_key:"textRef",ref:b,contenteditable:f.value,onDblclick:M,onBlur:B,onInput:K,onMousedown:Q,style:se({fontSize:(u.value.fontSize||16)+"px",fontFamily:u.value.fontFamily||"Inter, sans-serif",fontWeight:u.value.fontWeight||"normal",fontStyle:u.value.fontStyle||"normal",textDecoration:u.value.textDecoration||"none",textAlign:u.value.textAlign||"left",color:u.value.color||"#1a1a2e",lineHeight:u.value.lineHeight||1.5,textTransform:u.value.textTransform||"none",letterSpacing:(u.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:f.value?"2px solid var(--primary)":"none",cursor:f.value?"text":"inherit",userSelect:f.value?"text":"none"})},w(v.value),45,yc))}},hc=["src","alt"],xc={key:1,class:"image-placeholder"},wc={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},kc={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(h){return(s,u)=>{var c,p,f,b;return l(),i("div",{class:"image-element",style:se({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((c=h.element.content)==null?void 0:c.borderRadius)||0)+"px",border:`${((p=h.element.content)==null?void 0:p.borderWidth)||0}px solid ${((f=h.element.content)==null?void 0:f.borderColor)||"transparent"}`})},[(b=h.element.content)!=null&&b.src?(l(),i("img",{key:0,src:h.element.content.src,alt:h.element.content.alt||"",style:se({width:"100%",height:"100%",objectFit:h.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,hc)):(l(),i("div",xc,[(l(),i("svg",wc,[...u[0]||(u[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),u[1]||(u[1]=e("span",null,"Image",-1))]))],4)}}},Cc=_e(kc,[["__scopeId","data-v-401e9ff3"]]),Sc={class:"shape-element",style:{width:"100%",height:"100%"}},$c=["width","height"],Ic=["points","fill","stroke","stroke-width"],Ac={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,u=$(()=>s.element.content||{}),c=$(()=>{const b=u.value.shapeType||"rectangle",v={width:"100%",height:"100%",background:u.value.fillColor||"#6c47ff",border:`${u.value.borderWidth||0}px solid ${u.value.borderColor||"transparent"}`,opacity:u.value.opacity??1};return b==="circle"?{...v,borderRadius:"50%"}:b==="rectangle"?{...v,borderRadius:(u.value.borderRadius||0)+"px"}:v}),p=$(()=>["triangle","star","arrow","diamond"].includes(u.value.shapeType)),f=$(()=>{const b=s.element.width||150,v=s.element.height||100,M=u.value.shapeType;if(M==="triangle")return`${b/2},0 ${b},${v} 0,${v}`;if(M==="diamond")return`${b/2},0 ${b},${v/2} ${b/2},${v} 0,${v/2}`;if(M==="arrow")return`0,${v*.3} ${b*.6},${v*.3} ${b*.6},0 ${b},${v/2} ${b*.6},${v} ${b*.6},${v*.7} 0,${v*.7}`;if(M==="star"){const K=b/2,Q=v/2,B=Math.min(b,v)/2,R=B*.4;let Y="";for(let C=0;C<10;C++){const n=(C*36-90)*Math.PI/180,g=C%2===0?B:R;Y+=`${K+g*Math.cos(n)},${Q+g*Math.sin(n)} `}return Y.trim()}return""});return(b,v)=>(l(),i("div",Sc,[p.value?(l(),i("svg",{key:1,width:h.element.width,height:h.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:f.value,fill:u.value.fillColor||"#6c47ff",stroke:u.value.borderColor||"none","stroke-width":u.value.borderWidth||0},null,8,Ic)],8,$c)):(l(),i("div",{key:0,style:se(c.value)},null,4))]))}},Mc={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,u=$(()=>s.element.content||{}),c=$(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},f=p[u.value.variant||"primary"]||p.primary;return{...f,background:u.value.bgColor||f.background,color:u.value.textColor||f.color,border:u.value.borderColor?`1px solid ${u.value.borderColor}`:f.border,borderRadius:(u.value.borderRadius??8)+"px"}});return(p,f)=>(l(),i("div",{class:"button-element",style:se({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(u.value.fontSize??15)+"px",fontWeight:u.value.fontWeight??600,letterSpacing:(u.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:u.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...c.value})},w(u.value.label||"Button"),5))}},Ec={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Pc={class:"popup-header"},zc={class:"popup-body"},Nc={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,u=$(()=>s.element.content||{}),c=E(!1);function p(f){f.stopPropagation(),c.value=!c.value}return(f,b)=>(l(),i("div",Ec,[e("div",{class:"hotspot-btn",style:se({width:"100%",height:"100%",background:u.value.bgColor||"#6c47ff",borderRadius:(u.value.borderRadius??999)>=999?"50%":(u.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:u.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Ae(p,["stop"])},w(u.value.icon||"?"),5),rt(mt,{name:"fade"},{default:Xe(()=>[c.value?(l(),i("div",{key:0,class:"hotspot-popup",style:se({background:u.value.popupBgColor||"#ffffff",color:u.value.popupTextColor||"#1a1a2e"})},[e("div",Pc,[e("strong",null,w(u.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:b[0]||(b[0]=Ae(v=>c.value=!1,["stop"]))},"×")]),e("div",zc,w(u.value.popupContent||"Add your content in the properties panel."),1)],4)):T("",!0)]),_:1})]))}},Tc=_e(Nc,[["__scopeId","data-v-ef5f15f6"]]),_c={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},Lc=["src"],jc=["src","poster","autoplay","controls","loop","muted"],Bc={key:2,class:"video-placeholder"},Dc={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},qc={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,u=$(()=>s.element.content||{}),c=$(()=>{const f=u.value.src||"";return f.includes("youtube")||f.includes("youtu.be")}),p=$(()=>{var b,v;const f=u.value.src||"";if(c.value){const M=(b=f.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:b[1];return M?`https://www.youtube.com/embed/${M}`:""}if(f.includes("vimeo.com")){const M=(v=f.match(/vimeo\.com\/(\d+)/))==null?void 0:v[1];return M?`https://player.vimeo.com/video/${M}`:""}return""});return(f,b)=>(l(),i("div",_c,[p.value?(l(),i("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,Lc)):u.value.src&&!p.value?(l(),i("video",{key:1,src:u.value.src,poster:u.value.poster,autoplay:u.value.autoplay,controls:u.value.controls!==!1,loop:u.value.loop,muted:u.value.muted,style:se({width:"100%",height:"100%",objectFit:u.value.objectFit||"cover"})},null,12,jc)):(l(),i("div",Bc,[(l(),i("svg",Dc,[...b[0]||(b[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),b[1]||(b[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Rc=_e(qc,[["__scopeId","data-v-dfea1a16"]]),Fc=["stroke"],Uc=["src","controls","autoplay","loop"],Vc={key:1,style:{"font-size":"11px",color:"#aaa"}},Oc={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(h){return(s,u)=>{var c,p,f,b,v,M,K,Q,B;return l(),i("div",{class:"audio-element",style:se({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((c=h.element.content)==null?void 0:c.bgColor)||"#ede7ff",border:`1px solid ${((p=h.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((f=h.element.content)==null?void 0:f.accentColor)||"#6c47ff","stroke-width":"2"},[...u[1]||(u[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Fc)),e("span",{style:se({fontSize:"13px",color:((b=h.element.content)==null?void 0:b.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},w(((v=h.element.content)==null?void 0:v.label)||"Audio Player"),5),(M=h.element.content)!=null&&M.src?(l(),i("audio",{key:0,src:h.element.content.src,controls:((K=h.element.content)==null?void 0:K.controls)!==!1,autoplay:(Q=h.element.content)==null?void 0:Q.autoplay,loop:(B=h.element.content)==null?void 0:B.loop,style:{height:"28px","max-width":"180px"},onMousedown:u[0]||(u[0]=Ae(()=>{},["stop"]))},null,40,Uc)):(l(),i("span",Vc,"No source"))],4)}}},Gc={class:"quiz-options"},Wc=["onClick"],Hc={class:"opt-letter"},Qc={class:"opt-text"},Yc={key:0},Jc={class:"quiz-actions"},Kc=["disabled"],Xc={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(h){const s=h,u=$(()=>s.element.content||{}),c=E(null),p=E(!1);function f(K){p.value||(c.value=K)}function b(){c.value!==null&&(p.value=!0)}function v(){c.value=null,p.value=!1}const M=$(()=>p.value&&c.value===(u.value.correctIndex??0));return(K,Q)=>(l(),i("div",{class:"quiz-element",style:se({width:"100%",height:"100%",background:u.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":u.value.accentColor||"#6c47ff"})},[e("p",{style:se({fontSize:"15px",fontWeight:600,color:u.value.questionColor||"#1a1a2e",lineHeight:1.4})},w(u.value.question||"Question text…"),5),e("div",Gc,[(l(!0),i(V,null,te(u.value.options||[],(B,R)=>(l(),i("div",{key:R,class:H(["quiz-opt",c.value===R&&"selected",p.value&&R===u.value.correctIndex&&"correct",p.value&&c.value===R&&R!==u.value.correctIndex&&"wrong"]),onClick:Y=>f(R)},[e("span",Hc,w(String.fromCharCode(65+R)),1),e("span",Qc,w(B),1)],10,Wc))),128))]),p.value?(l(),i("div",{key:0,class:H(["quiz-feedback",M.value?"correct":"wrong"])},[q(w(M.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!M.value&&u.value.explanation?(l(),i("span",Yc,w(u.value.explanation),1)):T("",!0)],2)):T("",!0),e("div",Jc,[p.value?(l(),i("button",{key:1,class:"quiz-btn secondary",onClick:v},"Try Again")):(l(),i("button",{key:0,class:"quiz-btn primary",disabled:c.value===null,onClick:b},"Submit",8,Kc))])],4))}},Zc=_e(Xc,[["__scopeId","data-v-ca2bd187"]]),ep={key:0,class:"canvas-empty"},tp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},op={key:0,class:"canvas-device-frame","aria-hidden":"true"},np=["value"],lp={class:"canvas-guide-label"},ip={key:4,class:"drop-hint"},ap={class:"canvas-info-bar"},sp=["disabled"],rp={class:"slide-index"},up=["disabled"],dp={key:0},cp={__name:"EditorCanvas",setup(h){const s=Oe(),u=Ge(),c=E(null),p=E(null),f=E(1),b=$(()=>f.value*s.zoomLevel);jn("canvasScale",b);const v=$(()=>u.getProject(s.projectId)),M=$(()=>pt(v.value)),K=$(()=>bn(v.value)),Q=$(()=>M.value.width),B=$(()=>M.value.height),R=$(()=>yn(Q.value,B.value)),Y=$(()=>{var m,S;return(S=(m=v.value)==null?void 0:m.slides)==null?void 0:S.find(D=>D.id===s.currentSlideId)}),C=$(()=>{var m;return[...((m=v.value)==null?void 0:m.slides)||[]].sort((S,D)=>S.order-D.order)}),n=$(()=>C.value.findIndex(m=>m.id===s.currentSlideId)),g=$(()=>{var m;return{autoPlay:!1,motionPresets:[],...((m=v.value)==null?void 0:m.settings)||{}}}),y=$(()=>(Array.isArray(g.value.motionPresets)?g.value.motionPresets:[]).filter(m=>m.scope==="group")),U=$(()=>{const m=new Set(s.selectedElementIds);return ce.value.filter(S=>m.has(S.id))}),X=E(""),ve=$(()=>Y.value?Y.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:g.value.autoPlay&&Number(Y.value.duration||0)>0?{label:`Auto ${Number(Y.value.duration).toFixed(Number(Y.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function le(){const m=y.value.find(D=>D.id===X.value);if(!m||!U.value.length)return;[...U.value].sort((D,W)=>(D.y||0)!==(W.y||0)?(D.y||0)-(W.y||0):(D.x||0)-(W.x||0)).forEach((D,W)=>{if(m.type==="auto"){u.updateElement(s.projectId,s.currentSlideId,D.id,{animations:[]});return}u.updateElement(s.projectId,s.currentSlideId,D.id,{animations:[{type:m.type,delay:Math.max(0,Number(m.delay)||0)+W*Math.max(0,Number(m.stepDelay)||0),duration:Math.max(.1,Number(m.duration)||.72)}]})}),u.updateProject(s.projectId,{settings:{...g.value,motionPresets:(g.value.motionPresets||[]).map(D=>D.id===m.id?{...D,usageCount:Math.max(0,Number(D.usageCount||0))+1,lastUsedAt:Date.now()}:D)}})}function fe(){if(!y.value.length){X.value="";return}y.value.some(m=>m.id===X.value)||(X.value=y.value[0].id)}const ce=$(()=>{var m;return[...((m=Y.value)==null?void 0:m.elements)||[]].sort((S,D)=>(S.zIndex||0)-(D.zIndex||0))}),z=$(()=>{const m=Y.value;return m?m.backgroundType==="gradient"&&m.backgroundGradient?{background:m.backgroundGradient}:m.backgroundType==="image"&&m.backgroundImage?{backgroundImage:`url(${m.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:m.background||"#fff"}:{background:"#fff"}}),L=$(()=>`scale(${b.value})`);function O(){if(!c.value)return;const{clientWidth:m,clientHeight:S}=c.value,D=(m-80)/Q.value,W=(S-80)/B.value;f.value=Math.min(D,W,1)}let ie=null;mn(()=>{O(),ie=new ResizeObserver(O),c.value&&ie.observe(c.value),fe()}),fn(()=>ie==null?void 0:ie.disconnect()),Fe(y,()=>{fe()},{deep:!0,immediate:!0}),Fe(M,()=>{O()},{deep:!0});const G=E({x:0,y:0}),de=E({x:0,y:0}),re=E(!1),Me=E(!1),he=$(()=>{var m,S;return((m=K.value)==null?void 0:m.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((S=K.value)==null?void 0:S.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),ue=$(()=>{if(!he.value)return null;if(he.value.tone==="mobile"){const D=Q.value*.08,W=B.value*.05;return{x:D,y:W,width:Q.value-D*2,height:B.value-W*2}}const m=Q.value*.08,S=B.value*.08;return{x:m,y:S,width:Q.value-m*2,height:B.value-S*2}}),pe=$(()=>{if(!ue.value)return[];const m=ue.value;return ce.value.filter(S=>S.visible!==!1).filter(S=>{const D=Number(S.x||0),W=Number(S.y||0),k=D+Number(S.width||0),Ie=W+Number(S.height||0);return D<m.x||W<m.y||k>m.x+m.width||Ie>m.y+m.height}).map(S=>S.id)}),j=$(()=>s.selectedElementIds.filter(m=>pe.value.includes(m)).length),Z=$(()=>pe.value.length),ae=$(()=>!he.value||!Z.value?null:j.value?`${j.value} selected ${j.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`:`${Z.value} ${Z.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`),oe=$(()=>{if(!re.value)return null;const m=Math.min(G.value.x,de.value.x),S=Math.min(G.value.y,de.value.y),D=Math.abs(de.value.x-G.value.x),W=Math.abs(de.value.y-G.value.y);return{x:m,y:S,width:D,height:W}});function ge(m){!re.value&&(m.target===p.value||m.target===m.currentTarget)&&s.clearSelection()}function xe(m){return m?Array.from(m.files||[]).some(S=>S.type.startsWith("image/")):!1}function Se(m,S,D){if(!m||!m.type.startsWith("image/"))return;const W=new FileReader;W.onload=()=>{const k=String(W.result||"");if(!k)return;const Ie=new Image;Ie.onload=()=>{const Be=p.value.getBoundingClientRect(),Te=(S-Be.left)/b.value,et=(D-Be.top)/b.value,De=Math.min(420/Ie.width,280/Ie.height,1),He=Math.max(120,Math.round(Ie.width*De)),Qe=Math.max(80,Math.round(Ie.height*De)),ot=Math.max(0,Math.min(Q.value-He,Math.round(Te-He/2))),nt=Math.max(0,Math.min(B.value-Qe,Math.round(et-Qe/2))),lt=u.addElement(s.projectId,s.currentSlideId,"image",{x:ot,y:nt,width:He,height:Qe,content:{src:k,alt:m.name,objectFit:"cover"}});lt&&(s.selectElement(lt.id),s.setActiveTool("select"),s.setRightPanel("properties"))},Ie.src=k},W.readAsDataURL(m)}function Pe(m){xe(m.dataTransfer)&&(m.preventDefault(),m.dataTransfer.dropEffect="copy",Me.value=!0)}function N(m){var S;(S=m.currentTarget)!=null&&S.contains(m.relatedTarget)||(Me.value=!1)}function d(m){if(!xe(m.dataTransfer))return;m.preventDefault(),Me.value=!1;const S=Array.from(m.dataTransfer.files||[]).find(D=>D.type.startsWith("image/"));S&&Se(S,m.clientX,m.clientY)}function P(m){const S=s.activeTool;if(m.target!==p.value&&m.target!==m.currentTarget)return;m.preventDefault(),m.stopPropagation();const D=p.value.getBoundingClientRect(),W=(m.clientX-D.left)/b.value,k=(m.clientY-D.top)/b.value;if(S==="select"){re.value=!0,G.value={x:W,y:k},de.value={x:W,y:k};const Te=Ne=>{de.value={x:(Ne.clientX-D.left)/b.value,y:(Ne.clientY-D.top)/b.value}},et=()=>{window.removeEventListener("mousemove",Te),window.removeEventListener("mouseup",et);const Ne=oe.value;if(Ne&&(Ne.width>2||Ne.height>2)){const tt=ce.value.filter(De=>{const He=De.x,Qe=De.y,ot=De.width||100,nt=De.height||100;return He<Ne.x+Ne.width&&He+ot>Ne.x&&Qe<Ne.y+Ne.height&&Qe+nt>Ne.y}).map(De=>De.id);tt.length>0?s.setSelection(tt):s.clearSelection()}else s.clearSelection();setTimeout(()=>{re.value=!1},0)};window.addEventListener("mousemove",Te),window.addEventListener("mouseup",et);return}const Ie=Te=>s.snapToGrid?Math.round(Te/s.gridSize)*s.gridSize:Te,Be=u.addElement(s.projectId,s.currentSlideId,S,{x:Ie(W-75),y:Ie(k-40)});Be&&(s.selectElement(Be.id),s.setActiveTool("select"),s.setRightPanel("properties"))}const be=$(()=>{if(!s.showGrid)return{};const m=s.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${m}px ${m}px`}}),$e={text:gt,heading:gt,image:Cc,shape:Ac,button:Mc,hotspot:Tc,video:Rc,audio:Oc,quiz:Zc,chart:Kn,divider:"div"};function we(m){return $e[m]||gt}function Ue(m){var S,D;return m.type!=="divider"?{}:{borderTop:`${((S=m.content)==null?void 0:S.thickness)||2}px solid ${((D=m.content)==null?void 0:D.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const ye=E({show:!1,x:0,y:0,elId:null});function Le(m,S){m.preventDefault(),ye.value={show:!0,x:m.clientX,y:m.clientY,elId:S},s.selectElement(S),setTimeout(()=>window.addEventListener("click",Ve,{once:!0}),0)}function Ve(){ye.value.show=!1}function We(){if(ye.value.elId){const m=u.duplicateElement(s.projectId,s.currentSlideId,ye.value.elId);m&&s.selectElement(m.id)}Ve()}function Ze(){ye.value.elId&&(u.deleteElement(s.projectId,s.currentSlideId,ye.value.elId),s.clearSelection()),Ve()}function ut(){ye.value.elId&&u.reorderElement(s.projectId,s.currentSlideId,ye.value.elId,"up"),Ve()}function I(){ye.value.elId&&u.reorderElement(s.projectId,s.currentSlideId,ye.value.elId,"down"),Ve()}function a(){const m=n.value,S=u.addSlide(s.projectId,m);S&&s.setCurrentSlide(S.id)}function _(){const m=n.value;m>0&&s.setCurrentSlide(C.value[m-1].id)}function ne(){const m=n.value;m<C.value.length-1&&s.setCurrentSlide(C.value[m+1].id)}return(m,S)=>{var D;return l(),i("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:c},[Y.value?(l(),i(V,{key:1},[e("div",{class:H(["canvas-zoom-wrapper",[he.value&&`canvas-zoom-wrapper-${he.value.tone}`]]),style:se({transform:L.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:se({width:Q.value+"px",height:B.value+"px",...z.value,...be.value}),onClick:ge,onMousedown:P,onDragover:Pe,onDragleave:N,onDrop:d,onContextmenu:S[3]||(S[3]=Ae(()=>{},["prevent"]))},[he.value?(l(),i("div",op)):T("",!0),x(s).multiSelection&&y.value.length?(l(),i("div",{key:1,class:"selection-preset-chip",onMousedown:S[1]||(S[1]=Ae(()=>{},["stop"]))},[S[7]||(S[7]=e("span",{class:"selection-preset-label"},"Sequence",-1)),ee(e("select",{"onUpdate:modelValue":S[0]||(S[0]=W=>X.value=W),class:"selection-preset-select"},[(l(!0),i(V,null,te(y.value,W=>(l(),i("option",{key:W.id,value:W.id},w(W.name),9,np))),128))],512),[[ct,X.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Ae(le,["stop"])},"Apply")],32)):T("",!0),ae.value?(l(),i("div",{key:2,class:"canvas-guide-warning",onMousedown:S[2]||(S[2]=Ae(()=>{},["stop"]))},[S[8]||(S[8]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,w(ae.value),1)],32)):T("",!0),(l(!0),i(V,null,te(ce.value,W=>(l(),je(bc,{key:W.id,element:W,onContextmenu:Ae(k=>Le(k,W.id),["stop"])},{default:Xe(()=>[(l(),je(Ln(we(W.type)),{element:W,style:se(W.type==="divider"?Ue(W):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),he.value?(l(),i("div",{key:3,class:H(["canvas-guide",[`canvas-guide-${he.value.tone}`,Z.value&&"canvas-guide-warning-state"]]),style:se(he.value.style),"aria-hidden":"true"},[e("span",lp,w(he.value.label)+" · "+w(R.value),1)],6)):T("",!0),x(s).activeTool!=="select"||Me.value?(l(),i("div",ip,w(Me.value?"Drop image to insert it on this slide":`Click anywhere to add ${x(s).activeTool}`),1)):T("",!0),re.value&&oe.value?(l(),i("div",{key:5,class:"selection-marquee",style:se({left:oe.value.x+"px",top:oe.value.y+"px",width:oe.value.width+"px",height:oe.value.height+"px"})},null,4)):T("",!0)],36)],6),e("div",ap,[e("button",{class:"bar-btn",onClick:a},"Add page"),e("button",{class:"bar-btn icon",onClick:_,disabled:n.value<=0},"◀",8,sp),e("span",rp,w(n.value+1)+" / "+w(C.value.length),1),e("button",{class:"bar-btn icon",onClick:ne,disabled:n.value>=C.value.length-1},"▶",8,up),e("span",null,w(Q.value)+" × "+w(B.value)+"px",1),S[9]||(S[9]=e("span",null,"·",-1)),e("span",null,w(((D=Y.value.elements)==null?void 0:D.length)||0)+" elements",1),S[10]||(S[10]=e("span",null,"·",-1)),e("span",{class:H(["playback-badge",`playback-badge-${ve.value.tone}`])},w(ve.value.label),3),x(s).hasSelection?(l(),i("span",dp,"· "+w(x(s).selectedElementIds.length)+" selected",1)):T("",!0),e("button",{class:"bar-btn ai",onClick:S[4]||(S[4]=W=>x(s).setRightPanel("ai"))},"AI")])],64)):(l(),i("div",ep,[(l(),i("svg",tp,[...S[5]||(S[5]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),S[6]||(S[6]=e("p",null,"Select a slide to start editing",-1))])),(l(),je(gn,{to:"body"},[ye.value.show?(l(),i("div",{key:0,class:"ctx-menu",style:se({left:ye.value.x+"px",top:ye.value.y+"px"})},[e("button",{class:"ctx-item",onClick:We},"Duplicate"),e("button",{class:"ctx-item",onClick:ut},"Bring Forward"),e("button",{class:"ctx-item",onClick:I},"Send Backward"),S[11]||(S[11]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Ze},"Delete")],4)):T("",!0)]))],512)}}},pp=_e(cp,[["__scopeId","data-v-c6947122"]]),vp={class:"ai-panel"},mp={class:"ai-mode-tabs"},fp=["onClick"],gp={class:"ai-content"},bp={class:"form-group"},yp={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},hp={key:0,class:"form-group"},xp={key:1,class:"form-group"},wp={class:"form-group"},kp={class:"form-group"},Cp={class:"prompt-label-row"},Sp={key:1,class:"prompt-auto-badge"},$p={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},Ip=["disabled"],Ap={key:0,class:"spinner"},Mp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ep={key:3,class:"creative-options-wrap"},Pp={class:"result-header"},zp={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Np={key:1,class:"creative-options-list"},Tp={class:"creative-title"},_p={class:"creative-angle"},Lp=["onClick"],jp={class:"form-group"},Bp={class:"quiz-config-row"},Dp={class:"form-group",style:{flex:"1"}},qp={class:"form-group",style:{flex:"1"}},Rp={class:"form-group"},Fp={class:"qtype-btns"},Up=["onClick"],Vp={class:"qtype-icon"},Op={class:"form-group"},Gp={class:"form-group"},Wp={class:"prompt-label-row"},Hp={key:1,class:"prompt-auto-badge"},Qp=["disabled"],Yp={key:0,class:"spinner"},Jp={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kp={key:0,class:"quiz-results"},Xp={class:"quiz-results-header"},Zp={class:"form-label"},ev={class:"quiz-header-actions"},tv={class:"regen-row"},ov=["disabled"],nv={key:0,class:"spinner spinner-sm"},lv={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},iv=["disabled"],av={class:"quiz-card-header"},sv={class:"quiz-card-check"},rv=["onUpdate:modelValue"],uv={class:"q-num"},dv={class:"q-badges"},cv={class:"badge type-badge"},pv={class:"q-question"},vv={class:"q-options"},mv={class:"q-option-letter"},fv={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},gv={key:0,class:"q-explanation"},bv=["disabled"],yv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hv=["disabled"],xv={key:0,class:"spinner"},wv={key:0,class:"selected-text-preview"},kv={class:"text-preview"},Cv={key:1,class:"ai-hint"},Sv={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},$v=["disabled"],Iv={key:0,class:"spinner"},Av={key:0,class:"selected-text-preview"},Mv={class:"text-preview"},Ev={key:1,class:"ai-hint"},Pv={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},zv=["disabled"],Nv={key:0,class:"spinner"},Tv={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},_v={class:"result-header"},Lv={class:"result-actions"},jv=["disabled"],Bv={class:"textarea result-display"},Dv={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qv=["disabled"],Rv={key:0,class:"spinner"},Fv={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Uv={class:"textarea result-display",style:{color:"var(--color-primary)"}},Vv={key:6,class:"ai-settings"},Ov={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Gv=["value"],Wv={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Hv=["value"],Qv={key:0,class:"demo-notice"},Yv={key:7,class:"result-area"},Jv={class:"result-header"},Kv={class:"result-pre"},Xv={class:"result-actions"},Zv=["disabled"],e1={key:8,class:"ai-error"},t1={__name:"AIAssistant",setup(h){const s=qn(),u=Oe(),c=Ge(),p=E("generate"),f=E(""),b=E(""),v=E("");Fe(p,()=>{v.value=""});const M=E(4),K=E("general"),Q=E("Spanish"),B=E(""),R=E(""),Y=E(""),C=E(!1),n=E("single"),g=E(5),y=E("slide"),U=E([]),X=E(""),ve=$(()=>{const I=b.value.trim()||"[your topic]";if(n.value==="deck"){let ne=`Create a complete ${g.value}-slide learning deck about "${I}".`;return R.value.trim()&&(ne+=`
Additional context: ${R.value.trim()}`),ne+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,ne+=`
Make each slide distinct, logically sequenced, and specific to "${I}".`,ne}let _=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[K.value]||"educational slide"} about "${I}".`;return R.value.trim()&&(_+=`
Additional context: ${R.value.trim()}`),_+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${I}" — no generic placeholders.`,_});Fe(ve,I=>{C.value||(Y.value=I)},{immediate:!0});function le(){Y.value=ve.value,C.value=!1}const fe=E(""),ce=E("intermediate"),z=E("multiple-choice"),L=E(""),O=E([]),ie=E(""),G=E(!1),de=$(()=>{const I=fe.value.trim()||"[your topic]",a={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},_={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let ne=`Generate ${M.value} ${a[ce.value]} ${_[z.value]} quiz questions about "${I}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return L.value.trim()&&(ne+=`
Learning objective: ${L.value.trim()}`),ne});Fe(de,I=>{G.value||(ie.value=I)},{immediate:!0});function re(){ie.value=de.value,G.value=!1}const Me=$(()=>c.getProject(u.projectId)),he=$(()=>{var I,a;return(a=(I=Me.value)==null?void 0:I.slides)==null?void 0:a.find(_=>_.id===u.currentSlideId)}),ue=$(()=>{var I,a;return u.selectedElementId?(a=(I=he.value)==null?void 0:I.elements)==null?void 0:a.find(_=>_.id===u.selectedElementId):null});async function pe(){if(!b.value.trim()&&!Y.value.trim())return;if(v.value="",U.value=[],X.value="",n.value==="deck"){const a=await s.generateSlideDeck(b.value,g.value,{objective:R.value,customPrompt:Y.value});if(a!=null&&a.length){const _=a.map(ne=>j(ne));v.value=JSON.stringify({slides:_},null,2),ge(_,{replaceGenerated:!0})}return}if(y.value==="options"){await Pe();return}const I=await s.generateSlideContent(b.value,K.value,R.value,Y.value);if(I){const a=j(I);v.value=JSON.stringify(a,null,2),xe(a,{replaceGenerated:!0})}}function j(I){const a=I&&typeof I=="object"?I:{},ne=(Array.isArray(a.bullets)?a.bullets:typeof a.bullets=="string"?a.bullets.split(`
`):[]).map(m=>String(m||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(a.title||b.value||"Untitled Slide").trim(),subtitle:String(a.subtitle||"").trim(),bullets:ne,callout:String(a.callout||"").trim()}}function Z(I,a){var m,S,D;const _=(S=(m=c.getProject(I))==null?void 0:m.slides)==null?void 0:S.find(W=>W.id===a);if(!((D=_==null?void 0:_.elements)!=null&&D.length))return;_.elements.filter(W=>{var k;return((k=W.meta)==null?void 0:k.source)==="ai-content"}).map(W=>W.id).forEach(W=>{c.deleteElement(I,a,W)})}function ae(I,a,_,ne){return c.addElement(I,a,_,{...ne,meta:{...ne.meta||{},source:"ai-content"}})}function oe(I,a,_,{replaceGenerated:ne=!1}={}){var m;if(!(!I||!a)){if(ne&&Z(I,a),_.title&&(c.updateSlide(I,a,{title:_.title}),ae(I,a,"heading",{x:60,y:40,width:840,height:80,content:{text:_.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),_.subtitle&&ae(I,a,"text",{x:60,y:130,width:840,height:50,content:{text:_.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(m=_.bullets)!=null&&m.length){const S=_.bullets.map(D=>`• ${D}`).join(`
`);ae(I,a,"text",{x:60,y:_.subtitle?200:150,width:840,height:200,content:{text:S,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}_.callout&&(ae(I,a,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),ae(I,a,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${_.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function ge(I,{replaceGenerated:a=!1}={}){if(!u.currentSlideId)return;const _=u.projectId;if(!_||!Array.isArray(I)||!I.length)return;I.map(m=>j(m)).forEach(m=>{const S=c.addSlide(_);S&&oe(_,S.id,m,{replaceGenerated:a})})}function xe(I=null,{replaceGenerated:a=!1}={}){if(!u.currentSlideId)return;let _=I;if(!_){if(!v.value)return;try{_=JSON.parse(v.value)}catch(D){console.warn("Could not parse AI content:",D);return}}const ne=j(_),m=u.projectId,S=u.currentSlideId;!m||!S||oe(m,S,ne,{replaceGenerated:a})}function Se(){if(v.value){if(n.value==="deck"){try{const I=JSON.parse(v.value),a=Array.isArray(I)?I:I==null?void 0:I.slides;if(!Array.isArray(a)||!a.length)return;ge(a,{replaceGenerated:!0})}catch{return}return}xe()}}async function Pe(){const I=b.value.trim()||"[your topic]",a=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${K.value}" slide about "${I}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,_=await s.generate(a,{type:"creativeOptions",topic:I,slideType:K.value});if(_)try{const ne=JSON.parse(_.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(ne))throw new Error("Options must be an array");U.value=ne.slice(0,3).map((m,S)=>({title:String((m==null?void 0:m.title)||`Option ${S+1}`),angle:String((m==null?void 0:m.angle)||""),prompt:String((m==null?void 0:m.prompt)||"")})).filter(m=>m.prompt.trim()),U.value.length||(X.value="No usable creative options were returned. Try generating again.")}catch{X.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function N(I){I!=null&&I.prompt&&(Y.value=I.prompt,C.value=!0,y.value="slide",await pe())}async function d(I=!1){if(!fe.value.trim()&&!ie.value.trim())return;I||(O.value=[]);const a=await s.generateQuiz(fe.value,M.value,{difficulty:ce.value,questionType:z.value,objective:L.value,customPrompt:ie.value});if(a)if(I){const _=new Set(O.value.map(m=>m.question)),ne=a.filter(m=>!_.has(m.question)).map(m=>({...m,_selected:!0}));O.value=[...O.value,...ne]}else O.value=a.map(_=>({..._,_selected:!0}))}async function P(){const I=O.value.filter(_=>_._selected);if(!I.length)return;const a=u.projectId;I.forEach((_,ne)=>{const m=c.addSlide(a);m&&(c.addElement(a,m.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:_.question,options:_.options,correctIndex:_.correctIndex,explanation:_.explanation||""}}),c.updateSlide(a,m.id,{title:`Q${ne+1}: ${_.question.slice(0,40)}…`}))}),O.value=[]}function be(I){O.value.forEach(a=>a._selected=I)}async function $e(){if(!B.value.trim())return;const I=await s.generateVoiceoverScript(B.value);I&&(v.value=I)}async function we(){var _,ne;const I=(ne=(_=ue.value)==null?void 0:_.content)==null?void 0:ne.text;if(!I)return;const a=await s.generateTranslation(I,Q.value);a&&(v.value=a)}async function Ue(){!v.value||!ue.value||c.updateElement(u.projectId,u.currentSlideId,ue.value.id,{content:{...ue.value.content,text:v.value}})}const ye=E(""),Le=E(!1);async function Ve(){if(ye.value.trim()){Le.value=!0,v.value="Optimizing prompt...";try{let I=ye.value;const a=await s.generateImagePrompt(ye.value);a&&(I=a.replace(/```(json)?\n?/g,"").trim()),v.value="Painting image... this takes about 10-20 seconds. Please wait.";const _=Math.floor(Math.random()*1e6),ne=`https://image.pollinations.ai/prompt/${encodeURIComponent(I)}?width=600&height=400&nologo=true&seed=${_}`;await new Promise((m,S)=>{const D=new Image;D.onload=m,D.onerror=S,D.src=ne}),c.addElement(u.projectId,u.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:ne,objectFit:"cover"}}),v.value="Image added to slide!"}catch{v.value="Failed to generate image. Try a different prompt."}finally{Le.value=!1}}}async function We(){var a,_;if(!((_=(a=ue.value)==null?void 0:a.content)!=null&&_.text))return;const I=await s.improveText(ue.value.content.text,f.value||"Make it clearer and more engaging");I&&(v.value=I)}async function Ze(){!v.value||!ue.value||c.updateElement(u.projectId,u.currentSlideId,ue.value.id,{content:{...ue.value.content,text:v.value}})}async function ut(){if(!f.value.trim())return;const I=await s.generate(f.value);I&&(v.value=I)}return(I,a)=>{var _,ne,m,S,D,W;return l(),i("div",vp,[e("div",mp,[(l(),i(V,null,te([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],k=>e("button",{key:k.id,class:H(["ai-mode-btn",p.value===k.id&&"active"]),onClick:Ie=>p.value=k.id},w(k.label),11,fp)),64))]),e("div",gp,[p.value==="generate"?(l(),i(V,{key:0},[e("div",bp,[a[34]||(a[34]=e("label",{class:"form-label"},[q("Topic / Subject "),e("span",{class:"required"},"*")],-1)),ee(e("input",{"onUpdate:modelValue":a[0]||(a[0]=k=>b.value=k),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:pn(pe,["enter"])},null,544),[[me,b.value]])]),e("div",yp,[e("button",{class:H(["output-mode-btn",n.value==="single"&&"active"]),onClick:a[1]||(a[1]=k=>n.value="single")},"Single Slide",2),e("button",{class:H(["output-mode-btn",n.value==="deck"&&"active"]),onClick:a[2]||(a[2]=k=>n.value="deck")},"Slide Deck",2)]),n.value==="single"?(l(),i("div",hp,[a[36]||(a[36]=e("label",{class:"form-label"},"Slide Type",-1)),ee(e("select",{"onUpdate:modelValue":a[3]||(a[3]=k=>K.value=k),class:"select"},[...a[35]||(a[35]=[Re('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[ct,K.value]])])):(l(),i("div",xp,[a[37]||(a[37]=e("label",{class:"form-label"},"Number of Slides",-1)),ee(e("input",{"onUpdate:modelValue":a[4]||(a[4]=k=>g.value=k),class:"input",type:"number",min:"1",max:"20"},null,512),[[me,g.value,void 0,{number:!0}]]),a[38]||(a[38]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",wp,[a[39]||(a[39]=e("label",{class:"form-label"},[q("Description "),e("span",{class:"optional"},"(optional)")],-1)),ee(e("textarea",{"onUpdate:modelValue":a[5]||(a[5]=k=>R.value=k),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[me,R.value]])]),e("div",kp,[e("div",Cp,[a[41]||(a[41]=e("label",{class:"form-label"},"AI Prompt",-1)),C.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:le,title:"Reset to auto-generated prompt"},[...a[40]||(a[40]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),q(" Reset ",-1)])])):(l(),i("span",Sp,"auto"))]),ee(e("textarea",{"onUpdate:modelValue":a[6]||(a[6]=k=>Y.value=k),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:a[7]||(a[7]=k=>C.value=!0),spellcheck:"false"},null,544),[[me,Y.value]]),a[42]||(a[42]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),n.value==="single"?(l(),i("div",$p,[e("button",{class:H(["output-mode-btn",y.value==="slide"&&"active"]),onClick:a[8]||(a[8]=k=>y.value="slide")},"Show on Slide",2),e("button",{class:H(["output-mode-btn",y.value==="options"&&"active"]),onClick:a[9]||(a[9]=k=>y.value="options")},"Creative Options",2)])):T("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating||!b.value.trim()&&!Y.value.trim()||n.value==="deck"&&(!g.value||g.value<1||g.value>20),onClick:pe},[x(s).isGenerating?(l(),i("span",Ap)):(l(),i("svg",Mp,[...a[43]||(a[43]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),q(" "+w(x(s).isGenerating?"Generating…":n.value==="deck"?v.value?`Regenerate ${g.value} Slides`:`Generate ${g.value} Slides`:y.value==="slide"?v.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,Ip),n.value==="single"&&y.value==="options"&&(U.value.length||X.value)?(l(),i("div",Ep,[e("div",Pp,[a[44]||(a[44]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:a[10]||(a[10]=k=>{U.value=[],X.value=""})},"Clear")]),X.value?(l(),i("div",zp,[a[45]||(a[45]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),q(" "+w(X.value),1)])):(l(),i("div",Np,[(l(!0),i(V,null,te(U.value,(k,Ie)=>(l(),i("article",{key:Ie,class:"creative-option-card"},[e("h4",Tp,w(k.title),1),e("p",_p,w(k.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:Be=>N(k)},"Use This Option",8,Lp)]))),128))]))])):T("",!0)],64)):p.value==="quiz"?(l(),i(V,{key:1},[e("div",jp,[a[46]||(a[46]=e("label",{class:"form-label"},[q("Quiz Topic "),e("span",{class:"required"},"*")],-1)),ee(e("input",{"onUpdate:modelValue":a[11]||(a[11]=k=>fe.value=k),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:pn(d,["enter"])},null,544),[[me,fe.value]])]),e("div",Bp,[e("div",Dp,[a[48]||(a[48]=e("label",{class:"form-label"},"Questions",-1)),ee(e("select",{"onUpdate:modelValue":a[12]||(a[12]=k=>M.value=k),class:"select"},[...a[47]||(a[47]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[ct,M.value,void 0,{number:!0}]])]),e("div",qp,[a[50]||(a[50]=e("label",{class:"form-label"},"Difficulty",-1)),ee(e("select",{"onUpdate:modelValue":a[13]||(a[13]=k=>ce.value=k),class:"select"},[...a[49]||(a[49]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[ct,ce.value]])])]),e("div",Rp,[a[51]||(a[51]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Fp,[(l(),i(V,null,te([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],k=>e("button",{key:k.id,class:H(["qtype-btn",z.value===k.id&&"active"]),onClick:Ie=>z.value=k.id},[e("span",Vp,w(k.icon),1),e("span",null,w(k.label),1)],10,Up)),64))])]),e("div",Op,[a[52]||(a[52]=e("label",{class:"form-label"},[q("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),ee(e("input",{"onUpdate:modelValue":a[14]||(a[14]=k=>L.value=k),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[me,L.value]])]),e("div",Gp,[e("div",Wp,[a[54]||(a[54]=e("label",{class:"form-label"},"AI Prompt",-1)),G.value?(l(),i("button",{key:0,class:"prompt-reset-btn",onClick:re,title:"Reset to auto-generated prompt"},[...a[53]||(a[53]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),q(" Reset ",-1)])])):(l(),i("span",Hp,"auto"))]),ee(e("textarea",{"onUpdate:modelValue":a[15]||(a[15]=k=>ie.value=k),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:a[16]||(a[16]=k=>G.value=!0),spellcheck:"false"},null,544),[[me,ie.value]]),a[55]||(a[55]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating||!fe.value.trim()&&!ie.value.trim(),onClick:a[17]||(a[17]=k=>d(!1))},[x(s).isGenerating?(l(),i("span",Yp)):(l(),i("svg",Jp,[...a[56]||(a[56]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),q(" "+w(x(s).isGenerating?"Generating…":`Generate ${M.value} Questions`),1)],8,Qp),O.value.length?(l(),i("div",Kp,[e("div",Xp,[e("span",Zp,w(O.value.length)+" Questions",1),e("div",ev,[e("button",{class:"btn btn-ghost btn-sm",onClick:a[18]||(a[18]=k=>be(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:a[19]||(a[19]=k=>be(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:a[20]||(a[20]=k=>O.value=[])},"Clear")])]),e("div",tv,[e("button",{class:"btn btn-secondary regen-btn",disabled:x(s).isGenerating,onClick:a[21]||(a[21]=k=>d(!1)),title:"Replace all questions with a new set"},[x(s).isGenerating?(l(),i("span",nv)):(l(),i("svg",lv,[...a[57]||(a[57]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),a[58]||(a[58]=q(" Regenerate ",-1))],8,ov),e("button",{class:"btn btn-ghost regen-btn",disabled:x(s).isGenerating,onClick:a[22]||(a[22]=k=>d(!0)),title:"Generate more and append to current list"},[...a[59]||(a[59]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),q(" Add More ",-1)])],8,iv)]),(l(!0),i(V,null,te(O.value,(k,Ie)=>(l(),i("div",{key:Ie,class:H(["quiz-card",{deselected:!k._selected}])},[e("div",av,[e("label",sv,[ee(e("input",{type:"checkbox","onUpdate:modelValue":Be=>k._selected=Be},null,8,rv),[[ft,k._selected]]),e("span",uv,"Q"+w(Ie+1),1)]),e("div",dv,[e("span",{class:H(["badge difficulty-badge",k.difficulty])},w(k.difficulty),3),e("span",cv,w(k.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",pv,w(k.question),1),e("div",vv,[(l(!0),i(V,null,te(k.options,(Be,Te)=>(l(),i("div",{key:Te,class:H(["q-option",Te===k.correctIndex&&"correct"])},[e("span",mv,w(["A","B","C","D"][Te]),1),e("span",null,w(Be),1),Te===k.correctIndex?(l(),i("svg",fv,[...a[60]||(a[60]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):T("",!0)],2))),128))]),k.explanation?(l(),i("div",gv,[a[61]||(a[61]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),q(" "+w(k.explanation),1)])):T("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!O.value.filter(k=>k._selected).length,onClick:P},[a[62]||(a[62]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),q(" Add "+w(O.value.filter(k=>k._selected).length)+" Selected as Quiz Slides ",1)],8,bv)])):T("",!0)],64)):p.value==="voiceover"?(l(),i(V,{key:2},[e("div",yv,[a[63]||(a[63]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),ee(e("textarea",{"onUpdate:modelValue":a[23]||(a[23]=k=>B.value=k),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[me,B.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating,onClick:$e},[x(s).isGenerating?(l(),i("span",xv)):T("",!0),q(" "+w(x(s).isGenerating?"Generating…":"Generate Script"),1)],8,hv)],64)):p.value==="improve"?(l(),i(V,{key:3},[(ne=(_=ue.value)==null?void 0:_.content)!=null&&ne.text?(l(),i("div",wv,[a[64]||(a[64]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",kv,w(ue.value.content.text.slice(0,120))+w(ue.value.content.text.length>120?"…":""),1)])):(l(),i("p",Cv,"Select a text element on the canvas to improve it.")),e("div",Sv,[a[65]||(a[65]=e("label",{class:"form-label"},"Instruction",-1)),ee(e("input",{"onUpdate:modelValue":a[24]||(a[24]=k=>f.value=k),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[me,f.value]])]),a[66]||(a[66]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ee(e("textarea",{"onUpdate:modelValue":a[25]||(a[25]=k=>f.value=k),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[me,f.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating||!ue.value&&!f.value,onClick:a[26]||(a[26]=k=>ue.value?We():ut())},[x(s).isGenerating?(l(),i("span",Iv)):T("",!0),q(" "+w(x(s).isGenerating?"Processing…":"Generate"),1)],8,$v)],64)):p.value==="translate"?(l(),i(V,{key:4},[(S=(m=ue.value)==null?void 0:m.content)!=null&&S.text?(l(),i("div",Av,[a[67]||(a[67]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Mv,w(ue.value.content.text.slice(0,120))+w(ue.value.content.text.length>120?"…":""),1)])):(l(),i("p",Ev,"Select a text element on the canvas to translate it.")),e("div",Pv,[a[69]||(a[69]=e("label",{class:"form-label"},"Target Language",-1)),ee(e("select",{"onUpdate:modelValue":a[27]||(a[27]=k=>Q.value=k),class:"select"},[...a[68]||(a[68]=[Re('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[ct,Q.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(s).isGenerating||!((W=(D=ue.value)==null?void 0:D.content)!=null&&W.text),onClick:we},[x(s).isGenerating?(l(),i("span",Nv)):T("",!0),q(" "+w(x(s).isGenerating?"Translating…":"Translate Text"),1)],8,zv),v.value?(l(),i("div",Tv,[e("div",_v,[a[70]||(a[70]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",Lv,[e("button",{class:"btn btn-ghost btn-sm",onClick:a[28]||(a[28]=k=>I.navigator.clipboard.writeText(v.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Ue,disabled:!ue.value},"Apply",8,jv)])]),e("div",Bv,w(v.value),1)])):T("",!0)],64)):p.value==="image"?(l(),i(V,{key:5},[a[73]||(a[73]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",Dv,[a[71]||(a[71]=e("label",{class:"form-label"},"Image Description",-1)),ee(e("textarea",{"onUpdate:modelValue":a[29]||(a[29]=k=>ye.value=k),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[me,ye.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Le.value||x(s).isGenerating||!ye.value,onClick:Ve},[Le.value||x(s).isGenerating?(l(),i("span",Rv)):T("",!0),q(" "+w(Le.value||x(s).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,qv),v.value?(l(),i("div",Fv,[a[72]||(a[72]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",Uv,w(v.value),1)])):T("",!0)],64)):p.value==="settings"?(l(),i("div",Vv,[e("div",Ov,[a[75]||(a[75]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:x(s).apiProvider,class:"select",onChange:a[30]||(a[30]=k=>x(s).setProvider(k.target.value))},[...a[74]||(a[74]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,Gv)]),e("div",Wv,[a[76]||(a[76]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:x(s).apiKey,class:"input",placeholder:"sk-…",onChange:a[31]||(a[31]=k=>x(s).setApiKey(k.target.value))},null,40,Hv),a[77]||(a[77]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),x(s).apiKey?T("",!0):(l(),i("div",Qv,[...a[78]||(a[78]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),q(" Running in ",-1),e("strong",null,"demo mode",-1),q(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):T("",!0),v.value&&p.value!=="settings"&&p.value!=="quiz"?(l(),i("div",Yv,[e("div",Jv,[a[79]||(a[79]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:a[32]||(a[32]=k=>v.value="")},"Clear")]),e("pre",Kv,w(v.value),1),e("div",Xv,[p.value==="generate"?(l(),i("button",{key:0,class:"btn btn-primary btn-sm",onClick:Se},w(n.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):T("",!0),p.value==="generate"?(l(),i("button",{key:1,class:"btn btn-ghost btn-sm",disabled:x(s).isGenerating,onClick:pe},[...a[80]||(a[80]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),q(" Regenerate ",-1)])],8,Zv)):T("",!0),p.value==="improve"&&ue.value?(l(),i("button",{key:2,class:"btn btn-primary btn-sm",onClick:Ze}," Apply to Element ")):T("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:a[33]||(a[33]=k=>{var Ie;return(Ie=I.navigator.clipboard)==null?void 0:Ie.writeText(v.value)})}," Copy ")])])):T("",!0),x(s).lastError?(l(),i("div",e1,[a[81]||(a[81]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),q(" "+w(x(s).lastError),1)])):T("",!0)])])}}},o1=_e(t1,[["__scopeId","data-v-697ec3ea"]]),n1={class:"theme-manager"},l1={class:"panel-section"},i1={class:"presets-grid"},a1=["title","onClick"],s1={class:"preset-preview"},r1={class:"preset-name"},u1={class:"panel-section"},d1={class:"theme-fields"},c1={class:"form-label"},p1={class:"color-row"},v1=["value","onInput"],m1=["value","onChange"],f1={class:"panel-section"},g1={class:"theme-field"},b1=["value","placeholder"],y1={class:"chart-palette-preview"},h1={class:"panel-section"},x1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},w1=["value"],k1=["value"],C1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},S1=["value"],$1=["value"],I1={class:"form-group"},A1=["value"],M1={class:"panel-section"},E1={class:"tp-chart-row"},P1={key:0,class:"apply-message success"},z1={key:1,class:"apply-message error"},N1={__name:"ThemeManager",setup(h){const s=Oe(),u=Ge(),c=$(()=>u.getProject(s.projectId)),p=$(()=>{var n;return((n=c.value)==null?void 0:n.theme)||{}}),f=$(()=>vn(p.value)),b=E(""),v=E("");function M(n){u.updateProject(s.projectId,{theme:{...p.value,...n}})}const K=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],Q=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function B(n){M(n)}function R(n,g){const y=n.content||{};return n.type==="text"?{content:{...y,fontFamily:g.fontFamily||y.fontFamily,color:g.textColor||y.color}}:n.type==="heading"?{content:{...y,fontFamily:g.headingFont||g.fontFamily||y.fontFamily,color:g.textColor||y.color}}:n.type==="shape"?{content:{...y,fillColor:g.secondaryColor||y.fillColor}}:n.type==="hotspot"?{content:{...y,bgColor:g.primaryColor||y.bgColor}}:n.type==="button"?{content:{...y,bgColor:g.primaryColor||y.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:g.fontFamily||y.fontFamily}}:n.type==="quiz"?{content:{...y,cardBgColor:g.bgColor||y.cardBgColor,questionColor:g.textColor||y.questionColor,accentColor:g.primaryColor||y.accentColor}}:n.type==="chart"?{content:{...y,...hn(g)}}:null}function Y(){M({chartPalette:""})}function C(){b.value="",v.value="";const n=s.projectId,g=c.value,y=p.value;if(!n||!g){v.value="No active project to apply theme.";return}const U=g.slides||[];let X=0;U.forEach(ve=>{(ve.backgroundType||"color")==="color"&&u.updateSlide(n,ve.id,{backgroundType:"color",background:y.bgColor||ve.background||"#ffffff"}),(ve.elements||[]).forEach(le=>{const fe=R(le,y);fe&&(u.updateElement(n,ve.id,le.id,fe),X+=1)})}),b.value=`Applied theme to ${U.length} slide${U.length===1?"":"s"} and ${X} element${X===1?"":"s"}.`}return(n,g)=>(l(),i("div",n1,[e("div",l1,[g[4]||(g[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",i1,[(l(),i(V,null,te(K,y=>e("div",{key:y.name,class:"preset-card",title:y.name,onClick:U=>B(y)},[e("div",s1,[e("div",{class:"pp-header",style:se({background:y.primaryColor})},null,4),e("div",{class:"pp-body",style:se({background:y.bgColor})},[e("div",{class:"pp-line",style:se({background:y.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:se({background:y.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:se({background:y.secondaryColor})},null,4)]),e("span",r1,w(y.name),1)],8,a1)),64))])]),e("div",u1,[g[5]||(g[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",d1,[(l(),i(V,null,te({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(y,U)=>e("div",{class:"theme-field",key:U},[e("label",c1,w(y),1),e("div",p1,[e("input",{type:"color",value:p.value[U]||"#ffffff",class:"color-input-native",onInput:X=>M({[U]:X.target.value})},null,40,v1),e("input",{value:p.value[U]||"",class:"input",onChange:X=>M({[U]:X.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,m1)])])),64))])]),e("div",f1,[g[8]||(g[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",g1,[g[6]||(g[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:p.value.chartPalette||"",class:"input",placeholder:x(Jn)(x(vn)(p.value)),onChange:g[0]||(g[0]=y=>M({chartPalette:y.target.value}))},null,40,b1),e("div",y1,[(l(!0),i(V,null,te(f.value,(y,U)=>(l(),i("span",{key:`theme-chart-${U}`,class:"chart-palette-dot",style:se({background:y})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Y},"Use auto palette")]),g[7]||(g[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",h1,[g[12]||(g[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",x1,[g[9]||(g[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:g[1]||(g[1]=y=>M({headingFont:y.target.value}))},[(l(),i(V,null,te(Q,y=>e("option",{key:y.value,value:y.value},w(y.label),9,k1)),64))],40,w1)]),e("div",C1,[g[10]||(g[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:g[2]||(g[2]=y=>M({fontFamily:y.target.value}))},[(l(),i(V,null,te(Q,y=>e("option",{key:y.value,value:y.value},w(y.label),9,$1)),64))],40,S1)]),e("div",I1,[g[11]||(g[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:g[3]||(g[3]=y=>M({fontSize:+y.target.value}))},null,40,A1)])]),e("div",M1,[g[13]||(g[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:se({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:se({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:se({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:se({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:se({background:p.value.secondaryColor})},"Badge",4),e("div",E1,[(l(!0),i(V,null,te(f.value.slice(0,5),(y,U)=>(l(),i("span",{key:`preview-chart-${U}`,class:"tp-chart-bar",style:se({background:y,height:`${22+U*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:C}," Apply Theme to Slides "),b.value?(l(),i("p",P1,w(b.value),1)):T("",!0),v.value?(l(),i("p",z1,w(v.value),1)):T("",!0)])]))}},T1=_e(N1,[["__scopeId","data-v-da2b0ce4"]]),_1={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},L1={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},j1={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},B1={class:"export-tabs tabs"},D1={class:"export-content"},q1={class:"export-options",style:{"margin-bottom":"20px"}},R1={class:"form-group"},F1={class:"export-meta"},U1={class:"meta-item"},V1={class:"meta-item"},O1={class:"meta-item"},G1={class:"export-options",style:{"margin-bottom":"20px"}},W1={class:"form-group"},H1={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Q1={class:"coming-soon"},Y1={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},J1={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},K1={key:1,class:"export-success"},X1={__name:"ExportModal",setup(h){const s=Oe(),u=Ge(),c=xn(),p=$(()=>u.getProject(s.projectId)),f=E("json"),b=E(""),v=E(""),M=E(!0);Fe(p,C=>{C&&!v.value&&(v.value=C.name||"presentation")},{immediate:!0});function K(){const C=u.exportProject(s.projectId);if(!C)return;const n=new Blob([C],{type:"application/json"}),g=URL.createObjectURL(n),y=document.createElement("a");y.href=g,y.download=`${v.value||"project"}.mediasurf.json`,y.click(),URL.revokeObjectURL(g),b.value="success",setTimeout(()=>b.value="",3e3)}function Q(C,n="presentation"){return String(C).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||n}function B(C,n){const g=pt(n);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${g.width}px;
  --lf-slide-height: ${g.height}px;
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
`}function R(){return`
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
`}async function Y(){var Me,he,ue;const C=p.value;if(!C)return;b.value="processing";const n=new Xn,g=n.folder("assets");let y=0;async function U(pe,j="media"){if((!pe||pe.startsWith("data:")||pe.startsWith("http://localhost")||pe.startsWith("blob:"))&&pe.startsWith("data:"))return pe;try{const ae=await(await fetch(pe)).blob();let oe="bin";const ge=ae.type;if(ge.includes("image/png")?oe="png":ge.includes("image/jpeg")?oe="jpg":ge.includes("image/gif")?oe="gif":ge.includes("image/svg")?oe="svg":ge.includes("image/webp")?oe="webp":ge.includes("video/mp4")?oe="mp4":ge.includes("audio/mpeg")&&(oe="mp3"),oe==="bin"){const Se=pe.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);Se&&(oe=Se[1])}y++;const xe=`${j}_${y}.${oe}`;return g.file(xe,ae),`assets/${xe}`}catch(Z){return console.warn("Could not fetch asset:",pe,Z),pe}}const X=JSON.parse(JSON.stringify([...C.slides||[]])).sort((pe,j)=>(pe.order??0)-(j.order??0));if(M.value)for(const pe of X){pe.backgroundType==="image"&&pe.backgroundImage&&(pe.backgroundImage=await U(pe.backgroundImage,"bg"));for(const j of pe.elements||[])j.type==="image"&&((Me=j.content)!=null&&Me.src)&&(j.content.src=await U(j.content.src,"img")),j.type==="video"&&((he=j.content)!=null&&he.src)&&!j.content.src.includes("youtube")&&!j.content.src.includes("youtu.be")&&(j.content.src=await U(j.content.src,"vid")),j.type==="audio"&&((ue=j.content)!=null&&ue.src)&&(j.content.src=await U(j.content.src,"aud"))}const ve=Q(v.value||C.name||"presentation"),le={name:C.name,theme:C.theme||{},settings:C.settings||{},slides:X},fe=JSON.stringify(le).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),ce=B(C.theme,C.settings),z=R(),L=`<script id="lf-data" type="application/json">${fe}<\/script>`,ie=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ve}</title>
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
${L}
<script src="script.js"><\/script>
</body>
</html>`;n.file("index.html",ie),n.file("style.css",ce),n.file("script.js",z);const G=await n.generateAsync({type:"blob"}),de=URL.createObjectURL(G),re=document.createElement("a");re.href=de,re.download=`${ve}.zip`,re.click(),URL.revokeObjectURL(de),b.value="success",setTimeout(()=>b.value="",3e3)}return(C,n)=>(l(),je(Rn,{title:"Export Project",size:"md",onClose:n[9]||(n[9]=g=>x(s).showExportModal=!1)},{footer:Xe(()=>[e("button",{class:"btn btn-secondary",onClick:n[8]||(n[8]=g=>x(s).showExportModal=!1)},"Close")]),default:Xe(()=>{var g,y,U,X,ve;return[x(c).user?(l(),i(V,{key:1},[e("div",B1,[e("button",{class:H(["tab-btn",f.value==="json"&&"active"]),onClick:n[2]||(n[2]=le=>f.value="json")},"JSON Project",2),e("button",{class:H(["tab-btn",f.value==="html"&&"active"]),onClick:n[3]||(n[3]=le=>f.value="html")},"HTML Package",2),e("button",{class:H(["tab-btn",f.value==="scorm"&&"active"]),onClick:n[4]||(n[4]=le=>f.value="scorm")},"SCORM",2)]),e("div",D1,[f.value==="json"?(l(),i(V,{key:0},[n[20]||(n[20]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",q1,[e("div",R1,[n[15]||(n[15]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ee(e("input",{type:"text","onUpdate:modelValue":n[5]||(n[5]=le=>v.value=le),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[me,v.value]])])]),e("div",F1,[e("div",U1,[n[16]||(n[16]=e("span",null,"Project",-1)),e("strong",null,w((g=p.value)==null?void 0:g.name),1)]),e("div",V1,[n[17]||(n[17]=e("span",null,"Slides",-1)),e("strong",null,w(((U=(y=p.value)==null?void 0:y.slides)==null?void 0:U.length)||0),1)]),e("div",O1,[n[18]||(n[18]=e("span",null,"Elements",-1)),e("strong",null,w(((ve=(X=p.value)==null?void 0:X.slides)==null?void 0:ve.reduce((le,fe)=>{var ce;return le+(((ce=fe.elements)==null?void 0:ce.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:K},[...n[19]||(n[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),q(" Download JSON ",-1)])])],64)):f.value==="html"?(l(),i(V,{key:1},[n[24]||(n[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",G1,[e("div",W1,[n[21]||(n[21]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ee(e("input",{type:"text","onUpdate:modelValue":n[6]||(n[6]=le=>v.value=le),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[me,v.value]])]),e("label",H1,[ee(e("input",{type:"checkbox","onUpdate:modelValue":n[7]||(n[7]=le=>M.value=le)},null,512),[[ft,M.value]]),n[22]||(n[22]=q(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),n[25]||(n[25]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:Y},[...n[23]||(n[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),q(" Download HTML ",-1)])])],64)):f.value==="scorm"?(l(),i(V,{key:2},[n[29]||(n[29]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Q1,[(l(),i("svg",Y1,[...n[26]||(n[26]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),n[27]||(n[27]=e("h4",null,"Coming Soon",-1)),n[28]||(n[28]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):T("",!0),rt(mt,{name:"fade"},{default:Xe(()=>[b.value==="processing"?(l(),i("div",J1,[...n[30]||(n[30]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),q(" Generating package... Please wait. ",-1)])])):b.value==="success"?(l(),i("div",K1,[...n[31]||(n[31]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),q(" Export successful! Check your downloads folder. ",-1)])])):T("",!0)]),_:1})])],64)):(l(),i("div",_1,[(l(),i("svg",L1,[...n[10]||(n[10]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),n[13]||(n[13]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),n[14]||(n[14]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",j1,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:n[0]||(n[0]=le=>x(c).loginWithGoogle())},[...n[11]||(n[11]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),q(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:n[1]||(n[1]=le=>x(c).loginWithMicrosoft())},[...n[12]||(n[12]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),q(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Z1=_e(X1,[["__scopeId","data-v-10fbcd07"]]),em={key:0,class:"editor-view"},tm={class:"editor-topbar"},om={class:"topbar-left"},nm={class:"project-name-wrap"},lm=["value"],im={class:"save-label"},am={class:"topbar-center"},sm={key:0,class:"slide-position"},rm={class:"topbar-right"},um={class:"editor-body"},dm={class:"authoring-rail"},cm=["onClick","data-tooltip"],pm={key:0,class:"rail-icon"},vm={key:1,class:"rail-icon"},mm={key:2,class:"rail-icon"},fm={key:3,class:"rail-icon"},gm={key:4,class:"rail-icon"},bm={key:5,class:"rail-icon"},ym={key:6,class:"rail-icon"},hm={key:7,class:"rail-icon"},xm={key:8,class:"rail-icon"},wm={class:"right-panel"},km={class:"panel-tabs"},Cm=["onClick","data-tooltip"],Sm={class:"tab-icon"},$m={class:"tab-label"},Im={class:"panel-content"},Am={key:1,class:"editor-not-found"},Mm={__name:"EditorView",setup(h){const s=Dn(),u=Bn(),c=Oe(),p=Ge(),f=xn(),b=$(()=>s.params.id),v=$(()=>p.getProject(b.value)),M=$(()=>pt(v.value)),K=$(()=>{var N;return[...((N=v.value)==null?void 0:N.slides)||[]].sort((d,P)=>d.order-P.order)}),Q=E(null),B=E(!1),R=E("deck"),{aiStore:Y,showAIModal:C,aiMode:n,aiTopic:g,aiContext:y,aiProjectName:U,aiSlideCount:X,aiQuestionCount:ve,aiDifficulty:le,aiQuestionType:fe,aiCreationError:ce,aiSubmitting:z,aiProjectNamePlaceholder:L,aiPrimaryActionLabel:O,openAICreationModal:ie,createAIProject:G}=Fn({onRequireAuth:()=>u.push({name:"dashboard"})});let de=!1,re=null;Fe(()=>v.value,N=>{if(N){if(de){de=!1;return}re&&clearTimeout(re),re=setTimeout(()=>{c.pushHistory(N)},600)}},{deep:!0}),Fe(()=>f.isAuthReady,async N=>{var d;if(N){if((d=f.user)!=null&&d.uid&&await p.ensureRemoteProjectsLoaded(),!v.value){u.push({name:"dashboard"});return}c.setProject(b.value),K.value.length>0&&c.setCurrentSlide(K.value[0].id),c.pushHistory(v.value)}},{immediate:!0});const Me=$(()=>{const N=v.value;return N?`Saved ${new Date(N.updatedAt).toLocaleTimeString()}`:""}),he=$(()=>{switch(c.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});Zn({undo:()=>{if(c.canUndo()){const N=c.undo();N&&(de=!0,p.updateProject(b.value,N))}},redo:()=>{if(c.canRedo()){const N=c.redo();N&&(de=!0,p.updateProject(b.value,N))}},delete:()=>{c.selectedElementId&&(p.deleteElement(c.projectId,c.currentSlideId,c.selectedElementId),c.clearSelection())},escape:()=>{c.clearSelection(),c.setActiveTool("select")},copy:()=>{var d,P,be,$e;const N=($e=(be=(P=(d=v.value)==null?void 0:d.slides)==null?void 0:P.find(we=>we.id===c.currentSlideId))==null?void 0:be.elements)==null?void 0:$e.find(we=>we.id===c.selectedElementId);N&&c.setClipboard(N)},paste:()=>{if(c.clipboard&&c.currentSlideId){const N=c.clipboard;p.addElement(c.projectId,c.currentSlideId,N.type,{...N,x:N.x+20,y:N.y+20,id:void 0})}},duplicate:()=>{if(c.selectedElementId){const N=p.duplicateElement(c.projectId,c.currentSlideId,c.selectedElementId);N&&c.selectElement(N.id)}},zoomIn:()=>c.zoomIn(),zoomOut:()=>c.zoomOut(),zoomReset:()=>c.zoomReset(),toggleGrid:()=>c.toggleGrid(),nudge:(N,d)=>{var be,$e,we,Ue;if(!c.selectedElementId)return;const P=(Ue=(we=($e=(be=v.value)==null?void 0:be.slides)==null?void 0:$e.find(ye=>ye.id===c.currentSlideId))==null?void 0:we.elements)==null?void 0:Ue.find(ye=>ye.id===c.selectedElementId);P&&p.updateElement(c.projectId,c.currentSlideId,c.selectedElementId,{x:P.x+N,y:P.y+d})},selectAll:()=>{var d,P,be;(((be=(P=(d=v.value)==null?void 0:d.slides)==null?void 0:P.find($e=>$e.id===c.currentSlideId))==null?void 0:be.elements)||[]).forEach(($e,we)=>c.selectElement($e.id,we>0))}});function ue(){u.push({name:"dashboard"})}function pe(){u.push({name:"preview",params:{id:b.value},query:{from:"editor"}})}function j(N="deck"){R.value=N,B.value=!0}function Z(){B.value=!1,ie(R.value)}function ae(N,d="Image"){if(!c.projectId||!c.currentSlideId||!N)return;const P=new Image;P.onload=()=>{const we=Math.min(420/P.width,280/P.height,1),Ue=Math.max(120,Math.round(P.width*we)),ye=Math.max(80,Math.round(P.height*we)),Le=Math.max(24,Math.round((M.value.width-Ue)/2)),Ve=Math.max(24,Math.round((M.value.height-ye)/2)),We=p.addElement(c.projectId,c.currentSlideId,"image",{x:Le,y:Ve,width:Ue,height:ye,content:{src:N,alt:d,objectFit:"cover"}});We&&(c.selectElement(We.id),c.setRightPanel("properties"),c.setActiveTool("select"))},P.src=N}function oe(N){const[d]=Array.from(N.target.files||[]);if(!d||!d.type.startsWith("image/"))return;const P=new FileReader;P.onload=()=>ae(String(P.result||""),d.name),P.readAsDataURL(d),N.target.value=""}function ge(){var N;(N=Q.value)==null||N.click()}const xe=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function Se(N){if(N==="text"){c.setActiveTool("text");return}if(N==="resources"){c.setActiveTool("image");return}if(N==="interactive-elements"){c.setActiveTool("hotspot");return}if(N==="interactive-questions"){c.setActiveTool("quiz");return}if(N==="widgets"){c.setActiveTool("shape");return}if(N==="insert"){ge();return}if(N==="style"){c.setRightPanel("properties");return}if(N==="background"){c.clearSelection(),c.setRightPanel("properties");return}N==="pages"&&c.toggleSlidePanel()}function Pe(N){return N==="text"?["text","heading"].includes(c.activeTool):N==="resources"?c.activeTool==="image":N==="interactive-elements"?["hotspot","button"].includes(c.activeTool):N==="interactive-questions"?c.activeTool==="quiz":N==="widgets"?["shape","video","audio","chart"].includes(c.activeTool):N==="insert"?!1:N==="style"||N==="background"?c.rightPanelTab==="properties":N==="pages"?c.showSlidePanel:!1}return(N,d)=>v.value?(l(),i("div",em,[e("input",{ref_key:"imageInputRef",ref:Q,type:"file",accept:"image/*",class:"sr-only",onChange:oe},null,544),e("header",tm,[e("div",om,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:ue,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...d[14]||(d[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),q(" Dashboard ",-1)])]),e("div",nm,[e("input",{value:v.value.name,class:"project-name-input",onChange:d[0]||(d[0]=P=>x(p).updateProject(b.value,{name:P.target.value}))},null,40,lm)]),e("span",im,w(Me.value),1)]),e("div",am,[x(c).currentSlideId?(l(),i("span",sm," Slide "+w(K.value.findIndex(P=>P.id===x(c).currentSlideId)+1)+" of "+w(K.value.length),1)):T("",!0)]),e("div",rm,[e("button",{class:H(["btn btn-ghost btn-sm",x(c).showAIPanel&&"active-btn"]),onClick:d[1]||(d[1]=P=>{x(c).showAIPanel=!x(c).showAIPanel,x(c).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...d[15]||(d[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),q(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:d[2]||(d[2]=P=>{x(c).showThemeManager=!x(c).showThemeManager,x(c).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...d[16]||(d[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),q(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:pe,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...d[17]||(d[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),q(" Preview ",-1)])]),e("button",{class:"btn btn-primary btn-sm",onClick:d[3]||(d[3]=P=>x(c).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...d[18]||(d[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),q(" Export ",-1)])])])]),rt(cc,{onOpenAiProject:j}),e("div",um,[e("aside",dm,[(l(),i(V,null,te(xe,P=>e("button",{key:P.id,class:H(["rail-option",Pe(P.id)&&"active"]),onClick:be=>Se(P.id),"data-tooltip":P.label,"data-tooltip-position":"right"},[P.id==="text"?(l(),i("span",pm,"T")):P.id==="resources"?(l(),i("span",vm,[...d[19]||(d[19]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):P.id==="interactive-elements"?(l(),i("span",mm,[...d[20]||(d[20]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):P.id==="interactive-questions"?(l(),i("span",fm,[...d[21]||(d[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):P.id==="widgets"?(l(),i("span",gm,[...d[22]||(d[22]=[Re('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-72b3a29f><rect x="3" y="3" width="7" height="7" data-v-72b3a29f></rect><rect x="14" y="3" width="7" height="7" data-v-72b3a29f></rect><rect x="14" y="14" width="7" height="7" data-v-72b3a29f></rect><rect x="3" y="14" width="7" height="7" data-v-72b3a29f></rect></svg>',1)])])):P.id==="insert"?(l(),i("span",bm,[...d[23]||(d[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):P.id==="style"?(l(),i("span",ym,[...d[24]||(d[24]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):P.id==="background"?(l(),i("span",hm,[...d[25]||(d[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):P.id==="pages"?(l(),i("span",xm,[...d[26]||(d[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):T("",!0),q(" "+w(P.label),1)],10,cm)),64))]),rt(mt,{name:"side-panel-slide"},{default:Xe(()=>[x(c).showSlidePanel?(l(),je(ml,{key:0})):T("",!0)]),_:1}),rt(pp),e("aside",wm,[e("div",km,[(l(),i(V,null,te([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],P=>e("button",{key:P.id,class:H(["panel-tab",x(c).rightPanelTab===P.id&&"active"]),onClick:be=>x(c).setRightPanel(P.id),"data-tooltip":`Open ${P.label}`,"data-tooltip-position":"bottom"},[e("span",Sm,w(P.icon),1),e("span",$m,w(P.label),1)],10,Cm)),64))]),e("div",Im,[rt(mt,{name:"editor-panel-switch",mode:"out-in"},{default:Xe(()=>[(l(),i("div",{key:he.value,class:"panel-content-view"},[x(c).rightPanelTab==="properties"?(l(),je(Gd,{key:0})):x(c).rightPanelTab==="layers"?(l(),je(Ll,{key:1})):x(c).rightPanelTab==="ai"?(l(),je(o1,{key:2})):x(c).rightPanelTab==="theme"?(l(),je(T1,{key:3})):T("",!0)]))]),_:1})])])]),x(c).showExportModal?(l(),je(Z1,{key:0})):T("",!0),B.value?(l(),je(Un,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:d[4]||(d[4]=P=>B.value=!1),onConfirm:Z})):T("",!0),x(C)?(l(),je(Vn,{key:2,mode:x(n),topic:x(g),context:x(y),"project-name":x(U),"slide-count":x(X),"question-count":x(ve),difficulty:x(le),"question-type":x(fe),"project-name-placeholder":x(L),"primary-action-label":x(O),"creation-error":x(ce),"is-submitting":x(z),"is-generating":x(Y).isGenerating,"has-api-key":!!x(Y).apiKey,onClose:d[5]||(d[5]=P=>C.value=!1),onCreate:x(G),"onUpdate:mode":d[6]||(d[6]=P=>n.value=P),"onUpdate:topic":d[7]||(d[7]=P=>g.value=P),"onUpdate:context":d[8]||(d[8]=P=>y.value=P),"onUpdate:projectName":d[9]||(d[9]=P=>U.value=P),"onUpdate:slideCount":d[10]||(d[10]=P=>X.value=P),"onUpdate:questionCount":d[11]||(d[11]=P=>ve.value=P),"onUpdate:difficulty":d[12]||(d[12]=P=>le.value=P),"onUpdate:questionType":d[13]||(d[13]=P=>fe.value=P)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):T("",!0)])):(l(),i("div",Am,[d[27]||(d[27]=e("h2",null,"Project not found",-1)),d[28]||(d[28]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:ue},"Go to Dashboard")]))}},jm=_e(Mm,[["__scopeId","data-v-72b3a29f"]]);export{jm as default};
