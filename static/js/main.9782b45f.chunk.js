(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(37)},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),s=n(9),i=n(2),l=n(18),u=n(19),h=(n(29),n(6)),d=n(7),b=n(10),m=n(8),E=n(11),p=(n(31),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc dib br3 pa3 ma3 grow bw3 shadow-5 card"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?100x100")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))}),f=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(p,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},O=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue w-50 shadow-4 br3 mb4",type:"search",placeholder:"search robots",onChange:t}))},g=(n(33),function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops.. Error! The Card is not loaded"):this.props.children}}]),t}(a.Component)),v=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?r.a.createElement("div",{className:"tc"},r.a.createElement("h3",{className:"f3"},"Loading")):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(O,{searchChange:n}),r.a.createElement(g,null,r.a.createElement(f,{robots:c})))}}]),t}(a.Component),R=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(4),y={searchField:""},j={isPending:!1,robots:[],error:""},w=(n(35),Object(l.createLogger)()),C=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(S.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(S.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(S.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(S.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(C,Object(i.a)(u.a,w));c.a.render(r.a.createElement(s.a,{store:_},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.9782b45f.chunk.js.map