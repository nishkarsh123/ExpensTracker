(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(19),n(5)),s=n(2),i=(n(20),n(21),n(0));var r=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})},o=n(1),u=(n(23),function(e){var t=Object(o.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1];return e.onYearFilter(a),Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:a,onChange:function(e){c(e.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(24),n(25),n(26);var j=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:t}),Object(i.jsx)("div",{className:"expense-date__day",children:n}),Object(i.jsx)("div",{className:"expense-date__year",children:a})]})};var b=function(e){return Object(i.jsxs)(r,{className:"expense-item",children:[Object(i.jsx)("div",{className:"expense-item__description",children:Object(i.jsx)(j,{date:e.date})}),Object(i.jsx)("div",{className:"expense-item__description",children:e.title}),Object(i.jsx)("div",{className:"expense-item__price",children:e.amount})]})},d=function(e){return 0===e.Arr.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:" No value found "}):e.Arr.map((function(e){return Object(i.jsx)(b,{title:e.title,amount:e.amount,date:e.date},e.id)}))},x=n(9),v=(n(27),n(28),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),console.log(t),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return console.log(n),Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})},m=function(e){var t,n=[{label:"jan",value:0},{label:"feb",value:0},{label:"march",value:0},{label:"april",value:0},{label:"may",value:0},{label:"jun",value:0},{label:"july",value:0},{label:"august",value:0},{label:"september",value:0},{label:"october",value:0},{label:"november",value:0},{label:"december",value:0}],a=Object(x.a)(e.Expe);try{for(a.s();!(t=a.n()).done;){var c=t.value,l=c.date.getMonth();n[l].value+=c.amount,console.log(n[l].value)}}catch(s){a.e(s)}finally{a.f()}return Object(i.jsx)(O,{dataPoints:n})};var h=function(e){var t=Object(o.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.exp.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsxs)(r,{className:"expenses",children:[Object(i.jsx)(m,{Expe:l}),Object(i.jsx)(u,{onYearFilter:function(e){c(e)}}),Object(i.jsx)(d,{Arr:l})]})},p=n(10),f=(n(29),n(7),function(e){return Object(i.jsx)("div",{className:"new-expense__actions",children:Object(i.jsx)("button",{onClick:function(){e.changeformvalue()},children:" Add a New Expense "})})}),_=function(e){var t=Object(o.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(o.useState)(""),r=Object(s.a)(l,2),u=r[0],j=r[1],b=Object(o.useState)(""),d=Object(s.a)(b,2),x=d[0],v=d[1],O=Object(o.useState)(!0),m=Object(s.a)(O,2),h=m[0],p=m[1];return Object(i.jsx)("div",{children:h?Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:u,date:new Date(x)};console.log(n),e.onSaveExpenseData(n),c(""),v(""),j("")},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsx)("label",{children:"title"}),Object(i.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:a})]}),Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsx)("label",{children:"amount"}),Object(i.jsx)("input",{type:"number",min:"0.01",step:"0.01",onChange:function(e){j(e.target.value)},value:u})]}),Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsx)("label",{children:"date"}),Object(i.jsx)("input",{type:"date",min:"2019-2-2",max:"2025-2-2",onChange:function(e){v(e.target.value)},value:x})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"submit",children:"ADD"}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),p(!1)},children:"CANCEL"})]})]}):Object(i.jsx)(f,{changeformvalue:function(){p(!0)}})})},N=function(e){return Object(i.jsx)("div",{className:"new-expense",children:Object(i.jsx)(_,{onSaveExpenseData:function(t){var n=Object(p.a)({id:Math.random().toString()},t);e.onNewExpenseData(n)}})})},g=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var w=function(){var e=Object(o.useState)(g),t=Object(s.a)(e,2),n=t[0],a=t[1];return console.log(n),Object(i.jsxs)("div",{children:[Object(i.jsx)(N,{onNewExpenseData:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(i.jsx)(h,{exp:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(w,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.363751db.chunk.js.map