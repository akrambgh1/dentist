(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ET(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ih={exports:{}},Va={},Sh={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function wT(){if(kg)return Ce;kg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=I&&M[I]||M["@@iterator"],typeof M=="function"?M:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,z={};function L(M,Q,pe){this.props=M,this.context=Q,this.refs=z,this.updater=pe||N}L.prototype.isReactComponent={},L.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},L.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function H(){}H.prototype=L.prototype;function B(M,Q,pe){this.props=M,this.context=Q,this.refs=z,this.updater=pe||N}var K=B.prototype=new H;K.constructor=B,V(K,L.prototype),K.isPureReactComponent=!0;var ee=Array.isArray,he=Object.prototype.hasOwnProperty,fe={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(M,Q,pe){var Re,Ae={},be=null,Ue=null;if(Q!=null)for(Re in Q.ref!==void 0&&(Ue=Q.ref),Q.key!==void 0&&(be=""+Q.key),Q)he.call(Q,Re)&&!k.hasOwnProperty(Re)&&(Ae[Re]=Q[Re]);var ze=arguments.length-2;if(ze===1)Ae.children=pe;else if(1<ze){for(var He=Array(ze),wt=0;wt<ze;wt++)He[wt]=arguments[wt+2];Ae.children=He}if(M&&M.defaultProps)for(Re in ze=M.defaultProps,ze)Ae[Re]===void 0&&(Ae[Re]=ze[Re]);return{$$typeof:n,type:M,key:be,ref:Ue,props:Ae,_owner:fe.current}}function R(M,Q){return{$$typeof:n,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function P(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function D(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(pe){return Q[pe]})}var O=/\/+/g;function C(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?D(""+M.key):Q.toString(36)}function Je(M,Q,pe,Re,Ae){var be=typeof M;(be==="undefined"||be==="boolean")&&(M=null);var Ue=!1;if(M===null)Ue=!0;else switch(be){case"string":case"number":Ue=!0;break;case"object":switch(M.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=M,Ae=Ae(Ue),M=Re===""?"."+C(Ue,0):Re,ee(Ae)?(pe="",M!=null&&(pe=M.replace(O,"$&/")+"/"),Je(Ae,Q,pe,"",function(wt){return wt})):Ae!=null&&(P(Ae)&&(Ae=R(Ae,pe+(!Ae.key||Ue&&Ue.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+M)),Q.push(Ae)),1;if(Ue=0,Re=Re===""?".":Re+":",ee(M))for(var ze=0;ze<M.length;ze++){be=M[ze];var He=Re+C(be,ze);Ue+=Je(be,Q,pe,He,Ae)}else if(He=S(M),typeof He=="function")for(M=He.call(M),ze=0;!(be=M.next()).done;)be=be.value,He=Re+C(be,ze++),Ue+=Je(be,Q,pe,He,Ae);else if(be==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ue}function dt(M,Q,pe){if(M==null)return M;var Re=[],Ae=0;return Je(M,Re,"","",function(be){return Q.call(pe,be,Ae++)}),Re}function ht(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(pe){(M._status===0||M._status===-1)&&(M._status=1,M._result=pe)},function(pe){(M._status===0||M._status===-1)&&(M._status=2,M._result=pe)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var Me={current:null},ne={transition:null},me={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:ne,ReactCurrentOwner:fe};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:dt,forEach:function(M,Q,pe){dt(M,function(){Q.apply(this,arguments)},pe)},count:function(M){var Q=0;return dt(M,function(){Q++}),Q},toArray:function(M){return dt(M,function(Q){return Q})||[]},only:function(M){if(!P(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ce.Component=L,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=B,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=oe,Ce.cloneElement=function(M,Q,pe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Re=V({},M.props),Ae=M.key,be=M.ref,Ue=M._owner;if(Q!=null){if(Q.ref!==void 0&&(be=Q.ref,Ue=fe.current),Q.key!==void 0&&(Ae=""+Q.key),M.type&&M.type.defaultProps)var ze=M.type.defaultProps;for(He in Q)he.call(Q,He)&&!k.hasOwnProperty(He)&&(Re[He]=Q[He]===void 0&&ze!==void 0?ze[He]:Q[He])}var He=arguments.length-2;if(He===1)Re.children=pe;else if(1<He){ze=Array(He);for(var wt=0;wt<He;wt++)ze[wt]=arguments[wt+2];Re.children=ze}return{$$typeof:n,type:M.type,key:Ae,ref:be,props:Re,_owner:Ue}},Ce.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},Ce.createElement=T,Ce.createFactory=function(M){var Q=T.bind(null,M);return Q.type=M,Q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(M){return{$$typeof:h,render:M}},Ce.isValidElement=P,Ce.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:ht}},Ce.memo=function(M,Q){return{$$typeof:y,type:M,compare:Q===void 0?null:Q}},Ce.startTransition=function(M){var Q=ne.transition;ne.transition={};try{M()}finally{ne.transition=Q}},Ce.unstable_act=oe,Ce.useCallback=function(M,Q){return Me.current.useCallback(M,Q)},Ce.useContext=function(M){return Me.current.useContext(M)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(M){return Me.current.useDeferredValue(M)},Ce.useEffect=function(M,Q){return Me.current.useEffect(M,Q)},Ce.useId=function(){return Me.current.useId()},Ce.useImperativeHandle=function(M,Q,pe){return Me.current.useImperativeHandle(M,Q,pe)},Ce.useInsertionEffect=function(M,Q){return Me.current.useInsertionEffect(M,Q)},Ce.useLayoutEffect=function(M,Q){return Me.current.useLayoutEffect(M,Q)},Ce.useMemo=function(M,Q){return Me.current.useMemo(M,Q)},Ce.useReducer=function(M,Q,pe){return Me.current.useReducer(M,Q,pe)},Ce.useRef=function(M){return Me.current.useRef(M)},Ce.useState=function(M){return Me.current.useState(M)},Ce.useSyncExternalStore=function(M,Q,pe){return Me.current.useSyncExternalStore(M,Q,pe)},Ce.useTransition=function(){return Me.current.useTransition()},Ce.version="18.3.1",Ce}var Pg;function wf(){return Pg||(Pg=1,Sh.exports=wT()),Sh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function TT(){if(xg)return Va;xg=1;var n=wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,y){var E,I={},S=null,N=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(N=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(I[E]=p[E]);if(h&&h.defaultProps)for(E in p=h.defaultProps,p)I[E]===void 0&&(I[E]=p[E]);return{$$typeof:e,type:h,key:S,ref:N,props:I,_owner:o.current}}return Va.Fragment=t,Va.jsx=d,Va.jsxs=d,Va}var Ng;function IT(){return Ng||(Ng=1,Ih.exports=TT()),Ih.exports}var se=IT(),W=wf();const Qe=ET(W);var zu={},Rh={exports:{}},en={},Ah={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function ST(){return Dg||(Dg=1,function(n){function e(ne,me){var oe=ne.length;ne.push(me);e:for(;0<oe;){var M=oe-1>>>1,Q=ne[M];if(0<o(Q,me))ne[M]=me,ne[oe]=Q,oe=M;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var me=ne[0],oe=ne.pop();if(oe!==me){ne[0]=oe;e:for(var M=0,Q=ne.length,pe=Q>>>1;M<pe;){var Re=2*(M+1)-1,Ae=ne[Re],be=Re+1,Ue=ne[be];if(0>o(Ae,oe))be<Q&&0>o(Ue,Ae)?(ne[M]=Ue,ne[be]=oe,M=be):(ne[M]=Ae,ne[Re]=oe,M=Re);else if(be<Q&&0>o(Ue,oe))ne[M]=Ue,ne[be]=oe,M=be;else break e}}return me}function o(ne,me){var oe=ne.sortIndex-me.sortIndex;return oe!==0?oe:ne.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var p=[],y=[],E=1,I=null,S=3,N=!1,V=!1,z=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(ne){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ne)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ee(ne){if(z=!1,K(ne),!V)if(t(p)!==null)V=!0,ht(he);else{var me=t(y);me!==null&&Me(ee,me.startTime-ne)}}function he(ne,me){V=!1,z&&(z=!1,H(T),T=-1),N=!0;var oe=S;try{for(K(me),I=t(p);I!==null&&(!(I.expirationTime>me)||ne&&!D());){var M=I.callback;if(typeof M=="function"){I.callback=null,S=I.priorityLevel;var Q=M(I.expirationTime<=me);me=n.unstable_now(),typeof Q=="function"?I.callback=Q:I===t(p)&&i(p),K(me)}else i(p);I=t(p)}if(I!==null)var pe=!0;else{var Re=t(y);Re!==null&&Me(ee,Re.startTime-me),pe=!1}return pe}finally{I=null,S=oe,N=!1}}var fe=!1,k=null,T=-1,R=5,P=-1;function D(){return!(n.unstable_now()-P<R)}function O(){if(k!==null){var ne=n.unstable_now();P=ne;var me=!0;try{me=k(!0,ne)}finally{me?C():(fe=!1,k=null)}}else fe=!1}var C;if(typeof B=="function")C=function(){B(O)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,dt=Je.port2;Je.port1.onmessage=O,C=function(){dt.postMessage(null)}}else C=function(){L(O,0)};function ht(ne){k=ne,fe||(fe=!0,C())}function Me(ne,me){T=L(function(){ne(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){V||N||(V=!0,ht(he))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ne){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var oe=S;S=me;try{return ne()}finally{S=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,me){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var oe=S;S=ne;try{return me()}finally{S=oe}},n.unstable_scheduleCallback=function(ne,me,oe){var M=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?M+oe:M):oe=M,ne){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,ne={id:E++,callback:me,priorityLevel:ne,startTime:oe,expirationTime:Q,sortIndex:-1},oe>M?(ne.sortIndex=oe,e(y,ne),t(p)===null&&ne===t(y)&&(z?(H(T),T=-1):z=!0,Me(ee,oe-M))):(ne.sortIndex=Q,e(p,ne),V||N||(V=!0,ht(he))),ne},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ne){var me=S;return function(){var oe=S;S=me;try{return ne.apply(this,arguments)}finally{S=oe}}}}(Ch)),Ch}var bg;function RT(){return bg||(bg=1,Ah.exports=ST()),Ah.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function AT(){if(Lg)return en;Lg=1;var n=wf(),e=RT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){d(r,s),d(r+"Capture",s)}function d(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function S(r){return p.call(I,r)?!0:p.call(E,r)?!1:y.test(r)?I[r]=!0:(E[r]=!0,!1)}function N(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function V(r,s,a,c){if(s===null||typeof s>"u"||N(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,c,f,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function B(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,B);L[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,B);L[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,B);L[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function K(r,s,a,c){var f=L.hasOwnProperty(s)?L[s]:null;(f!==null?f.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(V(s,a,f,c)&&(a=null),c||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ee=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),fe=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),ne=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,M;function Q(r){if(M===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+r}var pe=!1;function Re(r,s){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var c=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){c=$}r.call(s.prototype)}else{try{throw Error()}catch($){c=$}r()}}catch($){if($&&c&&typeof $.stack=="string"){for(var f=$.stack.split(`
`),g=c.stack.split(`
`),v=f.length-1,A=g.length-1;1<=v&&0<=A&&f[v]!==g[A];)A--;for(;1<=v&&0<=A;v--,A--)if(f[v]!==g[A]){if(v!==1||A!==1)do if(v--,A--,0>A||f[v]!==g[A]){var x=`
`+f[v].replace(" at new "," at ");return r.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",r.displayName)),x}while(1<=v&&0<=A);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ae(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function be(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case fe:return"Portal";case R:return"Profiler";case T:return"StrictMode";case C:return"Suspense";case Je:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case O:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case dt:return s=r.displayName||null,s!==null?s:be(r.type)||"Memo";case ht:s=r._payload,r=r._init;try{return be(r(s))}catch{}}return null}function Ue(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ze(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function He(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=He(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function fr(r){r._valueTracker||(r._valueTracker=wt(r))}function Rs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=He(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Hr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function bi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function As(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=ze(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Bo(r,s){s=s.checked,s!=null&&K(r,"checked",s,!1)}function $o(r,s){Bo(r,s);var a=ze(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Cs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Cs(r,s.type,ze(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Rl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Cs(r,s,a){(s!=="number"||Hr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var pr=Array.isArray;function mr(r,s,a,c){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+ze(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Ho(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ks(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(pr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:ze(a)}}function Ps(r,s){var a=ze(s.value),c=ze(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Wo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ft(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ft(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var gr,qo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=gr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Wr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oi=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(r){Oi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Li[s]=Li[r]})});function Ko(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Li.hasOwnProperty(r)&&Li[r]?(""+s).trim():s+"px"}function Go(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Ko(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var Qo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yo(r,s){if(s){if(Qo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Xo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function xs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ns=null,fn=null,Kn=null;function Ds(r){if(r=wa(r)){if(typeof Ns!="function")throw Error(t(280));var s=r.stateNode;s&&(s=tu(s),Ns(r.stateNode,r.type,s))}}function Gn(r){fn?Kn?Kn.push(r):Kn=[r]:fn=r}function Jo(){if(fn){var r=fn,s=Kn;if(Kn=fn=null,Ds(r),s)for(r=0;r<s.length;r++)Ds(s[r])}}function Mi(r,s){return r(s)}function Zo(){}var yr=!1;function ea(r,s,a){if(yr)return r(s,a);yr=!0;try{return Mi(r,s,a)}finally{yr=!1,(fn!==null||Kn!==null)&&(Zo(),Jo())}}function st(r,s){var a=r.stateNode;if(a===null)return null;var c=tu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var bs=!1;if(h)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){bs=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{bs=!1}function Fi(r,s,a,c,f,g,v,A,x){var $=Array.prototype.slice.call(arguments,3);try{s.apply(a,$)}catch(X){this.onError(X)}}var Ui=!1,Ls=null,kn=!1,ta=null,Xc={onError:function(r){Ui=!0,Ls=r}};function Os(r,s,a,c,f,g,v,A,x){Ui=!1,Ls=null,Fi.apply(Xc,arguments)}function Al(r,s,a,c,f,g,v,A,x){if(Os.apply(this,arguments),Ui){if(Ui){var $=Ls;Ui=!1,Ls=null}else throw Error(t(198));kn||(kn=!0,ta=$)}}function Pn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function zi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function xn(r){if(Pn(r)!==r)throw Error(t(188))}function Cl(r){var s=r.alternate;if(!s){if(s=Pn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return xn(f),r;if(g===c)return xn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var v=!1,A=f.child;A;){if(A===a){v=!0,a=f,c=g;break}if(A===c){v=!0,c=f,a=g;break}A=A.sibling}if(!v){for(A=g.child;A;){if(A===a){v=!0,a=g,c=f;break}if(A===c){v=!0,c=g,a=f;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function na(r){return r=Cl(r),r!==null?Vs(r):null}function Vs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Vs(r);if(s!==null)return s;r=r.sibling}return null}var Ms=e.unstable_scheduleCallback,ra=e.unstable_cancelCallback,kl=e.unstable_shouldYield,Jc=e.unstable_requestPaint,We=e.unstable_now,Pl=e.unstable_getCurrentPriorityLevel,ji=e.unstable_ImmediatePriority,qr=e.unstable_UserBlockingPriority,pn=e.unstable_NormalPriority,ia=e.unstable_LowPriority,xl=e.unstable_IdlePriority,Bi=null,rn=null;function Nl(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Bi,r,void 0,(r.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:bl,sa=Math.log,Dl=Math.LN2;function bl(r){return r>>>=0,r===0?32:31-(sa(r)/Dl|0)|0}var Fs=64,Us=4194304;function Kr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function $i(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var A=v&~f;A!==0?c=Kr(A):(g&=v,g!==0&&(c=Kr(g)))}else v=a&~f,v!==0?c=Kr(v):g!==0&&(c=Kr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&f)&&(f=c&-c,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Bt(s),f=1<<a,c|=r[a],s&=~f;return c}function Zc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Bt(g),A=1<<v,x=f[v];x===-1?(!(A&a)||A&c)&&(f[v]=Zc(A,s)):x<=s&&(r.expiredLanes|=A),g&=~A}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Hi(){var r=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),r}function Gr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Qr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Bt(s),r[s]=a}function $e(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Bt(a),g=1<<f;s[f]=0,c[f]=-1,r[f]=-1,a&=~g}}function Yr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Bt(a),f=1<<c;f&s|r[c]&s&&(r[c]|=s),a&=~f}}var Ne=0;function Xr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Ll,zs,Ol,Vl,Ml,oa=!1,Qn=[],Ct=null,Nn=null,Dn=null,Jr=new Map,mn=new Map,Yn=[],ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fl(r,s){switch(r){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Jr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(s.pointerId)}}function Kt(r,s,a,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=wa(s),s!==null&&zs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function td(r,s,a,c,f){switch(s){case"focusin":return Ct=Kt(Ct,r,s,a,c,f),!0;case"dragenter":return Nn=Kt(Nn,r,s,a,c,f),!0;case"mouseover":return Dn=Kt(Dn,r,s,a,c,f),!0;case"pointerover":var g=f.pointerId;return Jr.set(g,Kt(Jr.get(g)||null,r,s,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,mn.set(g,Kt(mn.get(g)||null,r,s,a,c,f)),!0}return!1}function Ul(r){var s=Qi(r.target);if(s!==null){var a=Pn(s);if(a!==null){if(s=a.tag,s===13){if(s=zi(a),s!==null){r.blockedOn=s,Ml(r.priority,function(){Ol(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function vr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=js(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Vi=c,a.target.dispatchEvent(c),Vi=null}else return s=wa(a),s!==null&&zs(s),r.blockedOn=a,!1;s.shift()}return!0}function Wi(r,s,a){vr(r)&&a.delete(s)}function zl(){oa=!1,Ct!==null&&vr(Ct)&&(Ct=null),Nn!==null&&vr(Nn)&&(Nn=null),Dn!==null&&vr(Dn)&&(Dn=null),Jr.forEach(Wi),mn.forEach(Wi)}function bn(r,s){r.blockedOn===s&&(r.blockedOn=null,oa||(oa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zl)))}function Ln(r){function s(f){return bn(f,r)}if(0<Qn.length){bn(Qn[0],r);for(var a=1;a<Qn.length;a++){var c=Qn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Ct!==null&&bn(Ct,r),Nn!==null&&bn(Nn,r),Dn!==null&&bn(Dn,r),Jr.forEach(s),mn.forEach(s),a=0;a<Yn.length;a++)c=Yn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)Ul(a),a.blockedOn===null&&Yn.shift()}var Er=ee.ReactCurrentBatchConfig,Zr=!0;function Ye(r,s,a,c){var f=Ne,g=Er.transition;Er.transition=null;try{Ne=1,aa(r,s,a,c)}finally{Ne=f,Er.transition=g}}function nd(r,s,a,c){var f=Ne,g=Er.transition;Er.transition=null;try{Ne=4,aa(r,s,a,c)}finally{Ne=f,Er.transition=g}}function aa(r,s,a,c){if(Zr){var f=js(r,s,a,c);if(f===null)fd(r,s,c,qi,a),Fl(r,c);else if(td(f,r,s,a,c))c.stopPropagation();else if(Fl(r,c),s&4&&-1<ed.indexOf(r)){for(;f!==null;){var g=wa(f);if(g!==null&&Ll(g),g=js(r,s,a,c),g===null&&fd(r,s,c,qi,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else fd(r,s,c,null,a)}}var qi=null;function js(r,s,a,c){if(qi=null,r=xs(c),r=Qi(r),r!==null)if(s=Pn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=zi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return qi=r,null}function la(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pl()){case ji:return 1;case qr:return 4;case pn:case ia:return 16;case xl:return 536870912;default:return 16}default:return 16}}var on=null,Bs=null,Gt=null;function ua(){if(Gt)return Gt;var r,s=Bs,a=s.length,c,f="value"in on?on.value:on.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===f[g-c];c++);return Gt=f.slice(r,1<c?1-c:void 0)}function $s(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Xn(){return!0}function ca(){return!1}function kt(r){function s(a,c,f,g,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Xn:ca,this.isPropagationStopped=ca,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=kt(On),Jn=oe({},On,{view:0,detail:0}),rd=kt(Jn),Ws,wr,ei,Ki=oe({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ei&&(ei&&r.type==="mousemove"?(Ws=r.screenX-ei.screenX,wr=r.screenY-ei.screenY):wr=Ws=0,ei=r),Ws)},movementY:function(r){return"movementY"in r?r.movementY:wr}}),qs=kt(Ki),da=oe({},Ki,{dataTransfer:0}),jl=kt(da),Ks=oe({},Jn,{relatedTarget:0}),Gs=kt(Ks),Bl=oe({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=kt(Bl),$l=oe({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Hl=kt($l),Wl=oe({},On,{data:0}),ha=kt(Wl),Qs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ql={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ql[r])?!!s[r]:!1}function Zn(){return Kl}var u=oe({},Jn,{key:function(r){if(r.key){var s=Qs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=$s(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$t[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(r){return r.type==="keypress"?$s(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?$s(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=kt(u),_=oe({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=kt(_),F=oe({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),q=kt(F),re=oe({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=kt(re),mt=oe({},Ki,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=kt(mt),Tt=[9,13,27,32],lt=h&&"CompositionEvent"in window,gn=null;h&&"documentMode"in document&&(gn=document.documentMode);var an=h&&"TextEvent"in window&&!gn,Gi=h&&(!lt||gn&&8<gn&&11>=gn),Ys=" ",Tp=!1;function Ip(r,s){switch(r){case"keyup":return Tt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Xs=!1;function _w(r,s){switch(r){case"compositionend":return Sp(s);case"keypress":return s.which!==32?null:(Tp=!0,Ys);case"textInput":return r=s.data,r===Ys&&Tp?null:r;default:return null}}function vw(r,s){if(Xs)return r==="compositionend"||!lt&&Ip(r,s)?(r=ua(),Gt=Bs=on=null,Xs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Gi&&s.locale!=="ko"?null:s.data;default:return null}}var Ew={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Ew[r.type]:s==="textarea"}function Ap(r,s,a,c){Gn(c),s=Jl(s,"onChange"),0<s.length&&(a=new Hs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var fa=null,pa=null;function ww(r){Hp(r,0)}function Gl(r){var s=no(r);if(Rs(s))return r}function Tw(r,s){if(r==="change")return s}var Cp=!1;if(h){var id;if(h){var sd="oninput"in document;if(!sd){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),sd=typeof kp.oninput=="function"}id=sd}else id=!1;Cp=id&&(!document.documentMode||9<document.documentMode)}function Pp(){fa&&(fa.detachEvent("onpropertychange",xp),pa=fa=null)}function xp(r){if(r.propertyName==="value"&&Gl(pa)){var s=[];Ap(s,pa,r,xs(r)),ea(ww,s)}}function Iw(r,s,a){r==="focusin"?(Pp(),fa=s,pa=a,fa.attachEvent("onpropertychange",xp)):r==="focusout"&&Pp()}function Sw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Gl(pa)}function Rw(r,s){if(r==="click")return Gl(s)}function Aw(r,s){if(r==="input"||r==="change")return Gl(s)}function Cw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Vn=typeof Object.is=="function"?Object.is:Cw;function ma(r,s){if(Vn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(s,f)||!Vn(r[f],s[f]))return!1}return!0}function Np(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Dp(r,s){var a=Np(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function bp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?bp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Lp(){for(var r=window,s=Hr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Hr(r.document)}return s}function od(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function kw(r){var s=Lp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&bp(a.ownerDocument.documentElement,a)){if(c!==null&&od(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=Dp(a,g);var v=Dp(a,c);f&&v&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Pw=h&&"documentMode"in document&&11>=document.documentMode,Js=null,ad=null,ga=null,ld=!1;function Op(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ld||Js==null||Js!==Hr(c)||(c=Js,"selectionStart"in c&&od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ga&&ma(ga,c)||(ga=c,c=Jl(ad,"onSelect"),0<c.length&&(s=new Hs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Js)))}function Ql(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Zs={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},ud={},Vp={};h&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Yl(r){if(ud[r])return ud[r];if(!Zs[r])return r;var s=Zs[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Vp)return ud[r]=s[a];return r}var Mp=Yl("animationend"),Fp=Yl("animationiteration"),Up=Yl("animationstart"),zp=Yl("transitionend"),jp=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(r,s){jp.set(r,s),l(s,[r])}for(var cd=0;cd<Bp.length;cd++){var dd=Bp[cd],xw=dd.toLowerCase(),Nw=dd[0].toUpperCase()+dd.slice(1);ti(xw,"on"+Nw)}ti(Mp,"onAnimationEnd"),ti(Fp,"onAnimationIteration"),ti(Up,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(zp,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function $p(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Al(c,s,void 0,r),r.currentTarget=null}function Hp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var A=c[v],x=A.instance,$=A.currentTarget;if(A=A.listener,x!==g&&f.isPropagationStopped())break e;$p(f,A,$),g=x}else for(v=0;v<c.length;v++){if(A=c[v],x=A.instance,$=A.currentTarget,A=A.listener,x!==g&&f.isPropagationStopped())break e;$p(f,A,$),g=x}}}if(kn)throw r=ta,kn=!1,ta=null,r}function Ke(r,s){var a=s[vd];a===void 0&&(a=s[vd]=new Set);var c=r+"__bubble";a.has(c)||(Wp(s,r,2,!1),a.add(c))}function hd(r,s,a){var c=0;s&&(c|=4),Wp(a,r,c,s)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function _a(r){if(!r[Xl]){r[Xl]=!0,i.forEach(function(a){a!=="selectionchange"&&(Dw.has(a)||hd(a,!1,r),hd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Xl]||(s[Xl]=!0,hd("selectionchange",!1,s))}}function Wp(r,s,a,c){switch(la(s)){case 1:var f=Ye;break;case 4:f=nd;break;default:f=aa}a=f.bind(null,s,a,r),f=void 0,!bs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function fd(r,s,a,c,f){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var x=v.tag;if((x===3||x===4)&&(x=v.stateNode.containerInfo,x===f||x.nodeType===8&&x.parentNode===f))return;v=v.return}for(;A!==null;){if(v=Qi(A),v===null)return;if(x=v.tag,x===5||x===6){c=g=v;continue e}A=A.parentNode}}c=c.return}ea(function(){var $=g,X=xs(a),J=[];e:{var Y=jp.get(r);if(Y!==void 0){var ie=Hs,ue=r;switch(r){case"keypress":if($s(a)===0)break e;case"keydown":case"keyup":ie=m;break;case"focusin":ue="focus",ie=Gs;break;case"focusout":ue="blur",ie=Gs;break;case"beforeblur":case"afterblur":ie=Gs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=jl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=q;break;case Mp:case Fp:case Up:ie=Tr;break;case zp:ie=Be;break;case"scroll":ie=rd;break;case"wheel":ie=Le;break;case"copy":case"cut":case"paste":ie=Hl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=w}var ce=(s&4)!==0,ot=!ce&&r==="scroll",U=ce?Y!==null?Y+"Capture":null:Y;ce=[];for(var b=$,j;b!==null;){j=b;var te=j.stateNode;if(j.tag===5&&te!==null&&(j=te,U!==null&&(te=st(b,U),te!=null&&ce.push(va(b,te,j)))),ot)break;b=b.return}0<ce.length&&(Y=new ie(Y,ue,null,a,X),J.push({event:Y,listeners:ce}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",Y&&a!==Vi&&(ue=a.relatedTarget||a.fromElement)&&(Qi(ue)||ue[Ir]))break e;if((ie||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=$,ue=ue?Qi(ue):null,ue!==null&&(ot=Pn(ue),ue!==ot||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=$),ie!==ue)){if(ce=qs,te="onMouseLeave",U="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(ce=w,te="onPointerLeave",U="onPointerEnter",b="pointer"),ot=ie==null?Y:no(ie),j=ue==null?Y:no(ue),Y=new ce(te,b+"leave",ie,a,X),Y.target=ot,Y.relatedTarget=j,te=null,Qi(X)===$&&(ce=new ce(U,b+"enter",ue,a,X),ce.target=j,ce.relatedTarget=ot,te=ce),ot=te,ie&&ue)t:{for(ce=ie,U=ue,b=0,j=ce;j;j=eo(j))b++;for(j=0,te=U;te;te=eo(te))j++;for(;0<b-j;)ce=eo(ce),b--;for(;0<j-b;)U=eo(U),j--;for(;b--;){if(ce===U||U!==null&&ce===U.alternate)break t;ce=eo(ce),U=eo(U)}ce=null}else ce=null;ie!==null&&qp(J,Y,ie,ce,!1),ue!==null&&ot!==null&&qp(J,ot,ue,ce,!0)}}e:{if(Y=$?no($):window,ie=Y.nodeName&&Y.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Y.type==="file")var de=Tw;else if(Rp(Y))if(Cp)de=Aw;else{de=Sw;var ge=Iw}else(ie=Y.nodeName)&&ie.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(de=Rw);if(de&&(de=de(r,$))){Ap(J,de,a,X);break e}ge&&ge(r,Y,$),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&Cs(Y,"number",Y.value)}switch(ge=$?no($):window,r){case"focusin":(Rp(ge)||ge.contentEditable==="true")&&(Js=ge,ad=$,ga=null);break;case"focusout":ga=ad=Js=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,Op(J,a,X);break;case"selectionchange":if(Pw)break;case"keydown":case"keyup":Op(J,a,X)}var ye;if(lt)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Xs?Ip(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Gi&&a.locale!=="ko"&&(Xs||we!=="onCompositionStart"?we==="onCompositionEnd"&&Xs&&(ye=ua()):(on=X,Bs="value"in on?on.value:on.textContent,Xs=!0)),ge=Jl($,we),0<ge.length&&(we=new ha(we,r,null,a,X),J.push({event:we,listeners:ge}),ye?we.data=ye:(ye=Sp(a),ye!==null&&(we.data=ye)))),(ye=an?_w(r,a):vw(r,a))&&($=Jl($,"onBeforeInput"),0<$.length&&(X=new ha("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:$}),X.data=ye))}Hp(J,s)})}function va(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Jl(r,s){for(var a=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=st(r,a),g!=null&&c.unshift(va(r,g,f)),g=st(r,s),g!=null&&c.push(va(r,g,f))),r=r.return}return c}function eo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function qp(r,s,a,c,f){for(var g=s._reactName,v=[];a!==null&&a!==c;){var A=a,x=A.alternate,$=A.stateNode;if(x!==null&&x===c)break;A.tag===5&&$!==null&&(A=$,f?(x=st(a,g),x!=null&&v.unshift(va(a,x,A))):f||(x=st(a,g),x!=null&&v.push(va(a,x,A)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var bw=/\r\n?/g,Lw=/\u0000|\uFFFD/g;function Kp(r){return(typeof r=="string"?r:""+r).replace(bw,`
`).replace(Lw,"")}function Zl(r,s,a){if(s=Kp(s),Kp(r)!==s&&a)throw Error(t(425))}function eu(){}var pd=null,md=null;function gd(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var yd=typeof setTimeout=="function"?setTimeout:void 0,Ow=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,Vw=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(r){return Gp.resolve(null).then(r).catch(Mw)}:yd;function Mw(r){setTimeout(function(){throw r})}function _d(r,s){var a=s,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),Ln(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Ln(s)}function ni(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Qp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var to=Math.random().toString(36).slice(2),er="__reactFiber$"+to,Ea="__reactProps$"+to,Ir="__reactContainer$"+to,vd="__reactEvents$"+to,Fw="__reactListeners$"+to,Uw="__reactHandles$"+to;function Qi(r){var s=r[er];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ir]||a[er]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Qp(r);r!==null;){if(a=r[er])return a;r=Qp(r)}return s}r=a,a=r.parentNode}return null}function wa(r){return r=r[er]||r[Ir],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function no(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function tu(r){return r[Ea]||null}var Ed=[],ro=-1;function ri(r){return{current:r}}function Ge(r){0>ro||(r.current=Ed[ro],Ed[ro]=null,ro--)}function qe(r,s){ro++,Ed[ro]=r.current,r.current=s}var ii={},Lt=ri(ii),Qt=ri(!1),Yi=ii;function io(r,s){var a=r.type.contextTypes;if(!a)return ii;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Yt(r){return r=r.childContextTypes,r!=null}function nu(){Ge(Qt),Ge(Lt)}function Yp(r,s,a){if(Lt.current!==ii)throw Error(t(168));qe(Lt,s),qe(Qt,a)}function Xp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in s))throw Error(t(108,Ue(r)||"Unknown",f));return oe({},a,c)}function ru(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ii,Yi=Lt.current,qe(Lt,r),qe(Qt,Qt.current),!0}function Jp(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Xp(r,s,Yi),c.__reactInternalMemoizedMergedChildContext=r,Ge(Qt),Ge(Lt),qe(Lt,r)):Ge(Qt),qe(Qt,a)}var Sr=null,iu=!1,wd=!1;function Zp(r){Sr===null?Sr=[r]:Sr.push(r)}function zw(r){iu=!0,Zp(r)}function si(){if(!wd&&Sr!==null){wd=!0;var r=0,s=Ne;try{var a=Sr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Sr=null,iu=!1}catch(f){throw Sr!==null&&(Sr=Sr.slice(r+1)),Ms(ji,si),f}finally{Ne=s,wd=!1}}return null}var so=[],oo=0,su=null,ou=0,yn=[],_n=0,Xi=null,Rr=1,Ar="";function Ji(r,s){so[oo++]=ou,so[oo++]=su,su=r,ou=s}function em(r,s,a){yn[_n++]=Rr,yn[_n++]=Ar,yn[_n++]=Xi,Xi=r;var c=Rr;r=Ar;var f=32-Bt(c)-1;c&=~(1<<f),a+=1;var g=32-Bt(s)+f;if(30<g){var v=f-f%5;g=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Rr=1<<32-Bt(s)+f|a<<f|c,Ar=g+r}else Rr=1<<g|a<<f|c,Ar=r}function Td(r){r.return!==null&&(Ji(r,1),em(r,1,0))}function Id(r){for(;r===su;)su=so[--oo],so[oo]=null,ou=so[--oo],so[oo]=null;for(;r===Xi;)Xi=yn[--_n],yn[_n]=null,Ar=yn[--_n],yn[_n]=null,Rr=yn[--_n],yn[_n]=null}var ln=null,un=null,Xe=!1,Mn=null;function tm(r,s){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function nm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ni(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Xi!==null?{id:Rr,overflow:Ar}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Sd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Rd(r){if(Xe){var s=un;if(s){var a=s;if(!nm(r,s)){if(Sd(r))throw Error(t(418));s=ni(a.nextSibling);var c=ln;s&&nm(r,s)?tm(c,a):(r.flags=r.flags&-4097|2,Xe=!1,ln=r)}}else{if(Sd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,ln=r}}}function rm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function au(r){if(r!==ln)return!1;if(!Xe)return rm(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!gd(r.type,r.memoizedProps)),s&&(s=un)){if(Sd(r))throw im(),Error(t(418));for(;s;)tm(r,s),s=ni(s.nextSibling)}if(rm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ni(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ni(r.stateNode.nextSibling):null;return!0}function im(){for(var r=un;r;)r=ni(r.nextSibling)}function ao(){un=ln=null,Xe=!1}function Ad(r){Mn===null?Mn=[r]:Mn.push(r)}var jw=ee.ReactCurrentBatchConfig;function Ta(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var A=f.refs;v===null?delete A[g]:A[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function lu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function sm(r){var s=r._init;return s(r._payload)}function om(r){function s(U,b){if(r){var j=U.deletions;j===null?(U.deletions=[b],U.flags|=16):j.push(b)}}function a(U,b){if(!r)return null;for(;b!==null;)s(U,b),b=b.sibling;return null}function c(U,b){for(U=new Map;b!==null;)b.key!==null?U.set(b.key,b):U.set(b.index,b),b=b.sibling;return U}function f(U,b){return U=fi(U,b),U.index=0,U.sibling=null,U}function g(U,b,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<b?(U.flags|=2,b):j):(U.flags|=2,b)):(U.flags|=1048576,b)}function v(U){return r&&U.alternate===null&&(U.flags|=2),U}function A(U,b,j,te){return b===null||b.tag!==6?(b=yh(j,U.mode,te),b.return=U,b):(b=f(b,j),b.return=U,b)}function x(U,b,j,te){var de=j.type;return de===k?X(U,b,j.props.children,te,j.key):b!==null&&(b.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===ht&&sm(de)===b.type)?(te=f(b,j.props),te.ref=Ta(U,b,j),te.return=U,te):(te=Du(j.type,j.key,j.props,null,U.mode,te),te.ref=Ta(U,b,j),te.return=U,te)}function $(U,b,j,te){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=_h(j,U.mode,te),b.return=U,b):(b=f(b,j.children||[]),b.return=U,b)}function X(U,b,j,te,de){return b===null||b.tag!==7?(b=os(j,U.mode,te,de),b.return=U,b):(b=f(b,j),b.return=U,b)}function J(U,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=yh(""+b,U.mode,j),b.return=U,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case he:return j=Du(b.type,b.key,b.props,null,U.mode,j),j.ref=Ta(U,null,b),j.return=U,j;case fe:return b=_h(b,U.mode,j),b.return=U,b;case ht:var te=b._init;return J(U,te(b._payload),j)}if(pr(b)||me(b))return b=os(b,U.mode,j,null),b.return=U,b;lu(U,b)}return null}function Y(U,b,j,te){var de=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return de!==null?null:A(U,b,""+j,te);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case he:return j.key===de?x(U,b,j,te):null;case fe:return j.key===de?$(U,b,j,te):null;case ht:return de=j._init,Y(U,b,de(j._payload),te)}if(pr(j)||me(j))return de!==null?null:X(U,b,j,te,null);lu(U,j)}return null}function ie(U,b,j,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return U=U.get(j)||null,A(b,U,""+te,de);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case he:return U=U.get(te.key===null?j:te.key)||null,x(b,U,te,de);case fe:return U=U.get(te.key===null?j:te.key)||null,$(b,U,te,de);case ht:var ge=te._init;return ie(U,b,j,ge(te._payload),de)}if(pr(te)||me(te))return U=U.get(j)||null,X(b,U,te,de,null);lu(b,te)}return null}function ue(U,b,j,te){for(var de=null,ge=null,ye=b,we=b=0,Rt=null;ye!==null&&we<j.length;we++){ye.index>we?(Rt=ye,ye=null):Rt=ye.sibling;var Fe=Y(U,ye,j[we],te);if(Fe===null){ye===null&&(ye=Rt);break}r&&ye&&Fe.alternate===null&&s(U,ye),b=g(Fe,b,we),ge===null?de=Fe:ge.sibling=Fe,ge=Fe,ye=Rt}if(we===j.length)return a(U,ye),Xe&&Ji(U,we),de;if(ye===null){for(;we<j.length;we++)ye=J(U,j[we],te),ye!==null&&(b=g(ye,b,we),ge===null?de=ye:ge.sibling=ye,ge=ye);return Xe&&Ji(U,we),de}for(ye=c(U,ye);we<j.length;we++)Rt=ie(ye,U,we,j[we],te),Rt!==null&&(r&&Rt.alternate!==null&&ye.delete(Rt.key===null?we:Rt.key),b=g(Rt,b,we),ge===null?de=Rt:ge.sibling=Rt,ge=Rt);return r&&ye.forEach(function(pi){return s(U,pi)}),Xe&&Ji(U,we),de}function ce(U,b,j,te){var de=me(j);if(typeof de!="function")throw Error(t(150));if(j=de.call(j),j==null)throw Error(t(151));for(var ge=de=null,ye=b,we=b=0,Rt=null,Fe=j.next();ye!==null&&!Fe.done;we++,Fe=j.next()){ye.index>we?(Rt=ye,ye=null):Rt=ye.sibling;var pi=Y(U,ye,Fe.value,te);if(pi===null){ye===null&&(ye=Rt);break}r&&ye&&pi.alternate===null&&s(U,ye),b=g(pi,b,we),ge===null?de=pi:ge.sibling=pi,ge=pi,ye=Rt}if(Fe.done)return a(U,ye),Xe&&Ji(U,we),de;if(ye===null){for(;!Fe.done;we++,Fe=j.next())Fe=J(U,Fe.value,te),Fe!==null&&(b=g(Fe,b,we),ge===null?de=Fe:ge.sibling=Fe,ge=Fe);return Xe&&Ji(U,we),de}for(ye=c(U,ye);!Fe.done;we++,Fe=j.next())Fe=ie(ye,U,we,Fe.value,te),Fe!==null&&(r&&Fe.alternate!==null&&ye.delete(Fe.key===null?we:Fe.key),b=g(Fe,b,we),ge===null?de=Fe:ge.sibling=Fe,ge=Fe);return r&&ye.forEach(function(vT){return s(U,vT)}),Xe&&Ji(U,we),de}function ot(U,b,j,te){if(typeof j=="object"&&j!==null&&j.type===k&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case he:e:{for(var de=j.key,ge=b;ge!==null;){if(ge.key===de){if(de=j.type,de===k){if(ge.tag===7){a(U,ge.sibling),b=f(ge,j.props.children),b.return=U,U=b;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===ht&&sm(de)===ge.type){a(U,ge.sibling),b=f(ge,j.props),b.ref=Ta(U,ge,j),b.return=U,U=b;break e}a(U,ge);break}else s(U,ge);ge=ge.sibling}j.type===k?(b=os(j.props.children,U.mode,te,j.key),b.return=U,U=b):(te=Du(j.type,j.key,j.props,null,U.mode,te),te.ref=Ta(U,b,j),te.return=U,U=te)}return v(U);case fe:e:{for(ge=j.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){a(U,b.sibling),b=f(b,j.children||[]),b.return=U,U=b;break e}else{a(U,b);break}else s(U,b);b=b.sibling}b=_h(j,U.mode,te),b.return=U,U=b}return v(U);case ht:return ge=j._init,ot(U,b,ge(j._payload),te)}if(pr(j))return ue(U,b,j,te);if(me(j))return ce(U,b,j,te);lu(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(a(U,b.sibling),b=f(b,j),b.return=U,U=b):(a(U,b),b=yh(j,U.mode,te),b.return=U,U=b),v(U)):a(U,b)}return ot}var lo=om(!0),am=om(!1),uu=ri(null),cu=null,uo=null,Cd=null;function kd(){Cd=uo=cu=null}function Pd(r){var s=uu.current;Ge(uu),r._currentValue=s}function xd(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function co(r,s){cu=r,Cd=uo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Xt=!0),r.firstContext=null)}function vn(r){var s=r._currentValue;if(Cd!==r)if(r={context:r,memoizedValue:s,next:null},uo===null){if(cu===null)throw Error(t(308));uo=r,cu.dependencies={lanes:0,firstContext:r}}else uo=uo.next=r;return s}var Zi=null;function Nd(r){Zi===null?Zi=[r]:Zi.push(r)}function lm(r,s,a,c){var f=s.interleaved;return f===null?(a.next=a,Nd(s)):(a.next=f.next,f.next=a),s.interleaved=a,Cr(r,c)}function Cr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var oi=!1;function Dd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function um(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function kr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ai(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,Cr(r,a)}return f=c.interleaved,f===null?(s.next=s,Nd(c)):(s.next=f.next,f.next=s),c.interleaved=s,Cr(r,a)}function du(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Yr(r,a)}}function cm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function hu(r,s,a,c){var f=r.updateQueue;oi=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var x=A,$=x.next;x.next=null,v===null?g=$:v.next=$,v=x;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==v&&(A===null?X.firstBaseUpdate=$:A.next=$,X.lastBaseUpdate=x))}if(g!==null){var J=f.baseState;v=0,X=$=x=null,A=g;do{var Y=A.lane,ie=A.eventTime;if((c&Y)===Y){X!==null&&(X=X.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=r,ce=A;switch(Y=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){J=ue.call(ie,J,Y);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Y=typeof ue=="function"?ue.call(ie,J,Y):ue,Y==null)break e;J=oe({},J,Y);break e;case 2:oi=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[A]:Y.push(A))}else ie={eventTime:ie,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?($=X=ie,x=J):X=X.next=ie,v|=Y;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(X===null&&(x=J),f.baseState=x,f.firstBaseUpdate=$,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ns|=v,r.lanes=v,r.memoizedState=J}}function dm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ia={},tr=ri(Ia),Sa=ri(Ia),Ra=ri(Ia);function es(r){if(r===Ia)throw Error(t(174));return r}function bd(r,s){switch(qe(Ra,s),qe(Sa,r),qe(tr,Ia),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ge(tr),qe(tr,s)}function ho(){Ge(tr),Ge(Sa),Ge(Ra)}function hm(r){es(Ra.current);var s=es(tr.current),a=pt(s,r.type);s!==a&&(qe(Sa,r),qe(tr,a))}function Ld(r){Sa.current===r&&(Ge(tr),Ge(Sa))}var Ze=ri(0);function fu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Od=[];function Vd(){for(var r=0;r<Od.length;r++)Od[r]._workInProgressVersionPrimary=null;Od.length=0}var pu=ee.ReactCurrentDispatcher,Md=ee.ReactCurrentBatchConfig,ts=0,et=null,gt=null,It=null,mu=!1,Aa=!1,Ca=0,Bw=0;function Ot(){throw Error(t(321))}function Fd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Vn(r[a],s[a]))return!1;return!0}function Ud(r,s,a,c,f,g){if(ts=g,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,pu.current=r===null||r.memoizedState===null?qw:Kw,r=a(c,f),Aa){g=0;do{if(Aa=!1,Ca=0,25<=g)throw Error(t(301));g+=1,It=gt=null,s.updateQueue=null,pu.current=Gw,r=a(c,f)}while(Aa)}if(pu.current=_u,s=gt!==null&&gt.next!==null,ts=0,It=gt=et=null,mu=!1,s)throw Error(t(300));return r}function zd(){var r=Ca!==0;return Ca=0,r}function nr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?et.memoizedState=It=r:It=It.next=r,It}function En(){if(gt===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=It===null?et.memoizedState:It.next;if(s!==null)It=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?et.memoizedState=It=r:It=It.next=r}return It}function ka(r,s){return typeof s=="function"?s(r):s}function jd(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=gt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var A=v=null,x=null,$=g;do{var X=$.lane;if((ts&X)===X)x!==null&&(x=x.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),c=$.hasEagerState?$.eagerState:r(c,$.action);else{var J={lane:X,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};x===null?(A=x=J,v=c):x=x.next=J,et.lanes|=X,ns|=X}$=$.next}while($!==null&&$!==g);x===null?v=c:x.next=A,Vn(c,s.memoizedState)||(Xt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=x,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do g=f.lane,et.lanes|=g,ns|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Bd(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do g=r(g,v.action),v=v.next;while(v!==f);Vn(g,s.memoizedState)||(Xt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function fm(){}function pm(r,s){var a=et,c=En(),f=s(),g=!Vn(c.memoizedState,f);if(g&&(c.memoizedState=f,Xt=!0),c=c.queue,$d(ym.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Pa(9,gm.bind(null,a,c,f,s),void 0,null),St===null)throw Error(t(349));ts&30||mm(a,s,f)}return f}function mm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function gm(r,s,a,c){s.value=a,s.getSnapshot=c,_m(s)&&vm(r)}function ym(r,s,a){return a(function(){_m(s)&&vm(r)})}function _m(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Vn(r,a)}catch{return!0}}function vm(r){var s=Cr(r,1);s!==null&&jn(s,r,1,-1)}function Em(r){var s=nr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:r},s.queue=r,r=r.dispatch=Ww.bind(null,et,r),[s.memoizedState,r]}function Pa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function wm(){return En().memoizedState}function gu(r,s,a,c){var f=nr();et.flags|=r,f.memoizedState=Pa(1|s,a,void 0,c===void 0?null:c)}function yu(r,s,a,c){var f=En();c=c===void 0?null:c;var g=void 0;if(gt!==null){var v=gt.memoizedState;if(g=v.destroy,c!==null&&Fd(c,v.deps)){f.memoizedState=Pa(s,a,g,c);return}}et.flags|=r,f.memoizedState=Pa(1|s,a,g,c)}function Tm(r,s){return gu(8390656,8,r,s)}function $d(r,s){return yu(2048,8,r,s)}function Im(r,s){return yu(4,2,r,s)}function Sm(r,s){return yu(4,4,r,s)}function Rm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Am(r,s,a){return a=a!=null?a.concat([r]):null,yu(4,4,Rm.bind(null,s,r),a)}function Hd(){}function Cm(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Fd(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function km(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Fd(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Pm(r,s,a){return ts&21?(Vn(a,s)||(a=Hi(),et.lanes|=a,ns|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Xt=!0),r.memoizedState=a)}function $w(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=Md.transition;Md.transition={};try{r(!1),s()}finally{Ne=a,Md.transition=c}}function xm(){return En().memoizedState}function Hw(r,s,a){var c=di(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Nm(r))Dm(s,a);else if(a=lm(r,s,a,c),a!==null){var f=Wt();jn(a,r,c,f),bm(a,s,c)}}function Ww(r,s,a){var c=di(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nm(r))Dm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,A=g(v,a);if(f.hasEagerState=!0,f.eagerState=A,Vn(A,v)){var x=s.interleaved;x===null?(f.next=f,Nd(s)):(f.next=x.next,x.next=f),s.interleaved=f;return}}catch{}finally{}a=lm(r,s,f,c),a!==null&&(f=Wt(),jn(a,r,c,f),bm(a,s,c))}}function Nm(r){var s=r.alternate;return r===et||s!==null&&s===et}function Dm(r,s){Aa=mu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function bm(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Yr(r,a)}}var _u={readContext:vn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},qw={readContext:vn,useCallback:function(r,s){return nr().memoizedState=[r,s===void 0?null:s],r},useContext:vn,useEffect:Tm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,gu(4194308,4,Rm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return gu(4194308,4,r,s)},useInsertionEffect:function(r,s){return gu(4,2,r,s)},useMemo:function(r,s){var a=nr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=nr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=Hw.bind(null,et,r),[c.memoizedState,r]},useRef:function(r){var s=nr();return r={current:r},s.memoizedState=r},useState:Em,useDebugValue:Hd,useDeferredValue:function(r){return nr().memoizedState=r},useTransition:function(){var r=Em(!1),s=r[0];return r=$w.bind(null,r[1]),nr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=et,f=nr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));ts&30||mm(c,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Tm(ym.bind(null,c,g,r),[r]),c.flags|=2048,Pa(9,gm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=nr(),s=St.identifierPrefix;if(Xe){var a=Ar,c=Rr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ca++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Bw++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},Kw={readContext:vn,useCallback:Cm,useContext:vn,useEffect:$d,useImperativeHandle:Am,useInsertionEffect:Im,useLayoutEffect:Sm,useMemo:km,useReducer:jd,useRef:wm,useState:function(){return jd(ka)},useDebugValue:Hd,useDeferredValue:function(r){var s=En();return Pm(s,gt.memoizedState,r)},useTransition:function(){var r=jd(ka)[0],s=En().memoizedState;return[r,s]},useMutableSource:fm,useSyncExternalStore:pm,useId:xm,unstable_isNewReconciler:!1},Gw={readContext:vn,useCallback:Cm,useContext:vn,useEffect:$d,useImperativeHandle:Am,useInsertionEffect:Im,useLayoutEffect:Sm,useMemo:km,useReducer:Bd,useRef:wm,useState:function(){return Bd(ka)},useDebugValue:Hd,useDeferredValue:function(r){var s=En();return gt===null?s.memoizedState=r:Pm(s,gt.memoizedState,r)},useTransition:function(){var r=Bd(ka)[0],s=En().memoizedState;return[r,s]},useMutableSource:fm,useSyncExternalStore:pm,useId:xm,unstable_isNewReconciler:!1};function Fn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Wd(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var vu={isMounted:function(r){return(r=r._reactInternals)?Pn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Wt(),f=di(r),g=kr(c,f);g.payload=s,a!=null&&(g.callback=a),s=ai(r,g,f),s!==null&&(jn(s,r,f,c),du(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Wt(),f=di(r),g=kr(c,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ai(r,g,f),s!==null&&(jn(s,r,f,c),du(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),c=di(r),f=kr(a,c);f.tag=2,s!=null&&(f.callback=s),s=ai(r,f,c),s!==null&&(jn(s,r,c,a),du(s,r,c))}};function Lm(r,s,a,c,f,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!ma(a,c)||!ma(f,g):!0}function Om(r,s,a){var c=!1,f=ii,g=s.contextType;return typeof g=="object"&&g!==null?g=vn(g):(f=Yt(s)?Yi:Lt.current,c=s.contextTypes,g=(c=c!=null)?io(r,f):ii),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=vu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Vm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&vu.enqueueReplaceState(s,s.state,null)}function qd(r,s,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Dd(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=vn(g):(g=Yt(s)?Yi:Lt.current,f.context=io(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Wd(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&vu.enqueueReplaceState(f,f.state,null),hu(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function fo(r,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Kd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Gd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Qw=typeof WeakMap=="function"?WeakMap:Map;function Mm(r,s,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Au||(Au=!0,uh=c),Gd(r,s)},a}function Fm(r,s,a){a=kr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;a.payload=function(){return c(f)},a.callback=function(){Gd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Gd(r,s),typeof c!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Um(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new Qw;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(a)||(f.add(a),r=uT.bind(null,r,s,a),s.then(r,r))}function zm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function jm(r,s,a,c,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=kr(-1,1),s.tag=2,ai(a,s,1))),a.lanes|=1),r)}var Yw=ee.ReactCurrentOwner,Xt=!1;function Ht(r,s,a,c){s.child=r===null?am(s,null,a,c):lo(s,r.child,a,c)}function Bm(r,s,a,c,f){a=a.render;var g=s.ref;return co(s,f),c=Ud(r,s,a,c,g,f),a=zd(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Pr(r,s,f)):(Xe&&a&&Td(s),s.flags|=1,Ht(r,s,c,f),s.child)}function $m(r,s,a,c,f){if(r===null){var g=a.type;return typeof g=="function"&&!gh(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Hm(r,s,g,c,f)):(r=Du(a.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:ma,a(v,c)&&r.ref===s.ref)return Pr(r,s,f)}return s.flags|=1,r=fi(g,c),r.ref=s.ref,r.return=s,s.child=r}function Hm(r,s,a,c,f){if(r!==null){var g=r.memoizedProps;if(ma(g,c)&&r.ref===s.ref)if(Xt=!1,s.pendingProps=c=g,(r.lanes&f)!==0)r.flags&131072&&(Xt=!0);else return s.lanes=r.lanes,Pr(r,s,f)}return Qd(r,s,a,c,f)}function Wm(r,s,a){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(mo,cn),cn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,qe(mo,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,qe(mo,cn),cn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,qe(mo,cn),cn|=c;return Ht(r,s,f,a),s.child}function qm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Qd(r,s,a,c,f){var g=Yt(a)?Yi:Lt.current;return g=io(s,g),co(s,f),a=Ud(r,s,a,c,g,f),c=zd(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Pr(r,s,f)):(Xe&&c&&Td(s),s.flags|=1,Ht(r,s,a,f),s.child)}function Km(r,s,a,c,f){if(Yt(a)){var g=!0;ru(s)}else g=!1;if(co(s,f),s.stateNode===null)wu(r,s),Om(s,a,c),qd(s,a,c,f),c=!0;else if(r===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var x=v.context,$=a.contextType;typeof $=="object"&&$!==null?$=vn($):($=Yt(a)?Yi:Lt.current,$=io(s,$));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||x!==$)&&Vm(s,v,c,$),oi=!1;var Y=s.memoizedState;v.state=Y,hu(s,c,v,f),x=s.memoizedState,A!==c||Y!==x||Qt.current||oi?(typeof X=="function"&&(Wd(s,a,X,c),x=s.memoizedState),(A=oi||Lm(s,a,A,c,Y,x,$))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=x),v.props=c,v.state=x,v.context=$,c=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,um(r,s),A=s.memoizedProps,$=s.type===s.elementType?A:Fn(s.type,A),v.props=$,J=s.pendingProps,Y=v.context,x=a.contextType,typeof x=="object"&&x!==null?x=vn(x):(x=Yt(a)?Yi:Lt.current,x=io(s,x));var ie=a.getDerivedStateFromProps;(X=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==J||Y!==x)&&Vm(s,v,c,x),oi=!1,Y=s.memoizedState,v.state=Y,hu(s,c,v,f);var ue=s.memoizedState;A!==J||Y!==ue||Qt.current||oi?(typeof ie=="function"&&(Wd(s,a,ie,c),ue=s.memoizedState),($=oi||Lm(s,a,$,c,Y,ue,x)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,x),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,x)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=x,c=$):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),c=!1)}return Yd(r,s,a,c,g,f)}function Yd(r,s,a,c,f,g){qm(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return f&&Jp(s,a,!1),Pr(r,s,g);c=s.stateNode,Yw.current=s;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=lo(s,r.child,null,g),s.child=lo(s,null,A,g)):Ht(r,s,A,g),s.memoizedState=c.state,f&&Jp(s,a,!0),s.child}function Gm(r){var s=r.stateNode;s.pendingContext?Yp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Yp(r,s.context,!1),bd(r,s.containerInfo)}function Qm(r,s,a,c,f){return ao(),Ad(f),s.flags|=256,Ht(r,s,a,c),s.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function Jd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Ym(r,s,a){var c=s.pendingProps,f=Ze.current,g=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),qe(Ze,f&1),r===null)return Rd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=bu(v,c,0,null),r=os(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Jd(a),s.memoizedState=Xd,r):Zd(s,v));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return Xw(r,s,v,c,A,f,a);if(g){g=c.fallback,v=s.mode,f=r.child,A=f.sibling;var x={mode:"hidden",children:c.children};return!(v&1)&&s.child!==f?(c=s.child,c.childLanes=0,c.pendingProps=x,s.deletions=null):(c=fi(f,x),c.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=fi(A,g):(g=os(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?Jd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Xd,c}return g=r.child,r=g.sibling,c=fi(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Zd(r,s){return s=bu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Eu(r,s,a,c){return c!==null&&Ad(c),lo(s,r.child,null,a),r=Zd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Xw(r,s,a,c,f,g,v){if(a)return s.flags&256?(s.flags&=-257,c=Kd(Error(t(422))),Eu(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,f=s.mode,c=bu({mode:"visible",children:c.children},f,0,null),g=os(g,f,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&lo(s,r.child,null,v),s.child.memoizedState=Jd(v),s.memoizedState=Xd,g);if(!(s.mode&1))return Eu(r,s,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=Kd(g,c,void 0),Eu(r,s,v,c)}if(A=(v&r.childLanes)!==0,Xt||A){if(c=St,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|v)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Cr(r,f),jn(c,r,f,-1))}return mh(),c=Kd(Error(t(421))),Eu(r,s,v,c)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=cT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,un=ni(f.nextSibling),ln=s,Xe=!0,Mn=null,r!==null&&(yn[_n++]=Rr,yn[_n++]=Ar,yn[_n++]=Xi,Rr=r.id,Ar=r.overflow,Xi=s),s=Zd(s,c.children),s.flags|=4096,s)}function Xm(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),xd(r.return,s,a)}function eh(r,s,a,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function Jm(r,s,a){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(Ht(r,s,c.children,a),c=Ze.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Xm(r,a,s);else if(r.tag===19)Xm(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(qe(Ze,c),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&fu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),eh(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&fu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}eh(s,!0,a,null,g);break;case"together":eh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function wu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Pr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ns|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=fi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=fi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Jw(r,s,a){switch(s.tag){case 3:Gm(s),ao();break;case 5:hm(s);break;case 1:Yt(s.type)&&ru(s);break;case 4:bd(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,f=s.memoizedProps.value;qe(uu,c._currentValue),c._currentValue=f;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ze,Ze.current&1),s.flags|=128,null):a&s.child.childLanes?Ym(r,s,a):(qe(Ze,Ze.current&1),r=Pr(r,s,a),r!==null?r.sibling:null);qe(Ze,Ze.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return Jm(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),qe(Ze,Ze.current),c)break;return null;case 22:case 23:return s.lanes=0,Wm(r,s,a)}return Pr(r,s,a)}var Zm,th,eg,tg;Zm=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},th=function(){},eg=function(r,s,a,c){var f=r.memoizedProps;if(f!==c){r=s.stateNode,es(tr.current);var g=null;switch(a){case"input":f=bi(r,f),c=bi(r,c),g=[];break;case"select":f=oe({},f,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":f=Ho(r,f),c=Ho(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=eu)}Yo(a,c);var v;a=null;for($ in f)if(!c.hasOwnProperty($)&&f.hasOwnProperty($)&&f[$]!=null)if($==="style"){var A=f[$];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in c){var x=c[$];if(A=f!=null?f[$]:void 0,c.hasOwnProperty($)&&x!==A&&(x!=null||A!=null))if($==="style")if(A){for(v in A)!A.hasOwnProperty(v)||x&&x.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in x)x.hasOwnProperty(v)&&A[v]!==x[v]&&(a||(a={}),a[v]=x[v])}else a||(g||(g=[]),g.push($,a)),a=x;else $==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,A=A?A.__html:void 0,x!=null&&A!==x&&(g=g||[]).push($,x)):$==="children"?typeof x!="string"&&typeof x!="number"||(g=g||[]).push($,""+x):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(x!=null&&$==="onScroll"&&Ke("scroll",r),g||A===x||(g=[])):(g=g||[]).push($,x))}a&&(g=g||[]).push("style",a);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},tg=function(r,s,a,c){a!==c&&(s.flags|=4)};function xa(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function Zw(r,s,a){var c=s.pendingProps;switch(Id(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Yt(s.type)&&nu(),Vt(s),null;case 3:return c=s.stateNode,ho(),Ge(Qt),Ge(Lt),Vd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(au(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Mn!==null&&(hh(Mn),Mn=null))),th(r,s),Vt(s),null;case 5:Ld(s);var f=es(Ra.current);if(a=s.type,r!==null&&s.stateNode!=null)eg(r,s,a,c,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=es(tr.current),au(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[er]=s,c[Ea]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(f=0;f<ya.length;f++)Ke(ya[f],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":As(c,g),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",c);break;case"textarea":ks(c,g),Ke("invalid",c)}Yo(a,g),f=null;for(var v in g)if(g.hasOwnProperty(v)){var A=g[v];v==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&Zl(c.textContent,A,r),f=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Zl(c.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":fr(c),Rl(c,g,!0);break;case"textarea":fr(c),Wo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=eu)}c=f,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ft(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[er]=s,r[Ea]=c,Zm(r,s,!1,!1),s.stateNode=r;e:{switch(v=Xo(a,c),a){case"dialog":Ke("cancel",r),Ke("close",r),f=c;break;case"iframe":case"object":case"embed":Ke("load",r),f=c;break;case"video":case"audio":for(f=0;f<ya.length;f++)Ke(ya[f],r);f=c;break;case"source":Ke("error",r),f=c;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),f=c;break;case"details":Ke("toggle",r),f=c;break;case"input":As(r,c),f=bi(r,c),Ke("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=oe({},c,{value:void 0}),Ke("invalid",r);break;case"textarea":ks(r,c),f=Ho(r,c),Ke("invalid",r);break;default:f=c}Yo(a,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var x=A[g];g==="style"?Go(r,x):g==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&qo(r,x)):g==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&Wr(r,x):typeof x=="number"&&Wr(r,""+x):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?x!=null&&g==="onScroll"&&Ke("scroll",r):x!=null&&K(r,g,x,v))}switch(a){case"input":fr(r),Rl(r,c,!1);break;case"textarea":fr(r),Wo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+ze(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?mr(r,!!c.multiple,g,!1):c.defaultValue!=null&&mr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=eu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)tg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=es(Ra.current),es(tr.current),au(s)){if(c=s.stateNode,a=s.memoizedProps,c[er]=s,(g=c.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:Zl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Zl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=s,s.stateNode=c}return Vt(s),null;case 13:if(Ge(Ze),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&un!==null&&s.mode&1&&!(s.flags&128))im(),ao(),s.flags|=98560,g=!1;else if(g=au(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[er]=s}else ao(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Vt(s),g=!1}else Mn!==null&&(hh(Mn),Mn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||Ze.current&1?yt===0&&(yt=3):mh())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return ho(),th(r,s),r===null&&_a(s.stateNode.containerInfo),Vt(s),null;case 10:return Pd(s.type._context),Vt(s),null;case 17:return Yt(s.type)&&nu(),Vt(s),null;case 19:if(Ge(Ze),g=s.memoizedState,g===null)return Vt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)xa(g,!1);else{if(yt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=fu(r),v!==null){for(s.flags|=128,xa(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return qe(Ze,Ze.current&1|2),s.child}r=r.sibling}g.tail!==null&&We()>go&&(s.flags|=128,c=!0,xa(g,!1),s.lanes=4194304)}else{if(!c)if(r=fu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),xa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Xe)return Vt(s),null}else 2*We()-g.renderingStartTime>go&&a!==1073741824&&(s.flags|=128,c=!0,xa(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=We(),s.sibling=null,a=Ze.current,qe(Ze,c?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return ph(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?cn&1073741824&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function eT(r,s){switch(Id(s),s.tag){case 1:return Yt(s.type)&&nu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ho(),Ge(Qt),Ge(Lt),Vd(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Ld(s),null;case 13:if(Ge(Ze),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ao()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Ze),null;case 4:return ho(),null;case 10:return Pd(s.type._context),null;case 22:case 23:return ph(),null;case 24:return null;default:return null}}var Tu=!1,Mt=!1,tT=typeof WeakSet=="function"?WeakSet:Set,le=null;function po(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(r,s,c)}else a.current=null}function nh(r,s,a){try{a()}catch(c){rt(r,s,c)}}var ng=!1;function nT(r,s){if(pd=Zr,r=Lp(),od(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,A=-1,x=-1,$=0,X=0,J=r,Y=null;t:for(;;){for(var ie;J!==a||f!==0&&J.nodeType!==3||(A=v+f),J!==g||c!==0&&J.nodeType!==3||(x=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(ie=J.firstChild)!==null;)Y=J,J=ie;for(;;){if(J===r)break t;if(Y===a&&++$===f&&(A=v),Y===g&&++X===c&&(x=v),(ie=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=ie}a=A===-1||x===-1?null:{start:A,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(md={focusedElem:r,selectionRange:a},Zr=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ue=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,ot=ue.memoizedState,U=s.stateNode,b=U.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Fn(s.type,ce),ot);U.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){rt(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ue=ng,ng=!1,ue}function Na(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&nh(s,a,g)}f=f.next}while(f!==c)}}function Iu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function rh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function rg(r){var s=r.alternate;s!==null&&(r.alternate=null,rg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[er],delete s[Ea],delete s[vd],delete s[Fw],delete s[Uw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ig(r){return r.tag===5||r.tag===3||r.tag===4}function sg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ig(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ih(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=eu));else if(c!==4&&(r=r.child,r!==null))for(ih(r,s,a),r=r.sibling;r!==null;)ih(r,s,a),r=r.sibling}function sh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(sh(r,s,a),r=r.sibling;r!==null;)sh(r,s,a),r=r.sibling}var Pt=null,Un=!1;function li(r,s,a){for(a=a.child;a!==null;)og(r,s,a),a=a.sibling}function og(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Bi,a)}catch{}switch(a.tag){case 5:Mt||po(a,s);case 6:var c=Pt,f=Un;Pt=null,li(r,s,a),Pt=c,Un=f,Pt!==null&&(Un?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Un?(r=Pt,a=a.stateNode,r.nodeType===8?_d(r.parentNode,a):r.nodeType===1&&_d(r,a),Ln(r)):_d(Pt,a.stateNode));break;case 4:c=Pt,f=Un,Pt=a.stateNode.containerInfo,Un=!0,li(r,s,a),Pt=c,Un=f;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&nh(a,s,v),f=f.next}while(f!==c)}li(r,s,a);break;case 1:if(!Mt&&(po(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){rt(a,s,A)}li(r,s,a);break;case 21:li(r,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,li(r,s,a),Mt=c):li(r,s,a);break;default:li(r,s,a)}}function ag(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new tT),s.forEach(function(c){var f=dT.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function zn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=r,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Pt=A.stateNode,Un=!1;break e;case 3:Pt=A.stateNode.containerInfo,Un=!0;break e;case 4:Pt=A.stateNode.containerInfo,Un=!0;break e}A=A.return}if(Pt===null)throw Error(t(160));og(g,v,f),Pt=null,Un=!1;var x=f.alternate;x!==null&&(x.return=null),f.return=null}catch($){rt(f,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)lg(s,r),s=s.sibling}function lg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(zn(s,r),rr(r),c&4){try{Na(3,r,r.return),Iu(3,r)}catch(ce){rt(r,r.return,ce)}try{Na(5,r,r.return)}catch(ce){rt(r,r.return,ce)}}break;case 1:zn(s,r),rr(r),c&512&&a!==null&&po(a,a.return);break;case 5:if(zn(s,r),rr(r),c&512&&a!==null&&po(a,a.return),r.flags&32){var f=r.stateNode;try{Wr(f,"")}catch(ce){rt(r,r.return,ce)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,A=r.type,x=r.updateQueue;if(r.updateQueue=null,x!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&Bo(f,g),Xo(A,v);var $=Xo(A,g);for(v=0;v<x.length;v+=2){var X=x[v],J=x[v+1];X==="style"?Go(f,J):X==="dangerouslySetInnerHTML"?qo(f,J):X==="children"?Wr(f,J):K(f,X,J,$)}switch(A){case"input":$o(f,g);break;case"textarea":Ps(f,g);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ie=g.value;ie!=null?mr(f,!!g.multiple,ie,!1):Y!==!!g.multiple&&(g.defaultValue!=null?mr(f,!!g.multiple,g.defaultValue,!0):mr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ea]=g}catch(ce){rt(r,r.return,ce)}}break;case 6:if(zn(s,r),rr(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ce){rt(r,r.return,ce)}}break;case 3:if(zn(s,r),rr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(ce){rt(r,r.return,ce)}break;case 4:zn(s,r),rr(r);break;case 13:zn(s,r),rr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(lh=We())),c&4&&ag(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Mt=($=Mt)||X,zn(s,r),Mt=$):zn(s,r),rr(r),c&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!X&&r.mode&1)for(le=r,X=r.child;X!==null;){for(J=le=X;le!==null;){switch(Y=le,ie=Y.child,Y.tag){case 0:case 11:case 14:case 15:Na(4,Y,Y.return);break;case 1:po(Y,Y.return);var ue=Y.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Y,a=Y.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){rt(c,a,ce)}}break;case 5:po(Y,Y.return);break;case 22:if(Y.memoizedState!==null){dg(J);continue}}ie!==null?(ie.return=Y,le=ie):dg(J)}X=X.sibling}e:for(X=null,J=r;;){if(J.tag===5){if(X===null){X=J;try{f=J.stateNode,$?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=J.stateNode,x=J.memoizedProps.style,v=x!=null&&x.hasOwnProperty("display")?x.display:null,A.style.display=Ko("display",v))}catch(ce){rt(r,r.return,ce)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=$?"":J.memoizedProps}catch(ce){rt(r,r.return,ce)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:zn(s,r),rr(r),c&4&&ag(r);break;case 21:break;default:zn(s,r),rr(r)}}function rr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(ig(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Wr(f,""),c.flags&=-33);var g=sg(r);sh(r,g,f);break;case 3:case 4:var v=c.stateNode.containerInfo,A=sg(r);ih(r,A,v);break;default:throw Error(t(161))}}catch(x){rt(r,r.return,x)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function rT(r,s,a){le=r,ug(r)}function ug(r,s,a){for(var c=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||Tu;if(!v){var A=f.alternate,x=A!==null&&A.memoizedState!==null||Mt;A=Tu;var $=Mt;if(Tu=v,(Mt=x)&&!$)for(le=f;le!==null;)v=le,x=v.child,v.tag===22&&v.memoizedState!==null?hg(f):x!==null?(x.return=v,le=x):hg(f);for(;g!==null;)le=g,ug(g),g=g.sibling;le=f,Tu=A,Mt=$}cg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,le=g):cg(r)}}function cg(r){for(;le!==null;){var s=le;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Mt||Iu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&dm(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}dm(s,v,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var x=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var X=$.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&Ln(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&rh(s)}catch(Y){rt(s,s.return,Y)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function dg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function hg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Iu(4,s)}catch(x){rt(s,a,x)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var f=s.return;try{c.componentDidMount()}catch(x){rt(s,f,x)}}var g=s.return;try{rh(s)}catch(x){rt(s,g,x)}break;case 5:var v=s.return;try{rh(s)}catch(x){rt(s,v,x)}}}catch(x){rt(s,s.return,x)}if(s===r){le=null;break}var A=s.sibling;if(A!==null){A.return=s.return,le=A;break}le=s.return}}var iT=Math.ceil,Su=ee.ReactCurrentDispatcher,oh=ee.ReactCurrentOwner,wn=ee.ReactCurrentBatchConfig,Ve=0,St=null,ut=null,xt=0,cn=0,mo=ri(0),yt=0,Da=null,ns=0,Ru=0,ah=0,ba=null,Jt=null,lh=0,go=1/0,xr=null,Au=!1,uh=null,ui=null,Cu=!1,ci=null,ku=0,La=0,ch=null,Pu=-1,xu=0;function Wt(){return Ve&6?We():Pu!==-1?Pu:Pu=We()}function di(r){return r.mode&1?Ve&2&&xt!==0?xt&-xt:jw.transition!==null?(xu===0&&(xu=Hi()),xu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:la(r.type)),r):1}function jn(r,s,a,c){if(50<La)throw La=0,ch=null,Error(t(185));Qr(r,a,c),(!(Ve&2)||r!==St)&&(r===St&&(!(Ve&2)&&(Ru|=a),yt===4&&hi(r,xt)),Zt(r,c),a===1&&Ve===0&&!(s.mode&1)&&(go=We()+500,iu&&si()))}function Zt(r,s){var a=r.callbackNode;_r(r,s);var c=$i(r,r===St?xt:0);if(c===0)a!==null&&ra(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ra(a),s===1)r.tag===0?zw(pg.bind(null,r)):Zp(pg.bind(null,r)),Vw(function(){!(Ve&6)&&si()}),a=null;else{switch(Xr(c)){case 1:a=ji;break;case 4:a=qr;break;case 16:a=pn;break;case 536870912:a=xl;break;default:a=pn}a=Tg(a,fg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function fg(r,s){if(Pu=-1,xu=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(yo()&&r.callbackNode!==a)return null;var c=$i(r,r===St?xt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=Nu(r,c);else{s=c;var f=Ve;Ve|=2;var g=gg();(St!==r||xt!==s)&&(xr=null,go=We()+500,is(r,s));do try{aT();break}catch(A){mg(r,A)}while(!0);kd(),Su.current=g,Ve=f,ut!==null?s=0:(St=null,xt=0,s=yt)}if(s!==0){if(s===2&&(f=sn(r),f!==0&&(c=f,s=dh(r,f))),s===1)throw a=Da,is(r,0),hi(r,c),Zt(r,We()),a;if(s===6)hi(r,c);else{if(f=r.current.alternate,!(c&30)&&!sT(f)&&(s=Nu(r,c),s===2&&(g=sn(r),g!==0&&(c=g,s=dh(r,g))),s===1))throw a=Da,is(r,0),hi(r,c),Zt(r,We()),a;switch(r.finishedWork=f,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ss(r,Jt,xr);break;case 3:if(hi(r,c),(c&130023424)===c&&(s=lh+500-We(),10<s)){if($i(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){Wt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=yd(ss.bind(null,r,Jt,xr),s);break}ss(r,Jt,xr);break;case 4:if(hi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,f=-1;0<c;){var v=31-Bt(c);g=1<<v,v=s[v],v>f&&(f=v),c&=~g}if(c=f,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*iT(c/1960))-c,10<c){r.timeoutHandle=yd(ss.bind(null,r,Jt,xr),c);break}ss(r,Jt,xr);break;case 5:ss(r,Jt,xr);break;default:throw Error(t(329))}}}return Zt(r,We()),r.callbackNode===a?fg.bind(null,r):null}function dh(r,s){var a=ba;return r.current.memoizedState.isDehydrated&&(is(r,s).flags|=256),r=Nu(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&hh(s)),r}function hh(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function sT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!Vn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function hi(r,s){for(s&=~ah,s&=~Ru,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Bt(s),c=1<<a;r[a]=-1,s&=~c}}function pg(r){if(Ve&6)throw Error(t(327));yo();var s=$i(r,0);if(!(s&1))return Zt(r,We()),null;var a=Nu(r,s);if(r.tag!==0&&a===2){var c=sn(r);c!==0&&(s=c,a=dh(r,c))}if(a===1)throw a=Da,is(r,0),hi(r,s),Zt(r,We()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ss(r,Jt,xr),Zt(r,We()),null}function fh(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(go=We()+500,iu&&si())}}function rs(r){ci!==null&&ci.tag===0&&!(Ve&6)&&yo();var s=Ve;Ve|=1;var a=wn.transition,c=Ne;try{if(wn.transition=null,Ne=1,r)return r()}finally{Ne=c,wn.transition=a,Ve=s,!(Ve&6)&&si()}}function ph(){cn=mo.current,Ge(mo)}function is(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Ow(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Id(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&nu();break;case 3:ho(),Ge(Qt),Ge(Lt),Vd();break;case 5:Ld(c);break;case 4:ho();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:Pd(c.type._context);break;case 22:case 23:ph()}a=a.return}if(St=r,ut=r=fi(r.current,null),xt=cn=s,yt=0,Da=null,ah=Ru=ns=0,Jt=ba=null,Zi!==null){for(s=0;s<Zi.length;s++)if(a=Zi[s],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=f,c.next=v}a.pending=c}Zi=null}return r}function mg(r,s){do{var a=ut;try{if(kd(),pu.current=_u,mu){for(var c=et.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}mu=!1}if(ts=0,It=gt=et=null,Aa=!1,Ca=0,oh.current=null,a===null||a.return===null){yt=1,Da=s,ut=null;break}e:{var g=r,v=a.return,A=a,x=s;if(s=xt,A.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var $=x,X=A,J=X.tag;if(!(X.mode&1)&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var ie=zm(v);if(ie!==null){ie.flags&=-257,jm(ie,v,A,g,s),ie.mode&1&&Um(g,$,s),s=ie,x=$;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(x),s.updateQueue=ce}else ue.add(x);break e}else{if(!(s&1)){Um(g,$,s),mh();break e}x=Error(t(426))}}else if(Xe&&A.mode&1){var ot=zm(v);if(ot!==null){!(ot.flags&65536)&&(ot.flags|=256),jm(ot,v,A,g,s),Ad(fo(x,A));break e}}g=x=fo(x,A),yt!==4&&(yt=2),ba===null?ba=[g]:ba.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=Mm(g,x,s);cm(g,U);break e;case 1:A=x;var b=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ui===null||!ui.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=Fm(g,A,s);cm(g,te);break e}}g=g.return}while(g!==null)}_g(a)}catch(de){s=de,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function gg(){var r=Su.current;return Su.current=_u,r===null?_u:r}function mh(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||!(ns&268435455)&&!(Ru&268435455)||hi(St,xt)}function Nu(r,s){var a=Ve;Ve|=2;var c=gg();(St!==r||xt!==s)&&(xr=null,is(r,s));do try{oT();break}catch(f){mg(r,f)}while(!0);if(kd(),Ve=a,Su.current=c,ut!==null)throw Error(t(261));return St=null,xt=0,yt}function oT(){for(;ut!==null;)yg(ut)}function aT(){for(;ut!==null&&!kl();)yg(ut)}function yg(r){var s=wg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?_g(r):ut=s,oh.current=null}function _g(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=eT(a,s),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,ut=null;return}}else if(a=Zw(a,s,cn),a!==null){ut=a;return}if(s=s.sibling,s!==null){ut=s;return}ut=s=r}while(s!==null);yt===0&&(yt=5)}function ss(r,s,a){var c=Ne,f=wn.transition;try{wn.transition=null,Ne=1,lT(r,s,a,c)}finally{wn.transition=f,Ne=c}return null}function lT(r,s,a,c){do yo();while(ci!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if($e(r,g),r===St&&(ut=St=null,xt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Cu||(Cu=!0,Tg(pn,function(){return yo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=wn.transition,wn.transition=null;var v=Ne;Ne=1;var A=Ve;Ve|=4,oh.current=null,nT(r,a),lg(a,r),kw(md),Zr=!!pd,md=pd=null,r.current=a,rT(a),Jc(),Ve=A,Ne=v,wn.transition=g}else r.current=a;if(Cu&&(Cu=!1,ci=r,ku=f),g=r.pendingLanes,g===0&&(ui=null),Nl(a.stateNode),Zt(r,We()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Au)throw Au=!1,r=uh,uh=null,r;return ku&1&&r.tag!==0&&yo(),g=r.pendingLanes,g&1?r===ch?La++:(La=0,ch=r):La=0,si(),null}function yo(){if(ci!==null){var r=Xr(ku),s=wn.transition,a=Ne;try{if(wn.transition=null,Ne=16>r?16:r,ci===null)var c=!1;else{if(r=ci,ci=null,ku=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,le=r.current;le!==null;){var g=le,v=g.child;if(le.flags&16){var A=g.deletions;if(A!==null){for(var x=0;x<A.length;x++){var $=A[x];for(le=$;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:Na(8,X,g)}var J=X.child;if(J!==null)J.return=X,le=J;else for(;le!==null;){X=le;var Y=X.sibling,ie=X.return;if(rg(X),X===$){le=null;break}if(Y!==null){Y.return=ie,le=Y;break}le=ie}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var ot=ce.sibling;ce.sibling=null,ce=ot}while(ce!==null)}}le=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,le=v;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Na(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,le=U;break e}le=g.return}}var b=r.current;for(le=b;le!==null;){v=le;var j=v.child;if(v.subtreeFlags&2064&&j!==null)j.return=v,le=j;else e:for(v=b;le!==null;){if(A=le,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:Iu(9,A)}}catch(de){rt(A,A.return,de)}if(A===v){le=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,le=te;break e}le=A.return}}if(Ve=f,si(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Bi,r)}catch{}c=!0}return c}finally{Ne=a,wn.transition=s}}return!1}function vg(r,s,a){s=fo(a,s),s=Mm(r,s,1),r=ai(r,s,1),s=Wt(),r!==null&&(Qr(r,1,s),Zt(r,s))}function rt(r,s,a){if(r.tag===3)vg(r,r,a);else for(;s!==null;){if(s.tag===3){vg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ui===null||!ui.has(c))){r=fo(a,r),r=Fm(s,r,1),s=ai(s,r,1),r=Wt(),s!==null&&(Qr(s,1,r),Zt(s,r));break}}s=s.return}}function uT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,St===r&&(xt&a)===a&&(yt===4||yt===3&&(xt&130023424)===xt&&500>We()-lh?is(r,0):ah|=a),Zt(r,s)}function Eg(r,s){s===0&&(r.mode&1?(s=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):s=1);var a=Wt();r=Cr(r,s),r!==null&&(Qr(r,s,a),Zt(r,a))}function cT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Eg(r,a)}function dT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Eg(r,a)}var wg;wg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Xt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Xt=!1,Jw(r,s,a);Xt=!!(r.flags&131072)}else Xt=!1,Xe&&s.flags&1048576&&em(s,ou,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;wu(r,s),r=s.pendingProps;var f=io(s,Lt.current);co(s,a),f=Ud(null,s,c,r,f,a);var g=zd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(c)?(g=!0,ru(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Dd(s),f.updater=vu,s.stateNode=f,f._reactInternals=s,qd(s,c,r,a),s=Yd(null,s,c,!0,g,a)):(s.tag=0,Xe&&g&&Td(s),Ht(null,s,f,a),s=s.child),s;case 16:c=s.elementType;e:{switch(wu(r,s),r=s.pendingProps,f=c._init,c=f(c._payload),s.type=c,f=s.tag=fT(c),r=Fn(c,r),f){case 0:s=Qd(null,s,c,r,a);break e;case 1:s=Km(null,s,c,r,a);break e;case 11:s=Bm(null,s,c,r,a);break e;case 14:s=$m(null,s,c,Fn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Fn(c,f),Qd(r,s,c,f,a);case 1:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Fn(c,f),Km(r,s,c,f,a);case 3:e:{if(Gm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,f=g.element,um(r,s),hu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=fo(Error(t(423)),s),s=Qm(r,s,c,a,f);break e}else if(c!==f){f=fo(Error(t(424)),s),s=Qm(r,s,c,a,f);break e}else for(un=ni(s.stateNode.containerInfo.firstChild),ln=s,Xe=!0,Mn=null,a=am(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ao(),c===f){s=Pr(r,s,a);break e}Ht(r,s,c,a)}s=s.child}return s;case 5:return hm(s),r===null&&Rd(s),c=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,v=f.children,gd(c,f)?v=null:g!==null&&gd(c,g)&&(s.flags|=32),qm(r,s),Ht(r,s,v,a),s.child;case 6:return r===null&&Rd(s),null;case 13:return Ym(r,s,a);case 4:return bd(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=lo(s,null,c,a):Ht(r,s,c,a),s.child;case 11:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Fn(c,f),Bm(r,s,c,f,a);case 7:return Ht(r,s,s.pendingProps,a),s.child;case 8:return Ht(r,s,s.pendingProps.children,a),s.child;case 12:return Ht(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,f=s.pendingProps,g=s.memoizedProps,v=f.value,qe(uu,c._currentValue),c._currentValue=v,g!==null)if(Vn(g.value,v)){if(g.children===f.children&&!Qt.current){s=Pr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){v=g.child;for(var x=A.firstContext;x!==null;){if(x.context===c){if(g.tag===1){x=kr(-1,a&-a),x.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var X=$.pending;X===null?x.next=x:(x.next=X.next,X.next=x),$.pending=x}}g.lanes|=a,x=g.alternate,x!==null&&(x.lanes|=a),xd(g.return,a,s),A.lanes|=a;break}x=x.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),xd(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Ht(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,c=s.pendingProps.children,co(s,a),f=vn(f),c=c(f),s.flags|=1,Ht(r,s,c,a),s.child;case 14:return c=s.type,f=Fn(c,s.pendingProps),f=Fn(c.type,f),$m(r,s,c,f,a);case 15:return Hm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Fn(c,f),wu(r,s),s.tag=1,Yt(c)?(r=!0,ru(s)):r=!1,co(s,a),Om(s,c,f),qd(s,c,f,a),Yd(null,s,c,!0,r,a);case 19:return Jm(r,s,a);case 22:return Wm(r,s,a)}throw Error(t(156,s.tag))};function Tg(r,s){return Ms(r,s)}function hT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new hT(r,s,a,c)}function gh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function fT(r){if(typeof r=="function")return gh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===O)return 11;if(r===dt)return 14}return 2}function fi(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Du(r,s,a,c,f,g){var v=2;if(c=r,typeof r=="function")gh(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case k:return os(a.children,f,g,s);case T:v=8,f|=8;break;case R:return r=Tn(12,a,s,f|2),r.elementType=R,r.lanes=g,r;case C:return r=Tn(13,a,s,f),r.elementType=C,r.lanes=g,r;case Je:return r=Tn(19,a,s,f),r.elementType=Je,r.lanes=g,r;case Me:return bu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:v=10;break e;case D:v=9;break e;case O:v=11;break e;case dt:v=14;break e;case ht:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Tn(v,a,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function os(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function bu(r,s,a,c){return r=Tn(22,r,c,s),r.elementType=Me,r.lanes=a,r.stateNode={isHidden:!1},r}function yh(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function _h(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function pT(r,s,a,c,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gr(0),this.expirationTimes=Gr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function vh(r,s,a,c,f,g,v,A,x){return r=new pT(r,s,a,A,x),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Tn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(g),r}function mT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Ig(r){if(!r)return ii;r=r._reactInternals;e:{if(Pn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Yt(a))return Xp(r,a,s)}return s}function Sg(r,s,a,c,f,g,v,A,x){return r=vh(a,c,!0,r,f,g,v,A,x),r.context=Ig(null),a=r.current,c=Wt(),f=di(a),g=kr(c,f),g.callback=s??null,ai(a,g,f),r.current.lanes=f,Qr(r,f,c),Zt(r,c),r}function Lu(r,s,a,c){var f=s.current,g=Wt(),v=di(f);return a=Ig(a),s.context===null?s.context=a:s.pendingContext=a,s=kr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ai(f,s,v),r!==null&&(jn(r,f,v,g),du(r,f,v)),v}function Ou(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Rg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Eh(r,s){Rg(r,s),(r=r.alternate)&&Rg(r,s)}var Ag=typeof reportError=="function"?reportError:function(r){console.error(r)};function wh(r){this._internalRoot=r}Vu.prototype.render=wh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Lu(r,s,null,null)},Vu.prototype.unmount=wh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;rs(function(){Lu(null,r,null,null)}),s[Ir]=null}};function Vu(r){this._internalRoot=r}Vu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Vl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Yn.length&&s!==0&&s<Yn[a].priority;a++);Yn.splice(a,0,r),a===0&&Ul(r)}};function Th(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Mu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Cg(){}function gT(r,s,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var $=Ou(v);g.call($)}}var v=Sg(s,c,r,0,null,!1,!1,"",Cg);return r._reactRootContainer=v,r[Ir]=v.current,_a(r.nodeType===8?r.parentNode:r),rs(),v}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var A=c;c=function(){var $=Ou(x);A.call($)}}var x=vh(r,0,!1,null,null,!1,!1,"",Cg);return r._reactRootContainer=x,r[Ir]=x.current,_a(r.nodeType===8?r.parentNode:r),rs(function(){Lu(s,x,a,c)}),x}function Fu(r,s,a,c,f){var g=a._reactRootContainer;if(g){var v=g;if(typeof f=="function"){var A=f;f=function(){var x=Ou(v);A.call(x)}}Lu(s,v,r,f)}else v=gT(a,s,r,f,c);return Ou(v)}Ll=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Kr(s.pendingLanes);a!==0&&(Yr(s,a|1),Zt(s,We()),!(Ve&6)&&(go=We()+500,si()))}break;case 13:rs(function(){var c=Cr(r,1);if(c!==null){var f=Wt();jn(c,r,1,f)}}),Eh(r,1)}},zs=function(r){if(r.tag===13){var s=Cr(r,134217728);if(s!==null){var a=Wt();jn(s,r,134217728,a)}Eh(r,134217728)}},Ol=function(r){if(r.tag===13){var s=di(r),a=Cr(r,s);if(a!==null){var c=Wt();jn(a,r,s,c)}Eh(r,s)}},Vl=function(){return Ne},Ml=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Ns=function(r,s,a){switch(s){case"input":if($o(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var f=tu(c);if(!f)throw Error(t(90));Rs(c),$o(c,f)}}}break;case"textarea":Ps(r,a);break;case"select":s=a.value,s!=null&&mr(r,!!a.multiple,s,!1)}},Mi=fh,Zo=rs;var yT={usingClientEntryPoint:!1,Events:[wa,no,tu,Gn,Jo,fh]},Oa={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_T={bundleType:Oa.bundleType,version:Oa.version,rendererPackageName:Oa.rendererPackageName,rendererConfig:Oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=na(r),r===null?null:r.stateNode},findFiberByHostInstance:Oa.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Bi=Uu.inject(_T),rn=Uu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yT,en.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(s))throw Error(t(200));return mT(r,s,null,a)},en.createRoot=function(r,s){if(!Th(r))throw Error(t(299));var a=!1,c="",f=Ag;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=vh(r,1,!1,null,null,a,!1,c,f),r[Ir]=s.current,_a(r.nodeType===8?r.parentNode:r),new wh(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=na(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return rs(r)},en.hydrate=function(r,s,a){if(!Mu(s))throw Error(t(200));return Fu(null,r,s,!0,a)},en.hydrateRoot=function(r,s,a){if(!Th(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",v=Ag;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Sg(s,null,r,1,a??null,f,!1,g,v),r[Ir]=s.current,_a(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Vu(s)},en.render=function(r,s,a){if(!Mu(s))throw Error(t(200));return Fu(null,r,s,!1,a)},en.unmountComponentAtNode=function(r){if(!Mu(r))throw Error(t(40));return r._reactRootContainer?(rs(function(){Fu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ir]=null})}),!0):!1},en.unstable_batchedUpdates=fh,en.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Mu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Fu(r,s,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Og;function CT(){if(Og)return Rh.exports;Og=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Rh.exports=AT(),Rh.exports}var Vg;function kT(){if(Vg)return zu;Vg=1;var n=CT();return zu.createRoot=n.createRoot,zu.hydrateRoot=n.hydrateRoot,zu}var PT=kT(),Ma={},Mg;function xT(){if(Mg)return Ma;Mg=1,Object.defineProperty(Ma,"__esModule",{value:!0}),Ma.parse=d,Ma.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function d(S,N){const V=new l,z=S.length;if(z<2)return V;const L=(N==null?void 0:N.decode)||E;let H=0;do{const B=S.indexOf("=",H);if(B===-1)break;const K=S.indexOf(";",H),ee=K===-1?z:K;if(B>ee){H=S.lastIndexOf(";",B-1)+1;continue}const he=h(S,H,B),fe=p(S,B,he),k=S.slice(he,fe);if(V[k]===void 0){let T=h(S,B+1,ee),R=p(S,ee,T);const P=L(S.slice(T,R));V[k]=P}H=ee+1}while(H<z);return V}function h(S,N,V){do{const z=S.charCodeAt(N);if(z!==32&&z!==9)return N}while(++N<V);return V}function p(S,N,V){for(;N>V;){const z=S.charCodeAt(--N);if(z!==32&&z!==9)return N+1}return V}function y(S,N,V){const z=(V==null?void 0:V.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const L=z(N);if(!e.test(L))throw new TypeError(`argument val is invalid: ${N}`);let H=S+"="+L;if(!V)return H;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);H+="; Max-Age="+V.maxAge}if(V.domain){if(!t.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);H+="; Domain="+V.domain}if(V.path){if(!i.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);H+="; Path="+V.path}if(V.expires){if(!I(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);H+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&(H+="; HttpOnly"),V.secure&&(H+="; Secure"),V.partitioned&&(H+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return H}function E(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function I(S){return o.call(S)==="[object Date]"}return Ma}xT();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fg="popstate";function NT(n={}){function e(i,o){let{pathname:l,search:d,hash:h}=i.location;return Hh("",{pathname:l,search:d,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Xa(o)}return bT(e,t,null,n)}function tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function lr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DT(){return Math.random().toString(36).substring(2,10)}function Ug(n,e){return{usr:n.state,key:n.key,idx:e}}function Hh(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Lo(e):e,state:t,key:e&&e.key||i||DT()}}function Xa({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Lo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function bT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,d=o.history,h="POP",p=null,y=E();y==null&&(y=0,d.replaceState({...d.state,idx:y},""));function E(){return(d.state||{idx:null}).idx}function I(){h="POP";let L=E(),H=L==null?null:L-y;y=L,p&&p({action:h,location:z.location,delta:H})}function S(L,H){h="PUSH";let B=Hh(z.location,L,H);y=E()+1;let K=Ug(B,y),ee=z.createHref(B);try{d.pushState(K,"",ee)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;o.location.assign(ee)}l&&p&&p({action:h,location:z.location,delta:1})}function N(L,H){h="REPLACE";let B=Hh(z.location,L,H);y=E();let K=Ug(B,y),ee=z.createHref(B);d.replaceState(K,"",ee),l&&p&&p({action:h,location:z.location,delta:0})}function V(L){let H=o.location.origin!=="null"?o.location.origin:o.location.href,B=typeof L=="string"?L:Xa(L);return B=B.replace(/ $/,"%20"),tt(H,`No window.location.(origin|href) available to create URL for href: ${B}`),new URL(B,H)}let z={get action(){return h},get location(){return n(o,d)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Fg,I),p=L,()=>{o.removeEventListener(Fg,I),p=null}},createHref(L){return e(o,L)},createURL:V,encodeLocation(L){let H=V(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:S,replace:N,go(L){return d.go(L)}};return z}function h_(n,e,t="/"){return LT(n,e,t,!1)}function LT(n,e,t,i){let o=typeof e=="string"?Lo(e):e,l=Si(o.pathname||"/",t);if(l==null)return null;let d=f_(n);OT(d);let h=null;for(let p=0;h==null&&p<d.length;++p){let y=qT(l);h=HT(d[p],y,i)}return h}function f_(n,e=[],t=[],i=""){let o=(l,d,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:d,route:l};p.relativePath.startsWith("/")&&(tt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Or([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(tt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),f_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:BT(y,l.index),routesMeta:E})};return n.forEach((l,d)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,d);else for(let p of p_(l.path))o(l,d,p)}),e}function p_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let d=p_(i.join("/")),h=[];return h.push(...d.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...d),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function OT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:$T(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var VT=/^:[\w-]+$/,MT=3,FT=2,UT=1,zT=10,jT=-2,zg=n=>n==="*";function BT(n,e){let t=n.split("/"),i=t.length;return t.some(zg)&&(i+=jT),e&&(i+=FT),t.filter(o=>!zg(o)).reduce((o,l)=>o+(VT.test(l)?MT:l===""?UT:zT),i)}function $T(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function HT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",d=[];for(let h=0;h<i.length;++h){let p=i[h],y=h===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",I=sc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),S=p.route;if(!I&&y&&t&&!i[i.length-1].route.index&&(I=sc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!I)return null;Object.assign(o,I.params),d.push({params:o,pathname:Or([l,I.pathname]),pathnameBase:YT(Or([l,I.pathnameBase])),route:S}),I.pathnameBase!=="/"&&(l=Or([l,I.pathnameBase]))}return d}function sc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=WT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:I},S)=>{if(E==="*"){let V=h[S]||"";d=l.slice(0,l.length-V.length).replace(/(.)\/+$/,"$1")}const N=h[S];return I&&!N?y[E]=void 0:y[E]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:d,pattern:n}}function WT(n,e=!1,t=!0){lr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function qT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Si(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function KT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Lo(n):n;return{pathname:t?t.startsWith("/")?t:GT(t,e):e,search:XT(i),hash:JT(o)}}function GT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function kh(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function QT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function m_(n){let e=QT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function g_(n,e,t,i=!1){let o;typeof n=="string"?o=Lo(n):(o={...n},tt(!o.pathname||!o.pathname.includes("?"),kh("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),kh("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),kh("#","search","hash",o)));let l=n===""||o.pathname==="",d=l?"/":o.pathname,h;if(d==null)h=t;else{let I=e.length-1;if(!i&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),I-=1;o.pathname=S.join("/")}h=I>=0?e[I]:"/"}let p=KT(o,h),y=d&&d!=="/"&&d.endsWith("/"),E=(l||d===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Or=n=>n.join("/").replace(/\/\/+/g,"/"),YT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),XT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,JT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function ZT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var y_=["POST","PUT","PATCH","DELETE"];new Set(y_);var e0=["GET",...y_];new Set(e0);var Oo=W.createContext(null);Oo.displayName="DataRouter";var Ac=W.createContext(null);Ac.displayName="DataRouterState";var __=W.createContext({isTransitioning:!1});__.displayName="ViewTransition";var t0=W.createContext(new Map);t0.displayName="Fetchers";var n0=W.createContext(null);n0.displayName="Await";var hr=W.createContext(null);hr.displayName="Navigation";var cl=W.createContext(null);cl.displayName="Location";var $r=W.createContext({outlet:null,matches:[],isDataRoute:!1});$r.displayName="Route";var Tf=W.createContext(null);Tf.displayName="RouteError";function r0(n,{relative:e}={}){tt(dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=W.useContext(hr),{hash:o,pathname:l,search:d}=fl(n,{relative:e}),h=l;return t!=="/"&&(h=l==="/"?t:Or([t,l])),i.createHref({pathname:h,search:d,hash:o})}function dl(){return W.useContext(cl)!=null}function _s(){return tt(dl(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(cl).location}var v_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E_(n){W.useContext(hr).static||W.useLayoutEffect(n)}function hl(){let{isDataRoute:n}=W.useContext($r);return n?g0():i0()}function i0(){tt(dl(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Oo),{basename:e,navigator:t}=W.useContext(hr),{matches:i}=W.useContext($r),{pathname:o}=_s(),l=JSON.stringify(m_(i)),d=W.useRef(!1);return E_(()=>{d.current=!0}),W.useCallback((p,y={})=>{if(lr(d.current,v_),!d.current)return;if(typeof p=="number"){t.go(p);return}let E=g_(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Or([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}W.createContext(null);function fl(n,{relative:e}={}){let{matches:t}=W.useContext($r),{pathname:i}=_s(),o=JSON.stringify(m_(t));return W.useMemo(()=>g_(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function s0(n,e){return w_(n,e)}function w_(n,e,t,i){var H;tt(dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=W.useContext(hr),{matches:l}=W.useContext($r),d=l[l.length-1],h=d?d.params:{},p=d?d.pathname:"/",y=d?d.pathnameBase:"/",E=d&&d.route;{let B=E&&E.path||"";T_(p,!E||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let I=_s(),S;if(e){let B=typeof e=="string"?Lo(e):e;tt(y==="/"||((H=B.pathname)==null?void 0:H.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${B.pathname}" was given in the \`location\` prop.`),S=B}else S=I;let N=S.pathname||"/",V=N;if(y!=="/"){let B=y.replace(/^\//,"").split("/");V="/"+N.replace(/^\//,"").split("/").slice(B.length).join("/")}let z=h_(n,{pathname:V});lr(E||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),lr(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=c0(z&&z.map(B=>Object.assign({},B,{params:Object.assign({},h,B.params),pathname:Or([y,o.encodeLocation?o.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?y:Or([y,o.encodeLocation?o.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),l,t,i);return e&&L?W.createElement(cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},L):L}function o0(){let n=m0(),e=ZT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:l},"ErrorBoundary")," or"," ",W.createElement("code",{style:l},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,d)}var a0=W.createElement(o0,null),l0=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement($r.Provider,{value:this.props.routeContext},W.createElement(Tf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function u0({routeContext:n,match:e,children:t}){let i=W.useContext(Oo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement($r.Provider,{value:n},t)}function c0(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);tt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let d=!1,h=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=p),y.route.id){let{loaderData:E,errors:I}=t,S=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!I||I[y.route.id]===void 0);if(y.route.lazy||S){d=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let I,S=!1,N=null,V=null;t&&(I=l&&y.route.id?l[y.route.id]:void 0,N=y.route.errorElement||a0,d&&(h<0&&E===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,V=null):h===E&&(S=!0,V=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,E+1)),L=()=>{let H;return I?H=N:S?H=V:y.route.Component?H=W.createElement(y.route.Component,null):y.route.element?H=y.route.element:H=p,W.createElement(u0,{match:y,routeContext:{outlet:p,matches:z,isDataRoute:t!=null},children:H})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?W.createElement(l0,{location:t.location,revalidation:t.revalidation,component:N,error:I,children:L(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):L()},null)}function If(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d0(n){let e=W.useContext(Oo);return tt(e,If(n)),e}function h0(n){let e=W.useContext(Ac);return tt(e,If(n)),e}function f0(n){let e=W.useContext($r);return tt(e,If(n)),e}function Sf(n){let e=f0(n),t=e.matches[e.matches.length-1];return tt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function p0(){return Sf("useRouteId")}function m0(){var i;let n=W.useContext(Tf),e=h0("useRouteError"),t=Sf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function g0(){let{router:n}=d0("useNavigate"),e=Sf("useNavigate"),t=W.useRef(!1);return E_(()=>{t.current=!0}),W.useCallback(async(o,l={})=>{lr(t.current,v_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var jg={};function T_(n,e,t){!e&&!jg[n]&&(jg[n]=!0,lr(!1,t))}W.memo(y0);function y0({routes:n,future:e,state:t}){return w_(n,void 0,t,e)}function Ua(n){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _0({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){tt(!dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),h=W.useMemo(()=>({basename:d,navigator:o,static:l,future:{}}),[d,o,l]);typeof t=="string"&&(t=Lo(t));let{pathname:p="/",search:y="",hash:E="",state:I=null,key:S="default"}=t,N=W.useMemo(()=>{let V=Si(p,d);return V==null?null:{location:{pathname:V,search:y,hash:E,state:I,key:S},navigationType:i}},[d,p,y,E,I,S,i]);return lr(N!=null,`<Router basename="${d}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:W.createElement(hr.Provider,{value:h},W.createElement(cl.Provider,{children:e,value:N}))}function v0({children:n,location:e}){return s0(Wh(n),e)}function Wh(n,e=[]){let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,Wh(i.props.children,l));return}tt(i.type===Ua,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let d={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=Wh(i.props.children,l)),t.push(d)}),t}var Gu="get",Qu="application/x-www-form-urlencoded";function Cc(n){return n!=null&&typeof n.tagName=="string"}function E0(n){return Cc(n)&&n.tagName.toLowerCase()==="button"}function w0(n){return Cc(n)&&n.tagName.toLowerCase()==="form"}function T0(n){return Cc(n)&&n.tagName.toLowerCase()==="input"}function I0(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function S0(n,e){return n.button===0&&(!e||e==="_self")&&!I0(n)}var ju=null;function R0(){if(ju===null)try{new FormData(document.createElement("form"),0),ju=!1}catch{ju=!0}return ju}var A0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ph(n){return n!=null&&!A0.has(n)?(lr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qu}"`),null):n}function C0(n,e){let t,i,o,l,d;if(w0(n)){let h=n.getAttribute("action");i=h?Si(h,e):null,t=n.getAttribute("method")||Gu,o=Ph(n.getAttribute("enctype"))||Qu,l=new FormData(n)}else if(E0(n)||T0(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(i=p?Si(p,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||Gu,o=Ph(n.getAttribute("formenctype"))||Ph(h.getAttribute("enctype"))||Qu,l=new FormData(h,n),!R0()){let{name:y,type:E,value:I}=n;if(E==="image"){let S=y?`${y}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else y&&l.append(y,I)}}else{if(Cc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Gu,i=null,o=Qu,d=n}return l&&o==="text/plain"&&(d=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:d}}function Rf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function k0(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function P0(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function x0(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let d=await k0(l,t);return d.links?d.links():[]}return[]}));return L0(i.flat(1).filter(P0).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Bg(n,e,t,i,o,l){let d=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,h=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>d(p,y)||h(p,y)):l==="data"?e.filter((p,y)=>{var I;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(d(p,y)||h(p,y))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((I=t[0])==null?void 0:I.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function N0(n,e){return D0(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function D0(n){return[...new Set(n)]}function b0(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function L0(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(b0(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function O0(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function V0(){let n=W.useContext(Oo);return Rf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function M0(){let n=W.useContext(Ac);return Rf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Af=W.createContext(void 0);Af.displayName="FrameworkContext";function I_(){let n=W.useContext(Af);return Rf(n,"You must render this element inside a <HydratedRouter> element"),n}function F0(n,e){let t=W.useContext(Af),[i,o]=W.useState(!1),[l,d]=W.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:I}=e,S=W.useRef(null);W.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let z=H=>{H.forEach(B=>{d(B.isIntersecting)})},L=new IntersectionObserver(z,{threshold:.5});return S.current&&L.observe(S.current),()=>{L.disconnect()}}},[n]),W.useEffect(()=>{if(i){let z=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(z)}}},[i]);let N=()=>{o(!0)},V=()=>{o(!1),d(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:Fa(h,N),onBlur:Fa(p,V),onMouseEnter:Fa(y,N),onMouseLeave:Fa(E,V),onTouchStart:Fa(I,N)}]:[!1,S,{}]}function Fa(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function U0({page:n,...e}){let{router:t}=V0(),i=W.useMemo(()=>h_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?W.createElement(j0,{page:n,matches:i,...e}):null}function z0(n){let{manifest:e,routeModules:t}=I_(),[i,o]=W.useState([]);return W.useEffect(()=>{let l=!1;return x0(n,e,t).then(d=>{l||o(d)}),()=>{l=!0}},[n,e,t]),i}function j0({page:n,matches:e,...t}){let i=_s(),{manifest:o,routeModules:l}=I_(),{loaderData:d,matches:h}=M0(),p=W.useMemo(()=>Bg(n,e,h,o,i,"data"),[n,e,h,o,i]),y=W.useMemo(()=>Bg(n,e,h,o,i,"assets"),[n,e,h,o,i]),E=W.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let N=new Set,V=!1;if(e.forEach(L=>{var B;let H=o.routes[L.route.id];!H||!H.hasLoader||(!p.some(K=>K.route.id===L.route.id)&&L.route.id in d&&((B=l[L.route.id])!=null&&B.shouldRevalidate)||H.hasClientLoader?V=!0:N.add(L.route.id))}),N.size===0)return[];let z=O0(n);return V&&N.size>0&&z.searchParams.set("_routes",e.filter(L=>N.has(L.route.id)).map(L=>L.route.id).join(",")),[z.pathname+z.search]},[d,i,o,p,e,n,l]),I=W.useMemo(()=>N0(y,o),[y,o]),S=z0(y);return W.createElement(W.Fragment,null,E.map(N=>W.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),I.map(N=>W.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),S.map(({key:N,link:V})=>W.createElement("link",{key:N,...V})))}function B0(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var S_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S_&&(window.__reactRouterVersion="7.1.3")}catch{}function $0({basename:n,children:e,window:t}){let i=W.useRef();i.current==null&&(i.current=NT({window:t,v5Compat:!0}));let o=i.current,[l,d]=W.useState({action:o.action,location:o.location}),h=W.useCallback(p=>{W.startTransition(()=>d(p))},[d]);return W.useLayoutEffect(()=>o.listen(h),[o,h]),W.createElement(_0,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var R_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oc=W.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:d,state:h,target:p,to:y,preventScrollReset:E,viewTransition:I,...S},N){let{basename:V}=W.useContext(hr),z=typeof y=="string"&&R_.test(y),L,H=!1;if(typeof y=="string"&&z&&(L=y,S_))try{let R=new URL(window.location.href),P=y.startsWith("//")?new URL(R.protocol+y):new URL(y),D=Si(P.pathname,V);P.origin===R.origin&&D!=null?y=D+P.search+P.hash:H=!0}catch{lr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=r0(y,{relative:o}),[K,ee,he]=F0(i,S),fe=K0(y,{replace:d,state:h,target:p,preventScrollReset:E,relative:o,viewTransition:I});function k(R){e&&e(R),R.defaultPrevented||fe(R)}let T=W.createElement("a",{...S,...he,href:L||B,onClick:H||l?e:k,ref:B0(N,ee),target:p,"data-discover":!z&&t==="render"?"true":void 0});return K&&!z?W.createElement(W.Fragment,null,T,W.createElement(U0,{page:B})):T});oc.displayName="Link";var H0=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:d,viewTransition:h,children:p,...y},E){let I=fl(d,{relative:y.relative}),S=_s(),N=W.useContext(Ac),{navigator:V,basename:z}=W.useContext(hr),L=N!=null&&J0(I)&&h===!0,H=V.encodeLocation?V.encodeLocation(I).pathname:I.pathname,B=S.pathname,K=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(B=B.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&z&&(K=Si(K,z)||K);const ee=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let he=B===H||!o&&B.startsWith(H)&&B.charAt(ee)==="/",fe=K!=null&&(K===H||!o&&K.startsWith(H)&&K.charAt(H.length)==="/"),k={isActive:he,isPending:fe,isTransitioning:L},T=he?e:void 0,R;typeof i=="function"?R=i(k):R=[i,he?"active":null,fe?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(k):l;return W.createElement(oc,{...y,"aria-current":T,className:R,ref:E,style:P,to:d,viewTransition:h},typeof p=="function"?p(k):p)});H0.displayName="NavLink";var W0=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:d=Gu,action:h,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:I,...S},N)=>{let V=Y0(),z=X0(h,{relative:y}),L=d.toLowerCase()==="get"?"get":"post",H=typeof h=="string"&&R_.test(h),B=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let ee=K.nativeEvent.submitter,he=(ee==null?void 0:ee.getAttribute("formmethod"))||d;V(ee||K.currentTarget,{fetcherKey:e,method:he,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:I})};return W.createElement("form",{ref:N,method:L,action:z,onSubmit:i?p:B,...S,"data-discover":!H&&n==="render"?"true":void 0})});W0.displayName="Form";function q0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A_(n){let e=W.useContext(Oo);return tt(e,q0(n)),e}function K0(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:d}={}){let h=hl(),p=_s(),y=fl(n,{relative:l});return W.useCallback(E=>{if(S0(E,e)){E.preventDefault();let I=t!==void 0?t:Xa(p)===Xa(y);h(n,{replace:I,state:i,preventScrollReset:o,relative:l,viewTransition:d})}},[p,h,y,t,i,e,n,o,l,d])}var G0=0,Q0=()=>`__${String(++G0)}__`;function Y0(){let{router:n}=A_("useSubmit"),{basename:e}=W.useContext(hr),t=p0();return W.useCallback(async(i,o={})=>{let{action:l,method:d,encType:h,formData:p,body:y}=C0(i,e);if(o.navigate===!1){let E=o.fetcherKey||Q0();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||d,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||d,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function X0(n,{relative:e}={}){let{basename:t}=W.useContext(hr),i=W.useContext($r);tt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...fl(n||".",{relative:e})},d=_s();if(n==null){l.search=d.search;let h=new URLSearchParams(l.search),p=h.getAll("index");if(p.some(E=>E==="")){h.delete("index"),p.filter(I=>I).forEach(I=>h.append("index",I));let E=h.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Or([t,l.pathname])),Xa(l)}function J0(n,e={}){let t=W.useContext(__);tt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=A_("useViewTransitionState"),o=fl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Si(t.currentLocation.pathname,i)||t.currentLocation.pathname,d=Si(t.nextLocation.pathname,i)||t.nextLocation.pathname;return sc(o.pathname,d)!=null||sc(o.pathname,l)!=null}new TextEncoder;function kc(){return se.jsx(se.Fragment,{children:se.jsx("nav",{children:se.jsxs("ul",{className:"flex justify-center gap-10 bg-gray-800 text-white p-4",children:[se.jsx("li",{children:se.jsx(oc,{to:"/dentist/register",children:"Reginster"})}),se.jsx("li",{children:se.jsx(oc,{to:"/dentist/Login",children:"Login"})})]})})})}var $g={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Z0=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],d=n[t++],h=n[t++],p=((o&7)<<18|(l&63)<<12|(d&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],d=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|d&63)}}return e.join("")},k_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],d=o+1<n.length,h=d?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,I=(l&3)<<4|h>>4;let S=(h&15)<<2|y>>6,N=y&63;p||(N=64,d||(S=64)),i.push(t[E],t[I],t[S],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(C_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Z0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||y==null||I==null)throw new eI;const S=l<<2|h>>4;if(i.push(S),y!==64){const N=h<<4&240|y>>2;if(i.push(N),I!==64){const V=y<<6&192|I;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tI=function(n){const e=C_(n);return k_.encodeByteArray(e,!0)},ac=function(n){return tI(n).replace(/\./g,"")},P_=function(n){try{return k_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=()=>nI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof $g>"u")return;const n=$g.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&P_(n[1]);return e&&JSON.parse(e)},Pc=()=>{try{return rI()||iI()||sI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},x_=n=>{var e,t;return(t=(e=Pc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},oI=n=>{const e=x_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},N_=()=>{var n;return(n=Pc())===null||n===void 0?void 0:n.config},D_=n=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ac(JSON.stringify(t)),ac(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function cI(){var n;const e=(n=Pc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function b_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fI(){const n=jt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pI(){return!cI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function L_(){try{return typeof indexedDB=="object"}catch{return!1}}function O_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function mI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="FirebaseError";class qn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=gI,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],d=l?yI(l,i):"Error",h=`${this.serviceName}: ${d} (${o}).`;return new qn(o,h,i)}}function yI(n,e){return n.replace(_I,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const _I=/\{\$([^}]+)}/g;function vI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ja(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],d=e[o];if(Hg(l)&&Hg(d)){if(!Ja(l,d))return!1}else if(l!==d)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Hg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function ja(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function EI(n,e){const t=new wI(n,e);return t.subscribe.bind(t)}class wI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");TI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=xh),o.error===void 0&&(o.error=xh),o.complete===void 0&&(o.complete=xh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=1e3,SI=2,RI=4*60*60*1e3,AI=.5;function Wg(n,e=II,t=SI){const i=e*Math.pow(t,n),o=Math.round(AI*i*(Math.random()-.5)*2);return Math.min(RI,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(n){return n&&n._delegate?n._delegate:n}class Wn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new aI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PI(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,d]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&d.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const d=this.instances.get(o);return d&&e(d,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kI(n){return n===as?void 0:n}function PI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new CI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const NI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},DI=ke.INFO,bI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},LI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=bI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xc{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=LI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const OI=(n,e)=>e.some(t=>n instanceof t);let qg,Kg;function VI(){return qg||(qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MI(){return Kg||(Kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V_=new WeakMap,qh=new WeakMap,M_=new WeakMap,Nh=new WeakMap,Cf=new WeakMap;function FI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",d)},l=()=>{t(Ei(n.result)),o()},d=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",d)});return e.then(t=>{t instanceof IDBCursor&&V_.set(t,n)}).catch(()=>{}),Cf.set(e,n),e}function UI(n){if(qh.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",d),n.removeEventListener("abort",d)},l=()=>{t(),o()},d=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",d),n.addEventListener("abort",d)});qh.set(n,e)}let Kh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||M_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ei(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zI(n){Kh=n(Kh)}function jI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Dh(this),e,...t);return M_.set(i,e.sort?e.sort():[e]),Ei(i)}:MI().includes(n)?function(...e){return n.apply(Dh(this),e),Ei(V_.get(this))}:function(...e){return Ei(n.apply(Dh(this),e))}}function BI(n){return typeof n=="function"?jI(n):(n instanceof IDBTransaction&&UI(n),OI(n,VI())?new Proxy(n,Kh):n)}function Ei(n){if(n instanceof IDBRequest)return FI(n);if(Nh.has(n))return Nh.get(n);const e=BI(n);return e!==n&&(Nh.set(n,e),Cf.set(e,n)),e}const Dh=n=>Cf.get(n);function F_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const d=indexedDB.open(n,e),h=Ei(d);return i&&d.addEventListener("upgradeneeded",p=>{i(Ei(d.result),p.oldVersion,p.newVersion,Ei(d.transaction),p)}),t&&d.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),h}const $I=["get","getKey","getAll","getAllKeys","count"],HI=["put","add","delete","clear"],bh=new Map;function Gg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bh.get(e))return bh.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=HI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||$I.includes(t)))return;const l=async function(d,...h){const p=this.transaction(d,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(h.shift())),(await Promise.all([y[t](...h),o&&p.done]))[0]};return bh.set(e,l),l}zI(n=>({...n,get:(e,t,i)=>Gg(e,t)||n.get(e,t,i),has:(e,t)=>!!Gg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function qI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gh="@firebase/app",Qg="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new xc("@firebase/app"),KI="@firebase/app-compat",GI="@firebase/analytics-compat",QI="@firebase/analytics",YI="@firebase/app-check-compat",XI="@firebase/app-check",JI="@firebase/auth",ZI="@firebase/auth-compat",eS="@firebase/database",tS="@firebase/data-connect",nS="@firebase/database-compat",rS="@firebase/functions",iS="@firebase/functions-compat",sS="@firebase/installations",oS="@firebase/installations-compat",aS="@firebase/messaging",lS="@firebase/messaging-compat",uS="@firebase/performance",cS="@firebase/performance-compat",dS="@firebase/remote-config",hS="@firebase/remote-config-compat",fS="@firebase/storage",pS="@firebase/storage-compat",mS="@firebase/firestore",gS="@firebase/vertexai",yS="@firebase/firestore-compat",_S="firebase",vS="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="[DEFAULT]",ES={[Gh]:"fire-core",[KI]:"fire-core-compat",[QI]:"fire-analytics",[GI]:"fire-analytics-compat",[XI]:"fire-app-check",[YI]:"fire-app-check-compat",[JI]:"fire-auth",[ZI]:"fire-auth-compat",[eS]:"fire-rtdb",[tS]:"fire-data-connect",[nS]:"fire-rtdb-compat",[rS]:"fire-fn",[iS]:"fire-fn-compat",[sS]:"fire-iid",[oS]:"fire-iid-compat",[aS]:"fire-fcm",[lS]:"fire-fcm-compat",[uS]:"fire-perf",[cS]:"fire-perf-compat",[dS]:"fire-rc",[hS]:"fire-rc-compat",[fS]:"fire-gcs",[pS]:"fire-gcs-compat",[mS]:"fire-fst",[yS]:"fire-fst-compat",[gS]:"fire-vertex","fire-js":"fire-js",[_S]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map,wS=new Map,Yh=new Map;function Yg(n,e){try{n.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(Yh.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;Yh.set(e,n);for(const t of lc.values())Yg(t,n);for(const t of wS.values())Yg(t,n);return!0}function Es(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wi=new vs("app","Firebase",TS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=vS;function U_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Qh,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw wi.create("bad-app-name",{appName:String(o)});if(t||(t=N_()),!t)throw wi.create("no-options");const l=lc.get(o);if(l){if(Ja(t,l.options)&&Ja(i,l.config))return l;throw wi.create("duplicate-app",{appName:o})}const d=new xI(o);for(const p of Yh.values())d.addComponent(p);const h=new IS(t,i,d);return lc.set(o,h),h}function kf(n=Qh){const e=lc.get(n);if(!e&&n===Qh&&N_())return U_();if(!e)throw wi.create("no-app",{appName:n});return e}function Sn(n,e,t){var i;let o=(i=ES[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),d=e.match(/\s|\//);if(l||d){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&d&&h.push("and"),d&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(h.join(" "));return}ur(new Wn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="firebase-heartbeat-database",RS=1,Za="firebase-heartbeat-store";let Lh=null;function z_(){return Lh||(Lh=F_(SS,RS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Za)}catch(t){console.warn(t)}}}}).catch(n=>{throw wi.create("idb-open",{originalErrorMessage:n.message})})),Lh}async function AS(n){try{const t=(await z_()).transaction(Za),i=await t.objectStore(Za).get(j_(n));return await t.done,i}catch(e){if(e instanceof qn)Fr.warn(e.message);else{const t=wi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(t.message)}}}async function Xg(n,e){try{const i=(await z_()).transaction(Za,"readwrite");await i.objectStore(Za).put(e,j_(n)),await i.done}catch(t){if(t instanceof qn)Fr.warn(t.message);else{const i=wi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fr.warn(i.message)}}}function j_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=1024,kS=30*24*60*60*1e3;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Jg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(d=>d.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const h=new Date(d.date).valueOf();return Date.now()-h<=kS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Fr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jg(),{heartbeatsToSend:i,unsentEntries:o}=xS(this._heartbeatsCache.heartbeats),l=ac(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Fr.warn(t),""}}}function Jg(){return new Date().toISOString().substring(0,10)}function xS(n,e=CS){const t=[];let i=n.slice();for(const o of n){const l=t.find(d=>d.agent===o.agent);if(l){if(l.dates.push(o.date),Zg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Zg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class NS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L_()?O_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await AS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Zg(n){return ac(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(n){ur(new Wn("platform-logger",e=>new WI(e),"PRIVATE")),ur(new Wn("heartbeat",e=>new PS(e),"PRIVATE")),Sn(Gh,Qg,n),Sn(Gh,Qg,"esm2017"),Sn("fire-js","")}DS("");function Pf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function B_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bS=B_,$_=new vs("auth","Firebase",B_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new xc("@firebase/auth");function LS(n,...e){uc.logLevel<=ke.WARN&&uc.warn(`Auth (${Vo}): ${n}`,...e)}function Yu(n,...e){uc.logLevel<=ke.ERROR&&uc.error(`Auth (${Vo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n,...e){throw Nf(n,...e)}function Hn(n,...e){return Nf(n,...e)}function xf(n,e,t){const i=Object.assign(Object.assign({},bS()),{[e]:t});return new vs("auth","Firebase",i).create(e,{appName:n.name})}function Vr(n){return xf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function OS(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&An(n,"argument-error"),xf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return $_.create(n,...e)}function Ee(n,e,...t){if(!n)throw Nf(e,...t)}function Dr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yu(e),new Error(e)}function Ur(n,e){n||Dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function VS(){return ey()==="http:"||ey()==="https:"}function ey(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VS()||b_()||"connection"in navigator)?navigator.onLine:!0}function FS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=uI()||hI()}get(){return MS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n,e){Ur(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new ml(3e4,6e4);function xi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ni(n,e,t,i,o={}){return W_(n,o,async()=>{let l={},d={};i&&(e==="GET"?d=i:l={body:JSON.stringify(i)});const h=pl(Object.assign({key:n.config.apiKey},d)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return dI()||(y.referrerPolicy="no-referrer"),H_.fetch()(q_(n,n.config.apiHost,t,h),y)})}async function W_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},US),e);try{const o=new BS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const d=await l.json();if("needConfirmation"in d)throw Bu(n,"account-exists-with-different-credential",d);if(l.ok&&!("errorMessage"in d))return d;{const h=l.ok?d.errorMessage:d.error.message,[p,y]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bu(n,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw Bu(n,"email-already-in-use",d);if(p==="USER_DISABLED")throw Bu(n,"user-disabled",d);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw xf(n,E,y);An(n,E)}}catch(o){if(o instanceof qn)throw o;An(n,"network-request-failed",{message:String(o)})}}async function gl(n,e,t,i,o={}){const l=await Ni(n,e,t,i,o);return"mfaPendingCredential"in l&&An(n,"multi-factor-auth-required",{_serverResponse:l}),l}function q_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Df(n.config,o):`${n.config.apiScheme}://${o}`}function jS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Hn(this.auth,"network-request-failed")),zS.get())})}}function Bu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Hn(n,e,i);return o.customData._tokenResponse=t,o}function ty(n){return n!==void 0&&n.enterprise!==void 0}class $S{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HS(n,e){return Ni(n,"GET","/v2/recaptchaConfig",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(n,e){return Ni(n,"POST","/v1/accounts:delete",e)}async function K_(n,e){return Ni(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qS(n,e=!1){const t=hn(n),i=await t.getIdToken(e),o=bf(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,d=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Wa(Oh(o.auth_time)),issuedAtTime:Wa(Oh(o.iat)),expirationTime:Wa(Oh(o.exp)),signInProvider:d||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Oh(n){return Number(n)*1e3}function bf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Yu("JWT malformed, contained fewer than 3 sections"),null;try{const o=P_(t);return o?JSON.parse(o):(Yu("Failed to decode base64 JWT payload"),null)}catch(o){return Yu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ny(n){const e=bf(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof qn&&KS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function KS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await el(n,K_(t,{idToken:i}));Ee(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const d=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?G_(l.providerUserInfo):[],h=YS(n.providerData,d),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(h!=null&&h.length),E=p?y:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Jh(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,I)}async function QS(n){const e=hn(n);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function G_(n){return n.map(e=>{var{providerId:t}=e,i=Pf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(n,e){const t=await W_(n,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,d=q_(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",H_.fetch()(d,{method:"POST",headers:h,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function JS(n,e){return Ni(n,"POST","/v2/accounts:revokeToken",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=ny(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await XS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,d=new To;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),d.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),d.expirationTime=l),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class br{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Jh(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await el(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qS(this,e)}reload(){return QS(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bn(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await el(this,WS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,d,h,p,y,E;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(d=t.photoURL)!==null&&d!==void 0?d:void 0,z=(h=t.tenantId)!==null&&h!==void 0?h:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,B=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:K,emailVerified:ee,isAnonymous:he,providerData:fe,stsTokenManager:k}=t;Ee(K&&k,e,"internal-error");const T=To.fromJSON(this.name,k);Ee(typeof K=="string",e,"internal-error"),mi(I,e.name),mi(S,e.name),Ee(typeof ee=="boolean",e,"internal-error"),Ee(typeof he=="boolean",e,"internal-error"),mi(N,e.name),mi(V,e.name),mi(z,e.name),mi(L,e.name),mi(H,e.name),mi(B,e.name);const R=new br({uid:K,auth:e,email:S,emailVerified:ee,displayName:I,isAnonymous:he,photoURL:V,phoneNumber:N,tenantId:z,stsTokenManager:T,createdAt:H,lastLoginAt:B});return fe&&Array.isArray(fe)&&(R.providerData=fe.map(P=>Object.assign({},P))),L&&(R._redirectEventId=L),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new To;o.updateFromServerResponse(t);const l=new br({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await cc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?G_(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new To;h.updateFromIdToken(i);const p=new br({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:d}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Jh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new Map;function Lr(n){Ur(n instanceof Function,"Expected a class definition");let e=ry.get(n);return e?(Ur(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ry.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Q_.type="NONE";const iy=Q_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n,e,t){return`firebase:${n}:${e}:${t}`}class Io{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Xu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Xu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Io(Lr(iy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Lr(iy);const d=Xu(i,e.config.apiKey,e.name);let h=null;for(const y of t)try{const E=await y._get(d);if(E){const I=br._fromJSON(e,E);y!==l&&(h=I),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Io(l,e,i):(l=p[0],h&&await l._set(d,h.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(d)}catch{}})),new Io(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Y_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(X_(e))return"Safari";if((e.includes("chrome/")||J_(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Y_(n=jt()){return/firefox\//i.test(n)}function X_(n=jt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function J_(n=jt()){return/crios\//i.test(n)}function Z_(n=jt()){return/iemobile/i.test(n)}function ev(n=jt()){return/android/i.test(n)}function tv(n=jt()){return/blackberry/i.test(n)}function nv(n=jt()){return/webos/i.test(n)}function Lf(n=jt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ZS(n=jt()){var e;return Lf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eR(){return fI()&&document.documentMode===10}function rv(n=jt()){return Lf(n)||ev(n)||nv(n)||tv(n)||/windows phone/i.test(n)||Z_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n,e=[]){let t;switch(n){case"Browser":t=sy(jt());break;case"Worker":t=`${sy(jt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((d,h)=>{try{const p=e(l);d(p)}catch(p){h(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(n,e={}){return Ni(n,"GET","/v2/passwordPolicy",xi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=6;class iR{constructor(e){var t,i,o,l;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=d.minPasswordLength)!==null&&t!==void 0?t:rR,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,d,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new tR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await K_(this,{idToken:e}),i=await br._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Bn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===h)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(d){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bn(this.app))return Promise.reject(Vr(this));const t=e?hn(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bn(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bn(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nR(this),t=new iR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await JS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[Lr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let d=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(h,this,"internal-error"),h.then(()=>{d||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{d=!0,p()}}else{const p=e.addObserver(t);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&LS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Di(n){return hn(n)}class oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=EI(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oR(n){Nc=n}function sv(n){return Nc.loadJS(n)}function aR(){return Nc.recaptchaEnterpriseScript}function lR(){return Nc.gapiScript}function uR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class cR{constructor(){this.enterprise=new dR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const hR="recaptcha-enterprise",ov="NO_RECAPTCHA";class fR{constructor(e){this.type=hR,this.auth=Di(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(d,h)=>{HS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const y=new $S(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,d(y.siteKey)}}).catch(p=>{h(p)})})}function o(l,d,h){const p=window.grecaptcha;ty(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{d(y)}).catch(()=>{d(ov)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cR().execute("siteKey",{action:"verify"}):new Promise((l,d)=>{i(this.auth).then(h=>{if(!t&&ty(window.grecaptcha))o(h,l,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=aR();p.length!==0&&(p+=h),sv(p).then(()=>{o(h,l,d)}).catch(y=>{d(y)})}}).catch(h=>{d(h)})})}}async function ay(n,e,t,i=!1,o=!1){const l=new fR(n);let d;if(o)d=ov;else try{d=await l.verify(t)}catch{d=await l.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,y=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:d}):Object.assign(h,{captchaResponse:d}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Zh(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await ay(n,e,t,t==="getOobCode");return i(n,d)}else return i(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ay(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(n,e){const t=Es(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ja(l,e??{}))return o;An(o,"already-initialized")}return t.initialize({options:e})}function mR(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Lr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gR(n,e,t){const i=Di(n);Ee(i._canInitEmulator,i,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=av(e),{host:d,port:h}=yR(e),p=h===null?"":`:${h}`;i.config.emulator={url:`${l}//${d}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:d,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),_R()}function av(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yR(n){const e=av(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:ly(i.substr(l.length+1))}}else{const[l,d]=i.split(":");return{host:l,port:ly(d)}}}function ly(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _R(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}async function vR(n,e){return Ni(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(n,e){return gl(n,"POST","/v1/accounts:signInWithPassword",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(n,e){return gl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}async function TR(n,e){return gl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Of{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new tl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new tl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,t,"signInWithPassword",ER);case"emailLink":return wR(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,i,"signUpPassword",vR);case"emailLink":return TR(e,{idToken:t,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(n,e){return gl(n,"POST","/v1/accounts:signInWithIdp",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="http://localhost";class hs extends Of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):An("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Pf(t,["providerId","signInMethod"]);if(!i||!o)return null;const d=new hs(i,o);return d.idToken=l.idToken||void 0,d.accessToken=l.accessToken||void 0,d.secret=l.secret,d.nonce=l.nonce,d.pendingToken=l.pendingToken||null,d}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,So(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:IR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RR(n){const e=za(ja(n)).link,t=e?za(ja(e)).deep_link_id:null,i=za(ja(n)).deep_link_id;return(i?za(ja(i)).link:null)||i||t||e||n}class Vf{constructor(e){var t,i,o,l,d,h;const p=za(ja(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,I=SR((o=p.mode)!==null&&o!==void 0?o:null);Ee(y&&E&&I,"argument-error"),this.apiKey=y,this.operation=I,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(d=p.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=RR(e);try{return new Vf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.providerId=Mo.PROVIDER_ID}static credential(e,t){return tl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Vf.parseLink(t);return Ee(i,"argument-error"),tl._fromEmailAndCode(e,i.code,i.tenantId)}}Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends Mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends yl{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Nr.credential(t,i)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends yl{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.GITHUB_SIGN_IN_METHOD="github.com";yi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends yl{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return _i.credential(t,i)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(n,e){return gl(n,"POST","/v1/accounts:signUp",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await br._fromIdTokenResponse(e,i,o),d=uy(i);return new fs({user:l,providerId:d,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=uy(i);return new fs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function uy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends qn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new dc(e,t,i,o)}}function lv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(n,l,e,i):l})}async function CR(n,e,t=!1){const i=await el(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(n,e,t=!1){const{auth:i}=n;if(Bn(i.app))return Promise.reject(Vr(i));const o="reauthenticate";try{const l=await el(n,lv(i,o,e,n),t);Ee(l.idToken,i,"internal-error");const d=bf(l.idToken);Ee(d,i,"internal-error");const{sub:h}=d;return Ee(n.uid===h,i,"user-mismatch"),fs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&An(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(n,e,t=!1){if(Bn(n.app))return Promise.reject(Vr(n));const i="signIn",o=await lv(n,i,e),l=await fs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function PR(n,e){return uv(Di(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(n){const e=Di(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xR(n,e,t){if(Bn(n.app))return Promise.reject(Vr(n));const i=Di(n),d=await Zh(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",AR).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&cv(n),p}),h=await fs._fromIdTokenResponse(i,"signIn",d);return await i._updateCurrentUser(h.user),h}function NR(n,e,t){return Bn(n.app)?Promise.reject(Vr(n)):PR(hn(n),Mo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&cv(n),i})}function DR(n,e,t,i){return hn(n).onIdTokenChanged(e,t,i)}function bR(n,e,t){return hn(n).beforeAuthStateChanged(e,t)}const hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=1e3,OR=10;class hv extends dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((d,h,p)=>{this.notifyListeners(d,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(i);!t&&this.localCache[i]===d||this.notifyListeners(i,d)},l=this.storage.getItem(i);eR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,OR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},LR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hv.type="LOCAL";const VR=hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv extends dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fv.type="SESSION";const pv=fv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Dc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,d=this.handlersMap[o];if(!(d!=null&&d.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(d).map(async y=>y(t.origin,l)),p=await MR(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,d;return new Promise((h,p)=>{const y=Ff("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);d={messageChannel:o,onMessage(I){const S=I;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(S.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function UR(n){sr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function zR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function BR(){return mv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="firebaseLocalStorageDb",$R=1,fc="firebaseLocalStorage",yv="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bc(n,e){return n.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function HR(){const n=indexedDB.deleteDatabase(gv);return new _l(n).toPromise()}function ef(){const n=indexedDB.open(gv,$R);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(fc,{keyPath:yv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(fc)?e(i):(i.close(),await HR(),e(await ef()))})})}async function cy(n,e,t){const i=bc(n,!0).put({[yv]:e,value:t});return new _l(i).toPromise()}async function WR(n,e){const t=bc(n,!1).get(e),i=await new _l(t).toPromise();return i===void 0?null:i.value}function dy(n,e){const t=bc(n,!0).delete(e);return new _l(t).toPromise()}const qR=800,KR=3;class _v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ef(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>KR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(BR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zR(),!this.activeServiceWorker)return;this.sender=new FR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ef();return await cy(e,hc,"1"),await dy(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>cy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>WR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=bc(o,!1).getAll();return new _l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_v.type="LOCAL";const GR=_v;new ml(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n,e){return e?Lr(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends Of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function QR(n){return uv(n.auth,new Uf(n),n.bypassAuthState)}function YR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),kR(t,new Uf(n),n.bypassAuthState)}async function XR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),CR(t,new Uf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:d,type:h}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QR;case"linkViaPopup":case"linkViaRedirect":return XR;case"reauthViaPopup":case"reauthViaRedirect":return YR;default:An(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new ml(2e3,1e4);async function ZR(n,e,t){if(Bn(n.app))return Promise.reject(Hn(n,"operation-not-supported-in-this-environment"));const i=Di(n);OS(n,e,Mf);const o=vv(i,t);return new ls(i,"signInViaPopup",e,o).executeNotNull()}class ls extends Ev{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JR.get())};e()}}ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="pendingRedirect",Ju=new Map;class tA extends Ev{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ju.get(this.auth._key());if(!e){try{const i=await nA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ju.set(this.auth._key(),e)}return this.bypassAuthState||Ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nA(n,e){const t=sA(e),i=iA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function rA(n,e){Ju.set(n._key(),e)}function iA(n){return Lr(n._redirectPersistence)}function sA(n){return Xu(eA,n.config.apiKey,n.name)}async function oA(n,e,t=!1){if(Bn(n.app))return Promise.reject(Vr(n));const i=Di(n),o=vv(i,e),d=await new tA(i,o,t).execute();return d&&!t&&(delete d.user._redirectEventId,await i._persistUserIfCurrent(d.user),await i._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=10*60*1e3;class lA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!wv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Hn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aA&&this.cachedEventUids.clear(),this.cachedEventUids.has(hy(e))}saveEventToCache(e){this.cachedEventUids.add(hy(e)),this.lastProcessedEventTime=Date.now()}}function hy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(n,e={}){return Ni(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hA=/^https?/;async function fA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cA(n);for(const t of e)try{if(pA(t))return}catch{}An(n,"unauthorized-domain")}function pA(n){const e=Xh(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const d=new URL(n);return d.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&d.hostname===i}if(!hA.test(t))return!1;if(dA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new ml(3e4,6e4);function fy(){const n=sr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function gA(n){return new Promise((e,t)=>{var i,o,l;function d(){fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fy(),t(Hn(n,"network-request-failed"))},timeout:mA.get()})}if(!((o=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)d();else{const h=uR("iframefcb");return sr()[h]=()=>{gapi.load?d():t(Hn(n,"network-request-failed"))},sv(`${lR()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw Zu=null,e})}let Zu=null;function yA(n){return Zu=Zu||gA(n),Zu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new ml(5e3,15e3),vA="__/auth/iframe",EA="emulator/auth/iframe",wA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IA(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Df(e,EA):`https://${n.config.authDomain}/${vA}`,i={apiKey:e.apiKey,appName:n.name,v:Vo},o=TA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function SA(n){const e=await yA(n),t=sr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:IA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const d=Hn(n,"network-request-failed"),h=sr().setTimeout(()=>{l(d)},_A.get());function p(){sr().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{l(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AA=500,CA=600,kA="_blank",PA="http://localhost";class py{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xA(n,e,t,i=AA,o=CA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},RA),{width:i.toString(),height:o.toString(),top:l,left:d}),y=jt().toLowerCase();t&&(h=J_(y)?kA:t),Y_(y)&&(e=e||PA,p.scrollbars="yes");const E=Object.entries(p).reduce((S,[N,V])=>`${S}${N}=${V},`,"");if(ZS(y)&&h!=="_self")return NA(e||"",h),new py(null);const I=window.open(e||"",h,E);Ee(I,n,"popup-blocked");try{I.focus()}catch{}return new py(I)}function NA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="__/auth/handler",bA="emulator/auth/handler",LA=encodeURIComponent("fac");async function my(n,e,t,i,o,l){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const d={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Vo,eventId:o};if(e instanceof Mf){e.setDefaultLanguage(n.languageCode),d.providerId=e.providerId||"",vI(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))d[E]=I}if(e instanceof yl){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(d.scopes=E.join(","))}n.tenantId&&(d.tid=n.tenantId);const h=d;for(const E of Object.keys(h))h[E]===void 0&&delete h[E];const p=await n._getAppCheckToken(),y=p?`#${LA}=${encodeURIComponent(p)}`:"";return`${OA(n)}?${pl(h).slice(1)}${y}`}function OA({config:n}){return n.emulator?Df(n,bA):`https://${n.authDomain}/${DA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="webStorageSupport";class VA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pv,this._completeRedirectFn=oA,this._overrideRedirectResult=rA}async _openPopup(e,t,i,o){var l;Ur((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const d=await my(e,t,i,Xh(),o);return xA(e,d,Ff())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await my(e,t,i,Xh(),o);return UR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Ur(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await SA(e),i=new lA(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vh,{type:Vh},o=>{var l;const d=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Vh];d!==void 0&&t(!!d),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rv()||X_()||Lf()}}const MA=VA;var gy="@firebase/auth",yy="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zA(n){ur(new Wn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:d,authDomain:h}=i.options;Ee(d&&!d.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:d,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iv(n)},y=new sR(i,o,l,p);return mR(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new Wn("auth-internal",e=>{const t=Di(e.getProvider("auth").getImmediate());return(i=>new FA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(gy,yy,UA(n)),Sn(gy,yy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=5*60,BA=D_("authIdTokenMaxAge")||jA;let _y=null;const $A=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>BA)return;const o=t==null?void 0:t.token;_y!==o&&(_y=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function HA(n=kf()){const e=Es(n,"auth");if(e.isInitialized())return e.getImmediate();const t=pR(n,{popupRedirectResolver:MA,persistence:[GR,VR,pv]}),i=D_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const d=$A(l.toString());bR(t,d,()=>d(t.currentUser)),DR(t,h=>d(h))}}const o=x_("auth");return o&&gR(t,`http://${o}`),t}function WA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oR({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Hn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",WA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zA("Browser");var qA="firebase",KA="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(qA,KA,"app");const Tv="@firebase/installations",zf="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=1e4,Sv=`w:${zf}`,Rv="FIS_v2",GA="https://firebaseinstallations.googleapis.com/v1",QA=60*60*1e3,YA="installations",XA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ps=new vs(YA,XA,JA);function Av(n){return n instanceof qn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv({projectId:n}){return`${GA}/projects/${n}/installations`}function kv(n){return{token:n.token,requestStatus:2,expiresIn:eC(n.expiresIn),creationTime:Date.now()}}async function Pv(n,e){const i=(await e.json()).error;return ps.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function xv({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ZA(n,{refreshToken:e}){const t=xv(n);return t.append("Authorization",tC(e)),t}async function Nv(n){const e=await n();return e.status>=500&&e.status<600?n():e}function eC(n){return Number(n.replace("s","000"))}function tC(n){return`${Rv} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Cv(n),o=xv(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const d={fid:t,authVersion:Rv,appId:n.appId,sdkVersion:Sv},h={method:"POST",headers:o,body:JSON.stringify(d)},p=await Nv(()=>fetch(i,h));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:kv(y.authToken)}}else throw await Pv("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=/^[cdef][\w-]{21}$/,tf="";function sC(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=oC(n);return iC.test(t)?t:tf}catch{return tf}}function oC(n){return rC(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=new Map;function Lv(n,e){const t=Lc(n);Ov(t,e),aC(t,e)}function Ov(n,e){const t=bv.get(n);if(t)for(const i of t)i(e)}function aC(n,e){const t=lC();t&&t.postMessage({key:n,fid:e}),uC()}let us=null;function lC(){return!us&&"BroadcastChannel"in self&&(us=new BroadcastChannel("[Firebase] FID Change"),us.onmessage=n=>{Ov(n.data.key,n.data.fid)}),us}function uC(){bv.size===0&&us&&(us.close(),us=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="firebase-installations-database",dC=1,ms="firebase-installations-store";let Mh=null;function jf(){return Mh||(Mh=F_(cC,dC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ms)}}})),Mh}async function pc(n,e){const t=Lc(n),o=(await jf()).transaction(ms,"readwrite"),l=o.objectStore(ms),d=await l.get(t);return await l.put(e,t),await o.done,(!d||d.fid!==e.fid)&&Lv(n,e.fid),e}async function Vv(n){const e=Lc(n),i=(await jf()).transaction(ms,"readwrite");await i.objectStore(ms).delete(e),await i.done}async function Oc(n,e){const t=Lc(n),o=(await jf()).transaction(ms,"readwrite"),l=o.objectStore(ms),d=await l.get(t),h=e(d);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!d||d.fid!==h.fid)&&Lv(n,h.fid),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(n){let e;const t=await Oc(n.appConfig,i=>{const o=hC(i),l=fC(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===tf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function hC(n){const e=n||{fid:sC(),registrationStatus:0};return Mv(e)}function fC(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ps.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=pC(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mC(n)}:{installationEntry:e}}async function pC(n,e){try{const t=await nC(n,e);return pc(n.appConfig,t)}catch(t){throw Av(t)&&t.customData.serverCode===409?await Vv(n.appConfig):await pc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function mC(n){let e=await vy(n.appConfig);for(;e.registrationStatus===1;)await Dv(100),e=await vy(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Bf(n);return i||t}return e}function vy(n){return Oc(n,e=>{if(!e)throw ps.create("installation-not-found");return Mv(e)})}function Mv(n){return gC(n)?{fid:n.fid,registrationStatus:0}:n}function gC(n){return n.registrationStatus===1&&n.registrationTime+Iv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC({appConfig:n,heartbeatServiceProvider:e},t){const i=_C(n,t),o=ZA(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const d={installation:{sdkVersion:Sv,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(d)},p=await Nv(()=>fetch(i,h));if(p.ok){const y=await p.json();return kv(y)}else throw await Pv("Generate Auth Token",p)}function _C(n,{fid:e}){return`${Cv(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(n,e=!1){let t;const i=await Oc(n.appConfig,l=>{if(!Fv(l))throw ps.create("not-registered");const d=l.authToken;if(!e&&wC(d))return l;if(d.requestStatus===1)return t=vC(n,e),l;{if(!navigator.onLine)throw ps.create("app-offline");const h=IC(l);return t=EC(n,h),h}});return t?await t:i.authToken}async function vC(n,e){let t=await Ey(n.appConfig);for(;t.authToken.requestStatus===1;)await Dv(100),t=await Ey(n.appConfig);const i=t.authToken;return i.requestStatus===0?$f(n,e):i}function Ey(n){return Oc(n,e=>{if(!Fv(e))throw ps.create("not-registered");const t=e.authToken;return SC(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function EC(n,e){try{const t=await yC(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await pc(n.appConfig,i),t}catch(t){if(Av(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Vv(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pc(n.appConfig,i)}throw t}}function Fv(n){return n!==void 0&&n.registrationStatus===2}function wC(n){return n.requestStatus===2&&!TC(n)}function TC(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+QA}function IC(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function SC(n){return n.requestStatus===1&&n.requestTime+Iv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(n){const e=n,{installationEntry:t,registrationPromise:i}=await Bf(e);return i?i.catch(console.error):$f(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(n,e=!1){const t=n;return await CC(t),(await $f(t,e)).token}async function CC(n){const{registrationPromise:e}=await Bf(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(n){if(!n||!n.options)throw Fh("App Configuration");if(!n.name)throw Fh("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Fh(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Fh(n){return ps.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="installations",PC="installations-internal",xC=n=>{const e=n.getProvider("app").getImmediate(),t=kC(e),i=Es(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},NC=n=>{const e=n.getProvider("app").getImmediate(),t=Es(e,Uv).getImmediate();return{getId:()=>RC(t),getToken:o=>AC(t,o)}};function DC(){ur(new Wn(Uv,xC,"PUBLIC")),ur(new Wn(PC,NC,"PRIVATE"))}DC();Sn(Tv,zf);Sn(Tv,zf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="analytics",bC="firebase_id",LC="origin",OC=60*1e3,VC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new xc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new vs("analytics","Analytics",MC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(n){if(!n.startsWith(Hf)){const e=dn.create("invalid-gtag-resource",{gtagURL:n});return nn.warn(e.message),""}return n}function zv(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function UC(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function zC(n,e){const t=UC("firebase-js-sdk-policy",{createScriptURL:FC}),i=document.createElement("script"),o=`${Hf}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function jC(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function BC(n,e,t,i,o,l){const d=i[o];try{if(d)await e[d];else{const p=(await zv(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(h){nn.error(h)}n("config",o,l)}async function $C(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let d=o.send_to;Array.isArray(d)||(d=[d]);const h=await zv(t);for(const p of d){const y=h.find(I=>I.measurementId===p),E=y&&e[y.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){nn.error(l)}}function HC(n,e,t,i){async function o(l,...d){try{if(l==="event"){const[h,p]=d;await $C(n,e,t,h,p)}else if(l==="config"){const[h,p]=d;await BC(n,e,t,i,h,p)}else if(l==="consent"){const[h,p]=d;n("consent",h,p)}else if(l==="get"){const[h,p,y]=d;n("get",h,p,y)}else if(l==="set"){const[h]=d;n("set",h)}else n(l,...d)}catch(h){nn.error(h)}}return o}function WC(n,e,t,i,o){let l=function(...d){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=HC(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function qC(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Hf)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=30,GC=1e3;class QC{constructor(e={},t=GC){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jv=new QC;function YC(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function XC(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:YC(i)},l=VC.replace("{app-id}",t),d=await fetch(l,o);if(d.status!==200&&d.status!==304){let h="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(h=p.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:d.status,responseMessage:h})}return d.json()}async function JC(n,e=jv,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw dn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw dn.create("no-api-key")}const d=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new t1;return setTimeout(async()=>{h.abort()},OC),Bv({appId:i,apiKey:o,measurementId:l},d,h,e)}async function Bv(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=jv){var l;const{appId:d,measurementId:h}=n;try{await ZC(i,e)}catch(p){if(h)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:h};throw p}try{const p=await XC(n);return o.deleteThrottleMetadata(d),p}catch(p){const y=p;if(!e1(y)){if(o.deleteThrottleMetadata(d),h)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:d,measurementId:h};throw p}const E=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Wg(t,o.intervalMillis,KC):Wg(t,o.intervalMillis),I={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(d,I),nn.debug(`Calling attemptFetch again in ${E} millis`),Bv(n,I,i,o)}}function ZC(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function e1(n){if(!(n instanceof qn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class t1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function n1(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,d=Object.assign(Object.assign({},i),{send_to:l});n("event",t,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(){if(L_())try{await O_()}catch(n){return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function i1(n,e,t,i,o,l,d){var h;const p=JC(n);p.then(N=>{t[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>nn.error(N)),e.push(p);const y=r1().then(N=>{if(N)return i.getId()}),[E,I]=await Promise.all([p,y]);qC(l)||zC(l,E.measurementId),o("js",new Date);const S=(h=d==null?void 0:d.config)!==null&&h!==void 0?h:{};return S[LC]="firebase",S.update=!0,I!=null&&(S[bC]=I),o("config",E.measurementId,S),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.app=e}_delete(){return delete qa[this.app.options.appId],Promise.resolve()}}let qa={},wy=[];const Ty={};let Uh="dataLayer",o1="gtag",Iy,$v,Sy=!1;function a1(){const n=[];if(b_()&&n.push("This is a browser extension environment."),mI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=dn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function l1(n,e,t){a1();const i=n.options.appId;if(!i)throw dn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(qa[i]!=null)throw dn.create("already-exists",{id:i});if(!Sy){jC(Uh);const{wrappedGtag:l,gtagCore:d}=WC(qa,wy,Ty,Uh,o1);$v=l,Iy=d,Sy=!0}return qa[i]=i1(n,wy,Ty,e,Iy,Uh,t),new s1(n)}function u1(n=kf()){n=hn(n);const e=Es(n,mc);return e.isInitialized()?e.getImmediate():c1(n)}function c1(n,e={}){const t=Es(n,mc);if(t.isInitialized()){const o=t.getImmediate();if(Ja(e,t.getOptions()))return o;throw dn.create("already-initialized")}return t.initialize({options:e})}function d1(n,e,t,i){n=hn(n),n1($v,qa[n.app.options.appId],e,t,i).catch(o=>nn.error(o))}const Ry="@firebase/analytics",Ay="0.10.11";function h1(){ur(new Wn(mc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return l1(i,o,t)},"PUBLIC")),ur(new Wn("analytics-internal",n,"PRIVATE")),Sn(Ry,Ay),Sn(Ry,Ay,"esm2017");function n(e){try{const t=e.getProvider(mc).getImmediate();return{logEvent:(i,o,l)=>d1(t,i,o,l)}}catch(t){throw dn.create("interop-component-reg-failed",{reason:t})}}}h1();var Cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ti,Hv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,T){function R(){}R.prototype=T.prototype,k.D=T.prototype,k.prototype=new R,k.prototype.constructor=k,k.C=function(P,D,O){for(var C=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)C[Je-2]=arguments[Je];return T.prototype[D].apply(P,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,T,R){R||(R=0);var P=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)P[D]=T.charCodeAt(R++)|T.charCodeAt(R++)<<8|T.charCodeAt(R++)<<16|T.charCodeAt(R++)<<24;else for(D=0;16>D;++D)P[D]=T[R++]|T[R++]<<8|T[R++]<<16|T[R++]<<24;T=k.g[0],R=k.g[1],D=k.g[2];var O=k.g[3],C=T+(O^R&(D^O))+P[0]+3614090360&4294967295;T=R+(C<<7&4294967295|C>>>25),C=O+(D^T&(R^D))+P[1]+3905402710&4294967295,O=T+(C<<12&4294967295|C>>>20),C=D+(R^O&(T^R))+P[2]+606105819&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(T^D&(O^T))+P[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(O^R&(D^O))+P[4]+4118548399&4294967295,T=R+(C<<7&4294967295|C>>>25),C=O+(D^T&(R^D))+P[5]+1200080426&4294967295,O=T+(C<<12&4294967295|C>>>20),C=D+(R^O&(T^R))+P[6]+2821735955&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(T^D&(O^T))+P[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(O^R&(D^O))+P[8]+1770035416&4294967295,T=R+(C<<7&4294967295|C>>>25),C=O+(D^T&(R^D))+P[9]+2336552879&4294967295,O=T+(C<<12&4294967295|C>>>20),C=D+(R^O&(T^R))+P[10]+4294925233&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(T^D&(O^T))+P[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(O^R&(D^O))+P[12]+1804603682&4294967295,T=R+(C<<7&4294967295|C>>>25),C=O+(D^T&(R^D))+P[13]+4254626195&4294967295,O=T+(C<<12&4294967295|C>>>20),C=D+(R^O&(T^R))+P[14]+2792965006&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(T^D&(O^T))+P[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(D^O&(R^D))+P[1]+4129170786&4294967295,T=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(T^R))+P[6]+3225465664&4294967295,O=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(O^T))+P[11]+643717713&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^T&(D^O))+P[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(D^O&(R^D))+P[5]+3593408605&4294967295,T=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(T^R))+P[10]+38016083&4294967295,O=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(O^T))+P[15]+3634488961&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^T&(D^O))+P[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(D^O&(R^D))+P[9]+568446438&4294967295,T=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(T^R))+P[14]+3275163606&4294967295,O=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(O^T))+P[3]+4107603335&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^T&(D^O))+P[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(D^O&(R^D))+P[13]+2850285829&4294967295,T=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(T^R))+P[2]+4243563512&4294967295,O=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(O^T))+P[7]+1735328473&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^T&(D^O))+P[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(R^D^O)+P[5]+4294588738&4294967295,T=R+(C<<4&4294967295|C>>>28),C=O+(T^R^D)+P[8]+2272392833&4294967295,O=T+(C<<11&4294967295|C>>>21),C=D+(O^T^R)+P[11]+1839030562&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^T)+P[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(R^D^O)+P[1]+2763975236&4294967295,T=R+(C<<4&4294967295|C>>>28),C=O+(T^R^D)+P[4]+1272893353&4294967295,O=T+(C<<11&4294967295|C>>>21),C=D+(O^T^R)+P[7]+4139469664&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^T)+P[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(R^D^O)+P[13]+681279174&4294967295,T=R+(C<<4&4294967295|C>>>28),C=O+(T^R^D)+P[0]+3936430074&4294967295,O=T+(C<<11&4294967295|C>>>21),C=D+(O^T^R)+P[3]+3572445317&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^T)+P[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(R^D^O)+P[9]+3654602809&4294967295,T=R+(C<<4&4294967295|C>>>28),C=O+(T^R^D)+P[12]+3873151461&4294967295,O=T+(C<<11&4294967295|C>>>21),C=D+(O^T^R)+P[15]+530742520&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^T)+P[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(D^(R|~O))+P[0]+4096336452&4294967295,T=R+(C<<6&4294967295|C>>>26),C=O+(R^(T|~D))+P[7]+1126891415&4294967295,O=T+(C<<10&4294967295|C>>>22),C=D+(T^(O|~R))+P[14]+2878612391&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~T))+P[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=T+(D^(R|~O))+P[12]+1700485571&4294967295,T=R+(C<<6&4294967295|C>>>26),C=O+(R^(T|~D))+P[3]+2399980690&4294967295,O=T+(C<<10&4294967295|C>>>22),C=D+(T^(O|~R))+P[10]+4293915773&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~T))+P[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=T+(D^(R|~O))+P[8]+1873313359&4294967295,T=R+(C<<6&4294967295|C>>>26),C=O+(R^(T|~D))+P[15]+4264355552&4294967295,O=T+(C<<10&4294967295|C>>>22),C=D+(T^(O|~R))+P[6]+2734768916&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~T))+P[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=T+(D^(R|~O))+P[4]+4149444226&4294967295,T=R+(C<<6&4294967295|C>>>26),C=O+(R^(T|~D))+P[11]+3174756917&4294967295,O=T+(C<<10&4294967295|C>>>22),C=D+(T^(O|~R))+P[2]+718787259&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~T))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+T&4294967295,k.g[1]=k.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,k.g[2]=k.g[2]+D&4294967295,k.g[3]=k.g[3]+O&4294967295}i.prototype.u=function(k,T){T===void 0&&(T=k.length);for(var R=T-this.blockSize,P=this.B,D=this.h,O=0;O<T;){if(D==0)for(;O<=R;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<T;)if(P[D++]=k.charCodeAt(O++),D==this.blockSize){o(this,P),D=0;break}}else for(;O<T;)if(P[D++]=k[O++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=T},i.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var T=1;T<k.length-8;++T)k[T]=0;var R=8*this.o;for(T=k.length-8;T<k.length;++T)k[T]=R&255,R/=256;for(this.u(k),k=Array(16),T=R=0;4>T;++T)for(var P=0;32>P;P+=8)k[R++]=this.g[T]>>>P&255;return k};function l(k,T){var R=h;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=T(k)}function d(k,T){this.h=T;for(var R=[],P=!0,D=k.length-1;0<=D;D--){var O=k[D]|0;P&&O==T||(R[D]=O,P=!1)}this.g=R}var h={};function p(k){return-128<=k&&128>k?l(k,function(T){return new d([T|0],0>T?-1:0)}):new d([k|0],0>k?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return I;if(0>k)return L(y(-k));for(var T=[],R=1,P=0;k>=R;P++)T[P]=k/R|0,R*=4294967296;return new d(T,0)}function E(k,T){if(k.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k.charAt(0)=="-")return L(E(k.substring(1),T));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(T,8)),P=I,D=0;D<k.length;D+=8){var O=Math.min(8,k.length-D),C=parseInt(k.substring(D,D+O),T);8>O?(O=y(Math.pow(T,O)),P=P.j(O).add(y(C))):(P=P.j(R),P=P.add(y(C)))}return P}var I=p(0),S=p(1),N=p(16777216);n=d.prototype,n.m=function(){if(z(this))return-L(this).m();for(var k=0,T=1,R=0;R<this.g.length;R++){var P=this.i(R);k+=(0<=P?P:4294967296+P)*T,T*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(V(this))return"0";if(z(this))return"-"+L(this).toString(k);for(var T=y(Math.pow(k,6)),R=this,P="";;){var D=ee(R,T).g;R=H(R,D.j(T));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(k);if(R=D,V(R))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function V(k){if(k.h!=0)return!1;for(var T=0;T<k.g.length;T++)if(k.g[T]!=0)return!1;return!0}function z(k){return k.h==-1}n.l=function(k){return k=H(this,k),z(k)?-1:V(k)?0:1};function L(k){for(var T=k.g.length,R=[],P=0;P<T;P++)R[P]=~k.g[P];return new d(R,~k.h).add(S)}n.abs=function(){return z(this)?L(this):this},n.add=function(k){for(var T=Math.max(this.g.length,k.g.length),R=[],P=0,D=0;D<=T;D++){var O=P+(this.i(D)&65535)+(k.i(D)&65535),C=(O>>>16)+(this.i(D)>>>16)+(k.i(D)>>>16);P=C>>>16,O&=65535,C&=65535,R[D]=C<<16|O}return new d(R,R[R.length-1]&-2147483648?-1:0)};function H(k,T){return k.add(L(T))}n.j=function(k){if(V(this)||V(k))return I;if(z(this))return z(k)?L(this).j(L(k)):L(L(this).j(k));if(z(k))return L(this.j(L(k)));if(0>this.l(N)&&0>k.l(N))return y(this.m()*k.m());for(var T=this.g.length+k.g.length,R=[],P=0;P<2*T;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<k.g.length;D++){var O=this.i(P)>>>16,C=this.i(P)&65535,Je=k.i(D)>>>16,dt=k.i(D)&65535;R[2*P+2*D]+=C*dt,B(R,2*P+2*D),R[2*P+2*D+1]+=O*dt,B(R,2*P+2*D+1),R[2*P+2*D+1]+=C*Je,B(R,2*P+2*D+1),R[2*P+2*D+2]+=O*Je,B(R,2*P+2*D+2)}for(P=0;P<T;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=T;P<2*T;P++)R[P]=0;return new d(R,0)};function B(k,T){for(;(k[T]&65535)!=k[T];)k[T+1]+=k[T]>>>16,k[T]&=65535,T++}function K(k,T){this.g=k,this.h=T}function ee(k,T){if(V(T))throw Error("division by zero");if(V(k))return new K(I,I);if(z(k))return T=ee(L(k),T),new K(L(T.g),L(T.h));if(z(T))return T=ee(k,L(T)),new K(L(T.g),T.h);if(30<k.g.length){if(z(k)||z(T))throw Error("slowDivide_ only works with positive integers.");for(var R=S,P=T;0>=P.l(k);)R=he(R),P=he(P);var D=fe(R,1),O=fe(P,1);for(P=fe(P,2),R=fe(R,2);!V(P);){var C=O.add(P);0>=C.l(k)&&(D=D.add(R),O=C),P=fe(P,1),R=fe(R,1)}return T=H(k,D.j(T)),new K(D,T)}for(D=I;0<=k.l(T);){for(R=Math.max(1,Math.floor(k.m()/T.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=y(R),C=O.j(T);z(C)||0<C.l(k);)R-=P,O=y(R),C=O.j(T);V(O)&&(O=S),D=D.add(O),k=H(k,C)}return new K(D,k)}n.A=function(k){return ee(this,k).h},n.and=function(k){for(var T=Math.max(this.g.length,k.g.length),R=[],P=0;P<T;P++)R[P]=this.i(P)&k.i(P);return new d(R,this.h&k.h)},n.or=function(k){for(var T=Math.max(this.g.length,k.g.length),R=[],P=0;P<T;P++)R[P]=this.i(P)|k.i(P);return new d(R,this.h|k.h)},n.xor=function(k){for(var T=Math.max(this.g.length,k.g.length),R=[],P=0;P<T;P++)R[P]=this.i(P)^k.i(P);return new d(R,this.h^k.h)};function he(k){for(var T=k.g.length+1,R=[],P=0;P<T;P++)R[P]=k.i(P)<<1|k.i(P-1)>>>31;return new d(R,k.h)}function fe(k,T){var R=T>>5;T%=32;for(var P=k.g.length-R,D=[],O=0;O<P;O++)D[O]=0<T?k.i(O+R)>>>T|k.i(O+R+1)<<32-T:k.i(O+R);return new d(D,k.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Hv=i,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=E,Ti=d}).apply(typeof Cy<"u"?Cy:typeof self<"u"?self:typeof window<"u"?window:{});var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wv,Ba,qv,ec,nf,Kv,Gv,Qv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof $u=="object"&&$u];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var F=u[w];if(!(F in _))break e;_=_[F]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,F={next:function(){if(!w&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},h=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function I(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,w),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function S(u,m,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:I,S.apply(null,arguments)}function N(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function V(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,F,q){for(var re=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)re[Be-2]=arguments[Be];return m.prototype[F].apply(w,re)}}function z(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function L(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const F=u.length||0,q=w.length||0;u.length=F+q;for(let re=0;re<q;re++)u[F+re]=w[re]}else u.push(w)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function B(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function ee(u){return ee[" "](u),u}ee[" "]=function(){};var he=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function fe(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function k(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function T(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,m){let _,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(_ in w)u[_]=w[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function D(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function O(u){h.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Je{constructor(){this.h=this.g=null}add(m,_){const w=dt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var dt=new H(()=>new ht,u=>u.reset());class ht{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,ne=!1,me=new Je,oe=()=>{const u=h.Promise.resolve(void 0);Me=()=>{u.then(M)}};var M=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){O(_)}var m=dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ne=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(he){e:{try{ee(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:be[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}V(Ae,pe);var be={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),ze=0;function He(u,m,_,w,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=F,this.key=++ze,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fr(u){this.src=u,this.g={},this.h=0}fr.prototype.add=function(u,m,_,w,F){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var re=Hr(u,m,w,F);return-1<re?(m=u[re],_||(m.fa=!1)):(m=new He(m,this.src,q,!!w,F),m.fa=_,u.push(m)),m};function Rs(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],F=Array.prototype.indexOf.call(w,m,void 0),q;(q=0<=F)&&Array.prototype.splice.call(w,F,1),q&&(wt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Hr(u,m,_,w){for(var F=0;F<u.length;++F){var q=u[F];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==w)return F}return-1}var bi="closure_lm_"+(1e6*Math.random()|0),As={};function Bo(u,m,_,w,F){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Bo(u,m[q],_,w,F);return null}return _=Wo(_),u&&u[Ue]?u.K(m,_,y(w)?!!w.capture:!1,F):$o(u,m,_,!1,w,F)}function $o(u,m,_,w,F,q){if(!m)throw Error("Invalid event type");var re=y(F)?!!F.capture:!!F,Be=ks(u);if(Be||(u[bi]=Be=new fr(u)),_=Be.add(m,_,w,re,q),_.proxy)return _;if(w=Rl(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(F=re),F===void 0&&(F=!1),u.addEventListener(m.toString(),w,F);else if(u.attachEvent)u.attachEvent(mr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Rl(){function u(_){return m.call(u.src,u.listener,_)}const m=Ho;return u}function Cs(u,m,_,w,F){if(Array.isArray(m))for(var q=0;q<m.length;q++)Cs(u,m[q],_,w,F);else w=y(w)?!!w.capture:!!w,_=Wo(_),u&&u[Ue]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=Hr(q,_,w,F),-1<_&&(wt(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=ks(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Hr(m,_,w,F)),(_=-1<u?m[u]:null)&&pr(_))}function pr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ue])Rs(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(mr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=ks(m))?(Rs(_,u),_.h==0&&(_.src=null,m[bi]=null)):wt(u)}}}function mr(u){return u in As?As[u]:As[u]="on"+u}function Ho(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&pr(u),u=_.call(w,m)}return u}function ks(u){return u=u[bi],u instanceof fr?u:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wo(u){return typeof u=="function"?u:(u[Ps]||(u[Ps]=function(m){return u.handleEvent(m)}),u[Ps])}function ft(){Q.call(this),this.i=new fr(this),this.M=this,this.F=null}V(ft,Q),ft.prototype[Ue]=!0,ft.prototype.removeEventListener=function(u,m,_,w){Cs(this,u,m,_,w)};function pt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var F=m;m=new pe(w,u),P(m,F)}if(F=!0,_)for(var q=_.length-1;0<=q;q--){var re=m.g=_[q];F=gr(re,w,!0,m)&&F}if(re=m.g=u,F=gr(re,w,!0,m)&&F,F=gr(re,w,!1,m)&&F,_)for(q=0;q<_.length;q++)re=m.g=_[q],F=gr(re,w,!1,m)&&F}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)wt(_[w]);delete u.g[m],u.h--}}this.F=null},ft.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ft.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function gr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,q=0;q<m.length;++q){var re=m[q];if(re&&!re.da&&re.capture==_){var Be=re.listener,mt=re.ha||re.src;re.fa&&Rs(u.i,re),F=Be.call(mt,w)!==!1&&F}}return F&&!w.defaultPrevented}function qo(u,m,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function Wr(u){u.g=qo(()=>{u.g=null,u.i&&(u.i=!1,Wr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Li extends Q{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Wr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(u){Q.call(this),this.h=u,this.g={}}V(Oi,Q);var Ko=[];function Go(u){fe(u.g,function(m,_){this.g.hasOwnProperty(_)&&pr(m)},u),u.g={}}Oi.prototype.N=function(){Oi.aa.N.call(this),Go(this)},Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qo=h.JSON.stringify,Yo=h.JSON.parse,Xo=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Vi(){}Vi.prototype.h=null;function xs(u){return u.h||(u.h=u.i())}function Ns(){}var fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){pe.call(this,"d")}V(Kn,pe);function Ds(){pe.call(this,"c")}V(Ds,pe);var Gn={},Jo=null;function Mi(){return Jo=Jo||new ft}Gn.La="serverreachability";function Zo(u){pe.call(this,Gn.La,u)}V(Zo,pe);function yr(u){const m=Mi();pt(m,new Zo(m))}Gn.STAT_EVENT="statevent";function ea(u,m){pe.call(this,Gn.STAT_EVENT,u),this.stat=m}V(ea,pe);function st(u){const m=Mi();pt(m,new ea(m,u))}Gn.Ma="timingevent";function bs(u,m){pe.call(this,Gn.Ma,u),this.size=m}V(bs,pe);function Cn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Fi(){this.g=!0}Fi.prototype.xa=function(){this.g=!1};function Ui(u,m,_,w,F,q){u.info(function(){if(u.g)if(q)for(var re="",Be=q.split("&"),mt=0;mt<Be.length;mt++){var Le=Be[mt].split("=");if(1<Le.length){var Tt=Le[0];Le=Le[1];var lt=Tt.split("_");re=2<=lt.length&&lt[1]=="type"?re+(Tt+"="+Le+"&"):re+(Tt+"=redacted&")}}else re=null;else re=q;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+m+`
`+_+`
`+re})}function Ls(u,m,_,w,F,q,re){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+m+`
`+_+`
`+q+" "+re})}function kn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Xc(u,_)+(w?" "+w:"")})}function ta(u,m){u.info(function(){return"TIMEOUT: "+m})}Fi.prototype.info=function(){};function Xc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var F=w[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var re=1;re<F.length;re++)F[re]=""}}}}return Qo(_)}catch{return m}}var Os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Al={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pn;function zi(){}V(zi,Vi),zi.prototype.g=function(){return new XMLHttpRequest},zi.prototype.i=function(){return{}},Pn=new zi;function xn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cl}function Cl(){this.i=null,this.g="",this.h=!1}var na={},Vs={};function Ms(u,m,_){u.L=1,u.v=Yr(sn(m)),u.m=_,u.P=!0,ra(u,null)}function ra(u,m){u.F=Date.now(),We(u),u.A=sn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Jr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Cl,u.g=Wl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Li(S(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(Ko[0]=F.toString()),F=Ko);for(var q=0;q<F.length;q++){var re=Bo(_,F[q],w||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),yr(),Ui(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Gt(u)==3?m.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Gt(this.g);var m=this.g.Ba();const gn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ua(this.g)))){this.J||lt!=4||m==7||(m==8||0>=gn?yr(3):yr(2)),ji(this);var _=this.g.Z();this.X=_;t:if(kl(this)){var w=ua(this.g);u="";var F=w.length,q=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),qr(this);var re="";break t}this.h.i=new h.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(q&&m==F-1)});w.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=_==200,Ls(this.i,this.u,this.A,this.l,this.R,lt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,mt=this.g;if((Be=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Be)){var Le=Be;break t}}Le=null}if(_=Le)kn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ia(this,_);else{this.o=!1,this.s=3,st(12),pn(this),qr(this);break e}}if(this.P){_=!0;let an;for(;!this.J&&this.C<re.length;)if(an=Jc(this,re),an==Vs){lt==4&&(this.s=4,st(14),_=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==na){this.s=4,st(15),kn(this.i,this.l,re,"[Invalid Chunk]"),_=!1;break}else kn(this.i,this.l,an,null),ia(this,an);if(kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||re.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)kn(this.i,this.l,re,"[Invalid Chunked Response]"),pn(this),qr(this);else if(0<re.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),da(Tt),Tt.M=!0,st(11))}}else kn(this.i,this.l,re,null),ia(this,re);lt==4&&pn(this),this.o&&!this.J&&(lt==4?Gs(this.j,this):(this.o=!1,We(this)))}else $s(this.g),_==400&&0<re.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),pn(this),qr(this)}}}catch{}finally{}};function kl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Jc(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Vs:(_=Number(m.substring(_,w)),isNaN(_)?na:(w+=1,w+_>m.length?Vs:(m=m.slice(w,w+_),u.C=w+_,m)))}xn.prototype.cancel=function(){this.J=!0,pn(this)};function We(u){u.S=Date.now()+u.I,Pl(u,u.I)}function Pl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(S(u.ba,u),m)}function ji(u){u.B&&(h.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ta(this.i,this.A),this.L!=2&&(yr(),st(17)),pn(this),this.s=2,qr(this)):Pl(this,this.S-u)};function qr(u){u.j.G==0||u.J||Gs(u.j,u)}function pn(u){ji(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Go(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ia(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Bt(_.h,u))){if(!u.K&&Bt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Ks(_),On(_);else break e;qs(_),st(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=Cn(S(_.Za,_),6e3));if(1>=Nl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Tr(_,11)}else if((u.K||_.g==u)&&Ks(_),!B(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Le=F[m];if(_.T=Le[0],Le=Le[1],_.G==2)if(Le[0]=="c"){_.K=Le[1],_.ia=Le[2];const Tt=Le[3];Tt!=null&&(_.la=Tt,_.j.info("VER="+_.la));const lt=Le[4];lt!=null&&(_.Aa=lt,_.j.info("SVER="+_.Aa));const gn=Le[5];gn!=null&&typeof gn=="number"&&0<gn&&(w=1.5*gn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const an=u.g;if(an){const Gi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var q=w.h;q.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(sa(q,q.h),q.h=null))}if(w.D){const Ys=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Ys&&(w.ya=Ys,$e(w.I,w.D,Ys))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var re=u;if(w.qa=Hl(w,w.J?w.ia:null,w.W),re.K){Dl(w.h,re);var Be=re,mt=w.L;mt&&(Be.I=mt),Be.B&&(ji(Be),We(Be)),w.g=re}else Ki(w);0<_.i.length&&Jn(_)}else Le[0]!="stop"&&Le[0]!="close"||Tr(_,7);else _.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Tr(_,7):kt(_):Le[0]!="noop"&&_.l&&_.l.ta(Le),_.v=0)}}yr(4)}catch{}}var xl=class{constructor(u,m){this.g=u,this.map=m}};function Bi(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Nl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function sa(u,m){u.g?u.g.add(m):u.h=m}function Dl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Bi.prototype.cancel=function(){if(this.i=bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function bl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return z(u.i)}function Fs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Us(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function Kr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Us(u),w=Fs(u),F=w.length,q=0;q<F;q++)m.call(void 0,w[q],_&&_[q],u)}var $i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),F=null;if(0<=w){var q=u[_].substring(0,w);F=u[_].substring(w+1)}else q=u[_];m(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,Hi(this,u.j),this.o=u.o,this.g=u.g,Gr(this,u.s),this.l=u.l;var m=u.i,_=new Qn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Qr(this,_),this.m=u.m}else u&&(m=String(u).match($i))?(this.h=!1,Hi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Gr(this,m[4]),this.l=Ne(m[5]||"",!0),Qr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}_r.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Xr(m,zs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Xr(m,zs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Xr(_,_.charAt(0)=="/"?Vl:Ol,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Xr(_,oa)),u.join("")};function sn(u){return new _r(u)}function Hi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Gr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Qr(u,m,_){m instanceof Qn?(u.i=m,Yn(u.i,u.h)):(_||(m=Xr(m,Ml)),u.i=new Qn(m,u.h))}function $e(u,m,_){u.i.set(m,_)}function Yr(u){return $e(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Xr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Ll),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ll(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var zs=/[#\/\?@]/g,Ol=/[#\?:]/g,Vl=/[#\?]/g,Ml=/[#\?@]/g,oa=/#/g;function Qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Ct(u){u.g||(u.g=new Map,u.h=0,u.i&&Zc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Qn.prototype,n.add=function(u,m){Ct(this),this.i=null,u=mn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Nn(u,m){Ct(u),m=mn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Dn(u,m){return Ct(u),m=mn(u,m),u.g.has(m)}n.forEach=function(u,m){Ct(this),this.g.forEach(function(_,w){_.forEach(function(F){u.call(m,F,w,this)},this)},this)},n.na=function(){Ct(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const F=u[w];for(let q=0;q<F.length;q++)_.push(m[w])}return _},n.V=function(u){Ct(this);let m=[];if(typeof u=="string")Dn(this,u)&&(m=m.concat(this.g.get(mn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Ct(this),this.i=null,u=mn(this,u),Dn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Jr(u,m,_){Nn(u,m),0<_.length&&(u.i=null,u.g.set(mn(u,m),z(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const q=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var F=q;re[w]!==""&&(F+="="+encodeURIComponent(String(re[w]))),u.push(F)}}return this.i=u.join("&")};function mn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Yn(u,m){m&&!u.j&&(Ct(u),u.i=null,u.g.forEach(function(_,w){var F=w.toLowerCase();w!=F&&(Nn(this,w),Jr(this,F,_))},u)),u.j=m}function ed(u,m){const _=new Fi;if(h.Image){const w=new Image;w.onload=N(Kt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=N(Kt,_,"TestLoadImage: error",!1,m,w),w.onabort=N(Kt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=N(Kt,_,"TestLoadImage: timeout",!1,m,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Fl(u,m){const _=new Fi,w=new AbortController,F=setTimeout(()=>{w.abort(),Kt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(q=>{clearTimeout(F),q.ok?Kt(_,"TestPingServer: ok",!0,m):Kt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Kt(_,"TestPingServer: error",!1,m)})}function Kt(u,m,_,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(_)}catch{}}function td(){this.g=new Xo}function Ul(u,m,_){const w=_||"";try{Kr(u,function(F,q){let re=F;y(F)&&(re=Qo(F)),m.push(w+q+"="+encodeURIComponent(re))})}catch(F){throw m.push(w+"type="+encodeURIComponent("_badmap")),F}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}V(vr,Vi),vr.prototype.g=function(){return new Wi(this.l,this.j)},vr.prototype.i=function(u){return function(){return u}}({});function Wi(u,m){ft.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Wi,ft),n=Wi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function zl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?bn(this):Ln(this),this.readyState==3&&zl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},n.Qa=function(u){this.g&&(this.response=u,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Er(u){let m="";return fe(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function Zr(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Er(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):$e(u,m,_))}function Ye(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ye,ft);var nd=/^https?$/i,aa=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pn.g(),this.v=this.o?xs(this.o):xs(Pn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){qi(this,q);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)_.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const q of w.keys())_.set(q,w.get(q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),F=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(aa,m,void 0))||w||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,re]of _)this.g.setRequestHeader(q,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bs(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){qi(this,q)}};function qi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,js(u),on(u)}function js(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},n.bb=function(){la(this)};function la(u){if(u.h&&typeof d<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)qo(u.Ea,0,u);else if(pt(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=re===0){var F=String(u.D).match($i)[1]||null;!F&&h.self&&h.self.location&&(F=h.self.location.protocol.slice(0,-1)),w=!nd.test(F?F.toLowerCase():"")}_=w}if(_)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var q=2<Gt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",js(u)}}finally{on(u)}}}}function on(u,m){if(u.g){Bs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Bs(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Yo(m)}};function ua(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function $s(u){const m={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(B(u[w]))continue;var _=D(u[w]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[F]||[];m[F]=q,q.push(_)}k(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ca(u){this.Aa=0,this.i=[],this.j=new Fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(u&&u.concurrentRequestLimit),this.Da=new td,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ca.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){st(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Hl(this,null,this.W),Jn(this)};function kt(u){if(Hs(u),u.G==3){var m=u.U++,_=sn(u.I);if($e(_,"SID",u.K),$e(_,"RID",m),$e(_,"TYPE","terminate"),wr(u,_),m=new xn(u,u.j,m),m.L=2,m.v=Yr(sn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.v,_=!0),_||(m.g=Wl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),We(m)}$l(u)}function On(u){u.g&&(da(u),u.g.cancel(),u.g=null)}function Hs(u){On(u),u.u&&(h.clearTimeout(u.u),u.u=null),Ks(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function Jn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Me||oe(),ne||(Me(),ne=!0),me.add(m,u),u.B=0}}function rd(u,m){return Nl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(S(u.Ga,u,m),Bl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new xn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=T(q),P(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ei(this,F,m),_=sn(this.I),$e(_,"RID",u),$e(_,"CVER",22),this.D&&$e(_,"X-HTTP-Session-Id",this.D),wr(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Er(q)))+"&"+m:this.m&&Zr(_,this.m,q)),sa(this.h,F),this.Ua&&$e(_,"TYPE","init"),this.P?($e(_,"$req",m),$e(_,"SID","null"),F.T=!0,Ms(F,_,null)):Ms(F,_,m),this.G=2}}else this.G==3&&(u?Ws(this,u):this.i.length==0||rn(this.h)||Ws(this))};function Ws(u,m){var _;m?_=m.l:_=u.U++;const w=sn(u.I);$e(w,"SID",u.K),$e(w,"RID",_),$e(w,"AID",u.T),wr(u,w),u.m&&u.o&&Zr(w,u.m,u.o),_=new xn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ei(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sa(u.h,_),Ms(_,w,m)}function wr(u,m){u.H&&fe(u.H,function(_,w){$e(m,w,_)}),u.l&&Kr({},function(_,w){$e(m,w,_)})}function ei(u,m,_){_=Math.min(u.i.length,_);var w=u.l?S(u.l.Na,u.l,u):null;e:{var F=u.i;let q=-1;for(;;){const re=["count="+_];q==-1?0<_?(q=F[0].g,re.push("ofs="+q)):q=0:re.push("ofs="+q);let Be=!0;for(let mt=0;mt<_;mt++){let Le=F[mt].g;const Tt=F[mt].map;if(Le-=q,0>Le)q=Math.max(0,F[mt].g-100),Be=!1;else try{Ul(Tt,re,"req"+Le+"_")}catch{w&&w(Tt)}}if(Be){w=re.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function Ki(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Me||oe(),ne||(Me(),ne=!0),me.add(m,u),u.v=0}}function qs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(S(u.Fa,u),Bl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),On(this),jl(this))};function da(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function jl(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);$e(m,"RID","rpc"),$e(m,"SID",u.K),$e(m,"AID",u.T),$e(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&$e(m,"TO",u.ja),$e(m,"TYPE","xmlhttp"),wr(u,m),u.m&&u.o&&Zr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Yr(sn(m)),_.m=null,_.P=!0,ra(_,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),qs(this),st(19))};function Ks(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Gs(u,m){var _=null;if(u.g==m){Ks(u),da(u),u.g=null;var w=2}else if(Bt(u.h,m))_=m.D,Dl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;w=Mi(),pt(w,new bs(w,_)),Jn(u)}else Ki(u);else if(F=m.s,F==3||F==0&&0<m.X||!(w==1&&rd(u,m)||w==2&&qs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:Tr(u,5);break;case 4:Tr(u,10);break;case 3:Tr(u,6);break;default:Tr(u,2)}}}function Bl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Tr(u,m){if(u.j.info("Error code "+m),m==2){var _=S(u.fb,u),w=u.Xa;const F=!w;w=new _r(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Hi(w,"https"),Yr(w),F?ed(w.toString(),_):Fl(w.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(m),$l(u),Hs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function $l(u){if(u.G=0,u.ka=[],u.l){const m=bl(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function Hl(u,m,_){var w=_ instanceof _r?sn(_):new _r(_);if(w.g!="")m&&(w.g=m+"."+w.g),Gr(w,w.s);else{var F=h.location;w=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var q=new _r(null);w&&Hi(q,w),m&&(q.g=m),F&&Gr(q,F),_&&(q.l=_),w=q}return _=u.D,m=u.ya,_&&m&&$e(w,_,m),$e(w,"VER",u.la),wr(u,w),w}function Wl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ye(new vr({eb:_})):new Ye(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ha(){}n=ha.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qs(){}Qs.prototype.g=function(u,m){return new $t(u,m)};function $t(u,m){ft.call(this),this.g=new ca(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!B(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!B(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Zn(this)}V($t,ft),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){kt(this.g)},$t.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Qo(u),u=_);m.i.push(new xl(m.Ya++,u)),m.G==3&&Jn(m)},$t.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,$t.aa.N.call(this)};function ql(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}V(ql,Kn);function Kl(){Ds.call(this),this.status=1}V(Kl,Ds);function Zn(u){this.g=u}V(Zn,ha),Zn.prototype.ua=function(){pt(this.g,"a")},Zn.prototype.ta=function(u){pt(this.g,new ql(u))},Zn.prototype.sa=function(u){pt(this.g,new Kl)},Zn.prototype.ra=function(){pt(this.g,"b")},Qs.prototype.createWebChannel=Qs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Qv=function(){return new Qs},Gv=function(){return Mi()},Kv=Gn,nf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Os.NO_ERROR=0,Os.TIMEOUT=8,Os.HTTP_ERROR=6,ec=Os,Al.COMPLETE="complete",qv=Al,Ns.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Ba=Ns,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Wv=Ye}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});const ky="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new xc("@firebase/firestore");function _o(){return gs.logLevel}function ae(n,...e){if(gs.logLevel<=ke.DEBUG){const t=e.map(Wf);gs.debug(`Firestore (${Fo}): ${n}`,...t)}}function zr(n,...e){if(gs.logLevel<=ke.ERROR){const t=e.map(Wf);gs.error(`Firestore (${Fo}): ${n}`,...t)}}function Ao(n,...e){if(gs.logLevel<=ke.WARN){const t=e.map(Wf);gs.warn(`Firestore (${Fo}): ${n}`,...t)}}function Wf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+n;throw zr(e),new Error(e)}function je(n,e){n||Te()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class f1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ut.UNAUTHENTICATED))}shutdown(){}}class p1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class m1{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ii;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ii,e.enqueueRetryable(()=>o(this.currentUser))};const d=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},h=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(p=>h(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ii)}},0),d()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string"),new Yv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new Ut(e)}}class g1{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class y1{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new g1(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){je(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const d=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string"),this.R=t.token,new _1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=E1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function Co(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new vt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _e(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new vt(0,0))}static max(){return new Ie(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=ir.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=ir.isNumericId(e),o=ir.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ti.fromString(e.substring(4,e.length-2))}}class it extends ir{construct(e,t,i){return new it(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new _e(Z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const w1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ir{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return w1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new _e(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let d=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new _e(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new _e(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else h==="`"?(d=!d,o++):h!=="."||d?(i+=h,o++):(l(),o++)}if(l(),d)throw new _e(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(it.fromString(e))}static fromName(e){return new ve(it.fromString(e).popFirst(5))}static empty(){return new ve(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new it(e.slice()))}}function T1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new Ri(o,ve.empty(),e)}function I1(n){return new Ri(n.readTime,n.key,-1)}class Ri{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ri(Ie.min(),ve.empty(),-1)}static max(){return new Ri(Ie.max(),ve.empty(),-1)}}function S1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(n){if(n.code!==Z.FAILED_PRECONDITION||n.message!==R1)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,i)=>{t(e)})}static reject(e){return new G((t,i)=>{i(e)})}static waitFor(e){return new G((t,i)=>{let o=0,l=0,d=!1;e.forEach(h=>{++o,h.next(()=>{++l,d&&l===o&&t()},p=>i(p))}),d=!0,l===o&&t()})}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next(o=>o?G.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new G((i,o)=>{const l=e.length,d=new Array(l);let h=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{d[y]=E,++h,h===l&&i(d)},E=>o(E))}})}static doWhile(e,t){return new G((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function C1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vc.oe=-1;function Mc(n){return n==null}function gc(n){return n===0&&1/n==-1/0}function k1(n){return typeof n=="number"&&Number.isInteger(n)&&!gc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Py(e)),e=x1(n.get(t),e);return Py(e)}function x1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Py(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hu(this.root,e,this.comparator,!0)}}class Hu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new $n([])}unionWith(e){let t=new Et(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Zv("Invalid base64 string: "+l):l}}(e);return new bt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let d=0;d<o.length;++d)l+=String.fromCharCode(o[d]);return l}(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const N1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(n){if(je(!!n),typeof n=="string"){let e=0;const t=N1.exec(n);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ci(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fc(n){const e=n.mapValue.fields.__previous_value__;return qf(e)?Fc(e):e}function nl(n){const e=Ai(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,t,i,o,l,d,h,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=d,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=y}}class rl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ki(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qf(n)?4:L1(n)?9007199254740991:b1(n)?10:11:Te()}function cr(n,e){if(n===e)return!0;const t=ki(n);if(t!==ki(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return nl(n).isEqual(nl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const d=Ai(o.timestampValue),h=Ai(l.timestampValue);return d.seconds===h.seconds&&d.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Ci(o.bytesValue).isEqual(Ci(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const d=at(o.doubleValue),h=at(l.doubleValue);return d===h?gc(d)===gc(h):isNaN(d)&&isNaN(h)}return!1}(n,e);case 9:return Co(n.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return function(o,l){const d=o.mapValue.fields||{},h=l.mapValue.fields||{};if(xy(d)!==xy(h))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(h[p]===void 0||!cr(d[p],h[p])))return!1;return!0}(n,e);default:return Te()}}function il(n,e){return(n.values||[]).find(t=>cr(t,e))!==void 0}function ko(n,e){if(n===e)return 0;const t=ki(n),i=ki(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return function(l,d){const h=at(l.integerValue||l.doubleValue),p=at(d.integerValue||d.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1}(n,e);case 3:return Dy(n.timestampValue,e.timestampValue);case 4:return Dy(nl(n),nl(e));case 5:return De(n.stringValue,e.stringValue);case 6:return function(l,d){const h=Ci(l),p=Ci(d);return h.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,d){const h=l.split("/"),p=d.split("/");for(let y=0;y<h.length&&y<p.length;y++){const E=De(h[y],p[y]);if(E!==0)return E}return De(h.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,d){const h=De(at(l.latitude),at(d.latitude));return h!==0?h:De(at(l.longitude),at(d.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return by(n.arrayValue,e.arrayValue);case 10:return function(l,d){var h,p,y,E;const I=l.fields||{},S=d.fields||{},N=(h=I.value)===null||h===void 0?void 0:h.arrayValue,V=(p=S.value)===null||p===void 0?void 0:p.arrayValue,z=De(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((E=V==null?void 0:V.values)===null||E===void 0?void 0:E.length)||0);return z!==0?z:by(N,V)}(n.mapValue,e.mapValue);case 11:return function(l,d){if(l===Wu.mapValue&&d===Wu.mapValue)return 0;if(l===Wu.mapValue)return 1;if(d===Wu.mapValue)return-1;const h=l.fields||{},p=Object.keys(h),y=d.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let I=0;I<p.length&&I<E.length;++I){const S=De(p[I],E[I]);if(S!==0)return S;const N=ko(h[p[I]],y[E[I]]);if(N!==0)return N}return De(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Te()}}function Dy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Ai(n),i=Ai(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function by(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=ko(t[o],i[o]);if(l)return l}return De(t.length,i.length)}function Po(n){return rf(n)}function rf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ai(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ci(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=rf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const d of i)l?l=!1:o+=",",o+=`${d}:${rf(t.fields[d])}`;return o+"}"}(n.mapValue):Te()}function tc(n){switch(ki(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fc(n);return e?16+tc(e):16;case 5:return 2*n.stringValue.length;case 6:return Ci(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+tc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return ws(i.fields,(l,d)=>{o+=l.length+tc(d)}),o}(n.mapValue);default:throw Te()}}function sf(n){return!!n&&"integerValue"in n}function Kf(n){return!!n&&"arrayValue"in n}function Ly(n){return!!n&&"nullValue"in n}function Oy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nc(n){return!!n&&"mapValue"in n}function b1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ka(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ws(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ka(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ka(n.arrayValue.values[t]);return e}return Object.assign({},n)}function L1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!nc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ka(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach((d,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=h.popLast()}d?i[h.lastSegment()]=Ka(d):o.push(h.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());nc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ws(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new In(Ka(this.value))}}function eE(n){const e=[];return ws(n.fields,(t,i)=>{const o=new Dt([t]);if(nc(i)){const l=eE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const d of l)e.push(o.child(d))}else e.push(o)}),new $n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i,o,l,d,h){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=d,this.documentState=h}static newInvalidDocument(e){return new zt(e,0,Ie.min(),Ie.min(),Ie.min(),In.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ie.min(),Ie.min(),In.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ie.min(),Ie.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.position=e,this.inclusive=t}}function Vy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],d=n.position[o];if(l.field.isKeyField()?i=ve.comparator(ve.fromName(d.referenceValue),t.key):i=ko(d,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function My(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!cr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t="asc"){this.field=e,this.dir=t}}function O1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{}class _t extends tE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new M1(e,t,i):t==="array-contains"?new z1(e,i):t==="in"?new j1(e,i):t==="not-in"?new B1(e,i):t==="array-contains-any"?new $1(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new F1(e,i):new U1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ko(t,this.value)):t!==null&&ki(this.value)===ki(t)&&this.matchesComparison(ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends tE{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new dr(e,t)}matches(e){return nE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nE(n){return n.op==="and"}function rE(n){return V1(n)&&nE(n)}function V1(n){for(const e of n.filters)if(e instanceof dr)return!1;return!0}function of(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+Po(n.value);if(rE(n))return n.filters.map(e=>of(e)).join(",");{const e=n.filters.map(t=>of(t)).join(",");return`${n.op}(${e})`}}function iE(n,e){return n instanceof _t?function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&cr(i.value,o.value)}(n,e):n instanceof dr?function(i,o){return o instanceof dr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,d,h)=>l&&iE(d,o.filters[h]),!0):!1}(n,e):void Te()}function sE(n){return n instanceof _t?function(t){return`${t.field.canonicalString()} ${t.op} ${Po(t.value)}`}(n):n instanceof dr?function(t){return t.op.toString()+" {"+t.getFilters().map(sE).join(" ,")+"}"}(n):"Filter"}class M1 extends _t{constructor(e,t,i){super(e,t,i),this.key=ve.fromName(i.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class F1 extends _t{constructor(e,t){super(e,"in",t),this.keys=oE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class U1 extends _t{constructor(e,t){super(e,"not-in",t),this.keys=oE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ve.fromName(i.referenceValue))}class z1 extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kf(t)&&il(t.arrayValue,this.value)}}class j1 extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&il(this.value.arrayValue,t)}}class B1 extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!il(this.value.arrayValue,t)}}class $1 extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>il(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,t=null,i=[],o=[],l=null,d=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=d,this.endAt=h,this.ue=null}}function Fy(n,e=null,t=[],i=[],o=null,l=null,d=null){return new H1(n,e,t,i,o,l,d)}function Gf(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>of(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Po(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Po(i)).join(",")),e.ue=t}return e.ue}function Qf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!O1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!iE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!My(n.startAt,e.startAt)&&My(n.endAt,e.endAt)}function af(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t=null,i=[],o=[],l=null,d="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=d,this.startAt=h,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function W1(n,e,t,i,o,l,d,h){return new Uc(n,e,t,i,o,l,d,h)}function Yf(n){return new Uc(n)}function Uy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function q1(n){return n.collectionGroup!==null}function Ga(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let h=new Et(Dt.comparator);return d.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(h=h.add(y.field))})}),h})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new _c(l,i))}),t.has(Dt.keyField().canonicalString())||e.ce.push(new _c(Dt.keyField(),i))}return e.ce}function or(n){const e=Se(n);return e.le||(e.le=K1(e,Ga(n))),e.le}function K1(n,e){if(n.limitType==="F")return Fy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new _c(o.field,l)});const t=n.endAt?new yc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new yc(n.startAt.position,n.startAt.inclusive):null;return Fy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function lf(n,e,t){return new Uc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zc(n,e){return Qf(or(n),or(e))&&n.limitType===e.limitType}function aE(n){return`${Gf(or(n))}|lt:${n.limitType}`}function vo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>sE(o)).join(", ")}]`),Mc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Po(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Po(o)).join(",")),`Target(${i})`}(or(n))}; limitType=${n.limitType})`}function jc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ve.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Ga(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(d,h,p){const y=Vy(d,h,p);return d.inclusive?y<=0:y<0}(i.startAt,Ga(i),o)||i.endAt&&!function(d,h,p){const y=Vy(d,h,p);return d.inclusive?y>=0:y>0}(i.endAt,Ga(i),o))}(n,e)}function G1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lE(n){return(e,t)=>{let i=!1;for(const o of Ga(n)){const l=Q1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function Q1(n,e,t){const i=n.field.isKeyField()?ve.comparator(e.key,t.key):function(l,d,h){const p=d.data.field(l),y=h.data.field(l);return p!==null&&y!==null?ko(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Jv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new nt(ve.comparator);function jr(){return Y1}const uE=new nt(ve.comparator);function $a(...n){let e=uE;for(const t of n)e=e.insert(t.key,t);return e}function cE(n){let e=uE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function cs(){return Qa()}function dE(){return Qa()}function Qa(){return new Ts(n=>n.toString(),(n,e)=>n.isEqual(e))}const X1=new nt(ve.comparator),J1=new Et(ve.comparator);function Pe(...n){let e=J1;for(const t of n)e=e.add(t);return e}const Z1=new Et(De);function ek(){return Z1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function hE(n){return{integerValue:""+n}}function tk(n,e){return k1(e)?hE(e):Xf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this._=void 0}}function nk(n,e,t){return n instanceof vc?function(o,l){const d={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&qf(l)&&(l=Fc(l)),l&&(d.fields.__previous_value__=l),{mapValue:d}}(t,e):n instanceof sl?pE(n,e):n instanceof ol?mE(n,e):function(o,l){const d=fE(o,l),h=zy(d)+zy(o.Pe);return sf(d)&&sf(o.Pe)?hE(h):Xf(o.serializer,h)}(n,e)}function rk(n,e,t){return n instanceof sl?pE(n,e):n instanceof ol?mE(n,e):t}function fE(n,e){return n instanceof Ec?function(i){return sf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class vc extends Bc{}class sl extends Bc{constructor(e){super(),this.elements=e}}function pE(n,e){const t=gE(e);for(const i of n.elements)t.some(o=>cr(o,i))||t.push(i);return{arrayValue:{values:t}}}class ol extends Bc{constructor(e){super(),this.elements=e}}function mE(n,e){let t=gE(e);for(const i of n.elements)t=t.filter(o=>!cr(o,i));return{arrayValue:{values:t}}}class Ec extends Bc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function zy(n){return at(n.integerValue||n.doubleValue)}function gE(n){return Kf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ik(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof sl&&o instanceof sl||i instanceof ol&&o instanceof ol?Co(i.elements,o.elements,cr):i instanceof Ec&&o instanceof Ec?cr(i.Pe,o.Pe):i instanceof vc&&o instanceof vc}(n.transform,e.transform)}class sk{constructor(e,t){this.version=e,this.transformResults=t}}class Mr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mr}static exists(e){return new Mr(void 0,e)}static updateTime(e){return new Mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $c{}function yE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new vE(n.key,Mr.none()):new vl(n.key,n.data,Mr.none());{const t=n.data,i=In.empty();let o=new Et(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let d=t.field(l);d===null&&l.length>1&&(l=l.popLast(),d=t.field(l)),d===null?i.delete(l):i.set(l,d),o=o.add(l)}return new Is(n.key,i,new $n(o.toArray()),Mr.none())}}function ok(n,e,t){n instanceof vl?function(o,l,d){const h=o.value.clone(),p=By(o.fieldTransforms,l,d.transformResults);h.setAll(p),l.convertToFoundDocument(d.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Is?function(o,l,d){if(!rc(o.precondition,l))return void l.convertToUnknownDocument(d.version);const h=By(o.fieldTransforms,l,d.transformResults),p=l.data;p.setAll(_E(o)),p.setAll(h),l.convertToFoundDocument(d.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,d){l.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,t)}function Ya(n,e,t,i){return n instanceof vl?function(l,d,h,p){if(!rc(l.precondition,d))return h;const y=l.value.clone(),E=$y(l.fieldTransforms,p,d);return y.setAll(E),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Is?function(l,d,h,p){if(!rc(l.precondition,d))return h;const y=$y(l.fieldTransforms,p,d),E=d.data;return E.setAll(_E(l)),E.setAll(y),d.convertToFoundDocument(d.version,E).setHasLocalMutations(),h===null?null:h.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(I=>I.field))}(n,e,t,i):function(l,d,h){return rc(l.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):h}(n,e,t)}function ak(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=fE(i.transform,o||null);l!=null&&(t===null&&(t=In.empty()),t.set(i.field,l))}return t||null}function jy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Co(i,o,(l,d)=>ik(l,d))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vl extends $c{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Is extends $c{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function _E(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function By(n,e,t){const i=new Map;je(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],d=l.transform,h=e.data.field(l.field);i.set(l.field,rk(d,h,t[o]))}return i}function $y(n,e,t){const i=new Map;for(const o of n){const l=o.transform,d=t.data.field(o.field);i.set(o.field,nk(l,d,e))}return i}class vE extends $c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lk extends $c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&ok(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=dE();return this.mutations.forEach(o=>{const l=e.get(o.key),d=l.overlayedDocument;let h=this.applyToLocalView(d,l.mutatedFields);h=t.has(o.key)?null:h;const p=yE(d,h);p!==null&&i.set(o.key,p),d.isValidDocument()||d.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(t,i)=>jy(t,i))&&Co(this.baseMutations,e.baseMutations,(t,i)=>jy(t,i))}}class Jf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length);let o=function(){return X1}();const l=e.mutations;for(let d=0;d<l.length;d++)o=o.insert(l[d].key,i[d].version);return new Jf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Oe;function hk(n){switch(n){default:return Te();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0}}function EE(n){if(n===void 0)return zr("GRPC error has no .code"),Z.UNKNOWN;switch(n){case ct.OK:return Z.OK;case ct.CANCELLED:return Z.CANCELLED;case ct.UNKNOWN:return Z.UNKNOWN;case ct.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case ct.INTERNAL:return Z.INTERNAL;case ct.UNAVAILABLE:return Z.UNAVAILABLE;case ct.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case ct.NOT_FOUND:return Z.NOT_FOUND;case ct.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case ct.ABORTED:return Z.ABORTED;case ct.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case ct.DATA_LOSS:return Z.DATA_LOSS;default:return Te()}}(Oe=ct||(ct={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=new Ti([4294967295,4294967295],0);function Hy(n){const e=fk().encode(n),t=new Hv;return t.update(e),new Uint8Array(t.digest())}function Wy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ti([t,i],0),new Ti([o,l],0)]}class Zf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ha(`Invalid padding: ${t}`);if(i<0)throw new Ha(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ha(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ha(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ti.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Ti.fromNumber(i)));return o.compare(pk)===1&&(o=new Ti([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Hy(e),[i,o]=Wy(t);for(let l=0;l<this.hashCount;l++){const d=this.de(i,o,l);if(!this.Ee(d))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),d=new Zf(l,o,t);return i.forEach(h=>d.insert(h)),d}insert(e){if(this.Te===0)return;const t=Hy(e),[i,o]=Wy(t);for(let l=0;l<this.hashCount;l++){const d=this.de(i,o,l);this.Ae(d)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Hc(Ie.min(),o,new nt(De),jr(),Pe())}}class El{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new El(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class wE{constructor(e,t){this.targetId=e,this.me=t}}class TE{constructor(e,t,i=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class qy{constructor(){this.fe=0,this.ge=Ky(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new El(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Ky()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mk{constructor(e){this.Be=e,this.Le=new Map,this.ke=jr(),this.qe=qu(),this.Qe=qu(),this.Ke=new nt(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(af(l))if(i===0){const d=new ve(l.path);this.We(t,d,zt.newNoDocument(d,Ie.min()))}else je(i===1);else{const d=this.Ze(t);if(d!==i){const h=this.Xe(e),p=h?this.et(h,e,d):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let d,h;try{d=Ci(i).toUint8Array()}catch(p){if(p instanceof Zv)return Ao("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new Zf(d,o,l)}catch(p){return Ao(p instanceof Ha?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.Te===0?null:h}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const d=this.Be.nt(),h=`projects/${d.projectId}/databases/${d.database}/documents/${l.path.canonicalString()}`;e.mightContain(h)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((l,d)=>{const h=this.Ye(d);if(h){if(l.current&&af(h.target)){const p=new ve(h.target.path);this.st(p).has(d)||this.ot(d,p)||this.We(d,p,zt.newNoDocument(p,e))}l.be&&(t.set(d,l.ve()),l.Ce())}});let i=Pe();this.Qe.forEach((l,d)=>{let h=!0;d.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(l))}),this.ke.forEach((l,d)=>d.setReadTime(e));const o=new Hc(e,t,this.Ke,this.ke,i);return this.ke=jr(),this.qe=qu(),this.Qe=qu(),this.Ke=new nt(De),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new qy,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Et(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Et(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new qy),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function qu(){return new nt(ve.comparator)}function Ky(){return new nt(ve.comparator)}const gk={asc:"ASCENDING",desc:"DESCENDING"},yk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_k={and:"AND",or:"OR"};class vk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uf(n,e){return n.useProto3Json||Mc(e)?e:{value:e}}function wc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ek(n,e){return wc(n,e.toTimestamp())}function ar(n){return je(!!n),Ie.fromTimestamp(function(t){const i=Ai(t);return new vt(i.seconds,i.nanos)}(n))}function ep(n,e){return cf(n,e).canonicalString()}function cf(n,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function SE(n){const e=it.fromString(n);return je(PE(e)),e}function df(n,e){return ep(n.databaseId,e.path)}function zh(n,e){const t=SE(e);if(t.get(1)!==n.databaseId.projectId)throw new _e(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _e(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(AE(t))}function RE(n,e){return ep(n.databaseId,e)}function wk(n){const e=SE(n);return e.length===4?it.emptyPath():AE(e)}function hf(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function AE(n){return je(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Gy(n,e,t){return{name:df(n,e),fields:t.value.mapValue.fields}}function Tk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(je(E===void 0||typeof E=="string"),bt.fromBase64String(E||"")):(je(E===void 0||E instanceof Buffer||E instanceof Uint8Array),bt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),d=e.targetChange.cause,h=d&&function(y){const E=y.code===void 0?Z.UNKNOWN:EE(y.code);return new _e(E,y.message||"")}(d);t=new TE(i,o,l,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=zh(n,i.document.name),l=ar(i.document.updateTime),d=i.document.createTime?ar(i.document.createTime):Ie.min(),h=new In({mapValue:{fields:i.document.fields}}),p=zt.newFoundDocument(o,l,d,h),y=i.targetIds||[],E=i.removedTargetIds||[];t=new ic(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=zh(n,i.document),l=i.readTime?ar(i.readTime):Ie.min(),d=zt.newNoDocument(o,l),h=i.removedTargetIds||[];t=new ic([],h,d.key,d)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=zh(n,i.document),l=i.removedTargetIds||[];t=new ic([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,d=new dk(o,l),h=i.targetId;t=new wE(h,d)}}return t}function Ik(n,e){let t;if(e instanceof vl)t={update:Gy(n,e.key,e.value)};else if(e instanceof vE)t={delete:df(n,e.key)};else if(e instanceof Is)t={update:Gy(n,e.key,e.data),updateMask:Dk(e.fieldMask)};else{if(!(e instanceof lk))return Te();t={verify:df(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,d){const h=d.transform;if(h instanceof vc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof sl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof ol)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Ec)return{fieldPath:d.field.canonicalString(),increment:h.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:Ek(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function Sk(n,e){return n&&n.length>0?(je(e!==void 0),n.map(t=>function(o,l){let d=o.updateTime?ar(o.updateTime):ar(l);return d.isEqual(Ie.min())&&(d=ar(l)),new sk(d,o.transformResults||[])}(t,e))):[]}function Rk(n,e){return{documents:[RE(n,e.path)]}}function Ak(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=RE(n,o);const l=function(y){if(y.length!==0)return kE(dr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const d=function(y){if(y.length!==0)return y.map(E=>function(S){return{field:Eo(S.field),direction:Pk(S.dir)}}(E))}(e.orderBy);d&&(t.structuredQuery.orderBy=d);const h=uf(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function Ck(n){let e=wk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(I){const S=CE(I);return S instanceof dr&&rE(S)?S.getFilters():[S]}(t.where));let d=[];t.orderBy&&(d=function(I){return I.map(S=>function(V){return new _c(wo(V.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(S))}(t.orderBy));let h=null;t.limit&&(h=function(I){let S;return S=typeof I=="object"?I.value:I,Mc(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(I){const S=!!I.before,N=I.values||[];return new yc(N,S)}(t.startAt));let y=null;return t.endAt&&(y=function(I){const S=!I.before,N=I.values||[];return new yc(N,S)}(t.endAt)),W1(e,o,d,l,h,"F",p,y)}function kk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function CE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=wo(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=wo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=wo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=wo(t.unaryFilter.field);return _t.create(d,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return _t.create(wo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return dr.create(t.compositeFilter.filters.map(i=>CE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function Pk(n){return gk[n]}function xk(n){return yk[n]}function Nk(n){return _k[n]}function Eo(n){return{fieldPath:n.canonicalString()}}function wo(n){return Dt.fromServerFormat(n.fieldPath)}function kE(n){return n instanceof _t?function(t){if(t.op==="=="){if(Oy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NAN"}};if(Ly(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Oy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NAN"}};if(Ly(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(t.field),op:xk(t.op),value:t.value}}}(n):n instanceof dr?function(t){const i=t.getFilters().map(o=>kE(o));return i.length===1?i[0]:{compositeFilter:{op:Nk(t.op),filters:i}}}(n):Te()}function Dk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function PE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,i,o,l=Ie.min(),d=Ie.min(),h=bt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.ht=e}}function Lk(n){const e=Ck({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.ln=new Vk}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ri.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class Vk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(it.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(41943040,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new xo(0)}static Qn(){return new xo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy([n,e],[t,i]){const o=De(n,t);return o===0?De(e,i):o}class Mk{constructor(e){this.Gn=e,this.buffer=new Et(Yy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Yy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Fk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zo(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Uo(t)}await this.Yn(3e5)})}}class Uk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Vc.oe);const i=new Mk(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Qy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,d,h,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,d=Date.now(),this.nthSequenceNumber(e,o))).next(I=>(i=I,h=Date.now(),this.removeTargets(e,i,t))).next(I=>(l=I,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(I=>(y=Date.now(),_o()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-E}ms
	Determined least recently used ${o} in `+(h-d)+`ms
	Removed ${l} targets in `+(p-h)+`ms
	Removed ${I} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I})))}}function zk(n,e){return new Uk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.changes=new Ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ya(i.mutation,o,$n.empty(),vt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const o=cs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let d=$a();return l.forEach((h,p)=>{d=d.insert(h,p.overlayedDocument)}),d}))}getOverlayedDocuments(e,t){const i=cs();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((d,h)=>{t.set(d,h)})})}computeViews(e,t,i,o){let l=jr();const d=Qa(),h=function(){return Qa()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Is)?l=l.insert(y.key,y):E!==void 0?(d.set(y.key,E.mutation.getFieldMask()),Ya(E.mutation,y,E.mutation.getFieldMask(),vt.now())):d.set(y.key,$n.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>d.set(y,E)),t.forEach((y,E)=>{var I;return h.set(y,new Bk(E,(I=d.get(y))!==null&&I!==void 0?I:null))}),h))}recalculateAndSaveOverlays(e,t){const i=Qa();let o=new nt((d,h)=>d-h),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(d=>{for(const h of d)h.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||$n.empty();E=h.applyToLocalView(y,E),i.set(p,E);const I=(o.get(h.batchId)||Pe()).add(p);o=o.insert(h.batchId,I)})}).next(()=>{const d=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),y=p.key,E=p.value,I=dE();E.forEach(S=>{if(!l.has(S)){const N=yE(t.get(S),i.get(S));N!==null&&I.set(S,N),l=l.add(S)}}),d.push(this.documentOverlayCache.saveOverlays(e,y,I))}return G.waitFor(d)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(d){return ve.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):q1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const d=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(cs());let h=-1,p=l;return d.next(y=>G.forEach(y,(E,I)=>(h<I.largestBatchId&&(h=I.largestBatchId),l.get(E)?G.resolve():this.remoteDocumentCache.getEntry(e,E).next(S=>{p=p.insert(E,S)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Pe())).next(E=>({batchId:h,changes:cE(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(i=>{let o=$a();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let d=$a();return this.indexManager.getCollectionParents(e,l).next(h=>G.forEach(h,p=>{const y=function(I,S){return new Uc(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((I,S)=>{d=d.insert(I,S)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(d=>(l=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(d=>{l.forEach((p,y)=>{const E=y.getKey();d.get(E)===null&&(d=d.insert(E,zt.newInvalidDocument(E)))});let h=$a();return d.forEach((p,y)=>{const E=l.get(p);E!==void 0&&Ya(E.mutation,y,$n.empty(),vt.now()),jc(t,y)&&(h=h.insert(p,y))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:Lk(o.bundledQuery),readTime:ar(o.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.overlays=new nt(ve.comparator),this.dr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=cs();return G.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.dr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=cs(),l=t.length+1,d=new ve(t.child("")),h=this.overlays.getIteratorFrom(d);for(;h.hasNext();){const p=h.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt((y,E)=>y-E);const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=cs(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const h=cs(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>h.set(y,E)),!(h.size()>=o)););return G.resolve(h)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const d=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(i.key,new ck(t,i));let l=this.dr.get(t);l===void 0&&(l=Pe(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.Er=new Et(At.Ar),this.Rr=new Et(At.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new At(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new At(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ve(new it([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.Rr.forEachInRange([i,o],d=>{this.gr(d),l.push(d.key)}),l}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ve(new it([])),i=new At(t,e),o=new At(t,e+1);let l=Pe();return this.Rr.forEachInRange([i,o],d=>{l=l.add(d.key)}),l}containsKey(e){const t=new At(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ve.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Et(At.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new uk(l,t,i,o);this.mutationQueue.push(d);for(const h of o)this.vr=this.vr.add(new At(h.key,l)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return G.resolve(d)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],d=>{const h=this.Cr(d.br);l.push(h)}),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(De);return t.forEach(o=>{const l=new At(o,0),d=new At(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,d],h=>{i=i.add(h.br)})}),G.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ve.isDocumentKey(l)||(l=l.child(""));const d=new At(new ve(l),0);let h=new Et(De);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(h=h.add(p.br)),!0)},d),G.resolve(this.Mr(h))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return G.forEach(t.mutations,o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new At(t,0),o=this.vr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.Nr=e,this.docs=function(){return new nt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,d=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:d}),this.size+=d-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=jr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))}),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=jr();const d=t.path,h=new ve(d.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||S1(I1(E),i)<=0||(o.has(E.key)||jc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Br(e,t){return G.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Qk(this)}getSize(e){return G.resolve(this.size)}}class Qk extends jk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.persistence=e,this.Lr=new Ts(t=>Gf(t),Qf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new tp,this.targetCount=0,this.Qr=xo.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new xo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach((d,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.Lr.delete(d),l.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)}),G.waitFor(l).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(d=>{l.push(o.markPotentiallyOrphaned(e,d))}),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Vc(0),this.Ur=!1,this.Ur=!0,this.Wr=new qk,this.referenceDelegate=e(this),this.Gr=new Yk(this),this.indexManager=new Ok,this.remoteDocumentCache=function(o){return new Gk(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new bk(t),this.jr=new Hk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Wk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new Kk(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new Xk(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return G.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class Xk extends A1{constructor(e){super(),this.currentSequenceNumber=e}}class np{constructor(e){this.persistence=e,this.Zr=new tp,this.Xr=null}static ei(e){return new np(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,i=>{const o=ve.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Tc{constructor(e,t){this.persistence=e,this.ri=new Ts(i=>P1(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=zk(this,t)}static ei(e,t){return new Tc(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?G.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,d=>this.ir(e,d,t).next(h=>{h||(i++,l.removeEntry(d,Ie.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=tc(e.data.value)),t}ir(e,t,i){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new rp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return pI()?8:C1(jt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(d=>{l.result=d}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(d=>{l.result=d})}).next(()=>{if(l.result)return;const d=new Jk;return this.ts(e,t,d).next(h=>{if(l.result=h,this.Hi)return this.ns(e,t,d,h.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(_o()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(_o()<=ke.DEBUG&&ae("QueryEngine","Query:",vo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(_o()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):G.resolve())}Xi(e,t){if(Uy(t))return G.resolve(null);let i=or(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=lf(t,null,"F"),i=or(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const d=Pe(...l);return this.Zi.getDocuments(e,d).next(h=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,h);return this.ss(t,y,d,p.readTime)?this.Xi(e,lf(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Uy(t)||o.isEqual(Ie.min())?G.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const d=this.rs(t,l);return this.ss(t,d,i,o)?G.resolve(null):(_o()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vo(t)),this.os(e,d,t,T1(o,-1)).next(h=>h))})}rs(e,t){let i=new Et(lE(e));return t.forEach((o,l)=>{jc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return _o()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",vo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ri.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(d=>{l=l.insert(d.key,d)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new nt(De),this.cs=new Ts(l=>Gf(l),Qf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $k(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function tP(n,e,t,i){return new eP(n,e,t,i)}async function NE(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const d=[],h=[];let p=Pe();for(const y of o){d.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:d,addedBatchIds:h}))})})}function nP(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(h,p,y,E){const I=y.batch,S=I.keys();let N=G.resolve();return S.forEach(V=>{N=N.next(()=>E.getEntry(p,V)).next(z=>{const L=y.docVersions.get(V);je(L!==null),z.version.compareTo(L)<0&&(I.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),E.addEntry(z)))})}),N.next(()=>h.mutationQueue.removeMutationBatch(p,I))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let p=Pe();for(let y=0;y<h.mutationResults.length;++y)h.mutationResults[y].transformResults.length>0&&(p=p.add(h.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function DE(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function rP(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const d=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const h=[];e.targetChanges.forEach((E,I)=>{const S=o.get(I);if(!S)return;h.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,I).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,I)));let N=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?N=N.withResumeToken(bt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):E.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(E.resumeToken,i)),o=o.insert(I,N),function(z,L,H){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(S,N,E)&&h.push(t.Gr.updateTargetData(l,N))});let p=jr(),y=Pe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),h.push(iP(l,d,e.documentUpdates).next(E=>{p=E.Is,y=E.ds})),!i.isEqual(Ie.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(I=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));h.push(E)}return G.waitFor(h).next(()=>d.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function iP(n,e,t){let i=Pe(),o=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let d=jr();return t.forEach((h,p)=>{const y=l.get(h);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(h,p.readTime),d=d.insert(h,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),d=d.insert(h,p)):ae("LocalStore","Ignoring outdated watch update for ",h,". Current version:",y.version," Watch version:",p.version)}),{Is:d,ds:o}})}function sP(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function oP(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,G.resolve(o)):t.Gr.allocateTargetId(i).next(d=>(o=new vi(e,d,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function ff(n,e,t){const i=Se(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,d=>i.persistence.referenceDelegate.removeTarget(d,o))}catch(d){if(!zo(d))throw d;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${d}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function Xy(n,e,t){const i=Se(n);let o=Ie.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",d=>function(p,y,E){const I=Se(p),S=I.cs.get(E);return S!==void 0?G.resolve(I.us.get(S)):I.Gr.getTargetData(y,E)}(i,d,or(e)).next(h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(d,h.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(d,e,t?o:Ie.min(),t?l:Pe())).next(h=>(aP(i,G1(e),h),{documents:h,Es:l})))}function aP(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class Jy{constructor(){this.activeTargetIds=ek()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lP{constructor(){this._o=new Jy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Jy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku=null;function jh(){return Ku===null?Ku=function(){return 268435456+Math.round(2147483648*Math.random())}():Ku++,"0x"+Ku.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class hP extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,d){const h=jh(),p=this.No(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${h}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,d),this.Lo(t,p,y,o).then(E=>(ae("RestConnection",`Received RPC '${t}' ${h}: `,E),E),E=>{throw Ao("RestConnection",`RPC '${t}' ${h} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,d,h){return this.Oo(t,i,o,l,d)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,d)=>t[d]=l),o&&o.headers.forEach((l,d)=>t[d]=l)}No(t,i){const o=cP[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=jh();return new Promise((d,h)=>{const p=new Wv;p.setWithCredentials(!0),p.listenOnce(qv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case ec.NO_ERROR:const E=p.getResponseJson();ae(Ft,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),d(E);break;case ec.TIMEOUT:ae(Ft,`RPC '${e}' ${l} timed out`),h(new _e(Z.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const I=p.getStatus();if(ae(Ft,`RPC '${e}' ${l} failed with status:`,I,"response text:",p.getResponseText()),I>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const V=function(L){const H=L.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(H)>=0?H:Z.UNKNOWN}(N.status);h(new _e(V,N.message))}else h(new _e(Z.UNKNOWN,"Server responded with status "+p.getStatus()))}else h(new _e(Z.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ae(Ft,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);ae(Ft,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=jh(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=Qv(),h=Gv(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");ae(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,p);const I=d.createWebChannel(E,p);let S=!1,N=!1;const V=new dP({Eo:L=>{N?ae(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(S||(ae(Ft,`Opening RPC '${e}' stream ${o} transport.`),I.open(),S=!0),ae(Ft,`RPC '${e}' stream ${o} sending:`,L),I.send(L))},Ao:()=>I.close()}),z=(L,H,B)=>{L.listen(H,K=>{try{B(K)}catch(ee){setTimeout(()=>{throw ee},0)}})};return z(I,Ba.EventType.OPEN,()=>{N||(ae(Ft,`RPC '${e}' stream ${o} transport opened.`),V.So())}),z(I,Ba.EventType.CLOSE,()=>{N||(N=!0,ae(Ft,`RPC '${e}' stream ${o} transport closed`),V.Do())}),z(I,Ba.EventType.ERROR,L=>{N||(N=!0,Ao(Ft,`RPC '${e}' stream ${o} transport errored:`,L),V.Do(new _e(Z.UNAVAILABLE,"The operation could not be completed")))}),z(I,Ba.EventType.MESSAGE,L=>{var H;if(!N){const B=L.data[0];je(!!B);const K=B,ee=(K==null?void 0:K.error)||((H=K[0])===null||H===void 0?void 0:H.error);if(ee){ae(Ft,`RPC '${e}' stream ${o} received error:`,ee);const he=ee.status;let fe=function(R){const P=ct[R];if(P!==void 0)return EE(P)}(he),k=ee.message;fe===void 0&&(fe=Z.INTERNAL,k="Unknown error status: "+he+" with message "+ee.message),N=!0,V.Do(new _e(fe,k)),I.close()}else ae(Ft,`RPC '${e}' stream ${o} received:`,B),V.vo(B)}}),z(h,Kv.STAT_EVENT,L=>{L.stat===nf.PROXY?ae(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===nf.NOPROXY&&ae(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function Bh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){return new vk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t,i,o,l,d,h,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new bE(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new _e(Z.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fP extends LE{constructor(e,t,i,o,l,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,d),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Tk(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const d=l.targetChange;return d.targetIds&&d.targetIds.length?Ie.min():d.readTime?ar(d.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=hf(this.serializer),t.addTarget=function(l,d){let h;const p=d.target;if(h=af(p)?{documents:Rk(l,p)}:{query:Ak(l,p).ct},h.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){h.resumeToken=IE(l,d.resumeToken);const y=uf(l,d.expectedCount);y!==null&&(h.expectedCount=y)}else if(d.snapshotVersion.compareTo(Ie.min())>0){h.readTime=wc(l,d.snapshotVersion.toTimestamp());const y=uf(l,d.expectedCount);y!==null&&(h.expectedCount=y)}return h}(this.serializer,e);const i=kk(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=hf(this.serializer),t.removeTarget=e,this.c_(t)}}class pP extends LE{constructor(e,t,i,o,l,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,d),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Sk(e.writeResults,e.commitTime),i=ar(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=hf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Ik(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new _e(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,d])=>this.connection.Oo(e,cf(t,i),o,l,d)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _e(Z.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,h])=>this.connection.ko(e,cf(t,i),o,d,h,l)).catch(d=>{throw d.name==="FirebaseError"?(d.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new _e(Z.UNKNOWN,d.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class gP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(zr(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(d=>{i.enqueueAndForget(async()=>{Ss(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.k_.add(4),await wl(y),y.K_.set("Unknown"),y.k_.delete(4),await qc(y)}(this))})}),this.K_=new gP(i,o)}}async function qc(n){if(Ss(n))for(const e of n.q_)await e(!0)}async function wl(n){for(const e of n.q_)await e(!1)}function OE(n,e){const t=Se(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),ap(t)?op(t):jo(t).s_()&&sp(t,e))}function ip(n,e){const t=Se(n),i=jo(t);t.L_.delete(e),i.s_()&&VE(t,e),t.L_.size===0&&(i.s_()?i.a_():Ss(t)&&t.K_.set("Unknown"))}function sp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jo(n).V_(e)}function VE(n,e){n.U_.xe(e),jo(n).m_(e)}function op(n){n.U_=new mk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),jo(n).start(),n.K_.F_()}function ap(n){return Ss(n)&&!jo(n).i_()&&n.L_.size>0}function Ss(n){return Se(n).k_.size===0}function ME(n){n.U_=void 0}async function _P(n){n.K_.set("Online")}async function vP(n){n.L_.forEach((e,t)=>{sp(n,e)})}async function EP(n,e){ME(n),ap(n)?(n.K_.O_(e),op(n)):n.K_.set("Unknown")}async function wP(n,e,t){if(n.K_.set("Online"),e instanceof TE&&e.state===2&&e.cause)try{await async function(o,l){const d=l.cause;for(const h of l.targetIds)o.L_.has(h)&&(await o.remoteSyncer.rejectListen(h,d),o.L_.delete(h),o.U_.removeTarget(h))}(n,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ic(n,i)}else if(e instanceof ic?n.U_.$e(e):e instanceof wE?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await DE(n.localStore);t.compareTo(i)>=0&&await function(l,d){const h=l.U_.it(d);return h.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.L_.get(y);E&&l.L_.set(y,E.withResumeToken(p.resumeToken,d))}}),h.targetMismatches.forEach((p,y)=>{const E=l.L_.get(p);if(!E)return;l.L_.set(p,E.withResumeToken(bt.EMPTY_BYTE_STRING,E.snapshotVersion)),VE(l,p);const I=new vi(E.target,p,y,E.sequenceNumber);sp(l,I)}),l.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await Ic(n,i)}}async function Ic(n,e,t){if(!zo(e))throw e;n.k_.add(1),await wl(n),n.K_.set("Offline"),t||(t=()=>DE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await qc(n)})}function FE(n,e){return e().catch(t=>Ic(n,t,e))}async function Kc(n){const e=Se(n),t=Pi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;TP(e);)try{const o=await sP(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,IP(e,o)}catch(o){await Ic(e,o)}UE(e)&&zE(e)}function TP(n){return Ss(n)&&n.B_.length<10}function IP(n,e){n.B_.push(e);const t=Pi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function UE(n){return Ss(n)&&!Pi(n).i_()&&n.B_.length>0}function zE(n){Pi(n).start()}async function SP(n){Pi(n).w_()}async function RP(n){const e=Pi(n);for(const t of n.B_)e.g_(t.mutations)}async function AP(n,e,t){const i=n.B_.shift(),o=Jf.from(i,e,t);await FE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Kc(n)}async function CP(n,e){e&&Pi(n).f_&&await async function(i,o){if(function(d){return hk(d)&&d!==Z.ABORTED}(o.code)){const l=i.B_.shift();Pi(i).__(),await FE(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Kc(i)}}(n,e),UE(n)&&zE(n)}async function e_(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=Ss(t);t.k_.add(3),await wl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await qc(t)}async function kP(n,e){const t=Se(n);e?(t.k_.delete(2),await qc(t)):e||(t.k_.add(2),await wl(t),t.K_.set("Unknown"))}function jo(n){return n.W_||(n.W_=function(t,i,o){const l=Se(t);return l.b_(),new fP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:_P.bind(null,n),mo:vP.bind(null,n),po:EP.bind(null,n),R_:wP.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),ap(n)?op(n):n.K_.set("Unknown")):(await n.W_.stop(),ME(n))})),n.W_}function Pi(n){return n.G_||(n.G_=function(t,i,o){const l=Se(t);return l.b_(),new pP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:SP.bind(null,n),po:CP.bind(null,n),p_:RP.bind(null,n),y_:AP.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Kc(n)):(await n.G_.stop(),n.B_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const d=Date.now()+i,h=new lp(e,t,d,o,l);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function up(n,e){if(zr("AsyncQueue",`${e}: ${n}`),zo(n))return new _e(Z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{static emptySet(e){return new Ro(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ve.comparator(t.key,i.key):(t,i)=>ve.comparator(t.key,i.key),this.keyedMap=$a(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ro)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ro;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(){this.z_=new nt(ve.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class No{constructor(e,t,i,o,l,d,h,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=d,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const d=[];return t.forEach(h=>{d.push({type:0,doc:h})}),new No(e,t,Ro.emptySet(t),d,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class xP{constructor(){this.queries=n_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=n_(),l.forEach((d,h)=>{for(const p of h.J_)p.onError(i)})})(this,new _e(Z.ABORTED,"Firestore shutting down"))}}function n_(){return new Ts(n=>aE(n),zc)}async function NP(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new PP,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(d){const h=up(d,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&cp(t)}async function DP(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const d=l.J_.indexOf(e);d>=0&&(l.J_.splice(d,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function bP(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,d=t.queries.get(l);if(d){for(const h of d.J_)h.ta(o)&&(i=!0);d.H_=o}}i&&cp(t)}function LP(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function cp(n){n.X_.forEach(e=>{e.next()})}var pf,r_;(r_=pf||(pf={})).na="default",r_.Cache="cache";class OP{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new No(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==pf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class VP{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=lE(e),this.ma=new Ro(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new t_,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,d=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,I)=>{const S=o.get(E),N=jc(this.query,I)?I:null,V=!!S&&this.mutatedKeys.has(S.key),z=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let L=!1;S&&N?S.data.isEqual(N.data)?V!==z&&(i.track({type:3,doc:N}),L=!0):this.ya(S,N)||(i.track({type:2,doc:N}),L=!0,(p&&this.Va(N,p)>0||y&&this.Va(N,y)<0)&&(h=!0)):!S&&N?(i.track({type:0,doc:N}),L=!0):S&&!N&&(i.track({type:1,doc:S}),L=!0,(p||y)&&(h=!0)),L&&(N?(d=d.add(N),l=z?l.add(E):l.delete(E)):(d=d.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const E=this.query.limitType==="F"?d.last():d.first();d=d.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:d,pa:i,ss:h,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const d=e.pa.j_();d.sort((E,I)=>function(N,V){const z=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return z(N)-z(V)}(E.type,I.type)||this.Va(E.doc,I.doc)),this.wa(i),o=o!=null&&o;const h=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,d.length!==0||y?{snapshot:new No(this.query,e.ma,l,d,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:h}:{ba:h}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new t_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new BE(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new jE(i))}),t}va(e){this.Ea=e.Es,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return No.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class MP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class FP{constructor(e){this.key=e,this.Fa=!1}}class UP{constructor(e,t,i,o,l,d){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=d,this.Ma={},this.xa=new Ts(h=>aE(h),zc),this.Oa=new Map,this.Na=new Set,this.Ba=new nt(ve.comparator),this.La=new Map,this.ka=new tp,this.qa={},this.Qa=new Map,this.Ka=xo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function zP(n,e,t=!0){const i=GE(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await $E(i,e,t,!0),o}async function jP(n,e){const t=GE(n);await $E(t,e,!0,!1)}async function $E(n,e,t,i){const o=await oP(n.localStore,or(e)),l=o.targetId,d=n.sharedClientState.addLocalQueryTarget(l,t);let h;return i&&(h=await BP(n,e,l,d==="current",o.resumeToken)),n.isPrimaryClient&&t&&OE(n.remoteStore,o),h}async function BP(n,e,t,i,o){n.Ua=(I,S,N)=>async function(z,L,H,B){let K=L.view.ga(H);K.ss&&(K=await Xy(z.localStore,L.query,!1).then(({documents:k})=>L.view.ga(k,K)));const ee=B&&B.targetChanges.get(L.targetId),he=B&&B.targetMismatches.get(L.targetId)!=null,fe=L.view.applyChanges(K,z.isPrimaryClient,ee,he);return s_(z,L.targetId,fe.ba),fe.snapshot}(n,I,S,N);const l=await Xy(n.localStore,e,!0),d=new VP(e,l.Es),h=d.ga(l.documents),p=El.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=d.applyChanges(h,n.isPrimaryClient,p);s_(n,t,y.ba);const E=new MP(e,t,d);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function $P(n,e,t){const i=Se(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(d=>!zc(d,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await ff(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&ip(i.remoteStore,o.targetId),mf(i,o.targetId)}).catch(Uo)):(mf(i,o.targetId),await ff(i.localStore,o.targetId,!0))}async function HP(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ip(t.remoteStore,i.targetId))}async function WP(n,e,t){const i=JP(n);try{const o=await function(d,h){const p=Se(d),y=vt.now(),E=h.reduce((N,V)=>N.add(V.key),Pe());let I,S;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let V=jr(),z=Pe();return p.hs.getEntries(N,E).next(L=>{V=L,V.forEach((H,B)=>{B.isValidDocument()||(z=z.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,V)).next(L=>{I=L;const H=[];for(const B of h){const K=ak(B,I.get(B.key).overlayedDocument);K!=null&&H.push(new Is(B.key,K,eE(K.value.mapValue),Mr.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,H,h)}).next(L=>{S=L;const H=L.applyToLocalDocumentSet(I,z);return p.documentOverlayCache.saveOverlays(N,L.batchId,H)})}).then(()=>({batchId:S.batchId,changes:cE(I)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(d,h,p){let y=d.qa[d.currentUser.toKey()];y||(y=new nt(De)),y=y.insert(h,p),d.qa[d.currentUser.toKey()]=y}(i,o.batchId,t),await Tl(i,o.changes),await Kc(i.remoteStore)}catch(o){const l=up(o,"Failed to persist write");t.reject(l)}}async function HE(n,e){const t=Se(n);try{const i=await rP(t.localStore,e);e.targetChanges.forEach((o,l)=>{const d=t.La.get(l);d&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?d.Fa=!0:o.modifiedDocuments.size>0?je(d.Fa):o.removedDocuments.size>0&&(je(d.Fa),d.Fa=!1))}),await Tl(t,i,e)}catch(i){await Uo(i)}}function i_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,d)=>{const h=d.view.ea(e);h.snapshot&&o.push(h.snapshot)}),function(d,h){const p=Se(d);p.onlineState=h;let y=!1;p.queries.forEach((E,I)=>{for(const S of I.J_)S.ea(h)&&(y=!0)}),y&&cp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function qP(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let d=new nt(ve.comparator);d=d.insert(l,zt.newNoDocument(l,Ie.min()));const h=Pe().add(l),p=new Hc(Ie.min(),new Map,new nt(De),d,h);await HE(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),dp(i)}else await ff(i.localStore,e,!1).then(()=>mf(i,e,t)).catch(Uo)}async function KP(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await nP(t.localStore,e);qE(t,i,null),WE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Tl(t,o)}catch(o){await Uo(o)}}async function GP(n,e,t){const i=Se(n);try{const o=await function(d,h){const p=Se(d);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,h).next(I=>(je(I!==null),E=I.keys(),p.mutationQueue.removeMutationBatch(y,I))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,h)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);qE(i,e,t),WE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Tl(i,o)}catch(o){await Uo(o)}}function WE(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function qE(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function mf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||KE(n,i)})}function KE(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(ip(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),dp(n))}function s_(n,e,t){for(const i of t)i instanceof jE?(n.ka.addReference(i.key,e),QP(n,i)):i instanceof BE?(ae("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||KE(n,i.key)):Te()}function QP(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(i),dp(n))}function dp(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ve(it.fromString(e)),i=n.Ka.next();n.La.set(i,new FP(t)),n.Ba=n.Ba.insert(t,i),OE(n.remoteStore,new vi(or(Yf(t.path)),i,"TargetPurposeLimboResolution",Vc.oe))}}async function Tl(n,e,t){const i=Se(n),o=[],l=[],d=[];i.xa.isEmpty()||(i.xa.forEach((h,p)=>{d.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const I=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,I?"current":"not-current")}if(y){o.push(y);const I=rp.zi(p.targetId,y);l.push(I)}}))}),await Promise.all(d),i.Ma.R_(o),await async function(p,y){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>G.forEach(y,S=>G.forEach(S.Wi,N=>E.persistence.referenceDelegate.addReference(I,S.targetId,N)).next(()=>G.forEach(S.Gi,N=>E.persistence.referenceDelegate.removeReference(I,S.targetId,N)))))}catch(I){if(!zo(I))throw I;ae("LocalStore","Failed to update sequence numbers: "+I)}for(const I of y){const S=I.targetId;if(!I.fromCache){const N=E.us.get(S),V=N.snapshotVersion,z=N.withLastLimboFreeSnapshotVersion(V);E.us=E.us.insert(S,z)}}}(i.localStore,l))}async function YP(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await NE(t.localStore,e);t.currentUser=e,function(l,d){l.Qa.forEach(h=>{h.forEach(p=>{p.reject(new _e(Z.CANCELLED,d))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Tl(t,i.Ts)}}function XP(n,e){const t=Se(n),i=t.La.get(e);if(i&&i.Fa)return Pe().add(i.key);{let o=Pe();const l=t.Oa.get(e);if(!l)return o;for(const d of l){const h=t.xa.get(d);o=o.unionWith(h.view.fa)}return o}}function GE(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=HE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qP.bind(null,e),e.Ma.R_=bP.bind(null,e.eventManager),e.Ma.Wa=LP.bind(null,e.eventManager),e}function JP(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GP.bind(null,e),e}class Sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return tP(this.persistence,new Zk,e.initialUser,this.serializer)}ja(e){return new xE(np.ei,this.serializer)}za(e){return new lP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sc.provider={build:()=>new Sc};class ZP extends Sc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){je(this.persistence.referenceDelegate instanceof Tc);const i=this.persistence.referenceDelegate.garbageCollector;return new Fk(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new xE(i=>Tc.ei(i,t),this.serializer)}}class gf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>i_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=YP.bind(null,this.syncEngine),await kP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xP}()}createDatastore(e){const t=Wc(e.databaseInfo.databaseId),i=function(l){return new hP(l)}(e.databaseInfo);return function(l,d,h,p){return new mP(l,d,h,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,d,h){return new yP(i,o,l,d,h)}(this.localStore,this.datastore,e.asyncQueue,t=>i_(this.syncEngine,t,0),function(){return Zy.p()?new Zy:new uP}())}createSyncEngine(e,t){return function(o,l,d,h,p,y,E){const I=new UP(o,l,d,h,p,y);return E&&(I.$a=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);ae("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await wl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}gf.provider={build:()=>new gf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Xv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async d=>{ae("FirestoreClient","Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(i,d=>(ae("FirestoreClient","Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=up(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function $h(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await NE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function o_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nx(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>e_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>e_(e.remoteStore,o)),n._onlineComponents=e}async function nx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await $h(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Ao("Error using user provided cache. Falling back to memory cache: "+t),await $h(n,new Sc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await $h(n,new ZP(void 0));return n._offlineComponents}async function QE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await o_(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await o_(n,new gf))),n._onlineComponents}function rx(n){return QE(n).then(e=>e.syncEngine)}async function ix(n){const e=await QE(n),t=e.eventManager;return t.onListen=zP.bind(null,e.syncEngine),t.onUnlisten=$P.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=HP.bind(null,e.syncEngine),t}function sx(n,e,t={}){const i=new Ii;return n.asyncQueue.enqueueAndForget(async()=>function(l,d,h,p,y){const E=new ex({next:S=>{E.eu(),d.enqueueAndForget(()=>DP(l,I));const N=S.docs.has(h);!N&&S.fromCache?y.reject(new _e(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&S.fromCache&&p&&p.source==="server"?y.reject(new _e(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),I=new OP(Yf(h.path),E,{includeMetadataChanges:!0,ua:!0});return NP(l,I)}(await ix(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(n,e,t){if(!t)throw new _e(Z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ax(n,e,t,i){if(e===!0&&i===!0)throw new _e(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function l_(n){if(!ve.isDocumentKey(n))throw new _e(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function al(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hp(n);throw new _e(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _e(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ax("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new _e(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new _e(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new _e(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new f1;switch(i.type){case"firstParty":return new y1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new _e(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=a_.get(t);i&&(ae("ComponentProvider","Removing Datastore"),a_.delete(t),i.terminate())}(this),Promise.resolve()}}function lx(n,e,t,i={}){var o;const l=(n=al(n,fp))._getSettings(),d=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==d&&Ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:d,ssl:!1})),i.mockUserToken){let h,p;if(typeof i.mockUserToken=="string")h=i.mockUserToken,p=Ut.MOCK_USER;else{h=lI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new _e(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ut(y)}n._authCredentials=new p1(new Yv(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new pp(this.firestore,e,this._query)}}class Rn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ll(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rn(this.firestore,e,this._key)}}class ll extends pp{constructor(e,t,i){super(e,t,Yf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rn(this.firestore,null,new ve(e))}withConverter(e){return new ll(this.firestore,e,this._path)}}function mp(n,e,...t){if(n=hn(n),arguments.length===1&&(e=Xv.newId()),ox("doc","path",e),n instanceof fp){const i=it.fromString(e,...t);return l_(i),new Rn(n,null,new ve(i))}{if(!(n instanceof Rn||n instanceof ll))throw new _e(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(it.fromString(e,...t));return l_(i),new Rn(n.firestore,n instanceof ll?n.converter:null,new ve(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new bE(this,"async_queue_retry"),this.fu=()=>{const i=Bh();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Bh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Bh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Ii;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!zo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(d){let h=d.message||"";return d.stack&&(h=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),h}(i);throw zr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=lp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.Eu.push(o),o}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class gp extends fp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new c_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c_(e),this._firestoreClient=void 0,await e}}}function ux(n,e){const t=typeof n=="object"?n:kf(),i=typeof n=="string"?n:"(default)",o=Es(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=oI("firestore");l&&lx(o,...l)}return o}function XE(n){if(n._terminated)throw new _e(Z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||cx(n),n._firestoreClient}function cx(n){var e,t,i;const o=n._freezeSettings(),l=function(h,p,y,E){return new D1(h,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,YE(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new tx(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Do(bt.fromBase64String(e))}catch(t){throw new _e(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Do(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=/^__.*__$/;class hx{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,t,this.fieldTransforms):new vl(e,this.data,t,this.fieldTransforms)}}function ZE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Ep{constructor(e,t,i,o,l,d){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Rc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(ZE(this.Mu)&&dx.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class fx{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Wc(e)}$u(e,t,i,o=!1){return new Ep({Mu:e,methodName:t,Ku:i,path:Dt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function px(n){const e=n._freezeSettings(),t=Wc(n._databaseId);return new fx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mx(n,e,t,i,o,l={}){const d=n.$u(l.merge||l.mergeFields?2:0,e,t,o);rw("Data must be an object, but it was:",d,i);const h=tw(i,d);let p,y;if(l.merge)p=new $n(d.fieldMask),y=d.fieldTransforms;else if(l.mergeFields){const E=[];for(const I of l.mergeFields){const S=gx(e,I,t);if(!d.contains(S))throw new _e(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);_x(E,S)||E.push(S)}p=new $n(E),y=d.fieldTransforms.filter(I=>p.covers(I.field))}else p=null,y=d.fieldTransforms;return new hx(new In(h),p,y)}function ew(n,e){if(nw(n=hn(n)))return rw("Unsupported field value:",e,n),tw(n,e);if(n instanceof JE)return function(i,o){if(!ZE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let d=0;for(const h of i){let p=ew(h,o.ku(d));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),d++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=hn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return tk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=vt.fromDate(i);return{timestampValue:wc(o.serializer,l)}}if(i instanceof vt){const l=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:wc(o.serializer,l)}}if(i instanceof _p)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Do)return{bytesValue:IE(o.serializer,i._byteString)};if(i instanceof Rn){const l=o.databaseId,d=i.firestore._databaseId;if(!d.isEqual(l))throw o.qu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ep(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof vp)return function(d,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:d.toArray().map(p=>{if(typeof p!="number")throw h.qu("VectorValues must only contain numeric values.");return Xf(h.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${hp(i)}`)}(n,e)}function tw(n,e){const t={};return Jv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(n,(i,o)=>{const l=ew(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function nw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof _p||n instanceof Do||n instanceof Rn||n instanceof JE||n instanceof vp)}function rw(n,e,t){if(!nw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=hp(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function gx(n,e,t){if((e=hn(e))instanceof yp)return e._internalPath;if(typeof e=="string")return iw(n,e);throw Rc("Field path arguments must be of type string or ",n,!1,void 0,t)}const yx=new RegExp("[~\\*/\\[\\]]");function iw(n,e,t){if(e.search(yx)>=0)throw Rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yp(...e.split("."))._internalPath}catch{throw Rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Rc(n,e,t,i,o){const l=i&&!i.isEmpty(),d=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(l||d)&&(p+=" (found",l&&(p+=` in field ${i}`),d&&(p+=` in document ${o}`),p+=")"),new _e(Z.INVALID_ARGUMENT,h+n+p)}function _x(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ow("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vx extends sw{data(){return super.data()}}function ow(n,e){return typeof e=="string"?iw(n,e):e instanceof yp?e._internalPath:e._delegate._internalPath}class Ex{convertValue(e,t="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ws(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(d=>at(d.doubleValue));return new vp(l)}convertGeoPoint(e){return new _p(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Fc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(nl(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=it.fromString(e);je(PE(i));const o=new rl(i.get(1),i.get(3)),l=new ve(i.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aw extends sw{constructor(e,t,i,o,l,d){super(e,t,i,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ix(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(ow("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Ix extends aw{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(n){n=al(n,Rn);const e=al(n.firestore,gp);return sx(XE(e),n._key).then(t=>Cx(e,n,t))}class Rx extends Ex{constructor(e){super(),this.firestore=e}convertBytes(e){return new Do(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rn(this.firestore,null,t)}}function lw(n,e,t){n=al(n,Rn);const i=al(n.firestore,gp),o=wx(n.converter,e);return Ax(i,[mx(px(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Mr.none())])}function Ax(n,e){return function(i,o){const l=new Ii;return i.asyncQueue.enqueueAndForget(async()=>WP(await rx(i),o,l)),l.promise}(XE(n),e)}function Cx(n,e,t){const i=t.docs.get(e._key),o=new Rx(n);return new aw(n,o,e._key,i,new Tx(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Fo=o})(Vo),ur(new Wn("firestore",(i,{instanceIdentifier:o,options:l})=>{const d=i.getProvider("app").getImmediate(),h=new gp(new m1(i.getProvider("auth-internal")),new v1(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new _e(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rl(y.options.projectId,E)}(d,o),d);return l=Object.assign({useFetchStreams:t},l),h._setSettings(l),h},"PUBLIC").setMultipleInstances(!0)),Sn(ky,"4.7.6",e),Sn(ky,"4.7.6","esm2017")})();const kx={apiKey:"AIzaSyAzLudwMfREssLJfgWtbF7be7W3mvJqW_Q",authDomain:"dentiste-ebaa6.firebaseapp.com",projectId:"dentiste-ebaa6",storageBucket:"dentiste-ebaa6.firebasestorage.app",messagingSenderId:"105184438866",appId:"1:105184438866:web:1df1cf904515851fb44d8b",measurementId:"G-4C89Y02J0M"},uw=U_(kx);u1(uw);const bo=HA(),wp=ux(uw);function cw(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=cw(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function ds(){for(var n,e,t=0,i="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=cw(n))&&(i&&(i+=" "),i+=e);return i}function Px(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}Px(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Il=n=>typeof n=="number"&&!isNaN(n),ys=n=>typeof n=="string",Br=n=>typeof n=="function",xx=n=>ys(n)||Il(n),yf=n=>ys(n)||Br(n)?n:null,Nx=(n,e)=>n===!1||Il(n)&&n>0?n:e,_f=n=>W.isValidElement(n)||ys(n)||Br(n)||Il(n);function Dx(n,e,t=300){let{scrollHeight:i,style:o}=n;requestAnimationFrame(()=>{o.minHeight="initial",o.height=i+"px",o.transition=`all ${t}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(e,t)})})}function bx({enter:n,exit:e,appendPosition:t=!1,collapse:i=!0,collapseDuration:o=300}){return function({children:l,position:d,preventExitTransition:h,done:p,nodeRef:y,isIn:E,playToast:I}){let S=t?`${n}--${d}`:n,N=t?`${e}--${d}`:e,V=W.useRef(0);return W.useLayoutEffect(()=>{let z=y.current,L=S.split(" "),H=B=>{B.target===y.current&&(I(),z.removeEventListener("animationend",H),z.removeEventListener("animationcancel",H),V.current===0&&B.type!=="animationcancel"&&z.classList.remove(...L))};z.classList.add(...L),z.addEventListener("animationend",H),z.addEventListener("animationcancel",H)},[]),W.useEffect(()=>{let z=y.current,L=()=>{z.removeEventListener("animationend",L),i?Dx(z,p,o):p()};E||(h?L():(V.current=1,z.className+=` ${N}`,z.addEventListener("animationend",L)))},[E]),Qe.createElement(Qe.Fragment,null,l)}}function d_(n,e){return{content:dw(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:e}}function dw(n,e,t=!1){return W.isValidElement(n)&&!ys(n.type)?W.cloneElement(n,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):Br(n)?n({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):n}function Lx({closeToast:n,theme:e,ariaLabel:t="close"}){return Qe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:i=>{i.stopPropagation(),n(!0)},"aria-label":t},Qe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Qe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Ox({delay:n,isRunning:e,closeToast:t,type:i="default",hide:o,className:l,controlledProgress:d,progress:h,rtl:p,isIn:y,theme:E}){let I=o||d&&h===0,S={animationDuration:`${n}ms`,animationPlayState:e?"running":"paused"};d&&(S.transform=`scaleX(${h})`);let N=ds("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":p}),V=Br(l)?l({rtl:p,type:i,defaultClassName:N}):ds(N,l),z={[d&&h>=1?"onTransitionEnd":"onAnimationEnd"]:d&&h<1?null:()=>{y&&t()}};return Qe.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":I},Qe.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${E} Toastify__progress-bar--${i}`}),Qe.createElement("div",{role:"progressbar","aria-hidden":I?"true":"false","aria-label":"notification timer",className:V,style:S,...z}))}var Vx=1,hw=()=>`${Vx++}`;function Mx(n,e,t){let i=1,o=0,l=[],d=[],h=e,p=new Map,y=new Set,E=B=>(y.add(B),()=>y.delete(B)),I=()=>{d=Array.from(p.values()),y.forEach(B=>B())},S=({containerId:B,toastId:K,updateId:ee})=>{let he=B?B!==n:n!==1,fe=p.has(K)&&ee==null;return he||fe},N=(B,K)=>{p.forEach(ee=>{var he;(K==null||K===ee.props.toastId)&&((he=ee.toggle)==null||he.call(ee,B))})},V=B=>{var K,ee;(ee=(K=B.props)==null?void 0:K.onClose)==null||ee.call(K,B.removalReason),B.isActive=!1},z=B=>{if(B==null)p.forEach(V);else{let K=p.get(B);K&&V(K)}I()},L=()=>{o-=l.length,l=[]},H=B=>{var K,ee;let{toastId:he,updateId:fe}=B.props,k=fe==null;B.staleId&&p.delete(B.staleId),B.isActive=!0,p.set(he,B),I(),t(d_(B,k?"added":"updated")),k&&((ee=(K=B.props).onOpen)==null||ee.call(K))};return{id:n,props:h,observe:E,toggle:N,removeToast:z,toasts:p,clearQueue:L,buildToast:(B,K)=>{if(S(K))return;let{toastId:ee,updateId:he,data:fe,staleId:k,delay:T}=K,R=he==null;R&&o++;let P={...h,style:h.toastStyle,key:i++,...Object.fromEntries(Object.entries(K).filter(([O,C])=>C!=null)),toastId:ee,updateId:he,data:fe,isIn:!1,className:yf(K.className||h.toastClassName),progressClassName:yf(K.progressClassName||h.progressClassName),autoClose:K.isLoading?!1:Nx(K.autoClose,h.autoClose),closeToast(O){p.get(ee).removalReason=O,z(ee)},deleteToast(){let O=p.get(ee);if(O!=null){if(t(d_(O,"removed")),p.delete(ee),o--,o<0&&(o=0),l.length>0){H(l.shift());return}I()}}};P.closeButton=h.closeButton,K.closeButton===!1||_f(K.closeButton)?P.closeButton=K.closeButton:K.closeButton===!0&&(P.closeButton=_f(h.closeButton)?h.closeButton:!0);let D={content:B,props:P,staleId:k};h.limit&&h.limit>0&&o>h.limit&&R?l.push(D):Il(T)?setTimeout(()=>{H(D)},T):H(D)},setProps(B){h=B},setToggle:(B,K)=>{let ee=p.get(B);ee&&(ee.toggle=K)},isToastActive:B=>{var K;return(K=p.get(B))==null?void 0:K.isActive},getSnapshot:()=>d}}var qt=new Map,ul=[],vf=new Set,Fx=n=>vf.forEach(e=>e(n)),fw=()=>qt.size>0;function Ux(){ul.forEach(n=>mw(n.content,n.options)),ul=[]}var zx=(n,{containerId:e})=>{var t;return(t=qt.get(e||1))==null?void 0:t.toasts.get(n)};function pw(n,e){var t;if(e)return!!((t=qt.get(e))!=null&&t.isToastActive(n));let i=!1;return qt.forEach(o=>{o.isToastActive(n)&&(i=!0)}),i}function jx(n){if(!fw()){ul=ul.filter(e=>n!=null&&e.options.toastId!==n);return}if(n==null||xx(n))qt.forEach(e=>{e.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let e=qt.get(n.containerId);e?e.removeToast(n.id):qt.forEach(t=>{t.removeToast(n.id)})}}var Bx=(n={})=>{qt.forEach(e=>{e.props.limit&&(!n.containerId||e.id===n.containerId)&&e.clearQueue()})};function mw(n,e){_f(n)&&(fw()||ul.push({content:n,options:e}),qt.forEach(t=>{t.buildToast(n,e)}))}function $x(n){var e;(e=qt.get(n.containerId||1))==null||e.setToggle(n.id,n.fn)}function gw(n,e){qt.forEach(t=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===t.id)&&t.toggle(n,e==null?void 0:e.id)})}function Hx(n){let e=n.containerId||1;return{subscribe(t){let i=Mx(e,n,Fx);qt.set(e,i);let o=i.observe(t);return Ux(),()=>{o(),qt.delete(e)}},setProps(t){var i;(i=qt.get(e))==null||i.setProps(t)},getSnapshot(){var t;return(t=qt.get(e))==null?void 0:t.getSnapshot()}}}function Wx(n){return vf.add(n),()=>{vf.delete(n)}}function qx(n){return n&&(ys(n.toastId)||Il(n.toastId))?n.toastId:hw()}function Sl(n,e){return mw(n,e),e.toastId}function Gc(n,e){return{...e,type:e&&e.type||n,toastId:qx(e)}}function Qc(n){return(e,t)=>Sl(e,Gc(n,t))}function xe(n,e){return Sl(n,Gc("default",e))}xe.loading=(n,e)=>Sl(n,Gc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function Kx(n,{pending:e,error:t,success:i},o){let l;e&&(l=ys(e)?xe.loading(e,o):xe.loading(e.render,{...o,...e}));let d={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(y,E,I)=>{if(E==null){xe.dismiss(l);return}let S={type:y,...d,...o,data:I},N=ys(E)?{render:E}:E;return l?xe.update(l,{...S,...N}):xe(N.render,{...S,...N}),I},p=Br(n)?n():n;return p.then(y=>h("success",i,y)).catch(y=>h("error",t,y)),p}xe.promise=Kx;xe.success=Qc("success");xe.info=Qc("info");xe.error=Qc("error");xe.warning=Qc("warning");xe.warn=xe.warning;xe.dark=(n,e)=>Sl(n,Gc("default",{theme:"dark",...e}));function Gx(n){jx(n)}xe.dismiss=Gx;xe.clearWaitingQueue=Bx;xe.isActive=pw;xe.update=(n,e={})=>{let t=zx(n,e);if(t){let{props:i,content:o}=t,l={delay:100,...i,...e,toastId:e.toastId||n,updateId:hw()};l.toastId!==n&&(l.staleId=n);let d=l.render||o;delete l.render,Sl(d,l)}};xe.done=n=>{xe.update(n,{progress:1})};xe.onChange=Wx;xe.play=n=>gw(!0,n);xe.pause=n=>gw(!1,n);function Qx(n){var e;let{subscribe:t,getSnapshot:i,setProps:o}=W.useRef(Hx(n)).current;o(n);let l=(e=W.useSyncExternalStore(t,i,i))==null?void 0:e.slice();function d(h){if(!l)return[];let p=new Map;return n.newestOnTop&&l.reverse(),l.forEach(y=>{let{position:E}=y.props;p.has(E)||p.set(E,[]),p.get(E).push(y)}),Array.from(p,y=>h(y[0],y[1]))}return{getToastToRender:d,isToastActive:pw,count:l==null?void 0:l.length}}function Yx(n){let[e,t]=W.useState(!1),[i,o]=W.useState(!1),l=W.useRef(null),d=W.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:p,closeToast:y,onClick:E,closeOnClick:I}=n;$x({id:n.toastId,containerId:n.containerId,fn:t}),W.useEffect(()=>{if(n.pauseOnFocusLoss)return S(),()=>{N()}},[n.pauseOnFocusLoss]);function S(){document.hasFocus()||H(),window.addEventListener("focus",L),window.addEventListener("blur",H)}function N(){window.removeEventListener("focus",L),window.removeEventListener("blur",H)}function V(k){if(n.draggable===!0||n.draggable===k.pointerType){B();let T=l.current;d.canCloseOnClick=!0,d.canDrag=!0,T.style.transition="none",n.draggableDirection==="x"?(d.start=k.clientX,d.removalDistance=T.offsetWidth*(n.draggablePercent/100)):(d.start=k.clientY,d.removalDistance=T.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function z(k){let{top:T,bottom:R,left:P,right:D}=l.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&n.pauseOnHover&&k.clientX>=P&&k.clientX<=D&&k.clientY>=T&&k.clientY<=R?H():L()}function L(){t(!0)}function H(){t(!1)}function B(){d.didMove=!1,document.addEventListener("pointermove",ee),document.addEventListener("pointerup",he)}function K(){document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",he)}function ee(k){let T=l.current;if(d.canDrag&&T){d.didMove=!0,e&&H(),n.draggableDirection==="x"?d.delta=k.clientX-d.start:d.delta=k.clientY-d.start,d.start!==k.clientX&&(d.canCloseOnClick=!1);let R=n.draggableDirection==="x"?`${d.delta}px, var(--y)`:`0, calc(${d.delta}px + var(--y))`;T.style.transform=`translate3d(${R},0)`,T.style.opacity=`${1-Math.abs(d.delta/d.removalDistance)}`}}function he(){K();let k=l.current;if(d.canDrag&&d.didMove&&k){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance){o(!0),n.closeToast(!0),n.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let fe={onPointerDown:V,onPointerUp:z};return h&&p&&(fe.onMouseEnter=H,n.stacked||(fe.onMouseLeave=L)),I&&(fe.onClick=k=>{E&&E(k),d.canCloseOnClick&&y(!0)}),{playToast:L,pauseToast:H,isRunning:e,preventExitTransition:i,toastRef:l,eventHandlers:fe}}var Xx=typeof window<"u"?W.useLayoutEffect:W.useEffect,Yc=({theme:n,type:e,isLoading:t,...i})=>Qe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...i});function Jx(n){return Qe.createElement(Yc,{...n},Qe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function Zx(n){return Qe.createElement(Yc,{...n},Qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function eN(n){return Qe.createElement(Yc,{...n},Qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function tN(n){return Qe.createElement(Yc,{...n},Qe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function nN(){return Qe.createElement("div",{className:"Toastify__spinner"})}var Ef={info:Zx,warning:Jx,success:eN,error:tN,spinner:nN},rN=n=>n in Ef;function iN({theme:n,type:e,isLoading:t,icon:i}){let o=null,l={theme:n,type:e};return i===!1||(Br(i)?o=i({...l,isLoading:t}):W.isValidElement(i)?o=W.cloneElement(i,l):t?o=Ef.spinner():rN(e)&&(o=Ef[e](l))),o}var sN=n=>{let{isRunning:e,preventExitTransition:t,toastRef:i,eventHandlers:o,playToast:l}=Yx(n),{closeButton:d,children:h,autoClose:p,onClick:y,type:E,hideProgressBar:I,closeToast:S,transition:N,position:V,className:z,style:L,progressClassName:H,updateId:B,role:K,progress:ee,rtl:he,toastId:fe,deleteToast:k,isIn:T,isLoading:R,closeOnClick:P,theme:D,ariaLabel:O}=n,C=ds("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":he},{"Toastify__toast--close-on-click":P}),Je=Br(z)?z({rtl:he,position:V,type:E,defaultClassName:C}):ds(C,z),dt=iN(n),ht=!!ee||!p,Me={closeToast:S,type:E,theme:D},ne=null;return d===!1||(Br(d)?ne=d(Me):W.isValidElement(d)?ne=W.cloneElement(d,Me):ne=Lx(Me)),Qe.createElement(N,{isIn:T,done:k,position:V,preventExitTransition:t,nodeRef:i,playToast:l},Qe.createElement("div",{id:fe,tabIndex:0,onClick:y,"data-in":T,className:Je,...o,style:L,ref:i,...T&&{role:K,"aria-label":O}},dt!=null&&Qe.createElement("div",{className:ds("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},dt),dw(h,n,!e),ne,!n.customProgressBar&&Qe.createElement(Ox,{...B&&!ht?{key:`p-${B}`}:{},rtl:he,theme:D,delay:p,isRunning:e,isIn:T,closeToast:S,hide:I,type:E,className:H,controlledProgress:ht,progress:ee||0})))},oN=(n,e=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}),aN=bx(oN("bounce",!0)),lN={position:"top-right",transition:aN,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function uN(n){let e={...lN,...n},t=n.stacked,[i,o]=W.useState(!0),l=W.useRef(null),{getToastToRender:d,isToastActive:h,count:p}=Qx(e),{className:y,style:E,rtl:I,containerId:S,hotKeys:N}=e;function V(L){let H=ds("Toastify__toast-container",`Toastify__toast-container--${L}`,{"Toastify__toast-container--rtl":I});return Br(y)?y({position:L,rtl:I,defaultClassName:H}):ds(H,yf(y))}function z(){t&&(o(!0),xe.play())}return Xx(()=>{var L;if(t){let H=l.current.querySelectorAll('[data-in="true"]'),B=12,K=(L=e.position)==null?void 0:L.includes("top"),ee=0,he=0;Array.from(H).reverse().forEach((fe,k)=>{let T=fe;T.classList.add("Toastify__toast--stacked"),k>0&&(T.dataset.collapsed=`${i}`),T.dataset.pos||(T.dataset.pos=K?"top":"bot");let R=ee*(i?.2:1)+(i?0:B*k);T.style.setProperty("--y",`${K?R:R*-1}px`),T.style.setProperty("--g",`${B}`),T.style.setProperty("--s",`${1-(i?he:0)}`),ee+=T.offsetHeight,he+=.025})}},[i,p,t]),W.useEffect(()=>{function L(H){var B;let K=l.current;N(H)&&((B=K.querySelector('[tabIndex="0"]'))==null||B.focus(),o(!1),xe.pause()),H.key==="Escape"&&(document.activeElement===K||K!=null&&K.contains(document.activeElement))&&(o(!0),xe.play())}return document.addEventListener("keydown",L),()=>{document.removeEventListener("keydown",L)}},[N]),Qe.createElement("section",{ref:l,className:"Toastify",id:S,onMouseEnter:()=>{t&&(o(!1),xe.pause())},onMouseLeave:z,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},d((L,H)=>{let B=H.length?{...E}:{...E,pointerEvents:"none"};return Qe.createElement("div",{tabIndex:-1,className:V(L),"data-stacked":t,style:B,key:`c-${L}`},H.map(({content:K,props:ee})=>Qe.createElement(sN,{...ee,stacked:t,collapseAll:z,isIn:h(ee.toastId,ee.containerId),key:`t-${ee.key}`},K)))}))}function yw(){const n=hl(),e=async t=>{t.preventDefault();try{const i=new Nr;ZR(bo,i).then(o=>{console.log(o),o.user&&lw(mp(wp,"users",o.user.uid),{email:o.user.email,Lastname:o._tokenResponse.lastName,Firstname:o._tokenResponse.firstName,photo:o.user.photoURL,phoneNumber:o.user.phoneNumber}),setTimeout(()=>{n("/dentist/Profile")},1e3),xe.success("user registered successfully",{position:"top-center"})})}catch(i){xe.error(i.message,{position:"top-center"})}};return se.jsx("button",{onClick:e,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Sign in with Google"})}function cN(){const[n,e]=W.useState(""),[t,i]=W.useState(""),o=hl(),l=async d=>{d.preventDefault();try{await NR(bo,n,t),xe.success("user Login successfully",{position:"top-center"}),setTimeout(()=>{o("/dentist/Profile")},1e3)}catch(h){console.error("Error signing in with email and password:",h),xe.error(h.message,{position:"top-center"})}};return se.jsx(se.Fragment,{children:se.jsxs("section",{className:"w-screen h-screen bg-gray-900",children:[se.jsx(kc,{}),se.jsxs("div",{className:"flex flex-col items-center justify-center h-[80%]",children:[se.jsx("h1",{className:"text-white text-xl text-gray-500 mb-6",children:"Login"}),se.jsxs("form",{onSubmit:l,className:"flex flex-col w-[15rem] items-center",children:[se.jsx("input",{type:"text",placeholder:"Email",value:n,className:"bg-gray-800 text-white p-2 w-[100%] mb-4",onChange:d=>e(d.target.value)}),se.jsx("input",{type:"password",placeholder:"Password",className:"bg-gray-800 text-white p-2 w-[100%] mb-4",value:t,onChange:d=>i(d.target.value)}),se.jsx("button",{className:"bg-gray-800 text-white p-2",children:"Login"})]}),se.jsx(yw,{})]})]})})}function dN(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),[d,h]=W.useState(""),p=hl(),y=async E=>{E.preventDefault();try{await xR(bo,n,t);const I=bo.currentUser;I&&await lw(mp(wp,"users",I.uid),{email:I.email,Lastname:d,Firstname:o}),xe.success("user registered successfully",{position:"top-center"}),setTimeout(()=>{p("/dentist/Profile")},1e3)}catch(I){xe.error(I.message,{position:"top-center"})}};return se.jsx(se.Fragment,{children:se.jsxs("section",{className:"w-screen h-screen bg-gray-900",children:[se.jsx(kc,{}),se.jsxs("div",{className:"flex flex-col items-center justify-center h-[80%]",children:[se.jsx("h1",{className:"text-white text-xl text-gray-500 mb-6",children:"Register"}),se.jsxs("form",{onSubmit:y,className:"flex flex-col items-center ",children:[se.jsx("input",{type:"text",placeholder:"First name",className:"bg-gray-800 text-white p-2 mb-4",value:o,onChange:E=>l(E.target.value)}),se.jsx("input",{type:"text",placeholder:"Last name",className:"bg-gray-800 text-white p-2 mb-4",value:d,onChange:E=>h(E.target.value)}),se.jsx("input",{type:"email",placeholder:"Email",className:"bg-gray-800 text-white p-2 mb-4",value:n,onChange:E=>e(E.target.value)}),se.jsx("input",{type:"password",placeholder:"Password",className:"bg-gray-800 text-white p-2 mb-4",value:t,onChange:E=>i(E.target.value)}),se.jsx("button",{className:"bg-gray-800 text-white p-2 cursor-pointer",children:"Register"})]}),se.jsx(yw,{})]})]})})}function hN(){const[n,e]=W.useState(null),t=hl(),i=async()=>{bo.onAuthStateChanged(async l=>{const d=mp(wp,"users",l.uid),h=await Sx(d);h.exists()?e(h.data()):xe.error("Your are not logend In",{position:"center"})})};W.useEffect(()=>{i()},[]);async function o(){try{await bo.signOut(),xe.success("user logout successfully",{position:"top-center"}),setTimeout(()=>{t("/login")},1e3)}catch(l){console.error("Error signing out:",l),xe.error(l.message,{position:"top-center"})}}return se.jsx(se.Fragment,{children:se.jsxs("section",{className:"w-screen  bg-gray-900  h-screen",children:[se.jsx(kc,{}),se.jsx("div",{className:"flex flex-col items-center justify-center gap-11 h-[80%]",children:n?se.jsxs(se.Fragment,{children:[se.jsx("img",{className:"rounded-full h-24 w-24 object-cover",src:n.photo,alt:"user"}),se.jsxs("div",{className:"",children:[se.jsxs("h1",{className:"text-white text-xl  mb-6",children:["Welcome, ",n.Firstname," ",n.Lastname]}),se.jsxs("h6",{className:"text-white",children:["First name: ",n.Firstname]}),se.jsxs("h6",{className:"text-white",children:["lastname: ",n.Lastname]}),se.jsxs("h6",{className:"text-white",children:["email: ",n.email]}),se.jsx("button",{onClick:o,className:" bg-gray-500 p-2 mt-2 cursor-pointer rounded",children:"logout"})]})]}):se.jsx(se.Fragment,{children:se.jsx("p",{children:"loading...."})})})]})})}function fN(){return se.jsxs(se.Fragment,{children:[se.jsx(kc,{}),se.jsx("div",{children:se.jsx("h1",{children:"Home"})})]})}function pN(){return se.jsx(se.Fragment,{children:se.jsxs($0,{children:[se.jsxs(v0,{children:[se.jsx(Ua,{path:"/dentist/",element:se.jsx(fN,{})}),se.jsx(Ua,{path:"/dentist/register",element:se.jsx(dN,{})}),se.jsx(Ua,{path:"/dentist/login",element:se.jsx(cN,{})}),se.jsx(Ua,{path:"/dentist/Profile",element:se.jsx(hN,{})})]}),se.jsx(uN,{})]})})}PT.createRoot(document.getElementById("root")).render(se.jsx(W.StrictMode,{children:se.jsx(pN,{})}));
