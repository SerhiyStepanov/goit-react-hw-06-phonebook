(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={container:"Filter_container__ypZ7k",label:"Filter_label__1qeH1",fiSearch:"Filter_fiSearch__1Lt4P",input:"Filter_input__2w1_1"}},19:function(t,e,n){t.exports={text:"Stats_text__3fdDn",span:"Stats_span__XhE2V"}},24:function(t,e,n){t.exports={container:"App_container__1D8OH"}},49:function(t,e,n){},5:function(t,e,n){t.exports={container:"Form_container__3knRQ",label:"Form_label__2GpCA",button:"Form_button__-b8Le",ioIosPhonePortrait:"Form_ioIosPhonePortrait__36UyP",spanName:"Form_spanName__1VK3g",input:"Form_input__3pi7D"}},50:function(t,e,n){"use strict";n.r(e);var a,c=n(1),r=n(0),o=n.n(r),s=n(11),i=n.n(s),l=n(4),b=n(2),u=n(6),j=n(22),d=n.n(j),m=n(13),O=n(26),p=n(7),h=n.n(p),_={addContact:Object(l.b)("contact/add",(function(t){return{payload:{id:h.a.generate(),name:t.name,number:t.number}}})),deleteContact:Object(l.b)("contact/delete"),filterContacts:Object(l.b)("contact/filter")},f=Object(l.c)([],(a={},Object(m.a)(a,_.addContact,(function(t,e){var n=e.payload;return[].concat(Object(O.a)(t),[n])})),Object(m.a)(a,_.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),x=Object(l.c)("",Object(m.a)({},_.filterContacts,(function(t,e){return e.payload}))),C=Object(b.c)({items:f,filter:x}),v={key:"contact",storage:d.a,blacklist:["filter"]},N=Object(b.c)({contacts:Object(u.g)(v,C)}),g=Object(l.a)({reducer:N,middleware:Object(l.d)({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}}),devTools:!1}),F={store:g,persistor:Object(u.h)(g)},y=n(23),k=n(3),L=(n(48),n(49),n(20)),P=n(25),S=n(5),w=n.n(S);var E=Object(k.b)(null,(function(t){return{onSubmit:function(e){return t(_.addContact(e))}}}))((function(t){var e=Object(r.useState)(""),n=Object(L.a)(e,2),a=n[0],o=n[1],s=Object(r.useState)(""),i=Object(L.a)(s,2),l=i[0],b=i[1],u=h.a.generate(),j=h.a.generate(),d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":b(a)}},m=function(){o(""),b("")};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==a&&""!==l?(t.onSubmit({name:a,number:l}),m()):alert("Enter name and number please")},children:[Object(c.jsxs)("div",{className:w.a.container,children:[Object(c.jsxs)("label",{htmlFor:u,className:w.a.label,children:["Name ",Object(c.jsx)("span",{className:w.a.spanName,children:"name"})]}),Object(c.jsx)("input",{type:"text",name:"name",id:u,value:a,onChange:d,className:w.a.input,placeholder:"Enter name",autoComplete:"Off"})]}),Object(c.jsxs)("div",{className:w.a.container,children:[Object(c.jsxs)("label",{htmlFor:j,className:w.a.label,children:["Number",Object(c.jsx)("span",{className:w.a.ioIosPhonePortrait,children:Object(c.jsx)(P.a,{})})]}),Object(c.jsx)("input",{type:"tel",name:"number",id:j,value:l,onChange:d,className:w.a.input,placeholder:"Enter number"})]}),Object(c.jsx)("button",{type:"submit",className:w.a.button,children:"Add contact"})]})})})),D=n(14),A=n.n(D);var I=Object(k.b)(null,(function(t){return{onChange:function(e){return t(_.filterContacts(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange,a=h.a.generate();return Object(c.jsxs)("div",{className:A.a.container,children:[Object(c.jsx)("label",{htmlFor:a,className:A.a.label,children:"Find contacts of name"}),Object(c.jsx)("input",{type:"text",value:e,onChange:n,id:a,className:A.a.input,placeholder:"Enter name please"})]})})),H=n(19),T=n.n(H);var V=Object(k.b)((function(t){return{total:t.contacts.items.length}}))((function(t){var e=t.total;return Object(c.jsx)("div",{children:Object(c.jsxs)("p",{className:T.a.text,children:["Total contact : ",Object(c.jsx)("span",{className:T.a.span,children:e})]})})})),Z=n(9),G=n.n(Z);var J=Object(k.b)((function(t){var e=t.contacts;return{items:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,e.filter)}}),(function(t){return{onDeleteContact:function(e){return t(_.deleteContact(e))}}}))((function(t){var e=t.items,n=t.onDeleteContact;return Object(c.jsx)("ul",{className:G.a.contactList,children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(c.jsxs)("li",{className:G.a.list,children:[Object(c.jsxs)("p",{className:G.a.text,children:[e," : ",a]}),Object(c.jsx)("button",{className:G.a.button,type:"button",onClick:function(){return n(r)},children:"delete"})]},r)}))})})),R=n(24),U=n.n(R);function X(){return Object(c.jsxs)("div",{className:U.a.container,children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(E,{}),Object(c.jsx)("h2",{style:{color:"rgb(150, 150, 250)"},children:"Contacts"}),Object(c.jsx)(I,{}),Object(c.jsx)(V,{}),Object(c.jsx)(J,{})]})}i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(k.a,{store:F.store,children:Object(c.jsx)(y.a,{loading:null,persistor:F.persistor,children:Object(c.jsx)(X,{})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__2o3PE",title:"ContactList_title__GZaPC",list:"ContactList_list__3PXTU",text:"ContactList_text__2RHY3",button:"ContactList_button__c6ZOV"}}},[[50,1,2]]]);
//# sourceMappingURL=main.14342de5.chunk.js.map