(this["webpackJsonpwuzzuf-task"]=this["webpackJsonpwuzzuf-task"]||[]).push([[0],{108:function(t,e,n){t.exports=n(160)},160:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"startLoading",(function(){return F})),n.d(r,"stoptLoading",(function(){return D})),n.d(r,"toggleDarkTheme",(function(){return I}));var c={};n.r(c);var a={};n.r(a),n.d(a,"state",(function(){return A})),n.d(a,"actions",(function(){return r})),n.d(a,"effects",(function(){return c}));var i={};n.r(i),n.d(i,"getCountries",(function(){return J})),n.d(i,"getCities",(function(){return N})),n.d(i,"getAreas",(function(){return P})),n.d(i,"resetCities",(function(){return M}));var o={};n.r(o),n.d(o,"getCountries",(function(){return W})),n.d(o,"getCities",(function(){return R})),n.d(o,"getAreas",(function(){return _}));var u={};n.r(u),n.d(u,"state",(function(){return z})),n.d(u,"actions",(function(){return i})),n.d(u,"effects",(function(){return o}));var s=n(0),l=n.n(s),d=n(28),f=n.n(d),b=(n(112),n(45)),h=n(62),p=n(1);function y(t){return Object(p.c)("html{height:100%;}body{height:100%;color:",t.colors.text,";background:",t.colors.backgroundLight,";}#root{height:100%;}a,h1,h2,h3,h4,h5,h6{color:inherit;}")}var O=n(9);var v={name:"end3fb",styles:"height:calc(100% - 50px);display:flex;align-items:center;justify-content:center;"},j=n(46),g=n(39),m=n(57),x=(n(78),n(37)),C=n(35),w=n(106),k=n(41),L="http://46.101.108.59/api",S="is_dark",A={isLoading:!1,isDarkTheme:JSON.parse(window.localStorage.getItem(S)||"false")},F=function(t){t.state.app.isLoading=!0},D=function(t){t.state.app.isLoading=!1},I=function(t){var e=t.state,n=!e.app.isDarkTheme;e.app.isDarkTheme=n,window.localStorage.setItem(S,JSON.stringify(n))},z={countries:{},cities:{},areas:{}},E=n(18),T=n.n(E),B=n(42),J=function(){var t=Object(B.a)(T.a.mark((function t(e){var n,r,c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=e.effects,t.next=3,r.location.getCountries();case 3:c=t.sent,n.location.countries=c;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(B.a)(T.a.mark((function t(e,n){var r,c,a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state,c=e.effects,t.next=3,c.location.getCities(n);case 3:a=t.sent,r.location.cities=a;case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),P=function(){var t=Object(B.a)(T.a.mark((function t(e,n){var r,c,a,i,o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state,c=e.effects,a=n.countryId,i=n.cityId,t.next=4,c.location.getAreas({countryId:a,cityId:i});case 4:o=t.sent,r.location.areas=o;case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),M=function(t){t.state.location.cities={}};function W(){return H.apply(this,arguments)}function H(){return(H=Object(B.a)(T.a.mark((function t(){var e,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(L,"/countries"));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.data.reduce((function(t,e){return t[e.id]=e,t}),{}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t){return Z.apply(this,arguments)}function Z(){return(Z=Object(B.a)(T.a.mark((function t(e){var n,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(L,"/country/").concat(e,"/city"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.data.reduce((function(t,e){return t[e.id]=e,t}),{}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return q.apply(this,arguments)}function q(){return(q=Object(B.a)(T.a.mark((function t(e){var n,r,c,a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.countryId,r=e.cityId,t.next=3,fetch("".concat(L,"/country/").concat(n,"/city/").concat(r,"/area"));case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,t.abrupt("return",a.data.reduce((function(t,e){return t[e.id]=e,t}),{}));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var G=Object(w.a)({app:a,location:u}),K=(Object(k.d)(),Object(k.f)()),Q=Object(k.b)(),U=(Object(k.c)(),Object(k.e)(),function(t){var e=t.overmind;return function(t){var n=t.children;return Object(p.d)(k.a,{value:e},n)}}({overmind:Object(C.c)(G,{devtools:!1})}));var V={name:"8ive2e",styles:"width:300px;.ant-select-selector{background-color:#f5f5f5 !important;}"};function X(){return Object(p.d)("div",{style:{textAlign:"center",padding:"10px"}},"No Options")}n(116);var Y=n(107);function $(){return Object(p.d)("div",{style:{textAlign:"center",padding:"10px"}},Object(p.d)(Y.a,null))}function tt(t,e){var n=Object(s.useState)(t),r=Object(j.a)(n,2),c=r[0],a=r[1];function i(){a(t)}return Object(s.useEffect)((function(){a(t)}),[t]),{filterFn:function(n){if(n){var r={};Object.entries(t).forEach((function(t){var c=Object(j.a)(t,2),a=c[0],i=c[1];-1!==e(i).toLowerCase().indexOf(n.toLowerCase())&&(r[a]=i)})),a(r)}else i()},resetFilterFn:i,filteredData:c}}var et=x.a.Option;function nt(t){var e=t.selectedArea,n=t.isLoadingAreas,r=t.dispatch,c=Object(m.a)(t,["selectedArea","isLoadingAreas","dispatch"]),a=K(),i=tt(a.location.areas,(function(t){return t.attributes.name})),o=i.filteredData,u=i.filterFn,s=i.resetFilterFn;var l=Object.values(o).map((function(t){return Object(p.d)(et,{key:t.id,value:t.id},t.attributes.name)}));return Object(p.d)(x.a,Object(g.a)({showSearch:!0,filterOption:!1,size:"large",css:V,placeholder:"Select City",onChange:function(t){var e=a.location.areas[t];r({type:"select-area",area:e})},onSearch:u,onSelect:s,value:null===e||void 0===e?void 0:e.id,notFoundContent:n?Object(p.d)($,null):Object(p.d)(X,null)},c),l)}var rt=x.a.Option;function ct(t){var e=t.dispatch,n=t.selectedCity,r=t.isLoadingCities,c=Object(m.a)(t,["dispatch","selectedCity","isLoadingCities"]),a=K(),i=tt(a.location.cities,(function(t){return t.attributes.name})),o=i.filteredData,u=i.filterFn,s=i.resetFilterFn;var l=Object.values(o).map((function(t){return Object(p.d)(rt,{key:t.id,value:t.id},t.attributes.name)}));return Object(p.d)(x.a,Object(g.a)({showSearch:!0,filterOption:!1,size:"large",css:V,placeholder:"Select City",onChange:function(t){var n=a.location.cities[t];e({type:"select-city",city:n}),e({type:"reset-area"})},onSearch:u,onSelect:function(){s()},onBlur:function(){e({type:"touched",field:"city",value:!0})},value:null===n||void 0===n?void 0:n.id,notFoundContent:r?Object(p.d)($,null):Object(p.d)(X,null)},c),l)}var at=x.a.Option;function it(t){var e=t.dispatch,n=t.isLoadingCountries,r=t.selectedCountry,c=Object(m.a)(t,["dispatch","isLoadingCountries","selectedCountry"]),a=K(),i=Q(),o=tt(a.location.countries,(function(t){return t.attributes.name})),u=o.filteredData,s=o.filterFn,l=o.resetFilterFn;var d=Object.values(u).map((function(t){return Object(p.d)(at,{key:t.id,value:t.id},t.attributes.name)}));return Object(p.d)(x.a,Object(g.a)({showSearch:!0,filterOption:!1,size:"large",css:V,value:null===r||void 0===r?void 0:r.id,onChange:function(t){var n=a.location.countries[t];e({type:"reset-city"}),e({type:"select-country",country:n}),i.location.resetCities()},onSearch:s,onSelect:l,onBlur:function(){e({type:"touched",field:"country",value:!0})},notFoundContent:n?Object(p.d)($,null):Object(p.d)(X,null),placeholder:"Select Country"},c),d)}var ot,ut,st=n(103);!function(t){t.country="country",t.city="city"}(ot||(ot={})),function(t){t.country="Please select a country",t.city="Please select a city"}(ut||(ut={}));var lt={isLoadingCountries:!1,isLoadingCities:!1,isLoadingAreas:!1,touched:{country:!1,city:!1},fields:{country:null,city:null,area:null}};function dt(t,e){var n=Object(st.a)({},t);switch(e.type){case"loading-countries":n.isLoadingCountries=e.value;break;case"loading-cities":n.isLoadingCities=e.value;break;case"loading-areas":n.isLoadingAreas=e.value;break;case"select-country":n.fields.country=e.country;break;case"select-city":n.fields.city=e.city;break;case"select-area":n.fields.area=e.area;break;case"reset-city":n.fields.city=null;break;case"reset-area":n.fields.area=null;break;case"touched":n.touched[e.field]=e.value}return n}function ft(){var t,e,n=Object(s.useReducer)(dt,lt),r=Object(j.a)(n,2),c=r[0],a=r[1],i=Q(),o=function(t){var e;return t.country&&t.city&&["egypt"].includes((null===(e=t.country)||void 0===e?void 0:e.attributes.name.toLowerCase())||"")}(c.fields),u=function(t,e){var n={};return Object.getOwnPropertyNames(e).forEach((function(r){var c=e[r];t[r]&&!c&&(n[ot[r]]=ut[r])})),n}(c.touched,c.fields);return Object(s.useEffect)((function(){a({type:"loading-countries",value:!0}),i.location.getCountries().finally((function(){a({type:"loading-countries",value:!1})}))}),[i.location]),Object(s.useEffect)((function(){c.fields.country&&(a({type:"loading-cities",value:!0}),i.location.getCities(c.fields.country.id).finally((function(){a({type:"loading-cities",value:!1})})))}),[c.fields.country,i.location]),Object(s.useEffect)((function(){o&&(a({type:"loading-areas",value:!0}),i.location.getAreas({countryId:c.fields.country.id,cityId:c.fields.city.id}).finally((function(){a({type:"loading-areas",value:!1})})))}),[c.fields.country,c.fields.city,o,i.location]),Object(p.d)("div",null,Object(p.d)("h3",null,"Country"),Object(p.d)(it,{dispatch:a,selectedCountry:c.fields.country,isLoadingCountries:c.isLoadingCountries}),(null===(t=u.country)||void 0===t?void 0:t.length)>0&&Object(p.d)("div",{style:{color:"red"}},u.country),Object(p.d)("br",null),Object(p.d)("br",null),Object(p.d)("h3",null,"City"),Object(p.d)(ct,{dispatch:a,selectedCity:c.fields.city,isLoadingCities:c.isLoadingCities,name:"country"}),(null===(e=u.city)||void 0===e?void 0:e.length)>0&&Object(p.d)("div",{style:{color:"red"}},u.city),Object(p.d)("br",null),Object(p.d)("br",null),o&&Object(p.d)(l.a.Fragment,null,Object(p.d)("h3",null,"Area"),Object(p.d)(nt,{dispatch:a,selectedArea:c.fields.area,isLoadingAreas:c.isLoadingAreas})))}function bt(){return Object(p.d)("div",{css:v},Object(p.d)(ft,null))}var ht={name:"end3fb",styles:"height:calc(100% - 50px);display:flex;align-items:center;justify-content:center;"};function pt(){return Object(p.d)("div",{css:ht},Object(p.d)("h1",null,"Welcome."))}var yt=function(){return Object(p.d)(O.c,null,Object(p.d)(O.a,{path:"/home",component:bt}),Object(p.d)(O.a,{exact:!0,path:"/",component:pt}))};var Ot={name:"6lvbpb",styles:"display:flex;font-size:19px;"},vt=n(104),jt=n(105);function gt(t){return Object(p.d)("svg",Object(g.a)({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},t),Object(p.d)("rect",{width:"2",height:"2",x:"9",y:"2"}),Object(p.d)("rect",{width:"2",height:"2",x:"13.88",y:"4.051",transform:"rotate(45.02 14.88 5.051)"}),Object(p.d)("rect",{width:"2",height:"2",x:"16",y:"9"}),Object(p.d)("rect",{width:"2",height:"2",x:"13.949",y:"14.019",transform:"rotate(-135.02 14.95 15.019)"}),Object(p.d)("rect",{width:"2",height:"2",x:"9",y:"16"}),Object(p.d)("rect",{width:"2",height:"2",x:"3.98",y:"13.949",transform:"rotate(-134.98 4.98 14.95)"}),Object(p.d)("rect",{width:"2",height:"2",x:"2",y:"9"}),Object(p.d)("rect",{width:"2",height:"2",x:"4.05",y:"4.121",transform:"rotate(44.98 5.05 5.12)"}),Object(p.d)("path",{d:"M10,6 C7.8,6 6,7.8 6,10 C6,12.2 7.8,14 10,14 C12.2,14 14,12.2 14,10 C14,7.8 12.2,6 10,6 Z"}))}function mt(){var t=Q(),e=K();return Object(p.d)("nav",{css:function(t){return function(t){return Object(p.c)("display:flex;justify-content:center;height:50px;background:",t.colors.background,";box-shadow:",t.colors.shadow,";& > *{margin:auto 15px;}")}(t)}},Object(p.d)(b.b,{to:"/"},"Welcome"),Object(p.d)(b.b,{to:"/home"},"Home"),Object(p.d)(b.b,{to:"#",onClick:t.app.toggleDarkTheme},e.app.isDarkTheme?Object(p.d)(gt,{css:Ot}):Object(p.d)(vt.a,{icon:jt.a,css:Ot})))}var xt={colors:{text:"#f0f2f5",background:"#242526",backgroundLight:"#333333",shadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)"}},Ct={colors:{text:"#242526",background:"#fff",backgroundLight:"#f0f2f5",shadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)"}};f.a.render(Object(p.d)(l.a.StrictMode,null,Object(p.d)(U,null,Object(p.d)((function(t){var e=t.children,n=K();return Object(p.d)(h.a,{theme:n.app.isDarkTheme?xt:Ct},e)}),null,Object(p.d)((function(){var t=Object(h.b)();return Object(p.d)(b.a,null,Object(p.d)(p.a,{styles:y(t)}),Object(p.d)(mt,null),Object(p.d)(yt,null))}),null)))),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.1d18eeb6.chunk.js.map