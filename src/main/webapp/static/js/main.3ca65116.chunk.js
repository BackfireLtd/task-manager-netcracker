(this["webpackJsonptask-manager-front"]=this["webpackJsonptask-manager-front"]||[]).push([[0],{347:function(e,t,n){e.exports=n(444)},352:function(e,t,n){},353:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},354:function(e,t,n){},444:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),s=(n(352),n(337)),i=n(314),f=n(315),u=n(338),l=n(316),d=n(155),b=n(339),h=(n(353),n(354),n(317)),j=n.n(h),O=n(324),g=n.n(O),m=n(334),E=n.n(m),w=n(325),p=n.n(w),k=n(332),R=n.n(k),v=n(216),T=n.n(v),y=n(215),D=n.n(y),P=n(326),S=n.n(P),x=n(327),C=n.n(x),A=n(329),I=n.n(A),F=n(330),J=n.n(F),L=n(331),U=n.n(L),V=n(335),B=n.n(V),M=n(328),N=n.n(M),W=n(333),q=n.n(W),z=n(336),G=n.n(z),H={Add:Object(a.forwardRef)((function(e,t){return r.a.createElement(g.a,Object.assign({},e,{ref:t}))})),Check:Object(a.forwardRef)((function(e,t){return r.a.createElement(p.a,Object.assign({},e,{ref:t}))})),Clear:Object(a.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),Delete:Object(a.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(a.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),Edit:Object(a.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Export:Object(a.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),Filter:Object(a.forwardRef)((function(e,t){return r.a.createElement(I.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(J.a,Object.assign({},e,{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return r.a.createElement(q.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return r.a.createElement(E.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(a.forwardRef)((function(e,t){return r.a.createElement(G.a,Object.assign({},e,{ref:t}))}))},K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={columns:[{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",field:"name"},{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",field:"description",initialEditValue:"Initial edit value"},{title:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",field:"creationDate",type:"date"},{title:"\u0414\u0430\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",field:"dueDate",type:"date"},{title:"\u0421\u0442\u0430\u0442\u0443\u0441",field:"statusId"}],data:[]},n.getTasks=n.getTasks.bind(Object(d.a)(n)),n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"getTasks",value:function(){var e=this;fetch("http://localhost:8080/rest/api/tasks").then((function(e){return e.json()})).then((function(t){console.log(t);for(var n=[],a=0,r=Object.entries(t);a<r.length;a++){var c=Object(s.a)(r[a],2),o=(c[0],c[1]);n.push(o)}e.setState({data:n})}))}},{key:"componentDidMount",value:function(){this.getTasks()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement(j.a,{title:"\u0414\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440 \u0437\u0430\u0434\u0430\u0447",columns:this.state.columns,data:this.state.data,icons:H,editable:{onRowAdd:function(t){return fetch("http://localhost:8080/rest/api/tasks",{method:"POST",body:t.value}).then((function(e){return e.json()})).then((function(){console.log("A new task has been added"),e.getTasks()}))},onRowUpdate:function(t){return fetch("http://localhost:8080/rest/api/tasks",{method:"PUT",body:t.id,newData:t}).then((function(e){return e.json()})).then((function(){console.log("This task has been edited"),e.getTasks()}))},onRowDelete:function(t){return fetch("http://localhost:8080/rest/api/tasks",{method:"DELETE",body:t.id}).then((function(e){return e.json()})).then((function(){console.log("This task has been deleted"),e.getTasks()}))}}}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[347,1,2]]]);
//# sourceMappingURL=main.3ca65116.chunk.js.map