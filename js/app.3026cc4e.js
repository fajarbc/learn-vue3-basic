(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],l=0,b=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1109:function(e,t,n){},"350d":function(e,t,n){"use strict";n("aa8d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function c(e,t,n,c,o,s){var i=Object(r["x"])("Header"),u=Object(r["x"])("router-view"),d=Object(r["x"])("Footer");return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["g"])(i,{onToggleAddTask:s.toggleAddTask,showAddTask:o.showAddTask,title:"Task Tracker"},null,8,["onToggleAddTask","showAddTask"]),Object(r["g"])(u,{showAddTask:o.showAddTask},null,8,["showAddTask"]),Object(r["g"])(d)])}var o={class:"rounded bordered flex p-4 mb-2"},s={class:"flex-1 text-3xl"},i={class:"flex-1"};function u(e,t,n,a,c,u){var d=Object(r["x"])("Button");return Object(r["q"])(),Object(r["d"])("header",o,[Object(r["e"])("h1",s,Object(r["z"])(n.title),1),Object(r["e"])("div",i,[Object(r["F"])(Object(r["g"])(d,{onBtnClick:t[0]||(t[0]=function(t){return e.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Add Task",icon:n.showAddTask?"times":"plus",class:Object(r["m"])([n.showAddTask?"bg-red-500":"bg-green-500","text-white float-right"])},null,8,["text","icon","class"]),[[r["D"],u.showButton]])])])}function d(e,t,n,a,c,o){var s=Object(r["x"])("FAIcon");return Object(r["q"])(),Object(r["d"])("button",{class:"btn py-2 px-4 rounded shadow",onClick:t[0]||(t[0]=function(e){return o.onClick()})},[Object(r["g"])(s,{icon:n.icon},null,8,["icon"]),Object(r["f"])(" "+Object(r["z"])(n.text),1)])}var l={name:"Button",props:{text:String,icon:String},methods:{onClick:function(){this.$emit("btn-click")}}},b=n("d959"),f=n.n(b);const p=f()(l,[["render",d]]);var m=p,j={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:m},computed:{showButton:function(){return"/"===this.$route.path}}};n("350d");const O=f()(j,[["render",u],["__scopeId","data-v-d1d31cc4"]]);var k=O,h={class:"p-4 my-2 text-center"},g=Object(r["e"])("p",{class:"flex-1 text-gray"},[Object(r["f"])(" Copyright © 2021"),Object(r["e"])("br"),Object(r["e"])("a",{href:"/about",class:"text-blue-500"},"About")],-1),v=[g];function x(e,t,n,a,c,o){return Object(r["q"])(),Object(r["d"])("footer",h,v)}var T={name:"Footer"};const w=f()(T,[["render",x]]);var y=w,A={name:"App",components:{Header:k,Footer:y},data:function(){return{showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask}}};n("f80f");const R=f()(A,[["render",c]]);var S=R,F=(n("ba8c"),n("6c02")),q={class:"my-2 px-4"},B=Object(r["e"])("p",null,[Object(r["e"])("a",{class:"text-blue-500",href:"/"},"Go back")],-1),C=Object(r["e"])("p",null,"Version 1.0.0",-1),D=[B,C];function P(e,t){return Object(r["q"])(),Object(r["d"])("div",q,D)}const _={},$=f()(_,[["render",P]]);var H=$,I={class:"container"};function z(e,t,n,a,c,o){var s=Object(r["x"])("AddTask"),i=Object(r["x"])("Tasks");return Object(r["q"])(),Object(r["d"])("div",I,[Object(r["F"])(Object(r["e"])("div",null,[Object(r["g"])(s,{onAddTask:o.addTask},null,8,["onAddTask"])],512),[[r["D"],n.showAddTask]]),Object(r["g"])(i,{onToggleReminder:o.toggleReminder,onDeleteTask:o.deleteTask,tasks:c.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])}var J=n("5530"),M=n("2909"),U=n("1da1"),V=(n("96cf"),n("d3b7"),n("e9c4"),n("99af"),n("4de4"),n("d81d"),function(e){return Object(r["t"])("data-v-98cde3aa"),e=e(),Object(r["r"])(),e}),E={class:"form-control"},N=V((function(){return Object(r["e"])("label",null,"Task",-1)})),G={class:"form-control"},L=V((function(){return Object(r["e"])("label",null,"Day & Time",-1)})),K={class:"form-control form-control-check"},Q=V((function(){return Object(r["e"])("label",null,"Set Reminder",-1)}));function W(e,t,n,a,c,o){var s=Object(r["x"])("Button");return Object(r["q"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),class:"m-4 p-4 add-form"},[Object(r["e"])("div",E,[N,Object(r["F"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.text=e}),name:"text",placeholder:"Add Task"},null,512),[[r["C"],c.text]])]),Object(r["e"])("div",G,[L,Object(r["F"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.day=e}),name:"day",placeholder:"Add Day & Time"},null,512),[[r["C"],c.day]])]),Object(r["e"])("div",K,[Q,Object(r["F"])(Object(r["e"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.reminder=e}),name:"reminder"},null,512),[[r["B"],c.reminder]])]),Object(r["g"])(s,{class:"bg-blue-500",text:"Save Task",icon:"save"})],32)}var X={name:"AddTask",components:{Button:m},data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={text:this.text,day:this.day,reminder:this.reminder};console.log("add",t),this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add task")}}};n("98d6");const Y=f()(X,[["render",W],["__scopeId","data-v-98cde3aa"]]);var Z=Y;function ee(e,t,n,a,c,o){var s=Object(r["x"])("Task");return Object(r["q"])(),Object(r["d"])("div",null,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(n.tasks,(function(t){return Object(r["q"])(),Object(r["d"])("div",{key:t.id},[Object(r["g"])(s,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128))])}var te={class:"text-gray-500 text-xs"};function ne(e,t,n,a,c,o){var s=Object(r["x"])("FAIcon");return Object(r["q"])(),Object(r["d"])("div",{onDblclick:t[1]||(t[1]=function(t){return e.$emit("toggle-reminder")}),class:Object(r["m"])(["bg-gray-100 px-4 py-2 mb-1 mx-2 border-l-4 cursor-pointer",n.task.reminder?"border-green-500":"border-gray-300"])},[Object(r["g"])(s,{icon:"times",onClick:t[0]||(t[0]=function(t){return e.$emit("delete-task",n.task.id)}),class:"flex float-right text-red-500 hover:text-red-600"}),Object(r["e"])("h3",null,Object(r["z"])(n.task.text),1),Object(r["e"])("p",te,Object(r["z"])(n.task.day),1)],34)}var re={name:"Task",props:{task:Object}};const ae=f()(re,[["render",ne]]);var ce=ae,oe={name:"Tasks",props:{tasks:Array},components:{Task:ce},emits:["delete-task","toggle-reminder"]};const se=f()(oe,[["render",ee]]);var ie=se,ue={name:"Home",props:{showAddTask:Boolean},components:{AddTask:Z,Tasks:ie},data:function(){return{tasks:[]}},methods:{addTask:function(e){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,t.tasks=[].concat(Object(M["a"])(t.tasks),[a]);case 7:case"end":return n.stop()}}),n)})))()},deleteTask:function(e){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("Are you sure want to delete this task?")){n.next=5;break}return n.next=3,fetch("api/tasks/".concat(e),{method:"DELETE"});case 3:r=n.sent,200===r.status?t.tasks=t.tasks.filter((function(t){return t.id!==e})):alert("Failed");case 5:case"end":return n.stop()}}),n)})))()},toggleReminder:function(e){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchTask(e);case 2:return r=n.sent,a=Object(J["a"])(Object(J["a"])({},r),{},{reminder:!r.reminder}),n.next=6,fetch("api/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 6:return c=n.sent,n.next=9,c.json();case 9:o=n.sent,t.tasks=t.tasks.map((function(t){return t.id===e?Object(J["a"])(Object(J["a"])({},t),{},{reminder:o.reminder}):t}));case 11:case"end":return n.stop()}}),n)})))()},fetchTasks:function(){return Object(U["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},fetchTask:function(e){return Object(U["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(U["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTasks();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};const de=f()(ue,[["render",z]]);var le=de,be=[{path:"/",name:"Home",component:le},{path:"/about",name:"About",component:H}],fe=Object(F["a"])({history:Object(F["b"])("/"),routes:be}),pe=fe,me=n("ecee"),je=n("c074"),Oe=n("ad3d");me["d"].add(je["a"]),me["b"].watch(),Object(r["c"])(S).use(pe).component("FAIcon",Oe["a"]).mount("#app")},"98d6":function(e,t,n){"use strict";n("c98e")},aa8d:function(e,t,n){},ba8c:function(e,t,n){},c98e:function(e,t,n){},f80f:function(e,t,n){"use strict";n("1109")}});
//# sourceMappingURL=app.3026cc4e.js.map