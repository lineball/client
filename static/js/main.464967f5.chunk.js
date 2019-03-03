(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(n,e,t){n.exports=t(37)},30:function(n,e,t){},37:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),o=t(11),u=t.n(o),i=(t(30),t(3)),l=t(2),s=function(n){return{x:10*n.x+5,y:10*n.y}},f=function(n){var e=n.x,t=n.y;return"".concat(e,"_").concat(t)},m=function(n){var e=Object(i.a)(n,2),t=e[0],r=e[1];return"".concat(f(t.position),":").concat(f(r.position))},p=t(10),v=t(5),b=function(n){return n.turns.flatMap(function(n){return n.moves})},d=Object(p.a)([b,function(n){return n.fields}],function(n,e){if(0===n.length){var t=e.find(function(n){return 4===n.position.x&&6===n.position.y});if(!t)throw new Error("Problem with getting last field");return t}if(1===n.length){var r=e.find(function(n){return 4===n.position.x&&6===n.position.y});if(!r)throw new Error("Problem with getting last field");return n[0].path[0]===r?n[0].path[1]:n[0].path[0]}var a=n[n.length-1];return a.path[a.direction]}),h=Object(p.a)([function(n){return n.turns}],function(n){if(!n.length)throw new Error("Error getting current turn");return n[n.length-1]}),E=Object(p.a)([d,function(n){return n.paths}],function(n,e){return e.filter(function(e){return e.includes(n)})}),O=Object(p.a)([b,d],function(n,e){return n.filter(function(n){return n.path.includes(e)}).map(function(n){return n.path})}),y=Object(p.a)([d,E,O],function(n,e,t){return Object(v.difference)(e,t).map(function(e){var t=Object(i.a)(e,2),r=t[0],a=t[1];return r===n?a:r})}),j=Object(a.memo)(function(n){var e=n.color,t=void 0===e?"white":e,r=n.path,o=Object(a.useMemo)(function(){return s(r[0].position)},r),u=o.x,i=o.y,l=Object(a.useMemo)(function(){return s(r[1].position)},r),f=l.x,m=l.y;return c.a.createElement("line",{pointerEvents:"none",x1:u,y1:i,x2:f,y2:m,stroke:t})}),g=Object(l.b)(function(n,e){var t=n.game,r=e.field;return{current:d(t),isValidMove:y(t).includes(r)}},function(n){return{addMove:function(e){return n(function(n){return{type:"@lineball/ADD_MOVE",payload:n}}(e))}}})(function(n){var e=n.position,t=e.x,r=e.y,o=n.current,u=n.addMove,l=n.field,f=n.isValidMove,m=Object(a.useState)(!1),p=Object(i.a)(m,2),v=p[0],b=p[1],d=o===l,h=s({x:t,y:r}),E=h.x,O=h.y;return c.a.createElement(c.a.Fragment,null,f&&c.a.createElement("circle",{onClick:function(){b(!1),u(l)},r:"4",fill:"transparent",cx:E,cy:O,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)}}),c.a.createElement("circle",{pointerEvents:"none",cx:E,cy:O,r:v||d?"2":"0.5",fill:d?"red":"white"}),v&&f&&c.a.createElement(j,{path:[o,l]}))});!function(n){n[n.WHITE=0]="WHITE",n[n.BLACK=1]="BLACK"}(r||(r={}));var x=Object(l.b)(function(n){var e=n.game,t=e.fields,r=e.size,a=e.borders;return{fields:t,moves:b(e),size:r,borders:a,currentTurn:h(e)}})(function(n){var e=n.fields,t=n.moves,a=n.size,o=a.x,u=a.y,i=n.borders,l=n.currentTurn;return c.a.createElement("svg",{width:50*o,height:50*(u+1),viewBox:"0 0 ".concat(10*o," ").concat(10*u)},i.map(function(n){return c.a.createElement(j,{key:m(n),path:n,color:l.player===r.WHITE?"blue":"red"})}),t.map(function(n){var e=n.path;return c.a.createElement(j,{key:m(e),path:e})}),e.map(function(n){return c.a.createElement(g,Object.assign({},n,{key:"".concat(n.position.x,"_").concat(n.position.y),field:n}))}))}),w=Object(l.b)(function(n){var e=n.game;return{moves:b(e),turn:h(e)}},function(n){return{revertMove:function(){return n({type:"@lineball/REVERT_MOVE"})},revertTurn:function(){return n({type:"@lineball/REVERT_TURN"})}}})(function(n){var e=n.moves,t=n.revertMove,r=n.revertTurn,a=n.turn;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Moves"),a.moves.length?c.a.createElement("button",{type:"button",onClick:function(){t()}},"revert move"):e.length&&c.a.createElement("button",{type:"button",onClick:function(){r()}},"revert turn"),c.a.createElement("ul",null,e.map(function(n){return c.a.createElement("li",{key:m(n.path)},JSON.stringify(n))})))}),M=Object(l.b)(function(n){var e=n.game;return{turn:h(e)}})(function(n){var e=n.turn,t=e.player,r=e.moves;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Turn"),c.a.createElement("p",null,"player: ",t),c.a.createElement("p",null,"moves: ",JSON.stringify(r)))}),T=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,null),c.a.createElement(M,null),c.a.createElement(w,null))},_=t(19);function k(){var n=Object(_.a)(["\n  max-width: 960px;\n  margin: auto;\n"]);return k=function(){return n},n}var R=t(20).a.div(k()),V=t(8),W=t(4),C=t(1),I=function(n){var e=n.x,t=n.y;return{name:"".concat(String.fromCharCode(65+t)).concat(e),position:{x:e,y:t}}},H=function(){return Object(v.flatMap)([].concat(Object(W.a)([0,12].map(function(n){return Object(v.range)(3,6).map(function(e){return I({x:e,y:n})})})),Object(W.a)(Object(v.range)(1,12).map(function(n){return Object(v.range)(0,9).map(function(e){return I({x:e,y:n})})}))))},B=function(n){return Object(v.partition)(Object(v.flatMap)(n.map(function(e){var t=e.position,r=t.x,a=t.y;return n.filter(function(n){return([r,r+1].includes(n.position.x)&&[a,a+1].includes(n.position.y)||n.position.x===r-1&&n.position.y===a+1)&&n.name!==e.name&&!function(n){var e=m(n);return["5_0:6_1","3_0:2_1","6_11:5_12","2_11:3_12"].includes(e)}([e,n])}).map(function(n){return[e,n]})})),function(n){var e=Object(i.a)(n,2),t=e[0],r=e[1];return function(n){var e=Object(i.a)(n,2),t=e[0],r=e[1];if(t.y===r.y){if([0,12].includes(t.y))return!0;if([1,11].includes(t.y)&&(t.x<3||t.x>=5))return!0}else if(t.x===r.x){if([0,8].includes(t.x))return!0;if([3,5].includes(t.x)&&[0,11].includes(t.y))return!0}return!1}([t.position,r.position])})},A=function(){var n=H(),e=B(n),t=Object(i.a)(e,2),a=t[0];return{fields:n,paths:t[1],borders:a,turns:[{player:r.WHITE,moves:[]}],size:{x:9,y:12}}},S=A(),z=t(23),D=Object(V.combineReducers)({game:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"@lineball/ADD_MOVE":var t=e.payload,a=d(n),c=n.paths.find(function(n){return n.includes(t)&&n.includes(a)});if(!c)throw new Error("Path not found!");var o=c[0]===t?0:1,u=Object(C.a)({},n.turns[n.turns.length-1],{moves:[].concat(Object(W.a)(n.turns[n.turns.length-1].moves),[{path:c,direction:o}])});if(n.turns.flatMap(function(n){return n.moves}).map(function(n){return n.path}).concat(n.borders).filter(function(n){return n.includes(t)}).map(function(n){return n}).length)return Object(C.a)({},n,{turns:[].concat(Object(W.a)(n.turns.slice(0,-1)),[u])});var i={moves:[],player:h(n).player===r.WHITE?r.BLACK:r.WHITE};return Object(C.a)({},n,{turns:[].concat(Object(W.a)(n.turns.slice(0,-1)),[u,i])});case"@lineball/REVERT_MOVE":var l=n.turns[n.turns.length-1];return l.moves.length>0?Object(C.a)({},n,{turns:[].concat(Object(W.a)(n.turns.slice(0,-1)),[Object(C.a)({},l,{moves:Object(W.a)(l.moves.slice(0,-1))})])}):Object(C.a)({},n);case"@lineball/REVERT_TURN":if(n.turns.length>2){if(n.turns[n.turns.length-1].moves.length>0)return Object(C.a)({},n);var s=n.turns[n.turns.length-2];return Object(C.a)({},n,{turns:[].concat(Object(W.a)(n.turns.slice(0,-2)),[Object(C.a)({},s,{moves:[]})])})}return Object(C.a)({},n,{turns:[{player:r.WHITE,moves:[]}]});default:return n}}}),F=Object(V.createStore)(D,Object(z.devToolsEnhancer)({})),J=function(){return c.a.createElement(l.a,{store:F},c.a.createElement(R,null,c.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.464967f5.chunk.js.map