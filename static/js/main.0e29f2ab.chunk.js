(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),c=a(6),r=a(7),o=a(2),s=a(1),l=(a(13),[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}]),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(0),m=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:"".concat(null===t||void 0===t?void 0:t.name)})},j=function(e){var t=e.todo;return Object(d.jsxs)("article",{className:"TodoInfo ".concat(!0===t.completed?"TodoInfo--completed":""),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:"".concat(t.title)}),Object(d.jsx)(m,{user:t.user})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})},h=function(){var e=l,t=Object(s.useState)(e),a=Object(o.a)(t,2),n=a[0],i=a[1],m=Object(s.useState)("-1"),j=Object(o.a)(m,2),h=j[0],O=j[1],p=Object(s.useState)(!1),f=Object(o.a)(p,2),v=f[0],x=f[1],S=Object(s.useState)(""),y=Object(o.a)(S,2),I=y[0],_=y[1],g=Object(s.useState)(!1),C=Object(o.a)(g,2),N=C[0],k=C[1],D=n.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:u.find((function(t){return t.id===e.userId}))||null})}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"App__title",children:"Static list of todos"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){if("-1"===h&&x(!0),I||k(!0),"-1"!==h&&I){var e={id:Math.max.apply(Math,Object(c.a)(n.map((function(e){return e.id}))))+1,title:I,completed:!1,userId:+h};i((function(){return[].concat(Object(c.a)(n),[e])})),O("-1"),_("")}}()},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{"data-cy":"titleInput",placeholder:"Enter Title",value:I,onChange:function(e){_(e.target.value),k(!1)}}),N&&Object(d.jsx)("p",{children:"Please enter a title"})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("select",{value:h,onChange:function(e){O(e.target.value),x(!1)},"data-cy":"userSelect",children:[Object(d.jsx)("option",{value:"-1",children:"Choose a user"},-1),u.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),v&&Object(d.jsx)("p",{children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit",children:"Add"})]}),Object(d.jsx)(b,{todos:D})]})};i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0e29f2ab.chunk.js.map