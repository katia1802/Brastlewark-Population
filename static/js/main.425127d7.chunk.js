(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(20),a(2)),i=a(3),s=a(6),m=a(4),u=a(5),h=a(11),p=(a(21),a(22),a(8)),f=a(7),d=a(9);p.b.add(d.a);var g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.professions,a=e.friends;return r.a.createElement("div",{className:"gnome__lists"},r.a.createElement("div",null,r.a.createElement("h3",{className:"gnome__list-professionstitle"},"Professions"),r.a.createElement("ul",{className:"gnome__list-professions"},0!==t.length?t.map(function(e,t){return r.a.createElement("li",{key:t},e)}):r.a.createElement("div",null,r.a.createElement("p",null,"No friends found"),r.a.createElement(f.a,{icon:"frown"})))),r.a.createElement("div",null,r.a.createElement("h3",{className:"gnome__list-friendstitle"},"Friends"),r.a.createElement("ul",{className:"gnome__list-friends"},0!==a.length?a.map(function(e,t){return r.a.createElement("li",{key:t},e)}):r.a.createElement(f.a,{icon:"frown"}))))}}]),t}(n.Component),E=a(12),v=a.n(E);a(28);p.b.add(d.d,d.e,d.b,d.c);var b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.image,n=e.professions,c=e.friends,l=e.age,o=e.height,i=e.weight,s=e.hair_color,m=v()(o),u=v()(i);return r.a.createElement("div",{className:"gnome__card"},r.a.createElement("div",{className:"gnome__image-wrapper"},r.a.createElement("img",{className:"gnome__image",src:a,alt:t})),r.a.createElement("div",{className:"gnome__text"},r.a.createElement("h2",{className:"gnome__name"},t),r.a.createElement("div",{className:"gnome__details"},r.a.createElement("p",null,r.a.createElement(f.a,{icon:"heartbeat"})," ",l),r.a.createElement("p",null,r.a.createElement(f.a,{icon:"ruler"})," ",m,"cm"),r.a.createElement("p",null,r.a.createElement(f.a,{icon:"weight"})," ",u,"kg"),r.a.createElement("p",null,r.a.createElement(f.a,{icon:"palette"})," ",s)),r.a.createElement(g,{professions:n,friends:c})))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.gnomesResults;return 0===e.length?r.a.createElement("div",{className:"gnome__notfound"},r.a.createElement("p",{className:"gnome__notfound-text"},"No gnome found"),r.a.createElement("img",{alt:"noFoundGnome",src:"https://i.pinimg.com/564x/5d/ef/7b/5def7b355868d740e6dcd32cd6038e63.jpg"})):r.a.createElement("ul",{className:"gnome__list"},e.map(function(e,t){return r.a.createElement("li",{className:"gnome glowButton",key:t},r.a.createElement(b,{name:e.name,image:e.thumbnail,professions:e.professions,friends:e.friends,age:e.age,height:e.height,weight:e.weight,hair_color:e.hair_color}))}))}}]),t}(n.Component),j=(a(29),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onKeySearch,a=e.userSearch;return r.a.createElement("div",{className:"app__filter-item"},r.a.createElement("label",{htmlFor:"input",className:"input"},r.a.createElement("input",{className:"app__filter-fullname",placeholder:"Search for your gnome",type:"text",onChange:t,value:a})))}}]),t}(n.Component)),O=(a(30),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader"})}}]),t}(n.Component)),w=(a(31),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={gnomesRawData:[],search:"",isLoading:!0},a.getInputSearch=a.getInputSearch.bind(Object(h.a)(Object(h.a)(a))),a.filterByFullName(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json").then(function(e){return e.json()}).then(function(t){var a=t.Brastlewark;setTimeout(function(){return e.setState({gnomesRawData:a,isLoading:!1})},2e3),e.saveData(a)})}},{key:"getSaveData",value:function(){var e=localStorage.getItem("allRawData");if(null!==e)return JSON.parse(e);this.componentDidMount()}},{key:"saveData",value:function(e){localStorage.setItem("allRawData",JSON.stringify(e))}},{key:"getInputSearch",value:function(e){var t=e.currentTarget.value;this.setState({search:t})}},{key:"filterByFullName",value:function(){var e=this;return this.state.gnomesRawData.filter(function(t){return!!t.name.toLocaleLowerCase().includes(e.state.search.toLocaleLowerCase())})}},{key:"render",value:function(){var e=this.filterByFullName();return r.a.createElement("div",{className:"app__welcoming"},r.a.createElement("header",{className:"app__header"},r.a.createElement("h1",{className:"app__header-title"},"Brastlewark Population"),r.a.createElement(j,{onKeySearch:this.getInputSearch,userSearch:this.state.search})),r.a.createElement("main",null,r.a.createElement("div",{className:"app__main"},this.state.isLoading?r.a.createElement(O,null):r.a.createElement(_,{gnomesResults:e}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.425127d7.chunk.js.map