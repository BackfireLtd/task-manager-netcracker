(this["webpackJsonptask-manager-front"]=this["webpackJsonptask-manager-front"]||[]).push([[0],{348:function(e,t,n){e.exports=n(445)},353:function(e,t,n){},354:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},355:function(e,t,n){},445:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(353),n(217)),s=n(338),f=n(315),u=n(316),l=n(339),d=n(317),b=n(155),h=n(340),j=(n(354),n(355),n(318)),O=n.n(j),g=n(325),m=n.n(g),p=n(335),E=n.n(p),w=n(326),k=n.n(w),D=n(333),R=n.n(D),v=n(216),T=n.n(v),y=n(215),P=n.n(y),S=n(327),C=n.n(S),x=n(328),A=n.n(x),F=n(330),J=n.n(F),I=n(331),M=n.n(I),N=n(332),V=n.n(N),H=n(336),L=n.n(H),U=n(329),Y=n.n(U),B=n(334),W=n.n(B),q=n(337),z=n.n(q),G={Add:Object(a.forwardRef)((function(e,t){return r.a.createElement(m.a,Object.assign({},e,{ref:t}))})),Check:Object(a.forwardRef)((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Clear:Object(a.forwardRef)((function(e,t){return r.a.createElement(P.a,Object.assign({},e,{ref:t}))})),Delete:Object(a.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(a.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),Edit:Object(a.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),Export:Object(a.forwardRef)((function(e,t){return r.a.createElement(Y.a,Object.assign({},e,{ref:t}))})),Filter:Object(a.forwardRef)((function(e,t){return r.a.createElement(J.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return r.a.createElement(P.a,Object.assign({},e,{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return r.a.createElement(E.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,t){return r.a.createElement(L.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(a.forwardRef)((function(e,t){return r.a.createElement(z.a,Object.assign({},e,{ref:t}))}))};function K(e){var t=new Date,n=e.split(" ");return t.setFullYear(n[0],n[1].split(".")[1],n[1].split(".")[0]),t.setHours(n[2].split(":")[0],n[2].split(":")[1]),t}function Q(e){return"".concat(e.getFullYear()," ").concat(e.getDate(),":").concat(e.getMonth()+1," ").concat(e.getHours(),":").concat(e.getMinutes())}var X=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={columns:[{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",field:"name"},{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",field:"description"},{title:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",field:"creationDate",type:"datetime",initialEditValue:new Date},{title:"\u0414\u0430\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",field:"dueDate",type:"datetime"},{title:"\u0421\u0442\u0430\u0442\u0443\u0441",field:"statusId",initialEditValue:"In process"}],data:[]},n.getTasks=n.getTasks.bind(Object(b.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getTasks",value:function(){var e=this;fetch("http://localhost:8080/rest/api/tasks").then((function(e){return e.json()})).then((function(t){console.log(t);for(var n=[],a=0,r=Object.entries(t);a<r.length;a++){var c=Object(s.a)(r[a],2),o=(c[0],c[1]);o.creationDate=K(o.creationDate),o.dueDate=K(o.dueDate),n.push(o)}e.setState({data:n})}))}},{key:"componentDidMount",value:function(){this.getTasks()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement(O.a,{title:"\u0414\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440 \u0437\u0430\u0434\u0430\u0447",columns:this.state.columns,data:this.state.data,icons:G,editable:{onRowAdd:function(t){var n=Object(i.a)({},t);return n.dueDate=Q(n.dueDate),n.creationDate=Q(n.creationDate),fetch("http://localhost:8080/rest/api/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(){console.log("A new task has been added"),e.getTasks()}))},onRowUpdate:function(t){var n=Object(i.a)({},t);return n.dueDate=Q(n.dueDate),n.creationDate=Q(n.creationDate),fetch("http://localhost:8080/rest/api/tasks/"+t.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(){console.log("This task has been edited"),e.getTasks()}))},onRowDelete:function(t){return fetch("http://localhost:8080/rest/api/tasks/"+t.id,{method:"DELETE"}).then((function(e){return e.json()})).then((function(){console.log("This task has been deleted"),e.getTasks()}))}}}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[348,1,2]]]);
//# sourceMappingURL=main.c73f3b6d.chunk.js.map