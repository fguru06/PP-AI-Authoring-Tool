import{O as Bo,P as Lo,v as i,F as s,B as e,C as x,H as G,I as ae,E as Me,D as X,u as h,Q as ce,L as We,G as j,K as R,q as Le,R as Do,f as I,r as P,M as te,S as at,w as qe,N as fe,i as Jo,U as Ko,n as Xo,y as et,x as Je,T as st,V as nt,z as Zo,p as en,J as jo}from"./vue-core-DtFYlhKN.js";import{u as tn,d as on}from"./vue-ecosystem-iLG-KstC.js";import{u as Oe,b as nn,M as ln,a as sn,C as an,A as rn}from"./ConfirmActionModal-Dt9XsOvn.js";import{u as Ge,g as lt,C as dn,n as un,m as cn,f as pn,a as qo}from"./projectStore-B4uwFNXn.js";import{_ as Be}from"./index-vYPsOCha.js";import{J as vn}from"./jszip-529iNPX7.js";function mn(b){function a(d){var p,E,Q,O,V,D,T,l,r,M,N,ne,pe,ge,A,q,Z;const u=d.ctrlKey||d.metaKey,v=d.key.toLowerCase(),m=d.target.tagName.toLowerCase(),f=m==="input"||m==="textarea"||d.target.isContentEditable;f&&u&&["c","v","x","a","z","y"].includes(v)||(u&&v==="z"&&!d.shiftKey?(d.preventDefault(),(p=b.undo)==null||p.call(b)):u&&(v==="y"||v==="z"&&d.shiftKey)?(d.preventDefault(),(E=b.redo)==null||E.call(b)):u&&v==="c"?(d.preventDefault(),(Q=b.copy)==null||Q.call(b)):u&&v==="v"?(d.preventDefault(),(O=b.paste)==null||O.call(b)):u&&v==="x"?(d.preventDefault(),(V=b.cut)==null||V.call(b)):u&&v==="d"?(d.preventDefault(),(D=b.duplicate)==null||D.call(b)):u&&v==="a"?(d.preventDefault(),(T=b.selectAll)==null||T.call(b)):v==="delete"||v==="backspace"?f||(d.preventDefault(),(l=b.delete)==null||l.call(b)):v==="escape"?(r=b.escape)==null||r.call(b):u&&v==="g"?(d.preventDefault(),(M=b.toggleGrid)==null||M.call(b)):u&&v==="="||u&&v==="+"?(d.preventDefault(),(N=b.zoomIn)==null||N.call(b)):u&&v==="-"?(d.preventDefault(),(ne=b.zoomOut)==null||ne.call(b)):u&&v==="0"?(d.preventDefault(),(pe=b.zoomReset)==null||pe.call(b)):v==="arrowleft"?(ge=b.nudge)==null||ge.call(b,-1,0):v==="arrowright"?(A=b.nudge)==null||A.call(b,1,0):v==="arrowup"?(q=b.nudge)==null||q.call(b,0,-1):v==="arrowdown"&&((Z=b.nudge)==null||Z.call(b,0,1)))}Bo(()=>window.addEventListener("keydown",a)),Lo(()=>window.removeEventListener("keydown",a))}const fn={class:"slide-panel"},gn={class:"slide-panel-header"},bn={class:"slide-count"},yn={class:"slides-list"},hn=["onClick","onContextmenu","onDragstart","onDrop"],xn={class:"slide-number"},wn={class:"slide-footer"},kn={class:"slide-title"},Cn=["onClick"],Sn={__name:"SlidePanel",setup(b){const a=Oe(),d=Ge(),u=I(()=>d.getProject(a.projectId)),v=I(()=>lt(u.value)),m=I(()=>{var A,q;return((q=(A=u.value)==null?void 0:A.slides)==null?void 0:q.slice().sort((Z,ie)=>Z.order-ie.order))||[]}),f=P({show:!1,x:0,y:0,slideId:null});function p(A){a.setCurrentSlide(A)}function E(){const A=m.value.findIndex(Z=>Z.id===a.currentSlideId),q=d.addSlide(a.projectId,A);q&&a.setCurrentSlide(q.id)}function Q(A){var ie,U;const q=m.value.findIndex(Y=>Y.id===A);d.deleteSlide(a.projectId,A);const Z=((ie=u.value)==null?void 0:ie.slides)||[];if(Z.length>0){const Y=Z.slice().sort((ke,he)=>ke.order-he.order),le=Math.min(q,Y.length-1);a.setCurrentSlide((U=Y[le])==null?void 0:U.id)}}function O(A,q){A.preventDefault(),f.value={show:!0,x:A.clientX,y:A.clientY,slideId:q},setTimeout(()=>window.addEventListener("click",V,{once:!0}),0)}function V(){f.value.show=!1}function D(){const A=d.duplicateSlide(a.projectId,f.value.slideId);A&&a.setCurrentSlide(A.id),V()}function T(){Q(f.value.slideId),V()}function l(A,q){A.stopPropagation(),Q(q)}function r(){const A=m.value.findIndex(q=>q.id===f.value.slideId);A>0&&d.reorderSlides(a.projectId,A,A-1),V()}function M(){const A=m.value.findIndex(q=>q.id===f.value.slideId);A<m.value.length-1&&d.reorderSlides(a.projectId,A,A+1),V()}let N=-1;function ne(A,q){N=q,A.dataTransfer.effectAllowed="move"}function pe(A,q){A.preventDefault(),N!==-1&&N!==q&&d.reorderSlides(a.projectId,N,q),N=-1}function ge(A){return A.backgroundType==="gradient"&&A.backgroundGradient?{background:A.backgroundGradient}:A.backgroundType==="image"&&A.backgroundImage?{backgroundImage:`url(${A.backgroundImage})`,backgroundSize:"cover"}:{background:A.background||"#fff"}}return(A,q)=>(i(),s("div",fn,[e("div",gn,[q[2]||(q[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",bn,x(m.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:E,"data-tooltip":"Add slide","aria-label":"Add slide"},[...q[1]||(q[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",yn,[(i(!0),s(G,null,ae(m.value,(Z,ie)=>(i(),s("div",{key:Z.id,class:X(["slide-thumb-item",h(a).currentSlideId===Z.id&&"active"]),draggable:"true",onClick:U=>p(Z.id),onContextmenu:U=>O(U,Z.id),onDragstart:U=>ne(U,ie),onDragover:q[0]||(q[0]=Me(()=>{},["prevent"])),onDrop:U=>pe(U,ie)},[e("div",xn,x(ie+1),1),e("div",{class:"slide-thumb",style:ce(ge(Z))},[(i(!0),s(G,null,ae(Z.elements.slice(0,6),U=>{var Y,le;return i(),s("div",{key:U.id,class:"mini-element",style:ce({left:U.x/v.value.width*100+"%",top:U.y/v.value.height*100+"%",width:U.width/v.value.width*100+"%",height:U.height/v.value.height*100+"%",background:U.type==="shape"?(Y=U.content)==null?void 0:Y.fillColor:U.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:U.type==="shape"&&((le=U.content)==null?void 0:le.shapeType)==="circle"?"50%":void 0})},null,4)}),128))],4),e("div",wn,[e("div",kn,x(Z.title||`Slide ${ie+1}`),1),m.value.length>1?(i(),s("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:U=>l(U,Z.id)},[...q[3]||(q[3]=[We('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9bd31ef1><polyline points="3 6 5 6 21 6" data-v-9bd31ef1></polyline><path d="M19 6l-1 14H6L5 6" data-v-9bd31ef1></path><path d="M10 11v6M14 11v6" data-v-9bd31ef1></path><path d="M9 6V4h6v2" data-v-9bd31ef1></path></svg>',1)])],8,Cn)):j("",!0)])],42,hn))),128))]),e("button",{class:"add-slide-bottom",onClick:E},[...q[4]||(q[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),R(" Add Slide ",-1)])]),(i(),Le(Do,{to:"body"},[f.value.show?(i(),s("div",{key:0,class:"context-menu",style:ce({left:f.value.x+"px",top:f.value.y+"px"})},[e("button",{class:"ctx-item",onClick:D},"Duplicate"),e("button",{class:"ctx-item",onClick:r},"Move Up"),e("button",{class:"ctx-item",onClick:M},"Move Down"),q[5]||(q[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:T},"Delete Slide")],4)):j("",!0)]))]))}},$n=Be(Sn,[["__scopeId","data-v-9bd31ef1"]]),In={class:"layer-panel"},Mn={class:"layer-header panel-section"},En={class:"panel-title",style:{"margin-bottom":"0"}},Pn={class:"layer-count"},An={key:0,class:"layers-empty"},zn={key:1,class:"layers-list"},_n=["onClick"],Nn={class:"layer-type-icon"},Tn={class:"layer-name"},jn={class:"layer-actions"},Bn=["onClick","data-tooltip"],Ln={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Dn={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},qn=["onClick","data-tooltip"],Rn={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Fn={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Un=["onClick"],On=["onClick"],Gn=["onClick"],Vn={__name:"LayerPanel",setup(b){const a=Oe(),d=Ge(),u=I(()=>d.getProject(a.projectId)),v=I(()=>{var l,r;return(r=(l=u.value)==null?void 0:l.slides)==null?void 0:r.find(M=>M.id===a.currentSlideId)}),m=I(()=>{var l;return[...((l=v.value)==null?void 0:l.elements)||[]].sort((r,M)=>(M.zIndex||0)-(r.zIndex||0))});function f(l){a.selectElement(l)}function p(l){d.updateElement(a.projectId,a.currentSlideId,l.id,{visible:!l.visible})}function E(l){d.updateElement(a.projectId,a.currentSlideId,l.id,{locked:!l.locked})}function Q(l){d.reorderElement(a.projectId,a.currentSlideId,l,"up")}function O(l){d.reorderElement(a.projectId,a.currentSlideId,l,"down")}function V(l){d.deleteElement(a.projectId,a.currentSlideId,l),a.selectedElementId===l&&a.clearSelection()}function D(l){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[l]||"◆"}function T(l){var r,M,N;return(r=l.content)!=null&&r.text?l.content.text.slice(0,24):(M=l.content)!=null&&M.label?l.content.label:(N=l.content)!=null&&N.question?l.content.question.slice(0,24):l.type.charAt(0).toUpperCase()+l.type.slice(1)}return(l,r)=>(i(),s("div",In,[e("div",Mn,[e("div",En,[r[0]||(r[0]=R(" Layers ",-1)),e("span",Pn,x(m.value.length),1)])]),m.value.length===0?(i(),s("div",An,[...r[1]||(r[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(i(),s("div",zn,[(i(!0),s(G,null,ae(m.value,M=>(i(),s("div",{key:M.id,class:X(["layer-item",h(a).selectedElementIds.includes(M.id)&&"selected",M.locked&&"locked",!M.visible&&"hidden"]),onClick:N=>f(M.id)},[e("span",Nn,x(D(M.type)),1),e("span",Tn,x(T(M)),1),e("div",jn,[e("button",{class:X(["layer-action-btn",{active:M.visible}]),onClick:Me(N=>p(M),["stop"]),"data-tooltip":M.visible?"Hide":"Show"},[M.visible?(i(),s("svg",Ln,[...r[2]||(r[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(i(),s("svg",Dn,[...r[3]||(r[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,Bn),e("button",{class:X(["layer-action-btn",{active:M.locked}]),onClick:Me(N=>E(M),["stop"]),"data-tooltip":M.locked?"Unlock":"Lock"},[M.locked?(i(),s("svg",Rn,[...r[4]||(r[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(i(),s("svg",Fn,[...r[5]||(r[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,qn),e("button",{class:"layer-action-btn",onClick:Me(N=>Q(M.id),["stop"]),"data-tooltip":"Move up"},[...r[6]||(r[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,Un),e("button",{class:"layer-action-btn",onClick:Me(N=>O(M.id),["stop"]),"data-tooltip":"Move down"},[...r[7]||(r[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,On),e("button",{class:"layer-action-btn danger",onClick:Me(N=>V(M.id),["stop"]),"data-tooltip":"Delete"},[...r[8]||(r[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Gn)])],10,_n))),128))]))]))}},Wn=Be(Vn,[["__scopeId","data-v-7407acd8"]]),Hn={class:"panel-section"},Qn={class:"preset-toolbar"},Yn=["value"],Jn=["value"],Kn=["value"],Xn={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},Zn=["onClick"],el={class:"preset-meta-chip muted"},tl={key:1,class:"import-review"},ol={class:"motion-scrubber-header"},nl={class:"preset-toolbar compact"},ll=["value"],il=["value"],sl={class:"import-list"},al=["onUpdate:modelValue"],rl={class:"import-item-title"},dl={class:"preset-meta-chip"},ul={key:0,class:"preset-meta-chip muted"},cl={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(b,{emit:a}){const d=a;return(u,v)=>(i(),s("div",Hn,[v[13]||(v[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",Qn,[e("input",{value:b.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:v[0]||(v[0]=m=>d("update:searchQuery",m.target.value))},null,40,Yn),e("select",{value:b.categoryFilter,class:"select",onChange:v[1]||(v[1]=m=>d("update:categoryFilter",m.target.value))},[v[8]||(v[8]=e("option",{value:"all"},"All categories",-1)),(i(!0),s(G,null,ae(b.availableCategories,m=>(i(),s("option",{key:`library-${m}`,value:m},x(m),9,Kn))),128))],40,Jn),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[2]||(v[2]=m=>d("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[3]||(v[3]=m=>d("export-presets"))},"Export")]),b.recentPresets.length?(i(),s("div",Xn,[v[9]||(v[9]=e("div",{class:"field-hint"},"Recently used",-1)),(i(!0),s(G,null,ae(b.recentPresets,m=>(i(),s("div",{class:"preset-item",key:`recent-${m.id}`},[e("button",{type:"button",class:"preset-chip",onClick:f=>d("apply-preset",m)},x(m.name),9,Zn),e("span",el,"Used "+x(m.usageCount)+"x",1)]))),128))])):j("",!0),b.pendingImportedPresets.length?(i(),s("div",tl,[e("div",ol,[v[10]||(v[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:v[4]||(v[4]=m=>d("clear-imports"))},"Discard")]),e("div",nl,[e("select",{value:b.importScopeFilter,class:"select",onChange:v[5]||(v[5]=m=>d("update:importScopeFilter",m.target.value))},[...v[11]||(v[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,ll),e("select",{value:b.importConflictMode,class:"select",onChange:v[6]||(v[6]=m=>d("update:importConflictMode",m.target.value))},[...v[12]||(v[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,il),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:v[7]||(v[7]=m=>d("apply-imports"))},"Merge Selected")]),e("div",sl,[(i(!0),s(G,null,ae(b.filteredPendingImports,m=>(i(),s("label",{key:`pending-${m.id}`,class:"import-item"},[te(e("input",{"onUpdate:modelValue":f=>m.selected=f,type:"checkbox"},null,8,al),[[at,m.selected]]),e("span",rl,x(m.name),1),e("span",dl,x(m.scope),1),m.category?(i(),s("span",ul,x(m.category),1)):j("",!0)]))),128))])])):j("",!0)]))}},pl=Be(cl,[["__scopeId","data-v-61f99273"]]),vl={class:"properties-panel"},ml={key:1,class:"panel-section"},fl={class:"field-hint"},gl={class:"motion-scrubber-shell"},bl={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},yl=["onClick"],hl={class:"motion-preview"},xl={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},wl={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},kl={class:"motion-card-label"},Cl={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Sl={class:"form-group"},$l={class:"form-group"},Il={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ml={class:"preset-row",style:{"margin-top":"var(--space-3)"}},El={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Pl={key:0,class:"preset-list"},Al=["onDragstart","onDragenter","onDrop"],zl=["onClick"],_l={key:0,class:"preset-meta-chip"},Nl=["onClick"],Tl=["onClick"],jl=["onClick"],Bl={key:1,class:"preset-row preset-edit-row"},Ll=["onClick"],Dl={key:1,class:"field-hint"},ql={class:"panel-section"},Rl={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Fl={class:"form-group"},Ul={class:"bg-type-tabs"},Ol=["onClick"],Gl={key:0,class:"color-row"},Vl=["value"],Wl=["value"],Hl={class:"panel-section"},Ql={class:"panel-section"},Yl={class:"canvas-size-grid"},Jl=["onClick"],Kl={class:"canvas-size-name"},Xl={class:"canvas-size-ratio"},Zl={class:"canvas-custom-card"},ei={class:"canvas-custom-header"},ti={class:"field-hint"},oi={class:"canvas-custom-inputs"},ni={class:"form-group"},li={class:"canvas-size-input-wrap"},ii=["value"],si={class:"form-group"},ai={class:"canvas-size-input-wrap"},ri=["value"],di={class:"check-row canvas-size-lock"},ui={class:"panel-section"},ci=["value"],pi={class:"form-group",style:{"margin-top":"var(--space-3)"}},vi=["value"],mi={class:"check-row"},fi=["checked"],gi={class:"panel-section"},bi={class:"check-row"},yi=["checked"],hi={class:"check-row"},xi=["checked"],wi={class:"check-row"},ki=["checked"],Ci={class:"check-row"},Si=["checked"],$i={class:"check-row"},Ii=["checked"],Mi={class:"panel-section"},Ei={class:"panel-title"},Pi={class:"element-type-badge"},Ai={class:"geo-grid"},zi={class:"form-group"},_i=["value"],Ni={class:"form-group"},Ti=["value"],ji={class:"form-group"},Bi=["value"],Li={class:"form-group"},Di=["value"],qi={class:"form-group"},Ri=["value"],Fi={class:"form-group"},Ui=["value"],Oi={class:"panel-section"},Gi={class:"motion-scrubber-shell"},Vi={class:"motion-card-grid"},Wi=["onClick"],Hi={class:"motion-preview"},Qi={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Yi={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Ji={class:"motion-card-label"},Ki={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Xi={class:"form-group"},Zi=["value"],es={class:"form-group"},ts=["value"],os={class:"preset-row",style:{"margin-top":"var(--space-3)"}},ns={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},ls={key:0,class:"preset-list"},is=["onDragstart","onDragenter","onDrop"],ss=["onClick"],as={key:0,class:"preset-meta-chip"},rs=["onClick"],ds=["onClick"],us=["onClick"],cs={key:1,class:"preset-row preset-edit-row"},ps=["onClick"],vs={key:1,class:"field-hint"},ms={key:0,class:"panel-section"},fs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gs=["value"],bs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},ys={class:"form-group"},hs=["value"],xs={class:"form-group"},ws=["value"],ks={class:"form-group",style:{"margin-top":"var(--space-3)"}},Cs=["value"],Ss=["value"],$s={class:"form-group",style:{"margin-top":"var(--space-3)"}},Is={class:"align-btns"},Ms=["onClick"],Es={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ps={class:"style-btns"},As={class:"form-group",style:{"margin-top":"var(--space-3)"}},zs={class:"color-row"},_s=["value"],Ns=["value"],Ts={class:"form-group",style:{"margin-top":"var(--space-3)"}},js=["value"],Bs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ls={class:"form-group"},Ds=["value"],qs={class:"form-group"},Rs=["value"],Fs={key:1,class:"panel-section"},Us={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Os=["value"],Gs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Vs=["value"],Ws={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hs=["value"],Qs={class:"form-group"},Ys=["value"],Js={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ks={class:"form-group"},Xs=["value"],Zs={class:"form-group"},ea=["value"],ta={key:2,class:"panel-section"},oa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},na=["value"],la={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ia={class:"color-row"},sa=["value"],aa=["value"],ra={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},da={class:"color-row"},ua=["value"],ca=["value"],pa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},va=["value"],ma={class:"form-group"},fa=["value"],ga={class:"form-group",style:{"margin-top":"var(--space-3)"}},ba=["value"],ya={key:3,class:"panel-section"},ha={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xa=["value"],wa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ka=["value"],Ca={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sa=["value"],$a={key:0,class:"form-group"},Ia=["value"],Ma={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ea={class:"form-group"},Pa=["value"],Aa={class:"form-group"},za=["value"],_a={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Na={class:"form-group"},Ta=["value"],ja={class:"form-group"},Ba=["value"],La={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Da={class:"form-group"},qa=["value"],Ra={class:"form-group"},Fa=["value"],Ua={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Oa={class:"form-group"},Ga=["value"],Va=["value"],Wa={class:"form-group"},Ha=["value"],Qa={key:4,class:"panel-section"},Ya={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ja=["value"],Ka={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xa={class:"color-row"},Za=["value"],er=["value"],tr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},or={class:"form-group"},nr=["value"],lr={class:"form-group"},ir=["value"],sr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ar=["value"],rr={class:"form-group"},dr=["value"],ur={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},cr={class:"form-group"},pr=["value"],vr={class:"form-group"},mr=["value"],fr={key:5,class:"panel-section"},gr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},br=["value"],yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hr=["value"],xr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wr=["value"],kr={class:"check-row"},Cr=["checked"],Sr={class:"check-row"},$r=["checked"],Ir={class:"check-row"},Mr=["checked"],Er={class:"check-row"},Pr=["checked"],Ar={key:6,class:"panel-section"},zr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_r=["value"],Nr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tr=["value"],jr={class:"check-row"},Br=["checked"],Lr={class:"check-row"},Dr=["checked"],qr={class:"check-row"},Rr=["checked"],Fr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ur={class:"form-group"},Or=["value"],Gr={class:"form-group"},Vr=["value"],Wr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Hr=["value"],Qr={key:7,class:"panel-section"},Yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Jr=["value"],Kr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Xr=["value"],Zr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ed=["value"],td={class:"form-group"},od=["value"],nd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ld={class:"form-group"},id=["value"],sd={class:"form-group"},ad=["value"],rd={class:"form-group",style:{"margin-top":"var(--space-3)"}},dd=["value"],ud={class:"panel-section"},cd={class:"actions-list"},pd={__name:"PropertiesPanel",setup(b){const a=Oe(),d=Ge(),u=I(()=>d.getProject(a.projectId)),v=I(()=>{var c,t;return(t=(c=u.value)==null?void 0:c.slides)==null?void 0:t.find(z=>z.id===a.currentSlideId)}),m=I(()=>{var c;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((c=u.value)==null?void 0:c.settings)||{}}}),f=I(()=>lt(m.value)),p=I(()=>cn(m.value)),E=I(()=>pn(f.value.width,f.value.height)),Q=P(!0),O=I(()=>Array.isArray(m.value.motionPresets)?m.value.motionPresets:[]),V=I(()=>O.value.filter(c=>c.scope!=="group")),D=I(()=>O.value.filter(c=>c.scope==="group")),T=I(()=>{var t;const c=new Set(a.selectedElementIds);return(((t=v.value)==null?void 0:t.elements)||[]).filter(z=>c.has(z.id))}),l=I(()=>{var c,t;return a.selectedElementId?(t=(c=v.value)==null?void 0:c.elements)==null?void 0:t.find(z=>z.id===a.selectedElementId):null}),r=I(()=>a.multiSelection||!!l.value),M=I(()=>a.multiSelection?"group":"single"),N=I(()=>{var t,z;const c=(z=(t=l.value)==null?void 0:t.animations)==null?void 0:z[0];return{type:(c==null?void 0:c.type)||"auto",delay:Number((c==null?void 0:c.delay)||0),duration:Number((c==null?void 0:c.duration)||.64)}}),ne=I(()=>{var we,ze;const c=T.value.map(Ie=>{var Ye;return((Ye=Ie.animations)==null?void 0:Ye[0])||null}),t=((we=c[0])==null?void 0:we.type)||"auto",z=Number(((ze=c[0])==null?void 0:ze.duration)||.64),ee=c.every(Ie=>((Ie==null?void 0:Ie.type)||"auto")===t),xe=c.every(Ie=>Number((Ie==null?void 0:Ie.duration)||.64)===z);return{type:ee?t:"mixed",duration:xe?z:.64}}),pe=P(0),ge=P(0),A=P(""),q=P(""),Z=P(""),ie=P(""),U=P(""),Y=P(""),le=P(""),ke=P(""),he=P(""),Ce=P(""),je=P(""),Te=P(""),de=P(""),ve=P("all"),L=P(null),J=P([]),oe=P("all"),me=P("replace"),be=P({});qe(l,c=>{c?be.value=JSON.parse(JSON.stringify(c)):be.value={}},{immediate:!0,deep:!0});function ye(c){l.value&&d.updateElement(a.projectId,a.currentSlideId,l.value.id,c)}function C(c){if(!l.value)return;const t={...l.value.content,...c};ye({content:t})}function re(c,t){const z=parseFloat(t);isNaN(z)||ye({[c]:z})}const S=P({});qe(v,c=>{c&&(S.value={...c})},{immediate:!0});function g(c){v.value&&d.updateSlide(a.projectId,v.value.id,c)}function $(c){if(!u.value)return;const t={...m.value,...c};d.updateProject(a.projectId,{settings:{...t,...un(t)}})}function Ae(c){$({slideWidth:c.width,slideHeight:c.height})}function _e(c,t){const z=Math.round(Number(t)||0);if(!z)return;const ee={[`slide${c==="width"?"Width":"Height"}`]:z};if(Q.value){const xe=f.value.width,we=f.value.height;c==="width"?ee.slideHeight=Math.round(z*(we/xe)):ee.slideWidth=Math.round(z*(xe/we))}$(ee)}function $e(c){return String(c||"").split(",").map(t=>t.trim()).filter(Boolean)}function Re(c){const t=(c==null?void 0:c.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((c==null?void 0:c.name)||"Imported Preset").trim()||"Imported Preset",category:String((c==null?void 0:c.category)||"").trim(),tags:Array.isArray(c==null?void 0:c.tags)?c.tags.map(z=>String(z).trim()).filter(Boolean):$e(c==null?void 0:c.tags),type:String((c==null?void 0:c.type)||"auto"),delay:Math.max(0,Number(c==null?void 0:c.delay)||0),duration:Math.max(.1,Number(c==null?void 0:c.duration)||.72),stepDelay:Math.max(0,Number(c==null?void 0:c.stepDelay)||0)}}const Ne=I(()=>[...new Set(O.value.map(t=>t.category).filter(Boolean))].sort((t,z)=>t.localeCompare(z))),Fe=I(()=>[...O.value].filter(c=>Number(c.usageCount||0)>0).sort((c,t)=>{const z=Number(t.lastUsedAt||0)-Number(c.lastUsedAt||0);return z!==0?z:Number(t.usageCount||0)-Number(c.usageCount||0)}).slice(0,6)),y=I(()=>oe.value==="all"?J.value:J.value.filter(c=>c.scope===oe.value));function B(c){const t=de.value.trim().toLowerCase(),z=ve.value;return z==="all"||(c.category||"")===z?t?[c.name,c.category,...c.tags||[]].filter(Boolean).some(xe=>String(xe).toLowerCase().includes(t)):!0:!1}const K=I(()=>V.value.filter(B)),se=I(()=>D.value.filter(B)),w=I(()=>Fe.value.filter(c=>M.value==="group"?c.scope==="group":c.scope!=="group"));function n(c){const t=String(c.name||"").trim();if(!t)return;const z=O.value.findIndex(we=>we.scope===c.scope&&we.name.toLowerCase()===t.toLowerCase()),ee={...c,id:z>=0?O.value[z].id:`motion-${Date.now()}`,name:t,category:String(c.category||"").trim(),tags:Array.isArray(c.tags)?c.tags:$e(c.tags)},xe=[...O.value];z>=0?xe.splice(z,1,ee):xe.push(ee),$({motionPresets:xe})}function _(c,t){const z=O.value.map(ee=>ee.id===c?{...ee,...t}:ee);$({motionPresets:z})}function H(c){const t=O.value.find(z=>z.id===c);t&&_(c,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function W(c,t){const z=O.value.filter(ze=>ze.scope===c).map(ze=>ze.name.toLowerCase()),ee=String(t||"Preset").trim()||"Preset";if(!z.includes(ee.toLowerCase()))return ee;let xe=2,we=`${ee} Copy`;for(;z.includes(we.toLowerCase());)we=`${ee} Copy ${xe}`,xe+=1;return we}function ue(c){$({motionPresets:O.value.filter(t=>t.id!==c)}),Z.value===c&&(Z.value="",ie.value="")}function Ee(c){n({...c,id:void 0,name:W(c.scope,c.name)})}function Se(c){Z.value=c.id,ie.value=c.name,U.value=c.category||"",Y.value=Array.isArray(c.tags)?c.tags.join(", "):""}function k(){Z.value="",ie.value="",U.value="",Y.value=""}function Pe(c){const t=String(ie.value||"").trim();t&&(_(c,{name:t,category:String(U.value||"").trim(),tags:$e(Y.value)}),k())}function Ve(c,t,z){if(!t||!z||t===z)return;const ee=O.value.filter(De=>De.scope===c),xe=ee.findIndex(De=>De.id===t),we=ee.findIndex(De=>De.id===z);if(xe===-1||we===-1)return;const ze=[...ee],[Ie]=ze.splice(xe,1);ze.splice(we,0,Ie);const Ye=O.value.filter(De=>De.scope!==c),Ze=[];O.value.forEach(De=>{if(De.scope===c){ze.length&&Ze.push(ze.shift());return}const ot=Ye.shift();ot&&Ze.push(ot)}),$({motionPresets:Ze})}function Ue(c){le.value=c.id,ke.value=c.id}function tt(c){le.value&&(ke.value=c.id)}function dt(c){le.value&&(Ve(c.scope,le.value,c.id),le.value="",ke.value="")}function ut(){le.value="",ke.value=""}function ct(){pe.value+=1}function pt(){ge.value+=1}function vt(c,t){g({[c]:t})}function Ro(c){const t=Math.max(0,Number(c)||0);g({duration:t})}function it(c){var ee;if(!l.value)return;const z={...((ee=l.value.animations)==null?void 0:ee[0])||{type:"auto",delay:0,duration:.64},...c};if(z.type==="auto"){ye({animations:[]});return}ye({animations:[{type:z.type||"none",delay:Math.max(0,Number(z.delay)||0),duration:Math.max(.1,Number(z.duration)||.64)}]})}const He=P("stagger-in"),Ke=P(0),Xe=P(.12),Qe=P(.72);qe(T,c=>{c.length&&(He.value=ne.value.type==="mixed"?"stagger-in":ne.value.type,Qe.value=ne.value.duration)},{immediate:!0,deep:!0});function Fo(){if(!T.value.length)return;[...T.value].sort((t,z)=>(t.y||0)!==(z.y||0)?(t.y||0)-(z.y||0):(t.x||0)-(z.x||0)).forEach((t,z)=>{if(He.value==="auto"){d.updateElement(a.projectId,a.currentSlideId,t.id,{animations:[]});return}d.updateElement(a.projectId,a.currentSlideId,t.id,{animations:[{type:He.value,delay:Math.max(0,Number(Ke.value)||0)+z*Math.max(0,Number(Xe.value)||0),duration:Math.max(.1,Number(Qe.value)||.72)}]})})}function mt(c){He.value=c.type||"stagger-in",Ke.value=Number(c.delay||0),Xe.value=Number(c.stepDelay||0),Qe.value=Number(c.duration||.72),H(c.id),pt()}function Uo(){n({scope:"group",name:q.value,category:je.value,tags:$e(Te.value),type:He.value,delay:Math.max(0,Number(Ke.value)||0),stepDelay:Math.max(0,Number(Xe.value)||0),duration:Math.max(.1,Number(Qe.value)||.72)}),q.value="",je.value="",Te.value=""}function ft(c){it({type:c.type||"auto",delay:Number(c.delay||0),duration:Number(c.duration||.72)}),H(c.id),ct()}function Oo(){n({scope:"single",name:A.value,category:he.value,tags:$e(Ce.value),type:N.value.type,delay:Math.max(0,Number(N.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(N.value.duration)||.72)}),A.value="",he.value="",Ce.value=""}function Go(){var c;(c=L.value)==null||c.click()}async function Vo(c){var ee;const t=c.target,z=(ee=t==null?void 0:t.files)==null?void 0:ee[0];if(z)try{const xe=await z.text(),we=JSON.parse(xe),ze=Array.isArray(we)?we:Array.isArray(we.motionPresets)?we.motionPresets:[];if(!ze.length)return;J.value=ze.map(Ie=>({...Re(Ie),selected:!0,importName:String((Ie==null?void 0:Ie.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function gt(){J.value=[]}function Wo(){const c=J.value.filter(z=>z.selected);if(!c.length)return;const t=[...O.value];c.forEach(z=>{const ee=t.findIndex(xe=>xe.scope===z.scope&&xe.name.toLowerCase()===z.name.toLowerCase());if(ee>=0){me.value==="replace"?t.splice(ee,1,{...t[ee],...z,id:t[ee].id}):t.push({...z,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:W(z.scope,z.name)});return}t.push(z)}),$({motionPresets:t}),gt()}function Ho(){var we;if(!O.value.length)return;const c={version:1,exportedAt:new Date().toISOString(),motionPresets:O.value.map(({id:ze,...Ie})=>Ie)},t=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),z=URL.createObjectURL(t),ee=document.createElement("a"),xe=String(((we=u.value)==null?void 0:we.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";ee.href=z,ee.download=`${xe}-motion-presets.json`,document.body.appendChild(ee),ee.click(),document.body.removeChild(ee),URL.revokeObjectURL(z)}const Qo=I(()=>[{id:`single-${pe.value}`,delay:Math.max(0,Number(N.value.delay)||0),duration:Math.max(.1,Number(N.value.duration)||.72),type:N.value.type}]),Yo=I(()=>Array.from({length:Math.min(Math.max(T.value.length,3),5)},(c,t)=>({id:`group-${ge.value}-${t}`,delay:Math.max(0,Number(Ke.value)||0)+t*Math.max(0,Number(Xe.value)||0),duration:Math.max(.1,Number(Qe.value)||.72),type:He.value}))),bt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],yt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(c,t)=>{var z,ee,xe,we,ze,Ie,Ye,Ze,De,ot,ht,xt,wt,kt,Ct,St,$t,It,Mt,Et,Pt,At,zt,_t,Nt,Tt,jt,Bt,Lt,Dt,qt,Rt,Ft,Ut,Ot,Gt,Vt,Wt,Ht,Qt,Yt,Jt,Kt,Xt,Zt,eo,to,oo,no,lo,io,so,ao,ro,uo,co,po,vo,mo,fo,go,bo,yo,ho,xo,wo,ko,Co,So,$o,Io,Mo,Eo,Po,Ao,zo,_o,No;return i(),s("div",vl,[e("input",{ref_key:"presetImportInput",ref:L,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:Vo},null,544),t[253]||(t[253]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),r.value?(i(),Le(pl,{key:0,"search-query":de.value,"category-filter":ve.value,"available-categories":Ne.value,"recent-presets":w.value,"pending-imported-presets":J.value,"filtered-pending-imports":y.value,"import-scope-filter":oe.value,"import-conflict-mode":me.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>de.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>ve.value=o),onTriggerImport:Go,onExportPresets:Ho,onApplyPreset:t[2]||(t[2]=o=>M.value==="group"?mt(o):ft(o)),onClearImports:gt,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>oe.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>me.value=o),onApplyImports:Wo},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):j("",!0),h(a).multiSelection?(i(),s("div",ml,[t[127]||(t[127]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",fl,x(T.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",gl,[e("div",{class:"motion-scrubber-header"},[t[123]||(t[123]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:pt},"Replay")]),(i(),s("div",{class:"motion-scrubber-stage",key:`group-preview-${ge.value}`},[(i(!0),s(G,null,ae(Yo.value,o=>(i(),s("span",{key:o.id,class:X(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ce({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",bl,[(i(),s(G,null,ae(bt,o=>e("button",{key:`group-${o.value}`,type:"button",class:X(["motion-card",He.value===o.value&&"active"]),onClick:F=>He.value=o.value},[e("span",hl,[e("span",{class:X(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(i(),s("span",xl)):j("",!0),o.value==="stagger-in"?(i(),s("span",wl)):j("",!0)]),e("span",kl,x(o.label),1)],10,yl)),64))]),e("div",Cl,[e("div",Sl,[t[124]||(t[124]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),te(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>Ke.value=o),class:"input"},null,512),[[fe,Ke.value]])]),e("div",$l,[t[125]||(t[125]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),te(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>Xe.value=o),class:"input"},null,512),[[fe,Xe.value]])])]),e("div",Il,[t[126]||(t[126]=e("label",{class:"form-label"},"Duration (seconds)",-1)),te(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>Qe.value=o),class:"input"},null,512),[[fe,Qe.value]])]),e("div",Ml,[te(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>q.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[fe,q.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Uo},"Save")]),e("div",El,[te(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>je.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[fe,je.value]]),te(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>Te.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[fe,Te.value]])]),se.value.length?(i(),s("div",Pl,[(i(!0),s(G,null,ae(se.value,o=>(i(),s("div",{key:o.id,class:X(["preset-item",le.value===o.id&&"dragging",ke.value===o.id&&le.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:F=>Ue(o),onDragenter:Me(F=>tt(o),["prevent"]),onDragover:t[14]||(t[14]=Me(()=>{},["prevent"])),onDrop:Me(F=>dt(o),["prevent"]),onDragend:ut},[e("button",{type:"button",class:"preset-chip",onClick:F=>mt(o)},x(o.name),9,zl),o.category?(i(),s("span",_l,x(o.category),1)):j("",!0),(i(!0),s(G,null,ae(o.tags||[],F=>(i(),s("span",{key:`${o.id}-${F}`,class:"preset-meta-chip muted"},"#"+x(F),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:F=>Ee(o)},"Duplicate",8,Nl),e("button",{type:"button",class:"preset-mini-btn",onClick:F=>Se(o)},"Rename",8,Tl),e("button",{type:"button",class:"preset-mini-btn danger",onClick:F=>ue(o.id)},"Delete",8,jl),Z.value===o.id?(i(),s("div",Bl,[te(e("input",{"onUpdate:modelValue":t[11]||(t[11]=F=>ie.value=F),class:"input"},null,512),[[fe,ie.value]]),te(e("input",{"onUpdate:modelValue":t[12]||(t[12]=F=>U.value=F),class:"input",placeholder:"Category"},null,512),[[fe,U.value]]),te(e("input",{"onUpdate:modelValue":t[13]||(t[13]=F=>Y.value=F),class:"input",placeholder:"Tags, comma separated"},null,512),[[fe,Y.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:F=>Pe(o.id)},"Save",8,Ll),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:k},"Cancel")])):j("",!0)],42,Al))),128))])):D.value.length?(i(),s("div",Dl,"No group presets match the current search.")):j("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Fo}," Apply Sequence to Selection ")])):l.value?(i(),s(G,{key:3},[e("div",Mi,[e("div",Ei,[t[153]||(t[153]=R(" Position & Size ",-1)),e("span",Pi,x(l.value.type),1)]),e("div",Ai,[e("div",zi,[t[154]||(t[154]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(l.value.x),class:"input",onChange:t[36]||(t[36]=o=>re("x",o.target.value))},null,40,_i)]),e("div",Ni,[t[155]||(t[155]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(l.value.y),class:"input",onChange:t[37]||(t[37]=o=>re("y",o.target.value))},null,40,Ti)]),e("div",ji,[t[156]||(t[156]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(l.value.width),class:"input",onChange:t[38]||(t[38]=o=>re("width",o.target.value))},null,40,Bi)]),e("div",Li,[t[157]||(t[157]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(l.value.height),class:"input",onChange:t[39]||(t[39]=o=>re("height",o.target.value))},null,40,Di)]),e("div",qi,[t[158]||(t[158]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(l.value.rotation||0),class:"input",onChange:t[40]||(t[40]=o=>re("rotation",o.target.value))},null,40,Ri)]),e("div",Fi,[t[159]||(t[159]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:l.value.opacity??1,class:"input",onChange:t[41]||(t[41]=o=>re("opacity",o.target.value))},null,40,Ui)])])]),e("div",Oi,[t[163]||(t[163]=e("div",{class:"panel-title"},"Animation",-1)),e("div",Gi,[e("div",{class:"motion-scrubber-header"},[t[160]||(t[160]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:ct},"Replay")]),(i(),s("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${pe.value}`},[(i(!0),s(G,null,ae(Qo.value,o=>(i(),s("span",{key:o.id,class:X(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:ce({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Vi,[(i(),s(G,null,ae(bt,o=>e("button",{key:o.value,type:"button",class:X(["motion-card",N.value.type===o.value&&"active"]),onClick:F=>it({type:o.value})},[e("span",Hi,[e("span",{class:X(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(i(),s("span",Qi)):j("",!0),o.value==="stagger-in"?(i(),s("span",Yi)):j("",!0)]),e("span",Ji,x(o.label),1)],10,Wi)),64))]),e("div",Ki,[e("div",Xi,[t[161]||(t[161]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:N.value.delay,class:"input",onChange:t[42]||(t[42]=o=>it({delay:o.target.value}))},null,40,Zi)]),e("div",es,[t[162]||(t[162]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:N.value.duration,class:"input",onChange:t[43]||(t[43]=o=>it({duration:o.target.value}))},null,40,ts)])]),e("div",os,[te(e("input",{"onUpdate:modelValue":t[44]||(t[44]=o=>A.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[fe,A.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Oo},"Save")]),e("div",ns,[te(e("input",{"onUpdate:modelValue":t[45]||(t[45]=o=>he.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[fe,he.value]]),te(e("input",{"onUpdate:modelValue":t[46]||(t[46]=o=>Ce.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[fe,Ce.value]])]),K.value.length?(i(),s("div",ls,[(i(!0),s(G,null,ae(K.value,o=>(i(),s("div",{key:o.id,class:X(["preset-item",le.value===o.id&&"dragging",ke.value===o.id&&le.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:F=>Ue(o),onDragenter:Me(F=>tt(o),["prevent"]),onDragover:t[50]||(t[50]=Me(()=>{},["prevent"])),onDrop:Me(F=>dt(o),["prevent"]),onDragend:ut},[e("button",{type:"button",class:"preset-chip",onClick:F=>ft(o)},x(o.name),9,ss),o.category?(i(),s("span",as,x(o.category),1)):j("",!0),(i(!0),s(G,null,ae(o.tags||[],F=>(i(),s("span",{key:`${o.id}-${F}`,class:"preset-meta-chip muted"},"#"+x(F),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:F=>Ee(o)},"Duplicate",8,rs),e("button",{type:"button",class:"preset-mini-btn",onClick:F=>Se(o)},"Rename",8,ds),e("button",{type:"button",class:"preset-mini-btn danger",onClick:F=>ue(o.id)},"Delete",8,us),Z.value===o.id?(i(),s("div",cs,[te(e("input",{"onUpdate:modelValue":t[47]||(t[47]=F=>ie.value=F),class:"input"},null,512),[[fe,ie.value]]),te(e("input",{"onUpdate:modelValue":t[48]||(t[48]=F=>U.value=F),class:"input",placeholder:"Category"},null,512),[[fe,U.value]]),te(e("input",{"onUpdate:modelValue":t[49]||(t[49]=F=>Y.value=F),class:"input",placeholder:"Tags, comma separated"},null,512),[[fe,Y.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:F=>Pe(o.id)},"Save",8,ps),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:k},"Cancel")])):j("",!0)],42,is))),128))])):V.value.length?(i(),s("div",vs,"No single-element presets match the current search.")):j("",!0),t[164]||(t[164]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))]),["text","heading"].includes(l.value.type)?(i(),s("div",ms,[t[180]||(t[180]=e("div",{class:"panel-title"},"Text",-1)),e("div",fs,[t[165]||(t[165]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(Ze=l.value.content)==null?void 0:Ze.text,class:"textarea",style:{"min-height":"64px"},onInput:t[51]||(t[51]=o=>C({text:o.target.value}))},null,40,gs)]),e("div",bs,[e("div",ys,[t[166]||(t[166]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(De=l.value.content)==null?void 0:De.fontSize,class:"input",onChange:t[52]||(t[52]=o=>C({fontSize:+o.target.value}))},null,40,hs)]),e("div",xs,[t[168]||(t[168]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(ot=l.value.content)==null?void 0:ot.fontWeight,class:"select",onChange:t[53]||(t[53]=o=>C({fontWeight:o.target.value}))},[...t[167]||(t[167]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,ws)])]),e("div",ks,[t[169]||(t[169]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(ht=l.value.content)==null?void 0:ht.fontFamily,class:"select",onChange:t[54]||(t[54]=o=>C({fontFamily:o.target.value}))},[(i(),s(G,null,ae(yt,o=>e("option",{key:o,value:o},x(o.split(",")[0]),9,Ss)),64))],40,Cs)]),e("div",$s,[t[170]||(t[170]=e("label",{class:"form-label"},"Align",-1)),e("div",Is,[(i(),s(G,null,ae(["left","center","right","justify"],o=>{var F;return e("button",{key:o,class:X(["align-btn",((F=l.value.content)==null?void 0:F.textAlign)===o&&"active"]),onClick:To=>C({textAlign:o})},x(o[0].toUpperCase()),11,Ms)}),64))])]),e("div",Es,[t[174]||(t[174]=e("label",{class:"form-label"},"Style",-1)),e("div",Ps,[e("button",{class:X(["style-btn",((xt=l.value.content)==null?void 0:xt.fontStyle)==="italic"&&"active"]),onClick:t[55]||(t[55]=o=>{var F;return C({fontStyle:((F=l.value.content)==null?void 0:F.fontStyle)==="italic"?"normal":"italic"})})},[...t[171]||(t[171]=[e("i",null,"I",-1)])],2),e("button",{class:X(["style-btn",((wt=l.value.content)==null?void 0:wt.textDecoration)==="underline"&&"active"]),onClick:t[56]||(t[56]=o=>{var F;return C({textDecoration:((F=l.value.content)==null?void 0:F.textDecoration)==="underline"?"none":"underline"})})},[...t[172]||(t[172]=[e("u",null,"U",-1)])],2),e("button",{class:X(["style-btn",((kt=l.value.content)==null?void 0:kt.textDecoration)==="line-through"&&"active"]),onClick:t[57]||(t[57]=o=>{var F;return C({textDecoration:((F=l.value.content)==null?void 0:F.textDecoration)==="line-through"?"none":"line-through"})})},[...t[173]||(t[173]=[e("s",null,"S",-1)])],2)])]),e("div",As,[t[175]||(t[175]=e("label",{class:"form-label"},"Color",-1)),e("div",zs,[e("input",{type:"color",value:((Ct=l.value.content)==null?void 0:Ct.color)||"#000",onInput:t[58]||(t[58]=o=>C({color:o.target.value})),class:"color-input-native"},null,40,_s),e("input",{value:((St=l.value.content)==null?void 0:St.color)||"#000",class:"input",onInput:t[59]||(t[59]=o=>C({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ns)])]),e("div",Ts,[t[176]||(t[176]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:(($t=l.value.content)==null?void 0:$t.lineHeight)??1.5,class:"input",onChange:t[60]||(t[60]=o=>C({lineHeight:+o.target.value}))},null,40,js)]),e("div",Bs,[e("div",Ls,[t[178]||(t[178]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((It=l.value.content)==null?void 0:It.textTransform)||"none",class:"select",onChange:t[61]||(t[61]=o=>C({textTransform:o.target.value}))},[...t[177]||(t[177]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,Ds)]),e("div",qs,[t[179]||(t[179]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Mt=l.value.content)==null?void 0:Mt.letterSpacing)??0,class:"input",onChange:t[62]||(t[62]=o=>C({letterSpacing:+o.target.value}))},null,40,Rs)])])])):j("",!0),l.value.type==="image"?(i(),s("div",Fs,[t[188]||(t[188]=e("div",{class:"panel-title"},"Image",-1)),e("div",Us,[t[181]||(t[181]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Et=l.value.content)==null?void 0:Et.src,class:"input",placeholder:"https://...",onInput:t[63]||(t[63]=o=>C({src:o.target.value}))},null,40,Os)]),e("div",Gs,[t[182]||(t[182]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Pt=l.value.content)==null?void 0:Pt.alt,class:"input",onInput:t[64]||(t[64]=o=>C({alt:o.target.value}))},null,40,Vs)]),e("div",Ws,[t[184]||(t[184]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((At=l.value.content)==null?void 0:At.objectFit)||"cover",class:"select",onChange:t[65]||(t[65]=o=>C({objectFit:o.target.value}))},[...t[183]||(t[183]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Hs)]),e("div",Qs,[t[185]||(t[185]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((zt=l.value.content)==null?void 0:zt.borderRadius)||0,class:"input",onChange:t[66]||(t[66]=o=>C({borderRadius:+o.target.value}))},null,40,Ys)]),e("div",Js,[e("div",Ks,[t[186]||(t[186]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((_t=l.value.content)==null?void 0:_t.borderWidth)||0,class:"input",onChange:t[67]||(t[67]=o=>C({borderWidth:+o.target.value}))},null,40,Xs)]),e("div",Zs,[t[187]||(t[187]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Nt=l.value.content)==null?void 0:Nt.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[68]||(t[68]=o=>C({borderColor:o.target.value}))},null,40,ea)])])])):j("",!0),l.value.type==="shape"?(i(),s("div",ta,[t[196]||(t[196]=e("div",{class:"panel-title"},"Shape",-1)),e("div",oa,[t[190]||(t[190]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((Tt=l.value.content)==null?void 0:Tt.shapeType)||"rectangle",class:"select",onChange:t[69]||(t[69]=o=>C({shapeType:o.target.value}))},[...t[189]||(t[189]=[We('<option value="rectangle" data-v-db70c4b3>Rectangle</option><option value="circle" data-v-db70c4b3>Circle</option><option value="triangle" data-v-db70c4b3>Triangle</option><option value="star" data-v-db70c4b3>Star</option><option value="arrow" data-v-db70c4b3>Arrow</option><option value="diamond" data-v-db70c4b3>Diamond</option>',6)])],40,na)]),e("div",la,[t[191]||(t[191]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",ia,[e("input",{type:"color",value:((jt=l.value.content)==null?void 0:jt.fillColor)||"#6c47ff",onInput:t[70]||(t[70]=o=>C({fillColor:o.target.value})),class:"color-input-native"},null,40,sa),e("input",{value:((Bt=l.value.content)==null?void 0:Bt.fillColor)||"#6c47ff",class:"input",onInput:t[71]||(t[71]=o=>C({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,aa)])]),e("div",ra,[t[192]||(t[192]=e("label",{class:"form-label"},"Border Color",-1)),e("div",da,[e("input",{type:"color",value:((Lt=l.value.content)==null?void 0:Lt.borderColor)||"transparent",onInput:t[72]||(t[72]=o=>C({borderColor:o.target.value})),class:"color-input-native"},null,40,ua),e("input",{value:((Dt=l.value.content)==null?void 0:Dt.borderColor)||"transparent",class:"input",onInput:t[73]||(t[73]=o=>C({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,ca)])]),e("div",pa,[t[193]||(t[193]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((qt=l.value.content)==null?void 0:qt.borderWidth)||0,class:"input",onChange:t[74]||(t[74]=o=>C({borderWidth:+o.target.value}))},null,40,va)]),e("div",ma,[t[194]||(t[194]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Rt=l.value.content)==null?void 0:Rt.borderRadius)||0,class:"input",onChange:t[75]||(t[75]=o=>C({borderRadius:+o.target.value}))},null,40,fa)]),e("div",ga,[t[195]||(t[195]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((Ft=l.value.content)==null?void 0:Ft.opacity)??1,class:"input",onChange:t[76]||(t[76]=o=>C({opacity:+o.target.value}))},null,40,ba)])])):j("",!0),l.value.type==="button"?(i(),s("div",ya,[t[212]||(t[212]=e("div",{class:"panel-title"},"Button",-1)),e("div",ha,[t[197]||(t[197]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Ut=l.value.content)==null?void 0:Ut.label,class:"input",onInput:t[77]||(t[77]=o=>C({label:o.target.value}))},null,40,xa)]),e("div",wa,[t[199]||(t[199]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Ot=l.value.content)==null?void 0:Ot.variant)||"primary",class:"select",onChange:t[78]||(t[78]=o=>C({variant:o.target.value}))},[...t[198]||(t[198]=[We('<option value="primary" data-v-db70c4b3>Primary</option><option value="secondary" data-v-db70c4b3>Secondary</option><option value="outline" data-v-db70c4b3>Outline</option><option value="ghost" data-v-db70c4b3>Ghost</option><option value="danger" data-v-db70c4b3>Danger</option>',5)])],40,ka)]),e("div",Ca,[t[201]||(t[201]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Gt=l.value.content)==null?void 0:Gt.action)||"none",class:"select",onChange:t[79]||(t[79]=o=>C({action:o.target.value}))},[...t[200]||(t[200]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Sa)]),(Vt=l.value.content)!=null&&Vt.action&&l.value.content.action!=="none"?(i(),s("div",$a,[t[202]||(t[202]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Wt=l.value.content)==null?void 0:Wt.target,class:"input",placeholder:"Slide # or https://...",onInput:t[80]||(t[80]=o=>C({target:o.target.value}))},null,40,Ia)])):j("",!0),e("div",Ma,[e("div",Ea,[t[203]||(t[203]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Ht=l.value.content)==null?void 0:Ht.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[81]||(t[81]=o=>C({bgColor:o.target.value}))},null,40,Pa)]),e("div",Aa,[t[204]||(t[204]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Qt=l.value.content)==null?void 0:Qt.textColor)||"#ffffff",class:"color-input-native",onInput:t[82]||(t[82]=o=>C({textColor:o.target.value}))},null,40,za)])]),e("div",_a,[e("div",Na,[t[205]||(t[205]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Yt=l.value.content)==null?void 0:Yt.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[83]||(t[83]=o=>C({borderColor:o.target.value}))},null,40,Ta)]),e("div",ja,[t[206]||(t[206]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Jt=l.value.content)==null?void 0:Jt.borderRadius)??8,class:"input",onChange:t[84]||(t[84]=o=>C({borderRadius:+o.target.value}))},null,40,Ba)])]),e("div",La,[e("div",Da,[t[207]||(t[207]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Kt=l.value.content)==null?void 0:Kt.fontSize)??15,class:"input",onChange:t[85]||(t[85]=o=>C({fontSize:+o.target.value}))},null,40,qa)]),e("div",Ra,[t[209]||(t[209]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Xt=l.value.content)==null?void 0:Xt.fontWeight)??600),class:"select",onChange:t[86]||(t[86]=o=>C({fontWeight:+o.target.value}))},[...t[208]||(t[208]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Fa)])]),e("div",Ua,[e("div",Oa,[t[210]||(t[210]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Zt=l.value.content)==null?void 0:Zt.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[87]||(t[87]=o=>C({fontFamily:o.target.value}))},[(i(),s(G,null,ae(yt,o=>e("option",{key:`btn-${o}`,value:o},x(o.split(",")[0]),9,Va)),64))],40,Ga)]),e("div",Wa,[t[211]||(t[211]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((eo=l.value.content)==null?void 0:eo.letterSpacing)??0,class:"input",onChange:t[88]||(t[88]=o=>C({letterSpacing:+o.target.value}))},null,40,Ha)])])])):j("",!0),l.value.type==="hotspot"?(i(),s("div",Qa,[t[222]||(t[222]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Ya,[t[214]||(t[214]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((to=l.value.content)==null?void 0:to.icon)||"?",class:"select",onChange:t[89]||(t[89]=o=>C({icon:o.target.value}))},[...t[213]||(t[213]=[We('<option value="?" data-v-db70c4b3>? (Info)</option><option value="!" data-v-db70c4b3>! (Alert)</option><option value="+" data-v-db70c4b3>+ (Plus)</option><option value="i" data-v-db70c4b3>i (Info)</option><option value="✦" data-v-db70c4b3>✦ (Star)</option>',5)])],40,Ja)]),e("div",Ka,[t[215]||(t[215]=e("label",{class:"form-label"},"Background Color",-1)),e("div",Xa,[e("input",{type:"color",value:((oo=l.value.content)==null?void 0:oo.bgColor)||"#6c47ff",onInput:t[90]||(t[90]=o=>C({bgColor:o.target.value})),class:"color-input-native"},null,40,Za),e("input",{value:((no=l.value.content)==null?void 0:no.bgColor)||"#6c47ff",class:"input",onInput:t[91]||(t[91]=o=>C({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,er)])]),e("div",tr,[e("div",or,[t[216]||(t[216]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((lo=l.value.content)==null?void 0:lo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[92]||(t[92]=o=>C({iconColor:o.target.value}))},null,40,nr)]),e("div",lr,[t[217]||(t[217]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((io=l.value.content)==null?void 0:io.borderRadius)??999,class:"input",onChange:t[93]||(t[93]=o=>C({borderRadius:+o.target.value}))},null,40,ir)])]),e("div",sr,[t[218]||(t[218]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(so=l.value.content)==null?void 0:so.popupTitle,class:"input",onInput:t[94]||(t[94]=o=>C({popupTitle:o.target.value}))},null,40,ar)]),e("div",rr,[t[219]||(t[219]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(ao=l.value.content)==null?void 0:ao.popupContent,class:"textarea",onInput:t[95]||(t[95]=o=>C({popupContent:o.target.value}))},null,40,dr)]),e("div",ur,[e("div",cr,[t[220]||(t[220]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((ro=l.value.content)==null?void 0:ro.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[96]||(t[96]=o=>C({popupBgColor:o.target.value}))},null,40,pr)]),e("div",vr,[t[221]||(t[221]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((uo=l.value.content)==null?void 0:uo.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[97]||(t[97]=o=>C({popupTextColor:o.target.value}))},null,40,mr)])])])):j("",!0),l.value.type==="video"?(i(),s("div",fr,[t[231]||(t[231]=e("div",{class:"panel-title"},"Video",-1)),e("div",gr,[t[223]||(t[223]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(co=l.value.content)==null?void 0:co.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[98]||(t[98]=o=>C({src:o.target.value}))},null,40,br)]),e("div",yr,[t[224]||(t[224]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(po=l.value.content)==null?void 0:po.poster,class:"input",onInput:t[99]||(t[99]=o=>C({poster:o.target.value}))},null,40,hr)]),e("div",xr,[t[226]||(t[226]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((vo=l.value.content)==null?void 0:vo.objectFit)||"cover",class:"select",onChange:t[100]||(t[100]=o=>C({objectFit:o.target.value}))},[...t[225]||(t[225]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,wr)]),e("label",kr,[e("input",{type:"checkbox",checked:(mo=l.value.content)==null?void 0:mo.autoplay,onChange:t[101]||(t[101]=o=>C({autoplay:o.target.checked}))},null,40,Cr),t[227]||(t[227]=R(" Autoplay ",-1))]),e("label",Sr,[e("input",{type:"checkbox",checked:((fo=l.value.content)==null?void 0:fo.controls)??!0,onChange:t[102]||(t[102]=o=>C({controls:o.target.checked}))},null,40,$r),t[228]||(t[228]=R(" Show Controls ",-1))]),e("label",Ir,[e("input",{type:"checkbox",checked:(go=l.value.content)==null?void 0:go.loop,onChange:t[103]||(t[103]=o=>C({loop:o.target.checked}))},null,40,Mr),t[229]||(t[229]=R(" Loop ",-1))]),e("label",Er,[e("input",{type:"checkbox",checked:(bo=l.value.content)==null?void 0:bo.muted,onChange:t[104]||(t[104]=o=>C({muted:o.target.checked}))},null,40,Pr),t[230]||(t[230]=R(" Muted ",-1))])])):j("",!0),l.value.type==="audio"?(i(),s("div",Ar,[t[240]||(t[240]=e("div",{class:"panel-title"},"Audio",-1)),e("div",zr,[t[232]||(t[232]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(yo=l.value.content)==null?void 0:yo.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[105]||(t[105]=o=>C({src:o.target.value}))},null,40,_r)]),e("div",Nr,[t[233]||(t[233]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(ho=l.value.content)==null?void 0:ho.label,class:"input",onInput:t[106]||(t[106]=o=>C({label:o.target.value}))},null,40,Tr)]),e("label",jr,[e("input",{type:"checkbox",checked:(xo=l.value.content)==null?void 0:xo.autoplay,onChange:t[107]||(t[107]=o=>C({autoplay:o.target.checked}))},null,40,Br),t[234]||(t[234]=R(" Autoplay ",-1))]),e("label",Lr,[e("input",{type:"checkbox",checked:((wo=l.value.content)==null?void 0:wo.controls)!==!1,onChange:t[108]||(t[108]=o=>C({controls:o.target.checked}))},null,40,Dr),t[235]||(t[235]=R(" Show Controls ",-1))]),e("label",qr,[e("input",{type:"checkbox",checked:(ko=l.value.content)==null?void 0:ko.loop,onChange:t[109]||(t[109]=o=>C({loop:o.target.checked}))},null,40,Rr),t[236]||(t[236]=R(" Loop ",-1))]),e("div",Fr,[e("div",Ur,[t[237]||(t[237]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Co=l.value.content)==null?void 0:Co.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[110]||(t[110]=o=>C({accentColor:o.target.value}))},null,40,Or)]),e("div",Gr,[t[238]||(t[238]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((So=l.value.content)==null?void 0:So.textColor)||"#555555",class:"color-input-native",onInput:t[111]||(t[111]=o=>C({textColor:o.target.value}))},null,40,Vr)])]),e("div",Wr,[t[239]||(t[239]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:(($o=l.value.content)==null?void 0:$o.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[112]||(t[112]=o=>C({bgColor:o.target.value}))},null,40,Hr)])])):j("",!0),l.value.type==="quiz"?(i(),s("div",Qr,[t[248]||(t[248]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Yr,[t[241]||(t[241]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(Io=l.value.content)==null?void 0:Io.question,class:"textarea",style:{"min-height":"60px"},onInput:t[113]||(t[113]=o=>C({question:o.target.value}))},null,40,Jr)]),e("div",Kr,[t[242]||(t[242]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(Eo=(Mo=l.value.content)==null?void 0:Mo.options)==null?void 0:Eo.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[114]||(t[114]=o=>C({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,Xr)]),e("div",Zr,[t[243]||(t[243]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((Po=l.value.content)==null?void 0:Po.correctIndex)??0,class:"input",onChange:t[115]||(t[115]=o=>C({correctIndex:+o.target.value}))},null,40,ed)]),e("div",td,[t[244]||(t[244]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(Ao=l.value.content)==null?void 0:Ao.explanation,class:"textarea",onInput:t[116]||(t[116]=o=>C({explanation:o.target.value}))},null,40,od)]),e("div",nd,[e("div",ld,[t[245]||(t[245]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((zo=l.value.content)==null?void 0:zo.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>C({cardBgColor:o.target.value}))},null,40,id)]),e("div",sd,[t[246]||(t[246]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((_o=l.value.content)==null?void 0:_o.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>C({questionColor:o.target.value}))},null,40,ad)])]),e("div",rd,[t[247]||(t[247]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((No=l.value.content)==null?void 0:No.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[119]||(t[119]=o=>C({accentColor:o.target.value}))},null,40,dd)])])):j("",!0),e("div",ud,[t[252]||(t[252]=e("div",{class:"panel-title"},"Actions",-1)),e("div",cd,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[120]||(t[120]=o=>h(d).duplicateElement(h(a).projectId,h(a).currentSlideId,l.value.id))},[...t[249]||(t[249]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),R(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[121]||(t[121]=o=>{h(a).showInteractionEditor=!0,h(a).interactionElementId=l.value.id})},[...t[250]||(t[250]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),R(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[122]||(t[122]=o=>{h(d).deleteElement(h(a).projectId,h(a).currentSlideId,l.value.id),h(a).clearSelection()})},[...t[251]||(t[251]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),R(" Delete Element ",-1)])])])])],64)):(i(),s(G,{key:2},[e("div",ql,[t[130]||(t[130]=e("div",{class:"panel-title"},"Slide Properties",-1)),e("div",Rl,[t[128]||(t[128]=e("label",{class:"form-label"},"Title",-1)),te(e("input",{"onUpdate:modelValue":t[15]||(t[15]=o=>S.value.title=o),class:"input",onInput:t[16]||(t[16]=o=>vt("title",S.value.title))},null,544),[[fe,S.value.title]])]),e("div",Fl,[t[129]||(t[129]=e("label",{class:"form-label"},"Background",-1)),e("div",Ul,[(i(),s(G,null,ae(["color","gradient","image"],o=>{var F;return e("button",{key:o,class:X(["bg-type-btn",(((F=v.value)==null?void 0:F.backgroundType)||"color")===o&&"active"]),onClick:To=>g({backgroundType:o})},x(o),11,Ol)}),64))]),(((z=v.value)==null?void 0:z.backgroundType)||"color")==="color"?(i(),s("div",Gl,[e("input",{type:"color",value:((ee=v.value)==null?void 0:ee.background)||"#ffffff",onInput:t[17]||(t[17]=o=>g({background:o.target.value})),class:"color-input-native"},null,40,Vl),e("input",{value:((xe=v.value)==null?void 0:xe.background)||"#ffffff",class:"input",onInput:t[18]||(t[18]=o=>g({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Wl)])):((we=v.value)==null?void 0:we.backgroundType)==="gradient"?te((i(),s("input",{key:1,"onUpdate:modelValue":t[19]||(t[19]=o=>S.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[20]||(t[20]=o=>g({backgroundGradient:S.value.backgroundGradient}))},null,544)),[[fe,S.value.backgroundGradient]]):te((i(),s("input",{key:2,"onUpdate:modelValue":t[21]||(t[21]=o=>S.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[22]||(t[22]=o=>g({backgroundImage:S.value.backgroundImage}))},null,544)),[[fe,S.value.backgroundImage]])])]),e("div",Hl,[t[131]||(t[131]=e("div",{class:"panel-title"},"Slide Notes",-1)),te(e("textarea",{"onUpdate:modelValue":t[23]||(t[23]=o=>S.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[24]||(t[24]=o=>vt("notes",S.value.notes))},null,544),[[fe,S.value.notes]])]),e("div",Ql,[t[140]||(t[140]=e("div",{class:"panel-title"},"Canvas Size",-1)),e("div",Yl,[(i(!0),s(G,null,ae(h(dn),o=>{var F;return i(),s("button",{key:o.id,type:"button",class:X(["canvas-size-card",((F=p.value)==null?void 0:F.id)===o.id&&"active"]),onClick:To=>Ae(o)},[e("span",{class:X(["canvas-size-icon",`canvas-size-icon-${o.id}`])},null,2),e("span",Kl,x(o.label),1),e("span",Xl,x(o.ratioLabel),1)],10,Jl)}),128))]),e("div",Zl,[e("div",ei,[t[132]||(t[132]=e("span",null,"Custom",-1)),e("span",ti,"Current ratio "+x(E.value),1)]),e("div",oi,[e("div",ni,[t[134]||(t[134]=e("label",{class:"form-label"},"Width",-1)),e("div",li,[e("input",{type:"number",min:"320",max:"4096",value:f.value.width,class:"input",onChange:t[25]||(t[25]=o=>_e("width",o.target.value))},null,40,ii),t[133]||(t[133]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[137]||(t[137]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",si,[t[136]||(t[136]=e("label",{class:"form-label"},"Height",-1)),e("div",ai,[e("input",{type:"number",min:"320",max:"4096",value:f.value.height,class:"input",onChange:t[26]||(t[26]=o=>_e("height",o.target.value))},null,40,ri),t[135]||(t[135]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",di,[te(e("input",{type:"checkbox","onUpdate:modelValue":t[27]||(t[27]=o=>Q.value=o)},null,512),[[at,Q.value]]),t[138]||(t[138]=R(" Maintain proportions ",-1))]),t[139]||(t[139]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))])]),e("div",ui,[t[145]||(t[145]=e("div",{class:"panel-title"},"Transition",-1)),e("select",{value:((ze=v.value)==null?void 0:ze.transition)||"none",class:"select",onChange:t[28]||(t[28]=o=>g({transition:o.target.value}))},[...t[141]||(t[141]=[We('<option value="none" data-v-db70c4b3>None</option><option value="fade" data-v-db70c4b3>Fade</option><option value="slide" data-v-db70c4b3>Slide</option><option value="zoom" data-v-db70c4b3>Zoom</option><option value="flip" data-v-db70c4b3>Flip</option>',5)])],40,ci),e("div",pi,[t[142]||(t[142]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Ie=v.value)==null?void 0:Ie.duration)??0,class:"input",onChange:t[29]||(t[29]=o=>Ro(o.target.value))},null,40,vi),t[143]||(t[143]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",mi,[e("input",{type:"checkbox",checked:!!((Ye=v.value)!=null&&Ye.advanceOnMediaEnd),onChange:t[30]||(t[30]=o=>g({advanceOnMediaEnd:o.target.checked}))},null,40,fi),t[144]||(t[144]=R(" Advance when slide media finishes ",-1))]),t[146]||(t[146]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))]),e("div",gi,[t[152]||(t[152]=e("div",{class:"panel-title"},"Playback",-1)),e("label",bi,[e("input",{type:"checkbox",checked:m.value.autoPlay,onChange:t[31]||(t[31]=o=>$({autoPlay:o.target.checked}))},null,40,yi),t[147]||(t[147]=R(" Autoplay preview and exported presentation ",-1))]),e("label",hi,[e("input",{type:"checkbox",checked:m.value.loop,onChange:t[32]||(t[32]=o=>$({loop:o.target.checked}))},null,40,xi),t[148]||(t[148]=R(" Loop back to the first slide at the end ",-1))]),e("label",wi,[e("input",{type:"checkbox",checked:m.value.showProgress,onChange:t[33]||(t[33]=o=>$({showProgress:o.target.checked}))},null,40,ki),t[149]||(t[149]=R(" Show progress bar in preview ",-1))]),e("label",Ci,[e("input",{type:"checkbox",checked:m.value.showNavControls,onChange:t[34]||(t[34]=o=>$({showNavControls:o.target.checked}))},null,40,Si),t[150]||(t[150]=R(" Show previous/next and dot navigation ",-1))]),e("label",$i,[e("input",{type:"checkbox",checked:m.value.allowKeyboardNav,onChange:t[35]||(t[35]=o=>$({allowKeyboardNav:o.target.checked}))},null,40,Ii),t[151]||(t[151]=R(" Allow arrow keys and space bar navigation ",-1))])])],64))])}}},vd=Be(pd,[["__scopeId","data-v-db70c4b3"]]),md={class:"editor-toolbar"},fd={class:"toolbar-group"},gd={class:"toolbar-group"},bd=["data-tooltip","onClick"],yd={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},hd={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},xd={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wd={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kd={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Cd={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Sd={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$d={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Id={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Md={class:"tool-label"},Ed={class:"toolbar-group"},Pd={class:"toolbar-group"},Ad={class:"toolbar-group"},zd={__name:"EditorToolbar",emits:["open-ai-project"],setup(b,{emit:a}){const d=a,u=Oe();Ge();const v=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"}];function m(f){u.setActiveTool(f)}return(f,p)=>(i(),s("div",md,[e("div",fd,[e("button",{class:X(["tool-btn",h(u).activeTool==="select"&&"active"]),onClick:p[0]||(p[0]=E=>m("select")),"data-tooltip":"Select (V)"},[...p[7]||(p[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),p[22]||(p[22]=e("div",{class:"toolbar-divider"},null,-1)),e("div",gd,[(i(),s(G,null,ae(v,E=>e("button",{key:E.id,class:X(["tool-btn",h(u).activeTool===E.id&&"active"]),"data-tooltip":E.tooltip,onClick:Q=>m(E.id)},[E.icon==="text"?(i(),s("svg",yd,[...p[8]||(p[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):E.icon==="heading"?(i(),s("svg",hd,[...p[9]||(p[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):E.icon==="image"?(i(),s("svg",xd,[...p[10]||(p[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):E.icon==="shape"?(i(),s("svg",wd,[...p[11]||(p[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):E.icon==="button"?(i(),s("svg",kd,[...p[12]||(p[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):E.icon==="hotspot"?(i(),s("svg",Cd,[...p[13]||(p[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):E.icon==="video"?(i(),s("svg",Sd,[...p[14]||(p[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):E.icon==="audio"?(i(),s("svg",$d,[...p[15]||(p[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):E.icon==="quiz"?(i(),s("svg",Id,[...p[16]||(p[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):j("",!0),e("span",Md,x(E.label),1)],10,bd)),64))]),p[23]||(p[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Ed,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:p[1]||(p[1]=E=>d("open-ai-project")),"data-tooltip":"Create a new AI project"},[...p[17]||(p[17]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),p[24]||(p[24]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",Pd,[e("button",{class:"tool-btn",onClick:p[2]||(p[2]=E=>h(u).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...p[18]||(p[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:p[3]||(p[3]=E=>h(u).zoomReset())},x(Math.round(h(u).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:p[4]||(p[4]=E=>h(u).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...p[19]||(p[19]=[We('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="11" cy="11" r="8" data-v-53bae632></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-53bae632></line><line x1="11" y1="8" x2="11" y2="14" data-v-53bae632></line><line x1="8" y1="11" x2="14" y2="11" data-v-53bae632></line></svg>',1)])])]),p[25]||(p[25]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Ad,[e("button",{class:X(["tool-btn",h(u).showGrid&&"active"]),onClick:p[5]||(p[5]=E=>h(u).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...p[20]||(p[20]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:X(["tool-btn",h(u).snapToGrid&&"active"]),onClick:p[6]||(p[6]=E=>h(u).toggleSnap()),"data-tooltip":"Snap to grid"},[...p[21]||(p[21]=[We('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="5" cy="5" r="1" data-v-53bae632></circle><circle cx="12" cy="5" r="1" data-v-53bae632></circle><circle cx="19" cy="5" r="1" data-v-53bae632></circle><circle cx="5" cy="12" r="1" data-v-53bae632></circle><circle cx="12" cy="12" r="1" data-v-53bae632></circle><circle cx="19" cy="12" r="1" data-v-53bae632></circle><circle cx="5" cy="19" r="1" data-v-53bae632></circle><circle cx="12" cy="19" r="1" data-v-53bae632></circle><circle cx="19" cy="19" r="1" data-v-53bae632></circle></svg>',1)])],2)])]))}},_d=Be(zd,[["__scopeId","data-v-53bae632"]]),Nd=["value"],Td=["value"],jd=["onMousedown"],Bd={key:1,class:"selection-border locked-border"},Ld={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(b){const a=b,d=Oe(),u=Ge(),v=Jo("canvasScale",P(1)),m=I(()=>d.projectId),f=I(()=>d.currentSlideId),p=I(()=>d.selectedElementIds.includes(a.element.id)),E=I(()=>a.element.locked),Q=I(()=>a.element.visible!==!1),O=I(()=>{var L,J;return((J=(L=a.element.animations)==null?void 0:L[0])==null?void 0:J.type)||"auto"}),V=[{value:"auto",label:"Auto"},{value:"none",label:"None"},{value:"fade-up",label:"Fade"},{value:"fade-left",label:"Left"},{value:"fade-right",label:"Right"},{value:"zoom-in",label:"Zoom"},{value:"pop-in",label:"Pop"},{value:"stagger-in",label:"Stagger"}];let D=!1,T=0,l=0,r=new Map;function M(L){var me;if(E.value||L.target.classList.contains("resize-handle"))return;const J=L.ctrlKey||L.metaKey||L.shiftKey;p.value?J&&d.selectElement(a.element.id,!0):d.selectElement(a.element.id,J),d.setActiveTool("select"),D=!1,T=L.clientX,l=L.clientY,r.clear();const oe=(me=u.getProject(m.value))==null?void 0:me.slides.find(be=>be.id===f.value);oe&&d.selectedElementIds.forEach(be=>{const ye=oe.elements.find(C=>C.id===be);ye&&!ye.locked&&r.set(be,{x:ye.x,y:ye.y})}),window.addEventListener("mousemove",N),window.addEventListener("mouseup",ne),L.stopPropagation()}function N(L){const J=(L.clientX-T)/v.value,oe=(L.clientY-l)/v.value;!D&&(Math.abs(J)>3||Math.abs(oe)>3)&&(D=!0),D&&r.forEach((me,be)=>{let ye=me.x+J,C=me.y+oe;if(d.snapToGrid&&d.gridSize){const re=d.gridSize;ye=Math.round(ye/re)*re,C=Math.round(C/re)*re}u.updateElement(m.value,f.value,be,{x:ye,y:C})})}function ne(L){D||!(L.ctrlKey||L.metaKey||L.shiftKey)&&d.selectedElementIds.length>1&&d.selectElement(a.element.id,!1),D=!1,window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",ne)}const pe=["n","ne","e","se","s","sw","w","nw"];let ge=!1,A="",q=0,Z=0,ie=0,U=0,Y=0,le=0;function ke(L,J){E.value||(L.stopPropagation(),L.preventDefault(),ge=!0,A=J,q=L.clientX,Z=L.clientY,ie=a.element.width,U=a.element.height,Y=a.element.x,le=a.element.y,window.addEventListener("mousemove",he),window.addEventListener("mouseup",Ce))}function he(L){if(!ge)return;const J=v.value,oe=(L.clientX-q)/J,me=(L.clientY-Z)/J,be=20;let ye=Y,C=le,re=ie,S=U;if(A.includes("e")&&(re=Math.max(be,ie+oe)),A.includes("s")&&(S=Math.max(be,U+me)),A.includes("w")){const g=Math.max(be,ie-oe);ye=Y+(ie-g),re=g}if(A.includes("n")){const g=Math.max(be,U-me);C=le+(U-g),S=g}if(d.snapToGrid&&d.gridSize){const g=d.gridSize;re=Math.round(re/g)*g,S=Math.round(S/g)*g,ye=Math.round(ye/g)*g,C=Math.round(C/g)*g}u.updateElement(m.value,f.value,a.element.id,{x:ye,y:C,width:re,height:S})}function Ce(){ge=!1,window.removeEventListener("mousemove",he),window.removeEventListener("mouseup",Ce)}function je(){["text","heading"].includes(a.element.type)&&d.setRightPanel("properties")}const Te=I(()=>({position:"absolute",left:`${a.element.x}px`,top:`${a.element.y}px`,width:`${a.element.width}px`,height:`${a.element.height}px`,transform:`rotate(${a.element.rotation||0}deg)`,opacity:a.element.opacity??1,zIndex:a.element.zIndex||1,cursor:E.value?"not-allowed":"move",visibility:Q.value?"visible":"hidden",userSelect:"none"}));function de(L){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[L]||"auto"}function ve(L){var oe;if(E.value)return;if(L==="auto"){u.updateElement(m.value,f.value,a.element.id,{animations:[]});return}const J=((oe=a.element.animations)==null?void 0:oe[0])||{};u.updateElement(m.value,f.value,a.element.id,{animations:[{type:L,delay:Math.max(0,Number(J.delay)||0),duration:Math.max(.1,Number(J.duration)||.64)}]})}return(L,J)=>(i(),s("div",{class:X(["element-wrapper",p.value&&"selected",E.value&&"locked"]),style:ce(Te.value),onMousedown:M,onDblclick:je},[Ko(L.$slots,"default",{},void 0),p.value&&!E.value?(i(),s(G,{key:0},[J[3]||(J[3]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"motion-chip",onMousedown:J[1]||(J[1]=Me(()=>{},["stop"]))},[J[2]||(J[2]=e("span",{class:"motion-chip-label"},"Motion",-1)),e("select",{class:"motion-chip-select",value:O.value,onChange:J[0]||(J[0]=oe=>ve(oe.target.value))},[(i(),s(G,null,ae(V,oe=>e("option",{key:oe.value,value:oe.value},x(oe.label),9,Td)),64))],40,Nd)],32),(i(),s(G,null,ae(pe,oe=>e("div",{key:oe,class:X(["resize-handle",`handle-${oe}`]),style:ce({cursor:de(oe)}),onMousedown:Me(me=>ke(me,oe),["stop"])},null,46,jd)),64))],64)):j("",!0),p.value&&E.value?(i(),s("div",Bd)):j("",!0)],38))}},Dd=Be(Ld,[["__scopeId","data-v-179c0a50"]]),qd=["contenteditable"],rt={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(b){const a=b,d=I(()=>a.element.content||{}),u=Oe(),v=Ge(),m=P(!1),f=P(null),p=P("");qe(()=>d.value.text,D=>{m.value||(p.value=D||(a.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function E(){u.selectedElementId===a.element.id&&(m.value=!0,Xo(()=>{if(f.value){f.value.focus();const D=document.createRange();D.selectNodeContents(f.value),D.collapse(!1);const T=window.getSelection();T.removeAllRanges(),T.addRange(D)}}))}function Q(D){}function O(D){m.value&&D.stopPropagation()}function V(){if(m.value=!1,f.value){const D=f.value.innerText;p.value=D,v.updateElement(u.projectId,u.currentSlideId,a.element.id,{content:{...a.element.content,text:D}})}}return(D,T)=>(i(),s("div",{class:"text-element",ref_key:"textRef",ref:f,contenteditable:m.value,onDblclick:E,onBlur:V,onInput:Q,onMousedown:O,style:ce({fontSize:(d.value.fontSize||16)+"px",fontFamily:d.value.fontFamily||"Inter, sans-serif",fontWeight:d.value.fontWeight||"normal",fontStyle:d.value.fontStyle||"normal",textDecoration:d.value.textDecoration||"none",textAlign:d.value.textAlign||"left",color:d.value.color||"#1a1a2e",lineHeight:d.value.lineHeight||1.5,textTransform:d.value.textTransform||"none",letterSpacing:(d.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:m.value?"2px solid var(--primary)":"none",cursor:m.value?"text":"inherit",userSelect:m.value?"text":"none"})},x(p.value),45,qd))}},Rd=["src","alt"],Fd={key:1,class:"image-placeholder"},Ud={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Od={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(b){return(a,d)=>{var u,v,m,f;return i(),s("div",{class:"image-element",style:ce({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((u=b.element.content)==null?void 0:u.borderRadius)||0)+"px",border:`${((v=b.element.content)==null?void 0:v.borderWidth)||0}px solid ${((m=b.element.content)==null?void 0:m.borderColor)||"transparent"}`})},[(f=b.element.content)!=null&&f.src?(i(),s("img",{key:0,src:b.element.content.src,alt:b.element.content.alt||"",style:ce({width:"100%",height:"100%",objectFit:b.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,Rd)):(i(),s("div",Fd,[(i(),s("svg",Ud,[...d[0]||(d[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),d[1]||(d[1]=e("span",null,"Image",-1))]))],4)}}},Gd=Be(Od,[["__scopeId","data-v-401e9ff3"]]),Vd={class:"shape-element",style:{width:"100%",height:"100%"}},Wd=["width","height"],Hd=["points","fill","stroke","stroke-width"],Qd={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(b){const a=b,d=I(()=>a.element.content||{}),u=I(()=>{const f=d.value.shapeType||"rectangle",p={width:"100%",height:"100%",background:d.value.fillColor||"#6c47ff",border:`${d.value.borderWidth||0}px solid ${d.value.borderColor||"transparent"}`,opacity:d.value.opacity??1};return f==="circle"?{...p,borderRadius:"50%"}:f==="rectangle"?{...p,borderRadius:(d.value.borderRadius||0)+"px"}:p}),v=I(()=>["triangle","star","arrow","diamond"].includes(d.value.shapeType)),m=I(()=>{const f=a.element.width||150,p=a.element.height||100,E=d.value.shapeType;if(E==="triangle")return`${f/2},0 ${f},${p} 0,${p}`;if(E==="diamond")return`${f/2},0 ${f},${p/2} ${f/2},${p} 0,${p/2}`;if(E==="arrow")return`0,${p*.3} ${f*.6},${p*.3} ${f*.6},0 ${f},${p/2} ${f*.6},${p} ${f*.6},${p*.7} 0,${p*.7}`;if(E==="star"){const Q=f/2,O=p/2,V=Math.min(f,p)/2,D=V*.4;let T="";for(let l=0;l<10;l++){const r=(l*36-90)*Math.PI/180,M=l%2===0?V:D;T+=`${Q+M*Math.cos(r)},${O+M*Math.sin(r)} `}return T.trim()}return""});return(f,p)=>(i(),s("div",Vd,[v.value?(i(),s("svg",{key:1,width:b.element.width,height:b.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:m.value,fill:d.value.fillColor||"#6c47ff",stroke:d.value.borderColor||"none","stroke-width":d.value.borderWidth||0},null,8,Hd)],8,Wd)):(i(),s("div",{key:0,style:ce(u.value)},null,4))]))}},Yd={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(b){const a=b,d=I(()=>a.element.content||{}),u=I(()=>{const v={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},m=v[d.value.variant||"primary"]||v.primary;return{...m,background:d.value.bgColor||m.background,color:d.value.textColor||m.color,border:d.value.borderColor?`1px solid ${d.value.borderColor}`:m.border,borderRadius:(d.value.borderRadius??8)+"px"}});return(v,m)=>(i(),s("div",{class:"button-element",style:ce({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(d.value.fontSize??15)+"px",fontWeight:d.value.fontWeight??600,letterSpacing:(d.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:d.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...u.value})},x(d.value.label||"Button"),5))}},Jd={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Kd={class:"popup-header"},Xd={class:"popup-body"},Zd={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(b){const a=b,d=I(()=>a.element.content||{}),u=P(!1);function v(m){m.stopPropagation(),u.value=!u.value}return(m,f)=>(i(),s("div",Jd,[e("div",{class:"hotspot-btn",style:ce({width:"100%",height:"100%",background:d.value.bgColor||"#6c47ff",borderRadius:(d.value.borderRadius??999)>=999?"50%":(d.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:d.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Me(v,["stop"])},x(d.value.icon||"?"),5),et(st,{name:"fade"},{default:Je(()=>[u.value?(i(),s("div",{key:0,class:"hotspot-popup",style:ce({background:d.value.popupBgColor||"#ffffff",color:d.value.popupTextColor||"#1a1a2e"})},[e("div",Kd,[e("strong",null,x(d.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:f[0]||(f[0]=Me(p=>u.value=!1,["stop"]))},"×")]),e("div",Xd,x(d.value.popupContent||"Add your content in the properties panel."),1)],4)):j("",!0)]),_:1})]))}},eu=Be(Zd,[["__scopeId","data-v-ef5f15f6"]]),tu={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},ou=["src"],nu=["src","poster","autoplay","controls","loop","muted"],lu={key:2,class:"video-placeholder"},iu={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},su={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(b){const a=b,d=I(()=>a.element.content||{}),u=I(()=>{const m=d.value.src||"";return m.includes("youtube")||m.includes("youtu.be")}),v=I(()=>{var f,p;const m=d.value.src||"";if(u.value){const E=(f=m.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:f[1];return E?`https://www.youtube.com/embed/${E}`:""}if(m.includes("vimeo.com")){const E=(p=m.match(/vimeo\.com\/(\d+)/))==null?void 0:p[1];return E?`https://player.vimeo.com/video/${E}`:""}return""});return(m,f)=>(i(),s("div",tu,[v.value?(i(),s("iframe",{key:0,src:v.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,ou)):d.value.src&&!v.value?(i(),s("video",{key:1,src:d.value.src,poster:d.value.poster,autoplay:d.value.autoplay,controls:d.value.controls!==!1,loop:d.value.loop,muted:d.value.muted,style:ce({width:"100%",height:"100%",objectFit:d.value.objectFit||"cover"})},null,12,nu)):(i(),s("div",lu,[(i(),s("svg",iu,[...f[0]||(f[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),f[1]||(f[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},au=Be(su,[["__scopeId","data-v-dfea1a16"]]),ru=["stroke"],du=["src","controls","autoplay","loop"],uu={key:1,style:{"font-size":"11px",color:"#aaa"}},cu={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(b){return(a,d)=>{var u,v,m,f,p,E,Q,O,V;return i(),s("div",{class:"audio-element",style:ce({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((u=b.element.content)==null?void 0:u.bgColor)||"#ede7ff",border:`1px solid ${((v=b.element.content)==null?void 0:v.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(i(),s("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((m=b.element.content)==null?void 0:m.accentColor)||"#6c47ff","stroke-width":"2"},[...d[1]||(d[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,ru)),e("span",{style:ce({fontSize:"13px",color:((f=b.element.content)==null?void 0:f.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},x(((p=b.element.content)==null?void 0:p.label)||"Audio Player"),5),(E=b.element.content)!=null&&E.src?(i(),s("audio",{key:0,src:b.element.content.src,controls:((Q=b.element.content)==null?void 0:Q.controls)!==!1,autoplay:(O=b.element.content)==null?void 0:O.autoplay,loop:(V=b.element.content)==null?void 0:V.loop,style:{height:"28px","max-width":"180px"},onMousedown:d[0]||(d[0]=Me(()=>{},["stop"]))},null,40,du)):(i(),s("span",uu,"No source"))],4)}}},pu={class:"quiz-options"},vu=["onClick"],mu={class:"opt-letter"},fu={class:"opt-text"},gu={key:0},bu={class:"quiz-actions"},yu=["disabled"],hu={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(b){const a=b,d=I(()=>a.element.content||{}),u=P(null),v=P(!1);function m(Q){v.value||(u.value=Q)}function f(){u.value!==null&&(v.value=!0)}function p(){u.value=null,v.value=!1}const E=I(()=>v.value&&u.value===(d.value.correctIndex??0));return(Q,O)=>(i(),s("div",{class:"quiz-element",style:ce({width:"100%",height:"100%",background:d.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":d.value.accentColor||"#6c47ff"})},[e("p",{style:ce({fontSize:"15px",fontWeight:600,color:d.value.questionColor||"#1a1a2e",lineHeight:1.4})},x(d.value.question||"Question text…"),5),e("div",pu,[(i(!0),s(G,null,ae(d.value.options||[],(V,D)=>(i(),s("div",{key:D,class:X(["quiz-opt",u.value===D&&"selected",v.value&&D===d.value.correctIndex&&"correct",v.value&&u.value===D&&D!==d.value.correctIndex&&"wrong"]),onClick:T=>m(D)},[e("span",mu,x(String.fromCharCode(65+D)),1),e("span",fu,x(V),1)],10,vu))),128))]),v.value?(i(),s("div",{key:0,class:X(["quiz-feedback",E.value?"correct":"wrong"])},[R(x(E.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!E.value&&d.value.explanation?(i(),s("span",gu,x(d.value.explanation),1)):j("",!0)],2)):j("",!0),e("div",bu,[v.value?(i(),s("button",{key:1,class:"quiz-btn secondary",onClick:p},"Try Again")):(i(),s("button",{key:0,class:"quiz-btn primary",disabled:u.value===null,onClick:f},"Submit",8,yu))])],4))}},xu=Be(hu,[["__scopeId","data-v-ca2bd187"]]),wu={key:0,class:"canvas-empty"},ku={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},Cu=["value"],Su={key:1,class:"drop-hint"},$u={class:"canvas-info-bar"},Iu=["disabled"],Mu={class:"slide-index"},Eu=["disabled"],Pu={key:0},Au={__name:"EditorCanvas",setup(b){const a=Oe(),d=Ge(),u=P(null),v=P(null),m=P(1),f=I(()=>m.value*a.zoomLevel);en("canvasScale",f);const p=I(()=>d.getProject(a.projectId)),E=I(()=>lt(p.value)),Q=I(()=>E.value.width),O=I(()=>E.value.height),V=I(()=>{var y,B;return(B=(y=p.value)==null?void 0:y.slides)==null?void 0:B.find(K=>K.id===a.currentSlideId)}),D=I(()=>{var y;return[...((y=p.value)==null?void 0:y.slides)||[]].sort((B,K)=>B.order-K.order)}),T=I(()=>D.value.findIndex(y=>y.id===a.currentSlideId)),l=I(()=>{var y;return{autoPlay:!1,motionPresets:[],...((y=p.value)==null?void 0:y.settings)||{}}}),r=I(()=>(Array.isArray(l.value.motionPresets)?l.value.motionPresets:[]).filter(y=>y.scope==="group")),M=I(()=>{const y=new Set(a.selectedElementIds);return A.value.filter(B=>y.has(B.id))}),N=P(""),ne=I(()=>V.value?V.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:l.value.autoPlay&&Number(V.value.duration||0)>0?{label:`Auto ${Number(V.value.duration).toFixed(Number(V.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function pe(){const y=r.value.find(K=>K.id===N.value);if(!y||!M.value.length)return;[...M.value].sort((K,se)=>(K.y||0)!==(se.y||0)?(K.y||0)-(se.y||0):(K.x||0)-(se.x||0)).forEach((K,se)=>{if(y.type==="auto"){d.updateElement(a.projectId,a.currentSlideId,K.id,{animations:[]});return}d.updateElement(a.projectId,a.currentSlideId,K.id,{animations:[{type:y.type,delay:Math.max(0,Number(y.delay)||0)+se*Math.max(0,Number(y.stepDelay)||0),duration:Math.max(.1,Number(y.duration)||.72)}]})}),d.updateProject(a.projectId,{settings:{...l.value,motionPresets:(l.value.motionPresets||[]).map(K=>K.id===y.id?{...K,usageCount:Math.max(0,Number(K.usageCount||0))+1,lastUsedAt:Date.now()}:K)}})}function ge(){if(!r.value.length){N.value="";return}r.value.some(y=>y.id===N.value)||(N.value=r.value[0].id)}const A=I(()=>{var y;return[...((y=V.value)==null?void 0:y.elements)||[]].sort((B,K)=>(B.zIndex||0)-(K.zIndex||0))}),q=I(()=>{const y=V.value;return y?y.backgroundType==="gradient"&&y.backgroundGradient?{background:y.backgroundGradient}:y.backgroundType==="image"&&y.backgroundImage?{backgroundImage:`url(${y.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:y.background||"#fff"}:{background:"#fff"}}),Z=I(()=>`scale(${f.value})`);function ie(){if(!u.value)return;const{clientWidth:y,clientHeight:B}=u.value,K=(y-80)/Q.value,se=(B-80)/O.value;m.value=Math.min(K,se,1)}let U=null;Bo(()=>{ie(),U=new ResizeObserver(ie),u.value&&U.observe(u.value),ge()}),Lo(()=>U==null?void 0:U.disconnect()),qe(r,()=>{ge()},{deep:!0,immediate:!0}),qe(E,()=>{ie()},{deep:!0});const Y=P({x:0,y:0}),le=P({x:0,y:0}),ke=P(!1),he=P(!1),Ce=I(()=>{if(!ke.value)return null;const y=Math.min(Y.value.x,le.value.x),B=Math.min(Y.value.y,le.value.y),K=Math.abs(le.value.x-Y.value.x),se=Math.abs(le.value.y-Y.value.y);return{x:y,y:B,width:K,height:se}});function je(y){!ke.value&&(y.target===v.value||y.target===y.currentTarget)&&a.clearSelection()}function Te(y){return y?Array.from(y.files||[]).some(B=>B.type.startsWith("image/")):!1}function de(y,B,K){if(!y||!y.type.startsWith("image/"))return;const se=new FileReader;se.onload=()=>{const w=String(se.result||"");if(!w)return;const n=new Image;n.onload=()=>{const _=v.value.getBoundingClientRect(),H=(B-_.left)/f.value,W=(K-_.top)/f.value,Se=Math.min(420/n.width,280/n.height,1),k=Math.max(120,Math.round(n.width*Se)),Pe=Math.max(80,Math.round(n.height*Se)),Ve=Math.max(0,Math.min(Q.value-k,Math.round(H-k/2))),Ue=Math.max(0,Math.min(O.value-Pe,Math.round(W-Pe/2))),tt=d.addElement(a.projectId,a.currentSlideId,"image",{x:Ve,y:Ue,width:k,height:Pe,content:{src:w,alt:y.name,objectFit:"cover"}});tt&&(a.selectElement(tt.id),a.setActiveTool("select"),a.setRightPanel("properties"))},n.src=w},se.readAsDataURL(y)}function ve(y){Te(y.dataTransfer)&&(y.preventDefault(),y.dataTransfer.dropEffect="copy",he.value=!0)}function L(y){var B;(B=y.currentTarget)!=null&&B.contains(y.relatedTarget)||(he.value=!1)}function J(y){if(!Te(y.dataTransfer))return;y.preventDefault(),he.value=!1;const B=Array.from(y.dataTransfer.files||[]).find(K=>K.type.startsWith("image/"));B&&de(B,y.clientX,y.clientY)}function oe(y){const B=a.activeTool;if(y.target!==v.value&&y.target!==y.currentTarget)return;y.preventDefault(),y.stopPropagation();const K=v.value.getBoundingClientRect(),se=(y.clientX-K.left)/f.value,w=(y.clientY-K.top)/f.value;if(B==="select"){ke.value=!0,Y.value={x:se,y:w},le.value={x:se,y:w};const H=ue=>{le.value={x:(ue.clientX-K.left)/f.value,y:(ue.clientY-K.top)/f.value}},W=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",W);const ue=Ce.value;if(ue&&(ue.width>2||ue.height>2)){const Ee=A.value.filter(Se=>{const k=Se.x,Pe=Se.y,Ve=Se.width||100,Ue=Se.height||100;return k<ue.x+ue.width&&k+Ve>ue.x&&Pe<ue.y+ue.height&&Pe+Ue>ue.y}).map(Se=>Se.id);Ee.length>0?a.setSelection(Ee):a.clearSelection()}else a.clearSelection();setTimeout(()=>{ke.value=!1},0)};window.addEventListener("mousemove",H),window.addEventListener("mouseup",W);return}const n=H=>a.snapToGrid?Math.round(H/a.gridSize)*a.gridSize:H,_=d.addElement(a.projectId,a.currentSlideId,B,{x:n(se-75),y:n(w-40)});_&&(a.selectElement(_.id),a.setActiveTool("select"),a.setRightPanel("properties"))}const me=I(()=>{if(!a.showGrid)return{};const y=a.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${y}px ${y}px`}}),be={text:rt,heading:rt,image:Gd,shape:Qd,button:Yd,hotspot:eu,video:au,audio:cu,quiz:xu,divider:"div"};function ye(y){return be[y]||rt}function C(y){var B,K;return y.type!=="divider"?{}:{borderTop:`${((B=y.content)==null?void 0:B.thickness)||2}px solid ${((K=y.content)==null?void 0:K.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const re=P({show:!1,x:0,y:0,elId:null});function S(y,B){y.preventDefault(),re.value={show:!0,x:y.clientX,y:y.clientY,elId:B},a.selectElement(B),setTimeout(()=>window.addEventListener("click",g,{once:!0}),0)}function g(){re.value.show=!1}function $(){if(re.value.elId){const y=d.duplicateElement(a.projectId,a.currentSlideId,re.value.elId);y&&a.selectElement(y.id)}g()}function Ae(){re.value.elId&&(d.deleteElement(a.projectId,a.currentSlideId,re.value.elId),a.clearSelection()),g()}function _e(){re.value.elId&&d.reorderElement(a.projectId,a.currentSlideId,re.value.elId,"up"),g()}function $e(){re.value.elId&&d.reorderElement(a.projectId,a.currentSlideId,re.value.elId,"down"),g()}function Re(){const y=T.value,B=d.addSlide(a.projectId,y);B&&a.setCurrentSlide(B.id)}function Ne(){const y=T.value;y>0&&a.setCurrentSlide(D.value[y-1].id)}function Fe(){const y=T.value;y<D.value.length-1&&a.setCurrentSlide(D.value[y+1].id)}return(y,B)=>{var K;return i(),s("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:u},[V.value?(i(),s(G,{key:1},[e("div",{class:"canvas-zoom-wrapper",style:ce({transform:Z.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:v,class:"slide-canvas",style:ce({width:Q.value+"px",height:O.value+"px",...q.value,...me.value}),onClick:je,onMousedown:oe,onDragover:ve,onDragleave:L,onDrop:J,onContextmenu:B[2]||(B[2]=Me(()=>{},["prevent"]))},[h(a).multiSelection&&r.value.length?(i(),s("div",{key:0,class:"selection-preset-chip",onMousedown:B[1]||(B[1]=Me(()=>{},["stop"]))},[B[6]||(B[6]=e("span",{class:"selection-preset-label"},"Sequence",-1)),te(e("select",{"onUpdate:modelValue":B[0]||(B[0]=se=>N.value=se),class:"selection-preset-select"},[(i(!0),s(G,null,ae(r.value,se=>(i(),s("option",{key:se.id,value:se.id},x(se.name),9,Cu))),128))],512),[[nt,N.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Me(pe,["stop"])},"Apply")],32)):j("",!0),(i(!0),s(G,null,ae(A.value,se=>(i(),Le(Dd,{key:se.id,element:se,onContextmenu:Me(w=>S(w,se.id),["stop"])},{default:Je(()=>[(i(),Le(Zo(ye(se.type)),{element:se,style:ce(se.type==="divider"?C(se):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),h(a).activeTool!=="select"||he.value?(i(),s("div",Su,x(he.value?"Drop image to insert it on this slide":`Click anywhere to add ${h(a).activeTool}`),1)):j("",!0),ke.value&&Ce.value?(i(),s("div",{key:2,class:"selection-marquee",style:ce({left:Ce.value.x+"px",top:Ce.value.y+"px",width:Ce.value.width+"px",height:Ce.value.height+"px"})},null,4)):j("",!0)],36)],4),e("div",$u,[e("button",{class:"bar-btn",onClick:Re},"Add page"),e("button",{class:"bar-btn icon",onClick:Ne,disabled:T.value<=0},"◀",8,Iu),e("span",Mu,x(T.value+1)+" / "+x(D.value.length),1),e("button",{class:"bar-btn icon",onClick:Fe,disabled:T.value>=D.value.length-1},"▶",8,Eu),e("span",null,x(Q.value)+" × "+x(O.value)+"px",1),B[7]||(B[7]=e("span",null,"·",-1)),e("span",null,x(((K=V.value.elements)==null?void 0:K.length)||0)+" elements",1),B[8]||(B[8]=e("span",null,"·",-1)),e("span",{class:X(["playback-badge",`playback-badge-${ne.value.tone}`])},x(ne.value.label),3),h(a).hasSelection?(i(),s("span",Pu,"· "+x(h(a).selectedElementIds.length)+" selected",1)):j("",!0),e("button",{class:"bar-btn ai",onClick:B[3]||(B[3]=se=>h(a).setRightPanel("ai"))},"AI")])],64)):(i(),s("div",wu,[(i(),s("svg",ku,[...B[4]||(B[4]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),B[5]||(B[5]=e("p",null,"Select a slide to start editing",-1))])),(i(),Le(Do,{to:"body"},[re.value.show?(i(),s("div",{key:0,class:"ctx-menu",style:ce({left:re.value.x+"px",top:re.value.y+"px"})},[e("button",{class:"ctx-item",onClick:$},"Duplicate"),e("button",{class:"ctx-item",onClick:_e},"Bring Forward"),e("button",{class:"ctx-item",onClick:$e},"Send Backward"),B[9]||(B[9]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Ae},"Delete")],4)):j("",!0)]))],512)}}},zu=Be(Au,[["__scopeId","data-v-8f48c3e0"]]),_u={class:"ai-panel"},Nu={class:"ai-mode-tabs"},Tu=["onClick"],ju={class:"ai-content"},Bu={class:"form-group"},Lu={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},Du={key:0,class:"form-group"},qu={key:1,class:"form-group"},Ru={class:"form-group"},Fu={class:"form-group"},Uu={class:"prompt-label-row"},Ou={key:1,class:"prompt-auto-badge"},Gu={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},Vu=["disabled"],Wu={key:0,class:"spinner"},Hu={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Qu={key:3,class:"creative-options-wrap"},Yu={class:"result-header"},Ju={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Ku={key:1,class:"creative-options-list"},Xu={class:"creative-title"},Zu={class:"creative-angle"},ec=["onClick"],tc={class:"form-group"},oc={class:"quiz-config-row"},nc={class:"form-group",style:{flex:"1"}},lc={class:"form-group",style:{flex:"1"}},ic={class:"form-group"},sc={class:"qtype-btns"},ac=["onClick"],rc={class:"qtype-icon"},dc={class:"form-group"},uc={class:"form-group"},cc={class:"prompt-label-row"},pc={key:1,class:"prompt-auto-badge"},vc=["disabled"],mc={key:0,class:"spinner"},fc={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},gc={key:0,class:"quiz-results"},bc={class:"quiz-results-header"},yc={class:"form-label"},hc={class:"quiz-header-actions"},xc={class:"regen-row"},wc=["disabled"],kc={key:0,class:"spinner spinner-sm"},Cc={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Sc=["disabled"],$c={class:"quiz-card-header"},Ic={class:"quiz-card-check"},Mc=["onUpdate:modelValue"],Ec={class:"q-num"},Pc={class:"q-badges"},Ac={class:"badge type-badge"},zc={class:"q-question"},_c={class:"q-options"},Nc={class:"q-option-letter"},Tc={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},jc={key:0,class:"q-explanation"},Bc=["disabled"],Lc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Dc=["disabled"],qc={key:0,class:"spinner"},Rc={key:0,class:"selected-text-preview"},Fc={class:"text-preview"},Uc={key:1,class:"ai-hint"},Oc={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},Gc=["disabled"],Vc={key:0,class:"spinner"},Wc={key:0,class:"selected-text-preview"},Hc={class:"text-preview"},Qc={key:1,class:"ai-hint"},Yc={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},Jc=["disabled"],Kc={key:0,class:"spinner"},Xc={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Zc={class:"result-header"},ep={class:"result-actions"},tp=["disabled"],op={class:"textarea result-display"},np={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},lp=["disabled"],ip={key:0,class:"spinner"},sp={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},ap={class:"textarea result-display",style:{color:"var(--color-primary)"}},rp={key:6,class:"ai-settings"},dp={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},up=["value"],cp={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},pp=["value"],vp={key:0,class:"demo-notice"},mp={key:7,class:"result-area"},fp={class:"result-header"},gp={class:"result-pre"},bp={class:"result-actions"},yp=["disabled"],hp={key:8,class:"ai-error"},xp={__name:"AIAssistant",setup(b){const a=nn(),d=Oe(),u=Ge(),v=P("generate"),m=P(""),f=P(""),p=P("");qe(v,()=>{p.value=""});const E=P(4),Q=P("general"),O=P("Spanish"),V=P(""),D=P(""),T=P(""),l=P(!1),r=P("single"),M=P(5),N=P("slide"),ne=P([]),pe=P(""),ge=I(()=>{const w=f.value.trim()||"[your topic]";if(r.value==="deck"){let H=`Create a complete ${M.value}-slide learning deck about "${w}".`;return D.value.trim()&&(H+=`
Additional context: ${D.value.trim()}`),H+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,H+=`
Make each slide distinct, logically sequenced, and specific to "${w}".`,H}let _=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[Q.value]||"educational slide"} about "${w}".`;return D.value.trim()&&(_+=`
Additional context: ${D.value.trim()}`),_+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${w}" — no generic placeholders.`,_});qe(ge,w=>{l.value||(T.value=w)},{immediate:!0});function A(){T.value=ge.value,l.value=!1}const q=P(""),Z=P("intermediate"),ie=P("multiple-choice"),U=P(""),Y=P([]),le=P(""),ke=P(!1),he=I(()=>{const w=q.value.trim()||"[your topic]",n={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},_={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let H=`Generate ${E.value} ${n[Z.value]} ${_[ie.value]} quiz questions about "${w}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return U.value.trim()&&(H+=`
Learning objective: ${U.value.trim()}`),H});qe(he,w=>{ke.value||(le.value=w)},{immediate:!0});function Ce(){le.value=he.value,ke.value=!1}const je=I(()=>u.getProject(d.projectId)),Te=I(()=>{var w,n;return(n=(w=je.value)==null?void 0:w.slides)==null?void 0:n.find(_=>_.id===d.currentSlideId)}),de=I(()=>{var w,n;return d.selectedElementId?(n=(w=Te.value)==null?void 0:w.elements)==null?void 0:n.find(_=>_.id===d.selectedElementId):null});async function ve(){if(!f.value.trim()&&!T.value.trim())return;if(p.value="",ne.value=[],pe.value="",r.value==="deck"){const n=await a.generateSlideDeck(f.value,M.value,{objective:D.value,customPrompt:T.value});if(n!=null&&n.length){const _=n.map(H=>L(H));p.value=JSON.stringify({slides:_},null,2),be(_,{replaceGenerated:!0})}return}if(N.value==="options"){await re();return}const w=await a.generateSlideContent(f.value,Q.value,D.value,T.value);if(w){const n=L(w);p.value=JSON.stringify(n,null,2),ye(n,{replaceGenerated:!0})}}function L(w){const n=w&&typeof w=="object"?w:{},H=(Array.isArray(n.bullets)?n.bullets:typeof n.bullets=="string"?n.bullets.split(`
`):[]).map(W=>String(W||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(n.title||f.value||"Untitled Slide").trim(),subtitle:String(n.subtitle||"").trim(),bullets:H,callout:String(n.callout||"").trim()}}function J(w,n){var W,ue,Ee;const _=(ue=(W=u.getProject(w))==null?void 0:W.slides)==null?void 0:ue.find(Se=>Se.id===n);if(!((Ee=_==null?void 0:_.elements)!=null&&Ee.length))return;_.elements.filter(Se=>{var k;return((k=Se.meta)==null?void 0:k.source)==="ai-content"}).map(Se=>Se.id).forEach(Se=>{u.deleteElement(w,n,Se)})}function oe(w,n,_,H){return u.addElement(w,n,_,{...H,meta:{...H.meta||{},source:"ai-content"}})}function me(w,n,_,{replaceGenerated:H=!1}={}){var W;if(!(!w||!n)){if(H&&J(w,n),_.title&&(u.updateSlide(w,n,{title:_.title}),oe(w,n,"heading",{x:60,y:40,width:840,height:80,content:{text:_.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),_.subtitle&&oe(w,n,"text",{x:60,y:130,width:840,height:50,content:{text:_.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(W=_.bullets)!=null&&W.length){const ue=_.bullets.map(Ee=>`• ${Ee}`).join(`
`);oe(w,n,"text",{x:60,y:_.subtitle?200:150,width:840,height:200,content:{text:ue,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}_.callout&&(oe(w,n,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),oe(w,n,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${_.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function be(w,{replaceGenerated:n=!1}={}){if(!d.currentSlideId)return;const _=d.projectId;if(!_||!Array.isArray(w)||!w.length)return;w.map(W=>L(W)).forEach(W=>{const ue=u.addSlide(_);ue&&me(_,ue.id,W,{replaceGenerated:n})})}function ye(w=null,{replaceGenerated:n=!1}={}){if(!d.currentSlideId)return;let _=w;if(!_){if(!p.value)return;try{_=JSON.parse(p.value)}catch(Ee){console.warn("Could not parse AI content:",Ee);return}}const H=L(_),W=d.projectId,ue=d.currentSlideId;!W||!ue||me(W,ue,H,{replaceGenerated:n})}function C(){if(p.value){if(r.value==="deck"){try{const w=JSON.parse(p.value),n=Array.isArray(w)?w:w==null?void 0:w.slides;if(!Array.isArray(n)||!n.length)return;be(n,{replaceGenerated:!0})}catch{return}return}ye()}}async function re(){const w=f.value.trim()||"[your topic]",n=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${Q.value}" slide about "${w}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,_=await a.generate(n,{type:"creativeOptions",topic:w,slideType:Q.value});if(_)try{const H=JSON.parse(_.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(H))throw new Error("Options must be an array");ne.value=H.slice(0,3).map((W,ue)=>({title:String((W==null?void 0:W.title)||`Option ${ue+1}`),angle:String((W==null?void 0:W.angle)||""),prompt:String((W==null?void 0:W.prompt)||"")})).filter(W=>W.prompt.trim()),ne.value.length||(pe.value="No usable creative options were returned. Try generating again.")}catch{pe.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function S(w){w!=null&&w.prompt&&(T.value=w.prompt,l.value=!0,N.value="slide",await ve())}async function g(w=!1){if(!q.value.trim()&&!le.value.trim())return;w||(Y.value=[]);const n=await a.generateQuiz(q.value,E.value,{difficulty:Z.value,questionType:ie.value,objective:U.value,customPrompt:le.value});if(n)if(w){const _=new Set(Y.value.map(W=>W.question)),H=n.filter(W=>!_.has(W.question)).map(W=>({...W,_selected:!0}));Y.value=[...Y.value,...H]}else Y.value=n.map(_=>({..._,_selected:!0}))}async function $(){const w=Y.value.filter(_=>_._selected);if(!w.length)return;const n=d.projectId;w.forEach((_,H)=>{const W=u.addSlide(n);W&&(u.addElement(n,W.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:_.question,options:_.options,correctIndex:_.correctIndex,explanation:_.explanation||""}}),u.updateSlide(n,W.id,{title:`Q${H+1}: ${_.question.slice(0,40)}…`}))}),Y.value=[]}function Ae(w){Y.value.forEach(n=>n._selected=w)}async function _e(){if(!V.value.trim())return;const w=await a.generateVoiceoverScript(V.value);w&&(p.value=w)}async function $e(){var _,H;const w=(H=(_=de.value)==null?void 0:_.content)==null?void 0:H.text;if(!w)return;const n=await a.generateTranslation(w,O.value);n&&(p.value=n)}async function Re(){!p.value||!de.value||u.updateElement(d.projectId,d.currentSlideId,de.value.id,{content:{...de.value.content,text:p.value}})}const Ne=P(""),Fe=P(!1);async function y(){if(Ne.value.trim()){Fe.value=!0,p.value="Optimizing prompt...";try{let w=Ne.value;const n=await a.generateImagePrompt(Ne.value);n&&(w=n.replace(/```(json)?\n?/g,"").trim()),p.value="Painting image... this takes about 10-20 seconds. Please wait.";const _=Math.floor(Math.random()*1e6),H=`https://image.pollinations.ai/prompt/${encodeURIComponent(w)}?width=600&height=400&nologo=true&seed=${_}`;await new Promise((W,ue)=>{const Ee=new Image;Ee.onload=W,Ee.onerror=ue,Ee.src=H}),u.addElement(d.projectId,d.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:H,objectFit:"cover"}}),p.value="Image added to slide!"}catch{p.value="Failed to generate image. Try a different prompt."}finally{Fe.value=!1}}}async function B(){var n,_;if(!((_=(n=de.value)==null?void 0:n.content)!=null&&_.text))return;const w=await a.improveText(de.value.content.text,m.value||"Make it clearer and more engaging");w&&(p.value=w)}async function K(){!p.value||!de.value||u.updateElement(d.projectId,d.currentSlideId,de.value.id,{content:{...de.value.content,text:p.value}})}async function se(){if(!m.value.trim())return;const w=await a.generate(m.value);w&&(p.value=w)}return(w,n)=>{var _,H,W,ue,Ee,Se;return i(),s("div",_u,[e("div",Nu,[(i(),s(G,null,ae([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],k=>e("button",{key:k.id,class:X(["ai-mode-btn",v.value===k.id&&"active"]),onClick:Pe=>v.value=k.id},x(k.label),11,Tu)),64))]),e("div",ju,[v.value==="generate"?(i(),s(G,{key:0},[e("div",Bu,[n[34]||(n[34]=e("label",{class:"form-label"},[R("Topic / Subject "),e("span",{class:"required"},"*")],-1)),te(e("input",{"onUpdate:modelValue":n[0]||(n[0]=k=>f.value=k),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:jo(ve,["enter"])},null,544),[[fe,f.value]])]),e("div",Lu,[e("button",{class:X(["output-mode-btn",r.value==="single"&&"active"]),onClick:n[1]||(n[1]=k=>r.value="single")},"Single Slide",2),e("button",{class:X(["output-mode-btn",r.value==="deck"&&"active"]),onClick:n[2]||(n[2]=k=>r.value="deck")},"Slide Deck",2)]),r.value==="single"?(i(),s("div",Du,[n[36]||(n[36]=e("label",{class:"form-label"},"Slide Type",-1)),te(e("select",{"onUpdate:modelValue":n[3]||(n[3]=k=>Q.value=k),class:"select"},[...n[35]||(n[35]=[We('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[nt,Q.value]])])):(i(),s("div",qu,[n[37]||(n[37]=e("label",{class:"form-label"},"Number of Slides",-1)),te(e("input",{"onUpdate:modelValue":n[4]||(n[4]=k=>M.value=k),class:"input",type:"number",min:"1",max:"20"},null,512),[[fe,M.value,void 0,{number:!0}]]),n[38]||(n[38]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",Ru,[n[39]||(n[39]=e("label",{class:"form-label"},[R("Description "),e("span",{class:"optional"},"(optional)")],-1)),te(e("textarea",{"onUpdate:modelValue":n[5]||(n[5]=k=>D.value=k),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[fe,D.value]])]),e("div",Fu,[e("div",Uu,[n[41]||(n[41]=e("label",{class:"form-label"},"AI Prompt",-1)),l.value?(i(),s("button",{key:0,class:"prompt-reset-btn",onClick:A,title:"Reset to auto-generated prompt"},[...n[40]||(n[40]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),R(" Reset ",-1)])])):(i(),s("span",Ou,"auto"))]),te(e("textarea",{"onUpdate:modelValue":n[6]||(n[6]=k=>T.value=k),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:n[7]||(n[7]=k=>l.value=!0),spellcheck:"false"},null,544),[[fe,T.value]]),n[42]||(n[42]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),r.value==="single"?(i(),s("div",Gu,[e("button",{class:X(["output-mode-btn",N.value==="slide"&&"active"]),onClick:n[8]||(n[8]=k=>N.value="slide")},"Show on Slide",2),e("button",{class:X(["output-mode-btn",N.value==="options"&&"active"]),onClick:n[9]||(n[9]=k=>N.value="options")},"Creative Options",2)])):j("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:h(a).isGenerating||!f.value.trim()&&!T.value.trim()||r.value==="deck"&&(!M.value||M.value<1||M.value>20),onClick:ve},[h(a).isGenerating?(i(),s("span",Wu)):(i(),s("svg",Hu,[...n[43]||(n[43]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),R(" "+x(h(a).isGenerating?"Generating…":r.value==="deck"?p.value?`Regenerate ${M.value} Slides`:`Generate ${M.value} Slides`:N.value==="slide"?p.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,Vu),r.value==="single"&&N.value==="options"&&(ne.value.length||pe.value)?(i(),s("div",Qu,[e("div",Yu,[n[44]||(n[44]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[10]||(n[10]=k=>{ne.value=[],pe.value=""})},"Clear")]),pe.value?(i(),s("div",Ju,[n[45]||(n[45]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),R(" "+x(pe.value),1)])):(i(),s("div",Ku,[(i(!0),s(G,null,ae(ne.value,(k,Pe)=>(i(),s("article",{key:Pe,class:"creative-option-card"},[e("h4",Xu,x(k.title),1),e("p",Zu,x(k.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:Ve=>S(k)},"Use This Option",8,ec)]))),128))]))])):j("",!0)],64)):v.value==="quiz"?(i(),s(G,{key:1},[e("div",tc,[n[46]||(n[46]=e("label",{class:"form-label"},[R("Quiz Topic "),e("span",{class:"required"},"*")],-1)),te(e("input",{"onUpdate:modelValue":n[11]||(n[11]=k=>q.value=k),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:jo(g,["enter"])},null,544),[[fe,q.value]])]),e("div",oc,[e("div",nc,[n[48]||(n[48]=e("label",{class:"form-label"},"Questions",-1)),te(e("select",{"onUpdate:modelValue":n[12]||(n[12]=k=>E.value=k),class:"select"},[...n[47]||(n[47]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[nt,E.value,void 0,{number:!0}]])]),e("div",lc,[n[50]||(n[50]=e("label",{class:"form-label"},"Difficulty",-1)),te(e("select",{"onUpdate:modelValue":n[13]||(n[13]=k=>Z.value=k),class:"select"},[...n[49]||(n[49]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[nt,Z.value]])])]),e("div",ic,[n[51]||(n[51]=e("label",{class:"form-label"},"Question Type",-1)),e("div",sc,[(i(),s(G,null,ae([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],k=>e("button",{key:k.id,class:X(["qtype-btn",ie.value===k.id&&"active"]),onClick:Pe=>ie.value=k.id},[e("span",rc,x(k.icon),1),e("span",null,x(k.label),1)],10,ac)),64))])]),e("div",dc,[n[52]||(n[52]=e("label",{class:"form-label"},[R("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),te(e("input",{"onUpdate:modelValue":n[14]||(n[14]=k=>U.value=k),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[fe,U.value]])]),e("div",uc,[e("div",cc,[n[54]||(n[54]=e("label",{class:"form-label"},"AI Prompt",-1)),ke.value?(i(),s("button",{key:0,class:"prompt-reset-btn",onClick:Ce,title:"Reset to auto-generated prompt"},[...n[53]||(n[53]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),R(" Reset ",-1)])])):(i(),s("span",pc,"auto"))]),te(e("textarea",{"onUpdate:modelValue":n[15]||(n[15]=k=>le.value=k),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:n[16]||(n[16]=k=>ke.value=!0),spellcheck:"false"},null,544),[[fe,le.value]]),n[55]||(n[55]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:h(a).isGenerating||!q.value.trim()&&!le.value.trim(),onClick:n[17]||(n[17]=k=>g(!1))},[h(a).isGenerating?(i(),s("span",mc)):(i(),s("svg",fc,[...n[56]||(n[56]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),R(" "+x(h(a).isGenerating?"Generating…":`Generate ${E.value} Questions`),1)],8,vc),Y.value.length?(i(),s("div",gc,[e("div",bc,[e("span",yc,x(Y.value.length)+" Questions",1),e("div",hc,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[18]||(n[18]=k=>Ae(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:n[19]||(n[19]=k=>Ae(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:n[20]||(n[20]=k=>Y.value=[])},"Clear")])]),e("div",xc,[e("button",{class:"btn btn-secondary regen-btn",disabled:h(a).isGenerating,onClick:n[21]||(n[21]=k=>g(!1)),title:"Replace all questions with a new set"},[h(a).isGenerating?(i(),s("span",kc)):(i(),s("svg",Cc,[...n[57]||(n[57]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),n[58]||(n[58]=R(" Regenerate ",-1))],8,wc),e("button",{class:"btn btn-ghost regen-btn",disabled:h(a).isGenerating,onClick:n[22]||(n[22]=k=>g(!0)),title:"Generate more and append to current list"},[...n[59]||(n[59]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),R(" Add More ",-1)])],8,Sc)]),(i(!0),s(G,null,ae(Y.value,(k,Pe)=>(i(),s("div",{key:Pe,class:X(["quiz-card",{deselected:!k._selected}])},[e("div",$c,[e("label",Ic,[te(e("input",{type:"checkbox","onUpdate:modelValue":Ve=>k._selected=Ve},null,8,Mc),[[at,k._selected]]),e("span",Ec,"Q"+x(Pe+1),1)]),e("div",Pc,[e("span",{class:X(["badge difficulty-badge",k.difficulty])},x(k.difficulty),3),e("span",Ac,x(k.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",zc,x(k.question),1),e("div",_c,[(i(!0),s(G,null,ae(k.options,(Ve,Ue)=>(i(),s("div",{key:Ue,class:X(["q-option",Ue===k.correctIndex&&"correct"])},[e("span",Nc,x(["A","B","C","D"][Ue]),1),e("span",null,x(Ve),1),Ue===k.correctIndex?(i(),s("svg",Tc,[...n[60]||(n[60]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):j("",!0)],2))),128))]),k.explanation?(i(),s("div",jc,[n[61]||(n[61]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),R(" "+x(k.explanation),1)])):j("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!Y.value.filter(k=>k._selected).length,onClick:$},[n[62]||(n[62]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),R(" Add "+x(Y.value.filter(k=>k._selected).length)+" Selected as Quiz Slides ",1)],8,Bc)])):j("",!0)],64)):v.value==="voiceover"?(i(),s(G,{key:2},[e("div",Lc,[n[63]||(n[63]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),te(e("textarea",{"onUpdate:modelValue":n[23]||(n[23]=k=>V.value=k),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[fe,V.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:h(a).isGenerating,onClick:_e},[h(a).isGenerating?(i(),s("span",qc)):j("",!0),R(" "+x(h(a).isGenerating?"Generating…":"Generate Script"),1)],8,Dc)],64)):v.value==="improve"?(i(),s(G,{key:3},[(H=(_=de.value)==null?void 0:_.content)!=null&&H.text?(i(),s("div",Rc,[n[64]||(n[64]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Fc,x(de.value.content.text.slice(0,120))+x(de.value.content.text.length>120?"…":""),1)])):(i(),s("p",Uc,"Select a text element on the canvas to improve it.")),e("div",Oc,[n[65]||(n[65]=e("label",{class:"form-label"},"Instruction",-1)),te(e("input",{"onUpdate:modelValue":n[24]||(n[24]=k=>m.value=k),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[fe,m.value]])]),n[66]||(n[66]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),te(e("textarea",{"onUpdate:modelValue":n[25]||(n[25]=k=>m.value=k),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[fe,m.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:h(a).isGenerating||!de.value&&!m.value,onClick:n[26]||(n[26]=k=>de.value?B():se())},[h(a).isGenerating?(i(),s("span",Vc)):j("",!0),R(" "+x(h(a).isGenerating?"Processing…":"Generate"),1)],8,Gc)],64)):v.value==="translate"?(i(),s(G,{key:4},[(ue=(W=de.value)==null?void 0:W.content)!=null&&ue.text?(i(),s("div",Wc,[n[67]||(n[67]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Hc,x(de.value.content.text.slice(0,120))+x(de.value.content.text.length>120?"…":""),1)])):(i(),s("p",Qc,"Select a text element on the canvas to translate it.")),e("div",Yc,[n[69]||(n[69]=e("label",{class:"form-label"},"Target Language",-1)),te(e("select",{"onUpdate:modelValue":n[27]||(n[27]=k=>O.value=k),class:"select"},[...n[68]||(n[68]=[We('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[nt,O.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:h(a).isGenerating||!((Se=(Ee=de.value)==null?void 0:Ee.content)!=null&&Se.text),onClick:$e},[h(a).isGenerating?(i(),s("span",Kc)):j("",!0),R(" "+x(h(a).isGenerating?"Translating…":"Translate Text"),1)],8,Jc),p.value?(i(),s("div",Xc,[e("div",Zc,[n[70]||(n[70]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",ep,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[28]||(n[28]=k=>w.navigator.clipboard.writeText(p.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Re,disabled:!de.value},"Apply",8,tp)])]),e("div",op,x(p.value),1)])):j("",!0)],64)):v.value==="image"?(i(),s(G,{key:5},[n[73]||(n[73]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",np,[n[71]||(n[71]=e("label",{class:"form-label"},"Image Description",-1)),te(e("textarea",{"onUpdate:modelValue":n[29]||(n[29]=k=>Ne.value=k),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[fe,Ne.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Fe.value||h(a).isGenerating||!Ne.value,onClick:y},[Fe.value||h(a).isGenerating?(i(),s("span",ip)):j("",!0),R(" "+x(Fe.value||h(a).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,lp),p.value?(i(),s("div",sp,[n[72]||(n[72]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",ap,x(p.value),1)])):j("",!0)],64)):v.value==="settings"?(i(),s("div",rp,[e("div",dp,[n[75]||(n[75]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:h(a).apiProvider,class:"select",onChange:n[30]||(n[30]=k=>h(a).setProvider(k.target.value))},[...n[74]||(n[74]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,up)]),e("div",cp,[n[76]||(n[76]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:h(a).apiKey,class:"input",placeholder:"sk-…",onChange:n[31]||(n[31]=k=>h(a).setApiKey(k.target.value))},null,40,pp),n[77]||(n[77]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),h(a).apiKey?j("",!0):(i(),s("div",vp,[...n[78]||(n[78]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),R(" Running in ",-1),e("strong",null,"demo mode",-1),R(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):j("",!0),p.value&&v.value!=="settings"&&v.value!=="quiz"?(i(),s("div",mp,[e("div",fp,[n[79]||(n[79]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[32]||(n[32]=k=>p.value="")},"Clear")]),e("pre",gp,x(p.value),1),e("div",bp,[v.value==="generate"?(i(),s("button",{key:0,class:"btn btn-primary btn-sm",onClick:C},x(r.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):j("",!0),v.value==="generate"?(i(),s("button",{key:1,class:"btn btn-ghost btn-sm",disabled:h(a).isGenerating,onClick:ve},[...n[80]||(n[80]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),R(" Regenerate ",-1)])],8,yp)):j("",!0),v.value==="improve"&&de.value?(i(),s("button",{key:2,class:"btn btn-primary btn-sm",onClick:K}," Apply to Element ")):j("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:n[33]||(n[33]=k=>{var Pe;return(Pe=w.navigator.clipboard)==null?void 0:Pe.writeText(p.value)})}," Copy ")])])):j("",!0),h(a).lastError?(i(),s("div",hp,[n[81]||(n[81]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),R(" "+x(h(a).lastError),1)])):j("",!0)])])}}},wp=Be(xp,[["__scopeId","data-v-697ec3ea"]]),kp={class:"theme-manager"},Cp={class:"panel-section"},Sp={class:"presets-grid"},$p=["title","onClick"],Ip={class:"preset-preview"},Mp={class:"preset-name"},Ep={class:"panel-section"},Pp={class:"theme-fields"},Ap={class:"form-label"},zp={class:"color-row"},_p=["value","onInput"],Np=["value","onChange"],Tp={class:"panel-section"},jp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Bp=["value"],Lp=["value"],Dp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qp=["value"],Rp=["value"],Fp={class:"form-group"},Up=["value"],Op={class:"panel-section"},Gp={key:0,class:"apply-message success"},Vp={key:1,class:"apply-message error"},Wp={__name:"ThemeManager",setup(b){const a=Oe(),d=Ge(),u=I(()=>d.getProject(a.projectId)),v=I(()=>{var T;return((T=u.value)==null?void 0:T.theme)||{}}),m=P(""),f=P("");function p(T){d.updateProject(a.projectId,{theme:{...v.value,...T}})}const E=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],Q=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function O(T){p(T)}function V(T,l){const r=T.content||{};return T.type==="text"?{content:{...r,fontFamily:l.fontFamily||r.fontFamily,color:l.textColor||r.color}}:T.type==="heading"?{content:{...r,fontFamily:l.headingFont||l.fontFamily||r.fontFamily,color:l.textColor||r.color}}:T.type==="shape"?{content:{...r,fillColor:l.secondaryColor||r.fillColor}}:T.type==="hotspot"?{content:{...r,bgColor:l.primaryColor||r.bgColor}}:T.type==="button"?{content:{...r,bgColor:l.primaryColor||r.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:l.fontFamily||r.fontFamily}}:T.type==="quiz"?{content:{...r,cardBgColor:l.bgColor||r.cardBgColor,questionColor:l.textColor||r.questionColor,accentColor:l.primaryColor||r.accentColor}}:null}function D(){m.value="",f.value="";const T=a.projectId,l=u.value,r=v.value;if(!T||!l){f.value="No active project to apply theme.";return}const M=l.slides||[];let N=0;M.forEach(ne=>{(ne.backgroundType||"color")==="color"&&d.updateSlide(T,ne.id,{backgroundType:"color",background:r.bgColor||ne.background||"#ffffff"}),(ne.elements||[]).forEach(pe=>{const ge=V(pe,r);ge&&(d.updateElement(T,ne.id,pe.id,ge),N+=1)})}),m.value=`Applied theme to ${M.length} slide${M.length===1?"":"s"} and ${N} element${N===1?"":"s"}.`}return(T,l)=>(i(),s("div",kp,[e("div",Cp,[l[3]||(l[3]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",Sp,[(i(),s(G,null,ae(E,r=>e("div",{key:r.name,class:"preset-card",title:r.name,onClick:M=>O(r)},[e("div",Ip,[e("div",{class:"pp-header",style:ce({background:r.primaryColor})},null,4),e("div",{class:"pp-body",style:ce({background:r.bgColor})},[e("div",{class:"pp-line",style:ce({background:r.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:ce({background:r.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:ce({background:r.secondaryColor})},null,4)]),e("span",Mp,x(r.name),1)],8,$p)),64))])]),e("div",Ep,[l[4]||(l[4]=e("div",{class:"panel-title"},"Colors",-1)),e("div",Pp,[(i(),s(G,null,ae({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(r,M)=>e("div",{class:"theme-field",key:M},[e("label",Ap,x(r),1),e("div",zp,[e("input",{type:"color",value:v.value[M]||"#ffffff",class:"color-input-native",onInput:N=>p({[M]:N.target.value})},null,40,_p),e("input",{value:v.value[M]||"",class:"input",onChange:N=>p({[M]:N.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Np)])])),64))])]),e("div",Tp,[l[8]||(l[8]=e("div",{class:"panel-title"},"Typography",-1)),e("div",jp,[l[5]||(l[5]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:v.value.headingFont||"Inter, sans-serif",class:"select",onChange:l[0]||(l[0]=r=>p({headingFont:r.target.value}))},[(i(),s(G,null,ae(Q,r=>e("option",{key:r.value,value:r.value},x(r.label),9,Lp)),64))],40,Bp)]),e("div",Dp,[l[6]||(l[6]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:v.value.fontFamily||"Inter, sans-serif",class:"select",onChange:l[1]||(l[1]=r=>p({fontFamily:r.target.value}))},[(i(),s(G,null,ae(Q,r=>e("option",{key:r.value,value:r.value},x(r.label),9,Rp)),64))],40,qp)]),e("div",Fp,[l[7]||(l[7]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:v.value.fontSize||16,class:"input",onChange:l[2]||(l[2]=r=>p({fontSize:+r.target.value}))},null,40,Up)])]),e("div",Op,[l[9]||(l[9]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:ce({background:v.value.bgColor||"#fff",fontFamily:v.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:ce({color:v.value.textColor,fontFamily:v.value.headingFont||v.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:ce({color:v.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:ce({background:v.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:ce({background:v.value.secondaryColor})},"Badge",4)],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:D}," Apply Theme to Slides "),m.value?(i(),s("p",Gp,x(m.value),1)):j("",!0),f.value?(i(),s("p",Vp,x(f.value),1)):j("",!0)])]))}},Hp=Be(Wp,[["__scopeId","data-v-dd457d78"]]),Qp={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Yp={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},Jp={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Kp={class:"export-tabs tabs"},Xp={class:"export-content"},Zp={class:"export-options",style:{"margin-bottom":"20px"}},ev={class:"form-group"},tv={class:"export-meta"},ov={class:"meta-item"},nv={class:"meta-item"},lv={class:"meta-item"},iv={class:"export-options",style:{"margin-bottom":"20px"}},sv={class:"form-group"},av={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},rv={class:"coming-soon"},dv={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},uv={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},cv={key:1,class:"export-success"},pv={__name:"ExportModal",setup(b){const a=Oe(),d=Ge(),u=qo(),v=I(()=>d.getProject(a.projectId)),m=P("json"),f=P(""),p=P(""),E=P(!0);qe(v,l=>{l&&!p.value&&(p.value=l.name||"presentation")},{immediate:!0});function Q(){const l=d.exportProject(a.projectId);if(!l)return;const r=new Blob([l],{type:"application/json"}),M=URL.createObjectURL(r),N=document.createElement("a");N.href=M,N.download=`${p.value||"project"}.mediasurf.json`,N.click(),URL.revokeObjectURL(M),f.value="success",setTimeout(()=>f.value="",3e3)}function O(l,r="presentation"){return String(l).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||r}function V(l,r){const M=lt(r);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${M.width}px;
  --lf-slide-height: ${M.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(l==null?void 0:l.fontFamily)||"Inter, sans-serif"};
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
  color: ${(l==null?void 0:l.textColor)||"#1a1a2e"};
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
.lf-divider-wrap,
.lf-audio-wrap {
  width: 100%;
  height: 100%;
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
  display: ${(r==null?void 0:r.showNavControls)===!1?"none":"flex"};
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
  display: ${(r==null?void 0:r.showNavControls)===!1?"none":"flex"};
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
  background: ${(l==null?void 0:l.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(r==null?void 0:r.showProgress)===!1?"none":"block"};
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
`}function D(){return`
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
`}async function T(){var je,Te,de;const l=v.value;if(!l)return;f.value="processing";const r=new vn,M=r.folder("assets");let N=0;async function ne(ve,L="media"){if((!ve||ve.startsWith("data:")||ve.startsWith("http://localhost")||ve.startsWith("blob:"))&&ve.startsWith("data:"))return ve;try{const oe=await(await fetch(ve)).blob();let me="bin";const be=oe.type;if(be.includes("image/png")?me="png":be.includes("image/jpeg")?me="jpg":be.includes("image/gif")?me="gif":be.includes("image/svg")?me="svg":be.includes("image/webp")?me="webp":be.includes("video/mp4")?me="mp4":be.includes("audio/mpeg")&&(me="mp3"),me==="bin"){const C=ve.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);C&&(me=C[1])}N++;const ye=`${L}_${N}.${me}`;return M.file(ye,oe),`assets/${ye}`}catch(J){return console.warn("Could not fetch asset:",ve,J),ve}}const pe=JSON.parse(JSON.stringify([...l.slides||[]])).sort((ve,L)=>(ve.order??0)-(L.order??0));if(E.value)for(const ve of pe){ve.backgroundType==="image"&&ve.backgroundImage&&(ve.backgroundImage=await ne(ve.backgroundImage,"bg"));for(const L of ve.elements||[])L.type==="image"&&((je=L.content)!=null&&je.src)&&(L.content.src=await ne(L.content.src,"img")),L.type==="video"&&((Te=L.content)!=null&&Te.src)&&!L.content.src.includes("youtube")&&!L.content.src.includes("youtu.be")&&(L.content.src=await ne(L.content.src,"vid")),L.type==="audio"&&((de=L.content)!=null&&de.src)&&(L.content.src=await ne(L.content.src,"aud"))}const ge=O(p.value||l.name||"presentation"),A={name:l.name,theme:l.theme||{},settings:l.settings||{},slides:pe},q=JSON.stringify(A).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),Z=V(l.theme,l.settings),ie=D(),U=`<script id="lf-data" type="application/json">${q}<\/script>`,le=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ge}</title>
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
  <span class="nav-counter" id="counter">1 / ${pe.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${U}
<script src="script.js"><\/script>
</body>
</html>`;r.file("index.html",le),r.file("style.css",Z),r.file("script.js",ie);const ke=await r.generateAsync({type:"blob"}),he=URL.createObjectURL(ke),Ce=document.createElement("a");Ce.href=he,Ce.download=`${ge}.zip`,Ce.click(),URL.revokeObjectURL(he),f.value="success",setTimeout(()=>f.value="",3e3)}return(l,r)=>(i(),Le(ln,{title:"Export Project",size:"md",onClose:r[9]||(r[9]=M=>h(a).showExportModal=!1)},{footer:Je(()=>[e("button",{class:"btn btn-secondary",onClick:r[8]||(r[8]=M=>h(a).showExportModal=!1)},"Close")]),default:Je(()=>{var M,N,ne,pe,ge;return[h(u).user?(i(),s(G,{key:1},[e("div",Kp,[e("button",{class:X(["tab-btn",m.value==="json"&&"active"]),onClick:r[2]||(r[2]=A=>m.value="json")},"JSON Project",2),e("button",{class:X(["tab-btn",m.value==="html"&&"active"]),onClick:r[3]||(r[3]=A=>m.value="html")},"HTML Package",2),e("button",{class:X(["tab-btn",m.value==="scorm"&&"active"]),onClick:r[4]||(r[4]=A=>m.value="scorm")},"SCORM",2)]),e("div",Xp,[m.value==="json"?(i(),s(G,{key:0},[r[20]||(r[20]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",Zp,[e("div",ev,[r[15]||(r[15]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),te(e("input",{type:"text","onUpdate:modelValue":r[5]||(r[5]=A=>p.value=A),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[fe,p.value]])])]),e("div",tv,[e("div",ov,[r[16]||(r[16]=e("span",null,"Project",-1)),e("strong",null,x((M=v.value)==null?void 0:M.name),1)]),e("div",nv,[r[17]||(r[17]=e("span",null,"Slides",-1)),e("strong",null,x(((ne=(N=v.value)==null?void 0:N.slides)==null?void 0:ne.length)||0),1)]),e("div",lv,[r[18]||(r[18]=e("span",null,"Elements",-1)),e("strong",null,x(((ge=(pe=v.value)==null?void 0:pe.slides)==null?void 0:ge.reduce((A,q)=>{var Z;return A+(((Z=q.elements)==null?void 0:Z.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:Q},[...r[19]||(r[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),R(" Download JSON ",-1)])])],64)):m.value==="html"?(i(),s(G,{key:1},[r[24]||(r[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",iv,[e("div",sv,[r[21]||(r[21]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),te(e("input",{type:"text","onUpdate:modelValue":r[6]||(r[6]=A=>p.value=A),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[fe,p.value]])]),e("label",av,[te(e("input",{type:"checkbox","onUpdate:modelValue":r[7]||(r[7]=A=>E.value=A)},null,512),[[at,E.value]]),r[22]||(r[22]=R(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),r[25]||(r[25]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:T},[...r[23]||(r[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),R(" Download HTML ",-1)])])],64)):m.value==="scorm"?(i(),s(G,{key:2},[r[29]||(r[29]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",rv,[(i(),s("svg",dv,[...r[26]||(r[26]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),r[27]||(r[27]=e("h4",null,"Coming Soon",-1)),r[28]||(r[28]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):j("",!0),et(st,{name:"fade"},{default:Je(()=>[f.value==="processing"?(i(),s("div",uv,[...r[30]||(r[30]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),R(" Generating package... Please wait. ",-1)])])):f.value==="success"?(i(),s("div",cv,[...r[31]||(r[31]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),R(" Export successful! Check your downloads folder. ",-1)])])):j("",!0)]),_:1})])],64)):(i(),s("div",Qp,[(i(),s("svg",Yp,[...r[10]||(r[10]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),r[13]||(r[13]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),r[14]||(r[14]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",Jp,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:r[0]||(r[0]=A=>h(u).loginWithGoogle())},[...r[11]||(r[11]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),R(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:r[1]||(r[1]=A=>h(u).loginWithMicrosoft())},[...r[12]||(r[12]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),R(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},vv=Be(pv,[["__scopeId","data-v-29863a10"]]),mv={key:0,class:"editor-view"},fv={class:"editor-topbar"},gv={class:"topbar-left"},bv={class:"project-name-wrap"},yv=["value"],hv={class:"save-label"},xv={class:"topbar-center"},wv={key:0,class:"slide-position"},kv={class:"topbar-right"},Cv={class:"editor-body"},Sv={class:"authoring-rail"},$v=["onClick","data-tooltip"],Iv={key:0,class:"rail-icon"},Mv={key:1,class:"rail-icon"},Ev={key:2,class:"rail-icon"},Pv={key:3,class:"rail-icon"},Av={key:4,class:"rail-icon"},zv={key:5,class:"rail-icon"},_v={key:6,class:"rail-icon"},Nv={key:7,class:"rail-icon"},Tv={key:8,class:"rail-icon"},jv={class:"right-panel"},Bv={class:"panel-tabs"},Lv=["onClick","data-tooltip"],Dv={class:"tab-icon"},qv={class:"tab-label"},Rv={class:"panel-content"},Fv={key:1,class:"editor-not-found"},Uv={__name:"EditorView",setup(b){const a=on(),d=tn(),u=Oe(),v=Ge(),m=qo(),f=I(()=>a.params.id),p=I(()=>v.getProject(f.value)),E=I(()=>lt(p.value)),Q=I(()=>{var S;return[...((S=p.value)==null?void 0:S.slides)||[]].sort((g,$)=>g.order-$.order)}),O=P(null),V=P(!1),D=P("deck"),{aiStore:T,showAIModal:l,aiMode:r,aiTopic:M,aiContext:N,aiProjectName:ne,aiSlideCount:pe,aiQuestionCount:ge,aiDifficulty:A,aiQuestionType:q,aiCreationError:Z,aiSubmitting:ie,aiProjectNamePlaceholder:U,aiPrimaryActionLabel:Y,openAICreationModal:le,createAIProject:ke}=sn({onRequireAuth:()=>d.push({name:"dashboard"})});let he=!1,Ce=null;qe(()=>p.value,S=>{if(S){if(he){he=!1;return}Ce&&clearTimeout(Ce),Ce=setTimeout(()=>{u.pushHistory(S)},600)}},{deep:!0}),qe(()=>m.isAuthReady,async S=>{var g;if(S){if((g=m.user)!=null&&g.uid&&await v.ensureRemoteProjectsLoaded(),!p.value){d.push({name:"dashboard"});return}u.setProject(f.value),Q.value.length>0&&u.setCurrentSlide(Q.value[0].id),u.pushHistory(p.value)}},{immediate:!0});const je=I(()=>{const S=p.value;return S?`Saved ${new Date(S.updatedAt).toLocaleTimeString()}`:""}),Te=I(()=>{switch(u.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});mn({undo:()=>{if(u.canUndo()){const S=u.undo();S&&(he=!0,v.updateProject(f.value,S))}},redo:()=>{if(u.canRedo()){const S=u.redo();S&&(he=!0,v.updateProject(f.value,S))}},delete:()=>{u.selectedElementId&&(v.deleteElement(u.projectId,u.currentSlideId,u.selectedElementId),u.clearSelection())},escape:()=>{u.clearSelection(),u.setActiveTool("select")},copy:()=>{var g,$,Ae,_e;const S=(_e=(Ae=($=(g=p.value)==null?void 0:g.slides)==null?void 0:$.find($e=>$e.id===u.currentSlideId))==null?void 0:Ae.elements)==null?void 0:_e.find($e=>$e.id===u.selectedElementId);S&&u.setClipboard(S)},paste:()=>{if(u.clipboard&&u.currentSlideId){const S=u.clipboard;v.addElement(u.projectId,u.currentSlideId,S.type,{...S,x:S.x+20,y:S.y+20,id:void 0})}},duplicate:()=>{if(u.selectedElementId){const S=v.duplicateElement(u.projectId,u.currentSlideId,u.selectedElementId);S&&u.selectElement(S.id)}},zoomIn:()=>u.zoomIn(),zoomOut:()=>u.zoomOut(),zoomReset:()=>u.zoomReset(),toggleGrid:()=>u.toggleGrid(),nudge:(S,g)=>{var Ae,_e,$e,Re;if(!u.selectedElementId)return;const $=(Re=($e=(_e=(Ae=p.value)==null?void 0:Ae.slides)==null?void 0:_e.find(Ne=>Ne.id===u.currentSlideId))==null?void 0:$e.elements)==null?void 0:Re.find(Ne=>Ne.id===u.selectedElementId);$&&v.updateElement(u.projectId,u.currentSlideId,u.selectedElementId,{x:$.x+S,y:$.y+g})},selectAll:()=>{var g,$,Ae;(((Ae=($=(g=p.value)==null?void 0:g.slides)==null?void 0:$.find(_e=>_e.id===u.currentSlideId))==null?void 0:Ae.elements)||[]).forEach((_e,$e)=>u.selectElement(_e.id,$e>0))}});function de(){d.push({name:"dashboard"})}function ve(){d.push({name:"preview",params:{id:f.value},query:{from:"editor"}})}function L(S="deck"){D.value=S,V.value=!0}function J(){V.value=!1,le(D.value)}function oe(S,g="Image"){if(!u.projectId||!u.currentSlideId||!S)return;const $=new Image;$.onload=()=>{const $e=Math.min(420/$.width,280/$.height,1),Re=Math.max(120,Math.round($.width*$e)),Ne=Math.max(80,Math.round($.height*$e)),Fe=Math.max(24,Math.round((E.value.width-Re)/2)),y=Math.max(24,Math.round((E.value.height-Ne)/2)),B=v.addElement(u.projectId,u.currentSlideId,"image",{x:Fe,y,width:Re,height:Ne,content:{src:S,alt:g,objectFit:"cover"}});B&&(u.selectElement(B.id),u.setRightPanel("properties"),u.setActiveTool("select"))},$.src=S}function me(S){const[g]=Array.from(S.target.files||[]);if(!g||!g.type.startsWith("image/"))return;const $=new FileReader;$.onload=()=>oe(String($.result||""),g.name),$.readAsDataURL(g),S.target.value=""}function be(){var S;(S=O.value)==null||S.click()}const ye=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function C(S){if(S==="text"){u.setActiveTool("text");return}if(S==="resources"){u.setActiveTool("image");return}if(S==="interactive-elements"){u.setActiveTool("hotspot");return}if(S==="interactive-questions"){u.setActiveTool("quiz");return}if(S==="widgets"){u.setActiveTool("shape");return}if(S==="insert"){be();return}if(S==="style"){u.setRightPanel("properties");return}if(S==="background"){u.clearSelection(),u.setRightPanel("properties");return}S==="pages"&&u.toggleSlidePanel()}function re(S){return S==="text"?["text","heading"].includes(u.activeTool):S==="resources"?u.activeTool==="image":S==="interactive-elements"?["hotspot","button"].includes(u.activeTool):S==="interactive-questions"?u.activeTool==="quiz":S==="widgets"?["shape","video","audio"].includes(u.activeTool):S==="insert"?!1:S==="style"||S==="background"?u.rightPanelTab==="properties":S==="pages"?u.showSlidePanel:!1}return(S,g)=>p.value?(i(),s("div",mv,[e("input",{ref_key:"imageInputRef",ref:O,type:"file",accept:"image/*",class:"sr-only",onChange:me},null,544),e("header",fv,[e("div",gv,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:de,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...g[14]||(g[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),R(" Dashboard ",-1)])]),e("div",bv,[e("input",{value:p.value.name,class:"project-name-input",onChange:g[0]||(g[0]=$=>h(v).updateProject(f.value,{name:$.target.value}))},null,40,yv)]),e("span",hv,x(je.value),1)]),e("div",xv,[h(u).currentSlideId?(i(),s("span",wv," Slide "+x(Q.value.findIndex($=>$.id===h(u).currentSlideId)+1)+" of "+x(Q.value.length),1)):j("",!0)]),e("div",kv,[e("button",{class:X(["btn btn-ghost btn-sm",h(u).showAIPanel&&"active-btn"]),onClick:g[1]||(g[1]=$=>{h(u).showAIPanel=!h(u).showAIPanel,h(u).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...g[15]||(g[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),R(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:g[2]||(g[2]=$=>{h(u).showThemeManager=!h(u).showThemeManager,h(u).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...g[16]||(g[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),R(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:ve,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...g[17]||(g[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),R(" Preview ",-1)])]),e("button",{class:"btn btn-primary btn-sm",onClick:g[3]||(g[3]=$=>h(u).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...g[18]||(g[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),R(" Export ",-1)])])])]),et(_d,{onOpenAiProject:L}),e("div",Cv,[e("aside",Sv,[(i(),s(G,null,ae(ye,$=>e("button",{key:$.id,class:X(["rail-option",re($.id)&&"active"]),onClick:Ae=>C($.id),"data-tooltip":$.label,"data-tooltip-position":"right"},[$.id==="text"?(i(),s("span",Iv,"T")):$.id==="resources"?(i(),s("span",Mv,[...g[19]||(g[19]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):$.id==="interactive-elements"?(i(),s("span",Ev,[...g[20]||(g[20]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):$.id==="interactive-questions"?(i(),s("span",Pv,[...g[21]||(g[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):$.id==="widgets"?(i(),s("span",Av,[...g[22]||(g[22]=[We('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0cfccc29><rect x="3" y="3" width="7" height="7" data-v-0cfccc29></rect><rect x="14" y="3" width="7" height="7" data-v-0cfccc29></rect><rect x="14" y="14" width="7" height="7" data-v-0cfccc29></rect><rect x="3" y="14" width="7" height="7" data-v-0cfccc29></rect></svg>',1)])])):$.id==="insert"?(i(),s("span",zv,[...g[23]||(g[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):$.id==="style"?(i(),s("span",_v,[...g[24]||(g[24]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):$.id==="background"?(i(),s("span",Nv,[...g[25]||(g[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):$.id==="pages"?(i(),s("span",Tv,[...g[26]||(g[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):j("",!0),R(" "+x($.label),1)],10,$v)),64))]),et(st,{name:"side-panel-slide"},{default:Je(()=>[h(u).showSlidePanel?(i(),Le($n,{key:0})):j("",!0)]),_:1}),et(zu),e("aside",jv,[e("div",Bv,[(i(),s(G,null,ae([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],$=>e("button",{key:$.id,class:X(["panel-tab",h(u).rightPanelTab===$.id&&"active"]),onClick:Ae=>h(u).setRightPanel($.id),"data-tooltip":`Open ${$.label}`,"data-tooltip-position":"bottom"},[e("span",Dv,x($.icon),1),e("span",qv,x($.label),1)],10,Lv)),64))]),e("div",Rv,[et(st,{name:"editor-panel-switch",mode:"out-in"},{default:Je(()=>[(i(),s("div",{key:Te.value,class:"panel-content-view"},[h(u).rightPanelTab==="properties"?(i(),Le(vd,{key:0})):h(u).rightPanelTab==="layers"?(i(),Le(Wn,{key:1})):h(u).rightPanelTab==="ai"?(i(),Le(wp,{key:2})):h(u).rightPanelTab==="theme"?(i(),Le(Hp,{key:3})):j("",!0)]))]),_:1})])])]),h(u).showExportModal?(i(),Le(vv,{key:0})):j("",!0),V.value?(i(),Le(an,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:g[4]||(g[4]=$=>V.value=!1),onConfirm:J})):j("",!0),h(l)?(i(),Le(rn,{key:2,mode:h(r),topic:h(M),context:h(N),"project-name":h(ne),"slide-count":h(pe),"question-count":h(ge),difficulty:h(A),"question-type":h(q),"project-name-placeholder":h(U),"primary-action-label":h(Y),"creation-error":h(Z),"is-submitting":h(ie),"is-generating":h(T).isGenerating,"has-api-key":!!h(T).apiKey,onClose:g[5]||(g[5]=$=>l.value=!1),onCreate:h(ke),"onUpdate:mode":g[6]||(g[6]=$=>r.value=$),"onUpdate:topic":g[7]||(g[7]=$=>M.value=$),"onUpdate:context":g[8]||(g[8]=$=>N.value=$),"onUpdate:projectName":g[9]||(g[9]=$=>ne.value=$),"onUpdate:slideCount":g[10]||(g[10]=$=>pe.value=$),"onUpdate:questionCount":g[11]||(g[11]=$=>ge.value=$),"onUpdate:difficulty":g[12]||(g[12]=$=>A.value=$),"onUpdate:questionType":g[13]||(g[13]=$=>q.value=$)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):j("",!0)])):(i(),s("div",Fv,[g[27]||(g[27]=e("h2",null,"Project not found",-1)),g[28]||(g[28]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:de},"Go to Dashboard")]))}},Yv=Be(Uv,[["__scopeId","data-v-0cfccc29"]]);export{Yv as default};
