(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Je0I:function(e,t,l){e.exports={container:"carousel-module--container--2M0CB",slides:"carousel-module--slides--1PA_h",slide:"carousel-module--slide--1CrWb",slideContent:"carousel-module--slideContent--1CJgW",slideContentInner:"carousel-module--slideContentInner--1BsTU",slideSubtitle:"carousel-module--slideSubtitle--393jv",slideTitle:"carousel-module--slideTitle--2D89O",slideDescription:"carousel-module--slideDescription--1Xz4C",slideBackground:"carousel-module--slideBackground--2bCBL"}},VkLr:function(e,t,l){e.exports={galeria:"galery-module--galeria--3W9A8",title:"galery-module--title--2Bqmp"}},k7IV:function(e,t,l){"use strict";l.r(t);var s=l("q1tI"),a=l.n(s),i=l("Wbzz"),n=l("KQm4"),r=l("Je0I"),o=l.n(r),c=e=>{var{slide:t,offset:l}=e,i=0===l||null,n=(e=>{var t=Object(s.useRef)(null);return Object(s.useEffect)(()=>{if(t.current&&e){var l={rect:void 0,mouseX:void 0,mouseY:void 0},s=t.current,a=e=>{if(s){l.rect||(l.rect=s.getBoundingClientRect()),l.mouseX=e.clientX,l.mouseY=e.clientY;var t=(l.mouseX-l.rect.left)/l.rect.width,a=(l.mouseY-l.rect.top)/l.rect.height;s.style.setProperty("--px",t),s.style.setProperty("--py",a)}};return s.addEventListener("mousemove",a),()=>{s.removeEventListener("mousemove",a)}}},[e]),t})(i);return a.a.createElement("div",{ref:n,className:o.a.slide,"data-active":i,style:{"--offset":l,"--dir":0===l?0:l>0?1:-1}},a.a.createElement("div",{className:o.a.slideContent,style:{backgroundImage:"url('"+(null==t?void 0:t.image)+"')"}},a.a.createElement("div",{className:o.a.slideContentInner},a.a.createElement("h2",{className:o.a.slideTitle},null==t?void 0:t.title),a.a.createElement("h3",{className:o.a.slideSubtitle},null==t?void 0:t.subtitle),a.a.createElement("p",{className:o.a.slideDescription},null==t?void 0:t.description))))},d=e=>{var{slides:t}=e,{0:l,1:i}=Object(s.useReducer)((e,l)=>"NEXT"===l.type?Object.assign({},e,{slideIndex:(e.slideIndex+1)%t.length}):"PREV"===l.type?Object.assign({},e,{slideIndex:0===e.slideIndex?t.length-1:e.slideIndex-1}):void 0,{slideIndex:0});return a.a.createElement("div",{className:o.a.container},a.a.createElement("div",{className:o.a.slides},a.a.createElement("button",{style:{cursor:"pointer"},onClick:()=>i({type:"NEXT"})},"‹"),[].concat(Object(n.a)(t),Object(n.a)(t),Object(n.a)(t)).map((e,s)=>{var i=t.length+(l.slideIndex-s);return a.a.createElement(c,{slide:e,offset:i,key:s})}),a.a.createElement("button",{style:{cursor:"pointer"},onClick:()=>i({type:"PREV"})},"›")))},u=l("VkLr"),m=l.n(u);t.default=()=>{var{allImagesWithoutWEBPExtension:e}=Object(i.useStaticQuery)("47921012"),{edges:t}=e,l=[];return t.forEach(e=>{l.push({image:e.node.childImageSharp.fluid.src})}),a.a.createElement("section",{id:"galeria",className:m.a.galeria},a.a.createElement("h2",{className:m.a.title},"Galeria"),a.a.createElement(d,{slides:l}))}}}]);
//# sourceMappingURL=11-a8945e90b97f46d0e143.js.map