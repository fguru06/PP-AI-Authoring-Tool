import{O as qo,P as Do,v as i,F as s,B as e,C as x,H as W,I as ae,E as Ie,D as H,u as w,Q as re,L as Re,G as T,K as U,q as Be,R as Ro,f as S,r as P,M as ne,S as mt,w as Fe,N as pe,i as Zo,U as en,n as tn,y as rt,x as et,T as vt,V as ct,z as on,p as nn,J as Lo}from"./vue-core-DtFYlhKN.js";import{u as ln,d as sn}from"./vue-ecosystem-iLG-KstC.js";import{u as Ge,b as an,M as rn,a as un,C as dn,A as cn}from"./ConfirmActionModal-OMl9d2VA.js";import{u as Ve,g as pt,C as pn,n as vn,m as Fo,f as Uo,a as Oo}from"./projectStore-BtGKANUm.js";import{_ as Te}from"./index-CalfKERg.js";import{J as mn}from"./jszip-529iNPX7.js";function fn(y){function a(r){var c,A,Y,Q,L,F,B,m,n,M,q,J,le,ve,N,D,K;const u=r.ctrlKey||r.metaKey,p=r.key.toLowerCase(),f=r.target.tagName.toLowerCase(),g=f==="input"||f==="textarea"||r.target.isContentEditable;g&&u&&["c","v","x","a","z","y"].includes(p)||(u&&p==="z"&&!r.shiftKey?(r.preventDefault(),(c=y.undo)==null||c.call(y)):u&&(p==="y"||p==="z"&&r.shiftKey)?(r.preventDefault(),(A=y.redo)==null||A.call(y)):u&&p==="c"?(r.preventDefault(),(Y=y.copy)==null||Y.call(y)):u&&p==="v"?(r.preventDefault(),(Q=y.paste)==null||Q.call(y)):u&&p==="x"?(r.preventDefault(),(L=y.cut)==null||L.call(y)):u&&p==="d"?(r.preventDefault(),(F=y.duplicate)==null||F.call(y)):u&&p==="a"?(r.preventDefault(),(B=y.selectAll)==null||B.call(y)):p==="delete"||p==="backspace"?g||(r.preventDefault(),(m=y.delete)==null||m.call(y)):p==="escape"?(n=y.escape)==null||n.call(y):u&&p==="g"?(r.preventDefault(),(M=y.toggleGrid)==null||M.call(y)):u&&p==="="||u&&p==="+"?(r.preventDefault(),(q=y.zoomIn)==null||q.call(y)):u&&p==="-"?(r.preventDefault(),(J=y.zoomOut)==null||J.call(y)):u&&p==="0"?(r.preventDefault(),(le=y.zoomReset)==null||le.call(y)):p==="arrowleft"?(ve=y.nudge)==null||ve.call(y,-1,0):p==="arrowright"?(N=y.nudge)==null||N.call(y,1,0):p==="arrowup"?(D=y.nudge)==null||D.call(y,0,-1):p==="arrowdown"&&((K=y.nudge)==null||K.call(y,0,1)))}qo(()=>window.addEventListener("keydown",a)),Do(()=>window.removeEventListener("keydown",a))}const gn={class:"slide-panel"},bn={class:"slide-panel-header"},yn={class:"slide-count"},hn={class:"slides-list"},xn=["onClick","onContextmenu","onDragstart","onDrop"],wn={class:"slide-number"},kn={class:"slide-footer"},Cn={class:"slide-title"},Sn=["onClick"],$n={__name:"SlidePanel",setup(y){const a=Ge(),r=Ve(),u=S(()=>r.getProject(a.projectId)),p=S(()=>pt(u.value)),f=S(()=>{var N,D;return((D=(N=u.value)==null?void 0:N.slides)==null?void 0:D.slice().sort((K,ce)=>K.order-ce.order))||[]}),g=P({show:!1,x:0,y:0,slideId:null});function c(N){a.setCurrentSlide(N)}function A(){const N=f.value.findIndex(K=>K.id===a.currentSlideId),D=r.addSlide(a.projectId,N);D&&a.setCurrentSlide(D.id)}function Y(N){var ce,V;const D=f.value.findIndex(te=>te.id===N);r.deleteSlide(a.projectId,N);const K=((ce=u.value)==null?void 0:ce.slides)||[];if(K.length>0){const te=K.slice().sort((fe,ge)=>fe.order-ge.order),ue=Math.min(D,te.length-1);a.setCurrentSlide((V=te[ue])==null?void 0:V.id)}}function Q(N,D){N.preventDefault(),g.value={show:!0,x:N.clientX,y:N.clientY,slideId:D},setTimeout(()=>window.addEventListener("click",L,{once:!0}),0)}function L(){g.value.show=!1}function F(){const N=r.duplicateSlide(a.projectId,g.value.slideId);N&&a.setCurrentSlide(N.id),L()}function B(){Y(g.value.slideId),L()}function m(N,D){N.stopPropagation(),Y(D)}function n(){const N=f.value.findIndex(D=>D.id===g.value.slideId);N>0&&r.reorderSlides(a.projectId,N,N-1),L()}function M(){const N=f.value.findIndex(D=>D.id===g.value.slideId);N<f.value.length-1&&r.reorderSlides(a.projectId,N,N+1),L()}let q=-1;function J(N,D){q=D,N.dataTransfer.effectAllowed="move"}function le(N,D){N.preventDefault(),q!==-1&&q!==D&&r.reorderSlides(a.projectId,q,D),q=-1}function ve(N){return N.backgroundType==="gradient"&&N.backgroundGradient?{background:N.backgroundGradient}:N.backgroundType==="image"&&N.backgroundImage?{backgroundImage:`url(${N.backgroundImage})`,backgroundSize:"cover"}:{background:N.background||"#fff"}}return(N,D)=>(i(),s("div",gn,[e("div",bn,[D[2]||(D[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",yn,x(f.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:A,"data-tooltip":"Add slide","aria-label":"Add slide"},[...D[1]||(D[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",hn,[(i(!0),s(W,null,ae(f.value,(K,ce)=>(i(),s("div",{key:K.id,class:H(["slide-thumb-item",w(a).currentSlideId===K.id&&"active"]),draggable:"true",onClick:V=>c(K.id),onContextmenu:V=>Q(V,K.id),onDragstart:V=>J(V,ce),onDragover:D[0]||(D[0]=Ie(()=>{},["prevent"])),onDrop:V=>le(V,ce)},[e("div",wn,x(ce+1),1),e("div",{class:"slide-thumb",style:re(ve(K))},[(i(!0),s(W,null,ae(K.elements.slice(0,6),V=>{var te,ue;return i(),s("div",{key:V.id,class:"mini-element",style:re({left:V.x/p.value.width*100+"%",top:V.y/p.value.height*100+"%",width:V.width/p.value.width*100+"%",height:V.height/p.value.height*100+"%",background:V.type==="shape"?(te=V.content)==null?void 0:te.fillColor:V.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:V.type==="shape"&&((ue=V.content)==null?void 0:ue.shapeType)==="circle"?"50%":void 0})},null,4)}),128))],4),e("div",kn,[e("div",Cn,x(K.title||`Slide ${ce+1}`),1),f.value.length>1?(i(),s("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:V=>m(V,K.id)},[...D[3]||(D[3]=[Re('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9bd31ef1><polyline points="3 6 5 6 21 6" data-v-9bd31ef1></polyline><path d="M19 6l-1 14H6L5 6" data-v-9bd31ef1></path><path d="M10 11v6M14 11v6" data-v-9bd31ef1></path><path d="M9 6V4h6v2" data-v-9bd31ef1></path></svg>',1)])],8,Sn)):T("",!0)])],42,xn))),128))]),e("button",{class:"add-slide-bottom",onClick:A},[...D[4]||(D[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),U(" Add Slide ",-1)])]),(i(),Be(Ro,{to:"body"},[g.value.show?(i(),s("div",{key:0,class:"context-menu",style:re({left:g.value.x+"px",top:g.value.y+"px"})},[e("button",{class:"ctx-item",onClick:F},"Duplicate"),e("button",{class:"ctx-item",onClick:n},"Move Up"),e("button",{class:"ctx-item",onClick:M},"Move Down"),D[5]||(D[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:B},"Delete Slide")],4)):T("",!0)]))]))}},In=Te($n,[["__scopeId","data-v-9bd31ef1"]]),Mn={class:"layer-panel"},En={class:"layer-header panel-section"},Pn={class:"panel-title",style:{"margin-bottom":"0"}},An={class:"layer-count"},zn={key:0,class:"layers-empty"},Nn={key:1,class:"layers-list"},_n=["onClick"],Tn={class:"layer-type-icon"},jn={class:"layer-name"},Bn={class:"layer-actions"},Ln=["onClick","data-tooltip"],qn={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Dn={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Rn=["onClick","data-tooltip"],Fn={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Un={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},On=["onClick"],Gn=["onClick"],Vn=["onClick"],Wn={__name:"LayerPanel",setup(y){const a=Ge(),r=Ve(),u=S(()=>r.getProject(a.projectId)),p=S(()=>{var m,n;return(n=(m=u.value)==null?void 0:m.slides)==null?void 0:n.find(M=>M.id===a.currentSlideId)}),f=S(()=>{var m;return[...((m=p.value)==null?void 0:m.elements)||[]].sort((n,M)=>(M.zIndex||0)-(n.zIndex||0))});function g(m){a.selectElement(m)}function c(m){r.updateElement(a.projectId,a.currentSlideId,m.id,{visible:!m.visible})}function A(m){r.updateElement(a.projectId,a.currentSlideId,m.id,{locked:!m.locked})}function Y(m){r.reorderElement(a.projectId,a.currentSlideId,m,"up")}function Q(m){r.reorderElement(a.projectId,a.currentSlideId,m,"down")}function L(m){r.deleteElement(a.projectId,a.currentSlideId,m),a.selectedElementId===m&&a.clearSelection()}function F(m){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[m]||"◆"}function B(m){var n,M,q;return(n=m.content)!=null&&n.text?m.content.text.slice(0,24):(M=m.content)!=null&&M.label?m.content.label:(q=m.content)!=null&&q.question?m.content.question.slice(0,24):m.type.charAt(0).toUpperCase()+m.type.slice(1)}return(m,n)=>(i(),s("div",Mn,[e("div",En,[e("div",Pn,[n[0]||(n[0]=U(" Layers ",-1)),e("span",An,x(f.value.length),1)])]),f.value.length===0?(i(),s("div",zn,[...n[1]||(n[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(i(),s("div",Nn,[(i(!0),s(W,null,ae(f.value,M=>(i(),s("div",{key:M.id,class:H(["layer-item",w(a).selectedElementIds.includes(M.id)&&"selected",M.locked&&"locked",!M.visible&&"hidden"]),onClick:q=>g(M.id)},[e("span",Tn,x(F(M.type)),1),e("span",jn,x(B(M)),1),e("div",Bn,[e("button",{class:H(["layer-action-btn",{active:M.visible}]),onClick:Ie(q=>c(M),["stop"]),"data-tooltip":M.visible?"Hide":"Show"},[M.visible?(i(),s("svg",qn,[...n[2]||(n[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(i(),s("svg",Dn,[...n[3]||(n[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,Ln),e("button",{class:H(["layer-action-btn",{active:M.locked}]),onClick:Ie(q=>A(M),["stop"]),"data-tooltip":M.locked?"Unlock":"Lock"},[M.locked?(i(),s("svg",Fn,[...n[4]||(n[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(i(),s("svg",Un,[...n[5]||(n[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,Rn),e("button",{class:"layer-action-btn",onClick:Ie(q=>Y(M.id),["stop"]),"data-tooltip":"Move up"},[...n[6]||(n[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,On),e("button",{class:"layer-action-btn",onClick:Ie(q=>Q(M.id),["stop"]),"data-tooltip":"Move down"},[...n[7]||(n[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Gn),e("button",{class:"layer-action-btn danger",onClick:Ie(q=>L(M.id),["stop"]),"data-tooltip":"Delete"},[...n[8]||(n[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Vn)])],10,_n))),128))]))]))}},Hn=Te(Wn,[["__scopeId","data-v-7407acd8"]]),Qn={class:"panel-section"},Yn={class:"preset-toolbar"},Jn=["value"],Kn=["value"],Xn=["value"],Zn={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},el=["onClick"],tl={class:"preset-meta-chip muted"},ol={key:1,class:"import-review"},nl={class:"motion-scrubber-header"},ll={class:"preset-toolbar compact"},il=["value"],sl=["value"],al={class:"import-list"},rl=["onUpdate:modelValue"],ul={class:"import-item-title"},dl={class:"preset-meta-chip"},cl={key:0,class:"preset-meta-chip muted"},pl={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(y,{emit:a}){const r=a;return(u,p)=>(i(),s("div",Qn,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",Yn,[e("input",{value:y.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=f=>r("update:searchQuery",f.target.value))},null,40,Jn),e("select",{value:y.categoryFilter,class:"select",onChange:p[1]||(p[1]=f=>r("update:categoryFilter",f.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(i(!0),s(W,null,ae(y.availableCategories,f=>(i(),s("option",{key:`library-${f}`,value:f},x(f),9,Xn))),128))],40,Kn),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=f=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=f=>r("export-presets"))},"Export")]),y.recentPresets.length?(i(),s("div",Zn,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(i(!0),s(W,null,ae(y.recentPresets,f=>(i(),s("div",{class:"preset-item",key:`recent-${f.id}`},[e("button",{type:"button",class:"preset-chip",onClick:g=>r("apply-preset",f)},x(f.name),9,el),e("span",tl,"Used "+x(f.usageCount)+"x",1)]))),128))])):T("",!0),y.pendingImportedPresets.length?(i(),s("div",ol,[e("div",nl,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=f=>r("clear-imports"))},"Discard")]),e("div",ll,[e("select",{value:y.importScopeFilter,class:"select",onChange:p[5]||(p[5]=f=>r("update:importScopeFilter",f.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,il),e("select",{value:y.importConflictMode,class:"select",onChange:p[6]||(p[6]=f=>r("update:importConflictMode",f.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,sl),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=f=>r("apply-imports"))},"Merge Selected")]),e("div",al,[(i(!0),s(W,null,ae(y.filteredPendingImports,f=>(i(),s("label",{key:`pending-${f.id}`,class:"import-item"},[ne(e("input",{"onUpdate:modelValue":g=>f.selected=g,type:"checkbox"},null,8,rl),[[mt,f.selected]]),e("span",ul,x(f.name),1),e("span",dl,x(f.scope),1),f.category?(i(),s("span",cl,x(f.category),1)):T("",!0)]))),128))])])):T("",!0)]))}},vl=Te(pl,[["__scopeId","data-v-61f99273"]]),ml={class:"properties-panel"},fl={key:1,class:"panel-section"},gl={class:"field-hint"},bl={class:"motion-scrubber-shell"},yl={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},hl=["onClick"],xl={class:"motion-preview"},wl={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},kl={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},Cl={class:"motion-card-label"},Sl={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},$l={class:"form-group"},Il={class:"form-group"},Ml={class:"form-group",style:{"margin-top":"var(--space-3)"}},El={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Pl={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Al={key:0,class:"preset-list"},zl=["onDragstart","onDragenter","onDrop"],Nl=["onClick"],_l={key:0,class:"preset-meta-chip"},Tl=["onClick"],jl=["onClick"],Bl=["onClick"],Ll={key:1,class:"preset-row preset-edit-row"},ql=["onClick"],Dl={key:1,class:"field-hint"},Rl={key:2,class:"panel-section"},Fl={class:"slide-settings-tabs"},Ul={key:0,class:"slide-settings-pane"},Ol={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gl={class:"form-group"},Vl={class:"bg-type-tabs"},Wl=["onClick"],Hl={key:0,class:"color-row"},Ql=["value"],Yl=["value"],Jl={class:"slide-settings-subsection"},Kl={class:"canvas-size-grid"},Xl=["onClick"],Zl={class:"canvas-size-icon-shell"},ei={class:"canvas-size-name"},ti={class:"canvas-size-ratio"},oi={class:"canvas-custom-card"},ni={class:"canvas-custom-header"},li={class:"field-hint"},ii={class:"canvas-custom-inputs"},si={class:"form-group"},ai={class:"canvas-size-input-wrap"},ri=["value"],ui={class:"form-group"},di={class:"canvas-size-input-wrap"},ci=["value"],pi={class:"check-row canvas-size-lock"},vi={class:"slide-settings-subsection"},mi={key:1,class:"slide-settings-pane"},fi=["value"],gi={class:"form-group",style:{"margin-top":"var(--space-3)"}},bi=["value"],yi={class:"check-row"},hi=["checked"],xi={key:2,class:"slide-settings-pane"},wi={class:"check-row"},ki=["checked"],Ci={class:"check-row"},Si=["checked"],$i={class:"check-row"},Ii=["checked"],Mi={class:"check-row"},Ei=["checked"],Pi={class:"check-row"},Ai=["checked"],zi={class:"panel-section"},Ni={class:"panel-title"},_i={class:"element-type-badge"},Ti={class:"geo-grid"},ji={class:"form-group"},Bi=["value"],Li={class:"form-group"},qi=["value"],Di={class:"form-group"},Ri=["value"],Fi={class:"form-group"},Ui=["value"],Oi={class:"form-group"},Gi=["value"],Vi={class:"form-group"},Wi=["value"],Hi={class:"panel-section"},Qi={class:"motion-scrubber-shell"},Yi={class:"motion-card-grid"},Ji=["onClick"],Ki={class:"motion-preview"},Xi={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Zi={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},es={class:"motion-card-label"},ts={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},os={class:"form-group"},ns=["value"],ls={class:"form-group"},is=["value"],ss={class:"preset-row",style:{"margin-top":"var(--space-3)"}},as={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},rs={key:0,class:"preset-list"},us=["onDragstart","onDragenter","onDrop"],ds=["onClick"],cs={key:0,class:"preset-meta-chip"},ps=["onClick"],vs=["onClick"],ms=["onClick"],fs={key:1,class:"preset-row preset-edit-row"},gs=["onClick"],bs={key:1,class:"field-hint"},ys={key:0,class:"panel-section"},hs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xs=["value"],ws={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},ks={class:"form-group"},Cs=["value"],Ss={class:"form-group"},$s=["value"],Is={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ms=["value"],Es=["value"],Ps={class:"form-group",style:{"margin-top":"var(--space-3)"}},As={class:"align-btns"},zs=["onClick"],Ns={class:"form-group",style:{"margin-top":"var(--space-3)"}},_s={class:"style-btns"},Ts={class:"form-group",style:{"margin-top":"var(--space-3)"}},js={class:"color-row"},Bs=["value"],Ls=["value"],qs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ds=["value"],Rs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Fs={class:"form-group"},Us=["value"],Os={class:"form-group"},Gs=["value"],Vs={key:1,class:"panel-section"},Ws={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hs=["value"],Qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ys=["value"],Js={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ks=["value"],Xs={class:"form-group"},Zs=["value"],ea={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ta={class:"form-group"},oa=["value"],na={class:"form-group"},la=["value"],ia={key:2,class:"panel-section"},sa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},aa=["value"],ra={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ua={class:"color-row"},da=["value"],ca=["value"],pa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},va={class:"color-row"},ma=["value"],fa=["value"],ga={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ba=["value"],ya={class:"form-group"},ha=["value"],xa={class:"form-group",style:{"margin-top":"var(--space-3)"}},wa=["value"],ka={key:3,class:"panel-section"},Ca={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Sa=["value"],$a={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ia=["value"],Ma={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ea=["value"],Pa={key:0,class:"form-group"},Aa=["value"],za={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Na={class:"form-group"},_a=["value"],Ta={class:"form-group"},ja=["value"],Ba={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},La={class:"form-group"},qa=["value"],Da={class:"form-group"},Ra=["value"],Fa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ua={class:"form-group"},Oa=["value"],Ga={class:"form-group"},Va=["value"],Wa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ha={class:"form-group"},Qa=["value"],Ya=["value"],Ja={class:"form-group"},Ka=["value"],Xa={key:4,class:"panel-section"},Za={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},er=["value"],tr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},or={class:"color-row"},nr=["value"],lr=["value"],ir={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},sr={class:"form-group"},ar=["value"],rr={class:"form-group"},ur=["value"],dr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},cr=["value"],pr={class:"form-group"},vr=["value"],mr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},fr={class:"form-group"},gr=["value"],br={class:"form-group"},yr=["value"],hr={key:5,class:"panel-section"},xr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wr=["value"],kr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cr=["value"],Sr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$r=["value"],Ir={class:"check-row"},Mr=["checked"],Er={class:"check-row"},Pr=["checked"],Ar={class:"check-row"},zr=["checked"],Nr={class:"check-row"},_r=["checked"],Tr={key:6,class:"panel-section"},jr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Br=["value"],Lr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},qr=["value"],Dr={class:"check-row"},Rr=["checked"],Fr={class:"check-row"},Ur=["checked"],Or={class:"check-row"},Gr=["checked"],Vr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Wr={class:"form-group"},Hr=["value"],Qr={class:"form-group"},Yr=["value"],Jr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Kr=["value"],Xr={key:7,class:"panel-section"},Zr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},eu=["value"],tu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ou=["value"],nu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},lu=["value"],iu={class:"form-group"},su=["value"],au={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ru={class:"form-group"},uu=["value"],du={class:"form-group"},cu=["value"],pu={class:"form-group",style:{"margin-top":"var(--space-3)"}},vu=["value"],mu={class:"panel-section"},fu={class:"actions-list"},gu={__name:"PropertiesPanel",setup(y){const a=Ge(),r=Ve(),u=S(()=>r.getProject(a.projectId)),p=S(()=>{var d,t;return(t=(d=u.value)==null?void 0:d.slides)==null?void 0:t.find(z=>z.id===a.currentSlideId)}),f=S(()=>{var d;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((d=u.value)==null?void 0:d.settings)||{}}}),g=S(()=>pt(f.value)),c=S(()=>Fo(f.value)),A=S(()=>Uo(g.value.width,g.value.height)),Y=P(!0),Q=P("canvas"),L=S(()=>Array.isArray(f.value.motionPresets)?f.value.motionPresets:[]),F=S(()=>L.value.filter(d=>d.scope!=="group")),B=S(()=>L.value.filter(d=>d.scope==="group")),m=S(()=>{var t;const d=new Set(a.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(z=>d.has(z.id))}),n=S(()=>{var d,t;return a.selectedElementId?(t=(d=p.value)==null?void 0:d.elements)==null?void 0:t.find(z=>z.id===a.selectedElementId):null}),M=S(()=>a.multiSelection||!!n.value),q=S(()=>a.multiSelection?"group":"single"),J=S(()=>{var t,z;const d=(z=(t=n.value)==null?void 0:t.animations)==null?void 0:z[0];return{type:(d==null?void 0:d.type)||"auto",delay:Number((d==null?void 0:d.delay)||0),duration:Number((d==null?void 0:d.duration)||.64)}}),le=S(()=>{var ke,Ae;const d=m.value.map(Me=>{var Ze;return((Ze=Me.animations)==null?void 0:Ze[0])||null}),t=((ke=d[0])==null?void 0:ke.type)||"auto",z=Number(((Ae=d[0])==null?void 0:Ae.duration)||.64),ee=d.every(Me=>((Me==null?void 0:Me.type)||"auto")===t),we=d.every(Me=>Number((Me==null?void 0:Me.duration)||.64)===z);return{type:ee?t:"mixed",duration:we?z:.64}}),ve=P(0),N=P(0),D=P(""),K=P(""),ce=P(""),V=P(""),te=P(""),ue=P(""),fe=P(""),ge=P(""),$e=P(""),Ee=P(""),xe=P(""),se=P(""),de=P(""),j=P("all"),Z=P(null),X=P([]),ie=P("all"),me=P("replace"),he=P({});Fe(n,d=>{d?he.value=JSON.parse(JSON.stringify(d)):he.value={}},{immediate:!0,deep:!0});function Se(d){n.value&&r.updateElement(a.projectId,a.currentSlideId,n.value.id,d)}function $(d){if(!n.value)return;const t={...n.value.content,...d};Se({content:t})}function E(d,t){const z=parseFloat(t);isNaN(z)||Se({[d]:z})}const b=P({});Fe(p,d=>{d&&(b.value={...d})},{immediate:!0});function I(d){p.value&&r.updateSlide(a.projectId,p.value.id,d)}function be(d){if(!u.value)return;const t={...f.value,...d};r.updateProject(a.projectId,{settings:{...t,...vn(t)}})}function ze(d){be({slideWidth:d.width,slideHeight:d.height})}function Pe(d,t){const z=Math.round(Number(t)||0);if(!z)return;const ee={[`slide${d==="width"?"Width":"Height"}`]:z};if(Y.value){const we=g.value.width,ke=g.value.height;d==="width"?ee.slideHeight=Math.round(z*(ke/we)):ee.slideWidth=Math.round(z*(we/ke))}be(ee)}function _e(d){return String(d||"").split(",").map(t=>t.trim()).filter(Boolean)}function ye(d){const t=(d==null?void 0:d.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((d==null?void 0:d.name)||"Imported Preset").trim()||"Imported Preset",category:String((d==null?void 0:d.category)||"").trim(),tags:Array.isArray(d==null?void 0:d.tags)?d.tags.map(z=>String(z).trim()).filter(Boolean):_e(d==null?void 0:d.tags),type:String((d==null?void 0:d.type)||"auto"),delay:Math.max(0,Number(d==null?void 0:d.delay)||0),duration:Math.max(.1,Number(d==null?void 0:d.duration)||.72),stepDelay:Math.max(0,Number(d==null?void 0:d.stepDelay)||0)}}const Ue=S(()=>[...new Set(L.value.map(t=>t.category).filter(Boolean))].sort((t,z)=>t.localeCompare(z))),Oe=S(()=>[...L.value].filter(d=>Number(d.usageCount||0)>0).sort((d,t)=>{const z=Number(t.lastUsedAt||0)-Number(d.lastUsedAt||0);return z!==0?z:Number(t.usageCount||0)-Number(d.usageCount||0)}).slice(0,6)),Qe=S(()=>ie.value==="all"?X.value:X.value.filter(d=>d.scope===ie.value));function tt(d){const t=de.value.trim().toLowerCase(),z=j.value;return z==="all"||(d.category||"")===z?t?[d.name,d.category,...d.tags||[]].filter(Boolean).some(we=>String(we).toLowerCase().includes(t)):!0:!1}const ot=S(()=>F.value.filter(tt)),C=S(()=>B.value.filter(tt)),l=S(()=>Oe.value.filter(d=>q.value==="group"?d.scope==="group":d.scope!=="group"));function _(d){const t=String(d.name||"").trim();if(!t)return;const z=L.value.findIndex(ke=>ke.scope===d.scope&&ke.name.toLowerCase()===t.toLowerCase()),ee={...d,id:z>=0?L.value[z].id:`motion-${Date.now()}`,name:t,category:String(d.category||"").trim(),tags:Array.isArray(d.tags)?d.tags:_e(d.tags)},we=[...L.value];z>=0?we.splice(z,1,ee):we.push(ee),be({motionPresets:we})}function oe(d,t){const z=L.value.map(ee=>ee.id===d?{...ee,...t}:ee);be({motionPresets:z})}function v(d){const t=L.value.find(z=>z.id===d);t&&oe(d,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function k(d,t){const z=L.value.filter(Ae=>Ae.scope===d).map(Ae=>Ae.name.toLowerCase()),ee=String(t||"Preset").trim()||"Preset";if(!z.includes(ee.toLowerCase()))return ee;let we=2,ke=`${ee} Copy`;for(;z.includes(ke.toLowerCase());)ke=`${ee} Copy ${we}`,we+=1;return ke}function R(d){be({motionPresets:L.value.filter(t=>t.id!==d)}),ce.value===d&&(ce.value="",V.value="")}function G(d){_({...d,id:void 0,name:k(d.scope,d.name)})}function h(d){ce.value=d.id,V.value=d.name,te.value=d.category||"",ue.value=Array.isArray(d.tags)?d.tags.join(", "):""}function Ce(){ce.value="",V.value="",te.value="",ue.value=""}function Le(d){const t=String(V.value||"").trim();t&&(oe(d,{name:t,category:String(te.value||"").trim(),tags:_e(ue.value)}),Ce())}function je(d,t,z){if(!t||!z||t===z)return;const ee=L.value.filter(De=>De.scope===d),we=ee.findIndex(De=>De.id===t),ke=ee.findIndex(De=>De.id===z);if(we===-1||ke===-1)return;const Ae=[...ee],[Me]=Ae.splice(we,1);Ae.splice(ke,0,Me);const Ze=L.value.filter(De=>De.scope!==d),at=[];L.value.forEach(De=>{if(De.scope===d){Ae.length&&at.push(Ae.shift());return}const dt=Ze.shift();dt&&at.push(dt)}),be({motionPresets:at})}function Je(d){fe.value=d.id,ge.value=d.id}function Ne(d){fe.value&&(ge.value=d.id)}function nt(d){fe.value&&(je(d.scope,fe.value,d.id),fe.value="",ge.value="")}function qe(){fe.value="",ge.value=""}function We(){ve.value+=1}function He(){N.value+=1}function lt(d,t){I({[d]:t})}function ut(d){const t=Math.max(0,Number(d)||0);I({duration:t})}function Ke(d){var ee;if(!n.value)return;const z={...((ee=n.value.animations)==null?void 0:ee[0])||{type:"auto",delay:0,duration:.64},...d};if(z.type==="auto"){Se({animations:[]});return}Se({animations:[{type:z.type||"none",delay:Math.max(0,Number(z.delay)||0),duration:Math.max(.1,Number(z.duration)||.64)}]})}const Ye=P("stagger-in"),it=P(0),st=P(.12),Xe=P(.72);Fe(m,d=>{d.length&&(Ye.value=le.value.type==="mixed"?"stagger-in":le.value.type,Xe.value=le.value.duration)},{immediate:!0,deep:!0});function Go(){if(!m.value.length)return;[...m.value].sort((t,z)=>(t.y||0)!==(z.y||0)?(t.y||0)-(z.y||0):(t.x||0)-(z.x||0)).forEach((t,z)=>{if(Ye.value==="auto"){r.updateElement(a.projectId,a.currentSlideId,t.id,{animations:[]});return}r.updateElement(a.projectId,a.currentSlideId,t.id,{animations:[{type:Ye.value,delay:Math.max(0,Number(it.value)||0)+z*Math.max(0,Number(st.value)||0),duration:Math.max(.1,Number(Xe.value)||.72)}]})})}function gt(d){Ye.value=d.type||"stagger-in",it.value=Number(d.delay||0),st.value=Number(d.stepDelay||0),Xe.value=Number(d.duration||.72),v(d.id),He()}function Vo(){_({scope:"group",name:K.value,category:xe.value,tags:_e(se.value),type:Ye.value,delay:Math.max(0,Number(it.value)||0),stepDelay:Math.max(0,Number(st.value)||0),duration:Math.max(.1,Number(Xe.value)||.72)}),K.value="",xe.value="",se.value=""}function bt(d){Ke({type:d.type||"auto",delay:Number(d.delay||0),duration:Number(d.duration||.72)}),v(d.id),We()}function Wo(){_({scope:"single",name:D.value,category:$e.value,tags:_e(Ee.value),type:J.value.type,delay:Math.max(0,Number(J.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(J.value.duration)||.72)}),D.value="",$e.value="",Ee.value=""}function Ho(){var d;(d=Z.value)==null||d.click()}async function Qo(d){var ee;const t=d.target,z=(ee=t==null?void 0:t.files)==null?void 0:ee[0];if(z)try{const we=await z.text(),ke=JSON.parse(we),Ae=Array.isArray(ke)?ke:Array.isArray(ke.motionPresets)?ke.motionPresets:[];if(!Ae.length)return;X.value=Ae.map(Me=>({...ye(Me),selected:!0,importName:String((Me==null?void 0:Me.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function yt(){X.value=[]}function Yo(){const d=X.value.filter(z=>z.selected);if(!d.length)return;const t=[...L.value];d.forEach(z=>{const ee=t.findIndex(we=>we.scope===z.scope&&we.name.toLowerCase()===z.name.toLowerCase());if(ee>=0){me.value==="replace"?t.splice(ee,1,{...t[ee],...z,id:t[ee].id}):t.push({...z,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:k(z.scope,z.name)});return}t.push(z)}),be({motionPresets:t}),yt()}function Jo(){var ke;if(!L.value.length)return;const d={version:1,exportedAt:new Date().toISOString(),motionPresets:L.value.map(({id:Ae,...Me})=>Me)},t=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),z=URL.createObjectURL(t),ee=document.createElement("a"),we=String(((ke=u.value)==null?void 0:ke.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";ee.href=z,ee.download=`${we}-motion-presets.json`,document.body.appendChild(ee),ee.click(),document.body.removeChild(ee),URL.revokeObjectURL(z)}const Ko=S(()=>[{id:`single-${ve.value}`,delay:Math.max(0,Number(J.value.delay)||0),duration:Math.max(.1,Number(J.value.duration)||.72),type:J.value.type}]),Xo=S(()=>Array.from({length:Math.min(Math.max(m.value.length,3),5)},(d,t)=>({id:`group-${N.value}-${t}`,delay:Math.max(0,Number(it.value)||0)+t*Math.max(0,Number(st.value)||0),duration:Math.max(.1,Number(Xe.value)||.72),type:Ye.value}))),ht=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],xt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(d,t)=>{var z,ee,we,ke,Ae,Me,Ze,at,De,dt,wt,kt,Ct,St,$t,It,Mt,Et,Pt,At,zt,Nt,_t,Tt,jt,Bt,Lt,qt,Dt,Rt,Ft,Ut,Ot,Gt,Vt,Wt,Ht,Qt,Yt,Jt,Kt,Xt,Zt,eo,to,oo,no,lo,io,so,ao,ro,uo,co,po,vo,mo,fo,go,bo,yo,ho,xo,wo,ko,Co,So,$o,Io,Mo,Eo,Po,Ao,zo,No,_o,To,jo;return i(),s("div",ml,[e("input",{ref_key:"presetImportInput",ref:Z,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:Qo},null,544),t[261]||(t[261]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),M.value?(i(),Be(vl,{key:0,"search-query":de.value,"category-filter":j.value,"available-categories":Ue.value,"recent-presets":l.value,"pending-imported-presets":X.value,"filtered-pending-imports":Qe.value,"import-scope-filter":ie.value,"import-conflict-mode":me.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>de.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>j.value=o),onTriggerImport:Ho,onExportPresets:Jo,onApplyPreset:t[2]||(t[2]=o=>q.value==="group"?gt(o):bt(o)),onClearImports:yt,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>ie.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>me.value=o),onApplyImports:Yo},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):T("",!0),w(a).multiSelection?(i(),s("div",fl,[t[130]||(t[130]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",gl,x(m.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",bl,[e("div",{class:"motion-scrubber-header"},[t[126]||(t[126]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:He},"Replay")]),(i(),s("div",{class:"motion-scrubber-stage",key:`group-preview-${N.value}`},[(i(!0),s(W,null,ae(Xo.value,o=>(i(),s("span",{key:o.id,class:H(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:re({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",yl,[(i(),s(W,null,ae(ht,o=>e("button",{key:`group-${o.value}`,type:"button",class:H(["motion-card",Ye.value===o.value&&"active"]),onClick:O=>Ye.value=o.value},[e("span",xl,[e("span",{class:H(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(i(),s("span",wl)):T("",!0),o.value==="stagger-in"?(i(),s("span",kl)):T("",!0)]),e("span",Cl,x(o.label),1)],10,hl)),64))]),e("div",Sl,[e("div",$l,[t[127]||(t[127]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),ne(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>it.value=o),class:"input"},null,512),[[pe,it.value]])]),e("div",Il,[t[128]||(t[128]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),ne(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>st.value=o),class:"input"},null,512),[[pe,st.value]])])]),e("div",Ml,[t[129]||(t[129]=e("label",{class:"form-label"},"Duration (seconds)",-1)),ne(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>Xe.value=o),class:"input"},null,512),[[pe,Xe.value]])]),e("div",El,[ne(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>K.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[pe,K.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Vo},"Save")]),e("div",Pl,[ne(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>xe.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[pe,xe.value]]),ne(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>se.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[pe,se.value]])]),C.value.length?(i(),s("div",Al,[(i(!0),s(W,null,ae(C.value,o=>(i(),s("div",{key:o.id,class:H(["preset-item",fe.value===o.id&&"dragging",ge.value===o.id&&fe.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:O=>Je(o),onDragenter:Ie(O=>Ne(o),["prevent"]),onDragover:t[14]||(t[14]=Ie(()=>{},["prevent"])),onDrop:Ie(O=>nt(o),["prevent"]),onDragend:qe},[e("button",{type:"button",class:"preset-chip",onClick:O=>gt(o)},x(o.name),9,Nl),o.category?(i(),s("span",_l,x(o.category),1)):T("",!0),(i(!0),s(W,null,ae(o.tags||[],O=>(i(),s("span",{key:`${o.id}-${O}`,class:"preset-meta-chip muted"},"#"+x(O),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:O=>G(o)},"Duplicate",8,Tl),e("button",{type:"button",class:"preset-mini-btn",onClick:O=>h(o)},"Rename",8,jl),e("button",{type:"button",class:"preset-mini-btn danger",onClick:O=>R(o.id)},"Delete",8,Bl),ce.value===o.id?(i(),s("div",Ll,[ne(e("input",{"onUpdate:modelValue":t[11]||(t[11]=O=>V.value=O),class:"input"},null,512),[[pe,V.value]]),ne(e("input",{"onUpdate:modelValue":t[12]||(t[12]=O=>te.value=O),class:"input",placeholder:"Category"},null,512),[[pe,te.value]]),ne(e("input",{"onUpdate:modelValue":t[13]||(t[13]=O=>ue.value=O),class:"input",placeholder:"Tags, comma separated"},null,512),[[pe,ue.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:O=>Le(o.id)},"Save",8,ql),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ce},"Cancel")])):T("",!0)],42,zl))),128))])):B.value.length?(i(),s("div",Dl,"No group presets match the current search.")):T("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Go}," Apply Sequence to Selection ")])):n.value?(i(),s(W,{key:3},[e("div",zi,[e("div",Ni,[t[161]||(t[161]=U(" Position & Size ",-1)),e("span",_i,x(n.value.type),1)]),e("div",Ti,[e("div",ji,[t[162]||(t[162]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(n.value.x),class:"input",onChange:t[39]||(t[39]=o=>E("x",o.target.value))},null,40,Bi)]),e("div",Li,[t[163]||(t[163]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(n.value.y),class:"input",onChange:t[40]||(t[40]=o=>E("y",o.target.value))},null,40,qi)]),e("div",Di,[t[164]||(t[164]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(n.value.width),class:"input",onChange:t[41]||(t[41]=o=>E("width",o.target.value))},null,40,Ri)]),e("div",Fi,[t[165]||(t[165]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(n.value.height),class:"input",onChange:t[42]||(t[42]=o=>E("height",o.target.value))},null,40,Ui)]),e("div",Oi,[t[166]||(t[166]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(n.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>E("rotation",o.target.value))},null,40,Gi)]),e("div",Vi,[t[167]||(t[167]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:n.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>E("opacity",o.target.value))},null,40,Wi)])])]),e("div",Hi,[t[171]||(t[171]=e("div",{class:"panel-title"},"Animation",-1)),e("div",Qi,[e("div",{class:"motion-scrubber-header"},[t[168]||(t[168]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:We},"Replay")]),(i(),s("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${ve.value}`},[(i(!0),s(W,null,ae(Ko.value,o=>(i(),s("span",{key:o.id,class:H(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:re({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Yi,[(i(),s(W,null,ae(ht,o=>e("button",{key:o.value,type:"button",class:H(["motion-card",J.value.type===o.value&&"active"]),onClick:O=>Ke({type:o.value})},[e("span",Ki,[e("span",{class:H(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(i(),s("span",Xi)):T("",!0),o.value==="stagger-in"?(i(),s("span",Zi)):T("",!0)]),e("span",es,x(o.label),1)],10,Ji)),64))]),e("div",ts,[e("div",os,[t[169]||(t[169]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:J.value.delay,class:"input",onChange:t[45]||(t[45]=o=>Ke({delay:o.target.value}))},null,40,ns)]),e("div",ls,[t[170]||(t[170]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:J.value.duration,class:"input",onChange:t[46]||(t[46]=o=>Ke({duration:o.target.value}))},null,40,is)])]),e("div",ss,[ne(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>D.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[pe,D.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Wo},"Save")]),e("div",as,[ne(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>$e.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[pe,$e.value]]),ne(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>Ee.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[pe,Ee.value]])]),ot.value.length?(i(),s("div",rs,[(i(!0),s(W,null,ae(ot.value,o=>(i(),s("div",{key:o.id,class:H(["preset-item",fe.value===o.id&&"dragging",ge.value===o.id&&fe.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:O=>Je(o),onDragenter:Ie(O=>Ne(o),["prevent"]),onDragover:t[53]||(t[53]=Ie(()=>{},["prevent"])),onDrop:Ie(O=>nt(o),["prevent"]),onDragend:qe},[e("button",{type:"button",class:"preset-chip",onClick:O=>bt(o)},x(o.name),9,ds),o.category?(i(),s("span",cs,x(o.category),1)):T("",!0),(i(!0),s(W,null,ae(o.tags||[],O=>(i(),s("span",{key:`${o.id}-${O}`,class:"preset-meta-chip muted"},"#"+x(O),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:O=>G(o)},"Duplicate",8,ps),e("button",{type:"button",class:"preset-mini-btn",onClick:O=>h(o)},"Rename",8,vs),e("button",{type:"button",class:"preset-mini-btn danger",onClick:O=>R(o.id)},"Delete",8,ms),ce.value===o.id?(i(),s("div",fs,[ne(e("input",{"onUpdate:modelValue":t[50]||(t[50]=O=>V.value=O),class:"input"},null,512),[[pe,V.value]]),ne(e("input",{"onUpdate:modelValue":t[51]||(t[51]=O=>te.value=O),class:"input",placeholder:"Category"},null,512),[[pe,te.value]]),ne(e("input",{"onUpdate:modelValue":t[52]||(t[52]=O=>ue.value=O),class:"input",placeholder:"Tags, comma separated"},null,512),[[pe,ue.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:O=>Le(o.id)},"Save",8,gs),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Ce},"Cancel")])):T("",!0)],42,us))),128))])):F.value.length?(i(),s("div",bs,"No single-element presets match the current search.")):T("",!0),t[172]||(t[172]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))]),["text","heading"].includes(n.value.type)?(i(),s("div",ys,[t[188]||(t[188]=e("div",{class:"panel-title"},"Text",-1)),e("div",hs,[t[173]||(t[173]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(at=n.value.content)==null?void 0:at.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>$({text:o.target.value}))},null,40,xs)]),e("div",ws,[e("div",ks,[t[174]||(t[174]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(De=n.value.content)==null?void 0:De.fontSize,class:"input",onChange:t[55]||(t[55]=o=>$({fontSize:+o.target.value}))},null,40,Cs)]),e("div",Ss,[t[176]||(t[176]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(dt=n.value.content)==null?void 0:dt.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>$({fontWeight:o.target.value}))},[...t[175]||(t[175]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,$s)])]),e("div",Is,[t[177]||(t[177]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(wt=n.value.content)==null?void 0:wt.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>$({fontFamily:o.target.value}))},[(i(),s(W,null,ae(xt,o=>e("option",{key:o,value:o},x(o.split(",")[0]),9,Es)),64))],40,Ms)]),e("div",Ps,[t[178]||(t[178]=e("label",{class:"form-label"},"Align",-1)),e("div",As,[(i(),s(W,null,ae(["left","center","right","justify"],o=>{var O;return e("button",{key:o,class:H(["align-btn",((O=n.value.content)==null?void 0:O.textAlign)===o&&"active"]),onClick:Bo=>$({textAlign:o})},x(o[0].toUpperCase()),11,zs)}),64))])]),e("div",Ns,[t[182]||(t[182]=e("label",{class:"form-label"},"Style",-1)),e("div",_s,[e("button",{class:H(["style-btn",((kt=n.value.content)==null?void 0:kt.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var O;return $({fontStyle:((O=n.value.content)==null?void 0:O.fontStyle)==="italic"?"normal":"italic"})})},[...t[179]||(t[179]=[e("i",null,"I",-1)])],2),e("button",{class:H(["style-btn",((Ct=n.value.content)==null?void 0:Ct.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var O;return $({textDecoration:((O=n.value.content)==null?void 0:O.textDecoration)==="underline"?"none":"underline"})})},[...t[180]||(t[180]=[e("u",null,"U",-1)])],2),e("button",{class:H(["style-btn",((St=n.value.content)==null?void 0:St.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var O;return $({textDecoration:((O=n.value.content)==null?void 0:O.textDecoration)==="line-through"?"none":"line-through"})})},[...t[181]||(t[181]=[e("s",null,"S",-1)])],2)])]),e("div",Ts,[t[183]||(t[183]=e("label",{class:"form-label"},"Color",-1)),e("div",js,[e("input",{type:"color",value:(($t=n.value.content)==null?void 0:$t.color)||"#000",onInput:t[61]||(t[61]=o=>$({color:o.target.value})),class:"color-input-native"},null,40,Bs),e("input",{value:((It=n.value.content)==null?void 0:It.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>$({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Ls)])]),e("div",qs,[t[184]||(t[184]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Mt=n.value.content)==null?void 0:Mt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>$({lineHeight:+o.target.value}))},null,40,Ds)]),e("div",Rs,[e("div",Fs,[t[186]||(t[186]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Et=n.value.content)==null?void 0:Et.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>$({textTransform:o.target.value}))},[...t[185]||(t[185]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,Us)]),e("div",Os,[t[187]||(t[187]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Pt=n.value.content)==null?void 0:Pt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>$({letterSpacing:+o.target.value}))},null,40,Gs)])])])):T("",!0),n.value.type==="image"?(i(),s("div",Vs,[t[196]||(t[196]=e("div",{class:"panel-title"},"Image",-1)),e("div",Ws,[t[189]||(t[189]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(At=n.value.content)==null?void 0:At.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>$({src:o.target.value}))},null,40,Hs)]),e("div",Qs,[t[190]||(t[190]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(zt=n.value.content)==null?void 0:zt.alt,class:"input",onInput:t[67]||(t[67]=o=>$({alt:o.target.value}))},null,40,Ys)]),e("div",Js,[t[192]||(t[192]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((Nt=n.value.content)==null?void 0:Nt.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>$({objectFit:o.target.value}))},[...t[191]||(t[191]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Ks)]),e("div",Xs,[t[193]||(t[193]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((_t=n.value.content)==null?void 0:_t.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>$({borderRadius:+o.target.value}))},null,40,Zs)]),e("div",ea,[e("div",ta,[t[194]||(t[194]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Tt=n.value.content)==null?void 0:Tt.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>$({borderWidth:+o.target.value}))},null,40,oa)]),e("div",na,[t[195]||(t[195]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((jt=n.value.content)==null?void 0:jt.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>$({borderColor:o.target.value}))},null,40,la)])])])):T("",!0),n.value.type==="shape"?(i(),s("div",ia,[t[204]||(t[204]=e("div",{class:"panel-title"},"Shape",-1)),e("div",sa,[t[198]||(t[198]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((Bt=n.value.content)==null?void 0:Bt.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>$({shapeType:o.target.value}))},[...t[197]||(t[197]=[Re('<option value="rectangle" data-v-688aca37>Rectangle</option><option value="circle" data-v-688aca37>Circle</option><option value="triangle" data-v-688aca37>Triangle</option><option value="star" data-v-688aca37>Star</option><option value="arrow" data-v-688aca37>Arrow</option><option value="diamond" data-v-688aca37>Diamond</option>',6)])],40,aa)]),e("div",ra,[t[199]||(t[199]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",ua,[e("input",{type:"color",value:((Lt=n.value.content)==null?void 0:Lt.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>$({fillColor:o.target.value})),class:"color-input-native"},null,40,da),e("input",{value:((qt=n.value.content)==null?void 0:qt.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>$({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,ca)])]),e("div",pa,[t[200]||(t[200]=e("label",{class:"form-label"},"Border Color",-1)),e("div",va,[e("input",{type:"color",value:((Dt=n.value.content)==null?void 0:Dt.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>$({borderColor:o.target.value})),class:"color-input-native"},null,40,ma),e("input",{value:((Rt=n.value.content)==null?void 0:Rt.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>$({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,fa)])]),e("div",ga,[t[201]||(t[201]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Ft=n.value.content)==null?void 0:Ft.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>$({borderWidth:+o.target.value}))},null,40,ba)]),e("div",ya,[t[202]||(t[202]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Ut=n.value.content)==null?void 0:Ut.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>$({borderRadius:+o.target.value}))},null,40,ha)]),e("div",xa,[t[203]||(t[203]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((Ot=n.value.content)==null?void 0:Ot.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>$({opacity:+o.target.value}))},null,40,wa)])])):T("",!0),n.value.type==="button"?(i(),s("div",ka,[t[220]||(t[220]=e("div",{class:"panel-title"},"Button",-1)),e("div",Ca,[t[205]||(t[205]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Gt=n.value.content)==null?void 0:Gt.label,class:"input",onInput:t[80]||(t[80]=o=>$({label:o.target.value}))},null,40,Sa)]),e("div",$a,[t[207]||(t[207]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Vt=n.value.content)==null?void 0:Vt.variant)||"primary",class:"select",onChange:t[81]||(t[81]=o=>$({variant:o.target.value}))},[...t[206]||(t[206]=[Re('<option value="primary" data-v-688aca37>Primary</option><option value="secondary" data-v-688aca37>Secondary</option><option value="outline" data-v-688aca37>Outline</option><option value="ghost" data-v-688aca37>Ghost</option><option value="danger" data-v-688aca37>Danger</option>',5)])],40,Ia)]),e("div",Ma,[t[209]||(t[209]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((Wt=n.value.content)==null?void 0:Wt.action)||"none",class:"select",onChange:t[82]||(t[82]=o=>$({action:o.target.value}))},[...t[208]||(t[208]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Ea)]),(Ht=n.value.content)!=null&&Ht.action&&n.value.content.action!=="none"?(i(),s("div",Pa,[t[210]||(t[210]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Qt=n.value.content)==null?void 0:Qt.target,class:"input",placeholder:"Slide # or https://...",onInput:t[83]||(t[83]=o=>$({target:o.target.value}))},null,40,Aa)])):T("",!0),e("div",za,[e("div",Na,[t[211]||(t[211]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Yt=n.value.content)==null?void 0:Yt.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[84]||(t[84]=o=>$({bgColor:o.target.value}))},null,40,_a)]),e("div",Ta,[t[212]||(t[212]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Jt=n.value.content)==null?void 0:Jt.textColor)||"#ffffff",class:"color-input-native",onInput:t[85]||(t[85]=o=>$({textColor:o.target.value}))},null,40,ja)])]),e("div",Ba,[e("div",La,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Kt=n.value.content)==null?void 0:Kt.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[86]||(t[86]=o=>$({borderColor:o.target.value}))},null,40,qa)]),e("div",Da,[t[214]||(t[214]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Xt=n.value.content)==null?void 0:Xt.borderRadius)??8,class:"input",onChange:t[87]||(t[87]=o=>$({borderRadius:+o.target.value}))},null,40,Ra)])]),e("div",Fa,[e("div",Ua,[t[215]||(t[215]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Zt=n.value.content)==null?void 0:Zt.fontSize)??15,class:"input",onChange:t[88]||(t[88]=o=>$({fontSize:+o.target.value}))},null,40,Oa)]),e("div",Ga,[t[217]||(t[217]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((eo=n.value.content)==null?void 0:eo.fontWeight)??600),class:"select",onChange:t[89]||(t[89]=o=>$({fontWeight:+o.target.value}))},[...t[216]||(t[216]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,Va)])]),e("div",Wa,[e("div",Ha,[t[218]||(t[218]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((to=n.value.content)==null?void 0:to.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[90]||(t[90]=o=>$({fontFamily:o.target.value}))},[(i(),s(W,null,ae(xt,o=>e("option",{key:`btn-${o}`,value:o},x(o.split(",")[0]),9,Ya)),64))],40,Qa)]),e("div",Ja,[t[219]||(t[219]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((oo=n.value.content)==null?void 0:oo.letterSpacing)??0,class:"input",onChange:t[91]||(t[91]=o=>$({letterSpacing:+o.target.value}))},null,40,Ka)])])])):T("",!0),n.value.type==="hotspot"?(i(),s("div",Xa,[t[230]||(t[230]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Za,[t[222]||(t[222]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((no=n.value.content)==null?void 0:no.icon)||"?",class:"select",onChange:t[92]||(t[92]=o=>$({icon:o.target.value}))},[...t[221]||(t[221]=[Re('<option value="?" data-v-688aca37>? (Info)</option><option value="!" data-v-688aca37>! (Alert)</option><option value="+" data-v-688aca37>+ (Plus)</option><option value="i" data-v-688aca37>i (Info)</option><option value="✦" data-v-688aca37>✦ (Star)</option>',5)])],40,er)]),e("div",tr,[t[223]||(t[223]=e("label",{class:"form-label"},"Background Color",-1)),e("div",or,[e("input",{type:"color",value:((lo=n.value.content)==null?void 0:lo.bgColor)||"#6c47ff",onInput:t[93]||(t[93]=o=>$({bgColor:o.target.value})),class:"color-input-native"},null,40,nr),e("input",{value:((io=n.value.content)==null?void 0:io.bgColor)||"#6c47ff",class:"input",onInput:t[94]||(t[94]=o=>$({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,lr)])]),e("div",ir,[e("div",sr,[t[224]||(t[224]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((so=n.value.content)==null?void 0:so.iconColor)||"#ffffff",class:"color-input-native",onInput:t[95]||(t[95]=o=>$({iconColor:o.target.value}))},null,40,ar)]),e("div",rr,[t[225]||(t[225]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((ao=n.value.content)==null?void 0:ao.borderRadius)??999,class:"input",onChange:t[96]||(t[96]=o=>$({borderRadius:+o.target.value}))},null,40,ur)])]),e("div",dr,[t[226]||(t[226]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(ro=n.value.content)==null?void 0:ro.popupTitle,class:"input",onInput:t[97]||(t[97]=o=>$({popupTitle:o.target.value}))},null,40,cr)]),e("div",pr,[t[227]||(t[227]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(uo=n.value.content)==null?void 0:uo.popupContent,class:"textarea",onInput:t[98]||(t[98]=o=>$({popupContent:o.target.value}))},null,40,vr)]),e("div",mr,[e("div",fr,[t[228]||(t[228]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((co=n.value.content)==null?void 0:co.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[99]||(t[99]=o=>$({popupBgColor:o.target.value}))},null,40,gr)]),e("div",br,[t[229]||(t[229]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((po=n.value.content)==null?void 0:po.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[100]||(t[100]=o=>$({popupTextColor:o.target.value}))},null,40,yr)])])])):T("",!0),n.value.type==="video"?(i(),s("div",hr,[t[239]||(t[239]=e("div",{class:"panel-title"},"Video",-1)),e("div",xr,[t[231]||(t[231]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(vo=n.value.content)==null?void 0:vo.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[101]||(t[101]=o=>$({src:o.target.value}))},null,40,wr)]),e("div",kr,[t[232]||(t[232]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(mo=n.value.content)==null?void 0:mo.poster,class:"input",onInput:t[102]||(t[102]=o=>$({poster:o.target.value}))},null,40,Cr)]),e("div",Sr,[t[234]||(t[234]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((fo=n.value.content)==null?void 0:fo.objectFit)||"cover",class:"select",onChange:t[103]||(t[103]=o=>$({objectFit:o.target.value}))},[...t[233]||(t[233]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,$r)]),e("label",Ir,[e("input",{type:"checkbox",checked:(go=n.value.content)==null?void 0:go.autoplay,onChange:t[104]||(t[104]=o=>$({autoplay:o.target.checked}))},null,40,Mr),t[235]||(t[235]=U(" Autoplay ",-1))]),e("label",Er,[e("input",{type:"checkbox",checked:((bo=n.value.content)==null?void 0:bo.controls)??!0,onChange:t[105]||(t[105]=o=>$({controls:o.target.checked}))},null,40,Pr),t[236]||(t[236]=U(" Show Controls ",-1))]),e("label",Ar,[e("input",{type:"checkbox",checked:(yo=n.value.content)==null?void 0:yo.loop,onChange:t[106]||(t[106]=o=>$({loop:o.target.checked}))},null,40,zr),t[237]||(t[237]=U(" Loop ",-1))]),e("label",Nr,[e("input",{type:"checkbox",checked:(ho=n.value.content)==null?void 0:ho.muted,onChange:t[107]||(t[107]=o=>$({muted:o.target.checked}))},null,40,_r),t[238]||(t[238]=U(" Muted ",-1))])])):T("",!0),n.value.type==="audio"?(i(),s("div",Tr,[t[248]||(t[248]=e("div",{class:"panel-title"},"Audio",-1)),e("div",jr,[t[240]||(t[240]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(xo=n.value.content)==null?void 0:xo.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[108]||(t[108]=o=>$({src:o.target.value}))},null,40,Br)]),e("div",Lr,[t[241]||(t[241]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(wo=n.value.content)==null?void 0:wo.label,class:"input",onInput:t[109]||(t[109]=o=>$({label:o.target.value}))},null,40,qr)]),e("label",Dr,[e("input",{type:"checkbox",checked:(ko=n.value.content)==null?void 0:ko.autoplay,onChange:t[110]||(t[110]=o=>$({autoplay:o.target.checked}))},null,40,Rr),t[242]||(t[242]=U(" Autoplay ",-1))]),e("label",Fr,[e("input",{type:"checkbox",checked:((Co=n.value.content)==null?void 0:Co.controls)!==!1,onChange:t[111]||(t[111]=o=>$({controls:o.target.checked}))},null,40,Ur),t[243]||(t[243]=U(" Show Controls ",-1))]),e("label",Or,[e("input",{type:"checkbox",checked:(So=n.value.content)==null?void 0:So.loop,onChange:t[112]||(t[112]=o=>$({loop:o.target.checked}))},null,40,Gr),t[244]||(t[244]=U(" Loop ",-1))]),e("div",Vr,[e("div",Wr,[t[245]||(t[245]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:(($o=n.value.content)==null?void 0:$o.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[113]||(t[113]=o=>$({accentColor:o.target.value}))},null,40,Hr)]),e("div",Qr,[t[246]||(t[246]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Io=n.value.content)==null?void 0:Io.textColor)||"#555555",class:"color-input-native",onInput:t[114]||(t[114]=o=>$({textColor:o.target.value}))},null,40,Yr)])]),e("div",Jr,[t[247]||(t[247]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((Mo=n.value.content)==null?void 0:Mo.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[115]||(t[115]=o=>$({bgColor:o.target.value}))},null,40,Kr)])])):T("",!0),n.value.type==="quiz"?(i(),s("div",Xr,[t[256]||(t[256]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Zr,[t[249]||(t[249]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(Eo=n.value.content)==null?void 0:Eo.question,class:"textarea",style:{"min-height":"60px"},onInput:t[116]||(t[116]=o=>$({question:o.target.value}))},null,40,eu)]),e("div",tu,[t[250]||(t[250]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(Ao=(Po=n.value.content)==null?void 0:Po.options)==null?void 0:Ao.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[117]||(t[117]=o=>$({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,ou)]),e("div",nu,[t[251]||(t[251]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((zo=n.value.content)==null?void 0:zo.correctIndex)??0,class:"input",onChange:t[118]||(t[118]=o=>$({correctIndex:+o.target.value}))},null,40,lu)]),e("div",iu,[t[252]||(t[252]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(No=n.value.content)==null?void 0:No.explanation,class:"textarea",onInput:t[119]||(t[119]=o=>$({explanation:o.target.value}))},null,40,su)]),e("div",au,[e("div",ru,[t[253]||(t[253]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((_o=n.value.content)==null?void 0:_o.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[120]||(t[120]=o=>$({cardBgColor:o.target.value}))},null,40,uu)]),e("div",du,[t[254]||(t[254]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((To=n.value.content)==null?void 0:To.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[121]||(t[121]=o=>$({questionColor:o.target.value}))},null,40,cu)])]),e("div",pu,[t[255]||(t[255]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((jo=n.value.content)==null?void 0:jo.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[122]||(t[122]=o=>$({accentColor:o.target.value}))},null,40,vu)])])):T("",!0),e("div",mu,[t[260]||(t[260]=e("div",{class:"panel-title"},"Actions",-1)),e("div",fu,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[123]||(t[123]=o=>w(r).duplicateElement(w(a).projectId,w(a).currentSlideId,n.value.id))},[...t[257]||(t[257]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),U(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[124]||(t[124]=o=>{w(a).showInteractionEditor=!0,w(a).interactionElementId=n.value.id})},[...t[258]||(t[258]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),U(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[125]||(t[125]=o=>{w(r).deleteElement(w(a).projectId,w(a).currentSlideId,n.value.id),w(a).clearSelection()})},[...t[259]||(t[259]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),U(" Delete Element ",-1)])])])])],64)):(i(),s("div",Rl,[e("div",Fl,[e("button",{type:"button",class:H(["slide-settings-tab",Q.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>Q.value="canvas")},[...t[131]||(t[131]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:H(["slide-settings-tab",Q.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>Q.value="transitions")},[...t[132]||(t[132]=[Re('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-688aca37><path d="M5 7h5" data-v-688aca37></path><path d="M5 12h10" data-v-688aca37></path><path d="M5 17h14" data-v-688aca37></path><path d="M14 7l5 5-5 5" data-v-688aca37></path></svg><span data-v-688aca37>Transitions</span>',2)])],2),e("button",{type:"button",class:H(["slide-settings-tab",Q.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>Q.value="navigation")},[...t[133]||(t[133]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),Q.value==="canvas"?(i(),s("div",Ul,[t[148]||(t[148]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",Ol,[t[134]||(t[134]=e("label",{class:"form-label"},"Title",-1)),ne(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>b.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>lt("title",b.value.title))},null,544),[[pe,b.value.title]])]),e("div",Gl,[t[135]||(t[135]=e("label",{class:"form-label"},"Background",-1)),e("div",Vl,[(i(),s(W,null,ae(["color","gradient","image"],o=>{var O;return e("button",{key:o,class:H(["bg-type-btn",(((O=p.value)==null?void 0:O.backgroundType)||"color")===o&&"active"]),onClick:Bo=>I({backgroundType:o})},x(o),11,Wl)}),64))]),(((z=p.value)==null?void 0:z.backgroundType)||"color")==="color"?(i(),s("div",Hl,[e("input",{type:"color",value:((ee=p.value)==null?void 0:ee.background)||"#ffffff",onInput:t[20]||(t[20]=o=>I({background:o.target.value})),class:"color-input-native"},null,40,Ql),e("input",{value:((we=p.value)==null?void 0:we.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>I({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Yl)])):((ke=p.value)==null?void 0:ke.backgroundType)==="gradient"?ne((i(),s("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>b.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>I({backgroundGradient:b.value.backgroundGradient}))},null,544)),[[pe,b.value.backgroundGradient]]):ne((i(),s("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>b.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>I({backgroundImage:b.value.backgroundImage}))},null,544)),[[pe,b.value.backgroundImage]])]),e("div",Jl,[t[145]||(t[145]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",Kl,[(i(!0),s(W,null,ae(w(pn),o=>{var O;return i(),s("button",{key:o.id,type:"button",class:H(["canvas-size-card",((O=c.value)==null?void 0:O.id)===o.id&&"active"]),onClick:Bo=>ze(o)},[e("span",Zl,[e("span",{class:H(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[136]||(t[136]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",ei,x(o.label),1),e("span",ti,x(o.ratioLabel),1)],10,Xl)}),128))]),e("div",oi,[e("div",ni,[t[137]||(t[137]=e("span",null,"Custom",-1)),e("span",li,"Current ratio "+x(A.value),1)]),e("div",ii,[e("div",si,[t[139]||(t[139]=e("label",{class:"form-label"},"Width",-1)),e("div",ai,[e("input",{type:"number",min:"320",max:"4096",value:g.value.width,class:"input",onChange:t[26]||(t[26]=o=>Pe("width",o.target.value))},null,40,ri),t[138]||(t[138]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[142]||(t[142]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",ui,[t[141]||(t[141]=e("label",{class:"form-label"},"Height",-1)),e("div",di,[e("input",{type:"number",min:"320",max:"4096",value:g.value.height,class:"input",onChange:t[27]||(t[27]=o=>Pe("height",o.target.value))},null,40,ci),t[140]||(t[140]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",pi,[ne(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>Y.value=o)},null,512),[[mt,Y.value]]),t[143]||(t[143]=U(" Maintain proportions ",-1))]),t[144]||(t[144]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[146]||(t[146]=Re('<div class="canvas-size-callout" data-v-688aca37><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-688aca37><circle cx="12" cy="12" r="9" data-v-688aca37></circle><path d="M12 10v6" data-v-688aca37></path><path d="M12 7h.01" data-v-688aca37></path></svg><span data-v-688aca37>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",vi,[t[147]||(t[147]=e("div",{class:"panel-title"},"Slide Notes",-1)),ne(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>b.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>lt("notes",b.value.notes))},null,544),[[pe,b.value.notes]])])])):Q.value==="transitions"?(i(),s("div",mi,[t[153]||(t[153]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((Ae=p.value)==null?void 0:Ae.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>I({transition:o.target.value}))},[...t[149]||(t[149]=[Re('<option value="none" data-v-688aca37>None</option><option value="fade" data-v-688aca37>Fade</option><option value="slide" data-v-688aca37>Slide</option><option value="zoom" data-v-688aca37>Zoom</option><option value="flip" data-v-688aca37>Flip</option>',5)])],40,fi),e("div",gi,[t[150]||(t[150]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Me=p.value)==null?void 0:Me.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>ut(o.target.value))},null,40,bi),t[151]||(t[151]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",yi,[e("input",{type:"checkbox",checked:!!((Ze=p.value)!=null&&Ze.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>I({advanceOnMediaEnd:o.target.checked}))},null,40,hi),t[152]||(t[152]=U(" Advance when slide media finishes ",-1))]),t[154]||(t[154]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(i(),s("div",xi,[t[160]||(t[160]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",wi,[e("input",{type:"checkbox",checked:f.value.autoPlay,onChange:t[34]||(t[34]=o=>be({autoPlay:o.target.checked}))},null,40,ki),t[155]||(t[155]=U(" Autoplay preview and exported presentation ",-1))]),e("label",Ci,[e("input",{type:"checkbox",checked:f.value.loop,onChange:t[35]||(t[35]=o=>be({loop:o.target.checked}))},null,40,Si),t[156]||(t[156]=U(" Loop back to the first slide at the end ",-1))]),e("label",$i,[e("input",{type:"checkbox",checked:f.value.showProgress,onChange:t[36]||(t[36]=o=>be({showProgress:o.target.checked}))},null,40,Ii),t[157]||(t[157]=U(" Show progress bar in preview ",-1))]),e("label",Mi,[e("input",{type:"checkbox",checked:f.value.showNavControls,onChange:t[37]||(t[37]=o=>be({showNavControls:o.target.checked}))},null,40,Ei),t[158]||(t[158]=U(" Show previous/next and dot navigation ",-1))]),e("label",Pi,[e("input",{type:"checkbox",checked:f.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>be({allowKeyboardNav:o.target.checked}))},null,40,Ai),t[159]||(t[159]=U(" Allow arrow keys and space bar navigation ",-1))])]))]))])}}},bu=Te(gu,[["__scopeId","data-v-688aca37"]]),yu={class:"editor-toolbar"},hu={class:"toolbar-group"},xu={class:"toolbar-group"},wu=["data-tooltip","onClick"],ku={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Cu={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Su={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$u={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Iu={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Mu={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Eu={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Pu={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Au={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},zu={class:"tool-label"},Nu={class:"toolbar-group"},_u={class:"toolbar-group"},Tu={class:"toolbar-group"},ju={__name:"EditorToolbar",emits:["open-ai-project"],setup(y,{emit:a}){const r=a,u=Ge();Ve();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"}];function f(g){u.setActiveTool(g)}return(g,c)=>(i(),s("div",yu,[e("div",hu,[e("button",{class:H(["tool-btn",w(u).activeTool==="select"&&"active"]),onClick:c[0]||(c[0]=A=>f("select")),"data-tooltip":"Select (V)"},[...c[7]||(c[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),c[22]||(c[22]=e("div",{class:"toolbar-divider"},null,-1)),e("div",xu,[(i(),s(W,null,ae(p,A=>e("button",{key:A.id,class:H(["tool-btn",w(u).activeTool===A.id&&"active"]),"data-tooltip":A.tooltip,onClick:Y=>f(A.id)},[A.icon==="text"?(i(),s("svg",ku,[...c[8]||(c[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):A.icon==="heading"?(i(),s("svg",Cu,[...c[9]||(c[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):A.icon==="image"?(i(),s("svg",Su,[...c[10]||(c[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):A.icon==="shape"?(i(),s("svg",$u,[...c[11]||(c[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):A.icon==="button"?(i(),s("svg",Iu,[...c[12]||(c[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):A.icon==="hotspot"?(i(),s("svg",Mu,[...c[13]||(c[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):A.icon==="video"?(i(),s("svg",Eu,[...c[14]||(c[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):A.icon==="audio"?(i(),s("svg",Pu,[...c[15]||(c[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):A.icon==="quiz"?(i(),s("svg",Au,[...c[16]||(c[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):T("",!0),e("span",zu,x(A.label),1)],10,wu)),64))]),c[23]||(c[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Nu,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:c[1]||(c[1]=A=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...c[17]||(c[17]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),c[24]||(c[24]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",_u,[e("button",{class:"tool-btn",onClick:c[2]||(c[2]=A=>w(u).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...c[18]||(c[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:c[3]||(c[3]=A=>w(u).zoomReset())},x(Math.round(w(u).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:c[4]||(c[4]=A=>w(u).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...c[19]||(c[19]=[Re('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="11" cy="11" r="8" data-v-53bae632></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-53bae632></line><line x1="11" y1="8" x2="11" y2="14" data-v-53bae632></line><line x1="8" y1="11" x2="14" y2="11" data-v-53bae632></line></svg>',1)])])]),c[25]||(c[25]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Tu,[e("button",{class:H(["tool-btn",w(u).showGrid&&"active"]),onClick:c[5]||(c[5]=A=>w(u).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...c[20]||(c[20]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:H(["tool-btn",w(u).snapToGrid&&"active"]),onClick:c[6]||(c[6]=A=>w(u).toggleSnap()),"data-tooltip":"Snap to grid"},[...c[21]||(c[21]=[Re('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="5" cy="5" r="1" data-v-53bae632></circle><circle cx="12" cy="5" r="1" data-v-53bae632></circle><circle cx="19" cy="5" r="1" data-v-53bae632></circle><circle cx="5" cy="12" r="1" data-v-53bae632></circle><circle cx="12" cy="12" r="1" data-v-53bae632></circle><circle cx="19" cy="12" r="1" data-v-53bae632></circle><circle cx="5" cy="19" r="1" data-v-53bae632></circle><circle cx="12" cy="19" r="1" data-v-53bae632></circle><circle cx="19" cy="19" r="1" data-v-53bae632></circle></svg>',1)])],2)])]))}},Bu=Te(ju,[["__scopeId","data-v-53bae632"]]),Lu=["value"],qu=["value"],Du=["onMousedown"],Ru={key:1,class:"selection-border locked-border"},Fu={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(y){const a=y,r=Ge(),u=Ve(),p=Zo("canvasScale",P(1)),f=S(()=>r.projectId),g=S(()=>r.currentSlideId),c=S(()=>r.selectedElementIds.includes(a.element.id)),A=S(()=>a.element.locked),Y=S(()=>a.element.visible!==!1),Q=S(()=>{var j,Z;return((Z=(j=a.element.animations)==null?void 0:j[0])==null?void 0:Z.type)||"auto"}),L=[{value:"auto",label:"Auto"},{value:"none",label:"None"},{value:"fade-up",label:"Fade"},{value:"fade-left",label:"Left"},{value:"fade-right",label:"Right"},{value:"zoom-in",label:"Zoom"},{value:"pop-in",label:"Pop"},{value:"stagger-in",label:"Stagger"}];let F=!1,B=0,m=0,n=new Map;function M(j){var ie;if(A.value||j.target.classList.contains("resize-handle"))return;const Z=j.ctrlKey||j.metaKey||j.shiftKey;c.value?Z&&r.selectElement(a.element.id,!0):r.selectElement(a.element.id,Z),r.setActiveTool("select"),F=!1,B=j.clientX,m=j.clientY,n.clear();const X=(ie=u.getProject(f.value))==null?void 0:ie.slides.find(me=>me.id===g.value);X&&r.selectedElementIds.forEach(me=>{const he=X.elements.find(Se=>Se.id===me);he&&!he.locked&&n.set(me,{x:he.x,y:he.y})}),window.addEventListener("mousemove",q),window.addEventListener("mouseup",J),j.stopPropagation()}function q(j){const Z=(j.clientX-B)/p.value,X=(j.clientY-m)/p.value;!F&&(Math.abs(Z)>3||Math.abs(X)>3)&&(F=!0),F&&n.forEach((ie,me)=>{let he=ie.x+Z,Se=ie.y+X;if(r.snapToGrid&&r.gridSize){const $=r.gridSize;he=Math.round(he/$)*$,Se=Math.round(Se/$)*$}u.updateElement(f.value,g.value,me,{x:he,y:Se})})}function J(j){F||!(j.ctrlKey||j.metaKey||j.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(a.element.id,!1),F=!1,window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",J)}const le=["n","ne","e","se","s","sw","w","nw"];let ve=!1,N="",D=0,K=0,ce=0,V=0,te=0,ue=0;function fe(j,Z){A.value||(j.stopPropagation(),j.preventDefault(),ve=!0,N=Z,D=j.clientX,K=j.clientY,ce=a.element.width,V=a.element.height,te=a.element.x,ue=a.element.y,window.addEventListener("mousemove",ge),window.addEventListener("mouseup",$e))}function ge(j){if(!ve)return;const Z=p.value,X=(j.clientX-D)/Z,ie=(j.clientY-K)/Z,me=20;let he=te,Se=ue,$=ce,E=V;if(N.includes("e")&&($=Math.max(me,ce+X)),N.includes("s")&&(E=Math.max(me,V+ie)),N.includes("w")){const b=Math.max(me,ce-X);he=te+(ce-b),$=b}if(N.includes("n")){const b=Math.max(me,V-ie);Se=ue+(V-b),E=b}if(r.snapToGrid&&r.gridSize){const b=r.gridSize;$=Math.round($/b)*b,E=Math.round(E/b)*b,he=Math.round(he/b)*b,Se=Math.round(Se/b)*b}u.updateElement(f.value,g.value,a.element.id,{x:he,y:Se,width:$,height:E})}function $e(){ve=!1,window.removeEventListener("mousemove",ge),window.removeEventListener("mouseup",$e)}function Ee(){["text","heading"].includes(a.element.type)&&r.setRightPanel("properties")}const xe=S(()=>({position:"absolute",left:`${a.element.x}px`,top:`${a.element.y}px`,width:`${a.element.width}px`,height:`${a.element.height}px`,transform:`rotate(${a.element.rotation||0}deg)`,opacity:a.element.opacity??1,zIndex:a.element.zIndex||1,cursor:A.value?"not-allowed":"move",visibility:Y.value?"visible":"hidden",userSelect:"none"}));function se(j){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[j]||"auto"}function de(j){var X;if(A.value)return;if(j==="auto"){u.updateElement(f.value,g.value,a.element.id,{animations:[]});return}const Z=((X=a.element.animations)==null?void 0:X[0])||{};u.updateElement(f.value,g.value,a.element.id,{animations:[{type:j,delay:Math.max(0,Number(Z.delay)||0),duration:Math.max(.1,Number(Z.duration)||.64)}]})}return(j,Z)=>(i(),s("div",{class:H(["element-wrapper",c.value&&"selected",A.value&&"locked"]),style:re(xe.value),onMousedown:M,onDblclick:Ee},[en(j.$slots,"default",{},void 0),c.value&&!A.value?(i(),s(W,{key:0},[Z[3]||(Z[3]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"motion-chip",onMousedown:Z[1]||(Z[1]=Ie(()=>{},["stop"]))},[Z[2]||(Z[2]=e("span",{class:"motion-chip-label"},"Motion",-1)),e("select",{class:"motion-chip-select",value:Q.value,onChange:Z[0]||(Z[0]=X=>de(X.target.value))},[(i(),s(W,null,ae(L,X=>e("option",{key:X.value,value:X.value},x(X.label),9,qu)),64))],40,Lu)],32),(i(),s(W,null,ae(le,X=>e("div",{key:X,class:H(["resize-handle",`handle-${X}`]),style:re({cursor:se(X)}),onMousedown:Ie(ie=>fe(ie,X),["stop"])},null,46,Du)),64))],64)):T("",!0),c.value&&A.value?(i(),s("div",Ru)):T("",!0)],38))}},Uu=Te(Fu,[["__scopeId","data-v-179c0a50"]]),Ou=["contenteditable"],ft={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(y){const a=y,r=S(()=>a.element.content||{}),u=Ge(),p=Ve(),f=P(!1),g=P(null),c=P("");Fe(()=>r.value.text,F=>{f.value||(c.value=F||(a.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function A(){u.selectedElementId===a.element.id&&(f.value=!0,tn(()=>{if(g.value){g.value.focus();const F=document.createRange();F.selectNodeContents(g.value),F.collapse(!1);const B=window.getSelection();B.removeAllRanges(),B.addRange(F)}}))}function Y(F){}function Q(F){f.value&&F.stopPropagation()}function L(){if(f.value=!1,g.value){const F=g.value.innerText;c.value=F,p.updateElement(u.projectId,u.currentSlideId,a.element.id,{content:{...a.element.content,text:F}})}}return(F,B)=>(i(),s("div",{class:"text-element",ref_key:"textRef",ref:g,contenteditable:f.value,onDblclick:A,onBlur:L,onInput:Y,onMousedown:Q,style:re({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:f.value?"2px solid var(--primary)":"none",cursor:f.value?"text":"inherit",userSelect:f.value?"text":"none"})},x(c.value),45,Ou))}},Gu=["src","alt"],Vu={key:1,class:"image-placeholder"},Wu={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},Hu={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(y){return(a,r)=>{var u,p,f,g;return i(),s("div",{class:"image-element",style:re({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((u=y.element.content)==null?void 0:u.borderRadius)||0)+"px",border:`${((p=y.element.content)==null?void 0:p.borderWidth)||0}px solid ${((f=y.element.content)==null?void 0:f.borderColor)||"transparent"}`})},[(g=y.element.content)!=null&&g.src?(i(),s("img",{key:0,src:y.element.content.src,alt:y.element.content.alt||"",style:re({width:"100%",height:"100%",objectFit:y.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,Gu)):(i(),s("div",Vu,[(i(),s("svg",Wu,[...r[0]||(r[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),r[1]||(r[1]=e("span",null,"Image",-1))]))],4)}}},Qu=Te(Hu,[["__scopeId","data-v-401e9ff3"]]),Yu={class:"shape-element",style:{width:"100%",height:"100%"}},Ju=["width","height"],Ku=["points","fill","stroke","stroke-width"],Xu={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(y){const a=y,r=S(()=>a.element.content||{}),u=S(()=>{const g=r.value.shapeType||"rectangle",c={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return g==="circle"?{...c,borderRadius:"50%"}:g==="rectangle"?{...c,borderRadius:(r.value.borderRadius||0)+"px"}:c}),p=S(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),f=S(()=>{const g=a.element.width||150,c=a.element.height||100,A=r.value.shapeType;if(A==="triangle")return`${g/2},0 ${g},${c} 0,${c}`;if(A==="diamond")return`${g/2},0 ${g},${c/2} ${g/2},${c} 0,${c/2}`;if(A==="arrow")return`0,${c*.3} ${g*.6},${c*.3} ${g*.6},0 ${g},${c/2} ${g*.6},${c} ${g*.6},${c*.7} 0,${c*.7}`;if(A==="star"){const Y=g/2,Q=c/2,L=Math.min(g,c)/2,F=L*.4;let B="";for(let m=0;m<10;m++){const n=(m*36-90)*Math.PI/180,M=m%2===0?L:F;B+=`${Y+M*Math.cos(n)},${Q+M*Math.sin(n)} `}return B.trim()}return""});return(g,c)=>(i(),s("div",Yu,[p.value?(i(),s("svg",{key:1,width:y.element.width,height:y.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:f.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,Ku)],8,Ju)):(i(),s("div",{key:0,style:re(u.value)},null,4))]))}},Zu={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(y){const a=y,r=S(()=>a.element.content||{}),u=S(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},f=p[r.value.variant||"primary"]||p.primary;return{...f,background:r.value.bgColor||f.background,color:r.value.textColor||f.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:f.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(p,f)=>(i(),s("div",{class:"button-element",style:re({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...u.value})},x(r.value.label||"Button"),5))}},ed={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},td={class:"popup-header"},od={class:"popup-body"},nd={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(y){const a=y,r=S(()=>a.element.content||{}),u=P(!1);function p(f){f.stopPropagation(),u.value=!u.value}return(f,g)=>(i(),s("div",ed,[e("div",{class:"hotspot-btn",style:re({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Ie(p,["stop"])},x(r.value.icon||"?"),5),rt(vt,{name:"fade"},{default:et(()=>[u.value?(i(),s("div",{key:0,class:"hotspot-popup",style:re({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",td,[e("strong",null,x(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:g[0]||(g[0]=Ie(c=>u.value=!1,["stop"]))},"×")]),e("div",od,x(r.value.popupContent||"Add your content in the properties panel."),1)],4)):T("",!0)]),_:1})]))}},ld=Te(nd,[["__scopeId","data-v-ef5f15f6"]]),id={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},sd=["src"],ad=["src","poster","autoplay","controls","loop","muted"],rd={key:2,class:"video-placeholder"},ud={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},dd={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(y){const a=y,r=S(()=>a.element.content||{}),u=S(()=>{const f=r.value.src||"";return f.includes("youtube")||f.includes("youtu.be")}),p=S(()=>{var g,c;const f=r.value.src||"";if(u.value){const A=(g=f.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:g[1];return A?`https://www.youtube.com/embed/${A}`:""}if(f.includes("vimeo.com")){const A=(c=f.match(/vimeo\.com\/(\d+)/))==null?void 0:c[1];return A?`https://player.vimeo.com/video/${A}`:""}return""});return(f,g)=>(i(),s("div",id,[p.value?(i(),s("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,sd)):r.value.src&&!p.value?(i(),s("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:re({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,ad)):(i(),s("div",rd,[(i(),s("svg",ud,[...g[0]||(g[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),g[1]||(g[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},cd=Te(dd,[["__scopeId","data-v-dfea1a16"]]),pd=["stroke"],vd=["src","controls","autoplay","loop"],md={key:1,style:{"font-size":"11px",color:"#aaa"}},fd={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(y){return(a,r)=>{var u,p,f,g,c,A,Y,Q,L;return i(),s("div",{class:"audio-element",style:re({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((u=y.element.content)==null?void 0:u.bgColor)||"#ede7ff",border:`1px solid ${((p=y.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(i(),s("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((f=y.element.content)==null?void 0:f.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,pd)),e("span",{style:re({fontSize:"13px",color:((g=y.element.content)==null?void 0:g.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},x(((c=y.element.content)==null?void 0:c.label)||"Audio Player"),5),(A=y.element.content)!=null&&A.src?(i(),s("audio",{key:0,src:y.element.content.src,controls:((Y=y.element.content)==null?void 0:Y.controls)!==!1,autoplay:(Q=y.element.content)==null?void 0:Q.autoplay,loop:(L=y.element.content)==null?void 0:L.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=Ie(()=>{},["stop"]))},null,40,vd)):(i(),s("span",md,"No source"))],4)}}},gd={class:"quiz-options"},bd=["onClick"],yd={class:"opt-letter"},hd={class:"opt-text"},xd={key:0},wd={class:"quiz-actions"},kd=["disabled"],Cd={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(y){const a=y,r=S(()=>a.element.content||{}),u=P(null),p=P(!1);function f(Y){p.value||(u.value=Y)}function g(){u.value!==null&&(p.value=!0)}function c(){u.value=null,p.value=!1}const A=S(()=>p.value&&u.value===(r.value.correctIndex??0));return(Y,Q)=>(i(),s("div",{class:"quiz-element",style:re({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:re({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},x(r.value.question||"Question text…"),5),e("div",gd,[(i(!0),s(W,null,ae(r.value.options||[],(L,F)=>(i(),s("div",{key:F,class:H(["quiz-opt",u.value===F&&"selected",p.value&&F===r.value.correctIndex&&"correct",p.value&&u.value===F&&F!==r.value.correctIndex&&"wrong"]),onClick:B=>f(F)},[e("span",yd,x(String.fromCharCode(65+F)),1),e("span",hd,x(L),1)],10,bd))),128))]),p.value?(i(),s("div",{key:0,class:H(["quiz-feedback",A.value?"correct":"wrong"])},[U(x(A.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!A.value&&r.value.explanation?(i(),s("span",xd,x(r.value.explanation),1)):T("",!0)],2)):T("",!0),e("div",wd,[p.value?(i(),s("button",{key:1,class:"quiz-btn secondary",onClick:c},"Try Again")):(i(),s("button",{key:0,class:"quiz-btn primary",disabled:u.value===null,onClick:g},"Submit",8,kd))])],4))}},Sd=Te(Cd,[["__scopeId","data-v-ca2bd187"]]),$d={key:0,class:"canvas-empty"},Id={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},Md={key:0,class:"canvas-device-frame","aria-hidden":"true"},Ed=["value"],Pd={class:"canvas-guide-label"},Ad={key:4,class:"drop-hint"},zd={class:"canvas-info-bar"},Nd=["disabled"],_d={class:"slide-index"},Td=["disabled"],jd={key:0},Bd={__name:"EditorCanvas",setup(y){const a=Ge(),r=Ve(),u=P(null),p=P(null),f=P(1),g=S(()=>f.value*a.zoomLevel);nn("canvasScale",g);const c=S(()=>r.getProject(a.projectId)),A=S(()=>pt(c.value)),Y=S(()=>Fo(c.value)),Q=S(()=>A.value.width),L=S(()=>A.value.height),F=S(()=>Uo(Q.value,L.value)),B=S(()=>{var v,k;return(k=(v=c.value)==null?void 0:v.slides)==null?void 0:k.find(R=>R.id===a.currentSlideId)}),m=S(()=>{var v;return[...((v=c.value)==null?void 0:v.slides)||[]].sort((k,R)=>k.order-R.order)}),n=S(()=>m.value.findIndex(v=>v.id===a.currentSlideId)),M=S(()=>{var v;return{autoPlay:!1,motionPresets:[],...((v=c.value)==null?void 0:v.settings)||{}}}),q=S(()=>(Array.isArray(M.value.motionPresets)?M.value.motionPresets:[]).filter(v=>v.scope==="group")),J=S(()=>{const v=new Set(a.selectedElementIds);return K.value.filter(k=>v.has(k.id))}),le=P(""),ve=S(()=>B.value?B.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:M.value.autoPlay&&Number(B.value.duration||0)>0?{label:`Auto ${Number(B.value.duration).toFixed(Number(B.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function N(){const v=q.value.find(R=>R.id===le.value);if(!v||!J.value.length)return;[...J.value].sort((R,G)=>(R.y||0)!==(G.y||0)?(R.y||0)-(G.y||0):(R.x||0)-(G.x||0)).forEach((R,G)=>{if(v.type==="auto"){r.updateElement(a.projectId,a.currentSlideId,R.id,{animations:[]});return}r.updateElement(a.projectId,a.currentSlideId,R.id,{animations:[{type:v.type,delay:Math.max(0,Number(v.delay)||0)+G*Math.max(0,Number(v.stepDelay)||0),duration:Math.max(.1,Number(v.duration)||.72)}]})}),r.updateProject(a.projectId,{settings:{...M.value,motionPresets:(M.value.motionPresets||[]).map(R=>R.id===v.id?{...R,usageCount:Math.max(0,Number(R.usageCount||0))+1,lastUsedAt:Date.now()}:R)}})}function D(){if(!q.value.length){le.value="";return}q.value.some(v=>v.id===le.value)||(le.value=q.value[0].id)}const K=S(()=>{var v;return[...((v=B.value)==null?void 0:v.elements)||[]].sort((k,R)=>(k.zIndex||0)-(R.zIndex||0))}),ce=S(()=>{const v=B.value;return v?v.backgroundType==="gradient"&&v.backgroundGradient?{background:v.backgroundGradient}:v.backgroundType==="image"&&v.backgroundImage?{backgroundImage:`url(${v.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:v.background||"#fff"}:{background:"#fff"}}),V=S(()=>`scale(${g.value})`);function te(){if(!u.value)return;const{clientWidth:v,clientHeight:k}=u.value,R=(v-80)/Q.value,G=(k-80)/L.value;f.value=Math.min(R,G,1)}let ue=null;qo(()=>{te(),ue=new ResizeObserver(te),u.value&&ue.observe(u.value),D()}),Do(()=>ue==null?void 0:ue.disconnect()),Fe(q,()=>{D()},{deep:!0,immediate:!0}),Fe(A,()=>{te()},{deep:!0});const fe=P({x:0,y:0}),ge=P({x:0,y:0}),$e=P(!1),Ee=P(!1),xe=S(()=>{var v,k;return((v=Y.value)==null?void 0:v.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((k=Y.value)==null?void 0:k.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),se=S(()=>{if(!xe.value)return null;if(xe.value.tone==="mobile"){const R=Q.value*.08,G=L.value*.05;return{x:R,y:G,width:Q.value-R*2,height:L.value-G*2}}const v=Q.value*.08,k=L.value*.08;return{x:v,y:k,width:Q.value-v*2,height:L.value-k*2}}),de=S(()=>{if(!se.value)return[];const v=se.value;return K.value.filter(k=>k.visible!==!1).filter(k=>{const R=Number(k.x||0),G=Number(k.y||0),h=R+Number(k.width||0),Ce=G+Number(k.height||0);return R<v.x||G<v.y||h>v.x+v.width||Ce>v.y+v.height}).map(k=>k.id)}),j=S(()=>a.selectedElementIds.filter(v=>de.value.includes(v)).length),Z=S(()=>de.value.length),X=S(()=>!xe.value||!Z.value?null:j.value?`${j.value} selected ${j.value===1?"element is":"elements are"} outside the ${xe.value.label.toLowerCase()}.`:`${Z.value} ${Z.value===1?"element is":"elements are"} outside the ${xe.value.label.toLowerCase()}.`),ie=S(()=>{if(!$e.value)return null;const v=Math.min(fe.value.x,ge.value.x),k=Math.min(fe.value.y,ge.value.y),R=Math.abs(ge.value.x-fe.value.x),G=Math.abs(ge.value.y-fe.value.y);return{x:v,y:k,width:R,height:G}});function me(v){!$e.value&&(v.target===p.value||v.target===v.currentTarget)&&a.clearSelection()}function he(v){return v?Array.from(v.files||[]).some(k=>k.type.startsWith("image/")):!1}function Se(v,k,R){if(!v||!v.type.startsWith("image/"))return;const G=new FileReader;G.onload=()=>{const h=String(G.result||"");if(!h)return;const Ce=new Image;Ce.onload=()=>{const Le=p.value.getBoundingClientRect(),je=(k-Le.left)/g.value,Je=(R-Le.top)/g.value,qe=Math.min(420/Ce.width,280/Ce.height,1),We=Math.max(120,Math.round(Ce.width*qe)),He=Math.max(80,Math.round(Ce.height*qe)),lt=Math.max(0,Math.min(Q.value-We,Math.round(je-We/2))),ut=Math.max(0,Math.min(L.value-He,Math.round(Je-He/2))),Ke=r.addElement(a.projectId,a.currentSlideId,"image",{x:lt,y:ut,width:We,height:He,content:{src:h,alt:v.name,objectFit:"cover"}});Ke&&(a.selectElement(Ke.id),a.setActiveTool("select"),a.setRightPanel("properties"))},Ce.src=h},G.readAsDataURL(v)}function $(v){he(v.dataTransfer)&&(v.preventDefault(),v.dataTransfer.dropEffect="copy",Ee.value=!0)}function E(v){var k;(k=v.currentTarget)!=null&&k.contains(v.relatedTarget)||(Ee.value=!1)}function b(v){if(!he(v.dataTransfer))return;v.preventDefault(),Ee.value=!1;const k=Array.from(v.dataTransfer.files||[]).find(R=>R.type.startsWith("image/"));k&&Se(k,v.clientX,v.clientY)}function I(v){const k=a.activeTool;if(v.target!==p.value&&v.target!==v.currentTarget)return;v.preventDefault(),v.stopPropagation();const R=p.value.getBoundingClientRect(),G=(v.clientX-R.left)/g.value,h=(v.clientY-R.top)/g.value;if(k==="select"){$e.value=!0,fe.value={x:G,y:h},ge.value={x:G,y:h};const je=Ne=>{ge.value={x:(Ne.clientX-R.left)/g.value,y:(Ne.clientY-R.top)/g.value}},Je=()=>{window.removeEventListener("mousemove",je),window.removeEventListener("mouseup",Je);const Ne=ie.value;if(Ne&&(Ne.width>2||Ne.height>2)){const nt=K.value.filter(qe=>{const We=qe.x,He=qe.y,lt=qe.width||100,ut=qe.height||100;return We<Ne.x+Ne.width&&We+lt>Ne.x&&He<Ne.y+Ne.height&&He+ut>Ne.y}).map(qe=>qe.id);nt.length>0?a.setSelection(nt):a.clearSelection()}else a.clearSelection();setTimeout(()=>{$e.value=!1},0)};window.addEventListener("mousemove",je),window.addEventListener("mouseup",Je);return}const Ce=je=>a.snapToGrid?Math.round(je/a.gridSize)*a.gridSize:je,Le=r.addElement(a.projectId,a.currentSlideId,k,{x:Ce(G-75),y:Ce(h-40)});Le&&(a.selectElement(Le.id),a.setActiveTool("select"),a.setRightPanel("properties"))}const be=S(()=>{if(!a.showGrid)return{};const v=a.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${v}px ${v}px`}}),ze={text:ft,heading:ft,image:Qu,shape:Xu,button:Zu,hotspot:ld,video:cd,audio:fd,quiz:Sd,divider:"div"};function Pe(v){return ze[v]||ft}function _e(v){var k,R;return v.type!=="divider"?{}:{borderTop:`${((k=v.content)==null?void 0:k.thickness)||2}px solid ${((R=v.content)==null?void 0:R.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const ye=P({show:!1,x:0,y:0,elId:null});function Ue(v,k){v.preventDefault(),ye.value={show:!0,x:v.clientX,y:v.clientY,elId:k},a.selectElement(k),setTimeout(()=>window.addEventListener("click",Oe,{once:!0}),0)}function Oe(){ye.value.show=!1}function Qe(){if(ye.value.elId){const v=r.duplicateElement(a.projectId,a.currentSlideId,ye.value.elId);v&&a.selectElement(v.id)}Oe()}function tt(){ye.value.elId&&(r.deleteElement(a.projectId,a.currentSlideId,ye.value.elId),a.clearSelection()),Oe()}function ot(){ye.value.elId&&r.reorderElement(a.projectId,a.currentSlideId,ye.value.elId,"up"),Oe()}function C(){ye.value.elId&&r.reorderElement(a.projectId,a.currentSlideId,ye.value.elId,"down"),Oe()}function l(){const v=n.value,k=r.addSlide(a.projectId,v);k&&a.setCurrentSlide(k.id)}function _(){const v=n.value;v>0&&a.setCurrentSlide(m.value[v-1].id)}function oe(){const v=n.value;v<m.value.length-1&&a.setCurrentSlide(m.value[v+1].id)}return(v,k)=>{var R;return i(),s("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:u},[B.value?(i(),s(W,{key:1},[e("div",{class:H(["canvas-zoom-wrapper",[xe.value&&`canvas-zoom-wrapper-${xe.value.tone}`]]),style:re({transform:V.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:re({width:Q.value+"px",height:L.value+"px",...ce.value,...be.value}),onClick:me,onMousedown:I,onDragover:$,onDragleave:E,onDrop:b,onContextmenu:k[3]||(k[3]=Ie(()=>{},["prevent"]))},[xe.value?(i(),s("div",Md)):T("",!0),w(a).multiSelection&&q.value.length?(i(),s("div",{key:1,class:"selection-preset-chip",onMousedown:k[1]||(k[1]=Ie(()=>{},["stop"]))},[k[7]||(k[7]=e("span",{class:"selection-preset-label"},"Sequence",-1)),ne(e("select",{"onUpdate:modelValue":k[0]||(k[0]=G=>le.value=G),class:"selection-preset-select"},[(i(!0),s(W,null,ae(q.value,G=>(i(),s("option",{key:G.id,value:G.id},x(G.name),9,Ed))),128))],512),[[ct,le.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Ie(N,["stop"])},"Apply")],32)):T("",!0),X.value?(i(),s("div",{key:2,class:"canvas-guide-warning",onMousedown:k[2]||(k[2]=Ie(()=>{},["stop"]))},[k[8]||(k[8]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,x(X.value),1)],32)):T("",!0),(i(!0),s(W,null,ae(K.value,G=>(i(),Be(Uu,{key:G.id,element:G,onContextmenu:Ie(h=>Ue(h,G.id),["stop"])},{default:et(()=>[(i(),Be(on(Pe(G.type)),{element:G,style:re(G.type==="divider"?_e(G):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),xe.value?(i(),s("div",{key:3,class:H(["canvas-guide",[`canvas-guide-${xe.value.tone}`,Z.value&&"canvas-guide-warning-state"]]),style:re(xe.value.style),"aria-hidden":"true"},[e("span",Pd,x(xe.value.label)+" · "+x(F.value),1)],6)):T("",!0),w(a).activeTool!=="select"||Ee.value?(i(),s("div",Ad,x(Ee.value?"Drop image to insert it on this slide":`Click anywhere to add ${w(a).activeTool}`),1)):T("",!0),$e.value&&ie.value?(i(),s("div",{key:5,class:"selection-marquee",style:re({left:ie.value.x+"px",top:ie.value.y+"px",width:ie.value.width+"px",height:ie.value.height+"px"})},null,4)):T("",!0)],36)],6),e("div",zd,[e("button",{class:"bar-btn",onClick:l},"Add page"),e("button",{class:"bar-btn icon",onClick:_,disabled:n.value<=0},"◀",8,Nd),e("span",_d,x(n.value+1)+" / "+x(m.value.length),1),e("button",{class:"bar-btn icon",onClick:oe,disabled:n.value>=m.value.length-1},"▶",8,Td),e("span",null,x(Q.value)+" × "+x(L.value)+"px",1),k[9]||(k[9]=e("span",null,"·",-1)),e("span",null,x(((R=B.value.elements)==null?void 0:R.length)||0)+" elements",1),k[10]||(k[10]=e("span",null,"·",-1)),e("span",{class:H(["playback-badge",`playback-badge-${ve.value.tone}`])},x(ve.value.label),3),w(a).hasSelection?(i(),s("span",jd,"· "+x(w(a).selectedElementIds.length)+" selected",1)):T("",!0),e("button",{class:"bar-btn ai",onClick:k[4]||(k[4]=G=>w(a).setRightPanel("ai"))},"AI")])],64)):(i(),s("div",$d,[(i(),s("svg",Id,[...k[5]||(k[5]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),k[6]||(k[6]=e("p",null,"Select a slide to start editing",-1))])),(i(),Be(Ro,{to:"body"},[ye.value.show?(i(),s("div",{key:0,class:"ctx-menu",style:re({left:ye.value.x+"px",top:ye.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Qe},"Duplicate"),e("button",{class:"ctx-item",onClick:ot},"Bring Forward"),e("button",{class:"ctx-item",onClick:C},"Send Backward"),k[11]||(k[11]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:tt},"Delete")],4)):T("",!0)]))],512)}}},Ld=Te(Bd,[["__scopeId","data-v-0d5749ec"]]),qd={class:"ai-panel"},Dd={class:"ai-mode-tabs"},Rd=["onClick"],Fd={class:"ai-content"},Ud={class:"form-group"},Od={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},Gd={key:0,class:"form-group"},Vd={key:1,class:"form-group"},Wd={class:"form-group"},Hd={class:"form-group"},Qd={class:"prompt-label-row"},Yd={key:1,class:"prompt-auto-badge"},Jd={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},Kd=["disabled"],Xd={key:0,class:"spinner"},Zd={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ec={key:3,class:"creative-options-wrap"},tc={class:"result-header"},oc={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},nc={key:1,class:"creative-options-list"},lc={class:"creative-title"},ic={class:"creative-angle"},sc=["onClick"],ac={class:"form-group"},rc={class:"quiz-config-row"},uc={class:"form-group",style:{flex:"1"}},dc={class:"form-group",style:{flex:"1"}},cc={class:"form-group"},pc={class:"qtype-btns"},vc=["onClick"],mc={class:"qtype-icon"},fc={class:"form-group"},gc={class:"form-group"},bc={class:"prompt-label-row"},yc={key:1,class:"prompt-auto-badge"},hc=["disabled"],xc={key:0,class:"spinner"},wc={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kc={key:0,class:"quiz-results"},Cc={class:"quiz-results-header"},Sc={class:"form-label"},$c={class:"quiz-header-actions"},Ic={class:"regen-row"},Mc=["disabled"],Ec={key:0,class:"spinner spinner-sm"},Pc={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Ac=["disabled"],zc={class:"quiz-card-header"},Nc={class:"quiz-card-check"},_c=["onUpdate:modelValue"],Tc={class:"q-num"},jc={class:"q-badges"},Bc={class:"badge type-badge"},Lc={class:"q-question"},qc={class:"q-options"},Dc={class:"q-option-letter"},Rc={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Fc={key:0,class:"q-explanation"},Uc=["disabled"],Oc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gc=["disabled"],Vc={key:0,class:"spinner"},Wc={key:0,class:"selected-text-preview"},Hc={class:"text-preview"},Qc={key:1,class:"ai-hint"},Yc={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},Jc=["disabled"],Kc={key:0,class:"spinner"},Xc={key:0,class:"selected-text-preview"},Zc={class:"text-preview"},ep={key:1,class:"ai-hint"},tp={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},op=["disabled"],np={key:0,class:"spinner"},lp={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},ip={class:"result-header"},sp={class:"result-actions"},ap=["disabled"],rp={class:"textarea result-display"},up={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},dp=["disabled"],cp={key:0,class:"spinner"},pp={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},vp={class:"textarea result-display",style:{color:"var(--color-primary)"}},mp={key:6,class:"ai-settings"},fp={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},gp=["value"],bp={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},yp=["value"],hp={key:0,class:"demo-notice"},xp={key:7,class:"result-area"},wp={class:"result-header"},kp={class:"result-pre"},Cp={class:"result-actions"},Sp=["disabled"],$p={key:8,class:"ai-error"},Ip={__name:"AIAssistant",setup(y){const a=an(),r=Ge(),u=Ve(),p=P("generate"),f=P(""),g=P(""),c=P("");Fe(p,()=>{c.value=""});const A=P(4),Y=P("general"),Q=P("Spanish"),L=P(""),F=P(""),B=P(""),m=P(!1),n=P("single"),M=P(5),q=P("slide"),J=P([]),le=P(""),ve=S(()=>{const C=g.value.trim()||"[your topic]";if(n.value==="deck"){let oe=`Create a complete ${M.value}-slide learning deck about "${C}".`;return F.value.trim()&&(oe+=`
Additional context: ${F.value.trim()}`),oe+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,oe+=`
Make each slide distinct, logically sequenced, and specific to "${C}".`,oe}let _=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[Y.value]||"educational slide"} about "${C}".`;return F.value.trim()&&(_+=`
Additional context: ${F.value.trim()}`),_+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${C}" — no generic placeholders.`,_});Fe(ve,C=>{m.value||(B.value=C)},{immediate:!0});function N(){B.value=ve.value,m.value=!1}const D=P(""),K=P("intermediate"),ce=P("multiple-choice"),V=P(""),te=P([]),ue=P(""),fe=P(!1),ge=S(()=>{const C=D.value.trim()||"[your topic]",l={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},_={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let oe=`Generate ${A.value} ${l[K.value]} ${_[ce.value]} quiz questions about "${C}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return V.value.trim()&&(oe+=`
Learning objective: ${V.value.trim()}`),oe});Fe(ge,C=>{fe.value||(ue.value=C)},{immediate:!0});function $e(){ue.value=ge.value,fe.value=!1}const Ee=S(()=>u.getProject(r.projectId)),xe=S(()=>{var C,l;return(l=(C=Ee.value)==null?void 0:C.slides)==null?void 0:l.find(_=>_.id===r.currentSlideId)}),se=S(()=>{var C,l;return r.selectedElementId?(l=(C=xe.value)==null?void 0:C.elements)==null?void 0:l.find(_=>_.id===r.selectedElementId):null});async function de(){if(!g.value.trim()&&!B.value.trim())return;if(c.value="",J.value=[],le.value="",n.value==="deck"){const l=await a.generateSlideDeck(g.value,M.value,{objective:F.value,customPrompt:B.value});if(l!=null&&l.length){const _=l.map(oe=>j(oe));c.value=JSON.stringify({slides:_},null,2),me(_,{replaceGenerated:!0})}return}if(q.value==="options"){await $();return}const C=await a.generateSlideContent(g.value,Y.value,F.value,B.value);if(C){const l=j(C);c.value=JSON.stringify(l,null,2),he(l,{replaceGenerated:!0})}}function j(C){const l=C&&typeof C=="object"?C:{},oe=(Array.isArray(l.bullets)?l.bullets:typeof l.bullets=="string"?l.bullets.split(`
`):[]).map(v=>String(v||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(l.title||g.value||"Untitled Slide").trim(),subtitle:String(l.subtitle||"").trim(),bullets:oe,callout:String(l.callout||"").trim()}}function Z(C,l){var v,k,R;const _=(k=(v=u.getProject(C))==null?void 0:v.slides)==null?void 0:k.find(G=>G.id===l);if(!((R=_==null?void 0:_.elements)!=null&&R.length))return;_.elements.filter(G=>{var h;return((h=G.meta)==null?void 0:h.source)==="ai-content"}).map(G=>G.id).forEach(G=>{u.deleteElement(C,l,G)})}function X(C,l,_,oe){return u.addElement(C,l,_,{...oe,meta:{...oe.meta||{},source:"ai-content"}})}function ie(C,l,_,{replaceGenerated:oe=!1}={}){var v;if(!(!C||!l)){if(oe&&Z(C,l),_.title&&(u.updateSlide(C,l,{title:_.title}),X(C,l,"heading",{x:60,y:40,width:840,height:80,content:{text:_.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),_.subtitle&&X(C,l,"text",{x:60,y:130,width:840,height:50,content:{text:_.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(v=_.bullets)!=null&&v.length){const k=_.bullets.map(R=>`• ${R}`).join(`
`);X(C,l,"text",{x:60,y:_.subtitle?200:150,width:840,height:200,content:{text:k,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}_.callout&&(X(C,l,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),X(C,l,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${_.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function me(C,{replaceGenerated:l=!1}={}){if(!r.currentSlideId)return;const _=r.projectId;if(!_||!Array.isArray(C)||!C.length)return;C.map(v=>j(v)).forEach(v=>{const k=u.addSlide(_);k&&ie(_,k.id,v,{replaceGenerated:l})})}function he(C=null,{replaceGenerated:l=!1}={}){if(!r.currentSlideId)return;let _=C;if(!_){if(!c.value)return;try{_=JSON.parse(c.value)}catch(R){console.warn("Could not parse AI content:",R);return}}const oe=j(_),v=r.projectId,k=r.currentSlideId;!v||!k||ie(v,k,oe,{replaceGenerated:l})}function Se(){if(c.value){if(n.value==="deck"){try{const C=JSON.parse(c.value),l=Array.isArray(C)?C:C==null?void 0:C.slides;if(!Array.isArray(l)||!l.length)return;me(l,{replaceGenerated:!0})}catch{return}return}he()}}async function $(){const C=g.value.trim()||"[your topic]",l=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${Y.value}" slide about "${C}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,_=await a.generate(l,{type:"creativeOptions",topic:C,slideType:Y.value});if(_)try{const oe=JSON.parse(_.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(oe))throw new Error("Options must be an array");J.value=oe.slice(0,3).map((v,k)=>({title:String((v==null?void 0:v.title)||`Option ${k+1}`),angle:String((v==null?void 0:v.angle)||""),prompt:String((v==null?void 0:v.prompt)||"")})).filter(v=>v.prompt.trim()),J.value.length||(le.value="No usable creative options were returned. Try generating again.")}catch{le.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function E(C){C!=null&&C.prompt&&(B.value=C.prompt,m.value=!0,q.value="slide",await de())}async function b(C=!1){if(!D.value.trim()&&!ue.value.trim())return;C||(te.value=[]);const l=await a.generateQuiz(D.value,A.value,{difficulty:K.value,questionType:ce.value,objective:V.value,customPrompt:ue.value});if(l)if(C){const _=new Set(te.value.map(v=>v.question)),oe=l.filter(v=>!_.has(v.question)).map(v=>({...v,_selected:!0}));te.value=[...te.value,...oe]}else te.value=l.map(_=>({..._,_selected:!0}))}async function I(){const C=te.value.filter(_=>_._selected);if(!C.length)return;const l=r.projectId;C.forEach((_,oe)=>{const v=u.addSlide(l);v&&(u.addElement(l,v.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:_.question,options:_.options,correctIndex:_.correctIndex,explanation:_.explanation||""}}),u.updateSlide(l,v.id,{title:`Q${oe+1}: ${_.question.slice(0,40)}…`}))}),te.value=[]}function be(C){te.value.forEach(l=>l._selected=C)}async function ze(){if(!L.value.trim())return;const C=await a.generateVoiceoverScript(L.value);C&&(c.value=C)}async function Pe(){var _,oe;const C=(oe=(_=se.value)==null?void 0:_.content)==null?void 0:oe.text;if(!C)return;const l=await a.generateTranslation(C,Q.value);l&&(c.value=l)}async function _e(){!c.value||!se.value||u.updateElement(r.projectId,r.currentSlideId,se.value.id,{content:{...se.value.content,text:c.value}})}const ye=P(""),Ue=P(!1);async function Oe(){if(ye.value.trim()){Ue.value=!0,c.value="Optimizing prompt...";try{let C=ye.value;const l=await a.generateImagePrompt(ye.value);l&&(C=l.replace(/```(json)?\n?/g,"").trim()),c.value="Painting image... this takes about 10-20 seconds. Please wait.";const _=Math.floor(Math.random()*1e6),oe=`https://image.pollinations.ai/prompt/${encodeURIComponent(C)}?width=600&height=400&nologo=true&seed=${_}`;await new Promise((v,k)=>{const R=new Image;R.onload=v,R.onerror=k,R.src=oe}),u.addElement(r.projectId,r.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:oe,objectFit:"cover"}}),c.value="Image added to slide!"}catch{c.value="Failed to generate image. Try a different prompt."}finally{Ue.value=!1}}}async function Qe(){var l,_;if(!((_=(l=se.value)==null?void 0:l.content)!=null&&_.text))return;const C=await a.improveText(se.value.content.text,f.value||"Make it clearer and more engaging");C&&(c.value=C)}async function tt(){!c.value||!se.value||u.updateElement(r.projectId,r.currentSlideId,se.value.id,{content:{...se.value.content,text:c.value}})}async function ot(){if(!f.value.trim())return;const C=await a.generate(f.value);C&&(c.value=C)}return(C,l)=>{var _,oe,v,k,R,G;return i(),s("div",qd,[e("div",Dd,[(i(),s(W,null,ae([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],h=>e("button",{key:h.id,class:H(["ai-mode-btn",p.value===h.id&&"active"]),onClick:Ce=>p.value=h.id},x(h.label),11,Rd)),64))]),e("div",Fd,[p.value==="generate"?(i(),s(W,{key:0},[e("div",Ud,[l[34]||(l[34]=e("label",{class:"form-label"},[U("Topic / Subject "),e("span",{class:"required"},"*")],-1)),ne(e("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>g.value=h),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:Lo(de,["enter"])},null,544),[[pe,g.value]])]),e("div",Od,[e("button",{class:H(["output-mode-btn",n.value==="single"&&"active"]),onClick:l[1]||(l[1]=h=>n.value="single")},"Single Slide",2),e("button",{class:H(["output-mode-btn",n.value==="deck"&&"active"]),onClick:l[2]||(l[2]=h=>n.value="deck")},"Slide Deck",2)]),n.value==="single"?(i(),s("div",Gd,[l[36]||(l[36]=e("label",{class:"form-label"},"Slide Type",-1)),ne(e("select",{"onUpdate:modelValue":l[3]||(l[3]=h=>Y.value=h),class:"select"},[...l[35]||(l[35]=[Re('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[ct,Y.value]])])):(i(),s("div",Vd,[l[37]||(l[37]=e("label",{class:"form-label"},"Number of Slides",-1)),ne(e("input",{"onUpdate:modelValue":l[4]||(l[4]=h=>M.value=h),class:"input",type:"number",min:"1",max:"20"},null,512),[[pe,M.value,void 0,{number:!0}]]),l[38]||(l[38]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",Wd,[l[39]||(l[39]=e("label",{class:"form-label"},[U("Description "),e("span",{class:"optional"},"(optional)")],-1)),ne(e("textarea",{"onUpdate:modelValue":l[5]||(l[5]=h=>F.value=h),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[pe,F.value]])]),e("div",Hd,[e("div",Qd,[l[41]||(l[41]=e("label",{class:"form-label"},"AI Prompt",-1)),m.value?(i(),s("button",{key:0,class:"prompt-reset-btn",onClick:N,title:"Reset to auto-generated prompt"},[...l[40]||(l[40]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),U(" Reset ",-1)])])):(i(),s("span",Yd,"auto"))]),ne(e("textarea",{"onUpdate:modelValue":l[6]||(l[6]=h=>B.value=h),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:l[7]||(l[7]=h=>m.value=!0),spellcheck:"false"},null,544),[[pe,B.value]]),l[42]||(l[42]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),n.value==="single"?(i(),s("div",Jd,[e("button",{class:H(["output-mode-btn",q.value==="slide"&&"active"]),onClick:l[8]||(l[8]=h=>q.value="slide")},"Show on Slide",2),e("button",{class:H(["output-mode-btn",q.value==="options"&&"active"]),onClick:l[9]||(l[9]=h=>q.value="options")},"Creative Options",2)])):T("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(a).isGenerating||!g.value.trim()&&!B.value.trim()||n.value==="deck"&&(!M.value||M.value<1||M.value>20),onClick:de},[w(a).isGenerating?(i(),s("span",Xd)):(i(),s("svg",Zd,[...l[43]||(l[43]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),U(" "+x(w(a).isGenerating?"Generating…":n.value==="deck"?c.value?`Regenerate ${M.value} Slides`:`Generate ${M.value} Slides`:q.value==="slide"?c.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,Kd),n.value==="single"&&q.value==="options"&&(J.value.length||le.value)?(i(),s("div",ec,[e("div",tc,[l[44]||(l[44]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:l[10]||(l[10]=h=>{J.value=[],le.value=""})},"Clear")]),le.value?(i(),s("div",oc,[l[45]||(l[45]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),U(" "+x(le.value),1)])):(i(),s("div",nc,[(i(!0),s(W,null,ae(J.value,(h,Ce)=>(i(),s("article",{key:Ce,class:"creative-option-card"},[e("h4",lc,x(h.title),1),e("p",ic,x(h.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:Le=>E(h)},"Use This Option",8,sc)]))),128))]))])):T("",!0)],64)):p.value==="quiz"?(i(),s(W,{key:1},[e("div",ac,[l[46]||(l[46]=e("label",{class:"form-label"},[U("Quiz Topic "),e("span",{class:"required"},"*")],-1)),ne(e("input",{"onUpdate:modelValue":l[11]||(l[11]=h=>D.value=h),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:Lo(b,["enter"])},null,544),[[pe,D.value]])]),e("div",rc,[e("div",uc,[l[48]||(l[48]=e("label",{class:"form-label"},"Questions",-1)),ne(e("select",{"onUpdate:modelValue":l[12]||(l[12]=h=>A.value=h),class:"select"},[...l[47]||(l[47]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[ct,A.value,void 0,{number:!0}]])]),e("div",dc,[l[50]||(l[50]=e("label",{class:"form-label"},"Difficulty",-1)),ne(e("select",{"onUpdate:modelValue":l[13]||(l[13]=h=>K.value=h),class:"select"},[...l[49]||(l[49]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[ct,K.value]])])]),e("div",cc,[l[51]||(l[51]=e("label",{class:"form-label"},"Question Type",-1)),e("div",pc,[(i(),s(W,null,ae([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],h=>e("button",{key:h.id,class:H(["qtype-btn",ce.value===h.id&&"active"]),onClick:Ce=>ce.value=h.id},[e("span",mc,x(h.icon),1),e("span",null,x(h.label),1)],10,vc)),64))])]),e("div",fc,[l[52]||(l[52]=e("label",{class:"form-label"},[U("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),ne(e("input",{"onUpdate:modelValue":l[14]||(l[14]=h=>V.value=h),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[pe,V.value]])]),e("div",gc,[e("div",bc,[l[54]||(l[54]=e("label",{class:"form-label"},"AI Prompt",-1)),fe.value?(i(),s("button",{key:0,class:"prompt-reset-btn",onClick:$e,title:"Reset to auto-generated prompt"},[...l[53]||(l[53]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),U(" Reset ",-1)])])):(i(),s("span",yc,"auto"))]),ne(e("textarea",{"onUpdate:modelValue":l[15]||(l[15]=h=>ue.value=h),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:l[16]||(l[16]=h=>fe.value=!0),spellcheck:"false"},null,544),[[pe,ue.value]]),l[55]||(l[55]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(a).isGenerating||!D.value.trim()&&!ue.value.trim(),onClick:l[17]||(l[17]=h=>b(!1))},[w(a).isGenerating?(i(),s("span",xc)):(i(),s("svg",wc,[...l[56]||(l[56]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),U(" "+x(w(a).isGenerating?"Generating…":`Generate ${A.value} Questions`),1)],8,hc),te.value.length?(i(),s("div",kc,[e("div",Cc,[e("span",Sc,x(te.value.length)+" Questions",1),e("div",$c,[e("button",{class:"btn btn-ghost btn-sm",onClick:l[18]||(l[18]=h=>be(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:l[19]||(l[19]=h=>be(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:l[20]||(l[20]=h=>te.value=[])},"Clear")])]),e("div",Ic,[e("button",{class:"btn btn-secondary regen-btn",disabled:w(a).isGenerating,onClick:l[21]||(l[21]=h=>b(!1)),title:"Replace all questions with a new set"},[w(a).isGenerating?(i(),s("span",Ec)):(i(),s("svg",Pc,[...l[57]||(l[57]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),l[58]||(l[58]=U(" Regenerate ",-1))],8,Mc),e("button",{class:"btn btn-ghost regen-btn",disabled:w(a).isGenerating,onClick:l[22]||(l[22]=h=>b(!0)),title:"Generate more and append to current list"},[...l[59]||(l[59]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),U(" Add More ",-1)])],8,Ac)]),(i(!0),s(W,null,ae(te.value,(h,Ce)=>(i(),s("div",{key:Ce,class:H(["quiz-card",{deselected:!h._selected}])},[e("div",zc,[e("label",Nc,[ne(e("input",{type:"checkbox","onUpdate:modelValue":Le=>h._selected=Le},null,8,_c),[[mt,h._selected]]),e("span",Tc,"Q"+x(Ce+1),1)]),e("div",jc,[e("span",{class:H(["badge difficulty-badge",h.difficulty])},x(h.difficulty),3),e("span",Bc,x(h.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",Lc,x(h.question),1),e("div",qc,[(i(!0),s(W,null,ae(h.options,(Le,je)=>(i(),s("div",{key:je,class:H(["q-option",je===h.correctIndex&&"correct"])},[e("span",Dc,x(["A","B","C","D"][je]),1),e("span",null,x(Le),1),je===h.correctIndex?(i(),s("svg",Rc,[...l[60]||(l[60]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):T("",!0)],2))),128))]),h.explanation?(i(),s("div",Fc,[l[61]||(l[61]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),U(" "+x(h.explanation),1)])):T("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!te.value.filter(h=>h._selected).length,onClick:I},[l[62]||(l[62]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),U(" Add "+x(te.value.filter(h=>h._selected).length)+" Selected as Quiz Slides ",1)],8,Uc)])):T("",!0)],64)):p.value==="voiceover"?(i(),s(W,{key:2},[e("div",Oc,[l[63]||(l[63]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),ne(e("textarea",{"onUpdate:modelValue":l[23]||(l[23]=h=>L.value=h),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[pe,L.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(a).isGenerating,onClick:ze},[w(a).isGenerating?(i(),s("span",Vc)):T("",!0),U(" "+x(w(a).isGenerating?"Generating…":"Generate Script"),1)],8,Gc)],64)):p.value==="improve"?(i(),s(W,{key:3},[(oe=(_=se.value)==null?void 0:_.content)!=null&&oe.text?(i(),s("div",Wc,[l[64]||(l[64]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Hc,x(se.value.content.text.slice(0,120))+x(se.value.content.text.length>120?"…":""),1)])):(i(),s("p",Qc,"Select a text element on the canvas to improve it.")),e("div",Yc,[l[65]||(l[65]=e("label",{class:"form-label"},"Instruction",-1)),ne(e("input",{"onUpdate:modelValue":l[24]||(l[24]=h=>f.value=h),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[pe,f.value]])]),l[66]||(l[66]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ne(e("textarea",{"onUpdate:modelValue":l[25]||(l[25]=h=>f.value=h),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[pe,f.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(a).isGenerating||!se.value&&!f.value,onClick:l[26]||(l[26]=h=>se.value?Qe():ot())},[w(a).isGenerating?(i(),s("span",Kc)):T("",!0),U(" "+x(w(a).isGenerating?"Processing…":"Generate"),1)],8,Jc)],64)):p.value==="translate"?(i(),s(W,{key:4},[(k=(v=se.value)==null?void 0:v.content)!=null&&k.text?(i(),s("div",Xc,[l[67]||(l[67]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",Zc,x(se.value.content.text.slice(0,120))+x(se.value.content.text.length>120?"…":""),1)])):(i(),s("p",ep,"Select a text element on the canvas to translate it.")),e("div",tp,[l[69]||(l[69]=e("label",{class:"form-label"},"Target Language",-1)),ne(e("select",{"onUpdate:modelValue":l[27]||(l[27]=h=>Q.value=h),class:"select"},[...l[68]||(l[68]=[Re('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[ct,Q.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:w(a).isGenerating||!((G=(R=se.value)==null?void 0:R.content)!=null&&G.text),onClick:Pe},[w(a).isGenerating?(i(),s("span",np)):T("",!0),U(" "+x(w(a).isGenerating?"Translating…":"Translate Text"),1)],8,op),c.value?(i(),s("div",lp,[e("div",ip,[l[70]||(l[70]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",sp,[e("button",{class:"btn btn-ghost btn-sm",onClick:l[28]||(l[28]=h=>C.navigator.clipboard.writeText(c.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:_e,disabled:!se.value},"Apply",8,ap)])]),e("div",rp,x(c.value),1)])):T("",!0)],64)):p.value==="image"?(i(),s(W,{key:5},[l[73]||(l[73]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",up,[l[71]||(l[71]=e("label",{class:"form-label"},"Image Description",-1)),ne(e("textarea",{"onUpdate:modelValue":l[29]||(l[29]=h=>ye.value=h),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[pe,ye.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ue.value||w(a).isGenerating||!ye.value,onClick:Oe},[Ue.value||w(a).isGenerating?(i(),s("span",cp)):T("",!0),U(" "+x(Ue.value||w(a).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,dp),c.value?(i(),s("div",pp,[l[72]||(l[72]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",vp,x(c.value),1)])):T("",!0)],64)):p.value==="settings"?(i(),s("div",mp,[e("div",fp,[l[75]||(l[75]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:w(a).apiProvider,class:"select",onChange:l[30]||(l[30]=h=>w(a).setProvider(h.target.value))},[...l[74]||(l[74]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,gp)]),e("div",bp,[l[76]||(l[76]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:w(a).apiKey,class:"input",placeholder:"sk-…",onChange:l[31]||(l[31]=h=>w(a).setApiKey(h.target.value))},null,40,yp),l[77]||(l[77]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),w(a).apiKey?T("",!0):(i(),s("div",hp,[...l[78]||(l[78]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),U(" Running in ",-1),e("strong",null,"demo mode",-1),U(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):T("",!0),c.value&&p.value!=="settings"&&p.value!=="quiz"?(i(),s("div",xp,[e("div",wp,[l[79]||(l[79]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:l[32]||(l[32]=h=>c.value="")},"Clear")]),e("pre",kp,x(c.value),1),e("div",Cp,[p.value==="generate"?(i(),s("button",{key:0,class:"btn btn-primary btn-sm",onClick:Se},x(n.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):T("",!0),p.value==="generate"?(i(),s("button",{key:1,class:"btn btn-ghost btn-sm",disabled:w(a).isGenerating,onClick:de},[...l[80]||(l[80]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),U(" Regenerate ",-1)])],8,Sp)):T("",!0),p.value==="improve"&&se.value?(i(),s("button",{key:2,class:"btn btn-primary btn-sm",onClick:tt}," Apply to Element ")):T("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:l[33]||(l[33]=h=>{var Ce;return(Ce=C.navigator.clipboard)==null?void 0:Ce.writeText(c.value)})}," Copy ")])])):T("",!0),w(a).lastError?(i(),s("div",$p,[l[81]||(l[81]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),U(" "+x(w(a).lastError),1)])):T("",!0)])])}}},Mp=Te(Ip,[["__scopeId","data-v-697ec3ea"]]),Ep={class:"theme-manager"},Pp={class:"panel-section"},Ap={class:"presets-grid"},zp=["title","onClick"],Np={class:"preset-preview"},_p={class:"preset-name"},Tp={class:"panel-section"},jp={class:"theme-fields"},Bp={class:"form-label"},Lp={class:"color-row"},qp=["value","onInput"],Dp=["value","onChange"],Rp={class:"panel-section"},Fp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Up=["value"],Op=["value"],Gp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Vp=["value"],Wp=["value"],Hp={class:"form-group"},Qp=["value"],Yp={class:"panel-section"},Jp={key:0,class:"apply-message success"},Kp={key:1,class:"apply-message error"},Xp={__name:"ThemeManager",setup(y){const a=Ge(),r=Ve(),u=S(()=>r.getProject(a.projectId)),p=S(()=>{var B;return((B=u.value)==null?void 0:B.theme)||{}}),f=P(""),g=P("");function c(B){r.updateProject(a.projectId,{theme:{...p.value,...B}})}const A=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],Y=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function Q(B){c(B)}function L(B,m){const n=B.content||{};return B.type==="text"?{content:{...n,fontFamily:m.fontFamily||n.fontFamily,color:m.textColor||n.color}}:B.type==="heading"?{content:{...n,fontFamily:m.headingFont||m.fontFamily||n.fontFamily,color:m.textColor||n.color}}:B.type==="shape"?{content:{...n,fillColor:m.secondaryColor||n.fillColor}}:B.type==="hotspot"?{content:{...n,bgColor:m.primaryColor||n.bgColor}}:B.type==="button"?{content:{...n,bgColor:m.primaryColor||n.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:m.fontFamily||n.fontFamily}}:B.type==="quiz"?{content:{...n,cardBgColor:m.bgColor||n.cardBgColor,questionColor:m.textColor||n.questionColor,accentColor:m.primaryColor||n.accentColor}}:null}function F(){f.value="",g.value="";const B=a.projectId,m=u.value,n=p.value;if(!B||!m){g.value="No active project to apply theme.";return}const M=m.slides||[];let q=0;M.forEach(J=>{(J.backgroundType||"color")==="color"&&r.updateSlide(B,J.id,{backgroundType:"color",background:n.bgColor||J.background||"#ffffff"}),(J.elements||[]).forEach(le=>{const ve=L(le,n);ve&&(r.updateElement(B,J.id,le.id,ve),q+=1)})}),f.value=`Applied theme to ${M.length} slide${M.length===1?"":"s"} and ${q} element${q===1?"":"s"}.`}return(B,m)=>(i(),s("div",Ep,[e("div",Pp,[m[3]||(m[3]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",Ap,[(i(),s(W,null,ae(A,n=>e("div",{key:n.name,class:"preset-card",title:n.name,onClick:M=>Q(n)},[e("div",Np,[e("div",{class:"pp-header",style:re({background:n.primaryColor})},null,4),e("div",{class:"pp-body",style:re({background:n.bgColor})},[e("div",{class:"pp-line",style:re({background:n.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:re({background:n.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:re({background:n.secondaryColor})},null,4)]),e("span",_p,x(n.name),1)],8,zp)),64))])]),e("div",Tp,[m[4]||(m[4]=e("div",{class:"panel-title"},"Colors",-1)),e("div",jp,[(i(),s(W,null,ae({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(n,M)=>e("div",{class:"theme-field",key:M},[e("label",Bp,x(n),1),e("div",Lp,[e("input",{type:"color",value:p.value[M]||"#ffffff",class:"color-input-native",onInput:q=>c({[M]:q.target.value})},null,40,qp),e("input",{value:p.value[M]||"",class:"input",onChange:q=>c({[M]:q.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Dp)])])),64))])]),e("div",Rp,[m[8]||(m[8]=e("div",{class:"panel-title"},"Typography",-1)),e("div",Fp,[m[5]||(m[5]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:m[0]||(m[0]=n=>c({headingFont:n.target.value}))},[(i(),s(W,null,ae(Y,n=>e("option",{key:n.value,value:n.value},x(n.label),9,Op)),64))],40,Up)]),e("div",Gp,[m[6]||(m[6]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:m[1]||(m[1]=n=>c({fontFamily:n.target.value}))},[(i(),s(W,null,ae(Y,n=>e("option",{key:n.value,value:n.value},x(n.label),9,Wp)),64))],40,Vp)]),e("div",Hp,[m[7]||(m[7]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:m[2]||(m[2]=n=>c({fontSize:+n.target.value}))},null,40,Qp)])]),e("div",Yp,[m[9]||(m[9]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:re({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:re({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:re({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:re({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:re({background:p.value.secondaryColor})},"Badge",4)],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:F}," Apply Theme to Slides "),f.value?(i(),s("p",Jp,x(f.value),1)):T("",!0),g.value?(i(),s("p",Kp,x(g.value),1)):T("",!0)])]))}},Zp=Te(Xp,[["__scopeId","data-v-dd457d78"]]),ev={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},tv={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},ov={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},nv={class:"export-tabs tabs"},lv={class:"export-content"},iv={class:"export-options",style:{"margin-bottom":"20px"}},sv={class:"form-group"},av={class:"export-meta"},rv={class:"meta-item"},uv={class:"meta-item"},dv={class:"meta-item"},cv={class:"export-options",style:{"margin-bottom":"20px"}},pv={class:"form-group"},vv={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},mv={class:"coming-soon"},fv={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},gv={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},bv={key:1,class:"export-success"},yv={__name:"ExportModal",setup(y){const a=Ge(),r=Ve(),u=Oo(),p=S(()=>r.getProject(a.projectId)),f=P("json"),g=P(""),c=P(""),A=P(!0);Fe(p,m=>{m&&!c.value&&(c.value=m.name||"presentation")},{immediate:!0});function Y(){const m=r.exportProject(a.projectId);if(!m)return;const n=new Blob([m],{type:"application/json"}),M=URL.createObjectURL(n),q=document.createElement("a");q.href=M,q.download=`${c.value||"project"}.mediasurf.json`,q.click(),URL.revokeObjectURL(M),g.value="success",setTimeout(()=>g.value="",3e3)}function Q(m,n="presentation"){return String(m).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||n}function L(m,n){const M=pt(n);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${M.width}px;
  --lf-slide-height: ${M.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(m==null?void 0:m.fontFamily)||"Inter, sans-serif"};
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
  color: ${(m==null?void 0:m.textColor)||"#1a1a2e"};
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
  background: ${(m==null?void 0:m.primaryColor)||"#6c47ff"};
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
`}function F(){return`
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
`}async function B(){var Ee,xe,se;const m=p.value;if(!m)return;g.value="processing";const n=new mn,M=n.folder("assets");let q=0;async function J(de,j="media"){if((!de||de.startsWith("data:")||de.startsWith("http://localhost")||de.startsWith("blob:"))&&de.startsWith("data:"))return de;try{const X=await(await fetch(de)).blob();let ie="bin";const me=X.type;if(me.includes("image/png")?ie="png":me.includes("image/jpeg")?ie="jpg":me.includes("image/gif")?ie="gif":me.includes("image/svg")?ie="svg":me.includes("image/webp")?ie="webp":me.includes("video/mp4")?ie="mp4":me.includes("audio/mpeg")&&(ie="mp3"),ie==="bin"){const Se=de.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);Se&&(ie=Se[1])}q++;const he=`${j}_${q}.${ie}`;return M.file(he,X),`assets/${he}`}catch(Z){return console.warn("Could not fetch asset:",de,Z),de}}const le=JSON.parse(JSON.stringify([...m.slides||[]])).sort((de,j)=>(de.order??0)-(j.order??0));if(A.value)for(const de of le){de.backgroundType==="image"&&de.backgroundImage&&(de.backgroundImage=await J(de.backgroundImage,"bg"));for(const j of de.elements||[])j.type==="image"&&((Ee=j.content)!=null&&Ee.src)&&(j.content.src=await J(j.content.src,"img")),j.type==="video"&&((xe=j.content)!=null&&xe.src)&&!j.content.src.includes("youtube")&&!j.content.src.includes("youtu.be")&&(j.content.src=await J(j.content.src,"vid")),j.type==="audio"&&((se=j.content)!=null&&se.src)&&(j.content.src=await J(j.content.src,"aud"))}const ve=Q(c.value||m.name||"presentation"),N={name:m.name,theme:m.theme||{},settings:m.settings||{},slides:le},D=JSON.stringify(N).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),K=L(m.theme,m.settings),ce=F(),V=`<script id="lf-data" type="application/json">${D}<\/script>`,ue=`<!DOCTYPE html>
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
  <span class="nav-counter" id="counter">1 / ${le.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${V}
<script src="script.js"><\/script>
</body>
</html>`;n.file("index.html",ue),n.file("style.css",K),n.file("script.js",ce);const fe=await n.generateAsync({type:"blob"}),ge=URL.createObjectURL(fe),$e=document.createElement("a");$e.href=ge,$e.download=`${ve}.zip`,$e.click(),URL.revokeObjectURL(ge),g.value="success",setTimeout(()=>g.value="",3e3)}return(m,n)=>(i(),Be(rn,{title:"Export Project",size:"md",onClose:n[9]||(n[9]=M=>w(a).showExportModal=!1)},{footer:et(()=>[e("button",{class:"btn btn-secondary",onClick:n[8]||(n[8]=M=>w(a).showExportModal=!1)},"Close")]),default:et(()=>{var M,q,J,le,ve;return[w(u).user?(i(),s(W,{key:1},[e("div",nv,[e("button",{class:H(["tab-btn",f.value==="json"&&"active"]),onClick:n[2]||(n[2]=N=>f.value="json")},"JSON Project",2),e("button",{class:H(["tab-btn",f.value==="html"&&"active"]),onClick:n[3]||(n[3]=N=>f.value="html")},"HTML Package",2),e("button",{class:H(["tab-btn",f.value==="scorm"&&"active"]),onClick:n[4]||(n[4]=N=>f.value="scorm")},"SCORM",2)]),e("div",lv,[f.value==="json"?(i(),s(W,{key:0},[n[20]||(n[20]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",iv,[e("div",sv,[n[15]||(n[15]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ne(e("input",{type:"text","onUpdate:modelValue":n[5]||(n[5]=N=>c.value=N),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[pe,c.value]])])]),e("div",av,[e("div",rv,[n[16]||(n[16]=e("span",null,"Project",-1)),e("strong",null,x((M=p.value)==null?void 0:M.name),1)]),e("div",uv,[n[17]||(n[17]=e("span",null,"Slides",-1)),e("strong",null,x(((J=(q=p.value)==null?void 0:q.slides)==null?void 0:J.length)||0),1)]),e("div",dv,[n[18]||(n[18]=e("span",null,"Elements",-1)),e("strong",null,x(((ve=(le=p.value)==null?void 0:le.slides)==null?void 0:ve.reduce((N,D)=>{var K;return N+(((K=D.elements)==null?void 0:K.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:Y},[...n[19]||(n[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),U(" Download JSON ",-1)])])],64)):f.value==="html"?(i(),s(W,{key:1},[n[24]||(n[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",cv,[e("div",pv,[n[21]||(n[21]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ne(e("input",{type:"text","onUpdate:modelValue":n[6]||(n[6]=N=>c.value=N),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[pe,c.value]])]),e("label",vv,[ne(e("input",{type:"checkbox","onUpdate:modelValue":n[7]||(n[7]=N=>A.value=N)},null,512),[[mt,A.value]]),n[22]||(n[22]=U(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),n[25]||(n[25]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:B},[...n[23]||(n[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),U(" Download HTML ",-1)])])],64)):f.value==="scorm"?(i(),s(W,{key:2},[n[29]||(n[29]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",mv,[(i(),s("svg",fv,[...n[26]||(n[26]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),n[27]||(n[27]=e("h4",null,"Coming Soon",-1)),n[28]||(n[28]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):T("",!0),rt(vt,{name:"fade"},{default:et(()=>[g.value==="processing"?(i(),s("div",gv,[...n[30]||(n[30]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),U(" Generating package... Please wait. ",-1)])])):g.value==="success"?(i(),s("div",bv,[...n[31]||(n[31]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),U(" Export successful! Check your downloads folder. ",-1)])])):T("",!0)]),_:1})])],64)):(i(),s("div",ev,[(i(),s("svg",tv,[...n[10]||(n[10]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),n[13]||(n[13]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),n[14]||(n[14]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",ov,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:n[0]||(n[0]=N=>w(u).loginWithGoogle())},[...n[11]||(n[11]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),U(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:n[1]||(n[1]=N=>w(u).loginWithMicrosoft())},[...n[12]||(n[12]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),U(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},hv=Te(yv,[["__scopeId","data-v-29863a10"]]),xv={key:0,class:"editor-view"},wv={class:"editor-topbar"},kv={class:"topbar-left"},Cv={class:"project-name-wrap"},Sv=["value"],$v={class:"save-label"},Iv={class:"topbar-center"},Mv={key:0,class:"slide-position"},Ev={class:"topbar-right"},Pv={class:"editor-body"},Av={class:"authoring-rail"},zv=["onClick","data-tooltip"],Nv={key:0,class:"rail-icon"},_v={key:1,class:"rail-icon"},Tv={key:2,class:"rail-icon"},jv={key:3,class:"rail-icon"},Bv={key:4,class:"rail-icon"},Lv={key:5,class:"rail-icon"},qv={key:6,class:"rail-icon"},Dv={key:7,class:"rail-icon"},Rv={key:8,class:"rail-icon"},Fv={class:"right-panel"},Uv={class:"panel-tabs"},Ov=["onClick","data-tooltip"],Gv={class:"tab-icon"},Vv={class:"tab-label"},Wv={class:"panel-content"},Hv={key:1,class:"editor-not-found"},Qv={__name:"EditorView",setup(y){const a=sn(),r=ln(),u=Ge(),p=Ve(),f=Oo(),g=S(()=>a.params.id),c=S(()=>p.getProject(g.value)),A=S(()=>pt(c.value)),Y=S(()=>{var E;return[...((E=c.value)==null?void 0:E.slides)||[]].sort((b,I)=>b.order-I.order)}),Q=P(null),L=P(!1),F=P("deck"),{aiStore:B,showAIModal:m,aiMode:n,aiTopic:M,aiContext:q,aiProjectName:J,aiSlideCount:le,aiQuestionCount:ve,aiDifficulty:N,aiQuestionType:D,aiCreationError:K,aiSubmitting:ce,aiProjectNamePlaceholder:V,aiPrimaryActionLabel:te,openAICreationModal:ue,createAIProject:fe}=un({onRequireAuth:()=>r.push({name:"dashboard"})});let ge=!1,$e=null;Fe(()=>c.value,E=>{if(E){if(ge){ge=!1;return}$e&&clearTimeout($e),$e=setTimeout(()=>{u.pushHistory(E)},600)}},{deep:!0}),Fe(()=>f.isAuthReady,async E=>{var b;if(E){if((b=f.user)!=null&&b.uid&&await p.ensureRemoteProjectsLoaded(),!c.value){r.push({name:"dashboard"});return}u.setProject(g.value),Y.value.length>0&&u.setCurrentSlide(Y.value[0].id),u.pushHistory(c.value)}},{immediate:!0});const Ee=S(()=>{const E=c.value;return E?`Saved ${new Date(E.updatedAt).toLocaleTimeString()}`:""}),xe=S(()=>{switch(u.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});fn({undo:()=>{if(u.canUndo()){const E=u.undo();E&&(ge=!0,p.updateProject(g.value,E))}},redo:()=>{if(u.canRedo()){const E=u.redo();E&&(ge=!0,p.updateProject(g.value,E))}},delete:()=>{u.selectedElementId&&(p.deleteElement(u.projectId,u.currentSlideId,u.selectedElementId),u.clearSelection())},escape:()=>{u.clearSelection(),u.setActiveTool("select")},copy:()=>{var b,I,be,ze;const E=(ze=(be=(I=(b=c.value)==null?void 0:b.slides)==null?void 0:I.find(Pe=>Pe.id===u.currentSlideId))==null?void 0:be.elements)==null?void 0:ze.find(Pe=>Pe.id===u.selectedElementId);E&&u.setClipboard(E)},paste:()=>{if(u.clipboard&&u.currentSlideId){const E=u.clipboard;p.addElement(u.projectId,u.currentSlideId,E.type,{...E,x:E.x+20,y:E.y+20,id:void 0})}},duplicate:()=>{if(u.selectedElementId){const E=p.duplicateElement(u.projectId,u.currentSlideId,u.selectedElementId);E&&u.selectElement(E.id)}},zoomIn:()=>u.zoomIn(),zoomOut:()=>u.zoomOut(),zoomReset:()=>u.zoomReset(),toggleGrid:()=>u.toggleGrid(),nudge:(E,b)=>{var be,ze,Pe,_e;if(!u.selectedElementId)return;const I=(_e=(Pe=(ze=(be=c.value)==null?void 0:be.slides)==null?void 0:ze.find(ye=>ye.id===u.currentSlideId))==null?void 0:Pe.elements)==null?void 0:_e.find(ye=>ye.id===u.selectedElementId);I&&p.updateElement(u.projectId,u.currentSlideId,u.selectedElementId,{x:I.x+E,y:I.y+b})},selectAll:()=>{var b,I,be;(((be=(I=(b=c.value)==null?void 0:b.slides)==null?void 0:I.find(ze=>ze.id===u.currentSlideId))==null?void 0:be.elements)||[]).forEach((ze,Pe)=>u.selectElement(ze.id,Pe>0))}});function se(){r.push({name:"dashboard"})}function de(){r.push({name:"preview",params:{id:g.value},query:{from:"editor"}})}function j(E="deck"){F.value=E,L.value=!0}function Z(){L.value=!1,ue(F.value)}function X(E,b="Image"){if(!u.projectId||!u.currentSlideId||!E)return;const I=new Image;I.onload=()=>{const Pe=Math.min(420/I.width,280/I.height,1),_e=Math.max(120,Math.round(I.width*Pe)),ye=Math.max(80,Math.round(I.height*Pe)),Ue=Math.max(24,Math.round((A.value.width-_e)/2)),Oe=Math.max(24,Math.round((A.value.height-ye)/2)),Qe=p.addElement(u.projectId,u.currentSlideId,"image",{x:Ue,y:Oe,width:_e,height:ye,content:{src:E,alt:b,objectFit:"cover"}});Qe&&(u.selectElement(Qe.id),u.setRightPanel("properties"),u.setActiveTool("select"))},I.src=E}function ie(E){const[b]=Array.from(E.target.files||[]);if(!b||!b.type.startsWith("image/"))return;const I=new FileReader;I.onload=()=>X(String(I.result||""),b.name),I.readAsDataURL(b),E.target.value=""}function me(){var E;(E=Q.value)==null||E.click()}const he=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function Se(E){if(E==="text"){u.setActiveTool("text");return}if(E==="resources"){u.setActiveTool("image");return}if(E==="interactive-elements"){u.setActiveTool("hotspot");return}if(E==="interactive-questions"){u.setActiveTool("quiz");return}if(E==="widgets"){u.setActiveTool("shape");return}if(E==="insert"){me();return}if(E==="style"){u.setRightPanel("properties");return}if(E==="background"){u.clearSelection(),u.setRightPanel("properties");return}E==="pages"&&u.toggleSlidePanel()}function $(E){return E==="text"?["text","heading"].includes(u.activeTool):E==="resources"?u.activeTool==="image":E==="interactive-elements"?["hotspot","button"].includes(u.activeTool):E==="interactive-questions"?u.activeTool==="quiz":E==="widgets"?["shape","video","audio"].includes(u.activeTool):E==="insert"?!1:E==="style"||E==="background"?u.rightPanelTab==="properties":E==="pages"?u.showSlidePanel:!1}return(E,b)=>c.value?(i(),s("div",xv,[e("input",{ref_key:"imageInputRef",ref:Q,type:"file",accept:"image/*",class:"sr-only",onChange:ie},null,544),e("header",wv,[e("div",kv,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:se,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...b[14]||(b[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),U(" Dashboard ",-1)])]),e("div",Cv,[e("input",{value:c.value.name,class:"project-name-input",onChange:b[0]||(b[0]=I=>w(p).updateProject(g.value,{name:I.target.value}))},null,40,Sv)]),e("span",$v,x(Ee.value),1)]),e("div",Iv,[w(u).currentSlideId?(i(),s("span",Mv," Slide "+x(Y.value.findIndex(I=>I.id===w(u).currentSlideId)+1)+" of "+x(Y.value.length),1)):T("",!0)]),e("div",Ev,[e("button",{class:H(["btn btn-ghost btn-sm",w(u).showAIPanel&&"active-btn"]),onClick:b[1]||(b[1]=I=>{w(u).showAIPanel=!w(u).showAIPanel,w(u).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...b[15]||(b[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),U(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:b[2]||(b[2]=I=>{w(u).showThemeManager=!w(u).showThemeManager,w(u).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...b[16]||(b[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),U(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:de,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...b[17]||(b[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),U(" Preview ",-1)])]),e("button",{class:"btn btn-primary btn-sm",onClick:b[3]||(b[3]=I=>w(u).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...b[18]||(b[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),U(" Export ",-1)])])])]),rt(Bu,{onOpenAiProject:j}),e("div",Pv,[e("aside",Av,[(i(),s(W,null,ae(he,I=>e("button",{key:I.id,class:H(["rail-option",$(I.id)&&"active"]),onClick:be=>Se(I.id),"data-tooltip":I.label,"data-tooltip-position":"right"},[I.id==="text"?(i(),s("span",Nv,"T")):I.id==="resources"?(i(),s("span",_v,[...b[19]||(b[19]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):I.id==="interactive-elements"?(i(),s("span",Tv,[...b[20]||(b[20]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):I.id==="interactive-questions"?(i(),s("span",jv,[...b[21]||(b[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):I.id==="widgets"?(i(),s("span",Bv,[...b[22]||(b[22]=[Re('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0cfccc29><rect x="3" y="3" width="7" height="7" data-v-0cfccc29></rect><rect x="14" y="3" width="7" height="7" data-v-0cfccc29></rect><rect x="14" y="14" width="7" height="7" data-v-0cfccc29></rect><rect x="3" y="14" width="7" height="7" data-v-0cfccc29></rect></svg>',1)])])):I.id==="insert"?(i(),s("span",Lv,[...b[23]||(b[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):I.id==="style"?(i(),s("span",qv,[...b[24]||(b[24]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):I.id==="background"?(i(),s("span",Dv,[...b[25]||(b[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):I.id==="pages"?(i(),s("span",Rv,[...b[26]||(b[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):T("",!0),U(" "+x(I.label),1)],10,zv)),64))]),rt(vt,{name:"side-panel-slide"},{default:et(()=>[w(u).showSlidePanel?(i(),Be(In,{key:0})):T("",!0)]),_:1}),rt(Ld),e("aside",Fv,[e("div",Uv,[(i(),s(W,null,ae([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],I=>e("button",{key:I.id,class:H(["panel-tab",w(u).rightPanelTab===I.id&&"active"]),onClick:be=>w(u).setRightPanel(I.id),"data-tooltip":`Open ${I.label}`,"data-tooltip-position":"bottom"},[e("span",Gv,x(I.icon),1),e("span",Vv,x(I.label),1)],10,Ov)),64))]),e("div",Wv,[rt(vt,{name:"editor-panel-switch",mode:"out-in"},{default:et(()=>[(i(),s("div",{key:xe.value,class:"panel-content-view"},[w(u).rightPanelTab==="properties"?(i(),Be(bu,{key:0})):w(u).rightPanelTab==="layers"?(i(),Be(Hn,{key:1})):w(u).rightPanelTab==="ai"?(i(),Be(Mp,{key:2})):w(u).rightPanelTab==="theme"?(i(),Be(Zp,{key:3})):T("",!0)]))]),_:1})])])]),w(u).showExportModal?(i(),Be(hv,{key:0})):T("",!0),L.value?(i(),Be(dn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:b[4]||(b[4]=I=>L.value=!1),onConfirm:Z})):T("",!0),w(m)?(i(),Be(cn,{key:2,mode:w(n),topic:w(M),context:w(q),"project-name":w(J),"slide-count":w(le),"question-count":w(ve),difficulty:w(N),"question-type":w(D),"project-name-placeholder":w(V),"primary-action-label":w(te),"creation-error":w(K),"is-submitting":w(ce),"is-generating":w(B).isGenerating,"has-api-key":!!w(B).apiKey,onClose:b[5]||(b[5]=I=>m.value=!1),onCreate:w(fe),"onUpdate:mode":b[6]||(b[6]=I=>n.value=I),"onUpdate:topic":b[7]||(b[7]=I=>M.value=I),"onUpdate:context":b[8]||(b[8]=I=>q.value=I),"onUpdate:projectName":b[9]||(b[9]=I=>J.value=I),"onUpdate:slideCount":b[10]||(b[10]=I=>le.value=I),"onUpdate:questionCount":b[11]||(b[11]=I=>ve.value=I),"onUpdate:difficulty":b[12]||(b[12]=I=>N.value=I),"onUpdate:questionType":b[13]||(b[13]=I=>D.value=I)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):T("",!0)])):(i(),s("div",Hv,[b[27]||(b[27]=e("h2",null,"Project not found",-1)),b[28]||(b[28]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:se},"Go to Dashboard")]))}},t1=Te(Qv,[["__scopeId","data-v-0cfccc29"]]);export{t1 as default};
