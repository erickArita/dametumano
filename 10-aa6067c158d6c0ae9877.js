/*! For license information please see 10-aa6067c158d6c0ae9877.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/uZM":function(e,t,a){},"9Dj+":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),o=a("YIkO"),l=a.n(o),s=a("9eSz"),d=a.n(s),u=a("ma3e"),c=a("pe+X"),f=a.n(c),m=()=>{var e=Object(i.useStaticQuery)("38731678"),{0:t,1:a}=Object(r.useState)(!1);return Object(r.useEffect)(()=>{var e=()=>{a(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),n.a.createElement("nav",{className:f.a.navbar},n.a.createElement("div",{className:f.a.logo},n.a.createElement(i.Link,{rel:"preload",to:"/"},n.a.createElement(d.a,{className:f.a.logoItem,fixed:e.logo.sharp.fixed,alt:"logo de dame tu mano"}),n.a.createElement("h3",{className:f.a.logoName},e.site.siteMetadata.title))),n.a.createElement("div",{onClick:()=>{a(!t)},className:f.a.menu+" "+(t&&f.a.active)},n.a.createElement(u.a,null)),n.a.createElement("div",{className:f.a.socialMedia},n.a.createElement("a",{href:"https://www.facebook.com/dametumanohn/",style:{color:"black"},target:"__black"},n.a.createElement(u.b,{className:f.a.icon})),n.a.createElement("p",null,"|"),n.a.createElement("a",{href:"https://www.instagram.com/dametumanohn/",style:{color:"black"},target:"__black"},n.a.createElement(u.c,{className:f.a.icon}))),n.a.createElement("div",{className:f.a.links+" "+(t?f.a.movileMenu:f.a.movileMenuDisable)},n.a.createElement(l.a,{items:["header","nosotros","galeria"],currentClassName:f.a.activeLink},n.a.createElement(i.Link,{className:f.a.link,to:"/#header"},"INICIO"),n.a.createElement(i.Link,{className:f.a.link,to:"#nosotros"},"NOSOTROS"),n.a.createElement(i.Link,{className:f.a.link,to:"#galeria"},"GALERIA"),n.a.createElement(i.Link,{className:f.a.link,to:"#"},"TESTIMONIALES"),n.a.createElement(i.Link,{className:f.a.link,to:"/#contacto"},"CONTACTO"),n.a.createElement(i.Link,{className:f.a.link,to:"/#aa"},"DONAR"))))},p=a("Wmhb"),h=a.n(p),g=()=>{var e=Object(i.useStaticQuery)("1860950733"),t=[e.mobileImage.childImageSharp.fluid,Object.assign({},e.desktopImage.childImageSharp.fluid,{media:"(min-width: 768px)"})];return n.a.createElement("div",{id:"header",className:h.a.header},n.a.createElement("div",{className:h.a.images},n.a.createElement(d.a,{fluid:t,className:h.a.img}),n.a.createElement("div",{className:h.a.filtro}),n.a.createElement("div",{className:h.a.textos},n.a.createElement("div",{className:h.a.textContainer},n.a.createElement("h1",{className:h.a.title},"Bienvenido a Club Dame tu Mano"),n.a.createElement("p",{className:h.a.parrafo},"Somos un grupo de jóvenes dispuestos a trabajar por una sociedad más justa y fraterna para todos.")),n.a.createElement(i.Link,{to:"/#unete",className:h.a.button},"Únete"))))};a("9d8Q"),a("/uZM"),t.default=e=>{var{children:t}=e;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement(m,null),n.a.createElement(g,null)),n.a.createElement("main",null,t))}},"9d8Q":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),l=r(a("8OQS")),s=r(a("pVnL")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=c(e),a=m(t);return h[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+o+l+a+r+t+i+n+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=d.default.createElement(R,(0,s.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),l):l})),R=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var _=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,g=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,O=h||g;if(!O)return null;var _=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,s.default)({opacity:_?1:0,transition:T?"opacity "+y+"ms":"none"},l),P="boolean"==typeof v?"lightgray":v,j={transitionDelay:y+"ms"},V=(0,s.default)({opacity:this.state.imgLoaded?0:1},T&&j,l,f),z={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:S},H=this.state.isHydrated?p(O):O[0];if(h)return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),P&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&j)}),H.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:z,imageVariants:O,generateSources:N}),H.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:z,imageVariants:O,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,E(O),d.default.createElement(R,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:w},H,{imageVariants:O}))}}));if(g){var M=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete M.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},P&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:P,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},T&&j)}),H.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:z,imageVariants:O,generateSources:N}),H.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:z,imageVariants:O,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,E(O),d.default.createElement(R,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:w},H,{imageVariants:O}))}}))}return null},t}(d.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}_.propTypes={resolutions:T,sizes:C,fixed:P(u.default.oneOfType([T,u.default.arrayOf(T)])),fluid:P(u.default.oneOfType([C,u.default.arrayOf(C)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var j=_;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t,a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var n=+new Date;!!t&&n<t+r?(clearTimeout(a),a=setTimeout((function(){t=n,e()}),r)):(t=n,e())}};t.default=r},Ijbi:function(e,t,a){var r=a("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("q1tI"),n=a.n(r),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.a.createContext&&n.a.createContext(i),l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function d(e){return function(t){return n.a.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.a.createElement(t.tag,l({key:a},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var a,r=e.attr,i=e.size,o=e.title,d=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:a,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&n.a.createElement("title",null,o),e.children)};return void 0!==o?n.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},RIqP:function(e,t,a){var r=a("Ijbi"),n=a("EbDI"),i=a("ZhPi"),o=a("Bnag");e.exports=function(e){return r(e)||n(e)||i(e)||o()}},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},Wmhb:function(e,t,a){e.exports={header:"header-module--header--3QwAt",images:"header-module--images--3B0XA",img:"header-module--img--3kwDg",filtro:"header-module--filtro--1nmgA",textos:"header-module--textos--11hr1",textContainer:"header-module--textContainer--1J9hl",title:"header-module--title--bRpng",parrafo:"header-module--parrafo--1G_oy",button:"header-module--button--2997v"}},YIkO:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("pVnL")),i=r(a("lSNA")),o=r(a("RIqP")),l=r(a("lwsE")),s=r(a("a1gu")),d=r(a("Nsbk")),u=r(a("PJYZ")),c=r(a("W8MJ")),f=r(a("7W2i")),m=r(a("17x9")),p=r(a("q1tI")),h=r(a("TSYQ")),g=r(a("Fxm3"));var v=function(e){function t(e){var a;return(0,l.default)(this,t),(a=(0,s.default)(this,(0,d.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,u.default)(a)),a}return(0,f.default)(t,e),(0,c.default)(t,null,[{key:"propTypes",get:function(){return{items:m.default.arrayOf(m.default.string).isRequired,currentClassName:m.default.string.isRequired,scrolledPastClassName:m.default.string,style:m.default.object,componentTag:m.default.oneOfType([m.default.string,m.default.elementType]),offset:m.default.number,rootEl:m.default.string,onUpdate:m.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,c.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],r=0,n=e.length;r<n;r++)a[r]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],r=[],n=e||this.state.targetItems,i=!1,l=0,s=n.length;l<s;l++){var d=n[l],u=!i&&this._isInView(d);u?(i=!0,t.push(d)):a.push(d);var c=l===s-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(d)&&!u&&c&&f&&(a.pop(),a.push.apply(a,(0,o.default)(t)),t=[d],r=this._fillArray(r,!1),u=!0),r.push(u)}return{inView:t,outView:a,viewStatusList:r,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(r)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,r=a.rootEl,n=a.offset;r&&(t=document.querySelector(r).getBoundingClientRect());var i=e.getBoundingClientRect(),o=r?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,s=l+o,d=r?i.top+l-t.top+n:i.top+l+n,u=d+e.offsetHeight;return d<s&&u>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,r=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=r}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),r=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(r)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,r=a.children,o=a.className,l=a.scrolledPastClassName,s=a.style,d=0,u=p.default.Children.map(r,(function(t,a){var r;if(!t)return null;var o=t.type,s=l&&e.state.isScrolledPast[a],u=(0,h.default)((r={},(0,i.default)(r,"".concat(t.props.className),t.props.className),(0,i.default)(r,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,i.default)(r,"".concat(e.props.scrolledPastClassName),s),r));return p.default.createElement(o,(0,n.default)({},t.props,{className:u,key:d++}),t.props.children)})),c=(0,h.default)((0,i.default)({},"".concat(o),o));return p.default.createElement(t,{className:c,style:s},u)}}]),t}(p.default.Component);t.default=v},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},"pe+X":function(e,t,a){e.exports={navbar:"navbar-module--navbar--3jbo4",logo:"navbar-module--logo--3PUH4",logoItem:"navbar-module--logoItem--EDyti",logoName:"navbar-module--logoName--1w6Lc",menu:"navbar-module--menu--3T_59",socialMedia:"navbar-module--socialMedia--3sFmg",icon:"navbar-module--icon--1g50X",links:"navbar-module--links--1wRRh",link:"navbar-module--link--3wSgr",activeLink:"navbar-module--activeLink--jgGMh",popButton:"navbar-module--popButton--1dTXi",active:"navbar-module--active--3iLFr",movileMenuDisable:"navbar-module--movileMenuDisable--3vC1R",movileMenu:"navbar-module--movileMenu--3x-8k"}}}]);
//# sourceMappingURL=10-aa6067c158d6c0ae9877.js.map