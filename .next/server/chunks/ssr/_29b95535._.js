module.exports=[70025,6704,a=>{"use strict";let b,c;var d,e=a.i(72131),f=a.i(12794),g=a.i(18544),h=a.i(33791),i=a.i(42871),j=class extends h.Subscribable{#a;#b=void 0;#c;#d;constructor(a,b){super(),this.#a=a,this.setOptions(b),this.bindMethods(),this.#e()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(a){let b=this.options;this.options=this.#a.defaultMutationOptions(a),(0,i.shallowEqualObjects)(this.options,b)||this.#a.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#c,observer:this}),b?.mutationKey&&this.options.mutationKey&&(0,i.hashKey)(b.mutationKey)!==(0,i.hashKey)(this.options.mutationKey)?this.reset():this.#c?.state.status==="pending"&&this.#c.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#c?.removeObserver(this)}onMutationUpdate(a){this.#e(),this.#f(a)}getCurrentResult(){return this.#b}reset(){this.#c?.removeObserver(this),this.#c=void 0,this.#e(),this.#f()}mutate(a,b){return this.#d=b,this.#c?.removeObserver(this),this.#c=this.#a.getMutationCache().build(this.#a,this.options),this.#c.addObserver(this),this.#c.execute(a)}#e(){let a=this.#c?.state??(0,f.getDefaultState)();this.#b={...a,isPending:"pending"===a.status,isSuccess:"success"===a.status,isError:"error"===a.status,isIdle:"idle"===a.status,mutate:this.mutate,reset:this.reset}}#f(a){g.notifyManager.batch(()=>{if(this.#d&&this.hasListeners()){let b=this.#b.variables,c=this.#b.context,d={client:this.#a,meta:this.options.meta,mutationKey:this.options.mutationKey};a?.type==="success"?(this.#d.onSuccess?.(a.data,b,c,d),this.#d.onSettled?.(a.data,null,b,c,d)):a?.type==="error"&&(this.#d.onError?.(a.error,b,c,d),this.#d.onSettled?.(void 0,a.error,b,c,d))}this.listeners.forEach(a=>{a(this.#b)})})}},k=a.i(37927);function l(a,b){let c=(0,k.useQueryClient)(b),[d]=e.useState(()=>new j(c,a));e.useEffect(()=>{d.setOptions(a)},[d,a]);let f=e.useSyncExternalStore(e.useCallback(a=>d.subscribe(g.notifyManager.batchCalls(a)),[d]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),h=e.useCallback((a,b)=>{d.mutate(a,b).catch(i.noop)},[d]);if(f.error&&(0,i.shouldThrowError)(d.options.throwOnError,[f.error]))throw f.error;return{...f,mutate:h,mutateAsync:f.mutate}}a.s(["useMutation",()=>l],70025);let m={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,q=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?q(g,f):f+"{"+q(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=q(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=q.p?q.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},r={},s=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+s(a[c]);return b}return a};function t(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let g=s(a),h=r[g]||(r[g]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(g));if(!r[h]){let b=g!==a?a:(a=>{let b,c,d=[{}];for(;b=n.exec(a.replace(o,""));)b[4]?d.shift():b[3]?(c=b[3].replace(p," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(p," ").trim();return d[0]})(a);r[h]=q(e?{["@keyframes "+h]:b}:b,c?"":"."+h)}let i=c&&r.g?r.g:null;return c&&(r.g=r[h]),f=r[h],i?b.data=b.data.replace(i,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),h})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":q(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||m,d.g,d.o,d.k)}t.bind({g:1});let u,v,w,x=t.bind({k:1});function y(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:v&&v()},h),c.o=/ *go\d+/.test(i),h.className=t.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),w&&j[0]&&w(h),u(j,h)}return b?b(e):e}}var z=(a,b)=>"function"==typeof a?a(b):a,A=(b=0,()=>(++b).toString()),B="default",C=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return C(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},D=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},F={},G=(a,b=B)=>{F[b]=C(F[b]||E,a),D.forEach(([a,c])=>{a===b&&c(F[b])})},H=a=>Object.keys(F).forEach(b=>G(a,b)),I=(a=B)=>b=>{G(b,a)},J={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},K=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||A()}))(b,a,c);return I(e.toasterId||(d=e.id,Object.keys(F).find(a=>F[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},L=(a,b)=>K("blank")(a,b);L.error=K("error"),L.success=K("success"),L.loading=K("loading"),L.custom=K("custom"),L.dismiss=(a,b)=>{let c={type:3,toastId:a};b?I(b)(c):H(c)},L.dismissAll=a=>L.dismiss(void 0,a),L.remove=(a,b)=>{let c={type:4,toastId:a};b?I(b)(c):H(c)},L.removeAll=a=>L.remove(void 0,a),L.promise=(a,b,c)=>{let d=L.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?z(b.success,a):void 0;return e?L.success(e,{id:d,...c,...null==c?void 0:c.success}):L.dismiss(d),a}).catch(a=>{let e=b.error?z(b.error,a):void 0;e?L.error(e,{id:d,...c,...null==c?void 0:c.error}):L.dismiss(d)}),a};var M=1e3,N=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Q=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,S=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,T=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,V=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=y("div")`
  position: absolute;
`,X=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?e.createElement(Z,null,b):b:"blank"===c?null:e.createElement(X,null,e.createElement(S,{...d}),"loading"!==c&&e.createElement(W,null,"error"===c?e.createElement(Q,{...d}):e.createElement(V,{...d})))},_=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,aa=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ab=e.memo(({toast:a,position:b,style:d,children:f})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${x(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=e.createElement($,{toast:a}),i=e.createElement(aa,{...a.ariaProps},z(a.message,a));return e.createElement(_,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof f?f({icon:h,message:i}):e.createElement(e.Fragment,null,h,i))});d=e.createElement,q.p=void 0,u=d,v=void 0,w=void 0;var ac=({id:a,className:b,style:c,onHeightUpdate:d,children:f})=>{let g=e.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return e.createElement("div",{ref:g,className:b,style:c},f)},ad=t`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ae=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:f,children:g,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=((a,b="default")=>{let{toasts:c,pausedAt:d}=((a={},b=B)=>{let[c,d]=(0,e.useState)(F[b]||E),f=(0,e.useRef)(F[b]);(0,e.useEffect)(()=>(f.current!==F[b]&&d(F[b]),D.push([b,d]),()=>{let a=D.findIndex(([a])=>a===b);a>-1&&D.splice(a,1)}),[b]);let g=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||J[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:g}})(a,b),f=(0,e.useRef)(new Map).current,g=(0,e.useCallback)((a,b=M)=>{if(f.has(a))return;let c=setTimeout(()=>{f.delete(a),h({type:4,toastId:a})},b);f.set(a,c)},[]);(0,e.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&L.dismiss(c.id);return}return setTimeout(()=>L.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,e.useCallback)(I(b),[b]),i=(0,e.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,e.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,e.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,e.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,e.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=f.get(a.id);b&&(clearTimeout(b),f.delete(a.id))}})},[c,g]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,h);return e.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:f,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return e.createElement(ac,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?ad:"",style:m},"custom"===d.type?z(d.message,d):g?g(d):e.createElement(ab,{toast:d,position:j}))}))};a.s(["Toaster",()=>ae,"default",()=>L],6704)},74870,a=>{a.v({actions:"NoteForm-module__XA_SlW__actions",cancelButton:"NoteForm-module__XA_SlW__cancelButton",error:"NoteForm-module__XA_SlW__error",form:"NoteForm-module__XA_SlW__form",formGroup:"NoteForm-module__XA_SlW__formGroup",input:"NoteForm-module__XA_SlW__input",select:"NoteForm-module__XA_SlW__select",submitButton:"NoteForm-module__XA_SlW__submitButton",textarea:"NoteForm-module__XA_SlW__textarea"})},36429,a=>{"use strict";let b,c;var d=a.i(87924),e=a.i(70025),f=a.i(37927),g=a.i(74870),h=a.i(6704),i=a.i(50944),j=a.i(20226);let k=a=>b=>{try{let c=a(b);if(c instanceof Promise)return c;return{then:a=>k(a)(c),catch(a){return this}}}catch(a){return{then(a){return this},catch:b=>k(b)(a)}}},l={title:"",content:"",tag:"Todo"},m=(0,j.create)()((b=a=>({draft:l,setDraft:b=>a({draft:b}),clearDraft:()=>a({draft:l})}),c={name:"draft",partialize:a=>({draft:a.draft})},(a,d,e)=>{let f,g={storage:function(a,b){let c;try{c=a()}catch(a){return}return{getItem:a=>{var b;let d=a=>null===a?null:JSON.parse(a,void 0),e=null!=(b=c.getItem(a))?b:null;return e instanceof Promise?e.then(d):d(e)},setItem:(a,b)=>c.setItem(a,JSON.stringify(b,void 0)),removeItem:a=>c.removeItem(a)}}(()=>localStorage),partialize:a=>a,version:0,merge:(a,b)=>({...b,...a}),...c},h=!1,i=new Set,j=new Set,l=g.storage;if(!l)return b((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${g.name}', the given storage is currently unavailable.`),a(...b)},d,e);let m=()=>{let a=g.partialize({...d()});return l.setItem(g.name,{state:a,version:g.version})},n=e.setState;e.setState=(a,b)=>(n(a,b),m());let o=b((...b)=>(a(...b),m()),d,e);e.getInitialState=()=>o;let p=()=>{var b,c;if(!l)return;h=!1,i.forEach(a=>{var b;return a(null!=(b=d())?b:o)});let e=(null==(c=g.onRehydrateStorage)?void 0:c.call(g,null!=(b=d())?b:o))||void 0;return k(l.getItem.bind(l))(g.name).then(a=>{if(a)if("number"!=typeof a.version||a.version===g.version)return[!1,a.state];else{if(g.migrate){let b=g.migrate(a.state,a.version);return b instanceof Promise?b.then(a=>[!0,a]):[!0,b]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(b=>{var c;let[e,h]=b;if(a(f=g.merge(h,null!=(c=d())?c:o),!0),e)return m()}).then(()=>{null==e||e(f,void 0),f=d(),h=!0,j.forEach(a=>a(f))}).catch(a=>{null==e||e(void 0,a)})};return e.persist={setOptions:a=>{g={...g,...a},a.storage&&(l=a.storage)},clearStorage:()=>{null==l||l.removeItem(g.name)},getOptions:()=>g,rehydrate:()=>p(),hasHydrated:()=>h,onHydrate:a=>(i.add(a),()=>{i.delete(a)}),onFinishHydration:a=>(j.add(a),()=>{j.delete(a)})},g.skipHydration||p(),f||o}));var n=a.i(93505);let o=["Todo","Work","Personal","Meeting","Shopping","Ideas","Travel","Finance","Health","Important"];a.s(["default",0,()=>{let a=(0,i.useRouter)(),b=(0,f.useQueryClient)(),{setDraft:c,clearDraft:j,draft:k}=m(),l=(0,e.useMutation)({mutationFn:a=>(0,n.createNote)(a),onSuccess:()=>{b.invalidateQueries({queryKey:["notes"]}),h.default.success("You have successfully created a new note!"),j(),a.push("/notes/filter/All")},onError:()=>{h.default.error("Something went wrong...try again.")}}),p=a=>{let b=a.target.value,d=a.target.name;c({...k,[d]:b})};return(0,d.jsxs)("form",{className:g.default.form,onSubmit:a=>{let b;a.preventDefault(),(b=Object.fromEntries(new FormData(a.currentTarget)))&&l.mutate({title:b.title,content:b.content,tag:k?.tag||b.tag||o[0]})},children:[(0,d.jsxs)("div",{className:g.default.formGroup,children:[(0,d.jsx)("label",{htmlFor:"title",children:"Title"}),(0,d.jsx)("input",{value:k?.title??"",id:"title",type:"text",name:"title",className:g.default.input,onChange:p,required:!0})]}),(0,d.jsxs)("div",{className:g.default.formGroup,children:[(0,d.jsx)("label",{htmlFor:"content",children:"Content"}),(0,d.jsx)("textarea",{value:k?.content??"",onChange:p,id:"content",name:"content",className:g.default.textarea,rows:8,required:!0})]}),(0,d.jsxs)("div",{className:g.default.formGroup,children:[(0,d.jsx)("label",{htmlFor:"tag",children:"Tag"}),(0,d.jsx)("select",{value:k?.tag??o[0],id:"tag",name:"tag",className:g.default.select,onChange:p,children:o.map(a=>(0,d.jsx)("option",{value:a,children:a},a))})]}),(0,d.jsxs)("div",{className:g.default.actions,children:[(0,d.jsx)("button",{type:"button",className:g.default.cancelButton,onClick:()=>{a.push("/notes/filter/All")},children:"Cancel"}),(0,d.jsx)("button",{type:"submit",className:g.default.submitButton,children:"Create note"})]})]})}],36429)}];

//# sourceMappingURL=_29b95535._.js.map