(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(8),i=c.n(n),s=(c(14),c(5)),o=c(2),d=c(9),j=c.n(d),l=c(0);var u=function(e){var t=e.score,c=e.highestScore;return e.resetGame,Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Memory Game"}),Object(l.jsx)("p",{children:"Click on a colour, but make sure not to click the same colour twice!"}),Object(l.jsxs)("h3",{className:j.a.scoreboard,children:["Current score: ",t," | Highest score: ",c]})]})},b=c(7),p=c.n(b);var m=function(e){var t=e.card,c=t.src,r=t.title,a=e.gameHandler;return Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:p.a.button,onClick:a.bind(this,r),children:Object(l.jsxs)("figure",{children:[Object(l.jsx)("img",{src:c,alt:r}),Object(l.jsx)("figcaption",{className:p.a.caption,children:r})]})})})},f=c.p+"static/media/blue-card.f8167691.jpg",g=c.p+"static/media/darkblue-card.73e7036d.jpg",h=c.p+"static/media/limegreen-card.0a4cc3f0.jpg",O=c.p+"static/media/magenta-card.dcc6b3fe.jpg",x=c.p+"static/media/orange-card.36a8fd05.jpg",v=c.p+"static/media/pink-card.2f669916.jpg",k=c.p+"static/media/purple-card.e9ff4499.jpg",S=c.p+"static/media/red-card.4f6ac44a.jpg",_=c.p+"static/media/seagreen-card.9bf67421.jpg",C=c.p+"static/media/yellow-card.7687c9c7.jpg";var H=function(e){var t=e.gameHandler,c=e.score,a=e.highestScore,n=[{src:f,title:"Blue"},{src:g,title:"Dark Blue"},{src:h,title:"Lime Green"},{src:O,title:"Magenta"},{src:x,title:"Orange"},{src:v,title:"Pink"},{src:k,title:"Purple"},{src:S,title:"Red"},{src:_,title:"Sea Green"},{src:C,title:"Yellow"}],i=Object(r.useState)(n),d=Object(o.a)(i,2),j=d[0],u=d[1];return Object(r.useEffect)((function(){var e=Object(s.a)(j);!function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*t),r=[e[t],e[c]];e[c]=r[0],e[t]=r[1]}}(e),u(e)}),[c,a]),Object(l.jsx)("div",{children:j.map((function(e){return Object(l.jsx)(m,{card:e,gameHandler:t},e.title)}))})};var w=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(0),i=Object(o.a)(n,2),d=i[0],j=i[1],b=Object(r.useState)([]),p=Object(o.a)(b,2),m=p[0],f=p[1],g=function(){a(0),f([])};return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{score:c,highestScore:d,resetGame:g}),Object(l.jsx)(H,{gameHandler:function(e){m.includes(e)?(j(c),g()):(!function(e){f((function(t){return[].concat(Object(s.a)(t),[e])}))}(e),a((function(e){return e+1})))},score:c,highestScore:d})]})};var y=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(w,{})})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))},7:function(e,t,c){e.exports={caption:"Cards_caption__3LQC2",button:"Cards_button__Co2vn"}},9:function(e,t,c){e.exports={scoreboard:"Header_scoreboard__15xQe"}}},[[16,1,2]]]);
//# sourceMappingURL=main.693a624e.chunk.js.map