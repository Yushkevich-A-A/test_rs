(this.webpackJsonptest_rs=this.webpackJsonptest_rs||[]).push([[0],[,,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),s=t(5),r=t.n(s),u=(t(15),t(16),t(4)),i=(t(17),t(18),t(0));function o(e){var n=e.name,t=e.handleClick;return Object(i.jsx)("button",{className:"button-grey",onClick:t,children:n.toLowerCase()})}o.defaultProps={name:"\u041a\u043d\u043e\u043f\u043a\u0430",handleClick:function(){console.log("click")}};var d=o;t(20);function l(e){var n=e.count;return Object(i.jsxs)("div",{className:"banknotes-count-block",children:[e.children,Object(i.jsx)("div",{className:"banknotes-count-text-block",children:Object(i.jsx)("span",{className:"banknotes-count-text",children:n})})]})}l.defaultProps={count:0};var j=l;t(21);var b=function(e){return Object(i.jsx)("div",{className:"banknote-fifty",children:Object(i.jsx)("span",{className:"banknote-fifty-span",children:"50"})})};t(22);var f=function(e){return Object(i.jsx)("div",{className:"banknote-hundred",children:Object(i.jsx)("span",{className:"banknote-hundred-span",children:"100"})})};t(23);var h=function(e){return Object(i.jsx)("div",{className:"banknote-twohundred",children:Object(i.jsx)("span",{className:"banknote-twohundred-span",children:"200"})})};t(24);var v=function(e){return Object(i.jsx)("div",{className:"banknote-fivehundred",children:Object(i.jsx)("span",{className:"banknote-fivehundred-span",children:"500"})})};t(25);var O=function(e){return Object(i.jsx)("div",{className:"banknote-thousand",children:Object(i.jsx)("span",{className:"banknote-thousand-span",children:"1000"})})};t(26);var m=function(e){return Object(i.jsx)("div",{className:"banknote-twothousand",children:Object(i.jsx)("span",{className:"banknote-twothousand-span",children:"2000"})})};t(27);var x=function(e){return Object(i.jsx)("div",{className:"banknote-fivethousand",children:Object(i.jsx)("span",{className:"banknote-fivethousand-span",children:"5000"})})};t(28);function k(e){var n=e.banknotes;return Object(i.jsxs)("div",{className:"block-vision-all-banknotes",children:[Object(i.jsx)(j,{count:n.fifty,children:Object(i.jsx)(b,{})}),Object(i.jsx)(j,{count:n.hundred,children:Object(i.jsx)(f,{})}),Object(i.jsx)(j,{count:n.twoHundred,children:Object(i.jsx)(h,{})}),Object(i.jsx)(j,{count:n.fiveHundred,children:Object(i.jsx)(v,{})}),Object(i.jsx)(j,{count:n.thousand,children:Object(i.jsx)(O,{})}),Object(i.jsx)(j,{count:n.twoThousand,children:Object(i.jsx)(m,{})}),Object(i.jsx)(j,{count:n.fiveThousand,children:Object(i.jsx)(x,{})})]})}k.defaultProps={banknotes:{fifty:0,hundred:0,twoHundred:0,fiveHundred:0,thousand:0,twoThousand:0,fiveThousand:0}};var p=k,N=(t(29),t(3));var T=function(e){var n=Object(N.c)((function(e){return e.serviceBanknotes})).banknotes,t=e.handleClick;return Object(i.jsx)("div",{className:"reference-wrapper",children:Object(i.jsxs)("div",{className:"reference",children:[Object(i.jsx)("div",{className:"reference-title",children:"\u041a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0443\u043f\u044e\u0440 \u0432 \u0431\u0430\u043d\u043a\u043e\u043c\u0430\u0442\u0435:"}),Object(i.jsx)("div",{className:"reference-all-banknotes",children:Object(i.jsx)(p,{banknotes:n})}),Object(i.jsx)("button",{className:"close-reference",onClick:t})]})})};t(36);function w(e){var n=e.name,t=e.handleClick,c=e.typeButton;return Object(i.jsx)("button",{type:c,className:"button-green",onClick:t,children:n.toLowerCase()})}w.defaultProps={typeButton:"button",name:"\u043a\u043d\u043e\u043f\u043a\u0430"};var y=w;t(37),t(38),t(39);var H=function(e){var n=e.value,t=e.handleClick;return Object(i.jsx)("div",{className:"button-num",onClick:function(){t(n)},children:Object(i.jsx)("span",{className:"button-num-text",children:n})})};var g=function(e){var n=e.addValue,t=e.removeValue;return Object(i.jsx)("div",{className:"numpad",children:[1,2,3,"del",4,5,6,".",7,8,9,0].map((function(e){return Object(i.jsx)(H,{value:e,handleClick:"del"!==e?n:t},e)}))})},C=t(2);var B=function(e,n,t){var c=null,a=e%n,s=(e-a)/n;return t<s?(a=(s-t)*n+a,c=t):c=s,{remainsValue:a,banknotesCount:c}};var S=function(e){var n=Object(N.c)((function(e){return e.serviceBanknotes})),t=n.banknotes,a=n.initValueInput,s=Object(N.b)(),r=Object(c.useState)(a),o=Object(u.a)(r,2),d=o[0],l=o[1],j=Object(c.useRef)(null);Object(c.useEffect)((function(){l("")}),[t]),Object(c.useEffect)((function(){if(0!==d){var e=parseFloat(d)||0,n=function(e,n){var t={fifty:0,hundred:0,twoHundred:0,fiveHundred:0,thousand:0,twoThousand:0,fiveThousand:0},c=Object(C.a)({},n),a={fifty:50,hundred:100,twoHundred:200,fiveHundred:500,thousand:1e3,twoThousand:2e3,fiveThousand:5e3},s=Object.keys(t).reverse(),r=s.map((function(e){return a[e]*c[e]})).reduce((function(e,n){return e+n}),0),u={};if(s.forEach((function(e){u[e]=Math.floor(c[e]*a[e]/r*100)/100||0})),r<=e){var i=e-r;return{requiredBanknotes:Object(C.a)({},c),remains:i}}var o=e;if(o>=1e4){var d=[];s.forEach((function(e){var n=o*u[e],s=(n-n%a[e])/a[e];t[e]+=s>=c[e]?c[e]:s,d.push(t[e]*a[e])})),o-=d.reduce((function(e,n){return e+n}),0)}return s.forEach((function(e){return c[e]-=t[e]})),s.forEach((function(e){if(o>=a[e]){var n=B(o,a[e],c[e]),s=n.remainsValue,r=n.banknotesCount;o=s,t[e]+=r}})),{requiredBanknotes:t,remains:o}}(e,t),c=n.requiredBanknotes,a=n.remains;s(function(e,n,t){return{type:"INPUT_REQUEST_SUM",payload:{inputSum:e,requiredBanknotes:n,cancelleAmount:t}}}(e,c,a))}}),[d]);var b=function(e){if(parseFloat(e)>2e5)return l("200000");l(e)};return Object(i.jsxs)("div",{className:"input-block",children:[Object(i.jsxs)("form",{className:"input-form",onSubmit:function(e){e.preventDefault(),s({type:"WITHDRAWAL_OF_THE_AMOUNT"})},children:[Object(i.jsxs)("div",{className:"input-block-field",children:[Object(i.jsx)("label",{htmlFor:"field-sum",className:"input-label",children:"\u0412\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u0441\u043d\u044f\u0442\u0438\u044f"}),Object(i.jsx)("label",{htmlFor:"field-sumg",className:"input-label-warnin",children:"\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043d\u044f\u0442\u0438\u0435 \u0437\u0430 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 200 000"}),Object(i.jsx)("input",{className:"field-input-sum",name:"field-sum",id:"field-sum",value:d,onChange:function(e){var n=e.target.value.replace(/[^0-9\.]/g,"");b(n)},placeholder:"0",ref:j,maxLength:"12"})]}),Object(i.jsx)(y,{name:"\u0432\u044b\u0434\u0430\u0447\u0430",typeButton:"submit"})]}),Object(i.jsx)("div",{className:"numpad-block",children:Object(i.jsx)(g,{addValue:function(e){if(j.current.focus(),"."!==e||!d.toString().includes(e)){var n=d.toString()+e;b(n)}},removeValue:function(){j.current.focus(),0!==d.length&&b(d.slice(0,d.length-1))}})})]})},E=(t(40),t(41),t(10));var _=function(e){var n=e.handleTriggerMode,t=Object(N.c)((function(e){return e.serviceBanknotes})).amountSets,c=Object(N.b)(),a=new Array(t).fill({}).map((function(e){return Object(C.a)(Object(C.a)({},e),{},{id:Object(E.a)()})}));return Object(i.jsx)("div",{className:"sets-banknotes",children:a.map((function(e,t){return Object(i.jsxs)("div",{className:"set-banknotes",onClick:function(){return e=t,n(!1),void c(function(e){return{type:"CHANGE_SET_BUNKNOTES",payload:{id:e}}}(e));var e},children:["\u041d\u0430\u0431\u043e\u0440 ",t+1]},e.id)}))})};var A=function(e){var n=Object(c.useState)(!1),t=Object(u.a)(n,2),a=t[0],s=t[1],r=function(e){s(e)};return Object(i.jsxs)("div",{className:"block-button-mode",children:[Object(i.jsx)(y,{name:"\u043d\u0430\u0431\u043e\u0440 \u043a\u0443\u043f\u044e\u0440",handleClick:function(){return r(!a)}}),Object(i.jsx)("div",{className:"sets-mode",children:a&&Object(i.jsx)(_,{handleTriggerMode:r})})]})};var F=function(e){var n=Object(N.c)((function(e){return e.serviceBanknotes})),t=n.sumToIssue,c=n.cancelleAmount;return Object(i.jsxs)("div",{className:"info-output-fields",children:[Object(i.jsxs)("div",{className:"sum-block",children:[Object(i.jsx)("div",{className:"sum-title",children:"\u0421\u0443\u043c\u043c\u0430 \u043a \u0432\u044b\u0434\u0430\u0447\u0435"}),Object(i.jsx)("div",{className:"sum-field",children:t.toFixed(0)})]}),Object(i.jsxs)("div",{className:"sum-block",children:[Object(i.jsx)("div",{className:"sum-title",children:"\u041d\u0435\u0432\u044b\u0434\u0430\u043d\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430"}),Object(i.jsx)("div",{className:"sum-field",children:c.toFixed(2)})]})]})};var I=function(e){var n=Object(c.useState)(!1),t=Object(u.a)(n,2),a=t[0],s=t[1],r=Object(N.c)((function(e){return e.serviceBanknotes})).requiredBanknotes,o=function(){s(!a)};return Object(i.jsxs)("div",{className:"main-page",children:[Object(i.jsxs)("div",{className:"main-page-act-buttons",children:[Object(i.jsx)(A,{}),Object(i.jsx)(d,{name:"\u0441\u043f\u0440\u0430\u0432\u043a\u0430",handleClick:o})]}),Object(i.jsxs)("div",{className:"display-output-bankotes",children:[Object(i.jsx)("div",{className:"display-output-bankotes-title",children:"\u0411\u0430\u043d\u043a\u043d\u043e\u0442\u044b, \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043a \u0432\u044b\u0434\u0430\u0447\u0435:"}),Object(i.jsx)(p,{banknotes:r})]}),Object(i.jsx)(F,{}),Object(i.jsx)(S,{}),a&&Object(i.jsx)(T,{handleClick:o})]})};var U=function(){return Object(i.jsx)("div",{className:"App app-container",children:Object(i.jsx)(I,{})})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))},M=t(8),P=[{fifty:1e4,hundred:8e3,twoHundred:5e3,fiveHundred:3e3,thousand:1e3,twoThousand:400,fiveThousand:100},{fifty:3450,hundred:1643,twoHundred:234,fiveHundred:4362,thousand:6741,twoThousand:345,fiveThousand:467},{fifty:234,hundred:2345,twoHundred:9654,fiveHundred:2451,thousand:845,twoThousand:678,fiveThousand:234},{fifty:342,hundred:124,twoHundred:2154,fiveHundred:4365,thousand:2543,twoThousand:562,fiveThousand:546},{fifty:3854,hundred:1257,twoHundred:3296,fiveHundred:7556,thousand:479,twoThousand:347,fiveThousand:2732},{fifty:854,hundred:857,twoHundred:696,fiveHundred:356,thousand:279,twoThousand:147,fiveThousand:73}],V={banknotes:Object(C.a)({},P[0]),amountSets:P.length,sumToIssue:0,cancelleAmount:0,inputSum:0,initValueInput:"",requiredBanknotes:{fifty:0,hundred:0,twoHundred:0,fiveHundred:0,thousand:0,twoThousand:0,fiveThousand:0}},L=Object(M.a)({serviceBanknotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_SET_BUNKNOTES":var t=n.payload.id;return Object(C.a)(Object(C.a)({},V),{},{banknotes:Object(C.a)({},P[t])});case"INPUT_REQUEST_SUM":var c=n.payload,a=c.inputSum,s=c.requiredBanknotes,r=c.cancelleAmount,u=a-r;return Object(C.a)(Object(C.a)({},e),{},{inputSum:a,requiredBanknotes:s,cancelleAmount:r,sumToIssue:u});case"WITHDRAWAL_OF_THE_AMOUNT":var i={},o=Object.keys(e.banknotes);return o.forEach((function(n){return i[n]=e.banknotes[n]-e.requiredBanknotes[n]})),Object(C.a)(Object(C.a)({},V),{},{banknotes:Object(C.a)({},i)});default:return Object(C.a)({},e)}}}),R=Object(M.b)(L);r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(N.a,{store:R,children:Object(i.jsx)(U,{})})}),document.getElementById("root")),q()}],[[42,1,2]]]);
//# sourceMappingURL=main.9237832c.chunk.js.map