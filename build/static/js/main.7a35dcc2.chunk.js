(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],{37:function(t,e,n){t.exports=n(67)},47:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(31),c=n.n(r),l=n(18),i=n(6),s=n(7),u=n(9),d=n(8),p=n(10),m=n(14),h=n(11),f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{background:"#f4f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n.markComplete=function(){},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:b},"X")))}}]),e}(a.Component),b={background:"red",color:"white",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},y=f,v=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props.todos),this.props.todos.map((function(e){return o.a.createElement(y,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(a.Component);var E={color:"#fff",textDecoration:"none"},g={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},j=function(){return o.a.createElement("header",{style:g},o.a.createElement("h1",null,"todolist"),o.a.createElement(m.b,{style:E,to:"/"},"Home"),"|",o.a.createElement(m.b,{style:E,to:"/about"},"About"))},O=n(34),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},n.onChange=function(t){return n.setState(Object(O.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(a.Component);var x=function(){return o.a.createElement(a.Fragment,null,o.a.createElement("h1",null," About "),o.a.createElement("p",null,"There is some test here"))},C=(n(47),n(35)),T=n.n(C),S=n(36),A=n.n(S),w=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delTodo=function(t){n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})},n.addTodo=function(t){var e={id:A.a.v4(),title:t,completed:!1};n.setState({todos:[].concat(Object(l.a)(n.state.todos),[e])})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(j,null),o.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:t.addTodo}),o.a.createElement("h1",null,"Todos"),o.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(h.a,{path:"/about",component:x}))))}}]),e}(a.Component);c.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.7a35dcc2.chunk.js.map