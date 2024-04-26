(()=>{var e={1069:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U});var n=r(467),o=r(5544),a=r(6665),i=r(6725),u=r(3004),l=r(3929),s=r(6793),f=r(3668),c=r(436),d=r(3029),h=r(2901),g=function(e){return e.Blank=" ",e.Peg="o",e.Wall="x",e}(g||{}),v=function(){function e(t){var r=this;(0,d.default)(this,e),this.board=Array(e.SIZE).fill(null).map((function(t,r){return Array(e.SIZE).fill(null).map((function(e,t){return r>1&&r<5||t>1&&t<5?g.Blank:g.Wall}))})),t.forEach((function(e){var t=(0,o.default)(e,2),n=t[0],a=t[1];return r.board[n][a]=g.Peg})),this.initialBoard=e.copyBoard(this.board)}return(0,h.default)(e,[{key:"reset",value:function(){this.board=e.copyBoard(this.initialBoard)}},{key:"count",value:function(){return this.board.flat().reduce((function(e,t){return t===g.Peg?e+1:e}),0)}},{key:"onBoard",value:function(t,r){return t>=0&&t<e.SIZE&&r>=0&&r<e.SIZE}},{key:"isPeg",value:function(e,t){return this.board[e][t]==g.Peg}},{key:"isBlank",value:function(e,t){return this.board[e][t]==g.Blank}},{key:"getGrid",value:function(e,t){return this.board[e][t]}},{key:"movable",value:function(e,t){return!(!this.onBoard(e,t)||!this.isPeg(e,t))&&0!=this.getLegalDestinations(e,t).length}},{key:"getLegalDestinations",value:function(e,t){var r=this;return[[0,-1],[0,1],[-1,0],[1,0]].reduce((function(n,a){var i=(0,o.default)(a,2),u=i[0],l=i[1],s=e+u,f=t+l,c=s+u,d=f+l;return r.onBoard(c,d)&&r.isPeg(s,f)&&r.isBlank(c,d)&&n.push([c,d]),n}),[])}},{key:"move",value:function(e,t,r,n){var o=(e+r)/2,a=(t+n)/2;this.board[e][t]=g.Blank,this.board[o][a]=g.Blank,this.board[r][n]=g.Peg}}],[{key:"copyBoard",value:function(e){return e.map((function(e){return(0,c.default)(e)}))}}])}();v.SIZE=7;const p=v;var y="ghostwhite",b="lightgray",w="dimgray",m=r(397);function x(e){var t=e.color;return(0,m.jsx)(l.default,{style:j.grid,children:(0,m.jsx)(l.default,{style:{width:"70%",height:"70%",borderRadius:Number.MAX_SAFE_INTEGER,backgroundColor:t}})})}var j=f.default.create({grid:{width:"100%",height:"100%",backgroundColor:b,justifyContent:"center",alignItems:"center"}});const k=function(e){var t,r=e.irow,n=e.icol,o=e.cell,a=e.setCell,i=e.setCount,u=e.game,f=u.getGrid(r,n);return t=o&&o[0]===r&&o[1]===n?(0,m.jsx)(x,{color:"slateblue"}):f===g.Peg?(0,m.jsx)(x,{color:w}):f===g.Wall?(0,m.jsx)(l.default,{style:{width:"100%",height:"100%"}}):(0,m.jsx)(l.default,{style:j.grid}),(0,m.jsx)(s.default,{onPress:function(){u.isPeg(r,n)?a([r,n]):o&&(a(null),u.getLegalDestinations(o[0],o[1]).forEach((function(e){if(e[0]===r&&e[1]===n)return u.move(o[0],o[1],e[0],e[1]),void i(u.count())})))},style:{flex:1,marginRight:3,marginBottom:3,justifyContent:"center",alignItems:"center"},children:t})};const C=function(e){var t=e.game,r=e.boardLength,n=e.cell,o=e.setCount,a=e.setCell,i=t.board.map((function(e,i){var u=e.map((function(e,r){return(0,m.jsx)(k,{irow:i,icol:r,cell:n,setCell:a,setCount:o,game:t},`grid${i}${r}`)}));return(0,m.jsx)(l.default,{style:{flex:1,width:r,flexDirection:"row"},children:u},`row${i}`)}));return(0,m.jsx)(l.default,{style:{height:r},children:i})};var S=r(6283);const E=function(e){var t=e.title,r=e.onPress;return(0,m.jsx)(s.default,{onPress:r,style:{flex:1,marginVertical:5,padding:8,borderRadius:5,backgroundColor:b,justifyContent:"center",alignItems:"center"},children:(0,m.jsx)(S.default,{numberOfLines:1,style:{color:w,fontSize:24},children:t})})};var P=r(4473),z="https://twitter.com/PegsolitireBot/status/1783810041122099451",B={pqsty:z,xyzFM:z,kpqrst:z,wxzAFM:z,kqrsyF:z,rwxzAF:z,xyzEGM:z};var I="http://localhost:3000";function O(e){return e.split("").map((function(e){return function(e){var t="a".charCodeAt(0),r="A".charCodeAt(0),n=e.charCodeAt(0);if(e>="a"&&e<="z")n-=t;else{if(!(e>="A"&&e<="Z"))throw new Error("Only ASCII letters are allowed.");n=n-r+26}return[Math.floor(n/p.SIZE),n%p.SIZE]}(e)}))}function L(){return(L=(0,n.default)((function*(e){var t=yield P.getInitialURL();if(!t)throw new Error("URL not found.");var r=P.parse(t).queryParams;if(!r)throw new Error("Query parameters not found.");var n=r.puzzle;if(!n)throw new Error("Query 'puzzle' not found.");var o=function(e){var t=B[e];return t||z}(n);if(e){var a=r.signature;if(!a)throw new Error("Query 'signature' not found.");if(!(yield function(e,t){return fetch(I+"/verify-signature",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({puzzle:t,signature:e})}).then((function(e){return e.json()})).then((function(e){return"ok"===e.message})).catch((function(e){throw new Error(e)}))}(a,n)))throw new Error("Signature verification failed.")}return{articleUrl:o,puzzle:n,game:new p(O(n))}}))).apply(this,arguments)}var A=r(9632),R="\u30da\u30b0\u30bd\u30ea\u30c6\u30a3\u30a2,\u30d1\u30ba\u30eb";var M=!1,T=r(935);function U(){var e=(0,a.useState)(),t=(0,o.default)(e,2),r=t[0],u=t[1],s=(0,a.useState)(),f=(0,o.default)(s,2),c=f[0],d=f[1],h=(0,a.useState)(),g=(0,o.default)(h,2),v=g[0],p=g[1],b=(0,a.useState)(),w=(0,o.default)(b,2),x=w[0],j=w[1],k=(0,a.useState)(null),S=(0,o.default)(k,2),P=S[0],z=S[1],B=(0,a.useState)(0),I=(0,o.default)(B,2),O=I[0],T=I[1],U=(0,a.useState)(!1),F=(0,o.default)(U,2),$=F[0],_=F[1],q=(0,a.useRef)(null);(0,a.useEffect)((function(){var e=q.current;if($&&e){var t=function(){e.measure((function(e,t,r,n,o,a){var u=i.default.get("window"),l=Math.min(u.height-n-15,u.width-17);T(l)}))};t();var r=i.default.addEventListener("change",t);return function(){return r.remove()}}}),[$]),(0,a.useEffect)((function(){var e=function(){var e=(0,n.default)((function*(){var e=yield function(e){return L.apply(this,arguments)}(M),t=e.articleUrl,r=e.puzzle,n=e.game;u(t),d(r),p(n),j(n.count())}));return function(){return e.apply(this,arguments)}}();e()}),[]);var D=function(e){e?function(e){var t=`https://twitter.com/intent/tweet?text=${encodeURIComponent("\u3053\u3053\u306b\u30b3\u30e1\u30f3\u30c8")}&url=${encodeURIComponent(e)}&hashtags=${encodeURIComponent(R)}`;A.default.openURL(t).catch((function(e){return console.error("An error occurred",e)}))}(e):window.alert("\u3053\u306e\u30d1\u30ba\u30eb\u306b\u5bfe\u5fdc\u3059\u308bTwitter\u8a18\u4e8b\u306eURL\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002")};return c&&v&&x?($||_(!0),(0,m.jsxs)(l.default,{style:{flex:1,backgroundColor:y,paddingTop:10,paddingLeft:10},children:[(0,m.jsxs)(l.default,{style:{position:"relative"},children:[(0,m.jsx)(C,{game:v,boardLength:O,cell:P,setCell:z,setCount:j}),x<=1&&(0,m.jsx)(Z,{boardLength:O})]}),(0,m.jsxs)(l.default,{ref:q,style:{width:O,paddingTop:2},children:[(0,m.jsx)(E,{title:"\u306f\u3058\u3081\u304b\u3089\u3084\u308a\u306a\u304a\u3059",onPress:function(){v&&(v.reset(),j(v.count()),z(null))}}),(0,m.jsx)(E,{title:"\u30c4\u30a4\u30c3\u30bf\u30fc\u3067\u30b7\u30a7\u30a2\u3059\u308b",onPress:function(){return D(r)}})]})]})):(0,m.jsx)(l.default,{style:{flex:1}})}function Z(e){var t=e.boardLength,r=t/1.618,n=(t-r)/2;return(0,m.jsx)(u.default,{style:{position:"absolute",resizeMode:"contain",width:r,height:r,top:n,left:n},source:T})}},935:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/stamp.2b496c1bea767406bc56.png"},2634:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(f=0;f<e.length;f++){for(var[n,o,a]=e[f],u=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[n,o,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,u,l]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(l)var f=l(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(f)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[926],(()=>r(5036)));n=r.O(n)})();
//# sourceMappingURL=main.4c871c1d.js.map