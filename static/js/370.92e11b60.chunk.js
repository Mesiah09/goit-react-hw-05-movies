"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[370],{3370:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(8683),a=t(5861),i=t(885),s=t(7757),c=t.n(s),l=t(2791),o=t(6871),u=t(4569),d=t.n(u),p="cast_img__l9fn6",f="cast_list__CqTJo",h=t(184);function m(){var e,n=(0,l.useState)({items:[],loading:!1,error:null}),t=(0,i.Z)(n,2),s=t[0],u=t[1],m=(0,o.UO)().id;(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!0})})),e.next=4,d().get("https://api.themoviedb.org/3/movie/".concat(m,"/credits?api_key=551128ca2d4756d2fb16af330a08b773&language=en-US"));case 4:n=e.sent,t=n.data,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{items:t.cast,loading:!1})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u((function(n){return(0,r.Z)((0,r.Z)({},n),{},{error:e.t0.message,loading:!1})}));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]);var g=s.items.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{className:p,src:null!==e&&void 0!==e&&e.profile_path?"https://image.tmdb.org/t/p/w500"+(null===e||void 0===e?void 0:e.profile_path):null,alt:""}),(0,h.jsx)("br",{}),(0,h.jsx)("span",{children:e.name}),(0,h.jsx)("br",{}),(0,h.jsxs)("span",{children:["Character: ",e.character,": "]})]},e.id)}));return(0,h.jsxs)("div",{children:[s.loading&&(0,h.jsx)("p",{children:"...loading"}),null!==(e=s.items)&&void 0!==e&&e.length?(0,h.jsx)("ul",{className:f,children:g}):!s.loading&&(0,h.jsx)("span",{children:"We don't have information about cast in this film "})]})}}}]);
//# sourceMappingURL=370.92e11b60.chunk.js.map