"use strict";(self.webpackChunkglossary=self.webpackChunkglossary||[]).push([[294],{6365:(t,n,e)=>{e.d(n,{j:()=>s});var i=e(4848),o=e(6540),r=e(8107),c=e(5822);const a="TOTqpWlG";var s=function(){var t=(0,o.useState)(!1),n=t[0],e=t[1];return(0,o.useEffect)((function(){var t=function(){0!==window.scrollY?e(!0):e(!1)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),(0,i.jsx)(r.Ay,{theme:{components:{Button:{defaultHoverBg:"rgb(5, 5, 157)",defaultHoverColor:"white"}}},children:(0,i.jsx)(c.Ay,{onClick:function(){window.scrollTo({top:0})},className:"".concat(n?"".concat(a):"".concat(a," ").concat("Hcb1K1gh")),children:"↑ Наверх"})})}},6:(t,n,e)=>{e.d(n,{Y:()=>f});var i=e(4848),o=e(6540),r=e(4976);const c="X3ooc8bc",a="JL5IKQFU";var s=e(4457),l=function(t){var n=t.page;return(0,i.jsxs)("nav",{className:"rtt1SwL4",children:[(0,i.jsx)(r.N_,{className:n===s.r.Main?a:c,to:"/",children:"📚 Глоссарий"}),(0,i.jsx)(r.N_,{className:n===s.r.Graph?a:c,to:"/graph",children:"🧶 Семантический граф"})]})};const u="HQU7E8uc";var d=function(){return(0,i.jsx)("button",{className:"FD_48d0N",children:(0,i.jsx)(r.N_,{className:"GFgHeukY",target:"blank",to:"https://vk.com/0livka7",children:"✉ Александр Пирюшов"})})},f=function(t){var n=t.page,e=(0,o.useState)(!1),r=e[0],c=e[1];return(0,o.useEffect)((function(){var t=function(){0!==window.scrollY?c(!0):c(!1)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),(0,i.jsxs)("header",{className:"".concat(r?"".concat(u," ").concat("skH1x6wr"):"".concat(u)),children:[(0,i.jsx)(l,{page:n}),(0,i.jsx)(d,{})]})}},4294:(t,n,e)=>{e.r(n),e.d(n,{default:()=>m});var i=e(4848),o=e(4457),r=e(6),c=e(6365),a=e(3721),s=e(6540),l=e(860);const u="fhK5Iw3b",d="GRTmKXRS";var f=function(){return f=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},f.apply(this,arguments)},v=function(t){var n=t.t,e=t.connectNodes,o=(0,s.useState)({current:{x:n.initialX,y:n.initialY},position:{x:n.initialX,y:n.initialY},relativePosition:{x:n.initialX,y:n.initialY},dragging:!1}),r=o[0],c=o[1],a=(0,s.useCallback)((function(t){t.preventDefault(),c((function(n){return f(f({},n),{current:{x:t.clientX,y:t.clientY},position:{x:t.clientX,y:t.clientY},dragging:!0})}))}),[r.dragging]),l=(0,s.useCallback)((function(t){t.preventDefault(),t.stopPropagation(),e(),r.dragging&&c((function(n){return f(f({},n),{current:{x:t.clientX,y:t.clientY}})}))}),[r]),v=(0,s.useCallback)((function(t){c((function(){return{position:{x:r.current.x-(r.position.x-r.relativePosition.x),y:r.current.y-(r.position.y-r.relativePosition.y)},current:{x:r.current.x-(r.position.x-r.relativePosition.x),y:r.current.y-(r.position.y-r.relativePosition.y)},relativePosition:{x:r.current.x-(r.position.x-r.relativePosition.x),y:r.current.y-(r.position.y-r.relativePosition.y)},dragging:!1}}))}),[r]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:{transform:"translate(".concat(r.current.x-(r.position.x-r.relativePosition.x),"px, ").concat(r.current.y-(r.position.y-r.relativePosition.y),"px)")},id:"node-".concat(n.id),onMouseOver:function(){n.to&&n.to.forEach((function(t){document.getElementById("predicate_".concat(n.id,"_").concat(t.id)).classList.add(d)}))},className:r.dragging?"".concat(u," ").concat("U7g6kktC"):"".concat(u),draggable:!0,onMouseDown:function(t){return a(t)},onMouseMove:function(t){return l(t)},onMouseLeave:function(t){return function(t){t.preventDefault(),n.to&&n.to.forEach((function(t){document.getElementById("predicate_".concat(n.id,"_").concat(t.id)).classList.remove(d)})),c((function(t){return{position:{x:r.current.x-(r.position.x-r.relativePosition.x),y:r.current.y-(r.position.y-r.relativePosition.y)},current:{x:r.current.x-(r.position.x-r.relativePosition.x),y:r.current.y-(r.position.y-r.relativePosition.y)},relativePosition:{x:r.current.x-(r.position.x-r.relativePosition.x),y:r.current.y-(r.position.y-r.relativePosition.y)},dragging:!1}}))}(t)},onMouseUp:function(t){return v(t)},children:n.termin})})};var g=function(t){var n=t.from,e=t.predicate,o=t.to;return(0,i.jsx)("span",{id:"predicate_".concat(n,"_").concat(o),className:"mdNftnSb",children:e})},h=function(t){var n,e,i=document.getElementById("node-".concat(t)),o=null==i?void 0:i.style.getPropertyValue("transform").match(/\d+/g);return{width:null!==(n=null==i?void 0:i.offsetWidth)&&void 0!==n?n:0,height:null!==(e=null==i?void 0:i.offsetHeight)&&void 0!==e?e:0,translateX:Number(o?o[0]:0),translateY:Number(o?o[1]:0),left:Number(null==i?void 0:i.clientLeft),top:Number(null==i?void 0:i.clientTop)}};function p(t){var n=document.getElementById("canvas"),e=n.getContext("2d");e.clearRect(0,0,n.width,n.height),t.forEach((function(t){if(t.to&&t.to.length>0){var n=h(t.id),i=n.width,o=n.height,r=n.translateX,c=n.translateY,a=n.left,s=n.top;t.to.forEach((function(n){var l=h(n.id),u=l.width,d=l.height,f=l.translateX,v=l.translateY,g=l.left,p=l.top;e.beginPath(),e.strokeStyle="rgb(99, 99, 99)",e.moveTo(i/2+a+r,o/2+s+c),e.lineTo(u/2+g+f,d/2+p+v),e.lineWidth&&(e.lineWidth=2),e.stroke();var x=(Math.min(v+d/2,c+o/2)+Math.max(v+d/2,c+o/2))/2,m=(Math.min(f+u,r+i)+Math.max(f,r))/2,y=document.getElementById("predicate_".concat(t.id,"_").concat(n.id));y.style.setProperty("transform","translate(".concat(m-y.getBoundingClientRect().width/2,"px, ").concat(x-y.getBoundingClientRect().height/2-y.getBoundingClientRect().height/8,"px)"))}))}}))}var x=function(){var t=(0,a.e3)(l.N1);return(0,s.useEffect)((function(){p(t)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("canvas",{className:"C43EwmYF",id:"canvas",width:window.innerWidth,height:window.innerHeight}),t&&t.map((function(n){return(0,i.jsx)(v,{connectNodes:function(){return p(t)},t:n},n.id)})),t&&t.map((function(t){return t.to?(0,i.jsx)(s.Fragment,{children:t.to&&t.to.length>0&&t.to.map((function(n){return(0,i.jsx)(g,{from:t.id,to:n.id,predicate:n.predicate},"".concat(t.id,"_").concat(n.id,"_").concat(n.predicate))}))},"".concat(t.id,"_").concat(t.to.join("_"))):null}))]})};const m=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Y,{page:o.r.Graph}),(0,i.jsxs)("main",{children:[(0,i.jsx)(x,{}),(0,i.jsx)(c.j,{})]})]})}}}]);