(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),i=n(3),o=n(4),a=n(1),r=(n(12),n(13),n(0)),u=function(t){var e=t.goods;return Object(r.jsx)("ul",{className:"list",children:e.map((function(t){return Object(r.jsx)("li",{className:"list-item is-size-3 is-narrow",children:t},t)}))})},l=(n(15),function(t){var e=t.name,n=t.method;return Object(r.jsx)("button",{type:"button",className:"button is-success is-light is-outlined is-rounded",onClick:n,children:e})}),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(){var t=Object(a.useState)([].concat(j)),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(!1),d=Object(o.a)(s,2),b=d[0],h=d[1],f=Object(a.useState)(1),m=Object(o.a)(f,2),O=m[0],x=m[1],g=Object(a.useState)(""),p=Object(o.a)(g,2),v=p[0],N=p[1];return Object(r.jsxs)("div",{className:"App has-text-centered",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h1",{className:"title is-1",children:"Goods list sorting"}),b?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{name:"Reverse",method:function(){c((function(t){return Object(i.a)(t).reverse()}))}}),Object(r.jsx)(l,{name:"Sort alphabetically",method:function(){c((function(t){return Object(i.a)(t).sort((function(t,e){return t.localeCompare(e)}))}))}}),Object(r.jsx)(l,{name:"Reset",method:function(){c([].concat(j)),x(1)}}),Object(r.jsx)(l,{name:"Sort by length",method:function(){c((function(t){return Object(i.a)(t).sort((function(t,e){return t.length-e.length}))}))}}),Object(r.jsx)("div",{className:"select is-rounded is-success is-light is-outlined",children:Object(r.jsx)("select",{value:O,onChange:function(t){x(+t.target.value),c([].concat(j).filter((function(e){return e.length>=+t.target.value})))},children:Array(10).map((function(t,e){return Object(r.jsx)("option",{value:e+1,children:e+1},"".concat(e+1))}))})}),Object(r.jsxs)("div",{className:"field has-addons has-addons-centered mt-4",children:[Object(r.jsx)("div",{className:"control is-one-fifth",children:Object(r.jsx)("input",{type:"text",value:v,className:"input is-success is-light is-outlined is-rounded",onChange:function(t){return N(t.target.value)}})}),Object(r.jsx)("div",{className:"control is-one-fifth is-pulled-left",children:Object(r.jsx)("button",{type:"button",className:"button is-success is-light is-outlined is-rounded",onClick:function(){c((function(t){return[].concat(Object(i.a)(t),[v])})),N("")},children:"Click to Add"})})]}),Object(r.jsx)(u,{goods:n})]}):Object(r.jsx)(l,{name:"Start",method:function(){h((function(t){return!t}))}})]})};s.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7bfe6d7b.chunk.js.map