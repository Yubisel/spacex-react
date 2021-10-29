(this["webpackJsonpspacex-react"]=this["webpackJsonpspacex-react"]||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(19),r=c.n(a),l=(c(54),c(55),c(71)),j=c(75),i=c(76),b=c(25),d=c(1);var o=function(){return Object(d.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(d.jsxs)(l.a,{className:"py-3",children:[Object(d.jsx)(j.a.Brand,{href:"/",children:"SpaceX"}),Object(d.jsxs)(i.a,{className:"me-auto",children:[Object(d.jsx)(b.b,{to:"/",className:"nav-link",exact:!0,children:"Home"}),Object(d.jsx)(b.b,{to:"/rockets",className:"nav-link",children:"Rockets"}),Object(d.jsx)(b.b,{to:"/launchs",className:"nav-link",children:"Launchs"})]})]})})},h=c(2),x=c(10),O=c(20),m=c.n(O),u=c(27),p=c(9),f=c(72),N=c(73),k=c(77),v={API_URL:"https://api.spacexdata.com/v4/"};var y=function(){var e=Object(s.useState)(),t=Object(p.a)(e,2),c=t[0],n=t[1],a="w-25 d-inline-block text-end pe-4 fw-bold";return Object(s.useEffect)((function(){try{var e=function(){var e=Object(u.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v.API_URL,"company"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:if(200!==(t=e.sent).status){e.next=10;break}return e.next=6,t.text();case 6:c=e.sent,n(JSON.parse(c)),e.next=11;break;case 10:console.log("Error de conexi\xf3n al servidor");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[]),Object(d.jsxs)("section",{className:"container",children:[Object(d.jsx)(f.a,{className:"my-3",children:Object(d.jsx)(N.a,{children:Object(d.jsx)("h4",{children:"Company info"})})}),Object(d.jsx)(f.a,{className:"my-3",children:Object(d.jsx)(N.a,{children:c&&Object(d.jsxs)(k.a,{children:[Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Name:"}),c.name]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Founder:"}),c.founder]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Founded:"}),c.founded]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"CEO:"}),c.ceo]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"COO:"}),c.coo]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"CTO:"}),c.cto]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"CTO Propulsion:"}),c.cto_propulsion]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Employees:"}),c.employees]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Valuation:"}),c.valuation]}),Object(d.jsxs)(k.a.Item,{className:"d-flex align-items-center",children:[Object(d.jsx)("label",{className:a,children:"Summary:"}),Object(d.jsx)("label",{className:"w-75 d-inline-block",children:c.summary})]}),Object(d.jsxs)(k.a.Item,{className:"d-flex align-items-center",children:[Object(d.jsx)("label",{className:a,children:"Headquarters:"}),Object(d.jsxs)("label",{className:"w-75 d-inline-block",children:[c.headquarters.address,", ",c.headquarters.city,", ",c.headquarters.state]})]}),Object(d.jsxs)(k.a.Item,{className:"d-flex align-items-center",children:[Object(d.jsx)("label",{className:a,children:"Links:"}),Object(d.jsxs)("div",{className:"w-25 d-inline-block",children:[Object(d.jsx)("label",{className:"d-block",children:Object(d.jsx)("a",{href:c.links.website,target:"_black",children:c.links.website})}),Object(d.jsx)("label",{className:"d-block",children:Object(d.jsx)("a",{href:c.links.flickr,target:"_black",children:c.links.flickr})}),Object(d.jsx)("label",{className:"d-block",children:Object(d.jsx)("a",{href:c.links.twitter,target:"_black",children:c.links.twitter})}),Object(d.jsx)("label",{className:"d-block",children:Object(d.jsx)("a",{href:c.links.elon_twitter,target:"_black",children:c.links.elon_twitter})})]})]})]})})})]})},g=c(31),w=c(32),I=c(74);var _=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){try{var e=function(){var e=Object(u.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v.API_URL,"rockets"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:if(200!==(t=e.sent).status){e.next=10;break}return e.next=6,t.text();case 6:c=e.sent,n(JSON.parse(c)),e.next=11;break;case 10:console.log("Error de conexi\xf3n al servidor");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[]),Object(d.jsxs)("section",{className:"container",children:[Object(d.jsx)(f.a,{className:"my-3",children:Object(d.jsx)(N.a,{children:Object(d.jsx)("h4",{children:"Rockets list"})})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(N.a,{children:Object(d.jsxs)(I.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"text-center",children:"#"}),Object(d.jsx)("th",{className:"text-center",children:"Name"}),Object(d.jsx)("th",{className:"text-center",children:"Stages"}),Object(d.jsx)("th",{className:"text-center",children:"Cost per launch"}),Object(d.jsx)("th",{className:"text-center",children:"Active"}),Object(d.jsx)("th",{})]})}),Object(d.jsx)("tbody",{children:c&&c.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:t+1}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{className:"text-center",children:e.stages}),Object(d.jsx)("td",{className:"text-end",children:e.cost_per_launch}),Object(d.jsx)("td",{className:"text-center",children:e.active?"Yes":"No"}),Object(d.jsxs)("td",{className:"text-center actions-column",children:[Object(d.jsx)("span",{className:"btn btn-sm btn-primary px-2 mx-2",children:Object(d.jsx)(g.a,{icon:w.a})}),Object(d.jsx)("span",{className:"btn btn-sm btn-primary",children:Object(d.jsx)(g.a,{icon:w.b})})]})]},e.id)}))})]})})})]})};var C=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){try{var e=function(){var e=Object(u.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v.API_URL,"launches"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:if(200!==(t=e.sent).status){e.next=10;break}return e.next=6,t.text();case 6:c=e.sent,n(JSON.parse(c)),e.next=11;break;case 10:console.log("Error de conexi\xf3n al servidor");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[]),Object(d.jsxs)("section",{className:"container",children:[Object(d.jsx)(f.a,{className:"my-3",children:Object(d.jsx)(N.a,{children:Object(d.jsx)("h4",{children:"Launches list"})})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(N.a,{children:Object(d.jsxs)(I.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"text-center",children:"#"}),Object(d.jsx)("th",{className:"text-center",children:"Name"}),Object(d.jsx)("th",{className:"text-center",children:"Flight number"}),Object(d.jsx)("th",{className:"text-center",children:"Date"}),Object(d.jsx)("th",{})]})}),Object(d.jsx)("tbody",{children:c&&c.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:t+1}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{className:"text-center",children:e.flight_number}),Object(d.jsx)("td",{className:"text-center",children:e.date_utc&&new Date(e.date_utc).toLocaleDateString("es-UY")}),Object(d.jsx)("td",{className:"text-center actions-column",children:Object(d.jsx)(g.a,{icon:w.a})})]},e.id)}))})]})})})]})},E=[{path:"/",exact:!0,component:y},{path:"/rockets",exact:!0,component:_},{path:"/launchs",exact:!0,component:C}];function S(){return Object(d.jsx)(x.c,{children:E.map((function(e,t){return Object(d.jsx)(L,Object(h.a)({},e),t)}))})}function L(e){return Object(d.jsx)(x.a,{path:e.path,render:function(t){return Object(d.jsx)(e.component,Object(h.a)(Object(h.a)({},t),{},{routes:e.routes}))}})}var T=function(){return Object(d.jsxs)(b.a,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(l.a,{fluid:!0,children:Object(d.jsx)(S,{})})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};c(68);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),F()}},[[69,1,2]]]);
//# sourceMappingURL=main.dad4d55d.chunk.js.map