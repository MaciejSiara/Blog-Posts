(this["webpackJsonphttp-requests"]=this["webpackJsonphttp-requests"]||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},33:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),o=a.n(l),r=(a(33),a(10)),s=a(1),u=a(15),i=a(8),m=a(4),p=a.n(m),h=p.a.create({baseURL:"https://jsonplaceholder.typicode.com"});h.defaults.headers.common.Authorization="AUTH TOKEN FROM INSTANCE";var d=h;function E(e){return c.a.createElement("article",{className:"Post",onClick:e.clicked},c.a.createElement("h1",{className:"Title"},e.title),c.a.createElement("div",{className:"Info"},c.a.createElement("div",{className:"Author"},e.author)))}function f(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)((function(){e.match.params.id&&(!l||l&&l!==e.match.params.id)&&p.a.get("/posts/".concat(e.match.params.id)).then((function(e){console.log(e),o(e)}))}),[e.match.params.id]);var r=c.a.createElement("p",{style:{textAlign:"center"}},"Please select a Post!!!");return e.match.params.id&&(r=c.a.createElement("p",{style:{textAlign:"center"}},"Loading...!")),l&&(r=c.a.createElement("div",{className:"fullPost"},c.a.createElement("h1",null,l.data.title),c.a.createElement("p",null,l.data.body),c.a.createElement("div",{className:"edit"},c.a.createElement("button",{className:"delete",onClick:function(){p.a.delete("/posts/".concat(e.id)).then((function(e){}))}},"Delete")))),r}function b(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)([]),m=Object(i.a)(r,2),p=(m[0],m[1],Object(n.useState)(!1)),h=Object(i.a)(p,2),b=h[0];h[1];Object(n.useEffect)((function(){d.get("/posts").then((function(e){var t=e.data.slice(0,4).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{author:"Maciej"})}));o(t)})).catch((function(e){console.error(e)}))}),[]);var v=c.a.createElement("p",{style:{textAlign:"center"}},"Something went wrong");return b||(v=l.map((function(t){return c.a.createElement(E,{key:t.id,title:t.title,author:t.author,clicked:function(){return a=t.id,void e.history.push({pathname:"/posts/"+a});var a}})}))),c.a.createElement("div",null,c.a.createElement("section",{className:"Posts"},v),c.a.createElement(s.a,{path:e.match.url+"/:id",exact:!0,component:f}))}function v(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),u=s[0],m=s[1],h=Object(n.useState)("Maciej"),d=Object(i.a)(h,2),E=d[0],f=d[1];Object(n.useEffect)((function(){console.log(e)}));return c.a.createElement("div",{className:"newPost"},c.a.createElement("h1",null,"Add a Post"),c.a.createElement("label",null,"Title"),c.a.createElement("input",{type:"text",value:l,onChange:function(e){o(e.target.value)}}),c.a.createElement("label",null,"Content"),c.a.createElement("textarea",{rows:"4",value:u,onChange:function(e){m(e.target.value)}}),c.a.createElement("label",null,"Author"),c.a.createElement("select",{value:E,onChange:function(e){return f(e.target.value)}},c.a.createElement("option",{value:"Jan"},"Jan"),c.a.createElement("option",{value:"Maciej"},"Maciej")),c.a.createElement("button",{onClick:function(){var e={title:l,body:u,author:E};p.a.post("/posts",e).then((function(e){console.log(e)}))}},"Add Post"))}function j(e){return c.a.createElement("div",{className:"Blog"},c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{to:"/posts",exact:!0,activeClassName:"my-active",activeStyle:{color:"#fa923f",textDecoration:"underline"}},"Posts")),c.a.createElement("li",null,c.a.createElement(r.b,{to:{pathname:"/new-post",hash:"#submit",search:"?quick-submit=true"}},"New Post"))))),c.a.createElement(s.a,{path:"/new-post",component:v}),c.a.createElement(s.a,{path:"/posts",component:b}))}a(56);var g=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(j,null)))};p.a.defaults.baseURL="https://jsonplaceholder.typicode.com",p.a.defaults.headers.common.Authorization="AUTH TOKEN",p.a.defaults.headers.post["Content-Type"]="application/json",p.a.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),p.a.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),o.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3504b124.chunk.js.map