"use strict";(self.webpackChunkglossary=self.webpackChunkglossary||[]).push([[687],{687:(n,e,t)=>{t.r(e),t.d(e,{default:()=>x});var r=t(848),o=t(489),a=t(721),c=t(266),i=new(function(){function n(){this.axios=c.A.create({baseURL:"http://localhost:5000/api",headers:{"Content-Type":"application/json"}})}return n.prototype.get=function(n,e){return void 0===e&&(e={}),t=this,r=void 0,a=function(){return function(n,e){var t,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(n,c)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.axios.get(n,e)];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(n,e){function c(n){try{s(a.next(n))}catch(n){e(n)}}function i(n){try{s(a.throw(n))}catch(n){e(n)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,i)}s((a=a.apply(t,r||[])).next())}));var t,r,o,a},n}()),s=(0,o.y$)(null),u=(0,o.EH)("Fetch glossary",{handler:function(){return n=void 0,e=void 0,r=function(){return function(n,e){var t,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(n,c)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,i.get("/glossary")];case 1:return[2,n.sent().data];case 2:throw n.sent();case 3:return[2]}}))},new((t=void 0)||(t=Promise))((function(o,a){function c(n){try{s(r.next(n))}catch(n){a(n)}}function i(n){try{s(r.throw(n))}catch(n){a(n)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,i)}s((r=r.apply(n,e||[])).next())}));var n,e,t,r}}),l=(0,a.qD)();(0,o.XM)({clock:u.doneData,target:s}),(0,o.XM)({clock:l.open,target:u});var f=t(540),h=t(976);var p=function(){return(0,r.jsxs)("nav",{className:"rtt1SwL4",children:[(0,r.jsx)(h.N_,{to:"/",children:"Глоссарий"}),(0,r.jsx)(h.N_,{to:"/graph",children:"Граф глоссария"})]})};const d="HQU7E8uc";var v=function(){var n=(0,f.useState)(!1),e=n[0],t=n[1];return(0,f.useEffect)((function(){var n=function(){0!==window.scrollY?t(!0):t(!1)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),(0,r.jsx)("header",{className:"".concat(e?"".concat(d," ").concat("skH1x6wr"):"".concat(d)),children:(0,r.jsx)(p,{})})},y=t(643);var w=function(n){var e=n.termin;return(0,r.jsx)(y.A,{className:"ZfUQk5os",title:e.termin,bordered:!1,children:(0,r.jsx)("p",{children:e.definition})})};var b=function(){var n=(0,a.e3)(s);return(0,r.jsx)("div",{className:"ch4ID4zs",children:n&&n.map((function(n){return(0,r.jsx)(w,{termin:n},n.id)}))})};const x=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),(0,r.jsx)(v,{}),(0,r.jsx)("main",{children:(0,r.jsx)(b,{})})]})}}}]);