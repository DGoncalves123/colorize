(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function Z_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var V0={exports:{}},is={},H0={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),X_=Symbol.for("react.portal"),J_=Symbol.for("react.fragment"),ex=Symbol.for("react.strict_mode"),tx=Symbol.for("react.profiler"),rx=Symbol.for("react.provider"),nx=Symbol.for("react.context"),ix=Symbol.for("react.forward_ref"),ax=Symbol.for("react.suspense"),ox=Symbol.for("react.memo"),sx=Symbol.for("react.lazy"),ff=Symbol.iterator;function lx(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,K0={};function ci(e,t,r){this.props=e,this.context=t,this.refs=K0,this.updater=r||q0}ci.prototype.isReactComponent={};ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Q0(){}Q0.prototype=ci.prototype;function xd(e,t,r){this.props=e,this.context=t,this.refs=K0,this.updater=r||q0}var bd=xd.prototype=new Q0;bd.constructor=xd;G0(bd,ci.prototype);bd.isPureReactComponent=!0;var hf=Array.isArray,Y0=Object.prototype.hasOwnProperty,Sd={current:null},Z0={key:!0,ref:!0,__self:!0,__source:!0};function X0(e,t,r){var n,i={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Y0.call(t,n)&&!Z0.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:ha,type:e,key:a,ref:o,props:i,_owner:Sd.current}}function ux(e,t){return{$$typeof:ha,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function kd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ha}function dx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var mf=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dx(""+e.key):t.toString(36)}function co(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ha:case X_:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+Gs(o,0):n,hf(i)?(r="",e!=null&&(r=e.replace(mf,"$&/")+"/"),co(i,t,r,"",function(d){return d})):i!=null&&(kd(i)&&(i=ux(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",hf(e))for(var s=0;s<e.length;s++){a=e[s];var l=n+Gs(a,s);o+=co(a,t,r,l,i)}else if(l=lx(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=n+Gs(a,s++),o+=co(a,t,r,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(e,t,r){if(e==null)return e;var n=[],i=0;return co(e,n,"","",function(a){return t.call(r,a,i++)}),n}function cx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},po={transition:null},px={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:po,ReactCurrentOwner:Sd};function J0(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Pa,forEach:function(e,t,r){Pa(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Pa(e,function(){t++}),t},toArray:function(e){return Pa(e,function(t){return t})||[]},only:function(e){if(!kd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=ci;he.Fragment=J_;he.Profiler=tx;he.PureComponent=xd;he.StrictMode=ex;he.Suspense=ax;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=px;he.act=J0;he.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=G0({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Sd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Y0.call(t,l)&&!Z0.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];n.children=s}return{$$typeof:ha,type:e.type,key:i,ref:a,props:n,_owner:o}};he.createContext=function(e){return e={$$typeof:nx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rx,_context:e},e.Consumer=e};he.createElement=X0;he.createFactory=function(e){var t=X0.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:ix,render:e}};he.isValidElement=kd;he.lazy=function(e){return{$$typeof:sx,_payload:{_status:-1,_result:e},_init:cx}};he.memo=function(e,t){return{$$typeof:ox,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=po.transition;po.transition={};try{e()}finally{po.transition=t}};he.unstable_act=J0;he.useCallback=function(e,t){return ct.current.useCallback(e,t)};he.useContext=function(e){return ct.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};he.useEffect=function(e,t){return ct.current.useEffect(e,t)};he.useId=function(){return ct.current.useId()};he.useImperativeHandle=function(e,t,r){return ct.current.useImperativeHandle(e,t,r)};he.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return ct.current.useMemo(e,t)};he.useReducer=function(e,t,r){return ct.current.useReducer(e,t,r)};he.useRef=function(e){return ct.current.useRef(e)};he.useState=function(e){return ct.current.useState(e)};he.useSyncExternalStore=function(e,t,r){return ct.current.useSyncExternalStore(e,t,r)};he.useTransition=function(){return ct.current.useTransition()};he.version="18.3.1";H0.exports=he;var me=H0.exports;const fx=Z_(me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx=me,mx=Symbol.for("react.element"),gx=Symbol.for("react.fragment"),yx=Object.prototype.hasOwnProperty,vx=hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wx={key:!0,ref:!0,__self:!0,__source:!0};function ey(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)yx.call(t,n)&&!wx.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:mx,type:e,key:a,ref:o,props:i,_owner:vx.current}}is.Fragment=gx;is.jsx=ey;is.jsxs=ey;V0.exports=is;var ae=V0.exports,ty={exports:{}},Et={},ry={exports:{}},ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,j){var H=R.length;R.push(j);e:for(;0<H;){var A=H-1>>>1,N=R[A];if(0<i(N,j))R[A]=j,R[H]=N,H=A;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var j=R[0],H=R.pop();if(H!==j){R[0]=H;e:for(var A=0,N=R.length,ee=N>>>1;A<ee;){var de=2*(A+1)-1,Se=R[de],we=de+1,wt=R[we];if(0>i(Se,H))we<N&&0>i(wt,Se)?(R[A]=wt,R[we]=H,A=we):(R[A]=Se,R[de]=H,A=de);else if(we<N&&0>i(wt,H))R[A]=wt,R[we]=H,A=we;else break e}}return j}function i(R,j){var H=R.sortIndex-j.sortIndex;return H!==0?H:R.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],d=[],p=1,f=null,u=3,g=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(R){for(var j=r(d);j!==null;){if(j.callback===null)n(d);else if(j.startTime<=R)n(d),j.sortIndex=j.expirationTime,t(l,j);else break;j=r(d)}}function b(R){if(w=!1,_(R),!v)if(r(l)!==null)v=!0,re(E);else{var j=r(d);j!==null&&se(b,j.startTime-R)}}function E(R,j){v=!1,w&&(w=!1,y(z),z=-1),g=!0;var H=u;try{for(_(j),f=r(l);f!==null&&(!(f.expirationTime>j)||R&&!Z());){var A=f.callback;if(typeof A=="function"){f.callback=null,u=f.priorityLevel;var N=A(f.expirationTime<=j);j=e.unstable_now(),typeof N=="function"?f.callback=N:f===r(l)&&n(l),_(j)}else n(l);f=r(l)}if(f!==null)var ee=!0;else{var de=r(d);de!==null&&se(b,de.startTime-j),ee=!1}return ee}finally{f=null,u=H,g=!1}}var I=!1,C=null,z=-1,U=5,D=-1;function Z(){return!(e.unstable_now()-D<U)}function ie(){if(C!==null){var R=e.unstable_now();D=R;var j=!0;try{j=C(!0,R)}finally{j?K():(I=!1,C=null)}}else I=!1}var K;if(typeof m=="function")K=function(){m(ie)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,G=ce.port2;ce.port1.onmessage=ie,K=function(){G.postMessage(null)}}else K=function(){S(ie,0)};function re(R){C=R,I||(I=!0,K())}function se(R,j){z=S(function(){R(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,re(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(R){switch(u){case 1:case 2:case 3:var j=3;break;default:j=u}var H=u;u=j;try{return R()}finally{u=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=u;u=R;try{return j()}finally{u=H}},e.unstable_scheduleCallback=function(R,j,H){var A=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?A+H:A):H=A,R){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=H+N,R={id:p++,callback:j,priorityLevel:R,startTime:H,expirationTime:N,sortIndex:-1},H>A?(R.sortIndex=H,t(d,R),r(l)===null&&R===r(d)&&(w?(y(z),z=-1):w=!0,se(b,H-A))):(R.sortIndex=N,t(l,R),v||g||(v=!0,re(E))),R},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(R){var j=u;return function(){var H=u;u=j;try{return R.apply(this,arguments)}finally{u=H}}}})(ny);ry.exports=ny;var $x=ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=me,kt=$x;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iy=new Set,Qi={};function Sn(e,t){ri(e,t),ri(e+"Capture",t)}function ri(e,t){for(Qi[e]=t,e=0;e<t.length;e++)iy.add(t[e])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=Object.prototype.hasOwnProperty,xx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gf={},yf={};function bx(e){return mu.call(yf,e)?!0:mu.call(gf,e)?!1:xx.test(e)?yf[e]=!0:(gf[e]=!0,!1)}function Sx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kx(e,t,r,n){if(t===null||typeof t>"u"||Sx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,r,n,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function Cd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ed,Cd);Je[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ed,Cd);Je[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ed,Cd);Je[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Td(e,t,r,n){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kx(t,r,i,n)&&(r=null),n||i===null?bx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var _r=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),oy=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),yu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),sy=Symbol.for("react.offscreen"),vf=Symbol.iterator;function mi(e){return e===null||typeof e!="object"?null:(e=vf&&e[vf]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Ks;function Ai(e){if(Ks===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ks=t&&t[1]||""}return`
`+Ks+e}var Qs=!1;function Ys(e,t){if(!e||Qs)return"";Qs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Qs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ai(e):""}function Ex(e){switch(e.tag){case 5:return Ai(e.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 2:case 15:return e=Ys(e.type,!1),e;case 11:return e=Ys(e.type.render,!1),e;case 1:return e=Ys(e.type,!0),e;default:return""}}function wu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Mn:return"Portal";case gu:return"Profiler";case Id:return"StrictMode";case yu:return"Suspense";case vu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oy:return(e.displayName||"Context")+".Consumer";case ay:return(e._context.displayName||"Context")+".Provider";case zd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ad:return t=e.displayName||null,t!==null?t:wu(e.type)||"Memo";case Or:t=e._payload,e=e._init;try{return wu(e(t))}catch{}}return null}function Cx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(t);case 8:return t===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ly(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tx(e){var t=ly(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ba(e){e._valueTracker||(e._valueTracker=Tx(e))}function uy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ly(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $u(e,t){var r=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function wf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=qr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dy(e,t){t=t.checked,t!=null&&Td(e,"checked",t,!1)}function _u(e,t){dy(e,t);var r=qr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xu(e,t.type,r):t.hasOwnProperty("defaultValue")&&xu(e,t.type,qr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $f(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function xu(e,t,r){(t!=="number"||ko(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Oi=Array.isArray;function Yn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+qr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _f(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(F(92));if(Oi(r)){if(1<r.length)throw Error(F(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:qr(r)}}function cy(e,t){var r=qr(t.value),n=qr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function xf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function py(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?py(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Da,fy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yi(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ix=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(e){Ix.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ui[t]=Ui[e]})});function hy(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ui.hasOwnProperty(e)&&Ui[e]?(""+t).trim():t+"px"}function my(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=hy(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var zx=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(e,t){if(t){if(zx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Eu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=null;function Od(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tu=null,Zn=null,Xn=null;function bf(e){if(e=ya(e)){if(typeof Tu!="function")throw Error(F(280));var t=e.stateNode;t&&(t=us(t),Tu(e.stateNode,e.type,t))}}function gy(e){Zn?Xn?Xn.push(e):Xn=[e]:Zn=e}function yy(){if(Zn){var e=Zn,t=Xn;if(Xn=Zn=null,bf(e),t)for(e=0;e<t.length;e++)bf(t[e])}}function vy(e,t){return e(t)}function wy(){}var Zs=!1;function $y(e,t,r){if(Zs)return e(t,r);Zs=!0;try{return vy(e,t,r)}finally{Zs=!1,(Zn!==null||Xn!==null)&&(wy(),yy())}}function Zi(e,t){var r=e.stateNode;if(r===null)return null;var n=us(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(F(231,t,typeof r));return r}var Iu=!1;if(yr)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{Iu=!1}function Ax(e,t,r,n,i,a,o,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(p){this.onError(p)}}var ji=!1,Eo=null,Co=!1,zu=null,Ox={onError:function(e){ji=!0,Eo=e}};function Rx(e,t,r,n,i,a,o,s,l){ji=!1,Eo=null,Ax.apply(Ox,arguments)}function Px(e,t,r,n,i,a,o,s,l){if(Rx.apply(this,arguments),ji){if(ji){var d=Eo;ji=!1,Eo=null}else throw Error(F(198));Co||(Co=!0,zu=d)}}function kn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function _y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sf(e){if(kn(e)!==e)throw Error(F(188))}function Mx(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(F(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Sf(i),e;if(a===n)return Sf(i),t;a=a.sibling}throw Error(F(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o)throw Error(F(189))}}if(r.alternate!==n)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?e:t}function xy(e){return e=Mx(e),e!==null?by(e):null}function by(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=by(e);if(t!==null)return t;e=e.sibling}return null}var Sy=kt.unstable_scheduleCallback,kf=kt.unstable_cancelCallback,Bx=kt.unstable_shouldYield,Dx=kt.unstable_requestPaint,De=kt.unstable_now,Nx=kt.unstable_getCurrentPriorityLevel,Rd=kt.unstable_ImmediatePriority,ky=kt.unstable_UserBlockingPriority,To=kt.unstable_NormalPriority,Lx=kt.unstable_LowPriority,Ey=kt.unstable_IdlePriority,as=null,or=null;function Ux(e){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(as,e,void 0,(e.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:Fx,jx=Math.log,Wx=Math.LN2;function Fx(e){return e>>>=0,e===0?32:31-(jx(e)/Wx|0)|0}var Na=64,La=4194304;function Ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Io(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~i;s!==0?n=Ri(s):(a&=o,a!==0&&(n=Ri(a)))}else o=r&~i,o!==0?n=Ri(o):a!==0&&(n=Ri(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Kt(t),i=1<<r,n|=e[r],t&=~i;return n}function Vx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hx(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Kt(a),s=1<<o,l=i[o];l===-1?(!(s&r)||s&n)&&(i[o]=Vx(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Au(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cy(){var e=Na;return Na<<=1,!(Na&4194240)&&(Na=64),e}function Xs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ma(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Kt(t),e[t]=r}function qx(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Kt(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Pd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Kt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var xe=0;function Ty(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Iy,Md,zy,Ay,Oy,Ou=!1,Ua=[],Nr=null,Lr=null,Ur=null,Xi=new Map,Ji=new Map,Pr=[],Gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(t.pointerId)}}function yi(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ya(t),t!==null&&Md(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kx(e,t,r,n,i){switch(t){case"focusin":return Nr=yi(Nr,e,t,r,n,i),!0;case"dragenter":return Lr=yi(Lr,e,t,r,n,i),!0;case"mouseover":return Ur=yi(Ur,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Xi.set(a,yi(Xi.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Ji.set(a,yi(Ji.get(a)||null,e,t,r,n,i)),!0}return!1}function Ry(e){var t=hn(e.target);if(t!==null){var r=kn(t);if(r!==null){if(t=r.tag,t===13){if(t=_y(r),t!==null){e.blockedOn=t,Oy(e.priority,function(){zy(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ru(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Cu=n,r.target.dispatchEvent(n),Cu=null}else return t=ya(r),t!==null&&Md(t),e.blockedOn=r,!1;t.shift()}return!0}function Cf(e,t,r){fo(e)&&r.delete(t)}function Qx(){Ou=!1,Nr!==null&&fo(Nr)&&(Nr=null),Lr!==null&&fo(Lr)&&(Lr=null),Ur!==null&&fo(Ur)&&(Ur=null),Xi.forEach(Cf),Ji.forEach(Cf)}function vi(e,t){e.blockedOn===t&&(e.blockedOn=null,Ou||(Ou=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,Qx)))}function ea(e){function t(i){return vi(i,e)}if(0<Ua.length){vi(Ua[0],e);for(var r=1;r<Ua.length;r++){var n=Ua[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Nr!==null&&vi(Nr,e),Lr!==null&&vi(Lr,e),Ur!==null&&vi(Ur,e),Xi.forEach(t),Ji.forEach(t),r=0;r<Pr.length;r++)n=Pr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Pr.length&&(r=Pr[0],r.blockedOn===null);)Ry(r),r.blockedOn===null&&Pr.shift()}var Jn=_r.ReactCurrentBatchConfig,zo=!0;function Yx(e,t,r,n){var i=xe,a=Jn.transition;Jn.transition=null;try{xe=1,Bd(e,t,r,n)}finally{xe=i,Jn.transition=a}}function Zx(e,t,r,n){var i=xe,a=Jn.transition;Jn.transition=null;try{xe=4,Bd(e,t,r,n)}finally{xe=i,Jn.transition=a}}function Bd(e,t,r,n){if(zo){var i=Ru(e,t,r,n);if(i===null)ll(e,t,n,Ao,r),Ef(e,n);else if(Kx(i,e,t,r,n))n.stopPropagation();else if(Ef(e,n),t&4&&-1<Gx.indexOf(e)){for(;i!==null;){var a=ya(i);if(a!==null&&Iy(a),a=Ru(e,t,r,n),a===null&&ll(e,t,n,Ao,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else ll(e,t,n,null,r)}}var Ao=null;function Ru(e,t,r,n){if(Ao=null,e=Od(n),e=hn(e),e!==null)if(t=kn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=_y(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ao=e,null}function Py(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nx()){case Rd:return 1;case ky:return 4;case To:case Lx:return 16;case Ey:return 536870912;default:return 16}default:return 16}}var Br=null,Dd=null,ho=null;function My(){if(ho)return ho;var e,t=Dd,r=t.length,n,i="value"in Br?Br.value:Br.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[a-n];n++);return ho=i.slice(e,1<n?1-n:void 0)}function mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ja(){return!0}function Tf(){return!1}function Ct(e){function t(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ja:Tf,this.isPropagationStopped=Tf,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),t}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=Ct(pi),ga=Pe({},pi,{view:0,detail:0}),Xx=Ct(ga),Js,el,wi,os=Pe({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ld,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(Js=e.screenX-wi.screenX,el=e.screenY-wi.screenY):el=Js=0,wi=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:el}}),If=Ct(os),Jx=Pe({},os,{dataTransfer:0}),eb=Ct(Jx),tb=Pe({},ga,{relatedTarget:0}),tl=Ct(tb),rb=Pe({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),nb=Ct(rb),ib=Pe({},pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ab=Ct(ib),ob=Pe({},pi,{data:0}),zf=Ct(ob),sb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ub={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function db(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ub[e])?!!t[e]:!1}function Ld(){return db}var cb=Pe({},ga,{key:function(e){if(e.key){var t=sb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ld,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pb=Ct(cb),fb=Pe({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Af=Ct(fb),hb=Pe({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ld}),mb=Ct(hb),gb=Pe({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),yb=Ct(gb),vb=Pe({},os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wb=Ct(vb),$b=[9,13,27,32],Ud=yr&&"CompositionEvent"in window,Wi=null;yr&&"documentMode"in document&&(Wi=document.documentMode);var _b=yr&&"TextEvent"in window&&!Wi,By=yr&&(!Ud||Wi&&8<Wi&&11>=Wi),Of=" ",Rf=!1;function Dy(e,t){switch(e){case"keyup":return $b.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ny(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function xb(e,t){switch(e){case"compositionend":return Ny(t);case"keypress":return t.which!==32?null:(Rf=!0,Of);case"textInput":return e=t.data,e===Of&&Rf?null:e;default:return null}}function bb(e,t){if(Dn)return e==="compositionend"||!Ud&&Dy(e,t)?(e=My(),ho=Dd=Br=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return By&&t.locale!=="ko"?null:t.data;default:return null}}var Sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sb[e.type]:t==="textarea"}function Ly(e,t,r,n){gy(n),t=Oo(t,"onChange"),0<t.length&&(r=new Nd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Fi=null,ta=null;function kb(e){Yy(e,0)}function ss(e){var t=Un(e);if(uy(t))return e}function Eb(e,t){if(e==="change")return t}var Uy=!1;if(yr){var rl;if(yr){var nl="oninput"in document;if(!nl){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),nl=typeof Mf.oninput=="function"}rl=nl}else rl=!1;Uy=rl&&(!document.documentMode||9<document.documentMode)}function Bf(){Fi&&(Fi.detachEvent("onpropertychange",jy),ta=Fi=null)}function jy(e){if(e.propertyName==="value"&&ss(ta)){var t=[];Ly(t,ta,e,Od(e)),$y(kb,t)}}function Cb(e,t,r){e==="focusin"?(Bf(),Fi=t,ta=r,Fi.attachEvent("onpropertychange",jy)):e==="focusout"&&Bf()}function Tb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ss(ta)}function Ib(e,t){if(e==="click")return ss(t)}function zb(e,t){if(e==="input"||e==="change")return ss(t)}function Ab(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zt=typeof Object.is=="function"?Object.is:Ab;function ra(e,t){if(Zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!mu.call(t,i)||!Zt(e[i],t[i]))return!1}return!0}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nf(e,t){var r=Df(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Df(r)}}function Wy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fy(){for(var e=window,t=ko();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ko(e.document)}return t}function jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ob(e){var t=Fy(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Wy(r.ownerDocument.documentElement,r)){if(n!==null&&jd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=Nf(r,a);var o=Nf(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rb=yr&&"documentMode"in document&&11>=document.documentMode,Nn=null,Pu=null,Vi=null,Mu=!1;function Lf(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Mu||Nn==null||Nn!==ko(n)||(n=Nn,"selectionStart"in n&&jd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vi&&ra(Vi,n)||(Vi=n,n=Oo(Pu,"onSelect"),0<n.length&&(t=new Nd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Nn)))}function Wa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ln={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},il={},Vy={};yr&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function ls(e){if(il[e])return il[e];if(!Ln[e])return e;var t=Ln[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vy)return il[e]=t[r];return e}var Hy=ls("animationend"),qy=ls("animationiteration"),Gy=ls("animationstart"),Ky=ls("transitionend"),Qy=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(e,t){Qy.set(e,t),Sn(t,[e])}for(var al=0;al<Uf.length;al++){var ol=Uf[al],Pb=ol.toLowerCase(),Mb=ol[0].toUpperCase()+ol.slice(1);Xr(Pb,"on"+Mb)}Xr(Hy,"onAnimationEnd");Xr(qy,"onAnimationIteration");Xr(Gy,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(Ky,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function jf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Px(n,t,void 0,e),e.currentTarget=null}function Yy(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;jf(i,s,d),a=l}else for(o=0;o<n.length;o++){if(s=n[o],l=s.instance,d=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;jf(i,s,d),a=l}}}if(Co)throw e=zu,Co=!1,zu=null,e}function Ee(e,t){var r=t[Uu];r===void 0&&(r=t[Uu]=new Set);var n=e+"__bubble";r.has(n)||(Zy(t,e,2,!1),r.add(n))}function sl(e,t,r){var n=0;t&&(n|=4),Zy(r,e,n,t)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function na(e){if(!e[Fa]){e[Fa]=!0,iy.forEach(function(r){r!=="selectionchange"&&(Bb.has(r)||sl(r,!1,e),sl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fa]||(t[Fa]=!0,sl("selectionchange",!1,t))}}function Zy(e,t,r,n){switch(Py(t)){case 1:var i=Yx;break;case 4:i=Zx;break;default:i=Bd}r=i.bind(null,t,r,e),i=void 0,!Iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ll(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=hn(s),o===null)return;if(l=o.tag,l===5||l===6){n=a=o;continue e}s=s.parentNode}}n=n.return}$y(function(){var d=a,p=Od(r),f=[];e:{var u=Qy.get(e);if(u!==void 0){var g=Nd,v=e;switch(e){case"keypress":if(mo(r)===0)break e;case"keydown":case"keyup":g=pb;break;case"focusin":v="focus",g=tl;break;case"focusout":v="blur",g=tl;break;case"beforeblur":case"afterblur":g=tl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=eb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mb;break;case Hy:case qy:case Gy:g=nb;break;case Ky:g=yb;break;case"scroll":g=Xx;break;case"wheel":g=wb;break;case"copy":case"cut":case"paste":g=ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Af}var w=(t&4)!==0,S=!w&&e==="scroll",y=w?u!==null?u+"Capture":null:u;w=[];for(var m=d,_;m!==null;){_=m;var b=_.stateNode;if(_.tag===5&&b!==null&&(_=b,y!==null&&(b=Zi(m,y),b!=null&&w.push(ia(m,b,_)))),S)break;m=m.return}0<w.length&&(u=new g(u,v,null,r,p),f.push({event:u,listeners:w}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",u&&r!==Cu&&(v=r.relatedTarget||r.fromElement)&&(hn(v)||v[vr]))break e;if((g||u)&&(u=p.window===p?p:(u=p.ownerDocument)?u.defaultView||u.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=d,v=v?hn(v):null,v!==null&&(S=kn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(w=If,b="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=Af,b="onPointerLeave",y="onPointerEnter",m="pointer"),S=g==null?u:Un(g),_=v==null?u:Un(v),u=new w(b,m+"leave",g,r,p),u.target=S,u.relatedTarget=_,b=null,hn(p)===d&&(w=new w(y,m+"enter",v,r,p),w.target=_,w.relatedTarget=S,b=w),S=b,g&&v)t:{for(w=g,y=v,m=0,_=w;_;_=An(_))m++;for(_=0,b=y;b;b=An(b))_++;for(;0<m-_;)w=An(w),m--;for(;0<_-m;)y=An(y),_--;for(;m--;){if(w===y||y!==null&&w===y.alternate)break t;w=An(w),y=An(y)}w=null}else w=null;g!==null&&Wf(f,u,g,w,!1),v!==null&&S!==null&&Wf(f,S,v,w,!0)}}e:{if(u=d?Un(d):window,g=u.nodeName&&u.nodeName.toLowerCase(),g==="select"||g==="input"&&u.type==="file")var E=Eb;else if(Pf(u))if(Uy)E=zb;else{E=Tb;var I=Cb}else(g=u.nodeName)&&g.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=Ib);if(E&&(E=E(e,d))){Ly(f,E,r,p);break e}I&&I(e,u,d),e==="focusout"&&(I=u._wrapperState)&&I.controlled&&u.type==="number"&&xu(u,"number",u.value)}switch(I=d?Un(d):window,e){case"focusin":(Pf(I)||I.contentEditable==="true")&&(Nn=I,Pu=d,Vi=null);break;case"focusout":Vi=Pu=Nn=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Lf(f,r,p);break;case"selectionchange":if(Rb)break;case"keydown":case"keyup":Lf(f,r,p)}var C;if(Ud)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Dn?Dy(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(By&&r.locale!=="ko"&&(Dn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Dn&&(C=My()):(Br=p,Dd="value"in Br?Br.value:Br.textContent,Dn=!0)),I=Oo(d,z),0<I.length&&(z=new zf(z,e,null,r,p),f.push({event:z,listeners:I}),C?z.data=C:(C=Ny(r),C!==null&&(z.data=C)))),(C=_b?xb(e,r):bb(e,r))&&(d=Oo(d,"onBeforeInput"),0<d.length&&(p=new zf("onBeforeInput","beforeinput",null,r,p),f.push({event:p,listeners:d}),p.data=C))}Yy(f,t)})}function ia(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Oo(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Zi(e,r),a!=null&&n.unshift(ia(e,a,i)),a=Zi(e,t),a!=null&&n.push(ia(e,a,i))),e=e.return}return n}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wf(e,t,r,n,i){for(var a=t._reactName,o=[];r!==null&&r!==n;){var s=r,l=s.alternate,d=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&d!==null&&(s=d,i?(l=Zi(r,a),l!=null&&o.unshift(ia(r,l,s))):i||(l=Zi(r,a),l!=null&&o.push(ia(r,l,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Db=/\r\n?/g,Nb=/\u0000|\uFFFD/g;function Ff(e){return(typeof e=="string"?e:""+e).replace(Db,`
`).replace(Nb,"")}function Va(e,t,r){if(t=Ff(t),Ff(e)!==t&&r)throw Error(F(425))}function Ro(){}var Bu=null,Du=null;function Nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(jb)}:Lu;function jb(e){setTimeout(function(){throw e})}function ul(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),ea(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);ea(t)}function jr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var fi=Math.random().toString(36).slice(2),ar="__reactFiber$"+fi,aa="__reactProps$"+fi,vr="__reactContainer$"+fi,Uu="__reactEvents$"+fi,Wb="__reactListeners$"+fi,Fb="__reactHandles$"+fi;function hn(e){var t=e[ar];if(t)return t;for(var r=e.parentNode;r;){if(t=r[vr]||r[ar]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Hf(e);e!==null;){if(r=e[ar])return r;e=Hf(e)}return t}e=r,r=e.parentNode}return null}function ya(e){return e=e[ar]||e[vr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function us(e){return e[aa]||null}var ju=[],jn=-1;function Jr(e){return{current:e}}function Ce(e){0>jn||(e.current=ju[jn],ju[jn]=null,jn--)}function ke(e,t){jn++,ju[jn]=e.current,e.current=t}var Gr={},ot=Jr(Gr),gt=Jr(!1),wn=Gr;function ni(e,t){var r=e.type.contextTypes;if(!r)return Gr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function yt(e){return e=e.childContextTypes,e!=null}function Po(){Ce(gt),Ce(ot)}function qf(e,t,r){if(ot.current!==Gr)throw Error(F(168));ke(ot,t),ke(gt,r)}function Xy(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(F(108,Cx(e)||"Unknown",i));return Pe({},r,n)}function Mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,wn=ot.current,ke(ot,e),ke(gt,gt.current),!0}function Gf(e,t,r){var n=e.stateNode;if(!n)throw Error(F(169));r?(e=Xy(e,t,wn),n.__reactInternalMemoizedMergedChildContext=e,Ce(gt),Ce(ot),ke(ot,e)):Ce(gt),ke(gt,r)}var fr=null,ds=!1,dl=!1;function Jy(e){fr===null?fr=[e]:fr.push(e)}function Vb(e){ds=!0,Jy(e)}function en(){if(!dl&&fr!==null){dl=!0;var e=0,t=xe;try{var r=fr;for(xe=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}fr=null,ds=!1}catch(i){throw fr!==null&&(fr=fr.slice(e+1)),Sy(Rd,en),i}finally{xe=t,dl=!1}}return null}var Wn=[],Fn=0,Bo=null,Do=0,Ot=[],Rt=0,$n=null,hr=1,mr="";function dn(e,t){Wn[Fn++]=Do,Wn[Fn++]=Bo,Bo=e,Do=t}function ev(e,t,r){Ot[Rt++]=hr,Ot[Rt++]=mr,Ot[Rt++]=$n,$n=e;var n=hr;e=mr;var i=32-Kt(n)-1;n&=~(1<<i),r+=1;var a=32-Kt(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,hr=1<<32-Kt(t)+i|r<<i|n,mr=a+e}else hr=1<<a|r<<i|n,mr=e}function Wd(e){e.return!==null&&(dn(e,1),ev(e,1,0))}function Fd(e){for(;e===Bo;)Bo=Wn[--Fn],Wn[Fn]=null,Do=Wn[--Fn],Wn[Fn]=null;for(;e===$n;)$n=Ot[--Rt],Ot[Rt]=null,mr=Ot[--Rt],Ot[Rt]=null,hr=Ot[--Rt],Ot[Rt]=null}var bt=null,xt=null,Ie=!1,qt=null;function tv(e,t){var r=Pt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Kf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,xt=jr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=$n!==null?{id:hr,overflow:mr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Pt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,bt=e,xt=null,!0):!1;default:return!1}}function Wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fu(e){if(Ie){var t=xt;if(t){var r=t;if(!Kf(e,t)){if(Wu(e))throw Error(F(418));t=jr(r.nextSibling);var n=bt;t&&Kf(e,t)?tv(n,r):(e.flags=e.flags&-4097|2,Ie=!1,bt=e)}}else{if(Wu(e))throw Error(F(418));e.flags=e.flags&-4097|2,Ie=!1,bt=e}}}function Qf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function Ha(e){if(e!==bt)return!1;if(!Ie)return Qf(e),Ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nu(e.type,e.memoizedProps)),t&&(t=xt)){if(Wu(e))throw rv(),Error(F(418));for(;t;)tv(e,t),t=jr(t.nextSibling)}if(Qf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){xt=jr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=bt?jr(e.stateNode.nextSibling):null;return!0}function rv(){for(var e=xt;e;)e=jr(e.nextSibling)}function ii(){xt=bt=null,Ie=!1}function Vd(e){qt===null?qt=[e]:qt.push(e)}var Hb=_r.ReactCurrentBatchConfig;function $i(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var n=r.stateNode}if(!n)throw Error(F(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,e))}return e}function qa(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yf(e){var t=e._init;return t(e._payload)}function nv(e){function t(y,m){if(e){var _=y.deletions;_===null?(y.deletions=[m],y.flags|=16):_.push(m)}}function r(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function n(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=Hr(y,m),y.index=0,y.sibling=null,y}function a(y,m,_){return y.index=_,e?(_=y.alternate,_!==null?(_=_.index,_<m?(y.flags|=2,m):_):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,m,_,b){return m===null||m.tag!==6?(m=yl(_,y.mode,b),m.return=y,m):(m=i(m,_),m.return=y,m)}function l(y,m,_,b){var E=_.type;return E===Bn?p(y,m,_.props.children,b,_.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Or&&Yf(E)===m.type)?(b=i(m,_.props),b.ref=$i(y,m,_),b.return=y,b):(b=xo(_.type,_.key,_.props,null,y.mode,b),b.ref=$i(y,m,_),b.return=y,b)}function d(y,m,_,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=vl(_,y.mode,b),m.return=y,m):(m=i(m,_.children||[]),m.return=y,m)}function p(y,m,_,b,E){return m===null||m.tag!==7?(m=vn(_,y.mode,b,E),m.return=y,m):(m=i(m,_),m.return=y,m)}function f(y,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=yl(""+m,y.mode,_),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ma:return _=xo(m.type,m.key,m.props,null,y.mode,_),_.ref=$i(y,null,m),_.return=y,_;case Mn:return m=vl(m,y.mode,_),m.return=y,m;case Or:var b=m._init;return f(y,b(m._payload),_)}if(Oi(m)||mi(m))return m=vn(m,y.mode,_,null),m.return=y,m;qa(y,m)}return null}function u(y,m,_,b){var E=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:s(y,m,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ma:return _.key===E?l(y,m,_,b):null;case Mn:return _.key===E?d(y,m,_,b):null;case Or:return E=_._init,u(y,m,E(_._payload),b)}if(Oi(_)||mi(_))return E!==null?null:p(y,m,_,b,null);qa(y,_)}return null}function g(y,m,_,b,E){if(typeof b=="string"&&b!==""||typeof b=="number")return y=y.get(_)||null,s(m,y,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ma:return y=y.get(b.key===null?_:b.key)||null,l(m,y,b,E);case Mn:return y=y.get(b.key===null?_:b.key)||null,d(m,y,b,E);case Or:var I=b._init;return g(y,m,_,I(b._payload),E)}if(Oi(b)||mi(b))return y=y.get(_)||null,p(m,y,b,E,null);qa(m,b)}return null}function v(y,m,_,b){for(var E=null,I=null,C=m,z=m=0,U=null;C!==null&&z<_.length;z++){C.index>z?(U=C,C=null):U=C.sibling;var D=u(y,C,_[z],b);if(D===null){C===null&&(C=U);break}e&&C&&D.alternate===null&&t(y,C),m=a(D,m,z),I===null?E=D:I.sibling=D,I=D,C=U}if(z===_.length)return r(y,C),Ie&&dn(y,z),E;if(C===null){for(;z<_.length;z++)C=f(y,_[z],b),C!==null&&(m=a(C,m,z),I===null?E=C:I.sibling=C,I=C);return Ie&&dn(y,z),E}for(C=n(y,C);z<_.length;z++)U=g(C,y,z,_[z],b),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?z:U.key),m=a(U,m,z),I===null?E=U:I.sibling=U,I=U);return e&&C.forEach(function(Z){return t(y,Z)}),Ie&&dn(y,z),E}function w(y,m,_,b){var E=mi(_);if(typeof E!="function")throw Error(F(150));if(_=E.call(_),_==null)throw Error(F(151));for(var I=E=null,C=m,z=m=0,U=null,D=_.next();C!==null&&!D.done;z++,D=_.next()){C.index>z?(U=C,C=null):U=C.sibling;var Z=u(y,C,D.value,b);if(Z===null){C===null&&(C=U);break}e&&C&&Z.alternate===null&&t(y,C),m=a(Z,m,z),I===null?E=Z:I.sibling=Z,I=Z,C=U}if(D.done)return r(y,C),Ie&&dn(y,z),E;if(C===null){for(;!D.done;z++,D=_.next())D=f(y,D.value,b),D!==null&&(m=a(D,m,z),I===null?E=D:I.sibling=D,I=D);return Ie&&dn(y,z),E}for(C=n(y,C);!D.done;z++,D=_.next())D=g(C,y,z,D.value,b),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?z:D.key),m=a(D,m,z),I===null?E=D:I.sibling=D,I=D);return e&&C.forEach(function(ie){return t(y,ie)}),Ie&&dn(y,z),E}function S(y,m,_,b){if(typeof _=="object"&&_!==null&&_.type===Bn&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ma:e:{for(var E=_.key,I=m;I!==null;){if(I.key===E){if(E=_.type,E===Bn){if(I.tag===7){r(y,I.sibling),m=i(I,_.props.children),m.return=y,y=m;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Or&&Yf(E)===I.type){r(y,I.sibling),m=i(I,_.props),m.ref=$i(y,I,_),m.return=y,y=m;break e}r(y,I);break}else t(y,I);I=I.sibling}_.type===Bn?(m=vn(_.props.children,y.mode,b,_.key),m.return=y,y=m):(b=xo(_.type,_.key,_.props,null,y.mode,b),b.ref=$i(y,m,_),b.return=y,y=b)}return o(y);case Mn:e:{for(I=_.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){r(y,m.sibling),m=i(m,_.children||[]),m.return=y,y=m;break e}else{r(y,m);break}else t(y,m);m=m.sibling}m=vl(_,y.mode,b),m.return=y,y=m}return o(y);case Or:return I=_._init,S(y,m,I(_._payload),b)}if(Oi(_))return v(y,m,_,b);if(mi(_))return w(y,m,_,b);qa(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(r(y,m.sibling),m=i(m,_),m.return=y,y=m):(r(y,m),m=yl(_,y.mode,b),m.return=y,y=m),o(y)):r(y,m)}return S}var ai=nv(!0),iv=nv(!1),No=Jr(null),Lo=null,Vn=null,Hd=null;function qd(){Hd=Vn=Lo=null}function Gd(e){var t=No.current;Ce(No),e._currentValue=t}function Vu(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ei(e,t){Lo=e,Hd=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(mt=!0),e.firstContext=null)}function Bt(e){var t=e._currentValue;if(Hd!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(Lo===null)throw Error(F(308));Vn=e,Lo.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var mn=null;function Kd(e){mn===null?mn=[e]:mn.push(e)}function av(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Kd(t)):(r.next=i.next,i.next=r),t.interleaved=r,wr(e,n)}function wr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Rr=!1;function Qd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ov(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ye&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,wr(e,r)}return i=n.interleaved,i===null?(t.next=t,Kd(n)):(t.next=i.next,i.next=t),n.interleaved=t,wr(e,r)}function go(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Pd(e,r)}}function Zf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Uo(e,t,r,n){var i=e.updateQueue;Rr=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,d=l.next;l.next=null,o===null?a=d:o.next=d,o=l;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==o&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,p=d=l=null,s=a;do{var u=s.lane,g=s.eventTime;if((n&u)===u){p!==null&&(p=p.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(u=t,g=r,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,u);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,u=typeof v=="function"?v.call(g,f,u):v,u==null)break e;f=Pe({},f,u);break e;case 2:Rr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=i.effects,u===null?i.effects=[s]:u.push(s))}else g={eventTime:g,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=g,l=f):p=p.next=g,o|=u;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;u=s,s=u.next,u.next=null,i.lastBaseUpdate=u,i.shared.pending=null}}while(!0);if(p===null&&(l=f),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);xn|=o,e.lanes=o,e.memoizedState=f}}function Xf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(F(191,i));i.call(n)}}}var va={},sr=Jr(va),oa=Jr(va),sa=Jr(va);function gn(e){if(e===va)throw Error(F(174));return e}function Yd(e,t){switch(ke(sa,t),ke(oa,e),ke(sr,va),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Su(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Su(t,e)}Ce(sr),ke(sr,t)}function oi(){Ce(sr),Ce(oa),Ce(sa)}function sv(e){gn(sa.current);var t=gn(sr.current),r=Su(t,e.type);t!==r&&(ke(oa,e),ke(sr,r))}function Zd(e){oa.current===e&&(Ce(sr),Ce(oa))}var Oe=Jr(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function Xd(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var yo=_r.ReactCurrentDispatcher,pl=_r.ReactCurrentBatchConfig,_n=0,Re=null,Ve=null,Ge=null,Wo=!1,Hi=!1,la=0,qb=0;function et(){throw Error(F(321))}function Jd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Zt(e[r],t[r]))return!1;return!0}function ec(e,t,r,n,i,a){if(_n=a,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yo.current=e===null||e.memoizedState===null?Yb:Zb,e=r(n,i),Hi){a=0;do{if(Hi=!1,la=0,25<=a)throw Error(F(301));a+=1,Ge=Ve=null,t.updateQueue=null,yo.current=Xb,e=r(n,i)}while(Hi)}if(yo.current=Fo,t=Ve!==null&&Ve.next!==null,_n=0,Ge=Ve=Re=null,Wo=!1,t)throw Error(F(300));return e}function tc(){var e=la!==0;return la=0,e}function ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Re.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Dt(){if(Ve===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=Ge===null?Re.memoizedState:Ge.next;if(t!==null)Ge=t,Ve=e;else{if(e===null)throw Error(F(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ge===null?Re.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function ua(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=Dt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var n=Ve,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var s=o=null,l=null,d=a;do{var p=d.lane;if((_n&p)===p)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=f,o=n):l=l.next=f,Re.lanes|=p,xn|=p}d=d.next}while(d!==null&&d!==a);l===null?o=n:l.next=s,Zt(n,t.memoizedState)||(mt=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Re.lanes|=a,xn|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function hl(e){var t=Dt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Zt(a,t.memoizedState)||(mt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function lv(){}function uv(e,t){var r=Re,n=Dt(),i=t(),a=!Zt(n.memoizedState,i);if(a&&(n.memoizedState=i,mt=!0),n=n.queue,rc(pv.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||Ge!==null&&Ge.memoizedState.tag&1){if(r.flags|=2048,da(9,cv.bind(null,r,n,i,t),void 0,null),Ke===null)throw Error(F(349));_n&30||dv(r,t,i)}return i}function dv(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function cv(e,t,r,n){t.value=r,t.getSnapshot=n,fv(t)&&hv(e)}function pv(e,t,r){return r(function(){fv(t)&&hv(e)})}function fv(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Zt(e,r)}catch{return!0}}function hv(e){var t=wr(e,1);t!==null&&Qt(t,e,1,-1)}function Jf(e){var t=ir();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t.queue=e,e=e.dispatch=Qb.bind(null,Re,e),[t.memoizedState,e]}function da(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function mv(){return Dt().memoizedState}function vo(e,t,r,n){var i=ir();Re.flags|=e,i.memoizedState=da(1|t,r,void 0,n===void 0?null:n)}function cs(e,t,r,n){var i=Dt();n=n===void 0?null:n;var a=void 0;if(Ve!==null){var o=Ve.memoizedState;if(a=o.destroy,n!==null&&Jd(n,o.deps)){i.memoizedState=da(t,r,a,n);return}}Re.flags|=e,i.memoizedState=da(1|t,r,a,n)}function eh(e,t){return vo(8390656,8,e,t)}function rc(e,t){return cs(2048,8,e,t)}function gv(e,t){return cs(4,2,e,t)}function yv(e,t){return cs(4,4,e,t)}function vv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wv(e,t,r){return r=r!=null?r.concat([e]):null,cs(4,4,vv.bind(null,t,e),r)}function nc(){}function $v(e,t){var r=Dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Jd(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function _v(e,t){var r=Dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Jd(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function xv(e,t,r){return _n&21?(Zt(r,t)||(r=Cy(),Re.lanes|=r,xn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,mt=!0),e.memoizedState=r)}function Gb(e,t){var r=xe;xe=r!==0&&4>r?r:4,e(!0);var n=pl.transition;pl.transition={};try{e(!1),t()}finally{xe=r,pl.transition=n}}function bv(){return Dt().memoizedState}function Kb(e,t,r){var n=Vr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Sv(e))kv(t,r);else if(r=av(e,t,r,n),r!==null){var i=dt();Qt(r,e,n,i),Ev(r,t,n)}}function Qb(e,t,r){var n=Vr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Sv(e))kv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,Zt(s,o)){var l=t.interleaved;l===null?(i.next=i,Kd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=av(e,t,i,n),r!==null&&(i=dt(),Qt(r,e,n,i),Ev(r,t,n))}}function Sv(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function kv(e,t){Hi=Wo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ev(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Pd(e,r)}}var Fo={readContext:Bt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Yb={readContext:Bt,useCallback:function(e,t){return ir().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:eh,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,vo(4194308,4,vv.bind(null,t,e),r)},useLayoutEffect:function(e,t){return vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return vo(4,2,e,t)},useMemo:function(e,t){var r=ir();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ir();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Kb.bind(null,Re,e),[n.memoizedState,e]},useRef:function(e){var t=ir();return e={current:e},t.memoizedState=e},useState:Jf,useDebugValue:nc,useDeferredValue:function(e){return ir().memoizedState=e},useTransition:function(){var e=Jf(!1),t=e[0];return e=Gb.bind(null,e[1]),ir().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Re,i=ir();if(Ie){if(r===void 0)throw Error(F(407));r=r()}else{if(r=t(),Ke===null)throw Error(F(349));_n&30||dv(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,eh(pv.bind(null,n,a,e),[e]),n.flags|=2048,da(9,cv.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=ir(),t=Ke.identifierPrefix;if(Ie){var r=mr,n=hr;r=(n&~(1<<32-Kt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=la++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=qb++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zb={readContext:Bt,useCallback:$v,useContext:Bt,useEffect:rc,useImperativeHandle:wv,useInsertionEffect:gv,useLayoutEffect:yv,useMemo:_v,useReducer:fl,useRef:mv,useState:function(){return fl(ua)},useDebugValue:nc,useDeferredValue:function(e){var t=Dt();return xv(t,Ve.memoizedState,e)},useTransition:function(){var e=fl(ua)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:lv,useSyncExternalStore:uv,useId:bv,unstable_isNewReconciler:!1},Xb={readContext:Bt,useCallback:$v,useContext:Bt,useEffect:rc,useImperativeHandle:wv,useInsertionEffect:gv,useLayoutEffect:yv,useMemo:_v,useReducer:hl,useRef:mv,useState:function(){return hl(ua)},useDebugValue:nc,useDeferredValue:function(e){var t=Dt();return Ve===null?t.memoizedState=e:xv(t,Ve.memoizedState,e)},useTransition:function(){var e=hl(ua)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:lv,useSyncExternalStore:uv,useId:bv,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Hu(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Pe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ps={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=dt(),i=Vr(e),a=gr(n,i);a.payload=t,r!=null&&(a.callback=r),t=Wr(e,a,i),t!==null&&(Qt(t,e,i,n),go(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=dt(),i=Vr(e),a=gr(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Wr(e,a,i),t!==null&&(Qt(t,e,i,n),go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=dt(),n=Vr(e),i=gr(r,n);i.tag=2,t!=null&&(i.callback=t),t=Wr(e,i,n),t!==null&&(Qt(t,e,n,r),go(t,e,n))}};function th(e,t,r,n,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!ra(r,n)||!ra(i,a):!0}function Cv(e,t,r){var n=!1,i=Gr,a=t.contextType;return typeof a=="object"&&a!==null?a=Bt(a):(i=yt(t)?wn:ot.current,n=t.contextTypes,a=(n=n!=null)?ni(e,i):Gr),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ps,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function rh(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function qu(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Qd(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Bt(a):(a=yt(t)?wn:ot.current,i.context=ni(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Hu(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ps.enqueueReplaceState(i,i.state,null),Uo(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function si(e,t){try{var r="",n=t;do r+=Ex(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ml(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Gu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Jb=typeof WeakMap=="function"?WeakMap:Map;function Tv(e,t,r){r=gr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ho||(Ho=!0,nd=n),Gu(e,t)},r}function Iv(e,t,r){r=gr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Gu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Gu(e,t),typeof n!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function nh(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Jb;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=f3.bind(null,e,t,r),t.then(e,e))}function ih(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ah(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=gr(-1,1),t.tag=2,Wr(r,t,1))),r.lanes|=1),e)}var e3=_r.ReactCurrentOwner,mt=!1;function ut(e,t,r,n){t.child=e===null?iv(t,null,r,n):ai(t,e.child,r,n)}function oh(e,t,r,n,i){r=r.render;var a=t.ref;return ei(t,i),n=ec(e,t,r,n,a,i),r=tc(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$r(e,t,i)):(Ie&&r&&Wd(t),t.flags|=1,ut(e,t,n,i),t.child)}function sh(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!cc(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,zv(e,t,a,n,i)):(e=xo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:ra,r(o,n)&&e.ref===t.ref)return $r(e,t,i)}return t.flags|=1,e=Hr(a,n),e.ref=t.ref,e.return=t,t.child=e}function zv(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(ra(a,n)&&e.ref===t.ref)if(mt=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(mt=!0);else return t.lanes=e.lanes,$r(e,t,i)}return Ku(e,t,r,n,i)}function Av(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(qn,$t),$t|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(qn,$t),$t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,ke(qn,$t),$t|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,ke(qn,$t),$t|=n;return ut(e,t,i,r),t.child}function Ov(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ku(e,t,r,n,i){var a=yt(r)?wn:ot.current;return a=ni(t,a),ei(t,i),r=ec(e,t,r,n,a,i),n=tc(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$r(e,t,i)):(Ie&&n&&Wd(t),t.flags|=1,ut(e,t,r,i),t.child)}function lh(e,t,r,n,i){if(yt(r)){var a=!0;Mo(t)}else a=!1;if(ei(t,i),t.stateNode===null)wo(e,t),Cv(t,r,n),qu(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=Bt(d):(d=yt(r)?wn:ot.current,d=ni(t,d));var p=r.getDerivedStateFromProps,f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||l!==d)&&rh(t,o,n,d),Rr=!1;var u=t.memoizedState;o.state=u,Uo(t,n,o,i),l=t.memoizedState,s!==n||u!==l||gt.current||Rr?(typeof p=="function"&&(Hu(t,r,p,n),l=t.memoizedState),(s=Rr||th(t,r,s,n,u,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=d,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,ov(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Vt(t.type,s),o.props=d,f=t.pendingProps,u=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=yt(r)?wn:ot.current,l=ni(t,l));var g=r.getDerivedStateFromProps;(p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||u!==l)&&rh(t,o,n,l),Rr=!1,u=t.memoizedState,o.state=u,Uo(t,n,o,i);var v=t.memoizedState;s!==f||u!==v||gt.current||Rr?(typeof g=="function"&&(Hu(t,r,g,n),v=t.memoizedState),(d=Rr||th(t,r,d,n,u,v,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),o.props=n,o.state=v,o.context=l,n=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),n=!1)}return Qu(e,t,r,n,a,i)}function Qu(e,t,r,n,i,a){Ov(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&Gf(t,r,!1),$r(e,t,a);n=t.stateNode,e3.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=ai(t,e.child,null,a),t.child=ai(t,null,s,a)):ut(e,t,s,a),t.memoizedState=n.state,i&&Gf(t,r,!0),t.child}function Rv(e){var t=e.stateNode;t.pendingContext?qf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qf(e,t.context,!1),Yd(e,t.containerInfo)}function uh(e,t,r,n,i){return ii(),Vd(i),t.flags|=256,ut(e,t,r,n),t.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function Zu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pv(e,t,r){var n=t.pendingProps,i=Oe.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(Oe,i&1),e===null)return Fu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ms(o,n,0,null),e=vn(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Zu(r),t.memoizedState=Yu,e):ic(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return t3(e,t,o,n,s,i,r);if(a){a=n.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Hr(i,l),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Hr(s,a):(a=vn(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?Zu(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=Yu,n}return a=e.child,e=a.sibling,n=Hr(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ic(e,t){return t=ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ga(e,t,r,n){return n!==null&&Vd(n),ai(t,e.child,null,r),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function t3(e,t,r,n,i,a,o){if(r)return t.flags&256?(t.flags&=-257,n=ml(Error(F(422))),Ga(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=ms({mode:"visible",children:n.children},i,0,null),a=vn(a,i,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&ai(t,e.child,null,o),t.child.memoizedState=Zu(o),t.memoizedState=Yu,a);if(!(t.mode&1))return Ga(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,a=Error(F(419)),n=ml(a,n,void 0),Ga(e,t,o,n)}if(s=(o&e.childLanes)!==0,mt||s){if(n=Ke,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,wr(e,i),Qt(n,e,i,-1))}return dc(),n=ml(Error(F(421))),Ga(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=h3.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,xt=jr(i.nextSibling),bt=t,Ie=!0,qt=null,e!==null&&(Ot[Rt++]=hr,Ot[Rt++]=mr,Ot[Rt++]=$n,hr=e.id,mr=e.overflow,$n=t),t=ic(t,n.children),t.flags|=4096,t)}function dh(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Vu(e.return,t,r)}function gl(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Mv(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(ut(e,t,n.children,r),n=Oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dh(e,r,t);else if(e.tag===19)dh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ke(Oe,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&jo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),gl(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}gl(t,!0,r,null,a);break;case"together":gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $r(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,r=Hr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Hr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function r3(e,t,r){switch(t.tag){case 3:Rv(t),ii();break;case 5:sv(t);break;case 1:yt(t.type)&&Mo(t);break;case 4:Yd(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ke(No,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ke(Oe,Oe.current&1),t.flags|=128,null):r&t.child.childLanes?Pv(e,t,r):(ke(Oe,Oe.current&1),e=$r(e,t,r),e!==null?e.sibling:null);ke(Oe,Oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Mv(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Oe,Oe.current),n)break;return null;case 22:case 23:return t.lanes=0,Av(e,t,r)}return $r(e,t,r)}var Bv,Xu,Dv,Nv;Bv=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Xu=function(){};Dv=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,gn(sr.current);var a=null;switch(r){case"input":i=$u(e,i),n=$u(e,n),a=[];break;case"select":i=Pe({},i,{value:void 0}),n=Pe({},n,{value:void 0}),a=[];break;case"textarea":i=bu(e,i),n=bu(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ro)}ku(r,n);var o;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qi.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in n){var l=n[d];if(s=i!=null?i[d]:void 0,n.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qi.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&Ee("scroll",e),a||s===l||(a=[])):(a=a||[]).push(d,l))}r&&(a=a||[]).push("style",r);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Nv=function(e,t,r,n){r!==n&&(t.flags|=4)};function _i(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function n3(e,t,r){var n=t.pendingProps;switch(Fd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return yt(t.type)&&Po(),tt(t),null;case 3:return n=t.stateNode,oi(),Ce(gt),Ce(ot),Xd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(od(qt),qt=null))),Xu(e,t),tt(t),null;case 5:Zd(t);var i=gn(sa.current);if(r=t.type,e!==null&&t.stateNode!=null)Dv(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(F(166));return tt(t),null}if(e=gn(sr.current),Ha(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[ar]=t,n[aa]=a,e=(t.mode&1)!==0,r){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(i=0;i<Pi.length;i++)Ee(Pi[i],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":wf(n,a),Ee("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Ee("invalid",n);break;case"textarea":_f(n,a),Ee("invalid",n)}ku(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&Va(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Va(n.textContent,s,e),i=["children",""+s]):Qi.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Ee("scroll",n)}switch(r){case"input":Ba(n),$f(n,a,!0);break;case"textarea":Ba(n),xf(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Ro)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=py(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[ar]=t,e[aa]=n,Bv(e,t,!1,!1),t.stateNode=e;e:{switch(o=Eu(r,n),r){case"dialog":Ee("cancel",e),Ee("close",e),i=n;break;case"iframe":case"object":case"embed":Ee("load",e),i=n;break;case"video":case"audio":for(i=0;i<Pi.length;i++)Ee(Pi[i],e);i=n;break;case"source":Ee("error",e),i=n;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),i=n;break;case"details":Ee("toggle",e),i=n;break;case"input":wf(e,n),i=$u(e,n),Ee("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Pe({},n,{value:void 0}),Ee("invalid",e);break;case"textarea":_f(e,n),i=bu(e,n),Ee("invalid",e);break;default:i=n}ku(r,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?my(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fy(e,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Yi(e,l):typeof l=="number"&&Yi(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Qi.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Ee("scroll",e):l!=null&&Td(e,a,l,o))}switch(r){case"input":Ba(e),$f(e,n,!1);break;case"textarea":Ba(e),xf(e);break;case"option":n.value!=null&&e.setAttribute("value",""+qr(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Yn(e,!!n.multiple,a,!1):n.defaultValue!=null&&Yn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ro)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Nv(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(F(166));if(r=gn(sa.current),gn(sr.current),Ha(t)){if(n=t.stateNode,r=t.memoizedProps,n[ar]=t,(a=n.nodeValue!==r)&&(e=bt,e!==null))switch(e.tag){case 3:Va(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Va(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ar]=t,t.stateNode=n}return tt(t),null;case 13:if(Ce(Oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&xt!==null&&t.mode&1&&!(t.flags&128))rv(),ii(),t.flags|=98560,a=!1;else if(a=Ha(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[ar]=t}else ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),a=!1}else qt!==null&&(od(qt),qt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?He===0&&(He=3):dc())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return oi(),Xu(e,t),e===null&&na(t.stateNode.containerInfo),tt(t),null;case 10:return Gd(t.type._context),tt(t),null;case 17:return yt(t.type)&&Po(),tt(t),null;case 19:if(Ce(Oe),a=t.memoizedState,a===null)return tt(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)_i(a,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=jo(e),o!==null){for(t.flags|=128,_i(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ke(Oe,Oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&De()>li&&(t.flags|=128,n=!0,_i(a,!1),t.lanes=4194304)}else{if(!n)if(e=jo(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),_i(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ie)return tt(t),null}else 2*De()-a.renderingStartTime>li&&r!==1073741824&&(t.flags|=128,n=!0,_i(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=De(),t.sibling=null,r=Oe.current,ke(Oe,n?r&1|2:r&1),t):(tt(t),null);case 22:case 23:return uc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?$t&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function i3(e,t){switch(Fd(t),t.tag){case 1:return yt(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oi(),Ce(gt),Ce(ot),Xd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zd(t),null;case 13:if(Ce(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Oe),null;case 4:return oi(),null;case 10:return Gd(t.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Ka=!1,it=!1,a3=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Hn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Me(e,t,n)}else r.current=null}function Ju(e,t,r){try{r()}catch(n){Me(e,t,n)}}var ch=!1;function o3(e,t){if(Bu=zo,e=Fy(),jd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,d=0,p=0,f=e,u=null;t:for(;;){for(var g;f!==r||i!==0&&f.nodeType!==3||(s=o+i),f!==a||n!==0&&f.nodeType!==3||(l=o+n),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)u=f,f=g;for(;;){if(f===e)break t;if(u===r&&++d===i&&(s=o),u===a&&++p===n&&(l=o),(g=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=g}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Du={focusedElem:e,selectionRange:r},zo=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:Vt(t.type,w),S);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Me(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return v=ch,ch=!1,v}function qi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ju(t,r,a)}i=i.next}while(i!==n)}}function fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ed(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Lv(e){var t=e.alternate;t!==null&&(e.alternate=null,Lv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ar],delete t[aa],delete t[Uu],delete t[Wb],delete t[Fb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uv(e){return e.tag===5||e.tag===3||e.tag===4}function ph(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function td(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ro));else if(n!==4&&(e=e.child,e!==null))for(td(e,t,r),e=e.sibling;e!==null;)td(e,t,r),e=e.sibling}function rd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(rd(e,t,r),e=e.sibling;e!==null;)rd(e,t,r),e=e.sibling}var Ye=null,Ht=!1;function Cr(e,t,r){for(r=r.child;r!==null;)jv(e,t,r),r=r.sibling}function jv(e,t,r){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(as,r)}catch{}switch(r.tag){case 5:it||Hn(r,t);case 6:var n=Ye,i=Ht;Ye=null,Cr(e,t,r),Ye=n,Ht=i,Ye!==null&&(Ht?(e=Ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&(Ht?(e=Ye,r=r.stateNode,e.nodeType===8?ul(e.parentNode,r):e.nodeType===1&&ul(e,r),ea(e)):ul(Ye,r.stateNode));break;case 4:n=Ye,i=Ht,Ye=r.stateNode.containerInfo,Ht=!0,Cr(e,t,r),Ye=n,Ht=i;break;case 0:case 11:case 14:case 15:if(!it&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ju(r,t,o),i=i.next}while(i!==n)}Cr(e,t,r);break;case 1:if(!it&&(Hn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Me(r,t,s)}Cr(e,t,r);break;case 21:Cr(e,t,r);break;case 22:r.mode&1?(it=(n=it)||r.memoizedState!==null,Cr(e,t,r),it=n):Cr(e,t,r);break;default:Cr(e,t,r)}}function fh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new a3),t.forEach(function(n){var i=m3.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Nt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ye=s.stateNode,Ht=!1;break e;case 3:Ye=s.stateNode.containerInfo,Ht=!0;break e;case 4:Ye=s.stateNode.containerInfo,Ht=!0;break e}s=s.return}if(Ye===null)throw Error(F(160));jv(a,o,i),Ye=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){Me(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wv(t,e),t=t.sibling}function Wv(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),nr(e),n&4){try{qi(3,e,e.return),fs(3,e)}catch(w){Me(e,e.return,w)}try{qi(5,e,e.return)}catch(w){Me(e,e.return,w)}}break;case 1:Nt(t,e),nr(e),n&512&&r!==null&&Hn(r,r.return);break;case 5:if(Nt(t,e),nr(e),n&512&&r!==null&&Hn(r,r.return),e.flags&32){var i=e.stateNode;try{Yi(i,"")}catch(w){Me(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&dy(i,a),Eu(s,o);var d=Eu(s,a);for(o=0;o<l.length;o+=2){var p=l[o],f=l[o+1];p==="style"?my(i,f):p==="dangerouslySetInnerHTML"?fy(i,f):p==="children"?Yi(i,f):Td(i,p,f,d)}switch(s){case"input":_u(i,a);break;case"textarea":cy(i,a);break;case"select":var u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Yn(i,!!a.multiple,g,!1):u!==!!a.multiple&&(a.defaultValue!=null?Yn(i,!!a.multiple,a.defaultValue,!0):Yn(i,!!a.multiple,a.multiple?[]:"",!1))}i[aa]=a}catch(w){Me(e,e.return,w)}}break;case 6:if(Nt(t,e),nr(e),n&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){Me(e,e.return,w)}}break;case 3:if(Nt(t,e),nr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ea(t.containerInfo)}catch(w){Me(e,e.return,w)}break;case 4:Nt(t,e),nr(e);break;case 13:Nt(t,e),nr(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=De())),n&4&&fh(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(it=(d=it)||p,Nt(t,e),it=d):Nt(t,e),nr(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(Q=e,p=e.child;p!==null;){for(f=Q=p;Q!==null;){switch(u=Q,g=u.child,u.tag){case 0:case 11:case 14:case 15:qi(4,u,u.return);break;case 1:Hn(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){n=u,r=u.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Me(n,r,w)}}break;case 5:Hn(u,u.return);break;case 22:if(u.memoizedState!==null){mh(f);continue}}g!==null?(g.return=u,Q=g):mh(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=hy("display",o))}catch(w){Me(e,e.return,w)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(w){Me(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nt(t,e),nr(e),n&4&&fh(e);break;case 21:break;default:Nt(t,e),nr(e)}}function nr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Uv(r)){var n=r;break e}r=r.return}throw Error(F(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Yi(i,""),n.flags&=-33);var a=ph(e);rd(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,s=ph(e);td(e,s,o);break;default:throw Error(F(161))}}catch(l){Me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s3(e,t,r){Q=e,Fv(e)}function Fv(e,t,r){for(var n=(e.mode&1)!==0;Q!==null;){var i=Q,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||Ka;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||it;s=Ka;var d=it;if(Ka=o,(it=l)&&!d)for(Q=i;Q!==null;)o=Q,l=o.child,o.tag===22&&o.memoizedState!==null?gh(i):l!==null?(l.return=o,Q=l):gh(i);for(;a!==null;)Q=a,Fv(a),a=a.sibling;Q=i,Ka=s,it=d}hh(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):hh(e)}}function hh(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||fs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!it)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Vt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Xf(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Xf(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&ea(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}it||t.flags&512&&ed(t)}catch(u){Me(t,t.return,u)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function mh(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function gh(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{fs(4,t)}catch(l){Me(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){Me(t,i,l)}}var a=t.return;try{ed(t)}catch(l){Me(t,a,l)}break;case 5:var o=t.return;try{ed(t)}catch(l){Me(t,o,l)}}}catch(l){Me(t,t.return,l)}if(t===e){Q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Q=s;break}Q=t.return}}var l3=Math.ceil,Vo=_r.ReactCurrentDispatcher,ac=_r.ReactCurrentOwner,Mt=_r.ReactCurrentBatchConfig,ye=0,Ke=null,Ue=null,Xe=0,$t=0,qn=Jr(0),He=0,ca=null,xn=0,hs=0,oc=0,Gi=null,ht=null,sc=0,li=1/0,pr=null,Ho=!1,nd=null,Fr=null,Qa=!1,Dr=null,qo=0,Ki=0,id=null,$o=-1,_o=0;function dt(){return ye&6?De():$o!==-1?$o:$o=De()}function Vr(e){return e.mode&1?ye&2&&Xe!==0?Xe&-Xe:Hb.transition!==null?(_o===0&&(_o=Cy()),_o):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Py(e.type)),e):1}function Qt(e,t,r,n){if(50<Ki)throw Ki=0,id=null,Error(F(185));ma(e,r,n),(!(ye&2)||e!==Ke)&&(e===Ke&&(!(ye&2)&&(hs|=r),He===4&&Mr(e,Xe)),vt(e,n),r===1&&ye===0&&!(t.mode&1)&&(li=De()+500,ds&&en()))}function vt(e,t){var r=e.callbackNode;Hx(e,t);var n=Io(e,e===Ke?Xe:0);if(n===0)r!==null&&kf(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&kf(r),t===1)e.tag===0?Vb(yh.bind(null,e)):Jy(yh.bind(null,e)),Ub(function(){!(ye&6)&&en()}),r=null;else{switch(Ty(n)){case 1:r=Rd;break;case 4:r=ky;break;case 16:r=To;break;case 536870912:r=Ey;break;default:r=To}r=Zv(r,Vv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Vv(e,t){if($o=-1,_o=0,ye&6)throw Error(F(327));var r=e.callbackNode;if(ti()&&e.callbackNode!==r)return null;var n=Io(e,e===Ke?Xe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Go(e,n);else{t=n;var i=ye;ye|=2;var a=qv();(Ke!==e||Xe!==t)&&(pr=null,li=De()+500,yn(e,t));do try{c3();break}catch(s){Hv(e,s)}while(!0);qd(),Vo.current=a,ye=i,Ue!==null?t=0:(Ke=null,Xe=0,t=He)}if(t!==0){if(t===2&&(i=Au(e),i!==0&&(n=i,t=ad(e,i))),t===1)throw r=ca,yn(e,0),Mr(e,n),vt(e,De()),r;if(t===6)Mr(e,n);else{if(i=e.current.alternate,!(n&30)&&!u3(i)&&(t=Go(e,n),t===2&&(a=Au(e),a!==0&&(n=a,t=ad(e,a))),t===1))throw r=ca,yn(e,0),Mr(e,n),vt(e,De()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(F(345));case 2:cn(e,ht,pr);break;case 3:if(Mr(e,n),(n&130023424)===n&&(t=sc+500-De(),10<t)){if(Io(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Lu(cn.bind(null,e,ht,pr),t);break}cn(e,ht,pr);break;case 4:if(Mr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-Kt(n);a=1<<o,o=t[o],o>i&&(i=o),n&=~a}if(n=i,n=De()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*l3(n/1960))-n,10<n){e.timeoutHandle=Lu(cn.bind(null,e,ht,pr),n);break}cn(e,ht,pr);break;case 5:cn(e,ht,pr);break;default:throw Error(F(329))}}}return vt(e,De()),e.callbackNode===r?Vv.bind(null,e):null}function ad(e,t){var r=Gi;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Go(e,t),e!==2&&(t=ht,ht=r,t!==null&&od(t)),e}function od(e){ht===null?ht=e:ht.push.apply(ht,e)}function u3(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Zt(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mr(e,t){for(t&=~oc,t&=~hs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Kt(t),n=1<<r;e[r]=-1,t&=~n}}function yh(e){if(ye&6)throw Error(F(327));ti();var t=Io(e,0);if(!(t&1))return vt(e,De()),null;var r=Go(e,t);if(e.tag!==0&&r===2){var n=Au(e);n!==0&&(t=n,r=ad(e,n))}if(r===1)throw r=ca,yn(e,0),Mr(e,t),vt(e,De()),r;if(r===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,ht,pr),vt(e,De()),null}function lc(e,t){var r=ye;ye|=1;try{return e(t)}finally{ye=r,ye===0&&(li=De()+500,ds&&en())}}function bn(e){Dr!==null&&Dr.tag===0&&!(ye&6)&&ti();var t=ye;ye|=1;var r=Mt.transition,n=xe;try{if(Mt.transition=null,xe=1,e)return e()}finally{xe=n,Mt.transition=r,ye=t,!(ye&6)&&en()}}function uc(){$t=qn.current,Ce(qn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Lb(r)),Ue!==null)for(r=Ue.return;r!==null;){var n=r;switch(Fd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Po();break;case 3:oi(),Ce(gt),Ce(ot),Xd();break;case 5:Zd(n);break;case 4:oi();break;case 13:Ce(Oe);break;case 19:Ce(Oe);break;case 10:Gd(n.type._context);break;case 22:case 23:uc()}r=r.return}if(Ke=e,Ue=e=Hr(e.current,null),Xe=$t=t,He=0,ca=null,oc=hs=xn=0,ht=Gi=null,mn!==null){for(t=0;t<mn.length;t++)if(r=mn[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.pending=n}mn=null}return e}function Hv(e,t){do{var r=Ue;try{if(qd(),yo.current=Fo,Wo){for(var n=Re.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Wo=!1}if(_n=0,Ge=Ve=Re=null,Hi=!1,la=0,ac.current=null,r===null||r.return===null){He=1,ca=t,Ue=null;break}e:{var a=e,o=r.return,s=r,l=t;if(t=Xe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,p=s,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var u=p.alternate;u?(p.updateQueue=u.updateQueue,p.memoizedState=u.memoizedState,p.lanes=u.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=ih(o);if(g!==null){g.flags&=-257,ah(g,o,s,a,t),g.mode&1&&nh(a,d,t),t=g,l=d;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){nh(a,d,t),dc();break e}l=Error(F(426))}}else if(Ie&&s.mode&1){var S=ih(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ah(S,o,s,a,t),Vd(si(l,s));break e}}a=l=si(l,s),He!==4&&(He=2),Gi===null?Gi=[a]:Gi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=Tv(a,l,t);Zf(a,y);break e;case 1:s=l;var m=a.type,_=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Fr===null||!Fr.has(_)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=Iv(a,s,t);Zf(a,b);break e}}a=a.return}while(a!==null)}Kv(r)}catch(E){t=E,Ue===r&&r!==null&&(Ue=r=r.return);continue}break}while(!0)}function qv(){var e=Vo.current;return Vo.current=Fo,e===null?Fo:e}function dc(){(He===0||He===3||He===2)&&(He=4),Ke===null||!(xn&268435455)&&!(hs&268435455)||Mr(Ke,Xe)}function Go(e,t){var r=ye;ye|=2;var n=qv();(Ke!==e||Xe!==t)&&(pr=null,yn(e,t));do try{d3();break}catch(i){Hv(e,i)}while(!0);if(qd(),ye=r,Vo.current=n,Ue!==null)throw Error(F(261));return Ke=null,Xe=0,He}function d3(){for(;Ue!==null;)Gv(Ue)}function c3(){for(;Ue!==null&&!Bx();)Gv(Ue)}function Gv(e){var t=Yv(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?Kv(e):Ue=t,ac.current=null}function Kv(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=i3(r,t),r!==null){r.flags&=32767,Ue=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Ue=null;return}}else if(r=n3(r,t,$t),r!==null){Ue=r;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);He===0&&(He=5)}function cn(e,t,r){var n=xe,i=Mt.transition;try{Mt.transition=null,xe=1,p3(e,t,r,n)}finally{Mt.transition=i,xe=n}return null}function p3(e,t,r,n){do ti();while(Dr!==null);if(ye&6)throw Error(F(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(qx(e,a),e===Ke&&(Ue=Ke=null,Xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Qa||(Qa=!0,Zv(To,function(){return ti(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Mt.transition,Mt.transition=null;var o=xe;xe=1;var s=ye;ye|=4,ac.current=null,o3(e,r),Wv(r,e),Ob(Du),zo=!!Bu,Du=Bu=null,e.current=r,s3(r),Dx(),ye=s,xe=o,Mt.transition=a}else e.current=r;if(Qa&&(Qa=!1,Dr=e,qo=i),a=e.pendingLanes,a===0&&(Fr=null),Ux(r.stateNode),vt(e,De()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ho)throw Ho=!1,e=nd,nd=null,e;return qo&1&&e.tag!==0&&ti(),a=e.pendingLanes,a&1?e===id?Ki++:(Ki=0,id=e):Ki=0,en(),null}function ti(){if(Dr!==null){var e=Ty(qo),t=Mt.transition,r=xe;try{if(Mt.transition=null,xe=16>e?16:e,Dr===null)var n=!1;else{if(e=Dr,Dr=null,qo=0,ye&6)throw Error(F(331));var i=ye;for(ye|=4,Q=e.current;Q!==null;){var a=Q,o=a.child;if(Q.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(Q=d;Q!==null;){var p=Q;switch(p.tag){case 0:case 11:case 15:qi(8,p,a)}var f=p.child;if(f!==null)f.return=p,Q=f;else for(;Q!==null;){p=Q;var u=p.sibling,g=p.return;if(Lv(p),p===d){Q=null;break}if(u!==null){u.return=g,Q=u;break}Q=g}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}Q=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,Q=o;else e:for(;Q!==null;){if(a=Q,a.flags&2048)switch(a.tag){case 0:case 11:case 15:qi(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,Q=y;break e}Q=a.return}}var m=e.current;for(Q=m;Q!==null;){o=Q;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Q=_;else e:for(o=m;Q!==null;){if(s=Q,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fs(9,s)}}catch(E){Me(s,s.return,E)}if(s===o){Q=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,Q=b;break e}Q=s.return}}if(ye=i,en(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(as,e)}catch{}n=!0}return n}finally{xe=r,Mt.transition=t}}return!1}function vh(e,t,r){t=si(r,t),t=Tv(e,t,1),e=Wr(e,t,1),t=dt(),e!==null&&(ma(e,1,t),vt(e,t))}function Me(e,t,r){if(e.tag===3)vh(e,e,r);else for(;t!==null;){if(t.tag===3){vh(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Fr===null||!Fr.has(n))){e=si(r,e),e=Iv(t,e,1),t=Wr(t,e,1),e=dt(),t!==null&&(ma(t,1,e),vt(t,e));break}}t=t.return}}function f3(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&r,Ke===e&&(Xe&r)===r&&(He===4||He===3&&(Xe&130023424)===Xe&&500>De()-sc?yn(e,0):oc|=r),vt(e,t)}function Qv(e,t){t===0&&(e.mode&1?(t=La,La<<=1,!(La&130023424)&&(La=4194304)):t=1);var r=dt();e=wr(e,t),e!==null&&(ma(e,t,r),vt(e,r))}function h3(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Qv(e,r)}function m3(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(F(314))}n!==null&&n.delete(t),Qv(e,r)}var Yv;Yv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)mt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return mt=!1,r3(e,t,r);mt=!!(e.flags&131072)}else mt=!1,Ie&&t.flags&1048576&&ev(t,Do,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;wo(e,t),e=t.pendingProps;var i=ni(t,ot.current);ei(t,r),i=ec(null,t,n,e,i,r);var a=tc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(n)?(a=!0,Mo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qd(t),i.updater=ps,t.stateNode=i,i._reactInternals=t,qu(t,n,e,r),t=Qu(null,t,n,!0,a,r)):(t.tag=0,Ie&&a&&Wd(t),ut(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(wo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=y3(n),e=Vt(n,e),i){case 0:t=Ku(null,t,n,e,r);break e;case 1:t=lh(null,t,n,e,r);break e;case 11:t=oh(null,t,n,e,r);break e;case 14:t=sh(null,t,n,Vt(n.type,e),r);break e}throw Error(F(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Vt(n,i),Ku(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Vt(n,i),lh(e,t,n,i,r);case 3:e:{if(Rv(t),e===null)throw Error(F(387));n=t.pendingProps,a=t.memoizedState,i=a.element,ov(e,t),Uo(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=si(Error(F(423)),t),t=uh(e,t,n,r,i);break e}else if(n!==i){i=si(Error(F(424)),t),t=uh(e,t,n,r,i);break e}else for(xt=jr(t.stateNode.containerInfo.firstChild),bt=t,Ie=!0,qt=null,r=iv(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ii(),n===i){t=$r(e,t,r);break e}ut(e,t,n,r)}t=t.child}return t;case 5:return sv(t),e===null&&Fu(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Nu(n,i)?o=null:a!==null&&Nu(n,a)&&(t.flags|=32),Ov(e,t),ut(e,t,o,r),t.child;case 6:return e===null&&Fu(t),null;case 13:return Pv(e,t,r);case 4:return Yd(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ai(t,null,n,r):ut(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Vt(n,i),oh(e,t,n,i,r);case 7:return ut(e,t,t.pendingProps,r),t.child;case 8:return ut(e,t,t.pendingProps.children,r),t.child;case 12:return ut(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ke(No,n._currentValue),n._currentValue=o,a!==null)if(Zt(a.value,o)){if(a.children===i.children&&!gt.current){t=$r(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(a.tag===1){l=gr(-1,r&-r),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?l.next=l:(l.next=p.next,p.next=l),d.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Vu(a.return,r,t),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(F(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),Vu(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ut(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,ei(t,r),i=Bt(i),n=n(i),t.flags|=1,ut(e,t,n,r),t.child;case 14:return n=t.type,i=Vt(n,t.pendingProps),i=Vt(n.type,i),sh(e,t,n,i,r);case 15:return zv(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Vt(n,i),wo(e,t),t.tag=1,yt(n)?(e=!0,Mo(t)):e=!1,ei(t,r),Cv(t,n,i),qu(t,n,i,r),Qu(null,t,n,!0,e,r);case 19:return Mv(e,t,r);case 22:return Av(e,t,r)}throw Error(F(156,t.tag))};function Zv(e,t){return Sy(e,t)}function g3(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,r,n){return new g3(e,t,r,n)}function cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y3(e){if(typeof e=="function")return cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zd)return 11;if(e===Ad)return 14}return 2}function Hr(e,t){var r=e.alternate;return r===null?(r=Pt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function xo(e,t,r,n,i,a){var o=2;if(n=e,typeof e=="function")cc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bn:return vn(r.children,i,a,t);case Id:o=8,i|=8;break;case gu:return e=Pt(12,r,t,i|2),e.elementType=gu,e.lanes=a,e;case yu:return e=Pt(13,r,t,i),e.elementType=yu,e.lanes=a,e;case vu:return e=Pt(19,r,t,i),e.elementType=vu,e.lanes=a,e;case sy:return ms(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ay:o=10;break e;case oy:o=9;break e;case zd:o=11;break e;case Ad:o=14;break e;case Or:o=16,n=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Pt(o,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function vn(e,t,r,n){return e=Pt(7,e,n,t),e.lanes=r,e}function ms(e,t,r,n){return e=Pt(22,e,n,t),e.elementType=sy,e.lanes=r,e.stateNode={isHidden:!1},e}function yl(e,t,r){return e=Pt(6,e,null,t),e.lanes=r,e}function vl(e,t,r){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v3(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(e,t,r,n,i,a,o,s,l){return e=new v3(e,t,r,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Pt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qd(a),e}function w3(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xv(e){if(!e)return Gr;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var r=e.type;if(yt(r))return Xy(e,r,t)}return t}function Jv(e,t,r,n,i,a,o,s,l){return e=pc(r,n,!0,e,i,a,o,s,l),e.context=Xv(null),r=e.current,n=dt(),i=Vr(r),a=gr(n,i),a.callback=t??null,Wr(r,a,i),e.current.lanes=i,ma(e,i,n),vt(e,n),e}function gs(e,t,r,n){var i=t.current,a=dt(),o=Vr(i);return r=Xv(r),t.context===null?t.context=r:t.pendingContext=r,t=gr(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Wr(i,t,o),e!==null&&(Qt(e,i,o,a),go(e,i,o)),o}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function fc(e,t){wh(e,t),(e=e.alternate)&&wh(e,t)}function $3(){return null}var e1=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}ys.prototype.render=hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));gs(e,t,null,null)};ys.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){gs(null,e,null,null)}),t[vr]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ay();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Pr.length&&t!==0&&t<Pr[r].priority;r++);Pr.splice(r,0,e),r===0&&Ry(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $h(){}function _3(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var d=Ko(o);a.call(d)}}var o=Jv(t,n,e,0,null,!1,!1,"",$h);return e._reactRootContainer=o,e[vr]=o.current,na(e.nodeType===8?e.parentNode:e),bn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var d=Ko(l);s.call(d)}}var l=pc(e,0,!1,null,null,!1,!1,"",$h);return e._reactRootContainer=l,e[vr]=l.current,na(e.nodeType===8?e.parentNode:e),bn(function(){gs(t,l,r,n)}),l}function ws(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Ko(o);s.call(l)}}gs(t,o,e,i)}else o=_3(r,t,e,i,n);return Ko(o)}Iy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ri(t.pendingLanes);r!==0&&(Pd(t,r|1),vt(t,De()),!(ye&6)&&(li=De()+500,en()))}break;case 13:bn(function(){var n=wr(e,1);if(n!==null){var i=dt();Qt(n,e,1,i)}}),fc(e,1)}};Md=function(e){if(e.tag===13){var t=wr(e,134217728);if(t!==null){var r=dt();Qt(t,e,134217728,r)}fc(e,134217728)}};zy=function(e){if(e.tag===13){var t=Vr(e),r=wr(e,t);if(r!==null){var n=dt();Qt(r,e,t,n)}fc(e,t)}};Ay=function(){return xe};Oy=function(e,t){var r=xe;try{return xe=e,t()}finally{xe=r}};Tu=function(e,t,r){switch(t){case"input":if(_u(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=us(n);if(!i)throw Error(F(90));uy(n),_u(n,i)}}}break;case"textarea":cy(e,r);break;case"select":t=r.value,t!=null&&Yn(e,!!r.multiple,t,!1)}};vy=lc;wy=bn;var x3={usingClientEntryPoint:!1,Events:[ya,Un,us,gy,yy,lc]},xi={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b3={bundleType:xi.bundleType,version:xi.version,rendererPackageName:xi.rendererPackageName,rendererConfig:xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xy(e),e===null?null:e.stateNode},findFiberByHostInstance:xi.findFiberByHostInstance||$3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{as=Ya.inject(b3),or=Ya}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x3;Et.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(t))throw Error(F(200));return w3(e,t,null,r)};Et.createRoot=function(e,t){if(!mc(e))throw Error(F(299));var r=!1,n="",i=e1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pc(e,1,!1,null,null,r,!1,n,i),e[vr]=t.current,na(e.nodeType===8?e.parentNode:e),new hc(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=xy(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return bn(e)};Et.hydrate=function(e,t,r){if(!vs(t))throw Error(F(200));return ws(null,e,t,!0,r)};Et.hydrateRoot=function(e,t,r){if(!mc(e))throw Error(F(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",o=e1;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Jv(t,null,e,1,r??null,i,!1,a,o),e[vr]=t.current,na(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new ys(t)};Et.render=function(e,t,r){if(!vs(t))throw Error(F(200));return ws(null,e,t,!1,r)};Et.unmountComponentAtNode=function(e){if(!vs(e))throw Error(F(40));return e._reactRootContainer?(bn(function(){ws(null,null,e,!1,function(){e._reactRootContainer=null,e[vr]=null})}),!0):!1};Et.unstable_batchedUpdates=lc;Et.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!vs(r))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return ws(e,t,r,!1,n)};Et.version="18.3.1-next-f1338f8080-20240426";function t1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t1)}catch(e){console.error(e)}}t1(),ty.exports=Et;var S3=ty.exports,r1,_h=S3;r1=_h.createRoot,_h.hydrateRoot;const Gt={url:"./models/colorizer_dist_fp32.onnx",sha256:"d08cda26ecc31642088972cbde705c2135f0fb9346f89fb76f7e7f2db850a574",inputName:"L",outputName:"logits",inputSize:256,bins:313,binsURL:"/colorize/ab_bins.json"},$s="colorize-model-v2";async function k3(e){const t=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(t)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function E3(){return"caches"in window?!!await(await caches.open($s)).match(Gt.url):!1}async function C3(){if(!("caches"in window))return null;const t=await(await caches.open($s)).match(Gt.url);return t?t.arrayBuffer():null}async function T3({onProgress:e}={}){let t;try{t=await fetch(Gt.url)}catch(d){const p=new Error("network");throw p.cause=d,p}if(!t.ok)throw new Error(`http ${t.status}`);const r=Number(t.headers.get("content-length"))||0,n=t.body.getReader(),i=[];let a=0;for(;;){const{done:d,value:p}=await n.read();if(d)break;i.push(p),a+=p.length,e&&e(r?a/r:null,a,r)}const o=new Uint8Array(a);let s=0;for(const d of i)o.set(d,s),s+=d.length;const l=o.buffer;{const d=await k3(l);if(d!==Gt.sha256){const p=new Error("integrity");throw p.expected=Gt.sha256,p.got=d,p}}return"caches"in window&&await(await caches.open($s)).put(Gt.url,new Response(l.slice(0),{headers:{"content-type":"application/octet-stream"}})),l}async function I3({onState:e,onProgress:t}={}){const r=i=>e&&e(i),n=await C3();if(n)return r("ready"),n;if(typeof navigator<"u"&&navigator.onLine===!1)throw r("offline-unavailable"),new Error("offline-unavailable");r("downloading");try{const i=await T3({onProgress:t});return r("verifying"),r("ready"),i}catch(i){throw i.message==="network"&&navigator.onLine===!1?r("offline-unavailable"):r("error"),i}}async function z3(){if(!("caches"in window))return;await(await caches.open($s)).delete(Gt.url)}function A3(){const[e,t]=me.useState("unknown"),[r,n]=me.useState(null),i=me.useRef(null);me.useEffect(()=>{let s=!1;return E3().then(l=>{s||t(l?"cached-idle":"not-downloaded")}),()=>{s=!0}},[]);const a=me.useCallback(async()=>{n(null);try{const s=await I3({onState:t,onProgress:l=>n(l)});return i.current=s,s}catch{return null}},[]),o=me.useCallback(async()=>(await z3(),t("not-downloaded"),a()),[a]);return{status:e,progress:r,load:a,retry:o,getBytes:()=>i.current}}/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var gc=Object.defineProperty,O3=Object.getOwnPropertyDescriptor,R3=Object.getOwnPropertyNames,P3=Object.prototype.hasOwnProperty,M3=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),W=(e,t)=>()=>(e&&(t=e(e=0)),t),wa=(e,t)=>{for(var r in t)gc(e,r,{get:t[r],enumerable:!0})},B3=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of R3(t))!P3.call(e,i)&&i!==r&&gc(e,i,{get:()=>t[i],enumerable:!(n=O3(t,i))||n.enumerable});return e},Qo=e=>B3(gc({},"__esModule",{value:!0}),e),bi,Tr,Gn,xh,yc,vc=W(()=>{bi=new Map,Tr=[],Gn=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=bi.get(e);if(n===void 0)bi.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Tr.indexOf(e);i!==-1&&Tr.splice(i,1);for(let a=0;a<Tr.length;a++)if(bi.get(Tr[a]).priority<=r){Tr.splice(a,0,e);return}Tr.push(e)}return}throw new TypeError("not a valid backend")},xh=async e=>{let t=bi.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},yc=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?Tr:r,i,a=[],o=new Set;for(let l of n){let d=await xh(l);typeof d=="string"?a.push({name:l,err:d}):(i||(i=d),i===d&&o.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let s=t.filter(l=>o.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?s:Reflect.get(l,d)})]}}),D3=W(()=>{vc()}),n1,N3=W(()=>{n1="1.20.1"}),wl,At,i1=W(()=>{N3(),wl="warning",At={wasm:{},webgl:{},webgpu:{},versions:{common:n1},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);wl=e}},get logLevel(){return wl}},Object.defineProperty(At,"logLevel",{enumerable:!0})}),be,L3=W(()=>{i1(),be=At}),a1,o1,U3=W(()=>{a1=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,l,d;s===void 0||s.mean===void 0?l=[255,255,255,255]:typeof s.mean=="number"?l=[s.mean,s.mean,s.mean,s.mean]:(l=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(l[3]=s.mean[3])),s===void 0||s.bias===void 0?d=[0,0,0,0]:typeof s.bias=="number"?d=[s.bias,s.bias,s.bias,s.bias]:(d=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(d[3]=s.bias[3]));let p=a*i,f=0,u=p,g=p*2,v=-1;o==="RGBA"?(f=0,u=p,g=p*2,v=p*3):o==="RGB"?(f=0,u=p,g=p*2):o==="RBG"&&(f=0,g=p,u=p*2);for(let w=0;w<a;w++)for(let S=0;S<i;S++){let y=(e.data[f++]-d[0])*l[0],m=(e.data[u++]-d[1])*l[1],_=(e.data[g++]-d[2])*l[2],b=v===-1?255:(e.data[v++]-d[3])*l[3];n.fillStyle="rgba("+y+","+m+","+_+","+b+")",n.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},o1=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let u=4,g=0,v=1,w=2,S=3,y=0,m=f,_=f*2,b=-1;s==="RGBA"?(y=0,m=f,_=f*2,b=f*3):s==="RGB"?(y=0,m=f,_=f*2):s==="RBG"&&(y=0,_=f,m=f*2),n=r.createImageData(i,a);for(let E=0;E<a*i;g+=u,v+=u,w+=u,S+=u,E++)n.data[g]=(e.data[y++]-p[0])*d[0],n.data[v]=(e.data[m++]-p[1])*d[1],n.data[w]=(e.data[_++]-p[2])*d[2],n.data[S]=b===-1?255:(e.data[b++]-p[3])*d[3]}else throw new Error("Can not access image data");return n}}),Za,s1,l1,u1,d1,c1,j3=W(()=>{wc(),Za=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,p=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,u=0,g=1,v=2,w=3,S=0,y=d,m=d*2,_=-1;s==="RGB"&&(f=3,u=0,g=1,v=2,w=-1),l==="RGBA"?_=d*3:l==="RBG"?(S=0,m=d,y=d*2):l==="BGR"&&(m=0,y=d,S=d*2);for(let b=0;b<d;b++,u+=f,v+=f,g+=f,w+=f)p[S++]=(e[u]+o[0])/a[0],p[y++]=(e[g]+o[1])/a[1],p[m++]=(e[v]+o[2])/a[2],_!==-1&&w!==-1&&(p[_++]=(e[w]+o[3])/a[3]);return l==="RGBA"?new _t("float32",p,[1,4,r,n]):new _t("float32",p,[1,3,r,n])},s1=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let u=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(u=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=u,s.width=g}else s.tensorFormat="RGBA",s.height=u,s.width=g;f.drawImage(e,0,0),o=f.getImageData(0,0,g,u).data}else throw new Error("Can not access image data")}else if(n){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=p,s.width=f,t!==void 0){let u=l();u.width=f,u.height=p;let g=d(u);if(g!=null)g.putImageData(e,0,0),o=g.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let u=e.height,g=e.width;return f.drawImage(e,0,0,g,u),o=f.getImageData(0,0,g,u).data,s.height=u,s.width=g,Za(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,f)=>{let u=l(),g=d(u);if(!e||!g)return f();let v=new Image;v.crossOrigin="Anonymous",v.src=e,v.onload=()=>{u.width=v.width,u.height=v.height,g.drawImage(v,0,0,u.width,u.height);let w=g.getImageData(0,0,u.width,u.height);s.height=u.height,s.width=u.width,p(Za(w.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Za(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},l1=(e,t)=>{let{width:r,height:n,download:i,dispose:a}=t,o=[1,n,r,4];return new _t({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},u1=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new _t({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:a})},d1=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new _t({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:a})},c1=(e,t,r)=>new _t({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),pn,Mi,$l,p1,W3=W(()=>{pn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Mi=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),$l=!1,p1=()=>{if(!$l){$l=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(pn.set("int64",BigInt64Array),Mi.set(BigInt64Array,"int64")),t&&(pn.set("uint64",BigUint64Array),Mi.set(BigUint64Array,"uint64")),r?(pn.set("float16",Float16Array),Mi.set(Float16Array,"float16")):pn.set("float16",Uint16Array)}}}),f1,h1,F3=W(()=>{wc(),f1=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},h1=(e,t)=>{switch(e.location){case"cpu":return new _t(e.type,e.data,t);case"cpu-pinned":return new _t({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new _t({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new _t({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new _t({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),_t,wc=W(()=>{U3(),j3(),W3(),F3(),_t=class{constructor(e,t,r){p1();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=pn.get(n);if(!o)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(n=e,s=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let l=pn.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?o=l.from(t,BigInt):o=l.from(t)}else if(t instanceof l)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",o=e;else if(l==="boolean")n="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",o=Uint8Array.from(e);else{let l=Mi.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=f1(i);if(this.cpuData&&a!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=a}static async fromImage(e,t){return s1(e,t)}static fromTexture(e,t){return l1(e,t)}static fromGpuBuffer(e,t){return u1(e,t)}static fromMLTensor(e,t){return d1(e,t)}static fromPinnedBuffer(e,t,r){return c1(e,t,r)}toDataURL(e){return a1(this,e)}toImageData(e){return o1(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return h1(this,e)}}}),at,$c=W(()=>{wc(),at=_t}),Yo,_l,lr,Yt,m1=W(()=>{i1(),Yo=(e,t)=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||console.timeStamp(`${e}::ORT::${t}`)},_l=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],n=!1;for(let a=0;a<r.length;a++){if(n&&!r[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Yo("CPU",o);return}r[a].includes("TRACE_FUNC")&&(n=!0)}},lr=e=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||_l("BEGIN",e)},Yt=e=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||_l("END",e)}}),g1,V3=W(()=>{vc(),$c(),m1(),g1=class y1{constructor(t){this.handler=t}async run(t,r,n){lr();let i={},a={};if(typeof t!="object"||t===null||t instanceof at||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof at)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let u=r[f];(u===null||u instanceof at)&&(d=!0,o=!1,i[f]=u)}if(d){if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(o)for(let d of this.outputNames)i[d]=null;let s=await this.handler.run(t,i,a),l={};for(let d in s)if(Object.hasOwnProperty.call(s,d)){let p=s[d];p instanceof at?l[d]=p:l[d]=new at(p.type,p.data,p.dims)}return Yt(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){lr();let a,o={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,u=t.byteLength;if(typeof r=="object"&&r!==null)o=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(u=t.byteLength-f,typeof n=="number"){if(u=n,!Number.isSafeInteger(u))throw new RangeError("'byteLength' must be an integer.");if(u<=0||f+u>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,f,u)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,l]=await yc(o),d=await s.createInferenceSessionHandler(a,l);return Yt(),new y1(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),_c,H3=W(()=>{V3(),_c=g1}),q3=W(()=>{}),G3=W(()=>{}),K3=W(()=>{}),Q3=W(()=>{}),bh,v1,Y3=W(()=>{vc(),$c(),bh="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",v1=class w1{constructor(t,r,n){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=n}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let n=t.evalModel||"",i=t.optimizerModel||"",a=r||{},[o,s]=await yc(a);if(o.createTrainingSessionHandler){let l=await o.createTrainingSessionHandler(t.checkpointState,t.trainModel,n,i,s);return new w1(l,!!t.optimizerModel,!!t.evalModel)}else throw new Error(bh)}typeNarrowingForRunStep(t,r,n,i,a){let o={},s={};if(typeof n!="object"||n===null||n instanceof at||Array.isArray(n))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let l=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof at)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");l=!1;for(let d of i){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);o[d]=null}if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(i);for(let f of r)if(p.indexOf(f)!==-1){let u=i[f];(u===null||u instanceof at)&&(d=!0,l=!1,o[f]=u)}if(d){if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else s=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of t)if(typeof n[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(l)for(let d of r)o[d]=null;return[o,s]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let n in t)if(Object.hasOwnProperty.call(t,n)){let i=t[n];i instanceof at?r[n]=i:r[n]=new at(i.type,i.data,i.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,n){let[i,a]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,n),o=await this.handler.runTrainStep(t,i,a);return this.convertHandlerReturnTypeToMapOfTensors(o)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,n){if(this.hasEvalModel){let[i,a]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,n),o=await this.handler.runEvalStep(t,i,a);return this.convertHandlerReturnTypeToMapOfTensors(o)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let n=await this.getParametersSize(r);if(t.length!==4*n)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),$1,Z3=W(()=>{Y3(),$1=v1}),X3={};wa(X3,{InferenceSession:()=>_c,TRACE:()=>Yo,TRACE_FUNC_BEGIN:()=>lr,TRACE_FUNC_END:()=>Yt,Tensor:()=>at,TrainingSession:()=>$1,env:()=>be,registerBackend:()=>Gn});var Xt=W(()=>{D3(),L3(),H3(),$c(),q3(),G3(),m1(),K3(),Q3(),Z3()}),xc=W(()=>{}),_1={};wa(_1,{default:()=>x1});var xl,bl,x1,J3=W(()=>{var e;v2(),En(),_s(),xl="ort-wasm-proxy-worker",bl=((e=globalThis.self)==null?void 0:e.name)===xl,bl&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":bc(n.wasm).then(()=>{Uc(n).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:a}=n;jc(a,i).then(()=>{postMessage({type:r})},o=>{postMessage({type:r,err:o})});break}case"copy-from":{let{buffer:i}=n,a=ns(i);postMessage({type:r,out:a});break}case"create":{let{model:i,options:a}=n;Wc(i,a).then(o=>{postMessage({type:r,out:o})},o=>{postMessage({type:r,err:o})});break}case"release":Fc(n),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:l}=n;Vc(i,a,o,s,new Array(s.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},qc([...o,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Hc(n),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),x1=bl?null:t=>new Worker(t??Rn,{type:"module",name:xl})}),b1={};wa(b1,{default:()=>S1});var Sl,kl,S1,eS=W(()=>{var e;kl=(Sl=import.meta.url,async function(t={}){function r(){return re.buffer!=j.buffer&&We(),j}function n(){return re.buffer!=j.buffer&&We(),H}function i(){return re.buffer!=j.buffer&&We(),A}function a(){return re.buffer!=j.buffer&&We(),N}function o(){return re.buffer!=j.buffer&&We(),ee}function s(){return re.buffer!=j.buffer&&We(),de}function l(){return re.buffer!=j.buffer&&We(),Se}function d(){return re.buffer!=j.buffer&&We(),$a}var p,f,u=Object.assign({},t),g=new Promise((c,h)=>{p=c,f=h}),v=typeof window=="object",w=typeof importScripts=="function",S=w&&self.name=="em-pthread";u.mountExternalData=(c,h)=>{c.startsWith("./")&&(c=c.substring(2)),(u.Fb||(u.Fb=new Map)).set(c,h)},u.unmountExternalData=()=>{delete u.Fb};var y=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let m=()=>{let c=($,x,k)=>(...T)=>{let M=tr,L=x==null?void 0:x();T=$(...T);let V=x==null?void 0:x();return L!==V&&($=V,k(L),x=k=null),tr!=M?new Promise((q,ne)=>{Ls={resolve:q,reject:ne}}):T},h=$=>async(...x)=>{var k;try{if(u.Eb)throw Error("Session already started");let T=u.Eb={fc:x[0],errors:[]},M=await $(...x);if(u.Eb!==T)throw Error("Session mismatch");(k=u.Gb)==null||k.flush();let L=T.errors;if(0<L.length){let V=await Promise.all(L);if(V=V.filter(q=>q),0<V.length)throw Error(V.join(`
`))}return M}finally{u.Eb=null}};u._OrtCreateSession=c(u._OrtCreateSession,()=>u._OrtCreateSession,$=>u._OrtCreateSession=$),u._OrtRun=h(c(u._OrtRun,()=>u._OrtRun,$=>u._OrtRun=$)),u._OrtRunWithBinding=h(c(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,$=>u._OrtRunWithBinding=$)),u._OrtBindInput=c(u._OrtBindInput,()=>u._OrtBindInput,$=>u._OrtBindInput=$),m=void 0};u.jsepInit=(c,h)=>{if(m==null||m(),c==="webgpu"){[u.Gb,u.Ub,u.Yb,u.Nb,u.Xb,u.jb,u.Zb,u.bc,u.Vb,u.Wb,u.$b]=h;let $=u.Gb;u.jsepRegisterBuffer=(x,k,T,M)=>$.registerBuffer(x,k,T,M),u.jsepGetBuffer=x=>$.getBuffer(x),u.jsepCreateDownloader=(x,k,T)=>$.createDownloader(x,k,T),u.jsepOnReleaseSession=x=>{$.onReleaseSession(x)},u.jsepOnRunStart=x=>$.onRunStart(x),u.cc=(x,k)=>{$.upload(x,k)}}else if(c==="webnn"){[u.Gb,u.ac,u.Ob,u.jsepEnsureTensor,u.dc,u.jsepDownloadTensor]=h,u.jsepReleaseTensorId=u.Ob;let $=u.Gb;u.jsepOnRunStart=x=>$.onRunStart(x),u.jsepRegisterMLContext=(x,k)=>{$.registerMLContext(x,k)},u.jsepOnReleaseSession=x=>{$.onReleaseSession(x)},u.jsepCreateMLTensorDownloader=(x,k)=>$.createMLTensorDownloader(x,k),u.jsepRegisterMLTensor=(x,k,T)=>$.registerMLTensor(x,k,T)}};var _,b,E=Object.assign({},u),I="./this.program",C=(c,h)=>{throw h},z="";(v||w)&&(w?z=self.location.href:typeof document<"u"&&document.currentScript&&(z=document.currentScript.src),Sl&&(z=Sl),z=z.startsWith("blob:")?"":z.substr(0,z.replace(/[?#].*/,"").lastIndexOf("/")+1),w&&(b=c=>{var h=new XMLHttpRequest;return h.open("GET",c,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),_=(c,h,$)=>{var x=new XMLHttpRequest;x.open("GET",c,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?h(x.response):$()},x.onerror=$,x.send(null)});var U,D=console.log.bind(console),Z=console.error.bind(console),ie=D,K=Z;if(Object.assign(u,E),E=null,S){let c=function(h){try{var $=h.data,x=$.cmd;if(x==="load"){let k=[];self.onmessage=T=>k.push(T),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let T of k)c(T);self.onmessage=c};for(let T of $.handlers)u[T]&&!u[T].proxy||(u[T]=(...M)=>{postMessage({Mb:"callHandler",oc:T,args:M})},T=="print"&&(ie=u[T]),T=="printErr"&&(K=u[T]));re=$.wasmMemory,We(),ce($.wasmModule)}else if(x==="run"){Fs($.pthread_ptr,0,0,1,0,0),Bs($.pthread_ptr),B2(),np(),G||(ef(),G=!0);try{D2($.start_routine,$.arg)}catch(k){if(k!="unwind")throw k}}else x==="cancel"?zn()&&Oa(-1):$.target!=="setimmediate"&&(x==="checkMailbox"?G&&ba():x&&(K(`worker: received unknown command ${x}`),K($)))}catch(k){throw tf(),k}};var ce,G=!1;K=function(...h){h=h.join(" "),console.error(h)},self.alert=function(...h){postMessage({Mb:"alert",text:h.join(" "),qc:zn()})},u.instantiateWasm=(h,$)=>new Promise(x=>{ce=k=>{k=new WebAssembly.Instance(k,Xc()),$(k),x()}}),self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=c}u.wasmBinary&&(U=u.wasmBinary);var re,se,R,j,H,A,N,ee,de,Se,we,wt,$a,st=!1;function We(){var c=re.buffer;u.HEAP8=j=new Int8Array(c),u.HEAP16=A=new Int16Array(c),u.HEAPU8=H=new Uint8Array(c),u.HEAPU16=N=new Uint16Array(c),u.HEAP32=ee=new Int32Array(c),u.HEAPU32=de=new Uint32Array(c),u.HEAPF32=Se=new Float32Array(c),u.HEAPF64=$a=new Float64Array(c),u.HEAP64=we=new BigInt64Array(c),u.HEAPU64=wt=new BigUint64Array(c)}if(!S){if(!((re=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof y))throw K("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");We()}var nn=[],Le=[],Qe=[],Tt=0,xr=null;function _a(){if(--Tt==0&&xr){var c=xr;xr=null,c()}}function Cn(c){throw K(c="Aborted("+c+")"),st=!0,R=1,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),f(c),c}var Ss,Kc=c=>c.startsWith("data:application/octet-stream;base64,"),Qc=c=>c.startsWith("file://");function Yc(c){if(c==Ss&&U)return new Uint8Array(U);if(b)return b(c);throw"both async and sync fetching of the wasm failed"}function Zc(c,h,$){return function(x){if(!U&&(v||w)){if(typeof fetch=="function"&&!Qc(x))return fetch(x,{credentials:"same-origin"}).then(k=>{if(!k.ok)throw`failed to load wasm binary file at '${x}'`;return k.arrayBuffer()}).catch(()=>Yc(x));if(_)return new Promise((k,T)=>{_(x,M=>k(new Uint8Array(M)),T)})}return Promise.resolve().then(()=>Yc(x))}(c).then(x=>WebAssembly.instantiate(x,h)).then($,x=>{K(`failed to asynchronously prepare wasm: ${x}`),Cn(x)})}function Xc(){return{a:{O:M2,Aa:P2,b:L2,aa:sp,B:dp,qa:cp,Y:fp,_:hp,ra:mp,oa:gp,ha:yp,na:vp,L:wp,Z:$p,W:_p,pa:xp,X:bp,wa:U2,F:j2,Q:W2,P:V2,E:q2,u:G2,q:K2,G:Q2,A:r_,R:n_,ua:i_,ka:a_,U:o_,ba:s_,H:l_,ja:Bs,ta:u_,t:d_,x:f_,o:h_,l:g_,c:Ps,n:y_,j:$_,w:__,p:x_,g:b_,s:S_,m:k_,e:E_,k:C_,i:T_,h:I_,d:z_,ea:A_,fa:O_,ga:R_,ca:Dp,da:Np,T:P_,f:M_,D:B_,I:D_,M:N_,y:L_,sa:U_,V:j_,v:Up,z:W_,N:F_,S:V_,za:H_,ya:q_,la:Fp,ma:Vp,$:Is,C:Hp,K:qp,ia:Gp,J:Kp,a:re,xa:Ts,va:Zp,r:Q_}}}var ks={868340:(c,h,$,x,k)=>{if(u===void 0||!u.Fb)return 1;if((c=qe(c>>>0)).startsWith("./")&&(c=c.substring(2)),!(c=u.Fb.get(c)))return 2;if(x>>>=0,(h>>>=0)+($>>>=0)>c.byteLength)return 3;try{let T=c.subarray(h,h+$);switch(k){case 0:n().set(T,x>>>0);break;case 1:u.cc(x,T);break;default:return 4}return 0}catch{return 4}},869023:(c,h,$)=>{u.dc(c,n().subarray(h>>>0,h+$>>>0))},869086:()=>u.ac(),869127:c=>{u.Ob(c)},869163:()=>{u.Vb()},869194:()=>{u.Wb()},869223:()=>{u.$b()},869248:c=>u.Ub(c),869281:c=>u.Yb(c),869313:(c,h,$)=>{u.Nb(c,h,$,!0)},869352:(c,h,$)=>{u.Nb(c,h,$)},869385:()=>typeof wasmOffsetConverter<"u",869442:c=>{u.jb("Abs",c,void 0)},869493:c=>{u.jb("Neg",c,void 0)},869544:c=>{u.jb("Floor",c,void 0)},869597:c=>{u.jb("Ceil",c,void 0)},869649:c=>{u.jb("Reciprocal",c,void 0)},869707:c=>{u.jb("Sqrt",c,void 0)},869759:c=>{u.jb("Exp",c,void 0)},869810:c=>{u.jb("Erf",c,void 0)},869861:c=>{u.jb("Sigmoid",c,void 0)},869916:(c,h,$)=>{u.jb("HardSigmoid",c,{alpha:h,beta:$})},869995:c=>{u.jb("Log",c,void 0)},870046:c=>{u.jb("Sin",c,void 0)},870097:c=>{u.jb("Cos",c,void 0)},870148:c=>{u.jb("Tan",c,void 0)},870199:c=>{u.jb("Asin",c,void 0)},870251:c=>{u.jb("Acos",c,void 0)},870303:c=>{u.jb("Atan",c,void 0)},870355:c=>{u.jb("Sinh",c,void 0)},870407:c=>{u.jb("Cosh",c,void 0)},870459:c=>{u.jb("Asinh",c,void 0)},870512:c=>{u.jb("Acosh",c,void 0)},870565:c=>{u.jb("Atanh",c,void 0)},870618:c=>{u.jb("Tanh",c,void 0)},870670:c=>{u.jb("Not",c,void 0)},870721:(c,h,$)=>{u.jb("Clip",c,{min:h,max:$})},870790:c=>{u.jb("Clip",c,void 0)},870842:(c,h)=>{u.jb("Elu",c,{alpha:h})},870900:c=>{u.jb("Gelu",c,void 0)},870952:c=>{u.jb("Relu",c,void 0)},871004:(c,h)=>{u.jb("LeakyRelu",c,{alpha:h})},871068:(c,h)=>{u.jb("ThresholdedRelu",c,{alpha:h})},871138:(c,h)=>{u.jb("Cast",c,{to:h})},871196:c=>{u.jb("Add",c,void 0)},871247:c=>{u.jb("Sub",c,void 0)},871298:c=>{u.jb("Mul",c,void 0)},871349:c=>{u.jb("Div",c,void 0)},871400:c=>{u.jb("Pow",c,void 0)},871451:c=>{u.jb("Equal",c,void 0)},871504:c=>{u.jb("Greater",c,void 0)},871559:c=>{u.jb("GreaterOrEqual",c,void 0)},871621:c=>{u.jb("Less",c,void 0)},871673:c=>{u.jb("LessOrEqual",c,void 0)},871732:(c,h,$,x,k)=>{u.jb("ReduceMean",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},871891:(c,h,$,x,k)=>{u.jb("ReduceMax",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},872049:(c,h,$,x,k)=>{u.jb("ReduceMin",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},872207:(c,h,$,x,k)=>{u.jb("ReduceProd",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},872366:(c,h,$,x,k)=>{u.jb("ReduceSum",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},872524:(c,h,$,x,k)=>{u.jb("ReduceL1",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},872681:(c,h,$,x,k)=>{u.jb("ReduceL2",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},872838:(c,h,$,x,k)=>{u.jb("ReduceLogSum",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},872999:(c,h,$,x,k)=>{u.jb("ReduceSumSquare",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},873163:(c,h,$,x,k)=>{u.jb("ReduceLogSumExp",c,{keepDims:!!h,noopWithEmptyAxes:!!$,axes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},873327:c=>{u.jb("Where",c,void 0)},873380:(c,h,$)=>{u.jb("Transpose",c,{perm:h?Array.from(o().subarray(h>>>0,$>>>0)):[]})},873488:(c,h,$,x)=>{u.jb("DepthToSpace",c,{blocksize:h,mode:qe($),format:x?"NHWC":"NCHW"})},873621:(c,h,$,x)=>{u.jb("DepthToSpace",c,{blocksize:h,mode:qe($),format:x?"NHWC":"NCHW"})},873754:(c,h,$,x,k,T,M,L,V,q,ne,fe,ve,O,pe)=>{u.jb("ConvTranspose",c,{format:V?"NHWC":"NCHW",autoPad:h,dilations:[$],group:x,kernelShape:[k],pads:[T,M],strides:[L],wIsConst:()=>!!r()[q>>>0],outputPadding:ne?Array.from(o().subarray(ne>>>0,fe>>>0)):[],outputShape:ve?Array.from(o().subarray(ve>>>0,O>>>0)):[],activation:qe(pe)})},874155:(c,h,$,x,k,T,M,L,V,q,ne,fe,ve,O)=>{u.jb("ConvTranspose",c,{format:L?"NHWC":"NCHW",autoPad:h,dilations:Array.from(o().subarray($>>>0,2+($>>>0)>>>0)),group:x,kernelShape:Array.from(o().subarray(k>>>0,2+(k>>>0)>>>0)),pads:Array.from(o().subarray(T>>>0,4+(T>>>0)>>>0)),strides:Array.from(o().subarray(M>>>0,2+(M>>>0)>>>0)),wIsConst:()=>!!r()[V>>>0],outputPadding:q?Array.from(o().subarray(q>>>0,ne>>>0)):[],outputShape:fe?Array.from(o().subarray(fe>>>0,ve>>>0)):[],activation:qe(O)})},874720:(c,h,$,x,k,T,M,L,V,q,ne,fe,ve,O,pe)=>{u.jb("ConvTranspose",c,{format:V?"NHWC":"NCHW",autoPad:h,dilations:[$],group:x,kernelShape:[k],pads:[T,M],strides:[L],wIsConst:()=>!!r()[q>>>0],outputPadding:ne?Array.from(o().subarray(ne>>>0,fe>>>0)):[],outputShape:ve?Array.from(o().subarray(ve>>>0,O>>>0)):[],activation:qe(pe)})},875121:(c,h,$,x,k,T,M,L,V,q,ne,fe,ve,O)=>{u.jb("ConvTranspose",c,{format:L?"NHWC":"NCHW",autoPad:h,dilations:Array.from(o().subarray($>>>0,2+($>>>0)>>>0)),group:x,kernelShape:Array.from(o().subarray(k>>>0,2+(k>>>0)>>>0)),pads:Array.from(o().subarray(T>>>0,4+(T>>>0)>>>0)),strides:Array.from(o().subarray(M>>>0,2+(M>>>0)>>>0)),wIsConst:()=>!!r()[V>>>0],outputPadding:q?Array.from(o().subarray(q>>>0,ne>>>0)):[],outputShape:fe?Array.from(o().subarray(fe>>>0,ve>>>0)):[],activation:qe(O)})},875686:(c,h)=>{u.jb("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},875777:(c,h,$,x,k,T,M,L,V,q,ne,fe,ve,O)=>{u.jb("AveragePool",c,{format:O?"NHWC":"NCHW",auto_pad:h,ceil_mode:$,count_include_pad:x,storage_order:k,dilations:T?Array.from(o().subarray(T>>>0,M>>>0)):[],kernel_shape:L?Array.from(o().subarray(L>>>0,V>>>0)):[],pads:q?Array.from(o().subarray(q>>>0,ne>>>0)):[],strides:fe?Array.from(o().subarray(fe>>>0,ve>>>0)):[]})},876192:(c,h)=>{u.jb("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},876283:(c,h,$,x,k,T,M,L,V,q,ne,fe,ve,O)=>{u.jb("AveragePool",c,{format:O?"NHWC":"NCHW",auto_pad:h,ceil_mode:$,count_include_pad:x,storage_order:k,dilations:T?Array.from(o().subarray(T>>>0,M>>>0)):[],kernel_shape:L?Array.from(o().subarray(L>>>0,V>>>0)):[],pads:q?Array.from(o().subarray(q>>>0,ne>>>0)):[],strides:fe?Array.from(o().subarray(fe>>>0,ve>>>0)):[]})},876698:(c,h)=>{u.jb("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},876785:(c,h,$,x,k,T,M,L,V,q,ne,fe,ve,O)=>{u.jb("MaxPool",c,{format:O?"NHWC":"NCHW",auto_pad:h,ceil_mode:$,count_include_pad:x,storage_order:k,dilations:T?Array.from(o().subarray(T>>>0,M>>>0)):[],kernel_shape:L?Array.from(o().subarray(L>>>0,V>>>0)):[],pads:q?Array.from(o().subarray(q>>>0,ne>>>0)):[],strides:fe?Array.from(o().subarray(fe>>>0,ve>>>0)):[]})},877196:(c,h)=>{u.jb("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},877283:(c,h,$,x,k,T,M,L,V,q,ne,fe,ve,O)=>{u.jb("MaxPool",c,{format:O?"NHWC":"NCHW",auto_pad:h,ceil_mode:$,count_include_pad:x,storage_order:k,dilations:T?Array.from(o().subarray(T>>>0,M>>>0)):[],kernel_shape:L?Array.from(o().subarray(L>>>0,V>>>0)):[],pads:q?Array.from(o().subarray(q>>>0,ne>>>0)):[],strides:fe?Array.from(o().subarray(fe>>>0,ve>>>0)):[]})},877694:(c,h,$,x,k)=>{u.jb("Gemm",c,{alpha:h,beta:$,transA:x,transB:k})},877798:c=>{u.jb("MatMul",c,void 0)},877852:(c,h,$,x)=>{u.jb("ArgMax",c,{keepDims:!!h,selectLastIndex:!!$,axis:x})},877960:(c,h,$,x)=>{u.jb("ArgMin",c,{keepDims:!!h,selectLastIndex:!!$,axis:x})},878068:(c,h)=>{u.jb("Softmax",c,{axis:h})},878131:(c,h)=>{u.jb("Concat",c,{axis:h})},878191:(c,h,$,x,k)=>{u.jb("Split",c,{axis:h,numOutputs:$,splitSizes:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},878331:c=>{u.jb("Expand",c,void 0)},878385:(c,h)=>{u.jb("Gather",c,{axis:Number(h)})},878456:(c,h)=>{u.jb("GatherElements",c,{axis:Number(h)})},878535:(c,h,$,x,k,T,M,L,V,q,ne)=>{u.jb("Resize",c,{antialias:h,axes:$?Array.from(o().subarray($>>>0,x>>>0)):[],coordinateTransformMode:qe(k),cubicCoeffA:T,excludeOutside:M,extrapolationValue:L,keepAspectRatioPolicy:qe(V),mode:qe(q),nearestMode:qe(ne)})},878881:(c,h,$,x,k,T,M)=>{u.jb("Slice",c,{starts:h?Array.from(o().subarray(h>>>0,$>>>0)):[],ends:x?Array.from(o().subarray(x>>>0,k>>>0)):[],axes:T?Array.from(o().subarray(T>>>0,M>>>0)):[]})},879097:c=>{u.jb("Tile",c,void 0)},879149:(c,h,$)=>{u.jb("InstanceNormalization",c,{epsilon:h,format:$?"NHWC":"NCHW"})},879263:(c,h,$)=>{u.jb("InstanceNormalization",c,{epsilon:h,format:$?"NHWC":"NCHW"})},879377:c=>{u.jb("Range",c,void 0)},879430:(c,h)=>{u.jb("Einsum",c,{equation:qe(h)})},879511:(c,h,$,x,k)=>{u.jb("Pad",c,{mode:h,value:$,pads:x?Array.from(o().subarray(x>>>0,k>>>0)):[]})},879638:(c,h,$,x,k,T)=>{u.jb("BatchNormalization",c,{epsilon:h,momentum:$,spatial:!!k,trainingMode:!!x,format:T?"NHWC":"NCHW"})},879807:(c,h,$,x,k,T)=>{u.jb("BatchNormalization",c,{epsilon:h,momentum:$,spatial:!!k,trainingMode:!!x,format:T?"NHWC":"NCHW"})},879976:(c,h,$)=>{u.jb("CumSum",c,{exclusive:Number(h),reverse:Number($)})},880073:(c,h,$)=>{u.jb("DequantizeLinear",c,{axis:h,blockSize:$})},880163:(c,h,$,x,k,T,M,L,V)=>{u.jb("Attention",c,{numHeads:h,isUnidirectional:$,maskFilterValue:x,scale:k,doRotary:T,qkvHiddenSizes:M?Array.from(o().subarray(Number(L)>>>0,Number(L)+M>>>0)):[],pastPresentShareBuffer:!!V})},880435:c=>{u.jb("BiasAdd",c,void 0)},880490:c=>{u.jb("BiasSplitGelu",c,void 0)},880551:c=>{u.jb("FastGelu",c,void 0)},880607:(c,h,$,x,k,T,M,L,V,q,ne,fe,ve,O,pe,ze)=>{u.jb("Conv",c,{format:fe?"NHWC":"NCHW",auto_pad:h,dilations:$?Array.from(o().subarray($>>>0,x>>>0)):[],group:k,kernel_shape:T?Array.from(o().subarray(T>>>0,M>>>0)):[],pads:L?Array.from(o().subarray(L>>>0,V>>>0)):[],strides:q?Array.from(o().subarray(q>>>0,ne>>>0)):[],w_is_const:()=>!!r()[ve>>>0],activation:qe(O),activation_params:pe?Array.from(l().subarray(pe>>>0,ze>>>0)):[]})},881103:c=>{u.jb("Gelu",c,void 0)},881155:(c,h,$,x)=>{u.jb("GroupQueryAttention",c,{numHeads:h,kvNumHeads:$,scale:x})},881268:(c,h,$,x)=>{u.jb("LayerNormalization",c,{axis:h,epsilon:$,simplified:!!x})},881379:(c,h,$,x)=>{u.jb("LayerNormalization",c,{axis:h,epsilon:$,simplified:!!x})},881490:(c,h,$,x,k,T)=>{u.jb("MatMulNBits",c,{k:h,n:$,accuracyLevel:x,bits:k,blockSize:T})},881617:(c,h,$,x,k,T)=>{u.jb("MultiHeadAttention",c,{numHeads:h,isUnidirectional:$,maskFilterValue:x,scale:k,doRotary:T})},881776:(c,h)=>{u.jb("QuickGelu",c,{alpha:h})},881840:(c,h,$,x,k)=>{u.jb("RotaryEmbedding",c,{interleaved:!!h,numHeads:$,rotaryEmbeddingDim:x,scale:k})},881979:(c,h,$)=>{u.jb("SkipLayerNormalization",c,{epsilon:h,simplified:!!$})},882081:(c,h,$)=>{u.jb("SkipLayerNormalization",c,{epsilon:h,simplified:!!$})},882183:(c,h,$,x)=>{u.jb("GatherBlockQuantized",c,{gatherAxis:h,quantizeAxis:$,blockSize:x})},882304:c=>{u.Zb(c)},882338:(c,h)=>u.bc(c,h,u.Eb.fc,u.Eb.errors)};function P2(c,h,$){return Op(async()=>{await u.Xb(c,h,$)})}function M2(){return typeof wasmOffsetConverter<"u"}function Es(c){this.name="ExitStatus",this.message=`Program terminated with exit(${c})`,this.status=c}var Cs=c=>{c.terminate(),c.onmessage=()=>{}},Jc=c=>{br.length==0&&(ap(),ip(br[0]));var h=br.pop();if(!h)return 6;on.push(h),Jt[c.Ab]=h,h.Ab=c.Ab;var $={cmd:"run",start_routine:c.hc,arg:c.Qb,pthread_ptr:c.Ab};return h.postMessage($,c.mc),0},an=0,Te=(c,h,...$)=>{for(var x=2*$.length,k=qs(),T=Hs(8*x),M=T>>>3,L=0;L<$.length;L++){var V=$[L];typeof V=="bigint"?(we[M+2*L]=1n,we[M+2*L+1]=V):(we[M+2*L]=0n,d()[M+2*L+1>>>0]=V)}return c=rf(c,0,x,T,h),Ra(k),c};function Ts(c){if(S)return Te(0,1,c);if(R=c,!(0<an)){for(var h of on)Cs(h);for(h of br)Cs(h);br=[],on=[],Jt=[],st=!0}C(c,new Es(c))}function ep(c){if(S)return Te(1,0,c);Is(c)}var Is=c=>{if(R=c,S)throw ep(c),"unwind";Ts(c)},br=[],on=[],tp=[],Jt={},rp=c=>{var h=c.Ab;delete Jt[h],br.push(c),on.splice(on.indexOf(c),1),c.Ab=0,Vs(h)};function np(){tp.forEach(c=>c())}var ip=c=>new Promise(h=>{c.onmessage=k=>{var T=(k=k.data).cmd;if(k.targetThread&&k.targetThread!=zn()){var M=Jt[k.targetThread];M?M.postMessage(k,k.transferList):K(`Internal error! Worker sent a message "${T}" to target pthread ${k.targetThread}, but that thread no longer exists!`)}else T==="checkMailbox"?ba():T==="spawnThread"?Jc(k):T==="cleanupThread"?rp(Jt[k.thread]):T==="killThread"?(k=k.thread,T=Jt[k],delete Jt[k],Cs(T),Vs(k),on.splice(on.indexOf(T),1),T.Ab=0):T==="cancelThread"?Jt[k.thread].postMessage({cmd:"cancel"}):T==="loaded"?(c.loaded=!0,h(c)):T==="alert"?alert(`Thread ${k.threadId}: ${k.text}`):k.target==="setimmediate"?c.postMessage(k):T==="callHandler"?u[k.handler](...k.args):T&&K(`worker sent an unknown command ${T}`)},c.onerror=k=>{throw K(`worker sent an error! ${k.filename}:${k.lineno}: ${k.message}`),k};var $,x=[];for($ of[])u.hasOwnProperty($)&&x.push($);c.postMessage({cmd:"load",handlers:x,wasmMemory:re,wasmModule:se})});function ap(){var c=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});br.push(c)}var xa=c=>{for(;0<c.length;)c.shift()(u)},B2=()=>{var c=zn(),h=s()[c+52>>>2>>>0];c=s()[c+56>>>2>>>0],af(h,h-c),Ra(h)},D2=(c,h)=>{an=0,c=of(c,h),0<an?R=c:Oa(c)};class N2{constructor(h){this.Jb=h-24}}function L2(c,h,$){var x=new N2(c>>>=0);throw h>>>=0,$>>>=0,s()[x.Jb+16>>>2>>>0]=0,s()[x.Jb+4>>>2>>>0]=h,s()[x.Jb+8>>>2>>>0]=$,c}function op(c,h,$,x){return S?Te(2,1,c,h,$,x):sp(c,h,$,x)}function sp(c,h,$,x){if(c>>>=0,h>>>=0,$>>>=0,x>>>=0,y===void 0)return K("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var k=[];return S&&k.length===0?op(c,h,$,x):(c={hc:$,Ab:c,Qb:x,mc:k},S?(c.Mb="spawnThread",postMessage(c,k),0):Jc(c))}var lp=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,up=(c,h,$)=>{var x=(h>>>=0)+$;for($=h;c[$]&&!($>=x);)++$;if(16<$-h&&c.buffer&&lp)return lp.decode(c.buffer instanceof y?c.slice(h,$):c.subarray(h,$));for(x="";h<$;){var k=c[h++];if(128&k){var T=63&c[h++];if((224&k)==192)x+=String.fromCharCode((31&k)<<6|T);else{var M=63&c[h++];65536>(k=(240&k)==224?(15&k)<<12|T<<6|M:(7&k)<<18|T<<12|M<<6|63&c[h++])?x+=String.fromCharCode(k):(k-=65536,x+=String.fromCharCode(55296|k>>10,56320|1023&k))}}else x+=String.fromCharCode(k)}return x},qe=(c,h)=>(c>>>=0)?up(n(),c,h):"";function dp(c,h,$){return S?Te(3,1,c,h,$):0}function cp(c,h){if(S)return Te(4,1,c,h)}var zs=c=>{for(var h=0,$=0;$<c.length;++$){var x=c.charCodeAt($);127>=x?h++:2047>=x?h+=2:55296<=x&&57343>=x?(h+=4,++$):h+=3}return h},pp=(c,h,$,x)=>{if(!(0<x))return 0;var k=$>>>=0;x=$+x-1;for(var T=0;T<c.length;++T){var M=c.charCodeAt(T);if(55296<=M&&57343>=M&&(M=65536+((1023&M)<<10)|1023&c.charCodeAt(++T)),127>=M){if($>=x)break;h[$++>>>0]=M}else{if(2047>=M){if($+1>=x)break;h[$++>>>0]=192|M>>6}else{if(65535>=M){if($+2>=x)break;h[$++>>>0]=224|M>>12}else{if($+3>=x)break;h[$++>>>0]=240|M>>18,h[$++>>>0]=128|M>>12&63}h[$++>>>0]=128|M>>6&63}h[$++>>>0]=128|63&M}}return h[$>>>0]=0,$-k},Tn=(c,h,$)=>pp(c,n(),h,$);function fp(c,h){if(S)return Te(5,1,c,h)}function hp(c,h,$){if(S)return Te(6,1,c,h,$)}function mp(c,h,$){return S?Te(7,1,c,h,$):0}function gp(c,h){if(S)return Te(8,1,c,h)}function yp(c,h,$){if(S)return Te(9,1,c,h,$)}function vp(c,h,$,x){if(S)return Te(10,1,c,h,$,x)}function wp(c,h,$,x){if(S)return Te(11,1,c,h,$,x)}function $p(c,h,$,x){if(S)return Te(12,1,c,h,$,x)}function _p(c){if(S)return Te(13,1,c)}function xp(c,h){if(S)return Te(14,1,c,h)}function bp(c,h,$){if(S)return Te(15,1,c,h,$)}var Sp,Sr,U2=()=>{Cn("")},er=c=>{for(var h="";n()[c>>>0];)h+=Sp[n()[c++>>>0]];return h},As={},Os={};function dr(c,h,$={}){if(!("argPackAdvance"in h))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(x,k,T={}){var M=k.name;if(!x)throw new Sr(`type "${M}" must have a positive integer typeid pointer`);if(Os.hasOwnProperty(x)){if(T.Sb)return;throw new Sr(`Cannot register type '${M}' twice`)}Os[x]=k,As.hasOwnProperty(x)&&(k=As[x],delete As[x],k.forEach(L=>L()))}(c,h,$)}var kp=(c,h,$)=>{switch(h){case 1:return $?x=>r()[x>>>0]:x=>n()[x>>>0];case 2:return $?x=>i()[x>>>1>>>0]:x=>a()[x>>>1>>>0];case 4:return $?x=>o()[x>>>2>>>0]:x=>s()[x>>>2>>>0];case 8:return $?x=>we[x>>>3]:x=>wt[x>>>3];default:throw new TypeError(`invalid integer width (${h}): ${c}`)}};function j2(c,h,$){$>>>=0,dr(c>>>=0,{name:h=er(h>>>0),fromWireType:x=>x,toWireType:function(x,k){if(typeof k!="bigint"&&typeof k!="number")throw k=k===null?"null":(x=typeof k)=="object"||x==="array"||x==="function"?k.toString():""+k,new TypeError(`Cannot convert "${k}" to ${this.name}`);return typeof k=="number"&&(k=BigInt(k)),k},argPackAdvance:kr,readValueFromPointer:kp(h,$,h.indexOf("u")==-1),Db:null})}var kr=8;function W2(c,h,$,x){dr(c>>>=0,{name:h=er(h>>>0),fromWireType:function(k){return!!k},toWireType:function(k,T){return T?$:x},argPackAdvance:kr,readValueFromPointer:function(k){return this.fromWireType(n()[k>>>0])},Db:null})}var Rs=[],cr=[];function Ps(c){9<(c>>>=0)&&--cr[c+1]==0&&(cr[c]=void 0,Rs.push(c))}var It=c=>{if(!c)throw new Sr("Cannot use deleted val. handle = "+c);return cr[c]},zt=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Rs.pop()||cr.length;return cr[h]=c,cr[h+1]=1,h}};function Ms(c){return this.fromWireType(s()[c>>>2>>>0])}var F2={name:"emscripten::val",fromWireType:c=>{var h=It(c);return Ps(c),h},toWireType:(c,h)=>zt(h),argPackAdvance:kr,readValueFromPointer:Ms,Db:null};function V2(c){return dr(c>>>0,F2)}var H2=(c,h)=>{switch(h){case 4:return function($){return this.fromWireType(l()[$>>>2>>>0])};case 8:return function($){return this.fromWireType(d()[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${c}`)}};function q2(c,h,$){$>>>=0,dr(c>>>=0,{name:h=er(h>>>0),fromWireType:x=>x,toWireType:(x,k)=>k,argPackAdvance:kr,readValueFromPointer:H2(h,$),Db:null})}function G2(c,h,$,x,k){if(c>>>=0,$>>>=0,h=er(h>>>0),k===-1&&(k=4294967295),k=L=>L,x===0){var T=32-8*$;k=L=>L<<T>>>T}var M=h.includes("unsigned")?function(L,V){return V>>>0}:function(L,V){return V};dr(c,{name:h,fromWireType:k,toWireType:M,argPackAdvance:kr,readValueFromPointer:kp(h,$,x!==0),Db:null})}function K2(c,h,$){function x(T){var M=s()[T>>>2>>>0];return T=s()[T+4>>>2>>>0],new k(r().buffer,T,M)}var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];dr(c>>>=0,{name:$=er($>>>0),fromWireType:x,argPackAdvance:kr,readValueFromPointer:x},{Sb:!0})}function Q2(c,h){c>>>=0;var $=(h=er(h>>>0))==="std::string";dr(c,{name:h,fromWireType:function(x){var k=s()[x>>>2>>>0],T=x+4;if($)for(var M=T,L=0;L<=k;++L){var V=T+L;if(L==k||n()[V>>>0]==0){if(M=qe(M,V-M),q===void 0)var q=M;else q+="\0",q+=M;M=V+1}}else{for(q=Array(k),L=0;L<k;++L)q[L]=String.fromCharCode(n()[T+L>>>0]);q=q.join("")}return rr(x),q},toWireType:function(x,k){k instanceof ArrayBuffer&&(k=new Uint8Array(k));var T=typeof k=="string";if(!(T||k instanceof Uint8Array||k instanceof Uint8ClampedArray||k instanceof Int8Array))throw new Sr("Cannot pass non-string to std::string");var M=$&&T?zs(k):k.length,L=Aa(4+M+1),V=L+4;if(s()[L>>>2>>>0]=M,$&&T)Tn(k,V,M+1);else if(T)for(T=0;T<M;++T){var q=k.charCodeAt(T);if(255<q)throw rr(V),new Sr("String has UTF-16 code units that do not fit in 8 bits");n()[V+T>>>0]=q}else for(T=0;T<M;++T)n()[V+T>>>0]=k[T];return x!==null&&x.push(rr,L),L},argPackAdvance:kr,readValueFromPointer:Ms,Db(x){rr(x)}})}var Ep=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Y2=(c,h)=>{for(var $=c>>1,x=$+h/2;!($>=x)&&a()[$>>>0];)++$;if(32<($<<=1)-c&&Ep)return Ep.decode(n().slice(c,$));for($="",x=0;!(x>=h/2);++x){var k=i()[c+2*x>>>1>>>0];if(k==0)break;$+=String.fromCharCode(k)}return $},Z2=(c,h,$)=>{if($??($=2147483647),2>$)return 0;var x=h;$=($-=2)<2*c.length?$/2:c.length;for(var k=0;k<$;++k){var T=c.charCodeAt(k);i()[h>>>1>>>0]=T,h+=2}return i()[h>>>1>>>0]=0,h-x},X2=c=>2*c.length,J2=(c,h)=>{for(var $=0,x="";!($>=h/4);){var k=o()[c+4*$>>>2>>>0];if(k==0)break;++$,65536<=k?(k-=65536,x+=String.fromCharCode(55296|k>>10,56320|1023&k)):x+=String.fromCharCode(k)}return x},e_=(c,h,$)=>{if(h>>>=0,$??($=2147483647),4>$)return 0;var x=h;$=x+$-4;for(var k=0;k<c.length;++k){var T=c.charCodeAt(k);if(55296<=T&&57343>=T&&(T=65536+((1023&T)<<10)|1023&c.charCodeAt(++k)),o()[h>>>2>>>0]=T,(h+=4)+4>$)break}return o()[h>>>2>>>0]=0,h-x},t_=c=>{for(var h=0,$=0;$<c.length;++$){var x=c.charCodeAt($);55296<=x&&57343>=x&&++$,h+=4}return h};function r_(c,h,$){if(c>>>=0,h>>>=0,$=er($>>>=0),h===2)var x=Y2,k=Z2,T=X2,M=L=>a()[L>>>1>>>0];else h===4&&(x=J2,k=e_,T=t_,M=L=>s()[L>>>2>>>0]);dr(c,{name:$,fromWireType:L=>{for(var V,q=s()[L>>>2>>>0],ne=L+4,fe=0;fe<=q;++fe){var ve=L+4+fe*h;fe!=q&&M(ve)!=0||(ne=x(ne,ve-ne),V===void 0?V=ne:(V+="\0",V+=ne),ne=ve+h)}return rr(L),V},toWireType:(L,V)=>{if(typeof V!="string")throw new Sr(`Cannot pass non-string to C++ string type ${$}`);var q=T(V),ne=Aa(4+q+h);return s()[ne>>>2>>>0]=q/h,k(V,ne+4,q+h),L!==null&&L.push(rr,ne),ne},argPackAdvance:kr,readValueFromPointer:Ms,Db(L){rr(L)}})}function n_(c,h){dr(c>>>=0,{Tb:!0,name:h=er(h>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var i_=()=>1;function a_(c){Fs(c>>>0,!w,1,!v,131072,!1),np()}var Cp=c=>{if(!st)try{if(c(),!(0<an))try{S?Oa(R):Is(R)}catch(h){h instanceof Es||h=="unwind"||C(1,h)}}catch(h){h instanceof Es||h=="unwind"||C(1,h)}};function Bs(c){c>>>=0,typeof Atomics.nc=="function"&&(Atomics.nc(o(),c>>>2,c).value.then(ba),c+=128,Atomics.store(o(),c>>>2,1))}var ba=()=>{var c=zn();c&&(Bs(c),Cp(nf))};function o_(c,h){(c>>>=0)==h>>>0?setTimeout(ba):S?postMessage({targetThread:c,cmd:"checkMailbox"}):(c=Jt[c])&&c.postMessage({cmd:"checkMailbox"})}var Ds=[];function s_(c,h,$,x,k){for(h>>>=0,x/=2,Ds.length=x,$=k>>>0>>>3,k=0;k<x;k++)Ds[k]=we[$+2*k]?we[$+2*k+1]:d()[$+2*k+1>>>0];return(h?ks[h]:Y_[c])(...Ds)}function l_(c){c>>>=0,S?postMessage({cmd:"cleanupThread",thread:c}):rp(Jt[c])}function u_(c){}var Ns=(c,h)=>{var $=Os[c];if($===void 0)throw c=Jp(c),$=er(c),rr(c),new Sr(`${h} has unknown type ${$}`);return $},Tp=(c,h,$)=>{var x=[];return c=c.toWireType(x,$),x.length&&(s()[h>>>2>>>0]=zt(x)),c};function d_(c,h,$){return h>>>=0,$>>>=0,c=It(c>>>0),h=Ns(h,"emval::as"),Tp(h,$,c)}var Sa=c=>{try{c()}catch(h){Cn(h)}},Er=0,tr=null,Ip=0,ka=[],zp={},Ap={},c_=0,Ls=null,p_=[];function Op(c){return function(h){if(!st){if(Er===0){var $=!1,x=!1;h((k=0)=>{if(!st&&(Ip=k,$=!0,x)){Er=2,Sa(()=>uf(tr)),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.resume(),k=!1;try{var T=function(){var V=o()[tr+8>>>2>>>0];return V=te[Ap[V]],--an,V()}()}catch(V){T=V,k=!0}var M=!1;if(!tr){var L=Ls;L&&(Ls=null,(k?L.reject:L.resolve)(T),M=!0)}if(k&&!M)throw T}}),x=!0,$||(Er=1,tr=function(){var k=Aa(65548),T=k+12;s()[k>>>2>>>0]=T,s()[k+4>>>2>>>0]=T+65536,T=ka[0];var M=zp[T];return M===void 0&&(M=c_++,zp[T]=M,Ap[M]=T),T=M,o()[k+8>>>2>>>0]=T,k}(),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.pause(),Sa(()=>sf(tr)))}else Er===2?(Er=0,Sa(df),rr(tr),tr=null,p_.forEach(Cp)):Cn(`invalid state: ${Er}`);return Ip}}(h=>{c().then(h)})}function f_(c){return c>>>=0,Op(()=>(c=It(c)).then(zt))}var Ea=[];function h_(c,h,$,x){return $>>>=0,x>>>=0,(c=Ea[c>>>0])(null,h=It(h>>>0),$,x)}var m_={},Ca=c=>{var h=m_[c];return h===void 0?er(c):h};function g_(c,h,$,x,k){return $>>>=0,x>>>=0,k>>>=0,(c=Ea[c>>>0])(h=It(h>>>0),h[$=Ca($)],x,k)}var Rp=()=>typeof globalThis=="object"?globalThis:Function("return this")();function y_(c){return(c>>>=0)==0?zt(Rp()):(c=Ca(c),zt(Rp()[c]))}var v_=c=>{var h=Ea.length;return Ea.push(c),h},w_=(c,h)=>{for(var $=Array(c),x=0;x<c;++x)$[x]=Ns(s()[h+4*x>>>2>>>0],"parameter "+x);return $},Pp=(c,h)=>Object.defineProperty(h,"name",{value:c});function $_(c,h,$){var x=(h=w_(c,h>>>0)).shift();c--;var k=`return function (obj, func, destructorsRef, args) {
`,T=0,M=[];$===0&&M.push("obj");for(var L=["retType"],V=[x],q=0;q<c;++q)M.push("arg"+q),L.push("argType"+q),V.push(h[q]),k+=`  var arg${q} = argType${q}.readValueFromPointer(args${T?"+"+T:""});
`,T+=h[q].argPackAdvance;return k+=`  var rv = ${$===1?"new func":"func.call"}(${M.join(", ")});
`,x.Tb||(L.push("emval_returnValue"),V.push(Tp),k+=`  return emval_returnValue(retType, destructorsRef, rv);
`),L.push(k+`};
`),c=function(ne){var fe=Function;if(!(fe instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof fe} which is not a function`);var ve=Pp(fe.name||"unknownFunctionName",function(){});return ve.prototype=fe.prototype,ve=new ve,(ne=fe.apply(ve,ne))instanceof Object?ne:ve}(L)(...V),$=`methodCaller<(${h.map(ne=>ne.name).join(", ")}) => ${x.name}>`,v_(Pp($,c))}function __(c){return c=Ca(c>>>0),zt(u[c])}function x_(c,h){return h>>>=0,c=It(c>>>0),h=It(h),zt(c[h])}function b_(c){9<(c>>>=0)&&(cr[c+1]+=1)}function S_(){return zt([])}function k_(c){c=It(c>>>0);for(var h=Array(c.length),$=0;$<c.length;$++)h[$]=c[$];return zt(h)}function E_(c){return zt(Ca(c>>>0))}function C_(){return zt({})}function T_(c){for(var h=It(c>>>=0);h.length;){var $=h.pop();h.pop()($)}Ps(c)}function I_(c,h,$){h>>>=0,$>>>=0,c=It(c>>>0),h=It(h),$=It($),c[h]=$}function z_(c,h){return h>>>=0,c=(c=Ns(c>>>0,"_emval_take_value")).readValueFromPointer(h),zt(c)}function A_(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),o()[h>>>2>>>0]=c.getUTCSeconds(),o()[h+4>>>2>>>0]=c.getUTCMinutes(),o()[h+8>>>2>>>0]=c.getUTCHours(),o()[h+12>>>2>>>0]=c.getUTCDate(),o()[h+16>>>2>>>0]=c.getUTCMonth(),o()[h+20>>>2>>>0]=c.getUTCFullYear()-1900,o()[h+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,o()[h+28>>>2>>>0]=c}var In=c=>c%4==0&&(c%100!=0||c%400==0),Mp=[0,31,60,91,121,152,182,213,244,274,305,335],Bp=[0,31,59,90,120,151,181,212,243,273,304,334];function O_(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),o()[h>>>2>>>0]=c.getSeconds(),o()[h+4>>>2>>>0]=c.getMinutes(),o()[h+8>>>2>>>0]=c.getHours(),o()[h+12>>>2>>>0]=c.getDate(),o()[h+16>>>2>>>0]=c.getMonth(),o()[h+20>>>2>>>0]=c.getFullYear()-1900,o()[h+24>>>2>>>0]=c.getDay();var $=(In(c.getFullYear())?Mp:Bp)[c.getMonth()]+c.getDate()-1|0;o()[h+28>>>2>>>0]=$,o()[h+36>>>2>>>0]=-60*c.getTimezoneOffset(),$=new Date(c.getFullYear(),6,1).getTimezoneOffset();var x=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|($!=x&&c.getTimezoneOffset()==Math.min(x,$)),o()[h+32>>>2>>>0]=c}function R_(c){c>>>=0;var h=new Date(o()[c+20>>>2>>>0]+1900,o()[c+16>>>2>>>0],o()[c+12>>>2>>>0],o()[c+8>>>2>>>0],o()[c+4>>>2>>>0],o()[c>>>2>>>0],0),$=o()[c+32>>>2>>>0],x=h.getTimezoneOffset(),k=new Date(h.getFullYear(),6,1).getTimezoneOffset(),T=new Date(h.getFullYear(),0,1).getTimezoneOffset(),M=Math.min(T,k);return 0>$?o()[c+32>>>2>>>0]=+(k!=T&&M==x):0<$!=(M==x)&&(k=Math.max(T,k),h.setTime(h.getTime()+6e4*((0<$?M:k)-x))),o()[c+24>>>2>>>0]=h.getDay(),$=(In(h.getFullYear())?Mp:Bp)[h.getMonth()]+h.getDate()-1|0,o()[c+28>>>2>>>0]=$,o()[c>>>2>>>0]=h.getSeconds(),o()[c+4>>>2>>>0]=h.getMinutes(),o()[c+8>>>2>>>0]=h.getHours(),o()[c+12>>>2>>>0]=h.getDate(),o()[c+16>>>2>>>0]=h.getMonth(),o()[c+20>>>2>>>0]=h.getYear(),c=h.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function Dp(c,h,$,x,k,T,M){return S?Te(16,1,c,h,$,x,k,T,M):-52}function Np(c,h,$,x,k,T){if(S)return Te(17,1,c,h,$,x,k,T)}function P_(c,h,$,x){c>>>=0,h>>>=0,$>>>=0,x>>>=0;var k=new Date().getFullYear(),T=new Date(k,0,1),M=new Date(k,6,1);k=T.getTimezoneOffset();var L=M.getTimezoneOffset(),V=Math.max(k,L);s()[c>>>2>>>0]=60*V,o()[h>>>2>>>0]=+(k!=L),T=(c=q=>q.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(T),M=c(M),L<k?(Tn(T,$,17),Tn(M,x,17)):(Tn(T,x,17),Tn(M,$,17))}var Us=[],Lp=(c,h)=>{Us.length=0;for(var $;$=n()[c++>>>0];){var x=$!=105;h+=(x&=$!=112)&&h%8?4:0,Us.push($==112?s()[h>>>2>>>0]:$==106?we[h>>>3]:$==105?o()[h>>>2>>>0]:d()[h>>>3>>>0]),h+=x?8:4}return Us};function M_(c,h,$){return c>>>=0,h=Lp(h>>>0,$>>>0),ks[c](...h)}function B_(c,h,$){return c>>>=0,h=Lp(h>>>0,$>>>0),ks[c](...h)}var D_=()=>{},N_=()=>Date.now();function L_(c,h){return K(qe(c>>>0,h>>>0))}var Up,U_=()=>{throw an+=1,"unwind"};function j_(){return 4294901760}Up=()=>performance.timeOrigin+performance.now();var W_=()=>navigator.hardwareConcurrency;function F_(){return Cn("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function V_(c){c>>>=0;var h=n().length;if(c<=h||4294901760<c)return!1;for(var $=1;4>=$;$*=2){var x=h*(1+.2/$);x=Math.min(x,c+100663296);var k=Math;x=Math.max(c,x);e:{k=(k.min.call(k,4294901760,x+(65536-x%65536)%65536)-re.buffer.byteLength+65535)/65536;try{re.grow(k),We();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}var Ta=()=>(Cn("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),hi={},jp=c=>{c.forEach(h=>{Ta()})};function H_(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),jp(c),hi.Pb=Ta(),hi.ec=c,hi.Pb}function q_(c,h,$){if(c>>>=0,h>>>=0,hi.Pb==c)var x=hi.ec;else(x=Error().stack.toString().split(`
`))[0]=="Error"&&x.shift(),jp(x);for(var k=3;x[k]&&Ta()!=c;)++k;for(c=0;c<$&&x[c+k];++c)o()[h+4*c>>>2>>>0]=Ta();return c}var js,Ws={},Wp=()=>{if(!js){var c,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:I};for(c in Ws)Ws[c]===void 0?delete h[c]:h[c]=Ws[c];var $=[];for(c in h)$.push(`${c}=${h[c]}`);js=$}return js};function Fp(c,h){if(S)return Te(18,1,c,h);c>>>=0,h>>>=0;var $=0;return Wp().forEach((x,k)=>{var T=h+$;for(k=s()[c+4*k>>>2>>>0]=T,T=0;T<x.length;++T)r()[k++>>>0]=x.charCodeAt(T);r()[k>>>0]=0,$+=x.length+1}),0}function Vp(c,h){if(S)return Te(19,1,c,h);c>>>=0,h>>>=0;var $=Wp();s()[c>>>2>>>0]=$.length;var x=0;return $.forEach(k=>x+=k.length+1),s()[h>>>2>>>0]=x,0}function Hp(c){return S?Te(20,1,c):52}function qp(c,h,$,x){return S?Te(21,1,c,h,$,x):52}function Gp(c,h,$,x){return S?Te(22,1,c,h,$,x):70}var G_=[null,[],[]];function Kp(c,h,$,x){if(S)return Te(23,1,c,h,$,x);h>>>=0,$>>>=0,x>>>=0;for(var k=0,T=0;T<$;T++){var M=s()[h>>>2>>>0],L=s()[h+4>>>2>>>0];h+=8;for(var V=0;V<L;V++){var q=n()[M+V>>>0],ne=G_[c];q===0||q===10?((c===1?ie:K)(up(ne,0)),ne.length=0):ne.push(q)}k+=L}return s()[x>>>2>>>0]=k,0}var Qp=[31,29,31,30,31,30,31,31,30,31,30,31],Yp=[31,28,31,30,31,30,31,31,30,31,30,31],K_=(c,h)=>{r().set(c,h>>>0)};function Zp(c,h,$,x){function k(O,pe,ze){for(O=typeof O=="number"?O.toString():O||"";O.length<pe;)O=ze[0]+O;return O}function T(O,pe){return k(O,pe,"0")}function M(O,pe){function ze(pf){return 0>pf?-1:0<pf?1:0}var sn;return(sn=ze(O.getFullYear()-pe.getFullYear()))===0&&(sn=ze(O.getMonth()-pe.getMonth()))===0&&(sn=ze(O.getDate()-pe.getDate())),sn}function L(O){switch(O.getDay()){case 0:return new Date(O.getFullYear()-1,11,29);case 1:return O;case 2:return new Date(O.getFullYear(),0,3);case 3:return new Date(O.getFullYear(),0,2);case 4:return new Date(O.getFullYear(),0,1);case 5:return new Date(O.getFullYear()-1,11,31);case 6:return new Date(O.getFullYear()-1,11,30)}}function V(O){var pe=O.Bb;for(O=new Date(new Date(O.Cb+1900,0,1).getTime());0<pe;){var ze=O.getMonth(),sn=(In(O.getFullYear())?Qp:Yp)[ze];if(!(pe>sn-O.getDate())){O.setDate(O.getDate()+pe);break}pe-=sn-O.getDate()+1,O.setDate(1),11>ze?O.setMonth(ze+1):(O.setMonth(0),O.setFullYear(O.getFullYear()+1))}return ze=new Date(O.getFullYear()+1,0,4),pe=L(new Date(O.getFullYear(),0,4)),ze=L(ze),0>=M(pe,O)?0>=M(ze,O)?O.getFullYear()+1:O.getFullYear():O.getFullYear()-1}c>>>=0,h>>>=0,$>>>=0,x>>>=0;var q=s()[x+40>>>2>>>0];for(var ne in x={kc:o()[x>>>2>>>0],jc:o()[x+4>>>2>>>0],Hb:o()[x+8>>>2>>>0],Lb:o()[x+12>>>2>>>0],Ib:o()[x+16>>>2>>>0],Cb:o()[x+20>>>2>>>0],ub:o()[x+24>>>2>>>0],Bb:o()[x+28>>>2>>>0],rc:o()[x+32>>>2>>>0],ic:o()[x+36>>>2>>>0],lc:q?qe(q):""},$=qe($),q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})$=$.replace(new RegExp(ne,"g"),q[ne]);var fe="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ve="January February March April May June July August September October November December".split(" ");for(ne in q={"%a":O=>fe[O.ub].substring(0,3),"%A":O=>fe[O.ub],"%b":O=>ve[O.Ib].substring(0,3),"%B":O=>ve[O.Ib],"%C":O=>T((O.Cb+1900)/100|0,2),"%d":O=>T(O.Lb,2),"%e":O=>k(O.Lb,2," "),"%g":O=>V(O).toString().substring(2),"%G":V,"%H":O=>T(O.Hb,2),"%I":O=>((O=O.Hb)==0?O=12:12<O&&(O-=12),T(O,2)),"%j":O=>{for(var pe=0,ze=0;ze<=O.Ib-1;pe+=(In(O.Cb+1900)?Qp:Yp)[ze++]);return T(O.Lb+pe,3)},"%m":O=>T(O.Ib+1,2),"%M":O=>T(O.jc,2),"%n":()=>`
`,"%p":O=>0<=O.Hb&&12>O.Hb?"AM":"PM","%S":O=>T(O.kc,2),"%t":()=>"	","%u":O=>O.ub||7,"%U":O=>T(Math.floor((O.Bb+7-O.ub)/7),2),"%V":O=>{var pe=Math.floor((O.Bb+7-(O.ub+6)%7)/7);if(2>=(O.ub+371-O.Bb-2)%7&&pe++,pe)pe==53&&((ze=(O.ub+371-O.Bb)%7)==4||ze==3&&In(O.Cb)||(pe=1));else{pe=52;var ze=(O.ub+7-O.Bb-1)%7;(ze==4||ze==5&&In(O.Cb%400-1))&&pe++}return T(pe,2)},"%w":O=>O.ub,"%W":O=>T(Math.floor((O.Bb+7-(O.ub+6)%7)/7),2),"%y":O=>(O.Cb+1900).toString().substring(2),"%Y":O=>O.Cb+1900,"%z":O=>{var pe=0<=(O=O.ic);return O=Math.abs(O)/60,(pe?"+":"-")+("0000"+(O/60*100+O%60)).slice(-4)},"%Z":O=>O.lc,"%%":()=>"%"},$=$.replace(/%%/g,"\0\0"),q)$.includes(ne)&&($=$.replace(new RegExp(ne,"g"),q[ne](x)));return ne=function(O){var pe=Array(zs(O)+1);return pp(O,pe,0,pe.length),pe}($=$.replace(/\0\0/g,"%")),ne.length>h?0:(K_(ne,c),ne.length-1)}function Q_(c,h,$,x){return Zp(c>>>0,h>>>0,$>>>0,x>>>0)}S||function(){for(var c=u.numThreads-1;c--;)ap();nn.unshift(()=>{Tt++,function(h){S?h():Promise.all(br.map(ip)).then(h)}(()=>_a())})}();for(var Xp=Array(256),Ia=0;256>Ia;++Ia)Xp[Ia]=String.fromCharCode(Ia);Sp=Xp,Sr=u.BindingError=class extends Error{constructor(c){super(c),this.name="BindingError"}},u.InternalError=class extends Error{constructor(c){super(c),this.name="InternalError"}},cr.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>cr.length/2-5-Rs.length;var Y_=[Ts,ep,op,dp,cp,fp,hp,mp,gp,yp,vp,wp,$p,_p,xp,bp,Dp,Np,Fp,Vp,Hp,qp,Gp,Kp],te=function(){function c($,x){return te=$.exports,te=function(){var k=te,T={};for(let[M,L]of Object.entries(k))T[M]=typeof L=="function"?(...V)=>{ka.push(M);try{return L(...V)}finally{st||(ka.pop(),tr&&Er===1&&ka.length===0&&(Er=0,an+=1,Sa(lf),typeof Fibers<"u"&&Fibers.sc()))}}:L;return T}(),te=function(){var k=te,T=L=>V=>L(V)>>>0,M=L=>()=>L()>>>0;return(k=Object.assign({},k)).Ca=T(k.Ca),k.fb=M(k.fb),k.gb=T(k.gb),k.emscripten_main_runtime_thread_id=M(k.emscripten_main_runtime_thread_id),k.sb=T(k.sb),k.tb=M(k.tb),k}(),tp.push(te.ib),Le.unshift(te.Ba),se=x,_a(),te}var h=Xc();if(Tt++,u.instantiateWasm)try{return u.instantiateWasm(h,c)}catch($){K(`Module.instantiateWasm callback failed with error: ${$}`),f($)}return Ss||(Ss=u.locateFile?Kc("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",z):z+"ort-wasm-simd-threaded.jsep.wasm":new URL("/colorize/assets/ort-wasm-simd-threaded.jsep-Bj7LIWiD.wasm",import.meta.url).href),function($,x){var k=Ss;return U||typeof WebAssembly.instantiateStreaming!="function"||Kc(k)||Qc(k)||typeof fetch!="function"?Zc(k,$,x):fetch(k,{credentials:"same-origin"}).then(T=>WebAssembly.instantiateStreaming(T,$).then(x,function(M){return K(`wasm streaming compile failed: ${M}`),K("falling back to ArrayBuffer instantiation"),Zc(k,$,x)}))}(h,function($){c($.instance,$.module)}).catch(f),{}}(),Jp=c=>(Jp=te.Ca)(c),ef=()=>(ef=te.Da)();u._OrtInit=(c,h)=>(u._OrtInit=te.Ea)(c,h),u._OrtGetLastError=(c,h)=>(u._OrtGetLastError=te.Fa)(c,h),u._OrtCreateSessionOptions=(c,h,$,x,k,T,M,L,V,q)=>(u._OrtCreateSessionOptions=te.Ga)(c,h,$,x,k,T,M,L,V,q),u._OrtAppendExecutionProvider=(c,h)=>(u._OrtAppendExecutionProvider=te.Ha)(c,h),u._OrtAddFreeDimensionOverride=(c,h,$)=>(u._OrtAddFreeDimensionOverride=te.Ia)(c,h,$),u._OrtAddSessionConfigEntry=(c,h,$)=>(u._OrtAddSessionConfigEntry=te.Ja)(c,h,$),u._OrtReleaseSessionOptions=c=>(u._OrtReleaseSessionOptions=te.Ka)(c),u._OrtCreateSession=(c,h,$)=>(u._OrtCreateSession=te.La)(c,h,$),u._OrtReleaseSession=c=>(u._OrtReleaseSession=te.Ma)(c),u._OrtGetInputOutputCount=(c,h,$)=>(u._OrtGetInputOutputCount=te.Na)(c,h,$),u._OrtGetInputName=(c,h)=>(u._OrtGetInputName=te.Oa)(c,h),u._OrtGetOutputName=(c,h)=>(u._OrtGetOutputName=te.Pa)(c,h),u._OrtFree=c=>(u._OrtFree=te.Qa)(c),u._OrtCreateTensor=(c,h,$,x,k,T)=>(u._OrtCreateTensor=te.Ra)(c,h,$,x,k,T),u._OrtGetTensorData=(c,h,$,x,k)=>(u._OrtGetTensorData=te.Sa)(c,h,$,x,k),u._OrtReleaseTensor=c=>(u._OrtReleaseTensor=te.Ta)(c),u._OrtCreateRunOptions=(c,h,$,x)=>(u._OrtCreateRunOptions=te.Ua)(c,h,$,x),u._OrtAddRunConfigEntry=(c,h,$)=>(u._OrtAddRunConfigEntry=te.Va)(c,h,$),u._OrtReleaseRunOptions=c=>(u._OrtReleaseRunOptions=te.Wa)(c),u._OrtCreateBinding=c=>(u._OrtCreateBinding=te.Xa)(c),u._OrtBindInput=(c,h,$)=>(u._OrtBindInput=te.Ya)(c,h,$),u._OrtBindOutput=(c,h,$,x)=>(u._OrtBindOutput=te.Za)(c,h,$,x),u._OrtClearBoundOutputs=c=>(u._OrtClearBoundOutputs=te._a)(c),u._OrtReleaseBinding=c=>(u._OrtReleaseBinding=te.$a)(c),u._OrtRunWithBinding=(c,h,$,x,k)=>(u._OrtRunWithBinding=te.ab)(c,h,$,x,k),u._OrtRun=(c,h,$,x,k,T,M,L)=>(u._OrtRun=te.bb)(c,h,$,x,k,T,M,L),u._OrtEndProfiling=c=>(u._OrtEndProfiling=te.cb)(c),u._JsepOutput=(c,h,$)=>(u._JsepOutput=te.db)(c,h,$),u._JsepGetNodeName=c=>(u._JsepGetNodeName=te.eb)(c);var za,zn=()=>(zn=te.fb)(),Aa=u._malloc=c=>(Aa=u._malloc=te.gb)(c),rr=u._free=c=>(rr=u._free=te.hb)(c),Fs=(c,h,$,x,k,T)=>(Fs=te.kb)(c,h,$,x,k,T),tf=()=>(tf=te.lb)(),rf=(c,h,$,x,k)=>(rf=te.mb)(c,h,$,x,k),Vs=c=>(Vs=te.nb)(c),Oa=c=>(Oa=te.ob)(c),nf=()=>(nf=te.pb)(),af=(c,h)=>(af=te.qb)(c,h),Ra=c=>(Ra=te.rb)(c),Hs=c=>(Hs=te.sb)(c),qs=()=>(qs=te.tb)(),of=u.dynCall_ii=(c,h)=>(of=u.dynCall_ii=te.vb)(c,h),sf=c=>(sf=te.wb)(c),lf=()=>(lf=te.xb)(),uf=c=>(uf=te.yb)(c),df=()=>(df=te.zb)();function cf(){0<Tt||(S?(p(u),S||xa(Le),startWorker(u)):(xa(nn),0<Tt||za||(za=!0,u.calledRun=!0,st||(S||xa(Le),p(u),S||xa(Qe)))))}return u.___start_em_js=882450,u.___stop_em_js=882672,u.stackSave=()=>qs(),u.stackRestore=c=>Ra(c),u.stackAlloc=c=>Hs(c),u.UTF8ToString=qe,u.stringToUTF8=Tn,u.lengthBytesUTF8=zs,xr=function c(){za||cf(),za||(xr=c)},cf(),g}),S1=kl,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&kl()}),Rn,Sh,kh,Eh,El,k1,Ch,E1,_s=W(()=>{var e,t;xc(),Rn=import.meta.url??(typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(t=self.location)==null?void 0:t.href:void 0),Sh=typeof location>"u"?void 0:location.origin,kh=(r,n)=>{try{let i=n??Rn;return(i?new URL(r,i):new URL(r)).origin===Sh}catch{return!1}},Eh=async r=>{let n=await(await fetch(r,{credentials:"same-origin"})).blob();return URL.createObjectURL(n)},El=(J3(),Qo(_1)).default,k1=async()=>{if(!Rn)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(kh(Rn))return[void 0,El()];let r=await Eh(Rn);return[r,El(r)]},Ch=(eS(),Qo(b1)).default,E1=async(r,n,i)=>[void 0,Ch]}),Cl,Xa,Si,Tl,Th,Ih,bc,Fe,En=W(()=>{_s(),Xa=!1,Si=!1,Tl=!1,Th=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Ih=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},bc=async e=>{if(Xa)return Promise.resolve();if(Si)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Tl)throw new Error("previous call to 'initializeWebAssembly()' failed.");Si=!0;let t=e.initTimeout,r=e.numThreads;if(!Ih())throw new Error("WebAssembly SIMD is not supported in the current environment.");let n=Th();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,l=i==null?void 0:i.wasm,d=(l==null?void 0:l.href)??l,p=e.wasmBinary,[f,u]=await E1(s,a,r>1),g=!1,v=[];if(t>0&&v.push(new Promise(w=>{setTimeout(()=>{g=!0,w()},t)})),v.push(new Promise((w,S)=>{let y={numThreads:r};p?y.wasmBinary=p:(d||a)&&(y.locateFile=(m,_)=>d??(a??_)+m),u(y).then(m=>{Si=!1,Xa=!0,Cl=m,w(),f&&URL.revokeObjectURL(f)},m=>{Si=!1,Tl=!0,S(m)})})),await Promise.race(v),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Fe=()=>{if(Xa&&Cl)return Cl;throw new Error("WebAssembly is not initialized yet.")}}),Ze,Zo,Ae,Sc=W(()=>{En(),Ze=(e,t)=>{let r=Fe(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},Zo=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")Zo(a,o+".",r,n);else if(typeof a=="string"||typeof a=="number")n(o,a.toString());else if(typeof a=="boolean")n(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ae=e=>{let t=Fe(),r=t.stackSave();try{let n=t.stackAlloc(8);t._OrtGetLastError(n,n+4);let i=t.HEAP32[n/4],a=t.HEAPU32[n/4+1],o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),C1,tS=W(()=>{En(),Sc(),C1=e=>{let t=Fe(),r=0,n=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=Ze(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),r===0&&Ae("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Zo(e.extra,"",new WeakSet,(o,s)=>{let l=Ze(o,n),d=Ze(s,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&Ae(`Can't set a run config entry: ${o} - ${s}.`)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(o=>t._free(o)),a}}}),zh,Ah,Oh,Rh,T1,rS=W(()=>{En(),Sc(),zh=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ah=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Oh=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Rh=(e,t,r)=>{for(let n of t){let i=typeof n=="string"?n:n.name;switch(i){case"webnn":if(i="WEBNN",typeof n!="string"){let o=n==null?void 0:n.deviceType;if(o){let s=Ze("deviceType",r),l=Ze(o,r);Fe()._OrtAddSessionConfigEntry(e,s,l)!==0&&Ae(`Can't set a session config entry: 'deviceType' - ${o}.`)}}break;case"webgpu":if(i="JS",typeof n!="string"){let o=n;if(o!=null&&o.preferredLayout){if(o.preferredLayout!=="NCHW"&&o.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${o.preferredLayout}`);let s=Ze("preferredLayout",r),l=Ze(o.preferredLayout,r);Fe()._OrtAddSessionConfigEntry(e,s,l)!==0&&Ae(`Can't set a session config entry: 'preferredLayout' - ${o.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let a=Ze(i,r);Fe()._OrtAppendExecutionProvider(e,a)!==0&&Ae(`Can't append execution provider: ${i}.`)}},T1=e=>{let t=Fe(),r=0,n=[],i=e||{};Oh(i);try{let a=zh(i.graphOptimizationLevel??"all"),o=Ah(i.executionMode??"sequential"),s=typeof i.logId=="string"?Ze(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof i.optimizedModelFilePath=="string"?Ze(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,l,d,p),r===0&&Ae("Can't create session options."),i.executionProviders&&Rh(r,i.executionProviders,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let f=Ze("enableGraphCapture",n),u=Ze(i.enableGraphCapture.toString(),n);t._OrtAddSessionConfigEntry(r,f,u)!==0&&Ae(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[f,u]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof u!="number"||!Number.isInteger(u)||u<0)throw new Error(`free dimension override value must be a non-negative integer: ${u}`);let g=Ze(f,n);t._OrtAddFreeDimensionOverride(r,g,u)!==0&&Ae(`Can't set a free dimension override: ${f} - ${u}.`)}return i.extra!==void 0&&Zo(i.extra,"",new WeakSet,(f,u)=>{let g=Ze(f,n),v=Ze(u,n);t._OrtAddSessionConfigEntry(r,g,v)!==0&&Ae(`Can't set a session config entry: ${f} - ${u}.`)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r),n.forEach(o=>t._free(o)),a}}}),Bi,fn,Kn,kc,Xo,Ec,Cc,sd,oe=W(()=>{Bi=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},fn=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Kn=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return r>0?Math.ceil(n*r):void 0},kc=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Xo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ec=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Cc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",sd=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Tc,I1=W(()=>{xc(),Tc=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(n)}catch(s){if(s instanceof RangeError){let l=Math.ceil(n/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw s}let o=0;for(;;){let{done:s,value:l}=await i.read();if(s)break;let d=l.byteLength;new Uint8Array(a,o,d).set(l),o+=d}return new Uint8Array(a,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ph,Mh,Bh,Dh,Ic,Nh,$e,ur=W(()=>{oe(),Ph=["V","I","W","E","F"],Mh=(e,t)=>{console.log(`[${Ph[e]},${new Date().toISOString()}]${t}`)},Ic=(e,t)=>{Bh=e,Dh=t},Nh=(e,t)=>{let r=Xo(e),n=Xo(Bh);r>=n&&Mh(r,typeof t=="function"?t():t)},$e=(...e)=>{Dh&&Nh(...e)}}),zc,z1=W(()=>{oe(),zc=(e,t)=>new(kc(t))(e)}),Ac=W(()=>{}),Il,Ja,eo,Lh,Uh,zl,ld,jh,A1,nS=W(()=>{ur(),Ac(),Il=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ja=[],eo=e=>Math.ceil(e/16)*16,Lh=e=>{for(let t=0;t<Ja.length;t++){let r=Ja[t];if(e<=r)return r}return Math.ceil(e/16)*16},Uh=1,zl=()=>Uh++,ld=async(e,t,r,n)=>{let i=eo(r),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(s,0,r)),l}else return new Uint8Array(s.slice(0,r))}finally{a.destroy()}},jh=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Il)Ja.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,a=eo(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(o.originalSize!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=s.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,n,i)),s.unmap();let d=this.backend.getCommandEncoder();this.backend.endComputePass(),d.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),$e("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(s)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=eo(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return $e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=zl();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),$e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),$e("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Lh(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(r);s?s.length>0?n=s.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let o={id:zl(),type:0,buffer:n};return this.storageCache.set(o.id,{gpuData:o,originalSize:e}),$e("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=this.storageCache.get(e);if(!t)throw new Error("releasing data does not exist");return $e("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("data does not exist");await ld(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Il.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e))}},A1=(...e)=>new jh(...e)}),Wh,_e,Ne=W(()=>{Wh=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},_e=e=>new Wh(e)}),Fh,ui,P,Jo,O1,R1,P1,le=W(()=>{Fh=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},ui=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(r){if(n<2||i<2)return;let s=Fh.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=r?3:1;s<=a;s++){let l=n-s<0?1:e[n-s],d=i-s<0?1:t[i-s];if(l!==d&&l>1&&d>1)return;let p=Math.max(l,d);if(l&&d)o[a-s]=Math.max(l,d);else{if(p>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},P=class bo{static size(t){return bo.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),a=n-1;for(;a>=0;){if(t[a]%r===0){i[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,r/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return bo.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return bo.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let a=r;a<n;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=t[a]}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,a)=>i+r[a]+r[a+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Jo=class Di{static adjustPoolAttributes(t,r,n,i,a,o){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<r.length-2;s++)s>=n.length?n.push(r[s+2]):n[s]=r[s+2];for(let s=0;s<n.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<n.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<n.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<n.length;s++){if(n[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=n[s]||o[s+n.length]>=n[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Di.adjustPadAndReturnShape(t[l+(o?1:2)],r[l],n[l],i[l],a,l,l+t.length-2,s)}}static computePoolOutputShape(t,r,n,i,a,o,s){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return Di.computeShapeHelper(t,r,l,n,i,a,o,s),l}static computeConvOutputShape(t,r,n,i,a,o,s){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Di.computeShapeHelper(!1,t,l,n,i,a,o,s),l}static computeShapeHelper(t,r,n,i,a,o,s,l){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push(Di.adjustPadAndReturnShape(r[d+2],i[d],a[d],o[d],s,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,n,i,a,o,s,l){let d=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+i-t;return a[o]=Math.floor(l==="SAME_LOWER"?(p+1)/2:p/2),a[s]=p-a[o],Math.floor((t+p-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-d)/r+1)}},O1=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let l=-1;if(n?(s=r[0],l=1):(s=r[1],l=0),r[l]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!ui.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},R1=-34028234663852886e22,P1=34028234663852886e22}),di,to,je,rt,Y,Be,ud,Qn,Kr,X,ro,B,J,Oc,Vh,M1,pa,ue=W(()=>{oe(),le(),di=64,to=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},je=(e,t=1)=>{let r=to(e,t);return typeof r=="string"?r:r[0]},rt=(e,t=1)=>{let r=to(e,t);return typeof r=="string"?r:r[1]},Y=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:P.computeStrides(r)})}),t},Be=e=>e%4===0?4:e%2===0?2:1,ud=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Qn=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Kr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,X=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ro=(e,t,r,n,i)=>{let a=typeof r=="number",o=a?r:r.length,s=[...new Array(o).keys()],l=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,d=to(t,i),p=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],u={indices:l,value:p,storage:f,tensor:t},g=A=>typeof A=="string"?A:`${A}u`,v={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=a?"uniforms.":"",S=`${w}${e}_shape`,y=`${w}${e}_strides`,m="";for(let A=0;A<o-1;A++)m+=`
    let dim${A} = current / ${X(y,A,o)};
    let rest${A} = current % ${X(y,A,o)};
    indices[${A}] = dim${A};
    current = rest${A};
    `;m+=`indices[${o-1}] = current;`;let _=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${u.indices} {
    var indices: ${u.indices};
    var current = offset;
    ${m}
    return indices;
  }`,b=A=>(v.offsetToIndices=!0,o<2?A:`o2i_${e}(${A})`),E=[];if(o>=2)for(let A=o-1;A>=0;A--)E.push(`${X(y,A,o)} * (indices[${A}])`);let I=o<2?"":`
  fn i2o_${e}(indices: ${u.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=A=>(v.indicesToOffset=!0,o<2?A:`i2o_${e}(${A})`),z=(...A)=>o===0?"0u":`${u.indices}(${A.map(g).join(",")})`,U=(A,N)=>o<2?`${A}`:`${X(A,N,o)}`,D=(A,N,ee)=>o<2?`${A}=${ee};`:`${X(A,N,o)}=${ee};`,Z={},ie=(A,N)=>{v.broadcastedIndicesToOffset=!0;let ee=`${N.name}broadcastedIndicesTo${e}Offset`;if(ee in Z)return`${ee}(${A})`;let de=[];for(let Se=o-1;Se>=0;Se--){let we=N.indicesGet("outputIndices",Se+N.rank-o);de.push(`${U(y,Se)} * (${we} % ${U(S,Se)})`)}return Z[ee]=`fn ${ee}(outputIndices: ${N.type.indices}) -> u32 {
             return ${de.length>0?de.join("+"):"0u"};
           }`,`${ee}(${A})`},K=(A,N)=>(()=>{if(u.storage===u.value)return`${e}[${A}]=${N};`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`${e}[${A}]=vec2<u32>(u32(${N}), select(0u, 0xFFFFFFFFu, ${N} < 0));`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`${e}[${A}]=vec2<u32>(u32(${N}), 0u);`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`${e}[${A}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${N}));`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),ce=A=>(()=>{if(u.storage===u.value)return`${e}[${A}]`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`i32(${e}[${A}].x)`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`u32(${e}[${A}].x)`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${A}] & 0xFFu), bool(${e}[${A}] & 0xFF00u), bool(${e}[${A}] & 0xFF0000u), bool(${e}[${A}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),G=o<2?"":`
  fn get_${e}ByIndices(indices: ${u.indices}) -> ${p} {
    return ${ce(`i2o_${e}(indices)`)};
  }`,re=o<2?"":(()=>{let A=s.map(ee=>`d${ee}: u32`).join(", "),N=s.map(ee=>`d${ee}`).join(", ");return`
  fn get_${e}(${A}) -> ${p} {
    return get_${e}ByIndices(${z(N)});
  }`})(),se=(...A)=>{if(A.length!==o)throw new Error(`indices length must be ${o}`);let N=A.map(g).join(",");return o===0?ce("0u"):o===1?ce(N[0]):(v.get=!0,v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}(${N})`)},R=A=>o<2?ce(A):(v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}ByIndices(${A})`),j=o<2?"":`
  fn set_${e}ByIndices(indices: ${u.indices}, value: ${p}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,H=o<2?"":(()=>{let A=s.map(ee=>`d${ee}: u32`).join(", "),N=s.map(ee=>`d${ee}`).join(", ");return`
  fn set_${e}(${A}, value: ${p}) {
    set_${e}ByIndices(${z(N)}, value);
  }`})();return{impl:()=>{let A=[],N=!1;return v.offsetToIndices&&(A.push(_),N=!0),v.indicesToOffset&&(A.push(I),N=!0),v.broadcastedIndicesToOffset&&(Object.values(Z).forEach(ee=>A.push(ee)),N=!0),v.set&&(A.push(H),N=!0),v.setByIndices&&(A.push(j),N=!0),v.get&&(A.push(re),N=!0),v.getByIndices&&(A.push(G),N=!0),!a&&N&&A.unshift(`const ${S} = ${u.indices}(${r.join(",")});`,`const ${y} = ${u.indices}(${P.computeStrides(r).join(",")});`),A.join(`
`)},type:u,offsetToIndices:b,indicesToOffset:C,broadcastedIndicesToOffset:ie,indices:z,indicesGet:U,indicesSet:D,set:(...A)=>{if(A.length!==o+1)throw new Error(`indices length must be ${o}`);let N=A[o];if(typeof N!="string")throw new Error("value must be string");let ee=A.slice(0,o).map(g).join(",");return o===0?K("0u",N):o===1?K(ee[0],N):(v.set=!0,v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}(${ee}, ${N})`)},setByOffset:K,setByIndices:(A,N)=>o<2?K(A,N):(v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}ByIndices(${A}, ${N});`),get:se,getByOffset:ce,getByIndices:R,usage:n,name:e,strides:y,shape:S,rank:o}},B=(e,t,r,n=1)=>ro(e,t,r,"input",n),J=(e,t,r,n=1)=>ro(e,t,r,"output",n),Oc=(e,t,r,n=1)=>ro(e,t,r,"internal",n),Vh=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=di){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${a}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},M1=(e,t)=>new Vh(e,t),pa=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;i++){let a=r-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&o===1&&n.unshift(a)}return n}}),Hh,Al,qh,Gh,Kh,St,B1,D1,tn=W(()=>{oe(),le(),Ne(),ue(),Hh=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},Al=(e,t)=>t&&t.length!==e?[...new Array(e).keys()].reverse():t,qh=(e,t)=>P.sortBasedOnPerm(e,Al(e.length,t)),Gh=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)i+=r.indicesSet("a",e[a],`i[${a}]`);return i+="return a;}"},Kh=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},St=(e,t)=>{let r=e.dataType,n=e.dims.length,i=Al(n,t),a=qh(e.dims,i),{newShape:o,newPerm:s}=Kh(e.dims,i),l=P.areEqual(s,[2,3,1]),d=P.areEqual(s,[3,1,2]),p=o.length===2&&s[0]>s[1]||l||d,f=p?o:e.dims,u=a;p&&(f=l?[o[0],o[1]*o[2]]:d?[o[0]*o[1],o[2]]:o,u=[f[1],f[0]]);let g=B("a",r,f.length),v=J("output",r,u.length),w=16,S;return p?S=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(g,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${w+1}>, ${w}>;
  ${y.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${g.getByIndices(`${g.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:S=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(g,v)}

  ${Gh(i,n,g,v)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`,{name:p?"TransposeShared":"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=P.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:p?{x:Math.ceil(u[1]/w),y:Math.ceil(u[0]/w)}:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Y(f,u)]}},getShaderSource:S}},B1=(e,t)=>{Hh(e.inputs),e.compute(St(e.inputs[0],t.perm))},D1=e=>_e({perm:e.perm})}),Qh,Yh,Zh,Xh,Jh,em,tm,rm,nm,im,Lt,N1,L1,U1,j1,W1,F1,V1,H1,q1,G1,iS=W(()=>{oe(),le(),ue(),Rc(),tn(),Qh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Yh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Zh={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Xh={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Jh=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},em=(e,t)=>{let r=[],n=e.length;for(let a=0;a<n;a++)t.indexOf(a)===-1&&r.push(e[a]);let i=t.map(a=>e[a]);return[r,i]},tm=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?n.push(e[i++]):n.push(1);return n},rm=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},nm=(e,t)=>{let r=[];if(!rm(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},im=(e,t,r,n,i,a,o)=>{let s=r[0].dims,l=P.size(a),d=P.size(o),p=B("_A",r[0].dataType,s),f=J("output",i,a),u=32,g=`
          var<workgroup> aBestValues : array<f32, ${u}>;
       `;return{name:e,shaderCache:t,getShaderSource:v=>`
        ${v.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${v.mainStart(u)}

          let outputIndex = global_idx / ${u};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Zh[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${u}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Qh[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${u}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Yh[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${n==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Xh[n]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Lt=(e,t,r,n)=>{let i=e.inputs.length===1?r:dd(e.inputs,r),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((g,v)=>v));let o=P.normalizeAxes(a,e.inputs[0].dims.length),s=o,l=e.inputs[0],d=nm(s,e.inputs[0].dims.length);d.length>0&&(l=e.compute(St(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],s=Jh(s.length,l.dims.length));let[p,f]=em(l.dims,s),u=p;i.keepDims&&(u=tm(p,o)),e.compute(im(t,{hint:i.cacheKey,inputDependencies:["type"]},[l],n,e.inputs[0].dataType,u,f),{inputs:[l]})},N1=(e,t)=>{Lt(e,"ReduceMeanShared",t,"mean")},L1=(e,t)=>{Lt(e,"ReduceL1Shared",t,"l1")},U1=(e,t)=>{Lt(e,"ReduceL2Shared",t,"l2")},j1=(e,t)=>{Lt(e,"ReduceLogSumExpShared",t,"logSumExp")},W1=(e,t)=>{Lt(e,"ReduceMaxShared",t,"max")},F1=(e,t)=>{Lt(e,"ReduceMinShared",t,"min")},V1=(e,t)=>{Lt(e,"ReduceProdShared",t,"prod")},H1=(e,t)=>{Lt(e,"ReduceSumShared",t,"sum")},q1=(e,t)=>{Lt(e,"ReduceSumSquareShared",t,"sumSquare")},G1=(e,t)=>{Lt(e,"ReduceLogSumShared",t,"logSum")}}),Ut,am,es,dd,jt,om,sm,lm,um,dm,cm,pm,fm,hm,mm,Wt,K1,Q1,Y1,Z1,X1,J1,ew,tw,rw,nw,Rc=W(()=>{oe(),le(),Ne(),ue(),iS(),Ut=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},am=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],es=(e,t,r,n,i,a,o=!1,s=!1)=>{let l=[],d=r[0].dims,p=d.length,f=P.normalizeAxes(i,p),u=!s&&f.length===0;d.forEach((w,S)=>{u||f.indexOf(S)>=0?o&&l.push(1):l.push(w)});let g=l.length,v=P.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],y=B("_A",r[0].dataType,p),m=J("output",a,g),_=n(y,m,f),b=_[2];for(let E=0,I=0;E<p;E++)u||f.indexOf(E)>=0?(o&&I++,b=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${_[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${y.indicesSet("input_indices",E,`j${E}`)}
                  ${b}
                }`):(S.push(`${y.indicesSet("input_indices",E,m.indicesGet("output_indices",I))};`),I++);return`

        ${w.registerUniform("output_size","u32").declareVariables(y,m)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${y.type.indices};
          let output_indices = ${m.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${_[0]}       // init ops for reduce max/min
          ${_[1]}
          ${b}
          ${_[3]}
          ${_.length===4?m.setByOffset("global_idx","value"):_.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...Y(d,l)]})}},dd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),_e({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},jt=(e,t,r,n)=>{let i=e.inputs,a=i.length===1?r:dd(i,r);e.compute(es(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?am:n,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},om=(e,t)=>{Ut(e.inputs),jt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},sm=(e,t)=>{Ut(e.inputs),jt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},lm=(e,t)=>{Ut(e.inputs),jt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},um=(e,t)=>{Ut(e.inputs),jt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},dm=(e,t)=>{Ut(e.inputs),jt(e,"ReduceMax",t,(r,n,i)=>{let a=[];for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(r.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},cm=(e,t)=>{Ut(e.inputs),jt(e,"ReduceMean",t,(r,n,i)=>{let a=1;for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${a});`]})},pm=(e,t)=>{Ut(e.inputs),jt(e,"ReduceMin",t,(r,n,i)=>{let a=[];for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},fm=(e,t)=>{Ut(e.inputs),jt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},hm=(e,t)=>{Ut(e.inputs),jt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},mm=(e,t)=>{Ut(e.inputs),jt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Wt=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?n*=e[a]:i*=e[a];return i<32&&n>1024},K1=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cm(e,t):N1(e,t)},Q1=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sm(e,t):L1(e,t)},Y1=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lm(e,t):U1(e,t)},Z1=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?um(e,t):j1(e,t)},X1=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dm(e,t):W1(e,t)},J1=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pm(e,t):F1(e,t)},ew=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fm(e,t):V1(e,t)},tw=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hm(e,t):H1(e,t)},rw=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mm(e,t):q1(e,t)},nw=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?om(e,t):G1(e,t)}}),Ol,iw,aw,cd,aS=W(()=>{oe(),Ne(),Rc(),Ol=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},iw=(e,t)=>{Ol(e.inputs);let r=(n,i,a)=>{let o=[];for(let s=0;s<n.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(es("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},aw=(e,t)=>{Ol(e.inputs);let r=(n,i,a)=>{let o=[];for(let s=0;s<n.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(es("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},cd=e=>_e(e)}),gm,ym,vm,wm,fa,$m,ow,Pc=W(()=>{oe(),le(),Ac(),ue(),gm=(e,t)=>{let r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],p=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,u=f,g=u;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let _ of t.qkvHiddenSizes)if(_%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],u=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let v=d;if(f!==u)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+u+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(o){if(u!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==u/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=o.dims[3])}let S=v+w,y=-1,m=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==l||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:v,totalSequenceLength:S,maxSequenceLength:y,inputHiddenSize:p,hiddenSize:f,vHiddenSize:g,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ym=(e,t,r)=>{let n=Be(r),i=64,a=r/n;a<i&&(i=32);let o=Math.ceil(r/n/i),s=[{type:1,data:1/r},{type:12,data:a},{type:12,data:o}],l=je(e.dataType,n),d=rt(1,n),p=["type"],f=u=>{let g=J("x",e.dataType,e.dims,n),v=rt(e.dataType),w=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${i}>;
  var<workgroup> thread_sum: array<f32, ${i}>;
  ${u.registerUniforms(w).declareVariables(g)}
  ${u.mainStart([i,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${i}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${d}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${d}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(n){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${n}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${i}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${d}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${d}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(n){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${n}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${i}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${g.type.value}(${v}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${d}(x[offset + i]);
        x[offset + i] = ${g.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${i};${l};${n}`,inputDependencies:p},getShaderSource:f,getRunData:()=>({outputs:[],dispatchGroup:{x:t},programUniforms:s})}},vm=(e,t,r,n,i,a,o,s)=>{let l=s+a.kvSequenceLength,d=[a.batchSize,a.numHeads,a.sequenceLength,l],p=a.kvNumHeads===void 0&&e>1&&n,f=p?[a.batchSize,a.numHeads,l,a.headSize]:void 0,u=o.scale===0?1/Math.sqrt(a.headSize):o.scale,g=Be(a.headSize),v=a.headSize/g,w=12,S={x:Math.ceil(l/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:v},{type:12,data:l},{type:12,data:a.numHeads},{type:1,data:u},{type:12,data:s},{type:12,data:a.kvSequenceLength}],m=p&&n&&P.size(n.dims)>0,_=["type","type"];m&&_.push("type"),i&&_.push("type");let b=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&b.push({dims:f,dataType:t.dataType,gpuDataType:0});let E=I=>{let C=B("q",t.dataType,t.dims,g),z=B("key",r.dataType,r.dims,g),U=[C,z];if(m){let ce=B("past_key",n.dataType,n.dims,g);U.push(ce)}i&&U.push(B("attention_bias",i.dataType,i.dims));let D=J("output",t.dataType,d),Z=[D];p&&Z.push(J("present_key",t.dataType,f,g));let ie=rt(1,g),K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${C.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${C.type.storage}, ${w*w}>;
  ${I.registerUniforms(K).declareVariables(...U,...Z)}
  ${I.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${m&&p?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${p?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${ie}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${m&&p?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${p?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${ie}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${D.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${g};${i!==void 0};${n!==void 0};${e}`,inputDependencies:_},getRunData:()=>({outputs:b,dispatchGroup:S,programUniforms:y}),getShaderSource:E}},wm=(e,t,r,n,i,a)=>{let o=a+i.kvSequenceLength,s=i.nReps?i.nReps:1,l=i.vHiddenSize*s,d=i.kvNumHeads==null&&e>1&&n,p=d?[i.batchSize,i.numHeads,o,i.headSize]:void 0,f=[i.batchSize,i.sequenceLength,l],u=12,g={x:Math.ceil(i.vHeadSize/u),y:Math.ceil(i.sequenceLength/u),z:i.batchSize*i.numHeads},v=[{type:12,data:i.sequenceLength},{type:12,data:o},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:l},{type:12,data:a},{type:12,data:i.kvSequenceLength}],w=d&&n&&P.size(n.dims)>0,S=["type","type"];w&&S.push("type");let y=[{dims:f,dataType:t.dataType,gpuDataType:0}];d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0});let m=_=>{let b=B("probs",t.dataType,t.dims),E=B("v",r.dataType,r.dims),I=[b,E];w&&I.push(B("past_value",n.dataType,n.dims));let C=[J("output",t.dataType,f)];d&&C.push(J("present_value",t.dataType,p));let z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${u}u;
  var<workgroup> tileQ: array<${b.type.value}, ${u*u}>;
  var<workgroup> tileK: array<${b.type.value}, ${u*u}>;
  ${_.registerUniforms(z).declareVariables(...I,...C)}
  ${_.mainStart([u,u,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${w&&d?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${d?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${b.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&d?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${d?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:y,dispatchGroup:g,programUniforms:v}),getShaderSource:m}},fa=(e,t,r,n,i,a,o,s,l,d,p)=>{let f=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),u=d.kvNumHeads!==void 0||f>1?d.pastSequenceLength:0,g=u+d.kvSequenceLength,v=l&&P.size(l.dims)>0?l:void 0,w=[t,r];d.kvNumHeads===void 0&&f>1&&o&&P.size(o.dims)>0&&w.push(o),v&&w.push(v);let S=e.compute(vm(f,t,r,o,v,d,p,u),{inputs:w,outputs:d.kvNumHeads===void 0&&f>1?[-1,1]:[-1]})[0];e.compute(ym(S,d.batchSize*d.numHeads*d.sequenceLength,g),{inputs:[S],outputs:[]});let y=[S,n];d.kvNumHeads===void 0&&f>1&&s&&P.size(s.dims)>0&&y.push(s),e.compute(wm(f,S,n,s,d,u),{inputs:y,outputs:d.kvNumHeads===void 0&&f>1?[0,2]:[0]})},$m=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let u=J("output_q",l[0].dataType,r),g=J("output_k",l[0].dataType,r),v=J("output_v",l[0].dataType,r),w=B("input",l[0].dataType,l[0].dims),S=B("weight",l[1].dataType,l[1].dims),y=B("bias",l[2].dataType,l[2].dims),m=w.type.storage,_=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${m}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${m}, ${o*o}>;
  var<workgroup> tileWeightK: array<${m}, ${o*o}>;
  var<workgroup> tileWeightV: array<${m}, ${o*o}>;
  ${f.registerUniforms(_).declareVariables(w,S,y,u,g,v)}
  ${f.mainStart([o,o,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${m}(0);
    var valueK = ${m}(0);
    var valueV = ${m}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:d}),getShaderSource:p},{inputs:l,outputs:[-1,-1,-1]})},ow=(e,t)=>{let r=gm(e.inputs,t),[n,i,a]=$m(e,r);return fa(e,n,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r,t)}}),_m,xm,bm,sw,oS=W(()=>{Xt(),oe(),le(),Ne(),ue(),_m=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,a)=>{let o=i.length;if(o!==n.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,l)=>{if(s!==n[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},xm=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,a=e[0].dims,o=n?Be(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,l=P.size(a)/o,d=n,p=d?a.length:a,f=B("x",e[0].dataType,e[0].dims,o),u=B("scale",e[1].dataType,e[1].dims,s),g=B("bias",e[2].dataType,e[2].dims,s),v=B("inputMean",e[3].dataType,e[3].dims,s),w=B("inputVar",e[4].dataType,e[4].dims,s),S=J("y",e[0].dataType,p,o),y=()=>{let _="";if(n)_=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")_=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{_=`var cIndices = ${u.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let b=1;b<u.rank;b++)_+=`cIndices[${b}] = outputIndices[${b}];`;_+=`let cOffset = ${u.indicesToOffset("cIndices")};`}return _},m=_=>`
  const epsilon = ${r};
  ${_.registerUniform("outputSize","u32").declareVariables(f,u,g,v,w,S)}
  ${_.mainStart()}
  ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${o}`)};
    ${y()}
    let scale = ${u.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${v.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${o}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:m,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Y(a)]:[{type:12,data:l}]})}},bm=e=>_e(e),sw=(e,t)=>{let{inputs:r,outputCount:n}=e,i=bm({...t,outputCount:n});if(be.webgpu.validateInputContent&&_m(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(xm(r,i))}}),Sm,km,lw,sS=W(()=>{le(),ue(),Sm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},km=e=>{let t=e[0].dims,r=e[0].dims[2],n=P.size(t)/4,i=e[0].dataType,a=B("input",i,t,4),o=B("bias",i,[r],4),s=B("residual",i,t,4),l=J("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,o,s,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},lw=e=>{Sm(e.inputs),e.compute(km(e.inputs))}}),Em,ge,uw,dw,cw,pw,fw,hw,mw,gw,yw,Cm,vw,ww,$w,_w,Ni,xw,So,bw,Sw,kw,Ew,Cw,Tw,Iw,zw,Aw,Ow,Rw,Pw,Mw,Bw,Dw,Nw,Rl,Lw,pd,fd,Uw,jw,Ww,Tm,Im,Fw,Mc=W(()=>{oe(),le(),Ne(),ue(),Em=(e,t,r,n,i,a,o)=>{let s=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=B("inputData",r,[s],4),p=J("outputData",n,[s],4),f=[{name:"vec_size",type:"u32"}];return o&&f.push(...o),`
      ${e.registerUniforms(f).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`},ge=(e,t,r,n,i,a=e.dataType,o,s)=>{let l=[{type:12,data:Math.ceil(P.size(e.dims)/4)}];return o&&l.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>Em(d,P.size(e.dims),e.dataType,a,r,n,s),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(P.size(d[0].dims)/64/4)},programUniforms:l})}},uw=e=>{e.compute(ge(e.inputs[0],"Abs","abs"))},dw=e=>{e.compute(ge(e.inputs[0],"Acos","acos"))},cw=e=>{e.compute(ge(e.inputs[0],"Acosh","acosh"))},pw=e=>{e.compute(ge(e.inputs[0],"Asin","asin"))},fw=e=>{e.compute(ge(e.inputs[0],"Asinh","asinh"))},hw=e=>{e.compute(ge(e.inputs[0],"Atan","atan"))},mw=e=>{e.compute(ge(e.inputs[0],"Atanh","atanh"))},gw=e=>_e(e),yw=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ge(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Cm=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return _e({min:t,max:r})},vw=(e,t)=>{let r=t||Cm(e.inputs),n=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},ww=e=>{e.compute(ge(e.inputs[0],"Ceil","ceil"))},$w=e=>{e.compute(ge(e.inputs[0],"Cos","cos"))},_w=e=>{e.compute(ge(e.inputs[0],"Cosh","cosh"))},Ni=e=>_e(e),xw=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},So=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,bw=e=>{let t=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,So(t)))},Sw=e=>{e.compute(ge(e.inputs[0],"Exp","exp"))},kw=e=>{e.compute(ge(e.inputs[0],"Floor","floor"))},Ew=e=>{let t=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,So(t)))},Cw=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Tw=e=>{e.compute(ge(e.inputs[0],"Not",t=>`!${t}`))},Iw=e=>{e.compute(ge(e.inputs[0],"Neg",t=>`-${t}`))},zw=e=>{e.compute(ge(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Aw=e=>{let t=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Ow=e=>{e.compute(ge(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Rw=e=>_e(e),Pw=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Mw=e=>{e.compute(ge(e.inputs[0],"Sin","sin"))},Bw=e=>{e.compute(ge(e.inputs[0],"Sinh","sinh"))},Dw=e=>{e.compute(ge(e.inputs[0],"Sqrt","sqrt"))},Nw=e=>{e.compute(ge(e.inputs[0],"Tan","tan"))},Rl=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Lw=e=>{e.compute(ge(e.inputs[0],"Tanh",Rl))},pd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Rl("v")};
}
`,fd=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Uw=e=>{let t=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"FastGelu",fd,pd(t),void 0,e.inputs[0].dataType))},jw=(e,t)=>{let r=rt(e.inputs[0].dataType);return e.compute(ge(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Ww=e=>{e.compute(ge(e.inputs[0],"Log","log"))},Tm=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Im=e=>`quick_gelu_impl(${e})`,Fw=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"QuickGelu",Im,Tm(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),zm,Am,Vw,lS=W(()=>{le(),ue(),Mc(),zm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Am=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),n=B("bias",e[0].dataType,[e[0].dims[2]],4),i=J("output",e[0].dataType,t,4),a=P.size(t)/4,o=je(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(r,n,i)}

  ${So(o)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Vw=e=>{zm(e.inputs),e.compute(Am(e.inputs))}}),Om,Rm,Ft,Hw,qw,Gw,Kw,Qw,Yw,Zw,Xw,Jw,e$,uS=W(()=>{oe(),le(),ue(),Om=(e,t,r,n,i,a,o,s,l,d,p,f)=>{let u,g;typeof s=="string"?u=g=(m,_)=>`${s}((${m}),(${_}))`:typeof s=="function"?u=g=s:(u=s.scalar,g=s.vector);let v=J("outputData",p,n.length,4),w=B("aData",l,t.length,4),S=B("bData",d,r.length,4),y;if(i)if(a){let m=P.size(t)===1,_=P.size(r)===1,b=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;m||_?y=v.setByOffset("global_idx",g(m?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),_?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):y=`
            let outputIndices = ${v.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",v)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",v)};
            ${v.setByOffset("global_idx",g(o||b?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else y=v.setByOffset("global_idx",g(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let m=(_,b,E="")=>{let I=`aData[indexA${b}][componentA${b}]`,C=`bData[indexB${b}][componentB${b}]`;return`
            let outputIndices${b} = ${v.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offsetA${b} = ${w.broadcastedIndicesToOffset(`outputIndices${b}`,v)};
            let offsetB${b} = ${S.broadcastedIndicesToOffset(`outputIndices${b}`,v)};
            let indexA${b} = offsetA${b} / 4u;
            let indexB${b} = offsetB${b} / 4u;
            let componentA${b} = offsetA${b} % 4u;
            let componentB${b} = offsetB${b} % 4u;
            ${_}[${b}] = ${E}(${u(I,C)});
          `};p===9?y=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:y=`
            ${m("outputData[global_idx]",0)}
            ${m("outputData[global_idx]",1)}
            ${m("outputData[global_idx]",2)}
            ${m("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,v)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},Rm=(e,t,r,n,i,a,o=r.dataType)=>{let s=!P.areEqual(r.dims,n.dims),l=r.dims,d=P.size(r.dims),p=!1,f=!1,u=[s];if(s){let g=ui.calcShape(r.dims,n.dims,!1);if(!g)throw new Error("Can't perform binary op on the given tensors");l=g,d=P.size(l);let v=P.size(r.dims)===1,w=P.size(n.dims)===1,S=r.dims.length>0&&r.dims[r.dims.length-1]%4===0,y=n.dims.length>0&&n.dims[n.dims.length-1]%4===0;u.push(v),u.push(w),u.push(S),u.push(y);let m=1;for(let _=1;_<l.length;_++){let b=r.dims[r.dims.length-_]??1,E=n.dims[n.dims.length-_]??1;if(b===E)m*=b;else break}m%4===0?(f=!0,p=!0):(v||w||S||y)&&(p=!0)}else p=!0;return u.push(p),{name:e,shaderCache:{hint:t+u.map(g=>g.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:g=>Om(g,r.dims,n.dims,l,p,s,f,i,r.dataType,n.dataType,o,a),getRunData:()=>({outputs:[{dims:l,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(P.size(l)/4)},...Y(r.dims,n.dims,l)]})}},Ft=(e,t,r,n,i,a)=>{e.compute(Rm(t,i??"",e.inputs[0],e.inputs[1],r,n,a))},Hw=e=>{Ft(e,"Add",(t,r)=>`${t}+${r}`)},qw=e=>{Ft(e,"Div",(t,r)=>`${t}/${r}`)},Gw=e=>{Ft(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Kw=e=>{Ft(e,"Mul",(t,r)=>`${t}*${r}`)},Qw=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ft(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Yw=e=>{Ft(e,"Sub",(t,r)=>`${t}-${r}`)},Zw=e=>{Ft(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Xw=e=>{Ft(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Jw=e=>{Ft(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},e$=e=>{Ft(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Pm,Mm,Bm,Dm,t$,r$,dS=W(()=>{oe(),le(),Ne(),ue(),Pm=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,a=n.dims.length;e.forEach((o,s)=>{if(s!==r){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},Mm=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Bm=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(a):i===0?n.push(`if (inputIndex == ${i}u) { ${a} }`):i===r-1?n.push(`else { ${a} }`):n.push(`else if (inputIndex == ${i}) { ${a} }`)}return n.join(`
`)},Dm=(e,t,r,n)=>{let i=P.size(r),a=new Array(e.length),o=new Array(e.length),s=0,l=[],d=[],p=[{type:12,data:i}];for(let w=0;w<e.length;++w)s+=e[w].dims[t],a[w]=s,d.push(e[w].dims.length),o[w]=B(`input${w}`,n,d[w]),l.push("rank"),p.push({type:12,data:a[w]});for(let w=0;w<e.length;++w)p.push(...Y(e[w].dims));p.push(...Y(r));let f=J("output",n,r.length),u=f.indicesGet("indices",t),g=Array.from(Array(a.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),v=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...o,f)})()}

  ${Mm(a.length,g)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${u});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${g});
      ${u} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Bm(o,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:v}},t$=(e,t)=>{let r=e.inputs,n=r[0].dims,i=P.normalizeAxis(t.axis,n.length);Pm(r,i);let a=n.slice();a[i]=r.reduce((s,l)=>s+(l.dims.length>i?l.dims[i]:0),0);let o=r.filter(s=>P.size(s.dims)>0);e.compute(Dm(o,i,a,r[0].dataType),{inputs:o})},r$=e=>_e({axis:e.axis})}),Qr,Yr,Zr,Bc,rn=W(()=>{oe(),le(),Qr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Yr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Zr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Bc=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[R1,P1];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),nt,Dc,xs=W(()=>{nt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Dc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Nc,n$=W(()=>{Nc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Nm,Lm,ts,Pl,Um,rs,jm,Lc,bs=W(()=>{oe(),le(),ue(),rn(),xs(),Nm=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Lm=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ts=(e,t,r="f32",n,i=!1,a=32,o=!1,s=32)=>{let l=t[1]*e[1],d=t[0]*e[0],p=i?l:a,f=i?a:l,u=p/t[0],g=a/t[1];if(!((i&&u===4&&e[1]===4||!i&&(u===3||u===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${u} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${u} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${u}<${r}>, ${p/u}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${u};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Nm(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${u===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Lm(i,u)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Pl=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Um=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",rs=(e,t,r="f32",n,i=!1,a=32,o=!1,s=32,l=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],f=i?d:a,u=i?a:d;if(!(u%t[1]===0&&f%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${u} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let g=u/t[1],v=f/t[0],w=a/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Pl(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${v};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${v}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Pl(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Um(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${u}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},jm=(e,t,r,n,i,a=!1)=>{let[o,s,l]=i,[d,p,f,u]=n,g=pa(o,l),v=pa(s,l),w=je(n[0].type.tensor),S=()=>{let m=p.rank,_=d.rank,b=`var aIndices: ${p.type.indices};`;for(let E=m-2-1,I=_-1;E>=0;E--,I--)b+=`
aIndices[${E}] = ${_>1?`batchIndices[${I}]`:"batchIndices"};`;return g.forEach(E=>{b+=`
aIndices[${E}] = 0;`}),b+=`
aIndices[${m-2}] = u32(row);
                   aIndices[${m-1}] = u32(colIn);`,b},y=()=>{let m=f.rank,_=d.rank,b=`var bIndices: ${f.type.indices};`;for(let E=m-2-1,I=_-1;E>=0;E--,I--)b+=`
bIndices[${E}] = ${_>1?`batchIndices[${I}]`:"batchIndices"};`;return v.forEach(E=>{b+=`
bIndices[${E}] = 0;`}),b+=`
bIndices[${m-2}] = u32(row);
                   bIndices[${m-1}] = u32(colIn);`,b};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${nt(e,w)} {
      var value = ${nt(e,w)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${S()}
        value = ${p.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${nt(e,w)} {
      var value = ${nt(e,w)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${y()}
        value = ${f.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${nt(e,w)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${nt(e,w)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Lc=(e,t,r,n,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,l=o.slice(0,-2),d=s.slice(0,-2),p=n?n.slice(0,-2):r.slice(0,-2),f=P.size(p),u=o[o.length-2],g=o[o.length-1],v=s[s.length-1],w=g%4===0&&v%4===0,S=u<=8?[4,1,1]:[4,4,1],y=[8,8,1],m=[Math.ceil(v/y[0]/S[0]),Math.ceil(u/y[1]/S[1]),Math.ceil(f/y[2]/S[2])],_=w?4:1,b=[...l,u,g/_],E=b.length,I=[...d,g,v/_],C=I.length,z=[f,u,v/_],U=[{type:6,data:u},{type:6,data:v},{type:6,data:g}];Yr(t,U),U.push(...Y(p,b,I));let D=["rank","rank"],Z=e.length>2;Z&&(U.push(...Y(e[2].dims)),D.push("rank")),U.push(...Y(z));let ie=K=>{let ce=p.length,G=Oc("batchDims",e[0].dataType,ce,1),re=je(e[0].dataType),se=B("a",e[0].dataType,E,_),R=B("b",e[1].dataType,C,_),j=J("result",e[0].dataType,z.length,_),H=[se,R];if(Z){let Se=i?_:1;H.push(B("bias",e[2].dataType,e[2].dims.length,Se))}let A=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Zr(t,A);let N=je(j.type.tensor),ee=Qr(t,j.type.value,N),de=jm(_,Z,ee,[G,se,R,j],[l,d,p],i);return`
  ${K.registerUniforms(A).registerInternalVariables(G).declareVariables(...H,j)}
  ${de}
  ${w?ts(S,y,re,G):rs(S,y,re,G)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${i}`,inputDependencies:D},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:m[0],y:m[1],z:m[2]},programUniforms:U}),getShaderSource:ie}}}),Wm,i$,cS=W(()=>{oe(),ur(),ue(),rn(),xs(),n$(),bs(),Wm=(e,t,r,n,i=!1,a,o=4,s=4,l=4,d="f32")=>{let p=U=>{switch(U){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${U} is not supported.`)}},f=U=>{switch(U){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${U} is not supported.`)}},u=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,v=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",y=e?"col":"row",m=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${y} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${y} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${y} % inChannels;
    var resData = ${nt(o,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${v} && xCol >= 0 && xCol < ${w}) {
      ${u}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(o)}
    }
    return resData;`,_=e?t&&n?`
    let col = colIn * ${o};
    ${m}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${m}
    }
    return ${nt(o,d)}(0.0);`:n&&r?`
    let col = colIn * ${o};
    ${m}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m}
    }
    return ${nt(o,d)}(0.0);`,b=`${f(s)}`,E=nt(l,d),I=nt(e?o:s,d),C=nt(e?s:o,d),z=Qr(a,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?_:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?b:_}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Dc(i)}
      ${z}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},i$=(e,t,r,n,i,a,o,s,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],u=d?r[2]:r[3],g=d?r[1]:r[2],v=d?r[3]:r[1],w=d&&(p%4===0||p%3===0)&&v%4===0,S=d?v:u*g,y=d?u*g:v,m=[8,8,1],_=n<=8?[4,1,1]:[4,4,1],b=[Math.ceil(S/m[0]/_[0]),Math.ceil(y/m[1]/_[1]),Math.ceil(f/m[2]/_[2])];$e("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let E=w?d&&p%4!==0?3:4:1,I=m[1]*_[1],C=m[0]*_[0],z=Math.max(m[0]*E,m[1]),U=n%I===0,D=i%C===0,Z=a%z===0,ie=w?[E,4,4]:[1,1,1],K=[{type:6,data:n},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Yr(t,K),K.push(...Y(e[0].dims,e[1].dims));let ce=["rank","rank"];o&&(K.push(...Y(e[2].dims)),ce.push("rank")),K.push(...Y(r));let G=re=>{let se=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Zr(t,se);let R=w?4:1,j=je(e[0].dataType),H=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${j}>`:j}) {
        result[flatIndex] = ${w?`vec4<${j}>`:j}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${j}>`:j}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,A=B("x",e[0].dataType,e[0].dims.length,E===3?1:E),N=B("w",e[1].dataType,e[1].dims.length,R),ee=[A,N],de=J("result",e[0].dataType,r.length,R);if(o){let Se=B("bias",e[2].dataType,e[2].dims.length,R);ee.push(Se),H+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${j}>`:j} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${Nc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${re.registerUniforms(se).declareVariables(...ee,de)}
        ${H}
        ${Wm(d,U,D,Z,o,t,ie[0],ie[1],ie[2],j)}
        ${w?ts(_,m,j,void 0,!d,z):rs(_,m,j,void 0,!d,z,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${w};${U};${D};${Z};${I};${C};${z}`,inputDependencies:ce},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:K}),getShaderSource:G}}}),Fm,Ml,ki,Vm,Bl,Hm,a$,o$,pS=W(()=>{oe(),ur(),le(),ue(),rn(),xs(),Fm=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ml=e=>typeof e=="number"?[e,e,e]:e,ki=(e,t)=>t<=1?e:e+(e-1)*(t-1),Vm=(e,t,r,n=1)=>{let i=ki(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},Bl=(e,t,r,n,i)=>{i==null&&(i=Vm(e,t[0],n[0]));let a=[0,0,0,r];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/n[o]+1));return a},Hm=(e,t,r,n,i,a,o,s,l,d)=>{let p,f,u,g;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let v=Bl([t,r,n,1],[s,l,d],1,[i,a,o],e);f=v[0],u=v[1],g=v[2]}else if(Array.isArray(e)){if(!e.every((w,S,y)=>w===y[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let v=Bl([t,r,n,1],[s,l,d],1,[i,a,o],e[0]);f=v[0],u=v[1],g=v[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),u=Math.ceil(r/a),g=Math.ceil(n/o);let v=(f-1)*i+s-t,w=(u-1)*a+l-r,S=(g-1)*o+d-n,y=Math.floor(v/2),m=v-y,_=Math.floor(w/2),b=w-_,E=Math.floor(S/2),I=S-E;p={top:_,bottom:b,left:E,right:I,front:y,back:m}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:u,outWidth:g}},a$=(e,t,r,n,i,a=!1,o="channelsLast")=>{let s,l,d,p,f;if(o==="channelsLast")[s,l,d,p,f]=e;else if(o==="channelsFirst")[s,f,l,d,p]=e;else throw new Error(`Unknown dataFormat ${o}`);let[u,,g,v,w]=t,[S,y,m]=Ml(r),[_,b,E]=Ml(n),I=ki(g,_),C=ki(v,b),z=ki(w,E),{padInfo:U,outDepth:D,outHeight:Z,outWidth:ie}=Hm(i,l,d,p,S,y,m,I,C,z),K=a?u*f:u,ce=[0,0,0,0,0];return o==="channelsFirst"?ce=[s,K,D,Z,ie]:o==="channelsLast"&&(ce=[s,D,Z,ie,K]),{batchSize:s,dataFormat:o,inDepth:l,inHeight:d,inWidth:p,inChannels:f,outDepth:D,outHeight:Z,outWidth:ie,outChannels:K,padInfo:U,strideDepth:S,strideHeight:y,strideWidth:m,filterDepth:g,filterHeight:v,filterWidth:w,effectiveFilterDepth:I,effectiveFilterHeight:C,effectiveFilterWidth:z,dilationDepth:_,dilationHeight:b,dilationWidth:E,inShape:e,outShape:ce,filterShape:t}},o$=(e,t,r,n,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],l={x:r.map((S,y)=>y)},d=[Math.ceil(Fm(l.x.map(S=>r[S]))/s[0]),1,1];$e("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,f=P.size(r),u=[{type:12,data:f},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Yr(t,u),u.push(...Y(e[0].dims,e[1].dims));let g=["rank","rank"],v=e.length===3;v&&(u.push(...Y(e[2].dims)),g.push("rank")),u.push(...Y(r));let w=S=>{let y=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Zr(t,y);let m=1,_=je(e[0].dataType),b=B("x",e[0].dataType,e[0].dims.length,p),E=B("W",e[1].dataType,e[1].dims.length,m),I=[b,E],C=J("result",e[0].dataType,r.length,m),z="";if(v){let Z=B("bias",e[2].dataType,e[2].dims.length,m);I.push(Z),z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${_} {
          return bias[${o?X("coords",4,5):X("coords",1,5)}];
        }`}let U=nt(p,_),D=Qr(t,U,_);return`
            ${z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${b.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(y).declareVariables(...I,C)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${X("coords",0,b.rank)};
              let d2 = ${o?X("coords",b.rank-1,b.rank):X("coords",1,b.rank)};
              let xFRCCorner = vec3<u32>(${o?X("coords",1,b.rank):X("coords",2,b.rank)},
              ${o?X("coords",2,b.rank):X("coords",3,b.rank)},
              ${o?X("coords",3,b.rank):X("coords",4,b.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?X("uniforms.x_shape",1,b.rank):X("uniforms.x_shape",2,b.rank)};
              let xShapeZ = ${o?X("uniforms.x_shape",2,b.rank):X("uniforms.x_shape",3,b.rank)};
              let xShapeW = ${o?X("uniforms.x_shape",3,b.rank):X("uniforms.x_shape",4,b.rank)};
              let xShapeU = ${o?X("uniforms.x_shape",4,b.rank):X("uniforms.x_shape",1,b.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${v?"value = value + getBiasByOutputCoords(coords)":""};
              ${D}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${p};${v}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:u}),getShaderSource:w}}}),s$,l$,fS=W(()=>{oe(),le(),ue(),rn(),s$=(e,t,r,n)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],p=d/t.group,f=l&&p>=4?Be(d):1,u=P.size(r)/f,g=[{type:12,data:u},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];Yr(t,g),g.push(...Y(o,[s[0],s[1],s[2],s[3]/f]));let v=i?["rank","rank","rank"]:["rank","rank"];g.push(...Y([r[0],r[1],r[2],r[3]/f]));let w=S=>{let y=J("output",e[0].dataType,r.length,f),m=je(y.type.tensor),_=Qr(t,y.type.value,m),b=B("x",e[0].dataType,o.length),E=B("w",e[1].dataType,s.length,f),I=[b,E];i&&I.push(B("b",e[2].dataType,e[2].dims,f));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Zr(t,C);let z=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${b.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${b.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(C).declareVariables(...I,y)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${y.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${y.type.value} = ${y.type.value}(0);
    ${z}
    ${a}
    ${_}
    ${y.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:g}),getShaderSource:w}},l$=(e,t,r,n)=>{let i=e.length>2,a=Be(r[3]),o=Be(r[2]),s=P.size(r)/a/o,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[r[0],r[1],r[2],r[3]/a],f=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Yr(t,f),f.push(...Y(l,d,p));let u=(o-1)*t.strides[1]+d[1],g=v=>{let w=J("output",e[0].dataType,p.length,a),S=je(w.type.tensor),y=Qr(t,w.type.value,S),m=B("x",e[0].dataType,l.length,a),_=B("w",e[1].dataType,d.length,a),b=[m,_];i&&b.push(B("b",e[2].dataType,e[2].dims,a));let E=i?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Zr(t,I),`
  ${v.registerUniforms(I).declareVariables(...b,w)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${m.type.value}, ${u}>;
    var values: array<${w.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${u}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${m.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${m.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${_.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${E}
      ${y}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${u};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}),getShaderSource:g}}}),hd,qm,u$,d$=W(()=>{oe(),le(),bs(),ue(),rn(),hd=(e,t,r,n,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,l=o[o.length-2],d=s[s.length-1],p=o[o.length-1],f=Be(d),u=Be(p),g=Be(l),v=P.size(r)/f/g,w=e.length>2,S=n?n.slice(0,-2):r.slice(0,-2),y=[P.size(S),l,d],m=[{type:12,data:v},{type:12,data:l},{type:12,data:d},{type:12,data:p}];Yr(t,m),m.push(...Y(S,o,s)),w&&m.push(...Y(e[2].dims)),m.push(...Y(y));let _=b=>{let E=Oc("batch_dims",e[0].dataType,S.length),I=B("a",e[0].dataType,o.length,u),C=B("b",e[1].dataType,s.length,f),z=J("output",e[0].dataType,y.length,f),U=je(z.type.tensor),D=Qr(t,z.type.value,U),Z=[I,C],ie="";if(w){let H=i?f:1;Z.push(B("bias",e[2].dataType,e[2].dims.length,H)),ie=`${i?`value += bias[col / ${H}];`:`value += ${z.type.value}(bias[row + i]);`}`}let K=o.slice(0,-2),ce=s.slice(0,-2),G=pa(K,S),re=pa(ce,S),se=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Zr(t,se);let R=(H,A)=>{let N=H.rank,ee=H.name;if(N===2)return`var ${ee}_indices = ${H.type.indices}(0u, 0u);`;let de=E.rank,Se=`var ${ee}_indices: ${H.type.indices};`;for(let we=N-2-1,wt=de-1;we>=0;we--,wt--)Se+=`
${ee}_indices[${we}] = ${de>1?`batch_indices[${wt}]`:"batch_indices"};`;return A.forEach(we=>{Se+=`
${ee}_indices[${we}] = 0;`}),Se+=`${ee}_indices[${N-2}] = 0u;
                     ${ee}_indices[${N-1}] = 0u;`,Se},j=()=>{let H=`var a_data: ${I.type.value};`;for(let A=0;A<u;A++)H+=`
              let b_data${A} = b[(b_offset + (k + ${A}) * uniforms.N + col) / ${f}];`;for(let A=0;A<g;A++){H+=`a_data = a[(a_offset + (row + ${A}) * uniforms.K + k) / ${u}];`;for(let N=0;N<u;N++)H+=`
            values[${A}] = fma(${C.type.value}(a_data${u===1?"":`[${N}]`}), b_data${N}, values[${A}]);
`}return H};return`
  ${b.registerUniforms(se).registerInternalVariables(E).declareVariables(...Z,z)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}
    ${R(I,G)}
    let a_offset = ${I.indicesToOffset("a_indices")};
    ${R(C,re)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${z.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${u}) {
      ${j()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${ie}
      ${D}
      let cur_indices = ${z.type.indices}(batch, row + i, col);
      let offset = ${z.indicesToOffset("cur_indices")};
      ${z.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${u};${g};${i}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:m}),getShaderSource:_}},qm=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},u$=e=>{qm(e.inputs);let t=ui.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];r<8&&n<8?e.compute(hd(e.inputs,{activation:""},t)):e.compute(Lc(e.inputs,{activation:""},t))}}),Gm,no,Km,io,md,Dl,Qm,Ym,gd,hS=W(()=>{le(),cS(),pS(),bs(),fS(),rn(),d$(),tn(),Gm=(e,t,r,n,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),l=s.length,d=t[0],p=t.slice(2).map((u,g)=>u+(u-1)*(r[g]-1)),f=s.map((u,g)=>u+n[g]+n[g+l]).map((u,g)=>Math.floor((u-p[g]+i[g])/i[g]));return f.splice(0,0,o),f.splice(a?3:1,0,d),f},no=[2,3,1,0],Km=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},io=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let n=e.pads.slice();Jo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},md=e=>{let t=Bc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:a,kernelShape:o,pads:s,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Dl=(e,t,r,n)=>{let i=r.format==="NHWC",a=Gm(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let I=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(St(t[1],no),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),I.push(C)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(l$(I,r,a,n),{inputs:I}):e.compute(s$(I,r,a,n),{inputs:I});return}let o=t.length===3,s=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],p=t[1].dims[2],f=t[1].dims[3],u=a[i?1:2],g=a[i?2:3],v=a[i?3:1],w=i&&p===s&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(w||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=a[0],C,z,U,D=[];if(i){let K=e.kernelCustomData.wT??e.compute(St(t[1],no),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),w){let ce=s*l*d;C=t[0].reshape([1,I,ce]),z=K.reshape([1,ce,v]),U=[1,I,v]}else C=t[0].reshape([I,s*l,d]),z=K.reshape([1,d,v]),U=[I,u*g,v];D.push(C),D.push(z)}else C=t[0].reshape([I,d,s*l]),z=t[1].reshape([1,v,d]),U=[I,v,u*g],D.push(z),D.push(C);o&&D.push(t[2]);let Z=U[2],ie=D[0].dims[D[0].dims.length-1];Z<8&&ie<8?e.compute(hd(D,r,a,U,i,n),{inputs:D}):e.compute(Lc(D,r,a,U,i,n),{inputs:D});return}let S=!0,y=e.kernelCustomData.wT??e.compute(St(t[1],no),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);let m=[t[0],y];o&&m.push(t[2]);let _=i?u*g:v,b=i?v:u*g,E=p*f*d;e.compute(i$(m,r,a,_,b,E,o,S,n),{inputs:m})},Qm=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),l=io({...t,pads:i,strides:a,dilations:o,kernelShape:s},n);Dl(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Ym=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=io(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,o=a$(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,n);e.compute(o$(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],n))},gd=(e,t)=>{if(Km(e.inputs,t),e.inputs[0].dims.length===3)Qm(e,t);else if(e.inputs[0].dims.length===5)Ym(e,e.inputs,t);else{let r=io(t,e.inputs);Dl(e,e.inputs,r)}}}),Zm,c$,mS=W(()=>{oe(),ur(),ue(),rn(),xs(),n$(),bs(),Zm=(e,t=!1,r,n,i=4)=>{let a=S=>{switch(S){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${n}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${S} is not supported.`)}},o=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,s=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,l=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",d=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",p=e?"row":"col",f=e?"col":"row",u=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${p} / outWidth;
      let outCol = ${p} % outWidth;

      let WRow = ${f} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${f} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${l}) || fract(xR) > 0.0) {
        return ${n}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${d}) || fract(xC) > 0.0) {
        return ${n}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${f} % inChannels;
      ${o}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${i}];`,g=e?`
      let col = colIn * ${i};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${u}
      }
      return ${n}(0.0);`:`
      let col = colIn * ${i};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${u}
      }
      return ${n}(0.0);`,v=`
      let col = colIn * ${i};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${a(i)}
      }
      return ${n}(0.0);
      `,w=Qr(r,n);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${n} {
    ${e?g:v}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${n} {
    ${e?v:g}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${n}) {
    let col = colIn * ${i};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${s}
      ${Dc(t)}
      ${w}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${i}] = value;
    }
  }`},c$=(e,t,r,n,i,a,o,s)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],p=r[0],f=l?r[2]:r[3],u=l?r[1]:r[2],g=l?r[3]:r[1],v=l&&d%4===0&&d%3&&g%4===0,w=l?g:f*u,S=l?f*u:g,y=[8,8,1],m=n<=8?[4,1,1]:[4,4,1],_=[Math.ceil(w/y[0]/m[0]),Math.ceil(S/y[1]/m[1]),Math.ceil(p/y[2]/m[2])];$e("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${_}`);let b=v?4:1,E=Math.max(y[0]*b,y[1]),I=v?4:1,C=[t.kernelShape[l?1:2],t.kernelShape[l?2:3]],z=[C[0]+(t.dilations[0]<=1?0:(C[0]-1)*(t.dilations[0]-1)),C[1]+(t.dilations[1]<=1?0:(C[1]-1)*(t.dilations[1]-1))],U=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],D=[{type:6,data:n},{type:6,data:i},{type:6,data:a},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:C},{type:6,data:U}];Yr(t,D),D.push(...Y(e[0].dims,e[1].dims));let Z=["rank","rank"];o&&(D.push(...Y(e[2].dims)),Z.push("rank")),D.push(...Y(r));let ie=K=>{let ce=B("x",e[0].dataType,e[0].dims.length,I),G=B("w",e[1].dataType,e[1].dims.length,1),re=J("result",e[0].dataType,r.length,I),se=[ce,G],R="";if(o){let A=B("bias",e[2].dataType,e[2].dims.length,I);se.push(A),R+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${A.type.value} {
            return bias[coords.${l?"w":"y"}${v?"/ 4":""}];
          }`}let j=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:C.length},{name:"pads",type:"i32",length:U.length}];Zr(t,j);let H=je(e[0].dataType,1);if(H!=="f16"&&H!=="f32")throw new Error(`elemType ${H} is not supported.`);return`
        ${Nc("uniforms.result_strides")}
        ${K.registerUniforms(j).declareVariables(...se,re)};
        ${R}
        ${Zm(l,o,t,ce.type.value,b)}
        ${v?ts(m,y,H,void 0,!l,E):rs(m,y,H,void 0,!l,E,!1,void 0,s)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${m};${y};${v}`,inputDependencies:Z},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:D}),getShaderSource:ie}}}),Xm,yd,gS=W(()=>{oe(),ur(),le(),ue(),Xm=(e,t,r,n,i,a=!1,o,s,l=!1)=>{let d=l?1:2,p=l?2:3,f=l?3:1,u=a?2:1,g=`
  fn setOutputAtIndex(flatIndex : u32, value : ${a?`vec4<${o}>`:o}) {
    result[flatIndex] = ${a?`vec4<${o}>`:o}(value);
  }`;n&&(g+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${a?`vec4<${o}>`:o} {
      return bias[coords.${l?"w":"y"}${a?"/ 4":""}];
    }`);let v=a?4:1,w=B("W",t[1].dataType,t[1].dims.length,v),S=B("Dy",t[0].dataType,t[0].dims.length,v),y=[S,w];n&&y.push(B("bias",t[2].dataType,[r[f]].length,v));let m=J("result",t[0].dataType,r.length,v),_=`{
        let batch: u32 = ${i?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${i?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${i?"global_id.y":"workgroup_id.y"} * ${u};
        let d1: u32 = ${i?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${o}>, ${u}>;
        for (var i = 0; i < ${u}; i++) {
          dotProd[i] = vec4<${o}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${o}(dyCorner.x) + ${o}(wR)) / ${o}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${o}(dyCorner.y) + ${o}(wC)) / ${o}(uniforms.strides.y);
            let dyC2 = (${o}(dyCorner.y) + 1.0 + ${o}(wC)) / ${o}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${o}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${S.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${o}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${S.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${o}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${f}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${S.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${o}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${w.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${S.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${o}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${u}; i = i + 1) {
          let value = dotProd[i] + ${n?"bias[c+i]":`vec4<${o}>(0.0)`};
          ${m.set("batch","r","c + i","d1","value")};
        }
      }`,b=`
          let outputIndices = ${m.offsetToIndices("global_idx")};
          let batch = ${m.indicesGet("outputIndices",0)};
          let d1 = ${m.indicesGet("outputIndices",f)};
          let r = ${m.indicesGet("outputIndices",d)};
          let c = ${m.indicesGet("outputIndices",p)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${o}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${d}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${p}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${l?S.get("batch","idyR","idyC","inputChannel"):S.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${w.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${n?"bias[d1]":`${o}(0.0)`};
          ${m.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(s).declareVariables(...y,m)}
  ${g}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${a?_:b}}`},yd=(e,t,r)=>{let n=e.length>2,i=t.outputShape,a=P.size(i),o=[Math.ceil(a/64),1,1];$e("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${o}`);let s=t.format==="NHWC",l=["rank","rank"],d=[t.strides[0],t.strides[1]],p=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],f=[t.dilations[0],t.dilations[1]],u=[p[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),p[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],g=[u[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),u[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],v=!1,w=t.group,S=e[1].dims,y=S[0]/w,m=S[1],_=[{type:12,data:a},{type:12,data:d},{type:12,data:p},{type:12,data:f},{type:12,data:u},{type:6,data:g},{type:12,data:y},{type:12,data:m},...Y(e[0].dims,e[1].dims)];n&&(_.push(...Y(e[2].dims)),l.push("rank")),_.push(...Y(i));let b=o[1]===1&&o[2]===1,E=I=>{let C=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:d.length},{name:"filter_dims",type:"u32",length:p.length},{name:"dilations",type:"u32",length:p.length},{name:"effective_filter_dims",type:"u32",length:u.length},{name:"pads",type:"i32",length:g.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],z=je(e[0].dataType);return`${Xm(I,e,i,n,b,v,z,C,s)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:l},getRunData:()=>({dispatchGroup:{x:o[0],y:o[1],z:o[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:_}),getShaderSource:E}}}),Jm,eg,tg,Nl,p$,rg,ng,ig,ag,f$,yS=W(()=>{mS(),gS(),rn(),tn(),Jm=(e,t,r,n,i,a)=>(e-1)*t+r+(n-1)*i+1-a,eg=(e,t,r,n,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=a,r[i]=e-a):t==="SAME_LOWER"&&(r[n]=e-a,r[i]=a)},tg=(e,t,r,n,i,a,o,s,l,d)=>{let p=e.length-2,f=d.length===0;l.length<p&&l.push(...Array(p-l.length).fill(0));let u=e[0],g=t[s?3:1]*i;for(let v=0,w=e.length-p-(s?1:0);v<p;++v,++w){let S=e[w],y=f?S*o[v]:d[v],m=Jm(S,o[v],a[v],t[w],r[v],y);eg(m,n,a,v,v+p),f&&d.push(o[v]*(S-1)+l[v]+(t[w]-1)*r[v]+1-a[v]-a[v+p])}d.splice(0,0,u),d.splice(s?3:1,0,g)},Nl=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,u)=>f*u,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,l=e.dilations.slice();if(l.reduce((f,u)=>f+u,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,u)=>f+u,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}tg(s,r,l,e.autoPad,e.group,i,d,n,o,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:i,outputPadding:o,outputShape:a,dilations:l,strides:d}),p},p$=e=>{let t=Bc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group,o=e.kernelShape,s=e.pads,l=e.strides,d=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:n,format:r,dilations:i,group:a,kernelShape:o,outputPadding:p,outputShape:f,pads:s,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},rg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ng=[2,3,1,0],ig=(e,t,r)=>{let n=Nl(r,t),i=r.format==="NHWC",a=n.outputShape,o=a[i?3:1],s=t[0].dims[i?3:1];if(n.group!==1||o===1&&s===1){e.compute(yd(t,n));return}let l=a[i?1:2],d=a[i?2:3],p=t[1].dims[2],f=t[1].dims[3],u=i?l*d:o,g=i?o:l*d,v=p*f*s,w=!0,S=e.kernelCustomData.wT??e.compute(St(t[1],ng),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=S);let y=[t[0],S],m=t.length===3;m&&(!i&&t[2].dims.length===1?y.push(t[2].reshape([t[2].dims[0],1,1])):y.push(t[2])),e.compute(c$(y,n,a,u,g,v,m,w),{inputs:y})},ag=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let l=Nl({...t,pads:s,strides:o,dilations:a,kernelShape:i},n);e.compute(yd(n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]]))},f$=(e,t)=>{rg(e.inputs,t),e.inputs[0].dims.length===3?ag(e,t):ig(e,e.inputs,t)}}),og,h$,m$,vS=W(()=>{oe(),le(),Ne(),ue(),og=(e,t,r,n)=>{let i=P.size(t),a=t.length,o=B("input",e,a),s=J("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=P.normalizeAxis(l,a),p=f=>{let u=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,g=X("uniforms.input_shape","uniforms.axis",a),v=n.reverse?u+(n.exclusive?" + 1":""):"0",w=n.reverse?g:u+(n.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,s)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${v};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...Y(t,t)]}),getShaderSource:p}},h$=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(og(n,r,i,t),{inputs:[0]})},m$=e=>{let t=e.exclusive===1,r=e.reverse===1;return _e({exclusive:t,reverse:r})}}),sg,lg,ug,g$,y$,wS=W(()=>{oe(),le(),Ne(),ue(),sg=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},lg=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)i.push(r.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},ug=(e,t)=>{let r,n,i,a,o,s,l=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";l?([r,n,i,a]=e.dims,o=p?[r,n,i,d,d,a/d**2]:[r,n,i,a/d**2,d,d],s=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=p?[r,d,d,a/d**2,n,i]:[r,a/d**2,d,d,n,i],s=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(o),u=f.dims.length,g=e.dataType,v=B("a",g,u),w=J("output",g,u),S=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(v,w)}

  ${lg(s,u,v,w)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",v.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:y=>{let m=l?[r,n*d,i*d,a/d**2]:[r,a/d**2,n*d,i*d],_=P.size(m),b=f.dims,E=P.sortBasedOnPerm(b,s);return{outputs:[{dims:m,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...Y(b,E)]}},getShaderSource:S}},g$=(e,t)=>{sg(e.inputs),e.compute(ug(e.inputs[0],t))},y$=e=>_e({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ao,Ei,Ll,dg,cg,pg,fg,Ul,hg,v$,w$,$S=W(()=>{oe(),le(),Ne(),ue(),ao="[a-zA-Z]|\\.\\.\\.",Ei="("+ao+")+",Ll="^"+Ei+"$",dg="("+Ei+",)*"+Ei,cg="^"+dg+"$",pg=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},fg=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(cg)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(Ll)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,s,o);this.lhs.push(l)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!n.match(RegExp(Ei)))throw new Error("Invalid RHS");(i=n.match(RegExp(ao,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,a=!1,o=[],s=0;if(!e.match(RegExp(Ll))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(ao,"g")),d=new pg(n);return l==null||l.forEach((p,f)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let u=i-l.length+1;if(u<0)throw new Error("Ellipsis out of bounds");if(o=r.slice(s,s+u),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<o.length;g++){let v=String.fromCharCode(48+g);d.addSymbol(v,f+g),this.addSymbol(v,r[s++],n)}}else d.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[s++],n)}),d}},Ul=e=>e+"_max",hg=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,p)=>B(`input${p}`,t,d)),a=P.size(n),o=J("output",t,n.length),s=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let p=[],f="var prod = 1.0;",u="var sum = 0.0;",g="sum += prod;",v=[],w=[],S=[],y=[],m=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((b,E)=>{var I;if(r.rhs.symbolToIndices.has(E)){let C=(I=r.rhs.symbolToIndices.get(E))==null?void 0:I[0];C!==void 0&&r.lhs.forEach((z,U)=>{if(b.inputIndices.includes(U)){let D=z.symbolToIndices.get(E);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(Z=>{p.push(`${i[U].indicesSet(`input${U}Indices`,Z,o.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,z)=>{if(b.inputIndices.includes(z)){let U=C.symbolToIndices.get(E);if(U===void 0)throw new Error("Invalid symbol error");U.forEach(D=>{v.push(`${i[z].indicesSet(`input${z}Indices`,D,`${E}`)}`)}),y.push(`prod *= ${i[z].getByIndices(`input${z}Indices`)};`)}}),w.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Ul(E)}; ${E}++) {`),S.push("}")});let _=m?[...p,`let sum = ${i.map((b,E)=>b.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...p,u,...w,...v,f,...y,g,...S];return`
            ${d.registerUniforms(s.map(b=>({name:`${Ul(b)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((b,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${_.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=s.filter(f=>r.symbolToInfo.has(f)).map(f=>{var u;return{type:12,data:((u=r.symbolToInfo.get(f))==null?void 0:u.dimValue)||0}});d.push({type:12,data:a});let p=e.map((f,u)=>[...Y(f)]).reduce((f,u)=>f.concat(u),d);return p.push(...Y(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:l}},v$=(e,t)=>{let r=new fg(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(hg(i,e.inputs[0].dataType,r,n))},w$=e=>{let t=e.equation.replace(/\s+/g,"");return _e({equation:t})}}),mg,jl,gg,yg,$$,_S=W(()=>{oe(),le(),ue(),mg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},jl=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},gg=(e,t)=>e.length>t.length?jl(e,t):jl(t,e),yg=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=gg(t,r),i=e[0].dataType,a=i===9?4:1,o=Math.ceil(P.size(n)/a),s=d=>{let p=B("input",i,t.length,a),f=J("output",i,n.length,a),u;if(i===9){let g=(v,w,S="")=>`
          let outputIndices${w} = ${f.offsetToIndices(`outputOffset + ${w}u`)};
          let offset${w} = ${p.broadcastedIndicesToOffset(`outputIndices${w}`,f)};
          let index${w} = offset${w} / 4u;
          let component${w} = offset${w} % 4u;
          ${v}[${w}] = ${S}(${p.getByOffset(`index${w}`)}[component${w}]);
        `;u=`
        let outputOffset = global_idx * ${a};
        var data = vec4<u32>(0);
        ${g("data",0,"u32")}
        ${g("data",1,"u32")}
        ${g("data",2,"u32")}
        ${g("data",3,"u32")}
        ${f.setByOffset("global_idx","data")}
      }`}else u=`
        let outputIndices = ${f.offsetToIndices("global_idx")};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",f)};
        ${f.setByOffset("global_idx",p.getByOffset("inputOffset"))}
      }`;return`
    ${d.registerUniform("vec_size","u32").declareVariables(p,f)}
    ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${u}`},l=[{type:12,data:o},...Y(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length}`,inputDependencies:["rank"]},getShaderSource:s,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l})}},$$=e=>{mg(e.inputs),e.compute(yg(e.inputs),{inputs:[0]})}}),vg,_$,xS=W(()=>{oe(),le(),ue(),Mc(),vg=e=>{let t=e[0].dataType,r=P.size(e[0].dims),n=P.size(e[1].dims),i=n%4===0,a=o=>{let s=B("x",t,[1],4),l=B("bias",t,[1],4),d=J("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,u=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(p).declareVariables(s,l,d)}

    ${pd(rt(t))}

    ${o.mainStart(di)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${u}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",fd("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/di/4)}})}},_$=e=>{e.inputs.length<2||P.size(e.inputs[1].dims)===0?Uw(e):e.compute(vg(e.inputs))}}),wg,$g,x$,b$,bS=W(()=>{oe(),le(),Ne(),ue(),wg=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},$g=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=P.normalizeAxis(t.axis,i),o=r.slice(0);o.splice(a,1,...n);let s=r[a],l=e[0].dataType===9?4:1,d=Math.ceil(P.size(o)/l),p=[{type:12,data:d},{type:6,data:s},{type:12,data:a},...Y(e[0].dims,e[1].dims,o)],f=u=>{let g=B("data",e[0].dataType,e[0].dims.length,l),v=B("inputIndices",e[1].dataType,e[1].dims.length),w=J("output",e[0].dataType,o.length,l),S=m=>{let _=n.length,b=`var indicesIndices${m}  = ${v.type.indices}(0);`;for(let E=0;E<_;E++)b+=`${_>1?`indicesIndices${m}[${E}]`:`indicesIndices${m}`} = ${o.length>1?`outputIndices${m}[uniforms.axis + ${E}]`:`outputIndices${m}`};`;b+=`
          var idx${m} = ${v.getByIndices(`indicesIndices${m}`)};
          if (idx${m} < 0) {
            idx${m} = idx${m} + uniforms.axisDimLimit;
          }
          var dataIndices${m} : ${g.type.indices};
        `;for(let E=0,I=0;E<i;E++)E===a?(b+=`${i>1?`dataIndices${m}[${E}]`:`dataIndices${m}`} = u32(idx${m});`,I+=_):(b+=`${i>1?`dataIndices${m}[${E}]`:`dataIndices${m}`} = ${o.length>1?`outputIndices${m}[${I}]`:`outputIndices${m}`};`,I++);return b},y;if(e[0].dataType===9){let m=(_,b,E="")=>`
          let outputIndices${b} = ${w.offsetToIndices(`outputOffset + ${b}u`)};
          ${S(b)};
          let offset${b} = ${g.indicesToOffset(`dataIndices${b}`)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${_}[${b}] = ${E}(${g.getByOffset(`index${b}`)}[component${b}]);
        `;y=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${m("value",0,"u32")}
        ${m("value",1,"u32")}
        ${m("value",2,"u32")}
        ${m("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else y=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${g.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${u.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,v,w)}
      ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${y}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},x$=e=>_e({axis:e.axis}),b$=(e,t)=>{let r=e.inputs;wg(r),e.compute($g(e.inputs,t))}}),_g,xg,S$,k$,SS=W(()=>{oe(),le(),Ne(),ue(),_g=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=P.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,l)=>l===r?Math.ceil(s/n)===a.dims[l]:s===a.dims[l]).reduce((s,l)=>s&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,l)=>s===a.dims[l]).reduce((s,l)=>s&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},xg=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=P.normalizeAxis(t.gatherAxis,i),o=P.normalizeAxis(t.quantizeAxis,i),s=r.slice(0);s.splice(a,1,...n);let l=P.size(s),d=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...Y(...e.map((g,v)=>g.dims),s)],u=g=>{let v=B("data",e[0].dataType,e[0].dims.length),w=B("inputIndices",e[1].dataType,e[1].dims.length),S=B("scales",e[2].dataType,e[2].dims.length),y=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,m=J("output",d,s.length),_=[v,w,S];y&&_.push(y);let b=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(b).declareVariables(..._,m)}
        ${g.mainStart()}
        let output_indices = ${m.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${m.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${m.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${v.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${m.indicesGet("output_indices","i")};
          ${v.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${v.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${m.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${v.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${v.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${v.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${y?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${y.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${y.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${rt(d)}(quantized_data - zero_point) * scale;
        ${m.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,v)=>v!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,v)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:u}},S$=(e,t)=>{let r=e.inputs;_g(r,t),e.compute(xg(e.inputs,t))},k$=e=>_e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),bg,Sg,E$,C$,kS=W(()=>{oe(),le(),Ne(),ue(),bg=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Sg=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,a=e[1].dims,o=e[1].dataType,s=P.normalizeAxis(t.axis,i),l=r[s],d=a.slice(0),p=P.size(d),f=B("input",n,i),u=B("indicesInput",o,a.length),g=J("output",n,d.length),v=[{type:12,data:p},{type:6,data:l},{type:12,data:s}];return v.push(...Y(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:v}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,u,g)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${u.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},E$=e=>_e({axis:e.axis}),C$=(e,t)=>{let r=e.inputs;bg(r),e.compute(Sg(e.inputs,t))}}),kg,Eg,T$,I$,ES=W(()=>{oe(),le(),ue(),kg=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Eg=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,a,o]=O1.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let l=P.size(s),d=[{type:12,data:l},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],p=["type","type"];e.length===3&&(d.push(...Y(e[2].dims)),p.push("rank")),d.push(...Y(s));let f=u=>{let g="";t.transA&&t.transB?g="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?g="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?g="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(g="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let v=t.alpha===1?"":"value *= uniforms.alpha;",w=B("a",e[0].dataType,e[0].dims),S=B("b",e[1].dataType,e[1].dims),y=w.type.value,m=null,_=[w,S];e.length===3&&(m=B("c",e[2].dataType,e[2].dims.length),_.push(m));let b=J("output",e[0].dataType,s.length);_.push(b);let E=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${u.registerUniforms(E).declareVariables(..._)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${y}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${g}
    }

    ${v}
    ${m!=null?`let cOffset = ${m.broadcastedIndicesToOffset("vec2(m, n)",b)}; value += ${y}(uniforms.beta) * ${m.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:f}},T$=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},I$=(e,t)=>{kg(e.inputs),e.compute(Eg(e.inputs,t))}}),lt,Cg,z$,Wl,Tg,Li,A$,O$=W(()=>{oe(),le(),Ne(),Ac(),Pc(),ue(),tn(),lt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Cg=(e,t)=>{let r=e[0],n=lt(e,1),i=lt(e,2),a=lt(e,3),o=lt(e,4),s=lt(e,5),l=lt(e,6),d=lt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],u=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=f,v=0,w=0,S=Math.floor(u/t.numHeads);if(l&&d&&P.size(l.dims)&&P.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');v=l.dims[2],w=l.dims[2]}else if(l&&P.size(l.dims)||d&&P.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y;if(n&&P.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');y=2,g=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');y=5,g=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=0,g=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}if(a&&P.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let m=v+g,_=0;if(o&&P.size(o.dims)>0){_=8;let C=o.dims;throw C.length===1?C[0]===p?_=1:C[0]===3*p+2&&(_=3):C.length===2&&C[0]===p&&C[1]===m&&(_=5),_===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let b=!1,E=u;if(i&&P.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],b=!0}}let I=!1;if(o&&P.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&P.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==p||s.dims[1]!==t.numHeads||s.dims[2]!==f||s.dims[3]!==m)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:v,kvSequenceLength:g,totalSequenceLength:m,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:u,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:I,passPastInKv:b,qkvFormat:y}},z$=e=>_e({...e}),Wl=_e({perm:[0,2,1,3]}),Tg=(e,t,r,n,i,a,o)=>{let s=[n,i,a],l=P.size(s),d=[{type:12,data:l},{type:12,data:o},{type:12,data:a}],p=f=>{let u=J("qkv_with_bias",t.dataType,s),g=B("qkv",t.dataType,s),v=B("bias",r.dataType,s),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(g,v,u)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},Li=(e,t,r,n,i,a,o,s)=>{let l=a;if(o&&P.size(o.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Tg(e,a,o,t,n,r*i,s),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(St(l,Wl.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,n,r,i])),r===1||n===1?l:e.compute(St(l,Wl.perm),{inputs:[l],outputs:[-1]})[0]},A$=(e,t)=>{let r=Cg(e.inputs,t),n=e.inputs[0],i=lt(e.inputs,1),a=lt(e.inputs,2),o=lt(e.inputs,3),s=lt(e.inputs,4),l=lt(e.inputs,5),d=lt(e.inputs,6),p=lt(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let f=i&&a&&i.dims.length===4&&a.dims.length===4,u=Li(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,o,0);if(f)return fa(e,u,i,a,s,void 0,d,p,l,r,t);if(!i||!a)throw new Error("key and value must be provided");let g=Li(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,o,r.hiddenSize),v=Li(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,o,2*r.hiddenSize);fa(e,u,g,v,s,void 0,d,p,l,r,t)}}),Fl,Ig,zg,vd,R$,P$=W(()=>{oe(),le(),ue(),Fl=e=>Array.from(e.getBigInt64Array(),Number),Ig=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Fl(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},zg=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},vd=(e,t)=>{let r=e[0].dims,n=t??Fl(e[1]),i=zg(r,n),a=P.size(i),o=e[0].dataType,s=B("input",o,r.length),l=J("output",o,i.length),d=p=>`
      const inputShape = ${s.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(s,l)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${s.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${s.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",s.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...Y(e[0].dims,i)]}),getShaderSource:d}},R$=e=>{Ig(e.inputs),e.compute(vd(e.inputs),{inputs:[0]})}}),Ag,Vl,M$,Og,Hl,B$,CS=W(()=>{oe(),le(),Ne(),Pc(),ue(),O$(),P$(),tn(),Ag=(e,t)=>{let r=e[0],n=e[1],i=e[2],a=e[3],o=e[4];if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,l=r.dims[0],d=r.dims[1],p=r.dims.length===3?s?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,u=0,g=0,v=Math.floor(p/t.numHeads),w=a&&a.dims.length!==0,S=o&&o.dims.length!==0,y=!0;if(w&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');u=a.dims[1],g=a.dims[1]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let m;if(n){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');m=2,f=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');m=5,f=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');m=0,f=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');m=3}let _=0,b=!1,E=p;if(i){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],b=!0}}let I=u+f;return{batchSize:l,sequenceLength:d,pastSequenceLength:u,kvSequenceLength:f,totalSequenceLength:I,maxSequenceLength:g,inputHiddenSize:0,hiddenSize:p,vHiddenSize:E,headSize:v,vHeadSize:Math.floor(E/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:m,isPastkvBSNH:y}},Vl=(e,t,r,n)=>{let i=[n.batchSize,n.totalSequenceLength,n.kvNumHeads,n.headSize],a=4,o=P.size(i)/a,s=n.totalSequenceLength,l=J("present_kv",r,i.length,a),d=B("new_kv",e.dataType,e.dims.length,a),p=t?B("past_kv",t.dataType,t.dims.length,a):void 0,f=Math.ceil(n.headSize/a),u={x:s,y:e.dims[0],z:1},g=t?["rank","rank"]:["rank"],v=[{type:12,data:o},{type:12,data:n.pastSequenceLength},{type:12,data:n.kvSequenceLength},{type:12,data:n.totalSequenceLength}],w=[d];p?(v.push(...Y(e.dims),...Y(t.dims),...Y(i)),w.push(p)):v.push(...Y(e.dims),...Y(i));let S=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],y=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,m=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,_=t?`if (s < past_seqlen) {
        ${y}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${m}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${m}
        }`,b=E=>`

  ${E.registerUniforms(S).declareVariables(...w,l)}
  ${E.mainStart([f,n.kvNumHeads,1])}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${l.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${n.kvNumHeads}u;
    let H = ${f}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${n.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${_}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${n.kvNumHeads}${f}${!!t}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:u,programUniforms:v}),getShaderSource:b}},M$=e=>_e({...e}),Og=_e({perm:[0,2,1,3]}),Hl=(e,t,r,n,i)=>{let a=t,o=n.kvNumHeads,s=n.nReps;return t.dims.length===3&&n.kvSequenceLength!==0&&(a=t.reshape([n.batchSize,n.kvSequenceLength,o,n.headSize])),r?a=e.compute(Vl(a,r,a.dataType,n),{inputs:[a,r],outputs:[n.isPastkvBSNH?i:-1]})[0]:a=e.compute(Vl(a,void 0,a.dataType,n),{inputs:[a],outputs:[n.isPastkvBSNH?i:-1]})[0],s!==1&&(a=e.compute(vd([a],[1,1,1,s]),{inputs:[a],outputs:[-1]})[0],a=a.reshape([n.batchSize,n.totalSequenceLength,o*s,n.headSize])),e.compute(St(a,Og.perm),{inputs:[a],outputs:[-1]})[0]},B$=(e,t)=>{var l;let r=Ag(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((l=e.inputs[1])==null?void 0:l.dims.length)===5)throw new Error("Packed KV is not implemented");let n=Li(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,e.inputs[0],void 0,0),i=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,a=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,o=Hl(e,e.inputs[1],i,r,1),s=Hl(e,e.inputs[2],a,r,2);fa(e,n,o,s,void 0,void 0,void 0,void 0,void 0,r,t)}}),ql,Rg,Pg,D$,TS=W(()=>{oe(),le(),tn(),ue(),ql=(e,t,r,n,i,a,o,s)=>{let l=Be(a),d=l===1?"f32":`vec${l}f`,p=l===1?"vec2f":`mat2x${l}f`,f=i*o,u=[i,o,a/l],g=[i,o,2],v=["rank","type","type"],w=[];w.push(...Y(u,g));let S=y=>{let m=B("x",t.dataType,3,l),_=B("scale",r.dataType,r.dims),b=B("bias",n.dataType,n.dims),E=J("output",1,3,2),I=[m,_,b,E],C=64;return`
  var<workgroup> workgroup_shared : array<${p}, ${C}>;
  const workgroup_size = ${C}u;
  ${y.declareVariables(...I)}
  ${y.mainStart(C)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${m.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Kr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Kr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${s}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:f},programUniforms:w}),getShaderSource:S},{inputs:[t,r,n],outputs:[-1]})[0]},Rg=(e,t,r)=>{let n=t[0].dims,i=n,a=2,o=n[0],s=n[1],l=P.sizeFromDimension(n,a),d=Be(l),p=P.size(i)/d,f=ql(e,t[0],t[1],t[2],o,l,s,r.epsilon),u=[o,s,l/d],g=[o,s],v=["type","none"],w=S=>{let y=B("x",t[0].dataType,u.length,d),m=B("scale_shift",1,g.length,2),_=J("output",t[0].dataType,u.length,d),b=[y,m,_];return`
  ${S.registerUniform("output_size","u32").declareVariables(...b)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${_.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${m.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${y.getByOffset("global_idx")} * ${_.type.value}(scale_shift.x) + ${_.type.value}(scale_shift.y);
      ${_.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...Y(u,g,u)]}),getShaderSource:w},{inputs:[t[0],f]})},Pg=(e,t,r)=>{let n=t[0].dims,i=n,a=n[0],o=n[n.length-1],s=P.sizeFromDimension(n,1)/o,l=Be(o),d=P.size(i)/l,p=[{type:12,data:s},{type:12,data:Math.floor(o/l)}],f=["type","type"],u=[0,n.length-1];for(let S=0;S<n.length-2;S++)u.push(S+1);let g=e.compute(St(e.inputs[0],u),{inputs:[e.inputs[0]],outputs:[-1]})[0],v=ql(e,g,t[1],t[2],a,s,o,r.epsilon),w=S=>{let y=je(t[0].dataType),m=l===1?"vec2f":`mat${l}x2f`,_=I=>{let C=I===0?"x":"y",z=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${y}(${z}(scale.${C}))`;case 2:return`vec2<${y}>(${z}(scale[0].${C}, scale[1].${C}))`;case 4:return`vec4<${y}>(${z}(scale[0].${C}, scale[1].${C}, scale[2].${C}, scale[3].${C}))`;default:throw new Error(`Not supported compoents ${l}`)}},b=B("input",t[0].dataType,t[0].dims,l),E=J("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${b.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${m}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${S.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${_(0)}, ${_(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:w},{inputs:[t[0],v]})},D$=(e,t)=>{t.format==="NHWC"?Pg(e,e.inputs,t):Rg(e,e.inputs,t)}}),Mg,Bg,N$,IS=W(()=>{oe(),le(),ue(),Mg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Bg=(e,t,r)=>{let n=t.simplified,i=e[0].dims,a=e[1],o=!n&&e[2],s=i,l=P.normalizeAxis(t.axis,i.length),d=P.sizeToDimension(i,l),p=P.sizeFromDimension(i,l),f=P.size(a.dims),u=o?P.size(o.dims):0;if(f!==p||o&&u!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${u}`);let g=[];for(let E=0;E<i.length;++E)E<l?g.push(i[E]):g.push(1);let v=Be(p),w=["type","type"],S=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/v)},{type:1,data:t.epsilon}];o&&w.push("type");let y=r>1,m=r>2,_=E=>{let I=je(e[0].dataType),C=[B("x",e[0].dataType,e[0].dims,v),B("scale",a.dataType,a.dims,v)];o&&C.push(B("bias",o.dataType,o.dims,v)),C.push(J("output",e[0].dataType,s,v)),y&&C.push(J("mean_data_output",1,g)),m&&C.push(J("inv_std_output",1,g));let z=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(z).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ud("f32",v)};
    var mean_square_vector = ${ud("f32",v)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Qn(I,v,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Kr("mean_vector",v)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Kr("mean_square_vector",v)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Qn(I,v,"x[j + offset]")};
      let f32scale = ${Qn(I,v,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Qn(I,v,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${m?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},b=[{dims:s,dataType:e[0].dataType}];return y&&b.push({dims:g,dataType:1}),m&&b.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${v};${r};${n}`,inputDependencies:w},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:_}},N$=(e,t)=>{Mg(e.inputs),e.compute(Bg(e.inputs,t,e.outputCount))}}),Dg,Ng,Lg,L$,U$,zS=W(()=>{oe(),le(),Ne(),ue(),Dg=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!P.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(P.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(P.size(l)!==d)throw new Error("zeroPoints input size error.")}},Ng=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,o=t.n,s=r.slice(0,n-2),l=P.size(s),d=e[1].dims[2]/4,p=e[0].dataType,f=Be(t.k),u=Be(d),g=Be(o),v=s.concat([i,o]),w=i>1&&o/g%2===0?2:1,S=P.size(v)/g/w,y=64,m=[],_=[l,i,a/f],b=P.convertShape(e[1].dims).slice();b.splice(-1,1,d/u),m.push(...Y(_)),m.push(...Y(b)),m.push(...Y(e[2].dims)),e.length===4&&m.push(...Y(P.convertShape(e[3].dims)));let E=[l,i,o/g];m.push(...Y(E));let I=C=>{let z=_.length,U=B("a",e[0].dataType,z,f),D=B("b",12,b.length,u),Z=B("scales",e[2].dataType,e[2].dims.length),ie=[U,D,Z],K=e.length===4?B("zero_points",12,e[3].dims.length):void 0;K&&ie.push(K);let ce=E.length,G=J("output",e[0].dataType,ce,g),re=je(e[0].dataType),se=(()=>{switch(f){case 1:return`array<${re}, 8>`;case 2:return`mat4x2<${re}>`;case 4:return`mat2x4<${re}>`;default:throw new Error(`${f}-component is not supported.`)}})(),R=()=>{let A=`
          // reuse a data
            var input_offset = ${U.indicesToOffset(`${U.type.indices}(batch, row, word_offset)`)};
            var a_data: ${se};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${U.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let N=0;N<g*w;N++)A+=`
            b_value = ${u===1?`b${N}_data`:`b${N}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${se}(${Array.from({length:4},(ee,de)=>`${re}(b_value_lower[${de}]), ${re}(b_value_upper[${de}])`).join(", ")});
            b_dequantized_values = ${f===1?`${se}(${Array.from({length:8},(ee,de)=>`(b_quantized_values[${de}] - ${K?`zero_point${N}`:"zero_point"}) * scale${N}`).join(", ")});`:`(b_quantized_values - ${se}(${Array(8).fill(`${K?`zero_point${N}`:"zero_point"}`).join(",")})) * scale${N};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(N/g)}]${g>1?`[${N%g}]`:""} += ${Array.from({length:8/f},(ee,de)=>`${f===1?`a_data[${de}] * b_dequantized_values[${de}]`:`dot(a_data[${de}], b_dequantized_values[${de}])`}`).join(" + ")};
          `;return A},j=()=>{let A=`
            var col_index = col * ${g};
            ${K?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${re}(8);`}
            `;for(let N=0;N<g*w;N++)A+=`
            let scale${N} = ${Z.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${N} = ${re}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return A},H=()=>{let A=`col_index = col * ${g};`;for(let N=0;N<g*w;N++)A+=`
            let b${N}_data = ${D.getByIndices(`${D.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return A+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${se};
            var b_dequantized_values: ${se};`,A};return`
        var<workgroup> workgroup_shared: array<${G.type.value}, ${w*y}>;
        ${C.declareVariables(...ie,G)}
        ${C.mainStart([y,1,1])}
          let output_indices = ${G.offsetToIndices(`(global_idx / ${y}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${y}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${j()}
            for (var word: u32 = 0; word < ${d}; word += ${u}) {
              ${H()}
              for (var i: u32 = 0; i < ${u}; i++) {
                ${R()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${G.type.value} = ${G.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${y}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${G.setByIndices(`${G.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${u};${g};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:v,dataType:p}],dispatchGroup:{x:S},programUniforms:m}),getShaderSource:I}},Lg=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,o=t.n,s=r.slice(0,n-2),l=P.size(s),d=e[1].dims[2]/4,p=e[0].dataType,f=Be(t.k),u=Be(d),g=s.concat([i,o]),v=128,w=o%8===0?8:o%4===0?4:1,S=v/w,y=S*u*8,m=y/f,_=y/t.blockSize,b=P.size(g)/w,E=[],I=[l,i,a/f],C=P.convertShape(e[1].dims).slice();C.splice(-1,1,d/u),E.push(...Y(I)),E.push(...Y(C)),E.push(...Y(e[2].dims)),e.length===4&&E.push(...Y(P.convertShape(e[3].dims)));let z=[l,i,o];E.push(...Y(z));let U=D=>{let Z=I.length,ie=B("a",e[0].dataType,Z,f),K=B("b",12,C.length,u),ce=B("scales",e[2].dataType,e[2].dims.length),G=[ie,K,ce],re=e.length===4?B("zero_points",12,e[3].dims.length):void 0;re&&G.push(re);let se=z.length,R=J("output",e[0].dataType,se),j=je(e[0].dataType),H=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ie.type.value}, ${m}>;
        var<workgroup> inter_results: array<array<${R.type.value}, ${S}>, ${w}>;
        ${D.declareVariables(...G,R)}
        ${D.mainStart([S,w,1])}
          let output_indices = ${R.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${_} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${m};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${m}; a_offset += ${v})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ie.getByIndices(`${ie.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ie.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${_} + local_id.x;
            ${re?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${re.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${j}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${j}(8);`}
            let scale = ${ce.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${K.getByIndices(`${K.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${u}; i++) {
              ${H()}
              let b_value = ${u===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${j}>(${Array.from({length:4},(A,N)=>`${j}(b_value_lower[${N}]), ${j}(b_value_upper[${N}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${j}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(A,N)=>`${`dot(a_data${N}, b_dequantized_values[${N}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${R.type.value} = ${R.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${R.setByIndices(`${R.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${u};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:p}],dispatchGroup:{x:b},programUniforms:E}),getShaderSource:U}},L$=(e,t)=>{Dg(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Lg(e.inputs,t)):e.compute(Ng(e.inputs,t))},U$=e=>_e(e)}),Ug,jg,Wg,Fg,Vg,Hg,qg,Gg,j$,AS=W(()=>{oe(),le(),ue(),Ug=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},jg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${X("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${X("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${X("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},Wg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${X("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${X("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${X("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${X("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Fg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${X("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${X("uniforms.x_shape",i,t)})) {
                  k = i32(${X("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${X("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Vg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${X("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${X("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${X("uniforms.x_shape",i,t)})) {
                  k -= i32(${X("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${X("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Hg=(e,t,r)=>{switch(r.mode){case 0:return jg(e,t,r.pads.length);case 1:return Wg(e,t,r.pads.length);case 2:return Fg(e,t,r.pads.length);case 3:return Vg(e,t,r.pads.length);default:throw new Error("Invalid mode")}},qg=(e,t)=>{let r=P.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=P.size(r),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...Y(e[0].dims,r));let s=["rank"],l=d=>{let p=J("output",e[0].dataType,r.length),f=B("x",e[0].dataType,n.length),u=f.type.value,g=Hg(p,n.length,t),v=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&v.push({name:"constant_value",type:o?u:"f32"}),`
            ${d.registerUniforms(v).declareVariables(f,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${u}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(P.size(r)/64)},programUniforms:a}),getShaderSource:l}},Gg=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let l=0;l<s.length;l++)a[Number(s[l])]=Number(r[l]),a[Number(s[l])+i]=Number(r[l+s.length])}else r.forEach((s,l)=>a[Number(l)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:n,pads:o}}else return t},j$=(e,t)=>{Ug(e.inputs);let r=Gg(e.inputs,t);e.compute(qg(e.inputs,r),{inputs:[0]})}}),Ci,Gl,Kl,Ql,Yl,Kg,Qg,Zl,Xl,W$,F$,Jl,V$,H$,eu,q$,G$,K$,Q$,OS=W(()=>{Xt(),oe(),le(),ue(),Ci=e=>{if(be.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Gl=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();Jo.adjustPoolAttributes(r,i,o,s,l,d);let p=Jo.computePoolOutputShape(r,i,s,l,o,d,t.autoPad),f=Object.assign({},t);a?Object.assign(f,{kernelShape:o,strides:s,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:o,strides:s,pads:d,cacheKey:t.cacheKey});let u=p.slice();return u.push(u.splice(1,1)[0]),[f,n?u:p]},Kl=(e,t)=>{let r=t.format==="NHWC",n=P.size(e),i=P.size(t.kernelShape),a=[{type:12,data:n},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(d+p);a.push({type:12,data:s},{type:12,data:l},{type:12,data:d},{type:12,data:p}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let u=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],v=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];u=!!(w+S),a.push({type:12,data:g},{type:12,data:v},{type:12,data:w},{type:12,data:S}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,f,u]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=P.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,p)=>d+p);return[a,o,!!l,!1,!1]}},Ql=(e,t,r,n,i,a,o,s,l,d,p,f)=>{let u=i.format==="NHWC",g=t.type.value,v=J("output",t.type.tensor,n);if(i.kernelShape.length<=2){let w="",S="",y="",m=r-(u?2:1);if(p?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${m}] < 0 || xIndices[${m}]
                      >= uniforms.x_shape[${m}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let _=r-(u?3:2);f?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${_}] < 0 || xIndices[${_}] >= uniforms.x_shape[${_}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sh - uniforms.phStart + j;
                `,y=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var value = ${g}(${s});
              var pad = 0;
              ${S}
              ${w}
              ${y}
              ${o}

              output[global_idx] = value;
            }`}else{if(u)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=i.kernelShape.length,S=i.pads.length,y="";return d?y=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:y=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${g}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${X("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${X("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${X("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${X("uniforms.pads","j - 2u",S)};
                  ${y}
              }
              ${o}

              output[global_idx] = value;
            }`}},Yl=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Kg=e=>`${Yl(e)};${e.countIncludePad}`,Qg=e=>`${Yl(e)};${e.storageOrder};${e.dilations}`,Zl=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Xl=(e,t,r,n)=>{let[i,a]=Gl(t,n,r),o=B("x",t.dataType,t.dims.length),s=o.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${s}(uniforms.kernelSize);`:d+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[p,f,u,g,v]=Kl(a,i);p.push(...Y(t.dims,a));let w=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${u};${g};${v}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(P.size(a)/64)},programUniforms:p}),getShaderSource:S=>Ql(S,o,t.dims.length,a.length,i,l,d,0,f,u,g,v)}},W$=e=>{let t=e.count_include_pad!==0,r=Zl(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:Kg(n)}},F$=(e,t)=>{Ci(e.inputs),e.compute(Xl("AveragePool",e.inputs[0],!1,t))},Jl={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},V$=e=>{let t=e.format;return{format:t,...Jl,cacheKey:t}},H$=(e,t)=>{Ci(e.inputs),e.compute(Xl("GlobalAveragePool",e.inputs[0],!0,t))},eu=(e,t,r,n)=>{let[i,a]=Gl(t,n,r),o=`
      value = max(x_val, value);
    `,s="",l=B("x",t.dataType,t.dims.length),d=["rank"],[p,f,u,g,v]=Kl(a,i);return p.push(...Y(t.dims,a)),{name:e,shaderCache:{hint:`${n.cacheKey};${u};${g};${v}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(P.size(a)/64)},programUniforms:p}),getShaderSource:w=>Ql(w,l,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,f,u,g,v)}},q$=(e,t)=>{Ci(e.inputs),e.compute(eu("MaxPool",e.inputs[0],!1,t))},G$=e=>{let t=e.storage_order,r=e.dilations,n=Zl(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:Qg(i)}},K$=e=>{let t=e.format;return{format:t,...Jl,cacheKey:t}},Q$=(e,t)=>{Ci(e.inputs),e.compute(eu("GlobalMaxPool",e.inputs[0],!0,t))}}),Yg,Zg,Y$,Z$,RS=W(()=>{oe(),le(),Ne(),ue(),Yg=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Zg=(e,t)=>{let r=P.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,a=e[0].dims,o=e[1].dataType,s=P.size(a),l=n===3||n===2,d=l?[Math.ceil(P.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,u=f?l?[Math.ceil(P.size(f.dims)/4)]:f.dims:void 0,g=p.length===0||p.length===1&&p[0]===1,v=g===!1&&p.length===1,w=Be(s),S=g&&(!l||w===4),y=S?w:1,m=S&&!l?w:1,_=B("input",l?12:n,d.length,m),b=B("scale",o,p.length),E=f?B("zero_point",l?12:n,u.length):void 0,I=J("output",o,a.length,y),C=[_,b];E&&C.push(E);let z=[d,p];f&&z.push(u);let U=[{type:12,data:s/y},{type:12,data:r},{type:12,data:t.blockSize},...Y(...z,a)],D=Z=>{let ie=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Z.registerUniforms(ie).declareVariables(...C,I)}
      ${Z.mainStart()}
          ${Z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${_.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${y===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${_.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${b.getByOffset("0")}`:v?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${b.getByOffset("scale_index")};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${b.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${b.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?g?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:v?l?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${b.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":_.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:D,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/y/64),y:1,z:1},programUniforms:U})}},Y$=(e,t)=>{Yg(e.inputs,t),e.compute(Zg(e.inputs,t))},Z$=e=>_e({axis:e.axis,blockSize:e.blockSize})}),Xg,Jg,X$,PS=W(()=>{Xt(),oe(),ue(),Xg=(e,t,r)=>{let n=e===t,i=e<t&&r<0,a=e>t&&r>0;if(n||i||a)throw new Error("Range these inputs' contents are invalid.")},Jg=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),a=[i],o=i,s=[{type:12,data:o},{type:n,data:e},{type:n,data:r},...Y(a)],l=d=>{let p=J("output",n,a.length),f=p.type.value,u=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(u).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},X$=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),be.webgpu.validateInputContent&&Xg(t,r,n),e.compute(Jg(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),e0,t0,r0,n0,i0,a0,o0,s0,l0,u0,d0,tu,c0,p0,f0,h0,m0,J$,e2,MS=W(()=>{oe(),le(),Ne(),ue(),e0=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},t0=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,a)=>n[i]=e[a]),n},r0=(e,t,r,n,i,a)=>{let[o,s,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(p=>n.push(p)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");e0(n,t),t.axes.length>0&&t0(n,t.axes,d).forEach((p,f)=>n[f]=p)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(p=>i.push(Number(p))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},n0=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`return ${t}(xResized) / ${t}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${t}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${t}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${t}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",i0=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",a0=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((a,o)=>{n[a]=i[o],n[o+r]=i[t.length+o]}),n):i},o0=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(a=>i.push(a)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((a,o)=>i[a]=r[o])}else r.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},s0=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=n),r.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(n,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},l0=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${X("uniforms.scales","i",n)};
        var roi_low = ${X("uniforms.roi","i",i)};
        var roi_hi = ${X("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${X("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,u0=(e,t,r,n,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${X("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${X("uniforms.roi","i",a)};
          var roi_hi = ${X("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${X("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,d0=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${X("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,tu=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",c0=(e,t,r,n,i)=>{let[a,o,s,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${r[s]} - 1))`)};
      ${tu(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${o}];
      var col:${d} = originalIndices[${s}];
      ${n?`if (row < 0 || row > (${r[o]} - 1) || col < 0 || col > (${r[s]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[o]} - 1));
      col = max(0, min(col, ${r[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},p0=(e,t,r,n,i,a,o,s,l,d)=>{let p=r.length===2,[f,u]=p?[0,1]:[2,3],g=e.type.value,v=w=>{let S=w===f?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[w]},
        ${n[w]}, ${r[w]}, ${a[w]}, ${a[w]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${g} = originalIdx + ${g}(i);
          if (${S} < 0 || ${S} >= ${r[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${l};`:`${S} = max(0, min(${S}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${S})`)};
          data[i + 1] = ${w===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${v(f)};
    ${v(u)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},f0=(e,t,r,n,i)=>{let[a,o,s,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${tu(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${o}];
      var height:${p} = originalIndices[${s}];
      var width:${p} = originalIndices[${l}];
      ${n?`if (depth < 0 || depth > (${r[o]} - 1) || height < 0 || height > (${r[s]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[o]} - 1));
      height = max(0, min(height, ${r[s]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},h0=(e,t,r,n,i,a)=>{let o=e.dims,s=a0(a,t.axes,o.length),l=o0(o,n,i,t.axes),d=n.slice();n.length===0&&(d=o.map((m,_)=>m===0?1:l[_]/m),t.keepAspectRatioPolicy!=="stretch"&&(l=s0(o,d,t)));let p=J("output",e.dataType,l.length),f=B("input",e.dataType,o.length),u=P.size(l),g=o.length===l.length&&o.every((m,_)=>m===l[_]),v=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=f.type.value,y=m=>`
      ${g?"":`
      ${n0(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${d0(f,o)};
              ${i0(t.nearestMode,r,S)};
              ${u0(f,p,o,l,d.length,s.length,v)};
              `;case"linear":return`
              ${l0(p,o,l,d.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${c0(f,p,o,v,w)}`;if(o.length===3||o.length===5)return`${f0(f,p,o,v,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${p0(f,p,o,l,d,s,t.cubicCoeffA,v,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${m.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",s.length).declareVariables(f,p)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?d:""}|${i.length>0?i:""}|${s.length>0?s:""}|${g}|${o}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},{type:1,data:d},{type:1,data:s},...Y(o,l)]})}},m0=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},J$=(e,t)=>{let r=[],n=[],i=[],a=m0(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");r0(e.inputs,t,a,r,n,i),e.compute(h0(e.inputs[0],t,a,r,n,i),{inputs:[0]})},e2=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return _e({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:l,nearestMode:d})}}),g0,y0,t2,BS=W(()=>{oe(),le(),Ne(),ue(),g0=(e,t)=>{let[r,n,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!P.areEqual(n.dims,[])&&!P.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!P.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],p=i.dims[0],f=P.sizeFromDimension(r.dims,1)/d,u=s===0?i.dims[1]*2:f/o;if(s>u)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(u/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},y0=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=P.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=s/l,p=e[2].dims[1],f=i===0?p*2:d/n,u=new Array(o,l,d/f,f-p),g=P.computeStrides(u),v=[{type:1,data:a},{type:12,data:u},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[s,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,f,l*f,1]}):[],...Y(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let y=B("input",e[0].dataType,e[0].dims.length),m=B("position_ids",e[1].dataType,e[1].dims.length),_=B("cos_cache",e[2].dataType,e[2].dims.length),b=B("sin_cache",e[3].dataType,e[3].dims.length),E=J("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:u.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${S.declareVariables(y,m,_,b,E)}

        ${S.mainStart(di)}
          let half_rotary_emb_dim = uniforms.${_.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${m.broadcastedIndicesToOffset("bsnh.xy",J("",m.type.tensor,2))};
            let position_id =
                u32(${m.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${y.getByOffset("i")} * ${_.get("position_id","bsnh[3]")} -
                ${y.getByOffset("j")} * ${b.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${y.getByOffset("i")} * ${b.get("position_id","bsnh[3]")} +
                ${y.getByOffset("j")} * ${_.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",y.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:_e({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(P.size(u)/di)},programUniforms:v})}},t2=(e,t)=>{g0(e.inputs,t),e.compute(y0(e.inputs,t))}}),v0,w0,r2,DS=W(()=>{oe(),le(),ue(),v0=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},w0=(e,t,r,n)=>{let i=t.simplified,a=e[0].dims,o=P.size(a),s=a,l=o,d=a.slice(-1)[0],p=n?a.slice(0,-1).concat(1):[],f=!i&&e.length>3,u=e.length>4,g=n&&r>1,v=n&&r>2,w=r>3,S=64,y=Be(d),m=[{type:12,data:l},{type:12,data:y},{type:12,data:d},{type:1,data:t.epsilon}],_=E=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[B("x",e[0].dataType,e[0].dims,y),B("skip",e[1].dataType,e[1].dims,y),B("gamma",e[2].dataType,e[2].dims,y)];f&&C.push(B("beta",e[3].dataType,e[3].dims,y)),u&&C.push(B("bias",e[4].dataType,e[4].dims,y)),C.push(J("output",e[0].dataType,s,y)),g&&C.push(J("mean_output",1,p)),v&&C.push(J("inv_std_output",1,p)),w&&C.push(J("input_skip_bias_sum",e[0].dataType,s,y));let z=je(e[0].dataType),U=je(1,y);return`

      ${E.registerUniforms(I).declareVariables(...C)}
      var<workgroup> sum_shared : array<${U}, ${S}>;
      var<workgroup> sum_squared_shared : array<${U}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${u?"bias[offset1d + i]":z+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Qn(z,y,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Kr("sum",y)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Kr("square_sum",y)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${v?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${z}(mean)`}) *
            ${z}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},b=[{dims:s,dataType:e[0].dataType}];return r>1&&b.push({dims:p,dataType:1}),r>2&&b.push({dims:p,dataType:1}),r>3&&b.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${y};${g};${v};${w}`,inputDependencies:e.map((E,I)=>"type")},getShaderSource:_,getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:m})}},r2=(e,t)=>{v0(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(w0(e.inputs,t,e.outputCount,!1),{outputs:r})}}),$0,Ti,_0,ru,x0,b0,n2,i2,NS=W(()=>{oe(),le(),Ne(),ue(),$0=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Ti=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},_0=(e,t)=>{if(e.length>1){let r=Ti(e,1),n=Ti(e,2),i=Ti(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),_e({starts:r,ends:n,axes:i})}else return t},ru=(e,t,r,n,i)=>{let a=e;return e<0&&(a+=r[n[t]]),i[t]<0?Math.max(0,Math.min(a,r[n[t]]-1)):Math.max(0,Math.min(a,r[n[t]]))},x0=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${X("uniforms.input_shape","i",r.length)};
            let steps_i = ${X("uniforms.steps","i",r.length)};
            let signs_i = ${X("uniforms.signs","i",r.length)};
            let starts_i = ${X("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,b0=(e,t)=>{let r=e[0].dims,n=P.size(r),i=t.axes.length>0?P.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=Ti(e,4);a.forEach(y=>y!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((y,m)=>ru(y,m,r,i,a)),s=t.ends.map((y,m)=>ru(y,m,r,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let y=0;y<r.length;++y)i.includes(y)||(o.splice(y,0,0),s.splice(y,0,r[y]),a.splice(y,0,1));let l=a.map(y=>Math.sign(y));a.forEach((y,m,_)=>{if(y<0){let b=(s[m]-o[m])/y,E=o[m],I=E+b*a[m];o[m]=I,s[m]=E,_[m]=-y}});let d=r.slice(0);i.forEach((y,m)=>{d[y]=Math.ceil((s[y]-o[y])/a[y])});let p={dims:d,dataType:e[0].dataType},f=J("output",e[0].dataType,d.length),u=B("input",e[0].dataType,e[0].dims.length),g=P.size(d),v=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],w=[{type:12,data:g},{type:12,data:o},{type:6,data:l},{type:12,data:a},...Y(e[0].dims,d)],S=y=>`
      ${y.registerUniforms(v).declareVariables(u,f)}
        ${x0(u,f,r)}
        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",u.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:w})}},n2=(e,t)=>{$0(e.inputs,t);let r=_0(e.inputs,t);e.compute(b0(e.inputs,r),{inputs:[0]})},i2=e=>{let t=e.starts,r=e.ends,n=e.axes;return _e({starts:t,ends:r,axes:n})}}),S0,k0,a2,o2,LS=W(()=>{oe(),le(),Ne(),tn(),ue(),S0=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},k0=(e,t)=>{let r=e.inputs[0],n=r.dims,i=P.size(n),a=64,o=n.length,s=P.normalizeAxis(t.axis,o),l=s<n.length-1,d,p=[];l?(p=Array.from({length:o},(C,z)=>z),p[s]=o-1,p[o-1]=s,d=e.compute(St(r,p),{inputs:[r],outputs:[-1]})[0]):d=r;let f=d.dims,u=f[o-1],g=i/u,v=Be(u),w=u/v,S=(C,z)=>z===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:z===2?`max(${C}.x, ${C}.y)`:z===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,y=B("x",d.dataType,d.dims,v),m=J("result",d.dataType,d.dims,v),_=y.type.value,b=je(d.dataType)==="f32"?`var threadMax = ${_}(-3.402823e+38f);`:`var threadMax = ${_}(-65504.0h);`,E=C=>`
      var<workgroup> rowMaxShared : ${_};
      var<workgroup> rowSumShared : ${_};
      var<workgroup> threadShared : array<${_}, ${a}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${_} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${_}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(y,m)}
      ${C.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${a};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${_}(${S("threadShared[0]",v)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${_}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${_}(${Kr("threadShared[0]",v)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${v}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:d.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:w}]}),getShaderSource:E},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(St(I,p),{inputs:[I]})},a2=(e,t)=>{S0(e.inputs),k0(e,t)},o2=e=>_e({axis:e.axis})}),E0,C0,T0,I0,z0,s2,l2,US=W(()=>{oe(),le(),Ne(),ue(),E0=e=>{if(!e||e.length<1)throw new Error("too few inputs")},C0=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),_e({numOutputs:n,axis:t.axis,splitSizes:r})},T0=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${X("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,I0=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},z0=(e,t)=>{let r=e[0].dims,n=P.size(r),i=e[0].dataType,a=P.normalizeAxis(t.axis,r.length),o=new Array(t.numOutputs),s=B("input",i,r.length),l=new Array(t.numOutputs),d=[],p=[],f=0,u=[{type:12,data:n}];for(let v=0;v<t.numOutputs;v++){f+=t.splitSizes[v],l[v]=f;let w=r.slice();w[a]=t.splitSizes[v],p.push(w),o[v]=J(`output${v}`,i,w.length),d.push({dims:p[v],dataType:e[0].dataType})}u.push({type:12,data:l},...Y(r,...p));let g=v=>`
  ${v.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(s,...o)}
  ${T0(l.length)}
  ${I0(o)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${X("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:u})}},s2=(e,t)=>{E0(e.inputs);let r=e.inputs.length===1?t:C0(e.inputs,t);e.compute(z0(e.inputs,r),{inputs:[0]})},l2=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return _e({axis:t,numOutputs:n,splitSizes:r})}}),A0,O0,u2,jS=W(()=>{oe(),le(),ue(),A0=(e,t,r,n,i)=>{let a=J("output_data",i,r.length,4),o=B("a_data",t[1].dataType,t[1].dims.length,4),s=B("b_data",t[2].dataType,t[2].dims.length,4),l=B("c_data",t[0].dataType,t[0].dims.length,4),d,p=(f,u,g)=>`select(${u}, ${f}, ${g})`;if(!n)d=a.setByOffset("global_idx",p(o.getByOffset("global_idx"),s.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(u,g,v="")=>{let w=`a_data[index_a${g}][component_a${g}]`,S=`b_data[index_b${g}][component_b${g}]`,y=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${a.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${o.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_b${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${u}[${g}] = ${v}(${p(w,S,y)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},O0=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,a=!(P.areEqual(t,r)&&P.areEqual(r,n)),o=t,s=P.size(t);if(a){let d=ui.calcShape(ui.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");o=d,s=P.size(o)}let l=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>A0(d,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:l},...Y(n,t,r,o)]})}},u2=e=>{e.compute(O0(e.inputs))}}),d2,WS=W(()=>{aS(),Pc(),oS(),sS(),lS(),uS(),dS(),hS(),yS(),vS(),wS(),$S(),_S(),xS(),bS(),SS(),kS(),ES(),CS(),TS(),IS(),d$(),zS(),O$(),AS(),OS(),RS(),PS(),Rc(),MS(),BS(),DS(),NS(),LS(),US(),P$(),tn(),Mc(),jS(),d2=new Map([["Abs",[uw]],["Acos",[dw]],["Acosh",[cw]],["Add",[Hw]],["ArgMax",[aw,cd]],["ArgMin",[iw,cd]],["Asin",[pw]],["Asinh",[fw]],["Atan",[hw]],["Atanh",[mw]],["Attention",[ow]],["AveragePool",[F$,W$]],["BatchNormalization",[sw]],["BiasAdd",[lw]],["BiasSplitGelu",[Vw]],["Cast",[yw,gw]],["Ceil",[ww]],["Clip",[vw]],["Concat",[t$,r$]],["Conv",[gd,md]],["ConvTranspose",[f$,p$]],["Cos",[$w]],["Cosh",[_w]],["CumSum",[h$,m$]],["DepthToSpace",[g$,y$]],["DequantizeLinear",[Y$,Z$]],["Div",[qw]],["Einsum",[v$,w$]],["Elu",[xw,Ni]],["Equal",[Gw]],["Erf",[bw]],["Exp",[Sw]],["Expand",[$$]],["FastGelu",[_$]],["Floor",[kw]],["FusedConv",[gd,md]],["Gather",[b$,x$]],["GatherElements",[C$,E$]],["GatherBlockQuantized",[S$,k$]],["Gelu",[Ew]],["Gemm",[I$,T$]],["GlobalAveragePool",[H$,V$]],["GlobalMaxPool",[Q$,K$]],["Greater",[Zw]],["GreaterOrEqual",[Jw]],["GroupQueryAttention",[B$,M$]],["HardSigmoid",[Pw,Rw]],["InstanceNormalization",[D$]],["LayerNormalization",[N$]],["LeakyRelu",[Cw,Ni]],["Less",[Xw]],["LessOrEqual",[e$]],["Log",[Ww]],["MatMul",[u$]],["MatMulNBits",[L$,U$]],["MaxPool",[q$,G$]],["Mul",[Kw]],["MultiHeadAttention",[A$,z$]],["Neg",[Iw]],["Not",[Tw]],["Pad",[j$]],["Pow",[Qw]],["QuickGelu",[Fw,Ni]],["Range",[X$]],["Reciprocal",[zw]],["ReduceMin",[J1]],["ReduceMean",[K1]],["ReduceMax",[X1]],["ReduceSum",[tw]],["ReduceProd",[ew]],["ReduceL1",[Q1]],["ReduceL2",[Y1]],["ReduceLogSum",[nw]],["ReduceLogSumExp",[Z1]],["ReduceSumSquare",[rw]],["Relu",[Aw]],["Resize",[J$,e2]],["RotaryEmbedding",[t2]],["Sigmoid",[Ow]],["Sin",[Mw]],["Sinh",[Bw]],["Slice",[n2,i2]],["SkipLayerNormalization",[r2]],["Split",[s2,l2]],["Sqrt",[Dw]],["Softmax",[a2,o2]],["Sub",[Yw]],["Tan",[Nw]],["Tanh",[Lw]],["ThresholdedRelu",[jw,Ni]],["Tile",[R$]],["Transpose",[B1,D1]],["Where",[u2]]])}),c2,FS=W(()=>{Xt(),ur(),ue(),c2=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){lr(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let d of t)s.push({binding:s.length,resource:{buffer:d.buffer}});for(let d of r)s.push({binding:s.length,resource:{buffer:d.buffer}});i&&s.push({binding:s.length,resource:i});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}o.setPipeline(e.computePipeline),o.setBindGroup(0,l),o.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Yt(e.programInfo.name)}dispose(){}build(e,t){lr(e.name);let r=this.backend.device,n=[];r.features.has("shader-f16")&&n.push("enable f16;");let i=M1(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${n.join(`
`)}
${i.additionalImplementations}
${a}`,s=r.createShaderModule({code:o,label:e.name});$e("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let l=r.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return Yt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let a=t*r*n,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),R0,P0,M0,p2,VS=W(()=>{Xt(),oe(),ur(),z1(),nS(),WS(),FS(),R0=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let a=e[n].dims.length;r.push(`${i};${a}`);break}case"dims":{let a=e[n].dims.join(",");r.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},P0=(e,t,r)=>{var i,a;let n=e.name;return(i=e.shaderCache)!=null&&i.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${R0(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,n},M0=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},p2=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r};t.features.has("chromium-experimental-timestamp-query-inside-passes")?r.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("shader-f16")&&r.push("shader-f16"),this.device=await t.requestDevice(n),this.adapterInfo=new M0(t.info||await t.requestAdapterInfo()),this.gpuDataManager=A1(this),this.programManager=new c2(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ic(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;lr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],o=a.kernelId,s=this.kernels.get(o),l=s.kernelType,d=s.kernelName,p=a.programName,f=a.inputTensorViews,u=a.outputTensorViews,g=t[i*2],v=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let w=Number(g-this.queryTimeBase),S=Number(v-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(y=>({dims:y.dims,dataType:fn(y.dataType)})),outputsMetadata:u.map(y=>({dims:y.dims,dataType:fn(y.dataType)})),kernelId:o,kernelType:l,kernelName:d,programName:p,startTime:w,endTime:S});else{let y="";f.forEach((_,b)=>{y+=`input[${b}]: [${_.dims}] | ${fn(_.dataType)}, `});let m="";u.forEach((_,b)=>{m+=`output[${b}]: [${_.dims}] | ${fn(_.dataType)}, `}),console.log(`[profiling] kernel "${o}|${l}|${d}|${p}" ${y}${m}execution time: ${S-w} ns`)}Yo("GPU",`${p}::${g}::${v}`)}e.unmap(),this.pendingQueries.delete(e)}),Yt()}run(e,t,r,n,i,a){lr(e.name);let o=[];for(let m=0;m<t.length;++m){let _=t[m].data;if(_===0)continue;let b=this.gpuDataManager.get(_);if(!b)throw new Error(`no GPU data for input: ${_}`);o.push(b)}let{outputs:s,dispatchGroup:l,programUniforms:d}=e.getRunData(t),p=r.length===0?s.map((m,_)=>_):r;if(p.length!==s.length)throw new Error(`Output size ${p.length} must be equal to ${s.length}.`);let f=[],u=[];for(let m=0;m<s.length;++m){if(!Number.isInteger(p[m])||p[m]<-3||p[m]>=a)throw new Error(`Invalid output index: ${p[m]}`);if(p[m]===-3)continue;let _=p[m]===-1,b=p[m]===-2,E=_||b?i(s[m].dataType,s[m].dims):n(p[m],s[m].dataType,s[m].dims);if(f.push(E),E.data===0)continue;let I=this.gpuDataManager.get(E.data);if(!I)throw new Error(`no GPU data for output: ${E.data}`);if(_&&this.temporaryData.push(I),b){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(I)}u.push(I)}if(o.length!==t.length||u.length!==f.length){if(u.length===0)return Yt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let m=0,_=[];d.forEach(C=>{let z=typeof C.data=="number"?[C.data]:C.data;if(z.length===0)return;let U=C.type===10?2:4,D,Z;C.type===10?(Z=z.length>4?16:z.length>2?8:z.length*U,D=z.length>4?16:U*z.length):(Z=z.length<=2?z.length*U:16,D=16),m=Math.ceil(m/Z)*Z,_.push(m);let ie=C.type===10?8:4;m+=z.length>4?Math.ceil(z.length/ie)*D:z.length*U});let b=16;m=Math.ceil(m/b)*b;let E=new ArrayBuffer(m);d.forEach((C,z)=>{let U=_[z],D=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,U,D.length).set(D);else if(C.type===12)new Uint32Array(E,U,D.length).set(D);else if(C.type===10)new Uint16Array(E,U,D.length).set(D);else if(C.type===1)new Float32Array(E,U,D.length).set(D);else throw new Error(`Unsupported uniform type: ${fn(C.type)}`)});let I=this.gpuDataManager.create(m,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,E,0,m),this.gpuDataManager.release(I.id),g={offset:0,size:m,buffer:I.buffer}}let v=this.programManager.normalizeDispatchGroupSize(l),w=v[1]===1&&v[2]===1,S=P0(e,t,w),y=this.programManager.getArtifact(S);if(y||(y=this.programManager.build(e,v),this.programManager.setArtifact(S,y),$e("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&y.uniformVariablesInfo){if(d.length!==y.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${y.uniformVariablesInfo.length}, got ${d.length} in program "${y.programInfo.name}".`);for(let m=0;m<d.length;m++){let _=d[m],b=_.type,E=typeof _.data=="number"?1:_.data.length,[I,C]=y.uniformVariablesInfo[m];if(b!==I||E!==C)throw new Error(`Uniform variable ${m} mismatch: expect type ${I} with size ${C}, got type ${b} with size ${E} in program "${y.programInfo.name}".`)}}if($e("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${v[0]}x${v[1]}x${v[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let m={kernelId:this.currentKernelId,programName:y.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(m),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(m)}return this.programManager.run(y,o,u,v,g),Yt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=d2.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,a=n.kernelName,o=n.kernelEntry,s=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),$e("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(r,n,a);return i.set(t,[o,r]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await ld(this,e,t);return zc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){$e("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){$e("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){$e("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),a=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),B0,nu,iu,D0,f2,HS=W(()=>{ur(),B0=1,nu=()=>B0++,iu=class{constructor(e,t){this.mlContext=e,this.tensorEntry=t,this.tensorCache=t?[t]:[]}get tensor(){var e;return(e=this.tensorEntry)==null?void 0:e[0]}get context(){if(!this.mlContext)throw new Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw new Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(let[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,t){for(let[r,n,i]of this.tensorCache)if(t===r){if(this.context!==e)throw new Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[r,n,i],!0}return!1}async ensureTensor(e,t,r){var a;if(this.tensorEntry){let[o,s,l]=this.tensorEntry;if(s===e&&l.every((d,p)=>d===t[p]))return o}for(let[o,s,l]of this.tensorCache)if(s===e&&l.every((d,p)=>d===t[p])){if(r&&this.tensorEntry){$e("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${t}}`);let d=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(o,d)}return this.tensorEntry=[o,s,l],o}$e("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let n=MLTensorUsage.READ|MLTensorUsage.WRITE,i=await this.context.createTensor({dataType:e,shape:t,dimensions:t,usage:n});return this.tensorEntry=[i,e,t],this.tensorCache.push(this.tensorEntry),this.activeUpload&&((a=this.mlContext)==null||a.writeTensor(i,this.activeUpload),this.activeUpload=void 0),i}upload(e){var t;if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}(t=this.mlContext)==null||t.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.tensorEntry)throw new Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},D0=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){let e=nu();return this.tensorsById.set(e,new iu),e}releaseTensorId(e){let t=this.tensorsById.get(e);if(t){t.destroy(),this.tensorsById.delete(e);for(let[r,n]of this.tensorIdsByContext)if(n.has(e)){n.delete(e),n.size===0&&this.tensorIdsByContext.delete(r);break}}}async ensureTensor(e,t,r,n){var a;$e("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${n}}`);let i=this.tensorsById.get(e);if(!i)throw new Error("Tensor not found.");return i.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),(a=this.tensorIdsByContext.get(this.backend.currentContext))==null||a.add(e),i.ensureTensor(t,r,n)}upload(e,t){this.tensorsById.get(e).upload(t)}async download(e,t){return $e("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`),this.tensorsById.get(e).download(t)}releaseTensorsForContext(e){let t=this.tensorIdsByContext.get(e);if(t){for(let r of t)this.tensorsById.get(r).destroy(),this.tensorsById.delete(r);this.tensorIdsByContext.delete(e)}}registerTensor(e,t,r,n){for(let[o,s]of this.tensorsById)if(s.trySelectTensor(e,t))return o;let i=nu();this.tensorsById.set(i,new iu(e,[t,r,n]));let a=this.tensorIdsByContext.get(e);return a||(a=new Set,this.tensorIdsByContext.set(e,a)),a.add(i),i}},f2=(...e)=>new D0(...e)}),au,h2,qS=W(()=>{oe(),En(),z1(),HS(),ur(),au=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),h2=class{constructor(e){this.tensorManager=f2(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,Ic(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);r.delete(e),r.size===0&&(this.sessionIdsByMLContext.delete(t),this.tensorManager.releaseTensorsForContext(t))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){$e("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n){let i=au.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,i,r,n)}uploadTensor(e,t){if(!Fe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");$e("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return zc(r,t)}}registerMLTensor(e,t,r){let n=au.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.registerTensor(this.currentContext,e,n,r);return $e("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${n}, dimensions: ${r}} -> {tensorId: ${i}}`),i}flush(){}}}),m2={};wa(m2,{init:()=>g2});var oo,N0,g2,GS=W(()=>{oe(),VS(),ur(),le(),qS(),oo=class y2{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=P.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=P.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=P.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=P.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(P.size(t)!==P.size(this.dims))throw new Error("Invalid new shape");return new y2(this.module,this.dataType,this.data,t)}},N0=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.HEAPU32,i=r>>>2;this.opKernelContext=n[i++];let a=n[i++];this.outputCount=n[i++],this.customDataOffset=n[i++],this.customDataSize=n[i++];let o=[];for(let s=0;s<a;s++){let l=n[i++],d=n[i++],p=n[i++],f=[];for(let u=0;u<p;u++)f.push(n[i++]);o.push(new oo(e,l,d,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){var o;let r=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,n=(t==null?void 0:t.outputs)??[],i=(s,l,d)=>new oo(this.module,l,this.output(s,d),d),a=(s,l)=>{let d=Kn(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new oo(this.module,s,p,l)};return this.backend.run(e,r,n,i,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.stackAlloc((1+t.length)*4),i=n>>2;this.module.HEAPU32[i++]=t.length;for(let a=0;a<t.length;a++)this.module.HEAPU32[i++]=t[a];return this.module._JsepOutput(this.opKernelContext,e,n)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},g2=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=new p2;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(o),o=>a.free(o),(o,s,l,d=!1)=>{if(d)$e("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${o}, dst=${s}, size=${l}`),a.memcpy(o,s);else{$e("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${o}, gpuDataId=${s}, size=${l}`);let p=t.HEAPU8.subarray(o>>>0,(o>>>0)+l);a.upload(s,p)}},async(o,s,l)=>{$e("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${s}, size=${l}`),await a.download(o,()=>t.HEAPU8.subarray(s>>>0,(s>>>0)+l))},(o,s,l)=>a.createKernel(o,s,l,t.UTF8ToString(t._JsepGetNodeName(s))),o=>a.releaseKernel(o),(o,s,l,d)=>{$e("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${s}`);let p=new N0(t,a,s);return a.computeKernel(o,p,d)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let a=new h2(r);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,l,d)=>a.ensureTensor(o,s,l,d),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s)])}}}),L0,Uc,jc,Ir,U0,ns,Wc,Fc,ou,Vc,Hc,qc,v2=W(()=>{tS(),rS(),oe(),En(),Sc(),I1(),L0=(e,t)=>{Fe()._OrtInit(e,t)!==0&&Ae("Can't initialize onnxruntime.")},Uc=async e=>{L0(e.wasm.numThreads,Xo(e.logLevel))},jc=async(e,t)=>{{let r=(GS(),Qo(m2)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let n=e.webgpu.adapter;if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Fe(),e,n)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Fe(),e)}}},Ir=new Map,U0=e=>{let t=Fe(),r=t.stackSave();try{let n=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,n,n+4)!==0&&Ae("Can't get session input/output count."),[t.HEAP32[n/4],t.HEAP32[n/4+1]]}finally{t.stackRestore(r)}},ns=e=>{let t=Fe(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Wc=async(e,t)=>{var f,u;let r,n,i=Fe();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=ns(e);let a=0,o=0,s=0,l=[],d=[],p=[];try{if([o,l]=T1(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let b=[];for(let E of t.externalData){let I=typeof E=="string"?E:E.path;b.push(Tc(typeof E=="string"?E:E.data).then(C=>{i.mountExternalData(I,C)}))}await Promise.all(b)}for(let b of(t==null?void 0:t.executionProviders)??[])if((typeof b=="string"?b:b.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,i.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof b!="string"){let E=b,I=E==null?void 0:E.context,C=E==null?void 0:E.gpuDevice,z=E==null?void 0:E.deviceType,U=E==null?void 0:E.numThreads,D=E==null?void 0:E.powerPreference;I?i.currentContext=I:C?i.currentContext=await navigator.ml.createContext(C):i.currentContext=await navigator.ml.createContext({deviceType:z,numThreads:U,powerPreference:D})}else i.currentContext=await navigator.ml.createContext();break}a=await i._OrtCreateSession(r,n,o),a===0&&Ae("Can't create a session."),i.currentContext&&(i.jsepRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[g,v]=U0(a),w=!!(t!=null&&t.enableGraphCapture),S=[],y=[],m=[];for(let b=0;b<g;b++){let E=i._OrtGetInputName(a,b);E===0&&Ae("Can't get an input name."),d.push(E),S.push(i.UTF8ToString(E))}for(let b=0;b<v;b++){let E=i._OrtGetOutputName(a,b);E===0&&Ae("Can't get an output name."),p.push(E);let I=i.UTF8ToString(E);y.push(I);{if(w&&(t==null?void 0:t.preferredOutputLocation)===void 0){m.push("gpu-buffer");continue}let C=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[I])??"cpu";if(C!=="cpu"&&C!=="cpu-pinned"&&C!=="gpu-buffer"&&C!=="ml-tensor")throw new Error(`Not supported preferred output location: ${C}.`);if(w&&C!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${C}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);m.push(C)}}let _=null;return m.some(b=>b==="gpu-buffer"||b==="ml-tensor")&&(s=i._OrtCreateBinding(a),s===0&&Ae("Can't create IO binding."),_={handle:s,outputPreferredLocations:m,outputPreferredLocationsEncoded:m.map(b=>sd(b))}),Ir.set(a,[a,d,p,_,w,!1]),[a,S,y]}catch(g){throw d.forEach(v=>i._OrtFree(v)),p.forEach(v=>i._OrtFree(v)),s!==0&&i._OrtReleaseBinding(s),a!==0&&i._OrtReleaseSession(a),g}finally{i._free(r),o!==0&&i._OrtReleaseSessionOptions(o),l.forEach(g=>i._free(g)),(u=i.unmountExternalData)==null||u.call(i)}},Fc=e=>{var l;let t=Fe(),r=Ir.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,a,o,s]=r;o&&(s&&t._OrtClearBoundOutputs(o.handle),t._OrtReleaseBinding(o.handle)),(l=t.jsepOnReleaseSession)==null||l.call(t,e),i.forEach(d=>t._OrtFree(d)),a.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(n),Ir.delete(e)},ou=(e,t,r,n,i,a=!1)=>{if(!e){t.push(0);return}let o=Fe(),s=e[0],l=e[1],d=e[3],p,f;if(s==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let v=e[2].gpuBuffer;f=Kn(Bi(s),l);let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');p=w(n,i,v,f)}else if(d==="ml-tensor"){let v=e[2].mlTensor;f=Kn(Bi(s),l);let w=o.jsepRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');p=w(v,Bi(s),l)}else{let v=e[2];if(Array.isArray(v)){f=4*v.length,p=o._malloc(f),r.push(p);let w=p/4;for(let S=0;S<v.length;S++){if(typeof v[S]!="string")throw new TypeError(`tensor data at index ${S} is not a string`);o.HEAPU32[w++]=Ze(v[S],r)}}else f=v.byteLength,p=o._malloc(f),r.push(p),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,f),p)}let u=o.stackSave(),g=o.stackAlloc(4*l.length);try{let v=g/4;l.forEach(S=>o.HEAP32[v++]=S);let w=o._OrtCreateTensor(Bi(s),p,f,g,l.length,sd(d));w===0&&Ae(`Can't create tensor for input/output. session=${n}, index=${i}.`),t.push(w)}finally{o.stackRestore(u)}},Vc=async(e,t,r,n,i,a)=>{var D,Z;let o=Fe(),s=Ir.get(e);if(!s)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=s[0],d=s[1],p=s[2],f=s[3],u=s[4],g=s[5],v=t.length,w=n.length,S=0,y=[],m=[],_=[],b=[],E=o.stackSave(),I=o.stackAlloc(v*4),C=o.stackAlloc(v*4),z=o.stackAlloc(w*4),U=o.stackAlloc(w*4);try{(D=o.jsepOnRunStart)==null||D.call(o,l),[S,y]=C1(a);for(let R=0;R<v;R++)ou(r[R],m,b,e,t[R],u);for(let R=0;R<w;R++)ou(i[R],_,b,e,v+n[R],u);let ie=I/4,K=C/4,ce=z/4,G=U/4;for(let R=0;R<v;R++)o.HEAPU32[ie++]=m[R],o.HEAPU32[K++]=d[t[R]];for(let R=0;R<w;R++)o.HEAPU32[ce++]=_[R],o.HEAPU32[G++]=p[n[R]];if(f&&!g){let{handle:R,outputPreferredLocations:j,outputPreferredLocationsEncoded:H}=f;if(d.length!==v)throw new Error(`input count from feeds (${v}) is expected to be always equal to model's input count (${d.length}).`);for(let A=0;A<v;A++){let N=t[A];await o._OrtBindInput(R,d[N],m[A])!==0&&Ae(`Can't bind input[${A}] for session=${e}.`)}for(let A=0;A<w;A++){let N=n[A];(Z=i[A])!=null&&Z[3]?o._OrtBindOutput(R,p[N],_[A],0)!==0&&Ae(`Can't bind pre-allocated output[${A}] for session=${e}.`):o._OrtBindOutput(R,p[N],0,H[N])!==0&&Ae(`Can't bind output[${A}] to ${j[A]} for session=${e}.`)}Ir.set(e,[l,d,p,f,u,!0])}let re;f?re=await o._OrtRunWithBinding(l,f.handle,w,z,S):re=await o._OrtRun(l,C,I,v,U,w,z,S),re!==0&&Ae("failed to call OrtRun().");let se=[];for(let R=0;R<w;R++){let j=o.HEAPU32[z/4+R];if(j===_[R]){se.push(i[R]);continue}let H=o.stackSave(),A=o.stackAlloc(4*4),N=!1,ee,de=0;try{o._OrtGetTensorData(j,A,A+4,A+8,A+12)!==0&&Ae(`Can't access output tensor data on index ${R}.`);let Se=A/4,we=o.HEAPU32[Se++];de=o.HEAPU32[Se++];let wt=o.HEAPU32[Se++],$a=o.HEAPU32[Se++],st=[];for(let Le=0;Le<$a;Le++)st.push(o.HEAPU32[wt/4+Le]);o._OrtFree(wt);let We=st.reduce((Le,Qe)=>Le*Qe,1);ee=fn(we);let nn=f==null?void 0:f.outputPreferredLocations[n[R]];if(ee==="string"){if(nn==="gpu-buffer"||nn==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Le=[],Qe=de/4;for(let Tt=0;Tt<We;Tt++){let xr=o.HEAPU32[Qe++],_a=Tt===We-1?void 0:o.HEAPU32[Qe]-xr;Le.push(o.UTF8ToString(xr,_a))}se.push([ee,st,Le,"cpu"])}else if(nn==="gpu-buffer"&&We>0){let Le=o.jsepGetBuffer;if(!Le)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Qe=Le(de),Tt=Kn(we,We);if(Tt===void 0||!Ec(ee))throw new Error(`Unsupported data type: ${ee}`);N=!0,se.push([ee,st,{gpuBuffer:Qe,download:o.jsepCreateDownloader(Qe,Tt,ee),dispose:()=>{o._OrtReleaseTensor(j)}},"gpu-buffer"])}else if(nn==="ml-tensor"&&We>0){let Le=o.jsepEnsureTensor;if(!Le)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Kn(we,We)===void 0||!Cc(ee))throw new Error(`Unsupported data type: ${ee}`);let Qe=await Le(de,we,st,!1);N=!0,se.push([ee,st,{mlTensor:Qe,download:o.jsepCreateMLTensorDownloader(de,ee),dispose:()=>{o.jsepReleaseTensorId(de),o._OrtReleaseTensor(j)}},"ml-tensor"])}else{let Le=kc(ee),Qe=new Le(We);new Uint8Array(Qe.buffer,Qe.byteOffset,Qe.byteLength).set(o.HEAPU8.subarray(de,de+Qe.byteLength)),se.push([ee,st,Qe,"cpu"])}}finally{o.stackRestore(H),ee==="string"&&de&&o._free(de),N||o._OrtReleaseTensor(j)}}return f&&!u&&(o._OrtClearBoundOutputs(f.handle),Ir.set(e,[l,d,p,f,u,!1])),se}finally{o.stackRestore(E),m.forEach(ie=>o._OrtReleaseTensor(ie)),_.forEach(ie=>o._OrtReleaseTensor(ie)),b.forEach(ie=>o._free(ie)),S!==0&&o._OrtReleaseRunOptions(S),y.forEach(ie=>o._free(ie))}},Hc=e=>{let t=Fe(),r=Ir.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&Ae("Can't get an profile file name."),t._OrtFree(i)},qc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),zr,ft,On,Ii,zi,so,su,lo,ln,un,j0,w2,$2,_2,x2,b2,S2,k2,E2=W(()=>{Xt(),v2(),En(),_s(),zr=()=>!!be.wasm.proxy&&typeof document<"u",On=!1,Ii=!1,zi=!1,lo=new Map,ln=(e,t)=>{let r=lo.get(e);r?r.push(t):lo.set(e,[t])},un=()=>{if(On||!Ii||zi||!ft)throw new Error("worker not ready")},j0=e=>{switch(e.data.type){case"init-wasm":On=!1,e.data.err?(zi=!0,su[1](e.data.err)):(Ii=!0,su[0]()),so&&(URL.revokeObjectURL(so),so=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=lo.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},w2=async()=>{if(!Ii){if(On)throw new Error("multiple calls to 'initWasm()' detected.");if(zi)throw new Error("previous call to 'initWasm()' failed.");if(On=!0,zr())return new Promise((e,t)=>{ft==null||ft.terminate(),k1().then(([r,n])=>{try{ft=n,ft.onerror=a=>t(a),ft.onmessage=j0,su=[e,t];let i={type:"init-wasm",in:be};ft.postMessage(i),so=r}catch(i){t(i)}},t)});try{await bc(be.wasm),await Uc(be),Ii=!0}catch(e){throw zi=!0,e}finally{On=!1}}},$2=async e=>{if(zr())return un(),new Promise((t,r)=>{ln("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:be}};ft.postMessage(n)});await jc(be,e)},_2=async e=>zr()?(un(),new Promise((t,r)=>{ln("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};ft.postMessage(n,[e.buffer])})):ns(e),x2=async(e,t)=>{if(zr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return un(),new Promise((r,n)=>{ln("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),ft.postMessage(i,a)})}else return Wc(e,t)},b2=async e=>{if(zr())return un(),new Promise((t,r)=>{ln("release",[t,r]);let n={type:"release",in:e};ft.postMessage(n)});Fc(e)},S2=async(e,t,r,n,i,a)=>{if(zr()){if(r.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return un(),new Promise((o,s)=>{ln("run",[o,s]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:a}};ft.postMessage(d,qc(l))})}else return Vc(e,t,r,n,i,a)},k2=async e=>{if(zr())return un(),new Promise((t,r)=>{ln("end-profiling",[t,r]);let n={type:"end-profiling",in:e};ft.postMessage(n)});Hc(e)}}),lu,W0,C2,KS=W(()=>{Xt(),E2(),oe(),xc(),I1(),lu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},W0=e=>{switch(e[3]){case"cpu":return new at(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ec(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return at.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!Cc(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return at.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},C2=class{async fetchModelAndCopyToWasmMemory(e){return _2(await Tc(e))}async loadModel(e,t){lr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await x2(r,t),Yt()}async dispose(){return b2(this.sessionId)}async run(e,t,r){lr();let n=[],i=[];Object.entries(e).forEach(f=>{let u=f[0],g=f[1],v=this.inputNames.indexOf(u);if(v===-1)throw new Error(`invalid input '${u}'`);n.push(g),i.push(v)});let a=[],o=[];Object.entries(t).forEach(f=>{let u=f[0],g=f[1],v=this.outputNames.indexOf(u);if(v===-1)throw new Error(`invalid output '${u}'`);a.push(g),o.push(v)});let s=n.map((f,u)=>lu(f,()=>`input "${this.inputNames[i[u]]}"`)),l=a.map((f,u)=>f?lu(f,()=>`output "${this.outputNames[o[u]]}"`):null),d=await S2(this.sessionId,i,s,o,l,r),p={};for(let f=0;f<d.length;f++)p[this.outputNames[o[f]]]=a[f]??W0(d[f]);return Yt(),p}startProfiling(){}endProfiling(){k2(this.sessionId)}}}),T2={};wa(T2,{OnnxruntimeWebAssemblyBackend:()=>$d,initializeFlags:()=>wd,wasmBackend:()=>I2});var wd,$d,I2,QS=W(()=>{Xt(),E2(),KS(),_s(),wd=()=>{if((typeof be.wasm.initTimeout!="number"||be.wasm.initTimeout<0)&&(be.wasm.initTimeout=0),be.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof be.wasm.proxy!="boolean"&&(be.wasm.proxy=!1),typeof be.wasm.trace!="boolean"&&(be.wasm.trace=!1),typeof be.wasm.numThreads!="number"||!Number.isInteger(be.wasm.numThreads)||be.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)be.wasm.numThreads=1;else{let e=typeof navigator>"u"?M3("node:os").cpus().length:navigator.hardwareConcurrency;be.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},$d=class{async init(e){wd(),await w2(),await $2(e)}async createInferenceSessionHandler(e,t){let r=new C2;return await r.loadModel(e,t),Promise.resolve(r)}},I2=new $d});Xt();Xt();Xt();var YS="1.20.1";{let e=(QS(),Qo(T2)).wasmBackend;Gn("webgpu",e,5),Gn("webnn",e,5),Gn("cpu",e,10),Gn("wasm",e,10)}Object.defineProperty(be.versions,"web",{value:YS,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let F0=!1;function ZS(){F0||(be.wasm.wasmPaths="/colorize/ort/",be.wasm.numThreads=1,F0=!0)}function XS(){return typeof navigator<"u"&&"gpu"in navigator?"webgpu":"wasm"}async function JS(e){ZS();const r=XS()==="webgpu"?["webgpu","wasm"]:["wasm"];let n;for(const i of r)try{return{session:await _c.create(e,{executionProviders:[i],graphOptimizationLevel:"all"}),provider:i}}catch(a){n=a}throw n}const z2=.95047,A2=1,O2=1.08883;function uu(e){return e/=255,e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function du(e){const t=e<=.0031308?12.92*e:1.055*Math.pow(e,.4166666666666667)-.055;return Math.max(0,Math.min(255,Math.round(t*255)))}function cu(e){const t=.20689655172413793;return e>t*t*t?Math.cbrt(e):e/(3*t*t)+4/29}function pu(e){const t=.20689655172413793;return e>t?e*e*e:3*t*t*(e-4/29)}function ek(e,t,r){const n=uu(e),i=uu(t),a=uu(r),o=(.4124*n+.3576*i+.1805*a)/z2,s=(.2126*n+.7152*i+.0722*a)/A2,l=(.0193*n+.1192*i+.9505*a)/O2,d=cu(o),p=cu(s),f=cu(l);return[116*p-16,500*(d-p),200*(p-f)]}function tk(e,t,r){const n=(e+16)/116,i=n+t/500,a=n-r/200,o=z2*pu(i),s=A2*pu(n),l=O2*pu(a),d=3.2406*o-1.5372*s-.4986*l,p=-.9689*o+1.8758*s+.0415*l,f=.0557*o-.204*s+1.057*l;return[du(d),du(p),du(f)]}function rk(e){const{width:t,height:r,data:n}=e,i=t*r,a=new Float32Array(i),o=new Float32Array(i),s=new Float32Array(i);for(let l=0,d=0;l<i;l++,d+=4){const[p,f,u]=ek(n[d],n[d+1],n[d+2]);a[l]=p,o[l]=f,s[l]=u}return{width:t,height:r,L:a,a:o,b:s}}function R2(e,t,r,n,i){const a=new Uint8ClampedArray(e*t*4);for(let o=0,s=0;o<e*t;o++,s+=4){const[l,d,p]=tk(r[o],n[o],i[o]);a[s]=l,a[s+1]=d,a[s+2]=p,a[s+3]=255}return new ImageData(a,e,t)}function _d(e,t,r,n,i){const a=new Float32Array(n*i),o=t/n,s=r/i;for(let l=0;l<i;l++){const d=(l+.5)*s-.5,p=Math.max(0,Math.floor(d)),f=Math.min(r-1,p+1),u=d-p;for(let g=0;g<n;g++){const v=(g+.5)*o-.5,w=Math.max(0,Math.floor(v)),S=Math.min(t-1,w+1),y=v-w,m=e[p*t+w],_=e[p*t+S],b=e[f*t+w],E=e[f*t+S],I=m+(_-m)*y,C=b+(E-b)*y;a[l*n+g]=I+(C-I)*u}}return a}function nk(e,t){return _d(e.L,e.width,e.height,t,t)}function ik(e){return Math.pow(.15,Math.max(0,Math.min(1,e)))}const Pn=.5;let fu=null;function ak(){return fu||(fu=fetch(Gt.binsURL).then(e=>e.json()).then(e=>Float32Array.from(e.ab.flat()))),fu}function ok(e,t,r,n,i,a){const o=r*n,s=new Float32Array(o),l=new Float32Array(o),d=1/a,p=new Float32Array(t);for(let f=0;f<o;f++){let u=-1/0;for(let y=0;y<t;y++){const m=e[y*o+f]*d;p[y]=m,m>u&&(u=m)}let g=0;for(let y=0;y<t;y++){const m=Math.exp(p[y]-u);p[y]=m,g+=m}const v=1/g;let w=0,S=0;for(let y=0;y<t;y++){const m=p[y]*v;w+=m*i[y*2],S+=m*i[y*2+1]}s[f]=w,l[f]=S}return{a:s,b:l}}class Gc{constructor(t,r,n){this.session=t,this.provider=r,this.centers=n}static async create(t){const[{session:r,provider:n},i]=await Promise.all([JS(t),ak()]);return new Gc(r,n,i)}async colorize(t,r=Pn){const n=Gt.inputSize,i=rk(t),a=nk(i,n),o=new at("float32",a,[1,1,n,n]),l=(await this.session.run({[Gt.inputName]:o}))[Gt.outputName],[,d,p,f]=l.dims,u={data:l.data,bins:d,h:p,w:f},g=this.deriveAb(i,u,r);return{imageData:R2(i.width,i.height,i.L,g.a,g.b),lab:i,logits:u,abFull:g}}deriveAb(t,r,n){const i=ik(n),{a,b:o}=ok(r.data,r.bins,r.h,r.w,this.centers,i),s=_d(a,r.w,r.h,t.width,t.height),l=_d(o,r.w,r.h,t.width,t.height);return{a:s,b:l}}}function sk(e,t,{saturation:r=1,temperature:n=0,strength:i=1}={}){const a=e.width*e.height,o=new Float32Array(a),s=new Float32Array(a),l=r*i;for(let d=0;d<a;d++)o[d]=t.a[d]*l+n*.3,s[d]=t.b[d]*l+n;return R2(e.width,e.height,e.L,o,s)}function lk({before:e,after:t,alt:r=""}){const[n,i]=me.useState(50),[a,o]=me.useState(0),s=me.useRef(null),l=me.useRef(!1);me.useEffect(()=>{const g=s.current;if(!g||typeof ResizeObserver>"u")return;const v=new ResizeObserver(w=>{o(w[0].contentRect.width)});return v.observe(g),()=>v.disconnect()},[]);const d=me.useCallback(g=>{const v=s.current;if(!v)return;const w=v.getBoundingClientRect(),S=(g-w.left)/w.width*100;i(Math.max(0,Math.min(100,S)))},[]),p=me.useCallback(g=>{l.current=!0,d(g.touches?g.touches[0].clientX:g.clientX)},[d]),f=me.useCallback(g=>{l.current&&d(g.touches?g.touches[0].clientX:g.clientX)},[d]),u=me.useCallback(()=>{l.current=!1},[]);return ae.jsxs("div",{className:"ba",ref:s,onMouseDown:p,onMouseMove:f,onMouseUp:u,onMouseLeave:u,onTouchStart:p,onTouchMove:f,onTouchEnd:u,role:"slider","aria-label":"Before/after comparison","aria-valuenow":Math.round(n),"aria-valuemin":0,"aria-valuemax":100,children:[ae.jsx("img",{className:"ba__img",src:t,alt:`${r} colorized`,draggable:!1}),ae.jsx("div",{className:"ba__after",style:{width:`${n}%`},children:ae.jsx("img",{className:"ba__img ba__img--after",src:e,alt:`${r} original`,draggable:!1,style:a?{width:`${a}px`}:void 0})}),ae.jsx("div",{className:"ba__divider",style:{left:`${n}%`},children:ae.jsx("span",{className:"ba__handle"})}),ae.jsx("span",{className:"ba__label ba__label--left",children:"Before"}),ae.jsx("span",{className:"ba__label ba__label--right",children:"After"})]})}const uk={unknown:"Checking…","not-downloaded":"Model not downloaded","cached-idle":"Model ready (cached, works offline)",downloading:"Downloading model…",verifying:"Verifying…",ready:"Model ready (cached, works offline)","offline-unavailable":"Offline — model not downloaded yet",error:"Model failed to load"},dk=new Set(["ready","cached-idle"]),Ar={saturation:1,temperature:0,strength:1};function ck({status:e,progress:t}){return ae.jsxs("div",{className:`status status--${e}`,role:"status","aria-live":"polite",children:[ae.jsx("span",{className:"status__dot"}),ae.jsxs("span",{className:"status__text",children:[uk[e]??e,e==="downloading"&&t!=null?` ${Math.round(t*100)}%`:""]})]})}const pk=2048;async function fk(e){const t=await createImageBitmap(e),r=Math.min(1,pk/Math.max(t.width,t.height)),n=Math.round(t.width*r),i=Math.round(t.height*r),a=document.createElement("canvas");a.width=n,a.height=i;const o=a.getContext("2d");return o.drawImage(t,0,0,n,i),t.close(),o.getImageData(0,0,n,i)}function hu(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").putImageData(e,0,0),t.toDataURL("image/png")}function uo({label:e,value:t,min:r,max:n,step:i,onChange:a,format:o}){return ae.jsxs("label",{className:"ctrl",children:[ae.jsxs("span",{className:"ctrl__label",children:[e,ae.jsx("span",{className:"ctrl__value",children:o?o(t):t})]}),ae.jsx("input",{type:"range",min:r,max:n,step:i,value:t,onChange:s=>a(parseFloat(s.target.value))})]})}function hk(){const{status:e,progress:t,load:r,retry:n,getBytes:i}=A3(),a=me.useRef(null),[o,s]=me.useState(null),[l,d]=me.useState(null),[p,f]=me.useState(!1),[u,g]=me.useState(null),[v,w]=me.useState(Ar),[S,y]=me.useState(Pn),m=me.useRef(null),_=me.useRef(null),b=dk.has(e),E=e==="error"||e==="offline-unavailable",I=!!l,C=me.useCallback(async()=>{if(a.current)return a.current;let G=i();if(G||(G=await r()),!G)return null;const re=await Gc.create(G);return a.current=re,re},[i,r]),z=me.useCallback(async G=>{var R;const re=(R=G.target.files)==null?void 0:R[0];if(!re)return;g(null),d(null),_.current=null,w(Ar),y(Pn);const se=await fk(re);m.current=se,s(hu(se))},[]),U=me.useCallback(async()=>{if(m.current){f(!0),g(null);try{const G=await C();if(!G){f(!1);return}const{imageData:re,lab:se,logits:R}=await G.colorize(m.current,S);_.current={lab:se,logits:R},w(Ar),d(hu(re))}catch(G){g((G==null?void 0:G.message)||"Colorization failed")}finally{f(!1)}}},[C,S]),D=me.useCallback((G,re)=>{const se=_.current,R=a.current;if(!se||!R)return;const j=R.deriveAb(se.lab,se.logits,G),H=sk(se.lab,j,re);d(hu(H))},[]),Z=me.useCallback(G=>{w(G),D(S,G)},[D,S]),ie=me.useCallback(G=>{y(G),D(G,v)},[D,v]),K=me.useMemo(()=>v.saturation===Ar.saturation&&v.temperature===Ar.temperature&&v.strength===Ar.strength&&S===Pn,[v,S]),ce=me.useCallback(()=>{w(Ar),y(Pn),D(Pn,Ar)},[D]);return ae.jsxs("div",{className:"app",children:[ae.jsx("header",{className:"app__header",children:ae.jsxs("div",{className:"app__statusrow",children:[ae.jsx(ck,{status:e,progress:t}),e==="not-downloaded"&&ae.jsx("button",{className:"btn",onClick:r,children:"Download model (~123 MB, one time)"}),E&&ae.jsx("button",{className:"btn btn--retry",onClick:n,children:"Retry"})]})}),ae.jsxs("main",{className:"app__main",children:[ae.jsxs("div",{className:"toolbar",children:[ae.jsxs("label",{className:"btn",children:["Choose image",ae.jsx("input",{type:"file",accept:"image/*",onChange:z,hidden:!0})]}),ae.jsx("button",{className:"btn",onClick:U,disabled:!o||p,children:p?"Colorizing…":"Colorize"}),l&&ae.jsx("a",{className:"btn btn--retry",href:l,download:"colorized.png",children:"Save result"})]}),u&&ae.jsx("p",{className:"error",children:u}),o?ae.jsxs("div",{className:"workspace",children:[I?ae.jsx(lk,{before:o,after:l,alt:"photo"}):ae.jsxs("div",{className:"compare",children:[ae.jsxs("figure",{children:[ae.jsx("img",{src:o,alt:"original"}),ae.jsx("figcaption",{children:"Original"})]}),ae.jsxs("figure",{children:[ae.jsx("div",{className:"compare__empty",children:b?"Press Colorize":"Download the model, then Colorize"}),ae.jsx("figcaption",{children:"Colorized"})]})]}),I&&ae.jsxs("div",{className:"controls",children:[ae.jsx(uo,{label:"Vividness",value:S,min:0,max:1,step:.01,onChange:ie,format:G=>`${Math.round(G*100)}%`}),ae.jsx(uo,{label:"Saturation",value:v.saturation,min:0,max:2,step:.01,onChange:G=>Z({...v,saturation:G}),format:G=>`${Math.round(G*100)}%`}),ae.jsx(uo,{label:"Temperature",value:v.temperature,min:-40,max:40,step:1,onChange:G=>Z({...v,temperature:G}),format:G=>G>0?`+${G}`:`${G}`}),ae.jsx(uo,{label:"Strength",value:v.strength,min:0,max:1,step:.01,onChange:G=>Z({...v,strength:G}),format:G=>`${Math.round(G*100)}%`}),ae.jsx("button",{className:"btn btn--retry",onClick:ce,disabled:K,children:"Reset"})]})]}):ae.jsxs("div",{className:"placeholder",children:[ae.jsx("p",{children:"Choose a black-and-white photo to begin."}),ae.jsx("p",{className:"placeholder__hint",children:"Everything runs in your browser. Works fully offline after the model is downloaded once."})]})]}),ae.jsxs("footer",{className:"app__footer",children:[ae.jsx("span",{children:"100% offline after first load"}),ae.jsx("span",{children:"·"}),ae.jsx("span",{children:"Model: ECCV16 (Zhang et al.) · BSD-3"})]})]})}function mk(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/colorize/sw.js",{scope:"/colorize/"}).catch(()=>{})})}r1(document.getElementById("root")).render(ae.jsx(fx.StrictMode,{children:ae.jsx(hk,{})}));mk();
