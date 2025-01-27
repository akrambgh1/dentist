(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function yT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Th={exports:{}},Oa={},Ih={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function _T(){if(Sg)return Ce;Sg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=T&&M[T]||M["@@iterator"],typeof M=="function"?M:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,z={};function L(M,Q,pe){this.props=M,this.context=Q,this.refs=z,this.updater=pe||N}L.prototype.isReactComponent={},L.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},L.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function H(){}H.prototype=L.prototype;function B(M,Q,pe){this.props=M,this.context=Q,this.refs=z,this.updater=pe||N}var K=B.prototype=new H;K.constructor=B,V(K,L.prototype),K.isPureReactComponent=!0;var ee=Array.isArray,de=Object.prototype.hasOwnProperty,he={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function I(M,Q,pe){var Re,Ae={},De=null,Ue=null;if(Q!=null)for(Re in Q.ref!==void 0&&(Ue=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)de.call(Q,Re)&&!k.hasOwnProperty(Re)&&(Ae[Re]=Q[Re]);var ze=arguments.length-2;if(ze===1)Ae.children=pe;else if(1<ze){for(var He=Array(ze),wt=0;wt<ze;wt++)He[wt]=arguments[wt+2];Ae.children=He}if(M&&M.defaultProps)for(Re in ze=M.defaultProps,ze)Ae[Re]===void 0&&(Ae[Re]=ze[Re]);return{$$typeof:n,type:M,key:De,ref:Ue,props:Ae,_owner:he.current}}function R(M,Q){return{$$typeof:n,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function P(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function D(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(pe){return Q[pe]})}var O=/\/+/g;function C(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?D(""+M.key):Q.toString(36)}function Je(M,Q,pe,Re,Ae){var De=typeof M;(De==="undefined"||De==="boolean")&&(M=null);var Ue=!1;if(M===null)Ue=!0;else switch(De){case"string":case"number":Ue=!0;break;case"object":switch(M.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=M,Ae=Ae(Ue),M=Re===""?"."+C(Ue,0):Re,ee(Ae)?(pe="",M!=null&&(pe=M.replace(O,"$&/")+"/"),Je(Ae,Q,pe,"",function(wt){return wt})):Ae!=null&&(P(Ae)&&(Ae=R(Ae,pe+(!Ae.key||Ue&&Ue.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+M)),Q.push(Ae)),1;if(Ue=0,Re=Re===""?".":Re+":",ee(M))for(var ze=0;ze<M.length;ze++){De=M[ze];var He=Re+C(De,ze);Ue+=Je(De,Q,pe,He,Ae)}else if(He=S(M),typeof He=="function")for(M=He.call(M),ze=0;!(De=M.next()).done;)De=De.value,He=Re+C(De,ze++),Ue+=Je(De,Q,pe,He,Ae);else if(De==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ue}function dt(M,Q,pe){if(M==null)return M;var Re=[],Ae=0;return Je(M,Re,"","",function(De){return Q.call(pe,De,Ae++)}),Re}function ht(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(pe){(M._status===0||M._status===-1)&&(M._status=1,M._result=pe)},function(pe){(M._status===0||M._status===-1)&&(M._status=2,M._result=pe)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var Me={current:null},ne={transition:null},me={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:ne,ReactCurrentOwner:he};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:dt,forEach:function(M,Q,pe){dt(M,function(){Q.apply(this,arguments)},pe)},count:function(M){var Q=0;return dt(M,function(){Q++}),Q},toArray:function(M){return dt(M,function(Q){return Q})||[]},only:function(M){if(!P(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ce.Component=L,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=B,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=se,Ce.cloneElement=function(M,Q,pe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Re=V({},M.props),Ae=M.key,De=M.ref,Ue=M._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,Ue=he.current),Q.key!==void 0&&(Ae=""+Q.key),M.type&&M.type.defaultProps)var ze=M.type.defaultProps;for(He in Q)de.call(Q,He)&&!k.hasOwnProperty(He)&&(Re[He]=Q[He]===void 0&&ze!==void 0?ze[He]:Q[He])}var He=arguments.length-2;if(He===1)Re.children=pe;else if(1<He){ze=Array(He);for(var wt=0;wt<He;wt++)ze[wt]=arguments[wt+2];Re.children=ze}return{$$typeof:n,type:M.type,key:Ae,ref:De,props:Re,_owner:Ue}},Ce.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},Ce.createElement=I,Ce.createFactory=function(M){var Q=I.bind(null,M);return Q.type=M,Q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(M){return{$$typeof:h,render:M}},Ce.isValidElement=P,Ce.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:ht}},Ce.memo=function(M,Q){return{$$typeof:y,type:M,compare:Q===void 0?null:Q}},Ce.startTransition=function(M){var Q=ne.transition;ne.transition={};try{M()}finally{ne.transition=Q}},Ce.unstable_act=se,Ce.useCallback=function(M,Q){return Me.current.useCallback(M,Q)},Ce.useContext=function(M){return Me.current.useContext(M)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(M){return Me.current.useDeferredValue(M)},Ce.useEffect=function(M,Q){return Me.current.useEffect(M,Q)},Ce.useId=function(){return Me.current.useId()},Ce.useImperativeHandle=function(M,Q,pe){return Me.current.useImperativeHandle(M,Q,pe)},Ce.useInsertionEffect=function(M,Q){return Me.current.useInsertionEffect(M,Q)},Ce.useLayoutEffect=function(M,Q){return Me.current.useLayoutEffect(M,Q)},Ce.useMemo=function(M,Q){return Me.current.useMemo(M,Q)},Ce.useReducer=function(M,Q,pe){return Me.current.useReducer(M,Q,pe)},Ce.useRef=function(M){return Me.current.useRef(M)},Ce.useState=function(M){return Me.current.useState(M)},Ce.useSyncExternalStore=function(M,Q,pe){return Me.current.useSyncExternalStore(M,Q,pe)},Ce.useTransition=function(){return Me.current.useTransition()},Ce.version="18.3.1",Ce}var Rg;function Ef(){return Rg||(Rg=1,Ih.exports=_T()),Ih.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function vT(){if(Ag)return Oa;Ag=1;var n=Ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,y){var E,T={},S=null,N=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(N=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(h&&h.defaultProps)for(E in p=h.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:h,key:S,ref:N,props:T,_owner:o.current}}return Oa.Fragment=t,Oa.jsx=d,Oa.jsxs=d,Oa}var Cg;function ET(){return Cg||(Cg=1,Th.exports=vT()),Th.exports}var fe=ET(),W=Ef();const Qe=yT(W);var Fu={},Sh={exports:{}},en={},Rh={exports:{}},Ah={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function wT(){return kg||(kg=1,function(n){function e(ne,me){var se=ne.length;ne.push(me);e:for(;0<se;){var M=se-1>>>1,Q=ne[M];if(0<o(Q,me))ne[M]=me,ne[se]=Q,se=M;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var me=ne[0],se=ne.pop();if(se!==me){ne[0]=se;e:for(var M=0,Q=ne.length,pe=Q>>>1;M<pe;){var Re=2*(M+1)-1,Ae=ne[Re],De=Re+1,Ue=ne[De];if(0>o(Ae,se))De<Q&&0>o(Ue,Ae)?(ne[M]=Ue,ne[De]=se,M=De):(ne[M]=Ae,ne[Re]=se,M=Re);else if(De<Q&&0>o(Ue,se))ne[M]=Ue,ne[De]=se,M=De;else break e}}return me}function o(ne,me){var se=ne.sortIndex-me.sortIndex;return se!==0?se:ne.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var p=[],y=[],E=1,T=null,S=3,N=!1,V=!1,z=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(ne){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ne)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ee(ne){if(z=!1,K(ne),!V)if(t(p)!==null)V=!0,ht(de);else{var me=t(y);me!==null&&Me(ee,me.startTime-ne)}}function de(ne,me){V=!1,z&&(z=!1,H(I),I=-1),N=!0;var se=S;try{for(K(me),T=t(p);T!==null&&(!(T.expirationTime>me)||ne&&!D());){var M=T.callback;if(typeof M=="function"){T.callback=null,S=T.priorityLevel;var Q=M(T.expirationTime<=me);me=n.unstable_now(),typeof Q=="function"?T.callback=Q:T===t(p)&&i(p),K(me)}else i(p);T=t(p)}if(T!==null)var pe=!0;else{var Re=t(y);Re!==null&&Me(ee,Re.startTime-me),pe=!1}return pe}finally{T=null,S=se,N=!1}}var he=!1,k=null,I=-1,R=5,P=-1;function D(){return!(n.unstable_now()-P<R)}function O(){if(k!==null){var ne=n.unstable_now();P=ne;var me=!0;try{me=k(!0,ne)}finally{me?C():(he=!1,k=null)}}else he=!1}var C;if(typeof B=="function")C=function(){B(O)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,dt=Je.port2;Je.port1.onmessage=O,C=function(){dt.postMessage(null)}}else C=function(){L(O,0)};function ht(ne){k=ne,he||(he=!0,C())}function Me(ne,me){I=L(function(){ne(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){V||N||(V=!0,ht(de))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ne){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var se=S;S=me;try{return ne()}finally{S=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,me){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var se=S;S=ne;try{return me()}finally{S=se}},n.unstable_scheduleCallback=function(ne,me,se){var M=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?M+se:M):se=M,ne){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=se+Q,ne={id:E++,callback:me,priorityLevel:ne,startTime:se,expirationTime:Q,sortIndex:-1},se>M?(ne.sortIndex=se,e(y,ne),t(p)===null&&ne===t(y)&&(z?(H(I),I=-1):z=!0,Me(ee,se-M))):(ne.sortIndex=Q,e(p,ne),V||N||(V=!0,ht(de))),ne},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ne){var me=S;return function(){var se=S;S=me;try{return ne.apply(this,arguments)}finally{S=se}}}}(Ah)),Ah}var Pg;function TT(){return Pg||(Pg=1,Rh.exports=wT()),Rh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function IT(){if(xg)return en;xg=1;var n=Ef(),e=TT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){d(r,s),d(r+"Capture",s)}function d(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function S(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function N(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function V(r,s,a,c){if(s===null||typeof s>"u"||N(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,c,f,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function B(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,B);L[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,B);L[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,B);L[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function K(r,s,a,c){var f=L.hasOwnProperty(s)?L[s]:null;(f!==null?f.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(V(s,a,f,c)&&(a=null),c||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ee=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),he=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),ne=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,M;function Q(r){if(M===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+r}var pe=!1;function Re(r,s){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var c=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){c=$}r.call(s.prototype)}else{try{throw Error()}catch($){c=$}r()}}catch($){if($&&c&&typeof $.stack=="string"){for(var f=$.stack.split(`
`),g=c.stack.split(`
`),v=f.length-1,A=g.length-1;1<=v&&0<=A&&f[v]!==g[A];)A--;for(;1<=v&&0<=A;v--,A--)if(f[v]!==g[A]){if(v!==1||A!==1)do if(v--,A--,0>A||f[v]!==g[A]){var x=`
`+f[v].replace(" at new "," at ");return r.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",r.displayName)),x}while(1<=v&&0<=A);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ae(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case he:return"Portal";case R:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case Je:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case O:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case dt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case ht:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Ue(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ze(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function He(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=He(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function fr(r){r._valueTracker||(r._valueTracker=wt(r))}function Ss(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=He(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function $r(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Di(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Rs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=ze(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function jo(r,s){s=s.checked,s!=null&&K(r,"checked",s,!1)}function Bo(r,s){jo(r,s);var a=ze(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?As(r,s.type,a):s.hasOwnProperty("defaultValue")&&As(r,s.type,ze(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Il(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function As(r,s,a){(s!=="number"||$r(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var pr=Array.isArray;function mr(r,s,a,c){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+ze(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function $o(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Cs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(pr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:ze(a)}}function ks(r,s){var a=ze(s.value),c=ze(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Ho(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ft(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ft(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var gr,Wo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=gr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Hr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Li=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(r){Li.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),bi[s]=bi[r]})});function qo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||bi.hasOwnProperty(r)&&bi[r]?(""+s).trim():s+"px"}function Ko(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=qo(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var Go=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(r,s){if(s){if(Go[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Yo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ps(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var xs=null,fn=null,Wn=null;function Ns(r){if(r=Ea(r)){if(typeof xs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Zl(s),xs(r.stateNode,r.type,s))}}function qn(r){fn?Wn?Wn.push(r):Wn=[r]:fn=r}function Xo(){if(fn){var r=fn,s=Wn;if(Wn=fn=null,Ns(r),s)for(r=0;r<s.length;r++)Ns(s[r])}}function Vi(r,s){return r(s)}function Jo(){}var yr=!1;function Zo(r,s,a){if(yr)return r(s,a);yr=!0;try{return Vi(r,s,a)}finally{yr=!1,(fn!==null||Wn!==null)&&(Jo(),Xo())}}function st(r,s){var a=r.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ds=!1;if(h)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ds=!1}function Mi(r,s,a,c,f,g,v,A,x){var $=Array.prototype.slice.call(arguments,3);try{s.apply(a,$)}catch(X){this.onError(X)}}var Fi=!1,bs=null,Cn=!1,ea=null,Yc={onError:function(r){Fi=!0,bs=r}};function Ls(r,s,a,c,f,g,v,A,x){Fi=!1,bs=null,Mi.apply(Yc,arguments)}function Sl(r,s,a,c,f,g,v,A,x){if(Ls.apply(this,arguments),Fi){if(Fi){var $=bs;Fi=!1,bs=null}else throw Error(t(198));Cn||(Cn=!0,ea=$)}}function kn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Ui(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Pn(r){if(kn(r)!==r)throw Error(t(188))}function Rl(r){var s=r.alternate;if(!s){if(s=kn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Pn(f),r;if(g===c)return Pn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var v=!1,A=f.child;A;){if(A===a){v=!0,a=f,c=g;break}if(A===c){v=!0,c=f,a=g;break}A=A.sibling}if(!v){for(A=g.child;A;){if(A===a){v=!0,a=g,c=f;break}if(A===c){v=!0,c=g,a=f;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ta(r){return r=Rl(r),r!==null?Os(r):null}function Os(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Os(r);if(s!==null)return s;r=r.sibling}return null}var Vs=e.unstable_scheduleCallback,na=e.unstable_cancelCallback,Al=e.unstable_shouldYield,Xc=e.unstable_requestPaint,We=e.unstable_now,Cl=e.unstable_getCurrentPriorityLevel,zi=e.unstable_ImmediatePriority,Wr=e.unstable_UserBlockingPriority,pn=e.unstable_NormalPriority,ra=e.unstable_LowPriority,kl=e.unstable_IdlePriority,ji=null,rn=null;function Pl(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(ji,r,void 0,(r.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Nl,ia=Math.log,xl=Math.LN2;function Nl(r){return r>>>=0,r===0?32:31-(ia(r)/xl|0)|0}var Ms=64,Fs=4194304;function qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Bi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var A=v&~f;A!==0?c=qr(A):(g&=v,g!==0&&(c=qr(g)))}else v=a&~f,v!==0?c=qr(v):g!==0&&(c=qr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&f)&&(f=c&-c,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Bt(s),f=1<<a,c|=r[a],s&=~f;return c}function Jc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Bt(g),A=1<<v,x=f[v];x===-1?(!(A&a)||A&c)&&(f[v]=Jc(A,s)):x<=s&&(r.expiredLanes|=A),g&=~A}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function $i(){var r=Ms;return Ms<<=1,!(Ms&4194240)&&(Ms=64),r}function Kr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Gr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Bt(s),r[s]=a}function $e(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Bt(a),g=1<<f;s[f]=0,c[f]=-1,r[f]=-1,a&=~g}}function Qr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Bt(a),f=1<<c;f&s|r[c]&s&&(r[c]|=s),a&=~f}}var xe=0;function Yr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Dl,Us,bl,Ll,Ol,sa=!1,Kn=[],Ct=null,xn=null,Nn=null,Xr=new Map,mn=new Map,Gn=[],Zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vl(r,s){switch(r){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Xr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(s.pointerId)}}function Kt(r,s,a,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ea(s),s!==null&&Us(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function ed(r,s,a,c,f){switch(s){case"focusin":return Ct=Kt(Ct,r,s,a,c,f),!0;case"dragenter":return xn=Kt(xn,r,s,a,c,f),!0;case"mouseover":return Nn=Kt(Nn,r,s,a,c,f),!0;case"pointerover":var g=f.pointerId;return Xr.set(g,Kt(Xr.get(g)||null,r,s,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,mn.set(g,Kt(mn.get(g)||null,r,s,a,c,f)),!0}return!1}function Ml(r){var s=Gi(r.target);if(s!==null){var a=kn(s);if(a!==null){if(s=a.tag,s===13){if(s=Ui(a),s!==null){r.blockedOn=s,Ol(r.priority,function(){bl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function vr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=zs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Oi=c,a.target.dispatchEvent(c),Oi=null}else return s=Ea(a),s!==null&&Us(s),r.blockedOn=a,!1;s.shift()}return!0}function Hi(r,s,a){vr(r)&&a.delete(s)}function Fl(){sa=!1,Ct!==null&&vr(Ct)&&(Ct=null),xn!==null&&vr(xn)&&(xn=null),Nn!==null&&vr(Nn)&&(Nn=null),Xr.forEach(Hi),mn.forEach(Hi)}function Dn(r,s){r.blockedOn===s&&(r.blockedOn=null,sa||(sa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fl)))}function bn(r){function s(f){return Dn(f,r)}if(0<Kn.length){Dn(Kn[0],r);for(var a=1;a<Kn.length;a++){var c=Kn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Ct!==null&&Dn(Ct,r),xn!==null&&Dn(xn,r),Nn!==null&&Dn(Nn,r),Xr.forEach(s),mn.forEach(s),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)Ml(a),a.blockedOn===null&&Gn.shift()}var Er=ee.ReactCurrentBatchConfig,Jr=!0;function Ye(r,s,a,c){var f=xe,g=Er.transition;Er.transition=null;try{xe=1,oa(r,s,a,c)}finally{xe=f,Er.transition=g}}function td(r,s,a,c){var f=xe,g=Er.transition;Er.transition=null;try{xe=4,oa(r,s,a,c)}finally{xe=f,Er.transition=g}}function oa(r,s,a,c){if(Jr){var f=zs(r,s,a,c);if(f===null)hd(r,s,c,Wi,a),Vl(r,c);else if(ed(f,r,s,a,c))c.stopPropagation();else if(Vl(r,c),s&4&&-1<Zc.indexOf(r)){for(;f!==null;){var g=Ea(f);if(g!==null&&Dl(g),g=zs(r,s,a,c),g===null&&hd(r,s,c,Wi,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else hd(r,s,c,null,a)}}var Wi=null;function zs(r,s,a,c){if(Wi=null,r=Ps(c),r=Gi(r),r!==null)if(s=kn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Ui(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Wi=r,null}function aa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cl()){case zi:return 1;case Wr:return 4;case pn:case ra:return 16;case kl:return 536870912;default:return 16}default:return 16}}var on=null,js=null,Gt=null;function la(){if(Gt)return Gt;var r,s=js,a=s.length,c,f="value"in on?on.value:on.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===f[g-c];c++);return Gt=f.slice(r,1<c?1-c:void 0)}function Bs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Qn(){return!0}function ua(){return!1}function kt(r){function s(a,c,f,g,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Qn:ua,this.isPropagationStopped=ua,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=kt(Ln),Yn=se({},Ln,{view:0,detail:0}),nd=kt(Yn),Hs,wr,Zr,qi=se({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Zr&&(Zr&&r.type==="mousemove"?(Hs=r.screenX-Zr.screenX,wr=r.screenY-Zr.screenY):wr=Hs=0,Zr=r),Hs)},movementY:function(r){return"movementY"in r?r.movementY:wr}}),Ws=kt(qi),ca=se({},qi,{dataTransfer:0}),Ul=kt(ca),qs=se({},Yn,{relatedTarget:0}),Ks=kt(qs),zl=se({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=kt(zl),jl=se({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Bl=kt(jl),$l=se({},Ln,{data:0}),da=kt($l),Gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Hl[r])?!!s[r]:!1}function Xn(){return Wl}var u=se({},Yn,{key:function(r){if(r.key){var s=Gs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Bs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$t[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(r){return r.type==="keypress"?Bs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Bs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=kt(u),_=se({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=kt(_),F=se({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),q=kt(F),re=se({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=kt(re),mt=se({},qi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=kt(mt),Tt=[9,13,27,32],lt=h&&"CompositionEvent"in window,gn=null;h&&"documentMode"in document&&(gn=document.documentMode);var an=h&&"TextEvent"in window&&!gn,Ki=h&&(!lt||gn&&8<gn&&11>=gn),Qs=" ",_p=!1;function vp(r,s){switch(r){case"keyup":return Tt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ys=!1;function mw(r,s){switch(r){case"compositionend":return Ep(s);case"keypress":return s.which!==32?null:(_p=!0,Qs);case"textInput":return r=s.data,r===Qs&&_p?null:r;default:return null}}function gw(r,s){if(Ys)return r==="compositionend"||!lt&&vp(r,s)?(r=la(),Gt=js=on=null,Ys=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ki&&s.locale!=="ko"?null:s.data;default:return null}}var yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!yw[r.type]:s==="textarea"}function Tp(r,s,a,c){qn(c),s=Yl(s,"onChange"),0<s.length&&(a=new $s("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var ha=null,fa=null;function _w(r){zp(r,0)}function ql(r){var s=to(r);if(Ss(s))return r}function vw(r,s){if(r==="change")return s}var Ip=!1;if(h){var rd;if(h){var id="oninput"in document;if(!id){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),id=typeof Sp.oninput=="function"}rd=id}else rd=!1;Ip=rd&&(!document.documentMode||9<document.documentMode)}function Rp(){ha&&(ha.detachEvent("onpropertychange",Ap),fa=ha=null)}function Ap(r){if(r.propertyName==="value"&&ql(fa)){var s=[];Tp(s,fa,r,Ps(r)),Zo(_w,s)}}function Ew(r,s,a){r==="focusin"?(Rp(),ha=s,fa=a,ha.attachEvent("onpropertychange",Ap)):r==="focusout"&&Rp()}function ww(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ql(fa)}function Tw(r,s){if(r==="click")return ql(s)}function Iw(r,s){if(r==="input"||r==="change")return ql(s)}function Sw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var On=typeof Object.is=="function"?Object.is:Sw;function pa(r,s){if(On(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(s,f)||!On(r[f],s[f]))return!1}return!0}function Cp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function kp(r,s){var a=Cp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cp(a)}}function Pp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Pp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function xp(){for(var r=window,s=$r();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=$r(r.document)}return s}function sd(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Rw(r){var s=xp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Pp(a.ownerDocument.documentElement,a)){if(c!==null&&sd(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=kp(a,g);var v=kp(a,c);f&&v&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Aw=h&&"documentMode"in document&&11>=document.documentMode,Xs=null,od=null,ma=null,ad=!1;function Np(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ad||Xs==null||Xs!==$r(c)||(c=Xs,"selectionStart"in c&&sd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=Yl(od,"onSelect"),0<c.length&&(s=new $s("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Xs)))}function Kl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Js={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},ld={},Dp={};h&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Gl(r){if(ld[r])return ld[r];if(!Js[r])return r;var s=Js[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Dp)return ld[r]=s[a];return r}var bp=Gl("animationend"),Lp=Gl("animationiteration"),Op=Gl("animationstart"),Vp=Gl("transitionend"),Mp=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(r,s){Mp.set(r,s),l(s,[r])}for(var ud=0;ud<Fp.length;ud++){var cd=Fp[ud],Cw=cd.toLowerCase(),kw=cd[0].toUpperCase()+cd.slice(1);ei(Cw,"on"+kw)}ei(bp,"onAnimationEnd"),ei(Lp,"onAnimationIteration"),ei(Op,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(Vp,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Up(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Sl(c,s,void 0,r),r.currentTarget=null}function zp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var A=c[v],x=A.instance,$=A.currentTarget;if(A=A.listener,x!==g&&f.isPropagationStopped())break e;Up(f,A,$),g=x}else for(v=0;v<c.length;v++){if(A=c[v],x=A.instance,$=A.currentTarget,A=A.listener,x!==g&&f.isPropagationStopped())break e;Up(f,A,$),g=x}}}if(Cn)throw r=ea,Cn=!1,ea=null,r}function Ke(r,s){var a=s[_d];a===void 0&&(a=s[_d]=new Set);var c=r+"__bubble";a.has(c)||(jp(s,r,2,!1),a.add(c))}function dd(r,s,a){var c=0;s&&(c|=4),jp(a,r,c,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function ya(r){if(!r[Ql]){r[Ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(Pw.has(a)||dd(a,!1,r),dd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,dd("selectionchange",!1,s))}}function jp(r,s,a,c){switch(aa(s)){case 1:var f=Ye;break;case 4:f=td;break;default:f=oa}a=f.bind(null,s,a,r),f=void 0,!Ds||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function hd(r,s,a,c,f){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var x=v.tag;if((x===3||x===4)&&(x=v.stateNode.containerInfo,x===f||x.nodeType===8&&x.parentNode===f))return;v=v.return}for(;A!==null;){if(v=Gi(A),v===null)return;if(x=v.tag,x===5||x===6){c=g=v;continue e}A=A.parentNode}}c=c.return}Zo(function(){var $=g,X=Ps(a),J=[];e:{var Y=Mp.get(r);if(Y!==void 0){var ie=$s,le=r;switch(r){case"keypress":if(Bs(a)===0)break e;case"keydown":case"keyup":ie=m;break;case"focusin":le="focus",ie=Ks;break;case"focusout":le="blur",ie=Ks;break;case"beforeblur":case"afterblur":ie=Ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Ul;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=q;break;case bp:case Lp:case Op:ie=Tr;break;case Vp:ie=Be;break;case"scroll":ie=nd;break;case"wheel":ie=be;break;case"copy":case"cut":case"paste":ie=Bl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=w}var ue=(s&4)!==0,ot=!ue&&r==="scroll",U=ue?Y!==null?Y+"Capture":null:Y;ue=[];for(var b=$,j;b!==null;){j=b;var te=j.stateNode;if(j.tag===5&&te!==null&&(j=te,U!==null&&(te=st(b,U),te!=null&&ue.push(_a(b,te,j)))),ot)break;b=b.return}0<ue.length&&(Y=new ie(Y,le,null,a,X),J.push({event:Y,listeners:ue}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",Y&&a!==Oi&&(le=a.relatedTarget||a.fromElement)&&(Gi(le)||le[Ir]))break e;if((ie||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,ie?(le=a.relatedTarget||a.toElement,ie=$,le=le?Gi(le):null,le!==null&&(ot=kn(le),le!==ot||le.tag!==5&&le.tag!==6)&&(le=null)):(ie=null,le=$),ie!==le)){if(ue=Ws,te="onMouseLeave",U="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(ue=w,te="onPointerLeave",U="onPointerEnter",b="pointer"),ot=ie==null?Y:to(ie),j=le==null?Y:to(le),Y=new ue(te,b+"leave",ie,a,X),Y.target=ot,Y.relatedTarget=j,te=null,Gi(X)===$&&(ue=new ue(U,b+"enter",le,a,X),ue.target=j,ue.relatedTarget=ot,te=ue),ot=te,ie&&le)t:{for(ue=ie,U=le,b=0,j=ue;j;j=Zs(j))b++;for(j=0,te=U;te;te=Zs(te))j++;for(;0<b-j;)ue=Zs(ue),b--;for(;0<j-b;)U=Zs(U),j--;for(;b--;){if(ue===U||U!==null&&ue===U.alternate)break t;ue=Zs(ue),U=Zs(U)}ue=null}else ue=null;ie!==null&&Bp(J,Y,ie,ue,!1),le!==null&&ot!==null&&Bp(J,ot,le,ue,!0)}}e:{if(Y=$?to($):window,ie=Y.nodeName&&Y.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Y.type==="file")var ce=vw;else if(wp(Y))if(Ip)ce=Iw;else{ce=ww;var ge=Ew}else(ie=Y.nodeName)&&ie.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(ce=Tw);if(ce&&(ce=ce(r,$))){Tp(J,ce,a,X);break e}ge&&ge(r,Y,$),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&As(Y,"number",Y.value)}switch(ge=$?to($):window,r){case"focusin":(wp(ge)||ge.contentEditable==="true")&&(Xs=ge,od=$,ma=null);break;case"focusout":ma=od=Xs=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,Np(J,a,X);break;case"selectionchange":if(Aw)break;case"keydown":case"keyup":Np(J,a,X)}var ye;if(lt)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ys?vp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Ki&&a.locale!=="ko"&&(Ys||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ys&&(ye=la()):(on=X,js="value"in on?on.value:on.textContent,Ys=!0)),ge=Yl($,we),0<ge.length&&(we=new da(we,r,null,a,X),J.push({event:we,listeners:ge}),ye?we.data=ye:(ye=Ep(a),ye!==null&&(we.data=ye)))),(ye=an?mw(r,a):gw(r,a))&&($=Yl($,"onBeforeInput"),0<$.length&&(X=new da("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:$}),X.data=ye))}zp(J,s)})}function _a(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Yl(r,s){for(var a=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=st(r,a),g!=null&&c.unshift(_a(r,g,f)),g=st(r,s),g!=null&&c.push(_a(r,g,f))),r=r.return}return c}function Zs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Bp(r,s,a,c,f){for(var g=s._reactName,v=[];a!==null&&a!==c;){var A=a,x=A.alternate,$=A.stateNode;if(x!==null&&x===c)break;A.tag===5&&$!==null&&(A=$,f?(x=st(a,g),x!=null&&v.unshift(_a(a,x,A))):f||(x=st(a,g),x!=null&&v.push(_a(a,x,A)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var xw=/\r\n?/g,Nw=/\u0000|\uFFFD/g;function $p(r){return(typeof r=="string"?r:""+r).replace(xw,`
`).replace(Nw,"")}function Xl(r,s,a){if(s=$p(s),$p(r)!==s&&a)throw Error(t(425))}function Jl(){}var fd=null,pd=null;function md(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var gd=typeof setTimeout=="function"?setTimeout:void 0,Dw=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,bw=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(r){return Hp.resolve(null).then(r).catch(Lw)}:gd;function Lw(r){setTimeout(function(){throw r})}function yd(r,s){var a=s,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),bn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);bn(s)}function ti(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Wp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Jn="__reactFiber$"+eo,va="__reactProps$"+eo,Ir="__reactContainer$"+eo,_d="__reactEvents$"+eo,Ow="__reactListeners$"+eo,Vw="__reactHandles$"+eo;function Gi(r){var s=r[Jn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ir]||a[Jn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Wp(r);r!==null;){if(a=r[Jn])return a;r=Wp(r)}return s}r=a,a=r.parentNode}return null}function Ea(r){return r=r[Jn]||r[Ir],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function to(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Zl(r){return r[va]||null}var vd=[],no=-1;function ni(r){return{current:r}}function Ge(r){0>no||(r.current=vd[no],vd[no]=null,no--)}function qe(r,s){no++,vd[no]=r.current,r.current=s}var ri={},Lt=ni(ri),Qt=ni(!1),Qi=ri;function ro(r,s){var a=r.type.contextTypes;if(!a)return ri;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Yt(r){return r=r.childContextTypes,r!=null}function eu(){Ge(Qt),Ge(Lt)}function qp(r,s,a){if(Lt.current!==ri)throw Error(t(168));qe(Lt,s),qe(Qt,a)}function Kp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in s))throw Error(t(108,Ue(r)||"Unknown",f));return se({},a,c)}function tu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ri,Qi=Lt.current,qe(Lt,r),qe(Qt,Qt.current),!0}function Gp(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Kp(r,s,Qi),c.__reactInternalMemoizedMergedChildContext=r,Ge(Qt),Ge(Lt),qe(Lt,r)):Ge(Qt),qe(Qt,a)}var Sr=null,nu=!1,Ed=!1;function Qp(r){Sr===null?Sr=[r]:Sr.push(r)}function Mw(r){nu=!0,Qp(r)}function ii(){if(!Ed&&Sr!==null){Ed=!0;var r=0,s=xe;try{var a=Sr;for(xe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Sr=null,nu=!1}catch(f){throw Sr!==null&&(Sr=Sr.slice(r+1)),Vs(zi,ii),f}finally{xe=s,Ed=!1}}return null}var io=[],so=0,ru=null,iu=0,yn=[],_n=0,Yi=null,Rr=1,Ar="";function Xi(r,s){io[so++]=iu,io[so++]=ru,ru=r,iu=s}function Yp(r,s,a){yn[_n++]=Rr,yn[_n++]=Ar,yn[_n++]=Yi,Yi=r;var c=Rr;r=Ar;var f=32-Bt(c)-1;c&=~(1<<f),a+=1;var g=32-Bt(s)+f;if(30<g){var v=f-f%5;g=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Rr=1<<32-Bt(s)+f|a<<f|c,Ar=g+r}else Rr=1<<g|a<<f|c,Ar=r}function wd(r){r.return!==null&&(Xi(r,1),Yp(r,1,0))}function Td(r){for(;r===ru;)ru=io[--so],io[so]=null,iu=io[--so],io[so]=null;for(;r===Yi;)Yi=yn[--_n],yn[_n]=null,Ar=yn[--_n],yn[_n]=null,Rr=yn[--_n],yn[_n]=null}var ln=null,un=null,Xe=!1,Vn=null;function Xp(r,s){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Jp(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ti(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Yi!==null?{id:Rr,overflow:Ar}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Id(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Sd(r){if(Xe){var s=un;if(s){var a=s;if(!Jp(r,s)){if(Id(r))throw Error(t(418));s=ti(a.nextSibling);var c=ln;s&&Jp(r,s)?Xp(c,a):(r.flags=r.flags&-4097|2,Xe=!1,ln=r)}}else{if(Id(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,ln=r}}}function Zp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function su(r){if(r!==ln)return!1;if(!Xe)return Zp(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!md(r.type,r.memoizedProps)),s&&(s=un)){if(Id(r))throw em(),Error(t(418));for(;s;)Xp(r,s),s=ti(s.nextSibling)}if(Zp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ti(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ti(r.stateNode.nextSibling):null;return!0}function em(){for(var r=un;r;)r=ti(r.nextSibling)}function oo(){un=ln=null,Xe=!1}function Rd(r){Vn===null?Vn=[r]:Vn.push(r)}var Fw=ee.ReactCurrentBatchConfig;function wa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var A=f.refs;v===null?delete A[g]:A[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function tm(r){var s=r._init;return s(r._payload)}function nm(r){function s(U,b){if(r){var j=U.deletions;j===null?(U.deletions=[b],U.flags|=16):j.push(b)}}function a(U,b){if(!r)return null;for(;b!==null;)s(U,b),b=b.sibling;return null}function c(U,b){for(U=new Map;b!==null;)b.key!==null?U.set(b.key,b):U.set(b.index,b),b=b.sibling;return U}function f(U,b){return U=hi(U,b),U.index=0,U.sibling=null,U}function g(U,b,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<b?(U.flags|=2,b):j):(U.flags|=2,b)):(U.flags|=1048576,b)}function v(U){return r&&U.alternate===null&&(U.flags|=2),U}function A(U,b,j,te){return b===null||b.tag!==6?(b=gh(j,U.mode,te),b.return=U,b):(b=f(b,j),b.return=U,b)}function x(U,b,j,te){var ce=j.type;return ce===k?X(U,b,j.props.children,te,j.key):b!==null&&(b.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ht&&tm(ce)===b.type)?(te=f(b,j.props),te.ref=wa(U,b,j),te.return=U,te):(te=xu(j.type,j.key,j.props,null,U.mode,te),te.ref=wa(U,b,j),te.return=U,te)}function $(U,b,j,te){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=yh(j,U.mode,te),b.return=U,b):(b=f(b,j.children||[]),b.return=U,b)}function X(U,b,j,te,ce){return b===null||b.tag!==7?(b=ss(j,U.mode,te,ce),b.return=U,b):(b=f(b,j),b.return=U,b)}function J(U,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=gh(""+b,U.mode,j),b.return=U,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case de:return j=xu(b.type,b.key,b.props,null,U.mode,j),j.ref=wa(U,null,b),j.return=U,j;case he:return b=yh(b,U.mode,j),b.return=U,b;case ht:var te=b._init;return J(U,te(b._payload),j)}if(pr(b)||me(b))return b=ss(b,U.mode,j,null),b.return=U,b;ou(U,b)}return null}function Y(U,b,j,te){var ce=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ce!==null?null:A(U,b,""+j,te);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case de:return j.key===ce?x(U,b,j,te):null;case he:return j.key===ce?$(U,b,j,te):null;case ht:return ce=j._init,Y(U,b,ce(j._payload),te)}if(pr(j)||me(j))return ce!==null?null:X(U,b,j,te,null);ou(U,j)}return null}function ie(U,b,j,te,ce){if(typeof te=="string"&&te!==""||typeof te=="number")return U=U.get(j)||null,A(b,U,""+te,ce);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case de:return U=U.get(te.key===null?j:te.key)||null,x(b,U,te,ce);case he:return U=U.get(te.key===null?j:te.key)||null,$(b,U,te,ce);case ht:var ge=te._init;return ie(U,b,j,ge(te._payload),ce)}if(pr(te)||me(te))return U=U.get(j)||null,X(b,U,te,ce,null);ou(b,te)}return null}function le(U,b,j,te){for(var ce=null,ge=null,ye=b,we=b=0,Rt=null;ye!==null&&we<j.length;we++){ye.index>we?(Rt=ye,ye=null):Rt=ye.sibling;var Fe=Y(U,ye,j[we],te);if(Fe===null){ye===null&&(ye=Rt);break}r&&ye&&Fe.alternate===null&&s(U,ye),b=g(Fe,b,we),ge===null?ce=Fe:ge.sibling=Fe,ge=Fe,ye=Rt}if(we===j.length)return a(U,ye),Xe&&Xi(U,we),ce;if(ye===null){for(;we<j.length;we++)ye=J(U,j[we],te),ye!==null&&(b=g(ye,b,we),ge===null?ce=ye:ge.sibling=ye,ge=ye);return Xe&&Xi(U,we),ce}for(ye=c(U,ye);we<j.length;we++)Rt=ie(ye,U,we,j[we],te),Rt!==null&&(r&&Rt.alternate!==null&&ye.delete(Rt.key===null?we:Rt.key),b=g(Rt,b,we),ge===null?ce=Rt:ge.sibling=Rt,ge=Rt);return r&&ye.forEach(function(fi){return s(U,fi)}),Xe&&Xi(U,we),ce}function ue(U,b,j,te){var ce=me(j);if(typeof ce!="function")throw Error(t(150));if(j=ce.call(j),j==null)throw Error(t(151));for(var ge=ce=null,ye=b,we=b=0,Rt=null,Fe=j.next();ye!==null&&!Fe.done;we++,Fe=j.next()){ye.index>we?(Rt=ye,ye=null):Rt=ye.sibling;var fi=Y(U,ye,Fe.value,te);if(fi===null){ye===null&&(ye=Rt);break}r&&ye&&fi.alternate===null&&s(U,ye),b=g(fi,b,we),ge===null?ce=fi:ge.sibling=fi,ge=fi,ye=Rt}if(Fe.done)return a(U,ye),Xe&&Xi(U,we),ce;if(ye===null){for(;!Fe.done;we++,Fe=j.next())Fe=J(U,Fe.value,te),Fe!==null&&(b=g(Fe,b,we),ge===null?ce=Fe:ge.sibling=Fe,ge=Fe);return Xe&&Xi(U,we),ce}for(ye=c(U,ye);!Fe.done;we++,Fe=j.next())Fe=ie(ye,U,we,Fe.value,te),Fe!==null&&(r&&Fe.alternate!==null&&ye.delete(Fe.key===null?we:Fe.key),b=g(Fe,b,we),ge===null?ce=Fe:ge.sibling=Fe,ge=Fe);return r&&ye.forEach(function(gT){return s(U,gT)}),Xe&&Xi(U,we),ce}function ot(U,b,j,te){if(typeof j=="object"&&j!==null&&j.type===k&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case de:e:{for(var ce=j.key,ge=b;ge!==null;){if(ge.key===ce){if(ce=j.type,ce===k){if(ge.tag===7){a(U,ge.sibling),b=f(ge,j.props.children),b.return=U,U=b;break e}}else if(ge.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ht&&tm(ce)===ge.type){a(U,ge.sibling),b=f(ge,j.props),b.ref=wa(U,ge,j),b.return=U,U=b;break e}a(U,ge);break}else s(U,ge);ge=ge.sibling}j.type===k?(b=ss(j.props.children,U.mode,te,j.key),b.return=U,U=b):(te=xu(j.type,j.key,j.props,null,U.mode,te),te.ref=wa(U,b,j),te.return=U,U=te)}return v(U);case he:e:{for(ge=j.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){a(U,b.sibling),b=f(b,j.children||[]),b.return=U,U=b;break e}else{a(U,b);break}else s(U,b);b=b.sibling}b=yh(j,U.mode,te),b.return=U,U=b}return v(U);case ht:return ge=j._init,ot(U,b,ge(j._payload),te)}if(pr(j))return le(U,b,j,te);if(me(j))return ue(U,b,j,te);ou(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(a(U,b.sibling),b=f(b,j),b.return=U,U=b):(a(U,b),b=gh(j,U.mode,te),b.return=U,U=b),v(U)):a(U,b)}return ot}var ao=nm(!0),rm=nm(!1),au=ni(null),lu=null,lo=null,Ad=null;function Cd(){Ad=lo=lu=null}function kd(r){var s=au.current;Ge(au),r._currentValue=s}function Pd(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function uo(r,s){lu=r,Ad=lo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Xt=!0),r.firstContext=null)}function vn(r){var s=r._currentValue;if(Ad!==r)if(r={context:r,memoizedValue:s,next:null},lo===null){if(lu===null)throw Error(t(308));lo=r,lu.dependencies={lanes:0,firstContext:r}}else lo=lo.next=r;return s}var Ji=null;function xd(r){Ji===null?Ji=[r]:Ji.push(r)}function im(r,s,a,c){var f=s.interleaved;return f===null?(a.next=a,xd(s)):(a.next=f.next,f.next=a),s.interleaved=a,Cr(r,c)}function Cr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var si=!1;function Nd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function kr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function oi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,Cr(r,a)}return f=c.interleaved,f===null?(s.next=s,xd(c)):(s.next=f.next,f.next=s),c.interleaved=s,Cr(r,a)}function uu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}function om(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function cu(r,s,a,c){var f=r.updateQueue;si=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var x=A,$=x.next;x.next=null,v===null?g=$:v.next=$,v=x;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==v&&(A===null?X.firstBaseUpdate=$:A.next=$,X.lastBaseUpdate=x))}if(g!==null){var J=f.baseState;v=0,X=$=x=null,A=g;do{var Y=A.lane,ie=A.eventTime;if((c&Y)===Y){X!==null&&(X=X.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var le=r,ue=A;switch(Y=s,ie=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){J=le.call(ie,J,Y);break e}J=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,Y=typeof le=="function"?le.call(ie,J,Y):le,Y==null)break e;J=se({},J,Y);break e;case 2:si=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[A]:Y.push(A))}else ie={eventTime:ie,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?($=X=ie,x=J):X=X.next=ie,v|=Y;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(X===null&&(x=J),f.baseState=x,f.firstBaseUpdate=$,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ts|=v,r.lanes=v,r.memoizedState=J}}function am(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ta={},Zn=ni(Ta),Ia=ni(Ta),Sa=ni(Ta);function Zi(r){if(r===Ta)throw Error(t(174));return r}function Dd(r,s){switch(qe(Sa,s),qe(Ia,r),qe(Zn,Ta),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ge(Zn),qe(Zn,s)}function co(){Ge(Zn),Ge(Ia),Ge(Sa)}function lm(r){Zi(Sa.current);var s=Zi(Zn.current),a=pt(s,r.type);s!==a&&(qe(Ia,r),qe(Zn,a))}function bd(r){Ia.current===r&&(Ge(Zn),Ge(Ia))}var Ze=ni(0);function du(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ld=[];function Od(){for(var r=0;r<Ld.length;r++)Ld[r]._workInProgressVersionPrimary=null;Ld.length=0}var hu=ee.ReactCurrentDispatcher,Vd=ee.ReactCurrentBatchConfig,es=0,et=null,gt=null,It=null,fu=!1,Ra=!1,Aa=0,Uw=0;function Ot(){throw Error(t(321))}function Md(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!On(r[a],s[a]))return!1;return!0}function Fd(r,s,a,c,f,g){if(es=g,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,hu.current=r===null||r.memoizedState===null?$w:Hw,r=a(c,f),Ra){g=0;do{if(Ra=!1,Aa=0,25<=g)throw Error(t(301));g+=1,It=gt=null,s.updateQueue=null,hu.current=Ww,r=a(c,f)}while(Ra)}if(hu.current=gu,s=gt!==null&&gt.next!==null,es=0,It=gt=et=null,fu=!1,s)throw Error(t(300));return r}function Ud(){var r=Aa!==0;return Aa=0,r}function er(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?et.memoizedState=It=r:It=It.next=r,It}function En(){if(gt===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=It===null?et.memoizedState:It.next;if(s!==null)It=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?et.memoizedState=It=r:It=It.next=r}return It}function Ca(r,s){return typeof s=="function"?s(r):s}function zd(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=gt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var A=v=null,x=null,$=g;do{var X=$.lane;if((es&X)===X)x!==null&&(x=x.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),c=$.hasEagerState?$.eagerState:r(c,$.action);else{var J={lane:X,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};x===null?(A=x=J,v=c):x=x.next=J,et.lanes|=X,ts|=X}$=$.next}while($!==null&&$!==g);x===null?v=c:x.next=A,On(c,s.memoizedState)||(Xt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=x,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do g=f.lane,et.lanes|=g,ts|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function jd(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do g=r(g,v.action),v=v.next;while(v!==f);On(g,s.memoizedState)||(Xt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function um(){}function cm(r,s){var a=et,c=En(),f=s(),g=!On(c.memoizedState,f);if(g&&(c.memoizedState=f,Xt=!0),c=c.queue,Bd(fm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,ka(9,hm.bind(null,a,c,f,s),void 0,null),St===null)throw Error(t(349));es&30||dm(a,s,f)}return f}function dm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function hm(r,s,a,c){s.value=a,s.getSnapshot=c,pm(s)&&mm(r)}function fm(r,s,a){return a(function(){pm(s)&&mm(r)})}function pm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!On(r,a)}catch{return!0}}function mm(r){var s=Cr(r,1);s!==null&&zn(s,r,1,-1)}function gm(r){var s=er();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:r},s.queue=r,r=r.dispatch=Bw.bind(null,et,r),[s.memoizedState,r]}function ka(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function ym(){return En().memoizedState}function pu(r,s,a,c){var f=er();et.flags|=r,f.memoizedState=ka(1|s,a,void 0,c===void 0?null:c)}function mu(r,s,a,c){var f=En();c=c===void 0?null:c;var g=void 0;if(gt!==null){var v=gt.memoizedState;if(g=v.destroy,c!==null&&Md(c,v.deps)){f.memoizedState=ka(s,a,g,c);return}}et.flags|=r,f.memoizedState=ka(1|s,a,g,c)}function _m(r,s){return pu(8390656,8,r,s)}function Bd(r,s){return mu(2048,8,r,s)}function vm(r,s){return mu(4,2,r,s)}function Em(r,s){return mu(4,4,r,s)}function wm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Tm(r,s,a){return a=a!=null?a.concat([r]):null,mu(4,4,wm.bind(null,s,r),a)}function $d(){}function Im(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Md(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Sm(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Md(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Rm(r,s,a){return es&21?(On(a,s)||(a=$i(),et.lanes|=a,ts|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Xt=!0),r.memoizedState=a)}function zw(r,s){var a=xe;xe=a!==0&&4>a?a:4,r(!0);var c=Vd.transition;Vd.transition={};try{r(!1),s()}finally{xe=a,Vd.transition=c}}function Am(){return En().memoizedState}function jw(r,s,a){var c=ci(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Cm(r))km(s,a);else if(a=im(r,s,a,c),a!==null){var f=Wt();zn(a,r,c,f),Pm(a,s,c)}}function Bw(r,s,a){var c=ci(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cm(r))km(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,A=g(v,a);if(f.hasEagerState=!0,f.eagerState=A,On(A,v)){var x=s.interleaved;x===null?(f.next=f,xd(s)):(f.next=x.next,x.next=f),s.interleaved=f;return}}catch{}finally{}a=im(r,s,f,c),a!==null&&(f=Wt(),zn(a,r,c,f),Pm(a,s,c))}}function Cm(r){var s=r.alternate;return r===et||s!==null&&s===et}function km(r,s){Ra=fu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Pm(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}var gu={readContext:vn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},$w={readContext:vn,useCallback:function(r,s){return er().memoizedState=[r,s===void 0?null:s],r},useContext:vn,useEffect:_m,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,pu(4194308,4,wm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return pu(4194308,4,r,s)},useInsertionEffect:function(r,s){return pu(4,2,r,s)},useMemo:function(r,s){var a=er();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=er();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=jw.bind(null,et,r),[c.memoizedState,r]},useRef:function(r){var s=er();return r={current:r},s.memoizedState=r},useState:gm,useDebugValue:$d,useDeferredValue:function(r){return er().memoizedState=r},useTransition:function(){var r=gm(!1),s=r[0];return r=zw.bind(null,r[1]),er().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=et,f=er();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));es&30||dm(c,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,_m(fm.bind(null,c,g,r),[r]),c.flags|=2048,ka(9,hm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=er(),s=St.identifierPrefix;if(Xe){var a=Ar,c=Rr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Aa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Uw++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},Hw={readContext:vn,useCallback:Im,useContext:vn,useEffect:Bd,useImperativeHandle:Tm,useInsertionEffect:vm,useLayoutEffect:Em,useMemo:Sm,useReducer:zd,useRef:ym,useState:function(){return zd(Ca)},useDebugValue:$d,useDeferredValue:function(r){var s=En();return Rm(s,gt.memoizedState,r)},useTransition:function(){var r=zd(Ca)[0],s=En().memoizedState;return[r,s]},useMutableSource:um,useSyncExternalStore:cm,useId:Am,unstable_isNewReconciler:!1},Ww={readContext:vn,useCallback:Im,useContext:vn,useEffect:Bd,useImperativeHandle:Tm,useInsertionEffect:vm,useLayoutEffect:Em,useMemo:Sm,useReducer:jd,useRef:ym,useState:function(){return jd(Ca)},useDebugValue:$d,useDeferredValue:function(r){var s=En();return gt===null?s.memoizedState=r:Rm(s,gt.memoizedState,r)},useTransition:function(){var r=jd(Ca)[0],s=En().memoizedState;return[r,s]},useMutableSource:um,useSyncExternalStore:cm,useId:Am,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Hd(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var yu={isMounted:function(r){return(r=r._reactInternals)?kn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Wt(),f=ci(r),g=kr(c,f);g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,f),s!==null&&(zn(s,r,f,c),uu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Wt(),f=ci(r),g=kr(c,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,f),s!==null&&(zn(s,r,f,c),uu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),c=ci(r),f=kr(a,c);f.tag=2,s!=null&&(f.callback=s),s=oi(r,f,c),s!==null&&(zn(s,r,c,a),uu(s,r,c))}};function xm(r,s,a,c,f,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!pa(a,c)||!pa(f,g):!0}function Nm(r,s,a){var c=!1,f=ri,g=s.contextType;return typeof g=="object"&&g!==null?g=vn(g):(f=Yt(s)?Qi:Lt.current,c=s.contextTypes,g=(c=c!=null)?ro(r,f):ri),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Dm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&yu.enqueueReplaceState(s,s.state,null)}function Wd(r,s,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Nd(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=vn(g):(g=Yt(s)?Qi:Lt.current,f.context=ro(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Hd(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&yu.enqueueReplaceState(f,f.state,null),cu(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function ho(r,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function qd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Kd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var qw=typeof WeakMap=="function"?WeakMap:Map;function bm(r,s,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Su||(Su=!0,lh=c),Kd(r,s)},a}function Lm(r,s,a){a=kr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;a.payload=function(){return c(f)},a.callback=function(){Kd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Kd(r,s),typeof c!="function"&&(li===null?li=new Set([this]):li.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Om(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new qw;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(a)||(f.add(a),r=oT.bind(null,r,s,a),s.then(r,r))}function Vm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Mm(r,s,a,c,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=kr(-1,1),s.tag=2,oi(a,s,1))),a.lanes|=1),r)}var Kw=ee.ReactCurrentOwner,Xt=!1;function Ht(r,s,a,c){s.child=r===null?rm(s,null,a,c):ao(s,r.child,a,c)}function Fm(r,s,a,c,f){a=a.render;var g=s.ref;return uo(s,f),c=Fd(r,s,a,c,g,f),a=Ud(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Pr(r,s,f)):(Xe&&a&&wd(s),s.flags|=1,Ht(r,s,c,f),s.child)}function Um(r,s,a,c,f){if(r===null){var g=a.type;return typeof g=="function"&&!mh(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,zm(r,s,g,c,f)):(r=xu(a.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(v,c)&&r.ref===s.ref)return Pr(r,s,f)}return s.flags|=1,r=hi(g,c),r.ref=s.ref,r.return=s,s.child=r}function zm(r,s,a,c,f){if(r!==null){var g=r.memoizedProps;if(pa(g,c)&&r.ref===s.ref)if(Xt=!1,s.pendingProps=c=g,(r.lanes&f)!==0)r.flags&131072&&(Xt=!0);else return s.lanes=r.lanes,Pr(r,s,f)}return Gd(r,s,a,c,f)}function jm(r,s,a){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(po,cn),cn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,qe(po,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,qe(po,cn),cn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,qe(po,cn),cn|=c;return Ht(r,s,f,a),s.child}function Bm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Gd(r,s,a,c,f){var g=Yt(a)?Qi:Lt.current;return g=ro(s,g),uo(s,f),a=Fd(r,s,a,c,g,f),c=Ud(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Pr(r,s,f)):(Xe&&c&&wd(s),s.flags|=1,Ht(r,s,a,f),s.child)}function $m(r,s,a,c,f){if(Yt(a)){var g=!0;tu(s)}else g=!1;if(uo(s,f),s.stateNode===null)vu(r,s),Nm(s,a,c),Wd(s,a,c,f),c=!0;else if(r===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var x=v.context,$=a.contextType;typeof $=="object"&&$!==null?$=vn($):($=Yt(a)?Qi:Lt.current,$=ro(s,$));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||x!==$)&&Dm(s,v,c,$),si=!1;var Y=s.memoizedState;v.state=Y,cu(s,c,v,f),x=s.memoizedState,A!==c||Y!==x||Qt.current||si?(typeof X=="function"&&(Hd(s,a,X,c),x=s.memoizedState),(A=si||xm(s,a,A,c,Y,x,$))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=x),v.props=c,v.state=x,v.context=$,c=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,sm(r,s),A=s.memoizedProps,$=s.type===s.elementType?A:Mn(s.type,A),v.props=$,J=s.pendingProps,Y=v.context,x=a.contextType,typeof x=="object"&&x!==null?x=vn(x):(x=Yt(a)?Qi:Lt.current,x=ro(s,x));var ie=a.getDerivedStateFromProps;(X=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==J||Y!==x)&&Dm(s,v,c,x),si=!1,Y=s.memoizedState,v.state=Y,cu(s,c,v,f);var le=s.memoizedState;A!==J||Y!==le||Qt.current||si?(typeof ie=="function"&&(Hd(s,a,ie,c),le=s.memoizedState),($=si||xm(s,a,$,c,Y,le,x)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,x),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,x)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=le),v.props=c,v.state=le,v.context=x,c=$):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),c=!1)}return Qd(r,s,a,c,g,f)}function Qd(r,s,a,c,f,g){Bm(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return f&&Gp(s,a,!1),Pr(r,s,g);c=s.stateNode,Kw.current=s;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=ao(s,r.child,null,g),s.child=ao(s,null,A,g)):Ht(r,s,A,g),s.memoizedState=c.state,f&&Gp(s,a,!0),s.child}function Hm(r){var s=r.stateNode;s.pendingContext?qp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&qp(r,s.context,!1),Dd(r,s.containerInfo)}function Wm(r,s,a,c,f){return oo(),Rd(f),s.flags|=256,Ht(r,s,a,c),s.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function Xd(r){return{baseLanes:r,cachePool:null,transitions:null}}function qm(r,s,a){var c=s.pendingProps,f=Ze.current,g=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),qe(Ze,f&1),r===null)return Sd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=Nu(v,c,0,null),r=ss(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Xd(a),s.memoizedState=Yd,r):Jd(s,v));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return Gw(r,s,v,c,A,f,a);if(g){g=c.fallback,v=s.mode,f=r.child,A=f.sibling;var x={mode:"hidden",children:c.children};return!(v&1)&&s.child!==f?(c=s.child,c.childLanes=0,c.pendingProps=x,s.deletions=null):(c=hi(f,x),c.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=hi(A,g):(g=ss(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?Xd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Yd,c}return g=r.child,r=g.sibling,c=hi(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Jd(r,s){return s=Nu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function _u(r,s,a,c){return c!==null&&Rd(c),ao(s,r.child,null,a),r=Jd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Gw(r,s,a,c,f,g,v){if(a)return s.flags&256?(s.flags&=-257,c=qd(Error(t(422))),_u(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,f=s.mode,c=Nu({mode:"visible",children:c.children},f,0,null),g=ss(g,f,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&ao(s,r.child,null,v),s.child.memoizedState=Xd(v),s.memoizedState=Yd,g);if(!(s.mode&1))return _u(r,s,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=qd(g,c,void 0),_u(r,s,v,c)}if(A=(v&r.childLanes)!==0,Xt||A){if(c=St,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|v)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Cr(r,f),zn(c,r,f,-1))}return ph(),c=qd(Error(t(421))),_u(r,s,v,c)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=aT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,un=ti(f.nextSibling),ln=s,Xe=!0,Vn=null,r!==null&&(yn[_n++]=Rr,yn[_n++]=Ar,yn[_n++]=Yi,Rr=r.id,Ar=r.overflow,Yi=s),s=Jd(s,c.children),s.flags|=4096,s)}function Km(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Pd(r.return,s,a)}function Zd(r,s,a,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function Gm(r,s,a){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(Ht(r,s,c.children,a),c=Ze.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Km(r,a,s);else if(r.tag===19)Km(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(qe(Ze,c),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&du(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Zd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&du(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Zd(s,!0,a,null,g);break;case"together":Zd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Pr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ts|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=hi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=hi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Qw(r,s,a){switch(s.tag){case 3:Hm(s),oo();break;case 5:lm(s);break;case 1:Yt(s.type)&&tu(s);break;case 4:Dd(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,f=s.memoizedProps.value;qe(au,c._currentValue),c._currentValue=f;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ze,Ze.current&1),s.flags|=128,null):a&s.child.childLanes?qm(r,s,a):(qe(Ze,Ze.current&1),r=Pr(r,s,a),r!==null?r.sibling:null);qe(Ze,Ze.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return Gm(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),qe(Ze,Ze.current),c)break;return null;case 22:case 23:return s.lanes=0,jm(r,s,a)}return Pr(r,s,a)}var Qm,eh,Ym,Xm;Qm=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},eh=function(){},Ym=function(r,s,a,c){var f=r.memoizedProps;if(f!==c){r=s.stateNode,Zi(Zn.current);var g=null;switch(a){case"input":f=Di(r,f),c=Di(r,c),g=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":f=$o(r,f),c=$o(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Jl)}Qo(a,c);var v;a=null;for($ in f)if(!c.hasOwnProperty($)&&f.hasOwnProperty($)&&f[$]!=null)if($==="style"){var A=f[$];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in c){var x=c[$];if(A=f!=null?f[$]:void 0,c.hasOwnProperty($)&&x!==A&&(x!=null||A!=null))if($==="style")if(A){for(v in A)!A.hasOwnProperty(v)||x&&x.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in x)x.hasOwnProperty(v)&&A[v]!==x[v]&&(a||(a={}),a[v]=x[v])}else a||(g||(g=[]),g.push($,a)),a=x;else $==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,A=A?A.__html:void 0,x!=null&&A!==x&&(g=g||[]).push($,x)):$==="children"?typeof x!="string"&&typeof x!="number"||(g=g||[]).push($,""+x):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(x!=null&&$==="onScroll"&&Ke("scroll",r),g||A===x||(g=[])):(g=g||[]).push($,x))}a&&(g=g||[]).push("style",a);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},Xm=function(r,s,a,c){a!==c&&(s.flags|=4)};function Pa(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function Yw(r,s,a){var c=s.pendingProps;switch(Td(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Yt(s.type)&&eu(),Vt(s),null;case 3:return c=s.stateNode,co(),Ge(Qt),Ge(Lt),Od(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(su(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Vn!==null&&(dh(Vn),Vn=null))),eh(r,s),Vt(s),null;case 5:bd(s);var f=Zi(Sa.current);if(a=s.type,r!==null&&s.stateNode!=null)Ym(r,s,a,c,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=Zi(Zn.current),su(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Jn]=s,c[va]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(f=0;f<ga.length;f++)Ke(ga[f],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":Rs(c,g),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",c);break;case"textarea":Cs(c,g),Ke("invalid",c)}Qo(a,g),f=null;for(var v in g)if(g.hasOwnProperty(v)){var A=g[v];v==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&Xl(c.textContent,A,r),f=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Xl(c.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":fr(c),Il(c,g,!0);break;case"textarea":fr(c),Ho(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Jl)}c=f,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ft(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[Jn]=s,r[va]=c,Qm(r,s,!1,!1),s.stateNode=r;e:{switch(v=Yo(a,c),a){case"dialog":Ke("cancel",r),Ke("close",r),f=c;break;case"iframe":case"object":case"embed":Ke("load",r),f=c;break;case"video":case"audio":for(f=0;f<ga.length;f++)Ke(ga[f],r);f=c;break;case"source":Ke("error",r),f=c;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),f=c;break;case"details":Ke("toggle",r),f=c;break;case"input":Rs(r,c),f=Di(r,c),Ke("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),Ke("invalid",r);break;case"textarea":Cs(r,c),f=$o(r,c),Ke("invalid",r);break;default:f=c}Qo(a,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var x=A[g];g==="style"?Ko(r,x):g==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Wo(r,x)):g==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&Hr(r,x):typeof x=="number"&&Hr(r,""+x):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?x!=null&&g==="onScroll"&&Ke("scroll",r):x!=null&&K(r,g,x,v))}switch(a){case"input":fr(r),Il(r,c,!1);break;case"textarea":fr(r),Ho(r);break;case"option":c.value!=null&&r.setAttribute("value",""+ze(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?mr(r,!!c.multiple,g,!1):c.defaultValue!=null&&mr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)Xm(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Zi(Sa.current),Zi(Zn.current),su(s)){if(c=s.stateNode,a=s.memoizedProps,c[Jn]=s,(g=c.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:Xl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Xl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Jn]=s,s.stateNode=c}return Vt(s),null;case 13:if(Ge(Ze),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&un!==null&&s.mode&1&&!(s.flags&128))em(),oo(),s.flags|=98560,g=!1;else if(g=su(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Jn]=s}else oo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Vt(s),g=!1}else Vn!==null&&(dh(Vn),Vn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||Ze.current&1?yt===0&&(yt=3):ph())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return co(),eh(r,s),r===null&&ya(s.stateNode.containerInfo),Vt(s),null;case 10:return kd(s.type._context),Vt(s),null;case 17:return Yt(s.type)&&eu(),Vt(s),null;case 19:if(Ge(Ze),g=s.memoizedState,g===null)return Vt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)Pa(g,!1);else{if(yt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=du(r),v!==null){for(s.flags|=128,Pa(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return qe(Ze,Ze.current&1|2),s.child}r=r.sibling}g.tail!==null&&We()>mo&&(s.flags|=128,c=!0,Pa(g,!1),s.lanes=4194304)}else{if(!c)if(r=du(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Pa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Xe)return Vt(s),null}else 2*We()-g.renderingStartTime>mo&&a!==1073741824&&(s.flags|=128,c=!0,Pa(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=We(),s.sibling=null,a=Ze.current,qe(Ze,c?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return fh(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?cn&1073741824&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Xw(r,s){switch(Td(s),s.tag){case 1:return Yt(s.type)&&eu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return co(),Ge(Qt),Ge(Lt),Od(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return bd(s),null;case 13:if(Ge(Ze),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));oo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Ze),null;case 4:return co(),null;case 10:return kd(s.type._context),null;case 22:case 23:return fh(),null;case 24:return null;default:return null}}var Eu=!1,Mt=!1,Jw=typeof WeakSet=="function"?WeakSet:Set,ae=null;function fo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(r,s,c)}else a.current=null}function th(r,s,a){try{a()}catch(c){rt(r,s,c)}}var Jm=!1;function Zw(r,s){if(fd=Jr,r=xp(),sd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,A=-1,x=-1,$=0,X=0,J=r,Y=null;t:for(;;){for(var ie;J!==a||f!==0&&J.nodeType!==3||(A=v+f),J!==g||c!==0&&J.nodeType!==3||(x=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(ie=J.firstChild)!==null;)Y=J,J=ie;for(;;){if(J===r)break t;if(Y===a&&++$===f&&(A=v),Y===g&&++X===c&&(x=v),(ie=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=ie}a=A===-1||x===-1?null:{start:A,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(pd={focusedElem:r,selectionRange:a},Jr=!1,ae=s;ae!==null;)if(s=ae,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ae=r;else for(;ae!==null;){s=ae;try{var le=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,ot=le.memoizedState,U=s.stateNode,b=U.getSnapshotBeforeUpdate(s.elementType===s.type?ue:Mn(s.type,ue),ot);U.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){rt(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,ae=r;break}ae=s.return}return le=Jm,Jm=!1,le}function xa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&th(s,a,g)}f=f.next}while(f!==c)}}function wu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function nh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Zm(r){var s=r.alternate;s!==null&&(r.alternate=null,Zm(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Jn],delete s[va],delete s[_d],delete s[Ow],delete s[Vw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function eg(r){return r.tag===5||r.tag===3||r.tag===4}function tg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||eg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function rh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Jl));else if(c!==4&&(r=r.child,r!==null))for(rh(r,s,a),r=r.sibling;r!==null;)rh(r,s,a),r=r.sibling}function ih(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(ih(r,s,a),r=r.sibling;r!==null;)ih(r,s,a),r=r.sibling}var Pt=null,Fn=!1;function ai(r,s,a){for(a=a.child;a!==null;)ng(r,s,a),a=a.sibling}function ng(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(ji,a)}catch{}switch(a.tag){case 5:Mt||fo(a,s);case 6:var c=Pt,f=Fn;Pt=null,ai(r,s,a),Pt=c,Fn=f,Pt!==null&&(Fn?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Fn?(r=Pt,a=a.stateNode,r.nodeType===8?yd(r.parentNode,a):r.nodeType===1&&yd(r,a),bn(r)):yd(Pt,a.stateNode));break;case 4:c=Pt,f=Fn,Pt=a.stateNode.containerInfo,Fn=!0,ai(r,s,a),Pt=c,Fn=f;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&th(a,s,v),f=f.next}while(f!==c)}ai(r,s,a);break;case 1:if(!Mt&&(fo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){rt(a,s,A)}ai(r,s,a);break;case 21:ai(r,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ai(r,s,a),Mt=c):ai(r,s,a);break;default:ai(r,s,a)}}function rg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new Jw),s.forEach(function(c){var f=lT.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Un(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=r,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Pt=A.stateNode,Fn=!1;break e;case 3:Pt=A.stateNode.containerInfo,Fn=!0;break e;case 4:Pt=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(Pt===null)throw Error(t(160));ng(g,v,f),Pt=null,Fn=!1;var x=f.alternate;x!==null&&(x.return=null),f.return=null}catch($){rt(f,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ig(s,r),s=s.sibling}function ig(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Un(s,r),tr(r),c&4){try{xa(3,r,r.return),wu(3,r)}catch(ue){rt(r,r.return,ue)}try{xa(5,r,r.return)}catch(ue){rt(r,r.return,ue)}}break;case 1:Un(s,r),tr(r),c&512&&a!==null&&fo(a,a.return);break;case 5:if(Un(s,r),tr(r),c&512&&a!==null&&fo(a,a.return),r.flags&32){var f=r.stateNode;try{Hr(f,"")}catch(ue){rt(r,r.return,ue)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,A=r.type,x=r.updateQueue;if(r.updateQueue=null,x!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&jo(f,g),Yo(A,v);var $=Yo(A,g);for(v=0;v<x.length;v+=2){var X=x[v],J=x[v+1];X==="style"?Ko(f,J):X==="dangerouslySetInnerHTML"?Wo(f,J):X==="children"?Hr(f,J):K(f,X,J,$)}switch(A){case"input":Bo(f,g);break;case"textarea":ks(f,g);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ie=g.value;ie!=null?mr(f,!!g.multiple,ie,!1):Y!==!!g.multiple&&(g.defaultValue!=null?mr(f,!!g.multiple,g.defaultValue,!0):mr(f,!!g.multiple,g.multiple?[]:"",!1))}f[va]=g}catch(ue){rt(r,r.return,ue)}}break;case 6:if(Un(s,r),tr(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ue){rt(r,r.return,ue)}}break;case 3:if(Un(s,r),tr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{bn(s.containerInfo)}catch(ue){rt(r,r.return,ue)}break;case 4:Un(s,r),tr(r);break;case 13:Un(s,r),tr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(ah=We())),c&4&&rg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Mt=($=Mt)||X,Un(s,r),Mt=$):Un(s,r),tr(r),c&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!X&&r.mode&1)for(ae=r,X=r.child;X!==null;){for(J=ae=X;ae!==null;){switch(Y=ae,ie=Y.child,Y.tag){case 0:case 11:case 14:case 15:xa(4,Y,Y.return);break;case 1:fo(Y,Y.return);var le=Y.stateNode;if(typeof le.componentWillUnmount=="function"){c=Y,a=Y.return;try{s=c,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ue){rt(c,a,ue)}}break;case 5:fo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){ag(J);continue}}ie!==null?(ie.return=Y,ae=ie):ag(J)}X=X.sibling}e:for(X=null,J=r;;){if(J.tag===5){if(X===null){X=J;try{f=J.stateNode,$?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=J.stateNode,x=J.memoizedProps.style,v=x!=null&&x.hasOwnProperty("display")?x.display:null,A.style.display=qo("display",v))}catch(ue){rt(r,r.return,ue)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=$?"":J.memoizedProps}catch(ue){rt(r,r.return,ue)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Un(s,r),tr(r),c&4&&rg(r);break;case 21:break;default:Un(s,r),tr(r)}}function tr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(eg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Hr(f,""),c.flags&=-33);var g=tg(r);ih(r,g,f);break;case 3:case 4:var v=c.stateNode.containerInfo,A=tg(r);rh(r,A,v);break;default:throw Error(t(161))}}catch(x){rt(r,r.return,x)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function eT(r,s,a){ae=r,sg(r)}function sg(r,s,a){for(var c=(r.mode&1)!==0;ae!==null;){var f=ae,g=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||Eu;if(!v){var A=f.alternate,x=A!==null&&A.memoizedState!==null||Mt;A=Eu;var $=Mt;if(Eu=v,(Mt=x)&&!$)for(ae=f;ae!==null;)v=ae,x=v.child,v.tag===22&&v.memoizedState!==null?lg(f):x!==null?(x.return=v,ae=x):lg(f);for(;g!==null;)ae=g,sg(g),g=g.sibling;ae=f,Eu=A,Mt=$}og(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,ae=g):og(r)}}function og(r){for(;ae!==null;){var s=ae;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Mt||wu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&am(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}am(s,v,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var x=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var X=$.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&bn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&nh(s)}catch(Y){rt(s,s.return,Y)}}if(s===r){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function ag(r){for(;ae!==null;){var s=ae;if(s===r){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function lg(r){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{wu(4,s)}catch(x){rt(s,a,x)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var f=s.return;try{c.componentDidMount()}catch(x){rt(s,f,x)}}var g=s.return;try{nh(s)}catch(x){rt(s,g,x)}break;case 5:var v=s.return;try{nh(s)}catch(x){rt(s,v,x)}}}catch(x){rt(s,s.return,x)}if(s===r){ae=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ae=A;break}ae=s.return}}var tT=Math.ceil,Tu=ee.ReactCurrentDispatcher,sh=ee.ReactCurrentOwner,wn=ee.ReactCurrentBatchConfig,Ve=0,St=null,ut=null,xt=0,cn=0,po=ni(0),yt=0,Na=null,ts=0,Iu=0,oh=0,Da=null,Jt=null,ah=0,mo=1/0,xr=null,Su=!1,lh=null,li=null,Ru=!1,ui=null,Au=0,ba=0,uh=null,Cu=-1,ku=0;function Wt(){return Ve&6?We():Cu!==-1?Cu:Cu=We()}function ci(r){return r.mode&1?Ve&2&&xt!==0?xt&-xt:Fw.transition!==null?(ku===0&&(ku=$i()),ku):(r=xe,r!==0||(r=window.event,r=r===void 0?16:aa(r.type)),r):1}function zn(r,s,a,c){if(50<ba)throw ba=0,uh=null,Error(t(185));Gr(r,a,c),(!(Ve&2)||r!==St)&&(r===St&&(!(Ve&2)&&(Iu|=a),yt===4&&di(r,xt)),Zt(r,c),a===1&&Ve===0&&!(s.mode&1)&&(mo=We()+500,nu&&ii()))}function Zt(r,s){var a=r.callbackNode;_r(r,s);var c=Bi(r,r===St?xt:0);if(c===0)a!==null&&na(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&na(a),s===1)r.tag===0?Mw(cg.bind(null,r)):Qp(cg.bind(null,r)),bw(function(){!(Ve&6)&&ii()}),a=null;else{switch(Yr(c)){case 1:a=zi;break;case 4:a=Wr;break;case 16:a=pn;break;case 536870912:a=kl;break;default:a=pn}a=_g(a,ug.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function ug(r,s){if(Cu=-1,ku=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(go()&&r.callbackNode!==a)return null;var c=Bi(r,r===St?xt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=Pu(r,c);else{s=c;var f=Ve;Ve|=2;var g=hg();(St!==r||xt!==s)&&(xr=null,mo=We()+500,rs(r,s));do try{iT();break}catch(A){dg(r,A)}while(!0);Cd(),Tu.current=g,Ve=f,ut!==null?s=0:(St=null,xt=0,s=yt)}if(s!==0){if(s===2&&(f=sn(r),f!==0&&(c=f,s=ch(r,f))),s===1)throw a=Na,rs(r,0),di(r,c),Zt(r,We()),a;if(s===6)di(r,c);else{if(f=r.current.alternate,!(c&30)&&!nT(f)&&(s=Pu(r,c),s===2&&(g=sn(r),g!==0&&(c=g,s=ch(r,g))),s===1))throw a=Na,rs(r,0),di(r,c),Zt(r,We()),a;switch(r.finishedWork=f,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:is(r,Jt,xr);break;case 3:if(di(r,c),(c&130023424)===c&&(s=ah+500-We(),10<s)){if(Bi(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){Wt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=gd(is.bind(null,r,Jt,xr),s);break}is(r,Jt,xr);break;case 4:if(di(r,c),(c&4194240)===c)break;for(s=r.eventTimes,f=-1;0<c;){var v=31-Bt(c);g=1<<v,v=s[v],v>f&&(f=v),c&=~g}if(c=f,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*tT(c/1960))-c,10<c){r.timeoutHandle=gd(is.bind(null,r,Jt,xr),c);break}is(r,Jt,xr);break;case 5:is(r,Jt,xr);break;default:throw Error(t(329))}}}return Zt(r,We()),r.callbackNode===a?ug.bind(null,r):null}function ch(r,s){var a=Da;return r.current.memoizedState.isDehydrated&&(rs(r,s).flags|=256),r=Pu(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&dh(s)),r}function dh(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function nT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!On(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function di(r,s){for(s&=~oh,s&=~Iu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Bt(s),c=1<<a;r[a]=-1,s&=~c}}function cg(r){if(Ve&6)throw Error(t(327));go();var s=Bi(r,0);if(!(s&1))return Zt(r,We()),null;var a=Pu(r,s);if(r.tag!==0&&a===2){var c=sn(r);c!==0&&(s=c,a=ch(r,c))}if(a===1)throw a=Na,rs(r,0),di(r,s),Zt(r,We()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,is(r,Jt,xr),Zt(r,We()),null}function hh(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(mo=We()+500,nu&&ii())}}function ns(r){ui!==null&&ui.tag===0&&!(Ve&6)&&go();var s=Ve;Ve|=1;var a=wn.transition,c=xe;try{if(wn.transition=null,xe=1,r)return r()}finally{xe=c,wn.transition=a,Ve=s,!(Ve&6)&&ii()}}function fh(){cn=po.current,Ge(po)}function rs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Dw(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Td(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:co(),Ge(Qt),Ge(Lt),Od();break;case 5:bd(c);break;case 4:co();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:kd(c.type._context);break;case 22:case 23:fh()}a=a.return}if(St=r,ut=r=hi(r.current,null),xt=cn=s,yt=0,Na=null,oh=Iu=ts=0,Jt=Da=null,Ji!==null){for(s=0;s<Ji.length;s++)if(a=Ji[s],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=f,c.next=v}a.pending=c}Ji=null}return r}function dg(r,s){do{var a=ut;try{if(Cd(),hu.current=gu,fu){for(var c=et.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}fu=!1}if(es=0,It=gt=et=null,Ra=!1,Aa=0,sh.current=null,a===null||a.return===null){yt=1,Na=s,ut=null;break}e:{var g=r,v=a.return,A=a,x=s;if(s=xt,A.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var $=x,X=A,J=X.tag;if(!(X.mode&1)&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var ie=Vm(v);if(ie!==null){ie.flags&=-257,Mm(ie,v,A,g,s),ie.mode&1&&Om(g,$,s),s=ie,x=$;var le=s.updateQueue;if(le===null){var ue=new Set;ue.add(x),s.updateQueue=ue}else le.add(x);break e}else{if(!(s&1)){Om(g,$,s),ph();break e}x=Error(t(426))}}else if(Xe&&A.mode&1){var ot=Vm(v);if(ot!==null){!(ot.flags&65536)&&(ot.flags|=256),Mm(ot,v,A,g,s),Rd(ho(x,A));break e}}g=x=ho(x,A),yt!==4&&(yt=2),Da===null?Da=[g]:Da.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=bm(g,x,s);om(g,U);break e;case 1:A=x;var b=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(li===null||!li.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=Lm(g,A,s);om(g,te);break e}}g=g.return}while(g!==null)}pg(a)}catch(ce){s=ce,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function hg(){var r=Tu.current;return Tu.current=gu,r===null?gu:r}function ph(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||!(ts&268435455)&&!(Iu&268435455)||di(St,xt)}function Pu(r,s){var a=Ve;Ve|=2;var c=hg();(St!==r||xt!==s)&&(xr=null,rs(r,s));do try{rT();break}catch(f){dg(r,f)}while(!0);if(Cd(),Ve=a,Tu.current=c,ut!==null)throw Error(t(261));return St=null,xt=0,yt}function rT(){for(;ut!==null;)fg(ut)}function iT(){for(;ut!==null&&!Al();)fg(ut)}function fg(r){var s=yg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?pg(r):ut=s,sh.current=null}function pg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=Xw(a,s),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,ut=null;return}}else if(a=Yw(a,s,cn),a!==null){ut=a;return}if(s=s.sibling,s!==null){ut=s;return}ut=s=r}while(s!==null);yt===0&&(yt=5)}function is(r,s,a){var c=xe,f=wn.transition;try{wn.transition=null,xe=1,sT(r,s,a,c)}finally{wn.transition=f,xe=c}return null}function sT(r,s,a,c){do go();while(ui!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if($e(r,g),r===St&&(ut=St=null,xt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Ru||(Ru=!0,_g(pn,function(){return go(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=wn.transition,wn.transition=null;var v=xe;xe=1;var A=Ve;Ve|=4,sh.current=null,Zw(r,a),ig(a,r),Rw(pd),Jr=!!fd,pd=fd=null,r.current=a,eT(a),Xc(),Ve=A,xe=v,wn.transition=g}else r.current=a;if(Ru&&(Ru=!1,ui=r,Au=f),g=r.pendingLanes,g===0&&(li=null),Pl(a.stateNode),Zt(r,We()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Su)throw Su=!1,r=lh,lh=null,r;return Au&1&&r.tag!==0&&go(),g=r.pendingLanes,g&1?r===uh?ba++:(ba=0,uh=r):ba=0,ii(),null}function go(){if(ui!==null){var r=Yr(Au),s=wn.transition,a=xe;try{if(wn.transition=null,xe=16>r?16:r,ui===null)var c=!1;else{if(r=ui,ui=null,Au=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,ae=r.current;ae!==null;){var g=ae,v=g.child;if(ae.flags&16){var A=g.deletions;if(A!==null){for(var x=0;x<A.length;x++){var $=A[x];for(ae=$;ae!==null;){var X=ae;switch(X.tag){case 0:case 11:case 15:xa(8,X,g)}var J=X.child;if(J!==null)J.return=X,ae=J;else for(;ae!==null;){X=ae;var Y=X.sibling,ie=X.return;if(Zm(X),X===$){ae=null;break}if(Y!==null){Y.return=ie,ae=Y;break}ae=ie}}}var le=g.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var ot=ue.sibling;ue.sibling=null,ue=ot}while(ue!==null)}}ae=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,ae=v;else e:for(;ae!==null;){if(g=ae,g.flags&2048)switch(g.tag){case 0:case 11:case 15:xa(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ae=U;break e}ae=g.return}}var b=r.current;for(ae=b;ae!==null;){v=ae;var j=v.child;if(v.subtreeFlags&2064&&j!==null)j.return=v,ae=j;else e:for(v=b;ae!==null;){if(A=ae,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:wu(9,A)}}catch(ce){rt(A,A.return,ce)}if(A===v){ae=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,ae=te;break e}ae=A.return}}if(Ve=f,ii(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(ji,r)}catch{}c=!0}return c}finally{xe=a,wn.transition=s}}return!1}function mg(r,s,a){s=ho(a,s),s=bm(r,s,1),r=oi(r,s,1),s=Wt(),r!==null&&(Gr(r,1,s),Zt(r,s))}function rt(r,s,a){if(r.tag===3)mg(r,r,a);else for(;s!==null;){if(s.tag===3){mg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(li===null||!li.has(c))){r=ho(a,r),r=Lm(s,r,1),s=oi(s,r,1),r=Wt(),s!==null&&(Gr(s,1,r),Zt(s,r));break}}s=s.return}}function oT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,St===r&&(xt&a)===a&&(yt===4||yt===3&&(xt&130023424)===xt&&500>We()-ah?rs(r,0):oh|=a),Zt(r,s)}function gg(r,s){s===0&&(r.mode&1?(s=Fs,Fs<<=1,!(Fs&130023424)&&(Fs=4194304)):s=1);var a=Wt();r=Cr(r,s),r!==null&&(Gr(r,s,a),Zt(r,a))}function aT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),gg(r,a)}function lT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),gg(r,a)}var yg;yg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Xt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Xt=!1,Qw(r,s,a);Xt=!!(r.flags&131072)}else Xt=!1,Xe&&s.flags&1048576&&Yp(s,iu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;vu(r,s),r=s.pendingProps;var f=ro(s,Lt.current);uo(s,a),f=Fd(null,s,c,r,f,a);var g=Ud();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(c)?(g=!0,tu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Nd(s),f.updater=yu,s.stateNode=f,f._reactInternals=s,Wd(s,c,r,a),s=Qd(null,s,c,!0,g,a)):(s.tag=0,Xe&&g&&wd(s),Ht(null,s,f,a),s=s.child),s;case 16:c=s.elementType;e:{switch(vu(r,s),r=s.pendingProps,f=c._init,c=f(c._payload),s.type=c,f=s.tag=cT(c),r=Mn(c,r),f){case 0:s=Gd(null,s,c,r,a);break e;case 1:s=$m(null,s,c,r,a);break e;case 11:s=Fm(null,s,c,r,a);break e;case 14:s=Um(null,s,c,Mn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),Gd(r,s,c,f,a);case 1:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),$m(r,s,c,f,a);case 3:e:{if(Hm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,f=g.element,sm(r,s),cu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=ho(Error(t(423)),s),s=Wm(r,s,c,a,f);break e}else if(c!==f){f=ho(Error(t(424)),s),s=Wm(r,s,c,a,f);break e}else for(un=ti(s.stateNode.containerInfo.firstChild),ln=s,Xe=!0,Vn=null,a=rm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),c===f){s=Pr(r,s,a);break e}Ht(r,s,c,a)}s=s.child}return s;case 5:return lm(s),r===null&&Sd(s),c=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,v=f.children,md(c,f)?v=null:g!==null&&md(c,g)&&(s.flags|=32),Bm(r,s),Ht(r,s,v,a),s.child;case 6:return r===null&&Sd(s),null;case 13:return qm(r,s,a);case 4:return Dd(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ao(s,null,c,a):Ht(r,s,c,a),s.child;case 11:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),Fm(r,s,c,f,a);case 7:return Ht(r,s,s.pendingProps,a),s.child;case 8:return Ht(r,s,s.pendingProps.children,a),s.child;case 12:return Ht(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,f=s.pendingProps,g=s.memoizedProps,v=f.value,qe(au,c._currentValue),c._currentValue=v,g!==null)if(On(g.value,v)){if(g.children===f.children&&!Qt.current){s=Pr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){v=g.child;for(var x=A.firstContext;x!==null;){if(x.context===c){if(g.tag===1){x=kr(-1,a&-a),x.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var X=$.pending;X===null?x.next=x:(x.next=X.next,X.next=x),$.pending=x}}g.lanes|=a,x=g.alternate,x!==null&&(x.lanes|=a),Pd(g.return,a,s),A.lanes|=a;break}x=x.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),Pd(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Ht(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,c=s.pendingProps.children,uo(s,a),f=vn(f),c=c(f),s.flags|=1,Ht(r,s,c,a),s.child;case 14:return c=s.type,f=Mn(c,s.pendingProps),f=Mn(c.type,f),Um(r,s,c,f,a);case 15:return zm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),vu(r,s),s.tag=1,Yt(c)?(r=!0,tu(s)):r=!1,uo(s,a),Nm(s,c,f),Wd(s,c,f,a),Qd(null,s,c,!0,r,a);case 19:return Gm(r,s,a);case 22:return jm(r,s,a)}throw Error(t(156,s.tag))};function _g(r,s){return Vs(r,s)}function uT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new uT(r,s,a,c)}function mh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function cT(r){if(typeof r=="function")return mh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===O)return 11;if(r===dt)return 14}return 2}function hi(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function xu(r,s,a,c,f,g){var v=2;if(c=r,typeof r=="function")mh(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case k:return ss(a.children,f,g,s);case I:v=8,f|=8;break;case R:return r=Tn(12,a,s,f|2),r.elementType=R,r.lanes=g,r;case C:return r=Tn(13,a,s,f),r.elementType=C,r.lanes=g,r;case Je:return r=Tn(19,a,s,f),r.elementType=Je,r.lanes=g,r;case Me:return Nu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:v=10;break e;case D:v=9;break e;case O:v=11;break e;case dt:v=14;break e;case ht:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Tn(v,a,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function ss(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function Nu(r,s,a,c){return r=Tn(22,r,c,s),r.elementType=Me,r.lanes=a,r.stateNode={isHidden:!1},r}function gh(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function yh(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function dT(r,s,a,c,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _h(r,s,a,c,f,g,v,A,x){return r=new dT(r,s,a,A,x),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Tn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(g),r}function hT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function vg(r){if(!r)return ri;r=r._reactInternals;e:{if(kn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Yt(a))return Kp(r,a,s)}return s}function Eg(r,s,a,c,f,g,v,A,x){return r=_h(a,c,!0,r,f,g,v,A,x),r.context=vg(null),a=r.current,c=Wt(),f=ci(a),g=kr(c,f),g.callback=s??null,oi(a,g,f),r.current.lanes=f,Gr(r,f,c),Zt(r,c),r}function Du(r,s,a,c){var f=s.current,g=Wt(),v=ci(f);return a=vg(a),s.context===null?s.context=a:s.pendingContext=a,s=kr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=oi(f,s,v),r!==null&&(zn(r,f,v,g),uu(r,f,v)),v}function bu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function wg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function vh(r,s){wg(r,s),(r=r.alternate)&&wg(r,s)}var Tg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Eh(r){this._internalRoot=r}Lu.prototype.render=Eh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Du(r,s,null,null)},Lu.prototype.unmount=Eh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ns(function(){Du(null,r,null,null)}),s[Ir]=null}};function Lu(r){this._internalRoot=r}Lu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ll();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Gn.length&&s!==0&&s<Gn[a].priority;a++);Gn.splice(a,0,r),a===0&&Ml(r)}};function wh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ou(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function fT(r,s,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var $=bu(v);g.call($)}}var v=Eg(s,c,r,0,null,!1,!1,"",Ig);return r._reactRootContainer=v,r[Ir]=v.current,ya(r.nodeType===8?r.parentNode:r),ns(),v}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var A=c;c=function(){var $=bu(x);A.call($)}}var x=_h(r,0,!1,null,null,!1,!1,"",Ig);return r._reactRootContainer=x,r[Ir]=x.current,ya(r.nodeType===8?r.parentNode:r),ns(function(){Du(s,x,a,c)}),x}function Vu(r,s,a,c,f){var g=a._reactRootContainer;if(g){var v=g;if(typeof f=="function"){var A=f;f=function(){var x=bu(v);A.call(x)}}Du(s,v,r,f)}else v=fT(a,s,r,f,c);return bu(v)}Dl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=qr(s.pendingLanes);a!==0&&(Qr(s,a|1),Zt(s,We()),!(Ve&6)&&(mo=We()+500,ii()))}break;case 13:ns(function(){var c=Cr(r,1);if(c!==null){var f=Wt();zn(c,r,1,f)}}),vh(r,1)}},Us=function(r){if(r.tag===13){var s=Cr(r,134217728);if(s!==null){var a=Wt();zn(s,r,134217728,a)}vh(r,134217728)}},bl=function(r){if(r.tag===13){var s=ci(r),a=Cr(r,s);if(a!==null){var c=Wt();zn(a,r,s,c)}vh(r,s)}},Ll=function(){return xe},Ol=function(r,s){var a=xe;try{return xe=r,s()}finally{xe=a}},xs=function(r,s,a){switch(s){case"input":if(Bo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var f=Zl(c);if(!f)throw Error(t(90));Ss(c),Bo(c,f)}}}break;case"textarea":ks(r,a);break;case"select":s=a.value,s!=null&&mr(r,!!a.multiple,s,!1)}},Vi=hh,Jo=ns;var pT={usingClientEntryPoint:!1,Events:[Ea,to,Zl,qn,Xo,hh]},La={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mT={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ta(r),r===null?null:r.stateNode},findFiberByHostInstance:La.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{ji=Mu.inject(mT),rn=Mu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pT,en.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(s))throw Error(t(200));return hT(r,s,null,a)},en.createRoot=function(r,s){if(!wh(r))throw Error(t(299));var a=!1,c="",f=Tg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=_h(r,1,!1,null,null,a,!1,c,f),r[Ir]=s.current,ya(r.nodeType===8?r.parentNode:r),new Eh(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ta(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return ns(r)},en.hydrate=function(r,s,a){if(!Ou(s))throw Error(t(200));return Vu(null,r,s,!0,a)},en.hydrateRoot=function(r,s,a){if(!wh(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",v=Tg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Eg(s,null,r,1,a??null,f,!1,g,v),r[Ir]=s.current,ya(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Lu(s)},en.render=function(r,s,a){if(!Ou(s))throw Error(t(200));return Vu(null,r,s,!1,a)},en.unmountComponentAtNode=function(r){if(!Ou(r))throw Error(t(40));return r._reactRootContainer?(ns(function(){Vu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ir]=null})}),!0):!1},en.unstable_batchedUpdates=hh,en.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Ou(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Vu(r,s,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Ng;function ST(){if(Ng)return Sh.exports;Ng=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Sh.exports=IT(),Sh.exports}var Dg;function RT(){if(Dg)return Fu;Dg=1;var n=ST();return Fu.createRoot=n.createRoot,Fu.hydrateRoot=n.hydrateRoot,Fu}var AT=RT(),Va={},bg;function CT(){if(bg)return Va;bg=1,Object.defineProperty(Va,"__esModule",{value:!0}),Va.parse=d,Va.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function d(S,N){const V=new l,z=S.length;if(z<2)return V;const L=(N==null?void 0:N.decode)||E;let H=0;do{const B=S.indexOf("=",H);if(B===-1)break;const K=S.indexOf(";",H),ee=K===-1?z:K;if(B>ee){H=S.lastIndexOf(";",B-1)+1;continue}const de=h(S,H,B),he=p(S,B,de),k=S.slice(de,he);if(V[k]===void 0){let I=h(S,B+1,ee),R=p(S,ee,I);const P=L(S.slice(I,R));V[k]=P}H=ee+1}while(H<z);return V}function h(S,N,V){do{const z=S.charCodeAt(N);if(z!==32&&z!==9)return N}while(++N<V);return V}function p(S,N,V){for(;N>V;){const z=S.charCodeAt(--N);if(z!==32&&z!==9)return N+1}return V}function y(S,N,V){const z=(V==null?void 0:V.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const L=z(N);if(!e.test(L))throw new TypeError(`argument val is invalid: ${N}`);let H=S+"="+L;if(!V)return H;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);H+="; Max-Age="+V.maxAge}if(V.domain){if(!t.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);H+="; Domain="+V.domain}if(V.path){if(!i.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);H+="; Path="+V.path}if(V.expires){if(!T(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);H+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&(H+="; HttpOnly"),V.secure&&(H+="; Secure"),V.partitioned&&(H+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return H}function E(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return o.call(S)==="[object Date]"}return Va}CT();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lg="popstate";function kT(n={}){function e(i,o){let{pathname:l,search:d,hash:h}=i.location;return $h("",{pathname:l,search:d,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Qa(o)}return xT(e,t,null,n)}function tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function lr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function PT(){return Math.random().toString(36).substring(2,10)}function Og(n,e){return{usr:n.state,key:n.key,idx:e}}function $h(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?bo(e):e,state:t,key:e&&e.key||i||PT()}}function Qa({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function bo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function xT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,d=o.history,h="POP",p=null,y=E();y==null&&(y=0,d.replaceState({...d.state,idx:y},""));function E(){return(d.state||{idx:null}).idx}function T(){h="POP";let L=E(),H=L==null?null:L-y;y=L,p&&p({action:h,location:z.location,delta:H})}function S(L,H){h="PUSH";let B=$h(z.location,L,H);y=E()+1;let K=Og(B,y),ee=z.createHref(B);try{d.pushState(K,"",ee)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;o.location.assign(ee)}l&&p&&p({action:h,location:z.location,delta:1})}function N(L,H){h="REPLACE";let B=$h(z.location,L,H);y=E();let K=Og(B,y),ee=z.createHref(B);d.replaceState(K,"",ee),l&&p&&p({action:h,location:z.location,delta:0})}function V(L){let H=o.location.origin!=="null"?o.location.origin:o.location.href,B=typeof L=="string"?L:Qa(L);return B=B.replace(/ $/,"%20"),tt(H,`No window.location.(origin|href) available to create URL for href: ${B}`),new URL(B,H)}let z={get action(){return h},get location(){return n(o,d)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Lg,T),p=L,()=>{o.removeEventListener(Lg,T),p=null}},createHref(L){return e(o,L)},createURL:V,encodeLocation(L){let H=V(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:S,replace:N,go(L){return d.go(L)}};return z}function l_(n,e,t="/"){return NT(n,e,t,!1)}function NT(n,e,t,i){let o=typeof e=="string"?bo(e):e,l=Si(o.pathname||"/",t);if(l==null)return null;let d=u_(n);DT(d);let h=null;for(let p=0;h==null&&p<d.length;++p){let y=$T(l);h=jT(d[p],y,i)}return h}function u_(n,e=[],t=[],i=""){let o=(l,d,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:d,route:l};p.relativePath.startsWith("/")&&(tt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Lr([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(tt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),u_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:UT(y,l.index),routesMeta:E})};return n.forEach((l,d)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,d);else for(let p of c_(l.path))o(l,d,p)}),e}function c_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let d=c_(i.join("/")),h=[];return h.push(...d.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...d),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function DT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:zT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var bT=/^:[\w-]+$/,LT=3,OT=2,VT=1,MT=10,FT=-2,Vg=n=>n==="*";function UT(n,e){let t=n.split("/"),i=t.length;return t.some(Vg)&&(i+=FT),e&&(i+=OT),t.filter(o=>!Vg(o)).reduce((o,l)=>o+(bT.test(l)?LT:l===""?VT:MT),i)}function zT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function jT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",d=[];for(let h=0;h<i.length;++h){let p=i[h],y=h===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=ic({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),S=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=ic({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),d.push({params:o,pathname:Lr([l,T.pathname]),pathnameBase:KT(Lr([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=Lr([l,T.pathnameBase]))}return d}function ic(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=BT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:T},S)=>{if(E==="*"){let V=h[S]||"";d=l.slice(0,l.length-V.length).replace(/(.)\/+$/,"$1")}const N=h[S];return T&&!N?y[E]=void 0:y[E]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:d,pattern:n}}function BT(n,e=!1,t=!0){lr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function $T(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Si(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function HT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?bo(n):n;return{pathname:t?t.startsWith("/")?t:WT(t,e):e,search:GT(i),hash:QT(o)}}function WT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ch(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function d_(n){let e=qT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function h_(n,e,t,i=!1){let o;typeof n=="string"?o=bo(n):(o={...n},tt(!o.pathname||!o.pathname.includes("?"),Ch("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),Ch("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),Ch("#","search","hash",o)));let l=n===""||o.pathname==="",d=l?"/":o.pathname,h;if(d==null)h=t;else{let T=e.length-1;if(!i&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),T-=1;o.pathname=S.join("/")}h=T>=0?e[T]:"/"}let p=HT(o,h),y=d&&d!=="/"&&d.endsWith("/"),E=(l||d===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Lr=n=>n.join("/").replace(/\/\/+/g,"/"),KT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),GT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,QT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function YT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var f_=["POST","PUT","PATCH","DELETE"];new Set(f_);var XT=["GET",...f_];new Set(XT);var Lo=W.createContext(null);Lo.displayName="DataRouter";var Rc=W.createContext(null);Rc.displayName="DataRouterState";var p_=W.createContext({isTransitioning:!1});p_.displayName="ViewTransition";var JT=W.createContext(new Map);JT.displayName="Fetchers";var ZT=W.createContext(null);ZT.displayName="Await";var hr=W.createContext(null);hr.displayName="Navigation";var ul=W.createContext(null);ul.displayName="Location";var Br=W.createContext({outlet:null,matches:[],isDataRoute:!1});Br.displayName="Route";var wf=W.createContext(null);wf.displayName="RouteError";function e0(n,{relative:e}={}){tt(cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=W.useContext(hr),{hash:o,pathname:l,search:d}=dl(n,{relative:e}),h=l;return t!=="/"&&(h=l==="/"?t:Lr([t,l])),i.createHref({pathname:h,search:d,hash:o})}function cl(){return W.useContext(ul)!=null}function gs(){return tt(cl(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(ul).location}var m_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function g_(n){W.useContext(hr).static||W.useLayoutEffect(n)}function Ac(){let{isDataRoute:n}=W.useContext(Br);return n?f0():t0()}function t0(){tt(cl(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Lo),{basename:e,navigator:t}=W.useContext(hr),{matches:i}=W.useContext(Br),{pathname:o}=gs(),l=JSON.stringify(d_(i)),d=W.useRef(!1);return g_(()=>{d.current=!0}),W.useCallback((p,y={})=>{if(lr(d.current,m_),!d.current)return;if(typeof p=="number"){t.go(p);return}let E=h_(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Lr([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}W.createContext(null);function dl(n,{relative:e}={}){let{matches:t}=W.useContext(Br),{pathname:i}=gs(),o=JSON.stringify(d_(t));return W.useMemo(()=>h_(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function n0(n,e){return y_(n,e)}function y_(n,e,t,i){var H;tt(cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=W.useContext(hr),{matches:l}=W.useContext(Br),d=l[l.length-1],h=d?d.params:{},p=d?d.pathname:"/",y=d?d.pathnameBase:"/",E=d&&d.route;{let B=E&&E.path||"";__(p,!E||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let T=gs(),S;if(e){let B=typeof e=="string"?bo(e):e;tt(y==="/"||((H=B.pathname)==null?void 0:H.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${B.pathname}" was given in the \`location\` prop.`),S=B}else S=T;let N=S.pathname||"/",V=N;if(y!=="/"){let B=y.replace(/^\//,"").split("/");V="/"+N.replace(/^\//,"").split("/").slice(B.length).join("/")}let z=l_(n,{pathname:V});lr(E||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),lr(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=a0(z&&z.map(B=>Object.assign({},B,{params:Object.assign({},h,B.params),pathname:Lr([y,o.encodeLocation?o.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?y:Lr([y,o.encodeLocation?o.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),l,t,i);return e&&L?W.createElement(ul.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},L):L}function r0(){let n=h0(),e=YT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:l},"ErrorBoundary")," or"," ",W.createElement("code",{style:l},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,d)}var i0=W.createElement(r0,null),s0=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(Br.Provider,{value:this.props.routeContext},W.createElement(wf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function o0({routeContext:n,match:e,children:t}){let i=W.useContext(Lo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(Br.Provider,{value:n},t)}function a0(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);tt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let d=!1,h=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=p),y.route.id){let{loaderData:E,errors:T}=t,S=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||S){d=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,S=!1,N=null,V=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,N=y.route.errorElement||i0,d&&(h<0&&E===0?(__("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,V=null):h===E&&(S=!0,V=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,E+1)),L=()=>{let H;return T?H=N:S?H=V:y.route.Component?H=W.createElement(y.route.Component,null):y.route.element?H=y.route.element:H=p,W.createElement(o0,{match:y,routeContext:{outlet:p,matches:z,isDataRoute:t!=null},children:H})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?W.createElement(s0,{location:t.location,revalidation:t.revalidation,component:N,error:T,children:L(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):L()},null)}function Tf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l0(n){let e=W.useContext(Lo);return tt(e,Tf(n)),e}function u0(n){let e=W.useContext(Rc);return tt(e,Tf(n)),e}function c0(n){let e=W.useContext(Br);return tt(e,Tf(n)),e}function If(n){let e=c0(n),t=e.matches[e.matches.length-1];return tt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function d0(){return If("useRouteId")}function h0(){var i;let n=W.useContext(wf),e=u0("useRouteError"),t=If("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function f0(){let{router:n}=l0("useNavigate"),e=If("useNavigate"),t=W.useRef(!1);return g_(()=>{t.current=!0}),W.useCallback(async(o,l={})=>{lr(t.current,m_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Mg={};function __(n,e,t){!e&&!Mg[n]&&(Mg[n]=!0,lr(!1,t))}W.memo(p0);function p0({routes:n,future:e,state:t}){return y_(n,void 0,t,e)}function qu(n){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function m0({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){tt(!cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),h=W.useMemo(()=>({basename:d,navigator:o,static:l,future:{}}),[d,o,l]);typeof t=="string"&&(t=bo(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:S="default"}=t,N=W.useMemo(()=>{let V=Si(p,d);return V==null?null:{location:{pathname:V,search:y,hash:E,state:T,key:S},navigationType:i}},[d,p,y,E,T,S,i]);return lr(N!=null,`<Router basename="${d}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:W.createElement(hr.Provider,{value:h},W.createElement(ul.Provider,{children:e,value:N}))}function g0({children:n,location:e}){return n0(Hh(n),e)}function Hh(n,e=[]){let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,Hh(i.props.children,l));return}tt(i.type===qu,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let d={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=Hh(i.props.children,l)),t.push(d)}),t}var Ku="get",Gu="application/x-www-form-urlencoded";function Cc(n){return n!=null&&typeof n.tagName=="string"}function y0(n){return Cc(n)&&n.tagName.toLowerCase()==="button"}function _0(n){return Cc(n)&&n.tagName.toLowerCase()==="form"}function v0(n){return Cc(n)&&n.tagName.toLowerCase()==="input"}function E0(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function w0(n,e){return n.button===0&&(!e||e==="_self")&&!E0(n)}var Uu=null;function T0(){if(Uu===null)try{new FormData(document.createElement("form"),0),Uu=!1}catch{Uu=!0}return Uu}var I0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function kh(n){return n!=null&&!I0.has(n)?(lr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gu}"`),null):n}function S0(n,e){let t,i,o,l,d;if(_0(n)){let h=n.getAttribute("action");i=h?Si(h,e):null,t=n.getAttribute("method")||Ku,o=kh(n.getAttribute("enctype"))||Gu,l=new FormData(n)}else if(y0(n)||v0(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(i=p?Si(p,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||Ku,o=kh(n.getAttribute("formenctype"))||kh(h.getAttribute("enctype"))||Gu,l=new FormData(h,n),!T0()){let{name:y,type:E,value:T}=n;if(E==="image"){let S=y?`${y}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else y&&l.append(y,T)}}else{if(Cc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ku,i=null,o=Gu,d=n}return l&&o==="text/plain"&&(d=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:d}}function Sf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function R0(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function A0(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function C0(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let d=await R0(l,t);return d.links?d.links():[]}return[]}));return N0(i.flat(1).filter(A0).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Fg(n,e,t,i,o,l){let d=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,h=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>d(p,y)||h(p,y)):l==="data"?e.filter((p,y)=>{var T;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(d(p,y)||h(p,y))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function k0(n,e){return P0(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function P0(n){return[...new Set(n)]}function x0(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function N0(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(x0(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function D0(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function b0(){let n=W.useContext(Lo);return Sf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function L0(){let n=W.useContext(Rc);return Sf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Rf=W.createContext(void 0);Rf.displayName="FrameworkContext";function v_(){let n=W.useContext(Rf);return Sf(n,"You must render this element inside a <HydratedRouter> element"),n}function O0(n,e){let t=W.useContext(Rf),[i,o]=W.useState(!1),[l,d]=W.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,S=W.useRef(null);W.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let z=H=>{H.forEach(B=>{d(B.isIntersecting)})},L=new IntersectionObserver(z,{threshold:.5});return S.current&&L.observe(S.current),()=>{L.disconnect()}}},[n]),W.useEffect(()=>{if(i){let z=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(z)}}},[i]);let N=()=>{o(!0)},V=()=>{o(!1),d(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:Ma(h,N),onBlur:Ma(p,V),onMouseEnter:Ma(y,N),onMouseLeave:Ma(E,V),onTouchStart:Ma(T,N)}]:[!1,S,{}]}function Ma(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function V0({page:n,...e}){let{router:t}=b0(),i=W.useMemo(()=>l_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?W.createElement(F0,{page:n,matches:i,...e}):null}function M0(n){let{manifest:e,routeModules:t}=v_(),[i,o]=W.useState([]);return W.useEffect(()=>{let l=!1;return C0(n,e,t).then(d=>{l||o(d)}),()=>{l=!0}},[n,e,t]),i}function F0({page:n,matches:e,...t}){let i=gs(),{manifest:o,routeModules:l}=v_(),{loaderData:d,matches:h}=L0(),p=W.useMemo(()=>Fg(n,e,h,o,i,"data"),[n,e,h,o,i]),y=W.useMemo(()=>Fg(n,e,h,o,i,"assets"),[n,e,h,o,i]),E=W.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let N=new Set,V=!1;if(e.forEach(L=>{var B;let H=o.routes[L.route.id];!H||!H.hasLoader||(!p.some(K=>K.route.id===L.route.id)&&L.route.id in d&&((B=l[L.route.id])!=null&&B.shouldRevalidate)||H.hasClientLoader?V=!0:N.add(L.route.id))}),N.size===0)return[];let z=D0(n);return V&&N.size>0&&z.searchParams.set("_routes",e.filter(L=>N.has(L.route.id)).map(L=>L.route.id).join(",")),[z.pathname+z.search]},[d,i,o,p,e,n,l]),T=W.useMemo(()=>k0(y,o),[y,o]),S=M0(y);return W.createElement(W.Fragment,null,E.map(N=>W.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),T.map(N=>W.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),S.map(({key:N,link:V})=>W.createElement("link",{key:N,...V})))}function U0(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var E_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{E_&&(window.__reactRouterVersion="7.1.3")}catch{}function z0({basename:n,children:e,window:t}){let i=W.useRef();i.current==null&&(i.current=kT({window:t,v5Compat:!0}));let o=i.current,[l,d]=W.useState({action:o.action,location:o.location}),h=W.useCallback(p=>{W.startTransition(()=>d(p))},[d]);return W.useLayoutEffect(()=>o.listen(h),[o,h]),W.createElement(m0,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var w_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sc=W.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:d,state:h,target:p,to:y,preventScrollReset:E,viewTransition:T,...S},N){let{basename:V}=W.useContext(hr),z=typeof y=="string"&&w_.test(y),L,H=!1;if(typeof y=="string"&&z&&(L=y,E_))try{let R=new URL(window.location.href),P=y.startsWith("//")?new URL(R.protocol+y):new URL(y),D=Si(P.pathname,V);P.origin===R.origin&&D!=null?y=D+P.search+P.hash:H=!0}catch{lr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=e0(y,{relative:o}),[K,ee,de]=O0(i,S),he=H0(y,{replace:d,state:h,target:p,preventScrollReset:E,relative:o,viewTransition:T});function k(R){e&&e(R),R.defaultPrevented||he(R)}let I=W.createElement("a",{...S,...de,href:L||B,onClick:H||l?e:k,ref:U0(N,ee),target:p,"data-discover":!z&&t==="render"?"true":void 0});return K&&!z?W.createElement(W.Fragment,null,I,W.createElement(V0,{page:B})):I});sc.displayName="Link";var j0=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:d,viewTransition:h,children:p,...y},E){let T=dl(d,{relative:y.relative}),S=gs(),N=W.useContext(Rc),{navigator:V,basename:z}=W.useContext(hr),L=N!=null&&Q0(T)&&h===!0,H=V.encodeLocation?V.encodeLocation(T).pathname:T.pathname,B=S.pathname,K=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(B=B.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&z&&(K=Si(K,z)||K);const ee=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let de=B===H||!o&&B.startsWith(H)&&B.charAt(ee)==="/",he=K!=null&&(K===H||!o&&K.startsWith(H)&&K.charAt(H.length)==="/"),k={isActive:de,isPending:he,isTransitioning:L},I=de?e:void 0,R;typeof i=="function"?R=i(k):R=[i,de?"active":null,he?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(k):l;return W.createElement(sc,{...y,"aria-current":I,className:R,ref:E,style:P,to:d,viewTransition:h},typeof p=="function"?p(k):p)});j0.displayName="NavLink";var B0=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:d=Ku,action:h,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...S},N)=>{let V=K0(),z=G0(h,{relative:y}),L=d.toLowerCase()==="get"?"get":"post",H=typeof h=="string"&&w_.test(h),B=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let ee=K.nativeEvent.submitter,de=(ee==null?void 0:ee.getAttribute("formmethod"))||d;V(ee||K.currentTarget,{fetcherKey:e,method:de,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:T})};return W.createElement("form",{ref:N,method:L,action:z,onSubmit:i?p:B,...S,"data-discover":!H&&n==="render"?"true":void 0})});B0.displayName="Form";function $0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function T_(n){let e=W.useContext(Lo);return tt(e,$0(n)),e}function H0(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:d}={}){let h=Ac(),p=gs(),y=dl(n,{relative:l});return W.useCallback(E=>{if(w0(E,e)){E.preventDefault();let T=t!==void 0?t:Qa(p)===Qa(y);h(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:d})}},[p,h,y,t,i,e,n,o,l,d])}var W0=0,q0=()=>`__${String(++W0)}__`;function K0(){let{router:n}=T_("useSubmit"),{basename:e}=W.useContext(hr),t=d0();return W.useCallback(async(i,o={})=>{let{action:l,method:d,encType:h,formData:p,body:y}=S0(i,e);if(o.navigate===!1){let E=o.fetcherKey||q0();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||d,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||d,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function G0(n,{relative:e}={}){let{basename:t}=W.useContext(hr),i=W.useContext(Br);tt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...dl(n||".",{relative:e})},d=gs();if(n==null){l.search=d.search;let h=new URLSearchParams(l.search),p=h.getAll("index");if(p.some(E=>E==="")){h.delete("index"),p.filter(T=>T).forEach(T=>h.append("index",T));let E=h.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Lr([t,l.pathname])),Qa(l)}function Q0(n,e={}){let t=W.useContext(p_);tt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=T_("useViewTransitionState"),o=dl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Si(t.currentLocation.pathname,i)||t.currentLocation.pathname,d=Si(t.nextLocation.pathname,i)||t.nextLocation.pathname;return ic(o.pathname,d)!=null||ic(o.pathname,l)!=null}new TextEncoder;function Af(){return fe.jsx(fe.Fragment,{children:fe.jsx("nav",{children:fe.jsxs("ul",{className:"flex justify-center gap-10 bg-gray-800 text-white p-4",children:[fe.jsx("li",{children:fe.jsx(sc,{to:"/dentist/",children:"Reginster"})}),fe.jsx("li",{children:fe.jsx(sc,{to:"/dentist/Login",children:"Login"})})]})})})}var Ug={};/**
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
 */const I_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Y0=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],d=n[t++],h=n[t++],p=((o&7)<<18|(l&63)<<12|(d&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],d=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|d&63)}}return e.join("")},S_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],d=o+1<n.length,h=d?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|h>>4;let S=(h&15)<<2|y>>6,N=y&63;p||(N=64,d||(S=64)),i.push(t[E],t[T],t[S],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(I_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Y0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||y==null||T==null)throw new X0;const S=l<<2|h>>4;if(i.push(S),y!==64){const N=h<<4&240|y>>2;if(i.push(N),T!==64){const V=y<<6&192|T;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class X0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const J0=function(n){const e=I_(n);return S_.encodeByteArray(e,!0)},oc=function(n){return J0(n).replace(/\./g,"")},R_=function(n){try{return S_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Z0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eI=()=>Z0().__FIREBASE_DEFAULTS__,tI=()=>{if(typeof process>"u"||typeof Ug>"u")return;const n=Ug.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&R_(n[1]);return e&&JSON.parse(e)},kc=()=>{try{return eI()||tI()||nI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},A_=n=>{var e,t;return(t=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},rI=n=>{const e=A_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},C_=()=>{var n;return(n=kc())===null||n===void 0?void 0:n.config},k_=n=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class iI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function sI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[oc(JSON.stringify(t)),oc(JSON.stringify(d)),""].join(".")}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function aI(){var n;const e=(n=kc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function P_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function uI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cI(){const n=jt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dI(){return!aI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x_(){try{return typeof indexedDB=="object"}catch{return!1}}function N_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function hI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const fI="FirebaseError";class Hn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=fI,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],d=l?pI(l,i):"Error",h=`${this.serviceName}: ${d} (${o}).`;return new Hn(o,h,i)}}function pI(n,e){return n.replace(mI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const mI=/\{\$([^}]+)}/g;function gI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ya(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],d=e[o];if(zg(l)&&zg(d)){if(!Ya(l,d))return!1}else if(l!==d)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function zg(n){return n!==null&&typeof n=="object"}/**
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
 */function hl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Fa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ua(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function yI(n,e){const t=new _I(n,e);return t.subscribe.bind(t)}class _I{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");vI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Ph),o.error===void 0&&(o.error=Ph),o.complete===void 0&&(o.complete=Ph);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ph(){}/**
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
 */const EI=1e3,wI=2,TI=4*60*60*1e3,II=.5;function jg(n,e=EI,t=wI){const i=e*Math.pow(t,n),o=Math.round(II*i*(Math.random()-.5)*2);return Math.min(TI,i+o)}/**
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
 */function hn(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const os="[DEFAULT]";/**
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
 */class SI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new iI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AI(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,d]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&d.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const d=this.instances.get(o);return d&&e(d,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(n){return n===os?void 0:n}function AI(n){return n.instantiationMode==="EAGER"}/**
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
 */class CI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new SI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const kI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},PI=ke.INFO,xI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},NI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=xI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=NI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const DI=(n,e)=>e.some(t=>n instanceof t);let Bg,$g;function bI(){return Bg||(Bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LI(){return $g||($g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D_=new WeakMap,Wh=new WeakMap,b_=new WeakMap,xh=new WeakMap,Cf=new WeakMap;function OI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",d)},l=()=>{t(Ei(n.result)),o()},d=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",d)});return e.then(t=>{t instanceof IDBCursor&&D_.set(t,n)}).catch(()=>{}),Cf.set(e,n),e}function VI(n){if(Wh.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",d),n.removeEventListener("abort",d)},l=()=>{t(),o()},d=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",d),n.addEventListener("abort",d)});Wh.set(n,e)}let qh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||b_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ei(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function MI(n){qh=n(qh)}function FI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Nh(this),e,...t);return b_.set(i,e.sort?e.sort():[e]),Ei(i)}:LI().includes(n)?function(...e){return n.apply(Nh(this),e),Ei(D_.get(this))}:function(...e){return Ei(n.apply(Nh(this),e))}}function UI(n){return typeof n=="function"?FI(n):(n instanceof IDBTransaction&&VI(n),DI(n,bI())?new Proxy(n,qh):n)}function Ei(n){if(n instanceof IDBRequest)return OI(n);if(xh.has(n))return xh.get(n);const e=UI(n);return e!==n&&(xh.set(n,e),Cf.set(e,n)),e}const Nh=n=>Cf.get(n);function L_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const d=indexedDB.open(n,e),h=Ei(d);return i&&d.addEventListener("upgradeneeded",p=>{i(Ei(d.result),p.oldVersion,p.newVersion,Ei(d.transaction),p)}),t&&d.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),h}const zI=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],Dh=new Map;function Hg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Dh.get(e))return Dh.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=jI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||zI.includes(t)))return;const l=async function(d,...h){const p=this.transaction(d,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(h.shift())),(await Promise.all([y[t](...h),o&&p.done]))[0]};return Dh.set(e,l),l}MI(n=>({...n,get:(e,t,i)=>Hg(e,t)||n.get(e,t,i),has:(e,t)=>!!Hg(e,t)||n.has(e,t)}));/**
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
 */class BI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($I(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function $I(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kh="@firebase/app",Wg="0.10.18";/**
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
 */const Mr=new Pc("@firebase/app"),HI="@firebase/app-compat",WI="@firebase/analytics-compat",qI="@firebase/analytics",KI="@firebase/app-check-compat",GI="@firebase/app-check",QI="@firebase/auth",YI="@firebase/auth-compat",XI="@firebase/database",JI="@firebase/data-connect",ZI="@firebase/database-compat",eS="@firebase/functions",tS="@firebase/functions-compat",nS="@firebase/installations",rS="@firebase/installations-compat",iS="@firebase/messaging",sS="@firebase/messaging-compat",oS="@firebase/performance",aS="@firebase/performance-compat",lS="@firebase/remote-config",uS="@firebase/remote-config-compat",cS="@firebase/storage",dS="@firebase/storage-compat",hS="@firebase/firestore",fS="@firebase/vertexai",pS="@firebase/firestore-compat",mS="firebase",gS="11.2.0";/**
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
 */const Gh="[DEFAULT]",yS={[Kh]:"fire-core",[HI]:"fire-core-compat",[qI]:"fire-analytics",[WI]:"fire-analytics-compat",[GI]:"fire-app-check",[KI]:"fire-app-check-compat",[QI]:"fire-auth",[YI]:"fire-auth-compat",[XI]:"fire-rtdb",[JI]:"fire-data-connect",[ZI]:"fire-rtdb-compat",[eS]:"fire-fn",[tS]:"fire-fn-compat",[nS]:"fire-iid",[rS]:"fire-iid-compat",[iS]:"fire-fcm",[sS]:"fire-fcm-compat",[oS]:"fire-perf",[aS]:"fire-perf-compat",[lS]:"fire-rc",[uS]:"fire-rc-compat",[cS]:"fire-gcs",[dS]:"fire-gcs-compat",[hS]:"fire-fst",[pS]:"fire-fst-compat",[fS]:"fire-vertex","fire-js":"fire-js",[mS]:"fire-js-all"};/**
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
 */const ac=new Map,_S=new Map,Qh=new Map;function qg(n,e){try{n.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(Qh.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Qh.set(e,n);for(const t of ac.values())qg(t,n);for(const t of _S.values())qg(t,n);return!0}function _s(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rr(n){return n.settings!==void 0}/**
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
 */const vS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wi=new ys("app","Firebase",vS);/**
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
 */class ES{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
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
 */const Oo=gS;function O_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Gh,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw wi.create("bad-app-name",{appName:String(o)});if(t||(t=C_()),!t)throw wi.create("no-options");const l=ac.get(o);if(l){if(Ya(t,l.options)&&Ya(i,l.config))return l;throw wi.create("duplicate-app",{appName:o})}const d=new CI(o);for(const p of Qh.values())d.addComponent(p);const h=new ES(t,i,d);return ac.set(o,h),h}function kf(n=Gh){const e=ac.get(n);if(!e&&n===Gh&&C_())return O_();if(!e)throw wi.create("no-app",{appName:n});return e}function Sn(n,e,t){var i;let o=(i=yS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),d=e.match(/\s|\//);if(l||d){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&d&&h.push("and"),d&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(h.join(" "));return}ur(new Bn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const wS="firebase-heartbeat-database",TS=1,Xa="firebase-heartbeat-store";let bh=null;function V_(){return bh||(bh=L_(wS,TS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xa)}catch(t){console.warn(t)}}}}).catch(n=>{throw wi.create("idb-open",{originalErrorMessage:n.message})})),bh}async function IS(n){try{const t=(await V_()).transaction(Xa),i=await t.objectStore(Xa).get(M_(n));return await t.done,i}catch(e){if(e instanceof Hn)Mr.warn(e.message);else{const t=wi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function Kg(n,e){try{const i=(await V_()).transaction(Xa,"readwrite");await i.objectStore(Xa).put(e,M_(n)),await i.done}catch(t){if(t instanceof Hn)Mr.warn(t.message);else{const i=wi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(i.message)}}}function M_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const SS=1024,RS=30*24*60*60*1e3;class AS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Gg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(d=>d.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const h=new Date(d.date).valueOf();return Date.now()-h<=RS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Mr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gg(),{heartbeatsToSend:i,unsentEntries:o}=CS(this._heartbeatsCache.heartbeats),l=oc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function Gg(){return new Date().toISOString().substring(0,10)}function CS(n,e=SS){const t=[];let i=n.slice();for(const o of n){const l=t.find(d=>d.agent===o.agent);if(l){if(l.dates.push(o.date),Qg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Qg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class kS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x_()?N_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await IS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Qg(n){return oc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function PS(n){ur(new Bn("platform-logger",e=>new BI(e),"PRIVATE")),ur(new Bn("heartbeat",e=>new AS(e),"PRIVATE")),Sn(Kh,Wg,n),Sn(Kh,Wg,"esm2017"),Sn("fire-js","")}PS("");function Pf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function F_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xS=F_,U_=new ys("auth","Firebase",F_());/**
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
 */const lc=new Pc("@firebase/auth");function NS(n,...e){lc.logLevel<=ke.WARN&&lc.warn(`Auth (${Oo}): ${n}`,...e)}function Qu(n,...e){lc.logLevel<=ke.ERROR&&lc.error(`Auth (${Oo}): ${n}`,...e)}/**
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
 */function $n(n,...e){throw xf(n,...e)}function ir(n,...e){return xf(n,...e)}function z_(n,e,t){const i=Object.assign(Object.assign({},xS()),{[e]:t});return new ys("auth","Firebase",i).create(e,{appName:n.name})}function Or(n){return z_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return U_.create(n,...e)}function Ee(n,e,...t){if(!n)throw xf(e,...t)}function Nr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qu(e),new Error(e)}function Fr(n,e){n||Nr(e)}/**
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
 */function Yh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function DS(){return Yg()==="http:"||Yg()==="https:"}function Yg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function bS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DS()||P_()||"connection"in navigator)?navigator.onLine:!0}function LS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class fl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fr(t>e,"Short delay should be less than long delay!"),this.isMobile=oI()||uI()}get(){return bS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nf(n,e){Fr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class j_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VS=new fl(3e4,6e4);function xi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ni(n,e,t,i,o={}){return B_(n,o,async()=>{let l={},d={};i&&(e==="GET"?d=i:l={body:JSON.stringify(i)});const h=hl(Object.assign({key:n.config.apiKey},d)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return lI()||(y.referrerPolicy="no-referrer"),j_.fetch()($_(n,n.config.apiHost,t,h),y)})}async function B_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},OS),e);try{const o=new FS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const d=await l.json();if("needConfirmation"in d)throw zu(n,"account-exists-with-different-credential",d);if(l.ok&&!("errorMessage"in d))return d;{const h=l.ok?d.errorMessage:d.error.message,[p,y]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw zu(n,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw zu(n,"email-already-in-use",d);if(p==="USER_DISABLED")throw zu(n,"user-disabled",d);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw z_(n,E,y);$n(n,E)}}catch(o){if(o instanceof Hn)throw o;$n(n,"network-request-failed",{message:String(o)})}}async function pl(n,e,t,i,o={}){const l=await Ni(n,e,t,i,o);return"mfaPendingCredential"in l&&$n(n,"multi-factor-auth-required",{_serverResponse:l}),l}function $_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Nf(n.config,o):`${n.config.apiScheme}://${o}`}function MS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ir(this.auth,"network-request-failed")),VS.get())})}}function zu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ir(n,e,i);return o.customData._tokenResponse=t,o}function Xg(n){return n!==void 0&&n.enterprise!==void 0}class US{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return MS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zS(n,e){return Ni(n,"GET","/v2/recaptchaConfig",xi(n,e))}/**
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
 */async function jS(n,e){return Ni(n,"POST","/v1/accounts:delete",e)}async function H_(n,e){return Ni(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function $a(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BS(n,e=!1){const t=hn(n),i=await t.getIdToken(e),o=Df(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,d=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:$a(Lh(o.auth_time)),issuedAtTime:$a(Lh(o.iat)),expirationTime:$a(Lh(o.exp)),signInProvider:d||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Lh(n){return Number(n)*1e3}function Df(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=R_(t);return o?JSON.parse(o):(Qu("Failed to decode base64 JWT payload"),null)}catch(o){return Qu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Jg(n){const e=Df(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ja(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Hn&&$S(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function $S({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class HS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$a(this.lastLoginAt),this.creationTime=$a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Ja(n,H_(t,{idToken:i}));Ee(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const d=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?W_(l.providerUserInfo):[],h=qS(n.providerData,d),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(h!=null&&h.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Xh(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function WS(n){const e=hn(n);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function W_(n){return n.map(e=>{var{providerId:t}=e,i=Pf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function KS(n,e){const t=await B_(n,{},async()=>{const i=hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,d=$_(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",j_.fetch()(d,{method:"POST",headers:h,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function GS(n,e){return Ni(n,"POST","/v2/accounts:revokeToken",xi(n,e))}/**
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
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Jg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await KS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,d=new To;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),d.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),d.expirationTime=l),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
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
 */function pi(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Xh(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ja(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BS(this,e)}reload(){return WS(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await uc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rr(this.auth.app))return Promise.reject(Or(this.auth));const e=await this.getIdToken();return await Ja(this,jS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,d,h,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(d=t.photoURL)!==null&&d!==void 0?d:void 0,z=(h=t.tenantId)!==null&&h!==void 0?h:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,B=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:K,emailVerified:ee,isAnonymous:de,providerData:he,stsTokenManager:k}=t;Ee(K&&k,e,"internal-error");const I=To.fromJSON(this.name,k);Ee(typeof K=="string",e,"internal-error"),pi(T,e.name),pi(S,e.name),Ee(typeof ee=="boolean",e,"internal-error"),Ee(typeof de=="boolean",e,"internal-error"),pi(N,e.name),pi(V,e.name),pi(z,e.name),pi(L,e.name),pi(H,e.name),pi(B,e.name);const R=new Dr({uid:K,auth:e,email:S,emailVerified:ee,displayName:T,isAnonymous:de,photoURL:V,phoneNumber:N,tenantId:z,stsTokenManager:I,createdAt:H,lastLoginAt:B});return he&&Array.isArray(he)&&(R.providerData=he.map(P=>Object.assign({},P))),L&&(R._redirectEventId=L),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new To;o.updateFromServerResponse(t);const l=new Dr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await uc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?W_(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new To;h.updateFromIdToken(i);const p=new Dr({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:d}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Xh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const Zg=new Map;function br(n){Fr(n instanceof Function,"Expected a class definition");let e=Zg.get(n);return e?(Fr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Zg.set(n,e),e)}/**
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
 */class q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}q_.type="NONE";const ey=q_;/**
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
 */function Yu(n,e,t){return`firebase:${n}:${e}:${t}`}class Io{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Yu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Yu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Io(br(ey),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||br(ey);const d=Yu(i,e.config.apiKey,e.name);let h=null;for(const y of t)try{const E=await y._get(d);if(E){const T=Dr._fromJSON(e,E);y!==l&&(h=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Io(l,e,i):(l=p[0],h&&await l._set(d,h.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(d)}catch{}})),new Io(l,e,i))}}/**
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
 */function ty(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(K_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(Z_(e))return"Webos";if(G_(e))return"Safari";if((e.includes("chrome/")||Q_(e))&&!e.includes("edge/"))return"Chrome";if(X_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function K_(n=jt()){return/firefox\//i.test(n)}function G_(n=jt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Q_(n=jt()){return/crios\//i.test(n)}function Y_(n=jt()){return/iemobile/i.test(n)}function X_(n=jt()){return/android/i.test(n)}function J_(n=jt()){return/blackberry/i.test(n)}function Z_(n=jt()){return/webos/i.test(n)}function bf(n=jt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function QS(n=jt()){var e;return bf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YS(){return cI()&&document.documentMode===10}function ev(n=jt()){return bf(n)||X_(n)||Z_(n)||J_(n)||/windows phone/i.test(n)||Y_(n)}/**
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
 */function tv(n,e=[]){let t;switch(n){case"Browser":t=ty(jt());break;case"Worker":t=`${ty(jt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Oo}/${i}`}/**
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
 */class XS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((d,h)=>{try{const p=e(l);d(p)}catch(p){h(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function JS(n,e={}){return Ni(n,"GET","/v2/passwordPolicy",xi(n,e))}/**
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
 */const ZS=6;class eR{constructor(e){var t,i,o,l;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=d.minPasswordLength)!==null&&t!==void 0?t:ZS,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,d,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class tR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ny(this),this.idTokenSubscription=new ny(this),this.beforeStateQueue=new XS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await H_(this,{idToken:e}),i=await Dr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rr(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===h)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(d){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rr(this.app))return Promise.reject(Or(this));const t=e?hn(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rr(this.app)?Promise.reject(Or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rr(this.app)?Promise.reject(Or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JS(this),t=new eR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await GS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let d=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(h,this,"internal-error"),h.then(()=>{d||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{d=!0,p()}}else{const p=e.addObserver(t);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&NS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function vs(n){return hn(n)}class ny{constructor(e){this.auth=e,this.observer=null,this.addObserver=yI(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nR(n){xc=n}function nv(n){return xc.loadJS(n)}function rR(){return xc.recaptchaEnterpriseScript}function iR(){return xc.gapiScript}function sR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class oR{constructor(){this.enterprise=new aR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class aR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const lR="recaptcha-enterprise",rv="NO_RECAPTCHA";class uR{constructor(e){this.type=lR,this.auth=vs(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(d,h)=>{zS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const y=new US(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,d(y.siteKey)}}).catch(p=>{h(p)})})}function o(l,d,h){const p=window.grecaptcha;Xg(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{d(y)}).catch(()=>{d(rv)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new oR().execute("siteKey",{action:"verify"}):new Promise((l,d)=>{i(this.auth).then(h=>{if(!t&&Xg(window.grecaptcha))o(h,l,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=rR();p.length!==0&&(p+=h),nv(p).then(()=>{o(h,l,d)}).catch(y=>{d(y)})}}).catch(h=>{d(h)})})}}async function ry(n,e,t,i=!1,o=!1){const l=new uR(n);let d;if(o)d=rv;else try{d=await l.verify(t)}catch{d=await l.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,y=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:d}):Object.assign(h,{captchaResponse:d}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Jh(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await ry(n,e,t,t==="getOobCode");return i(n,d)}else return i(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ry(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(d)})}/**
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
 */function cR(n,e){const t=_s(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ya(l,e??{}))return o;$n(o,"already-initialized")}return t.initialize({options:e})}function dR(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function hR(n,e,t){const i=vs(n);Ee(i._canInitEmulator,i,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=iv(e),{host:d,port:h}=fR(e),p=h===null?"":`:${h}`;i.config.emulator={url:`${l}//${d}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:d,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),pR()}function iv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fR(n){const e=iv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:iy(i.substr(l.length+1))}}else{const[l,d]=i.split(":");return{host:l,port:iy(d)}}}function iy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function pR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Lf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}async function mR(n,e){return Ni(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function gR(n,e){return pl(n,"POST","/v1/accounts:signInWithPassword",xi(n,e))}/**
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
 */async function yR(n,e){return pl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}async function _R(n,e){return pl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}/**
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
 */class Za extends Lf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Za(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Za(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jh(e,t,"signInWithPassword",gR);case"emailLink":return yR(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jh(e,i,"signUpPassword",mR);case"emailLink":return _R(e,{idToken:t,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function So(n,e){return pl(n,"POST","/v1/accounts:signInWithIdp",xi(n,e))}/**
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
 */const vR="http://localhost";class cs extends Lf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Pf(t,["providerId","signInMethod"]);if(!i||!o)return null;const d=new cs(i,o);return d.idToken=l.idToken||void 0,d.accessToken=l.accessToken||void 0,d.secret=l.secret,d.nonce=l.nonce,d.pendingToken=l.pendingToken||null,d}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,So(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:vR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hl(t)}return e}}/**
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
 */function ER(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wR(n){const e=Fa(Ua(n)).link,t=e?Fa(Ua(e)).deep_link_id:null,i=Fa(Ua(n)).deep_link_id;return(i?Fa(Ua(i)).link:null)||i||t||e||n}class Of{constructor(e){var t,i,o,l,d,h;const p=Fa(Ua(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,T=ER((o=p.mode)!==null&&o!==void 0?o:null);Ee(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(d=p.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=wR(e);try{return new Of(t)}catch{return null}}}/**
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
 */class Vo{constructor(){this.providerId=Vo.PROVIDER_ID}static credential(e,t){return Za._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Of.parseLink(t);return Ee(i,"argument-error"),Za._fromEmailAndCode(e,i.code,i.tenantId)}}Vo.PROVIDER_ID="password";Vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ml extends sv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mi extends ml{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";mi.PROVIDER_ID="facebook.com";/**
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
 */class gi extends ml{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return gi.credential(t,i)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
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
 */class yi extends ml{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.GITHUB_SIGN_IN_METHOD="github.com";yi.PROVIDER_ID="github.com";/**
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
 */class _i extends ml{constructor(){super("twitter.com")}static credential(e,t){return cs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return _i.credential(t,i)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
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
 */async function TR(n,e){return pl(n,"POST","/v1/accounts:signUp",xi(n,e))}/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Dr._fromIdTokenResponse(e,i,o),d=sy(i);return new ds({user:l,providerId:d,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=sy(i);return new ds({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function sy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class cc extends Hn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new cc(e,t,i,o)}}function ov(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(n,l,e,i):l})}async function IR(n,e,t=!1){const i=await Ja(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ds._forOperation(n,"link",i)}/**
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
 */async function SR(n,e,t=!1){const{auth:i}=n;if(rr(i.app))return Promise.reject(Or(i));const o="reauthenticate";try{const l=await Ja(n,ov(i,o,e,n),t);Ee(l.idToken,i,"internal-error");const d=Df(l.idToken);Ee(d,i,"internal-error");const{sub:h}=d;return Ee(n.uid===h,i,"user-mismatch"),ds._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&$n(i,"user-mismatch"),l}}/**
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
 */async function av(n,e,t=!1){if(rr(n.app))return Promise.reject(Or(n));const i="signIn",o=await ov(n,i,e),l=await ds._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function RR(n,e){return av(vs(n),e)}/**
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
 */async function lv(n){const e=vs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AR(n,e,t){if(rr(n.app))return Promise.reject(Or(n));const i=vs(n),d=await Jh(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TR).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&lv(n),p}),h=await ds._fromIdTokenResponse(i,"signIn",d);return await i._updateCurrentUser(h.user),h}function CR(n,e,t){return rr(n.app)?Promise.reject(Or(n)):RR(hn(n),Vo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&lv(n),i})}function kR(n,e,t,i){return hn(n).onIdTokenChanged(e,t,i)}function PR(n,e,t){return hn(n).beforeAuthStateChanged(e,t)}const dc="__sak";/**
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
 */class uv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xR=1e3,NR=10;class cv extends uv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ev(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((d,h,p)=>{this.notifyListeners(d,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(i);!t&&this.localCache[i]===d||this.notifyListeners(i,d)},l=this.storage.getItem(i);YS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,NR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},xR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cv.type="LOCAL";const DR=cv;/**
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
 */class dv extends uv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dv.type="SESSION";const hv=dv;/**
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
 */function bR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Nc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,d=this.handlersMap[o];if(!(d!=null&&d.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(d).map(async y=>y(t.origin,l)),p=await bR(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nc.receivers=[];/**
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
 */function Vf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class LR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,d;return new Promise((h,p)=>{const y=Vf("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);d={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(S.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function sr(){return window}function OR(n){sr().location.href=n}/**
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
 */function fv(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function VR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function FR(){return fv()?self:null}/**
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
 */const pv="firebaseLocalStorageDb",UR=1,hc="firebaseLocalStorage",mv="fbase_key";class gl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dc(n,e){return n.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function zR(){const n=indexedDB.deleteDatabase(pv);return new gl(n).toPromise()}function Zh(){const n=indexedDB.open(pv,UR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(hc,{keyPath:mv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(hc)?e(i):(i.close(),await zR(),e(await Zh()))})})}async function oy(n,e,t){const i=Dc(n,!0).put({[mv]:e,value:t});return new gl(i).toPromise()}async function jR(n,e){const t=Dc(n,!1).get(e),i=await new gl(t).toPromise();return i===void 0?null:i.value}function ay(n,e){const t=Dc(n,!0).delete(e);return new gl(t).toPromise()}const BR=800,$R=3;class gv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>$R)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nc._getInstance(FR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await VR(),!this.activeServiceWorker)return;this.sender=new LR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zh();return await oy(e,dc,"1"),await ay(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>oy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>jR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ay(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Dc(o,!1).getAll();return new gl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gv.type="LOCAL";const HR=gv;new fl(3e4,6e4);/**
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
 */function WR(n,e){return e?br(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Mf extends Lf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qR(n){return av(n.auth,new Mf(n),n.bypassAuthState)}function KR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),SR(t,new Mf(n),n.bypassAuthState)}async function GR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),IR(t,new Mf(n),n.bypassAuthState)}/**
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
 */class yv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:d,type:h}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qR;case"linkViaPopup":case"linkViaRedirect":return GR;case"reauthViaPopup":case"reauthViaRedirect":return KR;default:$n(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QR=new fl(2e3,1e4);class wo extends yv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=Vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QR.get())};e()}}wo.currentPopupAction=null;/**
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
 */const YR="pendingRedirect",Xu=new Map;class XR extends yv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Xu.get(this.auth._key());if(!e){try{const i=await JR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Xu.set(this.auth._key(),e)}return this.bypassAuthState||Xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JR(n,e){const t=tA(e),i=eA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function ZR(n,e){Xu.set(n._key(),e)}function eA(n){return br(n._redirectPersistence)}function tA(n){return Yu(YR,n.config.apiKey,n.name)}async function nA(n,e,t=!1){if(rr(n.app))return Promise.reject(Or(n));const i=vs(n),o=WR(i,e),d=await new XR(i,o,t).execute();return d&&!t&&(delete d.user._redirectEventId,await i._persistUserIfCurrent(d.user),await i._setRedirectUser(null,e)),d}/**
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
 */const rA=10*60*1e3;class iA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!_v(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ir(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ly(e))}saveEventToCache(e){this.cachedEventUids.add(ly(e)),this.lastProcessedEventTime=Date.now()}}function ly(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _v({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _v(n);default:return!1}}/**
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
 */async function oA(n,e={}){return Ni(n,"GET","/v1/projects",e)}/**
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
 */const aA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lA=/^https?/;async function uA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await oA(n);for(const t of e)try{if(cA(t))return}catch{}$n(n,"unauthorized-domain")}function cA(n){const e=Yh(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const d=new URL(n);return d.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&d.hostname===i}if(!lA.test(t))return!1;if(aA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const dA=new fl(3e4,6e4);function uy(){const n=sr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function hA(n){return new Promise((e,t)=>{var i,o,l;function d(){uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uy(),t(ir(n,"network-request-failed"))},timeout:dA.get()})}if(!((o=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)d();else{const h=sR("iframefcb");return sr()[h]=()=>{gapi.load?d():t(ir(n,"network-request-failed"))},nv(`${iR()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function fA(n){return Ju=Ju||hA(n),Ju}/**
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
 */const pA=new fl(5e3,15e3),mA="__/auth/iframe",gA="emulator/auth/iframe",yA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_A=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vA(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Nf(e,gA):`https://${n.config.authDomain}/${mA}`,i={apiKey:e.apiKey,appName:n.name,v:Oo},o=_A.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${hl(i).slice(1)}`}async function EA(n){const e=await fA(n),t=sr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:vA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const d=ir(n,"network-request-failed"),h=sr().setTimeout(()=>{l(d)},pA.get());function p(){sr().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{l(d)})}))}/**
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
 */const wA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TA=500,IA=600,SA="_blank",RA="http://localhost";class cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AA(n,e,t,i=TA,o=IA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},wA),{width:i.toString(),height:o.toString(),top:l,left:d}),y=jt().toLowerCase();t&&(h=Q_(y)?SA:t),K_(y)&&(e=e||RA,p.scrollbars="yes");const E=Object.entries(p).reduce((S,[N,V])=>`${S}${N}=${V},`,"");if(QS(y)&&h!=="_self")return CA(e||"",h),new cy(null);const T=window.open(e||"",h,E);Ee(T,n,"popup-blocked");try{T.focus()}catch{}return new cy(T)}function CA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const kA="__/auth/handler",PA="emulator/auth/handler",xA=encodeURIComponent("fac");async function dy(n,e,t,i,o,l){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const d={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Oo,eventId:o};if(e instanceof sv){e.setDefaultLanguage(n.languageCode),d.providerId=e.providerId||"",gI(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))d[E]=T}if(e instanceof ml){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(d.scopes=E.join(","))}n.tenantId&&(d.tid=n.tenantId);const h=d;for(const E of Object.keys(h))h[E]===void 0&&delete h[E];const p=await n._getAppCheckToken(),y=p?`#${xA}=${encodeURIComponent(p)}`:"";return`${NA(n)}?${hl(h).slice(1)}${y}`}function NA({config:n}){return n.emulator?Nf(n,PA):`https://${n.authDomain}/${kA}`}/**
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
 */const Oh="webStorageSupport";class DA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hv,this._completeRedirectFn=nA,this._overrideRedirectResult=ZR}async _openPopup(e,t,i,o){var l;Fr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const d=await dy(e,t,i,Yh(),o);return AA(e,d,Vf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await dy(e,t,i,Yh(),o);return OR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Fr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await EA(e),i=new iA(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oh,{type:Oh},o=>{var l;const d=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Oh];d!==void 0&&t(!!d),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ev()||G_()||bf()}}const bA=DA;var hy="@firebase/auth",fy="1.8.2";/**
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
 */class LA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VA(n){ur(new Bn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:d,authDomain:h}=i.options;Ee(d&&!d.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:d,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tv(n)},y=new tR(i,o,l,p);return dR(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new Bn("auth-internal",e=>{const t=vs(e.getProvider("auth").getImmediate());return(i=>new LA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(hy,fy,OA(n)),Sn(hy,fy,"esm2017")}/**
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
 */const MA=5*60,FA=k_("authIdTokenMaxAge")||MA;let py=null;const UA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>FA)return;const o=t==null?void 0:t.token;py!==o&&(py=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zA(n=kf()){const e=_s(n,"auth");if(e.isInitialized())return e.getImmediate();const t=cR(n,{popupRedirectResolver:bA,persistence:[HR,DR,hv]}),i=k_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const d=UA(l.toString());PR(t,d,()=>d(t.currentUser)),kR(t,h=>d(h))}}const o=A_("auth");return o&&hR(t,`http://${o}`),t}function jA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}nR({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=ir("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",jA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VA("Browser");var BA="firebase",$A="11.2.0";/**
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
 */Sn(BA,$A,"app");const vv="@firebase/installations",Ff="0.6.12";/**
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
 */const Ev=1e4,wv=`w:${Ff}`,Tv="FIS_v2",HA="https://firebaseinstallations.googleapis.com/v1",WA=60*60*1e3,qA="installations",KA="Installations";/**
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
 */const GA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hs=new ys(qA,KA,GA);function Iv(n){return n instanceof Hn&&n.code.includes("request-failed")}/**
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
 */function Sv({projectId:n}){return`${HA}/projects/${n}/installations`}function Rv(n){return{token:n.token,requestStatus:2,expiresIn:YA(n.expiresIn),creationTime:Date.now()}}async function Av(n,e){const i=(await e.json()).error;return hs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Cv({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function QA(n,{refreshToken:e}){const t=Cv(n);return t.append("Authorization",XA(e)),t}async function kv(n){const e=await n();return e.status>=500&&e.status<600?n():e}function YA(n){return Number(n.replace("s","000"))}function XA(n){return`${Tv} ${n}`}/**
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
 */async function JA({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Sv(n),o=Cv(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const d={fid:t,authVersion:Tv,appId:n.appId,sdkVersion:wv},h={method:"POST",headers:o,body:JSON.stringify(d)},p=await kv(()=>fetch(i,h));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:Rv(y.authToken)}}else throw await Av("Create Installation",p)}/**
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
 */function Pv(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function ZA(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const eC=/^[cdef][\w-]{21}$/,ef="";function tC(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=nC(n);return eC.test(t)?t:ef}catch{return ef}}function nC(n){return ZA(n).substr(0,22)}/**
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
 */function bc(n){return`${n.appName}!${n.appId}`}/**
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
 */const xv=new Map;function Nv(n,e){const t=bc(n);Dv(t,e),rC(t,e)}function Dv(n,e){const t=xv.get(n);if(t)for(const i of t)i(e)}function rC(n,e){const t=iC();t&&t.postMessage({key:n,fid:e}),sC()}let as=null;function iC(){return!as&&"BroadcastChannel"in self&&(as=new BroadcastChannel("[Firebase] FID Change"),as.onmessage=n=>{Dv(n.data.key,n.data.fid)}),as}function sC(){xv.size===0&&as&&(as.close(),as=null)}/**
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
 */const oC="firebase-installations-database",aC=1,fs="firebase-installations-store";let Vh=null;function Uf(){return Vh||(Vh=L_(oC,aC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(fs)}}})),Vh}async function fc(n,e){const t=bc(n),o=(await Uf()).transaction(fs,"readwrite"),l=o.objectStore(fs),d=await l.get(t);return await l.put(e,t),await o.done,(!d||d.fid!==e.fid)&&Nv(n,e.fid),e}async function bv(n){const e=bc(n),i=(await Uf()).transaction(fs,"readwrite");await i.objectStore(fs).delete(e),await i.done}async function Lc(n,e){const t=bc(n),o=(await Uf()).transaction(fs,"readwrite"),l=o.objectStore(fs),d=await l.get(t),h=e(d);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!d||d.fid!==h.fid)&&Nv(n,h.fid),h}/**
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
 */async function zf(n){let e;const t=await Lc(n.appConfig,i=>{const o=lC(i),l=uC(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===ef?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function lC(n){const e=n||{fid:tC(),registrationStatus:0};return Lv(e)}function uC(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(hs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=cC(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dC(n)}:{installationEntry:e}}async function cC(n,e){try{const t=await JA(n,e);return fc(n.appConfig,t)}catch(t){throw Iv(t)&&t.customData.serverCode===409?await bv(n.appConfig):await fc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function dC(n){let e=await my(n.appConfig);for(;e.registrationStatus===1;)await Pv(100),e=await my(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await zf(n);return i||t}return e}function my(n){return Lc(n,e=>{if(!e)throw hs.create("installation-not-found");return Lv(e)})}function Lv(n){return hC(n)?{fid:n.fid,registrationStatus:0}:n}function hC(n){return n.registrationStatus===1&&n.registrationTime+Ev<Date.now()}/**
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
 */async function fC({appConfig:n,heartbeatServiceProvider:e},t){const i=pC(n,t),o=QA(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const d={installation:{sdkVersion:wv,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(d)},p=await kv(()=>fetch(i,h));if(p.ok){const y=await p.json();return Rv(y)}else throw await Av("Generate Auth Token",p)}function pC(n,{fid:e}){return`${Sv(n)}/${e}/authTokens:generate`}/**
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
 */async function jf(n,e=!1){let t;const i=await Lc(n.appConfig,l=>{if(!Ov(l))throw hs.create("not-registered");const d=l.authToken;if(!e&&yC(d))return l;if(d.requestStatus===1)return t=mC(n,e),l;{if(!navigator.onLine)throw hs.create("app-offline");const h=vC(l);return t=gC(n,h),h}});return t?await t:i.authToken}async function mC(n,e){let t=await gy(n.appConfig);for(;t.authToken.requestStatus===1;)await Pv(100),t=await gy(n.appConfig);const i=t.authToken;return i.requestStatus===0?jf(n,e):i}function gy(n){return Lc(n,e=>{if(!Ov(e))throw hs.create("not-registered");const t=e.authToken;return EC(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gC(n,e){try{const t=await fC(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await fc(n.appConfig,i),t}catch(t){if(Iv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await bv(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fc(n.appConfig,i)}throw t}}function Ov(n){return n!==void 0&&n.registrationStatus===2}function yC(n){return n.requestStatus===2&&!_C(n)}function _C(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+WA}function vC(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function EC(n){return n.requestStatus===1&&n.requestTime+Ev<Date.now()}/**
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
 */async function wC(n){const e=n,{installationEntry:t,registrationPromise:i}=await zf(e);return i?i.catch(console.error):jf(e).catch(console.error),t.fid}/**
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
 */async function TC(n,e=!1){const t=n;return await IC(t),(await jf(t,e)).token}async function IC(n){const{registrationPromise:e}=await zf(n);e&&await e}/**
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
 */function SC(n){if(!n||!n.options)throw Mh("App Configuration");if(!n.name)throw Mh("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Mh(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Mh(n){return hs.create("missing-app-config-values",{valueName:n})}/**
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
 */const Vv="installations",RC="installations-internal",AC=n=>{const e=n.getProvider("app").getImmediate(),t=SC(e),i=_s(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},CC=n=>{const e=n.getProvider("app").getImmediate(),t=_s(e,Vv).getImmediate();return{getId:()=>wC(t),getToken:o=>TC(t,o)}};function kC(){ur(new Bn(Vv,AC,"PUBLIC")),ur(new Bn(RC,CC,"PRIVATE"))}kC();Sn(vv,Ff);Sn(vv,Ff,"esm2017");/**
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
 */const pc="analytics",PC="firebase_id",xC="origin",NC=60*1e3,DC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bf="https://www.googletagmanager.com/gtag/js";/**
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
 */const nn=new Pc("@firebase/analytics");/**
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
 */const bC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new ys("analytics","Analytics",bC);/**
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
 */function LC(n){if(!n.startsWith(Bf)){const e=dn.create("invalid-gtag-resource",{gtagURL:n});return nn.warn(e.message),""}return n}function Mv(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function OC(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function VC(n,e){const t=OC("firebase-js-sdk-policy",{createScriptURL:LC}),i=document.createElement("script"),o=`${Bf}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function MC(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function FC(n,e,t,i,o,l){const d=i[o];try{if(d)await e[d];else{const p=(await Mv(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(h){nn.error(h)}n("config",o,l)}async function UC(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let d=o.send_to;Array.isArray(d)||(d=[d]);const h=await Mv(t);for(const p of d){const y=h.find(T=>T.measurementId===p),E=y&&e[y.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){nn.error(l)}}function zC(n,e,t,i){async function o(l,...d){try{if(l==="event"){const[h,p]=d;await UC(n,e,t,h,p)}else if(l==="config"){const[h,p]=d;await FC(n,e,t,i,h,p)}else if(l==="consent"){const[h,p]=d;n("consent",h,p)}else if(l==="get"){const[h,p,y]=d;n("get",h,p,y)}else if(l==="set"){const[h]=d;n("set",h)}else n(l,...d)}catch(h){nn.error(h)}}return o}function jC(n,e,t,i,o){let l=function(...d){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=zC(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function BC(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Bf)&&t.src.includes(n))return t;return null}/**
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
 */const $C=30,HC=1e3;class WC{constructor(e={},t=HC){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fv=new WC;function qC(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function KC(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:qC(i)},l=DC.replace("{app-id}",t),d=await fetch(l,o);if(d.status!==200&&d.status!==304){let h="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(h=p.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:d.status,responseMessage:h})}return d.json()}async function GC(n,e=Fv,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw dn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw dn.create("no-api-key")}const d=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new XC;return setTimeout(async()=>{h.abort()},NC),Uv({appId:i,apiKey:o,measurementId:l},d,h,e)}async function Uv(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=Fv){var l;const{appId:d,measurementId:h}=n;try{await QC(i,e)}catch(p){if(h)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:h};throw p}try{const p=await KC(n);return o.deleteThrottleMetadata(d),p}catch(p){const y=p;if(!YC(y)){if(o.deleteThrottleMetadata(d),h)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:d,measurementId:h};throw p}const E=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?jg(t,o.intervalMillis,$C):jg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(d,T),nn.debug(`Calling attemptFetch again in ${E} millis`),Uv(n,T,i,o)}}function QC(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function YC(n){if(!(n instanceof Hn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class XC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JC(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,d=Object.assign(Object.assign({},i),{send_to:l});n("event",t,d)}}/**
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
 */async function ZC(){if(x_())try{await N_()}catch(n){return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function e1(n,e,t,i,o,l,d){var h;const p=GC(n);p.then(N=>{t[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>nn.error(N)),e.push(p);const y=ZC().then(N=>{if(N)return i.getId()}),[E,T]=await Promise.all([p,y]);BC(l)||VC(l,E.measurementId),o("js",new Date);const S=(h=d==null?void 0:d.config)!==null&&h!==void 0?h:{};return S[xC]="firebase",S.update=!0,T!=null&&(S[PC]=T),o("config",E.measurementId,S),E.measurementId}/**
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
 */class t1{constructor(e){this.app=e}_delete(){return delete Ha[this.app.options.appId],Promise.resolve()}}let Ha={},yy=[];const _y={};let Fh="dataLayer",n1="gtag",vy,zv,Ey=!1;function r1(){const n=[];if(P_()&&n.push("This is a browser extension environment."),hI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=dn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function i1(n,e,t){r1();const i=n.options.appId;if(!i)throw dn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(Ha[i]!=null)throw dn.create("already-exists",{id:i});if(!Ey){MC(Fh);const{wrappedGtag:l,gtagCore:d}=jC(Ha,yy,_y,Fh,n1);zv=l,vy=d,Ey=!0}return Ha[i]=e1(n,yy,_y,e,vy,Fh,t),new t1(n)}function s1(n=kf()){n=hn(n);const e=_s(n,pc);return e.isInitialized()?e.getImmediate():o1(n)}function o1(n,e={}){const t=_s(n,pc);if(t.isInitialized()){const o=t.getImmediate();if(Ya(e,t.getOptions()))return o;throw dn.create("already-initialized")}return t.initialize({options:e})}function a1(n,e,t,i){n=hn(n),JC(zv,Ha[n.app.options.appId],e,t,i).catch(o=>nn.error(o))}const wy="@firebase/analytics",Ty="0.10.11";function l1(){ur(new Bn(pc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return i1(i,o,t)},"PUBLIC")),ur(new Bn("analytics-internal",n,"PRIVATE")),Sn(wy,Ty),Sn(wy,Ty,"esm2017");function n(e){try{const t=e.getProvider(pc).getImmediate();return{logEvent:(i,o,l)=>a1(t,i,o,l)}}catch(t){throw dn.create("interop-component-reg-failed",{reason:t})}}}l1();var Iy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ti,jv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,I){function R(){}R.prototype=I.prototype,k.D=I.prototype,k.prototype=new R,k.prototype.constructor=k,k.C=function(P,D,O){for(var C=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)C[Je-2]=arguments[Je];return I.prototype[D].apply(P,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,I,R){R||(R=0);var P=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)P[D]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(D=0;16>D;++D)P[D]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=k.g[0],R=k.g[1],D=k.g[2];var O=k.g[3],C=I+(O^R&(D^O))+P[0]+3614090360&4294967295;I=R+(C<<7&4294967295|C>>>25),C=O+(D^I&(R^D))+P[1]+3905402710&4294967295,O=I+(C<<12&4294967295|C>>>20),C=D+(R^O&(I^R))+P[2]+606105819&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(I^D&(O^I))+P[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=I+(O^R&(D^O))+P[4]+4118548399&4294967295,I=R+(C<<7&4294967295|C>>>25),C=O+(D^I&(R^D))+P[5]+1200080426&4294967295,O=I+(C<<12&4294967295|C>>>20),C=D+(R^O&(I^R))+P[6]+2821735955&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(I^D&(O^I))+P[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=I+(O^R&(D^O))+P[8]+1770035416&4294967295,I=R+(C<<7&4294967295|C>>>25),C=O+(D^I&(R^D))+P[9]+2336552879&4294967295,O=I+(C<<12&4294967295|C>>>20),C=D+(R^O&(I^R))+P[10]+4294925233&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(I^D&(O^I))+P[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=I+(O^R&(D^O))+P[12]+1804603682&4294967295,I=R+(C<<7&4294967295|C>>>25),C=O+(D^I&(R^D))+P[13]+4254626195&4294967295,O=I+(C<<12&4294967295|C>>>20),C=D+(R^O&(I^R))+P[14]+2792965006&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(I^D&(O^I))+P[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=I+(D^O&(R^D))+P[1]+4129170786&4294967295,I=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(I^R))+P[6]+3225465664&4294967295,O=I+(C<<9&4294967295|C>>>23),C=D+(I^R&(O^I))+P[11]+643717713&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^I&(D^O))+P[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=I+(D^O&(R^D))+P[5]+3593408605&4294967295,I=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(I^R))+P[10]+38016083&4294967295,O=I+(C<<9&4294967295|C>>>23),C=D+(I^R&(O^I))+P[15]+3634488961&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^I&(D^O))+P[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=I+(D^O&(R^D))+P[9]+568446438&4294967295,I=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(I^R))+P[14]+3275163606&4294967295,O=I+(C<<9&4294967295|C>>>23),C=D+(I^R&(O^I))+P[3]+4107603335&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^I&(D^O))+P[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=I+(D^O&(R^D))+P[13]+2850285829&4294967295,I=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(I^R))+P[2]+4243563512&4294967295,O=I+(C<<9&4294967295|C>>>23),C=D+(I^R&(O^I))+P[7]+1735328473&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^I&(D^O))+P[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=I+(R^D^O)+P[5]+4294588738&4294967295,I=R+(C<<4&4294967295|C>>>28),C=O+(I^R^D)+P[8]+2272392833&4294967295,O=I+(C<<11&4294967295|C>>>21),C=D+(O^I^R)+P[11]+1839030562&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^I)+P[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=I+(R^D^O)+P[1]+2763975236&4294967295,I=R+(C<<4&4294967295|C>>>28),C=O+(I^R^D)+P[4]+1272893353&4294967295,O=I+(C<<11&4294967295|C>>>21),C=D+(O^I^R)+P[7]+4139469664&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^I)+P[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=I+(R^D^O)+P[13]+681279174&4294967295,I=R+(C<<4&4294967295|C>>>28),C=O+(I^R^D)+P[0]+3936430074&4294967295,O=I+(C<<11&4294967295|C>>>21),C=D+(O^I^R)+P[3]+3572445317&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^I)+P[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=I+(R^D^O)+P[9]+3654602809&4294967295,I=R+(C<<4&4294967295|C>>>28),C=O+(I^R^D)+P[12]+3873151461&4294967295,O=I+(C<<11&4294967295|C>>>21),C=D+(O^I^R)+P[15]+530742520&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^I)+P[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=I+(D^(R|~O))+P[0]+4096336452&4294967295,I=R+(C<<6&4294967295|C>>>26),C=O+(R^(I|~D))+P[7]+1126891415&4294967295,O=I+(C<<10&4294967295|C>>>22),C=D+(I^(O|~R))+P[14]+2878612391&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~I))+P[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=I+(D^(R|~O))+P[12]+1700485571&4294967295,I=R+(C<<6&4294967295|C>>>26),C=O+(R^(I|~D))+P[3]+2399980690&4294967295,O=I+(C<<10&4294967295|C>>>22),C=D+(I^(O|~R))+P[10]+4293915773&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~I))+P[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=I+(D^(R|~O))+P[8]+1873313359&4294967295,I=R+(C<<6&4294967295|C>>>26),C=O+(R^(I|~D))+P[15]+4264355552&4294967295,O=I+(C<<10&4294967295|C>>>22),C=D+(I^(O|~R))+P[6]+2734768916&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~I))+P[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=I+(D^(R|~O))+P[4]+4149444226&4294967295,I=R+(C<<6&4294967295|C>>>26),C=O+(R^(I|~D))+P[11]+3174756917&4294967295,O=I+(C<<10&4294967295|C>>>22),C=D+(I^(O|~R))+P[2]+718787259&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~I))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+I&4294967295,k.g[1]=k.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,k.g[2]=k.g[2]+D&4294967295,k.g[3]=k.g[3]+O&4294967295}i.prototype.u=function(k,I){I===void 0&&(I=k.length);for(var R=I-this.blockSize,P=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=R;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<I;)if(P[D++]=k.charCodeAt(O++),D==this.blockSize){o(this,P),D=0;break}}else for(;O<I;)if(P[D++]=k[O++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=I},i.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var I=1;I<k.length-8;++I)k[I]=0;var R=8*this.o;for(I=k.length-8;I<k.length;++I)k[I]=R&255,R/=256;for(this.u(k),k=Array(16),I=R=0;4>I;++I)for(var P=0;32>P;P+=8)k[R++]=this.g[I]>>>P&255;return k};function l(k,I){var R=h;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=I(k)}function d(k,I){this.h=I;for(var R=[],P=!0,D=k.length-1;0<=D;D--){var O=k[D]|0;P&&O==I||(R[D]=O,P=!1)}this.g=R}var h={};function p(k){return-128<=k&&128>k?l(k,function(I){return new d([I|0],0>I?-1:0)}):new d([k|0],0>k?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return L(y(-k));for(var I=[],R=1,P=0;k>=R;P++)I[P]=k/R|0,R*=4294967296;return new d(I,0)}function E(k,I){if(k.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k.charAt(0)=="-")return L(E(k.substring(1),I));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(I,8)),P=T,D=0;D<k.length;D+=8){var O=Math.min(8,k.length-D),C=parseInt(k.substring(D,D+O),I);8>O?(O=y(Math.pow(I,O)),P=P.j(O).add(y(C))):(P=P.j(R),P=P.add(y(C)))}return P}var T=p(0),S=p(1),N=p(16777216);n=d.prototype,n.m=function(){if(z(this))return-L(this).m();for(var k=0,I=1,R=0;R<this.g.length;R++){var P=this.i(R);k+=(0<=P?P:4294967296+P)*I,I*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(V(this))return"0";if(z(this))return"-"+L(this).toString(k);for(var I=y(Math.pow(k,6)),R=this,P="";;){var D=ee(R,I).g;R=H(R,D.j(I));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(k);if(R=D,V(R))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function V(k){if(k.h!=0)return!1;for(var I=0;I<k.g.length;I++)if(k.g[I]!=0)return!1;return!0}function z(k){return k.h==-1}n.l=function(k){return k=H(this,k),z(k)?-1:V(k)?0:1};function L(k){for(var I=k.g.length,R=[],P=0;P<I;P++)R[P]=~k.g[P];return new d(R,~k.h).add(S)}n.abs=function(){return z(this)?L(this):this},n.add=function(k){for(var I=Math.max(this.g.length,k.g.length),R=[],P=0,D=0;D<=I;D++){var O=P+(this.i(D)&65535)+(k.i(D)&65535),C=(O>>>16)+(this.i(D)>>>16)+(k.i(D)>>>16);P=C>>>16,O&=65535,C&=65535,R[D]=C<<16|O}return new d(R,R[R.length-1]&-2147483648?-1:0)};function H(k,I){return k.add(L(I))}n.j=function(k){if(V(this)||V(k))return T;if(z(this))return z(k)?L(this).j(L(k)):L(L(this).j(k));if(z(k))return L(this.j(L(k)));if(0>this.l(N)&&0>k.l(N))return y(this.m()*k.m());for(var I=this.g.length+k.g.length,R=[],P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<k.g.length;D++){var O=this.i(P)>>>16,C=this.i(P)&65535,Je=k.i(D)>>>16,dt=k.i(D)&65535;R[2*P+2*D]+=C*dt,B(R,2*P+2*D),R[2*P+2*D+1]+=O*dt,B(R,2*P+2*D+1),R[2*P+2*D+1]+=C*Je,B(R,2*P+2*D+1),R[2*P+2*D+2]+=O*Je,B(R,2*P+2*D+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new d(R,0)};function B(k,I){for(;(k[I]&65535)!=k[I];)k[I+1]+=k[I]>>>16,k[I]&=65535,I++}function K(k,I){this.g=k,this.h=I}function ee(k,I){if(V(I))throw Error("division by zero");if(V(k))return new K(T,T);if(z(k))return I=ee(L(k),I),new K(L(I.g),L(I.h));if(z(I))return I=ee(k,L(I)),new K(L(I.g),I.h);if(30<k.g.length){if(z(k)||z(I))throw Error("slowDivide_ only works with positive integers.");for(var R=S,P=I;0>=P.l(k);)R=de(R),P=de(P);var D=he(R,1),O=he(P,1);for(P=he(P,2),R=he(R,2);!V(P);){var C=O.add(P);0>=C.l(k)&&(D=D.add(R),O=C),P=he(P,1),R=he(R,1)}return I=H(k,D.j(I)),new K(D,I)}for(D=T;0<=k.l(I);){for(R=Math.max(1,Math.floor(k.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=y(R),C=O.j(I);z(C)||0<C.l(k);)R-=P,O=y(R),C=O.j(I);V(O)&&(O=S),D=D.add(O),k=H(k,C)}return new K(D,k)}n.A=function(k){return ee(this,k).h},n.and=function(k){for(var I=Math.max(this.g.length,k.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)&k.i(P);return new d(R,this.h&k.h)},n.or=function(k){for(var I=Math.max(this.g.length,k.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)|k.i(P);return new d(R,this.h|k.h)},n.xor=function(k){for(var I=Math.max(this.g.length,k.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)^k.i(P);return new d(R,this.h^k.h)};function de(k){for(var I=k.g.length+1,R=[],P=0;P<I;P++)R[P]=k.i(P)<<1|k.i(P-1)>>>31;return new d(R,k.h)}function he(k,I){var R=I>>5;I%=32;for(var P=k.g.length-R,D=[],O=0;O<P;O++)D[O]=0<I?k.i(O+R)>>>I|k.i(O+R+1)<<32-I:k.i(O+R);return new d(D,k.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,jv=i,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=E,Ti=d}).apply(typeof Iy<"u"?Iy:typeof self<"u"?self:typeof window<"u"?window:{});var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bv,za,$v,Zu,tf,Hv,Wv,qv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ju=="object"&&ju];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var F=u[w];if(!(F in _))break e;_=_[F]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,F={next:function(){if(!w&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},h=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,w),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function S(u,m,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,S.apply(null,arguments)}function N(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function V(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,F,q){for(var re=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)re[Be-2]=arguments[Be];return m.prototype[F].apply(w,re)}}function z(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function L(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const F=u.length||0,q=w.length||0;u.length=F+q;for(let re=0;re<q;re++)u[F+re]=w[re]}else u.push(w)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function B(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function ee(u){return ee[" "](u),u}ee[" "]=function(){};var de=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function he(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function k(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,m){let _,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(_ in w)u[_]=w[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function D(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function O(u){h.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Je{constructor(){this.h=this.g=null}add(m,_){const w=dt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var dt=new H(()=>new ht,u=>u.reset());class ht{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,ne=!1,me=new Je,se=()=>{const u=h.Promise.resolve(void 0);Me=()=>{u.then(M)}};var M=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){O(_)}var m=dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ne=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(de){e:{try{ee(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}V(Ae,pe);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),ze=0;function He(u,m,_,w,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=F,this.key=++ze,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fr(u){this.src=u,this.g={},this.h=0}fr.prototype.add=function(u,m,_,w,F){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var re=$r(u,m,w,F);return-1<re?(m=u[re],_||(m.fa=!1)):(m=new He(m,this.src,q,!!w,F),m.fa=_,u.push(m)),m};function Ss(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],F=Array.prototype.indexOf.call(w,m,void 0),q;(q=0<=F)&&Array.prototype.splice.call(w,F,1),q&&(wt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function $r(u,m,_,w){for(var F=0;F<u.length;++F){var q=u[F];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==w)return F}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),Rs={};function jo(u,m,_,w,F){if(Array.isArray(m)){for(var q=0;q<m.length;q++)jo(u,m[q],_,w,F);return null}return _=Ho(_),u&&u[Ue]?u.K(m,_,y(w)?!!w.capture:!1,F):Bo(u,m,_,!1,w,F)}function Bo(u,m,_,w,F,q){if(!m)throw Error("Invalid event type");var re=y(F)?!!F.capture:!!F,Be=Cs(u);if(Be||(u[Di]=Be=new fr(u)),_=Be.add(m,_,w,re,q),_.proxy)return _;if(w=Il(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(F=re),F===void 0&&(F=!1),u.addEventListener(m.toString(),w,F);else if(u.attachEvent)u.attachEvent(mr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Il(){function u(_){return m.call(u.src,u.listener,_)}const m=$o;return u}function As(u,m,_,w,F){if(Array.isArray(m))for(var q=0;q<m.length;q++)As(u,m[q],_,w,F);else w=y(w)?!!w.capture:!!w,_=Ho(_),u&&u[Ue]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=$r(q,_,w,F),-1<_&&(wt(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Cs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=$r(m,_,w,F)),(_=-1<u?m[u]:null)&&pr(_))}function pr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ue])Ss(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(mr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Cs(m))?(Ss(_,u),_.h==0&&(_.src=null,m[Di]=null)):wt(u)}}}function mr(u){return u in Rs?Rs[u]:Rs[u]="on"+u}function $o(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&pr(u),u=_.call(w,m)}return u}function Cs(u){return u=u[Di],u instanceof fr?u:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ho(u){return typeof u=="function"?u:(u[ks]||(u[ks]=function(m){return u.handleEvent(m)}),u[ks])}function ft(){Q.call(this),this.i=new fr(this),this.M=this,this.F=null}V(ft,Q),ft.prototype[Ue]=!0,ft.prototype.removeEventListener=function(u,m,_,w){As(this,u,m,_,w)};function pt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var F=m;m=new pe(w,u),P(m,F)}if(F=!0,_)for(var q=_.length-1;0<=q;q--){var re=m.g=_[q];F=gr(re,w,!0,m)&&F}if(re=m.g=u,F=gr(re,w,!0,m)&&F,F=gr(re,w,!1,m)&&F,_)for(q=0;q<_.length;q++)re=m.g=_[q],F=gr(re,w,!1,m)&&F}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)wt(_[w]);delete u.g[m],u.h--}}this.F=null},ft.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ft.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function gr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,q=0;q<m.length;++q){var re=m[q];if(re&&!re.da&&re.capture==_){var Be=re.listener,mt=re.ha||re.src;re.fa&&Ss(u.i,re),F=Be.call(mt,w)!==!1&&F}}return F&&!w.defaultPrevented}function Wo(u,m,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function Hr(u){u.g=Wo(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class bi extends Q{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(u){Q.call(this),this.h=u,this.g={}}V(Li,Q);var qo=[];function Ko(u){he(u.g,function(m,_){this.g.hasOwnProperty(_)&&pr(m)},u),u.g={}}Li.prototype.N=function(){Li.aa.N.call(this),Ko(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Go=h.JSON.stringify,Qo=h.JSON.parse,Yo=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Oi(){}Oi.prototype.h=null;function Ps(u){return u.h||(u.h=u.i())}function xs(){}var fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){pe.call(this,"d")}V(Wn,pe);function Ns(){pe.call(this,"c")}V(Ns,pe);var qn={},Xo=null;function Vi(){return Xo=Xo||new ft}qn.La="serverreachability";function Jo(u){pe.call(this,qn.La,u)}V(Jo,pe);function yr(u){const m=Vi();pt(m,new Jo(m))}qn.STAT_EVENT="statevent";function Zo(u,m){pe.call(this,qn.STAT_EVENT,u),this.stat=m}V(Zo,pe);function st(u){const m=Vi();pt(m,new Zo(m,u))}qn.Ma="timingevent";function Ds(u,m){pe.call(this,qn.Ma,u),this.size=m}V(Ds,pe);function An(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function Fi(u,m,_,w,F,q){u.info(function(){if(u.g)if(q)for(var re="",Be=q.split("&"),mt=0;mt<Be.length;mt++){var be=Be[mt].split("=");if(1<be.length){var Tt=be[0];be=be[1];var lt=Tt.split("_");re=2<=lt.length&&lt[1]=="type"?re+(Tt+"="+be+"&"):re+(Tt+"=redacted&")}}else re=null;else re=q;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+m+`
`+_+`
`+re})}function bs(u,m,_,w,F,q,re){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+m+`
`+_+`
`+q+" "+re})}function Cn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Yc(u,_)+(w?" "+w:"")})}function ea(u,m){u.info(function(){return"TIMEOUT: "+m})}Mi.prototype.info=function(){};function Yc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var F=w[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var re=1;re<F.length;re++)F[re]=""}}}}return Go(_)}catch{return m}}var Ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kn;function Ui(){}V(Ui,Oi),Ui.prototype.g=function(){return new XMLHttpRequest},Ui.prototype.i=function(){return{}},kn=new Ui;function Pn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rl}function Rl(){this.i=null,this.g="",this.h=!1}var ta={},Os={};function Vs(u,m,_){u.L=1,u.v=Qr(sn(m)),u.m=_,u.P=!0,na(u,null)}function na(u,m){u.F=Date.now(),We(u),u.A=sn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Xr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Rl,u.g=$l(u.j,_?m:null,!u.m),0<u.O&&(u.M=new bi(S(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(qo[0]=F.toString()),F=qo);for(var q=0;q<F.length;q++){var re=jo(_,F[q],w||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),yr(),Fi(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Gt(u)==3?m.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Gt(this.g);var m=this.g.Ba();const gn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||la(this.g)))){this.J||lt!=4||m==7||(m==8||0>=gn?yr(3):yr(2)),zi(this);var _=this.g.Z();this.X=_;t:if(Al(this)){var w=la(this.g);u="";var F=w.length,q=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),Wr(this);var re="";break t}this.h.i=new h.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(q&&m==F-1)});w.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=_==200,bs(this.i,this.u,this.A,this.l,this.R,lt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,mt=this.g;if((Be=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Be)){var be=Be;break t}}be=null}if(_=be)Cn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ra(this,_);else{this.o=!1,this.s=3,st(12),pn(this),Wr(this);break e}}if(this.P){_=!0;let an;for(;!this.J&&this.C<re.length;)if(an=Xc(this,re),an==Os){lt==4&&(this.s=4,st(14),_=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==ta){this.s=4,st(15),Cn(this.i,this.l,re,"[Invalid Chunk]"),_=!1;break}else Cn(this.i,this.l,an,null),ra(this,an);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||re.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)Cn(this.i,this.l,re,"[Invalid Chunked Response]"),pn(this),Wr(this);else if(0<re.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),ca(Tt),Tt.M=!0,st(11))}}else Cn(this.i,this.l,re,null),ra(this,re);lt==4&&pn(this),this.o&&!this.J&&(lt==4?Ks(this.j,this):(this.o=!1,We(this)))}else Bs(this.g),_==400&&0<re.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),pn(this),Wr(this)}}}catch{}finally{}};function Al(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Xc(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Os:(_=Number(m.substring(_,w)),isNaN(_)?ta:(w+=1,w+_>m.length?Os:(m=m.slice(w,w+_),u.C=w+_,m)))}Pn.prototype.cancel=function(){this.J=!0,pn(this)};function We(u){u.S=Date.now()+u.I,Cl(u,u.I)}function Cl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(S(u.ba,u),m)}function zi(u){u.B&&(h.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ea(this.i,this.A),this.L!=2&&(yr(),st(17)),pn(this),this.s=2,Wr(this)):Cl(this,this.S-u)};function Wr(u){u.j.G==0||u.J||Ks(u.j,u)}function pn(u){zi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Ko(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ra(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Bt(_.h,u))){if(!u.K&&Bt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)qs(_),Ln(_);else break e;Ws(_),st(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=An(S(_.Za,_),6e3));if(1>=Pl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Tr(_,11)}else if((u.K||_.g==u)&&qs(_),!B(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let be=F[m];if(_.T=be[0],be=be[1],_.G==2)if(be[0]=="c"){_.K=be[1],_.ia=be[2];const Tt=be[3];Tt!=null&&(_.la=Tt,_.j.info("VER="+_.la));const lt=be[4];lt!=null&&(_.Aa=lt,_.j.info("SVER="+_.Aa));const gn=be[5];gn!=null&&typeof gn=="number"&&0<gn&&(w=1.5*gn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const an=u.g;if(an){const Ki=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var q=w.h;q.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ia(q,q.h),q.h=null))}if(w.D){const Qs=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(w.ya=Qs,$e(w.I,w.D,Qs))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var re=u;if(w.qa=Bl(w,w.J?w.ia:null,w.W),re.K){xl(w.h,re);var Be=re,mt=w.L;mt&&(Be.I=mt),Be.B&&(zi(Be),We(Be)),w.g=re}else qi(w);0<_.i.length&&Yn(_)}else be[0]!="stop"&&be[0]!="close"||Tr(_,7);else _.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Tr(_,7):kt(_):be[0]!="noop"&&_.l&&_.l.ta(be),_.v=0)}}yr(4)}catch{}}var kl=class{constructor(u,m){this.g=u,this.map=m}};function ji(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Pl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ia(u,m){u.g?u.g.add(m):u.h=m}function xl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ji.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Nl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return z(u.i)}function Ms(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Fs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Fs(u),w=Ms(u),F=w.length,q=0;q<F;q++)m.call(void 0,w[q],_&&_[q],u)}var Bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),F=null;if(0<=w){var q=u[_].substring(0,w);F=u[_].substring(w+1)}else q=u[_];m(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,$i(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var m=u.i,_=new Kn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Gr(this,_),this.m=u.m}else u&&(m=String(u).match(Bi))?(this.h=!1,$i(this,m[1]||"",!0),this.o=xe(m[2]||""),this.g=xe(m[3]||"",!0),Kr(this,m[4]),this.l=xe(m[5]||"",!0),Gr(this,m[6]||"",!0),this.m=xe(m[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}_r.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Yr(m,Us,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Yr(m,Us,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Yr(_,_.charAt(0)=="/"?Ll:bl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Yr(_,sa)),u.join("")};function sn(u){return new _r(u)}function $i(u,m,_){u.j=_?xe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Gr(u,m,_){m instanceof Kn?(u.i=m,Gn(u.i,u.h)):(_||(m=Yr(m,Ol)),u.i=new Kn(m,u.h))}function $e(u,m,_){u.i.set(m,_)}function Qr(u){return $e(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Dl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Dl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Us=/[#\/\?@]/g,bl=/[#\?:]/g,Ll=/[#\?]/g,Ol=/[#\?@]/g,sa=/#/g;function Kn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Ct(u){u.g||(u.g=new Map,u.h=0,u.i&&Jc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Kn.prototype,n.add=function(u,m){Ct(this),this.i=null,u=mn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function xn(u,m){Ct(u),m=mn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Nn(u,m){return Ct(u),m=mn(u,m),u.g.has(m)}n.forEach=function(u,m){Ct(this),this.g.forEach(function(_,w){_.forEach(function(F){u.call(m,F,w,this)},this)},this)},n.na=function(){Ct(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const F=u[w];for(let q=0;q<F.length;q++)_.push(m[w])}return _},n.V=function(u){Ct(this);let m=[];if(typeof u=="string")Nn(this,u)&&(m=m.concat(this.g.get(mn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Ct(this),this.i=null,u=mn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Xr(u,m,_){xn(u,m),0<_.length&&(u.i=null,u.g.set(mn(u,m),z(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const q=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var F=q;re[w]!==""&&(F+="="+encodeURIComponent(String(re[w]))),u.push(F)}}return this.i=u.join("&")};function mn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Gn(u,m){m&&!u.j&&(Ct(u),u.i=null,u.g.forEach(function(_,w){var F=w.toLowerCase();w!=F&&(xn(this,w),Xr(this,F,_))},u)),u.j=m}function Zc(u,m){const _=new Mi;if(h.Image){const w=new Image;w.onload=N(Kt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=N(Kt,_,"TestLoadImage: error",!1,m,w),w.onabort=N(Kt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=N(Kt,_,"TestLoadImage: timeout",!1,m,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Vl(u,m){const _=new Mi,w=new AbortController,F=setTimeout(()=>{w.abort(),Kt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(q=>{clearTimeout(F),q.ok?Kt(_,"TestPingServer: ok",!0,m):Kt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Kt(_,"TestPingServer: error",!1,m)})}function Kt(u,m,_,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(_)}catch{}}function ed(){this.g=new Yo}function Ml(u,m,_){const w=_||"";try{qr(u,function(F,q){let re=F;y(F)&&(re=Go(F)),m.push(w+q+"="+encodeURIComponent(re))})}catch(F){throw m.push(w+"type="+encodeURIComponent("_badmap")),F}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}V(vr,Oi),vr.prototype.g=function(){return new Hi(this.l,this.j)},vr.prototype.i=function(u){return function(){return u}}({});function Hi(u,m){ft.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Hi,ft),n=Hi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,bn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Dn(this):bn(this),this.readyState==3&&Fl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},n.Qa=function(u){this.g&&(this.response=u,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,bn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function bn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Er(u){let m="";return he(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function Jr(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Er(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):$e(u,m,_))}function Ye(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ye,ft);var td=/^https?$/i,oa=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?Ps(this.o):Ps(kn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){Wi(this,q);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)_.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const q of w.keys())_.set(q,w.get(q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),F=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(oa,m,void 0))||w||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,re]of _)this.g.setRequestHeader(q,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{js(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){Wi(this,q)}};function Wi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,zs(u),on(u)}function zs(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},n.bb=function(){aa(this)};function aa(u){if(u.h&&typeof d<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Wo(u.Ea,0,u);else if(pt(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=re===0){var F=String(u.D).match(Bi)[1]||null;!F&&h.self&&h.self.location&&(F=h.self.location.protocol.slice(0,-1)),w=!td.test(F?F.toLowerCase():"")}_=w}if(_)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var q=2<Gt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",zs(u)}}finally{on(u)}}}}function on(u,m){if(u.g){js(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{_.onreadystatechange=w}catch{}}}function js(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Qo(m)}};function la(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Bs(u){const m={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(B(u[w]))continue;var _=D(u[w]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[F]||[];m[F]=q,q.push(_)}k(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ua(u){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,u),this.cb=Qn("retryDelaySeedMs",1e4,u),this.Wa=Qn("forwardChannelMaxRetries",2,u),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ji(u&&u.concurrentRequestLimit),this.Da=new ed,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ua.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){st(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Bl(this,null,this.W),Yn(this)};function kt(u){if($s(u),u.G==3){var m=u.U++,_=sn(u.I);if($e(_,"SID",u.K),$e(_,"RID",m),$e(_,"TYPE","terminate"),wr(u,_),m=new Pn(u,u.j,m),m.L=2,m.v=Qr(sn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.v,_=!0),_||(m.g=$l(m.j,null),m.g.ea(m.v)),m.F=Date.now(),We(m)}jl(u)}function Ln(u){u.g&&(ca(u),u.g.cancel(),u.g=null)}function $s(u){Ln(u),u.u&&(h.clearTimeout(u.u),u.u=null),qs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function Yn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Me||se(),ne||(Me(),ne=!0),me.add(m,u),u.B=0}}function nd(u,m){return Pl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(S(u.Ga,u,m),zl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Pn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=I(q),P(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Zr(this,F,m),_=sn(this.I),$e(_,"RID",u),$e(_,"CVER",22),this.D&&$e(_,"X-HTTP-Session-Id",this.D),wr(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Er(q)))+"&"+m:this.m&&Jr(_,this.m,q)),ia(this.h,F),this.Ua&&$e(_,"TYPE","init"),this.P?($e(_,"$req",m),$e(_,"SID","null"),F.T=!0,Vs(F,_,null)):Vs(F,_,m),this.G=2}}else this.G==3&&(u?Hs(this,u):this.i.length==0||rn(this.h)||Hs(this))};function Hs(u,m){var _;m?_=m.l:_=u.U++;const w=sn(u.I);$e(w,"SID",u.K),$e(w,"RID",_),$e(w,"AID",u.T),wr(u,w),u.m&&u.o&&Jr(w,u.m,u.o),_=new Pn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Zr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ia(u.h,_),Vs(_,w,m)}function wr(u,m){u.H&&he(u.H,function(_,w){$e(m,w,_)}),u.l&&qr({},function(_,w){$e(m,w,_)})}function Zr(u,m,_){_=Math.min(u.i.length,_);var w=u.l?S(u.l.Na,u.l,u):null;e:{var F=u.i;let q=-1;for(;;){const re=["count="+_];q==-1?0<_?(q=F[0].g,re.push("ofs="+q)):q=0:re.push("ofs="+q);let Be=!0;for(let mt=0;mt<_;mt++){let be=F[mt].g;const Tt=F[mt].map;if(be-=q,0>be)q=Math.max(0,F[mt].g-100),Be=!1;else try{Ml(Tt,re,"req"+be+"_")}catch{w&&w(Tt)}}if(Be){w=re.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function qi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Me||se(),ne||(Me(),ne=!0),me.add(m,u),u.v=0}}function Ws(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(S(u.Fa,u),zl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Ln(this),Ul(this))};function ca(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function Ul(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);$e(m,"RID","rpc"),$e(m,"SID",u.K),$e(m,"AID",u.T),$e(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&$e(m,"TO",u.ja),$e(m,"TYPE","xmlhttp"),wr(u,m),u.m&&u.o&&Jr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Qr(sn(m)),_.m=null,_.P=!0,na(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),Ws(this),st(19))};function qs(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Ks(u,m){var _=null;if(u.g==m){qs(u),ca(u),u.g=null;var w=2}else if(Bt(u.h,m))_=m.D,xl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;w=Vi(),pt(w,new Ds(w,_)),Yn(u)}else qi(u);else if(F=m.s,F==3||F==0&&0<m.X||!(w==1&&nd(u,m)||w==2&&Ws(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:Tr(u,5);break;case 4:Tr(u,10);break;case 3:Tr(u,6);break;default:Tr(u,2)}}}function zl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Tr(u,m){if(u.j.info("Error code "+m),m==2){var _=S(u.fb,u),w=u.Xa;const F=!w;w=new _r(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||$i(w,"https"),Qr(w),F?Zc(w.toString(),_):Vl(w.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(m),jl(u),$s(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function jl(u){if(u.G=0,u.ka=[],u.l){const m=Nl(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function Bl(u,m,_){var w=_ instanceof _r?sn(_):new _r(_);if(w.g!="")m&&(w.g=m+"."+w.g),Kr(w,w.s);else{var F=h.location;w=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var q=new _r(null);w&&$i(q,w),m&&(q.g=m),F&&Kr(q,F),_&&(q.l=_),w=q}return _=u.D,m=u.ya,_&&m&&$e(w,_,m),$e(w,"VER",u.la),wr(u,w),w}function $l(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ye(new vr({eb:_})):new Ye(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function da(){}n=da.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gs(){}Gs.prototype.g=function(u,m){return new $t(u,m)};function $t(u,m){ft.call(this),this.g=new ua(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!B(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!B(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Xn(this)}V($t,ft),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){kt(this.g)},$t.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Go(u),u=_);m.i.push(new kl(m.Ya++,u)),m.G==3&&Yn(m)},$t.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,$t.aa.N.call(this)};function Hl(u){Wn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}V(Hl,Wn);function Wl(){Ns.call(this),this.status=1}V(Wl,Ns);function Xn(u){this.g=u}V(Xn,da),Xn.prototype.ua=function(){pt(this.g,"a")},Xn.prototype.ta=function(u){pt(this.g,new Hl(u))},Xn.prototype.sa=function(u){pt(this.g,new Wl)},Xn.prototype.ra=function(){pt(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,qv=function(){return new Gs},Wv=function(){return Vi()},Hv=qn,tf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ls.NO_ERROR=0,Ls.TIMEOUT=8,Ls.HTTP_ERROR=6,Zu=Ls,Sl.COMPLETE="complete",$v=Sl,xs.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,za=xs,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Bv=Ye}).apply(typeof ju<"u"?ju:typeof self<"u"?self:typeof window<"u"?window:{});const Sy="@firebase/firestore";/**
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
 */let Mo="11.2.0";/**
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
 */const ps=new Pc("@firebase/firestore");function yo(){return ps.logLevel}function oe(n,...e){if(ps.logLevel<=ke.DEBUG){const t=e.map($f);ps.debug(`Firestore (${Mo}): ${n}`,...t)}}function Ur(n,...e){if(ps.logLevel<=ke.ERROR){const t=e.map($f);ps.error(`Firestore (${Mo}): ${n}`,...t)}}function Ao(n,...e){if(ps.logLevel<=ke.WARN){const t=e.map($f);ps.warn(`Firestore (${Mo}): ${n}`,...t)}}function $f(n){if(typeof n=="string")return n;try{/**
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: `+n;throw Ur(e),new Error(e)}function je(n,e){n||Te()}function Se(n,e){return n}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends Hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ut.UNAUTHENTICATED))}shutdown(){}}class c1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class d1{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ii;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ii,e.enqueueRetryable(()=>o(this.currentUser))};const d=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},h=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(p=>h(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ii)}},0),d()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string"),new Kv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new Ut(e)}}class h1{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class f1{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new h1(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){je(this.o===void 0);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const d=l.token!==this.R;return this.R=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string"),this.R=t.token,new p1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function g1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Gv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=g1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Ne(n,e){return n<e?-1:n>e?1:0}function Co(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new vt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _e(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class nr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=nr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=nr.isNumericId(e),o=nr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?nr.extractNumericId(e).compare(nr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ti.fromString(e.substring(4,e.length-2))}}class it extends nr{construct(e,t,i){return new it(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new _e(Z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const y1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends nr{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return y1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new _e(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let d=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new _e(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new _e(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else h==="`"?(d=!d,o++):h!=="."||d?(i+=h,o++):(l(),o++)}if(l(),d)throw new _e(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
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
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(it.fromString(e))}static fromName(e){return new ve(it.fromString(e).popFirst(5))}static empty(){return new ve(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new it(e.slice()))}}function _1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new Ri(o,ve.empty(),e)}function v1(n){return new Ri(n.readTime,n.key,-1)}class Ri{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ri(Ie.min(),ve.empty(),-1)}static max(){return new Ri(Ie.max(),ve.empty(),-1)}}function E1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const w1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fo(n){if(n.code!==Z.FAILED_PRECONDITION||n.message!==w1)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,i)=>{t(e)})}static reject(e){return new G((t,i)=>{i(e)})}static waitFor(e){return new G((t,i)=>{let o=0,l=0,d=!1;e.forEach(h=>{++o,h.next(()=>{++l,d&&l===o&&t()},p=>i(p))}),d=!0,l===o&&t()})}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next(o=>o?G.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new G((i,o)=>{const l=e.length,d=new Array(l);let h=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{d[y]=E,++h,h===l&&i(d)},E=>o(E))}})}static doWhile(e,t){return new G((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function I1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Uo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Oc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Oc.oe=-1;function Vc(n){return n==null}function mc(n){return n===0&&1/n==-1/0}function S1(n){return typeof n=="number"&&Number.isInteger(n)&&!mc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function R1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ry(e)),e=A1(n.get(t),e);return Ry(e)}function A1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Ry(n){return n+""}/**
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
 */function Ay(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Es(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bu(this.root,e,this.comparator,!0)}}class Bu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cy(this.data.getIterator())}getIteratorFrom(e){return new Cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new jn([])}unionWith(e){let t=new Et(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Yv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Yv("Invalid base64 string: "+l):l}}(e);return new bt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let d=0;d<o.length;++d)l+=String.fromCharCode(o[d]);return l}(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const C1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(n){if(je(!!n),typeof n=="string"){let e=0;const t=C1.exec(n);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ci(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
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
 */function Hf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Mc(n){const e=n.mapValue.fields.__previous_value__;return Hf(e)?Mc(e):e}function el(n){const e=Ai(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
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
 */class k1{constructor(e,t,i,o,l,d,h,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=d,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=y}}class tl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $u={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ki(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hf(n)?4:x1(n)?9007199254740991:P1(n)?10:11:Te()}function cr(n,e){if(n===e)return!0;const t=ki(n);if(t!==ki(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return el(n).isEqual(el(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const d=Ai(o.timestampValue),h=Ai(l.timestampValue);return d.seconds===h.seconds&&d.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Ci(o.bytesValue).isEqual(Ci(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const d=at(o.doubleValue),h=at(l.doubleValue);return d===h?mc(d)===mc(h):isNaN(d)&&isNaN(h)}return!1}(n,e);case 9:return Co(n.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return function(o,l){const d=o.mapValue.fields||{},h=l.mapValue.fields||{};if(Ay(d)!==Ay(h))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(h[p]===void 0||!cr(d[p],h[p])))return!1;return!0}(n,e);default:return Te()}}function nl(n,e){return(n.values||[]).find(t=>cr(t,e))!==void 0}function ko(n,e){if(n===e)return 0;const t=ki(n),i=ki(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(l,d){const h=at(l.integerValue||l.doubleValue),p=at(d.integerValue||d.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1}(n,e);case 3:return ky(n.timestampValue,e.timestampValue);case 4:return ky(el(n),el(e));case 5:return Ne(n.stringValue,e.stringValue);case 6:return function(l,d){const h=Ci(l),p=Ci(d);return h.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,d){const h=l.split("/"),p=d.split("/");for(let y=0;y<h.length&&y<p.length;y++){const E=Ne(h[y],p[y]);if(E!==0)return E}return Ne(h.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,d){const h=Ne(at(l.latitude),at(d.latitude));return h!==0?h:Ne(at(l.longitude),at(d.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Py(n.arrayValue,e.arrayValue);case 10:return function(l,d){var h,p,y,E;const T=l.fields||{},S=d.fields||{},N=(h=T.value)===null||h===void 0?void 0:h.arrayValue,V=(p=S.value)===null||p===void 0?void 0:p.arrayValue,z=Ne(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((E=V==null?void 0:V.values)===null||E===void 0?void 0:E.length)||0);return z!==0?z:Py(N,V)}(n.mapValue,e.mapValue);case 11:return function(l,d){if(l===$u.mapValue&&d===$u.mapValue)return 0;if(l===$u.mapValue)return 1;if(d===$u.mapValue)return-1;const h=l.fields||{},p=Object.keys(h),y=d.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const S=Ne(p[T],E[T]);if(S!==0)return S;const N=ko(h[p[T]],y[E[T]]);if(N!==0)return N}return Ne(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Te()}}function ky(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=Ai(n),i=Ai(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function Py(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=ko(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function Po(n){return nf(n)}function nf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ai(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ci(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=nf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const d of i)l?l=!1:o+=",",o+=`${d}:${nf(t.fields[d])}`;return o+"}"}(n.mapValue):Te()}function ec(n){switch(ki(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mc(n);return e?16+ec(e):16;case 5:return 2*n.stringValue.length;case 6:return Ci(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+ec(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Es(i.fields,(l,d)=>{o+=l.length+ec(d)}),o}(n.mapValue);default:throw Te()}}function rf(n){return!!n&&"integerValue"in n}function Wf(n){return!!n&&"arrayValue"in n}function xy(n){return!!n&&"nullValue"in n}function Ny(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tc(n){return!!n&&"mapValue"in n}function P1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Wa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Es(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Wa(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function x1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!tc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach((d,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=h.popLast()}d?i[h.lastSegment()]=Wa(d):o.push(h.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());tc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];tc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Es(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new In(Wa(this.value))}}function Xv(n){const e=[];return Es(n.fields,(t,i)=>{const o=new Dt([t]);if(tc(i)){const l=Xv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const d of l)e.push(o.child(d))}else e.push(o)}),new jn(e)}/**
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
 */class gc{constructor(e,t){this.position=e,this.inclusive=t}}function Dy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],d=n.position[o];if(l.field.isKeyField()?i=ve.comparator(ve.fromName(d.referenceValue),t.key):i=ko(d,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function by(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!cr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class yc{constructor(e,t="asc"){this.field=e,this.dir=t}}function N1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Jv{}class _t extends Jv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new b1(e,t,i):t==="array-contains"?new V1(e,i):t==="in"?new M1(e,i):t==="not-in"?new F1(e,i):t==="array-contains-any"?new U1(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new L1(e,i):new O1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ko(t,this.value)):t!==null&&ki(this.value)===ki(t)&&this.matchesComparison(ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends Jv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new dr(e,t)}matches(e){return Zv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zv(n){return n.op==="and"}function eE(n){return D1(n)&&Zv(n)}function D1(n){for(const e of n.filters)if(e instanceof dr)return!1;return!0}function sf(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+Po(n.value);if(eE(n))return n.filters.map(e=>sf(e)).join(",");{const e=n.filters.map(t=>sf(t)).join(",");return`${n.op}(${e})`}}function tE(n,e){return n instanceof _t?function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&cr(i.value,o.value)}(n,e):n instanceof dr?function(i,o){return o instanceof dr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,d,h)=>l&&tE(d,o.filters[h]),!0):!1}(n,e):void Te()}function nE(n){return n instanceof _t?function(t){return`${t.field.canonicalString()} ${t.op} ${Po(t.value)}`}(n):n instanceof dr?function(t){return t.op.toString()+" {"+t.getFilters().map(nE).join(" ,")+"}"}(n):"Filter"}class b1 extends _t{constructor(e,t,i){super(e,t,i),this.key=ve.fromName(i.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class L1 extends _t{constructor(e,t){super(e,"in",t),this.keys=rE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class O1 extends _t{constructor(e,t){super(e,"not-in",t),this.keys=rE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ve.fromName(i.referenceValue))}class V1 extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wf(t)&&nl(t.arrayValue,this.value)}}class M1 extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nl(this.value.arrayValue,t)}}class F1 extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!nl(this.value.arrayValue,t)}}class U1 extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>nl(this.value.arrayValue,i))}}/**
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
 */class z1{constructor(e,t=null,i=[],o=[],l=null,d=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=d,this.endAt=h,this.ue=null}}function Ly(n,e=null,t=[],i=[],o=null,l=null,d=null){return new z1(n,e,t,i,o,l,d)}function qf(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>sf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Po(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Po(i)).join(",")),e.ue=t}return e.ue}function Kf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!N1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!by(n.startAt,e.startAt)&&by(n.endAt,e.endAt)}function of(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fc{constructor(e,t=null,i=[],o=[],l=null,d="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=d,this.startAt=h,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function j1(n,e,t,i,o,l,d,h){return new Fc(n,e,t,i,o,l,d,h)}function Gf(n){return new Fc(n)}function Oy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function B1(n){return n.collectionGroup!==null}function qa(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let h=new Et(Dt.comparator);return d.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(h=h.add(y.field))})}),h})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new yc(l,i))}),t.has(Dt.keyField().canonicalString())||e.ce.push(new yc(Dt.keyField(),i))}return e.ce}function or(n){const e=Se(n);return e.le||(e.le=$1(e,qa(n))),e.le}function $1(n,e){if(n.limitType==="F")return Ly(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new yc(o.field,l)});const t=n.endAt?new gc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new gc(n.startAt.position,n.startAt.inclusive):null;return Ly(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function af(n,e,t){return new Fc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Uc(n,e){return Kf(or(n),or(e))&&n.limitType===e.limitType}function iE(n){return`${qf(or(n))}|lt:${n.limitType}`}function _o(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>nE(o)).join(", ")}]`),Vc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Po(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Po(o)).join(",")),`Target(${i})`}(or(n))}; limitType=${n.limitType})`}function zc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ve.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of qa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(d,h,p){const y=Dy(d,h,p);return d.inclusive?y<=0:y<0}(i.startAt,qa(i),o)||i.endAt&&!function(d,h,p){const y=Dy(d,h,p);return d.inclusive?y>=0:y>0}(i.endAt,qa(i),o))}(n,e)}function H1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function sE(n){return(e,t)=>{let i=!1;for(const o of qa(n)){const l=W1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function W1(n,e,t){const i=n.field.isKeyField()?ve.comparator(e.key,t.key):function(l,d,h){const p=d.data.field(l),y=h.data.field(l);return p!==null&&y!==null?ko(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
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
 */class ws{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Qv(this.inner)}size(){return this.innerSize}}/**
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
 */const q1=new nt(ve.comparator);function zr(){return q1}const oE=new nt(ve.comparator);function ja(...n){let e=oE;for(const t of n)e=e.insert(t.key,t);return e}function aE(n){let e=oE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ls(){return Ka()}function lE(){return Ka()}function Ka(){return new ws(n=>n.toString(),(n,e)=>n.isEqual(e))}const K1=new nt(ve.comparator),G1=new Et(ve.comparator);function Pe(...n){let e=G1;for(const t of n)e=e.add(t);return e}const Q1=new Et(Ne);function Y1(){return Q1}/**
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
 */function Qf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function uE(n){return{integerValue:""+n}}function X1(n,e){return S1(e)?uE(e):Qf(n,e)}/**
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
 */class jc{constructor(){this._=void 0}}function J1(n,e,t){return n instanceof _c?function(o,l){const d={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Hf(l)&&(l=Mc(l)),l&&(d.fields.__previous_value__=l),{mapValue:d}}(t,e):n instanceof rl?dE(n,e):n instanceof il?hE(n,e):function(o,l){const d=cE(o,l),h=Vy(d)+Vy(o.Pe);return rf(d)&&rf(o.Pe)?uE(h):Qf(o.serializer,h)}(n,e)}function Z1(n,e,t){return n instanceof rl?dE(n,e):n instanceof il?hE(n,e):t}function cE(n,e){return n instanceof vc?function(i){return rf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class _c extends jc{}class rl extends jc{constructor(e){super(),this.elements=e}}function dE(n,e){const t=fE(e);for(const i of n.elements)t.some(o=>cr(o,i))||t.push(i);return{arrayValue:{values:t}}}class il extends jc{constructor(e){super(),this.elements=e}}function hE(n,e){let t=fE(e);for(const i of n.elements)t=t.filter(o=>!cr(o,i));return{arrayValue:{values:t}}}class vc extends jc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Vy(n){return at(n.integerValue||n.doubleValue)}function fE(n){return Wf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ek(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof rl&&o instanceof rl||i instanceof il&&o instanceof il?Co(i.elements,o.elements,cr):i instanceof vc&&o instanceof vc?cr(i.Pe,o.Pe):i instanceof _c&&o instanceof _c}(n.transform,e.transform)}class tk{constructor(e,t){this.version=e,this.transformResults=t}}class Vr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vr}static exists(e){return new Vr(void 0,e)}static updateTime(e){return new Vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bc{}function pE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new gE(n.key,Vr.none()):new yl(n.key,n.data,Vr.none());{const t=n.data,i=In.empty();let o=new Et(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let d=t.field(l);d===null&&l.length>1&&(l=l.popLast(),d=t.field(l)),d===null?i.delete(l):i.set(l,d),o=o.add(l)}return new Ts(n.key,i,new jn(o.toArray()),Vr.none())}}function nk(n,e,t){n instanceof yl?function(o,l,d){const h=o.value.clone(),p=Fy(o.fieldTransforms,l,d.transformResults);h.setAll(p),l.convertToFoundDocument(d.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Ts?function(o,l,d){if(!nc(o.precondition,l))return void l.convertToUnknownDocument(d.version);const h=Fy(o.fieldTransforms,l,d.transformResults),p=l.data;p.setAll(mE(o)),p.setAll(h),l.convertToFoundDocument(d.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,d){l.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,t)}function Ga(n,e,t,i){return n instanceof yl?function(l,d,h,p){if(!nc(l.precondition,d))return h;const y=l.value.clone(),E=Uy(l.fieldTransforms,p,d);return y.setAll(E),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ts?function(l,d,h,p){if(!nc(l.precondition,d))return h;const y=Uy(l.fieldTransforms,p,d),E=d.data;return E.setAll(mE(l)),E.setAll(y),d.convertToFoundDocument(d.version,E).setHasLocalMutations(),h===null?null:h.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,d,h){return nc(l.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):h}(n,e,t)}function rk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=cE(i.transform,o||null);l!=null&&(t===null&&(t=In.empty()),t.set(i.field,l))}return t||null}function My(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Co(i,o,(l,d)=>ek(l,d))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yl extends Bc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ts extends Bc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function mE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Fy(n,e,t){const i=new Map;je(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],d=l.transform,h=e.data.field(l.field);i.set(l.field,Z1(d,h,t[o]))}return i}function Uy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,d=t.data.field(o.field);i.set(o.field,J1(l,d,e))}return i}class gE extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ik extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&nk(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ga(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ga(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=lE();return this.mutations.forEach(o=>{const l=e.get(o.key),d=l.overlayedDocument;let h=this.applyToLocalView(d,l.mutatedFields);h=t.has(o.key)?null:h;const p=pE(d,h);p!==null&&i.set(o.key,p),d.isValidDocument()||d.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(t,i)=>My(t,i))&&Co(this.baseMutations,e.baseMutations,(t,i)=>My(t,i))}}class Yf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length);let o=function(){return K1}();const l=e.mutations;for(let d=0;d<l.length;d++)o=o.insert(l[d].key,i[d].version);return new Yf(e,t,i,o)}}/**
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
 */class ok{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ak{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,Le;function lk(n){switch(n){default:return Te();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0}}function yE(n){if(n===void 0)return Ur("GRPC error has no .code"),Z.UNKNOWN;switch(n){case ct.OK:return Z.OK;case ct.CANCELLED:return Z.CANCELLED;case ct.UNKNOWN:return Z.UNKNOWN;case ct.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case ct.INTERNAL:return Z.INTERNAL;case ct.UNAVAILABLE:return Z.UNAVAILABLE;case ct.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case ct.NOT_FOUND:return Z.NOT_FOUND;case ct.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case ct.ABORTED:return Z.ABORTED;case ct.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case ct.DATA_LOSS:return Z.DATA_LOSS;default:return Te()}}(Le=ct||(ct={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uk(){return new TextEncoder}/**
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
 */const ck=new Ti([4294967295,4294967295],0);function zy(n){const e=uk().encode(n),t=new jv;return t.update(e),new Uint8Array(t.digest())}function jy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ti([t,i],0),new Ti([o,l],0)]}class Xf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ba(`Invalid padding: ${t}`);if(i<0)throw new Ba(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ti.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Ti.fromNumber(i)));return o.compare(ck)===1&&(o=new Ti([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=zy(e),[i,o]=jy(t);for(let l=0;l<this.hashCount;l++){const d=this.de(i,o,l);if(!this.Ee(d))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),d=new Xf(l,o,t);return i.forEach(h=>d.insert(h)),d}insert(e){if(this.Te===0)return;const t=zy(e),[i,o]=jy(t);for(let l=0;l<this.hashCount;l++){const d=this.de(i,o,l);this.Ae(d)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $c{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,_l.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new $c(Ie.min(),o,new nt(Ne),zr(),Pe())}}class _l{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new _l(i,t,Pe(),Pe(),Pe())}}/**
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
 */class rc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class _E{constructor(e,t){this.targetId=e,this.me=t}}class vE{constructor(e,t,i=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class By{constructor(){this.fe=0,this.ge=$y(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new _l(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=$y()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dk{constructor(e){this.Be=e,this.Le=new Map,this.ke=zr(),this.qe=Hu(),this.Qe=Hu(),this.Ke=new nt(Ne)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(of(l))if(i===0){const d=new ve(l.path);this.We(t,d,zt.newNoDocument(d,Ie.min()))}else je(i===1);else{const d=this.Ze(t);if(d!==i){const h=this.Xe(e),p=h?this.et(h,e,d):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let d,h;try{d=Ci(i).toUint8Array()}catch(p){if(p instanceof Yv)return Ao("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new Xf(d,o,l)}catch(p){return Ao(p instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.Te===0?null:h}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const d=this.Be.nt(),h=`projects/${d.projectId}/databases/${d.database}/documents/${l.path.canonicalString()}`;e.mightContain(h)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((l,d)=>{const h=this.Ye(d);if(h){if(l.current&&of(h.target)){const p=new ve(h.target.path);this.st(p).has(d)||this.ot(d,p)||this.We(d,p,zt.newNoDocument(p,e))}l.be&&(t.set(d,l.ve()),l.Ce())}});let i=Pe();this.Qe.forEach((l,d)=>{let h=!0;d.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(l))}),this.ke.forEach((l,d)=>d.setReadTime(e));const o=new $c(e,t,this.Ke,this.ke,i);return this.ke=zr(),this.qe=Hu(),this.Qe=Hu(),this.Ke=new nt(Ne),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new By,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Et(Ne),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Et(Ne),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new By),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Hu(){return new nt(ve.comparator)}function $y(){return new nt(ve.comparator)}const hk={asc:"ASCENDING",desc:"DESCENDING"},fk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pk={and:"AND",or:"OR"};class mk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lf(n,e){return n.useProto3Json||Vc(e)?e:{value:e}}function Ec(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gk(n,e){return Ec(n,e.toTimestamp())}function ar(n){return je(!!n),Ie.fromTimestamp(function(t){const i=Ai(t);return new vt(i.seconds,i.nanos)}(n))}function Jf(n,e){return uf(n,e).canonicalString()}function uf(n,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function wE(n){const e=it.fromString(n);return je(AE(e)),e}function cf(n,e){return Jf(n.databaseId,e.path)}function Uh(n,e){const t=wE(e);if(t.get(1)!==n.databaseId.projectId)throw new _e(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _e(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(IE(t))}function TE(n,e){return Jf(n.databaseId,e)}function yk(n){const e=wE(n);return e.length===4?it.emptyPath():IE(e)}function df(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function IE(n){return je(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hy(n,e,t){return{name:cf(n,e),fields:t.value.mapValue.fields}}function _k(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(je(E===void 0||typeof E=="string"),bt.fromBase64String(E||"")):(je(E===void 0||E instanceof Buffer||E instanceof Uint8Array),bt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),d=e.targetChange.cause,h=d&&function(y){const E=y.code===void 0?Z.UNKNOWN:yE(y.code);return new _e(E,y.message||"")}(d);t=new vE(i,o,l,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Uh(n,i.document.name),l=ar(i.document.updateTime),d=i.document.createTime?ar(i.document.createTime):Ie.min(),h=new In({mapValue:{fields:i.document.fields}}),p=zt.newFoundDocument(o,l,d,h),y=i.targetIds||[],E=i.removedTargetIds||[];t=new rc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Uh(n,i.document),l=i.readTime?ar(i.readTime):Ie.min(),d=zt.newNoDocument(o,l),h=i.removedTargetIds||[];t=new rc([],h,d.key,d)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Uh(n,i.document),l=i.removedTargetIds||[];t=new rc([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,d=new ak(o,l),h=i.targetId;t=new _E(h,d)}}return t}function vk(n,e){let t;if(e instanceof yl)t={update:Hy(n,e.key,e.value)};else if(e instanceof gE)t={delete:cf(n,e.key)};else if(e instanceof Ts)t={update:Hy(n,e.key,e.data),updateMask:kk(e.fieldMask)};else{if(!(e instanceof ik))return Te();t={verify:cf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,d){const h=d.transform;if(h instanceof _c)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof rl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof il)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof vc)return{fieldPath:d.field.canonicalString(),increment:h.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:gk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function Ek(n,e){return n&&n.length>0?(je(e!==void 0),n.map(t=>function(o,l){let d=o.updateTime?ar(o.updateTime):ar(l);return d.isEqual(Ie.min())&&(d=ar(l)),new tk(d,o.transformResults||[])}(t,e))):[]}function wk(n,e){return{documents:[TE(n,e.path)]}}function Tk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=TE(n,o);const l=function(y){if(y.length!==0)return RE(dr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const d=function(y){if(y.length!==0)return y.map(E=>function(S){return{field:vo(S.field),direction:Rk(S.dir)}}(E))}(e.orderBy);d&&(t.structuredQuery.orderBy=d);const h=lf(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function Ik(n){let e=yk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const S=SE(T);return S instanceof dr&&eE(S)?S.getFilters():[S]}(t.where));let d=[];t.orderBy&&(d=function(T){return T.map(S=>function(V){return new yc(Eo(V.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(S))}(t.orderBy));let h=null;t.limit&&(h=function(T){let S;return S=typeof T=="object"?T.value:T,Vc(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,N=T.values||[];return new gc(N,S)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const S=!T.before,N=T.values||[];return new gc(N,S)}(t.endAt)),j1(e,o,d,l,h,"F",p,y)}function Sk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function SE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Eo(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Eo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Eo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Eo(t.unaryFilter.field);return _t.create(d,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return _t.create(Eo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return dr.create(t.compositeFilter.filters.map(i=>SE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function Rk(n){return hk[n]}function Ak(n){return fk[n]}function Ck(n){return pk[n]}function vo(n){return{fieldPath:n.canonicalString()}}function Eo(n){return Dt.fromServerFormat(n.fieldPath)}function RE(n){return n instanceof _t?function(t){if(t.op==="=="){if(Ny(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(xy(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ny(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(xy(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:Ak(t.op),value:t.value}}}(n):n instanceof dr?function(t){const i=t.getFilters().map(o=>RE(o));return i.length===1?i[0]:{compositeFilter:{op:Ck(t.op),filters:i}}}(n):Te()}function kk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function AE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Pk{constructor(e){this.ht=e}}function xk(n){const e=Ik({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?af(e,e.limit,"L"):e}/**
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
 */class Nk{constructor(){this.ln=new Dk}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ri.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class Dk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(it.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(it.comparator)).toArray()}}/**
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
 */const Wy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */function qy([n,e],[t,i]){const o=Ne(n,t);return o===0?Ne(e,i):o}class bk{constructor(e){this.Gn=e,this.buffer=new Et(qy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();qy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Lk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){oe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Uo(t)?oe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Fo(t)}await this.Yn(3e5)})}}class Ok{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Oc.oe);const i=new bk(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Wy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,d,h,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,d=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,h=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),yo()<=ke.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-E}ms
	Determined least recently used ${o} in `+(h-d)+`ms
	Removed ${l} targets in `+(p-h)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function Vk(n,e){return new Ok(n,e)}/**
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
 */class Mk{constructor(){this.changes=new ws(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Fk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Uk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ga(i.mutation,o,jn.empty(),vt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const o=ls();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let d=ja();return l.forEach((h,p)=>{d=d.insert(h,p.overlayedDocument)}),d}))}getOverlayedDocuments(e,t){const i=ls();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((d,h)=>{t.set(d,h)})})}computeViews(e,t,i,o){let l=zr();const d=Ka(),h=function(){return Ka()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Ts)?l=l.insert(y.key,y):E!==void 0?(d.set(y.key,E.mutation.getFieldMask()),Ga(E.mutation,y,E.mutation.getFieldMask(),vt.now())):d.set(y.key,jn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>d.set(y,E)),t.forEach((y,E)=>{var T;return h.set(y,new Fk(E,(T=d.get(y))!==null&&T!==void 0?T:null))}),h))}recalculateAndSaveOverlays(e,t){const i=Ka();let o=new nt((d,h)=>d-h),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(d=>{for(const h of d)h.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||jn.empty();E=h.applyToLocalView(y,E),i.set(p,E);const T=(o.get(h.batchId)||Pe()).add(p);o=o.insert(h.batchId,T)})}).next(()=>{const d=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),y=p.key,E=p.value,T=lE();E.forEach(S=>{if(!l.has(S)){const N=pE(t.get(S),i.get(S));N!==null&&T.set(S,N),l=l.add(S)}}),d.push(this.documentOverlayCache.saveOverlays(e,y,T))}return G.waitFor(d)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(d){return ve.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):B1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const d=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(ls());let h=-1,p=l;return d.next(y=>G.forEach(y,(E,T)=>(h<T.largestBatchId&&(h=T.largestBatchId),l.get(E)?G.resolve():this.remoteDocumentCache.getEntry(e,E).next(S=>{p=p.insert(E,S)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Pe())).next(E=>({batchId:h,changes:aE(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(i=>{let o=ja();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let d=ja();return this.indexManager.getCollectionParents(e,l).next(h=>G.forEach(h,p=>{const y=function(T,S){return new Fc(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,S)=>{d=d.insert(T,S)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(d=>(l=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(d=>{l.forEach((p,y)=>{const E=y.getKey();d.get(E)===null&&(d=d.insert(E,zt.newInvalidDocument(E)))});let h=ja();return d.forEach((p,y)=>{const E=l.get(p);E!==void 0&&Ga(E.mutation,y,jn.empty(),vt.now()),zc(t,y)&&(h=h.insert(p,y))}),h})}}/**
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
 */class zk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:xk(o.bundledQuery),readTime:ar(o.readTime)}}(t)),G.resolve()}}/**
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
 */class jk{constructor(){this.overlays=new nt(ve.comparator),this.dr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ls();return G.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.dr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=ls(),l=t.length+1,d=new ve(t.child("")),h=this.overlays.getIteratorFrom(d);for(;h.hasNext();){const p=h.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt((y,E)=>y-E);const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=ls(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const h=ls(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>h.set(y,E)),!(h.size()>=o)););return G.resolve(h)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const d=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(i.key,new ok(t,i));let l=this.dr.get(t);l===void 0&&(l=Pe(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
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
 */class Bk{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class Zf{constructor(){this.Er=new Et(At.Ar),this.Rr=new Et(At.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new At(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new At(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ve(new it([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.Rr.forEachInRange([i,o],d=>{this.gr(d),l.push(d.key)}),l}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ve(new it([])),i=new At(t,e),o=new At(t,e+1);let l=Pe();return this.Rr.forEachInRange([i,o],d=>{l=l.add(d.key)}),l}containsKey(e){const t=new At(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ve.comparator(e.key,t.key)||Ne(e.br,t.br)}static Vr(e,t){return Ne(e.br,t.br)||ve.comparator(e.key,t.key)}}/**
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
 */class $k{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Et(At.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new sk(l,t,i,o);this.mutationQueue.push(d);for(const h of o)this.vr=this.vr.add(new At(h.key,l)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return G.resolve(d)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],d=>{const h=this.Cr(d.br);l.push(h)}),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(Ne);return t.forEach(o=>{const l=new At(o,0),d=new At(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,d],h=>{i=i.add(h.br)})}),G.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ve.isDocumentKey(l)||(l=l.child(""));const d=new At(new ve(l),0);let h=new Et(Ne);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(h=h.add(p.br)),!0)},d),G.resolve(this.Mr(h))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return G.forEach(t.mutations,o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new At(t,0),o=this.vr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Hk{constructor(e){this.Nr=e,this.docs=function(){return new nt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,d=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:d}),this.size+=d-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=zr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))}),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=zr();const d=t.path,h=new ve(d.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||E1(v1(E),i)<=0||(o.has(E.key)||zc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Br(e,t){return G.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Wk(this)}getSize(e){return G.resolve(this.size)}}class Wk extends Mk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class qk{constructor(e){this.persistence=e,this.Lr=new ws(t=>qf(t),Kf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new Zf,this.targetCount=0,this.Qr=xo.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new xo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach((d,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.Lr.delete(d),l.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)}),G.waitFor(l).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(d=>{l.push(o.markPotentiallyOrphaned(e,d))}),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
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
 */class CE{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Oc(0),this.Ur=!1,this.Ur=!0,this.Wr=new Bk,this.referenceDelegate=e(this),this.Gr=new qk(this),this.indexManager=new Nk,this.remoteDocumentCache=function(o){return new Hk(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new Pk(t),this.jr=new zk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new $k(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new Kk(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return G.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class Kk extends T1{constructor(e){super(),this.currentSequenceNumber=e}}class ep{constructor(e){this.persistence=e,this.Zr=new Zf,this.Xr=null}static ei(e){return new ep(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,i=>{const o=ve.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class wc{constructor(e,t){this.persistence=e,this.ri=new ws(i=>R1(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=Vk(this,t)}static ei(e,t){return new wc(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?G.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,d=>this.ir(e,d,t).next(h=>{h||(i++,l.removeEntry(d,Ie.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ec(e.data.value)),t}ir(e,t,i){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new tp(e,t.fromCache,i,o)}}/**
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
 */class Gk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Qk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return dI()?8:I1(jt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(d=>{l.result=d}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(d=>{l.result=d})}).next(()=>{if(l.result)return;const d=new Gk;return this.ts(e,t,d).next(h=>{if(l.result=h,this.Hi)return this.ns(e,t,d,h.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(yo()<=ke.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",_o(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(yo()<=ke.DEBUG&&oe("QueryEngine","Query:",_o(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(yo()<=ke.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",_o(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):G.resolve())}Xi(e,t){if(Oy(t))return G.resolve(null);let i=or(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=af(t,null,"F"),i=or(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const d=Pe(...l);return this.Zi.getDocuments(e,d).next(h=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,h);return this.ss(t,y,d,p.readTime)?this.Xi(e,af(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Oy(t)||o.isEqual(Ie.min())?G.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const d=this.rs(t,l);return this.ss(t,d,i,o)?G.resolve(null):(yo()<=ke.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),_o(t)),this.os(e,d,t,_1(o,-1)).next(h=>h))})}rs(e,t){let i=new Et(sE(e));return t.forEach((o,l)=>{zc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return yo()<=ke.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",_o(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ri.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(d=>{l=l.insert(d.key,d)}),l))}}/**
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
 */class Yk{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new nt(Ne),this.cs=new ws(l=>qf(l),Kf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Xk(n,e,t,i){return new Yk(n,e,t,i)}async function kE(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const d=[],h=[];let p=Pe();for(const y of o){d.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:d,addedBatchIds:h}))})})}function Jk(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(h,p,y,E){const T=y.batch,S=T.keys();let N=G.resolve();return S.forEach(V=>{N=N.next(()=>E.getEntry(p,V)).next(z=>{const L=y.docVersions.get(V);je(L!==null),z.version.compareTo(L)<0&&(T.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),E.addEntry(z)))})}),N.next(()=>h.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let p=Pe();for(let y=0;y<h.mutationResults.length;++y)h.mutationResults[y].transformResults.length>0&&(p=p.add(h.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function PE(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Zk(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const d=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const h=[];e.targetChanges.forEach((E,T)=>{const S=o.get(T);if(!S)return;h.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,T)));let N=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(bt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):E.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(E.resumeToken,i)),o=o.insert(T,N),function(z,L,H){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(S,N,E)&&h.push(t.Gr.updateTargetData(l,N))});let p=zr(),y=Pe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),h.push(eP(l,d,e.documentUpdates).next(E=>{p=E.Is,y=E.ds})),!i.isEqual(Ie.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));h.push(E)}return G.waitFor(h).next(()=>d.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function eP(n,e,t){let i=Pe(),o=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let d=zr();return t.forEach((h,p)=>{const y=l.get(h);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(h,p.readTime),d=d.insert(h,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),d=d.insert(h,p)):oe("LocalStore","Ignoring outdated watch update for ",h,". Current version:",y.version," Watch version:",p.version)}),{Is:d,ds:o}})}function tP(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function nP(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,G.resolve(o)):t.Gr.allocateTargetId(i).next(d=>(o=new vi(e,d,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function hf(n,e,t){const i=Se(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,d=>i.persistence.referenceDelegate.removeTarget(d,o))}catch(d){if(!Uo(d))throw d;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${d}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function Ky(n,e,t){const i=Se(n);let o=Ie.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",d=>function(p,y,E){const T=Se(p),S=T.cs.get(E);return S!==void 0?G.resolve(T.us.get(S)):T.Gr.getTargetData(y,E)}(i,d,or(e)).next(h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(d,h.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(d,e,t?o:Ie.min(),t?l:Pe())).next(h=>(rP(i,H1(e),h),{documents:h,Es:l})))}function rP(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class Gy{constructor(){this.activeTargetIds=Y1()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iP{constructor(){this._o=new Gy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Gy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sP{uo(e){}shutdown(){}}/**
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
 */class Qy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wu=null;function zh(){return Wu===null?Wu=function(){return 268435456+Math.round(2147483648*Math.random())}():Wu++,"0x"+Wu.toString(16)}/**
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
 */const oP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class aP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Ft="WebChannelConnection";class lP extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,d){const h=zh(),p=this.No(t,i.toUriEncodedString());oe("RestConnection",`Sending RPC '${t}' ${h}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,d),this.Lo(t,p,y,o).then(E=>(oe("RestConnection",`Received RPC '${t}' ${h}: `,E),E),E=>{throw Ao("RestConnection",`RPC '${t}' ${h} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,d,h){return this.Oo(t,i,o,l,d)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,d)=>t[d]=l),o&&o.headers.forEach((l,d)=>t[d]=l)}No(t,i){const o=oP[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=zh();return new Promise((d,h)=>{const p=new Bv;p.setWithCredentials(!0),p.listenOnce($v.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Zu.NO_ERROR:const E=p.getResponseJson();oe(Ft,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),d(E);break;case Zu.TIMEOUT:oe(Ft,`RPC '${e}' ${l} timed out`),h(new _e(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Zu.HTTP_ERROR:const T=p.getStatus();if(oe(Ft,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const V=function(L){const H=L.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(H)>=0?H:Z.UNKNOWN}(N.status);h(new _e(V,N.message))}else h(new _e(Z.UNKNOWN,"Server responded with status "+p.getStatus()))}else h(new _e(Z.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{oe(Ft,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);oe(Ft,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=zh(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=qv(),h=Wv(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");oe(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=d.createWebChannel(E,p);let S=!1,N=!1;const V=new aP({Eo:L=>{N?oe(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(S||(oe(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),oe(Ft,`RPC '${e}' stream ${o} sending:`,L),T.send(L))},Ao:()=>T.close()}),z=(L,H,B)=>{L.listen(H,K=>{try{B(K)}catch(ee){setTimeout(()=>{throw ee},0)}})};return z(T,za.EventType.OPEN,()=>{N||(oe(Ft,`RPC '${e}' stream ${o} transport opened.`),V.So())}),z(T,za.EventType.CLOSE,()=>{N||(N=!0,oe(Ft,`RPC '${e}' stream ${o} transport closed`),V.Do())}),z(T,za.EventType.ERROR,L=>{N||(N=!0,Ao(Ft,`RPC '${e}' stream ${o} transport errored:`,L),V.Do(new _e(Z.UNAVAILABLE,"The operation could not be completed")))}),z(T,za.EventType.MESSAGE,L=>{var H;if(!N){const B=L.data[0];je(!!B);const K=B,ee=(K==null?void 0:K.error)||((H=K[0])===null||H===void 0?void 0:H.error);if(ee){oe(Ft,`RPC '${e}' stream ${o} received error:`,ee);const de=ee.status;let he=function(R){const P=ct[R];if(P!==void 0)return yE(P)}(de),k=ee.message;he===void 0&&(he=Z.INTERNAL,k="Unknown error status: "+de+" with message "+ee.message),N=!0,V.Do(new _e(he,k)),T.close()}else oe(Ft,`RPC '${e}' stream ${o} received:`,B),V.vo(B)}}),z(h,Hv.STAT_EVENT,L=>{L.stat===tf.PROXY?oe(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===tf.NOPROXY&&oe(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function jh(){return typeof document<"u"?document:null}/**
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
 */function Hc(n){return new mk(n,!0)}/**
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
 */class xE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class NE{constructor(e,t,i,o,l,d,h,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new xE(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new _e(Z.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uP extends NE{constructor(e,t,i,o,l,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,d),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=_k(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const d=l.targetChange;return d.targetIds&&d.targetIds.length?Ie.min():d.readTime?ar(d.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=df(this.serializer),t.addTarget=function(l,d){let h;const p=d.target;if(h=of(p)?{documents:wk(l,p)}:{query:Tk(l,p).ct},h.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){h.resumeToken=EE(l,d.resumeToken);const y=lf(l,d.expectedCount);y!==null&&(h.expectedCount=y)}else if(d.snapshotVersion.compareTo(Ie.min())>0){h.readTime=Ec(l,d.snapshotVersion.toTimestamp());const y=lf(l,d.expectedCount);y!==null&&(h.expectedCount=y)}return h}(this.serializer,e);const i=Sk(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=df(this.serializer),t.removeTarget=e,this.c_(t)}}class cP extends NE{constructor(e,t,i,o,l,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,d),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Ek(e.writeResults,e.commitTime),i=ar(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=df(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>vk(this.serializer,i))};this.c_(t)}}/**
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
 */class dP extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new _e(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,d])=>this.connection.Oo(e,uf(t,i),o,l,d)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _e(Z.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,h])=>this.connection.ko(e,uf(t,i),o,d,h,l)).catch(d=>{throw d.name==="FirebaseError"?(d.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new _e(Z.UNKNOWN,d.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class hP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ur(t),this.C_=!1):oe("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class fP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(d=>{i.enqueueAndForget(async()=>{Is(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.k_.add(4),await vl(y),y.K_.set("Unknown"),y.k_.delete(4),await Wc(y)}(this))})}),this.K_=new hP(i,o)}}async function Wc(n){if(Is(n))for(const e of n.q_)await e(!0)}async function vl(n){for(const e of n.q_)await e(!1)}function DE(n,e){const t=Se(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),sp(t)?ip(t):zo(t).s_()&&rp(t,e))}function np(n,e){const t=Se(n),i=zo(t);t.L_.delete(e),i.s_()&&bE(t,e),t.L_.size===0&&(i.s_()?i.a_():Is(t)&&t.K_.set("Unknown"))}function rp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zo(n).V_(e)}function bE(n,e){n.U_.xe(e),zo(n).m_(e)}function ip(n){n.U_=new dk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),zo(n).start(),n.K_.F_()}function sp(n){return Is(n)&&!zo(n).i_()&&n.L_.size>0}function Is(n){return Se(n).k_.size===0}function LE(n){n.U_=void 0}async function pP(n){n.K_.set("Online")}async function mP(n){n.L_.forEach((e,t)=>{rp(n,e)})}async function gP(n,e){LE(n),sp(n)?(n.K_.O_(e),ip(n)):n.K_.set("Unknown")}async function yP(n,e,t){if(n.K_.set("Online"),e instanceof vE&&e.state===2&&e.cause)try{await async function(o,l){const d=l.cause;for(const h of l.targetIds)o.L_.has(h)&&(await o.remoteSyncer.rejectListen(h,d),o.L_.delete(h),o.U_.removeTarget(h))}(n,e)}catch(i){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Tc(n,i)}else if(e instanceof rc?n.U_.$e(e):e instanceof _E?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await PE(n.localStore);t.compareTo(i)>=0&&await function(l,d){const h=l.U_.it(d);return h.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.L_.get(y);E&&l.L_.set(y,E.withResumeToken(p.resumeToken,d))}}),h.targetMismatches.forEach((p,y)=>{const E=l.L_.get(p);if(!E)return;l.L_.set(p,E.withResumeToken(bt.EMPTY_BYTE_STRING,E.snapshotVersion)),bE(l,p);const T=new vi(E.target,p,y,E.sequenceNumber);rp(l,T)}),l.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){oe("RemoteStore","Failed to raise snapshot:",i),await Tc(n,i)}}async function Tc(n,e,t){if(!Uo(e))throw e;n.k_.add(1),await vl(n),n.K_.set("Offline"),t||(t=()=>PE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Wc(n)})}function OE(n,e){return e().catch(t=>Tc(n,t,e))}async function qc(n){const e=Se(n),t=Pi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;_P(e);)try{const o=await tP(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,vP(e,o)}catch(o){await Tc(e,o)}VE(e)&&ME(e)}function _P(n){return Is(n)&&n.B_.length<10}function vP(n,e){n.B_.push(e);const t=Pi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function VE(n){return Is(n)&&!Pi(n).i_()&&n.B_.length>0}function ME(n){Pi(n).start()}async function EP(n){Pi(n).w_()}async function wP(n){const e=Pi(n);for(const t of n.B_)e.g_(t.mutations)}async function TP(n,e,t){const i=n.B_.shift(),o=Yf.from(i,e,t);await OE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await qc(n)}async function IP(n,e){e&&Pi(n).f_&&await async function(i,o){if(function(d){return lk(d)&&d!==Z.ABORTED}(o.code)){const l=i.B_.shift();Pi(i).__(),await OE(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await qc(i)}}(n,e),VE(n)&&ME(n)}async function Yy(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const i=Is(t);t.k_.add(3),await vl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Wc(t)}async function SP(n,e){const t=Se(n);e?(t.k_.delete(2),await Wc(t)):e||(t.k_.add(2),await vl(t),t.K_.set("Unknown"))}function zo(n){return n.W_||(n.W_=function(t,i,o){const l=Se(t);return l.b_(),new uP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:pP.bind(null,n),mo:mP.bind(null,n),po:gP.bind(null,n),R_:yP.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),sp(n)?ip(n):n.K_.set("Unknown")):(await n.W_.stop(),LE(n))})),n.W_}function Pi(n){return n.G_||(n.G_=function(t,i,o){const l=Se(t);return l.b_(),new cP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:EP.bind(null,n),po:IP.bind(null,n),p_:wP.bind(null,n),y_:TP.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await qc(n)):(await n.G_.stop(),n.B_.length>0&&(oe("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
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
 */class op{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const d=Date.now()+i,h=new op(e,t,d,o,l);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ap(n,e){if(Ur("AsyncQueue",`${e}: ${n}`),Uo(n))return new _e(Z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ro{static emptySet(e){return new Ro(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ve.comparator(t.key,i.key):(t,i)=>ve.comparator(t.key,i.key),this.keyedMap=ja(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ro)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Xy{constructor(){this.z_=new nt(ve.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class No{constructor(e,t,i,o,l,d,h,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=d,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const d=[];return t.forEach(h=>{d.push({type:0,doc:h})}),new No(e,t,Ro.emptySet(t),d,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class RP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class AP{constructor(){this.queries=Jy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=Jy(),l.forEach((d,h)=>{for(const p of h.J_)p.onError(i)})})(this,new _e(Z.ABORTED,"Firestore shutting down"))}}function Jy(){return new ws(n=>iE(n),Uc)}async function CP(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new RP,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(d){const h=ap(d,`Initialization of query '${_o(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&lp(t)}async function kP(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const d=l.J_.indexOf(e);d>=0&&(l.J_.splice(d,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function PP(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,d=t.queries.get(l);if(d){for(const h of d.J_)h.ta(o)&&(i=!0);d.H_=o}}i&&lp(t)}function xP(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function lp(n){n.X_.forEach(e=>{e.next()})}var ff,Zy;(Zy=ff||(ff={})).na="default",Zy.Cache="cache";class NP{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new No(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ff.Cache}}/**
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
 */class FE{constructor(e){this.key=e}}class UE{constructor(e){this.key=e}}class DP{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=sE(e),this.ma=new Ro(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new Xy,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,d=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const S=o.get(E),N=zc(this.query,T)?T:null,V=!!S&&this.mutatedKeys.has(S.key),z=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let L=!1;S&&N?S.data.isEqual(N.data)?V!==z&&(i.track({type:3,doc:N}),L=!0):this.ya(S,N)||(i.track({type:2,doc:N}),L=!0,(p&&this.Va(N,p)>0||y&&this.Va(N,y)<0)&&(h=!0)):!S&&N?(i.track({type:0,doc:N}),L=!0):S&&!N&&(i.track({type:1,doc:S}),L=!0,(p||y)&&(h=!0)),L&&(N?(d=d.add(N),l=z?l.add(E):l.delete(E)):(d=d.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const E=this.query.limitType==="F"?d.last():d.first();d=d.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:d,pa:i,ss:h,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const d=e.pa.j_();d.sort((E,T)=>function(N,V){const z=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return z(N)-z(V)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(i),o=o!=null&&o;const h=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,d.length!==0||y?{snapshot:new No(this.query,e.ma,l,d,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:h}:{ba:h}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Xy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new UE(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new FE(i))}),t}va(e){this.Ea=e.Es,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return No.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class bP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class LP{constructor(e){this.key=e,this.Fa=!1}}class OP{constructor(e,t,i,o,l,d){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=d,this.Ma={},this.xa=new ws(h=>iE(h),Uc),this.Oa=new Map,this.Na=new Set,this.Ba=new nt(ve.comparator),this.La=new Map,this.ka=new Zf,this.qa={},this.Qa=new Map,this.Ka=xo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function VP(n,e,t=!0){const i=WE(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await zE(i,e,t,!0),o}async function MP(n,e){const t=WE(n);await zE(t,e,!0,!1)}async function zE(n,e,t,i){const o=await nP(n.localStore,or(e)),l=o.targetId,d=n.sharedClientState.addLocalQueryTarget(l,t);let h;return i&&(h=await FP(n,e,l,d==="current",o.resumeToken)),n.isPrimaryClient&&t&&DE(n.remoteStore,o),h}async function FP(n,e,t,i,o){n.Ua=(T,S,N)=>async function(z,L,H,B){let K=L.view.ga(H);K.ss&&(K=await Ky(z.localStore,L.query,!1).then(({documents:k})=>L.view.ga(k,K)));const ee=B&&B.targetChanges.get(L.targetId),de=B&&B.targetMismatches.get(L.targetId)!=null,he=L.view.applyChanges(K,z.isPrimaryClient,ee,de);return t_(z,L.targetId,he.ba),he.snapshot}(n,T,S,N);const l=await Ky(n.localStore,e,!0),d=new DP(e,l.Es),h=d.ga(l.documents),p=_l.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=d.applyChanges(h,n.isPrimaryClient,p);t_(n,t,y.ba);const E=new bP(e,t,d);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function UP(n,e,t){const i=Se(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(d=>!Uc(d,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await hf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&np(i.remoteStore,o.targetId),pf(i,o.targetId)}).catch(Fo)):(pf(i,o.targetId),await hf(i.localStore,o.targetId,!0))}async function zP(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),np(t.remoteStore,i.targetId))}async function jP(n,e,t){const i=GP(n);try{const o=await function(d,h){const p=Se(d),y=vt.now(),E=h.reduce((N,V)=>N.add(V.key),Pe());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let V=zr(),z=Pe();return p.hs.getEntries(N,E).next(L=>{V=L,V.forEach((H,B)=>{B.isValidDocument()||(z=z.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,V)).next(L=>{T=L;const H=[];for(const B of h){const K=rk(B,T.get(B.key).overlayedDocument);K!=null&&H.push(new Ts(B.key,K,Xv(K.value.mapValue),Vr.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,H,h)}).next(L=>{S=L;const H=L.applyToLocalDocumentSet(T,z);return p.documentOverlayCache.saveOverlays(N,L.batchId,H)})}).then(()=>({batchId:S.batchId,changes:aE(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(d,h,p){let y=d.qa[d.currentUser.toKey()];y||(y=new nt(Ne)),y=y.insert(h,p),d.qa[d.currentUser.toKey()]=y}(i,o.batchId,t),await El(i,o.changes),await qc(i.remoteStore)}catch(o){const l=ap(o,"Failed to persist write");t.reject(l)}}async function jE(n,e){const t=Se(n);try{const i=await Zk(t.localStore,e);e.targetChanges.forEach((o,l)=>{const d=t.La.get(l);d&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?d.Fa=!0:o.modifiedDocuments.size>0?je(d.Fa):o.removedDocuments.size>0&&(je(d.Fa),d.Fa=!1))}),await El(t,i,e)}catch(i){await Fo(i)}}function e_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,d)=>{const h=d.view.ea(e);h.snapshot&&o.push(h.snapshot)}),function(d,h){const p=Se(d);p.onlineState=h;let y=!1;p.queries.forEach((E,T)=>{for(const S of T.J_)S.ea(h)&&(y=!0)}),y&&lp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function BP(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let d=new nt(ve.comparator);d=d.insert(l,zt.newNoDocument(l,Ie.min()));const h=Pe().add(l),p=new $c(Ie.min(),new Map,new nt(Ne),d,h);await jE(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),up(i)}else await hf(i.localStore,e,!1).then(()=>pf(i,e,t)).catch(Fo)}async function $P(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await Jk(t.localStore,e);$E(t,i,null),BE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await El(t,o)}catch(o){await Fo(o)}}async function HP(n,e,t){const i=Se(n);try{const o=await function(d,h){const p=Se(d);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,h).next(T=>(je(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,h)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);$E(i,e,t),BE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await El(i,o)}catch(o){await Fo(o)}}function BE(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function $E(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function pf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||HE(n,i)})}function HE(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(np(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),up(n))}function t_(n,e,t){for(const i of t)i instanceof FE?(n.ka.addReference(i.key,e),WP(n,i)):i instanceof UE?(oe("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||HE(n,i.key)):Te()}function WP(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(oe("SyncEngine","New document in limbo: "+t),n.Na.add(i),up(n))}function up(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ve(it.fromString(e)),i=n.Ka.next();n.La.set(i,new LP(t)),n.Ba=n.Ba.insert(t,i),DE(n.remoteStore,new vi(or(Gf(t.path)),i,"TargetPurposeLimboResolution",Oc.oe))}}async function El(n,e,t){const i=Se(n),o=[],l=[],d=[];i.xa.isEmpty()||(i.xa.forEach((h,p)=>{d.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=tp.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(d),i.Ma.R_(o),await async function(p,y){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>G.forEach(y,S=>G.forEach(S.Wi,N=>E.persistence.referenceDelegate.addReference(T,S.targetId,N)).next(()=>G.forEach(S.Gi,N=>E.persistence.referenceDelegate.removeReference(T,S.targetId,N)))))}catch(T){if(!Uo(T))throw T;oe("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const S=T.targetId;if(!T.fromCache){const N=E.us.get(S),V=N.snapshotVersion,z=N.withLastLimboFreeSnapshotVersion(V);E.us=E.us.insert(S,z)}}}(i.localStore,l))}async function qP(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const i=await kE(t.localStore,e);t.currentUser=e,function(l,d){l.Qa.forEach(h=>{h.forEach(p=>{p.reject(new _e(Z.CANCELLED,d))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await El(t,i.Ts)}}function KP(n,e){const t=Se(n),i=t.La.get(e);if(i&&i.Fa)return Pe().add(i.key);{let o=Pe();const l=t.Oa.get(e);if(!l)return o;for(const d of l){const h=t.xa.get(d);o=o.unionWith(h.view.fa)}return o}}function WE(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BP.bind(null,e),e.Ma.R_=PP.bind(null,e.eventManager),e.Ma.Wa=xP.bind(null,e.eventManager),e}function GP(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$P.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HP.bind(null,e),e}class Ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Xk(this.persistence,new Qk,e.initialUser,this.serializer)}ja(e){return new CE(ep.ei,this.serializer)}za(e){return new iP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ic.provider={build:()=>new Ic};class QP extends Ic{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){je(this.persistence.referenceDelegate instanceof wc);const i=this.persistence.referenceDelegate.garbageCollector;return new Lk(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new CE(i=>wc.ei(i,t),this.serializer)}}class mf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>e_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=qP.bind(null,this.syncEngine),await SP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AP}()}createDatastore(e){const t=Hc(e.databaseInfo.databaseId),i=function(l){return new lP(l)}(e.databaseInfo);return function(l,d,h,p){return new dP(l,d,h,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,d,h){return new fP(i,o,l,d,h)}(this.localStore,this.datastore,e.asyncQueue,t=>e_(this.syncEngine,t,0),function(){return Qy.p()?new Qy:new sP}())}createSyncEngine(e,t){return function(o,l,d,h,p,y,E){const T=new OP(o,l,d,h,p,y);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);oe("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await vl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}mf.provider={build:()=>new mf};/**
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
 */class YP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class XP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Gv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async d=>{oe("FirestoreClient","Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(i,d=>(oe("FirestoreClient","Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=ap(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Bh(n,e){n.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await kE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function n_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await JP(n);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Yy(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Yy(e.remoteStore,o)),n._onlineComponents=e}async function JP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Ao("Error using user provided cache. Falling back to memory cache: "+t),await Bh(n,new Ic)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await Bh(n,new QP(void 0));return n._offlineComponents}async function qE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await n_(n,n._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await n_(n,new mf))),n._onlineComponents}function ZP(n){return qE(n).then(e=>e.syncEngine)}async function ex(n){const e=await qE(n),t=e.eventManager;return t.onListen=VP.bind(null,e.syncEngine),t.onUnlisten=UP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zP.bind(null,e.syncEngine),t}function tx(n,e,t={}){const i=new Ii;return n.asyncQueue.enqueueAndForget(async()=>function(l,d,h,p,y){const E=new YP({next:S=>{E.eu(),d.enqueueAndForget(()=>kP(l,T));const N=S.docs.has(h);!N&&S.fromCache?y.reject(new _e(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&S.fromCache&&p&&p.source==="server"?y.reject(new _e(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new NP(Gf(h.path),E,{includeMetadataChanges:!0,ua:!0});return CP(l,T)}(await ex(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function KE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const r_=new Map;/**
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
 */function nx(n,e,t){if(!t)throw new _e(Z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rx(n,e,t,i){if(e===!0&&i===!0)throw new _e(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function i_(n){if(!ve.isDocumentKey(n))throw new _e(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function sl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cp(n);throw new _e(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class s_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _e(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new _e(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new _e(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new _e(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new s_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new s_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new u1;switch(i.type){case"firstParty":return new f1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new _e(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=r_.get(t);i&&(oe("ComponentProvider","Removing Datastore"),r_.delete(t),i.terminate())}(this),Promise.resolve()}}function ix(n,e,t,i={}){var o;const l=(n=sl(n,dp))._getSettings(),d=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==d&&Ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:d,ssl:!1})),i.mockUserToken){let h,p;if(typeof i.mockUserToken=="string")h=i.mockUserToken,p=Ut.MOCK_USER;else{h=sI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new _e(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ut(y)}n._authCredentials=new c1(new Kv(h,p))}}/**
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
 */class hp{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new hp(this.firestore,e,this._query)}}class Rn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ol(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rn(this.firestore,e,this._key)}}class ol extends hp{constructor(e,t,i){super(e,t,Gf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rn(this.firestore,null,new ve(e))}withConverter(e){return new ol(this.firestore,e,this._path)}}function GE(n,e,...t){if(n=hn(n),arguments.length===1&&(e=Gv.newId()),nx("doc","path",e),n instanceof dp){const i=it.fromString(e,...t);return i_(i),new Rn(n,null,new ve(i))}{if(!(n instanceof Rn||n instanceof ol))throw new _e(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(it.fromString(e,...t));return i_(i),new Rn(n.firestore,n instanceof ol?n.converter:null,new ve(i))}}/**
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
 */class o_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new xE(this,"async_queue_retry"),this.fu=()=>{const i=jh();i&&oe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=jh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=jh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Ii;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Uo(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(d){let h=d.message||"";return d.stack&&(h=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),h}(i);throw Ur("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=op.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.Eu.push(o),o}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class fp extends dp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new o_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new o_(e),this._firestoreClient=void 0,await e}}}function sx(n,e){const t=typeof n=="object"?n:kf(),i=typeof n=="string"?n:"(default)",o=_s(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=rI("firestore");l&&ix(o,...l)}return o}function QE(n){if(n._terminated)throw new _e(Z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ox(n),n._firestoreClient}function ox(n){var e,t,i;const o=n._freezeSettings(),l=function(h,p,y,E){return new k1(h,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,KE(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new XP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class pp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class YE{constructor(e){this._methodName=e}}/**
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
 */class mp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */class gp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const ax=/^__.*__$/;class lx{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ts(e,this.data,this.fieldMask,t,this.fieldTransforms):new yl(e,this.data,t,this.fieldTransforms)}}function XE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class yp{constructor(e,t,i,o,l,d){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new yp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Sc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(XE(this.Mu)&&ax.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class ux{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Hc(e)}$u(e,t,i,o=!1){return new yp({Mu:e,methodName:t,Ku:i,path:Dt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cx(n){const e=n._freezeSettings(),t=Hc(n._databaseId);return new ux(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dx(n,e,t,i,o,l={}){const d=n.$u(l.merge||l.mergeFields?2:0,e,t,o);tw("Data must be an object, but it was:",d,i);const h=ZE(i,d);let p,y;if(l.merge)p=new jn(d.fieldMask),y=d.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const S=hx(e,T,t);if(!d.contains(S))throw new _e(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);px(E,S)||E.push(S)}p=new jn(E),y=d.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=d.fieldTransforms;return new lx(new In(h),p,y)}function JE(n,e){if(ew(n=hn(n)))return tw("Unsupported field value:",e,n),ZE(n,e);if(n instanceof YE)return function(i,o){if(!XE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let d=0;for(const h of i){let p=JE(h,o.ku(d));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),d++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=hn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return X1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=vt.fromDate(i);return{timestampValue:Ec(o.serializer,l)}}if(i instanceof vt){const l=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ec(o.serializer,l)}}if(i instanceof mp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Do)return{bytesValue:EE(o.serializer,i._byteString)};if(i instanceof Rn){const l=o.databaseId,d=i.firestore._databaseId;if(!d.isEqual(l))throw o.qu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Jf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof gp)return function(d,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:d.toArray().map(p=>{if(typeof p!="number")throw h.qu("VectorValues must only contain numeric values.");return Qf(h.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${cp(i)}`)}(n,e)}function ZE(n,e){const t={};return Qv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(n,(i,o)=>{const l=JE(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function ew(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof mp||n instanceof Do||n instanceof Rn||n instanceof YE||n instanceof gp)}function tw(n,e,t){if(!ew(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=cp(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function hx(n,e,t){if((e=hn(e))instanceof pp)return e._internalPath;if(typeof e=="string")return nw(n,e);throw Sc("Field path arguments must be of type string or ",n,!1,void 0,t)}const fx=new RegExp("[~\\*/\\[\\]]");function nw(n,e,t){if(e.search(fx)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new pp(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Sc(n,e,t,i,o){const l=i&&!i.isEmpty(),d=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(l||d)&&(p+=" (found",l&&(p+=` in field ${i}`),d&&(p+=` in document ${o}`),p+=")"),new _e(Z.INVALID_ARGUMENT,h+n+p)}function px(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class rw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(iw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mx extends rw{data(){return super.data()}}function iw(n,e){return typeof e=="string"?nw(n,e):e instanceof pp?e._internalPath:e._delegate._internalPath}class gx{convertValue(e,t="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Es(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(d=>at(d.doubleValue));return new gp(l)}convertGeoPoint(e){return new mp(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Mc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(el(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=it.fromString(e);je(AE(i));const o=new tl(i.get(1),i.get(3)),l=new ve(i.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function yx(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class _x{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sw extends rw{constructor(e,t,i,o,l,d){super(e,t,i,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vx(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(iw("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class vx extends sw{data(e={}){return super.data(e)}}/**
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
 */function Ex(n){n=sl(n,Rn);const e=sl(n.firestore,fp);return tx(QE(e),n._key).then(t=>Sx(e,n,t))}class wx extends gx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Do(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rn(this.firestore,null,t)}}function Tx(n,e,t){n=sl(n,Rn);const i=sl(n.firestore,fp),o=yx(n.converter,e);return Ix(i,[dx(cx(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Vr.none())])}function Ix(n,e){return function(i,o){const l=new Ii;return i.asyncQueue.enqueueAndForget(async()=>jP(await ZP(i),o,l)),l.promise}(QE(n),e)}function Sx(n,e,t){const i=t.docs.get(e._key),o=new wx(n);return new sw(n,o,e._key,i,new _x(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Mo=o})(Oo),ur(new Bn("firestore",(i,{instanceIdentifier:o,options:l})=>{const d=i.getProvider("app").getImmediate(),h=new fp(new d1(i.getProvider("auth-internal")),new m1(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new _e(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(y.options.projectId,E)}(d,o),d);return l=Object.assign({useFetchStreams:t},l),h._setSettings(l),h},"PUBLIC").setMultipleInstances(!0)),Sn(Sy,"4.7.6",e),Sn(Sy,"4.7.6","esm2017")})();const Rx={apiKey:"AIzaSyAzLudwMfREssLJfgWtbF7be7W3mvJqW_Q",authDomain:"dentiste-ebaa6.firebaseapp.com",projectId:"dentiste-ebaa6",storageBucket:"dentiste-ebaa6.firebasestorage.app",messagingSenderId:"105184438866",appId:"1:105184438866:web:1df1cf904515851fb44d8b",measurementId:"G-4C89Y02J0M"},ow=O_(Rx);s1(ow);const al=zA(),aw=sx(ow);function lw(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=lw(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function us(){for(var n,e,t=0,i="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=lw(n))&&(i&&(i+=" "),i+=e);return i}function Ax(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}Ax(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var wl=n=>typeof n=="number"&&!isNaN(n),ms=n=>typeof n=="string",jr=n=>typeof n=="function",Cx=n=>ms(n)||wl(n),gf=n=>ms(n)||jr(n)?n:null,kx=(n,e)=>n===!1||wl(n)&&n>0?n:e,yf=n=>W.isValidElement(n)||ms(n)||jr(n)||wl(n);function Px(n,e,t=300){let{scrollHeight:i,style:o}=n;requestAnimationFrame(()=>{o.minHeight="initial",o.height=i+"px",o.transition=`all ${t}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(e,t)})})}function xx({enter:n,exit:e,appendPosition:t=!1,collapse:i=!0,collapseDuration:o=300}){return function({children:l,position:d,preventExitTransition:h,done:p,nodeRef:y,isIn:E,playToast:T}){let S=t?`${n}--${d}`:n,N=t?`${e}--${d}`:e,V=W.useRef(0);return W.useLayoutEffect(()=>{let z=y.current,L=S.split(" "),H=B=>{B.target===y.current&&(T(),z.removeEventListener("animationend",H),z.removeEventListener("animationcancel",H),V.current===0&&B.type!=="animationcancel"&&z.classList.remove(...L))};z.classList.add(...L),z.addEventListener("animationend",H),z.addEventListener("animationcancel",H)},[]),W.useEffect(()=>{let z=y.current,L=()=>{z.removeEventListener("animationend",L),i?Px(z,p,o):p()};E||(h?L():(V.current=1,z.className+=` ${N}`,z.addEventListener("animationend",L)))},[E]),Qe.createElement(Qe.Fragment,null,l)}}function a_(n,e){return{content:uw(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:e}}function uw(n,e,t=!1){return W.isValidElement(n)&&!ms(n.type)?W.cloneElement(n,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):jr(n)?n({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):n}function Nx({closeToast:n,theme:e,ariaLabel:t="close"}){return Qe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:i=>{i.stopPropagation(),n(!0)},"aria-label":t},Qe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Qe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Dx({delay:n,isRunning:e,closeToast:t,type:i="default",hide:o,className:l,controlledProgress:d,progress:h,rtl:p,isIn:y,theme:E}){let T=o||d&&h===0,S={animationDuration:`${n}ms`,animationPlayState:e?"running":"paused"};d&&(S.transform=`scaleX(${h})`);let N=us("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":p}),V=jr(l)?l({rtl:p,type:i,defaultClassName:N}):us(N,l),z={[d&&h>=1?"onTransitionEnd":"onAnimationEnd"]:d&&h<1?null:()=>{y&&t()}};return Qe.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":T},Qe.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${E} Toastify__progress-bar--${i}`}),Qe.createElement("div",{role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:V,style:S,...z}))}var bx=1,cw=()=>`${bx++}`;function Lx(n,e,t){let i=1,o=0,l=[],d=[],h=e,p=new Map,y=new Set,E=B=>(y.add(B),()=>y.delete(B)),T=()=>{d=Array.from(p.values()),y.forEach(B=>B())},S=({containerId:B,toastId:K,updateId:ee})=>{let de=B?B!==n:n!==1,he=p.has(K)&&ee==null;return de||he},N=(B,K)=>{p.forEach(ee=>{var de;(K==null||K===ee.props.toastId)&&((de=ee.toggle)==null||de.call(ee,B))})},V=B=>{var K,ee;(ee=(K=B.props)==null?void 0:K.onClose)==null||ee.call(K,B.removalReason),B.isActive=!1},z=B=>{if(B==null)p.forEach(V);else{let K=p.get(B);K&&V(K)}T()},L=()=>{o-=l.length,l=[]},H=B=>{var K,ee;let{toastId:de,updateId:he}=B.props,k=he==null;B.staleId&&p.delete(B.staleId),B.isActive=!0,p.set(de,B),T(),t(a_(B,k?"added":"updated")),k&&((ee=(K=B.props).onOpen)==null||ee.call(K))};return{id:n,props:h,observe:E,toggle:N,removeToast:z,toasts:p,clearQueue:L,buildToast:(B,K)=>{if(S(K))return;let{toastId:ee,updateId:de,data:he,staleId:k,delay:I}=K,R=de==null;R&&o++;let P={...h,style:h.toastStyle,key:i++,...Object.fromEntries(Object.entries(K).filter(([O,C])=>C!=null)),toastId:ee,updateId:de,data:he,isIn:!1,className:gf(K.className||h.toastClassName),progressClassName:gf(K.progressClassName||h.progressClassName),autoClose:K.isLoading?!1:kx(K.autoClose,h.autoClose),closeToast(O){p.get(ee).removalReason=O,z(ee)},deleteToast(){let O=p.get(ee);if(O!=null){if(t(a_(O,"removed")),p.delete(ee),o--,o<0&&(o=0),l.length>0){H(l.shift());return}T()}}};P.closeButton=h.closeButton,K.closeButton===!1||yf(K.closeButton)?P.closeButton=K.closeButton:K.closeButton===!0&&(P.closeButton=yf(h.closeButton)?h.closeButton:!0);let D={content:B,props:P,staleId:k};h.limit&&h.limit>0&&o>h.limit&&R?l.push(D):wl(I)?setTimeout(()=>{H(D)},I):H(D)},setProps(B){h=B},setToggle:(B,K)=>{let ee=p.get(B);ee&&(ee.toggle=K)},isToastActive:B=>{var K;return(K=p.get(B))==null?void 0:K.isActive},getSnapshot:()=>d}}var qt=new Map,ll=[],_f=new Set,Ox=n=>_f.forEach(e=>e(n)),dw=()=>qt.size>0;function Vx(){ll.forEach(n=>fw(n.content,n.options)),ll=[]}var Mx=(n,{containerId:e})=>{var t;return(t=qt.get(e||1))==null?void 0:t.toasts.get(n)};function hw(n,e){var t;if(e)return!!((t=qt.get(e))!=null&&t.isToastActive(n));let i=!1;return qt.forEach(o=>{o.isToastActive(n)&&(i=!0)}),i}function Fx(n){if(!dw()){ll=ll.filter(e=>n!=null&&e.options.toastId!==n);return}if(n==null||Cx(n))qt.forEach(e=>{e.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let e=qt.get(n.containerId);e?e.removeToast(n.id):qt.forEach(t=>{t.removeToast(n.id)})}}var Ux=(n={})=>{qt.forEach(e=>{e.props.limit&&(!n.containerId||e.id===n.containerId)&&e.clearQueue()})};function fw(n,e){yf(n)&&(dw()||ll.push({content:n,options:e}),qt.forEach(t=>{t.buildToast(n,e)}))}function zx(n){var e;(e=qt.get(n.containerId||1))==null||e.setToggle(n.id,n.fn)}function pw(n,e){qt.forEach(t=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===t.id)&&t.toggle(n,e==null?void 0:e.id)})}function jx(n){let e=n.containerId||1;return{subscribe(t){let i=Lx(e,n,Ox);qt.set(e,i);let o=i.observe(t);return Vx(),()=>{o(),qt.delete(e)}},setProps(t){var i;(i=qt.get(e))==null||i.setProps(t)},getSnapshot(){var t;return(t=qt.get(e))==null?void 0:t.getSnapshot()}}}function Bx(n){return _f.add(n),()=>{_f.delete(n)}}function $x(n){return n&&(ms(n.toastId)||wl(n.toastId))?n.toastId:cw()}function Tl(n,e){return fw(n,e),e.toastId}function Kc(n,e){return{...e,type:e&&e.type||n,toastId:$x(e)}}function Gc(n){return(e,t)=>Tl(e,Kc(n,t))}function Oe(n,e){return Tl(n,Kc("default",e))}Oe.loading=(n,e)=>Tl(n,Kc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function Hx(n,{pending:e,error:t,success:i},o){let l;e&&(l=ms(e)?Oe.loading(e,o):Oe.loading(e.render,{...o,...e}));let d={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(y,E,T)=>{if(E==null){Oe.dismiss(l);return}let S={type:y,...d,...o,data:T},N=ms(E)?{render:E}:E;return l?Oe.update(l,{...S,...N}):Oe(N.render,{...S,...N}),T},p=jr(n)?n():n;return p.then(y=>h("success",i,y)).catch(y=>h("error",t,y)),p}Oe.promise=Hx;Oe.success=Gc("success");Oe.info=Gc("info");Oe.error=Gc("error");Oe.warning=Gc("warning");Oe.warn=Oe.warning;Oe.dark=(n,e)=>Tl(n,Kc("default",{theme:"dark",...e}));function Wx(n){Fx(n)}Oe.dismiss=Wx;Oe.clearWaitingQueue=Ux;Oe.isActive=hw;Oe.update=(n,e={})=>{let t=Mx(n,e);if(t){let{props:i,content:o}=t,l={delay:100,...i,...e,toastId:e.toastId||n,updateId:cw()};l.toastId!==n&&(l.staleId=n);let d=l.render||o;delete l.render,Tl(d,l)}};Oe.done=n=>{Oe.update(n,{progress:1})};Oe.onChange=Bx;Oe.play=n=>pw(!0,n);Oe.pause=n=>pw(!1,n);function qx(n){var e;let{subscribe:t,getSnapshot:i,setProps:o}=W.useRef(jx(n)).current;o(n);let l=(e=W.useSyncExternalStore(t,i,i))==null?void 0:e.slice();function d(h){if(!l)return[];let p=new Map;return n.newestOnTop&&l.reverse(),l.forEach(y=>{let{position:E}=y.props;p.has(E)||p.set(E,[]),p.get(E).push(y)}),Array.from(p,y=>h(y[0],y[1]))}return{getToastToRender:d,isToastActive:hw,count:l==null?void 0:l.length}}function Kx(n){let[e,t]=W.useState(!1),[i,o]=W.useState(!1),l=W.useRef(null),d=W.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:p,closeToast:y,onClick:E,closeOnClick:T}=n;zx({id:n.toastId,containerId:n.containerId,fn:t}),W.useEffect(()=>{if(n.pauseOnFocusLoss)return S(),()=>{N()}},[n.pauseOnFocusLoss]);function S(){document.hasFocus()||H(),window.addEventListener("focus",L),window.addEventListener("blur",H)}function N(){window.removeEventListener("focus",L),window.removeEventListener("blur",H)}function V(k){if(n.draggable===!0||n.draggable===k.pointerType){B();let I=l.current;d.canCloseOnClick=!0,d.canDrag=!0,I.style.transition="none",n.draggableDirection==="x"?(d.start=k.clientX,d.removalDistance=I.offsetWidth*(n.draggablePercent/100)):(d.start=k.clientY,d.removalDistance=I.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function z(k){let{top:I,bottom:R,left:P,right:D}=l.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&n.pauseOnHover&&k.clientX>=P&&k.clientX<=D&&k.clientY>=I&&k.clientY<=R?H():L()}function L(){t(!0)}function H(){t(!1)}function B(){d.didMove=!1,document.addEventListener("pointermove",ee),document.addEventListener("pointerup",de)}function K(){document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",de)}function ee(k){let I=l.current;if(d.canDrag&&I){d.didMove=!0,e&&H(),n.draggableDirection==="x"?d.delta=k.clientX-d.start:d.delta=k.clientY-d.start,d.start!==k.clientX&&(d.canCloseOnClick=!1);let R=n.draggableDirection==="x"?`${d.delta}px, var(--y)`:`0, calc(${d.delta}px + var(--y))`;I.style.transform=`translate3d(${R},0)`,I.style.opacity=`${1-Math.abs(d.delta/d.removalDistance)}`}}function de(){K();let k=l.current;if(d.canDrag&&d.didMove&&k){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance){o(!0),n.closeToast(!0),n.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let he={onPointerDown:V,onPointerUp:z};return h&&p&&(he.onMouseEnter=H,n.stacked||(he.onMouseLeave=L)),T&&(he.onClick=k=>{E&&E(k),d.canCloseOnClick&&y(!0)}),{playToast:L,pauseToast:H,isRunning:e,preventExitTransition:i,toastRef:l,eventHandlers:he}}var Gx=typeof window<"u"?W.useLayoutEffect:W.useEffect,Qc=({theme:n,type:e,isLoading:t,...i})=>Qe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...i});function Qx(n){return Qe.createElement(Qc,{...n},Qe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function Yx(n){return Qe.createElement(Qc,{...n},Qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function Xx(n){return Qe.createElement(Qc,{...n},Qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Jx(n){return Qe.createElement(Qc,{...n},Qe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Zx(){return Qe.createElement("div",{className:"Toastify__spinner"})}var vf={info:Yx,warning:Qx,success:Xx,error:Jx,spinner:Zx},eN=n=>n in vf;function tN({theme:n,type:e,isLoading:t,icon:i}){let o=null,l={theme:n,type:e};return i===!1||(jr(i)?o=i({...l,isLoading:t}):W.isValidElement(i)?o=W.cloneElement(i,l):t?o=vf.spinner():eN(e)&&(o=vf[e](l))),o}var nN=n=>{let{isRunning:e,preventExitTransition:t,toastRef:i,eventHandlers:o,playToast:l}=Kx(n),{closeButton:d,children:h,autoClose:p,onClick:y,type:E,hideProgressBar:T,closeToast:S,transition:N,position:V,className:z,style:L,progressClassName:H,updateId:B,role:K,progress:ee,rtl:de,toastId:he,deleteToast:k,isIn:I,isLoading:R,closeOnClick:P,theme:D,ariaLabel:O}=n,C=us("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":de},{"Toastify__toast--close-on-click":P}),Je=jr(z)?z({rtl:de,position:V,type:E,defaultClassName:C}):us(C,z),dt=tN(n),ht=!!ee||!p,Me={closeToast:S,type:E,theme:D},ne=null;return d===!1||(jr(d)?ne=d(Me):W.isValidElement(d)?ne=W.cloneElement(d,Me):ne=Nx(Me)),Qe.createElement(N,{isIn:I,done:k,position:V,preventExitTransition:t,nodeRef:i,playToast:l},Qe.createElement("div",{id:he,tabIndex:0,onClick:y,"data-in":I,className:Je,...o,style:L,ref:i,...I&&{role:K,"aria-label":O}},dt!=null&&Qe.createElement("div",{className:us("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},dt),uw(h,n,!e),ne,!n.customProgressBar&&Qe.createElement(Dx,{...B&&!ht?{key:`p-${B}`}:{},rtl:de,theme:D,delay:p,isRunning:e,isIn:I,closeToast:S,hide:T,type:E,className:H,controlledProgress:ht,progress:ee||0})))},rN=(n,e=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}),iN=xx(rN("bounce",!0)),sN={position:"top-right",transition:iN,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function oN(n){let e={...sN,...n},t=n.stacked,[i,o]=W.useState(!0),l=W.useRef(null),{getToastToRender:d,isToastActive:h,count:p}=qx(e),{className:y,style:E,rtl:T,containerId:S,hotKeys:N}=e;function V(L){let H=us("Toastify__toast-container",`Toastify__toast-container--${L}`,{"Toastify__toast-container--rtl":T});return jr(y)?y({position:L,rtl:T,defaultClassName:H}):us(H,gf(y))}function z(){t&&(o(!0),Oe.play())}return Gx(()=>{var L;if(t){let H=l.current.querySelectorAll('[data-in="true"]'),B=12,K=(L=e.position)==null?void 0:L.includes("top"),ee=0,de=0;Array.from(H).reverse().forEach((he,k)=>{let I=he;I.classList.add("Toastify__toast--stacked"),k>0&&(I.dataset.collapsed=`${i}`),I.dataset.pos||(I.dataset.pos=K?"top":"bot");let R=ee*(i?.2:1)+(i?0:B*k);I.style.setProperty("--y",`${K?R:R*-1}px`),I.style.setProperty("--g",`${B}`),I.style.setProperty("--s",`${1-(i?de:0)}`),ee+=I.offsetHeight,de+=.025})}},[i,p,t]),W.useEffect(()=>{function L(H){var B;let K=l.current;N(H)&&((B=K.querySelector('[tabIndex="0"]'))==null||B.focus(),o(!1),Oe.pause()),H.key==="Escape"&&(document.activeElement===K||K!=null&&K.contains(document.activeElement))&&(o(!0),Oe.play())}return document.addEventListener("keydown",L),()=>{document.removeEventListener("keydown",L)}},[N]),Qe.createElement("section",{ref:l,className:"Toastify",id:S,onMouseEnter:()=>{t&&(o(!1),Oe.pause())},onMouseLeave:z,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},d((L,H)=>{let B=H.length?{...E}:{...E,pointerEvents:"none"};return Qe.createElement("div",{tabIndex:-1,className:V(L),"data-stacked":t,style:B,key:`c-${L}`},H.map(({content:K,props:ee})=>Qe.createElement(nN,{...ee,stacked:t,collapseAll:z,isIn:h(ee.toastId,ee.containerId),key:`t-${ee.key}`},K)))}))}function aN(){const[n,e]=W.useState(""),[t,i]=W.useState(""),o=Ac(),l=async d=>{d.preventDefault();try{await CR(al,n,t),Oe.success("user Login successfully",{position:"top-center"}),setTimeout(()=>{o("/Profile")},1e3)}catch(h){console.error("Error signing in with email and password:",h),Oe.error(h.message,{position:"top-center"})}};return fe.jsx(fe.Fragment,{children:fe.jsxs("section",{className:"w-screen h-screen bg-gray-900",children:[fe.jsx(Af,{}),fe.jsxs("div",{className:"flex flex-col items-center justify-center h-[80%]",children:[fe.jsx("h1",{className:"text-white text-xl text-gray-500 mb-6",children:"Login"}),fe.jsxs("form",{onSubmit:l,className:"flex flex-col w-[15rem] items-center",children:[fe.jsx("input",{type:"text",placeholder:"Email",value:n,className:"bg-gray-800 text-white p-2 w-[100%] mb-4",onChange:d=>e(d.target.value)}),fe.jsx("input",{type:"password",placeholder:"Password",className:"bg-gray-800 text-white p-2 w-[100%] mb-4",value:t,onChange:d=>i(d.target.value)}),fe.jsx("button",{className:"bg-gray-800 text-white p-2",children:"Login"})]})]})]})})}function lN(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),[d,h]=W.useState(""),p=Ac(),y=async E=>{E.preventDefault();try{await AR(al,n,t,o,d);const T=al.currentUser;T&&await Tx(GE(aw,"users",T.uid),{email:T.email,username:o,age:d}),Oe.success("user registered successfully",{position:"top-center"}),console.log(T),console.log("user registered successfully"),setTimeout(()=>{p("/Profile")},1e3)}catch(T){console.log("Error creating user with email and password:",T),Oe.error(T.message,{position:"top-center"})}};return fe.jsx(fe.Fragment,{children:fe.jsxs("section",{className:"w-screen h-screen bg-gray-900",children:[fe.jsx(Af,{}),fe.jsxs("div",{className:"flex flex-col items-center justify-center h-[80%]",children:[fe.jsx("h1",{className:"text-white text-xl text-gray-500 mb-6",children:"Register"}),fe.jsxs("form",{onSubmit:y,className:"flex flex-col items-center ",children:[fe.jsx("input",{type:"text",placeholder:"Username",className:"bg-gray-800 text-white p-2 mb-4",value:o,onChange:E=>l(E.target.value)}),fe.jsx("input",{type:"number",placeholder:"age",className:"bg-gray-800 text-white p-2 mb-4",value:d,onChange:E=>h(E.target.value)}),fe.jsx("input",{type:"email",placeholder:"Email",className:"bg-gray-800 text-white p-2 mb-4",value:n,onChange:E=>e(E.target.value)}),fe.jsx("input",{type:"password",placeholder:"Password",className:"bg-gray-800 text-white p-2 mb-4",value:t,onChange:E=>i(E.target.value)}),fe.jsx("button",{className:"bg-gray-800 text-white p-2 cursor-pointer",children:"Register"})]})]})]})})}function uN(){const[n,e]=W.useState(null),t=Ac(),i=async()=>{al.onAuthStateChanged(async l=>{const d=GE(aw,"users",l.uid),h=await Ex(d);h.exists()?e(h.data()):Oe.error("Your are not logend In",{position:"center"})})};W.useEffect(()=>{i()},[]);async function o(){try{await al.signOut(),Oe.success("user logout successfully",{position:"top-center"}),setTimeout(()=>{t("/login")},1e3)}catch(l){console.error("Error signing out:",l),Oe.error(l.message,{position:"top-center"})}}return fe.jsx(fe.Fragment,{children:fe.jsxs("section",{className:"w-screen  bg-gray-900  h-screen",children:[fe.jsx(Af,{}),fe.jsx("div",{className:"flex flex-col items-center justify-center gap-11 h-[80%]",children:n?fe.jsx(fe.Fragment,{children:fe.jsxs("div",{className:"",children:[fe.jsxs("h1",{className:"text-white text-xl  text-gray-500 mb-6",children:["Welcome, ",n.username]}),fe.jsxs("h6",{className:"text-white",children:["name:",n.username]}),fe.jsxs("h6",{className:"text-white",children:["email:",n.email]}),fe.jsxs("h6",{className:"text-white",children:["age:",n.age]}),fe.jsx("button",{onClick:o,className:" bg-gray-500 p-2 mt-2 cursor-pointer rounded",children:"logout"})]})}):fe.jsx("p",{children:"loading...."})})]})})}function cN(){return fe.jsx(fe.Fragment,{children:fe.jsxs(z0,{children:[fe.jsxs(g0,{children:[fe.jsx(qu,{path:"/dentist/",element:fe.jsx(lN,{})}),fe.jsx(qu,{path:"/login",element:fe.jsx(aN,{})}),fe.jsx(qu,{path:"/Profile",element:fe.jsx(uN,{})})]}),fe.jsx(oN,{})]})})}AT.createRoot(document.getElementById("root")).render(fe.jsx(W.StrictMode,{children:fe.jsx(cN,{})}));
