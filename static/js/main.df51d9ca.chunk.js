(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),i=c(5),s=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),o=c(0),l=function(t){var e=t.tab,c=t.onTabClick,a=t.selectedTab;return Object(o.jsx)("li",{className:d()({"is-active":a.id===e.id}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(e.id),"data-cy":"TabLink",onClick:function(){var t;t=e.id,a.id!==t&&c(t)},children:e.title})},e.id)},r=function(t){var e=t.tabs,c=t.onTabClick,a=t.selectedTab;return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)(l,{tab:t,onTabClick:c,selectedTab:a})}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(s.useState)(j[0]),e=Object(i.a)(t,2),c=e[0],a=e[1];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(o.jsx)(r,{tabs:j,onTabClick:function(t){var e=j.find((function(e){return e.id===t}));e&&a(e)},selectedTab:c})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.df51d9ca.chunk.js.map