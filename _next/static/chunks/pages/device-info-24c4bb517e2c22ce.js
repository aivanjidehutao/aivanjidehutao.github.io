(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{798:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/device-info",function(){return i(6198)}])},6198:function(e,n,i){"use strict";i.r(n);var s,r=i(9837),o=i(3803),a=i(7310),t=i(924),c=i(3485),l=i(7323),d=i(9017),m=i(7015),u=i(8144),p=i.n(u),f=(i(3639),i(3617)),g=i(5353),h=i(2373);function x(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}var v=(x(s={},d.Pq.ShellV2,'"shell" command now supports separating child process\'s stdout and stderr, and returning exit code'),x(s,d.Pq.StatV2,'"sync" command now supports "STA2" (returns more information of a file than old "STAT") and "LST2" (returns information of a directory) sub command'),x(s,d.Pq.ListV2,'"sync" command now supports "LST2" sub command which returns more information when listing a directory than old "LIST"'),x(s,d.Pq.FixedPushMkdir,"Android 9 (P) introduced a bug that pushing files to a non-existing directory would fail. This feature indicates it's fixed (Android 10)"),x(s,"abb_exec",'Support "exec" command which can stream stdin into child process'),s);n.default=(0,m.Pi)((function(){var e,n,i,s,d,m,u;return(0,r.jsxs)(o.K,function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},s=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),s.forEach((function(n){x(e,n,i[n])}))}return e}({},h.LE,{children:[(0,r.jsx)(p(),{children:(0,r.jsx)("title",{children:"Device Info - Android Web Toolbox"})}),(0,r.jsxs)(a.c,{children:[(0,r.jsx)("span",{children:"ADB protocol version decides the packet format between client and server. By now it has 2 versions:"}),(0,r.jsx)("br",{}),(0,r.jsx)("code",{children:"01000000"}),(0,r.jsx)("span",{children:" used in Android versions until 8 (Oreo)"}),(0,r.jsx)("br",{}),(0,r.jsx)("code",{children:"01000001"}),(0,r.jsx)("span",{children:" used in Android versions from 9 (Pie)"}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:"For more information, you can check"}),(0,r.jsx)(f.dL,{href:"https://chensi.moe/blog/2020/09/30/webadb-part2-connection/#version",children:"my blog post"})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{children:"Protocol Version: "}),(0,r.jsx)("code",{children:null===(e=g.q.device)||void 0===e||null===(n=e.protocolVersion)||void 0===n?void 0:n.toString(16).padStart(8,"0")})]}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(a.c,{children:[(0,r.jsx)("code",{children:"ro.product.name"}),(0,r.jsx)("span",{children:" field in Android Build Props"})]}),(0,r.jsxs)("span",{children:["Product Name: ",null===(i=g.q.device)||void 0===i?void 0:i.product]}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(a.c,{children:[(0,r.jsx)("code",{children:"ro.product.model"}),(0,r.jsx)("span",{children:" field in Android Build Props"})]}),(0,r.jsxs)("span",{children:["Model Name: ",null===(s=g.q.device)||void 0===s?void 0:s.model]}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(a.c,{children:[(0,r.jsx)("code",{children:"ro.product.device"}),(0,r.jsx)("span",{children:" field in Android Build Props"})]}),(0,r.jsxs)("span",{children:["Device Name: ",null===(d=g.q.device)||void 0===d?void 0:d.device]}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(a.c,{children:[(0,r.jsx)("span",{children:"Feature list decides how each individual commands should behavior."}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:"For example, it may indicate the availability of a new command, "}),(0,r.jsx)("span",{children:"or a workaround for an old bug is not required because it's already been fixed."}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{children:"Features: "}),null===(m=g.q.device)||void 0===m||null===(u=m.features)||void 0===u?void 0:u.map((function(e,n){return(0,r.jsxs)("span",{children:[0!==n&&(0,r.jsx)("span",{children:", "}),(0,r.jsx)("span",{children:e}),v[e]&&(0,r.jsx)(c.G,{content:(0,r.jsx)("span",{children:v[e]}),children:(0,r.jsx)(l.J,{style:{marginLeft:4},iconName:h.PJ.Info})})]},e)}))]})]}))}))},7310:function(e,n,i){"use strict";i.d(n,{c:function(){return T}});var s,r=i(8141),o=i(8061),a=i(3639),t=i(4097),c=i(1489),l=i(1411),d=i(9409),m=i(6483),u=i(7323),p=i(5516),f=i(4741),g=i(3560),h=((s={})[p.f.info]="Info",s[p.f.warning]="Info",s[p.f.error]="ErrorBadge",s[p.f.blocked]="Blocked2",s[p.f.severeWarning]="Warning",s[p.f.success]="Completed",s),x=(0,t.y)(),v=function(e){switch(e){case p.f.blocked:case p.f.error:case p.f.severeWarning:return"assertive"}return"polite"},b=function(e){switch(e){case p.f.blocked:case p.f.error:case p.f.severeWarning:return"alert"}return"status"},w=a.forwardRef((function(e,n){var i=(0,f.k)(!1),s=i[0],r=i[1].toggle,t=(0,g.M)("MessageBar"),w=e.actions,j=e.className,B=e.children,S=e.overflowButtonAriaLabel,k=e.dismissIconProps,y=e.styles,L=e.theme,M=e.messageBarType,N=void 0===M?p.f.info:M,T=e.onDismiss,P=void 0===T?void 0:T,W=e.isMultiline,E=void 0===W||W,C=e.truncated,I=e.dismissButtonAriaLabel,_=e.messageBarIconProps,q=e.role,A=e.delayedRender,D=void 0===A||A,O=e.expandButtonProps,J=(0,c.pq)(e,c.iY,["className","role"]),H=x(y,{theme:L,messageBarType:N||p.f.info,onDismiss:void 0!==P,actions:void 0!==w,truncated:C,isMultiline:E,expandSingleLine:s,className:j}),R={iconName:s?"DoubleChevronUp":"DoubleChevronDown"},V=w||P?{"aria-describedby":t,role:"region"}:{},F=w?a.createElement("div",{className:H.actions},w):null,Z=P?a.createElement(m.h,{disabled:!1,className:H.dismissal,onClick:P,iconProps:k||{iconName:"Clear"},title:I,ariaLabel:I}):null;return a.createElement("div",(0,o.pi)({ref:n,className:H.root},V),a.createElement("div",{className:H.content},a.createElement("div",{className:H.iconContainer,"aria-hidden":!0},_?a.createElement(u.J,(0,o.pi)({},_,{className:(0,l.i)(H.icon,_.className)})):a.createElement(u.J,{iconName:h[N],className:H.icon})),a.createElement("div",{className:H.text,id:t,role:q||b(N),"aria-live":v(N)},a.createElement("span",(0,o.pi)({className:H.innerText},J),D?a.createElement(d.U,null,a.createElement("span",null,B)):a.createElement("span",null,B))),!E&&!F&&C&&a.createElement("div",{className:H.expandSingleLine},a.createElement(m.h,(0,o.pi)({disabled:!1,className:H.expand,onClick:r,iconProps:R,ariaLabel:S,"aria-expanded":s},O))),!E&&F,!E&&Z&&a.createElement("div",{className:H.dismissSingleLine},Z),E&&Z),E&&F)}));w.displayName="MessageBar";var j,B,S,k=i(2245),y={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},L=((j={})[p.f.error]="errorBackground",j[p.f.blocked]="errorBackground",j[p.f.success]="successBackground",j[p.f.warning]="warningBackground",j[p.f.severeWarning]="severeWarningBackground",j[p.f.info]="infoBackground",j),M=((B={})[p.f.error]="rgba(255, 0, 0, 0.3)",B[p.f.blocked]="rgba(255, 0, 0, 0.3)",B[p.f.success]="rgba(48, 241, 73, 0.3)",B[p.f.warning]="rgba(255, 254, 57, 0.3)",B[p.f.severeWarning]="rgba(255, 0, 0, 0.3)",B[p.f.info]="Window",B),N=((S={})[p.f.error]="errorIcon",S[p.f.blocked]="errorIcon",S[p.f.success]="successIcon",S[p.f.warning]="warningIcon",S[p.f.severeWarning]="severeWarningIcon",S[p.f.info]="infoIcon",S),T=(0,r.z)(w,(function(e){var n,i,s,r,a,t=e.theme,c=e.className,l=e.onDismiss,d=e.truncated,m=e.isMultiline,u=e.expandSingleLine,f=e.messageBarType,g=void 0===f?p.f.info:f,h=t.semanticColors,x=t.fonts,v=(0,k.sK)(0,k.mV),b=(0,k.Cn)(y,t),w={fontSize:k.ld.xSmall,height:10,lineHeight:"10px",color:h.messageText,selectors:(n={},n[k.qJ]=(0,o.pi)((0,o.pi)({},(0,k.xM)()),{color:"WindowText"}),n)},j=[(0,k.GL)(t,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":w,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[b.root,x.medium,g===p.f.error&&b.error,g===p.f.blocked&&b.blocked,g===p.f.severeWarning&&b.severeWarning,g===p.f.success&&b.success,g===p.f.warning&&b.warning,m?b.multiline:b.singleline,!m&&l&&b.dismissalSingleLine,!m&&d&&b.expandingSingleLine,{background:h[L[g]],color:h.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(i={".ms-Link":{color:h.messageLink,selectors:{":hover":{color:h.messageLinkHovered}}}},i[k.qJ]=(0,o.pi)((0,o.pi)({},(0,k.xM)()),{background:M[g],border:"1px solid WindowText",color:"WindowText"}),i)},m&&{flexDirection:"column"},c],content:[b.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[b.iconContainer,{fontSize:k.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:h[N[g]],selectors:(s={},s[k.qJ]=(0,o.pi)((0,o.pi)({},(0,k.xM)()),{color:"WindowText"}),s)},text:[b.text,(0,o.pi)((0,o.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},x.small),{selectors:(r={},r[k.qJ]=(0,o.pi)({},(0,k.xM)()),r)}),!l&&{marginRight:12}],innerText:[b.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!m&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!m&&!d&&{selectors:(a={},a[v]={overflow:"visible",whiteSpace:"pre-wrap"},a)},u&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:b.dismissSingleLine,expandSingleLine:b.expandSingleLine,dismissal:[b.dismissal,j],expand:[b.expand,j],actions:[m?b.actions:b.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},m&&{marginBottom:8},l&&!m&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},5516:function(e,n,i){"use strict";var s;i.d(n,{f:function(){return s}}),function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(s||(s={}))},9409:function(e,n,i){"use strict";i.d(n,{U:function(){return a}});var s=i(8061),r=i(3639),o=i(7406),a=function(e){function n(n){var i=e.call(this,n)||this;return i.state={isRendered:void 0===(0,o.J)()},i}return(0,s.ZT)(n,e),n.prototype.componentDidMount=function(){var e=this,n=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),n)},n.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},n.prototype.render=function(){return this.state.isRendered?r.Children.only(this.props.children):null},n.defaultProps={delay:0},n}(r.Component)}},function(e){e.O(0,[774,888,179],(function(){return n=798,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=device-info-24c4bb517e2c22ce.js.map