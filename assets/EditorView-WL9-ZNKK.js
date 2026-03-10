import{O as Ao,P as zo,v as l,F as s,B as e,C as w,H,I as de,E as ke,D as ee,u as x,Q as pe,L as Ge,G as L,K as F,q as je,R as No,f as _,r as P,M as ne,S as rt,w as Re,N as me,i as Vo,U as Wo,n as Ho,y as et,x as Je,T as st,V as ot,z as Qo,p as Yo,J as Po}from"./vue-core-DtFYlhKN.js";import{u as Jo,d as Ko}from"./vue-ecosystem-iLG-KstC.js";import{u as Fe,b as Xo,M as Zo,a as en,C as tn,A as on}from"./ConfirmActionModal-BQ8q9XUh.js";import{u as Ue,a as _o}from"./projectStore-D_ANAlwV.js";import{_ as _e}from"./index-CwbnjI0e.js";import{J as nn}from"./jszip-529iNPX7.js";function ln(h){function i(r){var u,I,Q,v,te,q,j,f,a,E,R,le,re,z,A,Y,K;const d=r.ctrlKey||r.metaKey,p=r.key.toLowerCase(),m=r.target.tagName.toLowerCase(),g=m==="input"||m==="textarea"||r.target.isContentEditable;g&&d&&["c","v","x","a","z","y"].includes(p)||(d&&p==="z"&&!r.shiftKey?(r.preventDefault(),(u=h.undo)==null||u.call(h)):d&&(p==="y"||p==="z"&&r.shiftKey)?(r.preventDefault(),(I=h.redo)==null||I.call(h)):d&&p==="c"?(r.preventDefault(),(Q=h.copy)==null||Q.call(h)):d&&p==="v"?(r.preventDefault(),(v=h.paste)==null||v.call(h)):d&&p==="x"?(r.preventDefault(),(te=h.cut)==null||te.call(h)):d&&p==="d"?(r.preventDefault(),(q=h.duplicate)==null||q.call(h)):d&&p==="a"?(r.preventDefault(),(j=h.selectAll)==null||j.call(h)):p==="delete"||p==="backspace"?g||(r.preventDefault(),(f=h.delete)==null||f.call(h)):p==="escape"?(a=h.escape)==null||a.call(h):d&&p==="g"?(r.preventDefault(),(E=h.toggleGrid)==null||E.call(h)):d&&p==="="||d&&p==="+"?(r.preventDefault(),(R=h.zoomIn)==null||R.call(h)):d&&p==="-"?(r.preventDefault(),(le=h.zoomOut)==null||le.call(h)):d&&p==="0"?(r.preventDefault(),(re=h.zoomReset)==null||re.call(h)):p==="arrowleft"?(z=h.nudge)==null||z.call(h,-1,0):p==="arrowright"?(A=h.nudge)==null||A.call(h,1,0):p==="arrowup"?(Y=h.nudge)==null||Y.call(h,0,-1):p==="arrowdown"&&((K=h.nudge)==null||K.call(h,0,1)))}Ao(()=>window.addEventListener("keydown",i)),zo(()=>window.removeEventListener("keydown",i))}const sn={class:"slide-panel"},an={class:"slide-panel-header"},rn={class:"slide-count"},dn={class:"slides-list"},un=["onClick","onContextmenu","onDragstart","onDrop"],cn={class:"slide-number"},pn={class:"slide-footer"},vn={class:"slide-title"},mn=["onClick"],fn={__name:"SlidePanel",setup(h){const i=Fe(),r=Ue(),d=_(()=>r.getProject(i.projectId)),p=_(()=>{var z,A;return((A=(z=d.value)==null?void 0:z.slides)==null?void 0:A.slice().sort((Y,K)=>Y.order-K.order))||[]}),m=P({show:!1,x:0,y:0,slideId:null});function g(z){i.setCurrentSlide(z)}function u(){const z=p.value.findIndex(Y=>Y.id===i.currentSlideId),A=r.addSlide(i.projectId,z);A&&i.setCurrentSlide(A.id)}function I(z){var K,U;const A=p.value.findIndex(ue=>ue.id===z);r.deleteSlide(i.projectId,z);const Y=((K=d.value)==null?void 0:K.slides)||[];if(Y.length>0){const ue=Y.slice().sort((be,ye)=>be.order-ye.order),ie=Math.min(A,ue.length-1);i.setCurrentSlide((U=ue[ie])==null?void 0:U.id)}}function Q(z,A){z.preventDefault(),m.value={show:!0,x:z.clientX,y:z.clientY,slideId:A},setTimeout(()=>window.addEventListener("click",v,{once:!0}),0)}function v(){m.value.show=!1}function te(){const z=r.duplicateSlide(i.projectId,m.value.slideId);z&&i.setCurrentSlide(z.id),v()}function q(){I(m.value.slideId),v()}function j(z,A){z.stopPropagation(),I(A)}function f(){const z=p.value.findIndex(A=>A.id===m.value.slideId);z>0&&r.reorderSlides(i.projectId,z,z-1),v()}function a(){const z=p.value.findIndex(A=>A.id===m.value.slideId);z<p.value.length-1&&r.reorderSlides(i.projectId,z,z+1),v()}let E=-1;function R(z,A){E=A,z.dataTransfer.effectAllowed="move"}function le(z,A){z.preventDefault(),E!==-1&&E!==A&&r.reorderSlides(i.projectId,E,A),E=-1}function re(z){return z.backgroundType==="gradient"&&z.backgroundGradient?{background:z.backgroundGradient}:z.backgroundType==="image"&&z.backgroundImage?{backgroundImage:`url(${z.backgroundImage})`,backgroundSize:"cover"}:{background:z.background||"#fff"}}return(z,A)=>(l(),s("div",sn,[e("div",an,[A[2]||(A[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",rn,w(p.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:u,"data-tooltip":"Add slide","aria-label":"Add slide"},[...A[1]||(A[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",dn,[(l(!0),s(H,null,de(p.value,(Y,K)=>(l(),s("div",{key:Y.id,class:ee(["slide-thumb-item",x(i).currentSlideId===Y.id&&"active"]),draggable:"true",onClick:U=>g(Y.id),onContextmenu:U=>Q(U,Y.id),onDragstart:U=>R(U,K),onDragover:A[0]||(A[0]=ke(()=>{},["prevent"])),onDrop:U=>le(U,K)},[e("div",cn,w(K+1),1),e("div",{class:"slide-thumb",style:pe(re(Y))},[(l(!0),s(H,null,de(Y.elements.slice(0,6),U=>{var ue,ie;return l(),s("div",{key:U.id,class:"mini-element",style:pe({left:U.x/960*100+"%",top:U.y/540*100+"%",width:U.width/960*100+"%",height:U.height/540*100+"%",background:U.type==="shape"?(ue=U.content)==null?void 0:ue.fillColor:U.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:U.type==="shape"&&((ie=U.content)==null?void 0:ie.shapeType)==="circle"?"50%":void 0})},null,4)}),128))],4),e("div",pn,[e("div",vn,w(Y.title||`Slide ${K+1}`),1),p.value.length>1?(l(),s("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:U=>j(U,Y.id)},[...A[3]||(A[3]=[Ge('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1b392fd3><polyline points="3 6 5 6 21 6" data-v-1b392fd3></polyline><path d="M19 6l-1 14H6L5 6" data-v-1b392fd3></path><path d="M10 11v6M14 11v6" data-v-1b392fd3></path><path d="M9 6V4h6v2" data-v-1b392fd3></path></svg>',1)])],8,mn)):L("",!0)])],42,un))),128))]),e("button",{class:"add-slide-bottom",onClick:u},[...A[4]||(A[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),F(" Add Slide ",-1)])]),(l(),je(No,{to:"body"},[m.value.show?(l(),s("div",{key:0,class:"context-menu",style:pe({left:m.value.x+"px",top:m.value.y+"px"})},[e("button",{class:"ctx-item",onClick:te},"Duplicate"),e("button",{class:"ctx-item",onClick:f},"Move Up"),e("button",{class:"ctx-item",onClick:a},"Move Down"),A[5]||(A[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:q},"Delete Slide")],4)):L("",!0)]))]))}},gn=_e(fn,[["__scopeId","data-v-1b392fd3"]]),bn={class:"layer-panel"},yn={class:"layer-header panel-section"},hn={class:"panel-title",style:{"margin-bottom":"0"}},xn={class:"layer-count"},wn={key:0,class:"layers-empty"},kn={key:1,class:"layers-list"},Cn=["onClick"],Sn={class:"layer-type-icon"},$n={class:"layer-name"},In={class:"layer-actions"},Mn=["onClick","data-tooltip"],En={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Pn={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},An=["onClick","data-tooltip"],zn={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Nn={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},_n=["onClick"],Tn=["onClick"],jn=["onClick"],Bn={__name:"LayerPanel",setup(h){const i=Fe(),r=Ue(),d=_(()=>r.getProject(i.projectId)),p=_(()=>{var f,a;return(a=(f=d.value)==null?void 0:f.slides)==null?void 0:a.find(E=>E.id===i.currentSlideId)}),m=_(()=>{var f;return[...((f=p.value)==null?void 0:f.elements)||[]].sort((a,E)=>(E.zIndex||0)-(a.zIndex||0))});function g(f){i.selectElement(f)}function u(f){r.updateElement(i.projectId,i.currentSlideId,f.id,{visible:!f.visible})}function I(f){r.updateElement(i.projectId,i.currentSlideId,f.id,{locked:!f.locked})}function Q(f){r.reorderElement(i.projectId,i.currentSlideId,f,"up")}function v(f){r.reorderElement(i.projectId,i.currentSlideId,f,"down")}function te(f){r.deleteElement(i.projectId,i.currentSlideId,f),i.selectedElementId===f&&i.clearSelection()}function q(f){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[f]||"◆"}function j(f){var a,E,R;return(a=f.content)!=null&&a.text?f.content.text.slice(0,24):(E=f.content)!=null&&E.label?f.content.label:(R=f.content)!=null&&R.question?f.content.question.slice(0,24):f.type.charAt(0).toUpperCase()+f.type.slice(1)}return(f,a)=>(l(),s("div",bn,[e("div",yn,[e("div",hn,[a[0]||(a[0]=F(" Layers ",-1)),e("span",xn,w(m.value.length),1)])]),m.value.length===0?(l(),s("div",wn,[...a[1]||(a[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(l(),s("div",kn,[(l(!0),s(H,null,de(m.value,E=>(l(),s("div",{key:E.id,class:ee(["layer-item",x(i).selectedElementIds.includes(E.id)&&"selected",E.locked&&"locked",!E.visible&&"hidden"]),onClick:R=>g(E.id)},[e("span",Sn,w(q(E.type)),1),e("span",$n,w(j(E)),1),e("div",In,[e("button",{class:ee(["layer-action-btn",{active:E.visible}]),onClick:ke(R=>u(E),["stop"]),"data-tooltip":E.visible?"Hide":"Show"},[E.visible?(l(),s("svg",En,[...a[2]||(a[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(l(),s("svg",Pn,[...a[3]||(a[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,Mn),e("button",{class:ee(["layer-action-btn",{active:E.locked}]),onClick:ke(R=>I(E),["stop"]),"data-tooltip":E.locked?"Unlock":"Lock"},[E.locked?(l(),s("svg",zn,[...a[4]||(a[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(l(),s("svg",Nn,[...a[5]||(a[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,An),e("button",{class:"layer-action-btn",onClick:ke(R=>Q(E.id),["stop"]),"data-tooltip":"Move up"},[...a[6]||(a[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,_n),e("button",{class:"layer-action-btn",onClick:ke(R=>v(E.id),["stop"]),"data-tooltip":"Move down"},[...a[7]||(a[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Tn),e("button",{class:"layer-action-btn danger",onClick:ke(R=>te(E.id),["stop"]),"data-tooltip":"Delete"},[...a[8]||(a[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,jn)])],10,Cn))),128))]))]))}},Ln=_e(Bn,[["__scopeId","data-v-7407acd8"]]),Dn={class:"panel-section"},qn={class:"preset-toolbar"},Rn=["value"],Fn=["value"],Un=["value"],On={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},Gn=["onClick"],Vn={class:"preset-meta-chip muted"},Wn={key:1,class:"import-review"},Hn={class:"motion-scrubber-header"},Qn={class:"preset-toolbar compact"},Yn=["value"],Jn=["value"],Kn={class:"import-list"},Xn=["onUpdate:modelValue"],Zn={class:"import-item-title"},el={class:"preset-meta-chip"},tl={key:0,class:"preset-meta-chip muted"},ol={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(h,{emit:i}){const r=i;return(d,p)=>(l(),s("div",Dn,[p[13]||(p[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",qn,[e("input",{value:h.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:p[0]||(p[0]=m=>r("update:searchQuery",m.target.value))},null,40,Rn),e("select",{value:h.categoryFilter,class:"select",onChange:p[1]||(p[1]=m=>r("update:categoryFilter",m.target.value))},[p[8]||(p[8]=e("option",{value:"all"},"All categories",-1)),(l(!0),s(H,null,de(h.availableCategories,m=>(l(),s("option",{key:`library-${m}`,value:m},w(m),9,Un))),128))],40,Fn),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[2]||(p[2]=m=>r("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[3]||(p[3]=m=>r("export-presets"))},"Export")]),h.recentPresets.length?(l(),s("div",On,[p[9]||(p[9]=e("div",{class:"field-hint"},"Recently used",-1)),(l(!0),s(H,null,de(h.recentPresets,m=>(l(),s("div",{class:"preset-item",key:`recent-${m.id}`},[e("button",{type:"button",class:"preset-chip",onClick:g=>r("apply-preset",m)},w(m.name),9,Gn),e("span",Vn,"Used "+w(m.usageCount)+"x",1)]))),128))])):L("",!0),h.pendingImportedPresets.length?(l(),s("div",Wn,[e("div",Hn,[p[10]||(p[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:p[4]||(p[4]=m=>r("clear-imports"))},"Discard")]),e("div",Qn,[e("select",{value:h.importScopeFilter,class:"select",onChange:p[5]||(p[5]=m=>r("update:importScopeFilter",m.target.value))},[...p[11]||(p[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Yn),e("select",{value:h.importConflictMode,class:"select",onChange:p[6]||(p[6]=m=>r("update:importConflictMode",m.target.value))},[...p[12]||(p[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Jn),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:p[7]||(p[7]=m=>r("apply-imports"))},"Merge Selected")]),e("div",Kn,[(l(!0),s(H,null,de(h.filteredPendingImports,m=>(l(),s("label",{key:`pending-${m.id}`,class:"import-item"},[ne(e("input",{"onUpdate:modelValue":g=>m.selected=g,type:"checkbox"},null,8,Xn),[[rt,m.selected]]),e("span",Zn,w(m.name),1),e("span",el,w(m.scope),1),m.category?(l(),s("span",tl,w(m.category),1)):L("",!0)]))),128))])])):L("",!0)]))}},nl=_e(ol,[["__scopeId","data-v-61f99273"]]),ll={class:"properties-panel"},il={key:1,class:"panel-section"},sl={class:"field-hint"},al={class:"motion-scrubber-shell"},rl={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},dl=["onClick"],ul={class:"motion-preview"},cl={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},pl={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},vl={class:"motion-card-label"},ml={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},fl={class:"form-group"},gl={class:"form-group"},bl={class:"form-group",style:{"margin-top":"var(--space-3)"}},yl={class:"preset-row",style:{"margin-top":"var(--space-3)"}},hl={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},xl={key:0,class:"preset-list"},wl=["onDragstart","onDragenter","onDrop"],kl=["onClick"],Cl={key:0,class:"preset-meta-chip"},Sl=["onClick"],$l=["onClick"],Il=["onClick"],Ml={key:1,class:"preset-row preset-edit-row"},El=["onClick"],Pl={key:1,class:"field-hint"},Al={class:"panel-section"},zl={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Nl={class:"form-group"},_l={class:"bg-type-tabs"},Tl=["onClick"],jl={key:0,class:"color-row"},Bl=["value"],Ll=["value"],Dl={class:"panel-section"},ql={class:"panel-section"},Rl=["value"],Fl={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ul=["value"],Ol={class:"check-row"},Gl=["checked"],Vl={class:"panel-section"},Wl={class:"check-row"},Hl=["checked"],Ql={class:"check-row"},Yl=["checked"],Jl={class:"check-row"},Kl=["checked"],Xl={class:"check-row"},Zl=["checked"],ei={class:"check-row"},ti=["checked"],oi={class:"panel-section"},ni={class:"panel-title"},li={class:"element-type-badge"},ii={class:"geo-grid"},si={class:"form-group"},ai=["value"],ri={class:"form-group"},di=["value"],ui={class:"form-group"},ci=["value"],pi={class:"form-group"},vi=["value"],mi={class:"form-group"},fi=["value"],gi={class:"form-group"},bi=["value"],yi={class:"panel-section"},hi={class:"motion-scrubber-shell"},xi={class:"motion-card-grid"},wi=["onClick"],ki={class:"motion-preview"},Ci={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Si={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},$i={class:"motion-card-label"},Ii={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Mi={class:"form-group"},Ei=["value"],Pi={class:"form-group"},Ai=["value"],zi={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Ni={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},_i={key:0,class:"preset-list"},Ti=["onDragstart","onDragenter","onDrop"],ji=["onClick"],Bi={key:0,class:"preset-meta-chip"},Li=["onClick"],Di=["onClick"],qi=["onClick"],Ri={key:1,class:"preset-row preset-edit-row"},Fi=["onClick"],Ui={key:1,class:"field-hint"},Oi={key:0,class:"panel-section"},Gi={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Vi=["value"],Wi={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Hi={class:"form-group"},Qi=["value"],Yi={class:"form-group"},Ji=["value"],Ki={class:"form-group",style:{"margin-top":"var(--space-3)"}},Xi=["value"],Zi=["value"],es={class:"form-group",style:{"margin-top":"var(--space-3)"}},ts={class:"align-btns"},os=["onClick"],ns={class:"form-group",style:{"margin-top":"var(--space-3)"}},ls={class:"style-btns"},is={class:"form-group",style:{"margin-top":"var(--space-3)"}},ss={class:"color-row"},as=["value"],rs=["value"],ds={class:"form-group",style:{"margin-top":"var(--space-3)"}},us=["value"],cs={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ps={class:"form-group"},vs=["value"],ms={class:"form-group"},fs=["value"],gs={key:1,class:"panel-section"},bs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ys=["value"],hs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xs=["value"],ws={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ks=["value"],Cs={class:"form-group"},Ss=["value"],$s={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Is={class:"form-group"},Ms=["value"],Es={class:"form-group"},Ps=["value"],As={key:2,class:"panel-section"},zs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ns=["value"],_s={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ts={class:"color-row"},js=["value"],Bs=["value"],Ls={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ds={class:"color-row"},qs=["value"],Rs=["value"],Fs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Us=["value"],Os={class:"form-group"},Gs=["value"],Vs={class:"form-group",style:{"margin-top":"var(--space-3)"}},Ws=["value"],Hs={key:3,class:"panel-section"},Qs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ys=["value"],Js={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ks=["value"],Xs={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Zs=["value"],ea={key:0,class:"form-group"},ta=["value"],oa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},na={class:"form-group"},la=["value"],ia={class:"form-group"},sa=["value"],aa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ra={class:"form-group"},da=["value"],ua={class:"form-group"},ca=["value"],pa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},va={class:"form-group"},ma=["value"],fa={class:"form-group"},ga=["value"],ba={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ya={class:"form-group"},ha=["value"],xa=["value"],wa={class:"form-group"},ka=["value"],Ca={key:4,class:"panel-section"},Sa={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$a=["value"],Ia={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ma={class:"color-row"},Ea=["value"],Pa=["value"],Aa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},za={class:"form-group"},Na=["value"],_a={class:"form-group"},Ta=["value"],ja={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ba=["value"],La={class:"form-group"},Da=["value"],qa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Ra={class:"form-group"},Fa=["value"],Ua={class:"form-group"},Oa=["value"],Ga={key:5,class:"panel-section"},Va={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Wa=["value"],Ha={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qa=["value"],Ya={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ja=["value"],Ka={class:"check-row"},Xa=["checked"],Za={class:"check-row"},er=["checked"],tr={class:"check-row"},or=["checked"],nr={class:"check-row"},lr=["checked"],ir={key:6,class:"panel-section"},sr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ar=["value"],rr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},dr=["value"],ur={class:"check-row"},cr=["checked"],pr={class:"check-row"},vr=["checked"],mr={class:"check-row"},fr=["checked"],gr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},br={class:"form-group"},yr=["value"],hr={class:"form-group"},xr=["value"],wr={class:"form-group",style:{"margin-top":"var(--space-3)"}},kr=["value"],Cr={key:7,class:"panel-section"},Sr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$r=["value"],Ir={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Mr=["value"],Er={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pr=["value"],Ar={class:"form-group"},zr=["value"],Nr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_r={class:"form-group"},Tr=["value"],jr={class:"form-group"},Br=["value"],Lr={class:"form-group",style:{"margin-top":"var(--space-3)"}},Dr=["value"],qr={class:"panel-section"},Rr={class:"actions-list"},Fr={__name:"PropertiesPanel",setup(h){const i=Fe(),r=Ue(),d=_(()=>r.getProject(i.projectId)),p=_(()=>{var c,t;return(t=(c=d.value)==null?void 0:c.slides)==null?void 0:t.find(T=>T.id===i.currentSlideId)}),m=_(()=>{var c;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((c=d.value)==null?void 0:c.settings)||{}}}),g=_(()=>Array.isArray(m.value.motionPresets)?m.value.motionPresets:[]),u=_(()=>g.value.filter(c=>c.scope!=="group")),I=_(()=>g.value.filter(c=>c.scope==="group")),Q=_(()=>{var t;const c=new Set(i.selectedElementIds);return(((t=p.value)==null?void 0:t.elements)||[]).filter(T=>c.has(T.id))}),v=_(()=>{var c,t;return i.selectedElementId?(t=(c=p.value)==null?void 0:c.elements)==null?void 0:t.find(T=>T.id===i.selectedElementId):null}),te=_(()=>i.multiSelection||!!v.value),q=_(()=>i.multiSelection?"group":"single"),j=_(()=>{var t,T;const c=(T=(t=v.value)==null?void 0:t.animations)==null?void 0:T[0];return{type:(c==null?void 0:c.type)||"auto",delay:Number((c==null?void 0:c.delay)||0),duration:Number((c==null?void 0:c.duration)||.64)}}),f=_(()=>{var xe,Me;const c=Q.value.map(we=>{var Ye;return((Ye=we.animations)==null?void 0:Ye[0])||null}),t=((xe=c[0])==null?void 0:xe.type)||"auto",T=Number(((Me=c[0])==null?void 0:Me.duration)||.64),se=c.every(we=>((we==null?void 0:we.type)||"auto")===t),he=c.every(we=>Number((we==null?void 0:we.duration)||.64)===T);return{type:se?t:"mixed",duration:he?T:.64}}),a=P(0),E=P(0),R=P(""),le=P(""),re=P(""),z=P(""),A=P(""),Y=P(""),K=P(""),U=P(""),ue=P(""),ie=P(""),be=P(""),ye=P(""),Se=P(""),Ne=P("all"),Be=P(null),$e=P([]),ce=P("all"),ve=P("replace"),D=P({});Re(v,c=>{c?D.value=JSON.parse(JSON.stringify(c)):D.value={}},{immediate:!0,deep:!0});function Z(c){v.value&&r.updateElement(i.projectId,i.currentSlideId,v.value.id,c)}function y(c){if(!v.value)return;const t={...v.value.content,...c};Z({content:t})}function J(c,t){const T=parseFloat(t);isNaN(T)||Z({[c]:T})}const oe=P({});Re(p,c=>{c&&(oe.value={...c})},{immediate:!0});function ae(c){p.value&&r.updateSlide(i.projectId,p.value.id,c)}function fe(c){d.value&&r.updateProject(i.projectId,{settings:{...m.value,...c}})}function M(c){return String(c||"").split(",").map(t=>t.trim()).filter(Boolean)}function $(c){const t=(c==null?void 0:c.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((c==null?void 0:c.name)||"Imported Preset").trim()||"Imported Preset",category:String((c==null?void 0:c.category)||"").trim(),tags:Array.isArray(c==null?void 0:c.tags)?c.tags.map(T=>String(T).trim()).filter(Boolean):M(c==null?void 0:c.tags),type:String((c==null?void 0:c.type)||"auto"),delay:Math.max(0,Number(c==null?void 0:c.delay)||0),duration:Math.max(.1,Number(c==null?void 0:c.duration)||.72),stepDelay:Math.max(0,Number(c==null?void 0:c.stepDelay)||0)}}const k=_(()=>[...new Set(g.value.map(t=>t.category).filter(Boolean))].sort((t,T)=>t.localeCompare(T))),Ee=_(()=>[...g.value].filter(c=>Number(c.usageCount||0)>0).sort((c,t)=>{const T=Number(t.lastUsedAt||0)-Number(c.lastUsedAt||0);return T!==0?T:Number(t.usageCount||0)-Number(c.usageCount||0)}).slice(0,6)),Pe=_(()=>ce.value==="all"?$e.value:$e.value.filter(c=>c.scope===ce.value));function Ie(c){const t=Se.value.trim().toLowerCase(),T=Ne.value;return T==="all"||(c.category||"")===T?t?[c.name,c.category,...c.tags||[]].filter(Boolean).some(he=>String(he).toLowerCase().includes(t)):!0:!1}const b=_(()=>u.value.filter(Ie)),B=_(()=>I.value.filter(Ie)),V=_(()=>Ee.value.filter(c=>q.value==="group"?c.scope==="group":c.scope!=="group"));function X(c){const t=String(c.name||"").trim();if(!t)return;const T=g.value.findIndex(xe=>xe.scope===c.scope&&xe.name.toLowerCase()===t.toLowerCase()),se={...c,id:T>=0?g.value[T].id:`motion-${Date.now()}`,name:t,category:String(c.category||"").trim(),tags:Array.isArray(c.tags)?c.tags:M(c.tags)},he=[...g.value];T>=0?he.splice(T,1,se):he.push(se),fe({motionPresets:he})}function Ae(c,t){const T=g.value.map(se=>se.id===c?{...se,...t}:se);fe({motionPresets:T})}function Te(c){const t=g.value.find(T=>T.id===c);t&&Ae(c,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function Oe(c,t){const T=g.value.filter(Me=>Me.scope===c).map(Me=>Me.name.toLowerCase()),se=String(t||"Preset").trim()||"Preset";if(!T.includes(se.toLowerCase()))return se;let he=2,xe=`${se} Copy`;for(;T.includes(xe.toLowerCase());)xe=`${se} Copy ${he}`,he+=1;return xe}function Le(c){fe({motionPresets:g.value.filter(t=>t.id!==c)}),re.value===c&&(re.value="",z.value="")}function C(c){X({...c,id:void 0,name:Oe(c.scope,c.name)})}function n(c){re.value=c.id,z.value=c.name,A.value=c.category||"",Y.value=Array.isArray(c.tags)?c.tags.join(", "):""}function N(){re.value="",z.value="",A.value="",Y.value=""}function W(c){const t=String(z.value||"").trim();t&&(Ae(c,{name:t,category:String(A.value||"").trim(),tags:M(Y.value)}),N())}function O(c,t,T){if(!t||!T||t===T)return;const se=g.value.filter(qe=>qe.scope===c),he=se.findIndex(qe=>qe.id===t),xe=se.findIndex(qe=>qe.id===T);if(he===-1||xe===-1)return;const Me=[...se],[we]=Me.splice(he,1);Me.splice(xe,0,we);const Ye=g.value.filter(qe=>qe.scope!==c),Ze=[];g.value.forEach(qe=>{if(qe.scope===c){Me.length&&Ze.push(Me.shift());return}const tt=Ye.shift();tt&&Ze.push(tt)}),fe({motionPresets:Ze})}function ge(c){K.value=c.id,U.value=c.id}function Ce(c){K.value&&(U.value=c.id)}function ze(c){K.value&&(O(c.scope,K.value,c.id),K.value="",U.value="")}function S(){K.value="",U.value=""}function De(){a.value+=1}function We(){E.value+=1}function He(c,t){ae({[c]:t})}function To(c){const t=Math.max(0,Number(c)||0);ae({duration:t})}function nt(c){var se;if(!v.value)return;const T={...((se=v.value.animations)==null?void 0:se[0])||{type:"auto",delay:0,duration:.64},...c};if(T.type==="auto"){Z({animations:[]});return}Z({animations:[{type:T.type||"none",delay:Math.max(0,Number(T.delay)||0),duration:Math.max(.1,Number(T.duration)||.64)}]})}const Ve=P("stagger-in"),Ke=P(0),Xe=P(.12),Qe=P(.72);Re(Q,c=>{c.length&&(Ve.value=f.value.type==="mixed"?"stagger-in":f.value.type,Qe.value=f.value.duration)},{immediate:!0,deep:!0});function jo(){if(!Q.value.length)return;[...Q.value].sort((t,T)=>(t.y||0)!==(T.y||0)?(t.y||0)-(T.y||0):(t.x||0)-(T.x||0)).forEach((t,T)=>{if(Ve.value==="auto"){r.updateElement(i.projectId,i.currentSlideId,t.id,{animations:[]});return}r.updateElement(i.projectId,i.currentSlideId,t.id,{animations:[{type:Ve.value,delay:Math.max(0,Number(Ke.value)||0)+T*Math.max(0,Number(Xe.value)||0),duration:Math.max(.1,Number(Qe.value)||.72)}]})})}function dt(c){Ve.value=c.type||"stagger-in",Ke.value=Number(c.delay||0),Xe.value=Number(c.stepDelay||0),Qe.value=Number(c.duration||.72),Te(c.id),We()}function Bo(){X({scope:"group",name:le.value,category:be.value,tags:M(ye.value),type:Ve.value,delay:Math.max(0,Number(Ke.value)||0),stepDelay:Math.max(0,Number(Xe.value)||0),duration:Math.max(.1,Number(Qe.value)||.72)}),le.value="",be.value="",ye.value=""}function ut(c){nt({type:c.type||"auto",delay:Number(c.delay||0),duration:Number(c.duration||.72)}),Te(c.id),De()}function Lo(){X({scope:"single",name:R.value,category:ue.value,tags:M(ie.value),type:j.value.type,delay:Math.max(0,Number(j.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(j.value.duration)||.72)}),R.value="",ue.value="",ie.value=""}function Do(){var c;(c=Be.value)==null||c.click()}async function qo(c){var se;const t=c.target,T=(se=t==null?void 0:t.files)==null?void 0:se[0];if(T)try{const he=await T.text(),xe=JSON.parse(he),Me=Array.isArray(xe)?xe:Array.isArray(xe.motionPresets)?xe.motionPresets:[];if(!Me.length)return;$e.value=Me.map(we=>({...$(we),selected:!0,importName:String((we==null?void 0:we.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function ct(){$e.value=[]}function Ro(){const c=$e.value.filter(T=>T.selected);if(!c.length)return;const t=[...g.value];c.forEach(T=>{const se=t.findIndex(he=>he.scope===T.scope&&he.name.toLowerCase()===T.name.toLowerCase());if(se>=0){ve.value==="replace"?t.splice(se,1,{...t[se],...T,id:t[se].id}):t.push({...T,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:Oe(T.scope,T.name)});return}t.push(T)}),fe({motionPresets:t}),ct()}function Fo(){var xe;if(!g.value.length)return;const c={version:1,exportedAt:new Date().toISOString(),motionPresets:g.value.map(({id:Me,...we})=>we)},t=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),T=URL.createObjectURL(t),se=document.createElement("a"),he=String(((xe=d.value)==null?void 0:xe.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";se.href=T,se.download=`${he}-motion-presets.json`,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL(T)}const Uo=_(()=>[{id:`single-${a.value}`,delay:Math.max(0,Number(j.value.delay)||0),duration:Math.max(.1,Number(j.value.duration)||.72),type:j.value.type}]),Oo=_(()=>Array.from({length:Math.min(Math.max(Q.value.length,3),5)},(c,t)=>({id:`group-${E.value}-${t}`,delay:Math.max(0,Number(Ke.value)||0)+t*Math.max(0,Number(Xe.value)||0),duration:Math.max(.1,Number(Qe.value)||.72),type:Ve.value}))),pt=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],vt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(c,t)=>{var T,se,he,xe,Me,we,Ye,Ze,qe,tt,mt,ft,gt,bt,yt,ht,xt,wt,kt,Ct,St,$t,It,Mt,Et,Pt,At,zt,Nt,_t,Tt,jt,Bt,Lt,Dt,qt,Rt,Ft,Ut,Ot,Gt,Vt,Wt,Ht,Qt,Yt,Jt,Kt,Xt,Zt,eo,to,oo,no,lo,io,so,ao,ro,uo,co,po,vo,mo,fo,go,bo,yo,ho,xo,wo,ko,Co,So,$o,Io,Mo,Eo;return l(),s("div",ll,[e("input",{ref_key:"presetImportInput",ref:Be,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:qo},null,544),t[241]||(t[241]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),te.value?(l(),je(nl,{key:0,"search-query":Se.value,"category-filter":Ne.value,"available-categories":k.value,"recent-presets":V.value,"pending-imported-presets":$e.value,"filtered-pending-imports":Pe.value,"import-scope-filter":ce.value,"import-conflict-mode":ve.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>Se.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>Ne.value=o),onTriggerImport:Do,onExportPresets:Fo,onApplyPreset:t[2]||(t[2]=o=>q.value==="group"?dt(o):ut(o)),onClearImports:ct,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>ce.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>ve.value=o),onApplyImports:Ro},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):L("",!0),x(i).multiSelection?(l(),s("div",il,[t[124]||(t[124]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",sl,w(Q.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",al,[e("div",{class:"motion-scrubber-header"},[t[120]||(t[120]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:We},"Replay")]),(l(),s("div",{class:"motion-scrubber-stage",key:`group-preview-${E.value}`},[(l(!0),s(H,null,de(Oo.value,o=>(l(),s("span",{key:o.id,class:ee(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:pe({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",rl,[(l(),s(H,null,de(pt,o=>e("button",{key:`group-${o.value}`,type:"button",class:ee(["motion-card",Ve.value===o.value&&"active"]),onClick:G=>Ve.value=o.value},[e("span",ul,[e("span",{class:ee(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),s("span",cl)):L("",!0),o.value==="stagger-in"?(l(),s("span",pl)):L("",!0)]),e("span",vl,w(o.label),1)],10,dl)),64))]),e("div",ml,[e("div",fl,[t[121]||(t[121]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),ne(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>Ke.value=o),class:"input"},null,512),[[me,Ke.value]])]),e("div",gl,[t[122]||(t[122]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),ne(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>Xe.value=o),class:"input"},null,512),[[me,Xe.value]])])]),e("div",bl,[t[123]||(t[123]=e("label",{class:"form-label"},"Duration (seconds)",-1)),ne(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>Qe.value=o),class:"input"},null,512),[[me,Qe.value]])]),e("div",yl,[ne(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>le.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[me,le.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Bo},"Save")]),e("div",hl,[ne(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>be.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[me,be.value]]),ne(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>ye.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,ye.value]])]),B.value.length?(l(),s("div",xl,[(l(!0),s(H,null,de(B.value,o=>(l(),s("div",{key:o.id,class:ee(["preset-item",K.value===o.id&&"dragging",U.value===o.id&&K.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:G=>ge(o),onDragenter:ke(G=>Ce(o),["prevent"]),onDragover:t[14]||(t[14]=ke(()=>{},["prevent"])),onDrop:ke(G=>ze(o),["prevent"]),onDragend:S},[e("button",{type:"button",class:"preset-chip",onClick:G=>dt(o)},w(o.name),9,kl),o.category?(l(),s("span",Cl,w(o.category),1)):L("",!0),(l(!0),s(H,null,de(o.tags||[],G=>(l(),s("span",{key:`${o.id}-${G}`,class:"preset-meta-chip muted"},"#"+w(G),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:G=>C(o)},"Duplicate",8,Sl),e("button",{type:"button",class:"preset-mini-btn",onClick:G=>n(o)},"Rename",8,$l),e("button",{type:"button",class:"preset-mini-btn danger",onClick:G=>Le(o.id)},"Delete",8,Il),re.value===o.id?(l(),s("div",Ml,[ne(e("input",{"onUpdate:modelValue":t[11]||(t[11]=G=>z.value=G),class:"input"},null,512),[[me,z.value]]),ne(e("input",{"onUpdate:modelValue":t[12]||(t[12]=G=>A.value=G),class:"input",placeholder:"Category"},null,512),[[me,A.value]]),ne(e("input",{"onUpdate:modelValue":t[13]||(t[13]=G=>Y.value=G),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,Y.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:G=>W(o.id)},"Save",8,El),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:N},"Cancel")])):L("",!0)],42,wl))),128))])):I.value.length?(l(),s("div",Pl,"No group presets match the current search.")):L("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:jo}," Apply Sequence to Selection ")])):v.value?(l(),s(H,{key:3},[e("div",oi,[e("div",ni,[t[141]||(t[141]=F(" Position & Size ",-1)),e("span",li,w(v.value.type),1)]),e("div",ii,[e("div",si,[t[142]||(t[142]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(v.value.x),class:"input",onChange:t[33]||(t[33]=o=>J("x",o.target.value))},null,40,ai)]),e("div",ri,[t[143]||(t[143]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(v.value.y),class:"input",onChange:t[34]||(t[34]=o=>J("y",o.target.value))},null,40,di)]),e("div",ui,[t[144]||(t[144]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(v.value.width),class:"input",onChange:t[35]||(t[35]=o=>J("width",o.target.value))},null,40,ci)]),e("div",pi,[t[145]||(t[145]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(v.value.height),class:"input",onChange:t[36]||(t[36]=o=>J("height",o.target.value))},null,40,vi)]),e("div",mi,[t[146]||(t[146]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(v.value.rotation||0),class:"input",onChange:t[37]||(t[37]=o=>J("rotation",o.target.value))},null,40,fi)]),e("div",gi,[t[147]||(t[147]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:v.value.opacity??1,class:"input",onChange:t[38]||(t[38]=o=>J("opacity",o.target.value))},null,40,bi)])])]),e("div",yi,[t[151]||(t[151]=e("div",{class:"panel-title"},"Animation",-1)),e("div",hi,[e("div",{class:"motion-scrubber-header"},[t[148]||(t[148]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:De},"Replay")]),(l(),s("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${a.value}`},[(l(!0),s(H,null,de(Uo.value,o=>(l(),s("span",{key:o.id,class:ee(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:pe({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",xi,[(l(),s(H,null,de(pt,o=>e("button",{key:o.value,type:"button",class:ee(["motion-card",j.value.type===o.value&&"active"]),onClick:G=>nt({type:o.value})},[e("span",ki,[e("span",{class:ee(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(l(),s("span",Ci)):L("",!0),o.value==="stagger-in"?(l(),s("span",Si)):L("",!0)]),e("span",$i,w(o.label),1)],10,wi)),64))]),e("div",Ii,[e("div",Mi,[t[149]||(t[149]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:j.value.delay,class:"input",onChange:t[39]||(t[39]=o=>nt({delay:o.target.value}))},null,40,Ei)]),e("div",Pi,[t[150]||(t[150]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:j.value.duration,class:"input",onChange:t[40]||(t[40]=o=>nt({duration:o.target.value}))},null,40,Ai)])]),e("div",zi,[ne(e("input",{"onUpdate:modelValue":t[41]||(t[41]=o=>R.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[me,R.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Lo},"Save")]),e("div",Ni,[ne(e("input",{"onUpdate:modelValue":t[42]||(t[42]=o=>ue.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[me,ue.value]]),ne(e("input",{"onUpdate:modelValue":t[43]||(t[43]=o=>ie.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,ie.value]])]),b.value.length?(l(),s("div",_i,[(l(!0),s(H,null,de(b.value,o=>(l(),s("div",{key:o.id,class:ee(["preset-item",K.value===o.id&&"dragging",U.value===o.id&&K.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:G=>ge(o),onDragenter:ke(G=>Ce(o),["prevent"]),onDragover:t[47]||(t[47]=ke(()=>{},["prevent"])),onDrop:ke(G=>ze(o),["prevent"]),onDragend:S},[e("button",{type:"button",class:"preset-chip",onClick:G=>ut(o)},w(o.name),9,ji),o.category?(l(),s("span",Bi,w(o.category),1)):L("",!0),(l(!0),s(H,null,de(o.tags||[],G=>(l(),s("span",{key:`${o.id}-${G}`,class:"preset-meta-chip muted"},"#"+w(G),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:G=>C(o)},"Duplicate",8,Li),e("button",{type:"button",class:"preset-mini-btn",onClick:G=>n(o)},"Rename",8,Di),e("button",{type:"button",class:"preset-mini-btn danger",onClick:G=>Le(o.id)},"Delete",8,qi),re.value===o.id?(l(),s("div",Ri,[ne(e("input",{"onUpdate:modelValue":t[44]||(t[44]=G=>z.value=G),class:"input"},null,512),[[me,z.value]]),ne(e("input",{"onUpdate:modelValue":t[45]||(t[45]=G=>A.value=G),class:"input",placeholder:"Category"},null,512),[[me,A.value]]),ne(e("input",{"onUpdate:modelValue":t[46]||(t[46]=G=>Y.value=G),class:"input",placeholder:"Tags, comma separated"},null,512),[[me,Y.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:G=>W(o.id)},"Save",8,Fi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:N},"Cancel")])):L("",!0)],42,Ti))),128))])):u.value.length?(l(),s("div",Ui,"No single-element presets match the current search.")):L("",!0),t[152]||(t[152]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))]),["text","heading"].includes(v.value.type)?(l(),s("div",Oi,[t[168]||(t[168]=e("div",{class:"panel-title"},"Text",-1)),e("div",Gi,[t[153]||(t[153]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(Ze=v.value.content)==null?void 0:Ze.text,class:"textarea",style:{"min-height":"64px"},onInput:t[48]||(t[48]=o=>y({text:o.target.value}))},null,40,Vi)]),e("div",Wi,[e("div",Hi,[t[154]||(t[154]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(qe=v.value.content)==null?void 0:qe.fontSize,class:"input",onChange:t[49]||(t[49]=o=>y({fontSize:+o.target.value}))},null,40,Qi)]),e("div",Yi,[t[156]||(t[156]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(tt=v.value.content)==null?void 0:tt.fontWeight,class:"select",onChange:t[50]||(t[50]=o=>y({fontWeight:o.target.value}))},[...t[155]||(t[155]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,Ji)])]),e("div",Ki,[t[157]||(t[157]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(mt=v.value.content)==null?void 0:mt.fontFamily,class:"select",onChange:t[51]||(t[51]=o=>y({fontFamily:o.target.value}))},[(l(),s(H,null,de(vt,o=>e("option",{key:o,value:o},w(o.split(",")[0]),9,Zi)),64))],40,Xi)]),e("div",es,[t[158]||(t[158]=e("label",{class:"form-label"},"Align",-1)),e("div",ts,[(l(),s(H,null,de(["left","center","right","justify"],o=>{var G;return e("button",{key:o,class:ee(["align-btn",((G=v.value.content)==null?void 0:G.textAlign)===o&&"active"]),onClick:Go=>y({textAlign:o})},w(o[0].toUpperCase()),11,os)}),64))])]),e("div",ns,[t[162]||(t[162]=e("label",{class:"form-label"},"Style",-1)),e("div",ls,[e("button",{class:ee(["style-btn",((ft=v.value.content)==null?void 0:ft.fontStyle)==="italic"&&"active"]),onClick:t[52]||(t[52]=o=>{var G;return y({fontStyle:((G=v.value.content)==null?void 0:G.fontStyle)==="italic"?"normal":"italic"})})},[...t[159]||(t[159]=[e("i",null,"I",-1)])],2),e("button",{class:ee(["style-btn",((gt=v.value.content)==null?void 0:gt.textDecoration)==="underline"&&"active"]),onClick:t[53]||(t[53]=o=>{var G;return y({textDecoration:((G=v.value.content)==null?void 0:G.textDecoration)==="underline"?"none":"underline"})})},[...t[160]||(t[160]=[e("u",null,"U",-1)])],2),e("button",{class:ee(["style-btn",((bt=v.value.content)==null?void 0:bt.textDecoration)==="line-through"&&"active"]),onClick:t[54]||(t[54]=o=>{var G;return y({textDecoration:((G=v.value.content)==null?void 0:G.textDecoration)==="line-through"?"none":"line-through"})})},[...t[161]||(t[161]=[e("s",null,"S",-1)])],2)])]),e("div",is,[t[163]||(t[163]=e("label",{class:"form-label"},"Color",-1)),e("div",ss,[e("input",{type:"color",value:((yt=v.value.content)==null?void 0:yt.color)||"#000",onInput:t[55]||(t[55]=o=>y({color:o.target.value})),class:"color-input-native"},null,40,as),e("input",{value:((ht=v.value.content)==null?void 0:ht.color)||"#000",class:"input",onInput:t[56]||(t[56]=o=>y({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,rs)])]),e("div",ds,[t[164]||(t[164]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((xt=v.value.content)==null?void 0:xt.lineHeight)??1.5,class:"input",onChange:t[57]||(t[57]=o=>y({lineHeight:+o.target.value}))},null,40,us)]),e("div",cs,[e("div",ps,[t[166]||(t[166]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((wt=v.value.content)==null?void 0:wt.textTransform)||"none",class:"select",onChange:t[58]||(t[58]=o=>y({textTransform:o.target.value}))},[...t[165]||(t[165]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,vs)]),e("div",ms,[t[167]||(t[167]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((kt=v.value.content)==null?void 0:kt.letterSpacing)??0,class:"input",onChange:t[59]||(t[59]=o=>y({letterSpacing:+o.target.value}))},null,40,fs)])])])):L("",!0),v.value.type==="image"?(l(),s("div",gs,[t[176]||(t[176]=e("div",{class:"panel-title"},"Image",-1)),e("div",bs,[t[169]||(t[169]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Ct=v.value.content)==null?void 0:Ct.src,class:"input",placeholder:"https://...",onInput:t[60]||(t[60]=o=>y({src:o.target.value}))},null,40,ys)]),e("div",hs,[t[170]||(t[170]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(St=v.value.content)==null?void 0:St.alt,class:"input",onInput:t[61]||(t[61]=o=>y({alt:o.target.value}))},null,40,xs)]),e("div",ws,[t[172]||(t[172]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:(($t=v.value.content)==null?void 0:$t.objectFit)||"cover",class:"select",onChange:t[62]||(t[62]=o=>y({objectFit:o.target.value}))},[...t[171]||(t[171]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,ks)]),e("div",Cs,[t[173]||(t[173]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((It=v.value.content)==null?void 0:It.borderRadius)||0,class:"input",onChange:t[63]||(t[63]=o=>y({borderRadius:+o.target.value}))},null,40,Ss)]),e("div",$s,[e("div",Is,[t[174]||(t[174]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Mt=v.value.content)==null?void 0:Mt.borderWidth)||0,class:"input",onChange:t[64]||(t[64]=o=>y({borderWidth:+o.target.value}))},null,40,Ms)]),e("div",Es,[t[175]||(t[175]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Et=v.value.content)==null?void 0:Et.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[65]||(t[65]=o=>y({borderColor:o.target.value}))},null,40,Ps)])])])):L("",!0),v.value.type==="shape"?(l(),s("div",As,[t[184]||(t[184]=e("div",{class:"panel-title"},"Shape",-1)),e("div",zs,[t[178]||(t[178]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((Pt=v.value.content)==null?void 0:Pt.shapeType)||"rectangle",class:"select",onChange:t[66]||(t[66]=o=>y({shapeType:o.target.value}))},[...t[177]||(t[177]=[Ge('<option value="rectangle" data-v-649d33ce>Rectangle</option><option value="circle" data-v-649d33ce>Circle</option><option value="triangle" data-v-649d33ce>Triangle</option><option value="star" data-v-649d33ce>Star</option><option value="arrow" data-v-649d33ce>Arrow</option><option value="diamond" data-v-649d33ce>Diamond</option>',6)])],40,Ns)]),e("div",_s,[t[179]||(t[179]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Ts,[e("input",{type:"color",value:((At=v.value.content)==null?void 0:At.fillColor)||"#6c47ff",onInput:t[67]||(t[67]=o=>y({fillColor:o.target.value})),class:"color-input-native"},null,40,js),e("input",{value:((zt=v.value.content)==null?void 0:zt.fillColor)||"#6c47ff",class:"input",onInput:t[68]||(t[68]=o=>y({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Bs)])]),e("div",Ls,[t[180]||(t[180]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Ds,[e("input",{type:"color",value:((Nt=v.value.content)==null?void 0:Nt.borderColor)||"transparent",onInput:t[69]||(t[69]=o=>y({borderColor:o.target.value})),class:"color-input-native"},null,40,qs),e("input",{value:((_t=v.value.content)==null?void 0:_t.borderColor)||"transparent",class:"input",onInput:t[70]||(t[70]=o=>y({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Rs)])]),e("div",Fs,[t[181]||(t[181]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((Tt=v.value.content)==null?void 0:Tt.borderWidth)||0,class:"input",onChange:t[71]||(t[71]=o=>y({borderWidth:+o.target.value}))},null,40,Us)]),e("div",Os,[t[182]||(t[182]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((jt=v.value.content)==null?void 0:jt.borderRadius)||0,class:"input",onChange:t[72]||(t[72]=o=>y({borderRadius:+o.target.value}))},null,40,Gs)]),e("div",Vs,[t[183]||(t[183]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((Bt=v.value.content)==null?void 0:Bt.opacity)??1,class:"input",onChange:t[73]||(t[73]=o=>y({opacity:+o.target.value}))},null,40,Ws)])])):L("",!0),v.value.type==="button"?(l(),s("div",Hs,[t[200]||(t[200]=e("div",{class:"panel-title"},"Button",-1)),e("div",Qs,[t[185]||(t[185]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(Lt=v.value.content)==null?void 0:Lt.label,class:"input",onInput:t[74]||(t[74]=o=>y({label:o.target.value}))},null,40,Ys)]),e("div",Js,[t[187]||(t[187]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((Dt=v.value.content)==null?void 0:Dt.variant)||"primary",class:"select",onChange:t[75]||(t[75]=o=>y({variant:o.target.value}))},[...t[186]||(t[186]=[Ge('<option value="primary" data-v-649d33ce>Primary</option><option value="secondary" data-v-649d33ce>Secondary</option><option value="outline" data-v-649d33ce>Outline</option><option value="ghost" data-v-649d33ce>Ghost</option><option value="danger" data-v-649d33ce>Danger</option>',5)])],40,Ks)]),e("div",Xs,[t[189]||(t[189]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((qt=v.value.content)==null?void 0:qt.action)||"none",class:"select",onChange:t[76]||(t[76]=o=>y({action:o.target.value}))},[...t[188]||(t[188]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Zs)]),(Rt=v.value.content)!=null&&Rt.action&&v.value.content.action!=="none"?(l(),s("div",ea,[t[190]||(t[190]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Ft=v.value.content)==null?void 0:Ft.target,class:"input",placeholder:"Slide # or https://...",onInput:t[77]||(t[77]=o=>y({target:o.target.value}))},null,40,ta)])):L("",!0),e("div",oa,[e("div",na,[t[191]||(t[191]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((Ut=v.value.content)==null?void 0:Ut.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[78]||(t[78]=o=>y({bgColor:o.target.value}))},null,40,la)]),e("div",ia,[t[192]||(t[192]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Ot=v.value.content)==null?void 0:Ot.textColor)||"#ffffff",class:"color-input-native",onInput:t[79]||(t[79]=o=>y({textColor:o.target.value}))},null,40,sa)])]),e("div",aa,[e("div",ra,[t[193]||(t[193]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Gt=v.value.content)==null?void 0:Gt.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[80]||(t[80]=o=>y({borderColor:o.target.value}))},null,40,da)]),e("div",ua,[t[194]||(t[194]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Vt=v.value.content)==null?void 0:Vt.borderRadius)??8,class:"input",onChange:t[81]||(t[81]=o=>y({borderRadius:+o.target.value}))},null,40,ca)])]),e("div",pa,[e("div",va,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Wt=v.value.content)==null?void 0:Wt.fontSize)??15,class:"input",onChange:t[82]||(t[82]=o=>y({fontSize:+o.target.value}))},null,40,ma)]),e("div",fa,[t[197]||(t[197]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Ht=v.value.content)==null?void 0:Ht.fontWeight)??600),class:"select",onChange:t[83]||(t[83]=o=>y({fontWeight:+o.target.value}))},[...t[196]||(t[196]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,ga)])]),e("div",ba,[e("div",ya,[t[198]||(t[198]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Qt=v.value.content)==null?void 0:Qt.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[84]||(t[84]=o=>y({fontFamily:o.target.value}))},[(l(),s(H,null,de(vt,o=>e("option",{key:`btn-${o}`,value:o},w(o.split(",")[0]),9,xa)),64))],40,ha)]),e("div",wa,[t[199]||(t[199]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Yt=v.value.content)==null?void 0:Yt.letterSpacing)??0,class:"input",onChange:t[85]||(t[85]=o=>y({letterSpacing:+o.target.value}))},null,40,ka)])])])):L("",!0),v.value.type==="hotspot"?(l(),s("div",Ca,[t[210]||(t[210]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",Sa,[t[202]||(t[202]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Jt=v.value.content)==null?void 0:Jt.icon)||"?",class:"select",onChange:t[86]||(t[86]=o=>y({icon:o.target.value}))},[...t[201]||(t[201]=[Ge('<option value="?" data-v-649d33ce>? (Info)</option><option value="!" data-v-649d33ce>! (Alert)</option><option value="+" data-v-649d33ce>+ (Plus)</option><option value="i" data-v-649d33ce>i (Info)</option><option value="✦" data-v-649d33ce>✦ (Star)</option>',5)])],40,$a)]),e("div",Ia,[t[203]||(t[203]=e("label",{class:"form-label"},"Background Color",-1)),e("div",Ma,[e("input",{type:"color",value:((Kt=v.value.content)==null?void 0:Kt.bgColor)||"#6c47ff",onInput:t[87]||(t[87]=o=>y({bgColor:o.target.value})),class:"color-input-native"},null,40,Ea),e("input",{value:((Xt=v.value.content)==null?void 0:Xt.bgColor)||"#6c47ff",class:"input",onInput:t[88]||(t[88]=o=>y({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Pa)])]),e("div",Aa,[e("div",za,[t[204]||(t[204]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Zt=v.value.content)==null?void 0:Zt.iconColor)||"#ffffff",class:"color-input-native",onInput:t[89]||(t[89]=o=>y({iconColor:o.target.value}))},null,40,Na)]),e("div",_a,[t[205]||(t[205]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((eo=v.value.content)==null?void 0:eo.borderRadius)??999,class:"input",onChange:t[90]||(t[90]=o=>y({borderRadius:+o.target.value}))},null,40,Ta)])]),e("div",ja,[t[206]||(t[206]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(to=v.value.content)==null?void 0:to.popupTitle,class:"input",onInput:t[91]||(t[91]=o=>y({popupTitle:o.target.value}))},null,40,Ba)]),e("div",La,[t[207]||(t[207]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(oo=v.value.content)==null?void 0:oo.popupContent,class:"textarea",onInput:t[92]||(t[92]=o=>y({popupContent:o.target.value}))},null,40,Da)]),e("div",qa,[e("div",Ra,[t[208]||(t[208]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((no=v.value.content)==null?void 0:no.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[93]||(t[93]=o=>y({popupBgColor:o.target.value}))},null,40,Fa)]),e("div",Ua,[t[209]||(t[209]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((lo=v.value.content)==null?void 0:lo.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[94]||(t[94]=o=>y({popupTextColor:o.target.value}))},null,40,Oa)])])])):L("",!0),v.value.type==="video"?(l(),s("div",Ga,[t[219]||(t[219]=e("div",{class:"panel-title"},"Video",-1)),e("div",Va,[t[211]||(t[211]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(io=v.value.content)==null?void 0:io.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[95]||(t[95]=o=>y({src:o.target.value}))},null,40,Wa)]),e("div",Ha,[t[212]||(t[212]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(so=v.value.content)==null?void 0:so.poster,class:"input",onInput:t[96]||(t[96]=o=>y({poster:o.target.value}))},null,40,Qa)]),e("div",Ya,[t[214]||(t[214]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((ao=v.value.content)==null?void 0:ao.objectFit)||"cover",class:"select",onChange:t[97]||(t[97]=o=>y({objectFit:o.target.value}))},[...t[213]||(t[213]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Ja)]),e("label",Ka,[e("input",{type:"checkbox",checked:(ro=v.value.content)==null?void 0:ro.autoplay,onChange:t[98]||(t[98]=o=>y({autoplay:o.target.checked}))},null,40,Xa),t[215]||(t[215]=F(" Autoplay ",-1))]),e("label",Za,[e("input",{type:"checkbox",checked:((uo=v.value.content)==null?void 0:uo.controls)??!0,onChange:t[99]||(t[99]=o=>y({controls:o.target.checked}))},null,40,er),t[216]||(t[216]=F(" Show Controls ",-1))]),e("label",tr,[e("input",{type:"checkbox",checked:(co=v.value.content)==null?void 0:co.loop,onChange:t[100]||(t[100]=o=>y({loop:o.target.checked}))},null,40,or),t[217]||(t[217]=F(" Loop ",-1))]),e("label",nr,[e("input",{type:"checkbox",checked:(po=v.value.content)==null?void 0:po.muted,onChange:t[101]||(t[101]=o=>y({muted:o.target.checked}))},null,40,lr),t[218]||(t[218]=F(" Muted ",-1))])])):L("",!0),v.value.type==="audio"?(l(),s("div",ir,[t[228]||(t[228]=e("div",{class:"panel-title"},"Audio",-1)),e("div",sr,[t[220]||(t[220]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(vo=v.value.content)==null?void 0:vo.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[102]||(t[102]=o=>y({src:o.target.value}))},null,40,ar)]),e("div",rr,[t[221]||(t[221]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(mo=v.value.content)==null?void 0:mo.label,class:"input",onInput:t[103]||(t[103]=o=>y({label:o.target.value}))},null,40,dr)]),e("label",ur,[e("input",{type:"checkbox",checked:(fo=v.value.content)==null?void 0:fo.autoplay,onChange:t[104]||(t[104]=o=>y({autoplay:o.target.checked}))},null,40,cr),t[222]||(t[222]=F(" Autoplay ",-1))]),e("label",pr,[e("input",{type:"checkbox",checked:((go=v.value.content)==null?void 0:go.controls)!==!1,onChange:t[105]||(t[105]=o=>y({controls:o.target.checked}))},null,40,vr),t[223]||(t[223]=F(" Show Controls ",-1))]),e("label",mr,[e("input",{type:"checkbox",checked:(bo=v.value.content)==null?void 0:bo.loop,onChange:t[106]||(t[106]=o=>y({loop:o.target.checked}))},null,40,fr),t[224]||(t[224]=F(" Loop ",-1))]),e("div",gr,[e("div",br,[t[225]||(t[225]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((yo=v.value.content)==null?void 0:yo.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[107]||(t[107]=o=>y({accentColor:o.target.value}))},null,40,yr)]),e("div",hr,[t[226]||(t[226]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((ho=v.value.content)==null?void 0:ho.textColor)||"#555555",class:"color-input-native",onInput:t[108]||(t[108]=o=>y({textColor:o.target.value}))},null,40,xr)])]),e("div",wr,[t[227]||(t[227]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((xo=v.value.content)==null?void 0:xo.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[109]||(t[109]=o=>y({bgColor:o.target.value}))},null,40,kr)])])):L("",!0),v.value.type==="quiz"?(l(),s("div",Cr,[t[236]||(t[236]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",Sr,[t[229]||(t[229]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(wo=v.value.content)==null?void 0:wo.question,class:"textarea",style:{"min-height":"60px"},onInput:t[110]||(t[110]=o=>y({question:o.target.value}))},null,40,$r)]),e("div",Ir,[t[230]||(t[230]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(Co=(ko=v.value.content)==null?void 0:ko.options)==null?void 0:Co.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[111]||(t[111]=o=>y({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,Mr)]),e("div",Er,[t[231]||(t[231]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((So=v.value.content)==null?void 0:So.correctIndex)??0,class:"input",onChange:t[112]||(t[112]=o=>y({correctIndex:+o.target.value}))},null,40,Pr)]),e("div",Ar,[t[232]||(t[232]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:($o=v.value.content)==null?void 0:$o.explanation,class:"textarea",onInput:t[113]||(t[113]=o=>y({explanation:o.target.value}))},null,40,zr)]),e("div",Nr,[e("div",_r,[t[233]||(t[233]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((Io=v.value.content)==null?void 0:Io.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[114]||(t[114]=o=>y({cardBgColor:o.target.value}))},null,40,Tr)]),e("div",jr,[t[234]||(t[234]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((Mo=v.value.content)==null?void 0:Mo.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[115]||(t[115]=o=>y({questionColor:o.target.value}))},null,40,Br)])]),e("div",Lr,[t[235]||(t[235]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Eo=v.value.content)==null?void 0:Eo.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[116]||(t[116]=o=>y({accentColor:o.target.value}))},null,40,Dr)])])):L("",!0),e("div",qr,[t[240]||(t[240]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Rr,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[117]||(t[117]=o=>x(r).duplicateElement(x(i).projectId,x(i).currentSlideId,v.value.id))},[...t[237]||(t[237]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),F(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[118]||(t[118]=o=>{x(i).showInteractionEditor=!0,x(i).interactionElementId=v.value.id})},[...t[238]||(t[238]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),F(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[119]||(t[119]=o=>{x(r).deleteElement(x(i).projectId,x(i).currentSlideId,v.value.id),x(i).clearSelection()})},[...t[239]||(t[239]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),F(" Delete Element ",-1)])])])])],64)):(l(),s(H,{key:2},[e("div",Al,[t[127]||(t[127]=e("div",{class:"panel-title"},"Slide Properties",-1)),e("div",zl,[t[125]||(t[125]=e("label",{class:"form-label"},"Title",-1)),ne(e("input",{"onUpdate:modelValue":t[15]||(t[15]=o=>oe.value.title=o),class:"input",onInput:t[16]||(t[16]=o=>He("title",oe.value.title))},null,544),[[me,oe.value.title]])]),e("div",Nl,[t[126]||(t[126]=e("label",{class:"form-label"},"Background",-1)),e("div",_l,[(l(),s(H,null,de(["color","gradient","image"],o=>{var G;return e("button",{key:o,class:ee(["bg-type-btn",(((G=p.value)==null?void 0:G.backgroundType)||"color")===o&&"active"]),onClick:Go=>ae({backgroundType:o})},w(o),11,Tl)}),64))]),(((T=p.value)==null?void 0:T.backgroundType)||"color")==="color"?(l(),s("div",jl,[e("input",{type:"color",value:((se=p.value)==null?void 0:se.background)||"#ffffff",onInput:t[17]||(t[17]=o=>ae({background:o.target.value})),class:"color-input-native"},null,40,Bl),e("input",{value:((he=p.value)==null?void 0:he.background)||"#ffffff",class:"input",onInput:t[18]||(t[18]=o=>ae({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Ll)])):((xe=p.value)==null?void 0:xe.backgroundType)==="gradient"?ne((l(),s("input",{key:1,"onUpdate:modelValue":t[19]||(t[19]=o=>oe.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[20]||(t[20]=o=>ae({backgroundGradient:oe.value.backgroundGradient}))},null,544)),[[me,oe.value.backgroundGradient]]):ne((l(),s("input",{key:2,"onUpdate:modelValue":t[21]||(t[21]=o=>oe.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[22]||(t[22]=o=>ae({backgroundImage:oe.value.backgroundImage}))},null,544)),[[me,oe.value.backgroundImage]])])]),e("div",Dl,[t[128]||(t[128]=e("div",{class:"panel-title"},"Slide Notes",-1)),ne(e("textarea",{"onUpdate:modelValue":t[23]||(t[23]=o=>oe.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[24]||(t[24]=o=>He("notes",oe.value.notes))},null,544),[[me,oe.value.notes]])]),e("div",ql,[t[133]||(t[133]=e("div",{class:"panel-title"},"Transition",-1)),e("select",{value:((Me=p.value)==null?void 0:Me.transition)||"none",class:"select",onChange:t[25]||(t[25]=o=>ae({transition:o.target.value}))},[...t[129]||(t[129]=[Ge('<option value="none" data-v-649d33ce>None</option><option value="fade" data-v-649d33ce>Fade</option><option value="slide" data-v-649d33ce>Slide</option><option value="zoom" data-v-649d33ce>Zoom</option><option value="flip" data-v-649d33ce>Flip</option>',5)])],40,Rl),e("div",Fl,[t[130]||(t[130]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((we=p.value)==null?void 0:we.duration)??0,class:"input",onChange:t[26]||(t[26]=o=>To(o.target.value))},null,40,Ul),t[131]||(t[131]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",Ol,[e("input",{type:"checkbox",checked:!!((Ye=p.value)!=null&&Ye.advanceOnMediaEnd),onChange:t[27]||(t[27]=o=>ae({advanceOnMediaEnd:o.target.checked}))},null,40,Gl),t[132]||(t[132]=F(" Advance when slide media finishes ",-1))]),t[134]||(t[134]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))]),e("div",Vl,[t[140]||(t[140]=e("div",{class:"panel-title"},"Playback",-1)),e("label",Wl,[e("input",{type:"checkbox",checked:m.value.autoPlay,onChange:t[28]||(t[28]=o=>fe({autoPlay:o.target.checked}))},null,40,Hl),t[135]||(t[135]=F(" Autoplay preview and exported presentation ",-1))]),e("label",Ql,[e("input",{type:"checkbox",checked:m.value.loop,onChange:t[29]||(t[29]=o=>fe({loop:o.target.checked}))},null,40,Yl),t[136]||(t[136]=F(" Loop back to the first slide at the end ",-1))]),e("label",Jl,[e("input",{type:"checkbox",checked:m.value.showProgress,onChange:t[30]||(t[30]=o=>fe({showProgress:o.target.checked}))},null,40,Kl),t[137]||(t[137]=F(" Show progress bar in preview ",-1))]),e("label",Xl,[e("input",{type:"checkbox",checked:m.value.showNavControls,onChange:t[31]||(t[31]=o=>fe({showNavControls:o.target.checked}))},null,40,Zl),t[138]||(t[138]=F(" Show previous/next and dot navigation ",-1))]),e("label",ei,[e("input",{type:"checkbox",checked:m.value.allowKeyboardNav,onChange:t[32]||(t[32]=o=>fe({allowKeyboardNav:o.target.checked}))},null,40,ti),t[139]||(t[139]=F(" Allow arrow keys and space bar navigation ",-1))])])],64))])}}},Ur=_e(Fr,[["__scopeId","data-v-649d33ce"]]),Or={class:"editor-toolbar"},Gr={class:"toolbar-group"},Vr={class:"toolbar-group"},Wr=["data-tooltip","onClick"],Hr={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Qr={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Yr={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Jr={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kr={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Xr={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zr={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ed={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},td={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},od={class:"tool-label"},nd={class:"toolbar-group"},ld={class:"toolbar-group"},id={class:"toolbar-group"},sd={__name:"EditorToolbar",emits:["open-ai-project"],setup(h,{emit:i}){const r=i,d=Fe();Ue();const p=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"}];function m(g){d.setActiveTool(g)}return(g,u)=>(l(),s("div",Or,[e("div",Gr,[e("button",{class:ee(["tool-btn",x(d).activeTool==="select"&&"active"]),onClick:u[0]||(u[0]=I=>m("select")),"data-tooltip":"Select (V)"},[...u[7]||(u[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),u[22]||(u[22]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Vr,[(l(),s(H,null,de(p,I=>e("button",{key:I.id,class:ee(["tool-btn",x(d).activeTool===I.id&&"active"]),"data-tooltip":I.tooltip,onClick:Q=>m(I.id)},[I.icon==="text"?(l(),s("svg",Hr,[...u[8]||(u[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):I.icon==="heading"?(l(),s("svg",Qr,[...u[9]||(u[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):I.icon==="image"?(l(),s("svg",Yr,[...u[10]||(u[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):I.icon==="shape"?(l(),s("svg",Jr,[...u[11]||(u[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):I.icon==="button"?(l(),s("svg",Kr,[...u[12]||(u[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):I.icon==="hotspot"?(l(),s("svg",Xr,[...u[13]||(u[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):I.icon==="video"?(l(),s("svg",Zr,[...u[14]||(u[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):I.icon==="audio"?(l(),s("svg",ed,[...u[15]||(u[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):I.icon==="quiz"?(l(),s("svg",td,[...u[16]||(u[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):L("",!0),e("span",od,w(I.label),1)],10,Wr)),64))]),u[23]||(u[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",nd,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:u[1]||(u[1]=I=>r("open-ai-project")),"data-tooltip":"Create a new AI project"},[...u[17]||(u[17]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),u[24]||(u[24]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",ld,[e("button",{class:"tool-btn",onClick:u[2]||(u[2]=I=>x(d).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...u[18]||(u[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:u[3]||(u[3]=I=>x(d).zoomReset())},w(Math.round(x(d).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:u[4]||(u[4]=I=>x(d).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...u[19]||(u[19]=[Ge('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="11" cy="11" r="8" data-v-53bae632></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-53bae632></line><line x1="11" y1="8" x2="11" y2="14" data-v-53bae632></line><line x1="8" y1="11" x2="14" y2="11" data-v-53bae632></line></svg>',1)])])]),u[25]||(u[25]=e("div",{class:"toolbar-divider"},null,-1)),e("div",id,[e("button",{class:ee(["tool-btn",x(d).showGrid&&"active"]),onClick:u[5]||(u[5]=I=>x(d).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...u[20]||(u[20]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:ee(["tool-btn",x(d).snapToGrid&&"active"]),onClick:u[6]||(u[6]=I=>x(d).toggleSnap()),"data-tooltip":"Snap to grid"},[...u[21]||(u[21]=[Ge('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="5" cy="5" r="1" data-v-53bae632></circle><circle cx="12" cy="5" r="1" data-v-53bae632></circle><circle cx="19" cy="5" r="1" data-v-53bae632></circle><circle cx="5" cy="12" r="1" data-v-53bae632></circle><circle cx="12" cy="12" r="1" data-v-53bae632></circle><circle cx="19" cy="12" r="1" data-v-53bae632></circle><circle cx="5" cy="19" r="1" data-v-53bae632></circle><circle cx="12" cy="19" r="1" data-v-53bae632></circle><circle cx="19" cy="19" r="1" data-v-53bae632></circle></svg>',1)])],2)])]))}},ad=_e(sd,[["__scopeId","data-v-53bae632"]]),rd=["value"],dd=["value"],ud=["onMousedown"],cd={key:1,class:"selection-border locked-border"},pd={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(h){const i=h,r=Fe(),d=Ue(),p=Vo("canvasScale",P(1)),m=_(()=>r.projectId),g=_(()=>r.currentSlideId),u=_(()=>r.selectedElementIds.includes(i.element.id)),I=_(()=>i.element.locked),Q=_(()=>i.element.visible!==!1),v=_(()=>{var D,Z;return((Z=(D=i.element.animations)==null?void 0:D[0])==null?void 0:Z.type)||"auto"}),te=[{value:"auto",label:"Auto"},{value:"none",label:"None"},{value:"fade-up",label:"Fade"},{value:"fade-left",label:"Left"},{value:"fade-right",label:"Right"},{value:"zoom-in",label:"Zoom"},{value:"pop-in",label:"Pop"},{value:"stagger-in",label:"Stagger"}];let q=!1,j=0,f=0,a=new Map;function E(D){var J;if(I.value||D.target.classList.contains("resize-handle"))return;const Z=D.ctrlKey||D.metaKey||D.shiftKey;u.value?Z&&r.selectElement(i.element.id,!0):r.selectElement(i.element.id,Z),r.setActiveTool("select"),q=!1,j=D.clientX,f=D.clientY,a.clear();const y=(J=d.getProject(m.value))==null?void 0:J.slides.find(oe=>oe.id===g.value);y&&r.selectedElementIds.forEach(oe=>{const ae=y.elements.find(fe=>fe.id===oe);ae&&!ae.locked&&a.set(oe,{x:ae.x,y:ae.y})}),window.addEventListener("mousemove",R),window.addEventListener("mouseup",le),D.stopPropagation()}function R(D){const Z=(D.clientX-j)/p.value,y=(D.clientY-f)/p.value;!q&&(Math.abs(Z)>3||Math.abs(y)>3)&&(q=!0),q&&a.forEach((J,oe)=>{let ae=J.x+Z,fe=J.y+y;if(r.snapToGrid&&r.gridSize){const M=r.gridSize;ae=Math.round(ae/M)*M,fe=Math.round(fe/M)*M}d.updateElement(m.value,g.value,oe,{x:ae,y:fe})})}function le(D){q||!(D.ctrlKey||D.metaKey||D.shiftKey)&&r.selectedElementIds.length>1&&r.selectElement(i.element.id,!1),q=!1,window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",le)}const re=["n","ne","e","se","s","sw","w","nw"];let z=!1,A="",Y=0,K=0,U=0,ue=0,ie=0,be=0;function ye(D,Z){I.value||(D.stopPropagation(),D.preventDefault(),z=!0,A=Z,Y=D.clientX,K=D.clientY,U=i.element.width,ue=i.element.height,ie=i.element.x,be=i.element.y,window.addEventListener("mousemove",Se),window.addEventListener("mouseup",Ne))}function Se(D){if(!z)return;const Z=p.value,y=(D.clientX-Y)/Z,J=(D.clientY-K)/Z,oe=20;let ae=ie,fe=be,M=U,$=ue;if(A.includes("e")&&(M=Math.max(oe,U+y)),A.includes("s")&&($=Math.max(oe,ue+J)),A.includes("w")){const k=Math.max(oe,U-y);ae=ie+(U-k),M=k}if(A.includes("n")){const k=Math.max(oe,ue-J);fe=be+(ue-k),$=k}if(r.snapToGrid&&r.gridSize){const k=r.gridSize;M=Math.round(M/k)*k,$=Math.round($/k)*k,ae=Math.round(ae/k)*k,fe=Math.round(fe/k)*k}d.updateElement(m.value,g.value,i.element.id,{x:ae,y:fe,width:M,height:$})}function Ne(){z=!1,window.removeEventListener("mousemove",Se),window.removeEventListener("mouseup",Ne)}function Be(){["text","heading"].includes(i.element.type)&&r.setRightPanel("properties")}const $e=_(()=>({position:"absolute",left:`${i.element.x}px`,top:`${i.element.y}px`,width:`${i.element.width}px`,height:`${i.element.height}px`,transform:`rotate(${i.element.rotation||0}deg)`,opacity:i.element.opacity??1,zIndex:i.element.zIndex||1,cursor:I.value?"not-allowed":"move",visibility:Q.value?"visible":"hidden",userSelect:"none"}));function ce(D){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[D]||"auto"}function ve(D){var y;if(I.value)return;if(D==="auto"){d.updateElement(m.value,g.value,i.element.id,{animations:[]});return}const Z=((y=i.element.animations)==null?void 0:y[0])||{};d.updateElement(m.value,g.value,i.element.id,{animations:[{type:D,delay:Math.max(0,Number(Z.delay)||0),duration:Math.max(.1,Number(Z.duration)||.64)}]})}return(D,Z)=>(l(),s("div",{class:ee(["element-wrapper",u.value&&"selected",I.value&&"locked"]),style:pe($e.value),onMousedown:E,onDblclick:Be},[Wo(D.$slots,"default",{},void 0),u.value&&!I.value?(l(),s(H,{key:0},[Z[3]||(Z[3]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"motion-chip",onMousedown:Z[1]||(Z[1]=ke(()=>{},["stop"]))},[Z[2]||(Z[2]=e("span",{class:"motion-chip-label"},"Motion",-1)),e("select",{class:"motion-chip-select",value:v.value,onChange:Z[0]||(Z[0]=y=>ve(y.target.value))},[(l(),s(H,null,de(te,y=>e("option",{key:y.value,value:y.value},w(y.label),9,dd)),64))],40,rd)],32),(l(),s(H,null,de(re,y=>e("div",{key:y,class:ee(["resize-handle",`handle-${y}`]),style:pe({cursor:ce(y)}),onMousedown:ke(J=>ye(J,y),["stop"])},null,46,ud)),64))],64)):L("",!0),u.value&&I.value?(l(),s("div",cd)):L("",!0)],38))}},vd=_e(pd,[["__scopeId","data-v-179c0a50"]]),md=["contenteditable"],at={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(h){const i=h,r=_(()=>i.element.content||{}),d=Fe(),p=Ue(),m=P(!1),g=P(null),u=P("");Re(()=>r.value.text,q=>{m.value||(u.value=q||(i.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function I(){d.selectedElementId===i.element.id&&(m.value=!0,Ho(()=>{if(g.value){g.value.focus();const q=document.createRange();q.selectNodeContents(g.value),q.collapse(!1);const j=window.getSelection();j.removeAllRanges(),j.addRange(q)}}))}function Q(q){}function v(q){m.value&&q.stopPropagation()}function te(){if(m.value=!1,g.value){const q=g.value.innerText;u.value=q,p.updateElement(d.projectId,d.currentSlideId,i.element.id,{content:{...i.element.content,text:q}})}}return(q,j)=>(l(),s("div",{class:"text-element",ref_key:"textRef",ref:g,contenteditable:m.value,onDblclick:I,onBlur:te,onInput:Q,onMousedown:v,style:pe({fontSize:(r.value.fontSize||16)+"px",fontFamily:r.value.fontFamily||"Inter, sans-serif",fontWeight:r.value.fontWeight||"normal",fontStyle:r.value.fontStyle||"normal",textDecoration:r.value.textDecoration||"none",textAlign:r.value.textAlign||"left",color:r.value.color||"#1a1a2e",lineHeight:r.value.lineHeight||1.5,textTransform:r.value.textTransform||"none",letterSpacing:(r.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:m.value?"2px solid var(--primary)":"none",cursor:m.value?"text":"inherit",userSelect:m.value?"text":"none"})},w(u.value),45,md))}},fd=["src","alt"],gd={key:1,class:"image-placeholder"},bd={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},yd={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(h){return(i,r)=>{var d,p,m,g;return l(),s("div",{class:"image-element",style:pe({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((d=h.element.content)==null?void 0:d.borderRadius)||0)+"px",border:`${((p=h.element.content)==null?void 0:p.borderWidth)||0}px solid ${((m=h.element.content)==null?void 0:m.borderColor)||"transparent"}`})},[(g=h.element.content)!=null&&g.src?(l(),s("img",{key:0,src:h.element.content.src,alt:h.element.content.alt||"",style:pe({width:"100%",height:"100%",objectFit:h.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,fd)):(l(),s("div",gd,[(l(),s("svg",bd,[...r[0]||(r[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),r[1]||(r[1]=e("span",null,"Image",-1))]))],4)}}},hd=_e(yd,[["__scopeId","data-v-401e9ff3"]]),xd={class:"shape-element",style:{width:"100%",height:"100%"}},wd=["width","height"],kd=["points","fill","stroke","stroke-width"],Cd={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(h){const i=h,r=_(()=>i.element.content||{}),d=_(()=>{const g=r.value.shapeType||"rectangle",u={width:"100%",height:"100%",background:r.value.fillColor||"#6c47ff",border:`${r.value.borderWidth||0}px solid ${r.value.borderColor||"transparent"}`,opacity:r.value.opacity??1};return g==="circle"?{...u,borderRadius:"50%"}:g==="rectangle"?{...u,borderRadius:(r.value.borderRadius||0)+"px"}:u}),p=_(()=>["triangle","star","arrow","diamond"].includes(r.value.shapeType)),m=_(()=>{const g=i.element.width||150,u=i.element.height||100,I=r.value.shapeType;if(I==="triangle")return`${g/2},0 ${g},${u} 0,${u}`;if(I==="diamond")return`${g/2},0 ${g},${u/2} ${g/2},${u} 0,${u/2}`;if(I==="arrow")return`0,${u*.3} ${g*.6},${u*.3} ${g*.6},0 ${g},${u/2} ${g*.6},${u} ${g*.6},${u*.7} 0,${u*.7}`;if(I==="star"){const Q=g/2,v=u/2,te=Math.min(g,u)/2,q=te*.4;let j="";for(let f=0;f<10;f++){const a=(f*36-90)*Math.PI/180,E=f%2===0?te:q;j+=`${Q+E*Math.cos(a)},${v+E*Math.sin(a)} `}return j.trim()}return""});return(g,u)=>(l(),s("div",xd,[p.value?(l(),s("svg",{key:1,width:h.element.width,height:h.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:m.value,fill:r.value.fillColor||"#6c47ff",stroke:r.value.borderColor||"none","stroke-width":r.value.borderWidth||0},null,8,kd)],8,wd)):(l(),s("div",{key:0,style:pe(d.value)},null,4))]))}},Sd={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(h){const i=h,r=_(()=>i.element.content||{}),d=_(()=>{const p={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},m=p[r.value.variant||"primary"]||p.primary;return{...m,background:r.value.bgColor||m.background,color:r.value.textColor||m.color,border:r.value.borderColor?`1px solid ${r.value.borderColor}`:m.border,borderRadius:(r.value.borderRadius??8)+"px"}});return(p,m)=>(l(),s("div",{class:"button-element",style:pe({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(r.value.fontSize??15)+"px",fontWeight:r.value.fontWeight??600,letterSpacing:(r.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:r.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...d.value})},w(r.value.label||"Button"),5))}},$d={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},Id={class:"popup-header"},Md={class:"popup-body"},Ed={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(h){const i=h,r=_(()=>i.element.content||{}),d=P(!1);function p(m){m.stopPropagation(),d.value=!d.value}return(m,g)=>(l(),s("div",$d,[e("div",{class:"hotspot-btn",style:pe({width:"100%",height:"100%",background:r.value.bgColor||"#6c47ff",borderRadius:(r.value.borderRadius??999)>=999?"50%":(r.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:r.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:ke(p,["stop"])},w(r.value.icon||"?"),5),et(st,{name:"fade"},{default:Je(()=>[d.value?(l(),s("div",{key:0,class:"hotspot-popup",style:pe({background:r.value.popupBgColor||"#ffffff",color:r.value.popupTextColor||"#1a1a2e"})},[e("div",Id,[e("strong",null,w(r.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:g[0]||(g[0]=ke(u=>d.value=!1,["stop"]))},"×")]),e("div",Md,w(r.value.popupContent||"Add your content in the properties panel."),1)],4)):L("",!0)]),_:1})]))}},Pd=_e(Ed,[["__scopeId","data-v-ef5f15f6"]]),Ad={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},zd=["src"],Nd=["src","poster","autoplay","controls","loop","muted"],_d={key:2,class:"video-placeholder"},Td={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},jd={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(h){const i=h,r=_(()=>i.element.content||{}),d=_(()=>{const m=r.value.src||"";return m.includes("youtube")||m.includes("youtu.be")}),p=_(()=>{var g,u;const m=r.value.src||"";if(d.value){const I=(g=m.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:g[1];return I?`https://www.youtube.com/embed/${I}`:""}if(m.includes("vimeo.com")){const I=(u=m.match(/vimeo\.com\/(\d+)/))==null?void 0:u[1];return I?`https://player.vimeo.com/video/${I}`:""}return""});return(m,g)=>(l(),s("div",Ad,[p.value?(l(),s("iframe",{key:0,src:p.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,zd)):r.value.src&&!p.value?(l(),s("video",{key:1,src:r.value.src,poster:r.value.poster,autoplay:r.value.autoplay,controls:r.value.controls!==!1,loop:r.value.loop,muted:r.value.muted,style:pe({width:"100%",height:"100%",objectFit:r.value.objectFit||"cover"})},null,12,Nd)):(l(),s("div",_d,[(l(),s("svg",Td,[...g[0]||(g[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),g[1]||(g[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Bd=_e(jd,[["__scopeId","data-v-dfea1a16"]]),Ld=["stroke"],Dd=["src","controls","autoplay","loop"],qd={key:1,style:{"font-size":"11px",color:"#aaa"}},Rd={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(h){return(i,r)=>{var d,p,m,g,u,I,Q,v,te;return l(),s("div",{class:"audio-element",style:pe({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((d=h.element.content)==null?void 0:d.bgColor)||"#ede7ff",border:`1px solid ${((p=h.element.content)==null?void 0:p.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(l(),s("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((m=h.element.content)==null?void 0:m.accentColor)||"#6c47ff","stroke-width":"2"},[...r[1]||(r[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Ld)),e("span",{style:pe({fontSize:"13px",color:((g=h.element.content)==null?void 0:g.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},w(((u=h.element.content)==null?void 0:u.label)||"Audio Player"),5),(I=h.element.content)!=null&&I.src?(l(),s("audio",{key:0,src:h.element.content.src,controls:((Q=h.element.content)==null?void 0:Q.controls)!==!1,autoplay:(v=h.element.content)==null?void 0:v.autoplay,loop:(te=h.element.content)==null?void 0:te.loop,style:{height:"28px","max-width":"180px"},onMousedown:r[0]||(r[0]=ke(()=>{},["stop"]))},null,40,Dd)):(l(),s("span",qd,"No source"))],4)}}},Fd={class:"quiz-options"},Ud=["onClick"],Od={class:"opt-letter"},Gd={class:"opt-text"},Vd={key:0},Wd={class:"quiz-actions"},Hd=["disabled"],Qd={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(h){const i=h,r=_(()=>i.element.content||{}),d=P(null),p=P(!1);function m(Q){p.value||(d.value=Q)}function g(){d.value!==null&&(p.value=!0)}function u(){d.value=null,p.value=!1}const I=_(()=>p.value&&d.value===(r.value.correctIndex??0));return(Q,v)=>(l(),s("div",{class:"quiz-element",style:pe({width:"100%",height:"100%",background:r.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":r.value.accentColor||"#6c47ff"})},[e("p",{style:pe({fontSize:"15px",fontWeight:600,color:r.value.questionColor||"#1a1a2e",lineHeight:1.4})},w(r.value.question||"Question text…"),5),e("div",Fd,[(l(!0),s(H,null,de(r.value.options||[],(te,q)=>(l(),s("div",{key:q,class:ee(["quiz-opt",d.value===q&&"selected",p.value&&q===r.value.correctIndex&&"correct",p.value&&d.value===q&&q!==r.value.correctIndex&&"wrong"]),onClick:j=>m(q)},[e("span",Od,w(String.fromCharCode(65+q)),1),e("span",Gd,w(te),1)],10,Ud))),128))]),p.value?(l(),s("div",{key:0,class:ee(["quiz-feedback",I.value?"correct":"wrong"])},[F(w(I.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!I.value&&r.value.explanation?(l(),s("span",Vd,w(r.value.explanation),1)):L("",!0)],2)):L("",!0),e("div",Wd,[p.value?(l(),s("button",{key:1,class:"quiz-btn secondary",onClick:u},"Try Again")):(l(),s("button",{key:0,class:"quiz-btn primary",disabled:d.value===null,onClick:g},"Submit",8,Hd))])],4))}},Yd=_e(Qd,[["__scopeId","data-v-ca2bd187"]]),Jd={key:0,class:"canvas-empty"},Kd={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},Xd=["value"],Zd={key:1,class:"drop-hint"},eu={class:"canvas-info-bar"},tu=["disabled"],ou={class:"slide-index"},nu=["disabled"],lu={key:0},lt=960,it=540,iu={__name:"EditorCanvas",setup(h){const i=Fe(),r=Ue(),d=P(null),p=P(null),m=P(1);Yo("canvasScale",m);const g=_(()=>r.getProject(i.projectId)),u=_(()=>{var b,B;return(B=(b=g.value)==null?void 0:b.slides)==null?void 0:B.find(V=>V.id===i.currentSlideId)}),I=_(()=>{var b;return[...((b=g.value)==null?void 0:b.slides)||[]].sort((B,V)=>B.order-V.order)}),Q=_(()=>I.value.findIndex(b=>b.id===i.currentSlideId)),v=_(()=>{var b;return{autoPlay:!1,motionPresets:[],...((b=g.value)==null?void 0:b.settings)||{}}}),te=_(()=>(Array.isArray(v.value.motionPresets)?v.value.motionPresets:[]).filter(b=>b.scope==="group")),q=_(()=>{const b=new Set(i.selectedElementIds);return R.value.filter(B=>b.has(B.id))}),j=P(""),f=_(()=>u.value?u.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:v.value.autoPlay&&Number(u.value.duration||0)>0?{label:`Auto ${Number(u.value.duration).toFixed(Number(u.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function a(){const b=te.value.find(V=>V.id===j.value);if(!b||!q.value.length)return;[...q.value].sort((V,X)=>(V.y||0)!==(X.y||0)?(V.y||0)-(X.y||0):(V.x||0)-(X.x||0)).forEach((V,X)=>{if(b.type==="auto"){r.updateElement(i.projectId,i.currentSlideId,V.id,{animations:[]});return}r.updateElement(i.projectId,i.currentSlideId,V.id,{animations:[{type:b.type,delay:Math.max(0,Number(b.delay)||0)+X*Math.max(0,Number(b.stepDelay)||0),duration:Math.max(.1,Number(b.duration)||.72)}]})}),r.updateProject(i.projectId,{settings:{...v.value,motionPresets:(v.value.motionPresets||[]).map(V=>V.id===b.id?{...V,usageCount:Math.max(0,Number(V.usageCount||0))+1,lastUsedAt:Date.now()}:V)}})}function E(){if(!te.value.length){j.value="";return}te.value.some(b=>b.id===j.value)||(j.value=te.value[0].id)}const R=_(()=>{var b;return[...((b=u.value)==null?void 0:b.elements)||[]].sort((B,V)=>(B.zIndex||0)-(V.zIndex||0))}),le=_(()=>{const b=u.value;return b?b.backgroundType==="gradient"&&b.backgroundGradient?{background:b.backgroundGradient}:b.backgroundType==="image"&&b.backgroundImage?{backgroundImage:`url(${b.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:b.background||"#fff"}:{background:"#fff"}}),re=_(()=>`scale(${i.zoomLevel})`);function z(){if(!d.value)return;const{clientWidth:b,clientHeight:B}=d.value,V=(b-80)/lt,X=(B-80)/it;m.value=Math.min(V,X)}let A=null;Ao(()=>{z(),A=new ResizeObserver(z),d.value&&A.observe(d.value),E()}),zo(()=>A==null?void 0:A.disconnect()),Re(te,()=>{E()},{deep:!0,immediate:!0});const Y=P({x:0,y:0}),K=P({x:0,y:0}),U=P(!1),ue=P(!1),ie=_(()=>{if(!U.value)return null;const b=Math.min(Y.value.x,K.value.x),B=Math.min(Y.value.y,K.value.y),V=Math.abs(K.value.x-Y.value.x),X=Math.abs(K.value.y-Y.value.y);return{x:b,y:B,width:V,height:X}});function be(b){!U.value&&(b.target===p.value||b.target===b.currentTarget)&&i.clearSelection()}function ye(b){return b?Array.from(b.files||[]).some(B=>B.type.startsWith("image/")):!1}function Se(b,B,V){if(!b||!b.type.startsWith("image/"))return;const X=new FileReader;X.onload=()=>{const Ae=String(X.result||"");if(!Ae)return;const Te=new Image;Te.onload=()=>{const Oe=p.value.getBoundingClientRect(),Le=(B-Oe.left)/i.zoomLevel,C=(V-Oe.top)/i.zoomLevel,W=Math.min(420/Te.width,280/Te.height,1),O=Math.max(120,Math.round(Te.width*W)),ge=Math.max(80,Math.round(Te.height*W)),Ce=Math.max(0,Math.min(lt-O,Math.round(Le-O/2))),ze=Math.max(0,Math.min(it-ge,Math.round(C-ge/2))),S=r.addElement(i.projectId,i.currentSlideId,"image",{x:Ce,y:ze,width:O,height:ge,content:{src:Ae,alt:b.name,objectFit:"cover"}});S&&(i.selectElement(S.id),i.setActiveTool("select"),i.setRightPanel("properties"))},Te.src=Ae},X.readAsDataURL(b)}function Ne(b){ye(b.dataTransfer)&&(b.preventDefault(),b.dataTransfer.dropEffect="copy",ue.value=!0)}function Be(b){var B;(B=b.currentTarget)!=null&&B.contains(b.relatedTarget)||(ue.value=!1)}function $e(b){if(!ye(b.dataTransfer))return;b.preventDefault(),ue.value=!1;const B=Array.from(b.dataTransfer.files||[]).find(V=>V.type.startsWith("image/"));B&&Se(B,b.clientX,b.clientY)}function ce(b){const B=i.activeTool;if(b.target!==p.value&&b.target!==b.currentTarget)return;b.preventDefault(),b.stopPropagation();const V=p.value.getBoundingClientRect(),X=(b.clientX-V.left)/i.zoomLevel,Ae=(b.clientY-V.top)/i.zoomLevel;if(B==="select"){U.value=!0,Y.value={x:X,y:Ae},K.value={x:X,y:Ae};const Le=n=>{K.value={x:(n.clientX-V.left)/i.zoomLevel,y:(n.clientY-V.top)/i.zoomLevel}},C=()=>{window.removeEventListener("mousemove",Le),window.removeEventListener("mouseup",C);const n=ie.value;if(n&&(n.width>2||n.height>2)){const N=R.value.filter(W=>{const O=W.x,ge=W.y,Ce=W.width||100,ze=W.height||100;return O<n.x+n.width&&O+Ce>n.x&&ge<n.y+n.height&&ge+ze>n.y}).map(W=>W.id);N.length>0?i.setSelection(N):i.clearSelection()}else i.clearSelection();setTimeout(()=>{U.value=!1},0)};window.addEventListener("mousemove",Le),window.addEventListener("mouseup",C);return}const Te=Le=>i.snapToGrid?Math.round(Le/i.gridSize)*i.gridSize:Le,Oe=r.addElement(i.projectId,i.currentSlideId,B,{x:Te(X-75),y:Te(Ae-40)});Oe&&(i.selectElement(Oe.id),i.setActiveTool("select"),i.setRightPanel("properties"))}const ve=_(()=>{if(!i.showGrid)return{};const b=i.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${b}px ${b}px`}}),D={text:at,heading:at,image:hd,shape:Cd,button:Sd,hotspot:Pd,video:Bd,audio:Rd,quiz:Yd,divider:"div"};function Z(b){return D[b]||at}function y(b){var B,V;return b.type!=="divider"?{}:{borderTop:`${((B=b.content)==null?void 0:B.thickness)||2}px solid ${((V=b.content)==null?void 0:V.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const J=P({show:!1,x:0,y:0,elId:null});function oe(b,B){b.preventDefault(),J.value={show:!0,x:b.clientX,y:b.clientY,elId:B},i.selectElement(B),setTimeout(()=>window.addEventListener("click",ae,{once:!0}),0)}function ae(){J.value.show=!1}function fe(){if(J.value.elId){const b=r.duplicateElement(i.projectId,i.currentSlideId,J.value.elId);b&&i.selectElement(b.id)}ae()}function M(){J.value.elId&&(r.deleteElement(i.projectId,i.currentSlideId,J.value.elId),i.clearSelection()),ae()}function $(){J.value.elId&&r.reorderElement(i.projectId,i.currentSlideId,J.value.elId,"up"),ae()}function k(){J.value.elId&&r.reorderElement(i.projectId,i.currentSlideId,J.value.elId,"down"),ae()}function Ee(){const b=Q.value,B=r.addSlide(i.projectId,b);B&&i.setCurrentSlide(B.id)}function Pe(){const b=Q.value;b>0&&i.setCurrentSlide(I.value[b-1].id)}function Ie(){const b=Q.value;b<I.value.length-1&&i.setCurrentSlide(I.value[b+1].id)}return(b,B)=>{var V;return l(),s("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:d},[u.value?(l(),s(H,{key:1},[e("div",{class:"canvas-zoom-wrapper",style:pe({transform:re.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:p,class:"slide-canvas",style:pe({width:lt+"px",height:it+"px",...le.value,...ve.value}),onClick:be,onMousedown:ce,onDragover:Ne,onDragleave:Be,onDrop:$e,onContextmenu:B[2]||(B[2]=ke(()=>{},["prevent"]))},[x(i).multiSelection&&te.value.length?(l(),s("div",{key:0,class:"selection-preset-chip",onMousedown:B[1]||(B[1]=ke(()=>{},["stop"]))},[B[6]||(B[6]=e("span",{class:"selection-preset-label"},"Sequence",-1)),ne(e("select",{"onUpdate:modelValue":B[0]||(B[0]=X=>j.value=X),class:"selection-preset-select"},[(l(!0),s(H,null,de(te.value,X=>(l(),s("option",{key:X.id,value:X.id},w(X.name),9,Xd))),128))],512),[[ot,j.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:ke(a,["stop"])},"Apply")],32)):L("",!0),(l(!0),s(H,null,de(R.value,X=>(l(),je(vd,{key:X.id,element:X,onContextmenu:ke(Ae=>oe(Ae,X.id),["stop"])},{default:Je(()=>[(l(),je(Qo(Z(X.type)),{element:X,style:pe(X.type==="divider"?y(X):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),x(i).activeTool!=="select"||ue.value?(l(),s("div",Zd,w(ue.value?"Drop image to insert it on this slide":`Click anywhere to add ${x(i).activeTool}`),1)):L("",!0),U.value&&ie.value?(l(),s("div",{key:2,class:"selection-marquee",style:pe({left:ie.value.x+"px",top:ie.value.y+"px",width:ie.value.width+"px",height:ie.value.height+"px"})},null,4)):L("",!0)],36)],4),e("div",eu,[e("button",{class:"bar-btn",onClick:Ee},"Add page"),e("button",{class:"bar-btn icon",onClick:Pe,disabled:Q.value<=0},"◀",8,tu),e("span",ou,w(Q.value+1)+" / "+w(I.value.length),1),e("button",{class:"bar-btn icon",onClick:Ie,disabled:Q.value>=I.value.length-1},"▶",8,nu),e("span",null,w(lt)+" × "+w(it)+"px"),B[7]||(B[7]=e("span",null,"·",-1)),e("span",null,w(((V=u.value.elements)==null?void 0:V.length)||0)+" elements",1),B[8]||(B[8]=e("span",null,"·",-1)),e("span",{class:ee(["playback-badge",`playback-badge-${f.value.tone}`])},w(f.value.label),3),x(i).hasSelection?(l(),s("span",lu,"· "+w(x(i).selectedElementIds.length)+" selected",1)):L("",!0),e("button",{class:"bar-btn ai",onClick:B[3]||(B[3]=X=>x(i).setRightPanel("ai"))},"AI")])],64)):(l(),s("div",Jd,[(l(),s("svg",Kd,[...B[4]||(B[4]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),B[5]||(B[5]=e("p",null,"Select a slide to start editing",-1))])),(l(),je(No,{to:"body"},[J.value.show?(l(),s("div",{key:0,class:"ctx-menu",style:pe({left:J.value.x+"px",top:J.value.y+"px"})},[e("button",{class:"ctx-item",onClick:fe},"Duplicate"),e("button",{class:"ctx-item",onClick:$},"Bring Forward"),e("button",{class:"ctx-item",onClick:k},"Send Backward"),B[9]||(B[9]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:M},"Delete")],4)):L("",!0)]))],512)}}},su=_e(iu,[["__scopeId","data-v-2428b76e"]]),au={class:"ai-panel"},ru={class:"ai-mode-tabs"},du=["onClick"],uu={class:"ai-content"},cu={class:"form-group"},pu={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},vu={key:0,class:"form-group"},mu={key:1,class:"form-group"},fu={class:"form-group"},gu={class:"form-group"},bu={class:"prompt-label-row"},yu={key:1,class:"prompt-auto-badge"},hu={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},xu=["disabled"],wu={key:0,class:"spinner"},ku={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Cu={key:3,class:"creative-options-wrap"},Su={class:"result-header"},$u={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Iu={key:1,class:"creative-options-list"},Mu={class:"creative-title"},Eu={class:"creative-angle"},Pu=["onClick"],Au={class:"form-group"},zu={class:"quiz-config-row"},Nu={class:"form-group",style:{flex:"1"}},_u={class:"form-group",style:{flex:"1"}},Tu={class:"form-group"},ju={class:"qtype-btns"},Bu=["onClick"],Lu={class:"qtype-icon"},Du={class:"form-group"},qu={class:"form-group"},Ru={class:"prompt-label-row"},Fu={key:1,class:"prompt-auto-badge"},Uu=["disabled"],Ou={key:0,class:"spinner"},Gu={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Vu={key:0,class:"quiz-results"},Wu={class:"quiz-results-header"},Hu={class:"form-label"},Qu={class:"quiz-header-actions"},Yu={class:"regen-row"},Ju=["disabled"],Ku={key:0,class:"spinner spinner-sm"},Xu={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},Zu=["disabled"],ec={class:"quiz-card-header"},tc={class:"quiz-card-check"},oc=["onUpdate:modelValue"],nc={class:"q-num"},lc={class:"q-badges"},ic={class:"badge type-badge"},sc={class:"q-question"},ac={class:"q-options"},rc={class:"q-option-letter"},dc={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},uc={key:0,class:"q-explanation"},cc=["disabled"],pc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vc=["disabled"],mc={key:0,class:"spinner"},fc={key:0,class:"selected-text-preview"},gc={class:"text-preview"},bc={key:1,class:"ai-hint"},yc={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},hc=["disabled"],xc={key:0,class:"spinner"},wc={key:0,class:"selected-text-preview"},kc={class:"text-preview"},Cc={key:1,class:"ai-hint"},Sc={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},$c=["disabled"],Ic={key:0,class:"spinner"},Mc={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Ec={class:"result-header"},Pc={class:"result-actions"},Ac=["disabled"],zc={class:"textarea result-display"},Nc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_c=["disabled"],Tc={key:0,class:"spinner"},jc={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},Bc={class:"textarea result-display",style:{color:"var(--color-primary)"}},Lc={key:6,class:"ai-settings"},Dc={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},qc=["value"],Rc={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},Fc=["value"],Uc={key:0,class:"demo-notice"},Oc={key:7,class:"result-area"},Gc={class:"result-header"},Vc={class:"result-pre"},Wc={class:"result-actions"},Hc=["disabled"],Qc={key:8,class:"ai-error"},Yc={__name:"AIAssistant",setup(h){const i=Xo(),r=Fe(),d=Ue(),p=P("generate"),m=P(""),g=P(""),u=P("");Re(p,()=>{u.value=""});const I=P(4),Q=P("general"),v=P("Spanish"),te=P(""),q=P(""),j=P(""),f=P(!1),a=P("single"),E=P(5),R=P("slide"),le=P([]),re=P(""),z=_(()=>{const C=g.value.trim()||"[your topic]";if(a.value==="deck"){let W=`Create a complete ${E.value}-slide learning deck about "${C}".`;return q.value.trim()&&(W+=`
Additional context: ${q.value.trim()}`),W+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,W+=`
Make each slide distinct, logically sequenced, and specific to "${C}".`,W}let N=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[Q.value]||"educational slide"} about "${C}".`;return q.value.trim()&&(N+=`
Additional context: ${q.value.trim()}`),N+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${C}" — no generic placeholders.`,N});Re(z,C=>{f.value||(j.value=C)},{immediate:!0});function A(){j.value=z.value,f.value=!1}const Y=P(""),K=P("intermediate"),U=P("multiple-choice"),ue=P(""),ie=P([]),be=P(""),ye=P(!1),Se=_(()=>{const C=Y.value.trim()||"[your topic]",n={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},N={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let W=`Generate ${I.value} ${n[K.value]} ${N[U.value]} quiz questions about "${C}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return ue.value.trim()&&(W+=`
Learning objective: ${ue.value.trim()}`),W});Re(Se,C=>{ye.value||(be.value=C)},{immediate:!0});function Ne(){be.value=Se.value,ye.value=!1}const Be=_(()=>d.getProject(r.projectId)),$e=_(()=>{var C,n;return(n=(C=Be.value)==null?void 0:C.slides)==null?void 0:n.find(N=>N.id===r.currentSlideId)}),ce=_(()=>{var C,n;return r.selectedElementId?(n=(C=$e.value)==null?void 0:C.elements)==null?void 0:n.find(N=>N.id===r.selectedElementId):null});async function ve(){if(!g.value.trim()&&!j.value.trim())return;if(u.value="",le.value=[],re.value="",a.value==="deck"){const n=await i.generateSlideDeck(g.value,E.value,{objective:q.value,customPrompt:j.value});if(n!=null&&n.length){const N=n.map(W=>D(W));u.value=JSON.stringify({slides:N},null,2),oe(N,{replaceGenerated:!0})}return}if(R.value==="options"){await M();return}const C=await i.generateSlideContent(g.value,Q.value,q.value,j.value);if(C){const n=D(C);u.value=JSON.stringify(n,null,2),ae(n,{replaceGenerated:!0})}}function D(C){const n=C&&typeof C=="object"?C:{},W=(Array.isArray(n.bullets)?n.bullets:typeof n.bullets=="string"?n.bullets.split(`
`):[]).map(O=>String(O||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(n.title||g.value||"Untitled Slide").trim(),subtitle:String(n.subtitle||"").trim(),bullets:W,callout:String(n.callout||"").trim()}}function Z(C,n){var O,ge,Ce;const N=(ge=(O=d.getProject(C))==null?void 0:O.slides)==null?void 0:ge.find(ze=>ze.id===n);if(!((Ce=N==null?void 0:N.elements)!=null&&Ce.length))return;N.elements.filter(ze=>{var S;return((S=ze.meta)==null?void 0:S.source)==="ai-content"}).map(ze=>ze.id).forEach(ze=>{d.deleteElement(C,n,ze)})}function y(C,n,N,W){return d.addElement(C,n,N,{...W,meta:{...W.meta||{},source:"ai-content"}})}function J(C,n,N,{replaceGenerated:W=!1}={}){var O;if(!(!C||!n)){if(W&&Z(C,n),N.title&&(d.updateSlide(C,n,{title:N.title}),y(C,n,"heading",{x:60,y:40,width:840,height:80,content:{text:N.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),N.subtitle&&y(C,n,"text",{x:60,y:130,width:840,height:50,content:{text:N.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(O=N.bullets)!=null&&O.length){const ge=N.bullets.map(Ce=>`• ${Ce}`).join(`
`);y(C,n,"text",{x:60,y:N.subtitle?200:150,width:840,height:200,content:{text:ge,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}N.callout&&(y(C,n,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),y(C,n,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${N.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function oe(C,{replaceGenerated:n=!1}={}){if(!r.currentSlideId)return;const N=r.projectId;if(!N||!Array.isArray(C)||!C.length)return;C.map(O=>D(O)).forEach(O=>{const ge=d.addSlide(N);ge&&J(N,ge.id,O,{replaceGenerated:n})})}function ae(C=null,{replaceGenerated:n=!1}={}){if(!r.currentSlideId)return;let N=C;if(!N){if(!u.value)return;try{N=JSON.parse(u.value)}catch(Ce){console.warn("Could not parse AI content:",Ce);return}}const W=D(N),O=r.projectId,ge=r.currentSlideId;!O||!ge||J(O,ge,W,{replaceGenerated:n})}function fe(){if(u.value){if(a.value==="deck"){try{const C=JSON.parse(u.value),n=Array.isArray(C)?C:C==null?void 0:C.slides;if(!Array.isArray(n)||!n.length)return;oe(n,{replaceGenerated:!0})}catch{return}return}ae()}}async function M(){const C=g.value.trim()||"[your topic]",n=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${Q.value}" slide about "${C}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,N=await i.generate(n,{type:"creativeOptions",topic:C,slideType:Q.value});if(N)try{const W=JSON.parse(N.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(W))throw new Error("Options must be an array");le.value=W.slice(0,3).map((O,ge)=>({title:String((O==null?void 0:O.title)||`Option ${ge+1}`),angle:String((O==null?void 0:O.angle)||""),prompt:String((O==null?void 0:O.prompt)||"")})).filter(O=>O.prompt.trim()),le.value.length||(re.value="No usable creative options were returned. Try generating again.")}catch{re.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function $(C){C!=null&&C.prompt&&(j.value=C.prompt,f.value=!0,R.value="slide",await ve())}async function k(C=!1){if(!Y.value.trim()&&!be.value.trim())return;C||(ie.value=[]);const n=await i.generateQuiz(Y.value,I.value,{difficulty:K.value,questionType:U.value,objective:ue.value,customPrompt:be.value});if(n)if(C){const N=new Set(ie.value.map(O=>O.question)),W=n.filter(O=>!N.has(O.question)).map(O=>({...O,_selected:!0}));ie.value=[...ie.value,...W]}else ie.value=n.map(N=>({...N,_selected:!0}))}async function Ee(){const C=ie.value.filter(N=>N._selected);if(!C.length)return;const n=r.projectId;C.forEach((N,W)=>{const O=d.addSlide(n);O&&(d.addElement(n,O.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:N.question,options:N.options,correctIndex:N.correctIndex,explanation:N.explanation||""}}),d.updateSlide(n,O.id,{title:`Q${W+1}: ${N.question.slice(0,40)}…`}))}),ie.value=[]}function Pe(C){ie.value.forEach(n=>n._selected=C)}async function Ie(){if(!te.value.trim())return;const C=await i.generateVoiceoverScript(te.value);C&&(u.value=C)}async function b(){var N,W;const C=(W=(N=ce.value)==null?void 0:N.content)==null?void 0:W.text;if(!C)return;const n=await i.generateTranslation(C,v.value);n&&(u.value=n)}async function B(){!u.value||!ce.value||d.updateElement(r.projectId,r.currentSlideId,ce.value.id,{content:{...ce.value.content,text:u.value}})}const V=P(""),X=P(!1);async function Ae(){if(V.value.trim()){X.value=!0,u.value="Optimizing prompt...";try{let C=V.value;const n=await i.generateImagePrompt(V.value);n&&(C=n.replace(/```(json)?\n?/g,"").trim()),u.value="Painting image... this takes about 10-20 seconds. Please wait.";const N=Math.floor(Math.random()*1e6),W=`https://image.pollinations.ai/prompt/${encodeURIComponent(C)}?width=600&height=400&nologo=true&seed=${N}`;await new Promise((O,ge)=>{const Ce=new Image;Ce.onload=O,Ce.onerror=ge,Ce.src=W}),d.addElement(r.projectId,r.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:W,objectFit:"cover"}}),u.value="Image added to slide!"}catch{u.value="Failed to generate image. Try a different prompt."}finally{X.value=!1}}}async function Te(){var n,N;if(!((N=(n=ce.value)==null?void 0:n.content)!=null&&N.text))return;const C=await i.improveText(ce.value.content.text,m.value||"Make it clearer and more engaging");C&&(u.value=C)}async function Oe(){!u.value||!ce.value||d.updateElement(r.projectId,r.currentSlideId,ce.value.id,{content:{...ce.value.content,text:u.value}})}async function Le(){if(!m.value.trim())return;const C=await i.generate(m.value);C&&(u.value=C)}return(C,n)=>{var N,W,O,ge,Ce,ze;return l(),s("div",au,[e("div",ru,[(l(),s(H,null,de([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],S=>e("button",{key:S.id,class:ee(["ai-mode-btn",p.value===S.id&&"active"]),onClick:De=>p.value=S.id},w(S.label),11,du)),64))]),e("div",uu,[p.value==="generate"?(l(),s(H,{key:0},[e("div",cu,[n[34]||(n[34]=e("label",{class:"form-label"},[F("Topic / Subject "),e("span",{class:"required"},"*")],-1)),ne(e("input",{"onUpdate:modelValue":n[0]||(n[0]=S=>g.value=S),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:Po(ve,["enter"])},null,544),[[me,g.value]])]),e("div",pu,[e("button",{class:ee(["output-mode-btn",a.value==="single"&&"active"]),onClick:n[1]||(n[1]=S=>a.value="single")},"Single Slide",2),e("button",{class:ee(["output-mode-btn",a.value==="deck"&&"active"]),onClick:n[2]||(n[2]=S=>a.value="deck")},"Slide Deck",2)]),a.value==="single"?(l(),s("div",vu,[n[36]||(n[36]=e("label",{class:"form-label"},"Slide Type",-1)),ne(e("select",{"onUpdate:modelValue":n[3]||(n[3]=S=>Q.value=S),class:"select"},[...n[35]||(n[35]=[Ge('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[ot,Q.value]])])):(l(),s("div",mu,[n[37]||(n[37]=e("label",{class:"form-label"},"Number of Slides",-1)),ne(e("input",{"onUpdate:modelValue":n[4]||(n[4]=S=>E.value=S),class:"input",type:"number",min:"1",max:"20"},null,512),[[me,E.value,void 0,{number:!0}]]),n[38]||(n[38]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",fu,[n[39]||(n[39]=e("label",{class:"form-label"},[F("Description "),e("span",{class:"optional"},"(optional)")],-1)),ne(e("textarea",{"onUpdate:modelValue":n[5]||(n[5]=S=>q.value=S),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[me,q.value]])]),e("div",gu,[e("div",bu,[n[41]||(n[41]=e("label",{class:"form-label"},"AI Prompt",-1)),f.value?(l(),s("button",{key:0,class:"prompt-reset-btn",onClick:A,title:"Reset to auto-generated prompt"},[...n[40]||(n[40]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),F(" Reset ",-1)])])):(l(),s("span",yu,"auto"))]),ne(e("textarea",{"onUpdate:modelValue":n[6]||(n[6]=S=>j.value=S),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:n[7]||(n[7]=S=>f.value=!0),spellcheck:"false"},null,544),[[me,j.value]]),n[42]||(n[42]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),a.value==="single"?(l(),s("div",hu,[e("button",{class:ee(["output-mode-btn",R.value==="slide"&&"active"]),onClick:n[8]||(n[8]=S=>R.value="slide")},"Show on Slide",2),e("button",{class:ee(["output-mode-btn",R.value==="options"&&"active"]),onClick:n[9]||(n[9]=S=>R.value="options")},"Creative Options",2)])):L("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(i).isGenerating||!g.value.trim()&&!j.value.trim()||a.value==="deck"&&(!E.value||E.value<1||E.value>20),onClick:ve},[x(i).isGenerating?(l(),s("span",wu)):(l(),s("svg",ku,[...n[43]||(n[43]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),F(" "+w(x(i).isGenerating?"Generating…":a.value==="deck"?u.value?`Regenerate ${E.value} Slides`:`Generate ${E.value} Slides`:R.value==="slide"?u.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,xu),a.value==="single"&&R.value==="options"&&(le.value.length||re.value)?(l(),s("div",Cu,[e("div",Su,[n[44]||(n[44]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[10]||(n[10]=S=>{le.value=[],re.value=""})},"Clear")]),re.value?(l(),s("div",$u,[n[45]||(n[45]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),F(" "+w(re.value),1)])):(l(),s("div",Iu,[(l(!0),s(H,null,de(le.value,(S,De)=>(l(),s("article",{key:De,class:"creative-option-card"},[e("h4",Mu,w(S.title),1),e("p",Eu,w(S.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:We=>$(S)},"Use This Option",8,Pu)]))),128))]))])):L("",!0)],64)):p.value==="quiz"?(l(),s(H,{key:1},[e("div",Au,[n[46]||(n[46]=e("label",{class:"form-label"},[F("Quiz Topic "),e("span",{class:"required"},"*")],-1)),ne(e("input",{"onUpdate:modelValue":n[11]||(n[11]=S=>Y.value=S),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:Po(k,["enter"])},null,544),[[me,Y.value]])]),e("div",zu,[e("div",Nu,[n[48]||(n[48]=e("label",{class:"form-label"},"Questions",-1)),ne(e("select",{"onUpdate:modelValue":n[12]||(n[12]=S=>I.value=S),class:"select"},[...n[47]||(n[47]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[ot,I.value,void 0,{number:!0}]])]),e("div",_u,[n[50]||(n[50]=e("label",{class:"form-label"},"Difficulty",-1)),ne(e("select",{"onUpdate:modelValue":n[13]||(n[13]=S=>K.value=S),class:"select"},[...n[49]||(n[49]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[ot,K.value]])])]),e("div",Tu,[n[51]||(n[51]=e("label",{class:"form-label"},"Question Type",-1)),e("div",ju,[(l(),s(H,null,de([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],S=>e("button",{key:S.id,class:ee(["qtype-btn",U.value===S.id&&"active"]),onClick:De=>U.value=S.id},[e("span",Lu,w(S.icon),1),e("span",null,w(S.label),1)],10,Bu)),64))])]),e("div",Du,[n[52]||(n[52]=e("label",{class:"form-label"},[F("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),ne(e("input",{"onUpdate:modelValue":n[14]||(n[14]=S=>ue.value=S),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[me,ue.value]])]),e("div",qu,[e("div",Ru,[n[54]||(n[54]=e("label",{class:"form-label"},"AI Prompt",-1)),ye.value?(l(),s("button",{key:0,class:"prompt-reset-btn",onClick:Ne,title:"Reset to auto-generated prompt"},[...n[53]||(n[53]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),F(" Reset ",-1)])])):(l(),s("span",Fu,"auto"))]),ne(e("textarea",{"onUpdate:modelValue":n[15]||(n[15]=S=>be.value=S),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:n[16]||(n[16]=S=>ye.value=!0),spellcheck:"false"},null,544),[[me,be.value]]),n[55]||(n[55]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(i).isGenerating||!Y.value.trim()&&!be.value.trim(),onClick:n[17]||(n[17]=S=>k(!1))},[x(i).isGenerating?(l(),s("span",Ou)):(l(),s("svg",Gu,[...n[56]||(n[56]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),F(" "+w(x(i).isGenerating?"Generating…":`Generate ${I.value} Questions`),1)],8,Uu),ie.value.length?(l(),s("div",Vu,[e("div",Wu,[e("span",Hu,w(ie.value.length)+" Questions",1),e("div",Qu,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[18]||(n[18]=S=>Pe(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:n[19]||(n[19]=S=>Pe(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:n[20]||(n[20]=S=>ie.value=[])},"Clear")])]),e("div",Yu,[e("button",{class:"btn btn-secondary regen-btn",disabled:x(i).isGenerating,onClick:n[21]||(n[21]=S=>k(!1)),title:"Replace all questions with a new set"},[x(i).isGenerating?(l(),s("span",Ku)):(l(),s("svg",Xu,[...n[57]||(n[57]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),n[58]||(n[58]=F(" Regenerate ",-1))],8,Ju),e("button",{class:"btn btn-ghost regen-btn",disabled:x(i).isGenerating,onClick:n[22]||(n[22]=S=>k(!0)),title:"Generate more and append to current list"},[...n[59]||(n[59]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),F(" Add More ",-1)])],8,Zu)]),(l(!0),s(H,null,de(ie.value,(S,De)=>(l(),s("div",{key:De,class:ee(["quiz-card",{deselected:!S._selected}])},[e("div",ec,[e("label",tc,[ne(e("input",{type:"checkbox","onUpdate:modelValue":We=>S._selected=We},null,8,oc),[[rt,S._selected]]),e("span",nc,"Q"+w(De+1),1)]),e("div",lc,[e("span",{class:ee(["badge difficulty-badge",S.difficulty])},w(S.difficulty),3),e("span",ic,w(S.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",sc,w(S.question),1),e("div",ac,[(l(!0),s(H,null,de(S.options,(We,He)=>(l(),s("div",{key:He,class:ee(["q-option",He===S.correctIndex&&"correct"])},[e("span",rc,w(["A","B","C","D"][He]),1),e("span",null,w(We),1),He===S.correctIndex?(l(),s("svg",dc,[...n[60]||(n[60]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):L("",!0)],2))),128))]),S.explanation?(l(),s("div",uc,[n[61]||(n[61]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),F(" "+w(S.explanation),1)])):L("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!ie.value.filter(S=>S._selected).length,onClick:Ee},[n[62]||(n[62]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),F(" Add "+w(ie.value.filter(S=>S._selected).length)+" Selected as Quiz Slides ",1)],8,cc)])):L("",!0)],64)):p.value==="voiceover"?(l(),s(H,{key:2},[e("div",pc,[n[63]||(n[63]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),ne(e("textarea",{"onUpdate:modelValue":n[23]||(n[23]=S=>te.value=S),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[me,te.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(i).isGenerating,onClick:Ie},[x(i).isGenerating?(l(),s("span",mc)):L("",!0),F(" "+w(x(i).isGenerating?"Generating…":"Generate Script"),1)],8,vc)],64)):p.value==="improve"?(l(),s(H,{key:3},[(W=(N=ce.value)==null?void 0:N.content)!=null&&W.text?(l(),s("div",fc,[n[64]||(n[64]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",gc,w(ce.value.content.text.slice(0,120))+w(ce.value.content.text.length>120?"…":""),1)])):(l(),s("p",bc,"Select a text element on the canvas to improve it.")),e("div",yc,[n[65]||(n[65]=e("label",{class:"form-label"},"Instruction",-1)),ne(e("input",{"onUpdate:modelValue":n[24]||(n[24]=S=>m.value=S),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[me,m.value]])]),n[66]||(n[66]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ne(e("textarea",{"onUpdate:modelValue":n[25]||(n[25]=S=>m.value=S),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[me,m.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(i).isGenerating||!ce.value&&!m.value,onClick:n[26]||(n[26]=S=>ce.value?Te():Le())},[x(i).isGenerating?(l(),s("span",xc)):L("",!0),F(" "+w(x(i).isGenerating?"Processing…":"Generate"),1)],8,hc)],64)):p.value==="translate"?(l(),s(H,{key:4},[(ge=(O=ce.value)==null?void 0:O.content)!=null&&ge.text?(l(),s("div",wc,[n[67]||(n[67]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",kc,w(ce.value.content.text.slice(0,120))+w(ce.value.content.text.length>120?"…":""),1)])):(l(),s("p",Cc,"Select a text element on the canvas to translate it.")),e("div",Sc,[n[69]||(n[69]=e("label",{class:"form-label"},"Target Language",-1)),ne(e("select",{"onUpdate:modelValue":n[27]||(n[27]=S=>v.value=S),class:"select"},[...n[68]||(n[68]=[Ge('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[ot,v.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:x(i).isGenerating||!((ze=(Ce=ce.value)==null?void 0:Ce.content)!=null&&ze.text),onClick:b},[x(i).isGenerating?(l(),s("span",Ic)):L("",!0),F(" "+w(x(i).isGenerating?"Translating…":"Translate Text"),1)],8,$c),u.value?(l(),s("div",Mc,[e("div",Ec,[n[70]||(n[70]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",Pc,[e("button",{class:"btn btn-ghost btn-sm",onClick:n[28]||(n[28]=S=>C.navigator.clipboard.writeText(u.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:B,disabled:!ce.value},"Apply",8,Ac)])]),e("div",zc,w(u.value),1)])):L("",!0)],64)):p.value==="image"?(l(),s(H,{key:5},[n[73]||(n[73]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",Nc,[n[71]||(n[71]=e("label",{class:"form-label"},"Image Description",-1)),ne(e("textarea",{"onUpdate:modelValue":n[29]||(n[29]=S=>V.value=S),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[me,V.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:X.value||x(i).isGenerating||!V.value,onClick:Ae},[X.value||x(i).isGenerating?(l(),s("span",Tc)):L("",!0),F(" "+w(X.value||x(i).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,_c),u.value?(l(),s("div",jc,[n[72]||(n[72]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",Bc,w(u.value),1)])):L("",!0)],64)):p.value==="settings"?(l(),s("div",Lc,[e("div",Dc,[n[75]||(n[75]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:x(i).apiProvider,class:"select",onChange:n[30]||(n[30]=S=>x(i).setProvider(S.target.value))},[...n[74]||(n[74]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,qc)]),e("div",Rc,[n[76]||(n[76]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:x(i).apiKey,class:"input",placeholder:"sk-…",onChange:n[31]||(n[31]=S=>x(i).setApiKey(S.target.value))},null,40,Fc),n[77]||(n[77]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),x(i).apiKey?L("",!0):(l(),s("div",Uc,[...n[78]||(n[78]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),F(" Running in ",-1),e("strong",null,"demo mode",-1),F(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):L("",!0),u.value&&p.value!=="settings"&&p.value!=="quiz"?(l(),s("div",Oc,[e("div",Gc,[n[79]||(n[79]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:n[32]||(n[32]=S=>u.value="")},"Clear")]),e("pre",Vc,w(u.value),1),e("div",Wc,[p.value==="generate"?(l(),s("button",{key:0,class:"btn btn-primary btn-sm",onClick:fe},w(a.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):L("",!0),p.value==="generate"?(l(),s("button",{key:1,class:"btn btn-ghost btn-sm",disabled:x(i).isGenerating,onClick:ve},[...n[80]||(n[80]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),F(" Regenerate ",-1)])],8,Hc)):L("",!0),p.value==="improve"&&ce.value?(l(),s("button",{key:2,class:"btn btn-primary btn-sm",onClick:Oe}," Apply to Element ")):L("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:n[33]||(n[33]=S=>{var De;return(De=C.navigator.clipboard)==null?void 0:De.writeText(u.value)})}," Copy ")])])):L("",!0),x(i).lastError?(l(),s("div",Qc,[n[81]||(n[81]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),F(" "+w(x(i).lastError),1)])):L("",!0)])])}}},Jc=_e(Yc,[["__scopeId","data-v-697ec3ea"]]),Kc={class:"theme-manager"},Xc={class:"panel-section"},Zc={class:"presets-grid"},ep=["title","onClick"],tp={class:"preset-preview"},op={class:"preset-name"},np={class:"panel-section"},lp={class:"theme-fields"},ip={class:"form-label"},sp={class:"color-row"},ap=["value","onInput"],rp=["value","onChange"],dp={class:"panel-section"},up={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},cp=["value"],pp=["value"],vp={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},mp=["value"],fp=["value"],gp={class:"form-group"},bp=["value"],yp={class:"panel-section"},hp={key:0,class:"apply-message success"},xp={key:1,class:"apply-message error"},wp={__name:"ThemeManager",setup(h){const i=Fe(),r=Ue(),d=_(()=>r.getProject(i.projectId)),p=_(()=>{var j;return((j=d.value)==null?void 0:j.theme)||{}}),m=P(""),g=P("");function u(j){r.updateProject(i.projectId,{theme:{...p.value,...j}})}const I=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],Q=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function v(j){u(j)}function te(j,f){const a=j.content||{};return j.type==="text"?{content:{...a,fontFamily:f.fontFamily||a.fontFamily,color:f.textColor||a.color}}:j.type==="heading"?{content:{...a,fontFamily:f.headingFont||f.fontFamily||a.fontFamily,color:f.textColor||a.color}}:j.type==="shape"?{content:{...a,fillColor:f.secondaryColor||a.fillColor}}:j.type==="hotspot"?{content:{...a,bgColor:f.primaryColor||a.bgColor}}:j.type==="button"?{content:{...a,bgColor:f.primaryColor||a.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:f.fontFamily||a.fontFamily}}:j.type==="quiz"?{content:{...a,cardBgColor:f.bgColor||a.cardBgColor,questionColor:f.textColor||a.questionColor,accentColor:f.primaryColor||a.accentColor}}:null}function q(){m.value="",g.value="";const j=i.projectId,f=d.value,a=p.value;if(!j||!f){g.value="No active project to apply theme.";return}const E=f.slides||[];let R=0;E.forEach(le=>{(le.backgroundType||"color")==="color"&&r.updateSlide(j,le.id,{backgroundType:"color",background:a.bgColor||le.background||"#ffffff"}),(le.elements||[]).forEach(re=>{const z=te(re,a);z&&(r.updateElement(j,le.id,re.id,z),R+=1)})}),m.value=`Applied theme to ${E.length} slide${E.length===1?"":"s"} and ${R} element${R===1?"":"s"}.`}return(j,f)=>(l(),s("div",Kc,[e("div",Xc,[f[3]||(f[3]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",Zc,[(l(),s(H,null,de(I,a=>e("div",{key:a.name,class:"preset-card",title:a.name,onClick:E=>v(a)},[e("div",tp,[e("div",{class:"pp-header",style:pe({background:a.primaryColor})},null,4),e("div",{class:"pp-body",style:pe({background:a.bgColor})},[e("div",{class:"pp-line",style:pe({background:a.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:pe({background:a.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:pe({background:a.secondaryColor})},null,4)]),e("span",op,w(a.name),1)],8,ep)),64))])]),e("div",np,[f[4]||(f[4]=e("div",{class:"panel-title"},"Colors",-1)),e("div",lp,[(l(),s(H,null,de({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(a,E)=>e("div",{class:"theme-field",key:E},[e("label",ip,w(a),1),e("div",sp,[e("input",{type:"color",value:p.value[E]||"#ffffff",class:"color-input-native",onInput:R=>u({[E]:R.target.value})},null,40,ap),e("input",{value:p.value[E]||"",class:"input",onChange:R=>u({[E]:R.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,rp)])])),64))])]),e("div",dp,[f[8]||(f[8]=e("div",{class:"panel-title"},"Typography",-1)),e("div",up,[f[5]||(f[5]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:p.value.headingFont||"Inter, sans-serif",class:"select",onChange:f[0]||(f[0]=a=>u({headingFont:a.target.value}))},[(l(),s(H,null,de(Q,a=>e("option",{key:a.value,value:a.value},w(a.label),9,pp)),64))],40,cp)]),e("div",vp,[f[6]||(f[6]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:p.value.fontFamily||"Inter, sans-serif",class:"select",onChange:f[1]||(f[1]=a=>u({fontFamily:a.target.value}))},[(l(),s(H,null,de(Q,a=>e("option",{key:a.value,value:a.value},w(a.label),9,fp)),64))],40,mp)]),e("div",gp,[f[7]||(f[7]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:p.value.fontSize||16,class:"input",onChange:f[2]||(f[2]=a=>u({fontSize:+a.target.value}))},null,40,bp)])]),e("div",yp,[f[9]||(f[9]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:pe({background:p.value.bgColor||"#fff",fontFamily:p.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:pe({color:p.value.textColor,fontFamily:p.value.headingFont||p.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:pe({color:p.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:pe({background:p.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:pe({background:p.value.secondaryColor})},"Badge",4)],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:q}," Apply Theme to Slides "),m.value?(l(),s("p",hp,w(m.value),1)):L("",!0),g.value?(l(),s("p",xp,w(g.value),1)):L("",!0)])]))}},kp=_e(wp,[["__scopeId","data-v-dd457d78"]]),Cp={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Sp={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},$p={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Ip={class:"export-tabs tabs"},Mp={class:"export-content"},Ep={class:"export-options",style:{"margin-bottom":"20px"}},Pp={class:"form-group"},Ap={class:"export-meta"},zp={class:"meta-item"},Np={class:"meta-item"},_p={class:"meta-item"},Tp={class:"export-options",style:{"margin-bottom":"20px"}},jp={class:"form-group"},Bp={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Lp={class:"coming-soon"},Dp={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},qp={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},Rp={key:1,class:"export-success"},Fp={__name:"ExportModal",setup(h){const i=Fe(),r=Ue(),d=_o(),p=_(()=>r.getProject(i.projectId)),m=P("json"),g=P(""),u=P(""),I=P(!0);Re(p,f=>{f&&!u.value&&(u.value=f.name||"presentation")},{immediate:!0});function Q(){const f=r.exportProject(i.projectId);if(!f)return;const a=new Blob([f],{type:"application/json"}),E=URL.createObjectURL(a),R=document.createElement("a");R.href=E,R.download=`${u.value||"project"}.mediasurf.json`,R.click(),URL.revokeObjectURL(E),g.value="success",setTimeout(()=>g.value="",3e3)}function v(f,a="presentation"){return String(f).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||a}function te(f,a){return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
body {
  min-height: 100vh;
  font-family: ${(f==null?void 0:f.fontFamily)||"Inter, sans-serif"};
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
  width: 960px;
  height: 540px;
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
  color: ${(f==null?void 0:f.textColor)||"#1a1a2e"};
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
  display: ${(a==null?void 0:a.showNavControls)===!1?"none":"flex"};
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
  display: ${(a==null?void 0:a.showNavControls)===!1?"none":"flex"};
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
  background: ${(f==null?void 0:f.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(a==null?void 0:a.showProgress)===!1?"none":"block"};
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
`}function q(){return`
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
    var scale = Math.min(window.innerWidth / 960, window.innerHeight / 540, 1.5);
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
`}async function j(){var Be,$e,ce;const f=p.value;if(!f)return;g.value="processing";const a=new nn,E=a.folder("assets");let R=0;async function le(ve,D="media"){if((!ve||ve.startsWith("data:")||ve.startsWith("http://localhost")||ve.startsWith("blob:"))&&ve.startsWith("data:"))return ve;try{const y=await(await fetch(ve)).blob();let J="bin";const oe=y.type;if(oe.includes("image/png")?J="png":oe.includes("image/jpeg")?J="jpg":oe.includes("image/gif")?J="gif":oe.includes("image/svg")?J="svg":oe.includes("image/webp")?J="webp":oe.includes("video/mp4")?J="mp4":oe.includes("audio/mpeg")&&(J="mp3"),J==="bin"){const fe=ve.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);fe&&(J=fe[1])}R++;const ae=`${D}_${R}.${J}`;return E.file(ae,y),`assets/${ae}`}catch(Z){return console.warn("Could not fetch asset:",ve,Z),ve}}const re=JSON.parse(JSON.stringify([...f.slides||[]])).sort((ve,D)=>(ve.order??0)-(D.order??0));if(I.value)for(const ve of re){ve.backgroundType==="image"&&ve.backgroundImage&&(ve.backgroundImage=await le(ve.backgroundImage,"bg"));for(const D of ve.elements||[])D.type==="image"&&((Be=D.content)!=null&&Be.src)&&(D.content.src=await le(D.content.src,"img")),D.type==="video"&&(($e=D.content)!=null&&$e.src)&&!D.content.src.includes("youtube")&&!D.content.src.includes("youtu.be")&&(D.content.src=await le(D.content.src,"vid")),D.type==="audio"&&((ce=D.content)!=null&&ce.src)&&(D.content.src=await le(D.content.src,"aud"))}const z=v(u.value||f.name||"presentation"),A={name:f.name,theme:f.theme||{},settings:f.settings||{},slides:re},Y=JSON.stringify(A).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),K=te(f.theme,f.settings),U=q(),ue=`<script id="lf-data" type="application/json">${Y}<\/script>`,be=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${z}</title>
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
  <span class="nav-counter" id="counter">1 / ${re.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${ue}
<script src="script.js"><\/script>
</body>
</html>`;a.file("index.html",be),a.file("style.css",K),a.file("script.js",U);const ye=await a.generateAsync({type:"blob"}),Se=URL.createObjectURL(ye),Ne=document.createElement("a");Ne.href=Se,Ne.download=`${z}.zip`,Ne.click(),URL.revokeObjectURL(Se),g.value="success",setTimeout(()=>g.value="",3e3)}return(f,a)=>(l(),je(Zo,{title:"Export Project",size:"md",onClose:a[9]||(a[9]=E=>x(i).showExportModal=!1)},{footer:Je(()=>[e("button",{class:"btn btn-secondary",onClick:a[8]||(a[8]=E=>x(i).showExportModal=!1)},"Close")]),default:Je(()=>{var E,R,le,re,z;return[x(d).user?(l(),s(H,{key:1},[e("div",Ip,[e("button",{class:ee(["tab-btn",m.value==="json"&&"active"]),onClick:a[2]||(a[2]=A=>m.value="json")},"JSON Project",2),e("button",{class:ee(["tab-btn",m.value==="html"&&"active"]),onClick:a[3]||(a[3]=A=>m.value="html")},"HTML Package",2),e("button",{class:ee(["tab-btn",m.value==="scorm"&&"active"]),onClick:a[4]||(a[4]=A=>m.value="scorm")},"SCORM",2)]),e("div",Mp,[m.value==="json"?(l(),s(H,{key:0},[a[20]||(a[20]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",Ep,[e("div",Pp,[a[15]||(a[15]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ne(e("input",{type:"text","onUpdate:modelValue":a[5]||(a[5]=A=>u.value=A),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[me,u.value]])])]),e("div",Ap,[e("div",zp,[a[16]||(a[16]=e("span",null,"Project",-1)),e("strong",null,w((E=p.value)==null?void 0:E.name),1)]),e("div",Np,[a[17]||(a[17]=e("span",null,"Slides",-1)),e("strong",null,w(((le=(R=p.value)==null?void 0:R.slides)==null?void 0:le.length)||0),1)]),e("div",_p,[a[18]||(a[18]=e("span",null,"Elements",-1)),e("strong",null,w(((z=(re=p.value)==null?void 0:re.slides)==null?void 0:z.reduce((A,Y)=>{var K;return A+(((K=Y.elements)==null?void 0:K.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:Q},[...a[19]||(a[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),F(" Download JSON ",-1)])])],64)):m.value==="html"?(l(),s(H,{key:1},[a[24]||(a[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",Tp,[e("div",jp,[a[21]||(a[21]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ne(e("input",{type:"text","onUpdate:modelValue":a[6]||(a[6]=A=>u.value=A),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[me,u.value]])]),e("label",Bp,[ne(e("input",{type:"checkbox","onUpdate:modelValue":a[7]||(a[7]=A=>I.value=A)},null,512),[[rt,I.value]]),a[22]||(a[22]=F(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),a[25]||(a[25]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:j},[...a[23]||(a[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),F(" Download HTML ",-1)])])],64)):m.value==="scorm"?(l(),s(H,{key:2},[a[29]||(a[29]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Lp,[(l(),s("svg",Dp,[...a[26]||(a[26]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),a[27]||(a[27]=e("h4",null,"Coming Soon",-1)),a[28]||(a[28]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):L("",!0),et(st,{name:"fade"},{default:Je(()=>[g.value==="processing"?(l(),s("div",qp,[...a[30]||(a[30]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),F(" Generating package... Please wait. ",-1)])])):g.value==="success"?(l(),s("div",Rp,[...a[31]||(a[31]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),F(" Export successful! Check your downloads folder. ",-1)])])):L("",!0)]),_:1})])],64)):(l(),s("div",Cp,[(l(),s("svg",Sp,[...a[10]||(a[10]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),a[13]||(a[13]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),a[14]||(a[14]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",$p,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:a[0]||(a[0]=A=>x(d).loginWithGoogle())},[...a[11]||(a[11]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),F(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:a[1]||(a[1]=A=>x(d).loginWithMicrosoft())},[...a[12]||(a[12]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),F(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Up=_e(Fp,[["__scopeId","data-v-a19a6b54"]]),Op={key:0,class:"editor-view"},Gp={class:"editor-topbar"},Vp={class:"topbar-left"},Wp={class:"project-name-wrap"},Hp=["value"],Qp={class:"save-label"},Yp={class:"topbar-center"},Jp={key:0,class:"slide-position"},Kp={class:"topbar-right"},Xp={class:"editor-body"},Zp={class:"authoring-rail"},ev=["onClick","data-tooltip"],tv={key:0,class:"rail-icon"},ov={key:1,class:"rail-icon"},nv={key:2,class:"rail-icon"},lv={key:3,class:"rail-icon"},iv={key:4,class:"rail-icon"},sv={key:5,class:"rail-icon"},av={key:6,class:"rail-icon"},rv={key:7,class:"rail-icon"},dv={key:8,class:"rail-icon"},uv={class:"right-panel"},cv={class:"panel-tabs"},pv=["onClick","data-tooltip"],vv={class:"tab-icon"},mv={class:"tab-label"},fv={class:"panel-content"},gv={key:1,class:"editor-not-found"},bv={__name:"EditorView",setup(h){const i=Ko(),r=Jo(),d=Fe(),p=Ue(),m=_o(),g=_(()=>i.params.id),u=_(()=>p.getProject(g.value)),I=_(()=>{var M;return[...((M=u.value)==null?void 0:M.slides)||[]].sort(($,k)=>$.order-k.order)}),Q=P(null),v=P(!1),te=P("deck"),{aiStore:q,showAIModal:j,aiMode:f,aiTopic:a,aiContext:E,aiProjectName:R,aiSlideCount:le,aiQuestionCount:re,aiDifficulty:z,aiQuestionType:A,aiCreationError:Y,aiSubmitting:K,aiProjectNamePlaceholder:U,aiPrimaryActionLabel:ue,openAICreationModal:ie,createAIProject:be}=en({onRequireAuth:()=>r.push({name:"dashboard"})});let ye=!1,Se=null;Re(()=>u.value,M=>{if(M){if(ye){ye=!1;return}Se&&clearTimeout(Se),Se=setTimeout(()=>{d.pushHistory(M)},600)}},{deep:!0}),Re(()=>m.isAuthReady,M=>{if(M){if(!u.value){r.push({name:"dashboard"});return}d.setProject(g.value),I.value.length>0&&d.setCurrentSlide(I.value[0].id),d.pushHistory(u.value)}},{immediate:!0});const Ne=_(()=>{const M=u.value;return M?`Saved ${new Date(M.updatedAt).toLocaleTimeString()}`:""}),Be=_(()=>{switch(d.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});ln({undo:()=>{if(d.canUndo()){const M=d.undo();M&&(ye=!0,p.updateProject(g.value,M))}},redo:()=>{if(d.canRedo()){const M=d.redo();M&&(ye=!0,p.updateProject(g.value,M))}},delete:()=>{d.selectedElementId&&(p.deleteElement(d.projectId,d.currentSlideId,d.selectedElementId),d.clearSelection())},escape:()=>{d.clearSelection(),d.setActiveTool("select")},copy:()=>{var $,k,Ee,Pe;const M=(Pe=(Ee=(k=($=u.value)==null?void 0:$.slides)==null?void 0:k.find(Ie=>Ie.id===d.currentSlideId))==null?void 0:Ee.elements)==null?void 0:Pe.find(Ie=>Ie.id===d.selectedElementId);M&&d.setClipboard(M)},paste:()=>{if(d.clipboard&&d.currentSlideId){const M=d.clipboard;p.addElement(d.projectId,d.currentSlideId,M.type,{...M,x:M.x+20,y:M.y+20,id:void 0})}},duplicate:()=>{if(d.selectedElementId){const M=p.duplicateElement(d.projectId,d.currentSlideId,d.selectedElementId);M&&d.selectElement(M.id)}},zoomIn:()=>d.zoomIn(),zoomOut:()=>d.zoomOut(),zoomReset:()=>d.zoomReset(),toggleGrid:()=>d.toggleGrid(),nudge:(M,$)=>{var Ee,Pe,Ie,b;if(!d.selectedElementId)return;const k=(b=(Ie=(Pe=(Ee=u.value)==null?void 0:Ee.slides)==null?void 0:Pe.find(B=>B.id===d.currentSlideId))==null?void 0:Ie.elements)==null?void 0:b.find(B=>B.id===d.selectedElementId);k&&p.updateElement(d.projectId,d.currentSlideId,d.selectedElementId,{x:k.x+M,y:k.y+$})},selectAll:()=>{var $,k,Ee;(((Ee=(k=($=u.value)==null?void 0:$.slides)==null?void 0:k.find(Pe=>Pe.id===d.currentSlideId))==null?void 0:Ee.elements)||[]).forEach((Pe,Ie)=>d.selectElement(Pe.id,Ie>0))}});function $e(){r.push({name:"dashboard"})}function ce(){r.push({name:"preview",params:{id:g.value},query:{from:"editor"}})}function ve(M="deck"){te.value=M,v.value=!0}function D(){v.value=!1,ie(te.value)}function Z(M,$="Image"){if(!d.projectId||!d.currentSlideId||!M)return;const k=new Image;k.onload=()=>{const Ie=Math.min(420/k.width,280/k.height,1),b=Math.max(120,Math.round(k.width*Ie)),B=Math.max(80,Math.round(k.height*Ie)),V=Math.max(24,Math.round((960-b)/2)),X=Math.max(24,Math.round((540-B)/2)),Ae=p.addElement(d.projectId,d.currentSlideId,"image",{x:V,y:X,width:b,height:B,content:{src:M,alt:$,objectFit:"cover"}});Ae&&(d.selectElement(Ae.id),d.setRightPanel("properties"),d.setActiveTool("select"))},k.src=M}function y(M){const[$]=Array.from(M.target.files||[]);if(!$||!$.type.startsWith("image/"))return;const k=new FileReader;k.onload=()=>Z(String(k.result||""),$.name),k.readAsDataURL($),M.target.value=""}function J(){var M;(M=Q.value)==null||M.click()}const oe=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function ae(M){if(M==="text"){d.setActiveTool("text");return}if(M==="resources"){d.setActiveTool("image");return}if(M==="interactive-elements"){d.setActiveTool("hotspot");return}if(M==="interactive-questions"){d.setActiveTool("quiz");return}if(M==="widgets"){d.setActiveTool("shape");return}if(M==="insert"){J();return}if(M==="style"){d.setRightPanel("properties");return}if(M==="background"){d.clearSelection(),d.setRightPanel("properties");return}M==="pages"&&d.toggleSlidePanel()}function fe(M){return M==="text"?["text","heading"].includes(d.activeTool):M==="resources"?d.activeTool==="image":M==="interactive-elements"?["hotspot","button"].includes(d.activeTool):M==="interactive-questions"?d.activeTool==="quiz":M==="widgets"?["shape","video","audio"].includes(d.activeTool):M==="insert"?!1:M==="style"||M==="background"?d.rightPanelTab==="properties":M==="pages"?d.showSlidePanel:!1}return(M,$)=>u.value?(l(),s("div",Op,[e("input",{ref_key:"imageInputRef",ref:Q,type:"file",accept:"image/*",class:"sr-only",onChange:y},null,544),e("header",Gp,[e("div",Vp,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:$e,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...$[14]||($[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),F(" Dashboard ",-1)])]),e("div",Wp,[e("input",{value:u.value.name,class:"project-name-input",onChange:$[0]||($[0]=k=>x(p).updateProject(g.value,{name:k.target.value}))},null,40,Hp)]),e("span",Qp,w(Ne.value),1)]),e("div",Yp,[x(d).currentSlideId?(l(),s("span",Jp," Slide "+w(I.value.findIndex(k=>k.id===x(d).currentSlideId)+1)+" of "+w(I.value.length),1)):L("",!0)]),e("div",Kp,[e("button",{class:ee(["btn btn-ghost btn-sm",x(d).showAIPanel&&"active-btn"]),onClick:$[1]||($[1]=k=>{x(d).showAIPanel=!x(d).showAIPanel,x(d).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...$[15]||($[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),F(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:$[2]||($[2]=k=>{x(d).showThemeManager=!x(d).showThemeManager,x(d).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...$[16]||($[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),F(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:ce,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...$[17]||($[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),F(" Preview ",-1)])]),e("button",{class:"btn btn-primary btn-sm",onClick:$[3]||($[3]=k=>x(d).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...$[18]||($[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),F(" Export ",-1)])])])]),et(ad,{onOpenAiProject:ve}),e("div",Xp,[e("aside",Zp,[(l(),s(H,null,de(oe,k=>e("button",{key:k.id,class:ee(["rail-option",fe(k.id)&&"active"]),onClick:Ee=>ae(k.id),"data-tooltip":k.label,"data-tooltip-position":"right"},[k.id==="text"?(l(),s("span",tv,"T")):k.id==="resources"?(l(),s("span",ov,[...$[19]||($[19]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):k.id==="interactive-elements"?(l(),s("span",nv,[...$[20]||($[20]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):k.id==="interactive-questions"?(l(),s("span",lv,[...$[21]||($[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):k.id==="widgets"?(l(),s("span",iv,[...$[22]||($[22]=[Ge('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1e121fb8><rect x="3" y="3" width="7" height="7" data-v-1e121fb8></rect><rect x="14" y="3" width="7" height="7" data-v-1e121fb8></rect><rect x="14" y="14" width="7" height="7" data-v-1e121fb8></rect><rect x="3" y="14" width="7" height="7" data-v-1e121fb8></rect></svg>',1)])])):k.id==="insert"?(l(),s("span",sv,[...$[23]||($[23]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):k.id==="style"?(l(),s("span",av,[...$[24]||($[24]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):k.id==="background"?(l(),s("span",rv,[...$[25]||($[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):k.id==="pages"?(l(),s("span",dv,[...$[26]||($[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):L("",!0),F(" "+w(k.label),1)],10,ev)),64))]),et(st,{name:"side-panel-slide"},{default:Je(()=>[x(d).showSlidePanel?(l(),je(gn,{key:0})):L("",!0)]),_:1}),et(su),e("aside",uv,[e("div",cv,[(l(),s(H,null,de([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],k=>e("button",{key:k.id,class:ee(["panel-tab",x(d).rightPanelTab===k.id&&"active"]),onClick:Ee=>x(d).setRightPanel(k.id),"data-tooltip":`Open ${k.label}`,"data-tooltip-position":"bottom"},[e("span",vv,w(k.icon),1),e("span",mv,w(k.label),1)],10,pv)),64))]),e("div",fv,[et(st,{name:"editor-panel-switch",mode:"out-in"},{default:Je(()=>[(l(),s("div",{key:Be.value,class:"panel-content-view"},[x(d).rightPanelTab==="properties"?(l(),je(Ur,{key:0})):x(d).rightPanelTab==="layers"?(l(),je(Ln,{key:1})):x(d).rightPanelTab==="ai"?(l(),je(Jc,{key:2})):x(d).rightPanelTab==="theme"?(l(),je(kp,{key:3})):L("",!0)]))]),_:1})])])]),x(d).showExportModal?(l(),je(Up,{key:0})):L("",!0),v.value?(l(),je(tn,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:$[4]||($[4]=k=>v.value=!1),onConfirm:D})):L("",!0),x(j)?(l(),je(on,{key:2,mode:x(f),topic:x(a),context:x(E),"project-name":x(R),"slide-count":x(le),"question-count":x(re),difficulty:x(z),"question-type":x(A),"project-name-placeholder":x(U),"primary-action-label":x(ue),"creation-error":x(Y),"is-submitting":x(K),"is-generating":x(q).isGenerating,"has-api-key":!!x(q).apiKey,onClose:$[5]||($[5]=k=>j.value=!1),onCreate:x(be),"onUpdate:mode":$[6]||($[6]=k=>f.value=k),"onUpdate:topic":$[7]||($[7]=k=>a.value=k),"onUpdate:context":$[8]||($[8]=k=>E.value=k),"onUpdate:projectName":$[9]||($[9]=k=>R.value=k),"onUpdate:slideCount":$[10]||($[10]=k=>le.value=k),"onUpdate:questionCount":$[11]||($[11]=k=>re.value=k),"onUpdate:difficulty":$[12]||($[12]=k=>z.value=k),"onUpdate:questionType":$[13]||($[13]=k=>A.value=k)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):L("",!0)])):(l(),s("div",gv,[$[27]||($[27]=e("h2",null,"Project not found",-1)),$[28]||($[28]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:$e},"Go to Dashboard")]))}},Sv=_e(bv,[["__scopeId","data-v-1e121fb8"]]);export{Sv as default};
