(this["webpackJsonpreact-image-timeline"]=this["webpackJsonpreact-image-timeline"]||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a.p+"static/media/berlin.ce25fae9.jpg"},function(e,t,a){e.exports=a.p+"static/media/chicago.4ce82aac.jpg"},function(e,t,a){e.exports=a.p+"static/media/cairo.93047add.jpg"},function(e,t,a){e.exports=a.p+"static/media/london.45d6bed0.jpg"},function(e,t,a){e.exports=a.p+"static/media/ny.0ffaa772.jpg"},function(e,t,a){e.exports=a.p+"static/media/paris.ce64ef1a.jpg"},function(e,t,a){e.exports=a.p+"static/media/rome.07bf5618.jpg"},function(e,t,a){e.exports=a.p+"static/media/seoul.3226472f.jpg"},function(e,t,a){e.exports=a.p+"static/media/tokyo.db715524.jpg"},function(e,t,a){e.exports=a.p+"static/media/madrid.a2269ec3.jpg"},function(e,t,a){e.exports=a.p+"static/media/berlin_normalized.ce25fae9.jpg"},function(e,t,a){e.exports=a.p+"static/media/chicago_normalized.f5446e67.jpg"},function(e,t,a){e.exports=a.p+"static/media/cairo_normalized.93047add.jpg"},function(e,t,a){e.exports=a.p+"static/media/london_normalized.0cfbfe06.jpg"},function(e,t,a){e.exports=a.p+"static/media/ny_normalized.a9ffc6ad.jpg"},function(e,t,a){e.exports=a.p+"static/media/paris_normalized.c057153f.jpg"},function(e,t,a){e.exports=a.p+"static/media/rome_normalized.3d9141e8.jpg"},function(e,t,a){e.exports=a.p+"static/media/seoul_normalized.f800e061.jpg"},function(e,t,a){e.exports=a.p+"static/media/tokyo_normalized.db715524.jpg"},function(e,t,a){e.exports=a.p+"static/media/madrid_normalized.96ea0252.jpg"},function(e,t,a){e.exports=a.p+"static/media/berlin_odd.c90236bf.jpg"},function(e,t,a){e.exports=a.p+"static/media/chicago_odd.4ce82aac.jpg"},function(e,t,a){e.exports=a.p+"static/media/cairo_odd.93047add.jpg"},function(e,t,a){e.exports=a.p+"static/media/london_odd.45d6bed0.jpg"},function(e,t,a){e.exports=a.p+"static/media/ny_odd.662443e8.jpg"},function(e,t,a){e.exports=a.p+"static/media/paris_odd.6e14d373.jpg"},function(e,t,a){e.exports=a.p+"static/media/rome_odd.07bf5618.jpg"},function(e,t,a){e.exports=a.p+"static/media/seoul_odd.15b4bf52.jpg"},function(e,t,a){e.exports=a.p+"static/media/tokyo_odd.4827fb38.jpg"},function(e,t,a){e.exports=a.p+"static/media/madrid_odd.c07bc0c0.jpg"},function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),c=a.n(r),o=(a(53),a(11)),l=(a(54),a(55),function(e){return Array.isArray(e)&&e.length>0}),m=function(e){return l(e)?e[e.length-1]:{}},u=function(e){return e&&e instanceof Date&&!isNaN(e.getTime())},s=function(e){return u(e)?String(e.getFullYear()):"-"},d=i.a.memo((function(e){return i.a.createElement("svg",{className:"rt-dot",viewBox:"0 0 8 10"},i.a.createElement("circle",{cx:"4",cy:"5",r:"3",stroke:"none"}))})),p=i.a.memo((function(e){return i.a.createElement("svg",{className:"rt-arrow",viewBox:"0 0 6 8"},i.a.createElement("g",null,i.a.createElement("path",{d:"M 0 0 L 6 4 L 0 8 L 0 0"})))})),g=i.a.memo((function(e){return i.a.createElement("div",{className:"rt-label"},s(e.event.date))})),f=i.a.memo((function(e){return i.a.createElement("div",{className:"rt-label"},s(e.event.date))})),v=i.a.memo((function(e){return i.a.createElement("div",null,i.a.createElement("h2",{className:"rt-title"},e.event.title),i.a.createElement("p",{className:"rt-date"},function(e){if(!u(e))return"-";var t=String(e.getDate()),a=String(e.getMonth()+1),n=String(e.getFullYear());return"".concat(a.length>1?a:"0"+a,"/").concat(t.length>1?t:"0"+t,"/").concat(n)}(e.event.date)))})),E=i.a.memo((function(e){return i.a.createElement("button",{className:"rt-btn",onClick:function(t){t.preventDefault(),(e.event.onClick||function(e){return e})(t)}},e.event.buttonText||"")})),b=i.a.memo((function(e){return i.a.createElement("div",null,i.a.createElement("p",null,e.event.text))})),x=i.a.memo((function(e){return i.a.createElement("div",null,i.a.createElement("img",{src:e.event.imageUrl,className:"rt-image",alt:""}))})),h=i.a.memo((function(e){return i.a.createElement("div",{className:"rt-svg-container"},i.a.createElement(p,null),i.a.createElement(d,null))})),j=i.a.memo((function(e){return i.a.createElement("li",{key:"clear",className:"rt-clear"})})),y=i.a.memo((function(e){var t=e.events,a=e.customComponents,n=e.reverseOrder,r=e.denseLayout,c=t.slice(0).filter((function(e){var t=e.date;return u(t)})).sort((function(e,t){return n?new Date(t.date).getTime()-new Date(e.date).getTime():new Date(e.date).getTime()-new Date(t.date).getTime()}));if(!c.length)return i.a.createElement("div",null);var o,s=a||{},d=s.topLabel,p=s.bottomLabel,y=s.header,N=s.footer,k=s.imageBody,w=s.textBody,_=d||g,C=p||f,O=y||v,S=k||x,q=w||b,D=N||E,L=r?{minHeight:"auto"}:{},z=i.a.createElement("div",{className:"rt-timeline-container"},i.a.createElement("ul",{className:"rt-timeline"},i.a.createElement("li",{key:"top",className:"rt-label-container"},i.a.createElement(_,{event:(o=c,l(o)?o[0]:{})})),c.map((function(e,t){return i.a.createElement("li",{className:"rt-event",key:t,style:L},i.a.createElement("div",{className:"rt-backing"},i.a.createElement(h,null),i.a.createElement("div",null,i.a.createElement("div",{className:"rt-header-container"},i.a.createElement(O,{event:e})),i.a.createElement("div",{className:"rt-image-container"},i.a.createElement(S,{event:e})),i.a.createElement("div",{className:"rt-text-container"},i.a.createElement(q,{event:e})),i.a.createElement("div",{className:"rt-footer-container"},i.a.createElement(D,{event:e})))))})),i.a.createElement(j,null),i.a.createElement("li",{key:"bottom",className:"rt-label-container"},i.a.createElement(C,{event:m(c)}))));return i.a.createElement("div",null,z)})),N=a(58),k=a(64),w=a(63),_=a(62),C=a(61),O=a(65),S=a(60),q=a(59),D=a(18),L=a.n(D),z=a(19),B=a.n(z),T=a(20),M=a.n(T),I=a(21),P=a.n(I),U=a(22),A=a.n(U),F=a(23),R=a.n(F),Y=a(24),J=a.n(Y),H=a(25),W=a.n(H),G=a(26),K=a.n(G),Q=a(27),$=a.n(Q),V=a(28),X=a.n(V),Z=a(29),ee=a.n(Z),te=a(30),ae=a.n(te),ne=a(31),ie=a.n(ne),re=a(32),ce=a.n(re),oe=a(33),le=a.n(oe),me=a(34),ue=a.n(me),se=a(35),de=a.n(se),pe=a(36),ge=a.n(pe),fe=a(37),ve=a.n(fe),Ee=a(38),be=a.n(Ee),xe=a(39),he=a.n(xe),je=a(40),ye=a.n(je),Ne=a(41),ke=a.n(Ne),we=a(42),_e=a.n(we),Ce=a(43),Oe=a.n(Ce),Se=a(44),qe=a.n(Se),De=a(45),Le=a.n(De),ze=a(46),Be=a.n(ze),Te=a(47),Me=a.n(Te),Ie=[L.a,B.a,M.a,P.a,A.a,R.a,J.a,W.a,$.a,K.a],Pe=[be.a,he.a,ye.a,ke.a,_e.a,Oe.a,qe.a,Le.a,Me.a,Be.a],Ue=[X.a,ee.a,ae.a,ie.a,ce.a,le.a,ue.a,de.a,ve.a,ge.a],Ae=["Berlin, Germany","Chicago, Illinois","Cairo, Egypt","London, England","New York, New York","Paris, France","Rome, Italy","Seoul, South Korea","Madrid, Spain","Tokyo, Japan"],Fe="Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque\nlacus tortor, maximus eget tincidunt non, luctus scelerisque odio. Suspendisse potenti. Etiam vel augue blandit, auctor\nsem sit amet, imperdiet dolor. Ut a quam laoreet, feugiat orci sed, feugiat nulla. Nulla gravida nisi eu ex egestas\ndapibus.";function Re(e,t){var a=new Date(e);return a.setDate(a.getDate()+t),a}function Ye(e){var t=function(e){var t=Ie;return"normalized"===e?t=Ue:"odd"===e&&(t=Pe),N.a((function(e,t){return{title:e,imageUrl:t}}),Ae,t)}(e);return _.a(C.a)((function(e,t){return O.a({date:Re(new Date("2013-12-08"),8*t),text:k.a(0,Math.random()*(w.a(Fe)-50)+50,Fe),buttonText:"Read More",onClick:function(){var t=S.a(q.a(", ",e.title));window.open("https://wikipedia.org/wiki/".concat(t))},extras:{foo:"#Travel"}},e)}),t)}var Je=function(e){return i.a.createElement("div",{className:"custom-top-label"},i.a.createElement("p",null,"Top Label"))},He=function(e){return i.a.createElement("div",{className:"custom-bottom-label"},i.a.createElement("p",null,"Bottom Label"))},We=function(e){return i.a.createElement("div",{className:"custom-header"},i.a.createElement("h3",null,"Header"))},Ge=function(e){return i.a.createElement("div",{className:"custom-footer"},i.a.createElement("h3",null,"Footer"))},Ke=function(e){return i.a.createElement("div",{className:"custom-text-body"},i.a.createElement("h3",null,"Text Body"))},Qe=function(e){var t=e.event.imageUrl;return i.a.createElement("div",{className:"custom-image-body"},i.a.createElement("h3",{className:"image-body-label"},"Image Body"),i.a.createElement("img",{src:t,alt:"",className:"rt-image"}))},$e=i.a.memo((function(e,t){var a=Object(n.useState)("normal"),r=Object(o.a)(a,2),c=r[0],l=r[1],m=Object(n.useState)(Ye(c)),u=Object(o.a)(m,2),s=u[0],d=u[1],p=Object(n.useState)(!1),g=Object(o.a)(p,2),f=g[0],v=g[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),x=b[0],h=b[1],j=Object(n.useState)(!1),N=Object(o.a)(j,2),k=N[0],w=N[1],_=Object(n.useCallback)((function(){return h(!x)}),[x]),C=Object(n.useCallback)((function(){return w(!k)}),[k]),O=Object(n.useCallback)((function(){return v(!f)}),[f]),S=Object(n.useCallback)((function(){var e="normal"===c?"odd":"normal";l(e),d(Ye(e))}),[c]),q=f?{topLabel:Je,bottomLabel:He,header:We,imageBody:Qe,textBody:Ke,footer:Ge}:null;return i.a.createElement("div",null,i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("h1",null,"React Image Timeline"),i.a.createElement("h4",null,"resize window to see mobile layout")),i.a.createElement("div",{className:"config-container"},i.a.createElement("div",{className:"toggle-container"},i.a.createElement("div",null,i.a.createElement("input",{type:"checkbox",onChange:O,checked:f}),i.a.createElement("strong",null,"Use Custom Components")),i.a.createElement("div",null,i.a.createElement("input",{type:"checkbox",onChange:_,checked:x}),i.a.createElement("strong",null,"Reverse Order")),i.a.createElement("div",null,i.a.createElement("input",{type:"checkbox",onChange:S,checked:"normal"!==c}),i.a.createElement("strong",null,"Non-unform Images")),i.a.createElement("div",null,i.a.createElement("input",{type:"checkbox",onChange:C,checked:k}),i.a.createElement("strong",null,"Dense Layout")))),i.a.createElement("hr",null),i.a.createElement(y,{events:s,customComponents:q,reverseOrder:x,denseLayout:k}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement($e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[48,1,2]]]);
//# sourceMappingURL=main.18f40a80.chunk.js.map