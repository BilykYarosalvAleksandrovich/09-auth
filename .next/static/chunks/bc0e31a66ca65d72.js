(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54616,5766,t=>{"use strict";let e,r;var s,a=t.i(71645),i=t.i(14272),o=t.i(40143),n=t.i(15823),l=t.i(19273),u=class extends n.Subscribable{#t;#e=void 0;#r;#s;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#a()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,l.shallowEqualObjects)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,l.hashKey)(e.mutationKey)!==(0,l.hashKey)(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(t){this.#a(),this.#i(t)}getCurrentResult(){return this.#e}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#a(),this.#i()}mutate(t,e){return this.#s=e,this.#r?.removeObserver(this),this.#r=this.#t.getMutationCache().build(this.#t,this.options),this.#r.addObserver(this),this.#r.execute(t)}#a(){let t=this.#r?.state??(0,i.getDefaultState)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#i(t){o.notifyManager.batch(()=>{if(this.#s&&this.hasListeners()){let e=this.#e.variables,r=this.#e.context,s={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};t?.type==="success"?(this.#s.onSuccess?.(t.data,e,r,s),this.#s.onSettled?.(t.data,null,e,r,s)):t?.type==="error"&&(this.#s.onError?.(t.error,e,r,s),this.#s.onSettled?.(void 0,t.error,e,r,s))}this.listeners.forEach(t=>{t(this.#e)})})}},c=t.i(12598);function d(t,e){let r=(0,c.useQueryClient)(e),[s]=a.useState(()=>new u(r,t));a.useEffect(()=>{s.setOptions(t)},[s,t]);let i=a.useSyncExternalStore(a.useCallback(t=>s.subscribe(o.notifyManager.batchCalls(t)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),n=a.useCallback((t,e)=>{s.mutate(t,e).catch(l.noop)},[s]);if(i.error&&(0,l.shouldThrowError)(s.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:n,mutateAsync:i.mutate}}t.s(["useMutation",()=>d],54616);let m={data:""},p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,f=/\n+/g,g=(t,e)=>{let r="",s="",a="";for(let i in t){let o=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":s+="f"==i[1]?g(o,i):i+"{"+g(o,"k"==i[1]?"":e)+"}":"object"==typeof o?s+=g(o,e?e.replace(/([^,])+/g,t=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=g.p?g.p(i,o):i+":"+o+";")}return r+(e&&a?e+"{"+a+"}":a)+s},y={},b=t=>{if("object"==typeof t){let e="";for(let r in t)e+=r+b(t[r]);return e}return t};function v(t){let e,r,s=this||{},a=t.call?t(s.p):t;return((t,e,r,s,a)=>{var i;let o=b(t),n=y[o]||(y[o]=(t=>{let e=0,r=11;for(;e<t.length;)r=101*r+t.charCodeAt(e++)>>>0;return"go"+r})(o));if(!y[n]){let e=o!==t?t:(t=>{let e,r,s=[{}];for(;e=p.exec(t.replace(h,""));)e[4]?s.shift():e[3]?(r=e[3].replace(f," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][e[1]]=e[2].replace(f," ").trim();return s[0]})(t);y[n]=g(a?{["@keyframes "+n]:e}:e,r?"":"."+n)}let l=r&&y.g?y.g:null;return r&&(y.g=y[n]),i=y[n],l?e.data=e.data.replace(l,i):-1===e.data.indexOf(i)&&(e.data=s?i+e.data:e.data+i),n})(a.unshift?a.raw?(e=[].slice.call(arguments,1),r=s.p,a.reduce((t,s,a)=>{let i=e[a];if(i&&i.call){let t=i(r),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;i=e?"."+e:t&&"object"==typeof t?t.props?"":g(t,""):!1===t?"":t}return t+s+(null==i?"":i)},"")):a.reduce((t,e)=>Object.assign(t,e&&e.call?e(s.p):e),{}):a,(t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||m})(s.target),s.g,s.o,s.k)}v.bind({g:1});let x,w,_,O=v.bind({k:1});function S(t,e){let r=this||{};return function(){let s=arguments;function a(i,o){let n=Object.assign({},i),l=n.className||a.className;r.p=Object.assign({theme:w&&w()},n),r.o=/ *go\d+/.test(l),n.className=v.apply(r,s)+(l?" "+l:""),e&&(n.ref=o);let u=t;return t[0]&&(u=n.as||t,delete n.as),_&&u[0]&&_(n),x(u,n)}return e?e(a):a}}var E=(t,e)=>"function"==typeof t?t(e):t,C=(e=0,()=>(++e).toString()),N=()=>{if(void 0===r&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");r=!t||t.matches}return r},j="default",M=(t,e)=>{let{toastLimit:r}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:s}=e;return M(t,{type:+!!t.toasts.find(t=>t.id===s.id),toast:s});case 3:let{toastId:a}=e;return{...t,toasts:t.toasts.map(t=>t.id===a||void 0===a?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+i}))}}},k=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},I={},F=(t,e=j)=>{I[e]=M(I[e]||A,t),k.forEach(([t,r])=>{t===e&&r(I[e])})},R=t=>Object.keys(I).forEach(e=>F(t,e)),$=(t=j)=>e=>{F(e,t)},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=t=>(e,r)=>{let s,a=((t,e="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}))(e,t,r);return $(a.toasterId||(s=a.id,Object.keys(I).find(t=>I[t].toasts.some(t=>t.id===s))))({type:2,toast:a}),a.id},P=(t,e)=>T("blank")(t,e);P.error=T("error"),P.success=T("success"),P.loading=T("loading"),P.custom=T("custom"),P.dismiss=(t,e)=>{let r={type:3,toastId:t};e?$(e)(r):R(r)},P.dismissAll=t=>P.dismiss(void 0,t),P.remove=(t,e)=>{let r={type:4,toastId:t};e?$(e)(r):R(r)},P.removeAll=t=>P.remove(void 0,t),P.promise=(t,e,r)=>{let s=P.loading(e.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let a=e.success?E(e.success,t):void 0;return a?P.success(a,{id:s,...r,...null==r?void 0:r.success}):P.dismiss(s),t}).catch(t=>{let a=e.error?E(e.error,t):void 0;a?P.error(a,{id:s,...r,...null==r?void 0:r.error}):P.dismiss(s)}),t};var z=1e3,K=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=O`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=O`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,X=O`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${X} 1s linear infinite;
`,U=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,q=O`
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
}`,G=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=S("div")`
  position: absolute;
`,J=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=O`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=({toast:t})=>{let{icon:e,type:r,iconTheme:s}=t;return void 0!==e?"string"==typeof e?a.createElement(Z,null,e):e:"blank"===r?null:a.createElement(J,null,a.createElement(L,{...s}),"loading"!==r&&a.createElement(Q,null,"error"===r?a.createElement(B,{...s}):a.createElement(G,{...s})))},tt=S("div")`
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
`,te=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,tr=a.memo(({toast:t,position:e,style:r,children:s})=>{let i=t.height?((t,e)=>{let r=t.includes("top")?1:-1,[s,a]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:e?`${O(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${O(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||e||"top-center",t.visible):{opacity:0},o=a.createElement(V,{toast:t}),n=a.createElement(te,{...t.ariaProps},E(t.message,t));return a.createElement(tt,{className:t.className,style:{...i,...r,...t.style}},"function"==typeof s?s({icon:o,message:n}):a.createElement(a.Fragment,null,o,n))});s=a.createElement,g.p=void 0,x=s,w=void 0,_=void 0;var ts=({id:t,className:e,style:r,onHeightUpdate:s,children:i})=>{let o=a.useCallback(e=>{if(e){let r=()=>{s(t,e.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return a.createElement("div",{ref:o,className:e,style:r},i)},ta=v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ti=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:s,children:i,toasterId:o,containerStyle:n,containerClassName:l})=>{let{toasts:u,handlers:c}=((t,e="default")=>{let{toasts:r,pausedAt:s}=((t={},e=j)=>{let[r,s]=(0,a.useState)(I[e]||A),i=(0,a.useRef)(I[e]);(0,a.useEffect)(()=>(i.current!==I[e]&&s(I[e]),k.push([e,s]),()=>{let t=k.findIndex(([t])=>t===e);t>-1&&k.splice(t,1)}),[e]);let o=r.toasts.map(e=>{var r,s,a;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(r=t[e.type])?void 0:r.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(s=t[e.type])?void 0:s.duration)||(null==t?void 0:t.duration)||D[e.type],style:{...t.style,...null==(a=t[e.type])?void 0:a.style,...e.style}}});return{...r,toasts:o}})(t,e),i=(0,a.useRef)(new Map).current,o=(0,a.useCallback)((t,e=z)=>{if(i.has(t))return;let r=setTimeout(()=>{i.delete(t),n({type:4,toastId:t})},e);i.set(t,r)},[]);(0,a.useEffect)(()=>{if(s)return;let t=Date.now(),a=r.map(r=>{if(r.duration===1/0)return;let s=(r.duration||0)+r.pauseDuration-(t-r.createdAt);if(s<0){r.visible&&P.dismiss(r.id);return}return setTimeout(()=>P.dismiss(r.id,e),s)});return()=>{a.forEach(t=>t&&clearTimeout(t))}},[r,s,e]);let n=(0,a.useCallback)($(e),[e]),l=(0,a.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),u=(0,a.useCallback)((t,e)=>{n({type:1,toast:{id:t,height:e}})},[n]),c=(0,a.useCallback)(()=>{s&&n({type:6,time:Date.now()})},[s,n]),d=(0,a.useCallback)((t,e)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:i}=e||{},o=r.filter(e=>(e.position||i)===(t.position||i)&&e.height),n=o.findIndex(e=>e.id===t.id),l=o.filter((t,e)=>e<n&&t.visible).length;return o.filter(t=>t.visible).slice(...s?[l+1]:[0,l]).reduce((t,e)=>t+(e.height||0)+a,0)},[r]);return(0,a.useEffect)(()=>{r.forEach(t=>{if(t.dismissed)o(t.id,t.removeDelay);else{let e=i.get(t.id);e&&(clearTimeout(e),i.delete(t.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}})(r,o);return a.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(r=>{let o,n,l=r.position||e,u=c.calculateOffset(r,{reverseOrder:t,gutter:s,defaultPosition:e}),d=(o=l.includes("top"),n=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${u*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...n});return a.createElement(ts,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ta:"",style:d},"custom"===r.type?E(r.message,r):i?i(r):a.createElement(tr,{toast:r,position:l}))}))};t.s(["Toaster",()=>ti,"default",()=>P],5766)},20896,t=>{t.v({actions:"NoteForm-module__XA_SlW__actions",cancelButton:"NoteForm-module__XA_SlW__cancelButton",error:"NoteForm-module__XA_SlW__error",form:"NoteForm-module__XA_SlW__form",formGroup:"NoteForm-module__XA_SlW__formGroup",input:"NoteForm-module__XA_SlW__input",select:"NoteForm-module__XA_SlW__select",submitButton:"NoteForm-module__XA_SlW__submitButton",textarea:"NoteForm-module__XA_SlW__textarea"})},85762,t=>{"use strict";let e,r;var s=t.i(43476),a=t.i(54616),i=t.i(12598),o=t.i(20896),n=t.i(5766),l=t.i(18566),u=t.i(68834);let c=t=>e=>{try{let r=t(e);if(r instanceof Promise)return r;return{then:t=>c(t)(r),catch(t){return this}}}catch(t){return{then(t){return this},catch:e=>c(e)(t)}}},d={title:"",content:"",tag:"Todo"},m=(0,u.create)()((e=t=>({draft:d,setDraft:e=>t({draft:e}),clearDraft:()=>t({draft:d})}),r={name:"draft",partialize:t=>({draft:t.draft})},(t,s,a)=>{let i,o={storage:function(t,e){let r;try{r=t()}catch(t){return}return{getItem:t=>{var e;let s=t=>null===t?null:JSON.parse(t,void 0),a=null!=(e=r.getItem(t))?e:null;return a instanceof Promise?a.then(s):s(a)},setItem:(t,e)=>r.setItem(t,JSON.stringify(e,void 0)),removeItem:t=>r.removeItem(t)}}(()=>localStorage),partialize:t=>t,version:0,merge:(t,e)=>({...e,...t}),...r},n=!1,l=new Set,u=new Set,d=o.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),t(...e)},s,a);let m=()=>{let t=o.partialize({...s()});return d.setItem(o.name,{state:t,version:o.version})},p=a.setState;a.setState=(t,e)=>(p(t,e),m());let h=e((...e)=>(t(...e),m()),s,a);a.getInitialState=()=>h;let f=()=>{var e,r;if(!d)return;n=!1,l.forEach(t=>{var e;return t(null!=(e=s())?e:h)});let a=(null==(r=o.onRehydrateStorage)?void 0:r.call(o,null!=(e=s())?e:h))||void 0;return c(d.getItem.bind(d))(o.name).then(t=>{if(t)if("number"!=typeof t.version||t.version===o.version)return[!1,t.state];else{if(o.migrate){let e=o.migrate(t.state,t.version);return e instanceof Promise?e.then(t=>[!0,t]):[!0,e]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var r;let[a,n]=e;if(t(i=o.merge(n,null!=(r=s())?r:h),!0),a)return m()}).then(()=>{null==a||a(i,void 0),i=s(),n=!0,u.forEach(t=>t(i))}).catch(t=>{null==a||a(void 0,t)})};return a.persist={setOptions:t=>{o={...o,...t},t.storage&&(d=t.storage)},clearStorage:()=>{null==d||d.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>f(),hasHydrated:()=>n,onHydrate:t=>(l.add(t),()=>{l.delete(t)}),onFinishHydration:t=>(u.add(t),()=>{u.delete(t)})},o.skipHydration||f(),i||h}));var p=t.i(19152);let h=["Todo","Work","Personal","Meeting","Shopping","Ideas","Travel","Finance","Health","Important"];t.s(["default",0,()=>{let t=(0,l.useRouter)(),e=(0,i.useQueryClient)(),{setDraft:r,clearDraft:u,draft:c}=m(),d=(0,a.useMutation)({mutationFn:t=>(0,p.createNote)(t),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]}),n.default.success("You have successfully created a new note!"),u(),t.push("/notes/filter/All")},onError:()=>{n.default.error("Something went wrong...try again.")}}),f=t=>{let e=t.target.value,s=t.target.name;r({...c,[s]:e})};return(0,s.jsxs)("form",{className:o.default.form,onSubmit:t=>{let e;t.preventDefault(),(e=Object.fromEntries(new FormData(t.currentTarget)))&&d.mutate({title:e.title,content:e.content,tag:c?.tag||e.tag||h[0]})},children:[(0,s.jsxs)("div",{className:o.default.formGroup,children:[(0,s.jsx)("label",{htmlFor:"title",children:"Title"}),(0,s.jsx)("input",{value:c?.title??"",id:"title",type:"text",name:"title",className:o.default.input,onChange:f,required:!0})]}),(0,s.jsxs)("div",{className:o.default.formGroup,children:[(0,s.jsx)("label",{htmlFor:"content",children:"Content"}),(0,s.jsx)("textarea",{value:c?.content??"",onChange:f,id:"content",name:"content",className:o.default.textarea,rows:8,required:!0})]}),(0,s.jsxs)("div",{className:o.default.formGroup,children:[(0,s.jsx)("label",{htmlFor:"tag",children:"Tag"}),(0,s.jsx)("select",{value:c?.tag??h[0],id:"tag",name:"tag",className:o.default.select,onChange:f,children:h.map(t=>(0,s.jsx)("option",{value:t,children:t},t))})]}),(0,s.jsxs)("div",{className:o.default.actions,children:[(0,s.jsx)("button",{type:"button",className:o.default.cancelButton,onClick:()=>{t.push("/notes/filter/All")},children:"Cancel"}),(0,s.jsx)("button",{type:"submit",className:o.default.submitButton,children:"Create note"})]})]})}],85762)}]);