(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),i=(a(46),a(47),a(11)),l=a(3),s=a(10);var m=function(){return o.a.createElement("div",{style:{width:"100%",margin:"auto"}},o.a.createElement(l.Grid,{className:"landing-grid"},o.a.createElement(l.Cell,{col:12},o.a.createElement("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Favatar-circle%2F248%2FBoy_man_male_mustache_smile_happy_adult_Avatar_-512.png&f=1&nofb=1",alt:"avatar man",className:"avatar-img"}),o.a.createElement("div",{className:"banner-text"},o.a.createElement("h1",null,"Fullstack dev"),o.a.createElement("hr",null),o.a.createElement("p",null,"HTML | CSS | Boostrap | JS | React | Rails | RoR"),o.a.createElement("div",{className:"social-links"},o.a.createElement("a",{href:"https://www.linkedin.com/in/juanparedess/",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:" fa fa-linkedin-square","aria-hidden":"true"})),o.a.createElement("a",{href:"https://github.com/Nerfi",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))},d=a(40),u=a(37),p=function(e){return o.a.createElement("div",null,o.a.createElement(l.Card,{key:e.identifier,shadow:5,style:{minWidth:"450",margin:"auto"}},o.a.createElement(l.CardTitle,{style:{color:"#fff",height:"176px",background:e.backgroundImg}},e.name),o.a.createElement(l.CardText,null,e.description),o.a.createElement(l.CardActions,{border:!0},o.a.createElement(l.Button,{colored:!0},o.a.createElement("a",{href:"https//:github.com/mjachowdhury/myPortfolio"},"Github")),o.a.createElement(l.Button,{colored:!0},"Live Demo"))))},h=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],c=t[1];return o.a.createElement("div",null,o.a.createElement(l.Tabs,{activeTab:a,key:a.id,onChange:function(e){return c(e)},ripple:!0},o.a.createElement(l.Tab,null,"Ruby"),o.a.createElement(l.Tab,null,"React"),o.a.createElement(l.Tab,null,"Rails")),o.a.createElement(l.Grid,null,o.a.createElement(l.Cell,{col:12},u[a].map((function(e){return o.a.createElement("div",{className:"projects-grid"},o.a.createElement(p,{identifier:e.id,name:e.name,backgroundImg:e.image,description:e.description}))})))))};var f=function(){return o.a.createElement("div",{className:"main-div"},o.a.createElement(l.Grid,{className:"contact-grid"},o.a.createElement(l.Cell,{col:6},o.a.createElement("h2",null,"Juan Paredes"),o.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png",alt:"avatar",style:{height:"250px"}}),o.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"2em",marginLeft:"-10px"}},"Ruby on Rails/ React software developer with a clear vision. My objective is not only to produce code, but to build awesome products in which I believe. The part I love most about coding is the adrenaline you have when you solve a problem , coming up with fun ideas, implementing them, and seeing my idea work. Also have a big interest in all related with A.I, now looking at working as a full-stack developer as it fits all of my career requirements: challenging work, working with a team and having an impact")),o.a.createElement(l.Cell,{col:6},o.a.createElement("h2",null,"Contact Me"),o.a.createElement("hr",null),o.a.createElement("div",{className:"contact-list"},o.a.createElement(l.List,null,o.a.createElement(l.ListItem,null,o.a.createElement(l.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},o.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"(+34) 666-85-69-01")),o.a.createElement(l.ListItem,null,o.a.createElement(l.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},o.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"juanchuu.jfpc@gmail.com")),o.a.createElement(l.ListItem,null,o.a.createElement(l.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},o.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"}),o.a.createElement("a",{href:"https://www.linkedin.com/in/juanparedess/",rel:"noopener noreferrer",target:"_blank"},"Juan Paredes"))),o.a.createElement(l.ListItem,null,o.a.createElement(l.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},o.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"}),o.a.createElement("a",{href:"https://github.com/Nerfi",rel:"noopener noreferrer",target:"_blank"},"Github"))))))))};var g=function(){return o.a.createElement(i.a,{basename:"/reactportfolio"},o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:m}),o.a.createElement(s.a,{exact:!0,path:"/Projects",component:h}),o.a.createElement(s.a,{exact:!0,path:"/Contact",component:f})))};var F=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"demo-big-content"},o.a.createElement(l.Layout,null,o.a.createElement(l.Header,{className:"header-color",title:o.a.createElement(i.b,{style:{textDecoration:"none",color:"white"},to:"/"}," MyPortfolio "),scroll:!0},o.a.createElement(l.Navigation,null,o.a.createElement(i.b,{to:"/Projects"},"Projects"),o.a.createElement(i.b,{to:"/Contact"},"Contact"))),o.a.createElement(l.Drawer,{title:"Tit"},o.a.createElement(l.Navigation,null,o.a.createElement(i.b,{to:"/Projects"},"Projects"),o.a.createElement(i.b,{to:"/Contact"},"Contact"))),o.a.createElement(l.Content,null,o.a.createElement("div",{className:"page-content"}),o.a.createElement(g,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(98),a(99);r.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e){e.exports=JSON.parse('[[{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sitepoint.com%2Fwp-content%2Fthemes%2Fsitepoint%2Fassets%2Fimages%2Ficon.ruby.png&f=1&nofb=1)center / cover","name":"Rails Projects","description":"some description over here","id":1},{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sitepoint.com%2Fwp-content%2Fthemes%2Fsitepoint%2Fassets%2Fimages%2Ficon.ruby.png&f=1&nofb=1)center / cover","name":"Rails projects","description":"some description over here","id":2},{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sitepoint.com%2Fwp-content%2Fthemes%2Fsitepoint%2Fassets%2Fimages%2Ficon.ruby.png&f=1&nofb=1)center / cover","name":"Rails projects","description":"some description over here","id":3},{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sitepoint.com%2Fwp-content%2Fthemes%2Fsitepoint%2Fassets%2Fimages%2Ficon.ruby.png&f=1&nofb=1)center / cover","name":"Rails projects","description":"some description over here","id":4}],[{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F640px-React-icon.svg.png&f=1&nofb=1) center / cover","name":"React section project","description":"some react description to be honest","id":5},{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F640px-React-icon.svg.png&f=1&nofb=1) center / cover","name":"React section project","description":"some react description to be honest","id":6},{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F640px-React-icon.svg.png&f=1&nofb=1) center / cover","name":"React section project","description":"some react description to be honest","id":7}],[{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnp0.stackassets.com%2Fa83017bbc3c2d2da0874e0dd4a04bf1dedc6f962%2Fstore%2F71d2ebdab71bb55e3ec09e8e61cce8ff95e2c73932770a94608ee58419d2%2F1323_RubyonRailsRookietoRockstar_MF.jpg&f=1&nofb=1) center / cover","name":"Rails section project","description":"some react description to be honest","id":8},{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnp0.stackassets.com%2Fa83017bbc3c2d2da0874e0dd4a04bf1dedc6f962%2Fstore%2F71d2ebdab71bb55e3ec09e8e61cce8ff95e2c73932770a94608ee58419d2%2F1323_RubyonRailsRookietoRockstar_MF.jpg&f=1&nofb=1) center / cover","name":"Rails section project","description":"some react description to be honest","id":9},{"image":"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnp0.stackassets.com%2Fa83017bbc3c2d2da0874e0dd4a04bf1dedc6f962%2Fstore%2F71d2ebdab71bb55e3ec09e8e61cce8ff95e2c73932770a94608ee58419d2%2F1323_RubyonRailsRookietoRockstar_MF.jpg&f=1&nofb=1) center / cover","name":"Rails section project","description":"some Rails description to be honest","id":10}]]')},41:function(e,t,a){e.exports=a(100)},46:function(e,t,a){},47:function(e,t,a){}},[[41,1,2]]]);
//# sourceMappingURL=main.420193dd.chunk.js.map