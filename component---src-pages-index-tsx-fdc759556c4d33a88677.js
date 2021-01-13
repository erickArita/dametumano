/*! For license information please see component---src-pages-index-tsx-fdc759556c4d33a88677.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var s=i(t),h=i(r),m=0;m<c.length;++m){var b=c[m];if(!(a[b]||n&&n[b]||h&&h[b]||s&&s[b])){var v=p(r,b);try{u(t,b,v)}catch(g){}}}}return t}},QeBL:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n);function a(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=r("TOwV"),u=r("2mql"),l=r.n(u);function f(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var p=o.a.createContext();var d={initialChunks:{}};var y=function(e){return e};function h(e){var t=e.defaultResolveComponent,r=void 0===t?y:t,n=e.render,u=e.onLoad;function h(e,t){void 0===t&&(t={});var y=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),h={};function m(e){return t.cacheKey?t.cacheKey(e):y.resolve?y.resolve(e):"static"}function b(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!Object(i.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return l()(o,a,{preload:!0}),a}var v,g=function(e){var r,o;function i(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:m(r)},f(!r.__chunkExtractor||y.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(y.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(y.chunkName(r))),s(n)):(!1!==t.ssr&&(y.isReady&&y.isReady(r)||y.chunkName&&d.initialChunks[y.chunkName(r)])&&n.loadSync(),n)}o=e,(r=i).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o,i.getDerivedStateFromProps=function(e,t){var r=m(e);return c({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var l=i.prototype;return l.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},l.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},l.componentWillUnmount=function(){this.mounted=!1},l.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},l.getCacheKey=function(){return m(this.props)},l.getCache=function(){return h[this.getCacheKey()]},l.setCache=function(e){void 0===e&&(e=void 0),h[this.getCacheKey()]=e},l.triggerOnLoad=function(){var e=this;u&&setTimeout((function(){u(e.state.result,e.props)}))},l.loadSync=function(){if(this.state.loading)try{var e=b(y.requireSync(this.props),this.props,w);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:y.resolve(this.props),chunkName:y.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},l.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=b(t,e.props,{Loadable:w});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},l.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,a(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=y.requireAsync(r)).status="PENDING",this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:y.resolve(e.props),chunkName:y.chunkName(e.props),error:t?t.message:t}),n.status="REJECTED"}))),n},l.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,s=(e.__chunkExtractor,a(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,u=i.error,l=i.loading,f=i.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(u)throw u;var p=o||t.fallback||null;return l?p:n({fallback:p,result:f,options:t,props:c({},s,{ref:r})})},i}(o.a.Component),S=(v=g,function(e){return o.a.createElement(p.Consumer,null,(function(t){return o.a.createElement(v,Object.assign({__chunkExtractor:t},e))}))}),w=o.a.forwardRef((function(e,t){return o.a.createElement(S,Object.assign({forwardedRef:t},e))}));return w.preload=function(e){y.requireAsync(e)},w.load=function(e){return y.requireAsync(e)},w}return{loadable:h,lazy:function(e,t){return h(e,c({},t,{suspense:!0}))}}}var m=h({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),b=m.loadable,v=m.lazy,g=h({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),S=g.loadable,w=g.lazy;var C=b;C.lib=S,v.lib=w;var E=C,$=E(()=>Promise.all([r.e(1),r.e(3),r.e(0),r.e(10)]).then(r.bind(null,"9Dj+"))),k=E(()=>r.e(0).then(r.bind(null,"H8eV"))),O=E(()=>Promise.all([r.e(1),r.e(0),r.e(9)]).then(r.bind(null,"0fJC"))),_=E(()=>r.e(12).then(r.bind(null,"b0ys"))),P=E(()=>Promise.all([r.e(1),r.e(11)]).then(r.bind(null,"k7IV")));t.default=()=>o.a.createElement($,null,o.a.createElement(k,{title:"Club Dame Tu Mano",lang:"es",description:"Club Dame tu mano es una ONG ubicada en Santa RIta de Copán fundada por un grupo de jovenes para reducir la desigualdad social"}),o.a.createElement(O,null),o.a.createElement(P,null),o.a.createElement(_,null))},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,S=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function C(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case c:case i:case s:case y:return e;default:switch(e=e&&e.$$typeof){case l:case d:case b:case m:case u:return e;default:return t}}case a:return t}}}function E(e){return C(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=c,t.Lazy=b,t.Memo=m,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=y,t.isAsyncMode=function(e){return E(e)||C(e)===f},t.isConcurrentMode=E,t.isContextConsumer=function(e){return C(e)===l},t.isContextProvider=function(e){return C(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return C(e)===d},t.isFragment=function(e){return C(e)===c},t.isLazy=function(e){return C(e)===b},t.isMemo=function(e){return C(e)===m},t.isPortal=function(e){return C(e)===a},t.isProfiler=function(e){return C(e)===i},t.isStrictMode=function(e){return C(e)===s},t.isSuspense=function(e){return C(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===i||e===s||e===y||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d||e.$$typeof===g||e.$$typeof===S||e.$$typeof===w||e.$$typeof===v)},t.typeOf=C}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fdc759556c4d33a88677.js.map