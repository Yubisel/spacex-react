(this["webpackJsonpspacex-react"]=this["webpackJsonpspacex-react"]||[]).push([[0],{56:function(e,t,c){},57:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(20),r=c.n(a),l=(c(56),c(57),c(72)),i=c(75),j=c(76),b=c(22),d=c(1);var o=function(){return Object(d.jsx)(i.a,{bg:"dark",variant:"dark",children:Object(d.jsxs)(l.a,{className:"py-3",children:[Object(d.jsx)(i.a.Brand,{children:"SpaceX"}),Object(d.jsxs)(j.a,{className:"me-auto",children:[Object(d.jsx)(b.b,{to:"/",className:"nav-link",exact:!0,children:"Home"}),Object(d.jsx)(b.b,{to:"/rockets",className:"nav-link",children:"Rockets"}),Object(d.jsx)(b.b,{to:"/launchs",className:"nav-link",children:"Launchs"})]})]})})},h=c(2),x=c(10),O=c(25),u=c.n(O),m=c(30),p=c(9),f=c(73),N=c(51),k=c(78),v={API_URL:"https://api.spacexdata.com/v4/"};var y=function(){var e=Object(s.useState)(),t=Object(p.a)(e,2),c=t[0],n=t[1],a="w-25 d-inline-block text-end pe-4 fw-bold";return Object(s.useEffect)((function(){try{var e=function(){var e=Object(m.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v.API_URL,"company"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:if(200!==(t=e.sent).status){e.next=10;break}return e.next=6,t.text();case 6:c=e.sent,n(JSON.parse(c)),e.next=11;break;case 10:console.log("Error de conexi\xf3n al servidor");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[]),Object(d.jsxs)("section",{className:"container",children:[Object(d.jsx)(f.a,{className:"my-3",children:Object(d.jsx)(N.a,{children:Object(d.jsx)("h4",{children:"Company info"})})}),Object(d.jsx)(f.a,{className:"my-3",children:Object(d.jsx)(N.a,{children:c&&Object(d.jsxs)(k.a,{children:[Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Name:"}),c.name]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Founder:"}),c.founder]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Founded:"}),c.founded]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"CEO:"}),c.ceo]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"COO:"}),c.coo]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"CTO:"}),c.cto]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"CTO Propulsion:"}),c.cto_propulsion]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Employees:"}),c.employees]}),Object(d.jsxs)(k.a.Item,{children:[Object(d.jsx)("label",{className:a,children:"Valuation:"}),c.valuation]}),Object(d.jsxs)(k.a.Item,{className:"d-flex align-items-center",children:[Object(d.jsx)("label",{className:a,children:"Summary:"}),Object(d.jsx)("label",{className:"w-75 d-inline-block",children:c.summary})]}),Object(d.jsxs)(k.a.Item,{className:"d-flex align-items-center",children:[Object(d.jsx)("label",{className:a,children:"Headquarters:"}),Object(d.jsxs)("label",{className:"w-75 d-inline-block",children:[c.headquarters.address,", ",c.headquarters.city,", ",c.headquarters.state]})]}),Object(d.jsxs)(k.a.Item,{className:"d-flex align-items-center",children:[Object(d.jsx)("label",{className:a,children:"Links:"}),Object(d.jsxs)("div",{className:"w-25 d-inline-block",children:[Object(d.jsx)("label",{className:"d-block",children:Object(d.jsx)("a",{href:c.links.website,target:"_black",children:c.links.website})}),Object(d.jsx)("label",{className:"d-block",children:Object(d.jsx)("a",{href:c.links.flickr,target:"_black",children:c.links.flickr})}),Object(d.jsx)("label",{className:"d-block",children:Object(d.jsx)("a",{href:c.links.twitter,target:"_black",children:c.links.twitter})}),Object(d.jsx)("label",{className:"d-block",children:Object(d.jsx)("a",{href:c.links.elon_twitter,target:"_black",children:c.links.elon_twitter})})]})]})]})})})]})},g=c(31),I=c(32),w=c(74),L=n.a.createContext();function S(e){var t=e.children,c=Object(s.useState)([]),n=Object(p.a)(c,2),a=n[0],r=n[1],l=Object(s.useState)([]),i=Object(p.a)(l,2),j=i[0],b=i[1],o=Object(s.useState)("all"),h=Object(p.a)(o,2),x=h[0],O=h[1];return Object(s.useEffect)((function(){try{var e=function(){var e=Object(m.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v.API_URL,"rockets"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:if(200!==(t=e.sent).status){e.next=10;break}return e.next=6,t.text();case 6:c=e.sent,r(JSON.parse(c)),e.next=11;break;case 10:console.log("Error de conexi\xf3n al servidor");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[]),Object(s.useEffect)((function(){try{var e=function(){var e=Object(m.a)(u.a.mark((function e(){var t,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={options:{pagination:!1}},"all"!==x&&(t.query={rocket:x}),e.next=4,fetch("".concat(v.API_URL,"launches/query"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 4:if(200!==(c=e.sent).status){e.next=14;break}return e.t0=JSON,e.next=9,c.text();case 9:e.t1=e.sent,s=e.t0.parse.call(e.t0,e.t1),b(s.docs),e.next=15;break;case 14:console.log("Error de conexi\xf3n al servidor");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[x]),Object(d.jsx)(L.Provider,{value:{aRocketList:a,setRocketList:r,sSelectedRocketId:x,setSelectedRocketId:O,aLaunchList:j,setLaunchList:b},children:t})}var C=function(){var e=Object(x.f)(),t=Object(s.useContext)(L),c=t.aRocketList,n=t.setSelectedRocketId;return Object(d.jsxs)("section",{className:"container",children:[Object(d.jsx)(f.a,{className:"my-3",children:Object(d.jsx)(N.a,{children:Object(d.jsx)("h4",{children:"Rockets list"})})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(N.a,{children:Object(d.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"text-center",children:"#"}),Object(d.jsx)("th",{className:"text-center",children:"Name"}),Object(d.jsx)("th",{className:"text-center",children:"Stages"}),Object(d.jsx)("th",{className:"text-center",children:"Cost per launch"}),Object(d.jsx)("th",{className:"text-center",children:"Active"}),Object(d.jsx)("th",{})]})}),Object(d.jsx)("tbody",{children:c&&c.map((function(t,c){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:c+1}),Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{className:"text-center",children:t.stages}),Object(d.jsx)("td",{className:"text-end",children:t.cost_per_launch}),Object(d.jsx)("td",{className:"text-center",children:t.active?"Yes":"No"}),Object(d.jsxs)("td",{className:"text-center actions-column",children:[Object(d.jsx)("span",{className:"btn btn-sm btn-primary px-2 mx-2",children:Object(d.jsx)(g.a,{icon:I.a})}),Object(d.jsx)("span",{className:"btn btn-sm btn-primary",onClick:function(){return c=t.id,n(c),void e.push("/launchs");var c},children:Object(d.jsx)(g.a,{icon:I.b})})]})]},t.id)}))})]})})})]})},_=c(77);var R=[{path:"/rockets",exact:!0,component:C},{path:"/launchs",exact:!0,component:function(){var e=Object(s.useContext)(L),t=e.aRocketList,c=e.aLaunchList,n=e.setSelectedRocketId;return Object(d.jsxs)("section",{className:"container",children:[Object(d.jsxs)(f.a,{className:"my-3",children:[Object(d.jsx)(N.a,{md:8,children:Object(d.jsx)("h4",{children:"Launches list"})}),Object(d.jsx)(N.a,{md:4,children:Object(d.jsxs)(_.a.Select,{size:"sm",onChange:function(e){var t=e.target.value;return n(t)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),t&&t.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]}),Object(d.jsx)(f.a,{children:Object(d.jsx)(N.a,{children:Object(d.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"text-center",children:"#"}),Object(d.jsx)("th",{className:"text-center",children:"Name"}),Object(d.jsx)("th",{className:"text-center",children:"Flight number"}),Object(d.jsx)("th",{className:"text-center",children:"Date"}),Object(d.jsx)("th",{})]})}),Object(d.jsx)("tbody",{children:c&&c.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:t+1}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{className:"text-center",children:e.flight_number}),Object(d.jsx)("td",{className:"text-center",children:e.date_utc&&new Date(e.date_utc).toLocaleDateString("es-UY")}),Object(d.jsx)("td",{className:"text-center actions-column",children:Object(d.jsx)("span",{className:"btn btn-sm btn-primary",children:Object(d.jsx)(g.a,{icon:I.a})})})]},e.id)}))})]})})})]})}},{path:"/",exact:!0,component:y}];function E(){return Object(d.jsx)(x.c,{children:R.map((function(e,t){return Object(d.jsx)(T,Object(h.a)({},e),t)}))})}function T(e){return Object(d.jsx)(x.a,{path:e.path,render:function(t){return Object(d.jsx)(e.component,Object(h.a)(Object(h.a)({},t),{},{routes:e.routes}))}})}var P=function(){return Object(d.jsx)(b.a,{basename:"/spacex-react",children:Object(d.jsxs)(S,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(l.a,{fluid:!0,children:Object(d.jsx)(E,{base:!0})})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};c(69);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),F()}},[[70,1,2]]]);
//# sourceMappingURL=main.c2560ff9.chunk.js.map