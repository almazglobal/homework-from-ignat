(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={activeMenu:"Header_activeMenu__1mJO_",nameMenu:"Header_nameMenu__1mpMe",gedsamugimKanagemen:"Header_gedsamugimKanagemen__2Xi2J",gemenonTandem:"Header_gemenonTandem__pcGpd"}},function(e,a,t){e.exports={message:"Message_message__8S8YJ",avatar:"Message_avatar__27b-i",dialog:"Message_dialog__Uc3ek",dialog_figure:"Message_dialog_figure__2WAfj",content_message:"Message_content_message__NlFgu",nick:"Message_nick__2ZJVK",time:"Message_time__3MbNO"}},function(e,a,t){e.exports={container:"Affair_container__2W9cZ",title:"Affair_title__1iH4G",status:"Affair_status__11hP-",status_high:"Affair_status_high__3g4lX",status_middle:"Affair_status_middle__2GT17",status_low:"Affair_status_low__3ZbeB",buttonDelete:"Affair_buttonDelete__EqJuT"}},,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__3B3bD",buttonFilter:"Affairs_buttonFilter__2l5Dk"}},function(e,a,t){e.exports={container:"Greeting_container__1BLJV",errorMessage:"Greeting_errorMessage__p_oax",dialogForm:"Greeting_dialogForm__1vo9V",error:"Greeting_error__3p0pe"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1AVIn",errorInput:"SuperInputText_errorInput__39vsi",error:"SuperInputText_error__39uz7"}},,,function(e,a,t){e.exports={blue:"HW4_blue__3_iqq",column:"HW4_column__2h1zV",testSpanError:"HW4_testSpanError__qiniY"}},function(e,a,t){e.exports={spanEdit:"SuperEditableSpan_spanEdit__3SRHd",wrapper:"SuperEditableSpan_wrapper__QoHkU",swing:"SuperEditableSpan_swing__2Z3kA"}},,,function(e,a,t){e.exports={main_content:"HW1_main_content__1UxOe"}},function(e,a,t){e.exports={default:"SuperButton_default__3ydwb",red:"SuperButton_red__80TOH"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3VTzp",spanClassName:"SuperCheckbox_spanClassName__1yz36"}},,,,,function(e,a,t){e.exports={App:"App_App__XSR6K"}},,,function(e,a,t){e.exports={messages:"MessagesList_messages__3xnUO"}},function(e,a,t){e.exports={select:"SuperSelect_select__1DSEA"}},function(e,a,t){e.exports={radio:"SuperRadio_radio__1amnE"}},,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),s=(t(40),t(28)),o=t.n(s),u=t(9),i=t(6),m=t.n(i);var p=function(){return r.a.createElement("div",{className:m.a.gedsamugimKanagemen},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("ul",{className:m.a.gemenonTandem},r.a.createElement("li",{className:m.a.nameMenu},r.a.createElement(u.b,{className:m.a.nameMenu,activeClassName:m.a.activeMenu,to:"/pre-junior"},"Pre junior")),r.a.createElement("li",null,r.a.createElement(u.b,{className:m.a.nameMenu,activeClassName:m.a.activeMenu,to:"/junior"},"Junior")),r.a.createElement("li",null,r.a.createElement(u.b,{className:m.a.nameMenu,activeClassName:m.a.activeMenu,to:"/junior-super"},"Super junior"))))},E=t(1),d=t(34),_=t(16),f=t(2),g=t(7),v=t.n(g),h=function(e){return r.a.createElement("li",{className:v.a.message},r.a.createElement("img",{className:v.a.avatar,width:"50",height:"50",src:e.avatar,alt:"avatar user"}),r.a.createElement("div",{className:v.a.dialog_figure}),r.a.createElement("div",{className:v.a.dialog},r.a.createElement("div",{className:v.a.content_message},r.a.createElement("div",{className:v.a.nick},e.name),e.message),r.a.createElement("div",{className:v.a.time},e.time)))},b=t(31),N=t.n(b),C=function(e){return r.a.createElement("ul",{className:N.a.messages},e.messages.map((function(e){return r.a.createElement(h,{avatar:e.avatar,name:e.name,message:e.message,time:e.time})})))},k=t(21),O=t.n(k),j={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:"some text",time:"22:00"},S=[];var x=function(){var e=Object(n.useState)(S),a=Object(f.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),s=Object(f.a)(c,2),o=s[0],u=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("div",{className:O.a.main_content},r.a.createElement(C,{messages:t}),r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:o,onChange:function(e){u(e.target.value)},className:O.a.input_message}),r.a.createElement("button",{onClick:function(){return function(e){var a=Object(_.a)(t);a.push(Object(d.a)({},j,{message:e})),l(a),u("")}(o)}},"send"))),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(8),w=t.n(y);var M=function(e){var a="";return"high"===e.affair.priority?a=w.a.status_high:"middle"===e.affair.priority?a=w.a.status_middle:"low"===e.affair.priority&&(a=w.a.status_low),r.a.createElement("div",{className:w.a.container},r.a.createElement("span",{className:w.a.title},e.affair.name),r.a.createElement("span",{className:"".concat(w.a.status," ").concat(a)}," [",e.affair.priority,"]"),r.a.createElement("button",{className:w.a.buttonDelete,onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))},A=t(12),F=t.n(A);var T=function(e){var a=e.data.map((function(a){return r.a.createElement(M,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:F.a.buttonFilter,onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{className:F.a.buttonFilter,onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{className:F.a.buttonFilter,onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:F.a.buttonFilter,onClick:function(){return e.setFilter("low")}},"Low"))},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(n.useState)(H),a=Object(f.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(f.a)(c,2),o=s[0],u=s[1],i=function(e,a){return"high"===a||"low"===a||"middle"===a?e.filter((function(e){return e.priority===a})):e}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(T,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(13),B=t.n(J),P=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.setNameCallbackEnterKey,o=e.lostFocus;l&&B.a.error;return r.a.createElement("div",{className:B.a.container},r.a.createElement("div",{className:B.a.dialogForm},r.a.createElement("input",{value:a,onChange:t,onKeyPress:s,onBlur:o,className:"inputClass"}),r.a.createElement("button",{onClick:n,disabled:!a},"add"),r.a.createElement("span",null,c)),r.a.createElement("span",{className:B.a.errorMessage},l))},K=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(f.a)(l,2),s=c[0],o=c[1],u=Object(n.useState)(""),i=Object(f.a)(u,2),m=i[0],p=i[1],E=function(){s&&(t(s),alert("Hello ".concat(s," !")),o(""),p("Enter user name correct!"))},d=a.length;return r.a.createElement(P,{name:s,setNameCallback:function(e){var a=e.currentTarget.value.trim();o(a),p(a?"":"Enter user name correct!")},addUser:E,error:m,totalUsers:d,setNameCallbackEnterKey:function(e){"Enter"===e.key&&E()},lostFocus:function(e){e.currentTarget.value.trim()||p("Enter user name correct!")}})},U=t(48);var W=function(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(K,{users:t,addUserCallback:function(e){var a=[].concat(Object(_.a)(t),[{_id:Object(U.a)(),name:e}]);l(a)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},D=t(4),G=t(14),V=t.n(G),q=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,u=Object(D.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(V.a.error," ").concat(o||""),m="".concat(V.a.errorInput," ").concat(c?V.a.errorInput:V.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},z=t(17),R=t.n(z),X=t(22),Z=t.n(X),Y=function(e){var a=e.red,t=e.className,n=Object(D.a)(e,["red","className"]),l="".concat(a?Z.a.red:Z.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},L=t(23),Q=t.n(L),$=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(D.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:Q.a.spanClassName},l))};var ee=function(){var e=Object(n.useState)(""),a=Object(f.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(f.a)(o,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:R.a.column},r.a.createElement(q,{value:t,onChangeText:l,onEnter:s,error:c,spanClassName:R.a.testSpanError}),r.a.createElement(q,{className:R.a.blue}),r.a.createElement(Y,null,"default"),r.a.createElement(Y,{red:!0,onClick:s},"delete "),r.a.createElement(Y,{disabled:!0},"disabled"),r.a.createElement($,{checked:i,onChangeChecked:m},"some text "),r.a.createElement($,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ae=t(18),te=t.n(ae),ne=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(D.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),o=Object(f.a)(s,2),u=o[0],i=o[1],m=l||{},p=m.children,E=m.onDoubleClick,d=m.className,_=Object(D.a)(m,["children","onDoubleClick","className"]),g="".concat(te.a.spanEdit," ").concat(te.a.swing," ").concat(d);return r.a.createElement("div",{className:te.a.wrapper},u?r.a.createElement(q,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),E&&E(e)},className:g},_),"\u270e ",p||c.value))};function re(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function le(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}re("test",{x:"A",y:1});le("test",{x:"",y:0});var ce=function(){var e=Object(n.useState)(""),a=Object(f.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ne,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(Y,{onClick:function(){re("editable-span-value",t)}},"save"),r.a.createElement(Y,{onClick:function(){l(le("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var se=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(I,null),r.a.createElement(W,null),r.a.createElement(ee,null),r.a.createElement(ce,null))};var oe=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},ue=t(32),ie=t.n(ue),me=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=e.className,c=Object(D.a)(e,["options","onChange","onChangeOption","className"]),s=a?a.map((function(e,a){return r.a.createElement("option",{key:e+"-"+a,value:e},e)})):[],o="".concat(ie.a.select," ").concat(l||"");return r.a.createElement("select",Object.assign({className:o,value:c.value,onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},c),s)},pe=t(33),Ee=t.n(pe),de=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,s=e.className,o=(Object(D.a)(e,["type","name","options","value","onChange","onChangeOption","className"]),function(e){l&&l(e),c&&c(e.currentTarget.value)}),u="".concat(Ee.a.radio," ").concat(s||""),i=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",name:a,value:e,checked:n===e,onChange:o,className:u}),e)})):[];return r.a.createElement("div",{style:{height:"20px"}},i)},_e=["x","y","z"];var fe=function(){var e=Object(n.useState)(_e[1]),a=Object(f.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(me,{options:_e,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(de,{name:"radio",options:_e,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ge=function(){return r.a.createElement("div",null,r.a.createElement(fe,null))};var ve=function(){return r.a.createElement("div",null,"You are SUPER Junior")},he="/pre-junior",be="/junior",Ne="/junior-super";var Ce=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:he})}}),r.a.createElement(E.b,{path:he,render:function(){return r.a.createElement(se,null)}}),r.a.createElement(E.b,{path:be,render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(E.b,{path:Ne,render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(E.b,{render:function(){return r.a.createElement(oe,null)}})))};var ke=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(p,null),r.a.createElement(Ce,null)))};var Oe=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.1f019ede.chunk.js.map