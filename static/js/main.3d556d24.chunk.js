/*! For license information please see main.3d556d24.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-notifications-example"]=this["webpackJsonpreact-notifications-example"]||[]).push([[0],{11:function(e,t,n){e.exports=n(35)},18:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(10),l=n.n(a),i=n(7),c=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){return e(t={exports:{}},t.exports),t.exports}var u="function"===typeof Symbol&&Symbol.for,f=u?Symbol.for("react.element"):60103,p=u?Symbol.for("react.portal"):60106,d=u?Symbol.for("react.fragment"):60107,h=u?Symbol.for("react.strict_mode"):60108,y=u?Symbol.for("react.profiler"):60114,b=u?Symbol.for("react.provider"):60109,E=u?Symbol.for("react.context"):60110,g=u?Symbol.for("react.async_mode"):60111,w=u?Symbol.for("react.concurrent_mode"):60111,v=u?Symbol.for("react.forward_ref"):60112,x=u?Symbol.for("react.suspense"):60113,C=u?Symbol.for("react.suspense_list"):60120,k=u?Symbol.for("react.memo"):60115,N=u?Symbol.for("react.lazy"):60116,O=u?Symbol.for("react.block"):60121,S=u?Symbol.for("react.fundamental"):60117,j=u?Symbol.for("react.responder"):60118,R=u?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case f:switch(e=e.type){case g:case w:case d:case y:case h:case x:return e;default:switch(e=e&&e.$$typeof){case E:case v:case N:case k:case b:return e;default:return t}}case p:return t}}}function T(e){return _(e)===w}var $={AsyncMode:g,ConcurrentMode:w,ContextConsumer:E,ContextProvider:b,Element:f,ForwardRef:v,Fragment:d,Lazy:N,Memo:k,Portal:p,Profiler:y,StrictMode:h,Suspense:x,isAsyncMode:function(e){return T(e)||_(e)===g},isConcurrentMode:T,isContextConsumer:function(e){return _(e)===E},isContextProvider:function(e){return _(e)===b},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===f},isForwardRef:function(e){return _(e)===v},isFragment:function(e){return _(e)===d},isLazy:function(e){return _(e)===N},isMemo:function(e){return _(e)===k},isPortal:function(e){return _(e)===p},isProfiler:function(e){return _(e)===y},isStrictMode:function(e){return _(e)===h},isSuspense:function(e){return _(e)===x},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===d||e===w||e===y||e===h||e===x||e===C||"object"===typeof e&&null!==e&&(e.$$typeof===N||e.$$typeof===k||e.$$typeof===b||e.$$typeof===E||e.$$typeof===v||e.$$typeof===S||e.$$typeof===j||e.$$typeof===R||e.$$typeof===O)},typeOf:_},P=(m((function(e,t){0})),m((function(e){e.exports=$})),Object.getOwnPropertySymbols),q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;function F(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}})()&&Object.assign;var M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function W(e,t,n,o,r){}W.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function L(){}function V(){}V.resetWarningCache=L;var B=m((function(e){e.exports=function(){function e(e,t,n,o,r,a){if(a!==M){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:V,resetWarningCache:L};return n.PropTypes=n,n}()})),I={error:"#c16a5d",info:"#49a0d9",success:"#7ebb9b",warning:"#df9852"},A={close:r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),info:r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"white"},r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})),error:r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"white"},r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})),success:r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"white"},r.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})),warning:r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"white"},r.a.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}))},J=["error","info","success","warning"],U={autoClose:!0,type:"info"},Z="_2e_4L",D="_18tB5",H="_1CZTZ",K="_2Vept",X="_5bXm4",Y="_3qw0K",G="_1VUxZ",Q="_tyOda",ee="_1OE1J",te=function(e){var t=e.message,n=re(),a=n.closeNotification,l=n.colors,i=n.icons,s=n.timeVisible,m=n.timeFading,u=Object(o.useState)(!1),f=u[0],p=u[1];Object(o.useEffect)((function(){if(t.autoClose){var e=setTimeout((function(){return p(!0)}),s),n=setTimeout((function(){return a(t)}),s+m);return function(){clearTimeout(e),clearTimeout(n)}}}),[a,t,s]);var d=Object(o.useCallback)((function(){p(!0);var e=setTimeout((function(){t.onClick&&"[object Function]"==={}.toString.call(t.onClick)&&t.onClick(),a(t)}),m);return function(){return clearTimeout(e)}}),[a,t,m]);return r.a.createElement("div",{className:c()(Z,l[t.type],f?Q:void 0),onClick:d},r.a.createElement("div",{className:K,style:{backgroundColor:l[t.type]}},i[t.type]),r.a.createElement("div",{className:c()(Y,t.autoClose?G:void 0),style:{backgroundColor:l[t.type]}}),r.a.createElement("div",{className:X,style:{color:l[t.type]}},t.text),r.a.createElement("div",{className:D,style:{color:l[t.type]}},r.a.createElement("small",{className:H},"CLOSE")," \xd7"))};te.propTypes={message:B.shape({type:B.oneOf(J).isRequired,id:B.oneOfType([B.number,B.string]).isRequired,text:B.string.isRequired,autoClose:B.bool.isRequired,onClick:B.func,onClose:B.func}).isRequired};var ne=function(e){var t=e.notifications;return r.a.createElement("div",{id:"notifications-tray",className:ee},t.map((function(e){return r.a.createElement(te,{key:e.id,message:e})})))};ne.propTypes={notifications:B.arrayOf(B.shape({type:B.oneOf(J).isRequired,id:B.oneOfType([B.number,B.string]).isRequired,text:B.string.isRequired})).isRequired};var oe=Object(o.createContext)({}),re=function(){return Object(o.useContext)(oe)},ae=function(e){var t=e.timeVisible,n=e.timeFading,a=e.children,l=Object(o.useState)([]),i=l[0],c=l[1],m=Object(o.useCallback)((function(e){e.onClose&&"[object Function]"==={}.toString.call(e.onClose)&&e.onClose(),c((function(t){return t.filter((function(t){return t.id!==e.id}))}))}),[]);return r.a.createElement(oe.Provider,{value:{addNotification:function(e){var t=s({},U,e,{id:Math.random().toString(36).substr(2,9)});c([].concat(i,[t]))},closeNotification:m,colors:I,icons:A,timeVisible:t,timeFading:n}},a,r.a.createElement(ne,{notifications:i}))};ae.propTypes={colors:B.shape({info:B.string.isRequired,error:B.string.isRequired,success:B.string.isRequired,warning:B.string.isRequired}).isRequired,timeVisible:B.number.isRequired},ae.defaultProps={colors:I,timeVisible:5e3,timeFading:250};n(18);var le=n(1),ie=function(){var e=re().addNotification;return r.a.createElement(o.Fragment,null,r.a.createElement("h2",null,"prop: message"),r.a.createElement("p",null,"the ",r.a.createElement("code",null,"message")," prop expects a message object, which has the following shape."),r.a.createElement("br",null),r.a.createElement("pre",null,"{\n  text: String,\n  type: 'error' | 'info' | 'success' | 'warning',\n  autoClose: boolean, // optional. default: true\n  onClick: function, // optional. default: null\n  onClose: function, // optional. default: null\n}"),r.a.createElement("br",null),r.a.createElement("h3",null,"message.text"),r.a.createElement("p",null,"the value of the ",r.a.createElement("code",null,"text")," property of the message object defines the text the show within the notification."),r.a.createElement("br",null),r.a.createElement(le.Container,{fluid:!0},r.a.createElement(le.Row,{className:"row",gutterWidth:64},r.a.createElement(le.Col,{sm:12,md:3,xl:2,className:"column description"},r.a.createElement("button",{onClick:function(){return e({text:"this is important stuff!"})}},"notify me!")),r.a.createElement(le.Col,{component:"pre",sm:12,md:9,xl:10,className:"column code"},"<button onClick={ () => addNotification({ text: 'this is important stuff!' }) }>notify me!</button>"))),r.a.createElement("h3",null,"message.type"),r.a.createElement("p",null,"the ",r.a.createElement("code",null,"type")," property of the message object determines the styling the notification receives. there are four notification types; ",r.a.createElement("strong",null,"info")," is the default."),r.a.createElement("br",null),r.a.createElement(le.Container,{fluid:!0},r.a.createElement(le.Row,{className:"row",gutterWidth:64},r.a.createElement(le.Col,{sm:12,md:3,xl:2,className:"column description"},r.a.createElement("h4",null,"error"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e({type:"error",text:"this indicates an error."})}},"notify me!"))),r.a.createElement(le.Col,{component:"pre",sm:12,md:9,xl:10,className:"column code"},"<button onClick={\n  () => addNotification({\n    type: 'error',\n    text: 'this indicates an error.',\n  })\n}>notify me!</button>")),r.a.createElement(le.Row,{className:"row",gutterWidth:64},r.a.createElement(le.Col,{sm:12,md:3,xl:2,className:"column description"},r.a.createElement("h4",null,"info"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e({type:"info",text:"this indicates information."})}},"notify me!"))),r.a.createElement(le.Col,{component:"pre",sm:12,md:9,xl:10,className:"column code"},"<button onClick={\n  () => addNotification({\n    type: 'info',\n    text: 'this indicates information.',\n  })\n}>notify me!</button>")),r.a.createElement(le.Row,{className:"row",gutterWidth:64},r.a.createElement(le.Col,{sm:12,md:3,xl:2,className:"column description"},r.a.createElement("h4",null,"success"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e({type:"success",text:"this indicates success."})}},"notify me!"))),r.a.createElement(le.Col,{component:"pre",sm:12,md:9,xl:10,className:"column code"},"<button onClick={\n  () => addNotification({\n    type: 'success',\n    text: 'this indicates success.',\n  })\n}>notify me!</button>")),r.a.createElement(le.Row,{className:"row",gutterWidth:64},r.a.createElement(le.Col,{sm:12,md:3,xl:2,className:"column description"},r.a.createElement("h4",null,"warning"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e({type:"warning",text:"this indicates a warning."})}},"notify me!"))),r.a.createElement(le.Col,{component:"pre",sm:12,md:9,xl:10,className:"column code"},"<button onClick={\n  () => addNotification({\n    type: 'warning',\n    text: 'this indicates a warning.',\n  })\n}>notify me!</button>"))),r.a.createElement("h3",null,"message.autoClose"),r.a.createElement("p",null,"the value of the ",r.a.createElement("code",null,"autoClose")," property of the message object determines whether the notification closes itself. the default value is ",r.a.createElement("code",null,"true"),"."),r.a.createElement("br",null),r.a.createElement(le.Container,{fluid:!0},r.a.createElement(le.Row,{className:"row",gutterWidth:64},r.a.createElement(le.Col,{sm:12,md:3,xl:2,className:"column description"},r.a.createElement("button",{onClick:function(){return e({type:"error",text:"this must be closed manually.",autoClose:!1})}},"notify me!")),r.a.createElement(le.Col,{component:"pre",sm:12,md:9,xl:10,className:"column code"},"<button onClick={\n  () => addNotification({\n    type: 'error',\n    text: 'this must be closed manually.',\n    autoClose: false,\n  })\n}>notify me!</button>"))),r.a.createElement("h3",null,"message.onClick && message.onClose"),r.a.createElement("p",null,"the ",r.a.createElement("code",null,"onClick")," property of the message object provides a callback that fires when the notification is clicked."),r.a.createElement("br",null),r.a.createElement(le.Container,{fluid:!0},r.a.createElement(le.Row,{className:"row",gutterWidth:64},r.a.createElement(le.Col,{sm:12,md:3,xl:2,className:"column description"},r.a.createElement("h4",null,"onClick"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e({type:"warning",text:"you will be alerted upon click.",onClick:function(){return alert("clicked!")}})}},"notify me!"))),r.a.createElement(le.Col,{component:"pre",sm:12,md:9,xl:10,className:"column code"},"<button onClick={\n  () => addNotification({\n    type: 'warning',\n    text: 'you will be alerted upon click.',\n    onClick: () => alert('clicked!'),\n  })\n}>notify me!</button>"))),r.a.createElement("p",null,"the ",r.a.createElement("code",null,"onClose")," property of the message object provides a callback that fires when the notification closes."),r.a.createElement("br",null),r.a.createElement(le.Container,{fluid:!0},r.a.createElement(le.Row,{className:"row",gutterWidth:64},r.a.createElement(le.Col,{sm:12,md:3,xl:2,className:"column description"},r.a.createElement("h4",null,"onClose"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e({type:"success",text:"you will be alerted upon closing.",onClose:function(){return alert("closed!")}})}},"notify me!"))),r.a.createElement(le.Col,{component:"pre",sm:12,md:9,xl:10,className:"column code"},"<button onClick={\n  () => addNotification({\n    type: 'success',\n    text: 'you will be alerted upon closing.',\n    onClose: () => alert('closed!'),\n  })\n}>notify me!</button>"))),r.a.createElement("br",null),r.a.createElement("br",null))},ce=function(e){e.children;return r.a.createElement(o.Fragment,null,r.a.createElement(ae,null,r.a.createElement("header",null,r.a.createElement("h1",null,"@mwatson/react-notifications"),r.a.createElement("span",{className:"header-links"},r.a.createElement("a",{href:"https://www.npmjs.com/package/react-notifications",rel:"noreferrer noopener",target:"_blank"},r.a.createElement("svg",{version:"1.1",viewBox:"0 0 540 210",x:"0px",y:"0px",width:"54px",height:"21px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m150 195v-15h-150v-180h540v180h-270v30h-120zm90-30v-15h60v-120h-120v150h60zm0-75v-30h30v60h-30zm-150 15v-45h30v90h30v-120h-120v120h60zm300 0v-45h30v90h30v-90h30v90h30v-120h-180v120h60z",fill:"#cb3837"}))),r.a.createElement("a",{href:"https://www.github.com/mbwatson/react-notifications",rel:"noreferrer noopener",target:"_blank"},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#334"},r.a.createElement("path",{d:"m11.999 0c-6.6266 0-11.999 5.5087-11.999 12.304 0 5.4361 3.4381 10.047 8.2069 11.675 0.60038 0.11263 0.81921-0.26737 0.81921-0.59365 0-0.29156-0.010431-1.0658-0.016706-2.0922-3.3379 0.74325-4.0422-1.6496-4.0422-1.6496-0.54588-1.4208-1.3327-1.7992-1.3327-1.7992-1.0896-0.76362 0.082492-0.7485 0.082492-0.7485 1.2045 0.08761 1.838 1.2682 1.838 1.2682 1.0704 1.88 2.809 1.3369 3.4926 1.0227 0.10901-0.79533 0.41843-1.3377 0.76176-1.6451-2.6646-0.31042-5.4663-1.3664-5.4663-6.0809 0-1.343 0.46779-2.4412 1.2354-3.3015-0.12383-0.31121-0.53556-1.562 0.11715-3.2562 0 0 1.0078-0.33082 3.3003 1.2614 0.95697-0.27266 1.9839-0.40936 3.0042-0.4139 1.0188 0.00416 2.0458 0.14132 3.0042 0.4139 2.2911-1.5922 3.2967-1.2614 3.2967-1.2614 0.65492 1.6942 0.24309 2.945 0.11924 3.2562 0.7691 0.8603 1.2339 1.9585 1.2339 3.3015 0 4.7267-2.806 5.7668-5.4795 6.0711 0.43094 0.37992 0.81479 1.1307 0.81479 2.2788 0 1.6443-0.01463 2.9714-0.01463 3.3747 0 0.32931 0.21584 0.71226 0.82511 0.59218 4.7648-1.6307 8.2001-6.2389 8.2001-11.673 0-6.7956-5.3733-12.304-12.001-12.304"}))))),r.a.createElement("main",null,r.a.createElement(ie,null)),r.a.createElement("footer",null,":)")))};n(34);l.a.render(r.a.createElement(ce,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.3d556d24.chunk.js.map