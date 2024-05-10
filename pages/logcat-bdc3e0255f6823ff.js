(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{3078:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logcat",function(){return t(3804)}])},3804:function(e,n,t){"use strict";t.r(n);var r=t(9837),o=t(3803),i=t(5105),s=t(421),l=t(3319),c=t(8391),a=t(4549),u=t(1788),d=t(2828),f=t(7015),m=t(8144),h=t.n(m),p=t(3617),g=t(5353),x=t(2373);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function I(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=(0,s.Z)({grid:{height:"100%",marginLeft:"-16px",marginRight:"-16px"},header:{textAlign:"center",lineHeight:"".concat(32,"px")},row:{"&:hover":{backgroundColor:"#f3f2f1"}},selected:{backgroundColor:"#edebe9"},code:y({fontFamily:"monospace",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"32px",cursor:"default"},l.q5.overflow("hidden"))}),N=(0,d.ky)({logcat:void 0,running:!1,buffer:[],flushRequested:!1,list:[],count:0,stream:void 0,stopSignal:void 0,selectedCount:0,animationFrameId:void 0,start:function(){var e=this;this.running||(this.list=[],this.running=!0,this.stream=this.logcat.binary(),this.stopSignal=new u.HS,this.stream.pipeTo(new u.Vj({write:function(n){e.buffer.push(n),e.flushRequested||(e.flushRequested=!0,requestAnimationFrame(e.flush))}}),{signal:this.stopSignal.signal}).catch((function(){})))},flush:function(){var e;(e=this.list).push.apply(e,I(this.buffer)),this.buffer=[],this.flushRequested=!1},stop:function(){this.running=!1,this.stopSignal.abort()},clear:function(){this.list=[],this.selectedCount=0},get empty(){return 0===this.list.length},get commandBar(){var e=this;return[this.running?{key:"stop",text:"Stop",iconProps:{iconName:x.PJ.Stop},onClick:function(){return e.stop()}}:{key:"start",text:"Start",disabled:void 0===this.logcat,iconProps:{iconName:x.PJ.Play},onClick:function(){return e.start()}},{key:"clear",text:"Clear",disabled:this.empty,iconProps:{iconName:x.PJ.Delete},onClick:function(){return e.clear()}},{key:"copyAll",text:"Copy Rows",disabled:0===this.selectedCount,iconProps:{iconName:x.PJ.Copy},onClick:function(){}},{key:"copyText",text:"Copy Messages",disabled:0===this.selectedCount,iconProps:{iconName:x.PJ.Copy},onClick:function(){}}]},get columns(){var e=this;return[{width:200,title:"Time",CellComponent:function(n){var t=n.rowIndex,o=(n.columnIndex,n.className),i=b(n,["rowIndex","columnIndex","className"]),s=e.list[t];s.timeString||(s.timeString=new Date(1e3*s.second).toISOString());var l=C();return(0,r.jsx)("div",y({className:(0,c.z)(l.code,o)},i,{children:s.timeString}))}},{width:60,title:"PID",CellComponent:function(n){var t=n.rowIndex,o=(n.columnIndex,n.className),i=b(n,["rowIndex","columnIndex","className"]),s=e.list[t],l=C();return(0,r.jsx)("div",y({className:(0,c.z)(l.code,o)},i,{children:s.pid}))}},{width:60,title:"TID",CellComponent:function(n){var t=n.rowIndex,o=(n.columnIndex,n.className),i=b(n,["rowIndex","columnIndex","className"]),s=e.list[t],l=C();return(0,r.jsx)("div",y({className:(0,c.z)(l.code,o)},i,{children:s.tid}))}},{width:80,title:"Priority",CellComponent:function(n){var t=n.rowIndex,o=(n.columnIndex,n.className),i=b(n,["rowIndex","columnIndex","className"]),s=e.list[t],l=C();return(0,r.jsx)("div",y({className:(0,c.z)(l.code,o)},i,{children:a.As[s.priority]}))}},{width:300,title:"Tag",CellComponent:function(n){var t=n.rowIndex,o=(n.columnIndex,n.className),i=b(n,["rowIndex","columnIndex","className"]),s=e.list[t],l=C();return(0,r.jsx)("div",y({className:(0,c.z)(l.code,o)},i,{children:s.tag}))}},{width:300,flexGrow:1,title:"Message",CellComponent:function(n){var t=n.rowIndex,o=(n.columnIndex,n.className),i=b(n,["rowIndex","columnIndex","className"]),s=e.list[t],l=C();return(0,r.jsx)("div",y({className:(0,c.z)(l.code,o)},i,{children:s.message}))}}]}},{buffer:!1,list:d.LO.shallow,flush:d.aD.bound});(0,d.EH)((function(){g.q.device?(0,d.z)((function(){N.logcat=new a.J(g.q.device)})):(0,d.z)((function(){N.logcat=void 0,N.running&&N.stop()}))}));var j=(0,f.Pi)((function(e){var n=e.className,t=e.columnIndex,o=b(e,["className","columnIndex"]),i=C();return(0,r.jsx)("div",y({className:(0,c.z)(n,i.header)},o,{children:N.columns[t].title}))})),O=function(e){var n=e.className,t=e.rowIndex,o=b(e,["className","rowIndex"]),i=(N.list[t],C()),s=(0,x.R9)((function(){(0,d.z)((function(){}))}));return(0,r.jsx)("div",y({className:(0,c.z)(n,i.row),onClick:s},o))};n.default=(0,f.Pi)((function(){var e=C();return(0,r.jsxs)(o.K,y({},x.LE,{children:[(0,r.jsx)(h(),{children:(0,r.jsx)("title",{children:"Logcat - Android Web Toolbox"})}),(0,r.jsx)(p.X3,{items:N.commandBar}),(0,r.jsx)(i.v,{grow:!0,children:(0,r.jsx)(p.rj,{className:e.grid,rowCount:N.list.length,rowHeight:32,columns:N.columns,HeaderComponent:j,RowComponent:O})})]}))}))}},function(e){e.O(0,[774,888,179],(function(){return n=3078,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=logcat-bdc3e0255f6823ff.js.map