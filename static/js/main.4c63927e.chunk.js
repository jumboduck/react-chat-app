(this["webpackJsonpreact-chat-app"]=this["webpackJsonpreact-chat-app"]||[]).push([[0],{21:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),d=s.n(n),c=s(13),i=s.n(c),r=(s(21),s(15)),o=s(8),u=s(3),l=s(4),j=s(6),m=s(5),b=s(14),g=s.n(b),f=function(e){var t=e.msgInput.current,s=Object(n.useState)(!1),d=Object(u.a)(s,2),c=d[0],i=d[1];return Object(a.jsxs)("form",{className:e.editMode?"message-form editing-input":"message-form",onSubmit:function(s){s.preventDefault(),t.value.trim().length>0&&!e.editMode&&(e.addNewMessage(e.savedMsg),e.setSavedMsg("")),e.editMode&&e.updateMessage(e.editIndex,e.savedMsg)},children:[Object(a.jsx)("label",{htmlFor:"message-input",className:"sr-only",children:"Message:"}),Object(a.jsx)("div",{className:c?"emoji-picker":"hidden",children:Object(a.jsx)(g.a,{disableAutoFocus:!0,onEmojiClick:function(s,a){i(!1);var n=t.selectionStart,d=t.selectionEnd-t.selectionStart,c=t.value.split("");c.splice(n,d,a.emoji);var r=c.join("");e.setSavedMsg(r),t.focus(),t.selectionStart=t.selectionEnd=n+1}})}),Object(a.jsx)("button",{type:"button",className:"open-emojis",onClick:function(e){e.preventDefault(),i(!c)},children:Object(a.jsx)(j.a,{icon:m.d})}),Object(a.jsx)("input",{id:"message-input",type:"text",ref:e.msgInput,className:"message-input",placeholder:"Type here...",autoComplete:"off",onChange:function(t){e.setSavedMsg(t.currentTarget.value)},value:e.savedMsg||"",onKeyDown:function(s){38===s.keyCode&&e.lastMessageIndex>=0&&!1===e.editMode&&(t.blur(),setTimeout((function(){e.enterEditMode(e.lastMessageIndex)}),0))}}),Object(a.jsxs)("button",{type:"submit",className:"send-message",children:[Object(a.jsx)("span",{className:"sr-only",children:"send"}),Object(a.jsx)(j.a,{icon:m.b})]})]},"MessageForm")},v=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:e.editMode&&e.index===e.editIndex?"message editing":"message",onClick:function(){return e.enterEditMode(e.index)},children:e.message.message}),Object(a.jsx)("p",{className:"msg-date",children:e.message.edit?"edited on "+e.message.edit:e.message.time})]})},O=function(e){var t,s=e.messages.name,d=e.messages.messages,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){c&&c.current.addEventListener("DOMNodeInserted",(function(e){var t=e.currentTarget;t.scroll({top:t.scrollHeight})}))}),[]),Object(a.jsxs)("div",{className:"chat-window",children:[Object(a.jsx)("ul",{className:"message-list",ref:c,children:0!==d.length?d.map((function(t,s){return Object(a.jsx)("li",{children:Object(a.jsx)(v,{message:t,enterEditMode:e.enterEditMode,index:s,editMode:e.editMode,editIndex:e.editIndex})},s)})):null}),0===d.length?Object(a.jsxs)("p",{className:"no-message",children:["This is the beginning of your conversation with"," ",s]}):null,Object(a.jsx)(f,(t={addNewMessage:e.addNewMessage,updateSaved:e.updateSaved,setSavedMsg:e.setSavedMsg,savedMsg:e.savedMsg,currentMessages:d},Object(l.a)(t,"addNewMessage",e.addNewMessage),Object(l.a)(t,"updateMessage",e.updateMessage),Object(l.a)(t,"editMode",e.editMode),Object(l.a)(t,"setEditMode",e.setEditMode),Object(l.a)(t,"editIndex",e.editIndex),Object(l.a)(t,"enterEditMode",e.enterEditMode),Object(l.a)(t,"lastMessageIndex",d.length-1),Object(l.a)(t,"msgInput",e.msgInput),t))]})},p=function(e){var t=Object(n.useRef)();return Object(a.jsxs)("form",{className:"message-form friend-form",onSubmit:function(s){s.preventDefault(),t.current.value.length>0&&(e.addNewFriend(t.current.value),t.current.value="")},children:[Object(a.jsx)("label",{htmlFor:"new-friend",className:"sr-only",children:"Enter new friend's Name"}),Object(a.jsx)("input",{id:"new-friend",type:"text",ref:t,className:"new-friend",placeholder:"Add a friend",autoComplete:"off"}),Object(a.jsxs)("button",{type:"submit",className:"send-message",children:[Object(a.jsx)("span",{className:"sr-only",children:"add a friend"}),Object(a.jsx)(j.a,{icon:m.c})]})]})},M=function(e){for(var t=function(t){t.preventDefault();var s=e.editMode?"":e.savedMsg;e.updateSaved(s);var a=t.target.dataset.conv;e.setCurrentConv(a),e.setSavedMsg(e.data[a].saved),e.setEditMode(!1),e.msgInput.current.focus(),i(!1)},s=Object(n.useState)(!1),d=Object(u.a)(s,2),c=d[0],i=d[1],r=[],o=0,l=Object.entries(e.data);o<l.length;o++){var b=Object(u.a)(l[o],2),g=b[0],f=b[1];r.push({name:f.name,id:g})}return Object(a.jsxs)("div",{className:"friend-list",children:[Object(a.jsxs)("h2",{className:"friends-title",children:[Object(a.jsxs)("button",{className:"hamburger-icon",onClick:function(e){e.preventDefault(),i(!c)},children:[Object(a.jsx)("span",{className:"sr-only",children:"Display Friend List"}),Object(a.jsx)(j.a,{icon:m.a})]}),Object(a.jsx)(j.a,{icon:m.e})," friends"]}),Object(a.jsxs)("div",{className:c?"friends-buttons":"friend-buttons hidden-mobile",children:[r.map((function(s){return Object(a.jsx)("button",{className:s.id===e.currentConv?"friend-btn friend-selected":"friend-btn","data-conv":s.id,onClick:t,children:s.name},s.id)})),Object(a.jsx)(p,{addNewFriend:e.addNewFriend})]})]})},h=function(){var e=Object(n.useState)("1"),t=Object(u.a)(e,2),s=t[0],d=t[1],c=Object(n.useState)(!1),i=Object(u.a)(c,2),l=i[0],j=i[1],m=Object(n.useState)(null),b=Object(u.a)(m,2),g=b[0],f=b[1],v=Object(n.useRef)(),p=Object(n.useState)({1:{name:"Daniel",messages:[],saved:"",editMode:!1},2:{name:"Issaaf",messages:[],saved:"",editMode:!1},3:{name:"Simon",messages:[],saved:"",editMode:!1},4:{name:"Tracy",messages:[],saved:"",editMode:!1},5:{name:"Whiskey",messages:[],saved:"",editMode:!1}}),h=Object(u.a)(p,2),x=h[0],N=h[1],S=Object(n.useState)(""),I=Object(u.a)(S,2),w=I[0],y=I[1],E=function(e){var t=x[s];t.saved=e;var a=Object(o.a)({},x);a[s]=t,N(a)};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"chat-container",children:[Object(a.jsx)(M,{data:x,currentConv:s,setCurrentConv:d,addNewFriend:function(e){var t=Object.keys(x).map((function(e){return parseInt(e)})),s=Math.max.apply(Math,Object(r.a)(t))+1,a=Object(o.a)({},x);a[s]={name:e,messages:[],saved:"",editMode:!1},N(a),d(s.toString())},updateSaved:E,savedMsg:w,setSavedMsg:y,editMode:l,setEditMode:j,msgInput:v}),Object(a.jsx)(O,{messages:x[s],addNewMessage:function(e){var t=x[s],a=(new Date).toLocaleString();t.messages.push({message:e,time:a});var n=Object(o.a)({},x);n[s]=t,N(n)},updateSaved:E,setSavedMsg:y,savedMsg:w,editMode:l,setEditMode:j,editIndex:g,setEditIndex:f,updateMessage:function(e,t){var a=x[s],n=(new Date).toLocaleString();a.messages[e].message=t,a.messages[e].edit=n;var d=Object(o.a)({},x);d[s]=a,N(d),j(!1),y("")},msgInput:v,enterEditMode:function(e){var t=x[s].messages[e].message;f(e),y(t),j(!0),v.current.focus()}})]})})};s(27);var x=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(h,{})})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,29)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,d=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),d(e),c(e)}))};i.a.render(Object(a.jsx)(d.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),N()}},[[28,1,2]]]);
//# sourceMappingURL=main.4c63927e.chunk.js.map