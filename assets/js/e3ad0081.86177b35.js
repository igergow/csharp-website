"use strict";(self.webpackChunkjava_lessons=self.webpackChunkjava_lessons||[]).push([[9017],{9956:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=i(5893),s=i(1151);const r={id:1,slug:"/mvc/01-intro",title:"\u041e\u0441\u043d\u043e\u0432\u0438 \u043d\u0430 MVC \u0432 C#",description:"\u041e\u0432\u043b\u0430\u0434\u0435\u0439\u0442\u0435 MVC \u0432 C# \u0441 \u043d\u0430\u0448\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0438 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f. \ud83e\udde9 \u041f\u0440\u0435\u0432\u044a\u0440\u043d\u0435\u0442\u0435 \u0442\u0435\u043e\u0440\u0438\u044f\u0442\u0430 \u0432 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0440\u0430\u0437\u0432\u0438\u0439\u0442\u0435 \u0443\u043c\u0435\u043d\u0438\u044f, \u0446\u0435\u043d\u0435\u043d\u0438 \u0432 \u0443\u0435\u0431 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430. \u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u043e \u0437\u0430 \u0432\u0441\u0438\u0447\u043a\u0438 \u043d\u0438\u0432\u0430.",tags:["\u043b\u0435\u043a\u0446\u0438\u0438","mvc","\u0443\u0435\u0431"]},c=void 0,o={id:"extended/mvc/1",title:"\u041e\u0441\u043d\u043e\u0432\u0438 \u043d\u0430 MVC \u0432 C#",description:"\u041e\u0432\u043b\u0430\u0434\u0435\u0439\u0442\u0435 MVC \u0432 C# \u0441 \u043d\u0430\u0448\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0438 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f. \ud83e\udde9 \u041f\u0440\u0435\u0432\u044a\u0440\u043d\u0435\u0442\u0435 \u0442\u0435\u043e\u0440\u0438\u044f\u0442\u0430 \u0432 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0440\u0430\u0437\u0432\u0438\u0439\u0442\u0435 \u0443\u043c\u0435\u043d\u0438\u044f, \u0446\u0435\u043d\u0435\u043d\u0438 \u0432 \u0443\u0435\u0431 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430. \u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u043e \u0437\u0430 \u0432\u0441\u0438\u0447\u043a\u0438 \u043d\u0438\u0432\u0430.",source:"@site/docs/extended/mvc/01-intro.md",sourceDirName:"extended/mvc",slug:"/mvc/01-intro",permalink:"/mvc/01-intro",draft:!1,unlisted:!1,tags:[{label:"\u043b\u0435\u043a\u0446\u0438\u0438",permalink:"/tags/\u043b\u0435\u043a\u0446\u0438\u0438"},{label:"mvc",permalink:"/tags/mvc"},{label:"\u0443\u0435\u0431",permalink:"/tags/\u0443\u0435\u0431"}],version:"current",sidebarPosition:1,frontMatter:{id:"1",slug:"/mvc/01-intro",title:"\u041e\u0441\u043d\u043e\u0432\u0438 \u043d\u0430 MVC \u0432 C#",description:"\u041e\u0432\u043b\u0430\u0434\u0435\u0439\u0442\u0435 MVC \u0432 C# \u0441 \u043d\u0430\u0448\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0438 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f. \ud83e\udde9 \u041f\u0440\u0435\u0432\u044a\u0440\u043d\u0435\u0442\u0435 \u0442\u0435\u043e\u0440\u0438\u044f\u0442\u0430 \u0432 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0440\u0430\u0437\u0432\u0438\u0439\u0442\u0435 \u0443\u043c\u0435\u043d\u0438\u044f, \u0446\u0435\u043d\u0435\u043d\u0438 \u0432 \u0443\u0435\u0431 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430. \u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u043e \u0437\u0430 \u0432\u0441\u0438\u0447\u043a\u0438 \u043d\u0438\u0432\u0430.",tags:["\u043b\u0435\u043a\u0446\u0438\u0438","mvc","\u0443\u0435\u0431"]},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0441\u043d\u043e\u0432\u0438 \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442",permalink:"/mvc/00-internet"},next:{title:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0438 \u0432 MVC",permalink:"/mvc/02-controllers"}},t={},d=[{value:"\u041e\u0441\u043d\u043e\u0432\u0438 \u043d\u0430 MVC \u0432 C#",id:"\u043e\u0441\u043d\u043e\u0432\u0438-\u043d\u0430-mvc-\u0432-c",level:2},{value:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043d\u0430 MVC",id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430-\u043d\u0430-mvc",level:3},{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043d\u0430 \u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438\u0442\u0435",id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u043d\u0430-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438\u0442\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0435\u043d \u041a\u043e\u0434",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043d-\u043a\u043e\u0434",level:3},{value:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 - HomeController.cs",id:"\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440---homecontrollercs",level:4},{value:"\u041c\u043e\u0434\u0435\u043b - User.cs",id:"\u043c\u043e\u0434\u0435\u043b---usercs",level:4},{value:"\u0418\u0437\u0433\u043b\u0435\u0434 - Index.cshtml",id:"\u0438\u0437\u0433\u043b\u0435\u0434---indexcshtml",level:4},{value:"Startup.cs",id:"startupcs",level:4},{value:"appsettings.json",id:"appsettingsjson",level:4},{value:"\u0414\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0438 \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438 \u0432 MVC",id:"\u0434\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438-\u0432-mvc",level:3},{value:"\u0420\u0443\u0442\u0438\u0440\u0430\u043d\u0435 (Routing)",id:"\u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435-routing",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430 \u043a\u043e\u043d\u0432\u0435\u043d\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e \u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430-\u043a\u043e\u043d\u0432\u0435\u043d\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e-\u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435",level:5},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043d\u043e \u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043d\u043e-\u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435",level:5},{value:"\u041c\u043e\u0434\u0435\u043b\u043d\u043e \u0421\u0432\u044a\u0440\u0437\u0432\u0430\u043d\u0435 (Model Binding)",id:"\u043c\u043e\u0434\u0435\u043b\u043d\u043e-\u0441\u0432\u044a\u0440\u0437\u0432\u0430\u043d\u0435-model-binding",level:4},{value:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 \u041c\u043e\u0434\u0435\u043b\u0430 (Model Validation)",id:"\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f-\u043d\u0430-\u043c\u043e\u0434\u0435\u043b\u0430-model-validation",level:4},{value:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u043d\u0430 \u0418\u043d\u0436\u0435\u043a\u0446\u0438\u044f (Dependency Injection)",id:"\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u043d\u0430-\u0438\u043d\u0436\u0435\u043a\u0446\u0438\u044f-dependency-injection",level:4},{value:"\u0424\u0438\u043b\u0442\u0440\u0438 (Filters)",id:"\u0444\u0438\u043b\u0442\u0440\u0438-filters",level:4},{value:"\u041e\u0431\u043b\u0430\u0441\u0442\u0438 (Areas)",id:"\u043e\u0431\u043b\u0430\u0441\u0442\u0438-areas",level:4},{value:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",level:3},{value:"Web APIs",id:"web-apis",level:4},{value:"\u0422\u0435\u0441\u0442\u0432\u0430\u0435\u043c\u043e\u0441\u0442",id:"\u0442\u0435\u0441\u0442\u0432\u0430\u0435\u043c\u043e\u0441\u0442",level:4},{value:"Razor View Engine",id:"razor-view-engine",level:4},{value:"Strongly Typed Views",id:"strongly-typed-views",level:4},{value:"Tag Helpers",id:"tag-helpers",level:4},{value:"View Components",id:"view-components",level:4},{value:"\u0420\u0435\u0441\u0443\u0440\u0441\u0438 \u0437\u0430 \u0414\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u043e \u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0441\u0443\u0440\u0441\u0438-\u0437\u0430-\u0434\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u043e-\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u043e\u0441\u043d\u043e\u0432\u0438-\u043d\u0430-mvc-\u0432-c",children:"\u041e\u0441\u043d\u043e\u0432\u0438 \u043d\u0430 MVC \u0432 C#"}),"\n",(0,l.jsx)(n.p,{children:"MVC (Model-View-Controller) \u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435\u043d \u0448\u0430\u0431\u043b\u043e\u043d, \u0448\u0438\u0440\u043e\u043a\u043e \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d \u0432 \u0441\u043e\u0444\u0442\u0443\u0435\u0440\u043d\u043e\u0442\u043e \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0441\u0442\u0432\u043e, \u043e\u0441\u043e\u0431\u0435\u043d\u043e \u0437\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0443\u0435\u0431 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. MVC \u0440\u0430\u0437\u0434\u0435\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0442\u0430 \u043d\u0430 \u0442\u0440\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 - \u043c\u043e\u0434\u0435\u043b, \u0438\u0437\u0433\u043b\u0435\u0434 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440, \u043a\u043e\u0435\u0442\u043e \u043f\u043e\u043c\u0430\u0433\u0430 \u0437\u0430 \u043f\u043e\u0441\u0442\u0438\u0433\u0430\u043d\u0435 \u043d\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0438\u0442\u0435 (separation of concerns)."}),"\n",(0,l.jsx)(n.h3,{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430-\u043d\u0430-mvc",children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043d\u0430 MVC"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u041c\u043e\u0434\u0435\u043b (Model)"}),": \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0432\u0430 \u0441\u044a\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e, \u0431\u0438\u0437\u043d\u0435\u0441 \u043b\u043e\u0433\u0438\u043a\u0430\u0442\u0430 \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438\u0442\u0435, \u043a\u043e\u0438\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0432\u044a\u0440\u0448\u0430\u0442. \u041c\u043e\u0434\u0435\u043b\u0438\u0442\u0435 \u0441\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u043d\u0438 \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u0438\u0442\u0435 \u0438 \u0431\u0438\u0437\u043d\u0435\u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u0442\u0430."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u0418\u0437\u0433\u043b\u0435\u0434 (View)"}),": \u041e\u0442\u0440\u0430\u0437\u044f\u0432\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044f\u043d\u0435\u0442\u043e \u043d\u0430 \u0434\u0430\u043d\u043d\u0438 (UI). \u0418\u0437\u0433\u043b\u0435\u0434\u0438\u0442\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0442 Razor view engine \u0437\u0430 \u0432\u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 .NET \u043a\u043e\u0434 \u0432 HTML."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 (Controller)"}),": \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0432\u0430 \u0432\u0445\u043e\u0434\u0430 \u043e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f, \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0430 \u0441 \u043c\u043e\u0434\u0435\u043b\u0438\u0442\u0435 \u0438 \u0438\u0437\u0431\u0438\u0440\u0430 \u0438\u0437\u0433\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u043d\u0430-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438\u0442\u0435",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043d\u0430 \u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438\u0442\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u043d\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u043d\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0432 MVC \u043f\u0440\u043e\u0435\u043a\u0442 \u0432 C#:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:"MVCProject/\n\u2502\n\u251c\u2500\u2500 Controllers/\n\u2502   \u251c\u2500\u2500 HomeController.cs\n\u2502   \u2514\u2500\u2500 AccountController.cs\n\u2502\n\u251c\u2500\u2500 Models/\n\u2502   \u251c\u2500\u2500 User.cs\n\u2502   \u2514\u2500\u2500 Account.cs\n\u2502\n\u251c\u2500\u2500 Views/\n\u2502   \u251c\u2500\u2500 Home/\n\u2502   \u2502   \u251c\u2500\u2500 Index.cshtml\n\u2502   \u2502   \u2514\u2500\u2500 About.cshtml\n\u2502   \u2502\n\u2502   \u2514\u2500\u2500 Account/\n\u2502       \u251c\u2500\u2500 Login.cshtml\n\u2502       \u2514\u2500\u2500 Register.cshtml\n\u2502\n\u251c\u2500\u2500 wwwroot/\n\u2502   \u251c\u2500\u2500 css/\n\u2502   \u251c\u2500\u2500 images/\n\u2502   \u2514\u2500\u2500 js/\n\u2502\n\u251c\u2500\u2500 appsettings.json\n\u2514\u2500\u2500 Startup.cs\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043d-\u043a\u043e\u0434",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0435\u043d \u041a\u043e\u0434"}),"\n",(0,l.jsx)(n.h4,{id:"\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440---homecontrollercs",children:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 - HomeController.cs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:"// \u0412 \u043f\u0430\u043f\u043a\u0430\u0442\u0430 Controllers/\nusing Microsoft.AspNetCore.Mvc;\n\npublic class HomeController : Controller {\n    public IActionResult Index() {\n        return View(); // \u0412\u0440\u044a\u0449\u0430 View \u0437\u0430 \u043d\u0430\u0447\u0430\u043b\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u043c\u043e\u0434\u0435\u043b---usercs",children:"\u041c\u043e\u0434\u0435\u043b - User.cs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:"// \u0412 \u043f\u0430\u043f\u043a\u0430\u0442\u0430 Models/\npublic class User {\n    public string Name { get; set; }\n    public int Age { get; set; }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0438\u0437\u0433\u043b\u0435\u0434---indexcshtml",children:"\u0418\u0437\u0433\u043b\u0435\u0434 - Index.cshtml"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'\x3c!-- \u0412 \u043f\u0430\u043f\u043a\u0430\u0442\u0430 Views/Home/ --\x3e\n@{\n    ViewData["Title"] = "Home Page";\n}\n\n<div>\n    <h1>Welcome to the Home Page</h1>\n</div>\n'})}),"\n",(0,l.jsx)(n.h4,{id:"startupcs",children:"Startup.cs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\n\npublic class Startup {\n    public Startup(IConfiguration configuration) {\n        Configuration = configuration;\n    }\n\n    public void ConfigureServices(IServiceCollection services) {\n        services.AddControllersWithViews();\n    }\n\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {\n        // \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f\u0442\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"appsettingsjson",children:"appsettings.json"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information"\n    }\n  },\n  "AllowedHosts": "*"\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),": ",(0,l.jsx)(n.code,{children:"appsettings.json"})," \u0441\u044a\u0434\u044a\u0440\u0436\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0437\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e, \u043a\u0430\u0442\u043e \u043d\u0438\u0432\u0430 \u043d\u0430 \u043b\u043e\u0433\u0432\u0430\u043d\u0435 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438 \u0445\u043e\u0441\u0442\u043e\u0432\u0435."]}),"\n",(0,l.jsx)(n.h3,{id:"\u0434\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438-\u0432-mvc",children:"\u0414\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0438 \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438 \u0432 MVC"}),"\n",(0,l.jsx)(n.h4,{id:"\u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435-routing",children:"\u0420\u0443\u0442\u0438\u0440\u0430\u043d\u0435 (Routing)"}),"\n",(0,l.jsx)(n.p,{children:"ASP.NET Core MVC \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u043c\u043e\u0449\u043d\u0438 \u0440\u0443\u0442\u0438\u0440\u0430\u0449\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0438, \u043a\u043e\u0438\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430\u0442 \u0434\u0435\u0444\u0438\u043d\u0438\u0440\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u044f\u0441\u043d\u0438 \u0438 SEO-\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u0430\u043d\u0438 URL \u0430\u0434\u0440\u0435\u0441\u0438."}),"\n",(0,l.jsx)(n.h5,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430-\u043a\u043e\u043d\u0432\u0435\u043d\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e-\u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430 \u043a\u043e\u043d\u0432\u0435\u043d\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e \u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'endpoints.MapControllerRoute(\n    name: "default",\n    pattern: "{controller=Home}/{action=Index}/{id?}");\n'})}),"\n",(0,l.jsx)(n.h5,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043d\u043e-\u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043d\u043e \u0440\u0443\u0442\u0438\u0440\u0430\u043d\u0435:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'[Route("api/[controller]")]\npublic class ProductsController : Controller {\n    [HttpGet("{id}")]\n    public IActionResult GetProduct(int id) {\n        // ...\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u043c\u043e\u0434\u0435\u043b\u043d\u043e-\u0441\u0432\u044a\u0440\u0437\u0432\u0430\u043d\u0435-model-binding",children:"\u041c\u043e\u0434\u0435\u043b\u043d\u043e \u0421\u0432\u044a\u0440\u0437\u0432\u0430\u043d\u0435 (Model Binding)"}),"\n",(0,l.jsx)(n.p,{children:"\u041c\u043e\u0434\u0435\u043b\u043d\u043e\u0442\u043e \u0441\u0432\u044a\u0440\u0437\u0432\u0430\u043d\u0435 \u0432 ASP.NET Core MVC \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u0438 \u043e\u0442 HTTP \u0437\u0430\u044f\u0432\u043a\u0430\u0442\u0430 \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u043d\u0430 \u043c\u0435\u0442\u043e\u0434\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:"public async Task<IActionResult> Login(LoginViewModel model) {\n    // ...\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f-\u043d\u0430-\u043c\u043e\u0434\u0435\u043b\u0430-model-validation",children:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 \u041c\u043e\u0434\u0435\u043b\u0430 (Model Validation)"}),"\n",(0,l.jsx)(n.p,{children:"ASP.NET Core MVC \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 \u043c\u043e\u0434\u0435\u043b\u0430 \u0447\u0440\u0435\u0437 \u0434\u0435\u043a\u043e\u0440\u0430\u0446\u0438\u0438 \u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0438, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f\u0439\u043a\u0438 \u043a\u0430\u043a\u0442\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0430, \u0442\u0430\u043a\u0430 \u0438 \u0441\u044a\u0440\u0432\u044a\u0440\u043d\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:"public class LoginViewModel {\n    [Required]\n    [EmailAddress]\n    public string Email { get; set; }\n\n    [Required]\n    [DataType(DataType.Password)]\n    public string Password { get; set; }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u043d\u0430-\u0438\u043d\u0436\u0435\u043a\u0446\u0438\u044f-dependency-injection",children:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u043d\u0430 \u0418\u043d\u0436\u0435\u043a\u0446\u0438\u044f (Dependency Injection)"}),"\n",(0,l.jsx)(n.p,{children:"ASP.NET Core MVC \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430 \u0432\u0433\u0440\u0430\u0434\u0435\u043d\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u043d\u0430 \u0438\u043d\u0436\u0435\u043a\u0446\u0438\u044f, \u043a\u043e\u044f\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u043d\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0438\u0442\u0435 \u0434\u0430 \u0437\u0430\u044f\u0432\u044f\u0432\u0430\u0442 \u043d\u0443\u0436\u043d\u0438\u0442\u0435 \u0438\u043c \u0443\u0441\u043b\u0443\u0433\u0438 \u0447\u0440\u0435\u0437 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0438."}),"\n",(0,l.jsx)(n.h4,{id:"\u0444\u0438\u043b\u0442\u0440\u0438-filters",children:"\u0424\u0438\u043b\u0442\u0440\u0438 (Filters)"}),"\n",(0,l.jsx)(n.p,{children:"\u0424\u0438\u043b\u0442\u0440\u0438\u0442\u0435 \u0432 MVC \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430\u0442 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u043f\u0440\u0435\u0434\u0438 \u0438\u043b\u0438 \u0441\u043b\u0435\u0434 \u043c\u0435\u0442\u043e\u0434\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0438\u0442\u0435. \u0422\u0435 \u0441\u0430 \u043f\u043e\u043b\u0435\u0437\u043d\u0438 \u0437\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0430 cross-cutting concerns \u043a\u0430\u0442\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0430 \u0433\u0440\u0435\u0448\u043a\u0438."}),"\n",(0,l.jsx)(n.h4,{id:"\u043e\u0431\u043b\u0430\u0441\u0442\u0438-areas",children:"\u041e\u0431\u043b\u0430\u0441\u0442\u0438 (Areas)"}),"\n",(0,l.jsx)(n.p,{children:"\u041e\u0431\u043b\u0430\u0441\u0442\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f\u0442 \u043d\u0430\u0447\u0438\u043d \u0437\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u043d\u0435 \u043d\u0430 \u0433\u043e\u043b\u044f\u043c\u043e ASP.NET Core MVC \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u043e-\u043c\u0430\u043b\u043a\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0438."}),"\n",(0,l.jsx)(n.h3,{id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"}),"\n",(0,l.jsx)(n.p,{children:"MVC \u0432 C# \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f \u044f\u0441\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u043b\u043e\u0433\u0438\u043a\u0430\u0442\u0430, \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0441\u043a\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u0434\u0430\u043d\u043d\u0438. \u0422\u043e\u0432\u0430 \u0443\u043b\u0435\u0441\u043d\u044f\u0432\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430, \u043f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430\u0442\u0430 \u0438 \u0442\u0435\u0441\u0442\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0442\u0430, \u043a\u0430\u0442\u043e \u0441\u044a\u0449\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u043e\u0434\u043e\u0431\u0440\u044f\u0432\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u0442\u0430 \u0438 \u043c\u043e\u0434\u0443\u043b\u0430\u0440\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u043a\u043e\u0434\u0430. \u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 MVC \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\u0442\u0430 \u0432 C# \u043e\u0441\u0438\u0433\u0443\u0440\u044f\u0432\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u0438\u043c\u0441\u0442\u0432\u0430, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e:"}),"\n",(0,l.jsx)(n.h4,{id:"web-apis",children:"Web APIs"}),"\n",(0,l.jsx)(n.p,{children:"ASP.NET Core MVC \u043e\u0441\u0438\u0433\u0443\u0440\u044f\u0432\u0430 \u043e\u0442\u043b\u0438\u0447\u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0437\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 Web APIs, \u043a\u043e\u0438\u0442\u043e \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043e\u0431\u0441\u043b\u0443\u0436\u0432\u0430\u0442 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0438, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0431\u0440\u0430\u0443\u0437\u044a\u0440\u0438 \u0438 \u043c\u043e\u0431\u0438\u043b\u043d\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u041f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430 \u043d\u0430 HTTP content-negotiation \u0441 \u0432\u0433\u0440\u0430\u0434\u0435\u043d\u0430 \u043f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430 \u0437\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u0438 \u043a\u0430\u0442\u043e JSON \u0438\u043b\u0438 XML."}),"\n",(0,l.jsx)(n.li,{children:"\u041b\u0435\u0441\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430 \u0437\u0430 Cross-Origin Resource Sharing (CORS)."}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u0442\u0435\u0441\u0442\u0432\u0430\u0435\u043c\u043e\u0441\u0442",children:"\u0422\u0435\u0441\u0442\u0432\u0430\u0435\u043c\u043e\u0441\u0442"}),"\n",(0,l.jsx)(n.p,{children:"\u0424\u0440\u0435\u0439\u043c\u0443\u044a\u0440\u043a\u044a\u0442 \u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0430\u043d \u0441 \u043c\u0438\u0441\u044a\u043b \u0437\u0430 \u0442\u0435\u0441\u0442\u0432\u0430\u0435\u043c\u043e\u0441\u0442, \u043a\u0430\u0442\u043e \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430 \u0432\u0433\u0440\u0430\u0434\u0435\u043d\u0430 \u043f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430 \u0437\u0430 unit \u0438 integration \u0442\u0435\u0441\u0442\u043e\u0432\u0435."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438 \u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u043d\u0430 \u0438\u043d\u0436\u0435\u043a\u0446\u0438\u044f \u0443\u043b\u0435\u0441\u043d\u044f\u0432\u0430 unit \u0442\u0435\u0441\u0442\u0432\u0430\u043d\u0435\u0442\u043e."}),"\n",(0,l.jsx)(n.li,{children:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0438 \u043a\u0430\u0442\u043e TestHost \u0438 InMemory \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u044a\u0440 \u0437\u0430 Entity Framework \u0443\u043b\u0435\u0441\u043d\u044f\u0432\u0430\u0442 integration \u0442\u0435\u0441\u0442\u0432\u0430\u043d\u0435\u0442\u043e."}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"razor-view-engine",children:"Razor View Engine"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Razor \u0435 \u043c\u043e\u0449\u0435\u043d \u0438 \u0433\u044a\u0432\u043a\u0430\u0432 \u0448\u0430\u0431\u043b\u043e\u043d\u0435\u043d \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b \u0437\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u043d HTML."}),"\n",(0,l.jsx)(n.li,{children:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u0441\u043c\u0435\u0441\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 C# \u043a\u043e\u0434 \u0441 HTML, \u0443\u043b\u0435\u0441\u043d\u044f\u0432\u0430\u0439\u043a\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0441\u043a\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438."}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"strongly-typed-views",children:"Strongly Typed Views"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Razor view-\u0442\u0430\u0442\u0430 \u0432 MVC \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0441\u0442\u0440\u043e\u0433\u043e \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u0430\u043d\u0438, \u043a\u043e\u0435\u0442\u043e \u043f\u043e\u0434\u043e\u0431\u0440\u044f\u0432\u0430 \u0441\u0438\u0433\u0443\u0440\u043d\u043e\u0441\u0442\u0442\u0430 \u0438 \u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0442\u0430 \u043f\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430."}),"\n",(0,l.jsx)(n.li,{children:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043f\u043e\u0434\u0430\u0432\u0430\u0442 \u0441\u0442\u0440\u043e\u0433\u043e \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u0430\u043d\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u043a\u044a\u043c view-\u0442\u0430\u0442\u0430, \u043e\u0441\u0438\u0433\u0443\u0440\u044f\u0432\u0430\u0439\u043a\u0438 type-checking \u0438 IntelliSense \u0432 Visual Studio."}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"tag-helpers",children:"Tag Helpers"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Tag Helpers \u0443\u043b\u0435\u0441\u043d\u044f\u0432\u0430\u0442 \u0434\u0435\u0444\u0438\u043d\u0438\u0440\u0430\u043d\u0435\u0442\u043e \u043d\u0430 HTML \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438 \u0441\u044a\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0435\u043d \u043a\u043e\u0434."}),"\n",(0,l.jsx)(n.li,{children:"\u0422\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f\u0442 HTML-friendly \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u0431\u043e\u0433\u0430\u0442 IntelliSense \u0437\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 Razor markup."}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"view-components",children:"View Components"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"View Components \u0441\u0430 \u043f\u043e\u0434\u043e\u0431\u043d\u0438 \u043d\u0430 partial views, \u043d\u043e \u0441\u044a\u0441 \u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430."}),"\n",(0,l.jsx)(n.li,{children:"\u0422\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430\u0442 \u043f\u0430\u043a\u0435\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u0440\u0435\u043d\u0434\u0438\u0440\u0430\u043d\u0435 \u0438 \u043d\u0435\u0439\u043d\u043e\u0442\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u0440\u0435\u0441\u0443\u0440\u0441\u0438-\u0437\u0430-\u0434\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u043e-\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0441\u0443\u0440\u0441\u0438 \u0437\u0430 \u0414\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u043e \u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/mvc/overview",children:"ASP.NET Core MVC Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/web-api/",children:"Building Web APIs with ASP.NET Core MVC"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u043a\u0438 \u0442\u0435\u0437\u0438 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u0438 \u0442\u0435\u0445\u043d\u0438\u043a\u0438, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u0446\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0434\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u0430\u0442 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0438\u0440\u0430\u0442 \u0441\u0432\u043e\u0438\u0442\u0435 \u0443\u0435\u0431 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043a\u0430\u0442\u043e \u0441\u044a\u0449\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430\u0442 \u0447\u0438\u0441\u0442 \u043a\u043e\u0434 \u0438 \u043b\u0435\u0441\u043d\u0430 \u043f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430. MVC \u043f\u0430\u0442\u0435\u0440\u043d\u044a\u0442 \u0432 C# \u0435 \u043c\u043e\u0449\u0435\u043d \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u043a\u043e\u0439\u0442\u043e \u0443\u043b\u0435\u0441\u043d\u044f\u0432\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u043c\u043e\u0434\u0435\u0440\u043d\u0438, \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u043d\u0438 \u0438 \u043b\u0435\u0441\u043d\u0438 \u0437\u0430 \u0440\u0430\u0437\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0443\u0435\u0431 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var l=i(7294);const s={},r=l.createContext(s);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);